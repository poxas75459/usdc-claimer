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
    "5QtbPSL7nA1MBYihUhHahPz47LZJzfwMJqfxxGLTw4SJk2QxbVCcuK8B1QfSXUzTaFRxCnYrxLouMRtDK1WC1os1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uw1RdBt8DTAELfNRisCneBCGpKFYwQri3P3SCmwhcUUn4BbVRTA1aHpWm96siqiyqif1ZBY9QR9CJSJbJUR8M7d",
  "key1": "5wqZEZUjFeSRktvKA8U8nAKnX16thWGpqyLW6UFYMy8w1zpNXYCYtAC4ARPA8QffvFDASkiDL2PszFV5N5z5Gw7C",
  "key2": "XoyAWMmk7Dmfi6EjxxDA86nEDRQboDUAA8UNyFz7qhFGiJ46mXW3yAAooF9MKFbPtcpWiiKSfkv83R5VkrLTQhv",
  "key3": "52UZUcjvQeZN52mfYJm4e4ea8qht2SWDQd1G7dgiR7NgM4JFdYMQHMA4tSPdKZpZAudYNMmwhqoN7hrzkFkU39Mj",
  "key4": "5pgBiDwTnSFD2H8kMzK7ZpPa7WjiSExGJaLfWZ561jPpvM8aTVptXzGTYyknjgySrbD2cBYHbqTVTjyCFXyDdKMf",
  "key5": "5yUd2kwSndaB1jhzu9stkW7Q6KcFhXW3qYyu2XjeeJgENHrefTkvd8r7qWC1rGsF27mvYoRWMwg8rggTZG15mSR9",
  "key6": "29huRcaiyCB12dPD129X6LpYDYgcZmhm8ZtjdWKsarsQNYT4WG2n7QALFtLRVgaEswcwUwLhu267zFkFgodbHRWM",
  "key7": "96RcvXgKRgAdicsNsaZpb4tqKhp7a5h7BShrrBATrLNZaZdL7i4AM4ZWh6ZYobEqMLJX2ghKLX1PtT6eMWBujwW",
  "key8": "5WHKFPi2k2RKRnZv9btJC5kbvFmuJL3SDEmVXxXE9HecJHsVGhcxwgKEEEGxg1JCWPdkQV6K1LT3WhNidXCqVzBT",
  "key9": "jXD9ykC9HWUyRJAui2kkZE5Kai9cd34pu7k37rjo6RFQLpPixDr9BnACySxqj62m5BU6GGZzC86cPS3NtubbYLj",
  "key10": "3EsUa9yPFxcu9hBeVZ7n2tDkB5VScbjs679Ssw96NBgpyejQ3jXFPYrTzGtcKDyyVBDxRgQxGizKNqRbSDrqhTot",
  "key11": "ioH4NbTW3qzmDSgrgvAZV3PNQCDQDeqgVJKvgbWajMuEDCuVu5HDfRxS6fzPD41P1wLfFDomu7KGupoonCTRMRX",
  "key12": "5pLG3DHyxBneykr4AZRb5Nj3Y7MiPdDdt8buQSLRiWSXPUWk1Zqaa1aduK2H7omUPf5ePVxs6C9pjGw2hpyASaYQ",
  "key13": "4fq7aALTpzZoE5V2qtMK7o1fR7nb64LqRZPtsLcN73XSZLETidEhgFefZDhFJMF93QGSXvTEuEorH6mTLou4wwWC",
  "key14": "5mqgvsVyFuGE8XRwdu5dyjCXmqMR7Ck2YNdwUhXDX7AmyzCbakdQTwrKMqUrcgTJMpnEGMHX87rnNZuWFTTRmdgC",
  "key15": "P7YcUt2X8YLrBe96zq46QfDnBUXBvVxycRDZqc4E1GsVHZXLhFuX3zANWdhsfpqxLM8cfZiSvPqnbFMmtZadZRg",
  "key16": "UueTRPN8m4rRSFajyUPHce1YYuU94fs5mWnzyAmt4SHNNewwGr5fU5BnZLgBrQXgpVRVDaM27iKMbbrS1FhZVab",
  "key17": "2sJzbJg4SiMdLwoRSJVV7pHavSM8oxg9YnDEpfzqQVYiNU3MesNMmM9gTiRxcHLr2s1fJCpprqXY6Nuaer6tcFsX",
  "key18": "32KAaG51zaiFmzT8NSqcEq2gds2e68cohrrxVCQefr7ihkr9ayccB3UpMkLMwQtJbeV7woDKgBiFqE7GZsF3tc3s",
  "key19": "91xwHWTvWwbVNR7tv4qAKoj58skCQVsfzuE2FDgWShzmGmNJr6DTV3jLUb4vLf1FQ51ReQyoAuykWZ4ej4o243x",
  "key20": "2ynUf8UFavoXSRSmW6hvssDzLsf5QHPoNNjcAgao2y8vdwzNYbjmbsJEgYoQprtNrvgPgeRDNBpwcg64ecrjCrtt",
  "key21": "4jarTZ7qigNoFdo9YCQDrT6FywwGRXn5onGfa9xrRWNDoHHU64tBPT77P5xYLgjucEfkvy2GU5oFbbt8Y6uLvtmS",
  "key22": "3dxF3z34hZZcNFVffBwoW3tyMW6BRCKGgS46MjrjJ2urMrSDH5oaVRDrzfDJtjjUbpKz5DoKeVmB6sjsmzqZ85cd",
  "key23": "fjJ4EYsTVHJ95siVky7BLUjDZt2szPXe5b4NMyXzmuJd8bPbFgCNaDdBsz71hJKNABEco5oeBQLLgiKXd8j7NQk",
  "key24": "2jjuYhq19PLoSyGnToiMtHM5PuhY2oXYNmEGJB7u3fAbq5EyiHGNmF5grNeq1ffbXLgYfGzcEJCzNvnDRyoRunMf",
  "key25": "3EgbH2zo2VNFyqqy8NGJnw8ViFBEfpneWaDWfwZwtTedqoW3kTt1rnkP65P5CDvGoM7J2hLBaKkZzRuxrKAKmK5z",
  "key26": "4BkDhRhjHdEPxdCiVgE1tR8kdKVvGBehgmgT1UkgNyHn8VqpLJyeQFhfcbeyNW7G7pnwqU1a27W7tfNfZL6aTHsk",
  "key27": "5om2wS4hv54AhZKKStZRP3F7CauQvtxPR6vsJpp9BJNRSs12UqNATqtFNsATBaxoxk79bS1wrHZn3c9UcovoEhn8",
  "key28": "3JvTomkqNu9eBQxhVSUtRBysbL7pGJfz32UXd1DjJznTx29p8GVVWyAgrV4ybhYEQprme4vjDacNZYCUffu6MnQb",
  "key29": "3DzdwP1DhwWmXnsVDMXsMyKKieQtmdiy92r23vwERtp5Bx1df6DAnRTT7PHhjewWTFt3dN6zSe4RDNNx1RAL78Pr",
  "key30": "4pSH9sYt4mHJgdhBRaSATuBXK1yoqa5FSYEJj7dSe2qvm6ZWS6ST8mvxzLU1TtWY6s3VT9V74HWB3C87G6c5nzbk",
  "key31": "28Scxwok2iBiGzoDPw2aSuojnW67rggFjkWwb7WT164m4SEZddK7cVdQgPLd7tgELSjq9izSKZmJ99VrkLPDFyyn",
  "key32": "4bmykjWBkQN4rUHxoVbLHWXLoL756rohcgyL3xTJc18286WRQmgdPAtuYg2oGynhiLfzsnUg6yTB1LZwDPHFD5sq",
  "key33": "2tVmA6wUjaD4mn1XzzNLjdFaygkAgAvLM9cMT9dbgwPviNaQQJjmAUiDgQxL1MzqWy8aCyTaNwjWdRJeRSwaJdBW",
  "key34": "8b6SqJdW96czcNnqipd5WcUBikHViyKcQze4fgj7Qc3qVCrRhwJVckDaYKwumucjyE9H9w5jD2orMCWnac76JVw",
  "key35": "259nBKoUbHiiDbpTS7HZ76pFXAkGDuiDUya2GJoAZrPunGnynLqoGEbG4ZP5XNJpZai3EXgFMMBpSDmbj4He6hPb",
  "key36": "4Hf6N8WN1PJyeSH75482ygy77qB2unm9uqqncSUfDHtKueGGR1uXhUt6jq5TmsXDws2pzDPgk7Sq8qNn5nP8mhBP",
  "key37": "2jx5n3AMrYZLLj1HtLhatSkuVy8B6fCyLtiwPCtBup2KrYfh95F5n76at8LDUp5KpUiVqRaP8Ag2sLLmsb1zD4U1",
  "key38": "4jDPgj3rFKkqBgEmTLux4zi6R1KsyBsxjo6cbcRZAf3t6cT6piodbz1SfA3cXbqzsqTV2U9SghBgx3UfhEmJy9La",
  "key39": "3W4GPPfvoZ5Mi5nq4qFPveB8pf3GVYZ7itgre9zcXDV5RYS8CCqFwQMeqsXoo5pCKdoqnygjYnXhk3sDyErMFnTv",
  "key40": "4KMQDpfc3njPuQuQEtFzdrtP1b51kogqgJuzZhakEPjyn4PXXWX7AFQwpM3UutcV1wnj6UD3ny5pWKKbZjcz6ZrY",
  "key41": "47bABHYthBrJG2A4JcTiJ49tyFN5LCSws3nYxLa9eXR4WdUsZRa6hMnYQBZJ6wg4E7t55TtC3enQ2MsYfGyB2dvY",
  "key42": "29YRjNMu2qgj2Fj9ju7G7q33krAyrxhFft8dp6Sk3UooecKi3tNTPSEmoa9x78WCir4msoEvCx1wmYcz4y7u5ryG"
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
