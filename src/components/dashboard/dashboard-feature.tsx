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
    "2foaB3bEV8xubYNKBsvvRBvNZLrDUwvmGoTA7KKYUhuSmK6zVzggxTMeZ8Jc8iFdwxXVfGqixtSNCfivTGg5Mj15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETEnJiRDaEbDKzTkzsTLrwUZNJqyJCVj3zSeiMUZuzz1c2cuPJKPXL8NEvRVtE7dZVQP2ecdKw3e54aL8Kr8kzB",
  "key1": "ervVJwkhr5czhLCXDF243yPyDaKvRFCEZZgPqN6CmTZSnVcCeLMekYeNAuhyDYB64Bk6gxKnveTTVsuDwMMZ4t5",
  "key2": "4beg3KE7FbRuSUWyUhuPz3b4G5ubpjhrBHU2WsmRkuZwtZyuWe1CZgvvHk5EzYvxC172v7vJFX7MaUihab7ViH7D",
  "key3": "55vpzLzTvEH3gmLfYSJUEURUHeneqW6F8HD1wpbzh2GG7gdzKu4xNszpirboD8afG41v5EtikGAuVKfDCpgMrNAn",
  "key4": "3HC8hCcxUQJv2Dtozywig7bjbzLizqSRT9wWRLiFX5xpLBSCF19oXv2Z25tLJScRnz6aqAp1XiERhtqx2c5q9cdi",
  "key5": "4rNECdADHFJqckv68kWkPEDXusKonBZfZDHzhsuvz7MhrGonyv7McsNbFtTTjscN1thWp1q5DGrcSFBoYVcPP7Z1",
  "key6": "pWzqBjZLXC6jvchQ8TwYCuVipc947SfpUVdL5Rf8AJ5TPC8X1tZS35e7JLY6BMe6VR5Y2VbUDwT3FhoARBRoJyN",
  "key7": "5yMm7m2yyHPCrxyjfMsBKzVhMRztX5BLuHbmKwkyRWWUDXjyz9f1TUxe93ub6EFcx2B6EBVArsAyfHyaTsTWJHFq",
  "key8": "2zUPtcrA6a6rrHkuegsjP6d8bkrpYPgQxXRag8eQNJ82PCvohZi7ZyTbPJeujJKU755gXd5vPxgo9VYcZpMtLkuk",
  "key9": "423mTJHVekkeLh7d8jVnUJiKL45pXuTU8zrySXRkT4W9cCPBxY7KBHY9nW2GxApL41YBWe3LqySWXtBk1GsdZtDF",
  "key10": "CTy3HeJCXAPXfXxUx7ACXPRePcsRbzjRoZSaajSyJcTmC25K4hmg1XQKTvVk5ZLhVk7aEu1eGp4ufDSrGbanGnK",
  "key11": "3zkj6kGonqWYNacE49xCzBUFjMxFDzPqt6MTpRfYXYZDWpGncr8MPWn187PDakJpXGCu5t7MQRhbQqEKYS71AMa4",
  "key12": "GCcERdMbhR6uJFBAmxwRSpQsncXXYC3gi3vSrKrbs6G3YXDVU7bixyn5gcxyc6zzaJpkZevym3L6kobr5YwuchH",
  "key13": "56QLg3X1h8gkbV5cdyb3BbejbLevG7q73pj92GeaoKNFSvudV7Am4QaCHXk2GTzgE5hm5PtCSse4NjTV21N1wqpa",
  "key14": "21RyaBSbYQqn7XN6uBGxWBZv7ru15vQVHSqyoBaPyD21RsNQUFqZfbWWcsoLNSnaGiFairQUVPpFz8khBeCJgxc6",
  "key15": "4bdmhtamjdU3aacZoc1n7VwxYJffagXcs583h1cQKQg4b6iZzxYwGY35RWcyiNZPA2eCFUEE1t6z2cH3AgCH1feW",
  "key16": "4AkckhYZun5XZZ77pYHUfN6P7VMXVpaMUuEoo56zRYAFkhXT1MuhTTkpErv9DKb7JLanayxrZ9R7Sfy8wH7cdwvP",
  "key17": "3ubHunsoRqVLUYqUmMh94Km1gci35TKT2dx6QuLh6sEGu2WUfv4T7faCLsn5WakvDfX9pUVBN13R6QTbVvVYP3mA",
  "key18": "3UTkdeip5Rky676fRXWoneMWefgJE8TDFxPQtrAF1Sq4BNQmUJYMyzQkkvCs5WAKQBP7ThxgcrV7b1qXkqRAzBCT",
  "key19": "4kV5eX7pVtjEiS5BEtBnUCb9DMqpX3dj5upLRtByHCA6gPU8sZr7b7PvkXoHCgJcDew9JWcMqTjGpsmrWvkQu3PT",
  "key20": "5SbonYTRt4s3bCH5e6NVbHiUo8RhfLxF7pbk3aP9u8HEF1gkKLdwAYPFvHD9rrK7as29FA2ZjVDQmtGGU6mhaBvK",
  "key21": "4JVKUbQHARjGXNVoafeHLVM9iakU6oxkkd33kFLCvnPDt6KmmJx3d8iBENJN3iUqoAzQCX4Trpj1aCQTPECeTq6Q",
  "key22": "3TKDqRdwuXwHDBAQPA1Uyuea36ZjwvVhAPevb9ntLxr6r5UkhE85bYftWMrQ3xBb52PzoBEf3yNrbyYoNr4gQvdQ",
  "key23": "2hRACe5jKw6DLUHSuNKKgqeyH6m1k2AoSHhsX4ZXqrhBvzsyGUnYVZtMorupyhCGnLSVtz49RRGFLbQtgearmwp6",
  "key24": "2PbP3HZhyz9gdU99GkxChFa3dTZ2BxbUH11VCAbTvaGMLcGfiFjV2PN3H7Vrp6P2hScHd3mPnqTJU22iDu7Hjhar",
  "key25": "4ihbw3yf7JDXnh8jn5syKct3sA41riqF2iVz2JrwPzJc7bWBcjfwUs5NyeGtFbgzqMAdC6E2YWrEzT3ZPasjVvei",
  "key26": "3xjwwq7EqL3FjAnvLSSxTSHBPYUXFnsuZ8VF34YedWzUnFaWCMhZJjfbGp4kKHREfTPP1FsMtMcYxxrVFuidFUtv",
  "key27": "V8qp4sqc2coi46tkC2TuJ62ZUTejhK7NTs5owYrUgCBwKvFq9nf3KVt13omULPSpceuJDYrGmyWnu7QUARQUJPu",
  "key28": "5VTgvGCKJvcxpWhxqYtkKo4KFHk1dUxsrGGvhT1ZZPfjCfZVSxDQ2nBuN7NSuEKiq4AGcQgnvjEAq6XL6ZS2KGN",
  "key29": "3wMmN7V689g1PBwP4mvFQ6ff8pie55Zqk362deiXotVpKmdCbHug9fadrS65Wj44PjN8Yv2nUWXE4RuvsDPSVx9M",
  "key30": "5ESSxXYKtD1LWbJqoXX4VwYkFES9bkGCh67hBikWWt7cWDtKxJMDcQ2Vg6mDrP9Ku4y16zjU7GTEN5nRgFPZZqFr",
  "key31": "4B6X8eN7CmhYRdTH8CztVLJqkj9UFVeBBxaYQkKWzK19rfLQAQ1QGFa7Eos4aBxCYuHgsahzAPrYzQHUuzwfSaLd",
  "key32": "5tG23W63QtHK3R3a8W8Yddrp4b52Mx9MupgBN5PVHFuQ5GGkF7Vb8N2qfS3gniKQEWa1rdVR2qUKERVZVWS4qg7u",
  "key33": "5v7WEnmnwRh4xMQMAv93xgMgnrM9bBU3D9jjdYVhh4iouwrJHSSrj8NH72cnS7UQWaNqgsmSQ4kLKWMTAgeSY2qN",
  "key34": "5cSngqqEzp5UYUdSuPEuqPtfFuKZPJQyPWffoFaVCMTbsq9NoaQXBH3JoSBQdNo5AFCYkkBXPRrUZ65rxoBFtNPm",
  "key35": "3KtoCkLwmWXQh4fwASQhmYgN5N53gNu9u8om2J1nQPGoxj6fwicDhyrMNVPTUChqgoaU43JNeecbY8mBx3QUDwD3",
  "key36": "35qDv1T7SgGWdBPNQcW4zGx5ZAi452BjCd65FmLpEcBJnj2infcKe5MJbTWeHayTYGoJk58E7DVc2FRJH7iRor7",
  "key37": "23qwpeSzNQH4Zwox4RWKLmYGzuEVxfzvZzr4PDc7YR7D5Yzv9Ts3EHGUTvPdKpz6AU72Jt1GQ8bGe2rEdEVE5xyZ",
  "key38": "5QbM7keGh5443Vo2kEFRGssVjB2pBpS9PzzANnvDDNAQSg1gPgQudnfwZgTYNA4fbDRU1kAtN8e75fottZFB1oB4",
  "key39": "3hFSF4QeaP3wgTr3SKGgE2a9PpgbM3MUrvEbfSg5DLgPykeVxfxB9mUDDZXXp4Q6STiNx4AkBFdPG7dTpd6TsHwa",
  "key40": "5LLGT7zjnuyxkMSjmfUTe1SZcow9PMDE8FsdVEhc3UptcVDtmSkJUt5v5CR1MvDsxuKqHsSRBmmVX17uqFYY24s"
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
