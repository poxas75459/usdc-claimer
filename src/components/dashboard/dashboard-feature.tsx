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
    "GADjozBKBpowFik1ZEn8Njkk7Faase2fbChTyVB4WNWARyrQL2LBgFjEh23WQeo7aJyiL42rbxRtkMs5BxUCGEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6zUTyoQwa3G8Qn5k68b7GbQVanea9MWz9rqPZB5dqcgVkZgSeaaiXuhswwSsrUJsMBvMb6RE2LszaPVLTLxyWp",
  "key1": "VzVFrNBe12z6Q1ByaJrsg9NASNafau5mzPrr3uBw65RDf191zAAjRNfxm2HKpW75NcMTvwYe8UhZj7i3m5iigqf",
  "key2": "Lm8TZvfEFznwY92V84pXEXcPYW3hr6zaT1WZu6Jof7GakqCSS9qpNQRXHejLD6SdiS9LvnN1iKWzpDBh6GJbNub",
  "key3": "TZjAPZwLEebfW1CxRJf2sbR3X44KYqnoQY3AxWCVA1WEWfjXtu1kyUY1nSEX5fM2dyFyHocESvMNTra3hXpzyG1",
  "key4": "4APJVKaMnkpcMvYVQwhMhtgiQGypvJuysWFYRzcfwntrFKDerzPAK9XYJzNpLaLGceEFoCyjVfxftshScLVpDLnR",
  "key5": "2RTnKGN8qyvUq2QvwzBZdyU7EfYAfkH8jEJxRme1kaKPuuJjwksFhxBkDE4Pr9t1rNVqbzeU4ehBTPCucrrWDnUZ",
  "key6": "2erchEFNjVviHCrF6T9zxLw8Vd5qnPjHZRrxzAd9qkrEbfKMv1D7wBMwxp44g2i6jUodxg5KMEC3MWQ7WY8YJj3M",
  "key7": "4ZiSgYe3xCN5mp4ALNdw5GJC1jMPNBzN16iH1v9j9Q9u9qwRTyugoN2DumT7kfR1hDzzgobhraR1DjVmhaCuN923",
  "key8": "gFpPyuowHxptLr8WnLwQYGpBS4krxJiwieLZ5AKhzkp2WpBnVuA5bNzohrJHpQnbBQiMFmiBduU6aTeHjM6khNr",
  "key9": "5D1x6gv6dii9gsXoEuR1PFnMWzXhcgTvNYqpDGvFPPGsjXQmjQTHSNZpCfvY1zo8nu6Px8S1QaiYWepjqUsKhakn",
  "key10": "HQzHJeveNcC4DTAZmLfoL445eQ91MKZ2AjALrvTysQmeaYHkj8WGwp2gjWW8N92yEDcL71NiSdvC1rCn4hTyK74",
  "key11": "3Sy77LfxPtLJPW1ayFEE9k6LkanVGg2Y3CoTyT3qCwHLDttZyt7ZP3F1E99E9jR5pUiGxQxcw1J4SSJvkp7YMohj",
  "key12": "5aLgU5LPUy2pafxPDKVv1W5ogQNqz5dWWBYBQzjLDAwqfa4TDGJ9xDpRXeuFn6ahHN38m3C35yvkedSSrz9yr7qs",
  "key13": "4PFXVBSwkBKcYcQrQ1tCJ8hdKhqbNsRLbmusiVN5FsdnNsYNih9osjx1WJgNCGnieV5FRgKsKwANhYsqPk9Sk6jx",
  "key14": "4B8e92aZFHsBUDg6q9qhb1bfBzgy1YLji4GSTL6yaFj3LA75m8Jq5oJiDVqBtp142C82FofPSwLKRo8JQ2tiUc3G",
  "key15": "2QGxqhNBFE2cQGXFtsyopXCLh8jmVkueQwC5Z2ifKv8QRjrxAJqhVvG2rQcHXGXyVHZR41KsocNt2YKCSPVs9P3C",
  "key16": "RL8h1PpSJqEPJ9gLg4B4xJqkpufS6x9e7aoDHVuGQrerA5iqsducbBu3jeYUacw5gLvqDGLvCAaQvJhLonBZxU2",
  "key17": "5EyH4BgHxD2EWv3y9U7qWv1YC4ZBGvE3SmY3w7TKqHeRmiYda9Tiet9jnMxQ2TWGPMZVriLXW7RAhXu4r6vNwkMG",
  "key18": "5UXg21HubFfwTzKuLhFyDeLKX1jfbSb6AK5P2aY54LzJAbt75WpvYH7DuXAevX2z2deW6dBDaUmhL8FCAicC5y9u",
  "key19": "337hVuj459YjQBWnLx1nSwNFqhXGF5BT9zu8TUYuLCtwRQMh8iLeyuhUWArf5E5p8mjHnKQogwqFYFV86gNjY8tr",
  "key20": "4mBj8UUF1ZocyENggAowxhzUACyhZzTfMDxd3bh4uJyXx4Jrgb1tKbH6WoRCeEomMizS279QzrZLmfcYMsrZSqn7",
  "key21": "351xbamY4jjebCcLoUTge4asDrGxekf5QhsQQvHz7RjgkeZgNxi68oSV9jEzmN1kz5EiWNLRBG2sLxkCiKe2tD6d",
  "key22": "2Ve678qn7tesGsZAdt7oZFJhrG6F63g9yKj2M797Vu6m1EGzh4QbhU9iRvM6zTXFTLjFEbUWeBhfqzCnmjd1LMZV",
  "key23": "2sGvzRo6LhBnfYVhWwyEDkEADa4v6mPx8vKoEpVdxYiDPAJ12ByH3xd8r2sE9ACkEShBq2xS8JJMeRBJbmxXV3kc",
  "key24": "5E7eVGiUeWTE5gdmuB3ofp1CvxkGPk4BSKHpHz5WdoLobRvFwjfs34bgQZoS1k7fBLJagQJKjxi91TinozKt2LqC",
  "key25": "3tLV91L99HcfYiNi9vpoabsyH2MjBxRkVYD36dPQ9TQ7C1pcsKvFkKxZ7VcVq49XHZyEUD9zdSD9y618sYfj8KFf",
  "key26": "5LtACq1C2k5nz2afduSgKuQ3LzjHJjVEQNCYNyKKMLs9wBq6j24PXkE6jckhZp11icN7ffyLaBxcYNhr57FAooF",
  "key27": "2Ng7NujMm1mHUwqZgxe5xQ15LMiPtWxBibkAnNaVfDmdRhQ4CVUr2fQh6dxpMj5bkYhD6HiSV6avY2poqta3paTP",
  "key28": "4G36F21FhwBPywbu1KeTqrz9hP7PFeA3tTMQjKXKHiTknYQgMxMkZXSjaULGRaEvXCCu5kY6KwQ8JNMdo2J6AS4E",
  "key29": "2pUJx19QbYJXcYt89TVYQYHGnT1ZgcGnPTfrkFG5KwSrB4xf2qT5e9fV7GR85z9Sfp6GoRwTe1NyZGnc34Zz7d9m",
  "key30": "4poxkjrjbfrWSSsoDKCkr1vuzmrKdCLTfX7H56onZYQMeRsv5qbJrNdgjY9ohDxKSV8NfnCpWkK7jVXzxzobxKjS",
  "key31": "2g2yL6pUnjzAoWgG5CmDnjMJt8KXneRA3X79DcQDRJ4UPj7Moa7bh7jcyJJAsPWZpsAqcwfbL6qjTfxi8B4Zi9rM",
  "key32": "4k149NdLZYz74HKsVNaS4g41dEpQPWcrQD9vbJShx9N2kP8q16roKyyLWD2RF11nqi444P7YSdkaDgnYkbgkiZYA",
  "key33": "2hcPq7pUQNcsC2kCWoUoajbDazmw2KBj8MqEcWH4xiZ17MyHqhLKYrgpvCQYnotLyy9ALvXihN2Bm7jnQurLVMfC",
  "key34": "2ZrFiA4RTf7MyPFYnsKSCoEBRSWz5FWM613Vg999aK9yqYoKMxxxTvzrGXonoBw1BM6ZbDTDTGRvBey7UZpr5j2u",
  "key35": "3xb1LdoRuBpSgPsYkcyfJ6m3zrpJDjECVMpUYb5t1g4cfamvwGnGBrYm5PXupLBuA9tkf7HfNmp7LvNbpga3otNT",
  "key36": "gvkpdwX6xhMhpKs2mTbfwmkZk75kPSHZpZg1XneaN1Wz2LzWdndesrbyCdTKA6C5fxaRB1wtgiUs9cmz19jemkj",
  "key37": "bnTfePcE2kU1dfHa46JKRuH54Ko53WNHq7JogcpT2xV27XSuF1gRahK5tqb8C1UpQyFLKoqSdaKGraUfkAutDhw",
  "key38": "2qqsfB5RveNUWYUkn748CGqriPDKdrq5N6b4LmLDd1mEL3xxNvwnwRU1nj7B3y5FadP3rC4Ax61A5ZCg6eER9yvr",
  "key39": "5uHd22Cbmjy3PfVtiSfEEokizrjTwzW1psGPm9YC6MnA9LXLciUEmRKFrwH9o1B4nfuk9rEgb5Us24Tt8tsuW86T"
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
