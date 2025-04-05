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
    "VRg4ee8ynDDQV2EhPohJpbCEtaswgPLQFDrggE9c9h7PdLUNA8z2b7mJfLwytb18z8P6APoJYXJauW4RjKGZ2qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYKj6Wn15HBajG3yEg5EXYcP1K6CGtb5nn8jXKARJ99wFJPtBWpr2jvpPZCXMqbSfZwuQDAustK22D8xWsCs1zS",
  "key1": "4uT3LavKwZbJYexgsByLFDRPq26PnK8a4sSyuahoi8mEETRDV2KbHeuPS99asGY9ytcm6hr7AfXFiXr4t8xkHPbs",
  "key2": "3wsveJa5dCHtpvcZWeW4SfdXQupJVQtdB3nfJuwYJWNPt4vKbrq4nwyTCbPyQGU15sL5dLmqwAGre59dYRRdY1oP",
  "key3": "4ezvUWTiwb6CppNGk7GBh5xvQ8Ln7sMWHu2frYvJBC1DH6BReirbo2BstCArHC9fGxH49Vvxi1oXnWCKyqBP71kK",
  "key4": "MCNroQeKuEFxCwWMXPuUvHnovTtxGqmbi9M8VEN34MXbPHRwTX5Xv2CGuTiXbyMpw7fKVW6VVmUdr52oDAkz4eN",
  "key5": "bzFsQ4SyGyCnM2qT9A4bb2cVtnCFq9AbeYdp5oYdfee4s6JGmDf53ZJR4B3Fg8Y2g2AnjhSxa5AouoFgNqEtSHZ",
  "key6": "5zFcSGS2Ypjq5rAErWTjfkoMXUBz8aynp9qgY4CeEogqWoXJvMp9LuscztRwu3VE9SkR1591HHzNBzbs2ZbMCWom",
  "key7": "5MyYijXhrUgtMEdqfPjcw2eftRDztvWgXz4ae5cdKh7hNpMuqYqWeQyTbE6JAjWF82n3cetSbTWB2jVWJAfU1qBB",
  "key8": "3QyDVVnR1UYXLMs3SWPNgiMVHLFEKZaDqJzLo74R3yqbSdqKHRVmGRQvw3MZRzXEafe27TqmZEphkT8thYznMcDw",
  "key9": "GypxDBUjUJ1Hnksehdn137QWrXFSciQ9yBkt9RjaRWeHexbDaNpepHGYRYJKgegNUjT2mUrC8YMxjEB1cB6yRCw",
  "key10": "3WcbYV3v2YsHJzHQskWyZs9v7UZ82fN3xdvDgv7YhTHf25FNoaLA18mQVDdBGFFQAhJQA52NNbNS5X55E6Pwa7LQ",
  "key11": "QybCVJQqr7cgr6dRPXQZeZzp8QHrHXcchncqyvLT6bSVbE2VgwJwGTwrv6v3C6URcVh81zWBjrrgrdAkNb3zdSS",
  "key12": "NUuJgbTRets3FRvwna6ZGJfHKE173Sy6XzREXA5YevXa8yNbzUvvPtsZY7LFujch6FqP1YEixHFsoxosqTa7hDh",
  "key13": "4D8eS99qNDw4wKsdeusJzkSzHwwMQhia2BWCJRGwoNoyjuYvXE48ZYwn8FE11njBP6Ewb8xWn6P233njcek4CBXg",
  "key14": "5NMiutDMb8qmse8UNdBS4cfPSRQ1cro54y6LKMGfzTrA9uKhGdNxfD77QDCPHuXQ7kQrme1xpubXiTTgAjvxFgzU",
  "key15": "2csVAGW5LeizA2JaehQAph8nmoSWnDcguwBNvdxi8oryi2tydY66ZE2cWvBXJwucHGc7tPJb67RN7VEb4hpxEh9k",
  "key16": "5PWiRwM287gZHaB4RbJpnzh9uB8pHnun3mZx254ALrb1QmcBeBLVAiQzwKEo5aAqp5gqmsPEjYrYuRDpky3VrAXZ",
  "key17": "3VXcAej2aA4nA1oBNtpzZFV4RkAZUGpd6op9fMxuhKa9umBWCr6GfJEjVuAyjw34SBRQHXKykN5KEp2LPyCzN3ED",
  "key18": "4YtJeSzyDGa8pH4WwbREfsTzgnk9D31JsagycjGajoYnbXxkaNkuuNw4pGWovpoFcaaanRxVerqzK5mKRHp9GCmD",
  "key19": "3mvPiAcWTadBzA9qJihe8ktp6kfs33rKx8tH9uxWM33PMivU4WsNVUW1YZT3EQmARAyhwBs8TZWi3fkpP5YRSbqv",
  "key20": "4CuDvMC7H8mK4QbKAcmaB4xPH91JnwNs4kRJQUDmYpg3bbszS4AhEY7zTNHkyGqewjUS6tb9c5YvntfZstmosReG",
  "key21": "3URx7qjAEEkNNfZBQ4p3L5GsuVT1YvEjfdAKMCa5mTAumMgPUa83j9DFw39uQqucHLUE5LZWuFSC7zTN92D6kYsy",
  "key22": "2YFuM1WPTSVnJDBrSM298nWFr6tKD9MmASuBhXqZWm6u8k5rePRGnpYtrmKfsgp1o2ZBSrJiDgSJMZxE2dhaMnWX",
  "key23": "4jXzqMQ3EXQ28NjxZ7PuU2Yc4JvmYyT6beqcsdaiFch8cTxNenvS9TVc41kWBoGgfqGFbb4nmvbvVsfCjfTSWH5F",
  "key24": "JqsyhDFHRavXejk3xHswZy7yjj5iHgwQxHPWuMgSd3BAEpZABxL6j9LKujDPURBG9giJCXXuHQG6f5jyQ7aNdc4",
  "key25": "62TheZsxuBoAu3VZcuowjDixeAGxq4XETkk3xuPHJR6rAifNbRcf8Jkx2Pwgo3mCDpHkHPLaHjhaX1jGCw3dkUHD",
  "key26": "2M4bTfL9H8zkxoDWU8hNdNgy3DxFUWKykavaKGEpsrt6bVJYRLjtnyv1hWrizPTkb9Vb6DrztrThEXosxXESUCj4",
  "key27": "2cxkSEY3koA7Qzb2MUMejX4FmfvXwSnCBJZTT49dk1Ksr3cb7PnsBuZJ4PrPUkfqEoKK979De6wfmtYAnRoK7szD",
  "key28": "3AEurFxuXXngTXLuNT1rbNAbgPAYdreGwtPNWSAXkyqwBUm6P5eUywT2k1msY9dCEU79TopiNenR257i1WUxbcv8",
  "key29": "4qz1uaM1cHHpt4emz2baHG661sNHSTjPYhfoXSLQeybJFL7XjJcWoemR58cNdHmxZfbqtPTsvRBj679wRFzYmXTe",
  "key30": "3LUAMUrc3iK8rTA7Lejfgbidoap4PPZBGGABPfbYDrSiYFyW3XdypKfU26qpXPprbQ3BWxVwx6K2Ft3QjJqkT3j1",
  "key31": "2y3jFbY1TQuDQACnhXYo6T5JdyCQDZCQqrtWMNMbR8z54LdP3T2vByzrGdbCtuRSr9TXjAD65kbPtSTRGYzH79qL",
  "key32": "ZptVxRoqUpp25zFrXK3r4pZgGeqbZ4iDf8ukXbVnYBFoA1BHHmX6KEpTTWdaSe1u1gYPJM1YenjsGkT6cQyiTn8",
  "key33": "62qrNPxLevge7nn1prHX2ZYbkyMJ1YnjsPfUp6ARihDo73iNYXSK2XKMYrpZcNFTycJkg8gQd5aBuA5848KKsKXs",
  "key34": "5sZcijCZp2JKQYnJo8paRmcpXZ8SKo3pEqbZgfYeHsXYLHTzshNJb3SxfyhCNrbkNmmGuYfsWHJFJSF73NLoaxKj",
  "key35": "4Z8ZBazVhE2QvgbGG8ZoEqqmCzzC5nyDeBGvbqsxbJKzLs1LKWgz7EqFeoGAeLdSsJfegWZEua7jS132ZuhVTujh",
  "key36": "4647ok8yCPyppJYbE3Vwerwg3q3KHjVSH3a4QAdBmZ9NGhcoFPqHackAS9DNLauHczUJYszmWv7C9UBzmG7F6Wdm",
  "key37": "HSXNeXpeKvd85dMuANztcSX5ZCjTmKDt1BS83e947q8hXCfus5rVtfTKnHPptUPx9U4jxSoEY32jUHsfezWFnrW",
  "key38": "3PMRzfp6fbBYE17KZ7mD1NzkxtWWhJ8oXvwfYPUQFYVH77gk2CmhpCbLScTV5pKqYrLnbTWn165MwnkS8CkaipbH",
  "key39": "4UFwyUzidFMPLmVSoDyPUSYMe69WzMDWb5tt6n2knsTP7bDVmb97xJNNgmZv7deY1sdfVhd8NVYDkAa3qt5gSygA",
  "key40": "42kpzPRZrWkFZ1Q6myV9RgXp5iGhUnXY5HxwaiG3uHWJkfkKFhsWLZ2FWCzPYnuBHtoUoZZ1cvXFATvh5nrSiBdN",
  "key41": "4g1P7VhtBAtcwuBFNVDUCjwt4ZBoNWg9L87fmMLMiNp5obSztYUerD3hkCDVbNosC8izLricpvv8Xw7W5NusSyCG",
  "key42": "3oYVWSuzrwMZDYkCazw2gExfrsopVy95XtYEjxPeKTwtm9CqTRzwheF18gEdZrGFaaXE8Nr6VCd19PvdjUpU9oH6",
  "key43": "5gZPASMiz7NaMuwFEgdEEmoL5cUpmWUgzDpK36ZDwp9PhR5qE8L78jGoP8ngKsjPbQ9BwGmscsphNBCmwEixhgQp",
  "key44": "5aoXGoaWnPchQyS9Y4S1BMARqy8BF7FgSWdqxxvT7hu8Pw1jLBUyo3M7cpsVuT6p9C8JUHhCTVKLGxEkJW5xpSx6",
  "key45": "53Af2ums6HBgPqwYfFvkmNa9SSkLWUq1wHw8Gb2h45EAtfSuuBWNUnnPk4W7oQeoKHNvBGKBt9ZLFB7P6TRQLUoY",
  "key46": "3yQFw579W7LGDm8n4wpP2nyzMJcqmZDYsB2y3mo5mA22Eg8BKEgkJeUus8M2kNrtiGGWU79ZLudmZ8pqL8fdmbck",
  "key47": "3q2L8kAPvmZ7cqmfTV2WETQ8TR4b6N4x7jHWn6Roe9jp4JxDUFhCKjUFG8Fvc5aVQEqHkqFnQzXc23YHSZjQ8os2",
  "key48": "2rEMHHpELRqE7k8XDQiYjEGeZFwkLXiQyDwrsEdDauQ6YQVDNgTUuRWDMpujH7YMS91KkQatgvs3JxJoxDKXpCP6",
  "key49": "KSFsMuVuBmVHCsbXzdFdsLaZqxxYGoaevwiadY48VqQumjjYBodkqa8n3hkrex9zRmGruejXmmiQjUSzTHSBrTL"
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
