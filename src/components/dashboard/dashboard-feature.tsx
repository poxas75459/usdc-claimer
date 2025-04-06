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
    "3E3USVdH3y6Kj8Ca6U4W16vCh57gYYCQLbJw4nhq3XxXjGZmYSvqaTd8XeDhbeSJDKGqHscByZBPuoPAK9a4DTg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKJpj8EURY4gWCrqHAP9xqaxLWPmUGYXSGXA8g1GA2tdtxdo6C6afx7n9G9gzYsTrb4SnSnjZFAAjP5Rd1qB5qc",
  "key1": "2pHjwJVFJTkbGcdDEmAv2sc6fxseWgPF8Tyc8WsvpQDoGG6BJJ3swTGsjoUdoKvPmofeuW8VwLTqYm4QdFfN7EQS",
  "key2": "5CNxymy43BRDkg3wrvzD3jPbhzEgdCT3wWHndxVi9foVoa8orveXa8w9fAtcSJuwFacWLDBEcH73mTF58nKNS1io",
  "key3": "4fszb1Zn6SfN8DbrjJqApggWSqGM1KuxiYGC1H8x65se124aByuRZmG3bcbBZv7zxRAtE9BZoapV41j52LmbcfEh",
  "key4": "yU7yLTX3yGQDzYBS7BM9miCvNQuiHFmWpcf3E5TnuJVnFigsj2GDrg1YqAKNLaehdUfisT8g2CYVLqT6sRiS4MB",
  "key5": "4vsQF2bhCVy2tDVG3ZPteoACUNHZ2P5PmyV5w6W9522jJuBVJ82jTDshis64uT6jwd4ZNqGxUjLs3DdoovjtrJAp",
  "key6": "5BM7wQqF8Bmkc1z4nJYXkVCUT44MgvXoCZHhnYVro6Vo2conxmzECtXDrCfDuNSUdaX7VWXArLUJL8MCVkurEot7",
  "key7": "5PSoJT5ntTn1XptfNBojweTcYitSLs6a6k1FSM9RfqA5WVuT7YyniaNdrZK2iqTpMzKWcufsWerCNaXQMnaH4Hpb",
  "key8": "4t37tAeErqf5GTHdSMPa2cafQWmo1VW5jiSGssDD44k7shKje57a8nE5HwhNoTQDepzNZRqjNSVbfsY7EUtJumVp",
  "key9": "4fFkqxkw1oTJP8aNyCuDbtpfFbucZuWEbtPsBWMPigwpLMUsbxjByjojMHU3KdRfiTnxjuB1C7GyRwTW5aPWjDpk",
  "key10": "3THnH85L8jrNhQ1Nf8xsv7NjTjkUvFjUcsBB38kgZtRorMzsJLB2kxdDRNte9ymzbJiye66YNbrhPSf2VcoYAY1R",
  "key11": "4jwj5jW9wBuKMwrpYA861hUmuWZo1Pq284VQJgAxc4vqQdvdTsriagD2rBhcHBjJmxTdWgZLZyyFxUYZFCsbpd6N",
  "key12": "3Km2PSPxJJoEWy3GYDB8y1rXDvdrn3Zs8bQ1dRLVuVtJ5PH7NYG2C6mN57arNYxDYAppsHErDYRCZBofe6hRigdG",
  "key13": "V1Uugtw4dTot5V7Z9hrLVnxntGbhpEk22xrSYERmShWpzrTMZG9E4ZnhZ1HJniUbZc8YrwaStjN1Sk9nfC4ofWd",
  "key14": "2hoCzbU5myGTQ2TMo6m2E6Sb7FHSuXtNXEHufsmnkLupcNBKopDwFJJT4NRmQUcQvvw5QqsgvohagHTrUhmEapfg",
  "key15": "2Yfi54RktoywKGrgJs5PHMeTgAsXACUPnyLpQT5n3ETa8SaceEoSX7iuWEw9mvfvLn7my6JTg8khsNpRUjTDcVos",
  "key16": "4Uh13F52a2GFKUcqZXqZSfNJRw5mWChqP1B5E1rsT5j9LodukgqZ9LptLtEC461qhypnq2jZxRRgQ7XV1ySXaaq6",
  "key17": "51TPPxBRzjDj29jQ7HiE7X2esf3hTCqdGtaVDmCHtR3HaHiKPcsudZZkAX2KS7EFVyQqRrnyZH3UF87D44AFea8V",
  "key18": "25FD2duwHgBB4U8QaaDwfQ1F3up3eUzcLjy1H6KUVnJ5vpXLAdNuEoQBxLvffF1aYdt4B6YspCh7ZSrhQto6kHsH",
  "key19": "3ExSFegt4DnD7kBbaHSCYvzQGP8GppzGDUxhJZkt4FPVfzcNgHnu4N8LCKHMVA2wfdnpjdWKwoipUU6Ec7ziCE3V",
  "key20": "5xFJW6FmswtEk9sutgU7CxzgPN1LFesyEn9qZXMQiLMQt7ZNSwiBn482jNpzoJAbrpuxQvpDVW53qmt29p7Frqst",
  "key21": "bZppKFTRZ271HB8qDtasm4eKCBKewS1ad3JGAKERdUdiYHG8qVtRTXizRW7kJKt5rj1QL41wwUCJj5iMYe9RRDj",
  "key22": "2pq8WbJFNz1fxJtux4DG2P7GzPEioXHtKeUk7z9heDY28FgDDz1NvT3FhF4GNxJumPfhcMWvGhJ44dqAEhg2y2hA",
  "key23": "3S31jbedfReUa94et8Uf6Ss6WJp7TSNjLjfnuuxwERnVPowda8Ku42NhdiQghgthJ5xhJsXzn7HokgRPBcBztggM",
  "key24": "5JveJ4mgrnvoa7mugQdcYt7vEQLvYVnjxTB4Fxp8eGcHsYiMJZ9KjotTFjNKhasSLTxWMeMsJjV416vXjb2AR2jB",
  "key25": "4BpANPbKmhTirySYcuupeRwcv9Tb6y39dQwVLYMT6TkiXLx12hqVJPTCeDBwGEX9oJvEUHkGGDGW6cdt4C1Uat9f"
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
