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
    "3oVWaTd149bsErhxdThnvEyeHy2Dvcoa5tmhzRFsAjUionr5y4vtiWebgQ9VZU1vDTYiQW2mWBGW7nwpCENXn5fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QE7k1EbJicug5k47N2RssA6gu6bedMHcP3kbDJA5nEvzEikqgucLbyVCgCFwq69nN6xrSZReCJqAWkuPddNGc34",
  "key1": "2VTparibpA2yTqDcLPNvHfjuu3BHZA6QbPs5tYetyecW6ffAnyBsAJpd2LjqLRwcLAGy65PiTHRqGFMWKyzpwCtP",
  "key2": "G2tZTcDFrdFVJpxyEDCpM4r2VQbngqxU7gGTdoGwcTNB7DU2j4jWjJuGFbogFfxRs5zxt6RDT6HDYW5ic4cchia",
  "key3": "2rSXqFhRzv3xe3RH9f63kyTsYqZ3LsqDBMjUXrp5s2SKaVDqSyh3wUiWPZouh5Jv1GdVxFc39K7U3MqsgkUk2gz2",
  "key4": "3pGyGdkCy936kmoqRuYRYXcf8D2CXdt1dgbRK1DZSbVzvcL5jCV2DYH9LZ276D6W1YdwyrsEMGRWucbejy5wWWZb",
  "key5": "5uSuDf8yK34gycUJZYr7mvqhqtdtKqV3jBKBB6Jxn2hm1MWfPW2mBf65Kdt8wARCS88s9ED3LB43gXiQLjrdkRzx",
  "key6": "2Q5NC8fw6t4EqNScNRvWFqBcqkjC7Z9rh5zf1dhbtN3Q57PSTnEa26pVNTRiyNj8h1hwbqgmjCkycKv9miFECz8c",
  "key7": "5bKhZLh5gWHpujjUXBgc3LsRDEkQS5HP1pNaNCTDasrRSktmR72yyQG5GBeBm5oxq6wTPkayNV9Z18zFD77SR5tW",
  "key8": "3FEu2voaZ3AyucN9NDKT5k42fvGXfhSZZk64skTQhoEKoTNTPZHghy4nCQ94tFau4TbgGjPhZQLPo9LAVxYysyHy",
  "key9": "24o8HtRYmnPxN8skH9B1GispKFKmBes7MnQonk223qswtcYLod8wEU4iCWhizcdtcW7i15TJpeo87gYD7cqKj9tC",
  "key10": "jfFS1TrTmVrd2XWwNS4zVQyEFxB9dETeVRKxWvkx5cqZNN2kRDRGXM26uJi8r1P8Ar5MKBS38wX6GUQbhXH97bm",
  "key11": "2UCsadNwH7Msz1QxP6ymdS2Y158DPp4VqzCMLtVR1G1kNmmBte27Em3cHXVPpt59xziP6sJyb1JmMvZYFFstUGK5",
  "key12": "2yATv8pkRpLKChcXieday33rKRoBDMJNqtx3cUKcqVoxz27PLwpTycxYiyfRmS6rwjG9e2Krp2em2snFxKp7xbhf",
  "key13": "3Lrv2N17Hac4utzfvGYf19emQSrk6Bck6YhmUjkeF1DqQrtzALbxjEtaoiUAzUpY65oBcJb9Mh8FNDKCeGEj3Xge",
  "key14": "2YA3LPfRUVxyiL5zYmnU5ciX2uoQRqVT1cSBaZBhaiHun2pty424vhUFYpS53G3DrrfQ94cuoVj1W8XFyB8wBqpb",
  "key15": "3XtovHtmGC6Fv2D39i63X47xQXyaTqeZ8J1cduk4Fn3pq3MwVC8gtx6NNpNSiynKJua2YgjYFkKxSL3tsP47XrKX",
  "key16": "2x11MHibs5vbhxGzG6V45UVTv9KJhwDMXqgyhX9XYb3kjtu7wVJv1yRaWY7Wof3dXGZg8xMb4F35b76azcecHC4G",
  "key17": "kTGgiCxq2r6t98JP2H9FfXbyDHAkcNrbtHwEnpQckjKpKCJjHM3EzVCGu48oYw2w8fHpzcTpCihcffnJTmBrwXT",
  "key18": "231PH3U2dScsYuM3XovKT4G1JofzQDzxTZ6g6WqxGhFFvfUXVa4TBLFbC9xA853Nx3d25W2mcz5z3S5dTHGu1Gyh",
  "key19": "Z6NDVKDfMNJYnJapRgm6xqMECssRXv7FjW3PgfSfSa3LjLq4ipHwhCN8pT3eLmhMbRAFaCkbavvW7Tma5s2ZYjZ",
  "key20": "2CeVa8ns6U23yyCr2UBq2zzvoFdBVwiDuwb9dZZcQm8cskfWLfrwr4hBNkrPFX3Emt2zsKLVWusmGmUv95T4ohkv",
  "key21": "51BYTAFp96LJA9p55Qb1R3gPPqyTPqtcNqQiamGm1CKensh5KRWnHRtPdJM7rbdSCz1yycVoJ5N5UUzxJ3ehWsfC",
  "key22": "4vh1VhAKifUgBvUXda4YaBQY4p9o2EwwBxyTkHdB1BjZxyHza4uRAhRUxJ9yfchMbTRKWKkSJS3dcLKHJy2piVGn",
  "key23": "5FpTidBT2NwaPxtjrDhs9jAfv23M5gBruVXNqyTGupTgBa3i2NvQMYYMG9DM7QciSYbBUYtGEwk1mhTaw5GPM7Qd",
  "key24": "3YowTpZPRjsp6asiQQRG4qs3G3T3nA862jXDmpmPYtV9n9nsiiwHPC8UD8GYcbkEbgDJ2jHcXbmskiRxanDkX64H",
  "key25": "5QoYVjn7cauRmdW5nYi2zcQtXDRWPfbHTPrpHjps6KWwUH1YyCEGonduP2pmFDdDAkja5yNySxFimhx8dmopbuUD",
  "key26": "28YCdfCDDabyxr7XYwAXKqvQZxcQVFrnjHo9FBDz9gAKmbY8suXqFbD8tP6bpcvLyvRpyzMADSuai1o9BqhAuEZ7",
  "key27": "5hrqtEah5KhAUbnAJe9Bqpf1z4fvNZXMrgCS6J7D44LW8EtRo5xAvbsYwigxhfqdvXXURn2xrYoEzYcVjgvqKkRZ",
  "key28": "2NVcTx5Ljo9SpEXuyiLhLS3jhsNmWfas2AuiuprUx1f6QDh5e8WEHn3B8iMYB5Vdf6mQnwaSx8XvghrBgzABhiLr",
  "key29": "3w1427VgEKT1D2wR4ACDBByzjAK7JHxxSjDiKPaCczTjTLHyECTPt3t5z71Qdy29prXjqLag74p2579m8uQGP4js",
  "key30": "dPQAscMMyBpDZt1YKkMucqa854pRd6VPnsXspt4Fhmr8VxfrbgUkruf4vjxXfU5tDScR9hjVNtppjjvX9dJkRpT",
  "key31": "ZhiBbRVK2xrAkc2fx1WSRGqHHX9j5jspQHZYZ6CKEhqEPLbW1V4BdXhoMS1q9tZse1869yf59ig427v8ZMhguYs",
  "key32": "2iEJmGgPCTCwwDzBty8GPBfksT5nufeq41ixC8hjtZWxRwr3QSFTbWqeaZAVDjS2raaVqp1j3o3Y5euK8jdZEScs",
  "key33": "39AkxPeQ8RTbD9wPae9THfJ7JyYHMGdEZu6htkCaGnFVrbtXYLRZ5zDqm6G2fLkBXjhVt9hHQJxwkD4qyKt4xM8M",
  "key34": "4SAKGJwZCPW5Tq3mHoPCdUVUASKBNdbSDHRspZp7MMcMQRZrJHcFp1zwW9eQGu21G91umgNVkk5MDVVBN9YQtRxL",
  "key35": "ELRstdN6vCvspnqBEARN3WAmT5MQ12ynPMNANgtPRE9tFfN4xR9raimQkLN1fESZjLpnskvxxBfsyAvpb5fb2vQ",
  "key36": "5odSGxHTuunvEK3CKyUfVizCb8pcr5NDeLsDCAWh7jNpKgcGVVrCyjzBS7oZDK2ySqP19jvvfN2ZY69Z4ZNSgJzd",
  "key37": "2oVWQt3iTqqEqugo9Xd6Ms5HaTzFWEu5x82KdKBV46h4iyQU786B3Nm37kPEw1mTJqvNv3HMLTWj35Xd1vRnoDqY",
  "key38": "3MLbpyL6f2mA4VVmi4dn18po2rt1CNWJaoaGxYnHcLXu6tdBgrSQf39THVXZZ2f41jS28L4ehpb4EMjmFXJwck8g",
  "key39": "2VXXyepgV539WRa8ppL9L4aWdzS9GcqjF5Ho2bq2VE1kQFte5ERLRUB721f8rRvHjmen1wEFkTWaPrJjdJNj7UCW",
  "key40": "54c774XxjGAbq9q6Rn8jwmvQoCb7XKyHvHk5UYUGLaD6MJNrdGYm9T1kWzWVC45jL4pFMaeraV4thrahSv8gxRtA",
  "key41": "U8u639YRRD6fNC3nep8wPFoYtQNW7BpUK2ptr7DFZsVfPHCiVXuHUZFM3koh3RWK8s7vs5Nh4hzk9EZjkngYhAL",
  "key42": "5eJMxfRoSbzx9pqdEt9cvMKFxfYQrLPZeZUnYjubyBjQZQ1DJTqXX5cr3f5i3qbeGK5uYRWtvsih8ZPLVvApNCTX",
  "key43": "5KxJ3vsCVZf2ba1osZymsj23nVLAo8RoY8FS5Zk3H3QktxYDNVm72kzNM3uUR4bcHVw2EXEBrhC5WxFhhGR1Mjt2",
  "key44": "5FZwYkEcxhrvfJEHs8rxppTiJUzoCrYvdFFHNJB4cmkBCoYiVnyaadyhJjv3GrFUe55MwktRgu7NG6JoSzwHUQs3",
  "key45": "p8tTtHh4GJwsVmPNjm75wk2PPuiowkFLbyMAgiwBNqvsEgmJ87Tv9QehE636FFjAysrXKKotM3mEwUMFPwEEti8",
  "key46": "3tvq673vQovp8CcaWLwzJeGkLbneFTcv4FEbwxRYUtct3TM1y1oD4Z5xcxCvNcCEYTEyiT66sqLezDh9EPAe5oGR"
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
