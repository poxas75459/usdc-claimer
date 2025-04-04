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
    "46bnxxozARZxUcfi9NJQCkmdiJRyRkNYHoMd37E6oA472MXBfEzxsRNpximWXBEzES1ZXBRXFGi77NveYXxoxKnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScjeKRQM64Jq9w5HfYKRAV8V5J89cTevPJvs7js5svaANFr3Kpp7Hd4458udnFYHAnBwRJPxLyohScFmDFD8vcP",
  "key1": "2u2eogDEhNz4SPgwMK3qB3MayJY4i7bRfooviPNEMUZJywzpoXaMgumXnPXhoYg1EJ6xKR3ninCfkXHR5BEEU3em",
  "key2": "43PQSQw1iEdNNDvuenAsMfjqCkY4221QX4tfYr1veMAtVZon7K7sw7S8bB5cfNnHKuriP6rs34Mz1uyU5QWaK7HZ",
  "key3": "34UR7HSBvAyMLQDc6D6bpRyE79mcUgfBcR4mTkXNatxjjqqy3GBouFkHkeoUfGHmebCngtr28AJjk31K78em7Hne",
  "key4": "3reBdtVxm1tUyojWHBnT7HxKAFdD1MqX7ZtFHhMVWSWPmu7XePeXNHm1hAuLBQ3s6FjFabiuXtdvvKtYs7vcJP4D",
  "key5": "2A56a4vxmEvbt6xJRUJnavafuGBa5vtjdbAwURRNasgHEMkEkkAiU6voCh6f2RL5Uc8nni21GMC5BvA4HUUsvcHV",
  "key6": "2Vfp8haEt8wi2ChWqXB4FBuNNmyoiBep1Qc24fPbFpLSdy515KRwoWhtT9xZimveecidymZs1aXyfBrQCkFTBCrn",
  "key7": "k7vTmkWzSr145ucTsebiub1MQEVPhJSDbND56w6xyWDAZbDJ21J5m77QRkEY3UfZ1QX7rGPtq3yoKPy6v9SX9Ah",
  "key8": "5FR6J3EpFtyHnGMHoU3aMaH4vejXWu3SpDAzNe265kbFt2PcvAUqR5jAS3dVK6XNs6GYj8kpTcpEifDLfvDBhLjQ",
  "key9": "53dSqdG6wCTzp6EXfwsXEkUFpdmwCPknZBG9wMN7W1Lj2yJ64z578DAvAw4KZuYrv13jiVDGne8mrWn97VdJ9Tuu",
  "key10": "3uJJLuzqQACmjvsWP5nETkqPHy1js7LpQhqtYF4jFBbHNxLemE8q5snDV7D4UuD9t5ATFtcTRbnTPn2kbFL3djCU",
  "key11": "4kpGuLN9yNmzekcW3YtngBDSauyhF7AipKaXY55BPCHRE9XzVqAont3ayqm8QEFYedao2qZo8fvG3iCCtMVHEkk6",
  "key12": "3BjtG5P2CpyC1tsjKvNXFqoaJCZA9pxo3GAWoq5AiF6qcbWCix1RwXECycrLEqVmF7D1PLrwZBnq9WSU7Epji8ZR",
  "key13": "5tCFapc12RqQC4LnuvWcmrGkRUL7T622ebnPoVVDwMAQugd9X8pDjnNScSABmtGJUsYCpkJ9nsaewWAV45W57eR3",
  "key14": "5SkNnB8X9oqZY28JMhxxzHcBQkGDu9P42aiU6wAYajuhyT941Lga8GSK6dVQqaE628wP9oxqSGkVz6fFPBLStNtQ",
  "key15": "4kdduWenxt672UBgRYCE1HAp7DjFneJzjtnU8sjrhT2RPZvFpg4wh2Uke82AR1w1WGA37547WdfnYg6D8Qpy2eJo",
  "key16": "yME6u4iQ1AjnnPZyLBkEVaWxxUFWyNXB2ceS6jJi56Mqop8ZRFxDMZv1xCfPWQJUc5EJ3MSYyhdbLj5ASmJkCVi",
  "key17": "5Wk3h8gFt7HpYx6VmtwdJuHNAqNdfEqjF5zcGXyM7PmoGEKaxxisjD359N88GYftriHji55PaeKDsYxcwCsou69c",
  "key18": "5yFsiUUWvYkQ33ypjcv9T8cdMTtY3WEk51ha7NbdyDEg93rn9WLZATq8duDZ9RXo5RZT2zQrN4F54tdEZB22p8Vw",
  "key19": "3tPaWnKj3KAnc28UPvgzeA6WxyZg3WwbhsnofJitGS9jEsGVs6kQJUXYjxF3WEkscGm6fEXn8jMKntfsyz7pPfMH",
  "key20": "3a9Rf7vfgpLDthJQhHXHbn2tYkHwWex3Ee63DXQH4juzTrySF68KA3T7zyvvBgdY27hMhrxQVtEZDs1EymXqge69",
  "key21": "4xjnVdiB9kUvbCiLkM9oJCondfwM8FBuHc9xtjsCu673u8jaJ3YwfatvAtpkoRjRA3jZnacDj4RHWh5W3dCWiCJG",
  "key22": "5fGByMhvyrfyCTmbLTnxg9UpPAcqN2i7ZeDGs1SacU24EXcSyXpom7Lrcy2Xnb4wo8pJEuvp1ayyhN8B7SHBSjp5",
  "key23": "65H7cP3jGmNwN7mjw1sQkT88vVs6nrWrFQZi8kXaxQYoYZBxCVpcLmotYgkFZuEUdoKuhwCxfXQ7aeZ7tUTunjHL",
  "key24": "3cSZ4xc3iiJwqrdj6d8DbVU8Xs4hV7TsD2adAMBU35ET7vNPn6fsHNZfQ3ejQ6o8wgo3XyNNxm3RzquEd2zQV23D",
  "key25": "4337NzUicyNm65ygGoKcW89JGQ371HZFuEyxwZdDnaHtFjAzp6EYksLAZA8SAXubH1HK3G14rV19ySG3M7D388Jq",
  "key26": "5QnYhrQ6Jb4LjY9s7m8W4EwjjdPDhGwVeDJYiwGnjupn8FwUnRc2qQ7kHWoivmR3ikUeCVbqz6offzeyEvkKPyrm",
  "key27": "axNJtR3YetRsfHPfSYMPBLFT7UiNdZQXPxCFiqoJRmsd5XdhpZgvdPbgiLQELourgdbAiS1e7XtUiudWDFm4i5t",
  "key28": "2FtUWLG8yvokiQfPBhNNsNud8gDXr5jFEhEyj6ynU3mwSQkKqsMNswZEWtq7wn63Zy7VyYw3VSPYoJQAjiksj58Y",
  "key29": "2DL7MHE1DKnCFjm6u5yrptyGuf9w4Dyd3U1r5h7gwpWPGJYhi1sPHEJ6fgeWd4D6N8ngBo3fvxdEQX2HEaoJ3UcD",
  "key30": "2A5VxTA1tN65CdrTLcjJLKHNRGbHhfzPsN5oa6WeJJAN58DBnaz2DsKESbML8Q4Re5iC9GhUrvSouaS9XpbZdcCP",
  "key31": "5qwouExQvXvcbVZFW4S74GzLPx6AE8MTGr7HphW5wxpUvAFGwbLQ9vaXpiUcdgcjGYDPQg7ba4LPttBv5LEMdjRJ",
  "key32": "NBEuM3VydFFAyUhXRxU3EewFGQrZU1YfP6ZGmEuDi8bgqtAxj3ZzuA4YaK8T25gY4dArzjw8HKtpxkz1ZjKonJ8",
  "key33": "3tRCHS3E5g5G2RFJhTG4MVQHoZXnMetRxJ5in3MgY6xyHPZCHYCSF11mPfrxJ7CsxZ4SHVVgQZ6b2QT73cTLGFEv",
  "key34": "2isXUFeE967f2edsFeTKDg84P8dGHJMLcVKJ6Xt4ZVrW31iZu4CQHTt5HcAUDre7885EwZpw9iD9WmGng2RnCSRW",
  "key35": "5jpbYgUUhojKGmtwT7pieQZNADSFcXFZEFAVmebEe7Mj2wUrXrmQWrGwHAExDqHowCPCX59Wo6rTAjavvaPWo4Mx",
  "key36": "4sfWvKY1HXHvpUdds9cbYorED1em33zeA8BENxEWpHXNyfQ1DKHLrSpzUM8yj7TcXLwCTmKJ3tVz3wb2VFshvxoz"
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
