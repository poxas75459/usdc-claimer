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
    "3FnmWKLQ6HaWnnkACXHtgcijBWCGqU2qtekmWiwZFAwoSimX37xhVJVbBCr1ZLbyzuvSq4QVdvSNkE3y336EQyka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTFtaJN4bZMjgqhK6NuqicP7friGLSVa8BJuEw22KwihMVABHgYUuNLk1GQhDH9ZAcPK4XckWT6VcB1yujRFbh8",
  "key1": "pmTf7ZZ7f759E8yJyEYggcEka8PSWUoYgodwnNNRYSNhZpXDvznCKiQwMoQ3dk7iXPG1muBjWi3Hk7EpS88YbSZ",
  "key2": "4YAuMBTTT5GJvihoBqCbvDa3ZxJToy1iHsbcALmiUWP2ySquNuVQE4FTfEZcmfYihUnK3ySQe6JnBQYDTMdXvWS8",
  "key3": "2bNCoLbrSvKU6UAXitKgWKm8gJF6D73fWLvXzYuUfCA5hks3WUgywJ7KNag1VqP1cYoXwru6gQMopWMNufxvm4fs",
  "key4": "2k84xyVSDpfcMFZQncRuetyUQ9K5SUvbGjPZfd4KQrismCKDaWYy1SzSM3LWmUzWfE3XkTM1ywRM5uGRscXD6x6f",
  "key5": "4m3KUrCE65nky7gNZFSWTDmCcLreWeSVyGAB2igUw5jCyz19YbDXh1XP5iwVw4HhvV5Ez4sXyjEAuLPdfXh17YQV",
  "key6": "4y6eYqWJmrvuZ39DDZJkJicYV16j9M2tEQ9RSyw8PyoxxvWA7nRYyhJMAqdPcZNoPEAMaM1s6AMoaUpepZXsvdC5",
  "key7": "4ZbiG5JUjAQrNW6ZXrKSw15qZLKBUmSNwfvDbgXneob1mnzSLJGi3xvF5pFPMaSKGuhJUzxSf9BMpkJycLMvcXQJ",
  "key8": "Q6RKSYbQGQH6VHQuXcsTAHeXqJZYAFGa4DN54LwqCmRoCMxKdKk3SH7v1ftZ1n5gUCQP7H3axPfzcKPafTWuypj",
  "key9": "4if731ThvoSH1ZbJ4VBQRo3mfRYGcGSZjSTvQ4kA3DHeFRF8jceE33CWZL2jfpkLpiJyDpaS9ipmboFzALpA1Hvz",
  "key10": "2ch6vJaTh5tsB8LromDNotpuvXauDmU1MyRR2o8rQDTqpBcrADvZuVQhco57Dqw8mwTicQxAb6RzA9ZYoN2tdrYP",
  "key11": "h1SUwn7U4apy9muZ9mz1huuw1DTWG212eXA9hJhecX9bjW4BnBHRqy95wSSo7snoJ4FJnhNVPJJCrctMnHKE2bf",
  "key12": "3ZPhU3hCAiyK9i7t6mmYrG39TRVDo953RLczRF7Bm8rrmyje2abkvUX83MZJXhC2yqbNM435mrqRgRUWTRGf5kji",
  "key13": "29a4PtnyEkShJKqSfmzNcDG1M29PJuHjm9RZ4DWw2fYeyaMv7Dq8ENRV3S1W2jfsYkVepYSe18Z88DU1JEmCNrwe",
  "key14": "4crfYs4M1Ah7qSRpKsHFimcMUtm1SDPaSTqCXcwhxbFZSfkk2Ydnz98NVTB1Kku3SqWnto8uvZr8zgio1sJ9jpoN",
  "key15": "2EFWV9c2jRLFNzXFjDdtp3S229E5WC7JnJjTnP58HUcasyDaXDqtKgAWXJ3PXXjRwBmMQMvhQutGm8neRJbdcgsi",
  "key16": "5pSDpgVjxKmZNBktHjLWDGGrPi1o38jaRGzU4hMqNtX8rq4EjTtZAKJ986Z4JSbKKvDFJACLi34AWpZbQiFzfnWM",
  "key17": "4zFC4RTWDecPotNkRarA9Roienwzi2MKYGrdhmmJan9hMoL5WHkZfyzsNsLjrN8MUV8GUnQoqtePJxb7M4vkfZXz",
  "key18": "66RU942C1FNG42jrMxGqQErDZu7EL9ZXynkBoNFML5RQEv3JchDCiwHwPCfcRxJqe8gx2vhoBcS6wdzFjwhEzd8a",
  "key19": "2sRvaZa3Y12H5sV6ZsTNucWLH3aPYkeZkbf8gbcJNJzWnMbdT7LwPXbQpuG4xzEbZHJV551fwkLSULawAV3t6Ymd",
  "key20": "2WP4oPeeTavXuGS8dkiY1hj8ZWzAhjwBnuXrpxrsxDYmgd5LYsue8hVvbTvRFHjZZKqvkMf4hc3B7e9oRsAad4bK",
  "key21": "5BJ6w32HZ4b2hzPriNX3JK7qU2DEVq4FF2SaS9M9H9u8RciqCx58vH2tGiAcxD8v9PciS65zk49SCZdudaUTfFnw",
  "key22": "4kQQYiMQouY4WaPzHoRFam8rYuRyzNi2f3dShFUoqv4pv8iYJthLef9KLJzLrKSocDWzUEqCKcWY5SgNfD4cG6Ny",
  "key23": "4iSEQyNt26r56BSMUGsbrBA6wbRfNDMu9H2nT7hEr9xHi7RrsejLkcEbjEhsrEqKTgQ8CsroTCMYL44YVuYVQ63i",
  "key24": "4LT2yUtEXm8DkeL6uHKPdu8QxxqFUPL9o5CFMNdXjZN8qiQezokwKE56kyap9j3YXP6MnhPJX62NzvibU8tzibaZ",
  "key25": "5gtY4XYwQTMwyCrnGsKmAECmZi1Db3sm6P9tWDaTA7MGyxbBj6RjJPKHp3gKwuC8ciSoe6VKHeZYFQ6Cd19Zpf6w",
  "key26": "XY9rZor7PHCtdGgjaXqxsY4Vy2G7pnyupBjtzetJp6VVtHNNXRGjm3gPPPQPQ1F2PvcmWFNttc9oGYdVdQhRU99",
  "key27": "4Cc4gmcJhxbBckDuqAHchNc2ZMXQTVAoGeYQihbpob4U7WThMXSjBLq5FJSHKpkm72KEjLHqvqMcVC74aED3kWUx",
  "key28": "L1jxcFAdMrJiM7kvoUJN8mAbenykJoocQiNwswdrUxUxnj28PUbhmiLV24eBSCsxreRZdEXdekhJSMXm4tjmSos"
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
