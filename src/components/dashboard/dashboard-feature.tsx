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
    "5FVsZmbb41QX2CeAmRmGoaHxUJWayJJsVoxNpzRAXV4XYQfwPNRnLJxGcaSyxT6LpYSyNhpospF2swWSNy8ptGeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCshJXGg2GDUaAarmx7GZP4DBFC8bZ2Ljm9FzQuDHYQb9ouyLNbeskeZmwCuW3DzVHG5yWAxVBB4rintuNSd9MD",
  "key1": "2JGNx4fFaVGpSdadoKWLu1tLmDrNvNrabSoYVqe94fHwz5ttfpzQbivA4zuL78m5yxhDnthMsYsSRb97zUm8j6gJ",
  "key2": "24vQoQhJgeK3Uey2Tte4dp2YuYc2QVSxEr79Tx1ZNbzm27pP5PAFumhxKXHCoLWuuX3cbetVZZNayvzn4BGChUDM",
  "key3": "2SCKzdtNdb2YoQuafmVWQvXwRMNNxYwbCoV9sr5dngamqMgEf5mmhBxj8kVzEiGbvMhrcRkSigveiFrHDj5q2adg",
  "key4": "6286u5RTB7M4zWLbfVXUkxZTkyzURi2mtNduBHgA5PPX8KpjBTptsuJBf6ZrexrAKZSdiCKUx5Q8kdayoJwe7QXZ",
  "key5": "3nXLkbvhHTrfpALSprbshUijYwkatvgWSjYGimMVmrTv3cK2zKm39ifRfU1hHer6oHc37eUcbtchorSiEGYNzcmP",
  "key6": "2ab4Av9h3qXDFchtPfEVSqmnBKueRX1ZGH3YciCuPUMJxWhZhcukRxvcSMt4puKmqyicDdLpsPGuNGLbH3ZQY29e",
  "key7": "QXuidJcN76DHmU6eVhCCDKvyReHNA26ceERqHUDSRidfEiUUiDGFGA5gdq5iRzu3JBnqPGbh4RttE9YpzGxSmEg",
  "key8": "t6c6isCapcuZ9f5xsqcABcSdVoURXgrfXbbKahJbVSYpgGFXmCo2m8GJMrQ9NbfazmLt6UrLQTWQHRMfXxBDbZw",
  "key9": "5aAhLqCTC3n18kd4fVenVXcEoJX15KpR1v1CkC5622Eai5SZ2FJJYKcqscCYiwdmNfK5ZqofCuftfdp2b3zchJBw",
  "key10": "2KRM5PVj5QLPstt4gZ3MLseqEDo3gETVQjh23ypr3V1jAY6HbtyNyiX2KA776f3V8JRyCk3zfb7DvDbH12T1Q2Nt",
  "key11": "41MhH2radxUnKzYnBePpiqoccfVC4p3PhdxcVZPemPqUnqDj7fxkT4n7egKtRXP7jVdpBg3GPJgQcWRb5sC58sLi",
  "key12": "oLn8J5dSwQzvDtVTpoTpZUUMwjAYmAVM1QnKK7otQFjLGGhN9UmT9NtQmHcJiCVLKnAYVeZxqAQ3JsVdJNGaFLk",
  "key13": "5K23mg55kFKEFRwso55aGz8Q35Hu1UsGhi2i6VvE78SYKVSm8gsyajiYYxRuzz6stxnCfDLWAFFcSDSgo42bengJ",
  "key14": "3f8r1NaxSqdW8ZyTJDSHdXD5bM3yjY9cQ1tLieuEyT4S4zbe3RMFm4xdot6GgqPcZanHyjdmMCgzD85ZoSJWN2ut",
  "key15": "woZB6mYRhTMDznueFRjAxBCPNyRbpCXJJRR1xjbv38dSDpg3J4LMeXp3xhsFiHJLBu6wbmBQY23sgjDFRXYSygz",
  "key16": "icS2j3shVXuKRkVKzZnQYZLfAmH7ZzQeeiPF6vjo96iP5u4GiAD8D9PrQ7dWTvAS7tGeA6zbpL7GvT9Wu1Zy9QM",
  "key17": "45LKUeq512tVJsCR6VrikqkNS97SsprCpYUwXFnqVbYyL3EJsyZbbPyhA1qnRLYa3r6wXuMzAXdACJGEa4CS4j4M",
  "key18": "5Vv9YY2PDFLP8oFW4Njx8fqRY7X8tWT8XWFBFB6erJKpWJ14jevzTXSejq9JP2XzL6PPdxJTQ9ZG9XKUiAgkAY8L",
  "key19": "5q4iaUbSzB2zn8mBWerYGrsNHDmbaCqKrYf7XKmZUie9BpnZ31jxS7gXoD5rKh8ZzgjdfSkqTmCHcHrMRtK8KsX3",
  "key20": "2F4Bpb1QuDthVJpRbFMwWBqijWAcLkCjXnSeGiMTZrqy8hQRYuXwjeTdxfA5XE3Z3Z46NKt9mrLzYXgHfPgsSiiQ",
  "key21": "H2XkKdZwfZ9RBV7BnqzwFSgfJNHu4jAXBYd7cbFMzBjhdQDCnMXoiPu71aq8yVFJUksR1EYToVrD1UKkfFUDg8w",
  "key22": "5MaqxsL1JPcyBSmWgWL3GMTiDZVXf7MQy4MrKFYCfzAwHc2sZqHbz5wdTVRPZmFAxjMRWoV8eyqAiGTjXjGMig7i",
  "key23": "5WNW8Jd6K8Suw4KL6bdhsuaoGPM1X49jrNShSboLV8J6DfkMK6ZwsmiLRxC8HfEfmy1FPVQ8UEdzEBNuvA27e8cK",
  "key24": "5FeruiEuSyk9eMUc6BamsAoCrJVoMBBRmFqr3VU9CmCgmGNFvtq7J6SjuEb6vMdxUPSYGAqYuBGyjJ7YEzYBpvat",
  "key25": "2ShA3dQ35B2vQp5xcxLQTaAHFujbaiRfCbFztUmNsJKx1hrYXK9bwvqP6mfiyeBraTURP17AU8XyUDb3hp9kqAa6",
  "key26": "3SbRtXPmJiCpaNwQade2q9Q5GJcpgXPniaGqg4FoRKpBz5qdkvJ9upRErPxmud1NK3nmgwCtaLvVYHD7yNZbi8ri",
  "key27": "FGjheNz4CaorAqVYcAz1cM9HVXfTvQ9NyFyEbiXuFFBiJgtucBHtrqQRqgAdLBdJWuMw369C2W2f4CzPr7Eb8Vs"
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
