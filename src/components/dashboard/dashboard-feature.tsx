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
    "3frPFBcstZuX9dgvYZyHxJZwKbCsFUeE2QuX37UnGz7yTW1ZgcVAgGzXcRENhyPj3Rp98BVHMnHBanqZwGf2FDDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXrVh477GEsHYCWefohdN1KwgqkYkfomjcPtTdvRK9CXXPgfW7CJzdGdz7J1fRZV6jjoVAUhdvjvYveFYtbNUrD",
  "key1": "eBNqmGAxart9kFK11oLRgCgwsKTHa8gwkM6Pthmqd731P28D7DbuxQR1r2s2H5HQjqNEoB19wzq6RVpisSTViPw",
  "key2": "31XsGXcNMWtdhv2ZRweMarrAjw9dZ183jEaSkMgoixQB82bpgsnnNnd8TLaPa7X2WHJ73L6VaGHCHcCeaMBrsrAP",
  "key3": "5JNyefgRjYwroUXWHzub76oNaq5M4Moqf1xPDa4v2qGefx18C1aJbbcUcqQ6FtaPoLBVauprAzBgW8F59zjb13re",
  "key4": "2m4ixxigFPV2qzAXcUT73QmVJyqYiXc8Dtns4Um1vW721hTkRyCrgtBBETMAyydNT2NbNcQ1GeuJ19kSvM8vTBK2",
  "key5": "441S9AWC8UJKCijLgbK7jKn4o7bXnem3vXuci8b4jGKj2bWT3r9vK9cPvDmCTy4cvCqtABUKGHr4TGMo698k3ZJ",
  "key6": "JoA52TZkm9Zi1SXRMfPgxSwnpDoDcGf3ZbtisgphYLK4uuKsutTyMRLn4yKFyxk8aViMBV9MkjAsQxsndVV5nWN",
  "key7": "4XfzLgnvCzdRcxgwnfLpkRkpYFtvcxKY1CBx7NBdETPZnLHEpe5RWhvwraXCnjUH25egTpfkRPW59kwYndLwXLqV",
  "key8": "2xBF2BE3n7pCXmZ3QUVS9ZcAe6JtfRB2g36vhUqkS5UZ8d6qo6MPPyV2YDZVT3pQVNPQy5fMA9he9HMD4xKiSFrQ",
  "key9": "21iaeMiRWd8SgZCELzD52gyicgUy3xN3B2RNCaF76Cc15kctHMRF3fgE7ixzDkJDqy512wgaxfDGhKpagmag8n4L",
  "key10": "25xwfSvtx3pVktaFPZb9jN8a8LDUaRi8HrHqBjBD1gpZvEBs8hhL2ULazhMJQyWZoJKv3zU6rZgEtMfcrGyTcY1C",
  "key11": "31fQQgRmrVcwU2VnjJo9yrmzUF8FTZKYTFkScL3y86SSApvyB6WsFfabKK5H6dWzwPYmZ7574AAdkdSFP1cpZzev",
  "key12": "2m2w59MivmWVy6k4AxSK2ToS3ix5NdJwPYKSWgBA9MaGo34WK4oL3QAbMZdkVVyAtJRPJuLH3SFU1hjuqwqK1P3t",
  "key13": "2jJTDKhtb2Sbe36KBWiMv377G1cRj5nv4omE8j3q7ZUdBipsW3PZzA7wUwsowNfTqTpdJuzuo22y7WnL7jQ5qNxf",
  "key14": "3RvXfu4kzwipY2o75SKMFrL42SWGLpxigbhTSDdNeS5qvk8idi73hdGfQijv8P6ATzKScCwRRchezPAU1tbUxbfv",
  "key15": "41CAoiUMSY48GmYtVDmB5h8PLME2fTKvinoyW7gBNBdz3ju4WaLuT2xZKJoYJCWTFqqp7XeKYXv94pTbbz3KzCbT",
  "key16": "2XFkuDMUJJyz3cePfbAhUoGe62qRufprLDz3ySu8rAhQQW6zZS4MTNxfEgNiYAUixSE6wVE2C6V5HJAPEkABir1V",
  "key17": "2LoF3e4Sy9VyTLFKq2dfhnMJ7QWvJxrEUkHKQzcitS6Na1K94PjxMCkX3bnwwBEBA6dF7D8VGDo9KdGPwfTjoeDP",
  "key18": "2yaHca9DS9QMo3cRzaLZKsMpNZoQaSv5nxewyomX7LymHrWMVz9G6fYdRxMUsnCGxWqq6twVXj72L18ZQLbKqdGs",
  "key19": "58Cp2HeFYm1dStsFXqmE6tUees52hjz5rxPMwLcr55uPvHtQuvLpcGdRmnKz7HSjsqcGYYY1iFt9zh1KG252QJqS",
  "key20": "3QxvB4WFjJFhRZZ9r65CphcTF3NZZWbZFRZbGiwR12ExwowXGK2YdpZagFgPKv7A1jcRsHrqZHDJD9Zo614uJfHL",
  "key21": "KfCfLM8vW9wPPh9Rbz15TGuti9rpKKbyCBzYKMXgALKokh9KsZK36ckLSWdu5gddUhxV7wMhoBErmdUh9Uva5Ye",
  "key22": "2NFLw6xvfuQvgkt2j5kaR4Ze9DHJpee5TsdXKFivyUWjrkZ92AEErDhu3fHPqKQbs443T9YhQSn5BXK2No4pd8sJ",
  "key23": "51ML1rjVdH47GQqMrbVdrBaTn3qN5kPu818YDifvGnf9uWWXgxuR5D628MEND29e97BujtnuA5hPStSfWkeGqCCb",
  "key24": "51LS4H8X8wTYS41nZEPsEQVk3tozk6u2hyJHyN3RSFb13uGzXvVPydtLht5agJzQfFdf5KvY2Jk4KBbByoFxTaem",
  "key25": "3JQgTkBX9RdgXJR6eHhYAGmCzX6AtSoYrreRxsZrYzU9WyujmTAHPCnGfnHrtjSTMigZTUMWZVYFAdoWUHo8aAeg",
  "key26": "1B9QFsmugenfqRdZSqDrXVHBJ8NCQ7pqgMbS1nu8zszCbFqdnBKPXv6mbD5p7PYPBeQWmckjXyrGABMWHDYa9ap",
  "key27": "5YMPFXqX2NGfi5uGMBNQcEbtAvzwYDd9R9ZAUWWWcz3Tzckk676n3u1JfDa8wjV9bHfmozbkjoo7GHLQcQV4aFjT",
  "key28": "1bGgbtSAcpVFeLba1qE9sh8bohs4E8taaT18vzRccGTMjUdjS38tpekaJMSf72rYXzSc1Re3Naq4ygEYgEAB5a6",
  "key29": "357MM5PFX7VUxrbB4XTfPcAeFoQgMTzyPEpcrYozwXWYgFa6yvz6UswN8W5YJ1WaMqYZ6Pvmi9TKaNTJk12MhBQA",
  "key30": "2Vi3aMhpU9EdfTr1i5p5Zcomk2zeR4psaAg6T9REmDKnvb1MLdXPD9mBGmzkz1ZhTriVqDh97LGcBUQA8AkMMydG",
  "key31": "xq1AhRvXZPsQg98cXeDBdj9Cn2kx2jqi4U9inM1sGVCM74zBgMCPgpTdGKNVjuZFMH9xZJArpEDqNTpGheTCW5F",
  "key32": "4QFjSAKEAAGaM1bMF24pKfM6GTDuGHoWHrceZM2AcgixSQuSCHzY9yDscficKtYaRyggnuq1t3vDr3r19uEQMJ1r",
  "key33": "2ZYdtHJSbBgnwegvuka72FztTyMPJUzDNkN8BJu5azxj5kGYkbyYdkFTMM9baD6wVvSdMXMktbCaLnZVvYYaHhy1",
  "key34": "4xa1sy4TDWLiogkWHfGDCPQbQgje4rMoxBHdbiHDYYxd8i8ZqqeMrtaUPqNY4oCZHb7t4d8boHp1eWrJXwRFSTYv",
  "key35": "R6YWGN35yq4Vb4JeEa6DXthHEWJmzxo9S2yhnUaFsaxdMcqxFXZQFiVaAYYBuTGSTm1FmojXf1xkXGLzitvXfdt",
  "key36": "3fUKBCnNTuXRiHpCSZKVXXY6mtARxX1KLdLF5K8ns2vAe3QnEiLE6nAiU5CUAidgiTvwzKz3PgV7kiWC8ea8654G",
  "key37": "LNgwza8ABkmAPCFpACTowdGztYcncshBVmtWcs5RhUtVNRDU4CsJgx5Af11aBstqgzjL3nhYkLw7Bj34QAQUQJH"
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
