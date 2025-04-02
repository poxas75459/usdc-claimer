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
    "qbLgpvQsHDi9Mtq23X964nnxJUhumLcnJ9m5mKJi7JPgW4DqGeCo3F6wRJiA45BrUvaq7BNFHLjAEbs856b8zeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UouGjaKXkywRXSTogVEZuNHycaWKDLmDRSTCstLLKif8JT1aG5iuJme7ZhBpAYgzcehx6psG3DhgDJtVNRYvct7",
  "key1": "3re2DaqSWS42Do8p5yd4qedme1FLEkenRmmKZxNSD1tiWDUKcRkDgVpTsq55VnEtFSW9GTxhikr6uQQvJqPc2tA3",
  "key2": "43veecFDE6PFha6R9fEWfASDNF9wqbHhsSqRaP4GJu3JzxN2BW5dkbESVedqasgbdv4jXVhF4tejBfmyRo6oZ7VL",
  "key3": "3GbtcrMCDk3TGaN6XsGvjzLz6HmoKyzJ3egBrqAsSiPi7RwMfbgkHx15ZBX3McWC5MHkHZrdSgbtWnYGdmBhthMP",
  "key4": "YRYtdKWebkk6u6niR7ej9uCAvCPnZXM83gHPDE7S2meFYhS8B1psQRutjxJgMsTFCYcEkZZZLGkxTuuhuC1LKo1",
  "key5": "66kgSnvRVmWxtZQvtGjRr1o5rzxqmGiMP8AiKRNMEbPwXQQTNUbq2WBtRZkJFJXCPg3zAtRp31UpMPQEREMjTtAh",
  "key6": "4SAhW9UxnFFAZrSQpHFcutX51q8MWUemz5eTGE19ZW9c8WqPRJFcf9rZig4PGYVg7y2oDVHnCcYcSrXn7wyiUg6a",
  "key7": "58DiDKuxzmmJgyhYenGAJNuTayCCgdfhLTtZnJNr1q8KQR8mBSPFsv6ECkc9h2cT1UscNaDxkRNYDwUbb9uJ6WqY",
  "key8": "454Dzv2VM955gZJqQt59oHYFaLLcfnG9HFxw2qQS6xoi9YnCUX25pRLmteuevzLkX7MGmPyjKtzDjMpPMq5Bvs4m",
  "key9": "4Su6KyFDUahRepCewE1xyr4wCSfvHUpxQ9tj218R4QUQdrKVANJ9QaoMoyvFELY5yRefGkkxu5aaHMjHn7TBdby4",
  "key10": "cDhmrgxe2E6eMBNtUE8kCWFYkuwRHK5gPauvXsyJ7fQYiNzXEeThgXfxWB2AfjL25KEHRhFyyaa8yXUFYLifRUA",
  "key11": "3BXG3xqxpvfXXNxTYsajwp1q3UCwt8Xoqo8vXLeTPjJH2BkY1WPKHjS677JZZcG4x5jTKvWTpPZpnECnQMB5y2cD",
  "key12": "AXANuHpgt58werNbLUMTmfz7f4YURiWe7M4TtDRqtn2m8sDhBVTYXafp8yxpmpqkR2reB6UyTj57sZBq36B13hh",
  "key13": "5Re8nS48fgTYGP8PsX9nXymtNG5X3o3dzXaynsgi2aoo7jvhdY8WZZ1DrBZLzUVrbdUSqhCkQ9zbEjg6qdovSg27",
  "key14": "5Ca1XQVtgJfW7HkSsWmNvH6yrk57bZWcWE9vvCRHYC7uHmvwmP5PFqeaBA716SHrHkNXSpc4qcdMQJRoGPtGvrd1",
  "key15": "539wfznMb79JN4t3SKMeikfEfuwiEHbf2CcoxNPX1ZTF6XbeNgqpPK34ascnw5dKtg2c39K9tVsrEppZRK5Urhy6",
  "key16": "5WfWVCRdG6sSt3zFB5zdNzvy2t7mAa23ugFi8uXZGjUHtvkuLpUrqyVCZiZfYuFE5CnstccJfyD1F7kZFyWPEMg8",
  "key17": "5DbXpbFM9wr2UKeCyKBSfw3aWit7bxcbr8nxrZA8h7yYjXTqPteCqCzTV4LETiuAeZjDoaE4MkVduJRVxjhAYdcD",
  "key18": "4N4wwQ1tMxUjCYFEYuAxw9ywrqSvqJcZRy5F4WUr2dZBADFN8VdYWk7d7wLZytuzz3Q1Mc6mh52Hs7ZZ3RQFnpYo",
  "key19": "EhH7at4Qboa68RZwx7T3BV87CBrLCcmoGDevQs3QWw1APu2QmEST4SHqodLJ7UVkaH12qwFWohd9CjRiUL5ZzE8",
  "key20": "2fHfVWdFPgNMZTJ6eQ65XyNjDCTBwqZKfiae8XFMPBjD4B4cGvYAs73UJf5xVmgMfKFrNeDgV5Dzej1XfpsaQmWv",
  "key21": "5Qqd1iSF67HFeJW48P53RjqNT4EPhTLzwv7h8jEvEVrjpjYHNpn2yTusP7tnmpQWshtULKL7D4NncqAjTXFnk3HS",
  "key22": "2FAUkAMpceF3MDTJ5qbzQdVpmwubF49TJ4ob23d7TjmnZujTtuphtWy1DhroERocL4YsCxMa11EQF1J6cQuCG599",
  "key23": "3x9WaQVEdoUWabYu1MnCpJjbcastkRhafnmEte2quEyEgvXV22Wav8GV55aX12DE2ytDLNo89wNcxjqepuuUtFrk",
  "key24": "2Ke9cfEVYzvbdCDUvPCvWYHr2E4iJreCVa1ttGCfrocG6Pou4tGjPWvbazfEyk73EQDCNtyjfV8PmtFdsBpSzEtQ",
  "key25": "3e7zndQaHTaWXbZ5vYae8AKkxaM9tEyUoM2JsEqfqxdAPiWRTkANAHTTjNkSRnioSrCHLZc2ELi5F3pjE8q93Txb",
  "key26": "4nUM45s4ptHzMAE6n5G8CCmCCFM991Ka7ypkovCai3uvEqw1HgqDENmuzpcwRrSVaHQfHZcBFZ9Xmxn3kEiZLQy8",
  "key27": "3REmjGGBJPRZPDYeZ56VG4oomhrU46uCw1xYUSTmRYFp4FQRwjz1awNcZdFNK2r4AwDCUZfdumE5n2JUseTbfMtk",
  "key28": "2aNq5ZYtwekcYnbyepMNUqvCXQfEEL636vGUGksAWSSr8jM5PoZmUAMEshCiHoCmmLL5nwRWpqpqWGbHus53xiNr",
  "key29": "2QhG7MAKqYRGr4dUL1kkPTKkTNZgZZ2www37JqsUBmNPYYgqJfEUHCwBpwMt3SY7BowEu7QpexmRjBNJWvP2kCsp",
  "key30": "63NdGW1N8VPUBdNygPsQDLTgGGMMoBAoGDjC36QFcckTk3LW9qjn4MPeea4dNtwoanv7aubcZGcuWFALY8HTnU6J",
  "key31": "5mGFYf3JkgFXuL4VQQ3jChreTTQvkzpEiC4Z5TFrjgguSyLjfBCyLhNeVxGA7vDrbwv29jJzUr91rxmZLMKjUXm",
  "key32": "4cfJvfZY5LchCQTAW8cdCna8w1L2zdvhHU7hfD9FBhfZkg8BotGPErJbY65VH8Wz8q93knCqNfPbCnEr7uZUuQu8",
  "key33": "Pg5aytMPwZQv54KyyS52csJ85qZXTdCgLHZ8tvFrypaojPRGxnVTT82YaLcLMJascNUeHvTUeRK4tFeY39ZvhCL",
  "key34": "54qhU6TNVSnSLzfBiJCden5C9rB9P1e1jCyNgsg99QTfVGuuoMw3h3yXTvofXA63PbqKjhhwiQUMg37mTm3n49GG",
  "key35": "4u5Mss44uckCg2CKDtgJg4bw637Z5J64kLsdh1pmfGLQn4j6CChyjeLkWnuMJF9aDkJWNAvt4qx95E5tgdqBJ9c",
  "key36": "4mgmA6ZKqtcjLE8XV235Aw8Z7LdqYfxog4LSx73CST2ipRENWgGZQQGxtFAgnQRtpUqaejwn7FPxc9RWQHHJu1Mw",
  "key37": "5T3J5oqtHzNJq2XuNXnxfKHpqemzRJ9UA7Uo6A8JTq6joCSikiYztp9TaVYe7zjpgWpvVWGQnHQqt9Zt8WLWtbiA",
  "key38": "5GCPRovu7CiDj6KHd1frScpPeczGfruYoes9SC3NroMkKEQa1cDZEc92JR6z2jxQenkv3MvkxPt9R73DzcZRLN8H",
  "key39": "EU57BGDxbvGQa5tJ7sByNzLWuu5WbZHR92QYuGaKm8DaKJqA5U55PConmvTAteBcxnMstUq28FfmaEGR5RFJgjq",
  "key40": "3a2u6ZaEo5h7ewVyij4B4C2gzkojogcepXDfNGJjiq1dNsbPXFUUCi4h4MqUMrUm2HGTZWVBr6YFPXGu7xcXkjLX",
  "key41": "3nvdrbPr6BoRgjviK7qnWaXKcH1TrpNxnL7JhNgFjdGvgXdjHpzMNwfB31Ks9ay2danGzi9xMGd8GjVghFaLGhn3",
  "key42": "4iP86NJ3gLs5zJ8FHJpE53dGuiL9KFZ7mRyvH3iLSRrSjSHSEHw9doeuKWZ6JU3BrnkFLN6tegNBattia5XyQZEM",
  "key43": "4kDu9rWwiQ9VNY75rXjzQsXyzKvKvRcE1vvdA8Bh5DKiDpxM4tDrmyhhTFeAZzPZ8NRbTPr5obnTsLG2t56R6W97",
  "key44": "TzwyDP6c4HcVCNeRPPhjcHWZpgZBvVPyhwmBsrWeiUazn2dW2YN4F2A5YWfkFHJMSbyKYUbcNvQ272qBx8aWQCw",
  "key45": "5QQeLoDubYXyYR3i9SovMb5ZVzwA9EqqfuktuBgswPbJ2wCJDHjTHf4S2Yqr9y4SUa5Zv9up2jp749prpHQpquhq",
  "key46": "Rb3CsKcA7BiWrcQVU2bPY2DQr8xgf2fUmQJnU7dopHW6mwqgrZAiw1Dz1DDJaPd8R4vxGqh1m2GJLVQ7cKUfMUs",
  "key47": "5W8C65WqzctT4x2Xc5ubgVwSJNV5gfbGRBh7phZMmxSusd75o5RuB51f9JZS1D1dwiZzVEfK6qi2A4ymdPcYChej"
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
