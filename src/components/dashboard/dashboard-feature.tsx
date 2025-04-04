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
    "NtQz8K8JwgemuEi6by28XDEkdDEB3An37BwAUSVesqo29WUz4gua35JJdnCdPDppGXRHdecVBeFuKEpjeMUEtFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJTBZP2yqgN6yUjGiBnDN2jAFc4BG3ZZToVQhWTJLLxgAeqkcBepgL1HdvUJ77EWvVGX1ZA95AMnbJnopDv7RiZ",
  "key1": "654oYLdNfNEB1LymVgvJXgt3QNk8SQzVh3QAW4p22BF4SaZpFrpLNsGnFotcW4shcULxnQsw5Hc4C1sv7CSZEQ4v",
  "key2": "5GhojcXY5RURyHrPZuoyJdkj3Jf15Huauo1DRVQeSmfJFYJtKbDt6jujnnbXniFrQuQ5SxzanoNHDnEBmxgJK9Jh",
  "key3": "21jcThrXzGCaU4S5aKVqiNpZKseG6gYXxw3QFPuhUzgpEbRJAAEei2GQjgHXKcyWYuCBsR3ZmRxUqbUCJpQijWWW",
  "key4": "xJsNXzMA9c3vRXvQ7MG4MReUJKKw1v5FZEYcTySUQsLytyqsfsJJdvwSGbfd9Tgm6p1dY8FUZLA7FLfvDsd1bft",
  "key5": "4bzi63wmcSP8gGmMc2if5z1Hh6gjj4xtN1tkZoBsNE2cLay5ca3L4XidB9AqKs7GYJZw3aqoVCrAGY4iY66FnQAa",
  "key6": "2sqFB2R3x2ZK4D6WBesrzc5i3VqQ8TWtEvV4UtpxEaw1dHQkpyf8iyKAPHuYp3uAQjm1Su6ZNckHLgJF7tYoqk8r",
  "key7": "rhGi8VgconGaNqBFEvY5wi8ZKK9nPH6FVTDPymfcnZ9Ypue4JajSEpzXE8qULkBuaDycx6hSqiujcVUkJjuLnVD",
  "key8": "59rxd9uPBYy6wDuLTmE3fjNmZbRFYzVtEnkuoA2Hz3aDort4Rxm5X7w8GoKRU5CVEMbKLw36hC9rM43r1ByYUemV",
  "key9": "2bYzWbBAD9WxzNHggbJVxRyfAbybQWbUKttXjetdRko5iTjS2nuMZ5pHgdSF8fyG4iz1kYbVmf6aJWz9YQ1nM2HN",
  "key10": "5oof5EfzapmgDj3EsAj7DoUPXKU49asRwpnYF1BdcoBJRdVy9K2LrfXsJ4BJRm5KQpdjGQcXAJw2c69Bwu8heaU4",
  "key11": "5FKc9Ym5h1kSJXNezmuu5mojryb1prE7qHvNk748hvE296g55HSHfYHdiUidKU4RSKsM8sgw4kJyqXnKGeVwuUKk",
  "key12": "4iiCLPWYexFvBKfSSeCWTjcj61cgnGjKpPPcAo2KKcJrRSiam2bAbpJ94bMz9PNdGBLamzwBNgWnjPWrP49Wmvsv",
  "key13": "5XFxMbcGB13gCdX31Qhi5sqL5ogkff766zH5eJd5KdsKDvDxKmis1WdhVPPKvK1cGm3qMH5ecvVF8LDhCaKxnRMN",
  "key14": "3Xj8w2hZ9zea1ifebNGZnuySFLtgQhmLzSEJwoabvCHSybcG32oLrQjVudv2bpngc2Y5oT58Us9WxneieC18fyoR",
  "key15": "8UkXEdakAyFqxDN3Kzwvxj1zDLLYCU9g8xt2rpn8g3SkBQDj3zfmSnyAkzKXT2NDSHyJysHZgSvbby5GtpMMYny",
  "key16": "dsARE1JUx23PcPArrq6ZSC8pL2seL2S7QFqbAwZgJagSPLZ9m8i4fFXNu43JJQgKiBteKZeSiGyg6XYPG9TrUPs",
  "key17": "QqcPkvY19opZdotBKJwCnuF6TLBBDpvekx9q7iNC8raJLqNrEQmkv4Bg1BUcw6eyvzjC6ZJPuYJB1CootfWHLuB",
  "key18": "5MeFgynwjpFRzQhA6gXp5jok25wJt9WXyLoe2NB8EFVn38LZ3NS6HcaUfx7U8AFypFgL8LF2jsPXcoDPnhCSYr7s",
  "key19": "qucAWedHMTiaj8mCHuvNX5BndRzKpNXgqsk8ofG7WKvNnBKasE1orPP9do8kFePZGTG36nrx7QXLpcTiWRKnak3",
  "key20": "3hNGutPX3Gbt8yBVrTuskmDrTnWvdqPDHNXYfX6cHnm5fZRuWbJ68n1arvwHquRWASDJ6umFyk22zzvYL4BCPfda",
  "key21": "ThGLGtiFPsWrwaZctmADmFmARszLSbxTjuB8jxq9o4VXzpwHxRkxm8AQu8hfmaLGf7XNC72xiJzVjehoRZjyqkG",
  "key22": "4CLH8MMy9sgYmq5wxAwgwXwqok7mHyxcjHBjQSWYG9wTxfWhRwuo7n4UovUbUKvQAmJBF8W4d1k1EUj91fcun7bC",
  "key23": "5pRRGSE6r1vWoGSw583oMsrJmDtMXoqWg5Gttu4s6DyvUJywwHWeVMn9DNSPbc2wXVfpsfo6cSWvdkcy8di5bcq8",
  "key24": "2oaau9c4GP4eWYGSJMSR8UkdTNgZCwvWKVHbzhrDhiih8XmEzxQSfqGe4BVJJU4WaiZdpp7YPBcV4aRyhcZ2o1Mq",
  "key25": "2Kq3CEdKF1jREV47m7sNfDai6g9frsYDYrgLNT2qKpJGHGudJLW8TV3GW7k7GLBCjyvFQrqia8x3WjSRrjrAkQkr",
  "key26": "2hfDVhXzJ8VRuHeyWLEjqJJbP4QYLcgqVFAsa2KwYJC7fqyigqM1gXeeiYCGjiUbhsFYWwzsJvsHokCSFXQgo5tj",
  "key27": "5UoyjAwWJDF1giEjMhHxQ51UDQAGW74sacHkbvzu6ypv1VKQs6FAgYioACpsg5X9h5NUmpKdhea7jiqM4U51y358",
  "key28": "Yu4dT1g497diWz79wGXVDeVKq8mpSsMixCwY792sx69CzUYLDxy6uVRrkVUbzD9SGiHsRvMrKbcY1YKbVw5BBjo",
  "key29": "5Hd1s3nXDYqoqCCcpDJYs5FHMrryXExDZM6dHpx9iYZLp73FbquegL5JFGfzF6GdLjBkD6stGHNJHgNgmYhr9v3g",
  "key30": "2zh2RF14UT28923LgyD98JV6XjQdnuaiX1Hj4rteM3MrWBSLmFvGV1qLJHVUYpcDaSq13WrbRGaHLDsJWquUdChR",
  "key31": "2kKq25Yb4DC1mdTTXdSytspjADSvgHiv6dhdjFhkMHcFTjuoM78Ax9pFo32hoYfU1gGc97ioLpVeD1v4BJDh6zSq",
  "key32": "4ULJSbcMTkkpPFb2LRTzcUe7QTmrAHd5MFMkwMyKkiyLuU1apmAsYCSu5eYtLp59b1vYHTSgDL6zSCY4q7sAV7ND",
  "key33": "4GKvFr4ov1cPrmfifJV7Utg1rdyFhqBWiFghbApMgLdJeP5561VqotjPV1P4L2qyfw1za2jf9VAoSvngAJbb5bHQ",
  "key34": "63fQyhW4BWRJfoBRAwYLUkgsCgUkEdzuRurXLQyByBAMzUk6Ui22t7TGyVs7qQzhRbwhvVxSLGT9kxBNaghAViF",
  "key35": "3LQHnyQVs3zgHdv91P95yL1cfwRn4hp2WxB1HpeFwS5Ayw6dNysbSXVRKuiGemyczL3zjKGLkY6jTYY4dCzDf1Ru",
  "key36": "5q64WkVUihMKRTEeXsEKDnjcPXtvTS7axt6nVjZQHhE3B8Lo83TtUtJzpoqzHpc8n8ZvYiLfRQCgtaS5ct7LZe3x",
  "key37": "mZhpVCURPNptPdA6MXD7yHkwieejVzPax4a8EtEtyG5mMADKzNR1bxUycg2LcgXXa7L21wrHSjaaEGYJQ53fkN1",
  "key38": "6Hc1qJXu9gAerRkQMhnn37Cuh4aSuVZMJbP41dmFYpgmHMDH39kCSrmkTR1ZPvZbR3eHP7BvYEuD85qb1iqST4C",
  "key39": "5ysG2SRCmsYoUtzXq818eLxYHJN8B9dUa9M8kBgK4eUFNTaernFC2e56YEns7jzRdcinqk2sb7ca41VsqSf7cvgC",
  "key40": "KSJoj6X8NAMpPgKaKB6CqYy3Y1YbffrTaX94dUtuM4vBezKhoV9q6CKD79SdqM5hEiHSuan7thZ47RCcRM7siGH",
  "key41": "3ZxtYqBZgzGBfYbRhJDLcj8GLjt5shPbpM5JCzJiwB1PMAHpWDDzs6hGu6a2CSVt678UnNdj12Y5DzwNxw62tjeD",
  "key42": "27KRWzXJbryrPhN63ztuv2HSgtuhsm2oGrb2HpLNyVis3M6DnvQDHmCwEAupJznpAreHqVaqFCKMDD5jKFd1ayNj",
  "key43": "2dbzrX63zMEg37d1b5v45zizzMpcquxNZ9dpmWskSqSZvshaB5EjaSEg6jpbAcXyzK8mWogxrCJMQwS4prB6rxG3",
  "key44": "2wEQxHjuUNjSyp6pvSNdGAjwA4VnRyCNKrRF93ED5UWi1W2Mc4SqnS8XZKWHbyRdtkDuEq429aZn798G1GEjq2Ba",
  "key45": "4ao22HtnbonN9pRUKeyBK6miGRWtDBLzmJDUp5BuTVSwmGErH79TPzuRrAEbehesxpcKTDCqV6KsCJ1Q3xWfuC6Y",
  "key46": "4vhNmdUi5ZbeaYkuR44i7hpXGE5pWioUdwNVg6uLxpkiR5VruY9uozk4zgL9yRkDjkPtSrMLt6S39cmdbmQogkcm",
  "key47": "5vwMYYuA1N6pfFpMoYPJAhoTuUtUSgEfS56bZv3pDxTfyWb2npMFpiHp38UpcUGZQSwmeVvtnY7SNz7xZaSg392n"
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
