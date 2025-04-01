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
    "5gUA78dYDDT8bB5zvigcdUvT94MonxVnJnWWGPvhojKGnG2Ecd2c2yhiPvEnPNobo5YZNbPTwEnYVKEsmpY9wDwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmLzv1cjdg14gaerW867c2mVmeiwBtNPCrffiBfZWG2WmjeKEgvhz8mDhebXd21BtCfRTuS9GDNrEjVqYLQbEHa",
  "key1": "21nRQyoPfjw3oWjErSjCb7YEjyz2sh1hk89JNSz9atZCTGshufND6pNL3MYgS5ujaR8MD2KDA73eWD91F4CNi4YV",
  "key2": "3yC7xTgQ43GvUHkfpXPLi6R8dHrXimL4yicRSrZVjfJtPLcdtiGbPqUih54ZeQsZkKXSG6eUjga685CtQDgmbcaW",
  "key3": "2khjN3hcQrUXYtb1xyLAGMNXSQhLrX49UG16ZYsGXjo5gNkyo3kTyRVc3nSvxXaPDtgdZZLiPP8R4pPn5CtmTXHX",
  "key4": "44WN6wDwckXhyx93Bs2CmVkefkuxcMSmibCZJUPr2Ve9KGRrGHNvv16di3GQbfH7Cx7FS4A7tkpm9sDFNMJigJs6",
  "key5": "5d6pcv8YQuxW1y3jGMygTfVqyLeT963HgyWm8PBgkNrWypCXXDKRfuSMdKjPJanh1xE3uRhuypEisAngQ1qhUgtj",
  "key6": "4Zr54o6Hd51Yo8muEdiU97E6JdYhci1X5eHHDPmAe74NLCKfou2TBT3gpvxV7s34hKeEFok7HPd7QEiQv4zyGUAf",
  "key7": "2FP5biurfkSqBEAsAPzfHxQ63fWNPaCgRAzetqeUqRsvgv3wuuTVknbLL3jpFHZ1VkoXFyTp8otZnPBN38s3fCjV",
  "key8": "469xKjADd218RcosL6DrttRTnW9NqELJ2YCqrPotMvXuJXRMfK6Bo8CZhxdpzhtGYS4uxttsXmjLXRvM8JqwVFbM",
  "key9": "5Y87XBGuMbKLnAkqLszfbNJ6QUVgoUj9kVWb7e9mhm43UjxDMs5dz8SePYugBx3MTKwJ6Zo9HPTHcevCfXoafd5d",
  "key10": "3T4jQveUGg3XmkKFJPsVad94fPqkHhzFtLCYh92SN4ymc6ehR6WbyzEfiCbNQdcPv59NLudtVE6YpLVGUiEtdS5K",
  "key11": "48ipa1xn6F85Wtg1hLbLs3cYCGaY8CfG7HvsvMeqLKfKJLziMHUzSm1jT4Vkn2nqeaPdH9YbZuxt9DDBqpfxGQSm",
  "key12": "5q3hPUk3ZPA2Yd6QHeEW4AXnyr5hqUbqpgnAsmt3c8jCVJwUgeXBNYoYQua36fcHD4gY6MBc3dY9CXuARqSmzNc7",
  "key13": "3yEdET2MEq36uUy1njzBT8cYWuWdmbqCx6VufTWEuiQMgk15wGTU9C71vfLvp4CGEa8aJCZuxYMB2iG5aXzQu2dV",
  "key14": "4PZp5L82LhAYvHEAVHPvsXwDokSEiDdhQcWUn2NVaDBqSV3cUAQcVykWDerTscaEL9cA84Bbuc9pfD1HKfFkQ8AR",
  "key15": "AHUYoTqVxiwiLSapirnHtfhwSG6GaWupuLNA2bVMQfE6yCvNKebTTHiwZfxkChYFmeEFQLpHKwJVWe4P3Wjx2zz",
  "key16": "4VJMxx5DNFXwQLkGSkNykispQdzM5AVmrHA7HAjoUc9m67z7e2DFtNMxxbN9x9kXvbSb3B9oJq2xNbJxioJsMPqF",
  "key17": "61RbPJ25PE2scm6jxhKoC8rzFso7e3HCn96p3UJmWij1CwGXdAMLn3uJoR7EaNQnhYuWrocXRi7jsXiSVdE8U7vA",
  "key18": "3EvfxoCY9U9a1cSiQuopbuKjpD5AUTuswoA7u7xrSVzDS2LdFY52MvHvzqyeZTkoGoeHQmK4CNKUzEnHhNW2gpVw",
  "key19": "bARqhXyChN1uHvhCRMSz6FVKMxRXWj6MB7M5UuJPCf3AZww7VURzerDTqLBdthKyLA26eUM97jwdn5nHhUAkL9w",
  "key20": "ZCmgMzFDyMgWLGFT33vZWa3ATCsUyWz92kmGM8C7SXTMkjNBgVDwVLEbcYwpoqJdZx5GS7SSV4ZpK9xrQMkASR6",
  "key21": "3P1eD6PYWtutFBTC65dCanNntToyLiahdA8t843ABaTmA78ipLAizovJAs3rSjE1pQNojTHo5nu4rBdUTGuiXShR",
  "key22": "3u2M7as5JpP4sUjWFqAAD1wApXiPSgGbMUS6WBkpyRgCRSjPrXoc8sAjwTyacxihUWNkkZy8L9VvpjgXvssTPUJ2",
  "key23": "4knBn8wjm8pRZuuhidEwjDn9NS8q6Gftu4HgVSVh8bQFjC72Vc6NH2aeW5M5ueyX1HLXFF87eUDxKYDUZcToMWq3",
  "key24": "W7fGWA4B7aAoCoc6PC9qEAYvpRuoEujgJdKHyhC4o5TeQzqZAvcBbfcJA2sHwtkh5iyftHqQiL3gAy33pqD7hJN",
  "key25": "3X581ChwmcRrCRF3hur5SQZ3Mv4Y8D8ZTqmJHmdsSLe9UHDgJE3iStdwCjGCaRPimzMobCQxnmd9mXwoFgGLMoRN",
  "key26": "2AKghmDF5bKfFvsK8o3traYU5RsbC8wx1YFv7H6mzs5rk2xT6Ko4PKZtWPvw53BLpHGf96LN788oWy7dvM5gY2Tm",
  "key27": "4FdpBZo5LJ2nPBqWasVMspQFtXZGZkQNMUUn8uYhAUZmQDq3NCMnXSv23khXCMxdrWhTXqQKjvb824fCj1s6WcGB",
  "key28": "8ko5uiMBq1WtDRpvHJhJ7YBAvpqgGqRDA5ncDHC7vpRAu3WVKuzZLr2drKeGQihWjuw5BthxAG6me3yyMnwze6v",
  "key29": "Wk97AogFjd9cwjhfuGMXUt8hYX4S2vKrdNLDGK6UukRta5wN9t1p1Yh3s6n3ycZA1jFKNQSeFAt7P3gXKnPJARf"
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
