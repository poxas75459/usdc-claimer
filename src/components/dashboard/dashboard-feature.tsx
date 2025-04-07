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
    "5rGQrtXcViziuaVQtoSDJ1v4eaUnWdE7K77pDem9fKW9U5o2twGHbqzTAP5WeM1HnNy4S9nbChqadVp6dEwiiFiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wf7iF72hmJnbmRNSg4bKxsEYqP4LsefNyTt6LpqYBHVbD5EvpP7SXD6VzS3pogZ15XwbBJGPgHf9DVniA76R7Ng",
  "key1": "2VGSp6J1Uds8brAZ5qLNCWGbC6TuMzt5UbPPAomDzayhGtSFgF7GsparRFWg4wihZm1uCVQ4mt5tGN6z7oTfXvQZ",
  "key2": "Qzt9RHY5xKJfuh3e21yR2aV3f6qCabTQ9cCoZnW1ck1zpJYBGBQiycMbzyUTeFdM3T2cNyCmvocX17DhrwuhUtM",
  "key3": "4JkqGFJb1T7V7xXKHP2Rp3o3zZvUefnpDBXYRsJxBdHXmW7KxGj6E37TUgMFbxVnTZ9PMbAJq9NKvGCC4i7qD6Nt",
  "key4": "4oMabjQfufbtzia8iCCT6p6t1Me1wLA3hXU7sqK8Xo3nctqsjhbhDe3nYdhAgk2UJ9wffsukkvT3WHyjAKbQdTxZ",
  "key5": "3yVapMkspBDXtSiS6ekm9pgXRaPBATqtBWPT3Fsr9kPsJh4TRMxXCHRwzdPuVfHYQDQoU6Xre9jT67w8edGN3HNB",
  "key6": "4BugBxhWY45435CjE7UfGiBDX5KmSEmGTvLoCmiULHZwNSR5HpN82STWrQQg9V1jzVQ2aZHBdiLyuEjGmG7ECps5",
  "key7": "56Ei7fkDZTxudGMhzGXmkJMWPsGhGrHqTTddfHSxvAGLfotJNaJ9n9g6hQ9ax4kure9ZrVfi78QPFUB93nm5MtiX",
  "key8": "4wXJQcCk5jSGWPkSSj6GD8gf1pEAh1ywe1gxPWDWGaoygqf3HQACUYp5zSvTFvioT5xwoH6KCPTPmMQzJs14EzD6",
  "key9": "54UxKsiCt9MLYVUqVpxCeZf4ppBFwWMEvvLadSp6twq8md5yf3QGrzekLqDs8Dcw5jar9YcuiB9JZPsLqEHWCcvz",
  "key10": "3ZRBMBTYcZCqXvvYYVUHvHhwuLibAeZdk6zYz5qMjkhbeoCECkcS2QLid2QiBb1tUtkFYJMdmAFcszKFAmpJyc1i",
  "key11": "4oBiCV2cZQGEp1nV9and8wrxcQhoPwszFEJq3h8WSRjXKVZSLpenJfRHZduE6xKKk9sRCLBgzyvkaDWbs4HMmzNm",
  "key12": "51tkNp6nxp6ejDyN8q3Dpwwtmr5dd6VLDFfokn7XwH4r5gXtnD6ZQwi8x3ERSFy3fZr4QxmqtGyu6DUDPVNBRKN8",
  "key13": "MkEyM1ccieFyxZQ8DFm5TjKbguxQHEF5gRv8hASZ7CvoqxfkSEKbYJzdriUazRXBHyvfnzSoxBy69TLu6rrtTfj",
  "key14": "4CyFYLtinTKoR4zjHpjggQdQpbvCt7dtsCtwT5zmwRSBn1aBrGxq5eaHQ1dSESXH3DcZUsAyeK1pC2sHUvWLjEaF",
  "key15": "3XVDxCyKTmC1sfpyTCgqrYtDpcgqwC2ng3fPTonATmVWnHboWGGAQ4JiKpzkn3QnKhCE1PAcomZvbCS24rc1jU1q",
  "key16": "2yt6f31KsvUhHYE5e3QEHmFusHSAheLww1BoYG3H3JomiwdKoc1NsW9JPzCF5pTo3G1ZzPrHkJnY9Krvfbkr23hj",
  "key17": "38K7cP5YBoAw9DD89mxkRvfTkooTfFas3oMp4QjHyAe95kzqENnJbSK5mHmzfnTjNUGwTy7eJ1GEz6zmFxhYiJKy",
  "key18": "53srGr1i4Av8GFm941GubhxyTAqP5z5Ep1ngPrj9GuYRsBsBLUdsJaHuK1gPWNiN4EJGps1j5jhZmcqFYtG1ncx7",
  "key19": "436VjSNEvnSPjDqWtghqKUngtvGEAztZPeShA76noEZKPuRU9LvuMRb1BKkPrPRKukdLXdiyGURGyqTqhiHNnCDy",
  "key20": "5xT4uELXLiRoRd6incvYVYbjN8g2ofHgPPhSXvihmeuMuFDmCNnTQ7FyT9jh9FrModBwzRDFtRcmJo34opJHGeA4",
  "key21": "4Rwop5kEPjGh3gDBQzKKH7GZqLJDEgonk99Uqoejqrvw8JerAMfWmwVZprk1652MStHS53KvusrweNjVe9YYoHBa",
  "key22": "mspvtD9MhC6bTjdvmfakDWN3hb7HKmJDyzCncMReYKvS4H9VBNGPsWTnFzUhDEzHgzDPSVxr32Mzq7AfhNabbRi",
  "key23": "pmrYDp4PrK4mBGQj9wUgkuCySKy5U8iRt1pzrPY3tpKTBj8fadKya7pYcD5PyoZJpqGmwxcZXjv1YUM49rcTXn6",
  "key24": "5HZe73mA5eCLeRgPsestNe1fKYEnmZLaJwVrMiMi5pCNRP63XavbKGPuqAfMST5Ms8N3hq1rerLRwvp8Xt8bfiFe",
  "key25": "2SQZ9kbJoh7SW6v4fDRxqLKzvc9kisE167UqspWtRZSCJWxUfWXdXkqZMARMvLUMN3s3YYQ92cu42dqbXrnNE4sd",
  "key26": "fpQQxRkQn6a7DwqNbT2w2pKHHUGPvafVyQdKFQ8uGqvZAbivQFyp4G4s5K8brhuYXWkjpwcgyRujaj4Gpt3rSrK",
  "key27": "4n9gRr4RpQwA892jTdCkMM5ThQLRqHWhmencpan5KE4QTCet3CWgWuEeJqP4A4xXEZZyHMfyZMymQQzncjTAQx5r",
  "key28": "4qJh6D1zMLPNCg4dC12q19xeEXbWhNitgWiMiVJ4U3v9Xwz5khivWQfdRhvmNNbCEDBPvjCg42Z7xqm1bdXEsF2r",
  "key29": "5cqhDBqHZx1NNkoawNZrX2icTX9nr85RHpFAGwccRA7WMPAmSuUdi5WmimQj8vCBdaSCZY3NsXQMLx938DTkHB1Z",
  "key30": "5X1GGEB2EFUMSRgEfoTW2zSbj8Nm2HxCQ9jYmAPZXP7KHYw4d5GmAfBJ7PmZKP5UqSkhsJXXWivHT5y7PLmbNJBR",
  "key31": "5MWKx9NHCZwCWc885kNoYVMN2hZhgKbiGMv9qTGwfkEgxwMmcRA9wGVTVrTqYFaQiYtng8XhFBs5z5azYaec3b6J",
  "key32": "4Pe3sCkpgodvq8matKkyZ8YNSupSaeguYr6jUo5Qns6FeyuC8sRUDkt1tjsbt3UjXjnQZEoeMkEBKAR5Yo66AXYW"
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
