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
    "4nD3XevYnb7SChiijpREz22NYcWtUVQUdG31btDUJZgoHzBnfwCdoUThiKBfwKWsj9G3RxcYyG966EVJJhpY3P4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ktDxkN86yGsYEUPttt9AW6hcTHjT74N3HzKTuXHMagzs8H2mh3cM1KNujG6XBcFmEEuscGt79AbmPVr6doEVKCc",
  "key1": "5qatpSPes9Jwp2SDbCFFTMdCTTnwCXGKpzGkPFFX1DxhnQahNJ3DVuggqpKDeqCmTot436vDv1J5qbLFDukxxpFw",
  "key2": "2Eo3XDGkwUH9iikZKNdHamN78y31mZzN3M5ZRz1MYasmMsdkzeb4YJ14QrkTWdDiggVXvrY4W3KPJh7mAGEz9zMz",
  "key3": "3spSa3vKxKGUFBuVEXXfrxN84poL63EVWsVqVCR4z7Zj9PabYdniXKAnmvetL7xAAtGnKEneQ5V6U74JLZVNjqTQ",
  "key4": "329Yu3MzyBs6hcdcSyj5FzyvxmLedZtS7ggE7K4tpLVhaEUgMSgzJYSWDGtjnWCezaiqHQuyJeqtMHurr2W4h8kT",
  "key5": "2J4BHbzjTCNeL28DP3t3RNUYzBvrH8A7dGWzco8FyUNJSTrh3C6gZbigKYUhpxSJrrcso4n6jD6LDVZ97MSHeY5F",
  "key6": "4xMWkrejZCuxwSeUqKxPyqZ3yoE4MHeaT8EmHfhr95iUdVwM1JYbFowVLXeNWZFuN2GNnNR6E65AjRGFJSMQD27y",
  "key7": "2EdsA6zDhKFd99wKmq7xL6o4uB1QSDbKRHH637zZVvYQw6p37jDZiubeB6NPAxKoiHMnQPe3JK9VQbGLTBdqu9fW",
  "key8": "5ohceQYXV7dSU371VKYibsxSSeQPLhb53yrRq9zY9eNExZksJZL56rwvbtka54NWoRojSMxPcJyTSRV8pS2bXtbe",
  "key9": "5D1m2oBLPaNmXFMCzX4jfK69wsEfK961tpkZPzW1gvRmVeseKBWfhmAsbv9HLpS9AEdJN7ncq6taDB4FPNGNnTXX",
  "key10": "4wgTYMzv1bmndLbNVexB62s5e4YXgGDzWk3n7Cb8Uw247HYSD3y86w9Lp5yMVKgpjMopdnMhiVS6XGwqB5Y3BrRv",
  "key11": "MvZMwTCRWJyN44VPWhdiLs2KwkCdLEGisy1kWbRPpAuU7VCDnnY7ShSUdg7vy9Kp6GSuDWrC8xo49MWwY1G54qx",
  "key12": "3FydDTNvkEv4pTLzibA4SRjiruKTfQvcTEFAdLLzenAAebfJ1DEQVqtCAAfNb6gHhqpMJAE8sFuCby3CimFBzQWn",
  "key13": "2mdtuVuEqAYNQtTQBCNp5FUtytvkoVHBoQNRhYf4wgC47PT6NSsCYeFa2iYSWUzRnG7zBZwzLV56puoz87EpqgzB",
  "key14": "4KQMAikjjSYmtpLafhm5e3c2e2xkCnsLkmHhtAmngN4oJG8nREbvCxzKDPV6YU3ooPX3PRqeNgRgrMr2EVGFgR8p",
  "key15": "25NpQ4Xy2fxk1342PXfwyBTtL9zjhUM1A8VfhLXFxfrhHRGfWvL7bhw8xw4Vc76o1R5Ldi1Q341yNtjCrhYeheTi",
  "key16": "2RvScpbdFYvMHXBf4kd8B9Tsg3yDG7jiZ6ftbCn2JH3jcpV3DTrSrVEXYfUaLxyRovpmG4pNwnob9GQDscUv1M8c",
  "key17": "4bQ9XXG7ZYQG8jE3ttgnncY2zmRgRcF8tHmWeVoSjUPM8H9dFoZf3noFZ3pdqG22ZBZFwHYFMGML5P7tgoMiaeav",
  "key18": "5nYho6jhfwJmssnwwXgMWKScrCB5SNSZf8uZiAPxidKWEejTSvQWbs74hQeUNmND4FpvActbcX5BPSB8cgrLAkcw",
  "key19": "3ztyMfBGEZTdsKsLm3dN9pYLiY3pPGpK4Gk2tBBXgoiBY17hgrz7x3cpfu6JW6r5sJM5f44CFUUZPHygUFr2hBmz",
  "key20": "5Pm7vCLeL9SjEdF7UhGzqbGDHgun9k94zsNs7dhHVWAFMGA11WQfH8PZAKyViWP2ryEfPBozuiTA8i6vWZBWSb2U",
  "key21": "5XYxHwDKzfpfEeS4WzGvXnr5QBDUerUbbyLcKoKiQ2AagbjssjGwEwozGiWrrhK61EteL96DXXU4AepLqqHdgtkX",
  "key22": "8EtRRLkobfLxxo64EeGUwXuNYENo782EJVzc1XnRPZ1NoLNoMou5MRPYoCbcAKQfbbKCX6Hmz3wzgF14h1u7UXr",
  "key23": "3hXzN8DYQ4j2Z9mEn1CZayVxHihbAUCXGXmfvagntMKBi35wUZZaHy7GJSdmCf1pbZrBZF95UFzZiXpWJCnUjYxs",
  "key24": "5uv6DZGP9cSdwKSD7N1gd7XUk1z8QZkTm5HatgfVNEZQWrtBwHHUkejUqry9nVGbuLfjxczcuMSQL2Q3EjZwPkbv",
  "key25": "oNN2oiZGtWCd8aa77WMJm94ehGvvSQSuNzRSF1qk4KYd6AqWYDTp9rooW9TFpWdKrhxRLuMsZKGxFT3HbvxGRhM",
  "key26": "4VQ5UAWEYiWqEDCzPMY7QQHmxY8is3fTbcHGBeNfKFcq65z4fTU7Bpy1fuUdzBW44vEnobpwrqK89Uc9XyguMot3",
  "key27": "4mp1Wmw5SoHpm7RL3zWYbz6TyFdrkiRVbipPmKMzp8SRwTP1eQwgaLfcRsGDcsuWvwNkKyqsq3MPi3VoQ4j27mRN",
  "key28": "4KM57U8HydPRCXSjg156YmtfDUvf1Y1r6PC2ChT3fc8rAVuRFhEESPmRnJpGo8cWybaEamCdq8Mx93nnSvKVTTVd",
  "key29": "3xBLT9AUMu8uuBYMDKFyUzkoXNa84emtGZf4oE7V13LotAV3WW8fbPVQkVEbbBTVCEe86F3tAGZsP1BySqBJFVjA",
  "key30": "52H1yveVf1tyLLmDMWVWuZVYhuiT6iiYz5jjgNc1pkPvr2bHmT8Fro3ySih49GAnmD68GNw9jPRyFDxiFiP74cnL",
  "key31": "3oEerCsGXFFR8iuyEpUDfzztg1ghLYiSkZwU766qVdGU5DbLB4ozMYvHYEBAutfsbDQiybTsoUAjoy6LLQXi1Y15",
  "key32": "5gXt2NeJzqBP3UysLC9MuA1S97jHScoQDiJEKcwLWe7jjTWr5UHcFtEyaorJLFjfGCCnRVayDTqVPyY3f4GZcKvM",
  "key33": "5umqft4xgCw21AQcSPwzQzXXi3XtgVc2gTNgGj6e2DpYtoaDiUwMY3t8oUxVh5ccoo1wzNToRKwaQy1KkzzYmKMd",
  "key34": "2Fu9j13uo4DFiiX1CP9jY9Dd4qr8aCwLqrXGJmWjx766wcyYSjkkTjWQvzUrWhtJ3EoUADhstKGG5gQ9u7KBqPxZ",
  "key35": "3ThbKpLqkuidtYuDeQq2ueLfbWH5tz6aJNyexkzBugE9w2SQaq8waAbaiM9KbEVNCpk8C4sL753To7Ej9wfnWhUR",
  "key36": "3FqgDko4XenpCD73Z88skhheorsLm1roN9NKXKcH7oJ6ruEmV6ThWzxDzzWtABuwwhKStzqjKmT3UPjDEevSEjET",
  "key37": "2V2rGGCjvauyS8iDzDJrdxrFHkpuKzkQ51GErHcBMPNAyUA517eygvUmxWrnyD7f7EFfagaxxjb2X8zNaLPC2xNH",
  "key38": "ZXwNUxoSUFW7TeVGhgQANLfTYf2K4q6e5mD6P6Eg5xdgQioC51agte1svmXtwpAfyr7eeJDJNRbD9u4f2yT12R8",
  "key39": "4gBhtiAfyzefseFouvYxAC6rR7oBhiCDCaqbtrnxgfqvA9qnm6KezpHXjcA9kQNiyMBGfbrXp51tix8Va3qpqQCH",
  "key40": "4nuiiyi3VVsjQZbWMXmmvLShrxEd2WwE9gXHsEnbtQVc9CFjkV6pgExb7pz67978MYumrQZJfBJN5CdnCmtBjc8f",
  "key41": "3wDpqYxWzZThbeZLDCapVLYdrTxJCdCVPgeySBHwH6E3oNepgYFvBdx355HkVfokwJectG8ZaEFPD3n9runfD7cj",
  "key42": "5Q4XQ4SomWHJjcuRtGsYAaJ8fXHdcPfEzHPGf9i98scXAaZR1JrEFiD7ESyYQdJuga5UPuEHYo5ecWryac1hJfCA",
  "key43": "3iVNucKpg5J4G66t8usGa2Nh8DaaEd5y4J6qYJvqw6zgzkHB2q9rCwLopjcxKuMbJRTkT8dGFoEfXEAx77zJY1iS",
  "key44": "3RGHpfiefwjpyZUvvmtyinXT36VN62C3Ehz9hc4EixKvw92umSUHyQD3DkXdHP55xQJChARA6KpzcRHgXZD3BPNY",
  "key45": "51qivgGqeKvXVrVHPyiVcgu2Ze1d3PuEB1s1sY7yW7YER47UXWVr86ftmoE7EyM4U6fz2TAx7SjyZsDCRK69cBAc",
  "key46": "QPcv6KN6Mc2j3xD3M7SW9MQk1Ka7XdqM72hRD4vPW6ktWRFuSJQDSNquxYDz1fYN2Dt2TBsXKyYxfoHSKSXPkNG",
  "key47": "43WXV5rKRZxBx3ZJ7XJso2fVGzWwN1pAGG9MHJcGhUqvW2s9ZxGgZLUZpeXuL6Q6dJiN5keXo2vbJP719ku3Pdr"
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
