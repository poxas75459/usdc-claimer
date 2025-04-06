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
    "4NpfSp4EHn9peT5rBUtfE5z86QvvFLRfKQQ2HseBvjZ9ZRLJdhwh3NeZKPJNtoU7cgdajk6eWFZaaNg3EWR8He8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7X3pVcHtw8V9fhrty23Wu7XozvwpUXrztSUMPyRw9tR5iJYgZZLhXJzVnmnd5wqBYmXHx3nntkRyW9ahgHT7xtz",
  "key1": "26iST5UvMYBUXtnzJd6JyMcYvAgBGfkG6HKwUYQNk8pztqe4BxHz9oidLPpL79jjPKDrkRGvccVhnKNLZFo57qVr",
  "key2": "yoJYHntJ5cU6wtS4jPCLLCAgVvs7rC6dYXRRArjZpd29pezRGGTQu2QY2EAtdHXawGRHYPGVkbZBEqNe4CWXMze",
  "key3": "RTfMYSUSRs12wZFj4RTu6NEmBob8xp3gJJzDi1JMSnSCj8Q9Z7svkfjQy6Qs33uEaconAHPKoUkMf6XcgMh1QQH",
  "key4": "oWTdsXNrHqmWuaJW9YS9LH8eJocvNUJXJ4XEGnGyyD39avoMK38N4gZXS3Ff3vaGvSPxZjuVzaTU423NyPyEezc",
  "key5": "3dCgi1ywkvgHxXAjj8mAT5u8upvqrSXBvXxzVaWUj3rWntSQpLtMaG5vGeQVi2zKL6h3q7cfex95vHwgAdwjWyrU",
  "key6": "41k6f1ifd26pmBXkdKkhHm7V5UWa96h6Gvb3KMTjdQiBjhf5WYZyeqXZotPERRxZcccnHeXd8eprE7mGCyEfedHb",
  "key7": "3N3NwZhyFaQ1Mrr7aJmmEj9Zb7Qb7VRLC28CjQbNifQWSjdD2svc8Hjewphh2zHP732iuM9kNwyygouqsRq3CFbF",
  "key8": "2129sUwgJ4dSwyseSriMj59Xjg1pQwFQxhSionq9iQQzPiKNzvixJVEurYbPUfrwVJHHewLNys5UN7SGPGrYyr1Y",
  "key9": "63VtSnjxTWucvs56CbT24xt78teJC4aSFiNNAoBAUc9gmSERDRQ8719tpyP7BbU8M3EGze89mSFCiJv8FGeQsc67",
  "key10": "4aKzhDiEVhqwumycnaQFRfCBkXRYQMjEfrcLXQr9v2bSPANyAd4hxCwxzS3KCieisgTGGsfP2YjrRsy6wRcmPHrz",
  "key11": "31LaEse1qcWq8Cr78e7BM49Z6UvuFEXqQWYMTxVVooR1MQXT2pV3F1vbGG8vSouDbLePKnHGzq6hjU2swE7QyHAV",
  "key12": "5GgUTnbzfEbTJG5qTMsdCfZf6ysZk7qdRTDADwnPQ6NaCcFcXqLcBPbeipVdBvszyw82zDEyNKBEVuurUPUvC4jy",
  "key13": "3P8zoNc3EaViMbnJDdqCkyh6kJFo3K9jFXC5hqX85r4M7rL1CKJKG5LULTk5BEFQtba3wwCs9B8VbPUBMaghhh7s",
  "key14": "3rGVvJ1dsLzN49omPi3LwUT5pm4get7Cv7RqWq2tw65SNYzcvWyj2EHBPrXiJwfToihkrNCqSsKVHwNMjMLyC9pL",
  "key15": "5Eug6AGA6nWpNRJkXHdoyAE7oXjheTcJxMgF3api41nARk6xKeadHZJaf6rCUeRajiMaDhMF2GZHU12MAUMB3CAg",
  "key16": "2gME3RjPKjPnaFgB3obNU63sQFbF6DbUy6mLcb5gQ81kDbuMK4KyA4FUHb5n52ZhKTtxHJPyxrNNFMLhZWcUu3Vs",
  "key17": "5hUpPR4AnUaQaF9WccyGRtZZ814pqtzSC3rnsu23bmtCNWrzCxhAvZ9sJ7EZyySaL3vippd24H2xBZcL8uUkxNvL",
  "key18": "4dcuv6NAZRkqnSzhGVgEd8vkMTrrMjL6mdc8CjXC5JZRsMyuzfsudVNC8TGjaFBZdW9UaF2KKp8suoyJ7D5sNft7",
  "key19": "4jQPQS1bmAk7bo9w4B3Gq5beytue7HtqGS73disgFs4qVxmsaywj6DmKu67gsAdBQjBENhC6G2u1rv2zSQ2QTbJo",
  "key20": "66VEzHkQrdDaYP9wMn61qcxRAYt1K8ZvQPXNhsfaDLideEysNUoUokHJSgPw9CpracgFzFp6hPTx8yfwCKPRMA9w",
  "key21": "251HqeVqz9jxNv6GG71xKyzgDCKUFfDnn1r4Pw2eNDiLVskpaiR5VnBG7CzzSKExhDLeWqJ4FkyFzE2kRhuSD8Ad",
  "key22": "ez7D7jrEVqxt8mhcDdfxbE856FrNWdq2mJeguUx3DnaHuVYuZgFkDDA3cfay7TABAxyq4QzR83HXCodBbQf9vU3",
  "key23": "3VgGn5v9bjMB5adgwFbZ3maKFawsgw7mqQSJq2jyvKcMDegUw6M4pUJHK9zB1RkgY5rte9CzR7rJVNgX8EoiMuLt",
  "key24": "wxToohGj8KQ1F3MWpoJpKhk8rfBpJAgPF7rdP4kVg5QBEJR5L5oPFKJVjwUV5JGyyVV49PiHaTh9UAMDdUwzRMv",
  "key25": "45tgb72Qq2XRoAMd3YmCVVRZW9YJ6hxAebq3ypbtAHiCKWscLF8wcKhu9nkAey8JxDQZ2vnXjLpyRVvZrxLdLrS2",
  "key26": "5qT44HDEgm3n83yngX6rFn5bRSP4h1yZhA3XPBU7J6K52HCZta2dQ1qUtU8xeJy4eicTVArAPAJQhVVto2NUVFDT",
  "key27": "GA6nkai26mi6oCMq53X3P127PNrBdtteK3GHt1mMxjMYBNqCm3GQFDngL15jXhUAVBXkQvQpzZwKdVKRxuDgZhw",
  "key28": "2PU6ZH3nbnRxTHqcaQdBbu6voKAS5rzxUasd7okhX8Y6Ydo7Jp4CLRyD3zdEa4AkZMfpKzfFRPp8Rjn5M2ciChAJ",
  "key29": "5JB2jRj3mkguCAZeRQimMddN7wFAKHRQxsVazogn2v9rajB2fD1VjPjhKZbQCXqrdEeTQmft6yaeswNhBFhqjoAy",
  "key30": "5n6PpTqmF4uBAEHZo2ZynGWiPXVLKyoLGg7QMQGc7vw3myX7LExbkXtP56uz14pfkPxZPVcv3UZeqQbSDKMf4RGm",
  "key31": "2gSvvGfE37kS8iXPJpioh7D3RyJ1izqDeoPjkFjCTufjFzj6uY3qTQk5mu5GceDZTgtgD8F4bFGoefa298Z3KwJZ",
  "key32": "3KSA2nmTHX4JfDqSfiQqSHdddzVaZFxKGiiegLtRA4w7YZrodKSvNZYx9jqHDPA8S5WwZE5uHBjxPeNV7eFbbTwJ",
  "key33": "5HPjojogzyNocxzv2aTh9bwEjHY61fc6K7V4N1DD9czBZTMwBbWpeqTSuPDbkNLmVWqU8G9ir3cos8opN85bqWJG",
  "key34": "2x6n2xrJv3tRDnZgKbk9f99ABA8YR4BPzWZictybTknZsjgGouq7FgwznnMV5tGQP4vWJA1PFAFZA9uRqKagV8Ua",
  "key35": "2LYcdCdJtFouzPboQjB4MSRVWGrNhBGx4zzNeqGfLF8RptFLLZQnXkwq81Dy7tAbDHJr8t5jFH3ULf8FhnD8jERU",
  "key36": "5k56G1fkCaUZyJXJjGAvPMiquBcko63n5BaKmwDuzPmSpiemvkt9zTa12V4WX8RJ3mRd8J3hPNPdNLTziJvLWRok",
  "key37": "4CWxBR2v2vWTHsVFjgSzAqFJko2FVT29LonuNTPJ9DQ1FXKVa6drY3HRu35YUhCqv2z4SBDnfTUHe3166WGDhpFc",
  "key38": "4zhkoVuHaFqMcEPVE5uU2bXGigCJnEXLxy59B3W1ifRXC73vrP2GeY1HeyaSKBcf8w1jij7Tq5ACNBZzwnAqWPJA",
  "key39": "487BQ44EZK9esCx87NUKaDFRv4PTD5vzDcEm8cp9w9L56YFCvoV6vAUZdvnLzskkmSi7fD5khZmoHPtjrSoymwqE",
  "key40": "53hsM3Q6x9YSus77UccK38Y44eRrurAYSDjxRscdfSRdHDwQzj7Xf38MrRGSpqkQ43QVbcUtUtq2sus7bitEag96",
  "key41": "51egG8K9N5tVuzQtKCmeZ8aEnnBCYQztjXNFACYH9fKBhUPxin9YGLTy4Js24e3yJTa2Py1pByVZFT1kfBqsPbaC"
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
