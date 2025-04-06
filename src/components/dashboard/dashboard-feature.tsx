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
    "DHyZUgyKJK6nFsjLdYhtXddYpxRDqaGUTPmgERNvivfEzeCruGbh8nJ7yvpjUBsYF2WbRNz93eFpKU82o6Sc3cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ncfwEe4YULty6bZmpGY2mZtEiaLviaemqVy35F7rSW5GpQMFkj9edo3h3p4nc2P4Dk3Fpz1TnWFaLd4s6HSK7ez",
  "key1": "HppZFuzu8c4RLR53QuoCMr99msrUGFkJuU99AnVrZPQPBrh8cN97wn1kPq939fK1jNWtvRAEaaT4kgrnUyZpT2Y",
  "key2": "3Ln2jSZnthP25t4NscauzCxEj8Z7YArrXqSs7EPvrHr8iC74MUBiFEGpbdLEverq4rMopQraTLtenMPjBV9jjEvQ",
  "key3": "2fHFDyatMag6WvUCy6BvCG9iDderN4pMD4Ec9FNER9y2t3JKWAEoGMERnTxqr6GJvpAmkhtC4Kvdk4ZNbj137836",
  "key4": "Jqy9KxAdMzwGsLTJJCAoS94kps8kJKQDXxDp9oRjqMpBMX34Zr6Xd9GZ483qKhH2mn5rZBHzQv46wgbohbNAfWv",
  "key5": "5E9SPVAkhWww4nSZm2F2endQEjXSDSomTrAKMB9DwB7V5UwN4tRqD3mrXEGPeUUEAtxYMRXrgnuneq4MDmeV14CK",
  "key6": "nfFxswrBubTxQbjsvDcjTPJRKZA86H27Hds9R6nnNDK4ULiEp8vCdgyTmtMUvrYC8c236LyqsQTmj2EGwooZWfm",
  "key7": "CGdci7E7kYBZpzRACoaJ48uYvNXU2LKDtaodWYF3WDXn9RGmqoHSRhdzAFRFWt52UDnZRRXpBx4WZqhbfymALFm",
  "key8": "5TcLv9htMdLzQfZhd5xLPPWTiuzWDpU1h1UhKJGGe21sHQ4QidnmtA83tUcGVNmCBgiEDxGN1anDqhHvwozYYAAx",
  "key9": "5KumAuCMTnHS8gYkzMcYm1o8CYXuM1Xsv5QatAJ8eL16AH6opZfqcN3USEApkWJeZKUC4aLrRvwTqUHkMpJuaNW",
  "key10": "5JVpec3vG9tLxPQnxe5fXnPjHwsziuhmF5F1xMJxtEVdz4yjdpLw9eXFHaLSd9McbhKZi2jPQz4xjp6Qv2WFmWoo",
  "key11": "5WDepZnEXWBgivsvtYdMe559fGWxHmY69NWT4MEAN35saWm78VJjaFqbba5PQ4nkuemimpwqHFM4nepvpehqB4DQ",
  "key12": "47m5DbR2HLZLdPiV1sf8bnuJT38bbjc8N9dUXb7w93KqYB7Bsu5aZJP3oUABayDFcykqQUxneGSR8sfPuzazHt8J",
  "key13": "3ZWb4SdUeeZSyGorHsWZbdasqcopDHhSgFR8WELB9NpMZeVA3nkvBxZKMRnFMPpvsdwm16S1h5ddEJ1oVsdVwasS",
  "key14": "334x9rExF5F2zbXL5fHBAi7kJg392Qr8SZRikuMH6fSYbRqcXuF8e1ndvTf6vBq3xyne8X6cBZaV3WQvnXNH9JRL",
  "key15": "fpMdQgpyYWjFyuz6tY4TGUphvFKfeypJB8gKbSv1BN5hBuwPz9cYn29uzd2uS8vCMdarmma9DS2FobvfF2p9iVX",
  "key16": "4qFTDrPqtmZPg9jkpR6aQd6A9WnH7dn26cf8D8FrehvtAvbx3pE2aNpM28Dz1HaSziWdnKQGUzDCKizJrYJmYpNW",
  "key17": "2uS42kQg73Qs4S5rH4K2PKY53TMjMVPNnPmoKsBHzCWRG4oTAGyNe1yd5UVQ6ahunh6hmq3JsMreTJAT1i3AbU2j",
  "key18": "5q335SS62Q7Z2TViuG9sVx8TtY9WXCne36aWghPiYnsgry2saSVFSQU2FHMLs9s2xi3umabCRbfGSNa7Eva4BVxW",
  "key19": "5RwmP4AyopZfmgbXw4CgRn6GhLfkqxw3AUAEfBwgYpvZfZbtCwxVJnE4m5mVE6CR1Wh4Kgmps3sDJeS36YYuqtWN",
  "key20": "2wgkDDb6Fhmbwmr1NwzG7P34rGBLZV3LmQwuXxFW5UQzapFEazKc5BoUw7zAWzT5XwkXzi98TsSFLQbVPo2Yo3eu",
  "key21": "2AxDTAwhaipZTWAeFUsa8vVtFwAiGtmDyVxqH8YmihA35snXdNCMfFtWyrxLCQeB7tPN7YQMJgVyMkGA24SxjEgB",
  "key22": "2sT6DtHdczuMFDCaUBESzyAJRPfEPbra1HdW9rforH9eTjCTatebuCSEz4bnJTJWJkTp8sMUCuAvtsMKqaCHTJ2d",
  "key23": "2hWbG2H61KjHjj9da7PyYQhqZ23M5D6AdBFMr8wGEP24cZ9mYmyuXtGHG5ov4WnA3QkSpY4vAaCqjNh7MK1dsqaP",
  "key24": "hxQAQmgP2SRGFPhYQFe7Nocvm3iePsC51PbCa9NnrJn6JVVN7cip7YRBNRnXnDhKhww5C2XA6Raex4MS7pC9kZ2"
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
