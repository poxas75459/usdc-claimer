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
    "5DRX3goo5B5frEEBxvQRg6HkJZLm14XqouC7WtPxqE1MhChEHBTaPhW9tEgkC5KhxzasbwAmNxWhxDY4UvHuooYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HujjBMmJ8b5kUvcXZJq9kvpp1Rn7Gpw9M1zFLzixrNYr69HG6rQipTjRZud21DHqNcHw5ZhKiDkug5QFmY3WvZp",
  "key1": "4rMNeQCvRjESE2vnjCK759GJWbZiQQMmUH4wFTYFhCr3ZQ8ZzRn8yzpoWViNoAGUq8wKhrbnQLzwxop4FPcGKVV2",
  "key2": "3cmEircJq81q5i7xHKRrtojRcbins1wP8TDPShHka1dbGkZVwZm7bcbPeuxUKUfMqcq2GfhGeGCm4BodGDkZzzXy",
  "key3": "23vgkMXmdTGxWMcHcCpDrAhu5CZbeqVbSipJU7DFGJ2nZPeWboGdZMgSCi8QWsPn55iFWv24Y3BvuVxkY4CR7B8h",
  "key4": "572YVKyUfwci64CnrKFG6yfS8d4UHCksJ4fj2U5VHHiVN6SDezHbHUjCWMgekW2zZyKMroXTPXm5sjQdDiqNpQUw",
  "key5": "czRLV7ovGFz4o7khiH9u3FuEvVCwri3BFoeqQ8fhWCrXvQ7eGWPbotXugGbVTQwGs5YsaLji12dCoVRHefzB4wo",
  "key6": "3f8h5dJbmsyEFNNJjDTJHGyBQVqxvWMrv949sjhQk2FJdbWm9WWdgRJmwraqEmh4uCWwHykpzA3mi1MUbwKmWC6z",
  "key7": "5t8PuRkxXz4LRFZbgrwnCTxaq7tuJu1wTUbhqMPRPpYQvuBwwfX2GtoPKgCftdXDfc5gbbxdYSkivDXxUehbsn85",
  "key8": "671syKdJq2VsDomcxArbXgsYdBZPM6Vbf2ppoRcFK4DYdW3winFMEygvntQJwEtM9LWoUTARB6o1Ctu2bymzYN79",
  "key9": "52DqzwKHN5HxvrzdyuVU2NuZxz83cVgMCT52vEfPrxHAmBwW4gEGtiVTsRJH3qmYFBvCYrPMSbkqtwCkmnw2aqVs",
  "key10": "63kph8D4kYWgFkvJ6ASJVHWC51m1ZUbpRPFNYi3qrjSLm4av5W6seD54UZj1uH9bmoo2SGmXfWcMEwi9XMRDtih7",
  "key11": "3LX93VE68VZ3PR7Ni5VHJUrZxH8cHRCmwQHxNkCo4jf75wcWCH5BmK4QHwQzKRAcfHsMicwgNznKN438WcCms7pc",
  "key12": "5AmyKgAP6kHFEATKBfhBofMxp3SPZWVAJ8iEEKfjbWjbgtVPqV5sH1Gvkv99gJQzfSdjUMGUcwDHQMdtCVr8SaLc",
  "key13": "4Z7dViFj4vpUMvsmA4SGbjnVJ9TAhN9risxkGtYLzL5X41rMGgZmnQNFV9dcWHEjJXW7QUNxofH2jAkqnqno1Efm",
  "key14": "3dfSuVkoXPeYWwmnLuRFhGnanJHArxdwXMz2MhnDnH8XVukCdTjvx3TVsMet8TkbJ3JxCB3mQyWe2dWyNZJqoBf",
  "key15": "2SZMDz7yr7uUhKUDqourFh3uBxqXzaMNsa5QRzmvs6CW2bhAQNMNtQBrfGnyfxzmXXBC9U8Nh6vBQ98K55pLGhCk",
  "key16": "48DY42o4PMZBxUTxUjcr8GPtzJFY8ZkqkaPrr4raF8NYAZ1wmoU5GzgVsp6RrSxA2CPxkGeuFZsNZZ5fH1DsXDiS",
  "key17": "4R4a6yisTwsej4CDKwpYqMhoAtihzX51WSgam8MX3DLaeHu4KpnT8H556GDyDwcifPy8FPQLwGABvoUjZsTsGD7T",
  "key18": "4iR3GViYppvDQu741JU2sEFAAAWXdaVEPiGaE7wxndJrTnYHuzYrHBYQRMygoAYkjXHpwQV8KyNSbk5VyJgBR6XX",
  "key19": "5wd9YjQmUdxfQMtjt767feSCTxcKDHW9okZ7vkUFQGGUdkEEBJSWnkVh9cWADtYJWH3yy9LVVXht8bujTuxFA33T",
  "key20": "5d4DrNNYBJEHpVcW52eAqg2LBqQygnxXHcDBKhGV6uryWk9vAXsAthmqUBDu6TMV9xD54ouTZdMxPzv9V8K5AAre",
  "key21": "3nTendHKEMCGgLD7LsBTn5KNnra9KqJ1xpi3zJBmshcea8jXWjksrRCHBXuB7ASEmaSmyFZ4XZXQiubK948CpMEp",
  "key22": "3QhnfgpASf9Vdism2VXQiWwEJ3CiLBJYDAqhpVCxpvfctChxUinmcqDfzwZzCLeeeDjYfSGq3BNKMWwezU7t2hKL",
  "key23": "4YFdtxqtwecgFNgvRRbsCemo34mjp4hAqZRipbMfkYM5b1U5uVxhZzpExxtCPG6CpjCjrt5FmCLcMhHFD1xpKBbY",
  "key24": "kBGcYc9HjGrGJaVv5vkcfTX8w4S27YJ9owJJ4Yy7he8ta6oVevA1bEvXgp9Aw9jEEirsNkdmRPzR4eberLVJ5VF",
  "key25": "DZaaUV1h9b2rFswURRjjye62LaUb9pKniquHBfUgRTg4KYiFiZhjpd8sbXMbamoCpWHRoTnjUWxaCT6Tyzrd4oM",
  "key26": "2BLFvtLefzbCgRgMGJW3itKCcjMkMjKh1TrU3zjRAcfQDcNCzcL7v3BGcjtGR59DANL5bLDucrQsdCXxXzxYtucK",
  "key27": "6arcUWaxyNRyULLZr3YX7rmLU8UfT8Y3JjDoo4Gx1oVyudJXqwcZjUuzAm7wKguCWcRuiPnHx4hgnbBsjkniiLe",
  "key28": "4QPucuFGas1ofFoSetyJfMCw8VaLee4d3MzdbGTyKMkiQFFTsHpdmLJb3FH5Cs7b2m5wzeVCBM3aaxA4fLfZWYRD",
  "key29": "ah9XCARmqAjvoZFoRasJBZeFyqS3Ymqivaefjc1jLxnhaVof3RUY1Gyfm7Gavcok3BQcj1XMwWLw9aq78T1hbPL",
  "key30": "zUxewyynZjAL7jZ6eWwERs6C5PhvoPwY37X9x5xYd5TNf4ivw9uJL4BYApyVFLMWbcWobcJTMnJmkcfiF7qvXyt",
  "key31": "3vCFtTaF8zLBmqrzepHEk9WLQH8amNseyUxQcK15i11ojJPYw8NBPXf45sBcLNKP5ZnDGyx8PWoRzRzYjC4RvoUF",
  "key32": "2ZWcumP5FQNhrwZcZ742artYTfsLeZpm4ZZnX2briiaHUP56yQtYjMTgBDwx1BTSDmUfAnWpfhNUczZ1TziyEnui",
  "key33": "3MdQcghwxFQpAh3zwq9hRB2LymRRo39hZNw9kqGRuFDfCzxUk2gPe8u8eaKp2tNNesupugNQVZmRepxu5UfR179v",
  "key34": "34rBA64PjfsvYJrQszt77TsFyNc4bc3r5RLhWjYdkcdvrPu8rJzEs6syTt7w3xrRcUSVHVXgW2zUUx5c4r57XEY5",
  "key35": "4AtUZ8h8BqAPNTw8foa9mvEGe3XAbV5c3cgskJzva1cpxqmpk5c7CPibKetBVLCvk1tAs7NdTafvHbhxMKb69693",
  "key36": "4GB8iBFbPmThYNEVD2sFEQe9kF8uwyTCmBuV32iyjaLMATUYzp1QqMqQmxvdTLT9Lvn82n7hyk7UsZXETpkyJcAD"
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
