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
    "3BDBoLVoZdHrrPiZnGCwHcfSpZA3DGCPRJUtphK35xoHuYmosDka1npHN9esWcLrous9UdNkbUW8ptKYw3FQU1qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B4Bb2wATQFFqjBkMBtDyJxEkCncY1VJqK22DmE5AJ95pSP9QTUYDKGopCJ9g7HtJdgj6ExfSMoRDALqP21QL173",
  "key1": "56z6cEU25cmc5DWTY4YHn7mgAZ5ea8MXgWBidqjUZep3VBGxEwKZ7dQG99oyvSeqFPeP3gDE7noMa2y6wCgByEVD",
  "key2": "4DtTicqcr2SQ7Bmhi22VDWrxF5Lv7cTj61BgQPNoM4i7psJ6ov3tqYk9mun7rLMYENKEfg4dRG3LB8dBM8dmLSqf",
  "key3": "4YKxGGaKa7VHgDAat1uQN6WpFbxKCN7jcuw1VyaH33BDXKcYqqSGSP53MPbRxqdS2kT9xidwAwKu2cTNq5cMPk4w",
  "key4": "4zALKXLqhWpJYqGeA36qceMsHycSJ7A2baCddqX3V4HRYRMhHmjffkDNVrs2ru7NSeaH8J6MFV6MjEt7Y8RSiRwv",
  "key5": "4RqB7Fq1MrnZ78vhPwV4CZKPq5YDuDs4sH9FwUDYkMhu76MGVWEUdfMmwKzvV1iNhyZerdPNEWVn4Ux89PdgtAo8",
  "key6": "5mFGj6t1ihtARgbLmoGPb5WTqSkNFiiBH2ZqvJJoxStHbfrqRra1CQeU8kwqwo2Z4qytHFgFXqZs1paHiP1oGy5y",
  "key7": "5Ck739dpKhu3DoF8cCDA5Xsde2QZZemZduhTGaq5iG2UZJFGBiu1AZfg3DPGDoDWqoexcSAd2c3y82ce3VbiKnbK",
  "key8": "3rg5wdrCebXn88VTThGMvzQ3cfCySJpBV56DhcrCtPaaEFcH9be7WiLvkHbhqHNNdDNAs5iQ9VmWMnG6p4S1ntfe",
  "key9": "4Bw6wE4sdNNFj6A9URb3vfZNeSoxuqcohWmh6fQZ8DUueh65iHTYXTeKPxSqJbrjMHWyJrG61BXsVhcUvm4zCoCZ",
  "key10": "4r9qsSDVCUjFgu7gYJABLoHtvcUyH7apaZzsMYRE3UHojzivMU262ZdcNcKjXb77Wn6VVg1tuyRteTxvJ2WKGFSQ",
  "key11": "5VKqz6VECvsdfFJggAvUAn3xFg52kgy3AcMz7b7btawiYmS4WVUbZEag9b2TwBCGxiKuf3pMLnpUQiUP8EsWdZyF",
  "key12": "67nWGmJgNYjS8XMoYD7e7YSGRL8nganfYDv7iVSBfshXeGCUuVuCJaSyJgsos1uehhsAPsPYEz4NQr81V9zHXhyP",
  "key13": "2rKject6eeTzYfFu4Q9QeCtnHbdypDayytQYr261eTtF1nED5bnZdXUNbofBqJpyBNy6TrX1mm2cv8smG9tfNSXB",
  "key14": "2ZUkcEcfwrVmQRX3q6syDCSAywKShWK77htM8TdB2rVc1AUAd7k7YiAyCywQdKypvyME1Ari3wXnpRxin8WVqFVS",
  "key15": "3Mc48L47Jr3aVcz4BrJCt7UyMTo8q2UjPRcEmfNmpP1p2hPc3wbECkFyu1G8BgZ6pimxVvgqiirikDmrPzZLuN18",
  "key16": "Bt47kFkfeaF2wNoB1tfa9KBWVGTaTpopFhnWMqNKqEm1sRYZNnm3FdsSJaE91V1c1DKe4qGbVehRJRCWRsZNCMJ",
  "key17": "3wvwnnsbg6oGQfDdhTKtzzr78tfCYbvMDGeW4pJ2cbrgTW4ggCP5z1yGSNhevMZ8rVwk95vvTo1JwAMWg3C7FLMK",
  "key18": "5bW1B4S5oWR4uYJqXgVLFM9T9UtEGCy3nW4sDNRZQDGenPz3BthEyTkkaB3RawDRjL77dzBC3jSHg35yGW1s6wsU",
  "key19": "5mDhFABg51siVM8PP8CdiwabZ2GraegRHHjQa6GqmpGVDTTZgKBxU9yhHNUhhE2phPCx3mnpm9ipPKHmbjohBYVi",
  "key20": "54wZM2BnYwmm5aXdFjRcrDng3C7Km2FgpNBGWeJB4dPqQNbE8TWAibxKNGKro8x8KySwcxAK8wAuWkvHX1Yk8mj9",
  "key21": "34GppKykPv2jxbwTGUpAzxdtCoECRUi9bJUqjHiEsyvbePyTdYbCXJNG9jEvmGq6GfQMPaxFgaSaBwPs4fDxFatT",
  "key22": "3yNnJq7NYUrbCUU3U6BNsyEHgN29ZUnxVdRX7nqttMstR19pUxjTq9k2xQA69jvgyGCkoaG7zkBpqho8box1hWEW",
  "key23": "NYUXbSKos11Vcg6N2ZtH3q13YYKX5twZAZDfJNJvhGQBmUuyRR8zbVaxExYbxSsi6qtSCoMLebGqTTnME3zxvtV",
  "key24": "4pYPBg4xC5iKcBYSm1yNVqXVe8SBZ1wQWK7NcesxEKwNUgQN29QgFpMqjNQsoKUf5ubLWghfvQKNkR8iKZPvQob7",
  "key25": "9ikVBToqRVxSAPGdwVRyXrKBR7taNf53WFg46Wyu1kL7n3EJNHLotNoFQq9QVvH67MrWVALFHRp3B4DZGEnfzGo",
  "key26": "3e3bz1yFc4GBzHis2ao1yommfd9ymxmNQbHhV6kg485SQG5s9ZVhVtC5DkWxiLXhf4RFAPUMUiZ9J1LRHyoxKzYn",
  "key27": "Z23fkVTSC5hJwDkRXTsTBJ4MtdAcivQkk2WLLz8S13Vshs6L9U5phJDc5SnNzoiaTitsEJigj7DkRmYh25Gr3Ry",
  "key28": "29oQMniQ1MYukauxEm7Y6WpAG1LhwfAbf77DYGHWkzWb9fPi1833JyK7Cez27H6NzAcd12FPFVPywinw1FY6Vs6H",
  "key29": "46sAC56dUdaC1PQhuJkbEf5zg4ECZAp7DHrs21cT7xTEj61PR2deu6YBccS9aZZerr3WLEs89baACz2RvAALTNBU",
  "key30": "3bX4TmA7aViw816CdHKHe69aqPxqB4Q7MehyCpHttFT2QzDsExJ62TP2vaxZFkLonGZdfJohG1eSFNRbvy7eRjdo",
  "key31": "2cdSgyU9xauc8QnVK6xtLHbJ934gktaTPkqcHAHHsdKdQPgWSenEsmxwdk1Jf4fczWywAYg8nFQizdxzRSZ68AxL",
  "key32": "tKQZNfYn4QJchivZTzoTrW4JM43X1wxxG3iFBTg54Zy5b1bbbo9bACEqZzp5onxJ4StuVntqb8GQeBpYi4tVJxF",
  "key33": "3NkW2Uc9TPJdtwjfPjeDtJ2X8U6en9hJtg84kBueehWcVUevGzHFjLDCy72rcrpDdsedTWSvTv2159gM7pBuTvqL",
  "key34": "5MDGUGy1v1bw6wF9r2X6yMe8xDQEP1xJ2gzW6bHBdfRtSSEdvsUfaAT58F1HDWHgYhZwPg7Cbq3SXe3CDmmTgSn2",
  "key35": "RvifyvRF5tfEnBbTonmfz9WZJqySPZbWemVXZL4QhhEgKhYJ6ECPwrsDZy8ruA8wvhQWUyA5zQDie1s1Pq4Y44o",
  "key36": "38Kykvehju5MArgxozcTxSWRYU6MUatjZeENm55o1GaBHsKhfdHeL7RqdnhC2g34jt5fTS89mDkyVq8ioVAvabQ3"
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
