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
    "3tdm1gwPFfoQfGAqbVoGbhdY9kCekiGPxGKy818QTsv8ked5b6dMwypWfdAAp4Y5oEJumsxV4sLR8X5SC1FE5EQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWPRGGqfsdJDhHSump6bdBnFpBJS6jMwBwZYQyna2mcm9ynUH8ohKofDW4NiTwmsCJCGjTSmDA21RZY7EJ3gEXe",
  "key1": "5uz7guxd2LuGhstVomAXgtYz1Mtr3y5BzkSbmKGoeZr2EZeKKBRVRbw1gEjxYCuRuth3TG58kbVZn7kujTsKi6Xx",
  "key2": "22YTxWYcmvjHQ5FYzjoWAj99RpSRpiRpD5RWQXon2B4aRnduZEs9YrfCtXciRBf6qGMBnu1EQDeXCURmgkMnWJLS",
  "key3": "5QtwAd4ciPWtfyKZj5nad3U6pLWNKdbbuHzTG9hnnH2E5A3kt3izRj6aDGkG8yAigvGkmW6XgzRGsC3dRwMVxZDP",
  "key4": "3WURzTTKNWEsB7mcPJKAEtMqUL8h7pu8VCuF1we5SS188SSsnd1v54bWH6VmpkEKs6w6NXvjeUfKKKv9PobN6pa5",
  "key5": "LcxD6joUc4Y8x9kc6h1kGig9Lmv8kcMovY1RvbXqG7WS61yCCAd1VfpQSKrsa1x3WRr2LkVaJWjfWmadybC1yRK",
  "key6": "5XX4pLsL1MsDDG9NvxBuXoqFAsCogeZ7P6GyktRpMAvPHWDYhRhfmHVPHmff6eycYYN7MYTrxAoeunLPVfE2pwHD",
  "key7": "3REAFV386mmsEqTfVHFWAyVdDb34v2XYfjm2H6UnkCAvTWSPf5PgDEJnPMQ1uNrYbNs7uPChcg2nT8YTcjEuBUEe",
  "key8": "y8mFJpYTpa1Wjy5kf48m5gwdkUHv8uWG3WNoKXBdatJgBbcKywt4RgA8u7DLmxeCg2kHQJBN28WnYuiynELHhoe",
  "key9": "1vZJAd252fPpF1r5WE8b7jbV6ZmqFTYdKvDFBaVh9mJUKjxtHjkFoSieHSivXLRB7AGqLGgmxTAsdtugapACmuU",
  "key10": "5PQctv7XhXuamZqgXPYSnUxc8spjQS6mZzxwiRmhFxEv2dd3zCAKXebxFWLq7eAfEgAV6EJQWtJRMvFrAa9siazy",
  "key11": "4Ex5xkXqyqWJoHSgNsPiP7j64Evkh2JS1dcbT3MxDXca2Z5Jyt1sJHFALMyRo2XWTvAf3DjCtZbdfwKo1UdJBWLW",
  "key12": "ktn9PdvpL2TJqVeJ8SPJ64udBKiZmmfJd4VKq3JGvC83ao36t9bnB8P7wCyjnnf6aY8cgHKf6yHhwFRu93PJUSN",
  "key13": "4apxrNQ6do1SBQEmtQfuGJJPBjUEkGZcjgiTiLYaRGKESNT2eL6hCRoktfDHVSoa2vn5Ak5AF6m2HvXmYq6t3nJb",
  "key14": "W49jLh5HYK2AGmcBAXSonCkEzsnVZX1J2mg7JRWhSaP6ZHxhKQvi6jK7nRGUp3oxhc45jfm5tZptdMdPPFcdgdy",
  "key15": "219JpFEPJB643V2BYmmi6wUzmGcKr6naCcojTiHyfxETuzj6zDwFyRvwqgaXcuimopJ3igPDAcCUhXKjgvjjCcaM",
  "key16": "3bLBnhWhQrDNRuFNkubGEecZU4zwYmqhGZnWQivw1AP4TRyc8Wsy3e2JGeMYo8YqQxsFVRpqmaDb7ULoePkRdeTw",
  "key17": "2uG1KxUMYETz9ZqDT4JBQPk2MFWvrz53Kvo23RUNwx2tPiUhB3pLD5j8yhaueYUowzKaJP19Yqw79nqRo7HAym9N",
  "key18": "5krmYGdgkCUayCapjpzvv2wVsk7FTjhog6uTPVKLmHXwCjvzU5EnGsi8gu7abF25ePzisgdnUiJgJwGNiLDwAZRm",
  "key19": "9tEgF6gB9v2Mu5MXd4Wv3QDFvCz8wmGrQtcTWFoR9GaJ36w8yKEx4f65XFeRXEWqr8iuUf4PXE3n7UUneEQAt82",
  "key20": "2aDQZdc6dFVfCniRQY1YqCht8mgbK6ih1JobLv2KBVfnVQigM7dxLJy77zAEvteKBDbcRmBzrmwmDBHYwCXpojDk",
  "key21": "5AGSbJGZsbbLgA6vnyUy2rGjPfaDStWrEn1KVKswKRsXg7dQEiMMvRL7jFUtyeyPp9uqopDn1i2HYGvQw7BEPinq",
  "key22": "5m5i8RPy9tzb9Xa41H33Dt8UmazdLBGoYpc91Pupb4s6FBdcYBBvPX2VS1aHqFwj3tqbQxJhEza7UcQAjRJ1DeEN",
  "key23": "2jzdLwndVJjZt4XL4veSYE2E6n7UDPFx5975F4pSscgrHmW2UxRWD2HVgKg1zLsP4gpRNfCntCugW2RQqHiBCxdG",
  "key24": "3vPYCNkZ98h88GSsurzsrNgsdWZZ6eUkLEgJado5YMu8VsT8dBmChPMcDskNRzNEC8hz3CH3afghcLMvaX4q94sx",
  "key25": "2BYD42BhHAcCXXe3Zdtm78mx223nAyZCoPPNWisS9yPaa1eWwfA1QcLAaLmwmvjbtJWZnF1txUmFzCP5EnvcFGra",
  "key26": "5ii29tGYYRBUT8NumsMvdHzwckcPUyRmN2GJCQwkJujp7vD5d6PYE3n1qrGkWToiG2Q9WT1esZt7KzSL5ASN7jwt",
  "key27": "4vCxWbvqrpBid5LfHR6zNVUe3UytrGMbx4Xos4K2NwX5mHFWD9pgH1a3CnXeFkwsC639X8u4Je1ws9ChPCe6oLL5",
  "key28": "55ZbmcHf5UgkxMX8BpoKdocJfZj6MzHVkJH23mGKshnTZr1pd1HSjWHXFWiPMZfBucGMiwvqADHr3qyuPyE5kVG2",
  "key29": "NpYjUDn2CMCp2hdrYHDbK7BZdKfo9qE1chUhy9Vu8opjvcfFWzVHMxzjsCcf17QAbCGcA6o1VfpZbCFzNUYiyhz",
  "key30": "4j1kERRY57mGEmkG1KtheAMhHZdSM5r8WpEkqTv2y4tHtMyAvdmwUS8ch2JWrErgTLczJPhJCa7wVmUTNEg66YuL",
  "key31": "4QJxLUbkLdqsdNoHVyhhjtgs6SuRjY16AFCdXWdgG5WtLUtzAMVvQTtWp42eeQ38juP79Zh7DGBUTdnNsJtnEVTF",
  "key32": "4JB8tFMHHbAEDLKC1Xc614EbVVZiu9kPYwbErCmeX3iXneevjPkMquf8Ez8Af7t7VDctnPU7NEHTCuUZkSdHBX69",
  "key33": "4kisrjd3iB32HETmKRtc2QRJcGhiBo9DZcAAxWF3u6xxQSmQQgT3EVVbdaS5d2CZWpR7PV5i9PgeZpvw1cetn4jj",
  "key34": "2pc5MrD9EkRMZgPbtdfqYRzJuzZF7QV8LyD5ajzoHCKVWEDYDhcTx14XvvYG1czqwdegpe3YniRCMLzbbuArBCo9",
  "key35": "24toD7kxQAaHk9D66kNSDx61DX2JN3odZ7nXTSwtBZU3DR3LABKg458BEUP13wwvADCEiXwQ6y6PKHmF7fizw8YP"
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
