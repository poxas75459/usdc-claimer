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
    "4ei6vQcL2MuYHeWE8BKyfvzEEMQzhCmBtf27f63p7DARbmkHnzYBJEz13ZJJBWp9P8v3mt5xEjf6WMVHy3mkQYLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jbLj84R38fMJ45eiTkuxHHoWGWaPcuk5ynhf2wkrZ7m3MJ9bCgE8jm9YmSGp8wqMiDrzgnaMbn3djTx66CfPJj",
  "key1": "5BCLaCYmKDdiRdniDqLgh8jir5RQyttaSqTjzAuL4xNzBRRFEtJjf5poPN1BbTnoJ2RDXjWHGGJF2ktKtKd8nzmj",
  "key2": "KJcnTMd3dXf4MGxLE8FFUwU6N1dQhtTMEDAzokqH2tfG3KVdNJfDq8RuaeMFNZHfavqK8cbCbvjKnuhmevLD96p",
  "key3": "33Mu1dgnigNB2t5zxVTatusuLB5dEUUuocpmCJR6NYFLcus5ffSBpgotPZQ5yTC9jhPSPmpay1pP5v8CFs8Bkfk5",
  "key4": "4cCAo5MdFEFKzNzdECDb3V4Fnoacm1utwmJtXzmo2xMboURnmVQYausR9Ce1ZoWW77j53BDvkMrwRZFGPAjxZSrb",
  "key5": "4cjrwB31TeQnJe41rqKDZtwTnzMDBtD4YKs12LbSdFgyznGtte67kokweUdeb6RunqQWsrpXX7hDKf4xLiWX51u",
  "key6": "U5bnnv1cvw8phNXmXk3FBdk8dME2fvrfydP1sGcSxJMUGz8WuZUveaXae1ipobrXxEyBd79nYkps8vGub87xF3L",
  "key7": "4xJXet6iNJbuzBukbVxvxBRJYrVRUGkhPwkKtCURRCogbdb1Yda4drB6TPou7h8BG11Yk71vjo3AF4xWzQxvkoNk",
  "key8": "3hriNgwJjxhr6SxBnHkgArPjctpNR7915bB7sCERCbPbwTKqZKYiDwCBm4FJgdnd3P1stPMZoGQikcxEgsU75L1u",
  "key9": "4nD12nb3kHjHNsYYzGCeJDHsvrK5ShbY6z8VPAECtGQstZda48Nw8HGktrKEs5QGgaf1jfcPUWn3QSXVGuc8bJex",
  "key10": "5VpRVDU5LgC8TFTTRu3BTr9eouqGnWaztYXk9gff2gUzZNsmEuiaTPXC1fHq8a2hRLpmFBBdXASn4csuXKgndd8c",
  "key11": "2yvSsVbxybrQXbk5dSxx6T7quZPNkFq6YhCicrTsHzaZtXxhEdLm9cTKLzRepyjXoZ7JuvjVeXYPmqXuuWEw9euR",
  "key12": "55h58vbhBEjARshu5Yy9aoWf4bUY6mQ3CHhTKQzLgT3WACu6jgNv4BLAE18pNfaSzLq7LmGhBM7mcGJpfQLMAGv8",
  "key13": "2Y6349K2JJa9ssMPh8vFD23GZiRgEUM2mEssWqcmnEEf7LHmDwCeQNNXWSeVqqDyjPkjukReHYLzzYB4EAYSZP3T",
  "key14": "3tSYqBoYVJ6G1jMNo8m7voPkgTBja6DFEzRCJYiJ9EbTMsrmpniSLA9si3wGDRt1RyaFuaZGeuh6YMWy6aS6N1Pp",
  "key15": "2vYreNHZmHiNhVM5Eizg5Jj7ercBK6Zh8maeVy3Hs47r1ZY2AjGyvxPJzVDm3bckqfAkvFsmxQBYY1us4UhpNMFv",
  "key16": "NqYuQyjwf6FGt4bNb7gYvBDY4r26QFUdnihmZ93a4J2344r2RGdp9C3MGAPNaNevJmUfnyv9wWTS6Q7TBi4NsQd",
  "key17": "59qaKivbPEW1ZifiAi2jkGkAr7boWryLswEULU5rUvrnRify5tenjptL5QEe2kFU2Xk7FLjLDa8oysRSPKRSg9zV",
  "key18": "4E2SqtWkZeFYgmqrfVd6bPqUwLpA9rBZnD4bNCNDej4D1KYvKPjnN9ocrADQKMwXAxyveoRfAhQUVaMoV59Woayw",
  "key19": "G9LbJNc7fU8tbpXg238pw2xumUq7ii2ytAp6Boe5Qd3jtwCatFKcgMYRPKzJHQiaCXGogKkj3CdKUzzpkrxRejn",
  "key20": "5kAgXQXVTPb6zymdLc1JAf2pdPa75vzAUhcBzk19rugjh6AuXo3i4JmKqoudJmhVb4PtNNoHpeBz9p57SHbjEK8P",
  "key21": "4YjWqjWeXLga8XwSF7mMKEuM6uby3U6LsVCm3YPFCtKr4naZeMShYyAzLLCUAyGWj7y7EqeaArLp2vSUmM1rxixy",
  "key22": "QUfMmDddxsqKS5xiu25yo2EDHwD1mHBHKuKxqe2HyPVPCKh5o1bs6eZGawS42wFptcbWd6JD33fhtTzY7LCjkV2",
  "key23": "4zScZcueg3YbqKGymyPVTBgMD9uAniMo545ViXVrCYvAKF1H8R6zsqcRRmTJj69GBk9XEGEE4drQR3bprhMAFxNw",
  "key24": "4cZcfYtnd2mTNKYeuWyjwpaFiGRyk5QSX93pU3SERkVBzquQh4giqEo8d12Q6febQZvFSZJiQMRHsTxWudTEdciM",
  "key25": "4QoLWTVwKKvWpbV1gBfHXxiK5jpCWEfW4tFWFU57EM4KaKmaKV6gCPi7Jbc5vQhvcFp59rcnFgW9SgUQDUHwkDKd",
  "key26": "4JcKQyE9v2DE9Tyc7n83rfS6ZjuuhKBDpdH3mPEwGrGhb9tiHEiyf3nuW8j4BDw7fiRyHoUnUc9jVJc7SBgxb3Rw",
  "key27": "4nrN6Bzau5byMnFSpMbDi6Hp5wRcLc1DEJRZyVtMqWm2GF2U6kAijVPyAnEmXJmoFQUVoiEPZFXSedQymbSn4CFi",
  "key28": "3PdC3ePy5J9WE3v5Y235Yy3ggVRsYWaBEDEpUokceqYfehyiZpDvTsnLoVLWX7rQhu2HutXP4u8tBztqXquzGt3o",
  "key29": "BJev73p3FVQeWU8guyiaWQdS8qxrsEPFYCCuA4pZmxnQAYnZrkrLx3wzeMsyqETeZJ2MnfDEMLL3DSrrEnyc9bW",
  "key30": "5HEA7svmhMyQfN5udbp5cwFsR1KzKKdY4k4Ei484MF2ATrKKuhrNHrC9QyEZcztxWdvMFU8ASFEMhVig3Cfru6uc",
  "key31": "5WEDprgPk9SuEE3wzyY5urNaC5aNd3DQGD4DZGuwvAEmPui3mbrDzYxjh5vqE4wrwrmgNo7PGqgKYBzZfmr2z7nA",
  "key32": "3HA36863VG2stSnidmfuo6LJaacPABFUUr1cr8g7fZaryZkdDmn5oFYJErcha5vTNe8Xrq3pwdMDJDXAgVYDdvws",
  "key33": "5A1BeYG5jsi5xDZxFL1XZKs5MGeQ735ZWDqR8n3bUhcPuTFdq3cZBK3kZHKLLVgdZ9abmME9UtxN9zT3Trkk1dkB",
  "key34": "2exGYX1XJu76jXBKv1njZMfJaw7FgMJXeZ4owSAdnTKGfwLzejVg3PzJDLFy5Ej2HP1gBU7MjWGcL3xvNRXg6Mp8",
  "key35": "4qk6KK9EmczCPDKtN8umRvbX4p8dqq1MT4LdgBAtRMbRBvXXnKTA3VBoaPf5PWJJw7PCPt8ySwT8aKyqDT6md3Zx",
  "key36": "26kDdPXgMwRQKFiMSVxwunqzbDwBVcg7Tk2QstthRm1GbnqrdiHv2NpuJKTphV18ReUVc8uoH4swZENHcUekir2X",
  "key37": "5wV214fmAQ2jyE62UrNR85Vth8ZyHKbwAugzWm9JkYYWodLDcuGKxzWXDibZhw5PmQrzdbedsz78SgR7RLxfFfUD"
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
