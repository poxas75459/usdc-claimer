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
    "sC5Fs76sgNi6gS1GGRXDzkFuWcnR5CcWUXhoSDA9cyiKePG4q6csxZjkbTifPsNSzT3ua2k9PRUaaEgvYWrEwK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUgqtb9vESqmzPUSkYusPf6wqGkVr841URqtx8jVVsxDyvD6FeKTCv3DSrQj85JGyKo2aTmZ3cKMHGA9TqH38q9",
  "key1": "5uEEYaLVeyZ45RvgLGXi5QBg19N4V3HTcaricoi1bnLiy8HikmEdXYzXd4V3H3JbdBV1dkxGMykEZMRf1LcG9kYH",
  "key2": "4jNy29uqcUYherB5x9FXZJLQ4u2AkNboT6Qi1f6yrjdJTmDMHEMMsq28rwR99pLwYmXH2kNy1Do3nTg84NMurXVF",
  "key3": "4r15JFML33GjiG5VzPY8nuTZsWuznuF6QVSxW5Qdk28k5hJPbEK8U6g1cTJL15nWktHqCTAC7kBvQBmkkg9EKmAw",
  "key4": "2xUjyruCRcCkG781jNQMDMJ1fPPRSAP61mcanJZusGWhxSQiTBjj58pG6gjTwUzwR8TCffXFeKgDKmzve2RtzZWY",
  "key5": "3zEwkZUyTUQqdcHgoRQuPLPSrjYZ9udbLVa7wmiuQVLwcREyHJrtVTNYdGjRMx499NbwdJQmsaXK3sA4dkYx5TzT",
  "key6": "VSjH3rp3MUT1tp79kxeih9rDXJXoyoXjSjXp5M764EqvJtxaPDDmNRBCTia9kNL5Sns2fg72whUECR2NKwne82K",
  "key7": "5vrA2umRAQnbDmt2wDseNFLskGGhbzMwNh6aLGDzJP9gBdwyomtEMdHvzcEkJiMamqEC3ZFFUKXCuVZrW2d1tfV7",
  "key8": "hQxmcsw2KtYEg1WKeYi4HShBM7p1sX4UCbKdnP9Yr5npDAQKXmWNxEcQu5fAwX93G1nBd7SYuWQUyVyEEMvsSzm",
  "key9": "sPsKL5hUj3cicrLczTfMh1tYYHXRXtnjyHvEUNsdmQtNfrnFQs6iXLpppfd6L8AeJsprXykDvetVQ2KruNQydhS",
  "key10": "49MESQj937QDMS4TWFmnBjUwzq3SvM1bBLLYAN8Fxr1FF5GpYzKx2Ut7cbHFhEqmgdLU1BPERfntVdWQakrHmnkS",
  "key11": "46jGy44SMkbAWZC9YPbiXzAyPXDnkbrRTb6NnGboULUQv6gv8tbatAATGUbZ18CZTsjjo52Sx9KJT1Yx9KGfzE8B",
  "key12": "2CcyfjsNBLZ53tqfgLShuLmNQ73fFM9CNdvHcf28epKXKbFp835cwDPdq1fsQRttfBVq4dwyCyQbLYLoKWQDgKq8",
  "key13": "2tQYtcxaMXtVCXXobXoEyCkA5PLcYGXdY3ED5Lskyq1yYr1jtL5d2jGwNhkL17b2LwMsPGCZif8HKZL3kLpBxDW2",
  "key14": "51S5n7a5qEbceXkyzVBQ5e6X9ESBPyozpchGnFvgzQdPRKhcQEDK6phsyfGpixhviE7dtPzaPBF8nRQT9QeAPxNy",
  "key15": "5PvBYq3axPSPASrjeDghwxgkZA7xzdCqf5kP8r8mV4QH6w6JJ6rXAhVKT9yNs8WQV2h5Hi46rB1z9SGBv1sy4eCX",
  "key16": "GvGz7LRKrGJeZy67AnjYrSn14UBPKwTkkZJxv1KoQUsLLPqFCkZYmhBX88dSYyxGCK7VZSMYKSXYfY6Mb2MB37Q",
  "key17": "rUcNjLPZfbPcRPkxBrVHAX6tamEfb8GcxLxTUUscvyWFw757TcXbXnPNDD1nWxpzxm7cVoAzYADUFD9LJeY8hmL",
  "key18": "8U9goNQwhEGYiU4xWLQLPYV1jGQC21DASwJzonhJha1wCNH2bNgNWA5HXuyS5mmvwnqvFHWSD1WiPzLPr56Beoc",
  "key19": "2JDYfUL5yngL8VxVUYaZn2vP21zJHuJLr6XHTL8mjsa1g8hjvKigkBg4sdfL8reVJ8vABm8NbSG6Esj8ZMMudFNC",
  "key20": "4U6eyU1ykmvwKqQW2YC1U1ZzygMcq3T5N9TAeVyiw4VsYfVTHUnTiuW2A6zaP4kcmpGZbX6HEHKnHKtTjWAPfzLH",
  "key21": "5dkh2Mz1wevqXUqeA6MeGxGQdETEcFzB1cdv1JN5t1mYiUiUiSEJ7PzKr4FCUVzYVdtozbX2UTSTHjmkYZzstCJe",
  "key22": "4sb32nuKRgk8z4rQpnW43VP7u6szuGhgzEVmo8pWQHFg8XN1iQMYN4hxvZeSiXcc2UXwKkHGuW9Y4VButjMqMPBp",
  "key23": "4WdCvKQSr2ADQKDfRoRGGYe3Z3sEbfnURmXYPGSzYjCAbusDvwya5Rnbm5z7rX4hkqFQANVfRwJEfvkYYFvfd1Et",
  "key24": "4nY5A4iH3GaARbhii3LVNDP25LVyeaq2TgJSaWuakCo8e5ptyCS3GhfF7pJ7PStW3K1qD4YMtzGov3Pat2jwW6gA",
  "key25": "ZoMsMx3dYrZ2pYsE6iSqUHzmjn141VFMVHuVw2r5fCw3JrYFYezzzJXXJZgCzpRJjLyifb7jVZhchsQkLbszkT5",
  "key26": "nYYHatPsYWM1jGkypzMVv4VRe6pGFZwEBxV1m7Gd1vR3Jy5AviudVuyqwNXAfXc4gNdXvfzTBwBmNKQ8jm1pXZG",
  "key27": "245JbZHHykzTThixvxFsEftADbKZRMkn5wuEb1g6r8iQBP8Y5ss8PBgURe9X7LoW2TycAkaGGEXLJTmKJ6vLJG53",
  "key28": "3xFoWYKY9VnYE2tGbk4fiRAbHNe84KHR8XqbSuwFQTDHnTJUxybSL2YkLrHREY1kxtPGdkTBbDV2kaBLsmwobUrT",
  "key29": "4AboXHvgAqNxwCtipqkvEkLpUob85mhyUq37YEHDYzgPYUGjejxzuNBV5TgQucb5SnQauaPBMVcF14iVYc3xRXXf",
  "key30": "5sGzrNzjSpgEd9tWZbzF9kV86Vs8CLWZZhXCrjxXGa2sq9y4THo3qRuejUT9S8Wqe4uDbLVBWT4d7YLnLtUZiTZf",
  "key31": "7qwixvjUvKtNL8NFzBCy7ytdfP5iWwcNCUSMgRyfiue861PDAmrFLXp7Aq3Lbxo9Z5xeRVmdLGeYDDky39dSwhS",
  "key32": "2WcZkiT9mfihjAUmGNwyHG5ZemLe623HZyyKP7pfVje1B3iCVhori23NkRB7zvTxYP8vQ5VREFZHH49bUj91JK5h",
  "key33": "4yesJufaPpb1MDjUkv5u22n3EMvuR4XC53xNGFfq9eA2UdMYPq8NNGLSU317rS2Tooys2dBicfCnm85VUV9yv4No",
  "key34": "3CTL4eeuVaWvfn7EkxPofv35pNARcafob3YSwBY58wwzFr62qn5rxRaoxmDJfUma9AXn4QXuPKjdHH7d81BszM64",
  "key35": "JESwGrM8BNmh8XBE51RzrmRQKxsUiyf4isKZpttF9BWB1h41CKeDn5HGUijCNWX4QRdDeDRVptRn4GEcgdXjUJ9",
  "key36": "2CAnT34MLYkhzjA7keR83yYFDodca5yizmwvuVbomGn2DPoLK1nGcvpx8Gz9qu8r5vz43NPC339WUkQg9ftHkMpL",
  "key37": "4QFgHpEr94vtxwcuC4ZCnD8SegDTFrEZbVUAY9AdYT7rHaMzss5yyRe9X9MG3LE663jQEa2SX1NXef7bFDwJn81z",
  "key38": "4NDDjmrwDXPomv1SwQJnZbE8XPTrg8z4HLsnbjB4XSnhXKonwV551mSmsxfxoHFA6jEaignUR1Wsb5JVxmvteN46",
  "key39": "4h9EVDFFDPVwTTJRqszd9PQahRo8P9MzzbVfnQboDJ5ahVoWt5nUL8t3dmmcd9Y6txgStYJBZqMXNZaLhLp6NhrR",
  "key40": "4URx8R2PgbE7STWxiKr1BA8nPnRPj27wwEHUe13w3NApYvnyRJhaBSBamHsKeQ3rBr5q3URrUe6EuyszX1wao5va",
  "key41": "2JcXPrNZoNzPMQqkEXyy3yzDakLW3YfAug2BWugHg2RvacvRi8QaU9Xe7BH4WoSeF2Z9a4KrHfVmaodwFvztFu9c",
  "key42": "4UZjrGTDCnK7geeCcE8Y7aaktkgpASDF5uPNj3GXHRMuKJHJyGVLNgd7ts9e4fnoy1psu7iiV1rqyMvD2P5b4Ymf",
  "key43": "36jSEDUfpu3CxDnaag45vwnodesnUc4UyzxmkcLeW9rDCYVmQFFHBT3CMYn1L4BWeU1EFGg8A9CkASt9TXQhUY7L",
  "key44": "3gB4QAc296k89sWjBzzp65yk3dKQtPpsx8qzccUB3sMScyJheC29wWwGGyCfYf8iwTthhWs6HKThSPrtjuX6PqFz",
  "key45": "2uSwinrL2pXLeC5nWGmskmcP4V4cva6tn9uvdHty9pLjwa9EgdcU1EZ7EDMtoWZsD73ZuAf4nB1ecshqJcJPw5fp",
  "key46": "2u1t1TZMjKrVNEmq2oMXrMWtJBiQdwnwYTbrTzM9h6FYYByNtHqdox9jt59V8Yt3PJnh3gsRxiByJWk59YsMTG82",
  "key47": "QZsWGryKwx1LCpckbL7PMDQAAoqVRmLi87QqyMVk3g7HsQfRmcKBQyDKsBASn4ih9TNk8hJEqqr4i2shs37DRwF"
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
