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
    "58ur4zTtYdsEpjBmvkszzW4qF8PjcRx1HdCNhkph3FUYPsv4EBUWuRBaPdcWENzvsUst7Fe7ChZWHGZ784LUTDEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvQbVWN5eH51PBBbxjQGPM7xb27PzmFdxhzYd9ZiHz5EKGJ8UF2qXSfCW9EBkFxT2VjvCiV7r7xo29RZcnJ5pdq",
  "key1": "4VjPASVGgxhqniJzaUuCkMmpbh89nP2GfrMBNkxsesD5W9vQp2otuxbzCiCj5M2BeuuJCmWHjF4hQHt3V3bnUX47",
  "key2": "28sM3vTWTQJ9m3wbjjasNHDfGcsg14v4jphR2tEvcpy2gR5hj4G8VsJ5QHN7WTKCXUk4Anw1FPA7NqrbAHjRzNLe",
  "key3": "4mW6wDt2bkmDkqbpUk3NzHKD8dpHtku4qZgSLSwujzeeEexwy6yMPaJmW4ZTFapQXuQNHYwQ86UZ6T2o8VoG9JeM",
  "key4": "4YiqmVpzH69rLZJ6CtsM7ziNL2zPoZuo1Yu6dM4BTKk81JiY27cbDaBiUNwk8A1uFkFmcKpbYa2CFHBcXdSwPuKo",
  "key5": "21x7r2T3Vosr4CpCthb499bVgyVeEpQuDayGb6RjXeX3LdcnHEYBTK6rosDDuWKtegqTuTcQRVgxg4k8Q8twY9HU",
  "key6": "2r8XA7LC7m7ZeHYywQwb55DoEv58hCtWh85yUpycUpFBnXVQvfApRWsCDrtNmdEXocgPNTFJ8fgeM9YzfAa6fnXN",
  "key7": "5SWKfAbTUg6snaiKZ9bBJ6g4Uczc8pSjV3sZ2Nrfe9EhSWxg2K1RnLMg3YDwdAH2URTepwPDhBYCvht6SXz3g5vk",
  "key8": "2RStKPuR9ZePZ9kbNfCKdua6sgZUwS9mck6XwMZmQdAuBaKJ9UHhR94QCTXfhAzD52ABjCMLTVJfHi9LA5X8cWAr",
  "key9": "pFikDFZFrUZYRxraWVuZukPEAs2ovZZBScQ4yxMdc8aCvmWVd1c52Z7feoHykeS7DjkmyKBnUkzg5Rf2rBLC67J",
  "key10": "4wPTcRR6GgA4fJxzRmUVPZPgNhd3Cv5H2yb914KA6sQ2MvTseNKbqhVArxsdxYieuDFiBNLAfke7kxC1eQU4okwx",
  "key11": "4NJikw5mRUSjtg6oi71Y6Nnm5sDKcXLs3W3vwAPEQ3TncqgJ2CF32GFXaAMxEEiaE7gasdmRSU7wz8ieRmjBDfne",
  "key12": "bJAAEieKAdRmfoucX2oco3hfr7m3K2gKoyYot4QUNdWfhf7H1qADHPcHFzr8TMGadnE1vpVYfo7FHcRyGTXbF4a",
  "key13": "3eWtmzLxdYYLDZTFdzxQYDQvWqpiCyt2uEYcrVBpaELF111StkURrkAJeMxJb5adPGD2EpK5sSHsnUNFh4Syvq2o",
  "key14": "2hh7oCfzEhHMDxogm5KDYhHTwm9hn5em4ZgspAQka33KQ4trQmUjQHSdqwT738Lku17Bn4Lu3apbp6HCSWjnMoWJ",
  "key15": "29DKaADUtJUCizY61aryLtZfRQsYKYmqZj8YXRmTkCqPXbQXfikyJXqC4sUCgYw8RVHmn98B3cR3oC6TpnWnwTZ4",
  "key16": "2PNow8ZJZVF3rJnhX98w9K144kj4KnvFT158Jx6w75X7exFYeoG96UqFF9imWkmwbda8xh75WJt9uPLPxyt42mvw",
  "key17": "5HWmbyXSrGCDE1QURpqWF9HzxAJdTDLbvfh3UpAhCeLFKU3kXq8ov8auFQL2ZYzeYqWGmckqpUs7g6UeULTnJBxd",
  "key18": "1aDgcgsd4YjUQuTd3Goni8QWfKDxYN9qfq2NLNVGPXWSbrGxir88uUZ1jdPmLxgDnBsdCroeTUpCQQyBbyjg8DR",
  "key19": "2tXdwyzufsAG35fEwmUsiS1WdrGY6jGaeZMikdr4A5WgKd7jbRHevPQeHqdnk42RcJcFkHecNAq2EheKongL8ZHs",
  "key20": "jDnKV7Y8eVR5jMRCd4i5B8MyqM2KWiC8G449BHPyqMQPyfk4quAomXK4S4wwVEgM4KMQ6u1g7iZgcHxXqsNAFBd",
  "key21": "3KtgRpBJunesJFXW1nc4XbiofuA8EbBrUZ2X15ZJyFxSwgGTEdq4vGPTY7DMyvzUS3vJ4G1a6WfoyXA3NmjQ8uRd",
  "key22": "5ANhHwVKfV3SJvXhRt5uRWxdhfGMUx2Y1RmWdLAaqgkcx2qVW4L3P8xssyghLat1FbDTWw7yGNtAjeZMrZw93Z21",
  "key23": "4xfhwpj9PQSXSzcyAkchmmkFTHTYCwCEfPSLw7AZjcsoNe8pcB56vwho844cq7WDJcgYLbRDWLeDzwQQhxoKj6yK",
  "key24": "3XLZrXjRWZAiPqEQniXTKdnCTCqcs1mLBRUXm15itxWyApyciTM2nnQZ5QBt4Fk2B2ZDSwTPL6A1HCHvBYZnnRss",
  "key25": "XaXy7xwiCVK9pJHHtH5AE4isjYbENz1SesTJZ4E1WDzo9whC2TCm5v2F16bozVDNPKsBwBRBP9UCGYvGp3Zyr3G",
  "key26": "36npnyTSrAyTFuR3MMcRDLS4nA1QAySGuHRykvdGTEZbz1mxe2ybv7MSmyYbjRqZnXNJyD7DL7HP7QkhBAYvriU",
  "key27": "4oQ92Bpfup9u3X2ZJ9AJE9UtnBDy5QGVYqWdjDvhz4ptS1dk4GRdtsxSL6VaN1X8PmQpaX13Vptcf8GWMyw2mjZs",
  "key28": "5Sp4WUyYb49qo6oLFe2n6qU553qnjJq6eLX9KnqnGJCpTCscH81teP12yTKmTy7dMR181hkiXBh67jccnRoJdZ9q",
  "key29": "5y7FJGkPX9EJCGHfpBK4wuTCoW4QwwAHNv1NFiL6rXvEkpwtpqEyiwxacDC53cZy3uUUoR4REnS8rFop1aWpnFHo",
  "key30": "2oARexor28Zd5vjY4QJTmfNkqwPKfEXBUyb5tckjoNPpMkZAXLvYCWuzY8wgTUYFVgNvE7JEJ9mQPPFXL9QByc1U",
  "key31": "3QKTwhYP9PTYupUUetn7mrRJApHccMaaDYySdBNcfaEKr3Sm3ztswy2e974g45sAnMbU8cgt27prhnsMwiWC7MDh",
  "key32": "2gzdTKbJqDqoFAnUapP2rMRG8KAwumgedP25e7Uhy95D9qv79my5HVrh7cV91yb2W9nrFc9FZjAmUYGTuEjCGjGg",
  "key33": "3HBKEhYXVKcgF8jGVMpSvYunzSMBmxFcgZ5XBW3fnGDjfmKaWNHe68ipeDazRzEH6yRKxCYib2k9ufkjWiwrYEcV",
  "key34": "3ky9YH7kkniJEyMLFAnXwfFqprk4tGsbfSZR4YPT6yqe4NUfjVavhSyQBZChkaTVdS1q1cqe2pqodmFRvDMEf8hD",
  "key35": "5jnpc5SBAuScno9KhVDrTwdVhTz5pu56bTKBfKF3jHFuHZE3miNvibA3FaiwVzk4HXHoD2UZa4Y29DnuZc8Nyvfj",
  "key36": "2PdacAkTMLWqridfAmZsafyqfScBqe978eusNR3Nt3GhoZMAujYB4WJo57Qnxj1Lgfx4JHLBDoNYM1BGkHmZGEYN",
  "key37": "tHMwgWGaKUU1MAAFu9rYu98mZ6ukTKCKgANjBoAkx6SBYd3HcbU8oakdJUzWWTGSWPwX3XpVfUfSNEJ6PnDHkgd",
  "key38": "2TQEGuYP2WW9j3Tq7F2JvEBGpVWpBbc4S3KVG5bs16iAGBUMcoHi7eP9eir3yKNNjRDa5MD3NCYbQCRyYJzFnbzp",
  "key39": "3xTicqfULFMJKqkMiSyXMbx37MXzvc5vZzPRtbwnxMQQcHruca786TKM57cr7HcDuTGrwhmyB4dS84bFxy9rHqCu",
  "key40": "5YLTfpwJYmkmmbipay3DkVy5QtCComzpvAAQsV8VYMt2ihykhZurBScDrboUWixxCGY4CKhwoeGtnmZNTry49PLv",
  "key41": "5zygujkD4MRcGXeZCt1mHjysrrzF27LvwPGnuw7w9TaBu9TtUqT1Hf4aw4z9Eq7m6dT8Xt7yXPprQ19mzD9Hpze4",
  "key42": "5WaKsr1W566aFm187pFGKnWmHgAGZmytwjbnL7MGV1XZEraoPwZqmZjB3X8w5qRNyLd5VdCF6iwJeNAP2XtTrS7t",
  "key43": "3z27qW6MJiY6xAxyKz6zaCAbJo1hwCcAs6X6uQwUArHi9QZu5YL68aukkY8bLruG5xjbajhomm7fCtYBg8YLTizt",
  "key44": "62Lg24c8Y9MSM2DLed5qPNRDiBthXmZezaSERnXCUGaUk72mPgrCqC49KGPkGXGajRydmCQkEEXUfc22DKDZcGdw"
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
