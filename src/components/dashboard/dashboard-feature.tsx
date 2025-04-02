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
    "ZhC4yTCHzJAb4crj798KHBMrjA85CbKAHJQhLQhXtghy21EqsgLFWsbbPG4k7waHdNHLuDr9k9Gh6SMkhvh9q1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RMhma2nukqdKyNKUH5HrpG187pRLUYwndCdfKfFsuTXQVdpfa25TwCboTJ5dzmskgVyDh4SfWwD7CMx77GEXnC",
  "key1": "4i78zaf4SoZbEWZBJ5tM9xfmda3ZwpUWtfQyZpfePuxNkcMBXLM7uy2P7xWgkp5JjXDK3ivTuez3ekwhUYR1PcEw",
  "key2": "YAsszJattoCK5WXqYgeaCvah9LmhTsGJsYtAo2xWueVcLvBGtFHg1cP7siUHryivsXsypqyjXzBqUHSWA3Jk1dh",
  "key3": "5FyabfUEMN37waugDwnG4MjKgtdm4fB8M7ZWgTre91R8ofkoNv9bUt91c6X2Q25sYGySV64NENtARSt71eSve6rY",
  "key4": "ncArkTU5xQD8hYg2VxeBTQqg3gHLcopnf94qSkeJJf6HRas2iLfJb1y7N5wTzTgwY5AezqKVnHomhQfko6NCVNQ",
  "key5": "2pcSGocL2Tnfd5KupjvrkBTthmpndsSQef9rDJAth3sTg8T5qz5fqkZYspcNKb9nAhtZqabfGxmvWkbiTfMHRuTt",
  "key6": "5RMKzWTaRU9D55DQxvFrqwBn8LHRXd2kGgmsTLPmF21yEhuJhCkGo68UhmRGPhqPjS4X9tqGfApae8bKs2U6WnHi",
  "key7": "4knY2rYDo1z1QjZeVFfci5tgabCE8wq7jHcaGVc27C9DQUZ6QYA5SwNYkyEuMubT2gbKD5EdiW1JYgHif2kKW4bU",
  "key8": "4BsLswNid9nSrTY1snetTKW26zR45XRSmSGbeitsZQeVvMox5nqASdADnT38KgXLiwGMhUN4q98e6YBkeRPodSRE",
  "key9": "46bNvG3rWEnuCL4k4ecBbLsuRGfnA4mjPETxfhYLzcUQEs6gHNd19M8zTnzCbCgb8x3TRqB2a7uA8sAmMDszPHZA",
  "key10": "4LNZWYm5zWAV5nEYYJvk7pm1gThQdMMgwZHiwLwX1ufpYuxmpPSa6ZeALnbRu7ooampmL7Ywn8qaDnZoj1a7ACHy",
  "key11": "2VuWBXo41b2hqgyps6E3UbnBDkiH65xnzKLSGnn2bFBHhbWAPr1a2AyD3DB7M2TfgsAUoPaTyuoxtGVai1ekVwpg",
  "key12": "2AKKry3JFK4EpLjej9qV9y9apsPoo92c4S87ai5tGgMXhNki5maP97mAcne8bv7GSiXR2SZ9j8v61M3Jh7SACSMF",
  "key13": "38n6GrdGattASw4zKdQdhK9VpgQ2LsZ8rdpggCmQThSUejBWx7Nt7FCMQmtWvF6aGmaUwPD3DMhnXyVMcms4uncg",
  "key14": "248i2UFJgMUGNTZU2JseVx484bRUHUNPYyQwz2KY92aemiMcZ7DXUGh3SBpxn1zz7vsky9wtEyfyTLeDZv7B9iCr",
  "key15": "4RZrRKNbtVDQPGSC1ZNbCTR5cCmMFLFRXQLJYiC6vC1njTQNjoHPVvrnCVXZiCSEYxJcSRemRhwdRvJh6PVcxio1",
  "key16": "5tFCAnWYARrqg3Qz7qQ7yocjMSe2eGkrSN42S8CpYjzv2G4rr9rBgEU8BXRBX54oHYzi12CZ1LQeZ5botyvXnxdw",
  "key17": "3WXAA5ouhxmN6Z1Bw5KUCM3qkc2Ymt6hh1mWU5GbmwUp8S7sP9zGAyisEYMnGLgZ7wbjUmEXGpRGxhagV7LL5jkb",
  "key18": "w9qMo1J9saZuYkK6YENVXrVQ4KdbH8VPckHNS8rHKEBR47SAuF7JUv8FxSN9vijt6FpYF3UDnFc8P5s6EcSf2iM",
  "key19": "427NGa5WU4H9WWGi9k5xi3rZBeTw9gS8GM9eMg76tut8Zh9PEo3VEW7CeX3HwdRBq4ugpVwEs4LGLvmi41dC69ra",
  "key20": "2fE5vXMkovoGpujwLHCNZs2EfQAXnYzvuaBhd36nGSDivDrQtsoVws1mUXrmertRtRhdV3RNDPgAByJP9ycAP1eb",
  "key21": "UcYVwFpoQJzPHm8mptk6a3eoJUSkEUreBioUup68xzp2U3VD48sU1hw7gwGMsm1o6qvfHz2CGkF3ytQUkXv9xPZ",
  "key22": "22kKZLs5XQp4Gx9pX3mMm8CEi28fmXZLUPoWBQVj8zDqZtTkQNKcwmgs8tYAQQtjERNP2NWYBwJhh8svkAKkVx4z",
  "key23": "5RWq3ZnLB8PE7LEhMYkpAd3DA6c38HjDBekaNBA37VEcKomy3cvFHyo67HE9ogmqScLTvVTnkfUpU6HGsQKPCCk6",
  "key24": "5e3ZAidER8tf5qcsVauQZnbwBNNH5sJArBaGeZjdt84urbcr3meB1KqwghdWxHUeJ8AaJkbkfhQtR8uA1RUYutmJ",
  "key25": "466FAo1sWkqWnSPEiuSJ2MEqVNcfnpvrSZ3ipRfDRv7LkLMcie44jJz3AuEMFftnSomc8pDha5tVP5kVKhdwX6eX",
  "key26": "58MW1t82C46WPPK6zerzDunviYRPKLKixoRX4eQzijF7jgLz497tL94iFB6qu13ChjNn1n9KJPPi1SuVNnWq9crp",
  "key27": "fcuZV2HqX6GQydgr7xEiHsn3L3X5WLUHEoa8JnLMLAtCw8qxXE6EzQTWDTs4qCCuLRLAgLhDkk6SELoHKvD4TAm",
  "key28": "dd7SnzWUdmBBTV2kffy7HzLBCGvUjagH4w4KTih5L6qRFm8437D3Z3FiR4rHFaKS8E5VFmSNkw1DUy5irt94pDd",
  "key29": "4D7LTmZ25v3UU4zKcVE4y4KMEEFEbmZoPMzKoRwHmyAHhmUGKvjvx7KztrWDbEN8e1qH8R9Vx3JADubQL9TABgew",
  "key30": "2Ycku7poWgnL38ubXtchH4ntu7wSzM5ZgmRiPk44BAbxKKxDiuCmG5oLSDiWujA2jtBQ8N7jLruDA1oZn9HWGAin",
  "key31": "3drXLjqmdqxW9QUZUWDoKMqH6idptzrdGRLNHKUNCKHML9VLrS2QNorWf3BasfcQLQJvAgKixWWAke2i6y3v1ie2",
  "key32": "48KSpZ89gDjzXEq8Dbk5dUKrcmQmbfib7cAy8F1eSUnjE5Vm7FBEVLfkMndYazqUM53ShoWuLzUx3Ebo1531BScj",
  "key33": "2LjmCWV5uHdHP3a1dKw9oyYtruu64cf9Uu86cMLzqszYmj5nSp4mdV4dPqAxU5KZw8aXwxZCtTNhZqX5LMQUixwG",
  "key34": "2abqDNUtHcBQuvkvKwBtMCfdS2KnnQHm6UZViKGgXi7SFStUYTZxFoB6rVhkxrikDDmongvnQ2ydS2LdD2s5cYiA",
  "key35": "4MqP8UAmyevpeeYonjCMn9kYUsjD6qUkta9rbTYCvFZ8HyuGgtmoFuE9DTrsGvcq5pf7nNec69FLHZFZQEep4ncG",
  "key36": "3RcGz96j2gC1mqyNdV9pvNUVb5hS2quKayQBbN24W2KNyEjWKT2yExruSVmtqh6EpUbEvGJH8NUt4VFGcXNfgchy"
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
