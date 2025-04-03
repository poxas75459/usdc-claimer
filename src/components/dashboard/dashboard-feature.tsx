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
    "3j75mgA5sd8wHPD3aF1BbBNYuux1VYhzA52GW9LFSzC7wanoBQ1PHJ7QbTg2A4KLEFWJhc26uYVa1Z7nVDMHtCGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiJfkZWaN6SUVw77ADBnw7ThF3tgZ89A2LgHVfSRVdhcm4982eojtuMFRbtgkvVXBfComdEaGCMgPsZsgEfNCkW",
  "key1": "5DAtjqRrB1qgQELQsT7FU3qWqFz3iAVtvZZD8S8K5zo6ZkERTfJEVzQtwp2ZDEqmpExnR2kRW1mTTdGjwQPScf7K",
  "key2": "iMovk9zCmb2sJZRT9BVcZJScRCRhEpaf4UhVt2L3UDmZkwMkHKufAHcB27agCQXmb6A6zUWF3q5tYbVQmNACsVd",
  "key3": "5pvC4CNq9gGn1nfcLeFcGEyaSivK9i8ZzxEdbwLUpmwHpsHqg2ptVvik5i5ARXcDhsVZfKZTEcTobnWPKAD9Dd2y",
  "key4": "3fu6Cj5xFCkV8M5WJ8qaHFzD8FdxM6KUSPa8tADPyXMG8VD3SSfCJF2PqYUCrBuKPezBznePs8xWZuXJRZfAN78C",
  "key5": "4cDcjNdEUjShH4jgxstEjcyFEUcGmnSFEuy8RDv5KzdNunNeJrKETrQTBxuXUsyPDTCnPetbM6a5Wsy89z7fzx26",
  "key6": "5WSwP9dt4L6BxPe9LRfFcRjgu5CaRJtfhHwe5qV6ZumP9xRCCbGzfRnj8omdKW8d4YURuPSqR92hLtTmJbVuxD7d",
  "key7": "z3bnKFqKUvSLDRWxF6qnJrxFB7XRR86xVLjAHqFgcFJGna5g2TkDdMdca3Q4Mc9stygzKEx3HN8SvHbGw1MgyUr",
  "key8": "665yp1sA9fnmZJJJx1MhdaaaqcUyaEnBmo2zSV4GRndSRpmeVP9vJCsceK5B2Rpqm1upRHXnYvLMQvs31orEmsFy",
  "key9": "26hKWGzESdGKFc8pyiFL9ahjFYvPSQDQi3ckCE1aoaoGzRZ7sUSnKmyg3b3zTtnqLLXTYSRyeWLhJUg8zG3NvZEh",
  "key10": "cAcYLgpKFCyFjSezq41PQ9o4gPcbPA5nfnKKEaUBX5eLbZmaYFQwAqQsPa3HopVfkxTs7jQ3LM8iDJXQnuLCShW",
  "key11": "RcNTwUMx77Syj7evySr5Dd6F2txqeBesrp2eDVopHmQPeT6bucNjqhNfbxGzuVctHYMHavbMaUyDJbRF11vYDuF",
  "key12": "3GEfbYn9sBhQzE15crWdQggeXqSyveohcCeptb6P77m2quoUeB2CnHVzM2GHkZ8xXnLYHSMUdz9pNUjhABm5USep",
  "key13": "3TbeBVj6RJWBYVnvqLCDeS4WPYRo9zR2sxQB5xNxsvY2vZ6AwETSiSaX11cA3cyr8nNq5LPMwrnne2EyhxD5CDpv",
  "key14": "3mZpAKLoVK2316JbkgETjEiPCj4wow4hPN3Fxy1tk5LSk2mkBMaRm3hwb7aA8qNbSPgpyiiv16uWg8t1yDLHHYSJ",
  "key15": "4nJDEnKKWvGTcx4X1qTYxtzqx14yauYAKhwRTKviUvpDfZ1cErPMKiDzYU6pv7DPo6RnE8jKg4yk3nKGLEKsdGmL",
  "key16": "BkA5jep8uYoAbwDmuVmbmoShqR2XDptwypaJfUbUudcTP5RdRYwDBkAYKW8b1BsxwcG3pPy3nbwhYcpfS1iyFN2",
  "key17": "5AvmpPUonY3grr43bkvJQBAp6ZN65DLu9qjVWJTKXZ7cJDaLfCcAd84JfvSKRJipqYsGu6dB9DomNhtYJtf5Hd19",
  "key18": "3CLadxxgK8gYgmRp8uqteoRAZSpTaUQkcuyG76W4ayPpBv1M576FPJcrjJ9g1DWvLMsruFVt6b5io1zEdAA1Ec7G",
  "key19": "4G1wSrJZvCdY6pAM9c2iCR5JkmSQo79fLpLG593VYeT4QC9XLDroG1VQNTxuMrAts6P9XD9W8aMAZYrxiqfsTCWu",
  "key20": "4bxUgENqQRAmFDGVtTQsn4ySD5PcxSg6WY2dA6ULExNUpDy33tmKcC1k3w29NkciPTRwdkWi7CbA8ZF1FJ1pfh19",
  "key21": "3G4dbUUdfa3cD4vTDUdvBXzZ5BqzeUWCP2joxp1CS91ThF3TcJQfMsgREZbmA3Ny4jg5ise73AcdDWew9dURW4Pb",
  "key22": "4u5niwHVRUCBbbDNmS5pqgbGFPhvrYSnsYaryVGRvcQ1rKEGrtcVxgPdXJXC41QoyYAnrs9XYBXJoLUEHNY5kta5",
  "key23": "5p59p2mpe2z3kTyrsWW9UyDaDtEdBxmyDXhiimqAEyoitAWVk8Zk561S3CnAcT69vCcF3RReMk4EsYuU7U75oy1P",
  "key24": "63qL8pE4L61VH4NQQntdAhrw9mC4pq9ZKrpH2Q9bgTM6eHkRAG6L34oryzeh7iERaFi1sYpC4hQTxgzH8zfKgwBY",
  "key25": "5SPa2YkbSKgo8S1tUCz47XLwkZ7Njxu1hDXcRsdBL1jMm4xK5vvL6AbSnZG1p8RQbYTLjdf89adjFm4sx5Wvk3XE",
  "key26": "58vkGxCEiUfJShdJH4Yck8n7tbodTfuvAW1iCTqxKvaA1ECqSzezL9AtfLawNTHmmdn18jHUSrSUNbFsipUZ2h8Q",
  "key27": "SRcYUwnxDQQ2hjjXPScTRvT2fLRnrhne3pXcfkBbKbb8dJhSreoZfowVcXnNkR3WKFbpnxec8YqHPWDqTDHh4xR",
  "key28": "4cuRF4pr9FzL9niWtq9qn3LUW7vtHbGaS1zQVE8S3hjxHXDbqntproYa1YAAaXJBEXDq5dgDQTGtrxWRACugTG52",
  "key29": "29hMcY3DdShxrR7kNfaDNdF8BQyr9JQBtCPi5BxiC8reDPEK4r87kdSwimDJzFuEMYuXD5NQ1JkCkrjjZF7EK9X3"
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
