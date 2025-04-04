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
    "5JehDvQhP4GFNVekheGZBRSdeygNDoKjmHW42ETiv7wQaLJdjErHTzHeJ6CnT5nxAy3eEb8BnU2YjZ6a2MsA85hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d4Bev7j97hnNkdpNxsAaxYLExfVLSWYUqDBBFXVFQc7D6dMX45u8RxrAk8VxhzjJKSpANWUFoZUQKEE2o3Wpwa9",
  "key1": "Jyq7SbsJ1f9RJUhjWQsHZMRQ4MJqUB5h5ncJmENEeDmYj3ts9379fEZE7HPifrWfRHoHDe6KvxRZHr5BgcVnGhB",
  "key2": "4wMQC6JW48XrziSMKqYvWnAWdnAQa5NHeCYeAHjxbWQba5WLTsER2rauq5DdMTUUcj9XitDz8EodL54aVcNvivnL",
  "key3": "fXrKTwgEhsMSNBZaPkjGKivxUVRvNzbmhsE9BjkkXiemRPi4taET8mJCX78Cai8FWRAJ4VF6qfpsDhvVbeBHy6k",
  "key4": "2QMEm65qJAjQb3jUA8gWc4n5vhgRagYy3oTZa3nfcJqH6iJ3NGJ881BKrrwKRred4xEpbu4o7UHK5GDp55vqNXEG",
  "key5": "no1fWhZ7KQEmGZF4VuXbRnwyX7Chkne24Kh2NC9gNUvHpgVSGd1FrTeFUgDHHwGKUvYhq5ySGduhiKo9jTjCSib",
  "key6": "9deerUe11AJHZtMBiotC5hKWrLFveQAzWiULrAC5G8wftuSKAB9sDdj6gg48apNoUCFrKSETFfmvAFe9iXus5Tp",
  "key7": "4ZaForPfGdtVoTXsM8CKTxpRhkPmRyyNo2xggpWtKwFP8NE1RxXkPDJcvCNseV3ke2vuWCdvJxTkJzDEeZPF47P2",
  "key8": "5BkqauY8yAbZA3hXoALnL8feeMNtWVu4iicwLfREZ84n7cNfuJgW5y8qRyBC9vzXt4Y4mxnoXSGVyh1x2HxsKLZE",
  "key9": "3jzDFnc9tLn8LaHASu3uQZ3eAa1YxoXZ32XzApJ21HKdfQFmuBXpNBF2Cj1BKsVtyx397nSbNuYzYDgFV6n6bqAq",
  "key10": "5U4mFuSsYjEB9n6cyHJY7KGHeN4hGFTL3mrs2LYGbfbBmzzDdxmePEGgBLpU1y97EpBH8msCKgmx4vpWi7TXVvLv",
  "key11": "38nWJwHTnYAT7czywHP2iU5DkDSu5EUbfUmYNooW6kUGkgZ2HgbHQQEEPF6WnyX6iPJ3REZwaKVJKDr3uQAMrR1N",
  "key12": "59JwpaKkM1DTTihXQNRvMWfosf12PbfRCPLe1krsojhoCcfqRnTTL3rPEY9Jm4KNKQjitNqzspeQG8gbL3yNSzc3",
  "key13": "A13NBTBAqWSg35LKwkbJxKjBvGe13p4udMAAY4YWuGQaQjoSGPZwDHKNuP5MLjH7Jgfbjs6MQqndLCmphT9jBQA",
  "key14": "3xMmZuZMpXrDZuKmZdzUThmoY5abuJ9r9Yqh1PANGMQC1fnoDYJN4usTZFxRnX1SrDXa3kbZe6rNxUmaXpCpUnf",
  "key15": "2WaeNF5URdyFXRbbiiM6sf2ACqSM85YxUMVbtcfnBeLTn3KHEjqQgy6jSxNcxks1LeM2rQ235eT6KMuAK2pMgGst",
  "key16": "4Hxmo9qHaFRYPbuLQGrNE5WzEcMeRuPL8oGqtmLEgzatNTCwmRhngtkfCQwvu1i8E2NoVwAgs82nkQpmu9xrBf3m",
  "key17": "5FrYStzBQqoJSgByh7jK328CDgrBo3FX6cGGum7sUsdTExxUc1AbBuivVBGxoum3orQz3vkGwiy4uTPYAEsZrP87",
  "key18": "4TEEJ7ympepmd2GbNZFYH5NM22zckaVmeFTcRWNEQGpTLSuPignW2rP69QabprtG3uaLGkEKpz1NHbBuLWxmaYRm",
  "key19": "3Nb7LPhheSAUKKBESSvYx5q9k8XtY7hdu8x71LQcFXcY48DVSu3uC9SxW4Xmu2ASBHfmoy5b2HYPTi55sRT2wkiH",
  "key20": "3g2939GvQayNsUiM4C2GnxibGUbhxG7r5fiU5NpKdPdLUaipCRxTzJgw6JgLAgvPaTAvz5SqRqRpRjDimFr8GS3b",
  "key21": "3JzLKrxTqUr5Ljsy2EDTDbTAwgRCbnzMRUKhiuaebjpHfdtr57T3pnU7xFTdHUf4AmJeoGQZWQecQih1DkPh5M5d",
  "key22": "4nDdP8rnYJbf7tFfaQeTffwanYXApryBVg231Jb91DrBQG9w6MvsBwYNaJcDns59PeX9rt17ER7U3jEvH8KFmrRG",
  "key23": "63YhJV8sWdcWxbE5fBLgoCC97Snh5146dwbA7WCdrm1YzFs9z2maFEHvmwGdtr3LMMzLTbCCvrXkh48ZcyChnaQy",
  "key24": "2NbssSPw4xjzbUR3PySGyTjq6HUq9LEJFocZWPxcASezqqD4DQJk1LFMgb16Behqo79WNCbxdvkxJGxAZYmEBT5J"
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
