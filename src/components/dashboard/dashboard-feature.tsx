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
    "5YLx6oobFY8gukTi75gFUn6EvoCp6C3JvzACfnH7e8vT6UiXwR1is66kA7BcWXibXRv8678FzQWTiBVjWagwVv9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSTjHPD3xfcNCaH6MpMiEUrghoM58hEu9wTvMR6ZMQ9p3aWkik1ke7yfjs8rfdJZ32anDKebQYy4z46rcVZqiTT",
  "key1": "3z3JjSZzDnRukECmVZ1RWbFGMALDkK9YJpCXUc6e2rKtS6kSQxiWLCe4NTgP5jy73HgD2Xo9oPTavBCEpHCtSSEH",
  "key2": "48B91G3ZoxZ9jRKv9pP2e7q6mxa1jfMrzmoEoyyqNA5HU8XsnnePRFseHRtHoRhg2iBR6PTXR1YPXCuPagEakKFH",
  "key3": "4RPvxjbC8t7AxktbQr6BMPbHuGSmdSQ4pf2V29gSGgwBejkChiRVkPEsnyiYJL6vH7M6Cq7CWAPEvMBpCWRgMQY3",
  "key4": "3BXijrzCNBzXnm7AyM5Ytd8dvSwPdUpUV6HNJ7zHiij2i329rMLguPnjAqULYyytDgFnakZmK1qFCQPcUyngjXvD",
  "key5": "js3MKfYNRcLm5pUmBkwb36y9MrNECH2kTxkVcv45fpjVD2n7MB3JjPHsgPLd9fiGRJwwNXzf6HqaQXCZmwP9SY5",
  "key6": "PZfSX2gS3FbXQbeRYm3JsWhcZyj1gymZTehAa3wcxESaiAePk9CJdrvm3AF4vYp5oqmi2brXYnujPf12WhfFhXZ",
  "key7": "5My9hWT4PhHzNjDVavYDXRVWbSApAaNM6Wd9srAwkNipuYy7ULa4tNndf49uR2WTih3vUWN56xpMR2yaEcdAnsNh",
  "key8": "32FasdLwPxsqxQ3SsRSnaAcw7rxdWsTx3RSPYJyaqWDwdpfNPHwgbBmEpD6ZiA7ewVHWsR6hae9c3kYN1pKo6n64",
  "key9": "isar1VWW4to2DtUegm8wQg8vW4VumPBch7jrVG4q3YJeVE7EpPwocTUKQBnsBpiDWaZBPboincNcsCTzgfVJ36V",
  "key10": "kFgC8o4CVQibgtUKuJZS5sLytG76YLEgfZKZijTZHRbx56URf6bBSTdZMLR9LGdzX8VCEqSh2AjEV3AqnC8YZoq",
  "key11": "xe2z1vEvE6Eg5MJb6WS4QrpHhAampWaLGi3UHW4royaeR2K8D3Ja58A9q2temj1rRqiPDZZ1GLUCf8sYnCdgsps",
  "key12": "3zBVPGQciTFSqmhuzzjKfZfwx4TUV6dgMDJaECzJRPbTBs4mAHqQk3F85JUecKioZaFeuKSa6UCacqEoJmWbs1XR",
  "key13": "3nR4TukPnZGrDNyz6LtuibkhNSogS22hkUB2pVBFCv53VKEWbMANx9EFKg9YaVRGaxJcGvbjuYHWQ6DqdXz5WeoH",
  "key14": "3VYA9YDSQqMtagx34eiG6EyCNWJpBcoDULfVRzRU1K4iHDymajU2x3NHwqsAzctC1zhYYAwTzh83NtPTNbviNsKG",
  "key15": "4Ndc7GMhnjVa5EbUtsS7qhL6UrvV92iMXFZ1KjFmMqWChJGbTR6JigTxJAHaBCpy5Lkd7uu78VMHSV163B6TnpQN",
  "key16": "591p3gsuHtMmFQjJMQAdMVMdX7saCLUi2iwcmS5MNLokpzJ2UjxMYfoqH8LzRDAPCrhhgSUeaNRXkSKAi8v5ADox",
  "key17": "2uRvwEq4EeGSGBVJCo1oq2P1h6fNVLod9RrRMA8Mzg1ibzdVwugjTF8hstzKx2BR6R3iMcpoNAkjXUcVrdY5ZDyS",
  "key18": "2HickPkmedaKgbWHhAYj3rJKJ6pBgsm9rWeb7BccA5DKU2THyZPHMhTVqjjKRfXMbec8kfqJ9U6BaiFmpZtQDFA8",
  "key19": "eXkh8KsXuKX4LxuMW91caDfEGrLAQFc93y5oF4sV1nXGZ4HoHsSjiR2hJ7GBeSNq5b7kJU8CXejnZ6JZW9JdJUe",
  "key20": "2r3cHRGn8UDRMVKnAgkpw81JeHhPownXA4nmu4mZ43kgyYi6GffmwhA35HYQibJLgDXEAzw1fVn4m97fFDTFWYJN",
  "key21": "584NEMQoLd7w3CMmXvhcjcmf8XkuoveYfeyir5jMaRto6CtaAmNZqtJ62Y25RrAguE9HqKHGYaT9VLgfrrov1787",
  "key22": "4j2mqnT2wimcPrTe5VUWCjrxZSDSUUMQ5uUfBw8EZSg8XRbkWGtDsLMNHsU8RPLw4EFM1nrSXVB93XTt2C71KaC7",
  "key23": "5JbcrD8R4mqfswXM8SjvKfg9wJxsLwzqSJLnEP83sdixvVceYfa8jMwBqdLis5pD7yLJQ7G4FR5gCNmvxG82YVmZ",
  "key24": "2ZvYhS3hHgHRKRK6ApVTWdKYVFbTzCCoSxfovGUx8Ji8brayhFJidw5cStBaW1F6aLUY53F6ZRBmzYEyHmjKmujz",
  "key25": "5S5TZ2JC3FhktiG7Ex4PoY9a2tYgDHF3xfoYWqCuQhiRA2izjPusLUHbvTeiZXAgaL6FSYdCUnA9CcmmiUv32pVx",
  "key26": "2Ce8Feg6okoDX5FHBhHZ7vL5AnpgCWmxDsjiFQZU9bNjCwy5ue3JawRN3GYDyBQqAysxddqnCVznuJB8RiCykLUx",
  "key27": "576rzko4L97dWKgPKeM7642EYkoajztqxnKqZBDAiQnmvgg6KpnhPybJe5WrNgC5Bb9rg5ChfRF1XbZvJ49BgzNx",
  "key28": "46BUAWsdpZKHP553qWxHy1yrgx8mjyx3RA37AzmYZagjKiJZwZuQDWAfok6qtdNkUuEWH4fsR5QuMFb1F827XXNo",
  "key29": "4NU2BCFbAd19KikYxtcEqRVJ8mt63jrdr7RdtP6fGkKkNw1cML94ohcfeYe1iYL2uh34G1NnCDLySFUSWCq4rrCu",
  "key30": "cHN7QCszYiS56ypKBhCZe6ZFtedzRAQw5NK9zQZf7KpnqPgbDdZUE6C7qntjqvosv8w3pFjntbHquF6ZRRTnVPr",
  "key31": "5Bzi4TVyiV2F4GR83aBKJKEDuszdXdTk12AMNDYKmcuhmP2tHiw6QrojJ3YWzqrEnh2XMmJDNkBQT7hVMeA6yoTN",
  "key32": "5C8q7BvaTuTaiGJMzLhgRAb8a2UU9psDL4LkxrNEQCydxxrb5ASQJvCD3hL8aSvKxnShtHiGZsaqRqJfujTKZVHN",
  "key33": "A2HjUmun9JA6Ne8U67mHyLtr9uCbaK6WJEbFkty7r1CV6tz8tGuwJBMSjZtDJ4KjeQyAUGo2iuBkP31UZXtnnaK",
  "key34": "5P1WjsWQ8eWf1SibgXMfYxPQR7LTmDFVkLoZb4mHeNm3zxLpG6s5XWG1HYQHJYmZkt7gxTHu43cnEreRZHpXD3YA",
  "key35": "TSqTvrniNkobQw8rNdrnvXi62KBJneRbzwj15VxfPE7bUcwbEtK2TJ1jegvTXAoQNhdvzEfKEiJurA78UfUZmrH",
  "key36": "63amR51RqHtZ9qTiqpyBVVh4A9KbykZ3nrc5YHEZzHVsv41q7BSV2xAkdWMqRLeR75KgFUojhsfPbUB1rh9mJHfK",
  "key37": "2ehDaEoixP8cKAR9YiPGQmrrqfiMgAvjHuVz52J5Adj9KzGKZCfNi3ypsaEjEra3MZpCpx9mdZ3LyNU1ZXiZzqKz",
  "key38": "2kLh2f4LZSz2GGQDbrfAtr797MxufvcroEjXDnT3yqQh2danvFk2JBj5Fuvsi5eeRWCTqpyGeVpSPWmosyX1j6f9",
  "key39": "gLaq6SbruuZ4Zndsic5MnnmhefHfMVzUwmvrFoLQAwUeNCDApgc1bZuX1y3RUwXzU4ms1URbanwN1DJvevVghgv",
  "key40": "2eXgw8W598793ZZmxp17TQ4yybnPuaDKsAqgPnKDuSmVBC4uzQM9fEXPEJxDXpJw4Svh8wz6t5ceY5W54j19L3HK"
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
