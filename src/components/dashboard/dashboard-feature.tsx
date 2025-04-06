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
    "2zHNwkn2qUtShZNWuL9j6TzFaMGsLT56sj9pFLBygtPLo3ejQ2ENEvEJEDSaKg8WAZNSh92e5E7R9KFK959E7rVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTBJWQPofQBwrsaviVzMpVR3UTr9d4TtLzt73aDSeZZJ2nQ44jnF7wDCwd8YF5Vzw9paByWxj3N3SJhEsLPiPdp",
  "key1": "4dUWX7MvTGuHmVd8gzsfshcxvPoUhjLs7ZbFWqWwvsmNsuuBXk8sHrdxWp4TTUCQ1RXDBYZc66nNCu4ovCjDo75W",
  "key2": "54odeWa6xYSb3oC6qgNtCgE8yKpo2Boqv5LY2gDvyiVuYCmr5HtTSfeGtwQE7xdjARq5oVqFoHkKazQctHjox7bG",
  "key3": "sNvX8N9D31c7vhoBvbfFXDREorCJq6Ypf5w2ByGTBfQmtrUXmSakWw92xAR51XPaisiyGfw82Fucm4cEwSaeGtt",
  "key4": "4gWwzVzKahRx1LhcZhzm7wdFbUqjwNmeobCCSJZB5sGPv7awqJ3z5kruMNy29freahJtL3YyRpahpRC8qmuCje4g",
  "key5": "5hudzFnwUavVQdCfMSXe1AxXy7dmNgobvGynAV13wb4srCF2YrxqqcNAbbP2NDXZqcb2PweJXJSgGTXmfeWuJddd",
  "key6": "4ymZWSEZWgV9xeVUakpWQrtTZX7p5okLDEZTzFrsTaTDEQgkZ492HEzFCBrXVSUsHagxJu3Wk3hxrU15WiQXZHxi",
  "key7": "5MyGmbg3D3JwYkRriU6U2BhmPKD1hhhrJpxn9SspBG7veS74mG5ouqGZkyz1ztmzji3jo3XirUYS4WkNTJS2AFHe",
  "key8": "5nyLxumz3mP3VcXWGKCpTp65ZgRyUZbQ8Bh2Dpwt2a71M3GEeDbbDyPfUvukyHmRaH2h7tWEKCthp6qXAwdLzpSN",
  "key9": "522SVkZ94QhNjeA5CieP5krqxo8GMdpHmswa4t44VGPJWFZnthvD77xvvau8vJbfQMsvPAcXCxYjZeuTtuUd4pif",
  "key10": "2WpUKhVTEqtuTChyXz7SxKNV4tDt92VVcnVXYaJkUoxspT6sP4yUtKK5qLGZZrTREoGbcGgntFFKZnUUgK21GfGA",
  "key11": "NFnyEUwhAC6gXfEvaTJGiTMWtCjdhq4yzWXfoBnmaB1qkdTKFYcuc3xfu385MsEn4rjAEPGVCVgxKCUieRLnqzn",
  "key12": "2nJD858ZbmEagNh7PZEw4dWsma7Qvb8HmtitMya1TFfqBCSgY86ZAzRTw2PwJZv6kPrWorDHvBFxdzkPpnQHwFxa",
  "key13": "2uSjyddtzXxKsWpLmNn5eR7nwPxJSrE9kvuoVAHuVTymfs59buEAWSfvJ6K434hgUcvDguSCjGEpsU6dKfGuX2KV",
  "key14": "5gjZat4detrH4qFNQojbFsAhqEbxgabc6CCAyopmpBUAS4HhjAQADVurnWH7XzerBW1mK5xHLvwuKnjhtNEfBkzk",
  "key15": "2F2nYoq8L3r7HQ6SrPwfM5gyvA9PUamJc27CRGVcHSVApPyJBr4JozEw9Dnr67tMEH5mQVd5vKAARpULeXGrWqTU",
  "key16": "akebKxDwzs8GwpMpJ5G819d8tVyZEbXd2BzgCmQXxAMye9Trgg1wqhLHZphGLg1cdBwGgjAUPknEmNymTCMJx2p",
  "key17": "Q33gtuhjsPkEiPinsntbcP9bwJVCwJpFiJM3zvs29WA1s1aTKR2Ev5SNjy8GmZJdsUjeSaecoGnQudntjG4BpRj",
  "key18": "3AqHFEMw8tWqaVutrEWpFTXh5MYJ3xKfydvk9bo2M5xdiFVqJM4ZCHhGYkjKU99CQRy9qyj38s3PYhpqGrwMYDzz",
  "key19": "3o3TXpivAvuDiW8qtjJDU8coC5FA7xFy6FGChHoFr7kzaAcpWgarF4XU2AruZv8HJDUiiCsbXivJQVs6wm6C5WTs",
  "key20": "iQoRVBwTcdEEfPa7MrPRR6KQcgK87bPXxw6dTXxTEN4fJVKCTjUWaMmvZzMi5M1TJFJFuSAAYDXLn9EpGRid4ei",
  "key21": "2xLeum6nrtd29frFbK1NbzKMWfu5atq32eFMTSDfJpazG6xubiNrxJmdXwtcaPeyTYywjpf5FCifJQPpTSYSaWKw",
  "key22": "3FfLejdgN4cui5Sf82otHg58UhmjDYcLFr43BobZNYxLLaV9zBWTJH1pkNh2v5YvC55TKwGzJXCN5ph3mmcG7gin",
  "key23": "3NqgEvsRfx6TcwEhq6mmQVV74ywKFWMKxAUdF37JSrXeU32i94g517sRqc814BLjA7e9cbnBuANpNauiBJ3UBqnK",
  "key24": "EJyA6FCtQxx42tbwYLv4gitqkaAvrxjXfWUBz6jCMiNYPwKJoF7oykgHfxzcPwsNVUFdYTBnRfS7RUNh5rCgoTE",
  "key25": "5CMW471yQMN1WuBbUHwseMNFbhHQqXL8ntRDa5Q6qYx7JryJdwoLFxGgBdguLG2XH3WtnPqQ13qEZG3hWn6wF1t1",
  "key26": "2z2QXAqSG59MQzaE2ghmiMPNbMN1NSHPHqs2idrEeZkk5VEKMBdcs9qyxGwD328s4GTWJX8YV5r6vzA2ZijcmBm6",
  "key27": "4Qz6Xp628UxUy3MJbP5SpmDjkUMhmbGMDUJ5zsKUPVUZ5itXG1EcNw87tLyF9A5nXfStViSmfGzcaN3zPWqPSmUq",
  "key28": "4SSuVfySUQV8YbrgzdSahEB2krG81VvkKFSZCxcUG9NbthC9ZWvERPmhHvdVZUKgAJXcaRViEtjXKjZ8tja5C6dD",
  "key29": "3jq4CJDUt4pCNQoxZevHdB8ixEbW5jp1W2MfNN2UJumiTxyEpauLUMzqzPqZ95LAiwdhea3FfELHiHcLF4VubmpG",
  "key30": "3Vc7D4RkAiEg2u8yq93h8zmrTmRPmwnWRaLmiN2jKMmRoYTX1Ny6sdE2H1H2NFbZuwLzX5tF2fSJJCSWGE1sGmoV",
  "key31": "ZNiouoeZwWgjkWD7pSgLjtPdCJyTC2BnST72FMQyrMVjoqaBMk9uELMFrzgGYjZtSLNaBpd6xJ5zGen3GKxDbP7",
  "key32": "3YoLVZG63cbC1x14qUB9Pa3vZhW7RhoXk1KSUPUvyj3XaB2Ure5dGTtHAS34oByeWvM6sXMy6YSZnMJGmSoN6amV",
  "key33": "4ANjBkZBwZLmAeSxP4vKffUWmaK6PoBizzjEbS7rZQmLPWA45UbmbJ1tE4WgoXGJkm6ZYtTuwdetXgWENHCP2FDf",
  "key34": "5yo6iPZgKzreMxjd6HFtSTywCsgtKZyNWpXp6aQJZJou1BchhHcbTZqfwNs9kjkZXkYA1t6hwodrgD4i4dnWcH44",
  "key35": "aUQSCDG3tYKNseSZuenaT8bKbEcsTFjcnWisHzpvixwUgxNNQTJ3eKS4ScAMzvqrpaAuXKtBZbAy6hKMWaZBXHt",
  "key36": "2eJVT81F2fabjtNHt5QHeFTkx81jxGcqqhUzMws63GiXTmojSoWwpcMXq8qXTPS6G8RYEHzcpv5KxqLdb8rzuhMJ"
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
