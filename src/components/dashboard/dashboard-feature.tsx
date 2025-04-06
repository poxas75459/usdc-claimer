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
    "hA6cc8B9kd1mvpoXxneoaT3kVxUKgfnzVJs6AEAwWqTnqvmUcLmX5Z9iD24N15kNb4LQZMK9MT1HBra1d1pjACK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XXhhhPcwwLme1wCMxaf67UEaUoapNmdjKktFFhbj4odB7474rASXXV7WHLaAPcYYkf7igNrP9xptg5mMQdokbR",
  "key1": "2cdmqssohzqKomqFNjhUgGUwDbiSK2AHhCtKqFAvWZSbuwsMrq8Q9XFkKnozVdyBzrCFyQ71UpBvfijM2yY1kAM2",
  "key2": "3fyDAwE4wKqy9ZVib88siydbLorW85pZGJiq8cx7LZX9bXY2kJ4pzCjBHYMFR8dyNxS9f9NtkKWtfwDKzgKrjzGg",
  "key3": "4Zu7ESBhfnpAoSekaJPhS2PJ8TRty1xeJZ7fUWV8FNNK5bsC28f5mh1osrfiMTMYDKZa976ZYvjkddBK9qDHe8YE",
  "key4": "42BUhsiuiQtd9zh7GymuD5GuzsHjwzxFCSCqvokyCpXQeYMSL2rjAqR8KB4i7ao23UzXMNaZ6ovfNCjRAtmsaRa",
  "key5": "3MPFaYoo41FX1n1xSs6PzMx8tkXBkzW1jZHEkoDfQnA8REmf8vXTLVhuSHhsh6T1wWFNt7iBCooNF5agHNiDEM8z",
  "key6": "5bj3nUKpMiUZ8AN6rv5JSYuSf4QNZ8pNXJKibJKvShPqKXJt3EHRvjS2fXgLNWhZM4cyuWtt5iRq4qLbancY8y86",
  "key7": "4rQaMw2G2HcKLvZpHFG92zJQi69u23jXt45hMYxePiN23Mj6DPqDwUo5unzgZp8ftaGYAwG7Q8vLoxkcPGZECwXo",
  "key8": "56YGU5V8162BkGEdrpy294LBHLKfRsmyBpq2BH2QypQGf6LJvyP2tuMmjitmL9v6Lyr7tjGjehQ7VeVK35CK4Py9",
  "key9": "DBoZPnS15Jt1i1UeC4ZYxZFRji2JDPRZTifhBRY19hezgMGN3n3HJK7VsoWnuEUy6apXd4L8qTfxGyEbrj7dvDe",
  "key10": "3TdmBxdjVvFFrJpDknPNieAaxPEDF1bW6axzd7AsDsFuPvtmKM7A6otFQZQZESc2LCkAE41AuTKUyrX3gQvLusND",
  "key11": "3BysWzJhFvnABPzYeqXmbJjYQzm94Le4TbM6dqGKMM7n2z7DwKVVpPmSUTgNxZtqTrEBcW9m4jGdfyWPSd41tMmi",
  "key12": "3ivZbE8jnner4bhpr2p7LVzQZp7Hhms9BafF8ZCSgsi6njTNNiEqrreDCYTkGwkZ62eM7VeJb3oAdj3TkMhGgPKj",
  "key13": "q5gwGAfXVv78XeQhsYhvsmw6Mh1waFT1FKEqFM1maHSSvTXarZf6S18tW3tJztJoYUVNX7TMQ7TVpjU59JgBxHp",
  "key14": "4fs1LxK4DqXzqHNmfdMAQeynWRiZU7V6ZEtzc7eVvXFeTMT4nBAuvp9MnSAFQ1gWN3iDNjd2bKPsGDdm8jdxrhqA",
  "key15": "2e5kMbwGqzKqoU29hBKj73zMvRJMQbzcmN4aKZVVQA3RJFsyhrDgEQnNLKLVuXySn2PNMCypy1zBzLfJBhmTw8Kc",
  "key16": "4aVnDUxT86CQ2kpC9cCWoL7BQfWG9yoh8FwR1h3tuLVvJtkJnP1QLUvzBn8EXhKdFRfxDeudNmAvwdKxH6CrAa6d",
  "key17": "3po6XkS5S8qdQv4F71hJcLfadpRwzESbZWTdfqLagzLK2RVqUg5tkes2NNYu2U7Po3Vy6wBmMFP5Q3E86w57xYfx",
  "key18": "ah5nhVgb7WjJN3rTfa3iebNBoU3anccLR8ZoWM2f5PukCtxDgf1comrtr7cAaq2ugUovquUDVPYi2uyhVbmXNCe",
  "key19": "3ybMvfdPChZAZ5KDJZgpNGi1f2Qn9Ka9G8iYEpYzf9re1827Zx5n1r7VPvgwfG8g6ZxVxsKzCZxLqHQmA9zbebpp",
  "key20": "4pPdz6jypH4L4kHM9sJkKH2srdodxxqPL2EDtYjij5JeHRovxGSupTjRFmpGmdkL6bWg5y6rtYxzJ1JaGBC8FQpF",
  "key21": "5yvmLww5hwEidyDQ77aYnvHxXuGpgL5oQA7xoToTcwMx21vi67R9wUjFdT8h3FD3zd97Va7PjHniLukq6cnzvVc3",
  "key22": "3KwVH73kN4hkrUE4qtGh5VnzTo8Q7A517RraEbRPFA58VDw5TXbbb6WEzYTAnFbfchvgmkGRTwq94QBVhcJ5kexm",
  "key23": "2mkTiYi8a4WSGBvMHgQC9itHBuSpsmPFsJqKpVKnaoXBjTxdvaDrfA5zqD2Y54uU2ye7jR1nPgcpopQbi1qcMDha",
  "key24": "2RRs8rgfZRtXccnFCATe5PggmxhNE3NPz53FdVs8yGMgTb9ixUa1ZEAL1oameR6yuVTTXfoKdH34BHxANtWqSffa",
  "key25": "Mut5hq5HVcAVeJQxtMryUYMVNu2NQX35pgzuGhLjHQ8zDtLcYKmrGXmRR4vr5gG3y98FXFfbJVc1ZG1mTkVNeFR",
  "key26": "3vJroKfxM92EQpiosRHVj38aBsWUGSRNPxtva2tpaP94JqSK81xqA2oJhkSLBze5NQfZfirUGjDr2mrHa7ySYATj",
  "key27": "4DWEYDKFZLxa4apcGjNyG1ZbzqADTJD6TeouyNKysSKgXV28bKeUW449XK4ZLEDdQ14eqfc7v1ecXrRjqKFX5Vsk",
  "key28": "4yt8Rp84Y7rg33Eunvgp4ty6Y7UYjBWGYpxA8NnHXNcX7b2j6r53gn41eZvJmz6c65R4gDSNzaYMPRug3XmoHrqg",
  "key29": "5FCwdRah7kTuSKvt2zebkJiEYRGqorfKfjCKgT9WM4MNj8L9T7GmYYPdezjLAj56qDGB1dauJ4AJU8Fpppn4MdsM",
  "key30": "3aH6Yft2duwUpmdnfTVjwpcAf1p3YuQQWqNEmoF7yGDHwj5LcDGcGwHKhLUWqgwhC64aMjt7BxFqufdRVJxg7XC8",
  "key31": "23MQ7sTN5GYZJX8Ah5KBLm3d7wdLGrDRmVTB79U6ZhqWTFBqiEAoa6rWQR6FWphXyCzjD97G5vfQxzZQK8Vk8eLo",
  "key32": "3Cv9PQdfySLHSFRU68QbnKb2NAYQSzV7ur5kaKfthdwoBH3ywyPmUL92ef3su4wPReGN9fFM5oV49iEe5Cg8tsKW",
  "key33": "3ZWcdcUVdqnwEgKEYSui5kMXeozUhoKVAopj2pzgRGy6TQCHncpkq5XrUJxAeGa2bTpJWzf2yUrK3ZYgYcdtXDan",
  "key34": "RxVm4LPjWxi1L6eGTnFJuGnTLqccBeacMoULCN3WV8F62mDqASyd6L6iRFnqbpSaTxRFvauJL3MeAXBUV1bDKAa",
  "key35": "5EErj8JbiQtcUXyaUSGN2e6tRrjgxcPioTgYPAYSXqbUPXixd7HiXhMzzjJnQrKv76UidBTqUeGkGyEsbhqG8rAr",
  "key36": "3Ad4LS4n2XGDT93q7MsXV4cee8p6hMT1ZMgXf41G5hEwJESKPEoavdC5BHm1q7ckA27yXKfRGsPXxyT8dpXX6PUW",
  "key37": "4RLfjX5TY3RSiAc1YhA3enKQSa5MjX3oMsoQ7SK4zz6P1z1doL4K6PzKJP25XgUpCAaGaint4SjZi5AmTzQvMTcb",
  "key38": "4Wc6MjaqKRptMtiJ1hPahNPRFnbi5wf8ZaAZDvSzdcb4jzsFTKQVAH1uagnq8mjG24ZgfEQnFd49G1Bnzk2mdemp",
  "key39": "QEmVeBj8bxum4fYKVvsp1r9BmdsYdVYaprY9upd9BgTq8Won8uzpFYZYu6qdERDFFGEmE1wGhUPCZi2zxk6xfyJ",
  "key40": "cKKNX3TjFYpJ5Z55i4JjhqvmVJn9ZGg2LkrmCzSBErVLDjwAaukyVAGXKn1nneUdzA8L4dazVqjpTo25ybjDrSn",
  "key41": "YfZRzWK6NaBhWSpeUa4ZBcywnTaKB9Mrsvf7NCLrz8uHqD85m7xKRp84rXyGVqHFsuXEip65nhYVRE3gYnKNWVc",
  "key42": "51d62D23zECX5whJ7WXSEyTy9VyF27yX6dM1VxZKrQqnYGd74tJdg3tfJC4tZivnm9XQBhRrnspAew4WpRWxsGBu",
  "key43": "dD9aSXb6TmzxuE8cLAo2Arqq3NTVP7SjnNHpZWwTC6g1qchwxMCFzgzyQHxn9KwaR7CwMKEwbnQAzqatKf7fwHo",
  "key44": "5XuVZLke4VjtxDXQmRuTep2GbSAGzQbHjoT5JH9YAmdgWkPDgrP7KpJ4Jd2ERd9jcUC6zWp3P65GQVs8TDFhDETh",
  "key45": "2FnnGnbqt6FET861HALdML4dNbNNHg4eK9svNcGqLFC3r6LcGGfgX9LrpdhsBkttVFMiz3vddb8F7R3jK7fndAQQ"
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
