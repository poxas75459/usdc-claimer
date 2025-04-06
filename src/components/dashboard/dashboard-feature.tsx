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
    "4UtbxS3Ayu9vi3sKYoykWakpjEe4C9h7ZbY1NxXg67g4KK7M1jXWQTJxbzir391jkoyhVq789hvRfryeShFFZctF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMLZ1zqvDTsXCkmvRtHcC3B247vrv8qn9xxbmMXDBu9s1LYsZMLMCYojvv9JLhh4EktTW7vVCWpDd7gQVjPi41B",
  "key1": "5xwiW6CPrTjAj3wxPBVKvw7Qu3gwYikR3KXtHEit64eCJLSuUW41PFNyPBkkWZHzpdqfoutSVb6Ra2abCkZksdLG",
  "key2": "39kDx4KRR2hjmwuNsVYoLieZ3o7gWKRCP3wNjrFhrowmeoTbNeGq9EnLCZvVZ3tVyAzqFAj6rEFSe8EEvnTuuhGc",
  "key3": "45mMnkRJBkGB6q2bPbtVLbCyoLd7ZiPkCwY72sV8UD7NEvjxtAnF5XS79fp4qdoGZU3qGMy3qWXeBYSYZagH9yYi",
  "key4": "4jQ6cbzQkSB1CES8QeB8sKGMbwkpe7NAi62eZfXySSVQwxhXGxgfEDH3uuzkrNZAEVQXzEHBhqzEv8iEqquXmUXn",
  "key5": "9DJw7uysjwcha3LovsQVZgfHWR3zwyzLrZxrmiRaTAskSytcbVWJRS5LcmQRfWHEVDLk2z14GtjcLLDD6v7p7kz",
  "key6": "4UYUCSPZSrff2xH9z7WTZbCeEJH2M1L28x2wNKRBEoJudDSyFHThPSYM1ctAHFTaWfsKp71wwz89mhchPdD6hi5v",
  "key7": "6XpfedAMqhggvyWo95hCLZA4xAmXcHGMYJRRkHx6LxnGLJsWpUFzDnSPHTaAe2gJvVM1RXMAqec7Ltvux1HfrKR",
  "key8": "5uo8dwvxFiJHad9YoCV748FLuYPfaUD8ugyCoWM1uKZMdKqXwn6bpbT2bAifKrFd4tCzen8tL7V4fjT9ynEHaTfH",
  "key9": "4xBPT6yzaPMRBzkjUkNyfFcjZrnuQLDf6hxmcPhtQmA3cbG346Ktz4rTAgwuVQU4RfRxsTR6FDmpwAmN54BhQ9V8",
  "key10": "nk1MnBSx6D6ihVEAUXMarZbUeG5dUU8DfJKPgw4ZtftnhAunEV4kY3vcAHinxRWYENXt1cZZcxChJZCyymCftn9",
  "key11": "3qdTtnpe3Udscfs6nYuwfZ4jYiHaPpNAtiZZpwzTXgNa5RXSsUctLBBqN2V5PVR6Js5C4tFTrkfZHNpnbPrnPFv9",
  "key12": "4aTXAXKWknzTaBvdjNMQxFJUmLpoQomLHmUDGeA1AxNc6z2NPaqG6cRPseqmCo6JTdcUUQW4PFEm99Y3wqQdN5R7",
  "key13": "3vDMduN2bTvRXEQ7Ws5VGKHS1LMCjrz5mtgQUwGicbTcnwYWetUP8XWWtdQH8mZGzWPe6xBHPkEMdT7S9feBokbm",
  "key14": "25TSy3NZPD7dx76jiVNo6RBuK7eSSMJMpueaSUzXV8gJaLkLdQFxdwAKZETaZvGHpWX9XEnmzbEH3KsSmxZxFZJU",
  "key15": "5oN7Gj5qqWyVr6EbrQPiChcZD1x1Tswzuj7KFCEhZwMG2FEeDRZkPviwDNCtWPLwdqRCZy9SW8TBDc6LvAgUgdL4",
  "key16": "4xdGwCCknDNZUx2vEjoGHVe72vaFVEb4NNSjNvtJvu6rFxYfTmsReQT6z75pccJS7XF8JeDCqEX6ZD8YeidYB7ic",
  "key17": "4SVwTQm1YUt8ibxWEWL4MUeDHqLoFdKWsjMXuaS6p57NXq6VaGvYEoN3UMnKZghozERyHWDuvN2eqy2rZKvnnyGR",
  "key18": "3rffUHgbekV5qxvKDcA4jw2SYTN8QUDsE42vy72H1H3Ed2rcFkSJT4v4u1Kc7Z6KeC8ctbU5VLC6Vx4ojeUzNmVP",
  "key19": "S2wYDySjSUmV6WgMogBdJoRpp9f5TMYLTG5dbGMseGWxNE9NXEhtnZ5iJUHYQXUEGxdtAizhY7UqkWEPitg8H3K",
  "key20": "2dGq2p5unFH2k8JnKfEZytNGAVencw53WS9cci3u9dWMMhnGJRGZ9TBfgwcgPH4yH72UMpiyP4vVsYYKC1sRLozi",
  "key21": "3Pv7CpMuTArzCKagcEnnE8ALmaim1wqTYTm9W52rRAkJMCKZccvC68cyK3EoM7Zsdkx6xAzV3vxZLqRsoe9Swt6u",
  "key22": "3rAMRfKmQq61VSHFYqn6CpNeUPLTLa7LfMfdAR784jGEterdnXYfXFcRGvoQBtpo2TSjT5vsDxii3poNBZkyk5GE",
  "key23": "5crCGBRSrSBNrKQMJBKVvTXhPZFvgYLhhyEByi248R6mpkGJ4zkTeHNCo7x1CSYMjGXzJ2n2qNQCvXRwuufdd2j7",
  "key24": "3HQm426rd1BQTydLdeRBi5udF5FbxzTX3YLozPREdNfPKg1bYaQZPuJkwRoGvCFGnaXMcEjV6Y7dES7J3kMtTe7c",
  "key25": "3AwgxTnxfLFH9Gu3oEKL16TDLax14xiLnRhAtFtv6EcknDGjJrZJLvnPGS8UiFvvaXwsqyBGG7gEW9HKnR1dwNS8",
  "key26": "3P3e5d5aeUwfVWUQzWdramVGMJxWBGdBwejfLByHLozNeUTcETiZCutnyNLPT7d2s2XFeKsy9HubAfJ6u1DTBShq",
  "key27": "49exNgUgyU39XgG99HNBDJVbxRvcSh1nYuhD9B4FJEM7ebfWvCzkCeuW3srgXEi6QCA4F3xQH16ZWCeTWNzfzPwH",
  "key28": "3MVaYUMbpeFAKoLKncCAqXtzNqoXDXRXbHbTgajHZHAamPNhhuF2TjPjLw6tMjrSaetwZQKNjhWsieLMwW5tqR6Z",
  "key29": "4Z3fxeK8ZT67mHA5VVWwAm1E6dNVdR3URt7dXAUESYXf8cVXRYjf71upTXr9yqwKpdQTZoR7i8bpGTWbFJRqQptR",
  "key30": "4h6d5RAGVs6yqXEBc8TZ2F8o5KdKusPotDJdWGFFF8duSQQiCoFeUSWy1wDXLFmE8KYh2GFUep61cbPZMpfhErmv",
  "key31": "Xm4M5whmR7vJEpTGpT3awH8aJA6ugSZjECwxyZ5wUWz6idA8vPGp4YBKyuRBKRaJ93F2krYDRTKTFouxy3m49qo",
  "key32": "3piEzqriQoMi3g7tZNbCxBCev4mtwvsK1qoQHiZ2YS38ZsnwHt7wv7aZKdezRFdeCTn2LFzDpbGfinpgSSn93bv9",
  "key33": "2mAnXJeDjFBfwtT1fbPXwy3PBNXnYEkGDzHS1sNnNZB9kAhv2MX4b1mpt7nhpGWxZkcEiQStXp1LDputVnUMoQDF"
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
