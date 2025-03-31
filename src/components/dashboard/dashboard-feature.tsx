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
    "ZvWThfTfVv7PsW95XjALkyGKka3Ukx5Z7xuB3bE26rdPu2xGFxQrgMxsehAcXA8KcEVbwC1rdaB9yjARdq9bkch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ofGF7uwwNDSzymTcy8uP6MqNuMzpgH4g22sf9NDVvK6BF6vcki6nfCac1ewJLDLGewL5NEWtZCtzuP6uonpTMsk",
  "key1": "27ntFmwunvEj2Fyjc3hHkJ2Ek1AaWoXor7B74yJipr8bxiTdzkUpdAyqALSzWDzKeaPxQMFMMV44dCLPdDnu5SZp",
  "key2": "5RvbMQJhErWiWigJJqJ7vmsYb5s9ZMtkHtEuUFvBS8ScgcHvDvvU49EY7bT49pAFQkzmdVoEPcXLBXjWjRDNxoYV",
  "key3": "2JihG57eNcKFiYPuVrMScvwDLz4kaoah9DmPJvQZ9U1e2Z8oDgPVCpzC9xtQMqAwSGwyDTPMrM4Ep8JWA6EdkrqH",
  "key4": "3MS9KQ1cFL3ViArZduvnxJrxH5YkXcHAq9sJM2CLkR6eKRC33vgCodNCAB5NjcEYAN2vXSpHfuzZSiQkpLGGwMh3",
  "key5": "5YFjMAeZtiNEjqJPBSBj8iorgS8pS91YWYJCB4CQuHH8DV88AXMcyFCDgRhN6PSvzjBb1kPMpD8aL9xz7G1XXJJc",
  "key6": "2vEPeA2RCWJZ7HMLD7yJnSucuh4Du9sLSSpP4Liy8t69qxG38fdtFtb7DwBfe7GtJVHibq6cCfTsuo9yy9ZAYCf8",
  "key7": "472wEQMhxTFX3BeFnZmbvx6mst34PdHcA3A3ZwaRN6jevCnL4cAnBV2QCRz34Rt7UbVMVJMkmyFc5KSMGr3hWSy1",
  "key8": "4HAnSQbfdcxkH9GX9dGi8YMHwugvHCQWA21HDexZV5jEyjHG6jhsQYt765u1ByNDARdv8sYZY45hmwSazteK1bni",
  "key9": "4dycp9Y2A66xiPJ2HVXzcJwMhp1aJLyL3jQRgmDAZpqder3YPvUZHjCGA2zD215p6CA8B4Ddsw7RuMNWgj7V8NqA",
  "key10": "ZPH2aqouezPG3CTbUreZ9uk3e24Cdtsavz1UPTh62otyHBmdZ3sSXW6dXLQTaJMiqdGRU29sMFbRuSBkD3A4iwG",
  "key11": "vevWdm2MWJ18dFLw9hAt24RfsYeeg6nsQJ36C3rWeTVL5NJDvRDhcLNcgcUwG8oBXH53h8U6odr3GTtBPsuQpXT",
  "key12": "345GF82BrE3msPkMi7QFcQuKB7sBDbr6qqpdHMHnpf4wJvppwsrLjJza23aNP4zPvanbXrkfYB3N37zweEmvz4EA",
  "key13": "25ytJsMxvUEzAuXG2suUZsfcg73rjKDFZ3xdueyd6WcvExEY5C37xZ1bV8NiJZoy4LVWXeWRWHVpmBknEmLwJmnW",
  "key14": "4mhyyUc8wArngcAGPjPC1D3zA8nxkSb52mxk6wZPEMCPmhbcfqUMBRKaRQ5v5D9gCXPpEYq1Jj41sLk1gM1MLKRG",
  "key15": "3AcoJihJqqe1NQTTfc854R2KMXgwuBmrvenX67nWD7yhiqdpv6asZgh8hpVyKSnH2Dnc5CXuhNNSPy9kCxikTbL2",
  "key16": "4egrrLKywemLtcqkW8Ahjujdudm1tRspqjQuXFdQSQ6pmMgsp44vqB3RsoAdveopWFXEw6seKevCwTuyWLyqyyyN",
  "key17": "3mbVnPbXZpNSBbLxxtr2tfVK5fnnmMwD6ReixFU1gYoKgojj7xdfD8LthE7kRBN8WuohfaVRZFNXxjtjGcAFAi6t",
  "key18": "ikHQjZm39vTdARTzv7dU7x7MNLbADpS1tWF3UWTh9ieWcbqa8yPs4J95mbAUVg9TVdmfP4ib9re2C7w43D9HTTz",
  "key19": "4MahF8xoNRxjgTVgaHJRFD9CiQ97MUzpESF7JbPUUVMv6BYynguWjtzo7qGFBFAsfzGNv7pyMwkXtV2q5Rsw83jH",
  "key20": "2jhyzan4E5B8ZqUKi7uH3JnPxvT31RNgKSxtxpqCA3ZBvVB4cvemrekKBLcm7UnMuM6dRUp6zTe4GWi98aU1iTPB",
  "key21": "4CUZHsLnWvKsuVcPDxTgFKWJShxoF5K3XRSJzjgtofEnST78w1XezRYofKsGXqDYSpfyrihPD6MLuqgGRDTRESE7",
  "key22": "37f4bC9Ua2Ls5Pd34uBxRGgHSztou4kZvjzBnJg4e2ndo9CoBALB4Sj2y1wgKkdDZ5PhAVZjF9Zah6eSzDqSmiKE",
  "key23": "4cUtNUGybJ4RE8N4VcRHGrwJxKwuUdpMLc26fyKWRrLEi1iH9fXWBEKjBMMPPCcTxGfuMD7eMVA74oGvUHdcUygV",
  "key24": "463eZNhoExCx1kCkejiR7hBC5eQoANGSv7uuaXHSceUyii4WPZe9hUsd3P79MhnY7rHcLeL65bHDkh4ngxMz6Ucz",
  "key25": "4EMjbZgzJ2gNQY2AHVJePPetVTngohGV7E2bXgWiBdUhXR7aVBytjG84dbgnWNdrj2Z2L1MqZMP1fyUrtHq9NxGW",
  "key26": "5ydHkVVfBRKyXUwsG4V4WBZPEHfUnXMwwEXaQyiefDatrpherrjJgds3f11kMAy5Qh5fC6SnDYsBJviuDRF93uPX",
  "key27": "5D8VZNmY5S5Una9oKgKn4HNqL4LHGUGEopEcYVeqDL8iJXgHQzyGBGANfvqTSAgLGBPDWrA3nsywkcDRgn7hJyWz",
  "key28": "55dPbWHAP4ihL7r1aJT8CU86M6pMuXzFMZZeqNsmnEZq2LZZ89RfKyZYGqFgGKis8PxVvzcSkAgFNacXELVCkHe1",
  "key29": "2NtJzLhzcKuJvhynpybSBQEBHG7f7VeQWCaQnDaVmDEjWche8XzPHUqaeyPV8v3H4gpFQFdERtke74tG7TvhXcnm",
  "key30": "5iBZTng6h8cZfSr7N4ozih7rK1y36zDovPawhzaT2DrmixmMmyWjRa868kSvfCH8mc1QQhp9BRDKJ1RJ4QveZgG8",
  "key31": "3M5j2Sop9Q45mSCB6QMgL8QzoKP6A6gAmXTAqJLv9Jr9sLwcvZ4U3gzp3WHFdkPobAjH9p5xtjuz4htsoN1WkLGV",
  "key32": "2D9iSPXBi9Le8t6vyLxJSodZkYeKYhAh4g2xtNB57fq34tbrt7cyKFNuXpXCAuHUeD17n65CWths5ZzjgXB3h6Yg",
  "key33": "4FsA5pmHRLNrxTr34U3YZ2SfJVfeVA4Gr5natcZwTEmo1ribLbmxuz7CEtNXESeo7dqDpeUVczGgVAwDVLWwKMRC",
  "key34": "4phYvzPUZRvRHeXW9hSuTtom71h8uzDTX4MdtF2bgDj4AdQbw3mFC2qWFegeXeeLPnPFydNcyg58Hcvey1vyJocz",
  "key35": "42tXtoHUN3tr1YnV6iKT82BwZaJhEXTDvxqYWwkGVVgvPFa6NKNxJUEjD7DSBQ2Qf4c7znwkRE2iuBLT5u5yA1ej",
  "key36": "45eGGB1vHMGFP6dzBEMPr8qUTTLBswmXpxk39DT9Ht94fHe39wcz87VWKT7dWFggqCnXuf1bJTQ1hzn248i3oKF1",
  "key37": "67m2KxG4d4zDMe2xkV4vqYKy734soWSfAa3UyQH9F3XL8GDi6VZH1nLFjbEc6vzYyzoyaRwMFS2AhG9Amv5nr5R4",
  "key38": "3wnYxn3TZquMGueN6wcuuXqx88cRU3UTH6aaa2VGHyg96Jkr2qwrC97LG7ib3AvP9Tn4YJrETtjtUzpsHmkdy983",
  "key39": "3otDX2BwvtVakXZ9ztx1gF94Zt8Bb6mqBUwdF3A7vHrUQvQSa2GLRpge28UUFVbKxbH6pjXzEoVdmDGoXTEkXth1"
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
