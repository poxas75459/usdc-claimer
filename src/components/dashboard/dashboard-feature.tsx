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
    "unw3DvwpdKRd5kLRj1FTka1DQXoySVu4NKLmSAAdgeneErLqTT6UepsTT7PVyiv2CfWH6qtCRr6Xj2HincR6qXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvjj5oBfc1kfwWFKDXsA5X7QY3vhTjgc6RD3PhVizo1B99X2nNWqteTHCnVg2AvWq5FZrJkH6P2L3k2hyFxG6bM",
  "key1": "3Ecdsk7KGamh2FwLk3jE6vewdmJSNMCijnDCyTw6AVjnehsgSpZdykMfAq3pxE1TWTP3fBmeUmvRGiHSRYTKWsPN",
  "key2": "4y59n1ic6qstGLesocnqCgMuimm3EQLSqMpRkXxs7sbvZwhXRuNoS8zXP3xMtQkz4jAD15gekuJcRRHf2FF6zWEY",
  "key3": "2n7BgwxdWtAfDYnnSV8f85isp3XSoMBbtQYBrzCtsRK6XJ2smgUWrS61nXKFWSYAxGbehdQ8x74xuaaGQFCyMS2n",
  "key4": "57SxGeVCBMrY6h6hFN1noDXePESTcuYenMUkbk8VDoXmgSAviU1eZMsK3YxSSVufiDGswBDveoBT7mio7aLQ7rUS",
  "key5": "4ZuGxzNnXSkPS5zRXDZM77ZoKpNeNjsqBrQC45acYJKgowAWUE9LdaNYFtwF665V6rX7Vyi5xv1FANoHhrBoTgxV",
  "key6": "5CtFuSN9FNohugLKN4iXpuc78dqcsCF7zW5x6grSFXnEuZk519Q96vhoQ5xLg8rTJU4VR9Yz3sjv2D2hXQWKJf4o",
  "key7": "3P5DJtmvmpjrqavqnaC5Ubiry6VoX1uwUcTzoZHPzCecbuGcfqaMQabYpQjtjgQGqPi2En2EqmB6qcYMRsy8Xpfs",
  "key8": "2Kz2zGiRMusa2erBy5YisKnKLA9QYdS5V1nAQFPB3BShYWSBwUJvdYER3WJ1eYzA2vsw734U3vD9w8E8MJBiLKdF",
  "key9": "2t1awba6xqd3ZC1cHGXUw8naSV13GdajbbFxTV138pF1t6Ce3hRNprymDcCnoV3m79yGirbZdzFbMQHQ1aaGahcg",
  "key10": "wNp2CB2xUxKVzcXi3urXkzhRZZFaagtGTMS5hKSX6kmB44QS8gvYXJDwQ4hbxBLQCvMdaxvt7MWY4YXn7cf3kTK",
  "key11": "3CaNhj96GPB6jK3EPtHxgygeCnXzkGQ3JSH8Z6NP3BTCfLkLWPYTg4quPqyoRfiMvpPAB2ByZpkKZ9BuTqH7V7Zz",
  "key12": "5HwghU6pELaeun3dsiNLPzPZ3D2PUMNrpmD6yHdEx1fhZAGEGk4xpyeL8HiLgC4GsRFaxYiPsy9TrvrpRSLnb7fH",
  "key13": "5HwZgBm9XRA4F1Vk5ofoeyyHjMCEGjTELCZQgKE6D4HywpUwujyTxgqSEkoKotigC3xsu7vJExdPsdDMpdnREXbA",
  "key14": "2pkP7BypcwXxYWE9wajEuGAdQzmg7m6U9ZDAW1pUJnqmSbFEXVwMAvv8rvrgc9HTEtUvxvV32jDRKmmFNpy74uXc",
  "key15": "5shPyw5wCpEQvrMjebktj8818irsxGCBiMhso2vczcrYSxTjvwchxGCkjXYsxQxk1R2kTuV83q4zn5DqerHMZU8t",
  "key16": "2LxGU2DnrmDJ95GT81mWuzPVuXjSMLoodZXtfHD73SJ5U8ZfixKpYVAM1eENePURiQUPWi9K4Ma8aM4nPaexoeQM",
  "key17": "23kaT169iBLqvQkzeM6vBEsXNX8uaQ7oMLdphEQwFoAebYJxmjJTgLaSUemCap2rSaJdHEz5JoGGMrWFbgYPz8oQ",
  "key18": "62LYrhuWQf5qTBqmzChvGdYVArgG32YsA6SqgJzhAKgoyt639ssv3w3jLiUdRSc4mjPefuLsK7sLM72gTi5km5Dv",
  "key19": "3V4shC3s59Px9pxydzraraizJDvfjVvzLbJtCtW59xEDHTKeheTzM1c9BtZWZLpbQ9M2wy9XiDWNPSpWQH1y6rkk",
  "key20": "55464eH43sJC3w5QtDUEzWjpSRvtkwPM1KMBmR2hsRpX8chBid6ouccRZxVfLCeiAosi2EBpSyPyhareMgJjgvut",
  "key21": "4miMaCd6WbL6fGn2auavHq75pj1PdAn9L8vawLW5157m2dcuSUckWo7mWXgfj9sJJoXbyCssrP5SPnTGQG7k7HyT",
  "key22": "277GnR6DheWpbiq7UeicgssdZzuZujuALdVuVHgCuPPR4biWbu61S6f7SwuNVAyfq9f8Eu7yfKvx7UP12htqxAu4",
  "key23": "4UyL7PoPnvZRw74fewh6rg47ykDGGTx9ukzBgvc3tR3hVYa7PFK5GnCKPsrZhNQMyrBqkDZ5jBrb2KN7rB3ojkXM",
  "key24": "59tpcKAJXRzVtjyayYGrFQ3XNY3pK7mYcMe4icitMtjXiVDZavrPLnn3ncMJ2hCgaA3SncDeBrZfjDBpbHzYG53i",
  "key25": "3XMuj6X1wbcwuNd6W8AnBHknv7ueoXv5671WAhV5qstyZzSaXvwEbPquwdEMLc9qjUPmgUi1iD2nAyTFueu5yC1U",
  "key26": "2aT1LPqCQu5REze4h1ncgETT4FpuJU2WHS7C2BcGqNp4Zx9wNMK1HofoP9XQ3HVSk29wPGmBhjwrEyFTxSxvKDm",
  "key27": "35xqPCDXFNzwX5iD5isUNuNnqdpuFVZcEd4eRVsAR7pqofyZfQiPapQYDPkkjtav4Eyb1abWpdixUGD7iCfRcxKv",
  "key28": "2HQLUM5GDkMXBD7N3V3VMh66ExzNs6fDnnGwyfzR4aRbTWuedBdCDxjLawBGyEdM7iAfjTwQb7b7ZpDGRz1rTiHa",
  "key29": "5eLgHqFMTLGYgPzrKBktRLL33cJoYFVRqbT6SAZhvDCoYcNxnqC1ixAvviDDjDViC4AqiMbnLoknqnAQhLuT6AGW",
  "key30": "5iaCMuVtZsit9SxcfGAAeD22zdhK8yMZx3GLUpwE4GLgGnrpdXDa41tg58bLWZQ7Bz7aDKJEoFxSq4XeF9Fkwjyf",
  "key31": "58GcUkKxfNtPZgR81azLWeyogWXz8FuX79u7wMPPxK4EUH32efMpKzYFkJ3bSBJjgiNq5WLdbABskqDdgxRxhnNU",
  "key32": "3hzUwqCttzoASNKJ3zhjSZv8eyyqL2wG3YQESbkPz1TQmEbymuGMwFCwDTGJuC3hkbhH2M598dYKwmZCVJP8NVWR",
  "key33": "5F6QmRcFCF7QGAtFqsuAi4CRSch3XmkZ3arJgH4n6fc9bv89DxnPEtWjKTJcXTaWNf9dfxynXWVeWg3AsQeQ8Wuv",
  "key34": "5PL1iBZm9MEGoTioYa9qx92qLrTvKkAbCYRxKYUpY19Dupy8ZNKwxK2z7Z1w3P4QbSFrt3zec6xp2v2F7bCP1sFN",
  "key35": "3BBwwuvxuiejiwDMNMUmL9XKgFH3SwQpoQZAP8vLYMJZxugLAwH7vWpsBqUN9FUKoZgNEDX5DSLTeV6HXaYeQCZy",
  "key36": "4ibPbmsRtfD3oeMqBNdYbp3uZvRpD7nUSt65z9tU4DjiHrMg328ZLGgrhkYZCCziFXfaargeBkUQfC8RsNnjnd2A",
  "key37": "3uAMGEwGJfoup9pxML3ZPfrpgC76UZJMtAcDsyUt6roYpofXbUrhAj9V178DtQTDPxnjuKunuF1CY1KAfmxLhREA",
  "key38": "5TGHCumtzLZQ5aRuGyKqLEwgCgZEBdFBqar7WDu2FHPd6H1BcKv1Qo91qiuSGYxrd8PZKVUvpPo35jN3gaRGfMcR"
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
