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
    "2wbNKdbc4xwioCpvpfM1Y4QJ5C4qmDHHTzUsBzMqourNGusQd6PEdYB2g3sC7thEPhzqMN9g16EZWc4wGgdej6mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wQWre2XL5yHXKB8mmNXpgY3qbTAVcS7ZxNYhy8ZZ5EcTx1ScRFdP98MHzHjRGRYc2fhHtefo2Jud7SkdVXmxYq",
  "key1": "4gE1ajVTTDQvYWbHxyL22z16iCZocvKQooNcq9VmNwqCj5kvDQqp4QBCqiCZhiEnJuWYrcUMVJm1ga1uZYNmvMMU",
  "key2": "2zi755CiFL33Qw53AXch8kScCLi9QYUt3NyssL3eGfMtXnPKSxHkxTuQzB6VUkWBsf947W3MgmH1eyfA5VkGpApC",
  "key3": "XxXz23zanvb3D4e5ux9y61tCum6kCNokdndT8bBLy4HtVYAHfMsUmzfgZVvi9s1yseNPBLumKJ8wLD1uCyKJztE",
  "key4": "5j5bkn5XAv4fWPpQYpFYQGeK24LydUq2PsNnVHC74FcnoZHQoadXPzuTc9DNyffvaacLsyVoy4rUPVsxVv3rSsgd",
  "key5": "5bUgLiBNbnhEJ7D5kWwn6Y2EwYcWtMyPo66MRQeNcuP1TtCDokjaz4F89wnWLoW5Ar1A1PT5ZiaB13vHRLcqi4mf",
  "key6": "wrHuNvafJCxid1DvtSZchRJ72y3HbcdsBaKigj1vgVqbKNSBC4b7SSrVXA3J9wkpm7uoAYHF3v6xMQvV1uCFYk2",
  "key7": "XvMWjTLSPFC7URKeemyNpEStigf8m5KtLz1uXXUAz2kBcwMR6rQiEFYuEim8apj4BNNZA5MUZeaehaDH1MTF2vv",
  "key8": "2Rt9dDHLtp5PXB8omb8MfLPKVZTm1EUoFHCZDUTYZERqKMySTQgrqFb4r9pNFLKtTHAfmUFMHFzUt2Y2Msuz7UZM",
  "key9": "46em158M5cxiKdwQcDyWTv1m3JWr5tyvFn5ScHXKpJbQpwvNGCgpxSUiFqgAoKnmtuvDJX9NRc9iKYimZLCBchQ2",
  "key10": "2fKt2Mg91HenW6mATnyXjMGxJgm1xsQg2jqUfhckf4AXmpP8b4v4WNtPCizS8m1PwgVzNdmzuzNSpaqKjBe1jTsz",
  "key11": "3n3ZSxyLbhijW8pNiqeKqhpSuKkSi7pSvweGtiqG5HyZRQiX2MxFPqE5Rkx1ZQmfmH7oynorQgAVAVJsW58fbXLU",
  "key12": "Utq319M3nPGGUgp5VcwxXoS8Z5qzKqfRPdT9kggPLrsayyAs9Tu3RUFu7GWvMDx5dchxzeTpBZXPPatsWt8mqPj",
  "key13": "2qyJC6Yqw3Tj2enpc5FeJNMBphK5g3eJJ5xHN9mEAvCfwSjsusYRpCYGUjAG2cE6LTzVqfYCvmjZSJz4sEBPcqS4",
  "key14": "592C7kP8pBc52y9LMARqFgMDhY6B5boPb3QSfnoA4kkN5L45Lhabj3seihawh3k4K2vb1vUsPycb5nY4Cf8EPyh2",
  "key15": "4JoEQq2GoMqPR24aYGuqcGxXWFEH9FLZTvqnpA3EsL5eGyJCSjMQA97JFnLhZN6pBYb6AFW9p7xsb26hZf5F2bdL",
  "key16": "2VQkTKhgPd8R4PicjZgbo8Jpxm9ryciKUKAv5x4fxVcsPvErjm8omPyNawtYw2mkNpgk3gz8zf3N9xFduQoXG8cZ",
  "key17": "3WEoF5bSDvx9ZBaCNhK7YgBHpfQaCbMv4iZDqBMvkGF3oCLiNypBhj6KzXxu3r8Bv9r35vXoPFD5BngfBUxFdHzu",
  "key18": "35LsmopaEb4sNcFnWt7cuaenyo234q14rcipUNtV8ZFK4EghunSxWzbxDLmdwKZQr7aeKgWAmNPE3A2ZaSJXrPWG",
  "key19": "23L64eC4YfzNafJr1WpCuViRwo3P7m8MRuwkGtR1f8CzFtDbQBJEHEkT8EUpiA5b446VM19rzEpUWJKfSFzDcYxZ",
  "key20": "24K5Lpqy2ME5YaWmHsrTwF7tvUWQgp5YwkMpX8JowoYETNV6jT4QZAYy4aK59MbgaKWT2VtYuyLDeJKyTUzSb85d",
  "key21": "yRVM9h7GbKEabJyx6znux728H7KmejwKcHxuSbff96WD6Z31eYC6m5kiBrknaViUkPij6999EfBRDHczsJgm2jH",
  "key22": "4NFpuQuNqpqP7KEQByQYAk7gMPecPbNZ7GWb49M2uAx2j7aochTWy5S2nAt35oNxgChjTw7FmjKEeSM3C6vYh663",
  "key23": "cfyUBzQQo1gLkNg2Dz4fA13bpeSykgQaNtyqQyZzrQSFAEadNwLyAL9Pm2SkboCMXf6oSN4ituJNqNLcJEEfxiQ",
  "key24": "4w4prKS84JFvHf3fsoAt4ktUrxuu4EK8EUnEXTAs2KAGzhTZuW9UKnTehUPhFGWnaYnNV9JFzHn2pfEkRgq1RXoX",
  "key25": "ZgUnMtr8DNvT6YtB9rrQ6tFZSRJLcaeKmVmaMP6gCzDpFh8ApZZQHW7x6boBzngJP78rRA7wpTMmwjPQ1hqtAu7",
  "key26": "2Vns7qET2H3DswYpiwsrtnsE4cRSbFW17XS6kbH4GqVQCSAN8FcKPUkZmL5WuuQGW1moLA1Q4DooeSc5Ar9Z7Ty3",
  "key27": "5HQrmBhoQfQFHbYrwn7p1TgwofnYoUYx8k8v58ZCbMbeZvj9o6d9TgR8LybUJynkChprKvBQj5aan9yC8nSKiEm",
  "key28": "2iHQMJKtwA1BoUs7wscunEiKzvrVSE34cWK9NMeXTffvtmoHT8FQ7sEh7ksiiJzhX2nKBMA7VwE6qAvFfkPjJ3Nx",
  "key29": "3JkU5XLfA8hhVdzymysQ7Sj9DngRFWh4SDsmuVhS9xMss88HPuzQFQ8RXtKNDybWyRD2nZ2CXBbbfAhAPqj9jdn6",
  "key30": "2af7KEJNHiBL6Sbx75RPqBEJGNAb5xsV9FLb66KmD6YJ4mHmsKHuATvSvvy6rNmvLYL3Kq1oXhnnEfPsCDYqYBZJ",
  "key31": "Mxz92q3X8jv6jQi873QnGMuCNNA6qJWzo5A2qPDyHYwM45eV2EWQ4Z2MXZJWYe7Gh846kTDLsPcjjCQUpTvSchV",
  "key32": "KJYDWjEyKjRD9XsSar6uN2aEJ6L2JbT2LVJo3B3DLvsLpzDUbPy4yx6WmS7swo4X3ADVaLCZFmPCtJUWmAzMtV9",
  "key33": "4nvtKNuqgtC9RzKgNpbWyeg4gBsMfPbeMX62xXK4czug13d8AVqCkFyXd4AXx3qhABjuakTiqeYXSsJqqgtBYgAA",
  "key34": "5jveHCQ6XugDa17oazFh73U7dpxbNGL3bJheSBDtCJUEa9MoLUTTM8chhFdN1gB8vYpxfTZ3zs9DnuXRMSiaDHsb"
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
