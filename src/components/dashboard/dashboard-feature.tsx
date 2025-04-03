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
    "25yKqvyBFMorQrvErCiA1Vej1kSMEYWw2RxDUqNDgJD2CGoFVXnhAKw2WPjLE9xGifETjAJepxAYYgF2Rrpztfww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icEvLR4yv6UeS2Vwc6v3r2ata9pYrxap7RKMmr6EjBPVAPtNCRphL3XKao9RQzD1jYcK681kg15LjUBUP9yagnz",
  "key1": "22R3GZbS6XiEHDYH4j8mxyANKJ7pjZWvBNoPf2vp23NNuTkgzdhAmtjstU9LqLmyUCPwp6VAd7QgTGKPzMEZmCvd",
  "key2": "4vzw4vyiAcrgCLRo6fWFmRD5dHFpPQCQifRFTsVwwaWTjr4a4zfFLmEm968quUwnA6WDmKsCkgomz7JrYHMXNnwA",
  "key3": "4uLA2SJw6L9wUPJTjsTXW4nUGeiUjSgKvzDWhanSM13vgmQ5DBFWNuJXDZycprKFLzPrF37HHT4cVivkRiEuSfDp",
  "key4": "2syAtXHbNJWKJSc4itSZZ9vQuYjgNP9ws6XJZGbqFsdosjB8bbcgf8dp5bbZHN5JPe9DYhzRhTHqzuwN9fRGhR7k",
  "key5": "mcu2EuXRQtcihQMf4ADEs1mg4jRuPYWfzucGmaWVeBBshebr1Mps898oGrMgkocKJ1UUW7tdhYMxBLWyKfE2Lu3",
  "key6": "psBVyLLhAD847r5ZNPFkjkKonNLghyM7hHfTsvFPbqXeT8BBFwzi2bMWSqHwghDM892Vb5ZHdPo17gnTXxdsq73",
  "key7": "4voj9Gda1GSaWDfGMLAjq46VvU7P3KJczpfoVhzhcW1Ssxu3RwK5CyqHMXURwQ7FL5PKjEfnf9DZcgofmooFf2W8",
  "key8": "444KUaQDanQT7F2kCg99WENUKZGeWJudvoEQSTTEN4vKB4Yfdurj4VntQLGBtLz419DQHAM5dWAGickazbGJJcCR",
  "key9": "22fyhWC7dB2X4JgU1N6VfrxH1eMYdQQ2yZyiGSVgv8EtACpYVMQSdUMm1qu85VTmWW1PcsZBGS4eAMRDXqcmuZdm",
  "key10": "2BsTa6qGHGvLaStZdptC3UGDYShaXS1R3kPUytjgoDpg7ymUyQfoDsZJXYLfnFsLbiV8yzMY97srLpRVXxarXrAR",
  "key11": "4yntpC7acDVQJTNXgmLA37WUBUKGJ7nzQvrYLcCE91bKmxsWfG9dHPnqqfLjAn8cHNHPXm3S3q8Dza7WN3LdzuQZ",
  "key12": "GLFqyP2SKZS9Fo4SrmGPvgL6GD8mo1nnxio2guhJXAn8gKg9fPXMaYuBR1DBCViZMv9afoms7VxBqDHL7LsorSn",
  "key13": "5ZzcTzh8F5nJAYPbLdyi7hgWhCA2rTzbBFSYYzYHRNySDCMP6SXLurznQdg3KH76qgTyHedgQ3nzTDvNXxSNiAAM",
  "key14": "2qBXthBeDU1rRxTXJhqeB3FN6EpUqDeh5e4kJjVfCfsKoQ65hXkPRkr8yZg3ZqTeLuPMeWfBT3fUNJqzYDJm32Nd",
  "key15": "P7XSoLJaD6f9ZtmZsc1JmyySym1Mkx759CyWnpeD6WBHttPQkNTkQA8cdP1Jw6qFrH751sw3NgoFhv6DyVuFvhy",
  "key16": "5fciMHgrovf4gspQqxZtKbmWVfhjMHeYJVqWKWPjeYh3pxEaQTzwtRz4DgkJCByt88tezAY3AXEtdEncS9tqwX7U",
  "key17": "FAr3XL5f72Ynyvye8HovP3YHiopPVRvHTt6kEzveYB6wfR8cGq1beHD3UNGThKLUigGdEse2GMG5S7qS1iywDRu",
  "key18": "5Xhi6geydWKTytRDqi2wXK6kNxgUBwWZ6FLV1t6LLSFAJWSJvdEz1T2UaZ8AzsW3AMTXd4GqN2VXXg8Zc8VaJ1di",
  "key19": "M7bwEDM5cNYR3y5QWsTYjZhk8YGwH9MvFHT8TLm3eH38VQch4HrwLjvEURZeo7qv28aYAdCwKsJuPcTQxTUPYWT",
  "key20": "cehZeNrajugFxEn6EkchbsZMvVY35E7qCc6tfJa9LdyNnQ23AWUiHAdzwtWLVw4ba88z6ZjwcJXKrQ797K6VQkc",
  "key21": "XcbfgG7DWRmWZ7fP5PQh52GbZsM7ydccGhHuASKCeUs66yvpXvMbMWtDHp9duPr9EPK2hPwbXybwKkiWcfyBW2S",
  "key22": "3Bf6UcrGmWQrxF3j9u4Bed3FX3RdyDWfEGVVffF6cpdHP968VLS7Xqvb8aH3FAcUm5Ax77m4tD7rEErNcDhQifje",
  "key23": "49SYn5ZNTrb43WBybJimZT5VwidHqCfnCmFLLdkJKVndNZnG7L6HDBecTYSRukDY2cYFRoNY515K3wQD7ritzzXf",
  "key24": "2WuRMm7nY7reDC6EZ4ry7v6EdJyxBC3D2fRQPy1KrFv5GCkL72rsNzLhQx1DyP1QtvSyywHT3QVGKzc57bzdJYfP",
  "key25": "5QPaWySz5DZHai4wx7dvf7X7jM3vYHq7meBPLefYiQAqwu15qJ27U7Ze5R4haUba8CxJCEZnzagDJ9hxdyEmUeXB",
  "key26": "5LpWdUrXajy9wGcpHj4C1HrCqKkr59NWqhqxd4uuRMcYxD6RegnMAgU6hYrwk2UCLmBrBYgSqkwgE7GsjmfoWikV",
  "key27": "4bHM4KMFz3L6i9KdyYPWiAz65wPrfPXbcnKogEWWTeRaQnrHh6L8NFf1RcX2e252pLQsNUKCpRVS84BXQBVnv9Jh",
  "key28": "2GifEBVSxM173swWdMwcdicubHinpfebXNe2qp4jgMNzbMuQF2DGW7iYuy4dtqKCjnXxUnR6a2z7X5seJticD5Wq",
  "key29": "3zKBYrazcSqtAHmHzqnLgHrPVcuNBjV1AMeyyyGtbSccqpWp6Aj2jPmVMcDNQwFx8NZE6bbJp5q9mcEUDi164qfu",
  "key30": "3JiqmiQN7RSSqek4QKgXsnWGbgJYpB4gQ1TD2Z97awtytZrFKNfAiikQB4UduiYqAaGpcP95oejzsMGHhRtTFbVa",
  "key31": "4UEJuJSxggn2U66eGVvRpaEvaUfRj1rspnXDfGw2ZY59uUxLwZizZpUQbZ6oGhiEJgnAExFLsnbi4LpJ2BhcrK1R",
  "key32": "31SdM2wxVQrj3U6pbpR3Co5VairGXaeKjAna5GsveUCsbPAR5aSH3ymq7mxHmDN9iQgDpPoXfTa9AfGD7NfnoGtS",
  "key33": "4uZoRqoJjKsupUXMCk4SLR9nYUBbXS2Ju1mYzDgksXQuuytqGbDKsRDYYZTrvKibBNonuTfq9smiwHezqHt6auxw",
  "key34": "5A6qv7H9ifjJUrZ6jDPPR4D4Vsvjgxpsd3sFApuJha4h8y6ngY9yW9pYqvH3tHF734ZUzHFUJc3oEMYhxKYvqBWt",
  "key35": "5VCPcLwvF9LyHWYugyhrVZm2uNRCs23eWa14B77cMdQVjDLQpKMLMQhjToRd5bU44qA7nibs91S2ATQrBJUhrREe",
  "key36": "317SV4zeXxLn51VHjJotKnpYpBbV31UpKHDyGYqE8j6u4jNabJWKDUJQVJqh9h6fkZTTXSQW1sgzHsQB3vommVmU",
  "key37": "3HE3KEqYWfudJuGsAK2zQyNtRWJ15qGuMgb2X9t4iTJDPjXoB8vECmyuNRHFLn9a3ABxA4WUZdSwnFTxiKpMNLec",
  "key38": "2VQKhHKqQmCZNuYNvAqza8JSgxGQvmNw7ofjKdSbqWpeLuTH6cdthsEyhCvtyCt9nZdG7hVcM5nhdRrDcxW9HQ9J",
  "key39": "5yeKtohnieLhJH6DBGo7hpajxjy8d2P4XvB5BbP4Q9YdAssms8muTwZiHFqmuW2waNS4uT5aK2Qw7suSyoFTHRrE",
  "key40": "2SztpvwfNMtiPADLGiAfPrS96Ak1q42HjvAFvg4uUVt3boDDLbPhdpoAXb1sdgrAXG8vTKEZSqm6Jm96zJHazZH2",
  "key41": "VcpEEubHd5DCxfMG8QdR9wpoLrJB5NzbUDaRWqKxgzTXbpjrjFj5JBwc9Q78d8au5Wydn1GXiJbtc6qVNSyQy9m",
  "key42": "5qY7NiF1oE8P5SMkxiBTfLzzyNGvUz9tTRMTXJUXsxDguScFZhXwKgaoaVsU5ndgWuCvKGbUBS4EcL4CB19EbaCx",
  "key43": "4dApT9LTU3CcyjXtB68rFKTUVmZZceTBFgtD42skLHMKqzPybekLqQUNVN9wWJd4yYq8BqZXPH9YDinu4WtWWDgw",
  "key44": "5uUppEQNqxvgvHkjvtPsEUQBFuVLcpNdESU3DFeB8s2zgBPcaCQH8Rm5nfzhAxj9TH4v2NBud3dErzHJNqAqyPj4",
  "key45": "3dZXSQDDLJqDjt9FJ3uZ8pNH9nV77RVFfKnECKCuL31CMtLSwCV45xQPnPdgCgk6GPtUq5dn7Voo6qH8eno33LA7",
  "key46": "QVogCjbxDdwSoKxDnR1JdgGnntcUMYBVFtG4nBSukp9SLFS3w51Pvib8XvBSpUHTFwsUJdTXp6xLMkvPFTR2rw5",
  "key47": "pvu99yjPciLYnWs1x5dncaEpZEJrJbA2GRtN5ux2kRUs1Fee3pcNBCyZXjhzEgm8ZZbACM6FfXt1WD5m6BQqQY6",
  "key48": "GfALZbRYTCMwEaC2XXrBcf4FXww6Bp6H2Va9EaRXMXo2ATqAXdkSEQMC2shTQ6fsKMXjH61VVvNNtqACqpjqLVG",
  "key49": "MgSywFgz3zDQSo7fNNnJQX1BwUvXnmA2mbDR2VfyTAcEHYqCY1iJt3TMGzju1tUX9Ub1RDgW5osaQCUhDYw6kvQ"
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
