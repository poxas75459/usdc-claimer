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
    "3VZMmriANPV3ShsSG8iqWQoWU5uLvpfAmLSGkKm3bJ6iWqgKXeE1DopwPcGDpp82JVHNCEUgMN4SG2cm7cTNcwWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvCrHZ3Eog3TsRyxmnX1zeaNqprwRwPg8EevgD1b3en8MDJRagRNmZmzXLhVadimRyqMTVZJcVc4adUwfL7Vnky",
  "key1": "297CU3hoXWzd9cjPJrE1h2p8ZBKSPUJ8Nt4R4MAKwx5PUbPFVbRD52LfZfdm6hv9rZHZxPjEd1RUKwgZ6d9DyJb2",
  "key2": "53yr2GyfDqSazdBR3qEuoFpYRjYHf9FvihF7fnSANMZYYD2QxwX1rrdh9mc9RzjmAEdGHRcfWmTFUKMWivALTiXP",
  "key3": "7UEmBiad3GRiDZt5eGaJjh2tQ1FMVDanXfncTyicVVLZAoi4jK936qHbQSXT2dvhWxemLDLVtt848V4u6Czq67Y",
  "key4": "3UbJDcZ1HB9FfifGAnoizgDDzwN9chHhQxbAPYhfNdMXz6Khz83Xzkwv9bcFYLyPgh8txCJYPc3dTDcCxXfo7ixV",
  "key5": "3MjTSnroFtLdjHhth31pMg1FQtyJ5H65JKgDPbYqbERxgLCxbwGJ7Gk7cgWpeSdtrcs3p3H9pbf6Bbs57wC6oApy",
  "key6": "2SeXTUSHeBDY5GYheZdHZzKxXvzPsN6LsNsovcXFzfZJmmtcWob3HfrHCKCvA9pg59Pe3bj19grvf8eZtDkayX4a",
  "key7": "GPXasW6dgm8Sng2NskMgyyzRWzH9cvZD6J73mLjD8rQZ3wniPC2BiaTa6TdxzmZJsZfFa5vrRBj4mepFZFYK1Ab",
  "key8": "4sxh6jEgfkBaxuhwJkztTPuxexGHhPY8aYBFQomWuBqzatKcUwpaVWv73j5nYVtRJ7mu8FZJWKcru3ynXxazatd9",
  "key9": "3jzntEb8WTEEGqokFJCcn8smvMUTU6wSZjXW4xiqN61Ci2Cf7KHFGRxtsXoHwxEkwY4XTJzEUiZSXqNh3s6UxMvu",
  "key10": "2Ui7JT5ojxfGiSVCrBBitG8JWcw3WBhayqfvBL2b86T6ghz3SyuJMhEesktx62sToZJvLca7fC6HYQ6r3tMfKY7b",
  "key11": "55Unpw3NDFZ8YC3ZDJqSR5m9RotRejwztNgwTwgHQt8h5bMZyMbjenazSDtjCRsY2L4z671ZUkWuo1kbt9JS7uVb",
  "key12": "3s1C6Re51eys75ci7Yax6XR4Rrqh59sfQab6HVy6KhE7eG1Pnsg9xECBUgJnpeSKMHCfb9jr3jTywF9hKzgD5ust",
  "key13": "2zqKYerbkgHa8uwpWxMLoxjLkagenDMBuDLrWQPJi1EYWmLvpfj8Mn8SBEn8xCAqgwsgipDhGpD5XxYm9yGnW7Pd",
  "key14": "3CJqk499BimAf7NEEZ1MavyMkKE8ssGcmkdBrkqkedcpMdJGswKy6i7FGP2wR3KKsiuqc5FcdXsTcL3b4MxY2sDq",
  "key15": "5DtJkq4NVkMR32eib1a4zSrQXLd6rbiBod4jo4LQUx66NX2m2tWEdfcwZCBVMqUXnL3qLz5e9ZQJLCF8FrbES5cc",
  "key16": "4mceqH6PchfZva91vyPQkzu7tf8GgzQDhu8RVv31mC3KmjvqRxEEpgHukamANTEUnyJBK7B8kMt6ZCvjZYq3xGNz",
  "key17": "46xhRq8J7tcTj9qFw3yE8zGi59MACLp985SC2PrQuWjzor8PdW42VcCSJ5m8hkTregZ1dpZYwqCwKuSVAjTnnnNE",
  "key18": "39kXmktUwEueuk4PJxbtC3m4SjFNLxBC6NtiGJapyXekBJHaeRBnoyo7NKWgHsQQ9A6pJsou5RgVkshpmYscajWi",
  "key19": "5wFy7Ckgbch1eBddcBwzwAKaNW7EbWaWPgo6Aiu1VoHaxhkkMvYWAqefxWBCGc7Berqe8ky8juTdx9mopYBLpQbC",
  "key20": "3c6jQuYiiZRguWX3JGcmmdEm9S2MVVBc8nXcxck4ZFoRdWJSE5Rnz23sJf9NdC6fQxphspXqnhMXGzNHMNpRuUGo",
  "key21": "nKzKdKh4oiBeHsbpRCmqjQLYyqGEtvy2nN29HU7edhbcKgPNmxuLpPAHqe3QGaSPyGXN7P49zacfo1J9aJLuC1K",
  "key22": "4UQCXnVsGTds97CxDiAsNLjYdyVu69bDwBLEFT9uB86VVY4kcjCwvjxotckmfh2J2mcfyhREenNg7JLDzqw15UpF",
  "key23": "2PPH86CnG4G8Xqb3ugTEA3VtybBvps6ZYXEVoMq7UGZYNGJFUitHHUZVyw5rAmz7NWmUSV8ZUyRSqLeEzapPdHM1",
  "key24": "5Fdod6zRnDr93SS15wRLFfqqycnxkaddk1F3XdNRFq84QsK2pzLNd3re9dC9MecNmVvpiwTpQQ867uBKgjwRux1T",
  "key25": "559YPi1mqwoZHGayMbwqMx2AA6nBS2z5rejpLHNeXRBJwPBe7sUKegd8VHd1korPtUZRuorkrWeF2QneUkwMJzzo",
  "key26": "64r2oN3ExwZVfvGZ8ZZG2ya6AqZiq5kAwhe82Y54LTmK1XvbCaSh3KD42viDuzEG16fLtCUwKLMMXs7W2QSrSPZR",
  "key27": "5QJERGeyCXKVJrSfNPvYQQstfLTporkEJAUAaqfpwEfaUg1GUbPVwmpKrR8dwffoZUgysg3GH3xqMTECq1opUhYG",
  "key28": "Youz319KwcLqLiDhqRdZKCPtexkGBwyGVYS2bmZFqMkrPcvKEUh9oE15hRsoyhun4wRihffe7KiCjGuM25XQAV5",
  "key29": "5GgX8mMt6hrPPqodpXeN5g8MNiERmErJ3YRRRKhdw7aMumS6sB4WMtrGL2wnQ3YVpZ5CyG33mnBGbVBTWd51Ss49",
  "key30": "5HFAUP9knEqDi4ZqTL8W13pxqYa1gxQ7U6PyeH6iVv13AUnzRYZUxH2bJHuCjZxQ5r2VjDZ8KAxZcoQRAVWRBvDu",
  "key31": "55dxiV9PgTz2E4d1p94wq6ayPjRs3ADX5X1dkripFyQ6azNmyUCVeKynXP21xNEK2bSdGXz1Z8ezrH57AMnwVL9G"
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
