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
    "5LC5wu94QmHJNcCPE8fzEGXHgHsMgYjfGDqcPbcW8xwvGFy1rRhCBhdH2nsiFpHJwMXtLsgAShDsrzmtKjQsKKRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXLdbW8hJqgzZAjtJRvgQEejBmNvDLaJSWb1zUpVhNxwgpMCA6A5uKC9y8TvJvoHYGm5XEAsDecRyttp8oDHUwA",
  "key1": "3FQuhvPXW3rev2pNhTv8MXHoWRBo9e5F8etacBqWwhW96WnfbRCRNaxWShHcfsXZH8bYtcWXeJLQZ8DUxVD36Lf6",
  "key2": "4xYXJZDy8TWGVpgF4FAFv13dW6SUkxQmFJgsz13bkGSkCvDT6evd9mEUQSYGwgA2C3GeUEKeRtQTFirGHKLB5DSA",
  "key3": "5iyMUpuyLwQWFbgsd7XXtE768G7C21cFhu2PzBqwyFTfR5XBEadyaAUTm7kiPxrbJnVFPEiemjYjLcWmtVJkyiSs",
  "key4": "5LCLKtKmJxBh1g2dVVQkQHS5KaTn5GwReJbrDxQDDCXcB2qBnEZjVR77xw6NNBRtbXmrW2v9fJ6gifc5i6XyxUSG",
  "key5": "3ybsv6G96Gwq8hmSS9Ftq4xnE5JzRbwgP1W1yNLFvvmrmwUsMHbDHyckD5UCTt8sE8Kb8SsfWVt91bWjMzDbGbzC",
  "key6": "51ceQT5j63TFuejLJQnFCwtcPqKgW5MyCQ925tcnwWSfRuJwYZNq1Rbez6H6gTEUDDS9vxRXdUtxCTRRUQwCARRM",
  "key7": "3WyCK1vxxQAd5i6ZUfN1kq2h6TxfMjon8fhEQCDsAH51khL3pL848EkLey9fpBYe1dFM58jgQngPVcpegqNMrpCF",
  "key8": "qoUsFpx7YsCwZCotP3UST4ab5QXMoef3vYUrMw6nE4f5bi5Er5MMH5iyRJjZ6SBFcWgh9LPRvzo3Uoqs9BodrcG",
  "key9": "JCEG98Ya7J3ZmEXjxvrvgqGUmMaU2RWxeckCyYhCsLHCUqF2D8AasP1sX32B9SnYxRZvV2RzmKbeZYhWobTqNwP",
  "key10": "3eWpLKT9YnYYjewerv8hoHbYxjo1WARNQ1UKkzrHDcWaXTdFzJf3gHXYqWMy5J1cbqfPJrZcMTau6muimBeEZVus",
  "key11": "dWrySHjz4hcdkVU6VvcTi8i7mT59FY6gm7R2KxYxpw1eTt3mEtjricqxCxz3DJhnWznsuZyXPPC45PVAxeph4Ri",
  "key12": "3kzScfrZf1tnu1i5197epyLtCnxw8BRW9SQvNPBVUYFnaEMJDSt1Guywvg8DV6rsZjv7jnQdsoyGc21zBRCYM1mm",
  "key13": "2uorBvrbxLCJhNhc5VCBzyk3EMx3EDfcnydSeW6gPu5CfT7gAatdezqSHG44WSYuaCh6Y3TDvvu4EfJquE93Z97m",
  "key14": "2n6VXQC9eaRmimZiS7g47VLSWwGxmLq9kqvHwRgML4FzfBqLvZNUiRFQ1JpnyQ4mHYXvKAwXTkuRiLMnDcGWkSW4",
  "key15": "4TeX7TBUZiRfpErPhZcXH1gfDn1bY1N2VrE2Gnqyz5K8w9i9aX2NpAN3hEvktPAVuLiqoyfUvvS3W5CAtBKxrwaM",
  "key16": "2mkT8fwhLaYAee1J6mNwmgJ1wvy4MU1o91rWXYauVeAqcZJ5odLqiF3aWbJ4SNoNGovKQ11zgApMQvSFFNx2N1GJ",
  "key17": "w3K9vFgNSUDXzUfKdewgnDuk43NkXoYXnKu62uQuaf2usTGJmKvZKAFsKKaM4A2ktmAns8Na4dZWVzBdvFhRLCC",
  "key18": "5k11eL8KUyKEZtvL4RG6ZGUJYWQ5guwDA853SLiG7HbJshELVVn4ayzqt6gYZFTiVCyLZ7YjBURjy9guAUirLHRS",
  "key19": "5db4qVuiaAA59BvszwgRDVHf3arFkM1MUmEvUmnoRvKLCYN8yMJ9HMWZV7sWwL9GSMJBJHyTtYChQZn5rrPdXUec",
  "key20": "3YJ6bGrmEDoqzWjBchsnZznLk1j6YkX2bEhh4tMobapJSxztiarqHQNvGZ5whdoKukj7fE3PNeJrBXr4tWfDMySN",
  "key21": "4TTxyCU1twvpbnV7D4NQDMLhgqdgGNtDyFY1NAsb4dwshakJCN7gzUb3NuPNdknGaV1psn6kBJukHnHgobotS92R",
  "key22": "fztbvgarptHwKPJt2LSwFhticr1NysjxDA3NDucufTkq4MErPtyFgbJfakmYTczzML26d1jp1SxaFpTdupfgKP4",
  "key23": "3MUG1mNiLqhCteiAhNFqzdEmdo3jh6ifRzZkctAjFcE3TvLC8dzsUExtne1P5ib2APxrqq27YQNLeeRhQnByjwZh",
  "key24": "4HgLvvt9wqQsQKFcUoLQBFaJhmK19J6qdh3JyzEy87bngCTqhgpcXQF27Tfs3Eym8iyoqJC3f19EU5REWSBCKZG6",
  "key25": "56cvzZgqqHtne2NFQB7jci2V3xnVEpx5q682XqsSTxLCxnjGMHKf4DuztK6w67urJZgxQAfLzJ44uwZpF2mRDgvo",
  "key26": "4ntkJawCdzXHhe7duQmrgqDh7JAC3VGd8SGwv6CMDXD5rTVDqBGmPMb4B4Kx8U27CqPTVF6MzZXDqPJ49XSSpiT4",
  "key27": "5YuJabLHg8NVCJAQbuUAiD4HrviXCK82uwm1krAhke7ctPkoMaajxBaf1UYix7t5K5JDtPfRsFifA7tBgHcPfA2W",
  "key28": "2xfyQoaUAGLNSmXR5kFrsjiRFgXTkGkYtANH6D21GvoeTphL9r29kgdzvoZw3PNxT5sh7Bd6wT3ennj64Ch93tkU",
  "key29": "33f3X5qr9VgbBmTeM8wFBiDSbWxhCgsff2W69zcnLfSgAq4nCzs5WXNiA1iZpnX8nHzfjoN5KFxjm2Bgzei57fNw",
  "key30": "3eYXCxr3hiu8JPpgR7v8GtG7CBn78k58PtMS5J23eascbJ21kaJVDqFkahUYFwqXn1R8BsdT1rr64x3HeDbAFV6L",
  "key31": "fRujTNRQpPq2JRUxUY3AdeuJjcnQ21s9Sa98syRA2ZURMr1XSe7zsavUVme4RjW4UwE6aNzojuU2nC6n15vYvYb",
  "key32": "62ogB8B5yuLHkncbFWVaGdNi6RP6j3JE7rHsScsK6Enqk6GQo4JLdApVXr714MAqRfDVrMSr8zUBfTCtu5crhxNc",
  "key33": "ii5A7Gyf7t3JFNMp9kuC4EKfNbRq8jbiDhEkp889qns3CtAZGmguYk9FatbWNEYh8AhLD1ZQt7gdyUFRPmR6xiw",
  "key34": "2W2hWjuAKrBd7PipSkUzqiVukMfj2RGkAepHqKYiqxYfubd9sVdjhQNuBW6CHJTM6AJSEB4kVxDhLWuhLikXQtDL",
  "key35": "2cgQwVTZN5EnT3WSLrE9D2v9fsYttgk3uiLhJeHfW3aSc5aAAk158opoGSDGXYJSeAVXXJghUDoqd9ogCjz1L9n2"
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
