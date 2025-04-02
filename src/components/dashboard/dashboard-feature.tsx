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
    "uJ7hSxcqM4fLGoK5vyqBnu1GVYXZsNkjF8zTUXXGVMJeuL56bqytnGSxi6sKwinpBUe2LPjG8L9p3tbWUEfaNA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTo6sxmgKTRCPqN29Mg7wumwsuNLG6AmJRVdUgbsPQWzEHbewJaDj9UexGBDYHEzB66qzBtqNtvN6Jpue72xqDL",
  "key1": "2wk1cRybfn2BAatdzUxev1aVcjL7mkSSM6PQPgaKZxDKSCFD2b78YMFY4ThShoJhdGoHLWjAQv4YjHHoA8H4y4ra",
  "key2": "2rpiJanA4wjvHm1WANDvcFpyY3v1RtrcKDR9anqJNkKcpyTdwK8zfJuuQmavDfWx5PV9WtQRMUgXaWefMHoddVYf",
  "key3": "44AtoapV65MPqG7q6ToGUGvcJ385abjM9R1KV3pCmFKVbsQgKdcG8qpjPx6FD5PoA5xuWrCXynen8JtYv7FKfRis",
  "key4": "3XurCtnRwP9erg6WFWykrdc8XdGSV8UCZThyoVJkALyZJJURvZfwvrUJFcqupqbYDX1yLs9aPFKApEbyzGUvyDMs",
  "key5": "DCMa7wxFd4u3bw9XL13XUewCQkmm1a6tgRapjWFQjDYEPpfueGpB5Wb6w9rwRj3NUhjJpKsf7VrsnHtKJY3roUX",
  "key6": "4gHS645uTGwP48xxGAz4wJR4ztm4ieQ3eYhmNPhcUzcHQ7KC35ySFpkzYadX6MVawhp9xwEKQqKEXJuhbSCdUtc3",
  "key7": "ofrNTJ7tL7Tjanag93JSfkuQCnzgisVAWAThpCKbn6TFUauAsse3DqNUdP6G573r2G9v1DhXZ6JXxbpQymusRQE",
  "key8": "38qytBg53uXt3uC9EFnY7yH5vqLGRcWyRbS9m3Q2Sn95PG5W4o2fhavjbyKTHY3eMwqC4JWQ8K8GSxg3kHtCEKYN",
  "key9": "kHTivEY7TwsfUDdisTchEHhfMWR7jNmdebgrw75i17Y8qk3zFM3Z3uQiEq9zvFEHuiYgMjXaoudGNK7V5T1q5qE",
  "key10": "zPhToKzgkubQ52DNRotGziMdn9wX4hreiV7P4R8Ux3hpNSytxJyphbYvP6Htuq8P3wWJmTbR182vjua1fGcXMS7",
  "key11": "2nYWyULYPomY9QZChRRW5szBCoP1prxvtENjFtoFvZKkthXjEyqWZfM6i4ffx3f5Lj4erw9g7NMPs3FLXhQfgESN",
  "key12": "5anZbPPxmUL82MTN9GfLDSdLcCpD4N2veo4dYkr3pV8BQFQZ9sUZtt5PnHfn4gdwvwDR7hDgLSJQrCYggUhfP1dS",
  "key13": "3RWCxQjcRsAnyCqQ1Hu1EiaZSPJv2fYTGmsoSm1hHeK2aK4Wu3BorKTHp4x5gK1yx9674m1mg9Ht5RzDnZ1gqPsr",
  "key14": "2pgWJAssAHrcLgoyrLQMLVdEivQnAc7dTs2Xz7WqUMmsY1RBjbviBtbUvZ1Ln2ktamci7m6Q2iLGPUvxWNTAprvP",
  "key15": "BLrvDznVW6myS3c8nAvNXRtMmSx3SDxbtWu7K7nmU1Cy52QGrF668gFVFc8KWXeNWJ7rRvbSEhRUU4sJ6QEq1Jf",
  "key16": "5ZNwT3i1QRPmU1RNyG3nDvGKhMDntX6HxpNYqL67SJD1kSyLYKmFhp6n2p2Dqkexr4PdxpmRUf6c7M6MrMzagAs2",
  "key17": "23c7fKVUKvEBgaR22BPd46gXt12HeAMYXWDGSQWzuoHjCJftqoz9Pzi8wR2YC5rsywP7uwr6AFNJDR6DpUQTGVmR",
  "key18": "2SoiLkyMmhacwnhDWQ8yoVawkSpdCnAmZCtAzpTq8x3yNtJfYXCgjs3eddRFyfi5QvThpM5CjiRYZcFStB3kNXyC",
  "key19": "ZRAWKujRBSzAZmx8QL5L3ZKFNtBjPR7PxdEAYdsKL8gGC3x68pSdAw8tB8TqpjB8zUMKZQi4wAMUUNfVE5JfNkK",
  "key20": "MKv3SQKzYFR9JKzXkoPsJTP6iV2C3MybAD6kcjARUqLH96zj7ksZmmCYZs3m7WfstjYJ1bKywjsyEKPwBLb8WPC",
  "key21": "36B9Zz6tUNHPMubyndVeCvUvZV86AC2XTMUR5XyTcPMG8hd1qyERi5zLkAzgT6Vo7ABE1LSrr7D7YWA5R5z3GS9X",
  "key22": "31vioVa9PMxbMYgLq1yV6eytKM4qMJRC3kzK1jU4ZtjNQHxqvqWkAn4UYTmfnoZtca8QmtsYEGjiddUEC3RD2nun",
  "key23": "3rSPzNACHKBLNASNASFwiq9Mdd1HiNErDNsDeRCGcrHZYR5ykg6ACT8hgQQszgAespkvaoNzZYTEZBLh5C4cXZ3L",
  "key24": "5nqBkeWACTYZk7iK4ZD9w8poUV4CHhRM6PYsUDbAaScyV6LKABtqKmCsFjompP7v1avA8iStxWz7Mu9cMxt6SiVZ",
  "key25": "5tDvkQEdXGokShf8jMQU9fgjRh2QL8w6KchojY3rwGDogivsyMwoS2CoxnWJzqagGAAEMJwBHamDEE3DwZnSFR5N",
  "key26": "o2SfiGYhAwPQnxzE3SvJUqT41kSBv5dXQ9wmGD5kuE4WeMNH2qvh5tpjriuoGrKRX5zTnMa9C5G4xrH4Vpd4W1N",
  "key27": "5KFXbbRotbdaWm3oPSPnewARUn8TQJo5pVz5gXGfNP7Q5uuBBDsy1jR6h6imxk4heZdBQZdChJHQMLChuWpJtjNx",
  "key28": "3ronsFMzFDtkNJrqLfY1owNJQrj8TLtEtL5N9W6UHMSiUvcnyP2wXJRZyi94xrmGZ91s3vkvZSU2qTdPuNjqZ49w",
  "key29": "2eVcQs28LsAZpDXXVvWbrYLABH6NZMzgphs8bztPZHQcMNNWioMUX8fZJdYomtuHWjxwAaCeFKTrn8BDoUL6YKfM",
  "key30": "4s9mL2PcRf1of1xA4zJbqvVopTM7apuw7HwT4JYXQ54NKBZxZR53KteQDGeq4KisMq6P61fqCcY6Jn9FReuaT8Tv"
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
