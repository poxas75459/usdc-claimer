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
    "2UZn6byTVQn8WPm3HAAwbLeZgujyCuNfcqovPJtuP4tKYkyccLsoRzpZDb16bwALmLcm3Zc4tDgJPw6wZS72YU7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhy6vJxLTCdkKGNea6psXcqzNG2Gi8WwM5dPZo53QRNAhSKqzqPQwt3AJv5JsgUNN6DPe8um6XGLmBMjRCJxALD",
  "key1": "5P9aogVrCaceWaJtCHEbJDJDjc8afbbvKEEqWJBYanxzSb2GJyCBCwtMiFCyLVSpueB9jw3cHYuHBGUt9y2ZYYPK",
  "key2": "2zHy1TDkCh2Rch7dTSaaMxGFupuhHegMhgcYJ9nPhiweSAiMVASCSGBfTtd7jTzM4gWNQ3veS62G8FF1hED4Cqe9",
  "key3": "27DdWszutcdy9jHCthUUWQZve4CiGFNruG2qJgwceAGFk49uSphJ2oCmxSkdd9HCkJhr7eZyG5ugxDdFog42NkDr",
  "key4": "4LtF8uP4ULheM4YPHDTHWDrRRtnfhNcBkD4SR6JLQ5Lkypk2GxRn5gGXQ9ofqF2eLPg8Z2QqJBeCAN7GuYYAdYBc",
  "key5": "4qRNWbiJz9kFoj6HnXj1xZb1zsZfphZC9CHqSDYgvD87ifhG9fcpNSHHavSm7mgchLHk5Bg1pQLgd2gGJegnesYs",
  "key6": "28N8bmYEAkiU63yWik7kDjiLsqrX72NFgXuYiJeRvfv3BPa6eYrGX85LHAgvxzt1QXDBdkuWD6BSCgmsmHCFMCWs",
  "key7": "49LqJW4kY8Q8E6yTAytGV1Y5ScGzJJMxBgmdqrRjmMHEr2dnCeaFjXD2q8zHEAsDhNsaVkmobNvDu4JvRLh1njqD",
  "key8": "3dkQCTndxiqWB5F9pSvmALydrzg51P3rhWtKJSSh3vxXCnwwqmpQuLu5VxAJzxmFnQGnixjRia9FYyZ5mLEo4Q9Z",
  "key9": "3SV4awiYXD7M2TBRKNqkEN55rwCD7mtX2Z5rxdZ3m6SkMp5t1WU5TC5r4HjdKeSA1DoAKLWwicRGpWYCeC2w7bSq",
  "key10": "4whTWxnQcEfHJ5RLqtmBBYVc2oc7hu36MWL4nXgtRTcbtwQ2eVgyrgk8AJaPQAwtryjUuwQK8MMbYXUXSJHmKspK",
  "key11": "3cUpDueiw3r9yfst2JK66cxgnRdAhk74oqb5VaLtNWSB5Ar86wL4bVuj7f3cAWUhDPDcdbPGoypnJXXwA2CBEDoW",
  "key12": "3HNpqMa9uoFq9dxa4zeg2cMVtgc9NLiqTC7pV9aXZms2qUUuMKdrhTGBXZGj44s7TgX3jbk8urdHgBmyBRu66dUB",
  "key13": "2FGrAvV1L44TgcTBVdEWsC6w6wa1HMWxgbHRMam79wYiYGTNNEXSWLZ9XjM5sLWU5up6CrQ93f4C6BLvddv86YYr",
  "key14": "41Ft8kXQ3vu5fmEw8r4sr8AuU6hn5BSpY4DwRUxeh9tmYzNbfzUk1abDDsvYdE5ntkhkYSxJmPJMNBPd3BJK53R4",
  "key15": "5zg11rwPVYM198cCm9Xs1Mut894nXQHDy8bUzFL9T2ZfVbowas8rsg45HqAte6tqHKfA5VwMQ8cnSt6n8gAKLh9k",
  "key16": "3GV51Kp4QFqDjtyT4yLTDBTMgRrW7xDbWcem9z8KjNoFJSddTCqhZCWBhXV5q79ccGXAJajGJHUmiK2BLKkYX5vr",
  "key17": "3a798bbDAthnN2PMv7de2HVZBdtUrFAGgzFNskw7qSKh3W4ZDThD2qZCAzZcrJ1w2sQmLym86ENDfwsoWoQxgddf",
  "key18": "62dFk1eaiVKL13b76EkwZUcV1EmPybgJoGJo1Fm1X8Cdf2csBU6q7fkty4jgerfAqFpKJBMjaeR7rhwKZtUN5LMP",
  "key19": "4WaCE7BoxeXG5sUA9Jp1F9FSK3J694gWpoUsLNe2HPVTwTSUijWoEPnnj8nU63h6QUqmpdHY5fvyY1FMJvbh4XJ",
  "key20": "nwKZ6Sq9QK9GGvWDEZqLawBx4uopXav9TYkBkCKTNAxinZbVxkjVnyDtz6Vn969rXhnjGrptU28GQVEwEKQfHhJ",
  "key21": "24TuQeZsPeceQTpA9ZDA9dPGAyUToB68vPRMqmbKeB7wjkipz4QEfozC6jJV4MmLA8HxW62jVdzdXfLXKwyyiJcy",
  "key22": "2CGPCfk2W35Yi9JTQJsWZfozFksvoHWB9VyHPrVHNuBgRgUYdjkPzu7vNJVSe9PzMeMcv4F8vK43CA86tMmWZeJj",
  "key23": "55fSRyUrnDGjTmoViLFWenry5ZqJvYuFggBQLkYkvWnWnBQQ9FWZ8Qh5Uz3tCf77iSBjYxZC49Y2eq4GMkXB2ftX",
  "key24": "5nAZxBZhnmLJ3e26d6QNdN6agvebjTZpSfNScsPs4HwbFZQtbcPY1frmn6XMefs91LKMVoHLGum1Ys2GVF98jRm2",
  "key25": "3NfPCE7VfD7xtaABfWGsoMzgNY3pjiJWPCTA1FggkW2RtxbmpUVrjRdp3XvZQiiD4Xssh5tW1hE3dEArLq7DYAGJ",
  "key26": "4aSQovo5iJ9rAzfiXfwStL6mWgB26Ls8jHuM9DCYi6AaD9rbiwfbkdQaVyNEpmjyPJKa5g93HyGSp3zcVsWxwmS4",
  "key27": "4hy4qwtoZGPoeJGqm7BcvxhZrgwC4XcCtQHpEj5WeMqGTG3P5vRS2fnYrgLDjf9GCNvcQvjJGz6L8DLgGEay4qkc",
  "key28": "p9acCxAYiwBcUEeH3XHmG7KVrXtRcQr6KMmUuYM65fpx9vWCqd4CttCyF17nzYGwVZGrQnYmpdPNQF9yrnDCmT6",
  "key29": "5q7yCSqd61kjqFYBNeXimqmGDbk68GpdU7Lq328iBSt14UeULmQfGuFjmF9NgXAKFDQVK5oUDfctz6CUjdSgxkBh",
  "key30": "5auKw3zm96BQ4oizEemozPGEE79xwVQnQZZJmFtSeqDcxu1VLrzScrX8wbLHE6sizCTkq9jfotm6YYx9FhLkwaZC",
  "key31": "3MLVptYxSMnj1GWD8UmxuN2y1JC4zagzB8HttetSS6n8Ybp8i9GSWQGywzAVRAyej9Ud7YHugjrQoHUsDLEJiiCQ",
  "key32": "3sNYx2s7Ri4AjAVwRtC6CMBgbPpC9DnjVS2npChfj11MRooLsarvPGQJQbBnBVCbzDMN9Fb2TXWzXLmNvHzCPBer",
  "key33": "4Cd5JML5fJecmwALaD6wxuzNL8cRmQ4Xkj6wfgMwErYW5ghg43C1LuAr8pn86LewWa2UBe7JhabMkD4nhMuKdown",
  "key34": "3wT6Z7E1nMxDrny4d5GvgnhDPYzJzp5kkMJeyGKora9VNjddyN5autGruyr9URuGfMyqJMAN1PryhQDmcy84fx7g",
  "key35": "48bgzbMri5sQfJqeBiSGTcjA4CMhp391R6H9ArTEKTnrnmBHZ29cnSTtu5EeMd6mUVzizwSmxdjH9xzJ4xZBbCAu",
  "key36": "5Z1xsXrbfWjgrwvgdQK1SfTY3M3uv1Nf8zH27ANdvJhVWL3qgw621W4bJagVoiYtQHbnNYpf8KZabcqLGA9GQZ2Z",
  "key37": "snPtjAMCZPnHfnvZcjwyk7fgwY8ysSwaPMMqcL8XDVvWoEu8d7xCM2fNxCoUJAY7McfgmdaYoHkcAy9S2heeoJC",
  "key38": "5jhDx7RiancmseFQPtcveM7YP2FxkwgmrBjjFDkTAC2yN8TdN6xiJLUZ4xgdo4EUSXTryZQxEDh29dQQmb9mn2qe",
  "key39": "NGqdtytv1RxqiN7pgyhymrLpzuai6jD1qRpN7cUSGek3L7bZ6Vc2eyPN2Y26kgYLfTjUzXLcNSUBRy1Ti9fqP9Q",
  "key40": "4decuJPCwGsPoj3fs59hotPZoZFemrz5yvpRrEQfSJf7Ru2Ni5XN2E3tCvtWtReSAvKMd1BWMu1fCK8Zq4REqhtN",
  "key41": "3xwwgwCrE88zbmFcN2jz4UTw3mQpGwbMdQG3ZdaFEdHg7UoAoKpGQE538tpaTSEnnbwegDMWmv6ZGfvTkeRR8A22",
  "key42": "2aYbxA6wwtZPKwEMEvYrhLESUngoCht4kRwTguNM8N4sbF54sKVrQ1FpCfbYwghjBchUihfwAyakbfpMjQiiYXzv",
  "key43": "5PzzSBgFZnvciX3e8ijhnggCFHtkQVA97C8LLCrp8ezZbVr7e7hXi9Uyvsmf9AP2oCeHTbABDGxxFWuGWJ57irhQ"
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
