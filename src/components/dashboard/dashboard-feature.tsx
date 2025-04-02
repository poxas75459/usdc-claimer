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
    "2vAFnHAvS8riMVLFWhNj6c3ikaMrs3cZyaqNSjWENceC9VDdnBNY2YhK9AYRxoxLzUNSnYpHQbVb7XjVrWDRtYob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TqxBsFXzR5UnB3v7oMs79o9bK9UPXix68DVdTberxWPEWbMTVznF3Z8fRsNVAndmtJ57QcycyV1HAjYPCUHtWZ",
  "key1": "3EDFUw9NbBnsYXfDBFuNmt8m7F5GJebLoBfa1c8MU3feTj8gv19aJ3ey4zhjKamxjRd2cawausMHKXty22yxCLUU",
  "key2": "5yY949jAi67Vt4Lso4wNMRcktkBLZJdX7w62uWRdyEcu4iypExmHVW49nLZUpjvXwDvVXWH15WNsVQksUPvJsiru",
  "key3": "wtjUtAbPkYsmpoQw8yj41xs6Uqwte481TpgoZzEsgnGJ3m4fFZjqTU2zgR3UTJgEUbHPZxkPz8Fadrpkz6Xt9Xk",
  "key4": "42Bi4HAmY1YWJGe3yVXT4rUJ89x24MgypGGTRKN2u2Z2igupEEXgpX1thEE8iDsoF9mVNuz7t3rmcGBrqAWaQPtH",
  "key5": "2EaEPNG9eq57ESvCX8qFAbNyD8YCc4nZxbs4LDe8L1pBndRmXtSCPf72GMAsHNiFQhsNpikoVvPrfismELeHSRPC",
  "key6": "3MkYLa1ipjekUBy4G4mt36GCzXv8E1rQKxMe4xMsKjgPw8aZbu5GDu6WKTSUPuDB932UPq68p9nhTzWrEn4nXAxY",
  "key7": "5rcmZhXrXgksiSRca7em8nmfbLLHdaeADx7VoQ9N5tGS3PV4i2K5fA6FGnkTRtp68LaAhJET6Hm4AVedJSP3BHZZ",
  "key8": "bg8SWzELZL7HbDzcCpXiDBJ43VvMCxjJQb51pjJDk3EAbht1nkrVJ1efhdwcJ2W7cmyHdxxPNznAdUioHaLd9FH",
  "key9": "hvZpgGpHM2twLskNqpzFdTbPpzi8yq4CwZPxHAbDEzcC1pzXA6wzwBdrj1UtkS7YaShxDMCRf8EWCfwyHT5HpHc",
  "key10": "5dibX7NAogimtEgfkmWcAB4T7T4Qw82AgwaLcREGmYVkPaqiUQTDTSYgknEAEgmi2NoCwMDwvuXRuQQN5EpQBmAj",
  "key11": "5KoRXhUuW6WEYmpEp9rBn8bUYFeMNpFUZ4win6hdjgFSUYQXTQzRYPihRH5ToSuHLNCCBgaG7ni8uC2Jpm4jBD5g",
  "key12": "3XRFHSoKXBZryd6vd1s7gFHMj41hLvfrckWQM4YS8JiCdURmYGU47pWfKxM7FsRbAYLNHnDk8iVwubFsDHq5TLpz",
  "key13": "xeRYsArvNq2goMy6fqxJjwfqvJ3Aux8ht6VRFnKhjX2uk6Nw6vm37h7cbYNxEVh7jdALAH1kYAspqXL9uw9tDyb",
  "key14": "4QzWr8LX5o87Gbt7MAurA5352GvExaQRkFZuKdLyv379mCJwC24fQbDxbDdTfdDen75F8BmZ66Uea5cfPUigwzaq",
  "key15": "HCcdu4nT4p2PL47HQL3KCmLcT9mJ7CBBEybVSA4rWD1e8V5fPnWfDvsfgQTDLqnS3xir3S4RKrFrbtjQoNf9eXn",
  "key16": "2LseMKAhZh8CUogtJWCE4zd3aybLUkfqXVscJ7bhz1WYQLCZLEJJX6JcpuyuCE2wFHPrpNKLDZbiqycqYEDWe8Q2",
  "key17": "4gvvq93PqWJQTB7ohVv2qLJUcfmhFMZXhTf4UZNQQvkPGNinWRkhvdq3EKBdoVLob4GJiD1UgpQjoV3cd9dnA2ts",
  "key18": "5ji9fHNoYUYCQLoaGbjHBtz1eTme2QpRfcxPvhUk66DhskmQnXd4oLvbpMLsxbookLFpeN188dnkDsMSauCcrckS",
  "key19": "3zn5ZcEUCxBLQtKDvNdRsViXznAMrbmZbxPaLHYCVz7cDR8zxvD71w5ZtmD1St6VVDRsEBZXQ54MzL71eGTbRhkB",
  "key20": "27LLvLHPobuQd6Lafv8xTAXGj5hneShdWd8Y3nfYDA73RLagB5b46JXWcogpbxkc11jByKD5ewtFFeBsUAcJ9LW8",
  "key21": "2k8c8tdsb9wh1La1PiaH3Edn6S2KGArYuibC9XemthTvKRnJmZQEXRUKFBFPNjkZU1WhowdCZXRUL8HWbje5WKxe",
  "key22": "2TLENL3PLzkwSb32B4UynCh2ct88AADZGPhcTj5HWqsHtwNs4fStG4DMCMgGKCcvpNMjbta7grGM87PK5MmJigeq",
  "key23": "31z4w5juaafwdaJjXwp2x3UydaAgvChrj4nwL3Ajwxa3a3cggAWT8URPq3Umxs3QoL3aPoe6VRyQAkitohvxPWJF",
  "key24": "3uKo361TZihpTgZppyhR1kqMQ5Tfw16HesSsnA8LgP6sw2VHFmZLXAthi9dR1TJYDCgMkkYDu8pY1rzuU8q2KBd1",
  "key25": "3Xukn8k8PFcyLrr8RYwWVcQkFSAyRDipeuGeUA4qqmFwKz85TZHxhmz3pWHiWEeC9dDo6uokMc5nLHWidz9p2NZW",
  "key26": "roKgWhKeVNwsTUd7Dtsg9EtctimCMcqHqfGGjjaJ7kfZEFfpZ3EsfWLcWUNccRiHA5YabJRe6g29ggrsbJ3gWYu",
  "key27": "2MxYQJDpBcGQ8JXdBW4S9ZHmg1Vp8wVRYpJVvJTQ9T1TGiPUxME5GU31kUJhV2Z7aRb8Vg8QuZZSg97GazcXNWg9",
  "key28": "Bgs512u3xTbJbkrhYnPhuG8fPXEJPWycAfCDEbwS4rMxN6BLi3ZLqbtmsQkaQ3P1GQWyYtZhjTv9hPkrA5HL2MF",
  "key29": "2d5TA5foXrve6HpYuMHXmBPnLtF5G9FYZSzExFJeXBZPD4GCVmCsDVtSNqVHJpGWvSVH3d6S9PMY6VEgWbDoY3CD",
  "key30": "5UoxNew6nrxYC3qAVVQYX4zBGQxa9jqnKqkCSF7ugc4y6QcPPtoeqRauSZMruYFpuCmNWmRPkNYwKXLDLR1rf28A",
  "key31": "2UQVJcfZ5XSkbLk7bFm1UJGY7Q4KdJhrGqgNhXpZ2BJEPJkFAxMpbZg26XmWLVNqLDiqkR58JyuESvPsjGUUGiQt",
  "key32": "2s9dqqfmKKVgFp1wAEJYmvNeCBhMQUkqAGr5F6bTogvPnz8hbsqFj5VaRZCu5gAqdG2eSvXyZxgGpBSvLCXfsWzg",
  "key33": "5GsDzKYnMd33TrdUDQgfPVvVmdHBsP3BAWt1VuszoaWaanTpuWJXR5PWzzT921DNW562PjeQnbYvNWpWJN6TW9dz",
  "key34": "mqk7uYwat9fw6tz6SKdbrd9YpqD6d76DPJ7XppeYiASwJSvGGdq73YyuDgVxnjxcDg6MBvK8ytNMCpetawKi3FC",
  "key35": "5PZP9822txSBBwNPScpsve4nb4ZsY24sBPCjyLToLJpVxfo2FuGeXsaXmuFvR3YA9kFeHFgfKPtco5a2PnJ2Fovs",
  "key36": "2mehJjwn5zkeRrGnEr6V12TkvXTvsU7zP1RnDZcMkqaiTLw5RKpCcz2ApPwTZum7YLuF13cMnS7TtWMY3W6duATk",
  "key37": "JYnQeHKfc7gb7XCx59jj2AyfRCC3UBcPQErEDePAtZo7Dccd3evEhnov874BjTnc2KU9AHnriQXASbBDToXYvXj",
  "key38": "vJ6gFXVen12kLi4BQpHZ3d27MU3GFx12oVXaPCoys164S1WGCCgkaN2i7rs57WWoAXVjbVmxMbF2DFPe8LUEccd",
  "key39": "KFdb3ZqbLhs9at91a9a9BfJFdGFrZHs4CG1XCzbHBhNHYPmQzeawF3D4YPDQvZppJVaW6htzeB8iBd51VXrK7t2"
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
