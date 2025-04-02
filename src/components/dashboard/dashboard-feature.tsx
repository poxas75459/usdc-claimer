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
    "5zToSJCXdNzwBggr7MG5THNvJRFqV7qvW2VLv14DFntkNzfv7B4kUU8baQVPe4NWsRgCuRfETnt49RMr5nR8V9ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7BcCbpm7AyiEkhQCexzyqo589UeYA7U7FEUqBHmGQKhrAJ5HDkUrobP7bBYanUuYTxBinSUwt512FrsEuAfhQo",
  "key1": "3VGVartTvSnTVp34PPRDXsRVuRGG6J7KTVzo4roG6oAVpmqPPtF8QURnwLfuH9xSCrsZumkAtmWCjm4GRvw8nXvL",
  "key2": "2hFsUkajyYRnosUeZgrYnU9ygzpkmLoz7Z9kz66Paj3pFVTuDjWBFG9ZQKTENzUXEmygHZvYk8My64sXouyvDu4u",
  "key3": "3EJoZx79ZDY9VgdzUPNQsdynCDJJTuDWsvjv66jfwkad48XKMnEibBeHTt2MVCJ6gZTjsirf6djcMcLvXqykiRTY",
  "key4": "62RXuKNiD8eTmWHUrkBEYR8NCKGKkWjvBVS4yDPxZa2Ep6JdGqYgZ33MYC8gUraoESz7hNnSLVbndyV6T2LruAPK",
  "key5": "3RGTLmV5orRrCBUVdJayzuQFufs5HVJrhtmrXpwtg4LD8LHjfE8Saqhdd6YLi4YEKKWn5bv2pGqaXatdPGmQ3Kct",
  "key6": "LXaBLH4JPuzngTGhTTuxu8yP943g9uX1Bhu9toEn2iW82kejAHx6KZxZ4L4DXrBJ5aPKEN7B1W1owHrmnRHsf5J",
  "key7": "4dXCY6qrVKvnKHqgR7eFcwkKxoH89zofjgepscmAyU9FCWNM8yFNGhZpBTgAf9ZRXWEBun2PLkkDLsptCjuQo1Kr",
  "key8": "2uXXTnfG7bKs8mkYxJn3S8VHMA8KeB4sLHXyxbxMFPz4WLKNKMcYNQo3YbPUvky2aR2aCt6AhLEcpEbQmFo9eMtE",
  "key9": "4JJjGpXsumfuC7bN5gjmBpDmcFHUfdZuLEZ1wpHbYK8oBQsu18t93xJz9LxWZoh7fcVFFaYGNRHPabrvkeEwoq29",
  "key10": "2pge4bwJ2SaBr3eU9kgfikhveypExh13B33BX7MCg4tR7BQQxHMK4ycbGRgga7MpUQ1c4jHFJptQPLYhARWuVmjo",
  "key11": "9rUpiANBJWDgRqPeyL6H8yt6FsNxAWok3RkL2oVEgAK5XckSpjovduzXrzonYCM1xvRveso2k2qL1ZCtegDVNUZ",
  "key12": "26ViR2zAeBC8Fq6vA5aJt7z2GJoM8KJzb7LpmcVXWiragKEaUZmK7ADHnBNFEe86ZvrJVHVDNgxfUXPXUxZDUT3V",
  "key13": "31wecRGUSJ8YjgkgcZT9ua329jKKYtC4T1PcJYrsmSS4m3XmHzX4j9uPLL8HGZFBaquZNN3qLGZiJb5QNdezeUR7",
  "key14": "58Hb3dnCrQ55CDkFVp3GX7KwyhuLfyRtVXn856JT98iBK8UG83NFskFZo4A4qE4LvMToGmo2QZoxMjFC3jqURTPT",
  "key15": "dL9F2fdiS6bJx8J4r9mZ9S7quMWzqnnaZpgtJqvNZWZJjnrFKofZH2uTqG5VmvVSqB5n4WM2VUdcF2Q72c2PstC",
  "key16": "5ysAepxhXKJeFvr9Gv68ipUjS41kfc95qapsdVA4nSkiTpZwoa7SekFmoCwM3fPwHXndHZpAxp4MY5WND62FftdR",
  "key17": "WNG7BR5DkgvNHsh7f5QkJz2wdkN6X5UhY2CzDcfMqfMGWs5jxRW9qxiqKGPVKbkFTL3m8DfYxUQzNKFm9md5tgH",
  "key18": "51tneF4Tuuo7rV81ZMRbU1THucX5EgVgVEmxNk3CfsA43Gd5vC1fj1hBmysSLnnmJuHn7icjZ2SLD4i2yYNmeqRS",
  "key19": "5E9p2NNw1aH5w1R9mn69hN5psPp4qTaYPRGzekNkEKV3P4fEVcBPYqZdXBnjNFemG6tJNWeRnb1mLPSspmkak94K",
  "key20": "56KH7DvovJD8cqgsn365MQGWAV8AJeQ9wU9WYogMiBek2QdVtt9RX5uzyGUjQPiAVg4nZXqGaCQLveyAskmMayCh",
  "key21": "5qeSBhooJhJGWGx35i34UFX3A6RSTCEV87Fj9wPXQAwFRhYu2kRFWuqqbX4jTEgKRBfSATCWweCBHBsaiFa6YvNt",
  "key22": "467VnzkCrthnFcV7apM3NzWuTGJzTPrnGMU2o9EUWNuorbfBNPnoKL8LLevgoWxM4FZsMTyVdDabVrCJTiWrrFvP",
  "key23": "4SXLeUC7tMpbPDmrpqvpwh91DRsS5BT2D1W14bveqtmTMKvzGzZzP59hTFEtjhqLUb1QD7YAdaBfouFVYJxLjtwS",
  "key24": "4dQ3uDWkqeDurmUKJFyHwssGrdvwVTUjZpE6wA5tJbCi1SsMFDLFR1K16HMWqmn5WqqCu4MDKmVDj2svfWamKfHA",
  "key25": "2Hpikymz5dmFMwx274d2ixo75NmHfSv5KFWaepVLBYt2wS5796sV5myLDVKFQ19aDVSmdk16RCxH8gD4MUApjySH",
  "key26": "G8PC2qPY3uD3hPpa7TV56h1cPgnAhCn9cz8m6PvPaSSz66F96rngBMwoRSpQ2F6Adc5LvQ6Zfcp3oCvZCNTmUH4",
  "key27": "2F19avkqJnAWaopajNcmSWzLD11Yc9Fg3VAuHZzqsrmB8GaxRViYA6ZtnnEXaQnfPeqfsgDQ5yvyfmjTa52nMaDc",
  "key28": "3meHZhoczUvFzPp3hKxnghtxwD299wXwj3mScA9dMPcc14Nu2H2wHArigiiEtX4zczcrXH8XXnTwzLzHyrhnokLn",
  "key29": "2hEExTxcTiPCVejkcaQrSnCHTvw1zZGYmyz6xoWbTmknmmxHkXdHRjtSrV7jyHZC19zRrNrShT13m8AZeodFaSrU",
  "key30": "4B39wFXUoa1EqVXw6tiYUa4xE4kKhPhy8qJ7jRvqmPQjJ591u7n17dB44zEvdfAmEAyT17zDxjADRNa7prWJ3kbe",
  "key31": "5BgwyiTivTxqmLsuVHUxbtkLfouDR7QMa89F9Lv3CdyeaHWq92yWfTLhE2yiLfxHARTLCkbUfXpkTwvHNrDpVdjZ",
  "key32": "5gEh6QsSbpArDMpXJ91p3CLnrNuWzgooyAbjRYkyzYcxDwvQDTQb3j3dtZXYFMovk3TjcQUbtY3Ky9pjq5kcSL9",
  "key33": "3XeQBPJnWXfqVGoNVzvrwnqYdaDdtgzWKd3zAT1ne9UnwHfL25C4qLmXk5jFzj2WVZ9Lbs1mmqcTqb6SX3QWACUw",
  "key34": "4sbKN1jHr5J64xhCs5vNNujFRYQvQRodHtehUsh8eZ4KbncjtigLaouMwcErxxMvkPqqzQ8zdCVYDBYpwEmV2Yy8",
  "key35": "4Mk3SnNybVdpzB8vKi5keoWNVA86D1NijYJu6B9LVbg4761B4Qjx1DW6HfC1JpDiiaz5PEvqwi5FqiTjXYXHyiro",
  "key36": "2QVkTKFZq5Y93QgHLTuGPWFrGyJJ6gPw1Pce1aGb9xS3NrAjZcriynKpu1zHpryBxsNjMvGfz6pjmAUUqUs9Gcq9",
  "key37": "5KEnos5QiFr7vAYrYb4fkUGhgf7rJP8fesKvyWuudFDaSGUXmo7C7qYxtjR715Ye74sgKscXcXn2CvgYSTVWVg7c",
  "key38": "Tm19wo6vAYFbTPSYC31sGTK1m3PJt5TNqzCefdyJwdhKmd7keCzGUqrRf6o3M2YzVHDHJcq2iWTxqbXRBanwj92",
  "key39": "NzRaob9ZZfauHf2wdvEvLmsbCJ4XDBq5aPXmkHL98N1LB5YDgyhrQ3idXPXMYkwuKXSquJrdsb8uxAQJBmuskY8",
  "key40": "4ms5gWUWwJHQcxWTrYpHzr3ws8YAsNrBtghYkFskhDCxjWEe1v4eu1aTcRBuvLJKMKoxpv2kvFAh8LsGxPzmfjyR",
  "key41": "2XQxTZ5kUGAbGzHwVTnqJ4uPVWauxyhuLNXLqQM87rZ6ZJm9FTamDQHwmeHgMyjwZFZi33S9MHQ2wcjAvkECY2rz",
  "key42": "5nTPPM4o2diCBJ17ytAPF9UG5s3TXjrFMo5Z53tXn6Kif7gpqt7VVu1wYvgBXo6KLcTBZEQpzSEgre8LagdiunVj",
  "key43": "5hgVcAN4QrzZCWJ2N5VmdWBepJuCabKzZ2Syevr7tKAUQ36167e6RQjz8E6q2FgLMdkkpe2G3PqfjPprcYRxzDbk",
  "key44": "Z3JMggjAYyiAjmrKRaLMDJsogEh5qPppidGvgVkbfEzTakTYWyEd3uaj1gD6SxGWEpRnMkzjuwknjfWfZjfDqsB",
  "key45": "2XAL58QKCxjqiHQ3a3snMJ78Q89W2J2Qz17rqKANDhY8p4S3HCq3eXm6ASndpRj9J2Wr3HzYduuew6poYvZNoLaw",
  "key46": "32CrZxPY7BxqLArsxEZ4crR9ztAi7uiXtKX3o3TmSFqQ9hJrVry79yZQUbzv7nk2nzjfFeikhTw8jT5iqD9Q2NX1",
  "key47": "56NqodqUZ4y4WVLdF3Rc8EYfuSDhyn44Nn5tutCAw2etkZhf12hbWFwXNuLX9sGuQ3o8LUXEuTLPGrZJp3C3t56A",
  "key48": "vqp6Z6xg8tFa2sFxNZygeGpHPRRSPyKtb6JeytFnMXCkBiyx5MA1WFvtD2Qi4AxLhjm5F8Z235w4YWr5yAwq227"
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
