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
    "3a4hXb1FfWPbNjsKSpHFVmjgvxguo1ZB1vVymGfeEcyiDQQTQgCPwQRRCbUDGbhLgN65QxTM4xm1yxo3o5qbzPwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zamQq7Wb87Y2W2bxF8zcQXkDh7RQteBCC7pbE1kfAZj4CqYciiXQtW6rrjiTq8xLLGk53fb3Gwyebsqbfbb9rwN",
  "key1": "2puFNRRWA9xtbSZmoAicY8xpwRqnhwZwfQ9JHtf3Wa8tyZcPvTLBqWd5ePLprCKXMkSFFDCBUW1iubaxwpgKA1yg",
  "key2": "4Rr1ipwoUsHgdZDXgciwSGbxPXywhVhcJBVfFuGqJpkLrxM18Ddo919XUW4UJMjdc3uUJXUjyvE4ZhDh6SyZtVyK",
  "key3": "EjSfXeegrxFtPekhdddx8mhLxAxTgTbEajx6Fpau2crbuuqAzh8JJ9sDyUbdiojYPZpahmY8nmhpZ4iTASogR8c",
  "key4": "xLwUjDom51psejanN9EaBf2ATyMK3KQvWn9JtucWHz2fD36ii5gkqjJgtKNF47CW7zZgopAb4HwgttffF84KMyC",
  "key5": "67gXn83BBygdLyK13ryhBUjXFZ8hzxMPgMREQB67yTwcvGnwbxDXASZyQkdWC279NhqmjxTQ2nKTgmFqWewUC6N5",
  "key6": "5V7dHNAwooi7cwhZzdAZwg79tFCnnBWSs2CbpF7TUKXMAGezWgNLRWGTRqdVb8msDd1G9qvSYYjwJS7ovdyLSWHu",
  "key7": "2UE5z4HB3cXM4UVtxDdDZbGonDDMVfJuQakZw9kEBSXNYHdB31sgx7ZAMEtMCkk2XcRfsTUhdpe6MzE56W7joEdH",
  "key8": "3opTq46GMEZhAoSwkCtuJBGpATQ2dX4XchNir3KgShpHDxwXUFk6QxsVNPModoVxN7h3EYB764aGKjR6LehHvDBx",
  "key9": "5mEbAhN4XNqW7s62qiBwP2BpeRC8QGbh9X68iU1kML75tgdTSe8hDQyMNyhjDAaXvCYBwfZLCX2X4YYXZPrevCmL",
  "key10": "3QRp1eq45F7uRE32soFU4d2jzByuTkEc2yZffcv4a2fkXCLapfMe6RgiGYJBPxEMVnebCQK1e9YVXXP6eWXmEqbu",
  "key11": "61HLodxjRDBAGwKrMKfTesRLroJt6L9mwMazeacsqUp4LUAdhmrBbvWhRBV4XFRrkEggDwLUVJ2ZWAKTRenrXNtm",
  "key12": "3fgEHTFGHP5Sa33suTcArYcc3uVMg7HcGeLCrhixJqbcxop5rDqz4F9XbazDMXcqvSmHUozdfudHz7wfu1oi4Evu",
  "key13": "2E1D2XFEqKoP6yEC3hoi8CZA1ZYEgJoRztAxUvKeYM3pK7c47XwefVCrVBeduJcyouKsWrxaJkY3NRY4cnvumm3z",
  "key14": "25P5g9fGk3KSBuS7D26hyWkANQGe35FahRhHJYfaqWyxHP41EZydKC3DsQKAu8Logu2MZBbeazQUXwRnPkYU1vd1",
  "key15": "2uQusaKCGHoaYmUiCnkh5SjggrXu6ZR7VYsZzzjz5XYezH7fUrsiMxxb5AKmVGRnAvRdmxTQ9KuycLSLS64qTBk9",
  "key16": "33k4A6ebt7jU3q1zRdyeMB4tnddkJJKDqXDiHiEGPmZWZsw88ZwYUE28rnRLeJcdJxTAqs5ivkpuTt8kqvtW3jQT",
  "key17": "jqLA787Rvx4EWT6ncBEtfQkHX1m2DQsw5SNP6vAb2nBdSJksRLjGJsURJcG2z7hwCidkuq2JyUBxKWAMX5tugrU",
  "key18": "3r8xsXk122eMMEGTA4qTkfT3sH3szB27BLF1TrVzdgioXytThTvEwsQntgejV6fm9rB3bWpxomKRhkXpoonnzUDz",
  "key19": "mNz1MLgAbuGF9rEcAYWUcYdMZ2kA29f6TEUW996pLdHJCi8N6AncSzGRbzVzwVnvehNJuhHQE3shEaVUSaJTrwi",
  "key20": "65V1dA3mwcm2VT5229rMyxNhL7wqmnw4X4UbmbtJEWrpa7TSKvYkVW1RYCMTkCR8P5C2EdNNnRNGrYpmcRVtPrxH",
  "key21": "bspN9wFzhNRXpXspw1VjXRRv9K6ewPJWKtNhXjRacELeBrK6m3SGcE7HhVG91fW1guLf6m4iVaA8Jam5ngyC6hF",
  "key22": "2g6B7SwgyhYrbWeUmt3sktk73S51wAU4DEQ1mPqYxoY7Jgkp8ZXBCQKERn7MrjjGvzpZZuTrZFY8t2FaFv62yeJh",
  "key23": "2invib1urV2BAgeEYq317JWYdb32KBmg7nsK5SzDPFC8M5DgKxsBvLNWGmRsC8WSyPXpcSqMfcyRKeHGvFgNPYKk",
  "key24": "q1TfyEfVX6CrRbDvxA6w8WRiDNQafknM4xGv4KretwdthFZDpDiMgx45MZurAxFbFxmBeCAjdWtWMJ7UcvL9w7W",
  "key25": "2a3A5AuQP6u3cfi8BTNXKSXqZvtuFhnJrScJQG3Rhr1cnv7jWqCj359ZcrQKFjHZ69W1uB3XjNxyR6Fyi1DkV8L7",
  "key26": "tGBkcSwoETaMPnznS6Q4MjxXptiHBxAsX5wJUHe4noSJiGfC2HqqszbkdrbaJ6Bsko7gQZu2cW9UZVz63N1bmYD",
  "key27": "63qBdAU4uQqit1QEKcTi9V658d73gFsaQTaEsJA1C9bY7sAaqzTbijaqTVrKBf9jzhrvRTvcj3sT4hDnJPsbf8YQ",
  "key28": "353SQq983odyNgr3x3PYwC4FrMYe9EnQD3pEm47mEWX4yuV3B5YAggc64hF81j3whWtmpi1CkgnTdyPshgvLbKU6",
  "key29": "4MqxYYw2Be2rZBAhCAU5XJdxVurXUGbhdHSxEx91NtUhPeCgVWUnQRN7Ekfq9NXaF2FbNr3mS6XVf9xFH3Gm3zem",
  "key30": "4q6za93SsNTymk7nckPSgJHZU8BCdgxBjZDyztm3JwUp4yJ8YPh3sd5syi428krVHzXqTJRBFFNVnwrV6xLcGnY",
  "key31": "4oxFdFyNMmbm8QRXRBAoU3U4EXK6JJ4ort8mZSH8pno7RfKG7NsA69DGWEEbRPcEEmENspYitigkK3hpoC67s62h",
  "key32": "FS4kra5cVt3WSFWeqrtVP1MS8CDyAaoQh6XKjYJ3UDs4pEGVXAEwrhXwhyTBom3jwdXuzs2YkJ9y347gNhBerMH",
  "key33": "2ufnzHrErpex85n15cQs2yXMeXELNPqkac6uuUbcsDtFHbbrVZqFb27N6NNouLt8b66XXzQgwJShtG45YWVAJa8B",
  "key34": "z1kTD4h14KXQycdJTKCLBSg3nYc1goWUrHhJ9wNYoWueH4Dc4p8GsZu9gZhRjDN3YSYxxndc9aunh2jWwMqsJPn",
  "key35": "3TPgAAZpWcrmFtbDPweG3riSbEtaVMuuZxka8EFAsWWE2cpSM4urwfwdt28kwUGRRR6JjxASDcLReFoGi4ZR9Dn3",
  "key36": "5S4pxyaFetX9Kn4pyFcyCTUZjW3JagMNBfrr8jdB63jYUDEyHNTTNLMt2b7KGUW3HXjPZzsj5wTKxnj2tPfm2HpF",
  "key37": "xVRVMxG2fjh57XR6pyFQuVVWnHFRtXTkdP7mybYTMgFn8y9FYSiqKFP6keYoA7oDeGKBCmKgJDmpmiaAKfcygDS",
  "key38": "426XcVsC6HixmDo5BAz2oeDz5VtJPHAbDAv5uGpyUgEeXyUG2XHyVLbfb2FJXUZC41krXbjg5Vefu8j8CnT56fTR",
  "key39": "6yjjwrZTK7eKXPyGxbUeB1wLrnYrkmoRCHtv7RsNrmUg2UsvCbMNtXapyS5hWQyUZQYZxpWdDPvzEWhfinMXQiM",
  "key40": "3QWRwsD3AhTbxhfpiFSaer7MDtL8fDchjvUWPifrL5eKX78yQHwpPbPdFiZZ5vout6TWCWdKXciJtuLJHtKoVhnL",
  "key41": "3qXxKLsqLTQbQCEjzkFY93vYNSNrFQVp2FVj54egpqMTqnGKVszt6ayp4ofRjFN16enVvGJyDxmwQojLoRFj75z",
  "key42": "4Hr934KJ6PTCZyfAgQRr4M72LAyzEoZVbJtstgYSF7ZtfLdYkcm2bUyuAkYnhBXT8nR4JatWstHXNDpejb1r489N",
  "key43": "3veLgyHrVXqPXYr8nGCuBfqN89xbvq4u6k28Sc9q3eLhgcmcBqw2S8Uz9LxSPwz1HYQ2JxpCjwFsoAxYDuauZxC",
  "key44": "4BKpLhffnhajbXM5RTaeP6HW41uGJWjWUiadGfHcAwY5WLxYAYM33UPJxAM8JBfhcBAQjTQr9A5xt57dbb7k349c",
  "key45": "QPjT92uvxAQGz1WzuSSim8K9PMPxQx7KcY4oNNFujuChscSaA2CxwPqzDPwBEz5EfgJtYgpPA6tdGZYswMVSZ2N",
  "key46": "2pGvLdXsHduLD8NcisFjRLWocXFP15g8eT7giwwcS875uVRZ2ibatRNCGswhnoiCmvarMpdWs3NN6NWm2zLaa7iW",
  "key47": "67hmbeBoLngHRFbFQD4i76gGKFnqeWGwhYosrFaE1kWFx8hZ6bfdWK1UMKZyXu7g47EzKu6BnKpdngKGoZztvbh2",
  "key48": "3qA9o7gt94Esv7ko5EKUFShgpffpCqqN4yuK7J4qzvnMc68a3dECjY98F8cxgyE3YzNo7eDLNFqXmyw6Ee7gmmLF",
  "key49": "5yJbv2dAdWysKDACBxTrDtjLcr4fP89RynHmCmQo6wvSzj44D41jNWrhGFcJbpasnWu3MVFUtVXnzkVZdsRmaTAj"
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
