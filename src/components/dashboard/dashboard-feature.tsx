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
    "2PAGbs4xHtYgpBMGSkZSFyxRgwPWFGcLnrVKMqtGsJENxSuvYVPQr5cjLvBEZ7NbkyYZGhmDypWpxjnwMFvW2odv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6PKaQ4BXeKCUeYJVDx63MBshnC2Vd8kNwoKM3ZuJFGEhDj8Ec2hpGLYrZhN9dQPCcuYSWG5CyWf3NeRsTuPUp1",
  "key1": "3hY8ZBj5thyuvUdPUZmJhK8ukzbamxazyoqtgW3F9jEnEQRnjG9dTwh2PE9RH7Btt7goXroUYRzbZqPJY5MFZXYR",
  "key2": "5hhAjFTJPdtV1ff7FM2CkDH7VyAbUKxHQkHRQt61Vhu5RY4S2j7vw1XtBWXBxPr8YkenW8zig6YLDBms2McqCCMx",
  "key3": "4fK16ngHKGgMYKjxjCKCCezDu9UykoRwxp8LKp4nBVmQqoNRYCPsGPE4uVoSznSCpir2pqd6q7vH6oSDa5JGQddY",
  "key4": "4HFNMCjx9QuxsXFirkZb3iUNX5jsUa6mWHXuPZP2exvVdosUEpieYRzAkB4ad9MV5hAv8Qghs9NqAGAfw6MQqHza",
  "key5": "3TRvzg8MixtxMYmzc99d1vMFXP7bB7wBgf2igJmsA7rx5ftLMWUTtZztzYCp3uYCsq6osAWBGwnb4sQjsGq6bhPE",
  "key6": "YdFvAMhrRyzoaFhH6k9EefTeF8uyAT7EfnMBZCrd19SsRjHfF2k4Xu29ddAJqBr3MFcofWF36NfjRyE4deJ5ZUA",
  "key7": "2AkZLxPx5NEw6PBYez98WhJS5BtsVChETXKkxeNtW6cHGRNVUwt4X7RhFVTxvFUW6WmbLn2ajEFrc8KRo1qCTKfH",
  "key8": "5346S8x6BYXM38oRRsetLYftqiY6X2kfYc9pm9VgBgvhZJUGdktCRSQT7kPV41s4GGo12n92EjbfnK8T9kTdH3j1",
  "key9": "2zjgzH7hLGCQtZZtckRVXj9EScEyiGaKqfFJJvbrK2UQZNfCpNsJkwdyj3B9uo1qRwKRGnFZZvAYBLzdjkfTjUhB",
  "key10": "5XweFSq2EPK6cJMgichbmsJ1XPWsQVLtfmAffupX2ptqA6K7GQpMYeMpsFHQTwLTuirT8j247YfosduawsQAxoCA",
  "key11": "2iKXFxTPXhVZA4yijnS6APfr9hXiwonqBE5uTg2uatGwBBQmWMyzpvGDLkHHM55axW3L3b9TpsmdfikJfsyc4dds",
  "key12": "4Ggjh5v8KQEbpnWBaVxk4SEqWnitZ28QKaBjUSoWCNYY1WfLWYfNyeQYSD6GXdM4ohsgQX7ycnGF4Lg9od7C6rMf",
  "key13": "3fkpcsSZpyLRddGUAYXg8kJu9oh3fNHTSW24cW3o1ErEsPx5E8Ly73RSESeRN2ATv6u417uZbaSiCUqGc5c2bGx6",
  "key14": "3A3bYfAdYxpDDmBSuSMQ5YfVufJ8t5FUbahEk9o7eZgXzd3reYC8nfM4mtxMkYNZLkB9LQdGRT2MtDeG9sU1tV2j",
  "key15": "byK48BguT22R42NCFyzAsVuuRSdk2tMhrKcExBWA69eYBE3FZa7n51dU5xT8dDuQz8iHT94NbyaE3yh2RqvsZmq",
  "key16": "2bYk7AGDMwd5aTFcL6B1aQAaheRp4uAxXqB2KXFYDfYDWdw79yMdnvAnqKKAhtZNr64Qnjwg6XTBuw8fMqKs4Jzf",
  "key17": "4x2UYE391ETsDqjJth7Z9p8yMEKXSz9G3kjMxYQ8yFuCj5a8Ekkj7oiXNBrkCyUgjPKrkMGVwE6gVWTBsHSMwUvg",
  "key18": "59VFJKKz3vidKUoBwT6VFb1utsKthCV24fh7gRdMkiQWoR9UcUrQa1hYpCes6CkHhJa3324q47hApxtga3TVvi4u",
  "key19": "48XXGbfaSJ6KrkkiGhJy4UaBoFa9gUj44iEXbhk3yVG6NNTRzTJ1aNFvDqxvgHDQwUHT3Ww6T4AkLRLom5d3YeNA",
  "key20": "3uDfRbtMFiZaZBodmBVF9QCB5vXtnxVWXpChspvo7K7WJSHGRe5XfGZxV9apDi7GayjRhvgernz5GTgWk9TDnjW2",
  "key21": "2mu5a9GzhtEHkDhuryLSCzCqbzNjFVN18uw6dCucebPR3tBtVojoh1RVqyBMVRQTbwXR9Y5CevF6Fbf6eXdwfxmg",
  "key22": "2W2hGQbjg81a3prGbLpzgVvfFczUis2r2dA4GtaUwd41nriq4aSAqxnML2LQZGeREcicdwtCQYZng1HnWZc1dWji",
  "key23": "3MBpnsH9oXGJGo67H3Hd4uGSaP6iunFkc6uaiDvmQRyaTxY8ZbGHBfMNE17aafZ8rTg8Xkqh6evkk6mCQUfV5oFr",
  "key24": "2GVCjNApCNqexEdb8TjwDzEymPiEdDCZS72Uajq56RqZtJL1yvzcBW2V4hvfFAHgMERQdFRewZbpnFheURVNTh66"
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
