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
    "4JLyGgjEBnxKMrAAsTRqmKdH7JGX1wdWvUDewezbVM9KDe2W1NWrA8gHoF18Vh6rFsy6J1A4Qjg4aGW9qN6snPJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hb7mYBG2tqKQ2QmHSBWCs36ZVyjokntWPijPAAc1eAFSS2BL2Bh2NKZvYpvBi41HExLxnsenbNFirZJ5358qGB9",
  "key1": "5GUaQHLuQbGbTZDGv3yjFcwSeaB3UMCMS9te1fc2ndFWM9PaTMXvGn9B5HYo3Qnq3rVcytMwBRpHF7ErUvkjT6L2",
  "key2": "GzuQD9PRgogN3gd3sjBRLCeVoMyJ8hzW13z7tWwNeFupZRdLMUUCF32cP9SpnsU1dGAtUpazShDdS5Y1AMeqU7h",
  "key3": "5Cpt4BKgNSazHbezK4Krai2BGyVVox78jpGZoL2sJXTJFttDYRS4YAy65N9FVjDuEypxgRtAHqA8yWsZBYmwH4FD",
  "key4": "3yoKGqnRDfRAaBNWJpRhS4XzcBwW6HuyxKRRQCy1L1CUJMsoYGEekE6SrqJ1Nq9jnevsRsQPpf4ZK6vGmmnigXSJ",
  "key5": "66HhN7pdLpZq6FBWeYgATuCp29kuvRneHUHvr3dSQ7S6w36n2L4imaFf8VrEvR2ZLTsF8dfD9G2XsuphYfd6CQfx",
  "key6": "37yF99MxmPP4zfybRTJJ8dwKiMBAoh1i5NVWBPTNBtCbuurcCYvtWkU2xRFZctrZeUc3NDLrAYMRXUssvwytMNBh",
  "key7": "2AJ1DfZ1KSZEQGbYSPj3GYkf9rdtEpaMDwGUcuNYjRn1dr81xwCvFQUL62wyvGdNDMucDR8s7XMxW55J8cmZcyhr",
  "key8": "T4RmGh3RGHjydvnsqqhwWwA3jp8qGwVsdtfMszpXZYxLbgYUvQ3sSfJ81fqUJiJB2yc8Ar15qeDtTojJ1JvLW14",
  "key9": "3xHuwNuzftT4VhHxtbVr1J2wjEuyqwQhQRcVsy4EFfevXkAzmg4FSp7JCp5MUFUKPn6MqfG9fHfpQVMh41RxaS3a",
  "key10": "TfcH8aJ4xkVveMzxp83ju12Xzmi2M3V1r3JUtNm4nxAxu1euGZgmAqrLe4PFQMGhrnuS6YGv6Fpkksyq4Zfhhtv",
  "key11": "4SdroAkerHsTNoJwwnWerQtF28Tyo7j8Veie5UeCXg33K9MCsspBeFa6ukXFRVgBVjrAparZMKRazD9r8hs6B1uq",
  "key12": "24A4y5aGJ5cJQRZj1hZDfP33ywQSTzZ4tac9VN7JJ4WS4VHe2jgm3zBR2d5XB1a6c9EjBwKtwtZqXnFeTvyGYZTF",
  "key13": "4PjzaUoHgpVknWFrTJLTrrYhgL1uYPWvCRTgbSv5yHFoupasqyLkipKiyc7kJ77hYK3vWQdzHxLAjurJx4j7VzRe",
  "key14": "42MgWvt7Bpu2p1D6YdDakpnRv9dmsBH9rMbGbvy6tGmoSDtg9ExScPGX766pCddEntKZ1qcSHHgbnE5RWxFmZdKc",
  "key15": "4SYEjtRNpKYaArTY8rpFmJoBH7YQnjdiDVfMxYmfZv4sDVbVY7pp5s63LGcW3jp5sT37bJXguvEDfPAtJ3mhMVbE",
  "key16": "2WPx3xsDanRDtEeNo4EVSGXRJCyaqd9XyMY3WGHxGc8tYrEjR3Wpt1q5PseMu5h9qjVprA8HDU5kAJUBYbhy1XKq",
  "key17": "3FgQVVxjJntGxbfbLb1F8dZn739tVLauH1K95q2HSYdtMxC7xnN5wAGShq2raeup2siKAdct6us3F2ctMFAaJmds",
  "key18": "3d7xXMwEJ4DUrDc7FTNjUXaomrQBupNp3QqvB7AJwWTgqg7P2tbXdVcYN5P9RSZE9UfqTrJaZ7QabsaXsXywoquw",
  "key19": "4m8u2a9DNoXMhGrYEMA9cdw9ZCev7bAgdeZxkQGqtxDq7XuJF9Pj4BaRrLC1SXgctgVwBBaUTMYQjNBguCbkYpLb",
  "key20": "5mMKiH46dPm5TWC5T2Nuf2kk7Cxdnt6N9ahA34MhWxBNS5txd2WvMiTfMUQHLYCsvqbE4dvbCoVyyRmYvrY8bWLa",
  "key21": "xBX9Tx7tcFmTjPubcAbiLA6S4t1FjtrFR1B3X32KSM72oaiJRQeUg16d6kwDc3pfkdw6ZGGCHwWWtyEhwejePNV",
  "key22": "2iwEVP7tbw7w8zrQ942aHp9soRp6Y8Y4B7CmvWqRgXMxPRjAdTLVGwLdTvKdUMVfSMkvzPddsyivAvvsCFKCiHCd",
  "key23": "5wEotL4pUECfwyQvGX1rNbSqfDNMUDk3cR8d2AinAMEHPdmwuv6ZX45XXyGuxWNb8LnhnD8YnsubvGreMsyy3NYK",
  "key24": "5DUETp4w6WV7TBjqwUAP7reqTpPQpWWc9PcxPWb1ush89vSfUThvzGNDwoaVvuvpwzaCBCfXJ3LezYphn14PPa6",
  "key25": "663R9GPbLV7XeMRdUpKWsHkjheiuhM3187zfW1JQMoRNpSKpw3KBR1Wy7M4T3SufsxYPLt1N54NbgfN92L8yG8rk",
  "key26": "44oPE9W4GFG9SDoJYenW5NBYzo7h9BdiKQ9pLdQkPTR4UqttyEQ56iomuD8tBEb1uAM2hEN7FNYDt9LkyCqGVawR",
  "key27": "4q4mbvcH5qMHUXrZTVD2cggL5iiHEJDuwgu9i8BotSrn2jueva7cREnmA9sKKXiE7CeSY1WsWp3puxnXCnhqc9ar",
  "key28": "dSZG2Zx9yWGr1dGJQSrLv9hccrsSVPLyc3drAPAbC9QDg9gNX8G2cS48MeSqoukWMGXGbbUejWFGGoWELDN8uZX"
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
