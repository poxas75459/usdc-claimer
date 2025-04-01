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
    "5f75bjABWBNco1n3mXVVYGT34PUEsuCLEKevXYscs9EUuLVyp8EW2rLM8cuYoTw11o42CSdF8RTmVz5go4JXU5jT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7pLhic9dH3FPpHYNN64s8t3KYy5MEyLdNE7YStTJdayJn4hPB78XEkZWeDccK8FQ5EQoBCz38TPBJehPYBKB5w",
  "key1": "4gW43yg5TrLRyvxJrqunS9gYRHTcWZxjTGt9eyXNbCye2oaz21iTm2kjLjrGjREtWKtqVYeNiAu16EZJpXa64AyH",
  "key2": "JyETaqscrYyDFWqdD2PHm49c6vL3sc1nFQHZTFqTbthoauXKSj7puzpjZqNejrRrECC2dqAUyXSUR75Y4oKxP9W",
  "key3": "cDkXmnzeQuRoGULqicfWPUfgHecE4GMJ9T89pSEVNcNgsg8y2s1NQBJhJ3ykYyA3k7TBFuJzotHCv38drG7tUw7",
  "key4": "xK8Tx5C87ha5wL5omY9wWGGdP2De52V1kssnpffSYRRGDBqxTKZX9BiQQny9oeVypwwpBKEy9rnRmjLuQWortpw",
  "key5": "MD4Tcxkfy4GEtkVzvnHsE2hP5duzLJaZiUJmjmRTg9aoFj4qgf5f4pFLxTELg6EtsqUCaotkgHmSFYNxUfwQVvA",
  "key6": "Qten1Z15Ue3fUr6FMZW5GovTsPvvyZc2uu4vCMvbnTLp6agmcuTEKBmvVSGF48GaAiEBXvNX1mRaYYM5NfanDf9",
  "key7": "51qpRVmEZMUdJfishE3PWoGy8HZ6TvMSYY2LPrdvhrYzRBZYUXTmxxjBKQ5W91knY2BcumkdG9RH8aDLZbbckneb",
  "key8": "4EHHiHoM3ghbsTiqi7RjPfHAKxHn5GA2ZQXDxGdAJSjvtyuZnWy4kT6AK8YNkVh8UaxdZNTB3sgFKVkQcqC6zNnz",
  "key9": "3iL5YsgVUGYfWM9ss9QzWyn3sizeabXCGRqYzLmi9oPthF73zeXNrCXEnwjK1VT27zuFJkHrMkPDfN3BXUEC3m49",
  "key10": "57w9JGWnGDAHFy6LG68mH8ahM8YchJwv9u3oTHWqWb8gmJPWVMCZXj5i2cW6zcVWmEW86UNjX14Cyej8HQ5dKzid",
  "key11": "4Ko3B3athXhNVwKg7waX5BGNzG8pmmBqp74YXRGmrqu6Zeo8STz4rMwV9ELmu2nTgZCq8HKuLdfxsnPgbwtGvUuj",
  "key12": "31ya4o5vcwsXk7F2tKCet8pyZSmeDsKRibvvo2rWYGz72G1oh5EoCd97VVHv4M4xTaNr6WSFnSc9TU5kmtkX4zhR",
  "key13": "5Ydp3JXgBobNSeRecLKjZZF9wxgPdMFCXvn1TMXCjymcGWfga7kifze2GjLANnhgSysLbAowQsJMfNqm5XRnrjy5",
  "key14": "2E8zA3UBHzMhZL2eHx69RPSv8S2v57zL5S3nfB7WFXnjRvN8V5mBSoQpj3w35Bwap3xje12psWgxbCpacHVd2S5b",
  "key15": "3uV6KGeueb6TYeHmFGkN14Z5ZUH8z6LzhbJhx8STn7yTzr55KCX5RtumoJpCDMab7dSR52EdQTYTh26RxcGkCCRH",
  "key16": "2T8HZyyEjPWocxJMK5MKndEGZtzQioYzoxJnhqgqLfr6mPqw29Rz7P9y2LmzUmduqeUzuWHaHnsBxivQBUT24eFt",
  "key17": "5itybamsYJGiQ3Es1iUyu6F11QKocidDFDsd7dveZS8UzanmnchReWrCGNPLz5mUksBZoWLbkYWAVvfqYsdEixdQ",
  "key18": "5mqkvD1Vou8iiDzSpbbTJo8nb38mYCt79pBFhAPTBoJiCfyMPHuqcYKUNuDgpFDqSM1yeLTffHYU48TyqMyV3vxX",
  "key19": "5zZT3e8CGduGGj3sG6CEbQFWCFthvuSGN4ZMGQg3W914VwzZhWveVHxdzDsy8KXfgvQ17vpoZ3jGaJeaV5BDbPbT",
  "key20": "3SA2te2aPc4RQwMnevBinAmeuVQfuLeqCvBJ28rVJpvS8oNfukokq1sp6oK8fg6XyWth3CvzFwq1sLTCjCyWUdMe",
  "key21": "tGa6ZR125QZTPr1YaYCyYGDb9iV6dvq3WhDn2sn4ToghgbP25abr4bshghdWUJFSVAwMyFG3GAAbZrKixDmRyxh",
  "key22": "5VT5hvSJ8So9BetoBCuby36F9H5pPxvfM6EuSoJ9hF2a6x87HniXDXZpMUUXyXU2sATuUP9ifRLPtsLBsoctSjEp",
  "key23": "5rrKk8bhV6dEisETEx9cW2GDf8yb2YRxkRNPQVsfL8TrJc9CxWo3diEt7VWaKtGzMxvbmxeBi4L3ceswatnLBhtv",
  "key24": "3jCC6cGrEWGsqRzMTQFKD4nmUg5KKzMcweezWDyKwmzHnBuKinC6S7pYXUX6xbzhh33JHCQkPj4pUTTkLqmfJPJy",
  "key25": "3TV7Xad3PY7v83nsKsnnj3HMrVpGngi9KtZCfXfRvrnH3XUqVNoAaXEhcbrg65H3HQsHLpMZTMdLJMw2WXc2fiZD",
  "key26": "SnHSTVQ8jzh6rLj4ujo12h3tvreh6wEbmQczAearUGgqtjU5sFEYjw8GrmLjZS3JF5ffkbQ9pHoHELqwH18nR8E",
  "key27": "6mzN7YfZUJqVgpa8FVCjN2y2NDFvnRkJZnpMfsa1n1f7h2g3rHFWnrGtWFzo5SyvTcg7Vtwo5sKoLtodHqQ1PRC",
  "key28": "wnHZtf9ncQQG8LJcyB8H2ME8fUZP8pVueivtgxrS6YNRuceGwHPfo2gFKk8ou4wpnCsdRY3UtieoCLUogjdeM4K",
  "key29": "4TQsMYwoFP54a9RAkAgqCNVzSfWeQBq8Yfv6779V5CJNAnD4X9ykocoQft4HM2nXPpTU4MtZT1mCYrTgTcMnN3LZ",
  "key30": "2dauBbhThk5s1gh42xxfC2hLpobNWtqXavf8xuhgB2jxTDgSngMnbS5ttenqdCX8LHgZenGSvmbFpXqFoXV4uqCU",
  "key31": "4XorA3ZZkzJqPKhxg2AoWjJMp362MgyC3hvPDxwtxBeyBCqk9YFiCScDpQq618KsueXGnf8KFSkosT4TmnDXFs5W",
  "key32": "4PbZKFean4GHFL4e9eZ75eNTLDNp8vAaWpgJ9ixYRtiTdzsMnNmQivNkZ6jfVaXoZF1zY2YkUSjoohDPPfpUWDbQ",
  "key33": "281LGPorJKs4j4w5u4jYSetXvEBYgpCBqSdW2BwFJ7Dje5kXAoT122pxjnQokyzwT2pETvWpXGAYN6BY3heYc1dZ",
  "key34": "o5dzsL17js8bhSYTj1Gy8AS8XED67Gz71eFtNKYx11NipYURiKF17ShDqEaJYdBbgBsQoPqttQkegvRE7eJKotE",
  "key35": "5uk6Ccpb4trCSu7eMvn4h9REbv1iB42bxoVjF6hm2Dkaq9pvUEya8zniJoHCURuiNUbAd8WYe1rD6kA2hBrw6NSM",
  "key36": "TY4MnX6KwT5Pu2cCQKE6E9yvVCcGqfhWK534LHmzYjB9kB2b1dftbSCk7okmEGeFYd4Nm14fawfeJ59umNGWALu",
  "key37": "2jJ34SVNoaPAnijPpj8jK2Lhz4inKQbMS46pJfkroqtYc8Sotfdh2gN65meq9B8Qne4HHKJvyX52uLwsKNwojWCJ"
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
