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
    "3ufawxBk1kz4VpZbTATDgWRmRvsGa7qp669qe7ibJrvyd4tGNnokzdjCfvYK7fdMw9rnT6zb72R7Kx9jiazvFutn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LU96Q9Yiz9RLmzCaNQf38wL4DoT9cwLVTwAtp8mQ91AuthhHiNC4HFxZuYWjE7uC4svKabEGybzo8gXsPetkAWQ",
  "key1": "4pfc9CztDoswnLc3TvzTWkYFsXtua7PQQx6FqiLVkUUvC6SEeKnv8jCcpkRTVvENnqw5rJVyALRuC7jD5ncr9FqL",
  "key2": "252rEyh4kmYMM7FVy5cxpfMcp6XwWw2UX1HaVFb1ZG9FeEaUkGNyXxjPvoLAo6wLgqS8RaKDPCtY8sfQVVvY4PNG",
  "key3": "QLeYWANeiF5syU3Hwgns5TaL4yew3AbG36Z7castqP4dJo6KepdNo4aW3cfHuN7hWz8U8B8YfMzpDCfVuuMBdaA",
  "key4": "54vMRo3kMMDrBM7WxrT46DgsxoeK8v1BkRygmkDWhquAuGF2ip1LgZ9W3ac6ij5CEQMCC2kcDTM3CWFAjbYXYidu",
  "key5": "5713yQyZEp46B57Lu83bydumXLZMVV3UePL2PgAwgv8RSCe5Js52773mtRgAmML1ihkJwMPQTPgGH35mHFcCRTQB",
  "key6": "3tSsJHJQ8UfRWYJ3nhAe9gYsx1LnH8By2ye8wtq4wuQ5fidkceTWd92R27sW8hb4bWQFsdWZ6HRrwfyGeN2uSptm",
  "key7": "UY72u32YwzZLtepAj1VBEGm7VmRTDaH2mQDwesnzSeUbENRHM6nNkvmW4S94b55rPogXXmsw8FyqibmCL6Zk9dw",
  "key8": "4YBFATBbtrNxV7cgPMytQ6WDBYFCaSPMPuwer8o19TAY3T3PyrFkmDgsgoNvcGQFeE98WHdLX6XVzfpmvEEYkGg",
  "key9": "2KLAy1nRSEZUUVXN5fvVWtfYZMM2HDFCjdNrhMA5wLcRaR6zt8k1BN11MPjUqKtQxy6ghQuAAsG42G5Ab8i3C9RC",
  "key10": "5VHfRNiK3SnPeEj7qTfRKZyrgyWoQv1MK7R7mkL9fMhFZwVfJZAbb46MP5yaXouBbPusqthY9SUJSg8BA4H1UGoX",
  "key11": "4r9cf9u65juWczYGwRBdi45RRDBnRyMaCzCykSpbtqy9NnBmBVSgbaM1mxXJymBbw5SCgjbkZE6TJMHpWHpcx92V",
  "key12": "3gEzaCECjGrjNRu2Hb5VgZThooTe3Z1s3yqdk1cFJZcjNackhBPnE2DDDCgwLmGA5gWWP41mcWVTZFWG6D86Hf8N",
  "key13": "491ED5AznJMGJ4dzYZk8VggWcDccye9ScUMoEoTAWr98Qvkm8sSmYU9SMFcAEDFUtUsjzf4YzamDXUsbY4J4vhKb",
  "key14": "gYBS6Wc3M9V8wMX3N8PrpZFMDmL1aTs1eNRq99bh7Fa9Sp7ZQPGbv79kd7D9Mce5nyVwC4YdKi63LnQun4JRXV6",
  "key15": "27oC4xbN4jgN26d6QywE3WKKpF9N1h7u1jPnfwZpHzs2xqAZ8s9oZNzN668PiaqbnEHCv7Xem82GzBjki84ZPXtW",
  "key16": "4qf6oSAAay4s8fSYo1Qh8QBXnLyRSgmTj4feponYhDAHrRWWh7yFwFCnnkiPYSrdNivjw8e7XqPFrdPxe86TRPqF",
  "key17": "579zVdHWt5gxyh27CWUM9M8aSqZcmjG97rN4Q27b3jxLiuM2uuVN3uU8TrekBmUaGGTTBw9WuoL1jQkBCbfVbX6Z",
  "key18": "zyV6FLM7sgvd6kkWdVYb7Ubw9Z2fVs3jJGbjvbCEZ7HdMtGbBTkdNt2xFwNE7QJfzp3vJgEUtS4sncfYFYGFDCX",
  "key19": "2jHFcs9caMQZy8VRF3eFe8PYJpZ6zkZPv5Q4YTJ9zLhYoDY7tRHuhNBXXbZn8ospbQs4bqM1skmQ3t6NfHbR9v8L",
  "key20": "4YiAy78ffBQQcpiTwyMm7s9CCUMbgAzzTwr1W3ETRdJReeiqnSBfDtF5QAyVS7iQZriaaedydtLTfUgNh2YXZiMi",
  "key21": "pzJyAewF8P2CN572cuWikCihZuTxeatxCWveAZWNucxsy2NQKXFkPihYRBvHkSKudeN3ZbfqX4aEcAyx65huaYo",
  "key22": "3815sNvspDexcWQDQBFc9tWL41f6ZTZDLSvNd4GgygSkKjGsraCfspeaTXcSwgXibpkBGPWnrccAHGqBmcRK7BHo",
  "key23": "4Ru1w7DPYfp3mbW8JLXK6NjSzy4H2kEXXjJiM2k7PGqW5omHQX1kEPU4e6DPsSkJYnEnPZ8wXz6Pimq3AmH3AmuZ",
  "key24": "5krDsMdTPdjPnV2kn7BUMPgDPxyFuJEEaLeNVkSpFfK45BmudCjrbqgYAZ1vjd9sMPv9Dzf3wk2wnVaAq3uJ2Dkg"
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
