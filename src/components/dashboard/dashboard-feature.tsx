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
    "4cgRkV69otDYkHycHezwUYr2aM97HG7sU2sm7qvnq12tHtzeHV7ZAqRszGKjTnDSpwKdene4eKqm6hBi9yibXkNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYgygKEroNGdCY4E2Kokwzz6WgETLBDc6goUmubZ7DVQEY2ijvYihqwoNVGXzr5XoTWhhyzz7HZLLqXeWRsGsuF",
  "key1": "3s1hAr7Pe1RZ6eQvAKRvtP5GuiD4TgnessStRte1KeTUWryNUXLy61v9vpHxSj5S8wnCzmTBvVrM5CwbjiTswaU6",
  "key2": "2LVn9o5TU3hMG1kYwoRzpsZkaCudrN3Gvs5Astc2vZvVbRZRcu9eHFNHt4BvdCrpdg7NhJa8tccjBi5GGnQKW4Rq",
  "key3": "RzdWV77ATrE2mNyhrDYDhNJcSpd4Qk1HjCTEGRgBdQujqp8txv3K9XzStog7a4dGKuPfEqATt51TunYUwBLaHh6",
  "key4": "2n5V2qeZ1mUfvrQgQLSzuMt4xNhFsjRt2suygwUZvvAfeyNhNxw3SweGKJVbQQC2QTRYtffz7xYg4wEz5nMSbHBZ",
  "key5": "383e74dmFRAww7DbyvCzxqnCyHy8K2Tbt2f2DiRM2VWZp389FrcNm44qwvKbdjTDpu8ocoVj3DAKVo3gr9gBdyLv",
  "key6": "4BAcgX5akatckoNRRtiBHrGvKWHXp1sXXN5kD1yUQXG8dfjeMTd9BLTYaQ5SwAodH9FMyovtHCBjgZKE8U1VNmHj",
  "key7": "3cn38Ks6mLMpaaq2gS6Tmb9xyBgCn58e9yfwdczBoKfsZHf7TYZGKFXp4x281242LbjKt6jQXnZYvcsfeibeATaH",
  "key8": "5beWuKn1nk7NcgPTDHGJkrgGNDMhLcYj6egeGh4sEYhUrRCt1umt8KBm7cwQV6EUUDkjouEi5BTwbyKJEzrrDEhd",
  "key9": "29Y7MU7btbmczqidSk8fGyhYWazGToKejVPkbB8BtfmauzDyFDfGsUjg6CjbrczRbXe39ykiDqemZmF7b6Md4Fx9",
  "key10": "2YrDiRmdrNNq5DjwdtqMJcCRU5AmxfNkXJRYxxg9BR2ZRcthtwSDxuMEtckpEUCgA1EqLpPKeM8ttvLqHhV4Z7h6",
  "key11": "4wEfzCYRwe84dxNrEBSFUJxAEU7DvXy1pyB13gGH74io5Ci3MX14yQTAjY9rhV5WKL9WHDkC9RSmuY4ENGjWFcKE",
  "key12": "wQ8tE9u9xrUFzb7ciop8WTBQARukFnxcFNM1BKp8eDGamabuabvQ2LdcKQ7n2NvPbuzfNweJou1N5wjZzFHpSPV",
  "key13": "2Vtmc1xTcp3q8rZFpBKqfcDs78L6rBT4eZwp9MwFzmgtFg7VMDfAHsPkEakJ2o4wvkuMEz19paRfRCD7uBU1XC4r",
  "key14": "4xjCYdjgf6ubEXJZRsnmDM4VhYqXYEMQ1DLD1D7gx6enSEwndEJ535NMibgbxyczDBrQTZvLJaj73CkbDVf8V6ae",
  "key15": "4R4BFYyAyfk9aLXML4FrHp6QVAfqXnpLS6DJpF1NApmcoQA844UoS5BxnrKynzAPNBn7qibXxTM1dSJcNWfAntUa",
  "key16": "63kjQEiFDhkL9T3eufV5CyaLE6E7aVxtGHLbdLULDyUEiUgJ2ATMkdi1gWCTjNDv3ygSWQWf6eCfthWbfQ7gTFxh",
  "key17": "5G89NsxSa8pb5YY7KyG3GnQ7aTUhMj6ASou5H26nzGzKnRzcr72GCqhbE1zGoAy1HfJ8PGh1vV7AhWUV84Js5T7X",
  "key18": "5d8pmwAjL2RKXGqrnNmUct6fygKNySbJFLJ2fDcaeZjdsNUHyuRV3PA42TMUVRNfCddy7Cfud5Hj7SWNfDHU1DfG",
  "key19": "3Axneaezjq1hZLFTtdkJpHL9EdVPBWUyMMTn8Q8h55VNYMEXbgyMMoHbD6TbjrSie3B84AmXzJtMXy7VrazWeH1D",
  "key20": "3fGgyW3xEFVsj6SCotVBsXiWu8696xbbFAk6jLK8S7WypJx1tAuVyGfg2tz4WhW7NNuBPagss87FmmZZH87Vp8ah",
  "key21": "zXkbb31crPvuFjaV4PAts3R9SH5RJyfaG1h8scTXKqxF3txChtkQVWNmWutfcYKhXMzcnPHNNHcMBBCoQjPDDuv",
  "key22": "5Av26qWh8sEPQkXHGcDjJ4sKCKmEVEQymb8WkTaPm1dTDyYSwBVex9wbR7c5hbaMF5mz3qpnkXFD1G4dDFShFJX6",
  "key23": "5kcojSEwU1o6sLwz55eDY6CJnu2ynDJDSKVcewvu2mGjWLQWWZs4Buf5hSHVftoJ8xR4QW7qQAQ5akqhmdWEU8XU",
  "key24": "3vfeVnVUwwyFMJS5zZidcTXMXC4QzaUtrzGCfLWMrL2vcDAR6TgFcEzfCr2hHU3qKwq64XaithSncmwfHf83ynWo",
  "key25": "27zLDQcThfmq4RLgmeaFSWvQ7XwjbwMY9jQBaLfF8FdHwbxoQ92sSJ8QgyaJUWY8ZUb9ecNjxNfEX5icJMM1vuhH",
  "key26": "3GCV2cTCnQjB1NtCSksbb3w8xxQpdxTuFcSdTA9B5rnkzaQzQZSKcFTxegk71P3KDpVrtSPdiQAebmrwcvGxJfCq",
  "key27": "5AJViKEpKrj3ZzUJs39uKvykze5W94C4Knahu9F3RP3f5MsJUb8gqMEWYe3EuTNEPYWD26Grhd2HG8SHQFctnaCA",
  "key28": "41K3voNxwye3e6tAcDD8hahzxFXHxG4fHQydQLr1pdkuwBXs58JXnF3vHPw2Fj3CdxgVGAorMHujkbParUDX8VTt",
  "key29": "3KSD25F13f4ZGYUv2NMTsSrxaZXAwvPcHzL3whMjpJJtXzvpTcUPkfU9uyUwPTwU6PZuuPmHnXPWT7mnJanmLXo5",
  "key30": "2pageUXuq1Wyem5zGiGw5nG2K44JWe9vGvJ4AFrkVnPGFPj7vG8fzX2jdhgdfRiuqfBMqt2ivcEVZNAgr1txgCgs",
  "key31": "4L3j7crtZjgBP4HDE6RzqfdvLf3WtaqWdbJMxkAoEBg8Gkn2czrH8ErGBwg3S3cN2E5rrbzDRU78hnwG5Y5xMQL2",
  "key32": "4QUapfHz5F7xFiVqBtgybkVxEk1Wkqw5Sxgd2811sMF6qhxbuZNAwzQycohXYtXGst7A1xWfpTfXbywV2FThJvSB",
  "key33": "49dqc5wBhw8tVtTSYywseG8yFFXv1xrLU37SgrgiALEvusrsQjLqTMDmUJGvA2gvEf3Z74JrLqDbb7c6ofo5sFPx",
  "key34": "5CQprzNJRbkJQr8hPhxY3vudyyYzvupAj9WAVTkbxPgBqaiX699bNmcgXJ7qQx2VhWQMneVrUehDoL7TBhU97TSj",
  "key35": "3PgYeSFafGnyWDQgoZQGfTwo7cHeA5mNcJ7vkz38WZDwZoKPRffRKZVyhZTrYo1DVYeM3MGhCrYEfGnoethAwQEo"
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
