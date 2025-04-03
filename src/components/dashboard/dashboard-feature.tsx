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
    "3HVtxL9tgzKBhQCfL3wrp3vx6so1rhk1Ub48j7Cac4n86BTVLXoqDbgY8yQXttfUDPGZS2YwbGXG4cp6C9MWxw55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxDhNDXwRsgdKu5UjSLTb9GC4uXqjXbbJUJ8zwWwnsyjxeGRReYhwJVh5BDZfRuf8LcwJKkfSuwNhiGcCmCy6Y8",
  "key1": "58KxAhVpW85pcBSyHRbsgsJPLXZj1fLybgrmqM6WQHxX6qzmDuT2ZFRo3TVHULNZnXDkLGRBzebM3FdLxyWauoGB",
  "key2": "4MYKLvxfdTj7fSc3wTTJGNbfc8j9YTBqudhn5Jec1xSrQ4eFAhKMveh3WgGJnEgNrokTPCyAzNa3QHNFnXPVvdh5",
  "key3": "382cH1WyhYFmakbYSm3qZESamD9kBmWbG53jX4tb66BdRe4g96CmHCdo9Qjo9Rqb8w6Pw9fGK6cE29p2z4kkF4US",
  "key4": "YrUA5BVRjwbua2KZCnW9Shy3zf7dERvwScSb6ZFyeNiqHFmssiRzshcsPYgwyYt6Xqq78a5Yet1CFUELbRzkQuC",
  "key5": "3RLwBXxbZKSagWsuAajx3FEMrkhpurosb42XeYxAsUWFzHYPSdRM2s7zdA3bsur5QcaU1iggacmoPhPAAYiDYecY",
  "key6": "33VRhkcEXf4yMUEnL13GCUk3qPcGwNKmRtJTm1qRYmuZ5rZx3invr6eFDY9zYftcSukLgyjR5M9WLGZjDfyXrQKz",
  "key7": "3TxXDPHHga5pdx7F6BmBqVvryT1RqtkWX15QeUaLKVqfhsVnu7fSar9YWuZ1CPbp5SBu3rZfGu9uv2BdGwVd8ccn",
  "key8": "WBE7LSpD49kWAwJxZCMKTLqVmkkpN3yZVmHGSmEoPwddufWR5AWPNcFwZoR5RsPKDtX2M4AkS44wGTzPxmh5yjS",
  "key9": "2zkq56Zw38bD8JZHgCFWisiD5hZJ3m3RPkhWGR3S37m4bWkrPGDv2T9UU9GxdvLttaqfVgeMoWsYLCcNJyxFD74j",
  "key10": "2Fg2BsRz5Y6VzE2KpfPmAQ9rz8FPmnygAu4vRa2XrYtNWkBZ6SQCpHFsVQuHWtsPkMMivwbPjL99B6W3oJNxJFTD",
  "key11": "2c8V4bZVquyUq8QgA2dcx8NktgWgxktvdGf4Xsfa7gvXuKh1Q4ThMTr4VPyRBTSyWn5dK9B6efC2MT5yVY5wYN9M",
  "key12": "3mGhRkpZEfXypW6EPPSZ417kpkgTVvJuNqAnoPiLo131PKtTj1uekrrLwejcVdKKETAWNfYCHx48mv27C3YSXV2C",
  "key13": "611j1gnQb77TktJKYGDkPEy47sRCWZpU8WaoScPS6eTfLpnGkb4FCdfxqpe2oiLyM2um2m63P7caPEF2xZgauRCU",
  "key14": "37GtUo3n5vJ8DJPkJ8ucf7CmcgpttLUK5BzYDRRQBBPHvXnE2KNCM93HpoD2rGXngxrZkPPXwpV6tUSnEEjfRJYZ",
  "key15": "UrzBcEdKYGahQqfsyubC439BuhMPxPbx78MKBqoihVSbcuywxvAT3L4gXooxCAudNnNfw5hvruh2cK542TMFKp8",
  "key16": "4QkC5qdgnspmuGGz2Ct2XKLpf5HnMJsxHbFGQT2ASfxypch5Nar2JZ68wfGn9TseKSPRYVyQq7ySiAX1kXzVWATB",
  "key17": "4yDXmbS7guSQtJHajqy5ygz5F7gPbJtB76GAYdw3yShwuRFQzf1bZCZz5xnhrBwBmDSL1egjM7CmEJ6FMm3jLeEC",
  "key18": "4JLLt78QNjMhCmMnW8Y91G375qgKM5Rxyx3hMFmaSbg8RPxeQDdzkrki4T8APaNPcXjyZY4M7P6niFrGNvhLpPNG",
  "key19": "gcdkerr89bJwg4j82DqVY2RYZXGCorh8bRjSo3CCQkhKwemNZGmYCSv1TF9dhsmsnd7KB11uenCwu8Vw3PbmWcH",
  "key20": "662iw7Eoqp12BznbnF1MXvEumDE66zVQpgv1ZBLjaM5QuT1hYQqkBEwUXW8zwB7xs4WMNT6zcTLWJp6crZx7BUJK",
  "key21": "5o8R3mijf542QHooBxACw7WMePTUx1KpdZoNMn9PSCZ1GKwczqcmfbuGPBJz6MaTZxK6YngtoF3wn969zkprQKXU",
  "key22": "34jAS5JJAbSJGTKShvw8CRpRb3Kvn9JfAmZtbMHsPQBSCiJT9YbVqBNcwYuhVVwd7LC2T8RtsckAw5mqgoE8yTmj",
  "key23": "66Lbd2Q9A7naj3uXrKUytRuEXbUGSPkwUrjd1BWHyEqyesvLVegX3r9u7dHJiawLNm58eENampn1sfbsK85Gbatb",
  "key24": "FQCd39Wb8R3YpGaMdYq3iPVy2C3Sr7mNF36cucUiA7pqkZtMXYr9vtdYoTsRPvC2og24NmH1mLANMYLCdktsmem",
  "key25": "2Hq76oycMn6zZXPvMXNq8NdNdHpsegm5dJDYQqSMBfmxLato4LxkQfSdn6n1ibwsf46cArWGruXuJUszxsUa9XZ",
  "key26": "3ohZqRqMYc3wJhujebwFcvX9P7ccMY5enouV6PTrg5AzBF7HJvoBPFiHrKoB92x6fpFs67d8B3BDrUmGvLmjBNT7",
  "key27": "Hnxgz53xhS9xNDeLLzBDaq1xSzPYBAMWqzDGjJzWVDUTFS5sGydQFiDoRqppxEARNbbFBgzqBGjphzp5JGgxR8R",
  "key28": "4JEdvDRrvuEDzjLqCnmUxzitrtzsJZNB8VW1bpMVvvzgQM19P7uFTBrbhRvVwRi1LZqzxVC9XEmbeNbhtLfHTRiQ",
  "key29": "3GJhk2aw6dRNqdWeHniHkxPuViPrrFrToZbdBh7LPq3gPFZvB2UsofMHZdu1jxkZFkKeRftLBh9b8ccKFo992Tyn",
  "key30": "GZk7syd38R82DfkYGVVvQkzokBc3d8hf9sR9WcPzoNSVgMZkWztXYem2BKnj3HMvVDP5uoF74YrhnsVbDtYC2b5",
  "key31": "23sSNu5QTcrP5RL5PKwRP4CWehoinwrYEWRWjjFHa3582sjwzDSCprjoEsU9CeBPY2VRyp9c15T1kxek12hMvDsm",
  "key32": "5r2WbMDa7kgqbK4XH5Ze3WxCHFmnzxoJJSR1vrpA6xwvw9R7a3TB3c3rQda3F9JUjGS8WCGhgBX1GnSYHHmiLFpq",
  "key33": "4LoeZm1Jq8aKhfbEMJyYUuzvPWXs1HhZg6Cr6otV6hbgjNveaqMuNJZALQ7YJMae4SZ95QLXZjJnngLWj56mCspF",
  "key34": "32c9A8AX3LfqDWRESAqoZirktiPNCBAW5A8s9ePDkrt8oKmgadDmH3y1TL7fEnRkpBzJa2jemJjPxtLe4NTPnnre",
  "key35": "63MnYRhRPF126Hg27uoHjudttsn7CVp5warBZo6Q8VLM7MJMJjQGqCzHPNapJptcsc5gbBeyhsmST6dUFVrMcXps",
  "key36": "4sUMSMAXpZvCozn5m8UjLmkJjpZqFXyXpE9JzvaU5Q2tz5Bn1DGKNa83GmiJyQWwrKVShxruTVEaQ8zd75kTWNaU"
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
