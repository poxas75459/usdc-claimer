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
    "3GSpmvrbwxMnPGW41KYJXnGzdYnATvSpmTY1ydvLKRovCARpRVY6eZd2CC6ykF1J47zc3qDFQ4qh2is1HfUW5sah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofyeh5rELJCfubUE9VWr1Q2G86T9uPkYNnz7Njz7FcqUyegTuscvhAh2TEM5tic6EyP1AWHwd34QhFZJGDZHD5L",
  "key1": "31JqSaA517Rij8zSYTxX9cBRrfoTFpSTdiQoU5TFCPnzpsE8YGzST9X1TaP7p9gfZk3bChcGi66ntKND5yZyqLPQ",
  "key2": "EZbToSg8VKowgn8hRKru6ZAH8kQMVK3JSvEAn6SuFMEkk4Lsv1SJdDSTUQds1t9e8MhT8anZvkPoxg4fycfLzCw",
  "key3": "3EvVWCyLsJ2PhgVUChVNBo7PqQBwPVhNAMcqJ6iZKYDqzBxgh3Ub5AsdAMLK8eNBEFH9695Rqr7gdWCrNLWr8phB",
  "key4": "5DwmC9VZAVJXKkoMwa6iKSDmFykoq4jtpKLfL9kH9wPHwqy1PXjYNeN6WhBmEHu4d7Kv69q6MKszh3AbVHB3jhDD",
  "key5": "2vGgaLD8vdw19McTMawQUhvbN3ihqT5C1SuuhThJDJxmwhn54j6A9uJnD1rsF73rwbRhkfJymDWPmay9AdL7W9cH",
  "key6": "3pPNjhXmD9a4JXPfFSg3anPMnHGtuqBrehqFBnH7mjArVgLUfAtfhWLZBxKbTjvFatxW3P6Sxa8tEXaqgcES5Pij",
  "key7": "ieaUfF2D9DrvXotXdPQPCTmoXu8w3rW9UQscqy1nanxYPe5SP7iDNA7JWuzRMPzr45CuWqogAnis6ZXAK7hwV9L",
  "key8": "99kJJgLsev6wz71cUB9ousFLMHjRc6CQQkAUyRsx6MEj5zmhmZGaybRf7JXhsGUaDBU63uDTarczsP5EhoYQyhy",
  "key9": "2gY6QxKCezAfR1c9G6qrowF4FPHJn3qdaUTRqSUViESeu13y3hGFQuDSjZ4QWL6xMAQoKAQZqScGw7dZPFdJkAWq",
  "key10": "272HZ3sJAJi4uHZJbz8ZosMkFTwWZUx36QFHpD8sNXNRhC2oa95XgXdgwfmvxmyLpXpEc4eBdc2kay9tQRtuiw4h",
  "key11": "3sdZQx2JzofUk74HFv2QpRvqnT2yGaBVvmypPpBCy5dJVYeAAYgmdLi4gJPb3Wy2AKHEH4MJHKUzGG46tWFde8xU",
  "key12": "5bocP7zJ7LMwMVekHEQZPmB8YHnUCTpgF6ojEHSLp3i16qFGTgthDqHQwvXuXB1vw655rSZFVoZrHX6Bdn222McM",
  "key13": "2zpidE4UtN7PAubL6MCyrSDHHTBKzfw3sT2K5SYaasUQcCj6pFDb9B6RejFRn2hUAwk2BQPMLD6Re22NCQhq5ytz",
  "key14": "YRsLpptGqxuFDmxKSYWjvZq2C68gTZ5KBr2v4Tw3yWNvDm6RCAsPq21cnSR8FJh19iVpt7mf4vq3wXicLECub4m",
  "key15": "2tLcseGfu7LCQPgaEUbyb1Fucsdbs69mfiyafY6CSjxYYMAcEDaUBHejZLL1isxs27LjvfXj5y4tReUqbaXkMH1p",
  "key16": "56UAxpEw89uLUfeAUfoC3pyyJ1ARma2isvhpFkSRJyADpykoF4J41cUaBX8ZE4x33WoCrCYyxDBxLvVve7fV2tAD",
  "key17": "uoGhJkmNfczhfVfRrBPCg4diqhepyehn6sipbtKBQosRVscb3MttKCT2kuLWtx5Troruba42S3TXyt3ztgXnfFo",
  "key18": "5Lh2ADR7wTHQyWxApMfR1Aakv6wWaL4mwHzukcBtViwAHUa65Xx1YRrMaLyNucFv9gAYb4jKD2x4N7siT4XSnb7n",
  "key19": "2891W5QjYwsDAc94gfaTmskoRdacoa9D7ZmQ2PfQ3ZVNqLnGUt9iyGb7tCcuuHw99RDUsShB5Vur3kXSjGRsk6e9",
  "key20": "31Z3RzKkMRyKbkurCrdfwTN1bpwdA5Ccy6MDGP9d3RjvBYLydTH76nv1fyXFK36AL8SVmbdiQymX2rbtPhYeJiP6",
  "key21": "5r16XPzQ6MEfqRS7k3VMwfrLkT4toeaNf6JdfNK6hpmk9dqsG77UbmxWxcULKBJbj4brc5LgeBYmDoagY2dbb1Je",
  "key22": "4AWS5AttrMxrC2DKHc916i18EspYWwKcUNTmZ5mAj37jxeNu1fqyzGcXnM4X5qwSCFFNNVheo3DjGBdVi59Q2JMz",
  "key23": "2B3eRQe1b49fUo8bL1U8HVdfnRBUFQKyf9kdH3aqVrs6a3HFWjxuQizUP3G3ruqSNzSK2GtyXb5h5L8QiPkps6NC",
  "key24": "wocDBgMmF8bjBkJ3m7sPmwVYeR8oMuNPuwc1v3YsUUmrm9czyFyVU25NcQSgGtiYKKuEPjSVr6UqQKBss77Npds",
  "key25": "2p1SLv8PNFE3bp14pL5xgom8mQQqj9GUTqCPbh3Qg6kSkN5WrZwPa4umCa9wUFtupieVe9vgWHYANghoLM3f3zsr",
  "key26": "4RTDjKhGDt8DmPGmqvokLjbX4x1z72Zdjc1a2GDssbxSV8SaXem5Ce5LQPfTjBzn3vrAUQxxUXVz24AMNnMuUtcG",
  "key27": "2PksWMZgp7XHM4MF6aRr6kM4qCH71tdyHoEZZgKVRt4oD1dm2xMbFfN2QhcTNZQ5Zv8Lyheha6Xgd7GLh1zwwWde",
  "key28": "2BWYhyBvydGdwjAX1oxDStXRUUyxXTG8GzEHs2vpcCuiWdrXwBJGJKY45h8R8kakGBtpWhkeMtQJKKCmzFLWj74D",
  "key29": "518T8S1et4zViVHLjvLChZgMnN1mK5nTkrZDc8kUAphfjNjmpM8FNyDug34Awzdgm7AMbzuBmEdrRySByb7qP12M",
  "key30": "44KicVzaPa32XTH8Rto7yfAYhoRkS31ZWoKwyP6iT2DJ83c5BC5soTVR3wbi1n87sK8JzNMynrCx3gARt3vyUCA4",
  "key31": "5VmzWtV7MZ4Mnn6ukuxWt9c3jhXMqqGGYDYyD8nAQ8yg2SaUGPN2foETj5fxDXv6RzSEwfE2G5mwTFC4CKnFDzhn",
  "key32": "2k6T21gmbzgE74d2aAop619cBYxcXKVeoALxL67zMUAzfZ2ZNZuEzEwwE3e4t8c19cExfgqoJtfwRySB9cRJJeAp",
  "key33": "2g8feDYXSetRk1QNrC2tBq5N18EZdR3h9jyqLWP8AFaqmnVhgUuDdgf9LzfB8ZvaM8MpHoKNFLzsf2Vxc2uYEaqg",
  "key34": "363wskVyMYwfBLavEYj1eHzSHuGuzbM9wUVHub1yMprn3wYYs9qwinXtgKLZ6H7ZQSvpdMkb7d9WBwEqJMHLhEM",
  "key35": "5gaC9jVgw6F2FMioPiCG9wGL3Y4Y7PpAMEuLf7nEatM2UDA8Rov397VG7nxUZPXtznXAgvy3gR2oV5YsdvxguG25",
  "key36": "4c5ggvpP2Gz65taKwh3Utus1tQHWEAPHDb7PmHA41YSHo3i9gdMBMwmyhkM4NawbXiLS7oT8uimxDvvdZeWXDTQg",
  "key37": "z7i6PK6xo1LkERE57hJUENQBES9AbpSe5TWwwLbzcnKLymXC6tfhuUoy1LeqWeLxB5GpvytNRBJ3awhSrizW8iX",
  "key38": "4pgWGs2YNxepzn27tAFYo6SPscP7wAJs6VyhipHVGg4EpSUyAnmNPQtCsnmqxLzyhrdvnZyah2V2WzX68JsSk6Ty"
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
