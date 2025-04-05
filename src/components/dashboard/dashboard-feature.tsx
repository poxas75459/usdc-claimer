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
    "29z5rwrKhtdgtW68n9tsh2dM5dzp2mfQm2fg6VnsmMJdbm4CoApmmQXVvUDsQqeiQwaD62iJCGENw2NF1SHaZR14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cra69c6iPf7z92FV9HYLBRNw68sqztKeUmMp8hbMhaxfKqBAz3sD69XXmADTby2gazfTLHENpRQ78CKCAJd83Dd",
  "key1": "5A7FZDzqPUquYftSs2M2EwV8qhLMh7oEA9RHp1h2EGZGtcYPwdpTeudRmD9sRsGNyjNcnHcGZsua6wSFSj1oDRLN",
  "key2": "5XvE6sBa5N76cRAvSmCUAgX3yV316rz1HqPvsWRRXN9P6JauxH472X1rH1N8Ah9Khxr6qdb6Bt5PbHH7aJLLVS9e",
  "key3": "7kMTRFHyZuarfBU9R6czhemGoS5bHL2yUoJrfmU8pmfAKUDhQRXvLE6AJQUwjbGsC3tm69JzoSZ9Li6Ujmuiv8N",
  "key4": "5NLNzEUyiUwrdEBYyXRKhijtfFW7DLpzviqCvd4cUkYdiLpXDoLLrAta94u5DEGmj2LqAa4NoCV6JL945Zf317Df",
  "key5": "49MvcthYnKJ8tAM4vMAmfAqVXwT8ViuK4afRd4gsMPQgWPhR5viRoRB2B5A8XVLCrm4PtFQDj4eRHXSEuHmSHzyA",
  "key6": "66iYEgNZywVtBpJ3rfmVHppD9V64SFuzFvjoWvK45XQBE6sKqU2nCsZJLitSFFs62ZWf4BYUw8UjaYnccHPUkhCr",
  "key7": "4hwxHP4oRSwcnmLmSZ2yamVzZfxYmTRrjdEPChCDuNH9Xg6aeQrCgErENbMrjTuHkQL4p7j22ANWNDRAAuycZHHf",
  "key8": "2d2qNTMEhmCH2GDGEKbVcodR7T6dr2mPGZHVYJumSuRsmMC4xA9LPDRNarjsD6HqUkbAnCLAEqA6a2UWY2kCFVav",
  "key9": "b7PMu8ZH1Pb7M63pbkkmcn3pMGhE2HvRv2udKofU13wWmgTVK92EdtVUbDZVjefQkLu9FB2SCeF5XufrRCK1j85",
  "key10": "3GEgMQPAzWMCB3Zw5AmF8rXSiogLpo3CTnweNPZfuDYfCf6G9gB7ZAFLKmej29opGfsnrQbqLfWgA4CW4QhpCnm6",
  "key11": "2aYUFa7RUa9Kv6jHz1NW6wAeAY23BTrDPoLrwiKfuQZ1VHZ3zRcc5zNhQFQv1NrhsSRyLSP7umzxwQfpPNoCBXz8",
  "key12": "FXJKUx61KF8mnbHUpf6MBgtNnz9SwkmaYEfn8rrBxj9vsP63JdwGwwpLv3fP2HaY9rAZkFa5y57q6S6gznwYLFy",
  "key13": "4m6SXBbJTbVfw78YKi6M94qu2pJFbbp6VJgRZwbFhgobiFkavepQ2CWeY1FpoWSFnZPGLdtzCodxrbEDK2XB2Hjn",
  "key14": "3FH86Gvpg8tUfqePguNK4hAULHusJSRRtjj3Sp6hEvkydHUdRTWnvZuQDyUFqCvKV9AK51Qhx2A9gXLBSB2QS2Rt",
  "key15": "3x5kC8ZCu9cCL7XgYMc5eiCir75PAX8wjZctFYSjdacouNZDMBFgAzp1jayRkRXN6bGFZvGhVnRqeftZNmtPwiSs",
  "key16": "2SFw9MYX3PT2MmvPGXbY3oDDMZaJnLjSkPY2p883EZ38aHmwvNWmWFLXeyDq8T1VEU1rqspZ7CmXqn7Tj8NLfw1x",
  "key17": "3E87kbpmZJ6Keiq5Wk2DseaE1dvCWnYiYuv1XkoaGhuUKNfHYwzzKFkGXssVFde6M4Hjrgktc6paxetT5xRMVokZ",
  "key18": "4nJhEguk3PHaVr4Jx2Q5QSWrTZnbFbqUSi6YrwuTdeVUQJo11YoeoBWYevDdTg4eY812W4eBzRCsdDJ7qJ5F1PAk",
  "key19": "31kzcnxWgpxAjKXrLjqsY7tYDWk2sDZVCRWFKZjEyhCw8YDAkpafxa65jkeDja1eFBQitsnuuaRsoBL6T3fK4YfN",
  "key20": "4FjohgNXkGFj1VbgP5asjtnA1eYwNHajcaf8VfFdo9e9zC8synFHJ9Q9mpPnfPandRM5ExbtoEoBhDQkk1CziR7N",
  "key21": "66tWN5U6KweVEkxs6wSiykSwMEN6rKCaX4KWMuNu8fjTg7L2nUPir3RAaDpsNR3LXWqCXhZz7UrKf8KcsTSK2YfE",
  "key22": "nxESafoH3gmqExYHqVo8mytieVVK6SFFBYREV21UWwY1ncnY8Y8kRygeDAodTPvAh5AqUMr626rtAvwCPcfkHhz",
  "key23": "25Ro4miTMTavA8ZQMK9r1YJdGpCEWfnsVq1W7ux4qrHjQrvhxpg1fLRiHJYXupoVgF3vxvthXFbcuYM9aVhb1G7D",
  "key24": "gUcV324Hk1BWx5qiP5iNTAG3q5oU1W639NVh6jczuySVt83TC4aATCw1JL49mjjJfugxF8xP7oaWa7f2VgmvWon",
  "key25": "5u679L43cj5No7uwRbaDmEYdoGmeTdBFVPeyY6c7M1gTEugesoJK6sq4QXLqBZztyTbkDMtDRq5tPRQDZWxZVWva",
  "key26": "34Q5wt5fZLgeia4Uv8Z1GFuRUpho6G1fZVBCGp72VjXKqfCuDuBnQJ7of923LLss2owx7qZiTYA9RgWW4AzTEhA5",
  "key27": "o4rbPKubB5LevV3su5cVaH8GyPMwtTgyRsK8txFR5E55shNmMaUbUp6DQgdjUvVh88Me8YoS7iV1RAXYaPDh2iL",
  "key28": "3QX5hDecm3ece6JZKc1aw1JnX8nqUokgGxXauqAtEWudWUcxfKNyUAceuT9unWuAc4fu7gtF4Mpgmt8RhsmXWRZW",
  "key29": "YfNmHaPuEZXCt8a5whwdfY8B5LhLRGZCoP2WjUavKbNkKHTyf7WVQ9QwZqCM1w3uRL4SWQ1SftrnugUYYQEPGcH",
  "key30": "5R1cGnRMpC8o62zxFvWW6S4jXupq4nkvRp4SaJh4GEu8RF6NQosJdcG1DPcbfRL3pP23m7vU5tdvxgLYvw4fPBXQ",
  "key31": "2KMkFo5RBpeFBK3oKjwTz3RGbKM5mY81e1AkezNH5j9VdyijLaRXnXtFayoCT7xHWrGGfySzLui5CZsYwnpkxWs",
  "key32": "5zmKjPkk821Y5vbt8sK8NRR77hjtEiRsfP9RhvDcjZAk5UA9bqooKxJC4vzxHCZYPn69D7sm7on1vAX86KCFWVXq",
  "key33": "GX9XsNRUWztiiaa1KYnDvgsS67sz3V64mY4Gwv96zgkLkxJjibf1fCiW6khquprC4xHttKXnLJQYJpaaBj5e654",
  "key34": "43cSfAQsedvEZNED4K4H2UU2Sa9mv3YbJHxJVBg3zbbEiyF8GPqghK5pCzbefg5NktFpcmJDgWb5g64K6iJwvx34",
  "key35": "2CmQ25ksVvyrS1wryAUbUwcPfs6Bb6tgN4oRdVApK3JZuK6Cj1TLPkEmvFnRQM5MK8xizGemMUdhJ1pAprMC5DwU",
  "key36": "5zr25BuE8A679c3YU9DapLSvaxZjMUBpzvuuuyR5AzkxACnHyS5qoQ5pLoy6dZKJuoNqQxvLU7U6btbyWdn7LLLn",
  "key37": "5enorVxdkXsNW2TmKhvv46E9PEWMUmAFdWs3148DBN7qi4JG69Uw9PnPiGgkTLeL6q7KVgbHeC4jTuALDEczq8fZ",
  "key38": "4xhEwZDhaHoDH1KMxp8GeGx3Woo9H2hx3u9358n9uEQiNgQGJAP5aEfapFgEV5KB91Gst2mQ5ou2SzFZq1DBWRfX",
  "key39": "vhZZRFhL4TDTJ3K1Kky6k3Tugb8GvkwdH2XCFyCtBZMogfucukngPaNugSvXmmYYZik3ZzPHegXXCnvA1USLW7p",
  "key40": "4Chnai7ZMCFPDnd4PNU1aiPLrUkM45EYc6Kr9Kf8f81ktqZKGA6mVAMWQQjt3NkEFov3HdtaXcNbUpGcrJi7hNFL",
  "key41": "YPZPwMuctXXXFVEUp6pV5VmBh2mkNHu9JUNMKFCnwjGkxybZbMWkLkJaJKgDp2YrFdzeGsr6uAKj2MuJizYtMDU",
  "key42": "33fDDCJkjx1k8NHvm87LVFRRxPHJX7oR16m3Ht7yq83jNBUwenD4AArSG97BctFDBa4FstCCakikyJPS1dQXDP1W"
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
