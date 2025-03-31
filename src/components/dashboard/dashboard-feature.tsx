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
    "3dBTQsab7Ve1VZcguruQf6qB26Ec7WayZtJP7LJkubN8k67Q9wMKkf5n9jyaM4ojiWm9xC1PEJnoRtfby9FrFV81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UteKUTQMnLeKDHTXsG8iF4TqKin6E4NSzj8AuGqwvBXXNNtvBDUd6TZ6X4w9pFSGSLS9CSKpu34G6FyWngksPSW",
  "key1": "3AP6esFLF612j6MnVk47YZF2brSrNWtqCYWtJJhzqyqFcPTtcnHGoQULsmueycQgvtz8dYrG127Srx5fyvo9tmZN",
  "key2": "3RUBH3wjN29qP7RCJuf5k2KBSzHuiNQ8THAQcqq2N9LPvG1NJ4iL5vQuhcN1jYw6XMCCPFiVMT3FAphFuaqwcrDj",
  "key3": "66uVMdPRywm57UcGUFacHQKizxrRsKNhj4qQWZe8R3wYJExDDzY2bQP9UdH1eyKxUQsfxFBmMGQJ7DWFpNM41J1e",
  "key4": "izBh2jr9TpKDXG9DFUPoZSWa5VskAzvAox8SW32MCc7GgB5WF8FQaj5G8iiNFQQm7zV6KxZAe2i9mEsJ3qFQVGF",
  "key5": "4nfDAy2KKC8Bk5ALYSw3uoQKtxTZ25hnsRaTaj4yyXA5eYRhzCBp5UshYEdMw4GGtyvia52Vwio5XJVjshHCYSiV",
  "key6": "f4yckWENfycdKoAL9A9aF7jFZNQBDWTQwRXrCFdSAyZHU2SroRafkZnANTzmX5RsMX4KpaR3TmAkhih2g7Lqm1Q",
  "key7": "nw5MH97deKx5rzqQXFBdU3ogQ7g2gHWjrc9Krtaxh4Ngh31v2suX7pWRofz6PSFexMFpc4LtScbNEY2nDDoaBMJ",
  "key8": "JEScSwfQWpijgob5hfrrE618JBNNdwxLDgHDzPKYrmw4pcPkLSuxZmWoWjQ4J3BQJHCLLeiGii5QbTiJsnVN4bq",
  "key9": "azoSnpzFFaet6qedSrdH6WiQr37oC848hVUXLhv1obGzPyZvYmCj69eqvC9KUxMLQhLxiT6NrLFC3uLbjYJsnS8",
  "key10": "qaJFeT6M5YNdiDgY75unuGtsfdjTVr1QMzrEHvzEpYeuekmKU5by8jdSR4hVWXmSLp2eg3CHFRoEqnrYN2HpraL",
  "key11": "2gdoaPnkeC6aK4MZk6KzZh4hw2inhg1iTxuh4YuqvhmQRW9RenX8gbDBnH79xGM6cYMmCdEYje2i6B6SqF8jxiX1",
  "key12": "26D4Kw1UXVnaBFcdqPKCfXyT8f559g3XhLaNNpZeSgDAcFjZighcBn6ToF2xB1m76uhdRP77NhJL1GhUPWUuAcYo",
  "key13": "3y9q8CQV9NbAMqjiPikoHRxWzMeV5RFzFcG7nEizY3eFT14K1irsQ5tMRmirkPTzqzYNkutGWFMGHGBkbC287neb",
  "key14": "4EdzLfLGRj3ziEPc2rLx5SedKNifnFRLSP3qRELswkaSZAG4CiPAXz2xQo1x6BbprQ8Sbsx5SUTCh3NVD3rqnZZm",
  "key15": "211epcvKpQfECnUDLJNCqT6VEo6PWFahB4M166xv8WdsNAfnEXhWPPD7vFJmzZUhpZjMLkC1y8vaKCSaj5jkUQsF",
  "key16": "2LsLXXiGdeCrY8njYdmiXhYLuFGN3ryaDaTy34QmSWnJiUruRKmmZPpwrAJzL6dmFN6G4VdPj9G7WFKe6eghg2BP",
  "key17": "4FdUfY3xdZNt6wDrsEDr88xnP4w4BLLZ9NQuXjq1tyJQn2SCNADH1J7xhhFHvd5wcoL1fLzsaYpc38D8cS9kaf12",
  "key18": "4SyYpcoWr9QZhBwvC6BfSTiakDjKYiAg1KF4CTN3X7EByxfPU5UtMKDjQmuNn6i87Po5L7RjgQAxPVEDJURh6dAS",
  "key19": "5dX1gdXP6xa65WTB6ThhhazGn5r16CHbF7UuaQi4Ym5dCaRyPwGsMm4bhvfnHbX3y3VduKyiggyQTFhTLW5xrx3o",
  "key20": "AgsfsBwbpaA9CcENArVk8rx9Jg4i2UAeshbiUY6TLjMcXTQwuHt7hY7PjxngkMxgqvWU1MSXHbHD5XuBiqm8dez",
  "key21": "2DstuZ8eMoDCWUU7ywREt4svbJ5UU3sjrSWCuo1nBpzTGRhL3MkCDTEr5odWrX1oooRpW5j8bgqxdnapVrodqipD",
  "key22": "SVWYPwUyzyyBHLZotGKd54wgbArV6gg9K7rdXqDmzwu5xBYScfRyTfc8ZwAvxeZ12muL2D3CMy1VXJXkcnaAkff",
  "key23": "2CHsvEYC8NDvqz9d682LJR7qcpyLv8SrRYSARMEvFTi8r76zCz9GULNE479b5fqGFYxB8Q81hjNy5r6YcBWLujr6",
  "key24": "5rRmjpp79R9b4YLkvR81EHgGUSVuVc9a1CZViktGm7bbXFG4mVjXw9krh8tXCeosTjikMRQez6cFZirLhi73AGbH",
  "key25": "G3q6aKUY6ydk2j1pJxGY2XEc5XEgqBGteVTo9MNHMhc8MLWdQi86b8ypYzQPcBiyHspbNQjRz91m8NBf75yZM78",
  "key26": "2uWJgSY6L4c8c5d2xjLo2us5Cg9GFkaQJhNzmxurLzrvyTxwHb2YfeBD1mN4eKYAYoWWN64Dy67NUJhuBorTcNXX",
  "key27": "5uwvmcpf15GfFfheySuT7zySAk5GJXpiPVdGb3fR52BLpVrsugap8ZcGpXKKS534J7EW4TbLArpZjyBcQikZrSAn",
  "key28": "2GeRoQj7LbCJfg3v1o8JaXqt9xEAiTsFnwaFYZsC4K2eSGiofoJFNn3TeQVKCXznVTpBABNDAS2vzrYcacp4SiwR",
  "key29": "5EVabrgKrAknUDUcut5BsFYjDB3rREmdSvdbd4N5TrnAQ2NRWc5JnLHEuF6op8DeTRNdd9LBMJUfzXhHn3tbqdph",
  "key30": "4CSHHRTqeScFakpLeWDyPu3BqsmjumgWbmi1XRKhVhNoTUtWXhno49jWwxoWsFzjftCacqQguQVLgFyKqTpbRFyX",
  "key31": "5cxVi9HVxxCbtnLZScJ4LtQ7MhJ2Lapm7iHbUbhkYvbLW7DNCschfPQvGp2P8TYJYm4Crc6DndJQEiQHFvEE4pop",
  "key32": "3vunsYHFzUxi7Pr6RdKRkmax8M7tAGH4hyX4skWA7utysLSvTXuk5CZSuAiHCH3QYnvjptU5KR8R48NxWEZXkGTd"
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
