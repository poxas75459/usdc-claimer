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
    "FeSWCfF5N7s7a4Fi1ycY31Gmb6xHAhS83GTwe2TxF42qoCzumJr1Z1Jch4MzUPcZQK5qos6DnyeDmBQW4Hs7HEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDGzkFRhELCU7qKAEccFyti18VRwDgDhWdFChMDbqYdjS1svsiC8w691XGRHw61g4RijPbG4vi3btXRbwbhuvx4",
  "key1": "Q5gXLjMg5bbabJRbQLtg53WB4vCX1zwpnDQHA4TDb98hm3eiNXF9c6G8nskMLjaAvU59mie3cp2qweJP2pRksia",
  "key2": "4veuBXfAf6YudhKAkN5K6fAhu15mMiWJdzoaYH2AHX1rCAPDhZWnQi8LEWzavC55ypaYHCaorKnFbXHpepoPcYBX",
  "key3": "5CkBocmQJuFg3KdHjy5u4139JMvXonhh3Stnmnh7NNqi2wm98VexEgtFkbRwA61j5CL9deYVE4U758RbAo4JWWmL",
  "key4": "4kn6xQrfmhvSceN8pJfGTjASYL4Aca9bdDDzTiRQvEWpSZBpMpmH9qd8FUYTUMaDyhgaCztAhQWMp4KnwSq1KVnb",
  "key5": "ky5G3tScHcXULKucGfKkZLXd59EjEp2uHkTyWWm1M5dyHr12dRP91c7pqBukwNvVrjkYxf29yvT6hTAEBrJpLhp",
  "key6": "67VcLmAm65kfXA95GT5888878BhQV4FmSbkwDYgrubPvantp4TgVGCo6Kki73qzuC5Y5KpkC89R6NFQq5RtV23E5",
  "key7": "AZraniPL2oeJ5gfjfAhYGMTtX38bYRa2wpRLXAJRWw8BruZcSXngVJevf3zTTEPiATTUYomr5zeT4BpNdoVtPsE",
  "key8": "tCpYZcgLXVrhCmphn8FLrQTxCuJM2jdDPJbNvuzVg6CjEZBAvakdaHksDx8hVBjYeBwKQnZUDNQaZ5DwrDqA9Lf",
  "key9": "4WA5r7dTMpt98H7EqQVeJzJ2jS9ZqzQQJVMhCe7qRZYvSqQBNZ8gMwMxB3XTc4gKugjCTvxyTse1wLEPAreA2tUa",
  "key10": "5mc7XS8a3WreVF3XjpguvZhz7tRmttFunLNiZJuQpzxJnkzrYCRjn87D1ePjSWyBCpNeJqBYXzxKqrd3b7oWjuhH",
  "key11": "4YGojJF7mRveL8PtPYReaQsvR5VoNFa1ayC6GhF7CbyhrwyhoMx7zsGuyCjYAGJkQxQZM6KEhay4cprA9yEAzJsx",
  "key12": "5cxPLNrmtcnG6zuGnLiWA4imFe4uXp3WL6eojxPeBnFG28mUZuWbgJNMPVPwgtEGrJhmSqSvwgXpjDKyarp8ceY",
  "key13": "2SV6W7KHEyntNhqL3jYWzkrrMM1hjxM11r7mcoqdQHJACQzEjHyajWU3MkdmuZX8vGTk8PVbEjizQhwDZTWXQPv2",
  "key14": "4ynWMh156fX8DKfVHiTsvm1czsmTmWZVgc8N61mdcRbzjYpvKsKHDAHKFnKUbXJfNUZU9XXQWMrf4MhTMWY4QFtP",
  "key15": "4CfDLx3hPVEuoJv1nCD8qjion6eW7MR4B6Ka1kCFWTpbDMHXBvLDrgTwyWsKJcEDKinfF449jPXXaNa4ZF39n2Jy",
  "key16": "48Gms93qW4KERBuuQVCvVAPJPN6v8SssF9EU5o6p19VFQBGAwD63hc48AijaiGVYm2VuDLnDpSHers8xUDFVoWeA",
  "key17": "PA7LHYgZEGCVuwFdmwSW5jfWhXXhiqn5EmCUArhBcFRKH9eGQsynMJec4LhvmMufzsJSgejaPtYoFsL7b4Mvp9T",
  "key18": "658nu9Zi59h8pMwi4QiKgf5QCSgtpEkHC6VyfYj3hutuz1S4kwweoShYyxHYa5xN2Yc79vZVUU2sNeKhXsyaKAuY",
  "key19": "nQnAFyQ9GTkKMBXSjivKPGabfPaJeWBBoq7TghcKS1qGALBd5tH4BeMMQ12Vaf6LUwrDhF5jUZtL58nmP1ri2iy",
  "key20": "5fnwaRXvCigiD7GfyqBgxqoeEpxQyz95TA3Qfp8eoQ1CpF5rDdK7KF8p3nmZNnFRGd9CgVfU1aMt8rtvwZsv6jPe",
  "key21": "5FfxAA5vx3Vf757JZj7BZEK1F9UN2Byaor4dbEGkArzZvpU3Mw3kMqM4iMUfg8u6j7ys9fiYwAMYeXGgdowbBiFN",
  "key22": "3jYYK28rmg2fxudgq2sPTnmVA4gr8GMsQsTXy6xihdysL82sn8xcp58MUrfoJdm3bz4UyZ6qsZ3TszUbW5Vhwp9U",
  "key23": "3C8fWKnN1YSSCoRMj5MCpr5NwzCwGAA6pQwCqrt29pYvJfB5ib2GGuKzpDAafaxzVGV9e29NqpZCeYZZNHEU3xdv",
  "key24": "4Y4ug5Tc6kzWSsmPR47PkhNavByAACe6ADELszqT56fKBo6q7i6Nyzn6N889iUmwf7furHmytvFjGDXPBvdzBDyv",
  "key25": "5JgHoKf7MgT4EX4shxeRtsreGFcxvbeX2BM44AkokKPqyyeBWw8jBF6RxXt78kBvoUnsMKK6XGkjLYPRhEaVihAM",
  "key26": "2aknSvMWbERwJM4GQh2NYYf3FsXJTidQTpcebNM54996H5nK5vpAz5UxR8uyjds1wSDmFKJhD6RHyUJEu4wwf6Bc",
  "key27": "5gXUMMD9Uv9UpUVMKfKbbPdPsEJksL1agix2hoJS5mKMXe9hRQDWu6fQnUGPhz5wuMeGoMCZW4B4m9NtHigcd4gN",
  "key28": "47RYESDYEi27NPeLwkGNG5wSfpG5aqaxjJvq8g8xdB5kq6uiw2xmA8ab4xweXGmFjNtwnE25CgvAevei2nbc6xBT",
  "key29": "BZZ8NwQDroShUbhPqAFsyaokkHdRSx4mnZ4WfhriqyXMV2fEv4cdSE1NDtSCsszYbv1RWaK4ydpPTuzRhj1Ey55",
  "key30": "2XfeKkEQuyEHwy89Ym8yEuTAr62HHFdtFzNmgTznkn4t6gn2qoK1MUX35P1x9F3bRW3mzwYp1UkSZ9gT9w4mQxTD",
  "key31": "8d4QY2NBgrvPbqb1m5AMN9WZPa4f3qtiZfcRSLtMsr4kKw6jWdGJV1JjEqSowLTXz7vPRTTeAqDZSU4NXmPTFvT",
  "key32": "2rFoKNjEbS1w4261HwzZfUY1rVo5zUVrTM7bUPU6KdWrm4iQdamnJWLkVoK5GmeNrFE31V94PMFvctsyZar61iyv",
  "key33": "2386VCY2uzyiZXCFS2qAPdcFKzQSbg67c4X6f6jhSc1raDE9Gsp8qQ2uG73PZvjexd2NLkLFQUVvD3ULVE93Z5RA",
  "key34": "Dd5omVwF8jhWLiGQxuk7Wkt85bx2aAWnUt3HCtyUUMwDEiR3zmQzBC8xFs34SoLx4UQN6KfyZywuPArzxnYwf5p",
  "key35": "55Mb9c9UQPuPhJnoKJ1Utqt3wGmKsY74RYhrQVEGuQPKWvE7G5X6eAiFzjpJ518vQmhAvduMsYmo78sSfRGE5veU",
  "key36": "35PzhuQya7B8LpSP1oN61ZqN242WuKKnPc1s3mi7XirViAo1CEAps3FvZG9aboXh29yPZot76Cjv8AgM2cWVxfGR",
  "key37": "4XjXxuiSG3t8heTBcdmjhrPYBUpmJVKerg8LL4n41ZrYTwqmYzxRD63P4Q8zQyt1wtEdGRdcr95XGcuZp52RBucb",
  "key38": "YDudBUmCCs8y2t7AyxndPmu8re5ivQGUEDQ57TbSxLxYeRioRPbKFqaJLcpEfKoYNv61AUaPq4oNt4BtEXwTCxm",
  "key39": "3hxtjfVp3aZYFV5gEW41aybbHAxjEW6v8UpNG3y4iTAbX7rvHpcnbhyYzVAcRzjYbEW7AdjNCwQqGrmhuLgiqDk2",
  "key40": "MxwxYbaeVnmcWXhgy83vtReD9a6Qj4EiCxsXvj8237oF5HC6UALWHiSDbDVQpktG7aH2xaxVgxxreBjwTjnXYqe"
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
