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
    "4QvLE4cYSWtjimKWcLn5CZXmqmQrKtX4WWDmhah79b34j3S2mUEMwMynxf1fGhqhXRdaKkXbjHNiLwdPzJ2skaws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DgVSEJpiaomtZ6FvRXhCGZxUkc7LRSk85rXx8oUmbpTuXyAm3cb5aGb9ZehVbh72cMH67FzahCdy31moMp35v31",
  "key1": "5kX4tb9AkDWfAvuix1wHMF7ALFuAjyMJNcLMF3rehYQ6hy9VRG2HgCCZn16EKYbVbZu5uYfdtQx19vcSCaTPvqAo",
  "key2": "4up7C9C6YHLPtMSzYNWdfrdqnCBnDsiu5xQ5Bqtkq47RMwhUH42SL7nstYfTPf6oQ4vGSbqJ3W3mwhvPkkzyhLT3",
  "key3": "44NcDrbj2BuVjy9KdGYD97WMd7t35sPgZM1aGezwocMhxvLRvMgoEbKwR9PuvrvSLfRaCD6YKhRQgTXgprwjf5bM",
  "key4": "y2qsfivLvo2Z1o1hvQKPUo55cSWLYaTQ9RNFz9ohN1uV2tbfomTC1pTqDqnqA9W1NP2HD941t8idFJB2p8G5e7t",
  "key5": "516zx1NKGpx8Gh3KZxLPVSHLifh7YSXM85aTQvXr9BiwtfWX8Q8axATa5eGMoFL1GmbZwGa7zphsGeTX1vssHjdK",
  "key6": "A8Y2GbNrswww5kFmKYFNh56j5uZZwfmeKPydhQJehauNVmCt4XsgXyTVpmxXUBaYnVKt9Dmu7XCES7SqbGd9WCa",
  "key7": "2NU8M3hDXTi8v5eRYSyQVJvhd7sb7L96NR1BPnTDKQPVX2fm35BbAMKBpLHtKWnKYcsAasHY9EiU4NWGoXrtRSBb",
  "key8": "4Tuhg1cvZqEtA1RHjMBi2LtV1PrsioZcLU5Dpq9yt6v5bUof13qQEQCoyuex3kLEQWk3SX3roX89b4VQ2NiWNirm",
  "key9": "4k3MY31yPiqsQchEKzMeVkD2wipxLHnSaz2QhpxhDJSa9TteTRuByBQzbPXCu3GaYZj19BEjvT9fMUNbEzV6HTF2",
  "key10": "4ZiAusBzzZt3pwi97P3bmaebUeyJymcvxaYT4UDe5FtLDsodxdLmFEJxww4SknEark9v1tpkBdSGjq7z3ZuJFCWx",
  "key11": "5hd4ymPSyCufX3JTzsvdz6btauLbcrWcq9YeXLiACSeho9fiW5useuYSNUsz4SKEXMbdsmx4JjEV6cm1dT2mDAER",
  "key12": "4Ksm18wqJWPnnAVtCWp5k66B9KPD8pPcWx5dkdi537X6yo7SVLcS7uYLX4Zdg3MCm4SjS8EWmc9PeCRhZNVChmm4",
  "key13": "4gaBRPJhJ4Vga9w6kU8yPdmwN5Lszq8ojoaEdaGboJWxie44D86EjpUJhaKNAuHsSVucnBM4LNZmaXzDcrhksLSj",
  "key14": "3fYeMU9dA7yEqNFd3vDBUe6Juovkqjw1taFYXmNBcqLT5i5Fte5aJTTWKGYEzXcN6tEc2ih3x82KYsTTwH9hvctX",
  "key15": "GB7z2FCa8RUN8hZvQbe2JbqriZ2TB7tf84d2VKG2LvFtXRqhznSri1vnQULdTtUyVR2LnKxUnKhc37nn4RYLYep",
  "key16": "2BAinRcfS5vBPJJWL6Adfxu3r7JnhNna1ruF4mMphfYeea4FDGq4kwKydu3UKFYEAp8YoFtxghEfGpbUZ57vxKkJ",
  "key17": "2ZEHhq7WZZF6wSwfd851FKqvUedxmsARgxvCdwYYJSajmAnx1eLWXp4W6dadoEKdzyENYqiiS4LZGDEW4kF2gvUG",
  "key18": "2DMggjWSL4MmYbnQZ9Vnw5gqKsb3tMqAxfGuxPazowUpmTU4P5jeRYhb74kpEHksbZYCT1hZy4eV1WSHATBvqakF",
  "key19": "A5Cq1dNqrZnrtu4uZBMzVxNBuYg1wzvHG2VQX3mNW9yFKh3qEJGC7nKr4vNZGVrhQn5J42uwoyyX2vJSAJuCcXD",
  "key20": "3RvVVB6BAcaxe7At4GxbZrLgbk4Gsf5LtmpPuLJ6zKfS4vzzK6KH7826ZVnQfY219HuKF43bz2rfuQuADcQzXDcE",
  "key21": "x7sajBdDLKHNTdfkse2dhDFHWo8jTdUwfQHhhya5PZVfgymHZLoC2K4jA8EpVWgmwMjjxTeZzuq4HT4UYsVmRjH",
  "key22": "43yT2yEM1nBrwf58nbgxFMbW8B4AfZMGgcSdMi2MsGeJ3L5WbiZnmu5YGLBFeyEbXpzyD86GFnXkxFPzXuBHSLyH",
  "key23": "2Vfyycd3YJTNebnVR3qJTdheiJzb6hGsyTSp5AKV4oCspwZvFFxMzeuT6HpbKKdvVkYVLTrH2daf3ihctjHTD2VL",
  "key24": "2Cf69jxhyviuyKnQCLNr9rUeXZLFjHyrcXbkX11rJUAtCttSy4tPd1m1gHFmtQLy7JHx27pKWybogEyCSLogPkRU",
  "key25": "2apWYn8cxjoHbSGGyqiCyhdk1bTjpMyYKTVX1NPj2MxPgtRBGtHC9LXEWHoT4K4S5Db3uEdSoAa9FAkCLmZtme39",
  "key26": "59Zggyok7D2qZ6fBbh4CfM2VgYaVzmUt5WhKk7YVZsi2hS3YKszvk7UJpG5cYCNAmWjtZMcoqpEXNzAAYK3viBxq",
  "key27": "3rzzghuTtoEBPGHEFGQeqSX4fXg36Cuq3Fk9dKmhUDAhEp5iLsnn6XnJUs9KKwbqAQs2fvZeCsfp2RSnyUAK8p1z",
  "key28": "4UikBg3pvLbxfAyKuuhFv24YM2ibvhvAaKt95dVN4KqG9yYpAfGvxx3skq3afTu8M9ZiEXbkuTJCwmRQFPP98kco",
  "key29": "4jSXQXR8FqtdZ9uehnjcGUs4N9rsh7xEMonxr8CpVo23ZKGSX1mXVxR2MRBY2sebGfcz8mak8LhdodntWTheh35R",
  "key30": "5b1crzhUJJ2nH3ihCzxsBgfZ9xEy8rutr46ZxNxgmjgj43sxiQRkMo3t6c7EovZcisrixG16Lo3yncA1rBKjfwhJ",
  "key31": "3epYt5Va1KUAoo9kEp273Ew4w6s1XkuenVb5QAgewesaRTvT93dX8PHpQv25y8jfDobteNkVZ8125v8yKSi7oMXK",
  "key32": "7xq9RJTQQjGxQAztduuQS93hZpsNCtrEEtXJrZpLuD8Z8D9EWb7n7MRPBzB72DhP8zrxTjQhUaaXFvmiYuFeAEk"
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
