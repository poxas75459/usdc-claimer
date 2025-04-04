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
    "xNmgLfeLZxUWNzDUCHQ4sPRvC5oyUXdJYvswJ8cMSGgdjmyPrCJgf9AcNyvHMzKUnATCC1VJgfWKLfCvYfEpf5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fc7KL1zjYNovhCzkM8u7u1PTgtJmjE9ecTEEz42vD3CwtKU8HFzqgWVrKmYRtkmiHeqwJNTN5vtwwNgrMJjexk8",
  "key1": "5X6MKt4krqmdJ8RnTLJ1gETsWogxswpdTMv56ctVRyJQoJTJQ1wxqDTCsPE1oi2vctfxyRrWWTCjvftxsDKx57g6",
  "key2": "39TJqGx3ZdHbUh4ZAA1RKsTYhVKu6XBMuUWVUbcq3dZGjNQDNbVSiAQ1LB7DSRcNUdmosJaeErPLeMtH9iZUAgjz",
  "key3": "4vu2X6ZSwW6JmrCWX1SvFheT6iXsXMDfJkrw9bjEbqsJ1GctuTRoeAPB9rkiMs4KscPngwNd4kxs19NGMFVrsjFe",
  "key4": "2KHySrHCihodWuP8D6Vqw3jhunxtnJbG54yGJU8mJDwEyTgdFZu1oDgtbyBYJvbY6KF7URk4drY8JEdo4LHPQj46",
  "key5": "5Rc8zWuqZw8tvZDs1kvkEKfZ7hbP4LCyiRGVgzTC65ZQ9r1h28TRrakYx9rnnj9v6s6M9Vh2zPaa8jGi1RHyjDyX",
  "key6": "5uUB9CcozfXXgTkZ5ZzPsSrvXKRvyNr8wuAFsEzHVXv8nEBExioZtd3Q5boewKVUGKHxM3VohEvkN29rK7pnYiip",
  "key7": "44qC24bcUGPES7RVDP6GnwaAWH3NARTeTRCo4vnS3LmH68UHLRXHwbt953BTgBiV8A853NeJCzwoXCceMvYv1Scz",
  "key8": "2BdVxZ3GFC8bc8iFNgHh6CguwGaN48WFRDEdGP6SvcHg88MFvFCB1dcCed6Grxv5iptt1rMAMuSJ13WydsHSM8zF",
  "key9": "24ffyAsmRDkbxFP2EpFNSKnR6UHjvKUeFTouuxck4X7EiWZXmXQNpRSTRNm9C6kvdhgqjAKZEW9vBXj3Y8193uFf",
  "key10": "3UmK8U4VKe2kJLbALP8R5vCQ17oWjR8sgXMMBAZKV79ijvWED3kHirCfEJ7ovM4YBUK5pbhjs7bJM8qaPyaUmBGL",
  "key11": "5seQ2mdVRFbtWAypchG8cXtS1M4tBN4ZD4S75ZGKDv24hNCTKSPXUwHiGYubtGXFhHihm2JNLmDR9SEYavsxizQA",
  "key12": "53nckD2YDd6EcTMnvWq6Yc9c1GuRdje6HpxysU9pQG6zUSG4MwTGd8pPfaZMeiFAB3DqkpA6ooPdfTNRisRenhL",
  "key13": "5UpE9Nb1Ax7WHaw6ZaHGvkVQ4nWE9oZzTEpHPMYr2Tfi3iaW3i5eMVHPbeKTEb1KpSFuBrnFJbXeZijPgLXXoLUR",
  "key14": "5pnmSX5fxqdpg9qxboeKKCgrYSRkXikHATgpYyHEagLKzAgRVXkZyhAzMyDdJvdCNe758JSxBsdWjhjZiYoS43ZT",
  "key15": "3zp6p4MgTHFGeqGgFjyReft9iPLpYuEqxP9b4i4AjNZcFFhzMWH57ekJ9mLcJbEoeUraXbxJfFja7131hiAdkBaN",
  "key16": "3TgjcXwk3PKQhCzTxafybKG13YZVnFrhV9JNfNkdVz3HkMugZxpcz3r1pYD8Sxrv8SbJkfmFJ4ByUPBpAEtX5ce2",
  "key17": "VkjPnhCvhGZJyYd9AL8r269RNtDZJkXhe8SsecXTQpsUY5diaFstVvAZd6ETktmFjkg5PNp7UweahNHzmNRbCwX",
  "key18": "tGRDqinsoriHeKBGziTmeLy1qcdkWzk4GWdAn5fQZ5Vk87fXfZgns1bJM1BywaGGUocZWrXkFr9zjhbwybxiUyZ",
  "key19": "2YzXAffemzHTJaXaNAxBHwSym3bcBdXGgv2qqsWCxYDW1qvShZCoMqp74mnecDvqTRhYYktGRYS3eiCMWoAfcNae",
  "key20": "5raK2RwggKmsmxLXSFmDTPHeZFUutMY4g9rGSmHoaCKZnep43qhJUfngpX974dhHt7UojrAixv1Ma51Szkk2X8ni",
  "key21": "4ejgewThA4bTLGeuZsafzJECqWoVnakRGAtdYUNuLgi9z7ZFRCie8D7euJ2HsYTc4bwfxbVhMRsx25Ne5VSe2Ma9",
  "key22": "2fPUD1M44bLfCkFQ4EV1iQ8nNtWwXWmdNYWccZV4fEqpE4xZrZPtfLxxNRNSkiZMNYUA8sC2SyUd79HBeKvBw2Pk",
  "key23": "53LVtqiBRDyEKh7baRxtML1MWGeJe2omM6jiN1arGzKj8wyvNxk5QtZPMVzmZyLGKp1P4KYwbmbJpjBvKGY1iVaH",
  "key24": "PRE6UPLSNHjwrHNJm9ZUySn2atdT78NFBx19bErpvxXba3tQCt9PpSG7KBAoss75gLTuGqH29NsKVXghEw2d2id",
  "key25": "LfkY98aokK1YMRgR4YvmvScxWfw9GsmghCjae4Yid8LxgEAAm5qjDoarB8F7PcuA8oKRRmJmS3j5HkD8YWrnkP7",
  "key26": "xfK92ahLFLcvy5bttQVxvLWYqpwazSarsMJ7rs4FgsEBJBHfrttvBdbryh6FgHtHK1ztXQiCLsLbjKP5KM7GZuD",
  "key27": "3NUdgWyfHaL7v73ezmBYTGNMQZVJruzDBG34VxYQixCiPmvjbWrMT1FjJPfoaDANAmFZPiXMx5G5JSg8zQDyrn6j",
  "key28": "rM6CFMNU4dQs5SqL6jsCsrNdPRVM2c2uBZt3LzhtQ99Pscw3uXbQZKsykPjuJNjCKdMD3m2Piug3VuvJQBCHrqa",
  "key29": "3yBGdns79jqFpUcUkkwcEgUtMf5WTQ9KmfLotdUibWAFDouEkzn4kqhAHWnsYiLsUJcG9LLsLGVFNNR2evs4WJEd",
  "key30": "2MyzSyqZz1bq2HXVChW8ZdBmxeeFfSTiyvDun24RoPb2rgJA7Qr3oFDQLBdaQb3qHmPrPFgXqMbRQiqwsdzpvF1h",
  "key31": "pK4t5qDBiJgX5AK6Gb7Bm1FuDQu8qoxqjYB9d3acLpsgGpKnBNKC3sx26xbWRDVQVEzQ29nTCw1zUTGpLa8WAvP",
  "key32": "5cMGwJuaTqeTtUuhxvbarR38NXhg1zSay1sJNzVRqw5q4gHjvPi7McEjXtCJceq19wNfQy2x82Y9rDj3oTnUTWaT",
  "key33": "2UHm5VUm89EbYbbV2EkLJr73RbwdZhD2yubvZf1YUF2dMdXLrNRKnssg3NkjpBUfj2iaCrjNguaT6cgMytqcEgFt",
  "key34": "4DgXGweps3iT1bxWU7ovDNaUSQNm5yQKWCDhPkEJLqSuAe9QDRCzwUXfuNDhhL7RffTkP1zeA2mUGoXXgsoacsJJ",
  "key35": "3rcynuEz5oSeRNxy22XtdFd6PHyNLJYjuNhrkGS3HPUFa1PY29yLRQyNMYPzfVYjTfVgYH9zRn7asPkmeKKX5c2i",
  "key36": "4hbeJF2vJ72Jg9B43U7cJaFvaKD1jrx6FHTSfayqLUMNaQxRbeoWnN6txTxm6TNsPum1Uiesjq7Zs3PUkJXpsoN4"
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
