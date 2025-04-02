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
    "5ERfcF375Nz6MiCVgEQ2RMhJ3AfG55CsWW1QyqMUUt48HiVKTKDbH3nurNEHfWXhwVvtZYxr9dbnWnJZdmo8pRfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XN5rRM74n9LMxqEh9XbuioGeWy5XB9vVXEGM91yeRmhFUTNgw3E3xTNeUDxEY8fKGSAjEGffXSJ4QrX5QHq5giC",
  "key1": "5TRhhqDQEDff5VS9h87iTCmfRmZkrAGHFymkmoEmVcHW7Tqgviwr4Fj3tbMK6cAScTjLt8kdPhzfFh7fVxYkC4cp",
  "key2": "7KaP2dk1KicvNEEitVP81T6Hy9kAAiYp4m5fdtiRe5Uoibt4QbXaEG5FoC44QL1e9MKzdoey9NtXYFcRNE7rf5Y",
  "key3": "3M8bnTNZ2RTm4bbxjswvSTqBFbKgVZLBrccd7VbpGMSEQTEfemLK2ZynZVuN91gjQhVJ8CxqiQF23AcKwqFiWcD",
  "key4": "3qDzf47kKiDL3Es3C67rk2vCcypm8kVvRGkXmbhUNwCyxq6tNBLYBZXvtcbCvB6FHy7c5NYzvAJMGzzKe2gpEFy9",
  "key5": "2Zm2f7pN8SciumrHP2X7CwQsBKrRjDCB7oXNB7aeNVev8yu7R99zxPrj4sJKfxZmPD5V7rGUqJS6R7b56KcpDy8N",
  "key6": "62JrVvtyNHnmPSBaqGTWakEmrWMExFTSyQ4P4VkwAZMPVaV9EY7QSCNjiPBa7HK3WybziLmCv6DsX6yKYtrh1ETK",
  "key7": "5untwAUssMm3Eyu84f4G8bBCCmwFejRdBG4AjC5WL1vwmYFWS9dPyXcvpq4zwJgM6f7jJMn4hWN15optwi9hqS8Z",
  "key8": "2nMskiWDsc1VrEMYi7K6qjPvyofyU4FaxLKgadwUR5PCRC2M8kFD6eiEydb2b9GESC4zeateGwEnrfdJsp5g5uL1",
  "key9": "2RRyb5dQ7ABpQLCqHusGxCFN8UNyRw5tZV8KmhVoW7Bi8Ck7AFYy2Rz23K3wYYHFwtHJjQX1emkRHXVh5WsDp5ey",
  "key10": "cFjLiuaAhcWxkYu8WADR5MD8Vrpq8jqKiWH7ZjAVQkfKWFSuJmsrqCrmebqS37pbTvcYAwAc1Lk4AY3GPjELUPi",
  "key11": "2xHimoiAtwaL7Qymzc1qxxXKgxhFWiL5mTEueGZN1JUPHPNsYY6Ty66wccofXKrVDA1FYLi9oG67csXXKe9Z2vTG",
  "key12": "3cc5KR8C8Ju9xuzKRbEwhgcje6pNhdbRQUUtmf67xqpZbtFoT8S1Ka5cTrd8dJQVTN1Y85MHHq1nvpMHmxbMuiz1",
  "key13": "2WLmnTXLghBGbraDsaXChAkddUC93AXiYwpYiHqZoUphpnQ58SyjJF8V3TiZL4iV1PnurGYYBVHzJjbWWuxY1Nec",
  "key14": "3U3UHRK4dzrEtLMAv9Bqw7ynS47RNca7gbj8FSKzj8uXm8XRwFDj7koU1B6zDyqtCwEVPxgsYn5ed7CS3NhLeCrz",
  "key15": "QngxebKGYJZSZHjVXzP9U1epkwJenvMk2dw2eZUQ3cDDNpDnG53kA2WFkCpA6Mz9vWnht7d9NRHwxFDa6PnAZra",
  "key16": "3w69XkBQvY191HpA21VFf5xUMrwtWohExi6Acn17vU9pSuQ41J9avu15rwtsJFRChC8HRc3zy1stkmgmfW2v4iAb",
  "key17": "3mrQSTvvdvju5AdegYPpVM42DRxzKaQT1WG4xXoDDF191GsuP7UtQZ79cJEPcCgkaAx54JsK2sh7YfWsHNw8xiSn",
  "key18": "3V3xLjMkc6PF6VqE3gkuZyT3TJL4o2mgTKzfbFNVN2HcphFh1M74ir5wssWoXBiGo6UA78mkTJvJpQAQuGi4dUwh",
  "key19": "4L1UJptdv7jqpCnN5TEf4mQ3J8vaGt16QZkbfG6QniavvTrr71t42outcvMHZvq3w3FbsHC3KtGgivKnxmKVeeoW",
  "key20": "3Qx7ayQKn9vJVPRk2YPwVRMpDyNy6Ci6YJhVp6wqqhNXAejiVCTWDpZbCzCn2sZxoEF3iRXyqFEZeNeZ8bygHXVp",
  "key21": "3VrofZaQ78BcQkxJ8LiV5EmaCmTL1y16WVw9HPBAp5GLfnPi2v2i1h7ezLSPbRuwQK6XF7kjVQbpNiMquPSiiats",
  "key22": "4WNQiCKwtat3L3SYqA1CcH7k5JvWV7vx6gBH9C2KaAmx2Fp3j9JQrtz2thW7FDG8xtPcnv1PY25GZZ2cpXjuBJFc",
  "key23": "2RCuKSKvPHXTm5VtYBUCmz7jomLXg2hgmfun8p5D7KYbkWqcG18imqSoipJWxEzWRkQLWsAsgwj5e3XGoKtJ4o1M",
  "key24": "2GX8KaYZ1Jk22JqGYUprHS6e2VuMHBJiJW6EeVBMJ8WGDk7CM2iyNQaK4znu6AKGSkS9SgM6mPUYMUFMJpaAwR91",
  "key25": "3JJ4CjxAvtEQXrR4gag4pAFASwzMXgGxWc6DL8iGKEmCP7YWyMGBZAC6HubnoneUHawBm2sDSCPp5mN4ASigaAyj",
  "key26": "Wkn6UXGEaDVhXAqh2jYCKThAVzqkqsrJcHnbXwYYcLPUY9B1SQzFmGn4tXfSFofweVEZBckQbUHHhJUGYMs7rDn",
  "key27": "4re7ajiaxrXCfChxb1yddAgtqLrAKNEGtzHHzEaXPRerDqY26pBGhBjjvSsC8SKNM7CmtZuJT4S8RiyfymkstW3p",
  "key28": "r15xSFcvQumMsAYK7hf58X8nN2v3g2BCinZL1rcSe3bL4w8fGgdm6cr4toXCbkmcmuk9nRkJHG3twn8g1jdED6z",
  "key29": "4Xy1Gnf2WYYFC2Tx2hTMZKQgpHzPaqKP1BNDV2yU7bpwnCW6EKhG7aCkc7iSuWFbMNAy8yyn946c7yhikcH6MhzL",
  "key30": "2UDnpV9C1RTQPW4Yzt6Y8A4XLeMGnVTfQmCiy2tYhfUC5i63kdPPFd2vjFDCfmWKEgVG3hWjaf8ZvMaavWUo5b2k",
  "key31": "3PZpeY9hdAJc3aHzoehJ9AdxZnaoTD56JvZ7pRnDGJSwqmtgBcfHbaaBbey4gANWqHEySFS1G7fcEHkrGKvF1boG",
  "key32": "5RtM4v9KwocKYZp7YCiufLZjEhnBcXoHeHBoLdMDGaXVmKYK93HvrB46TNSShLWAS4bhMDboj52DjZ1UQvXEJXKg",
  "key33": "3dja49vtGgZX5KkMQx92bGbpU8nK6AyqJtHxiWvvZjjWHQr61Vvc44Uch2TaUkkZ9NhJgoV8sBAgg9XYa3gzWKdo",
  "key34": "9oXUqKmfD8iLm9PRsqJ7aNu7PuKuEV3SCD4u82VBjiewMVvzFheah5THapyARfBYDiCtGwNZxMVfoqQc3DK4JiS",
  "key35": "4ga4SU9n34M8oApVWjpUEhqAyr2ZSgCWwLejQUpykoRALRUXUw78zStmTDgezdvmyGdt9QZ7bYPzYHVVoj9oNRN6",
  "key36": "5mq5TARWo4UHndKaxGoV1VdZ7PPvkPHw9Tw7YHL6MGftsEzvDs1wdWasEUb2P4mLo1buxgjFnrawTPYLaUaSQTyM",
  "key37": "2FeabTzMeixjeL7DyNQw4Ba1NeifnYpdbXUP1eJsytseZZ9qFmY5N3U8CB48Cn81eZKYU7xHPjN32QSXsbZwpkA",
  "key38": "2bxRQnh8EYaAGeDazJpMDkCJ6UC7sK511DDU1yWMMqdLTgbwk4iuxgfEDfR3wWrYwYbiR1PFt39WRtrnuwsD36d9",
  "key39": "5LD4d95H6YddGV9TkhsQTWV3fG9x1hcvvAQYWWvW1UaxTCghHeBxuQGdjjaxnCxZwYmXQKuLqQv3E28WctbywFCv"
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
