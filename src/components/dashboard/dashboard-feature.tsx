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
    "4Gf1EyxAzeUnXWdaq1JiU6X4WE6aVDZZhn9FCSze4D9y21JpznpQjMUMM4dQ5SGuTYVdJYsAcYMniT2pdta7LAe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZasTEcRBwxwr9cTdFXHmP4XdJcT7GpnnJCgHtLfCz1BnnctWvNHXpaiRD52BLkcsJgFsg1innNeb1qoMZDfWD4g",
  "key1": "47RSoXbA1Cm4nz3UcwHntNCaCdDpVbsEq6puA1rRMBfvGUb3zM91mo7sHXFqYeNBmLpthfZRYJfN5orDEPCAA5Tf",
  "key2": "62YmuDG5DzQsd9nUAtiaENv9caNvf9PdzdLNqnjEUgbB81CwvrYz9SZLHV3JA6qihBGNK67Bxu4Zjis7pfzYPU1B",
  "key3": "3j3VKun9eD2gNQRWyLJCDtke6QjVhZwqqgLrZyfwtdabaTf8wtmocQKCTan9M4QCpyKdyrJLEsxkzh1BiSBiRUcy",
  "key4": "5V249gvrPDQnNruhrWGUHroHXaFR5PcWboFkaSRefWFQokEUCVvMrWstuZrpay9rMT4iPRgPsqGXpM4YKAfRENfj",
  "key5": "3AQV8bv8QNTqpnmmkjyn2J1wYXZ1d8y1hhDqFg7x2mgKXYThq9sD5pHpJE3aEjNrGz3BL5kMtPpyorPWyQAFqAwU",
  "key6": "4owwcapMLiS6WBpoynZG9M5KiNmgKf4YN7yJ2zaMQCiCm6JEGyBVhjjoyyaH6fyxVPByh5crXHSLAVSo5mLL24ny",
  "key7": "33uQXet36q9KmvXBmLQKriPyLmPdNcihfoyQUWp2uLDisrEne4uZBw3LFs7JiELJnbwfu6zosPyYzgYFbEZ2bKh9",
  "key8": "RGd38GScfvA2smCVazs7fiSJqnxNEpYfamTxs6xhG4BnjnJQg47G6DwUSKSUWvtR7QQHLMU2Hh1MtQLL32Tcj8t",
  "key9": "5aNRhTgrPa3tHcHM2pakae4CPKdfCyjoMjrGkctjLG4VZpwZ83mJmZDy63GMUr5wR8LNYkq1FREBimygZvebfQzk",
  "key10": "3SgNYJRp29vYatoYhw7BUDPwrUDgpFBDMUFFr1JBYCvMgUos7c4g8RV8D6ytGf2kM1ReVkWEQn5Nu5iqFjyEM3ij",
  "key11": "ET5r4ZUxQUqMG1VZg7SoJMbM7L8UCLFz5fBb4Dt699v3mhzLfn6nxz8hCtMV984kUiTdf99z7bhNPH59KrrcKRb",
  "key12": "gwtpUPqRYE9CJRYyMutNTPQYYSpbNqFLDSYWabZZdPKoh4HUqRq4apyYe19M5ccffFxXHZiRCkPTgx5tVjkqaD7",
  "key13": "Bmd2T3s83WMLK2y8EexVMr9ikNNUbjWnNLZMEEgGY7TFx5tDpbACn1szAonMLtabWvdY7CcYyR5v4uF7n5N6SYV",
  "key14": "629h1bb5pwBAoyRpvwsf3mVw5XGVfZPwrebsxTMhYYK3zvgbdpLVcjSFHk65R8kXGnuwnNHszYaNWc4XhN17GNaS",
  "key15": "5AyQUUuGkZDQGKHiJQWLhhNcyPnc9sNvFE53mQZv8Zc3res2Ri1Wqv2FAdqSw1vUWJrC4wtpCjgJevbR8qqmYe1M",
  "key16": "5Q8EAZQGTcxdx2ibgvtAzoyMqFqPb7TES6bzsf4ypYZb3tdJMdAi4i46aWu8QjJjViWen1qNHww98SJmeNco3iQj",
  "key17": "3LTzNZaUKP9itS7qB8D8oi1mAfzt25HWwgmzNrRRDpwTFL8UAyyhEJ3yNV7RhtFdSBHC2FkQQMgrpF93HP6iULPB",
  "key18": "5WApCwrZ2qsmtT7VarfDsxt28zSUcfWs5hxJT8DSv1Jf9FS2HEm8VK2Wviu6H6AaKFgeMs3839w3sdCUZXEXm4RQ",
  "key19": "5XtxnhrAvbSWb1EFfcZTyj8en6HRsf6GeGcNA6JyMKQLsceQfxkdkwYvzjarA92d2dZtkKepArpD41Zvp9PGesC8",
  "key20": "S7oZuKCShJXXt5gPQzVqaUSHhdoqmovusbqfp9uL4mMpPbSfRvrfpfsuHUg5xosMhaKqsA37YbEyNgVK9ioVjJ5",
  "key21": "3aZuR3hoKjY85LT2RvBcZdJiC4XPavKrrBAugwxMHT1bFaAQ535MuJnjSPYjga5ted1e4hwBMqgCrnTyxPqHbhq6",
  "key22": "22g1YdVJFxvSrpyRdNyD5jiKy7aEmw5ARLw2F6Dqh5RWdzdKe4wN3i4x3wHK48xjQgAZwviwquW5YFoF5KmbZZuU",
  "key23": "51G7omUerVQWTCNFMsABwQG1VKJGaK9vGchKkJmJXe3aRQuDWvi2cBtEiUNPkZ5ZV6N1pDbw3Sikm6bebby2vqmQ",
  "key24": "443BqiyX5nyaqKp2W11aBVn6rKqWENBJvkaCFh1BBp2LrvdbRQRd6CwGCf6uaHSVD41JXzzm27Nb8tSgAbMJpF2E",
  "key25": "3ptN6nbunvheBfRoF4W6qx5n9i3YBiyjMHFMspB8geb3K7f6RodSskcwMVGw4VqJCKuhzZnTLhZZtw3QGrVNssYg",
  "key26": "4Fb6fVohCPzCzF9o81BYfbu8cvQdjHrrvYzTZdVa8HhUarCsGziMPRxEm9A4ZHTLHKPRcszhMPE85tkwwCxFtv13",
  "key27": "4VHH2uxUqiGZMQPuvBLvFY4w6LRPFNcmr3CzDpyPwbCRfW3vJgj6XaivAM6AgFY2MK8VvvGB4DnYATFHCMMsGbsK",
  "key28": "3U2Ge5vynkSBVbRrcj9xzxg1Q1HQuvZc3vZAgaxKn5xHHHWnxCWrgyiH13gwDTqDNwuDZSk1LVofYBK6pJ63JY72",
  "key29": "M8C7zjXZVJqhdpzfnHRj4ZxybWdQpXFACf3fvjnyeXFDh2UP3wXSvvx5cbXcgUoVd2ywek1TqHy1ZqDkoAQtLLu",
  "key30": "5xu7obdknkBFgtPzhpmu3j8XsMpvFTD2UeNLD7fVC4chcAmyiduotwu6pN5Lvo7RC2qmSuMvczwFd3217twUCVDM",
  "key31": "5o2t2eiwptQfhHhmcsc5NwFu574rq3XgbFyE1qiEp64sQHK7nqK6yLe35j9cj4njUjRTGUrCwtgRrDk6QF4sa8SA",
  "key32": "38JdFdjUraPCU2FauHxgSGM6Sgf5xDzobRzE35phDaWtjo9oyJTWG1paeDToYf7N84Ed9mYoGxSEtjdvXyjxwi7x",
  "key33": "kJwXpJNNK9AWBJ58AdesP6UxesoZRBUmXQJeZEgatY3f6WTWTsMamnMWeDS81cNXEbmDqQM78v2duyU4qLnNSFk",
  "key34": "25VhikTzKRx92YRw29vMGCy7dHWt6XkQvb6FTHmuZ6HZthe2bYjyr3qPoLsXuqzoe64y1M37Y662WTWP9c88LPw2",
  "key35": "4K34bCa92YSdTSdbmJyrQdcJYbJFWjPxrW3nF3Vi9dUJPiggNE1cnQduoR76CWKRcazvcaDFTxYhe5kwqvnpTGGf",
  "key36": "48kVKBnDqsxLgBvF5ZwC5kaHRYeFKrcA3F9BX6tPBpTtR7JPNzkDUk5EvoLw7JHCkaPEHPcwgA3WKVBJttCtQJMX",
  "key37": "2dSewjFAfZaNBtVFtmgw8gtc1Y9oFc1ZobmtHRcJoHZnJhRbcythymswM5FJWLBAZoyEUNAFHBhv9QRXceFUGHFv",
  "key38": "5LF8yhuxyhCt9E9AZJEJ2nsRsWKc1EJF6hiiPQJmji5ga3LiLUshu3Dv3xgBQiXHXgxJojMU1s2a7g555bAF9DmM",
  "key39": "2jUhDQSNb5QZeEQSnTbbKYDFBLx6Jy9Sb32zCxhK3ViXCvipaMy1Dh2oc7BDTuDGJzW32aMFATHckXYF7WEhv1p8"
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
