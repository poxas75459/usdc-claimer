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
    "3y8h9tC2SwHNEF2ENiyo9DtVzkh8g745o7micy7hWZh4CM957TgwBh2kQKNKVTfnLznVNMGE9SAqx2ErZkt3cCaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oEcatfqx6mXyVK4QZveXQSTegR225PyefkpNUPzfu3zNfMazV6hxSG7vx6DcBKFw3GqfomFsmUmu6PzmDHkqRn",
  "key1": "36vNQwqsyRKckk8MbvsTBgYYAzpbfA9PT5TkT25cg49fjRbn8DCihB1Xy4wTPj1iRpXudW3cWWAveiAHiaSmf43h",
  "key2": "5qszFRfvDpd3w4Q6i1zPSMnjZfqJ3YbpYKRYXeSmDtEnD42CEGr2XzL6yxXmHPJErVQXGhuYfuxDdeVuvMLerrj5",
  "key3": "5V9dZKa6829HaRws3fxj8rW5Pb4UXG8NSbQVLFvn9hntuMzqGHbvW626FkEHuz15abzHRXxhZtA5zDP2CLYmUukc",
  "key4": "2hTcpXmZWhwkWps1kHeQ1qhJc1aTu1d8kDiJQ5o2UC4XnYqqjCcGXrvA7UUZM3XRok5MmEkNrvdM5V5987993ATk",
  "key5": "y7rkjcG84J1bsMLqQZkM3vQPZwTAj7Az5JhcXjWB4i3PRNb4s7kEQT4RzyRTfWf3sMYsf1r2xBfbWeGxhoRSjEc",
  "key6": "3yM3jWg2DtgEJupJak1t9xT7BrGwyDbgM9jLMJadghZkG7xo1rWqHdqUMW1fxYKsPTgqgrFEc7LViDzC6o5x7eME",
  "key7": "86xJdpFTvSVdMogwzeHVh5DdEfEXQzazcteDQvR6MGvmKRYq4ie26musgVWHVMoZ5mQjYeX1UYpdWQG76bjdrTr",
  "key8": "244AKd5nCBwUUZmX9NjwZJMEYPSF7ZP1rrLrvsbnhz4cDn1LEEG21qMRVUirV8aaKaocvbdkiHCAy15YU7BeSmnd",
  "key9": "5TTSot9KLsFtPAJSkGut6Ecnz4HpRYx9D74ZYcdBx5k1ARYT9qFnyGdh53VJEBoRe3G68CFQR7TX5RyR9rqCKbPz",
  "key10": "4BZPBqY7JHMTi2JWxGanRhbw7AGj8qu2FRhcXRjyZcbPsPej75vKBftTm8fSKGQN7bUUA8iqBH4waBi9v3YJzCm5",
  "key11": "2ozbyUwsj93X8Nhf2XgV22wrN7R8WEft2whjmtkY97b3Mw66yQEC5j69MV5ymtbVLw21uMFUQAdKLNA91YEvTMw3",
  "key12": "1vucUf9gfwwjMduvNQ4ZTm4NH1AWfxe7J5DBKungyKkXtByT2XtMhRFoAmuphZozdAxyfvyv7ddqmgs1LMcZXhY",
  "key13": "3p7eo1h4HdzNUjH5Nb9Rbp3sKKKANC24MndC4npuJMBXJDQGNch2HwuBeGqFQu5N9QcmjeR2T3hd8Gg39LFmbBV2",
  "key14": "3D9MWQ6XGsu3yDkik625mhZc2A8ksnPzBZMM5wQ9bBx9sN4C6bgbcncGEbTQ2jn8iUaJmSxGy31QJVqGNPr9haYA",
  "key15": "4YRSGUf4QwjpjCx6v6Yzm7JtJRJ7RN4Su7DhGkMsBe68H5mE1A5w8j6cKsxySXtVBvvczas9HpZW5PzgG9AK7QdS",
  "key16": "25mCaK3oVqMqKa1EA6WyExjyzENWfyxRRKJ1jR465jdFxFCqmT4Hx8o8VWtoiG6nsbug3NTYKrA87gHRx8pL9hGj",
  "key17": "ndNS28RLuivBneJRChUw6UwPc7u1xEpuDqHRRgfjxmape9g5rpqN7mvfPXF1Kr9UZsSRnJyCZr2CRbcuuxXB1Pk",
  "key18": "2UgFaPSA3LgZz162XUqdnyW8BgUJimtL1LrdJ96TYiLoyTpqy8ido822bN2Y7BNxiWy2mKRqgk8tYZ3NqMEoP4wn",
  "key19": "2mf13NZSJh3vqL1HeWN8ijAbHiF1RZcMH9UcXqSk1ipYRKmcxpFw4VbGPCkkX5hYe29yRvUtWViy2WKtmpBhdakA",
  "key20": "FFsg1PMzhydwsT28dgXZSCnc1DsAc28LMmCbTJSZy9ercK3Xkbc8NuzsnLBhrsusBY3RY45b9AEcC6zqtaNxqJx",
  "key21": "3FfJ9Qb6UPUAc5X5nLPskpqpRvuVt6oKc7KLBFF7Yus53h2HrdTnNeGQA7mYMPfR2n6Y6VK7Ri5kVfkCRUffVPGJ",
  "key22": "33nSaKahjoVBHJeVfQCgYX3zR6SdxAsQSoqLYbiBE7sjanpC3gb6ykPafgygutgPXFVBTwop6VxfaZDrcWHchmZ9",
  "key23": "4WVYRdPPXdVxhS8beqS9muGBHqe6iS2jmzLJWhwoPhrEoTUbn9de8t1t9c6f6MwmKv8VMe4nyuqmtg6oReWAMYPa",
  "key24": "4Ynt8J5CkyuUDApB4D8u7YfS42PzHfPJ9fSERRAyEjXxr5jVVc1GkSePfWKknW4sVnJ84CywLhCskb5871qAwALZ",
  "key25": "5JWEu26qcT2sJLX1pyaxXgxD9HrA6EWtMBsdZDCgSgeGqiEFrzbJ9CosWLgdf7Emp83u85TpXyJ7JG8prtcoSSwJ",
  "key26": "DifeJ8JHBovLAvrV9uS8W2EYNGTPBMkoUwT1L3x2EHP16MkBj4GM93iCUy99vUcZQt93TftvBprAAZsUpbnrZTi",
  "key27": "3f8oxn5qroHZQsgyhfiZ9UjDTqnzKMuTpNnkBbncUhVi8ofCN7Z43Rfa4tTw5AMkLJ9PkyoRZJVjSrynYEaWfCHD",
  "key28": "3BZkQx4gVtffPPnFgHPPqFnpuHivVkmuyG4aUjA1hrbGtGVqmXKrMkRq31SqeT2AzxFwVV6zVfUyMVZ2QJufyck6",
  "key29": "vxQTMuvbF1K5VsUaVmqRCTfZAhmeGGmsadGSKD2KLoTq24rYCXe9ugPWjBYe62CPuAAfBGufKWeAPpgbbTRuReB",
  "key30": "5h29waJubCiYWgM7K9JEWNVh7AJAVndZvBhU7Bfs3pn8vxnuwqnPcZ8bAGREtw2cXhgghiWscBsRrVibUhWKhrF1",
  "key31": "5FaCXQqqESMFb2aPquUqRp7nc5GqwmYiZmHFSMVzQuJGqTB3165cu4Z7ATBsL9maeUqE3NFFkE9RkZ7GmQRDxRiZ",
  "key32": "5NZx6ZYWFTNS242YqreFCBGt12ick8enpWrGu1u9ibTx1HWkoSrQe2jMu2zsmz5hqjZrnRj7Eo6d47AtQArBULTx",
  "key33": "2g9dPzJtU9Yfoh1yLDHNpFJov31EkXsWrJMUJ984MQisQWhJ3yFFqAbJASv9PNy5xwT7pDq3UKh9uKkywnQrfyhD",
  "key34": "4cbkQ1v1rKpDrJ5u1ZF9bikN1VN4hxLfRmY7LjFQkvBxdSjjr84pVuKuZuQUSQpMqg15NmhY19j7VHsuFBSzsjYT",
  "key35": "5fKmM1TGy4KiaZvAW51NsLQopbRW6bGJ7MBdgcTxrbbH3J33nJW1otA4rGqh1oeziXxMEDMQc4D6DL2BDq3JjoLQ",
  "key36": "4FhiFrhTDM8wryKkjPDKhhonLB7EHCRvmiZRJq4QgzQriLVd3aybjHLteMHNajpULVXXs3Ttb9JbLX3bPPRRZbFz",
  "key37": "3UEec4uhQ9aMTJTvPVd2Lndm6r83o8GjLNk8fJWcqGf6CrR8jY8SKMvEYpaufSc1d7X24a4rQYfqQyMKNmoHEff9",
  "key38": "3Dq3LanrKTHNX5JSWpr7xZvXy1nM7tRNine7H1rifo6i55WfkQ4h6PdxFhnMABeJHRUj8e3qmGELpyoRUJ2T8yVZ",
  "key39": "2gxoEhR71AYuGkG6nydbowWq5BC1qvS7LSfWquWUrfxPG275ahibuf2GkctNHP2FE4aiYbSVHTb5u9VL5gRBMkjF",
  "key40": "5aq1Tjitj4NpkLFRFtv1npu9Ha5i7zPLm4d4DFQZNr61UTyTXn36yCMytr1bSePtqeE8FLit7uXjQoYkmRHkdmvH",
  "key41": "5fetiCVHFTNQmgzrUueFpT5KjvNcA8uLjKxbEdPWuiANHpNjuyeuzwwRDVDPjbDz3qyStKAL8iQFyEV7qgZTYfdL",
  "key42": "2iJiR2mZuetQNREwjAr2zrRJFkKuonXL8rzdpV5FuDwM7bbLJCZiDAHBAFQ7snc3cSHSudwif3s32aMAe1cshw4v",
  "key43": "2phuWLZLujdgWoj5jGDyHWM8SJ4fD4fuTXbdvDutCD1VZTKzygEJLU4PEVt6hSvmbvkFpN5WdMht5Qox7n1tpenE",
  "key44": "2R21i5YNY9WfSUAiuy5kKM1E8HkJa6nuNLJSs98pc1GnGLCnst2KcP1Uthycj3W4BpwTgcKc4Q76vptbpFmWYugB"
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
