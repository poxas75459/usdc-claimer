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
    "uM6DP1UEDHZ29hz5FY2xvC7xUFqpyzZvbVLEUtKzLvtdKJdHf8sNH8UHNLrGTNYXJtynN7y9cmfU21HjooMkXVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtmgawjZW6VkTJZwEznEnuhF6zEtgjffgoLQRPZv5QfnByw9UKthutbuUe46t3VtXZRCNdbKAEppy7TSjwxUG4n",
  "key1": "3Af5MV5C51oXA8pQDomZDxdszf3THTKa8VTqhTmkw9tyJsrv2vcqTFJVkGf6P69fDZf3NcX1L5B7JShhycbebAmg",
  "key2": "5kdhr3X2zN1NQrRxJPdopR5kcVKBS2atmNAHW1upnyvQFQyt8Ht4zkuXsYr6Ls5nVVGPqGWLddYRbs9rUm7Wt4ob",
  "key3": "62xyaHbHmLK2a7D7MuRaC7thAC3uLeWdNZAW34J4Xs4WQkAgwZfkiSuuXqPhYQM1VsUBdXGUWFxAb9LEztRhfQQv",
  "key4": "4614we44sSMLeQBTczjfqVnZQHaX8uhjyv2YLYQeQNNaSSvUMUe9mbtCyZDmahM7fzKzKmJVNXCWD94Ymgi2T5zv",
  "key5": "3ZKHBhSuWnYi2jzsDd8QskwyiFXrugNWgDWmjZJXd5qdjNqQRrTtjkCFhnJnbUZxLEKh4JbN3Ca9eo78W6hFhQyP",
  "key6": "5itmHkexS8cdqLWnVv43wUAaQdqY8pKH91aCqVA6jevgNWcyhP3mfraHAEkDPkxLzyk8sQJEHtxHxkWFGYYxqNCs",
  "key7": "JySqHn4b5LG499K37wJXXQiT8ZYdTUTFyZUXKWEit16TRpsFoKbDFpi9bWeGwSCWcrwvH54K3DHpEvxAgeto3Zv",
  "key8": "3KW25vnggF4yGCQy2zH7z5dhKqzBotBJgyZ1WPrjBDC8Ji7Q4QAGCvskxZVS5iVbMVtZKqa75sz4EDsBZZ68RVuu",
  "key9": "3KSDjCzeRUs2TUmi1rji79CBEjQLJtHg13YU95fD4L2woUyfafLhVXaR3tFHgK6hzyW6m9yaJfm1i23T3ey5ChUB",
  "key10": "5wRZQZpLG9vQzgwUjVjQtgR39SEhhZUPqBCyUwVs8QdazhPnyhSff4TgtfpJUfPsHMhGGeN6Bu8womeEBUC2iCoG",
  "key11": "WFA871gs2SHfvgnf645AnMxqwf3U5BoPdcPPN3PAsdRutTwmRdnJ7tiZVGCyrioHQKd9fTvc9r4ywoQD2fCRbtF",
  "key12": "4KcWzp6wEXEfEjyJM9TPbmjYPcUZ6s5ExwYmeRQUvMitDgxQTrmbJweNcavKdvTSKT7UoVbyQw3znpiMtfbvGPT6",
  "key13": "5ygQLpTSTnxs5QkQjn2oezAJTm8VK4ea1ZaHkxa6tviEeNbYt797QorjU61c4SRoo91fB9R4ML4b3SMpLHF94AxJ",
  "key14": "4AVCkVJfnsLBsaD2j6ks1KZ7NaVHMLJQozDUZigveMg33FgpgMyqCCvKpnrQpiJUjTUWS6JvNy2nywmu2N3NpbD",
  "key15": "3ysSgoZJVm33st8dt3cxC8DGWcoF3a3uzMr8icwjy88kn8qm2M4WAtAetMS3yXPuNoz9zGXwB65uvdkuBshAk1Zs",
  "key16": "5SyJGT3didpgr635Y79gz1bg377p4DwrGBxk11T6Wzyo3NLW5Ec6ZJMxGKumhT9nDBZUAzhjVyhwcSZaGXfFxZhy",
  "key17": "2GgB3k5cxKMgedVeVWteDYfp2fMnpxy8FJGNqQEeXMb87xJRd4zc16FjNdZqvaMbhMTXQzuU8LZ6Nv9kZrmHHR7y",
  "key18": "235ScSgsdcrTNsRg7eJnGeDKBxj3jxtHNof6qQ6w2g74DbKEY3k7u4GzwW8595sJouaBZCQicqbPPfajEEsxAjYQ",
  "key19": "4B946gyHF3VL1MoX4FvZSzJPKSzH4GGSDz9NwMhB9VCvm6Hf131bmpLsNGtgHocJJpqYxZj6kXfmSaMRyGveEjTS",
  "key20": "3GZ6DT78YmY2N8x3gqe1RqQfekGSWUXVmAJZWCBe6davwCfBS9rVaHQqiB6bajmMTdeUiHoYVXvBccwUeAq9Vcgr",
  "key21": "4euLc7cEn3fcGwpZ3TTpcS4AvexMt9x4P4W8cBWgWuDszXmnNUQ3tH4eCCunvVgzp6FoLGADxJiDSXd3dKnVeHrq",
  "key22": "5Z3hqwNQ6c7gkmZYDjJ9GkZNRwGQqmGhnXB69JVD1kyWewfmRpcEL3X8mFqCYtF1y2VQaxY8czkoy8GkJZrMV9Jv",
  "key23": "4tJ6qotVKi1rVg3aTjCY6pTCB66maP2Mb9GDjJkr1oTEBu5nWVWSF3Wb3Z1txmZ5DjVuiNoiWZY5fhBcmGazcwcA",
  "key24": "5MMU2db2r7cQEaDj1yhmw81cyL2cW1PxZPSkuXHUTcaQbRVNUKjmHSqHUr8c5gPJaUDmK9R7wsZc3mTWiVUU3J86",
  "key25": "2m5wHkbxA8cJVpMzPKtpUguPQ6fjaex1jFYHtGxihAcXUtnZngyq1Cssr1BTmLLp3VgkLLskGwWVg9adWi8xVLHJ",
  "key26": "5E8BmW5xqk9mXLJk78heZwgLJrRjmDkzzE9egHGVpWwiyKE74fUncYpxiNE4qGYaDUABnH5JqNf4DDqMeTfosVmn",
  "key27": "56MUFMZ8veAhddtjBzpyA8p2sHWkKaih91TU1BjSNeDrzUvDptxbRQ13y5RE1fQ2WefaQUPHPUM8vQZEi5dhCyGM",
  "key28": "31S11VLhNLu428ppUT3vL7JH4T7cKLWwAFpfQrny3Ds2Z2ApjmYhNMokfWBDAk2nFdUgFT53xHCxbNWuwnxEcYpf",
  "key29": "3nveZiJ7yuJt73UqqhKobJfz65nbXGCgcxtN74AVvSxUWSbJFSsYwVskthVG5G7HrWj5RBQ9HsnPFCP4VVfJS3Vh",
  "key30": "4L2ZnFANks7615hqUEgw4Au83BgqeerBbUY94vHbHNTLUoFXQcSPNyd9pHeP9mvUdrJ2cmfgh76Un8oASZ924zfr",
  "key31": "4wDhi2jBrJdDhY79q6i8jFHxPTfpk9jXm1qYGCEZZ8f6bb2w2onAfqsDK7wzYBtFmUH82Mp6ZZ9jBgUbPWNEoGE7",
  "key32": "3eZ7fC1qFcweyxDwNDyscEa36v54QNzHG7y1h576WnPP6TcZan7LSdwqjC4YfvUbR27XE5z4RozJJxjyhD1dobhd",
  "key33": "3nojnaiM6hLR6524cWWzsGpUDkq7jn5zDrqQ9zRSHJkU1giVu2MhX1DYCfRdjtcLbMszLajohX7BUim7UyCXmwAo",
  "key34": "643UskhL3mmcrHQNx4WfGucmq7BDEZ1XYbZJz36DP6JiFbrJV7hj2rc5wpEkfp9C7F6WpYm91KSQjEB44aifjnzQ",
  "key35": "MVfHaQm734vKoDwMAtDJusACWMe7cyRxF9wAh1LYrAd8Gzswb9hd9xNm9JXaEez8CXGtFBbaJgpDVjBBoJ9vuDa",
  "key36": "4Hh97Yp4jMPU3mY78e9hc5y4WXSAKvbkWXinrPxet5VmKbSXh4bafZr9mTozZnpfgvVVmKuUh8coJN4Zim4kNx51",
  "key37": "4LnWckqxPSLMxsDevWiqboeMpLioHN1dt6eN78GKTqjXPbBG9BwGY7ncUzVZ8feXhSQEiwoRztwdzyg9zvAfGdEr"
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
