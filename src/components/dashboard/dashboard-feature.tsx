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
    "1zHGcZhY1ff1deEUtB7wLfcaqoKWLUH1yvtVNLZf5e2tgJEXeYteLvohrSBij2hKMurcrmk79Z5k5nyVZWrkz6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dGcxrSgypDfJX7ffPDCSWwnPSRLD5gMoWffLGqyQhAD1uHGtZoPFthSsNSNBA6ULL45aBhJ3SPFeAwc4aVpDjU",
  "key1": "GxodmQvABAg7yHBjC26tAoauTvF3AwHV3Ny27FzF1GemUYd7tqrgCbruoK7GvSM3DLxZZw5LkwJnjm4bcxtivvt",
  "key2": "H8UaMW4Hib1ih43pNzTJr119v6PWjTyQhLDRbGzBSaPbZGGJbXBCxUvdaj9au5YuZgYMLajykkpYdx4J15WYKxD",
  "key3": "3Ejnow2ePSaeEsUM27WYLw4ujuymgGGyabWjFqGzJEhUo2erCPAMNoNR7WW2SorBg34U2fSQNw4JTKvs35bwbHZE",
  "key4": "yUvz914AgGhfYuDFKCQpv9KKgmBveUADv7F3wPtZUaUaSkL5uRpu3iAW2CztJjj1BeZDTA7CQaAbsv3X1TMfAhT",
  "key5": "2PoPbbUgP4x1HvCynC47VjR83eLaukpp34eiFEGyczS6HyZaNxZKRV5zvv7P9pQHgFf7tn9Q8NS44qu699A2c74c",
  "key6": "3Wqx1vtuvXKbNAAch1pdhuQA6YXBsk6gytzYEZR9tgvzsTz9pueYoaE8TcUZtsrqJaNykSFxpGi9LWFXxsuikVmV",
  "key7": "2URkV5M5zG7EHTUU4H25bGVekFZPKZD66deQAjMgTg7bq3wJoaHSKR53XLDZXPwrNuB3xASqZ71nqe8RWadDCjpr",
  "key8": "5uxQWBHA8iYagnj62ggpRAsWVPfqwcpY8XaELCLLbvZFk914qhZMjVoiB2shEhBHSRfyGtKiBUhopd3CaneqHfzU",
  "key9": "2Y7CknWvekNJ68RXuTVczhstS4WdNCiKPaVPN9b34f5wFtZpumDX2WXBRXtMwcFVaBLP3tw3XjAAPSRu9QTcF9xW",
  "key10": "H9SeA7SWFUB7inErKuApTRP5s9m5UCrRDsmkbU242YCgRFFXUkBVgQtcvY6XXFjK9GiQw7dAMhBgc7TKikoZNSn",
  "key11": "24djXD3qqUYwtHvJCgr7cjhqkUXuL6ub9cmYvmtYa1gKs44SUi9cuYbm35GgnZikM2XyKVu28r26YvwHxJmNLXGp",
  "key12": "27y1rdF1NBt5b9AmHjJk7kma2MYaKE2FnyH3QqiG8cMgnzEwVjf3NeKDUacYEZoth9fUvYMPnNyt4W6LGPo6dune",
  "key13": "5afk2x8vqukoLUkusopBhKrccpTathHVrvQUgcQBF2rqfRYqRh1niC6C6svTsrvhrNhNEcKxBhSayXNNwjd31iGU",
  "key14": "4pqH2dFgE1AyjnzNGohRrgM7cA8npjssWM2w2R4LBmoFMFyGLkiFkQA4TTqjk8PLWzjv9jTFE3ypVyqQfdxPprUG",
  "key15": "28Q9rtMurKAkJmARFv1sFazuMyBaxwaKvrZ4mULEnTjwN17y4bvrk6y8UM6JdbG8bhTHLNd3dRd2NExtqTRdHsdU",
  "key16": "jBuFokzHpVfKAPSfbGkvPWaUcBnyJofosGPyDDVJuW1xwzGqMDkYbS5TrpryD6c2BwzZYnYtQGscWRsrhXgcEXw",
  "key17": "21huhbLkaHs7hT5XVWL6ifrSPgxB7ZCMiDqd1MtbGKsDSgjGF75ZCb33XNhAiKscxPXCVgnv7zWP53jgrNKKBJ1N",
  "key18": "5w1HN1VzGbe58GbEhfZQ4vNYxT95DqSh87if7vDvRTv3fCdHWQFFd3qLg6y9MzHXTsbN2TN43U2fMtechosCNUmc",
  "key19": "pV15Pef2XhFudEzTPAMeJG49ZoJp4Vi12KkQ5PXs4htbSRoqUJMk95Fqns1zvY72qaLcxMZBeBdrgoxvGyw9xT1",
  "key20": "27ekZn1FvVc9W8fw2hHqyBEBZG12yZAt841hX1nSjzkzbMZkQxy8LU73Hv1iEuc8m7gAmmEeSfNKshVQdd9ULBTi",
  "key21": "5qm8jwCkvcgWpxrjtr7GhBpeeTPBwxdpsdQ2kDRaj1G6TPusdGxrWBoaDw49Wc98Fy9yjqDYHFhQGSX6myPAAjx8",
  "key22": "3dixJUxzNd9HwBAFqy2PnhwH7YVTuNr17kxJEawyQFfeRfTTAPpeRiEWu2bNhPFeEdCV1cBrFKApaoDRtMEZvLe6",
  "key23": "3eGgnuqA8p7XNXqyBRGW739E34Exk75Z64karF4UYbwdsnNZHcsLagcMYp2gs9a9XtZGN81CygV5snX5KbFYMdfm",
  "key24": "4eMiDkTzbMSzBj2jyexPmSmRcYGaCWhodTp7G2shQhtbrhSCzTNajjjCG3RHsmcuqgtTYxQWawvsbTTNBvx3CN4L",
  "key25": "4qe6RRxw5FTZof5D1y4GA6mh1WaQtUJpniJbECVVjVssFeS191TwgtjD5kE9fxBBGSvLXX1hEkZppNXNfgieddbC",
  "key26": "59CTLi8KYFpeEcU9KgJuEYCrRaSj1hpMeh52spC7ezm6LmYKYpfenTTevjrqA6hDAujsyuK9jFh2jvMF9rJZ4KCV",
  "key27": "3rWgmq7pV3nRsuxQkW3ZqYAWwwLhsjgfpBfHLsqhjgdLzRJGPP3f3WDzZhoG6pcQfXa7yn2eeLviQs5Xkr3B6d7Y",
  "key28": "2busZhYf6oWXgP6iYTT2nogersLzhx75CKNTuheunomQwzDeLGG8JCkoCuap1m2Kx8YuvGbqXHBiMoc5yv9NtdKr",
  "key29": "4Ab1T4wQSw7Vm7Qf9WRwVTU6kuZPG1R3skWgoammFMmauHC4hnNaqiKoeP1YezKQvBxjfEUAU32mG2DCL6vEGkKt",
  "key30": "9cWbgg47ThetLXvSGUMb1gnjBAAFfrbgyTPxEwUBQqdpRKT6bWFMAe1uWeumZyqzexTPQHorTrgy8TKYUHg7fD7"
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
