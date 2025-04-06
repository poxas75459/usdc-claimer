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
    "5DmAfTdzpCZtEH9F7Rsq6GEEGAMKSji4NrRaveq7C18E2skyK4ixY34WsYgarB23RNmqAYDpWDP9vHNGwdd7Vpo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41S2K1pMAJ1ffkMFi6xEdUMybEGwRDxAeWTwMbVdveSqc4g8Fpw14noZhuesHUwUYJBUciv23nJEy2RgnfFg1Nr3",
  "key1": "56BoZgB7LbJ9c8w8cs1D2Y4QasmtovMVrLUJRGY3ECa4dK5NpFMMRNunKm2ZDtbSrzS7NSjh4R8BxEEXJzdiknhZ",
  "key2": "29p6cFQEVJotdUPxZLEd6FPjZhE7pPtRhjMxsRjqpeb4hmjCPxZppk55RhFv6AXpbWs4Ti2B3MpmQY8wFaxrpFVZ",
  "key3": "2dLDJahSCZceCfvijgCScoGZNzr7ELoC3qX6P4ftgmCFXrSp7FmLmwegcXXUkJWoxPAvzssGiTChbAzGH4mFYCtz",
  "key4": "hwkvGNSAaQ5KQ3MmJCKQGppN5txKY5v1iWJpephK3GVWWKxQe9a8AsaBUutGGQ3anHm9ySotdmxoMsaZAvRND7A",
  "key5": "3JrXFrWqBvCbmxnQhGmgpGBSEDAVKCDAwS2b3GmW1tBvq7w8daRdkPHx6fTuoMbLJjAvYYV9kpQ7TQ9xznqjWcg7",
  "key6": "4p1FtKF4cS4B67yN9F5RZkJ1XRicGRoFZ9x6F6GNMwTq48vf2NwCUDwg9injXjJo5ErWkyo1Txr2bAkWHuA7sq8x",
  "key7": "2H9Ni6nEUMnJr3EzyT8hdpWZaY3x7kU2kJT1Q5CFQqU6UbGC2ZXhsNQKoMLSXh14H53iebuwpkbWniCiwASkzK87",
  "key8": "2pQertAeBfLkEUvtUagnAbDfYHhPAeXY85nvRRLa1F3CjivKGuBcs7HFnibxCdW9VUK19zYHdYETxuHZEhVjDG8n",
  "key9": "3PoKCa6tQThatvgJcjMioupzb5qz3exLUkSnixawBv7THxz7ynXH9hLd3Lpzh1QbHrKWSG4ReL3GYpCq3Wn3UUHo",
  "key10": "4xnGmdJi7N4dUiuLijKXQRuGmgJH3D5YafA3Fnvob57kTMmxSr2hbhRTFReWeV4mfaS81PfNR6ScKBDjCPYzTjEZ",
  "key11": "5vY7rPHAzUGL23HEBLXNev5hhhp45FYpV7oCbRvvBkx4qDbncWPcG2LCyNu9f4VmNmv5cqjsRk7yyCvQTGFdFaxv",
  "key12": "HGeroZtwTHEd5bawmXnm5NAHrwayg1Q1CbRsyWTnNKtLQ6HSAe9PfeSvYVTNJz3MwhmYRA37knwGox4qtwcjaoN",
  "key13": "49RLzD5AFZ6JWBMYT3THvXn3WMGKd8XXsPGmJDpYAqkNKtHvHR39Hc2JmaVzmcyoo5Zp2wqoCjxzPKMZhnmL6hfF",
  "key14": "3tbZcCzuhYERnDHFoaEY8VjVNWezUCtQHhTGa8tHeaQyU5BGQjnRZWLm8WqfF75Ju4PDHCsvJJcmNfwiLZ8T5GcP",
  "key15": "3iKciUva6zmzHHFJm7mUnN1vseGKrZ7MRQLLFgvuimTgpTcmcebriKyUy3mCAPnaQuLLwDe3BxmKs3v1GFgycXUp",
  "key16": "5MrGrEoATxEcAXwm3TUGeYkne7uY8wv3N7feGyVxfycx7WezTZiH8SGsTYSFd2QVFzBcMze3kM5yBARJCSoEP93T",
  "key17": "5x3QV2YeiD8Y2BJeWwTgTAMU1M8zxueJseo2LjbFcs5sg4rgE4zk5wYXmRxgotq9HzzKSnDjcp4KTgKAWpG8X5vo",
  "key18": "Qi9GznwLaRrM5iwKyHGunyRwFXQz5ArZ3LbGiiHeoV6nMJG7MDcEzRz3SzEfB42NRVJ4FDBXkhDPH9ELzCnDXh9",
  "key19": "4F3PuLJGZ1BzaQZFLo9v9FbbEk6Cvog6cFBWE8RQP48MGpvvW6c2E2qSP3jVvWAEoq6LrzTLypKKvUwim9K5cEFK",
  "key20": "HjUq83D2upTRhWENrqXT5fe3QpSqHb9D2dyRSwQze8xLX4uQKVYbEhzD6P9FaRW3oeR6NjunH23PHuVmKSCC9dd",
  "key21": "GfAmpG7nv9kqTNHAMBZea4b2SN5prcUvCLP4rofYkTGYHfRpEcWThX9ouzavrHdbArDzan7RQi9gYm1Yq1j2eSr",
  "key22": "LoM4sVZrLGofWhg8jhBgxSSHC3rDGnZnY8m7MDJriUzAo4S2myMTFqA6aYQC5v9bscqXvHkFnRmiJqRZpdwBcmi",
  "key23": "PbMM7UyJ2y1X1KaATBZVEoQe1tg7cWDf3swrD4H4Lab9e2waimp1XBWYKVnAnNz69BS1pexpmyC57cDbby5Ae6s",
  "key24": "Ag2L6rJZZTP3dKwrQSJhYugx41J1DjNhTuRzTd1GvnSmQcKToYKEK32sL8UfzY78M1zJ6wCDGtg2zrHqkv896kS",
  "key25": "3iKTcNVuqfbMyxtknVGZJQWw4VrMCTVSfJv7k8zBxfUq6c4uyPAe7gbVGgbxqrNW4rKnJ4mTKJMjMSjhHkvKJkrV"
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
