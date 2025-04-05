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
    "2gJefNfTy4UP4GmbYTQrD1qa1FpNXqALy3cp4cW76UgEuNBjantfJy3Ng447tWXnQQLrJcP473iG8w3XHejW7KhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AX69XFiZd6isXHAnVEjaauRpnd336xvHSBagb7SmBqxEEZhoBtLRpXNyyXgx6gzwXC53usBqfSYoqmnQQm93D6a",
  "key1": "4ssEYw7prsXyvzFRbWWJ9G7dfpGVn2y67c5yyQdE1vMiE9oKVtDb1m4udkMK2s3D9FAQf9gAUNYWpXzrVJtAZp9n",
  "key2": "4ackEcJ1QmHcoLm4KxxJndZFdBRzDFY7xcWE7wgaqbsyhysRKZvcmEXL4hiLkK4Z6CrMGVDZYdYDepbf3ZeUovuF",
  "key3": "UVqJADVdGDqUtEVsoiY4q8r6yi7dy3H73BdWb3XevkBn23pfAgyxGwjuFhU2u8PXCBw2AVsFrc6BB6Auey9phv1",
  "key4": "3ZKckKTxdHE8EqTXhdx2hZoiVnoWSBcAJNQtm1RnbCiugpETTxJmy7qibp6SjeTMHPMtGDtvZY5mKqjnxRP4RKHu",
  "key5": "2cRqXWdVozfi1dcRnox1chvb59Kg6dWRf1DBPytSpnWUdKdkVEtv5GYvLwGF2kwXfhF7dL2v4AwdcvzBzrnbtZKH",
  "key6": "2SLwwwJLejj2QqwKcDv6ePEH5dLtgqAk3okT2ebgt3bVFkX6qUXDoCu2ffhfEF3spECyzpzR36PNByJqDBuuVS84",
  "key7": "3Zb97vFPpUkN5QZKpPYJ5J7SeBq8PssWZgCLBk3NtijC6Gn3TvPeD8PxaiZ3GQ7mckCsfsq4cWaGEuZmAzGc5f6o",
  "key8": "22BPUNWZdUfxUoFMyfwWvu7Knomc2jG4Lrc2dprYFCB1GqqozoTWKkiTSVAeTZ8GG7TAdKuhzZVnuJaXmQuXGTPv",
  "key9": "5JccD54PDNCp8KedQok34fCBgGmNSxJNYhopePn8Vd88nTFovTQtfFu56xj6NYKhkgD3VbhLrmR5g5z7eDZ2Njgk",
  "key10": "3KPaGk4n5Fceq2gJ8TiSLxDb6qLP5stw6nugRzEhznCnFNdaww13T7pDZstVtw9E2uTw5WFb8sTkA6m33GYuSNsK",
  "key11": "2z9uTE2CSZNsUDbKFWJNXtCpE6UbdcsQiKmgeWpJCKs2SWZVzyipTRCkFsMr6vxGEF1S1fsKFPYNz41MdGjVuda2",
  "key12": "3yYr1Jaj9sfnSVgWxAJpwAp9toBKFB6u9MgEWmKS76rrRQmz45ryBKQfxQ2yuWWTmK6cBA9aVmMa7JwboHfRhGL8",
  "key13": "3dHSGyzEQkNSsH9rbQrYPEFDPTxpX1yxeLk5VLb4xwmEne4g1gndyXY7yr7STuovi4tB3yLjCR5TTBNiN2mveJBd",
  "key14": "3FonpsmzadQxgeG7H82BqUxEYaSWBaVpeL9mYiay5148FXB9PMTF8F8QswaUYT9tMAx4rDBJmZoZzzYmGamNrJhB",
  "key15": "it54EjnhJ4FkC2FhxTsQ28sroZBxdMQKHXVt9yH1HH9SvMQfrQN3z584Xha4X3tQY9HoXuEu4fZ43JXK17Drw6C",
  "key16": "R23tu9XSKxRJq2HKyj3W4ibLMVWd3Bu7jpLnTx2e2xYk4oKGHLFiDgWoNV5RctUeyiSrd7KNLXvVURu6MQ5qiZV",
  "key17": "3VmS8fHUtDMP6U6WbD2dsRygw9GS8wuGUX41ruhY3rkGroCUDvNSmAnxqHzEH1RRLPTKg9Zx8Xk3W4xvx4yoCxWf",
  "key18": "1PuyYaXTK6UknQmrmSGGg58b2FqPSGgFhWnCzWuQdmSTFuG4yRs5pWD17n83cWGvwUbQUE9NN9HZLV2oxCrm8hh",
  "key19": "G2P6zbG8VZz825AD7b1MjoE1sjcZG3CEruc2aYS29iWreTcNzNqZAEJjzrnP58N4iw9fCkUXFftaDatfePeeZWu",
  "key20": "59v5ddjbUXx6xqodTyCKNqHbhaqt2gBCScxnz1FYpZkeWLUqC2Lyjw1a5CHwuVF2GkhTAUaSVZqPedTdup9uZgLR",
  "key21": "3B6bLpaCugY56dR8w73GeUurVpoJQRHPqrNW5sFw4RasMcmHjCjGGnU4majGQ22SqraThNAxubhsKDi3vJGqvHVr",
  "key22": "5Zbv7Q45TsMC5ADFdWMizf7M1uqFfCw322TwJ9pDH6jyPg6TgxcH6yxB19he3YNepXVCtxmFfKrksmAn3GLej2dC",
  "key23": "5a6RjnR7xsEkVAMBsahS5z4BrisMx3XDwD7f5LX3nVwNZESGzfk9Q2xZZwQmoTCzzGiCNMkK5N16q65YMStDVELB",
  "key24": "4G6aRmFgGTW96fcPgjyJA9iv1XUu6DadYQbtVn7GAnL8wYygwYAieJTBpjv3n3fhD8DPNz8FSJydFss59VfSGaFh",
  "key25": "4jUe25KGamDdXihsVZNoeiN1UyeNKrEWZj6pT2aeVtqHNQwtEWvPkGWDhAxFtd322ztXy3fapQoj2z7eRBBY8KSa",
  "key26": "mea53BjV9kNnvW6oWERasFDZJsu9Uy6R1VXEkbyVG1SajqVAFPDAGDMBrMRbCSDMZK1TW6N233XoASWQ9iXTmgX",
  "key27": "37mepAyLCQeiqCUSZMoqAFLhDpBMMhVVGb3YTRFFpxeJP1KG7UrSe2a4g5xwmH7orHp7bXkbhGQdSCs5EGbggc4Z",
  "key28": "3qZWjz4ZK6Hi64E6DVd7GQrEYyTJUEh5jtnDHaquZQp6WQ2a7NpqRzL2DdCYYU2bdxZHy3DcgykCw1TwjegZxnGv",
  "key29": "3eCmG23kaZCBfgDvdxj2rGB7YUM9oBQnQj33ASEqMgnKhAYR9dM713qzivkNA7VQsq34xmziijYUdvYe33nHe1zJ",
  "key30": "47832uRNyu5osw3sGEJG2okx5UTNkKAKa7mDNaDXzbh13uPVwcbQabtCmAMbCoFJHi5wyuooyC657rF3MFkKpNQq",
  "key31": "3A5AJJSnDSxGuo9kPm2J6dDW92hsnYkVwECgibRwSQntB7xYQk7m5ZJjgkALG3EFKPYKnsmrgtDofbVgwbGn7YqT",
  "key32": "4Z8Eito158MmsLDVSe53axkgeyStgB9JWEe7HLZyPgrVKVA3KUigeCui85URcdGPBvRde5J6EfUaQHCJ7DhggfTT",
  "key33": "22zfspq8huz62ZTgLoSDEwon8AN3vxX3czT3M8YDWyE1X4zuwtUiGphrtmkxzJu2i9HYeKTnwU3qd5vpJVr7i5bq",
  "key34": "3Sz6yTQir7Jv62gxPLzRDY3FGXAvvAHWWcPtRDibV61yGPzj2akn3VivfkBfminDpJn4U6E7TuA2P6q3fY2mFcae",
  "key35": "GZK9ysUNiTBfTNWkV3RHMY1FtHQopRDBGXF9aTW6dR7ug4XVVDox2voWRR2Xe4uGG9WuGTpuDGp5W5EhYC8cMRe",
  "key36": "5ggwz7Q5UjEqwDMmaNGV4Mn1bfuhuPWb2k1hTnSQVEt38efv3GatZ16HfEMqAUWJdSfEVds6V21RKu1Yb9m7oj5b",
  "key37": "4m3p9aVEpmHxKX5zA6P8HhADXQPnvb7ko9dnMKNu9zgpwEEWVQA3VpkES8cTHVfSkSxaydncnKpittWN9cYHmi1k",
  "key38": "ccZi6BuUxZ2gAbJkcRzcWGJM1ZkDLUbKhGdzxpX1pnTTJv2vVbpQccWYugsMawk8Hk8fTfDcvNjbQyrJim44EPV",
  "key39": "qCxbKW6rVPNHaA1ou6SdeqJiJ1FTvC4LrRNZFKM8WPHgzq1TYfwcXJiFQtDZuYKV8yyzqD1s7zQrAvWjcZnYcbA",
  "key40": "3xE2exUvSPTfTQyFAoaQDQcEsfGeTKDPHm2T1ZaQWAxZbYC9p8nisrjFokiUHqGcyf9ygWqBiHQd5EB1ixWAVHXs",
  "key41": "4tBiTUEYH35CsMB2PchSk48Vo6rL3hUbRMhSW7p1GMbWJ4T1wkMaQdhWfgpQcdLLuNvsjfgsBkuY23K8DqLorfvn",
  "key42": "tPhZS9PAWP32B1os4a1e5hKuVRcGzEfxL9aVtje8WMhDmH7SD619gEiLXTL1N6SdNQZvdBJLPaWkYrUb7DjuD7a",
  "key43": "dsMZa1vuw2SJKorFLoDoGbjhYiXkhrh2jqcBes2zQGTdhpeRc7NbygExhKzzpekiNAnAeq8vJFMhPqYkSHDYG4t",
  "key44": "39S2MWuS5p4MWXyNes42AsGXWCWSvFmZTEhNTNGk7oN5kjo7D2FM8poccfEKBzxZHiVwMxsHY1u1MK8HkwEab4pR"
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
