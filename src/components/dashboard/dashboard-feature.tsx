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
    "4ewFqMULQGTw3Y6KURYGNDStGccTP5hJU99eKtvJv3Sq86G5pZQLL9rKcunjz6UxfWwDY733Z2B3G1AS1sTVneiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431AyHb8bk7S21n2hzTveZn9SyNeDe48EwCtEHj1J3fyajvLRdzHTBobaMw2rQbnBv2xozibzJMPY1NsNdUh1FVP",
  "key1": "2pkhVJCySiZEb5evfTD7MHbwAEQffuNcaysdKRKfivevLESWpLF3uhF32ePiMWMLf7Mg8SQjxW6vNW1CS4yyHSGa",
  "key2": "R2UkvEjGpTVsmp5Man9brWSPQV8W4z7YLW3ZJEcjag4rfcjopaswfe8iBrvsHMC4CBL15fsXpbshgRzjyggmgPp",
  "key3": "4P8qPzk1YR8Ja61mq5bVQdMFMZWbbDGSGZ2g9gxLdzV8QjFK5sZfyL1YYGAwQHP9s5eRzxJ6qVubhs6VWyckZExF",
  "key4": "2g9xSDYvTgmWcM56qgntEKvjJvLMyNV1sXwREj4qYwDYtAaqD5cG7fnuxnXQ84etvp8UekLECqZZZC3GJfbRwb1o",
  "key5": "saQubX8sg2zBUks3G4uVcqr9t1BgD6EAaV6X6oTgFM3HzfH9mDqXjmd6cyPJEEZi1A68vrAJDt3xizXCnH1r6Lb",
  "key6": "3UeaBdJtDnbM6F54AAQ3HGfYtubHnKKHp7941rHHKbZfRFFX7pTgU68knvXATgCo8rxhcSWsUw3mTfshXWMUbcKZ",
  "key7": "2CCEpc5mhF7BAHqEJtDt7pgDwJWvr5HLk8zuqe34xnHoVWrEGksqBV8pVRXi7LA6pw5xe8ZGBiYhjrWf86r4HpM4",
  "key8": "Qik9mgwAH57bqimG1m9gQLTBb1BgBZssHfhhngbAU5bCNV1PFNznoFhhbukqBjiHnistzJuMFSFozsHsPXkXjhX",
  "key9": "UNPWtuPbKqAd7DHPDMcFMoskyVF4mCYogw6RKdiyMaWvq9XakhDfAYub2ZxzCcN48H7MNGQxaCfHKNmLKyaHLZE",
  "key10": "21wqLZsamn63VdLBgtZiwd2SR3WS7ZnVQxFuQok4M7RhhvLRsxu4hf4bRnVwSoHWv6whxc5Sv3ky7BXdjC5HR8M4",
  "key11": "oBVULDVXqsBstB6SP2oDySCGruZ8JN2cEpsyN51HWVh6nG5n4w7sNaeWdNWWhGDZWeJkGTvs4J2uLGq1Vfx4m5y",
  "key12": "3Cw8kpTDjip1awG37vCX7HJeiCWSFKFzj1i3SxX2pWwYjVGFWtHLTr8pK1ssEuNu6tzL7Q8FHbdVXTsHKP7DPN39",
  "key13": "4aTUcYjv9T4x6fCMphqWaZtMHiQ1tuvxoNQuYP7WVmMtGvEDLDMDVwhsbMHetPVbdws5H5RBBDzXp8QWzwHPodDS",
  "key14": "sRU6XydCS7snELVYxEo68EiVbyBAyjLs4fqQPeejUDePqxiuRNqv1fjMo9WXG3WMhvzXCKtSmRJJ1L7Eo3RyAf5",
  "key15": "3J66bDx2qYHcWzHEbSiG8s9ZjVbXFSMbV67fykoytyi8UEQJ6RoxhhEUoei7Y87xjkKxEvt9r2oyuE5NN5EKdiYL",
  "key16": "35SPwxgwh9je5VjMuCQemZCXfHYomW4Dft9ydLaU4DDB6u5STWMVYZJB2f3bamNfVu4RUjgEjpmXHEBPiqAN4A9o",
  "key17": "4jCZ6NeCVswswRbXU5K1aBLoVEHWibySBTLajc1wv6GTHXc2J2tpGVJbcfhD2hMzbcGk1TjbmEKnkPR12xYsnYxN",
  "key18": "3eWx7smSyYihzhgYzF6zBDmM2jrVgTXC4cnrEu4ekDZauuTG8yEVdQc5sLGoZYYJSb3dWLfmhVGBzpU5pgZnXT2n",
  "key19": "2DdaF1MDShz3JSSEqD1FHoDZS3gvMYM8qE9tXQWLijmdMxberSdggRSVBQvQ55rBMByhbSbjnQcyNM8xQcjsKBkc",
  "key20": "X7NTCD3HfgPfidAVh8dV2Hzk6LxWYirchib8qpMKgZpND2EzqW8Ap7wUrEkJSUhvwc9xK7TPoCxSbRddCwAVXc7",
  "key21": "2oU1VXN9zPNndstagjHLwbLigadCg3FYZSWw6uCVQhQ9jbMy3T6QpPiMFVtEhGonvebtnA2JjPZzRfkScUQH84VL",
  "key22": "F91fJ99rJLz3NG6YJWvRDWgeNy2mTJTrqHXApcwwRKxh4LD9ShzBN4auy7zWDdGxWXW9ytb5FHX1QXATVofEWpE",
  "key23": "Xp6N2aQJhbZbX32De1TsZrqDzA9umFDXEmvsNgxafFpL8vwEehiym34hp3QQdvJ1EbyeDH7Qgrn4BXFH6Dwr9o1",
  "key24": "gYAKQvBH9FyCmUAdXWeV41mgLc2uwvBLNe7KjukMSeMhrZMeVM9wyY2msLm4BasBSKhqFAgX6AiWSq1fjFJbM4Y",
  "key25": "4TBzLkTEgyiJorVQPfjBebA1GhCfUPSqbnRK2K2gh6N2GdZLKcgWb5m8frL2951eGuishF3DcmcGThRPSrdAH1Gt",
  "key26": "9seRtYgLgaEyTt8EmkkrHY2qo7h21qH53JbNoPX5KWK5LnHiQpzeBoMUrckmH2736ZjYpz2XMbqH9vtGa36VDU4",
  "key27": "2ZREwSTY7ibTEuub2nvMze3aCPL7meXFngZGg3PtNmmFE6QQoumAh4XCdAiYGt6Nx6xsZaCaBDDcbsM8Zmh2RPSS",
  "key28": "5f1s22JXm8FVb4Y825BLXX1cwx8GAUA7azYsiSv31Auyx3btQxQDvjapC3tLrnBB3UsMCdwuoedQ7Fg5dWeTsy4H",
  "key29": "4SSsJGZXg8QSWbkr7tnFsJp68yfAtr2SkvM5xfBizWgYjxpbMVMCCWuiMRFAxyRrVVn4HPC5WAK56fBpi1FjKDRW",
  "key30": "2JUjY8eRcWxao7NeNnD7NfcuQTt1rGYuoMY3gWugPyafQrNh72bK7HdTTVMALEF6KLjsjk3KQvYuBVrM9x5k342b",
  "key31": "4V1fprZ2AajYau5eCNueqNUKss5ADdFUXxKhZCeKBUbTHPYEy1ra5G4yj99Bo4wGxMjwAb6oizchn9uEzMgjTSKQ",
  "key32": "3K6fFzVCUYoQsoNqZZoyK7uDgvCUZayobg3xSkuaJtPyyPxZtWydt8J8xprkb36qQqK3MFEgr3NDzWbUWfyEnaJT",
  "key33": "5bpnVqxRD1EJ6fVLcgUQjmQxvpqD3A2rCtWC7AktkL2eyA5Q1sbpubPFEgNZMLP7YRBphM9RYrwsWN4RmJdNRRVz",
  "key34": "2DLgjWkojJBznb31Giyyo6iVHr1U8RqrWgLZ8hug3hYhcNeWrSZQSRTC2t5NWHEKyNgERpgxsncJpQPGkibaRU2R",
  "key35": "tB6LtR6LWMZC5xzqCrF7asR8TFHKmH5k5sfgXRHgyDWijFk1vRJ7h91FRR5Hb9ejV4zZReLFAHnstFJvESnEauk",
  "key36": "4YeiyaaWTKTJsMiqz7cXTivfpg4SFKDc1NQidjVmxRnbmHzPY3Uj8Cxm7FTyJkg4yvMdmbWkFcog4umYBR24tCk2",
  "key37": "2LQ37VX6EJ2XDkN4b6NfTjF9mPahXv3EGvaUDFhBzyVkGqBCUjd5Kq5DPk93uc7CLpqTuktuZh8Z5ATQJwYUpQJ2",
  "key38": "XGrVajFrTEkZ5Ep1RRLJTwsbZY2P8Z2TgrdsxeJAvgWc3UAMQk3pDCmhWEMY3fBMQCPNLLBPg9apzXxoHBvhGrw",
  "key39": "4uF3xh96ykq79eCCRjpVkadCjC2KybNDz4vWyzEcow9NQ6DfSYNxQd5XPRHwQWVqR86XspT2sjqxnGnBTxMuqfcZ",
  "key40": "2J7zxhQG9zxH4YCquRgt5c53hAnJM77YTsDVEoDSUo1ub1qRXYEKhEKGvdcABTX3MCDwXAPsg3MRcVie54sKW3Q9",
  "key41": "2Bop5G9i981KHUn6vZfA7DdJESpAH1QS2hWV3PcU8kbNBk5QUn1nQWXXqRvnKYHgy63uQxroFUW6zg1qhdaNdTQ4",
  "key42": "WqzMyxk2FZvC3BuaDP1JyZfGw9cTqeUEUi9ABSdQXZg8apCi84E6BwnRpahMjcoT4Awoy7PfvnDD7bHTLtiv19v",
  "key43": "dRpT5rxm9jfkpqHg3S8oSQu6rJE8S95QU9kM91cuCCowVtL2XV2eqijjyr5JP72dyDcueC9UQU7tDfbNE6jW1Xa",
  "key44": "43LuV9fY6jZnEoKkjLkQATMYKCDLo4RpKC6653K5MsWimRrt6XiteP3NwDvYVM95boETw8irTmVtJbTcZ3L76v3f"
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
