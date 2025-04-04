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
    "2eVU3bVZynLFx3o9iDtL42qaMPCQpq71ExBWS5AaLK72U3gjnXdXpQgBeRgjL3UCcpEwebS5NhVxJzvV68GHwLAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1nQGaA8Uzq9L9Jk5fMemPmT3X8kXWiruLwwvCodqqfNCBU4styp21cH7RJXBdGuzVyZJCfGojp5qbtRgdNzCR",
  "key1": "5qQdUEBabnmGhfKRvp3cEWWshoVrVSEVoQ3epUzp2p7jdbKF4PmH7phJxhHYisex4SYAT27EjBoGaHaVqnCv8Wz3",
  "key2": "5MAZdtdZc28YQFbaib5Zx3pcqdGESnSL4dtm4hQJmVSXSuAYEfbuaPzgxcVi91GPjLxwUyjy2JR19ifyi74V7xXa",
  "key3": "5xRyar1MLCqzgzprrcxg4pup1EQ8U2XoViEdAJyLPBQNSJ5xknPz1pcnzoViTMe9nxpzGbdDynmYyLRnFdCzpCve",
  "key4": "3RN5saXyY48kMitqr3jiiyt6Z5So1E4P5BnPrpzQ9HBmncfpfzt2eWKaDsqe4querxd3GxYXsmd2jaP6aLJg3Z8M",
  "key5": "2svnaXMbcT9BbFwqbVnMHJqLa5d4Woc3umfe23m2gFNFAJCVn378F7yMepfA4Y8cTB8XNXx6CorxVBUVMurx6MzT",
  "key6": "67CZ9Ht9khhoyNAGjRquGMdmyfEGPj8cPcvZt2pRe9n1AR6KTqCNde2wFzMac8Mq5WfFieHEW6xHa9G9rAsdp9nk",
  "key7": "2xDfReNQDxx1qqcyArzzPVQRyVXEgEDumTbn4zBayFx8V61j8pK6jkCLwmwbgPdgNg7tgq6JmyTtuUGZ7hZc1iBc",
  "key8": "5mxfrveyd6BXgS1fCzmmTRoJtyPjwRpwJNM9ESkrLATAfiXh2QvzWSk9qN9QUCpsjeAcJ5dVHPgC6ni58cM4ifRY",
  "key9": "4qrDPxB1tCg3KjfenaXrddBBTBW28j6qtrmgStHWfxF59nq66dMX32oNGTcEzQfMWNx1aLPWviaDyVoNy5xY4zJw",
  "key10": "65fnmrVn26AogdTnNor2MTvXWkYJ43sC4Uw2Jau2kCmzv5T6x4c5Fb9aydigdZkgiwHUjMXfJZDYb5tGG7GpgVRz",
  "key11": "7Txpk9Emn3sUMpeypp99M7SXs5aU4naGtmpk5TD2F2r4ugSD8eLZsEF3gdjRDJMs84wAEsNsbU8PCrjNqRFsHdf",
  "key12": "64YfsoHj8h8udRPrQSTXFvcnCdFs4XWEHSc1ryZiHac11Q3ebvGtZufW3WqFkGfeMczj7itN7YSiW5rY3gz5J4fF",
  "key13": "tr1kWyaS2q3ZcMJSnjTfRssxhf6cFuPJyTcxFhw9wnnkqynXp1zVeotN5DazEyoLJb8a1TiDJxPvafGhiXzhRJC",
  "key14": "cbuqQnCYadwQ8zPvAPy3zHu7e13NNyznxmU2UhYDmxq7btGKsvqWckKRiQBwyUxWYPVTFfQPbbUe95bEpVfgU8V",
  "key15": "3fLDZrvfzcbXobW64z4p5iCABQjiRbbJu6FUQw9W1tMEEB9w6BFu46PWiD6HqfrWyVNTJKxWFZb9BNT1dtBbupNe",
  "key16": "56Qkm2Cv9Jc9s5pHx4WkwgsCAdjuRojheCe1RVXRR9Jdvi2cjvAF7Bhvm5zFnqydGTxSYb1VfQPSBdJjMcgCkzyY",
  "key17": "5EPpCe9xJ6vs982uHLhmaMPh326Xws6gY2Txm6nRVmeSZ1Gg2sSWaVZoWp6KKpE54FWGsigtVF3Vwi1bRd3dW6iM",
  "key18": "aEbvCyZA7HvfBgo3T6CxsuBdWKwNkMQc5jkh78vbanzwLkC9fitnKSMtGhBtdEy3wkmiyhMeQhEN3fQm2axpWqy",
  "key19": "4yU9CbKnbFDuggMd68UrqG7XZaFZprQvwLDEWJ1fwDBUJc727nBn5XyjnJKR5qAoRCwKzVTJ8WyptLj5DwPgPrbm",
  "key20": "46UqZ6FF1AvPKDr7Pd3pmzPK3EbZVPnjVLKQgySiJgzyCkRGiLfBvdBvQtLaN5BjRi4jzutLaACwGwCmPxXxiCd8",
  "key21": "2cc6GZH3rd9c27juPwqwioEYCA7YrSLhCWNohMNXvwe8np2E72z2DB3G6gJ7auPn6RYBibVYDSTkHmnyYyZhVmYv",
  "key22": "3cTQWqvfgK1R4D2JBKUcBX7X51aWq3n9k2pwiz2GPauNhS91d6S8dHskMyhAf2JLrCkvqQGjvWkryEE44zZQp417",
  "key23": "4vYqnJfeBHaBwGHpvKyd5U44w74t7gpe2JMWg4Jkz1twxpcHpVhBqaSD315S8c4ivowq6sBsz9adieQVGKktAwni",
  "key24": "2dxp128bYMSBfzmQLQoYf9Mb9yZ3iPiEp5noT953wWbrgeBzDBBDMVVbkKUZk1kj4cUTTvakfmhfJqxiqEyaeFhy",
  "key25": "3mqEocS9gsgf6JQehwSNSzphHNee7mB2xoxXYA94wJg2sYT8dCJChngWHGq2kdxPVcrLimY2t5xBdTFxNNarS6nV",
  "key26": "2g82cvNv17R9FaeVw8Kmv9JRsjSC2vjnryid1CX6nDWmQ1enCfsnRzgMzRkmhzShLaezYqJ7arn6zqN9Sasmgu88",
  "key27": "4Hh8BH1dE5YZmi9ptKTDrPcWsih5uZT8xZmPN5juLLpCBRXBreHhYAt5oU4z1yhTV7jn8fakfk95rxyQ9GLCAWZL",
  "key28": "3nXNd2wKSSNvRFQxK7WsGtHpskzasxfkejkFRjhPEfZqj7DNQLXCiZFekU5AqVkresNtReMCmbfSMBtu34L14x3Z",
  "key29": "4oohTacKDZUAC9DTsKZbnTRmf49MjDGcxk8uj49ZseiNAShyMrWW6WR2RvuXfMBd69eVQxFgjWXBkhvZDfHHKWhH"
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
