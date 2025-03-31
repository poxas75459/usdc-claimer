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
    "43drE9wQmSUJ8MvqV3dam9QT4Wk6nQQ389UWSe9x4HW5xoK4ZgmregjhvPs14Q2buhmzpUqTUf1xHHstaiWS8nng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LUHPRLvpivNaQZYa295bGyjzYWjQTDCMkNDYb5rNgMexZtqFyTnnhxPkcMhrCyfb7AJyEH2TS1SinNTFzt7XzD",
  "key1": "4638AHiQWaBUpQ6amcmdd15boEmRgrecyBNe1vTRYWGEME6HdYDg1GvGWCdhBbT3j6BPAuBPzMtV5UiUyDYE28f8",
  "key2": "5qTme66NvdxymDSp8gXrc5KKczv8CdhGGJwbZsUKBrdSyF5qTjKYmhD3yehFwpUMx1HnqXDjkVB96EGNhc8cxYRq",
  "key3": "YLTR6XpHwv16Jw71qPNYK6y1qwEn4HHsKJeg7oJpycGzdk4Qj6hhMFWtp7krS86z8dbB8nnwNpEnscuZegV1C8o",
  "key4": "346TRRRFzdtcK2kG4A5gSpe2fxHfogSZd4Bo558DHicQDDi6YBGpy8nvKKRXJAsm8R9pa9zBdJxT3MY4uUYZA2RM",
  "key5": "2hVgigVBtrGDhNkR6MspQG2JPrDbCbwNNQ5iut6ATLgox4oEuVhDDr2Su1pkziRWzu5dFYCPJW5zAGxTQzdLvEKd",
  "key6": "36hsKRE5W9h8CfW9AJA43Ey7BucCdGFNnRqsbBGLitsLrJQMjAvJsnNX5U44KJGyQ4RsTPRfvop1QjjAyraSMW1G",
  "key7": "3692qyFYWTeatqtnTCub7YjXazwwrh5QsXD119yMCkdqwpG7y6Yj1UjKrEJtoVivoX6rw1fSaZXHAK3AUWEHhhG8",
  "key8": "Z25Lbe7N3wQ5uDDNovY8oqDFqrB2N2EyZ4kD5fJ4hCzJYqEoSba9yNS81coJiVD7xDT6jrimPgxzpCQ2Nne7APq",
  "key9": "4AT1JK1JUKv6Fc3UvvwRkV8kHPAgrfu3EU8KFh6y6Kk9P2ptzDyduwGgTpTPoBcMgBQngVazHmEogNqb2kDUqjpd",
  "key10": "3QDs3Lh41PJD9i4ygPkzJ1hDKu4KWQfqS7UZ7ES9k3LpxJWPyWyaaEi2aCUR74uLEJ2TnUT4CFM9aREQBucBQEh2",
  "key11": "S3sq16c5wXhRsP6J4iFfDuBX9FiCYUxNuaibP6neeGrbfxVkCETADrj8tQB3PJBsarpS2vHH2gBh9dLWwxM5S2z",
  "key12": "3ESJKK7kAzUL6LqvZ7AZeKRU57JYUcmz6oY8sY9aGWnKVavfhURjrN5V2BSnpycDCDmEw6Jwf9L4LimUqp9us7R5",
  "key13": "5Kjy8cCXCb5Xo1sbX1YThjEhYbFAyNdAhYrbrkWnFyXHPxsKx69qDsWhs2TX24Qh1MGTNXDEbKquLo6GgBrztu7q",
  "key14": "27aojX9TqL4Z2iNYRLbA2r3SFUvdqvUCErtX2mpYYdLqXseXLB3mgzdLR1G2HGV6LVZXEbNz2krLNZSA3AMhH5sc",
  "key15": "475Z23muoxSXasu4UQg1AzVLBSjLLa4sof3qNgkitmQTLjB7tCCGAdJBAYJGxpjfZviKLKmA9mBYCS53cTzXAWZi",
  "key16": "2z6tGbxc3rixYK35TbUQRscqt6vV5M8ANSD79CHThSQzwr6mpbj9BYHS4Mt8VJ9Wgo4LZruAh7sxargDCFKGTWSJ",
  "key17": "5TandqbBJrXWhMLZM69wJGiLKVYy5rydTAkPUpm7xuW9ZMLbuKspjFm6DnxNFRbxaTEWc4SUbfBNwx8wWTNMDFd3",
  "key18": "g3xztM371vjqfvBWgJdKhBqqnHVhYJkJ3KAAk7pbmzGsESjUaUq2cQePTGz4a6rCoD5MuxNW2SyyLKDUPgo7fKX",
  "key19": "2Txw4ocgSHbiGKPtnUadFe2epTDCeRReNAtPL3cDzQ1PCXTHWKugu3bE1M82jHVxSukvK2ACTnuJtTtbPHAgKSz9",
  "key20": "ucYwoiWNRsS1RbqE4ckSqXNKFY5mNvoZm1JyyE6kVMYTZUYvBAEZW7aqH5RvjqvHsLFYKZChHrXP523hM2jSwJe",
  "key21": "QgbSFdEGywt8upCcxcnPqLbuS5wj7BJFnLrcokVNmfy2pajq5qycFNtzcfKcMikb8ecqMRnquNAHi93LYPC2UuG",
  "key22": "5yeTBGgmiwzyL5zvw9FVcewbbxEfvLCmWhbGfAou1hW8rGXVsT5GdVNTdsgJpQkasUwrhPkWTLabgFXi47fBCuCZ",
  "key23": "46vxsPL763YFW6rMr1bVwMNNpGPBESBYyZ2C21o4BYb8LVcUfLHwfydRBvdBVdCrRvJWLrDjsGFYHHLYvPC3t7T1",
  "key24": "3ZkYKYEh2gYJ9VtLuJubNbLsxjamFtqE6AvHFr1N26tYguhuqX7CgP27yLqASqmEf4TsNV2yDYVLBCFrfVo8TeQK",
  "key25": "sJR1LwSFeXbNn4pErC4w79qVPmjfqxEXdW6FCDW7zo8chindr1WQ5599nvi9xuTSXSHyt75HGA8U6pzwk2Lfq9N",
  "key26": "2T2bH2xPxbnx1eanTdVx24kDLVUF6YxMznhan8WHbHzSxawRbV1yTaSV7uSXxkqzBHGMo9RFqrb56QKLMn9sXkhS",
  "key27": "aMAjiszxrKb7AQTnPejHd59wSCcjGEQp1fyNckAqkwRw5Xr8VwvrjVGgZgnuxcStCCidkpmAPb1QqsBzKJRAcTB",
  "key28": "CWxVSicjrac4bintStuPvA6AeJBGY6TgGkx8QGLUT4VE7qew9hXz6Q9F7GSbinwYz2EsCphxn2MZHapz6kGzCnw",
  "key29": "BVCtEodK3dfTZJzCicBiYRKRh6WyDCfg8rV9rvL4P1vs43qHGpKp3b5ccafQK8vLHZw13ax6zk3McqTrTFEWESr",
  "key30": "oRekVGxGwpZEA2VXqDK4bzqMaugbq5BS4nVEsLGxY1dsn6eGzDPpw4ourac62TNpsxVoTU8rrsbKDHTUUsABn25",
  "key31": "4V3TNnWZTXQirJ11MuXgfBqDyNLTv8b1omCXxEbKypm9mo6FjqgqxjkqdDhNqUK5VcNMc7ycYtrnkMPyWFpvVT1",
  "key32": "3m4aG633QsXWhJskoDofyEfdAqPnogQujU7EGLFMRJLbRBUeDUfwXyRTBxadSW9NFGcX82sWARnbiScERQ8fegds",
  "key33": "486DyGDQQrxUk3bE2aUHdWBDcg1DHzWzJvBq4vn9neR7NpWyxpZ5Z5rHAqHm59CTgVNuYbiqnTdDd9U8A1y3VSE7",
  "key34": "5nJUkaY89caPp8XQqThXb5xVX4k86M4BL2TvYRNqjSd9gWE7PFgUrLFSCVsZC13rpycrbnwAL66DFv6HPYaydaXE",
  "key35": "7cLgDrYgFkJzsyx7HTAR6w6rVjD8N9H5VzgETmpH5cx5jSJceukPYBDq6mUSBCzXfoY4C5dhNKwj1VGAP7ARZap"
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
