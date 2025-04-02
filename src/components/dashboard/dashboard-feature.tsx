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
    "49XvrPxzBzjFYFVG7CcZ9tmSbHLkdSNaKS7tQpgiRwPNjomh1HAzcmzdTgEMz5fCQPQF7efPgDgryZe4ZyUp1KEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owfJYp7BkEguMcuNpmKuz7GBnYeaVQTe3oQP6uFEUuw9jJ5AE9zLBURqxewr5Vi1aYyFmy36sGSZC6CuqW8Zptt",
  "key1": "2uDw2wYqZixQP2Hc7E51zFF3MDRC8XzmLPnJE7FXMcN6Kr1JhBE9uZqGrqWaZNPqEKtK3psvFSCQwFuiHxUaWXMW",
  "key2": "3gAn1wp5Cx9CQT93GarQrYtHj6SVwwd7rJ5LCdvBih3TuuL3JFKTE5tzLgLmzpaYyituGzhCpghKZ5Me3VY2ZBmH",
  "key3": "3KXyeQBYNgS2iXvyhuyCGkRAxnqn6uGiojkZethq7E5z3PXQnDCGaKRN8WLR7eFPmZDqnUYCr5F4hYtWUtAdM9VK",
  "key4": "5BLq5N6ZPzNu7pnv8GazG7fQNARFZp4AMyVXjHSRDo9oX8k8R1amSGrAKDk1S8yf4dD3SJMCRfrEGMNSgRjKu2NX",
  "key5": "yz1NfvBioFFwAevcpYHzAEgtzBFGDJ532UsukBPByEYi6YqiFjdQGYt2zYwVFgHTjmDCxoXAYUgVUuHQ9Nr9TUx",
  "key6": "32prvWnhvBUhACWprtyvRvBVWhiDtyduyjNz6WsJqGx67yzrtYSccyZdDL7RVuPmVVbytPEJRoFcK9Q2t8Y6wTxH",
  "key7": "4npDcztUTNKQqGoBSALgxMMYDtUSBCFVcFEWJjEYhsA3WfRCJyMcdcY6ngodtJZakP6JvQGVyGxjqmeYg3pfaGBT",
  "key8": "32w3QSg4VLYBSXJbTp6GAGpVVY2TB1m9Chw1wMJAk3piWhHbCcGAMXW59iXVBijY3hg48Xxu1hWPjtseYK24V6rW",
  "key9": "3zTmMVJ1QKAhACUeyHWjocejqciyHxJn1UkzHBP8hwEZoxKski94TW4Y2yMJzhyCusNEvj9EMLZ7BLoPiZAfepRP",
  "key10": "5bVzBLo7dGXbdNeZEHsjQ6peQ5kqV9zmR7Xyb5k7oojmVBAE1jPN1k3nrydS5VG6AnKGyVWoyUf9tQrg9CNpNw38",
  "key11": "5tJTf9iKFqoNVZbonuBVQiurrQfBkWRcj3aq4kvUaVhhPshvoafMJWRK3BwrAo1m7jgSS2bQpzMhKJJotyQSZbgg",
  "key12": "21SpDSWJ1rZLveewVpPYVXZaYt1MxCuPCJff6Bvc26wD4Vu9md7aXst3htsx5nwbzrzKWZdRLUXtrmQxbT9HidPx",
  "key13": "3p1gEmGvuxTT3iXENMFwcR6W1fE6bGEbp7jrKBZVKjUtgbxEePSou5cTmKWGorX4yuWUuELZUCug8q7X9ewxnXvB",
  "key14": "53DeHNjz2yrweCdkJEHdds5PcQkr1FajRQi7QPmpJJ1nzrZjW5j86izKzV3EkM7ueM6cpnmgbJpc82Rq12289xsU",
  "key15": "4z9dQ1VkabD8QxJ4UmxCJXWn7CaBqpsKbt1Bwut2NLCdJrtEamSTndpxMSFHRWqasHhVY2gyNmTW351SVoVkGppC",
  "key16": "HpXNJvPP26HHbKSWPnJDJhRUXzgg8jJ9dJeKB75esAM7C7raxKjtTuFeuXpW7CysD2YDV4ZjrremrTJLiV1uV2G",
  "key17": "asobjJpX1c7nVjjvMT199Gg8pGDjC8uqcz9WBCZ4YRPLyLc1Vy5FfEkdV3e1CqyEREK4jc7yNiqNpJ8GPxL3t6y",
  "key18": "5NAr2WRQeYnRCnjaXKf5itLLZHThDUEnwKWSyzBxppmgXuGX6MX4Hw7hZa7bjm1msjyCXCCZoS94sQ4RnkwrCrUz",
  "key19": "5moADPWV2G6zn9zLD34yVHBLYxhMCVvutQYumRgn9jZtdAz9oP1riWbcxBXXbuJxYdKRJAohVEdGJgyPwdgDhmtT",
  "key20": "5zeXkTZPz3VEzw11BVTPcKcNAoddmJnyUusvC67kMivtxPoAmbBCLFSCLZSBfx4TbjDsynMqDi95ZJM7pvP8D3cq",
  "key21": "5dz3ZueUpKVUAssMZMb4W8CbUyCRGyEd7rc7i2NdGxYWE7QYfSsj8fCqaUVJnPcE1Sjiy6v7zxvvohBC6TGejEbD",
  "key22": "4H2ynTPbU4U926CacbF2tUGmXqh5wzPANCiyc9A2pjv4G6xYkxU1XZRLsHGWEQY2N98eR4BBLqRzxgqhZwFB1kie",
  "key23": "5JFn6Qgw5XKG8kPdESHMgYxv64ikARtxBsMWjotwWy8bEaJkqFTivDtYX8VJLmp3JCS1BaAr4m3x5Yokh3YjcSCC",
  "key24": "3tGm1E2T84H4uGcHVeqbppSVzgfy7h2q4kX46s7TZceJgdN8WSGHWwbAzAAGbeHxky1EeKGaRpvg4agEtfjWJT6v",
  "key25": "3Kurx6r6ye3Y7KT9UWjLsNmirjSb3sKevWuNYH4FGx7SCUvNktMC6Mubb3AmjBUo8yAbqXNbGqcEfmXJg7T2iLRA",
  "key26": "3DJHL2TJw4FCfx5ESfbJAX36ea7TEE1dXB7bKMeXE284G2tj76WksaZ3qKTvS5d1e8UHfoNS4NtzquwVcwHj5D18",
  "key27": "4DymhywRQTt4dV7BM2Q7wrPPYwUzyiJ43JqkPNicvbKgLx2QaSozR4Vn2Hmm1RaHNNmgfRLsu7GiUMRVW28JQwiE",
  "key28": "3NAwz23BRo394rBg7sVW9aXSxWuEomweWzM6c7VYWqfXYvUuTjWzDmzmMSppPHgLAKsyaL9bVv8BbZHAs9HK84Sp",
  "key29": "2oSPTxCfY6ZXrEBGpQsFwomR5tE6HH6asiu3ePgdtY5UjEfNRBARgPwvXaJngWbzQ7e6uBfevgWPxxCjtyMUZJAQ",
  "key30": "22VS48XnAJWzmnNNkjVNhWVy1MnHTyjJJPK98WDPqc38JLRvdiTFLbizPjcftkyLhR7qLQWtE1bbGnPAVJg53nv6"
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
