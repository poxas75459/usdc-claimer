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
    "2iJefRuBsNTtym5wmQ76mniuxy9XyR4SrN6RFwXvWx7Eq3Pk73LLnqd46w1fTnA5BzCXRqXQLRNfdeu48hJmc8B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oc6RHnk1XUX7o7ovcaMm3AwPNu3JRdq1J4nQjo6E3zHGgzgZN27mskPNPejrSgiNVVTUkjCWM7QzFT9YBJRRRpn",
  "key1": "nUtbgLHvMob4rz5VpaytuCMbRnmMmt8VS1k9RSQGHBMD5AKcp3T1TRM4sgnwV5Huv3nHFgYzXnAup8JJFfNgVC5",
  "key2": "649fengKiwnGg9DFvJTci8qn3DtffEXw9gaqnFxciiYPCsqZF18xvjBbkz1Krokcv2hSZs7RewLcrJ52cMMYS68h",
  "key3": "52mSHcKgsHZSBzSMvu6bjxLewvCzY56e5Si9AiBumkcxaMLK1xVNowHrNjJExurDt4mpDgc6zb9ipsi6QwJMkktK",
  "key4": "2opFjsbH9C6oZMr7xFoQDXqoNdU4woZUahsdokcQKgdLR427AVprDaCkQPJ4qBGL5ouKRaTnbcULRoF3ycgKSjJa",
  "key5": "4MtDSz5AyfnuzxZLKJRGB48ZRQBaKohbE8rP38yBas8eCmsbpUqPDQ9DkoUikovzwYGDWbYhQuLKbohLDtiepG4E",
  "key6": "5j34BrNmoz4xfAbK8onYjdcfdV1qK3G5XmfffsoY6Mqh71PKcSJWjKksxx7dGH5uaiV8QRdntdLhyBcZgeBMjtBq",
  "key7": "4KHDGPpJhB1y724jNJ8vTYJz3ZQFkCvu2t6GECuGxv9QF78JuAy5E7XXBEcmCRgS9hoxCuak2ftafJZTvCBCZmEE",
  "key8": "3vJyg6ktA34dT5WijSFUJ3f51dwEagnTXTdSm9wrdRnNv1TeujGYRs5rLtoqbzPR4Lz5ptgS8vbkFe35drA36eCL",
  "key9": "2wvSQyXvJCdWcpa2FsEUtDcTK2BUq3TyVTN7wPP59D85Gmjqyhf6WDJnjGcSYP2Jqxk9WMqwfGG3WoBiNpu1AerP",
  "key10": "5xmEcprehrWYuS17nHYXFa4ihTjhg8cUyw1D8hoBZrjcEEm1EjWWJBVmNsgwDJBjrKzjs5wpJnx7niBKA5fN6sDA",
  "key11": "45xw1EJuZqhdf3zhLbWrKVMJ6qMANmkuAkMdo2Yx1YiHqWCBZ2tocoooHj9mz7vdWevrRLu5qwotmKDYmANt37x6",
  "key12": "3pGRcWvFupga1PayqmU8SZnG9mEYk7SA9C7B8WJp1G7miuTRE3FhCcbVw424K7Q7CGLHhJTqcsD2PT8yPQAnzsq",
  "key13": "29LiecXp11m8XkaVSJtxbLwR6HjWi9R3zLt4arWZ3gvDHcoegFSFx5tRDgV49GVghQBFJMu3UQpcQEMJPeF5eavh",
  "key14": "3hvvVWmwKi3sAyaeuK8XrcyMykNTofhRL4aCuwuCFjFGnAn9oXj1Xdn8Y6Jw3RzoTtd7Rb3SJ27tBD1LfDkS5Exs",
  "key15": "2KA1BayRbCCfUYkCRVFaC2JAEFDd6GJXYBJqWYNsNV3PbFUndGXZ69gAQFCi1vKhaUx6dKr95wEH9d6FG9GbmSQg",
  "key16": "5UpTfLuVzKsknYjZ6dprfLu87a6nUCrbUBz7RZN8z5zdqUqnFvHHAYFJqtmftVPCZ3DuuBWBmJexisi86WNpvt7u",
  "key17": "2zbTGqH6fkpmbPUoHijd6bAMjDqKsmRTfxHVfuwRsEAHdZgq9Bpk4QGisnPGDf8vmia4NXjdDKxA6aGQDtLnkx8t",
  "key18": "3KmrrKBEdMR8aX9E4enMJDDVy9kszAvwXRjBZgrS5DiPTFhdbQvpBhgNve5D6sWo3SerztZzFm3DhjaPFsqA7eZj",
  "key19": "4jq85nLdDbpySXeQ3FQuRHBjSKHw6sdRFfBNNufpzrERyaLXK3T7jJBKBCqFG5zyQ4cT5F3ieNzmRzaXi8cbxtUt",
  "key20": "Yvv7WPApEUxewY1XbxJzvfbT1JNR7REVBhF32UyDBmFTdk1PEcdikyhpv8h5LUKMMdo2NmxtjU88h92krtR77KJ",
  "key21": "2Kvj69Scc4d1j6ygmH84vf6jDhJCeXgxdFSxRcuCwXzFrZbWLim2d1Vw8fosCsdSTu21aFcqFvshJkCRUP89arxS",
  "key22": "4HeS6QvVst5d2cAL1X2uLAvzWqdw4BF73wpwc2jMiCoNHVde98Xv8RjSF73gTVtAWPdsVNed5rkSE2jTvRp9RFc3",
  "key23": "3vo3mnj6zWBqbNZ96hkHvz6sbE7LPoJUtf12ureeugRNCXVHTUSMENiM69NXk6Xbxp3egdbHoAvx3rogE17XqP3q",
  "key24": "39UDUgZxFigZrDWihXsBpKNgdWh8DU7AR32Pjrg7Te9sbxjPrf6mNizcyrNjDi4LZTxEpZCRKcM9GWPuDzyosRfi",
  "key25": "3KmdozWgwsQZwAfUXbFM7FrdXdbkWh7p7xYULqi17vZqUvPuBECKKFeasqPKBMYsTmDbYmE7xsr6bvChQ7tPh2zV",
  "key26": "2hQ16aPFknKfV9Np6rVuMs1LyV3ipaDLBbQKPuRpewm98JMCG5NmNG7TXAWHj64tZTz3xFHH66RDQairmAimJr72",
  "key27": "5kkAcz8S1Cfwq8suxyvG5bgsjqFmL8XvcuSY5fi8dFt8CtP3rBYNqNL9sRVUqYTuZcJDDECjZt4kkwPA8Mhditsz",
  "key28": "65sBey43ekSiQB6WwknJLp3tXYSz82K4xHHDUxktyVXuzarCaipQjtXJKCgTP2NLXQRdhdYst3kycpce4U2xHeQS",
  "key29": "Yzouws3wGdqhHCzMML8uTwxnv5JfkMVAvV7qZ1jbXSR3QPuLGMVpRVEXnfqRsmqQAvyLsEkHFizhjes6dWgkHjg",
  "key30": "Cxi97igqALmZG9G8VnVCL3wSCqEamFWnjBQEWrC8tmQ2ccpnxGjJn6q1EBptV3XTxhPcbuZ4gCcRYggMtPccpAm",
  "key31": "ZT6wNc7RxL4wy8TGvSzvgLeBq1wPjhtCMhTADnmccDdRFvhAMUibb2twVxQKZkbQbxVZfgHcnZAyHBA1R9Da6jS",
  "key32": "3G7DW7AYRqGqUYdezQvraLwXeZMADtmQxA211zKJK4iP5BFZHGCo51SsnS2SBmgijyy8dUR9ohAfqvKSpAmo6kEi",
  "key33": "5yRyo3gVGvEwvsYbnaZHfbgpodRCf8b5LAFp3okKmh2u8Fx8URUiKkbtTWHBZiK8aQH9h9iSjfP7y5EVFTTx7Z38",
  "key34": "3z6HBGva5NvgiW2y2mw5rTA9rhfNFDHc1opDpJAYaUbicfpuWE4ww8auYmp1igL5KFDZL56QenTZAzBNSKcUKQTe",
  "key35": "5FpYFFmTNgXn5H6AGQnMWve4KGhY7U5UU4wJK6Y2WxgR5YWUptwRtVM72M3RENkxR6hgtTZFb99bM41H4qBAW21a",
  "key36": "5jMG9bMp2NvU4fukA7jJx8eZbFSrBKD5L2ky2Zt9tLhPYiqLjBUCiKMKriemugAWwMQ7TPooWF4jFKHTKvBrfdsY",
  "key37": "QTF7Mg9q8Twn8Nw1UQ9oBma71h5qjEjfWivasJwq5mt5X5kSLgCtVb66hYojnC8FGGRasEcj2FRRciDBM6Fj9Wq",
  "key38": "4s7rvLKGHZM3FSbBMWXuJ69tDZUSkhsafKQjPuPacb9sM1h84XsmCnXifL98vjCcZPQbjEcoHcSW6YMrMnqbnTnQ",
  "key39": "9wycXUsfaJCwYFERLmM5m9pAjPm2ycNbcriBfjqHqgdeEEJbTdVu4emojzj2CmCxmxS4dookuusF9pkD1xvPGpu",
  "key40": "3MRz3MTJktAhmW7vfa53NJ1ypGYfhkydMVr9hrNFSpPAuTj9AuaxBqrG9Hf3s5sYhG2GKcVJ4HvA1hG1UHtDuk4d"
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
