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
    "5W9bTYfXuNKZ3Ya1hvkEYmoNeAMBZiWDrLY273SdnhYC981ZPVysWAXsGpL6o5aWYFo6WFSPXRcpmsah2mDedpew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSF6H58Rz9VAigbo66MnsEPWDEpuvYn9YKfK5ytucy1aCipKwbRxhFjbow4SfNEjgjJeUSCk3o3s65mZxMdTH4x",
  "key1": "7fC1y9S4LD5NLkkY5vdGsfDUwyjGrmvFmHsD6qznhuWhmFhuRCY2KrXnznB3DBfqzjLZ2KoEu1z12GNmh1RgvTf",
  "key2": "4qtWzkPUn8M3f9d6UVKt1t6UcNz389dU7RMZ2MYd6ojfP18fPhoH2GK4heFym1HfucTrmdiPeL66EwtmiyhAuEv1",
  "key3": "2n6ncR6M9vCsfS2bMkwECtPZ7t2goYQv8irxKrqXRHsnoZzmzWjy1SyGqd6NLqsMBu7mYNxSPEFcEBukMQ7Ajn8p",
  "key4": "3MAgS6matBSebx9awrQFm5NE24QZQtXwRuzaksEMNVxpwnexQdEGnmnS7cS85rzew85mRQ3PP8ryNZH7xxgFQRXB",
  "key5": "meLVmZQERpQxcuAbUZTUtr8GUwBrhMQiWiPUjWccfPyDf11b7hSG4ShHAAnuw78RkAF2CKVAFm6BhLP9Fqp9HX8",
  "key6": "5UZBHoAxKFgTyYqCsZY13qJ9UGhUd4Xpmbfr4xu7iJVB7n2AmE5DddXKzqmCbM6uX6L7rTdCVK26MWDAnJZq1NZM",
  "key7": "55VLfFBzxWKqysv365BVxVHSwU8e9HSQ7t4vWzzrhWo2t98jAn3sFx45QTtQvkQBWBaBnjqFAe5iz7tjkFVJnE9E",
  "key8": "2vvuhqXjMRc2MPYsv9UjQYsNrHWsQhPFxkQeVk5Mpd8j1Kwdtkqh2ooztuGSTDw5Xy5f7cg3t5gLFzqfm9an8n9X",
  "key9": "2xehaWkGHGWVVk2pP86jT7CBdAvwssLv7xq96JxmeRAc6ePbtYwoiN7FYcPPo8mxRNA5DtJp5Nwi2rgSUTKKrSAV",
  "key10": "5QxrZAXU5sBVrBgdnP8zbktxsTiKLGNSUSv8qvfiTmPRKSDdxkyJVBiQmZNSu6n2MKiA6M9QsucfhVvWvpWseyUd",
  "key11": "2Rtd8EjXbpTCou3EeEN24HKD1qLbTMGoEQBmJjsBUkB3kNheHLBH1sUrudEch86GczhmZSP8ug4mQ2VymBBuLo3H",
  "key12": "AF77thbLS6XKVevTfmi3Yki6T5L5dMy9UdKAB87Gu2iYMbSkWyNgTWkyBqGBnJUAZpxBQCCdzZ5NePUYVb1uGYy",
  "key13": "QBcTNmWJnsbYNSMYyARAZc84MXLoSVHRnzNDoN2ZNYfEU99s4x31ea3A55x3B6dLwTuhymekd44cAZbkGm5Asht",
  "key14": "3Pi7ZwVokPXFQtk6odNkuFC1drUXFpaCLMXMwcxE2Qo2u3pgmgoGjtX4W2PExhynNrVavMkbvr2D6C8bwBhsDMGF",
  "key15": "4gYJM1wod6Nk8yyrosFtMCmEKY8tCPFjyGtJM6w891CDA48H2B2Aaedrr7E7ouqXu3seZBEqp1kfZdzSDbFS5DYz",
  "key16": "2gVF13wD3FhjBC7QSZYYMBDF6assX6r7SjRaczLYvYX7sy1aMF7RMLEkFcdySvW73Etzzwr96fHiV5bgy8ZVoQJJ",
  "key17": "4PfTaWiVTZuXLFny4VX6xs8sDGsUCvMUQ2RKLPYnB7AzGdHGaPpXKmfm7PVhgoGuaBZVcgjNHkyGpAeVz5APuw6x",
  "key18": "sLihW5DjRM8kmfB2adCLUWri8aXKvdNqLYEemhstqcsqarnuGsAUYbr8zpZCDXpPeZ7iAdZULhnVMP6TX8r8T6X",
  "key19": "3TwSWUHT8VGh2LmBUdqykvciJHyzJG8NdYXfahD7mgo2jJmBgh1CRfijiBxuKFF9pntXP7rKbjwuM2qGmxvX4FEp",
  "key20": "5uAvxrchrH7JDcxpfXCNM5gURFtahegZ1kGEPKz8FVrfQzj1szVLrqTEsXtZTHt4xXxu63X7uBTWmbiyBZA4rr3A",
  "key21": "eYjvcj6GK7enkMwB33kCKPgU1VnDdRU1ziz6aki5vAhKGfCv96rJEJTZRuWM8CtW6tELo4HBHrcpoxdToQ94b1U",
  "key22": "surPENoLMkDhkpzCVFwvGcTw4Hog41v2LHYAQFWSzNs5HEPcWZu6t844L5nhuRQR6s6NEGskjJ4Yzot8gY5s3qo",
  "key23": "3t5ZCZSkostsXMZ3aYGdQhNV517nvNxfHFDwbV22iCqL2mxdKRH147nUP7nHKbn6NKBc41FcjTwn5qAEfJRf21Zg",
  "key24": "2cyU67VdMWcEcr7cDxgtrrfawv9n6Ys9farQdXsEGkvxTkgEpsnRzSVbB3sTPfLC8HVP4TkDTKRGg4Ck2HSpww5k",
  "key25": "2HEyResKarcQvNFnucgt23TktHVQC6LEK89mq5MBTQStK3ugFsncEwL1D1jVES1MUyE58bn5Pk84ViiNQ3821v9a",
  "key26": "2bbc5AseLuGyXCPgJKNDp3wYafXLVMvkGTcHwAAeWUTn5Rx8AnVpNMUTzseY6BdxaFK137ZK3vLagEQZyyG2Xy1y",
  "key27": "2fBXiq173MS7pjBfZDzT21bPfMJQjcEK9XVYsmGeLSLeLSK86YsHecxES7KQTAknoDdjNWfsUP9wY1rzhGMjmQTH",
  "key28": "LmFfXc6wTduqYjwLTZc3ApV8fGD58G5wRTswCSupVWPhej3Z6Y86ki18jSswrfZ1hc63z9eRDUXF9fWqXfaWLaN",
  "key29": "QRyRkJWVSaRSSzEXPPtjfsKNGDBbVczhevza8JFQvyMSnjbG3dJmy6De2rnYfrFcrQ1xezKQBBykgy6o7K9CV6s",
  "key30": "XPBxQBH61tfjc93Y1c6hL2GMyLtn7o564u1KLGmR414cdATDp9isFHx9ysa4hdVhFoREGpLzPJ8BgqJXdN1S1at",
  "key31": "27JHm8bce5NoAy3CMoFoJNLwZHHSSjEyeWpEoyNeSeD3CqAwrqabR5svTCuyVkoKFJ4zguabtk1b6Zm4XUdfyuPk",
  "key32": "4D7nrBtYbhbRYb72EDT1iyLVJYMETNaaXTjJLXoq44w2m92qzJkieNzcdX18M2uj3THZ7N8SDEvsXfQTXAuom167",
  "key33": "4tfCqXzCpnFEsGgmCsBTgKMyyebRowE9axwPAe2PHCZ4cSMuAoqynn153bGYRBwb4GH8iRACeFyrKBEDBAm3JVQF",
  "key34": "2oSigDJ3fc9oSAbaTaBT4BMErxyDcd1UERaDZwihVxpK5HVLqM8RXfRxM6p7w5CNuJd2HTVjDAPj9VHQ8wGUkCBZ",
  "key35": "4B94mA8db1WZ3sgBFtSFufhPBtauB7RtQMkKwuztSf3uAiWquvEHMYBHEXrnSpeJXghVVDAzrzRpBu9kbiqabEnZ",
  "key36": "63Zm7gvzRQ4NEaGXMiZe52JKyixmfN1KsGSDetJA8yaqGmxP85eBst16MnhpiUpW3n1uqic4AP8LEusvsx1QuTrX",
  "key37": "4Fm5LroJkNmQPek9ay2oTJA6ZkhjZdhUz1uakJz9mQG6fm8wtgZt61ywi1r6Xa5MRpLhfEudfJTxA3tHq2my5Wvr",
  "key38": "44ofzvfYoWbtNccas8eg7mJYsEkje3iBdLtg49yQaD97zgvXjef9iy4bu9dmgyefpJjjmbW3rtGLHaBq3XKsLjpi",
  "key39": "2TdCimKyFNjVFeNyWkmp3cPM4Y2QjayQ487NBauPaQPTfsSFuHR9bGRpGTPP33fit5tPaHK8TdhEduCHaxM88aBi",
  "key40": "pd6TQpd4BZje976LpmdV5EASptbNCEUrreXNoprnYuiR6SBHQDjc3mnhNjpZUjA3mWGUC61Y8cwPXvHmPLBA7tn",
  "key41": "26zay3JpB5mL2iyhofNMf7YvCu4xKjZYyKuaYrJDujPTZ1YiBbLMQ82rKwbUb528gMy7StcEokqwdWoVQza5m6Eo",
  "key42": "2JJL6mfAMqz6hMRfCXHcbFsnKaW8d6yiWgrM4QrUCS3vAVi5tw4GaSnz1wQLjgQK8qu1dkMkDUv8x7NMZtSUUBbF",
  "key43": "2WfukcF4T66Pq6x9VeebvpkG2UyiKm95zCY1ULwAhzN8MMEhkaFwADUcfxhVzvukUPndQBnYVUtYcHTuJPxCvSax",
  "key44": "3kyTgdN5MprWyQpGMvWDFrYW8YdR398idTvaDotUDMC7Bc1UbUeSFeRb56vqrZAVtCAM8RYnF9TrBy1HNMLZpmUe",
  "key45": "4PWni7RYMdVS2nRqB1esGbXVpbbWC67uB2jqVMU31cNwmHmRjWNPQJFrTxuozojWLEm5LAu9NhLz7ZNPX76aJSuj",
  "key46": "24aD5KUPd2ZJKHeNtruZxvomnS7vHPxo4QiRpR29A4ypHdyxHh8AngbnfbcApMbdJuLnJEhvQa5CqEjCmiaEBNWB",
  "key47": "5DB4FFLTDUm8fHtnN9zMbGEz6pH6QgaNRvLTaXdsQmg2HPsuTeSJUPWZc3nKf6CLhv6rbwAW2zeWuvvKaMUejMCF"
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
