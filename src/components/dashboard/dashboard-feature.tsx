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
    "tiDU2aBFxViE5NUEFh4qK4dEQXZJnnsSxYDjZ24oFe934Z1tL6haguNAzyhRmefKK78UdaVV9TeDEi5fEc7M3kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGsp2r2Zo5hpLZfT2ZedpfjLPNMiTE5KEWixarXEm7HFfP1RcFjqjFcYZkMQrveXYyDjDf9ksgTFx9iJvtGyYBq",
  "key1": "4kRNJpqBCcjWEeAaF7fxn97GpA4e3DPJBLRNeB8b9TTU2m3UFo9QTU1cEpXp4zHD7rX1QnYHmj8HwJeJwa5HyFx3",
  "key2": "5qNEJ3sh9b2KWXyuy9mCpVXNcQUSBJ7hAdGwuruNuPQyZeggyEJJ8nfnXfabDmNXasBPwVBNtxhVw4gfjVH4L7n5",
  "key3": "U8BLsgFgU2Pj8jeQ1zxYiNxGUTjAcm7qwHKLVdBLdQLymiKm4YLc9SNT7VJok9ZCAy2iBRhNArXmNiRh8qpVvWG",
  "key4": "37Jo4gtxRq2zrqJnyT5iXNtMERw7E89MDNULJYJaSeMuUd2srPWnWXYsJWTEgcLSxZUqf7N6qWphePvZKVaJm6gi",
  "key5": "259VcPBPop77CdTgrJaxf5YbQac1VAWdq5zv42kBMRxpn3vitjBvfwBA7RDRQ6cJqif239YyJCoYLN29uGbT2Wik",
  "key6": "5b8wuzSjvnhHNB28hPMQjz7jpgYnk8o14uv85J8kdu6PAtX31DzdCMJ8UDfmq8dDCTyiJU8Xo8nnLsjMzgopEgWv",
  "key7": "3As7tS1H8jYsYkPYizT1ZqFcg5iaYtbiNuwPzBBQ9tLs6PjyxSNFRX7F7XUvwQSxyZ8xrbNBCqwuB7qLThofjKMT",
  "key8": "5nNRGDVYyjHJyEpfJZZd6yRCRKf2fqURaVHFYvQnri2M3FGgx18jv2PWgNCC6kydCHZ9BvrBRXVzWr7i6oekGPCQ",
  "key9": "65WsooyvVaDGmkQciE4J6A8DSbtjQadRdfvm4LsRLkjD2HHDZD1pw4WiPreAbajtQzebAZGEburbtbvyfpTfvZuz",
  "key10": "2wcqYgHz5LBNCBEQbs8MXP8HWfZM3RoFBro4fszzEHJssbf9FBxmgBg1nvMbxoXB3THiW3erwLnd62M2khMcoHRb",
  "key11": "KNP8wb57BVkW9frUVQS11rsrSx4D4Qk38TH3TZX1J3Mx18XefuQ23YFMsRVLtFEDnjxG7Tg4pPnBkELo9TeV3uY",
  "key12": "2VuXfJ4i4qZdbuQnAcE1rt6U4oAqydKiP1EZ9XEcSnPQS2xZcAGf2haxhdgUa4HBhnR79nXzqvnjmD44nnaKqpCz",
  "key13": "h4CsrKWftTQycJeqiVvDHmPAYP4SuVVEBGpv37D2gLrahXU5sKRNFar8ojuEHjz6wDAMt35Ryb9qYL6jm6ameZ6",
  "key14": "2VNEFGByRie4ofteo3j7pVem7viNRCe2oheH1pyCq1hNnW2AEPwMB1Xzja5piwJCRedf1azxPMyF58mKqFWmAmby",
  "key15": "4usofCx4tBrRTFBcrFFDNjFN4uQQUWMzsGW7jfFHB1ncM3LmesArwdmQSTMR721gtqy8CLtwsvZ74cojVuz1mDSr",
  "key16": "4ezeJDDputhTfSdkLvgkf9wQvLKStRUHmKh91HDf93cj9Vak2aYQ9hgKkcJGAnbWPKrPanfpboFaugoKQSrjJvMH",
  "key17": "37m5MjB7sxYbYpd13JCAwF6YyMYwkJFnNv7LWRUyLzTFQhWGem9gUWn5e26HKgnKRy3St9QKUnfxheRBo9KiQyuB",
  "key18": "5sYnJt6VJsK3WmEpNSxmPLxiuSm1To1etKxhWm3NPuC7ondu9ooc9jiYnVJzoJbr99c9Bkido8rXwzQAf8sFrY1z",
  "key19": "2t7e39ygBfN4mVyqnf9EE8y6RWWZJKHNfqFHrEoxZjJxStP2hjuM54oiFMsDEFTwjY1KofEjwsHRqeMmHiMkPL12",
  "key20": "4Xm8AtVduWJH4UKMAiDoWT1Hc5hF2RgyAiGL4snnKFstqsBTf3QWFsb4eWS4ZxAA7BTXAVtN2kbb26CSAL27Tzdf",
  "key21": "62zAf6XiAKZdKMUSTktvyKwk8kk4QWd66NzyDxCb37JmEeLyCr6V3FCEbyaFjJgHmjj1mAoRC5KsXmecrAksVAWb",
  "key22": "62a2zqfLohj6F5zWHZHeDh46i1JaVXsPLxjmmgWau6MN78MyaLYCcKchZ5QxhqKZnAiMKsLu5ZDvdz4iDz1Ug435",
  "key23": "5cEchQHNDUgVbR7UeQFKqt7kb7PaUjgqtwdvMPowQZMeWCNJSiNUPYdJNEUt4mp2Yd4y46QtU1N5s5wzNVajPi7h",
  "key24": "3axs1ocaABJww6x6A7Ri2sgsqR4nVs15TPSwCkWdZ6d2MWyaUiE5D44yrBSLp4HSavLuhF24dG555EHGYeLbgVzJ",
  "key25": "ZWoyGReHniVA6vqM4syQu4xkuFA7tnQw4ZdV9TQDk363wVoHWPXG3vMeEVybyRoQEf5YbdVywbw8RSqDv5uEZ8J",
  "key26": "3xgozDysU7xYS5JJNcNZdXycAkzbPRwgj7MZA2hdTna8ZMq5kcQM99dVWsJLfwJMxdPaPAfQC55Vz1vUokZiCxx6",
  "key27": "4ZpsRXfhV28mAsW8JYjtDVW6DFphjbHv5pn42t86F3aLJ8L5q5Y7UXnqi94g278gwNXtmeYYX9g12mW2o6Yy7Env",
  "key28": "iijBGtQ1uBYP1Bb2vSw7JyLVkKSLrqZezqtKpF5sVcdZPEUd2ax1K7thXGG5U2QiwckUBP2niDhjf3nDE85Kguk",
  "key29": "2DqW4PqVGtkzHaxqAdK9Ey4sKXbDrN5uzMBeKTcimQPM1npCHgmivrEjcZW56dCNHJq5LxXSaWdLCm215eEiqGCG",
  "key30": "33RmohAhHkp4utRg4oCXGVdCcsDmLGPKnEPAQWkrs6nesybVwEB1xXadvEne92GwXfmQocWib99Ne6ZFH1LEZoAj",
  "key31": "5LoRkyR3h4brHj4p6XCVkhcz18YoxN8Emjykk5QpbDLMwW5pXwTYJh24cLjMcs1PNxCBvXaJXXnrh3uUa4B7bZQq",
  "key32": "3vjvMvNuokqeJNkbd2gt4yuH2j3po9ESjYTLX5Xw5yeppYM5XdEeHbY3hhAny27HaUgMHsUYmxn3kipyoi9cWXRN",
  "key33": "45x7xUn5igC5FcjnjdDkYP9RhozkeFFrZQ7wTu35UNhvU8B9HifAVtC4psoUr3LtggoznJMdX9ECF1yG5YciHweT",
  "key34": "2xQYhfWWehv8Ytwpw2JDoW4xyA6N9cQL4LEkZ3Fs3rnQbR1ALLPhx2ACJpcB8BUQ8L91dL5Yr9ZaRgqqKzkTdFaB",
  "key35": "2yrXiRyQyocQcyCpR27RXfdoAJgZHuwrkGxcaru5hfJXkLZwVCRJddjs8WPCmXGu1Dsx6Mtkn7Ud5GJteryzVcJf",
  "key36": "5MX8zP3yTFhN7BKgUhHVTd6qXkoWkJSz4CdNuyxcryrSSN5qM968NDpJTQaY9AtbSHCvEU78opP7spNVBxZKvj3y",
  "key37": "r46xYDL7VKoTCWKAPCh2daQeKsYhRDCSNqiHNrXysGZ8aAFjGueobUgsuzPeqjaEWvZ4Kns7XaDE3zxo6MTdYfr",
  "key38": "2RraZdCk1jsM6Q1Ys5WKP5yUEH29szUX7myi3xf1bSf8beesC9BTGTbJYGoy6Zm867jfdzE5sE5CWbPrUfNWuB9T",
  "key39": "2a3Ka4uqQM3tHcvDGDEto2sCbcGqiu3g7CaUXXGrzibGHysVHGZ4yUqRJcR2U3kJeHpne6y6fuDZfFgMndwtiQpe",
  "key40": "5KKtekjfYDA3nZz2pTLRMb1bWdxY6k7sFVLnqJkGZqrfGUg3NTjKTCpa9FcKvpB35DUZhuMmQdH1uU6QgFSLEPXJ",
  "key41": "3KtAx4WFV4hAsRm8qxqAjwu2VNfGziZYtsBbNeS6ppPiXnNunvmgWyQwneckJEQAfZ8BLLBd3TnTnasWXN6ncSTh",
  "key42": "5kSgUmbuM5PrvXNfrWZ4qT6FeNJPKqFQgSwrEmbFXVjEG9DhZkStrnXqhzQYojis9JB9jSSLnRtgKcUfQj7F8TxT",
  "key43": "2A9ppSUqk4324Q5mMXDrVmoqsD7XC5aqWLUvbKi5LJ6Q9xgbfxwEXz7W9mFp4xT2N7fWJr1o2xerRKvpEYx4xtKo"
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
