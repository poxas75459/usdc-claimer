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
    "3g4EvrkNVdjpZvxpAEGvLxfaMXUP12bU5VNt1PRvKidSyYs1i6kWJ24C4ywVkCDUmzFvo6wJy2ypYJC5FPgeC6xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N74sKTRK9eheWUbCbCQbXaHGm45VJRysy8RJbtNR6h3bSQxbfVdYNZFw2HS1fVJ2YP9dPHxo8SMRXsBCa3TCGWX",
  "key1": "62MjPEhxrHxDiFZX1AyxFwRTGQ3haKRsAooApBid21wo94uRY5tLGUuM7sYeKaKCfisCn2tydszsXRkZBAoaKPML",
  "key2": "5EpFzkVEw3zGNYKcJjaCiyEWVU6YkwckgqvpzsJmf5rBGdWmM63uMswiuks2UsCK88veM3qniAunpTWMBsve1mLo",
  "key3": "4UogGwzdDvLvUUn6mrbkZsEgRR412XxEUqnCjZh7KpsR8rBMAU4Zfqt5fxkeiHsAa3cR4GDeKEr6mCtcSaS7wVo1",
  "key4": "56QKQeXog9RDAjBBQPqU9qbYU8NFVCYo1L9EYor5EuGzX72Ee6UifWTgwBo8YGK4xJU6jPtv5rBECri97yL5vk23",
  "key5": "nFhrPky2YmTJrddaq2w4yCfpnsZc3yKU2nv8Y73kNbBCXFvxW1ef72tPVKU2yjoYJ8Q5CkDr33p1Zw93JEy6a9h",
  "key6": "5UtLgBUNZCyBGZULa67UemF35BedXTLw9VdNfxeir2hosCR7HNMJqv7hqFucZTgMCQBV8vQduUqi6gdDnkq35qEp",
  "key7": "4FcPcDzgc5fB1MJyRFqZSG2aYyFJR8zXoa8eF11uFGiVJo2kT9LA45r9Hwnh7pA3Pmga11mudVgxjfQroWFJYxHT",
  "key8": "G963BSsBU1FY2ycwfwu7FXQ8GpFMA1ZoqpYBBg8dviKxTXhPgZ5v3vEDPyB3P3xw9yMHZdLee7u5HDXX7StSaPo",
  "key9": "4sixD7bzALBdir45FxUKgh1kk7sFuYLu95koGwQMNDCBnoDBixQ9YiCSTEp5WJfpkk22hB716ifkT3atgQJbWAhU",
  "key10": "32KkwMBgx3xTsKtbRtBh7AXTUxkQ8URB83cfAe9puM5uAnnaD1e61fooPTz5ujbQPo4wh8eQykdx8joGwz4AQyuN",
  "key11": "9EoxvyYe2ks596ucEpuKe5WrZ6hBu4HMzop6N4shRmTfgBm14oeQcJXFWfypbW7LkDGHnDjQ1BMxiEnNn3RhQGL",
  "key12": "ijTggchkP23Rd36MxGACXkzAZtQUdbUkEesaQG2WQM6j4HkqtptJiT1uAPKW9FQDUpVSj5vZ7VgDeHzAHx5tKif",
  "key13": "5yc3XMg4FDC5i2ULDYkXtwYQ8mtqFDs7zJfmHQ8fhgo3TuKFMCqPbGz9hXGerS9jCdRooE1v1kfHKyoq5c5c92CQ",
  "key14": "2vmhcQtoopBcnaSWzNpgvAr1eWckhfbtpULRKCxL5USEg1wjsjR8nudHCGKC5k53qzbk1QALudHFzfa7Z4kd4zEi",
  "key15": "y65JP2Jhs17JNWb62bDtfyhxgJXpwgU4Xiy5WEChmckcyeRGsTbMJFhnJuBavMmhYXDsoq3Af8wnaccnr4JDd1B",
  "key16": "4NZoXAJAW2qup94mJaCsebTXRSUThFpfD5u2JvTzHF9x6a6DggtG6XMra4sRx8RocWtqvCDMCNwt1zD9Q2ic9j1B",
  "key17": "HWZANQyk8q2t1rrrMtjoxWFoTaLDNZ2bQ7Ao5L7VrUvzEmzBoXiVGkvANUb4v8wR67CLNrpJXVpL5hRPJ9HBx3b",
  "key18": "2rXPJcxC3cKSvgZXhNR3pN7w8SvLQL34kwzmr8quc4SNjQutYLVrssqM3UFu9ynbTkcx622zJ2zh27gRP4s3F5C",
  "key19": "5Y2YZqhFqqcDVajETY3m4q4EejpzvzyDu6nUYLqSJSZ5YgnwJqM9miJjE9ABTHjdNRNENFzia8W3qSL3R1NeKPqo",
  "key20": "2vhiprXehFCPJKGimG32SCLnQB6tmMC9hgDfv31QnUXYTXdCEYWXnHf5Mdfod21tx7akAPt5RWZcyjTnJRVT4xNv",
  "key21": "4WuPvHS7esKoUYqxyP2cYozQXQ6DtoTcEFK8gCSNb9PJukSUuji7FjFRhEwkyACN7ZfnJwvjiLbKGt2vCm27dwN2",
  "key22": "7PK7by9UB5jWFfmtC46vhioJ1tU62cFm9sYmv8hNMDKCKMynEhNrGJFRBevMNngkgUCy9LSXcTWF39xc41QkoPx",
  "key23": "3VSjjfM8ALxZzhuAqgaU5VEBachaQG1HyvmK9REVcm7mi1AN1foj7HRtE5x5JSgwvqw5LzidiUtbbrHkTwiWfPc8",
  "key24": "2VP6CZpRB2HVY2F1TFjRa1p48YYfZM5maSvCBnAzPhv9XUQYavkdzoGvZjtZmuGUpPBUM24JQw3qWB2e5CYEp7hb",
  "key25": "qomAmS9PEkD8aqb8Gr4ZwAMG3FAMzs5m4XkZCpsscSiwt3jDbNmj1tGuTzyXBNh4aYwrQDBggMiVxJnqSfwBbXw",
  "key26": "2KZkLWhrtCWkrE23W2C8PEvkqMwJ5w3m5QQkWUTcKkGPtUNRB3Rv6LGofd6GRPooQCiDNyE3HcjXLMZoPijArPcp",
  "key27": "3aPGhBvs7yL72AbQNs4skeHyhAMGoXBAqdMCY9Hs3m3dhcnyWrJ78iKDnJiv1QZRmxTKPaGfchN2ygKh4WgERyUR",
  "key28": "omEB8oBcDsrYYv9KuiL4Eh7ZWt5vbXmV4VKuZUBZqWa7xDtqJRAfrZDBvhQhdXkDaQMmr2Ff654XckYkypqTBjw",
  "key29": "5kipVr5s5CpmgkieAQWmKUunXJeios59CCEiRzJzQvEqJMPJssRG42HA4ptRz21UKC6u7S9RMLB2uVgkSriP5rV4",
  "key30": "4mMvpH48aUcFrjj5F7Q3V2XWfjXWGfYvXyp7EesGUKi3F4H6QVNrW6sb8H5HyZ5U99LjHJcX49EoLxwMDZdTX5D",
  "key31": "bND1CTb9EPnfQPrrnNvFXmfdx9o9DHXoxX8ztwRxVwHQTQ9udGZSBbvbEpCuefaJX8Fq9N5YuTZBhBMQa2cQgHn",
  "key32": "A3pmyJdHGmX8xMUJEt5H2S2tmoPRiwqpPBtJfRMCrF8sJiQJQEHjHvhuHSjUkCvgHV2xeVgSnNRstj5R1LL9Wpg",
  "key33": "4YwQyYtwdmFYCKxz3kyssvNRzRFh4SXAhgdWRhk2BEgG7EokntVhfkoSVmNXPPxL8JSsupA4nVxrhLx6FDbyFNL6",
  "key34": "4RhVHMskkyBftiLygBwxx8qazuhfxBmkz9jttzNKkVXSjVBFzDhKsQ36qbKSmgxvn7aYHYKs7vYaBLBFt76DevvC",
  "key35": "2qcv8MZR2MkodoZrzWfYwLfYy1r9zZrKYnF3ANBifGvzx7doHmPKF6aqLaaKJfXXs2LH2zWhX4qjdyvD6PYwMQPm",
  "key36": "5nHCDSD8U1NAbuW4gCyp6KhRtnaACpwhPZ4ah3JXYmtGX8D7r5N75h3EPFgBYCCDkCdmNrPkSkhXMNWRoiwNCBKQ",
  "key37": "2f7tQRrKrFpuwZoDAG13Ehhc2uAVNMYFbCFMUmRvF4kxJCWs33zwvZzCYLxwhKV6gTjK5mqg4fNnes3KVNbSzjns",
  "key38": "Tr5uVhBRbMMsvhSAyAiHazuQLiw1gsUADUTmD9GAfB96H3SuF19nyGNGk5RfuKUpsNwBbh3L5fwuNDarVpjpz5z",
  "key39": "5HmHkZcmCyH4FmMJYW78ewM2bvLGoCV1iLQinjwpBQu9BZxvPbAgsKH8gpUBTSTooQpStjrDUbyi3wxtDmDpk45z",
  "key40": "4yxgSn78iGR2u2RHtxXSLcE6TWLV1mmjqBumjXQVeYFkEAHiUmd36w7ayfUby81sjS1ua2QnyWyTcMui2KwLXSug",
  "key41": "Te3yGPAuxsMZAzE1MjaMsebTnUR6UC2v4NDq3DRrjgF9P8FgnZiYUgiz5B8PCLmXuGQYVXnd7C6aVsQcGN31Wzb",
  "key42": "3kfhiiyBhNRLJPpcFi9jhRhkh5D3tNdUp7wg55r4XRviCFQBu4XH2F1HqbEx9Q7AGk4XQ1hiAfjHyVTfWSc5VQKs",
  "key43": "2PDVcmEbfUp2KYrwWN1icSSz14H4sD6e3iRieeUYJTgPzH2tKKAs6vNPjfQfZvhztAyzsfTuTuT6hWFzLpZMTRsV",
  "key44": "mMybTCxJVtS1E3fVKWim1HGMnHg5CDiSQjk4tLibbenvfVPTUs5LpXEt5XuUFzPy3CtLGHXFV2zCwiuMhwz7c7g",
  "key45": "3t1K6hesi5aVgN8doYyMFcqxPachRukKYCtTWp5SuxKf2V3nUtVzW3D5QY4b2cutSBynnuF6m3GLeF75sFNkowcG",
  "key46": "5yHs3Qj2F9JU8hSTugms2ai7n8qAoAFHpgqWqbAHpuUUxWwRF2SE4XspGBax9WV7rSXxRLaJXqarribUgymcqrzQ",
  "key47": "65AMdvsyrGcUUCZu6gv2F9FCDESGEsxYkAQCCk959QuYUzTmgVJS1gFrYtazzbDhUXaeRVhX6KoexU8mvCQ3znC1"
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
