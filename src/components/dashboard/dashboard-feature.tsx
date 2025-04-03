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
    "2tG9hA1R93xHzZyK4s8NKZTyjbeZ6FH8S55P88U28g4zrpV1ZjD39UsrD3im9ecVaYjnA84T6ctXBacqrZqiXtKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K32YAZk2786zHcYihFPFpdpnFg8cKTZQUYb4nfJw4j2414fC4FTkvnbFvtHk4s1Upb8F6Y9QxYYtwHQDCCPCN5j",
  "key1": "6K7LpsrmWpya5R14U5Q5X5opVefwZWxNiFrUYAjpFwTxnqHq4Vty3ozshUeCThu1cWk9TBeXjCWJCUc8R9ED19D",
  "key2": "4WtmorjMXhPRerxxWoA6mZcvCDsNTCdNVg3PcsXwvQzysrq3WPC9ZgbUJrqndrQCAWBqfPUxAm27HE9h8GzmGu81",
  "key3": "3encq6aPR22VXRoDgQirXUfMTCm1GeRmEtDEnPKPrxLYyHAjowKdGdokxmfymrXc4cQ8Zz7qCmEUVzkriJnNywNo",
  "key4": "3ZsttTaJGedWJffEHy8pAfamJpCRH9fpXWA4T1JySTCQrLvAEguZ5SaETX9M8vXVLPZ3Da4Zoo7ajpLGx4qbzQBr",
  "key5": "XXR832dHLR3cXyhPhr3X5jUpycaoviNBmFtsYL5AvgmSyWd6c6hEJgz6UcxWyPTx5jw4R475Tudiuprzjqb9b51",
  "key6": "swJ4Yu6eZd17LaDr11HXLzSpuQh4gctVEcipaq7FpkVtYFDsQp2CZsPiZhUi2abncjgXyc7KxunGmb2K3TKfkqr",
  "key7": "4epJ8ejvS6LXtmhQKrPgxF3HHXTqas5yis37DU4wfpK98hmh3P9DbJ68Hs4i1fehYKauRQvSPwSngKhJJMVAz3wE",
  "key8": "kdiEXiCCzUhJBg4PT13Z7Ro4QnqSLQLLC3ijS7DM7UHWLFJM1J1frE49bvDa1rYKdtDjeSBKeSZjiNAk4Y6bmFk",
  "key9": "5Uh6nFRoJHHqrAQ8Mdc5bXU4oD5kCdoPRJbZU2RWFqnH8GnPZurzzNc5bzNRgUMJVCp9qsy8Z6egpEczoL1ZTFBv",
  "key10": "4rWtZKuEeFSPkDVW7c8KxAihyP9oeoyxBDnXPNtatbEHxVxLQHqzWRjAy8u1CFU3dtiFeXYz1A1v6DrieQui3HuG",
  "key11": "2M6ArhoPuov59BEC4rTMmTXR3tZdTjM42oB1W8WkdK2WLxQSyrut4J6T8XLhX6UC1o2jP48LzUoVKKDDhGenQMJn",
  "key12": "4QQuBqJ1U54osWBM5UEvxV68kMBciXMSu8tMJDTkJu3eb3cWjcmTNqqCpnnK5E7SrUjzwXLDbqN2JgRofYDxkK5K",
  "key13": "3MU7QgyzXtcfqeYTJhbn6uM6UWmjTN7bCUZa9Xu7WpBjcGbofeqKrm8rwJpKryWXHoZGte5gzhD5F7RHAcTVRxGF",
  "key14": "25pT4UgqmVnCyzAtZHK6oZ5iePPfhAvRA3k4WEksFegG6TCGtM7qhKyWyjMCcAbPRxpYXNFS8LpYPoyoZrotBEsZ",
  "key15": "3Pee3KUSNJb22tPJLo31TYU6LDDGKQgnvzbgnFhSZNpWux45Hv9uxChgXjZNP8JVV4muSxhK8KJ5xRxUag5N4YVQ",
  "key16": "5puX4o5NThkVKZcb9LS4zmR3p8F5qwDjtcSBnDwRGF7syiMT5ag3h76fEA75sAswh17gzjJ8w1fVXSiAWqg8kihf",
  "key17": "2avtBkzfinSGvY9TBwp37GMokXctQP1nEjUjaSyqybvGf12MBUpHbMxwPx8pza7E91URTkk17KRDa7Z6EognLCR9",
  "key18": "6Znc4wb49oHdgVPiKDWdZEtzuVytQuKcJyy2sPTj8ToxBqSKRyeyc5jZ4UDov8unG2MzB7xJJ7459MP6tqEpWDR",
  "key19": "45HHz5nPJu2ocdCvN6Ea8UUmWHFqL2BHULjsXa9CV6MpQpkJgnqxvnPYznBvukbNYE28tGJLEJY8nCxYgofWwcBX",
  "key20": "yCa6MtMwsx2NNmRFfUhQp4mB1BdSWi4DyAws7mgq3zQV5H1pqP2e51dVMT62VHqgZNRCX2domunzRjmTebsiVBC",
  "key21": "2iBXVok2GwSmvvwh8W61QdEwkZX3k3LiUJdZU1W6kat6pW2zkD5nBPqtX6UvsS8XrVQ716XGwwtY11j3mwKtsuQF",
  "key22": "3dEfjY5jst8QovAdHw62fHhHG7kqbSH6HS56DrytWSyvvKj8Md1juaYBzKaY9C5sYGF128zz5HaPUwDYijjHjjun",
  "key23": "4FoH8T9UZe8PQE37V5ZJ2p75rmd8uMJN7xpCVSvkK8LmSFUsfavyKUGggNGH9DuCKQgrEjHPSXvbmmdkki2CuQ4h",
  "key24": "4r1gFfc39isSNmKVWhrRcggpnXoxiFM6SZ48t7yHvXCK5tW1wQi3uuoniW7SJ3W9uTVBjJDQhAYXDj42n6uiAgw9",
  "key25": "2Q6zZJBmEqpHDHsTakwqQQwANiEJFPS7UACWNeoxPMcp21mN3nymKuaEWuspigkyTQiYUCZ5EU1W4g5VjRAnzj2c",
  "key26": "4Vo4wZUWREEwDanBeN7qgsYNgWRLxWiEnXECL1yG3QuHN7fLcYv9YCMupf8eLeXFDVK21JYHvTBxFykyYWZWGoKh",
  "key27": "62wbe4WfuLiJyVVcCiLWa8S9JbSUT5qd4CPWqwPc4UECgdjusCy6bsATyb5dNLZ7m8aHCWpL32Kk9sFTkBbmFbVA",
  "key28": "3H4nhVYAWn1DxtHTWXfvE5tFbN2pniHjZsnu1dEPPhZmYoo9Nkk3zR1R6YUbazp72agwVzLHS7Hm7tKCFvrUgzzM",
  "key29": "XkroByTiZFSCfABHPL1x3gbVgRbU3PxnyCRUXE96ZQeMLLjoKuqunpFomrrZmoUpu8fKgXdAvuhmo78EeeVyMow",
  "key30": "2HCt19c4gn3129teoRBZ9GVPBVe3jWuyxxKwcq6F9MP16d24vrH93bdt7efzP5ZUZASyE8wWihrbcaiXSgSQ3VMZ",
  "key31": "3Ahh9RgjDPZkczMBrW1o9ypEkNtmAYswpqgXVQLWhU4J3MEbbnCs9ergupyA8C14SdU82piMDXJ42XRyBx9AFfC5",
  "key32": "28Fa7wcnYhEoMWFs4t98fxuzbahg2MMUiHvBF6w31ikaC8B4yXL6Y9hsYeaRUBvjysDQgGsrd81se3ge54NKL2ks",
  "key33": "1d7cg2wKNzY9cMotswDmg4tGyMk6tDg5GqRCYpCCDDQbXq4SiNEgoWFbGMMwtBXY9Am4rNsmqpXfU4WpSzXLhSr",
  "key34": "5ZkiSFkuqxobJW9szEv2UZeGJRT3UAwr1qD1DoTUUuaeAQaJBvcsB89ecyYhK36gPrsVBNgsx4JCrTTkapjXesog",
  "key35": "5AvjnBJdoYe1mYTNSe3J2vTHKBt2LsStKNZyFc7vcpH4U6dciHjKh7PvcMx8TkeDucGBZXPMquGqi6JDRbv9wJuD",
  "key36": "4gNRcHAzc2BCXjnSrmNVcPb7AnU4zQ4SCie7zd4CiydAaiHJA4R8iT1jERZY2JJzYjckJ9m6EHBivcVNm3UksKdu",
  "key37": "3a9Q3ajcBv2a79a2RP7pgRmZ6VtdojWjWGFNL1C5b3JK23XwB65JnWnJjJ7rEwvPtTA3Rgw7YF3i82sGcW168iaR",
  "key38": "2NPrzrHqQmJZUgPPdpHnozm2pZLMXp2ePPZoDAtbPBnjSLbjm9HUxJC8S6QGTDsJTg34tXMNoD6sp2Piis6GrNMu",
  "key39": "2KpvfDcznn3L1YMuHUPdf3BEFtK3bMTAY1ji8XCbgBgEx51mcYugmGd5juzCyz93Jah8RGej3tGesScc7m5jSDB",
  "key40": "2sAjXEGqipvfgbWQFd8fNUmd2PQa4E53FNUKBVxFxvN9AeTmmoYh4Zrz9A27iMwYTgqTF1u8zznaAZ467SwNFexw",
  "key41": "4iYnzAXUYYFq4vbuVbfnZtNJJoX1VNZ4Q9r2Nx9DuWXTKZNkkFHNChG8h61dYXiQUaV5VmJEUYGEyvsTjYzFXPhW"
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
