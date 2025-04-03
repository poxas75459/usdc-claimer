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
    "43C3g5hmgQJ4EAfoxWrqcskoWpUR4cjySRaHAZKxcimFUQnE34zoG9ASKJkiNiGzKzRGBoyMVMKyfrDjYawdUzDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtuVw6392bXWw6FgrCjwutfgZgJRz9qQt11iPd4J1HCxNfZSU7vLxcNaaGVVaHmC43rLnp5wcmBvvqiwZD8BM56",
  "key1": "5rKB3nYKq6FB7xhncgzWi9k4Rw4MR4uw7d484reR4LysfGEHhrJEmokpGEdk9sdCB57daekXU1eCaYYejbD1KXbm",
  "key2": "XvyniP2zJRP3zjt56bQU6Xexo42uPwXZUGP2BbQ3NRzvPpsq4LRhVoCkHZiXMgKUkrQNUz7PPh9C7TiK992LEv7",
  "key3": "4yuagYxxrxTpzfbzXK8JwCWdepMTj3GpNKEkPARnDzSZSa2kcKDdiogAxqh6ZyifKnEYumzHtQ6xiDrjSSSmLYim",
  "key4": "vXRDoVA4MuJkDwsVgCEWmapnwkdtVp9eUEQuNSE1f53WtPjHEWfqKfXqY6tbYe1wFV946QQvfsPhkrMnN42KjMM",
  "key5": "SbsMfwd33e3qyp59ADCmTFJ2F9GALFr2CLA2p5B1GMmXSAJej9bDDHEyyztEmiBN6rqhfMBd5GdFznQCN1X7StP",
  "key6": "47MNfkPofbMABSFpFj6HrCtU6DFabxcG7WVBkNoAE5hCinZhCeHjRPJ6yAxBrnzDZnc3g2MqHcefHpSYHZ2ZD9QH",
  "key7": "DM9vu3uBhgq5UTFU2RSjaDibNTvpJ52KsXhLrhsXqjoC37AYg15xHuVJT9JvqE9VE1CF5Jvb3wxvjzd4mveFpKQ",
  "key8": "3LhEz4R6YVY8j2w5snkpe1KUEGXrWbnVfrayvxCs5Ku2gLPhCxRZiMCBAK3Y4njuAiUGyfsbEBAUwd5v5MhtG2Gq",
  "key9": "8ZKdU9DFZ7C7j9kpLefnAbD1MrQ8sLhUQM6qDPe3hJQwWUZ7XPfUXkEpXjc1GXKU7sdb5b2bkNfsL7wUwyvCowh",
  "key10": "2rK5R1jjLsACAzyLyhiRcvUwHzew95BiDp5XnzX2vXqMbFjLytAynJqrGNdDiLuYMcD1zkLPgZ3TX9rBq4JWFH7X",
  "key11": "3yHvtZrSq6oMByGkqqeVjtg2KiPynEjXzNqp99D8EXJ6a1TeS4dgxzC9zTsrRm3eXn6LKpC1pB7smJNf5un2K7KL",
  "key12": "4dnYjyGkToMRyt6oXMhAZzgYTEbGbqMM63qgPskWt7uXxgkTYprinpuqKZSowYSEQzMbUhidVuZLAUjMChFtg8ZP",
  "key13": "4sDsf1YPC91xkfSEEEaM3b8WXZeLNJKhVzuhfu3uNJgmbNfjf2RDGcgqARLZMDavaN97UxifZVNaznFDKVDJEgFx",
  "key14": "3vJ7zn1MBtmiSXeo94g5haYvfLUNwHLt6LRJB7MSsyCiBmyjw6sp9aXBs1dbEU3o4FoMafVi1icMmpARoFBs4X1p",
  "key15": "3cJMya4tEqpnqZzBEt5B5faH76PG39oFemcx4q6FMyLrHx3fP3wjGzhPGt6usQP3VceSZFkffVeUgJdYAk64rkhn",
  "key16": "5WxiVVZcooKAdCqzyUQsjps6w7Vic1XdoM6RhZJ17w7cMCqzbGPNLjgJds6MrVnuNEKLFxDsMBJAtt1C4DhVVnqB",
  "key17": "gHWcTUHiw5jHwEdymHCg9C66dv5CacRzSfRSfgyNtYoW89mW2yVBxNyo9pZSWuJRAefCYudHPkmepQ4HbPxFzMT",
  "key18": "2FPhYqKGTkLJh4SB8ECf9u1NSmj7kyN8hFrXmcEAGUq8CVF8Jv1AzZdoEWRP4z93CuN9NTDM7PbT92s4HJxL4WbZ",
  "key19": "4afuUTfEU3T8usvEw4nJhWoAvAdAU9WQEGCXJ4vqPtR69bdM55wdhdmvE4R1yNRKGdHhdv3hjMzTPBR8cZYE9Hik",
  "key20": "3ZBxU96xgQ4bmQKAMqibWZq8DpruPByA1AxNHye9WLTud9fNz4EobsyBrZg8emJup2pWDzsBkZ7EX4Biy4HwV5eT",
  "key21": "xgNGzYUjrMTiFD1jvnb8qwPjdYXkFPuHx55F9XpdLEDFfta9ETESvztLRVTvRnJezCqk8GzhWey6TnzStB1QfUr",
  "key22": "3XtTJNiUTS8jHAzZUtbMDB3gdUk9rmfkG1j1zEMRsmgpJNUV145ecbX8QgwWcTg5mZN3shpTgXKxZEUqrto7gWE1",
  "key23": "3hrYzKrowMVmFasgfVebihqnZDtGqE45cA7LbTe24AxyHBmceip3K1XrHFo9rW6aPPZCJTy5oCapj8VRRpFYQHV4",
  "key24": "3NExQnSrGGYjwKumFUUjDujS5nufhpkFvwGPAM2iMqrZfUajjRcjjQdqxeXFnbUAvn547VsuJtRRBDc1WgP2srdr",
  "key25": "2Pzsk9eJVbnnMLCPqe8TnTVucaULm2SGi7r9nvU6oGncMfkf2myiAQQsYkaeKJgTGTycMUTTd8oJpjXsjg8YCe9P",
  "key26": "3LJU68mQqjR3XQhSLm257bAHmaHmk4SYPYwPqkhXywXrS5cw89o88Aooyz1APnKt2b1xQAwCwG7XviFsyWWipF3d",
  "key27": "4PaPLdMLb1s7yXtkJaoG5twREH3eqkcwY9mput4KBTGVpd9C5mWKsUrimAGB51Qey3fNc1hTAfsRipteM1sxw5xi",
  "key28": "26TTW55YX4VqD53YWDq65w2YAk5ziTUm2KsJDic6JfLEGhEzYc2xVNgJpkh9fEzZg654k96XirHUvzSxi5ugjbUj",
  "key29": "16LegSjRT1Z8774GQb48X946oWez1sgrCYgdPU64q5bQPda4b4XFHG4GMN8JVaFYaP1spHwwt4bNjsknuRLpo72"
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
