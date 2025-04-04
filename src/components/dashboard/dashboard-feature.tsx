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
    "2veX9bm6vdKjUUZVcW8iTUodd9HVCyG3JzJBWgLDyDKKDU2AqbWZpifQkKntBoeEQUEJhNBAYW7LsPqFTgjPY8r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GH47PKXrABU3txbbZ1bDB7LLH3B8fzwJAYADt48BeWnuFPNrstDwpu2mL8gGoYeR999QRT8t5jrzAT4UuwnvYQu",
  "key1": "3U4jccjYFNeHGe6pHaD59jt5jwsUPiu2FpX9R6zkQym8uvdZ5cqGFo48ymXwaeWhuDB6PYMGmbX2Y7Sg9RG3dF6g",
  "key2": "5ocCxv6hA8mkESFqXkBKifqUMPiV1LopvfNs5FWNfLMer6zYg8WDf5ULk4ooTNcyNdJ2Dp4JPxEQWjnrF5AbXmez",
  "key3": "5YcioYjDYVL9D3TeQ2Ed3BbKAAQ3nGk8pqzJJbpZ2tKDtWgFfDiPGqA7Fd8v6UaS8YVykbbvovKiPmyCz5ziVLWb",
  "key4": "5gTUUbHo92uEX32bte5eUupq9hpxWp9xUsjBUmTyRwrRSFKzMWQJ4KRG9DF5V89XR4rTCJbi9NKbbNy92svLzYGE",
  "key5": "5AMtYV4S9H1zuVWWWKEmWWbMSw9MY7u9m62MKUEYt9oemxi5kSnCTKvqrsSUPty4vLEPf98sy7LMtUFnpoaQSm4J",
  "key6": "3RwZjHLiKAGwwVvnSJ9TEDUuf5JS7BkST49e2LJnVzrkiH1bBuRAJpkws2JJux8PxRxrmNyMwBNEWctN1dfThhYc",
  "key7": "47kQ821R5qzf2rsntaxH3sUXUGdXUm8kjFmYQsKSTHfk2SpPdWAkwJ6aKm6E11xB79JNvpDkbFQhPv3SSavxQ98C",
  "key8": "5qmfYdfryEXY483MKFghss6eapcUKKHvbyKhfQLMxa87RU563cjsrGjqjkRqrm3Zfu9SDkqJ8zgzoRiiKKFqARxq",
  "key9": "55acXpPP53BVwcWsSYhNtsHYwczX8sMZEX2mFqx6RkFUD9wL2x5MpEEznGS6nTqftKewM7bUerAL4imrDqY4WmPd",
  "key10": "4WQn85FKcS8hsz7EsRV3JQPcFLT1JmnvCNLLrKTN5i6u4LXkv4rn9MhrY6b51ngCSLpbBvvAWt8zRsryhP4dLZvC",
  "key11": "3bXdZxAcs4vcod8NKmjEm1LrqhExrXc9byLrW8nkdtTEiY25qhshtkhUJi8k2B3fCPRwUSii8PfdnqhzPtJE343N",
  "key12": "5e6T9QEqHSX7jCgU1BnDmC3ZAaZZgAVvdHBsdB1KZdDm1t6RgFtNcb6XEncK19GwpAH6abSsCQmXrasEc5Dn9t8v",
  "key13": "4xxn8cfwvitpWFPZws51urQkuqwKbDXuDCVrWwLuaq551ZVWSZoYS4EKZpR3TT4Sq74zzVbAKXYQQBKLuP3zs8Uj",
  "key14": "2g48mijCZ3L9D1h7YmGTubvP7ob9Eh9UkB2S1G3LA2PYxgxV5i2buNJ6TDYdXyVh672d4Xqreorbw3Bj7DYxTRj1",
  "key15": "5U4gyiLnNFiRtkRQY6NqRVTM31rV3ygWsAf625WLyVWHq34neyxBfbJeEmGC5rciG2fZdhQYGjTPRfcPcC3VJJBT",
  "key16": "2gpWB4BBBc3nxjSbRcibGikE5naVeZM4kXQL8T3rPWM78mrTcdcNwaU2B7zJeyAu7jRqrcmpfhNxxXoDHSArcg6i",
  "key17": "4Ld5VWuUnTbp8RkzmQ2JncRYhQ4PPqtAL8FZmLaks6PVk732d2oGXKgJ4G1ZPQnx7vsqv82pvbEtPajE3xDUdt8t",
  "key18": "PsV4eAhhEHhj4hT3w23R95ZrfkbtiUi4tThKWUftd3nhkXnTR6PseLiZrfuPxx7HHti4Mer7ayqFp2VT8prLsLE",
  "key19": "5quAZxDQT3caErZkntoQRcntcvBXhXVvFkrhFg2Sq7wG5v4C1Eu1HyppSJGVcAeWFbVoaFEG6kZcYxwyiw233s1F",
  "key20": "KMf2BZ8ZCwHNFVV1oT4Zno2goMNfMdqzD8PnXhWXcgiwwNptktGTDNWaTSWVo8M8LKn6Es7bwQXNnYxMV2nUxkB",
  "key21": "2f6RdLHTzAmdGBEN5KHr8yz8D8ANouBoC2eyiaUCPChTDo8X7tz4NzT8nKGfvcBAbzxmqrhJsdwji4iBa9wgyPUg",
  "key22": "3gEvTma9sPA7N8X4JGFqYrJDVmJH2shPXmKUW5h9686SoAFpxn3eXXYeFHfAhviDeQKDpN3aQYidNW2888T8QoE1",
  "key23": "2XEAk131pJz7q8jVsu6qTcayit3CBWK7nWNWQxQn7hs6vs1huKA2hKRGT8Ld4NCqwWGn6UamiEgEsdNfARUL4pk",
  "key24": "4akLGJ4XtuyineKsQ6nimTXSMS4WmT1NGZf7czzUzSXkzY6EVQsnb892LSgnDYdnV1n4dHiq9AbJ1usViJSfhUdH",
  "key25": "4BGdaN1BWa2UcNTbEhP87CLo9JG8EKHwe7pVzMXvBvLbCyzjkKZDjm5sih7ix3wsnZZTeMzencmkwdtVUASAsXxK"
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
