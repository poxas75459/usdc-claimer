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
    "5BSwHiGgbpKSzBhsuY71ZpVLzogsB72XdnPfgcrz3ZVHXEZsHHnwe4Xhx3AxfMExLUtvxmuyPHLaKPhPJ5hVCm51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GQ6bYjWVGiNCfg75CUWjkq1XsUNqADF98GnMLK21cF74iRvDwPziPTbQiqb7xRC4JVZCJ95CNjqcnu5aKM1HYb",
  "key1": "47mybmE7cL6jpkBPjcQwMccxeiEJkTU5o8JMHHo657e91eZ9TM4JFymUC2XnmJ6q91svYFjYrSXf9mPqF68VsZbD",
  "key2": "t5ufmJvPL4mxFFCn1puKpWNoq1yWvQCteQFhKGzcNimxSn4Tm9EqECrrrgPmDEeG5qZY5g2yWxXu3rUGdpcpsXU",
  "key3": "5nsXQfzndom7oQVvxEhByGJ4bg4ppPUNoWQ22fw5jxUWZdfERAXdJ61e16Rxfb7r43htMyh3cbyMpFGVLuAXWzu2",
  "key4": "4WmsvynayXAynTFqv987Gr6vMfapcFqt5ng1KJA5GanmZQ1ycRQpm1A1vZcyqNXkcdeDUat7JrXfC22aCtQVzBzd",
  "key5": "3gEuEQp3XgcJxpG2rwmGA2b8Axqsmgc3TzqM8NpEnFr1WBCNeRM6SZHBWrD2FNKCA4zDAKh7o4GuviNXVTwHFBTe",
  "key6": "4Pgbs8yzSYG1mmw4TzyVPQWBxSu1yUnjPGcM2Vpv216VRi3fBR1FdDunumESr8u6skLfNiApJznVefQuzDoDthLw",
  "key7": "5BVZ2T6bnksmpRdgTYb2ediVExpws9EuRV2UyjgQRfBgBA339pXFWPBeqLGKGLuxKMXjKF16psqnyumgHH55yZoz",
  "key8": "33iLrPWDvGDDDnWQ8Dc7X32xU3L69Eo75qUzz9g6q9rJ83MvMVHRSH9c1s5zAa7GSQWTknAXcJzuqXCQkYtgbFNd",
  "key9": "3AvsGLygcfYXRQoPJYaBnJx468PeG5PpHeSZprEJf4iWZcpJK29ZwYXbbMQrnSRooABrihdAqUGuWUWdSY6avGmQ",
  "key10": "3NaHnTGTb4VAGghTz1AAYpckDxCETTcz5adwQCBE6QUuzGpW1WrVGcHRBkJAVw9Dev8hozDDAAbdYRQBp9FYnNQH",
  "key11": "YBKQ9GhxTBrAcN5z7FviypqXbA93qzSgTpmhdycHjQdamMBK2WRrsQHjHdZFRS72yp43dvneb6qdTU1RnFuDRuG",
  "key12": "4MHsj2wrDx89Ffiso5CiuT9FtEkNHwUcVi2QLWvxbjXX8dSVkeMXhxbiPGBw1tfzVv1mLGiK7rcCjj7aZNhXD5X4",
  "key13": "5gtSxwbU6cVQTGm943hL928uUN6AjGnxt3BCXQBqJwAGLUmyT428tC5zF34rtfvq3kvFiAraFwpqpFP56oUhqLhB",
  "key14": "27QHwaFcT7nWFS7Sik7WQS9w22qMYe3sA1RB7CcXv8ujVKWFH3VLFXay7eTGTHBF7hoi6D8rBBWiCfJRNf2HnBiJ",
  "key15": "4wF9i8RHMgASpwM6EP3qJoEzm9ZfASSCQ79ZGT8fG8KuQP8VP6k8RogzZbUPAopX8WRx92TpNCodagXYfsddFEK6",
  "key16": "5wyq6HAoNGaCdmwmV5Qbpx8MRFQ71V9vVJV7S7qGSCoRZEUBwJGNLH2D22mhCzDjbUGpNJqWtiYhVjRqftJwfT8C",
  "key17": "2nh6wUMjEMSqPqLnBjY7j3kCe9zjz5Y8D5dPK9z99NFfqHKgarUSzscg1mFZu7W9o7bHBFPPuavjumnbpugoVxce",
  "key18": "2TuLEbcRdspEQmQuNvzjmhJ2EQhUvQdnLmSptvgAuoGtUcegj7ThgrZHFUthrQMT24qkeN2nVzBp4H8ngmx2nXuP",
  "key19": "2FzrQR8QsoEmyyXiUSZ3er6D5VmiqPgwFBJVN4y6utYZbYYsiPpg6jYEK5RoraNedEvHbW2bs8s6B9HFQjngJY6X",
  "key20": "2dCi8RF6YQzTTLRRW4gNysXpbrjFMxq4WTXu9rsasA6mdA8ZGSGpQcnj1aVnHoRtQwj2gq6JNvbR8sjxThbWz4s9",
  "key21": "44Zjnyd5MS5HESyNdYYp2iMeykVCUXYVt2wMYVTmtsum2TDzp3wppYRE17CVWLXoYEKYEWdGRzT4jLumDS6RhZAH",
  "key22": "4bVkdHCLpHq17pbR9X7MHj3gX1j716wxxQgivY9KXsXxKP2LyyPeN8Q59EmXmiNzRHXfNzWtkKGsWvJhDWTKbemz",
  "key23": "3ZLDfU6mcvuCjiH3khc4SaGNfEMJktRsGPNeCyizhWFErQqLd8gDDD3paudYWsRVNSt3dKxiZXFZVbb1gQkfqFus",
  "key24": "5sYDmxsLLdeLpqZXXqrp1KJM1Vb3FuVFxJGUYUSyQR2YQiAnRD7H8W9rPVVP1G8WfQZQ4rktYJNvZg8mDfhXWwQX",
  "key25": "4hY1cNjbwF5om6yDRwiziB3gPc4cnWh9aJMfty6cYXD8iHuF7LZq5DosNpnxGFhZRqZgK7s5CG6CKRfQtkeLTdx5",
  "key26": "5eEhTa8xAHYf9pnajCVspzAhA5fxmTypQ91JGcqppLKGqDdcPuKAKUCfb4YiCHQ61XzCDe8BmxdCg2asEoVg5g3t",
  "key27": "4fy4LmFZbhkiMgTRSAhurRxcrr4xBSKMYRV7Eh6APjibX4Yk51ujFjTq4GQDP9UfhAP74QMzHtMQjFNEHBYBNKsd",
  "key28": "3aLBNJpLGZB7fmPX4jwS1p6XgA2m7ArodR995s2DMLJKR39nsNBq9KajbFvheyfTdd5CBiy1rRSsepTQSLCdibbS"
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
