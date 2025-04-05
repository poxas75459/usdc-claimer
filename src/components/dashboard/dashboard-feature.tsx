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
    "31xg3VMdcoJMC7fF7uuodK74kpNZgw2sTHg9pMgPXJZLzsNo3pLUydyoCpGTMy57fZDkqwsGqr3Wzt7VTdomTMRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvFim1ggk71mg2zuHUTZQXpibBJmnMPKywvugrmayjRzA6yfXu9m3bJav5PcYRWYdWkrTivkoieL2BXi134aFKa",
  "key1": "58xk3EJiCHaGMMp5i1DGDqihFTdRxkNvExFVYcR8EGMDoi1zJsg4Pa7svaabERES7Fhqq1UGEituohEUFEmzSRmG",
  "key2": "2GZSFWrSb5GyqsV78vkkXbKjen3Pj6zULLkuPnsKLLX7M7EEvw7DKe5E2Hu6aRz3m3VVMbzkKauf9rP3xofJAEao",
  "key3": "3BWNCfsB7gzxfBDmZmgDU4ZEh62pwPmdTMATTJDEzMeJMmyirQ4brAr99rtvRAsvJ75oocUy9oE3NY9Q6mW1beiB",
  "key4": "5Ds8ZEMtARdAfTHYuyvvcDLLqXUMvkGiHThJm29QLWUoof2MRpfKRfKXQMJfTjQoW2UsqgmAVB1J9AQKUF62B4PB",
  "key5": "42iDqaLMm17PgvhdQuqVEp2bypcHBbd1F1kBhUUyiLNYTjjRc1ixNR6ntV3sw4cfEMj8fbXpqKrTyvgQqi8oDY8U",
  "key6": "64h5YRYMn2zw8vnuWA5L2F1ca7McpERjhG7VtpW4NpwEpYzoZvyZcu8qsRzdX6tzoa5xuxmF7PFaZUXaL3YZrQQf",
  "key7": "62Uke9QTMHQNqoP1TUShrTwJG3hrNkDNtgTHfKhp9DJe4h9XTQyo6sRbbvS7FW96bbH2Vyw85spXxq5ssecjKerR",
  "key8": "4ri4YxKQXzmh77sfuH8soyyFnQXDfAca34pf7mJfXuRk1DMfYYC23ym2jnWFjBUv83rs8neprUkdxEZwpqG2KxQg",
  "key9": "2bSviGCEEKpGo3nZoadyhNiPToLvh68hMqVVyUJ6DkQATzF2c3H6tEq9h86R5ESQzC3rwPFRedFWZtTNoa6YgWpx",
  "key10": "3HiTsvvFFm95EQu6gXyGJnBNt3mXpj4cTmMiCNUNSRGTisfmV6RL9ZNMNP3XFuMpXLETP8scHs7TDpAAB4z1jcrr",
  "key11": "3bhg8vnR7ncPyZELCP5HWF1xUfVZyzADR7wQ7gNs5g8Mwd1TRQJGmd9Javua1TsfqS9A4F3adoCBRFWXuNdrsrNA",
  "key12": "4sV3FKoyUkEwkUEA4v3eVHtXt5JagKaeWMbnW1a66cwRbmgbCdJA6rt3HQPjZmfR1RBLL3ikRxUGQ8uzQwrac86N",
  "key13": "58EcUWqLYuZPoTmoscbZUrGPPYyZKBkuhxFoPbn111pcwWfBWCGVJVWxPafNvnUagi5osW3T5ExpNA95Mf7HRCeg",
  "key14": "2qZJsNmjPfzhaWVbqPdqParTSfXgrFLwjx5xb2Gj3H64brCpJgpeLqGxmuK4e3V6Zt13a41VbECXgSJMbFBELLyk",
  "key15": "5Fc29JtYNMKKdU13AhDGTyygkhNnbf52R2zMLfJNH6Zp8rnMMWhkhgC6z9MVgq2Sidh6718HoSzUgdvQMRcfSwY1",
  "key16": "5ApapaZPKkaHVB8Jbi5UeVKyca6CKTawNQP5PrsEc9KXkzcMhVkC5RdwgPBZRr6cHiy1hN1WxpmebZHavM1EK4nn",
  "key17": "66e2ADR6v9udwebqVuhSVnP8cCzj2PrSR8aZp1BJQgJtEkC9PvbwdngY56UThmby1vBS6V7D8yvYy931C9CugD4G",
  "key18": "5yc7SHgr6k19kRc727moBnuNzbcgoknRBQ857ynY4a5zkiw7yNZjiaWZnDwe3ZbgBV5V6UoPTgLQQqSiJHJD49mL",
  "key19": "quF7ToWW74JUKto6AmKw9r1wPXV5mYrLYE1unhtqfwUFusSVAFUvknEg9pfALf8kHYTyT9n3s6yQy8dtYK8mBQj",
  "key20": "4df8JF1CxyBcPsB8KvkBcw8vELPEWUn9GxjdtkyAFCt4MTGqk9SpyGxnHWE2reSEVXQ2JT97JLUk8VEoPMEtaMvM",
  "key21": "M8o4sFDWTmYFYPav9MUFUG2Qy2NvQHCowHupLbLomcsJZqVqgWAx1vLU2BE6uSKamh3eYoxp6eZyGhimPtyYeWz",
  "key22": "3RKnjfk8hurA64kAxBpxy56ug1x8oTWCqdHDPnSVrx6NbiDvw3rHmEMHYUfu5SpgjLhGS5foqnGa4gZzUFj1Avag",
  "key23": "642aBGnZZEuuK9whV5h6PpWYSBZMKNmoYckm5ptfCqc5iX28RQFt47ew2vQNXdgdy5QbyV52jCBKTQoJY43J9thi",
  "key24": "4dpWGtXiN6U3snTYKvX2NnghWeLK72mPX7jFGjXmLV3erR7r79xhHpw2Rumc13fAYeEuBP9XxPf4PAHcKoctiU7r",
  "key25": "2a8fV7LV5BydrTEWoP7WnSt4hJoboEM7reMNWyJjJRHYUJ4219UGftutX8qRYJ8uRbwY4Hz3391LV1nYxR9cu9mS",
  "key26": "4SBGXmjfvmXnFGFSQpeRMdBhUB3cKeyAD7iU7JQ3RqmJ3LjXu3GvnhNXf6jf2sJLGxNfiAT8kxREqhBC7Tkig3tv",
  "key27": "nMn66kdAzyGuTY5XwqaZfRLaVZcyaxA8B5u2kvMGudQKx5TAEt4tanWw88sBQec8CuWzYT2GDKxMRiz6BE5SGqm",
  "key28": "5VBS2cUVuyNZSGuXqS9yhV9KXMuFn4SBgLFhTzM9pZyUyq5Yzsx1SqYhRCGHHCXRYLDxJzgkDYed4R18r7Zupk2w",
  "key29": "3N9jsUPknZYG4wU6h1nBybwFGggZsMetQK3m61fhwrp3kNWSJcNX4NLnLCQtAoHUHms8APGpj9cX9d41t2FkHWwY"
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
