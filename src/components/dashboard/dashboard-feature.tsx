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
    "2MkfzjE11k2NDSjFEf36jKkKC4xxindNStMiEM3UFzcGxoXW6dmmWBzzeYYxHLfwt78eK7LQmxTTfmTPTmMYXT6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8qKYTHASA7WP56KFkGjjUSyPQRST1JsUKf3ZbGhCtpusD42wF2ziVBy7uU1Po4fxsQA74CwzCVf3pf2FvKSVqs",
  "key1": "57AoKPBYXat14i33iDufYotwd79hTsZyp7AZKKePQrw2h18hsx5ZMoQFjMUAXZka74mfW5EdiFdDnyxUbbiko4LP",
  "key2": "67jphCoewK9g4FSmAbAdSTZJc4DGLDDysv9xmj7bLFEzWUGr7EESphVYxhGLuJMxnBzxLHsuUc649vaGjeNPSex4",
  "key3": "yZohQ6Ysux2PY2MFiRBk4azfdQ8oHJiq6kk2qNWNbSCipvTjEGNGheckjjLFU4DCrMKBZiyJ2824X1CHk4q47JD",
  "key4": "3RLZyZqNJE9CDNhUKKngyz4uPkPVjivSNZGd6Uu3pc285dCnLRKHNBvy8yDU8MnRqyPnSCxd7RTTrpkE5rh5BA28",
  "key5": "28etGQCx1NHdS8r5eHn6tGXktr3hCWk3LjXeP2qVfoFk5rx4iQEVEwgejW1Sn4SqHvywoLiw6D5THPxkpJMzkQmb",
  "key6": "ukQMr8RG5UApXMQzURrUvonhZUwZeoY2wTpoLEMyZWWKGvL9b2m6bmGxwiA95mrrymY82Vq9NEEPrjir1tgHKD8",
  "key7": "4iiuMhhfSWeVKozbHY2dWUCTHRghSNVG7PebUyviJdmpaL2Shb94dyaMED5gtgbTkQmw65FTF7jH57TPak2RqSeW",
  "key8": "4xdZbwzo8ZCbkUCJNerBsUTPZqGrKf5BqzGYCSBFjAYDpzP1H2YenoeEmTNUytCfu4ggE6zGiZWzjzG3WiYzMY5E",
  "key9": "2hSRzJuJ3NtuAEqLc5H2RA2myXUPjsxZ6USqADgzVVrfkayrbPiCHcu9YerBPgv7wHmh1toUmBtYenu5TkMiHUXK",
  "key10": "xLpeLAWNUEZVdtJkWiexpPCAkwwnFFn3KkSuSYz1VNsbM7rT1KjeDzhpkwPfBCPEXC4tSNH6YAtdzWQyMM5TA99",
  "key11": "2FEvztTMJAESb5jsWfaGiTyFrmrWmZUcsaDs5gzYfS4UXBMQk5bqyh88URFtuee4t75R9wrMULAEmC37vtJP3U2D",
  "key12": "336iJvFggQBsNcb9PosreNqkKwWHpgriqCwaGstmTE7frti5wKpiBU4EqbmZHgZZJf1AodBGPgbPQMGXCKjernrm",
  "key13": "2P2LdtY6axb1S96nKbEdQgrBNs71UHkXu73JaoCHsv8YcZXVvRGVdBLfZzLjE6v3WHYBefZbkUUgGz2tUhbzjxQb",
  "key14": "5NWjmQNZ2JPqrmUvVCYKgFrupsvF76YrJ3992c4hK9rQSaF5AEf3jVfFLrY6mm9QhBnv3L2DrWwP7q2rGBX9cczY",
  "key15": "MiXYPYSmPqthwNzRg3KBQ6BoY4FSBH9cjxwGh2euZLV3FWpDsmvLkmD1X2nSNxJXvM7NqtTPcyfkEfdoPfG9eVX",
  "key16": "3q8eYGTBRYuwUesURaLdbXcTB7R7f1UXyKXci9zmRyM6WMhrPFN32rSAFBNeeyitZGYCEwXxCJWMeKb1fexBWZ89",
  "key17": "5rkyYe3JL38FaMjXfC7KuXxx3s1CZci5yMFFpRuJKxtwFifXbXjomLTqeTyF7JzHecx6vGGykADpkhSSV737UgdS",
  "key18": "BDgguNbFoGKqz8WpLvK2soLqKp3qP1xEA9XTHZ7JmdWFjiRTEDvtpJ4yrhj9hyNNMx3zbnHgd7k9cbhG3LuQeiF",
  "key19": "2dzBi8RU1TM1u8QpL8Kss7CWWGPSkYxPm12ysPN8jzM7xkkTN3md9dcAuYjrk2M8HkpH2nJWugYtcQJggELPmgSp",
  "key20": "PP62wR7DXzMPbRpyd3HcNifR7BE1UKRV8ebLWVyXQKq5wS1HHLXPR1iZkMCWT1q8kwKcmnLbXfn8LdmAUypwH7S",
  "key21": "3rukimhDzfN6xapYmRWrASeLrUBsEnWBQPkNcAzsmJst1HV1CYVFdd579ddfxuLiLdJtBCHAn2pmeh3Z97pmaYxH",
  "key22": "5psEAKcj74qjeEXFEtZh8rykMMJXR1qAoDjwArbPoVoUBFCoo3RHNd4Sv6mhUN9udnTcihx9uUrDGYsE83hn42pt",
  "key23": "aWLB9PbYHToc6TG4dfU8zvYmxSBtVmMDxpJ7doY9iFvnKAE2DaWbX4C8JBqgamNme5MP1bZtgzPFeZ7jPkbEKRC",
  "key24": "2o7JzPEJDJCt4KMxMnWfP3KPszkmtY3UbFekoq29SLHU7Rg2775WQfGY8shEwrYFfNtyhYzQ4RwLEnih3NQYi1F6",
  "key25": "35rMw78XWbgbFF5CNWye3LS2tvcFCPfJgBAYwFabjwJU4eHFosVpDHu6oKTCAk5B4tuYSejn1M7v6ETRNUrWUW41",
  "key26": "2VF6kVcNkLGLoqoLnxdpktt2rtyX5viDozPFKAyptNwsybbKpTfcghd7t3f2KyF24e643QLGLvBTQZn3KexyWeKE",
  "key27": "RZLBP8SKhgYUm3sBuCV4kCN9kQU1U83cVpwbhd8r5R77tbJa9aDnnsX3dU1kxe9eavC1w9VJgNUnqaWv9SZw6U2",
  "key28": "3mg2rRWfKemq5eTPKoQTr6uqN3GsRYE7Km94HgdZy2ANWiKF6zsCVCsSSRs6wkMYusLEeVpus8ng59G2PjhHxcsA",
  "key29": "5pibYJL77Ls8gUryxc4U3BSZ5W99etcLTub9RbABGb7Gcs9EZm7tdWhkR7VmoehewGuhfQnHEYu7f2dUS42uzQeu",
  "key30": "5bEx31bu8CjJfpx5X8R8nbxgjansqW3BefD5g6BEazCBYTwqKQNhnhcsCJ1i4SMJgUXCfkpJBFprDDDEaqCghVu8",
  "key31": "3hi7pcuC9HcuQG2mQ7fB9C8FTfJfq3r5qFxkWM8shxfZE9uTXX8d6uPgZGWq58hwtxGYszp1qvkJgnB3DgXPxrb7",
  "key32": "31WBP1ihhUcvketa5V56RJcW8iEmBhrr5S1jVSsxXrb928xUhzwH1r5eA2ja1wdJQP1RJeATpWn77GYAHvxGHpqP",
  "key33": "5fKW7jHf4ggPmunxM6dUttYw6Vy2zpLwQtqQv2iKNtiqvePDrGsNSCgkEiBpswDrmzsfcPaXeDD7Xf63XD7GtenU",
  "key34": "2CKKW4pWfruZ9N8siw7DSrPAVn7vEA6mX9oLAaXSyUaTA7mGZDds3ZcujX7r4GKt3WptVawNJZ8PYJQiDZobHcVh",
  "key35": "66EBfZ9Koikn18LwUccJQTgA1FRbLfcUwjhzx1C5umBxRrTU46ZoqTJHEx5pMJY68EaAPZn1k15BhYbrU5nGTnhx",
  "key36": "3AN2Y9jUjCsQimiA9CMv1fR9gx5aaeuZ6fCyVm4fvzqvw9RyUapfSNa4LGWi726sAPyfi7sGB6q79NhpfJBSgUQp",
  "key37": "5K5RMMsvUzKnEv2r7tySezbCZL3Lec9ukRPg1DNRmA7dYuyfXL37a3JXtKjkwGTRsaVxViDvEGtdV17Fix2Nd8Qw",
  "key38": "4viceuyR5zYFm1KWMWhBNVQwn43cUAymQQuKo8W7YsxLZYjzc1DfmtRNfp38ugkBHNPfagFETZfiDrw1jAAFPRZ5",
  "key39": "5r5xudSHiFzgEEYgZ2iZq39G9qr1f5so4VUQxM6p1KQTE515PCBwDdbPuxJUU1SXBVuDTkfbkrsswsiHDJxk45Jj",
  "key40": "54pcwZRKqVCaxk8t3ak77EsKB6gQ2hVVLoNBg631kF4tSEorPdbNgf5eYsY7VoziiGQj6moU4F8CcD6gDuiJjUnd",
  "key41": "2iyTKDwNMf4vEkA9oyhPiYHWbed9Y4RqsxRFRzg8hhUXKsWfE8tddZ4vGziVGgdPhkTVW8FeMBhAh4YzAK7hxgUe",
  "key42": "3Dfrpmo5GUvpR5wSrZwWB15Af6EU87qpwQ4RH9XUC77i6LtYatuWbvgh7KvFL8w9CtfMU4eETmKjAqb3rmxAEhfn",
  "key43": "36aQza9Qfmsnqt2CjtmYe8MgRf2Fgx2L8qhzvV3BmTDJnAjL3VYvVFkyiLC1BKZmWrF6D2d1yhYFTJkudEiWb1wU",
  "key44": "pC6SEua2jZJTBbpFt5fWVch4eoEGxmXK36hoRC8ygmEtxH8xRhrwB3CmsKQ4sesiAwtN9dbAKNoyM42w1LgMyhL",
  "key45": "58k9NkGg7pJjM6W9qNrLWyYtfB1WNdThyJZhBH6FHerH5PhFy6XSG16a94spQyaMc9S4TEPwirs4D3xPta8qAY7Q",
  "key46": "4GgSDoBJtf94YCWPEUxm1NK1d1eqnhtsn6AURZrwBFgxN4vCBnzV1P7aDQk9VyBD61cULb9RWB7sxnnQbXvzgz2f",
  "key47": "5Q2zA4MmbZKEKyRsjXtMKPQycJLth68ERAbS5VMMDDUUS8sPNykphF3RQRRGZSf9iTaSYD7CypPY7YDLakP9BiNw",
  "key48": "51mvwUCDnTeZ1NHAn9yMFcEjkrWCBfa7SvfsWzgvRuBHpQ5Kuiv4PqbDQWVptktf6n2zCo9XQmgSN5YY2UKG1wyt"
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
