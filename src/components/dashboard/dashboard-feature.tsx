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
    "3VeNqKJwvSmuaZf6XtoBzeRbR3VyQxfa4sVNZGrMZRmpmD2rzEtPveHSyf138gWSvR3iHADsBnXHYteXUceYroPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMzPUHjJPog3ve6wQaWHvsQ3SmAdeUuT8TXLuNZkBXenuuscVyMqP9yAUZvTy7Z5ub9Tz5vxfHGhkqLipuHBXdH",
  "key1": "3N6TY8q6m2rNbHZsR7jGbbxDMRzVPdB6zTVskWMWQBtTfJiuB1pbAjeyn7Y3BGgrZYuuonXc1UgjLFki1xCkuJhm",
  "key2": "5AajSBf1gkhRLNn9HnUUrPxhCo3oN7gzWHeGc2KWgpZyj9noo6JSr9qgAkLEUbi2ouY5kFqN8h4c77e8x3GH3UV3",
  "key3": "gXc4cQLW37YwETVGHCTcihxXFUo39CXg9dS81Y6hcYutsGbvmHiyFRHsCJPFrmHDM73zUhnTa8rArP3ujg5GuFo",
  "key4": "gHG7YX4L4FYwp5uXKozBLUn2sJfHr8uXdqATLihjyhF5EercbmSQQ2ZaCw4P9Q68V9BKfgpFkyX9k6ZDGXpMgXL",
  "key5": "3mrW7PxKxx1WsfHGXi2ysTsa9fNGJBNEnheVoVRAT9q2acUzuWJtsEZJzdYWe4XPErbf4rbcFv2nYfEhRq1yNF7P",
  "key6": "3FsTgJjyq4QuR9J74Ha9aWW91YSRKauqU8tn4xM8QQTLs8enDSoJCZKMZM5NeBMonS41a73KYDJ7qsufbtCnPRbw",
  "key7": "2PutWfsvGRwGiv8c81oNxU4Fy5tiseSCG4sUf7hoEiFnXsGTRgNLAyv7apjEn5RbXZrLUFtsJxj9L5dQrshPM73c",
  "key8": "5gNXV3BLy81bnkBBKYpQ1fWpDcjJ9bTaEjapy1XpwfvDDD36KFUTc4RvjLJZmFoN5sQvbBiLZFgsdZDpNTrNzvrU",
  "key9": "4ULj3FzQB6jpEpVMDRUJAHue1tDKWSD8iphvG9L1TETVozcALjTvUgyDpDGY8dPCpDnoyXcZa5bQ8PNYQqkqqsEo",
  "key10": "4fsXEvK4eHhadncrw3tLmCgEQVRh5NKo2cbzRUnz7Ldto4pLMJJLHGh4jVBxT3DYHivtsgLDUCty8qsofd5BK7qv",
  "key11": "Qh77CSVSeWMRGnaCL4cGC5QHLu3vzzeFjvujyDK2MbRDiBEbneF3WK6WXiaAvF6YU8VCcedW1R2r9y1bLdXvYMc",
  "key12": "nP7WmpyAazsxz3jYdDwctp6qPfBEw2FbhrA1j6ymdFS4fiuq2sqbPKPVeg6bK66tnegMWPugDffq2rnGQW29ezj",
  "key13": "3sBiD6jPwe37mhqJeNGZwgb5UL3YMZFz53LX554d3R6fnCpc7mdsXbDvyDYzuBRAr1qWeNCKMNSqt2oXF26Y8KTj",
  "key14": "23tL9DAZ9WA98DKVejBhHQqEc68wUcop3D6Zg9jZXi9B5p35a3QUmfCxkMmGNv9RrYDksE6J6wq5sRwKDjFYMg8p",
  "key15": "59LvmHJ6LrUD1KcmmRZur8bX3KaPSmGBRDD3rayzexsTfbAE4dnQ5cnyuGADz9WDrsRsAKjicC37x2Ym41TAbMNZ",
  "key16": "1MVdDqBY1JsoCSKA1GWeznW8RwgaHifcExuhyqsBTFZKsfhcZsaExoS1WwKrjsmVLMCGgsTog45J8KC8fwxFsKe",
  "key17": "yPN6jJ3adwiyin8F3frUWGzDiVUfrNDJLN3CjZCToaHd2WYd4MTKNxwzgNMuAaHDvtSqsfeXVcoyv3hBdoVUpoW",
  "key18": "2qNXXbVtwPGY1x6DmhRiRLP2k5vrGTJsj3goAAJFVrAe82ysefaF5eqmVAceQ6fCUZTsFm6JWSgBYi4SpP96tK6E",
  "key19": "2tuHMwfApnH8dzYK3h3Sp6gym3SjA8NNr5TBr3eZecVgpAZ2U2fAcP3tvByiwTVEL4ChLRoC6WkbVPUZ2rwcz7xM",
  "key20": "2EecP8AMoyMaUxXzCK7gajh8RkXRZQemyAy3CBzLKnQtsjyqiehGGwnEakwv1RvZSj2d3fSmhU4ipJPpWZ7ehghB",
  "key21": "2BSt4Wj7aiLZ7HTVpFGttUhEpiVdYjSSv2NGnb3s5kdazXWrXGBD4t6M2128Geip3VjzC7ikKqtYvweQX6ghibrQ",
  "key22": "3EPUMxN43WhnCQ4VsqMEDtQ2kmXFdgaMCyVADZfBVWuJXw2RrJyw9sJtDH2bzWRLjshsxBFwGwYLCsKi5c9PjpCR",
  "key23": "wE7xBhwE65VX5NpgpX3boTwesaTXoadgAWUTnBqWdKwXiBjTqtEi3bp4CqF2A2d8oANb3Pmwmgv9x6o578jbHQX",
  "key24": "4FrZng5NNs2zXUjgEj9hP1msHiukKSRV5eSgCU37DijT81UuGALa9MgNMEk44FJnQfxu9ixoK5e3KkDJKzZhhi12",
  "key25": "3b3kVkDs7vx6HAoRdGUJhx1LEKCcDcGQWRwjx2wCmC4SELdZMFZa378m6eHdunAH92oVonPEJn4arSVnj9jqivRn",
  "key26": "3yNB8STf962rqBukfyRQ88o2VM7wairBZ4c4bt1hz6iA3fJayznsiqdkRv6NjEfMPY9hx5srECvjHLfjzjvhytW4",
  "key27": "4SokcPxmnLFZLxkY2eWyZQLcB5rhfrg7jSG3zpZgxobH9GjwuLHNr9BFoknEFJoweqUPm6rJZvDT2UEUpviG2DLM",
  "key28": "5mmqRoEw7JUJ3e1Y5CbZGvDhXsYx1yzkxyMr5S74PYW6xgfpRJfz4Qy2m3LUwn3wNwuKw6rARATCnGR8YoT7oFFt",
  "key29": "SD5EiWeRBYvU67Bx1A3fvebW2hrcv9m9nyUp9fZEi3aLAud7TMkVzFkqV4UVPHdaXYY1PJ3ShVEqVzKMoKCFA6u",
  "key30": "2wEPpkzdkqxjv35VRXa5XRz2dZrDkHjf8Wr32z3ygqQR3SQVGxCsjeBEQ536rPqTCsJsY8SMAHtbC18Ajs91vNtX",
  "key31": "4hzTdhuYNHEPN52SMvW2zjHna17PrgCxmiCEGUQWPSaCMf8ukNSmgTEwCF3bpHBC7NWnHcCiwddW7rL3RXwWpV95",
  "key32": "46ScEabnjkJ92YXgnyWty9TbS455Dhihqu83cQCnuLJWBmBC4DDrDWcrdnwhNR5W7KsUzkuxXY7FXcbffAk1o5RS",
  "key33": "4QK3Y41M6F3abyAYaaVGPDfw4J9bERb4zJYQc9B3QQXzxiWqffkhRXSww1RSZqpkY9QLZNbMXrvDQu4ShLRBAseE"
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
