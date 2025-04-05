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
    "5U9MMvnq6XYk7nZDEHcuSoC3gLUa7wjTaNV7yE8U4axcroniPofv7494CRVs1r9XBjWroCS4wPhs6gn37aSidXSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grADt4HugJBa46uejGPX7WwSzGjhuUXuRqF2WwfaMUcgQSZW5ERhzY5pnkZsQnMcoMWGBd9UFnnyMHzPkqa8WYM",
  "key1": "R4Jmsofy9AatCHYN1zPmJ9XMnUuNbFkNsxL693VKYJA7GajBGAm9aaHgBSk6SjT8VdgJCbitMQFAqvwxBqM9nkJ",
  "key2": "2uGLeH2B1dNNUKbt76SiAq9z4vbHpskLBUcvuKXs63WV66vAnuPwUL11inmLui7UJ9t2Y6RarjoHwMr6Br6H8uxH",
  "key3": "5viVgntbJ56K6kQtjEjiD6Km8GQkNpqzybyBd2p5yUT9wJFePPNc21Xg58CfGhh2fmVUZNHA8jfPnjbSfYkhvAja",
  "key4": "2GtbftrodcMHZpRvDXoZtR2KvGJjo58aSKWUzTuUGDhD9rXGbC29myk8MMwCLugesjqo93XPs5dEMWjBvh7Wt31k",
  "key5": "5vdWZYXWXKUe3VtDZ7EmMMxCDprfAQnVEZ6YPt7TXma6ZEuYHFJthvQGJgu1gMjCzqJKXDqVTxyn7Sencmgnmknb",
  "key6": "4DarKP8aUQJg5DR9HTJeBJBQKn6o6KiV521HHDRCNmyuWcJrHk7f1LmLAfPDrJUnDZwffisnHkoDCJS3QrjocCsU",
  "key7": "5HkAMS7M4XVUes4h8cvcjA9i62qEQELcRWGFKCvAfpkAdzBAtDHz8LzTmn78auwKYEdwgPRRVdBV2GgqFa4nSzW",
  "key8": "263K6xsLyquMNdLfwmDhA9Us9CPn9qegVRQNBMbkfAmcdAyvpUArjWXbz4R4i4VqEn4DWStjGg7ySUziYtdf2oRx",
  "key9": "4UA89YwuLqCS7dYMKUfVYDmrCDRBKomNL9fpiiiQjFUXRXkGvQK5G2xPNHmw6rBo1xdceeWPuZfzYX8KEDJddkSv",
  "key10": "XiperXHdfbMXGvkMqoj5BaaGMtBx87vtSTfsqsdRfYgD2tFLZj6ys3GpTZx221puggxnAn1GsNCwEF9Fzg1sgT1",
  "key11": "2M8rzKaa3BwqaHkVsK2ypzYBfNUSydbSP2gNiqVVd79gF8XWe9r6YrEdDz3AB4nP3SUQ9ejcsLN6g7kqmWwu1p3b",
  "key12": "47PiGEMuZN55CB1tnQ3wwwphC7wNAL1Jinqjzcir7qN5QqiPWqxMzUaUDaCekafXmM8Rc6YfEgPiRuBJmm4dN3Gv",
  "key13": "45Ec9YLMU8x5dCN2xB11T2tgLktVVyqKufNXJqDAq6UajkPwhWib9Z978e4U1xnXZgzEuyrrTepCFADsX9R9BD8w",
  "key14": "3zqPnH5aNULtd92TH3ALTpcpzJD4zNQKX1GpDcwzvxkgXAAFwKKhNXMMbzB2h7u7yQcTJpjeqUARmYA4Wm2Wq9vJ",
  "key15": "57Kv3NLcEMkbPWXdEif8n7PiEt98TYAvVNqMi3hGGKuGHVQTMmHnodwo9cFWvHA3Ce3WdaqZU6F7g3icnST3m78v",
  "key16": "5d9mY2tPLkWVnBYZb4L54Hr3h8kHEzVMqq3LXs3c1HfMLF438owAiZ59LcGpabhLVphgxiVSmAK4JCaVX17LG5mT",
  "key17": "3JoksdMw4YXaynn27iv45byoC4PBDcQAmM9LRn9ZuoX6fALpgN86veAVntwACcvYZRhGGNJyHR8taR5eo4a9BRyp",
  "key18": "5wqrkgU1uZLhSqu2tAsiZK3YhPgBTSPDjWMtCUmpNNEd7g54eLpM51YgBYABym1KCwSZW7W4oJMKszj6DwkDkbQa",
  "key19": "5TgycutbE8u8QNMVr3tsSDSnTo8inRSFRHu7YSkXdaRD39KZSSccfTWYWMR1HnJZUuvSHXBqYgYh7eQiCj67Xe9b",
  "key20": "619pmPrhUP86sSy5KMoYSukuSFjfCqQcuqyhU3QovdKcRXFFvuEzMvHd5XhixC3wcag5M5QCqYU3MxqGviNJfDez",
  "key21": "mGngEA11xXKU7E6JZCzRkwCA8AGsEEtMJkMyyBw5tyWEWYVonVDXiFuiGsVYeUCZt7czCGxM6QzWUHv3g9njz5K",
  "key22": "27u1bdh1K6CLpU8kFSichXNWFMAHhubMzYeM5SVTFyoLCDLUKQASgqi4AR2RwPGUK9jWMrt9eEyunYp9GNy6WnsG",
  "key23": "2uyLx2LLwabtJe2w5VvQ2d5aFT1T3Ac1uMgwa8sHxEpia7Z3fZ4VfmYg1H9ZK3AgFwz5wCLsqjuCCTMZWdpE5wzM",
  "key24": "jdEtE9LUKHUkeVo5KWgZz3hyMDQm1Wkiu8eNdC5FttBjTFURApZxxFhMSFUxRehaRXkHSJPwfvJ4ve8zXgcrT7H",
  "key25": "2ZEbwkD9hMCcDdjYkHotga3x7z5cr59APTbD41kysPRWQ7P4YFVU1myeLdZp3qgWMWEV57hAPMKhMe8icGZFFjgL",
  "key26": "QeZsRMqzTZ5HFAVPfsZNdqTkQXhj268kCzDoC533Qz8KW7okCN7LzBfmtnAp9Zhj3YaX5hD9777x6szrmJRnoMC",
  "key27": "4us38qKATjkZEbBTityqFoTmeDCMXb15mZjmXnWMYTFvocdy4iY4DMGNeM5HvGdiZBscf4jzHJHg1gceYkfC5ct8",
  "key28": "4yRFowtXBz48apQffSG2N6jjq8uKZHtK1kGE55VE82XKZmRHtDbmaeQYeyrLtbV6nH5uw5hKUxondGit21SMDySy",
  "key29": "28nbPyQapKh6yGNhB1cqjrBoDDWBD6LA6DRb1dEScngxkQJ8nWsEcsQiXVVjnxX4XS7rhjyTK1owfQD7C1jXs155",
  "key30": "58z3QKAuTKmJwSpB6A3NjWVXRsEbBfK7rFSvYwb2dkEWme8a5br26rZ4D8BFcob7q5ZPQrBjy24H6G84gvcrmJMG",
  "key31": "2sMR9vBuEqjdfGAoMh92YjQK3P9sNWQoJT51r5Q3he6w624gr9cxK6FSruLXGRT2JPCLKwwsnjFYdMf6py89SJQg",
  "key32": "223moToEzLoeELsNnXkViiyAeGVcAhEzkNRLHWvunpu4aZruLiyF5t4pQocATWtJ9VcGFKX8MCu82wzRxVG2SJPW",
  "key33": "32wt1W6DQbvJQyZX4it4ExwWfoNLAcwatrZQUzsHxpLbznJc4ngHPqsgW5umvr5FnTBwMcQvNjU1jeG3osxyMnGd",
  "key34": "2VxQQWuGq4QP9GkW8FgxKsMjFL2mzmzVVR5kQFf484CkaqiaieFM8HMhdq9nUC8Kazk2rYG7zs63ptx3gnX4tL5u",
  "key35": "2YF6MJX7HkruPGCjSUcxG8ooctUmFn2wDzYneCntdrXcmfwUESH1QhmLKgpNua7JSAxJxmzwz66iQsUVxCZv9kEa",
  "key36": "582p8daxuFs5tHNFkRHWzZRwLghbRd3aN2hn6NoxfGykrWj8iUrEi9hez2LrmdAukQte4VR6BN8Qjt1bJv3pd1ug",
  "key37": "497DVXQvQCCUZqdutsDSQfixZNztbTm1tRHYHE2DkEmzLpAfoo6YWLhbV2wW3N6HDALbcHohseizWUyTuBqzBzre",
  "key38": "2K1uacXWVLkFBiLQZwvHHTEp8x5NMnEWD8v2B3J4mMCKSbCTJK4QEduW1XFmpGRbTVHRBJuALbbumc2vSqQHVngj",
  "key39": "4X55KLXSwpqkZ5GfTN9ZUfetftkC7kX4QDagpTm5Pbny9WwemT5WPSES5RkiNbyi6GiuYzU6MVbjAXQ6SbhJWsMF",
  "key40": "3ncsKT3PwvJb2ySdvJoM9xiJfsDVQEgHmbvgxFWwuzw2ujrmH43FdzaqgVcNSftMttUXH9RSKoCxnArtVVaNhE2k",
  "key41": "oyimfpPhshfUxmnrLtVFG9PJhdX5Yi6NHEuspTgGa1LHJTDtTT6wKUFY7YkEd9ao2pqwUDGB3RLaVkCadtvxxcp",
  "key42": "5Jkp4qwLLHDXTFgPn3dFt9CvtULD6ADuSi16XmsoToUDTY29imFSxno2fn1vmLEiZCCZr5X85JFuAC112FLjRa8a",
  "key43": "2ioPdyDxmYF4aibj2H7SvyioZNeGKwRxMhUXPAmUHmcQrtQW8wdUatLGFfqEa5vfYiamCKTiU83SkqGQWJMXf1tu",
  "key44": "7AWvkm8QkSCcB6PmFNNWtGLYRXuvqp6Lh9gT6jiQriJTZK3H6vEj3gY1HHdbGhbi8LMohWiSb5RW2MRRa2f6UEE",
  "key45": "4ai6VVvzvhQnqec3DM6Qtt3N1S81ZPR4zAxoWGzPozBMGPctxCNpsw4ddKbGvP3G2xX9KtFd9WrDpjrDioPvmbrQ",
  "key46": "3WsK7GXbXfgeJAL69tUzfXwG9DSYTnsf982dJP2ciRoeD9R5Gv22M2uwDQVSxyE6UNesgzV9Ke5qaVccJZPxpocp",
  "key47": "2ZJ8VuhfAaiZ8v6uLGsWhpMXZe6wBL61Fw6nqbW9cpNLUTHPPBvPcxsCgrAULQLPMa5rKxwJ5TWqMmZmjNn2WRqo",
  "key48": "3onCx5Tv8rwczSZdG3myqTHfZ3CGBw62m2nAwdL8N9GL9n696XtSG4eU9ZVPZyrsWt3wbKKqdZpxJQANVzUA7ojw"
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
