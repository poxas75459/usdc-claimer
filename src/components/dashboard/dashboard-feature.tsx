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
    "24rQEPkx5hKZuvnm7SGcN9ZqR9x1ppZFbgxiLiZ5HU3ZEzvFaxwNxwvJ8kyzqtQq3zNREhfXDybsgMsAAFsCj6P5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XExTHhfF1C6bry9KHha1fMgrG66cHSGuns8rnEQzqoSFZ3mbNMBa3ZZ9NfH6H4Wwv2HS8odXXmfABXKiN9E87es",
  "key1": "67qSTvWzSVbZp94KsE8FEtdidqx2jjWoJiUiLk7HcgqcEigwDa7S5YATBKBpzsHmdHwT4PocYKfza7whndYXxHvv",
  "key2": "4bGCMZ4fc7rnxXWrGHCDq6jDzzWYcvdHwLGBy4thNLUErLYBb7WUWBGESV8rR4JzoSLMJ21GtRQ3SRWBYUe8wZ9T",
  "key3": "urZn1UH1h19UafYwR2zzQHEmFmGi55yczCNUV6jNmx1oqmPSQYpYakENoK1zeat7sPw6Xg92k8e8biG6Uv6zmNN",
  "key4": "22p5yQhZakjh8fZ1NeUTSAJK3gmGfgbnNc3RSxkjVmZ4UjRoNHLrDEqaVcUPDzNxfoGarFioKem3EN8YeKyYmByA",
  "key5": "2tNkFFcbftZJu51Q9LowfkwHhB4NPtNKz4EVgho24bGHn1VRBeJGXWP44SMMhdAUHy5NwiaGEnS64bDrnqtEpC8e",
  "key6": "VaKa6XzuJJ5uUkXq3DBpAWXby99A2MmBZDWkuXkFM4edQ8dRtK7UN1opSwQczKqScdgrLYFp1yy3peFZr9VUZm7",
  "key7": "3iZr5PnPyvV48RKiCkynoL1c57TfenEXH5s8AyWRZPsedcMrLBXA4AChUPCe7owwaQVPjzxBfdUT79tfHNqwtBYG",
  "key8": "66CSxmY7rdNpB2oVznEweZ2qhRJVc4UWkvYiPFmPFJxTtA828VHxScAV8GQGevJ9szvrQhD4PQCmF2Sd3DGAmC7r",
  "key9": "5scTebH4pCTpj4GHQH5jrxEMsSXhMvfRk6eMFTLQHFvi4UHGSiboHhU5bq6nL5JKdKau5Lhvwzn4iRwuFLigh2wz",
  "key10": "4jmrYbnp5yF145tjxeRApALwZZSWTmEAYaRHhcuNpq1ieVoA1KQCJWgkSyGRGcqy7Q2czRgiza75AW4opdeR1NZQ",
  "key11": "z79HKEqyJtzCG1e9jXhDHWmeUoUdesp4AWk6Tnt38cgxFLnup8ywQNiWswPcqy3sr1kms2BeNV2sH82JvdU9xa1",
  "key12": "4pevBKDR3WaWuSLWe8NVJqu7hqmq1wkmv62wAhrCSKzb193PnTainXMZvHTTnouoeWUtgxh9JqAL1taxeH8bpzqL",
  "key13": "5CjaUW9v1pCAouPeKow3FqjaAXQVafoi6Tfu7Axx67gP9skQqs6upfuMnZC8wPdFAwu7wquaMC4CzbTeeYmpKDay",
  "key14": "QJ2ihLSs6kUbeD1BHomTFZt8GankzBnCnXDaNUayeffWpxFLd7zDQZWyWfqGKZRhwekQen7EHt9d6y3cpALK35Q",
  "key15": "3M3rcMMKjf9aTbngEn5brvWgRtjX82W4kUn9BnjiPUYRNeR3YvEaJwe8CeYip5dkswsGMVRSRPZr8Di9EgJcqbZe",
  "key16": "5KADexGSdsirQxxW8RhP3CWp6wxgi77AZxQ6sXFGk8TYfFUbvpWurwoJhd2XbN4C1hC4inDZS8kJQQnC744njyGH",
  "key17": "3xDLwjtT3DPaNABisqRfEkCwxL7b2b23edQmpExxBHoWCGHhGKFADhPU4hwmNdoxKmos6YZPfJsRYAS6jbzsvuSH",
  "key18": "5mDBdxRHTp1wdm9zdg9uF98tFcw6t363qF5bVZvvfHGFMkdmnf8mkVwdSBYr8hVdyvqWsf5HE9JeveLDmN8La7Hq",
  "key19": "2N5chzoUEHxJ1FovSV5aSudqwdqaMHpy2bBRXFwT7gmsoDvp68H1Er3Pzd34ZCmaMtFt4EA9wmoFYEqrSRjRFLtg",
  "key20": "2gkAiWcCFAE7fDXXAYC3anwx8gqR1GWzdRmzV7qumjHFXu3EjG2BCiHckGWVigP1o2j9VdqXEAxeTmhNUT2ZzDAn",
  "key21": "4NQ78GnDzYXwZ7LZXWEdtHRXtN9bpp99sefWprQQgSN8xoh2xAcCwHKGhFr3yVrVVhsBakpvbK2FWFEhX3igxLKv",
  "key22": "3QTj5ujNVZZDXdzqA7Fftfe7sf8N2xBVv7EcC3QWn6baX8BuYAd3hCkjkD8K4mov36VpzFWhpXt8HkpjqmrSrwAS",
  "key23": "31BLJ2qHKEL6TyjweBd63d9SbYeJQzTMZpxQo5ebqEex7rLgXwEEFsu4Yo6DFspBb98XeaMKmVqwYSuAaSDMqPwZ",
  "key24": "5GEx9Bt9qUeG85ucjt7koWuDoxR4JyiEakjakNDCmh4s4AxhZqkbCPnMEsowVeuydEPQVD2aT629yQWQHoZZh5QC",
  "key25": "5w9kSZfo4ZLrskdTy4E4Y1dsYQi7f2bUBb9oKaKVmJsAesmKWq37S96VmUCHRQgm4denhgyifE2DxKx27nQvue9y",
  "key26": "3cixhtjhcGesReoW366JDk9YzfRJPJWmjX6mVUwPQ6a2GwvwH2tJfVzWCGhwZRMdMecygfsNPZGLKDMKtq6AMVm",
  "key27": "323ma9mLrZ2qV3y5L5otsyrWsRoDn6Ut7eatpFDtXV93qxPRoYhxG5KPVaVrx2cU3xciMYYCbhweGVLEetnxgBCi",
  "key28": "3FJQ32vnGRYijjYikgKnoGBANAhA5GwKNjgd56xqUk2o3pFezvUSsoffiQGVm1zm43sAqrvcf4HKjVmaQAhU5b4p",
  "key29": "2Jmi4jSDbiVGy58p1yKBvqhqqcAaKzyZcV7V912Li4nHRQ523MHz3nDA6wqYEtF7mGpmL42WPJ39nAMzw7YrptY1",
  "key30": "4pABK3d9w9NHpLXDzW5wAM1nSPDSKSmhDwy1iGzovg4TmWMY1YjaAX4G28ZzW38ohkR4LHATzuH14qFEVi4bVRuE",
  "key31": "2tcoRWTbve65TpmUA3VKdFPV4kUKP6Hg6E1oKJvoxJcxyqUFcnhjC45Dkjfj1ezBhvAJWzf4YQp1JgEKycmieFHM",
  "key32": "5mtHsQognHqxbJCHHrfHy3tQ8pYX9b9m1E25Y2ySuZfxbcZc8J9G4NBnVa4gcihuyGw1nM7FsHXj1oy3GeJUtiqi",
  "key33": "3qRfofqRMoaVWCtMnGnt2ip5EBf2Nu7XTcbKYhSPgeDUHZFUhf5sVesQ56crE1gWWQ6Y4TvW6Cd2t9XFLYTrFyq3",
  "key34": "5LM4C3BkNeYcNZ6MT8PqTZmvNBsTcNqdgZyXp2Xic667YdE4pG1YN7UKm8Fy6zn2DV4oTAUPu2Y8eH8B42wsvQMc",
  "key35": "2LD4Pv1i2RVSb53Z5bxYfQZQufhnGyunTmhzE9a2Kpu8S49f27qr2Rgirvn5hrvEuFUkTnx8NLspdLBeST1Wqf84",
  "key36": "cQbgXgbKyPjGEhDVZ1ycHTHVMg3dbeJR2RJbaTVpXkPunSxSDJwfha6hapjELKASHwTciiZyvU7vLg4n9xVNJRp",
  "key37": "64HwpyAgQUzWphndium8qU5kau9MzCnhSpuYtkZYVMScA98pLTUUgJKy4QcK4Qt7LWnD6krdRtCSkcLdz74dRvgL",
  "key38": "4rWQb2nCmYu8xsyTm4T7wNCCgLRdgM9fhVBMF3SpenMXFfdrwhuuMU851x1bspj4EsNR4rgV7k4ugyNDZPbh69gK",
  "key39": "LQF4n1iKcSLz4zrLUfwWChMPKhCAeRTS7tcXqWaiQ1krADpfm4NnTY3fjeaHoeVqAyc16t3xmpXmCwKoQ5KZa6n",
  "key40": "2PrZCXLN5qyZqbobUjHUm4V966Xk1iH1PcDvZpVrvPUXJWqQwfGSmGAqR95bynXXoMyACLhNVeLApeNWPDbsKmrU",
  "key41": "3jent79DqkZpm76gWdhibhVQKke2bXkjdED76dd4VCmrExZaLWUtcebRqv1M53F1uvfxzArSBTtrTFfe3Z35XSHp",
  "key42": "3HH1HJJ3GP9RguKh17nypvZWJHRB3d7HovPvKccLfB3xxqpjM1Ypn3QckEd7Uur9oLGHstp9DG63kGTuLGDeBVpe",
  "key43": "3oaS91YGrHZQAGadWfEtq2k2ojjSLwCVwnBSdUGXJbkwXJtjmE5AWW7bRZomTtnY72zo9crGApDiyJ3Nqf24R22h",
  "key44": "67hyjpX8BkuazG618SW3nUq8wRCmFM3keCqANRHCo9DHxHTV8Cyrc4U77jaHW5HqiE948ERwC3vrLzzoTe3Ynero",
  "key45": "26SMmzoJ7yhDNq5XMM5AB26Pqt97eCyqeMAk7nucFibxpF92oAombGGpQycMbkMhHm1iH6UhVghRKdkJena34ML2",
  "key46": "8n7HKbQgJSv9gGRVLXrd7B1sSSkzvi5L6uEf2dgSQGN7GbYPbaMNGDd4Uus7KWKGK5tLZJFitbFkQU3BkfAiXXr",
  "key47": "5i5iJiaJ1i37MCxj1XjQ2VgnphzFMNMjSGAt8MBj43yzXRT2A44LaZN5mw7hr5jWGQ9Hi18t514UGrJzk1Mv2uCk",
  "key48": "4x5cpNonc7uYeVU4eum8Rfokiw6LkhzsK3ucbQ71Podq5sCJ8u7nhAAqVyN4z4am6FsrX448dZu4Km4TymcHhV4k"
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
