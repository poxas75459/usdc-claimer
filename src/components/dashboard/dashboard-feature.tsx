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
    "3ywEjVbG6Pzd7ckhwbit6tGumHHfqz1uPvTsmyzbquNDCCyQDJeWgne4i9dNeQfmFFR6pLQzv5y55G5WosQsv8sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65acVMm5xRBwpbbgL3DV6fqarye6KppQxYqpDJFfTPrmS1au1CNTW5qxL9M8WqQD5qHVe23N22pfuL7V4AiFBScJ",
  "key1": "jA9aDAC9d1mwf48H1jrjspjmpvzxNQLexvN1Qe8EAnjEjMHqjomjqNGj3jfNp9EYhPKkdzDVarYFZfBqhNe4ebV",
  "key2": "2KetxXVC6F5gfQqi3R4gVKiCuQhTNYJzsdV35soeaJvfkb2hUzokpKqq9LT747SZegb9S4VBu7iSG46P7V7WBiiD",
  "key3": "3meEnSK2ihNTq1i8byWigAXwYxdwz8Va93DxJxwLhBw9fM9rWWcEx56nEaZu6ZbW9oSCajmamRnJygDX6uU6V7Dx",
  "key4": "2JxCB7C6n9gVS3TLCwWrFBaB2f7hwWG46pZ7iLozy5wPxaq3CR8BwrG1GjSAcJVvumTDzCqRBxwECRQEczwZWHoK",
  "key5": "5gxRYXCEQp12uSmUKV15s2b3JkfGBCq9AoNLE86jQuJoKHTKcZyKT8E3j7fQyNkpWAKvv6Nid92G6YqY1tWeHFfd",
  "key6": "618pNNawA9VXVrM9HBKCkqcnnafpu9cts1emQpTm4vrXfciEjrKRSVYkY8W1EDZPZd4E29Wzt5XfFG7dRTU9aJax",
  "key7": "tU2ersNE8q4zWtFUMSCLbV3oQqk5FsPVM3NxQktKzRMtwyMdF98Dy1QiragHXv43AXoEWUXRQEzuH6tvUqWReF1",
  "key8": "56zcNcavP2zNX8EarnuLQFbSAMpNXzWznNQCbY1sCNq31r7MywTivRKxknM6appeCJNjp7tfSq3nE2VbC8DrmYB5",
  "key9": "52sR9w4xKiEenshHJnNQRj1oxDNxmGfxEfmbaeqhjaHNJCU2cXPHdGpw6bfD3fcRkGphtduUaqvjaQGGXzjk7xc2",
  "key10": "3Qaxjk77259hKvShYTGdz8gyKyk5jWh5yyAhCmciEpge4zZTRCrgamsrsPULuZ3bkNNn2qSNAEmv5oPwd8QiyHM3",
  "key11": "4NLbfS3HKeT5zcU8c9qDU8q5LRe7KHWaFY5NEKTNSad4WxjC1jpLZzkm3hfb8t6fKtivjVKuqPzAtgtjgawVkhot",
  "key12": "62gMHkYLNzZmCGEQFZ7VzqMU1LGGxPLymDV5sMZ7iCmbKHmZ48yBHmeYqiRUMz5aSrDWSeWFSXSMUFLaNAhodnm2",
  "key13": "3sjGSb2oSmSqgYcHdKXYz9x3csAc83vyVYcysFdgzFd8kcwVXtYnTxEQL417XAgQWUJA76jmYGYPaKnf2VkgtDr7",
  "key14": "4ujEBPpkn2wo1F7o6aaLPTSM5NSBBRD3yPVyHWuymFcQQ9gJVt1xNnyz1RxdXKu5DhYSMLmxEKahdPmU472B6zeS",
  "key15": "Ju3neg3A2jDUdwskKr3dd9hpXLkpYXY4N3L7AixgDYubVs1e57qW9qLPdqrDDrbJqkKqzpeg5ifVKY4AkoiD5Nb",
  "key16": "2VEx8MY1JCk8YqNPeSjhniXt77earZ8gRiQNLnN7mRxL5V4UXQ4H51tV84WVqM4xqzxYg88gdFd6t6jCoirKoNrF",
  "key17": "4A4DLqamcTM24SsS64rcmAGzUipzsntXW1f8DRG9Mspv1ndu7epdwhGqC1Ht3HoWEo9XCPXvv8npPYXMPUk8a5da",
  "key18": "hAmSgFEz5ezgtraTYzEUfZgLpwweXZk19L5R3ReotzmuQbckEWjXvht8ecPHbBQ5zfDbxQGGD71p9ugLZHLMtvw",
  "key19": "57TsmWmb1FcrBBhDJBBiJ6HgEgoG6nhdSVCPEBrqY2HeXCoVa3dHYt2Gc66NBjnojpm4EXYBzY9i63q8DDnEYvbq",
  "key20": "66xppy85AVwT3jLFJxi2yrDfQToShU94nqYLWQVD2UYv5h5KAx4eDKmFYHvjUTRxrNxdvXrpHXNDiX8vi8AJyUyM",
  "key21": "gugK1DYFFggff4zTP5zPaSJ3GSXxpzD4Rnmx8PS2FiUV6TDPnkXV5XBcmACbiyj3eqTt3HWBMpgjkrrDbX7X1Lc",
  "key22": "2zoVgfnP3y8McqCr24456pe4Ub6z9WQfkuQyJ1aAGbBLMuc6ZeBnQhBQAg1ucyxagUnQbH8pJuPJ7FLJ43vkPrfi",
  "key23": "491DwXv3bvhed8wzfoytX4BbDEh6kTw1LWx74hjuZajpfsebjXDYZ6iZQzq7z5HKtDZ9gAStTtdTFwXqRdpzHvk8",
  "key24": "UPDxbauz3u7utXqfe1WN1eRnrPuzvBv4WnDoW8R4vivRoLrEEWxzN7fj4thFTJ5NXz7ZRFafw2RLAs8uQKRGbxk",
  "key25": "84c22kxANV77k9wDxMdWnHzRHeBj5G2JR47dRpaohYE2rZ4EDzCDPQXaokpDL8P2GUxvP8cdmswrQoRohjU5kU6",
  "key26": "48yWeFg5vbGn3oMAaWj74UTm4h8XMdkyNzURnTyFve237Hj8KQuotzGFgd3Ya7FmXbZqBb5WymtUQNaNokFgFUpS",
  "key27": "2YJW49pKhKfjMJFge6hELeMTYCVbS95JybXwHzBqgiRTFStPYeWdiEbG4rzJddKUpViT4jxWpp3Si7HUKNwyzLjN",
  "key28": "2qo7rmtTPSJQs91YLqZbfutvDdx3XEyZkgGc9oVXuoc8By8KUyJ5D6swavrXVhf1VLRcux28nhgw3N74J6frLEjS",
  "key29": "7ER33FGbQfX3kAR2h4yZwkSAaynjR3bxEN92ZdZxhoFYhuDVqkVPnfrWYTfzV5W7JwQqDRuVqwXSm5RXKKerPJE"
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
