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
    "2rW8NJXYiK8EXLrpp9oaQtsviPFskMGtKFsiHJxs5kBdPocWeWh343GnqHCzPfxWhfEpj1eTjgz7aGxxfw4mWDt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WS2ErUEaVetWZKziRySZLVuGcnymCmFuKLecEwTBsmEkZn5a7eraGymNftugoJpu5QBm2a8RuZcqaZAeecEWzNa",
  "key1": "53SYy5FuaBg5JsdKfu6goRDbXLhvz9AeVvfpZs1XPWTtm9cAS2R6YrKwj4Eqf9cNTur6poDJpLgJw6UBGrvUsobG",
  "key2": "VAmNZRuchMiMXz1ULMkzEL88zWRA6ad98Jbdm8d7c6TpRVcXwGw9CGTfR7AKv83DoDLb5Hk5zRveNYRL7Q134s7",
  "key3": "2trQZzdu2AvPBN1tr9b42tkWm99DiSXigS2MStpkJSvn2u8HSaufPpeo5qNuKPHYdwxWG9ocYpeVi3awxHDKnz32",
  "key4": "WuS8d8cyAqaEosgSJ2LyUebHNfC9JfdPP1q4fhxL3Fofddvu3nGabPU7MRqQWm9ZN89wp5VWCFCEeTMfGURCsYV",
  "key5": "3o8ppvTnjAeWYrgSSdVPDyN1kWap8wQuk1k5YmUhiCE4fx1S5eAhRtomViwXcnRAXob7aScTokJdM6YcXWyScACf",
  "key6": "4PRobKAEGDzBxPPbJua1Y2cero5mYc1YH9XsYeEEBELnLrYsVNk9nbgaMYTjkxJSi2Axaaexu5WscVmqXcqYMwnP",
  "key7": "2N39rnQbTnSpFU1TLyixvksnRkJRBDPAU2tWkPckEVXhccUXmHvyruM4WRLWQpjy9G24EPhmWhKfArbKHRu4KhdS",
  "key8": "5iVQir28oRej7upXTChGrKarzP7c4RiiyS7FPinaBhsDK1AjwdmS7nmJPFPQ7yjAxE38sfAY91k3srDbu295bmSJ",
  "key9": "2fC9LmaSrbi9Qayo4NENJsWPPvbzscbvuLzyfg7L6aYuRHacwVk54VHNhE8f9TsqQfL5eAqF7r167c6mnqX3PPP6",
  "key10": "3fmW9321nGXcFPgZW5rgQGhr4jbVxM489Mya2AWtpCYjBgYPi51Myokxkef5GCHj1Xzaso5QQBsa2bB8h4aJkupD",
  "key11": "Lwod3FSUGfQH9LyWdSajY6RgiPXejRqpJPZKCQhsXARuwsSGpjCeuBVpRBekfzZoAUoZzxgAGvHdoSYANyfMEnL",
  "key12": "3pJbYmNn5cNou25NtoobUL66JfSErVdhaK6mKVFEYuJvYwu9t3YFQxoAFbYBpdZpxiD6F47cotwrr44fAKXUs3ZU",
  "key13": "2u2BJ5TSu6tM3Gpavr1WEVa8fymFzfKVjG7GU8dVeQZNEHqdsyfR5PE9vijrGXtzWdG6xA9X63SkHRTQBUcFEuJ9",
  "key14": "2LYz6kKozQsgF3A4zjRDbCkgyM7YJaN2hdcw6wNThDndrbvoWKtUFAFUqRF6P4m1xtGFS5Pbnm4AWVdPTLKRB7Sb",
  "key15": "cu9PVv2bUARKCeiBqphkMbcfBLbfbKSFfzF5kwbeACfMPLzqsiRrz5ueXADVH22JgDUDvDXmcQYHvaqMjGHgdXq",
  "key16": "3Dt2dVxmMWZ8kufytcegvFKn39z8sWi6d61SPTQw4r4ERft81b7xg2jChKDC7qWfxx744hQZJLFd7cSRsnzpgpMN",
  "key17": "5Q6PW7aMhxNYv9UYWMUGDKcn1mMT29mA14L6EpvYCpwizwHECyidYfsDU1mMk1uPGXyHWsjyVdUCLLDJgu7JnJqv",
  "key18": "5aihTTHS7HvKtKEMZYnZAiXoj5WWwVfi9QFH6DRNTiyNUeGPzRNgjvanPU2UwNyBEyT1xMCkSjKSFWJUzTm3cvz4",
  "key19": "b3JxhCcuTgQLChBnvadjeaK46aEZoVp16ezEJrQ4y8Uep8dFgrZgCz8ifFJKMkGa5DzWTdVWtHxRCHcGybUxG5q",
  "key20": "2QdDTiMjDyADvWNmoetSLKgcamysx8KGAKmisCbJFZTD2YFPmEXyGuht4etSvHGMYcQ6sjoUEne4sdaCAMVZusKS",
  "key21": "4Xdg9UyPzCFScovDdPzM9JidgXYK5R76Ef2XSq6cFbn8Sx6zjroyXg3vnaLYB848ADZ1nSC2eirgJS4RsLomukyp",
  "key22": "36uy4qn6Ms1o5pcvjX5fkfJ5cmPy3Bu4BRSTty1YomzYenvWuABJ8H2hkzFTVmJeGeBTKEE5CuEFMvjZHa8sQ6UZ",
  "key23": "47La1x2RbPGmpksiJam7bScYaCLW41DjSfiHu1edZawWYDSKZfJtcTc8SEk2N81B1Qd6npiUvFjN1fz6Css9sJgM",
  "key24": "y5xrWo1e1ciJTy9zMPkwTC4uWV6spPoV9YinrDdvWcnDPbUVtx4fLaAoCRaJ8DrQ7R88dbRfa4odMVzYysJ8d3o",
  "key25": "Hn3zXzjnntdmZBVjTheTUo6dGbXrD4JV2ZsTJohVFXvX1ogTB1eQPoWNBjeYY6ck7edvjftUVxgq9MmhBz9HBiD",
  "key26": "2GBkj6GJmxpGSkE5oMEw1JgkLg5bvn8JpsuUu9Vgrv51LCEtDJXPno4E9K1apTN9ifNbZXFHonoMLtjSG4Sr2Cv8",
  "key27": "4PShdCwKs4ZxsTdjmwKYiPscC8RQTNfnudmt8goCiw1yQ5KBAqEPTMPL7mFVXcQAK4c9foWaEsjqdyx2MW2tcbAd",
  "key28": "3wM1L45tnyCUtHcn2Xu6imvUAEoCLt99rFkpMkN5v3zXUiLvtWd8NzADE8WyaNJKMXGv2rFrUsiC1BibmpK3zhbF",
  "key29": "t5mWaXEAhXPTNJdpco4q9oMCX5NMuTupZRkyc5Z5i25jS57VkkUhu513rT3Jc5r4JLH7CMF76PJcoMJsW391Dt5"
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
