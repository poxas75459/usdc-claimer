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
    "4gsyqX9zz2s8CskLqYJhjx96onB2qnMN9SvtjVpcH8HRD5p7DT52LdrE4Dcgzsjpdyd6VG9KiPLwVGYrrLExAdsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwyXZMQR5qctgWqKuWRFbnjWkTXPLqUdztefxmT6dXCYfp9qTxFTY17Tdq4h1qeNfp5Eigg2QHcLY1t4QWqjhUg",
  "key1": "5kNfkWJetJp7dSsmh8Z4yuF9p1ypHsz6S3BzQvFFfT9t4KrUrtR18DbUyeWHwACsTSd2bs9kt4BPpaBcjBDLskcx",
  "key2": "43fjF345ygtNUg8ipWK1pa71yxMZnzxTua12NGm66jhy3eDKwxqXbLMHcjjarQaP8FeqRop1dbhghAjurWbbmj3Y",
  "key3": "K1VH64FdgEx7ZstcYA9SmTu7FumS1fb4LC34WSF2mHzBvccVjEqGvj6ot56RL2SNjpj1U3Dv5GHXRW2MxWnf65q",
  "key4": "3RUsTGymD1u7zFiDto1qk6JwYhDBrZfRvNQUkBxF2Q1mmMp8oUzGrECKLGdERa3Q9LBoaezti5544YaqjPYB5Edh",
  "key5": "uiiM3nha9GBbJGqJdLkjXRhzARPuSPj9yGSb4Uj4jAJesgLa3S5wMNy9PLo9NbQzXmJLd4rLW9GAZg2dcEBUybr",
  "key6": "3YdMbE3SWiyBM4QwZ7fdMPge8f1rdEaK5Yuv8K4uHrLdzvvVWcFEov9CxWfKnuuJZewjgJxN5tq4Sr3YR5XZFd9e",
  "key7": "m1FXnpzZcxDmKoedY8DExnLKHPn4SmxwpWW7DDBPTgEgdMjhG158sK5Y8SdJmpE98Bj8hVwsMwqQxxqHFBwFLBi",
  "key8": "5DT3PzuVstRDFbApkaA3BQfVvCrBUV9ec9hUPfv6EWduHC1cNNH3CHT4tMYDqQobp6q2bcDGkH8g5DwHWwvBwXq9",
  "key9": "3ZTTKtYDM1QHHSjww9k4koxhntdLtfXDovtLXfPTwuVueyt8fkzo3T3fUnpJ6JSXcr69ZL87i6T4QD78KexQjeQL",
  "key10": "4GrB33svnz8qeBDBJxsaP6xAzfPPKAyNVPXXe9M6CsrPGw8L2CwM55dS6eXFvMZxaMcBBC48uigsBDWkrwRFfBV8",
  "key11": "1Nt6MWYgWcCABPM5mD33vHMFiGEhV7Viv345NQ5XvTMNfsaNpYfmrQaA8wz9XCVDXHnusZxEyDqLnJWFQiuAaVQ",
  "key12": "4kZ72o1CF7ngDnHTPVT85b59beLrzQSaf2UD8ELcmkiSwxpsb1P36X2fnvb6oQoBh8DCDuRhoSFkTb79ZbhUygJz",
  "key13": "EfFBEF6SVFup4iE91jTUTkogvsUVx3iYRX6977wQqBpW3ywhca38gSh1jn3HLGTPQ6FJD6tgX5y4wUnDCm5WiW8",
  "key14": "4Ua15dQEVU2y3LP1ZqpN7CEn1GUgDVehE5sHphxxkXxbcZrdEwXUsN9Gafw3anoUx3LMEPUQNvHVJtnZ98XKAqiX",
  "key15": "vTiAQmcvpVzCcwhkXUt36GZ9YGCmr6foLAtBS52n1KQ2mDqNbimCTccnZpk2dPHVPtfX4R81wQVK7C47E38tUk7",
  "key16": "639ZUJWXMgk5ZrYWZHnSQzJ6yB9krJHcUy8n5AakGPA3uxoLbkwEgwEtctBgg9cEsJULgDcWypLd9o5YYePx7Mhg",
  "key17": "3nkD1vxvz95PJ7F1SQmauDs2FhaafF4hK45sUvo1XLpYytcPBSjFUQF3ijXv1QAmsQEeUVSFkZo87A8nE6vwrcBG",
  "key18": "2QBi2dxHicBFybtKCTgXJoTJTcAE3uNDKkRRUNYGFS3MuDifPNpV8YSR1Vj93EehY9dnypMCHRfQDDWzy4sY8CYY",
  "key19": "j9eQXb21ncX5NREqw1YrKZEBuPsRyXcZpxs5aVLVEedf4wNTnbyKCC3UsbB2VXq4diX9hjfqVABAVG58eCcYdso",
  "key20": "2FTRkS81wdLgVBvgVBhjLa5ppbBNcztwKtdhbyvuXJmZhzHupNxoHJptUCCXg1K6UmhgufwxJXY74CzzZNxUXHFS",
  "key21": "47v26SFmia5unLnXyNiTazr2HDz5M2tm75WsizLeoB9JXCKKZqMZHNtZoYEhfY6td2j6ywYyKDuFwSMotLHch4eT",
  "key22": "2FXWCmzeQqWRTcxoC2Vaf4pWj15Kepqp4FnM2zxcVHJ8DQDG2UUwo5Vxa9C6jsDM9F4B8ncAqYL6djD9uFuKbxvp",
  "key23": "E4q9N6Uh8XamLiD5ZxMgvYEudtX3uqwjML2G3xE83epfr5kgCCZSBYgpWTCPdXfEZXcUb5C3Fk3VZF1RfYtjY7q",
  "key24": "3ofbrDxQvotAMCQyzQ2xN7gFRtLgcUAv8xCrqvSigziM7h6mzzCJ4P5rdxbvb6BceKbNFwkmPTb2kvFfxtKu9mE",
  "key25": "4FrzEuheRzZtp7YoeE28DiZMUoCpBa2aSggnPDjNLQHeyL8ja86gXK7wRYtFQoE3WWyh719zCXPLLWHEEsd7Z1mS",
  "key26": "4mH3yXbA1p1QBZbSwjuiRrpAaFWe9p1Sru1QHozirLtGmGfXhP26yraZZq6qfzdGwJ3zwv9oHCkSasNiyDBLjPxt",
  "key27": "Z7AEaAd2eFrNSpp358G9DA1oszqVfz485bjmZ1KqTqAMshePB7aQFuqPEqL4WjhVrGXa3pRnG6U3rBpRTWiy9RQ",
  "key28": "sVXAMzkQfw1SEbWMKmPS6LYxs5LfZipSRjt4aSFg1Su7cLYrLhduYAuiyD2JvPrJW8Ekw2J1zb5mbSZCcmLwKtm",
  "key29": "4bveGBMshebaUGKbGhKiMEFEq1i1znYscKRvjYki442ALZ1jvTuef1S2AzC5qs44JdGmsADLkskuLFF9q2gaWs1Y",
  "key30": "124bwHj4ojXsKo9eq9JfFiG6YwmH1BMo4xuTqEZzTBwTJDMrDixHXK4PRCur4jBfEBNazmskA3Exi5x1eqhsBk8q",
  "key31": "H56jViqcVxc1g6pUubiifLTNjvnvidRVz9Ub263gGhnTyi1zaCrXiQBbbu1choLAtJmLwmGE6osFB1RWMXkEpuy",
  "key32": "4tMGrESmMtYnKaJfv8EfVjVnGjcQhLtyUiRG5ZAcyPk3VpQCasPmcvRw7j4N8bcoJ7kUNo9HNQc4whawoB2AuyY7",
  "key33": "eVNgSJPyJ4we6t9gcFKS9G6zANJVVHhN9tYYRFXSvRwkeyRxoYhtUqkvyfePBPWLgEQhAvSk4WXpChb2WxZuZ6m",
  "key34": "4TGcgooMAt9sAzS5cNGigiHEbmfzfFAyeaM9jWg2fo7Y3zgnJW1pgM6MohuMSiBCX11iaedzbmTUbkq8RXvC1Cnn",
  "key35": "3oQHzyfR6A34zRMn6vHBWHuNVV8ih64nGGUzhQpEo7YQFPKV1youJHD6QcvZfAFBuv77STJNmKijQPCqcP4TbJ2t",
  "key36": "23tCFEyRjZUFW4L5tVjoyoLw9MZDEKLqymzNgMjm1XwiCgd1ZSmrmM2RAoNFexb4DKh19bXFgiKhg9GmuwRNySro",
  "key37": "iPtuWfWGcviVuGwY5KqsXnzQejsvk2W36cGrBDc6sj2u1MusfwZHcQPQC87cU9QCqC12x6AkddvY1q7aWH4nNh4",
  "key38": "3d8aXkdzVGJemfegFJtYh4GvYvYt77MMEkxEFLycWuoF8W38buCuEWU11SD493eBXG7mH5KQ8ZtAw6iYqvqSnJKT",
  "key39": "31ftDzAebDVUoQTJVZg87PxxD8fcXkrJwSSwioYzY4iM1LJ2omKAWMdwoUJ1L1nvftKT8KYzASibre8pkdbN6sZQ",
  "key40": "2cAty8sCJXyQdd2qnyLB7nEkvUx432CWDNsRAkjBh4EWbgFCxYex641g7sMPvAmcBpg35N6UoeP2kbGzMLPHQ3w8",
  "key41": "3jynGY2fE7kNVKyuy5Zdhpegv1scmAzbVh57eBscuTsfGiitEqMCqx4ZWhCisCAPQxCYoKq93mnpbXy3ScVvKDed",
  "key42": "4N6tGnX8zedH6XTo3wBPZNtLNUAjQdnGRQXUJmCERgZ62joyHAfb4YeXhKWDLpwFXNH3wA4SdWxXK5f3eT1ZSPMg",
  "key43": "3qj4ratDDvY3x471BzekD66QHPUxVMmnV7bR84UqERoZYjwX58TzChbmSgtrEbZXSASzaNzA222uoS5RCvSNH6XF",
  "key44": "FWdPtoLExwHa8KmTq3u2DMMMxDYD9FTPTZJXRHcjULxY3BAxoCkgC317bcae64rgA7qtTPCS4tQUVjLkJWBhfzb",
  "key45": "3STZThRgF7yjAPqFPNwG3AmwbTvBanmFj7UFUPNpTjAsEUv6Z2KFbu8jpe4eYMkcnMGBsg3oyNkoFNqXpD9aJZz8"
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
