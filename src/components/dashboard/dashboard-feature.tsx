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
    "2Dau8Q6zQ8oJJ1mLiG4149L5D61Nm9AAbxjVAPwLPANxHeQeHW1YtoGSA5yYfqxo4g7VgSTxjJJgmv5i9R43aKx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAH7K69xHajGRY7Pdtk4UpK1ipvUF2zT7z76CvcgVFpDAZ17XdUhLJKdXwwnUQWF4EiG7CyWYG7BQEeep5H3yW8",
  "key1": "2sBKEGcW1QTD4Yg6aDVQkHm8FsoQQVGAaFGmkuyNS2snJzGUT11E7zcPUkpHPdKDbFDv2cUjwzDwC2aVfK5nZhf6",
  "key2": "3Jt9W58A8nZ17iq2MxyLeLRAfcPRkLiMyMUqUztdLSDmdXSUFo64a39wGqYpy1KzhYEBjCwRZpywYiooGojHLCbH",
  "key3": "WW86tMh6ZBGmc83eGbtRiUtadn3CLQhoC8wPN2QLcXDxDWi3LuLsR1tv6T7dxNTGEDz49Uk9ZVVjFhSGCK2SPTD",
  "key4": "U17UbYEY258n6hczokUUShAgJteiEKuSQspdDgeGVgVnDjtuSuAhfkataFzv8kyXhgmLrDszNgpRSavQg7gyXJn",
  "key5": "6tmgULoVJPFS8EUd8ejYkVjkk3dDaLuHqYaxd6xkNrzJedy7EgPmBAhVqVwc5iHCNW1RHrEdBufCRDutxMcSBnM",
  "key6": "jCT1soZ9K3mRRLBgoQGtiDT5mVpDrr3napbGNXpp6mz8tzL7DLvTbNXVKo9P9bvzvrwe6a339Xit66NjJntEqaA",
  "key7": "46mL5tFdYSPV2nCeKKRH8iVkcajsnvggCqRpo4FSNvKQ6WxYwJX17ebdRsvDtvsFuq7hXoEDJJy1j6mbeTUwCkP5",
  "key8": "5VgWieQNhtN5PiWvkfmKh3txw3fYUWd2Gwc6fD8BwEC8iDkEiKQRaAjkutcsW2NiTyHnCHjr7FoeQybuUzYMHDVx",
  "key9": "2ah2aXKaJ9wACXgv8LsLhoxAfhGmo1iLRd6Ea41nPR9dyNY9aYw7wG2oudKt2S45r343ce8Q7o9Baosb3tx8BYZj",
  "key10": "2NJxtLc748KJWpTQY3AaFaYSm5HrM6kar3QB9hqMDyasQKRsT4kQAGv5SFUQSTEcmCDUTPuA8eUSyajt8c2tnJDi",
  "key11": "25rBfYKzijsbdQhiEmfm4yg7WuW82s7JsqRE5d1TL5mtTkTKxdpPwhQ6WwuCGWeu6sVuX2MxKPvm8VZnupw7UQnc",
  "key12": "BFs17uo2mXJFtJq8HmPB2ZYRBBSjKx3cw5EpdkEyYhNqz7ME1bTCUDEYGdgyhHJ4rWU16rJMVcj8dr6JcJ4Pvxj",
  "key13": "5g3SaghMGEtzFj1V7UgRaWwgRa1ASP5Cjj6jbA4m2LjAR7v1WA2UPKa5h88QChfvTa46oFivUtKApsBf5EsjqVa3",
  "key14": "58pDgLSwEZyCU3WoEV1MsB1CD41uRvUTmCjhx5ukVn8P9dtPDdaabX9dMnPZ4qnY8EA2vKYSbpUxWGKFFFw3mTuf",
  "key15": "5vc4QoVeoBGJ5jvxxdpYPyGgthoU9o3FSY6gej4gxdHjKAUPYZHdFfgfhniMLpMoiWppEcoYVA4Xa2isXtE5Ycs5",
  "key16": "2NsBK8AYh5jm6jYAZTfLZETu9htCi8hqeuqFeo9MV7NCk3ei4NewVX5RAyvwhcgVfVd5Qdrp52iRFMBo3gprEpzM",
  "key17": "CqgdJEQAsdgJGP8wEbciRYigGsNKQMUnTQgRrJKSZ32Fg2AGsNxkGRsUZRA3sqroH9TfQFYfdfnGo5zTaWbzuHh",
  "key18": "2EspVSYggLgWybW7FB6jaJeuS1p7mU6Rjp3gNfdL2ZqdzBQHs41VwZufE4815VyG5889cCCeHtnSkM1DJrw1Ti2S",
  "key19": "2o6KbWw5ZWN4a2euGmBmFWQd37cWmxQL8APANpjcsd2c7RS7P9Xhob5q595KPXiGSeXjSvxiArNaDH4Dknd9z39C",
  "key20": "25yYyjv1YFZ1oatc19zmjyQMKApok7wPwZZeU6XeVQxnB2FD9yqnjzLFwpDTYwoVJdbirG6oB25GtyMmmy6Y3XSv",
  "key21": "59NZFZDSmyygUyfNwQdZLPHwFyUuZZvuWbDaX1QjJoRP46YDLppuw6LaZTexE1DHSjCuKPMFDKq8icQ9d2EwanL6",
  "key22": "5PHQppJV3GiK1D2yNCvi8qqxxZb2GCiyGpamWBZ9d8qWMk78Sn5pP1aq8hPq8DpjK8VqsoipRdukuwpvPvMM5bJC",
  "key23": "25ouVrHaSs8YjHBvmAquLPTzteie9JrXTLA64eDp15VdK9Q5y2tPK8Fm7tYYUMkhjWe4xqXCrHiohSfuEs3pCat1",
  "key24": "qs6G5uEvFjygizFbRpuco87nHvEtPaAtsy2syQ47BN6pNow5uCifZq1BdBNUhBv1YHE6vE3xE9Y6UqdqqvoJWCR",
  "key25": "s5U8VQxSdZEpXRuiKBjDs9cjbrFwKC6wnzRVUYb2FkzbpDUK8zUPRNSUL7RUBRpECBovWh59BJoRRSBUCVXXzdN",
  "key26": "4ScwGwCtHmFVfE1CYJecL6eZdwaqX76jDcX85yAb49BhgR8Uyc58bRs3sEWFbPdNpGtxnWNC8Dg97yiKczgZM7WZ",
  "key27": "5R9RgxM5u1GvxELsKsa1VXcTZjQFgzXWdgSLq8HX1ZpikEe4imQpwBATcd4KMytggv7T3QekG6GsdVHPFWYjkEz4",
  "key28": "4gCsxBiqNom3rZKA8PxSby7pDaEc3pSjMHr4dp4XG6taRvwhrcaDhaWFM1TDcYbFuohKeQM7HESXfi3ovpX4soWU",
  "key29": "3HW2aZXZxCxFEENnGV61HnJYBQfirt21dbzHPFdzQB91f7Uzq29MGGz13YqfSRryt4HppdpEuAp7KYZ521yg5nCG",
  "key30": "2YrUFthYMtNFGaRrBBfQwNumMvmEcgHV7eVQdzoKoRkwr1Hnmbcf1f2CPZAux9XmoDxih55VssdSBR8p19GY9vu4",
  "key31": "giRKSMPAazfiZH7gn1iC9P4VHxHYuxuxRKVKSBw59qaTuMm5UEJ4obQaXRq1ALt9ZyoXm2cbpfTeoA688DUNh8x",
  "key32": "Duzy3vTnp8WcSXvtKR1yeqaSZe1KWC2qqsF1GT68AZL9Y8QW6mTbS4JAyDfrnRCbraDmh6KFNVw77yXDCKTGyNC",
  "key33": "3UpSZaCxCMeX397FJy9iWTLdBUpR2o1yG5o36MaPUpAHhBW2FjRYVWQTCmCxUevp7a9qutJvvS88yseto6oCs68z"
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
