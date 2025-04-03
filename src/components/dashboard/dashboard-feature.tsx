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
    "fwpPjrdgd2K8wtqTPc2SQz6UJPZWixTvq99ATaas9W5AedBiik8gknXbHgJpU2JckaJTmW3ggNfnhrT8n9a1ku1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfmkjSEsN7DpSxAQTe5r7B7TxYppixagR8joXAS3CXZpgkbJvzHoacnpbNAuuxmRTx7Z59NpW9b39L1DC5wMFz8",
  "key1": "5vPaj9R9XHGTxxUgJiTQNivsUpiyc3DBsVg3sBSpGRC3bgC9yKoN2ZzxyvbTauyP6W5uffutbCCSqh2tp3ovmqdo",
  "key2": "32u7ees5v5mAFZ3XSnjUGE5jyBea8fQuaQk1sWZodxXM9oL8Pwx43VMHK3qP3ykiChEf1FWFb5BfrWUv2QrasZdX",
  "key3": "2XsCcULBfsYrXonKJRCLAKWrxHUjFjMT1RXftvq7hKb5pN7dM5FL7Fue6NdkHfD3rdm49DrG1CC8BFJMQPS5KPmz",
  "key4": "5CAaKPD1bEGd7ahS62B4uYoZN9VhxrUMrf1neAWDt8uuZZWaeAKiy6nzV1bpCZ9aMFQMTHZ9AMHMv52tUHkty3Kp",
  "key5": "4VVKttwUQ7AT6VywFLk6tHv4ZRURDb2VVxciMQob7jpdUsBTEd791FhipMYD72dHcEckRm3XJ4bFB83Rxymk2qb7",
  "key6": "4agtzYbSJiWSKRXPMX24QCfR7oLsxmHyw35ypT9NyBMD2rGpSoh2sxgodRKzh57WBuL9vFyjTnwfHyynsvLm88j",
  "key7": "3c13GUtKhJjALyhppipDN7xMh1tkbe9WWFvNRQNCpyq8ZcJh5VyTugrMq6VMVSRRJ8KhKvVycPwQTLveitiT9v9W",
  "key8": "2PtLWrrhasUdUR1G5QaxJAnyYUj85FCAzCrDB1JL6t7mhcTdmcWkrTsy25RuSdBpABwUPWmbLfVJysUet6EERRG9",
  "key9": "5jX2yASLnimtX7nmi7BwP8JQ5vvv7Wd5nvzTaLTWwonhhQ9dFP5WKxB4mFsK6hjRGtpAdFHppwabKWTxRqnSjaQY",
  "key10": "62rL3g6ZEhdgtmupStPKm6ZhrMH5SvLtgfvnkugnrvrJrPPrysVEwYimGkN7WcgjC7ikvWkiNMNQfUi146yiWL9Y",
  "key11": "3JwiGcPygyo1gcMYwCtPHs9kh5ewmH37LbJ9b9Kqee4ivVzVuCuX1C8U815JDQJkqBpJw7mARf8b29pqNiAEFJ2c",
  "key12": "3qLDnvto2XAbFxPFVusu3KVW4vLpa8HijLBUnGJui7eg4j7LTaVSxSgGkeiwGD35UGj7JmvXgUcyFHsMWgFLJaDu",
  "key13": "5VrXz6GCaCbdsHcdYB7pzEyAED2RoK836YJAMEaeA8UoCrUp6Go8Tt6VyF9UbobbQjkCzpZ19gZpREBcr59vTaUa",
  "key14": "3RWQuCUCtTECXqSg4tnmxZYMHLAMQJc2utMSviTEDWuN2L47Vw6BtfiyYsySuw7NGsSGtCKPmtgVviVADqxtVZg6",
  "key15": "Lbb2njFb9kUqphwbXXfJwmo3q7q6rSVVUQ7Rqp3dn8raKjqVDZ8AEvWNGSPkb244RGd5nLFVhRVP43dcBVHjZa7",
  "key16": "2A2yxdUnhzXoWqQB9saB88q6r277aUPC3sAdHW6T9zQ45tFa8y6x6GpLyyWAoTzASknqcJNeBAGtda9G8hEWKkAY",
  "key17": "iebpNfBsG7CBa4T7LnUowb849H97pcmRxmSbTZemwYghrKyuzPYf4e2LQC3QL3kjGApy1SsuQJo2o7E2WRwZcPZ",
  "key18": "4tzLEZuPAnNYPSYgZMjjWZw34KRuieSuQs2eujBGuoxcx6k9JpLHX7DA3EW4C5Mqr9fAnr5smy82dv6oNRjsNXnE",
  "key19": "4qJRE5NVSvY6rZLv4wZpwY32pZ8PgHFY68Ga7CELaCX8qxRApoYpTwNpqRtNt5S5QLysxEkbZVYSJgo68KwaDkus",
  "key20": "WAPoEiCB6vphUyPBPVS5ydPwwMVeu8Yeug3KpKqemXPDdyLygPkcB3L3j5rGj8Sd2pgoQd2RaBPLKzLyQe1xNHf",
  "key21": "2CSZ6rxjjQzcYHf5pi3Q2wbnTpsn4KcPWTizQevNtyb1Yq8bNVNMuK8KYzwoCuhZFL48LWiWwhKVUeCfnLEJcA4i",
  "key22": "5WbzEEiF68iFeg42RsAQPFXh9JhnFArLjsDkhPg5rtHChpLvmNUgHpFWjjPgfx3YZHcU9qn5KuM8ejf9ZhZhZQ92",
  "key23": "4XisYEQeUM7j6BXkoVZEumgFEttdrd8qHrDcMgLvk886uh6yByBAU3Pfmxh1iGzX7QbjXFFBC9gYgYG4KDRbxcLE",
  "key24": "3PTBiHK8U9z28NYy4r9bW2FXGxBu53CrgrpcM9fst9P4pA7NMaATWKqSgckmVabi5WQW8vgW661FgEhbctqySSP1",
  "key25": "VYi2g6zup3D58wPSy81bYAMuiqwUkAnZDEAxAWacNku7fWMmGQH7fnu7XcfTkpWouzuyPNY59ebKY2PJZsStHQS",
  "key26": "N6husAjkozVVGKCbUxskuDfrEsuc79J8yYgJ3ByNutreaT5Nkwt4njcMuPAnPnTCUQSm4tZLETuLWYyRWru221b",
  "key27": "3ezitMQnMdewWN1RYPXYNi74jfja8yDB48rt7x8BYHy3si8CCtJ4VfcUXhyDepCyhScvx39HJUq2FFqepFcJ8wKn",
  "key28": "4wFBK9Qqy18ixXEDenBHmtAnAjaho11dmfixc1AnjGCFgzSWUnPcbZ1kUPVEU7PQ1wgTQ6CebaSUy67y3NESJbdS",
  "key29": "2aCkdqKja1Q9ZrfthCh7HgPUzEP23yFVC2oVb1u7T1krz2exm6RVHroDHKs3Je1Q2WmXJWfJwMNj4oGUXkzgAG7Y",
  "key30": "2zT5Hh1V8Z5QRMcN6TLL2RF5FemqJEktYXuob7Sq3CGz4EFLrEstQ2cU9L2BkF8E8CS18o3Ee2V9WwzchadW1VJV",
  "key31": "3VWfzvELjGpBS5aKmSGHYKMLV7Cuxtm7SJrCbs9o2SgpqXYDrjbjugptmqnkT7JG4nU6wtDoM4ihgtBf5my488Uc",
  "key32": "4nrTfMuw8S17TwacBCjbAcV1vj7UZPDmGhpZhJVmaifnFYoX39PF2E9HwpNcxhXJSirfBZwvFCW6QUQysjigC8dB",
  "key33": "3aLRXSvcChsj7HgoGqSWKhst4T5DHSxCCda7cAxhDGfZn2fTDZDWMNp8JadeYz8NWpCbnyoKgUj81zw35A7eegbC"
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
