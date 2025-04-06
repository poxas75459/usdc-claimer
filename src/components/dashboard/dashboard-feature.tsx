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
    "5WxDqG1YzGJaPn6jYixyjpsmKW3DkcnjYPych5bkwTSHRbaqbSptVSn7M4KmnR9esefUJCytczA1Yth8CWmEEaVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKW31cKFVDxRSY3mvRmATuuZhb7skNCKZiyKKBSEzTovQupGEbmKUzpATL6Fbj1Yrnuy9fD8BajcbZp7pwkh7DE",
  "key1": "3A2qseoyANCfgrtUZFMFhFUzikCMLz322iUV5HWVSWAvjMeELdwcLU5WrkZn8mYCqsob3bkXdGek1BekqWoE8eMh",
  "key2": "XxPvEYAEw2qJ5ZFibnzvJ5T7NBFLQE8x9rosudZH1NMV5Pfygq4Sb7jJbu1ELhArC8y2iJWi1CT3Pimjekyhnn8",
  "key3": "43aPTV8p9R2joxXqnfCQvdxPxqGWmCgDQxtC9rLyKaYvVTvbAd113Bonad7XSBK5LbSfCzK6GoEg5HnUwsmBTETb",
  "key4": "63ycyqfuyX1JwyxPWzwkQ2ks6foCHNLayc6ri2JowY8yapfN69ySKdzD6Q4NRbWeiRZVr4ZZ3uiaQ9aoaPYb4mHT",
  "key5": "4AgHVvn7N7zEZvpysA9DhA9XAhP6uA592VsjoQjtJrkB3UnFRrLrcSMk8MHpqUrv7zBAbdvTDRKegZdx93hRvjpz",
  "key6": "Ed4XdQJNFretonaPT38ocT67RQ9DpsDbMHijYYbtjSmspGyvLYLeh7oMxUqJa9BMTqH8f2c279f5FqS6hMMBruF",
  "key7": "3mHkrUfrCEpV91RiZvXg6i2QmK9RWKJgn7VEMmE3FiBepmFp1SVvjJosqkEodWAt4e55ejsK3B5D2mgD5ufSNPiM",
  "key8": "4XiNvPEHu2vjzVwpGWKcR99aBsU5aoP91HcYq3TkNtS54EQxqx1yHmnwkyyLvChxZE9Ne7HzzqzDbGFpovuN2yXw",
  "key9": "2P2wpog2WG2YtZVm2MtNf1vF4skKf2YDGx2xMCwgzcDafGf7FqDNaSRk6fv3DjtF95JJ57td4nznu6JamGnAfmZs",
  "key10": "2xz8P5cFDjREYjqPQXFcMQKgPa25NSjZ6wJk4YMsdppxUfZaLck35nFWAUVDXGuvUBaDnFfN4oiy1r2ZAdjLuN9v",
  "key11": "QtnYgH3i8CnbYnLmsXXMsXURJTHDv6hji7YRjy23s35sKhem3fLi8dDkuXdrE4Raquv2nkwbXS9hNx9QRUDUC2o",
  "key12": "2jCV2bNYXcbsX3PeFNu11UxBSe5MarZbV6SKvsdrNEMxP8x8WeHNyHr3eES343wFpGQ4DfE1o8mYysgYKV3xNzwd",
  "key13": "4icziaaMo8Lzrta9kiK5Wquq88WbA22kMV6ik9auxBnddoVuyvFYB29Ur6QchFDuzTUNaJPaRQKFV8j9MwHYXsjG",
  "key14": "3UFFBafNx3XWFmqtxzSz2FTfh7iK8EbT3ytAw78XaX7N99ncFwjfqEy5cgUWYN2DPk3WKX2XXJwaUvGhr3x1FUbE",
  "key15": "3PZqynYkVyBkacp5zR4YDih5T9z92TzhBR7sGAHvVVPHp2HFthhUs8nEyJxGyE7B22JU7DyNifcVchu21yZ6GoN7",
  "key16": "2vEeqanSKH3yhgrNeyAqn8oB8b84Ena4BwUcpGgQSxXvbYzVvKbWqdbtgXrMwS2jTt8AJaUH67zkDRRZn9cZvphy",
  "key17": "KXBX7ZXvQJpe1HbykcqxERa7xqjh8CSNRru38LCmMQZtnzgTwzDAXt5Jw5J84LN1uXmBgBR474o6NCp41rK3bX3",
  "key18": "3kmHjsvJjthnUJ5rdUELaXKo88sSvE28zwmnhDiWyesTNx6wahk5MaNHpAh59sHM6VBW9nbFuMEiHPYnzuNziKTn",
  "key19": "2hmtA78tYty7CyGXao3MTK2MxhQtt12vnmi4WYEtvKaRMq24K5whNskpBugiVam8sf1HXKjAVhsnSFC2TM5yBXom",
  "key20": "4viYmr94Mxct4MxuvKe5oXEHD9hWjfafobng1imQmzDjMMcJJNyjBd5LPaUXQnf5v6yTQ9R2vWXgFUeQQrVijdqC",
  "key21": "5K7D9KqasqwViFdEgyifKD3ZCLGknaNsFk4eVFkHYJAN6vjE9KrL9cU5kRXyGAWeEmBvcNDByMgNrVF3fNJMsEaw",
  "key22": "3WF8uNvLSu7G7AvgRAuz6dTofu8kVWgJ5nQbnJzryRXg1PXzS77gWDYFBfvSirRSqj6pmiMkZwgG363ZHhiho2oe",
  "key23": "45LMfxvMDn1TufCu4sp2ukQtuB3DLePUAFW2jNUTjCgAyBDZZsstzq6hdLo8LTRMYPk8pYE4tvGVbHeXK6ab9ajf",
  "key24": "o1bds7qWY5EUvkwDRy1jXLwiLiMRv5rZc9KkBezYXjwBV7d88wQVrMPckH6Fyc3rq3nHF1rSQNg1J4R2DbwPj2v",
  "key25": "56x3LAXFrxvWY1ogA93vruEktH1ioabJzsDx9eMDbfg879XHwfQ7Y7TsufYYuEU7sdGvujiqvtNPAxX4iCUr1gpL",
  "key26": "36EuZ3eLgyK4Fo6m9LmGnSLuzSSvmC2cCAPhTXLXeQpYUSLwmEfDn6V5RYaLDvQqyrPnJypf8FnN2gEPsqGfG8LS",
  "key27": "4AuVMgyE1UkM2gK9YVTJAdkzBS7X9bUPQuQvhf68nSHhmyoGtubQnE2ovYAptjpPnAF7Xx5d74xu2B8qQwYENYGg",
  "key28": "va82aZyqQaeiefCJPL2CecQC3Krg9KiTnM4Dk13by4oMGafB8GqdgKPLNRfpTKknhsSmm8avpjFYqgbLG4J1wMo",
  "key29": "45WNvBP94dUVBSja5nykivgRJy2aAnpoYPbwtD5kLQFeRLWWddodTJu1VZTmjeWXvzkvg3MK6Sphi7m1W3Pbn19Y",
  "key30": "hoc2w1AcV5bA3pkQBZ4sSED8Ly5vgmrgjpBtQtREQLt538EVFLLoWxiEPYRKgEq82iAMbs2zietJ9mSmFiFtDau",
  "key31": "43xULeEoiaBh7ixoAHVZUZEV77J6QPESRyTwE4HDG5ivegCaE5fc8ZM1VaKRQmDpdcW2PhoDnCrNxZvYKBLws7yG",
  "key32": "394exCT6YQXn9Wn591t8xA7Q82TFRhFdTdn58x9XEtYneVbJmgNTx7hRsytU6myvCQVuFvLybeKj6uw51bZS2E5C",
  "key33": "4ugkvDUvmzJPKM6gi9hXX9SGXpSad1tJbcRPsYVot4qbPeLd3rKHS8bVSydoeem6p1Yh3Kj6v6dXUMxZxZUM2gUo",
  "key34": "3mzbXGmr8Ugn9q3jL2zaS6eGDwzitVgvZtC5xcqwMJ3UBeuZRFCqDUpUWKYuNfs6NYxMSRkNzNs1wxZhyod7Xo5k",
  "key35": "2T82CBZbKL3kRkznKcdw9JQYie1B7GskPFnKXxWuXjvBbStJg2DbWodXMdKnU8Zz7bnRP1n2SgtYCBLwQuA9XxtM",
  "key36": "4SWvnUDfqrGCBAYvQQ6Z9aUXc9c8nZsA1Xkz1SSdmhmQ9UEVhVGV7tVguNBhe3uEZYsLv4V79XYGscHVzyV4VT16",
  "key37": "3UyaRghe4131cX85gGUnLMSufdrVxbTSScZJ9CWaphbiPy3f1QzkQhG1DVqsgj8wYXDyiX55ctJsxstW9LVLkcFS",
  "key38": "3WmpraahbPWbYidVwFsV3ykhDwBvMDbPBdtmYyiqwoRDYcqLbADzKfYCr8dNE22Dt2ghpYRxPb1A88gpyUUEnjLH",
  "key39": "5NStqtsbxBfD6RnB9P8BvwSE1BaPXkhHQWqK3iDkv22hpq6Ruo69nBc4Z3KYtCM5EYPr4Jjy7JjaQhZkCXCU4m6w",
  "key40": "65gHJ4Htykknoaq9iaZZz7vdQacJseNtWoxD9TZwENB9ngdtpoGrdHwF4sFzz5J1qNzs99herBnwZh25bP6AmVD4",
  "key41": "3rery9kpeZMxoq7jgyiNvJfcVkoSzChn61uGX3153QyacKxTYmXMDdWiKMyV4aUf7KVxgEGkZFzxAo6JGcJK6bAq",
  "key42": "593hcpJv1rN2EAqmvqyQQvf41wJMJ2Fi5CS1qhmYtrrPR7dX3eCJdwB776QHzyhAET1iEQWYciwuQZPd4oyEoxUT",
  "key43": "5EyAKRXxqbv7fajnNtiuTffBmbL1BW8vStPPPTBSYDgRa8c4xc8kMDc3QhdPYRuT9uVVssDypiBdrgXzEf5W1jJU",
  "key44": "5pnWAcmJDFrQjbjGnRTd3NDoiVdNBbRFFwPhXY876AwLMCepSomMuJR6oLdv2zLRaJah5ypCtWiVXgcCfzZT9SZK",
  "key45": "4DtgZ5AkvKqUyLgc2dfmAXq9JDzGBH9TvdCDcg9jnoLiUF3HZ8AH6Q9NdCE94JhNd3zud89d9bV7Ajc1s2BPqi1"
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
