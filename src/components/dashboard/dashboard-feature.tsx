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
    "aokVmSTw7QPPYQbqeLnbtdfTuRySoaHgjcF9hvGV7xmTDkPCXiZwieupkqfJSmRKMw8yK28NgvZC6GznFJTzf31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51d3LFv7tBP1FMzSmWEXNBsvwfBSZMJiNg9fG7MzsCoi9jGNkG4mNubRk7zoVJpS9jSUXEH6czx3VWyo3cCKg6EN",
  "key1": "QsKVPHkL2vzmUf8xmRHutdmF2cCdKVYMfE2EZHYCKQc9yECG8Y5jKRcbaS7p8AAZqcgam4WwSMz9zUBbAuPttSQ",
  "key2": "3gSCLASUi9kpdUFdMAiKagfrQMEqLZE2XdyhguKrftHJbPEKEZjSYzsFPWWtXvqgzKNyAwaTyfPJi4CdxSmXgqZD",
  "key3": "48o1EDj6tmnE9pSfjoqctK9dP6y3JpWiU8mmsRbEDAXfZArd9mH6ntbiE8DEAHhreYXtTi3ss31CWAPyZysXSNQt",
  "key4": "nzZGBHT3u2tZXGDhUPGrnPwh8UGXexKRFrFCupXsikBCUdrDtxEtFCkz2hPCobjfpPU8F2q8ERhvXSKQE7U6hcp",
  "key5": "66xCTQAnNB9nCbwsdZocoX8RSc7tXgNq2WJPqxH4uqsj5tmRarLW391wXiCpxMvKp7d2ZWHhX2M6boyYSFPDjUJB",
  "key6": "3mL8BVszDoQuk94mDRMxHfxTdb8VASfsEFtW8DnoNdUgyZtZkkfkdmv1BPSsbnbJpkSNXaBF4SuxnJtkk28VQnRE",
  "key7": "3FrgAszJGaJVvtnP3fNEqgkooMPoTHSVTXcxqfhqNNYop98LALfUq5GSo4ebCn6t5wfw2DHpFGtZzktg6D8ss5rZ",
  "key8": "2cAZvgFbDzzBhZhD2JmWvLXbP8jz41xwC2rbpds2My3o3GyLtTFtQNqKHGv9t2ejP3kxhB6DFgKBqPfHBkuqbiyW",
  "key9": "5Ftir6kAHYW4Z1oDzamq4QQEagmHXaqU8Ra9WWjF9ecZXN4UzXgSZTYXFmk5d2KF8GEKkQcyvoLV5brzhkwGxdZr",
  "key10": "4RBDG7A9W9YJZ1Ry8Cfgryz8NaCUVaPyK1rFh9gwC1wuoVxfYkqLG7t4kwgGu29zVCWAga9xZ6AjeqZxio3mXniG",
  "key11": "4XfLDt16m1txuUaQbYKLBcgVxQstPPUW36YuM6wemoaf2Xua7os9XiCbUjGosWUhcH4BuCKrWNxoaeUQvVtdK7Av",
  "key12": "3CUXXHhaPAH719eGerbGbaa1FEUoGFs98MrDD4qD4gXfdrWzVkw969FYQQknfedcpchJjc6D3c4WWGcmvf5bgfBP",
  "key13": "biDRGvuVY4cC9SWj8adJdZNzHFsdjD4ngydf1HQRYSmRCkTmvhATJgoFzJAqTmdNkghvXnZ5rSkJPvxE9oaKotM",
  "key14": "5w6xYSQLMvntdjPnq5vHDP5bK63CNhGCiJpSdiZSk9i1A385uJ1FdWUdojkJTdrWK3jkY5xz2ZR19Zn25hxNk9zY",
  "key15": "4wZ5PTGjH3utEsSMedB4PhZEfQBL65gvbMqywXsGUL7TZ45kCxaYss34NtGMQe4smNcr67M8rw16Vpa7oV2rDSwN",
  "key16": "3uyiy7634T84NbFJ1FivHhikLsMSeqKF85B7Q2WgojC9jTZmWB8NRnaJs7GuWtPE34M7EkWfZwNVTPoGmTZsJKc4",
  "key17": "5mQpXgKA649MJkQprsr88riNRGsEmgnt1DzDNzzYkZikKNnNULVfwSQnrWjC9HHPAQaeFePYw79U4aDh21eqoSVM",
  "key18": "5kp8W3k2urJSyDeRcDdahJMJ2oYzreKPJ6MLekvQFMEfy8nVa5oT8r4MVB6xQgyXyuJH1885zpahodHFhiER9ykV",
  "key19": "5JLo1i6s6TPZRb2FthfdkWAcrjk6DAdgZco8kWKyf3Qd96zHszrYqgqBfbpDWNjfiuqv3geWPKPhGkVNweeQDYVz",
  "key20": "2p6M5URARC6vrQ8QYNNDWZGjYSfvk11gquwbdTPpQxHoFPEhSQUapWwQMk7fWPngB6N6Rpco6cdva92hJcvx8mWi",
  "key21": "51ZDsTiyR4uaBUeXC6KDAzkvpLR2gztASd1roFb5zsKYc8XQZefWcxXmh7Qddo95HUTPFymi7eEsFy1AHyfTaor6",
  "key22": "2vd4u3VbHxkwNFdk7rREZ5YJYPvJjnyBNSgN83VRKQ8Nb4uvXWaYLfAkcGUDXXMw5uShSYnVGCBKNFFhPx6NjBiZ",
  "key23": "3qjpqnA5ExgMHd6Jpoj87mAdAkqSyeqhTyEJ5jqm6HDnWenhteaSsLzqDuwp4dncjQf6AghuyrQLmsxMw1N5QZux",
  "key24": "5eNxtnzC2Npmwma4D1DuHpEvFRtNszRy93im3PNLBUycj6LUWL4VmvCRWKbHW63AdsBk9XwhTUxNXcjRpsJ4up5i",
  "key25": "mvBn2C3azpsXgVDxvqZDnzFvoeLp9AwPoWL46mQvLzpUNH46vEPykccHfBdLV4P8JQjKY2KdnuF1DAXZErPqPSm",
  "key26": "3B9Xqo3AezV1KtMQGVY1zztQkaf8W6XtuPVMwnRcRs8scN4jRZuYQbE3CjaiHwoGy16Gh5hkLusrDeAoUMMFFXHC",
  "key27": "4Dy4R4WqNWdqWrVTw7FSykbswviHvDBV66q8eMBrZpCrQ8nA7TUsD9ntTgQXuEEYL4Tz7BaAjigkiwsQA2hGXEQj",
  "key28": "3YiNnRrDwvxtX9TSCgRoPMS2XiFg1QFWXHvikpwmsoWKRFKLPi4ygLkrqbKWSemYLXTCt2bvR8XFPLLKwMYJyZhe",
  "key29": "3pfSsCSDjBiPu5Tm2pfMjLbnfUW6ZNBaFAQD2KcWKhscK1Ez6V6vmkcVpsesuyMmYzN9m97Len9hTZc3f7s6kqds",
  "key30": "CVVDh737iqDxnqdpZ7RrRKrensdfUqu49tqYfnLuRK1sWX3Kv8CQtRX651McEdya2SSGhftzUMDcQd33CasYcZV",
  "key31": "65ua4qbFAhjxkfgbYuFAieKaFBw4ggB8wcmjqcHYdVCvu4yvJWBb5hi2qDDvqpPvoFeGW4Hog46pQGFqxLEyWydx",
  "key32": "3hRaBpa2puRJSfwsQzBdZA9r2pgvsu3PDGHaXBGRxAoo42qYxhpfXfAu46gXoDSMXfCfG1Spyb76VqbjheJ6aZSR",
  "key33": "5oU4UytcEJxY8QdWqi2J9HZJMqBc4mMrRNkg5yKA8pmn6ozGToroNj72ESyqtDJpb7xvLXe3d6qfsuna5ULeUeJY",
  "key34": "4RBSgaWzRCBtJWMeamKhj4BYGmjgdDopKibkFw8pMRgFyGpsdnT6TBv6VwPRviEniU5SC9D1DLw4uAfCj7mgkbYZ",
  "key35": "3zeJh7ttxHYVyE5FKqT6g3xEnB3fcrBYGsFoSnr61B16SDJy7fT22KB2XPuEAvib4bPtZQnwJBfG86CSRf4DZNJv",
  "key36": "3rcmD8A3m5EibhAWmfP41T4UA2767qRSURavyozM2TrCDGM8daqDJR99A9HKduJNWCaD5KsnPaLasRot4VT25z6Q",
  "key37": "3PFzNGStKZoDaNK2ZWVkyN2c6hVpMXHzxNRCjGDAaobqD8Y9GSump1ATZSQNrG6RVb1MUZPBmPoUZB9eJEaajyRj"
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
