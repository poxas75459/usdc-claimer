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
    "NmTibrDtkP1yB3cuKK4wmANtMSaPi35BY221NxHfp6RKeWpjJTVqKj8GJcaEyzvK6V7bPFePE1CEU43x3Chsqv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzuUkP1At2spw9CspfrP2SKo6VbKZSEYbj4od8XTFcCd4nPXCmgeUPwPoNBCt5vmNZxo7kQqF3rjixS1yJGQbMB",
  "key1": "5vEf8iFZWdJEgWhUzp3LyxauNj4eyiCYpKVYG6xkvv1a74YZ1xrT1b4b5fWpeKtSuC7CoBTBk9icSQSruCodBGCh",
  "key2": "3NNjkTx8wZWdfWBkuJkVN79bAcDfrCDYwG3PVks8mNcYg4tZL9xoKHvqHZf4VvxtBUhxj7odgDBy7zLxQX6k6xgh",
  "key3": "5jDHsgqguaD7EiykBAgvjWzz2zXvRjdRnYeAHeSjbaLKq8fipzQSvwSyjBE6FEoNQ3G11j8gJjoZahrbUAib33rs",
  "key4": "2kyN5woGE2j5MeWNh3UXguebp4by5ChUzzg2gP8NaaWoYFmCwJZFoY3cajzEjuNSDqzryGiGtwgY9NBWJDpuoncM",
  "key5": "cztzmzHA9mVosE9bAGMFytSR3SgjVskeDnrwRhxT7A1cX3P8agXp62qeqrBgbdBFJUXz9j4t1PmutbNLJkFg6Jr",
  "key6": "2tmLDYxf66C3to797MAutgpJYRgX3UiTMQNyPukDLNk9pxyf8fgxA5Hx1kS3QM4PJhPdgogF6zKbdKKKfvNiq4BK",
  "key7": "49c5WFxVMN282aTcaA1Y5SFxwRTwgda724dMQnTnqbMdTxYBQpNb57SZNcV4zWcdywFLmKZT8zXn1piDAZFMXNaT",
  "key8": "pAXnxrVN9Bmtfhs4gDTL3A5eFhF2aDapVy9PaNygy1MM2WM8MZMDYrrFLpuWFrTPP5MUsNwKvno4pm5FCwpAog8",
  "key9": "212DQWN6ZjAxCxiwwCSickHgNuBEieNoVJy93oGbKxTBqYNTfZGxAHoorAy9Ta8Namvdbgs16ycmoauMHi5gmbM3",
  "key10": "3WSMPBdXczFFAPwWgS1SD2rXfCWVDcutQgyXbsi6wKJtHy7hTUYA5qRZg466d6urAxgFBFxTXhcA4xuN7SxkVDo4",
  "key11": "4uudfB65vcJQrBEJHyzeVnGWyhnUGLe9eR9e3HXMG7dkqDk7MhbDjiL6ML71iLUj2B9iE118Fh6yE4GzLjZ3KdBZ",
  "key12": "GRnCzFNqmK5Sosjyv9q6tdY6sYh7nY3hk6wBt51xRjygGxwBNGUmkPLRoU7QTCDCgTWQHGkKtwqNN3nqbQmctbX",
  "key13": "D2vM96fDND92qJsNn7nuRUs8m4cXYgfWBCvdYWuzaUV52NGdYu5vx7HfuHxzqHtrJitPNfWJZnt8BSkY5ojhNpj",
  "key14": "3BQ2bRhkrwTDoUvWgdbC3M3Z41gymFEbDCytiVz7TR77MmFEttL5o4YMNZnfrTZUZrxaDnKD8SejiTvfNW4bpQWT",
  "key15": "2VFuuDHMk6R5abUJdYZs1ujkJ34XBEgLbXEr4iE4CPwQjiFrSXFjEPHdAERvVJxXwEfwkVcHDRed5QqLMJfhZzUB",
  "key16": "2GaTDMdFdYPuBLZVnvW8hnymzMxDJ4NPnea28fYNyemXFKEeQVbNwiL3BmXBCtLx42pmMcaXHVmTKV3MRiRKCYpT",
  "key17": "2jDKX4Y2ix6yr1pohr17uBhjRZEAZQda5CdEZUkL8ZDAeYCP1jswgnovA8RfEvNK7rCexm9r4qaL5mQEjvM4W8VX",
  "key18": "vE9fjwZRKgi9qQooqjqT45w6jcNLCuRxw8K1nuv41JkupRHaHu91ifJxc2cLJoj6WLB57EjzxScAFV2PNWkjUro",
  "key19": "2QosQf3EijmgE4MEreUBRkuq5iBj3RuwttmYegVJ4CzTziZYtgZ9sFS257RvLdgcHrgFHm3JfSmkfgH8uVjH13EN",
  "key20": "3yS2xfkrkt1Eae7BaRrWBFVtHCS5EHRTUYmjycZENUq2smxzBJExDCmoYxWGXZWFRgzQmjha29y7XSrBpyqVodei",
  "key21": "2ZMJCGKaQrL1F66RCf6sQsVfvuVoTFZrC7QHX9BQS6edH5zwyBaRmc8Uh3P4hdEYryS6WyK9gobta93u1vRErPJc",
  "key22": "3NH4NxhrrLEuqWuWZ3bNuSq6HKEQCLAowD73Z4qN9USFwXfAnfdi9GUREWPNSxhPxBAsqVAVvznq86ryMogAaicr",
  "key23": "5kgTU53NG3YsJ6P82veWJ9a9v9fNj5eHpUC1ETgzj7a2aXiAEiPHrkmFTCtTnb9z75YRWm9d7ZiKGiGmWVuFinEE",
  "key24": "2LAvxqaR3BA4p9yz9u9uCdimrmJeeAvuMAMXkWt2D13crRkKi7EbmrDEeowQ1L3YXhjJS3nzYVytVhAQKhLSiMbK"
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
