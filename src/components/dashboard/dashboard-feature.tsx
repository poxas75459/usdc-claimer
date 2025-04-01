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
    "3Q5pbgDzDErWdTgMhEj4Bv4JcrQbxLtH8wDaZowmFyX7T9Rxcem3WmAfrtEfYZ9ogngN8p2rET6CFPXBjnYZ99nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSyYJtFyaTbLttBrrxmGXiYWNjDAxNBMVfhomjGuLhHFPy7ZkjJmEKkc8mFfDzzSQoFBiHyMhMUnjuzLNeJpsHw",
  "key1": "Nhsvp3qATNspvWCieeTwjXNb4xMmiLE4DAoBkbX47Dk2Kf5wLEKYXxHkqC851J6wENnrJ1fkYUL4jGEWYopKjub",
  "key2": "3NgUemgAqzJLMVUtDMkauwp1qXvoDPQRrrZw9hJ9yDcJvSYoJoe8Xg2uvtiSNj7bhaidQ5x4ZScgW1AAmE9yx7jX",
  "key3": "3yhwCcPe6qU1hxBxdsF1KiPembfTDtv1mDvhXzjWgNMyHjpqFqXefMWDr8WZ71C2bopaPSXX3jSQRzDKmhDvHFiH",
  "key4": "2SAeJM2M6DpKBauieYi1q9pyuAjFzH6NsQf7wJzpKeUdFJgDx7Py9hrykbahZRgoQagf9sDPuuMoWiRStivZQbov",
  "key5": "37KwLgNzxuyEs1h1NsVp1aTpRymzJiH4RcAUsgfev5pfUJapyfTw5728BXcAsn2nmUza3YQLLX4pRt8G6Djrfe8J",
  "key6": "3en5LbSQL32Tpst8gux4xnssfQQTiAyfCtEuYps3GeED2hsqSixpZYrFSTMAUNcYDj6oqLi1KPcdPpuX7N2AfXs1",
  "key7": "2PsUXEqvfzidhXWqfP79aKEKx67xftoD1h8NyWxvwFLiX6uUUVLrCSZUg6ZyPnsqJfT3jAzG8ivhMfqqgCNRfKAg",
  "key8": "2hkFm7oPgGByu7HSFKDm6mM4u5uNYJ5i95a344G9D3NSWT8GeuGoQTSx2iro625Qgfh6tATXzHubMjANfJytRsHH",
  "key9": "2M3ZTFmXxnb7eybyvTmWm3jEGPgLEsGHZ3SDnLsqff3nfe6qubVtkJWGNSwLrBcd5CkyaWE895o36TocVK98F8bZ",
  "key10": "5ZXoVQHb5Ub4wiB7kwhax2eHbg7e32CmrGPVhVSANpjjN4enf6fWkCQfojx8HSoEyisdMi4N9TubABXpdKuw5Vuz",
  "key11": "37RjPhsZbrXuViiED6ySLRcHgujybHUyqMUzrcEi88j8xuWhfkijYehH6M8mbbuZCJcdbtVTjHd87TomuxBf4dbn",
  "key12": "5sFRiUT5gsTVNDDL1Ezsp1bacNqjA1ZfW3PgC4TkkjRdUhkXnqQbdTXtGBiANGkEjoYyW5dSogJym4ZaFFKQzMsK",
  "key13": "5mUczvt8V3uFJroWf9s3nxxGeThu2Y4iTX2hZvRBp2q8VZ4UM8etd9ianAhPkNsVSwypB4tCNA8jcQxANJTSLhJy",
  "key14": "uZ5dJQn75SmZnRW3Es6YhmfHpVuT6cRuz2ys3R3RNJ2627zycWWSK3cSdQkxskvB21QqMFchkJK5FxRXpDU8wsu",
  "key15": "3hnh6uYvH11fXCkwNdRFxXrqk74EWkm7xSqYu7AtfLMwnBUhW1xi6XSumsTMeYeVs1KNyneZX7PvKs3GHaEWi6Vz",
  "key16": "EbwJiat7KkaErytCz2VRezgLYyzh3P8oRG7khc7FdfYnru8cYRfCLnYXqt2auc2UMUtRNgtPAor4PkLd7ZN9gvs",
  "key17": "ugZEFwCDAkvTwbUCy3wSoVHW5YvVgNWwpq9S8y6ooAvD5zYxUxSRdrSDL24curUYfLsuQEDqgJ3HxNTPRfoNbAf",
  "key18": "5annAfom2nv2UwBHrtgF9aQpcgMSrYUCSpQ36aLCqKkJCQRN56AzdXBx3AmdRvHnooKMNEEZR1MgkxN9KvgsGhMJ",
  "key19": "3TxcTVUwTj1cTpjTUUSRKasScPqmKXdnSwoq9ZMnAo7cxid2ofTGfWcxuaNUgDkdgR5HqZLEVA9EwcWYhSnxHQvU",
  "key20": "3DGKUbVxzBLmjqNpFT4p1rEQvacBptuygFD9R6bNgswCSajrbhTpNwiheL8uSZCWoKhnBmkNGrt8icJGA4BcMEcg",
  "key21": "KvT2wDFRTnccXeT85ZrEq8xhXZp9y11y1b8vBpY85P8UHSHENVWkpXr6T2qsWZVH3zABYrn6ByDYzZMq1ETfCyu",
  "key22": "27vyqNHHnhFfJhUHKiENmSHaBnGXb8CXQzweN7mcNJN7mJ1fDRDEoUoUqYv53jtutgFhUSqnZsmMNwCBZSj1AfJU",
  "key23": "5w6z9xMeNGD5SL54k2DBPd3epyXW4W2Xu3asNsY6HcVYsWrGyiQq3xyaRapAg5R6x2TgeKGy7fWX5Lu8G2ev5rfs",
  "key24": "359EasQ7mjhGaZQrhT1aNJ6tJYSsjcjtEhrJurRKu3F1LrjFvfN3wiQbMai2Whs5LtRu5TxAhZd5xLDoAFPiEmpa",
  "key25": "4LxoHPuwyoC86YZttS3QjHuCPUsnCd4CwaePvFDTWtbPv79HSVxb46HKYv9cJ3sM2mDH2QTgRUk48DDTSnoie3cj",
  "key26": "2ExGivoMv38fa6jYdR4oVigbBGFQmmJBv2BjJ2ZZn6HYtTcjP51o6Hqfo9zqzUKWF9iUUeZD9TdxXviZvN2Uf8NG",
  "key27": "kDYyWr1vbAcmwDL4ujMK8qmyr9ojepgjpAzVec7avLZ3C69JCqZaNM5659q3Zdn7R2DRCvyA2qaJt8kZ3JiEm1K",
  "key28": "2FyfWodMyLwxHtLjVsTb6Rx27fBdY2ZzkZHk3f9uuJLPKzP494diWeaitjsweizhCNuvZ1FiErfK9cZaourJuxyr",
  "key29": "3JgHevcVWNomzki7wAhNLnwrnZMKbv7oh4bMqiABFTr5oijKbmRSyWQLtUmJ6qhd36QLos8jSwDaCGSYscKecUKE",
  "key30": "4ZWkHmZUXUg3SnJf8gToaATsABCwwniS22NdzTJ7Fxmqnf7qtdZSyQGjsbRDMMx1yqEj24YHEND58TSvVAhBn7xg",
  "key31": "66kSTk4vxDHsL2C2bymEYfNJ6AHsKBfz32LiT89P1VSh8BqUwx52crJ2isGUWXCaZayvvKHFRE7c9Ccruc15mKTE",
  "key32": "37tXnXQyLXsC2geEuyPfRrgmSF4qdb4su9akJPNrQTS8ttZbfsHgjeMEfjwhNdx497rghbeB9UgLW2VgArTBJjkA",
  "key33": "91Q3FmMzMCAEeZTPoAtu7yRmo65oz6n1eUQNnSm8Se2mKNdtF347FkDpPJaGygzKgt9PLragR6VgsxMLxcGjuzc",
  "key34": "2nsdGNKq8Er4xRBBhbygxNJZURY28oMrHHeW96f5EgEcFEvzno78vXrKgLkTiu28cGfR9rCg7rfXAyRSSpKTTrbM",
  "key35": "4ebr9qu49dP44dGs79JYeXZKxCtKqtdwoREw1xzHKCwzyXAXnuexXAiXGJdehtWQL7hGHRih6osXQxsbvayCW6sB",
  "key36": "Lj6WKRFxeHRbGf39TKjaM4J75YEKBvkXcFZ8aQjdpQEmCMscB7jddLNtgjFksL38B1Gg3eJZALChzZ2Xk5HfNzN",
  "key37": "3UvoQZFEzcQTsaAz9FesPThtWuWpg8s72AL5Fc8pBGpkT7oL6QTe8C4AKpPL4qujzkjwqetnht2sL33zJS5BeigL",
  "key38": "8RPK5db7EsdtbWvLRDyvxG9mr4rkV5tzecNs5ciMEs9N2sg5HWmZFmSGgmCyyz84m7g2XcesvMjh7fH8KTLRPnC",
  "key39": "5RSeqx77Mq9E3di2DaRzMpQpDctEYaqCmyUHJRCSx2trqyjsrtjZ7rpLzZPRzGr12wngTM9FofMRPK2aaTrUyZ4t",
  "key40": "2NEWv1S2VvSDnfEwpvqcncfobzxP651XJucVpw3CntE2coAcKiFfPv59gtMCWbiuLVXZpSQvyFDijXFEnzJAjPxy",
  "key41": "5asnrm44ekGPqPtiLCGX1QiWUVP7DwNsL1JwZC8SiLvUdFe6EtSp2yn3gxdE5g5uKVfUnqJ8Cqp7EU9nuSqqsj5j",
  "key42": "4Yu9LZ8yJuxdyzwVWtMktNNt2cFVUgzRn7ei38F86xBHmEcnCrboWeiDUcTtQaroaipoZAKSG4Qt9fZPXEAM2xk2",
  "key43": "4tNZTqhqSvjXUSBzhEvswbqPffp9Fz7t95WrdBBEdUA7zU43i8SVAoYMELBT1JbgEoTSnu7jLLA7sXHhovifaRHR",
  "key44": "3xKvaur5AFYdbmutL7hKaxirR2f6fbTANjiKAwqRJN4PwyMwRaA2skKBF5WbkXDdokxuFD18oMZLSCNtSxK728r2",
  "key45": "5V781W85E6RAVj3szXCvMq4ewzpu11roAuTQ1E52RZkm1p9iuR1ipwKhHkkPuYR3zPiwrGfF1o4q3X6xe6D9eaE5"
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
