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
    "G2xbHisQgg2xfVitbLvhNVpVvPoAHnsbeTwr4XQG8tiUU56LgCMWypVb9XPFZgLBwAunjf22gZZe94PML1jSJgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mgJGBu65F4KwtRQYvf3ugd2g8tkjz5Q6c8v6sHM3wbTuMAuL4gKeakCRxMNpvADZ9E8SxzjPDSibfHYQDfsaXj",
  "key1": "293XP2ApnFgrkUsNaWb39Sc9aRpxuRD6eoYZpVHW45PpVmWDrrVVdjDgokzBZT6QbWUQAvqqDsQNRwKj5tuzYW97",
  "key2": "5HpwEEFaJEr2oSWYRNXZVDpiiKf3L1ULR6gefapgd5NyiL21ovS2R9Sw7V6TsnrcHtN7C3oRxirHDKL2btZfW7WV",
  "key3": "3YK6Ch9DtZSPFLwS2uHGbquEZxoFzcXUCb7srSXbQqBt5kPd7Ygy39Bzv3PFAvRPbvxAqwbYKs1E5yugFiAMq1Ep",
  "key4": "5izXFB3L2BhX1NxKLadvMuBEgEsppD44LAMtn2NTEE7ejo59inaj4a4kSspZB2DSGFaRi96iFh3BRhRR1vxgd4gR",
  "key5": "419D1rLskm3EwZw6Ng4YxVFFAFNswuUtxaVXBYsHPb3PJAjrtmt8iP9jK5syRWqPiKowertHSVRnCYd6N9dXbMXJ",
  "key6": "3V57KcJWSiqnjezSN3ZTZoDEepaHgiJHr9HaXWkLU1FamUmzdsRUqZqQx8XrVdS9vPs7iTc1KVmYNY5A5H87DE9E",
  "key7": "3YM8WDgKFwpAPk45f6KxUKzUuAEUcR2Dj9mmAH11QrrvCprrNop213aym46umYJujRNXts3QGJmyV9hmZ8n8JuF1",
  "key8": "2DM3rTvit9WFSBfRkgf67QMaaGNs1bmYiUkBhCXRmFheCi2oPHhEEs35LWL2r2GNVgZkbZpzWAmrmqT4MBHdrZKD",
  "key9": "HtNkYRBynvv76fV674Qk8Pb7FPyubzghfPPEkY2QmpsDrJUv73RchQRED45YoVWFkDRFnx75e3KgaJ5k5rYKiBE",
  "key10": "2YKqtfLGd6HXC8HkTr6QmHQ3eWrehQ3vms4g9NrctN2VSyCG2Bap399w7KQxhX6m7EwZCbbtbg7HkEju2XWqngwC",
  "key11": "4PpsSoUKgqg7eyXhaJsFv8AJ4syHRa3BK4btjBhK4vztJ5FvK4q4DTb5g6AoA9DVaMTSSvypEoiYQcutPcxqtdSr",
  "key12": "2f6RUDKY2ATYLEf8YAUMDYHtrX8EnMznqJ4YWD4BjZBq1kY1RA4tnsciqUVbDQF4YD1ZYEGSvPxze84kNeLGy7tv",
  "key13": "4nggH1qdpU4CQcVpoEePzfwuNNNqBHNArnCRFXwrWBbU6PozSjH5oivF9d1eRovU7HSWUHLsMCTytWtrNceurPkD",
  "key14": "3b8xUmcYoBf92nqgMPaFQGy2kYBG9a3wtERh4qgV8TbghSVbAao9s7J69bRbm9nZNhMyppaemS1TSqjaEgLKZCrK",
  "key15": "4g7Aji5LVYtNmNRmvqvGTpYqBbA7MvqNhDaV2gjZLgT22NFzTaEdnFpf944BR3birmCGTFtmLc1E4hfKz9QgR1cQ",
  "key16": "hUuHf4aEw9S5Cn9w9ek7zrysDsCBH5WZLdTw3sp6mhhdtnjz9jJy3Q3ZzQwNNG7yVxr1zrTftA9Rx7uFZSqHKof",
  "key17": "HU6ooKAxEdXxkGm2pTjTkqL1yemuB2ixSrUJP8DVSpGToJLqtQAYHt5xHSH7uFfpt2D3xJujPSCrdSPGPcQAadW",
  "key18": "3XJGtBW43y7qQqHx5Cwy6qjXKavwgnki6pMvczFTfXS8U886qcbYn8y6WzMYvn3NnkyhuYx4zPj6R75y7LjvKQx4",
  "key19": "4iwY9yJYoBKGTLUtxC5NzpdiKp4riCYHeSNaZ71hSEayhfpFePZpAX2UGK7V1WZjQpETc1JbhhQQHEN5czi7UxT8",
  "key20": "4LamviX3d9ipUs1DaZdRFbBbpC1ZecvRQtPCHD5Y7NDhDGcoZT9ofxRUuPeqv4gA2bQ9dQy5NMXNDqmtsKadcfzv",
  "key21": "51fhFGxrUpSFk2tmjXoiq4bPn3rnAGVrJr5DyVXqShq6reshzZ6wprM3ce3LXFVNdZDAg8fwaLagohu3ocrJVYYg",
  "key22": "3eDtTckdha69NPbThwWEw3TixpcUoHiGxh2mETmwDYZh5x9k4edE49EAmmQ695CsWzHNAs62CU8pEwFeXCKttR6f",
  "key23": "59CpW6NK31KJuJg4qEHP3j6LVNp72kY7Z4eRUJtj8Jhqp26QkYSCehBgYee8ruT3rf89JyHwvLktd6bx9gVcMPJk",
  "key24": "4njG4K1iJdTZnjLm2Um7Wx6PG4eRZuPz9aqbUfw81VHKzpYTo1b6UVSReDp6MYMGdqMKZZSJJqrDN6zno5Gctnmj",
  "key25": "4JnVAJuwRBHw5GN9MFuRhY9Qz5Tq35M22MQbDqENJawHNJEbM6g2f9kwYHpmDA5gpLun3X2L94EkaHPqhwfr67cX",
  "key26": "51hit6XPuZTkbQJB6sQDPDfVNtN4QRcpcf1Y7We5vYGC59DsvqeTxe4HY6DmdhYHwfXktxj75yVtiDd1pPjUKMhD",
  "key27": "3JVitoEYXgCxgWDHHvCqbC9FTi6V6phc2zcpLK3wVagZS1fiR5XLPRcWavxon5mBi5nvCrPhSmB35TY6w5Vv53ZG",
  "key28": "214YZ4WPvY68y6KoTo2mUdrtsCW9363z7f6rMSNtTK2NEghTdi1kzTFPgwrtAncrZbeNapfnK83Bz5J8Nouc5fvJ",
  "key29": "3pYar89bidy8p8KxGL8jc4X7Vxk6Jc6PzDicMBY8VUEe7wkJMkqzUvMyfCPcV85jybSxn1kAXb6QWwhnC4vGuMUT",
  "key30": "3UwQLwEpKwbFHfTQxsF2zwc7xocgMVBZDgN9SamzYSQqJVB25TWHzWtJ2n8jqxtwWdwYwKHu4dcUE5Uy1pF52XRV",
  "key31": "2zdVp31954VRthronEvRTxvuF8UtbmFYkbbEtyDByShtNTc37uu6eHGnjHgpbQrbTXMfRTUXBEkAZT5FmwgdG523",
  "key32": "5qynTSN6rQgmwctQt4X8SxCgxUsvxeGPbw3AmrgTxMvMMQaNGoQZ2jTsnhoTFwMvY7xwiFshHfpJB9TUxPArQr7A",
  "key33": "2R6iDTxM4xxRCowxYe1LimAzZQFX8wq1TQX4XG4S9hz6MePrM1aLZBTQs2zsgCrRpSfDtTFyWk2bfyqZN1KpmnQT",
  "key34": "w13DDLRNQ2uxHk9vwNHVvduewHhBiShnBb9UtQgx2SjY2vogJsiYu5jufb8nAXXKLpe2915LErRaysZd3FWuGcn",
  "key35": "2qNM9byyeshZTcjeVQ6zsHqKgbwjTvPHSsqahJDdQkJUxRmBJ28RLGavCSxfAkXNPe1sR3LpJqkVPo7tTf3PqjRS",
  "key36": "3GWNzsKeJRP5Dwz5nw6kbEuszU5AG3AQDPwzUKeN3MpTLdygukTjFMA24zXtGMiaZs4Rnby69F5LpkKeosypYt5J",
  "key37": "2NKaLY5SD59iA8jxr6WnhWFs4cuguqkusJvbfzzHkzuGkCA3bbqJBHJLGUaen62wnTf2BhekGCXiaDRH52sEnf5w",
  "key38": "4hhmiwLcYnX3MEXq6pMZRmFu3G6MXwsqT2pAumqCAmi3xggUx9m2FvP78DvjyYRafbWGczLVNj7QBSGutbV1VcK1",
  "key39": "3EoVuJ34wxZqMnN42Aexg3cTWbXnQ2ggu8GAGopXXRo1wsuAFZNZYp7oPaAxaeHQvyBdSaVpiWzsaUrUXAjtC4BY",
  "key40": "3Z24r52RoKDzjbb7Ws9K5KS5NH8Ha1doq9XGMopYpYHcyhxwhWHsC9cWv7UfexwXugE9jLg6sWJoYd7tJNxM8iSy"
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
