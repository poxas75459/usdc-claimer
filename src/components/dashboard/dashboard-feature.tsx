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
    "2cjaNHZQiimuEQf96yz2HWLDFHhrn1HyvbD73ba89J7RAYsLsKkFpihwkEUptLCAHztkAKHzXg6tqjYdHSENnD8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PB89aewvM1u4U29rxgHFieS5nLAGKkuLLKds8URCaa8eQRvVk9BqxJAYySpay8a6WgxqrRmWAEkFfWrUPuXPnSi",
  "key1": "5dAkPk8bdKjdea6X1gLNAi2ok5iZLYDW3r6ES4ET4WYbUbRnHd3w4RT5U1W3BSv5bzg4gco5m1K2GVkocQUWfA6e",
  "key2": "2uSkxGgFZxGdJFxQUEhY5v4WHWgBZ4vYehhT4b1vaLUt277yPPiyBeYcoeodAXZJ9mbeudoiAVP3XLwRcorLzzhB",
  "key3": "2krEG36QU62cRowTVsrS7bWcjkSo9xRwSCRWXWDSdiNppXjx5t9CBkdDHDskQxgwE9CNsKvg79au9n7yRwLCtsPa",
  "key4": "5XqnKjzhbJzsEjX2Rw1yMnc74uyPxr9fqFuuJj8zQ7EWTxphNVRLZqh6ypi8W4coX9kyfra4pgJCzhNf94V3kH8o",
  "key5": "4sniK32mKrRB8LFUVMsdETib2JQNdNmkXoocMaRdyX5L6uSGLWFzH5ni5Y5bAMxjwmK6cXQTbW67cqnuTDD24BF2",
  "key6": "3FCFkt1r5ErJ6HSWRsnD7G96rQrgJmMnrhqq2xiMny9XdhRFLmnPDaV4nah61wfT7Fw34gS8ea2dsSeAfV2UPYTN",
  "key7": "3whsSqUhZrfgTZn6iLgtEdHH9zStgamBhBXupdgbXCkvDfuQaL8YtFPAL1cECswfUN1xqq5zHx6XWZcoGo2xr1zJ",
  "key8": "2HJVM56gV2rRSgVgusMXsu8x7EwNXkCAaNsN1pFbo7oFWR5JE4Lck8LPGiQMZhiMsAaDo2UjAQ6adeAxep48EAJ7",
  "key9": "4MDWEPWJ3SxZDUTXY6HoXC2wi9TDKjDQAhGL6g7g3A9jDgu1hM1oH1rKfs4JUaAq4dyv2WqXh1ZNbHG32ZECDTuo",
  "key10": "5aGWj9tuoa5u58tUjHnwuiSWxCaWD57RZcaZABMTBAWGMQwjQ55jutTqcF9fKHuwWSY9Ck6HGqtMu4AkjHTBL37E",
  "key11": "L3vzVD6vzkhjVgMLQpYH6ytU5w4SZ7erEj3rfsr5LRto5MH9FXuJX3W36XBNQmdKUcyVT2dwGF3dVXuK6HufxbF",
  "key12": "4koAW3dUAJ8wCvQdSwxngcoG3pKBjViqc79v8dVATfTaB4H64kqWyFJJaaHM9xbPiXjrGgzs7QLgqQm2QvHyQFLv",
  "key13": "3Mf8niHYmmfzskDBZNaCp7KjH7fkbZrLzsFr65cVM2tver3gjjvSG6ZrCe1aFnMSpnw3LdDPGzd8v9Xk7QtEwHG9",
  "key14": "2vyEBfnMAiMwmEmiQutsFMN1D8axTx7crx34SwGazGf3cJCkR7p5j5Pr5SW3jYUtaPf7YsM68Kbe5PKK1KY8hzCs",
  "key15": "4ujVKsExfLFuJPwxbPwCZrJp9KVdxJYemQ2bQdRKcfsDC8cugKQgQLbVh8hcGnYKm1D5FWYPfcAb1aFyv5g4okJ",
  "key16": "3194NTgCx63WXeYdMBY1TPeM3cFNQNksPTTRU9bSX72DNoPugnTdaeBcvHCvpAkLpWLz2r8srAxAjc7hRMhdzYyo",
  "key17": "42Xgm7wkypQ9JRjuQmbUEyDCX6SXrVrUmoTimAbNKymbkWa6SU2CPwpeSc8wqjFKJHPxE3HoPUQccbSzsFwFXkBp",
  "key18": "39ug3M3Qsrbcp9LmMToXxREyciBkXsS8kTpCyNTww2JDSPVsrQicr5p2QDUHZr1PGoUdiTeqbTf7LSN3BXsnXDg2",
  "key19": "4bnPVrENYj18GaxBeZZSg3cdDpSSPdWxHrUhLNATYatSdmBMzb1YEzhVy7MVr7MLMVX28w2CFhBLXct6uMkMxgam",
  "key20": "5KqZZg8AHKZS8gos3HhzrEu8CfUcsJaeqssapxF13KFyjKkBpjK2ZrfUtgcBvTT2gwytVnc8EZBeJzWKeg8QQNPk",
  "key21": "UR2Sih753fHyxu4dbAfK5CuDpyUMMeYWARHzBCLsAfCYqMUc2hyQCdkVgyn1nL3jXyTYoG7TNptCVbG1rkuzX77",
  "key22": "4JSarUDUoDfPbKt73JqtnDjMiaPY8hyDqNdgxP8uq3ohxAEuFi6Y2YTCWByo6auZHSqa31AEVBXkArE9qmbLJeLV",
  "key23": "3ZNW7tCvqBztWtWRFBX24FkcTDddS6PTYHxgwPDnmuFeRLkcLXHWNTH5BcDfT66WPkqK8yhj3bXCEHHSsLyv1xSy",
  "key24": "5qZwBxQAd9fu2F58NyUqnDuoZZGUtMxhEC1cKzyDomJRehydoHpuJRzvsDxQepx8V9TE82gTRmhKMoVSkWFVu1qT",
  "key25": "2sT7rY7Esuu6Uk5aahZizCsb2D1JtfJWuJDucm8Pok1NnQrkxGPdAqYLymfXGr6Sjafyum9uLwCreQaX7ACVMEvD",
  "key26": "3cetTkXfLz9JHqYE4mAYkXbVDL1tkZ9CYoEfwmKxpXUW2R76a1gVrm4AFneo2PX79ajPJ8xQNJaN2jFBLVBVb4TD",
  "key27": "4HKpQb2EF7mb6qAoiajx8CMABDZXKiKmzL25tkhHca2NK5iLffhVhwEcZK27Bvi42ghbFrbvL1UVyXtS9wRpixCA",
  "key28": "5YQMTwFdbmU5AuW5xTduPWBtab1xiE7cK1PEWbtk7gEBSohQS39Fx9ZHxMzQA4FWM5dp5uiGdAY5fsxvuhy98j9n",
  "key29": "3tmb6m759UnHNcRdgNkm5ZqcBrF4Myj4kSzfnvHtZxVhjeuPzyNiZ7J1KsJpgk1DA8n4NyTNeheXe4gLUwu1aB2c",
  "key30": "4sPE6z5pAKBNiuG6MzYVMnja2yZE5Vr3mBMPwYMjaVXnzyB8KnBp4FhDXnYUL5L1f2tKRNa7r6ut5MCe8gvReKav",
  "key31": "46UFwYUhVKwVDymrX8PAbbPQt45tMLrr3WZaQzUUDgGNYVx6SnZv3W3Bf38SKHcv1Fi42yJTdk9YxYVXYPGXL2mN",
  "key32": "3o74bRBCytUmQ2MS7x4JVQmukmwo5V2TqNVt5ZTebcCDJ6B3hqZxcMzfnjrRnXkFLE8LQRNmivJr2nogJvvfRHht",
  "key33": "5wdPjEXeZhokYYnFhcR8btDR7eJb4dgzZDkVxGWAcKxGouSPjPgWFjHqtzZbWhyATxfCcmURhDdF7n9RMJRxJNrE",
  "key34": "2UfzxL68XyXQvE3R9eVNGDXgKxA8mjbznJM3YQUsfHAgXa6W2T1J8LnkSPbCXZMtNSS4d48LzJGzB2ZPfNoikjGj",
  "key35": "5s8nJsgSuFR5cJnTQ2n4zvBDEJHdbBUY2dzz5LSpTGkhLmWz7xwzf5JxTvpwuCXKXe22hJU98yWNkJ7EQMthuQq9",
  "key36": "35mcdWZfUDYG8bUvhtCWfpLv8CTRNTkAyhkZAC2Y6SqVm5WuigrmnA6HzobfgukzVgvf7yaAy8Zf939HkGrNHhxx",
  "key37": "3g8YBG2ZoRD8vjVBgWNPpa3LBui2gvsEePbgh2fpknftzHgGTRGKUCx653d8RoFhgE3rgujb7PYNEPutTt9MbfPe",
  "key38": "4kxDugrjCB8y3kC6kYpw7akrHm67pCTGgerAkVaVJ2YNhXQmcr2g9ond4y7t9Hn7mysEsWySV5UtmTxuLHeEEZAu"
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
