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
    "2h1o4Jonz9skwDLMvbgDnGKfynw4vqFtuP9UzA7ZZFUBih3sziYi4LcsJBKY7E5zJqnASHkkGdYtND1Y16KQdByx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sEb7uDQgdtV9JEzFFBt7WvgvrrWmoJ8B4cn2NUZAitqW37Yf6Sf3AZmV4Dnv71V5ecVurUogctFzNB88HCdYYb",
  "key1": "372oRsLh1ALTFaXPm8rhBNHxCUN93UhfQJn4KyAkkvGosiuhFCArjuQQodnSo8KNjLWn3qceBYvxBvQuHQPBCMho",
  "key2": "5JpgZZyCHVWDwSkMkpn6YTLPMwZYbopQa5jGF2PAta5FvRcrGzM2QdBaLBbz55uF5zJxDt1DaFX4bTX8dMWXXnWb",
  "key3": "3hFCdoZyErYpsRkRo6faQ8LCxPEdVKVto1hRg171fwviVCAhXbJEzSnPgRAis1Pf97f5pt5HhMHhVj8WU14JthAn",
  "key4": "59QU8HNKGx6MNwqUE7HgPYJ4vFdKqkMk1FhHVnumyqG8qcAonDu6Tnvb6s4DYsKLarLmKrsRm4L1zxfAuFSGECzH",
  "key5": "4e2MF9mg2w3HXRX8nui3m4G5Rn4qpZDC5MeT8rpuCAckwQsa9mjYexVHDntd6g2fyve84fAfpbSXE4YCzjbmzhRq",
  "key6": "5HZ92TZTn6ub8yHLqfEW1mFC2iFzr7nq4FAMD1TjCtDEHEmBrY8s4ZRcDtMin2ZQpKYtqLQ8HCuhUfLgFjTKNsLs",
  "key7": "4qe9zSMCK8DF8oyLNAcx8LwwuFaE198nQFtjpGFnTVQ61veXKgDMRtUjG8AP3GDwL5HtNwJNmU9YsNLnAYzrCYgk",
  "key8": "5e9eZVkGtmomMRvoTkiwAerKJZvyd16ZerbKsuta35YZeWb3rGng9kcZcNkJewqMetRMe3WY9jMJhAKNS94s9cLM",
  "key9": "2fyzEQk1n8PmwsdMRzx62Q1yroqWKuVAjSboE6swg9GrCzqtmHJg8c4yrbPFrAn8zwRkukDMKBS67Dagqv3AajBU",
  "key10": "62gdB5LEYMhD5WdEhGu5Fz74ZUQrYLT9AtzLubLNhTbyqzH23eBteaXp3kzF3c9PfFpDieFbnVjv3W9sqUw6Xwz5",
  "key11": "4kLX6BC1Ga3Sis4u2qBuyYHiwUFVWp2PEm4jhQb3AKa29XDBFZCYSfgrH9JdBw5nBKRBtwoCrMHhLABRPrbzMBKB",
  "key12": "4u3V78fJYMwMnWm6GND9yZ7g9ywTEQyd3ow3pUBvuzzRqhF3K4EGVWob4YobCa2A7KCS9CaNPrvp9aPSzZuEvxdb",
  "key13": "4PD8mSzd9bqSp11eYHPisxtbSQoqqBVJcB4YsgXRXkwCHoq5JC7K3ty7J4Qk6wGMVuWNdUAg5E7Cg85FH8HUwSFo",
  "key14": "5eYCFMUJQNT2y3wXki7iijGN6u7AF1DJEhHA1or6nPKgavtkQf9RrBVFuntv1fgZthQ9SGsxMnayMr8B5YYV8HeX",
  "key15": "5Mdnu1vJcybWR89wFN9wjSeRMtohfCmsh1NMotR5tcnArofKXRCfpWv3V7mJgUKPf3VTvNpxdScJmAFYy7nvWLjk",
  "key16": "2Kwqim2NnWhPaVLt86r7V8qVMEfwEychZrpBathGjgkkGAKSExDVtzwtJyTq2FW5PLht8TDmbfw9RNbMMzEoMBH2",
  "key17": "23KSjSXLif9JkNSMo7Qc9MMfREzKnntXGzojKczMmvxmEWvpdA3zYupgJB3iAGg5j82PDARwiwcGFqPvTWF1774L",
  "key18": "2RCc22pDFb7tJ7JFq963z5rQBmLqJDJxaSazhxgcFeJctewa4aPCn4PqyCjvCQW7BbeX1YY3aYRpiDSwgWf7mNva",
  "key19": "MKM7FGwViGmX6UKeLLG9UTeEC3WnYbTsuGwMfUpQUyPR1GHKU3wffs2AxKecmysQ5wa7jxRRY1TsoLaoweWXZ4n",
  "key20": "4Met88GKgQZC29kbTiHGtuQ5Ju4UEmLz2VdYTEzeUoenWqu3SW3WHq49tBxw7Ap3ntjPgWq6MwT18XZnCc4MKapH",
  "key21": "2q2Bi7Xcjg73jdh7HujH8PrFQ9u8JvJ4G2XGRLEiUWUL7nBV3EN6fbRMGkybBKNvtkVX735fnRB7tM7fcPYW8zKQ",
  "key22": "2oqDZqWm3Tju6KU2xjHwpeaN5wsE7NckgeM7qv5DcxpryUnqVdNF3PR61zEB4KBbFR4qeBp2p2cYVfLaRkQyG7gB",
  "key23": "4ZMJTDDRv5iC1hLihqZLrxaQERBfTc3rz9rdSdHERUT5NDaTmGUjsYKjc9HPo4jxXgrNwpRrqEwJsujYtsirmEU3",
  "key24": "5rfkuNi1AbEjhyWmG7bPpxSJu7FnyzqfSSj5ka1jXUbKagr9nLRKJ2zPCsLQgWMZjjHTm1dpsoJrDaa6Bm7ghyc9",
  "key25": "4qheyjcjcpfzcLxsMpjL3tqVR1AtsDtRATVjGdxeNatPQL6UALoS95QcxJfn4N6L6nWkU2xtscmprtwWdM6mo7xZ",
  "key26": "3P9PQkFJGpm283QVPXk2fAMQngQRjLRktsUE6Sawm4wfdXXJbovhQ41MZLGygYifHEVD2b6HZzgMjwMj5hs1HXZd",
  "key27": "aVPCLGgJVr6BbHwCkQGcS5CvQD3T4SMouFCQTATdHwAKTJrLNP47GEDBop3jS86WWwNV8yV1es35kNBriECPc1Q",
  "key28": "3PgEEasoaYQ73zBFxE4FBgxa3GmVXYvYpF2Bas5HuZGRv57Lrkyc7x5ng4kxUE37MSBFzifRrxZp3G3znAmFjnpK",
  "key29": "4vjrfYPH4oKC73tgHTnY3mWq62XzjXtmawp1kmcu7XR9czRnFnBpgm8U46ffk2NzoQscMFKMLqmR6TQHpmyikhdj",
  "key30": "3ZmFnhG2s7iHv9acQtLnGzfwg6pGBit23EsNwHV9dUmQRH7fpEbG3isDHKD3RhPLuMdhLiNvfysmkgHFypu97BLK",
  "key31": "2aeaVWgsHnvoum26c8XNupoHBEgJ8Ft4vXLjauSEEoTrbvj4rELhQwTPhPnBEM8VZKE32zCF5BH1UH4rM2HxBBf5",
  "key32": "2RLYWM7KQUSGqLiVQdMz4wYePu9ivot8s8Qu2Lmd9zVw4aV5FswkHT1FchmFbNr3bHqLA2yMKfssVvSsssLb21dC",
  "key33": "JnZVUfWZrYyvayqp6zy96jHNkR5xCorhRVvAhLzi4KiXhCzzjMZT17mmfiu8sJkfMPkqpjtgHRZ5UkT5ghMQPDe",
  "key34": "43xBBgSBj3yG3TJPpNrTyxnhPurfgubJjbABGfexvSn3zvQP3TYrShtj1fVSujaaEAwU6bJpgUHh35cxWoSwxFqL",
  "key35": "3qkg3f3Qu6Q3mvVNGTr7bpo98cWtsWh9cpnJBaLyvTmHSoiXwD3fHmzsWaUHFtMUzfLkx5oPPjbvXAXZp9W2wo4T",
  "key36": "3nX44aeUgPEhGBXcUHs6ckiTGurTAKury9TBuvnPpEj4rycV2XTPJT6Fvzkms69Be8w3i8EVFLbv8mJHhQnw4SwD",
  "key37": "4A4wz46phzUTcdNBPd92xxkRZ4xZc9mkPZkB4ghzKNjFm8QZQzLkugGGM7ghY12mC2bCoBgfYCoJSFC34yima3Tr",
  "key38": "67cZS8JSercJdAtwQ8uk3HqYfViWbbFxnEHGvJAihyvQpQKANtd6WoEoX8eGdc2qF7ddMgYQaKDQu98MpkPqTj9W",
  "key39": "3yGwLr1GgZnZ2Z4LeTvXvopoYjqeU5eWz6cHsfyH7AkyeBfD8MMCkxjcsmac17qb6g8yzPpex9ejZZyqGVidMEER",
  "key40": "2pBZxnnSCJU2oEhyWcBAQe9u2eZKZC4R7EYU7dJULoCy675Ajt57nL33YTM1Kkeme7BYGYroNQu3EQWGuB8g55jE",
  "key41": "3sk7hG4F8Qa2g5BtUdio2bvVNNC5PFYzsSguUoyPtKtg5ZVr8dvqmXtphLsjkxGESaUpsrRzjLRv27E4NuS3bV9f",
  "key42": "4JU2sDtmJih2xCzGBnY5xTqRC54152iN5WPH9eAPdx8cAnFhmME8kaYqCPA5PBBb7NeWFuPzS81To3PhjT6FtxDg",
  "key43": "5saYTxCHyFdh5szNtjkbgcDbMWdbxwRhFZBysdPhKW8Dtn2ZqQPKYJ2ctBJdLhF6N7HM7JVxHbGE8Sdf21jyMAaY",
  "key44": "2YhBu5KKzPB9AMurcVEy6z6onnbsPVVPrQyQWd2Vh2fMQdYtLoPNyLr61YxF4iBssJhayfS4gDvhMF4awodYqetX",
  "key45": "3vCPpboHzzHyPBi6B12f2e4U9hD6sby4NcmENVLPUpN5c6Ym7N7rq4NeowEiFnAFLRLqu7gojDdXk1B5Z76zsLoS",
  "key46": "36JiPGGsEJJVxz2STxxAagUH9PgdSQUpViRUjHrWNhQ7cdvFzzJrhkZ334mQkTaZF3KPAHok5UYCx33pK8ihPrky",
  "key47": "3okbRDWUozmiE44AkNeZVm21ScfMnmAQT9MGiq7Qjt5G4qJS6PAb3USy5X2AjEfa9wauBuEn8sFj1gTKTLocDTDX"
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
