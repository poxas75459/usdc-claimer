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
    "4CZp8tzUCtzgoHxEM8QvYB8aW3Ufb9c5C7hHfbCoQNt6SRjL8kAZMfVbypm1mFdtFwmbJFLqVANjJGhgATVo8pnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qx52LKHZb2MAN6yNJqVZfCpf9EuFNXFUuYkQqMkpq1Mc4Q9Btbtf84zFBLQEYqYMLSd11rtw6HXr6PfnPCGSoh",
  "key1": "5KyePHBgmGCRfL9KbNRjgYRZNh4rBhssFFnpZc75u9Wp29knSv1VvTmd6CYUn8Di5Ad3hr7e75xQQWcg8dKpi1p3",
  "key2": "63TKcrSXinvX3JAmru6UypyxhVF6wQWTtJ8S6ttVdjupUSxBPaSK7d2MSNWMZh5JTT2DdymZGbJ3zXmzudHrQeAi",
  "key3": "62zU1JWRYSfT6ooTxCaU4n2XjjD2Km5oa329k6NwHAJfgj5Kvhq8VPep9Uc65R5FATxm5cASMCaeyR4Ff6PX5CYF",
  "key4": "47tvbPZWH7a4dqcppm9sBTDftsxUSLmnPrESzPR21szgadz1Tg8wm423Cug8qpR4HaBeST2QPdgPYn7xoEtpcLNC",
  "key5": "5w31wRaA1Bt3afLEwbUK2NVMADdAiCfrhQY8SDyFpP5rPfU1bPt2pQ4HJrEWoWC3Uf8FAHE4Ga5CfkkgeTfs6m33",
  "key6": "3ZbhEyrx2vbJQCGKt4wZRL649vQh3HEwKkjQkfvsEunrquZUhU5SHGSLUDFsw7rUySRVEoDWzazTDKr9aqb4wGKZ",
  "key7": "5iGLrcHfVrNhF2vPQefyra7NTD8gPuULWeUoah1nAJTNSYfFyZ2VXuEfsmyAf5M49q7wbWqwTveGrtj2pLLRUcgA",
  "key8": "2Y3nyxr9j4JtZkhGTqafWidWtx8tsFS3gBa2MDjF6uDUTnY4VZp42iKBTpt5AFgVJPTQWP5kTyRbV18biKtrQq3u",
  "key9": "3bQ2zG3ZgvxbiuGFNafQF4Y2PnkpJe8EfeaTck2ToFsxV8fFJnQ5yn3vJDkJ9ijxXj6G7xWQt14xw6GrvBmSciZP",
  "key10": "FivTxFHTevhNzjYHuUKXhdG9wTW2sXamnAbK8gpHiLaXrpVfgCYdCp2TF6fKvTYNMTGfLLVUcGbZz911gSjKu4p",
  "key11": "4WWmRiiPy2vZhJqKYEWR9aU467pYf96Kv3RTBszr8xp4Yk1Z2j4dbA3QwFB5eFK21jW3zF7Q4XhoDQiFj4SEQpWm",
  "key12": "5PFVovDRtS43EdTcMdMPhzNiStTfZZwQFQDhjhVnaHDrHnQG3gy52SiTnEgnrStF9mdSGdV7v9Lt5GD2DPikmKCR",
  "key13": "MVMaPtw2x4jN7MadnprKT51vCJcStTsteV5PC2TUbEoqdXoQyN8GKL6NidWH2WryhUtf3KFd42AiJceActGth4S",
  "key14": "5YyHRTRCDdhHvoD1MdnaBm7fMaee6NfCr3d4bwSFFQzNfWnLvKJo1XDEy1mxTMEZ69hHbJxLXUfxdTbkdtpTFHPS",
  "key15": "ebGHzTNQw2bJsLsmqpEgJQbo7y8SCnGgkzpjbQqVBVYMGZqUMPuguRuwQf7634MApEcsKgGjVV9vq7ggWs1nKui",
  "key16": "3Q1WYkcY5WCC4iJhzoqjWtJKJKEDubSxBwj7Mw1vybuXJ3KqvvmuTpGstUzS3ajMfypW3QhPnEc394oiVBRA58Gh",
  "key17": "51zMTXm2M9rhuv4yRmk4fo8nr3PLbzFJTwnS1tUzjrzz688LM3gA42TtFkFK8GMSqMNZgxfpns2kQzfry3noY9Cc",
  "key18": "4Hostpjt9gYJaiyzEuaJY5K9bSF6qi1mDYEpga3buKmAqghJrr4dndZtQJz8SscRXecYh6n1C9u3NGJPnTNeGjYA",
  "key19": "4ynddDT4gLZtfejEqkubg19N4AuZvrcobo9genm1mPJci5DdRxvSZmZ5mSuSUwCrEsLso3pSSDzvXiPgxYTxdn6Z",
  "key20": "3De5dxnQU2Nuuoo3YTBR7YQQanyxan3fwXbdVBUBa1BtcWonSN3EParUNHN3urZXQaAD4i8ubYTCVwBEpy2bJmKr",
  "key21": "3LiEzPQkTqq8ToCgs6kDD3FCuZzmAsGWHZJFe2FbDHZVbDtb5gyYxN86ANqUpwXuytMvgghrSZPsFZpNLgCU7wag",
  "key22": "46SMEUu8uB3FXnhAb2Vw6qw4c4Nv73DHv4NiWDBEwRfrWAe4eYE6tK88NxG5YxPxdk75t1GW4Wq7Z67jmignvWFP",
  "key23": "3kVZXCMsQebqzJKpGVvRV9jNwGYvTbaQzetzVWwdSRVpFS2TBi32qntgeTCEFHwxMhh6G6yQ2zqyb7jVzDrmLgvo",
  "key24": "66ex4i7T3fnBpnf6xdbep3WYHsbQGS8BB7bgMWkg9xYGrjQEuc7B5xwQXHeL2KRNAdD5vwmMounARCza5gCz7UXq",
  "key25": "2cdTKgLKT54Uo74uQeJkGJK5p5x2y2s2qLQUBnQdnqimpYa4KFpdCPDwucyZsJYJJqFEubyvWXzadK3X668211WG",
  "key26": "2hCN35yo7piEPAESjAuTKXDe5kBuubAG2vkg6PpBceYJt3uMAMQPuqpyMGvYw1vyU4rsuiMZWN4UwXzKcMmQjMe3",
  "key27": "2xdFXmcuHrPH6efAamvXfo7qBtZ3jghPsCSE8DGp1KkocaSSQgRDNejmu8f9mv3JL82wFXhd7JZS9aVs97LpqPiC",
  "key28": "3z9SXMwStsvxXaYUC3Ne6ADyFcmW88SnUKZHb54ibfj7rwQRyGAeg5tttFbN6V5sHTyf3xQTDwPSuZGH6YFBASup",
  "key29": "2S8r1mQT3uvRgGqrsTUeWw9BeDDgeKHzKVvEXMtzuCw7AFrFbTC1qmtDZred2NVzsRKmp6Cxz5P5tt8Rkz8zFquQ",
  "key30": "4wia2uZnnisAY9rDV1q41MjRvVk1BA5G1dqC86F6frTXWT2XWi7KB1c78nsefKbPm6nSL1SU5CvbdHmx9wBxtvtd",
  "key31": "2WMxZzyiTmewXtuWetinfmJP8hHhrLBgnjXyyeoEuMMt5NKcXjCk53tX8x7pc6ViEehF72m4L5781YaG2bAqjuJq",
  "key32": "66ccVcC8gsMDn6ofoLDj7vgmT822b9C987v8hpvC8YsNzvCtLxpJ5gd5oQe4otDakE9wa4pq52hg7LidNHK3iiuf",
  "key33": "3uMJKEYFkiSuoYZCSdVpMsW9kf6gkihpVBhBfbvWT4Pj2urfu3qH8byfuShebhs7KkTk5ZGUgoKtSuAqTQr9KAUj",
  "key34": "5KcDujVtFC4Lo6f9eUEMvQ89KH2pd1xyTwnpVh17UzzvaR6EfnE3ErJnMzLkGCHRwTRKAoXC7RWaEsZfQebUMmJ5",
  "key35": "3jb3yPgoXmrGhLPJs7Ad9V9dbEPmsCg7w2EZuuYDiDYxseVWhQ7jSzSUso4BPis7BrgPTf1Vb3r9u5WQCdnGs3U7",
  "key36": "2vavF3JBfBWq4XXYZ51Q5uoDb7B32X2S26MJZqTrNmp9sZTwnSuAHPKZge7UwF6SQyMSwGJDcfyrYQNypZ5ZxbqD"
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
