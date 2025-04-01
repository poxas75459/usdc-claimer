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
    "43yachReGXnhY36z1ynz3Q2c5zDdhUkwSF2LUT4mbVduJ57SsCpQJgMCcXNSdyoKma1Qfi2bQhTXCzNyGszuZVx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idKS2gsF9iRvus2NLcAy2Uq8JQthM5tjVbMjEWh21sbayL88wco4LSxLeDcfjmvxD2CYZZBoQta1WnJM7RBeaBk",
  "key1": "zTD8ZaSfyVpCU6fEcxFPPdodUS2BfUNPG9F37AoU18MS8n1CoyTajh8BDEZCspxMZcBywgHFDB92wiJU7MvBwnB",
  "key2": "57DPPx4VeQko9Hnhi2rCWz9cPHGTuzYjXUUd4GfBa3Qzg9fVf1W4gd6kTxXA1MhF1bfRPvVT98HASNdAmoWJz4hg",
  "key3": "4bqXrXwDodYVRwZ849463Nab62yhRQn6c5NZKYsVB2ahWnLJURvodmxnusq4ACwqjXCGW7DVLwqkcTuiTTpx7RMf",
  "key4": "g4isQ5XXTbTruJ9NTjFmqbRiFBRVD4Ew95uqE6JjJcm9MPGgvK7MZ1ijmHpPvaUf3vMrxVAFfzbfXpAdQXJuwbp",
  "key5": "58vpVQznFmUQoZEap54XmAVcaoCTZNM4A5ZkybCQ7D1UdDzuTWHFV2QhEDkjtuiqpBvyyeB7kpHZGg2EYf9UZx8t",
  "key6": "5ie68hUyQVE5AD2cevH5PCDTFCHoMCdAmtwQbRUkWKaJgHTkQhNA7BidgsifBCdfeNs3xrjxB5LAE2aWLVimcvgC",
  "key7": "4wobqZDeaJ42aYafymfoWhs7VXNiVPP11Z28AVxzbss9LEtCZiqjXjKosETu5Tua6itB1dH2owLjQaEhD3eUiK84",
  "key8": "Zz3jU38GZW1aajzv77Tg2X12ZdNanuZpQ64Am4obnumyPc2PkCERRsTkm5FBADRAiLBWJinL9f9VinHTZ7J66XJ",
  "key9": "3BEdKqgBVyUgTzBynZq9JtU5HRJ78EEF6WeGvjmHngSU6EeYSdN9Ht7bDKxcD6rFpE5PaX5nEGmZFS5xHJvFZwPN",
  "key10": "2pAVXwQpqqDrGikw9HZtib1JqCSasREhQPpahjmRFVAX6Ew1Pyi6Y5YnHAhP7CzZcx8BdQLvYSwqoGDKjzR73dLt",
  "key11": "2zm2vEWpyMEcCnFYFN3HSSpTbp9FSf41boGjrioeacGFo63yrUnG2r5vAsX1JXQCYCyBXvmJWX1VUw7BdYui3oPR",
  "key12": "3VVfmzE5b2EMHZhkVUGnLL2wWzzvQHWdvGcFJr1xNPReoFRPTYxYZ2JE5vsjfRGt1UW8ptFhYnzzH9BcLMgBdsc3",
  "key13": "2WkgwqUiACunbrfUW8NKWMiqnjYzLNhSfzWSGm5nLBNev3U25cMvpKARK2qqy4pW26t8Fr9YYpnUp2rQx83NBgJc",
  "key14": "Qgph5N3yMGE91Roe9N7GRSh7mvMQibc4ZcGX76rrZtF7P5fsrAqwGTfyBYoRB459a1FabNb5PW17BXhPuoqEsN6",
  "key15": "3oy6W9NikgXTBu5nwQ3WFrdsosH9PjTQZrkvCEvgovMYe9kdubvXb5a4qvdHKRVkG92Mgmnz63Sxo11ADWhWNZsd",
  "key16": "2kwTcC1aUcixf6pchBBNXMcp5aqkEJ3An1qHHQMq8cNpT627KTJnY7dbuxkzKQd2wosAVVLgTCmiGcm73dzcZext",
  "key17": "5jpcNbgt25PxFPtjeKgF7uaTwz9CaLPByAPpYAEMX4iYEScHDT7j9ZrUbb95bDSkiiWJSSaMVS5WgrGuw3v5FuSC",
  "key18": "3pgs1PLA7ku9Rh4pbxGTuwbys82qV4WcHwhG8d3qF5efNUoCSqeWD2z8rTnAnNfM1e4aJCSHCK2hKxoMti15jmUq",
  "key19": "4tejphzQtmGSTDnEQiWLy4zUPsQXhz4RSgwfn2PDb57Uper1nPAoWpeJ3jpUdbbRrZSmVxJ6ZFYtMwbVtCJQoM14",
  "key20": "5QstNZ8QvAuV59xD7XWb9TJVvP5J9AzTMsSeBJX7mS6Yu6PaTxny7nLRb138AsaqeW9S747q9BrVVGu3TrkTeEzg",
  "key21": "dosGKQt3CLeeUDDjXRbjZEqodZm49KYv428bHgaEvRyg6XbcrNXD2ouNyA82HTEpgkkQ66RmPAWdmEDW7D4GnVC",
  "key22": "4RKJGZptpdGiv7UErKjmc37s3je7QSWntTRf29ZmXuY8Y1RWc99mNyKkSSBdVMvEJ56e5AFNgUhs2EFYT7p6YkWS",
  "key23": "25vSK4H2LGEjsj3bSYKvztQ2NJ4qNwNMti2iC132CBw3eJY7vanWp93gsf47QvCSPdmuQ1w2N4kG8eaMmHnQ6ELn",
  "key24": "52NrrWLF6HXaCsqvzmoGddWZfujMVZbmAZT8wauLXLB4dLYPwPGLiAFEJvMR91pLtrLarjR2xWG11jnxwFHBH2dq",
  "key25": "b21Tbh7GbsJcWnNrs9r41eNkNWp2L4dEjejMdmYNrKyzayX3gjFDyLjZpENiSR2CHuUntdesRbzRcj7DKGcia2X",
  "key26": "oZLWGj6MarQDtsC9WRLuyVsCng8sU3PX9fUwh4iN8Tijzg2fUYzovNSqzEYgU1Tur4bWXn83EwQku5dmEnvoVA8",
  "key27": "5WweDrtHT4ydE1zhgDBRSGPyqz27ThWTYfo4EwugYGA8qSwyG6qH8ZfZA6b2m9zZ7E5yZtx37JtboecxADemBvJp",
  "key28": "3CNGNooaLqdWooBciwiXy4D2nho38QSu2ET3JuyuRtEgvTvdyupnonnFYDw6c5c13kpThGouLQXRtMKQVeHp8pyd",
  "key29": "4XUX92aDiYMq9tkQuHmdZoT5Xc12uscz8MDR1LU9dzP4EAmLBK2YvrVWcHfj9ZvBTbmjZZtiui5U4rpGPdJcatem"
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
