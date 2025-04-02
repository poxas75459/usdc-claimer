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
    "2pMeKbUJR4ZoFAcyaH7AC6ivT7gJwvxLyisDQH8Wc5zTihfQyPJtoQzQ2Lymf6CLAy1Yj8CBXJAmo7QeXSzH5Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKXMKGmyn6mfwUfruHrpE35e1kV8aJy18BuPBzR2Z2DbDVhBJwZccaMstteW4MWbSzz2oFbkpZtvrvN71GQZSaZ",
  "key1": "3hbxdGrShFHdd124V38qP4x8BNimikimVHLos38su51eBLLY4vfvovnwYjmPBfsSLT3oUuwCGLJFHbN2snd8FPrh",
  "key2": "3MtougHakFrJaE9TTcPWg4i9dGbK9EQ26DnaEgwvF9EqNJFN4T8EUMSHXm1pPmDwUVMUTSyrn5xkqcv5gUvvZjGu",
  "key3": "4xdtHjCZVrjXGSgs8DqutupQ3FB6bKoYrFtK8VrebmaPMDkiF8wGhnZrgLXKTDeKTKajK8t6eoe9ZN6A2FdXrmat",
  "key4": "2ZqLJeJamRMdwfWiE1EHdsMrvUMy1WhTpn5qGEnmqr2eBVKRZqaM37Kmpm4Lqw6AVR1d15cnqQ1vR4PGHoBuuBxx",
  "key5": "b7DiNe4TChtooKXjn2toHecoYpGbQ5NeN2Dx2zNJwzTKP2QtWv4uhR3RvAfL3nrZBvxrra7tYTTCehLui2RBvxU",
  "key6": "o4KzQbrr9AQAN8sffMKQqy5R2nKy6LzE9m2CUk8PKaDUsbXz83JY6iYDpq7DhGsHeeJR6Bs9HgQp5X8w5cdYn2h",
  "key7": "2URPX87NBD19LGE4FWKvvnXZeARSnsvvR3pbmNrm1UvPZYMvdxjHwyE39qdDGpiRVzjHL6W3hnCx4Gcy1ExWpLP1",
  "key8": "51pLEPTmojWT4pQbmSzWBPQ57qUW748fFyLkP44xK3sYkwh7H2P9kkrAarVvjAL447u7pAfUv8d69QWuonmeSbnR",
  "key9": "5Knrnv1ETn1Fj5R4B5pGW7AaGxxnxdnx6GpB3qzMoTrJCWQHDgyAhnnxB7wmBzmuCT1oLo1oLzRbC78gizU48z7c",
  "key10": "dBo9Si6ThDkRFcTYLb3j6FSuUnoiAFu4w21MfZqrwym9PFmrQwWjR15m3GPjdvxk3BpBp7MpijAZ6Ah3Bntic1C",
  "key11": "2ydSjiFmcLQrZWrbcZBZHopDxUmcQRJvhaLePm66H5V1yjBNEpMANNWuuZXUY5wcRVasZ3s9yPjWhBanmE3YryE1",
  "key12": "4iAEwnHrw25kC9beq8kwBx252QQgE9B6n4AiDwVPeb3gTKZxQnVwrmtYAJwCiG3zAsgTjQVeCuHGvsq1NUL6qKEY",
  "key13": "tY13uswSck8t8CSnd8Hbm3cBezntM1TrH1WJ4A8hrqu9c5zjTz9ajRJ3Z7ztS5HWpe4gU5an6Q7fatK86ZfrHXD",
  "key14": "3w1n7Hxu33KpFZmzHEgfsSsdCEgnrzzANiZktSK45xp1AWvw9uQ6mJ96tPw8iHJnYwYcXW9nBjYxRNYJ9vmmgPgt",
  "key15": "34gzZPWqA1oC8y2V8Ldmm3YyMdvwL8EH3eUgjfygRTUDDToZUKsL5HRJLLSFWkH6EG5nP11qtE3EnatPZWyvTP4y",
  "key16": "31KQ3oDY5JFRzsd2udpBof22cTqWT14Rjh3Y4VPgYSkh314j6JPLkXFUR7uPG2UTu12xcGXucJE9ybRd14stqyEC",
  "key17": "5ghp4GFdkHRVhp5FTfvoSeWTfWHSYnMQUcD4KcWYz56TVJz9U5wxxbTX7fChiid9958ukRnNwAV5Wm1dexcR2G9Z",
  "key18": "3W4rNgtLEiSZ3Aix17u6MSrvHG5dGABpB6i5Lsh53927fspMLHDr2RpWNBzXyLrg3qouWEdwM6y7uMdCbscRdc9P",
  "key19": "3q4gb4CYUZvzzcGTqpzWybhYurKBNwXB5GrgrntDJUiL2wzRWrULiCGjCPkBhgMFaST4VSMbtx6ypxk7HeY15t8g",
  "key20": "3Xu5RchjW9BXjqZR85TfPR6krK5ShwNKs6g1VMUQjtWsUK7ofw2inaJo3WwC3Ca7Nz4unHq6xUbn7YRtBk8ZT1Ky",
  "key21": "4F4jeoW8qEztP56GamcEjy627ZGoFWvChRvVrg3fHE5jtwJdp8BSBxNY6G5mjQD2tgLB6w9xVKyCECZof1ffaVjr",
  "key22": "9xLPjdJWgeS9FCKdDspKTdqfda6TPyduq3qDo68bzoqTfMK7MDsNyzSPVSLSoryiaf3RKDjYuk37DDK4WVheEML",
  "key23": "2SeHBPBzzCmeHJJBgznFGALystRDRU1gRbu7G43zPjYVHP1woWUq3df34B6KdmEoUDtN9hTdmpN8QM9G9ToeJ14E",
  "key24": "3AZBee7AzaTXJSc9mxs1uTCitAXwy8gBTdcoLf4Qf7cdXrdD4wqwh1ZiE8Eoihoz1AtD6SoBNuYFXHBAu5WvUKhe",
  "key25": "3wvyia3aau1JSisKPvKp7QNx9v4PHoUWRdSgwK7mN3gLF5odJavvewajJnV7KfQbYTWZUabmBKEfPQf9fjwuM8RQ",
  "key26": "2wLHW32e7oetDQuRgUD1vp8jkp4vmoL35Ut5qTqffdfG3gkzFNa8QkUQ9ZpXA2QiRmnBzbzA8JavsL5D6cQhsTMi",
  "key27": "5khGh4Ui93ktjYiQC3VrPYQyLZ2kbs6LYYRPq7WLKYSG7RNAqjN7T93b2f1MPKYcLYhUU7DBBuxEzmgt3RPGprrK",
  "key28": "5buvWLENrwC23TpQDfqjgiRHeRt89vneDLGuZkqUnzcg4PguS8ajZotv5KkCR2azzU6X1DZ3NDfFgKvnYudWhUMB",
  "key29": "2aKP1HLEDvYXKZK7AM8cJmS6ZH1mjpNHLTQkZ1XVCd7wvQPUpwZn9CC5s31i2s5J38mAKfGB9BdqFxhBKikiRa3f",
  "key30": "3CkF89Xk3ViL5CEkpcsJrZiTnfLb4AYxnPaAWvzjWSkA4SVFt7RinYkdxXiQMGdsg6Ey5m2kAsqMBRg62S2bWZy7",
  "key31": "4Hd7s96d3sE1z18M8C7boWZ8gUBqhK6cG6wGSSdsdWzdzTHocQ78nmfpSLhRwgrT66P9K49Scfc3qCRorjr3Vb5o",
  "key32": "nziG89zFky33cQ66Y6tbEZaUEWsjGzBpa2kNF1EK4Qr8o89Hqp9piXksc3RnVsoAoDeJ3KusENZBVhW38iHip9r",
  "key33": "3Wghh26TYPLFJkqT1vVdAJdDnHubXyFif2z8xhnA947tv9UE2Ast9AKwbnJs7jYw6p1qkBGr4NUgTbVKYcvDCxXq",
  "key34": "4wkSiXjDsHxMuyAr29s7njPwycjZfvZN2NPQLDXyPNaPHXKYgz7oMC9ZRrQD4YxmXD2zByWNKcJ93TwF7EcfvMVh",
  "key35": "5Pp4Y7KwLymii8bwAiSwq76FgrBZYLUyLuewR9fGo79WXHERELiEKK73ByWWfLoGbadYUg6YX2rUm35riPvv1NyH",
  "key36": "2nehzYDeA8kMHtUMCQsA3vSyWmNGueAWXFNakHig8pXmdHDieMCR1eLDc9ZY7Vfsrnh35W3x65PYxr6ZeaQnoaE6",
  "key37": "uf7se9Bga9UCCzkkeD1y4LjzkNHSrAzCRJig2n1qYiZeYrnYLiBt5u6wKQ3DJzYiQtu72cygQQKx9vanFBV42cC",
  "key38": "2fGqd2zpiGCg7kU1Bd6Up6nkxowj5uKVJVfEDPn8ALx7F7rDUfrKNoVvGFiYhLxAqjwf98fN7ZsoVjTqJkrfbYY"
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
