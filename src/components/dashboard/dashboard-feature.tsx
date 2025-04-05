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
    "992q2Q1JCfsjAaUAZHrMzqr3xnyb9FL92PRBD2XNhMbnF6UKp1bcdDKejPA5yVzJ9SLY93fNzgbJNooNWDSgmpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYttWEmpRogXWFx5g2kjwN5jdrT9ZMSiNQG7iszchXsyesbBfEfhzexzvuLzp3tagitJ5i843MPnWb5agD3RYSt",
  "key1": "5wfAXqDuiH2pRA8Xm4rStuojAQnA6X1tgWtruPE54mPsuH8rJYj7Bcdy2S7awzqxTTcwtjmjLoE41WhYWvzemmN",
  "key2": "5CHqAZGv1HZUkBYioU8BoNkLNkZ9SZT2N6tMgxrjthNbonAg3o599ea5Pa6GfRiQRiUraYPGKnrzkNKSxNDKTCzY",
  "key3": "83wBwoq4fviXoJXBhoYzUsZNCCmdr8qBg1GQt1QMSjFGkgfptqvNq6JxNzsNDCbbpgLqCMtXnHR3amsKxEYWSYK",
  "key4": "3qgXGPZQnoYdG36Jh7FUjHFuXLWUc7jk3to4wsGtdjcvCZWZGqirsEeTroM85WrPEE2En8H2U1vUrk6eS41kz6o",
  "key5": "3jxipar6HkMVSoHLpSadupogZ5pnDZmZFEyE3RnpUeP2jSXqCwAhBDFfJTvfp1Ehr3465d911pvVqtxnYYTcqia1",
  "key6": "yZrW3ir254DgG8o2EVNeWrbtbyJQQ1hPfm36YB9WEg9GhkKjyvyGX69HtVVMbWxh1LLduVVCHk5E5hRijjcwh1U",
  "key7": "KvcKMXB2ebHP7EtzCnikfNNSjDVC8kKr1vJGPTcCrmbpB6qUiKQAs2unYA6CWnp3NB4GQpSixKggQzPmcAP2UsQ",
  "key8": "4HmjAq7fkM48vDSRwgyyhpiqPpRW8E2qCiVwyL51PqFgqQoAMzxcxDN8ef91e15EKUeLqdbUyZcbkbpC53TaUfhZ",
  "key9": "C2G9hXtYPkm2ZjDCd8rsEp5Zrs2iutFfJZCHNkjjyRFmnVE2gEz929aStAA2vLA4yZzkLBtoRE4cBt3FYyaUQTN",
  "key10": "DPm8CPae5XbwFxhUaHnxHahHh1CR5TiDzKuFHKmN5F9F2AShZQMSfWu4Z5YNnRWqXDgCuwbPr9nieDvX7YaH6yz",
  "key11": "EKqXL7yTv4LD5ZMQtr8iWgCsqvTpX3rrv1anuQ5GMxcydAWGfMMHjQ5Kmnnopki5BraAGDYgprqTSrjkjKVByjC",
  "key12": "3xMFJArvrqvxczFtkToKVkXJewnH4chkVqpWLck4jtuigyvRef93NRZaZdy4rjeQsVzhsvDDFuv1Ned6E6MfbUqV",
  "key13": "5eWGMbHwV4gGveKy5b6UviEG7Z8M6M5mPiMGEA6keWB2GnRx9vD2tN6YVXoDSwwnKXbrj4KAEcvTRTf8wkdQ1DGD",
  "key14": "UXWV8NJmtSEWajdjHN1YoW3WZ9qDERxzctHBE9sPdsCdLxst11pbWBg4Aa8eRixmAgZXtG2gF9ngXYzvUhfdXpo",
  "key15": "5czA6Ws7mLzv2PEea3LndPvEXAie3DeWd4Yt1BYTT3ZawG4dLFeViJQhXXJt4knqEJRfWoonMQcqzyTUHJtNWdJq",
  "key16": "3FmeLPEzDg5o9yEsL7oXekxKy7p1YSE1qJsPh7ETttJGSYJzJyBFPo4r2bZqbJkmxJx5vVGCUBWWsSgknFRvuCHb",
  "key17": "5Z7UwfczUtiPSPz3Gi42nHfBr86M5QqSv2sms29V7DCkmguPeqhrbAaezJGCdZf6js3NSVSMySFkmwSN1R5peCTY",
  "key18": "3i16waG8z5SmEn7xFeZ47xgVBBWtuWcpdQByEAFNT1CNQwQ1cwjUzHwKzkZ5ZuzW36wZwXYKrejAoGQfnBmgWTFX",
  "key19": "51wvgumD6HsJtWCZ2AFDKoVRsRjBnr7QGeBDcg46RSHvMtCM1JekhvgBgsdF7EMudezppEzbqYT6dzQGee2xaRy6",
  "key20": "LhN5C7anu8tgULD1KKeS7GGfCqbdToK98Hv9MGnyw4juiiQcB6bd3MoaPDCgU8WyubZihT12z95HtbQMoMhwLRv",
  "key21": "2bKRyhco9secgfBi5FX2uEf77kk6hnwGBnGr85WgEXbzGWSjdgqJNzUPpStk7giw8wr367sixDqAQbVoak1VCWHw",
  "key22": "35KYUMvMTe5sYVsmrJjh2HBBTRHmWX8tnNDQfNw8P9KBv7rs9ztGhux7sqBrDEdbo4N2PujkT5aLcGfE21kq5p8V",
  "key23": "5bQpSd5PSD5Yya7TW6mCuoyESvXoJkjUg8nD1BHh2HdMUXhnhTwTwT6iXmafU3Jn1skCZXVJYzo9Eipd4hQaEPd6",
  "key24": "3S6Xxpr4rGeKb3qWwcQMeF2DqbRM5ZhLXhtwTnqKsSqCFbAsUYDefgQAUG8xA5HvohJFLy3KjCkJDzm7z7XaSmBJ",
  "key25": "2RbcTrpeTxhiRupYA2QLk4iYpfyMRj5huSuprBoBTdgvmC9WgMuHr5jwRLsZrrQf16hGWT6APfpvPbiNtM1UHmcv",
  "key26": "3N7DQGpT8jJWLNjak693nRhWCSYJiUDSF3xhzVW3GGM9HCRmC982FYLToww9XXEETFdSDbLQjf1bwNsYXq8un1Wc",
  "key27": "4FJA1mAMVHSk74vYSN594uNUqgVKeD2v5jtchsH56YLp6TRx2Rnew7E8hHxLPuHkwNbc8qqkuUEfuUHuwD2dFFpA",
  "key28": "3vobVVzXuE3AdA3Mn2Rz9cw5nxvo1U6bQSe37C7oC1Rjg7HNiJC3WkYtQbRs5urPY8JTHK7WXb6E7HyBNKzzveL8",
  "key29": "kezPGDTspJk8B19Mj1FfycWZEsNJcTdDz5nvqzUG3Uq5CSpEbdaZma2HTmx6uEdbcYRRE6K2eps4z2MT9XWhbeE",
  "key30": "kvhfsrspmkK2jBvXRKcpJRsoKiBHFmeXURhc2po2wFDU1fmdsPTHr3iUzQYqmTVHUxgro41FjpRnBGDFoNBSLEQ",
  "key31": "2YLeDYApsBKyWNRjkHbrWzQc6sQ3hSv11fzK8WyqZTSK4JviDxYD8K3r7vvmyAG5MTqXvfeBuXzrjZWzEU1YVFPB",
  "key32": "4dASiUpVAPb1xoQ4Ybh9wG11YiLFNYU9i8QCSVyfi4MrALz5rsiPLd3WiTT1hyeCxiNYZaRp1zMGqN3mqQDkABj1",
  "key33": "4tNyN6VrLtLDb8AAN9GKhJUpjfasWVfHRhq52d4Q9GzGm2LtUg9Bqmj41b7oKsiVAbRvpBqGtcst1QjU54Umtcth",
  "key34": "2L4MkM5PvGyNiCwiYayrhb5aVYpQx4rdr2Dw12M6nDLcjN15ujCMsEXZmz18NVq1qzT689AJVwA4e6sfsen1hLSb",
  "key35": "2wtTFE6UaGDgvUtJoP4RZCfgp1UccmppVWtUh716jzXUPCPx88tCe29G2WgAsYLTVCZGJBqk6N9pESAzSURzTsmo",
  "key36": "67aGHbU5KcP1g7jQH4QGm9z2HzeUaLLoSKTgSEbR6zKeUzH2HYZL3Pv86oU8dN2ffgDnqofHBibhczmD8RSMX75R",
  "key37": "3yznfwWJqufRNqvvD1M7tFrAFXiqfnj6JLwiSbn6DKh33sgTfjdJjDf6Nn2K5v6Kwyz7WnMSkgiQZsMzQv13kKsB",
  "key38": "2FxJ7FEF9iHrjn2G2Yyps87zLu88ouu4sZJN72Ly7d5ZbRRdpyNK1DrCNHt5MLB7hAFRyf98B9oY9UbPZntnnbMf",
  "key39": "pJbp65EmNgYCDKBQ7m6KFoGEKcB7HYxaCWeZpar95mt37N1g6P1KRABKohpp3UT6NS6zvCSsPsA7wYpdD12K4tQ",
  "key40": "2BCsyJxhdactDmCEVCGW7W8AxbZyenu3ij8joQFoMeykKxrsaZ63ZRfRSDhCqU7LmwgmAUWPmdxqYJwhebBZeuvn",
  "key41": "2U46E1GTJzjFA7zkxqfzpk22gv4auxTYRAbn3r9eLuFkXryTe4mdonrha6yqNdxwLXE9UYncDr68aJZR4d2kkGL3",
  "key42": "3bM6GGuhniizH1kLzGZCN3GNLww3pKwBuoVU8WiESuU79a5TxP9CkQnDsBUiMNBjrvxMv6YWK9xMkYqcoTm3sbXE",
  "key43": "2BHcMES34uLvzJNrLnmGCLkXLJYhuPU8LRsRiN3hJaFjFAW8AvpTFLRwQEF5auoEgfKagwB4rYE17Hg5RUBQNYik"
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
