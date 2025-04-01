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
    "3ksaUvg2GYRrHNhjjJrmc6fmPBumWn1SA9N1Nk5FcBbmuBqFHE9oJHMt9u8Yeqwu9uNsYaGt18jtogNkLXX3osoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1UKZZkarBzonXfdKrB1DJBxoj7nJGoq6D1UaBWQHVt27LTBXy7YiD8YbTg3n3C1kFrqfXRCMDp5nJTX2gUN4qz",
  "key1": "3xmsTPyxvQ1nryhvu9Vh6qNZN4WQbVt26RxX7QK96K7TPq3WpHS42XrPsuZqWikjcGVQtEVLRL9cNfbd8V5rJAwQ",
  "key2": "2AyC59eXx8r8dERvAzh6R1ciXAdCE9sJnmcWH37FmiGTtn7zsBcjrZcwf99NsChBFLsP7qkTUA83q7hQyymU1Vp3",
  "key3": "4GXUeye3V5vLGimeHNeWjm2mSUXqqkNdcK5JwCi4uC4aXgxu6G64rHkgtnPXM7aDUrfWKaR5N2HUEAUgHkh8Ef13",
  "key4": "5sYnYUEuPDkXMbzZVUptFdpqWLRBKpMsdtDxsPf2tzMTXeA6fW9pD5tnDYPAinB3H8ZvJ8HcxAA6MobKDVxksKi3",
  "key5": "3cx7sWfsBGB9ej4z2BHyCShQkAEXFPsbFdXCmL7fMxZP3CJ6Ang136FyD8GRU2f2q8f48YYzJnNZWP9VQuKhmw29",
  "key6": "2gd31f9Q221FLUwVnJcZboR6dWqFLpQL7K3Q4JJYo4tr4YkvqcgHofzLnfAQhQfGDKsekMaUUC7n7P6mUHBoDoTj",
  "key7": "jUj5NGXTngTaMj9FmuEQzJ2HHyNZbdx94zoWU7A6CiAbVuhKCFYbAofZ9QouFEcWLA9pNGsYNV9UNU4tGhnbavV",
  "key8": "bVFmh68Q8EpzR3xjUGcuhL4bxCchsPnuVfhdgJqPkiFJQzfiWZ83RBVLZqdiormEp83Rx2iZrCLwCdpMNJYnYSr",
  "key9": "4SkwvfPn5AuSKWxCnG5X87AkQjo8dydY87c54dCJbZkPcvakyKhStXPPD7ZiVPrHCqt6dfLVfbmcqu85NP1pDGMm",
  "key10": "61qPpaaw2244E2virGUzhA5jKeqGRt1kKZ16BHiH7F8W53tS7pFiN3QPqpz9chtQGP58S4WnENhBQrqkVX7buzi6",
  "key11": "EbkeSTdsLFXKYxH3TCnCfEbByzKsB32itHnc7yTS3kvpiVpYNmDFiajSC8YmS5wyDhsoJaU2DBWNukPiE36WvLU",
  "key12": "3FWDiLvEPhBFwNdz6VgNfszM15WQLKaVQJWtuKthSwkKrgZfiCtQgpUtKmSrzJX4ZeEhVVQy9LqqhbM8vmpgKFUG",
  "key13": "24ZdAqwitBwspCBdmzH9XfhEBqyobekmQS4qQ1XJheEjkR2B4uGjum2HzmuVKiYSvEnchPW36YZ6kteVUUtxU7Ud",
  "key14": "mPtSVUi6zsXbFZyf7VvCG11opAjQoFTKdoKFazGrseLqV2YCaFpuBR45xRXz6Vs7ddoLrRytEWtb2SmMjLm3bpH",
  "key15": "23qJJU72285mVXtvEs7r4qcFMNi7mJ2d2UsGkroKT9ircBLf6rddfF2qYdA5yMpqr5odY2YmUXodQAEGmAMtjwPS",
  "key16": "65DwaYmc3mhn1hXLe4AtyfFTaBGjkzVixuMDZDPn8N2D5pa4D5RcBYMiiW1rR1sGqr5CNJGPgPzGNGEZWjWRa1nP",
  "key17": "4cZaZtmPh7EKbVCJ2fDDdGUcUZSDgr92quCM6mGcNLR7gaFKY2FmwK2fo942kkHpgeoNGJQGFZz8S6DGUtUaz8NL",
  "key18": "2tf7RyJocYwNeW2WMb3qRvGuFsLiuCAzYM5VrgZJxLiM1pV9RzDZkDaWvh4FsDpzQJ9pj35t7sRnWxj48ozsgDMU",
  "key19": "58pFhVAYoPwFXW2ametEQgYVogivBkRyw4Hzvkv12KvbkHSyahYCk7PuVPbb9QGJGw6YLFTmDNpK5ECzZNEhRhgd",
  "key20": "2kqKvq749Wt9p6XC9eB6u4Lav93N7dZw6QprKGZX8bKEQyAtAj9Nv27SPmiXRwYduv8wk2QCYvLu6m2PVv6WLn9f",
  "key21": "5YRmRLLXKse2wgubofSNevXGNxuVHnRMFyVAcVGcdxypFPGiYcYt8s9rc2iCL4ynxExZ9CVhMvkLGTWxYNvTn1zy",
  "key22": "27nhhGS3w97cDBy9ux4CBZoLuX8AVnGHWPhdsPQN2oqqKnfZEi4XTfHZJPnGarZZtsMpYfsgaZetkWLZV2bTyqNb",
  "key23": "3vXA4PP84iTiMY4czQNeWQdqixpQM2GNgWcmr3mdFHa6pXDyYE5VXeVuu7N41VhepDKSdUyZP4P1tepFQyU6wDtR",
  "key24": "3JGAgCZKdpdobUn6e4HERsWVLa3UTgzN6MxPQY5ve4oXJVqdkQ5LxHmM4mnuvASmyLouj7AN9gTVUASBqeQxMumn",
  "key25": "sY215EtFEiVb1TfYUpWkEPCCAv161PQLasyRkTBR2afRNoSxjxfqxYpcoxpS6D2VksYYU7YzUyp8hkhfCZP4NLe",
  "key26": "Zc2a9jLZSw64oQUSP28ZvXUBGZSaKEcQuN4haeYzXoZTXaqaWtWyYDaRt1VsDrxtmgFjrF9m1H1JpZ6j4YWxk3X",
  "key27": "4t84V6fSkma9P9nY3kjH7QKDRzk4z5FRhKxhpDDU4RRkNAv3i8LzJtUJrEvHAE2h1BuCBKBA5LKsyHwe1CpHz2PS",
  "key28": "3Nbsq2Je7HNLQtLMPkskoJZ3UYastU5YqDsWvvHBXTeGXqRhhuGK3id9UAPmbz2Gg2it7RiHB2s1dkwS9pExu7XS",
  "key29": "8Hq6pJaVLZNVwkZAqooDwVzXuiUSMt6ZkS77aUUKL8b1p56edmaGCdawgJeiJ4rptEgtb6rfj9SBBWTtbqkRq8v",
  "key30": "3th66FaYCLzzxCgS3bDTeQUDbTppCCQvYAg6nW5KVZK3kqGisW7PdNA3UsYyTtBe4fw74xMWDfW4nQ9bRvNa3n5n",
  "key31": "3JdgvdJmJqWS1fuJXpSg7fwVnCur2We6sLrsbfWw7yxfTp1Arhh8akGkvSXBy8YgtF4GUrnoV3iqfmCdRRxwPWtP",
  "key32": "JCdXEZKGQNsPvNN9iW5otKd7cuAhvfztB4XjdHpZkVyAADq2jqzoBzWXGVBkQKJx9tg47ty4tgazucGNtM3zzpC",
  "key33": "4JqFK4zomJaVZtcnSXLtrxq7U5PYy19VsEfaGV8kE7ZAUJjFKfiKws42mxVmxVNeoDXNybUMExtSdEKaCPzRdmx7",
  "key34": "5wAyL8xmZd46fF4BAzsauEfmdJB76vgfrNTyPL7gWTuTRLQQssQyKP1m1Hpssuv6L8dffw2R43YG1TLpoUH5Mghe",
  "key35": "5JhiWinqV25HyL6YDH1mW8QAFKWABzjJgpbDmENHrspaeJtTuPPhvfptbkr6hrMiFd43Yyj3muRGJF1pwo6ZjQ6P",
  "key36": "3XYQs2igkTh46F7HP7GMzWKir3J7CN6uqK8nUZ4dqGssgHGTVGufCUWhx2gKPnskUuoTsfqtSKpR5K6KH4iV1hbQ",
  "key37": "4VdYJ7XF2a8bvgYXmvN2WrJDzct2xVVyuP5ED4vpXpkK8QdZrvZWZDJB2Amciwnbgg467YWGZThh7Fusjig54fJu",
  "key38": "2gnsieBvs2xuGnQN5jnYEYPrkW3jF1o48MUEtyQDS8PNGfzJ6UikTr9jbP3NfVLJJcqnfAeT8nw5VZUYLncZmJbB",
  "key39": "55JKdjC1vAS18QhScX92vcABjbjiEc7goZScWZ2RX8hHEfrqLD1Qm4XCF4289SEVqttuyDPFDHZmv5UGr4xFL2DC",
  "key40": "3k7izSiM1zRzE34FpbzEy9QXq5pjrB2v7hn9E9a6jUG5fjMJwbCwfzaPcHhTV4FJCcJPqiWyEUfKDB4QhqYTSsRK",
  "key41": "5YfPNcuqCusF33iHjkk1wcX6GzyEzhXNJ6QkvqcTnweMAYtFhUc8pjfEYWEJ4VmKkGKMYzgd429Xjmq4xurnU7Y",
  "key42": "3fCwKnSNhEUY5DN17ABwMvhYpFdDVzaf6ZALywxCbBBaTTE2yxMu7EFgbUQHPuDZkhVspwhzArPgxvPkRhcjj2Rx"
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
