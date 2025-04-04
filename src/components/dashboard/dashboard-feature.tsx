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
    "3Mwd13JD18VsEz5M9rx42Q1hbLd8Qcc4TgZNqeJHpRSb2bBeufduozdiJmeLX5NyCMWqRfSoiwL8wQHU2qQ472b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxndhMWMwkMaiNDDK49wrgosffXLHTWMHsXYv4bYKwwYJkgX7wk9P15Upc3f6pWgQcTn5Grz3NgnJaKSzLW3GPy",
  "key1": "3WeNN3BuafiPdXDKykBCmXZ8Auazt77q8yQYTbzXn8vREoJ9PVwEohJTnqGT3MCpHLCUbcx6UiV4qvnEZYhx1PV9",
  "key2": "4vnE9EPxieCL7nHAqBEzrfFFgWDorAFvG9a6oc6F331P8UJoDADRqsxW3JypfcegTfwHwrb6rtQcECuDv2KwSLbC",
  "key3": "4tzfuKrtimcgxSiKJNUcWoWMbrxLJR7F6dP2ZvxtzZs1FvwstL8DeAhsEBfVKd53jbrfmtdnL9RbtpUjgMMrbU1i",
  "key4": "HykyeEtQppKBxTLeF1vMPSx2wDa8dLkSvvXgeg8UKGD4wUjRfpDVPX9avTkFqvDo1BniDy7QcMtSv3PBY6YTpmy",
  "key5": "5yv1iW27S6SyBwGdYYVXSBadAZUnuY7SxoM52Ts1LKPL2KvDKmss3jXBB6TjFpodcZMRkXBWif5xBPio1JoM9oRc",
  "key6": "QkNTHxuC2oKiGme5WQYNXQwyrUR9G85BZpC7TXG1EGq7KWGSoeuz8WbvZcV6kmckijjDuVCHkxi5cSrEfH5JH3V",
  "key7": "p6TyjtKWVsm44TPXhingSQNgHdv8EfQWL2YLEaTZkqAfYZEuCVFqt5cTzqYJvNcuKnMYwfWW6T3nqddpzErnvPt",
  "key8": "5CXRkzFPoh19riYnTeW1SxYbde463vJuBVh2xcm4jmzFSwKBxDywZwNqVH1hYDsescDZZ6ML26KJfpeqo1usvR6",
  "key9": "2g9bNGjfgmPeBEzMjUfLEkiHwq3FDdmHXmXsFzj7LBCT1cphBxDe32899hZPuXnmbsgvYC8PQydKnKUE9gRG4F5c",
  "key10": "3CgufAYfSvQdXFdpGZJGbQfqLRSrBrGHR4gdJjKw3FJCdrqTRKeLxinH8RUJTSSbezYsy3fJ6UXVa9GAbjhW479U",
  "key11": "5NM1KkJm91xnG2vLuLr3uuVmmEvSiB2XBcPZjfoyXkrv69n5e7JNeLc5xGjgr77iwmCGV3CBKcbGAyaMssJymw5H",
  "key12": "4t2khNjrHoKUSe9WHuPCFFeF86JLki1r5XyFsb1BPPnRMgjhAUWVfK1255uh3UL1Uvt9Uswc2N75F8u7vmogHNoE",
  "key13": "37TfgxQnEmZUaGhCtyx2CJjqyxzacyfzcXxs8BwRC7y5sBxdq4RYaH4C5TUEa4rP7sdUZNWMYrEjLcDuJGoc8kfM",
  "key14": "3rwdWdomuhKGegDMXFTUvNSN3wkMBoFPwtb9NYrCYGozNDuetFXYQEk89Sa835yLqe3d4PyHLojfjGLaee7yo9o7",
  "key15": "28wiTNCcGF4ZGqKw1gDd4kcDUqw3rCQiB8rVGRH3iVQWzSEC8qG4WyGW5rTYBzKrQ5Wx5RJzpaPCgvxXCFiXcCYV",
  "key16": "55mD4Y7dPYCM6z1k96PUmwikUBhjZ4JPEbUwcSDN8JzVPiykVR73Hj7D2jxqw6dA4WCdMtQBLK2sXZQxEt8LFjNY",
  "key17": "356WTSVtaC3qqWJJDfLp65KNLNTgLaYn4TV5eXQkFhrSnawQXh6jNRK3WYyLdfu2P4JgFF9jqoRLwvAv5m766Hre",
  "key18": "5aJy6cvsg6uaqmcUetuXQSRMzENVkzCA4UKtQyzFieWzhqd4SCWMMM5s3wrxLDhdp2vG16qTPjQfgiMnF2ANmJ2X",
  "key19": "4dL2ZJJgfYRPNmRxALWVZ7DRZvBjhJGJp78JbgfJrjE4trvoiQ2jbvQPCfELXvCKiTpUBRbK3gtohsabXDd3GpUm",
  "key20": "2e43V4hmaTqwfmdJo9SDJbqfJei7tB4YedqdfVvXUohZ8izMiha5i6gR7oMNLAaNtXP2EtZY5rAWRC4MsrvZkrMa",
  "key21": "2ub7Cs8hHGSTerZLP8F7MVgmiJvugFdZNq9gn36qCdD6eXh1CaRnFUnjQtycAKanJxMTCUgbdNo6DZUyhZKyyWnf",
  "key22": "2euEco2ZVqYimH3h5VRworLGM9SkTnjUYM7PjdrETM4iETKUfpEfchQWmk5cNnPkryPro4EQftU2w9Fn8Le3Mv6a",
  "key23": "25oqmXy3HM7cK8fs3MDNyPB69i9bMr6k2DAHxP6QWqvNXCj2KXgqTs9QjWfdUS5u14hrF1WaXKLhu9neLXwSNmVL",
  "key24": "2wEJQfaDCjpCFpodBLKgPrsJLjwTxrtPwWxcn1ugjzTRSKXzvqfquW5nFbuzJqxhwxiDwK6ppEGy1VsobjwMrbRi",
  "key25": "5PpsgP3P1NRA3jrmPdZJukMviEBHbZr494Xbs9m4Zup9f8ApMmSM3kaxRsnkiZLJHg6AbsogR8fTd8fSdWuMCTBp",
  "key26": "3gb73qa4EdwsDX6EdavFHrRyKsUDoPCorJpBgxhLM3qZrpRKBCP8wU3fJi4V8JD4PyfdNurVtpibySq3cQ9oCZjn",
  "key27": "31qWGAQkTYbLXtrQkY3NscEjFxTuAa85N8gJqWJtvYiySwibfMgkcefiYxTYG61wmA9nLZAxNkYmYSdAfwH3rZqK",
  "key28": "4bYV2q6XMjx686SyNYNrhYvB9LyKnEhQE1CxLbYc7prkWjgrPH6cbdcAWFYHdMTGg42TndcFevJWdbbVtenqjyNQ",
  "key29": "56KYwiVj1Fm3De4zyrAHdBxzPbrq8ELs4ExGaiFbdcvuCHQypnVUQEpK2j7Sqe2T2PNNHGe53F9GoUhmCv6h7C1f",
  "key30": "ERegE9vVKCETZUp1apyn5aX2oxVgCY42rwLr7eaYUmq9orpZJAkP6Dzvg6j7r9zLXX3Mmz7WpDmwWmqBRRhcGVW",
  "key31": "5soyBv5hLDw6ucz5rDjBixNxgEsvM4R2XVzAYxzsTejEfWwLwxBoudLn7KNfVqzEoJ3Kqxv7zpwV7pXLUefj6TPb",
  "key32": "5mDg32red9oMXUQRUduLQp3c4gfJmhmHLvofHf34Mub9VwKyXY7wPfHcqu6gueWbsH5XXeP6kc7kjLViaxHaCE9K",
  "key33": "5zw5RKzJvQWM3Bhub2mG71EqkVapDxSB5LsVqR8mmGEHui8C4F64pmfLidDTFhRbsL2kQTh9WCChYZXstLeJKHha",
  "key34": "5462FqmxxkQx4D9PYZwVqy24m9wiSJvD8RPhdf9KU7zZMtbYexduq8PH4jGW3rj3r7n6uAJvmtw11CjXwnVtF1sy",
  "key35": "5LRHsEtDFxuKQQ2TZ2ohTzhJWHSJrmTmy3XReXzsa9UXSGNk89dS87C2fSm9BZxN1JH2jzXRZRB7V5hKXegDnRpU",
  "key36": "3rDxHPV9q7iUctSDQxRKJAGp4Bim2uJT7YUzVwVGp1TKU2XTN1PRDfU3Yi1sD35M14N9g4Jg7w1NEne5gJNW1gq6",
  "key37": "5hcq8AAj4162CoixYPXNpZUmnpriDV4sUU7q6Xedg8o57ohfL58KNAcEfdpjuxvFLi5XthU8ERMwMQBiWCRJF8zR",
  "key38": "5kGL4azUbnvBQqvgdugVKRyt5aEVidQZs6pTnQuHy2dK6SNLekZDQWPwL2wqxKwYzN9ogXxGe11BnVCnDRoJiwBz",
  "key39": "5LPKhF6MtgvixWaQanVyotnz6Bgmh7FwRmzrtNpiUro6qXfCbWkNMfFc9Q7h47MkJPDiCZoe6K7SUvbQK3mEgmjT",
  "key40": "2kYamofGkeCsn69q78ZCW9EXHeLoZ9FpbWodktDpES2ai6B8k4hVrb8LZUzHKTuRG7WATqYYJnrtKxdZgH3pTyEM",
  "key41": "2Ba14KEbuu5dVcZSGJZ1dyKdmWeru67Jnqzin1Ds1PCKepTZvPcTZpprx3CGGXaDTwNFHgFbnwgED2chZ81zjT7r",
  "key42": "5MjB95Tvt6iVyLFP2xWJQQkd6KGorWvu3xtdBDRJnaoEaHmHbopqmyYjaYAbMyZFtZivQmiWccjg4m5JkU3Qm7Za",
  "key43": "BPcbAZcCgyVcRr1QAMs1BvkYrzdtRfm5bHt7hYZdwieCqxZagfXqvNgZoWuF3bE8CXxq2ngx2cSU7o7yym2TzGv"
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
