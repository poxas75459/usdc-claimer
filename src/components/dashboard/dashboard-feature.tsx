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
    "24i3HRtCc4n4sLki2ht1MZFnL9W3fxQZcm4ymLipLrsNorecUWXVQp9331ok3ELrz92ryxQcFn142Qf9QyRryFBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYfnHM4PQbcMwbegGW9tapAaCuoU2kz1xybTgqYxctv1zsGxbc3o5A55xbNBoUyfbFJb9PKmDotajeZaEqDsb95",
  "key1": "5Hqfc8fLzSNKMYfgKJap5wrZy75fffdFaBtHbGCdiccs7XecBXKNBCYJSsTRYJtbSiKAhCZEegczR6ZELHzCXawU",
  "key2": "479G3EA279PG9yr3XF4cNVnUWcmJbKvnH2KdMMXCVoQiTKz3MUPYCkh3WX3CQr3W5hFFQr7e2ZJZRF6U7LY2Kcan",
  "key3": "5W1ock9babuYfZSVotgr2GYHC5Qje35xLX7k5GSHhegrppEXeYj17eb3npc9LyZBaNESbaBEzZwWibxuKwrzZefA",
  "key4": "5Fdqe5JFC7rgJtTwbhv5mgk53uq4BEgvmQ9wQjuCuDLdnSXX8ucBw2nR29wsN4kABt1jtQK5FjNn3SmTnDQtALcp",
  "key5": "3gLrXanVEBhA3LEt2eDtPLw5paY58iT4Hi6enCnyrYYJgt2xqVrmQAH6JTmA5thBSctjJjioPkQzDygfPoWbqZF9",
  "key6": "5DdbeKVuy6r4whvDEDSzsUEdLcSfzLnnDmsSi6XYuAsFF2vFzLZ73UxGHdnocsyuaMmUmyuRLESPSKqYWSJQKoZ1",
  "key7": "2VFVA9AcTsyGzYCm35or65Xexa87TMgruqn1w9gqT6NLeVUKFQixn2oz9WQiPNtAR7SBvmrtVWKyrcJxhKWHSdt7",
  "key8": "3rbNFwMfU2g2aPPQEtSKRNWvspQJyPqW3Ax5tPK6ovkWvVAYjTcBxt6AfaMFqz8PHKqqyDZRzckv4TS5CnjQtd3R",
  "key9": "N3xDiKFQoUvvpe5sDFHboybGLy3ur9Jb4K8zpT4uhjPxtjUkc8qJaimixArWsAsniHRytNmnZagvnYGK4h7dGBP",
  "key10": "3qYpeVQxZpD4pDe49w8wXPZ31RvyLnJCe9jCBwjkifkRnYPkqbuHcc9znV7My5rSHuN8rvqTPjsS7fSREyB6ZxEJ",
  "key11": "7vQ266yUzGmpC9xbKQBZASb3UshXeUcLSkVAbRssXb3fyRgX3Bye5bhNu2JrxCTUmCP4umYfWFZtYJnnue2kEnA",
  "key12": "H16Fhwy7uAB4Vx1kXcwtoicX8WiFpaSpsdFxx8KdxpKMbETH98Mo3yYPgmV7Pk3ohuhZtdY436X37CvjSuyQo6o",
  "key13": "4oayKYA8VBAfhjknsCvGwycSdE6EbE5cuV1Q3GzPH9fHPvSx2PVDNcTR8fZUGDqp9w4w4k59xVHcfwuLyfJiB2Xt",
  "key14": "4SUHEUcMNJ42zZmqzWG2fyxcNkMUxYQtdAp71F3AUbmrNmzkBcPchVgZcCjJoXvHJchDX8x8LaRYpGuCiZrydLw5",
  "key15": "akDaVHfTet3dyViyCfEZJ85gHhELGhDSXeqvu1CeHeS5e9KsK9pv3ww4aCHtDo2Yea4uUZf6yaaKMUCTutHCcNb",
  "key16": "2Yx4Wy3QrAzFQsjZGrK4kNZeRDQaq9bRky4gggKWonZCYA1cH83KGf9CYu3HbUZPZAC3qmTyADyyn2we1dmc4ngR",
  "key17": "358jzyHuuRhrdtmeUp8uv9nRKnV9R6ra4JnppQKX4QziMM9CVAAwRDG8NoT4BLY2owPB4GzM38EXVokizJSif4Mw",
  "key18": "9Eb9Svn5jTWeR4WGzYQLaQjsFzsUJB2pjJchnL552rCteqJtTZgncN4V86QjcaLvfrx1x4k2Cfo5R7MHqaVCW47",
  "key19": "4YnWvEpkowL7W66MPZ9A3amXSwN1zfHfo7Ho4xmFHvYsYbA1pLtT7saT4Lzr2tJ8sdBYHAsy29VuzUZ7VYm5mzVE",
  "key20": "5kgR3AoPM4B1fKGsNb65Yf1SHjiAg3stP7sTtCm1cVASu5GyacrCVjScBgASM9G3fHMRdqZGGGCLYKsHNXEUWdXb",
  "key21": "2CNv8qW6dKDMRpkdyrXdJUZiV8oNmu39WE1WK1WGu9b4KBi8zqZUrf47o49XPt7j85FZuCw8myJfw4vKXP5hB2t4",
  "key22": "5PdzieARgDBESUY1qrHAyE8TC5QnbqYFzVQje9juA6v8dYJB2voYnHZYhGNmJb36sdGp7u9WYkJcs8opnML5cbf7",
  "key23": "3JFwBFTGeF6v7tm1xnCLx7AGp6QbPAsob7Qnmqs43k4bzrArHi5FQnwLE85cjqwVYKbWza6x7SYKXKbuYgCcTCyG",
  "key24": "3ZrnBZnkhCVPSMZHLuZxcTHud6gKEer3MNdraDZ6sA4WJRyDVNwtiVPPbdyQGpkmavw48uHwv9G6yoJDQ7P3mDA",
  "key25": "4KQTiaQC8ZcVgYg9EXsXDojAs1mxfGwbBFu7nexDxvmP69vx8hMyiPiZ1QCj1R8bveDkmyhBGYwinAJCmhpnc2N6",
  "key26": "2LUvcjosZ4216Kc9oPpU8je7DjYztL741EUs88XDBwganb7uW3iTWnhSmMBrcpP8T8gPdhPYUou3ffhgvjzor9Y",
  "key27": "26HEPMuSqJ5xV3xoGAGGfburs7EfwLhR7f9Kms7BRFAKjy7r5QcrADqVQD9j5v86BT7syaFf4WVTnwogoarn79Md",
  "key28": "5oejYgQW6GfEK36oehNQQTsfa4Xg63ejssUp6eCvC1kjYA1UvnQxGoiB3f6xzrtwfg4azCJ7rMKs3ouZz49bpZRN",
  "key29": "2iBRE3q2BzoLaiYk6py1E3da74EGiK7icUquQEPGo2aXB541nq6DJTw5Ji4neRKCQGDMvrx6ZbofgDdrbTBZYN3y",
  "key30": "67QgHixBBgzm1XNsSfv8MLvaSTTbDBNnUPehsFARhRewEpbtph7nXFofuRGaAxWiRuJn7mjjzWzCxEBFj2mrUVzX",
  "key31": "2r9kiRAUWYQYd1H81xmH3HTub7WgkcyF7arSx6BKunruPXVVegauenZ1WLVMyogseJG1LdRxeEnv2mytgposuHeZ",
  "key32": "5sv5qPQL89CLimyvmiG4zw9CCeYRCx5hKS9v6y2FG1VYYXFPwLyxGBtH3muJWzqb7BrxXXY8LjPDWaYBvVsVpwiN",
  "key33": "4AMVseVnvyCAe78Hi4THovMuiVc7XR5bA2sUWsAeSfJRTuW6yPiDvcPzykQcPEj7KJRU4GRNBjqbjMxThH9Vn1nz",
  "key34": "AzrekVDuRhcsb557e7bsbcFvStv4CaDa274ANgR66EGU8mCJoJ8iC4q56sZr3cSXv3vq61mE6KZZniLDLGnkBCY",
  "key35": "zxzorFjSuhKp1cqPXViPEqW5U74jmTzV44jTnbi3uoKBCYaS6yPqrfskB1Qpd3Q3M8wkMLySa5FYuxB1nSkPapm",
  "key36": "4pi4phyJGAocxL42tTFtEMwweKCyF6yPnqo86UnYKkiJY4AVVGxny4QAzjBneqHgcxyNjk1Q36xhVgpiZ8jMKdfA",
  "key37": "5AZf5Z24pj99TuRAQR4iViZMBkupiY5MLKxVr7tJBz131PxdvpYdoAg64v5bqJFjgP7fC8V7AqohxSrcNaUuymLu"
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
