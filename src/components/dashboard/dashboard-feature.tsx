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
    "3z4JpmbXuxaFgp7adW45KL1RRWfr3fNmBkvnmbQFZbVo6AER6vfipwYSnR8abGo38SfDcwiyqEUNGc7LsVbrsSMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374wT1tmsSS19jb3SJKpmq2SdSTgJMjhevbBWGqnjD3De2mqYxzZ9BhbqQ4LKSwkysDqtWaUode7Yio59H8ZZzp",
  "key1": "c8B91vcBgqP33av7fDmyqNFbooNk2KG6BHkq9WAwtnC35Vu59Fjv6tcZJZoFaJGetriV5APATUvC6Lg2n7EhZN8",
  "key2": "2DqxNoEVrFZTHhkCm1D2KbHij4KxJwzfEpj9KxPxUyMQ9VmaybgR9daZKHL6QGPduZScvdcVfus3FJSuWLx8PeHP",
  "key3": "UzUPAs35X53oJbKBaEZUqLddwP865AmcQdVdRptNbZJZ8jhKVfVG4UY33yxvPGFmchSJ4rBaATTeBq3f2fhu3pR",
  "key4": "4PjAYqhNrba8DrN6scgD4nut3EpEzR4GokKJPMmH9gwZwmmprDYZi3ojsDKwqy1XBCDTg3hqH5eDMHEuBKYrqxES",
  "key5": "2jG3zg6MT9qYUrNWjULrSMak1z5my8xCTGRFKVJoYFWrV4z3MXCTftab9AvnGvfdiKm9RA39qfcakvJaVWVMuCpZ",
  "key6": "4mcoZPMdJuGkMz5iceMxtjwv8JJTXbfbXkLhEqbgRWWcRiFcxhRmFutWaZ7jqLoTCF9CHoF3vACKVSPi6q5KrN3U",
  "key7": "3E6WK5vLBGax8cWTzqXgPhZpCT9Ak1VifWKs6pmnzzubBadHHPKkEuajbuzYNfcBtjQbQ1DERGn6YmFe4HLv19LD",
  "key8": "5zcsYhGuNb96yE9SPkZNLXswuUeXpn4kzVatKG8r1nvhAmumgWYBEPmviAMgpqMLsb9fKzHCy6fmSefoe6csDvua",
  "key9": "5bAoBn7aQDNbbHHSfMkF2vtbKpEeA8pZXBUKKByDZ7zRRmJzHr9ZY1YTP7dwa8zACfhrckeHnQbXLXkZC1pwr8oP",
  "key10": "5HKwb4GtSJTw6efE3EEDhXi8HWwMQhnBUQQKCCjJfVH2aaY68pXLcwqvg8b2nc2xDqQV9aF94BkMLALM5kScqRPP",
  "key11": "2ahT54DkFRwMAjEHtK1oW1CaHuYwHBneshNKBqcYWJHGcnq1NaFW1cL37gn4GkRdjkaJf3XW8QBMLfCgKWruR6X2",
  "key12": "4Ygtrzy1CxvnLfP6xYt8Y3cjXLkHq4EE57nHxb4kPNphorYTwfcReXWcLH8H1Rhfdq84cz8Xq7P2UtCeBQfcJneS",
  "key13": "4oRx3NjFKgfwF2zcDpZdxxURtRxXBXkhsQwoEjeQLXUL7wBqxBafqVfDaoVFovmqEeJNh3N9CeTGQdqbiwACuKqz",
  "key14": "5ZAgG7hjyvWQyJaNtyASBhV3g7z94iwvZTYE4N68uqcgnjVMSPNTkSdGkUvbRZSmZgACihWfSmVSeJhbBAK6cqft",
  "key15": "62BT4VUHn2ffXFSrWnF6QFexCxB6MivXgwc34B2zWzYoGzFkhip7R2UYswxEX1tJKnfqRV7oeXtfZrLVWWzV5fR9",
  "key16": "33h8iMziqyd28tQByLkzreA6XxsVc42iYVBkGCJLifLHKo81pfvycbcHgw8q6SEJLsWxbJUg5Vfxk9PYtUDTwW9o",
  "key17": "jXSFe5qvSeg5AVuKosWGMP964kQc2DJ5cBEUHK6CYA1fHthK1sFMUbARPEJonYLT3usDntjBtXqBVvFRf9w45tQ",
  "key18": "5uQqN14auoTwzWh6z6XuL63VmST1eCpw7JgzTSzZwDCpSc19fTV5Eu1CnayyZPToq73Edt7Dpoec5kQkAoicnuSm",
  "key19": "2vndqgxhKd2SYV7LadYo4Tux2SpQNfT5cVFFA4SkukpyKiYRN7hz7w1pGVfqc2yE2ezkFVu28ef8aN71WQqYj6A5",
  "key20": "5xEskCWmjQfnKX7ueXqDrEPAaNNDRQUvyCShNNKyt9YTmF9mm6FWGbMJFrA2Z8spP5YxyQQx6SFSzb8cj3hriLP4",
  "key21": "aqm19vbM3wLhHQnXbjzP5ENjKjJVMnqEyPK7iAhGrvcXfUbUS5MHqEG9SLzF8jhtJ5RAGSGEqoW1ZS5qGue2AkJ",
  "key22": "2CpSKXUQRiPnvsqWEGUK5jg3JbjNKEZS2TC5QXfmzao3zEWgpoPR4RpxVpKcn36CrioLmjvTDZr8D75QQD5Y1KCb",
  "key23": "2yExvFjoXhFLDVAK8fKgC1r93gSbCshMDKMLvjZ4qpEcBN3utdc9fo2rgUScNVcmnfdEbv7zDvjprPQq6uYBSWcw",
  "key24": "4AAMhu8VSAHGLDV7NEMqEjhT38xTMELP5LdT5VZ6NPsbzZ5xyhKkEMEuP1iT6Msv5opEw6cVf2zhYRU1nRe8p7Cs",
  "key25": "kxwUogZZsZyA5ss3SuJCRgkKhP5xzwkS83FbxTRzYdZZukHLyXujfdaSmadZ8rYHC57q5ZX1EpZaL9pLfw5MbWS",
  "key26": "5T5sQYd4iYKj1vTjwRANKEdDjFgGBiF7afZoXhNwRtvgvFyiFLAcwcd8yFmr1GHEJ28z7jEM2GPtZrNmmcKxwsXH"
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
