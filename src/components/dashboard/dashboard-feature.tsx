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
    "QUNbTzmTpiEwFTcjhPGPcqe2KZ12RuXLYRSCfjE3XonmtE7hwWAMw2bBztm6pzErkiFgPo3Xr7x424XdfVUK1Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LdqRgBsXWZieWNcb3Fjn5BXD5ezVYifpmxNrg1PB5iT4A1yt75nQ7nMJXdDJH8BTkfLAXfSQwvviQaDKFVpcq4",
  "key1": "5MjQRVYAWLXr7ijZjF4TbyfjX184AEH8fZxv2wgQAxzUqhG2P37iJJoBrXYUG7Gtx5NHxHqB7rDgodEiRGZ3JV1v",
  "key2": "oaTUrrehGkJXPzFWzXsZ3Bvq1EfjVzvhdSm3kuayzsw3srYfHQLwcTAyUqPriwmzKpTXC6qKWJxfVRfp3pLxnPj",
  "key3": "ftWxeTYrGpcg4UqrTMjfnCKguvuPYaGvrBdmQpwE6hw159ffiRbomhjyFhFNjZ4Ky6cpdztBS326CJXtLbBx66m",
  "key4": "4qwCnHzRcT9uz2t7FpaVDMCJTquGRWj6d7b1epgrriGV3VNJdeTDmF4HxL7C2HvQYebL3WjWwg8yR1zK4Fu6mvRS",
  "key5": "3aALPRuHppQjpQ4VJRpRy3bXoMe9sdHAXpm5iiSgzfqmMybMjrqo13nWnuCF4vQPDF8AeEE6mpP7MmsrrprHH7XF",
  "key6": "2KFVynNsgGp7E8c6aot5jW8WFBDGhKYoGo4a1nLj5DezC5R6LdEAozVrUpxdJmQeHztmhj8xTRsM8MEzb8G7vDAL",
  "key7": "3PT9Wz7CZ4Uvi64HauGr8FTkrW5etXYPXUFYSMhybZGVz74mytchcD4nSsK1ZKxJfbQZQdF2bVqru8rqXjGLfSEa",
  "key8": "3rfLLcBHmcxo5AY3TpEeEz1eJWDeqwyQKe3jGp8TWAbgrrD9FrzKj3yo2q3PB5FcR3dFuVzqKgcYvAymA8zZuw8F",
  "key9": "65EmNybCQUm3bvmpNFFLYABBAMWM2h9pYeB3Fhc18tLAChwj8RjfkrLjp11FTktNPXDfXqVNQnam7fcGAhviU5ed",
  "key10": "3eY26FwE2tddeECLc8MYmrhDsCoasB8zDesitbMQz4Yar8uJH218KL5V2VT1n5KgjiW12h4dsCkCpgP6fCBfKeMP",
  "key11": "3F56fKRiSWfJ1jCeeDzVtLLA3JcqJouLkuAshXfw8SZi1vRimb9NZg5EKrYDuaU9n7mmTzqbssfYo94CnJ2qicV8",
  "key12": "XyPibLQjMq9PdGijKbo8ZHcWvz4yyh7RHnDQw1msD1TnccQQUydiqPKTE32KX3ioyaaAopWpCt3SKmuTFdNzh8k",
  "key13": "5AX74F8TniW7KpgRkwtk3NsWcz4BENe8CjnBTnxhjBYZfmVYxKmmLnLmA4Ghxujwa1DFBGSNLkabNnpb2pPrZcuK",
  "key14": "2Jm3eU3X17UCioxC3KzSUC3rtH2zbs6b4vJYEdR3dvMzfJtweJJw1zuRhoWNWoNqohuk4hrNk5Wd2LidiM9ATDwz",
  "key15": "4HtkvT5wZbanrqLbFeSeTBgdhvxq7jo47A7ueqdwjKXdnwf59ib7CibjTLKF6jSBxvX48p3A9hzEBJoWKFEAn2wj",
  "key16": "3EyhKMV7q3kBfwgN6ooEgnv1SvKrsYFu2zPjCMV5tZXoQBQMfh8wudLZP7ZvRDwyRjWAvHMpXBcq1PTh7QfTi43B",
  "key17": "3AybgMq3s8YAeb9KXs3FyNbZkSwwTd6oPdnhwFjLjtmyzxqYJjeNwCQNEyVWvm54KP5sebip3jvEzBCmWiYeNr8j",
  "key18": "66CSBPoiCU24o5n9S38EQvnSuWgSBAyt577nPLb5sPp7dk1KK7p2PVFDF2kKcFjUp4fvG54QvaNhMHs2sX96ye8p",
  "key19": "9wMgEWHPFi5i7n5StnwgJWcvsMKBQNFa9z5GprYEDLPqhrsxD3pi1jZXyXc8PZDntFdYZSaSQz6Ypyvk6ndvpWG",
  "key20": "xqrCBcmbps3vpghxThqsazbBY5G4eTaxHcLNp5DswQ4wDdPTnSnshYxwzJs3HPicjuwczq53uoYL6gdj5tGEGif",
  "key21": "4ejgezAnMzJSE5ARbvzRFHyNh8nizcNv9y1ku6GXNFwmzR6g1TboWyf8Jc4nw9xQDNDSvDC2e3kAzzuo6Jok3NSm",
  "key22": "2bR9pXKA7vKVfu9FpPhktE7GCwLBjFeNtfaeAB2Ndw4yB97TWKUwUMwZwniHU781KbfDs2DwFxEVUZX4ocboXTjV",
  "key23": "66rDP9csUBUQHFfc48yaeSGiSvjzvZjkjB9VW4AL2WH4yG9FdatZoHXojcLgLCYANr1bmTNncFfXb6Nm1zp2jt7a",
  "key24": "QirRhjvMsf8n1yzUesteGtKMiKA9WjgA5nshhp7bVnH2EXzT9LSdMH95b5jBpDEa6EDuWb1CLmMTqGLqvFfhJCz",
  "key25": "ZPKpDDkGSBn31L3SoUkbo3YC1bny8CRtaaGv68vCSdn4pYguGx79RDzGLn8qS2A9M9PSmC3y5QWhqa6cRrFWcVk",
  "key26": "ajUKbMsWYua8CKiYx82Cj2y4vaxfPf824ZhxMprwnAaxbEi8c7zA51p91yZRZEPiZcPawKiGb3NnumjqxEW1cZX",
  "key27": "2fwE9ay6wogp5vjC5pAgDV92TaRXaQeCmm5z8Gmhb7oZonvwMqtqFN6RMJ1ywjzRWzwNJ3weUwW85wtY4qSCQVYY",
  "key28": "4avhR3wKdHVUHXWqQExqFobq1Q9gpjT9QFtkvezTGMC6sb5EcNusjgwovZm7zC7cQJdaecsoxnoEmcCTRYLFYu7r",
  "key29": "4EpcdxXzwhSDcdCzt7HHCfyRsLk9sobTrNv5pGwz9HjXqhkeAiDj6NsuqrNfbTdPRSkfi8jJrzyxW8P55gkaiV4F",
  "key30": "5d6FdZJoqGoCjnayDMAjJ8ad5CQK51HYXqmvKCnazCmGLMSvVW73FvQwzReKKo1xGtijEVKPuY1A3VEQfPRbTnN"
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
