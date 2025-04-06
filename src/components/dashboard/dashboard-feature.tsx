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
    "4zxB6aubSEXS29CD2RZYQ1TUnusLekjZ4CpyMnzpAwUaxkr9GvfEfFEUrMYHFhxC7kDtUHQaRYFeJZMDsuPYm8MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xoCbxk4cWcSyEvMePeNMYispcycs9WKMQF9NrgXaJTsGuntJzGNf9p2iuQvBw9XQt6V2Cagj9jHd4JP9WwKmUie",
  "key1": "5Ma7dNW4VZfddzcmr3uo4JmCUcPFZBDYDE6uzCoy6iDQH9Kem216tqm2dQ3by2y2mVBQr2FTUBEPFJ8d7TpVe15P",
  "key2": "39h9ayFLHisqVqMnXesihmVwZFSugq4FtS8HTzKJapKJsFZ9raghNow9ZnvSMdVUdaVboK2wYDXdgWdGqaKzvXm5",
  "key3": "526MKyhefemg349R9wv9cqQfo5mEsTFo9zLFAPZ2mGYkJScz1cZWok7bPS7agVvi5GqwXhcUgAUSkAcyjPuM3z52",
  "key4": "6snWu2YvUU91bRyW7fvsa7TXXbwBEC88TiKDX8M4VxLnZFe96fjrwjghrV7BgkiGdR5pjBAChcF4vQtVtbsHuhc",
  "key5": "4QWDNfhFci17nh6WgjvDbuCJeTct7agHwRnEJsDQ5PPYeRxrwcawQV3rKvYUj7WbYvwp5zgofHGVxxupYXyHQvKg",
  "key6": "42HMJeKBzNjvxqztCz2x1SNq1yjJFUVGprz4JaZZYqQFDcgRnUZDBMjgAZhvAoLQ1Z3mZkqwiDZ9EQ2NPb51zGgT",
  "key7": "4HJA7xZh85qqkbEuAiRuvhtNAzCkhk4BbY9VuiaimbRnNYws5FD5ZZA3Md49PQ1E367ef6tRgnXyiVkkZQsWPopN",
  "key8": "5MA1QFTP1uSv4ZMn7kKgRHWw5ttmScN4u15DWibSjcH6eaBPLCGsrRMgUVWgTiuBba6kukZySPMbfzc2Bb7Mkgij",
  "key9": "4Z3PLMtzWSNfuUYacW2fMRrfnvypQx2nA3tXJUZPcyyZATjb5J9S91KzqVWmtCdX9LUAFLRwoHwoRg32Rky4caaj",
  "key10": "4d3KmJALwXS6pmFTc5hAmM4WEsjoJe1faxp92xsAUeTfEcdXP9PdBibijrUx5AvmRMuXsVEBXtva1uPPGAtRhkDA",
  "key11": "3f2vT6upY2JJ2SWG6s2YvJfdnB6cucpv1p6He11n25nzgHfDZDYATcY1ZdC7UPq2rfUr81vyYRsN6i8kMvTVuB63",
  "key12": "621mC4bdtx7LU9Sk9hvvRVodoeWtjtrgvMjoG8DgMYcNcRJgHmJHT2hUN5aXQHT9uCb7ptj5y6QT26VVdFcprH5K",
  "key13": "5K7ZNhQDHdzn3pfS7LqyUPPweroP8mUmhjz2c1D4KuCwAZLUT5GFgk4D7L7YhSfUfcCuxPmSrbCstyCnfu6WqTWa",
  "key14": "4du2eLpNgKhc1LEDEE7QvePjZFYjxycTGb8Lqu5A3xeiFBo9nL2kVfS66sdKBxxtJiVUUxqmR74yD8RKKsP4XQD3",
  "key15": "4skk8fac63kgviiH4QgfvgfezdMPWVe1vmHMFHQcyuB5nGCe8DVhRxqtSPCmjfW4cZWb5H6qTUMMdh63rVjG9TJW",
  "key16": "4tWqoBRC3LGHCAtKtgCXdtLzUuJe8gkZgZRCmr4Y4RYi8AZe3hHAeUbjYmzMpbeBKVQdqNUyVZdhXfevBzKTyWTZ",
  "key17": "3Q3BXhNHPSobit1eacxGthXexrdDeSxuvFx1QGGGGUQuQyQ8QMaRHvGdVo1qVaFycWwy84RNA3GLQ4YZXkZZ14j5",
  "key18": "3E9awiBBJaRqzUzosN25g1hySY2UpQu94bK1y5sCKNsSNLq5TXEr5a5i9ZeGMsQEX4TaAZEUyXocjNj9ZCbNGTAJ",
  "key19": "4AEsbpXq5X9zbrp1cUaqx2iuMtkg54GUmtLWDmWzK7PD7S1tdNGGzWCF3hVS7aox26wTAQzjPwEQC5FV6CTq5FsY",
  "key20": "57f11GKEj8kVYz6jHhtv6s4mLEZ5BiP6ucbTSnWCcE7N2PX1B3AMeA7vVLUeBfZFxvQo7oRsXrBAwZabPTBZf1cw",
  "key21": "pFPmgf6iKLhdrK3nWFFEJRvxXmEZrQupdvSJAu6ho66m4aAGQRFBZPoEDDeyFFDxYrubp2WnaSL9pBqcipmJg3i",
  "key22": "5BKDfaYUAQAWXn2rCG1qUfX7nqrwaqwC5n1u6MMabzRqbP3hxXFFF5UpjgzYuMavPnDD8tiaMLjgE99F1yhs3rx",
  "key23": "5XwKaz6aPSAburnbS19FGGBwA2ceg1zGLvcCgXQKVfPwkeRL5dSAMmJQADCj9GsZhoWRypfXfeRHWuwEG4KBDYa1",
  "key24": "5W8ZVvLGR8FwUGrhdM8zp2kHNi7HuNhazxCbyY3zStUVyLZ7HHvEsDw1tr7QTFXZXfEk9GCTcfkHkGh7sThZyXHk",
  "key25": "4v3eeT5dnVubT162CrdT5MmkoarcCcw5Fbk437ghKLNivAc67gCexqdBwPEnPpfYyKzdQ7dKQ1NcqUNrNK9XJekB",
  "key26": "5T65LatUhPh8fKAd7yHj1PKq257Hsex7pskem3UepC6HnVZSucRCnpQaTzS4GzyCgh4kvkitRFPpBdqtGz8jRrjg",
  "key27": "5LVRDaKrBw4FnfCKAzcN8fFiMaNPQBwLyrxtwu23a4Rj7Yf7rDrmxXcU9rZbLN67LTv2NjwsP8S4xpcL6bELVZYS",
  "key28": "37VX22heaji14E4eiLC9z93QPPEF1wFYFF5Ht2V3oJAy6bLxb3L6d9WE7WFvA8FCKTcK5ZmZTTNAqbD2oSSnsLfq",
  "key29": "29razzFkuF5SH3VFLxTwD57B8rpaRxpGTRjdiDk2mJNNeW7JAFx4EPNZ9sC9tci5TY2rBXnrvTAPBBi7s2QF2Bqm",
  "key30": "4iVd3E3HKcSdjzMDKiXTJ64w1zpEju4PMGArUjjbrVFaeLKbQ8kyK5Vf4d6MYWuLJhiMiKEtdGw3mcvr1Cz1cKKS",
  "key31": "57g4CbKH24318QAz4hEdQNq9Qp4yGWZTZWGbCCAUQ4BCHkCrNwtYDjdbpejKdKD3GYoxRrknhooQqWFXAECkosDK",
  "key32": "3yG8WiNPZW1tziXRKy5RVpruAAdKED1V1iyUsZZfktrfUyu6Av2AY6iKzupeMtXQjFi6fyXhHbz6CPPFcHDANwCj",
  "key33": "46HMWpMU3qy54oPPkiGJmUVtYp2ncArbiZKP8DKF4pihdpoZTEZjbRo7vPCV39iZvGTChU5datqswEE4Uxj6xcLW",
  "key34": "2T3QztzGS2SDsQfvmngiVz36w5NZHsa9dn84q1QLC76o4ZbiKmsAUGKPJkLQfSihkXjq198ZJ7f7zqhn9P2T3akb",
  "key35": "2NkpsD6HePgnZJNPKbjMj81TQQxVEyr2ERWT8Fck8PxpMQLu6vNGZFpWmFmXr4adicWhd23wKZm2BpHPyNLfU4HF"
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
