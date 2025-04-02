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
    "3oY24pPsL7U6JTAaXxUwRTXwGr2h9GGByEqeboRdgBBC681xXgirVbRpTuVPoQaePL879gjdaujgjeN3RCkqzan5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GJPLF9z5eGnv85KnHsySdVb6pQYFyvUeL6bfS17Yi6xmKReLGe4V2X3het8T4Dv5iqAjsQkD4iL51rocyVd7eU",
  "key1": "4uuYw2Q5UEU2HZjmcefRHhnwLe475ZMafPK42Ui6y36WLkiKf1uUwxv4y2eyGjTJA6ZNqK8AqmdSP1sWoo8uLzP3",
  "key2": "TEmiChAcCwAx6hwNmmBBdYh3UHJ5afv9tQqT4ryQ6Dkc7ZWxhFxf8UGpnE8NL81VAUKSntfwM6kgyPK1omKEZwj",
  "key3": "4ekDPSKcJuccbMgCsY3iYUVyzh7HGDiYDWCAawewm3kwFi5PRCUPJMahJD6kasYCfPdDU71F19sjCeCxaoTpnhDg",
  "key4": "2AGGJLp1xEUJy3sk9tFCLnzcNNefFDWsdQCDPafFr27oz8AT573nqYsqFHv1ncL9GH27achiUQcMexw3yv6dTRao",
  "key5": "3udvxaH6gdSvuhKprWdvJsEAsYaVki64tWs9BVLTy17hoo91fT8aw2Z9rwDmZB1BLiG6wFCaABfocbdwHVvpKX1K",
  "key6": "5debQ2ZrUdoE1HJ26S57VvEc8jG2DjiUvcmgW9MD6uYHWQnonuxxZM3sGFYTDZUaRvQqnut9u9A2nCwoXRQDyUtk",
  "key7": "2umvKhNs9swuR6FzjwE1EHaiUq8TvN8mZ3HTwbb5GPtdBQPtNLqfppHuGc69EQHUJnLtF1L5o4irQwvkJgHx8Jer",
  "key8": "TcGbLvZXz59c8di5aczjLhWFWYBfMTPndH4QFQ55kooGZTtqgpud3bXoqJPu9FhA4z1rDhCxbc8J4ruQqQmScsV",
  "key9": "eeFuDh5JxsPw7DZSTLKFHTKNjqqp31sBKYjjA7bSS3UHz2Kb8yg7QED4saGfE6KfccoH3qAmC8Xe64UZb5mUB9V",
  "key10": "3Kvmmz7UrUqshEndbijwhafcRt6uXGZ6YStbtHvcBwqQab7rsXSuLcSCXinwG6vkf3XYrmc3QGZEXpjzFLU9T84F",
  "key11": "g4Ciw6rgP6eyffW7j7JjUPfV9iWKLd7oCE9xr8vre3zkBRuVAoehUTxNNGs6CNpQxCGZW3rCMSmeXigmup7JSXh",
  "key12": "5ivjXfnv3PN1XdGimgNDYVCVT6ZBeUUqRqHsbtp4EcVKXxUGje5Bm4XwSdgV7HoWG159Ghj3w8UyCT4yf5n5cVts",
  "key13": "4FDQgdTQ8Bz1j2nSAvY7xsUtZEp5V7a4DxSaqZxH3gRhYN9j7Erv9fydtGDaKNE3nqpCxBuWBe8VBsfA7EdazVsY",
  "key14": "Avk6gs4yEmF5kGTTUYd9opuzcyw3a2wKoe4893PbdcSPyjTNApMV5cHJ9si8E7DRSo3EPpvzau7LaXmiTP9shiR",
  "key15": "26ukomWJZ3oHmNfmx1WqTmUC1Hay21ZHoNxFx9omfFjNwDBKNSTxoiqGkhPYHygxnKAxZJKMdnKwWynf3As82ctC",
  "key16": "3eNqHKzqhTzFBsLHUxiPmZiETJqWBnDv9cvkG44FiTuCNNx4APTgTmBkG7t2jPVKSmUHx5VzjvPXtpDBwkHN121W",
  "key17": "3bMfNr1EWXLHKW2JeW81swp3DXhcudMnqoxrjWwXE4eABexpPLz9WVPZZXZ13Pkv6CpWErgVy7kBEfb3e9RZcVEE",
  "key18": "d99ZwFuCEjLoPRSrWHEX4xxx51RCmPQi3JmWCKXagdtWjJry2ESYPNzDNeppdgW68nu6mwuaMS6V3tHRvdywnAS",
  "key19": "41jcmzJDbTZNpaQHPHX8APdzAjyN2jrjQxUWRUnsj5A1646tGsbfZK96mSznKw7bD3ik3mJauZnGL2RB5AYDu3LA",
  "key20": "Sv9ZQkiywt2WKzTjstdfNWRhKsoRcngJejezJjnHodkcDMaPDnGbE4QKFY2XqDp86bTyGt56i6nT2QBDS5YnLSv",
  "key21": "4FznE4E5TwTtC1coUcZPbZ4c55owUu4dHevDUinZtLgSqkVSuqffcBTarBXTcfR2kJMq7i7jj39bBQTz9UxxCP4z",
  "key22": "5unNxQ8GUCRCLhhBXujSoTRTvHWMy8sQacCZMBA2EfrdFB9Xg4QftjgGFsBJRkGzxE7UQ3U6KXEbKvhVY9FgVWYE",
  "key23": "5wvZvPKNQhdhZQ3TrDEQkMP33eDhZmkhoArzcGWUDG6o8FwU2E2AQzkpskQpUqhVLm6bWNMEyvQnsaoXTpoH1gqL",
  "key24": "3XzHV8vLKQQmbjiiC5AmzPsy2P1LTg8ZrFgqfTNPPednH29ytHF1JnC6pjCPa4RVbMMoBxM4mKTLi9NimtPnbsMD",
  "key25": "4t3UtpX1DPxsonJMbUMXkLZfTNWgtse2jEprtzzkXLdqT786XMHPodvddHRCxJLXqp53Xb4eHDxCWoV8BLmSNqN8",
  "key26": "32wEzb3JsVknXN1zkqj6nhvsHAeRVtiuSRhi3MKpFyeXbranyo9ziC885cfsyH8XLQGXh1WTuNe3qnXmnKSWfcA1",
  "key27": "9RxoxxaP4BKpML2Do2Z9wKc2FYRrH6NppEjcA9D5eq26xXHtBQtW1VqXGrph45cdNWUp2BZnWnAZLnWm2VwJqeA",
  "key28": "3a3WgpejSV1LgVbkYB1jXBuMKEYcAAB5qvbUsDdCmZKrJ3GAkJeCZfDwv6e6HqvmBky3j312EQm8GyKNJMUXPUvG",
  "key29": "YQka3mT4hWc5o5kSTkYvawmd6hwajP3tdLmUHn7veTPnAKCD2DXwfgwDnFeqPMrFjXPND6vp8uib7w2TziNNn1z",
  "key30": "2Bde8cvf5rYJ8QC2fy1jA9FCxejtJ4WaaE9PsGctPmW7hgH8QMzPdtLLeti8eKA7b82gRzAhkvjRmUFf5xsew44X",
  "key31": "3LgrVsPZ9AF1yEbovr8xrkLhU3PRdeety4WkpWkPgcXNuo7HrfRMdQQ6vhtQLqVpkJTciHRmRUAs5oU2ZWdjFTJp",
  "key32": "3RyWJDSgHpNa9pWuLMRk997HGmjnyiFUdxGLVJsyjrHVVVpVeEHTBK8ezVAQMfhe2i5WHtdnZRhn3mfrxhNRt62A",
  "key33": "52fQtXmd3e4SQFxnoF2Ci25sWqiVALUnSf41RnndMpvzJN8yhCiYfCxJuPPALDax8rN9yrx1JHSKMUuVcNRqbeiX",
  "key34": "2axZc3HucC85hsDRcRwoTRA6WBnAuPjSAXdRBbAbbDodU5DMiu84eEsBd3kCMG6bc6nKTbo4SwVBnkXHLqEtPb5H",
  "key35": "5USitNMLL7MdUJ9QYYWB9shR1KwohXdf7Bf572y33kbSqhhsYBkimZPs4avoDtYaHmtwcUgM5mXtgLK9NbcefuMK",
  "key36": "s7oT7MBYA92VDuvBkitKxTcmhAWDMyPUQTLj1CqYcEcaPrDjSG3Xaqpghk4bejBGFEBKh42iRqGE7wk8qbNoPDp"
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
