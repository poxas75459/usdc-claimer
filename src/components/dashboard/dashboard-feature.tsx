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
    "2V46dYfPdWSRNGrUVn8PbP2JDKGHVEru5LyH3xEqkr6ohu9zH9BtyHCmJAa99kD7kadiEni6RoQPtXTgq1UAY4fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZkLr9QSyVWv2eRrQJYfSYnSQG8XWpgvmzFyt26o3bj32dXKL7aWZqFVZspEqFkc9uqZYZFdLubmvmTaj2uiJsV",
  "key1": "5Z3HHZUoMLVz8TNuS4w19ghfM1pVXbgATcnrKBtywuFQHi7tCtsvuq6aZRXw88DXssbjgoxnwyH7WNiwcjtWZYQA",
  "key2": "3Gp1Srs4d5tWq69WdUZm4FLFALSN8tfYp1EkdtRxw2avfmn4pQ3ZKZ94obngdGuvbCUHM6HbAaTHmN9XtuusfzmU",
  "key3": "5WA4RftR44M8YukK6jnUpRo2htf6ybpX25AxT4qmmWYaKK7gxMjwUgk9ywfx91RAJuVce32GgPKh7yMutkWuRArX",
  "key4": "4eQdpjrxiFHjgsJ3T4xZP3yWZQuAosYcvE94CftFr8HM1mU9zWHkQoZagvjjVwpEDZRbzmwHZbcnF4cwwZxeHsWG",
  "key5": "4NcPh68Q4VmJqsA56KyEgurMoQKCjFg6KJy66xKJVG5TbqWx7PUJ5DugE9RHtAo4fuUykVkWrFqSfHztz1XAH58x",
  "key6": "4DNvW2xmjPdEAnfvX3FbHqVFuN9Kp975mv5ZdH9DYLwUdereqe2SDshBm7xhEtsHn58BwuW1CwXhENsmcSmcLCe3",
  "key7": "GRwpC69EypA1uvDxr3yTnU2Jvv8c61jsJMmNXphrWhZUi3frVtTwqMxZPwoz9eDMTgsPTLyzHrqUkBhiUTQ2ygi",
  "key8": "oF7AeE75UHT2Z7Wm6EXCWsDTSgqxe7vARCfS1wcvkK55phXKUE7SS72Wjao1J7wvSz9npnxPyqY2eVYCrCWPtur",
  "key9": "48eshmYL6Du3XR9Sw2x6MF85WL22ccCmoy7FF68DPcFHTQ7TttYLbCGuQfJimDc1a2WTjgk48JEK3zqywwdGBZVB",
  "key10": "HJVsLb6WXaEzLns6GY212XuTbeEBiCgTycPtdyuDivpfMEAQckctK8dMvqKn5YL1mpsJSGtCtBYLAMi9QxU7C5k",
  "key11": "4386xrfW8sbg3tPvBq5nsgQM4ui28rPtFTza7qEdkUvdPp1N7y6z4M57TXQojSPATpjz3Mk1Wf4vYzmup39eNmmY",
  "key12": "5mFJLit7CFBNmRdNKHVUBrUMWztXrGSezBBwSfXQqpNCA4Lp4QodEVCBqJHXecE461hNCupNLRTc66UM7e9FsY6C",
  "key13": "22pokr4xhzkizSQ4zNKQoJ5zBk4XXiQBhLNdMLRnDNjPEWXukTpUEtFs3QCtKmtM74Ez7Axd6Q2EQgaAC6xs6Pmp",
  "key14": "2QmRF56zv5n5WwuVpToqmrGe1uXKf8rfztedPLtDPNsiVKgbzDiYmFy9nYqLEpGbvCZZKgB7vNTwHmKKvqrNst35",
  "key15": "cZgtLR5wXibaaUh2UzjJ8bA4bBKChMEZAy5ej27iY28SKiypRayfQsz65duFKTGEbCDBPSooAxDEN1T3g6wPPYm",
  "key16": "2QhdR8x7TWgVybpJ5YA3E3CBxn3zKw1m4FTLCrhMfvM8Dj9QTyfuiAhYooeXRhwd1iAES8sWoNx69Ev9AQUEnxfQ",
  "key17": "WiTziuGBc3KMJwtB6bdahRZcjNv1Lj5TxKy6unxJuNFhcRC7ptiHutZimQ1aJNLZdvnws11SQt6FbZ6nmaGifVN",
  "key18": "66AHyxk6CvQxf6xAuJnGRu74m6jyMKoeDWQ1kDMnBk5Wqw8TorZxyHFYFUhjfGwy7KoJLFZtBCoc7mwnFD4eaf3P",
  "key19": "6x96192ERxCsUBcmHBiEsUxHKbHKDLnuFcLMjT5KUxpE8FFrECSpS5vR1pWD9NQwSSXhT6fpYw9gU4ybyd5fEGn",
  "key20": "4bBxJ7Ssoty5si1V6dvzPCBDWvvsYMSkHzyVK4SdhqeMiYe8XNvALXp73PjALVvw5cRavQCTwzHraCa1DDA5Rki6",
  "key21": "56SdjsuN7y7fpYCMd1XJRgA6NoKFtoVd6461Qryikt3n8mJy5J3QJ8yDxCARRPdrN2huZP3ZAUKSNZKE2FXL2ant",
  "key22": "66fVPSzz1WW8DRWRX5CT3duKTethAz7dEUqXvh799Vpr6nYHwXn1X46VaSWF6zoQgjnAfrgQ9PpJojpMZtKTRgw9",
  "key23": "2NLECrBReYUHfcyojzPUB2Ww1gNwypngrPNujswaEwiSw14BBUGoYHqjZ3ViPAqqvcuGfqbN5VJAMCy5zwyCNxnK",
  "key24": "4C1br1x5t5Ku2spc4XPVD1rK3Bwp1BeDrnNgCDmibjtZCZQH12TVBTQbrnNfsFe6PV59o6htmHFYYJJMTvFF4noX",
  "key25": "4H2hVb9jndFUDJX4cfyGz15MYwBvDiT4WMnPPpF4ayEAscm2mFHE7kG9gc3TQCaZgyJ4yWBp7o8iAJLbtMedHZpX",
  "key26": "2iaw2u81rMbNbNmdojT89SSn6qCdi9CTNAYs6m6XBT5RmCUMFVWSovpucTgJ492mUiKEDhcmEfQxKYe5vhm4JnnB",
  "key27": "4qFEd5qsAarcusKSzcahzPx5dUPK4irxwSe1fa8fk8GJZ1ye6EoxxnZLha3wMjfwojRYLkDsv83HzuAuGek5hqwX",
  "key28": "55CnVsPfXifmRraG6uaKmngBukJPcaWDgJJsmjCVpEMVEdCrChfh1bpk1KNcqGspTj5rsNuaYgYBy3xj3mYqWK8f",
  "key29": "5MmwfRg6upGRKteiACkUtZq5LJ7xDnphSzG17LT93qNnfXYvdxBmT51gPV9AVZ5gSKSvW7Y3FwYo3mm7HavTA2JH",
  "key30": "3s5xMPeH6nKpvFT5Bghb1jYaPbYanVVZkLjGJTsDJAvMEC9ftwHam2yyaper6EznBhyiviWM6U2ix2HBLcbB6GyX",
  "key31": "5EW8xqTXdCz98hNmHiMQBPF3JmjnsHESqzNtxVz5RNuXk9xE8KYM9NT5akbmM64duWALSvBDfUMzcRNAgw6ss8D9",
  "key32": "58Qi9yLwmTLmQsAzWLSQty2HinxL5NBygUbUUu5evqKCquAYxAghocT8wN5PJmPC1i3K4uCAN8aGFvk7E8suSsup",
  "key33": "5CRkFJWSKN2c4RkWio5d4QDm6LRLnWJF1uqqwEq55ubAi3SMJKA97czBJzASVvHKQJkSJPcdE7PvBH1y9m3sVwB2",
  "key34": "4T6whwrKNM5cBp5kx6aEV6aRYh5T6iDno6fLZXE92EB12meucGFjhtJbhHUrp5oD7vMKGeVprEgNcJmZmdFYFhMG",
  "key35": "3bBFL65q3C8rDWEG7eRhBBtRo7RJMHNiS6Pa9ufzYVGqniWn3fNwbrovL8hznq8XqBFSk9JvY9tHFjnRs6ox2Pug",
  "key36": "55EYHdXeuJxDHFFZ4aynX7nNKvDSvmXpQu4AnLRpAUmzgMGdjKtZmbJxzfiacL39ZjrSTsmFvR4JgYRM8Ab5ZExg",
  "key37": "65jr1GYLDb7RRGsXohA2hVoR1vn5vXXEBvT3sU2Z7XBksKRq67673pjvCXqEU8ZQRc3QcrE3PnxAU2cNHj1EvHkq",
  "key38": "zEfCif7qwVpa1tLG5xb8FeQmbjbuJBJfb1HbzSqE6oUTj5TydGfz17AtHJAUandciRFeAJ2E5oBDjXFexqzNtC8",
  "key39": "3aVdwjCy994NSBpJpSPtwgHWiyn2XRt6RjPzQttxwtnfm5ArhoKTEG8vrMjb8ieutxwrgh88BuR5jS83KafkQPgF",
  "key40": "dmnrAZm2qLbb5GRJoCEjQoBbW9PFxZdkFEkkdK7yiqes5HkM7HQMo5ntXX6wnCrMTH31WWXertLXSNkj2MEnkEM",
  "key41": "59EfTcmjcSXp8bASPuWzNGcSPWeyNrY3FExBcNuP1SR3CDV1uaxBYwaZ1YqVu6KETCj2RYt2zSaFTCrh8pnbqXR7",
  "key42": "5miUEJA4BV8U8zZuKYVRnjcZw18u7vm7s9EygGq34bnJkNKy9fhc6MZb8QyaaekXBuQchVegV84NxqUCPN7LcLJq",
  "key43": "5rUbZQUPTkfQin6LpTV3axXgDJSSFnUrXc1NhF1NmrPwXZe633ehRyGuq5gMQja2ZzVegsA6VQrD9TFhXtZoxMmw"
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
