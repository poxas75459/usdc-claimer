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
    "29MTkgq7JkwJBdHEvW6axHGZAzMG5Z8UHHvNCQw6LHm8p9DdwKWXX17hi8PjDXa9q7oHkVYaCLbAA8SmdvKNGzUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eLAcExfG2JoBbN9bF2abujEo79c6aHFZ7E49nrRtAGURuRvFumsQfY7a5X2WwSkpX6gqLfuL9i7HYh6KePcC4v",
  "key1": "3LJPi8Pmiz9K6qiRgHjmevMYs7idqJpwf13PyNuDKEt2ejHPKYXSUdVhaT1njB1bt3ZxzYc2BsTXRyLohhhWAJoc",
  "key2": "3DeVpH9aVZSdCHU8pz8XKYbaAvo7mS3bHZz5gt4FSpWq9PJd5SHcEvLwK1SyFCZRhqtAhBK9rbJ4ZZn9jR48g8Xj",
  "key3": "34UuETLMS6GxybLrUWnU4c7EqcHwTWmoJmteQgwRRfNcqcpAUDusW6kgqjKXXuNZnxpyAmYZxrdE5cSd8e9fcVWh",
  "key4": "2DyS3zD2BZ63bqEU4bgMyy2yGTZetWjY5PqJuEtyAUMYQZMtWAU1221WvQkpZtrXHnFMudP5meLJK3y8Ebk5RxqX",
  "key5": "5iaPLmwGb6xoStpVMWD3owXAmhzTrWr4HHi7t2h5KFEEneeZSAKFVgXn1sF1RkKpUgTqV34AZPuRw8FgXkHsetEL",
  "key6": "3HHbsHBCEQ4v5iYvTTKnCCn2chN7QZMQpogrqCwxtkSyEXpJjyimGbcwHaf3fiGrWuh4VJAnLGiWbKvXYfeQPApp",
  "key7": "2WNtGwAWbpaghRQs1NebBLKx4DeAVFfoZcdz2uhUeg9eSVU1gxWs8x5kdrjY275DW7oYsi3pey6B1vrvoSiAf5aj",
  "key8": "yq2SPbsCdudYA4nkpLmnf3S7F9APVxGbDV2BB2UA2p1NyKuhgAiUwF5LD2RPwJYgZMp4FcU7KCdeV6KJPzVdu6t",
  "key9": "35kMRAcrofCaFg9KM8M6ZpbrZaeYtbuj1zDako2UFpAd1CiASbEJFhrisgpvDsJeaEGokzCmAaouLcTLLhfcJQyj",
  "key10": "3Tbn8PV3CNzs9qVBUWcRfsdezCHSayZDQs13u5RpwyysBhJqR2vtSE5oFBKC3mcP8JuwEDWBWTUef81HkXcom9RL",
  "key11": "59rfk143pkuHCqtxhX19UQwra2z8YEkkQccaeWi6WwMMLsAjbUc6XtX3Wv6kc769auGr6NFCGePLJ2GwZtpNDkX3",
  "key12": "DUK9XiskznkkLRj1Rq7Smfqoc6fVnybBcPzdAszoHRo7a4fRgBCuPZp2ddXMSEmFbQ1YJeaJjCHtZ4oHTv2qUjA",
  "key13": "2FsogjbaBTSp4H4jWKe7GkpRxZCmAgia2UEuK9iPafaVxJuvYxt8zBR5vbiSo3DANP3rryDrCMSKGhVW4ejctft1",
  "key14": "54HLUW2o8ACUCMxVwMyas6XjJGxCRbC5unFSvqytrNTiM8yi2d7MMBsUBh8ok3xdkdpnTYp9eZTSxvpTSixBdLbB",
  "key15": "4yDxS1jBzr5UrqM3DioVppcsAGtqQE3pS9us7f1Z2FbrEd8ihs8QfjmNCCCFk39hVsYpDrvYZjwmDRYecdZZMf2m",
  "key16": "5uobjtUFTu1G4uv9EHhHn1X68DzFZJTDKHpkQwyL9o92jAZBzkcp28hD5TC5YB2LwXfZ32FL4tXgPZuoWdU4eCpQ",
  "key17": "48KgS5CTraNypeVgugq5vD147Sh36itE1SSBkRM9dqGXdhiRstAtQ4imxjxRQxNATYk3sSnFYx45jS35tGvYtFRp",
  "key18": "3jM3GP9V2YCGmqSeuVRJBapRb8CbtyiVmn5P7HfCZVJjV276K6aETeBrmkGKQTnwxECq6QABziujkSyXnv7UiMbs",
  "key19": "61h2qoeaJWUkmrtnd6JkbTa4wB4ArGY1PMCpdLj1tyAoyT8nXZCLPpkKjFu7RbsJsmke79ATQDtm3gTjYPYDPsA2",
  "key20": "3tpZGhYBcXAaa2zRMuFJ6tKYvJJe5eJi8CcU4zPzTwE57SjhRnvhCbBDBWHjvHwSuMdLxLrsorZBRyEvGu8HJ1ZY",
  "key21": "2Zbq4GaroiUH6AGytHY5dGBE8P11jQxHvKQYhueNfxYpXH5EXzUmTL8JJMYvrYWGSqBieLcDfxwAJKXjpCCwJt2Y",
  "key22": "3gQGjcD2VTA76hc4fiidmgCHbK9HrQKVWTck1T4mWpeKuS664DwkMyCWzdtVECk63GV5KYoDFBhBk9J94DvdG4kY",
  "key23": "5SsQrpMwDvfWX61C5k5zz8mAvNuzhrwWsfYHEDzrQpvgj8QxyiiywyEP5pFmcoNKwxy1ukftE3Q4V2YceWXiVAjc",
  "key24": "3E51TNJAWXFTmv3uBYcGGCPpsfTxA44NpmMtbAAmWVsfgALvWZ16W3fXGoXVqXwYUPbYrbTgCCgrqFKBqoGmAHYN",
  "key25": "3nDQ3wmB55d4qrv5CM3c4iRARz22wF8nW6g5LekHLdLCFu9DKq1cFd9fdAusgiEyW6mBDj8L1uYiUHfy44b8A3Te",
  "key26": "321qWeo6jx52WeEj9QkEE2EkoieiC7TsEquqbE9acfYRTf9MJmi2bhQpkoypHm4mUwNA1KLeXNfQMssMqz5EKhhk",
  "key27": "4A4Hg28dSHUzPM1biyqWJwxRFi97ynW6yQ1CxNMpTWFMPmf7H5b3FDsPKBoXxV26QNTEZ9UWARoUNr6G8iJAri3G",
  "key28": "31kV4GrGHFnXhqQqWRpwPAfSyrMg1yK1CJQS5s4hiSnvA7hnPwAoPk5JfDgKRSomcajSiVVTwNYA1g6ZAXFZbLZQ",
  "key29": "VQ9nZFXGfUVWcKrvLSDwB6eP1QsNSQwZqibevoHiyCeWritPBL3gVJHPKdSN7pKWt6aeYyre38ft4fgbz1Fi3zi",
  "key30": "38wkSsBbw85B7jxjDfAraZKYGW1CTq5gvCQse1tJoHNSWfs49oYWtF5ZaJgwc5Qz1fVaVDWjmcGh6BbStGo23hRK",
  "key31": "2H2yZgbyYmAK3k6vGEQZD5468LC9sCMdTuxAxuavi84aFkJz16BCYieffTrVznXtmx8FUHohJm7kUXzh6XKN155o",
  "key32": "62mVwsPAamn4UhrN5PudUCcnDsdjeFUvx1QLSrpAEmicDeQFhqMZGCbZ18obTXmrsAQ85KWmiCscqaLzQUSZyK6G",
  "key33": "3iYwBjfthP9aEQzybkRMv76Ltik16CeMA1QrdySyZ7oj95gV1vSeDJzx2d6k43QWRtmDRL1MY1tkKohjy14EU7QD",
  "key34": "53xfQCH23ZbWk6mo8qSghTLckv3c3UxJRERL81ishvf8GEPS4ubpVWuNtAe8uajTupSxos4U8X5zNp3gEbKiU7Q2",
  "key35": "2BfGpUc66xMzNm4quuZ1NFFR7Ug9AKLtTGvLfVLbZ7TsusLwxVFHT4bH5UhQH3voohAf4Vc6X6TFhFr5NZfDsiNr",
  "key36": "4D4AZ5s7rJ4dQ1pvrN8X4xHNB5kTLm8LJAJ8X4TEkFR3rTFEGwdXLx6gauZQXzb49fQJkQzQtDP3tSBffgzj2PUe",
  "key37": "558eRbSxtCzTn12iYurYY6HLH8SuhgxzgTcyyKQzPfUaF9guBQsJw6iKYdGHnD39y5tGoybaVCnErixPRxfdUUc6",
  "key38": "zw91E9a3dJDzgJJHx6PUCTP7av1u7GZwLdNG15ZBcgs3PEc7QFPdP8jz3d1tWNhR2gsFLQtyHup2Dmrd829LTLJ",
  "key39": "27iWv6KDsqisUJ4Fsubh962GitcQd3moY8b7c7rr776cYFGLh4rN5Xga98Tgo4KB68aYZKPuErYcaSRjrmDPHCps",
  "key40": "tQvCvTFrzCNyYU2nFq8F4HmjJy5fHtC1ivCj4crLfzPRzKLD2ZsWWyxRWBFvrpYfWejDT5z9zPVQNdksY6hXXwQ",
  "key41": "2Q91Jfw1HjgRU8w6cmkFxeg1S3TmMGupuMQ6n4ptXY3gfNTTT2vGqXGyaYkvXUTVLi2G5LU12FA6AJXDPZNJXDkv",
  "key42": "25ecCKZaAW9r6XEwiiu55MsiuTfTu9sZzAsK6pDDmfPgiqRzr7T5k6xUxFEmhWjt98WH2DrMEB5NNUQecckwKQbL",
  "key43": "3kWqgkUujkcTh8t4GM4EvNyg9XfAfyi9xUajYr3Kz1PnoZVBJd25f7UuiBvdojiDHCAEiUe7MHeQFJ8pPgWamBDU",
  "key44": "341B4VReDMoh3MkoDU7uKVwTJwXapYSiD9eqNFiq4c3BZGJYMdu6S6vkvTo1SJfKEiUqNF7Y7EZBNY3yjfAuJvR8",
  "key45": "27EJz13dsqm8DtmCTzqhw8bx6cufaofHVcWzXQk1XUwSiu6ucxzRkR9niG8Yq9j6iYGVEjjBtRHamsndWSFzjbnd",
  "key46": "SZHh1DKdVhCeUhDhqzuxkbHJXZxSH7TQRUV3CW3T95qmS6jAGGnWPxvf3Nkj6VoSBkPNfszkYwe4mNvEV3ZHcVn",
  "key47": "27xkAcNyAvFrCz3AHkxAh1ZGhiAgCpL8mvm772Lwuh4gqBPFZHJsvKVtB98TNzB9s1UTsu5123QB1LEdHmLCbMzf",
  "key48": "5AdYyeLwXbhRTADEhvjqiV6pdn8uyLJLjuzg2Lwn1XNR8vR7uV89ie8gYAwbkgPgL4YuXo9fTzyNmDtAaDi25XWB"
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
