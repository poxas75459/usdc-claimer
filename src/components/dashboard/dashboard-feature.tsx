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
    "5JuvpVmewLWUGWMwxbengQRWRGzjW5jLDzfKSEYCkrFpDVVApHpB6bZMbECMwCSdoNTWammWbrazDPDciuzHB96s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juwv2Z7ji35X1XZ2xfMb2ZrpFjSSRACjyZxHmtsprwg32UwxA8YQGehy1ZjjLJ9TCTefcRa3eAcWyVb3nTqpMSC",
  "key1": "FrVHFjaNdN45M83CTnP1UWp3uyxYAUUDfUeeU1Bu2uvB1UAfTx18qbSqoND6Zf9EA4wms2MxEwXXRg1VvYssob3",
  "key2": "3YeqmADNt1Q6scMrTysHBx9521sLNMayQnqKq8p8UsSyegLThwHdeqK871XP2NddZHDb5TmrjJeAfUo9M93Q66P3",
  "key3": "3kEF3RqQv21bGydSKR9CWvDEzseTb6pXePDzNtWbi5XFXaiqiZETXMwhkNztUpF63YzcgNGXKoTpnGzzJdgKM5X1",
  "key4": "29tWgq6WdkCCyW1m7Br1KUkEWnqz8qtvqr2Xmc1F63eCkUEdnBC1vRawHnYibMtpeTLgLjiqazSgwMQQmstVowAz",
  "key5": "4TiZMB4SuxRGNfTUsAw64Go1Nc3pzPohC9k6ehUK86RuFRUoURBc8NnDuojscqYaJZifMptwWYUkdcBAiFcYDM5t",
  "key6": "L9PJ2edQtNFSgar9ZvBUaGMRkuopGCEmU8uvPTAVhLmLTWPawmLagy1QCGxS3VwFWU3mdAkMY2iQFgPft3jDbNU",
  "key7": "zKzBUDzsBAciGbJ69jeHSymk2dRVosYT3p3JLUnvLsSD6RxMLk42BHfyzgUVFQdXE186yCtPeMyXP7aCL1KEtSi",
  "key8": "5hJvhaq818gfCqRan69khcTW9rfkSH3Gb1g7LvswkQHdBYmGiDkJxDuK6WeE3LKVwyZ86XuuhAo6VLCSx9ttn3yV",
  "key9": "5vHgtLZh6z7bBfZ6dVD9i7kxwa8anPNJJTms7AciBBzR7B6Y9wBY7QbSExVjberzPbLngfLc2UutD3itaH1PweRQ",
  "key10": "48eWtCVkyXRcJHgTSqQxFMNUoSoRy4rYmmTJBuqQi797dXPxG5gGd1YL7GUW88sC5T2KtRiDbmvAyhYm2GjosDWG",
  "key11": "2zLxsdFUBABb8GyxGuckvBZJ7dq5vepHGbGSzyWtX5vgLcntFXsRP5GAj8L9SvGrEzm3kckHiRBKd5LBDN997r3Z",
  "key12": "ykZTe9divHTcmfHyUgiLn2pf3PTwTdVswJ5hwcJVLWhrJxytEfrERYvKUYEhhevzJNCUTwusM4kn6jJUBhVyUGh",
  "key13": "3FLpsgC3MxJnLMnkZAJYastfydWjt5gqh5RnoyJwF1Ytfz2Fxe8bEfxTJw2qhoaYM7zFfgnrTXxM1AA2umE5dLQK",
  "key14": "VhU2QGQu5ShgpD8euiGqbmaikeWyvEtbg2MM5wmmjcgiDRKngwsCD7shePCbrZ3cjDMVgUaG6rr2MTV1AHM6WJc",
  "key15": "EfSCD2HQQD9dopvF7JXmqAZUk7578J5YAbUg7NBKHnvpDTrzSTTkDpWdDLwoqVS96m7L5SJ4UNn9WDcjUSJNPpJ",
  "key16": "4gT8d6Ks9do8FWPZSe79V4hCdwotF237tA9fkoRCH2jHsQFbaZ795SKPcz8LdnnTa2mT4qXo7kXsEDbqfeo8U4w",
  "key17": "iH5zHTEccKGUTaHorsqQFSXg9vNH9H9BKvTGvrTsYY6GDP8BsL8mbsp1bnfXpLbfBonK6vGrfVhbFrJZdXc9sTM",
  "key18": "4gfDXmg2wBGE8vyyFxRNN8YLdB6SfKAmQx4TKc6eM33YnRheSQFJW23zKiCvw92VDSCvkb7NzsvY3XQzECkyNGtm",
  "key19": "NuCnUZpsYfDwqnmmt9fFSDEpwTe7suuK3fkF2L69x6R395uiUL7QLMhVQxJxmC5q3fgnRTtLTkxeTEWENY9LL8B",
  "key20": "21sMXgcw9yTZfK2p149Y29sXzV9xdrXfZiJaVAVcXkprnQu45oUkwbLJ7WRZdNd9Cnmake14uSo9wKcJKzBJHrGf",
  "key21": "59iZPeaefEFiaipXSx4tb7ebBTZk3Pjs7h1yRPL4SYYFDx9sKQEUtTF37QcMX7bAvQ1vRpncpN1oty8HfrboEwJF",
  "key22": "4xM5vSBygJ4yR6tguzxZ4inZmhnBDCLECakazBeajMpEYsjVZJ3nJ5Fxma6WrYmPYb6mH1KtcydkU6RR2GEoXyyt",
  "key23": "2dchGNMPDm1mwf8RtzZy42KTcLi12WboPiYduCMPtifSG6Hy9UAzqAzbrFAhbpbvkWYPhRRwMF7nUFhK8dtHsDr1",
  "key24": "3zfScYwePTAtWYqb5SJHf9rj7r1xg1pJY6UQfaa8J1dgYLVxroWLVLyCR1rYDbn2zh4BSaH1v7S8gxAKPbXCwmkV",
  "key25": "5cEbQPAzsyFqNvzA2oAdUCY6Z84rFpYygSVm5C9MQNd8PUrjYrWCAaHPkc6dzTU8mRsJoNZwAavfmVTUScnmueoX",
  "key26": "2ApW84WWtworCEJfrjqX7tmkMMRm8GjnKmoBLKEzqGmHDNZUq3uax1kC5DnytybMynS14kjecuUire17XjTr6xBF",
  "key27": "4NXeXVWHhDKumrgUjRN7XS4PAu2J5tv7MsadZ8zoyQYNyvjJJaqmGbt78gnPB9VWZ2uWL5FuvtTXfVVoBTTxuf7Z",
  "key28": "5QDLPGgnp7o5jVSZkctyynTuLRXwznoGGCJXY7XrkjghweKbhMQoAwjezD7ues7mnjgXJE7RyV9VZ46s66WNNJgy",
  "key29": "5xN4GhM4WKQHnu9wPVroabxqGChUbc8x5PMQNm6S3td2NU4nF6qgsMfFSWskG4aKdcAQYE682hQfZEoegCKbSU18",
  "key30": "3y9H3Nmrys9j3q5MhuzqJo47tCeX74vfWKmyZqCKEzjR8npm3FVxFiiqJUrvtFY9TGnbsmG2TB4u5mWmkRWwkSeG",
  "key31": "2JapD75yoH1CemVFS8pJjwDZaRDUrrpvirhMw82wwPWb5zuFzerHxLrYAffXusroiMr5cdoqUMponD1kxxksmJM7",
  "key32": "5YePLcPYMJpM2tPfFA85Kd1BSYfognw5R5G5HM5LU7z5BFYNiJAXLpmeCEUEAmSGnAgohWyveaxGRh3zqiYGrwrR",
  "key33": "5oAtuCfYopw2bczyrwWrDf9RRZF3xucQnzSznepA8t9ws7cnesHVz2UDuikkHkbyZSviTX67ELsj4JQQa1h21dQQ",
  "key34": "511fTvcicSHgbV4NWGZckPfpuqtGb6uXRtRK3EasnjfSKmi1mCUqHHSZNtRqv79v2KfkkEn2kHQBKZqvqJbZ3QWq",
  "key35": "2tjhGtu7U9tQek9Su2cqdqcjhaEBxs8sYFbqr7wEBXnGdAuTqve8xj1MPApiCvchJ5vE7SWarCVJhDMLDJWKeA2b",
  "key36": "67GRG4pDdu5YaTiysu14WPfD6xDeLRoRE4Duc9ykSfyYBbdciTWEMYt5cgToKQ1hLLqH2AQrMKkWDXVfUHyjWGVv",
  "key37": "4dP1Gx2oWbrX64XPWLkxw2Wpd2hzxzTh5KTMW3AhuExSzWncjVzgQ1ZJ6DVd317EiMUnoQwg7b16rWT3f1176DHe",
  "key38": "5oXApQ8yCKc8RvaciZw5CvRhEQtRdtkhD8QjoaGj6zAKhsrFQVFS5CLYk33paaXQ94hGzAww3VbVCbC6UJCSWF7x"
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
