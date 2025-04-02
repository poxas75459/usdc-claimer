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
    "2oBncSJFNiUke4EwTiSWhNAcUzYTK6f5dmwa9cHpjSnemvd92aS68SXVMQFsdnW27HDpP4RJjCWbcRmN8evQ36RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a4cVdCS2Fc6NBborCHtRNodd3v6KzHxvcQwVfsQuKd43o6dNv3H93D6wSRkastYBTaXqjPvVNcput2qGDeLgcQD",
  "key1": "3sGo86ha1J1Wo6HSSs9yAC9NP2scPC8ZeXQ6TkGEfCihS3FvheWRNjFK1sPvFZLNAKVzCPF2zLs4t9oM9urjdj5u",
  "key2": "31DdjJnbEnNkcQYZjwjS3nDi9Zk921SgaFTzRSojZ7APKgQdmdb6AhnR4Pv6h8hU3gZoib8wZr62tYuxzjbvy6uy",
  "key3": "5DK2HeRJyWRP3KnrpAUdX1vi26YZoA9UxG9puLpzE25AYgP3My1sx9gH5Wex8TNSgTGRphscQsXfRKiyYd3WEjwD",
  "key4": "zRdkemWPEi7vnTKPHuf6DyDHDBMfaGfoxpAEzr326eu3q35uEhMwiuyMdPJuW3azmD6JybAYozSM7j3LZ72rkFj",
  "key5": "4QXVwqarszoX2z25wpmZgcXHQZtXECPKq61d4S79j7k1F4SFLFVRpZfFUr5MVtTL9WzM74gsXsura1wc6zMhw1Rt",
  "key6": "n9bDnaxVRnhgUqVtMoQLhfy3wdd8xE98Y3Jh1goReeUGiqoUxNwi7yTY4Cz6bCrbTEyF7qGkGkhGKHeR35mXpGW",
  "key7": "5wbWczJx36q34R9oB9rJWit7E8b8voLnBRgLutBmJQvjBmjkHP8WzsSfoP9CHDiFaj5Ld8bDXWW4t7Jn85oCxLZF",
  "key8": "5cAFrMoiKKs1nmrX6pz2JRBCFudP6d2kpPXryXkwnSwPjJFgzhH7J1ZN8JrPd1MaNehEXpKgV3L88zPps9KjvkQm",
  "key9": "4dGvssSykzpr3HMfxBshiu6ad8vTSEx3ke6wLax1KHEjWtU5Cu2MHLR3qXGUE4ocVyEG1mU7jQSdBRmxnAcbQa6u",
  "key10": "oUT2msmGCysCNYDoGyXdDdDWQCCmVktAhjoNg7JoNWAyJPDkkB9QQbSHn7qy23wpsKiEW2HadqZi3FE5dXnfZga",
  "key11": "5xVJpz6NZEPzydzfWKg7xFdrG33wPg1DKDKRR322AwrEGYijRLY328QsS9JtZjc3pitfqVcbaG8W6EvhtGS4JpfF",
  "key12": "sQrj6b815XewkYhv43zZaq8DhBUDN6tfDbRZ6MbvMv1QK8z3Q8NWMvbFtY3j18ctk9jFHyLuNr6UzkgpNxJExH1",
  "key13": "2dm8dkAmiXFmLQqiYUwxqQhWPUMkiiASyKLhSwwvaxZxR46D5H1i86Bgc9N449RSJfnnGmu9ns1U8G2BkZTTWkAY",
  "key14": "XuRFZoMx9z6Jn7g4EFE5X6aWhcnymTvQj2cKKm2nhMvZCoKMqy15vxMnzuSwS6CesPo9cNRu14atCdKoFwmfToV",
  "key15": "66YpU1J7RnnqwGMug99LSaAN5bMWwKSnBtohK8qnEGadfTtVqzU4g3CAHf2xEaSLksswSnxFQGo878bJ2BpqHSPg",
  "key16": "4m4ibY3ArZDb6ZTjeBFD6e9NGSxnoRNB4EA6pHx4CnvYN9JCsN9G6M5NNr494P5DzB4WmgxQLqT631BsmCyHxZ3t",
  "key17": "3pvu1N3ksp1vZpTaTSukAhSjjRsST4AW8LNodvD7ZaKhyChRtBrU1y1QPBCtre3epfeYfEukGNEb8p2dD8CsUW5v",
  "key18": "3oW7Gf1g1ZWkFTYREVVF3Arv8TCrid2rKApiSoM49NrF4Xc9xC3gbSg27EMdkKqrGPwTUzWy4KMcGkX84oYHTN4D",
  "key19": "3uMuLNB57NgKuG3phGHPhyCZHtfXV3PCuHwinZ2XjW9GLHPKv3gyTfXxta4SC529MRj6c2LD7Qmm8zaQotcR5eri",
  "key20": "oJqJxayjK86judsqfLdpZDjMr6sXyoRnqxRfHq4wVDkeMqDb3SoPWJ5SSTHibHLKZmxF8XPX5DuCLW3nzrmqBN5",
  "key21": "4inUzTNX2zXADNn37s8ae4Bco2BeGAfECnHhYx13eJmxQA1GcKMU9jZwXr9w3T5qaqrJykSubSxFU9TBSrzVMPej",
  "key22": "3HoU1MRUrgnAemFbfA5mwqD8L4hE4qwKNbdLM1XMfqDNuo96vaAvsrJap2zG1vLpkuFYtTS6twD14f6PnTwxquHq",
  "key23": "3canGqkApYHu5b17A8zkYf89BhLNg69bJJWJsm7GPy11rFpVoEQChUY1ui8dWY1sGtfVXkFdVAU8wPHJKhWwJux7",
  "key24": "3T9gqcZyrNNHWBcBCtwhkw3WV3Vj6By8gGL3NFnxz4XVNhf53UHnwuLagVZVquRfBQ4sJJWp9222fTJGMvgYLVvA",
  "key25": "5axWcFbPpZkwFVvusPLCxwR2sy9yHHYNggps7FLbnsDP2oWcSq3SBA3pH7zedwXdmrdcHEosREAMZ38PuC395Jir",
  "key26": "2mh4LzXPFZGNj9bmi1oMNkVoPWZGguchoQZdYAP9kmX9U6Hiy9KvZo1f6rrp8nUUsKRmz3jMF2tBW5qoVXdSmnBW",
  "key27": "4X95MaDxvQZxos8mKF2EKZRxRaphpHqkugCWhBBRLakKeDkt3e8p8oDedNd9oCVzgWd7mtMXm66HcT2u719WdFwo",
  "key28": "2S9RJ1b5goVrMAMpGPcH6ZUNXv2W4gyX7PoY8fEoPxQWMP4QEw5gJy97keA4XQBPZ8VamaADAX4RSCTH8jgtYNBk",
  "key29": "41qgqBVU6vcbKpLVpc3QYEJaX2xLrY5cy1Gh3r34AoyEnXooNZji5mtghLoYKGr4aqdsmygTG9YrjUt2Ld1XxZ5m",
  "key30": "oEFwTobMUb6oi9sFYdLPevUBtEWVGKB16qyRmCQ8SiXQKv3KD7km71MUX2bgDfBNRKUwwZSuAcvgMJHV6VXK7uy",
  "key31": "3fNoT8bQq3cgZVtDNFhMkfSzkdEbJrv5LbKUj3aZr6vCEK2qreudCfvJMvdrAEGsvjfXu8QZRGAeNr33bKmP6Q7V",
  "key32": "5xK6EVAX7TQdp41VB7dY6HrvrztzpdLPehVyWv8GGMvDBHgEx6tEfCCSkvbnpu8kB1k8niJ5b7w3nLJwnuyx3738",
  "key33": "4XURJtejDbKhjCKej1CJEi5mLG81tVnVQWRMe3LnqkpGAJC63VCZBXW5qzdMJoLAePcNL8cBcMSsyhZYtx5CH2yx",
  "key34": "wXMdkVm2H6wGJn61kVVxNMV3t8jdHy5vnSwBhXzuCfH4kivtFAhb4MzgWgWV8jHNUQ4ivqRDUQf5nwx8HKjq5t2",
  "key35": "yjivKdiCARsci1xXjqDzzAj34yVDLDxS75ZF1xi7wAL9vDUqM8G7UfGGQ8GB1ihRETrpKMnTkbug66CCNmDoheV",
  "key36": "26TVVPBwtuop6HgFhH3tVUNzbmnk1pxEVUtHrtETEQgn7hrHBiHS7gYpeFFyyPqy9andv3rKaj6gf9w8JKJubxqU"
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
