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
    "3oA2swcZwYHKzyCWWVMpY9N2mBLa5TShECZ42GekQANP3vAWDLnjJds116Smm3QyTjCyyAqN6vCHHEBZXFKBg5Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxxeUad62w8x6uhpTmX5yoh9U6h1H1JKmzBqhbiVa54PivaQSjrML7nTcoqVfeiLgLj6JHZ5QXHb932xjCR2FNx",
  "key1": "2ocQXRxebSjMSdtd3f1jitU6Wx1wgDEroSAxEdTtzmtTKReQ13zsXPcQ2Mwd6mEjGRvNeLULJxeokREoXo2x11yn",
  "key2": "4YzNA9q4x8dzPxrjL6iS4673xV3YWybaweRPkxEYfhX3ubNuLiMEZpEqj1ftE9NEmG7bii8pCtyD4WxUKfCL8sFC",
  "key3": "33jTHdzWhFgBHRXFZ3kHL3FEsYesQYyrqJreHtvYHzKHm3jaTFuE2jjkWM6SZP2rq6w37gRgEmUWRj6zapFsKeuh",
  "key4": "5HhDx1qsGwdUwqceETCRw8xmeMjzRaTFJmnvxSqFCrbi29uk2T8uCM3mNrmNkH2SZiYeUULZ768z5MNnaKavVgTX",
  "key5": "4xAP5YtCMBLQmaLm8jVBu8TGthof7ehsXmsNVk2UfCHVdRDmZwaV3TifbbHw61wU3XXPZNzHjC7uzvVyyHjE13B6",
  "key6": "4dcutLGEYVubCjVDTAipDbM2ZZCDPrBkr4eQ49D6ER1DaVhfGEhGj6Gz4aKyTmSJm2YWRXq8vxZt47zbJBDzSki",
  "key7": "3P2e3x1VxyEsRgzakVyf2Y1pMrYBAARBQPQ5AFtGseXv6MvtG9wVfST2xTjB7NDnnik5EW2Uk7gJfUq6sR46bqMA",
  "key8": "4m3LJfViSANFGV9vH9MYJNLs3U1JGvBrhUmoSAUxUCs8R7patH1wQvSZ1GwHU37DvV8TU17M2BJ64BjraVMvUZWg",
  "key9": "5e39bu1ADnAxrWyfspjgpKCi6hhmjRpDWpU7P2N7hdwsZrW7obbJe9cUmEuas5GCro2WUk9wkqSEvSjFLM6wjknK",
  "key10": "41RtPT7gcvZksy8oWuEpWxWcPcBLtX5ktgtEHwVmArnYySLqqUHkYeFeUg3RNaKqNzyufmS3iHsN2zZkjXfRTE7d",
  "key11": "5PqfRt4vjecZodcHjRviiZis3JGntDfzkm3QAporiTy9PtD3Q1BsZt1QK8s9VR1zi5zP2r3Zs541HmGfC1X7psBB",
  "key12": "JvrtQ4oG7gBLDGu8DkQCgJx9NpKHi7j2T8bxXa6hk2UfaxGb4aNh2A5iypFQnXN9iJBAeketcgeyZLuh7r7RR1m",
  "key13": "5d7FLNApJwB4M31KTXKbRVX2FqW3keCabVJkMwAbQEWDYJJSF3CAjQsU3326Jogt7RiHVBJjjGLVh5t3uMyvxcMf",
  "key14": "45ip9j1rrQJHBDt8QJ5LCmT31MbfPybUVvQ7mDrm3t5bRERDNoWS7UwZSHsh8yvSrmGpkFJBVzoCGfyrSZLwSE73",
  "key15": "2WtbzNzDgDsGUzZ7frFgPzq4gTKALxgrVjUK818AudSKQSTiRZzXJkXJePrCg98pYwQGJQCHDpXoMHa1WFmoT6fK",
  "key16": "2r4XZkrkSANnFmZHPScnqvV7RTMmaPMJRQV6SdV1BTvEedevFYFmGWK4ijY8xbk38rGx37H7HM1XBJfno4nz4U2D",
  "key17": "5DYn3qxJY7i5xdeDWkVJkHuia1NzSoFqUCDXQmWEMWVXPwPsfbGFMt9YoJYfaZJaPDhb6LckQw4rMpg2JwGwDBt9",
  "key18": "4KMriQCMyJ7zKLuqDRkNnuhrKEx4gktBUYhNMusmkKKsUv1WmDJbzgt13LU8MzZPQRwEQy3rTmh3qcANb6CHMxtm",
  "key19": "5AJpdZWQCnWHiLZE7RyEicexDUfBmyJnt9HZix8uJBi8w8pTe5vtHprDzbc1Q4T5ZjcmDhR8PjxH9fQZm7WWhHxD",
  "key20": "4htq6RmPXuXsG6MfE3mZTzUcqWVoGqZt6Jb6GeQYNqVXvSJiCyZQnDaSLh12gu19sB8Jji3p2LUcvSfFyPHrYjjp",
  "key21": "21wWRndg1uDubpKTtnoQLGLPirRtLoRjEEEMyhtHVEzgTckSVja14x21eXAPg2bQo9coHNm12MsNo5YNXgA8xdMR",
  "key22": "2JvB9W71oss3ZLF8W5dEyU1K6C185DeQTyPM99ZEZEoqHwy6nmCmo4QKTUMrXzrYaBhHbyrKZuLsjaqjftKbVBDA",
  "key23": "5jG87k59ExN6pQvjm2AQga6EvUcp2n8UetXeDc6qsxNsWTTFgx9kEcVzYrPZtgrcgQSNeqsxMKdoaTYbzkvw7KbU",
  "key24": "4q1J9FFuJXPneuKbFkHMDP82vFotiTuJZLERGG1yEfCYSbWXa8hrGseMSeKJPMksLfM6rJfZYJpVyGh6fdc23bDB",
  "key25": "3jQC5xn8VVA2adoTFKuaL6pRcYE2Z2YgP3LdXu8Bu6kGat6eLAbAR5Bn5bZP5jUK2E8RYP22fce9qPLQaHXrueqz",
  "key26": "yPs24mENSsnoz4RAu4i7aaGMJ1nHY7gX3x9vXPDqTzZW3MgzJtqUugNCy6rkJXoaztJHmneuvGYQbT2KswGG5PU",
  "key27": "3G61WQgQBLMNvJ9Ctca3sF71cuJdmhJRtHCGzJJUSW3zZvAictKaRhz5uhDNbqH799d9fM7QpTwaHwt5UFpULCmY",
  "key28": "37evQxtkoZmciAXXdAcBhgxvTWBoTBEescmKwut8tCy6yeb747RoCHp1SiKSaoyXTvdcRMwowMeEXgxa7ZrR9s9r",
  "key29": "2ZAMnSPXvJhgEECokK5hTfLbRPuv3gTE7ojvLo2X2kSGkMCrj7CL9vcvZJR52dapW6sjmCxDe7Pcivoit9L3yiiY",
  "key30": "66BoP1d8xAs77a2u9afuvN3HM4BTDpjfmRxSVXYrGGZHU27vBUG5xTLba5jtzLTmLb7QvB5ua2TsLbxTko1ijDHy"
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
