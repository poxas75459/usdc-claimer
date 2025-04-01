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
    "2syoBG5UTxnwzKwvL4Ct4hbpXkcvhxcTphTPY6PNRAdtXE1RAi7NR6iHQEDjBHC5uSmnZswHffRw3fsJqPqUVP2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPk2xnr5hEQAsAYYKYLzAL786HGqAsWWgQGEPycVbxV6wg5n4xKPkHU7SrE3reBVDXPHQPLyaF55rWCkAiRSEaa",
  "key1": "37L9iKgDYYGHZXkh9MkFjqmtkAD2GQ5SjGw6Symxuj4SwZjMnQYtvnJ58oj4gyP7BEdkBvqRficynDS82gfiSoMk",
  "key2": "3E1AhDPwL5AR5sYA4rjNJacm1kd3AQ16koDZDsJdBk91w5UBGK247dqdSmearcEBhNxwz7aYg3frMwJeHhrhcMAp",
  "key3": "3ThsqguqxP8cX8aftR6XRJgkUNvvAgc8jkHU7Msbmg6rgyXaSwPxrcKsmWvgRRa7BQTyB3v2zX8CBHy5Q9ydfkHB",
  "key4": "VUAnZLjVW73zVUzVuYZUC1kzc4SePotRdMdgfwr5DoaJtpDSqnMtu8crVdPBwEZndJtX9N3uLgNxXvn8LzMERrB",
  "key5": "3mqoU2fksaHEeMAfTRXXrUVRTY4SYx4rqEJVxbRHvUktmTrTdNu7kWtz7BSHPyKZDbuqnVmCNEAbBX4dcSWxxhTX",
  "key6": "2VX5k5LNTzhd3gcniG9XE2Xn9jBCJ1AnGnxgMroccskjAz8fDDE5YTsx8dZPn2JE14M7VTcDDGEt27Zy5Tx6S6Jv",
  "key7": "2sfVfkfrRaN34JUUPFhfqS8amxE1jhfiTfixN8e8tTmdgmSqE4wACtu8X6F7QmoKsKtyqWyP8pjsnV7V4ZTYPnko",
  "key8": "3H4c55j67q9F6sgfvHWCjJdijdsf9FYGLMJhZh4XmfnTMc6P9qZtpNUhMSCBTsK7yBL7mJsamiUtfpc5snDoEnCd",
  "key9": "4EqaQiWVUgH5RoqKe74Dq3UKw5TmF9ikoHkrtsVMGe6V4vqfWg2rNVrA8cwa5XL4eypaAfD8o2kGaCPrqeF7weQ6",
  "key10": "4RtvYZDfaGndC9VapMMUizvH6qz1eqK6pRmxzmLNwkYifwF5ohm25hc99Za3wCe7z3jomKpwkKp59V1oKQspAjne",
  "key11": "5onBkFNp2M5LQFBaKbtShAacJBWkazAQvfndsXTQH72ccA86mu1GYjVqeq7A5DpAfDLNiAMU8stGYG3W9gCbqtHf",
  "key12": "3HAdTTFSqRhTd6jLceAFWBAgjo221SvAQEcu9nY9dfWyRTQjWJ6Y3jTVvQFWULL8VpHtu92u57c78GDngCZbiNA6",
  "key13": "3BrEyUGyGuuuxZ7S34ZzwjKWynfQi5y7uuTgEcNWA9KcFHbAfc1mKZdghirws4rotRwQFwgDTwA4xWRsTYTFwgkk",
  "key14": "RcQgRPFcCpyi7CpRuCzPwNgwQPmU6PaBnFkxRfzYufkT2Vhbz5Lsz8SJ5r7AQuf1vcCNyGsDuGJcpUfHHec3NR6",
  "key15": "5eaaEYL2Ap3n9pndD6PjZVT3nMWbLF1vMoHCGsXY6kNwAorLeax22bK13pCi7LGpzKzypvLv6u5Vqyhu3ZgdsBzh",
  "key16": "5q8Vpq9xe4pi1cuECcivY23SHYB5QwhYcSTN5qcdFzfxjeJcrz79g4qLFqGNC9xJ1WrHVzwknoY7EuEv9Fo9ifAK",
  "key17": "5ezEA25Fvg2qkEqWLmHhDMQo9xWV7bSXjc6xWGLzEY9JizNgxC5xmRieXpEByhZuzRcjuttNRS5oU9by75fZiQcM",
  "key18": "2XcMZJhEWbCeLXfCA5aC9YATbBeNQf9x6RuCL2nTf1E3vqEo7TRrfQrGp4SKFpH6PQrqPLiqrowWvRskuemTXoc2",
  "key19": "Gwv7g7P6YPueZPZHRqR6j5XpNQfite8y5dH87EyKzaPvcZky9Sk1BE5BRayxrcH9YogJVhEhpLDErPz8ommEShb",
  "key20": "5jkmNKBTDkiJHZsicHyQC2NeUPPLJK93VpuBEPkb9rMTEPzuRsjb16F67gZRSDCt5pFgHHyidRZHvU4Lj1dcFV3C",
  "key21": "4jA56Ta5fXhfWMAXzVT3wesyhSx1VovsMyuRAbkmTVbvPHsBPnpGzCShWgqAVDL81wF6ZVwtNPUZrSpPLkkztrDP",
  "key22": "2wtfaucy4aHCyrHfewnMUqJu8kmziJ9kFazvMtHmSwP89gnsM7kceJuMJp8XNbKYBctTbJ1hoPrvnsmd8toLbdg3",
  "key23": "4ZKymR6k5GCZjUy2piLqJb14YrV4Rb6GWKABf7Kk1pksHouDHhvFj75KgYuKwcBDXKMsPZpuj9zMfLpEXxsdU1Pr",
  "key24": "3KesHiMHopS6sKagVsSKighhWdb5JLSoZQJSYJShgudFXjfVrvb3CegPkk9QkGWZxNomAyUzhmK4yU3BUkQu3k1v"
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
