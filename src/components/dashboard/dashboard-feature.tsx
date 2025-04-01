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
    "5oxgZ8UEwPa1Do9VnzwhhADhWuJEF7Y79WYAHkagiACwNdTEXDPZ8ivVuKe1Yyraq3t5jnyg5jYAEvqyZcZnzD8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTVyFVCY5s6BsV64RMsioQbkCkWRZzh4HniF3WEWpTRo7d5FXSnLTHAjwKUt7LVXenjv3RUdHPLCyH237enT9GZ",
  "key1": "3sZXAjSX6UHrDoSdzytmvTFh5EZsT34YQQQXZHkRafJGg3YxhVwM42jqGEBbmTrpyv8Jk7XyZ6w6LuE8QUzFxZCv",
  "key2": "2m19pMQWTuk1gDstMrhEuwHQfsv6WRdjmX6ARBRR2YQ9Q6bPvp5E9EimcJMjYQfkGwfWH3RJY5tYkjrMWeWobETs",
  "key3": "59Ey1aws5RvWH5xsjAEyHqGinjjFCHdoXnaaGzXg6xeLZPFhx2TKdzYce36pUwHw4BHXYFcU6boM8WPWSUVzsa1H",
  "key4": "4AJjEMYNhs1u6xsrSVbb3wTVeqXqygAGeKh6zvpf6yzLuuAxVWkeeErpCaKKy5VDMNyLg77a48imAQPnAZ8Z7vP2",
  "key5": "3df9DV7B63zpLNzHJYxHU7ZgZWdny11FSRXjmmmLrMZpDPss6XRVp2R25gxQQENHRzy3EzNbHPjpafFbjBy8ZuaR",
  "key6": "4pKa8FSuk4pmsfsJdJFJgFSdVXGB5n9stpdPuvRmjbqjbBXX9uFHKnRxjvdFrJbBWExd3n3XsLWdBT1CLdpG1eg6",
  "key7": "4Fb7ecaYoDuHLMBaSKoMSn9MzPzVzKLBGzqKWcSnqoFwDj6SzT3qrGRd6ddARNxauU8UUaGpdSPS6QuKGrab7R73",
  "key8": "fJ2PfhVEixnMLpiDXqBLfE6JYd3GFnpMxWjZwNkxgqjxbn5DuQdc1dSSvapcdx4bLQaTrTJ9ht9cuitBCtgammq",
  "key9": "ZE4sBw9w16ApVW15dHK1maN7Qqfoty8MrRBU5J345ee1F6syNAwNMw1nNdQNZKUbB4tCEpdrNqvupjVrn7Nx2Mj",
  "key10": "SVzXWdhFm84S7b16B89p3xYJEam9ZNEn5mg9RwsGmGR6v8XmD73WNBP8PcDZwQppJ4gi2HvAV8mYpKv2ubES7St",
  "key11": "4nB8KekHSj35vHWJSzwey4dEz7QEtCD1vzG8Cs5V8DXdEKWhsTAaWhHJxUNzuAFD1RFi5jvAVf1nimHvKqt6t26e",
  "key12": "3toVuNdJjxtT7QMQKGvyFCu9Gb97LTrC9fS4mj63ZJjmakZaFmfyzbN8g752FwFnicXzP3M3k8Tq69gxTjo4JB8g",
  "key13": "2DnmgSN7U3GzidBm5jyt1ebxSxPBk7ScBrAWpDqa27Nxcip3rwc7bp2SsD1hkXafoJMXyEUEhvhN7f9KwHwHr1Sv",
  "key14": "42mVoN9imtnB2ySgStbfMX3Wi1yzr5wKWa4oCSEy5oJt26XQ9L6aQtJD2yZjVAF55Cz9pEj4np6FctrDNDfXyemn",
  "key15": "25ko8TnXUp6mES7BQ6nqmEModdyhBLg5cP1s987hMaRiCW2PD3mw1WsEjJBTrqYik6HKXNpGRPqsPTdc93819Ytc",
  "key16": "5bWvPyB4qaGMoUKuQnKoX7BTAYe7hmWQPUaVbdp2DZd5e3Vfr1SSxpCQUntuerggepQ1WH85ybDhALiLpKmXJyzp",
  "key17": "5rn2xQef4e1uyzcjKgw6q4an7eP4ZwevtbVkzzF5Nvs92NUrabWtZEy1FNK4VLxU6mqsXa7byt3a19MbKYC7RyHz",
  "key18": "t6oGbLEqmXBdsREFpwT5HvY6pW748sgabE9QfhhzBASo5eanH7E7aKt6fU5ymxW4RjRzAdRzy6FscM3pR4YXWPM",
  "key19": "2knByP9g1DWRko9uQ78kbgWDDKmFPh1AV9zdtu7gQiTDMk6woxc9H11mVZDFwCb3RgVYwRqgH9Thm2EWvR6qmRVK",
  "key20": "34RSPiUSnfPW9HqepFic5EuEZdUEVmkih4xB2VdCAgLedGK6g8ocPAuAG7BAU1NaEzQ35fz6pd4ABngeW4gLh1fk",
  "key21": "5TUhFo8zECdphGxTxfbnnmoHYaCLD572TaMUh1LNJqKkYe5UCePoN5Siq1qiXPAAG1KRnSaY9Rsiaum9dgisNnes",
  "key22": "F3msmST1iKhagssHJoDpmx35HrFrPBTnTzfKKPr3SUjjwjEb3vsg5XVzi41BW7TBWH5qMhPCe17zVQLx29PMUUX",
  "key23": "4CMMj1zuQcqTAVzeKNVRe45DvWRph3q7HZmmjdAV3oP6qdCavyYxA2nitzujAoKuRcobvJQTrhaBSAWCfDyivEd6",
  "key24": "2yFt2VU6o5tnKgiqweJkD9qxqQ8FTRN1mSqGbmgGRWdg2bb9fhniYqH37QrDjSZPei6v6M2SsEeJevsxKzfsZktH",
  "key25": "3mSYtRx27QckfQbA54wfVYqLCg5fKMbXbM4boXwPp5JYnmUYnpmRd6AWCQ2AdYQGr9Wf5NWhqVqi13dsdjXs7yPB",
  "key26": "2Akm5STte6oMeKojEoFtUdEp2k2GGCdfenh4auMuekRF6bDdPx76aKtoXrumSXXkepdK3Ep9Yr8tKwhbaxrjgGuo",
  "key27": "3y2A7pqLoFw3fuNjVwd4yf5kLHdKwqcm17Xhc9V7KW5PMNZbx1pwogusP6TbLwtQdUnB1qV8wNH2feKU8x9hNMfr",
  "key28": "5MajbZNFn1WCxSqgtzbjvhAxbFLLRLdnSPFHwa84CqXLtcY28xNT5VpmdFvFcsL1pfrD77FQayv4rdAx63MXmoHt",
  "key29": "42mWn2cK2YPvinVRJ3rYvfTozJu5Mx27tna3qTohEJ4noUqMUnt4UqnN9ZXjUcCE3xQu26z2muz4FrN6feg5EdKt",
  "key30": "55D9w5WztBCveyHs65wAC5jZGid3FeQLxiyouM4sHGn4w6yaPDXdjqpEwhjkwW1MkLBxpBavBPaEvmPxRwpEBiSq"
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
