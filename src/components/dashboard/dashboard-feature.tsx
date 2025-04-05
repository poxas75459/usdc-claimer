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
    "55jgS6pg71oSovWs8NAUu4mayYzJcrHxX98xCE8geyVc15qZjqkjxTU4GRkmpyxXkYkCDCvsfExGs5v7tpuyDADB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qs6f64BsWfjqzruW9zQJryUE2NCJ1zWHT6EAyGUtzL5rpvU5qhM7rh1GGCGw62THeokeUnMx1ytaJSiugaY36de",
  "key1": "JATXaxqhmANUNbVqZAquGHaZrEMD6JYrHT5Pp1sgVTCDrBDbuQKVuvKzjE5B3zipsnD8dMeVYWWGTsTkpg8RvMA",
  "key2": "2PzTP2gBzGuKB2YJbxM3zLdNGLkeCN5DNUPvJnZ8W5VbiZ1D8uv97VYTcdZU8f4fVsTmcPht977dedX79PSzFiKZ",
  "key3": "2hwnNj9VwiMhzUveJniXgP26GgrrvaLEXNVHMxVwKgGFompaF41HpwuWDpE59MPedVAtzYGqkkkgFkWBEh9hAJYi",
  "key4": "5GvSJJUAsumCzv1BNsd9Gin3PwxT5u5Lora2pQK5hPmwDPgZ1RGqZEnUbvunMoxMdYAeHD5JKeSieAr31TPwkk3L",
  "key5": "4m5Ud9jfFfJhG6LNuZTJ7susRZE1fWuwRTLmcL4KjGNiyJQEhSeWtZhFngycGT9JrdA1MfKfC4JPH6Wu9QC4q1sG",
  "key6": "2wVWpSJWfVunCEhnEexkFzCNDHFjHheibyA6pA9GL48X2Zp9nZfisqLBeQ6idd35gPo1coKX5hwdwu5yVNQFF5RK",
  "key7": "4umokv5ShwQN2cqo3cr9EAVg7YWUvLegY1uoyFMvJsWRNf3LNW9Gu1D2NQ7nBZnBv5RXDuvFxJw8jY38zFMstyEW",
  "key8": "2476twsuXgWxryhADd7RMfLyg6Ksk4ARszMJ98si27Eh7bSQaza5bUXiiCszs2zoarjjafp6tRbdUGt6LZWSvAV7",
  "key9": "2N73kEYga8E6oVoiqzTSf5Hjyz8igrGSrfQCexmP8fTWgiJjDacw4JBRMpY6JkRpcJ88grKnpjvYJUL5STTSsXFV",
  "key10": "58YsCA4V62NaJoKf7SGrHPJ1isgHJNKYU3KFzge9GYkJi93kCZSMDG7wxEbgmCg1bAhhAnNvQ8uFCqyVmwyS5jQ4",
  "key11": "5vBw54LwywLrgX4t2pHkhs4rnKhTUoAgCttWX1uP3Tu9Hw3iiXCZZekWrb2R9Bqnfeoxc4DCqABLYGbtgYF46bPs",
  "key12": "5M7Vzm5E4MMQiizP3JLUEu6vMndwUJ5iY8Dg7msQHxyzBz5hjLcUx1r1a7Nrfkpd3r2n3LzGLSWUgU5NkBqFJnpA",
  "key13": "4aFixVuCKJVhWKkW9tnn6PKkx1qSVp1sTJfzWCaGoh1KYkBP1qbnNPcwvcdQAushkMR1mwPrVcZMc84C8F9snHXX",
  "key14": "52WrEGzuPisWygu9HLdzZoYLMBtNe2WGDaGF8Fxa1RU3jyd7mun2ecpggwaH8jqfvbAooWUn9pTJSUVW8S2bCioq",
  "key15": "uG4eYGcz89ciLmjqCBqLTMBBYmjmUDpaqEag1XyDCbosKJQRA4qUUbdnjiY4f2sMMLnfyoVDquM87BdiYLLKRqc",
  "key16": "4V45esRqsZd6wcUUANNKec9TH7KxNNBVM9HGjKKzck7otxqLv7fLHTbsW8LYonbWNpFzhx9Gif58QbncNdiHYrZ5",
  "key17": "4xXQcDbMtaHkK4rh5fR6QArigSpwBDthj2qsgv7HMzXk2bjWXQn2QGkZnC4jUdGdePbDFbXxhDk7zw6NJbG4bsD6",
  "key18": "2UMNd4PaLpwruaSuWBTp2xneghbUZ73KQ9UWdqjd67kbi7aK72CVpDbUP2B4WWvpfqFfEMwEWnKRYb9Df9yMtp55",
  "key19": "3GMfee7uTMJ3Wn1aNymrK2rdHcHPtgYsarexUJierQYZ2b7ni5Xc4ineCmqhuQiVj9Nwagrsz5vh8WYbBSzHGfcX",
  "key20": "j6xjRkU738mFzmcnk1BnfQqd86eFLEJWD6xQMsyxP9xYKv3zKtFqXmUWjuD3RdDER11Y9WzjGH88iGMXJgkrCiU",
  "key21": "2reerwdTAfyPzwmTfHH3PTxR7d9QKk2DorpDndCSog5x2f1DCQ6JLKULmpiy92XUXAiz9ZQ26RJSZ72xuZ4PNqtm",
  "key22": "2968LUqd4gi4p51pCst6zVMmnSVnBsN1SP3xzifzdXvvZyMeYkqGbZQEaG29BdKRQhBx9S1HUtaBAHnNEKxYyYwG",
  "key23": "ZT9vGbs8GxWRbwxj3gDzeoND1RrtsND9wfT4jCJhakJ81iNKVsr57fyGEo66Ar3EosNsM5QUL8REVhhvbC9zT8e",
  "key24": "AXAmzVb55DBE4738J51YAwFGuWH6WPAeyLn8zTYi2ux7SsTM4fJhRhPrDJLC5JK52X2VSNzTjgw4bnpN5uaiYr5",
  "key25": "3izYEwJaBVvUcf5BT38YbbEao5XKBiJAoGq7fHYeTsgRwNbq66cQitCWsbPGRMeCkNZZGjdxhyJQibRnsm7ZxHWg",
  "key26": "2zAn6VHnLteZqaR1xfxnMsm6bLSxkDaxEqKZ8yfTWyUTVRHze5Y4VaRWhRG1MGBiuLDBX9PpxaZetuvyhTHdZQF8",
  "key27": "33Wz3eiS2nnp48utchzGFdL1fCQWowjEq8CzvRnRQN91nsZHExHiT21pWKHBGiF5Yi7xeC7iSUnijzChCqTPfyk6"
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
