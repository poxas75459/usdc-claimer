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
    "5GtGVQ5CKCgwsELnJwhSB78ntXdU52Y9QwgeBHE2pfKrjykgjfDHKTe8eVJtGzM1QC6UJQpipqyaSDW4YLdS7KN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRwTTrggjihY4gg5wmA6oF1qrkrZB654REzJEnR4yLQbfHZTpCsqw5kxCVBnopUupdSoiJ4JrMNPbp7Ytb64HLY",
  "key1": "2JZddnZwckqy6p4oU1ZHtH1pbR9hgMssvU5BPx8diYEjeZhmFpctijsh3DZnS34iXBSu6AD9eTaaVfGTbMU7u1zf",
  "key2": "2tzU5LBdvHC4XcY2XSHfDzNqrxWKD77XB42eHmEkK4dheAmvd9nrty7s9zE7j8RpXLyZDda3GZF7GecTPURX9yVJ",
  "key3": "4NDzUSUraH1Lsgrfvt3YuQGw9AcK7U8K6TGsMoq7o6rBisUUR1HqQNami9i1VULkR3MJSSX9LvcyfRMKq492BnGN",
  "key4": "E61aHVDrK8USKe62VhtY946EfQs4BJVwg8RJDGDHiPR9oPYqZnffy1AUKxRGCSH77jkaLqyZjMGQVVTeaUMDhFx",
  "key5": "5MY5XdQ1FR69jxfwF3y5RM3FWyBKxQ4okB7iMg1BMuvTsZM6JiH6iMJUtPEJU6PYjBsfEnc8rqyHYT34uZBKaeJx",
  "key6": "4fHzyxkbV9wjercdgLcRJkA13MwtkjHwd94u3YGyJE5yZZmdVm6uFByXTY7wXyNuqScYwaXMUbPtmL4JcrwTafUq",
  "key7": "3uVybpfiEd4vScyVqHWpbAMs8f5KWeCzCbPaQtNYA26VXjhQkCBJru61z3SqfSo2qNu6B9csqqiT1VvmXBYuo54T",
  "key8": "2wruHN3mb96SrAbu2TEW7jccgbVmjApa2oVwkyngsDsJJxNFjowLeEH7hZoVj7brsHLdZZA5jgQyBm617jvJmXxy",
  "key9": "3tLT4XiDaFCpEsaae4mX73mQoLYgt1mrf8VvkswTMewnWfcixKxUt9EqbZxwxJzvvqmD74amAnU1KLwnULYvaYua",
  "key10": "4Hu1iQVQYaf1VbDFXAv2ZfkZq2onxkWG3g23x2kkQZyLBsM2tugDzo9nA3JQpmaQ99F8V1RVTn4mfALJXJwM5fRy",
  "key11": "2RK2TNboHKEkmMS6ygNKB8pLhM1xHv5yaboB2tgtYVqhmurwt3z8rzMj9vy4fHzass6NAznKtZc5afiSZHPbH5R9",
  "key12": "2oqLL13rabvL1uGpbrmejMEXfaBi8zyp5BNbK2SEZU9fHisWk7qaLq6APi4s57V2caoWkUQJX5bBzodmHkv86dP",
  "key13": "2rvJpatZAZAonehqYTuD58mVng59YAQ2w9M624ShrxEezkQTw9exc5PHC6YMri9SwwTLUJDZuRrG6owymxk492xj",
  "key14": "p2Pb46K4QaZHsxNBiFF8tTJr9TKGeQZdXoC1pNbgLHRJgUftqNQw4vwNgq8EpsywXytLQrBEoB1pvLUmwRrBcBD",
  "key15": "2Xuj3Dh5wAeFg4tZ7zZQvU8rdAKTHj8oLK4NrmBKELzAiB2BtGpnhyV2x4VgHCGjc5rwpxrjy6GHnEGeePgcPP5R",
  "key16": "4Z9jPQkut3RbhnYG94BTzbMrwAdBd7frR2fjkAJ9Wx7jt38sg9iUhBLA56hgAEA97QtbCsu5wUAapoYw4A4LctzE",
  "key17": "4YKnjmChUYmidhDkqpECwXzwJJpi9Uvf7ZHgXmG7Lh5BA4VhnaHGMviKwb76y3sWE9YtjMobpUpjgAQb4bumrdZ",
  "key18": "5awbmvdZsHRUEJwcRKADKBVRQfAkLj5oTeS3fmq1hF75VpZqRHoww78wszuh2Fr19XpzSJvgJqdQ5A6miPPz8PpJ",
  "key19": "5CFTD13b715SATBdE9Yqu5rfDZyteC8SXyCK73nbqm3G3Rja27et6sXNSieMvaVjfxkcwzUPUrGadS7KVwJaBApK",
  "key20": "w2edMCuYFaMTpLBskELwYzcXv9bY6HxWrP9UWfb6KQfowYmv6ZK8T8YR3DJ381GkbmZFaj1Had6p7hVtAnjH2o3",
  "key21": "664gCFcf7Q51Y7z4TVWEhVuduyLTZN4zeseULWWEAo8suXg4Kh8jwXoDL9MKP5GsGb3ZXJAyiKP7kYGziKc1SXv4",
  "key22": "3uavTzwp1p6QwdJbJJKHjQXXyNo4gDYDkSpQK9egVepY7LJhj39FaoHKx5QtALvNADRqHE7uVFDykp8PfhAVQNAG",
  "key23": "3kCxo5subgYhqPNwm6k9hwwZTgBk21sEnDoMej4kn8CKApGZ6cJFTATWUf6wF7CK6dY5T8se5jNLjmVsbLFUbxAr",
  "key24": "D5UJnNW5Khr8ATAT5yemhFMQ1Am7Qew5KQdqaxqPgp8d4Ykiqqk9ginVeAWE91GkvfLSymyQdYXjysmYAwhcnMG",
  "key25": "53ALW9Di49vS4bLXejUF8dumQDioCSVwdxR9u5fGwhqkkLk5ekS5gXjCNp8y7RqQoNfqpyvn6GFwLTrr9P7c2h2",
  "key26": "212prGUi7ih4yzXXhCvBVQx1QyJsge2KcLcG3ikX6yQxWj2e5xsCwCpnvVuGChay1zVnVto4r31ar9EBjicVkNDf",
  "key27": "2apWjcZTqwCkWdZo8M1exsTMVTAdihP4YsSdS91QhobFfMExGfeCcCYxADzty2mnUVaMa816TFFthkxc2ZRP6oMS",
  "key28": "22Nkpvqc32gjshfpCVYEpiWs2nFfh6c9T5XehsqgAgJWbCsyP6zAsafACJ4AP782HkamXmYhv8Gu8wiqCKhXVoy6",
  "key29": "3hvPLi3AJpE311SfpXDEZURL8BYBsrC4beVxTc9p3stMGy7JDgMozmcsfGscVpUBpPuXyBUgCmkRAoH23Atd6CAX",
  "key30": "1RPjdbJGayaUPq471N7rW3HmG3BGKU7pFe5xoJANS9dv1d9QA9pqaNRTkR42k8Nznp6LikTjkagqZkDqS1eQxz6",
  "key31": "YD5PfWDwxU1RbNmsn2ApmqZKNUwxGQypLHFfBG5WJyd7DwsJC6ZAq52gXkeRcxqofuA54pJWQS3YFCwtCixPiaM",
  "key32": "5f1DjX5wM4irDs3TzD37rQGDE7WagDjgbztytZVeSF8PamKSD3JxijAiwS8cHwphSDyauncUSBxgJuf7jHfRTrBQ",
  "key33": "3WmWSVxAjKXsx57VpzqtQTYhkFVYtsBcYk5SwAfv4Bd4HWsshrTkTnswV9ZdMqryVsAGXQMEGiVZj49rtbyxpncF",
  "key34": "5Mzg21Xgkxipt8iAefoMBC1qRVkQabEo1pnw4mSGSBxUSzFWkhPpv48e79FhXtmDeMfW4VKtUFFBCboGzJcEGYnE"
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
