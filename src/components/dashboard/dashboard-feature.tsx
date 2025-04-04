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
    "4xScEvzdYoSpozM1w69qi1sZ3K7ZgdViDSuVL1foQ34giLoGntqHkNx47p7RQbyLoKzz4Kfe8FZKkHwgQGm9sVsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTJKj5P56FsoSANPzc4KacpEFdgKrSpbG9bYCj4EVVWiqBWNzNbm17p15tzZXcaCrVdUkeet77WAn2BJTwmfjdS",
  "key1": "G3qg1SttbMMw8AV9ND34zhxvcryqUWKAEFxJwVbCnffpkM5Cwo9hFoHT2kYw943rXdkXNgPzZrNoV9879fTEZhH",
  "key2": "2GSaJSA1MD6A28sdYBvKP84r8G8RQUMNCaRKJV9wFdzJqNGN6DYkFKEwsM2ikJrhL4KsKxnjrRfcg2KE6cMx6f6c",
  "key3": "5v61yNUoJC1g7E3RaMcK1eG5AR9f9DYsGmrofaLswynTvWnnhXmfGZYVh9D47aD6FwUc8xx75YnxvpTH1yvfzZms",
  "key4": "78xqG8TA57KyfNee8D52T4UB6afzMc7mhTk2dn1M8c595rsmdwQuDSBAt4se3h8EuuJMmyi7fNmUPqeSHorcAoh",
  "key5": "51zDdbLXJX2TmVADHdK4oSoMtichFtzNutdRy7PS2QpEuFmsrz5PjMvcMyj2c2J8kzbAj4MVnmUdWJGdt8KWLjYQ",
  "key6": "G67ZYmtsR5ZMSwAHv8KLbAzYHMAzwMtwnBhscPsr4Sq4LoSzYtEd5sjdn5Mdmhbj5JiJWg3iamQXh3MDGz2ktrp",
  "key7": "4vqU5FkJeE4QCpbCiN1hQMmwg8ruAzPJw3cZYNBhExnzJHkwGkrx7J223SybxCVU6meMyrxBS1H3aru1dAvdMzzz",
  "key8": "5QwMjrExi9z4oB2Q5ssGumkWpm4wSJFeiza5rZceG4wyHhgaFqe5k4v7SR8DiEwWSMbKri2b9cFJKvkEVg6fDZzw",
  "key9": "2yGY2C6a9pQMvLFMUKNWWRydf9ypgHTNH8smDSjdRRatz4xg5LddzTVBwX6aai9e6zAiAX15zqAZVuWgpyNQKGMu",
  "key10": "y4fY99BKDgTtHpVQbqw3X5tmzAJiwhTUb1XHT6HoB1XG3GVWAcbsdd74a4bTmPqbTBuRt7h9NMPVah4oo9LB6SU",
  "key11": "2TKzDCvWuws2ipeW5Bc6MFTUNw9iQM57u5yoFa1hfZxpqHnv6mKs4KN7UM6kcBb9aeYoNitTE4fkjPRoKahGdd6R",
  "key12": "LZ6YbCa36CPZ2RRQrDUsC1jpEWhRuiQ11SgijWPr1RAYeXyFANKaC5opGtYJEFCyuu5457C8ViHt2SVLbnShuHf",
  "key13": "4mc97wSFJpJFETR6JtAakgUCmkgPQ78e9wQZnKUZMBL2Yd4zWrjhocpygydC5A3NkydqmSATBNMATyMDDa45Gzg",
  "key14": "3AhgwHTKp41RKzoYYJmmZZ9SswVqu28si2DQvFJfjT13RoZ7uAGqsCsHUeDYBWRSHsne3iGcm4onS24pj5V6S9hS",
  "key15": "4gd4jguFBV5dyq5qVULpoSdpB9GDZUaJucSVWt8F8YxiC387XCGiBDYJcumRNguntwgFeTPLZY6jAdXHQv84aYSR",
  "key16": "hDnnfagxXHzk4nzsTFZGBV6PakxUrUujaS34bXKu6ofexHUJTsfhSSQ2kd5TjnhJpAvepnSW2Bo6tmZ8vzvzYqj",
  "key17": "51r4FTwWRjN7QKSvzVVS3ZBa49qMGgn532x74GLYekepJL3ik14Mx4VWFHeLFSmbmtLTPsXKm3iK9CGYHK26SKTH",
  "key18": "g1Sp4f8cxqUA5feH7iUwumAcjq71P2fSKPmhkDNV1vsKWKQQRHHdLyKf87FJgLfwJe9K5zEsomxdYHuH3mRJkWe",
  "key19": "5agcmKzbj3Kw7NXWiQnwfctBvTPxjKxT7pxoYHPaBubym3nuS3osLJkiyj4thZ3nxzLNHZS6XHZo3Me76rz3eC1Q",
  "key20": "2bPG2pAeq3XzYAABz2LoBkvnh6hupSPuRwEhxsDsUbnstEAH45bmcfUyHhdEk2aWYmsYHmqdQCQm4KAZsS5gASCz",
  "key21": "5jTig4sDJ6sq8WR7jYunid6zY41tZHY7WpGjxu89pedkoWwwiM4ERWD5rpjGgUEgyYwqDGTrGWzLnPsxURpKAreb",
  "key22": "5ei8KXpg5C7PYFuCLh1JjFNUmQixB1jDRKNiP6qDR6F9tfMMyDUfnQu5XjtcZrYpXuMpqcp4uddeNT4QmGF7T8PF",
  "key23": "Lq2YFMsAEQn2JrfCrs75GvHi6dXeHNnCChTqNrZDLLLFyxA4gHUYCiSRMxNEgJp4SgPrpQa2TSDcZ3TPv9P2xTr",
  "key24": "EsGDuZqDbvMs53CQhCi45XSVWB9Bz8YoY9TgbhVvs6a7RpnyqpNc1vnEbYEWqwH5zMx4r2fi6DmvnTw2Z11wcmT",
  "key25": "59bnh3bpaptNk7CMVhxvw4vmd16sop6vKFWrTSGGBFG57KtrH9xme5NV8YMRxTCsKS4UWRnT4DXwhjJLGSWFJZ2t",
  "key26": "oDvmzogQbXbucT3mbF8VXziNwbSP6EW2qbDV5GLYsjmtYSsyuxJeA9AwYy6K7WvpjYBMsXh4WEM8goQZRhBBrsS",
  "key27": "5dAWL8JJed2EtrzhC1V8BpQdAc4JPYsqUzmGN9fwCf3SzQd3DN6EasX8XVmcDJo3aATSZCnHJQQ3i5VwU8kNDz63",
  "key28": "TJWAsKfM4fbBg3RD8ZLtm4zy8BMS4nzFbNGagkbzdX62hgn5sx8eFe2CGkP4xBRnhwZGrbQnMo4NN6BCPnmR3m8",
  "key29": "4pktVfsAZUcgBZvVNFimYHiMik3h8bHVq21bKZxc1vJd8JgBT1SZr9nT3fVf5kzkzALeEqB5Ynzt1sDvBxBsAuUu",
  "key30": "5dASpmk2WxPgntEieQ4ihwbpaLRZnpRK6BcnuYisLEVvESreMWmkMU3htgt4FimMoiSbYHkQ3m9VEnk9GpNphJqk",
  "key31": "3KgrNCTMJMXW457FFqaA1a8U6YPBF3kNe3Mrj2NnypQfGx6E5EfZdfuekLAkk1zjhPyz9b3FrWHnxW3tVZDUpAAm",
  "key32": "Q4CgUcLVMt9WTWCCnzXD3UUcXEmgooVzDiua2mFZVgA4ysxpgTyc1K2dMvR3sfWWwMyJaKRWHUYrdhivXJBNk91",
  "key33": "riF3pCSMoUGt7tFwzWbvh2G4Y4Gx4gv184jsSpgn6mXFAg5dSxQqYwhPHUuSqFsMajdGXxFnGie1pLPohif6Gwh",
  "key34": "ciHnvRhGH6z9K6fCvsfHMH4BgHMV6u9eqZGGgV9LdKhLyHXXLrz3y3BSVxGcAXU8mfnVkLrN8EK8oengaV6hQFg",
  "key35": "5trProBAViJZgWuy13LUoBMQUXSLRM2ML4Se5mXfYv9YRm4HcGfapu5JbotLNMwbYLpCQ9TBpeBNS2ScW9cEeuWh",
  "key36": "21oMejYfkC9NjuovyokKYN1QbsSu3J5kqtGX8okSGT6PKRr3fCDBgKhnrXKoLaR9rKasxSLGtDye66eLG9G4a7TW",
  "key37": "5AGPqgoJTTffzfMdoMA96gy66at2p54mcRpsg6DKB43Yvtr9b19nvyp9s9U3tGvMtsmjQzyzroGnD2u3DfWL7Bpr",
  "key38": "5P5bZ3h2zhtfWuSXM47DzXCAUjp9k2M464tMtg1znPYBg2Xuh5xvbZHKbqnsTpsKicZssRMFgm5kLnmdVJxu2Jrh",
  "key39": "4G38sUgqdLBKfP2PKmvxGDXhU6E91b1HnVKmhbR8kYUTxEsjPxvhZeydQwyYXGSzCgCq7Ebr2mpFtXZWnvbTRNtt"
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
