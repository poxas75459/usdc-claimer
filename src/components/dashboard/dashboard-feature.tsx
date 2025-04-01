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
    "3AK7QWZS6QEZzYWPL4BwpmumpviNXobooTJLDcemNvjYEWGt4iaPKUUD2qY7TfV6TackPPgtX1LbFaHJxpgowdbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3gKjEQsL5i3XfvdrQxwqaLnf8CFaZXnhNmFfdQHeyAFUq7YkMPtJWsbNJqgcvnBMjDKW2WyBWqntSLN7y5nab3",
  "key1": "3fmvYy7JMVZfdHATRvrZ1ByqhdPPmmVsQ1qrgKSGQgsUmVJueYZPsFVTEhckAnrQoMZZvg9vmurQ9v3c8oZyrReu",
  "key2": "4jnMyWX39kqvszgPYu4Z4eJGgTHY8Am2u35YHtRzBxxoX9oMS6prXuWUraXGkxXQUnzZYq8egRq8uLNvyYB7vF9o",
  "key3": "xqHxMwb5yTBjPJtBkxiUUTDyvm5trq4ovv9F8PAXTxXWxNPk7XsFoX2H3dUNVh4XA4y3EChHNG7DiFWcjyTCkQ2",
  "key4": "RUC8urHKufJ29FyaP4bqsVqZELvocno5KRxZ9XTkUpBHMHJVqGUXZNx5GL8QSS6ZGHUVKm2yzdbpyVg92oWNmRj",
  "key5": "fQKg5UBoCys4wpkEWW42EqbJtdqfiz2waCzhiAbwyJmVAhsKheNBuSDoQjEdzdMjU95BLEWyN8bUu22ZorDhSuq",
  "key6": "4XY26wJqE2oqUCn58XYvFp2aeEYD96eRz9p1g4L1uqvTqHM9jhZinC7CzLBqMpcoy5FHdo9VgLMEbrF1eXrmGWcP",
  "key7": "QXCwZCBdkjNgrwk7KptyJJgn3x7DnmLKbuLGwRSuytNPS2SXm4jjWfgNDuWdPL4eDy9H3eD5U8Vknw1gAmm753Q",
  "key8": "2qVS2gh6vYZC9k3qkkstx5Qtmnmf7QSv6AiYcnDqfEJNPjHMu1jq8Seasfh3XMYP8v8S7PoSj9RNcs1Ka1PZG2Ro",
  "key9": "5gRDq4TLJppqLpFSnuJVErZvpw2e1xRAQHpETzcoN4KF2KkBaDYnQsGU5Bp9Y6Ez54zDjiA7uGcFxy7bdfvDuvDi",
  "key10": "2BNvBB4aYkB6hug6hU9TkoncajMucs69h7V4S3QFPFo7ct6JLFEHwWvXZugYPB2Mpz5nbiDbYMkwac1HVDp2Ltys",
  "key11": "dJvxFhs6XAhdnkwYWWrQuPRHipGFNbYXQGpQ18v2oUQ8tgYj5cJC63Qivya1wijbpSxc452o3GVM9QAUt6nDz3i",
  "key12": "2Df6dYFJCGFeHwg9HfHVjExdTH8gSchPCCtfBPqRiRtp3FCR5LtTrJytPUU4W8cvBukDUp9L2gCujsSKFgb3JBmS",
  "key13": "Fmjrix5k3tzJr2ggTeNiHuPF1SBq8hVXArJr12TrdUh4dzze3tGkpgaqxkfxaYj9brScwS88qzwWdr5nBsiaudD",
  "key14": "4kZJn9cnqmcGrgwxY1SdkVuKrwL2QGZw4LVAvyZdMW3yuiGhtsj2pia3KE9bjNjuLg1RtKnALeSZfgjHM3TFKHxS",
  "key15": "4ytTdtdQ3viwibne54RNKHfRbDckp43uVgGVgvj6vWNzZT2CRSTPt1PAGCxagHa1emP5P1JXryUAndbrUwXrDxM8",
  "key16": "2Hs3sSiaJpxTcAkeg6Psxu37uifNGCjXhrSVyuhLGPkkabCmqChxnGq3AbX6xxxXVv7eAB6GPn2PUj2o24MEpDPm",
  "key17": "377NDBT1tYkcpkMf9mruA6y31cpxcBNXTpzomVmH1P7a6xba2Hz3vQLgLx4WNqva1fhMi19kQXjuRUCrJL5TvLTv",
  "key18": "4o7qVYXemAEoJD7AjLxLRYGz38TKBpCGBa3HMA7NvQmTMiiBCdpAajCSHnKqqKRxHMdNjEF9XagbLVFdyap3tHun",
  "key19": "2TJbBRQG7PFR2cA3brv94uC9AjAp2AHxkvxZm531sQCcBiA5Zezsi9BPhtuSrgN8K1ieaUxUZCKycvxvX7pLvrV2",
  "key20": "4xqZ8thfdTqo33GA39cR92uiPeTvLsdagxzaGMJFKAZWQek92zsY3MkSHqdE24FYb5wp1AUAp9ca8zakTAQFksGa",
  "key21": "3SdvK9JzYaRSdZVkyhgPzKG61LXktBW82s3Jjd4qY1XomhvZZyPaYtNiUhAD8t5na36S1nuFYNPRh635aWXCaiB2",
  "key22": "2HB9g42Qu2nnVxYYHK3ZqixUJK47DfqJhFpA5UdiKoNeQ9hBQVpyvVPDUruGAebRMRpVSXLA7X4xEVqb498nZLer",
  "key23": "5Xu8wPWqbfSQ3dq4XVGXFq89EFxSTCimkybNSRHXQTNnbdbCLfp22cakykuMVZhJUSWYGStjdcGzepyk3a2CJAo2",
  "key24": "4sz7jq1kDK6LJAbtHduHg5Dct2ZDKCCTVLRFNzBCsvmcaAtQbRjMjfSqVvDTd9ajc6i9P9NZRiMD3iZPPXWvUFgC",
  "key25": "31dkS9m22717t7nNJq5MT3W1q4Wf3gUujHPQuxUzJB7nUw7unnR2KK23jQoK5pTTmVBqCvAYxUSsp49okoGWCxyM",
  "key26": "59JHYJ1gN2PCd78rzMykSuB2vwWCej5M7zDPSSPpV5rwfwpQtXe9mKEF7ZGxMmtn38y8vFnVzPtkDoFqosJte7o1",
  "key27": "5AbKZndpqpnuErK5JUJaMxiCjSFocipEZQ9foVEpuPFKDEjHGHFYdSjKEzSFF6WE6M2ahjhbQDVCorCtRpLGmiiQ",
  "key28": "4rJo9Sx1N29VB2kyLpJjURVQzRiHeScNzQjbTr7jWghKhHamPVw2E2gqJe7t16rhqm5imr2DyqLJokTPTkHpaDiE",
  "key29": "128nsJgtLWcwDexBJzWUhUfYQDiiZGK5BR9B8wGTqL4R9sd6BubmdovUqc5yfVT54qb1se6ENnK49pkhh9M9URiU",
  "key30": "UkNYzguHXmp62LxhX2QfsMzDcmYHvYzHsVVZ8nE6SRWXxgsooLZNZozDVxrdgyNpttxNDMHHKZMPqZSYQAYrZu5",
  "key31": "LyYcpLBA4CK7XAUtXfMWiZ2aDm2rvqH3MPkhAY6MruYPEijHii7AHL51ts6RCMANWn7aUvvUxN7Z5EBMYaSksRN",
  "key32": "5rX9Q1Ega5wYddg3X2oJHWeYFYqzwxmDeKeuHkicobB6iVqdB9v9oPEACmYLujBVWC9yKPruynsXKoceB86yP2Ha",
  "key33": "T5a7yM6rU8qTAbamjBksyqvyE8KyDcUoR72k8wGnXwJNwZqAuMygJgXWBXvwbBdeXebgNk9SxmHSKXq2Us3FzaQ",
  "key34": "2Nespsnrm6w5iZ9y9xU7zyWU4AwBgGqYfgKb8Pr9UdxeLiy6F4XkXfsRCHGepzD7CQhjUUA9CchdwDJ4ygxThmyF",
  "key35": "3q9PbK6CHQY3xj7jUH8hyqpG5e3rCzMnpbCUg1A4BwPJMuDd3Dsv4SZXXASD82Nqk52JMbhvXoicJG9MnCyd1XfD",
  "key36": "uzmj9n4ZTxq1DzhHPoPfLyfiV1rYpNJJoLeWfoGCr8KLoJ2LwuBN1EKvZbwqX6HihA6m91hM6SkkNtoaM62hviM",
  "key37": "qSxSzsmRJShBDmBkApjfzXVadRX4kSZ2QGaa43VpMMWPaiszsL9NizEZMXH1tJ67XB66EA3PSSGyPtWvKZt7WgF",
  "key38": "5zyvCdToxymSYw65d1CapmKriJAv57u5KkxwR4Qf5X5ZFdPUhiX5L3b6MTDR5MV6wxSgeJZePvsgVvmyfse8e5LR",
  "key39": "3BcGQFf62fxoLUPdjnm7ysLeM479SqzTgbf8LeoMVGegRLB43vpsCGS5iV4AA2QbTLifKBeWVyRyqxSACnq7ZaWL",
  "key40": "45uq3wkzAFZfDiXiCT5ydCq5JpxSvqPpDQvWBP2aG4cnddb7GRgm6k8uMaiKVQ2VqwnpP2Wdx7ZMege99ZKf8arY",
  "key41": "3cfD1gdDJtoWkxTuCG14whQxjKvieAvH1hUhdTL9th4q2CN97hBFUraTTaKpqAHPAijLVu6geRdGKDBEuGyQPf9H",
  "key42": "5qCLEPSCxyUeoCB64aEiKdNZqmkBbmZT7ta6ojcknteNkzzEumraszMtXRWbhMTR63d3hEkCcxFsrNGEbUECLiZK",
  "key43": "5YuDe9xbJMiaRz6H96mtbedFEabUPH7PgJNf1hrweQWLCJJjSjPHjKU3EsX2Je2pVRZ3ZYC79RL2V7a7CG2FoQ5B",
  "key44": "2AN7DSJeV47c45Xw7AQF5689KenUtHhhdY4eZKDD9j6QxvsVXvcCXYqcw7yKEDx8wCcqxzomkVPLZmfVqAmhAnNS",
  "key45": "2RCpynobK3v42g21ZRmmLNRARdPu1Dkbmz4dSU5jKavqLCip8jg8tEA7FsVkmUNAr2UaZoXGVL3uUNSQ1ZmzdKFw",
  "key46": "2zm6mPB58KpweT2f9uGfk17nQ8pNo9SUsxJ9ZLrcGE9ZGikBp1U9v2xXErqyeL1gZDtYDfWiRtPS2UUd4AS5n4e9",
  "key47": "4ZP8cjTv78C1iQqLuWEU9825et2aLNEwazj7uNPnHuPvP12JPF5auTkerWqfDQiJhUbthSXZWyYnqu7BkBK7yccz",
  "key48": "4tJc2Eu6c47BJTuSLt14dcTrrt8HJK12FCThNb9zDz2yqn84dvXFGsjPZ5d6wdAJyD5DcqYoKxARYsxGLfTvXaAx"
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
