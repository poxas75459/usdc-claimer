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
    "3vr7i95t46s1uVECDtuUf6Vr3gSqKvhEwHHEuJ8QDMbB1r6M4gU8R6c94zJpF55AneNk8AGZgpCmUZR3H1bmYCqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9hoDtX7VJUpdG6Pj6EQbQo3qiiHwCF3Q2KfdMpYQzja7WEtiy4wGHPu9dBQwL4EcfuiobKBT5sohFua1vcCPsu",
  "key1": "4LQGWvU1suxZmRu8HWy21QpaYSXUeoWRw9XaKrdCjawtzSNGtxwKuFqpjkY2UCjBWPTHnd4W96uCB4D6fSiMQiJu",
  "key2": "gxnuhhXaCL1EZKxzn9GxiTC4ik7kaMzfqMLfmLxPnSdT7mCpqG5ejUbqkthWaS2Ht5Beyxobt7Lf8RXc4GjruAq",
  "key3": "3oA93TWrDhiKbW74CYXXNAnmEsMjEP27wj8bBT9fdkyy1F5MP7KEKWsAinmqHgMewhEkaai3p6E4HqUG16ChRvVH",
  "key4": "235pV3kvo5PshePq2YtQT6TQS4FxwzYG5XpnD7hvhY5QKUVeysXn8DVd39spmMDZvGCNa68exj8sJDRCyKEQd1Ct",
  "key5": "g243RXzqhXXSuYc3dLZ5GdRDT4qtPyD2kaGk2ZFNkmo5hRUrG1CToo37xJC2QWR3n7T7wLdW3ab4HMZEKVKp77E",
  "key6": "U5BdA7CZDVnZfAGRn5pTnsuhuwDzuGQvzNT3jZkYgD8C2iDQcNCTya9vnuVzEhCxfZ4QiKSGhHErDukH6XsMkLF",
  "key7": "cwR2xcW5NVV8orzpNL7KUABhjBpc8Nws8U6w9j9QLP3i25mTW1QttDnLsQFa97SMtgx4uMZg1PqcD9zoHDTF1bc",
  "key8": "4xxQprmqrxB4xphiKNHx87byEtxzPUZtX9uWCWtmJLhQuX3MjJNekU3DFN7mamazFuteoUrKYNcjaq6U9kdet5Gq",
  "key9": "67PvZfvBdQed2EFQZqyF5xHtRhz7RmGJnn2VRmYK7LEHmdgMS4sZW17sc1S8zVaEBQRxM2h7pGpgEGvauqoQtEag",
  "key10": "3T8dVbWJxK7t3obyUgivT4AD2MSfhjkoAYREUtyZhpwYGJ3qiGAHN34NiBsUqos8R9dEmcRByBPD4kc7H4cFU5wd",
  "key11": "3qbwomLG4d7iRwtfbEzfGCBE3iuayBNWMRbci6QENbVqGEcCqRf7SteY1ZjLRkEqxPQeSUR6mE49u5w8PY24NpKL",
  "key12": "2L8PGmV3kywHJwPyB5b5zBQubc6jMPCUtCPNRjGpnbbgrwW1TXDTv94wyBptSYH1sQnsrrWNd856YvQwNv4g9tEg",
  "key13": "5n52JhrLtBvqXNbUgK15qhwRiZ3WRDbf95qY9HeqbhneNVtfLXBvd8wr4ARdmzB5anMPGnr5aNNiKvxQeLAvUKQJ",
  "key14": "4eiGHa5fXJSWyvKgkKsJdgJsfyr5S7tgAth4CSsVjziyasXDrLTaxSD7Phq4pg2i6REbPiZjCrezXiDLAkU1sjxD",
  "key15": "4bHxNZJJTHCbfRDwceoCAgYnD6GkWhHEqKShdEcqjxWvm7bm18in3NMDSFEVRKVA1cAQmEDEy8TbtDPfN8X421Y6",
  "key16": "39yVwm9P8eJkFEwJKreb23ANRMUo3Q2UNgCFkkCUAqyNx6r6TYL4w3Q1rnxke2aaCNx4UppRedoetYPcPTcJDHHL",
  "key17": "4w2BNys53rjY9CgiaBSrqKDtLfgrQ6xBhBdgigtB51zSCvjHNx4AhWUDwWwVRJbwG6wW5t8oS16CoC5shPwKrxGe",
  "key18": "2igD6SVbZTC2QaoXZHQrkxXdzTkNuEQvnKYZmKFgNgBs2qjvy4zgHNstEmVABFXfNsuBnGMckYS6ugXzhPa8kMMy",
  "key19": "YEQ8mvtxeJMqKpUToYsEvo8shYs8EyF59aLyuFSRQMg3RZ2FYRRx2e1zy7SKgYRnvzzScz4A3Mhvfb1vHkuzEJ5",
  "key20": "2QMRh2taz9mhnCSptDYwbpMa4Y8K75SV2xCobrLMGxFZKT4mP1emAQbwxxH4jKCtZ5v8PKpxvGeuvddEVp6LV3Ct",
  "key21": "z7VbGxMeXja1FgKpbvpGbjqvzBEGkVe57vsHVd8YPuk7z6TuiAnRCUq9wcL8T3ahu1De6DbpAnK1VrSSgBuc3jX",
  "key22": "HsCLdrDm7L9GN1W4XDwFCaicL5w83tzfDZ7zWyW3DjPAK6AnZpCZidaupRmSvujpNE65WoHMC7qx1v4tS9s6T6k",
  "key23": "JL7GnJvf7qd5PDM1A7jjopwjMPpiA2hmD3Q49qQnYgQbZvxiheVKX4Hvq2cuiPFXU6TMpesgrg6CyH6cbU1BkUi",
  "key24": "4kCayQKMnuuKJddnKpevhMgk4qUYsa1tH4u4utSC79VVYMMKzEku7gSqhrt2RdH8vw54m4FaKmHWRxkFwmeNchEY",
  "key25": "4Ns7L6jyLFEH73bho7kV9YEqvi5M18aAHNXo9ApdXxsMS4ij4J27hM3c1RF7Wi4MqGoku9Z74LynrPV2G9JkrqiD",
  "key26": "GS31rA9tvc82Z2Q69JdEedtaFys9nmdrLJciqN9LSPQHkVyyjP1ZuqqK2vgBbXc3X1Dh6Pd2p8xnP6zA9KEMqYd",
  "key27": "38CvkAEVuEdzgeKCk4x624jSKKNLvwg8qZEAps9xzstFLHMH4Zwz432dqRH6pQssknFVQ5ShWxnnixK6WcrKFiPH",
  "key28": "4zsLSqssE2ZBaPXdGnG7puYqbCmd3Unz5SLPEN3nftM69ijbyTP4jWXWkh8ayWSVYxviWtiaHs3q2TxpS23SM3fn",
  "key29": "4TFdaoHbmJwfuXJXFY8Mqvzw6WcrpoKbtyBhVufhjwn6QxbcyKuv8XoNZKcDUe5WesXLmHfwJXcVXWaAfXerYmQ6",
  "key30": "43GXCWvDVV8XXW6V99SsagW4HuXpppZPAYNL9RBaLwjtAQGVs5RQH4sfZV3mghvLg5u3yNphLVYGTGnQ1Q5AnsCB",
  "key31": "5GkRgoBa8kPXjSzBeRosKvWUtV27EwMQLzKL9QXPrpVz5WLdnHnAcb14dywn2C4t4KGumX6PyxdyXgHBzJuWxHbA",
  "key32": "5zax3Uo613zhGR7Tj43rkviGtHNc3ky8cmjP7VRQWJhokx1MUB5dJiRxn1FXTrB4QD8JgfiYuQGASMc6pkUz7Qkk",
  "key33": "26Vd9RirY36DV8gghFfXV15VoJ7RGSuC2sgU6NB1gj6oVqx9KCcGPySakxUdT7tRXHqrVoGG2nJRxARHQXcCFHAG",
  "key34": "3Tv4M3N5DLsDnfw4KJM6T61eefXhih48ugFnPHDqpGEhAM7G5Bm4AHgEYd93mvTq3UEFZhtKNdodfBqbDtMKM3nC",
  "key35": "2J3B5UDgs8YHX1AKzt11yJEDrRCEbN1x7W9p1Ags6GRKJxY8NNDXxtvFMp9oEwLCyEG2E5Qu9uhf15AYVHqYYGmV",
  "key36": "5G8LESzemYW5nbLT2spyERd4cBQB9aAzN62S2CLgfZNhbqpxkF1GJBhhk9QrWAtZBMTUsZNeBnumyvYwRdqqaEzj",
  "key37": "Fyqs2QKA6zNzpJZELfqdAr76yfbPY1ToyTe8476y8warcDn897c2VwGSEAmtdTwfe93y6LuXU7XbE4ZzctvR5vq",
  "key38": "3jvs99VH12DReZ3L7zFk4pgcXUvpjqj2KbJ5ogGoBj3it2YgBpUqy5SAjPnK1npAHWBpWfNzbt5SS9asKBLJfgk3"
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
