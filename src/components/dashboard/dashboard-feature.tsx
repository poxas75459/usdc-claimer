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
    "28PjxZFKLT8gYiemQkYd8ipPhnUwPeFBXCk5gc552xTMZy2r423vTvaxLB9fWXTACKQ1VXPQmw4fhkuyNLptFggx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfWxhMQovFjEsM1ZfEEeiTQkdS83tBcVTNnuQp8nLSbXfmjBA4nasvSdnbvTUbd1XomBwrQxaYm7YDgrxQXe6i3",
  "key1": "5VBbqfDLmRSAuJCxhMNYfix6kWCfaxekzJ9XPDp2BKhKrKnL7bJERRiKfCiey4oUGZEyB4kJwxVottcdMB3WmKpC",
  "key2": "2iNgx2btZBiLoGgVDS4wXMmtqzCGRs2dehGFocoFHpvUpR4LV1ckFYDSqzYKC6xm1EpKbi8NjcpZe97PD1jtneZU",
  "key3": "4VwKwB6fdkCfACUwveJNfd8NnCbKhECjf1bgBq7kDd5PJejpzWjWW2yyvihkQ2tmHjQNwokM7GVakfxLcKf3d52C",
  "key4": "624ScMnGkfsiRQQ5d5ShL6gGfG2yh8GvevhAGSbobjv82SF8a5XYhFhxaYZmUEu8aAmgb8Sy9rbFXtYbLqBonqD5",
  "key5": "5n5ut89zF5rDyhzvGGZkuiiFgCeAEGTTASB7oU8B1HSnco1EFEJHLa1T5AjZKY8BWAyFEbgv54bnpSnCqFUH19MX",
  "key6": "4vzdyp3TvgQGPYJ1SdyZbWfvSFqX4uJHmQ6ETTfhbC2QGpuv922dybs11srxzsGjb9LRDyJXrGdbiSMV3S2WM65x",
  "key7": "C1UbpE9KU1sZZBZxhyMK9y4SPoVMnjx698qRvX2kcS3yKrAZmhyNxXwWLrTZrCyFcTaFiRpskv4isJEdvdjX8Mw",
  "key8": "4cG1HjCMGLQLMGjRQqWWqpJqJah8WGcAoPyUsKsyWwfPJqrhZNwhsCV4wKgsYK4o42bG3cwABvJ2JGZo45bsUfmS",
  "key9": "MrVePek3o9kiuFYfHriDr8YiPcTjDwAKNCDnzh9FBYxzxXPPrES81u2ewFjceSMx1wTTWetNsrGMNdZsE67iEZp",
  "key10": "4XuJ43QWW32Ad5gnHN5NqC19Pb7ZT9MH1GBf72W5VmiecUhnuVZawVXiyaSkHHQEKsyk6Bb51cw619UbJnwYxa87",
  "key11": "ignTwf4vz8XdYn8bp3raguTrTLASANqVNbA9UUxKchkQpSvxvVjy5QDKMQBXWBjds5BiHefRFpRf4kTQbZTggQQ",
  "key12": "5g7PDxTDdTN3ZuaRR52nGdZ6XrmFUDfJ4oyMT1GRiJghJGiQQquyuLeCukWDwQ2gijkJtR7pXcsnxxtshymc9Y5y",
  "key13": "59diyDrjywGy3JrMAjm6ikHu1ckLE67qfttF2yLdiAKjAaGrfygJx1dzEL8uU9DKbCgELmgy68KrnsboMwHEhUU6",
  "key14": "4kJt1wyu4htStrRShj6KHtCBtFeP626YyNa1pDM2AMkWUxU2yGWZdSmfR4tZ7eSV95gyKW839UG7FTzmqxYbPmE3",
  "key15": "2aBxu9pnRdEK21A7bjJbapWbBSLfT4uDCsapHS7qQX4hXERK3t5DkiBSQF3sVsyArgiWf1zPR8HcfDYGjEPbqhZz",
  "key16": "2aXmSB51vt1prjvB4HV2RhUvnn5p7fFwToCdjumyfU7LyKHRzpmPhwmy64J6kFxdFw7DpDnK3okEnqxbH7mVyqgU",
  "key17": "3UTnNZfqUJYNJgrUEshK4yZcTzEs5ZBirteitMzoLKpJQVGL8YEniPzDSBxWQSCGJWQxr2p8MHJXWeuyNFspmah6",
  "key18": "doUFnT6axyetJYzdgv4yyDTqfzSRYUzDVmevMXwPan161bNaQBZPGTw6BcD1cRHWbaxvbMEGVJ9EfxzMWerGHgg",
  "key19": "ZLRfo2wiTun2aeR2HCnJEkKSQFdukb1gzgUPpuPKVfAqNiaLmrKPg9sCLiQizcRkELRAb494gWpsLzu7nnpJGF1",
  "key20": "4M1YvWxfQV52oAj43qqTyu2EhKu8mg4oQ9hvdc58F69iPL1XESaQwyxEKEJASKTUEmdVs4J2i4xuhMVew4WB8akk",
  "key21": "2MB7aLq3qbDSbY5hb6YunRgv9dJdBpE2UagVEiD3896PnHkZYQnf1SQKpQUdnguEEPK2DRDEe6ZyLc2aMZwhdXHG",
  "key22": "5wTeJLNEpNeDzJk1i2L2rsTCpoXK3cKQDWrV7FTEwyxVJvFy57oBaWYiLtkjVfdm31fXV2tDrr1Z9615f48jUx9Y",
  "key23": "557QC66YgzQiwYDPBXurHuvZvenj2QKWuXCDrfWmCEZNy4SX3SwSTEuoDgn9g2bfg8KtAF5F6TTKpFExWGkC8Xfo",
  "key24": "3enPXzf7aPFp1kEPAMsZhnHX6jB7WPn58MKWMWeGs1u6fBZpXELCdVmxij2LwxEfCWzxmZP3WyoF7cKKizcwGoF9",
  "key25": "JMbBcNqDkiQv8CcpMzEkdokKx1c1tNUabs6XNutUwxhBoSU49fXNmyhBaRGG85pZ1zP2pBShABdsUH8XSLbk5FN",
  "key26": "2hrDJjpERrNRrxK2qvHrjK1LiqMsf6crWR9wmgB5G4EYdYTGT6UzPG3fvwAHaGktYoaJXMxCYn8EwX5WUfZvkBug",
  "key27": "3X67NDH4vCiVY4mpPcnNGdzUf4B7jQQk9GazQqDqJiqBeED9B9WKK5bbUsK1WxTzaPwBgj6iarve7Ca4u7TcicbE",
  "key28": "4pcsuCehV4L6bctQqXxM2YiojcNR1t9Yf3zcHivUbX9Lp68wp1HgmRCPWb5TcRkNguWFHyyRF7zpnFoKpgaTvqYS",
  "key29": "52h4ZGtnsTQJKApmGMFW9EHURimBxBW3nakpEPvVHqEiwaQUrPQqq6Hyn8KvE8X4iWo34SJ5RqoaU29HdB8rDibp",
  "key30": "MCsUN9eJr9ZvHjC9VapNLJZ9SRdgxuKfrtw1w1igaBo1gRmGrirAZ3pPtULiLPksSDu8Qdgp7PQAwrXsUXSwMbF",
  "key31": "4H5BfHPVGkb8828X5EAWSg5kT9FrTCEKwpoHbHaLficAqJHAuGgjKhN6wVrGAyVVPs2f2AFTmDncmi8HJk5T4Fhx",
  "key32": "2Y8s9sSUQY9WwLs2nufaAPvbt7LfVNyT3V6dYKiSAgvZTy75PNDHkHzbpN5GYjbSKXUFjnitZL4i5mWJRR2zi9Up",
  "key33": "ymBtLtaVstpkVDEVcNfPssCH5QreyZaBBTgjfifEnYQwQZe4Pmk3DRy5ip9UfE6b249jNXjTecspD1fRXa3fpGF",
  "key34": "2gM9uXMAvDHMXFJb22Yp2N4jNY5jxhafDQx4JBEoXBo3GPnMD5ri1g62E61yas418UnZ5Ui6c9YoKPpppz43txn3",
  "key35": "3QB7sfdbZ8dB2eAEqkpcVNztBeibhhFTcp4vbrzzu17Rb5ALx7AL3sFTaLP7978aDD5aVjwF6hnnBynVRbyDQ9fw",
  "key36": "4V9QfRApRj1XnNfTTbYMVNig3yoNF66nd6NTRx31VgJDP9WRRweUkKJuMr7qf4HAKppFcLYdJDFWe7hip5vTNEaC",
  "key37": "5gPJucXrsTBFWcU7CAtUmadwPEQxfFsyLUsccAexJu53QtYAs8WE6SAdXTVyE5sPzAeqXExfM2tLWN1qfZqHv1G5",
  "key38": "4BAQ8zQf1xdKB22WjMSkU7y8njN4uprmEVzaQn3mfW9LGdq2gWFUgki7db8cXHtCUMVPQmRkFqxy789K6YktLAzJ",
  "key39": "5RfZzcDMzjixjynYA1SXuqznKa497ULrQ1pcsJQtNxbW8PtUQHYGZ7y2cVdmVnHi46v9euQkx4SERhhBvoHzBEsJ",
  "key40": "3SrQGQJXvZUogM67ZzNnteH8XSBJ8Qyzr3r1GxMpoTZYxsjJF3e4VCQdiSxjJ2EgjWKPmUjrrcAZMtm4FJwyTnm3",
  "key41": "GYh7uZrNqTBQX1CXR7wrrgard5SuFSTpRC5y2EEvLaRbq9znqNnroabMFL6Rp3ixG684RU73pP3woep8LcGcB9X",
  "key42": "QxqgMeuPZH9rqh7g9oGKxXZvBvdFKzLVLePh6LCWf4DuPuYa3TZRa5676uHYNHCKijQmBNYzoccM8RfpQDvkxYJ",
  "key43": "2Wwn1Cw6VGLbKd2MW4qS91YtSQKrpBhyRA7VrdpUrSTiz49kpDWV8EBXN9UdeRZ9DAbTpBGp1bsnNAUkpd4anxCM",
  "key44": "3eXEHRDycp5hWWV29BZHx1B6XLKpGcXE9Sxb9394vnwvqQkRFn436svaZA6vcGKVP1WCGx4DeRsoXZhajWayw7bY",
  "key45": "3HnJRB1yFCgFsBiemJA8Xpc8hcsT1EEKwNoX6bFufjGj6uBkvynHkFZAbFeNFDgxnjS884WRrVvwHdhe9ZfBMnFs",
  "key46": "3R2W9TacMLVpRVfKA8tgxz111ty9UYVwXCdzZhWheJgB9te5CE7ro86cHdKrccaMQxsAA3iTJ1z4Zite9HmwMqmT"
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
