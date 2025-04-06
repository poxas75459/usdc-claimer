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
    "47TD9DNUMhnHgZHDbcVHb2FcWv2mktrdRhmNrJMs2ArxJAByxgW9fBAGQPJnNaMiSxrKd6zKPdUZskMeJwRiMYA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AvnxGHE9arbJs16WVhf8Uz5apkZ2xSp1QSw36Z5bg56Nu4PKQhuBMsdBBX1vL4u64aspAqdFUQxrpsZuncvFVep",
  "key1": "GGUdkKfrPxVXBSWgNqrasyBkCm7EwzZTwQhTvLjFk1JrQgeF5ys3hsBSyYSHjP78riQ1kKFVRjkSEW5eRma9D1X",
  "key2": "57WdH4y9S8M6B9oJSckMEnZnEmYfUoMfDotHv5QVFNXzF9GjmMoV8MiaJxi8jAzvXXqQU48AWSLWZGP3rrg7ijCR",
  "key3": "2TCW8kEpyZYPmdtgeY3jRtdmx7cGXzs1WdfxUz9JewFLqQkhv65WCjsWtaryaP2vdC9EFVrPDuvdvWjzg5C7nydp",
  "key4": "5b7yf9fHuGw6SdyKVo7Deis8HTcDLy8vYFDz4Wb3w8dJg8DwtkqUNr8fKVSteB6z8xicULETEBkxoNzAaL9q8hff",
  "key5": "4KQgrYzK485J279b9P1h4MoqtxBtqQjud39nVjp5YZg47ZS8j2FcEEeNjjdk6gPNc3jpevkHYyvm1KqVpd9NdVkc",
  "key6": "43USvVQxkJkUHuRkWETyNwP1oARPEUzfn4RXCwTRh3h7c4481AmQoNvpWNnYje7tbS8KsUWJvdpVMZQBY2ti2Ja8",
  "key7": "5f3gh9hvBp4r61oHz43Sw3CvMjoyZEfzVEP15s3ZLQYAJ1GddDDn4txbKq3w7cx9HV7VTD719dbjW65ZeJ84c2xf",
  "key8": "54NT5jmf4moeo2NbEF21oFet4vVz4ny2juvzSXiGC1LtY4UrW1aTgKnfFDuEzypCC9ctAqMhdPi8eKZBGJWTVMki",
  "key9": "FfLK7FMuex8S38nsX85QVaykwmpYxL7D7koT94Dco4aFmYebbCgVhxgh29FZaccafK17BtPSGGSFhF6LiAm7gVU",
  "key10": "4govLZRnU6RCXQSb2onQG8s9cMCYUnHrRdxK1Sh7LwuQPC4UgxHzoVoPBUcSaPoC2qQwTp7k71KtczcdTSS3ukE3",
  "key11": "4eTSGdJGaWYuVCvae4brhb59Fg9RqjTazd43cMCKpQYJkZK761xrS8oeFhgD8DXp4oRWXxuTfURXetqqRHTTboTR",
  "key12": "T6Mb31LE7D8p8UbnaG7esAG9zJ7GKcHUFyvUZNYPvotmvDaJtp1VpoHRYmSxgKrccQMnyGHWdvpovx8hzxP8hzR",
  "key13": "2nTspdoyS7Z1SDuLG3xDxXiqH1peak4McFRNygzdgsxntrgXT7knvfA4cLDpQ8QvKg9d3uws86N5VrbPS5AgZ3JL",
  "key14": "5qhmmdkXSrdGGLcExXP9uMffRP7TkWhgiPZhMAXV6BJSHk5YpRHd8py5Mndgj6Ws8UhjWZcK419acFmPMj7xrawz",
  "key15": "2c5tbUCd4VkvgLef4b2cJfyazEa7XVpU7c7ZknkrzVqjyvQB6e8UnSk4nsz4RF3YDFhCitwNsLYeXR1Z9cqaLgYR",
  "key16": "m7fyQdrCbFETMW5MsEBzEEpxnrdKdKbW1KCfW97EJtcKWULHbdyGrffypqyBXKBCNj4C8euazejoLEAxwrKWU8V",
  "key17": "6373AtCSzsDd4wMVFC3s1mab76Uib7mbUSMzQDLUqvYQisFCDdfTgqSan87Jk9NhFTHDVH2XQnHJnBq7WsuYF6ud",
  "key18": "3RXQy4onNt9V5KVw5SCYfxuhxLjWqZShstt6bQbwVAbGfFEZMq3nHue2PRLyYmDRnqZdFRcn751dML25Nv5YSvCu",
  "key19": "67NcgdkZYvRxGFLUYScfX2xcvjAWTMX7sb99nA4Mau3tAbe4rYdAdn6XvG4K5h6XbgSjy9Kiq7spiEFKRX4Y4NhE",
  "key20": "3q5q1z2hbSJAAU4AeKBv3JDFE2hHrcqvx7ztpZd85tS2yGtifUkrUZyoJgGP1WGY5DkyNazJ7FjbUoiqB7ic5JbW",
  "key21": "3SzGSo1WRdUD4goK5NkRQ3K2Pz8y6AkWz1Rp7ZyYYi563H5auWMqfBxv6ZDyw9ND6TWve9wVT4tzCBC5S5Spn4br",
  "key22": "2hPAcn4avTB2p9rugQPhravqNU9YmdxFfqGckoPRbr5Gf1z1bitCBKJLBkm1YVym9AZ9Yq2PPKNhsKTz5eANsWdr",
  "key23": "2XSFmF4CkF3up9gZ5kBE52rpynRySw4ckQ8HocjrJgorrByNYxDcDLbuQFpJTPgqMxUM41WezArrbfWDbSY1mMxy",
  "key24": "3MAHNsUMbtu33waYGyQpQHyAqSpn6oc4pQw6kpQK4YrpXEoNGUtWGH8P7NLnFpLSdgAsKBGrwf87GJijigetrEN1",
  "key25": "3yaDpkfU5YEN4wsLYiGjBCJ9XmHbsTJPf7LHHpinsHtBbKauNr9ywzqA92vGkNaw7EDm21Us2TSR16s3U1gEk4EQ",
  "key26": "5vYbW72jfxm29Hxk5dfUCm7A6KNdoiG8aZuoaYtut5sfkrA4u3CpVwx4jw8TKkhq2VduGweoHoDtsoUs7BS8C4Zh",
  "key27": "YqNLsxiBmKdcqyuqLbDirwYrFC2eG5YgYRXrVu49Rz2uupp3bnb5u3a5Wu2p8Ef9eRoctR2q17YwrSaBsqKF8L3",
  "key28": "3uGkZzwkNMS3WT5eTHvrV7gsQY3VwoD8k4NcN2tAzWixM7UnZ3Uqtgfy6VnFVQCPn8hv5S1hVChZA9dr9XS5pCmi",
  "key29": "67asEEtcGyGi1FSw6qNsy7VQLRmb2Y2Sn6Fu1R6CqBU4BZQgqzhAScSPahHcM57hpPCPmbkheHhamHMjUMg6HNaB",
  "key30": "3zXzgTEjMJWD1CXGmd45HAe5XTxM36gvYD98hxYJ3fYGZ9VmiDoKJud8nGymAwKAMb4489GJLUUnv2KNTTfKjTjq",
  "key31": "ySyJpX5cHDSPrkYYG7xh623VCR6oRKitUQ4wXoiTE7tb4bzUSpYGyM1FxYwAgT6vzowNrmVpadwy8AH24knTLYz",
  "key32": "QmLG9ZKwjV6tDkXzjmUH3z1vqWhAdNqrGMdM61Xh5ned9AFHS6dfSvnLLySYxZA1a12KLu6VQMEktsRzyK5uy7A",
  "key33": "DXYQJrR1eGkYnrZcFQu6k5n8a36Kr7wyRgkcPNq4CBNyZoBNhWPLHBrehDTfZwnjZ7RgZL6gGcjP67x9dVJEmL3",
  "key34": "5XFLygVVAgXvou4UVQYnVyxFDVsBi68jmyqsm6sZLsXoC6oxxqiB2PEBBQxG6cbTLcTANgXEprkkoRx3uTE5EEDo",
  "key35": "Jufzi2wQGQuUKoZynVhj5cETFKNQwMXAyTwYAquzoEmdb8Rvudu4ikCCvg2biHGnCoR48oeUgMPtXQz6stwNX7g",
  "key36": "2PXoKiGgUMheyAcfziEckeeaG7VXA5BzsE6Jvrjmqxh7QCEXGbER66rrkHDroieaqUh1QhYrQABWsBUGRqr91ix9",
  "key37": "4kvAeXSNcDQp38uUNZoKD4YEJkheuk2i5KBW9HCJqhR7TFR8QHksgX7p6ep9r1q3VxadBuq3smjhCEm9KmMbWTgj",
  "key38": "2mPZ6eFrruRrk7pNySvN9GV7yLCMQJbqhrjdXKancWFMP1Ec9X88yts73wuMaqvk9KuL8Jp3UZcfjyCZJN8A5JfS",
  "key39": "3Q7K1x6XMjniacRW3gGMSDdueZJqkDP8ubHDxHYBF3Lu4DC9hAus1o5WrSVtQZk4BH8jM8toSCdHRWNMrWFtBrJ2",
  "key40": "3QDCdazxUT7Uu8rGtKNrUPvtCTykTYKzmDRzYLm4b813Vog9pDSCUTvewRQ3waVsTEuDtAXP2gcXRHShQg56ijuM",
  "key41": "29tKgJ9vvpYtVSrNn5e7Cqfuk4PH45MhZzyH8DDkZkVMVXmWCN4i7ddrw7H44K3SU19Bboq88tfH9HoJ2TnKbeq8",
  "key42": "5i3i6a8T6r6PnRRvhU5aU9XetkHPecKEAuXX14g11ZRxQN2j5ywMPT5NnQPsv9CH9mMqiKez5NjgQA1Z5fmdVK5d"
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
