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
    "65WC5Zc2JA525NxYenptA4R68nTysxRuLNJ6impKFUN8o2VaTyd1t2cvFbm4AzebRbMg8A55uzE2zEs1P2szngGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQFDZ3bdQRS3n6ngzWv41knYXJLApEKVP7QwudpuzcFyBCV5FyJZLBJSiddTB51Bbr651qWurQjGRcNj55JQrez",
  "key1": "5Y3JveU1dgfPufCnRpFrapCrxjj49252TjNvMgoEJ7pozappV95V1XbMYey2gwjzVDKLfrvuKcRz6ZnET99JUDWC",
  "key2": "4jPMqjvXtvvira9bqEtrrpx6YWEUzue9nX9KWa1ppt37yjiTwiWYkX8H6oJwCNfZszEef5s3qe4W8vVpF5xSr86C",
  "key3": "32C7De8gUnqoqVZ2cyEMkpcFatdiBVvtQ9zwWiWZiK6CmvV3RmxKX1DLCnzUZGFhpb7nqGCZjCEFyV8dGJiq8TmE",
  "key4": "xuUJbMvw6XG5HbrDNaz7LaUTLC5Lc2jvSTbJ3MLorzcpy6A8Qe9n4JtMpGXoNV7QhbV4aax7NWf6Ttj51e56uLg",
  "key5": "5Dbm8XANorzc2LCAQYgdrxtmM88AXP6Qgz9cdT69U2yD5jrDdDXvF53tUaBcGvRHzSJPJdHYPdAkZ9mJ6KK9CXU5",
  "key6": "5iF3AbXHpJez83X1HQP77LB1guHYN7gUNWVt6AvGQEMxvMPpgR3PHUBFoUjAnSPYAwZx6qLm8uq9pWqMGhfrnJHQ",
  "key7": "3LWPSFbCiKnapSsKHGcYyfWdSqvzpdpkqXQCfjQ9bXnB8ZQUcQbKMEpsqGGJBVuWFdR2mUozgDPAPhkZMBL3NpPR",
  "key8": "3oD6R3R8jnXHY3qVcnFytiwpntz7tuvABJWViHsUHuyDcs6c8sHPmgBTBshneY56eYv3tyWDYtTiq74cY2sxyEsq",
  "key9": "4n9oo7PyVUEwDuUwNwWvEwqNeUuw2zm4RyBRpqLgbG6avnDDHRVPjPDYhABXH6rLtgksWWELz2mnS3pFHx1JJXSL",
  "key10": "2zK9cY8dy7seqVfsV5R3rM1HpTJnW8r5wAWWMLZwkBnZEEX8LNKHhQFyiBmdR2SEzSg6ZPmPzHSz5sECMeASjuEf",
  "key11": "426QKcmLFkNah4d6XMstB2X5hh7UHhf68GjrVcTzzVL5ZoMtwNeSxsRAoUpBU19C99Ab6apexDFQQ6iquA9Kct37",
  "key12": "5t55xLasmKB6WEmYQTUPVD5DcCaAzGPPsEwBxBQnrGRhL1AmVEfqDdEBPaPUWB4spHoQL4MirvE8z2kduya5CVM2",
  "key13": "4fLqJy8BAVrXGNfaBt6XWQx9vxFfBXrzYzCtuCz7xFBjBZQRC7BKoSvAEXckVV1N1rfpoM4UnebfK9hrZVkukoFV",
  "key14": "5W2Kutv8MoSMdSsf3qN7MSqEXVkqfScCVriGjKLn7oSvN6eUtJbbtLKAtTecMBGjXsv9SSRfcxGXvJSJtko6qEB1",
  "key15": "3JfsyphE5JUzE4k6wBvfxen3Lj2RWjDiC4nvFt7CtwW2WEEmjxmBkStSZxZcNRdGwdGwCv1JzsNMLbTpTkFd6emg",
  "key16": "5jWKuZXHtsZ3WJ8V6R4pKHJs573BYRnpvF7JEAGLPgAYx9BmaY9huAM1mwADnp9JLANxwTC2c62s5DQUiJFc9dqf",
  "key17": "NseNwxVYnyZjAqTWhfzM8rn2GF8etEM6c9uBkzN7MKFvnM6HBAUpBnu2jkHYpEZ7E9QwPqoGMGWr2PSGHBrcbaA",
  "key18": "5uN6eTca4vxkDQft3Q8LAAQqyUXb1skHHqxRhn1icLx2ttbWzREiMX1TovAERboMmnJjjEjd3dEu3YxJiXwqKmhL",
  "key19": "5EgGeNpDNV2v9gZPvr6yhGmXWBxJH5UQsJ5QjjTTy5AzrFfjRKx5nYXkFGh4NU8i9bF95UgoDKgDUn4gc54g2mB5",
  "key20": "58cBrxPUHnwLu2387VtKfqUp2h4j31vQmd4uQrYhGqNrbZH4uBBePSLdou6uceWxc14TuZQqnah6GRKY9e5SCv7L",
  "key21": "2hikjtnRCUTwsEpDzCm7ZdTWDu42o9rXmXyhMD27V2icYs9psyw4FYWjkmi24hNDAAqc1oF7bwgxQkqhdr8of2sy",
  "key22": "662bhUFCJEzrAGiZChzLNoNGtmrzg1bXdqjXGoKB5gEM4Qy1KntDB2rU6LyYNnS8VUYpJivJmJWHTdb5qZ1ALWqa",
  "key23": "4GyBP4KAJ4jEU5ZgzAbTbbi1b37JwtWDMnchYSK4aHEfuCsdkfHToeYCycVMB7CJFGrYQPYA1TXfjnWDtvvTPBHD",
  "key24": "2eLCq2cWpuiuUTKxYCy61rab4qB8nhGt5FLbgDvTngACTcGwBrncrAczMWRMKFpuZzEjudQAWkJxwFwyxqo1CwNS",
  "key25": "2VmTz8R5copqrLb4dfrEgZu1bopS8NeebYFmmJ8aR8Q7xpwmxenCqEGy5G67nbg2eqtE56npouMDc7BHopL5z5ro",
  "key26": "4dtLJbxREZqQ4dDBc4RdVU3n6T431925Amy8nW7cZ95WR1Xg9mD6zFQUDp5SSLGCQjyDcC3Vc9JgSpJR9Eq6w8dJ",
  "key27": "3eMGmmQeamNRC5FUU1jHo2BCq5t7wdyo8er3NwFjanGkUTeeSvvgaxNVAbH6r7BNH16CewRbLbhG98wLRcnqRN3b"
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
