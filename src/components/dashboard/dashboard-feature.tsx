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
    "AChzR3gNuqC2naswmmWJrNJcC3YA1Z4PsQLCHTi7kXYoSMfbtW1AoW3hiR4fv8CmgUgscuQ51F7mEFAK6AL4p99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEnARiEnUsZXfYE1E93KN1TnRkwqxRf6SH4UgRiaFJimu1vMoopPYtw7p93z7vunuDZRCrwbBuoN8CvMsEztwYo",
  "key1": "4iEunkfP9vd9bKLbsdwQ8YkEfovUFz3NwncTvApMKwNgssZV2joqpgUsZGjH4PeTfR3fS5iq43q98CLs9kPY1CAX",
  "key2": "4PR6Po18P4irGrSu6SKotJgGp9gQnX222y9ryZDF9apJVeSrb6a1iUeQ4AR9PjrATicTdraVK5gtsVSfkeJWD3Dy",
  "key3": "5o9axExKKwZBATiVacu6fkxvwZzSb9NoT3eFcnj6hcJaadZTvTuJvvjhYkJ56bdYZogo6DzqoSgGS7KKmvCaLF5h",
  "key4": "4oWviZJPPQdB66i4LquTeveXitLmsqzcH7oU3zJ261eSYo6MTc2LVpgfryLoYQKQk46nxZTB1sbDdzV1MyyUotju",
  "key5": "YY8x9E2RirRRV6RxKTzsAQHY13FMWNnTHc87Ez1QZU1ppzfEFbrjibwRKFZdeh8GNG7DdrC76o8jyPuy1LUxGPx",
  "key6": "5uU8JuKNw4xwJqWySVp8H44Rq4c9Ys68LNe8Jaum7bCqy5CfmsbyvwtjQp4FuJ3575gE6RzmHU3FJaBKYsqt1uG6",
  "key7": "jzmrBsAP9VZdgrWfWG4C1BiiVjNdJwXwvHyQT4pJgGxsaTRdS8VHSwo8d2gDEMDf5BQPvDXoTTFzzrLkjj7X45W",
  "key8": "4T6x1qr8VvCcgwwGcSG6hZ8uuxeWKWVCHCe7cwkZbF3mUW9EAC2JJyfDGAPBETQg5k7Sg3jxagthuB8ju4x2LDtP",
  "key9": "2n2PL4EscHuxuNwpouP1c47pUXCnh7uDhPbRYLVYz9sfDZipXQKZQb5TZ9NhDYHgfGoS3K4cx5WANh7VUt5FjD3A",
  "key10": "519y7nk38jTitXUY8uuWYNRFXPrrKPXHkNnwo9Qb6XQib7MYf1wpKvGXBg4CuPM8BV17JSWiUojAHz1z9LbzjB3e",
  "key11": "4D9K59S8v4bJzd1Vq1injTHYxkT3Ezipi5tk3Hu2gghRzAWqiygy3DJAtAP9pekj7vmc9n7VteRYYy1AUxpymA6c",
  "key12": "5rAJ3bam5PU4LnNsZUhxojtBLu43zm9XPu51UYzrCwh4tS5XmHqqpGn41G2dwxcvCLiDQuTYCfcRZ279N28dPi7n",
  "key13": "5PfM8MCDRS1fpFN1asBkrHF7hJdsQciPwLpo3BRgPy2W7yuYanW24NHTnyKzp5mD9ZH4cjkpfrN1XKGDVdUhXiiV",
  "key14": "55zGGJY6Sjw8LGEgpdnVLK2XWgYKwCgKSU9jvJrrh4dNkW6RFGTd6U5BQ8RN8kzkWVarBXdfUyMhX5hREKog7jqo",
  "key15": "5azqYeREbqV75C9EKWNVAhSsAzmw5Yhy5eKyfWfPwPWhoPb77Nm73kkq2XE4ZTF8JsERfYWmS4xQoqAuWCVAwDiv",
  "key16": "5DnzRhNMXs1SHnBvMWBKYiLqrDAHGkd5TJng7wfPAr3qmqMi9E1AztwK1c5kg7m6WKXo4DXpSewMzBnfJaUkT95x",
  "key17": "3vQdxri4HgBjZEmSLmAPsi8GHagHXSiUopZaF5G93B8vnUYkmVmV14yJBmTnzjq36GnMUgcX72BAHKyzMDtim9RW",
  "key18": "AoGqGfyrxnSUFbzq5hGVFy1WS1ZKCu1FRvu2JLeyCDq5y1yF1HFAjVLVoCGnyETQ5nxczNpWRdvFMCsnWu6FViS",
  "key19": "4QgwcjLKLmrvy54GBVNnGQidciArYFC2132Z13a8NjuAxG45NRkHPMvYzeNkfXu6wbsmbtaj6ow23sziVV7kd2aP",
  "key20": "3t9A5rd92WuAypiDJVL6LoHNgbrgtWFaRFc1fCLp5vh9kzecCpGKRx5E2ZhbsvJuP8Zwko8ZnvwqAdwMZjYcSVRs",
  "key21": "s3zXk3XuryKx5RL8zp7r63cmWsxyRBQQvHPqu8uv8gQJrLd3BZ9xU1tTceauVP6qExyN97pBFRz8xSvzKb16xRB",
  "key22": "4JWh7jNXyATjnXsKDy2DUhiifVVMxGKzhyvUUj1dTYw5YMG88JRqjNaeztdPHCMF8ar6mqcyXq55LTwhr33u7Maa",
  "key23": "5EeZkYCZ3oFum4KbUKnr2RFVWZX24LeE4Cxa64M2cvbom1qUhFcx9aAUwt18QxmyeQfquiP8wphy8WbRTzXZ4Fzz",
  "key24": "4ZiZbgSWHee6pQZrKGBoo6ZYth3dvLedZVk5Uky8hPZxWNcvZop19CW6ZtwLPgyA728Pndfwg6YtBFGddKGJxPCw",
  "key25": "jj6urgsJzBQGKHYmTf916NdEfr7tzRTZhjjj9nAzA4ndyfc21urSKmB7KYELWCwdKQRQUAFzakbLQ3TxNjontxE",
  "key26": "4q2i27qfJZF3xVf9w79sgVVYiWsrFi27EsUnMBoeF2PSa5EQuXWKCQJ7LJW4sNrWE2cUnQkp3bgB91q8eb5sfFGV",
  "key27": "2hVJRipunTsRSFK4FzJBRyD7zDCxNNdBvoLQiFyEeojHPSZr3njLLkCwJndc6oLHwdKQQDXg7614TJwnkMnUZGzx",
  "key28": "49EG5Sp1uEVfKDsjWDDKmaQJ9dYB9iXpeSgwzNGoZEfNwZ9yhGDKHYPrgimFfRyyK8Fgvu81YWpgArbfg5khsM2V",
  "key29": "5uMwzSbpRiGpNcbZrEw8wqYW74cDBEm6tQWpHJ5cbknJPXXHvHAFXEmnoLhS2QLmzx2p3ooXUzDhbPVy9TzRyBwa",
  "key30": "4kfkFakQH5t42xe4sAYYzt2dk8S79aq1pTD7q4CSyQwjNH8vCS9ZuhAA2FFw2rP33cjuxomVtYydabkjPe3aXUe6",
  "key31": "4LJXZ3xPX3nvYkDUADsXpZKeKuAwo5eXgNJ2EG6bXG4DuA8X5Pd1mgaWmfotpQ2Kp4hGm6RvjEsaZAJ1BGLDq6Aq",
  "key32": "3uvxoSY7rkSEJr7nM4StwvTf4GPoa3CTFqkr9H2pz2TvcRPkaawgD5ERPhD6Arnv4XMGFv5f7FJZ8Yt8t59sy3Mo",
  "key33": "3JEiXc8iVdZUsSkBQZUuLSyzjpM5Fq9ud42ZAiHz7EWykUGanhwxmv1KvFVDz81SuUtKCGC1E9GK6webcah4fZsg",
  "key34": "2R6W7fQdk7DRMYgkwMoznBBtUkijU3kbzVNQrPiuAdKXQQfhA1HqiKAZvDpeARWWktDUwiMoiusFK4RZAVYRjFxw",
  "key35": "3XnQtduVVaeBvAq68P2CSKuC48WVFeijzt5eMr3ABdEVZ1kgkBKV81AsNYZ3q2UB2RzuKjpktT8svacjEYUVfDfS",
  "key36": "2YnME8i9GviHVeohPm5sTQVDCdWGcpYXNGP7Mi4vLqzHj3Vb4rHAo5MXcpN9z8idv8YgCh6nMogtoqnm1LHzA1Ve",
  "key37": "2SEU6PejDHfBdreWceQkr4MphUoXVkVwgxTPAkXKXFVz7u6NSjF5MZuQW3JbfETQHSUzLfArTGKQ6Go4PwnShJGf",
  "key38": "mK5PEjfpzY3PVndTQZGAfwR2pyGyKRNWGENbgpmxY8YZpN3Lr9B8uLUUisKxwXouEWuXFXXJPf1H4N9PrJ8mszw",
  "key39": "2BHUwfGmCNWCXXRN4MUEUQMfUHTyJDRoAaTo4dw3mtrHVtuzJGatdmsJXnzVG8HG1ScJXagBX4QSAcFr6zJQ8CA7",
  "key40": "4eq1aovqTo7T5hoVX3Y8Psd1HLzbziSfxVhVbp8JRUBMCD12RDactgUt9UktMKttAgxFBpBRE4GL2Ze3yfs1p7Nj"
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
