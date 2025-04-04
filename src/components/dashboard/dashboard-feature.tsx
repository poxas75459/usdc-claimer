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
    "5V6HNdqph2GtbVKxK151tFxpB8sfUDnFqXvXkCNYTN6zaBYR3yeAUiX9BfixhyXe8L7Px6Ha7MqmxqrUBP7Ts7Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDbEkFHjbqiwdwUnuaFRzV2gLvEZmwTeoAXNrvYX3YwWApBYhEadHTkuCV7Bf1YUJpeDh4MgpGzTCpWPCJJZ9m3",
  "key1": "2dxFRGZWtciHAt2xd9ZRirfo3T2xv1jiiuFUXovn3T1BY5o5tnpCRNbzzbtm6QyD4zdYb1xgnhAh7oxoXn5iQ336",
  "key2": "4MS3hZc7xA3kGXofAsxDZBrC7u8fzLBCRTepCwPmUJb234DQV9oYhv8cZ29dg2X5mBd8iQLjByovttL3pfKTjiAq",
  "key3": "3uNwFYit7Y2NRaAMaoBDEk87U8WfhinP89Nd7H1hWGoLMVbrWfJpqCVydy1DTQCet99ebF22RTJwH2f5m5aT581h",
  "key4": "8rjPTBYCKiYt9H3QqTZ2wiSv7vfR3tQ8QYVbGnC1xfbCzn61UazYwVdV6GCPJTkyYeykvTco6mmyAQvRBhCzGUf",
  "key5": "38RSQRd3A1KwacEhDxmBmGK5Xfy9kpehzZMCER3Bdx3C2s3Pd5wBDYHHGov73GABPBjaNWd38cQHesyw4dcAN6AA",
  "key6": "43qqD1YYXh9WMt7mTPfaXY1NYaeNUCuFnXb6gdGDM2gMsM5AvPzUkfKkbTTrjLLXqqs7GP5qPwnbYTeEnefAKzR4",
  "key7": "3v2rYXJSJfr5wRaCMyJHrWdYQhazP7RKuxUh4dSCNNJAuvFBriRdndC4p2aoXPA16xm7wgqzhzuLEDjVM22ihizJ",
  "key8": "2SixBJNb56M4uzSJgHeRYrM2tfF7e4A6e8cQQo95QGq9YEDUy2Z9XCBBZcYKeJVJokxTu9954i2NLnJzN6MCxwXN",
  "key9": "641xuB5Ey4UNPBdTiyNHQx3WdSQadShwFpmW8H4Jp6L27gXQKkKMg4my2TMbH5GeG1X3Lme8iXdb3ojAXVUxcFbU",
  "key10": "TcyFTG3gjuMH3pYdikh42ytL9hL5ZndyWefpRRThWtbQ6XchPs8btakXymcsQ3vVTHTQHCBG1kxkL61ecbJguwL",
  "key11": "2Nbji1TBoVwv4ELtsbKNPWPkboDpxs4yocDFeD8kSGqAC9yh2s7JMDwmuNPvhk9cmCRxAsDBM9xxpFm6Pc3UDb6L",
  "key12": "3sfcezoFDHDCGwYcuZowpAHb9Ws6gdgeCnkew5mGCfSZCJ5REeLEEy69PTpiPw28btsrPu7RWai6bVeAB7HRUpgu",
  "key13": "5rucRQSj36CTPyz6y2izbkSUBQE3pckbx6Y34emYwgW4DuFmXZX5q8F2352jMWQvnXgMtNZNg5WdeD4FAw4vRQf9",
  "key14": "48ZL6R9vXYQGwU1thLJrYAvK6DCHzRM2SEApG1NnEuaY42t85F7wKQdqeM8xk3GgYP9zUXXqkhRZj5zHNJFdrb2v",
  "key15": "4d38udKuJV1vVXFfGWUoZdA8VedPF5GCLRBKJTfq4WbbwxiUV7wAfWn77m3nSWUkFsbPSJYSLbPMAwus9dXU6KpN",
  "key16": "3kmgC3ENv68kmqwuj9xfrMCXyYMtiL6LY63kjMtdyU5Cp3vZ69GaBqiqEbP1jjkDS87fpB3YhN2uQ6bCsByB3qny",
  "key17": "56qHMQjFw3bTvzFiQJxbGcDQgoydR8QtsyBbJrbTXbdwfka8vhXvj49oFUwCK8VBAsuzyfrp98xF3wUTzxuynQbL",
  "key18": "SSP5MCDHfNP8o9nXkjxoaSd99sSpEMnqqs18tqS72duz59PZ7uc7GRA3YjJkV3HuTQoaxgBzuJ6A9N11zSdXfoJ",
  "key19": "3BPFTjTqsCoo5hch6JQV4EyzhvCEGD3Rp9xe5P5Vm2LchCoBsdrumTu6HuRSkcW2J2rQ8JF4Jecdbh5aDDLkePt2",
  "key20": "5ZVPJxbVbTADyNLz3GNhRWwHiFKEJGBdYiaaA8eRqEpQ7zNNBX81uQGYv7jGdTJhXTgP56QhK1BqYGQ18hpizGRi",
  "key21": "3FmoHuF5FPHQCtcJNMtDk29DMCT275bCAy8jmNniCcHQQgUHBFGwK8KZyfGVrKA2upcTqj7rHktMWjC5ZkKFNoji",
  "key22": "4faVohWbz7mwVu55jnwSUDXZweaiiVmakbDeKBduanmVfiNHV44z7wRgeSsxJBozovTSdFZRj8pDSGmxH3ezyo9p",
  "key23": "5iNHgmcm89gWStr7C3M5K3APpCSYyLwMqmvqx2jVyL3oN1YygREbTmqUkKg9YS68LEetwXknkCfueiL4TUipYQ7u",
  "key24": "5XBsVuPbxJyedy1H2WtAJyqM44m4oBrUcdPRSn7AQ2jM5AZy4x92APNB5aiApsdTLcBEmXtq2FLTGgFncSu41K79",
  "key25": "24afYT1TEkC4GuQ6DExSRunPs1xMNJsvH4Y6dcP9FhAuhSCMSCtirLJ4w733cp9fHFEa2XpNYrtPthKvEM6hKsA9",
  "key26": "j8rYdrUrh9VEVbXLrZSUPnmzx3oNCtxDBv7ZEsAAf8RAcxF5HvVR7E5KopbCLkbMDZ1mCDBycddx3238jZ3oWb6",
  "key27": "2FM62UeQyH9PTHKG6qVEKHUiQjNYXTNhuqBfUJBJA7UTxcMDYaLiTmiFhmMpUgyv7A87sGnafq3GyKs471hrvxVo",
  "key28": "3U89GNLGKKbPHVdUfyctqntSfU6nvAqAf5eSyi4X3YhQDmjsp3GWzhXQyJvciBcm25ab93kFhydNoMa3B28uUkhq",
  "key29": "4EXfHpcKymo9mghHaN7T4ZPSnJUxwuRNDwN7Pmbrvnzti4aZBzR3BWMQsvKhePFsTHzTPrw5Kyjuytv13kF6aWDG",
  "key30": "4T2GJB4WVVGqqsunTsnFaxoYKrukV6eECsF3LaDnWkQwjsPPrtpB7EJFmrQLjKg3wUa2y391onWCZjmP17tT7Fz",
  "key31": "2ERFTqiHwXmNzuoAdkAx51DQ1jKHmSix7XcoPNB7wm9aSCzK27hqL6ae4bM9YgtGprL1kt3a4D1Qft2EcoyH8atd",
  "key32": "4pfRckZ62Qkmsjm11CBct4ah1cCAqwEnBixc9FWL1sVmNsMC1T3mFpvMi4FRGgN1Pv3JJJdXu5aT3HKeP1AFgRSd",
  "key33": "2xtqTkfiimpV5NDgpRBt4RVLoGXSk4YhAErW6iP65VjYF6MBakTrVkn1eeKNTMDFsg6C6kwHEcYAMzZVivEeb4wi",
  "key34": "4J16aKxFSQLAMHoghz2QLieQY7eQCkauP1KqFr5WcFQ6UJpnxjsEeirXKg2cWkUtEhBVXtBEXd1asADKy8AcUCq1",
  "key35": "4ZLDBRXBZyaRj22VmTA4XDvtkvsvMmpkn5wB6TbSU6eWMMFsac4AiExouyxoCY16uKyvQ8seojgHVKTvrKVEPCuS",
  "key36": "4zTTfRJkzhMLWmLGdYWXLrdUFkpuWFezD7Rzq2MQ3MAWBfzqo6ZBFfmHJT9ij5vu245JxTGHdL5X8my85X1fsco9",
  "key37": "24EW8UzmQmeHjYBYvVJTmvJ4czUocHzqygertFzAGVkUHMH4e7GcYkKneASP1KSDERDiEyTCL3BVcHPBFdfNwsPA",
  "key38": "64PFz12y6ghzPzu81h7KVARtoCdhsTozWKzSAzAoYsi3mEdUMULVQSvycL6w5BufbKao1E4cUiPNK7TUWWSg93dh",
  "key39": "3ie8287mHMUxTD6qMaHBJJHiA2dtJQ1YBmyuMT68AQzEscJycwdvtw7KQrRfCD4ryRcvaq7PaLdPUcd5vBB8dpQT",
  "key40": "3Cduv4HKwr6aeXYyCowWDXbMyWKWNGCiwKG5DmBkeLdZV6wm4njhZxaHiKdhPoEFkozhtdGszGMBFxifyYshE897",
  "key41": "3ukZDuFTnmVzfyXLVFTJ66jFE2DAzW7KUaxSupAJu1XNjVGtuKkBeZJkuZuXNavbXWibVHnR2nRAPfiRV6Ld3zYt",
  "key42": "2pCmGmM2hK9tTNmdo9UKnRWH7NWV2PwjNepUogjixypTmjafz4wdURVRdyJib6yxtF6AaCxoo3Hgs6Xr7VPvXFbg",
  "key43": "mWJug35wvr6whjLfvFhD5BvUbFkugtfuBnu2qUQUxTJ8SxqQbWRqnN9B4LDRPTPDn76EmLWG9oxZTcTtdnHdex5",
  "key44": "43VdmQRQ4szAiYEcSWQvWmsRh8AmnqqYUeBjk4mCxvoz2U1Ykddmkq9sTkePA7TL7PS3vVzVLVdEhsuxMMqHuo8f",
  "key45": "5yWT5MnW9GBUwoaRK3mjDgEm328DFTceu2Z3yPKSnf4w5VNFeXu3RExfha1CmACPBLHYb2Cdhz6qqq1t7hoDSSz5",
  "key46": "5Rk87xqpeRB38DoaueECBzddxr6ZEeVtddKoqXi2KzDyTLyLrgHNyyw6bcKKq4ywTGuyeoHJa5UFtvKMJt9awKp7",
  "key47": "4RHX7h326X4FDBJ8JghHK2v9NJBDBRHfwkti9zb5vHBmde2AwanZnvtwRqLjJi8RmaeY4spGsFctMHqqQmdWkp3F",
  "key48": "4qq993A8Q1dZFb1VrqppkFL6FV4jor7jema9JXLsiZWjjjyCwgXRBjpCuRTwva1qfQc12t8cvyxPP7wqnqagyzT4",
  "key49": "4NHrFVEa2hbPVo3cFMjLYSW6GHGB7KAQvbWf86Nty8ty3HoRQ18BAZYCPgknaLh2g4GFNzUBQXnnmxamcEHG74rn"
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
