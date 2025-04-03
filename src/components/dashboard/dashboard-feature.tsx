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
    "3upPks9w8U5TZfQZRU4aRXCstCPnhc47HGmg6TfzFsdizAdJdEZQrc2fu9aHV59GW25g8B6QQ7TttQ96FriJkZkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9jzCVns2GnMDfzBThKcqHpLQR1yradSuREMMYNuQxW8nUnXoNrGd4QHYtFnvySfqLS6HVTv9qwNd8QY6HbsNpd",
  "key1": "61qjMN8qp9WKLW6bRJ8yaiMxo6e9xrR3vVEJNW8Bmn4S2wnfbME5W6DD61eVG9Q1TYjQxrZU16u1Qe79y6dcgntc",
  "key2": "NQPM6gi5yMkz1uLZUaqYFidYssqADwSkG8rySPqnFSQM76Mz3p2itXLELLDcuRyUyfiZFT8HzsMThqR4sS4ARDq",
  "key3": "3XPq9DEeN6bsPibwXk49mrGsZkgsjCZmWc54M35p1aBigpVimSfs8nxXHicvGWFZzHoRyzHtXZtcHzp3iJgZMgBN",
  "key4": "5hpYxH7rbWVynMgysCHKYmiYkfENTX58V9DeVzidmf7QWTe8wGTZwG73i7rwQmZwqdU7LFfr7q37SVegp6fMvWTE",
  "key5": "2iCJFWbgjxGcQoxkBrwdaD4FmWpPMzZdEns3C38YF7kZ8YoAedEhTiffxY3ahtTAb8Me9kDgVvfDoADycKmSLdy5",
  "key6": "3RuoHBkMghAVne4kUKWeHP3bDShsS2iDmktQGC8f7bXPpPVi1G8DcWYiR8ef7WfwohrRW6prbZtBkmyoWD8vs2A9",
  "key7": "2N6AgdexRu8GsT5eT6MDTohKXbCvY7RuFT2YwP9SZM9MoKMQtK4s4cmCBuJF1mfUQtGPF5hUriKGVDH43FQ2JBGp",
  "key8": "3utBoPDSqYfwDrVem5kmPtq48q3KUCKngLjWJT4wupRM8M9zCsacwh5SPb8a8BoyeSmjcEhaevivNScKiLhG2Z8o",
  "key9": "E6BN9byjnsRpugRWy3jDHhWWskFMgbwZxvSd3xNdMDSdq3qMsmuf82MRy6cr7Hr1HbyE2ab9mRXXuv8YLEiL96G",
  "key10": "TXgx9NWAAeqkQygVBVBq7Ph37oRSJ4b4P9uf45gzt8CczSEbALXcQmmGqpJ6138VAMf7tZdUfVYiCR9mKDWVf6F",
  "key11": "4eTXcZjSUCxqzAi1uguLZ73myYbtTjSgAUdGrG2tzEcbzem4Wf1XveRT24BsyeXh45LEzcpvK4Cqerfc8yJofkj3",
  "key12": "4jXbRwjTHV3Wbg39tKkmZHNRCASmB7SY8uQtwqVCjMrufA2fomkeAg1ujuAGTUWW894txYKwSt986LvoN5STpKWd",
  "key13": "5YAR8z4tifx7xoJ3GWd8eUaqM4TsLDjpYAgcya7VU7KtZySZPPhiyNsrRVcpmggfm6ZhU6nXwYJ7H7zaqijxyNqL",
  "key14": "4RKXkv3Bv59DXaFHzjZgqds4SscfJzM6Eoh4yKhm5kqGt19j3ghRdSPHurukd6xcynyJTe7V5x4dfRZghZCPrb2n",
  "key15": "4oYp9KCm7YEyGmgSXsecGErLwKHhGwKFiHEtxVjp1SLY6hRYR4WYZudnArFke3y8R7fZ9ucGCcUSRz1UxDgiQzfA",
  "key16": "3yzTUsgEpnFfZh93tbMdAPadBgKsc2rLothKsCdjT2nX5f5wnhiLMAphTQS1jnwcxww3C9Jp2GJGBkUGTwv2fHya",
  "key17": "4Jgin5v8FGmwGkPW9xB1qgeAJaJpPNSnaRKkmwEMdgk1GmaYJcEmV8GmNo1h4fYZ8kNuDJUuyGJayEwSaFAyJWsm",
  "key18": "5rKH6u9y79FphoVvwhH7drQ1t9kCAoYPds2asWS5wg5Sbw7HTwhY8SC2jRVK1Wx2Yxm1tvkNimvgf63BWef1XC9h",
  "key19": "55VugWwKRMCdmpKFewCj9JguaXTSSxAkVfE9bxLZDw4AmsWtZksiChJ2tho9jaGNz8krEeoS5qMcj9KHFLy25LiE",
  "key20": "5jyaQoE5V11xkbyTSnM6BUrDfern7s2jDsX8kootzgh5S6D3C3SJEKeQFmgMjLWrxad9ScJGtzHBSKL7JiMntnwP",
  "key21": "49znUGYpcwgigoZPSoPv2ypKBkio4QRudf294pQMx4kCQXS5W2rvjDra761viPHPFZvLnGAWwCYHRFYS8i7Wez6F",
  "key22": "2ijGMzrXRbQGEj7WR6tsMrzZUmUYgqaD4smvBwJjUN33t2s2M5yc9Ztm9eq8oqrsD2bRNxYrsM1j3KVZtF65b1w3",
  "key23": "5BQYf4SoWy27rDUwKVx7qVpFvbZkU4udLSFyRPYdMWNLyq2zNBNsGHUo6ZgKTwmBbirYxi6kRXEmRrhKN2axP7Bg",
  "key24": "4WAxBWvuPAAjGB7d44rfRafxgifCqn8ayV8jN2Zze5SFqqgLkVojMkWq88BFC1i2z83C59HyA7t93CSRY44CL5t5",
  "key25": "5yMuzf8TSQZdn7EpDzjLzKiPkdzBRQPS5QT6Zw349tFRBUMQXYYmGHJjqpQvPKT5rN19QGABdn4P2zZPuiVdqfBn",
  "key26": "2pe2o8dxSRujijQjhZvYdNQYmqCnJhDGQAGefzS9EqGXYCRTphaWKrR24RvN3Bk5LMdLqLr4WKqYjqCLLGfWYFLa",
  "key27": "56Yf6szHxgYw1Rh1JYLL9Ts6pMZGcBG1qchQozv5bes4Pgy9SH81ySf5zXzUTBUzXPWnbY9KjgyyTn7vJ1BStn8w",
  "key28": "3W3krbfyFmQDnxnimsmxFis6copeXKecTY3c2FQtyy8e9y21gjpBxs3XxCJXyn9pZ3zfAiATF9QtRi8EJYXH8anw",
  "key29": "37Eo9d5GXwiCsVVEFnowXiufLKdsNLWGb3tsfHgKoQttCZYSYVo11ZvnCnYCvbCefY5vTkmSa43M6JuoNJHXVwtC",
  "key30": "5M7ZL6o7jZexuBRicEv1EouKn35Kcp4ZS6MiGEpCWCdnHAmxKMpBXQ91R4Sdho1iWG6P5LXA1kYAXQETxVmgGBb",
  "key31": "3xpXWjg1WcCh1kXPJzshsJknm14THKMwhE5emdTE9FWJgU4TsMhLQ4aARAhtJAD19FzzRoVtFrWd8NW1XWj3T4BR",
  "key32": "38JCZKfCioUxBZNtecrz1doi2fwFJFrudzcdQuR6AgeDzApx88ZnHXeejfbn2XLGP3MuF3p7GcfQgZ6vwRnrUsXM",
  "key33": "8cPropb3LfGr27B3ByWfCJihzTwGnMJX7LpH3KLnE6aUEvQsBjZ29t4ZR8UaNj4anyxQ8b2xAU5UJufFoSZeRi2",
  "key34": "2zmbY14j2KodCA7ZX2fTqK5q2zkX3mFhr9mQpam2tLBtDh8vJ7CRkYTNqmmwDzs1P9SUwegggYtEkbJwKHaEiV9Y",
  "key35": "3SNtW6gSfUqHbLpvHMg6NsCezRz8nD3o7HCcMS3LMo3TKB9CEeMfMBve8Nt5zXj44KxnMBsrMToxUeukQxGZrFrn",
  "key36": "ymzPnZfWrszWabyj84m7Co3PfPDHxFZTNEkpmfNq6B1Fcvfu8fexp9PUdt6hqrWQofuPJzhKQyLJXVAQ4rQNKdW",
  "key37": "3YyXHFF1eL3dW7MBKXhkFjgaEqHrsSmJxzKew619QF3KDsaCQkcQT91r35rLq5q1CPWdTt4LvyMnVc4Cc3BVPdZG",
  "key38": "3sHqrr47GT7A3s35b14gVYi2QZ3iiz3bHSyE28YyCg9uqyXinZy7N8DfwyruCYpxHoFDEgRo9yLn17s1YcPf36Wq"
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
