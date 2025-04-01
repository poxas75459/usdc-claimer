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
    "2kYFhErv6siM27cgzWq7ivrFKnR2swH9WP921JASWaAroJhmiRhaKCmswKK6EjVZN8FRqLSfgBhixt7csUtPcmAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VyDHmeKcdrEbP1rgCA3DFJGxTDMP4N1Dnx6DStnhLnDuLFWL7jWRbV97CAm3TZKtbaJo2B9DGgMpfVZ98Lc1s3",
  "key1": "64YA28PwV6ddUmktypdstC7ZnyiphQdZKci7VF2xSEEEbPVmH8QJ64c6ujdYVAyQcFCZrZxbG6WDtXFtuFZXYQFY",
  "key2": "5tKFWfbfCuCSwMRaPhyMqMDY8qVPCoRkev4AJtJcx1FmJHKVeVAq1qHgr5ikP7Zr9cF4qGw82pJvryuY4QS8RUCx",
  "key3": "3qovuPD4Qwtm1wE8USEhzSz47J86jmUNL8UjhCbnyvs8rakXogH54LxAb1LRk8tNLRqhW21jqxDyJPFW3YDHZvvM",
  "key4": "2S7HJNSDvGrXtu8XUAik38HMwXMxC7CPTWR4z6hRb2pigixygM8GWoPhyfZopyUDR7a2TivgDDYt1iA8VGGr9fPs",
  "key5": "4a2Grcg8xphJZaP8yM42UZmma2TkRkxpLp9WiUvt4zU9kJdLyzqdkE6G38iPFgosJWPM9K586HWtiodug1aQtxTS",
  "key6": "3rSoPa6NtYj2wPz7N79A1mtBQNgZ4DaXnJkdAAXcueHdoUcZt6ySAJVgkeGUFBVuFgxLrxongu7eKNJzPG5qWvtL",
  "key7": "3Hwd8CFBxTk8pxm44aAHqBJWC11xpVvNvbUvQsDujEf91brPXwxamynUTjAifXms5T1yrEVRVVr9pLdau8S1BN9q",
  "key8": "4CnSPBRXubdA5gBzohFKiWq2QXaigJd2stqMTbZTb5Q8V3R7QdnZzKJYnMCuQXVy7FbhbqV5PHdhk21PuCQWPVPp",
  "key9": "5emjbsZCs76LBPWaLsSBG2BHsEzU1qaufJUfG45SDGBDWd9vCQdmiEsgd7mBNtmUXMenk38tuJ4nyGy62rE3b9nz",
  "key10": "3HmxBmYDU16PPEtggAmUL5yDXugzJ7ydLNefd8kQHdke5VLPaAmfPfmZKGKfyQmxjQsesXS3XJ1ATZiKJFqfgUtb",
  "key11": "2dttaVsvaJwES1YQCph7EN4NiHrD2grK9BDsKpy1Bp2YMNYWJzu76Lg7EHz9ULfe67PzRL7e92tLLB4T3L6Pcpb8",
  "key12": "36t2RVQrC2ZrRmYwPV7TFcMJ5RQNMBEeuAibsxQyAob6ejKLFFtA8y2TPdR4BMhLDNo98KbmpKPTjx74kmkf4s5R",
  "key13": "52rNr5jZmDtncLvVfj66rFHuKw7rnkjbmZbrwFo6yFzVa8iewQSHHXbNCc7meoSF4qcBnBh54UNgRGLrRnAGAJBS",
  "key14": "2dw6neuf5rxc8oUvrh7r3W4PFRZ1JvnJauV7L9bRQQN8kmKqJDrfPz4zDfNVvHVcLteobKcyWTAt1VMpfyq2ASgD",
  "key15": "3qk6q3pkrmGzGbkMK3Q1rh68XE9uqXqkBbT38VeTSzcAZQRLaVqRsmmEjk6AT2Sa3hsGX8VEwhHWxxBm3zstXzSP",
  "key16": "3TZ9YqbbDm28wnpN6cBaradsdcWZcy8L4k5kC45P7xwT2J5H94MDFvTRc1yLwXBhzWEwN7Zz2mfVKksy8YwvoXSM",
  "key17": "4qEt6FsVETzHTuUYJHxhSQ2zagDQTfjwcj2VnvHmux18VavNnnMk3KSQCe1CQo8RbMUVG5yU8UnwekTLVoZsgB4A",
  "key18": "rj4rkDcemuEZQxUff1iqHioWwtPBaG5ohHufYLETXyJkdaBcDjVAoP86wwDYFLL4SAdzNpdbQ3PzyXym5jWd6At",
  "key19": "478PBJbM2t7HZhUHLt9Kyx3on3ANmz1mb2tvCbh2KWUBQKzVs2zhpwrL7CYHqZerxrU3JiVabWrPBStqGPN2RRM2",
  "key20": "4KJzXHvX1mh8oRxwejwVkrm3Tyb8tozm2TXDYPvj68Fu9NP6N7hs1EZGBxMzBshjB49qNf5x84J3XsrDChAaaWiF",
  "key21": "28nxTo4egKEVyFY9xJ2jVU55ipH13b1n93adRYkEqQ8fxt2BRUtyqkPjijr7aWoD7kmLEh4P6H6tCiokYFRDpKJN",
  "key22": "3yaJz94YLEbbsUBJk9s5ysSnUuJDty6yUtiSgfubBqSJUkpGsoizSdZr3UM8rfxBfNwCrpV8cnGhAVnRe9Zciuvn",
  "key23": "gk2cmJfBCf25XUCULyRj9WKnkD5x77rgDRPA4yySQWXk4gYJk9puNdyf9rJAKzNXUnXr1vyJXchxRHv9vtf1mNW",
  "key24": "3sx1YdoVSuxrvfiktTPZrJeka9GVLNPwvY4vx3vhcPKaAKfPqUUdik16PV1WFv6MgTq6hqJxbmCMpWqSrhBaL5Xd",
  "key25": "5eHDxecAZ72YwmGBFr2jgGLNUe8bpiuVjzUjXw7mPHDAbihokRzpHQJZvDAv3pQnngk5xoA82CEKxvYvE3CsFDRB",
  "key26": "4doc86ZFz8T17rrukEkyHmaHHgvrvVgV15SuWhTsAkSvmoj9ttFeQxZeXCXVRtnfn4gscf4fttsgRQYf5wTQEnPh",
  "key27": "29TKFRQd4qqTGchn7phby9NRpeHW89ydAqP3Rqph1abJa4czDSGH7K8KLHhoGEG1dcNm14kqydQGNgaUF9nspHKr",
  "key28": "5H12iEayiRErEU2Gc85odahkgmWYucT77HDfRjoVYQTRvueaCorh431KFRYrQQzZhYbAbHpyb8n3z8ymvHyRWyJn",
  "key29": "5riJKt4GGhNmi8p9nHbuQsbZezX5uPNr4SRzhT8QwpbqGnWZMfZ1XqTUdAXhraPqg1p4HbZsdhaCnV1aFjBtj9Wk",
  "key30": "5bnL7QUpo9uZKrg16Rf5QvutRtp65fWyV6QpC8MX7858EeVYpWTgSQKk7dpdbEWQ7gT91HteKF11m6NufTScq1SH",
  "key31": "TkM3rQ7xUsVGXV7qUTBNYqDb3TboCJtGpPWxNAWtwhaDdmzZj2NiVPkWQ7gWZp7GtHQEjfeSM42ouSxjjVVnpbU",
  "key32": "6x78yQs8FXZxgc2Xh2aRzHZDup7TP5eVD9sDUZSCZVVT3ryChDLXgdd7SNwGFUyJUnk3uzpB9aPJrzho6LuxWm9",
  "key33": "5GSQsB1p5nYs2K5KNfxkBv6e5giEYZneRF2v5yJyxrwXzAJnuuxkXSXQieuPxH9aX8xkNFjFxmUyG4SiwqWsJ4h1",
  "key34": "63xDLgbDNvEFpgvFd58CESBr3zJJyMiF5CDJTV7CP2XNrcjLsdbLHvhsePJm5Hw83HJovCtt5RMwRhW4u3PjCWAf",
  "key35": "eV4LRu7T9NTQQpfDDF8e7t7Lh6wW1okyYC38aGMwN7sRmDcis1cpCJr3agyVnDkmioLRS9snP6T8gzgHuvqahMF",
  "key36": "4BojWrd27Z1Kh58tigZ62x8NUsf2q6AughvutRhdwXNWvHDfJKG7Qq4AJ1sPFwh9xC4CRtLR96BCZncxTNxxdK9g",
  "key37": "38crGTwh4YfNfNN1LRRUB2gxau9SktaL9pkR4C6uR49WF5PptK6rxdAeVQiKfVJD3EnqDQWYDEJpiseMJ6Mw6y47",
  "key38": "5wnT831QcP4i3RLT1yFY9a6Rot3DyDSNMVkMHd8Xe2BZNZNUECLxZ8HTwrNLfvWjrEvAfJon7Aw7u7SQ3HLP1PPA",
  "key39": "4ZsjSoTP7YeRAspkgdgc8hpNmVb7dgPaq3ZVD1NsBai5x7wDhuGR8igJgptdTgqm4cKNJTTWwioeRo3kU6RsTyK9",
  "key40": "5fGHwoRzG7gJsZdbf5TnX3t9nEwcndssB2TyagzntaeK5TWcAmcXS4fghwmfxyenk3whG83Q9EAuujxRvZtCYGob",
  "key41": "23uj1EVsfzuuvFYJ5PNcKhVBV3ko9dUe7WmeM4LNrPzvGvyjfGRJRSHxcNJbQGCPsc6yWDh9dptGEonzMUvnD6WP",
  "key42": "3mDHDDL9XrQfRgYL5kEgU63aprgpt6jdDboQxH75oq5BecFaviU6geh8mpc35RswmC1b7dNWtAiQAH2aNTbbv4wr"
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
