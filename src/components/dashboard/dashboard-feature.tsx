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
    "46y5V4fXkHkH5BpiRzN5zQRHXLjWnExfXsLjp7aPvKUPGB9xCEh7sJHCJcErtM4qR2oNwKmqa5axWoaT7E4oaCp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zXdMGkqpZvZt6GgZK8wZ4NYPgZ2xg8QXPeYAQwRVrtEKzxSXAVQMe14dGghnvDJtVvfgNyzgxtSjtcb658ic3V",
  "key1": "4hkm3RKhKtqzcUN989cxzZ5MGrsWxi1DSYyzwxT5RV6mGVQ5RorW1FD9kKHuDypMiwJXUFU2M2yJ8yKBkiU4VikP",
  "key2": "56cHXenSSroM6Z2M7P9RJpskg5V2VSEotA582Py9oM2FFafLTqw7xwM6JRw8ssRrzt9UJVBN2oeQCVg2pA9j43xA",
  "key3": "3oWGDmyQSpR7SxJEeXxsHbKJdYqGVYoKFzWEoWeBx7cKGsc4jgiTGSBLWNi4C2LTZRFjvZrCofHHZo6XutnyqQUV",
  "key4": "2MtC9DHyQnyNt6mmkRt1rpWNUPvqqavmTZRKjGfBLDSFj97HxrLLCHMMgicrS2CJvi3oi5YbRdDsecbJbrByPr7G",
  "key5": "3QH8mAr5Wasi4Y4y7yyWRBxFC6WvJNQEXJxKLhYSLJg9vCBBT8CBX79MdFQpP4KFioYcZBGkjSruYDXwtkCNPa1s",
  "key6": "64Qwn1khsDgeZP6K96jD8yZPkgvxxDGNNoSSeUYC3AauMGeJFHSHAL11AsRhS4mkkEuSsAW7pPw4rxndatwwSzrw",
  "key7": "3kgUSXzyjt9YyDS2ybkfzPSAwshGY5hqHh5zjt7e2dJHZUGy4scsjuCxdCCztEGAHxdD2gPPAYdVdmvmQkrS6HG5",
  "key8": "65RPquU3rF5RqEizWy2hXbW2bTG5G364js2rY4EoiJr2ji9wKNyRqJjyDtDAxxB1UFwJzyEK9pruyczFegjYDg45",
  "key9": "31swMKzkHdt176Mb7E2wHbXptKam82VaVBUYD35t4PFjswggjZdxWm3rqH3Prbj5foAimXqwKFbFQEhDqqJbVJXx",
  "key10": "51wGP85RK94yA56VQzXV9quBo73z1esJQGmtkQDZ2cDdu39sA4C6dGgSNomR7QzpZSBotiRxZ9eCZJ7A8BnWi3N6",
  "key11": "55h6vTWeN4ytgdMs1N2fmrp3awtJeunAdUckaBN5W8PmxZWz4wXLZZ5bruzVFFK4oVtxceUrwCVQ6nCJaCScQBXy",
  "key12": "5265zXb45v4PwgM6nNtoXdKpMf1RLcWfpaLxHKgPKTkzkRutXuo9CBLHjRgjCJDwPrr9oyq55GtirLNtS9MCsAf1",
  "key13": "hfSBQg7yND9PGoQhd7sbraX79KZdxAaC4LTQAgWHMHQ6RcKoFw17TsEH8RBLjvk5t9VACLGJd2kBpUzKH6QRbBU",
  "key14": "1CoDvDyTubFTi79gtQWeKa47W4VXaBd2t9seigbvrKeBrLmn1rxhiKZUw8JgVjNSeD6QNNryN4LTwhjDhCJSKrg",
  "key15": "4ZnbmpbsaYN2JHX3HEMZQZ8ZtmmK2dBtEqDt7VaBFuVnxs8Ap2N473PnRqmWGNssCWqdpkBAxjo9at4PS6KnrYhM",
  "key16": "62oYhi4rHtTqZc3yc8BgA1a8uugqLCgJcQkKYUnjFWUJRtV6p1TG1itybJHr9t9uQ2KVXyAqV4gnRA1S369ZJrct",
  "key17": "2qnB1hAYdVhb6CxreurnoBGmMrQK7TyNrj6ZMd6kSXUJ8oYxEAxdHqhfm5XHd1ytnEQB8rnYsyNcceK7qykcM9vi",
  "key18": "4rvCuwe62raYSV98QLGc5WYuroiHyqkepjfokbcZFui1eEvm8EeM1XeeSkjruf5jFKtdVDvc5rv8SYVqZRr7N8jQ",
  "key19": "4FCBGKURobk8PzKyip6EcrqvwcgigauoMsnGGnp8Ty3yq7X4GLAYifA7SpeJMpthqP9ntnFJ5VVXE6VoXChxXhjF",
  "key20": "2wsVzR7eRDyrHYXvVT9HYg9b1yRoj8NfyDZo6L95bG62NZ9P89vqj8zRayaKukCZsEfCWbQVCQy1d86YJCo3nWL3",
  "key21": "5UBBNgdsAZJFUmEuvwUHrbb2BCBk8Y26g4c5a5yfXmGbUBJdrgQAYz2YLW3tRbJGFbriMQK1Hakc1SHebKpiMRGv",
  "key22": "24fB6vkr8dAPDLMyqX48ER4SagM361zKxBVMnx9ZkhgA1uPV7rVTPxDsdz277zb8jVfn439Srikc9wMU8jwUgaV9",
  "key23": "4154FGPX7CrMp9nQWPsx1vdep2vgSnUmLhfJfdHtm4TTfGCxCiaJ4SXSMbPMNzLtSbzCwvPnQx3Xseuf24TrrrLF",
  "key24": "JyoHBn5PaAeVC9SLZQjUxTJjyikQXSer6PwdEPGhoShACmcF6ZzgCejjuz7F4urKyMXijYqWPeNnx2yeGF3g7y9",
  "key25": "264wKRBnBWiHBr28GKK8CUnWLK8qKHUUn4sKLoDt4t8XdhBZFJFWRSo6vZ5bHixjVqu7rvrcoM1ExH75LRRaN5VV",
  "key26": "4u37YGWmvej3G1C8pz3AxYjju8RiZfQy85aEXKk2rHb8Jzkenapu1CMiodHnFQC5eto4HiUzkEHyDjZEXNjnhzTz",
  "key27": "5QP9c4HUi9hfNGMWpbzL4ffDNCQ5edbRWWDKf7xR8gb3U5gZwgkiKbWLANDAt9YuMweAx5ipovcDkaLJvGEnLQZy",
  "key28": "5iD3Xvg3cQUY3QpExJp9tjoGPQkLTwRnZRRjjg427H61SvTv2BiPiNz9uzs9fckStFUNPJLT8BcGjtUa9Ni1LbZg",
  "key29": "FpX2Xg8WAiRfwcUkNML6xvBzZ6ASFXQU1otJVgoc8kF3EG2CMLvNXMWn8JdZYL1CiiQomNRKpKcPQoCAsMkiY99",
  "key30": "4a9wdGjbhGRRJbjv8VKrPUqfRzhZqqqLQC2LFz7otFaDrs7uVx2g32xPNrPdD2Pi2XgcRC7ToJwB4XeK7PiKsQ1x",
  "key31": "tAsfRyp5BUA1JcdfTjJRtWrV9QmoMBGrXVGuuwsESoMTWmwmrjM2Rr4G4Uok3kA6XtGNpF2SpwZygTLjREjxJao",
  "key32": "5gExzJXCNvFE5aD7h1DMdBD8AzdjptUvzwfQWc4ihZFSbz41kx5LVpxovWYqKZKRvGdJsVh54BBeGWV8BJGHHRG",
  "key33": "5gXyTRzJoHaWHgeo1sBMwNDZhmKLdPfHtZN1NmmE7t5Hcdee9gJhEovF7eA5wLNWzhtQHjPSaG49eZiJTvT5GWtM",
  "key34": "3NsZ3ZndpFwMKwRJESuhPxJz8cZVwtgNEfiYDHnJwbBgHQ9EGQjo3GBXvZK5pWzR2weDbkbLy5A42ApyKneJ2Mgp",
  "key35": "2xNsTGM5K5hD6mguqEwMWXBoG5kBPQn6GJEwf5ZfyQBeioLjr4r6TE23xYxiTJSBJJCKhWgyoFeEFPADYNrLSP9b",
  "key36": "57jyDtkf3Su9gkSdwjkHnVGTq2awNoBrBvxcy7J1pVvrqAXcKeXcrWokHrJsW7wpXVA3ndgSaWkQNfe9vjTnkbzV",
  "key37": "2kbxoVWvGxRJkjvMJizPG3jwF4NgB6RvoBYtQsArN8q2pzR1DrsP3SEJcf9mywp9F5BFgVqK8RayzF7yaHkKuRmy",
  "key38": "5DFDw3VzVieZF7bS2eS9Jb7yzTkLkcLicxWg5afHhpDWiKj9RmpTa53j8yzUHKNaxRxrLQ6F1N647ZjwSkwATnx6",
  "key39": "2tGgPdp2sqiB3voQiwo8x3HyiD7L84eHPXLnKVJ4fvrnf29CNoU3eNzTrkuT3jN2xX6d3ixFaNPyaxedvKndHRQN",
  "key40": "4DJKPhfh84zUavreoJv23qFnZnCBz8pr4tWSiLUQBrVZqHFmLFLeRTKVbxBpt4Q5knyXhmcxzEwLJmpi1PzHKmvL"
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
