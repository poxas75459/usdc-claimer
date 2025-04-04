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
    "2SGz7qd73bZ2kVP7EtR5Zq32P3hYeomFUKvdUNHiPeixp13smsM8qQ8WhVuLfHJq7S6TPV2kYfmfkfJ6x7mywAzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33owBeRzsoaTotTbtazvfZWWxcJyUjAnzPZq3bVtbxcWDcxuqqDHfEJvDFE2Vmo8anSc4qMf8qThZZpTyVSRt2dA",
  "key1": "LCr55b2sgaDbjy5Ft8EEuDdwyHNAeMRHhArernque49hWaysedq4vmbGchb9owZZXbqsp2Qv52xXTzUqVziK4LS",
  "key2": "4aMZZ7TxCnrjbKV66TTk1pwp1dhKjPmLd8W4bTC87TNWcsaDvX2idqYizuyET5wNscyd3qqnE39u15wxbBEev2AW",
  "key3": "x8GYrAyGJrbF3wTkDzU9rtKUxiwopPXeeZVCPJDzo69FRJnnAx4dvogks9JwR4yXaeVGieap53mgkPFKjMpU2ip",
  "key4": "NrwEX2xXhM8ohfHEhER2XU2sg7scXuZGjpyQeNoWTarPAWxeTjdNvLbrG2RDtmfCNU8NZ5TjTtcJBT7PvKViUgt",
  "key5": "xNmBRJpJiqsmVhuHZ2tFFzsKKx2Z9WP8Gkarvf6ad18KgqdxNAmNERE8uvvxyv49DdD5SGWWg9Wq9qZamKxyoPU",
  "key6": "2jKGfv4wbaHXxQWE7UC3Xxj5GoV5vBNkvjxGKzKf2hCdjTuxokUh4X9VRcXqBtTDodottyY5iUhdidSs98g4RYS",
  "key7": "56RYV4th4mCYJy1vuJJgk9aN2kkrkdWNnmSynYryA4bqnfc3eGkZnNjJnPutgPiCA4p6G3s5NiqMeLF4xB4g5Jrv",
  "key8": "4ZJ6dBNsKBhZhTX2JzwtbPYjtRj3fURAVR4vmfyVtqNDdRNCBzYhFVX4MJJquf5Uj9XQP6SFnFLEenEUuTyzBXGZ",
  "key9": "3ARzRtMoQZbDip6YuthTrWoYcYM9wLYRH2Pdp7DzyB6ZEwmkGHR7eHnVmsg4GK5KpSTdfPuGN7FYWjNrsxbFSENU",
  "key10": "5Es6n7mWoN119qesj3FJW31kh6zQ2CvYcAZtaAZhdpFGJ2DQLhfPKX4TyRTe5AHqhx8KkUuCvfSZaNiUWz5swd1y",
  "key11": "4q5zYYNvr8jRiNgtixQfKfrw4iETN27YsHHKJXXn8uLvBB8Vq18uT7n8SjZtoBzCs2JxWsK6CcgM33s57fu8gacZ",
  "key12": "5qdG5jAveoCcxrXcUwYef5423r7itEjWQ46oxsGAQBaNWU9ndJLa8sbc26mfsPpMV6D5rvbPt79aHf6b4a2Gj354",
  "key13": "3JDbubYb4BCYsqyzPgCjkNC31BLGyo33RhnRXYKhSZS2TGJrq2YP5LqbmLb6bXvecP3kwnxUPYfD2pW2cQFTUpbB",
  "key14": "3cuN6tP6VW9VYvro9CgowV4iSX4XVqTK97krqBFfP96YAQS1gTU76a9zQoy3gE2VAo6UB2z6jDNvCt3Wg2QMhd64",
  "key15": "4FN1S6r2JnpZfyfcMApDFqFovbxT3PK4nGJGfEPbmXF412DfMafXgqSdPazAZe7tTizB6cY5YYr7ugyKcZjZYibW",
  "key16": "53hWLizeFggxjYBSxXM8swUGcw7rJ4VcZhQqfEGmihawcknjZkLbF7v5JB29TnckYxwZJeUqGCUUVvPaU8wPySCW",
  "key17": "2Mp3x73rqV4EpJagpMsbc7n9PqqwJJ6npYpdGBZorDRkrj2VpoSoCBYH4NvcUu6C4xdui3yhgb3q2gMRpDodiZvX",
  "key18": "5JMCQP4V3HG8aRQGNCYSE4BRYZB3sRAxW7qxg8eo4MLXgJp4AZtqzW3xE7Hinrw9vZ6CZXsg5FpH1djq3L1Vz52X",
  "key19": "2KP5kWBYocVe9HqwFks8XK6LxdiqiM3h67mPZBgkLFr41qM6CswkBhqG1XTWJueWtRbP4CvEejwuQS6sfiHDpkAR",
  "key20": "5rUcUmha3XDoU7k6KUy3RSwH8G5ULRCsXoGWh2iFYBAyqicph7rxB35siwbLUVzbQ7wGLPNvbTaM42qY2S5fSf14",
  "key21": "3t2iBuzW5BVwiqBt2DcjBXPqnguky3tiXCWm4pDMdgzi8dcUiYMrga3HtQWv8jq9342h1SNqFSjjBPYpvtma6Mzh",
  "key22": "38tToJkJX9V48CqVhfGrygpTQhEKHJsxVRuTjJme4JqvTGCrPMDwVZX3K3ZNWdpVTCUVfLfSibvqFJ1SS61M7ABM",
  "key23": "rQzAWVkKVQhc7H79GLoTN7BLoaaTMUEZt4hZfuNRSAr7LMXqQ48ydxWp9dn8fubi2wxxJzeSFQJT6XPzhMDX81W",
  "key24": "4tMy2WmWhuz9uJKi5yajew9aDiCgM2e8NC9PgmmW9Gzn9yEyWJf8vsTo2Vuw2y7bza5JZVyUnJNzSw1EWzLJaoqi",
  "key25": "44Kx2dsKJW1R2KBKjx7VDcaxxCE1KQ9DzyP4U6ZpsVCfAAjB8xpUgpiJoLV61C8diCdKVi8a1aLiAipgFQmTaanL",
  "key26": "5tvqggUpQ2QBMLvScZ1gxpniwvUARQDb1Mr3i9L3JNvYbmegFYBprQsqh4ETzoT5G1srLG5UpDRuXtMBxVfSVxc2",
  "key27": "4D7XkxNpjtg4Q6vXgwbtXm4CS4H7cQx3q2f4JUL4Vu7jngVtqrgY56LFtJgNRSJFrrvi1svKv22JgJHxc3mgZc31"
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
