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
    "3oTijNTUa674Y23SoNtiuHRtFaUrFq9X4JSdAGwnEZAPYqqCpszBACLv3nSfJdWyJDKoKibFqMNs1kXV8pRcYeNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCsMQnAQxkpyzdFcjVL2J4fykNBmhm9BiYRiEBLurdZsxcijsftQ7iKhJtey2Awq9C1XKvJZwTBaaiuwU2FmA9y",
  "key1": "3er6tPuTWfttiNNRKabsNr3rEJSzHmCMUn8LXnzvSDQLf5vrWbLcWmUBZLBHJJzHBWSGQ1H5DBpj7j426RKFuGHc",
  "key2": "5CR9VF6HiGAKsJRP1pcCGd9quTRP8h6XihK6JDsLThn1U6s71bZm66njgtptPAqgMAXowkyD2ChMYenV8WXsFoeh",
  "key3": "33SDar4cw5xzCN6K7GNSqzaxD9fsPbroSfuFeuRyLaDqRDEpnB4aUBpN9GHGtdABBktUn7q4tWw5PZbrGVEGB5VG",
  "key4": "4Uc1ay8dLFj2uX6yCXVZLKRmaXpthPgyKXpv5WLv9Q1kxnfRJwQuQwQhVvGZ4hFH1Rr2JMPXmJAKL76NzUfkjPhP",
  "key5": "5aqMy58En3mAcu7TeyWzmDpX1MtYEARKF8AbxW8PDLoF9mMkbXYBkVDaNnee4XuM6xKNo46CnHzs5ZPGET3m5JDP",
  "key6": "4C1di8DGpuXL3uN4RVakrZRD9JNcXAVP4Y813myvemYbRF2AX1x1rA9qAB73beodMrWGfL7dAh2XZmDZWUsJCGER",
  "key7": "3T8iqVSNasYUivzPPvJryosoZov1urHyghJGWDKT7pFkJmHLuVscxefU6azHJ7mJJgXvc5FfLsaVktpT4m4beFwV",
  "key8": "4uCMgofkqZAkXe1Nm3oKwd2hoiJjUjRpPtiiG5wtksySya8MqF5HXyurc3kktwKFdYMqDPnPC9FeRrEiTig93AzL",
  "key9": "4u7x9BQMW5fS49nLm985ZkQtksZna7fmwhJuVHP3aYhbto9AQ5H6pqzjP9XVLsVG3t12Q5rZLJ4zcpFJv7pK8EZz",
  "key10": "5LW727d1dgW34V8YFytq92rf92XgUmx7bc5C95SzK4x4UVakHNUQKjRoJZGBnhty5b9tvUDsgcGk9kTBVuR5no5H",
  "key11": "55DU9XBGDk5ojF7PpQR3jQLAdgFH92WKUwqv2jzf5wTkmWfB7xPhx4bcHi8sxyNTP8BPt89a5WpGiz7Y7bvvT4V4",
  "key12": "4CVAzwtneqZ6ja2uomgvMsKwDvhE8eU9MKmgVnbWgd15GcFcTQppLTGwg5AwN3ZESE1RSNgd3JMvXvHvcwL4iaBw",
  "key13": "MokX4VU9JawTs8Ye1nT1dpPFf4vr38ANw1HZ9sBKwTjVcqxn4xSq6ZNnAE5A3kFvekpRxwVLEYf6jEaikNAr7Bv",
  "key14": "3atMpbXZA12ZRhJc3borZpSYnDUY8GmcBMxFSptA4eEeyufsKp1qVPCkQ2V5rRv7hxZ64saxGrUshtne5cYEwS9N",
  "key15": "3wHZ5n3xx7HnuFsFuuSHFNySVUqner5oBE1L7K1Qq7P6iZwmwoWmFkhnTPCUEz9Kr5UFCuyRqmRauTyVm2ffhMJD",
  "key16": "2BKkLNLnzKNtcm99ptCL5dGjEDn1aDZ3VhkeqHPeZHN2MuBABnywnjc8GM37QEjuhUc9iZxLV8mekLV1uWMeVWDj",
  "key17": "5RfS3gfNhtma9SNn8VFTs11zmNQAA8xNr8T8mRj4xnkYNz9eWZfJWmR5X11DmKPNH5LDRM2EBRdEbqf2hTadmmiS",
  "key18": "2bzEe4q1gYYBiLQt5dYW9rHKZ1FnDeo2XE1LifCZboqkgxCkLSe4rtuUbb4gFRRBtZMuzGnpC9sVVBFj43HBWvWe",
  "key19": "6uCmPD74HDmVrDbSmuw6sN5KvmQwbKUd3qJH7rDExbX8Q3vw4wn7opNkTHWtoL9c5QuQe2UQL451NPj8bf99HzL",
  "key20": "4y9nSmv6LASrN2GkttZT6opLWkmf8wSCFSfvkmiTbeAZEy8Zvz7vQxMKHvievFg3kkJdREccBb3cQi2rUWQqZqCk",
  "key21": "5gqnUgzmiDAFGHxKFCDu45tGkaknScG3SkTTdqMbckSDm43Wca4uxNAcXCsboNNwAXFmCUtB5JYaMB1XEks6GvR9",
  "key22": "2zsujywajeEc4NA6tf34ErraF38MXFMmjFEAFuyJaQ24NNNkrgnwteXaReHhNJyB2s1xpjNT6L3rWKbTdEx1p3kj",
  "key23": "2JMgL1itxS4L95r2SMyLYJstUwE4WZYQStLUTk8bhuo9uUTXyDZaF2tt3GegRUSr5manWFaDyfqcKCeBwms36Sq4",
  "key24": "22Kv6YnsLHuDwuQLKu2foH74n2mqFQEw973vQHN5KpwvHZzhdh5aYfER3neuMsCHwVXzz3dqdGWwGqQYC9m8SPU1",
  "key25": "2arhC1ijVWzPUTDHYyNeDkmR5xXzN3yo7E7AjSPcRFLc6pzdjtdFic5vx6w2Xq2CP5473FnjtcHQzoMFrq9SsbTa",
  "key26": "3bEQaK6VRSu5L88MnnNKFJmdQiMSp7SNZfJgwjAVJxwTM475jSD37WsFoKnDYPapk4DS3cGFbaXu6kUxaPJU3nwG",
  "key27": "3uVdsn75TaSdSAMz8pNJmN4pLXxx2YfhZswdFZCckiikHiYa8mbC6JwGxAYvKdEqLiokuVjmHMne967WzPQuF364",
  "key28": "34kxB4KjPWtZqLznjP2qoW295M1WSBQ7tWpaNoyvbqucRhuhKwS5Gtv2bQeTe9PZnHN24ne1CCcEqycaNFxQSJ31",
  "key29": "62WpdthfJgBXB8CTnjU1Bzk9KNE8ig82vWBu6sLp8eLDseExjPtcnMYVr4iqLByYqzKQ5uBf9HTkXHj4ToP5PZe7",
  "key30": "3Cw97Mw49TJuwGPpbHAnaLMfy9p3TzSYkouPJgRzCyxe7zpBjsXzgEY27kZiCGJUe5jJAaQjZ5NBiDXxxZZEAEoC",
  "key31": "34y3Biq3HDNqYZh8tCYKmf9QcYTcD5XKdtJwNAMCCcYSKr9tbQHdFT2DFrwmLfQks71X682BnrjmmY95VTsJw1rq",
  "key32": "5tMsVhXaJpZS6WSW56tkoYRi1WoevWZnMoJ1pXi12y843fV6X674RpeW9iL5TSMvvHc99coM8KNiA2eWyvvTLyzU",
  "key33": "3PnJRb7S6NhHPYNePvRqjPcJ9p5ZF5V5C84X8U77HYxEn1qodousRifu7mrqxuuD12uoUwRrMJoNSmvDifd5JxQP",
  "key34": "65C5ncYqKuG51e3tqsVRGHPrJUSymfs8x7PP3XS6Rp6AWpwr4M44q342zbhjQLoRx8fET1jRq9dbP7rcbYCwoZFm",
  "key35": "zzWXrxLD8dsX8gXfSp9E7Y3pMRcHV5zTepExtjn7dtALma5bRhE8s8aWU25HiBMZEjECY57hQkH4oyeAdqaUwNp",
  "key36": "2gbutXcsgy3CMjYwox1CVyoNNenRJEsKKQAfiJkeiSNvCriyceaPmewGsUEkdPGr5trcLesoQt2AZvPCbAN4F8HY",
  "key37": "2CGZGDSUVrq2XbhLxos8DYxHmMhCb66XhhUjZhJqK2KEDCzDieqX3CuJSE8AzNoKBY16pq2uv1gGMDByN3n71SHF"
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
