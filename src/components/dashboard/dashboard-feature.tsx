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
    "34mtwjx6ooweAtKDemMu1MphjiKn1ww285yyhEdKb7dQM2gv8YXgGyuyTCT9wGRatfcNGmcVBXwBrYKwFznovDzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677o3tcZEY1zVDnANZQeTkhhSaJqgUU3i1N9zLpYdY8cWULtdaehtDoXZmV1Na9XjCW8w7T5C8f4qp7D8fFDUFuM",
  "key1": "5Z9PunM4LjTdapjq3psH6GwX8WBoMrTkGndrMRWFmsWoYH5i7qb5PZPhaYb2brrr1ZAxFpK2TTL2JWnb2TCbS4nD",
  "key2": "5a7RosVy8XMdqWycN5toLbsLDvsSZu55TcBErZPvp6FwEMTMUb1xsfpeiudZRCdiNh7CvxiTv3TJijiNmcXhqUb8",
  "key3": "3nRHo2kprg72pBETzJAa6YwySJRi3zdwdmKJLJFdXKmPYt1FaMrhQNgcALvtR9fecSomv3rTLeqUP9M27xs8LsUT",
  "key4": "45j7pWHVfxYwRiK8KvHksVrSsRE2cz5SzVn7WDS8Pht9vtVeZS6F1s3892E7zQpEsEiYaHh7ZSuiTaFM44XnDYvC",
  "key5": "2VaCZRFkxD83GmtQX7izpQfUs8zTrezy36eevLdneNxRmPsmWxTeJZLX8bA1kdEBY4mXWz8v1tNm6An41tvTUJ9P",
  "key6": "3sufCztyRvUWLUMYwxx6hxjo1B7dZHJyp1Xyb7DhureAJ8AnLnixX5rWuE229YzwTh6y78AHXDDVfyxaD2DHGckq",
  "key7": "3UWZuMDKfLKG1mj3iYnzapN8Bb53Q6byu2vJPKfZ5HVXR5wFqMwKmNqtAjABCHh9ZQiCX5u8QYCGCux7zcqWgZaY",
  "key8": "nJuwLhwyuSxWKx1gmTb8m6DA36R4LKUmMYagprHmJV3mtwsjMaDgXMGSwsPHDc1HZWBPRV4JyFRCBjw1cbBet4c",
  "key9": "4BegBLFhxhkMpEjgm5aWdWAMFM4ws7kyV6Y1uuTwa8ec7zRvo19QyEg6NjrKvT3HBGnYmH5oJCejAirsfmUdzZnV",
  "key10": "3rrr8bGu6B1tX5zbk9SsqmW3G4hqA8NdGm9f3ZFeXvHi6qeeMbRjgV68XLxnnMsgzCbqiaAthtvoxzZfJ7vpnU8h",
  "key11": "4dgtfwYxJCyYdrA88XeQVvHMvQNfhKqBY2VPa3hbjJtkHnAia5GaeiHcwMwFdsZscv3NtSp1oByPkGmoQwrAjjQo",
  "key12": "4kcB2RqXdSEuCpyc8hFVS4ZVbyVqegQDdKAMfsw7Ys586fTz8f8rtkqYrJPH3bqarXz4WT5sn3ymvp71YtUm8dqt",
  "key13": "49rSfJ7ayhrDCbPNs5rCb52enG8zuW2bR7Cn7Xa3n1pmEn2RtTXVw9QnJDBwT1JujEJKw6tWrVxiLpdXyNb2fan8",
  "key14": "5Y8QeawVqMirS3YUMM8ifKjPiyNrfkS9UZoodvfpwA7Wkuhn5jAi2bWuZLMeeJ8CsiK79nhi2GUYWAvALnxs4878",
  "key15": "3kM5L7BZzVZCryt8C23e8dZnxKdeBnppMNT5D3qgo99iqGF94eXBceZMRonCVvoG1j36jM3z2Xrvs8Bo7fsbQ5xp",
  "key16": "3rCiDeDkGuqiSVoqaZ4m53C2XbxQJMqeqbz6XA3DGiBFnPrfL8DFj1soNfNUu41Uzv4ZLrffhoqWMYswxtdJogiD",
  "key17": "3gPTzPWT7e4ybmcx3Bw7QVmMhZNUJo15FMQW6JhbXve5izXxmL3gwEZFbx4uwfYAZeBHP8YtKPPzRHpH5ibKr3FU",
  "key18": "3BwXVoDHhgEf2WYwEEH3unQQ9G1rFNTg2qcKfLpzHJWWRDFNG1YkTttRabNgQTycKUXuA3UYHGyaknvAam3N1HHC",
  "key19": "4QGp6oRQiCDonbLHRLd7UoBQ2DL34RjvL4cAqPawD6Rxk2386jCH8EAbAEePdH74oeZoVNdYe9apKHG24C8NndRU",
  "key20": "Xgj7gNskxogsZ5mEEtEdFDFjLzFYnxfWCQre9WT8xA26KqyyPn6gC4RhAAxgcHobfLwQXUdBRsHuotqK5fc2jjZ",
  "key21": "2X4g1u5h26TAexErutmcPQ4b3Ck8aogr4iDr2w1C1LiVKGyxZ6M2qoo5fpKJEEqAEERWhzB7PS2NxhdTq5ufnRXU",
  "key22": "5MatsQW5XkfUQJRttSUhRPnQZ2ZbMH47XZZDpwD3A58YzBBLNzkyBWH5YnXJNN5rCXDpQ3xNDKHnLY2f7LSYfB6E",
  "key23": "4NJSvpqLYG3F4ghAQ5cnjvpFkYgbfJu6YwQ83AW6mtdwRHvduhxbkgF2tbcRUFYfZdVYu4JaQwiXcFjCRpJjfh4g",
  "key24": "5ajdg8AQVibEAZD9fj4m8vHv4DevoAVRgZgJqUQc8zXykWARybZ2q6nrzSDHACrSPJiDkr4UmbaTYDQAPeqZGjLJ",
  "key25": "4FLnnkxZbK5aVP4FmpG2vtv5vLfis8xJK6oyNfSdrgcoenM25ZiCSv48rXfMznNQLZDZcYehXvA8RDoiKoBb4H3p",
  "key26": "5V1Qxy8aQoQuHcx6YjQvQH4UTkG5vsrxATvyHoNFZVbAXbxRZA9N7GZKBj5Q7x3njnLHZ9gzGF55REhSg9HrytU9",
  "key27": "6J3tHp4GkhnRLPZaSJ2B4VTUpYLdNcFMtdJLM3hp61bsPDHxcuWYNcfdQGBRvfV1dgMmVgPeyopucyX1bNXof52",
  "key28": "5v8sxbe5phKCLKySfvEkyVX35gT4RyiS5nT7Sk6pmaHsLJ11abKzg9431RL7SAfpE7EW9a2tnYmb84jSPpLCPLc"
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
