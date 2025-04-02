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
    "2Nu7SSLzY1n8CWYLYXLWwsneMFvt1qJhFtpazUuW7bQ2zHcNuYQcbgUyvNkLUY7DfASyW9z7Sy4BsiXcJL6mgddE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35S9sKJedu1Y73PvtnozDgi2U82Ss6oaetfR9NnXJMda4CMabLHSKd3rpy9prChAZYjWcZ5MzxnJf73HqPkvT18R",
  "key1": "TaP3iymz86LKXvMgfPhgsEqhBzcVGAvSQue71qbMjzMPfgHKsv7P8nDNnP41b4FNwzSDxqQy7pMKXN6DNV9anHE",
  "key2": "Y2KrNyXPUxz2sNRnjdFDfb6rvdbq41AY2oyrEohqc5iTDenR8i5Tmf5XBdUjqxfNXsNbAaseBEV7cNQYje7WqHq",
  "key3": "4bcCDSWc8pzrGN2zk4M9pKCHLWHjiCXoxzEkjzkTssnbeaS2S6HgjwudasSZdBjE1T5gE5ChxgQQdtWEXdiN9Uu4",
  "key4": "3DxwidNr4Rx9gy8Gz1q7tVK42vbcLMkRMKBHCNpt79VDYQb4G37Daxtwx2nJQzVzbtRt23aU4AzvkUYYVs2eDWZA",
  "key5": "3CUpefNbPTNmQ8DLdYASAQANbm2fuNoJUAfey5a25NrJrmg9q5uyjxiU1y5kVTdHEcv8hgE3tHtYy5PTaFu9EDdU",
  "key6": "5twTsBBQLPVTLMZjD3AQD5yd6irmGCEmAoMiNVmor3DTBE7AxXLJfQyZdrAQqi4EK9qZT9GzAxymmikLL2nLdVaV",
  "key7": "5UX4Pt8qemVGCF1D9K6pBkx9eiv2t79NkznDFGAjcBXtntR4Jakk3VdnryAjaatDYG4cT5MK9mAqAGVfZwCBgs3X",
  "key8": "29wHBLij1mP9Bv1HSQBMCzbNQUkm5ky1RbjFJv4VJLCKQjXRvgKZ9Rgp2jMHnZ8aEq95Feq4aj8SkoYTrRd85WKP",
  "key9": "334nV4jjMBJhCDRjKcxpG5d8wboCxqg7BmS5oGDHhiznaAJwaNZRy9RfUGypnSSxhBhRffAz6V15znv4EY5ugXa9",
  "key10": "4mMLufuvBftL2LCNs3KFv1rCREUfaoKVnQBfFfqjxixtx1HtrfFbn6umQvhawM8sh6EHqRtdgSbqMimAcp96ytuu",
  "key11": "4twmoBDi33kvTkZU85S2MGP6dqjBvHmDv59B53fKV1UKuCsCyhS4njU9bKfYus7uxEwHXHqujJz68rbzbxgCGNVm",
  "key12": "38HcGfSHGP3nbfHNhpf7nhikpT9FGJhjHjKH5D4PD2Y15CaAgezqgwuKYbY2HSihTcAuDLQPHZWk4ppfkCj2jMXA",
  "key13": "4N9VUUMmzMSD2otGyQaT12mAfTAuYtLKZh17W4rAYAiPgWmPv4RmNxsmP25rPBJCP6EVeSvaf299ubyTqjpDPV9B",
  "key14": "5Rr1m8eAQhj3ase5F3vXgVeHjjXLSBwnPYkiZbiwmd57GdueiwyyHPrMTugMc1kThyX5guFjv7xgLYwUrQJa7qvv",
  "key15": "32QJm5jZsUbsUizpZvS9au6BBskTvPi7FaPEnDzrhcpAu3zJFqAtxojN7ZRKWDMu6ZohkpRPsvHtZnq6uaDECupW",
  "key16": "4SsSvPBzRF7Dn7ZtaRMC6wKUBxdDab4k4w1E8v4L7S2CJrjfCD2QfGdm22PdCrjxdWWQBk2JjL4JS8b83bFYX6DL",
  "key17": "42TSHXEvEnFLAZRw3v92HA9Y6J1sSgVwRXLfqQ7Twyt31vVd6KqjF8iyFwfvtKBSbuxfBM1MdiKKqzBoXTzcFSLa",
  "key18": "34Dv1wJsuDsmUyqcRf5m1hFdhp4dWNugKXBiaFeKB1v7fqKnLGuYKy1MB5j7TpCmF3eWqhPauZuS7khS2NBezd7G",
  "key19": "dBz6jC28NhM56fPMfdwFaG4uT1LJcbutvZS7duqhXHkwtthFtks6zuaZdPkHw6PAqN1hyHKKLMm6Fywhq3dx1HE",
  "key20": "2uKQhvXF7WjpPYX6Fi5AKVLvxYRzkCJgWGcc3uLXfFCGMgsjA8mqC9Ti71zYiBTYkzgGWPF8yNz9ZwH3t83fEuNB",
  "key21": "2RwEV7RSUFrydijDQdjrRFFX4avMpEe7kAC7aWEHuvwMvEorm1i8fn8W8LmZ2czr13JzYiNUpMJCNNURDptZYgbZ",
  "key22": "2JeBArQkfbc48MWh6jqjVPf8nW9iL5x6RW6fjVDQZEYyFKK7Wno47RML5XqRb8dxP65reiUZ1m9FiQkLyCjoTd65",
  "key23": "2RBndjBwhrsxsPHH5TbEyyWxd5bZ5wf7X1CmeduuNmjdc5JRDDyp3S73nF3F86Qic1YVcVhWHcZRafVX3ScXjrus",
  "key24": "37D8btTTYWTaSPoqfiQ3kDaube5skufSUkCTEPTJfJhPUZcwfpMwdNCTwoaJ9gWpTVAsrxC5MH697uWPkJdsvXk5",
  "key25": "5vkoRNXPSie74RkcEkDaZDvbmSM7WmEMysoQRiy48BNv2B9Zk9bGFzhWF5aWoX7ErfmRSq9vQAPLpc9Qy1irZGYu",
  "key26": "4tkbHmTzVLndWBdQkAncq1bSjZMZ38utPSgBAr9KGh7b5Yf7C8JDmQVEioFczhokFH7sZe6WGvnNH6SWjJVGYasz",
  "key27": "42mheNZm13uYf6KydHbFKn2ABzhmq1nZnzJb3NVThJ2hi95ExTQc7gWbemqNbLjEe6ZusQKxzYh6gs93x8SitnwR",
  "key28": "5ZbyomyXBayvt8fTjbT8swgL3feCR3brozVkuwPePdbpPQeNtbvFrbyCs4o5xELHVvgifqaDfBjn4scTHcpJ95gA",
  "key29": "5TDRdQr3kWjhAZLzFoupLbj9grXXzreYTLYtjEzNqXmdRt46Jav7hXwQtrFBMaaUvZjErfEwwXWTJsdR5kKqNkrj",
  "key30": "5BJAtsGm2K3a1mmtjKvLcia22n1nnyHte62X9NPdfvvLdVxkGuBuZaij58eMpARA8r1mHMAV47k66EvvX4UDNd4",
  "key31": "55D6TyVfY2ZwDwCg5brg8BKa9FDWAtb1C5ZdpKaKrZHRV2now31DSCM2tMHuRj1Qh1yvgpXxtNYvUXjGv3n6fWr3",
  "key32": "4KPv4LURJ9KHaH2d5Z9wTyDasCX39YUDLNT6xrmqfx39SVQbFXgTiica5nHmp7UYEgZ1mnWtzUJcziWP4YnUK1Gn",
  "key33": "YLi7gu3BC5inXWZ6Yda5GZEgguaRUDKA5yUu6Pi1ghjsb88DmbHSYpf5FrX6zWf5WSjL9q7m3HbTaLd7gcUMcAC",
  "key34": "Ku4rbBbAupirwCnXPyVQ4pC5Kc6fB2VwtvsQ83AzupAc8AkuH4KaDjNnCEQ6yYn26dZc3QL3jnQ4cXjDpiCH3en",
  "key35": "3TeQEMgTuzKTqFv5xFTRkEbGMABreTyHKaaJKiE6JmQn1e6LxR3Csibb5ctDfgF7R3ukXkZ9f4CsQwFpdtnUnaBS",
  "key36": "2ar5uy7LGrkd1nSo2MMG2Rdk8CuJD4JvSfXwbKWz2RhR8Qr8qKyrpM73biD7ABk4tX95SS4k9phRqx9ZMLsZ84um",
  "key37": "e71NtAjs1sLszrKytzwjYwwSLd1PxVeZiGApjrD9xzbBzkus3n4HSg5i1QWWKv9HJrw9rbGX5uMq5uhLjfJUF28",
  "key38": "3fCJK1DLAKRdbBLzqFUU2XrKtcBHy1Q1aMA1h31y6A2afgVeo4oJpDLPZozjR6WQci94xqHgjA2SK5KwZHDYfLEs",
  "key39": "3hqjEbecCzxTFReQaA1oC6AN2tC2cWRZh9E9ate4Y5UyfiRXDM4fMtbHVeBi4Ga2RXE7mmWCUY5jvTbUEPhWVzg4",
  "key40": "2M3RegdV5p9AU1EDwuE8MTrabJ6EKaFLRsSUN3pLFD1kbvtQRwvvQauZcLMFGsD3sWe7432jw2jVrTScaLBaEhrp",
  "key41": "3h5EK4M3GhaeBy9936BYPhXLtQPCK1Zqj84Buc1uJ7N91ZtfjtDiqYLd6SbPDGtyoG9axySNmDD3J1bVDBa3gcw4",
  "key42": "32pY9Un29kKpppNgjUJNXG3ZBkwN9VhvoHwWaCEL1Pgu7TEWiqdgW94qWtLCNBvkfnApF7ngFMhzXUcv1gGhJMvH",
  "key43": "4VMUXgyMQhjJbHgRVYVpN8xUoFmkckJAaDgt7A3EGTwrAqwLLe6YwQR5rs1RM8eaa9U3z6zBMREGkzfs2hNgr7tV",
  "key44": "2Mz2nWTUf5RPD1qpd4Ao2t2zHmWBypBhpoNua7WBcLhKhSRppGXsSajXVkepPHqsiypfXQtFTzeiBVpSDvtN17kw"
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
