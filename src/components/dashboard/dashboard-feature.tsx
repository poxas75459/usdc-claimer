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
    "GRJd7jpahbRE48jrpKiC2YYnm8StMULFWtz6CMk54ApxEp9VdTzGKv2vuPNeUeADNjytZYx8VmSYRDFawMFUNvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3o5y2JPvDPGpZEJwf7Suis3AmE8bJBEh59pzmz8DvCPcGUHYH3rJD27wny91Jre4Y3zULbGDHvsuByi9pjjPYi",
  "key1": "5La6UGoonp77Yb5eWjJ7MKwgErzazbKDE8XUh2MaayqWec2noxuTgsNf35NRtgbRYvbJVqZe729qPNsdVsNFENKM",
  "key2": "3xryPVYeZ3JWkkEz2bsgcjB93ouMok4JeuH23Xzn3rRz6zKKcrfSV3hkZJun8SaxcvUNNQxYn5c4PbGnxtdnAmeo",
  "key3": "BDrq8zuJWWgn6qrQCwzqm6PHctiWwA64wbfxfgK8h51DZq7sfZ9PbqobC6N6QQksLz3yTJR7AiLNTzqRVpDAo9U",
  "key4": "5TpzYyz4vjRiLLykpTXkuLXcNA6GEomvCwmbYAxoUF7BQ8rkyaHZoMx5iqxeeuykFfogGJ8z5Y4bkZLs2YWi7r6v",
  "key5": "65q6sLYXc1UVZFuHMAsvxihyZohTwgKMLgJ82X8chirxA4GZob1AacZwWvfnJFyJJYgH9FLgBMuCFf8n17nwJxfY",
  "key6": "56qpxXYNt2cDdidWk3fEuV4KZzFDV3bTfAEDiqGFFCipynUAt1UpjxAJCWY8BR9f1vJJD89btcc2aVHnB5aExH8C",
  "key7": "2MtoScR5geVUujqktgadA4MeECbSnb4DFhLFZMdL5gTGCBfn3BMkhA3nshRGpYZ63fvoJUC9mUMxH635qKPBMs9q",
  "key8": "2yBXpNUNRgZiyUEyzLrJ6LBQFcWKCSyZ9bhmC5sp5McZDoS8KiVsQz8fGXR3VLVhH126kEpiQhNUN4nz3B1YKbE",
  "key9": "4UCJPnzz7pmquKebugxoiue1UgTBGgUyTefUwuXU4ezitEYGSbguSZDrRYvDMaDsVW59k1VZ3YANMUewAZRmtqVm",
  "key10": "2m3qkuJvcSugwD5MZGa2GBXKACKq6MQcCZhbcuPh7XmpZ5roCtxbfREqhwKBbWnmxmDk8TUxfkQaihPtzz4kGrQF",
  "key11": "4uwnCcdczrt3Bn9Sih4tdN7krEEDS7G3Q8WidnSffXvouCCH1JxSLrncarPNg9xWqoEYTMKU8MF1VymNFzhABQ7A",
  "key12": "2yKgAeWWB3WWxrgoGtJhAepefJP1Lh6cGqGCcMGtmU3Z6mboEt1DMjRz4RxHcJGz33QRCnuqUYoeyymNera1PwHh",
  "key13": "4HF3jLF77J6tudppcFKAfAP32zFnsHeRfQ84CRMjoU7JoEvYjDbew9iDKBLBTtuurk4gRBCwYzJEgav1UggmhyNJ",
  "key14": "3Bdqajd5Zy4mD211M8eNdQKwyvhwV5juC4hnyDNZ7mPAoit89coJpt19H2mnsMBotDG994Tka8e3xMLJVTWb1LwC",
  "key15": "5zMUUGhov5YAEzBfsXzCWModtAYSCg4VNFbUxa1KzSThAe8moKdbBLzcafrVwujrXxwC3K3bc1meCZpf7MGdbGyA",
  "key16": "3fZVe2zzKCcNG5Wib3rTJsXA2DZCnKdrfEX3FY6F943SRsmGBjJ1qmnPLD6qdQK2Vq87YWQd7BgLB57qiVSU8JrS",
  "key17": "5nsmM8e4vUuBmtuBELnLDecTpJWyZv3Bbp1YDQkNHWdnKrXJrDaNASMRJYP6FkRbbqvmBBjRAzhjtqeEDipkd9zU",
  "key18": "3qbLCcCFCTtMFTY82FuuZ975po2zt6ffei7Eg4st3y8vHdQoxaR53i8UzTfTbsFuiZajXzWX9wQzwMkfZYeqg5d4",
  "key19": "5HVoXLLJF45mXVHkQrChfBCWPdsBLxaB8yqKfeLg2wcYnFi2HijPJnQ2H8uJMxZK1P3i6eBVJfna8KcMCcjJ8RQj",
  "key20": "2aa6sVehgHbdEQms9kY3pz8X9RTzAHBRu8hgSXuo8ptSp7o1oeRsFP4DXAQ3gAXy5t8KuCwKVEs1JxEbYNtrQ9AS",
  "key21": "4Q2tsmmR6yeMiXQmK76e48PTqoouEBksLzWRAfLoYeX5abzAgvBgM3krABFmfsFsJNuKvpSi4S3kL274SYHq4TZM",
  "key22": "3qxpDTsxGHht2KQxsNBNHaLJygMegBaGrbZbp3tYDH2BgXKX6ZD5fxupcAKN6RQGbyUxtL7iarozY3urK9v5dYhv",
  "key23": "cxmJGmRFrjCY33SXRtN2NAAijkz11odbpZsAJWjyWu25NGPNQgoPNSaGvAosdN1UoWRxAvpegzpQMp5twfT9VVn",
  "key24": "4yrc157cdWwqh8JNQbedt48ixZjgTnNUZTfVz7CVZuowGXpqvWatqtfNXdtUSopPMqVw22bqahofjziywnumeTn1",
  "key25": "Wyyeftcv4FdyJLS7uLTEBrQ42SUsbHhrc3Y4dEci1K3TL7HvMY98pLnjmzyk7aazJ9BTfnrWsxBjTz9Dw8VadE1",
  "key26": "59onA8TWcGFfnFvtC4CP5tkRB7mt4xU5n9upFzGngHsdrwALRyc9YbKF5dc14HDALs42qnH5ZkzEChfMLe2Ebw8J",
  "key27": "4h33magDYDjGoWfv5piGcrMkAfpBh83MQ5qtz6mZ7Arn1hRKfYpHoa3AVa5QS95dHZjWGtXfi3xsbLRG2NoMJrnL",
  "key28": "5BrN5K3RRJYFmXs1VHSt6Q7wXMJUKhfv547NKFFu2hsqXzeWGnPhYnfXnVwKAhJy2uymZHRWV7ZTvCg4KDirZFFg",
  "key29": "3XFA2rDxMuWXaCrgVHtU9TjxGdNfakujtSKAU7LDZQ7CYvgR7Sa3QRzxvR8DDwFnWkgGDhJyHr5ZUi6AWhzsRVM8",
  "key30": "3w2wYDWLTdW1a5GYaUnrbZmLwjS1Nv7nRXM4WCXaHYFYWw2xAeqXcAi2SuUmbDvW8U27ychH1SQMaL5uMWZx3wmm",
  "key31": "4ahqCtatrB3jeGSuS4s9G3RJtvXVjcA889SdCxrYRf2WVZ4H9KMDZrpofQsawFEZgbp6uSivkhd5RHV3Gc712L79",
  "key32": "2hfvthtmzsWKUb7qmWLc4tUkwF7tQUkFKFceLqXfFahVTK82sBWADb3VCcBWjvFW1sUuNJrDmE7E26Q1sJ1DiSFA",
  "key33": "3Q3YHhHQtuBfyQPTRpKpgCBT5NeB5jC3aB6LNK8U2f7poqbWmgd9YUEtsQWpKGZ7Q8xGgrvmpzE3rUS8CGPP4mQu",
  "key34": "5L9KEQzG2HSLNKSsLQ7aqzGkNKYND5VfJRDzav7iHAoSD5kdpVT54sdSm13bJGgXEPtrrGTsEcQCTdY9Qd8tWtoi",
  "key35": "3NGPwXthAzY6asauvxYCZAbaxXoaaLY3cjm5LFn8EhnLsgZgNN8CQnM44TKn4cPEAeK8wqXJjzxD9A4GxDoURWro",
  "key36": "4fvLrUEZqBF4oYrX85F6NJtNJmavBLmzqXQAhUZsT7XX66jnPtqG1nVBwwY9HDJGi4xBH15Frq2MwkuvNSkbNUMh",
  "key37": "3UyzQ24Vj2PMBTsX8zh8iP7RnM913YuQaK5HpuY5KFTp3FPNLrHktzDqZvA5hw1WtXz3kwoyd8yb11wURcn7ijdk",
  "key38": "54h3MCNx26EhaAnWmT4xE8Gd1E8kbnUKRsyfq9tYVhpxSPzntjYv1yvrWvMjcEkyp2hCNeMvE2kvgEYdN1TsgzSB",
  "key39": "i34ZqEukpEHqcQSsRWVMGgmkE56g9a49nm51KZmKuaj69rW3fc6oJzTApKML22m5p2CJuYcaJDPaQ9LQJVwZJnp",
  "key40": "5KFFXrtedLXYVQWxm8BhuW4BTAcWjcntein9a4MSZ4F6WBHHUDqSrjyaJdLia8wiCLaciVBEgiuyqZQU1GENoERk",
  "key41": "dZFXkxSosF7FPRBFJn6F5qPeQfBUPgKLLWLsU8fPp5WwGirRcWc1XEwCSapputVGF8nWx84WERt2QdE15B2VVAM",
  "key42": "2BzKpHxztvYMtzupPEJ8YwenJwY4FrsAccQqgtY2vZcnAcs6JH1Z4Xu2N2jWknWPx7rNR2rR6KRYSYWbQpZGSnRP",
  "key43": "5VhMBietLzvhCirLSSvyNBDGR7sfTXMHsZZfDhwBkXZ3TinswGPdxUS1jHhUCMdFNUDbvKHQgUC8KusgCfymoLoZ",
  "key44": "5LyoF8LAM3DB6VxSXngx5XTjD8V7m8Hn8zu3RJ3J29jT5aU24hPiZeMMtxheTQGSaB6RoQAEoJBfew6XFjCkscW4"
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
