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
    "3NNTCpspifoXHxzE3KkW8cJHexvUjddhvGV63hiUKynRvj4CEKkS8avcX8RJNQx31z8o8BZyRfvejSwsMjCDwhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adJWjWzLK9omfYuvJifEGpckPss57dnr5ujqFYRQuyUmUS429UfZPUKMDH1Ykdw5LGDsc8iTwGw8WD1FFzvMxKB",
  "key1": "5Wv35Z1a94LPavhi7NG9SMgk7ZNedJjqePhoUWRoJVbqgnsJKfZMSJSBfaUnARtV1Epk9pbyMRY4d2H3wkwER8gk",
  "key2": "5EbyqMb9DCHLnvfii5VJUuFp7dmzWcVea73DXm5LRmTuDXds2xkLCFS3spVTgSfTLDX7TU4fgdMPDkUZcAVTGazX",
  "key3": "5YHAjvgwDcC6r8uJc32v81Ji82hSWnKicd2bBwLeJdiY6bBP2ZRsytSYHzp49QGZDRGokRkmEVZbhEDLG2WUayko",
  "key4": "4saKRcmpEQzM6tZjoQPbEEQUgVv35w7nrbmAMhTMj7ipRxXNaY5AyacvEUJscssFFoQszxyEvBNvwVZsfS71nvtg",
  "key5": "53R8fLLbhDhyXhFm7xnSc63G7Fhpx34PT8BS72TMFSKcf7ug6BFxsMjEeYzRSPPjSCkbbMbWJUu8mzigNwAbKhCY",
  "key6": "5Pu5hPbXiAVrDhBQBZkLvtC8JHbuCpDgdpXdWjYmk123rPRm75Dibj7Ug3MwcVUSVu9uP8fUJGmuVXnEJYfQta3f",
  "key7": "3r7QsyyqbUAtSBgRgfpJM5G6RJgbSy9foqnRPYm8icqrpcPqD9FkU8jPe1wXs2b3ipBVe6G9eAbYHMDBpJSUUhjK",
  "key8": "6A58WkS81r72dWvWPLFCUW2fKrpEkudqC7imRfazoXZz3n8VTmogiTc6CCmKBNJPk7PdE6e56ZK3hjvEH2KcxEk",
  "key9": "2QURLrqybKmybpkxpnsgJMxSrnEs2C2f5aVSz4J5jaVUv2dKtSMrUk2QbVdRjS7AiFSAoi6kzu9i4qourkifd6vR",
  "key10": "njQFK3WVEcRNgJtHCbG9o9ZtHt9TGEC5rfnEzA9kJxsTJgSSuTuvo6XimjKMAxRckLFjz52TkoTLYLd859kbGiG",
  "key11": "5Nor7MkcJL2aMHKgBKiCnCpKN2oU44NWSEy2fDiB8ZZ83rhAk9BEEzQDGg2EESDh4VndNyAYQuTYMcBTkyCuEruJ",
  "key12": "3A5tCpAMvkbuzhQbaNu63JcwgSCfoZju9x3EbxYippyaQH54QT9hUUyPLKamuaDqK58ZJoJiaSH6vANErD7xYUCA",
  "key13": "2NYL52uKHmmgPxqfYkbE5k7mncdT2YhMSpiVrSJHegjWVayFH29genCSeY8dc9xgnY1RdwZ2yUvsr5CipK6SdWt7",
  "key14": "4d7T7LfP26221fMA9bVrEK6tuGq6VxzxmQuixbFWqkar6jW8WW6opcoU6ZDLdzp79diNV5PRu5kZ7mS1B3B3YJoc",
  "key15": "4hGjw4b5ryiLizgB8eWxhjYDcV31fcMbuMfAgKJKE8FFyrAxvdKdBMBfRpBb4vydUTvkp41rSwwZns1J6WKDFTv",
  "key16": "QVgrWDCVuq43K5W4xrMtQTu5yQu91ucLKv9UeoyLQfxRB1aUchjie4RQdbgtPiCP9ALvJRVNbCUePttQLMdW7BK",
  "key17": "26jgxFDzvvYvYMLgf1pi3hj7gHkUxQL2wGxSJgHbZTUNG5eQJtfiLnV7uXwhPN6MTXqHyeiDksmdbQdtQTScx3BU",
  "key18": "2pU2bJb4j9mKmauZfBJg5bQtmw7WRp1aN7ug9QZzt131zxjWyxr5NXcCUY6BNxoz6TcY6PAbFuXL4svRbZ2xeC4i",
  "key19": "WKgv5Z8VGgEyLa33ny5e6H9aBLc9Ri9f2n8SZRZnZwYnEoqaBikwc5Tc81aQVmDVxcgHWeszPqFUjxmu2aRxqGu",
  "key20": "5875JVARPzfM98duM9PabDCwnbMudv7YjYqrDWJXebqwTDoGmx76ApT87zGYrLzFaHhZMv1XZMVXFLrqPMwY5yaD",
  "key21": "2b1eCLD1m6KJBWz7hLgqx5by4CQFyXczRBghTv3tEt2FVGwcggdYKfvyRkbbave73nUFAEn9P4iEry4BHm1mwgxt",
  "key22": "3433q8wU4aL6BZE28URTBKmTuyXWJwGuZQNvV2FPHVZUiALDTXC4aADYMcwFb5JUuKCEGEbqZtq3eUE8th2ujaqn",
  "key23": "5i4yZwpNQUVFqYiohP2EPxVP4WdkpVBWiVvVphexL7vnTfgxYUXT3DuVKvf9CKdkC6RZkGu5tm77rnesQdoUfY1F",
  "key24": "4wq64gszjXUT4gkUpyuaJYXy3PkQk35nazNGpCuZ3b9fHUvKiGq3KmNfcfUXops8RBizrG8FnxJUdJQvsJ4Yg7pg",
  "key25": "2vvd4H5tY898MWDJMHe75di2B3xidreTcWUs63rMbj8sjNu7yXQuoi8sRiWtMC5GALj6oAFkYdMdzDfzHMJNKepv",
  "key26": "4oYqnPQ4ewwLqEm2N5YexpBEFr8e3VUkWB525sB1Au7cwGr98GNDNo32HYHY5AY4kkny6zXaUtbrmDTjwuUSCFbg",
  "key27": "2LCMM55SXiiK4Vv9uUCs3BKXaB4SBeph1Hz2ok1tGzgbeFxNvC5NexgZdSn9PAt5XvUWLwiUUo8bqYKbLH7DhQnH",
  "key28": "2F8ymmiaThQxhUbmjgSW9niVoBpRUp2bk2sCzCsC9YY6ueZvNZk1V7DGVAa9xfePUuYDanvRmKCGVYKshFpiZYvv",
  "key29": "2RDbSTSME8xLZJWVmb65BRv4dXqubsPmgKWRCepfHLJCyYYURAWyLQfKxWAd4vwBFzUbNCHv4n7GbG6PeBixAL5W",
  "key30": "643A262DtHqTCYPGAwAKhhqutbSgbFhBQMJGGs8dmwAdsvXj3Eu1wZ6twuBRkjRX4hHcQcL1aWiUj8NhDKTXSNLm",
  "key31": "4Ee7jLjnQsR5bE4iz4ExVTq3zhWcFcTKhQoRkUzKFRjjz4gg6E8xu2YW5vhsu2yQ4YaLeDySHCFR162U2qH8G8Nn",
  "key32": "3M48u8bKWaE5JmYB7yJmqLfhWtdnP5BLJkm9Qo4RZpf2otiPS1EgNjMbKtuH7sAoNRnBQzZrj2svUvTFd38nUioM",
  "key33": "2Jppkoba9BAcdQFZYdu43pGv4Aw3RMJx5KBofSyV76SsibuHEGyvq2zACkL3Me5TUdQ9txCqN5SGWGsxhFGo4HF",
  "key34": "TUhSd6FaT6jhYVEtnJR2PEUJsVuB4jqkZBFnfo3zqD8vdxdmwpfnnVr6Se2DoMAnBg4rxW5MruyJEU2m4xx1sH1",
  "key35": "VtpKzMghNjEpggWUYzzUssPBxL5vnBXgTE9F1Hrkgt1NJcRK9eY3SnB1KhNYxdc4jJcNKsSiGBJUqiQUrSmRC9S"
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
