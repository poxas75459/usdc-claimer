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
    "5uR5sR1nGrYuVVr5ZBQBAz6ZzH8LBzGgmXUgQJw7wTvLb2A5iJj1ew3gorgCoN66qVwnZgd6U8r5eUiyfhKwd88N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDsMufoBsjHp1QtD73UEX2rqrto7CbDE4nPJBHwXwWBLeaRq26NFFxXhQdb45oWEQAuARXW9CwMHst2HE5vASqK",
  "key1": "64U3izzHYg9NDNWEe9Tv5CX8KEXdDRsScFLwizKBCtLprhktNgUWEsYfie3V7tYxTDhZmXpGn1Aca4TnsUtPPqyz",
  "key2": "29MPeh3QV9AjuAnrq8dkKsENRUyWshCnPdch8EgmpWCbX6yQGTd5jUZsdZBGypV5LPwUk3o17W1k2yNfMLXTxjCG",
  "key3": "4awT12ozeQLp46CENf668uUZqM31eGHVafSzSaPdBqgDeGkrqyZaanrnJSNMuuXhcr8zFPXh59AEw9gKtvXvseLk",
  "key4": "4KXbw4v47q1TLr4tS7PjS7YGHEgEsAnmBtz4caWRePTxwJvNd75cb5N6GzhDnfG1K4yZPZ3F4usNFy3q2VEm5Nbx",
  "key5": "5dfCZHQRY6fVCbHzrfsLkSEgWYGJTezZc68dE11chiAxSACxLtoJwWJPyxQPrNKnBWgb23eL9NWsFqZQzTZcCN4t",
  "key6": "4DLMnUL2Nbwp6mcRJGkUoTsYM8SynJtjk1Apk5D18kK9eTFBBqjHNeB4Juu4QYVToRPQgzf66KgQymABfdvDDK9S",
  "key7": "46rnpZGL6FbCbhAdgVkjqMqiVuNSKuCcjH3Vs4oYeJJm9ikKUYJdUzD7hDTRGL5EGuprkYYv3cGb4Fy48nBb3t2j",
  "key8": "5rwyVPrgiUR9YPwgGCvDa2dUeWaDdJbYwjsPANrMpfxjZGFEDmRgQXJigcys9nvgxVN4atrW46MxBQpNjavX2AqM",
  "key9": "5rupaCdkHQTk4qy4Sg7u1Fq6xAv74tuMey8KxK8QDywhiMG7CnmwRfosb5GifWepi6ZDYgGbMdiKe461rU5XWHn9",
  "key10": "4GUa6e9GBYdFPaaYLp4YzEgAnmFaHA1WHcJn2jizQ8j1eyKXrpLSkt7VMnPKpnEcgGV1zYfz4x73MEvS6eA8RJmR",
  "key11": "65xE1oUuH8vhYQuU339kWUw7GKdaTrKZfm8foX7tfChxUZryPe69kbJ9HE5dpYQcyWZdahDZ1dzrAePRfHUaQNgd",
  "key12": "2oDcpobBF4JqXXqeYH8ZdRinctWHjAzSw7gVvzWuMng4LZGYgg8KKHdyLkvCzL2mYqNjKY9NjtcUn7XWM6emcaoz",
  "key13": "2CpbDj9MnZk5yFER5AWz843XkY7bjVYH7w9XLaw2EDVPxjhBemRy2nU8bwjP89n1bd4C6zd8kpQJBsJ2aLtoPQhC",
  "key14": "2pLDBaACqMyuYhRmcoMsoAm6RAFrTHcncPhtWV16ubd4c6GLdVn1sCqomw1DS9vAWHv7hJd5CaAZR7ESdJJpqbY5",
  "key15": "3heiiWkAnQStLnQSrAXjJH2J8BUNAL6Pp6bjcKsqc5XGYBJYTCm8RwZWRAiTRhTqh1gA4bZHro9HUGwPgoKiwsno",
  "key16": "Zor2DR7voJx4scoTkhV3JFhjiPbA5AhMgiDBz4av75Ghog5gGkBLZNYj8oAtGUtHigwBjAb9orF6ihSWHX2CJQU",
  "key17": "5CHFMjUyWZECdbJ3SrhBybWCs4thrgo51UREsK9X75FiQqxkm5niJRaDR8rWdXinBocB1aWELGRxPdmbLeYaq2j3",
  "key18": "4dXeZaaZv1CxNoM7JBzUuEn2sjjXT9GZnczZYmDHnUcQXZUYe6oynKHWSdBjcAfbgpMKNiS3KgXNyv57ge7H7yoh",
  "key19": "2g6TftJM9HwArvmohV3Cwz6PwdHh4g9u29hbJJ4WUG5TPrhicWXGo5aceSmH5oSdUt6ofxviAL8WJrVLrmvqraj3",
  "key20": "3eUTFAi4oFFeLz21L9N1fQS3ErFNAfpsdcX5GKZvm7kN2C1aofG94JRt9SioMCzzk6FJQcMTcda1qdvwKbE4Ufwz",
  "key21": "4f2jP56GZ3vAHpZHmYDYjoYMvpsw9csuPN8ZspfFuC6hL8nD6qT3BZ12ehL1LkSLFofsM6bT2LEXe7EoocQfqUoJ",
  "key22": "2iaXyJvpz4KVghsPYW79xZyUWZhzzmC21Fq3CbnJY1j15n9ugYQDgKjqig3wVbgawkZ12XkZnK3NSgjt6UYsPLRT",
  "key23": "4QZQW4yPPWjeqVTSiJYdN5CqF2k3koeMXkcAezcofLGtM1i98gmBK3FsYmeyLqhZWteoEtEhRyMos4EfBFcdnYXJ",
  "key24": "36v7mmEewCDqN8VGm2r2pz2ps2sb2FPxR7GKgzrMvTQC4LGdZPvELtprniwijN5scV3rb2pFrbkqb4YeLaeu7Ha1",
  "key25": "3vgQ1YgXFuRdWDWerHaerKJy8ik4pZr3NFPRgP8d5awtzWMB9ArGnnSE5m38VZCW1hU1cEEzzk4jQLWjAynY1W34",
  "key26": "4HdtRsvasXrdBoYYQrZvc3K2hFAJpR5XcEdqq5YWW5ieJKXfbWZY634Wht7ahLnfZDSJKV6RC5jHHHZEGSpw35DS",
  "key27": "5n3Mgq9LHqdNuceYMLoJYMkoDuEb1QMnSJKsgMdfiPFzMyMKibJodjzhuUd5T9BEGkUji2Y3wXUwp17djGoMr1yt",
  "key28": "673oQgz5x6GmrENUmsbXhsPuzFpHKrradAoHBnZx6hLiNKyvJtiNYJtGvAEWvwaqXn1ujc6wxqjRpHqGNW6SXk7e",
  "key29": "2yw5F2mQ2DzSD6aLHrLrnKdQmZ361ZiRzi1BUnEpC6iHETMgR5tmjV3Zrm629a7hTPQP8nRiqQWjEvDBo55CVriG",
  "key30": "4fqbW6hRqi4TUY6xsQxuahJnAXcJV4owPpsW8SwzeWbk6aQ3sBawBCpu38VTh67fm2z5ZJCdqQ3ZrS8jjMXcKE5C",
  "key31": "5Si469cQVrFUX5CYwvLS4JSpp5yyop8A8Rq8SEYNHLmaRvwojh8f6BNNurPquLesKdqWsTAMcUP9DRJLTKohyAnN",
  "key32": "3YVr4RNJ6irvrvjdFhd5aapXpgKAbJWbikP8ajg8XwsuP6VtbfdZ6TomeNq1vNpLXRMbQFcwbir2GjoQkUnWd5JE",
  "key33": "533W6MptTv4eMss3H7EWLfRZREV3cmyXeVjDFRNPP4Hm8bKpuMz7MoZHUpKTuT1bKfFVKnD1eYLag5DEviFdvPu",
  "key34": "4zwdtpbs6j3gyfmf8NQBzz7nWY3qdm5ADn1jWU9xMuieF9zNYy1DHQkQhqmw3JF7WoJeorsNvrV6MEwF55m4pqpu",
  "key35": "5k2LJakTxjGQJtWmsvSsXW89aj3SB2hQh7654kxYyhJ42CTtab3oibCtkqZi4uG3mSp7x2KqCgH21Z3a3DQv6W7r",
  "key36": "26hyQnJGzRwESYh6VRrhPm2LRCEUFzYTiZQR3499W3YARJAFSSgNRGKBtHu9jpKvH2DEoNPBUbCfXWsp8xEmNviN",
  "key37": "2kE94r8dYKAMiZA3qqvEPAAwqme4MAu8Hum3c9uGB9C5HeFt7SfhBvZzX73879EhycXt9hESxVQGku4Rst4Wex1v",
  "key38": "336y6S4pFYYupkYgdmB7FWTZkgAyCS7BmUncitXyLmPSg3X4z58zJ2aRviYDaQnAXzP6GKGuKv46YGmRveQ3Muhu",
  "key39": "LCVUQv9k2CDa6DX9v5QbyZZ52m754yLQ5WpD8hhPsTkFG7BowzMgUkQAtyefek1aHhsjZHy15u3sb15ZBqaFTEB"
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
