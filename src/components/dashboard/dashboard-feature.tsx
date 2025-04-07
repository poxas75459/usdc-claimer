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
    "3L1WvrcHA9c4vESvXbhhmwJsf8B2EqPLWYEwdfMUhK9iPKm4WQZh92WG9CqUTZJ6rJQ5zpHzWaeg1acZkXa26ni1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WU8fkGLuksb6cXNMyWGYsSSMncrSX5RFHqm2kCfdcAJzBgcEZeSxNSZ9omjpjdfvbH1FYALcKbEoA4AWTAmCV6",
  "key1": "4d8q4U2xh34AyA6zpghTWFkp8RVcTi3s5AwAMqMM7KsKzvArv67hvUUbbDizzmYhDPrPCyi99xQsHvMq5sG3iKJH",
  "key2": "c2q4qQHN3XdPFgcx2hFPsyycuzSLfBBsSZ2QiBTN1ATHqnbFyx53nw8Vt7UgD8Z71LQ7CxcZvjy2TL7vQpisD2c",
  "key3": "5G2SirMnAzLruHUDejtvi8acw9UgnDZdCW3Z648AJBsqf4XsFAocpgSVSmqTYDqvgtAC8iq35D4VUmXw44dLUhvh",
  "key4": "3NbuxU7gZPnekUdx3ti2sU4CBZxDU1ZWmCnU3CKJ87WQbJZhCXULKtX4rbnuxJsCTdKMUTgWq4KbHXWqZeEow9T",
  "key5": "3JtfvtHsjs3Tc2EcoNzwGRLpd4AVYbPtjiHZ53usVPDHJcHtiECKCbEDc2mzts52yB6xoxzLEWCgo1zeuPnw12j5",
  "key6": "4J8Q8uLZn63S5tfk7zvBx334xWRPM8xjeFvn54tmb97NzQJzsdq81dhv9ZLkxE4ZPP4jJPKxYcdHWFyu44XNyG45",
  "key7": "jWHpD5c1bkLqi8p9ZTPmsoh2t6VhxJQ4k3GZtZCebTdPdWdxmXqCbcC4VBUFvqSJU2LLLSgm7B6sAircKsZPJsq",
  "key8": "Zin8kVDNToVWAvcMRkit4Nmyxj9FaoUzgki9gUHop1g5kYBwGSSeYC8xf7oktmTRbfq2JsTVWaDBGgVf3c2Pheh",
  "key9": "6J5SqywJ6eXVLYwe438Q4FLVcYzu6WuK1hw9ydx2KKU9Q4ywtv5Zh6FUNuq4KYti65jiszz1UnfkihQZMvu1MPy",
  "key10": "4YtDq6b4GkBo3FNUtwips4svcHkMKcGHdshnNy1JvkjrYhWXgCAAK11Q1EV6ce31xKqaAbQh22k3bUgwqXc64ygN",
  "key11": "398VJsxZqzGPzm98m9CGs1CgNT7XG2h2pP3bRZKS7RjVL41NLXrG2U7PTNLfu1Zb1XxwfxB7y2umLUjLLxvFu6vd",
  "key12": "5GmQ2ZzwpsJ1Um4qoWgJevzvwZri3zweayMEAxpq79zZHf3busyWrncYUskKmCxDXnAkhugFMEhRbn1Vo1ADS9Sy",
  "key13": "5F8AJ4ArLAWRKjzF6Curench5rmAH1Cs8qdj4YkwJfkeUcHeKKWtCc9DAY7mDqmoe7C2QNTmwqNM65SEtyTyMF5F",
  "key14": "3CXArkHW6WNPtC1A6ADGXcYwT3aywNfNAj5E5QMfxUVwmMMrQJGmPa5ytK6VWy9ivAdS9sGzdT7RJGWNh5P3X9me",
  "key15": "5hFW3y5chJKS9WLbf13ZUHUFAs33eqEgSjvpoL8eUn9bAXUJ6TWhTCqmSEtb1JjzLA5WrFvPmXw3u5C6MHShvzFz",
  "key16": "2WQ9DUPoowxkUjnadk6eurQXCdck8xebcdASYqCSeiCHD3Cgraff5x8XZDv9XAeEhzq5LpnhDS3TwDSLyx62UEAm",
  "key17": "3KdMQa8hrSeRjuS9dTxfZQvLxN6LqyRdkWWqPjnNoMsNCjWwg76deJjMHFuanb4ci7TVTaeFct5PoP3zcf4Vyckv",
  "key18": "32fq2J9Y5JC636eq3Ej7k71BHmxGQokV4yMG58J22XWequNu6gGUutTM13rouBuAYot8iNTNxBdgkxTPmUfm7ojs",
  "key19": "2eeQWXVX89tkr27ryBAnaU6FKyoGThdWJhxz8MPFqJ1wR5MyYwKn9MqE7LfqDjF9zzgi2fePgngpM8ujFnvN1QxN",
  "key20": "5PoJhbMkzmCcCYJn3jY3xpXsNjdStkAF4A5VXivrR7oUXLTvN8Wb1PxuWwJQuDv8758TtNCZgaSafcVP4oo1VZG1",
  "key21": "84gNNEwSyrGHhZCxsbXnMvZkRhTBjLc7nBayfZo4or5jDn38bAB1MA2QtmL1RqzhPenTiML86ptuPLbw5h3RbWF",
  "key22": "tJpcQVRgE4vWp3ppDRyPdLmeLCwP6EjsFpCU4oK3RDrEBkwoQQo4oWQbwgaQ5UgEkNCfC2vYLVdHHXUB68SZMtV",
  "key23": "5YHaqn97W5QxEU9PAE74wawECE1oh6AAZjxAsuNb78n2pVvKX9od71G15RUagP6ECuv74Mnabzzdo7w8x3xzusZo",
  "key24": "2oCs5Kdc4XoL82ihQ5dUYGsYepmxBTra9RNEQFcdTjc9ifNhJk2Fmqko6RVsEoqoMGzxsUobBeuRMExG1aZk6U3e",
  "key25": "2irox42p3LzjmKKPu18wARt6ybyykStHor4oWpjSdyaUX1BSm2dEnnhnPyRYRMygEWgsMKePSb9wUgPrVcYXK7jA",
  "key26": "2gD9XgvpHRLPjR8FJRFc9zJLad4SvHGb5FCwqoZGycbQnQcdLkS9Tjfqbu5UivcdAScr4DdoKpjUapsSJiVpxUPW",
  "key27": "4VUxme4Az5DwkbfcyXXpcUTBS9m24PmhkUnBC7CiYDLg1XcUEAdDZ83yugFuTyZAFZef5yGeD5AMTx3oyRhps3kK",
  "key28": "57jBgbvsGc3a3Hp3Tdx79om1nSV3toMNhpJc5X8WkqrFTavfAQLpzEndmTeiAJxQcDkrh3pT499Ea9JCqrF8agVr",
  "key29": "2r3Khw5FKGdiR4VWpaGraeyR2Ng4Z5hMmYMixCZfaDJxavLxgTH56S75sjndUL8hPGnHgu5BeqUjmC54rbg38vEf",
  "key30": "4yzkW84APXq1D1qW5PMXrp8LHsb2GzoUqvEF5kZzMAAEQHpVQSwzY8hsZjrdB5Lup5yBDhNfCH9Xowr2hi4nFCdL",
  "key31": "g18R7uwKBLBt2pH9W5Mf5YzLE7UNBeSCQqzqz5uXj5mdTNHd7Vy7QLmHfy8TJr8avEG2sUFaA4rqx7gvpvfaxmw",
  "key32": "55WwwopFi7oKfF8Knv6rU6JEEVxEo82eWy1z6YNsrRhXsG3HitGpnFr7wAuQv8oMFPqYscvB1Ws82jBuP7xGGNx3",
  "key33": "57EVDE29LNyXSzMzcRnf7iXMpSFJG8YYNebdpNf7Eiu5181GpFuwhS7t1gVyKx11hZUJsvrvaWgszfdp4tERusYj",
  "key34": "5XCDJDeN38YtrStCsyxMQs35pj7tgMLa4KHcVssaQBFgjRGzFSUEc1AXuiG7V9EgUuqBw63rPBbZKdQwnhCp3Evo",
  "key35": "4zhN6akXt4UuXygBRkaE3Y8BMQmFcHvhVsuFxatRUGzjWMe8MnDFJayDuEKEn32A2c5rPyRFmRLwS7HkDohNLY8Q",
  "key36": "57AiwENs3RrJK54WLZ7U4hDjm5KkbqVEB8bZ2yS1pLgpeu2XBdMcjduNJMRFugUT1emtTNpkK3uZafCsoPBuMmC3",
  "key37": "5S1MNju1k5H67SPMymsZVhHqAFLByDDo8n3NgSduS5XreydU5fBoQrW2QNHerHgLH36TucvhXk1Yf34n2euRXWXg"
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
