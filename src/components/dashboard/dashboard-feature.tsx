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
    "Rx1KkQc6RfkmTH6AVyzRi1cAt6BkbhP96PB3kWeErjCGSQYtwcsx1CN5GevYuwpHd9FdVTkbVF6LJH28hfdpjhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmQeyEeLTCXFXt4HGBRBgQmvErdRJBfGtP1HHiSyofTMpAfb7BJTvMnPEkLVj4uFr45ztyZeD8hky25VoZaCeYm",
  "key1": "2jsRr14ib27t9cQXoH9Zhd78Ma4bYQHK7LZcEXPmyVMHfnhmd3MKQFr4PRLg33LDLEJWupQLxjXhdPNeGSPLMWCy",
  "key2": "3LoGxY4bNGjc8RxWcYGezban387srtNVv3zpiJcotBztnLUxkVDYYt74swVr7oeeaDxwtGGyBwuLnw6QgY3koXbB",
  "key3": "qSHggC4hmnD9XQEnRGHLoNQwG2gutW3EhhAbAox6raLYgqf7A7Wv7kxoy4hh4SFWkcZHU1mJiaeW27uGJyk6wcR",
  "key4": "5iY4vfNJCgir2jJeZdBbGUB4ruueT2fdaU47qryAXThEZfHZjGpVwGD6piYSRiMJt9j2ciSD4Xisv1q7ajUpf99H",
  "key5": "4yRw6vxXo2k2J5KqsfLiUxdroLJdkHxKikhzuab8bjRMvGQciJ9KxXhhodZVvk9Zga8qnZGP74GMrVuMZU4KtBgW",
  "key6": "ZK55Zb2U8sHqSiGE4xwD1sWfYg9HSLK93cchJJ1rxTtcwP8vExhLSSydFqY698kB9vySMBu7o1LffzvnMBcAm9c",
  "key7": "4rPRs4WC6CUX1JoMHNicHRGkskY6t1Z1n3S6KsBe9MRRpfdHyZWFgBMAbEVQuggj6v52PVmWdkGvPVWafpwDtSdj",
  "key8": "2SXdyFAuXbjRmmrFBVQZjQXq8hQeoZd13KhNVLGdXSnDPQGrbhXQ7rDJHDzL7eHhAKeGbvXKm34bQX4u3GB4vgEN",
  "key9": "4c5YsQZPGyaExoZBfb8tTuVfxgvX2vNibAZhijvVd2ujLQsuDp76f5PG7BDSgCtzedHKcREfUZGjVM3os66L6UWf",
  "key10": "4JjcDeQYeFzrXFHYeeZM8CKZt2k1bxa4BUMqTYMPaUuhBbhXUUE2TQVEp5cMWj95a9qr7tD9pHpaA3wZzLvrCUMQ",
  "key11": "4QeDiQDBjHhKUQnE7jCA1WtkrULpxggUb2ewyYBM9U5L9qPaun5pC4YG2xG2Pj5NvZ2QcpxJNJA2vzYuSquCd5y7",
  "key12": "22JUaR9sZRUif6HYEg8hvBq2gPuux1Wb84EA7AaknXqZjR7gE6yB1trRnW2WtAA7bEmLToC8ckSC222W4usWmC4E",
  "key13": "2CCRSdU58BTgY2R7AT4cr8yE7BQ9m4G5Z1GSnkYDvhxC65G7WzNEx9AYx9KwGN7r112FQ9nsLFXPsmoRYCXWTyr6",
  "key14": "28ibhxPFftAhrLCXEsCYj79JVfkTeFLyaRP47bUAXsXXi6syFaRXKG7G75MABn5SFmV98R7X4acM4ptxMaQ8j2PY",
  "key15": "4VRwQ5Q7ixnJvgJKneRzVdBnAA7eMXmMhKMdQFGoWkacuFv1YFn5vzUvJ4zy7GRpcZxgCtem2pVGVY8imVWn9qpE",
  "key16": "3kVE5cg27TArJHauc4pEyQZxRxhj38sY6AxE4n3nJTXLUGyYrdVAwicRtXbZgiQe8J5s3Uevg8mRhFZorBZ9iSf9",
  "key17": "5QoFgFT4xcnb97zwbPESUxWm4nfdqrupA6KKcKoCWkGJ7eBd2Csk5TC5QW5JwQSvoEg8zRnvSzVLCdgwQAa8p7Vo",
  "key18": "AzypBgyyyRzWpBQKEGt1qs4EJfhvcR8wV34xNWpo14w8dohodvYzPAEAVk7HEizQiwGNSnp4GoH3Z2fwfTzq1uL",
  "key19": "xmjAdaZuR4KdEedR4bJxCzuazgReuJu6cLyH92cp46F7Gd9biyd7xzGN5ocEtysSztx4C2SPX85JaVcshsLMVtt",
  "key20": "5axpd8YozzkZfdurQuYHPzqzbUPRbxhrBbVy99a2bxdUVdqVf5awsyQwFRJtifAkXRM8tGivigQusyBGztzyxVxx",
  "key21": "kXVnPfiEmVUbybcxsKy8qNubyqAvPNY8LZBjL7qXXB78UXvWXAGXEi9Y6opntuC1TqRinjEF3G6JBAoH9NxU5dH",
  "key22": "h7snMuqPHfKE5aCAoM6avXdXaiRtZNGo7mrirMisMWWF5RRrUwBziWsfJQjH6RCXyCX57wXSrx288o2zT9gESkh",
  "key23": "25eLhPV6FERDpAKGyCHAec3pXf5r6vPRGHnRbNXLnE9MNTTKMjwTnYRE3RFYe1BdFSLGqnBXoFGjjLnzUt2H7Wn2",
  "key24": "4MLXPhFPSAxyxjPHzemSkYrwQQyY6TYS9aV1eCsRyybLkXfmT7fi6UrSEvuUsKrN8rdoi6vXhwsGj736Kyq2Ev8d",
  "key25": "5wbzMuMJSUyTx7f2UzSeyRkRGkEPtiVsyuc2e5RaW9k2ZgtKBD7Nw2X49FikPheLLbo3DMYu3RQ4CveczjeAQ7Sh",
  "key26": "5uE1S6T1jMcVmomxKkDPnxXL7cp6ZxT73G45r2LCN6ZgWmJzQHVjav7PruoyfVbGKEufSJMZJ3FkgnubqKvWU9W",
  "key27": "3acgECfL3KAPfZrJa7RcuCr2hBSBckCK5YdrL4HnzVvp6wBvBqnKt4NFhruggwMEGr1gjXJPJNsf9GoW572zi4vx",
  "key28": "3LDTUwUJ5NARn7XaPBEiLaJj4uYd4wzuTV8MqUNPD39hepoTmctGPmVawqgpw3FyBzzbanBPfamaD5LJ1B6nPZfj",
  "key29": "56brPoh4MNdM6F5kaYKUcpTi6xCGdeM1CLiDtkxngbWgpPc7Q4KFwrMqytq3LyBTMqAXaF922AiN94BdKeepqL5Q",
  "key30": "PMPcZaJnEZkryiP1PmL4igzspDJZkonPzbqpoVT8hdvPasgCDF6wrSApnG9otjPP2Hremwr1hAk3thLnSKxaYHM",
  "key31": "2tf5wzUegpnnmRUMFyoDJJWu3mUwQkXt38hBB4zfbmD4k2XZygpzNijcBQd7ND5AVcQYZidTEC8DN2yWuoRmQvy3",
  "key32": "5kgrztaGufPq3PwG8iDHAn86A632zxYA2wNh7kCxjAr6zeNFwekYTdpgT5RUWNJME5tVRLQyGatz8qjEJ5aQ2QgM",
  "key33": "3k8HfnxWJ3GkCpyHr6tyxKufuTAXcKJz3s6W8MTxXiRuM4enL59bS9PU1Ey6ixkds8UCKFPRsofmZR3bndmjngRB",
  "key34": "33j6eC75suZJNqkGxVSLAG6AsQKKVkeAvTVqQfHndH8RgZkNuHbamsZqhyEpF4shwGw5pKbYwC41EfxLwx6iyekM",
  "key35": "3iyQKHnyz2Hfb1XJJBr5akcekGsSyTW3jQFWuBUHmTUMpiwdvWJUgRm3gEduQcM9ioCCEUf4T9ySuJdjCo1foaFA",
  "key36": "76kY92YkRwseojyu37wGMc9wjJGXfDBxyVNxXeorqZhgc7qPqhwkS4MVBoYz4K2FuRCifSLtBBEZ5WG3rJAdDNc",
  "key37": "3b6JRJ5D1V8dAcgEhHJMfYibYKFmmvdi1W2cd5JvMVGaAhYJWdLyKjTqdNb7kdBxGzaTGrFMz9M5bPdnWFSwKGeU",
  "key38": "51VRgskKb8nhgNC878GsoLCcjiysFUSWX3xW9wYkUkberNG6oEWdap2NRciLv8z7zWrkzMRerj6yi3y59pUFeHP1",
  "key39": "2goeSB2czrFQ4GtJxPktfFRR3P1JQKfwVsFh1qShVKYW7irizd4sSxn5XSyFT6GP2VsBUNApVeVkdx6AodEJtmbw",
  "key40": "NwGEAZrz5T28CipVSxLnYAi9JnnPtx5CPuzH8H2aJcjQn7GMF5gdSxGX5Ujf6BnqURockujU7vhYSCfW52BRdFj",
  "key41": "nDhBezLXXV34JMg4iTTqETNuUVXVasiRSkGp9Dv5jfFi2ouzQDaTdm2crqKjPjsP5GijvzjCxQaFRWkWb6CBuKT",
  "key42": "4jD5EFdbhoEUGB7Ta7EWqqGmKNS8Wi4ua8TfVpzgxJF9shyratZDg5R5PQo2KXSXUJBRZ6A2f2xLkLsqzUTk94MR",
  "key43": "ptoa31cJSnd5eUVqH4iMy4udAqdC4yPzgSGicewBwA9RxYge1DQMsiW2PWkXTRBPLcmENH81Zma56uKFe9D8V4Q",
  "key44": "2QbaQf6jNFH9oyw8MDBY5NotJvybXJMs2Bj19a41wbjwLqyYVkr6gAb7FMu128KxQNDRF3Jsyzt1BfSWaqspfW3J",
  "key45": "2tquGZWNGxPL1ysd74EnETUGNP55w4MMqhZaGWEA8n4U4TgVzNSXBWR6JqTuagvAWie279B4M5uMphJkCqxTj8F7",
  "key46": "4Gwx2nVVDHupeqhk4jwQYkqE5sWf1V79rRGLtTMihLKesRAdCzhEgjRAKEEYnn4NDqWjhjDcMAUWgxpEkdqtftjo",
  "key47": "5bEN6LxFRndFFtCfdwVFjxQL99PzoPVn2cN4hipkHhyMgrQJmJFuyLNraqY9vyMJq1bgiK8QjNq6kVmj75vkNpkV",
  "key48": "5Vm4wBQvZrykubSoqyL282hTTRtYmnYpKwaKpBYXESkpdyRLZD6bkDjkqzSA7T3qDVxPB1vX1Xiwfixd32wDseME",
  "key49": "fu1V2MJU9RMq8GzaPL2BeDJDKuY77wVDEozg3bz3nPncB3bdvv8BSMqwGrtsvjyee1iooqbt5miGQTNkCcvnKen"
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
