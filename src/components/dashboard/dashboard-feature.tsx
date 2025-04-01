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
    "gYpjDjW3NJaa8CPAMSyhm9k4DbvbLCMKznPCKfpXUZ237u6uxBYdCcXwg7gtNwcSzYZkitFvJipW5aiQ5RyBG8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3GmBVbn3PpjJom7JCXZXkWCiQaSwmD5CC69YU3m8zSbtdwFmEre1ZrzANYeiXey7ftWJLohcMBrndfYK6Us3kG",
  "key1": "uUjhRW3idn78Ed8Fvj2VJoHu18aWtinKASGw9XtMb6rEC1bRKCJ97GWa4FvY4kc1cUNs4vRubSChzPX6B969qxK",
  "key2": "YCyfcqVx3zTkyxjUfgfXjAAkcvhz5x7UhyzFGNfRJFooM9VzXPCbNUKtKUCvbnMNTnU58ucvuYcpuQKcdLvYUMz",
  "key3": "qdUpzraTDnWGwuD74agzos7NZ1YqW44sYipdJyj4y1Tpj2bt4fvbNjSgdn5R9mSvA5mAGXSDgpjKjppSZUqXgdD",
  "key4": "R9b2Nki8n4VgKyyHceNkBxgFT49int8NtJjG1yaCg3B7hStYkCZ1T9t5hSHRmkVBDfHc5g8b4PxB4dcq9sh3C1X",
  "key5": "2yNdixGv4dB9wXTYEp42YUBhSqjJKqijAE2E4Jovoa8nw3SZuVEmvRQAqrD9cc4q13CRmqALwKxQAE7JHyVbMSCQ",
  "key6": "4yXtWSG5DgHg4mNdD8NiDXBxESoRvd58ZzmFKE9eUiBD6fJ3C4FAQX5Nxkn9JUn4nS8okWUg7KnFvi6GpBBaUzVs",
  "key7": "5Bph3A67nSfQnvNyFpom6cmiCakPP3M16ou84PwBVWH2Xg3fNDe7YEvgF4KkdmaEFuD8wjoeuArNMnMzPwGECiBs",
  "key8": "2YT5HryPjKhBBsRRP3PKb73wE5oYDn8At9Y8sYxbWmd5QJaq6TDNn6sYiR28AN84neaZUpCnKptNbteqpgN9eeP4",
  "key9": "4oR2Tp9D3aobLfhUgi3RqNXxtkC2qFx2TBFRGf2a7fnPRHjGYK2uSikP8tUCPwiVXjNfUHcFTo7ZfyasFxUxDanp",
  "key10": "5PDGXouysB4uWRTZqph4RaQxogw8otJmzzwEFV1hgKJ8ht3phAUKZXj1F48nsn4oDg4bkZG3EemXCQQahVCWSqF",
  "key11": "J9yqtfdty9wsfuyujGo86JfX1S4uTUAWeogr1rbcCZghqh8oa5Qy6ZTapP8xRx38TkE8u7xtZX2S99D4e7Hckf1",
  "key12": "4VcSH7KNCbuPoBUUjf4E1VTRXwnSvqYgpV5fjaBRSHZS4v9F2P1P8mAEsCjzR1Hersxbk9xJruV2VHN4K65Nu7BG",
  "key13": "4Xc7Rz39GKAfBYRU4qGNbEX8DConWExUzy4iEzRQ1W6hiFAkS1NLysy5kyMEAKQYc6e1eQNVfMZRVt7RfqpWMeRJ",
  "key14": "48vKvfJyeVY5CmybvsrgvLSAiB8AGccBdpECYmMhttSToU4C2tMdXvtSRZaRYdbvMeVtC5yHZNah37PJ9R2SzSjN",
  "key15": "udpQ1hnodyxrmLuTJGufhZnXjznghTCpwMDiXS7PkkdxRgGLanVTH2kgy7WsfaAAQKqetg6QU193JXQUph9jzVZ",
  "key16": "268UEPzT7BCDhAUfPBHN4HNNB9VsjyzcESAwuGwEBuKYk4Sde5ATNafNJEEHv3ipSzyHSdtPUkjhk1v1EuFfXAib",
  "key17": "4gKRUtzEvkZuK1KVPdHjketQBAWLkVqr1HuHgzZMpawR1nSqRhop5PTXVGyvNcdKTwHTuRJzAEy8TL3kpg7vZU1U",
  "key18": "5spTtq78zUhnPPfAy1epfZFJCPSagZrn54bYc6x2nrkkCXNvZ1DP2EB89K9J8ysKzqzxSWXL45bFaeZwF1d7TwxF",
  "key19": "2NpRLnLt8sSDj35dH5cFpifnYa49Pu55epgkALC9WJYjh4C2SUNaPZra4Qdg8BgSYAX3iGLG4qdwU5qvLKVAhLvP",
  "key20": "3KaZVdAWitAGsMVkVFyZ8zXKVhMdhsi9gKPcFMQqCP9gTJFYtg91xzhENVAT4YdciBbPPQr5wgzUmxU4vAYN6Mbm",
  "key21": "4L418Kz4YMPpKh9JHQE6wCn9GUparNTNWrzqhHYaEHmgY4szbYCuyktDwqMaaG8CZTCrxRSnUan5nkwwHX22hnph",
  "key22": "2E61TMXtLkExpjiQvN53vQtWr6kvJedbmdvoZikbnLxRfRkErUTh5Z81d8akVziDY1UisqFx9W2pxwihtrP7QtUm",
  "key23": "2mtqNia2ZrcQ34GQDSQqR552arM9zJ82URu6FGgDApkjtHHwHkidMLf9hHmeTKnDgbuptMYcpbyHvqXiqEySYX4p",
  "key24": "2UeTyNtz6H33aK9cgs4VCbuHvpmN13A99nM5ZkRXrAprwVrah4fvtuKuiZ6BxVuXvaMCwoBKPJZ5NymnL1AhWCdp",
  "key25": "4aqkRBuCiGWD7sRyjLEdJqw1wtRWes2J1RBvdo8jTgejedzMD8LNjKLooqxsdA1fdoRaKigoxdqtJbDaPWPPCGZR",
  "key26": "2RKU7NrL43FAq7dhAPRgDHBZdWoaC3JTcsXDDkjeTBpy1J8a5rJmaeUMaqrmDyvzZRAsgT5NWnsQGSHRsJsJmACJ",
  "key27": "tYK5auudjpFUUCuVZtpj667LCMrkL3YfzKistcMtap5n6QHV6CbMehtAUYwZbifN8qi1TXbwLoDZZ1gyjy1PKtD",
  "key28": "5dkWAZu9GZVQv3uxjKw5xCn3J9AMU8jgzku1QwxqmdNGnkMp7QSNH5V9GEFMsUZi3B7npGgjgLUooifi8UnnpPMa",
  "key29": "2D5pkE93aVUXUzvswamFke4LqVM2SdLqoAxvBsExLfCPskyW2h6mB3GSa7sn7Hv4qsr3THnU67FT85HNtwbCeBzv",
  "key30": "34dfZ2pEjcD6QhhNhWu29CXaxS46csJq9fftEsRaBFRFPZY86FK29gqjQg9EQt9FhaAedpF7tKbYb1Ciesh8MuS9",
  "key31": "4xusbrM8aXgasWKVL7XXnSabw2HTy7ssu7CRqhqvPEmr6ENgox6dTW67yk24PDH6D9GgKGpTLV5CMbVrwkK1aaaM",
  "key32": "2F6M2GeGFkmcN2jdnTTawqe8wq3Z7fV2E2vZTcLVX6hhvD1NDVvSemAxYCBWcKNGca5CWL4YLA1ScLaf7wMev8bo",
  "key33": "23BbgUv22umq27iMzgzDPLU3R6YBG11bJxdvgSe3Fj99UzaFXW65uSJyeWbnqBiTndmY2F7syhBiUF1LESWVAgw2",
  "key34": "4X2Afmh4N7jw7tFcuLuWGGjwetqL8i1pgbjjTPsdkcw5uGCPscx1awyQpJxzotX5GGcq5EVgRqcKazHmyX3GrGJu",
  "key35": "3ydtpyA92Ji9pheWivytn9993tqKUWJkG2qXTCJquKQcsjPSToGryRsAWYY9c9XrfExm84SThbWN5n8vS3M8bNF9",
  "key36": "3vaszwRkF7dVypx1LEV7go52Vqfy757Xn2xeyoc3UpjBYfVbBo6agyG9Ea6W5pr87HnZtwQj9FJTy9FJDTqvvkbT",
  "key37": "4FsjnesDbjzbRkyAgwUh5h1Ft1J3iHduzL1zeQsjSv2jW6Ha1wQy8aHAQDd69PspMmaDH1Nw2GL9jYM8uCuTRC7y",
  "key38": "37s44aAbPxCjDqqoRea91qZU5X6Ty3WmJXJYMH7Am86q4w8piVu7k1VBsTYMHvYk57tdG7GEZDDwfdJ8FbKAeHDG",
  "key39": "d3uSjNrjiCtTTqg8vR7Q4AmSZBjQTgSB7SoxrUd1Z33YtpNiugy3oF2jUafVZs3wWSpQnhMcqDooBSyP3XEakT5",
  "key40": "4QSd4PwqiN42CE53EtDT82G38C5SzpQik4TcuWi5FsiKs9CYisH3dukzzd1eVSCnzuw8kyLzMGJ5DxK8GC5TbCAM",
  "key41": "5NvwAXNQNyjENisbhMFnNsUz7zuh5kuWmTV7Pye2Zhr1BnsoRXWgZAqFNbt2YwMKJQyq6EG7mrEf3zZgegf22Sa5",
  "key42": "svRv7C9uh2Ez84HKVX7fX83gGxPMqj7ZArYKQuUxv7cQbNqAijXw4hoen4QWZGYZR5X4pTHbGHCccJbaYeD3qX9",
  "key43": "GrfwCKgq1NZFu32ta5pDcnmDzyWpFzhopV5E7JA2Cq59WRV1ugFn5QbyWNCmVLW7Y5cfkXDb9nRyEXb3fNWUpy3",
  "key44": "26TH2HP5WKFeZGmuci5nHJRVQMqMAoKcnvpf2dzs31koZ5BMpLNPtwUvubNT7cGj6JoCARYqzJtx9LFnmNXJ45ye",
  "key45": "3rBNzvviiQPCtAGb2eFpL5SbyBBK6ThcnhKnrrpPAxwYRsk2sXdgcBH68m9hz3WbdscMss1FHQfiBEqobWqYU2yn",
  "key46": "2aMLoYEUhWycFjt7ZhYLjtyVLsi3HmgP5L8e6DHeACK6Uhusdf1pUx9c8R4egos9YuxGTXKRDe12sM9FHitDc5Mm",
  "key47": "2f7DN5R6Z9X8MHp5uoGPdbuHh2AHTmqzD9PUajd67AjobSQhiLf46uJfmwYufsdiWm8CRAFNSyd3fw5wtALaGm2E"
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
