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
    "37YDvDrKwYT8DGKQxnoJhFsctJGh5T29LQVjdinhiFkGVpqgAkrhhYDQqH9CgikscoAMEwLcXfjaog1byxrssBhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3GD98xVa5ACXqc1TVrwbYNyo6DZiCEhJZWEwcPsYiJoz9f2CAHYwHSA21bejMC1PXVgbQtTDd8t6xkKQktrAFg",
  "key1": "5Waa6jc4XGyziKFXbiFXvetFAN68J63iPaAb8YhJQy6Gb4Lbmv2xiKYRb14Eq24ZG11PreJnthv6cHyPe3Yy6GhT",
  "key2": "3F2DPLFJGzxymG9kzendNid7k2MCFWrqqmfDtxNKLK1GZD62N2jJnxcg9HdhDT76XpEt1cqUDcD56LMHxmE6MeuS",
  "key3": "5V5WCYfAtLRNiRx8y1izPtALDM5fMVFEbidSMzinhHbyTz5EybTHzBb81bmCFdSYJE2pJvRJxaSkjZ1fAHaS7zAn",
  "key4": "FxuWtwhNGJdHZ5FC88mpDxtWfuWBVbkgxx48swX6aQbnygVn7QhYmucfsvkViQmgk9sCvzxazBYkgNBqYhKdzM4",
  "key5": "2LK6h28n67v8MzctzgtQFryc1rRmmnte58vFVyu2C4F5GWfYV1S1J57BmWJDJUBxCvkMPBw5jxDtM6Ko2c32JPWQ",
  "key6": "62c4ubUxhzm2PGoYHksWEuwX4jkX6MB5f1HHyqLrUsCkDeTAogbFpSB6mcaXzom5hnSEtMbquHfbYsxu1rajtZVH",
  "key7": "qKptoiaPW8wVJMKeLV5ggab62dHgKj2XN1CM9x7dF7qwzBGxYKsvoLA3jjfHgNfJrkFzVVd2WXnSo21YyCbjWQY",
  "key8": "koYPHCF1AQtuNM3a8baTZV31SAj347XDqXpTJ9SzHc9ZGXmEBo3hbzGSnKD16Fbqifg4z8Ru8yVTLkJMbMd745d",
  "key9": "i2te8kLpvX9dcKecWuSnMAo7R7kWwZSr8mjPQvv5qk3t8JtnxJuWG8Cj5GZXW1R1ZGQ1AADW2Miis417H94Rvhm",
  "key10": "5dRYpYQjZXmWQAdMT1yuu1GwyDPfaCWuA8D22ZJFCovrwJtFJx6bjGDZvaafSFozhomDfu16vnL1vADZkZzZtzch",
  "key11": "5HzvLYYWELtXfTRjyawDhy2kcYbtySyiLUANRaaZH1L7wmQTNYiwcnhruF4tq7CuCF4SRRumCKHgWfsG5aS5DnPc",
  "key12": "4ZogErJgT3XxbPYs4PhatW5zv2PkZvoWzGd9AkFSwjJdv64aq8HWwGPoNFAR32tSdvQimDfH76wSLuQeiaHEpUhc",
  "key13": "3nMcSrHqLrFKvwB4GZcEjuJdXNCinTsX3aSxRozbZzDdwwayKR9QZLW5s69qgdfuJjmkgeeT5vrAWdch36Yxbyg6",
  "key14": "3jQ3qrNYTzdcUg8AtEfjt4njjUaNdeZniG6XiXMZgnMGEWNSfPcgsLRQr2FppKHTjH1De6LtseeXzouqEFbmfL5A",
  "key15": "3Jb9Ach9rKZ7LEpHJzLftV8s3LeoYDMqAYa1c6ptV97Y4bCyLq9Tc1CMaAB28u92EzaRXcYthuLGBFVhT8dGz4Rw",
  "key16": "21GDu3kYwAFwkPbnNYpk4GxjYeBdMCmZrbhy54YaozTEW6Wwi952PbxUKAPByWrUVo24Bq4QYJm8JkYTCNJPcoDo",
  "key17": "2YCUq6a4az8YufD4kcGaJaYPuGXi1KvuK84ZizgCEZbCFL8EyT1Cm6vDAWV2EWSnAFagcT56KQeZdNtYKBxCkKL9",
  "key18": "oPgGNepjmRkhnGsaNbzH5ww9dvm4rCDeWYsN5xgcufotCKigD3Hj6TvAEC5NgzeE3FJ5EvQagMSV6fmLVSMh7VR",
  "key19": "51tgFNbvvAcAqKRwdULgZ8ESQg4n29vijPM5HwmJE6RVWcT1KqVZoGv2m5833m6uq2WXSvMnbhYuTAcoBfZmgmEC",
  "key20": "2ZCf6PQnYaj5MdN9BkSsSW2jkUnQzBRNofxsjthogknL8SzGz44Vf2hV2Fxhw4SjSAsxEkB4LPNXue7F49hpTUVT",
  "key21": "2rZLBmKWbA6ecFWkuf2g9g6ieHTqbbB1Juo4sAzPLwMp5qvUNU8RzKzN5KNMyXKV9wzHwip4QtqFm9Gh5NuUZKb8",
  "key22": "3LTauTDySo8cwR9rsJirN6Vwxyje1SaRo3kA1D4Y9mmRAqbyWPjVMYQApTb6LpJfn7pxtef4dYriUdh9mkPqs3ha",
  "key23": "3hmVr9aS145qcU3WzUpjKjfjnXYRzY3erC6iiPU38KVu27daR6qe5C6jdhgr6JUjhu9QXJm446cDRDgaDMnWtFz4",
  "key24": "3uHLeHRF4HdueF6juDR8f12k6DzYpWxBadDp6k4UE22Bfq1EYAz2B1f5bgdEESZpCxJEvD64rEKjVAx4yTh1BSnu",
  "key25": "4e7QaifVH57QtCEi3GsAHqR5iebhpE2NGwGaWw3HuAEEC5YFaqrNN65Gy5YuvEQdMLuQuAuuMq7ZY6cJVKSBzYHW",
  "key26": "58Uo4KGSjQEQGbiCSA38ukefx9H6BCnsxRFQBkzR6eAZ5fjHR6fCxNbJKbuYWQECQGsf7JJsim4pUVFmWGwU7Ey3",
  "key27": "icy6GTsLE8rdS6fUBeF4515WHpUt3NnudovN65y9MKm5t2RQKeqNFgA8Tvv3QNMmt93eHicFJjPVjYku2YUi2nm",
  "key28": "5LHHjJ4v3SuzbDMNSjTEyPSFq8w6AxnHQurfXYdc19VijWcHMiqXytxMMJQRXhkCUUPf47ik9hNm7QjerKBT9QPQ",
  "key29": "5YNHLyxezeN8dKvTeHVUVfv4aS1Pg2gBZ5xmBaSKsQq7ehHZv8xAWsSjHjri2bx6pQYnJTUm1XjHWNisa1oBuT5Z",
  "key30": "Xf79ahj3npFDhNdeZCmkaP5Ti8qMivsmAahMME4erGAmMPvfVPqLg1Kb4fMeK3dmrigZrTEQuxv7YXiePT7ksFv",
  "key31": "5ogjsG98HGSC4vhQrWpJPsF1kHfDreh7muGd2Lk6WvK2rtD7QaHczdLQrPhNrFPo2L2NYnVkeXUGfAnsdtASFEPS",
  "key32": "5FBEDdHcMDrUW4pL8qA9vFVnvBN83VfEL3xMiBhpBQEqK8FpVSVhnFJBUcHR4mjuXPwmMsYLN6vKLzGvKeGKMYiz",
  "key33": "5jwwgGBLyPAfPSgPLyJfEaxLjXdQFeiUhaxja93VAFsnWbPmJienZt73TVMqTAZpuQ1jffY7qXpqjAznueDATtZc",
  "key34": "4x9gGncWacCwxJYvjaveYKJWxBpGeBR38C82v1NdxXbwaKh6LRqEYWuenh8YfJnaY2twfavojnmeyvQTfER1VVQY",
  "key35": "5GtTzuGjzZZ8RB4nQe1CPcw1fAghqgPQYxeCRHWCXKayrbZWeYyiZJjcan25CbgDHuXy2DXQkHPkCF93S58fqbhF",
  "key36": "4wc5VsHrGskyemxp8RhmjTigYKaqCwGniUqWBv7e4FJhRFXyQ3ee1Gi8iiXef4T26XVUeeMMPTYwhMzdwbTLqRhQ",
  "key37": "4cYVayMxQF4iW5rnxLuApdqhDeHxbEKaiH7R4HoYs4YhhnwaW35vMHQPgipWAZWHu4DfaXVUdY11SNcgjspmRPwD",
  "key38": "TUoUrVXVn7gXx2aysJGe9Rycfg6jEqoLChJ6uQT6fjULpUU3CxzgZbd1BHdEUXbwUvjBxZNg5HBHkBxDkPUL9Vw",
  "key39": "5cTAYagPiMnuo5PvHtrRYBzaLU5FVVYw9rGe27QM8uGLfMdX7o2wxo6jxjqdRFUpKLPLAfjGY4mVSgqkauJrXptf",
  "key40": "5pM9dPYMRyxHWx6cVsrYyEcYuJtrWx4vTmgJSUZJEJimw5ZtDTguAzj6unyimf8vbg2CE4MHPHP9guHwF3uNG4rH",
  "key41": "6476WxrfgrkKFfmfEAHgmueeWW9t9okJjoSCuzBwpPtTnaZCzBzPh9dHnBjGYsEsSCw4Q42YSwoSRKuYh1ns4XVc",
  "key42": "5A91RTd7VpSfXDoCZU7Ev2biWmjeWDYngSt82ZkvrEjDurU5Nivp8AvwnQnWWp5PkwBYZHRuoP7dbGWpjA6eAJsR",
  "key43": "3aEukir1KDpcnoTpS72SC5sZZNLq33bogZUgdhogA4atvXw8c6pLS1XwyJdiTb4Xfi6UucgRoDyBh2BNkPpMmQqJ",
  "key44": "nhCYKwEA5QgzENb7NNZDh2j8xP4EtgbozsrW1CPqvRhNga4FrY7WGyKKDSrKroR8jbneBMbvi6WAqKejNSu6Gnt",
  "key45": "3JLP5RRNPb69soCC6TaUMa59uWMRJgFtFJykbP3UHC1dhj7ZaAXnfsdgN23brz82yF954kHjGvH1189RFUFxRhjN",
  "key46": "iDQAZHorjoM3ZXmD99pkrDae5W4BiQWG5KBvkb4etUSYAp3Rv7UYDEgcQC4y1sqzh2o5j6ECgtga3jke5MYJzds",
  "key47": "64x1GKXXebWKLx3p1Y1Ya86jSumXegfJPgFNsX4xurUZwgiimoWqiEZtDG6ccu1cuPgDGu5LqAcFzcVA8z8fC99T",
  "key48": "28CqAJTbUu8VGt7McZV8BPvvxyGfbtFuyD2HLeQxfTVFoqqS83xzbrR75nqDjnLmQedbxscRLg7aQ6eamsZR8XNA"
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
