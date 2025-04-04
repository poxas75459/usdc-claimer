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
    "5NTSgKXtaRm4fFLgoXwbLwRHf7nHERnCwZ8PMTjQcsRqMksbSQtWE1xErF5Tw2GeAmLxLwoVMTCwKECdftCAhMNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJKpcMuYDt7gBjLwRY1nsJXtHQ2m1BuZ5ZE7qnCHUot53PmZmThdKqAPhz8TfX3h1gqYYt8oREFHGuSeN5uPkdQ",
  "key1": "4k3LExGDr2F1RYcJwoT7taHcHAjqfFub9UASG4TYk9xehbmXYayqxLtxQzBhcuSA94wqCZDtCWfBXvg2ct5Ebt4",
  "key2": "5KHVCaFDaggmoSwwKqSRMxGrwtmocWuTPqktTC4jHv34YvFG1RTQ82M1r4MKgCBQRTjUkEemNwMxgXtNGDmaNDzX",
  "key3": "3Zfx2bqY8gKV2ZM7QMn8PGbezeAsoeLS9SainUw6XHUPGHLuF1NhrnwDEmEYx2pbUEyWAKnpwsAiWs7aUGCMM6mf",
  "key4": "4Pc6J5Pa9XZTesTzrjzSeWadLf64ArNKxNrWFDYyHvEg5HhSo8Kr7d3hhYSqG3SjU2SX8zi4RrBW4ACbvxv3Hbpa",
  "key5": "4SKAv43hdAd7iFs12oQzhsRKsMfFCBwjVYTcjk7ob3NFTpBiQAV2c3mLzQoQwDFrF4d8MPj8tFDp9ckDcupxXUfw",
  "key6": "4fpq6Dg86SE7yzUQe1Y13cPoZkTR1PUTM78Q8q5sqMibzpa6wWbLSTGGy6cxwAUbwmjmcvyzd2rewpGdWc5ewxEd",
  "key7": "4DDgMb9aibmerQgqvgSHkzH9iuCqKxkuXkEfWbEsnX966K785jFsi9jXAEkghpnMEotTt53bQtUyVzbxxzcfumHa",
  "key8": "2v1nNvqpAGj8JMCGDrgQU3KMM3UkJuWmuAPuRr1SSQPWeBCAk4yw2WQeiLo7ftc4Wkor83beph6iPGvjpYKdzr8A",
  "key9": "5s4azgbXFM3MmgBMeCR1NdprRiNxYDj5vx3W6ewE3VFw9o1aNiSdoUriumhPvgNw52Q6zWQPbYTnBsgHyUAdT8oW",
  "key10": "5TstGw2AeEKBxTspdryi7bHepq13YquRhaJTTx78spqZckSXCEXE2pTnZEjbXjUdicQqmB7zDPk4d2p6PvyoQJDw",
  "key11": "2cJSEgPVigLn46HhzBaUJ1MLK8xmsRYHhxVcoGEsQBGRenTz1ZK1vw5Per32x1z5VeUWPiD29aSLBSYXLGSrr1ot",
  "key12": "3S1unaZhwB6hCg8ujnQymfyW1PG9k4R1dkYuowLoVbBpEYaAzX93jhGzMkvzyL2VU4piVSDzEAA4mytAXuNUiHw3",
  "key13": "3e44hdBZEKorZqeTUZsoo58MXvukjozhuwaDJ7okjsWFtuMr5HRovvqgQ8oVb8t3yJpq9DJXoGDzD6YsPfDtfPsZ",
  "key14": "4MRknGZyBah81MCpFaaqSduDdk2AfyKuHdLUYMHaK9ByT9jn5R6DP5CsakM7VKR4kGhkM3yTc1HwtkaN8bvZ9gTN",
  "key15": "5vWQEzaMtjSJQcKxyRX1Ytk94irtKP8iQyxf7txe7poW6MFYZ1sdKaAT2xMueibeDohHBeGfQE8LGQHdzFMRWfzN",
  "key16": "2fyBsF3y1wb9ExQP78VrL7cVyRZ6sRhqRiyeSzED3EvjsmgUAhvjj1Sm6YeYbwQmDhVnRsPptRrTd9RU7rg1wvJ",
  "key17": "4scQp2wb2EbAtp9mENARc38Xjuz7LN99hqd3FxyGn5HZDQspjKTDhMnDCBXMwV5Gmwpcd6BJmiobmQn89LpWRGVh",
  "key18": "2umU5WxuHT3xunFaAb4XAvwgmMfWLBBdBmRxc28n7RFQSZ13NFWYsrcLx5avX3w3BPo2wThkh83CdBzBWMkyqddr",
  "key19": "ssViQrkXHkT5uJz2w28YK1NQ3C1nfHpEGzzKxC6kvnpgJQtcHYS8h2CDxDDzbRYHrGrGaY9dVTpTcfwh7mKAFNw",
  "key20": "66sLYjK4JVJtTA9DKZS3ccxEQYZYCy4m8YydafeKJBcd8xk7hLACDu792Xnx5PRzSkXciUcBiywScqM6N5oQ3ZaH",
  "key21": "49VXZhFbduGbZ4Dnhi5qBX6XnzpfdzPrQm2gUGwbukC52mw93GuXnJXbFuErcCGP3qDsUfb8AYG35T4b44WtrmKZ",
  "key22": "4SsPqJSxL98KrfMdwk5yD7UfYMXp8UaeDgZCpd4RvLVWPYGxD7Srk55s4fUJVNrpsd8QiZbku23joWNqW7D9eU36",
  "key23": "3ev1gSPpDZC8V2bzqa6VZhCD1eTP5brDpHCTwVDJRWmx8W6Mt6m5yqFYidwg8iMdxKXBZYZLssDD6eV49DATXTmb",
  "key24": "34i99vRNhV2gH5DdCVPYLpCNLhAcwtKjUoNkR8wMG4MjLQbvG2ai66tK4P613tRuYMancn6f9qgv7cUWAJwkJAHF",
  "key25": "2oKfA3t5Eyeu5QJ9ycfp8uvBiQMe7ns1eC2MvEfW8bHoXnA3RtZ6W1YA9kmX8wzMeaXb31tS3pAbN8bzCBQBEp5J",
  "key26": "4zBQXeMZDaXdff5YaDCq7YFoDBG9ZagYZURtA6YufgSxd1XrM4d56QcmiYXrbpSNbkq4k7d5ctohsk3vMBmZCQSk",
  "key27": "3FtLEADkc6ib4ybVZouz1sqQgb2WSWuJSLXZDncBhYmr4NU1GSRNt3Wvkgijv4GZfknuYhaYztSxmXkKjUDzLe4N",
  "key28": "2SosEQgZznKsNJdT44FPNku4RneoQ51cJjWFDzoxzHmAoCtA7GFX8eQysBo7mxouEpz223qM2S2uyRTULgNRTbF4",
  "key29": "26vj5x6C3EaZdqPfkTZvjJsnk7jzYH6PHs5dfDEu8QpryDtuSZDzhtdev2jdCQKCYUu5yrnwotptSQpPnMWs4fwt",
  "key30": "41v4WuYx13mr3CHMRDfyRmfNuJCkVhBoBouEZ1k61LBSJhDU7Pu9KjQgYu5kUjxaVArCSafsSt8Z4jjMQ5NZXzgn",
  "key31": "5feyEm9i7XCVRSfEQF3Vcs5eXDGEA2HgRHTSe7orYWFCeYsrTDdQeQ9BzeXMtMvEoiifQAyFNbDigbsMytRQf3tV",
  "key32": "32jzQn8XhJfBjUsPaxHseHVfdyxQfUbbiTfH4CQg8oHENG4PesrRYRq32fy1bMs3wPoGU6cbUYbifZRsdk5mq7Pq",
  "key33": "557Ygd8rsNDaPhfuxGqdKtqJQtSzKM8bXg16N1SSBPLdCr8uzWDKGbtvXuWC4b572de1oyHcvxKpAfNv1Zny9G8Y",
  "key34": "2EcwiXi3kgPpVQhBtZorjG8ahH4tGKrkM8Jzy2QzVYQcQaaThAEXNhkUDCqtacwdZkXT6EvhgnzszHBqnwKPH81G",
  "key35": "3DzDvu4rs9yM2rYQ2LEC1fc3KhPkYPr1seyUsTkgQ5UDLQBM6zGREybtY61yFyyCUr6FmmYgwK5FR9nMF6ceqn4g",
  "key36": "3jQxVfJJYDX8UpWeMWTzFddA7ci7KiDv89oKtz8TrtrK9RJhsy6eYj5f1zXQF58UN6GpJbjVRvfvkbYPfMhdPHCf",
  "key37": "2pQCuMNPYTc8Y9zXduJ3mkvfLB2zin7KATXbNjrhbFiUeCXfAqpwUQmPwndFRsvY4DpGLUNnqwN7R34VaqRL2SAU",
  "key38": "4rJrcx1zNS7RNnH4TVQuskfsgb6GnYPDqifhncTmSAkszPK5Tg5ynFHJNh3Zfc5TJVdXLAgR3aTaaj5T8mXBsYZ8",
  "key39": "W6mvjeY2F4cvx68oUoWYmhgvnd3ZmFXqPJvrJSB2iRdNDzLJKYS3NWgRt3XKvaQfBSGyN4L3YR4semSUmo3ctyG",
  "key40": "2m2tRVry5oEyzyDrtDdVCtky312RVRuYqTUvLC22rLdarS6faCG9EKJxVwwEcQMb4YsFWpJFc3S7Le92RmTS1mRy",
  "key41": "5aEuKNt7HXhcXnoZfh4xnyqR714918EhvLhuDvDVQxGsm32zXcqDTvGWVBUBXvYvZ8BaUtpDn1QeYkKxtb4xQmiA",
  "key42": "4xYa2yQwBCdiqRSv8mGoX9npy2ct2rrkheqZcpEpQDzhMQ8iaPtvNufoiiHMRSgHibkqjC2xe6YMTb6oThyXsvdQ",
  "key43": "UD3b5rCce76Fyid37mzDbYFjKT16DGmf5dHvC6uFcbuGVo5uik2bQtKnvGpFJ6gYDPLsoPKh6TBjXGXnG4Z9DW1"
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
