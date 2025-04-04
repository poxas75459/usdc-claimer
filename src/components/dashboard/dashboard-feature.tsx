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
    "4UfNjyRmZFdFrHNFTN9vqWCPW5qpvrggQGmHXShksu8RNViKnrm5NA7WmK537BzqTLJMSD1zUt3kDs7wrND3GN53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JbwyyM6UNfXNfK1x7LGhVkHxMiZPhw3BowqXuDd2wp17NnftZrXsZzo9eymEPyuBYcQstFLrKjLqFZiqZmK3vES",
  "key1": "4hgAibbEcEdzNgbN4KC8yERE4UPhNjYxGmQAhcntkYYc8jPEZdTqtxMKbB8xnnijECfjS84ZsKU1CuQ4U56qLLhK",
  "key2": "3kXTFNmHJdpM6ERRAeQwBWvgJLiNBvKrQsUF5eiZ3A9WyKr849jf4xWXSgDpEXUDNireUspmsMx3PsCcpZtRaFg4",
  "key3": "4jt7S617mVv9L7yCGb16XA4qxaQeN9ZNyB5T7veZezaxJoWBSW8LtYLaGnefyZa1a5NAZxNsaqPVeep1hPDatmYm",
  "key4": "3L7wcbyJL1f9dzPbUg2GnrzEjyncdmxzBJkczeqSV9mK2zpT8UuunNUUJBxT4r3z6uWbepTEjEETRct1apjpWw7U",
  "key5": "BfCbTfZgeFkwPdGHyfX1Q5cRLyRkxihCt5R3q8Bqb3hSXTnNfK9nG1F6nj4HGh2GSXmcXR4McowknQWFo5G7nc5",
  "key6": "ukiGPcfNJyr3dsF7HTF5oDgmEFbFYGuZNnz68k3qHFExcAiCqeB4VnMZwpDciyyM3um699DZPkMYmpHmvdXeqa7",
  "key7": "3mXCy5M7wpy3fNEb3q6X9At8WhEWp12kMYRifPC6U8Pr58B7x6GDwJx16iD2Yr78e2czFX8g9v9JzEZQvy6EPL1P",
  "key8": "9Vxys6pTgSVvziLy9R2EHF9QS9MqTNWGX2aiogvpVmKuSreJheYkvAsdwWTgFMFJ83KjZ3hmprebtouNGHfPxXU",
  "key9": "4kkdEhHdC1PFtYEDuoZyheV91mYnFaRtrdCroMnebNsmwiaYoMDf3pQyGDNYJeiWjMFFnEacn1z6Ksw5ZBikVR9j",
  "key10": "3Sibj3YSyNRG2XmHiyScjpHmKAyZXrvs16kxxzmXshKEHCna7qn4inAmigRjJky3wj6k1VAv2MZY6Dq7EB8dqZSW",
  "key11": "2M3oojGoqc7k8CHCPtCaBfJgZKDy7C7BQpWMBjcpcMwpGvWe48YFPQ36mFZnZKnHsnsB1Ex51E927koTEa3eGSs7",
  "key12": "mKLjWrqsofod3HXBwnwEcvKYikpUtah1m2rVr1qvndiFKkgEg4nW5LuCkWg6pR2QAvV1Dgt993HGGwMusKcVHt1",
  "key13": "5cm6pVipMpCS9RsLR84q3XU8krRjNVcH2eK9NtDjSNk6DuvLjBANojbwqECZQcxG49HEF7k3qSqYKn9usg7mpD9Q",
  "key14": "3tSSRN6YWg3xY1xq7LvD7ifGp1kwjt8wDJB4jZp3L9zmjdNmCXQHWDyvNJ1d2VXKNEfJPeTqpccRPRAWBeRUribA",
  "key15": "4oHbrFV9og9on81yexHSNWXTJ3KUQ91kU7vA6CNepAEbB99D95SHsS1vwPxBPhhRZxQUbQYYGFm6n71C6cx1yeti",
  "key16": "3suB4Xc3ijmfmwkZ3wnkQDtCphqiPNcPf4KV7nj1SAfQpcDzgjgQt9bkARqcvwtwptzDfdogNj2BiWYiXZto21dR",
  "key17": "5yAS2NTGN6EXGeAYyKLgfWUyKgoHRQTa4d99c98GWBYTLPLjddeyje1N8RKLeTnYeo5XYHBw6oKqkHCM79Bw6tR6",
  "key18": "2Y6viSBH4WXBqtzsEJdziUydwy7C465RX1hS2wbmmP2KmFAJY8e32KrSXubTc2jUkhaZ7et1RHCmWM41dttukYpY",
  "key19": "2N2QKivvLzedF5TKYMA6j1qyWktJwc6fxSpFfArJB4Y2kmyYfesxTCiCSZFogg7wmgeG9TMPYNCQFQh5NJRZVuXt",
  "key20": "23wtx31qSHvTdNQVJdbeqozxLdKi8yFrgqS14XVJtWzjpmJSZn3Qvp5kZUwU9ijfY7t5wmTjdFAWC5BdqX29C6de",
  "key21": "4Z5AXoBvKw1YDnScjHjVXXqAh9UvtmvDNQHC6t3FLXrpJ1bmzXQRXWiUFNNUZQCtR12oS4dDaP4SBFd1gxAdqo7Y",
  "key22": "4tf6eytVK9mg8jZWFpuCvCr6jo3rukmGFJab583qUg2tJCWKb2Wuns1zEUFRppwN7r4oj9ojdi8oRkeXyAyWRRiH",
  "key23": "4bEWar5jB2qNXUjXLVUb1rV9EEkN5U82VkTst3Uc5Qjmpq9Lowpnq5cZQQBhMxaE4opDsgQf2Qhy4yrNAyLpUZS1",
  "key24": "4c6jUz6sXi5f9JCyEFasF1GF3vcXtvVzd16c1jhw6miPi6UGzz4Dks9AzPEgoo2L4AE6jPDxU9JkgCUhcH7kyUrq",
  "key25": "gQjPTcUHSYi86bus9ihxY6BMTtxBEbUwUEihUGHPy3Jvf2MEe3CAuasCYp7AgP7tgV4sqX24mts82XPS3ctCXUv",
  "key26": "4NvnYUoCNRekTah6RyhvjLLuPoxEd86t5MK4QmfSHfYarpV5TyjxLGzBgERep2D6czaxBiAiZ1SyhYr4bnVUEAxU"
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
