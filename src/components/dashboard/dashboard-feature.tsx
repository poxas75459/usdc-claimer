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
    "3ZUG5UZ7YNbXxrLxW5qLnjHaLUMyS1e1Mk6Ssus3dHPMEiVMZkHt3qxR4ri9t8KYW5Czy7AjYDbPjVnBwyqtzehJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6gQvXJKxVbKgK7FFKXnMTMJPPqJDT3DFCwQ8LyKMGvgyXULLhAGHb4Bdcq34TcKPhhVK4Lurzki4xK5WNCVc3p",
  "key1": "4n4S96cVQdU92u9HgPMbgJ5b9tqS6Kau1bcpT5ZSnzZXCwxYoVGuJbu5u2isixabHBLJ7V6T4PELD8vhZmpV6gFR",
  "key2": "3d9VELk94bvbP2o2C8MT6QHR13e5q6AbTrZSjPgPAdhpG9yvXSdQwGJLjgKTgNQkBGqorWHucPJupdwyqC3fcVkL",
  "key3": "Bc8spL44wM2Zt1y3v1zCkjiwaWAg29KEC2E46iKFvZbmFg5DEYBgAkfXUbNpQUjUA7TupErKFYFggKBFhBLZyUu",
  "key4": "4zspY4S4zTEaUiyRDj7AGGoUe5HtZpvsQGyHmEYna5XqTCrT8P3EYNotuV84N2iohTVt7t9uYMBZ56qvMU4UxnNP",
  "key5": "3kUWXrawLeLA4BsXCb3odb9RQLtdZjrwR3By2GeLVFUi1PRMq4a76ZpzV6JJrCFWyPLjhN5WsnTxuSa2sNyBoTXN",
  "key6": "Jddp7pG59bNkUo1AbYvjFJNChF8SZShN54mR4kwTMybSin5FsYky4ho6vN7hm1omeTF92bdNzppouK76EZe8caQ",
  "key7": "3GgPrzL2hYg1paabCG5K6NGYqExtHRwwtzJfg2t1cghcu3XQNaHLygjsF9dsuUDtCL6WabpdzZcjbQcBKviqHYUA",
  "key8": "xAFvDQhvo84SQNUorwR4Ls3edCkUee7TsKhzSdG7fpg1a9XNAz4CzaofEaDBbG28iJXwSZmrFsWbahu8t71f7db",
  "key9": "S5JAc3BM9rvzgjwuB76WJb4UZ8L7mkeM9rhahSiZeLHEL5Ck55REeusbzjyxajfLv1ZEDQ7uMdRgmhVJq6ceFxo",
  "key10": "5iLSmyVPTrFv7UXxqWiMgihSEGvKq3sSRC7ZtwMD2Kzd8zDzM2JBzjtA12CAQcodJWQQoNi1exnDrwzfQNuv2ZBG",
  "key11": "5U9mYV1M137T83FuRsWeT7HZR1z5QqT9jjUK7tcTdqnTe1ijrY5ijrPvjnojmm8LNuv9w22aTyKaD9sg5WnGc58k",
  "key12": "22G9az7dVBxxeZwZRHtjjPgLPeDrou5XSo3dqkQ4R63tXGJNHfiSqsUYPSdwTfPAHH36dZVFYASc9arxG36HWnUC",
  "key13": "yo2ScZu2Gtv6TAfcad6B2dyrtViGufuKD8y75TPV7sRdq1ij8n29QicGeg1xvUiALEmQWdav6k5PBq9tg1u86TN",
  "key14": "4iEptNLe5BDNKSk4JBPb7K6NmYzCtAyjUjjgTW6RtcsDifTsStASk3MEQqipMFcGPCkXtBj5utHueg38vq6im3eM",
  "key15": "5fPFErNDBLfGEwGtMPagDWAWs3nCJYKEdADBJsHr1Ym6C9aZ8J3oRsMH7Y6v6aqotBrVfNbyEZNetuuU28K5nEq2",
  "key16": "4EQktEpUvqLHYjKePS3hMB3nSzCqUcqGo7NtRhtXrR61Z7ghdzG6bKMemkisQSN8UgHFRrgzb7M3pNZiPB6qFRKg",
  "key17": "5iC2XxiM1uBco6XC9pWDuhJTnoAgaQdriwtYy1cNuEgVdKPCCSrnNhgX5hptUDopf9AaCDDpib8weN5KioRbX7EW",
  "key18": "ox5k8EuFe9c799bmZ2FLWNsNKD7Xhr9yUM74viPB9ZAjpHrYAaAoJgTGedQ2fRtA17JV7Lzjtj1tdMfCnKrZtgC",
  "key19": "4zdqEjArp1WqAnVyoXMLWcgf7DQVBUHa8oYeoTniNeEaYjBjWPTE42w1Pt9N7UmFAHkY8ruU7QzxXYEQogmWMoXr",
  "key20": "3kydrXWXL689SF24RVfQEi6VqjHnUtmRhoHvGwckXxY33pNWHdajM9geKAKfLy5WuPw1S3Jtc8Jqs1rDY4aGa2pa",
  "key21": "34twd7TJA6uMrixW7f5vW9x31FM2NUBUBwaPqspsRKt8sZb4b5higBk9zKZhJPCbUY3KBSwAnmwkDk7HQt2RRJ7e",
  "key22": "2oTzR5gai58oZniTCn87YJP6g5r7ephJEj3TJsXWyphK14afwcyt9rswCbwo1rqpvmZCFEpiynmrAKN4c7PGCwNg",
  "key23": "UVxJc3Nh6FNhp45DjGmhqj34s7sD3pABfLGNjugBtVpU1YWurfj1QzvaroiUEufkay8kFyLSNDa1MS1uhosY7U8",
  "key24": "2PpfR4CQgAsrg5fC3x7J9EteikkBVZti4gpNV1gVD31C3Krpz9JaxaVvcJBTExmCr7jAQCbGzt3z8FybTtZguGuG",
  "key25": "5brMvoBhGvac7bAMnZKSQeywHgJRFA1hcf8Fcf28zkLu8JRHLR2D12gRaVHZzUxdo4LfqV6A74xLSKo4CAtm4A6r",
  "key26": "46FMwKUDHPZDLmpRoRYBsyNiwdXKw1aXpukD9cGeY2DXYNYtm3LBW4qYTA8RV8rtDgTmdgkc8QQDYCp4eQkNWdba",
  "key27": "3UbqEh6jdSMMsu2dbcykEMUjo63PmLwfhmy8gqVWoYp9r7a5HLGSgqU1MtBsZjdZ82ciBWbdzFLuK9sPD4GmSVEH",
  "key28": "48JBJPMx5da4wnAD7k5tMusfspwfoXaXZMmkYnrYcmURptCdzHGsfB4M6GFi4fMyJNnKXwAdGwdr6Fo8cFXfDyCM",
  "key29": "3B2uDZt8RuPvYmdpfg3NqwenvoGYJzDZpPhZ6865JNPNh3gGUCanYTNd9SKym5e5eRetGydZrmQz1i7ATfxFmsNz",
  "key30": "2zCSFDVv82rSEgaa26sXKrGkeSN23qqhtFAjBuqA38XnLGkMeHLa1kTS5YiYWzeMhPhweJqTferq3ociqxPWFUBR",
  "key31": "4DUKgfgizx7weGtEvQb4RhFbZPQsC5UuaGQqx1Y9XLK4HFLyoTSyH5Ees6BXT6NkHqrRPg3Fr7ihDfKLiDGPemLs"
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
