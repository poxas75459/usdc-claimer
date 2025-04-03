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
    "47ziqf1XYyJbfxAccswM5ycsxUzGZJKEkHKaQxTdSY8E1tYy6go7ZxKzDoY6k39mgGsaiyLVqa2dc8dSjmByRWXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8LEawV9USXR9p26xT9ZpCaGipDrWTtLKP9nxSf1hArdJJZfB1FFGsWvEcmZ5JhowQm52CF71DPqffr1ggQ1Rz5",
  "key1": "2GmXQGCWK1inMFbWdA6iPD4bzYrqJvian4cGYT8NQNPkERjfhAD2yTrgzLiRhh2v7mTESq6d9hvtRvuJSFh2yiYD",
  "key2": "5c6F85hS2BCxRsYcezJVnZ8N9Tu5kJcGgNwFxezHhKWjRekv3y8pwb2z9c6D3RqfHn7LaBHiXCirzMKwguMAa5kW",
  "key3": "5NQ2wTdm8edAihbFwNKs4F9dccijeBhHrDeRmrcuJqBDCboGQK7ppZFbZhAQYc7c4HuDdMyTN2vwnEm23sDFG3RG",
  "key4": "3mR5dVQm6qMrWiGhpUj6BRgND3xCVrEwmW6HJHKPNf8WTo1qSrmRicqBawyxchx3zhWrWBT4Mcy3RSohSafSsdnG",
  "key5": "32mSxqjsVVeyGMG862uvh1ZJBLVWj8NfoWPhARRzYq7PRWAMt34WwUD5yLW49GpPfavf8FbCAKqGRfdTgnt3yjpo",
  "key6": "GbBo8mefLhRCVy6w43CB6EYeCQXxRHU36VuxUa6kq1G5VMPyLQ5vnHTqoeWeGE8XopDzXNGmiuXXLNjRGiSW8vN",
  "key7": "5yzSPWN7E7QXCnrdUi13dShMMaVv5XwPmPMdceaC5TRWaHULAFeF6ws9Bt2yd8zLuKwQbjScCdrQrFmzQtZq4kDn",
  "key8": "3XXNcXRrGadpWMFVUFZsBozYacDEfEBVQx9c4tS4Jxx3wUGD6p1PL4dY2rKJxfn3tNbw5f47iP4dvHWuDa33NtDN",
  "key9": "3T6k8MtMfZtWxwBp1h2nod3G62z2C9LfvgmnuhxZLhADfPzDcDkpY3GJqjaMDUBCc4u87UBcc24s6C5vtuagv5cW",
  "key10": "rnEXUjRYFr6iy76AAPjKEvLKjChrbopExaLsKbLPdmbJLGoDFF5Nepq7XaBdPPYw7pgadYqzdn13RbXJiz64Sab",
  "key11": "3bimJBjPh3NAJ6b9T81Etq8N92drPt2uFR3EMKzMdc8s6Hznu5MjtfvMuzvDQjp4Rph35maruUo9kongsTwCJw7U",
  "key12": "2yNuZVH49h746JMspNpnHPAn4BwWEosvZnnS3LFVDyfCTn52ACCn5aWuQxDxbKsAmqoJLrTWA2Z7whaYMstKTGhb",
  "key13": "5cNnw1Kcd9GYYkNCgMWjzKVCsaVJLv9wKhDtzk8NwepVKUcma7a2WUXrNsM5f6mc5f7o59dckPSKVCVWn2hQxpcD",
  "key14": "2JthWtmiwup9UUytBWxy2tG4zRhkuPHX6BSHsW7QH3tJvEpngcGaTjsjo2bsZSow9vspnJZUr5CrAc9PNUWeb4TM",
  "key15": "FXrv3T9FRXW2fysKVCbv58Kw8rGRiGGHeqXVgXAV9TfgYjiUBLmwjujG4dkpMTtHenTfRU9Lr2mdMr6UTFNXEFT",
  "key16": "42NgvTGZhALU9SW2Dck8RFHkarSS9dgfySpbL1x9c384toz2P6Bq8hqipA3fNAQBWpAq35t5XvU5NtUwW262tta",
  "key17": "rSKvEqFG27wVde4ieoFHw7bNLxs3awj3pVevxkUnVLsUA7q4WGvKkjzmr968uJb9i6BR2yMWcgD6ixoXjrtcHAA",
  "key18": "5mzJntg5BL5BiESuFAB9XtCcTabHCtEXHDV6vrupbfq6AdUDJTNNE3zkQjqipnYGtnt5hrAC78Xs4yJr5BzrkbTb",
  "key19": "2mncuiQkuBR2mrpWmwZVdD8jkMWosLKroL1vnkTDzkKYbserhVEzYkTgVtDsrrbZ6u7dy6R92jXaSX8fETGtrQaa",
  "key20": "42xj4GbfFzk1f5toCUntRNkNFyq7Z9DL3ADczHDGEeYLefPAtJK66Z1PcSGRPuYRs9cunjcABguttvk5imzemJuA",
  "key21": "2u5miAdW4Kuz3oXRsgucfd6KiCeiW49RQtBJ88osfRaZFXPaACyHf9gHmhqqeVeLuaMCbQoUC9q4MtRrjY4YUmEK",
  "key22": "3YRRKcbQLmZM3VajLiHyGJLh21fxNJP2D6XF8ZkFhEs5CZn3e7Fnvksym37GohxySrWPHKMHxDsng6mS5qcZURnY",
  "key23": "9eCYFG1GtvVAeFV88x21cjpWgxoN2EegdsT1rsSNh7CCBtBtrSzRkZpJUfnGZQVc8T9L6RwvKBLd1MHxwbda5qj",
  "key24": "2dt3chzoiMTNMEfBcQmzsSrpkadYo8uxJRnFTwZDeD29nx8bXHxq8nh6TjLm844wNBMSVhSW6wLXDcGhK6RqY9rn",
  "key25": "ZbDHWyyXRWyvdX4DKsd9sNHk2GVV9jWfWmFeukn8xtc6m2SFQ2oSoszhGerp5XEqYH83gpyWEgnBPrMxjKmU78y",
  "key26": "yme4cfyxX8bUQfD4zhSxTrueiCsyLuxzFP5cmiqVsdyWCsxcnXXzjSms2pwHFGArTzc5zNYBfVdUoJqCXZfTJcm",
  "key27": "2MCXTQqjqd4BxkKkNQdJCrHWokyPTwdZwYKiqKLxW6vA1u9u4FC8b299jJ8zRSwCLf8YRcwq6oXKgaFSFG2rBY2a",
  "key28": "VWqvB5nTz24eYgboYJXN8LehT2pK344j4ndbZuNMRLoNWZ9EjcLDv5hpT8RghLmZRBERdQCacXzX19rDLuSsjxM",
  "key29": "F7Qzpx29dFMVkQ5ATyFVXhHiJBCDQB8S1AS4apYeVMaz5mjKyLSP9q1A8wD7gjy73tFv8wjhyDoNo1jHddsoYTX",
  "key30": "3fwgP31nQANA2XtABpUbLoL8bApkadQRNSQKgAaJV91uCEetzQWCjJwznHPGKDuXgfJcJe4rce6Bhxir3N2mfWaU",
  "key31": "aYXKtPjHGWMRQfLbP5VwR3xNGE9PkH9KK43AvQ1yHYRXhUcnxTr9TZg4P8KxbKH77kUWJeBWpUhmogKYqMw6yYA",
  "key32": "5Wi9cbUeqPqDUMVGog7nerEBmoRmoWMjaWpmDQUCTz7EgQcYzLPihN3wKihFPqvQLotCWDiTtc9M4gZ7mP59uGah",
  "key33": "31x2euGLQttR9ZtHeVeNKE5gHYjDpE7m25ZZNiC9zPiQxbxTqgeqPAwrTGT87RgUQiWeiB2hgtZYFeoLdLhCqr8r",
  "key34": "4gfAYdg8DkMZq5R1hqpFywNpDR12RAUq7wBfFG23UthzpDjLZ9UNwZ456adUPCzzJcw8xXJEfwyUAGivfPiDF6u5",
  "key35": "4jHc2veQH47SzBvSXRAJUDPMAxg2bggzEKd3nkh4MDGX5TcQev7Qtpmue17FAxY3EMWGWSAqsgtzxn4mTfaciu6j",
  "key36": "5sbxd7BdCRASj4Lhs7EcNV9d11LYpg6WCsW1RPvLiuEV2KeiNfqfesKvcf8D4GgdhWr2CiReg3wjS3vZAF4T33YM",
  "key37": "8BVoV2gH9FMuMXZZ9Te7GePiySxF1p8WbqDL8kHxLgynjRTsLs5UtgtMjP8j7mFvJW8hj8GcqnVxgMABzgmC5ZK"
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
