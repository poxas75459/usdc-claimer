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
    "izJfAZuPgHp2wJKdPWhFmtxLhes6EnRMUz5wGqxTN1F1NTKeNgyCPBAv4UAjyCR8PtA7Z5iuNnCK853VML9q73A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b7SefjG3RkFeq8hB79s2rFRxVszfJtCFwdZRUZ9GKZgkRbLs4WFK8GyLZYHVM5LqXUX8JbYPoFbaGyn3haUu2V4",
  "key1": "2kaMqzRa6dZk4LfUDyiukFFdASWuH4dQN8UMKx7DGcLq73NgNtbhz5nGxn8agzuDHQTHypGXAwYsRovXiEzvSQZv",
  "key2": "jRYAx2mCtenVpm4ie7PQngGzBgpLX8ctDavjNejuSbV3A6aoYSipmN3ukds4y8ao5PvEjz3fcjeNomejVjmXDqM",
  "key3": "2T2a84jymf8KK4J1f6YyyX7io6V3ekmVfZCW12iGHENrkCuwm9qbBHksdGmw4oHSLiixA7TXNjJc8N3YnmopF6Ut",
  "key4": "2mR1BqxWhTjqnL8TzDY2DRGF5fuEhfRD7Aoi8EbE9z2S8UFkzqB29iCjwMSmppyHgxF3wdWy4gGRiDEQK1DTQTEa",
  "key5": "2mdJDSUhS5YQ8ek3GVnGxC9X4VuzCJsgiWdwMXEknSp69jH9KhdFh9W5tYfZizWTuYFZvvYHghDZg5cuoS5jydLF",
  "key6": "319YU9St5kjmATrLHQDe2gwmqXqPcdfrEYnuGK9akYgshsuBNW1DchTGKzJ4a3isqhGA8T2KkwaFn1GfTYmxLiEU",
  "key7": "gHMUZcYsAn7RjXi35UQBRpV4aiHdz5xpfry3fpzCW4haYgQTjfJCnmmCoaiTmAKN77GUQJ1nUyDg58YTiKykccn",
  "key8": "5LEmSwdXu2EDiKGZKwx6snq4b4TVJC4GHjxK98WD38uG32SVqGWrJrWefxvHb2YGACqvEDcKRMqwMp5qLR2aWGV2",
  "key9": "dee5xQ5871tJwaDUY5uY7ELVjVYGjgp3rTyoM5vS4gxZ5RQfdaVVvdaTvZGzpFmiAftrQRjaJApQrAmB9V1RoKc",
  "key10": "23Yo7QD6eBy42gX7BicKUiTyp9D9dt32TXPscJd57gCNSjBssvTajViVp3Ge6tS1U1zXo4UFozVWpGxYyKjiMqfx",
  "key11": "55TW1FFYd3bFrvCH6qY9jdP4Fqfurgr3cNvwPNMRfCcnLHtn9KTpwCST9LAco5XgSPuarL1EA6mYpnQrZZYyac4K",
  "key12": "4RnHmQ9Dc6gnW2grc9hnbKePvoqEAd3fWVG19CYjsJqeiqqntyiwMYfGUDxr5Y9FZ2tfYkuWmKvmMu894VGtEEi8",
  "key13": "55rDvHak58iQAUGDjdgLCQWTuBBaJyUf5YCUEvX6M8mynPfbYp5giR94S1HaGhYSjUtxseYkLyU9YVUaooiX5xoJ",
  "key14": "4rCD73nB7jJ3LVAajXgh8c3Dmm5pzmPKRvXwikzJckAQ2BkLVRcgR6KLrFQ9Km75jJCYsFbUebkftK7t4W4VLNA5",
  "key15": "4URAvkxeUWgYRR6wFe7vuS58miB48JrxG1BicmbXVK7v6vJ6AbkTrm1Z7pLw4k3cTiX1JW9odunSPinepgZV6UFF",
  "key16": "4ryKZcKuAduq9yd59ummzRoR7XkP5Q5K3eUE7M68DY4RGK9x4kvcbiNDpEbS5Va58h4HhA7qorepwn6c8tj67Pzt",
  "key17": "4HFTXhH17brMqmarJ2A5Q1gZoqb9ZyoQvUgpJeo69FpZJCGKgBeALQrx96bo9xXVXZQPM1JJMqUbyzgYqC2GB7TH",
  "key18": "sTBC8gHesFj2KPAgkxQ7zx4qNcPW8xAVaVkcHQ8yiffiaos79dv6LzgPqKWWj3uz6A9iDwp4r9r5HwKSwmwbb1E",
  "key19": "2BDRtwFu42HJWbRn6BHdiCozMn2ChjQZD6jn8gyskcdQf1UyakDuzG19F3ZLvxPMGcd8XWR1NmErGdGZ3hE5KRS1",
  "key20": "4pTVzR6uT3ZtDXB89J3TKQWCEiogyDkdRCZUetwXGheNb5y9SnFXmPHm6r8K3B7cnSZfjTHqMHec8foQjQSDafnN",
  "key21": "36fRf1icBgARdjhAqgHceNCuSGFF2u9RX56eXqXvX5bu3hxVMKYY4ERzCU3djUJHt5UkrtkNbS6nPtA2qBhSFHCc",
  "key22": "5A393BKyrL3J9oC8goSqtHu7PGbdkMyQwHKQJe8KVa8PEbaLF9G212wgQpFF8w5Qxt4FktJdu6i3S9zKqDyAU1sV",
  "key23": "2DCkmP5JG8HuDZUA77rgCEWzpqdc4fbEWzv8N67mXwhC8C8B1KN9bbBrJfSs6cNhk9zWAczpvvMyBzG7tqFWeJLv",
  "key24": "3z4gz65QZ16G3mpBuZgacpmmjuWPN6WSYwouuzynh71XjAWuaCh1yH1GVJL2D6A3mhRk2LZ78y1VsBeJshwrSjXC",
  "key25": "KhWLeRg4hRskysDLzqttXUDtZNYHhgii8UdcXqGuxCxXD928jLauDqbJXwNf7vSuytbn6DuN2T7xEa2KfbQR6TE"
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
