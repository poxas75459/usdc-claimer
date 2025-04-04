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
    "2BKE7SBmpFz8Uf4ZsTUHiGJsV6vLyZ22bqtZFTGcv8asqCnmHbiNkY5LqFaPN1AAsPZeqYsDvm9eANXrZdDz2S8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLRnKSCtoSYV53hhcukAT1zxPQqMBMP4fjB1XLc73xRYKQnqG6cxyYqcewyCBsvCQnwtVpVUW5QzxiNcmDB4paX",
  "key1": "4VVHh1vNto2XxHJtstcsLtmqab4EqFHVmWGEu6dqc8eHL7bSmUPLLu84698ygBDvgoYfHqunKhPRAuoDUuPduQ5j",
  "key2": "2VfRfKLGMBoMzkjhQ5QPRdEydyYvBR9P4mEKQRWYJSNjnBHxfCMDpin7YEruqMvcCf6uCmyK7bPSbmwVCyefpckV",
  "key3": "3e2zFH5EaiR6S2FZTYJwAPfvr8DqacbkU6tRdCJoD6fQ1EBLRYVpNYFxbe8gKMo5zWMjcL1MSjvKsAMKzq85s68u",
  "key4": "3rfR3oKURzUW8YXa7S6VJMK1TB7JUJP8XhqYcDkNNkwLvAkhFcLitXf5dAZM8yzR5sxeUQ7Q1sVUKK6oGZaE5CwV",
  "key5": "4JMVvE52ww4XctAPFXpZQSDEKb91XH84koUwJFp8gArYtzjZZqKRjvS3noSBGKc85DeBy5KLXgU5WbUuTo1MB2R7",
  "key6": "5UU7SismJRoqLAQJLriv4Y8ce37zRzv2iDYpHvxGnBkThW9FAm3f9CP3DeYNL5JqBDTfoRyHC7asyMMNZMt19NAf",
  "key7": "4dHqsxbuxhiCcziDE8N7t3Ferp6HuwN7qskJMkGrNbjDthemXF8qRAtGgT3Nnd5fUhuoqJ8NjCNRVd6KvTvcnarj",
  "key8": "4cdciNew2FgaKakKbR2JGiVVpMoix54CAdSjx3S2zxpYu13d6AC2VEndboD59HBo2tZXRZE4SW9gFt4ofFyTo8ig",
  "key9": "5SnGMMYyTeaP6mcogxGM2uJcfmXzu28irfTzPcdpfcopf1y1ufx8iZN1d44PmtNs8Uzd1KVBCWtyFADsvfQRPh7Z",
  "key10": "3kCUxqqX2HdLAxZmFVAGtTgWio6oyZhpvbuwaSVP6prYcJALJ6XPn2fKoS96JfMRF9QuAvdb8CATscrXDHf26F3Z",
  "key11": "2PPqodWytCWSCNnVw3fTRNsNP6ZidX29ZJNssH9vXgmUyqmyHFFCMtkX8zy39CrkfjCZ9SuFvUbMjrjjBjUDdz2W",
  "key12": "5hQCkjNGeMg1sEKUgBGTRZngqVeC2cckPNDeSKetD9wmFjim9xp2yn1KteDTSP9LuojbcKrdpRRJXUnBb4ZiREW6",
  "key13": "3o1KRWNJ5Czk9D5GidRPhrCg7anj1P9XgJbEZe61xJ4fAbGedXGGjR4CoggwNHHrpL3iqBafgE9nx3DncWCGC1v3",
  "key14": "3NsFyBDLFybELM3g3RAgA6dfQyvKdwLS9uwDVRCfZZo6AYE3W7YRJkAk4WZngdzrqyTwnYG8BRJkHM82MFsHVw75",
  "key15": "3CgH7PL2m43HzruGL2npC2uGRpbRTBCt69bxrCP7cZS6GC9bMbyCMu51PfDWonKa7AcD97RJkEruSe78pp4Ls7Y1",
  "key16": "7SdtyKJnLbavFF8BjKDwLhRctAXgTR4FtxUkGCeHLdXUTBwWapMjCc34NWWFW3hVhPC4WfErTAfMUvBrx7DxcsZ",
  "key17": "4CUmScqH7hG8Q24aG4c7ZVLwLtgg9VAHyVsCPwMxbWV99aR5ufAbpjxf1wU7SgwVQxdsWHN57vJrfbQeN5pYRAX7",
  "key18": "3g1tmbihj8aYsGfhmfjWoYVtaeChrsdrpyU6buabz3HM5Nge4CZvtEPq8FqdCQVBPSMEwrYac4MrHjGtrKk5uSo2",
  "key19": "sDUueHjuoNj8QS5qerQxJrSkosiN6EntpiuwQf13GaVjYpDHk8bQZmspbJLwHSSnydGaiUuhuGxENicz6X61VHJ",
  "key20": "283UMATZrsq8tYPhGBXaTHJNNMBiagq1FH1wa1cs9WoudWDKmggH4q8KCKAGXV619tmSMBvEEfg753VXBFDAzDXC",
  "key21": "4Nxke5X8qvrqD5BnxPaJ4yzAYtZ8ztisD3Thtv4Kp6EwHtfcKPp5Bt2E1t5MbPbDnzYGQhiViAvH3DiGSD25jyWT",
  "key22": "5EhsQ2Zy9k1TuvyErjWsXFkprUTgSCxfWmaiex1uWwTQBa9LQX4AfPfN2nGXQ5paZmPdMQVK3aSEQuWaCSk4ejL1",
  "key23": "2N83qkGvmaEbk14qc5sQV66ZgcrKkQxdQfWLSEVz9EamSyJEaLZZS392kHSCXSnbqkHGdpKDqJSCiSiP5LirvYNr",
  "key24": "2qjmkeUa4LPyRMcA7WX12wffSTzm2ka28ZMMzV9wFd8QzeBH2qAneMJ5U8VgD9WviFrfBwtuJ1NjQ3XYK7bhW6Jv",
  "key25": "32AyzwbspcpFsDoZJt9mGhUcZfJZEzbXayK8WWrQAQhzZinVyMDiw7mAmzenrZoEL5pX5jWmRKx5ZfxdE6hXsP8Q"
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
