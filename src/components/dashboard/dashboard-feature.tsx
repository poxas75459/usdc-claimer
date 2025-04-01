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
    "64iNa55SyJD26iERSZNDZcZF7uhzQg5XtBjVWAPLWWF8TCL3pW2be6XgfnTb9WBxb2S2zuSb9zK3Vg2txZ2mx1n4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh8j1nTu8aePC5bmHUB1BsbHSCaUsEpUwrrLzqte1PAjFdZ2heVwdcctq93PwJURCZQtt3BHM8Gdwsqt3Gy8J2o",
  "key1": "zaax4NY1LVyTb1gMfFCvMdwxn26aGZTRndiS7uELReyA7NaanKyyKMknPKcgetpf54mL33c65BZebsMwrpxy7zD",
  "key2": "2XZo9Fuced1B9okU3gzdGwFqSrsKEJsxMjNh7he1o69C2UdQJmSK62E1RsL7kYGg8fxnSW7sXcFnyq95zywuEedT",
  "key3": "4SrMkeChajJ6Jzd8tveXJpETA7qNH2qBrcSayWfkSH38QkvuSaAGMYFHqbG1rWG48oWwSZPQMJ1ZC2wN62kzWFup",
  "key4": "5EnMJXS1EjHdZHRqFH6iHXAfXP3JQdz27bK3DavP5imp5LoXFZ6FZ9XdrBsuCfCu6Ahfqw9u6SjrRWMxq3R17njG",
  "key5": "5DqWY5Mu37rokAed23eCHf37bm4fez63PJQQXgcH3gGuQHF4fVGonshDWhfEApqHTGtJLS9rv9PsupZeKBKtRYtK",
  "key6": "4TBV98i4HUgfrdKdBRx5mfWSyN4RcayGzBf5d8f34Xzh5YMzU6EL6YUt5uyfweNNDYp6mMupPGkUH4H7SMBihKFo",
  "key7": "4npBsnkbe9gJ8G5DWmEdDXGp6vLzaNV7pvAvaAxFS4ov8UxPTwBhSpyhfRaS1yLqkro6MiCRLn7wYnoT2G9y7Btt",
  "key8": "2CUndH9f2qBGJoxmmekCooaVZuqQTEkm48MXraGPzimPgb9WmuqTmsRebcyMBZpwnjvFCMNu4iA53SuzVJs6c8Eo",
  "key9": "Pr1bkrHq16kmzY843PjoFVdJZY1MnYdRXUkARCTHxrYyigd2mnSPcc32GvhH3dcxTBbryiQitfnBFDGtEzMdpeb",
  "key10": "3pNMBexELjPDpdvU1gbgoDd39p8rDLHNQ1bNJ377EWy9kivkbYB3M164UHgEM4APtVnsUXtpLCkSWztsTT5gTCD",
  "key11": "3R75DxTj2gJaiE1WgMJthcWBxEz7DLLP9cMYffTzWWyKBexXCn27WHTugZbanFzT739oGE6dtxc42Tk8HxWoca2u",
  "key12": "5gjdhDh5NRykHANRjWvDFe4W5V8NX7SLAMqcgJhwco9N953tTABJMyEajRzUehnVqMc2kw3AxqVbFYeiQ9EN9eiC",
  "key13": "2Aoe5fGR9Pqry5mFGn16f58GvwPhRsgkS4ULJMGqgzmrh3Cmk5SaUe2U2Pj9w6mehPA5cfw6Vh35FWC3r2dNHL8M",
  "key14": "3EukhwpeBVuWvpmFSPzBXCK7K4hLffAsfBYLGTxxh6Sv1BCQHmsf3sTdxFcEhtnx2twzdCpwcu5aNWk3Y3qn23ER",
  "key15": "wm4874r4aXLGEBwGMrgwMGVDzaEzeAYGc9DEH45dfdAvvwzj5QHMeEtXD8RiRBJdhre21WrDDdH6EZWMPfTMmoi",
  "key16": "4HFvPRW8DeRbwXB3t7FYQi1RxYedrjKkRJStrMjgCBBzgEFhvBQvhJgW2B1nCpCwFLJBG8WuQsbkkDsiwTRR5um6",
  "key17": "2NZKvrye4qNAquCUEteqseR6AFw2oWMAgYtVyez63cwDjh9vk6uKefu46qY2hgkTGjB2zipusPPZKeiExkgq6pL3",
  "key18": "4iJ53WrQT6AaUmRi6YnzzmSSFrLtYRmuoLtxNqywai2oTvQEWVz85vDE32NkYJXkmzBpVXVdyPa25oxcwSoeC4FM",
  "key19": "4Ny319oUsTj9rNkAtG1bgTk48rVDcm9qbsRqufYavuUGbE2SrsGVnHLV8eCUjMpBR6sPo14Yb6PiZGBpbKqBpgD7",
  "key20": "2eKNFQRaNEwJ85avnwYmUBx6R6JFEtdqRtT4EVrqWoHEJySykgeWtv8WNQD9seHTgUnN4yeKedQexeynVx2C1pa7",
  "key21": "65exDmXfEU72kontf4VYJdC1RvEjW8UEd9HLUiRV7YvQoZk7cVVZjx5bXf14wAUhfwdsNhoRZMt2UuA4R3REPfqe",
  "key22": "5ekHe7nYDEAxNKFC6BhqZNmVZf3vRnKHmGQMFbhjPj7KbrU2iNHLpZfbaJcQjTmf1sKhu94hRCgMHbgM26yLiUG9",
  "key23": "ogeWYsqoMLuSxyYNTJiPVrwEYSVgwmi3RWcpqRXnJd23N4ERVkLFDBedGq58ohV9xeK2utKSqkHR9SK5mgtShFy",
  "key24": "4bEXJuL52c8QgSHKSnYcDM8mcUathZDqBhbRoQsLH6rChhwWSF3jdp3ASZ9x7Br3UTQWNXv5MoAvRhKf2ck6ZRkD",
  "key25": "57KiyCT9FDd8S1jN9KMZhKQe3uVRrGbbHd5RPdxewGGtYjwLJb3M1dJftxy7Q2dzvM8XmY6ahbqmmxrn94wkZbw1",
  "key26": "5HXwUn1wUEJ33jwCeXb162EbVr9bcotgAdh31rhuwU11nRKfWYcFHGUjGk8KWv91K5755rY3eTHgjaQZLmKSKX6j",
  "key27": "2p3SyZiNJseS5sQgTHdWx5owap9F3q3mB3Vjfb1qKQg44S3fEuKxywV4uz665yGNFHQE9isCv5JRe7Um7wWvVpsd",
  "key28": "3gtXK5yF2F7V8xf3q5uYu2nha1ZZaGkV4jG4XZShg8qsAphCj8aL1DEJqkwuGSUuHbfHS63oxEGwBhtTsA8N7c74",
  "key29": "3HEeL7eNkq4yPhQdEgXokkcsp2qmJhmEF7L7gGAfDnerPNKQseEziMjssc3e3iARJk7KJfQf6Xy2rJtcTNzS9UT1",
  "key30": "4jP6xQuuTUnLyNdEAJhVD2LnsjWh28JKSSr8iVuG5qYhBRHgSbWEcn3ZsXpfP2iymmTYGN3cvLTTn93fFCjfmnhk",
  "key31": "hoXjxWTueBYYZKzb36MSLCjt98A4J6XmmmFx5ex4N1merNXx4SevYi75acMab5mAKT2gju5vWQDDijEB2r9VXDp",
  "key32": "4e2JwSdXgH5BN45RAEv1Qr5Ub9hTLStiVwxnDERZYvNkYaEEkCMmgfjrrpTtvB3V9hKgfjeHEZyyBw1pQzepSqAu",
  "key33": "46XXm7j18EFreA8YbzavK4TXayLHtaoJrvyBrDh3ZeGXtcouoeac9F8UUUD9DF5cz3n3voGh29eUEACwhF4itA5F"
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
