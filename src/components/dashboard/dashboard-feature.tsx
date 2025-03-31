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
    "5Mt9TbMpgeyYjzjYhrxhbAzTzSSfpUJk1RMFNSaMbTEZ8SaEGW6KXAyc2b9oa3Tpm2hZkN2g1desHynDLUZTcndX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dacavU79ShsLQ6RUoeiCh5Bn6Tn1E5YPLSeNWJ2GHsrdeA5W16Bx4cxaY3iL37BJpBjobibwt11SGgUiSCpe2Fa",
  "key1": "3xaBbY3s6fRCh3SQnT4HD7BWF7ZBUb7z87YdrGD55U47JYnBwzHQ4YyQpVohYT79PB4t4HChdkgDZ56JYprQUbx6",
  "key2": "2fQCuEhW8QxvFxwtj37zR5nxen1HKvt6YgNvJRVeQfbHGanvcB9u1RFotmF1hHiesfxGnbuHAss87KN7xKPZsN9x",
  "key3": "3GncWkM2PuHufBLj3zBQUMYU1EmTgDfNygdbyQvDEpzf3DrDBcto8anFQJT9PWccjYfUYUAWuGdvb5ZbsWtnzW7o",
  "key4": "cFX7kyWPBzE3teZnkwvjnA7eYpYRDzM8SZQ3EBdWmnyJqPog53G9oJwmw7jxg26m2nMZP2mu5taqTd9Eb3WWQxk",
  "key5": "4tK68syw49BqphEowuCBDwocd7Q7pKMVXLr23XAG9yE4WQzQSmSXV656nea5Az74TADuzVpM9CkmFERuUWEpzK2M",
  "key6": "4NtAWXM1BcxfzV4V2CFJh82KbRy6p7zgqnd9CJkqLHkR7TXR3YdKZFBZUfZTTC3GHKtNzVmikbheTiiD65JYCehh",
  "key7": "2cFhCGjz4S2N6p6Dh32ewevfTjzT9Pxm9MP7hzU3NXJggaeWmcLCUWi3chZW4o2HhqGpTHcaENzZbjjy2LfELdr4",
  "key8": "2GxLM5kKk6fY5FnFcXKTxZd6jTLaof3XcaYZXfVqcvft7KZmbR48Gty7WuGgZEMNyS3HM8hfoxFiUyrrLAqaEvRT",
  "key9": "6GpdXu1H7FizVumg57hTp6rMJYCWsEKpEz9Rn5TsD5WG9p5NLaDC2c5xbwhCtP4rP3RGJGVmdW58r5YtLvTjYTo",
  "key10": "5K15Vtck6cjEHaEUiQzsEPmKdTR5YNYKKu8EZbBmAcJnTZEfM8igxj8HZQgaMqu8gMvdgjwZQid54WkjXKqc6Mxg",
  "key11": "3LdqKDt7CURAZ3XoEPGob6zVvd3U2NfgAFTMKauVB7yoPTLPqwMPyRp5gm34FixMpDz2A8JQYdp5sdpBBbv7o1Et",
  "key12": "KL9ZCiBXDF2n4ucHoLcbUGf7rQVCMUZA2XP7BWMdGnJv8i1phjB1C85FQeff8A37tkbbc8xYq1baAUqnH6z4Zfw",
  "key13": "3c4fADiGVTfK7ukeYVgvfXhHevujD5BP4CFxKWoVgivQbMR5aXr6AgRfm8AKLKsj9RGe1RGTUyUhVotcKMdCLSxm",
  "key14": "3icZx6beGASgahEKDFbJVQqhu7xUx42FLZPXaFFKKGeFJRJQNFkksf8caQSTmx5ZYHqKmZiCitJ7XCMyHq9nm7C9",
  "key15": "5c8UPtYv3BuV1ee9dyMww1Hj5CbDSZiHsQ63bsMMhtVcPfdWVFnZfrnAbvvoUDpojCGq4kdXYyacYxvjV8Hz6Gan",
  "key16": "2fF4Uq8NyAfywX5FXJMLiQQQRLuvutDoqG9bxKfMDQCmQmsaYLJzgv6Ftnf2FLApUBT4Jms5C564pkULwhUydWV2",
  "key17": "37refb6nG5NUF7WHPnybzHekqPFqApyYHU3nrHgcgpj6YTYYRbAeqDdLVnF3Xec4HsyWkvS4HvJ3RKbxdkjLp6Dx",
  "key18": "tLVzchZHPsvqmSnP5xQh1ji3Hfqx9fJVuvgoMFN5wCouRwJZA8EKmof8CfqtL88od9SzdhSBinzxQw1MLTvXmqE",
  "key19": "4M2HkjUTW8urw7BANm1CJtCWAXi2n5uDHUpuxq9abLGqqQpE39V9T2AFnfdYaa1dUSAkBHz3VxjWVxyoQbPiohzD",
  "key20": "54KwvRvWvfm3bABJyTdaK9wL1Hizfp2jRm9xAuHWkhx8y71ktwhTwTLMdSWyNo5vxY6jjsHJKnb8ATY3hRNn8xC7",
  "key21": "6WBarkatas7AwBTyW2opZpFbDMZpwVanKXQJnrVh1UQ1ehmS8NU6cdJFgPqjJ25LDo6TmPaorVng44ivHdwPQnF",
  "key22": "VwW3LTvD1nz6HbEqX7o1Xu2bzUdSbW4Avwo9Et14Ljy4Vwc7fpR1ZXRvxAmM9gZt4ZPPV5gjTeaotJKRUqtHsku",
  "key23": "4D8RtHbqNkLkP8579T2WH8mtca87YGMGnadWfwY9gKX7PYYnvxBDPd3tkxqJtXCxyBxuQJWYPzfMd6bibRxUNkyC",
  "key24": "tMwiAFkU1U1ieXJmuZiU7RHD3zFv7igZRzKrNafuPfpyWyXNsbpkmfNrCkjzxG6ucQWrLLquZnGURqfyXkLjW1H",
  "key25": "tXiSmdRXan574xYatuao59k4WHDfiUjU3vTYMp2iqoewFK1y1iAW64s1AyeZCj5SJuWJRvGFR38oL3VZwfgAcyV",
  "key26": "5mmZNzMWrczFxLhFsgUAWpvD8euiHjTxPcRExR5ii26AnqZrbFNHrXsf8R2gcebu9GkEfUMHDqqjWD2q5kSnCwKg",
  "key27": "2658xkpFrtUeF8syg8jM5tyy7Lm4ZmvJXvcbAhP5o4Gopd4yScHjfEYeFvNyqmE3s9GEnbQcBuWQCfzWYZrdWSqJ"
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
