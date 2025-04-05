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
    "3BpiknPLFvM5p9XvDeQyYhMvrZtqdPmLJVWho1C5knr3HqMEmzXLAfoXnBkJUD8gQRq3PPvBivdTmtX4A8CoK55E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5GYnZWj1ft4bNtwjb6SBFXDqbqsaS7gadjRHLNU3YakdYWAw7EiwR4nLPu2ewWEvugnsUaKfyB1KEXd4g9kCpv",
  "key1": "5nwBgy1ShK5K4A5cQfNY2Goe94djFju168ZsFBjNNeCra22FDtqvkwSBeFHCUmFxggZQKXDorHY9MyFuoJ9d5xU2",
  "key2": "2DC3CwFntr7Qyd3nJpPWbfC9czSer8Rp7DLPtJfHXpJuP9LvpSTsv9V9U2MzntVDn12h8dfqV4rgELhj8ckgmVZj",
  "key3": "4UaoUwAZCejGYNumeE3zDNZG8hnb5wt9d7hpfDiqUA9L8yLLHzKYJM2cNbVuPRCkRzPaSEzFJy9M2UFUXhAoUrQz",
  "key4": "24PHqWqpcNyaokWpSsBiiy2eqnTFJhRFzvNCiZEVJG4QZhMZvmRfc9hoi84CQgut9PSUyFK7hYbN3J5zibHNeYzp",
  "key5": "2nxJbLts7zevTVcu7bvp7H6fpiqwogex1onhwSVGviX3hgqqR35waVjoC7SJws4jhfmW4H4BS8sNWJHeVPtLYBqK",
  "key6": "3vRoXuZBFQahSjKE417YLFVJRqy4rvUKtmDnLvi8R1dWuXFihYd5t5dJdH8LH9WP5vbjYtCq3bwRmAdmJ6L2puz7",
  "key7": "3Uo8iX83543kZrmvxNpnrqmHW3gs4FNy2QW4UZsuLmSH7wSQcNxLC6wWWezMRLQuCvc6N5DAfQvYj6YKP6cPC42w",
  "key8": "231KXStYvthLrcahyTBzUKfmXgyqTCdjebqxqVbb5kjzjrdMMV3TX3QH22dvUccixKNBabdWM3ei2irLXR7MUECD",
  "key9": "3vhRaPJRDKj3nenhsE6kocFVjv5duiDgtVZekPARTLG6YpFMUhGm4JGkgsiRV8cSWoLFjb5k8iBxTf9KCRnFrpVr",
  "key10": "3sV2sz7HaBznW5rASyBDbPGn2b9mg6wV8t6H3s1tee8TF3R7xjxTwcWhN9WeJryrY3Sr86D5mFPaBTVWvhjQKzR4",
  "key11": "3TZgk8UrUe1gbKbwr1WU4RQ2CQKYtjNuiitGXqMmgfLYbMVpg9HKCpFWcGhRrs2wbYM3xrkR86snKinP6M25e6ig",
  "key12": "4HpfkHNS8aUiB5pWrY6wqcQ3sFL6uTkTYoBLJxBSfHoJLagX8wXkkzt3S8CW3iu5PjQzVjsynxXuHtYnyAsKNPoA",
  "key13": "61BZNMow6U7v25rB4HwxhUxtm7Qr91y9v1XS6ihRr6h5PBYs3rwj3yqAK1nXwr4QZeThCcXZ3kSvU2rNWVR8aGeW",
  "key14": "3yLBc2rMzWcBrDBmVYGyb2X9yrrFPqVHij8cZBqi3rWRYucPWJFE4RGCehpVT7SDgPgs7QkvATz78ursfXXg8sY3",
  "key15": "ZgGhAaJNkoFBaseJjgNSrNhQ7AvoW1fWYaEEdmbsj3xxgoxfigizH6JMFZ7ZtNbHLWXp1ZjbScBaCgFo38mYUeS",
  "key16": "26MoBnZbSQmj4sXrMf9h3Un2QZriT87MBHzjf2bAwaRqFUYggKQkM35XWr5NitgdzK33yVuBhYqqKaocqwN1X5VE",
  "key17": "4gE9HVyrpm9xJzx9pmV7uP6R3AFW1YdZsaLwnEWVnH1tUvmQc8c8WUafWtVP9ay84DLDFBDstsjvCrcFs3UrFfsR",
  "key18": "3teuCdxhnR4fRgJpMLiKsXtDHpUFV254vveAYNk5UDa4nJEdtbbeZ5vhWabkJVUQ4GygErMLnCMk4WRHERBXuDiz",
  "key19": "4WV5LLeoQsS6ntGAVTxs8TPMEFB9LYdQ5k1ewvVgnrt3Egsx6gQTrrCNtZSZa7dSR5VS5JMnkHUvyvrFjSc1QMnv",
  "key20": "57gMcPxgm7h54PHoonXpeUW6HgpcFNM649WqSPeZCfmSySYo5hirSkazWC5xZpLnPybosVJaZUC4NVPsAqiyiaB3",
  "key21": "2JsfV8qJLezNeX4gyJHUV54SHT6mwQtUqUN7v3Ta4mYn8cwpzpYkWgLhmM69p4a8PMpZTPvCyu2SnqQZeEeDZHNv",
  "key22": "7r51kjD1oVYDoJKB4f2szfLG2vD9ZukgGjVdvDwE4PBbNkszmdGSzpgzV1cZZy75HxkE5dHcvuJaNa4xYGmXXQK",
  "key23": "2Q4W5bbmDtpEJ8G4GaScEF2Nuc2BQckz7izLDD4FCRQbwRT9rzKUxtwiDGytB5LRdtw3bKzhKw1gBxkf6AeoG5gy",
  "key24": "4ymDNL4XGCv7JGQAZNKpPYwWifLfVnmtEZYTDPHKytMchwSUMdpEEGLkDVugCUJQ53xo2kG8v8X3miPMcNiufJfY",
  "key25": "4k45G6oL7goK4kJc9YsthAYpy2yTBMqd9dHaBz4Ec6N4NHFivC5JrwENDVdp1CvoUgzgwGrbTj3YXp7oodrmHMGX",
  "key26": "4nK1WJErRXhQNemYCMJk3Scc9K5SjReJ2HJyA6TksAgfYKF6ew8w3VdNK89jQ4TLCnkwQymexoKCb866yVyPjHH3",
  "key27": "39GZFdFm9a3MjFrf6dp4b8VsqbbYRusz2pJAicCjjG8zj4MUexo52dSf4VxXMPW6sz4kAw1GP55hiAC4UD4BLj5a",
  "key28": "5u12Ej9QdR1eFHQLPEfHhL8dBWwJNS2qQFPLDYg6gjPgoCn6BruUq8eDoBftcE7ajNApSowrhmk6HAd2TYtVfLum",
  "key29": "23DEHtHeJ6eUghwJVX7U6psd7LtvZvciJKeYyU7uTBmx7MncpwaYrAabQhFB6yCN2SqXV6NgrCxNRZLzYNHCN3gc",
  "key30": "2sDB2uyV8mNKeixfLBoMMHBXU1LNXRCzn4yDpSyhmQPwLwSa1RQ6w7UXuAE9dZB5xNJSC49qQy9KK4E1AC1XJrF9",
  "key31": "3SNcDVcReKECgSPp4RKUZUViE1vTPU2ws2SACQXYV3bEp8kCVUNG4Bhu4Qmi9eukvF5bi57hy47PKrKhpoWs8pHH",
  "key32": "4matzCuxqm3EomK12Z2btrmPqJpBaZRGKMoAP3jMEXFNDPnvkgLvXSQPiM6UcNBU1zLdST4933uVs8BrzPWuYbKQ",
  "key33": "j5XDjFP1iPja8Qk6ecSztR5XoUkUgWHmt7DHrme3UuKUZ7bLY4Z4PVj4E82Duuo3vAQEMnpseW3Yn26UjsHG3uu",
  "key34": "cmy9wyxnx6N3MdrB6FxpBJbjfE3JHZcnTzdXrqhD5fjusb7sVVH2zHcuQnAKZaNta6QZz4jFwyfqZH6gnqSggiu",
  "key35": "4GCNBi2yqZuzCpn8nHT8ejjcXAaLsDeWDisihHUbeiAbu6eoGEMaKQwFiqCRZ4LsKnLb1z4V7hEDFpnotfEx7MvG",
  "key36": "63hdRH67hs3r8qPgoVE6iz9DbzCAYmHaNJYEwmpG6UQXtbZ7pCKwdNJcuZsjN7ELvjrfJYQ4vsmLLZ78qg6Lg8fi",
  "key37": "3zwz5YwdH4XpUgThn1yYggYQANQNaTgZj6H4f5WEyVgCwYiwAUixCDs8NxsU9VrJi1Tjvx7iRX52bUUG4qUge1CP",
  "key38": "3UZuu3mhnsFnDr8c8a7UqGi4HLJW4jBW1Xmq3F7sZh2a6soW2fkNhDbYorziYasN9GGGcYwAXmXTZaArUhw22bXb",
  "key39": "5q6JBVVDVRBJc6a8ZRH5JtZCaN2iWvhsAtk6jHwi171vZdpzf3r68mzGVAvpfS6cxR22N5r2NJjeh48LkWq176ye",
  "key40": "K7crC5P6MrxaqQ3Z2GaxFr3fRakbCbvfqhjKBa3uxsS2QNznkTLok9F4p74BfjnHS9y7cDpWVRB2rmvz9ieSRCz",
  "key41": "26mRKwB4JF4ubYt9TM7oanvi2jgKeoKBw2tRLGoa3sJ3X5WtNKQ2Vk8i9Nddvb5RS8Frcfa8sqyBp5dbPVFac9Qk",
  "key42": "wm2J61cCudvgN624cGC1V5mEPb2YEWsSgnbWpd5mjg8nFswyC1Jt4XG6y7f7XHXoAZEJxRUyH8E8mi7PXWZEPUN",
  "key43": "sr73rB3SCgBFiD7Vs6vTGCXvoKVkKgDSCmbp29AqixBBUrVFeyqJ1FLbWqggKKDHQ4mNoBL3defRFkpCXUDX7uM",
  "key44": "3kFbKUq7LuKvwHzCzXNiwoZJSVmy3NVc7ZanbdGwLSoCG9yyaWMJtkBQpyuvRZcxMGx11pEyCQdZ3q3kG2pPXYJa"
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
