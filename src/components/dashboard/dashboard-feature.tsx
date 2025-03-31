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
    "2zB8trV8TebanQanQWYNyxrGTcwRdRuNSTJhgqkQNJM68UgJdPefdGMCvXFLpLpGgcEZq2uXkz1tueGZrSxySwUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwVLRrh9wwMpjMDLEy28GXLN4t1LEgWmtqgSUUjx599MKqFCDVdgLn9km1RJ8qscTVtUPoFRFhM5aLUyjz6DL4g",
  "key1": "bLBUKCMosBj1vTAViuA79ccs1FNesYGNeq2fyNvD8batWBG2bzM6J9HPE2SL4wb6YVW2P9dn6cGTVe96QTeziHv",
  "key2": "6JGrT1cGB9FbRNQYNKxbuAbhqyZrvyLXQh6XH3Evzd7qwp5Jq159WRynpKkFvjZvfSN282xgdd7xZmZfh935RRr",
  "key3": "kLLhf3zpEZCAdkKfrtF4oRXsuJHwNxFAW3gjc4mjRA5Sxqy8A4e63hdXECh4eDk2BwezXeiorWhfE7DtwXGfjpv",
  "key4": "4yUHhCGww44NDerRqA5RmcZA95KSFoy1kcYZ2o3BfpbfW6dU25xWz5CFSCuwJV96CeLwUedBqXFFUETSDx8dJ1JC",
  "key5": "FCAmLN7jxGrVXKzpFfAsLLz1sfYNHWUkVbQrbtbvUW4U6H4kwnogoois4g9zB9JuzbgesYztcUKpbyqFKacDTz1",
  "key6": "5JekZktpm1JTirRhjFzrGpiECQGmJ8YNxGVZeAXXRYDxrASf84DQeLinRxmeSSfrxW73Pvimiu9UhzLvpYEkQibd",
  "key7": "3S3FjynRkA8JcCdGR9NhHCsXVdkHJm9zxHUPpNgBpFocf47b1GKdDDQnTsCWa64V9Jt37P8f4qRX8N4kfefJfT4i",
  "key8": "3ireCXEMW37RtPegatDRnXKhuuycvDqx1tAF5eR318afiWKbUnFs8WAXYk8xMzbZ6cjhWhCPurYn1vf3mtiY6LCk",
  "key9": "4MrkajGew4CMA5ajesrZTwry3QBGBLimQ9AECUtA7Fqp5GGZft7obnF6V7FJv6ZM5daC4b8X9Lr5xGJLJLstLXZz",
  "key10": "31Wzoy3gQtghJtMbnyvTk3GuHNo6D8MCjdofSi9iftnxS3aYgmeZJ5TaMz4UR732yPkJG2V24vs9roHV7SzqVdUT",
  "key11": "3ojiXus7JuriuS5ZxuQ8i4oS7bRexypxHSoHRVNSrHQ4eEhkneYhu3ZbVTseZ2dJFabYiRKaKYpbWrp4i3qiXTQG",
  "key12": "2zPgBXXvPkP2TxTke9YaEYhLDEn95zMAE7ASu5ii3pAGJ5EJkc1XMLjbWTfmk2hCZsFciYaz6mjm5nYMbMmuafzs",
  "key13": "4RUfzZB1sfh6GH3d6bbseYEHm117YqVr1beXCrrm6iLcwUR8y9mvkMrDuWw7ED9rVKsj8fanZ9QLSqiFGRe6Y581",
  "key14": "2YyMbLc44GXdWoqYUQfyaKjJDZwrugx3861DhNskH17vbdAhsQBL1grBmzCGMswZ8SuWfDqViv4VVeYPjQssXEEY",
  "key15": "2AjR4tAz9JixswLRu6SrtSHA2Q32zAsGX9f6WCCq41ET5PVtEthrcWhrhowxrE5Ad3iudLTiGVEw3MtXcg5WpV7Y",
  "key16": "5akbT4LJXPU8BFYcQkR7t7B919AzyEeamNLYSy7kN2K3mR558tcQEHSgGjXnP715WMxWNxyHJNSUZxs3ADmoHuGa",
  "key17": "4TPUBtJjpgsgo5XaLz33AV9cgzmdniat7HkRhmt6XptJgDma7tEiQ2qC9x1bmzF8oewuFsa7PLiGzNoUA45acMHw",
  "key18": "DJA8yM95u6p6vz8mtY6tkAGyBqsh1RYC4Hk1nKCs983tq6zB9RYWEH7L6wrqqbC1H6ydeDefSG3PDTTytVtXYGa",
  "key19": "2XoHeFsiMSMUjt4WfDcmETcd4okPgHXhitjP8LeisjUhisHBfBKmHdG1o6oQGY5DUyHnhUH2hfyrvSxmHZoiwDdV",
  "key20": "47NwX2e38Ny9nbPDqMu2Tys5kUMyFLrUzfSmK8N7mGrwC1tSciH7riUfcqCihDNoGcqSjafbmDKACWY652zi7pXQ",
  "key21": "2PDRkWdrun2rdzrFSCMvmQEkMPRVt5QQLXE9HMcudmyvAmKw9qCrKWmdMeRKYdvN6irDe4ZcBPiJyptrTK5UVRsg",
  "key22": "35HQjfbc6VSjw5ktbquXtb557T7hn6etCaooiSH9tPp9wu7rjr7cBWfwBWLFobGeHZjANuyFZfAJgMUMafdzPU8H",
  "key23": "37R1jvHTS1j1PMnk4YbCbxLfCVrkbicJJ77r1kqZ3Nv7ny8x9ugz4JRv4vj1jMvj35Rkj2WxDUMWt3YSygNM6cZp",
  "key24": "3M2obeLeZjCrJfXE42NETsZWXGdZEaea8CvyjYrmv5G9o86dRbVBk42Crai5EYeyGmKi2wDdsgXtqu1N1Ghf2kGe",
  "key25": "7ubAHb4Gk63xBjojtt7j6N6EUXxJMFHrVqJxnZndbAcqR66MUBaQag6fJaf8VaBCuqbtRCjBCWqJ286yJfzg9e8",
  "key26": "5XoAN6qaeBAmNb8P2Z93ZRaPLJQuqQKYSEPxQBydsoJ2uFfR57sNyzQUU5qrz2CH39Kp1DScvJWidu3vZeAFsgaB",
  "key27": "5tGc4vxt5w3pPpMMgCX4itgaxVyRyzxFJcB24cMvjt12krwdK2anHpxhpUzhzePjcZ3rwiqE5k5B2LE7VYDm6Mm5",
  "key28": "YLkjLTtqqmw8XR55hkNb5QQZ8dqHNHh1XPGeshjBhhNoG2rSPy3dYjuYDJDAxrsL7yJfuEheMuhAiPDmxGByhxy",
  "key29": "5dS94kgGMKotBq8dxwKFe9cUYXFzxw8wKT7ykC8qPXJA9JEAAANDoN7pEc1v9WYVtQRkc8aChsDexyhy7biiA6M5",
  "key30": "fSz8SKjs36qK11dJ392iD3R73G7KopKAZjLTh7abVaE8HMa7GgmBuT9Agp68BCUPjdxU6xUd9Qg3LNB2A7oTkEV",
  "key31": "5JuVwfmNrdCeyn4WWipQhAuNuamy7M1vPxEFuP5Fh4uVBn5wU6MHssrCSmJwtC3gAe9Y2JG8Mg5ZiJnQ65poGHmh",
  "key32": "67oA2GqJ8J4UAorV5ab9BqnL8fsCnrmxsN2S9u9PKqpL5ERwiUxYNBQWAkhHHSKy3oizVuXf6QkrBrRM2eENHk7G",
  "key33": "3HDB8wxdqAy2ZXNpcJFaT4Tm9B5MT4BxDE9iSLyAsrWBckFL1g7WPNJubGY3N6UDxGgHJfdxJV8o5mG21beMgJar",
  "key34": "3RC1aUhkD8ufnfa9tgBWPoTVitbUJq3jFwamJ1kQARJ7rYGXBKtYmygq4zo6v5VE1864yLwiUThDwfshPkDSQhJW",
  "key35": "5npLLdeqCJJw1nvThF4vezR2ZQsQgNfNe1ZveGASRr7G9maWTaGbX6FHhqTtAGuzp6NasL7HgKyAsKtQ8xXg9Z8n",
  "key36": "r658Kw7j47jU1LSaU6Cv2VQnaKti3zyQRCABtmy3T2V8a6EdcVk1bktdB7C2PZsQvZuAgdrV7TyGuEktfUUTrVU",
  "key37": "27MdXb2W7RZZWEjkgmTcf4CsHNW1SgnugJ85RhRBS4gVGbC78z5hVyKp5KvhgvQ6bdJphAU67iEe9xcC3oPu3SDP",
  "key38": "3cdDPxvJ26p9iKwcDEewgzapNZq4M15JQ1QziRdzAbTb1PZoM8Bw2oEK8kAAjmKhySJrr5b9heMWaNsYpZmQYsCc"
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
