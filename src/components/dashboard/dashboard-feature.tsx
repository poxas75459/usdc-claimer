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
    "5cT94Ev6LtTeMUXEJiVNoV7Ez1ekATHrgZQ71weTFFyMhc1KnMx7kS1ujX22KZwMXAWbmb33PxBtawVcsi91VJ7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwpTF8TWDePh8QM2Dobi9BkJC3eF3w3Mg35jMrpLA3Pu5TVAnPLQFcZ63J6qB5sjXs8kdPA3G2tMyG5GYmTxMBY",
  "key1": "57WB65YTkUpWwG5zZABkKBPEEzm4kzv7WF5VGEtW2hE3hUmbG2iaUPKnd3eNhcsCy8Z2sqnnduFbj77h6KYmnxVr",
  "key2": "5i6WMuYvqPeeoRqWwmUp35W9NxGY3QGWQZ9KrSPeL4Zmq4Z3hiffddzqgugPZoh3u5kiciGjpkxHWHPeq8R5BJrc",
  "key3": "3UMxoat8ddqQy1TMVxDUXg7JuQzSmAE3gthTULbzDha9F653d3xFyBanKeAbgkgroR4EoeH2ZJuYkf96WsVrKw9Y",
  "key4": "4gfPoXoK2xf5ZP4Pu8njxyTsEE1PkEGUAWL7kqMa1HwbgkaEerAZwZb2LnePLxpnSA6NJUjtvKh4WtC4BJKH82S8",
  "key5": "8gJ6kmzGH9XcvaXx5BHy9FfSUQSugm7SVUGszJGjj4fSDeNznaoNKKYfJFcdSEfJsiGhTztURDsag5w5jBr1h9B",
  "key6": "25xDauYZ9Tpxt5eCgyzQDGyPkSPMXLe8JP6ym5ZQV2bL2XDwjpVQCVe1kKBSkURjRkPakF7DPPEVdYdTuzh81ZWC",
  "key7": "4jK4eTnWwgguivJggtgtwqsjJbKk5Gy11BNQEa8p41RVUyZEL1nALLomUwm84HhbrJY38HLadFaUuXFzFedQPcFy",
  "key8": "5yxacc8uYEc3unuX5CfvbS6RLzioi5qh9R4H1nbgibv2m2RQhbAyMMkmPCNwHQw5hgRLAobjqUGutm9NbF1WwQBk",
  "key9": "MKRfFPjUVUm5VFA41CEH1qzukM7MatAULy9kiTE8uobs5uLVsEMqJtzdQmFE4PPyMErm36Ksb2ntu4pL1EDx7Yk",
  "key10": "3LiVq6gUi6jWVGqzYUqsq2og97HJ7pBLUynyBnu1CnCWJsSd7gAriFYsQyyfeZtaBYJx7G5ep1b6iHMvisNnKaFu",
  "key11": "5EfCt7FTtunggqKoLStCEVio4jsTbonXx6KViKLFnQo2NMJhRz9FfZy6DSDr57V8Fvts5Toky8xfPajit19v8DsY",
  "key12": "4pNmKZztFeRYESEKMVSTz2yaw3eqSicSr3Qb5wMgTSJBg3rG777QrHryq7GpcA6AUhaPoGCJR8toMnwxi11X9Pek",
  "key13": "2zcgqw9P5oFH7aVmvrvCBMw2fx9K83TT48afpPPnyce8upcB2VVPayW5F1WgyW6Xx6pfQW3MywPzoz9APisuGPqx",
  "key14": "5hHoP9zHqfzhwGXRZC8uao3Br9U2zb6rMmHGkusJdyP6hq9shPA8yhrRuVFWeUMkscbahe4fQsrALdKuwrJkCPp2",
  "key15": "64cY3Q8Gi3UQqDfekyzEDKwoam17TGXMF5RZ54SZdAEtA8PZJXYswbnCy7arih1HJjsa6tFyVx59Y9ddfiu6GNCV",
  "key16": "2Eqbw1V43gLWy2nBpL3tPMY2QanKmGbxXGGQx38ekKUcVhWn6LnUScHf8aWD8rGdXZwYsHTkobz9MsPL3gvr3UtR",
  "key17": "3bsEibFJJxp4q6Hfu4FVrFm9mUEna4G3NYF94NjLZrziKuP3VGzWY8Rwx5m63x1zbpL8mdJR5FRhNmXmEEjT5tJf",
  "key18": "5ZEw4CULrVxycQa9gjzT4zpUh9UVKg1HFaEhiQdRc9TXFFNCJpAFixUEkspDHZGUCdB6gMq6QGXY8WXhHS5yZrAV",
  "key19": "2AjWQpXS9CwohVdgTZNKMWH2irvUdngbkufpmQwLHuvU8bxrUAovzcV12vaLaZcY971keNLW4Yr4ti9Z9AMPUWAi",
  "key20": "3keeS3DemsJ9EXZF6BZEpvS7sgnJ35TmbQ53djkTiS3ANBwWsxaoBPTML4jHszXW46FrpqWbucBXUgd3mqGpSRd1",
  "key21": "3QiczfYrswaQdocyBrF2m9sa3qSXy6xgpRp3Uuoecr3wUns3AVGPTWkbgojkBC9h9VPSHLo7PxbNwknopg75Cime",
  "key22": "3QYmbKVPtrfvRCcUBszDdSkKTStJfPaiv6DVZqnVYxVCyzAVVcSWBrSS9nNiW1pLmNwg3iKcvh8VEf5YPY4B5JTX",
  "key23": "57z7BKq753WMxP4tofD8TZncnwquALRev9HpDr9GsEAG6kYrTrpbfLBuinTkVkB7kB5weZbHcnNfS6kg2yGzSaqw",
  "key24": "R78SAawpw6P5r5QLkf1dRczXRZUDCmypLLkJvbhzqbiVM2pz5eBevXkEPXA2NKAhEhWyjszoXHHf91SNxiKN9Xo",
  "key25": "5GhhZAjX1f7dBGYCPHefJFs9PxGniauVGkR36qNy3ir5Dd5UKDnHtRzPGR4EUqVWe3QsbHbbYtAm3dNERcrJsPxv",
  "key26": "5h1seEapYuFm7xTPgpBeDy3289oZeFkEh5uZeAapi5Yd3p7k2oxwJH2zXyKEb8UWwudUvhnJsbANzTVp5NJwePTC",
  "key27": "3oEmPcUqKEeQPkbLB3zaxDDvhChu597kYTDJnhvtaXzpPLNpZtvFsLjFCMtV1rtExd9tAq1YC8dLhY5Gytd4uab4",
  "key28": "4zJVS26NbCd8ZgTJVtQNFaNyVEnGNraVEY2nvbTBUJQLT71ZxWrRoaTGHT7UimsmtPaoUrhyaXhdnXftXnndptF7",
  "key29": "53s4NvHHC8ToikLn7VJ3yWeuPUuEEDF5jYaocFuRLicf4CznXGu9WxKiJ497vJPwWkWjRM8dYk2suCDb8E3s6eKo",
  "key30": "5zttRyi4cHyqYbaHtSbjtemm9WLAnBUE8tP9ewC4ZfNF1bZmzc8HtSQM1XVGPawGX5LWgWM7SYtCBh8BT3cSMniy",
  "key31": "3x9sxcUWxfaeMivFfow73HNwmN6iUzWqoR7Z1DximR9yQ4j81tkochTnyarFtT737DzJzm4ZN3ACAuqskjLB6qSs",
  "key32": "5qh2oQECFvui2BEk3baiotBmJ8wF3YHNC1SAv2Xw1aUDdDN9XbPzsBQbKwNjSHPZh4abj2EBYi7uYyYdv2WAG2o5",
  "key33": "4Cirg2uXp1AJDeRZXJMnxtzn9TCkiNXZRCZ2sXqud6DFQv9SJk55Bquzeze1jTHrfPVA7QsS5ZiYewrBsDAhsxx4",
  "key34": "4Po4Hz1ikcq8A2FuZtKgWisZVsH1Qdc4eqchZ8v3GffXxtDzkF36gTF64KmVQTo5eSjxfwKLxnNRWJ43sp9kaUYZ",
  "key35": "3Ccp2moV3yeAT3BoZX9h6n1btfcWwMNfj3PA26taEmwDpzwRBEuQ2MFCDL4YtTw323mFQPJBT5FzrbfuTv3SwpUC",
  "key36": "444s1JoiUPRtidroDVaQ86wP5r4vsiCbiRwyP1LdfBKMkZeb15tGG3HMfSdoU1jwYAto1MG7rQk4wzqciGUB3NcQ",
  "key37": "5gKDbdpdh6RfcSEhAeMkp8jyT8XJqCrFiiioBe7wQ6ShJS5xivrQfnvx7LtZioghp9Wv3SKWqjk4vYYWZMKkgZRB",
  "key38": "pyydLDBzcuNpgvLXRnFDF3QcKNTPiQ27HVVa3RjH8Zczt6n1PCdoj9QpjKrMuiGX7UYJ8vxL9TpZySTh8NARdXg",
  "key39": "4cPRAwMJ9PD7N6ECKKYdjQoL4Bj5huuJ52Lfn3LVhLF8kjurNyUCnbWBSrofdSQGyj5nUHv5rxa1dxwMtQpM8guu",
  "key40": "5Yhj52vPaovNhfcTNVakHT2Pmuz7x6P5bKeB7ycx1mxB4xpWCt6kXhRV8zeyX6HyDXYwKfKjhJc6g7dcpoRLVtnN",
  "key41": "5JjkYosag47NnMLHjBdzSANwEE27J5dyKbJXhu8jeacsCEff7i5qxKLu6peBYM5ishyS66WcNBjXFG48cp9aL6XW",
  "key42": "5G3k73AfmystBT1h7MxyJi3VeujV6wVvkeyuyNpGZ8JnmjEBcqTNmV4uSxJeiTQAXRik4ZDecYhixuJGNnAKYAwh",
  "key43": "28bzJbUVrKwuqXeq951eZKghYVxfAkCqqm8ep4nbeDEBgwyexjgapEcGxuauZoLaJVKeiFB6XivWGXnNNerSDKcP",
  "key44": "5fSp2aShpEt5Fz8WTAVSRSXtx6o2FhNmESnGLTeBb9Gk578USwJUM9pkAGN3MqMvj37Nj8TzoGYFPspmr4R9zqkk",
  "key45": "2wHUWWWT3biRSb7U267JhcU1EgSRSoqXX3NQQGzFGXxqQ7r9vqWyfBDMeLCgJ4Bjj8CYnC5jqXK9bvepuw8piVRB",
  "key46": "5E8s6CPexfiHZ9UdxGtTPCTgUdbeiWwWtBZsyAM5jLrSzzj8PwwvQit9MbMeckHBQdM2EnBwRzFdaTQb7wWG1dKF"
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
