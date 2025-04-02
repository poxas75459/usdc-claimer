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
    "3hyvdSHPE9FXNd5nRD7y3dSRcxZv2XT6R4uDF4fvB3yDK9eqg4DjTxgdsCiFrQeWmpEf7DMcrqtEq77Ao2nkxoNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpzikrS8D1cv5e4utJQtZrkjs2gCbTEGS6KBVxK36b2AdnsR3FbZFuFw36cV3u46tWbCrMWPq6wL4uVcLPmqSus",
  "key1": "2S5edCgScPXuLpirZzXJQ1hTSroiFQWYdqd8kDr9Bvxcv9C43Qmh6Eb5WRNiy53Chv8Wcm6KbtnKavdvVy4ALbWp",
  "key2": "3wsF9hMbA6sjq9FrapUeXXPtRg8i1jR2V7rtRpdjYR8wGJypdam21g23tdwtqpWunqwHHFKRx8pr3Mnknysqv1FE",
  "key3": "3x5AfqBe7Qfaj5RuyVxvnfj5aTkapnMpPknwKggEPb3sN6qRTjS1r91rmEE4s7oEjVoLUwt7jTDByWBFgtpWLKgW",
  "key4": "5tqdLZa1uaz9Lxr9ThsZ3gpzM3cy7QgFQs2Y31HQJ6VPweHuc6iLhi7rnEVCNWutfLXGPYvsqJSLGc1WV1tooSxJ",
  "key5": "4FwcrvVvaVPcDMLcdF8YZffxS44P4RuaCkq5QhKKU4jKLjizUVGYg5amoMbroqvw9ZrGzWecGDzyku5ted4Xvvfj",
  "key6": "4FsDCw9DWhSjNis9PbFr9srBKQdTL5ULpZrDqQXU9LiDAsPWxr5GRy8DCMnwNu6WTQr7WKiwAghWd3AUevEZPzRr",
  "key7": "4ySUoS1b7X5b3QjvNapUUCFDxJ36oxJk7D4WykecYkQQ1FGjVED6FUpg9Q5qmwpDZbfEND9QaoXoi4Y8FvCP4vu9",
  "key8": "3E4PYbtaFetsU1D3try5wRte96BF8UKY54pvjsgAwrYzrjdbofhByhcK4cXvi5Rq54eGYxDEYczzfMhUAKKKgaZ4",
  "key9": "53Z9w1geFnJXjJwHfksN1D3hmXZ3R6qeBrwTxpkG1droaiTVWb1pFHndTPKvaDLBDNLvEzsCVWCcCEsgg1kcV5KM",
  "key10": "uDNChWE2uCXweiY4ZekU8g7X21e4xQ3H567QfwoCj6VjunVKQTZYnxX5knbg98xGtnEErMKor2VPSEsgfVoZmtd",
  "key11": "5MaVmfA8Ho39BhmseQ3jifmWemxNmZubyi63nzwZe2i7gHRtgmgk66jx2H1vTTFnSPdy89yA9nZmWgu23bkhSPKa",
  "key12": "3APjR2a187yAsnhM6dFFyoW28jNVcW2S5pGWS8fyU64Bdqy8JBXq1XoAPizQuZgcBG2DCwNxv3io8s9urk5y2dfj",
  "key13": "55SgHTYtQ5ahXsV3VAdj7C5j9goXMnioauW4QN77yFu4ak6s2th3J1pustjAnbaZsdDiR2d8haqfM7GrZ8iu1MQc",
  "key14": "yJ4URcGqmDcEvWLxmftoFw5BvPAozhqDAK1FQi1xc2s2ohW26Nq8jhfa1SWdYmonWq4kzm61mHRXzboN9PEFLfQ",
  "key15": "3mW1qrU4wCG9DPMDVwsBgAgJJiXcnQhPiYXYKcNJxwHp6YATikPFR5dPDyVvtHttjdR6AkznHizrK4U3FwtE4mf4",
  "key16": "42Vm5witjX2pqYBMgRZpPnauHdxCvE6PUqKoyBWAdALxdBzFfHs7CFLY81pQc2SamHSvvRpErm6ZkEWVFjuGBsRd",
  "key17": "2GuSPTTsRPUE5ggg8yxiBYW1tx6PwRZsQVow9Nz4uqGCZ2Dsn1fqxFZbtrXaD2gyUHyKMuBeJSZoHs5qX2FmXdda",
  "key18": "3UGPM3efFrpX37Lssf3byAzAws46hqA2ajLnmnirT1YiV42iFfbjVEZyvCyJwHaKjRvWy8nzAkM6ii3fQv3F2ABG",
  "key19": "4Mg7TJiVFZtmNdnCdumZ3CrdNwcEqfPX9zeuPVAQPW3j8iKYBYm9PDWBazaZCAdQxfNHSuis3WyjQ8woDpDgGSFA",
  "key20": "AiooHW282iurkw8mZL4UhEJSBdSNMVshBDihx6VV67FVThUTy5L9uq7zWbfrz6Fzs1HXaYhFvRG9ifyK1jU7Kcm",
  "key21": "5zh8m69gqZBz1ftqFhvaTtH9EWyAP3AYMf5L5M287e9rTYdjuGwa2tfVbmgiM1mp5C13aaroNNK3yHN7m6UZ5xP5",
  "key22": "51iZ1Nbc351B3qSEj623WXn9jDG8RHrJcURq9jWfsdbpusj75Vow3SvHMnZ3MVcj89jZk7JEQx6rbav9TiR62Hnk",
  "key23": "zXUYYyHtAHPkLykx9BKtDVuZqk1yEBjvdta4sE5TPvJUu8wonScLYhzao7AUHzjY8VUBmV4S46qsKfbtBo6gtob",
  "key24": "3q8qeG4CuKcVXFviatDJxCBBdRT8eCeSAwgFcGSV8AV5GnXTidxzBHUMXLq5rfLfw4kDjRqg4RYXKxCnSKzaoYSv",
  "key25": "4Jr8ZZDHQ7UJYEEsFEZtDS8g6yWWGNMpy6GXuUMUKPukB7E5gJF7B1mRDQZBvw81sVWugSAZ7DQt7SDZAPjuauQ7",
  "key26": "3HF4YRcMTzVDd4BhVWSkuMMVfwu1beLJPE5x8vLiSsk8pHTn9DdAnBXQWHfekBMgMSRkBfckxNvXqww7YC7PT4od",
  "key27": "4nrMQM1AX29BzcquFePa8kC5UJjbiCKaFv9T2s1XVkgk4sNWew5CWSNeos6QnraEYbbgRCRKetrKDHRsDKUFZxbb",
  "key28": "4qm42ptPN7VjexhPF67M2moZ9GZv6wqfZx4bDuhYbyXVxRRWEA9a8AbHCRB9sL63usTteCEJQp8eRPyhxf9YgYWw",
  "key29": "27tVB4urdfLGA9najfMnThFBGGsnKkdou9x2gn9Ruepmv92AwBatDdCgkht7fDSv7rfXu7nkKA6mo81koPHpmRJ7",
  "key30": "3kCipmStDPjCCsUDLfCTrQJHZovEfNB9RnWZrpvhzm7hmKk7VJ7XKjFSTV8q9WKx3RJjc4Xz6CVQD63gdthgCd3F",
  "key31": "2xYGrdCaGowKgZRB2c3j3uoNPwbu2RsixUx1FEmWLAEWsFHpCvUQ6isp2CBo2xtArYxPYZMb5cJRRuU47dh4YUS1",
  "key32": "2qFi2JK6Gubdjpw1rWtXDtjnQGa5M1p4S6PCFwSrz87cFwp9bDaYhowoiqDy49cwCXTCFKKUbpktcFncZ2A3zXUt",
  "key33": "DbU7GYBvpkv81Dt3pysUnj9FDGvQRaZ9jJwnVKsy2YLuWen8c1KU8C5zhw2SaXu6Dw7mS45ArwnugN5awnnje8n",
  "key34": "5NRiazX7Fn7jFaaTezCyrNBnu9rmdV8krZzzxiCwDCu76fXTdMrohBXDNk4PdAbRhC1LASV1NTUHtwgDZ3Nu5Arb",
  "key35": "51DAVodnku5atugRtm7nk6oZKJJqyKu4EUL15LPKcFqnVhiykJh9jXVt4RRNUm9ogBqXG8Tweje8ZZCrJcNF2uzF",
  "key36": "4cWDxAMGic5CA7wHqkpDmxsSxobUP7P5oVSyZUqssA419gz1qrG9h2fXrc2bEzegYMtC88xmCkTq8ti1sCFP4Pz4",
  "key37": "3zJxF3RdnVQSQDiPHc2WLGZaKy8sDnSxTqXSyF19ZkDv2xvzw4e7JCGyscbc1ZehE4rg45wsNdxCx1UUqJzSHNtm",
  "key38": "ynPvLwVxkne12QP1mQb3zVrxE4VbwXqSPnSwjvKu5wxNTZNkzqAxAgyGZPGu4Cf1fyTFrxEJ4uxwo7HKvKYg8VT"
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
