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
    "2agmGsTsfWNZ1t37j6gLszzJEYhefQwLsWA4WnSM2UhGeLSvWCkQhLhri9LfaoQLqxb3Uq3tkr451tdnF33WTwgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtkLxczJ8or1d57e4Li9rEvHX99DA2G4Zao4VxKzmhrAVAzFUmNWfZUz4bnRw7xfmB7e5ZobEkJzmLcVmADtxW3",
  "key1": "nZQS62EzAE5oNNrgoZepk5gwaWZz69gKuCrwj8rTvphJYi4fip3BSveCcvM94hMtDa8zGGWHbPcWu8bq2yYpxhF",
  "key2": "65F8xAckTNbK4u26QdVtLWPoLUM2EA6t2a7hFsxJ9dhJ81D6pRTtXqgEsyRx85jfgieNvWb5GanEfkiFBvzK9kb5",
  "key3": "5fTaUTRxTJojLfiqFGRJzpQcKmAsB3gYqAwPRDtRg66TnCnJB7qrHTNWP3urtq8z5rcyX4xFpCC2j9DFWXi47rkm",
  "key4": "4AS5UNZUcdbm8Fz2r2o8KQrStzewX3KHgE9rV6y97eSkShgS9vsYEgknmMSem81zEcTBUmwpZ5nYN4a9yWahbsYV",
  "key5": "2oL69yzxBy2HnV1yfPKsJtP3zxiEDjPzV18YNJE1zDFXHfwVYxPcbSQkQxMKyYwYA2MWUwsYksWrZtrAoacWzrnn",
  "key6": "4MS6PGpCm2mwi6Z3d1dGsHh8RbvXLWxZ1KMWs6oKpZro2vsSKXafsWx42KsXdmRiXbNZ1kMgbmGGde681TUAsGhx",
  "key7": "8QuTua36VMGes1pX4vKkiBmZxL7ETtmG3kCN7zBm8FLH7zfVTNLcpoK1m7ZziJsVox9d4Tt93f5PqqeqTcR4ZmL",
  "key8": "6ykEHHbYjMMkRkDHydpLk8FKs7zXue44fmHfVAgJeQcQ5txS1YQzHAYZV5SxDNZC8GqxGDFAv5gxg8pRrCzvHYK",
  "key9": "4Yv4QyZMvUVhmSrhvACcWW6u76DYEaSwG11Vj526RiDjCSRbuWYsME81NRCxTK8SkCRXajnFxm1gPyJZnDv57FqQ",
  "key10": "q6UZbJTLdujwAaCJbGUfN7f8F5Yz85GjWvuLE6mNs8u6ZuxevgfaX3EfKBcGtTdrgQGdKcndMPBHRLqQbdNytDN",
  "key11": "2r8uytqxhK4edkUkNyjqncQU8fsLd2Ly5suFbbM88nNYNJyPsKPT3DTrfYoWSvRfbZwkRvYMHLGLkBzDjbXm3cZS",
  "key12": "4NQryKCV2tGgEHznk37y4KT1QqWFWw6TjR6hzUG9paRW5BQekF165Sbc1h9GUZfRvRTMgW42N1pJNvdn7vWSk6p4",
  "key13": "2yCT1P6mbTyFmTicZf7fRWsFidpJm4YhbtmDnPG8KH8xLjPkd1ZjxT3rJQyqRtTycNcVRJeh2pnQZYr9rxSrttGA",
  "key14": "TXNq2HbGXP2X2VEiP3MmAxxYQNNeX8UM9ez1MZHhdRKH1uMZamA2LqKvkijbyKLWjhZcr9bstkgJ54BpqoUTLDp",
  "key15": "3iTvv21YafeUBKRsyT7uxzBs39xYs55HwChnYAbfGdMAetcq6Tg5ZWCdywnzYfozLETXmnZ1q7xjCn797fdgXejk",
  "key16": "2iGSutyjTzLmj5syPZ8mzanza8rDCxzhoekjZfBah8nt4AUVA4WR1Zw6kjCzYUEqX1DqgLmzzQeyRuwmNWtWepRQ",
  "key17": "FMXFkRcABpr9Wg9M7XvBtM4RtL2EJe1jbbRxc4REuZVfKzLCHYibT7BksMNnQRo7J8QoTjHhgSJJBxL779QUNJ3",
  "key18": "5pqvBzZYU9stRp8p8FBHVr72gykTrNxThymiN5MS5LgkhbzAmzp7rgVuUJJeSqcJCML5644GMwzgS9KefMLhbcUD",
  "key19": "5WbEFhYsmEGGhDx5gAn6tdvCqF1rymkGojxFarWBjX9GkZvaHLX1qZBHS8QuLLyFveXuk8NUH1ZrdMWij9MgJZo1",
  "key20": "yt4dA7kHdHjVPLNdLYQXMVEMW8adbEQ3qZR8Tor3jgSGU126ZYyJ3chpojiv1RHnRtdtFmDDSTM7YFs4vthjrND",
  "key21": "5oeGYQDJydUbk4n6v77Jae6mr7MNC2gfULVRCyViUYiJXVW6GW6nsGHocmA6T66T5SESnNDk29gpv4i89TSZ2xsK",
  "key22": "5wWn3GSwHHhRAAkdAAdZC5mMUgsRUKPqftEi9Tgj7W4r2SyCcnDHx1rkX2DcVaQp7xuNixjGYWKfoHZi2X4xJHNE",
  "key23": "5N4gPXXBXxLkcaa7XZZRp2wFL45Fag1ji6z5C33aU5iRBzWexpgo9vbHBywPr1T99Wog8j3R3BR5xTfFW8eMksjo",
  "key24": "5hpVDBRh76GeE6eaFw6vtqyZ2vFnYgazrHgFM5DjTiBcw7PRRYeAyrYR9vwVS33HYcYuxADCVbUX4hz5jprGWr9X",
  "key25": "3KN8fY2GGaUMd1ZtdMo3Riw9G2iiG7vgqzJcGzkkqayHaLTdXxowXxFz7g3sqpN9Yz9T1E9qPK7LS78gZp2CeyzZ",
  "key26": "2NKornxc9LYwymzLuFjLyQ8HAufjCfE2Mgg2ik3C4zFr7FoD2WexTfs3W5GrmpaznjNoMCgAbCvwz8HuGMLjYyos",
  "key27": "3n2agvG7HL3ticYJDJ7qHPBYqWXX24UEjbhDtc4s6MRiE7sPNmUWausFvpQ2mpP7dTQ2V3Suwhg1baWeQHBns4fe",
  "key28": "2gqhJ4V7of246JVY2MjLj4DrRKU3coFyAmg4uBRKYtdf6KkX9gUMiaZvkRNUnM4cQSxBXh6RemKJhhttL89PV5y1",
  "key29": "32vkfmjLsigbWC3Zr8dFcwYShCKfwqLEMxy37Koq4yLaVJPHDiPfqXv2XQLTp35gQbjnwfhSrEAtyJPUbrHqhG7L",
  "key30": "5Xhegzq1FEPpZaYczLoGCcftQgAqZvd9FRoVS23rjb5g65acHDsLzdJkeRxqF55qPWppeb34MsNv5kLofjkyaBFo",
  "key31": "5FSk8r7SQrkc6p7R3yTjqQdegarqDEYvn6jcuSYb1uH8vfCciWRC9AVP2vecyRwQP2P4dx11pcVyXWdxFFavigoV",
  "key32": "4gmSqKmHbk9x3XzSnGqTmBqGFj582JwZLoBttzBdkSUz3MVgUizifwfg1uHdt7veZuBpzx3iTQQB7nmHSXtX8VfC",
  "key33": "329fVhwLxsG2ofWQJGJuRYYT2wYJ7nP7GHnKkpBN7Q3uQjTmrsEt1tGDgoquZcezHDNRp6wcbbk9gsne6fnP5wN4",
  "key34": "3ZAJtz8yatze75CLBozNm4Z5gX9bTyU2wo2bMkPp1tLQCwKLE1zjGvuLisADc3iRtRTBSK4iijSCZ3nEYLHjvueD"
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
