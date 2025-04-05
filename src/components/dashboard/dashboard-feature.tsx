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
    "3SxY1GLHiZ71XXWx8Xh1Lf5DQUNyqfsiAERx6W5vJ9rkuzc1bMczyjNGPuAn3nw7DCAKsiSZPL6GvQz6ZG6XTPAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYL8rymAX24Rw8eAzSrhdoWZJ6ronpdkpDinfvpk4mQfYrYprJX7Ptkm8gUtRTipXUKtQEn69C8sJYw3gxwFiyf",
  "key1": "5Sp4FFQLvhoYwXRDUoBJVNuCbdwF8kPud4SvGL1BxTFQaXbW5UNz9JwNyALCFWApuYS6T6SLx8Wf8L3LdbCgbxw2",
  "key2": "23aB3k2t8rShNL5DoxXgsH1nyDgLh7iRn9NfDEjGamhnrS2abPuYTfhEoavRNuEUSMabtSmA91FeAcxfxhq91ycn",
  "key3": "4sRdyGTfnHLsUwz8LU3pP1eQ6qQGoRp8ZyyxZHvapRqXvNeU17765dEfPQN3o1UNQz32dpwHAwyMyixu9ib9oasi",
  "key4": "5yHLvW3nYi9nf2vNchLjhzfKRs67gbeyg3XcF9ap9UGtN2SFpZp1UhHSu33KA1GcKvoGeMscoJZoudbU9DyWfXmW",
  "key5": "5rywgvbgqB2ySGLZ26GyCGAoaY35GC6q3aavW3rZxrieVCFyMwjHogPcvszvkE9pUcFUndr2UqtGNCSmJMTtTcjy",
  "key6": "4H53LsPF7p69pE8o1kSU2VeY4QNqrpD6LKTh3ewyX4UFH491Ai6F629Bd7b4n5Y5T9hu5w5C15RKSSFQCWLGfceB",
  "key7": "3HNm88YfkUy9N5EoqPpHFTqiGJ8HJR19HRGNaREinsz683aQSExYsDoq38GCxJiYxG363qiR29FrYrxdW1eJc8fB",
  "key8": "2TyrrWxvJF8ruz4cjnZv4omamRvAR23kdXTwvkAaaKXg9gYH3j6qyxa9nt5gTEG8GYCvueLLb7tQ7jJ2BTorsCq4",
  "key9": "4emmZVVB7KG5HokGaZPcwzhwzVhxicbMYyaM3u2vxkdLPReNvQAowtUsL3xBrt1pLUS7p14B95haNqSjBNtAZX6D",
  "key10": "dgxYo4siStnaTaYWnSCEiccmTgknnZ78yWHmzLM3NetiyyqPVGaHT6GJ3jWqvyGjFvANvUQ4cCtvbrhzrGgsaV2",
  "key11": "8TPXcWcU5Rx5nxZfwHAdYgz4Ws2Y4XVeddTJ4M7wJC9QfNtkkmtNSJZ5F7KggYWh9AHBVnGjfM7KXZUGRVxmcxe",
  "key12": "2Cw1fC1r6Z3J8uXiMkgRT5HUp5WXzaFweNy15qBx3rooNFhkixNTaVvM2roaYxrqMDS27CXJPLWmPmUtBSfwJarS",
  "key13": "5GWBYcUFSmGBjZn8WhLN1Wb7tbV7STY4sDBJzg2GEtdrCbAMudZ4fDytJECJHChsWKHMGdrFcT9hNG4kuW91ibX3",
  "key14": "2xgNUuar9JK2ZW6vGrJcNo5Z7wgi6gxdzbdCkWMeF4apk1z4vzj3n4oMgmtKLQrJVC9BhBoHgCrabSgYhtfKijHH",
  "key15": "5TM7n61kXrTmw4JGcH2eWz1q6AD2fbTyY2TDDJc5Rz4CRgR66WspgrjuWnPbCZDtJp8tnMzvNhDozA8F4JW6vcw",
  "key16": "47V1iyHxqbmipsy51vMh4urGaLA6eY3PPgy3fy4zYVYSSHjMkzVHkNCDR9aZUUo1bMNpbTagVjCh4xG8FN3H7nK6",
  "key17": "4BbUZ2yVo1qxu281yKSwwcdxCxT56LsjYLf9TL5yJwxb2AGEvYb8mGAgsh6zQUa2Eueot7cXESvh2oAaN5JnxY6n",
  "key18": "3XJfLXerSqf9xmG8aWEznqKWEAWk7sJWNHUoAEaobkpr2QsHMRC1S5bThRCfMwkXQ1HhQfJRe3V4iFoHXrwmzzjk",
  "key19": "4FK6YjDYiQz5tzLVxHsCUPzQp7fYpg4BjUUBucgA1KfTQ1SaRAMvnAnjfrePZyF1zFWfT2gDsaqmNeTrnP1tPE4B",
  "key20": "4Cvp6xTSg3zbbR1daLDi6t9ta6QUGi56J8qgyRW8zjS1VxBFch6KwKsHsK4C5gDsXGbkJ4t64KGwHjQAr3BW57yG",
  "key21": "YpaoEUBxap9Cq86Ry9W5rSM7kfyQsC5HRahJPTxpGAg1ywCjGcWxgvWTnUFhpEUJRUSbaLqHVP67QVfNeJGYvnB",
  "key22": "4q5CRvAsTcf9wR38owPRSSimSLTQNmwBZkVVc2nKEeUaXbTpk3w7u7VhQqbRF1cmpCqzgLcnxZDpnXgiW17rL2sG",
  "key23": "4atZHFrSCJ5dZ7iqR4KuocShJwV3kXTvvE7K9Avgj44QzehdZawhBHiJNxgLKzBNaTTFybBgQCzbyEw3eVhpeHgU",
  "key24": "2u3LJ7MKikRZhz5Th6ZBrBKVy3VxbUkjsyD4hD9CaUUtG3WqNGtUKZU8SjH8yD4QRPaNVjWSQrJiw6ou5v4UMGBD",
  "key25": "45aKrB1vEKrjqtx8DiBNLyGG6DFczVTR8z8aRGRPF8LCsJ6gPZFsKPUKp271fUcszTmoEFah31degiHWgNUXBQXU",
  "key26": "4qcm75hsbjbGYwr9TcofadbCA4KFxxWgbBuSqJ8fdcesf66jAJFfD4mL67HUTnZKXpLAwDuvoJSzokS8TaetHtYB",
  "key27": "65QnX7tvDHSgcRfJR6Qs9XRvMKJYrRJWHd5dUMMyuA3skDGupvbo7SFb4PKgRs87HdS15xzRtHuTrHjmEzZXNPep",
  "key28": "VyC9WmuAZ4Et7j35Sq5SnqTzDS3nW92TtVzmnPEM4u46uBYUNQ39SnDJTD6uiufq7DAFZpQLYkeADCqcjfD6NmB",
  "key29": "5tQsxHkxpfdjjJztxusKm2PicE19SBL49KtUJ4QYnzoaB72DKEV5JUkbMA4paJJrCgkt1TEXUpRbatJQcWouMWvk",
  "key30": "v5b2c2viHDxWzMZyJFQSY5V2NjrX3mt3HauLC3hz7Ku7TR4UVFecWcxzvYsh63jpxjMgWAjbS4qMV4jir3avr6e",
  "key31": "uNmGzLXut4BHSWk55TCtZjZNmRT9zPnta3TEL41W649LqfcUJM3S8VTbJ9wSg1JRJTGkDFaN7LKmfZ6nCjWGfQA",
  "key32": "5cGVSWu8KQRZzYr6Ey42e53iSiXC3yjcVEAhWANRdhEiyzA9B4omykS1YshvD1gsvw2YuSS2Tw4g1uyemZbfJsDL",
  "key33": "5BzdeLRRHa3QNHrSQUrTv1Qhf7zDL3w5bAfaFJjqU2VSVBS3G1LDVaYeKMQa3CrgQcYTgvm4f1mwUFBNoZeoSVDG",
  "key34": "5gt6vJLQeBYkie6BzxFd1VyfiCpMgZ7oAWJLV4AvzHCjtV5T9WDdW9kAFu68Ns4XPkZNwFvggwT7KQXUwxfnHubZ"
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
