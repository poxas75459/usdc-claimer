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
    "3UFSNP9j9PAEHWik5wxoHDXnVznXUiNZkQFPE52dUwk5ak6YRYRk3U1wvSvLyPPXRcLArKmSWrW1gv15B6Wdjjym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jExqEs4KmvAarP7MfD5cHPn3vy4dwPLoNJD8EyUSFCvVPTe7Sqx937azRviqt4sGUu5pr8zDYWHoZEG4XPCKoj3",
  "key1": "2JikvsePv6ZBb7EojbjJobUJngiheVuqLPZ62RTvoXJCz2UFVp8FDbJAbTUqZ4GvthRAHr6SyaundpiCUdTXBCa3",
  "key2": "DPeUKmiaAgBfvrmWw4HvBL6Kvhboh2x71dZf4T8RZQDiEKDLKm4s5SCX72Ft6frhuUmiS2KZxH5HGKL8R94mJgz",
  "key3": "22Lh6iKADNNyS3SrPqgnpa2vsXRnoMCZ6sumFK6uKHmcwecUjFiV5GgVjo2wHbcFMugCPT31qZekwtcGrcDnsjYs",
  "key4": "3FY7khnTzptr1LCGhK2HNqscYhgq35JAxqtoxdHJJQxPKc9LBFiLBFv4h6dho7gkaAJdwjYXoNqVsH4QuhC27Uoa",
  "key5": "3hWnK64fRo6sJajhFxAwwgW6aVrCJdycWJTgGCLRT6U6nkAFCrKWcmJiub629CbLp74u8JNBgfPsm1B8Ghki5oXj",
  "key6": "2GuqCYJzMeuRBWEk5ztpRL1vPWGn2ZQbHo8h43jYNEXjVSAisJVM6VnLG7x8xNGKYYN13WgsQp6rSM5pN4pFgR4T",
  "key7": "3G8cwabZ2QBnwG7Af5pkh4wGJpJoqHHn9pXQ5d2xhqUdCPHwJhSt3yUE8TA8naeviTbPtdn3XRomnurCjcLzwwSR",
  "key8": "4Q9mfQRbPx5AUqezqPhBTHiCymEgtpBcqFZhTJgjXADAtbG2XdeA3aHsgbvT9XCXovNvPmyj2NekP7MuSHrFTQr1",
  "key9": "3tqga7eysvuLS8bTJVfXwkyF9VeQaWsLbRrsDRVUdXGB1qKjf8VnhHp6bzwE3HQGUWFSQG6GZP2dGi5Kd6DNyQiD",
  "key10": "2GGB1eDAnuLu6MMx1PkXFunihNKx4jWxwz7yvQZhzarh9C6BFEGm8QjNeXeTBbipwa3r1ZfyLUaGFSTq4fMGt9Bg",
  "key11": "4b9pNWMcqNLC5xqRpFhch7BYnd4RDpqdQWRZcjrhcmk2QqSgMMuEeyzzpmeE8vy4XPnWNxx7rQs63rF9fuoQE88z",
  "key12": "Bxs54d2qPzKv4N4SBJAuTW2m4XXgh7oXvZkwn39fU5UphQyZyPx46gVDmxKdDBxXhuaKn2y7iA6BxpH2fz8mCf7",
  "key13": "pXGfKaYi41cAmWrfVbt5sKs6GMLPFEjJquDCA9HrjwzWVnbsZSsR43yDyqf5JxqceenhPBLbtSR1hgBP6UWcEmt",
  "key14": "2GU5BcNQmLMcv5Myxq3676E8RW6VMRWs7aSHHZdtbFuQqBbSnNLbUTUJKCdFMMhYMh5Qgk5zo3GSYjxxf2hSWb5g",
  "key15": "3GZQ5dQguXavSET5ZA4Ur2BBmmfroTjhtPw1oi68NEfZXvibsbw8BeR4uyE9u4pdocpzFYCQBpwyt8Q6typXxivP",
  "key16": "HUUKNnwzxSrD3DTFBB1q3rWheYxjmpyS2ytfQr2NRQaWUBjXstud8HeWKw2NpLDCpQcdd8rzNFqYQqSYyq9LZaA",
  "key17": "3fykRebqJYrjSXxghZHo6dkTEDYc7RSWMcNqwu2aMm9qKqnkfZVkShuxyYKSjogPRym7wdbBqNg98CBqJJXY9tkH",
  "key18": "4xXLaaEFy4iXkJDQHkgNCpcmHEudeLV5K1nA5zwyZUoq9bELhTPvHVpDgPFCfVQB9pHsLvNdw9czsSHK8KgrdoZ6",
  "key19": "4Qro8yEhj7RsEJ2Cy2cyxG4kTTYK94HH2TK2JZKqvCikmg5wrjaH3n92pkRZV766hQ6AahW1mgY9ujpMYnCrnvT9",
  "key20": "ckFvPcaRu1jrtXipcQ9Ktk655PZzZrijpa19g9fwmTcU3tbjoBVPQ8NrP5xAp5R736M5CDNBobBTwwLt7w3bZVB",
  "key21": "2ZigjmXxGpLf7RyzvomVK6MgkBc83wDwebfqsiPq1WWhMSWYHLLndY94gLxhjeNkSgyL81RGVKViFa9eck9PJzxH",
  "key22": "2fr5K8tihRSuGW4MXnseiJgHXN5bjP9cVV1F2abETiue8fxbP94KAH11XHfGbcCoi2NVX8uQiHmXW4mr9S3NyU1Y",
  "key23": "5KCdgoZ4iMxoD4jdmRvxJcqpLYRhw9RBeamzjswxcZYETygACLMxrD5pfFkgFPUznS4QD6Ra8pD1j3GueAGZtUrU",
  "key24": "2QxawJHg9ucfyEabFy8Z7j4iWVQfVXkZBCCtMjHconNN3X8xVVG2YJfK8RF532Gf6DgppLPFycQUYLACxZcueDvZ",
  "key25": "5pjuGHXD6ThL3jKSktF7CXXMhTYJ3A5vFpfDuWTMNM4TmoATQ9m99TLSUUzSMh7AnZ1rVpHjrWAzK4W66kaAcJcf",
  "key26": "61ti183LSdXAdCGa8DcVGmhm85G2rMf3HsPqVPP2hkZffVfJ9jtRn1Nj1wLtufe6LdPGESsutY2cDeaAozNPQtro",
  "key27": "8t5tsYADxWMkedx78kf43VCxknK56afw9MSWWU1qqLH89myzVr9XM7uJLcvmAtghidRHNc7JdwNHE3TfajkYfj9"
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
