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
    "4a6daE2MydDGek2f5bra5RCcbfzkexs7k6uJU2H6bmEp23DQ3yVk2Q6JyyoYiUApAXuWZEbP1gVC6oAZXPm8MeqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvJNY5k2axhxeTPoRGsUKEuRj1DEMCeZuw1e8unVKg4s7ZsHRtYskD24jWCvnpVYV6LrPjyAgTvjUE9uv84ng8S",
  "key1": "4vCBJH8QhLrbeQARnhCxWnRNrUrGy6mpcabPKVzN69ioxgZgJJC4gQ9adhkabNmKfZi2sRQmVHdLsAktxhUfmnER",
  "key2": "4L4eDvQunjBBuabukMhTDsaSPMJeiCM5uvwk73UyJ4zcuE6KvQsF2mMNa7jUxshrUmVR7hefTFpfDtMw7WV6daJ7",
  "key3": "uv3bfdGgcsFbQohMVG2UD9BExkTibfbztnzTDk98NKDXHpkwrwYKpJ65oYoH3L7RhjU2mGwBT3pyaTnMTxfWFWD",
  "key4": "575gxb1jd3EDT8wmdh2z2kWJ3cQ41rS4sPXnuz47XZ34beeQy8yrJs8ScsczhB3aSSsdzGMvm8LNnKdxWbsxyARH",
  "key5": "5edtgp7oFptevzb3GpaBnw6y46d6B9VYCYHn4t1EjQizGHmJrRSYoVi4MFu9XwsLGnDwrWaCWieWfLBwrP6WZNHJ",
  "key6": "4GB2JnaNdqSMK5gBqgMoVbArVjvBWvi64fUQRgBFHUChHimu3hfFikKXGyiJx94MJVJxn2TcoMqi1JZCD49iLfFP",
  "key7": "3dQG2iNQbgFypQcxDcAEjHvdt2xVsyqmJefCHPcs6FZDsGhqVBK2azbmobuPTxujxyJ6s5M8pApr9FkYSDqcrRnw",
  "key8": "t9dSPGiGHDgYk6XUn6NRMkvXN39zQtnko1N7jjTACfp1RxTFV19TvBDxYjaLDnA69j3bP7HjzgHHfYb7qLNhq3K",
  "key9": "5qF6CVPCJJGsgVp6WWTnVAVKMKnNj3CHEmrTZ36fqcDVCVbkyaF5VHNxBCshcBUUnXpjVSvcb8jPueMUhWM4qRGF",
  "key10": "92BmMUHECnSDg7sRnJstfBrcWEpTRcVGr6yfkHWjEsL6HG9FeCWYMmHrSmVrj49KuBB7zo7CS3KWNGtwwjD7t2v",
  "key11": "5uPPhWQ6258cNmaKq85RFEDbQTntuMn271RCpzyfxcC3T2WmBnCS6sjzivoNHqYg86EGrAi5JbCHhLTCrc7fLph1",
  "key12": "3AVzaAu9PLe7UW7g6haXrvbuSnGNMAQyftCuTy5yyTbuxR2nZrfTdZERFoiBptvCXU73ynjRBaxccD3VRABfp6Dy",
  "key13": "3mjoPNp3jpdL5ZpjsFjhcfMN2XgnH9waeaEhdTZ2ZK6KPDwNi3TkSMs9aU36QYmrn1AwYBkqiq2Qyg7CWpFmovYB",
  "key14": "62zkERpkHGokuBoJtj4TKKFGxiGft344XUJ9TkW4PZ7UjS9JE49LME6nPgePt6uw7JE5RWeSdBzyNm45EJBu8gxv",
  "key15": "5JTqRKjijHz73Ja5ppipjDwQaptSCzexLT5i3daaCn4X2PHYgfu8U3yPCze7RZ3H8hq2dq53QqtZPXCjLV8Et1Hz",
  "key16": "4GLt4QiabQGu1BVWAiD9dgwgroXcSZDwESWbrwTYD6oqiRRhLjjew9yGVz7XXfrX9p9iKTNU7DUn1c6sccdPw6X",
  "key17": "46v9robzsHoSCQ64s8ymFdDF8FxKHW58hknG5sa2bekA8N8gdXpb263MbAeaCw17mQ1xcD3DScUu83FV2B1UzKzT",
  "key18": "2TMcAqTWTGTm4CANkJzuopHYZb3RcuUWUGeVyYrNoX3Gg85bauYrqoBQPWjW88agp2qncE42VXqteF4MRbVDoULQ",
  "key19": "shmT2G7swdzm7W9EucqiyEAQoeKYc53AvfWut8V2CYccTupbogEqHSyV3ZzQq8wQCmRChgNVNkavUwLdcdEkSKc",
  "key20": "3zvu1pnZ4qWM6M7goB1SyrqDaoED33dCWg1CDRXiGqw812tYSGak3pcDWAXuvS6WdEiydBteF1taxmniGfPJJmhk",
  "key21": "3Nm26vcqc3ms2Cw6PKc1Lt9gBmk8wPEyTDwvv27tEcVgYh7unpbCxrNp64JgEFEmdUZoScaUxpfzVhK8N7te6PNG",
  "key22": "31DxYgDscXc8FnBRusPXuUre1kkJV97KektGBzRY1fXTw1QtDy6VwKWma452wmxpRASWa4oseMZQ88mUa3bte5eJ",
  "key23": "5ZpA4p9cjQhxesCEjpFe7k6p3tTUtxoPqY4D4EFbbwBoKNgNB8dZiLPS4Y3hAttf9xMFQatGVYfvfa3HbBkKhypa",
  "key24": "4PwZNc1oFqyANDnJmWBi3EcdKzRV4hp3s8gddKTVoeh8c6NTNyx6V5VR5EzYA5kkhgFWw2hdNe5HXTC2wDk6LcyK",
  "key25": "4eQbXotLqU2oUa64arT6cg1WFBG8EnKi8ygX1X96ES4zyWCddMWhv7dciMkKBzvMFY7BhTJUE6tMTjEEyV5xxyj4",
  "key26": "BDZTZb1zdnHQMeLPZDxZnbeCEg6LNUXz8W5HRoHhihMWLfbZ8CUHumaHT7j7tLvFe3xFn1Xt6QBoq5uK6xxexMu",
  "key27": "2QPfvn8uDzELhFo2yh6pVYaFE31gcQiRTEKMuRupJXKWXTu6hSbDj3q3iXwYBshiJB1HwLSs8ZzaCYmNScmVDqSU",
  "key28": "2jMzzndWsFzkZuduBv51D9EtpEdZpERcEuXtBoDKCG7zCsypxmh1nyTmxF8hh4giuvtZMghxseqhUY791qeD8uHt",
  "key29": "3X9R6m6ZVWbHnRJXPwLbhBqYabLx7GkPQW13e6RGjkFqRpHWQTr7JM6MhPRQdusGNxXKPezbs1qpD5qUc5b1aMaZ",
  "key30": "26FvvTHaAnCEzeQBgQ8Yw8NLE4SZBYRzH8ujGrk1GNVT7jV8rBMge2uqSMNCm2TwLAUNjDEW6i2t3su9WhboaEgB",
  "key31": "4dgmJtBYFsiSyE1oVcEfqjnxF1QNw4CUvFvDQz1eSvjxygMaXqV8W3PM5NTEJARJTwdCxUV8oXkjR8xtTK368TH2",
  "key32": "jfLo92XiNi47Ay3E98mg3DBeFG4c6859Gt62vVckc3oNU1DpgmTbS8gH5LR8ZSEnbG6RKxCZdWoMe2ghnmZu54V",
  "key33": "2jXUG35smzz3e3VVFcwaeteYW7AVNjDZaRCWFomdh8EZXArWNQSj4iHBDTjuRNoMDxpBmHdqKTVep9JKyWxX7KHJ",
  "key34": "3a4LrncQ45UUU9T2pgXTBjKE2QpBdik4jMSWMwABfoQgs5oQzRZFLwZ1gBU8Qcj12T7oYB4kvKZeHjhwbvzBBDeM",
  "key35": "5vBHz28q5wSdf1ZphdFWxqfpodkVK45zFFRg3fn6ppRHDsU52v3G74XpYtGk72KHiGVgsyzxFfhJuybZGEJiPwL6",
  "key36": "652q5TcfZ9HRA9F3egcUadeHeFLvkLQBeLfbx2Dn59UsMNu6aorPYT48q48QRPsj2TFkAGvjeP2vFVtznLysbjTh",
  "key37": "4p8wU98JpHasTXRRVYddPVoBbWjkAsRwkRRKGhF5sLq6PQpU18x8SBZog8XjEUPDsdgYf15HQTDPsptGBpsXrcMF"
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
