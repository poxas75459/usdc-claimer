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
    "5NgahsbFaA2nAEBwaMPtS1zQ6MkjDw4zbpG6ZHaP5f2KW8UKXMD9Vg5ng6NwcvWyNMeqGoFmvZ3Q34YiNnnWQ5FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEZbFivJsK7Wysye881PRSouzxFBzrjqPWtg7KVCdgix1WQsPa7YxpZNKQ2EDSnbHhKzu1MH6mUi5LmcYHHPQJn",
  "key1": "3vVaHnHjq3NciPaoeqx1rEe2sFcEVTZV4H3N6x4G5JqxeWQoXc1RwMYd7tADa5ykhz4LBWbTbsqcrat5tHvSkZxy",
  "key2": "jUaEEQEjESi34ZHoH4EWuWn6uKTbusduMx3bMxmoiHVtLkTMgryLm3uveSUAbKpqdr4AkRUN6Q5e5VvnP8Jhcyp",
  "key3": "3xEegnoDvjLNnE4rYGQPwJHGEv3eJb4FPbPXkkkEC871Pqtzk3QRJFHi1X4vH2fUD25CJF7LhFaZoEpZAXpPBJJC",
  "key4": "5VKMVbhPJZZLrgPrhx5s7SQ6LFZ87YChUVRwYfscHLnEu2ZkGMPeQwzDioysxYLfFP6XMVoxNeAt8r1kdN9Rs8C8",
  "key5": "3anaxNsop1h6RK7eDwPmPUGpgpPEmk3WGERptYXrEfFFEagoXoLiHGZCGr94CmAZxXvsfxds2Pgjun1Fjspakj26",
  "key6": "3eP3YMWdd6JmbT5tbBykYRqDUqXe2dbHbsBCTftg6yjCX3tqncBREujM7Uxv8twKuzSJzj2WJ5KQ1NEKP7UJtekC",
  "key7": "2e8t62iJHUL1wRX6oytgbh29kHtPjbLeQ8KQewJXzzKFoM1zyUCQfNeWSKk9mGcCsTtTdrCywuYsouUy6y5Yr6XH",
  "key8": "5MLg4HemggGdKrGYgj44uNfo9P9gw85h48M3X8BAmWPRGMCSHRFdruK9sKqHKq7NvwHSR5N4VwdELv7BGbxwga1w",
  "key9": "4dzWf1zMSTqgN7N1BKnzqEmYmWoFYMrUS3keMd2drp8XrmqVsbZ8heKPjb8iEcC4rqv375xTMwC4CfLtUuNTH1NJ",
  "key10": "47keYBCyCpkGxPP4uxH49rC46Jefciub5n3F3Ynh9uWu7C1uhVZKigwZ3seDShzzG6u8zbA3iAHUxchXwS7tSJZV",
  "key11": "4aKx8dL5cZABgN94ogRDUFGnoi9oeRyf6Ye1p9NLGGUhgFJAzKFUbLgcnPWzn6PrZrZFTrCSjhWDbGWF64M3XDrY",
  "key12": "46LxEaPErzfBgZoqjHm2P2oF1RBV5vLtsryGNZb4kYdecLmbThUs8irceKeW3ixz1vMyJhZj1ivwFvJBW5HFehTw",
  "key13": "35z5Ucf94jb6DQiWuCbGhfGHgbZdauqZ8eu15Z28A2ukNUchp8g2eGpggNNPbh49gTdYAcmGdjRKdKBRAvuAu8cL",
  "key14": "En39azVV1X5dmbr8eHN1GQe9AZx7ccLZ7BxYaQQqQzHuMjQQ5oubAorHP2sSHAiUzdC8K2QMGDp4CwdRa4VPVYW",
  "key15": "21pw7DQ9Zu1H9xNrqYH7hmM46HmMhrMwfqbH9Lzo3AMVY2UC2XyPuL1Gn9KWwqdfrAX3Yp56tkr3aqEkLWrv4C25",
  "key16": "kXRrL9HzrmYg6wBcR4URzESu6baJsL7X9oC6riqqsPvuomt4jGdP9yqbsw9JtWKC1mPmaoweQGp7HbTSDRVAUps",
  "key17": "2peHBMqbdeqt9xtrtMSFdHkYQCQY6mAE8CbbP5LH6N7XhNoyCbKmy8cGHGwPpR8kU7bTE3iDG81yjQiU4fMUgWBV",
  "key18": "59V1BFZQ79fVoMEi3yodn84DHW3UT2u3UX1JtksPexbf5pQT641wVLEisTWaeu4wEeTjd4degbqhNwZh5rJ75ppC",
  "key19": "hTHFBtaUJGmTKZq3mHVyfiCwzyA2SiziLoMYzRTKtrtxSHhuT6Q2gjE4zXnzkE6QfWSRKnoyrBoSc6FjNuF3fUb",
  "key20": "2WMi8SgPTtq3B9b7SqMvTmrCnQGUXsRwR1P51VPWpZFvbhWCdSLV3LV1YjzRR2LZaHjkX1wweqc8FpZW5FnXUDeP",
  "key21": "VqrwB8691GFEnNiVfm84orHjaMrNcdShWVmqwDxDe8KJRCwDWQvoUiZ5KFG6TAP3AvRgnhb8v3LxQLr9TTbRiC5",
  "key22": "5Jb7sbBBX1ia6vYkKhb59AuCYHbzYi7VfcqciEbdHhxVC52wxjeRwdnjLT2CMRcWruxNP31iGJf9mmJFAqUixitV",
  "key23": "2saiR9nU3XMrgeBX6BWwzzt81mPXGRUHbELT39mSzM4wi8eFyUfXpr9cx2bodAphRJnFKjVMZST6d5q6puLYBTLX",
  "key24": "3jWXNo2dKKtxDYrN7zDu9rJ6NDvCKpGGdHUxy9RrnqRsDEvNSU7Lmgb4BeYzT1VJSdPq6jdGjSvyPq5JpQGcK2ZR",
  "key25": "GYGRDfz5t1tMuQcLsPK9t9hAUGyisnYy4BGxL7kUM4FsTEyrEQjLWKZDG25vzNSDQoYzX9XERB6PWEbHxEiBTWM",
  "key26": "2Hun1j1XWBNLiMvkXNM7hvoMfKuwb6Ha7hUjzjKt1FzyGn9j57BVreiEWGpDw9b6b4P22T4Xh4DEduZZQUEYCmir",
  "key27": "3XYUqk7Sn9PimJLhrzen51qofzNrAovjqZQ9V6QRgKQCQopuux4i1ZBZTXj5vud7sidd5bDgjdXxyv4wDx2aHVY1",
  "key28": "4MiBrjtqqX7YdWScD3egkUouCnMTjQs5kNfjX3MCjSxAfn3DKR8KmaKYxqXZDosfymGb67FxCVnx7fV4wYZYUEiX",
  "key29": "3qTC5urb5b6N23QfoAurPT7J9wFENBDTSWMVF6QP1rMdcyJPXr42x8EGsuxVArftgjr79yDBCErdNcL7JWwD3jDW",
  "key30": "4RHUDC3Y2WPQT4fRGPVYhahFRBRzawBJ3v7k48pedTvjoTuDLQAqxqHRZG7EjSvkqqe8yUx2fQvTetCvPTfjqibi",
  "key31": "2xmQiEMRZsy7URuiSzwUcTqFdugH1Ds95HMPeUbkEz3i1PQbgdyZKXK6apX6YD79ddapotohQu8g1xpAMpMFDjqd",
  "key32": "5T8Qrt6r5Do4yzECPSSGwEQjad66eSCRMZQbqAjCxQwduupWuR3fGt5m9yDxpUKmFwESp1pJNgAUp5ax4zQtuKRz",
  "key33": "5Hpz1QtAT2b256eNrkTpZHvxB7Q4D3farckHkPKEfmARpV59LMS74T5QKwvEt5MsMhi6KtW3nrib45DVUrWb83t5",
  "key34": "Y5vHAwqYFbiJEx6Kdg94pSxFHJAWh89o9DqPSYo98QGaeYMqRF4uLRqWsH3P2XtaCSqrjZs11LG3KVAnvgGbKqL",
  "key35": "5VkuBqmPpW9Crs2CstuFwjjChhwatJoxGkob896csAkGoi12a3v51ZxSrSLDjbuRKa5zKc3kv8wPiUSkuFc7SUAz",
  "key36": "4CFBuyfTkVvGvvJWAzxVKPvYhm9PYCh9gcCGjYeHcHWLavQGspGa2jZqsdsW9VH5obYPnx4b22HoA8xwzVSd75Fk",
  "key37": "5kD5XCsJ9RSmT5FYmdXZNZSezuozqN46GDEK5Y6KajEG7uEps7WAye4P11NMbbqiDqibvF5aRdDdajpjH6VnWmQ8",
  "key38": "5cgrUYmx3SwZfnxgKAP5dpH8m43iY1717bSCmC2wnJbR5KSku3Yvmy3inFvYAS4aPQwcTNqC3oBL4ckVNspjbpyk",
  "key39": "324mWw5sDQ5sqjNdT1hWRFyMqqG5n3jZgnvPxETRAirYXdyT6PkJWy9tKAnjBznPT52nXis77QAsfDFJfoAQ9zwb"
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
