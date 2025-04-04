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
    "43487qBqez1w4oLAYo165buERSxW3KBy3KcHT8P8jBYxPoRDW9aobRco3m2h4g7wtGDDjtqaAGVkpvp7B6xiUz2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1ysriFVLV7XsTFpfw2f84R79LdsmhHjavKyQe77QvdSoQc6q81t8xDw3gdGhyYKZCJt2MZQ4o8CAaohtUZ8c5V",
  "key1": "39729p2DdjrKLnekn8RpevfrutT8jdzH6vrWv6kMqDBj7ZmQc5itYXEWzRnB4ue2tvVUdNdJixqXtaD1bmJLPu7A",
  "key2": "4LwiPmX51aeGWbgNEhpHLYbeoY3JrZ5SFpTrwogGHP3fMRduU7vmR4MJnu73S6UgsJEuqu7ApFQbHU9St3XwYduZ",
  "key3": "24epNJWh8QZb66tzxFaPd9cFRgyn2wiv3LHJDuhkoXWk9NG7RNjEdAa3xZ4SxkxyxGAe5Qc5YBV2JGokskfQT53D",
  "key4": "4xFbty9aJUPTwQ7fTV5b3XMVpwn1KRgb8RzmitWzdYAbzM9M2jH4gW4FyAMAejGZ76vG1T8iTqnPDHrw2sKxSrk8",
  "key5": "5nfhD3j7VUtz4cdpUwJxe44S4Pi3sSXnGxhdNiPCpd5ktFYnJVsYpb3uGUr8KjQ51KKfxZh2cVTusVh51UVLrAgr",
  "key6": "XnCiCLFYh3gEzNG4PwuddUMYyZdJT4MVezK1okJ5UuiZ2q9UacJz2YrtcXLcSbBspoa2EcA5BY8hdZNHcrZHG9M",
  "key7": "2DWfMuSP7PhJZrVbYkWuLVshshaVpKpd2ymUksNmdG1saCBhTGxTMSGifJjBZ6VLtjoj16wiR1A5Qjbzqiez7v3",
  "key8": "2PYQeTkHcxwiZbBR7s6MDigTGut6YaiPiLEJ4aWtoFAn6psz7CMDznGjy4HFEfoKvFLa1o1gT1hy8DJszaEKnuDD",
  "key9": "RmufyiFYPNtYci51BTfXvXte4dKmQiaT2Wb8tPaFfbTUuEZmv1ZWqYpAP2MVp3LC81oXyhB1jrfNhZgW5qbr2mH",
  "key10": "2BetWpdTwB8t8xgaTM84rzM1vuSU669BwDFSGQcHsmmZem3HCeMpEJtNNVz4rPTiUhpGxXB7CMH9PmHiV9KZBcmT",
  "key11": "JkKkTok9oDdCm3KXTVvzrx8Yt4EsqD72JdxhNShah9wZL1J9rvX5FUaD2Yb4XUk2tP6yF9MnnriWDLgvH78t8bQ",
  "key12": "29c1EbL6Kgk78a4GAoZ4yuftCFR4iiJgbDbKAW9iS2hjukv4RZfBEudrsrmsUb5D241cRv2kxwrnf5uQQ5hUY9hQ",
  "key13": "WQsvNg3JnstjWoK5cBZGrg1KS2YfBe2acCuAPGxvTry6GKpf7SdiSFdph2CkhKiY4tJ2T4dNmsxpz1tCQ8gHaUp",
  "key14": "4e2q7GKYGpijFwC6KSZybxBCuTDp6h2iVfUsnbCUD26BcNNxB4jNzXieYqkGHmVFXjfjCviNwZ9pi5Fynu6wcaEz",
  "key15": "3jjJarAGFJvvHZu7dFmmnCiuwXpt2BjxRsEZNpgd4f9k8H2rRya6jrpLh3QBQYfRwpoDkuyDg8kSe1HGSC6guKgC",
  "key16": "66s78MkXsF5fJTd74YvHkDRqjHdYKHMeqjrRZUeTM2TCpTzJg6Y8nUMvVDy2eWEkHicsVn9MjxLXTSY6pngxbFjD",
  "key17": "4YHhEiTRoqwjTRqao4ig2ScZZYW7VRGcFaYwBQJGKhvp8QBJWywfS5KZrzvg4uxd9P9r51AfB5qwCjHMvXRyhZgZ",
  "key18": "4hWGfUv4WxqaKzz5PHHXTnaDANYdWPgT2ndakbmCgQGYd3mDwc3ihkKD6M3yXaub3V3Y8hCvSXgXPgxVSTjqnHXs",
  "key19": "KVq5G1A1dzrJrdVhpE1MsBhL3jVVE2tLYuShn6LuAZUWefUMuZ7jQaptLxSBg4PLMMAXhHBaqNDDuBZFaKYL9nm",
  "key20": "m5qgdh5pQFpcgmZ1SC3R7m1ELtofBxDF2xFy6Mg82LMRBMFXLp4zEDKq2eAFcMBcgEnTzZRB5HsAm3BSK1pZf4L",
  "key21": "2GoTwdpD7Jww41feUB2cunQo3bq2rWue9TPRkRaW5s4pjL21McnpMK1PWR5jEmdQ6qn2dPAFg9sxuAVJv9t3rAPY",
  "key22": "4Z2b5k1kmQC7smMuq8X5GPT1F4bHeGy3ppgLnvrEnu4gJ2PoueNMsbWDToVAZ1nvhhbhXwiRKBnD9bZ228iUuYFC",
  "key23": "3HMWfHSzyqg5SK7Rc7jLjMzRu5nthmBEL7fzEwna6eSzdxbSczThQK8H8JMe8Sjp86J5wiqsLM4Z2XCrbCwaoPxe",
  "key24": "bJAyJDfYQBgYkD9LCNht5Ed54jYsWqvZtihHhVwyx7GZ6j5pTf63zzKrkNW3cNotYmnFgE6eErxTASb4deRScJ2",
  "key25": "4u9qWSt4uzLrdAZGvHes8MHikPU79Ng5vEZLkZBicNPUqLurpeDqGhy2QpoEzEBo97FCzStif1kRF7wkrifStDDV",
  "key26": "5kKaQC3B3FUH72m8aUPKQDdLVQedDVPhjHkPvALdKY3M7hs5gcGE8gPxx2AnrBSLwLnwfLvnCp9V7GSQ3Ey6Guti",
  "key27": "2yv5JmgjCkaDNpLSq6tiSgMBVQcQTRR1CqCxaC4chWJYC5mVxZ7kgqushcJAMwbBqqvo3NDgEKNwcfAUsitDrZ4C",
  "key28": "4n8gBgdZSzzsup7mA6nRv73Yz7UWcU8cQk5kXPrKizSmiT63hvxQmGUzbTsVsDE3dhZvFXDTiXmzgp49GBp9nNQB",
  "key29": "21jrvQxQD8GJjYcuBCZ3FB3zfuUm2Kb2Fka6DYmFtPxzQhBn2LJQvpDe4WrBCVJEa2QiTSmhRfKejiB5nMnVveQL",
  "key30": "5xZ1NkZ4LcjN5wJhcALE2e6UxtkjTnzAGdKk3YTuwFVzDsCorCLnc3faZwQJZg2M2uA5kQAZUB6P1BpFxTUrXj5n",
  "key31": "2CAFqUNHDb9Pevp1Jr6VBdkpim2gvQPTFPX9sfdo6dCktehg9Zrhk113UANZY7CNjxim56M3AxUmvbJWBTqSURi3",
  "key32": "4GUFBwSxrJLs5EVaEvKGBAJCpRvgcUwnUVXPN9EqffJLm3NsnLPLSon95AJFboRrFeywc5g9pjUHmQ3sJ9SY34dT",
  "key33": "zhwyF6bsTo7cdRdhC4dS5nAVVv7Z2DkixGqJWASHSyQGkjfisEw73YWGArAwQdw2CHJwcxgiaqonjeHssYakehP",
  "key34": "5Lr2DCcVuqeE8F2HPoQinppCLX5fifXfpf2TSvdpd6P8AaMT7kLpC6VUPbb6XogN8PVuS5pVCkQVjfmHD1nkysPZ",
  "key35": "5cU2zdWHWT3bYUL43FEoUyNtgyetconnktuM2Jz7hJT2mB2Krr1SLsptmarWAfZBDzGF5Fu4MiziMPZ9iWpGn5i1",
  "key36": "5eb1Pwz9gJCrf6QAWBsk9XVsRA5UxM6ZnH4BVNdctvNYKAbWZQEmS2jqAYWApv5RmETmrSW3gT52AmZHUGgKBWqX",
  "key37": "3wSFYdvQyToQM7y4yWYPuLAXwGL4CzByDGnhF2R13GRQdD4oVe2mCWGnSuXNB2hN7Q3Jouj5PUohTz9qypzEj3cV",
  "key38": "m2FciCo3CedE9hunGmsBUaeuQkCb7K9cZ8TKcPBmUMFRDhNE4KGrSDLonq2tSqVQ2sTwU8Xo429eiuRYDJ2Tvnv",
  "key39": "2sVNGeMw3q65iryW8DDTjfMo3oyjqBc4Z9E7PESFRrWLYvpfJ2WsmADc8VcmPPVDf3ozdBRKhbNGRGyap7JSXojW",
  "key40": "5mDNdto3nE5c6kQhEHVr1cyvPzF85V57Grtf1LxtsSuQkfBYzk2mRY5kGjzkeT8AY9NHGYSoZfMXNPNCWgCwerRX",
  "key41": "3vin3FGQeoNxXLngzUyFQKjmyfpZBaV2NN7TYXivkq93RV2ZsGWztDfmY2Q2TTnorBfqRb9zDY5yoNJQGRdyQkEF",
  "key42": "5EujHhavgb8RykXJNxJo3Q1pEuzWNZYbajBH2KDtvditJhcae1SEhAMTj59vHFEm9mCF22e4PPbzNxpAKFLZR5g",
  "key43": "5ofeyseaqrxsnVvFXQnJY94ysTiFwUY3oLpqDR2oopinFWvdgodvPQ5jxa9auzqat7P9ZQeUeGdc87o18doH5Jmw"
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
