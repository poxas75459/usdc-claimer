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
    "3WhJBgiXn3xer7CHuJh5W9xRSfLckVAAvzinCuaS3R1PJJ5bYSopby9j6b6VqQ8jnAgmcbMHvzpZhkJxwSqYso4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXXgmdUNqc5GtTuPxt1eWp4qjh9JpDJsJDJJPt7hmZ8Q3HyMpvkukJN1chTVC4M8EwiczrfViEkYED4CmLZvtJt",
  "key1": "3RN4uyCMxDQsxyWWTZVXsnFGXTeo3mUMax4ZHh94bbNGkUDwmaL3hsGCFWkxEyaukgEF6Z9G1vyUTaziA5fWJe25",
  "key2": "4ss5BbFNnmGKf9F8Tz6BXKwKMmsvUyiHttX2nWQqcrpjczaogy7oQxSW7d4Yr3TNAotyNvXALbPvMWG6tcCqqzfy",
  "key3": "H5svAt4g4tSBomrnqPeqcYdjQfpm8Cpvi1yznkh8FSvRWJXyTiVrpoaN1YpcCFWcYJDkmJEE9o6tJEfarqu6q7y",
  "key4": "LNwdukpwfT1V7BYw2CodPb9ygnCAEZLg4PJNASM2uSQydGB3cQvoLgK6iHf5cCZD2brLaq8b3MVWquf6KYAGAbN",
  "key5": "3CxZXPA6fM5Wa3E6P753CbFXPtoTjdWiw82k42XAN75CzudgbrXY3f6jCWFGcs8jeVuYo9ERsC2sDtT75faMjs5i",
  "key6": "5tuVzMEf6HCeHWh7rH9WgRUdqrtBTnx1d2R32nggB1DJZWyYXA3bFdWUJMRq9zvz6ixezp2YPUt2DQQ49MqvKYY7",
  "key7": "5Azngk57LMSepdEZ6fY5HMZo5fdFFueJA6F6BasaXXmvZtpHNWfgmNTNo9XWeCwmZrYP4LnYYCJRqSR95VTAvCYy",
  "key8": "HQ4cdcJeb3ppJGJ6BESYj7k2hCNjxQCjEYDHXZ6gavNXtJxEKCJWaCj5CPogk36KLAnDBFuyrgrUX5QKhDVuX6M",
  "key9": "qLJ63vBQF9PGX3yYHPYvSi9CnS5AipKTAfq77zWJzKLEkmtiHimbyMcjgVjAH3QfQsFx1iHWfSEAEehnmYvtiQZ",
  "key10": "4iBVQ24ohtNi8q1urKBpDiUDb7S1b68oPnFL3rrgGaHmF4rWmcvfzThubgUDkSGFiBuo44tm6SAc9dxtKEmwYFEi",
  "key11": "yWXv7kmAE7kCVw3XdZMok88dy3P9xyn7w5WQmbucuyofT62hBvTpFcx6kbKvUQuSsYzGXNMCHose2Npmk9RH9VU",
  "key12": "3ZSrvb3BuGHp2vWe8LyUwKT9DKMZRuk2cPbtfKJqt8banG88Sq9vWjsBa7BV4Fwau7afjTpqUmQs1EwdJ4UwsbGz",
  "key13": "2brWLesQN5D2avD4XDdHQN21iN3TEZUoEgNW7PPEpZnuJqchDdwpvJ73tM8x83HAr2SV1PEcARbNcNFkTx6PLgkT",
  "key14": "3GV6g1uWKM7LZfzpezYefPHPcPRmVknaRHi8zLVPUfYyK2ivvN9h49CJmEHJxCmZgbsTfgj6dUbd6SSXJhyus1x6",
  "key15": "stQ9KxEeyz45cLKx73xG4jVpUjSDbnKpwqQgsj3WGNsJ787dvTWyu48o116u5UrV4e8WctftRSg7VN6FCUyQQnf",
  "key16": "FhzqVAA9KySdHvz9XbHA9qHH1MRhiBBp2uw5gud1y4woKJRJoRBYcwbZTWYvQnaW9LS2oumcj2xtVVBdQzJqDNf",
  "key17": "56J8LE881TBBsnZyAr4YSUE7FzySwf8EDPgakKj1HfvCmon2myFqpDVL7DxjfRAnoj4uUq3jMmZ3yubq4cSjxPM1",
  "key18": "5zGJMFmmPDXriFWeiqXPdcbdJMapQuPyqaYXYr5ofEU7Z6aZcogZKZ4y4mBus3wSkVWS8gWCdhoYQHZTHSRdfmiq",
  "key19": "GMtHjbEGNiN4ZT8YFiSCGEP3xdKBC5mPyYVrsjPLEYrmkbZAPWzFjhniyPnzwZ1GXvTNammf6ES4qvpS8iza75i",
  "key20": "1bY6CbauCqvmx4AdxKBiKhrWyTrc2rHLjRa6hjftgwWKsmXr4fHDh7VSQeoRbx58E3Mewh2jppe7aeeMXBoGJ63",
  "key21": "22dG6qTzB4DWvw5FUQGfXuDJ2eUH7cp7BRE6RSzPaHBK9JuYmyAokgWnMCtgRFEcUXAzz98pdAnhpujC8BfNWLvN",
  "key22": "3mniwCTs7CKcckNzN2Jteuk5QD8kjM8Ns39s6Wo3JxTYxcKksVrovarYZHhQiqhgByBrS2AhMbD5kXz97DYvn83e",
  "key23": "2RTDyhqWegfjYHMiUJVBFNsWnvMY24AMhmAHLBctG54e7kFnarCiGVckqHVCNbEjVg6VSo3akkYVBL3THRgT9EXx",
  "key24": "5p6SMBrS64bquY6ZWzZUaBDxxe6QXQngwFtTZ79SD9LFg5n5LQfzauvDh33TiuJCdgtsEhEk1hp4KLGTuBjjk24Z",
  "key25": "3YsHrAKSnog7TJPasED3p4bcjVtRnEsKoUkGdzEbdvfUhqySq7RBMtJ6nEikX2331ibght45FoeURj86Q4E5bsgW",
  "key26": "4h2MbAdM6scpjk9gR7qwShJnKFXgGTN8bH4urCKUwn3tYtjEcYMCHXdioSbNp6DjU2SAUisCrd9CMnnsDBswwims",
  "key27": "5eGGWhuopFT31bLjeMKL87uyqd1kSR6UpQ2obPqaNDdXXqYaU6JMPBpr6Gu9n21uCQKn3LVWMLaXPoCqryjx7iBo",
  "key28": "5JGradX98avLdzfS1Q6zgpkpwzMAtHt3wPeDTs5sEha3r7QbDfft7pX5FEe5gE2462dqTETEJuPWtcBxXJNHNk2",
  "key29": "5zA8rpfUMmmu3uYMyBL13oRu639TimY3D7enujfk1BF5bvdWj9v9tf1yqJgK9Mi2WzB2ejLSLpZPUVqrwL1oWK9",
  "key30": "59t4YeQtGyu3KrNnCJXHXQoXCehcLRqQdjyrfKgZLdtsEetYP5J7D4j8VfJmnXjESKCj1TEyCcRsDgr3QFjHGquG",
  "key31": "mZX5W9qJGTzzrYK5goaNiY2pdTuEHjRzg57tX198ZLHjpr5ifSEgisTYNZ876XE8PdfY5eGUKFGGcurxuEers4u",
  "key32": "iTfNXenz8WU3Lx26bKwk6yTGUqiN6Mdeed4JBgWW2rF5JVy4m9eXZWtdLeuLUJ8KYsUPni1gTBEpL1ZiLN3Htcz",
  "key33": "3WN7GG57QFVRzFs1jifcU17eQ6DoVFPdQFTAR2x7jjMrr1XUQYLCktMV6Mp1Jhsa7497NUrp6wGKPyRcABp3rGce",
  "key34": "51wkePTexMArHqNUVusMNA8NMx3ZLKuGFcfr5ac1MiJ2knTjXmrAfpx9CNad8HYUhmCEMQcsjPncKDiQJdEWgbKM",
  "key35": "5YjbJDoRpawWt1XAYMKyEqKqMoJf9kMxMMKbMdMbR8ekrUtuVMYQs1RycsMdYtzf9jpy9kZUBu3WyG4v5mVDzM5N",
  "key36": "67NK3eWZxVM6fWHxAtNR9Q3FrkeVQMpNbECSSic7XcuTvaP1acTMFTapEtxLFoM7bUoTG8YBM3zAGe6bumtFszsc",
  "key37": "4ULn5FMw1YcUEDsBWKonLfHs9dSXmub9ZZaVHUieVUhiRz3hjgFyMerjjbYKprqjWBWv97jhA8n7aHfj6FS2SbUp",
  "key38": "3879LFADa21fv3fojPfshXLpiHB8a1HW3RAUBUDVA7Yhtz1CYVvHh5LpAAwEeXEUhH1asrvZCDWpvDynTBriYmb",
  "key39": "4cD7jHqb6unTw9oqW3huCwT8D4qgutRciYZtsJ3QVwyATAVVd8m5FwFLfaDFbxLzZkcx2kxHcAj7r2kA8Tbiggfe",
  "key40": "41UxB6phwtvcPaxHv7kvJ4kSTnRznMD95C1pQ82RaU2ug6JKYWB7ik5UNPo89ovQ4qxMohJ2hfhndHsyQ667PeGD",
  "key41": "2aWjDCmyTdW4Gjjufy9R8pp9rMS7GT1XmLWKRaztBSicZRjqmH8zLusiZBnAdUBkDfXUKmzEpDsEWPm29Lrymgcz",
  "key42": "3vXEHWPxtZ2LDdCAZibnUWkC4owEG2Mm1TYgQirs2zboRrNBuZAtFdnYYhawNz3Ckv5Mn1je92fvtH4qYVk2N5kF",
  "key43": "2Z7n2PkrBDwEDFsgKGyu8jMjae2ASm9atEzqVF9TfNnNvKZEwAdoqzX2u9B2ubrAWx9KF7LFVNv2CTjsm62dVhKF",
  "key44": "tbtWyXa2CTfY3yy4QMV6mWvKnJpYVniN2ugALeKjStWWvJLu4qtw6T82RHgrc6VZGPBaxZ2qfEuVSCseSudDeAc"
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
