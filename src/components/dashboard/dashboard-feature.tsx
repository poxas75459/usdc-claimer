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
    "3wTj8viTvzJ69iSyjmSJJ7GsswknMTpGw7gFC6gymx8LpNLkRt3bFWQpLLUyN92eguTQXWXjn8W9Ymn2RsqWMyn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnXMLfECA5pyJjeYs9ZAycsQbv2eGT42mi7KE97PedCAxPjwhmzmLUWrRcRTkW1KyZxbPwZcvvkHJAQKtkkHZQB",
  "key1": "JsJndp8q9X76Bn4K36kpkngXoewpnWUUgFyBxGPzF46CBVPTG2nH3Qag5RtzYzF9MxP5ngZJ6qdkgV3obENX1NF",
  "key2": "5Uzd5AqdxGGw2Qmy2CdcPXWzrtzqdUtppsdcS19NX988GsRzuW1Ap3cGq37AuemWd1M61ZtwFBCp6QvfTkPjf5pG",
  "key3": "3NsJc9aCm5fpAmA8uqqng4DBXu2UfGYVDXf3nqmAApaDZfs4dDBgnESoiFpuEXkWGZF91E5e6sF7v4K24eBrg9Pu",
  "key4": "5FpSRka3U7QDzsXcUpXyXDUVR8DFvU5HoDecdwq6pDvywsSX6sUwj88JnG4DDdp6DxiBoyTSTVqYHCnXVekXuguM",
  "key5": "5aHxjk4TFbQvSSramDZ6Ckd8kbkfN8kRGfaKcKHjf4Ykkpp3VBntzNSQVbwEF9g31g1RyWJNb9zmS5pBv6Ny7uGj",
  "key6": "58b8NNC8y2Ecz7Mn6uQfA5qhEFpNvQJkMM9UodK28DDFumu5KGUeZTMG63x7B5y1ZJmZVfR2B23aCSmi9HdTFVs8",
  "key7": "35XdbGMfdKkjGujogE6wbTawWKaMnftxVWZyVEmgXGw99TQk9bgXiKMWbaaziYCZdGvKAEaYzkgyeAayigbLTMtT",
  "key8": "anD1CJ8M36P4B9VkSKhe9G12uALXbFVzuncp4aAppVbSB4EYdM4ieWT24T6Uf1XF545AVqo5KkQzMqtyBz4rrRz",
  "key9": "38HyfCmXpAx7WmeoF85Q4Zvd14kZT1UaxHpoE3R299jNH1Qn4HjfSBkr9XGUw6UKcch8DmiXFwEAcAVvjqRhbmBh",
  "key10": "3vYro3jJ7bCtDBpiys2ERQ1K9xR4KBqY4QT8qcVH9JzXHQi9QTqdyMpfXk1WUFWeYnygfJBqNzM7z4FjtFRqiPsA",
  "key11": "4nPep4jmsuFvGwDBFRTRi7NwoKMrseFBQim2rJdhFjak3SYiBMLvdq6J8NKGfJpF1VRUeLXquG2rf5tGSXLtxVR5",
  "key12": "56eh2EawNFdHiukJaFouee1DAYDvwXtEy5PnQHnMUoydEdfMcLCPZXzNRSuZLbmabQJCekdbsBeNSZsYhPw3izNH",
  "key13": "3Cv8Zn3ikouPgro5ZNQxjgsoXzJtHvsLBVGizWv7sFUrTcrUXJZampEJG27gDZ5bzEgXsRNGjTQMP3AQtCnrRwmZ",
  "key14": "vLKJEnFTimiB3uDC1UdwcjwvjFrtQULDaP4Dv8bWzC2J7NL898XFfsUMkfhzUkMGJsnARsXdBbYQ22SucD8weJk",
  "key15": "5gcjeJAJzrBW9mfBWuZ24cN3sEQWJGk8rphure8jrzURRQqrAvaPjxyDe2kz578HzBKDvCqUgUPDwCMDj6bS4YWM",
  "key16": "4Xud2CVNgYTKYnZ1HFD83gT2EupuAgGuifMsLbyLdagCkaGiARTnWfpMPjmk6bLyXLDzQxwN2qjMuMr47jnYn7Qk",
  "key17": "57L3UW3pnLPhcYaDFu2tyivR8qqzmu72R5ntUxcww8sqBe1qKFzWd4PcPaNUZEseJTc5Ztca1akRJ5sKac5XHyWg",
  "key18": "58L1u9zMeCebAJeCZwZ4oBMDJiXrz2vy2n5jEMmuC9G6EkE12g2nPeez4UwMmXiwMh6Ed52YWYwwgM9Q4u7sGHAF",
  "key19": "2ttuSFPKpKbPzJwqKx757rSz1MT9nNBPUzmocvDRnNRwAQFis3C1x7fWbXpBQPzmtwfYuATceo8EaVNSpTN2PZU8",
  "key20": "4R68ZwqxZytZBuswaCK7iMUv1p4SghXoH3bqDzGwMwBfARjRW4pyszf4TYg8zzHqB46c2DWkH4KQZh4iPT6yrwMM",
  "key21": "3kieJ4hN6Jhg3QRmEFdt7R4bwc2NmpN83WwQmiSF5ou42np7LUbaFDZyZCsgwQGtPq2fwZ3L3JuJ35yDkhqMikc1",
  "key22": "3sqhhKd8k4L9hTGviqR8EFdinLSStR7CH2bU75rvp1jTrKJSz8C6b3DJ6N8Der7n9jXARA4VeSgGgKRPSZaJ5Dz3",
  "key23": "5tUto8DjBaf9AS4rNksDb3xkR5TBMy7n4uMjjZF48oQ4DxUrLW9ezWZyLrQM5xd2QBLLY2WwxEwjwVKJcm76512r",
  "key24": "2yxWdsM7FDhXdziezi2MdcfH8biQGt3sCG81cYsJHe552JqUbJkuxiZZjiD3f1kanhbER6YxFAGkmHTrzvQtbWZv",
  "key25": "3uFUhqKSXvxY1FN5Nr8KLDnbQtAtTe2A9dqu7KvaTvnVJf3XGRSwHKXeDMqUA9C37FWGieJo2bknQyu9PEfhY5D8",
  "key26": "2AqDqYMGp1YS3pWvah589QWNVRmxWHcuGpHp9WJGU2GWcHSyJqBMS6E21rnjdBjc8CwdevKVJdGCF5ghyTPRUsmu",
  "key27": "4Qoimqj2oKAxJzXMpUmLn3hcBAbHB6UsT9uToVAsQF5pcbhNZcSFme9wfMS4ufLAArqViPxZSZkReg4VaGXRpZKp",
  "key28": "2KJJQsPRJVUVUNL3aAeFuBZCQXymkXThe9k1zcjU5R64n8FixE2XEz9aTDnxFcf78ozw3TT3gYxiACSmpie5xoh6",
  "key29": "5M2K5YsVFqhh4i5BWwsQLWc3eJ8wJwWPg7R2FZtDvHEfNevwfRdt6KigYWmGJb2zUAM6EN4aVvRp75pcT5LqvDhd",
  "key30": "66DQQJVZbq4ABnLxDGjYXCdjpybuLHf66TkuBe8HucTM5LeP68Gdyv7rJgJ6w1HD2ibuDCwhnwMBXGgU5QAD3iJA",
  "key31": "5epnJSpxwCJqygB8Upg4NDdqTr2Ydz2FkhdV2FrMMhYpscegXuiDY7ya27vfnoCaak7kVfZwwXupm6Cw1pUAJKq2",
  "key32": "5RvH2mkoZb5q1eSK496xwJ34qF34GSt3EENPaWGtaQWtVRkzqNDTgr6AH1aCc3Cr43CgKmBnGtJUVxi31bu6DR47",
  "key33": "E9csjHTsVUz5vg9YNn3EDK4ndbbfSFEbscHfBPKigtfzdxZtb9DNkjc2BCaZDFr94ko798W6v9ZpRh2gW6DCTZE",
  "key34": "2sNsXkT5rM2C1xHCfNSGwJuDe8FX1Ljt39EQjJKJApPBmRNqa9Ftkd74Uo4N53oAEFpwnyd6oto2osFXMPgEV5B6",
  "key35": "363femRRzBXAr7Ne64jLMZKEez6V7vzqgL56KTwGJoGZQagR7nizH8ReVnS6EEMcvFxHFWbQPWXwNziAj9aD67RM",
  "key36": "5DFiwzQvM2WkSVUqkmot6mZ5idB5Fz55yY3r5UM68GCyNCh4WEjtexQGbRmRrVaVjLbdzFPDJ5fz1zAd15TtA9cW",
  "key37": "4MfZS5dam39hyjkFt2eY1YKrRmcBJtcEGE1RFzksQ9r5Vbh9z1GS2Zd4jNrBzaQqYs438EsfeoBWWUSHM2L9unqW",
  "key38": "4sR4gwXqTWDTZwrFhpRwmFqRpwbzX4uLEbBQhwDuerPtGBZ8sXp4QznE48Ks76KLqVdZ8rwfsgCu4e9EYc83N9VR",
  "key39": "3EKdtqUY4qBnQw86DpbV289umsufaKEeBdWQd2oF2jGdobJZW4K1FBDEBkTPz9CtC5XkXo8JGpcLt6dXufSopqfE",
  "key40": "29As9tumHWv7WjqeoUNvMEArLScWftnVeNCYrsVBE5DdQSgxAtGjTgNXuS8aRqstcP2cLTkc6v5brGkY8C2nASym",
  "key41": "3Q99RaJgur4mVfxi7xFddatSjEGzoqJziohqavwLDXxugoQS66ApLS7SvsVgSsb6TpUKcHS97QTrPuJtKYStxyp1",
  "key42": "4QmtJvEc3pWU1fwjCNgddY5L1QKWTwfiexNzpXzrDcw1kPsVX4QVNL6kK8TrnD5PkGNM5GfTJ62JEg98uTjXJ1A4",
  "key43": "3V1wDT6DM4y5ucXVvixKjPPKNVTMncCG9gL2zKqzoZjQYcxfak1iabS7pem394NBqCjYktEDoEK9DgcZyffLizg3"
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
