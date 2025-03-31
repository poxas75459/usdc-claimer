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
    "4NeMzT1LT6ccELaGq83SCQxoGtiae8hf5QxkEuxed8eJZQ9tasxmDZdizbmTrawu5fCAVznggWp18f5pCKXdL88n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3he2jSxJTPmVVCwShvh2tVr8A5q3Kzh3MAmpXC4u5Aym6gd4nooJp2mifphbrfaCnWHWNmvMpYx484YQrB42dyWg",
  "key1": "5d8dM8wJGazo6bPUPYQaund4V8mU1Y98xXtR79Liyf71ZFBXQbU3ibz1EP3KYLmmC7UnRGFnYKm4p8MNL7WtSSpx",
  "key2": "ME28QMPEhEjf3UTGJ2abKh4x9iWxFLDDzaYbJCsvBJ8ieihTCazckQatQBHyZtdLR7LdAYA2cBMTiYzv1uUnvdV",
  "key3": "3Ak1eMricJdsC21aXehN4zqsSR4WComGsgFRTQzEdrrpvpUaje8jkf1SZL1aets47LFb9pmMuAzAm5E1MruCtqTx",
  "key4": "4QqxovRieQLqhoQ3LZTSS1D2gW1LUFRJEu36ujcgxTPMsGS1555QewJHpfFFfiPWyVdN5BPwZLxf3JFaAaaVUQQQ",
  "key5": "55dasiM8RBED75dY1MJ5hea51WQjqJMvDJW76GZu69Yj8DErveSw4xkd7tg5msYTvVgsiHcd5yUCB5CvWSZxYxKg",
  "key6": "66wreTPz9gt1xRf3DzEEPjspCb9kbpMucPhkTZFGbHB4apZdAWJj4cjhLP2qmeSCnPxHrqTSrwtHaPENZdVBUfyZ",
  "key7": "2t5PxL6fjvRJ21M9Evnw3sxuC2w9mRrBBVVxZKXbuzFWG1NoRszaMdqHZFQeXRigdNoZTGekpLCXEAv3pBdQyYHM",
  "key8": "63TqJ9jB3Wvd3K6ednc5CBUrr9vAYQE6jsc1TQAi8aWbCG2Xn172JduCCo8iUFEnFmJWQ8T1KgpFj7wDaPJx8a4z",
  "key9": "4TiaJfoJNZnJPqhUbzjAPT597pY5N6tuF29gXrMLNFJC3amBkNmz6Yx5wYwYwSuLQGsKL3LAQNNEc45xd9KfFqTV",
  "key10": "66DvWLPsZZo63GXm3U6p7k8eAAUYTKWegv5qB5F9RyQdeNuz5o4NSAMS1Y5f6ir7EBEKRCEwnXP2Y4UFi5YLKDpC",
  "key11": "45jLtpTG53f2RR6SnEy1rMXCucLzQFS36VLUJJotkycTQCTqC4wjXkhrQBNo3h4HZ9CCANbEsQAyxZL8Xrdk9SyR",
  "key12": "2LGfr72AYFjmNyzuvYFzUYEsLm58SjEp83nMwCJaurEaWdu2GFExKnah3epRTLP1yESik71GUzMp8soyj5q8g7hX",
  "key13": "5hVp9nLtTF42WUjG1L3Sfxu2Xs6yNRRn2C5AJp3FdkYiuqxQt34WErdpbaP3syfJkL3dX43Z3Fh3H33ghgvLDwbD",
  "key14": "2GoGMiF9iD9WMWjGrBo8DubbUTypnvfUQJ93jF7Wkaakm3YN52bsJPCYe3zddqtVgDv35CHi5AGerFqB7KexgNsh",
  "key15": "MzMPjjAKQrfGrVZUmPECG2hQhy1eMXLjGNvwHsgGscsApUi7MFVyieBFsidtmfKw956ZaRUkT9tP6tEKpLcYpQ3",
  "key16": "3m1BmxH5gp58hwQiSFoQAhq4Wyo8c4Jd8LSfYL7gMBQPFCJ7jtiGuth5rBUjZrS4A9uj5CgDNZaFoaV4DEgQ7z3K",
  "key17": "2NZXxsYepRVFkx6bNk5P6NYD8rZ9rgG5Wk2noQZjS8uSYpuu6KCwQJhLSsdzk1Q8wVLrejjDxKxszYEdG1oguN8E",
  "key18": "3Z9FTGnpKDBfSvxGNZ8XBk1YFmjrcwrmQf9VEotGRM6igy5EBPEiV2CzJvXygZCGootkscm5DQfQJXuKTXTGS1fJ",
  "key19": "4TXbqGLonm6ArjhRMV6Ts6qnYABBaNkn1JqM1x98thhF3CVBfqfYYYFPdG3WZkdZTxqd6J1d6G6u4PH4YH1DMQxj",
  "key20": "5cFDqn59M38EaQxKPdF9PQuGo2KBnCB7Dp3Zj55AE4gWnZTpWKua91LUiwtUnkRDfZBfgj16JGfULvpSJMVUGwxi",
  "key21": "5JFUfr3pZQ5Zmu2hvcp7ZV6yYfKHQSo9YHxcAWGvAXykUifXXjuaveqcRkL1CvTWh4XWtSiSnCpvrUhNjy1hbVrV",
  "key22": "41UD6u6bKFrrVWWRvcFuXTmz85JMgvXbvC63t7KqXUzJ2kqMnHdYC3EsUaKZgnpTCLoNpTuSnN6SpqNopTB3D1FX",
  "key23": "B9gJWJqsMZHeMYLhJWS9hQfvuVtnwmnsxL3EHkhEFEoELLgH2sd12nfKyoBAY4kxoRfrLTKtfQCLLgXZCNUTMeA",
  "key24": "2BcXvhPmikv5wFkHoefzuUte9FQgJcWDvP9Nm3tJhz8KZcGeTPZJCmxvMZiTcKxv3RPD1xosQeMsHp9yyo5P3nao",
  "key25": "4HXQKYLZnLEGRT7XEn7zz2o3JeJWGUCE5QL3N4oZ1tM4mnhy5ERWxozspJ3VVoyonq1x1iNHYUA26q4BjQGyrqWS",
  "key26": "124yUGhJ39NyPK6CUDHQZi3Jd9qcXUEDNr41oDNPhTD7K14pKLPemkuikDB42kaeYVd78v73hbCw3XhpAZZZuFQ5",
  "key27": "5dkTAuc7VWAHC1rUYpABfPfXBVkZJsX8yavdieTKCv5PCxhUFX3es5ma4GPyzHUtP5K33jrDf4bg3vJLaxAFrZGp",
  "key28": "2VTtWVLrLC6gVG3dZNv8mYovf7roSS5ZTd8UCYAnAnfPEVcPZDgrwjWo6LDTeziyELR8Zhb8vxfDy7ZSYQRvDGTr",
  "key29": "k3KnXCqow1xqpaeRRTT4HWBCrUJZRkJKwGiWN2QkX8W8RBEijkgzxRrHMcNarRMFoCx1k628DeHKK8iD74AsAvS",
  "key30": "5ejvq3QJMa6exy7oSxZp1J4kSxwcgCLDB8M2jVpm62Ah8BUVQhWLyHr4MwfnGcrPeHct5QhCQSNwXJTMJdaBLRyz",
  "key31": "J79WJ4qum4QNyzXksdah8sCPCuLfQSkpmP74iVLbUoAn3B24q7WjjMuc3sFvcErZDqCavqQgR6Z2w6srudTeF71",
  "key32": "32UTEzZQWFwa7sTE9RN5d3qFT2pJMEvfUVVD16TDopdPVa7c4mBtMPpFH5qmZq5Gfv2UzZGWTevNZc7Un3oDF53s",
  "key33": "2LLsM7NvsfUsz2d73PHLwZxnFGzXNbiWZhdJDEAgtE4Vyh2w4kMoqBXyMusspaDD1uGvzS6uiZCEnH7wUNPEx2oW",
  "key34": "99VphJdaytRv6tQ2xgnM2KtX2KD9joFuYhxcDyVhux2yv1xg2sKgBvWafiF8Ne8nMDMxg1f4XZsQopmoFhD23ZY",
  "key35": "kQEyj5WCX6XuUv9nJEzU91jBMYRjna1mX7bUfqUMBXj4nZHSSh3QxXmQLqXiJRCQ9d8LUkwoJ6eB2TZN6uxCndT",
  "key36": "21oKc2jHAf4wzZVduQYhHd7eNXjZgCBDxxGPxNckLyUJtQWmM2j4ZjrcRPMEqr4Sv7TNP6RADLvrMne1Pqax5ncJ",
  "key37": "2u1Dxpzgbk3DYipwuW5fTJg8yjGejmZCbqwRBW2Ny6CHLXKjmhRAjejdAwL7R5rVJCbQ3JX9HDPwzE4CNPSK1Saj",
  "key38": "3DHC8NvPFRhXjLHu1jGZ9vDCiXLdaib7T2vsRW7yn3zmkZDdarTFZjrxUQX9fcAdQQytrowFF5Hc6TnzCMgncZKD",
  "key39": "287gwqZT7ZqXkDyeEKp5qn7HjdLovhbf2KFvXEvsFG7CMt4T3rmwR9TPLws9yknF7MVr9Udqv4rd2Lx3iEXQNXdZ",
  "key40": "2JLbvvWLGPRcmQoUwfrfMibiQcKcVbe3dSF5KwCsLw2gYqY9XRgwQVLai39w9hnyJA4QRr81jCRsVFwwXTvvVHg1",
  "key41": "66K5YauFdYq8mD19mK27Fh29MqLvKmPVXPdirHDWi282QeqPjkZucKoWHyQe2mL2KreJX5Fe4C4tEGHkhdbjHufd",
  "key42": "3z2unhos24FiLFUpWty2TRU7ZBVCfPrnedf6nn2sYFqZ6vdKAie7CRMJpgqN2KVPYz8fh4ACrmNQ7HgSViydNL4V",
  "key43": "2fWHqRR7RHooQcGKZnHow5jxJgihuaY452xWqnA76VVLweqZWBW9jY2Ud6LMydzEJUutuEcNYQ35CDZVDG4Y1Wsh"
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
