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
    "3jMoqio76H3mpLWA1VNzZQcJJHktrjDUiS8qrPZ6GSDtYpH36v2EpXm2r2jURHbCtSUh6jCXeqb56iWS6tK1Y76W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmzZBxQ1EruPRvVPi8wKfUTVWyGtCj3CmEwUxhoFYALEeSMUpmYHffPesJxhtthYDiemVyC6dbsdweAkVfZXypR",
  "key1": "4Ui7Y8je4aJ7eFUPYhBXvbckCpvpdZWBerJ4ZwzbwCGrkcgQzU8C5X2q5LCyPhcT8esPX9JjjJqS2JeDmaje5JX2",
  "key2": "27X3vsa81k8jCkwUU9KyZxbxTYKSLPeBGZBhLwtj6U2CGy8LwpEQGFVRzc3oKNfc6Afsyihk5ofahfnoUMA23dPo",
  "key3": "5zuyv8mxe9HeeyuG5VU3f36yPBJsUzSFYqgTpjwD2QAHqgXaqTYp8T9kco5q5n4XDWjiLpTUHLbYx72dRBc3Bd9h",
  "key4": "5na7bmDPoWpf4ZUBGakM6gV8QYjmNJSg7gnLPXSGSce6YCRsmWFrCmsxZZEuhHdyxYkStFstGibcXtQK6zu6uU9A",
  "key5": "4YsZpTxP8dvoqcrnzTpG23EkjhjieQfUpeNbbidC8UWPxGj6mRR1LybFiuQTpf1cNidy8nLBbQdvHzUMhXJMbUWB",
  "key6": "5XyfN4xkzFb7A46qpWv2r4R6NYhjZkBK7ECyBDMDEJpEyPvxTzSwDi5tHMmCGCacR6BXgvGD3HEqymLoqwJmV2St",
  "key7": "5r28RCTUHp5XYzMaYsF5q7v6qdAiNp1A5wPHNb2ShkqdWCHUEnpjm4PJmeBeKepoVCBzi6ikCBeMkBStT7vTGsQZ",
  "key8": "2o88cQiWqFnn3fMVaxNxTveRoqAc1qejhnWfA1eftboKiz8Vvhuxj2KGbpgEKhShpG9qbVRP42U5YTdkQeVagaR1",
  "key9": "4ixJZ45MpNSmPBTUiN8gJd8vmsm4kPdiK94uFhTjRUaPstqAwXNyt1AyNtZbA717XRV5r8hzYcRybGXK92pTuCmu",
  "key10": "29suszQvguEf5tEJ5L4CFaA9rMY3DWA122aoeJZF9N75137YA8LYup8mKioj8rYhL8ypYJC4MrsH7x7rsDXQWmi7",
  "key11": "Wg6Mpj6B5VmSu3v4pEdRRgxWA54eotAXXHcAdqQkCDe2W433JAEYtjRnUmnidgefxWN5cXus4CCUA8tEnY2ssDT",
  "key12": "2vQ3KrvQfJ1S3dGc1aaNWESZPuwEVsYwEEZhxfGFFdRLuE744jiCqc6drhpfuKUm9gSyjX5MJaN9Xy9PTGtpSX32",
  "key13": "4ahSWUa7x6MbZwFYeZj43rvz5kcMTZzF2uickCtpDmLbr22GsBxYoYjU65uYfmQdzD5ksGkPYXfKveKGyGuZKukv",
  "key14": "3BnsDi4np8tieZrX45ZWmcvTtTGFeShRh6kS7X4cRbXnjZBSBnSgGSzQYiaQQMmDbrY992M5L1gAdFLMkJiwtUgc",
  "key15": "4rUwpr9LKpBCTUiACEqoYCJaXDujiiqyd1xLCsQSxmeKNWmgLGLBWFLY7JdQnv43xnkXuEKqvPEmxPQ693Fd6oeZ",
  "key16": "55YFWM3FCHhfBCXatoZJHoAjgHCnm8VieRXFcGUTrvrHR2mmgj5yx6zboawyWRp6x8cvDdn3rEYWVipcQPY4Vm6N",
  "key17": "4RCGvXCaQe1joYKuGT3hZv5NKpJSScQW3VxJdiRv58n4dSeWYNYXPqUCstLoWiYxB6oRWgQfPEVdcx2s7yXVZgqQ",
  "key18": "4LGCCAW94h7NwUymR9wJPQ1n6bLsY89fLr7XZt94qhiy9qH9fLrgkegL97kGgZaH4GYpzwR9HQK88TAUpwKMU22F",
  "key19": "sY4Pgv27CgyVM9nMJXrG3Fhf75mh2ganeBpVStLQtgzMJs7SihmTXtSU8nXpXi3SvhExHyc58AXj3JLgcfJSWRy",
  "key20": "M8fWDRNxdf5x3jXfujqXdhdbBh4gCSoH7dBhTtUPF3KXCUb5GaNpdoVykSACkwGs6DEqF9WN3Hb1XF7aJ7jnqmY",
  "key21": "3gUkfAvpQKuk1jP3oRU99cBBeWTMusQFMcakeeL46ZwewfRexB5wWTcSerzJimQTaU99krWs39kX1Wtn3tijCkTC",
  "key22": "mM1h4ew87dYXrd8tbd78VeiXckuSVcYLtrqf9tt91VdRf7zM1DwzYgDndjA7ULkmrkqVzKENfeXWZZaRZfWcFQG",
  "key23": "q1Fa4idmfFKTidrJwg5SbtpX2mwmg2byg33iZBGU6nXfdqcw5XTSE18Rqgr1CjMdXSPB9aoVrrHWZrxiNV7uoKW",
  "key24": "51PqwjNjLKp96XxU6nGFUVsJRjACgGY1fELZMkrioW4fyue46tGaXr9Z6Kiznjt6S3Lsv6qzopc4P58kMP8LuC5X",
  "key25": "NvPvcUuckNMVMPyKKddSE9MWuma4jjmGLyk3wTw6RJoL3hH8Lfc4eDJJAnaWLuwccWy2gMW3XADmpYFBgVzuh3J",
  "key26": "3GopXpbd4k9GLRJMbsKHmaEmaWLpYJ8oXXAKf73eXSGYcQmnquW3y3teraQN7THLsYxuMyeRjRRPTGR9f4334ev7",
  "key27": "2XReh5oGdhKa7zZxCQgPuuBmCuafZWwj9ab4yrQisBmYCPipkw1p8pGiuT7jxK9RugdQWCNCBp4i2EgmwYhvhbKw",
  "key28": "59jo9DXaMGLFTRMDv6Gzd4UsKxCP76B3PWeypvXfbKdyc4qJTCXfutHHTrfm9CqPTjq4sT4AX7fddvJoP2MCPwzs",
  "key29": "5hHFwfUhJZcttwcpp4N8mB5HZ9ef6b8gwxppQPcaZPLispK3JqWy9FKfNLLFXT7ynieqq5pbPYckcKaF4aXmf4ik",
  "key30": "SvdJrmGuCNwCAAMR6MY4bfEhGxB2L24UApwKSgwcRfU7pr2EsL6mPi4cjwbBPw5uUpRHxQ7Xaz1nTw8ngpUSktu",
  "key31": "3m77vKWNsM2E6cA5a1xUwZhdifuDS4fVFcskhkf5xJS6aANJtEr4CNAEjXEaZTpaqfB5a3oBUrzais2EpLYPxWcD",
  "key32": "h2Cqp3qscPcyPtZKeikoW1yvArbniQJnZP4htxEL6ddZpiTRFaud6kpMgWYgz4KrgQTCf8vt1qu9UiVmAV1oPoV",
  "key33": "5PmxjznG41zWqaUYYpVUMDzfJf3u2KRJMRZMu5e4JD9SSKTeeky8JMEA1Ap9kGPjP1RUPjsowrwyurCXa3fTxGRi",
  "key34": "4cKF9S8Y7nNZBS4ut3V83HyppT4h8mRMCCCqd7LFYRKRGf863Z8emQefQJkfU7Lo3QRZT2yKM1yQwXzKavt4CLUR",
  "key35": "61hEXV4BJjfa8eoDWMsngXBG8ZUJE7qpn2pcZTkVx2ZnARuZj1AkQ4BU3AcbEgc2gkR8c9QvGGa8WPQUaweoikMw",
  "key36": "2oqDVGhSMNNLZbtcCaRwoPtsX42E7CGUu9VcdEGeLxef4jQ2pkKCqqmK9sPx4yEwR9T5aUdgBCBuS8APeoWyMdmD",
  "key37": "24voXasv5DC4859dFqpMYfwiapWTNSWAvKg6AjrCQjdt45nFSXTeBXGnNnDqnwCV51fTkfh8qn9MyZ1errUAZiEz",
  "key38": "5GFAqeZUqfN2C2UCFWKPpKqTDgfWEPc27x7Dah3rTQ3Qh7aDaFbwrQSJftpszEry5zGeqvL3BVSVo6z1NPQ2p67n",
  "key39": "65PQSew4qg5gPvaxoaoKx57zo3WH9piiheRBcZp2u839QqayhLWekHmibNnt43ZDYZUPCTXZVK7VSWBCaYhGhfDQ",
  "key40": "41WfsToYpr6jBZ5aEsBNV6Y74UbqgwbHGPSoQrz6wjhzpq6qxWwJvjYhoYt7riesYb7F3sTLRiKQjruGR5UuNJc5",
  "key41": "5ngUUgxQAhFH8YHrys24nQdVYnCa4VBQTC4qxMK8CetAokj5djWswR7M5rwCJGfhWEsobGryeVMJKYqySQwBL5uF",
  "key42": "BQRTsLCzXKVAGmQW1KUgSEvmxqXK5nt8ZBbdA2ubVSY7NRtzimx1o1cwwj7mATmpUyUNWbtfXxHBu3QMoD7CnAK",
  "key43": "31HGSkbr91G8JnZ2GbL15tf8EpX6KDvnRziN9JKMaGHMqhhDSS6UrVDJvSYvLHnpE2uuFwuEBDoJbRtNTZfWQUvR",
  "key44": "5Wdw2pQ38AZCndSnKNRa9JzCc6kfYf7PDay7YHYjYArKUBjep3YCSMgiHEJ89pNXD6dC5fqBo4o7LMtijdjtmWzs",
  "key45": "43tfBbrvVp1Dzr2uRFfPqQGuNjG5CwVB4rxqrN65zcbKPFeaEpVCdqnvfTMXp6C4UhWbCn7328J9k5fNyYX5goTh"
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
