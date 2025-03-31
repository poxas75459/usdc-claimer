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
    "3rrgbmrcV6Eva7wBFyUrYh8Qqp3Dcr5a3jLbPSHyoo4dwTFdx8RyXeSFQnFSTPBzfwYwnxvMquiBK83KYZW548b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMWaM2ChPnMB1rUzNGEC62otCjy858386t5dbj6X3cwVY12Q6WAZ9uuWj6EWWEvPoadAjn9bQvLbcLLm2HAXUJD",
  "key1": "2doJ8EJFduTmtmb229P9rWd4jiUpnYTZFhGZA2DJ6R5iMzobHoMvzZpYLs6yWFG78xTQvHvA6XCTgfRYEyvcuo6x",
  "key2": "351dX5XbN1yphMHJgQ3GDNQPbPSKQcVMtXpgCnJUNeC5f6QUrWNPZKy4MztWsstmfRGfgh6m6gatQzfB2XFpusvL",
  "key3": "4ivFHzqMCd3sdc8XHnsJUQAVTB4VefKxVMrBrQ9MtCxo77pwMF3iqPpvyQHqyx2EJfcBRu8cSCowGk1UbMccy4gd",
  "key4": "2DwSiNFns7WHEu74FtJ3RrMqME6sr86VVd98jrpuESKVWCTtgQUgeh5KLnt4sPMPUacsUgGkeuDHZ6a9V5k8eY1T",
  "key5": "66SkCDntTAWuzVJEKk764zBNjkmWLk2N1vGzczH8mhEXFKnrAjNC1FAkwXuo7zEwtcpiZwitogo6cKNzfxeV4AZi",
  "key6": "2vA86f4mz3HLatfG9eBHfpqregfxY4hHNfRmsCB3dScngX2iZTLVWg9m4XyRN1XtqMiz3REXJNE8MLwkpot8VFEZ",
  "key7": "5XDLceZRVkemyPxqo7ndxVc2cpjFhqztwj8Ng7kPGGjUM3Ap2CNinY566SW58Qmh6HwF6AhPRutMpoZ4DmUijPMG",
  "key8": "5eTTQxNb6gZvM5sNip39G6eVx9zESrAEoZtS3gDMXdMicUpDaue3CnkCMsLAURudU179FGGSYNp3VXFbmqi2bbNb",
  "key9": "661wELhYdmZryiTRRoTGPfrECwGmELHwEnxYoXxQMom9JJPq8ysY8cG76Xpqde9LWvhUqU6ncSR9CLBCVeYPuci9",
  "key10": "8qtRTe8bcBWgr21sEqDTTqoHRrdm4gacKDAgo2DWR3YoSEamfWB1jcQijVSGeCht5PGs8Mpmqkse3Jga7yb42wo",
  "key11": "Gc6yCvddvGAPmEYocAa9AvCShNvhBZgDABTbpjQnNjjpdNJksdHKb25t9ZdxqcJ7Rb5MfeXweVur2A1odX3DpuR",
  "key12": "RwGCHNf4xVGqdERVodDXo7GWFWMeKq13c23SdCzxtkiyN3D3eRWQNxgZ2LzKWRntWw3dgnP7Wz9KyDfGuY9dzun",
  "key13": "FjmU4PioW4QPkUArHxEUd9DuhUMHLVqnBMBnjvFP1rmHst4jHsfLQG6Bo5dCMoTHMJErcPyDkAS59UPgXMUFcgb",
  "key14": "3FTi3vrpHMySA7t8C6hdSFWof8iLvqyhtDvK7gbTVn7auSBikqjqkSTEiE89asLv4b4Dife1k6VoesfwR4Bydns4",
  "key15": "32ZGq8PpgfjkbdXwDKB3wj4GzFiy6YEQqpxktgPaNPrMWgeoqKJkhAwRy54tv4sdEvEaZVCp7PK8aDWvvKy85g75",
  "key16": "5xMZFSvxTYr76ihvaocvjutyrpGVCZcikCbpioMNc21SMzc7LVn2W7evJL2DW1Ppqn4UujY34HjKz7RLA1bcPoaN",
  "key17": "4UQ4CS12XBck2TTuisLX5Bm6XB1HDeMgXoyVbybEdGckcp9cg11hA5xr1agmrhMU5qdXvAxCJvJbk9ARDiwL4rs",
  "key18": "5c4Mu3o4h3hVe8rJyBJZ5VBWGiq8o93d5QnoZrew9GvsT9bmng3wfGTF3QiejbN9pok2ntbuzE9AMJoWZ5dhNoeV",
  "key19": "5aJAKgTxm1hrajEg1sumfu61VkHoFEvC4Hwf6pASSLNbZHw1fufXQCk14j6NRXebJDa7KoAKE71AoBCgQbub3cSi",
  "key20": "qcbPvQ9a3w9TwupFV7BZ5j7kwtBQx4harQYXbSFLd5Pfr4NaNcyQgU5ZVC2vBFxmk5xT3SApb4d4ER17pj9jbMf",
  "key21": "2JtHmKNQx3iv8SesRLFb3iPbUx6XReSKxVqt27x7WkSiD2wFGj8PcCUHuVemQK4GD8p9p1FirnewSTUKBDyVF8Xp",
  "key22": "51sMJXEWqLVVY79nyv7BuH21pAvagXmDs61fSRLy6HtQUogJpxGfi643wCqHQx2p7t7nTVb3Xc43fr3KccBWXQng",
  "key23": "2uK2rAmwtLT2Xf7WCNTAjc4anNTN76vAY6mdJrKS8FFse4YBqB496AqeXQATf3x7rDKLYekVC7aqSU7nudsEYior",
  "key24": "2kmR4p1ED5PWYTcv9fxpWagXWUMLh5aNqVACAJjSzttszeJEkCaESVtSeySZqRh24UegLFZbUuoJmq3YsdDUm6hZ",
  "key25": "35HvqBK7Zj39FyGR2pvyG3ethuZ2qfE7eBc5BFfmtpoPt34zk1uTjLzP5CnWQVfYf7FRUcfYi7SDSjLXsTLy95FJ",
  "key26": "4Sfk3RUdzy1jhxtSV2puStC1LojnWh9r7n98WyhyKHcr48MHwXz7VRNafHxFHndUuukMeXPWxvxeoSBCefAtiQVd",
  "key27": "2XCZHZaa5doSqyrGXQak2gmWamyjTejXMjRnuoJ6xGAZ3wuJmKYhVkUfZX3Pn9TAmSBMaiBkXAyzCY8WPsMuuHhS",
  "key28": "2hNi8oqiCTGp547vJ2W4LKtbdcM9vverLozZkQBSDxUQzqiRKxeGmuh2mb5kehPdUr7SmMnUK6tePRdZKo8ian7S",
  "key29": "4ze2XQQYbKT2Mzh1qyBzbS2UNuwbcDMh1G3Sax9DuJG6XmGMsMgJ5iAtPUorSjwqwLAXfavf8CSQUVCmoGUsvpvg",
  "key30": "4G6huhygZmobw5xfb4JWGeCWjKCQ2m6SE2HSzh6byJtGHc5RpRMwYfeP3VvXoEFpZNqb4jSrBr2DtZFhCVa3JQVd",
  "key31": "3PLPsKjm3UZEp8ccvDzR9LtVtEXieRiq14JieJjrtFgW3Ai4zuiEF16Mvvrg9AoDuzRCM6eRiGeSbpanPEbwGMXS",
  "key32": "5JY9oMujq2baiDd3e2wszHJw8FQYeNWtN3EAbCcdptB8b3NWXGcSF9egbpu7mxhmCqRVYcjGSeRabESezfsgNc5o",
  "key33": "26qHMwbHr5NS1jTBFWRN1ZC3dpX9iHsZLJ5ohFWhYewqpDRRRqDMqBJr8ZNGFtT49hitJFavziWdPg5asXaafzM9",
  "key34": "37vHkj3orwM9RzBXF4N3dDECfiVoP1QABSFMncvZmf8X5UJnGXGkBMsZcTdTDMo3DpnFLkcWDpUf25AvSbPCTcuW",
  "key35": "3KJXq2Fq9cKtLs2sqsVhrFbmJTSQC4kodULAJqJpjhSbRzMCY266MBpSF1QViCNr95GbyPvasc8vi9A4C3caoVtC",
  "key36": "3LbxphE2cwZuFBdyRYou4JxR2o9MY1fa5QN4P256QjYhbRSYRQ3KWeANKi5S3XDeixcvCgSHmWDeCLuZBDQjqyvc",
  "key37": "396KuHt26kNcX62fRuMgRYaErtJ1irYT9qJ6vQL5sYntt9S8fSRfYp1WcQBbeWyPf3TaqziE6fgDoe2sZJbg4Bzy",
  "key38": "569P1dmRTzDx6rQBRwNfnLBMwtANSnBKSNNxZy2BPyNQH7foQLUV2V2q9BqDZvSMRehmhsP56AC9HZpzDNAcjEqH",
  "key39": "2AfhofVw1wD1SEYZ4P7NXn2yhJqqcgbNgrFJp2sHn7PcC8DyAreBd1y81ENPPj3si9q3bMWNkEo1nrcxx42mDfxg",
  "key40": "5EnJim1emDYGwVnggYXgsEyXDfQ6PqCAUsrfLoqTfgcTWojKQff5HQW6u1DQutmqQPm5v3dpmYQVg3rTCycBkwWX",
  "key41": "51HjcWwB7Mc2Pm8mPWVLqHVW38Hvh3pTayx8MEKfJpkR1WViV9sgaYeh6xh4kYhZiNCQFEkCAE2We6DuNbzyLjB3",
  "key42": "5164nQHwgL95oUi6HmGVdNiQN1jnmfWnzoparTs7mqFEdrYuuXMw8JvuVMeoqdER45A9nc1npc82oZvUJawhY39g",
  "key43": "53cwmEG4cyXWnm3ek3kaP2ddX8nJXNJimMi8ZRg1qcabzxTzyvv37AiSYrWjjpY3o6muHPQFVzBdn7m9Puv8HMoJ",
  "key44": "9ajeWZLH8xJffFUr2VZa5B9HbboePrw88T2iNe8uMLM7uThaMaf4dNoY8EdFu5z2gMTqaLkaWe4tcuq4uq3PKHH"
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
