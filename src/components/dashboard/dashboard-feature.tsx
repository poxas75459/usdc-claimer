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
    "3zhvpB1WJv3SxskRXoVbyMP4PeMpn547JC5Fys5NCf4H4EoWBLZ5BCaXvHvQGovNLwxpRRFdtLzNo8GFZHjwUUsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1GoodMkjztzjxQ2pAZkivRZnGgvzx1RQmRDpXJiRXqo54NE3Ndd1VUJW2D5QA713VioC6q4jVaueSvVm4mEvMT",
  "key1": "3soy8QjC4SChJSDdApRwyrymmcmDmvHTqVRdtkmYtbLKhnaWir6s7dobHKgeBA67tLBascJp24aBHmNptdHMGzVs",
  "key2": "onGyCgoBmTg1VCMcAVVVh3K1Vz1SALUUsrGZM5YBfyj3cJVUtqJAvqazEN4DBsKgoGBAW6QwB7m5mpGdUpQM3Ux",
  "key3": "5h5Cx1dJqLnRwsvhce2uXc3mKnETNLR4DWp35Tct71f169yoxCiiHWcNZMYiVs2HB9DBr4uWSudgvbY23fGWTZDZ",
  "key4": "5pMCrG7Ud9s51yRUVPBgb9bqzCBFud2sjBi6iE8wXTj5SEuYAFHKbT83Z4T5LLHoLEvZLmMMDBT51WErTBtLUKBA",
  "key5": "kag9QprVNZFVteGZKUd6UQxanNMWG59RfaihWxeUQ6opxEjTgEV1BPWRSMGb5RjENAcmwUnppyjj9kxPh9TPi34",
  "key6": "5wkeWi8qgiwqevFNw5hn37DEGCnjkQ3QUcqXNpUon59HZrA5z78ZXLLXxVsaxZ8m7GmpRjyAvuEfkenY7tbWpiyT",
  "key7": "2pJ3Wwz4rcT7qoakJFopr8uuQBotDcYbZtAG1c9PaiSW3Mv8vyeCkmsNMcsEbDFRN48WZtdNkLNtpzYcMYLEUaw9",
  "key8": "4D32fNRYA5En7L27akVFJXmuMATR9g3BYGABJ2AdKfJGmv6Pgc3f5h23G6fchhUmoi4cvuJPe43tsRQDireBTcso",
  "key9": "3d3rGJr44xdiTSpxkeJMGKBQWq44t9JdvMXUcU1j5UxjTHKxL4xA1DkT8G5T89TZdDj3edr2r2Q6qWCXUdcs9RQk",
  "key10": "5r29qJEb1xJcRR9YixjUf3y7Ewdir3kkKTZmepku7q13bU7sLmAiFfGUvw9z446xK7s7xjZFtPhQgjQwjxopVtRZ",
  "key11": "4thVVqQ7v2za7HiHcMB7QHdKfrWFQdBQiu1d5C761gbYAqVYxvbhaTc2n2dJnJcqkHwJSDaPcqkjL73T2i4e2WmJ",
  "key12": "623PANBpxi9R42vVqc49DJxMcBgdspzTnFaCpPfwL9TNT1LovhmbakPvqNPEkgBSdyQn6tsEYH8m8SHt4LAo5iYv",
  "key13": "2zYHmQG6rSNj5j7Gppc8Qtg3bruE9ynWcNi8g7cT9n4756CF3C4b9cZjB4CWP9iqL44ymFzcEhTfPW2TuL9i1iyn",
  "key14": "2bVKitcUUqVeAMiRFWCkYDVKH9NTPbFFoaNPC2q3aPoxpRDA5rwkZ1nYYNpnDjEDknNrApdN2Yt2vg6naWs86f1b",
  "key15": "2diiywM3jxtqRUk4a267fG2cM7Wm5szzjsxAaDvSSVrgDZhfLz5TScN9eMWAZN2iXHwJtQNYeytbaSee3hdzpZC7",
  "key16": "sQxYuQXCVbgzNDBRy21Me3MhCk2dxfgmZPfAPo7NCQuN3qKCwY2oS7xZAag34CyvtA1sRsD38Lm9JbPX3ft1UgV",
  "key17": "5MJQurgDNkqSefkTpNNmtyUDLdua5HNWXnAWqCrQAfu91poGMG7Tpc7B3SHWiax6svg579nFd6HozLkUieJ2Kt5d",
  "key18": "5fnh5zY2DxVg9UzZb1C1kdSF6yyBsWmMx9gTb94P7Ntuxtaq7gHRmsRNT1Q1EMbNfJvmfpuYdWEbiWQh2zWQrXh8",
  "key19": "51X8QzMe4kBBnZMVsodAxaQTqavfMG1TZL3HXgNnExCxcCARGKzaE8yF72m3Cd3X7tqv2zmDTjAAmnLyASPFapQE",
  "key20": "5W1fHFdn92zC2uJwcEMQXm586usX5MSQJWrAsqYSYa1rLQQkMJj4ikKcTAoz9C4QbfrbGz3GmNieKbwsyG418Jq",
  "key21": "2c8REJw26Bkz1b6Pk6XzN8bsbinjJRRkJhELWTLL7ytZnNPmfrFvRR2KTuQ3NroMfUME71ZuSmD2fhthmEvE1bea",
  "key22": "5uEaeRWV1AfjQduzgfrSyHY4zzxGfwQupqEUtLCDdE1GhGA5g55ojaTuo8ptCK29sXo6LNHgRREVVMkxWa13VMvi",
  "key23": "uUv3WauWTqzRQHRF3VSuWRnzUb12G2xsinJvqUzCQYPy7kJE45LFcJNHy68pua8JPzNwNtBnmWQKjVyM1ztc4gX",
  "key24": "28d2dYgntKJiT955tTXj9mG25WAmNXZxcN33udUmg7QgLx5zGenKKSziHP4GsuViZ9yoND7FstpEtFkYHmfVJs1K",
  "key25": "4siSZ9QQU2MWxEcg5uXWKDGrzL4EYvBY7nwWVPtaCtCVYkK2k4MAW7XtYbhwtoZNpqeofuUW3qEBX2dVzSHeb588"
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
