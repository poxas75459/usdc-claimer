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
    "8C4THUs7AutEm5bBnmdW16c496YYra3gZWm3qfdf8X5w4wYYq56UjtG5gLNSVbtoxyXR1Xq71mz3UBm4UgG7PaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7v86KbuUKa9kFSr4mGkTiLHLiJinvy9it7JDQATpLXo3RFDvJ36nqb4nn1nmQ4A1CJ14dWEKwRW9pZByk2ABzg",
  "key1": "44k9de5VVMyfFfifQHDDFSNfkiZnoB4GnGyGqe59yFPYyCyW1a2HaHi4N2SaRy7GgeVLYEp2iPee7oT3AQdBPD3Q",
  "key2": "pGhQBmuQsSqYBVFdnoshgwS1YFjg6iFpTRoa6o1bobQApxzDgNm9ez3njvsgmkaWkEXjXN8qcaGHd8yTNbNLWT8",
  "key3": "35dZAqf6oR9WhWodD1nx5hRqfJyiif8SJy58cras58ygw2V75hFw2MmAHDV1vozNBtbrYQy6BqY8Y1pMuKzwrxSR",
  "key4": "2cUvt6THiyoYvyvd7VW9Jb2SWztvqcEz8WPgHfnk6KL5r1i7Bhz3kSwnXgGrav4i1suvtVw2pRiqv9zoT8sPatTA",
  "key5": "3safQ7uD9LSY7D2QfDMen792cdRmqxxhfSotJM59tJvaEaGJpRELvX4sZwuhcJYbEQWrWg5A4Z1QkbW8aNWUk926",
  "key6": "2VmUctAx2hmSckaHaktJ3VcpT2wbiS7bU6BLGDnc9xb6bWuTZaTv1zRjoVQm8BYu4MGnmPffiEoCU27NbXm2y8Mr",
  "key7": "4ok1BuEYDVFKhPx1Y7JwVCf17agguPMFj42TYk3mukFhEC8roswmRVo9ajaRb8REw2GyMpomzzQ4KLx8zfBpU6ZH",
  "key8": "33xGHZPZTk4xwCPYEHEupzVwyDPzNuzaVi7usTVBzJncwHvnJEm6tJD6Cnav2yrjfWY7UjCs9RViy1wbfeYtGDVh",
  "key9": "3NiwedsQNR39ZPj8ksDwRZDAWJ7vUCHrZ7T9UcNCdLFXeerofJmY7msJpN3de2Nb2FVGSP6Fim8hsC5Pq3wfkDcS",
  "key10": "4e9fWhPfDt6SJ8UvwpbaXcXjMi6xhR86EAm4R1xoHziSX7KxnWb7KWwiEC52o2mo8Ax7tvYPHMnqBRtUPCjtacqp",
  "key11": "4WbExeJZVes5pgemBZbgWAcXgVhLXHkhMeZSgCf7nc9mTak1VtgJRgTshibSK2Z3PPXTEpSiPji9cPzqNZY5dLxT",
  "key12": "2J1svpSFGTQtsF8Ua8dVA7XsVP6FECjcayAPiuhRkuaFsQKywRJXt7f1Njzv1af9CTjtP2BPLMe2sNMzL76y1kzZ",
  "key13": "5pvvcG43hrCAmufEHS8SU6d8UmbShqu9FbNRQYtWEvS3JYqAALPzGfb1g6bwJ7BULWk2LfVyDVM21mhojFxGntQC",
  "key14": "2KX7NNfe97sSnJV85d4NyGaRF8ZgAzcVei2L4zuaeghNnufhed7ffStS8fTfuMFz249Q5xz9a5qeFX3LCLc5xgYk",
  "key15": "xL7w8oyhEdgT9NAN1zdJgDTCNaQQhQUpAtP7S4dANrTn6DBozthiLQtka3Ubam5CyAbgSCAMhpWURfeFawFc17j",
  "key16": "484AnTs6KZwNu5bR6hGmTeej58q7SEFh4gso1GSz3nNMDfmNr65WM46sejUnTGRzqpGbMBMdcgtVXXd1iYcHgE2K",
  "key17": "24aehHBa6HkphQS7vc7X6inTSyCM3KvKLpyPbdL6j2yzvmiRpjg7VFni4qU4we494hodLX1o49XHcjUGAx6UNKkT",
  "key18": "4F2Xun2hGVZWuHiBdZqSrCqVVDBWU18DZYj6nvqFfascX5WeVaiYRDYxAg471774WfHEygQWP1gkoMRYMBA98unD",
  "key19": "2ouG1p6GCqiho3heWZy4MiQ9jVZFuDEQMETdtL3si8goRw5rhKqGPT87RNQeH3YbpnGHy3Xqnnq86xzvdn3waWhV",
  "key20": "fK5Cd6Pu9FWvFvzwd7Wk5aZmazxD7gmy3dwSCUhCDG78u9NotjFNosFrDHop9PSLYmmabbECzKFhwsPwn3y6Pkk",
  "key21": "3gSA6sKDcGotpRs7xVeWNhU6pFxLbD9fWHV8dbNQAxV4qNDH7bdsRDsjtWAHbgjTYwHZgX5uraj4A1qvPZGYmBuU",
  "key22": "3s22rSGXR1vg96oLez71XBgfX46BwCoHJWu81jJ38sPt4ZtP9ZGjn4aG1xWbN2G1Jq4aPGAVDUSNXNkGCDdKM8QJ",
  "key23": "4UtDVYPynrySNinwWRbyn55CLxUWCptZmkTyaQnqaFWxYd1dfLUH4xougqGNqckEN6pW6HDhL3tyrVzFVp72C4iZ",
  "key24": "4ST3QfiXcLE1HjPH3V7d8iG99yDFypSwq4Y2f7aCTJgy7Ffr8dJCBkTbiraeJiM4RzR8V6U6eJNJVvZH843bPUi8",
  "key25": "64vHNTJLDJffdSJ5hE6s3kodfqxLjZGCogNZWsgPPHKFVjYbjsLWs8EhXe9a4LbWmmnwhT5NRLfdHqNJ1tHdkdyr",
  "key26": "3SjD4m4CPqEMB17SAheujrd4tK3iN3pQYYKmKimkALzGv5yoUyFYksydNt1BTgKtYLqJffYuL3wnEuQRx1KJXXy2",
  "key27": "2c5oQmanKYCkSekGB4vNN1y9PctwJoLH7J2kTogP9fSn4GoptKFsR83KYKy16igScMje58ed2bSsZ8Wx4vdJ2uJn",
  "key28": "92Ao8F14NHeou3bhfEBBNnVfWiypvLarGMgZMKjc3dUDuV4LxpDgD4jVaRbVfQYbAttjYq8uSqkYWwaayVzDbTS",
  "key29": "TFwscDVV7wwFzo9ZjqmoUUaHpSyncspfVMbZVE9YzWELpAiFL1hy8gyoN3C2HarRct4CkHEdiz9FB8hmiKtVN39",
  "key30": "UU6fmcQUB3rkh2KX139LLNE7auQ9FyxqW3Dvx86Ggbbi6mAkqnRZUDusK9yVw9M6XYVKMMCj4bt14MhC9zSKz98",
  "key31": "2F7k36zUTQJZqFPbAaYyEN22REnSvaAFycvA9kR4e3948n6TVY5fnbLL69hYzgXM4fjmQADTPT1WRjAQpmrWMvXx",
  "key32": "4Rq7vy1VYERPrBbwtwGTGFWZBvE1Z9rpoM3LTYC5xvDZ85TLZTWr3LUu78bK4CcHErQhYysny82yAd7jjRuMXhNd",
  "key33": "5ujQsWpw1wBWrqoEot8NCZkYTSiVhGiy5YvZvRE9UoNehD8mVmeWbDxniV1VyD59m5LvCwXxT62LmciGcc67nBij",
  "key34": "Sm6RRwFyYaNFtQHg8inC2V4B6L27nnQQEHrxX89a7rr6QVTjYjXufs4dTEq97hy7f7A8a5DmnwKsEB3ss8BUWPj",
  "key35": "nMPxJZL1dmZ957BR8yaHZvj1EhjZMPupm1KfysuBbJWiwLMLboorCDjeuKKhGacjWnDvRrnLddxtHdkCcjZPPd7",
  "key36": "33d3AfdyKjHRJp1779HSvLQPtu8tZxT1MdGZPpTYyDexctrx9396zJYJiiCbqp8hHfXJ5DAya2LgSrV75iXDoDDi",
  "key37": "yfYdRyUzng4WXH7djYQjKx8JyGChA9qryZEKTHeToxixBsC8gKSk5wrScMwC3sdcZP5T238X5FzZPiufeP1gBFE",
  "key38": "369hgcfYmDGVQJdHXfRvigUsrQiCwx6yf7TJvi5cfHJ9jJzLrdMXwAthPhx1eJmFSKhKjEeUGDQkG3LeoxvA5aLA",
  "key39": "5cKoVHqYKo6mh9yRSBJJQtfGM5Y1gv7yqrXpkfgH4CTLW9QjKsMPP5nyZ5zR4F6SLkXBes4AQj1EQ7WQAhLtvgQU"
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
