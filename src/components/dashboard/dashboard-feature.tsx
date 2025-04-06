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
    "5c73o3Q1y4XE2sXz1zWgSKjtaSLmXQf3A21D7gqTX5be6Y9jmaNp3pS71SEo6YjAqfqeV9VXR54gpirdhuTATPvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzjdWaeS9z1Lm669i2P7KYzXrzCrNnefdf55jHLycL1qFpT3SdHA63kBfPMuxJLoMu2GTKpMZmyr9hFB3nxdo9f",
  "key1": "YwMHdZhCiTXmpqHNjP78WjNznGgnivjPYCMB5mkQfrpFq5iR2X7dwLRXvWZWDwZLuBNKNEGxiGqM38Rp7M74sTS",
  "key2": "59xXQtH4ZsR6jtZ5ScqTVhQvHburK1bUaoARA44c72FmkuN7tMws2A8UG4bqKj7qTo7k7662PGLWqUZwRiCwcfMH",
  "key3": "2Gc6Ee5xinxttfnmDHw3vD1dtbJaHPLfefGaiCGzaU7pbtAWYhhx3XboSp6HmBFRdbpe7uhqbN1TydjRCGR1KZ7g",
  "key4": "3cyRH7V3A1iwvoXZrvc5nLjKsgjzky7WFT3WDYebCecMdGPuSv5VnNsXJCQDYtAkCHe4ispdvkjUwz85ZKFt6cp6",
  "key5": "64H5ThbEQPUCpjSsNQZfJxYBxfdpGJuLpKhVEtfD27KMFqVSAvKd9mLj2cckiZ5LWCZEzZ6FRmLKZPWAwc6fSmJP",
  "key6": "2G3UKtm9ScNvEkU2hwqfAxPvmraqLFrJ8bP4LnA23ZWyLq7nYZf7TEQvQEPbGP1p23ArSjTduE6En1HBvaaDmGRR",
  "key7": "2RWJJy5AwPrTghiwa4yL2TLpo8VGCVjS2AnjNaEyHQRVD5CbnDpJjPoBUEWJqD8q6FAGK6gg8YxsmQ7MwWPNy7f6",
  "key8": "3QHKjApvWVvHqA561HkowqQVhWZJ7AwdYveTfoRARpk8a27icmuYu4c9FD49FLtjucJxSPS1HkULv3wx3WUV9brr",
  "key9": "4BxNaJ4U9YueJCfPsFHhNhJLV1raZAAjT9ZNePm6BHuW8aCF66WgLaXnJQNWwun3k45WV6Do67cxxhwhwBoiiTt5",
  "key10": "7C9brLM5YKvLRr9X8BH2VA2DFRoSMJbmGoAgn61cabDQSQoAHnSQ2Xib1AvVmoQbgBnBzzS6nonFZMAZdmaHWQH",
  "key11": "4XozmGQd12N4HXXdWAGpPAhZoBeUbGFmNdy2zMTt74HNK1fXqWU74fQbnokdowVCXMbirZ55chWXCpgebfC8zgxS",
  "key12": "5xH8HdMDGpQV1Eish5TGpghqDSBNSoQdd6nh3s2yizX9GYvvwRSDy7MjjeT2MFA2Hh72JEhjQuuoZnbpB4AkcEQF",
  "key13": "31hELoP5CDZR4bFp1bemohSdc4hkQbXADEPxcYqB26zYRpeCUuwetaUyCQixfhaiw1heLPxftg87MyM28u6J2wcx",
  "key14": "3VonyVABeTMPaTkvedzh14KaDz1UBcdzytcdrAGF6dH7gHLVAejPnuY7AzEZTsbMPHru7Cpvd1FRFLGX4X1hKHnN",
  "key15": "FTkpN21NBoBMm4FW7VmhWEqDKGtpbbhPaKkJL5HFjeLZR97tbgUWJs7ceXkPmMUWm5A1Tkw1MgheoqHU8i6GDVu",
  "key16": "5QgwPQvW4HENeyHGvMmpYPSgTKpLNyhUa3rZUeDSyBTsXAiJSSVRTUjq4XhRe3CpYTJCshczaGNPm5E4gkAgzvNT",
  "key17": "3EUEbAppaVhT2MDm9Dynmg4Pj6S8nvd8krqKX8iMnjzLfLsxGjVQRTxY8kjcpJSmpQyFusEedRR7Nwx9wWwFMPAP",
  "key18": "2aygqbRhTCR4F5fFJM9rXTE3Nkqyj2KBYBrNi9XnJSTdFJPWZW5uus6SsBUfnhovYEfAFS8kagwqxFpA5DK42MKV",
  "key19": "3bYWoFd5GGHw6yCfFNovCqRL53ZZpnd9PCTJQBzrzq8g132kaMbaWXxk2UpbwREvKeMgyQRPSi67r6WN3S3F3shT",
  "key20": "29DwLrqeRxBvtGdbnU2RVUjg8HGmULhATDukQhf5k9VHZBsbiN8HNEuUJqJ9SSCDir5qorPgqx1pTui8enwpmkAs",
  "key21": "2xFnUdtiizqvYiLocrzL8Sftp3ygRTTRFWq7qhXhiy31B114AdUAKX4c3HZPcU1oaPD9C1mdyu44yWpBQhUg1sso",
  "key22": "4zTrA3XpUYHd5ReirTgPDii8keeSXXpV2RPpAuhoeQjPfWRRixqys5TrrmtX2E1ZJpQVXJGpJ55HkGJhxi9bqfgo",
  "key23": "5J7jVMcN56iyo3jSUsWhg3owLC4J2FPo18bCbZuV72J1dMLiLaXMmJAs73cuTowCqEqFz1HevnmejoSuQv5rCqsP",
  "key24": "3Yjatynzq7Vz33s9odPpYw2dLUpYkCyv1ozARRbbdxrRj292tom2Zxu7UBDGjD4NuTGUsJkYfiP2Yeu8ohvYmRf6",
  "key25": "3dxbCv1NL8ybbaPzGGgvTgK8PrVEbaTwvZrtAdmqAKf8xyHEEGQksP8vYfni8XAhhbkhDo784d3e94oM1ddVuwDD",
  "key26": "4DEF1UuQgqE2vA6CofsUPL6UEEtciXg9kvbaFwd9emJ7e2FCdcz2p2sWGBnTgw6hKg8dduGikaXdTBQzUgikLLtY"
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
