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
    "41qc72JLgqfYhZMHaSkSxo3BC8BmQUQUdNUFD64TC5zvyCdZgGbfzF5hidCeE8uq24nXsN8DzzS3B4HuoDwqKvGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMUw7L7TTz7iGcPH4J8Dtr1es3hSjdmE2NmokVSF75ifwB5C6mKBh2ZPFg8A4MVQVS77uNwwhMwYqWEdm1GhSUD",
  "key1": "aAKT9sdVUkuwcWsqkcmb9VvVpc4cEAykHJYyXzSDy1MAVVXKNKN29J8pocQpSVF5pino9uk4dcUqpHpCMCnnmt8",
  "key2": "28UdwCoqxN5JvVzZLPbNyDgdxtraSVoTcYP62xaNuKtfZQME49Fwp9xUN4gxwDo7vCWUtVywp3yCqtNMWRPqyb3i",
  "key3": "46vNHf37atd9KVZud9Sq5CFNfiwLMEqVSHdocRRBqoxZsFjF7uDyyKDQ3pTTKAQK7mrQpseW5sFts77raSudMD25",
  "key4": "57TmXEtXQyApXW6ZCBqLnoGonH6GGUAkTdjzk5n5HAf3FZBAmNJx59jATnqy4ngmS4pDYRKXKVEV5rfe8HP7szZz",
  "key5": "65zgBsDYDmrdq4pBz6S3v8hURYJdWhkoStyJZ2PqbYMbFYoryYLaRSi3Yfx4ndqc4Mg9jKZ6RV6rJxucbd8rfLRF",
  "key6": "25Rtiw8seVj8ohkvXSEiQQJwd2mLZubMSUSnU6p1EzVNDzU4mKUmLwCpastQbeyzKYFuZGzBHFjtLqKBYNjyxebq",
  "key7": "5LKr39kxiQK4CjC7W4Q2R19jn2KBUR3dniZ9piB2ba4euQZKLnr4z1Xrux9iz7Vsh3munpETbBmezKqZodNE7v1r",
  "key8": "2xiw4FFVabukj26mx5Hs8dsncMV8GFzNqyC4m8JmthCqWCxTuEF4h1aH4ucGeiaAchM1AZMnRqd5oZzEzcoUMamN",
  "key9": "KyBHQeacsdGjAqSBujjC5VmzBPZpJbiNmxQFzP7wUWnvGuTN7zrZvAbX2sMhnDhr511C9tVTu1iMtEy7s9QvQxy",
  "key10": "4B37RdCdhfCm2my7Kg34rGyGnhKfkh4K2NyjoPfqZaPSUPrsPborNwB8ChiuFrkLu7ieLn6kBPbSRWY4iinshwg6",
  "key11": "53fKyg7NmA4YvTFu2aev6Da9FGQzugizsmnBF1AmGeEFgthkHcz9yKbYR1ff2AJjZGnq54JNmZFPX8fG14kLT69j",
  "key12": "4QGkrL46tSHq1MmcroqkFo5GhAcdwjnMiRo5qgBJVdoKLykGViDP5CBeNkg9XcRKwyL8zRS9zHWyHw3VLcZfiTr7",
  "key13": "3nVjbC5N99m5SS2oHFGBLnkZbyzpkL55i9HaJ3yZk95gNB2BWWZzzFYfpxChUDGswUmRQHYaam4aQGLwg78mgeA6",
  "key14": "2oin1TpqjDL7AUwF688vCmk7YzompsdVZYPofNF7TP7o494L9pUmWai2wYiKjLZVLajxDCCDtEjjSADSQcYefEs8",
  "key15": "2jwoV5VFN6JtgpaZcq7t1DVXo5yvyFdZ9e3zK8rpBHSj7P1MdxzBLUSQTSSv6ML3Te8zR8BHJctQsVowJvP7gGMw",
  "key16": "dFHCoLjXZd4zJujdCysR2HbsWL7wt1iE86ADCvZ7xKfczYGdPZ1j63LHvZUtYHpVXujB7C6n3uCtokZxUVfsPTt",
  "key17": "3VTxRniTQD8FwnnUtp5nCcjF9YMTqhAMdS3B71mVKdVMHoLZyMcSHs42xTLN8w6hsBC8P7EbuoYTn9i5a2awsuKx",
  "key18": "28VJeAdTewRNTuj2RJMbSBhm4dar9Z7ttBZtkC4tUh4TjAHBDCmqcEFQcpbPB7AmPx7i6YhAJ8cwfWNqdvJ6npcX",
  "key19": "4x7K2QGaCpRZTezrmukjjY6D1Jaju96agUiyU8CTYiAyYq3rQoUZmWjEvYcWMGm9RaZZJ7kZYrqA44aLMQCp4oBM",
  "key20": "gQecLKvVLvCRBo6F7ae9sDUYo7wjtcNZZ9tfCtSXDzfHHWfAezVpDQ3nEwwZ4uWzDVYJMMsdtSNAFZPuRuptDAs",
  "key21": "67BvRgAhW2PW6PwhiVtav3pMbjMtdKrDfqHFqaWhXh1v1Gzg19VRUbpv3UWGcfV2dSzNtFM7cPSxtkgQRtBtmGB5",
  "key22": "3LaeyWjQ1mmTV3LUvHTG5MnicwWY7wxYGpc3jydhiPPmPqkjMohtoxQCbJji6g1SJ9ePxQmteWakKEMBH5yr2pHK",
  "key23": "3izpjT21cRDUwRdYZSaZ4RRwm5ggjn7ebFTvzs8LjPkCrVn4825dkZ93FkUdQ2A8uMrTfg7QUoP7py7V11F2YNoz",
  "key24": "4srt7DHLgrveaAtkp9iHoLQPfNyBtHUQCscf5xkjgMDmX6M6Fq2TVtaYFckzMqskxn3EiD2cCo6toNr48hDH3UGb",
  "key25": "3fRpob9Y73QZEse3Hz4taFDP52NyLDskJDbTNrzu5uhF3GekZdQLTNYFFzGXbf2yAWPjxfL2qaN3paCsFDFE5J11",
  "key26": "3Ycv9RLV4gxxEruqAqkDozAUqgy4GSmbYfyRSPcEu9Zy7Xz9yZkoksSKBfhr1K1Q8KYw5S4ddjEqvDM7HWZNhtKu",
  "key27": "3e4f4Yta8H86koPNfi1hg7kC3uPMvCur5vZeiKeTvJ2HTwVViqRfZKSKnT6pTQ8WnQk1ii14YTdLA2XjLb6gyety",
  "key28": "4wY55NFzma2M3rAQpSHmsgmbgoWQaSx3if7AEcSTp4RaEC6auavw5XchurKKsx3EyZht1sw71PMkXEJJpqGUVFBs",
  "key29": "3BFJGTWViTKdcE3EdaWZQzA1USfPi7hr7w1PKAy7BP5RmPMX6C5dxBZfwsi238rhcLkvW7R2uggit43m9TCZNWPe",
  "key30": "37yVTgtJfz5sdty5ntjNSXKJgiTUYN3qQWZgjEtimYXfdWrq5qS8fQWL4UuJNuCELb65Tar3WCLRDazuGPTz3NiQ",
  "key31": "srL2CoPyYev8oo3HkvrCK2WnLs5kcA5fdKaxJunnp5zdYkXZGpYh4tWKHujxxESvEWzni1eYzTKyAYBWa8p1nnw"
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
