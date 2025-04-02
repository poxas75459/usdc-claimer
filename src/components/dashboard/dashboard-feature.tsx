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
    "4imiiLofRuDvEwUA9evjxDcaqZQMQCDytQPtY9J8vcwAg1Q1ZyMsbo4MUt7To8yEzh27PHASUn7XBZXKVcezA7dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2xCZQ2TM1FTkXVd1dDHx7MrSxasBBGZ5vS7j9Y467vUA954xqRZQxioEN1vEsxdaAPC2d5QgpWWtusn8YLbfYL",
  "key1": "4dPN7Pp5mBBbN95HLyyXWxQSfcdbLKXpc5WBWaRFMB6v9iNW2p2Qfzt8v4nVGnby7B1f7Y5jeMXzZ8FbaZpTJ3qn",
  "key2": "5oCE4auyDZGTeYZnWASpWXLFNvVNa6QJFkZu3BETaVTHhwsJcHKc8TAVsgSoefVgU5pLekKtcw7xQFmzn7etYUKY",
  "key3": "4zrYy2mAF7Phy6EuWbKjxY4smf7HVEjaUV4XknQ8KVsp6q19Zqf6Ye1FX4gZDD6bHVcD5xPhNvP2nGGD6mwq7Zaj",
  "key4": "2R41KjcRcgLwBTfduBZDbrz1m562gLAQfim9kb7s6cUmfyxe4v1cN3A8Nuo8EuVhv2t2RL5qAkQYGViXjATUgmFT",
  "key5": "2CedsQ9gTaG7XWsphRLirFCYYcRivYguz6z5d2XXoparpz2nXrfeHoezuDQQpQSi4sAHdX7hQLqMpBgBCdFaHqgg",
  "key6": "2vVMaCFKKyeNYxvGsWH8BQnavg6CWTpn9QAtPZixgrWtLiUunvVtJK5BZF4U8hRoqCckUp9rnDvyfhrmUgG1bLy7",
  "key7": "2iMyAHMkaVsMoUy8tg27vmVN2QahyJYzvxCBQubv55nmVwKmvZoY8EFsJZFouqx9Xf1HKQTeUcuNy2P4aqVDgJz8",
  "key8": "3BqeNRpUNNx1PWNV5ChwXG4s41c4XH5iYvyYvrZhEa1t6UGUgWKAQo3mFKBtaWWvUQgGhRLR5BqzT9p3S9i2211e",
  "key9": "57vgCvt3zJj1JjphYtDNpkyuuo8qT4rMiNTawRwySq96V213W8KayQL3TqowVMnNVHhLWLBxtpdWzikPbkXpNRT8",
  "key10": "5wVKJzqP39rurtnwA4nZRANu15XZGoU8K8mdcwdXvUXb2RyW369HHRxRsL4w3xgEax4LWf9rf1cHHK7rdJAUJRYD",
  "key11": "2uisWxFQ9TPXqrpHWPpQCpdErEvCPqpxjymYXL7WUhM55jryUwGG2o6K46wRCBD1UkvmKqk3xE7Rz1JU3JDYmCuK",
  "key12": "2KnK4ZWyDmVQzqyvRQq1tPVzThE1mxRsPkHAu8JvJmYdiTqVvT8Hntt3w1TkCzhTEkLiVA2MTQ5xUAWy5LjUtju9",
  "key13": "2X4RwgDmkYqAaJa5LThLbeSXXLWnoQhmEFyjpKiDdMEzHmG4FjsbzsedrT5UHNX8JNqprqBAhs94SfkFM24TrmhU",
  "key14": "38JGRMNrHDD45LHoyPbZed2itHE7HZ3umirbTsQnbQSh3DTC2EMdZUwVYuuRSqfV3W3tWHEV1upJFb2RVNz6xozy",
  "key15": "33e4pgqqTXG4GskB319ep6iutcD3zBdB1WNt74EM8VZcGdujmLWTMkRGrxEKiKVrjSfNR3rY4K6EjnUArQ2QCc4Q",
  "key16": "2VPEpxuLsDckpmo1u3qnn9oZd7zCoNSp6edjmtS6yfnVEAxU39Dax1V6FPcEQVkS3bLSpfAVHZWUaKmSvjcfuAVh",
  "key17": "3tYQYw4ovYCP3RPjs4Uwrto125LSujaACjXApjUdrsMZhRX9CMFxQHCoymi4QqEv4o15xt1P5UKNUxYM3dd4Ufzf",
  "key18": "S2ChWVCqZeNi5omRivx9UnVjg6qnDz2HUnUuc2rgbDyzrSTSEVfyQ9kTeg1DCjZPKPzRPxfm9HTfs8kdY2aKSuZ",
  "key19": "Pnj3bkM1BtYGoSG1cjwk8j7fJu39BFJHM7bjfrBiHxrWBC7x8FHQau5JtULsCQtgVdoADUB6U9FF2KzBZP97SDL",
  "key20": "3ddA9DgAbUqggCiu3nb2GTsfhHVu2v6vP9enjKqYwmVbes8Ezu5oLzkSPUfnhqUyzdaZEnvJHVw4XktnSiK9VBpg",
  "key21": "3AxAB9HybDx6z7aY4M3VcXpRBN6VzFEPeHvM5vdvA68PchQf2Ak7GkyhvXTa13wbH7rwESr2TQHyzAcWokY3UTZ3",
  "key22": "492J5w2MPrwgsCEB4vBbVwPTSwzjaRXb9qV5djfdnVWdZYDYs3c1JWr7eEpE9b9wGAqMdCr9pEag1aT1fcy3QsxB",
  "key23": "29QHSPjE4dgUyvYg4z11vGfCwqvpEMvzVaMZPDqNQKKHJmdwRf1yFM21Sy46qV1vS2TSHWmA6VmjJijh3JF93iWP",
  "key24": "2ozobppmXyQAp5rdGBGQnCTtN4jvDwaMjeetKZuNahS8vG3QHc8iM6cWhULja6Sx1oZnViybLVnNbL14MwMay9DJ",
  "key25": "3ZAJrf1nqicVNxnX4eJeHBDmiGJ3wdDWN2CZvR1Mw8KUL6rPZV7USP3J4vzNw9PUF5sEVKVB7nsyFcrcYLrmZqR9",
  "key26": "2XxTnUEwrqocf6tAz4zRyR2o1Gbdf47ibqVisqBAmJq4mtqvYPvstzByqTYH2NGuC1RfYzHhdAGVDsa3wHHFEqfp",
  "key27": "3jyzR1rodsvgG26dLiRTJMdMTxJJ2QsttJabj87chbGw7AWrWDYjVtqVtH4PjrdvvEBFcbZNNQPb8TU14azVCwJJ",
  "key28": "4YsdBM2AQDqgMAJVsWKZT3xnYji1tf23c9YnSuCsfjXU6CeDoadR4mabDkvRxEaYxSLqKEo97dYQ1udbtNgH5tb4",
  "key29": "3Wf4KmqzXwSrhvVFranqVnCEZAgvXseqUvXshxJEPYyg9QWzVaDJprii8ntLKRtvmQvZJQeE4uPgAg3MnaNBfRoK"
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
