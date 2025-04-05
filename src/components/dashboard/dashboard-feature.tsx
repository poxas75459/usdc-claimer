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
    "5A5TSgyZvZ3Bjjun9RvWv9yQxyvgie3hqnKZTRRetWZuyGakeRLpB2zAUqPKWSpu3XSEgMGyikkRPzpkyZGVGjjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FC6mjAnEMApqzXMX4vc3qGMVJrmQ42hHTgsZv5287D7az7U4pA81devVt4ybXbMJ5pAeEz7oeoTinjPqjbercqr",
  "key1": "5NLsdb3oC2cZ6Gi3t8vjCuTaZJsss5WLVZ4CD5xFv3uirT8HYm47WuxUBU1fXvCUiTDZGyANBEt4GuzpKnPXAuef",
  "key2": "4ZS5Ytt9ipDZwH5KxrfUvFT4YcbMbpHH5mcttK2xKNnsGiiA2gM9shuYhgJDwhqvVfvmh95ay5JgzxfxAZhXri1q",
  "key3": "2Ypp91xrtY7sEW7F2jrKijLhaU45zqjuaHoVojBAf1cDL9xCqo9btXZ4GacX6az7dwPpJueeGHTfDgQrvU2tAfmn",
  "key4": "3zts5CbG7s7g6G2prhoXGtUawSjcVEcsd6JfJSgUWpiEwWkFir3E8wDQhu4eZyUP7X1xj3jBbwWqBGc5PeV7zXCN",
  "key5": "aGdDtorSWDNGQ6zP6HMj99iiA9Ewm1bx1N38HiYGTFVLYh8JMki6zsRy6U8QTdrxBW9wfSPQLzA2YpnmtkFrjHz",
  "key6": "5v4BwSv3waUGVQtLCBZ1pPTJXvyw4Gxo2bJwJ7FQ2cHEC4fKirp6Rhpcpr7kXx6wDYoKUgAYTyyKvbnhhGadKWzp",
  "key7": "4UCDFDiDdLQgU321LU5hBbtoJDn1JZ27GsZhtEWUbkPHboZdtAvnhqiNk5JYkdSrCoLCQJqcC8mY5YqwH9P7CYiG",
  "key8": "5YkfVMVA9NygczkbQVyy63XSpWY55txar2mXRUWFequMtruDKKXP1f4AnskkjpBjV6tJHwA7vBh9Rv7BTBRq5FUE",
  "key9": "CBS5JmD8MVFsvatpTsLNAz782Y12hFhpUDFhXDMgiT6zpzPCmgsV37AhTxecioR3iCbHETTJXm9y2K9U6RvMCLj",
  "key10": "5eCRaXAe3cHBhz9ruuK39WgCeLzbU1dkiDnJbnihMQ1meEkxA1m8vWeRJzbM5SgURNs3moyA5BxgAGkxRfnX7N7Y",
  "key11": "3KoLEG9VF8xsSYTFiMgusip1McEys9xz9o1isoSw8zmF7S3953YhC9FYqYux395GrAcSHPdbib7TD6TJ7g4f1fJZ",
  "key12": "5j99pNThk2geKRVq9ieE2X7v2UKvHmzXFxPioW45VahvT46kXmCg7zAfD87yuaJ3JyxhvfCPLw2mKFaeJxbBcGti",
  "key13": "2NSeYj38fi2DmWKF7XGq2VbuDntLZM2CnHMMFi1ZuStNF43NAjNYrwGaKjym37T7kKd1Ta7ye3GQJ2Mohb37nteo",
  "key14": "5Wsyr2unv7mz4LmzizZfHV5g9u1aM9PwoCpzvJjpzLH5WoZxvt5iRBHE7QwSai5DbeEjr8DYqMh2PGfMp5gvxnxD",
  "key15": "4Rwh5riFbcGJngmbGZJhaG6k4UMhFrTfiHJDzTnvJA2pLaoxtueXXLxGDXBonbaSiSZimXrENpNsriyaGsBtwDU6",
  "key16": "pvb5fvuxuJHuJF4G7ZwhwFsVEX8jMZqBMUCfEZYBxoLsDWq6fZEGDp5gcSRTwvw5BvGfTbWsqQtn2LvzWLnN2CU",
  "key17": "4oSHfdvdgYckT8PWpj6pmE2unh9wmnaBHTgbPRLLVLkrZ1P9gdC8DdxS5s9foaALxhYnWV28k9chcBQ4nuz5b7xD",
  "key18": "63boCtYMvymqBq9J7dcZ43VAybpvp2sgyTMxQPoj1TgfvPqHfF6cB1bLdM8m9VCm8a8cSx4PDCxaUeHCD8CkGfCE",
  "key19": "2T8B6tp1Dfk2r1vCxoD1mP9uQ4sGFRa5q9NT1Racmr67knrdxVv57DKrofbrH7CtcGct2eKZwrJ8oooxQpQNDccR",
  "key20": "477MApyNJKNURDxdoPN9pt1TG4PrzCw2XHWPJqxL4Faiwuak1KUSgxjAVP1UvCSgNvkAxQB372LrVstqVu82bu7",
  "key21": "3Vr9tTT87QBW1ubwuLYMhkvs5wwv73XT7RjkScgeG8PqFMyWHrtFe9Y5g5tyJDKn5pPkxRCe6UJjfECvzLnTtnnV",
  "key22": "3AtTNe93Mn93cuffrjr3FkePSiKYfMYtDHvCUDg7yV5oixoYCepNMt7hSR2NgJ3Vrk1NwyBaA4kae6hQaPzJhyBN",
  "key23": "28394ZJQv6ydbWmjdjCUiKjpQvixRAQbnNozLqh6gBEwrLNeQbaQaHJXdLvUr4c9cfiwRE4Ee7dK1wgSQ84HBDZT",
  "key24": "3DaRSre3jEDc6TGg4Tb9bkuGKgCxh5MAiq1hj6g1WSumbWUAScJCtgE6NvTrVs2Ng9uvNaEaoG7krrma7CV1j5CA",
  "key25": "4cfaetBaRNMvJx9agHZoTtiWwypJrmpPozD1Ubd5pEcj3Se3wbjWop3v5imzTxSYMrXYSyn6SmtN81XjjY14joar",
  "key26": "4M5QSoDWnSSzd8jphDxXPajbNtg3vsrAaPxZAym45kiLxTeNMfEGa2FX17pvyWfWWyZZwJVnSEfjZ7hicBaEFEE7",
  "key27": "24gqQdxmo42J95suLuoNrNyeAXMT9RmL7mFMcKE9U4pFV2Wiqy25ZRpDyJMvG31h629mzdpKqpucpedcWEd6Prmd",
  "key28": "2KTF8gWvKqGkZTWz69ESHpwzQi1YQsnbBVhdcx35E6hSt7gMiLnUnZ9Da66BjaDBQYmP2tGCSmfcBjYSXBErjmKR",
  "key29": "5mx7MPT43TiW5UynaNsh937fJGUSgXzNDLWcz1NpsC52dwJtQRDfksJCYbuniQoUCAwGzLKJFjhoBNsbQhZ1LiwN",
  "key30": "3PvYAxu1Aby74gfzvbAdaMvug9p37yZygVwSn9MueETB9AECdMyxKzv9Gg4Weue1tcaSakt6XubUebxHNLNiKJbP",
  "key31": "5aysq6pm2YzSskhTCZ1eUakQQYPKQz3GmsfESPWtLGh7vYM9wxoKrKWz4YVLqzUZ8hKkBc2nzkfZrUdM57bBsBNg",
  "key32": "zJ1MnZUniWGKTgLfLqKLKEbx6MuYHQyXkDdZDHdLyeKNWsR6d7FG9HFtyY4WqZ6w8ydmLKmYiYyBg5REdSDqaot",
  "key33": "5E8DyyDCEBdKLxjHBYBCRKvJFbKCknm33wsVc5JsT9EwNqJT4kvKjGKfVRJQfbc6tqxE4LZ4xMwY8MZTW3caNasb",
  "key34": "3mY911DWV33oUPtsMTNQoCK4v7m7aWKhPzGNVxXhQNpqyRHFgC6bNcwncqbfLn32fVKw4WQA6r7LbfLNgJAPeG9L",
  "key35": "3KrtA9t2p98Bobc43HG88L9AYF1YBwSiQQ5KcTqvqsU89Z4HBDpVu5qaQWZ9XawnzfPomX9GEPY9bibxtMKSt1kf",
  "key36": "28u7cWnYZgmmiuEMo3GZgp6KkHMtzMzgc1gbhiEz36SdF6YJ83zRzz48kYc34GTRfAZEVzgHATK7kZsqr9nRFZ8Y",
  "key37": "28e2WDAGDLxC68Vq61kCaNiQywpoKNFgRKQxv6nFhtGXnxQfgaV9R5iFQyEK4MxYzmLbGPQY7eqSXy5XSi8iFLBU",
  "key38": "4aegaRdHU3d4v7HwxQ5c3B7nxpxiKomz3NyEsDob3bPvjuK9PbTHcZkrr2HxFriNrw8bLdQLi2MLrtAGuS6bavc7",
  "key39": "W7iJQGVpGdTcmFxBoNNDeHxEDocgAKKwv6XE8eaoucp89wrjoLuKNey59kpXu69VdCtF7AQQxVjof3kyYHcLK7D",
  "key40": "2DGwCJB6XnLz5FJ2CHSmYZVSeKVSqtxEpfTTjEoLc9iznijtBYTkr8XDSedz2sGRjiVMYP9oJ3epvQa5xd3AAK2D",
  "key41": "3juHMYj9ZiyJk7ZuvCJPXVvgpH8ntkrpQDPLs5BZ4EcNveAxEpNHPjkAFdS8hf4QoNf2UEZRUJ2qcj6Wjyw5PpTe",
  "key42": "jxuA3x6gkLHpRCgs6HUGMJmRDhckKD4TrHBrXbRqBwbuV85hN1ceeyM2p74BerhGohzKm1fZTUpEjnwp7n4JBVe",
  "key43": "4omVzEmA1BdJ9mXVTEa48AZWVQZLZcZEkMSZNFfs92vz9396Wg7sKFzsTuyX1P8BMw7CUFKE2uDhnLEq7exPoGoE",
  "key44": "AHDKXW1A7jGFyjLdxaFum1XvjuiGT14igguX85eWqxmkZmeabxPZZEvhRJvSxi8kim4YHPZUsb79K5EJK1Rbggo"
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
