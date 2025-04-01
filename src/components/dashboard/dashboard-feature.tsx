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
    "5YE4VdQp8Gxy1Uh287BQwfYkguQ8w84pqX72VsWpiguiigiWeyRRXwnTmGB8aMMWgXSKdzSHnB8C4K53ECVuwe2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5SsFKGWM2aoF6gEeWDe9YMTv1k57fw2WeYfKyUsmR7Z3tHg9oHFJ6o6PkSnbFHJAah2kHBLrCPNzFk7EbLavY6",
  "key1": "4L5HPFBm4wKTNUUSmMmnPE8qBJ5JwKGtB1mZC1nPcbZPjxXGZcpdUDSdnsJhLxXmPjj1MULzyPoT1AJw2u8oVMxf",
  "key2": "4kaJcXt2gnmBZqhBKE87rYGBvTGt7BUVncBRNoCTXbhzWZTwxrMBvzXs94wMHuhtE5Pb89ujfTMaw8nk7SasCggW",
  "key3": "4ULV8sXeTY24NYwRxKXwt2s2Ndaj6LVftR51scyVe6b469PVPMHaTyTc9wvCvKSGd4VvhBxDjPaCWDiCfqUKYHjs",
  "key4": "2rPzQN8QKf5XtyxKGiNZTL4YZiL1H11byWMzLG72YfRZxY12pxZ7j5ZVBYr7RsfjAYF9ouwzp3pxqAJhV4iZrBqC",
  "key5": "3iCoxUfefHVkbXDXSewJuRy5cXeQFjTS7UyP7reny6UWwUL4pViRzJiH7MeJoBXb9b1cQmYYvWsBJwrrfnLTauQX",
  "key6": "2D37cZhbBM6DriMz8PLVccyMegN7ok7nS1y7ajTyyQKDMd16MUMBkNgdJNWMf1crWYW2whRuUWFshJG1NTHeGCK7",
  "key7": "2nnJh7HN1agTmw4uLprKw7P2VsopUYnuPfuiX3UfF6MPgjZkZfdkBP9R69FuWu9iF6Jr9N55JrWmuksPATx4B7ER",
  "key8": "4QV5CnrDEjpqZThJGgx35xzDyZ6zkr3hbj7vRbM4WMRTNa6CwiBQdUMgAxCD35ir1rWHwJF4jzr19bSUWC97X9Mw",
  "key9": "65kV5f1aH9D8vFrZVPMoSggHdYgnq6ju1Xqekt1yxGrjpii2Vv4NnZAgFssaL9k3vBF3HsJNRWKq5Vy7cXTriByW",
  "key10": "5QAEoxEeYfLsLQEGe4xJ8boRCsGjgZKeHSXKf3RztMP2HC1e3vPfWWh7tjwM46eftxcpbqw11YmZjnxyDiUR7TEG",
  "key11": "2tpYaZvWhW1YqZwN2fuYV42qYbqBkQYoAWbTd8Jsc11nZeMRH6ELHhCskvKvuniWvSuV9hpARSDFPPxfwZxMzjVQ",
  "key12": "56mWZyNbBtD1hMQ49JXTeFG5P6kPwWzBYe9FWzpunuu9AonerQrPu95aBsEZ1RJS44V4UdRGAFUWGBbssDUh6FyV",
  "key13": "3t6ZXQR8aa8nFwPzXhSS6AHUfTjgHaFw67VbDpL1Rmtv5qQPXq6D7rEP3oiw74sWAfG7TomF5RNkovZNfPNJthCj",
  "key14": "5zYBENutK56cTnc7ikap53JnRRnLi5raPoh4fzDcAjU4TQNJvRW4e3bT9rJTCR2z4virbTXZ1GyUJL7jieefXqr6",
  "key15": "4efDkMLaVrAM9Y3j7Sf9RHej5Xj6HaCkETHgjGP7dyXnbYQa8X4vqDKK6yDthvmgZpuBo6zb3p4bvGcruEzqTy52",
  "key16": "4qAPjS61XVhuSDtWymbv8q5DEbSsXh7Np2s4ags7oyKWzyjxHtDcfjHAPnE816GytgRWqwmTBgbVC4b6pUkhfHyE",
  "key17": "4KxMrZg8YWkpqbKWJLPpiXowEuJf18MfiAymRxRJRHNWw3eE8bAu8qaXwzjiUfxFx8kJtGHc3B3pqjTD5Q7nNn2k",
  "key18": "2TuF5fL9iPnszCxer82DDTDTh5F44oGTziwKUM57FRxY5qQ4qZPXtDAkACHFQYWot12FoHFN3VaNgs7t8mqfaC2K",
  "key19": "4EK3Rrp43hg7vr2gMvJa3XzZS1eRQf4sunee4h2fFLnysGKXdFk1oB663h1zK3DQV32yPTbMgbap3EZgcJtiLaaz",
  "key20": "2UMuY1tLQfKqELz4jGQcGo15hTfy92TQiUHqSQcBQrVnbEeJo4hD6urYxe84CNYGZidhdjJmV1KAo9tn49VfXWeG",
  "key21": "5PVeNzvFrXxtYu9NYJdsMcG8dD5dUFzRYE1gvdLwn2BmTuWkSRWqtDSeZBBJzvhPFoPAqEUbUb5XaCQ9Yynm6Gpr",
  "key22": "5zKgcN7B64iaeoFcCo4hdBhDjJDYNgYDypHSHWQH7Z6a8tRRLatNzpqc7CeLNTmXj7mq7rAzYwoE6wmJjKN1qtEo",
  "key23": "5FdJ4i35JwdigbjM9kkGms3NSEi8nVMEGQYnhRuss5pGYg4oZ5Aw611kgesKxZ97ojHAKsLhsiuLRSQexGZFQ2rL",
  "key24": "5hAH9ZeULqJENkfGRmBkwUHN8SfdoCvsAdiBcTssQpSP6tbtHE9T3uExeE3YRt4wZqJ4GYdbzPmEEjFszz5HjLz7",
  "key25": "4eMW2rzP6iSRAKPp77C49MxVRQwxvTkphXdhDgXcDb9ApyWgKaW1TWU2QNUvbyuVmX7AJxWVSvzjQR1mPUSQkrXi",
  "key26": "dH2LEQWUisuqHtJgD717AoMncTS54oXFvu1D3kpbHa78qAhXGhuSGAi5Nj7mdgQApjXhASgfUNDbYVTjCf4dFoB",
  "key27": "4EeXPRcc6L5SyBgNfxBmQHJUGqrB6LHpdLUKJLjB12FXahZj3daYHZtPVcA2Nb9pLEP7UAzHyXF9KJHkc8gkiysn",
  "key28": "2eQpSqJt7qFghPFHLjT4RRcpsbMtmHEmU92oQymToe2wt8qHXtXu98UrmzxxTuU4uab4LWtpYb3Q5W5Ho8S9hhiY",
  "key29": "Z8UGkutUD5UU2LfftiKxQaC76xCmLjiDFMYTZYNXy15u8o67M2GtKLQeEUrD1nXPcRnoZgTHf9KiEuSv2Vb2dw8"
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
