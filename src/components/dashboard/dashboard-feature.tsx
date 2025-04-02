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
    "43PqqFbXbGD5pB3PT8Pb6vcbVYRLK7tmBBNaf3ZV5eMUD6h8ZkbXyGg8wLeogHMXG6CTV1LxvhwpUrG9mXJj23rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7JJPWGnG5dcRJgVq8mt5Eveu4VbLTBCVMeqqdhTP3v7Rf7oULpSLS27txKJpfSaHLEbGqnbYxYXNYqjVrBq16e",
  "key1": "562qE8DjwEFJj24TwwhFR1xHG52CDUNMHzWVB1UtLrHNswCcMLwN3c1aeBq6Tmd2h2VZ8EXcAVtoY5LnuKb7engC",
  "key2": "3ZDNy8xnbJUx711MFDuncoP3KXhK1718e3uhzFbAzuSHEwWyEd212TCordTRarhYm8MBBmcuVCmtFJvUuoFC5R2T",
  "key3": "4W9Duf1euaqQAWCjHZKD1ePUjVHuQhoFGdpXHyohHQnmaBPwugTcAbc6KqB36uQyGLsCRdkFZdtyFJqQJxeDa8HL",
  "key4": "rMTWatDyyNq2NDM7EUQCDqeRbEsHQhTgGUAyo1oSxNLavBeyeVYifamkmtduaMRdjzD7FspTxL2mc5pNMK9LjWa",
  "key5": "3qsY6Frocyk3Sr1kcoivBjtRHoE9ZeQWXKDtSBB6NJgy7pgWN4EDMARN2HWPHu9itrREvBTSVR6jut7ddbrapaKr",
  "key6": "QbnsgVrAzTJqJLUtRi2dMRSGWyQB1Pt9cdKq6fJtQT3pSP1fhEQeCMnqchQuggQpBakm8xWEkbuovKtqVB8o7aH",
  "key7": "5TTqxXD1MHHEaCroenF5yp3FjXV3aap44Jx5ECpXKdeykDFnSPeEYJeN6Xpkcr3kmyGTfS63WcAZnWoJoyr21irn",
  "key8": "hW9XCPpFGqbKxrmZGfscpP5VV3uLFGa8uu388MqmDdCvNHyzDgRSjCEQJ3peNU6Bo8okbLJs3PLbyj9fLRSi2AY",
  "key9": "3aKYkew4MYD89U483gpCyifrFYSVA9Dwg784c5umtZZ69q9JsE8iumHV1xcpsMv51zEAbPPGPnY2X4GmH95Nuu9F",
  "key10": "5jeot5JmUXwMEQNVAUEP7rFs5dHTc2Gpmf9CoNwp9Mf7nwhPsMbMA2KDYehstybS8xt4cVdemjYsGgSrSygtAXmZ",
  "key11": "4E5aTCNMjkBRd1af3Y8MwLjd7VCc9HACVNf3nzBP9W8wJMGFXZVvp2ur23LT6T2xUeQkUYWKnQd11DHtLCP18EXc",
  "key12": "57s17t8P5wope2ZKmDtvXN23wUanqJqaNFXxc7mg5TVvNcksy5nZqhcDXPTnd35jDcMbByaMHDLqsHww1x3TDQpU",
  "key13": "3DpN22ucfhmkryiqaDhrmh3JjgqxVE97A154F6BqmJfYteeyTuFXyuKzPshTkfyqewkuMZKQoR3qQiz9D7ZJ9shk",
  "key14": "YWE6iJkvPBmwnGZCqcp4L4fTHyb5HcjoHA5D7pwCHLPPWqm1mDgvXixKoEmdPpAwB8MFB8FqYC8ycFp7nG39XKY",
  "key15": "4G7r4ZggTboEbnVdDsDoT6Ri943DbvRbDpGcsZbxuodQdTYnZEM7BPZQoahKrYC9EhkmX9ap2TRoCG23X8bEw6Qp",
  "key16": "3rcTwg2nJx9gmS7JbVPgXTsTmFoDF1E7jeinyrfSwgUHNHRPhRVU7apjAMyaCURifoTZwcRWS6ZxNfUeZfwDWNBX",
  "key17": "5NjkgdQBe9aCVmmapVia8wHabfJFw79Drk5NTL75AQSSx4ndmUMsk48iYmmdUPTP9R3BCHt3yYjZNLjZ8MJizfGR",
  "key18": "4zv21WCxnv6dvrFKU8DTtraqqBZwU2d5u4Vo7KfZB6m6QiQJqnWwpDYnbq7dbKosYjrVpLZ4YHkncdeMmNVT1bQM",
  "key19": "mt5nGXPWQo1SJhBX8MuDjhj3dRhageW7H3ocrqYvyNhzrD61Gh9ftTArJkYCXUA33ozDFkArcvhBbuoArNADY9u",
  "key20": "5UeWLtRGERCfjWGbGeFUxSZM4UHZhcWp4xxHq5J99DfXutEfUeapJ5JZGmpNH28hhxTxJunsKYWxzDCCoNSkmL8C",
  "key21": "54cgRDYLgDgwskBu6Du6pQb8vYBbASmj9vPmNwB3YpHZDP1y6RwkPtZLtpYSNePhrmJPBWGt2kst5yzENyNtbRyi",
  "key22": "ax8zFstkesAFXJXCZEhXm11khMmUMDy1ZRKcNkLZy3Gpyg15P2mMrVfNdcQ21UxsSJ6cZ9vJnwcBTb2VtL47QNP",
  "key23": "25fFVK8EZ3EwnQcYycfm4YbjJd3a6PFN3BgrLvFHD5TxQGHBepARYSeQXdxB6LetTPNr3rJhU2yau8cE8CzL4S3d",
  "key24": "4kkFYg5cZEboqRMfVsteN7FmrfjortqwzXbJwHxPJbB79p4UMgP94fnhA5zGRwkE5acTvndArYf7fw5AqxQU4wY5",
  "key25": "2df6y2CxGq94YzjsfX519hPmSe3CDc6HwpfG4khdcETJx57umJ1sTnNnyHRdsNkR4MD8fWMhpUQdNoRXDzaWfLop",
  "key26": "26hoDBGhPr4y17j3RZdTMuLytu3MTA9sjEnpgz8bBVKjbD8NWvotSLRCXs1frmBQZPFCmb5MubrtfPVu8JGuT7aj",
  "key27": "ER7sH2vfPYtY84UkUVKbqVxmYWSYFySG2MT1ZV6cRGaNqLVFRe9y4BvLq7DpqkkPw3jiCPY89BS5gCsHkLTjp9y",
  "key28": "5HCbasgdzormSYCWVcsZkPbbA4qWE38zDcDjXViHLEhWnKBCMETqvQgyM8ehb8giRqZB7m7nvfL52Qx1TSMLkrhQ",
  "key29": "5ngSisQ3SNxMJ1pxcDfk3A9Xw5rfeZ2pqM14ZG317zFNzNjGXVHeU2xbSViPQy3VcxDEWXjVJc24AWF2RHRzHsYf",
  "key30": "rBxDQMxN96UHzVkvU5QK7B5gwQ5WvzPVnyE882jQtm6m7uh4AbB8XxKFBQGqPwx73hYDqT9kRSDVRpZh3EjfSUp",
  "key31": "3kNoo6jirTv7V5VTUzngvLEsfHskAxfC3SVxXZqAhjtHfnJbxCAxEwPQc7xVAtKuVhBWXYqu8UEKJS3JbaLtu7XE",
  "key32": "2rujVnpVVRMFApFVzac4pNiR9YJbXJTZA7z38Bya4vKhX43Wk9DWtNpTATPEHuNj1AV68c2VDQuAd7HUVZQnwzL2",
  "key33": "4YJ28UErLfLycnxMbar46H7PjiTNgTyLuGEN68dnZJ2Q2puzLo2A1pZEZvjbsjyRhR2GnBUYq3JDmsPzbUh7nz3B",
  "key34": "3X7tVgZDG2No6qNJ8SaQqa7VXpMGr3dqV4TBK86c8uz7wxK5uJXLnH5GNmq1TCxcFnveKde6yQRkqeQDjTnVX2Q6"
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
