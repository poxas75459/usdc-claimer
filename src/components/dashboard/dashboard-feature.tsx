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
    "2vRVx7YQRS3QT8CtMk6TyspghxYP3f8gtYtppKFD55NxhAzMcAHCtDqrJu6h9tqgCMRhGqdo6hLRZ4RdtNaSpoWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qutRxp4KezgrVrXidwDAboXQkVEMHnRSkTwCAxBLzFtY4RFkisXCNPb4nKtFM3zetrCAMzoGsmYPDnjkfuqhu2",
  "key1": "2qAQh9uWR249TpunkfyNLu3mJUzCW8P8BF9992bQpm9TWm2RJ5nN3mh4Rm8wioF3oaZ5upReKDWVQGF6DjXFowtA",
  "key2": "Tjn87pTbUAgshy6XmqYnrUqBcYwmnM1bDDAXft3Sam81vHoAuWrvNqyLVorTdfcrMjo2VFts8AirZ1CtzUNU2YT",
  "key3": "3iLYgcDAsZqUKH8ZfcZov2FdLLib1tBVJLF7tDd6Heq7hA5w7Zrd48pwu5XUw3oVpUWmHqMxrCDANZthc6xSWUi7",
  "key4": "3TfpsaYc6EVXCfUV39YqsdapPYyxXZYTbS3oQ8hDazSNzwirz5YsCzYPPMga4h76euh9zs25FTcgwZqZ7Bhc2SPi",
  "key5": "32tsTUJvoiUZ5TCbrBA1qcpAoVPHxXcD6zSfMy67Rme9C4TLYXKynGYpiTrD9KQU5DtUMUTtJsAWC8JcQA7PJt9o",
  "key6": "4vhd6WxZDt6kbrVZKM9SuUkVjqpi3Nw71VqvjLJkxYqiivp7BxakZLM62WBT5xiTpEygA2XRWLVSvwfxy2ARwe9L",
  "key7": "5wLLuzEeY7sEvRjx1GvmvmFGWwieKBZ69Wz4UuLaQJVHvARoTBM9futFs4wvZyC1jPmGm7GrUakfZ18S9wsQef8H",
  "key8": "4AVhk32yVD3RAMnnwb94WHKWPDhB5VjXmDCXxPJeXXSYBXjN1X9yCtjKZ4DrWYkpzXP9ed4tYUn1CrfXF1NoPL67",
  "key9": "5Kfupn3FF7VXEPmQJ1G2Ze9eiVqScXU4BWwBH6yNfLikXcAJoQNAieH2a6Fyq7TV7TAGYww6pVNvPBttg4HFpCkk",
  "key10": "2aug4c9vWZaTXXe416QDj3APHpn1xcWskXdSYe5quXG3AUXJszCzSjx2SbbrFVgA2yqkskLvDi6ZaqgGUyU5bh3Z",
  "key11": "3rikytNfdsyGbHpLhpNLhTZjKK5L8ra8Pq538D4JjU5hGsJZSrqAqWV9xPobtd4dDpfoJLPsduPMBpd1bpFiHEos",
  "key12": "2tTNw9CBxWaoj1j3zgNbc5hebgZhFV8ad2QoVU2ZUfM14Nk1GPELZ5JapwLs3uMzDd6bH67Lf7jtGYzV6pWKFaSy",
  "key13": "5yNu9b2WNjjoVdWArD4qwiVZENNNtvLpLoWSSyMEn5VRVa8HHRj5QBdrx5MaUZaNbNrYysS9odzjn5WN34aB9mor",
  "key14": "5E5eyfZ2aRSV6MowpyqiRSQt9LDaensJ7nB4yMq5YuBGMypxsyW7WqshEB8srcWK2MjtMC7zbST3s9vEjiwzsV8M",
  "key15": "2GnFXHKrQzhXjwpNzHj2XWMtHJhswKb83T9QsDwFWMvmfu6cUXUHgfWbG4z7c7skD2zh1TxRaUtHawctrHNGEE39",
  "key16": "43jeNGnFKaWzdfpxVZrj6zj3v51PvHwXXPCdthWwn9oczPkDPNiTTC5fWeczLL23qv2PaCy4TTCLMBX76xPGTWJz",
  "key17": "26kijkAXQ5Gx8yDeRH8hNM1hoj3PqcW75rK2Nqcp14NdqNkePobo37KZM43B1jAeb38AU475Hovhyh5r4w2Qa4Yd",
  "key18": "4HXP19JPfQ7wCg3SST56m9azB3nqwBAMu6Kkd9CpnP5HCScSJncmBMdgiom6DMFZpQwWxFxJUbr5Kx7KeWvJtpah",
  "key19": "5V6MTnh7VF9skBdE6UNFAvurnhLks8ma9y7G8d5oBt3qPBewzQ2KayBetLKUaB1Ho7HFHui42QJVaNuiZoyg7A1t",
  "key20": "2u24LynUAvUhbqxiEK5WNwP3rAcE6mC3niV5YWxY9AATgFBdsemxc2rsd7cWqj8T4XcxAd8DT4dLWCvKNBLVw5ar",
  "key21": "PES84VVjK4SdSbtuC9rLeDbMZkRWWwp95M4y2voHwGBpT67K38tQyVQGQ538yD2ojHQ5DrChAQuqcBnWaWaHkMa",
  "key22": "2uTxMMAX4ktKSWAEaXDRDwPyrVctcg2RirSJWRpQorJ47rVLZeTap2q4VN2dF3NzvQtYpyqqb5ajU4hYMa1JrC64",
  "key23": "2kuYgTXo4M9az4afYB9Z8nJ8XBvLzP9BpUsnGkyuijy8gxaHApm2P7VFPVHgb3vMVYjcZnBWEfKAgwqPQhg5BEDf",
  "key24": "yiN113K6z8mV4Nb1ey9tf9i41jYEDUW6et1iuWSNAwb9BAu2dNWANhVuCgxt7qZqMjUgsuSsSZoUc8S4BtPmiNP",
  "key25": "3Eb2PJWLwihUqGynNuyv2Czzh4in39GENotJLbKwYqdKc6v8eaJ9UrQcYRR2BYACeHxBZfMgRAypcvKCmWMygF3L",
  "key26": "31TFwHu1Ti2AzKt8xhrMwUxcRtq6f5nkDKKr64oqLo4WMef7g18255ewSmtZjLxjKS598UTkzA3KRYgF6bEsjcAp",
  "key27": "2MLDtj7P4z7JTS77cgxCLBi4ihDRVAi3ojXsuJMW94h5EYeuMygx5cgkWPDnj1b5RH5cQHdemSnuUmRdbaGNQo3d",
  "key28": "3ren2R3sigSL5PA8UBz4uWKcWqiNxmQp9ZQPWxJLS8D8QviVwaeivLfqAK4MYXERaiuv5qK4BsuWvRqc7oV7xCwN",
  "key29": "4LQ3gyNjtcgxHdGXXbvPMdqGnmWkZKaGkeLRWyJKo24fANpnqSemFokSa32FfUK4ZoGr3fYjAiemY5V6b5oMDFzR",
  "key30": "w3xrwM9VzQULm1gd9naRp1uarWUn3URMpv6bJ38ehKdfRyPF4zyfMGX6eCQVy8uENNyezpX3jPiwznaqtXfWNjU",
  "key31": "4dGa32CKmnB8e54Mm7dvhQSSKrn1YgohoMfqcAX5V6XqkYzoRGonsucUUHyxRN1nmH6XwSFwQ6XZajA5QY2GJE4Z",
  "key32": "4sj6wT5r3K5bkX499Hv1TYubbg5afM8dZjCaFULNUWxAXLV4n1bnEpwFn1jt6DbvpE73x1JUny99JPyrb5JCBcpj",
  "key33": "5sMDuCAFoqBKQFqKyGy6QhJy4E5z3mmaCZGDXvvukyBwYssvwBjyyDFrCme9PtvY7rMD5BNzcsFiPNTBqB5i1Cq6"
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
