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
    "231EazchHeJV7t3EK3uVH8RnDo9JneCCfGYMg55kCE8va4vZgCz9jY2wGZog32Q8pHw86rZQNcAA2phmaB7k96h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MEWq8LcstAEwVyB6tCiEEaNregvVAaPxHASbfDUtXVVrxHgcuExjRcnPXDPtVpgmjkW89iPEqjXWFDfftErotyn",
  "key1": "5SUGLcrDjUQmqz12kE9sV9X9aFSBD2ziyYnWLcVKZYuQN6U4u8NGjGJi7pDjrUFXKcUWUaa88Dnpg1figAQUrExV",
  "key2": "5X8pyWvJ8krpoJRFrSdHx3gqxdmMr3P3Asjso9iDDC89oMwtgHcey5WmcL9cRRxAH6Aw2BQjtKjz66uBJAPKsbdK",
  "key3": "5chGNHamcAQ35GxoyFuu11ubYNjNDB5VUZ87WmquQHMeDWiXpiyJ3xetenJSpKN7jcPNgTb8dMaZSvwFHrmeAc2x",
  "key4": "5Q8sYZDp8jQ1pHcN4Naynw7L89P1X4VwPdwrGc4GoS69gnQKzeTgR3M3BQY5AQgjnGtM7jyFQneVGURrYXdv8XD5",
  "key5": "rrbnRiXcWu9WbwkfifABSXXkqrK4vuYzjtinq5oJMjMo6h8ZsrRaDNqpGpbRb2VeW4CBC62swEsbeC9HABwWoYE",
  "key6": "gnk1kR5Gz8rfCRayLEhd5SfBvHouvFj9ccLcYC4xFGxqiSETXGdepxcQugHThoRFujtstZzkgVsyNzNVq1tFpk4",
  "key7": "2oCaWU1NsnTQUSkrwo2ehu4PpBMNn6hwALGuotDPcNH1BS3JRbKfCvAkT4ThaLXwjbKC5NyJEE1TqDvW8CwAZTFi",
  "key8": "2GVCuvyJjuLRN9pGWYqBoQRCGAwvBqtk8mcZQb4JQwNJZnbg7u2uFm15uEbYCf2jJRaBsbqpb9gg2ihWVhPeuf95",
  "key9": "36y11C38qey9kxTdUGg5R5CTRjAhgVdY5prUXj2dTKN46pQQD7dNuXERRuM53EkMXxiLbYYjXZYwh1AVcHFGtLqH",
  "key10": "JdBQCMA2cgYDAdo2Wx1HJARxjwvmGDqryW5oVjQYzL3r5MvAP4gCRdMUtBHrMyt7TjnKyYi6Q65TtnRdwLxT28b",
  "key11": "3mAZs5M7kybkwyjUESk5bm3k5LUKGKWoxzPHzvkgRFJZ2PGSJJVi3iMKkDUNZfH1hfHamK6nkXABnU2XZSm27FiB",
  "key12": "61N9J38S4SMKfNuA5kCUgsugryCbwQVg7naYoefz3e9afo1ZCcDug9EjJUKpXSXQbd3b2mkpoagRrKavusY9cgzJ",
  "key13": "3eqjfdLAmm69uEXPdg41gP9ZiuPBMLj97K8tDWJwUxYJCFFp79ERDmGhqU7z28Rq7VsKCE4NjCNqyKLyBtfNnM1F",
  "key14": "4ekNoUmf4Mu6m7TBNJWykyVMqU4ksNkS2f8koyh7NphoivoadTvQ1WknaWitVFyKBaEEMCFa5VxAXUzzZFVYgU3q",
  "key15": "5awmH4xNTaDpsC4LmhKpcbTqMSz77wWqrYodEuwGwxo5e5McNjN6WHi5Nv3iJqsADAQfML5qsFYwMkC3UbnxE23c",
  "key16": "3Cs18jsEsfm3Q1Yivk6MfKaX4THYcJF1kURF3SW9VGyjU4gNu9xvq6LeUJiCcawowEomr59Wbyaqa1r3ZrEk8BCx",
  "key17": "8JaFGYGJWq6RPAWxMoyHcArQXN7E9SsxNmi6gJ7TvLfAzsVUATKVA2JpgCbs4JmArnvJwLY46k6pDjirtgRmTyF",
  "key18": "5kZF9zwTSLPkpRQpZRenKn4DwsgfG7b2UP2LFJVHQMqMneR6ydaJ3xMuHRxUBvKwYWtjmobBZSZid9zX8QrRkiuo",
  "key19": "33QezBCnBqtfhd3mLu9Nynt9HCKPMwiFQ7eE43BKTrcqNmPavXpB9EPcARtGAXyS67qmBEsuzwzvPDmPJczSEmPc",
  "key20": "592GLixmtMrhAowZ3NRnyMFHJmqMouSzwdmirgY4JBD34CZo2oRhQpQCiGToWCVxs8QpQ6R7gSMxQxPigNYPuQWp",
  "key21": "4Q9ZbWLLUBCLLuXJto245ueebxnYnRgFFZFJTLCEnJrfRzjpkDhg4n8u1sGTbg3yxk39dEbtJnYL4HU5meATwcjG",
  "key22": "B31bEU3p5uvWaP9Wyyo7NQPPQKdhkSPw9LGzUTEU9G2dEmueusrQSNqNY4QBhGmv7DHoN2sE1BgJwVtbrun6KuP",
  "key23": "8zeMb3vmYsTsPkv96m2kgWLJWoCQEszVeZTpKYdPmzQ1LWxnFHiQySiLWJHUzh9CM1kofykDXDZ4EeFQorigfp9",
  "key24": "34cqAQpBfEpMn2YqW1pPuvdkcVyAvtP6Yn4h7LJP8CRhke3v4qwyNzhd8saNMTwEx2WQyzHTJfn2J3pyJaPum9qo",
  "key25": "2VsDCT5py26GNxusSCnPBmamuN8k8KSpx2qYRRFWsk3W2GM7pcHigESuhGu14cNckgxa155BZ5t2acahpej9V9W4",
  "key26": "5mzX6Qv8aBs1xxhSTHi7p9xi9rnXsSzT19qMVFjzCxkFfvRGAd2FoLjRddiSeHqYNWTCmRitrWQF7r8Bc7QEwgoe",
  "key27": "4m6wjgEsDVU2FGySuPQgFcJors9zCt6MVScqYpnVfbTpqvmhJ1wh2Pe8m7i6Zv7FtP13Bi7HBXujfVYkTeyfEGVk",
  "key28": "3pESXMCnYPEgQXx4y1Md6GGvroMmaQvdHu9RhiKiP6zxeEshJueBqRSoC7kRkYUzTUZJjufji5CGhjUwvcZQNnVT",
  "key29": "3Gimc9FFKEHZzCU5YtLd14LerHVfq8yb3sjnLyX9PqJZASwpZDfpqagZja3erGBCVdoHt5EJY6Wty5z8TELVAUcH",
  "key30": "rEit6pB9PCMg6jvxVnXnBm8J7zDGGsiYQFVkRLuTTp1JVY8zJuuZmHEVAVhSGgQjvxsCPmHK3sLSfaFerh7MnLo",
  "key31": "36NwBNMRhxVVK9kTfvh6kdjGC2rGk8ECrqEHwiQj8d9pqSFoWU2WTkucFCQpvaJs77kiNpFTg24ymWxGumN8Fd2U",
  "key32": "hnMvE7P4EaPauFr1jfmumRi2Upc5YQMi23eW5RzRQ7vMJgvgM3r8oLX8oB9edpVAoFPp2KHjGMNc5qepJuq7r7P",
  "key33": "5xr2QbLARziKhn5HbQwN491ToC8TomHKFvcws8dknK58VyYNDsnCsPsSU2QEWgoJ5wWsPfSypztJ387aAP1TpGhB",
  "key34": "i4dmFynXb3EB1rab34K6W3pq96Kr7A2miS9nMsnsZn7YyA4hku2uEvtAXZVN62SSpTo14RZ8WjYFNvy9de9qKi6",
  "key35": "nU8MxsKCbM8jrwkwA9YQDBKm64zBKyYAJpVU4wkRAb3hD8TdkRXyVuABrM9jZvyfbAp68VCYEt4nkbxAnD42Nym",
  "key36": "DbgTtXbDW2tenWLos7gNoT1MtyvdSKyjUzDWNyRanh7UTE2iQgMvrYCrJTdJdYQsTeaH7KWCLdJRkgkuZNZEczT",
  "key37": "5TodVegGHdEKRQ3YHgP458NChu8eyLjDWkghwxZeFUtsk7P6JdUfbiQ7jLtCbBB96mtgHBWPCMktZtNSzZhpYD4o",
  "key38": "2GbzvKJJmmWehCJ6fL55xXem958mUbQJZd54BT52oqQdyT4e8eCFchnkAqQKWgbS7TxMSmzGj8Uj5usaijzP2bbP",
  "key39": "2cXvHwCbGQTg3Um1qjp1kDUSca788GEBpwuXbjfzCkKpzeLp1GJcfB9ePmKqLcaGxj2c5j3qRYyeYS9aLFYzyz3F",
  "key40": "41e8iB8HVB3mFSWp7nzdzM5KPFUFTxZa6RR9QG1WrvyRQLwCcdViVVsq6UGubu9AGrkmyDabDSMBMNWP84zeguAo",
  "key41": "5jKnx1ewmDKXGVv8c3WaAkR2pYiQHdjSi2HiH91VEzQ3ACpfZFnM7RfnpjqMUxpPf57AB65aKJZpBAJgJJ43ctVD",
  "key42": "4RHyWyoZJP16RUhuZVi1Bs2T3NaGkwdofjqF2KhEDzGEycQqg3vF4e9EqRFYGEQyeuLjyAFLReQPNX3e1UzuxkPe"
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
