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
    "41Z1cj2uDJ7y841dM8L5D7sT49EipVx4p7RNb6QBVrWLpDXYR7VRaNZc4zCA6GTaH3YuoxpXgfTVGU8hYqwEkb77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9ezNXyMjyonp2y9h9kBm1EEu92t5wsPekATs4LXWPhCECcPnW7EtWFp29pFhCZmRMyRvbUj3e98TM97fQh4kAJ",
  "key1": "2AiLGvRmF36S2ifnSjhmq88ARrJSEaxfGMZBZEVgCfU97YmdFZ6hhxTKbA84pPve65heUMQTijNrDS6mBECC8YWx",
  "key2": "c7PSqU6fZSvXXwoj7ErbrF6rq9ueK63s1ABUPnsrozx63jKa8XGx6CVcMgKVeUoposSCHrPjSjDyLngq4T44bdk",
  "key3": "SS3e5WbYBn9NGRLRCdbEi5G4ZXu5BCWSknV6nEGkVFfdPCYGJPts1NaScBHDxHwjhzTVD4We9zw4qZWuNRs4WuB",
  "key4": "3gL56J3TAKwTS5BdgobYemCtzizDnHqXju23YMqos752eASzEGFiDNhJvtpnnAQizcjvqTfuRdhf2WzKdgvzYBZe",
  "key5": "4N1gnVmfCqFKwgD4DS2gR3Lc6gLU1PVusTnjGvWz1Gn5J1ZVc7HZymiuk2FyA5oYc1JJs4TSPBXp22qvWq6BZzmd",
  "key6": "3f6eJh4v5TcATu28RhLehmvTF3RqSufkfgU2jDvvTWoohvKY1upiB9RjNWoC8y9rWAZAyD34yafYmPxytKQgUQZi",
  "key7": "KeXYq1Qz5wXxRVHdDCKVZ53Q2juGuYiTAWVD7GqDVopGbNw7JicyuoLaVAnERyGcfiPdEo5xHrYMgbZL4y671fc",
  "key8": "2wXzdVAsYEZJFB7B7WLCKSr6ZEU9dXrex9hA6bBu4po4sp1Ldq3EVPyXJndvMyqrPvAL8stRVYVbyPHmcNy7oUyR",
  "key9": "3rMWTrUL4LC7aWh2UPvmvfq6Jt4LxS9W4kRDoNZgwRJw4X9c8pdmvfAZXKPCD6PjCvQSPjPF8MMg6Mgg3GSKMJ9M",
  "key10": "32hwTbdw5gVtUugMBXC5fRthT3jbMDFwPTzHZ1UwfUSiiweMxK5qHbX5Bvp9nU5pU8o9c1LAftNJHB1e8ED7qP7A",
  "key11": "4KeaodFy1rkHKNZLUBbQkZXmvv3iMh8eUvoSL7RMLkaXDx42bPKmMXvyenVpZDa2eKMBqZVCp1T18cFEgseNo9KQ",
  "key12": "EJs2YGDSbF7f5ZxFf1Utom5iMdLvmksniG2EjXsP2r3pG5diX5EfHgDDSdNmUBxDyX6PSdCNGJZqQ9cz9ukg1qw",
  "key13": "495jqckjiA9VSBr8xMLY6nBv3TaVYgbm7QiCUJQA5ujUfSgH6vNLYvJyLJPQ5dkgXTQB1WncxnB7h3C1nncMxNFP",
  "key14": "5xAfiUuweWybDzoyJCERjfSjU2BGtnii82aX8h6UheyBnRmDHV6rU9GYu974k67azMzFjXGRmG9MrKW3tjw36vGp",
  "key15": "54nf815oMMkxDwnQWQ18KFvbdhwnGpdHRr2A9oJmZ6RPb5yjaXb49U7TgG8xQWn2hvnmBJwbokSs8PfxTdu1dbW3",
  "key16": "5meo8YNPDaMZzDQebbk6qgANqu9zuewR8xpusbxHrGxCsJHDRTGuzfn82iufPWqmMbvM8NTFq4mf1RifuR5JUy9A",
  "key17": "5AB5PW1AqDMnyfGJuv3b3fgtDcQyMU2XRDVKvqGq11YHE6EdGMFwySi46gwu8fmZZsNREz1hdbrVL3CNNYDvyX49",
  "key18": "211p2NmABvgk9476k8pPKG9ug6x1mnBErajahZv3iup2kiuioaoDEznLPobYT8yQzV6tamgRhaRv6jY4ZP5twcM4",
  "key19": "46nPrUoQRUUyeFxxc6yRiJkbotSVGESwajomLtHMFR8BgQmiGWM1Uwryh4R75vSBRM9bPJAWFmynZz6dXcYAjJzT",
  "key20": "vJTRU3cAyz876EZopMtaTUcJabK3hG7evUipoVBHTXbHFAoJgt4Lq8bvbbrLunH5zyMA6EArct71AqsVaod34B2",
  "key21": "5n8dWWA2bFSANfi2i9pM1pwAde7ZkC7EfLQu8eNj5hSGEScPNESAF4bhFHhToaty9gvngSuJC6VSTnfDobqm1rSK",
  "key22": "3AnshfA5g4sNbyHegXqKKeRNbFfwXMgfnBkUn3MBvfecaoo8uo6MdUp1Sm9pjPkdzPd5bpkGghFPwTXAXFTn5vTb",
  "key23": "4my2BA8ACrPaJsaFWLedPpymJdmGBvYGAEundd9nB96UHEenwVcYYbPyCoXVkt266eq1Q8EfjKfKBFVrMnUogcwm",
  "key24": "29AkmhrHFKpjMbXqrVuPDJMMYyNAd3aREw2FAWRPKcofpSx5Ufi783hxUJDGy5ZPZxnbCv9cY31jVro63pifXpfb",
  "key25": "29UKWszD8HyqJHCgJtUfmXgv52JsKPAXzAC4QPQNmYdspRrYZWY744dfNqCEKzTedSkMWnLRdsZGvVhaD7bnC5hv",
  "key26": "647Hu8wbHfjUcmbkQEwRobYiFtAc3xYQbJLiUEqk2NAfc1QfuMXx1QydrXQvWHzDo53M3gpsC8cYzQcKxEsppRHg",
  "key27": "55czN7ZS58fddoTd3EkYxr3va7EYjTqiBKbYKWbgzQqooHkV7mbPx9ZFxs92JL8ebSkLafDYdckpP2Ta6SiBk2Nw",
  "key28": "2yN3L6qykNbkNersGhn7aCvx8NoRXpwjNYtd4oYEWMPRydByKC6hatQqMGQGvngj1CBouLLqq6U1U98atkV87iT1",
  "key29": "2KTcTRyzsC3Z93cXEWkkJDWJyQLiHdXLymxLLw1vGv2EB7gpKRUwq1FjiDRnHCS95g6zRd5PKL5JADAaFwXtLU2n",
  "key30": "hWYDkGcgCYiKhwQYs45KLYegVaQDZ2FNiLKRQCSe7h6VNA1WbKDAoLEbPGhnJzqDksHk4HMNAGthbJBSfZrabZy",
  "key31": "4sBvRcVP4rVbn8v4BfUqgAawjvXaAT1hW2TXV38aiRWNQLFyAGMxNoFVGP9Cdgt6ronEmSUdU6n39LpQujNC6VvJ",
  "key32": "4fBgrsqGK8dCsEeJfyU71j7K68jEZMXEDPGwAZiMhKNijNpaEthiqPQXGe3191B9QD8G5LXN55Q9aGQ5SuqHu3Py",
  "key33": "44jzDfgs6BsqYm8q1QM6fQqehkiP8PidqdDCVbDqdj1p4vgc8LfY9L3Dcn2CVRgsARaG17xGFZ53by64xUv7XVqX",
  "key34": "TAJU4CmH38PEPLV2DqXp7GCPaf3Am3HQScusLgTjdGkCCWhfmSCrhhywhomJQCwzkKYjzhyXvRjeUUWsG4boik5",
  "key35": "5bAffpMg63qrfBpJXuMY7L27Py4HnEtaxEsedNP1uviyypNeNZzWAPx8GdzgWLi5aWSVdePNqQ6gtH4tjAG2yTEh",
  "key36": "5mcpjvXVCnRky9ik8KGGpbeCff9xBYiaaP8s5qDdRVG8B7cJ5DV91RmjcpVFabW6xvNVfr3VVj2abspmYiDEfvpS",
  "key37": "48t2wY9oodcq4k9TxwiV61GGNstnM29HyWYdPYvXCQwC3zjg3xc73ZK4SxpR1GwziPKwVrXbURkH1qbad1sJ9nPF",
  "key38": "3Yy6YogYxMwC4huAYYV19n8fY5Z6cqQCo4bMP14JxB3EvZVJ6TVw6Bgnhbz3TJz7A8ADL7LgGTeV6kDBvjbiZPdr",
  "key39": "4zSoWHCCtN6oX6zYNhTFiCYQvUyDtbXxS8WPog2xCzzc9W6kd1jZYU4t7K2PRWLEpzKYgrncVHBJBgvtVMMgvJg3",
  "key40": "4wa9WLrxeSaSa9BdYJMXMmYhx5VLMiD7ZUjQeFXTfC2QotTShfQsDzKTdBaUep3PPnZm46ScM495pUvKP1ydd3Bd"
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
