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
    "2gpVRpRa5i328KmXieq6izBbYdE8KkqPxZNwfhSj7YddzzENGb5HxRac3qnLE4SchKCNLAwrDMtSUKjr6ppHjWeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnkjpTzM78X5EetcLsFkZYhwmoHm5rNqGx31tPWzk7ncQS9u4AtSdzGqN2PQgFRAqb8bMMYkVBQb8hLJ5NrkGqk",
  "key1": "4Rt9gzaCTXzwLk7Bc1BqXcdGGR4C3UJCPfpJ3nWqFSuWSCWNcVNKb7cb8yhjsivMKJPTDLvfexMab3gUfFRP8De4",
  "key2": "2m727PBzAfdLM3kV9qc1yx82BPUHEQQG31Ro363HGwNyYibJKmJPatGR5bAd58y7vSmJLYKfvV4Gi6s3gXaVpetb",
  "key3": "2JuUo47KjiVWFaTKBGVcYK5FFzJAobceAAs7E6DN5YzBYeZAgA3NoCXUSQCfhJeJuik2d3DoPjDRDbQdLxN2KnYA",
  "key4": "4SDVC88cFgTV6kUpBLCnv1sr7sjqxEmBk2AYmV87QgUxtVnnkoYqCW55cC1XYxtHcqoGVHWsk6FsduAWW7HEBAWq",
  "key5": "ueghCKEpSFomiS8pj7EWUFCD7r1ZFQjA6KHyQDQroLNHpYeAhHHk2aQQBhjS4F8VseGDX2Qc8qQoWDGfpGQUvi2",
  "key6": "5pPLgStb8Lr4HvzXZeWJMcJDyDxcNR4exHuoGadcEs6oDSaZ77P9G8VEZsErzQ8SrvMWiA5edjhYp5ZUxPbcUe1M",
  "key7": "5VwbKGMs66yZdSEJs83MG2bDiteKXgz6EE6rZmqFuNqEMgLNu3NuvEGHVLSdrP84Lfj5Jv8o3roXHzH8WWvWBmzo",
  "key8": "5vcpZMDDGLGBvYi6yuYPCaLGkmoxR42YxwdNMThZYgP9fz3WFw8GCp1ZnzJZ5D8qhMKNhvYMGsqY8qwMmk98B8L5",
  "key9": "33Hq1rgz39wv6J9rowSp21DJUowfHRB5mJjiBVWB9dKxTtzu8BENuD3PxUnHsuJT8PHDjhEhTMotH4QkoPCY9zVi",
  "key10": "4wLgyufaPyNJNG7XESxzFS7cQRkYhvWY6Thwk8yjSJYB7VMBxx5JLvxBuBm52PXphEdtMPrEFveRMqBmnSE8niWc",
  "key11": "YgASemcqVXcqyF8p2eeqaWAv1nZTpWz15pF6N3Tsmwq4N9ZPdkmwpRq8SKRsuYJZqLDWkZtRFJ6de7SbvRh1o1W",
  "key12": "2RVrGYn7HTdx1TdQg5hfhxQmh5L143TiPR4ePwtw5fssQKzrt1ak9mdu8kVT5pzHN8ZRysupc9zo33dE5TfZvfNz",
  "key13": "5Ad3viNogpiMVeC2rwdnfj8hBURjnwECqaZgEddUchhabmiAVozQm85FWFM3K2KijKj5JWXjgZrNoUveFXgYt8Yd",
  "key14": "5incjRxzLgS3fib4zhErUb92qHeN9h2Kgbx7dzD2GL8nSBt9DmpqdxLVq514LQKzBf7RDbNNymkpYuz44JAkho2P",
  "key15": "2wjQrPSP98o5y1M8MJmVsySMUzYGaocu9Ds5KmtAmBTbPo1tjoUNUVKbWgaR9Y6pLZ4eXeBTSrK1u38i5YWRPZgN",
  "key16": "2G2dYnWwm5zzngznh8GRQiGReqzGMxgZYzzBWBcqxDEBCJDiBgrT2SCNpckoiU1WgW3XYA7EUPQsLUQYbWpF9RmZ",
  "key17": "3HXSMMnJPTnCV5P31iUBm8M5J5sXYeNgaLDPQvghMdtdxgQ93YiznhyubynMtdRHzVjxUHoJ2PVxkzjmTFN694kP",
  "key18": "4KpKUpddKoLUfxKofnsQMK5MhM1UiotTaHDhGyrsuSNqLc8o31ZyTix9J8EZRvAhwPCYZja1hrttSLXoSXAmiA3M",
  "key19": "taC6tv8BJdFeFRMQtWoXmJvkZz2Je8BSY41ZoqhmHgim9F5Q5YF15VvyKXTQFVtpTmkqv9cqurUxUsLExYyeYHP",
  "key20": "5QPpBP5hgDj4jewoa5gWPS7g3ukWCZLP1CgzwXL1ZWWEKomKetPTnGbP44L7vrgmmWGKEyB1cg7uxnwrRRpAaV3N",
  "key21": "4RvBVagpg7ifinquSsxiitTX74HCGBk6aKxsnuTGxRbdt8e7VnCzANQ6ViMYgsyuzeDCUjL48jzwq4TZwJntLuRy",
  "key22": "2vYQ6yjSAfiRUMcCcSHc8VU7WVcN1z7o2M9h8HtBdTHuFHUVUAneMFXYTrJsqjh4U9xkWHdyb97nG4hTbhW9uZCv",
  "key23": "WQmxgjAnkYJuZ6EnEoVXBiky7MP9RziWDJhX4BxxC4pkRXwtQu3AmaihF9NNxm8V9FUfWCgp5AWVaEHkmfa5J5F",
  "key24": "EN8P3SJm54rEryp8TLJtgYfNGkZpKZCFtCcoArqHGqRwUezvxHzpAqVxDwWi3giHg4caZoYUktVbuTo5yJVz7pN",
  "key25": "21cYK6rw5Di3uE2Eg8xDmrfdUHCSmGjaeKTWbL1kaHbwTTaHNm6VqUEoexraFMTMW2uVgsA4WtTYjdJTUGa33riH",
  "key26": "2z3FU3pLvxemg4AbuWLvFFdaAiUkauqXTHjce1NRxBSTxyjJbwBkGACMwrubDHHbK8j1MLQ3mHAYrRk7iG93B28R",
  "key27": "57Ywgnr4BUy1haHoCht8oKdURhpVC7p1TwgTJDbb1mt3Btvb42LMtXDD6237KdWVZ2UmnFbjxkpVhKgRNA5DPv3F",
  "key28": "5yXT6EmUbnWmxvtchpkzZjbWBLgQtKGFaUdWVs1G39kfzkvkYYxWoD2AYzX6m1DjN5sXuYTczwc8spVqkgquvNQh",
  "key29": "2sHR2pUrQrtUBg6XrR6XEz4FSWzZpvkBsuZqy9C3kdmGzTCjZkABhUFTvs13JJaSqw67Caf6cfuaLWXKR8rfTcqR",
  "key30": "2HdEGfA2nCWxo79YmGMgptwh1XfwnmjkJSKfRUz9CiHWvQ9k7VUvUvZ2QMAJCPst8FfJbTX57TKwuZG37GcstFce",
  "key31": "3bFLTWqxyHqka1LVwBzhfyp6swQLTPN1QegdC9wYPRP6BMQw2kv9G5ZsGRMEt863zX2qrcBv4q8nB32yj6wRRAur",
  "key32": "4dWSnu5nigSc6dXeJ7Wop1j32dUPJLJH6N2qcvdvepm6aTxrjYC7ExXD1fRD1eLgqk5PGmSZsSZCr6pivu8puZzT",
  "key33": "65rXxpZMhWiezfBg72tMGtqF9TRj4xN79Z6PNFu2cLK6s5EjL71CzWqi6fYCMSXwBrcwRoFuysiAkw1j2pi14wM1",
  "key34": "PUxJsiqguc1HFGwjFHb8aAWRgfhtmp8HPgrY17gcEfMF7HaHDNKN6sLcrok9WY24yP7a2ozJHXwiMCuELZBfNiz",
  "key35": "QBctogwP7cEm9L1sEJaiforic5Zicj2QPo5L8JRR8VvBxMdQVzTYiXhVRCBgcbM4q6awgXRx7G8hu9q8nyXDs5W",
  "key36": "28q1MvD8N6WgYCMUd2E8RwkYueYGeDYD7mESQb7HvrRzzeYkZZVg8FJBnZKexvEy66puvvhWz1eraDgJBnURioXm",
  "key37": "3v56DTHPjJpRoixp71rYvT3P5vCQ9J9K66QbyWWRLghjwSdVPGRVg7KQNN7iK1H3L47mQF8quPon6JAFHje3SB9y",
  "key38": "C6fWTbVvygiQekmrQoBK5iHKEc2ciCZyHdqMoiDrUD4Wvu3sTorFJ4GnWAtXfs5FGBYf6HhmVUj2hKc3TH87JkN",
  "key39": "54J56hMrMEkML9ypYdBxBxrKNyt4csR3QC18FZNWX2Ps2twUGjJhWgk7Yw6ZeNuMFP7xWFoGw6fpPfAQhpVWgU7N",
  "key40": "oCDsK3gKHXyjjKmLepFeSdEG9hPLGfyftyn1BeP8i9ubKLFiXwVH22c2hmNzVupSaMc9bG5tKYg5RBYVpf5fRNm",
  "key41": "3HaTRuGLqL5AS2UfDuYVg8CWbuMx3jtxZLNaB8npRX4Q2Tc5n9NPpX4vyKyoa4SRBUvV4XJik9g4qENAcZZL2QRT"
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
