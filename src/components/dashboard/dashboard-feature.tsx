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
    "4mc6ZejxmLJtk4F8NtfZteCejgG8UzcMQpYwH4yXNJ6jeptYx7NStzLMeZmWoTkzMZH4bjrksAkkYRvU8gerXhNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soKrLVyCaQESA51NsmUK2rAPGzE1Koo3LiCFF9LkUGEH3AEN4trRxnXHJDphi5o7gpyhzBDJ11cnJt8A8G9X3Yv",
  "key1": "5f67y94D9yginHDSYcZZbjC21zwnTUET4PANvdLUxL98vw65KJRpLAHnvErEaLhZna2zc2zM3VBJZ4DgSyPR9V5S",
  "key2": "ncigburVZMh9y5wpNjoG6Ss3oDgfp5Schu2xkoG5zJGtVCfed9Wbds1y6oYdiqfTqYZyaKuemkQRRboHGJngqtR",
  "key3": "61xYZkaVZftEd2JzcYMoZnQVdMehkPXEm6grBPse8VYrQ2CeKGbKexo8bootHT6LSaQ3nSdkuAM7XmeZYcBaTEVV",
  "key4": "3WnD4tc21Mma2D4kVhL7eF2ENR6snZgKaccCSranzYeFgxGyd1oaP5Rbt3bjNq7Q1R3vevL22dM1B2KAALZMPLDX",
  "key5": "yV4LM3UfAsuKDmcDaQgrN1sWKsss5YwPN7ty6Yqsm49X8si3z8JXWL7wFjr4HWbyn7RSvTfn78EEpL7WXgvBHer",
  "key6": "5uwNk5s3SM94rf9CUcYXByAp2533y2qXMvYs69MUbWsVB5ksGNMZmBup41EFWSh4MF7ApjaQhbr4kYPScPxTE22S",
  "key7": "22xLeJJxvWqh59jCxikRKCJDbBmTad6RRdt1a9ecLP8YCKqsFxmvhZAhhoLBNokbix4CSQoX7uK3pAfriL7QqCtC",
  "key8": "aCSJQRsyVGpnL99uujugyv1PeAaEVrpREneddwCbQciWmSo9BsdLrtM6y73SBuSster3wQwienYHKHNhBWwPTHL",
  "key9": "3zWubL3MaDHiHYT1bRDMrLnWjaBkJx7aJyf9eTZqGuCghY4RiuvCLQLpXXDGceZunqV1ggJ62UtTF5wg6v98nxg1",
  "key10": "3PWd9CNrzPjicxCVba3RtCtAMrgRm6SKw4CbsWDMJ9CJARcfccWqyraRnmxCZbQxavspaZvCvCK9PWTSBwKMoGWr",
  "key11": "2YCikLA6mfsGdYYaZDsHnitevMnFYxUoYq74JRe1rT2yD74JSnkYMRpXSEP7JBXKi39cZoEM2azWToF22CqrMH2B",
  "key12": "5MVMN21e3SWMB3g69VuJa2wZv9LGaBpn7dKy7trfePUDHUvLRFu8AThQsr8XxUqBSzVRSshWwKbrmk59mvKUZRUN",
  "key13": "4KAg7hkAtEAocN5rEXSJJSu2qX199Ruy62PeKui4V9q3FSyonZT5Sgh3Y5tbbQGY62jc3myksndPcVRHoZ1pAWhq",
  "key14": "5XrHQd7AmedDaTP2BtUZrJoy3FYDAAECXATrPd3FiQTLckkVMZAx1EaxbfX1m6uXqsLSDbFj9q5iwMnU5x1eFfSb",
  "key15": "3ubqoxsjbgn118CTHfjUAeSZiiCjsb7LrKWum5WqoGU29P4BxSQSKYLYNXH8BVQR6QWMZkzPbiDnZpUJPgvDneNQ",
  "key16": "3NZYmXEddE2V9gurSuYbeSbPGRVQTVcdPzV9pkx28NVP92X6uFDrbzzLkKEoH39DsPv9AKic5AHbTVq7XikRZKdf",
  "key17": "38EC5M7hnYcDMZBQudR81dRWPJ4rYCQkdFJdY34bt6DyEQaT7toj6FaTjXkqBD5uQ3caC8QBRYpUx9dcSzH3wDYo",
  "key18": "KMmwjUmYAWCzyT6BHb9DMDtNAgX148EtdQo5asyLXD92oh2hx4DyJZLGzQ6tFBKj61Fg9mDnJpi3gZocTSP2hoV",
  "key19": "5qZxiRpJovvDdUDDVsoZuzUAJ6gz8SXAuFpAyoQNLNkXZ8UF4mu3k19jS9v5JVZFnZaonceB3ZJ21Jb1y4sqz4J4",
  "key20": "2Z38wysoMDoHRZBdvxK3mabYWKuMQzjVWcukHQvFCJJVgMHFM1hEmjmwWqDUg8h3biKEsPtFUNzjY4zXLpQXa1i8",
  "key21": "3s9AK8jhD9wBBfVuPpwE43A7kceYTfpcaX5bbLfHVVwuVENa7hMfCickmjsbZDzaKiUsyRu4dMU3qtGmDBgEf7vz",
  "key22": "395fBomv54TghZ73E6emsFXV82LnY54DPc3Zi9CrT12k1KwwfUpFVNQeQhyffRxoxahhfQqpn1UZP3euYvQDL3RR",
  "key23": "3WBdHMGAjV8PYRD9vxFV86rVPT2hpcrbfPbDxn1eCZsFMwYA8MD4c8BX1GfFzt1zaYf1rkkr5cvg6HpKtcdmpyam",
  "key24": "2vvbMiKTxbg6s8ruewPksANB59Lo9yScdesfkZP3BrVQTrxuGmxgWqSC6cXK6sMrJ2XgRgoLcs8DQUjaG1cSwR2t",
  "key25": "2v1oToGsCCGgKQ3aWZzw7tsGufRgXdxo23cyjsA1ZuWZ4TkM2XwNuPZ3GUd1eaGzXSumCFkzoUDuwnTgQg9yuDv5",
  "key26": "2VA7kEpQgT3GmyfcBFDYyUKDFzgz9CAjXoMgRVHnZ7fDS8QXdj6dDQmS8KNc5y4XBJcJFPLNrQ3Xe84f7rjVwD5P",
  "key27": "3c7ZhJg3seGfXTEgL8D8EA6qL6FGdQNzpkpxTb87ZpiB3QcCHCiiTC8xKV1uJb2X4e1pDbiQf6PJjdkY78yFyVgr",
  "key28": "4845B6SyXvajKpvUc1F81jnxpav2wJ6FatD4FP72MJ3EcsvFtf6GELoodbvH6KyuDmiMNJwmDKD4T3cGxYtB3Rhn",
  "key29": "2hEWyLsjuRYf2uYvvhhHtz5nbhv3c1vwLD9rPwjFa4wYf5y8u2f9r4Zj4KnKeVZW8SPNdcynCfYcaubnFj5TZwUb",
  "key30": "2eBKKYAshq5QkQW6RJ1MiRVufrdkRB2hyu3VLpFYg4Urt7haS2ezx2z212T6dECazLAYb5EEgwPmDbziCkR6gkLQ",
  "key31": "CijwWwUKKUxD2pdVXFYPc7qmB7BiDdywNt9F8g7S98UbRxy1rRafSViVZcAzqLUiBYLKcb6MJez626jPU4vrA1L",
  "key32": "2nMMboFyYLTXc3gBPpFXWj1NA3RxBQVgy8Yhje9KKXJk68fbq5gDzr2QdWF7P7T94pU3gfmSwg2dwq48evQqvcWU",
  "key33": "4CZ6DJBWMTvDa94UJdEwAH1E3oSb1S9nZ133mqb5RKNkFucx22QUVkMK55Gr1K3Pc4kR35gB7HzStyjbsCT1Vma9",
  "key34": "3neujjTbLvcQk29dc1RSJSbaQqvy9sAoK82SR4G7FqhjUYK1kF249U9HEQdMJJkhi5joRCrE7yaAQws1zvTLwgga",
  "key35": "kjHUi77LL6tUjhjgBFgTT1aHfQJpWehLvkoefmfNFNpAQXyCwzRrr2SSocqDLBwCiVfJzAhswd3SXppQUaKV23a",
  "key36": "5Pz1uJjFhryb9iS7TQiyAjtyCyCfX8J7vyaZPphN5PBD3KeZZpn37jtSoh6GSCHezvKAbAm46ZaUQS1RrzoXZHG9",
  "key37": "4ZAaTa4gpZFFQSQbMUVqnsEPXqgzE5m7jczGetVLbZEUCGevDoFiF3fZHLx6jm6hhnbSnqUmp6YbdCdgoCyyPaGG",
  "key38": "4vuGsHewCimnpvDE2EVx4zPhVt2sHfM8QzHWNoXzrrVSPKjpFuodchiAtB9cvS3BMYPWmNvJf4jAzQLtyD2uwW3S",
  "key39": "4nAKkdBvaHR2nAJgBzCTKgKGychCZeMxzn5mEEohQDr6Dw9MfYhHhfmUfKNEQcsqKCnwiR2muazLj83sqEJ9dShZ",
  "key40": "56y2KcEbkjRL9oX3ywvbXJ9m154PsTCq6RdS6TrWxRAW7ncfwNqMRK361kBPAB9tL11v3zVYC92fNXrmqhwL6YQb",
  "key41": "3Y3NEa5ZiY3bnGQP23WCND5exss4U9RsX1sAs3vTBKrSmR7h8UBUsJp7hf4SXnqacRv7QdiWTQwoBrdwB3mNzuiY",
  "key42": "TjTMden84MzieuH2MVSJrkMMQEVXorbJqHzrahZ9BEC5AEfJ9MUuvGgtouLNe5Sb4G8uuVq1MH3RW3XLv9MyiDp",
  "key43": "5qbox7kde9WtyWRiHAU8JNMYPo92B7sm9mffi3mubQHe42JxfoSRxF9124LPghPMeCqpuPkKbHhUy6iV3hwELaAf",
  "key44": "5oHRhe4UD5tiLV62a7vyr3RqWRmXBKV7jQTU8Eu6dSmufYYqpXWJ6gjkrvs4BqBVkYsxvRJ4u3NjiBDYJdXkcfn6",
  "key45": "51hK331KFEPDYeXjMnLaJc1DCHgjBqdkGJJ1eR1A5skY8GVNYeRqqfQnzftyLhRfQ2wvkeQQzcpZqvpn8aHAorhG",
  "key46": "52EA9hwUzvhckvMZKP3PiEjSu7iL6eRVTUep5TT3Df4gYtqBJHHB6AzJcdfGGLY6PUSCrJpZDnbFTiAWjcW7ymF",
  "key47": "4U2sbukybAqsULxCq5peAc144TNLtSMBsKMJqGcbB1QEAMdhXUmGk93fAeKGvPbz92keJmCCwc1B28UQHEMuWXs8"
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
