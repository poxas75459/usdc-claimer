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
    "2AfcXxv3jVcSBFPuKG7eL4nqxHcuNmox333XUm4FVw3dQYCFaDaypAJjjwwtENny2sbvEqmWXAkh3JV8MLtkmaKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTawX6RumkrZJqdFhruiQQaikocKazjZJ9rGoxX2euRBppS6mUPdatYNepv2G88owpHqxyHJzWyoxuaczQzBQp2",
  "key1": "5PwoME8WtsgoEvBrfTFQyNNA1B2pDUuQA9qp13acXbqDBHbUzb7n69Pey9guYDd24P6FXq4rwQePmeU61HisC25P",
  "key2": "fPdkHgQjGPErs34d3kisCHYkuW6YJf4HdHhwhnpLouzuMgBdhHmk179fmmSCuuh2i9MiXRwC1nVhbzoT52StXb3",
  "key3": "3MYvUc5DrBtAF6ey3gE5C9rRYkceFgJPAQAwF1V3SUkpAVRHpJpxhPMhPb9fW2Xp3CxtYibHyTr5X2DoZV6g8Jhi",
  "key4": "5Mpujsk1VqhPsNpiSZVE3KaWebPchjN1WjMJXSWsTX7z5sVJo2B9jcAn7VjiZ4r2ftheu4KUEScbSTwb9M3TJx8H",
  "key5": "8tvVpB8EW5v7kfeVavTPGrqPZbXbfD8YjqASZs7XmSHXUVMa3BnxzEvy7YrVAptNh9f41SuLx4EMxXpqTnyWxmW",
  "key6": "2UjZzQVq2Pei2rLCjxvuScfomV34hyyCVbvYGesgRWKsYsUcJhNJZ6ji9t6CCM3tifVg2bZugb4eiApreKZ5AugL",
  "key7": "5okVvEmNxieqsry5wnqptfcQ7etMJkhG8P2g7ZRjm1XkziPC7YNeEQMaDxt2TKwd9nWAv1t9iXEk7C6j2Kjd8b1w",
  "key8": "3q8W8B5SXa5n7tg5YfRPhTQMdXLHwnk1CF6ZW64QcJ8hBw8g9jJGE3Pnaav6YmJBZYLYH2bKSAJVXu9CW3k1Tems",
  "key9": "5GiQkmxaS6QxB2DUSQYdqL4iHuUL6yuLAmG3sUArAqntNZUYFXmRSiQw7SzweiEGT25hakTUoruQNMdqN3vBRwW2",
  "key10": "2Zxn1Ez7dVNoDTULCVZQaZedpwYyvg8pwTSQUv82iQvVNAreHTPmHNWBSVgEZZRVPJr9uzuDZmfgQFcLsK1yC3a2",
  "key11": "4f8EebnX6zbxxdNX7cUEv6BwHHUkWDLMqUZqLqXCubvLzW11o6RCezAMpRcZpLehbuM83jGWp4Dkbaw7p9psU2tZ",
  "key12": "5UdkjACpY3cdMA1nqbZfucqUyPTFR24wcP9ZzfNNjWZZ3Ywh32pZXLAhn7nN83oxdwwDLBxURk4idWyb5ubkRWLL",
  "key13": "4pUp3P1WU88i9aTRxhfLspFh9GqLYBxibWX7q3xMdvqriSGFdpWrTRUtkFbHU4YXwjadjntSVAjsHV6Z3ot6Ptyn",
  "key14": "4xwkY14GLAkQqh58eykWRoB2XKF53qSbfcfWiqKz1V4LHRwy9wAppqxsLGvdHArPdvfNJiWc9fMQNBXugDfXbWBs",
  "key15": "D1UWwyLuWRSYJA8oWa5KzNhrm8e9roqgABfefvm1xN35a8wCHexnJ4fwdtagz8Xc2SNFbtAQoxoHR997uhSvPnf",
  "key16": "5CUP8TUZ6jxrL68jH4vnriNmmc8kRhB3DJNsgyMtiyeJcseGKfsMzmnSxxq8UF5e1M8uEZA1PJngXuwvnqNqx8qb",
  "key17": "3ue4tTA19suwLKPJUR2UQc1qQme1jhccwn9kd7imogbBNHFXLXEAygZpAXrqWsUZMvvUJx9dBSNAR7am6SKwhR9D",
  "key18": "5S4QBQvRKTBd8ZVwBhVfV7yR9wDepPKJWqBZeMc5TwCZ1iAxEGxmMwodDTdqX29pzVmXJogjwNY2WarLYRopYoz4",
  "key19": "4NrFDQggscCtJWGLFoGuhtvw5yiRoKuri7QPSoLTq48G5xyXnaunF9EBG5VQWwayuRopwcxEku7AkdsH2i9hoYhE",
  "key20": "3WnLoETh48qYsj29aRQ5tq1vWBnUWZpWF7i2rwgm3DWfFhwcjLVYn7Ur5FWMA29dRM1AhNimxCj27mEgG5DV9AWB",
  "key21": "3NB3X4HFpoKpDjm3WCNzt1voRkchHKaGmYdjgDjVgPaZXfYR4s9btKuQeMAyJJPjHSTHiFcVab5yq3qWbFTM6Pc4",
  "key22": "PwBFvz8HCs1fK2xBNCggNomUwTH6MwurUrxWgFa719pJ3Ck7TAWq3gVJLxn7Fwbqr2TuWC8FKCSE7PUAeFSBVVA",
  "key23": "t8R4bNHhHxUT5evVj6obAxxkBx9fw668ED8cPycwQsyfhrERoNVMGf4HL16SLWGNJbAPGSEd8xRZ71XckYazqR7",
  "key24": "4of2gaJBJvd3tXpmWacyY2cYPkPViiMeiQ1ViPvPHqAVit6u3MG2GRSmP2fEmR1gwPejGQWA87pv71p5AJCqPDHj",
  "key25": "4PBwQvhBVMZwmgJExReGzz9Kn9xn2Z5ffBjy7knsynXj1zo9RgYXR6BU1rXkhKYhb4orDc99ajAzRnmRPNZWDXKX",
  "key26": "2L7pnFcBRBeaD5uwE9t7wSbFH5KgUbyEaREd4HFmSS9cWrHf3zHnDmrmG6H9DAWwf4y48zjiiWUap8BGJLBkhKUA",
  "key27": "7vHxViDmfKYFpqJtuZc7Hcfugr1sGZGGkNxrZxLsA31cFS5UqgXhmRZxCYKk8LvAvV7Ty92AWdW7fihFUZGPYCW",
  "key28": "4JhS3bP4LprcByAf492BDNnG2SDt7i31NTKcrn8NXGWFaRnwanebosw2u2vmhoifbe6RUjETPFo6bzZmc7yvuv6r",
  "key29": "5WbNQCTfoTiCSairBME7JqmzUfoHRNnWbiTrYHdNytxZ24zehkRRbCnu1HFjRj3WjsthTv6ff4vdNMfLtnu6tP4e",
  "key30": "38VJAKhZTkvea3ByFNJqFpKvTtEhpwrPFyDzT8aeG5gLvdU9onxC6qEZ1hKMhxxrNyzE8x8v43WQhwGRUDbWhNQ9",
  "key31": "65jLfDmaaHBgWhuysYJKgygyL5LJYbzbEpAeSVgYM9mkC6LtxmZfYoSpCX7L7MHwsrkiYiB26VyCZaDKxN2Lj7bB",
  "key32": "2MQMaug8jFJRB8p4Rfso8wUBggTWkowib4rcsy2NmHeoWEs22eLVEdbWZpi64fj7Uwfa4GWpg9TRPGtVijmEQz7t",
  "key33": "3YDq2hNm25yghGdbAPNpJg88oVmQZFGwWTZhnTEPNaQoXXTVsMCREAm2YqYjJ94pQRv5DHVt2Jn6jAGjDVWWX5Du",
  "key34": "5PRZHDK7SzhGCuWTmpaVAsT5Pk7XanNFUazkcf9ZQXndHL1vPHBTPr57aQQQrNP5p4Qsx9STzVpEy7wUT2kyL2HE",
  "key35": "dDzdA3UARvQCKcc5Nf5AiyYnFTPmTEZuM3KCgnx8gbeaewqGmezu2yL1PioTA8RjhBgxfQFEen7JswHSxUpQ9dt",
  "key36": "4oXwQ6eSw1jRJCPdWboKJYBaY1GFnG6EZyZuHK3EmAQqpDP3cnrtLotdEtHbbXcQencFR2YDXGRuxiy3aGtx7wvN",
  "key37": "3gUJohggFSEp3itDs8xAi4A5Bkhm2XmZarC219oPEf6CqQHsmfjoAs72HzXG11YWMctqmndvYxnzEh4T2Zq74eu5",
  "key38": "2sRC3cbPskCtXwEN3h1QTjYq8NRRFMjq38GXaYff8Qq2pQ4Ej2oPEuvG1nC3sA4ibgdgF5qsdYYyzVyHN5BexUjX",
  "key39": "35zPkVL5g8iCd3MenEnjLLKisyE7KpANwFtaSeTFEUgaoSAxi8stwnPRGBShA9NPyEcfVxHM1HG1qrbi2WCTLr5U",
  "key40": "9KCrpJHpMhf1Sbnc1aDcmgxntuPrFvLZ7TNV7xWr5HtBsuGbPfNcFN3uwheiyxF5kiQq9Tima6nh5pq4XhVCfMB",
  "key41": "Enyn1pLG3Su78N7oE3iz97CHbRcxSWa1sntewHY2mx2wJJacsBHtVmXiVRipyW9C6uZDz3e2D3hpw5L8zG77By2",
  "key42": "5LKzHutGGGSwZrP9vDqi77T3S9smjyuuRybu6doMbqAq2n5FyUT8E8qHqgUfWwRTq9vDE1smBPLrQVzckHZwAHAj",
  "key43": "5NjniGAXJ77DJgdC2QcSKk3PNRcFhwznWMtPnqq4oBXZ2yHraqGbUv8z8veyPHBfxqo4CmUnxN3iotGo9FJYyCpp"
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
