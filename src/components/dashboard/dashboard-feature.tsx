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
    "2ghD4AzGicqfQpV9vmT3t7XDArwMrR9kJDwyFvsWP1LLydzMGXgVAp6fqELfZqB6nfX2Xj3o2AdJu3gESxSdj7fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xa4xoMKHAmUuSia4KiAEwsZb9NuTErADKEkfsyNJM95PQ6hyPiC43n1scPcAnSXEaqRvGqLeqmvXBHqThrTRx3M",
  "key1": "3LDVj5athSnLRapWhRjjCxSNQssdhGBxYAvxjEymhigPgV3nJE3bcgRQK8K8puLXvnHm21aycEUeNJDQZRRCWjMp",
  "key2": "29oZubv4q8GDVpAiL146JvQcXgSecfqMBVXUAevUHb8DvzUfcidLwV454LCnFkDRoH33PJ4ttPFEXV7qmFVbtdLb",
  "key3": "2puxSu7RkD5a9NeaUS3aTVxR3ddw14NrJMoFcfV4a2P8nVBTjqoadNuDRzRFMqqsSkKHEWVt3qEdmePeCghLffgE",
  "key4": "32frVNfRTNx5of5wZUvwHc6rk5wDh8QcuvgMLkFSahW8RjRuWU6MpQr3mKihZj87Vycpca7sAYmXf5RCySDi7wZp",
  "key5": "63iziQHiYGrArD4vnmUi65r6VB2HRE8UctF71YsScbnP4Ws64ug9Lb9EEDs5LRvxmdvMhoa1MRnyrLAYhjMRxjwp",
  "key6": "tqwzhovTj1grXE5SRjXjJvvNgyXtwrB2c4pBeM9pTHgNCLY8BeAr2wnVZ7HoBrXnPPPmV1SvYNv1p5hi2Ma416c",
  "key7": "5zTZreh1jFhL7AwpPBbg4RN18zBmMRX7QGcypCazcXfZhvdsFcXR8Mzs8XwxTjNYDwNUqJmGh8kdAMH5t4teFmHK",
  "key8": "369NhLuwHyFAWZb98W9jkVKDDWhkQtkxoToVSEJFFthp2U1P4KK28NBY5M5NqTM12AoX5hvxbdgBEaVCS9NeEHat",
  "key9": "5LRwQiESuMfXkUhid52oFM6wzrzRfHWMfj5P5jkAxF6A9DYEbJpGRAseR2bfLQeovhKK51BuPcRCqsoKNNdrmT81",
  "key10": "2jV2AfoxU5FUybwP9smxR47ba4BE9AHAFj3NcfeAeGTKE815swy1FGpfGPWYLhgem7Wdjq2yCMuwgdVdMdZ8RSFc",
  "key11": "2BoDaKeReqR6CZrMD7UoFToxccNUwZMZDnc1whDjt91iDy6zDKrufiLL4834AmS6sjVRVbNXzNG7TBmx3HReeUcL",
  "key12": "4Q1im98Stp3ZkTFYaQtMCY67mQfkRQvSCWBu8j37FiJqUeky9o5N179d1MVhA84YUwQCwwS2jkhtVVbXiajX2pFY",
  "key13": "3u4kJh9i7ERxP9pPfYhxNqdz1HE2wbAd5rFBncS8mpJjkjjjKKtRSTX2UZpcFax9KDXgSS2p5whvbAWFX4j91q5D",
  "key14": "2gJ7xnsummsv7ECMSDDWpVy9AVicocuNjSr3csyyk4DxTAvK7K2fENLpfmUohxpSdzwR7xQ7mZKDfX7Hmp1f9Z1J",
  "key15": "65nRyA8onPQfuWWjCH6TxvcnCfKPh6pct8hhUFvUgVLmvrDSYgangAiahWznHdfj1t78pBuoLyaCsevsKA6m9f8",
  "key16": "5nwwcjTtLtG123Bkv3acDMYJdRt3W9sEGFkd5vZqm8eY9dajiM84Et9XsR35uM4YLjonGtY9jwKJqjKjjTNJJSu",
  "key17": "jDzE6ABNrgTGg9Sk956AFS6nUEGMp5yXjDuovpKcKL6QCvjWynLrRA9qHoVAbJ2QgV5J319sxtjAtWE8M6RvRem",
  "key18": "5eAZrMevouZ3rgFcBhV86z5zJTRtFH9RXbE9sCGUi54bwa5FHPG7NpXN36EhEqam5uhqnDdhhqrkFwYZd2upfmU6",
  "key19": "rJYmgDfDbcPmkxUr739dc4tKqpZVoeM2pFYFJiKiUV13oCghaPaB2sc5uML5ZCWsjJKrPBHW6aWJaheWZBkQvxu",
  "key20": "AHYiboQi34YJ3WA3dLT43FAgU6SKQt2LCtLdksM9uD7hSCUvVWXUAoHR9jgfUsQVyUj2VT4T9HDhA9t7miFbWDo",
  "key21": "4ZNthGA66iN6ZMYB4F7kpPhxBEJoK5W7G5shdH2YhUoRxcz8bh8fuDKgstrdpi1Et2brfwwf32uKEiJrFYWRn5g2",
  "key22": "1f6E8MfGdaAYD9Tnqu4PcqEf2cuJarUxwswvsHHrN68AuXcrdCWBLT5uYEF2Kvw9CZvNx98UxWynSobk8QZpYHc",
  "key23": "2eJ3VjrQzh5tCSQ4E529K6LUqEQhqDNE9AzcYMfhLcCPFqPgZEvgrbGnbTRWAAexRAkR8DgyB8aEh8YBqaEBkSRZ",
  "key24": "3jPxdc8XLyak42jnifQTfvU4ppLTGresf8i3nqD6i6KQ6fxtNiBWJT2LrSCB1MWwS1LYGZVuqWXpMA25yKhqpkxH",
  "key25": "3dwvKJ9EMuG1VdkXEusJjWpmV2uXdpRVgYCcGrYcvjEXCjEKVJWr1wbATd521qxQRcuD58NRtAL1vnPBx4U1h8U1",
  "key26": "2qdRUmNy9njgVFCtehh9TfZy2Z1SZKQ34eQ6sfis8LNTZw5PiPaGikiJZgyJuu1z72g8KeC1hCtqiZ5fRQDhVMjG",
  "key27": "57FvQATiY4F6WBAUj34q3438xfBzGxeouFptx45vUSRWaGrbLvpsFoNco2qh7eYmSPBj4wzPJKwC7b5LCFvMsnjC",
  "key28": "4EvJbMjqyCRBT2tKyfC8Qqrt1NbbJNPnsjZbnC71p5eYuXM6VX3VdUqPSTJZrUoS7vMJS7DQKzoQ65AAiQfurgCj",
  "key29": "48c8DfXg4jYN6smfdLb9mGJxQaLY1xBLSgq7r1Za9gqEjfTRs9Lo9ZCSkpj5bE2EY3GrhosFayuGLDxDCEr7XLc1",
  "key30": "3QGpqV7THX1zGXNeHXUCBaYv1Lb7WVaipVNsk7fsXXGpEqGX7VdmQgVknthyopqExWnXCyUPwjbuwwXXiXTbGMDg",
  "key31": "zmRZ7jCevf39iWq3DjHXrsJRiX7YomNMsyR71dFUxqwmxENeGEqcLiLxWMZ2Y5uJnkXWhz2FbRGWAdj917SCJhx",
  "key32": "2aRUgADhcBd7Vfv93RMPuti3sj7GH3fMfbKF8upGyv9z7Ae731CDtNK9sfZQfy7rapsQMpePg14hkLodp1QbneXN",
  "key33": "29jGhbfiuyYqXteLvFUNCjHhTF1i46vb2YB4ypukPXnV57RCzDorWhQdG9Q9dYmgSyeqLNcJpxseCLacGEjntunX",
  "key34": "4eUsrW5avcmHZ7QTyUYaxWC5AopWXfXTWvJCcRU5anABZ3JbJHgZWsVFPLoAXZcJZndwYnHLiK9opggDV2CjprDL",
  "key35": "2dSiH7wFgh2q4Qn9WnoXzSDcrkD6XMpX8azpJiEP35xMLFbSHMNYcAYov8bWcy2gqSBjxUCWuniMSsmC86WiSmtN",
  "key36": "vHg6cDAcvViUxYX9W4TAAt89woYhujhvYJnb5SPaaC4K14Gbgu2MtYz7kvaJuLPNahVN9cErigzvYLKKoQCNQ6o",
  "key37": "2tmoLtx7TV9vLyKTJtECemhP4VxjGdGscxfet78fWvTCRMYuzz4QihY5dTqb53jfSzkBb2rrT63aALsBhBScRPQK",
  "key38": "QWEJCztZBac7cX7TPiuXyrXZnkxvJTFeNn9PEc3xAdCaoqUj9hhnYe3UB5EDENzeH7YWg7aLZghADCYB9jYsaqu"
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
