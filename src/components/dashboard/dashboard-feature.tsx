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
    "zMWtUTehhSEfgRq5LLJSpZcjZ7QwKtTEGtnbG5LtVg96yN2sTC7mn59mkGfQfSDbrt1NpLeJWbpzso7Z6p5a9a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXJaTjNAQcEZJc6YCYHVg1eu2kRHg7i5vcN9d1zKt5N7iataSgtPp7JjAjwyv6dYtEGUPQR3Pd8vPgETLwWkoLD",
  "key1": "54w3hAM4CHuy6YZgaGhPypXfWPm5qZhFh11q4qd6mDKTKxuS3MNd6BRf19EVo2YWJpadAzGMxkfZqw1oqQUKAW2t",
  "key2": "26z8Po2t7CJAPw9Zb6VUyjDJBu9NpHYCugQKxnHiVZWd7cZN4sUEaoykzEWMA5bF4mUTiYCKV9MBncuf8uff9xtz",
  "key3": "NAd98A5rvrSLKoxjE1xbp4ebk11ha5cfZS5iQneU3rEs6cMDMnf9Y6S6bAEQ9WSqjgnzhynpkCzmLJvvJBWoxqu",
  "key4": "3tooMvE626CgCEbD7HppgQWdK8R2nkqNx5trw4CkEViC5GEXcVkzs4e7tPnDxiSfmMxaKa3y4Hpkk2NB2ESL21Cn",
  "key5": "2VeVBKwkdPPYe5p6HXaRtCJUPYwYV3wjEi3TRp9jAwc6cqtFyHbrAN7uHNUekJZk5TYizucgoAB3QXSWwb6DkTxa",
  "key6": "4kCjeFjSzqaLjuiUMmZwnBUw4K3DRJgy77jHqnzYUGenNPHDAtMUzN6BKCLijRLCX9Tsj1p9YY8wKJw7vSwS9tJM",
  "key7": "tSy3cg3n3wvJ47vCxXDBbhehQaYyueUaEhu4RoqpK8aukKTe8bVA4tVi4B8F7mB6s1QTUEYnLUn8dT1SkmqTw1u",
  "key8": "vPPBh9g9arRKr6JYK2bS1Nt5pqdrhQHfraXPZhMjZzvbiaVgTfBVoRjuLN1eHbKZ1tc8mFD2NnZuvE7wHgdGsFH",
  "key9": "5syQv1PNuMUG8w8qzr7bSsBgqqWYaphZMPXMcHEFZbNkSRwzW5VkB3D7u1erdcvknjPkzms2UAvCzeoBMQJm8vg7",
  "key10": "4EKpYetBbrYirBnXxtM8i5jJ13NU2GY5P3Y83ctjGGSJ1WWHLrHxXDz4fR3RLHLRM3BefELmxbGjY9NkwrmgchAi",
  "key11": "3tQgDDsUQY5KxqF7KHQZXa8UKMKhPxJrrdpYtbSVbbUGDmU8MM68vEGKAn16ZW9WFTk97nFHYdc6DKVhZM8CD2dH",
  "key12": "2SPmxY7DziV9E81JxHJPXwRkDa6N8mmxJKxMju3MoVyp92o7hN8WvnteTxPqu7cfyjLRp1j7EPYnqmQ8G3Au64Gk",
  "key13": "3VnBtLKyRfW4jTuHKXz1tG351bpwiEvFHQEtDwhNnXmhXk6P1pTxtfoY5aLdabzmyTCyYMdYMpscboBRDWediUuL",
  "key14": "4cbodsaq6GUaGwSNaemjh65pYM3uU9P9NYwnyFNBWiXiMAsDwwn7SjvBFVGPRguchAcgXoP8oeC5zUS3ZF7ifqU4",
  "key15": "5SyT5XbWhmpZQxpqLFH6EZ5tRKEj3TQhrvQu5PtDUAjQzfu9NcEPHmRPVryg9EDp3hWZ5tGufPP4NXG7YvfXggEq",
  "key16": "2uHu7LPXKPTu2hjCYRFy9CgGG3YR1wYNnCAypVpFSWftd4ihxkZGKMCkkhxp6hu5dNKohPqvag9ng8S5XpLbgKHw",
  "key17": "2dJrU2PnCcxW1uwW6ZxFaLoLDUjWxWzEEKik5L1N79qun2XJUUvYfQpMN8eBYy2dzo6Hn8o78uYqGwoWg2gXNWCV",
  "key18": "41frWjnKHSQc32N8Az1uhMD9KThcjpUVHEzeiHzQBkd8nDRprxit3nEN9eb9T5PMCQK3V1h1e9KJhpnvqWZeygtw",
  "key19": "5SjSP6iXtzPrLvLL9kfBp8bM6FwrVPTKBac9CsWDAQ3iFyBeHdmswShJeQAiShYRn89d2fN5uujVpXDY9iJywmqB",
  "key20": "g6teqS4z93NScLFPGCUcEGv2yXWi39EGkHLTUFrj6VSRHexZfKTEZdboSFK8LLtuARD6HrgU47ZjhRVtP2JedsG",
  "key21": "zL4cUyJGoUSu43jJJEa7iZaCbnd4uKjwpspoo4rPMfqGvEztXk42cEFb8L1eJyiXXX9NjMYaw4RPGv4whCNj2u1",
  "key22": "66u52PQm9Wso2VEBYbXJn2eBTV2ibHGbRpNZQdvDmp8YsR99rfL3Dhk4PahyafrPnTSpGZLg8LkPvE13VsvrkvRB",
  "key23": "2datbKe895xfxgFcFAKaqxvwR16aUFtRxbULf2rG8PnsiTw9j9b1wsgpJVLGYYPSH8x4YwabKZ3smFPLL7reAkk4",
  "key24": "5y5Aw5fgLjcBxH3fEPT2LiCjKJ87MCcxwCGbf15rnpD3NwQ41WD9vNqbVGT3sZabTBHXWAnQDe2AFuipLiv2b5aA",
  "key25": "2kDfwJJedYctPzbeg5vGfWSj5ggS1B1d4d9nRPvquvByrYazBHGu4xW8LEE5GvSAf6rvnduX69we41GmoupapCSQ",
  "key26": "5uPzQd7UsXLq5MoDTJwzMZKpUJY9WPvGKHva8jtwUXVNFJXn8cvCA8Q78uoe4Uv75kStmFhebGJQiYqQq41fJ3dm",
  "key27": "2mqx7539AswSbWYTwk4XQddMXyK4HXjEASLF47veHrdUx9Sc389cFqJ7kpkdg1QBBFDAjUNzdQrE4PtktH3CMMFw",
  "key28": "2SAxXms8RZDwjNJvJNE5qAFyeMQASKLmTgGc7Smh1BXj5GAKhPoA66RQCNn1ejzzuBJwbM1CdYcxQtNoTf7T4fzA",
  "key29": "5vrdGUfrSCGvb9sjPAtxN6nrWwneAN1AKXsZzPQgARdy5rHYFGBdUdypiY2pMTEEoXwoqBAsfptXkp8S374KzNRm",
  "key30": "2aa7TDt2NZDPMW6P52uBD7L3oALxao8Ynp7ZGo7qYomB9WHPH9xdyAEbRoT11Y9eejT75HE8K9iYs5Gc6Lwtnp5G",
  "key31": "2xK2JetWnbKtygGZ3fVtf53MBhDzra1AeMxuxBB9TbWc8v67nYPV7uen4vVWsfD7c2fzAhJJbEAjHusALCKV6s5E"
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
