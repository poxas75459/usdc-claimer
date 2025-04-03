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
    "7z2umbRnd5rezG4MxjciouTdUTqSen85WMkuAAfMr9Nd2PLLFfTBaLiyfYDxVxBqXuYbt8R8KMtNmb1NJCRPi91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUaWQYdrriURreYNfwEi3D8GcatCjTfHS8LnnegzYhfXiadGkoGXRahvH6Ln45UmgHKRtHHSaHagg4Wcx76SZFY",
  "key1": "4Ky3ihcD4XqvhULt3BzYd9dJc6NZ97JiYGHHxHSBBTGhhBYAQtEUoVaRNw5yxgY6CzEYtCxxZtr2Gx1GnSK9pCVe",
  "key2": "2jdkGuVkdm8Vv5wR9n9nk7NNHR1TtNjs6gH1k9NcAEVBkvsU7gBKretwcZGy3he18csAsdCd3DPeYQCYkRrE2tho",
  "key3": "2XDkkLC3VuAbmgcuV3jTXPSYTgFyWbCekCPcUG1EHg9wz7V1ugmJGpavH6ecPXZZG2UkuSUhxunLkKXebmPUA7d8",
  "key4": "5jAxDD5rELMtmi4pZrVYCjESK9mrbniUggxNUMsgd9hfQ4XE4BaauiXJFCk39isSMMrgBdehoNSCf95RWTvQBeMf",
  "key5": "3scqY3tSSNtA24YgguhpaBiRS7KCn3jq1tChcebxG63HuFc3zMgdjr6mCpwuiWRvRRFdArJZRtuy25nxybNynJUR",
  "key6": "VVY3HqLZgCbB1Dr8g2xZGvauxQFVxBMAVqWvjzKNnHTQs7uSjTnZz2HwcFNCmt9CPt7pFQdzzoLxMZzpbaGW9Db",
  "key7": "4j5XZna17moxtXNrUYFdkY1571eYQ6TNNWoahJaKg6JtPpxDBjC8At3gbMKUrMv5rtLQFdsJQcuW9oGMSLBdUcHg",
  "key8": "5MUXzBFAttWw9CJ7ZpXmfsHn83LiZYSDJoxUibymYzY6ZRj4KLWziMTdHNzxGBiikK3eirqVD3VuRL7pseRZzdR5",
  "key9": "4ddRqC3xsgRwvbXiRHEjb5GwTgicCEei1YNosqt2nfj7hZG9ySPr7XKkmaARbNixj3oHagRY4q31E8fdTEUHWMrJ",
  "key10": "yQTriPaKmVeGMs9jfD98hr2ATnSMtKsZj9Ld7iLyfFiHRFJBcHbGyWTf4adnKv65VFKdN1bypeaMZ3djojBXbjh",
  "key11": "csztNyvubV1nfiNqeQoBsGWiiJ1pXQn2nBFpYh4j3oGvuFEd453DD8CuD2VLEFFQsZFec7sL4D4x7ZkxyxBhStg",
  "key12": "4DCEJkZNxUvEoZFUqRZp74XTjRbWxY5VatQZiHw1MDXS1phDnej1zYFpJqn17hxQ2ZhXf2QDs6RX2TZiKMVWuV5a",
  "key13": "5hzE9YLch1DKU6NobSbSD5QRLwMAdcD5xMEGZcfxXD44UhgmikipzC27toDv3fH5AakE4vr8aBmWGa9W8LYQVUHh",
  "key14": "4wKxqFUDmGBehtPqmG7HUWAmMwydsWXvr8EBC8VuK5ok2DUuc96NwZHLTQQDyFNeAgUpGF4BgUEyPcrcNrqL9BcJ",
  "key15": "2HvL33qtGD1TZXYnSVe6d631YXm6rAbP54QfHzvfzX4zF5s9B36oZGmDarDAJoL5dV3ud5HW1GooamTgiVsFhGfy",
  "key16": "2rFZrN28JQupTvpeFvk6jgMtjADLyDZLS26yw7PmN7cHYpogQ5za35PHWaeBr3DJ262SqXVzJCFaAY9fpuDNpNnG",
  "key17": "3kWbB72k1s7ow4HtPxNcFwzNsr8LYGnMQvHvmXLFSxmMJGx2oMGr2Zrh8sw63nHCb5ZE2kRZySqH8EY2aBFh7jRY",
  "key18": "21ihTsmYAm4HfHyVAHyTHA7fpJUg49dZw2WdHh18eTGRD2T8hhDsGvBeSEAzwLV3PYyxCe9ZVpSA4AJDfQrJKBeu",
  "key19": "zXqj2zuYR36ve1qdmFkhEBkzcHnuos7Zg4tGgrqe8GCKDpEG2eFj94hAWq9QiA4McXLXCgziXBnMHBAUSdmCG5i",
  "key20": "faVKz51Y45fSRfoS2Nf9xBYThg2iu1EbJgaXT4ijs68eXs5n2bLDh1AZ6FJizsmfDt5kswmr6w5de8HxqdgtvkB",
  "key21": "28PH5DhAkQhAwJJhghZapFKpXM1CpXzqoMBuL1JsTiz4uWdZRD87wc6vvETvfN7AMDo9Di47yDfkwu5Q1epGbzhe",
  "key22": "Ho7XupVuMAvk1g6n1GihNKWeqkGLreJhyJF44yRPA1avKxYxPR2GV9ui26WTZJ3wiGP1mqYvdY6UXZDqfrzRp3P",
  "key23": "5yLLC7FJS98okbUbbBbms4VpLYtMvh2MZwUbjYCsSWaNmKSqP7Ytd3DFdkngBBRu5DB8i11ypzbN1qw2XYy4CtuY",
  "key24": "49Z1z8qy6xrcLaYAxgoPxRQgWXsTZbkESbXjgurEudTLDrjchEwzZ5bWRCwxzMehxzYfgV4pH1i9KScTHP68Dh51",
  "key25": "XADjrTmeBF7HX6fnLhECwrKTJgX2BJD9Ab3rTzRJov1wFSeJG5yE7bB7wR6shEDwp8M6wA21TsXrqZ8osWx9ShD",
  "key26": "2DzuoN4Uf9ktMvcrFk8VidEmWRXaqvonHrVuq7WBG1R6qyncyRgszc4uZkhkZde5mPfHhKjs5JerxCmaSa3ptZwE",
  "key27": "5pKStWM4MTwNRP91jcQzmX9LbWeADkNjQdKWwBZoBDDU1bQQNMgWATf62qqABrZYDRnVznWbdeYd3XbtcDgTvrRx",
  "key28": "tFgrQKi5CD27LRLjNJg4B3SqGYeLUBmp3bVUZ8RyV5avCTQjhEAu1p5EKK12E4VmCrjhVswVcFqL3WKQjgZjPDx",
  "key29": "62neCXb78w1hxMhA3ov7Ucc7G7YnYqSnE3sf8bEavkqzsssgVw7MuLs8WQGAtKA42a6qPmVsuUv5qZEQXzka4E5L",
  "key30": "4Q5EThpJfm6qxJDcddrVTxnvA2tTavBL8DbdSTs8QBYsTaFNAHmj2ModZG9v5Fm6x6cj1UxR81DJCzUQFxrTEBs4",
  "key31": "4HpX6pWA7EigNtdiFrhsYphQCr4RtzHKGVve2L22SSBK6Z5aWAQpeouuvan3tkbGje1VYybywjqumhL5J6Vkba9D",
  "key32": "P92ZxnbgMNt6p2qMgT31UBXkLYjkXhmuEYwpRdYKCZTZ5XJb3PzjWLBQxd9j22q4Ai5LFX2JoDNM2zniiMKkPBc",
  "key33": "3vQsqh54LenZvvwcfvFMwmQibzsGjRFYVK9WTx9nXFn1T9vDfj2V6cj9QjxEg85MqskpRM6L8SzwcV2zS7bRmUFF",
  "key34": "4bJJ11nazQpHVNnWdYTYUufDcSMNrR532ZfDYXa3nQSKcUtxoUu9Z1zFy12Mqt82q2HgoL8sraG2dMo19ANmvSwS",
  "key35": "3AaZVvwxPbpHFQb8Fi82nr6xByeRox2v9sfMpRhPPw8Yn3mKzE4Pcy1mqtNydTP54byHo6qriMVCz9FjNHmRNPaD",
  "key36": "335vMArpjvVWDmHgH81jjH63QGmpTcBrkCG8LrGwsVeYSb3PPCMZc5DNWLXKaYVsEyiAXxMQufDqoibzJBzoGqQ1",
  "key37": "4HeojhANzvhRw4QgsvQfYfcLsr6nxUqPW8GEKCcFChFMpNQQdSLoSXvzLCyurK4TWNVyDWAna1QNH4rn3PBTgmGt",
  "key38": "mmT2hiuhiWXzaK4PdcukCsnbBUjNmeCkWipTs5CDz9jfQnJm4kANsTf6YnMmLD2w22vhUjecP6J7DXhvpsURh6s",
  "key39": "49v2smLzfBwTgyfPnp5BmhYpfc9qveitTTfzvZ9LCB7F3hjW3XU5f4XXCyKLs7v8CVr4wuMD5H1GL34rXucaR3zc",
  "key40": "4jCFBSvNqcdyjpsvavnXd1HcnqRKuejLAfNWYmpEWSFEijvwxzTtLQX1M9UxU2bgJo4YAzBQ14aQwEiXU8mgCB72",
  "key41": "2kz23QgNhdV2ncajJ6iWBX77X9bRfoSAkKnoG2AStvSLrEn9ABy1hqehcwWm6GiSyANHbpyaZRDxwMBoH6p1c7nv",
  "key42": "hZ4RqPgMEYRsiVdFpBPRssdUMqPsojEZvNJUXHEChT2XB18QY7EFjmrEdZfufwr6bg2QuCE7xijagjxsr1ri2j1"
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
