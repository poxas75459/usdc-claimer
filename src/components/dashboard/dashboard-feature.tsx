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
    "3BZHREZBm4Lqat7mzbfjywR5Rocw4Ho7AtAWXyUT9HYShE8wsYxeBus7yPSJfwCFN6SqQVikEipjQ42BoNqQxTP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrWYMHd1UDYDCEC7sQUQoxHjZAHFLYMGduJqG4VAeGMnKXFgt2PYeSvKqVn6apZoAGjb2WXdRPmPxy2pQNfqCW1",
  "key1": "4xqpTQxmdNyrjaRYTezE3Q1NZ51zRzmQ5EHYR3cv2gzsbEdRWcpfGPej4z39d9ARiowi5TQr9eAjB4Nk8aGKME7Z",
  "key2": "B5LCGX1BKRFYS3J3nUV8VX1w11CX6rxXVKAQHLbgg4x5rrcxP5jqxzW1eZmcrVGarX39BjEvq5B6ExhTxKRaA3T",
  "key3": "5z1xiDSCRRommzubC8dvZqyUwBWdjGJRmcVxpZxk4gMTUjcoq8iNt6oTZEJ3WBgQ1fTjWaRE9yoBj3CmLpMWA4DM",
  "key4": "4eao8ypSduPmAwsXXNePnGAy8zwxaRrWkLZ4TAKecXDp5jou3f2QC5jo2Q1j3FBT2U28kJCXWi2FZP9jzFLZcMbK",
  "key5": "47sKiRUcFnxos5JTXVj95Y5Hdhc3aBdQtzefPzEU5v98MAP5MBC75JKKkAgh5auS9EuGRPpSNzqGG3Y7GzrptFN3",
  "key6": "w4rmgRVhcdfYQtLkMmvSxZmryyiKv498WhKmwG8hVZBhW1JGwHhvjbE3UxLQtFoXd6kAA15NWDCQwT6obPYXk1z",
  "key7": "nLXJpeMDTLm7djPKh7g7YBfgHdi9kiPPYMDcJf5XfjyuvSV8VrvFZfiL1VxYGUgkcwz1mTjAnFj3kYCPyAuLLWQ",
  "key8": "Mgryn26BDU2QevfKZUzwojZ8dcRmf3PNepsnbV5M5xJhPEzDeaszkfngtZ61EYNq83rLHw4h2qre4mnFfrj5Q7i",
  "key9": "wHnZ74sHCHr9GXkK3Xz8ZX91uX41R8heLDhDxJhs26NsfUauNY2c5juUuRW6a6YfRkjUkKPxCcyDB2bK8QjkrjN",
  "key10": "2ow8QrqYbZhCyM2Z9XrJ9xwsy3p662t43bBwxXNHHZ4m9iHeVbdATHsh8mYMmhpwAwiyQG36eTESNbreEUZfw6kN",
  "key11": "3pXnMZ2nA1XBDDJLybZLfXsBG2QJKi7Rfu7pQ5ZV581zrC5nqi5XkU6ctJaG2e8H3rDcoh3wYC3KxSfHvyjpancp",
  "key12": "5v5GDLDXzoEh5hyYYLNgp5q5ZN4fS338am6fEDztpBLJ7v2Uq2rRjr7A24zJUQP17Jj6VbTW9AK6vX2KmUCcWHDR",
  "key13": "NzHN6XuyxE9iAQ8xu79WYYMYhodR6RQdXACaPAoi4QDjTsqcH6B8JqyMGNeqU8yiy4WT3q9mMCY9nEM6qWbWzD6",
  "key14": "LVbyT3ujLwG88EZBW7sMqZXPqqG1VKxQsu5h8f9ULgAfcxpXJpBdQDJT7mkfgFdY3NmV1ma9z9zzBfKAZMwqAEM",
  "key15": "3ogmM7V4SyXkUiuTn2LZkMpcUVPPERActyNQwZ39SobZvBWy4Amfreo6ELgZgXcjsWdo5CFbUnVBmTVXxG5F3URD",
  "key16": "4ocQ3PNLFZ8mRz46XZL4uHUzTCW3wUeccVpozKg4wYQyWSNBmxtWKp6w8cndBwSkRkT5WYheM4X3WckNPMfZXw5T",
  "key17": "2zV7W7Vc1dDBv6JJZ44oKNT9V7J54M1aT2px1qDNHxHCoT6fJpjNeqL8HKrpnS1MB5vuuKvGehWMsQQW76hUACFm",
  "key18": "3icqci7FSCu9Q12UXgwS4TGg8KZn9PaqRWayEKjTKA2zP8tE9vMk3PauXPXGmE7Gs8FVhKhyK86Sez66AwrwKFWa",
  "key19": "4EpHfQELmmU4QUttxoBiqhYJTmNu4hePPSA37ZEJbhg871agVtnXhghrSFazTdCfUhwPd1brveoUHU1MjYkM41iE",
  "key20": "yp4SiwoaX7eptR5vkx1V7XLR1yurywFfP8F4wJ24HoXGWhXYhGL2rwnYNqoK2amqzBEG2NPLQ7CNaoJ9SFccEB1",
  "key21": "4uPY1hzsHxoLLX6Vkp2b5EmS3JCqG8HRL21zi5AmxGkqfaCei2qCsgqPqT9XaiLpt61BSZXbFhf7LwfU9hRqcGNS",
  "key22": "5TUqc9D9di3G2RihCAtZAUbrdqspg9KnLA7krz83ReG3FSGChDmMShuuYJCusBAoV8YTGdoURWRbqmSMDJrLzf7v",
  "key23": "5mXVzCpTENuwRYGWGptgSs2GXJjdUnr3XwC9UoWGgGWUaZy7mZULGm1udgKsbP4AHJR3sYUmLLXkg6qLqBRz1GNV",
  "key24": "3B3UD5epT21wSXntp9qHqpzvGK4GhLm9mMYpwtbN1FJg9CSzQGDixcjA59QZjXJepWdfaHfSXf79B6EoBs5XMwzX",
  "key25": "3A86Lo3jVjW6xHLHGHKU7ZkKc42wGgEyG4j2fcGgNr1vVpNR8LFqAzShzWCJEcvkye3hsBfz3xjHLwTTqs4K4kJy",
  "key26": "5nAHg7NTXBJZvEkqC86n4jChcpd9osZnScvUxyC4aJtBfGfRryw7YqVtZ8EGEqp8jdM81t9xNKukHDEFd6D3BisK",
  "key27": "9bdgqqEeqXMT1yTk3FDMr8sV4dsFBydPpsyWcEEGa6rEYvCSKt2iJR1jx56hmDTpLkng74CjcyBmskEBESYWuTw",
  "key28": "Gjz8vzXsTapna25cwBsjfWCNa6EaJv9UbBENqVP4k66ZiXkpzZT86FW2QzZSZPPLYM8st3Hh9mU3QnBDo5SwtkT",
  "key29": "2WeHxwzwX2MsyyP1QQZaphcLYpNiGVwfbtnx91HTFKu8XVYJjrJ9Uz2kwXuEjHLh1nRNjU3Ct1GQ9oLNNcM9oEHt",
  "key30": "zcamPww6oPdWsnjMSE9ed15fofTUCnwbMxopz2AvVs8TaNqi5z5aFrAXAuhHxheZQgpueDUiMWbfwka9xGcuDuZ",
  "key31": "Fg1eWzDYHRXMWXtCmNj5nseph89aWRC8mKrQuznLRpJMmiSxPT7Mzru6VheohnTReBpCr3vVKs1Mg4iZBbuoa6M",
  "key32": "479HdwnRyRA6DmEPpnsvueBmz894i8MGpsPCTWSFHSVAhF3qqhqgdpgKhc9hzQ8MQUHx41vKfQ4ohckMpjqbh2Xm",
  "key33": "2aZqejdPEXwF95HsyXZG4neWnffw25LXjJb8s4AXyLY4EoH1xB3pb1PQeXgrxs73rTkZkD6jFsLhskhoYyc7WwSn",
  "key34": "3NcLEXRUAFYz2PA7epWLyUAvCxh1U29G1UsScLusSgioiq4FExrHyCe6GxTqocQXS6gnCL3weqFzVSguspxMT64r",
  "key35": "4aN4p57DtAXFn3L1dMmX4avmYhJKP9cd5LogVj1vft7FoGjNiUmehypCN3ytNzUKM67FLQAnoKERyKvBPqA5TzS4",
  "key36": "usmAoHKnbCcRjrnsAUFfvT2ZKTB7bVZcpvWRRCysjjnCF7yJjyxW9bRvFHBN2gVuVGYwTpUbbKARcMi3DSZ1yWL",
  "key37": "3s1B41FGK4pSg8jBr24eNwgiXvtY5NRrf3ZZMhhfPgbtcE6CoNwTCFaZCJXBQ3szo1Dcr5GeoYQZBJLVtjjBTd5d",
  "key38": "3AVuvVG8qh8GC5DCj31tVaCQ7FP4a4oAikTK6n9nC5TghTyDrZqpmA45t9vhSMjYV1mJqBm7gihk1bSHE7SMSB15",
  "key39": "3XbBPSRxpa3PzMRWbAjes1r5SqWohJarobhyphEC3r6DAtT9R3nuANERDquLNwtdXwn7jTfa93k2vfqfayyfiew9",
  "key40": "43nVmWuUd6C28ypoK4M8Kui3SekqEvS9mmrrpoGF1CxrJLcbEb3DYtY5Z4GfC3y66m5f8FLX7mcHWKF4xhWRBo1x",
  "key41": "3GLfVRkr5xX8qygVFDrbttvpdUuLiTcCptpSBXgsyLufUBMkCtza4pR1ZF49W3fsVMqjmVmCVw1dqySMmrLfuwmB"
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
