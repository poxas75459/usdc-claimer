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
    "3YMtaMrKak6krkm7PazGGrKTqF2B8eAJXcFdYXEaQ2VqoEhmpcs2t1YZGuznpU4QytiCdcu8ViHQcPb2PZBptPJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AL9UVayb2LAD1s9jLCb79VY174mWQrjnxrPmHTVbEu2zuuZBzHKcbDUnJwp3wB5Zd2hvbxftgxM9Q5v1Bx4TjzY",
  "key1": "4v3TZneirdKGJPpj8b7isWqepxUcmxbxcpk3QcBKa9A71frTbqaYsKpMi7ud98hJ7yJrnNZZQXWgHDwHa2ndKT1J",
  "key2": "2eZeBDksEnRXdQ4zYXtDgmaa5brhw2Mk6teWn39agdxPU1anz3EkAMtr9HceDkZJM6eGpND3Qikyng2Kkr3G5HH4",
  "key3": "634wn5w4EUbJCi2zm376L3j2G4rDCysqP5odnCcX7HcoFKH35vDd8jhQK1cmRKRTzHP1jzbyAXZ9fi2BgwGvh4ng",
  "key4": "4i5VD9ZxbD1dwC9tMdk4aN5WyKNCsTn5VbxJBe9s9ns34ygUEAWojMtBvaNUS3aJKahtHp1xzC2TonRLjadLLH7S",
  "key5": "TdadUHTv2QmQLouhhozrYyM9TUnjdHXrPtLxwu6iNcvXKngZvGMZ6XXzVvd2cnrdVZv6nyL68Vfkf9E3dngiabA",
  "key6": "2dxEHNqs6pXzxwi4A3TTtW887gMJhgFjHmq1V5YS5cw5wfCMZSwc1FmwvWud8XWPAgx8q93iPVQ2oWGwVi2NfMpr",
  "key7": "5Hki1EJMN6DR9zLRYLSAJNUNys8LuFJeMD8UryS1aJVRVfxofY8CBxWZEG7A8D13r1pq3UY5XDXxs3TNvqWAfYd8",
  "key8": "9CBWCGNMbKiPYNbQJomnniVdgch6MUoKQmqAge7KTH8pPCuCBLudxnqW8drC1whReDF6XjgiUvPpsoLGmSys853",
  "key9": "5odtfZui9RidkDhdMiugi2axaUB5GeyRzPpWJZpczEwfPbNnSiRvyi1UEzbepyaJ5dTAUMb7SirtBmveaDJAn5Xg",
  "key10": "4RZrAPghSu3UNkCsQVEkYBv6S1QtRQ9UKJe7RwB1ZAwif5nqeXtDsrWxiZcJAzzVTTmyiPcDjvkKDjXM5LxFhz3S",
  "key11": "3aLxdrPTBeXPmhzC8Ktt2ToNiWiaCg9sUCFP62UVuS33TY99THECsQ288YLyZ2k8MTXM4wGc3iTQerELMcvuZ8Aa",
  "key12": "5vNLTwX4Gra66xgSsYCQ9RcWeh6tsvtedoX7cTtMC4PHSAsVPcMMLxHwDzXXVov2Q2hoX9Jq9KhiyVgVPXhkBiE1",
  "key13": "4rNSvTFi1JzSFJhmQocJA17hTu7ia46XSWHEme3EdGV7p6QF7j8sDGxgNsX5aJVoKgrZyV65dmvuA9Wosnu9bT7u",
  "key14": "3BNHGXhDJP8cNyf9Gof791fZhUVopYzJ4Rm27SZ4NHGh2FS86KdoSD7DrDcMJz6ww7WaiGcHEb8TP9GSUe1y6CVx",
  "key15": "4gGrPPBurkeHYBtTqT1vn8ybQujjQhnLwTeMipAXktcK16SY77oYMdYmV1fFQ1kRYiWvhNH2KWXVdQNmAmUNrvTv",
  "key16": "NrhdPpC4cXSXG6gW53fYnhxQuGVq2mvMCwsPb9BbdntJu5z59rXouFhDkSUt8dWChTbC8RFt6wBaJgEHA4SqZ9t",
  "key17": "5BjRLH1CpAjc5FmKS6B1gBmrigZfdZr3KN9EjLH5zHn7svZpbDbky8CHq7Rmg5JNpCLE91XiN8aph9b7CjrWo3dW",
  "key18": "Y7tjMktWX12jaPE33kSy9nXdTnaqvH73Cv6WGC1pemGu3nNnGHcup3q4Xhu9fNrn6JgB2z58iEq3uWrMKbe8Lo4",
  "key19": "2cC5a7NLNCNprwqFQv57wZpYPvbwzRu1tPFtHXLnNjieJMRPN3ivu1qq66mLZkhjrucwNn8FScPg1141GVdep4Mx",
  "key20": "3CHswCqNxXdUhexiXPd5gxJEzge3cpeebnAv3CdxmX7r2hDxcXyMiiXDehK5v9BWztX8XYAyFDYQTP8bfGkwPBgM",
  "key21": "29JG5CE9ZFDZ41yWvSwevjhcZmNCdETsgVAhKaQGj4oN7yfsynPMXJwmePHsX8cWgrzT1gPsSpfb9EGcR6SyAVNc",
  "key22": "5A7dY4zJAeKWfdptCrQD9XQ8wntydPyPR6W6zmezdQKpU5nd2x95UvHev9YzELTLPaPPaJ81w2uKsKfab3Ve7PPu",
  "key23": "5hhuMEcRPH7ZUcoeMRzzHCbzTBMcqoNywU9b5PfHATzzP23XUyKjxtsthtoTCJw4qQEeypD12G3y6yzPxTCbSJgL",
  "key24": "3JGDVhBtQLLJJSxs5akFBJDJtHLpHHczYRPycWu1aAbjxMptgZqpzLDg3nUijkVY9Z4KB7dfwbRiGkVVcTGGHyoo",
  "key25": "MUDX3o6MF1UFPDtqWiRu6yXX3NF72X19VEP5DH7ZD3Sq9NBRdj8eKSbD3ephPmZ8UWFTt3EWzGJG1ntYbztU1zP",
  "key26": "62ouPvgAQEsByg5ACMD1BDegyJdGhTYgucKWdiy15Ue1DRx28asxWm8rFxcfMWCMtELLL79uoNWuzjKZMVCxEy8P",
  "key27": "5YYodrzEVeM3h4MYAd1iy3rBkLmHHUGb248XBpaoRZKpYdGyhpCt1JvocXVFB8cRer1SPv5Q3AaKHwqjoUbWiUdr",
  "key28": "4Cr6kCgd8kzTxinvkRNJz7YNivr38amwycbYGnYee6RyjggkBdaKPkMYKmTC1KajyYjxg2ZHSoT7Lffe46hWBo26",
  "key29": "4d6Us5VxpEScVjne6qd9i5K5vG3QLjxJdXM23iWS7Xw1WSNg67xHg8RMqq1Fxcf8nUAzMLRacUrXwcKf8U2ni2br",
  "key30": "3itUfunpruQD9aWiWon646wPRXSpibVcDM6Yf548qh1fVLj5M5dWncwHRnZoEM1jfUtbmzEg1mV7dWF7GCv2bzRh",
  "key31": "55CtgndcrhAaegUh17s3VqwDj91QunEEeDJvXkc1nxYrzARyEMVNeaDT8MB1gTVBxwmtd7ohKdcjjtJqMAzjh1kc",
  "key32": "3EQ3eETjSDr9MiYXNPmZhXUeH172sNFCVFFS7p69n1acCVYWNRfw1V7LeEV9EHzbeSGuvZeWtUaGJj7EmL3URgKF",
  "key33": "5cHxaLzND3NnmfuiznQYz5iou8HzwEfutsiSpCAFyqNVmNpZ6WesJAJTn4ewcUpZo75BGq9y2QsaCCm5qae6skuc",
  "key34": "3q4r1u7t9J5ivvufnRCb3CwcXphQtRLptByYBDU2uQ56qAJ7JAxUuPWheU9L4dLwTBHtwLscDkKzuDjbq9KxnFFn",
  "key35": "2f9eqMRmSmcLYjzLApT5PpGCVFAKQzU4qwnUB76dHvaATPYbL65djLcNfR4i3iFG5pDfheN7QrUu6xVjN5JAgRdF",
  "key36": "5PYTxuXvrqMFSWWutfGaQjus33EQFakXT7RJCjUZbS6n7goJ1VTCt8VnnJLsGo5stnbtCdhXLVweFrWQY2CqVk5V",
  "key37": "53cbJmjwWKcbY3GyQmn2Eqfjz849gjC2qrXRad2EsxC9zQuMi8t5GeTK761G4oLJvFGT4RAygtfph9Pwyu69HZFw",
  "key38": "Ztb48dr5rM7oabhGVPFTeP18AT9jEumF6wFNeWKD7V6Q19YrJNXyprDnquFmMquCVSA6pR7WifB7G59qGDfWaPx"
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
