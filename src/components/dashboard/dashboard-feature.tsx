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
    "2p6mXLVzvAP9gtD8zJoJtzPmaYQm6pSt9tX4iYr5hxRd5CR4AhR7gQ1aXptZTBBXXRFJjXoZ5ALty3DdGFLpDrei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCxasK3pNw4CtZ7cZyQRpAPFXBv65aNV7mtQ9RYXgsssUabib7cB5gXCNbfs3o9ydvQ2DeKoVb1uUCaQQ5QtJse",
  "key1": "MiF92qwuBcxM8hP2bmYB2SmM4a3mojoxbwEcyNXStvsis6QuxWmVYwn6pPZ8bvHERFa8RUvg3zmDkQvMJaogGJT",
  "key2": "58DUjc5d1W8uDtsR5iNkYz16fTity2faSRGSxcAMVMaKFwK6iHwPSMMcuJyfn4624wbnzqBQrTLrX1kea5rdpfFd",
  "key3": "3nJFLYq1PZEAN6gCsYXv9RoRKkn9JGcE2bZFmVq4SfxjaphMru1qvT9GGr7wUfApZvek8Mtj7YC6mhN6s94TtCmi",
  "key4": "5DPqs6jNMHkzuAvzAgRFzAfv6HYpF12qz2bVkGyqq56TaqFkAg5AjCiXTKhCfX1ThnUejeChGWSHg6gQWP3SyaRL",
  "key5": "4cxX5NDVoRhdkWEsohhSXRHiCxYyr4osZQ7Up5jLBu6X4fJZiHUEvsbXARSHkNUcjKMNsd78zwQg8aFkZTV35wSg",
  "key6": "2NjPpzSE3RP7iQK8KAZgm2WSemD4Vn9Bmb67gmqRp3hVV7GoCnBkJReLvdLxFgqEtnigwg1zLbEhSKG3JFrdQGzq",
  "key7": "5iWEs2bbyo5bSTvDpaejZ2SPyxwa5dUzeYDhrdYBpFQySijb1yAr6GecwjFfqsDAmfBdZDspDyoRzyWFdgAXyvHi",
  "key8": "4j1UDnxzq5Ui1jukomkqLzg7tKnv2rJizDC9srKQp4vYMwmVp3FcYuMZwi88T8RbWFrBKdotRqkuUVcRQpjdCTee",
  "key9": "4nFuwFsa8Y7rhSPhKLc9bHdXkQmYXUsyJAKg9r24aDDpEhN2Q4n13GXEvCCXEnfAnwoeDNouQLUznVsKoSoAsKk3",
  "key10": "4B8GT6gwS2E94JYk6NX5FTpJuosRrbwd5STpCHSN4hFS85eyavXQ51SbFQnMudMLahYJjPbKSS3MbCdPzANMdu8c",
  "key11": "55aeyp2tJPo7sRWMLRLDu226mAXa5aSiuuj3usw4AabRM59fV7eJgJ2eimvHStVWANXaF9CrLWp2jQ8oouS8Le7e",
  "key12": "DqdvJnM3t9T9gPJAaC4TeSr7M8DD4SGzUrQzoRnVmTBij4xAeKp2PMLBYcshVqwQQZjyBX4KcTcMarHzgbmkpwF",
  "key13": "5mzJUmWyKLRVYPznC8h3V5cWTZAmBwJQUXXG2SyzdWNd6kGJDzXRceYpcFqDKDkjPcZWt1wJ6sCeHW1knedRPjgn",
  "key14": "3paKmu5DX7B5phbrEZXMuRAg7UqEqtrJaHpn5c8dAtQbMuqSea6KEk63eKNnRCdc64YoD5FtkZVHNRtaRuWK33Pc",
  "key15": "9EWjkQJfuhzgT5tNRCpNk4P3CfS2LX85J47bPXX3ruEsPP4ng2gf9EUAsB2TodQbhC3RKseHHFh2H7aTjv3aSRF",
  "key16": "YUmL82V1Nr3YoTiEkK3yV1kjFCoDxFkHEMj8S1vxeUXXQXuZb3bPC18ABT6AZYMj5pduuTa54bJQMRTXhfbYR6M",
  "key17": "3AykUYZ1Q651ttPSFvB5aTA81idZiymXWrtndgqCqNmzhARo18pS13awDtqmzShXTQq4fa8YeuhfWegMNshM1AR8",
  "key18": "24Kq51cSWKMTjoYynVuvT3fycSPTmLr3hdUu2qEc5UXBYBEsPvEojnaWX4ncpeqPp9hQzGfB9ayPzJ3HzbXnFeqP",
  "key19": "4EuBY4rhHTqfXTY5M2FqnNE7GeMvrdyosWkVDmQauijjeBaxc7TArN1z8kHbLRATo6M5Hp6dR1VPxGu2GDVzWTtn",
  "key20": "4v797PE3cFAaoWEcKSTpe2S8EUb5opFG7QVZ8ZLDcoBsjK5ej5bdXhD4Q3NfuWLmh4PKawpm3Gxt4BWXcuXaXBL1",
  "key21": "AymVEet1rkjrjrPHenHCMApbYTksu6m1edLgcPmXTUX96chNUYDpGNNK7oHCW6RQhoq1kTPr9w9GcMfHVjBMkaW",
  "key22": "2EVGb6HHwLjKbiHXx4iJbjoN7gjoGmDro56K5eHDHEyr1xWhLYBL6eyzoUMao9whepmzkrVvYvRaVnXjNSrP8f6M",
  "key23": "3YsiCVxwkaruJLdNpq7peo9J8fRfZqvqXiHKhbdkwfBTSd4Cc2k8Xd43mGWmVGNk83va1Zm8ea3pwUz75bovz2Jn",
  "key24": "rjKMCvM1aWRtGo4NBMVo3B8XvdFfMaa4CLrLfe3M5eB8ouuBJmWPdrQ3SNQaffF8RYpShwXozdPaeKRvQqzcXuB",
  "key25": "3YdzSz1yFT4efuK5ScQjxUEP7UThFd4gWykNKKhHaQxxFGMjKssSb3VHSEVbZDAjx3cfpDQSv5wc1XqSXfr5kua9",
  "key26": "2ECSxqADcqixefFXTYKeZqh1MRopGLGwvWZ4hvcXR4VpK4hCMyLVk8m1wMrh76Moa2LnTjhcbTCd1mDxGFAofvHS",
  "key27": "3JbSuczs7wx37ryhqTQqqKU2FQQbityj2iDMvVPtMqsSjttkACRjrYdKFNQaRevLbWy6FtiZCkbwnLffcgiV3GhB",
  "key28": "5LL5gBaDYHAGsWtvxYs7WckopV3gU6Luy3NbhrRpJfFLKJ1PNc5a4SELJB8HqjQUiarLNCEnfaH8wQLHqLeAhszF",
  "key29": "9Umyw5iGaSFvs8zU22j3mHeFXCZjU6sPhfAHBDXQ6MRoHmMBKFsbVA5Ckh6LVZZqbpopZxCAWi62FRBJkdzjfkZ",
  "key30": "4fVf1FjBqJMUq7X4EZRME3BT1PLyoq5iMFscMtNgTAvj6snMiq1SheT3KAnvJSUMZa5BRKEksaPmfKmZLavHH8a3",
  "key31": "52kBvDUD1yoEK1yFrhzBuLqZkRcAVxwCvLAAD2Ed7SsxmxdvWDfQeHPWSjhzdRQT1mPrmeVrDfuW5qeV9PKL1hMX",
  "key32": "3rvbRUaVbodPvUBdWfHPboqgw6e3CteCKXUencSa15Vaa2GtvNqiAVzbVEg27cWqYDwzBBNiUG2eWhedyqvjribn",
  "key33": "3R7UFBqyqRgbP12VPpmBApZXJwucjB8uoTvve3T2RUwQaRq1mahWBrY5boXXW44sUVcMqJzrjUBekesvp41idtRY",
  "key34": "4rUfYhn471hT2dkZ6bZFPuTCoAjsZ4L5DZwSdCjegM7QVuk7VqkZDWnZLEsxsxVuqTGtZkszKLYbKWFrbymcMVs3",
  "key35": "3MDHXZnSAZNGXkikRinaVu5xg3QZ8Fkr3bUge4YRWJ2T16RxhdVV2nwx7KCJVV9N8UmGiLSQjckAdmUMFRaHt89y",
  "key36": "2dMiUAENoXzcZVfd9n3YaYY9NvBnydQRbPumLfkrRMYEsbL6QaLjTb5avka5Mmu7cXFjtdJjFioHYdwZPB92Qmf5",
  "key37": "ekgD5B245Lk6CeUvFggJxku5BZNSpe69zbXqgUskZWM7H6Dro832F2xcUjmCZjz3y5M5PEA9BP4PJS6yxqkwypd",
  "key38": "K1kwkBzFwK86w4pHJPmTzNPM4YeMePYtAQXZQTSdxnm2JJFED6C59cP5yMfCf9vhe1t4ywjznoACrKZyoo6GFh8",
  "key39": "jar2X3yu4z6hpt4TQYuWNamLdZLZjERQe9DiPxoCQ9ojs3KeknwZUA4KzNRteztcKryLwhsP85Tpfj6rE8GerL6",
  "key40": "41HM2Pzi8wR2pkgQD8J31cuY34tB9jQEShhNA11KdsT6oxYMKTaQs7xXxxWTkxntDPTNjc2UaWXbGmRj5upTDdvi",
  "key41": "5QWhxeuBvQuTk3MoLQWb3isxzXsWvaoddg53KijGXjYiF2tMfvuiNnKHHAtUp6dM2W6kxqTm8pscA2SGCNRhiJHM",
  "key42": "5tSwhUjwXCsXdTnb6iaZ5ffWBTNg5HfYifDD9qUR7QPTkAkRTdYLqKnJiRyHYRcoMdFGvqibgEUJRSrF52tNPXjb",
  "key43": "4UfKedEtNNK1R1k7jDEFiqBkzCsovqJs9ASs9zsx7TTspU8yt5qm5L4S5r4gcGNn7nXu5VS2VWvBDbwGUhApf1aH",
  "key44": "5XAV5Ck1t1mQM31WprRsF45hz9Ku8BkTeSfBjaxoGWTDiCtfVd19xH6udSFtC1vdSPuf7Ma9c8uJVu1tdWDKQqmb",
  "key45": "3VPyntsHvefnAvkbDVpYqsgRjwUxcUUnp48pQxBxFxpjfCKeSrj8m6EGRwh1F75eYA4nAavdi971M8NLa9ziKTLC",
  "key46": "3j8xSgaq1hHL9D594kCxo1y9M7kyXY6qi1SaqGwNarebP6E5p28ew72VhkY44wyxx5YqhmD26tR3sk3EANH4Doge",
  "key47": "3KWFzYMWSYLVU3cUdgfrzV1vSMMHiRF8nM81GjH6iemg6QSXnYQnjaxTyETfLrjjFoDi93rz5dTGxkBcbKFrGsdy"
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
