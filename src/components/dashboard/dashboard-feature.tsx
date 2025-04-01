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
    "31R8J1xZnuALXZT8S4PkSxbKkPFNMcCzLUgv4RgBzCDKqREV2J9x4ig7MBNbKSwVMpSfYz6wxC4Rbp5psrbgo4dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdWH6Ms1SFskZN6Ld51Z6EjGtAJNAkXR1xKaH2qHNmNhm6jL13dwjLpcEKVvaiujgeqj71wWaGd6ihRwbYUb62P",
  "key1": "5t2sb3vuiS51BntLFD3Ap4Qu38MEjjKHWS22An9rYkKYwQjCeHxMVzNdrKBjyYHcGeNUD9cuHUeKyW9nKAWJxtWM",
  "key2": "3qpht5jUh1HPrMpEpCWVMc5Y912H6pcnMrXzViWaNCKieCMYBgSFTerUR26Ab5tVKPrK49U8Nh8QQmKcYbb37Ta9",
  "key3": "4rrL3sCjmGois2mqoQYMo3Qc83BbF8Rg1nCmPD4BL5wDSrDLRUnYt1sGtDF6AsFQiJqbQi9RoRiLE9CC5qGsAfHm",
  "key4": "63nChUV6KHFrGCiUYRJaTQ3XBCKSsqTEPthzEb8SZBkawHf7xMFDqfhbCX4vwdpHfpLbABcUvzdooowfUdzXW47e",
  "key5": "5UPG8iuhHArea51aS3UbjxVqU3V7Tak72c8L61gjcee1BNe5sHdyWaTvmmwgyKGspBtNXRuokoyLPb6i3uJZkx4P",
  "key6": "4ApzmHQab2g7y6vJfvnnZhAjSxKkAcnEB1R4aHyCEKuWMcHJeK4pHdYhyegmSvUCiQ45VB6Lw24sexp9u4wBRKNP",
  "key7": "4xBEzqCrdZzjuUGDdSqzqtihDDsw8ju4FhfggNh6kcBvcMJzEcyNBPnxirVaeB6cHSd3j63NiEs5ZRYVsu5UhmpR",
  "key8": "3PaeN4VAuTRZ8YuLs3NjVFQj562v35rijnUncg3mifkeYjGTJrNTn46o6RryqFBek3eSntxrMiw7nzpNSHWPSRC9",
  "key9": "5J5wnpBgNaZWt4dy76XvrSEjFmC9cJQtCjSxsEcqK75XS2nAuVjSxTqpcUUd91SEyLVLu3EJy93kBBw7WAGfNbcS",
  "key10": "3Q5FazgiSKk4Xc8pqHBjfjDZPmmAsfZEvZYoAQd5Ro5FoKTZaBDnX2NoSyHSUtw2L8HNwyHhyDNT5hNK2jt6sfFS",
  "key11": "5Px2CkV2Tuj3PaQQC4gpgAUea9WDHK9pRkuXugUUx5Ts7SxENWmGCXeL7yMtexXzVPpZGbiWBfMGMKWY2dZ3cgoK",
  "key12": "4V7Hr2XCL6CbtFEcGMzgxtskFwDsVbjaCi1JNjqV6dpWAZHZdh9qJJ1Dxv5RcZRNriANr8kE9w2hs58GQD3TR1aH",
  "key13": "3iaoi1tyKnTBe52m7WjCQArYXLaXEnFZ8xN5zHzo1jXqSE4SamJ8sZ9Ym5WNgXa79Bg1nMjDMb4kvWTemNwPmL6h",
  "key14": "672kxH2k3z75UAt6EYXiMYaTZMoszK6brYpZLeuYGxzyViUwhLAsDBvu3VQii6fbUbJFr3GUbGhuN1k2XCQ8sEi8",
  "key15": "3m7G2g6nUmwUtdMWk9vQ3UDWKJdvPWiPnHB54z1jYRQsNHzr8saAgXe5KzahCoEyrhMBh9hEvPNfM5rTNoZXakuw",
  "key16": "gdgbsg4NZ5ssz5hjPTj8DiGYzpdD8Cj8wiptYshXnejBMLGGouEh3fJtDJM5N9aDNB5TBjffTYjATwfcnpx7WZh",
  "key17": "2DH5YNYaq1Y7qdysVgN6RkyzNacE8z83noYpzPrqKhMJkR2Mts2vave3zN6snoKtuy1WjeTZTCHk5xndhtmrVYNo",
  "key18": "36cxw1KGXKFXQby4KJCve25WGPMnYoKh7G4AYokf3JHyCu85ERf1HZnfQ5w3Dmn8QL1WjWQM68MFbZhimJ13p39R",
  "key19": "5eHPAXtMRznrvAAWf5Tnajd354mTTbwR8KAzzDG4hqLKE39VUK7ewfLPNQcBJJHs69k1njPiYwP4aRWTWcL3EmAY",
  "key20": "5f4RDhkswadLjXRLWg73oYZBuC1MyRoun1U555VwAMbbR1V5zcxaDj8ZzEHyEzQyTGepfAfq6Xw7zzSQ9Rpsq6A5",
  "key21": "2FBZuAbzmQRoN2ieTA11vG2aUBF5CQzf8zCNGEuRFx5q8fo4X3Rxa8GGn8qx4cE4Awuph7XYckiNr3nVkjTzaAr7",
  "key22": "4RXvJZieMFps9hiCFHRG6cgxaLwTVBxKyrCJRBGqRytqRhVnuybv8G5RfkwBUfRy2MsZrNXWjuGeFeRXJvRmmQkA",
  "key23": "5PbcMSHjCZJ4dC382go9ntkhdWpx5pzTZjTWirLcFEFFchS8tznhqwhRP6KmsTVx8MHLkR4PLdFv6pxnYREM8jtw",
  "key24": "2pYd3xRdx1351ghzkBrBYG9y2DUynRDun5toxEDXPiwN9VpBpJmDdSy1qCFzNUzqFxiXCB768z48uydg4qGnzKKH",
  "key25": "25dGYtLutNCjm1SdrxL3igh8hjvpEqsi8mCQLUnrdjpiBcRwetdwiJwUToJ7FcUQv5u5M63zH6x228kxCrqYwJDq",
  "key26": "4zK88hrmjLHkaxJ6tgNywqnoG6xNQg5tY3JFQn9yM2cu3peBbxh2LrtWzfGoRnS1DeoCqXEzz9Uq93YNaYBdntu",
  "key27": "pUBKJfx8UwCrwHTHc8Rj55KHpFRprP3iJ22GgaY6wVfzdnmVxnhiUmGqywvATGuCm2qS5FLSJHh5FaYhr6pTbGb",
  "key28": "3e3UZ7YmaNtzuwGRmQcXEEeMiFVygwv4yngDVSvjmLXvxhtDzPb8wDGqi4Vqqdxzdrd2MzFETS2Z8uT5DXuReeJo",
  "key29": "UX8q9tYCX5aMDFNiKm9h4TBg59HXK8PAzqUcY4rPHcWGy2ZV4LVLiw3CHCpeemCNQcfgEAAQ5uZG1kXo9AxYvRw",
  "key30": "59ETTvLnCtHwje34XBvnZ82dBwxxdzfFxySpHNzwRLfLyGSjRTJSbX1LpC4MT1BxUdpKDMzTkd9e96AugLpo863c",
  "key31": "4LB2dQoVkW5Xnwq2gk3JfqkGEXAoN6JwmixLdp7Ki7yxrSGggfekF5D3v8DmbCv4YfnLtyd5FjzgjoAkwbrvUp8A",
  "key32": "ntUwQNTuCYq3QVvaBnKhAkeNuKNWirmrMiRuRh9KWhu3MGzoDYNuZKuBYRWLJP2Ab8UFMJiCBiKgf9Resrafn5R",
  "key33": "2xC9Y8pC12VCfQ2MXzQ49S7kYrptHuzLnKs4nrH8e6nETsomPf4pBmsHDQ5zXrzYKu4rZWoTZsR1jxNXHCZzvsmJ",
  "key34": "9WbEe2VzCbeGJG9LBExGtxLAfRK1ktMLLq2Y7Z4cVhmV7u9ZpdsVjNEm731vRmMxyWZZX4fF2aGFCiqG32FHdjQ",
  "key35": "2ECPKKLJ4BPmkKBC75cZoPdbCkpzovnbBY7aARBXKuW3nCREEhpAt9YwoXc6miCNmzeQ9PJ8Tt2xSnfVYMrR7Vo",
  "key36": "4woHwF97ccfHyVw8d5bT7uKtjT3c7hmDWJNCsXVWTUAZWwv6W8nr1AguKLQV5Xc3Sp8oQtP5SbMPjWJuixHR4CMy",
  "key37": "EexZwjPGM5z8AASC1Xa1EZ7uEvhyrarDz7tcdjKFeMchgv4dziN28yhajqHFdNVbwWg4HEYoHQ5SiJXFmsCKFe6",
  "key38": "4es4PbSzE9DydowojaC68qqjKZYbQphXgieG9sTGuT6Gm7Cvk2tJbAMvWnQmQPdHeWyphchZEWKnzUbvsBDS8QUy",
  "key39": "GyCf7BATC8LzAeVEqMpXoSDk8EBN9UVzwirwQt9fv5kZ9M7YVKedEKPtX9MqHnrJdv9PaXwqGNi6Rb1bq6c8ZDN",
  "key40": "5J2hthCMmMyLbvu7ayqwsg51yrPL3Vyezdk7BbartQHzPasSZXHiwoHdfgESMZcZ7iTr92etNS1FL93iwmiYZidt",
  "key41": "3XV1axS4B2k54UCYzhgSHETtGK83AJSjXqJqogb8CPzx3mexy7JkZZX7k9rsWjNF6nti5cng55Bg2H7XgoKyLrKp",
  "key42": "AjMoUDie8H6yFoeAXKrBkQU24BEwo3464fdyA5ymkzCDAGsqULknZgmy2LqYdxZ2D1HaZUNSRPYmYtwrT4jjhq7",
  "key43": "5H25QDZmAY6fBZSYezaw2eS4fYwo2q9SBQiksuCqJbQzn9df3r5mzkzkfQtbgcKzBkHMQdgjfqcK46q9mfxvtnFR",
  "key44": "4JxeXgeR4RGhqn6G7MLty6A55ZyLftFSxAtCnMj2VQLasZLd1PMQ3Q9ZTzEg5RED9D8PsSN9Ny7Yj1ffX2jUXdVa",
  "key45": "22kHSoTeyCzKwGfBpzuXE7qYEifQT5JtJkrRJgRyzMqf1EGUxzuNtZY9QQoR1Lm1ChgrzhVGeJsnjBsCriDae51p",
  "key46": "5azuVMwXxQdPRPkJExHL9aV2Ld1yQ8BZtNGK6wFJjiu7mzRV94FumyZF4vjoCdLYRYvG6WCS6QjAfyAswkH4TCMr",
  "key47": "64LzpXDsUDAC7FeLjEkowFPR1aS8fv7VxturU1S6jkBkM6zoAh4qdx2kS4tUDq5CGMpxuVUdJtWZ2U8YavhRw88Z",
  "key48": "nX6wXoLeQPcU4SUd91cdU9dDxgRJ1fRJ9de5R57xoByawfTbsBMYaQ6y4ovmjJghzxQ6F1WduaNSXSeD2ifimq6"
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
