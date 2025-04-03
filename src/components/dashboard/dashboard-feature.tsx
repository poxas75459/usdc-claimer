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
    "5UKfNGRpkzfo4LuStwUaengbw9q3iCpbZWTJjWZvBrregaQ87QaCEieLF8AYoWQXnrE9irfLbu1WvoBySD56Pt7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQqnZcpMuwKFudrWVsfnkNneuV4ZoNAGGBgU5fqonTFMXMDDoEg4rjWXsnj3FJW1MTbxEm4ebZZ1SWKGCnstvGg",
  "key1": "2PMdSSjg9vJHkTzfpAxkQjHyLcG1aQNoyb4Fdob3zxny9AY9Y6dQzUSWyPxT1NDwbgcjKBzLRmT6cDGy3XGgaSbd",
  "key2": "3n2y5arHvfSuKgaubHNK3JX17PYTSTxDeK3Lu9A32AF76QrY24Usi4tJcL3PCSCYan6fvHGo549a3Dq8AqEX42qh",
  "key3": "2mgkTBSMDiSeBoaro7GnmjDA5dxQ8JpTvUyLdKp6KXmkdZtPnfafQVBSVoLFapjcq89qy7qRFBQQFMsU7dNoeX9F",
  "key4": "5mzXmFnmxANBb8x63X31XX9rc4o5UZsgD2MdwF61bUSMduRBgDugigwwjLy7tJZW9RQnLqmG1CQX2DaprtUS99BR",
  "key5": "4wwGF884zmaHiPiJit4fte7c6B6iz8V6b2hBYJv7Pr9hX7Xr4L1siFCamQdH7HpiLaWMqHXeKFj9W4YvvMpuqMoL",
  "key6": "7jGuscUAqcCXFCkn18EiUt5zxM4SZ8gGtYi8wkc6icYcgRCHaMriutRfsdPwkooyQ9t7Mn7Q7NB8UNqDydpPXMr",
  "key7": "26dPcN4oX8YycpeZZLPJAJcY8Nk4LNRZLV5YyQfgcapzs4XwF1DEVa1AJqQhbf9y3EGjjAdPCYKSAVwstvK7XHnS",
  "key8": "5GDAbrkivsFNjs7C5KMziQ2VRayTThsZrEoUPMnnjgurCZocC9uxCRUxmfCvco1hwMFR7dgTeVskU8GRjp1wdJv7",
  "key9": "4z4jVy85uiarsBQLnu5fS8MVoMFPXVcwkLVU9m1J1AnuyNLfaa8RfWTZg3KxUuomTTGhKcWvufM6i1fcK8kncCCM",
  "key10": "58zL1Lg3Q8q97q4syhaoqzKp4rmTLBhFZpN8GFYo14c8DnpVCGXQPCa2km93eyBn2DfaQsGi3mQt13UzHJypXjRW",
  "key11": "5zeJo6D6ZTJqX5L8m6dEYL7x2TxQYr8R6AXjotn34Dncw5gceNJrR5hG9id1XSK8TQy8N8R9uGqefQyxHnHW9q7c",
  "key12": "zUmEYjaTSSrW2LAZ2rC7jddRUu1NvECnbyBvCWYZEzxgFaGuteKgGAtW7xhTErfgJ3ENbzUh766yrz1we8aGyeZ",
  "key13": "2dJLTupv7hNXkDQDTXnUeSgzW3wM2chFnCzC2kF4i1g3sYxSrcLBDH1GW7qVQyEmwwMvc3z3XFRoVFFNUiwfnKmQ",
  "key14": "2g9QvTq5vTc3Qn5LzYXGAX6NAGEjVbkiHjgpwH17Sp4oczuJc9MVUzq5K6yLViaRknBMGDXEZ8MemGcAtpdVpnuV",
  "key15": "u4CacrkDx79hrojZ6LENcnuVcHeV1T6b4c4XzSho28F4W8scqhRakGip8HuBQfqzfRaxdeMcrhMXd6fgbqWyLNc",
  "key16": "43s4Mj6X9hyG5h5a5anu1kUBhRrZoLiTCAXCEHdXzBFNoebtFuHJmgecSwD6Et7frh3D9N1CKAbWNP4LSgRpzH2z",
  "key17": "4qmHRsr7vgs2anBfHwUtQzyJJYu9joh3LapB5xwi8ggcSHsRosRAUYQPLr73bjbAqM2dPDi96xZN4UtTW2b9XFz7",
  "key18": "2dRBXo8ghMHXHW7bQCqus6HFVAnymrj4CAYEqa74TXERMxcfYAHA9U5MF8tP4oeZdvs5nT1GJLkncE4UABbY4u52",
  "key19": "piBBB8HwmMNBRc1RRFSLrhWZQRBaTeFC5a7MaBDz1V4cHvmnMHxBANr1JkSNHRvKCgMGthfsyfV6YFEESwqmpwx",
  "key20": "2MnfrDYXor3RW5rVrzBbGHNAuS5K92Ty12wwifSUztAX54aMeD5NpsgdNmrj4BaFyXFGqLcNNd9efKXxq8rkUHwM",
  "key21": "2oMnADJGkxTAuSkpTiAjc2LTRBtHv6Gta1o1gATiRRYwf3jUSgKeSfvB7F98TZD99kWsU3ieidZRLeyRGg5gkNtr",
  "key22": "4itM2r6kRc9Wd8wdzgyLKr8ZZ9vHD73U1DXt74ZzGcPoBwnRDnrfSPWRrrPR7y3pCY64BzPXT4XtnvRbNjohUKjH",
  "key23": "PAXtkdEhsvB526jgkP8obM8wLNzHvndwF2JnEzxPjxz1uy1np8eRcxeXkcKKFaLEGRTxALSKjUrUNaQ6JWARdLU",
  "key24": "Nk9hGARVQiQpT7FEn2kVgBBbVnWLqbFTb7NY6xyp44fMRyQhZZkQkqhjcMT2UPB5ncDWw9D8ytkHcR6E7B9TKMr",
  "key25": "2RW8SFZBiYg5fHmRHbH758kocwoSb3NqzZMT1G735hQJZASMS6TgeR4c2jonUicmWx1rXdeBnYiMicDdqtBQ3c6i",
  "key26": "2zDcpGX75mEyLveW2wJLXEFX49yoKg89zmP8gDpMJ4qCKoiYQukmQ7oP3nijQdRzgR1t8ALX2pAEfjnygjbG2VTZ",
  "key27": "28ydaXzoJEsQNqwoQnfa9kTvQ5aKYiRMiBekka8ianPbnwm2NMxVd3HGSVcbsJ96NkhfeEg1yYmHPDGy36JuyZGo",
  "key28": "2xBDTeYAXjdQiEnXkciRjmmAWA3JYCW4V46SLdRbE5ehFXbzCA27FKd4zhiS9EfTiSFHkHybTsGnG3V8t8kn8VMs",
  "key29": "5gzhfS3tyEHnM7Qa7grMHCkWy8ASCxecbYaancXMcDbokRVSdWzCfrH2ak4sCVtdchmy61bP8cXzmwZVP7Q2346t",
  "key30": "2vZqokFJcCC98B9ixccEKAxnZ4vz9DNyKvGz3AYL7PzHAiKg92XeFnZct7ewh41nQ9MPqwjGfKnVkhnaXCPKH45o",
  "key31": "RmVmq1fakzu8fKMFoPSBDJMn4zrSF6KEEhej3ZqgT8rPPDowEFF9KbU4FnZi281LpZHWk3rbABHoBMRDy2hKg7g",
  "key32": "2ghUNMf4957AXNYhJGe2RD4tLHQn8WD8iVSNVhusU8yT93FD8VR3mL2Xncpoj43QZ4XfNmh2U9J9bKA2kX6YEqir",
  "key33": "XWb9jUmBY9aHigzKyY8oDvdDnZ19xxcQtoamfkotJkDo4dm972v5pKR4Xi5wo4r5agaQQ2Qt9DLTb9ixEzYkN4o",
  "key34": "4PZbs2t6BqC98HhnsGwdJwxSREzeVxvDmD6GN5AHigBVeE49cXcBYUV5STTasaqowkgX2vEDELnT4NWWH6vdfdNG",
  "key35": "65AC4bTdABK8vd5MZpYDtXgSFVPn8qaivbGhKiguELnoNaLa3BtdVKydYLKLLq3bxaHsJHMcTXtb8yB2B8GMjdwU",
  "key36": "FrRAGXyK4nXxu2mh8xejHWzfncMhNAAGtPHYmoArbEbqEHpZUFp2rNr2jFHhxCnciNLgV3R2HuxWyuywFkVzVjS",
  "key37": "3qG7uHzE27z7mtAD3edG8KdggMtzEYKyQxnScSL39SDjfNAduh51p91Lfb4GSQ3VNnvKLbh279B48tM3iem85svR",
  "key38": "34XaLre9q1mrksfoReRiw49qgCgipmekLuwgCzkpLt26zeMKcF5ik4TgbiVApCbsDPKX2VaZP7mFCgToWPLEtjnU",
  "key39": "56WmuTxJzuR143cGkUEw1n6ySuW7LBR6zqRmh4njcPFmYSQDhbhwp9kkqWAwN5iV6QeTfVxDxBx6UihUi2iJ2zWh",
  "key40": "dbXDCLUdkNbxxmog8uYF9HNFyAq4oiVwumJbQ4wTawj6LSpz8LxvQoJdMgMiWEjdxEucbozcJMyxj2vgpjADPvT",
  "key41": "284iXdJZkhp4F72t7X4FUfZYABfBkEFxsYv9T9LKRwdMdVc4jT2tNUFB3BZ1aHLedqDpH3VKB4VyMT1zB4TXLN2y",
  "key42": "53DS84AoLejwBn59CtMdX1fsGCwcNeWFxhjnDduXaffaH3gYLckLLgu9RrAUamNfXKy3vqUVgJwT1UeLDr9YtJdj",
  "key43": "F6hqVdnrwH8rDpNQgefJqB3o7Rcgde7Cju4Ythx8KJwQup87Mh6dbzaGn6XpCzPi8qejeQMoKnzhVaxcZsh4Gky",
  "key44": "3hupTckd52pTbt9SEJ5BN5JUJ8WBKkeyyXzhw5uBzQmgM7mRa5SUT4MeBQEaq7A7azJJPr5YbhwxfdkYviQWSFiL"
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
