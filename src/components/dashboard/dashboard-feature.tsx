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
    "5kJPg4unzJU8X21NNwwQXa4HKxMQiYYyQktr92ZjWT9uRZawry3dVYQgJY9A4nyJ9UnPSMVjFSQGMXFMDFvfcCA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scKwKFaQ11GH45nztV8oZqH3mia3hEubDychbwpYaj81d2155iGUsCbVmuHXkj2bDijSg5WqztvUZ13bTK9mCTd",
  "key1": "5jy9xCCDYST8HwUziXdoktFkPDSdFUEK7C2cC6uakGTfmRipymTJooNK2eFFM74mV1DMYT16oAonWBK4Gbpa4u4Q",
  "key2": "4nwJTJicdHgDruBcdf4MDvH9ShUGXCzndYzpiG3Xj3XfwgeVNfZEL6qi9WyPh8toXALanFMrxQHKq9eQnNHqHbDz",
  "key3": "4ARmpGXkvkxE1JjTtShJz9r6mYM6q8YueUw7UxEYusdvD4EXcJQozP5KTZhK3hsYxBYPe4bHjGnzHatsorifKXac",
  "key4": "3fHW4Up4WKdgNtbWdgsvKcLsNTdfZtcvSqGt3XrUCBvQFRgysVdFrASAXdbEDDfkP4YieYt57zzeMyGYHhqH1YQZ",
  "key5": "5EMUWfsSauJj9cZ93Bem5r7dGPgnaN5zbCoqNdSAK7eQ6RGXeXjr2aCtPfoqTx9wm1CdGRzcKoqtPq8Gfpm24wTH",
  "key6": "4hRy3Lr4s5XsYXeUCoQCA9CAnZQJBU4ZSb34kz63tg94zWvPMAtXSK6dy6RsmfUYa4o6hsFbH3fYjPsXCBULDtjg",
  "key7": "3tKreQx8JjrTrwUNjjgG1Yq9oyAMoiG3KHPvm9dkuiJdTh5ZQkPt6dj74KKwDwz52PeYX9NwMKSpmsDCnKXzZkhJ",
  "key8": "4mRzN4PqeZcmuhJeSRNQwEWVMd9pL1bzchSFNiznRwsiL5epLN85YKTZcgH8miYeh8DwBrwJizfULV925jZcMbeX",
  "key9": "4aadTdEcMKfHa3vj6tfnFW3Eqp95G8YXaeanrcTMqzTczLMqNBmhXb4ohT3EQmYxc1mSAwmPEJMyyP2q3fCFWVyF",
  "key10": "288B114JPcN2bne16PXEUxdMQTkSjg1fZXpes4H8Hp3vLR5KZ5yNFqgFUTMdoMvLckBsw6qaAfkFNyNroNa1LWC8",
  "key11": "2p1QMn5PdgACxYrEDzQXqGpAspS8VDKWQNZwotDpWA8ZvFzmYf6iD9EtjHQ1FtxGQL538QChzsnHnkUbYr1d5Vs5",
  "key12": "2ThKQ1QvTSRSNXy8xggy9ic9hMLQCXKFGcdFu4jr6k1C7gsXXfAxgtKUaET9ACqpPNGsXAgdhyT5RCwb3GJbgWxv",
  "key13": "XWpAMNswSbiTdWM2ty5qB7D3YGEeWSsA3dtvAu4hEjBockBjpWVHXVbxA4Jx217jiEaijNQhU12AbUn2ABrbFJB",
  "key14": "22EzKA82EzUMZGCy3WzazR37ApEVroxwumqvGXVer7KTv219a9a4BfjN5BadF46nwDGFfv52CSTHgcPXaodvFNW4",
  "key15": "5CypuyawjnQ1SeTnYFr5ARaXrEb1WbPjaPW2RtytRmvcHLvryzVgR1eFS391Gz7CaCMcMMaWSQAb6UgcUin4zLJU",
  "key16": "2CGHpMVCjgJqvVQKeAm3A59bdkps8BN1n7Cd4EkD66S5XC8oEqHHiHrqJbSmQDZT8EzFmrr7wWQn1cwJybyKVMVh",
  "key17": "4nFbPE798CguBhHE58EfzcsxCvKg8ovM16YSr7ZyornNyDobtFhJujKKZ5BAX4huqueTwkySwJd4YCwSJTa5YNgo",
  "key18": "SZo3eLP7iJSs4PuYXzSudesyq8Nb7H9sJrF7keHtCagvYcaMeTHXGELBj8nbzYCb1vXpDVa1zud2fRit1WCbxyq",
  "key19": "EuuU3UqTZvnrQiYR3n8C2VFVLrTavcEmJmxu2XgXPER2KTTj6mbAATWnAH4LU6aJctS3YN5taE2EYG4yVcJ1EAj",
  "key20": "4vznoVnfsS32QJ9GCcodbvB6ksQ6vVjPoAFs1Zk2emMa3unm1vNiwcNfiQ3FGvj1phwjgwTjx6JzqgKyoWrBw5JV",
  "key21": "81wcHYXgyAkMosUrWmr5BsViVyEmxUBVncCF9Vo3KKSwZXsYsqAT85BEoiYFpZ1PDCCiLrkptLXtuPzhLhXVhSL",
  "key22": "9baKk2aqB2UZ16DPUhz1noWrqNgA47WSugkBemjRDvjh3wL8q2FJdwe2N9es4xPgTu1oStesaxyKvG8wMetHEPT",
  "key23": "4z5W88aRPeHNv9oReiUeBUFHxcfcVRQyshaEGCfHy9YgDPjg7DKHzEwUaeKUMGTCPNMofrG4rGpp2FUPu8x2RWcS",
  "key24": "2hiuQYPwnnFMyvvLrgN6eoJYtHPguzY4LsKfBxtEZUMNFvWrR7fmtcGpky7e6nNBeW6frjRo1ujFahYKmaqbex1V",
  "key25": "5AfRhvycbESqZpdy8R1UdVSqxhdwEjYVdwAqgfqNafx3z8RvAhFEegB4icxLKmx4rjsnGoqm1rAfhtz9eqbdXzCV",
  "key26": "VQZGyqCzhMQxZFxeNH5QHjRmA89PjYMQwtDfjmiGz8LUNPhxvZfVwzK3qXAA58nPeYWiR6VisVzDVca2ngr4xMJ",
  "key27": "2VnWYmroe9i2cFbqTNo9eXZx3SVc4sTfdCT7z99qJyyAV1FVbTxjkuWpwSb1fpzjimSaaHe25vcuiBPxVNtiECGy",
  "key28": "5kWMf2BzpM36URe2VQ7fHmxsChh1snNzHvqFmqVYpSDQ9vMZEK4cjcE2knUYDBsqXYc1bvNJTJ4TATEQu6a6EXMj",
  "key29": "2btw2QUsNeuu5ii3u8FEUmPLhCGLArbTnBh5Tqe5GqB65nLq9xQidunNjiWt1VbHRPEYy6yejY9Kv4LHyQQBZJGn",
  "key30": "1xPUikWhf3xKbfPrwzkok1umF8X6JfjQQufvcvqyMRv2fYPeAYb2vJSKrB9ChdyDAzrKUB4J9Z9emtS24ESPMLt",
  "key31": "5whQE6DMCEMDhrgMCGXc9djm31dYuCwoQX6y8QnZ2B3KTFWdW1L34sHUgMp9qrMtqDSSkhQrnHCN6ee1yjgU99bB",
  "key32": "4S2y3eQGgH1WAk2CN7MTRpqBbuBucC2AF6Hhr7SSmjv4iAuJqXwAKB3Sq7gEYKxkLQAJBvLyAXfia49FAxqiZErk",
  "key33": "4MzTTUgFW7xTZEM5uLa894ax3AtjqmEkvKLV9n3Yy8Lt7sq4ukxU9gAhHk87hdkihF6gkAdx695QV2bRK5NUGfGy",
  "key34": "5VfGRaH72tqKhLmkKf62XoBHP7c4W9ND3Zq3eDn7NFiSbuxthnFbyq6oNkWVEtfRaSiUk4jvMqitjjZeRLQzauRk",
  "key35": "23eo1Ebe22Eif4kdsA5yKmU8ruXbcP5s37K7yCkTg2igEveWVUwLUQJsU7zGq7kd3vkrNmJzhzsBmsUmRzRi7RwZ",
  "key36": "5ZJHXCy7M5SXVRwC6MAgKztoWSHsETBXC51g8cenEZYM99otMpSj3rkVz3vW5swALbiACEQhGAKvznUFycFWHWHx"
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
