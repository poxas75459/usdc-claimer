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
    "35Z4aRWn4kRqcHtuJF1d7DtTeWC7KmUz1GmEZAqEqwNKMkZsgJAQtyUDBS7cPG4QTCbsCRoys6sYMJEhuDnw5V2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMsYY72Z9f78h83Rm6tzG3dyJfNtMimVFnGBPFGUVZzTyY4dFmZUT3iYrG7vsBNeoL3GH5D9KzGzfRUv5M5vWj6",
  "key1": "3h5ZehiCzERNNcYEoSA1cWQievjpuhXCbBWCyRjvqMsCDRPxjavADo4iBfnSVeJACSSSuLimMYCdXvjCocJHGHTD",
  "key2": "4XMDnnkfwsjVXDgDaA1hXoQP7wt5Xt2WFGVPVXSR22TxMUuX4Xmdvc65kswYvBX9mWZVg3HbTGreDFFXaLrshNM7",
  "key3": "DqZUBwQWwEDe3CRU461FC9yNaSUdvNNV8Lg7rAQqxBJ5kkbkRgU7Y2VLq9pQdNpVepozWbbxYUq1xFucMVPLs6Z",
  "key4": "5SkNH4kuMmEtVibyCxtLrNQ9CPPfAPda9w3bv6CfQsBe2LK4DngVUTqjGEVKUi9pWEi8hEy2hSXP7UJvSLUT5zXo",
  "key5": "3Vw5of6ErmNdCHuW72p3sfchiVvvuMKEDEgzGwgCEt61iB9TrebTsSt5BoDBkMuhWCsyGPMsWqqDiZ2cYYab4fQ3",
  "key6": "5rg7H4fHwiYpbiyAsaXbLEkNDePdGjrkd4nCZERVbxPEgawoftpW3mpQZCeJWb8iezq1nesUiKjFBmo42ZPQogHe",
  "key7": "4rPDAop3oMRepXYLu94kXcFVhnoMTjS9As4j6Kmzm2nzEdZJykViy4c465XywdGh9C2SedXwMuaFgG44r9cugQ7V",
  "key8": "64qKNEm5AYRqAKMeHTpfrqzSVQhNjXnHpGB39JSfSp1B8CUtcjtqsA3dgGjpdAjNUxHKFy3RJEMFQxQgVHhtZQJB",
  "key9": "2ynYXssje3W5mYvDv5U9MydntjFMS9TCZVbrZFmJiqTk9R4ouZdviDpU5umKUX7yafrNDGct62oUP6VBfiG55ZaL",
  "key10": "54fpX4Hxb879VtrpEALkHT1Vvd7vZEA67wELt7B8Vs4jPhBTq5iFwEvd5wWuRmqYs1av5waPCcPC7ibNdxh5EabF",
  "key11": "5q5AcyuPG6puT4kRDeTF6BRhPMDUHEMvNCvgLKfGFY1eDM86UCs3DmGFcFirq8Ua6NW4r9LuB6uceuZq7pgd6CJv",
  "key12": "2FHuj8QiWBdAJ8XWFkZPSVu83UQs8N29Ly3FMr7WjUF2AWJJWek9NF1qSE4iywNudRSxcdmEiLw4w1pYmMjnCMP9",
  "key13": "UDBVfSc7EJH5ZUXCtrPRBTpo4Nhg78aiAsfZfoJmhtFzQufEWtmDgHb1vdvjxWGKwK58j7hxivBXrCrpqse2gTL",
  "key14": "2SB6uPZwamtghyUKyJqrXMcJMg8UBqfLPXEQXs65hq5J6X3BYCJL1dpJGPU5AQeZGnurQbBgwgvuxkByTP8rNzye",
  "key15": "aqYfWws5ygZW1Q8jKuTLhT2PZbDU6q4KvaTLT6BgiFYh3opVPWb9MiBZE2nKd1qhTk3zeKnAJk22tZrbwQQmYu8",
  "key16": "zW73ueJniUk7rxQQYD7wHZqcBej5dt9ft1Af7CxHrho5WBKRsq4vizijw4RVqPsmg2ao4jjfULx9uYDw1KeMHw6",
  "key17": "4jnQufzkoe3G7FJVYkp6NstWsgiPjeDGcW4D3hX4MGssGZo7aNWX2amCsGQeGeQ1gj8LYLfrjwRNH9W8T2BSWVj5",
  "key18": "5bn1VKGgQ7NsUj47KZSB7M4D67W7LSfy9k6mtFKUx7VEnQeerRWC1BALMdfckNacgJ7wUaYjeZmsdrf2XVAfQmzh",
  "key19": "RnJqDvjHo5eM6dSSHZ2nnPggJs5JtpAKtT8zNTh7wQeNuodtTSxbb2VTPYNHgk4paWGaQ6767P6of4pr81PRCn7",
  "key20": "5TTcNVX3PxCACfXEBAEMYMKM1E17JUBsoPzP6fogpGvBzqPVGEThdJH9xkFBZZbeGkzMkcB8cQhngnuUupQXhB3H",
  "key21": "2xMnzRDaBKxZ7HF6pFnm2ksKPa6VXku5tmiCQerYYZT235Zi7J9AboY4TmGCBneJkjVgnSfkryGue7x9dtKKPM6P",
  "key22": "2sGzeQBA7t5LzoyotbwWiWyFJdzpLfsyKXKuBroFSTj2FPZGaPdRLUCHwV3TRkLc1AkEZXpNphHRxeXUNxBoswUL",
  "key23": "5hJz7tAQYBWCjKG2sPEWUCdzdHvTqQxMpaTxw5gEjoJrLGaxZd2y6UNDPtSpeAS1mnc4nGLccdCD9ZyKYjgBosaU",
  "key24": "2oWmWDjsXU5oQK7CiYDigUm92xUtxQ44pN8TZLpycfPoSrHNHWz9otsmBrb37eiSPZh1N5W9GGEyoNH6QUuWropS",
  "key25": "3c6QbzbAkLxRYLj6issazyPdwN3Km3gCRLzae9fQgUL2pKeGvznnd264f3oTTztt1f9ApQ6mGGHQ9mY8qYTjpZgg",
  "key26": "5YGBuqShs24pqkbdTCmrXfqqKkmKSobGm11xtdeTT1fyqrUwLWRZ32oLyZ37g1wXZ33Pq2eeEebrwvBdf9nXYAKS",
  "key27": "3QbHoFQxTyKd5ycXUUdeRG431vdBP8ACsGPLRVm4Wn1XuJN53MJhHX8tG2tz4duiHAUbMLUb71JiSi2k6JWkpxCs",
  "key28": "5MFpnqfbcD77VKZexQ4VGsFjVBcVmS2fjjxammwVvDvZ1tRJk8MnYJm8nB8TRDTejsxRYbxyjGUsi9BNzgWJutwj",
  "key29": "4nzJ1Gf3BAwKbLDmj9UABUoE2BCH8syQgFLyfP2vJp6mdS1BZjZZRYCJg5Zq8fKLwTaMFYoC3rgG1esNJCJTHr4o",
  "key30": "5wcUmC5YH21FjtVCvHGvPAa66wgq8g7UZ2DeaCnk6EdiCtrayfaARfpAb2JYgSqoLfxJ86n52uMRj2uRsHWrets3",
  "key31": "5e2DfrHtMhvV9Qtia6oduJve4xbkZt24dZkDyq8GUGcTJvisqvuhEhAHR9gzz5e58DbxvWSCKNazsGPMVUSW4pUy",
  "key32": "2kux5jYqyY9NeSV8GWEFgetxCyhva2jf28RXPcJs3vUW2jBTEkNYWBeF21ArnCVkRiRnD3dyzLLNFTJEK3pcjMyD",
  "key33": "4s6wYnDTReTfgmxZz5QLexQ3UwsZVTT96ur1Q8295wyVJFGecejYxrjA2XFsazVQEAxbxrCcGRqZqMJL4Ld6dovh",
  "key34": "5psLWoiusKz6NBr2PxYnixF41Yoebqp1dCeWEeunAjbm2JKvUBPWpSbtrJDtb3wNgSaRa31vQzZDNmaS6odgppkz",
  "key35": "AVyUkVwq6SAX69579uWa3uSjeRsYKKww7eK2VGstJUHFbRtpoHpgNRiWTRUaCuKy9sZkcFhYpCxLTejH3TQHP1V",
  "key36": "2cE6QyeyoE2Vnf616WghwWRwTKm6uXB3DLZWHf1RBKXsTwQPbaFD4MAvknFVdH7TN9MUXFk2fVYfFfNjcpEyUf2i",
  "key37": "66mjbSF1t8WqvX1mzS7L7gFFeSt4jungFy6En1EC7MU5nMYdARKqDzxjVapFPboxpiMCixbzKQN7Dx5XKkUuWcKm",
  "key38": "4yc1sfX1WTjePoGLp1dfUEbqDRcDfJK9GYkeFQ4bf52sWdpkfVkkYVuHHfd6UYaf986wxQoyXbFLWB6phfqb771g",
  "key39": "3iLVxgFon5s6o4wDEUVtHvVzA4QCPtWUEzjWV24u9c3W8jWvG1pLAUH95uEm7FQvCJwTVtDsv93hLNM84Q8UsuEE",
  "key40": "gSAmo67ow4uVBYgqwoAkxWpPfVk4A21igwtLwd3K6UV4baawCDu2mCnuJmfJKXocJSGbwShTcfDwxJTUdydWC8s",
  "key41": "5BVDZuq9bytTr2MjzZotWq2XWxNLKSTFxcAKqe44nJyAftm2fafYMLUP5Ssu4n6ZESeotmBEAy4qpQFacvfyfWEv",
  "key42": "bBuvgh1SY44A7zm9aDaZs82FzSgGxmbC1n6B8X8JP3rXmoqejmKsKaTZmtnmUYPf53AFaj6iN6m2FyDhMmynwyN",
  "key43": "iRLPUnE7dA56ChXLHzMH6fTDWvabQHXD7hS4YrERfGHCBx36J8aopxPabX9yL3xBHcUFj2Qx2rgs36dHGzGisDR"
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
