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
    "2RhpwJStdZ8b3YKgqFcFhAxFGtPUdzV46Scq9jP8oa7iDVfpARuAdM1Px6LZnGVJFHXCm72Abp54oQjsLfEsu2PZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJ2zXWGBiLaeAtxK2E5jvnwAtx1RFi3p59irG2GD5aySXDU8i8YkJAGRwCJRV3UpzYTic1zXXyMGjMGCiViEHSh",
  "key1": "ckUQZProfgzz3sAHk6umtkuqeFeWh18j5GfwUVcuQiMA23kVwQrXy7NwbswmvCNcRmkEvHFEvqKbo1W7xuLN58D",
  "key2": "21WkNfLyd35Kfb93nJgEG1qFiXscjmE5kis7qGJdWpSYTMacUPjVYE6ehidLTxTWDWEsopvQYWiLAAunyA4u5svR",
  "key3": "49BjhxDXP24nHYbcajrNp3fz29on5dvcF15tjNYTySF3qGxudNrma5ts6nBuBnmKXL7ftYaPashuuWqPHvy9KJRD",
  "key4": "2N8B1rDgK1hEe9sG8JNaWcvkbJDVTmtNsHcDuxEd7odUXSNovsEWp7X8uhjzGkikVZnAJW6bHwoVhsHQeoqZq29m",
  "key5": "qBtBqtCQ6QdgD4Y9XciDrMkGoYCqvNDKWTL9BX8yD18c2jaKKHSzkG42ATMx23jxLCAWEuVXSEdRHQnYWKN9nNp",
  "key6": "PAQoNfXEBteW9iJnAPhzaQXsoHNXfMy7QGSdipiLrUkE1FFrUAW7XHKv7vFTSR5FPaHfR3ypUdEijhXjCv6H9AK",
  "key7": "467iKA5HNSyZMtPs9GnbJGcR9ytrtXd1WZkCs6eQwyKkbgF1Q4zzDtSqoCKWU6u1QNu2mPW96HCaJzPN7LjYBKqZ",
  "key8": "2SuHgw3aCAzTGeChCpDhHXjUyZXqxtfHDGSexLGZtA2Xmo3A7xBEpzDY4YP82xA1uPJHkJSicSnKbJ4UmR9BtpkW",
  "key9": "2GErMvffWSgK4jKwsA6fZh6K2o8zE9EPfkKgj6azkFGFsPJaywxJA1xeeSbYFHEowBg4LKBnLP4h8PjEvbiQuHEj",
  "key10": "4fbSsYRwpvCQ7VKPkEaoenEQNFVHMqar54XshdgeAUxNPcKZzRpiBtcCBMsCnPQuZ48giiinQPr5KK65Ynmjz8SN",
  "key11": "3kUodXLLEJy7cetDfYmP1UGmz1haXqpmMj2Xt3w4ZKXERJo1U6Jne9RDDRTGPh1FB67Cn19mndVbJCJfVtiXA4zQ",
  "key12": "23pfGqVrUVV3bLR7sRQ9Cudg2uLJyPp85TZwKSsmxo4dFG3ZKcMj6urFaW86vfkXwsWAndGx5tiyLvsvPGFPiyZy",
  "key13": "ZJJ88kGS1EEQuJv1DLjw55MLgyRD7B1pAQsfvcdYisAVRjtrtiYA8RYweno1Gg4KCBgopNmGvsMkdxSk8VJ2Aci",
  "key14": "4ae6Y2QD6vT4agsAURoYi6KQbh3tiuYY2veWDMVkw7s275snm4oj3SWu1XCfqG86vDUFJ3FwaZgeFcMMY7DqKJrU",
  "key15": "5CFS8tkrGmmvnn5Mau8Y9VPDiVLCJF8fP6x6Tp4MBK7aU2r1F6m2vA4MFN5U8Mhk5wSniUVSoCxf3qCsdUEwnPDm",
  "key16": "5bq1JvEWMA3BS51cXcjVqqmtAxSveZbktPTLReHeS9n9kdDmooejoJe9Q2ERghwwCdsuocBZVAbJBRRY9AkPfPGd",
  "key17": "4RFfPPzVDQeaXQJrWBgrMsMqNRLtJyUgMdHAsxWWzrVkFq74aUSZtGYeCBhGpHnrndAHrfQWjMndE6wbkECzCMVb",
  "key18": "X1zgS5U9hPHC94J1XxWKa4krBvmefK24nA4ggZDGetGRzTkQGcgaRUAksdy2UScKi5JniyBaqiSzW6nibfRo39v",
  "key19": "5JeGVQhcLuLBfrSvX6goFaqr8fQnprDgw473Ww8X1oJhCpgfQMxaLHpdWMyPNJTSnbdEYhjZt4aw5HsGix4fvchw",
  "key20": "55gYRzLZiYj9THkxoTZ9HB9XBeCzvTaRLAPkSf9145mAXPrxuHcrMx34qY4FmrmyGugK1Y8o8eHN6gYVR655eyeu",
  "key21": "5SMaQ9TUvWTDKBg3ZDzcHLkMFiZdCTZsxH4jwNgtAq5WEX2exYztx9SwRrCD137HsZmT97NPcqamMG9tzn8M64NC",
  "key22": "33syuhz4jCBE5TyFNDTR2tWqMxfq2bC6ZrxG3Vuofo2PxWasUK8yLjAudDvN7usoJGJLgKruAB4gFieqaCmnauRZ",
  "key23": "4gctFMB7TAUgJ4q13kwoshye7vKMUzk9SrGUC8EwfgRq7CpspRF8CphuimS5RjCMnT44ezvru4nx1bZXiX7nArok",
  "key24": "5kYcGj7ju4S38yWaim3nDeugKTQdtWCH1fQZ2DAzfkKgR7sAgJTx3bofVKTSY5EbRp7uT5L4nZDuz5gadTec2Af1",
  "key25": "7VB8DNASCz9Nq6UiJ7WJgQhc9AJGXFqj37UgXaB2LhjwaiPY9dwuahDDUdHyD3xLM4HbtNWZaU3wxUs3E429VBg",
  "key26": "4u3FLCNnnzUsECnpBFqMVwXa8A9fw8aNmkBBBUUCDuT4v61b3LdKVVuW1brS8MsxAi4McS8CL1k9Mt5VoA1W1jd",
  "key27": "41vprHfZEP5x716jdxhc3PvpK3EWT95kDSgd2m3LAuFXeaz67FxaFLkYGE2ruXenWeFnfDvCbvvFPBTrtXchsuws",
  "key28": "2WCrTs4MFoojHoTBmeKrTDGsxNsqgmhEuDveUCTc6HtvBjbVRKF57qMdS43DApq8C35ENGfEyALUM2vyAnEFCDR4",
  "key29": "4QiggpQAv246FMr2Sk8WvEGVG86zzpCoo3GWPvJDERSjxh3u9EFNxRmSjT235aG2ngSgC4q495PPmjEHmxjF49jv",
  "key30": "5SzrdpELCSSZoXc3LYwH6Augq3QrENzBoHyaJXygxjriTnMPtaxqUjYx2gTkU6g5gh3S5VDA2zVTt8A46rY7TMNQ",
  "key31": "3dgu3dcnybnwCk1pf3T8VuubJ5HfzhzL6AG2wR848yGCegAnigjHaU1tJwYhWxoRVbuGKifGfrvSYbZpP7sCyn21",
  "key32": "5u5GKqjcpW6giLxJdjs7ttMvHyA8Sua7CfSCyTX3f95fr6YepRNeByxpNYUEtvsuvkWjyYvcavXLEAwzzpYdsRig",
  "key33": "3ezA9orEWmB5UvaKfGs7K1Dm4XXv1iBEmMq9F8PmxmJhnGEA8Wkd29YCUrQSbh655mXJLoyTsJpXexW8ZVCe4Cmk",
  "key34": "5qpkKuAqjfzCLYKVxEWdb5sAKPRSZvADsnx26UorisWpv8Uu1S7h9c1vjfNB7ZG77YLjgMDdeRgg1gVeCFtx97nT"
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
