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
    "rXjds3kZqkVf9ixj2yTbCVdRSCjTCNBe6CxQpkksmWGkJxDEQpGLKTtdUTyUpmSU9dhXkWcqne72Q7eDHwhg1b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEhGv5DfjmtzojRUnYBd8cjTnsfbVcCdw9Z5d8C5u8XctQYfrfWQkkpXpGuJeXkTbwNVmAKSgaL6Ky2qoE6PeeD",
  "key1": "2LeCeEdqqEdHdL9FZr8UZv5SLpEM7rxqN8fxQz27zvidokYGc6oGWhfzqPviz91bEpAdPEvBSwotPfD5FxvdKJmV",
  "key2": "4kigDyWcDKyUZttPMVVcjYuAXbF3YGoXnmxcXWrzPYgQ4fLh4knQHgkdtCK2NP8M59V9g8dSRueytxYbtACDeZTn",
  "key3": "5YvWPpfbEwrjuvm5xYSCZZngrVx39z255MjR4D7HURJsxQGnJcrFuCLkBTr2s9HTK658EvCXULub6N1AqPktDoWq",
  "key4": "5674tw5VsHbNPFqfeGwN8fm2wYikCtAgQAWHZhPVUbAUoG1k24QcfpKG6tRqBernXEim6KiGEanZQYFVSinPaNyo",
  "key5": "5syvdPkh9fm8WtTsrRhvkwuH8JAZJBMpJGcJKBUcY9TaqytfWvrnLChoHbwLgqBQTm6V7P2SZvBRzvyfkBXft771",
  "key6": "3nMTJV8WCQa8tPXf57aME3mTcZZ6YNd9SfBuNN5QchmVb5VrzRosPcTC7358Lv1JqPCY6JuBTmRTUZrWXM2aSXZA",
  "key7": "2pG1ygFKWQo7K17Aduj6ArMja7QufsBwF9MuvuvKXte5JH1q3ivFKKEDmejFuBQ6QnXuEvJuxDw8ACmjxTmcNLzH",
  "key8": "2NHbcUTUo7ghJjz4MyazK8xHCnVju2eArFU66caYfLLM7raKZb8dUL6QrqtijawUiRncQ3Wmtc33fyHzr5X7N8jz",
  "key9": "5mN7VpNEc1WdHTaGJFoyvQ36erG1mSkznGup8jsZ2LQEZd5bPNpqNXg6vswGxmYPuQVepXgVxYxnDZzdwCzzAPQE",
  "key10": "cKBbpA85wof8TMwTNi3kfVsoMjktZrVoJCpmfzaWX7yU3zqTarXYakfXnme4FYDTon8C9p8vJHLde1ZwCKduaeW",
  "key11": "28Xbx3g9ogvJfojDZmYv7Q13k5RpUMsKTzp6faixtjKGs1GkGPSsJQHkLCWjZHXLQpNovFFCjsnu3kYrvg3yMGAm",
  "key12": "5nAUCJu1Sgmokfkves8gdCFpfjp51KNe3Trb2Tz9k7YqfUoLHc3wVJSo1n67G4EkEJigye4yJLwEuV5zC4M9aWN4",
  "key13": "5NKhPQuZDtB8FzmL9pgzTVEWRMP8PCPm6RcrJRHNCA3ymDFg5BvvThzZin6mRgvxZq3AWiqMp13VD2XNk229i24j",
  "key14": "5nGafxdJEwoHNsi8fRjtbKzu19YfhPQWmZvCxFALSvZdGLuPnHxYZUmgoL4NNWqGs3T7hFGc2wjKqwKBnNwN7WyV",
  "key15": "4VviivrQrkY21KJy5LjizDpJY2WtosNLrHZtgmqe5R5qkaUUZfzRzpW2yEKJ31FxQHuDSXeDkviFTcEFJajG7GuE",
  "key16": "3ukJgxY9fsC4grjKxA9VdXLTaUo7EaZLbPMxkF6GJ3froxZMWk2XjqeiVRf2vR8tzbrJzRP4Rno1pLdQYYdJUeH4",
  "key17": "aL5ZSSQ45QvAC5YfDKGE6G3aePEWWqTyL497JDJugjNV4veD5hxdkk4rmVZmHeqGgznYGufMJcPPmNiWCckkFTX",
  "key18": "4QVBSXkqM4yE84yHjnNdF9zd94DkVYifD2SZkhJeKtGzkB8cr2RYV9vZgriEAHKUMom8TfG8rUYsKdP58egAKUL4",
  "key19": "3FUHbeiCixQVJ71DjuD1CUiaY687JNkJBiDtH87CEsbo5suvysYcykERrfHfvApqMD7aKLnbx2KEzRi1AyaFyXXE",
  "key20": "rYZT8DeyPHQNpsixvUZrj4BtBJCToyujGKv4f3maKVHArRaKVcxys7jwKFc2Zs51Vt7LpL6HFYGZmt2pAdzHEDm",
  "key21": "2pKFS5s9TRuKoDMBVcK2P5xRZ7HLioNq2VPJ5a7PN97KifcVt9gLg8N6ASEWEReqw9LcvQRLVirJF2TcW8poCNat",
  "key22": "5ThunFKmHjbF1CWryybk2o2F4bhaYQ5kWH3RNS3QDWgSmLtV5kqmk4sgkwgzBJWTkp7ebkispkge6M3tY27t8Gzt",
  "key23": "4j86G3hLLhUztWDyHQn3Kp9Maiit3M4fJBFKhfdEB793mz2MVbdtyeRUGLP2Dy77zCmDEwNF7ioAWA2dhTsdVC9d",
  "key24": "cJpG8mFWshLA3yosCZsb9vyRNVrMkoswkJEP1gwx22aYWwsuxY1Fmna2cExbBjzzh7Qzd3efnDYY9b2Hd6ELmzJ",
  "key25": "3q2UfGq64LbwJ5U66iEeUimnJ1NxPG7qkCVq8AiQmBCV22RNTmh1aZ7MDf3qX43UPRSbhDExBjEZwgdoEQTWvWfz",
  "key26": "37xgZntXmUXqrsDsAqKW5nzKxPD6rFZN8iqrebhaQARj8HmzZR2G3DjFptNQTY8s9a6khKt8ZeYGB8u6ovbNsdYf",
  "key27": "2MKYagyiEJDxiKuv1Yr2nnwePjLTTfzqaUqVD9qCQ1DgWcKwZqDs1EBjwkRWwBVVhevoMp6dEkRPw2AjxPrBBair",
  "key28": "4Zu56G7iNQ1nVGr8hyAjoX1HQcwcziezpdxnfMn1qdc2nMaNT6TKgJsgQPSwTidLT18rrJXAFeG5KPRZLDz3x4q"
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
