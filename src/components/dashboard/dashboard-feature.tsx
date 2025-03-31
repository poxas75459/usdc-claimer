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
    "rX4QXnpedFo4bXaKYNME6zVygJYrNE8iHQmo1d2xAJMqTVR3sdbCzY2bTocKLqpcH6QnpsvmXsFDTGbAggNCdwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHNsE5RjiExRfL4JsJD1wmYnpHpioxnRRDwLeHskjmEj8sJqXvVJmVR4qeyW9cBpFq6YiWzzaeppipPTTRZrPMM",
  "key1": "5TurdswHmusGTPAnZP3SrMfQvgTBT7ybxHHiaH3jpft5ihoZiGCYyTNaN4Vrohxcig5zGprTBJjDAagwD1GxFVMy",
  "key2": "5SXzXFCiKtM5ecMiSfiTH6UnUDmJ65JnoBzcYGqpRRtdWztUDTWKtgSUyy7KZZrmiVaD4hcVvRW8PQwws2LKUKv2",
  "key3": "4K2ptWqn2LGj82Rh6i9YpekjhadnkRGf3m1gvYpppwoe32iki4173ywvQUDTPQHcYSGDCDSs4nCCq3AQooEAxq3t",
  "key4": "38zR9SD3gbL8ogrs4cveC9EHJTLdbxWgb1sht6B8RPD3xxe5FPWway7JSMTnJbx87gk27MeTBhfjmBb6A686Eqfh",
  "key5": "5DSpxFzMaV7aJBz1oJXvTKrEpkTz13s3mB7eiUGBrEEkzTv2XNvTT8q8iJbbZURJvM6LmBUEhsCHx92ddwsVD2Gq",
  "key6": "Rt3q4JYsygoHmjr96yhUt7oQhq2DPsLGvKC1HWCPNWB6ehQA1uvwsDFudWVywiMK6auygqXgpEAAcnnGiChdEXY",
  "key7": "5DnV36fTUQtRa5uNnrkJjArLdjnzKdTDqvJY4FhunutK3zEDvzcbRfEA6sA3TxYWnG3rwbtd2UFH9Rv6RM7Za5nS",
  "key8": "3HveuR51dkL15uaGxHNDhfRNjp1X7sCWbhNepC1Gyb4spoQiVTGkNTc1cfasFL6pEjncoXtApyprJpCTGGgawtxV",
  "key9": "5HQb2fT2V28YgJe2d73Qh1ceUterMkiNHZge2V3BFDm1SBVN6pc4F32aEbkvfuYDCUAjzNfrs3xJcW9otFz1rjCb",
  "key10": "4U6cuGPCyi8H8DgaEkxc7RViGi41UjMwbnNhWDH4wXpTJdQFEESXQVJQ1oWR9L9ohEvsngrimwMpU4JtEsbuCJoA",
  "key11": "4Dw1CHyDtH6v6P7qFB4ddWVjEexqJhdrpdVdQTxkDgcgr8FXZ176kaPUrJyUgJ2L3mawbyYq5T9orRyutYUeeZFr",
  "key12": "5UNc1ysLGaoeCxsDhxtDApiezA6qzZeH9kaA5dtxQZiuXZLuqroWnTWKKVpw7ZUVPKUxVPeJEfCoPtLU772qTKma",
  "key13": "T9Q8QgkXe88kY25o7jbwZB3bwB9mcpDeNHRiW4dx97D3zGGbdMwh5pS4Wq3YR8d2dP63t4NvzV3GyYeQ2YT7qxT",
  "key14": "5ZCryRyzqvtoaCUzDZebUsr41cyHNtYE9DB6awwqsVG6kVK7vvLv9okt7Zf4Yimp5HufmMjeRmePbsNxkAMoaQ6D",
  "key15": "5A6Ry3dMo9Sofg31D48B3EP1wDnawAj6LdF9GRXBibCs3ATzrFXw9g89NaDeCjQXAZPVRbJmwv4avHdsTPDafaSL",
  "key16": "3hPg6645igpDegYP5AqfopApBuMKvJwbLQax1syfCiWcNnToBRi34HwfJvKDZ1gRJALk8QBnDTS62RbvYvz2Ggf1",
  "key17": "4QTL9NE6UUAoap8G6mVBTq2aafdKp3FBccbJKdCwNzjQ27CLpmETTT1kDTVTU8dPcaj6V7X4JHQMxGw66nQ3p2aR",
  "key18": "2smZ9iRPKsBiMiJ4BUERwDzUvL3SJzT44S8NQhbkajgxQQsaNLCnEvPPJe48iWjf2X4HFeZk3qsWLD35VmgzgNhD",
  "key19": "4zMV7CKaeinVebASnoQGFL91ahndzRV3YnXmKEvPytLhVb5hLib5wRDamB9McuUC9wnKEN9SW1XStM4bWNkNLP7s",
  "key20": "3bwxKMMhGJDaaKZWjPZ2svzsEQ5BYkfQ8F8uc5Lmk1biYbi7RFouZha63CeyJMjT7DAFtf5UDEHpAvfmmREdmyVd",
  "key21": "4QSycNrRyiCHGkPPcCjLrkYLtG5kV6yNKTJCwLSuyjguDhbqqnsqU4M6q6U6WDZx6Abvomqgyss9HQvP8T1HbYab",
  "key22": "4hGeKFLoSfydviPdx26Kcf3JB4GfFJCrpyA3tQSfntrNBr9jJiYZ2huLuWpXjn2e9KGgCWAyc6fTHK5FoZbJx76N",
  "key23": "HihSNNPxiGMfESE38hRAkT435ESsxedjS3meS5qXaxXFwB2AdFDTMBCDLa9drZgFXpcdHXBw286uyPrHHWXnuxq",
  "key24": "5nJL7VzkwPnm9aaLQfNczCXrQZe9t2SQp52peKxikp7YacUmAMDGifPramj7xK5mPqHSTPS4DwtdmFcihvftvLWg",
  "key25": "DcgzN2ExUzwqTkBwPMFGbRMEVghRYS185abqD6PJFhhTkswbwXGQ73X7rxuDFCGhBR3k5KuNe8ytiMoEjQtssqE",
  "key26": "51ANJBkDveWPo4sM2F42hJfdq35RU9Hhnkat4VnR91UCP5E59LSSAeNkkni4ViK6W3TMWdd9oWocPrEyAHb3iQ3z",
  "key27": "4PtcywoXTThLZtzSNwa8EE3dMXK854v3Zvt6wQ8SYhwTvLqXc2nKaj35V6HNWDmKL1jy7RyQEVwjReyLFgJbWp1s",
  "key28": "4oiwRvc4sjqT4VRHWhQ16jC18GWCk5bLDvEsDrJQbnXqWvumiEZVy35yPJkFUYa9aPB2zBuU5E3EULQmy2KBGbhn",
  "key29": "2Uhyim5Rr6wcSPQQaxisv4Ffp7jzvXJoMePfLEqorsMcq7gDF6piMHxy2pALGR2QmW6Q6yrHXwPW4NnL8tTEoxhD",
  "key30": "5XdwFsUbK19bbYuf5mpZyaXxHiPkyWsaj3DWzLaY9CLVAWGCYYm43PaXDTcN48ish6tEvRorZbCaUrJnQzeu7Mh2",
  "key31": "3T6Ggbr7iZsGm4uze2n2mCTFfDsAJtFvSMuPAPSU9HZ7mYGkzmuoouHuHwW1ckB2qYDyedYBx3Hs1z4Tz2sUCq6f",
  "key32": "5DBgoWGt3zDqvNkAvwc3AGZCokNJfPLKk8yzSZVXSss5HDXFbBsngcd9N5TzUZvZ3bPmVRSPfy44FHygrjPdm78k",
  "key33": "55dKJC2Eqo5T2rSVXEnouQ9nH2BZmv1TvHC7Eqt6A3pLahWjGL5xcGQHmbHuwNEZWFDcawbBoUJnSBJhicUWU6we",
  "key34": "2mPnZBnVvFJ93wfsxAqym4CsA4HrVcRx3HurvefUD6YkYi3joEcNeaHMchAVcmvEfcQodSz2sZBS3wrFcYMWnZyV",
  "key35": "4G54Cw89QugJH8oNjRZ3UFFGXbGnVvq8H8wjXbMdXt9kJrgm7dRUKuYNPPaKEfCGjZeNHuUQK5nqZ4C1fJP7vu2",
  "key36": "4hSVeHSzofRDVsXSJDcYmY12M1sUi1uHqWutAVNc3ZczBNj8Eof87uNMdgMUFvQSPDjnWr4diHTWqomX3hgWn6WA",
  "key37": "Nw2LtipJ4doa4iie9wHWWstZPCqiSuJdFcqK2FPEsAunsCRRuZXL4ePsgr1vaDvUVPjR56C1goR6YsAiiapr75b"
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
