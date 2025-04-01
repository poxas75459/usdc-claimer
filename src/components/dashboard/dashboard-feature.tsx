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
    "36crWbZsimJRTohshtshdYurxWZsPirnggJm2gFRZXinF84XaDJRmuhZHBt6VtA2q7CvuYoBgL5RtheTcrib28Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjHU71G1gnHNs9DtMqmbYRMJzxEH31mGcHtVjRELEWMBy4QDeQJa5rbvPPnfin9mdW34LAdgXrmLzvDP1VyvRYb",
  "key1": "5QXMR4mqe8JhXM6Xs4z9syzmP56UoXLBAJd7Cd8xFBNLhP2svNFamc5NmJbvjpH1b1FKF4b6xRPKjf5HWDc6HkFL",
  "key2": "2L1qypJzkoUm2mgNZ3WgQuf8WfrKiSJh5yksfZRv1tYd92Tp9uFnhY3PxTU2sq3CneuroiB4zVp5Unt7sDWT7uQP",
  "key3": "5xrWrgBVzq1wr1CgYHQxipR3yVvyFGa8fdSXjTWLpJ4Ct2GDKzQBfJaRcDEuKgXe4vfKw1hvhP7qXiXtnV5adACs",
  "key4": "5TJF9WNYrGTWSJSwUEiRSJbakjyb7iy5whJTWxPk8idtQSDnPmhNKdRM8ze3ZySjdwBJHmYXRmRw8ewdNzZBTJUo",
  "key5": "2pEC8XpvtKjLCUbs72MhF9KRDkeENnpzNX4yd8csSuKKu8kTJWFoByuuqTmNrUPj9bgxFpAxgkyZpWdQqMmd746w",
  "key6": "2g2nbZxduVFMkEP9FCLu35cMajgspuB65Uw1zZSeCNAuxxJrDz1e9WKesXY1NwcCN9rAUohv9j7VE3MCgfNzxYtg",
  "key7": "DbCL8ZfWRYFby3br37BTkmTar6fHsthp2miAV7mPLMpPPrcxwAbSLFiPqRYt36v7M41mttBYeKBFNzUrvhBaMu5",
  "key8": "34js6gG8gV86WKxssLKNHc8kCLQ8FRU6RmfkCfNq18X6iaZ7TYjFLw9m9VkeKadEjPQf7oN5hpSjRGh9Yysz8m8E",
  "key9": "4HQFzhcz8v8yXh6A8gCjSmtCowgDRSfk8ryCdwofQiRjwR4yAB2ryTgaD1qLJd6yfkfTbUfRzCrnfLSPLhR7xkpy",
  "key10": "8yaEwPUFTA5CwF3YPFcecJFYFxF7G3spD25RKTYgqfNiYYsvP9gyGkEacyCwXs9kbEZaUhcV4DR2Y5cXnNfXNno",
  "key11": "5W7Zzx622oNY2SZQtVYmdFDanRu7789Fh2oPFYSCzSW3K68P7x2NPwdU6J2gWns4zmLye54bsj19uRpfwQyTRFRa",
  "key12": "4MEVMwEJmB2uM6ibmQZPMEiDru3xVKYhzpsqF7Ysx4Ebj4xzSAz7mn4BrL6fTYQEBRPFb2c9hbinyCDmTAdBruyR",
  "key13": "4odA9yTU8FM42AowNtG1z7BHvYXKbfWChRHbFdq12M2nitf1PeDPb5EVdL5nDK4TQqrQpApixej3QEyMXwpTGbus",
  "key14": "4hMRxrz5xGrPLNaithSSF8aqZyUAcHwupZwYTs81bEYXQwJM9HtoMr6iYbLBeAx8apftpd6M8PPbd28ziLKsVtgf",
  "key15": "64JrxTjnW89aH2G7SLpnf53HuTSdCk2Q3guHtYGeSkvovkocxVopqGwZMxrGDjcbP4cVSX6U2FUi2wQR3vkMSBbX",
  "key16": "4kztTdWYkLFw9WCHfK1npHfrx13Viz8eY379aH9KKsbDcxS9ni4TEfXUzsX37s4ER4tKRoHjnQRQBPqtopysLSeM",
  "key17": "4dzQSDfwAT9zoSeAE9xQ2BQgDRJz8rDeUMamPFaeygNH3hParwFGUys2PEFfBH1mvN6pVeHMruw1kzHmoaNbEyqd",
  "key18": "2qmZEcs7GosmB4DYbqBpSRJdQzg4eXGj3Cvb39EhUmSc5Qmthcr73Nko6w6zkuYhyN2QrJAMb1Gw3g7FyT2aizDi",
  "key19": "5A6XqUKn2dFGDXLprxKmTMyKzjeEKNTUPRKUnde1uQk3bJauaAqSrFuUqYogrouzp2iY8LC2199wyvPprdksN4Sp",
  "key20": "38RaqK1BSJqNU7mN4yema7YbZJ9HMXwPUL7bELcp9m1j9qTUi8xvTuZJQQ7hrYGsX9xcSuDQneoSPP471kVyTnce",
  "key21": "4pJUN3P9t9K9ZJ4EAfUfh13mRJ8ut9gwBUKfdK5daiD54D4WbP97zwwjVy2a1FPAC9gm2jb6SgHQ9G8CZemtRTmc",
  "key22": "29DAt1yXCXURkbHfRCXkZn8MPDLedoYihsDyNmMJQbfK2Uyu7PrJTenLBkStBkxW1s6xozYmBqd41ouQSx2ooS82",
  "key23": "35bZkvmxZ9qptEsyD3G2JLtsqB1T5UtYEmtMSRM2CCjeTZ2T9SZj6gB6MCiBRa7vZzLZSPn5fss8WMsQang6oPvP",
  "key24": "2BYaLsD7ZobbDzFgBjgzKxavPLABcgotj6wsvWdh8qr7axU3UPa9m6kegcZ9hpLvZHvrZWPrTo65FRzEhS343y8K",
  "key25": "3DEtYAKuWUKXgo6PYjvyZhfZCZhH8afnBAo4XyvqvZzNjk2VgbFN12RYasX72ttHQkktTDECv77cpDB8rfWKGhDP",
  "key26": "3pQBhB5v1AsnnHscyeujNyTqesJrsGfrwhrgRZiVA8WimwZ5wTSb2ePc9CNF3bza8uVUm1CqotxsmbfBKr2rBRoo",
  "key27": "5nNTAA3tSFLVA3sTr8hWxQwUmNM1CyGnrVt2arWPwwSkkn5GFdnTe9No2aJAtUZxLC3WiCFpxoZekbFCD7x5HMuf",
  "key28": "3vg7XdWPwpU9ecuwTUcbKFhcDGD1auXRSHMW8VjijMaBBGJSPKLGh7eVDhq7vSGKPWf5QCQeaCbbRbLSqmpPFUYK",
  "key29": "59NFf3FdoU2G6PkAhi3x6Q7Zw7xSRQYhmWxhiMKo4mWTawUQPcGSjQtr7Lha2xp8Fkfoq7WZKfP1NK33fVNECrA1",
  "key30": "44CWzcXyxZcJCRQ21GDy6qt6a5jPPtWVUz5VX5Zu1eg9KeEBzVqa1jh45jrvNS4y8DpgsdAUsiypVKZ2w4S4XtZc",
  "key31": "2Tat7nFHdW1HQ494rC62D4p3jcVDvEQJEqMBYspLCoysGUwqxot4RJ1QnWLLV3RvvkHRBoxxaYDkUCqyPh3yb1oZ",
  "key32": "4FooYRY2ZVHg4aRD2xSuagtGnErxYT44KGkUv3rJDjSGv8fAeo3JWDbMLy6FdhGHZxSzUqWiV7aSmAQvuBYdTffG",
  "key33": "3zxu1MtHgB6aHs8ea3JyrdWbkCCHttTTfXRQfvoo5myDdEpvePxWRgvxkWhX3nccwZy2ft38GoS1KNmwpoWdB9WY",
  "key34": "4KAd4TRuMZoYq2NSFjDR8MbprtXQuL52zu9GPh87wJBtGTGgxDwq3SuA33wJ5EvqxYo32P2jcwYVErXM4sCeyUep",
  "key35": "322T8E4BkQbaLpbZqNGzWDr8gtbwDF2ioJgwZMQpoDzLbri8hdfMKtwY7pM3xVsY7DkfDTWsxM6agSgAQyBp3mTE",
  "key36": "4nYTxn8f2SQEaJC9DiSipdPtVp8nvFoNgKx9fTmdZf95fA1tUCXtYzXeeiRz84mgweamsEJSXoeEigeV67BZv3p3",
  "key37": "5x7kb3pimzPGu8jEe8iswWF7FQYur1PnJjLtRGkUh6qenCBVftPAgTWVtNiDjG2Y8QH6sB8taprCWjMTFWE9CQAA",
  "key38": "4SGGev1JVXW1cEqNNyBXAjNSYB3qaMrn8Mum4SHKrMEK9H4UB5yDk8DvCc98PMqSkHg75ek9h1PuypxDxzJXX9Yb",
  "key39": "3qSKxjeZYd4KKbsKVuzydqU9XkQzZfFwxieFdP1wiNPRGqHeTrjeePwsR2E92RZvawqJtbJJNU7ApQKDEjvfAayB",
  "key40": "4W4LHAyJrqCjzFmQ9hQp9VJ1GCfEQWzGtqA33wVNFBtiDD5qSfL3atCspSGrkwSv4PNoJvXYsjjxTFMZMzeDdsab",
  "key41": "2v696Mb25kKr69GnHjza3Yhw8mdXrhVeMBWcSs74fdhqUofFunq3cj4YVG82i5TgvVBNDpHKVfA1zGB2GFTezviX",
  "key42": "5AUst1JXTtBPwxFFZWGjDFqGWi6aRen7bEb7sa4k8L4QunWV49UE4WB3VSkqbjir8Mu3PubCnFBkMhcAopm6yJGy",
  "key43": "3zjHDbC7REKUqRW99r88qYFTA4iTN1qEvUVuPVpVMS7iQrKEyNzqmyeqDjYyj2XCu9gTZD3CCtFXZFcPbUq9K2Am",
  "key44": "4ohJ5DVrQ3TKFqi9MDm1RJx4E3Vx8Dq1LRyguDGZtaobxENca8qmVyBs6Ge4bnEJTDhnjpHmW6jqS584konM7nME",
  "key45": "eGNQTR5CHSjdSEr4BUbtm8vRJBUvze2ACrFaJVCdQ22ntpyFF8XKLE9eLrecoVnF8jPMKbfsSrsVa99Ba5dqCVR"
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
