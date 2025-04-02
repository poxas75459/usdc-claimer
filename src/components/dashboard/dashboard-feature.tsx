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
    "2LdAe8SYcjAPzyPn2Hk1s9m4wnwYNASATbx2DG6UkrETyj3GhcjPwVe6o2FwuiF62XE1P3KCSWt4yDGye2w1vd1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqah3rcVXY1xijvCPKbnWgCVpjeMzc3FuRFw9uTVJmUJe6t2CzicWnq1YsRSFo9sGNyBZHmh16cGKmWKKvS6CMF",
  "key1": "2Qx98Pzc5fEkpQeUurkvLqGZYupusnRjztDGMDPLFda32vR3Q18FTmx1bkFe9xpYvWGgePtbzusFa1urPpJfVtSx",
  "key2": "2ByWMq84Srs2EmEdfGpSCPcvPdYKYGH7k72AGwy4dyb45zHBgn1wWmXPo12myYGbCSasK4oSj2xByJaJrYHZPcVk",
  "key3": "sPZ7iaPwDAUTWKFLMDmVyfFu2J2XrtkwVKfAVh64dh4xgUbmMYz44rTTyuna61fb333jMb89YpajVTk4E7aP4xg",
  "key4": "5HSFt5jxk8HiChTQtRZW5KjoPT19QaspKkfv7kK163qv6xe9HK7wBp1kFKvwBNZsNSom5NK82etqS15SJPqwPy41",
  "key5": "5rgv6r2d1kQgcTKzoNbJpr61NMyU9te8e2ArzESQSaLSRirpvYauzsq55YBHgmS9mxsn2vktwKERGCDKMUXB8uYn",
  "key6": "2vKd4GDkZHykfUr4VBbm2J9yeuauYprNgAeBMCF8dThDa1HRffCTYEVyW736kJJaRP1NEWvbFx1RBeEPtbRHmZ6y",
  "key7": "4A5doCxSHkhDuhr8psPFGrhuDXvzVoSoMhTnjmnE4Ekx4X7jLQFLZp6C8Exo9aNYb9nPUoTZAsatxrpBDmB93BkV",
  "key8": "65THnhbVajbXUECsirzuaSRAnKFbpmSk7TJkCEN2ZkhoKP34jCcPEfrceQhZdxyqJmSCCLZHtA64a1efLNeYcfMT",
  "key9": "2VbiwwBKyCsLHarexKUToQqKEEFWR6p1mLbbbB3g6PCUU9VEdhLFePi7kMfbMbvSQAgE9PYPbfqzbtfx4nj6sNJB",
  "key10": "5JLjHPEQw8sTdE1bVZurQ1tNDbBEsrorWnbMJiZLRBEWCrEDrtnWRAWeto8AHkZngMfXT4rUKvyrQh89fy5hy9K3",
  "key11": "2sx7AAx7CP4VQtUwby9gy98XkRoGNWG5uHGHsk5JfLLtQGksj6YcpU7AkW6h7dwXi9nVDemv4D8VjZg3vN7yAe3h",
  "key12": "5YfbKN91CX45u7iPE9Eo2mqwAcNVx4jD7oWoMVJpyTXFQcAsguZg5DF33EPtdqVJP2KpRY84BbdVXjd3YuybEXA2",
  "key13": "2qW4BQ4tTdBFKjd7Qu8Hd6LGYJmPG3H8u9993DyFT5gcQBKjkjNxsiZVxEsQ85NqXEeEaZ8DVevuKhEmBLRa8ys6",
  "key14": "4tioGXUPgEeiNqpF7g71KWaWoPMU8KZhbCpFxmpDDrZ1j4FrqA2ujNk86YHKMPmpgVEDF9RrozJoeLH62qhoDhov",
  "key15": "4HP3n2Y62MVNoGTUjFcn8PZUkMvxqx2Wk5duXCH3henzLmvQzfHD3j1gfqiDcTwf4J8LK3AB2wzbPBPAxypo8JpZ",
  "key16": "4QKbqMR3YTufqZ91WxuczhoqNbyYuEPtnYe25P9N1FUg8hBMozxBBLycYtp9Cg2moeMrzxaY9YAWQDGWA7LkMMLc",
  "key17": "5U5zdVYmTDmLHi5qPomkykseMQCNNQCzSQ5bJqoFWwHnCAxCTNGVYV3VacWjKUjSk1GMFBz8nb4fyQD4RAbv8RMt",
  "key18": "55YVrhBU9tt6Qh1ad8kVpg6Ys5Ur8MdEMFcjPnKibhtnbXtr7pJR6Xr8vSEw6dK5qENyogbRjMZLtE8dUmiBPZ3x",
  "key19": "3PoVNz9bsmgnVA7YkF8UsJ6chHWbG583DbmhySMBtkYixCaBTFAQCAGC8yqWo93sUGpGCqbV1YhKb1rGn6czeL6A",
  "key20": "4ZQyhyL7dMLqA43VRCtYBKT1PuJE4aKQCs2yr3ttBjX1UrUUYnDVRB2kGdMqnUsX6AmbqGdc2iZfF4wq6JSfEWbH",
  "key21": "5LkFRxTrciUe91iqXsMZVddLFEbwdVLHi97VcZkntJJ8jcvfzF3ZKapaBpyUg6aQkJMp69tMC3Dm36XjndewKDL3",
  "key22": "3KyfKzE64R8TKcpBp9NfbzRPky2HsXnXoUJbyKj7CGBdgRM9ELijmKJGRLAJU1S5RLhG1jKfq7DioTNitKK4AL2J",
  "key23": "q2tg8nP1LuTccZpNj7V4Du9huTZfvNfTaQq1uYDhfoBTB1jwA9h1LgXXPyCwFsw7sX61pgFtCCUYiYfwNwkLYw1",
  "key24": "iVbsgq4WAAd1Jz6y4QiRmbrkuwKHGtau7RrWDZCYTvXnmkacwHp8fhqUrVtS18gSGcm5Y6rcsoQWehMDgpKcKHV",
  "key25": "27MqeX5fJjGMGFTteRkwbkZyVXfpFaXhnE6qiGqZX32rZoY2hVHDtdmE7BKs9WwQGLLwHuGwEPHcEryJA5xfUaJX",
  "key26": "5mjxMH4CRjDuLcRFTTrUSJxfkxFwJJZJkRf2YGLARBLgpwaNWJtY9WTX1sJd4dVBjxhiRfZNnLueNL7ErG3shYmZ",
  "key27": "oRtMxrmcKWKHrZkXM72QUphb8YN8AUEYJtbGiP31Nm1Fzd1SgiyvXhzRYie1b92BrnPMyvRNZQtTj4SjVdiLoWt",
  "key28": "3GVvu128kmsB8Yc66PEHCRFUvTSrRMPtdBT2nDLVH7QRWVyNLjJ62PA1hChAURVpPaBXYNqnuv2ET1DPg4vgLcXH",
  "key29": "CP8dfrgowUwZUQvwRESSFL6CMgsqAGzf1r5CeYttNBZD7dfrRhEbyY2QkFgCNJc2XhScRxmPUnMXu64k26hVsAu",
  "key30": "4QQJKtDn5F4TRWU15i4VFz3AJCP46JbKfjAoNkwDRExF4aQqeEJNN6D71LaTjBzVhxQxiXqRNoRFhtMozxtbcVmB",
  "key31": "nSS3ZHL6UhqVH9HysCYUKNJEp7S6N7U71jCnMzdX1fuHpGJuwtv2KyY9wRp13RHWU57pSFczrCQ4YFj9CvWptiM",
  "key32": "PTzVFSTcNJsAEDYgnSBTp1wCZWDSvks9vXB8LNFB4hpLKrtdxQSTgDSKTyRxsfsgxvuh84VzDbBK8Fse9DBGpu6",
  "key33": "2tb9ryDZYWx4qs346tqpgu1tieUx9NS673h2whAEFm21vr59A1tw8XQCxDXm2Krgd2QLy97zK6RsFuFVP4WgN41X",
  "key34": "45sAhcCAWoe4AQb7zT6vSpyM5gH6DcGotcSRNNptYh9qZYc2FCxSFmEyAx93HSAaiHLhdRsFJsf7YJNGLfQmMME8",
  "key35": "5aZG4sFyxm3innoqaZRjW9igcuJVkGVbSmcnQrVtUkpHHyTeuEy2SVtCZhfiY8zqQ5uFwZ1dFC1oxpBJKUkMCeoM",
  "key36": "Hw7EwXCyWfPp9asrz9BUY1Z3joSqvLMu6tXV8fhn6k6xDKvE3jBa2pSAw3ZAmhwqaiQYWFLCoUBaoCJaAjxVUZ8",
  "key37": "5ULn7ezREK4Ckt59cdmyQ6hs9A2VpZYJAktzTdXPbKioNaNnk4HJuzH5kTvmW5M8vD9BaJViMed99BkBaZViQVX8",
  "key38": "NxC8chHofAHEbeoupa7YYSuV75ebUJsjy1p9mZTysdvHPhFY4nWBaHr7cbp28CAMdcQEwdiwYBJAjU7MJj5SGy4",
  "key39": "PJ7Eo6ifmPTJemT7dVyRuSLARTGx274c9P4uVGfkJb47VCbFr9JhB5d9wApGjkhNRCXqktoMcxkSF9iuEkPtvsZ",
  "key40": "tH16zQKRMQbTKw98gcJHdXnTWHVvj5jVBdfzETaEVkUY4XocKWQLk9ZHLT49S9dYrudXW6Q6CTLgJMTEysVxXb1",
  "key41": "42fcVh99EcN1JbPfroPiGuiRwp1wHDaShF4rSkwTV77wWEGa6rx4zh4EcoRxB6gvagGNaQe26q2YAS8Q2RunKMQv",
  "key42": "2aUbpYqqraCTtGJ97xA6FaPgCvaBcHdk7hoVAwUSZLYUdxrqzpyjV4kxiKfYy92hk6Qoc8xN1Z5HPmyk6rL4cnEP",
  "key43": "NhruR9JWSNuH1om2cQEZWAeEEB8tLpaRNiJpRQgR7sZRTwA6vuFScrQjpRuopsmondpkHhSZiFawvVSZSRMZncH",
  "key44": "2W3amYhrCygYzXz6AWxaEAjQPzM9Pd9wh3sZCDs3R9het5AFz92AGzFP8aNW5PT1bNQE9RTE2LevscCY4CrMgAY8",
  "key45": "5NQqTdFjncunRBS3vc2EZUEytMnTuo3HASPmLcC3pS8eTasY7nkxYERUfWGGLU81tmfw61gjARTFKifB3HX5tFHF"
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
