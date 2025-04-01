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
    "4TsNmFg67vYUC67kD4cmiAsf3QtaergHEwDqu3XcqHS7eRXAtAvnKWyaDutyBVxgWF27uq9m8YWFoHygNVktRa4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCMiDPHcbAfStpSpAfmgFVVZvM67mruqQLzCiAABXPfPZfT9o14zLcsn8T3LYBLxJcefXwTPzBhjhkt8cker1dX",
  "key1": "4wMB8pL9TRKDmEtrxmT9teK4gMotxkTewVSB2FJCPPrjUcfNN8Eiy7NZnX3j1Meu1hDGzHp7FHYD33mdTyG36JqU",
  "key2": "4y8R29tyeY7fYVrfLiwCJGwtMmovjZokaGqwvCHFJbinquXfPqfU2G1ptpe9fR2VaXhdDQn7fYy3f67htirVDwdq",
  "key3": "5cpsPD3HtxXEvtuQY8yDU7oY3V3TPpNFJ9hAbBkoKPpT5TonB778Y7H6WhGvKBuqTHKd3KF8QBDjx1E5PtD3yNSc",
  "key4": "HniSskNBTmy76uKbmuUC1um8vqmHXxokqtVH8g1NVdNRE51PwcCcycVgoJbHFXkoJJ91FLLP8wyy47fUZhXX83T",
  "key5": "2A3FZDECooDph14K8DQbjbettZzhBa13EQXLxgcrUZGeZd9QzLKq9i7vRXgmvpX3yUNRvXPjY8w91wG3fibJJpeW",
  "key6": "R6LvNioikoD1WG5cePNQwsJRah3SPLEAHnRq8xiDDwsqKqCgfCLTrjLeKmGPdCTmGXMrfpapbWYGdVwVqi9mbnW",
  "key7": "5eb9t93RhdUZiBgDKfYCNqBrPLV6XuTe53FjgyjPdVqEeKL5F1HuWtcqHXtnhxsg99MsrK1JetT3Kdtriy7wECoX",
  "key8": "3VoMuF1fAReBcAFasyf31qKFa8zJfJm49cTam5AVXoQctbHV2Y378HqECw5bLQPKs59Di4k5B2ZNLqydiGazXFwT",
  "key9": "5zaxgV4vMh8qkVdjNP6MYccJUQ6mgWdXgHSyQgMQJtRqojRqVLvN6u6nF1AkJAioLLAduHnEwefpuGSqG6rUutVK",
  "key10": "LpU4Fvyz3ZvcPmaevdyXAdLdyBM19mQWmjtRmL3J9tvmqxzqkpNwurL9MrKP427oniWnMFr3yzXYzHnQte1oxxm",
  "key11": "4aGFH4owVBxHruroct5a3gPtjfsVeVZ64a7MJYWW7EZfnGV5LxAXXMingDr5XeNtten1uiGW4fKZvKu1anc86KNW",
  "key12": "56WLQfamH1vn3x799ye4yNSaTzzCyLKkV5C9GSJdDcq3G7ydgqoSGz5YmeLQneT8xSV71HRcpaKEsVpQZxgdSiCT",
  "key13": "2TahStFLjtB2oFWVyoVAh6gZXqiYHcWcTPSPWHrrXd7sasNdQedxXDmYQCZrcieKT4pXwRxhrguRxkciLWcbrcNt",
  "key14": "vKb3nG7237ncig2qWumyGXT3CZcbFYD8mZxSthMCW9PbChHrLaZjfKRYXCaf2evL5n3By7gsZYqT8SGW5uwbZZh",
  "key15": "5giEhyiQ8iAp9n7e8Q6mLjZbrHNw4HSbk7anc9KXx4fFcEjspwQfBYGpjYfMT6eXMmQSjYVN2Ec1MtLSMJsBYvLf",
  "key16": "5R68qPkba9z3cgkQfo3XJAaG7RTVbip53ZbogCHbti6vAEaMpKUU6nXwCjyEVWDFLmdHWHGCYK1pJhyEJXKH3vHG",
  "key17": "5D8useBJPceXhFrNGjkj53osDwnJagR8RQt9rv2kiD8Av1hYSXcjBEFs8oeKayBXVtvQJr9nS38JLJUhCGjcS3Wu",
  "key18": "3tUNYdcf8FfMHqyYXSP4jaVEegnp7zXPr4AB25yeVCzzS8M3L4xv7pwnJ4mEXPPpmsb53ScPM33TD7BVcibCr75",
  "key19": "YFqyhWkKM6p6Cnpe4J3xzc5PXommADkvPG6TpbHoHVhA68UP4VMpS4S7nWN4ffgfCVT8WSPFsqViV1ZsuTiDHMm",
  "key20": "5j8xW2fx7Hoh9SkBLXKdg366bLLMrAK6URZiHGyvz3tsajAGu56234fzGjLTqt9vn5bczmgAYMiw34kPrDqBxRa6",
  "key21": "5uoZbhQRmthhxYrdsr1HiDUGyJtXyZvrm3Z7SsCVFVFvLQiwGYXKpyUuRvuzcaYYFjSd3UsmC9CzVP5JCTRZBXAY",
  "key22": "8f31XfUZFHyaiCL26aKjjzqyLccy7GvaBfKHF57HU3YzQT8zfYxXztvKCpErodLq398VMqGhTA4kW1QCpe9Y4Vu",
  "key23": "2s9DuxjC9RDHZHnwpK8HWD2Eo9HXzxrHRVuDrEwQj9KFUTtSgZooFRWZcE44MswCf92Ja3HjFzn49yiMrfffKs3W",
  "key24": "5uKeQnLDx5W96kiNygiLhkix11KmzgyUQGzQJgRVqMRnR3Tvd2RzgsiRq1zUiLKGzTY4oLQiPUqQ3MGH5hnRv6Qp",
  "key25": "5JFxooy4sM7NhtXt8FLV78A3HFxbE4uBqXUEEWCSDDqgYJzcjxCmAdJBXmL4gJ5E5HHjMVjkazjHKHvXMeq7SccG",
  "key26": "2qFgRBkkwzEJckevmjJkyApFiRmjK3oucJKuSjzz7eYaJYajWybHtWtZ1hxsTKEtMegwBMF2bZWxFcYVwiHpCXNA",
  "key27": "3BdKwyyHkZ2A4adxCgBmixSdwUnoQZ5eP6dn3BtyCbKxxtCp86e2EYsVW1uSgEpVgF9iSSjYdgWQ3TxmQxenxFaR",
  "key28": "3rQ8jjpZeX5qjNZ2HZMQHiWPpRm63kfCVnLfpWpgJXXRqkJLWD4MV6MsQ1yrLQQuYckrxP3zf4dyADb9ZRJrdjod",
  "key29": "4SPEs8YtGmzVxmeKUovpd1zmo4ZfqoJP6zUYe73Lw8PrbKQsyxx7sLM3ybqGFZ4F6dXAd8eyxifFkaVUsfPSoYo2",
  "key30": "4MwnpGNRTTPF6uv16ubSmBXzk3QcJytdUBXXCCv2SysyTeQUU3wCsEh1cpoqRiyqRRVtM6TYv7cD5posMCDf4eDZ",
  "key31": "499u3HSuFzExAZXGufqen68A9hLpj2uXrkpU4MUYJ74yAjC2njtYJJEeg5YKW8bEbvZ1swArmkoffaDwDmR8tthz",
  "key32": "4yTiddhLoW1JErSH3n6EC9Me6UM9ua53RxwCR5S5cbXo81cMCPpRQQqCbeXwLCUKzzar9R4gh7wMYoGfcTMYEGNp",
  "key33": "9HWwjUw7vzNmjcig1CzeZGxB9CdNMKi9GSW12Wn1bGQwZXDhrMiAGWZ3jnzUTbuY7vH7qp6Ek2sacRNPt8DmuBM",
  "key34": "jrDKU8a2VpuPAEY9Kp934tryYCXFw4r9XruEwE7eNmBJx1CNmc49gM6yUxozGhicUTUhg8cyN4kwgmEYHVBJHsd",
  "key35": "5NK3vFWhGjRmFJReej9m8Tj2APt6gJmPVevxv7fAfKNzDMSPA8vc2RyTkPQD2XTT7sYjjsHR3Rx36gqk3cQxFSEH",
  "key36": "31EijramCG3QNMfH8vSyYSYFmypJhwXu593M97uK74SUPKytadV5a4TcNHHprYhkkYg9bzpyGuLLcKmiDgTWbAfT",
  "key37": "5V6gY5P1XTF3CW1i8fR9tiBaiaZavtasDZvs236unp8BaNWsrjkSMP1tx41fyzTwhvqMJWWComCJU6S6gzQA61mc"
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
