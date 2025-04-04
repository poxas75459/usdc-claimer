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
    "46R85cB1msjbuYFo7sfame82T1kYGtNh35BnvBKTzcnjmwN9mf9FVdrQwFk7g4xjfxc3k4hsKSqfm8tCYJSyzSwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPqffKxvBR2ghecjzWar6ZHUsNdgCBqBmpe3xZXFXNuiTwCmnaheWw7zjMeQfCVevjsD62dxJQ2WX8q6eJXwtU5",
  "key1": "5sERXytXp9ULHHvBHdDjhRy1kbSYFBLYjobGvz2iTWGvc32KfsvY1Ed5Vkaz3dioq6yVCksPZxWLKi566Gz71fgS",
  "key2": "2YKD6gQ5H9MrgrESEvtJruQKxGTYCkq7WQuR4Hj4a4G7vSwwoEWfbZSnN2EHXhLB2tXnZBswxwQHGLnYcEiUdFDF",
  "key3": "3jEtGkyK1zfpNy4XDZmDtayvznVTAdv85M4bSVAME1iGzXTN2z9iAmFtFkzsMA1RUArseCNUgPzG2Qq5VjSp1X5",
  "key4": "3kNmkYNCWGe5US4YSrPrsZJQt11c3H5RtX9VkCGTfnRbR8HRBR9GhfAqi5bmTWbR5649wxrh9gRDaPSinzMK7TpS",
  "key5": "5xeHvjwiYxZRVDCRLa6xztsF8SJcYtat6r5YdeAm5J9opdn3cgFkFFWfZ89ejzrwiaLjwprHAJ9QyTnaBMi4T7ur",
  "key6": "9sbmGafMHLoQ7LuYF9LHX5BdRGp5j3bGEsJJYSpCmvYkvx49ckNY8csfPYkagrjrVtE18tNJ8Lr6CADLiFzmNCw",
  "key7": "3sYbh3TkchSrSfrctAViKZf6WWDoUGHRaoDAQ7AwhSA5xRXXAQeBuWNRYGGSP4vSKEAJEK9rc7FTEZN2wqEEe6Tn",
  "key8": "5doKB1LgQXNxyLvyzxX3sRZCShoEgferyveLZUUdzqAgti6HhCowK5gJoZNMx76jk7Hx7dZwZzSV2focQPgV2KZM",
  "key9": "54djTjbwUfM3WGpY5jCWSCApbMGqbwnF3kM5tfvpX2RmiU6zSQvZbEE33GffJp2reBB2wRpdUx36CBrsnZW9SNv7",
  "key10": "4u8aJUjs2kTkQeodH2jadBzuVtcYXXiWDDGvAvsB9FXVUJKCq11cYKnyd6MQ1bMg91xKzhAMQntPHkrFiRNzDwk6",
  "key11": "LhkudwwdGtsfYTrecTq68K287eoM8pVzUc1occ625fq9oK1mSw8F4YHByRGazLckZYJ774y54FhEGqNTSkepf37",
  "key12": "5JSvMvjh32riJ2hE41MA6c7zTjEPpkaGBYCwzkWZMh5LnUKgXymqCmpmUiQeL5PNP8kUx27bbfE5rw9WC5zkzEWr",
  "key13": "3Fu6zNoJqVJCTHsa9KaNfPmJdnep5qyryhsgWaBiXq4XPoyJMWQcm3WNtmVCpjWVx9cmA6nSe1zwtnzwgC2t3s1D",
  "key14": "5Am7eLzKYm37oLPrSFUYsGgYp1eub1KnqzVXC6eBz9GHREkGRjysnMeNH4V1qLHQAyWNohuNeFCcp8Vhu1uo9UHF",
  "key15": "3E6KKUqwW1m58zNnWqDtMegnwSoQqwkS6dayUP2GNGMfZSNWAPyxeAKDNqyx8h4qCD2QDUGQ5CVsZSC6Y3iAeNqb",
  "key16": "2idY65Jgonq14udud9Cnkz6ibFwLN7944h3D7phHpxiUMWr2W4DRKHj9Woqc3Zf96BXGCaA5JDe617kwUu4Kw8Xt",
  "key17": "5jrgJh7ANc9aZf8aga3MqnrrUbQGjsr476PRgM5LT6gBM7tvF6qqsQtHrTAkkkW9TaDf5BWW2wfR9VDaGYoFZK6e",
  "key18": "27ByGgj7gji9Dnfz3NsyWi2B1zAwWMUzNjjMqsWq6qAibTAVWFNsSCz5f4bUqugFbC9UMboSypQuW5b219rKKTym",
  "key19": "S4xx4qmeqpDamJ4bsakaCgRkcxZ6acubnqxQ8vpVxBzXsdvdL4w2LTPDZ9kZvPx2JoHgDezKmS3v44mRydudhLL",
  "key20": "5hafeWUPNfjmRLzAYtneN8szzsJkNoNus1zsNL8tjW7v5EzAuDq68fPTy7caoRpLrRZHj2B3XiyMJNpS7vUoKveJ",
  "key21": "39W1c6N2d38HJvy29dPSNLsqJj4RiamQSbTX7GSa91gAL4iTEt3gggy2XWv2SbgLAmWt1ohe6TNjYwHjPby7R5Pf",
  "key22": "ePH9m9sjG5nj8LrVPqBcD4CryUc57isxkJnvo5JTakV9pBN65PEZWPBvEBPpxY5iN4WHiWhvCsk36ESX3pQ8DrM",
  "key23": "5eVJV8mwZTWbnBZ17xF3rUtfUHK2ruZwaSRg1nhtauJnUSHTWrwNBQx6ZiKbzTimSjCXQ5QtUspWyxznnCR8cYJ7",
  "key24": "5fTNSJW8PBTaUZtfu7gcFqD8HFCusmcQZUjDHySenMDqxq95WEm5g99MkV3d66wzPBuXiMay147B2gm4Sh362Erd",
  "key25": "3WRUvRRkZABtwAW6J2hLxEueQKBZXLE4xfaxscLBsD3ft51ZBFf3nkUer1fKgk8JbYA79ykpEFxRSMbvrVRDMZUt",
  "key26": "4Ha4pFY8UeGYmX6pKHsiYKVrtWVeEVyaNQpMwzB2tERrvDJZz7ZJ8YGYWaKdc4aMWNWqdPkbfMQDHK44rQkaNErm",
  "key27": "4iyXKTpqTC9EECXBmdNWQymkwvYNwEaxUKf7hJSaU7JDYnRFXFuecXULS62Cj5r7mpp8AEUAJ9CoHxeoHCgkRLn4",
  "key28": "aGtEnDc3e7RauoCGp9AZbHSbeUbeEuGHbbodYXb75sgCksTpjfbND76SB2uiWVh8S177LrCSLypdtNANFbRpgRK",
  "key29": "51rzRkUqg6kgGkXzpVjMFgrhk3XsvDh496oGnMgh1HCSfq3KEMw9ng8fEr6DGhDue8hihBMJQ1o9j79YsHSiAZv9",
  "key30": "2hFqPeJ8HGqdSm9V9hKUvHALvkosPA8mY7PvPaVD2LUTStBK17xWfQB7KXygVYTiP2aibpNbrcRuJ1VRuQ623yiS"
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
