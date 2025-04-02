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
    "4Y9wDovVEMPWuavPHGHZu9pZRnhGAYeQDjkDyRKLSoXsTYa6DZXa85CXfpkJ7Horr2h6co8YTc53xvgWhctKrLDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EttmcniHzca7v4XLvMgMvo445yQZkxCJp3y2sbuTVT7eiwoEg83JDrTxVLMMWjr3J2aXWvAEvnis9LTJocsar4H",
  "key1": "5XtXx4Uzn9mrUxG3caoBwRmoefiSwU7Tw88ub1Vv42VW8bwzq7kbYNamEBNNNy7qxooPMFn7vV7hoo3hasZyV1hE",
  "key2": "52Az2HhALExNq2R7YJofygLC4BSRzMQBiNYDagS3ZrirXdAf9Y2bCi7EYedaWcPcCHvSCMdhfgcz6gPC5gnpHHtA",
  "key3": "4uZyBUxqUX4zKMTaZHdeVYAYvxuJU68jVEwXhdPyyTQWQrXix8rcTzTt9FFbfzELWsa35yUF9UFsXtYmsuMq94G6",
  "key4": "3zXCVFZUGqkTmdsi3voXL8UmZMAkN7XgB7jYZraJ1kNH7Ey6hb73CPcRK6qQwPv7VV71ZXD8zMwc6aeJKxudafD9",
  "key5": "4pv8KKfCATDZKYChCqTAmJRUMN4bksukjSHKQneFta61Q87pes63PzriX4qCi5bfqTyQPMdkumFR4ABxpZYKPELz",
  "key6": "3oUm8BgRJNfbDtfEevvpy1jzD6w7gkxvUB5p9NAh7LNuhc81XNRUXQ8XBxPuCaFCi12GMAuMSBni4UdoXYnmMV5f",
  "key7": "6gNStiD3tsRv29TJch3k54SaSn8uaBrJsCVjWrGko8ibdvp4YgfQQjKZKct4QXNFYKVEicnW4racjiUxF7F6a3u",
  "key8": "448edGinGUEqnEEPAdsoWXiKHhtiwNdbenHX5qZwHZbaCTPtJshCoBBvFtQdevz41vMhAdC61sxT9Ntkhp6myES8",
  "key9": "mzqwfQ2UM1uibToaKGMSsto5inoJTh9MQ4Zg417ZUyrCiteMdikfFv4iwgZrP2M3RPuX6NX3YGYvAmTGRddmDwN",
  "key10": "rnbmxkQw8Bg1xi9QME4aAXhCmkZWwLzPhBderaju233HovkGaMpUJRMjMGGdZ6f7YBN7xe5G6V5UUv61C2Z5978",
  "key11": "7TvWzovWpgfUg59px4LAWHqeHjs6oXCeoYG13PkyFuSaLfjMV2jtrFUgB9TGuqW1NWuaqY6fait9n3y7CyXLks2",
  "key12": "3oQjNAKXduCRrnHJUHRdU8ewBYmXukHZ2TrwfLeb3x3y1QmwPqNPahKxwsXnrKzMiMneizSxEpiSUvK7VC8ZqQzS",
  "key13": "38RmhhrkFsjTUeMX2JQ67q3PBrNNrcLo1SoSRLzgLEzB245wNMnVubBZCWT6K5HSMBGaRyyeFYBETgd9FxCCtPaQ",
  "key14": "5QQLn7ULcFo2xvihYuk4pfQXrPdERDHpdmMBVC2B6j9ymi8u2BkML6EuZpkMK7dqgd4bPUuwJFj3doXRF7tpP6xM",
  "key15": "2NJYx4tFpnktqE4nkreFQNZb7ZhwvnpiQCwmi4WNpFsDBCYszb6aDwSUdE9RoD5E5cmDik9TJbE1LWiwrmJ2jvSr",
  "key16": "4oxfHYNvF5r4hhY6sQ5FcgrCxUcchjnbvKVv41UHZTN9iQ2E3mAfHsG2kDm6Qty55VMbLP6bw16bpM3gWsvHALcn",
  "key17": "3P8ptG4PYa5gandJL5T1QFpXdT5Zd7bJJBoU1hukGsG588DnjALopfLzNHWgjCPtTgXwrh8WcouKEWcVNRmNbpkp",
  "key18": "3qQcVJD5sv6XoYREKJLySUAfPD252srcVD4q5rEauxkaS979JsZkYxKTvo4gahjmQYGcps5qa41cuQcBPTpzmqV9",
  "key19": "2y1JBqdjjLqzNR6Tf2FE1DGgwYCCs4M9S3fDZUqxNgWCgZpyU91mgVZPZtj33mPWYWswxNUgYYP6MKi11W5eoUDk",
  "key20": "rKzRMAaouKvYRvqd7KvZFSYTqws7WCy8zVMrEDS2jpTvFafDqFhF7f3efPzFcTNxkqbFfB9ZFxnjD1KE5AFUwFH",
  "key21": "3iWApZvdMrkCVbETKPADksaxxbnbP2XJqGdWyKtsPddNFnW66fJZSUqPv6Z2hX1UbgNBuPDdQq4gZtUwUkA2mhzL",
  "key22": "4VdgbBxfUbxEKE6eDos9857FxRy7uVKLnyiX77jqp9sYiASCt6SvTM5g9km5b7E5MFraTCUfe2KNAL2DRbGsVbTC",
  "key23": "2YQYKXNu18skMT5sUyaC6QDVkZhDdtE5NBWy4E9igFZiGVPfahfZMoenLx3646L66hXNzoTedw981UhYJQJ4Lo2q",
  "key24": "2McwNZu4EiZzioCyp3DAtrNDLvCyAWNdnjcZEEMmYcvQegn7cu1E8x2mFyjrE6xzxMkqZge3Si627VDZPExsqnym",
  "key25": "4qz5Gtm9L7beN3o466qCYAUniazhhcEwGsD13ysboiKvNqdiu9hrdMSyoNQYmzAD48AkUCGHVZht2JyfH5mMGSMS",
  "key26": "3t6SSuWXDiX1vny9Tq8q4JYagV6J8vDx5Gv8wMyM3Upr8cmB15YoB9w7Gbx7PBeaqkoP4yybwawPCavP7s59w7vR",
  "key27": "vYSAo6vfXGcBQoscqxgYuycg5yexCgzQJKU2Wo9wTYZxkLP6m787KtZTb538DKsqh3N5scVhTt2pTEFWFx4KYhk",
  "key28": "5Xbgh24XBjtNUaL33fJPAy6dKNDwpKhz2r9hRX2xVJudnKaLCGty3wQfRSaoJk8jGJYdRgASx4avnx82AtqVKxhn",
  "key29": "x9pjE8TMnzTxebxvdkxqtYjWLiTq1r2My7vouasWxbXubhnwxU5niFQ23qExcyqVZK43BRbYAdyqcSbzQNV1cJF",
  "key30": "39B2q7iqPnjbMdNvFu48US11AELzxGJ9jZ6ZxMignVKjcHuRgG323wjudAX23Qakukk9tp2E7JUgjjGiDj8nQoN2",
  "key31": "29ABjBckbztY9AspWhqp5mtoxvq9RwQJm7WMFfoVrEk8z1rprpSSPktRsXjg7fDSfGCcZYc3HjAY6Us9ZMVjzpaK",
  "key32": "5ioRXjez3PTWwBs6oRNe4zzTs6nu2QZRsK4vmnFeSezV16UDygYetMFbVjDmz2E1AgTETGyjgTZ2j1Xgk1pwcTYr",
  "key33": "62nzAFE66UohmWTiGitNdpDpdDhRwT6avWHVjbW7gvDN5V75BdShPk31NC5kG2yesUyyGBiVitonDLpAbmFuc3mg",
  "key34": "63b6G4p3oqfT18a8npzN9LCFFU3N7dwS1oE4CfDoDaDteYquaQoTncpjHMuJ14N8o5VquTzpxhqPgLXJRPHHDfRW",
  "key35": "3up6cXzooA8qt2Rusf32ZaC9qQHQjFEuGXKG2EkRPnmfiRgC5UHPtqHe2eXNGUsndeHqtoWm3qwWu39a6TEPDMJ",
  "key36": "3d2MKo5fdmCTsGmo9nbJmGnKPBmhwdNCQbgzxvF3wnSjYyJ9BL8ivtZcAQvtWqrRNHim7bpQZMNQNJBf4forCxk8",
  "key37": "5tAw33ntmgh8X5JPvdGhZcRA3LpfGaMxZT9rhrBR63h19qHS896Rwcs4bicnbuJVYjgpL54a8sLdWAsJSZMFx7Vo",
  "key38": "4SddVfj7Mnw8PCzzQGyVVHbALWSi4duAwBkSwhu95sgiw7xckHuVjDceHFzkZQWdqshpFXoeU4HvncrVDVv5uSnq",
  "key39": "3gBdsQDAxv8mSaFrah18QRQDJHqA5J5HBnukXMmdze4SwdFytQBT4WSTdW7A4iuvwvaChUNXLVPP1zNkhLF19pTz",
  "key40": "5wP45eUA2J1R8oQRa2HX7WB9bwbdh7VwKMj7MW9QUCFFqHB4jfQeQLkDfiK7UrCnrNqrvg1rCkKkouprDfqtQJuY",
  "key41": "3kLRk6byys9F4qVMegrAQRawZ4dtnkEBnPZPkpdSfc8m49GkkTfASNWkJW4ppnHtairvNG9Bcky7kdD5gp3MPfBV",
  "key42": "65W66oi6rXgybyyqocgeMguQmofM8hyTRX3afzJQZAb6DuLUPPfujMAvRLsTrTDEeNBfioQTLjHvH3QqiCprwiyu",
  "key43": "UdgCptYje2sXGMkp7LFFhQeDXsqJiQv94faPQHVQMBoUQ8cnuXaidDd8w4aWnr2Sm2SB5rSqDVZfLvEWNQLfnCo"
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
