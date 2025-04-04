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
    "5T5gbp2SNtESpj478SPaoJWjXRxtGrSsKQvthAtW3TvkAiV4KQByr3mHVwW9JvDYfwQ1Y8RZz6TwDgLocyxQTa4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jb8gNNPzE1DHRemgeJEf4RprwPqMvZVFYU9xAhYDBG4MkMhGLyDe1YLNWEyQpdkYjtYcVgfmjfveiFHSLRi2Uoc",
  "key1": "4WJAHoG3fn24PFmLs2LYs1p41GAx9ueKSg69XLSeg2x36nZhQNYoTobbeJvF4kvfa4eQYh1pF3KQ9ZXzHns8UqLi",
  "key2": "4wkmHaXdZVjP5vELgT3vsUS8Ls2EWfHaGztRUtpMqyRf1i79z6RMTFVyTDZauNibnrWXmXhYkuX5HXkjokqCpGjs",
  "key3": "58PGSmdr5fmoSM9JYrGYLTKxf69VR5s4oQxgcEsnwchG6S4MAre2nNBmbyrf6X3QFQTHrg3aBxmdwv98ChKpFurJ",
  "key4": "24rJ6SXTzctXxwU6SQd9diWzA8uHUHpWRMMmdRyTTMJmn6VFPWvKZgf2XHFFNg1YjDC5o2KoDBxHWGttCS1hmMQe",
  "key5": "4J8RYS9M1KFmJXfuM8hUQZjgafyxpN9U2X1dVeGVA9emLbrnB9rbqLGLAxPv1qtn6mzLn3YEUAwrYUYqFRdAY5Ap",
  "key6": "51bjJAZZbTDiiVGVaxBNcRQoBLr2bf9N2Yqdw7Gv2xddHLnZKB11MvMWByeT6LTC3aZyS6YwAYy17VzBKRnrWZrC",
  "key7": "5vnyoqJwaH2cpqi2echW2ePhxhLhnSpnqmaceZYpo6PdQRCt7PnKRrGDVNimCoLUhk7sCCLH7mvBTB5bX8wzmBRS",
  "key8": "62JqYryw3KxMvR91BMBAZtsbj6YAaM4Yi3RA69vqdiq12h9RWRo9Xmhnxd2v7MnTGSKLgManWSPvZ1pf9CjuWkNd",
  "key9": "47NJsXYUaUndr3nvopSmQxTzkEDnNwz91pzqyVubrQH3ZUD33CAauAfKfxvMuZg1hVAHp2kwHNQxVPAdmapn5Yny",
  "key10": "4k3A75WcT6eYMXnecfAswvUdMo9UKnuqgtsavFJwVmTA22tUXVeTXwf8ZTx2KJLGetGgfwycMc8W8cBUioM3eoGk",
  "key11": "3DukFfkTvi6vtSJei2VvXu6pd7wjCHVDfNEHLMwKA4W2zX1AXsEHjbfmK6dPgPoSkXqv5gjDeJR5iE1Po7W5S5rK",
  "key12": "3Z9ZAkzVP62KbG4WanDbi4bBy64NVe7t2bMeDSNHpjZGuq8AhQ8SsafCtbyBxvV1GdvaQs1V2GRWa7nvKJVeAA48",
  "key13": "2Kt4kfrMnAtuatzYunrCnbGhYzddxZB4XjpDtuvqPpEsdqCt75zJR5Vms8tBiSrAtCHZz87zRobc1tRRchvvPtNY",
  "key14": "54aSqkyAp95SNFA65GGN8famLfFHJaubuFo9pF1TgiS36V86adSPYH4e3bmtfhZhBRtrEt15YmSNVtQfgbd11dBu",
  "key15": "hMW1YAUFU3juCVTQtxvq1ejrUStTSvpsQmhfzSd3icVmsCWgUYxN1br2xbiVDFeLaiRCbDR92TvhSequHatS5yZ",
  "key16": "4paUNcLBtC3yJvBQg1tpt35J7nzENDoopfCHvg9KSAs367wCVBdBHeknVfh68sHnN8x8NxhJkxGNWBLpjsSupSaG",
  "key17": "31Gmx2VYA9NeQWmXFLAttZs31HmrUAvT2fo5efD7ttwzU6TnJUDXTFRxgUnSEyToeCqU5Bv2nhg9aHSojaXqwCc7",
  "key18": "HgzoLsibH12AFrVqCkJCexMgkZUZp5mWHc7coKnBHXBjo9uxeum5gGi3xs2SSBPcxVEfjJz5VqGQx68HKGAYc5v",
  "key19": "taFfmBbknRV7fnkmQmTozDhrukXiZykEvEaQkjZ6GevQNAXYJUyZhz19hHYh1fAfSQ8J738xcYeD7f5eHMniCBH",
  "key20": "2PcpEU26E1i12U1kcu4PNm47qkH7Qn5r4KpsaTD4v7MSLrjuPi5FDVvpsHnhYHVMfQhDYjAqUhJj1RVS4w5LQCq1",
  "key21": "21srAf4FYfThR8mhXNza5mXU3Wi2obwjvwGs4eMY4sthRze4kp4KM5mjVra93GZthRJdjyDwLB45uwm3Gv8hyxaN",
  "key22": "4VMZgRyTsRxHAXJybrxnFSEeL6xZv7ETLGxMPPYgAwLxBZHtPPtBR3UrXsfAsYsTy4WWPaQz4E6xQQwpjwCFXRfV",
  "key23": "3AqR99CakUb3vSdaJQZoV6aotMT511G2UsoCwbkjrM6kehSApLtAfXpyrPnUea4iEvR2JCbL63dTadRDacUNkXkE",
  "key24": "5PuEMj9c63kg3yNR1tX5KTcE5b1oj6XqNuoeW8gMicP6FiFYwetr7faXWceHXvQuQt6YAZRau3NZMBy5DpQbhQei",
  "key25": "2jF9Pro49kYUJ6DQEucXTVicHmrRqbucQayUsEdbrXghmhoqeJ2SiPyHo9fkWBVX8DFC4juiCKmAVCvfHkLjmcp6",
  "key26": "2jY2FvBXAyznfBJTkEPxS7spPLYkP2CM8gwMsjYX7xQXrUYy5BV7Y632UgJDsA8k69uEwahK9QHnoAFVQNqKdwNm",
  "key27": "4i653ztrGi85DgzKkFWNAN59p2xf4S1oqG5i8Q31MYLTMwXXzyDm4UT5VZ1er3TV2BBPqtsYaZv8pfRtWRSFt5qq",
  "key28": "2wVbHoTnCAw1gmuR6wfCJjx3wqznjfX9HucEAaht14NnDkjJFSAVjw7uua6q8DD6Su4ASoXArbds6vBpSqrXzpLk",
  "key29": "2ZFsh8CeqMi9o9P5DCub6hnP4Ua4irea7M6GhfEmN3HbQh7MvtitjzgcPuBZf4KrkXq2VFSWDb87CTAQqedV9ND8",
  "key30": "3kjnSRt7brz629qBKyWVov1LJTMC55cyYdtYVw8ZJH7pBSX5YJBmmQL3etRCk3qz3S39gVfCKR3y3eLy7e6Vzwu",
  "key31": "32Ui9KzZC2D9B5UcQdw9AzpsFqRQwC4rhUZboRXemGJu9X59QLxmtRQep5tr4udToAuuGqhkN7uE572TXrTDPgyb",
  "key32": "2nzFDzMdeesPYLznjuMDDL5ai6W31nNkeafjhPsKtNbdVTH7oMnKjPWwpHtCHMqHmSpsscx1SJ6g4q7HZDz79EvX",
  "key33": "62oh8dVo7FkybVhk77XnUKDArDugmiozvJfzUY88gAjnjgbzD3HioPCMNbEgNFEtz5JPoVHnKVvXySnPYjaeNqfv",
  "key34": "3SbKBMF2iivjRZU3m9F9TWjvBd4ZdKqQb9cDhamy7zEAFxEt3T6nCvTxACnYRimRYFiRy8Cm7VtnmUc5i8JFBFTt",
  "key35": "2KW5g6rx6ZSRdCfjXfujBHhrKJsZ54aVFCVoAJdYDopMF382wrUFeZ23NdtcCwzNfgFqGoBL1sPFMJmezmeSMNMq",
  "key36": "4jUF84SSU6J1iTta4WS2sBRYdvifePNC5XdXzb7cVLKx7mLCQX8Xa9ouDgQ8TGAmphLSEvGXro3En2Hf3Whsa16L",
  "key37": "49CurnxAFdm5qZteQynXY2AMJFvL9cakcooC8UFhs22ySkESFiKmK5rBso4Xr6Ywk5iH39Ffquoj7s9MAmpoNu2G",
  "key38": "4gLPJh2NxKhXz7zrTEW69w6jxBU64p8vGRkHbVf7NunRNoy5sHaPUXQUR3yKT4NGbhcowsXauU7oDjjDTU9uNRvb",
  "key39": "4dSWowkSjksXjea6tLfK7cr3mWsAhE6zMHy1h8bqTMu43R7ZGTBiXAgTYU7D5YN7BKE2MQjdLbPMxQ1RALZVA1wQ",
  "key40": "2EAraR9rraaEZNe1BHXXo5R2L1nBkYZCjZh9GQn8Z55Uvjdj9WS42jUEFu5datiJgYRE7LU1KiTHJxAWmp47vn36",
  "key41": "5j4uSUxr1iZ7mrdk5qFyGMsYcnSTufBt5ivEkxaaAHT6V7W2sMYLCrtp3U82hzzotVjtSdVbCBJxYxDAsABtB5un",
  "key42": "62XrbqyiJwhcLsQUx7rc1b6wjVDq685DZ66J7PnZ2afq7nKY21jp28tdTFLa5jLsdK5txQLBmcu39Sbiz8wkvkZU",
  "key43": "dESxK5X7SUtw6ryipMpmYevqwP8dAc7hQCcjyPknPMofs8DPwzuiJNhGcnnMtBmYaoS6gEZiQjKJ3oZnM1gbxtC",
  "key44": "5DbKR98uXegTcKRnRsvdvpwwiXqHWAm1WgMKTYKHmMYfLAh8mQBfHNhnk8QU7haHjcw7JkBq7TFG7NxUXJ83PgKd",
  "key45": "3V37LUxdksoYYwZjoeQ2wiKo4qAge4W6thRio7AXNZwk4bv7Mhi3XCdHRdNXFWM1yhyF4zPhRFAo277oHy9f7LbS",
  "key46": "3RNxrmcL7ygJGnHF5ZGJNbG7aq5dUgm2dhzh6ssij11jiw1cmF2kumBm1hgP5VikFjjdxp3KnC8JEEKPBh9TikxK"
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
