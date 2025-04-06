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
    "5CWay8sPZMcCTWohsTHVwKfMagm9Fr1w3Po5VxkL9FQQ5gXozQmsZcvDfP9zdzZiTv8uuUpyGD8rsjZoq2vjzvpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THta78nEgkkRENRFf3YwLsEqzuf6hW8GzxBWdhzuctukWUDAMQdnnHae7gXBf5WA9WngxZoAtsYYvfZL2KgtekU",
  "key1": "55NmPkbpnAvEREPWmjy6ZXT6ugp3jwhPxqS7T8UuhWyPn5zfvpYNVhM9usXLeyF4yYQwYPQuujpQ9RVtJJwrXFGj",
  "key2": "3smWetWJo7AGxn2uRxt7R2WrRxE1zLgLY9YD9DVb4Z7T39p8R4QMA89y8s6cwX9CEmiW4fZpRhAqZZGLT2BfVPDf",
  "key3": "3fa6gaGB92biZ6XqUmktKxXDhfRsXAvCfhEsDicX6yGz79hCmqVoT5bTkf5Y3eiMcpBDif8DuopB6Kf1GKqmNCCx",
  "key4": "5H2iYX1KzRWidEJ3h4ASZLmjSRUstzUuuxi3LjXzpPFH1SQQfd7Y5jLB62xL4FLwRn1yT4mYjw3qKcszvz6kauPM",
  "key5": "4rEq4M8MbkRhet8mgPtfk6898NW9Hy6BCB3uRX5C67ef1XD2VmMt8wJtR5BgnN1cBySZZN8Nm6z6iZXhukCpqgXz",
  "key6": "2Rujc1c4EYrDEPvuGCyaHdZ5ew4XVq7BmtE9RkxU2yWSG5c5DZzNDEK8YHMSc1ZPCLzMVX6WtNVNRh55hpN5RdTG",
  "key7": "5JtFTp1bV11CVMS2Rxe483zpcv7RKG1ML4okebRC9cLu5Dy9CYTR7y6yVKgbN2tkXbt3A5F7sCv2s1r4RFeEA3cU",
  "key8": "5RYZkVZ7rM8LYevYfArqbLEgRCwvDeYR79rEzkttvmD1LW1hSQgs9sVg5Vw3z6B8wTHTADvenHyzuAgBWhiSgCSL",
  "key9": "5nQsouKkXYhySSnypkzuybXxG5WqPiRQhBHkkVivaHtyYSKNzPcgrZ7RwJcNazxhQYHDTy3mK9qs7w3kYARKa7jr",
  "key10": "4EVEBJTQ1GoBRiMaFWHVPScaVguMHQXwpCj4bHtcPZp7N4FQbvAnYonRSjDktUSbPxafe24seqJrGLPGx4BVbcUE",
  "key11": "5nEgVzpM1LAjjAYCwwQsuXgct28gfjVBwS5yjpiJdyoMSysV2hknBeQp1cBArNYinCbrZh6KyeBCgR2YqA2HTxDN",
  "key12": "2zhovD7k4qMw3m3aPKC5tJH1NXJZdscvmmj3FzfZHLc71dRmmJ56b63Mkiqe3m2NwWxYHZ6JRgHtaZsvdzWZjztH",
  "key13": "2CeSY3fJGtpfDFdCo9AAkeCX9YbEZwQc23ywx95pqYEJBysPEGkdg2UqqzPAZySCWGLUyoM7F36sKKJNQ7H2bSH",
  "key14": "3iB5BVbiJWBPjvDm3Z1jtmzXVjvsV9hQ8Xduz82mMUyjvq197Kqms1pkgM1Vya7GPsckqi2qwBsfiuMWHx9UrVq7",
  "key15": "2ZcaJvjUxxFEQAoXDRyMXmVjU4o3nMKDVGPHFtv9XqPGEki4FPTrRpoKuCNedEKPUFCw7Na5Huokuyp16GQ31Wum",
  "key16": "58KVDNabF9JcBtSk2mbGLWwBYSj4sn3bBQiUsg5DvZXhtuS7ZU6mt6RaBdiFgb6x9R2QJDmUK4rAaAAgq9Saui9d",
  "key17": "5kJTif9ehGxYuY1XnXTZESE1Aypic4SXfXrPZMWkfrpwDzhGvaY5QiWvnn8Bo5uWwSENTtPABCBbF4EiF7T8JoPG",
  "key18": "3cANbyuasqQcuLmN4DKk2xVbQFzQcep83aDN9uBNmeov6Wo6ucqMdpGvnxyyPCHPzYDUq3nkJJcgVGXpb22VbvKr",
  "key19": "4676oNbhuZXGwynpMorKiRs6PmHE5tCc8nyXhRyFt3uJ2GepZ7SKfAn82LrEVauRMqiHHzdQHNDjhkutrvz6EBNy",
  "key20": "o4xPCh6uPFfdoKNwgVTZcXQcqrBaGkYGmZhk21e7rzhks6mS3pXPXXZrkj153iCW6CwysJcbtfHV8Sjz72vfQes",
  "key21": "5R2QkRq5MQies2m1Aq8VDXbtVQE4wEcCBXQZ5xJW9r76NGZzijk3kbA6nvmQfr1UFKiNpLpRR4K16ZycuGK9nYwu",
  "key22": "5JxCSPjx6U53BjnoMiC7VCSYHBacykfn3v5fgPqUFzqSwYoPF1bgLjcwCtZ2qjmc1v2x2A13p1qdcgvZaTzGigDN",
  "key23": "Z5iPN7L1iwu4cBdcguQn1dqfYuo4GoW26wni6w9rZL6xqwNqs6veXuCwrUeKEwmgPNMHqtmRBQKfW57YuEmfbPN",
  "key24": "21VKVv6kHoEBAcEaQncgqvSyN34uoESbfkqXnjnrhXGwjUtVGktCzFT6ofCZqbnjxE23ScB8J1mnxPJXQe3TnuCy",
  "key25": "5KeNfASzoo12Ydpqqt1o8XCvkLkShoLHgJjgZLwwiECvAfwbFBEYMyAYfEGc1uyZAPS5QVydftGuhRUphBi7CZXs",
  "key26": "2XrzUQS1UKydkcgCfaNzoEQgYpVU6zs8xMpL75TMCaH1wvooiJ3MpxRig3824hL4BgSpgHQZybbajtcNwSbcDjLB",
  "key27": "5JAHXKSc9p2GApXxQbthgHCSkhadprcdhdd2Vn9xJ7Ex5BEstzzpwEFvMUg5cPgJPhDRdKw5HFJRzxdtwJFikojF"
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
