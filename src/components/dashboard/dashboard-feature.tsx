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
    "4T2oaSs8REr1S8gDZWiAP9yeauLJuHtsHsBzZKTwduWJtZKWrF8uZ6fAR9CBc5xLDhgfaN79zXwyPqQvfTHGE1y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XRHDW9FwdFdTxWBma2dsqQary6i579WDwsmFMzEeibx5GSoPrhiXpeKJxqrgpAd2NBotJCeVrhFtTjMCQoZekh",
  "key1": "5xw6MbWyvRFqQWbS3mmsd6b1seKsy9UQ1czztXWEi7VNYJBmv9oaaGwgHd6YiPWAAzrXznb5nqk4Wze2Uq4mon5E",
  "key2": "pVgXkhWyYxnNr6TpRbfiN475U2LXFWMCugEF1x8Hws5cTSCyU7DbC461YqrDFKieknaaMMgsHfMNx9oXD1rDUuC",
  "key3": "5FHvwcDFVRBoztG1V4UcstvFZ9KV2LEDTi4tX4yXEAoVaM31ta26UihycErCiJJaCWDyhwaSDVt3o8zyJ5E82v3Q",
  "key4": "4wYeAepZanwroV1kMP5dKjdWPPNLaMP87LUeTCkyE9u1Sqk6UBBgBqEq1qmALowGcDLJzWhajmTQZyehTaDKLVTu",
  "key5": "4NP2CokBSVnkQ6K554ATSpBtHfp48yxn7h5H9u5zhKfmVE8zrtiesvJb11tQ3vTez4novUSqsRkcdJxAE4GTMxPc",
  "key6": "669gwf5Kg3qEpPKXydCw5eUp42zXeUxZK2mgyQge9KQDciXFzJ8ynUPo3HycrP33k74CgfoGpdYDyooUqMFSXmcF",
  "key7": "3bLWiiRsTA3Dmb4d7wZT6147THpPaVnLNRfqFQmraT53iotTWVbrApCt5d21jfZxpUEiufvqVxT1tsCKUNkKjpfJ",
  "key8": "5c3qKiqQPj3AT1PpL3tqrejLtYsFmFE7Bdwb6H412kNxAQbDFv595K4KVfYFBQhQoJH5sKmgYWkzSqWdyBvQzt1p",
  "key9": "4gMnpN9xYRJ3xFyxLtKmo6fdJVVTp7SvB5qRTSsU4zBd9yEg4s5Up8q395GCSKxcxgc1a9vv1MWyBDEpnPwgs1ke",
  "key10": "2q4JbtYfEmHo8VE2T4WhMDna36dRUS5LnseNW5jKdhwgZe7GNUG8o6K84kWUDegAMrmgE3RmS8jdpiFmfoxv2qk",
  "key11": "58o6ZshQSe12S7QtC3EDXMLFFBzXtZJPCPzVGXotJ5ZhTTYtx2abZtoWCcVAUZLm6YwRXJK6oCg477oipUZCcA4S",
  "key12": "3RXwecafUN1FiDfagX1YwuYosMhJ2NW6yjaBWwrvQr1HnDfcihcUEFxxMpFLQKmqbztcwrW13V1JchDHGEDdiusL",
  "key13": "4P3cyqCn5BDSE1MqUqhNh2Ydifn27YXvyDGnWvduHoND5f2eYquBjehMN3kqpn6BVXsAcZBUQkmLaae7G58esUsQ",
  "key14": "4WyLEHSijHeHMyhkqjtRDkoxrEETJEFKPa5K19U2x9PnRtjeARvGPTptDbGUbxUvdg7Qo5SCi7AMnrSyGFQ6McNJ",
  "key15": "3cEsU28NoEqNXCDMxTLGJhctvRAcrR1HVh31AeNoeuPBz3E11WPp1kgVwi9eS4iUvcKDJPTuzegguTApwtz1xBCm",
  "key16": "5ZEUp8nr44Z47rstkK7suRcncP6Wkak8MThYz7QTJzwkGUYXjQM9qU2tnQEHpDct5pqibT9ENSLFwanXeLB4EKdk",
  "key17": "24RDkjsvqkNY61ns5SG3uLTMht6GVNGZRBmpacYv6M5dK2QfWgkcYj9rLmEoQoLGwU4355rAg4o7CXCMMrgVTipq",
  "key18": "4m2sNoBEbNbXVDQjsWbFobi6UZLVy7nCsf8xRbYdZskjnRVNFQmPuxiuzbifbVhP34drFJozD9RHH6EqKFBM4dT2",
  "key19": "6szXvZ4fx9uiSBgQazX9LpxkcegAGxkrNDZNeaC5n1Jxu9K1W5mMqFAYSgtRcvHpkCH4f98E49PxJqjVKNz8JUj",
  "key20": "2vPoYWE2ZGBZ2C1qjY77ApxN29c2iW394gXRb2zKw7aXgD3K9vBNxrq91yh88CMdGHvqLEXn3E2aDRDbfnjbau1P",
  "key21": "4zLFCmwjXDitLQSLY5wYYYcu3kiT3Kdy4Kcsj3uK9qm3ahTouE8V2yf1UpJM316FRDCSwrvhW2NRzte9qcFq4mjf",
  "key22": "3EtS8RRgLzGwUgxwDhKXXDE9XEDvRVaiNnRFQrr7xU8Jor5hgmZe1FKj3ySqYsft748GDNiYvMsxP3jRRRBcM6m2",
  "key23": "5fZjLvwvxfUCXbEsSTiZ2tpsKRKN2z3B6DHnf8ocpPYNH2nfT9kzF11mXZzpJmrPd2aAvESsLDqe9JKY5xJDsn8j",
  "key24": "5MDxWpNmJfned8Xw8wNm8wDdj8TzsQyUWfq5UbSxuYwWw1s553f3s8PeCYx5DAvuHjR5wCuTWt9cqw8hoN9w7h4",
  "key25": "3GhYiHT3KVLTrdX93MrH8r4w4SiMyGRoRPThVhJumbQuC542mEZwgDhyNUDtHFnavE2QVx3oj515Ftp4RxHqgWFh",
  "key26": "2fmqzaXeEjbLDRgCvwevn3LetrMtJVBy8KGeNugcTccTeFnuoxR5BF5PaBwQDkcdMxuphEGZ1AbBT1zrhP4Yhm5G",
  "key27": "5Hd6KiCZ4Ra3np3EYLj4DW6jZjUazNoqoo2z5qrwdNoiNCHDWPc2JnXtEu96dPMFuLG3JbGLztaBeGH3b1Rgfs9d",
  "key28": "48oCGnvCz7J73qD3ZkWFX9TUqjB4oKbAwWKis5CcixZnupKM6T5H4dft1CCCmtbsgaRHWkYMVi3vaBFBZm8cGQMP",
  "key29": "27sLwWrWfYJcVAp8BtNqxtSVGecTE2cpeVdNPwk59Jus5VZ2wHx1E1itiuLKoqQtug5vdJsJNvynWx5791w7dS99",
  "key30": "5rJh74eyALTYoLgFmPu7tfHPPNREFMqkYAeU5wd7UHaLcKr69oViTpqMNVoSnK2RMbkKFiamhDvtLrrMecbTBkKz",
  "key31": "47k2V8rDdYuyvXhTnYen7HrDdzkJy5YC9wzbEGm7y7o3MQpwPSx2Sb22eR3fivUPAyLwocE3QYasu2hzYsZNSkUM",
  "key32": "36UTipQtpRYpykCqfUtUscTNad5MEGLBbHDbwkxVp9XKwxs6qesUp8wMHW8WeK9bEy9bbgAgLFQiWX3zKVvxEctb",
  "key33": "4G5jRHMuJkSeGXUPBoodESBhDmSpStcSB7JJAgjhYf1bXs7o5k9wYCKH6xre9ZySgSjDW2fkerwiBjuEhtjmZwmK",
  "key34": "66so6pZf9CtGfXeSAHXW5yJi7wRiLWyNJJVzUEq4iZx2qJGAENCi3bASw9UQhKanbs95xPmsYAyw3vFYXr2jHg29",
  "key35": "2aDR1243E7pXy9wmwmNdxyL1HsauP2Bx7wxkNaKNYyayeg1VUnaAQZWkbkyi3CXZfMawGhXaF8jA4mYjs2Y6x7cF"
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
