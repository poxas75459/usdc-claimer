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
    "4dYRVA4RrqwhUaBBwMyKVUuVNx6Mh83WHDEAhGR5rgr6wJBDXz6PtQHKGcJqmLbtupKnVUmfwTErAvphRyGH6x2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfHRaGhsRDdySJUG4yuEyty87mFwXYN1bt71eqGvuSbFMaWmvEiZAQLBoXuuAyq64mnjgrgMLQUq62PysM4BwtR",
  "key1": "3XgQAxzympz7oWsEBrVGH1xPqYSbTTtDSNf7b7BwWEVkiB8UJGXFTm5qLncpGsuW9nrpXcuuhjbQo2ZcT4d6eVXM",
  "key2": "24ZnGB2E2MEBs6d8Kvp46ZLQvdAfAPAupAPxDjqAgMPxB2zDrZ3Pamf2fC6Fsh6Ai8s7Q7jmVsSrc4XTVVNA51b7",
  "key3": "4sgBfSjsiySdEs1rsg9h2SLEd5GYDMNLUNvzK6AmqBGMmjsgzsAPwZFjdxAFF2kZrpR6j9ZSYNHAeBEGgdwFeSXG",
  "key4": "TVfHyoa9UGoAaHfMuf8xj85Ayz7G9j5kATVbvwo8rHw24H1kkgxTJGFcFwCZ7oVYiQ2wTAc5aN5CtdbNHXUYrhC",
  "key5": "33LpLZpqSMfQUncJzqKbb2eRnVvotqXTWxhYS9AdZk7vytdwca4XRrUBuzG2eGsKHSiCxH46ByHE4PeqoqNNs5Lx",
  "key6": "AFBHjf19dBD4ryW1QHEWfT8yvbB1TE3GcNnY5PfsM1Fmto2uMfwBZPPGAw2qv3pnLHk5Hq3Kg3DkFR3Y6N3UggM",
  "key7": "44XFbpmB5CV4pp87JZeyYrNVB5qeS9uqJZ3NfguJ7iRnEjWCpfDZJTsjTE7HqBdXdDFpA9vBfP7GWGDgiM6ozapj",
  "key8": "kAhBwwh4PKJpBtUvwASJeJeDqjDrg895A2FYmSDR5BAg7CEULqKigCYwvgQyfRMiSERP8oYF3FkG4ndY1QwvG62",
  "key9": "WXnha9ocYnP14XfHnW3vej4z1E393zGvkpD2LUm8AUWVxBcNHj5oAop5yD9mbAfx2H7k4hqBmWqwdWGWteLhiAK",
  "key10": "BMqLfTPKeBpzzA7iqRvmhEACnb7xmftyWi6vDSLct6jmFT7upEdSfQ2muG9EHhtozU645DC7sWhd3ma8JJsU72Z",
  "key11": "4DroNoEGWF9hday9s2LRVZdJswbA1V9HbiQEFxVKxLhcmeGtea8mjsBWs7fouaDEJaXbGnSAPqgoxrBVHbQAhfBE",
  "key12": "3NrYp9DXNvwG478eEqwFYkPzdtLaLZAgViEo2wPdxgANcPBJT64hoV4DqeTX9hD6FbTgtAaZRQEBc58g93s2vAN2",
  "key13": "2v4QfvDD86jYygQPfxXMQVfEuD82NMDMsroXH3PxdwCxvRkXhhJB4yCGW6eEUxKooYiZt8SnkeBM5V55mbtN584R",
  "key14": "4gh1NQoQQQF5JpNsAbVhQRdWsq4j2YEXEZzEbGH1xe1KinTQ5mN6gyQBoVcvqAfRVpoKMJs1BbdMXjD98NF4taUd",
  "key15": "5cyL7FtPa1wdYQsNeEAqYuA6EyaeSd6exzDaz2Nf3sLQecwmoZ8pdEV35BAVC7XbErRAb6s1Zj6QHNWSKSqqmp7c",
  "key16": "2xFT6vXpe7bwQ1emVUd3smvvWucs6WSN5bAqET1n3b3vHq2zjZXfn9uw2fPUPpN1DgCC9McSpZ2bhNTg9ukg6wqH",
  "key17": "2WY5xDor6NJNUz9QXgz5XpSRatjn2DAv4oAWDTbfF1NELTFuzBf7U54dghBakA1Tjn128GEFUhgCGfirw59tcFNB",
  "key18": "5JCppwai4MPBUfNwyjfYDJXJt2KHdY4S2QaTvapA8XWo94ua5PjxrUs5EoTVjriTkwrBxcj4hGFjQSkXXKnJRstG",
  "key19": "5NQGkHUnPvxb3V1SBu96uyErffEDT2BLAFvd9tsN3CSNJ2zsVTV413UUdeiyfTqTBPcaa2gyQExHnRAeGd95myWx",
  "key20": "2ctAyuG6Y43uPfLVpxMrg1n7LLR48s7MXXtxcLHmzvFYHLDLNhkhWz4FJ1KpXayAfeNwYVYoxpdtyfspEFcazBd4",
  "key21": "44X5e2D7JvVGoWdVxvB5RBtkHmmwYEUtFGW7kZnoCn4nfwW4cLka146puMx3iQUQNhe3eQgPSpqsThobxM3CbKD3",
  "key22": "44wQER6opcZQUCTsxnn37gX77NKS6b8uV5K2hP43Go86Y7rtRuWmPY9VPCjgDNcX72D3cbGcpcngRYzFbLtfust3",
  "key23": "D24hNhwVDrkmaAzztofizBufVo85e4QXLbzpsvh6QM4s6PwoxEQZpqZoCh88N3WUfJiTms13Pvx438y6vk1Y5ax",
  "key24": "aRVHTD9h6CrfKapb9toetnLvf5FFPChJvQmWtcXCrj5vsB8DRGA2RuVCnWVRgq7cicju9teJp1ouqttgiBQkyrQ",
  "key25": "5RtWbtHrqKuXCEU6j3sEqhX9CRQPwBWtQMg8qAEpLDziU5hQTnscbsksqZjzUZeuvffWmbEsWsvqZDgZsR2CpuAf",
  "key26": "4EZJMeFobBj1DHMsZi6MJjkAY8LWsZLNiSYjGDSSp4r6ADZbhNC8kBe2W8wHjsH3vTAGm7PegGtpJT6XoGUJrVb9",
  "key27": "2CchPtM45HMSaYToYL6vf4oSDYcVj59th4ZHPygecmvPQ8FZmDUJbxQLpXUo8uWzYAE6bdYGUgLtzA8venu67Xz6"
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
