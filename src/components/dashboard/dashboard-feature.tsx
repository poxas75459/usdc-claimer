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
    "4QbjsXjPthrfyYRJSivw1zX7AoxkzpDAZEcDoSqbhiy67KT3uwtgEjfLeBB5rKKYjPFm3bo2utanJVAusMews6FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kb2Ji4hTQcUxUi4F93AYV3umSZ2nkVtQhmXuuUvcnfMBNhvqUg1dQhvDZt1vw1FRn3J81C1N6AfW2Mczntac3K",
  "key1": "26daMortNNC59PWVQtVHeDrevXjuDkiEi9FPeoxwy1HaCuPjeuyFjqDw4HtSuysncPdZJMppYHAJpaBjCieWFPHp",
  "key2": "DsDyx3WynzyPpFgadRqTQQ8YLynnz5BexHGuxgawdtGjMjhf1tX6UUbcEoxJVkVMQhQMLb1SNmhcnCDyFoRig9W",
  "key3": "4aA6UAAU3QD78ccDtUZWmJN92m8fZwU2ZYo5hnoTjqoQ7xPM5znSRAf471vYXC8gQfTWjMLgDJFimEyX8wkS9aEK",
  "key4": "4vdjbm9E9rkLJH1kHcFiX64B3vnMEwJ54tP5ri1WNmpZCsi45vp6tR8UTxM5Mw9zcQMAmqmLGB32KuX5sP1HDLur",
  "key5": "4xeRYTsKis9ymzLt5vERYWWRmrjeMAUvUXbyyDJEhwD43XNktpzxBVgCegg1kciHgyGuue5FucAeHRTpMm73nvWk",
  "key6": "4zzNXoTyo7H1AnJBbFF7yyyQ7pBpfksDZRLcPznidAteiDZgCF7aTn5AkkMtFND95AYguzvN9iUYwy44RNKC6jMc",
  "key7": "5PogLJu5axYVdmdXrhK5zi2qHuEdvw7Uhq1Wz5Ts7911W5v84LzHbXJBZ1TdtA6DgQQpXkyoEEka2LMsPWWj9yUp",
  "key8": "5FtpF6Jduo69nAsuc6TTyAKfthqzP8XmsjfnXVNDPYvtmqfWyF7erraDcNDdMBXMu5ixd4gywFKj5Fys1GFxACs5",
  "key9": "5pKAdUbkUExyAGqqLZ1UzgF12srb5ML8ntBo9sqiDMQer4jjuuRaQqpX5HfrGJi3cwZBaVsktDZUnJG8RRNv2pVM",
  "key10": "5sTjXmg8E4PBC7NN29f1Eo6JPmJUDshCs9YWacsZVUsDv17EHn4gQyoGfcUjpBGZwmbpofFsc8XFz75W9LtWyPAw",
  "key11": "2YtGm2AEW5uKi1NcLGqQTRvykRcVQJVJFqPJJfL6xAvav8G8Wj6unG8x1WdZmQwG9deTFZVYnssoXN5J2njcNk7k",
  "key12": "5HofSkN4cLhqr8YEagXEP2tDtrkH6fF3Fwh13Safgoroz5NpYT1s1KcGeqhTRZ1D1RAwWPypp1REsEeDrFDsFJ7x",
  "key13": "45rhY9WyMEgjCLaDZ93H2gnP5gDwHQNfAmjxUj4dW8mxZbfZUCxDGW1BtdqhrhZ4KnVBYSPTQxcweg1aK6zS1tUw",
  "key14": "4VLcndmXeyKojP8TyfRS5usJPsEqiVfs5EdPjwpAn2zfAhxkp3rx5RmZrJPTMdZ3EwSRMDiJwuAyq8D7jGuDVbt2",
  "key15": "2361vSBJc57zJ12DwNGjJR4uXSnBk5rcDhhbqwWCNansG5tBx6eADNM9JApXCvfAcnTSBiG9Zy53qxVsjg2oxt5S",
  "key16": "5TeSbeYZ7qBJaADB1V1yVNsT9UD9KbNtdRkHmZDpBsQssUWRV4LmmZKKwg3dHfbxReFPaSSMJ9z4ooQjpcroYy6e",
  "key17": "DBEZ2Gh4ywoZ2e35CrtgbdTGxvLuZrphJBd3z8cqJkUBxboHZ71X5Ldo8aSZqo8wXckWdFtoRnciu9B5uoDG9nT",
  "key18": "4nP2z6wDPLT2JgVfYRRMiyEmSmZK8UQQLS7jmQYWrCaRQq7fYU3pXF2Re4UZLc6pB9b88HaujzFwX6z7pCyuv97W",
  "key19": "gGu7momciwqYJ7kdywBDyWAh13BBmX62ezQSQNqX5Q2qn2iF9XLi9WHTgCWDhaSb53DFrzqUbeGzRstankTbi3o",
  "key20": "2oo7DjgsgjehDzUNXqGiwDjzZmoN4QRxSwDxwGob3vJM1Cfv5TunTjtP5dzGuV84RtAYRu9Pdne7nTAe5R5RZ33p",
  "key21": "4eRyEjPiHYoBp5jaKNZnRmFGCPRjFmdQ6AfpY6G4mrWPLFfPxetgAVNgcqJ4sxiuBLu5RpQ6oBkdjxc8k48DHmVf",
  "key22": "VdgvVnY5k6isNjoQjcFLmsVfXyYjoy6vQY8krDsLUbbtVx9JZTt4W6DbFiPfkBdHNietqDAgGPLRZ2wECeVFaJM",
  "key23": "4jUk98bQihXcnWLJrRsZJ8jnxwE7zZcsGgGbUsFSekRCU8RRdLNPiHkjQbXLsxwhbjLpiA5pwf7zqiu39AEbXnZ4",
  "key24": "2PVqf5cmqe8J4WUnadEmLAwxKmDampwixCaAvTPAAe9xZPHB2zQE4hoSWCHzQp4jgZQXnNfQJB5tjWuYh9Rvpjhu",
  "key25": "4tfroKaSXRdJaub5yrhbXPBx2GUxU72gVVLD7s63iV7kkrSL8488kw68LxaaCrT5AQR2aQdCXvdHsQBDaUbE3Zzx",
  "key26": "5BkBzBs74Ywox76rgUC5k7tCf3bM7zJiVJw9NfiFgpGnpBkN8f5XzbHXyk3BGhzxtUshz76oqPuAXm1DJwiuUYfs",
  "key27": "Kf5Fwbpr5vSFY5MafDnBXfmqsKrU1r62nfVo9ApiVKc8XCMe1ovLzyCVme4T1b5CvcoebKYvb5YTLFezPEtQwzc",
  "key28": "3wQS2WwzHfLk4dKym2XGizmghj9nL5QKRSqwnVLJZsk7a5BF3WoSrFNzX8Uu1wN4cVDRSvT2WxMmAnpfc1GW1yTV",
  "key29": "XnzWUMM55aBeFmfbZvSMYGfRoF1KHp85P3ADNcJn2ReTW8tdZV95eThFE4PiAWybPdySPfApr5hSw7JJ5uJPAfq",
  "key30": "PDVY8Y4rSrARAFStubm6D5cEfFXV7K2cgE4APHeaPVd8xyotatgGG9ESG3u2uXiZGbF62AWVhgZ6pqPX5zm8MjM",
  "key31": "5XkgjL56QhegqSs4hryaVSGMY1y13CW4mxiG7um1e7NvA1nv8N1z2Tjs8CKxG2kUrigVuZHRMoHk3x2Up7B61xhz",
  "key32": "3Szko5sugqoLKMPP7koVvL6A5aNdZufgZyy49joLi5rpbhEsbmZggS8wykGqpHh2sSDUErbKzDP3Bj5hi74k9Vwf",
  "key33": "2ppY12wPbf5vRrv64pzQJaxV6g2e7EV596ASGzjsSBtQJbWLiZcufWPmq4xi6T4yKvJCxdKj81TqNQfTWYfEQfej",
  "key34": "4sK2ruL2H7XLrC8VbeXqjSvvBxgAm9Jt9XgdgJ5KjUBcec4VxJKmPdi2oxRVE3yHALECptgrj3t36Y6yxCB7GqWV",
  "key35": "38tiePsgmtS54RAWw7VZRg6Ljv1Qv8hqSY4q6ki7UbJEhgkSyZ33XemMWq2YnevnbDEvL86852eA3appKWruEnWk",
  "key36": "2nQpejz1rW5md2wzgUgb2U99hx8KPW4d4bM94poe8oSJCvVMYsG2CMKqhvPUUkMrAmHv4N35xy31V3j8ahDSp4T8",
  "key37": "5dw5sUcDyfyqmt5e4q99PNN7Qi8oksWEncoCbaJE4mwsc1exBPVwdooqkKWCg49pZuh2tr2orbM6VR5ETy8NqkgC",
  "key38": "5LFSr6JAmhjqQBAU2dnAgSnyyFiwRXey1oKFCVAqSq369tstEAwvjuzTmemgKsUrQk6xcLptu2chZcWLMw7KUPy1",
  "key39": "3NQdP6hfUthLnuMGjtgNh5aNX1MESjrLNpmhSjf3SijRo2nykYpganE7fXH5xsu13zwyzAwfAx3tj1KX4DUTWrSt",
  "key40": "3sfBtPiz8C2Z3MMxThG7GYan3dfmUU8ZqmKaGfrFDchunXwLiYYbgfTzDv2Ddc7zN3jMMwsxUc6ahHBhKW47w4UM",
  "key41": "2CeVimXnNKmd9ALrWyefw5vh9hkXLMbL49mzUE6QUoVZzvZBbLwnGyAua3CZEjo5w3YdgjYxgPDQovhmSCivchRs",
  "key42": "nfnVrhyNkESpLata3rfw3vEquNS3VvYjWmJiDqDNBBhwUe4HcfgU9WDzEE7C6gTE5LBz2YUWhN8NyYdDomXcnUU",
  "key43": "2PcwC4AUsigmBj7kGt7xfGzBueba1bniz8vVi7Tac5UqQWFddozeMQXykGjMUWMEYdU17c6HkVsd8g4FegJdPSQT"
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
