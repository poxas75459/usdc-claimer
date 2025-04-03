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
    "66WxW3H8esju9KdEwzS4Hho8JVrtwv1pdQQ5ULFE5Y3UkdZ8zjgrCyctNhMA2fVrCAsZPfkNG5WjkEVpz3u5Gfw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hduQVKNsSfs8eZHosRPA8kK516h66PW6mNLewGPVN3dePZsYSSzExFjioMJ7ouWPbURmorfFChorJYwcdZCTwk8",
  "key1": "3T9uVobNUhLd1hjB3GvXDvdVD5Cir9LrDUrrWMdFt57jQbB6mK6kFvh7KXa2MwiVAaQavHLy1S7cjAn11s8ZNosa",
  "key2": "4iFK9QD8avSvBG9PeS22KKjixmKM92yCb7CUvfRZei6qqDqsqKuEaDifLnZQmzygkmkmhbpVrH93zF9FBNi8rn5b",
  "key3": "2GWNdumTFGAdbPxrSnHTgHKqBAHxaecYKN4vSzBYmohhFczqcf69yedGGjKXSf8BfAUxoFAVHM54ubLLzeuoaFu2",
  "key4": "uXeah6hsfBLa1i425ybXfCijrYaqGfM2Vojg5PKJ8WJxpB2ib5V4APxqQ9zDVUPGhQ8frfhDuJufVtqEqmjBTdo",
  "key5": "5x6FVbHENqTmheJ2bMv3pBYvVxJqSwFFxuXcppKexr73qPGsc9zt2NYcVnScWEp7j93jHHp14tLZkKhqvfarWR3V",
  "key6": "hocFsQADdZpygrm9vBB3c7vX4AzWNtEC22oZ3fW6HcojoS5uh277mG4uJMZtUcJ9A7kfgGVSZ3bKZbJSEv1qLWB",
  "key7": "4LNQmcM95S6fe48yQLb5NQEz8HmsckWF2W3U1kSxrtq1J1GxS97SBbkMsXJubxarUarUWTGNFBHfVheCqLExjgtQ",
  "key8": "C3M1LzXxckBBDswNaS4jX4p8dZccWsnwo69z4d9sLfCMqumHQvMsjTaVtBK4ZyFZfsRT6i8FNuDHWVYRVV9fHjE",
  "key9": "5fSEgGsQeZ1GqNwYroLM7kuyjUwuuGuckc8SgXpuAWY7JkdHpDAWyzpnhdJKvLTx3qPGJNDVgohMB8bZGJuSQCt7",
  "key10": "4wXcsWGd9V7xL4xSR9MryEZpaHUeu5nTJXCrNApyqNWoLD1eZnqaFsrFqJvEJSzzEZ5vsjC8FwPTY2UrkMXGm5nr",
  "key11": "3MvNQzDJyWTGuqibQkuWE9ip3AhUfwaNxDFGT7GT8F5ixuN7qkNK4fj8cv8dAGPnwEA2NUuKNLavopA7tkGJZGRn",
  "key12": "3uHyowJo2Yv7anr2nMQumnVGjL7n4tFGcbt1NRCFijbSpBgLHF6eowKaXyU5tVpUqiaaPKpctLVG1quU5x8YjLmX",
  "key13": "4Uri4dPviA1AXJ7o52pXHZ8yPjB9wJQiZMDUSDMUwM35VtiNz7erL9aH6zU6zTJMbfaDb7AXMuiRVQKpeZ4AvL9",
  "key14": "4w6oh8JBfUJZSbeYbXkUaKZxjjNjy1vRCiahktoHgfSdU26p7iut1DpP4tGsL2k3auGwyMYjimjVXrQ4RtT7fdEv",
  "key15": "32cD4Ki2tBue5ZaMPvLkBSKi2kgZXY92Z764HCycyZdERuD26UYoMCBSnoorByTNoMwxEaW2QLMib7KbLEqu3kgc",
  "key16": "3r64GYtsy6KHXRV3abMZomqkk97BCWEWaAJvGXDp1zXHHwH9rFjbyE1yv8zZw6SgcD7bhWLnd134GRxAxy7BXG4y",
  "key17": "2KdVB7jogsBpXXps7WxqLyRXafTziEcZ3NX8PisPmcoCihRC6qhbHJbutKXAzKbr6qFx3AVNJR2myUdk9xMUGFtU",
  "key18": "2egst2SEicuj3CcNUvLasHJVaCUif4L4ojpZm5HCWQx3v8Lpd5zUt3Bo8XxrHico6fTYwZoxVPeYJvPviJGDFFhb",
  "key19": "2y2GkSSg5sdUKXVUFFhBngiChA3BrW82218zNij8ixeC6Yp2sQbNVLCLEEq6vqqfFBDWHLk8gGEDCN86EzFY3FHP",
  "key20": "5x5L1aGvSndx3dPjWVcKFGkFTkffjG8yPgyvR5iZQiozBuWd8cUt8J5YycT6ohE2oz7URQUbwhG1kCeuQNBQPADR",
  "key21": "4eqtf2tGXZSYwP7dXXJRkqAcxfjpMXFYYo1taD6c2v1wnEze4mDeS2tCz3Z8QAbCmehP6jUA1F9GrqS6ZVzqYoz7",
  "key22": "4px4mZXPMaC2ZBb2EDVQ1wK9tqG33PTgpGzycCBmBNENnev9xLWfXFCw24uwxbrAq2AWp5RjHAjjRdg8N3rxsiz3",
  "key23": "7jEGMwr5REJ6yBgTXzZ2aKFGHGAccXcu6KfQDrpAwAw8aDsoRr5k7xVkFh3xa2jNCovn3DS25P34zZjgYTQ1ZnG",
  "key24": "yR77rBJqE4cBZAN85YYYrsMa7fimdSvZBZFgGZvC932V1ph3HsHCMvfMbuNVxfb3HZtnuzzPvnWpG4n6V3Ljo5s"
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
