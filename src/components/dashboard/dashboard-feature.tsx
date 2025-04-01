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
    "2vEk2aQvrhT8mT4TXma1Ckzg2AxbDHXnA6qmKt9hqLBs6A9N8EwJQsCQMk4YS4cWmt2V7ZXeTdchUDmAEnoqZpaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C63XRNeu8Hohqqmc5ZiYy9Kfxi975VhVBsDGAHju6T8LeT8fNeGVFCg4NsfJegsE6m8UqopfsYp496uerErDcWz",
  "key1": "2Pi5am8u57LXsp6U4bYoGpXSLSzKmKL9ggu2rnxvKb5WdkmqWorvNW9BYeqy56o1Sq4tfmDH2t4828KDBafgTPR7",
  "key2": "5QbnPDv9trcCcqpK6ebGmEVVGtmJvcxKoECyKvm9VFAy11HU4vyq1Bo46KsV43B1J5NdXtiUwSdowBRKJJq2UkTa",
  "key3": "3PUQ6DYLQSazx9PaXXCnw6HP369VNQYjY68kZcATtYSZz8XC4Zgf4Zcbxc949x6T8sYMvtwwMwUzgzrqg5RrKboK",
  "key4": "4FGWbApzMZF4PYs7AZ31oN6m2QNXdfiN8561wqTntEV86JUuLhBkSFGfzWQFzirWbbB7UH3QyX5LF4eJFHj1fEkC",
  "key5": "mE1k2zgkgG7Rcmb7SSvcinfCFV6NraVAYYKhe3zSb417md2bWSeBfo4RGqcvenGe9CzuvfbcByn5wpQFCUvb61s",
  "key6": "4JNiP4g92fedvea89NcMxtwZHep9VcNDLZEFYkfTHj9BWPoKwg4cHiJxvveF44qGPpCKPb4wE78vuiCVSmeKVqSc",
  "key7": "GsUzh5CzHVUdPRBbqhygQzZN67zVV2NaFvDB2fQ5W77hyDK4SWU5vLmVKv8RZgK7Utn2PLHrkLvmjQoqB9EsiqB",
  "key8": "4ZK5hvq3cFL44jVhHjpdaBCHCA7Tgkh5ewCCii4Fds8CyEVBgQ5Qe5UBJQ8hso6DK1qF48mAAHbUgTnGkuSeKLdh",
  "key9": "3tE69YC5eagRTQS6GNuhYBNmXnLpNYWfaq2H7js9WP4to2PB55fHoH4aU48jzeTQHv2dqcFfZdeRbfC5JrJdKXmb",
  "key10": "5mBTHW23e2sDRz8kmdC6snX3WjwGvix1D8DWSp1K63yN4a3Xbozd7e1gWBo9Qqwax5iQpmjYE3rcFH1kGZuGczzP",
  "key11": "4N9dGWYmwy2xG8UxQkMHTVwF9hofAPANfaXpadomaqeF2rD5TZHHw9eT7mTgd5JTj93snMG3dnTgvosCvgFjiQRW",
  "key12": "JfW8iFv7W9Y4TkCQWDDvePpSjZDxACi6UL6WXN26XeVRb6eB4NYSM1SBjVCrmqsG7YHV7sYBNkRkTfX1SiNRSmc",
  "key13": "ZMo2Jq5FL8JzdyVtYFcjnHpFyJPGRs27ogqR2jczi7a2USizekgRq99T5MJiDNitVhxYiV4Le2vtHUdZA79qfwL",
  "key14": "28pQJiaFUgp7FQasYxX47tzcRDJSFCHmywMPf9shbWftvuAbjnQ11pwhKYo8ZatcAwkdHaRdnbHnToYfv4DRjME2",
  "key15": "4jcMz3FcVnVm2eU6NfJkQDpKQhQbqR9TKtw41eacSwreYkLw2kvFdtWRLPaW1LCcshZMvrPPQE3xkcVTh1pAaHwC",
  "key16": "4cNKz3TDVpwmRsQdXNfBgnyS46c5jjXTCQsRCu27MFeFNLfoSQ4YtCLnNkGJtsrxbhCj7Z8azCFJVahrErxgtqZS",
  "key17": "4yFUBX9voKiUiZnLizWMBArvzkrocRLRRwEqG4N6bsZB5FbcHGjvZx9mTbkGe1q1DZPFfgTspM2L26YDZymRknoc",
  "key18": "5AEy4NXtuZSEDXXkaSwWPh2cqQpXSKvqWSTYV3fTKyE4Jmnm4t2FsCnC6N3UHc9JUv4iYunQJbhqZBxiA4br2sDS",
  "key19": "5LXPeeDBSWpVgZpqBu8iYcPzqpN6xkrseC1npcKuuR8X4jkkAz49hV2JsCNkNSSkxFU7XinvaSpcYj8Wwh24XeWY",
  "key20": "5Rp3f37B12LAsbxnZsFQLCsjY4QBCGmd4sURgZDkFygEJJf9WFKuwDywUn3GR8nSVHfEutKT16BhBWa5kGQQWppL",
  "key21": "3ZbGEH2Pxo588wqA7G4rL1exepHAtVZQbcs2vANEiAibUV1Pnv73wux4BcUV7fiR7ozCh4FpwcVn2w8xgwSq22Vs",
  "key22": "4y1JY46MTe348ePQaVDerpU6Lm7MM22WxAEPKsbt2UkYMTG755mVcWLwTGdz1vBuZVGQSAb9S94dKvAVpibZPjtC",
  "key23": "5hdziMVfuqeASURHUqjXupJE9wkEqyy1khFydwxnfYJxFN5PKdzaCmjx6Sy6wLaP2i8XiVWVFYpQMRjtcFPtCAqY",
  "key24": "55LRgct8RxjGtukroxXTEJLgcoxGoU4HggCaNUBfrkQPr5UgxSHwdipExb87RJ3wg8wiVfgYNyPy2kWyWUX9rDre",
  "key25": "4Rgm3jShL2YRyk7jq83ePHUQMoxJwBBQ2VhAVwWE2FkPLYGBvtrHCsSW4F93pUKnDSa9n3J13Ro1Rv1V26pJ3g4N",
  "key26": "36KQcmTuhPuKFm1FMDUCG8DUa3EKXiyhQVw83JPUVvHMk4PBRZJTdtqRzvcGWp4CEBPsmvgfBoYPU9b5LrgquoYy",
  "key27": "3TucaJYN4MJCfpSWusqmqoMoe2EQtirvEZesWnDvDh4mhSrZRmtrJuNZgirojQC1Y5wF7cHgXzzFu1aopP8BRZbs",
  "key28": "2D2b9Nba5um5d1JZPM35aDm5KAsL3iAEvTGAacYAfVKQ3qws4imryRJ5NsFyZG8yoYU3LGfycUcQSdN3bhUxdtha",
  "key29": "5uUhf1mEqhHqi2ipHqySkgymmWxKacTFtJeZ4RrAcDsJ7SS3o4tN6ArU6mqsfEdSGsBFpHYMyTvgWArB9FAag4uN",
  "key30": "5vGzCmfZgx3nTCN2ZhAE5CYgmeZavkx7Vrh1RvgVRunsCVzoZonNV9BnfcYaR7zNZb3nUemY3uvq4SD76YHSx2Tg",
  "key31": "XWkTNkZx7Y9nx1bM6QNW45ynmEwyew9ga1TF47JrnWtpwpva4i21GjgBagGsYFwG7GAxsKV5kaJApkUhhC8coc9",
  "key32": "5xVz17VF52PyGUhGz83ZfxFfs4cXzdTqwBFwiyyM4qdBYYxTuu5QALRYfXSicZzjkwMNPZounD4gnqstAQ2sVD43",
  "key33": "3M8w6PyoEymaNVZ7S4m5wA4SibxkbPnEoVpr5SSqXqt2bXFUbdv5xAe48YddQJovZryGieUpZrYKxMgg8bP5spMz",
  "key34": "3BtTRjK4b3eAMUEsc6eA36bCmueEC1MNi5wsa17CBGXSesXD1ESe5LM5t7pCuiuGpzWUKVaRWT6o15dwwC7c5qoh",
  "key35": "2JBq33RNGodM9ZVDKeap5SuMSSfGz1fAn96HAptJzTUm2QK5Uv2MNLVcy1153R73ssoWJqnTHeMC4D9xVwRbfFwo",
  "key36": "3L5NAwi3yv1pnjkUoehkwmM7NmWgVkxPWTtKzW3UiBEveXKZcvxMkeJX8k2Do8HBL3TfN3jxm1qWPW7dJDzN6sv6",
  "key37": "361MD3RN2RVuY8z8K3WUv21FcuzAwA8L6EF44FBXZGVM7TcQGtdGAJfWazg9fEzrDuMXUT1kkmiv1fqWdEnuDao5",
  "key38": "4TheYDVHEc8ob5HEtUqtZDfaH1h55z3AiJELpPKVXqooBRZkHfKV1LfRRfe5EQ8LVNQt3xfSBCnTnj5ufHZwhWN2",
  "key39": "36vuNFaZg9bDDjQumzfH2sSngpdnVPqMXXzdvfyK7cLX5tdrUjVrdFykzZcJaSfTfsFUqe7DhaYNYJWqpAR5PwSq",
  "key40": "2ohcGajGrzHsvEbGAsVjMLmzhaCGTcZp3sTJZbmzfm38W2QDsF7QyMhwndiP7GJ3cjxE8rht2SrbK1N3c9zxuddx"
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
