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
    "5VUya4ygR54sSxTf3VvuPpFc9kRXg7vjpL3CGFRL1KaZ3EToHSLXQ5mQgPbtPuiGD4nWzYnLFfxrN8EsW4kaWCx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPNtPqKEGriSxHN3oUFgQKtti3AyEYup1YamRstUfSWqVueSZpKyy1QQLEZWvdKrZ6w3eNYSA4u9ZwmyhTJtD5M",
  "key1": "4hCLybKcoWrCaFnNrvyhBC8xQ74QULgSH9dwWodZiT8zYY4psUy8FFuxmM69Q2MbeWmfVvsKcrEjWVapESvyKijS",
  "key2": "dUs7JpQTjH6AJU4t8akzfKhfxiaj2XiF2hWTyCFYScZmuryTYQsqGPPmVCr7ji5nSeu9gaWgWD7uDdrWYtG6KiY",
  "key3": "3u27YUGYNFUzPjjUryGK4vKiT2vtHFYJz9NagWhG93jFNE5UQfehx1CMqqnpmHqpfknHGqU4Br8etKh4d2U2PAdd",
  "key4": "5jLG7ouSSyciVVnjfPaHvpWepEEhxfDRzZMFTga8ydabFbbgLDxKBQEAv9N9H8QQ33K111kEwrSgvTtscHULywni",
  "key5": "62D7rCYwwzy5RWLmMiRbVCEKUvGMmr6P7JNmkdWfo5QWBG7iQ7e7kteyjfEmRjnaXqDuD3DaCq3ZXTDw9h5TaCC7",
  "key6": "25AcYZJYVDExezyPDGFiW4Dw4AmEDb8rfqPUNUgVqC8TgSPofiB5HVZgh4tcS88ma7hZFcVB28i3y4mu61JqwH4R",
  "key7": "2tVwP8ViQhmBFUduieRh5QadBCbbE3DJVFznQhRwYuhJ3oLZH9h33ntd8j5qYRJxzYMAiKVTRbJK7GgxxCYXpzCc",
  "key8": "62MQtG36pJCpEtwPM5QT8WFVjHFa9SoWTUAs7eYyCfRuQCiUmn5oTbeR7RoqmSxxpHgqwkC9EUniPe2kTAGjARYY",
  "key9": "V8vwDi8WTiXdbqToTjHQr9oV29Y2v7e9aT3Yn6pffHZiRHTNJBs2rn2UBknL91gXpLK4YSp653iNok51jL5sDeE",
  "key10": "3zytGUzVi7w49bdCemW2ev9URpBKBM5H3QmzLska7y5oCNcJkn88DZxxhfsNniWk4g8xdsQxfchVNr9qhNF3dXyA",
  "key11": "5VkjvWTt3MRAiPcJkuf8zyKUQ1X3VzvwNWDCRRK3TuKvDKqMBJmZaxP8eg1CbDtHEj2ze1ejGAB7tePHy6uYxrLL",
  "key12": "4jaJkvzdnH2jZ41rEr1V2Du8PjQEjdjRbRobbPwrR5XusFNcXn2BiyhDZ3XEPghTKYB5fUrzTg2cozxFvimXepWM",
  "key13": "5CUBLBfu56Z16TM4sfgJst9HaTrx6AHT3cVo1dXyNPynmdPG7BgTRT96D4resTnczaKddXHvTd6sQBoXT6ejG6EX",
  "key14": "2Sy1ft4p4dm4EmqpiwCug95nkV6eKXqL6xex8jWB4yCVv8gXwiuEnHdjEQPHanD1HajHs9tMNFTjQdGuhgu3atiX",
  "key15": "4ErR1LosDpAPWA6noXNqePVcosQ3tJMjrL6CTZZEHmgkkGwRAXJDefRnURxjvidBfTyL7D9YJRo8HzJYkvFffUtb",
  "key16": "46hht6M1P9ge9o7DWvaGykEVzapUU8AXqBh5mqmpnkbzkGfZNR7bsM4ddG2hoxdGSM3x5noYmoc3RWrroYebzrWM",
  "key17": "4ZfqGXxDEGa69jjVQCiqa4Xb7i28GCPgq2Bs5PQjxCoHqz9jkMpYsAaYDgDw8dQNgsZQgkNGWB5LsiM5dGKvYQ58",
  "key18": "51F7vxZcg82VescbdQzp1kQqAQJ4xCkbWzv1Q8BgtmxP5kjZzd6NQxVWH65TnbcF4K7MDxDhxRqKGt76WLTPR362",
  "key19": "4AtZcfZTYEFnrk4uvscFWKcTSHdcDXaum6exBb5h2K4YNtiUjua35Lv5HxHSrfQBBW9SRUD8sJDpemUdAngXPobU",
  "key20": "4C996PCE791WA4UgYUzP7NjLi6Py3nUWPhM69f8kq3WXiySxSmCxootGf3zNe66W76qiAvERmPShv33jJeD83Uof",
  "key21": "HijFLChFs77hbzc9uyDV1P4hMBYQaANiqM8p88GcqNcFhb88TMsJ2nwvdPvrsEGrquDzbUVkq5L148em53utjvL",
  "key22": "4acCNQUfPtxyAqsjrwMrvDMfXygdZgT7a5ZBS4zeEHf7J2MUmBZziqe59WBHWScL5FUnvsPqwSHfF45tvqrPdntH",
  "key23": "4D1KFvBm9oGmxbjNZVGKUNDGgS4EQkucs5sZ8UubTUzkZit4ufuWdZyCSCiJor5sDw8jkdsoLsWpgsV6Cx8Gcjvg",
  "key24": "4RvKhbDSXJ1Rj74dbhKhrKK89He7t5fbfMuXGMRtCtVahMmrXoXGSTQdd4zv6bP4nXnnVjR2KQbvtsiDE2nxb6DJ",
  "key25": "3eeh2zWJVMN1U1hiows6nDZyiEAZr8iJ33f6PUB2x3Mk7CsfLsjAuYXfaXdpwZqQUrHCkXZ3sPXX7S9SERasXyYB",
  "key26": "4f9kc2dQhW9r2K8vCbkt7XVVBjvpVrNkKEapxppx9ZxGnhL5m2yKjskBE21myLWoEZN6GFfLdXLKP8XNYRaUWGXH",
  "key27": "3ADvvR3ew7Y8v3NVQYeKzTk4MSDvTjvt4qG7ExYD8mh2ccYsusuhDojVVPeVzTPRcwS2gSZ4oosnNWcH3vaDSSs9",
  "key28": "2F51bT87P2jJ6MmMA77TquF5UKx8XxPAgBwu4vvdRVj843tAWqKcbkV8hEnT8apRoc7i7dGKMSeJ4pbrTDHYyrKt",
  "key29": "3y21BG9bT8FSx2qwrVbfAFnXbGUcEUx6eUQVr3pJHZoWvx7AfrKsYRDxfVYFyhps7yy9gYkFHEV6pE69gNKcNtqd",
  "key30": "5P81QPuhTqeqNvjDro7xMB52XKQzJfptufFLWDoZdkpEUwxuiJPwsNYVhjKW7ithPYGs4yDj3VK6BuUH2VcvrF11",
  "key31": "EQZXoTbDEpkRXkdjk3uvJsgf1ieVNVxb7Ck91LKWSup8LA7iqZdRkAGG85VpTPbmtdFLpYwAMxTesxJSKYWbo4W",
  "key32": "3rz27jpn1u9q7zbxGbJQSCVZccAXYVSgyYPydwkAt3bkgG6kTwxvwzBX2bEpBBSNyeEBfMCbU9NEUSZZfjp7xu4B",
  "key33": "fQVb7np5bENPkmX9MCGjaMT8fTuzbptC54NFApZ41nZzXVBkEiRdftjay86LkXY4eDjw4dH77876zBmcjsuv5Kf",
  "key34": "21BAyQu5tapdm5t3KC6oVZfy1p7qwfMecbDvsNEYuGKMNLVSZdCxNkcYCsET8DihTCPvXuUxHwvteHxneLttKoDz",
  "key35": "34dCcPb8DoGgjsfafg4kmZrKc5ZdQoYpsEe1JyhHY8c46xNynmfZVKbphemC9eBtcG741LmTfkUMhKAXw1XbgrRT",
  "key36": "4QkMZd2uGJq1ehmf16wrd2MWVXV5i7bea1EFhCxUjcrzA2UBCjPfSXgJB9wVZ37ReXpgoTYGGwx1yQybGuEJbuC8",
  "key37": "Nituhh99q5XeXH1Eou8YdtFxJVRNn1b17xgL16NxuMtGebwSu1KeD1QNrvoqYwryJ2aQnCqBJDEFoeJWwZ8M36d",
  "key38": "4Go39RzeFGHyoQRiFQGScbSV5GXu2qSaM95no9tPjjTs3mpP117nG2wB63nxSiU1eT8EiAEHo2ugiUEPgWS3o6su",
  "key39": "3s7S3Kk6WZRxAuzyoct8QzRx4bfcCr6RfpJDi5B4rVc9DnbyzNm6S26246AgvPXJEkunu1XF3HWbsH2AWDW3uTPW",
  "key40": "5SzSemk1QpfL2G76NT2h8LKtaM2BmcdvcarjF2cKesTWQT5hvrY7zAFTMjFRxqhtX65e42baHUNKMksSZhm2hSBR",
  "key41": "5WFaw63mRkwC7RGR26DAvP5c22bHNX1NgEL275FCwMZ2uAcPLnxa821RgFnPg2yY8i826ztxmqN7MsjdSqBQ8Rry",
  "key42": "29NB3syDoBh7pYd33ovVvUPX3L618Gt2taHmzkG7WdTv4TVxdVPxeXB6WBRDZrVgLM8HfnMQHVrqfjvbiU6CFLsj",
  "key43": "5xR4nxN97DTkzNLedHk4kxLgResrBeMhxuMRJtjWSDa54cUEmHjz4EY5oKMghz92gBxmeBam9AoLyo5x4rs9q1jY",
  "key44": "2kA3rWtF6fHvCnspr3ocHXH4xsWQh2SPN9n4MxzC7zZowuuF8FxkkJtmie6FThX19x8oMf2cj52YdK1ArX56VAMu",
  "key45": "2CKfuCkKW5yo1dwNmNo3Rqw6iaGJLa3kjoYSjePs68Uye5ZTh7DXtQwkvhT4WamgeXpsR8rJv1yiJBNKtVSFagBn",
  "key46": "32Ai8QxU7sVHgy32k9mBW7qGpiXuRUMwwdzy8f2Z2Q1q8uM9cFFf9RKSQcUdEhG2jQciNZfR1WaavATgGMiZJHJa",
  "key47": "2awRWYJ6tgupfVHnzkHmiMhJZPHr7Wwmy4tko63oVx8zvnBNZJbwdnJfbZPmQLvnJDcZujNod3KPbPWbtG5tEqM1",
  "key48": "w6NwN4WFuUAumpCgpxPNbi6ZCZExj4gua548ZksJqm8avDdt4vDnMEJjBHXPXu5J5NMdfgUbiB8AN7g4fuJEt8c",
  "key49": "5iPxyQND96tvMNtPsY3ofx4HSxFpcbPYtkdinqaJcJriuA9NNpFRR47QzK8wUqtg4uzGTEt9u2nHepLP16Uu6kwV"
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
