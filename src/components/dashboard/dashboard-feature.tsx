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
    "4w5UZ93jP6GRiquLAZe6yLvGyYLnAsihp3E2DcaA8yQam1SYN6kqbq6sPKWTiLCx9YpuE9dYqFyJQqSo2cKyPUUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdBCMRrz81SMp9iXCaEX8ufTmdqbjxJX5dYhi55cWu8cRZraBmPZeXZGdWFKzN6MXTQeawztN1he3bKdhrz8xJ6",
  "key1": "4jkEx5oHC3QfXdfugGe4JNjqH8g5PujUJ1LgGbp9CS6SkCbYuBuT9HUMQABMGfzS1yBeXeZWUfgfr6gHTxuQRCan",
  "key2": "62TJ7t139STwyUD8CJfc2D3GTTSeVk3fDfAZN9jJGHEL4WzTXXAqgL4Pwyr7ZQDJY8g5aJyS6rxtFuFvCNYSWwRg",
  "key3": "2b1aDssHqfjgTqKyQ7TfQt124io8FegqH6meDspaP7pRKAWAz5SGZRRfV3p5QiejtWSjZ8LpqiGLHJV2wuh31b7B",
  "key4": "4HH1X7v3BEHa6znvXtQnbuVtv9dxW5vnqFrCUvzwE3QJLER773j84mh4Cd6SgMU9V44x7rJmpCo1JrQsocvAkuTV",
  "key5": "29JFFB4tqdAuGiknZX8hmga5arhhSu9kkmTqzKqwSzWsno7DZw7JnQt9tUZQ1bX333ogJ5vz3tJRMYT5YUwukusB",
  "key6": "2pLP9MykwnupzgQm78bK3HicMXudTqhnwzeXumdYfu12b3SEERx1ArhHsgPoe2NSernyktoiL9vqrendZbJBv5sx",
  "key7": "5x3dXqm4NPMX9yLcniFh3yX7eupokEGeGxf7VydE3iUgvfttbM1HHCwT8qRjPnWdU2WD4YuvsFTj5TWuEhV8codm",
  "key8": "376z7QCvWYHpDzS84kM3gP8qFoNrWenPgowcA9kW8f3SQRwdXE5ovkje8NpmshWhkAmcA7BGYbkC1C9PFU98AaVf",
  "key9": "WwNdHuHfN9KNEq4QhLmF3eEE915qoQnTcCHS4Dyoc9Q8QcZm4EYyRKH8qfaev32wb7qXkiBMfDM1TAa4rZMCfEC",
  "key10": "3Z2Z3S36z5ohHpHic5c9PRewDyh7U7VeaQkCa8kLLR27ggiWcNF5rjuPsd36jjxaig2Z8RUdvyyqu6mJYzaT515j",
  "key11": "5PXjUswronY4BxPDsV6gKAuMcBuoR5LPNCrfHffRmFXfB9zk27JTooQNNHnyfFYhc5FBudLFpBm8WQgskcuxGDwy",
  "key12": "4kTDEoUHifad8wt9vM4qUbWrjLhGNwV9tF6X3PYx1DPAZmAWTFeX15hx6BDFFGBLGxV1cxcQetkSKPpJGeMqL3Wm",
  "key13": "5FGCR5vLY475k1LvvBU6LBCUE84Jbban4KbBVbbcRTqLuYgG6CeTXhV8E9QsVMc2BWsSQBPicPdfSK76LFJ7eVwR",
  "key14": "PFXERnvdVCw2P9Et2UAsdNgHdn61eGnbYfGYqwRLMvPhabPopa5gko8kC5Mt2HHjRta9VzV48HtHYyydzupsqpb",
  "key15": "4xLR79BgEpK6jgEzp1hTee6TfsKxarxB725FKNqA6HirgCgXwphVQZedZE98KcM6Gxgbkwuh2GNCiLCgkCvP3fFE",
  "key16": "4EteH75FXqgtPgrG31q72Luew9XNRtMinky98QYK2QBE3o6BiAoCFEoXocsJXuDF9F4VvFwEmsVwvnZGqDeamXT6",
  "key17": "3SjnPmVawiHbXdNsLqmRJgVXCFri7krSzD5yPwa3Suq4jsnBAeagniUiHbEdTTCCQtoUenKx4qEEQgfUZvZSsGAq",
  "key18": "2iEZcvxc4oVRCVU3MWieKrvn6FR9X4Qpxw4ctLTKUdQb99wY5DERCo3dUFRpuHyf6G1yH9ft4xkuEtFmTmqkxr2V",
  "key19": "5ASR3fhCyQeyHLa7sBFKiGUS7UedjizcbrZhD7fi3HaHS6khybzPbNZFHRWR5GVA2ZnntYQxtdzThCoJrsibVBua",
  "key20": "28W7K1HFA16U9xxSptyxR3CndjuXdiZrHC1yqcJdTtps1e1mFxepnnhKx7XESNNZ73QyNN6h4LLtVjX2TvgekmXY",
  "key21": "5Wud4v7qrP3URUZW2QmetqUC6VsTd27JBaoYK8SjgT5okhVmagn5mw9Kuubmj8owVj3x8D4czKyd9dqWRBoRkfZJ",
  "key22": "3K62J8cgKjRHE96ApT3Wic24wg13GTpHU21T1udUqRUv3CAEES1M9yme64c7wLMgodsv7gF81buxEM9qQqmhoREn",
  "key23": "24atRq9AqKE8G4evQYCaPyYrgsCnMjsoe1GwFe7bwximcfAM4JoFcxjXUfGSjAgK4Vg73Q4aX4AtkSdm2y1NmLFF",
  "key24": "2cSEpM4rXKZLjirx2ejWZNaVaxL8C3G166qCVJNQ8UZ7hCRgbXhERqZr8mf8ZvJqrozaoWyQEXknwZQq3VZM5KeL",
  "key25": "2kMLWMQrUWjmqBYsmwGANVQD9Hgptp68m4KZAUak7WJad3CkZQJbNxM65u47MoRsABikda81hi4rwrQzqPQwuzwK",
  "key26": "z9qZmtaaM8ecYiMfjaztjgCSVjuPqfrEUwc2TsmEYDGYAS85PgxiNi44sWcSftgiE7deRxkqMENTpUgs5v1U7tS",
  "key27": "9fXusc1cgmaChsvpJahMmpdfR8M2x3KNiDPwkGrTe2JPZu2gNnhTPZ2yKFXaFF2pcsDZ8nmt6is5GwoyDF9yFH4",
  "key28": "4wUiRjcoqN1ixZNvxdT1raNGzxLSAX1tVhPFKvBk3Be9p97hUBXCUzkhGGPmqw1qjJJgFiafhkiZ482xPav25zjd",
  "key29": "7N3G6p2K8Qk9MgdsY5kT2RAeLhs6dPL22a8JSTXbBYjZ9yxykJifJYLvz8s1PqFUGmyRdjqLwfqZW5HrFoYTMoj",
  "key30": "xZLcqVFs8k9sK7KJd16469yhyQJUWPNibvPjeBeZXhrJYAV4RWFGuQ9f8gKpgccUGWQfh9zo67gvSTh5BA3jXA1",
  "key31": "3xNdxeaEan5Vr9Q9P87eGSstT89KxFW8cWm72oJzvKqCuW7WMKWivw6X6duHYLFUDYp81RGbtq3MWeqvUAUwRuQV",
  "key32": "4ZyjRZzGY4mraWyHdHygZQC3cKXxWRNXwnU29KfUZy7ukcsakiHR5DJKe25zF9wyhSNAZXv7PMrHD1141oRcECfB",
  "key33": "MyqjTHEH1vca4bV4QBkzHYDvCY55rGhWsDfusWFgErXZzw1hrpPqNHedYufDTH3NQTjdHUya1NfhvCAyY9W3Lp1",
  "key34": "AyTpmaMPr4ZQuXdFbGWfEC7W8FkEN1wygoPfVF3vdnsqyvPNBmnG5KthBkqmgfke1cbvdu5JNs66DCgXRC8ZRMF",
  "key35": "tDmysyocm9xsr3nQSrajJCjyBoA6CJrHWDYcoe4vmX1pmsMUhLNLSr5Erm24ZJ27dK5K1g9wmAAkAmRxFQ2MFdG",
  "key36": "39Qh2oWEcGKAEqRY5hpE1YMHGeatU6D1ZSAemC5HP5ewJboDbrxRfos4pdxScWQ8Sa8SfdQwssNhjHAKzcjxJ4cN",
  "key37": "3K17SLVWXzzZAvYTuRCLaF1rHPkHAEFrdtG8arGTESzKhLSYtFBJite3kVQiaw1RpisGQKMn8bBHXMYrVGDNK89d",
  "key38": "GCn9ggDtxW1xgie1pnRzBMnPKt3o5CB2WqM4nJxDAjxcTKRCzR1HCq6GWaqKaxTxymC4jpLkJrATkBfvSLJsjZc",
  "key39": "3pEBir4zzA8bWpSrH54cdeZ3CrePoxPWSgQmrEQpW2KNxcpwVevGqMTCSAaH1E6AC8SdECddXj3fiXQ3j567ENtQ",
  "key40": "23riZ6eFHy5TCmKHRuch9n5LGs39hVwY9pse9egWzimUxvqxtQ9rwwQbP5chWc7UtNZzwBBqGKSQ3xwQKatwwSFi",
  "key41": "sxSBLctNfj7NDbsQDpncLH5NKncaKuv66iJxnH7qMQBYde1XR5xQQbq2Jddt9fNzBePXrMi7kkfMabYegE6fYKr",
  "key42": "4jkzaCRL1SnzM7QFBkBbhgwNnARMBCzp2Fdn4y8KN2WWEU8pNFp6BNqSyvTeAsJnwSHSTbSvh4TgnwjGqdXJwi9x",
  "key43": "Sto9GVkZHQm1fMk27yeV3Wj5LcTjnATsS2dDEHaozUzEVYQqTcyrnspYTqJPWq1WUQnXD1BV2BxBGRojzYpd9PP",
  "key44": "4pKB7XsDtMeCdNdff3ev3BdCHKVUUjEyJKrnJrg1Zqs68joJmxnCJUtQ8RgDnhyWcu4E3qJf2eygBycvh5NNFZZe",
  "key45": "25Qg1q7myTmUkJxyukZbxHsyC1Mea14qQC6TKmtWGjNX6eannc2oopnhzaYyxZMHq9QQtx32V1n9PEvJeCUoK7wY",
  "key46": "25ts7BbZSrEJH5CarAXbHnsx6Jr9Qxk9aUWtQVKAMtEU3TcgEgb621otvWLxe3GtmUmqYmYr37KUthJSuHgvFURD",
  "key47": "29N2ScqBBf1sRFFJi1XQ8p6EmeysWJYrFpW3kEfyRFd4dYLv3FNYtQePq5884GjuQUjGWyMSvhYTGs77Y8npdais",
  "key48": "2sp9NsuDit7nnwBHkEXVFtWWTh4jTuMhJo6wXRFje6joJ83ZUVVZkMwRGuNXuYejxeXUB3zQSdjb5M891FQLkKpK"
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
