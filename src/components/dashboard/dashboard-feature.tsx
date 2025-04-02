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
    "2SYWt5Ctx7v743593LQyey39GgFmRoWg79ur4Ac8e2TnAFu1QEdmwT7wt5zJpo87DCz7jL9cULLjWnsQVTCfRExc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e3r6XaBgDbNkPQgpKQsgCPjrMudTdg1RmtC36TEPgiZNrFvn2C3FNiVqkZsFJiVZdKEFwUwy3bpNsnu5cB1UwR8",
  "key1": "3PUVhpYZ9Xuoiqqd1JaQJmhpJ3kQgRL7ynwhZbdbphZJo8Xc1Yxun2e5NbTb5kaghkv7iT6qYTD2f9BntS7c74DN",
  "key2": "4xjg9SZZHcbvQ9vvVJ66NtiuMgSK4dNUB3SfLeqdrK8J96MN51bweZokDEGt7FmyYsE7F5Hivfpdfe7ZV4tPF1mp",
  "key3": "5dN3j8pM8r7tYkkkLhqe9zbnqsrnyviZqDgRPVoCajqoso3GFoBdNigZTJmpdqvSNoNGi8R2rvc9UmLawmfu8Kjf",
  "key4": "3G9kUGgZDcpVSQnaUJqagJswHPJEDS4a77dj2KWL1NpBHyMj64Wx8zcJWKgKQCkKHzqwCY1KkKS8MK1kVoJvXoab",
  "key5": "4iWneEYnY7UQRGbVmo3eHHxafEZaczJYzNCrxPVTWYJ8KjdAFgAJhHBSfy2BVC6qoD54aXaANSixgpc2hDhQM92j",
  "key6": "3dFuqfxWbftGcZgJSqtohHCbPCrGtsehHpwZBtpvAbV3jAMkDWBRvfSVAzTgSt4kWcJA6ctrevzaNrgU3zTccZpj",
  "key7": "b4w5BTtjk3CeAXgLtNaYptqKC4cAmLYTEPgHTxKFo7zzgK3hTXdkirdCFYTafb1uRyuEu57qRYAy1ovqjoSCtgZ",
  "key8": "B4kiLrDS1tqo42u3dwtyFbSEKYuBjWTm6Sk3k1V3PMJjLpn92V9CZH4cZ782CR275Ds53DwLDwgRisRCvHtcvzL",
  "key9": "5TeuVBnfgbsJjwbdZmDPYXDskxDhdzCK9gEG2wiiM1fACZ8x9LnnYVDSZ1EFKVqw99gd5QXNTUQhNVzgwTTT6uAP",
  "key10": "mNK1WetQCwXCGG1tfXyK2y7nMcPW7L46dMg3ETeW1e4P9vQjQj6GrLn9HTPxDzghdwaTRnnFxa48DsPwd5mGUT7",
  "key11": "WrmNwqLhFoRsVtbfTumpYeovftAw8mA4uWD7xSooFabP5cXS1vsQ8gwHRRJeVUxjbb8AcR6Hg8KyWNsACSybYkN",
  "key12": "BPYUsaDfRR95ui9EEVb6wsQuVugsQAyZ4xmuC3aBrWU586JDQhVVBAG38FTnCQZ5PtivXzWUHFXrAU9JWXRrraf",
  "key13": "afQCXX4RoStdRyDuFcd6eQ5c6gaXkhPVT8DiRJm5vyWLus7LD5LLc86KYgU5EGDuo8qQdTtqPxaKp9QE9w3aWVZ",
  "key14": "5GGhnymqY5J4611BrwRM9fKnJzAYAQMpUMprDDnZDNcZYyH44wSr6uwZPtYwGAjsJtg5Zgsd9K8iQtgJFXEksc1r",
  "key15": "4aaT8BuZbLwmnvdo78g66zT4NYs6N9sKLBCshb5Ryyn2JLcGnTDEDPVQ7yKDMbdaYnSS9rVbDbWHkFiBrfavc2BN",
  "key16": "2tw7ymceveust1xHdbVbEjwXxgfqmAk8fHwXiBMrsttPp7chpup7yGko1727Cy39E8YqTh4iCbmEHb8Fq7UtRKUb",
  "key17": "MBa5tZquyDyhHhC4YPwuw1BRuW4CDYaKfbRDQUH1dBSsatchc9a2MXiVWyw34qpEUtW21R5BwiJ3RJA62k9tihd",
  "key18": "58MgYowSrrKchqVhexcrRrtjf1pwS5VEfgaPHRZBKjtF3F9wgNwvDgGx1qaCt1FQRBmpHexn4VodSjBLgCk6CDbW",
  "key19": "dWotruAg5YSfKo3iX13kiaUXFfs8vXwwcX5buPs3bGmKHfHF4Qvh4u8vDh16e2gr9CvBjzFAxWWULoJJCegEp77",
  "key20": "2PHVMjN7faBDXD6otYn6zgvVmftStu9p14cCBLKMTgt3V2zAMVkim45jQVmhziAmF8TUZbm79saCDWmiTQvbd9os",
  "key21": "XJxtJUVzKTWhBro7cTBYhrcTAToSFS9wacEgjBdZdgQGdf8gDVq88tzu6ucwMms3Pk8dHU1xHwNDqPZv4UGT4iw",
  "key22": "4UbjFn32Dc6gZM9twxni5L7phYfxsje1m4JvtGwVKJpFdoyGCMFMvESwqb8fG4heC4Xu1amSX3TZK67bUWC1GK4q",
  "key23": "57jaexFcnEmB5HNBVo4Kbp8XNfefEunW5ZHtS8N8wnAjgXnmZhkWPrGnEpgHysjFFPn6RgNxDMXDjDj27STJpGYB",
  "key24": "Ps4QxfqTPaAHnCC2ieTzgyr4xTk53fXZUJHp35a9QrzvW7Kxe1shhgjwbjU5aS2NXyCF6xe1wZE34PChWTXgcU3",
  "key25": "mnEQQ6pqK6SDLWrUHxiWBK2eHuv3ZwCUYNLNFK9zyaSgJz2MSrCD6F2UxhjFuVBmCnhbgRRX6kg1cN1fhRuefoi",
  "key26": "3wW9HBHZ5SkA3pTHgZ6TxCApGn4bC3enRhmjjpeKmxNhaPMrspoYyHRTr3SHWEaP2Ddb9hsAzH5poMhECCgKXn4Z",
  "key27": "5QjeZzZtDXNTKLbFXkuDYg6ftK2QVAANhaV7APMZvwgKgq3gh3778qyRnFwEEtGgUKNcm4XcaVcyfdEXS5ipwd8b",
  "key28": "628BEmJmHoQQnqdWDxM1k8n3n4vKCgcpcmAEBxBjS6jFrZ5tggxihVTQqUTLTeEN7XkWLTd2v9aZaR1iEGcrb2Ay",
  "key29": "3TJo4Qm753AeQ3N7dhVt7BYV4UDhcKm5BMxWNVoB4DCgMqfWtk1aSYoJoPkrHPgwMzckR41Ccp6v7NUiyiWhNcQJ",
  "key30": "5RXStRNfmadQiXRBKFgyE75Ft6YcoWCrUEDUqr25aGzDw9jxER4VE6s2bq56CEfoYsh1ABRmuLYtoDGDuh5Nw1dU",
  "key31": "4q4bry5PCXXzoU6wZt2aprVxX4v8BvdQhrDh67a3eU2ycZa8MnPcD4pTEQgrwbuQrzN48TpS8ggDvKKNtHAWp4Qp",
  "key32": "5MvYkRZEG7KrByTmDKcmoncfebRdVN115hKP2jdXAm1GMK6N8hMNEcHcNy7Y9YYPfKJdNMVoynREHBxhVPSa6TKg",
  "key33": "3rCf7hNmVsSykeVfgexriHEh8YLcZ16wFaggzCn4pGFeeH4XHW5W6hH4DFCaNYjp95rBVsMuzWjdEy1Fv4dFv3DG",
  "key34": "2bDGcSr6wF4wgTwiwSebfdGEgKHijVVfhnZNtC5vtLY8a3CdpWzSGaQxVinzuoHBxp4GAyjmrewR42UUCk3WSZXS",
  "key35": "3c175XWjZBPyzN15QJ1jNddw44TnuiNZHtnQotK7dE68cscBnUoUGRNJZbqzFef1gScdu4uEHeFochNmomiLnFag",
  "key36": "3v4fHrcuzfhaDWYWF9H56cYZRwq6ee3uM3s5KXWxUKgQiSojgyJ6HP2PJbmazg2nCz8dFQLq65H9YfAYHKPpbUs7",
  "key37": "4tKtnsh5BHV8FamdcXozyLvYHZT5ysv7FBcsG9GGAiLuiPcSCBQyP4kgesArZgb9S8aVFyGuQYVZ31hc7oE7Gu9H",
  "key38": "66x5EStUhVV62uhu9CyE9hYr7YtYatjEZJGKPtUnKHHJrWsYPdkm3n4oti6Nk6RdDUdkrDDE8QR8YtCRuds9Agdt",
  "key39": "4RYN59dzPf26m6fo3kbT3aL4ZdGQrbAq74WqTxo5NK5xUQw9gJzRMyC9HhiCXSWgXC2weocRWdpt9MQMDVKscvuw",
  "key40": "3YvF7L7bDcaPoaHVLEi9AQpnKaiiPkYfcKpN1HswDicgFLxy36wfa4q3czfymf25BVc73NT9c1v5uJdEB5MQ7Wd7"
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
