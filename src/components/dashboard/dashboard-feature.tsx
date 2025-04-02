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
    "gFv48eV8Z9e2oVAhAYt2Um59P44fGECjnjxs4hQRPfZcy5sN4fLme4ksY4Ktkk4t4YKp54SAaNTSnHwT6vJDuhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKb27W1ARAkjHpr1Bt44EVJtg2WHacP2qgxxGbRAAfBWs1aWetbEeA4Xqxmtp1iYE4HWz9qSDXYMWuVAR3vij8T",
  "key1": "3d1tjaCXEnvtUxvVZkzCVtvBJfneEGpC99QZBuo12Yxz6wgWAAY1TfNzpXDTnoizbFWSWhTpzB8BJHE93L8MaDzL",
  "key2": "2XCmiCtMt11jQvietN5evtHmq6Quj5nY9xWhmNqQgdxqsvz2m9zXRUqaMjubL2VRhAFS1xbibvQjAPUq46shFw5Q",
  "key3": "3SVYGqFiq1P2k5uWnmhm7fmJE4WJDsHKTCDwyAt3N6Kg4KzeeQk65fmn5JkVDBp8TmeuavfL9f3xNvm1dU3W1ehG",
  "key4": "4qLhJVHeiJaUdATYyaPNdbPFd547Nbv8BNTV4gzDa6qSSvfJz1zqMAJAzK9AiaEFPR1y7XyCZV6yo5bKittUkThY",
  "key5": "3CgNFM9hiR69oBKFwgGErAv6uzuufCjZRse4Ksx8Zb68QheD2Ghm8zGXqq5yBhapV1ubozF3Zs48Eh6DJ3pAVu7t",
  "key6": "5yxiecc4nbT8heq4qDyCehv8VDVUcCFc4ELX9HkeAdckKpqEP8ddHWUGgNrxBxaK1RZGW69MDv38q55JqAEz1PUv",
  "key7": "4N6rbxxoJJD4pEcz7j3ufZ526NHrCB7fTk9rprsHhiLaKWr4HkfjUUkpe1MjkFXpKHtNxL3d3CosymTvCUSW799n",
  "key8": "4NhReBdrrZ29rLhDDqzf2JLSLuon4ADrzSz12rnY8grno8UchZkvY6LQaidQjSykt9nRKSoDtnQdMxnYQrHTeibj",
  "key9": "jepKDpwJFSk6fbZVcaQ2yQPUYz1TEXdudBv2jDqTLo3CR5KzH7YzdWPmswftVQA1K5WoJ6rPD27NhajhN2qayK5",
  "key10": "My6QkqaD6gkXz6P61SDznGpHJJ1mKJJkN6H3DYNYJ3ct9upUaP5VZsso2ZSY3XgLn5DoJ1BA1VxizSkhGNe6i38",
  "key11": "3G9P3BicmnJXSr785WRHk2d8iMzmM7mWfL77LYiyvRc7UoWFYhJXSFyDZ4dxwdakFPdEB7X5zpYNBrGN2MvAr9hL",
  "key12": "46b76LGp3ikLCNAcTcUoKZd6avirRTzzgjbkBYHyo7425YdviLkcvq7rw5JcHHCgZdUCYrEDjGBVoYMH2aSq9qxq",
  "key13": "54QAikDcuHmc7CPD9PwTRMVuLZtbTcaQyTz5nRDQv8LseCLJ4sqc4jcCTmMj88dnoxLcSWHGQsKzFYiKceRDewfH",
  "key14": "NnaeydVWZkMPDrjGxBazZqKgwHvUhneFozyu7iMbNrzkJNJ6LvixDYWbUHZNgUZdgWRyUmv7QSaK2qY18x7xqyB",
  "key15": "5cU1a341mU1E4PxNBa7mQieRRpw6hh1CNiBK5teXnmrPB7zrASXHupjFiA2jHvmC48v2pKxqQexBC3xA9aK7V5wD",
  "key16": "TrKFjg4LzxdjizABzqaVfCCvpVddPyAnMeVqqGnAAsf1K8dNrSYHvYGKj38yBii6qn4Gfumfjy554wAC1K4JQ2J",
  "key17": "3qScCYoroQX7WTXeBAJUGAdJ9BoyBRBgatQMsQuR1PbnEbr1oqWVvkVKTx33xyocfqsPiNah27jRh7uZcJiee4NS",
  "key18": "4bNeP7U1XktFGNsQBo8G1HAvtLK9yToCy3fXuppAC59Swe7NDPURCtvHuSE72eUQYNeTrbcCgupxwVU9fJLc1xs8",
  "key19": "5hyN97cEsoAhh2VFzvn6Nqz5uJTyFNkNGdrBq11sVJLXFF6L31ZZa88zQz9uKwFKm1dVD5AaPGYANCm84qUBQhvf",
  "key20": "4e3ZKX71zFur1eVUD8VpWX6M6CsJBojzKRGsW1Nn7wjuSajfB7C1RnzkbmxCu4UKd49Ymp96vDrbxNxaAFqhC8aG",
  "key21": "3UXNy1s2nJizzuFEioceS4TzShaikBeLyBD6uUNC2pvK98qdwkkWeEp1qSRAniL5pmdPq9KtLUnJyXi2hJu5fHdq",
  "key22": "24SGdfmDLw3vojfGCL5UxZt5WbFjEzAETPayRNfYkjxteWfPWiN3wcJBtsRvF1RQznkGtm2xUKRZKBbJQLNsSDZx",
  "key23": "38GqSetJQijjfXkv7j33P9sV6YLyxFcRQSPdbdrDy4jP1qjeWmbowW4J8woSWNTWicqmeeWFPxcN6yuyx4prkjSH",
  "key24": "3j3z5cZGt8kbD9rpFm2wWg1GtLGspoi7Zay4MG2VEQKf4Gaf4Uxb5r9QTq6Ur4M4qtJbHAcqyVfvqV1dhQfsAqGs",
  "key25": "2zmQvv72SiXLxetHQVBNru5d4u2j1Wg9sotwUi7GrLUL95P5TzyJFEFu6ddXGbBNyo6YFvEFv8TLYgohdzHxm5kA",
  "key26": "z1hCmPCkWs6coRD5EEjbDZCDWyGP9tpTXT27KChQMokc5e7bePvYiEAcPwgc4ZN2i5Rgr6dQ7f7qEpPQmgY5LY8",
  "key27": "5KZodgZK6RxM3bB4XMaDkHtDy5MqaBMqSMCNZHswSY99cKtKDgU5XSmTs4hD8BqGv22KyS5yUtsx1D1ictQcdcP2",
  "key28": "4QU2b6WMutLT8xDsZ3i6UWR8W78Ukn1z6dg4asosywaDghRcUko4LP9HmMTqCuNZT6iPRsDAsgjoSgJQGXwZzf3p",
  "key29": "3k9nZmjLCtpdbViQ8aGhABCDWeL8x1JdChRNgAJy6kSYroH6mxRCeYyt4r4jgBCUTWcQzKnPkruJ8sNeLmv7ULvR",
  "key30": "4RSCoyyZEMtGYpkoodgsitf9eu5DVmMSfY6bHQrAydGJ3isA6CexcrufrV51UMrUjeEAmbvnfMz5UfwZ5TPz6Wcu",
  "key31": "5iiUWbY1drsYTWg2hveQiRJRy4gWHnM9wVmTXU2MVaEtz9MsgtZ3EoRrg6ejrmuXgh47uHT7qt5u4YkRxacP9u7D",
  "key32": "jW9WMKTNeFRApLbDELVixrxXDanoGM19UnHinsLG8R32t4bQgH4unSwpM1GFC22T87ZFxJzTmqkDnn2vdJHGWdj",
  "key33": "5V32YcfuW3FrWgqnBJS7y7kVbmmaRji1YZX3DceaiQ7quC2vHdjckvwkVpJbuTjUtXkruwjig1eYjtXqo3po9Lka",
  "key34": "ayvGxQRSoR5d8HQPnXWLbuHMJNrCV85NTReg9uJXNSbjGTQjjoPMwfXArKRZSWBT9vtYsewfrRsJUShnFn38HY9",
  "key35": "28jP32nBz4WRERQgGx4JAYyGV4zQz8wEDqFua3LmBwNWTuPx4bKV28Rsx4psKGuJ66XEqGoEHwttRThzg4AYYtqG",
  "key36": "WZXY2eiHz4jG6MMoG3U8ZPMykzmUkJvVPc2euGN3RfmsaryeASuCDBsS1qni7CYdYUVTxtTEkD3m8BSS3YUZCwS",
  "key37": "2W68VWokySeV9JJKNwZ2T9Hv7ekhPfwFR5NHm3yWfsPf6KB3CRDuuGx1wLWVtGjfhjFzDgTqGVUaLNKWwKPkAGro",
  "key38": "4mthFvEDuiECrAZFiZ7imenVQsRJqPhF6g3xaBBQmeG4AgwNbSuqDogfJk6rCZhXWmzFoqKsudMuHdh6eFfxHupG",
  "key39": "AUZ1nnMEpXVtdp3kwczg3ptA1m9fEZhMhB58FfoVqaByXARxKfQpEf5whkNBCS1Xt3ZYqZX2mRQiVHtypq433Ge",
  "key40": "3Me41Pf4ccMCkYJhkzLgFP2NgzNKE9TjCmhDNkdgTuCj1nzjs3dwV4bVzT1E28sf8AZXbhoagVAdo6P4tpLGaHu3",
  "key41": "3mqWWWvjJ1xnmj2gb3wNJPkLekEhkQQSGzrDq8jqiYEeuDFH4wQMnvzgBAtxwiHEKTct3KnL6MPKrQN9yGjSHmaW",
  "key42": "4EuKNiLGYUy5YEt8tzEwKMQvx6jgabftbeqK4PLeb2WoRzCjLa6JQvhpN5VhGqpXMWLE8hTs3LvP8gwgLe7LfZXb",
  "key43": "59pL5hKniCBQGLzPZvDXjLeeuSq5UvtrL94fR45NQX1VfFUUjstUgBhfDtXH128WHNbLcE55atcmfDPCmGTho1io",
  "key44": "224Uobif4z9airdfbkMFtPkst5hUzoYBX3L9uAUASbFNWGw6necg53KyybovixdTcEYmUSdMYSmwSAdEcd4o9Q2R",
  "key45": "3CfRc8TFbvSmiuHokjPC7VVFY2K29nM3LPpsSZCpy5nLMjaBmgvAWQUP8W1gQhdnAREp9ojxDqwDJsnKGc72wZWP",
  "key46": "3yDbUuNmzMzBzi7CcER4iZNaRYA2oTnhYBGkUJ8k9FvovCqpLF6NQoV4FkZQR9BPAML3VgVFG65CoTMCrtycQXHQ"
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
