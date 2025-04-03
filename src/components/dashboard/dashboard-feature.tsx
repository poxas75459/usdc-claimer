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
    "2wtSQH3zVXVo4q4wJDgHiLtxEpTz8CiUdNff9EeMg7zWYtyM8J4N1EJThh97PFGVxWGsfcJ6WbH6uMhr4RNcySA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dn4GSvvHMmUKMB99m5p3V5nuLgdA7msk2bYqMZ8gGd86giFp8Z5STnjCLy8rnog7roujR1nq5aNrbB4g9siKt3",
  "key1": "5LnkdSDM8ayL8wom9yu5sXF6jnUz51eJq7EbxK6e8E6g57EdMPQHoLen2NBJdvcksUhTmk2VrnU44jiMsYgTNswf",
  "key2": "4pg3XhX9Bp229x1geXNXVRpXYWifz93kQMSK4n9pnE8ThY1nDNaM3Po73fi1pHgUTmXD6yqhLt17ngo93cxAFM6N",
  "key3": "2Q2gx2Mn6BGX7sMHUdtVf4TD2fp5uT3ZUVM5rfamqbrkMGzNCF6vSeZVr6YRnEfayRsk5YXMLVT2pr6jRShySTV8",
  "key4": "E1QohFUPaRDS1x8zXHAmqqWDucHqkgUCLjqYTS8XbgrtrCK8ReDxJNQZCSK9dABpM27JeRxMZTC3SEepVDrKoa5",
  "key5": "5GJH9WNfh1oWvAgdqCJxBwGx751M8duiMP7d96S14xKM3V4JNSA2hpvYaQgnDdwvxMfqvro7t27RjVww3HKPoSWc",
  "key6": "2nG5K6fGD1jwQKfLiWmy8ByEMC69R1KVr25PqFJW7jiGKPTRsQqbvFK9XycUfuRh3KkmAaoaBTUNQRjWbV7bijws",
  "key7": "2ftwNvsnBeNAPh7rX1e6VJsBq3UXdUwgnageh2sGcNbRUxD8DnDAo3WWKLbQrR4CSvFaQpKAoxQTBU7QE8hBq9bi",
  "key8": "2Ks4LfGpUnWe5xo299LR9EQLxzxGRCAouPenFevbzzvtteir6MNrkMuECHKXCsFdRt54wd4m4y5KRnp3L2EtSzf",
  "key9": "4cfkfmb9mDTWwCQyY6w9bbdaWnNDdRGtco2jJCuT2eed96fogiht9mDAbUaSPc8mTbTKXfNk6eqLiagnq2RwJc74",
  "key10": "5pvffzbh2QypLmvx1HMwEW1gVq2ZaBvtxjiowJ4ERortzkrH89PmGXBc51514wmhj64GacvGmuh2EWgvf2Jke9TU",
  "key11": "2n2mBm8PFnRt9LFfYVpuNG6WzcWEJFB37sMH7dF3MxCKyvLVbpvEoQ3Ve6a28xBQgsXQPFHNbZGDVJc8mKggVgNH",
  "key12": "26cU7R3ERU9u513DyydHoeVybt4RQE6Vdi5haGs15NpiRpS5ifNjbiV9Gc6oEqrQqKwmTt89L5zXtZ6u2ZRZd1qN",
  "key13": "5m21WGeH6p3YTcM5egBP3XucMxvvAsZiMSwtBQiBvuQTsbB1vu2ZTGiVqJDc8G5PvJr5nmNL83MoWEQyqhm7pVKA",
  "key14": "4LzhyT8J4pt9JTDmmdESbpAGaVfcLcfzwxFRmfcxKQSrpw63QXgAcpaB9XRwHKPzG2WuQ2qYekYMB4WYay3YAU6e",
  "key15": "ATAzBaPXCFRN1CNWokhGj4hChwBv1QtGfbg2VgrWNkYoe5z7Tc6kS63naBwBqbdmAn16Y38nXP7ZWawziJeH8Ju",
  "key16": "2g7UbZhTFddEydPRN7aLRbtWh4aGgkDor342STSbZtrf4ibXfyxFG43Z6cK4wv4Q3PkTje89jDw6osuL1vovEFok",
  "key17": "3jeSaJRzSCUEoNrRUvJUbBXGqXqJjsxxVK2yrVjHd5kCVGxESRp2tTC6xf2GsBYzcZSHhL8uNQb7EekT51dD8KT",
  "key18": "4NXbY9GynYQSFzAYuzVXkXk8ix5quoriwTfqtRuTmWfSohsCLVhje1Lob7Q6o4hhr8mcaceokm5hddE7yee3BTps",
  "key19": "3kWus4kPEeThcNu1WVoxgNVuorVVTMSKKU4yir2ztuLBuJ7tQRVSVnNh9pPxqnudU2Xj9zn7Fjp1NJdec74U529s",
  "key20": "2E8PDhgyLddo44ggFUAVoQbApDFebDK1RXg988t93Bq2MRQqqaQqw74ykoU1spu3VrXQ824UYv8NHQgwK1Qwpj3x",
  "key21": "c3uAU53jnKfz4Qq6JgDnY3tKm9tcqBvmeR5VX3EwDRg2i8Fi1GznLsYGMQjEtzGjfTt7JfUh3h5qgbjZZY9QLHR",
  "key22": "2YjX7DT8nbba4m43UsUuRLckzmDJ8aZ5zTyNNGQ3XDYidzMtqJzbzxkUStdKJWL6k1wX4CGdgzNhubkmz46Zk9t8",
  "key23": "5dBux5bj9QkjZ57eaCB3XL7FUyEuFyRBVn4NpdWydjY7DWv6H4CgdW5KtXyMm9f4t4WTXU6gZw29b4oWfLvsfZLh",
  "key24": "NeGYNZExyG2UAZKSnn8T3s9ZvxtZ6wrT4sGZpicNFMHEyAXmSGZpzkMuGFxgJAoh3K3c21WF4PedpQb4SwnE6gy",
  "key25": "2jkCmkotqANoVjPmLdfinjuyGQh7Ym2PsSHPBpRWcRh3yau49jLT9M334BtAYvmMbKEWvGGhL5nDXxEMj7UyZjeK",
  "key26": "3xZHgYN5FuaBvKFE8ccHcKMwSvUUr2za5JhcsZLQqjYKCqURy8LtEvfiJ2THMTx3GURntFhwP6mjEgADdFJ2Yxwe",
  "key27": "2xAFejd681AmYPdKeZTZPktyNgLPqKU4EBj7hgsE91u3ibAd9knSb4zcT2nSa6pw31uUzy2j4Zk2Hq1gEaL263Sg",
  "key28": "5YPHPxy1Pjdd75jbCXjNEhgpbDdyceh1p75vtQ7fBUCPa2SJTtf7GNFKDL9nrLu4nNjQd6v3vDkSr78R3AyhWY1C",
  "key29": "217VaKBihpCw36WVLcFyueBEeQtrouLdNkYoqnyBqe5bJrdhsRGvBSZLDSJrCwg4HFvfscgjrYUSmz16rjifrNQa",
  "key30": "GeUE6Rs6y5hrPmVzxcAQuk72RNXMVmExwiGfP78NwEUhwc5SL29DDiGXEQxzJAYcJBQ6KR68dWJJdJYSma9kdLZ",
  "key31": "vtekESK7troN8A3kZtJ47E2hvETvwt38ms4sM5gn7XALM31XvvhU5uCAzzMTdpgGufNnBK5PbbARPvXkSvXddXG",
  "key32": "58uxKxDizNv7MHS1zHUGPfGxu1jGE3pvAYhvuaxxKE4fVoaiTdQwT6yqdowFAwycDejSPHAyzYLgbXs9X6VKD6hr",
  "key33": "5Djc7CyzqCowEfxhsiRzVBYSUUD7uK45bdnEysByDugugnVYNFS9ZtYUQ9TRpcVPe19Xd3aY8PAk6fVsbMdhd9AJ",
  "key34": "4kmoHZ51vN17ohWqw7cTMRUz81mxcAKTDtqwHagjWev1Amygydk9xo4TKWx6ipt79acLke1uz7JX8TwQtYpMJN3p",
  "key35": "4y7dtzy1zD9yNZtCixxiER9BWRSE6X92aUjcWwRF3rC5zidwyoq9VX2Lnt4F8ruPCNzq41vj5CHd8Zc7a332ttot"
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
