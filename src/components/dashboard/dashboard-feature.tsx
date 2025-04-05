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
    "4rwfdn3m7Lsbr6HQHPRXMkmQbkcQRqb3VpxXAjrgsU9poAuaMubvQzijy976CpRPb9UcjZDkshfkySZ4y4pYdsMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3667TRxZXeRKgbHibsKq8Hk6bXKe4C4uAamJGRBNa4JEcQ4YjdbqfoYi7Pa3Rp4QGzTtNBNpeEUX6gEZ9w2itm",
  "key1": "26KEDUzNgVmbSc3H2sFKq9XGZUArBg8sVBJsKqNdNUm16CR3DYYwDzHJSXVNdBVxx13FEGwPab2YkX78mSxBAgrb",
  "key2": "4K2DMzstsgrhPA4vtUChs6nM32S8TPRFzj1qSHQUyKZZoeubxXZeCUHPCNfzWxGoZrK9oRQBk6aqeDQ1kg7vBDis",
  "key3": "2MKZV4f53piva3vQaq5nbGwNWhbiNy24iqVjsqApb9zVi3Ub7GWyXPMJ8FGLwv1CzpMfFYFit4YiFYJM8CT5xT5m",
  "key4": "35zjUyabR2cmwew3ZcncQWokZ3Z8u2xjyP6nG5Su6QrmnpvoN1oy2a4kbuc81aAvvmkHHMzZhiGsn8QpsmyuW76A",
  "key5": "5kDbkMYjcgqwTSTqGfi7KdsxMK5yNJGqMNkCoSdpPD9hBnp6A4yLZ1wMWFBoQgVg1b2DnSwFzvqMhYxVxz2KUBKv",
  "key6": "2eGLAmjFhXm6vziTzz8ZyXRAJDYSdX91RgRaf5kCN2JZE1qLuvfqC9JS4kDTfZo4jy88dhvGTJa8wfm7y4uSW1EX",
  "key7": "4hnM36zanyQMNDY8J3xmJCuYuJ5McwkU8KDgEbv35EcxqttmK9eoAFEnwyqtYhWyrd56J37zGN6DACD4jKkRAs6p",
  "key8": "2yk9pQhKwD4czoP8iYTM3mUcK3STbjR1QnwmpbcggJK7VEVMcmtKofEaB9SM31oexCqE54rqrrhfrTPyy2RMEfTB",
  "key9": "3EH3BWTHKCnNncB1ZsZBxU5J3jZXmbiDePvcvuZ89XPz2tPbbEsG6qWA9WEDtWffVq3zA3yG2TTWMuv8M87BuQPL",
  "key10": "3t5kxaTgTsZTwxxbdTLTWVDAHqSg3MK6YwjAp1PTETDvkhwBfHFHu4kFg71ovtnFFdutfny8WcZJFMjLgwdPzB1Z",
  "key11": "65FqXV5SyjPRT2XpR5QVD55b7u3a81WAgqi1wD5LfEex2EJQbuagRVMwiSrRS1ccw8MdSo23z56YgGhvxy9QwW8W",
  "key12": "xGu57STJthuddJj3kHUHeAQim2Vc15v78zXEUHafgfsBGphG9EQUExPV9X7yGNSyCdTm2fAAygafuyHRJoZCyhn",
  "key13": "DPrZfwKoReDXVacBMQLwtiKxEwL9EdkDs1LHHHFK81eyL1TxyLYo6GBZw3X9xkdXUH43omA7chf19xkT3e5cs4S",
  "key14": "5kZ6z5FxSF2ePGvbwc6ppX4bCayvbeprQeD1Wa7SnAAJec7XGSYQqhZcjz9tEsRWAcJYh4KkyRsfosgeL8YyJJaH",
  "key15": "3QJEpRSorBMvHyWhrTLCtXTNC8F5NJePLsg2HxBN4Km5QLfESXCybF2Pyn5GPzTmibYZKLoEqw4jLcYUMvGBsRos",
  "key16": "4Kh1byXNQTWHVcvGhLKBh3Gwez4Qkkh2yYRcSSNkZ1KLF4eNaenXDDvyG6aRyFzLQ9Wdxd8NY4M6cDkKf3BVjQU",
  "key17": "3SHECF8DpiSCdmHDy4PQ14HetxVSNUnks9ntV9w7MkEckpSBJTBz7aGc5Zv9BinmD9zW5UriSmxe6zV2fWDTUgGh",
  "key18": "41HcuDg4ZgW8qD1XczN5qVAvG67aSpN3h57d97Jh1AcmeNt1NppoM4j6V66Tp8iG1eCBv8ZubnwXuQEMoHscG6sR",
  "key19": "3LKUZMgJre7scA6vDp8FVPzTx1mNwndWRfsDCwvGahMbwMPPsXxwLMukzpxRnqx5sB1kncWkgtnaoZUhzwamD5fg",
  "key20": "3LF7N6YS3E3fzzRXgg1KyKdaPu1KMQsPTzJfGW37zjrR4bL5JXxwjjXWHtCwqEC8zVndBS8bKxkKQGUygW2JzkEM",
  "key21": "3nKCdB5MzekW4ykb4DCfx7SPMSAXQ1fMvpMdD7TDfFpoApRHQGbQxW8X9eE1oe9bP5w8BeiZ3i8sknpSpq6Xg1UA",
  "key22": "41NvfWuoFtcQJDBacWiDySjg4u1oe44LWKcq7pBrm6atBoxmS9vZae9stnVj9fHj2yGYjQMo4NFqPWnvWazw4kNc",
  "key23": "4R14c56WX7UZ7W82PD9kv4nyZKeZsjGnhtiht8fWkvHKfkHfwzpC9R5QNq83PMd8EHkEwHwmE5c7Kcd516isv7DX",
  "key24": "2QHwbsze1BRAspDTSQ656UVR9aPAReYTJzvxz279m8dZSiqXVHujf8WuhKRdWv12N8uDGND1hRDr5V3NSAwQp22s",
  "key25": "5vj8NBMbxaRik4U3nZsF27HxjfLE2afzKab7hSTHyWUDbsNQTvGAonBhEFhHzf7Lreiixa6iRDkt4QLWYzSjHgFy",
  "key26": "5oKeGaZ799R3pfSrwPefSCyKy3bc4HfLxCXLoVdmLHMjBNFEAPpGFJEADVHvUKF9kvryPnpa7BKApWvUqNJS6xps",
  "key27": "FQrBJWPdkACdcxJ4qBdbMfV24K3QMRNei4HFGXoR8moXLDAgJPr2tFQC8zsoqzzQ92BzYJrh1bpd7zcJZ42hLrC",
  "key28": "2sGhAt9UcMkayE24Sc7BTKK4cFwLyTwvaSVMPCh7tc4diMpL5yVyV3VUSLkneSsnZy1Yc1CRgnsXJsBPY2adMmVj",
  "key29": "5ZLZgd92ZNRjem1pi1jxyTVH3y7Jk1YN1xNm4KCTjo5oG4XUwFRVtD1ii3b6eZMyztsoUa6NdHvvPSo4nkSKky2k",
  "key30": "5vreXapDTfNQUsZUVqneXuEzbXZ1QVpTGUU3LQLU89JHErNaEZrfJy87Fn7WeWhLsHZUbvVBXQCmRCTrmU6KPvzx",
  "key31": "rbTU1SP1amyfy5uMYd8qv13CaNnhDkkchmocLApE77Ybvt5Zxfb2FCsLp4HnmVCaRr91eNPwbUJaz8x2qF71pWU",
  "key32": "4BCecXwsf33qapsiHD19HgKnZ6c54irMDuJDzk9S3UUNNgQBNwBX7PvnGdevCoWwCy4PCFNUXqvZ7HjieTRauWzu",
  "key33": "3vxs8QKLbqLgie171Hmt3bnEbDqyAt12SSeMJn1x88JVdiySwiUDFJ1bqhTDsBe69qngoAZuJhjCzEXypABcb4BS",
  "key34": "3EJpAk3QGQpKaYWYQUjiJVK7px1t81Hg5xVz7ZBYxLmT5Cuz9iUqoNGdzqY6KDFMypPgqWjpAPmzU9ukDU4Pc59x",
  "key35": "247zcBcVN3SQzqBeDZrkhZeK8hWQYs2GV4YwjYcnN9EASCiKTAXQCBrkj3EjT7jPuPBEhSdmjuoqzKTa124pxZXH",
  "key36": "27VCDUoeDmUKZ8EZ1gCYXEVWdZz1WFtXYMn7qv9fNBzpxmzD5syJfz67E6h2XEF9teCDbkyiR3WBEGewbCMAUFBF",
  "key37": "2afgMj1fxaQWAAk3t32W1qav1fEZCbHZHppPhYVovq9NghERamCKonHnC83KsvksPHvNm3imHV7GZjH3P3jQBLSV",
  "key38": "3LQWFPvePnv8fHhgsQkmVryZD8zGrzsE5mbJJJSsoNnwtTkEPgo7Z6c7U6CtQt5Rx5ZKHKrZ2cqoJAUj7gRi3cUs",
  "key39": "2NEYwYB73fbCnq5JqFrzRaNEkA2cRRKJVnr4CJAVvbProFGQA7Ma5dUTHDy2Y65FSK9i8TzuGD2U4gCqN4tCDwvC",
  "key40": "4wjYrAyFTeQRB7jknxjeyi4NrPge42MvpWfRR1sTQtqkqX7Y6NqKmQibpAekNzqJDMX4KLnxV3tGx96vVzrKnRuv",
  "key41": "4p4bjpyQKd6KnU53i5WZn1Ssr7wb8NuFhRLNSu6M5QAbsnujG3RE7dEEjToRSuGNDySEJk62tyXDq5L5YBXMwWz5",
  "key42": "Se8Zp2raSSaS2vzJ66iC36E924mKYh6DZ58HUD3trrdwqgkbgbF9bzrcK3jACfQppGXV3etXzTfSxtw2j4iwBRj",
  "key43": "5K1eDswrovPQxs2BEEN9EurHmshtKXEcFgQgwpd6endhQX5ADkUz88cXzGp8P1Yh9fsHVFw25BMfLkJ531NWsr2U",
  "key44": "5EeYS3oPJmWk9ipqvpgtqPuBwENyEoKMYMvtADtD8xMLq72hnAhLFWiTeNX7NnXP2ojf2g8FLDGwVfhKnKeGbPfL"
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
