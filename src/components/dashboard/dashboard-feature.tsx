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
    "4nRSENJ2JYJK6JAP6WZVFEiNhVLKFfkgcG5cPCpM4ydJUDYCfUHUwgxBV19JcHhPKSDWZVsF3wdus8wvxEriRoS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JieZ1DmqPuiQ3N3Z4HcHSSscLEsbzatgw8y1ZFpGpXGHqwCKzzPqFYmA7sW4bGMJuEaWa9piVc4Db4Wun7BXNUn",
  "key1": "2pxxqfGejBkZVu2xv8PpeQutin6aDpvfAS2vEJQZ55jKBmuvcP3xC2gxBhhTCUxqmiYXhyhJfGNFbodGCHUufyrn",
  "key2": "rGe9A9aCsfCjp1QT3aNjok7mJwpWRYj2Bsxyk2XWU9YExEF231qPuJGCvRdiSBuFcmJzrrFsJuoUH5Kn3AyqPvi",
  "key3": "MyrtARH8AxwGeiq8qcjYzJ1QXAfgoobTBHiMomEHaPN5n5LxNYBNFXuBGX3uADy6nHya3m5EFRQqpprPpadPrza",
  "key4": "3N4eqfYon7AGmdDQBDzAyQxeYac2MsV62TQctd7CndrVvDXSGjw7tU3Zk1F5tkkq6BHrmt2H3JJTDVQNF4y2LjuZ",
  "key5": "2FT9egtcd7A2UW3wVn59xfMz1CK5nmb8T7SijGbqtnbjtfpa3q85WSzaaiMEvVEyAn8YPPYVXktY8HcggUznxCNq",
  "key6": "57pH9YUcn8AU6KgaazcE8DNwqGEyKwE7BH5gFkqCvyhzZgr39bemfLzoqQvEJJeqPdK6ES7RFxF8ixGhCfTKwfcx",
  "key7": "4FwBJbzFY5vPc4RdEUGFQf1ot4Atv5ubWSqZHmUfVqcTK6HYFPkdHbg2kCNqcU6rvYzEfZSY6ZfEz4fSutZuK1Yh",
  "key8": "26ZR9Lj5v11AASVYoN6qpZNr9nrL49mAtJF3QUmP1i3VPzR9us8ThWZmwRGBxXsojiFXY231GDZHMtaBcKYtzA48",
  "key9": "3yWcWvHp2Ugcx5aVkRXB3jUJdxS3FCRgTWHiMD5guTHYZTtM7DV5K8tUYXYteaZoSVVhZ2BjgPcZbU5aEKB1FSF5",
  "key10": "24nfNC3v5kkc1BCB74zHrxigFRE5YKqUFdmizGMa8S6bQhce2nJxyPNoHAu7VkXMpLc8bmRpwroyJzfjZqDj1oAp",
  "key11": "vHnFMhqCQHiDnSkFPhSZnJNqVzMBpZhe4PhQ4TWMEU5GpQgdqTHFixUaPnuB2UrKns1om4SQX7d5NegbHmx41NQ",
  "key12": "3iAwvw1JSSAiZqSCcgWgK9mGjJ5NmUQ8a4kHXjJZPZkXzKkK55UedJZUAHnEXtQtFn47f2bkpd3rFjc9ATzKNhGz",
  "key13": "2ua8WJfUjAgWBMXXFCyKHUM8VTaZgFiiGHJiMfkHYzAheLpQwNf99DJogKrdMAZsNdfTKg4DifN8mVy8kjhjPyF6",
  "key14": "5qxykAGCLN7F8tDULvFe1g6uCuWaE6buwLSbCsHKUqigF13R6zbxiEokkS8LzG3Q43j4e7JCtwAP3ES8JzJbKBxM",
  "key15": "2KHf452WJdT7DbbB2Hv8i8qMzxqZbQh7meUWxTeg8rwnraJSgov5Q4NNuGSdc4EbargMtNK24piAjmmGtEaQoFi5",
  "key16": "2Lqdf5tyqUiv3hFTEdnvojnVzUG7L3B4FmULwMFGQnqx8bGzSjDzKssE488TzTYGKaLb8y4XUkCibywsirsThTZb",
  "key17": "4ABvktcPZc9UJxdFsHUGPdPY7WLtd6hnWNYSqZbEpeVvvDnSJqML7xVWZ1eyZ7WLTitEceg6Mn3FwUs3HdhTvkmm",
  "key18": "3Kob3tQYM5VD4KgoFu8ZBGqRCvccZApJoGW4DQmGUFrtv46nhtaEogsSX7L88GdbQzxLCWc2Gz2DUv8mr8hGhLPX",
  "key19": "2aUCSsdoJ7ogcBBfyteWFQmEyVWYc7QDjKRSFf4uVdLMxNWSUaBna744ikEE9se2TNf5wGpHLDhZAoMthPKrV7NT",
  "key20": "3YWoFrcbjCAZVGK4muvvdRyVn4EoCkm9UJZjaFJLzuKcRajfFifPAqwbQivfHzrrZkyyfYYHcP9z3Kji4mrHkBgw",
  "key21": "2aasQkDxspeiFCqhCMbwkFJpTe86GkzXLAQVA6DJuVqr7rxETLycFSnJhcjp1t1ktcd5mzEa8eGeFkCgoQM4wq7c",
  "key22": "4ifsRXApMPUCmxidxrv6F9uSpB63fR5b4WXEpGeG7Wj6aD7MnLA6esHXxF3GHynhQkTYj8VrskdrDJFJAxk4YX5G",
  "key23": "WgNf7BN26ypqN38wiHjR4gA1SpZCUy5HVKjahkjCUAPmx3VWd53uQ3twUqzBetZ5Faq1w6MpbwSHPKE24KfGdCw",
  "key24": "4KyucRUvJuL3tqsGE9pQJZijGgjJaPZgyQr94YUmqQ2YuaxStQ8kEbC1eKwbjKiho9fGuAr9SmRpRVdc1ECsE53F",
  "key25": "4dShzAjA89dx64CW4LNHZ2MvnD3GWzbU51sVEpQZL7QC3R7y1aWditC2NpDuKtN2CXPJNMtZSTAHBM3BpgGMB4zT",
  "key26": "5tKijUxa9X81EtmyZAbbRdbae7xtxsxcmM8N598JaFv3f4mSvJRrzi99mY676vtuJTq23zMpAx7KEf66xXPoosg5",
  "key27": "3EwDjQUwtJ1rD6sUu4oNokaMMtVwhNAaUBdn4zwVuvr4XTLvMsTFFNenws6GkQLN8YEuz26FyGQtWQwm9zFa2GGy",
  "key28": "54aYLhb6yauBTL5sT9rLYdFPmbGXUrBUQQuunDtAsM3piQGKf2uxVtv8vhPwNqnRpGydhCFjU6xjCjGQ8jtbpCPQ"
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
