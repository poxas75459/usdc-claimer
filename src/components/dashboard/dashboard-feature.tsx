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
    "4DgWDWnjDrmG7D3objwd8NPRMFUb4yaSWp8FjyxNXvcub556ApWWsSa5vGKMyxxb7CH8f1P6HVC1eft5ykehaWU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6XXBGhB2Ys2gN33AwVisykLnZZBiqZFWhSBakzBfewMBPBHZh4ztM5Uax4mzHUtKCMMwnUN2edXDJ5qmAJ8312",
  "key1": "2LrNGPaDxfaabDYNEr6fu7jzev3y1HPFkf8hkDUV7147owSM5UCLjCFKWRWbsgHgDtJEUtz55sUnQfYzxYeHrBhc",
  "key2": "rTadMk8MFtQytKtXPaEwHZdV9QoUhwqM6viNTcHqDtE7YXzQzr6fQkcxQwAgpx4xXBfj1eoJzYMy45D3nffgPCQ",
  "key3": "4vdoajTkr6QcEKxpBn3j7bD3iYHWG9Qg8xGnqqNW1Y6wpW1gp3gMVAwBV3UN3UicdY6Yrr9g9GyAs7jvmJYuRWTD",
  "key4": "5eVZn16UFDVnf16QesH9kewLfJJ4kowgkNNwox45NnQHMqcnreLJPege5dcCdsL5vvEupyeBJGC9Prhk2zqDVmLf",
  "key5": "DyeeZ2xivajcvA9zoY5x1styVwLQfcYifW3GF8Pu7uGyeWCfyau2VSZh2aUaUWZp9p6VF7dXGtG27MXaKDwjQSq",
  "key6": "57zpZWmHcBAQQdf5r7kuLSGmeEVfuDJ2EWSFrTPSwxQMzroc2CP8tNbr1LmepCFkEam6kNgSEsMwWTnxLRaeNa9g",
  "key7": "47SiD6E9tAZdab4nWXebWASk4a8KaUfdr36JMnTARznzDK5EpcbZ2G8MKhQ3PaqahuTJTAFfEKCMkagyKRGXcU1",
  "key8": "5jyeg8maFC5fx8CpKjQgRyRZqY4MCkLCVoEckLN5AqyqKqTgXVQDfLBsbhKdgrw13vP2C9bhVrXS8yc11GLjeH1W",
  "key9": "3WYUrh5RPszZNugQj4XdSHhRugG7R3G5hch4eK3p4JGiFAndEcNHqcgcJ1XAEfZZq3crT9RboPDetXfUE5WLVe3K",
  "key10": "4CYmoD7DdJSw2cC39TJXmC4gPfsyYafYpfegKjPUYvdPho34DHom5n4LDuhi2jYZThYkaZ9rrPWowoiCvWo6reoS",
  "key11": "4V3BJgyKonFvEx1Pq2EKYdhBtv4frzsxwtdKz5Egd7AGYYoXvg3YN1ssq62qAsEFiSvPLMv6F5cBeKa2esnzZLfT",
  "key12": "3hBq1ZJBeuzaCM3Qck7RgEhCPg5o3QSSCPELDnmEFqAJ3xtcHsSphSCudFQJx3YbwZjUZ2N3VXvJgF41mLYA1ciD",
  "key13": "7jqqoq8KxJNHqTXmBDsJqHwny3QXGfx9Jy2uxoDxRHdSheUtF4T91HaTmMvQzgBg7rUgZ11WdAspVcZZraD6KVh",
  "key14": "5VQP33tmL3vCfPvvgsCJtUzuaKcQrzCiEb8Ym8ooWkpB5VhwS5env5WuN7iGjFNPEa8s9j4GxKL1uNkD1BzXKGgt",
  "key15": "3Tyq6EvLwa1c7gtwP3xU5DdQZuCDG5U8tsCsM81qjwiWxiJTWR5epFTAJjrKZnmLu8NSJNruxwwY1tfvYwwsRDZr",
  "key16": "4hPvFN55BCi31b1Uenuk63hTSatTUxVMNy31DfRWY8tpzVyKY9Kj7Co5quBjz7wnVjYU7hpiAZ7GQVXmoF9MkBew",
  "key17": "5zFH897WzHgkP6zG6T83WxHUKXAmkqyKfgTpnZcooNkxoJamm5YMy27F4bcTaedBRzvxfMTkNvmVSBVVcHkwCYWv",
  "key18": "3hxKD2G2cTiTR4KsAYw9v4wpcBqoYbqBtVVuqyCP9NJzDHUnoMf2n5jcb9PcwoZGaFpkXCjDCF3wvcs6hn7Mo5f8",
  "key19": "2zXGnpDSYCTLf2Na5GZfsyC7Sgr9GKQqzUAWeag2LvHJLtpmErBxqrPHNpBuV8wRFAfWTAwHBWWxrj13LXCtTUeS",
  "key20": "3gDybbfHGGpJonZNLxxYJZQCuHNpsm6uEAdmEb9gXtzHRYW7z3eKhzfvX8fxF6raR2oYyS8TR8joai3PAwG4V9pf",
  "key21": "wKxxEfW6rK91jpm2NSKffQCn76hmVR7QnGFP4Xnomnu5yVoARuQNzWGWGTHhVZJLPdW42uyMZX2o8ZqVwJvs5HP",
  "key22": "U1mRhTz63TJR8wwcLM2UsQ8aWDUeqyHNQ9nGtRFGgsDqBL8d5jVrgdtbgkvtjZCTD9pRcqhzK2JQARGbiEvjLRt",
  "key23": "2B3J8mcYoo6CmTpXRgg4HkU5d46vnP96YC3TrBEcbRL17YFPbdmE4J5GK5KyfxfiLVFeJDAQCJUf9Vruqr6tvL7m",
  "key24": "4gRPtN8cZcJopnu5iHgL6G2Y1mZbviFV9YajL12aWdBrRfCpL9VC46onrUMtBRs6aaD8QNSSSMThFewuGGuzMJCf",
  "key25": "kZsUrBL7H3D7FnMLnbyBQUHZV6iCpWAACetHkxBMzgzZwvi5nqEPtWpQ3icekMevZrscC4QuMYWN9GmPDBxWXBp",
  "key26": "27V8PwUMJDeiLwvT62RNvmkDnsJJ42JEC75ca2orRYeQP978VsVRD5omgMDvqcT2iJfPhmYaFMq8vYVG4hoS2gHS"
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
