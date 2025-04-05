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
    "WutLEozYgFLs4wXSJghWTaSExstn3yf1EokFJphCbgcgP6Xg7QMdun1vV6Mj1FzinToFripsPPG3LteS6a5CCET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eVoytBANYcURhCFGM3d2kw6Bs2x5z1EPzT8WqfBo3VxmzAjswm9CUuVgx5z3NpqbqGEmxScS9iZ1vRBYgEbRDqP",
  "key1": "28UGhUndf6nRTVt6QCHuif3MEYxxGDdQzLP9WkhGdcExkvKWAuUULgzDGBEP4KBmLcYmyKuWr4jgPqmBCGZzKc4b",
  "key2": "5rmNUQxyzsE2QsLKXjd9rYnvNFbi8EQT4sjcUgkQM3xEYbXKLeuCWc8MGus3euM2caJiWf5g259sq9zt8UmMZdEx",
  "key3": "4asz4rr6zpht3316zJx36tKcHA7nedPRrMMJ2FRPr1onJxCaaPwTmvwnQ6yynWLKpUS36hGaRj8VVzbhfNKZdMw1",
  "key4": "4TsD3BPRueDLCbV6V4qPifcibkMWqepfoANsw7bEnnWJKFHbNsMPtsHUFeYCm1wvGqr55Cogpbv5KVHk5fTcBA8b",
  "key5": "63DcKMf58fU1Zf4njEhwVb7su2ukF6DggkKESiqAPc1o2BjMe6jHnRd4ifF7C1CbtmkR4zU593WHCUHxo7GERFjF",
  "key6": "4Zx1iDHEP7tBgdM7KwRUxDGazuDmQZ8pW6mLiE1DPDchww76EebZ3ZpQ1D9Sqefv61syu3qBhyi2zrapeoDEeZ7M",
  "key7": "iJhdrvKejgQpRd7FowJFsFCsE3A9YhGsLZxKA87FNsQu9K55c6F69uTdDgcGhCYtSCxWWnjXXbYRyDrKoGR5JWW",
  "key8": "2zZBqVtTeH97XSxrs7jP16tpBKeRdAbawm9kDAW2ZdzkBjLejsUJxMACGvAG5RiHs2NPqgQtnmD4sGbeevbH6RW4",
  "key9": "5VXPa6TjzaUMri1ikXR3nTkZEWYJBHJgdQLhSKcSSc57nmmgZTN4k7WsvjTHh8Q8gxEnXKTFveHVypNNA4uvfFYM",
  "key10": "5yK2vHT1JNiNLpXHPLXkPFmQguCfNNztBEUrcLKRNNWEQ2jEPdvcwCsGn7cde7uiXmta6Rdmbd7ZFxGmRTKgRm7i",
  "key11": "5Vpq8ft2FnKpXxsoCcwJNw2w1DzfYVZxcmwzpTHQv57vFK2Sd5UzC7sfcWr5Xa6NgeEGLEfSjpeudJm2GabAEzUy",
  "key12": "5my1fJGSvP4EodPkrAKfNdsunkWYLp1asemjCHP1GCe7ZtNLN3mJd8N8oM3GFx9qDxhaF7koaypwjSWUsgy7fg3J",
  "key13": "2U2M3UteyHZsoJSRTqKJnREc3rLsym7bXdeXDThkf8QW8czECvcqzUKZQoc9oDs4aUvMFzxpjg6rk1ykmeUcyZsz",
  "key14": "4MEjueZUv3FzdWwyrxpH314tVMcXN98vSwf61KN3n98Pnbb7LNYtQFt855gxaaSB3k5ngWZfTg1RwATrkdyXQs65",
  "key15": "59iKF82Y5CFZEi5byTDaMnrzvt7LLjrLDzAK2bcyDJuvvLWMmeTjweUzUjTWy5ocf9ECDzfMRehbKUtMv2g9VFmw",
  "key16": "2y4d8iowwPBQ5GuT6NrJTbE5XUTXcCafEye7JKvXUt1mrEJLZpVtrAghc4pAKYRy6mnUBqcH9RyTwQGMC3RDG4na",
  "key17": "4osKTz3haRak4nTAr9frSEERjfqnBsftNMFgbrYx9yhwJHvsZi3FLfkVeucgc3t2gWr5WgTqP4pAtBt3U7Tp4Sk",
  "key18": "275mBZsVd7Vcp18cZ4xNRwzUDyKecx5ZJjqsaPRSWQyJmU8yYBzcExuRozzFa8ZHvm2YieUv9XJRL4csuZJVeFTt",
  "key19": "2SZhGG2a5Cei3sbthjD2cqoMaJFwiZh56U8kCNww6rBeTs1tSZqaLhh24FMGpTUaFouXdDy5bZQXBo8ESFGUwVCw",
  "key20": "294HMPXE9T3NsXwKJLihHr9WfFTSaaDLKhSvKtv1Lqrfz6D916GaMyRWvR3pkhh7Rkh9LF3ZqehCCncZGc2umo9E",
  "key21": "3ZRbBQBc2CessKnnA9npeC4p7cz9pnKGDNXF7SUJCf62yab6iTAGcSr24F4i87xhae1PEWZNQeHx5kMYYG29BdJ",
  "key22": "mvFSet7DsH9RqmGvC69JDKLG2FUSj84WqPyxeCV8vAUtoPcq52EaPFzbBXiWyKydZe1XSRHqdLPL2umgacCd9bH",
  "key23": "3mmZX8GHAaDReFMH9PfsKnyvmH9Ne11sD9WipRqudDsX8bdqEja183A4x2YBabgLFQFTCiGSDVDozJMHC5D9Vbqn",
  "key24": "4XP49pYejr1zXtKLK9STdBeetRa1np6sMWsFC1epxpHsy211vrspgLGNLh8UVgtnGvWqF7mdeRvbuQC2ECW6Xa7p",
  "key25": "4EMUcVHMGwY1ZLCpMPwXn3f1uAFpvmKEjqQsa51E7jcaNA1g8SwQYrgMThk9NDvg6Zg2ydHn9vEUbU5zaYM4qTi6",
  "key26": "3c5Fa95mPtJy8opkK9oufK9iFgaDnUG1PFt7GTzrokB5E9U7eKzfvWvVEPwe47sj3hDcLUbwBHSFGWKbfnRU9y9d",
  "key27": "4PZwTuXQnMJVB3MJygLQbe9TdLUSeXKLfw4AboNmRyuJUHvcbj35SqHhiLyb7cBfKJeGjtqGkLJvGc47e8mnENuG",
  "key28": "uvSitzc2STrXkK1poM5E4AGjAiHbdYVW3tcenX4TEYam5g6frF1PejJ8ifLP3T6BLsXjWMoCkhPRiv3sQgT3xTr",
  "key29": "2eH9Q9mLSNQbSMKiPPp93Y1uDwVZ8GEXmRPCJLriTK8CNWhg93zExJS8ZPJqdJ23r5cy2BNBTsxZqR2R1Q8J1JxS",
  "key30": "4qH4GX1Ty7GMYSZLpN2UDcwjwdHroHyJWDDnPD3u48XEWYdqZos37H3Vue1oRrx1TpesfrcrGFd79FbhFkJ32QQj",
  "key31": "cT3UCrwKR482BQanSGmjQJsmPX5GaCgaFtcJ5NERkAXh4oenRfHXK3Gb1nWyLnEnddamwZJ8Rm4sqjGrWTBSpEk",
  "key32": "3kDYkPnTyHZ1bnQMhnNJEyvYQECXWg1ZexjwvGMxXScRTLSrj3RZbvgr9FA3Govu268YRqsEmdfF7dkDneBkFMwt",
  "key33": "3xapcW5ubcxHuDUm3b71mmD5UT4qd2eMY81BcYdA7986eXsuYLj92oD6DSTrx9HdoXYTcjaaDAHwJr8yGPenaRz3",
  "key34": "ApQbTrbTCi8HZMkvzfyGaHhZfoHTYRdf8FrKWpVqvtBwyULD1bshtFHZSBuZjr8sC7iJDh6AYokJCFMd65xBYrv",
  "key35": "byXW8HiJK4aKwR16qviXGEHyh2eEiaS6dNsimvXfDReQfEVrgwqKhqayyRCmwcrK6p2KTkm1tJvqjWdD3E4WiAs",
  "key36": "4cDHkkk4GLfhC9jqAdUJvnr7q2kFwNYeUVS6zo8prBLaheTuTZ59UtrbGcBaJASNu11oWAQAtdBTXja5h8qg57Gj"
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
