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
    "64bcuAC9HEkzxgbDREKAWAQadDxTHQe9cwkmsXTX8hPbQBRGb4NTs2WiQEbr5UFCyta66ZwuDywQNSKs5dT1bxY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X8j53HKfWMH5q8yz9dPkRRnFeDvQ2nbFgTA4yoteS3Qmsu9JWPNMJoyQeBkL3En4EUnVMV5tUnE1e9H3tNWHgHx",
  "key1": "447QK4L43fac46ANRKeESBsoLuwGbFLwPU8uJXsA1Eag7tiBMiY8McNLHvud7finPmgY15agwpFi8zxbyZJ6qpH1",
  "key2": "3xq66PjRaewgM1qY1EzzFRFGCpmjyrgoBAoVnXZvBqN8aBTgAvvRzaQgZbGiTqZwPEKt1NW3i48ZAA3eLyLj9MUs",
  "key3": "VWK81pdqyLTgQr2ynratCMJ4tFWfkzpCcD5T3MkQi7QAj5pKAU3avFvq3jCj7Tb58kF48HsvHrTuNeWMSepjyem",
  "key4": "32sWz6vWtVUMDRYVzF6m2o4TJrQv2Fa564HLhKTb8F89Awp2cNMfmzEgwB5D11rs26DUbKnRbwVdcjjE1cum8wgY",
  "key5": "4c1a6QBAm8bhDn6vb3UrBwN3XE72NZN7A7s5qy9sAH456xFKVufGpekDReShKWzxbhTD66mNY4S1jqgJLFZoVRHc",
  "key6": "j5UkXQBcyx8ZUxbvMJfe3UB4JPEr9Z2WKw7EKm8MAVhwVzhgmpL9wbNSnD5763LYfG5HCYDy26cbZ9M2tB113xe",
  "key7": "o7F3yre1mQ8mFjVk6nbAsHEnN5x3Gpdddqzadew4xCyu7XftKVSckaV4XUhNZukCkKDovPCtgFTxwJzvHMrAeZ9",
  "key8": "3j9TeyNTo7zq3CPCENFyP7ExruRComGXqc2QF19ARPviuEgrawNjVBgdu4nmdaYTBzZW31ejkH6mHQuQtRZyNFqE",
  "key9": "4dgvvsJeeqaazk8hVZcmsYhXmqQeMNFkxSEPYd91JJ5aFrMRqvoN3k1Fad8PFYaakKXTsvtbw5LNdQ8ZS95j2FGv",
  "key10": "4peX4HBzMPGLZSsGWBdez2ViSQ3GrvuekmFqBtToF87ffk41MMuer8agni2wgsYwhvW1iE3zQhH3tCnhFEw54dwD",
  "key11": "3BCoJVCrFoJBWFHdkQFRi24F2BhcPiToRjFjC5mXTkx28ot1QPag4Q9DJSW8d4KdzBuGBBkh6PVw4QDo8ByPLFUo",
  "key12": "2wQHfF5eujknfNNSJdMai7Mj7S2b1aYnMSLxrsFUSvNhwmqeMyA4xqZwK9LTtrFXeiUCtGH8AJ2GnDFcamrzDTdP",
  "key13": "5mis32svH4c1Lz15FpWXV7Ti4Q2CxHMzSuLyPXUYHbBzuPgWAgTJBPztS6Va7XX7kE6gXzE5G7YMPo1sNS4GDEpz",
  "key14": "D6XLhNNA6VP3T4ybXXS7zGjzdVTcTGQNgTZWgLF2gXQ7jH4GwzbWZuiN1CMfVkxwCvwwV5fnF3z9S2H1hvMK1Vb",
  "key15": "45EEu9i3gGWx8dfNg5K2bQV356y7oZ1u9nPbvFuXJ64gQUL1qkYH6M9zxraUom7DZVfKbKZLQPhTRgw9yRcvW3ti",
  "key16": "3MTA4u8TyYN9sUrRUjPUmmk9JmRFmso3t3wzuRUBCpjBbhaAtJLPeHk94ewjPwuBQs3UwFL7gEkbRrDFeDqVm2o9",
  "key17": "4qh914edh1yeHMcviLgADadV33sosd7WjM8e9xvfDtgXK1S4sMEDx76JEnaBxVPiZEsNGG9L7RcHxhyXpuACSPAo",
  "key18": "22LaZ8NhAHQYYNs24sWoM8FFckLu2Eui1hDB75c4j3WQ2KDXQD1geUW4h2fnZuA56GKi9x3b7RVAcAfgBaExoHU3",
  "key19": "26VvE3a2uU778NPebCzunR5xYmQrQyEoZSLZGFRfM8zUg5yjUKoH4rkVUEMMowM9rnxkB8MPKr8SpUYcfZJS97LD",
  "key20": "4qKnByweXR1pTrkQgGdUpYNNX6ru2NtR6vBiuVKGgFQHqs7aSPHruRbn8x5R9tB2Ys19eiRx23fufrv1Vkpnw9NE",
  "key21": "5spuivLGvsf7vaFgXeP2ohL2gwDbRh842jyr6oGc1gi25iFsY8aNmvkXrKVSCzyL8ZUn9QcknUvz6VViWX5tb2TZ",
  "key22": "4z88iCtAFBFBJvsrxVUR8VsRph6oDdAG9dMMhKmtCHHEon2wRzbAnnQYB9w3XmRTdmqkCUd8iH9fzBtpQDTTKu6T",
  "key23": "5p6YVJJ7z7KVoQk7bpi7rGi33ZDwqCJaaZibzKkd2J1dfegUZ4zfKY4wx3zCzsrF5W8GGCyGHBp8QMuCst95qyG1",
  "key24": "5VCGwLoTwdpk3GNTmVnyS2dem8g6A4RCeww6NBjrfvGxbqk2QbdmJ6wAYNySjBSpKvLRTPTzGNZFg4H2QFgz4bro",
  "key25": "5yJYzwmeQao2LoMHjrgHxx128pFBYLXk4NJ1cKcD1oRZcXbTP9L8wLxgwGLNiA9Emh9LsnJa2BitUuStKwRgHFvT",
  "key26": "4fQ1ZNxArd8ZPEyi1VWaJkUy8rmN5zSrwWQotYD3w9yah4FVPBBVZfivWFX1SFok81ptgu8SSUGKKJafcsGkx45p",
  "key27": "37noirUoEE3yi8xfMtZ88rywDLviLtuufrofGL5ZY9AVK2SCLwd8sC4XDE9qe9a6tYq5HQYxobt4XeeKUQfD8xMs",
  "key28": "2zmbq12pdyEeM4PZPdp52pzXMi2ptTFJVbAhU29kYuMc3ra3hX1UbLkyZk4f76qd9STe2NcQoZA6C6nazVkDB2y7",
  "key29": "3GpTak8AMSdaewyYT2unsHQTWB9pQ3sP2UyQouh3K6NPLhpcTAaEBmcTcC3jVfjxyez7yQjbEz3pUT7gmNFVW88y",
  "key30": "2QDhMUHbb6Y7iLc6aGnUdoKYxwijR5Hsmr7sUAXJspXhArBdwMyuYxZx28h54VARUp5TaDgvBRzeumhGUe16CN8V",
  "key31": "2GqjoXnskTE6mKqVCzRtMDAH74WxuurnUyZ224QuVKJv8Q8QCUL62TpJqJF5Hr3j3EnaCSc3WwDjYER1Jem5Ugf5",
  "key32": "CpGKfbZfRcLAQrRdAfEaoEWAw4GRfXviujWjgN1nbETWXF6EZRBjF9QyiFR6wwgYTz9pWm4FQYBUG5NvY3bB5YC",
  "key33": "4GNqLnkm3S7pCmNfPo4Ec1trZ4f8z1tnGhuPs2xfNC5SgReFUAEJTbnVFs9MJqtWLdUvzpkhTG9EPdbg5nyNuV1u",
  "key34": "3agcEmDrYMkFpjB9sLHPtbeZHvMYE4xanbg8sf4sJ8S9WsbK3mK3x1vaB2K2Ga6j4QT8xd5vxvPwqeUDFdv5p3Xg",
  "key35": "vUA9UrFFjnrwPrm2XpNtMSZtrm6TTphXJuc6gsFZNcSvvPuhap7V9csECn5ELJzqDY7J35RtPKL6Y74xU7vDWSi",
  "key36": "4wt4JqjLfKiHPJnBCmR95SFdbze7critN3dCrbg5NheeyBT23yQFpWV1ie6tBKS3LEgQ7xsDvRqJNRVzbN4kWE6V",
  "key37": "58y9i4yhjQJ3cgBP5WMQnwKw3mkjoahssAk3uC8v8D5kJBsHUozM6PerMXjehAxrRxPtkg5F6aeDkw5jL7PfR4U3",
  "key38": "4DRQMTvefffNHYKxk1gfSx14BZterS2JKd32ToKGxyksc7AgDTP18GvweSnyv2Ybqwp55Cy6t53uBSq8fMY6n2io",
  "key39": "7CzRkQxYtLfLhmYVngNsxNxCHnSKWo71rMKaEnrsP2Ve8zUZnkQMsXbLLdtomNBFX3uGP7XPQnt1RXN33ruVa5a",
  "key40": "5zgCEgQ8se8GJGxmHgx5B8yUfdx5fKp4YfB68PZZHXKKpoU24etp4DotTFk9ej8VSxNqBuiifMTNFTvUtYaCWuQi",
  "key41": "2ess4Uy3nqUgwzUcPyQAtcDQ49qNKU9eFuWYfQUoJu8nz5jbaNfQev8PGDvWk5LWrWyzc8anCFLGxtotXMq6rTAh",
  "key42": "2NXQakt7YkZTX9tjouo5aPdCSWfnPbd9eUEmhMCTTdXcaqERyDq6ecg7YgrC4wX4UtPu4KmXfjwsW5tLBQts7W3t"
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
