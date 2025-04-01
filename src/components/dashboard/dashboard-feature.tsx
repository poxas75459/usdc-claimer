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
    "3ZvDYjQgfYcUecxez6VroXwEWQimPbbco6BEWzYvctv1Q55JG2mzWajzN7g8rtCRj9YdhxYNjg1VTDznkkVsAMey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hw3mcUXvJmmxh2MWywYsxDzkfzBk5W7JaCnupLqDhjipEhuiq2sq1iKH8U3KSRXudGhjCtjLXW3LJzALnkLqHBX",
  "key1": "5sZDYMk9hdaS7jdd34sQqLsGHn5kUSP287R79RKNQkbC3LyFd9gJUdvh8n7U9MXByHDZZkjxeDV8ssrCPC7cNybK",
  "key2": "5ewNfXPZmRUsaHUbzC836CtzcEu1EHyHL4FSkv3VAaiawUuDkcstBQq65bYnc6MFMAVMp3MtHkQDRLDeX455cAgL",
  "key3": "22QCJQegemeqXK1Zhzh11sjbC5yMbVj4UK2MdSuPx7Gf5iLdPdJRvoN7tNgyHcuXLuAvB2s9AZeZCgsvwcig1gTR",
  "key4": "5K4oop9rSTQ5oprSyFMTMsjqSidL9rWbGEFNU8cBnUTzer3aQBwvJRxekaSrwYRfyerQtMP44sNW6K1CZgoxGADP",
  "key5": "45PUtYD1BWRFrbepQ5Kp2XLcYeJ6mheywQuEDfMfWVV6JeY5sxpqYsfKE7Am5pG3hBjuVhnr73BZRnJ3mcj5pkhb",
  "key6": "3GXtvhxajfiyQhSeLuxXGCeHaz7tMzduE5egtMfHNEqsKi8wu3Y9E3wnw8A5uJ8vv2WhFHRgYqo2UCv6GoEaaUgM",
  "key7": "3K7KaCBJTexGH7dwGh1wQiuHHk2cRsskzbGvbp8EUshvRjvws9KMgRnKnpusdePLEgnpX9yD5U9otDPUGTqPjfem",
  "key8": "sBqDvTySY6JAJKU1ZqxNMLPvGbobo4Jvtf6Syojwyma6PisnpBFGEYfgxuyBck2Mjzh2MNHqYH4QrRg3pntGfPA",
  "key9": "4P7QRg1JDv6mFaQh7Ljbe2LkiY9ECyiPqVtVjb75DYRs3iKnEUPKUQovtqNi52CXg9eM3C41fdbJyhuvTp95EXUX",
  "key10": "5z3CjdFvDSMEZjKyTeAuFcwQwbiqizEjx7HE6ipKsxCp12maDpBJcvZQ5CM38moN1WekJscvaEXVzvw4JLRYTLon",
  "key11": "2GutJofpuQJGYqsRye2JTP7n7p2dBAbaxeubG5999YhjK3Ly87QJwSS4CKY1guFysK1DHyRPgqShWsjgWgRghj5T",
  "key12": "SuhSbpfwqcL4AwVzkJ81sQrTTVx5bysDrju3DgS1fFGaDePY4QiiEfGJF6PrZbMpBde26BYtC4AWwErKWmkVC54",
  "key13": "2ioxKfmf4KuwBbcBC4cDwbsqpwYNHuy2Kgv1d6VNJEeFooiBFv9np6hfUryvqAmVXyAqaZUZ5NKBXMwHreb7eaDu",
  "key14": "62Cu9igNMJJQvCjwAr7P3FqvDdTQywzmaeoA2k1BBuGxRdnx5EpmiL7iEtCqHbZwq7EdpnmtyRjYqsVAp7AKJ6aF",
  "key15": "4f4GUk4V8N3f518SmzKeZBMWdsTuE7U99zuv4TFMRGWFRFgybZBMYYUJuzazo6necfDktmoj3Q6tpujAfiLPvaab",
  "key16": "558WEEEQQWQALoAuiZm85K475JpbKMog5iVQLa9D741NvTHGv7X4TM8nuRWcS3X3vu9Ln9JNMn4DxPWWBUTswTNA",
  "key17": "QYgWQH6hUSyCSDbxNWr2GF6KTNb6814axPGxWJS6WgdQJpRBLG4UuKyPPwd3YEetxH8U131PzC7imnrNnRLGvDW",
  "key18": "33a1iB6uETwYDQnT16YDdwD4MeK21Mu1Q6Mr2p65H2fs8uC3xXJzW8BGFABAYaz7yzaFGysfQ9AMMZHNDtHmaDe9",
  "key19": "4JA1XENsug92CWNyuGnGQZkfvQ38HMZoCEBXsk52cTXPQ5HMtC7PsRQsZYwWMjs3qHBTVtTh62jYAT7abpL3HHF9",
  "key20": "4JEKHXCZkRjASoAq9k5CXhjV1ySAPP8BhV55tKGuLGdf5kcVcnpFdZKFE311kDygTE9G9HY93W2impHYwmvhMPnv",
  "key21": "jhBua6UdP9Hecc7472PGfqELosbVdSkn5UbqJKpdygQihXHHUvdEcd3wagyRuZAwFjBsVvb4qba1hWADx8TLrcW",
  "key22": "4vuwqReMjjDgxn9abMivV2YbrEQnzf6xgPa2GfUpuFPdqjNVm8AmDt8VtTq9sWVcd8FA7gzUHy34x9vjK4CD9uxz",
  "key23": "3W75acjAqkczQ8JfgVhXoWM1M1VPrW7i9iXcmzPZhotcEEFaHURe48P1WUiCo6EBVaSZs9A9wQZaWXVXDJWWyEK3",
  "key24": "64Y33xByRnvrQET2UjmKse8tPeuZX88sqiFXZbydPRBZKqNUjkT6fnia44yCcH2udKPtxQLi3VwxBbTxBVtmCq6u",
  "key25": "MKdkLupCpouehfKUvXiEZWwD5iXu2S5nyHWvgDYkEDm5sEMHV1tgxXekp4iAtNKxFj5pAXbfe9Ez8RWZeFDaquK",
  "key26": "2tBkVUVGoHTnWCwvENmTFnkdBRim9h6ha6j61vjiHEw2aceJDB8PbYcqs23poeMmWituewfWfbQVWxUKoU75aLof",
  "key27": "nafdDX4MkTNgPRtkaDQUUSibj2kCA8ZiX3UcPbSKh2ZvCheiNMuphsMQj1wGmH9ogW8Fv9DxWE8DDXVZqwSiw5j",
  "key28": "2nGtqQ9vERTttqaeArM3LkrQ2gHGAyCA4HQQYE6uwHMmXFadDDjpBkqYLU6KmcsuwFJw9sVCfoS57rCLnM27ogyg",
  "key29": "5m6em92gMH8v2ZTnEcPuxyMGsTkaWrCgUxayVnwBPofWUhCdP29ZRDnzmfrXu797Js49avLXstXbXV784uRRFjV3",
  "key30": "4h1QPaNQV2tKUomU3Yi41CbJgxKa8mAyL5D9x2VWFNWmZwBsU4Mk2Cm5ZSRbNypQuke654PX1CsC3puAx6zFr8XV",
  "key31": "48s3SVNJ7iYArfn5mzYJC7FcHAk6ugjQf5pnVQcTAtgS27Z1WTAtMmNUiWv8VKAz6rdz8c4QKCuRJz2B7DpqBr5E",
  "key32": "2nAoGK6L6KMxyyRKBiKouzV3csTsoadgxx7LhiDuHuz69hsPduwo9KUsw8at1onvzVt4nRdzgStd1nkrpVZab9wq",
  "key33": "2zBm2m1pFJ1gpLJva5D7Q4jiKXB7E4CzH1BZrs7jfQJVwsdnHKk2Ur1uoSN9BsJ2CepyR4Vmt1nXtgRKp1gY8bEg"
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
