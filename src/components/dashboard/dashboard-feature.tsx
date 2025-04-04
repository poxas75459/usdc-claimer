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
    "3rFzC3L4Y8VVPMyqLKKHM4eabzr1CaWMupiqMEMjTQQdcVb94HurfS9ErUk6p1o4P6qyXao4mFrm9iHcsdZgdbkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJHBsauRAWxyZY6FAU5hsb9RYiW1y59KfEcrF97s7yN5QoQv6MRMznd1FaBvwo9W8ZzgMCh1XqRTxc4sR1MzLe1",
  "key1": "2VoeBx9yj1ikVgqeGsdFBc1Yox4FTscpe7uGDjdtKQPzVmZib6xumQv3mNAvk9k95PscAmEJgAsampiEfeHBXXUH",
  "key2": "3iAtNAuRGpAbhvUWSaBXcuVYmrDtYodxnkKTQCyi7q5si3N985iDyJ1wRG7mCJfepCork9FdCPPyjY6XnTYQzTe1",
  "key3": "53Lvj5gbMkUTMURu1XeY4U1pCfjicLSa7qHJHQ31pyXJ3JXfa3db9bR64nKetMxEjwwfZ58CttF4cXCnWgnqXtPM",
  "key4": "3Mq4z3tXEagv1ZvGbHLQKLuS1oDD2HAoUFFTkExckCB7zwdXABzPCYohAQw3e5ZzoEkDZGgaKWoFsP7AbZoYhmKF",
  "key5": "3Xsc3BNSrhMu9Xvej9FuCT8hh4bCxS1UKYtBvcyu8wt3u7SPFLuNHzZZvP3DQvRgSaTk5B2JLzTyVo5aSsk94PQB",
  "key6": "5geX1mE1NAdngQBG6jBb3hF9kdgNC9G2Zqe8tzUBYHmYKRQg915LAZNifGAbeaeuiUtJrRtdZtcDtKit45kS4hBJ",
  "key7": "2HY4faHLV44Hy48aSLSBgLsLmHhrWZmLa2DGyDP1aCA72D9V2UJNhCZf5CzzuWyXniusri3vdahH8Lv3cSSLCM9J",
  "key8": "3xKceYCbgeuBEe4t1LBrvsp7jEAWyspdbgZQ23k8bfttnHBdxLPzkPHjxByRmQj9m8Syga4dTBPkYY9Au45ubxVi",
  "key9": "663gGbsU2MJCUVLtKUPcnsPAXdN1EPMSmuS9Lm7r9xYvtYaApujr41j3CBLhaLsN87xbq6voiU1ngxcJJmEBLijB",
  "key10": "5neB2mWV2o69YtbV3xRn6WA7nXaXXqn2ExDP6uQVRz5gqUqUAuuPoRnEUg6wD33HnbGE1qzYX6J7RCMowhKeGSeB",
  "key11": "4zBgkFfvWv1gzsAxjGFxNeek45vkbDEc5cJNr2Y6pQmM2pnmrc4z59JD31rL1e81KW8CXud7CUPA5gaJfhQiJhj1",
  "key12": "2BvoAo9KcaXT7yHHzz7SR6omGrHeUxvdHY6bEMGYWG4kqoEvDRQzoLApc7mopm1AffWJq7jwZF7VNf2bDp6G7N8k",
  "key13": "24Jf32XsVBdGzmJYHiTr4k35smgmTizBbfLgustfjDHEkd12JJkSKSANm5jsrBB93Fjh7tUa7YSHtLCBpeoJ6Zfo",
  "key14": "3VHx31oatrj5N3rdUz9pSzfZohnMonZftoqUiry3Mi5jTTWF2TvY15mH1VenudGpv887p43bzDAytapiQC6jq7GM",
  "key15": "2R9nmKqRebZ9mNLMj98t5CGbEHV3JCWhG4ryK2P3gXBnmqfdGfh6B3njWwvKa7sF3WKd5wHeZvFvrcmLHMrTvaaZ",
  "key16": "63MbYSY4VFK6axmchNGgfd738RNRgKzb1UYfHP5xXgnchkK5EzJcsM3viWyQMLdSJvCm4Dq3pxHTGsfR5fEzLYsS",
  "key17": "XVUxJ4BiDvrPDtFBrNVp5J6qkLA3EVyDyB2sggFV3aoNx1cDcpmEh2NXa3A3zdaXFSCdSXCZzKWBxcAJrX8wpcL",
  "key18": "Dov4vnyqe4aYEGz3jjBVmJbcmQp8ZojAwiejL7P9k7V9zwQq1m5Prtg7V8oiS1MmzgAvSCVbE8kMk2pY5C5zGYR",
  "key19": "2AFpZXCuWq7nVjbCnnuUK8cmdVcNQhdCicGxdQfooor6vJsmXX2jySeoeghnPdq3FbYywA5T1eHSCfYnnKQt8MTh",
  "key20": "4WumkF4cNTb2DJQ1aZaAddEmQ2yNLfyS3vfxFHz2aF7DXCzssR5CDpN59WLwutDeSszqn86zPEuegyFozAP2nYjq",
  "key21": "5xUUgAY9sMCrS8CaMw6nvJoVAWAudKTT8v4WSz5E5JDoH2doRR9XwNnxR7U739xzk3GCUqSCm4xHuohbcUrHHXP8",
  "key22": "4ebzwaXqECRWRae8L1tSnGu65rYKc9TFj9YQVgn6n2RpGaa7qKKLW9kGqnw6Cj5vToLyKSdj6gwHjHNshF6ANYH8",
  "key23": "39XfEnZ82ACZPkLmL2AxYMAg5EHEh4vzZWmdYBkvXAU45WSCMarFhtdXYyvHLndwLBWRXr3my71dnZLStwzocj7Z",
  "key24": "pKeqai9A5GATG2NN4g5Dg3w3UUYosHbx5YAtapjbzgCLHwGeAS3L1FsQzYRfTVJr2teJbaW3Wps3vqFbUTGocDX",
  "key25": "CyoVoUi63FgefDc6D1SXVxyjSSqQkfECFBFo6UsCzWYvJpQoq9oGaDtTyQuD27MZAXdjCzQNQTAjLjFk98es7Y2",
  "key26": "5vzzG6FyVcVRoCrVLyy46gKfvVjCMaN4ak2GmQLcmZmeXXEKBduH5znLdw6kp4RinDxC17EcbqRTvaVnRAuHPQwY",
  "key27": "5BqhqxV62h7PcaKUvVYDomTTQux1jUAQWAQ9GPszxVDJCftGBZ3BVfTu3AMeMtMRxsR9KsZKDZfN4F6vbxnuKFMK",
  "key28": "Huf3in4QsLnVT9FjtvSqqobUXmDyDwiJY1cQYYCcL6YjmnVLSg6vJFEzQgVvdWBuU36dakb3WEyXuwDMkAixY14",
  "key29": "3enaWJnp2mpx8pPxuSQwFNLUevhasyvjH6zywEDndp1kMUYkK9PrJ8xi5YgiMUqpGFBQ3ftyFA1YNTDWu6W5fNMp",
  "key30": "xAfKEcywwgsFT6qPQYh6y36PivJbJzM9Do5hVAcaVeGcJA9F9waJYLZcYoBXC1BZ3zsx4ytP9dQd5RF2VcwrG6L",
  "key31": "4W2GnKYpKTZZXk61LyBywsC131qSfxJf8KdvdoGkHctd9eb3ehQYKoktAxcsTzhBXrnfiZo56BwGyD3XqCBP8PJm",
  "key32": "3Xjx2T6UHaCRwF1vmvL5cLh3qKxEdBcEPwTKKVHqptNstDiBQqc6P8aYxQmjCXJK4TTQP5L6M4LANTjtVvLSaoUA",
  "key33": "2xKip8vtaCuPaPCgrp5bMZ2CX5uFKgWCVhfyRiXjKABSk1KR8WXZtFUUJaC9o7GYhp62em3pf5ekD6tiYH1zHdCT",
  "key34": "4naggQDcAhtRDrFAohPjUpVRskX9kS4QKkEz4Qe1nMpwAPZtWkNRgS3ozhhGmEEYkFY3kaVrqtVEU6JwRLDGpJrJ",
  "key35": "2GJjB7wHKWfhQ3gZwdA8v796zdhVAuPRKPERrz4nZySgqUq1E7vpRm6EhTAWvEutBZFpgFBQcv4CckZtYM1xSQcv",
  "key36": "4LbPDEZTxNdTFo2gckPpM1wuxuDWbkJ9JgowwfmcdaFGjgzsPeAqc3kzFpX7vza61V8TLrocAPCKUBgYD6F8EKnx",
  "key37": "92LHPyBJSDooohpgnAMLTrisNStpU5x4PcvvD9vPGWABJcK4NysNchKd2WvVtkfg4dafRjSwpdFQ7MjUtWHPRWd",
  "key38": "xumJ5gAp2DepbwKKRpgx2omxZVFuP5C8VefYuP4iNUqvagcGE5xi8LADbhQNN9c2LdXtSqBPZoYNzVPeN5gu6Yv",
  "key39": "2mQH6kZX5cqC7Pt8oRodCN8YMyXLU3BKYXa8mokLFRaggznXBcvQYx6NKhfp2rjCmwZ3vMKQY6Ax2pt6mX6pR3sH",
  "key40": "587YUfZur8irM354Qov7GCHFeaTKx5YPdS3eTCun3BXwcw792d1TpkciqCz3YsMFdKkYBfeEV4Lpdnxfs9zc8x2c"
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
