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
    "PTVb1RXznrCVC3718iqQGbYMVjDCeR2YvzLft3oUyHiyT94FrhhK1awFwkbZN7yDcLZbsqVpWUZJizLmkVLZW7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9wLXRCasnMJ7RMHaYhJtDh8aCJFeRjAWL4wLWvXksfguKQpvvHkhLRtPVYhsW2MeNFQeYcQvcWFnSRmH1qczVf",
  "key1": "4aDC2UiTRaxt2U1AmvajqnVyXBdQAs9bco3M4J9L4U7FF8SLMmCpKsCKekiKhaZLVDXWg1UGoxwCznUM3XETMoQ",
  "key2": "3rWiNeWcJg2xToRqEoCenSMMSR8GfaUJADS4gj9FUg53pp6DXP9B9e71Wp2Wjkd4MrN1WeaKJ3diWfvybBAM1A7p",
  "key3": "4im1LtC2wAE6HwacvKqemHS7rUAJgkq3PsGYwqQE4vih1UCwRRsvKRiDBgC4dGzmE6nozFiNZrMvRo5VaasR8VUu",
  "key4": "2xsHjQca4GHxQyZY9qXNubZTY9aSCiV5Z2HgSsvcsSF6BedTXkjR5qxyMtmkCbbckBeJ6ynMs5LKBNwiV1RCegqz",
  "key5": "3JP8xzdZbndvsQ6B55kDdHVEyWhqc3TfC3AYcFC2LU6zebTrcVKFfnUjYSqSZadDMPJ5TBojXEqCq7ZiQdXoNJnz",
  "key6": "5uotuoydr3yiKrk8McuedSDTsrwFw9BibUQidtV4pNCU7B9jXAPAR42fAV6jW37vcUiYhbPFLutRpk3JtFJRLmeR",
  "key7": "4dH53CujNgpMSqDXfFwzWn8aeWuZWdC8wm9pGj6xok36TuRNw9Y1SeicsBbAZRuHjiTZkZ1PgMAyXmLUMLVFW2Yb",
  "key8": "2XzVFJvCAr6Xtqg6KDaSXvTozNc3CHB6BJEQ33fK7E4DENazdWQ4sgXiP6e2TNWUCydMVDxV8Pjq2kajCevWQfCd",
  "key9": "2cGfGRC86qxKosZL6De9MUnh86bk8XADV1Rd413oMEx2ksXJDS5foKaKZvdPUg9jtrsNHvGX8pD1Bf661hTckgNb",
  "key10": "WrnveFjdp2QksJZ8CwavpeA26r3x4j9UsDgvJ37ovqPyj6Vu7TYieDk3s3nACnA7o4L97SPR58ZQ4mNe9VCVbK2",
  "key11": "4oBn4J9fk1Jrwwzb5LNm8DaUinDcTsoMocdZ5Hn1xs5d3GUv12x1abP9ubjj9YaFgmqdhXumJc1B6uF9QmvMuVS4",
  "key12": "4n56frMYowiSeRaPmmMWx5EvgrBDhanbifwpyEC5PsHjiw3kGbVLSerS6aCJhDSq996Zer5gMuLH72iHeNbY198z",
  "key13": "5765M6gf8XJdQt5Jjwy9xJSN1Gy127muCV8ghDJ1w3CLekgqjLY3BMypSgaP4whwDV6TdRxttpf8DakJEVJRDSvc",
  "key14": "5fkzeemkZUAB7rwNzuc7Q85Zk7D87hokJs5eG5Shi2gx7iYsy7RP4kWeZcCF14GMVzqofUXkQPqX6w6kMrxpJNJ9",
  "key15": "3vzAzFQirWfzo8ALR5qv6BhgJ1Kkyu1DnFJrS4UohHfcnuwWyrtodRDoNmfGSHiSXXxA1btjnTNX2zs1gHncbNzf",
  "key16": "4WgTh1HdeSuXhNRbC9y9w1kTZwjLQi9mNXFmE5Bi9NrXNH4jwDcUvqEegYwvoNFCje5i5GtYGH2d2bWtkHUxjkNb",
  "key17": "4QyUgRJhUXF1j2ns2pHFvrGzs8QF3JdWbqhpJcVM2ddbDVTrGgK7At5Q3h7WVi3oBp8tkeMVhHoQdnKNjQrBHz1X",
  "key18": "5nqexJBkJ8YaUczs8hi3dhungz7D6A6Vvk8cUVNAoKGaS2BDHSivuZ9pUfm4Z2fRF9H7pLaUBZX6xVjdHyb9Cxfv",
  "key19": "2WrLfk85FSN5Mr6L17qWkKzo5yL7b22rdTmoAxqR6rYAmNRPaUQ8f5cJ7ymy8XVGd9G1Qk5hqSRkfBqFFvCPHguX",
  "key20": "3HmivUWEmSTtxRkPVALmXKsXds1LQ7WDee3Y4qrRvcz2RCurHwTqgcCiC4JcDWpHMRSPmVZhXm4cDZVMSkGQAtqm",
  "key21": "2gYtror7BY4nZHEcLZrEsq2rE6XA24vxbyLwQwtafsr3gBf7J6mEixjjjSPHqf5ge7XKrtvMVmu43xeTV99HCAKY",
  "key22": "53niD9QohLNAtYngPvRziZ7cJvvivoHX1oCx8CQ9V8WbqPVzGhn2JuyETzi91duzSip4esE5PfeJYk9H7uQPpxus",
  "key23": "2ho7PUubnYTuEaVtFx8rBVpgB1Hkaa4JSNFPwL9cvUEDCbNeJ5nzE6PLqZighE2gF8EGr6ZKnAWKuF8VqymxdysY",
  "key24": "4YegX4AoM5mxaQHRFG3WbMcmfwEVxYPd1E5zGgeZo6qjyTMbSr9eSHh8xmjESEHekWHqq3wTdbUbbMdtpoQDJg9M",
  "key25": "3ChP37tahpN4fAPSf425aH5jP5PP7uCzv6YvMn5VidjwyoXgmVcZo6kKVR1ymPypxqmquXqWShD9qki8cDLHxKTj",
  "key26": "4YSvCyHAKHUV4n5t9amdSeMNKsxS8S6dMf1jxE9PwJcwS26Hp1wEAsqvDXhPzkML79qbMQEWGnqSsMfuGVYZrfeu",
  "key27": "3ncddaQBuQXmSz6rQjECxb8ksWT2NGgQKBGyLakfPL2MzuU6Dt6JU5BvJR4C9h2bd93GjErTH8REXkJbBvKoqi9u",
  "key28": "2yMjavoy6nGsACcm23AYih9Di4Kf1izznR5PmSYyL2rjfhm1arA31Fq4AgJ2oLfiKegRmJx2WcsAqhU5kV41UbpX",
  "key29": "3kwcrH21Cx7gjT3Aw2JitPN6UZ9Jww98ifURJgkqc5Es2zavkcyce95GZoEXin7U1AQMrdYitxwirAovqoDxnuzL",
  "key30": "41sfEktkA9ZSdo6nfVbrHxcJu5uwUn5DhMdbZyvAUiQ8m4ir7FgDrsi54PDFyhpi4sQ8KSXAHJSvJijxBAffGQEr",
  "key31": "59JFmNKTjHviav8AnDPK2ZScKQphBtKThhRtmCZ4c93bDQo6Cg4Mu2LUAAoFuJ6wMQn26vBQ53JFaEt1sBiqNAUd",
  "key32": "2SiZC9vT1vnhEKjM4XiJLyrr6Q9V9UwmQVV3ob4CGiynaA9aJcY8hvqdeELoemppwBeTeDuwNYdTPzSQRMeUz4fn",
  "key33": "56Q4Zo66DBWd5Q5KQ82tUnD3E6Co5fcLeYxB78Ct6XZUJHuLcUpvuTKsUebvyrXQp1iJfVJkQR9ErUJBioL9PArB",
  "key34": "4qvUhvcowU7WgsTYfqAVgGWV8yv1BmG3yhXW51TxNGcSxekgQbg6xeYiXAmKjq5DaodQbZkoBDMdaD9MMHUiqu58",
  "key35": "47ZjgykDYtEgthkDqWxVJNxW7x3R3yuxDEKC8ieRBSbZUj1cgJMDiggmvxUkQdfnAENmGr8opzQ591G36egTG8B4",
  "key36": "2UXrj9uzod6fHX3WvQqUedXFXBVABWNHsEXCkUUN2PwkAJfTtRHHqkNoRDwfckmBfRcsMmEDqBcE6RYoyuDba4ZN",
  "key37": "2qg7HV2pRHQQBBBwh67QmwH1kpKYkaBjZAwMsEqhx4BnMB45DeHgWrFgiCcB8s9wdudyYjK3Yf7VXN7PiGTFo5N8",
  "key38": "5wz7z8n9urFdx9nsKgZ2gUUbSgFZPKdYSXLJyNWXMCpQcq9uQU4VZdrcPm7TtvEWCiHctnkVcxNDYAd6q2T8MFAm",
  "key39": "5NBLTpLFy6K6yr7PCAjpBWwBzDnxYt831KsE5Bw5E9jqqn695WisdbsQ2MrqPsZZKAg7AcACTmPH7UkvbByBCXUW",
  "key40": "5GgY29XJ5YpZLh1BDtWXDk6DsfbPXw44MnTiefQ4MKuuDHhMEEtDnvvU27MqpqEuPaMg8MqqbpTkJ1m8DWAbRGcA"
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
