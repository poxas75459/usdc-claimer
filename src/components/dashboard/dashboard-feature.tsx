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
    "5uRRMPDQo6J7RLjmRHJEb3kRCAB2NPEBjYeVoZo1kKKGdcrnkqcAms95d9799HZFNaXtVGKyMTufUm1XLGzf5zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwwhJo5ymkNPJjxBgrXw7B169gvY2vQwDYrSgi3P8NQ7xh128zLnLyAWt6U6gwW9PNd5ZUzhajCaMufbcXA8eGY",
  "key1": "5Y8pavCurVqvXGBLo1g5kpA5H3UeeNUoVBFGT2S2bhZdALxkZZKvMBvZ3Nam2pY4Ua4cYKKDBnWkicmVtDPoX1LH",
  "key2": "BpssPN1HDH4Fu6HWkBFxXVG4jG6ytSzCc5PrYe1YvU6LTTvKKxcwsoF3PXoxY9KvNpd7n5MoRLCBFZpBZxKS1TS",
  "key3": "3Rd971Rfj4Eu4JQ1VpsodwDjNZnitDAdsPJtVZFVTez8Jp4RSzmjHGgM1wWELmTNAuV3Cqw3wM64zsd6T4i2nHuS",
  "key4": "dBoPuvzc8NjEnR2nEnisvJsWid7FQXTngziFDBxkQUBgA81iSn4Mx6RyQjX7zxkUpfuEK4XAfvuDCAz5QQrEgMT",
  "key5": "3qdkPNLso4RRz5H6iqYhTuuzp5VuG491Q6fgyfreMqfdyjRxx4usNEHM9qVFf1C3vT313sQb5x4nrgfWmuPCNkxh",
  "key6": "4bmxo5bGCGj9C5kuN3pansbdqe1JoWXRYBMNCETe9Q6W94LyzerDDaqEx9gK5PtcJR1hs3En9tyhm5eRbXa3E67a",
  "key7": "3P8zArSYjqJW3vzDeia6nHujodZJTJrGoBDx4us2eD1b2LYavCziS9o8qQR2Qjm6uvpdas59kLY85qMF3D4bzzhE",
  "key8": "5xXSYKPWSgA7eghJicLxHcRcJ5kjgaQBJTjYhFiGdDAV31tpyMvmcybWiPqPh1azsKHWUVkkn4qFAMcGyDe63XZu",
  "key9": "4sqmnzEPUinvMMWtkiYNuACR5NRU4ZJ934LptPB7P8g62kxq7R19trDjzzoJi7wofneoUyNNybruQqLADvSGjpu9",
  "key10": "4qH2YBudwgFN4y2b4NVB6NJFbiSVeGc8c9GnwheesWxxtoPR5xpS3ZaXEXMqbobpHjjBdRwqmPzPC32BhSjGoBtE",
  "key11": "529HdDW8rXjvsRiSn1P8jCKc6KfinB29u5VSesShHTNVwChWZLyreqv3MB2cghcNAbnvK5zVTicR22v1txCv8fZy",
  "key12": "3ZboCqnGYjBSZpD6CSCR3J5iDyWqFqqsPeGUjxzsR4WZYAvXjbzCfBAXqk5mungtWJAjeywVsVg9eFUCEn36ET46",
  "key13": "23vaHCJNZ5gBNiKfY952ijvgHMdffhxVSDPqC5qofTpmagpDrD5Dp3pSKL11dsr7wMsWrBExa8zpZ2juvJGf1DBB",
  "key14": "5HeXyhRAEXpr4yyyi76jr4wnuMwUnWC1Jsj81fAqe41gVWrp396T78wesy9JyV1KJhxyp46pw6eTNa1ZCa8gCHdB",
  "key15": "2yRPnvMeSKhWRXsqo5gGUpai89NheCzRSfUbJdhtPKCXvSuK7Fv6GinijJhWkfaQ1EaDjmfmx28CP4yTnSVXdw3n",
  "key16": "Y2myMyfkEhJS92FnnazJLs2V9CochHockfebajwVAqQcgemyNzM7QoQ1bXTWbfmofz53DuoJKMMtb9oeFt9zVFw",
  "key17": "4dBpKEWHg9JsZbUBDXgTKj9x7bVGrZW5aRGWb2mhyFkfYQUUqrnMYHeqgbiZYpQxR5nCi1y5e2tvTV2rrxs39yJg",
  "key18": "2jRvxS9B3JTnF3mgZiFqxRqLXH7TpPcidazGP4JsMobPDKJjNDA7Mnd9LHxGUwTB2GeKCxci8DfymEXik53XweJh",
  "key19": "3LzAX2FeawBfiAhxgigMK7Np4nALmSwsMXM7KeE8WZcVDBGA3EdETFJwqqbCfRuF5tGMufQ1hkRf9nhPQZc1h6Q6",
  "key20": "4ESrqfGd62yBjP4R9NZ5MhVhgmB1NJNGt1G4jR3PkpNY4Yg7B654TfPrLkDHwLGEvBnDp2Bk5bz4GLnBYvZL9kei",
  "key21": "3tfcxU6zCvDdBmc2Wb5so5iPKe6otVRP3bwLuyFg5BoyHL3o5wdjmNxYe7o4X1JYMQmqADuyZaWHkRpCR1oUGtkJ",
  "key22": "2yPQadBYiYDYGPacvEyzJY7Asu9ALrnpcguGFVxDMAvnB4pGo4oyjS1y2U5BkcJwq4UVDJx44fzD9uRYQBPrJnZE",
  "key23": "2e1oxDhY7NJJ8CxXNwNVmUkLyBP1fjkJxk4UECGk63tebGzsHfeysHyD3gd2UqaeSTznXHqksQQFc6c3qasRFqoy",
  "key24": "5mc8xnrYGWa9sjjxWPFGvCChFBYmFAsorDriouwohF45PseyFk1KzLL9NKb58utb5RE6FTSUk3CTLNLhdmrU8H9E",
  "key25": "4LtCE8An6qZ585B9eomYwD5MEzXTzLp8aCqQVAwQyqruMNP9sVkmRGyoPYPCdXmeibu1dVNeqhCNchjoDG9wYzc7",
  "key26": "5kuAC4uycXMtpfj5VWY9W2XXRctvfTB2VRA22P3pkksNpbmbEfK5MwujsSnpCjCjtnWYLXjTfWkzGHd7qQZEByQP",
  "key27": "YE6o8Qozvi7bL5mZ8ePkzgtGVwthuBmRLBFfkHG76uB2Ns28Z4QowyRmaZJhqmQexmJ3hrewEYDJUTsoDeg96f8",
  "key28": "5Ge5vzpzntFE4h3zAdAeAE4EZBuYGG3P13NVs3H56frrBRfSsMvB191NCb41FfkLb3yHqQUZWfSafhHAoexUEUQ6",
  "key29": "WAM9kDM75xbkfHbJCHj5csawWPyzF9YtYFwvDYEtNQqxpLX2m5fQPzLFRckWPGNMyTHcQm8uMdtXnHAZEHW1BtV",
  "key30": "mxUTbzPMQGwHCyY7hdPYQyaXUXo1QzNR4WFGLJzjMKEzmrBW9inKLxcMSU4YrNbC59R5DyTrBj3ZnW5GH8jNTpQ",
  "key31": "5HHpZxReJX2heJANzk5KMaWMn8piqEoTWk4yRjuAb9P7uyiM4VQPPYwo7KGnDhwAnDJ1Nc4NLFvpY76TRgbwGgUq",
  "key32": "24mN7ZSY8fcwmYNpaxyr9sgj2QiiYJjCKRTsiBnYf32LSZZVM4QrBUmpdndCwX8zAW5CCHnhavCR7qcTiSzd71V1",
  "key33": "2d8jBWF1YYxsz259RJatMZbESpTMKgR8RR4PRkRtQppQ5qPK7khR66SVYvW9tByrDnq14cQmoLRp8EnUiNsM4L8o",
  "key34": "4hKjgzt9YbHqGVkP4pWC5JrKRGiGkyV3Qh8eowtskuLa5TxyNkSJpWczMDeGoXTyQudSKP3YxfsKNM8JxjWdUxzG"
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
