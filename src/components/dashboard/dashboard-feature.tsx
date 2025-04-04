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
    "34k5t1qnFpXdWfssmxNSpU9cTWNtbxYF7d5jmbigfkLpRSfEpwYBWAuCoHamtUHqhT2yRB5n2gfNcxPjc2Wor4GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qi1RXDBDHeq4pc6JNefegvrYExMTEG1uboG5tagEsKQm9Sioh4iggh5Ryef2kFBR7CrnhdjqxTgu5Q11VrWAsDF",
  "key1": "65PU4y6SPYReXr16UusC5NL2ytNe1jJx29176h6resGZmYhjPw4cNk9UUniy6CYuPYoJrWFvLdbHKT72vpHpDD5K",
  "key2": "62uVJfMdrbKVK4nifM3W9ERrgkdJT8ks2xiuPkNJym9SNaYjr8NLW2Nz13GsMBppVrKZwHG5g2d32ycoByy7uVgi",
  "key3": "3qeJ8YTFW2FEhGwEQLsaZYpuU9FqCxw55j8nxBQrrmbTG9FDQa55PYSsEy13kkA2ZfWdKJ2RwuZQ1Bw8zwSVdcre",
  "key4": "fcMAk6tSSusg4ZPipH8qFrebGyffkWoN956Pyc7VHuaawrwy8LBMJBsAMQ9Y1NQL8YPwJHSKZi1RiSYjZwtXPqr",
  "key5": "5T2bkDhgUx3v3KXfxBAFgdgpymkpeFDg1Ym36tgJ6VGHdhS6EYckFBBJiGRiAwSjxD8MjsNKyQve1QBqo51RHXDi",
  "key6": "bTNJfFXJZPpdHjxpvKbNopLR64nGNuFKRRRLt8XaBMiHg7mFsjVJHkXXBdeoam4td2t8YxiyjcWdTyQDcqySQos",
  "key7": "5EWhkgB5YPbUGCkVSSfrM64Fyu5MoWzakrKWPFVZ2Ek6g7xgqfS65bS9Fzi34HveuJ2Z2YXnroreg61PvwNwJ7y5",
  "key8": "661QjTKwz3pqdLNCMeszZo1QYC5AJi4DAovJjmB9qpVtzYRaonoq62pArA2HXkZ16QFobcbyWbjUV4q2fXQ4f3vD",
  "key9": "ykm8VPQM416hCpAUwDQAjuCepSgnxeogCYemgrMN2FWVMCkRsgxWNBJ2L7XsqYbB2uYPxS4rhV16cyAPayQxueJ",
  "key10": "4hq5YggdDguv8QgwEt7X7DwLPHPyTZxtgDQKBHH3abLvcfH5DqYcxsoKidB37WemGVp2JunRykF2Mf83Yjq4mXv7",
  "key11": "2QpKHcn18Agg9UCwowDs7uL2ncXsHV4aK72MY2cB2jHT7tEeejNu3MjYyp5tMEJd5mVJpVCPnUeaCMyECDdEJeKC",
  "key12": "3w8DPAZxYuefheL7tsYiAkqdwZYFmd22RbwkMeFv5eT2LZwwEGp9CtqW2MU6UcB9hGNikBjLfsZLsdoe3qbWDqJn",
  "key13": "58rpPw5oJuB3bc6YfB6ByR79wk52XKAWqjrs2fn4bGpM5qrk8nmq3foSM7xtxC5w4H51ZSX3HAE2L5HS7F7R7xmz",
  "key14": "3VY5xgx69vAo7nbeADhT5uokRnnd77xW8KPJSiTgdFrQjGAxnFzMAd3GZfXAL4d3Pxsqg9q847Wa2haJGYme2N4x",
  "key15": "eYivaso8qYcFfvrsqwnNEgFADuyvn1JcTFkd8r9j17oWDVHqgT67faSCPnPsg2uP72S1gTSy1vXVh5FjpaEuciq",
  "key16": "5UbraDqEjtc9DGHmG7eTVAF9N9sM9vRgAzh6wKa638fueseXhRP9mSNmevGE6yUrwcUczyiYNXUAZDoXiWnwhRb7",
  "key17": "2XjDH7BJRAokqCh3EHL99S9ox5v7BKQ6KPsQWB5unBihNNJQhhQWdA966RJzyJen5XoCdm7RJYyQvntEZUyyoHgC",
  "key18": "54zicbxJFqoo6KFLDVEYedzuRk9StM7K4AGzkpWLqvgS38CyrHPTTkDr5F6PCk7fHrhkDc7TCBVQBMNqHKzuEzkn",
  "key19": "64dhhrW9hS2wM4Q3Qj7KHH21EvjKCu1PyocwXETDmEWmrdHqRgDDfXcDzZRSLwGFJp3Qg8HT2k8q43ev9yTrAXQG",
  "key20": "2gjyzh784FKWMJBUY3D5CX9ae9bmRbFXQe1gCj9LpjQeo8QfQDMPgSybwH29meCWAg9ZWkn8Sa4phSVRuhLBP7Fn",
  "key21": "349bSikJ3suwMkBduEyUTLxdb5h3in1PtB3tpNizH3uNy2woQz8UStdAjLc6eE5UdW3gmg5wPvmByRXdwFo6gDTu",
  "key22": "2pULNWtsG89ogef7MBHv5JQw7jadPQiT5yoHjTMcbX8D5PwUvgVWwGvv6m8oZ5aobwsEwa6wPkBotyE9Um1q1fJC",
  "key23": "63LBaVL8gjAgtu9UeTBTcDabd6Yqds8oUsymqLSiBkB1XGCo5iA3uuXSMGuXSA4oHFXVuaq4BRkqVpFju1c2wkMH",
  "key24": "2oL2yYfqM9yrAQ6swJjmb4iGgNqCDikt83QwYzYAZ7hoP4zWiXHSoMoiF5u4NW9u6jud4Faz4evjAiAhHRCdRprw",
  "key25": "2RLch3tQcddRo5RdBFhbmP62sKMLQ4H2qQNZzaj4YsmLciyGwt4YTws65QiGQmoMmfWEYSQffudfNd7HnsDwJ8mh",
  "key26": "3AKUcNcqngjMNdMzxPX2hxCJF6WvEVDwFuNRiryWYrhszktUUj1m8v3beM4kVKBsWoG1xS2sTLhfHDQC9oGTTgqT",
  "key27": "57tVDFb5ppkzg9NyxLBjkC7J3dPCAU5wtGcdHgyoVsJxsMDDykASmy7y7Ux8Dmzd9wCxz4danq1sBXJLTpYf4e7n",
  "key28": "5Xspv3vNZRwd63zmnjqjEm1PrZRdqZWJCpfaXtgQZDNCjnRLBLfi3t2xEHZq3wRCeVbJn8CJmcd7r6xTjEFcnByx",
  "key29": "5Pb5wa2YGJe1QB3zVcYnPNvkZaAVw9Vy9CQf5kyQFV7DVFsLvLM4e7Xwetc37fMk6gWwivKbm5oNQmakbSokbpnd",
  "key30": "4WocNSbb9fAx7seLKkJaxRnXWt1V8PRBXgTcSbxiPvbZ1ZqwaeeRWzDtVzryaXn1mAm1v4ZR3sJduNxX5YK3QGqS",
  "key31": "2bxosLEFnZ5PVWP2xzhNgci5CirwR2p1TEsF6GFVBsT8hmBx6X6hocDWbs24ajw6uaCH28qFC879BVbzjLY7wa5o",
  "key32": "nt6C1jSbT9hcfgaJVvUmSCYi2zQvkap43cjvCbowHLaTPSekARssLBwaoFV9dNa7jMGhMNkN2Q3PCgTsGGAeVLo",
  "key33": "4nFFZieZb9ytexBxLSfvYx2pgDMmFafbqLTGP1fLyMNxoAsmtQqX56yzDGt9pweLee9SEhcwkRWpMjrS5d95qL9i",
  "key34": "82SP3RJQpDuq8nZJkw9xVhUsgFtpRRHHEeoMgxUHnQLmyGTUMU4gB5SjX6sYz2btNBeWfnwsM3eY6U2j2wScYVA",
  "key35": "3NdaAAuYhbfcnqf3bqm7BG9iRawHXTwPFWCCjQABproW7o1a4xmS4cU6qft4w4P4rHWC1rpY8DjDbn37mLNMRFxq",
  "key36": "5CQFwgMefSF3o4hG1xP86afnTuDU9SDtWXVFV1fxmXrtLHyMACnsQBzV144JnLpuT66LwPojUxWLGacBMW3fptFq",
  "key37": "3LCYM9GbNzPMU49n5jVUwHhtypDQdUtHmJtUtmq6DQgma6CUP6eUgCUYvP8gpLmfzi7F8FWHjfskmPEbUrnD1d1s",
  "key38": "2vMgSdB3kyXVN43E3mbzGM3a6zrzw7vQSo4ChToLcVntJixDJzPLy7mPmZv8MbYMBrhFHbVHrLk4gQ1fKkb1rJTq"
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
