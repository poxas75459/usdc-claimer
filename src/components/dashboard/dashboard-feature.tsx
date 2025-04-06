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
    "2fs2easbbmXy8wvuUtS76ZCzopkDfHXxmRY7k94UXaoatGxGK5gq3ig6Ks8gegpndNZPRR968cU1kxYXwNBMxoh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8URXXZ3NBkz2KZL978rCqRsuAFyoEnUujBJHUUqDxPJK4pKWgyeHA9BfEr8hbhd44vtsBbS2R4J38Qwye5rukZ",
  "key1": "i188KF7uEzAYoHM2NrSVrKR3zE8PhTxTeyU5szeNK7ZPFRVu3ETdMbaXLVngCXjon3jnsnVkM7SYJW6p7WacbnA",
  "key2": "2hTYZFMguhdDL8uchL8tq2gSq7kxnxgpAKAaMi785V6MhSR9Nhan5Vm15WfGFc1JEvjuuoruVHiaMoc4YtJcJDVh",
  "key3": "49wpqBQ2qUdxGZjfZvf1Vw7vBJoe4V5BBKTj5noVJtAPXio632bkjHyTPxcwoS5kL2JzJHpdrLJ3TFbovyr37D9n",
  "key4": "psrDvcgaX79BhdeE9Rww8V4gcE5SQkPHEDsSEHrsAGRY6kCXt6wLbcdoYzDHnveGf62Y5dagFT4DrsXB6jZokZS",
  "key5": "4RKoEG6ZLsy8VRtTUe554qokg2TygHhsF4qvT7NszZZGDvdCE7mdaXzntbQrRpTPQA1VSfvezLg5MC2MGRZN1daj",
  "key6": "2oQ5dda2w2BfoMeBzDs3L4kDBBZhixcdZ3pk4SZGJh8uLozZf3WGywpaX4V8HqToupbdLNc8EaRbtDcjoNjzLaPU",
  "key7": "21BHsvYfZQEFn3jZRqwAJynqKjkV1qBxbDXfn9fdcxLAL1tWmGdyUME22kbx6pcF4ADxzR2FuXkwVvpmQWX4xb5x",
  "key8": "4G3txALjVZfyu86CMBb9cfWjSxpgZgTyVSzBBqeu2yNnmweFpMut4UN4X86LcnPphRaWikUd28BxkyJGGmDsSQyV",
  "key9": "2owRNHqmqq7E2EDfw5bW8UQFYx5B4wYaECyCKwQkGMwRnihPFT41wgsiCXRyBjNotnkyYEECgoc2LayySVe5uJRK",
  "key10": "F7a9bU23YkPnZxMTAo1GRyuTD6Pk4pqCr46GnqPy6RBkrFmtrQZCEdy5jiwQ85VsJgYo7bmfhCgqpajkGXjNoGF",
  "key11": "31HgZGVEbvNQXLZP22MXHpRpMbaqtTgTAZsQYkxj1t7BUBJquZ9Q2dVLTBecvShrAmPGsjiAgyDnyr8yLbWoTfoN",
  "key12": "28YcjkPkp2Ru4xEego48op3Jfo7hLoichCuL8Q9wvnibbMABLDDG2mRemLZxVQCwJHWMsjkhBv6RnNnT3fuLp7r8",
  "key13": "3jXrNgJqQpkCuis1LhCWYqM76pPMfyWynEzM3J6TMhh4iVD3Z2tnR7njf3HKQ84Gf97uVZp9W8mTR9wZLvoXDbZv",
  "key14": "32hkWbkYr1YUZfv4sF9tqdi5Z4J5gzJyU8v2tvAWGQjajQEHS85oX9Ay9h7XuaEzyVDVeSYWHg8SqR4rM1b3kxYD",
  "key15": "4ZWD2MLw3kQgsLknWJaPzDLA294giu325mpJs3FR4MYEZPzSipFFpcXNVhHhAJbwErC26T7oRbPQyMsHqB3pwaCJ",
  "key16": "3nuyVd7rd86YSh3VjxkPig2XTMNcaVuXkwPNSbSxw3S3EDtbdLwkqw6aWuiNMMyeTx63wsFvrar8N6qT1nDCo2WC",
  "key17": "3PWmZzwp98vuTYzaC81Fywn4jActg1xJsbwGjxYnBXYbYF1WWsk6nicrTUGcocKe8yrSBLwqXfcw7uGxNkosTLXy",
  "key18": "2af5VzpS4adD4BsnZbexm7nWU8QtiCsTmT2fTsL7X17dmkoExXLXjF2HtoBvG8KBvtXXwQv1zezDBpvitMjYWyUU",
  "key19": "4ndZSPXbbwPDGcmTp37ZABLKQ57iuboZrpX2TeaAAMjpPGTCHUh8NuZpKNB9MCQA1u6GwD8uPv6p5zKaKrLdw3zJ",
  "key20": "5tmkkXoXyMbAShzYSTv29CxZa4TFirxmh9ZJncL9SXsdcyTS5LXSNp98oqL92ivTgg7tgT3oxc1EFaMQJiZRVzB4",
  "key21": "h7Vf37J6M9zRyau29DivsvBsEXGgDbKQDBAAFHzV2CHwifhCknTkwoVy8Vxr4f3r35qAnKNhoass9rmjVthkG3h",
  "key22": "5QR9nwBWYKvc4kRubJtS9TSDe8RCwK2s1b47hzgqzfTxQ4oiEr3qCymz55DMdcZ58p4ZBfegCkhwMAWQRqc41dgL",
  "key23": "4q5KesmTBLiMBfCDsYh8mBS3iauUJfdkNwtn5LPP7K6aaQC4MomtseNGpwLqE7e7u9ZNzs3vofyJp2tUHegEujr5",
  "key24": "4qPQFreLuzRVGSNvA2BZ4LdUKqzP7RC2xGncQdEd6JG2QzN4Rm1NigdfcZDpJeqBGm6bLLfCbtxD9w6wJLKq1tYV",
  "key25": "Ro31JR5GmbFV23Z5N7dtUFox8rZPanfuxxcmLuCXi42UfBJWVoxNPJmHfxxATqe6nrUV78exugAETPmH9coLP7C",
  "key26": "463vmePa5d4X6TcZXXaABXjTKLeotbpqSejq7ZCLybNuDkbCWucVnYXHF9QkkP4AZS6dYjEnY1CN9f4WahV3WqG5",
  "key27": "5n21koWTdMr9vGgiRh2cewqveAAbum5aMTe18qKHQdwe5VbvmWahW9o6g7s2HyH76zPZZ5aEtnTon4KVoNV3axdu",
  "key28": "5dpgUcMEEDmYbidjrXrGKfKsbemTiccPK9Xp6L7ecMoSpFNS1hLP7nfjzNswPpeH636Q5E9ijx1kguDKuEBJz53E",
  "key29": "3BMiEu57dEAZgygJtvD5uAUkbNrzYHx7NxrdUvzDS1dYgAyqNmPYTzkc7vyN3roRfsYPx7mUYVsc8Aefj4u7RSCP",
  "key30": "2r7fZgLsv2Z2FfEootxt7zuiun4vHkr9JBccpMJfU7Z8YqfETxwzxJY3NSozaAXYgPtJ9FXN5d3k8NsL7hJ94cZ2",
  "key31": "3cgm4MXb1J2a7PSvUPJNW5eVxEZK3wvyK5fKvuzcbtGmVUAobWLmYW6PmJG2gfysd6ZRBof5bwjAXA12i7HViPF6",
  "key32": "3U3iuzPRgNTJWWRGU59scKJfGfLB7zwkCFHKrZY7r9S213WAbicfzRJva3gtNs9vVdjSZ6Ps1qa92Fe8gR7zp7QX",
  "key33": "4kf9kxmBtgMxCYTKnBxPGXFJ7Z4CaN3BPf3819jpfDxNhaQiJB6FZqkfYNRm6atTYvDJsBuwbwbCQ7iRzoHoPehC"
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
