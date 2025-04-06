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
    "2RPzyiypPKKUFEQP3vsjFfnbndCMp2EgKFDNshU3uuPJat3otHcfofndr69nrdrYmuMkaSUUKi4qkXdcyXJTqPpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJDA1frAUsvyL5ZUUt14NUsPyv9h29G26ptMUeQYDSnGQTjcNUGN7p3yCEZVbR6x9EasvUaEv2FMm4c69Z7SZZa",
  "key1": "3qniZZfDuGTLJrps9Aq5G1NXxRY39pLAm9yrLTK4MdLjyGZfy77Kk1zWW36gMrZoFdfVbh5bcxJfHsVn8gA8g3jF",
  "key2": "3thkFVUZfA2dfgnnAFx3QNTpgkC5HwWyuyZApF5uAKJc6WjdAXbGy3nroRTHkYwqYRARQ2VnqJS2YGzNvFV9s2uj",
  "key3": "5r3Jcpc47TxkbeAYc6rmAroAH3a2qFeHXeM4uFkcBz2Nr2vFD4neupUH2GdoCJKzf4d14CSGq3kZNAuVWjC9uSdp",
  "key4": "65pxTWsY868w9XBJUf7TaWXKzkjZErWLc7Kzd1TuoyEY3LCqRGzAbizyPt23ThDhmmHREDX4m8s9vp4mZtNzpkLt",
  "key5": "34Mewh6N2wHPhBpwddFHRGXCaFAnGaXcRQVyNdZFLdDEy9ScwbR3iZp5dvZsmdUfQLz5bDcn9EeQDFDhJqgpxwGt",
  "key6": "5nuxD9sqyZAuEpopafKNyqqxdaBT9VbzaruD3UcJJZuq975zHJvbAVnyaTsJLUh8CiA95HB7WTRtCxAq1rGoh1or",
  "key7": "23pFrv6HZeg6un9gWrErhtu1LqmybZvcL8zPw3Qmt4N8ApjpKXBURQ6nvsRme5br8HTM6cFSbr4Q4CcEFm5vQot7",
  "key8": "2e4Vyr2Bd4heYnvC5DQZwfztbBmDm6QN5TCsPEoohkz2PvYw9QbtsBmvo1BuPeyzcYj58dHKR2fBQRmHvXnMLCUD",
  "key9": "2TyE4FvXkwXoGjYaWFWAaYiArinCpSNkgQrY3fxzBY2Zfa6AznQqkaKRBGXnVicP8hYXxkLhQDm3fGnUM2R2ZvUL",
  "key10": "3a5Kry3rj5TaMrt7DS3R38ENXyJMkqromWPabXDFsBubdcwPp8fD9HwcTgj4To43zFPEZKfVhwmYHfXJBDHE4CrY",
  "key11": "cMDEfRpPYNBPDHnZ8rvuDCM4GQiWuDbU3GE5eCZoLejxMG8xc5z2dhj784WMK4HydCNtq7jGyBzd3EYdi9LkTjm",
  "key12": "5FdqzcKUs4XYVCgniymq8RN1L74gv6aPr2cGVdQX7Hn7Yv76z8Aq8thzTTfU76GvjKtvx5UgLrGbDXU1BKcJmfK8",
  "key13": "4w7RzXMWs6p1iGHgonz6sXeu9iCWmxtFJLhBbDkJm4aLuBNZcN4hbnfu1ApsAKUwxBFPpLkXW8Xqz8DkR928gEhu",
  "key14": "2GaFKygVy12FbygVcaVTYu2YLQwrd6p7f4UPwZvZwenQXeSx3Lm2bDKGV1Ru78r36bFNNt1KoXLMZZiQozEaS6tK",
  "key15": "mAcgqUuxJ1uS2VGUXC1R79AHiWkiwFAFwyGSZY9jxdB4VQLCmv3kGkXE86bNvuR7cKi3FiUZp44E5NgXkcE5SKW",
  "key16": "5HokQuzSA96rog8YowgvDoGVVswgTH82uTaUZ9EGjGzjWAR5kk8NNbxdJ4EiCbwiTgJYjd3RpRW9BjPcYCneY16c",
  "key17": "38FqspdVP3LKTTL6FhtjUhR1M87Xdo5cNGSg4E8r2LM4SJdLk2CsFiYNmQCMQ5AHGpYwgmHr3g8QMdMX6xakx3ZF",
  "key18": "gAC3j3QdMfHvCWnACSAbgDCqq9UyRcEvLZTAqcrJdPYZZRiz5XFezAbZiawiKhzdRrAAk6vf21gKHNKjvbZxSkE",
  "key19": "4Vi3d8LPLGby8R9Y56rQ4ay5SzBdthJesfJmS1hTZDeyRbiUbmEVWBUcdPZpYJbW4kNX4NU21wa7NF46cRL5Vnv",
  "key20": "59CUgTMq724pCVAzcCCkEeFhtrrei2vC9RJcPjfoj2bhoVJdygtGJAdkAUbfoH9JwZDcrKXt5WKp6uC6pP4gTRor",
  "key21": "2GwjbaEMF7r1HWnq1Ztms4SvbbBekkfCLjBDffCXrWcFDMLdeE7r5Jjz1djJNqhNfUWnhWnMGFGxtazo1W7HFaW2",
  "key22": "5CMUVZCjVmpNGyQYpNAnkjV85ZaL5z5Cv2eq2nrfCAManyQxNAqr29YY7mRsgZ4r9zCv3YvrFkyE1YQ6savLdPHK",
  "key23": "3xPABhvo1q9xZQ9EVvzHhbsxsKkYWSnyS1T6ePjpsdxh1HP91bXiWfsfZ7YuATfy1CSMiQwth776KP5LxZXyLmMk",
  "key24": "371vTmFgopydnXuGbvbfv7VF3oXNWn1jzej4tDavu4BDbBNdYadBX1d1y7vZCC8scrHkELWWokziVbRsdn53d3W8",
  "key25": "5a5waBj3zt6NYYBCyrLn6e9JpUxyyDhPD9iATB2qj5WswwvbamobL3MKJcbQuAht2Ph7hu7QZf4x54LTJt9L6ro6",
  "key26": "2imSY2d4X4ahuNzBNengWianoCeZ5RNgDVMHCv2j6a5VbTXB8HNyUJW7QTvW5rPZKi3RS7W5fxd1wR4DdPm9viso",
  "key27": "41SW9ejbX7eSq2SFTWhNuuXgVkpF9kUuvoZpyJH3LuAtkEoVuc8LbWjuBAzt7QD5BkYCRgMmzxcpLqLhF1X2kyT6",
  "key28": "4ZDaSiE8C4ESsQPGrEHGzypwoa89CYmSj8jLrj96hPzgHSELsSUSdFUhbowr1gk1ezm7u33hUD23pRh9Nw3qweWs",
  "key29": "7HgiMpu6mstdaW8UtZcP5TssTQEtUvFJHb3ZUYmYrwKnGmELmSGQ7BXruLjt9o7o55RkF4TLskhgfLajNWSKNYu",
  "key30": "5rY9Bujaxp2rxCV8TgX51TMRVnu1GVh6p5rTR3Qgo7MhSJhSCzKGJ7hAdAhsmnYiTmSzABb3ufkDPjvunvwzszN2",
  "key31": "2nUvV5WrtXCpgrqC9kgvM8jFExS76V4HhMHL5DAw3N2Y4GyyVyMfoVtuibBshGweT7EqbtxurP9FMJf1kBGYZrgd",
  "key32": "3rziAH9KJ2sdhnANwVAjKDi2z4Vam2uJT8rMVbsF9tP1KdzVkknoiiWswnTGFbVxbWbfogjujM6KUpXfym8dGysi",
  "key33": "2fnWaxEVw4Fy7uVopnrfbSF67NMeD8tZYbFk6NYUF63fqtAbJvZv9jwoRwiHfRGtX6hG7xrXjA93XomBG944fX8Z"
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
