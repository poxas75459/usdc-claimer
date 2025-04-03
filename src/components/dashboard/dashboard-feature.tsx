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
    "5hEsFzUnn6AEcXwbZahrkH8u1W57N1vSrV2bzdgPmRzG4eTjoP71ynb3f4uwp2GXShyq8k1LvQ6JaeFv5t9vKuCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmvACV2AmTLbkwPA3tVGAC8v1DwoVpcySUJfiqt88H6PS5QPD84xqQ6BvLBAY3QDCakTyLABEyMLbXkqAaKkbGb",
  "key1": "3FwLXcsjyjuVeYGraMDmBkEozE9HuP9J7QE6afDRCtktkhkstYyNkNYFhUGJjhdV7h1QN8oySPPoGprm9vMxEQ1t",
  "key2": "3TenegZ8fg3rsZQUw65g9wocEFaPu82hqbNLmi5gRSQZzmgPdnPCFWDvaMZuNiJfw9Y8BiCHJZjMMvYJMyv89b8G",
  "key3": "s89atmLGvG656ucG4CGMTHmnpn2Yb7s13WD65tL82QeUv7eni2orKFjv9rrBHyZ54fsHpZiDuXFNXJ9QmwbMtRY",
  "key4": "4B67h513e8KgKgEgFVnbhWEgvccQXE2EwXo1Wf5b9edWgPqVxKpwt6PccQMhZCshLp1wApfVSUUVFzkPHocBJ7P4",
  "key5": "5VvxCWZWi2DWCo4PQGxYrvTKQRiDGZzrqg5US6UtwxVYK92GSH3m18LzoSh3YeBs1pp7ft32T2DpQxatrBXtzeLV",
  "key6": "2qwjjjuaWXLWu95FoUhB4FVdSRxfH9fJDD8KtjWPbn5nCzha4yuZd2r5EStMYWxDKhigvdxYvkrutNGMJWP4dHB9",
  "key7": "3mfYZZ7Z5VJZmxfXt3Qa9iiDwnowFFhWmUTucF7VE7ZA7nzajUgBHQQhCFtP2msmGYwgstHXF96mHEfaj9c3DdAi",
  "key8": "5zUTScYkbttTFPCAQsUqKD4jM6mAcsd5HHfwsvaprbLqKZfY2TzwGpRU5PWaTMaty2ApRfFt5W8Xyq3x5RARLTYH",
  "key9": "3MLBV1g3ZoS5sHGb5DcJuGnVh3sD4MWf3N2hYWZxwNCTLhs5W8w75ZFNAanV7bDES51ADrqyziV8VTdySLu8V3fD",
  "key10": "5WrEAjoCGgTHmuB72ZbyJcNEpFiKS8625PoKvMDHHDe2hx1XjsofHBR52WvXiePqfP5PU25g7ovtdTR53CXVUbeU",
  "key11": "Xu13USJaGrERf5bBX4JxVfv7TwGFHShoNN5KBoRWxziY98kphm7ZgW7TjvKcTuKSav7G1FjVjWRmu7M1jvCGTqK",
  "key12": "2MooncQaR72jo3dDdibU5SBrw7FThK9frmUXeq9d1EvW7PNpPqvqCkW9EqkysBsppbUGezXQyxLFHM5HZS7b2rCh",
  "key13": "2XdBxWPjvCcCvqfwgYzaAuDHhr1bThzsVpogQj3mg8ySsj8VMetnsZW78o4aJUAnEeCQDBCLrYVWuWMcrP9a9xEA",
  "key14": "4arZMbYvrTys6JMo49wpx4yodp5pj1Hymzv4QaYhKtvy9qPqy4yk2Fs94rp79T3rfoDHLt2kpXxA1oD55hJAJ9hb",
  "key15": "57KXdRCNiad8M2uMYsC56Wwwhd3icof79KeiMehBnsuJaqtsw8Jgc9ULsYXaBW4CzGDvUgad1nwx9L1ZckJ22Dsy",
  "key16": "27rjD9GouBpq1LWvxRNri2VHp8xw5XiGAkK7edKVwFPsSESXAb9w4UKhQJ1RhcWHhGnzyr6mxnwKMgAvZnPCdT3h",
  "key17": "5W1J7J8SeCtmj8XyRvWHFLA3WSVP8ZJs5fQJZheBzDXFgT3KsyGHowpBnNRjzaey6MQCAy6mFrjz4uUBwvCQSoRr",
  "key18": "59RM1rB6i6iKXVt48FAr347UPbB4HL8afjdi6YfNG78LFmX3HL5QS3k61JzqzqDsKp3YV4aWiPumHqixnRgmR89n",
  "key19": "4rEM3hJ3z1iYW35JXP8ddLrugwxfnLX54ndxVCCnYoWjyRTgCnuBxvB3BQLp3aqadx1Z3gRigDdkHp9CvkByTnwx",
  "key20": "23KXR8w8uD21znjerGCBhFxK6ZXtKHt2XbbbuzHWVPgAqeVhAcZYn6BNNt5XsC9XmKeBiYmGRZ5SwYTA5FJYPAvF",
  "key21": "5TP8bLYmdoyL2nyzpB98XLeZQBVEfp1oKJv7PC6w2ZH8FFPy5UKcrFc9TyzC5MufWzSEDotgVrM9fzodnMzMQ8Ra",
  "key22": "3YMFWffE6vs9RCMQ29UwBuaSDuXA3PxqCdPENGkXsq1fSE1LHoVEAuR1kFo5r3hiWp5vru2usoyCptCGXTzWFcDD",
  "key23": "FJJ3CzHW8n9U5nACA6eYjR7cCuK4geVB3QeZBYSLpo2Lxc37QgVxRW8td8iVBJGn7F4j3VUJYYWVmVpJmnoABde",
  "key24": "FRdaPHv4ZZfYk4cfE7t8cWnjuLx4xw6y68Ka54zziRspNnRg3uywTzRw5T5KrMkFUytLwLepyPmdYzDmVZFC34i",
  "key25": "5dKtSQfqyzv6B5MeFVk9QRBEH9D8vdLxQKTd7MxF1bertqUL1acfi5kDznMZTrzppJXxR4iYq2nQtRaME4QkC8aQ",
  "key26": "5AQ7JUvRpsaMRH2LAHvNTjjffPXk3DLLS9G9B7SEYrmyDymsHcDbr2LpFgsEPuhV2JticbpJrnAn6KRKTt8Kt6v2",
  "key27": "jNGkQ8QKGhxYfGA7VgtEfaugxmRH6FrucpjT2nao6x7g6EbHUZhpec9FHWF3MWTa8TWUCKk15xKtBFnr687Mf8Y",
  "key28": "58wpaukfQ2fXJcYh2W1RRqANs4YoXD2mufV9L2eHDs5aer6bweqQfZDB2Lym6NLtzbHz1WYvk7b9cduBDQMyGGRQ",
  "key29": "5m1JegLZiJrNacZzAXeue9D5qPjFcr2fLEB419oFcR2tSDgwVygEesiDV7swcqkfzyvHrtn8V5HX8pj3T8ifU5RP",
  "key30": "5JhBQWD7ff2sahrYBt6cRcqpB8NArwpDUNUP8QfsCSSmE9Wv9aPdgsBnFHe96vVsoYRSCygbXqscoSQN6dFnA6sy",
  "key31": "5RXfP4Rfjy95EF2ZKuWGWrynVpnHUwShM7H4yXqnSkScbfiLrKSHaS1r6kKtDt7cnrs6SjaRSuxsWbYpnG7MAsyN",
  "key32": "3LQ5UKaCHJpzYQZwdexLmmKts2yEdqKvknCBktgTyWYWrVur9xVMNGek4xXAyBiVvxzS29bzfsNtsjQ2mfSDG2Sm",
  "key33": "DmwpvDsq9pKNFCsNy8vVrbn3UHjcEZChweQoZ4CJbzhjAPVPYZkrMGnMSmM5B5vhNR7KppuabUEQh5qcArrt1r7",
  "key34": "543XE3BtgnUPfAzYHNindAg595xor57oG847A44jMiuzCY7WGzaTtsupTg6BgHtWKbuLoSW4uUUn4x9sYf31jFkj",
  "key35": "be4rCQXTvZ8iWDuJYeAbEFF1t6Re4nEpKftArsxQYYitcMr3TY99VXTp6RBRGHwNgR8RNPnD3aDtdr1KFfHH9jb",
  "key36": "4KxiMLazNDHdR8jfh3WLrVj4ypvhWoP3VB4TxZpPbhTXdXNAKh8j5TUC7ADCio6sKh6QBFrZe8kf56SdbLg4jPSc",
  "key37": "63enbiLZdGdz6Bs5YeiiF9w3hFdtwgF4FJkWvdeW9fenn7Q26xAQu9y7Rqdz4MYnSFzptbPxnbSBHkp5wzNCCzUU",
  "key38": "4YVnuAHxNV9gjeTZ3P4Nmz7gxWgHPP7KAinozK4i9pbC1MLwUfKGts7Y5KrxCvkWqUeGDf8oLGbYFBrFNxkUoUcS",
  "key39": "3UXui48bSLhBQVvQTNoaqXVQ4kmKxc6o8fydNj4gn6vFVbeg5CzC6HfTqVdWGFdU2Wnr2KQec3Y32TQSVJAeCxDc",
  "key40": "4iDMb9v4KMXzowHA364rV1MKQkYZ8V6ZY2ULPZ9QoMZKipZpxoSYginYosMGrUxeTUfMxMBhbt9jwcLUNky6GBv1",
  "key41": "2xGcK3EYqMssvcz6u78KcCdGaRbBFZ2qJQP7vPNRoxYZBDnorb9yBDxDMKAcRJuYJeELD7CxSP4Dwe2Ed4tYJRUB",
  "key42": "2r76wGhZpyQe6sRAAdAFwdEuhBRLg7bH5GBgt3HGdksJ91wS9Vbca84AcHTVWTUutS9ZjTg2W6xfd65KATzyg8of",
  "key43": "tgKkyM2yZp1YLgep7V23uByMXriqDwa3fv5nYfP8zFVw442jQH4XsSVamwD5y9BTfZe4KDGg8bBJBwVmDGSpJ29",
  "key44": "5Eca9yZCFpzPKWWudqHax5PbWhwahEfnMum11kJeG52DtXwF8aBj3BbYJPVtNEkqhprx3oggGioYaKDcNPe7xWhw"
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
