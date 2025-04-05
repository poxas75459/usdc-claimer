/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5sLvURpbGjCV1FFjNbKS4PHCb2ffL7u9q2iECfqeyjccDAQiZLNksxPuUCgZBmzPLj44JgKcE1ZGpkdJbRA1gs3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHTNqxRNYkoTj8q4e1D4pFLcSZbP9ihUtkScfYZqHU4hjk9JR8vCBRN8yZjB91MN3ufLPA6VVcDkwyaoKADcVP7",
  "key1": "5uHLbgpu6cfkw4jHhqvsZCpbetoWUkpSHjYj9oASAVWBvPxWvTJbXC28hSpWPqJZSdUDH6SEwx51dSJMkCxtWiPg",
  "key2": "4hswCjza7zbpXyeHgqMd816imXMSSp4uW8CyHTL7qkv7jN7Gy4GCgFBv3RUBXBpL3UvBAzgXoGmuE8Uhu37Mhiur",
  "key3": "2RU88d6ndfHcrJkMSrEfC2LXDEjkKCi2vVfYFuFYJyPjnrZ39xaC7MFbqFzoiFdtmXNh9gheKNg21rsnPQnPQJwe",
  "key4": "3vZAiVjy7DCj4tgkam4Ro8QRkMU3R31Xp4UtGTKs2KsxdKmEYYCCtAhTyun9dAJeTYZpeZmRGRHbg1cEBdxo8hJM",
  "key5": "5TMAHrvRrrrAvDWZnmf78Qpg7jDmuYdXUJv5EpSFSkDYwEvQwjENow8b3MACYLTHbnFMJzuKgNcu8tTX1qHNrKJp",
  "key6": "2LUzbUMeZ9jUn6TijNdGHHVBF7mY5Cfsse5paAoRMJfxBcH94FrQVMGpF8EW7U9VDfr2Gy9JscWFaN5DM4hUoort",
  "key7": "3zPtSHAq2JE3hYa8AUb3hdfD8XDPrJzwSVifKYUfrevEwk4S7LL82NWZpBd9bfw6NVvurxgxW9KsAqoaakaf2rop",
  "key8": "3TbL25sU2om1q5mhRuqQ5tvXK6JdEjcJ6YHyuWEHfmAwTdAk5q9NEtpoD9HudnoqUxxRJaDXMocQo66A9YoDKwSm",
  "key9": "4qCQNP3nzNCTpQuqaC1xtiLYuPj4y9YrAhmuDVUyp3cMETxstZcdstpASVmYLnFXAodn1McJabY2JnenFmn3MPwr",
  "key10": "RXMM9gxungzz6ao7ZW1zc6e6wghihkjFyYV1oeddXUL8ZqJRaCD7NRCZoXZzK75T9oPtVSp8YRf2kUTm9H6ESNu",
  "key11": "5bDEA5b4LzDdLnk5NoGSvrsRKosG2i8gkPM3oemWusngShL2qMFDMsCAedVd2vqAw21KDAnrbJ7GAgCwqqot5o6",
  "key12": "DLiwivHtii7ydvNCqztw1ZSMiwvwF5UnWk3ZTDNbMn2jMb8edaEZ4pxw85uqEtC88PWWFsgWR9EdjF5EzkD9bzr",
  "key13": "5MnNg43fDFKC4P6k9sXPwraAbMBrmZjDu2QneNmuHMMwXGbH9VR1tHdDJiPMaw9c53BNyfS4yF6wG7kJHFyiLeV4",
  "key14": "4xbYTdUK3ETQRciAFZoT9tuLCd8hThazbhXxrLe632SKXPX5AXT23jLznPbLrNKVd9kiBah7cdQ9osJCEiKwERwd",
  "key15": "4AVyoRtBVz5XkZhupUBwF2gDrfRiwMrgGCSESkfS69amrGCYUQ1U7hytmSjapuCZp5VdVrwyWLi1YRi2amxYonfZ",
  "key16": "AKuXBYsDzwjbvFyzthd3K8KyspZjN41UKj1bSz4uCBotLfnpMUEf79NMYmPCBK6vcutT5wmbLbkKejc8CQMYNGw",
  "key17": "3vLuroqJeCy7tDr8n6TWYS2MTRnDCEc1F6hUMD4dH3bQxF9BEFz6shAhkkmihhZQA1Apx6gVuzvvGtXrHH6mUnTB",
  "key18": "4wSa8RCcWkxmR7mJ9RcSuPuhpN97PdQzSycBL4UFAACT6iNTAn7SnpNaxwESmBcNzcXqSeC2vwTWT9qay3ppsTbN",
  "key19": "QCkwjdHfz4D38PLYz6ysmJD4CuQjaaU9kY3zs8bgPHyXPx7RAW1LTSoc5WLv96HmBHmGG96xWTacumhYB6fpdqK",
  "key20": "3oTpYZ4cr4ZKFXJ1SPRjXz2z2z2KjwCJ9ZD3g7k4s4i5iL4ky7YSrcd5gXsJCbv9cwVwHhE6xww8N72qYxfHNZQy",
  "key21": "e9ZZz2wkKCknjzeXyFBdkBjZQcxX1MuhNyWbgCjqjUP4rvnTyw7M61bAjyrkkssYYfFQUi2M8pYPras1EoSaAjq",
  "key22": "4zZoVrcZL4UmpswbvUNEWVdg4QDtgBz8ak8P9YigpyJz3dsA4ECtdyRfHWBBWsZsLQh5jVFm4ay5WZfUynMJncne",
  "key23": "4pwDgp4hQxYosaVEF9ynvLi4Vto8umEtsxpVZhGbNW6Yv9MyVz4RGintU7JZmE862kYaGXyvrqCfPqaw6Pb1V9uD",
  "key24": "3WRiAaCFAXP6b7dFKNjJn7ykNWeWEYMmXkWHcRfbTNXeYAb63HMEnWPK536oUmNzoVd4VnKCH7eoufLBFkh2TQCZ",
  "key25": "3o76N8WceYWjpY5WXos9nLnfGAPM5qHiqpCkXzbQAo4hgzhzHgy33Vxp5DtVSrrXxP1GySwj6CVTGT4xPCWFAxoV",
  "key26": "3XUtsSU49nJCD8mnhep1HRxVEui9qxmkSmgrJ3RKT8a2s2PCcXqYP8LeViAzSnmjLtwT8UpGgErqaJpmGN8GHYyw",
  "key27": "5W9UhDkLC3PzKmTLz1MLC4JbpvFrpkgHDPgbyRBGLYVjMzEMMw9sdovDURQFf8Ei25bQAHwG8yu36PsT6XvHMfGR",
  "key28": "4HkUWm2hRgXi9CkeJfjKEnvhfQUffQoMTWRmFiemtqs8aeuQnkWapAXpgFWUNCfnWgmsk8je8hE5dWkZ8KyasUNS",
  "key29": "3EcvZB5cMynm1e3AKpGty7qHh1o2Le8cwZdZq1AxYLu1Ac43Nf3Gkm7xJFc6wnLD1AkUL8iU3JxohGL57MBZpWPF",
  "key30": "qukxu1DFHpZ2Jn4tosgZNKan49Yri96a7nWh2hmFgzPHfHM2DomjNexrZy5PrSzgkHmC2pu3fo4HhW56gLQo8He",
  "key31": "33d3vmcCvYL4ZnRHyvQcMV8EfvuBH2TSEzUgNUJ1Xdsq1mstN6QuMv2QkXAL7yi376kBwZZrX4zKW46irmmDKJLc",
  "key32": "4TDDhqnY4mCxFoKBo8ZVpDA116TtqJsc15dBxbrrPVni2C6bgjCQEqKnvVs9CEo5hpBpFVhkYRg1JQx3Xdi2cg2s",
  "key33": "3CU9wuJQC5teq9M5kHkTSj4zN35pT45NT2n87xo7sGz1jk3hbT1WHdZ67gYD519Jfk6NvKbN6RLqoJBs6niZFP5a",
  "key34": "2D3ZnVDWymoJ8FrtTxueVCYeStY392f9xsRtsGNhjjLvCBkq8rXyPXs457iT1XRzu8fRBbEpubsSTq5zo33xbMhj",
  "key35": "2yG8mRDCk1VLdJ14aVLqLKX8pfFHMc9wEDjYKCoxHb2yD52JHt7aboZqCdM2QdArAntQzQVnm7DrFXiwzqj7DbuX",
  "key36": "43Qwd6b4gtWei1x2WqJPtoTPcbWN9FC8so9aqsiPbkpjzZochppCFQpoWSRuMRKmuYuSQTL2HQQVFuAkFXMDM1wU",
  "key37": "2Q3z39aMKBHa49FCvSFpSP51SebM7hNJTGGy7JK7BGbhUZrjBacrpuDZcVsKiDzh9q8AVd5kRm7r9fKPDMUGv2BU",
  "key38": "2tUxrUau8Y9erEPKKiZyFAkWPMzPTRt6gr3X5h4mNwoQWGxPx3fs5evWQBfaAddyMM3gpZFEs29KTHoz366Ep3WS",
  "key39": "4TZLCrR1HXfANXSGK2yzDSjCnDLY5YpeVTSpecAcXDHYFLnHptTegvFMrs2DFPJgbFbhuH9PXLzmcxmBndGi3pTd",
  "key40": "4ZW3CB2vBfPQ9VuStKhAKSqPJNmyMogPrPVmjAPPfXp9R7GbDSSG42hGSKueioKucWEZkkWkZh4LPC5rh4xUAuBC",
  "key41": "3ccyVmV72RcwLuSbaTRWz8eREaBGDXJFFXdigoZAjt8p945tgxA4fuJsJQiPr5PeJNAC453i7Tj5ZUhPgRvHzY9E",
  "key42": "zQ1SoDrtVZ4zw8nD1bpcJeTnqbgDns5kJZCZBfc6CFXykJjXZgZcmpkgKtKJTizKuYEfbkDtBX3eNQmRNKFTK9t",
  "key43": "3KiVHPd5ZcMvU1sNzyAxw8GHr6pZJnvnmrz54arB4Mtt8133HQCVDZ54cVPLMR4vwk32CH1mrc2x9FyP9Vm5uqCW",
  "key44": "5o2e5D1iMX98a7QKy3KG5yWUo6BefobFfJzVij74WXpCawJtsjg99pq59zJbVCavbPpFzJwh56wfr9LRqbjhp3ii",
  "key45": "2VhQbJb97zZiAUAzwKJXzYTaUjw8K6kaSMifjKJ53xWC6P8GiME4VDmNDRY7qSMRgsL5nXN3nozw74TMazywR9Cg",
  "key46": "4qDXf1ZUktjyHn68vuLU5NP8UXRqS8FevfijCMvPrMCdSwgSMwkDVvThDU3hzAW1HkySavXAURgxhTas6o2YU1Qa",
  "key47": "57JkAH2UE6aBwXe9KBeuoCLc8sdU3TLg66WXJ8u6wWUMAbZmoNnHSn46Pw1P9Va3QRrZzoRaTGXTDJruWXWHnWi2",
  "key48": "3mvNQ3vk2qMRsg55N9vLSohFawHYc1oxpFQbSHgkzSMNHfhPyvMYUgUkwWMmyCfGmEEgR4dRVR1rrWTEXQWbGXjg"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
