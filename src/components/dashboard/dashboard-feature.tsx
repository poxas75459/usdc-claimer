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
    "29w5UhLcW5uYwZFo1UWcjW3AoUgoto7xD7ijt7s6zws3Q3g1Nkq47WnsURz3n7pzB5uoyigcddJHtQNwTFpmAP1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ULdq7ZQeeVQZSqvmmxzesRWbiqjAXLXgJbwDKhhL4ArGwgdfKHej9MU2AGhyFDvXUicXik4dzf1WomaDYaFrTt",
  "key1": "4PhQHG74Uu9JDbDTPZA6tGMikJi9DxrYRxN2uQBvprqRipXV9Syzjinfj9isNsqQzwkNTGhbop2uYJHunNo33STc",
  "key2": "2B8UUL74ds5LRJzJJrkDTbLgxkjUpsn2maLryY5ncnUt8iZmdNw2V8xeLxWG1rEUx8hP31hzNT47LngHBAZg3x5w",
  "key3": "2N69a2jSbLPUHJogFLYkrA9Cdzv76NXWknug87NjydBmnTmkxNaP54cuEpRuBZJoDiR1x31Bx7D2y7ATv5CFwS8A",
  "key4": "4Y7owPrgBH8EQzzkUeHGLBVQo2EmH8bRDZpqvpe5nWB4TrZyCtvFJLnDM8XLnc2sjFuRUg7RPNNhq8T8e9t8RZsd",
  "key5": "43AAm9oggc6FnmKcxqzMgkj6VxonPpnH7p1Fupo4tP89m45Twc1vUB3XsKjdNeMoRhzMGADXuwBc7MQEdE6XGodR",
  "key6": "4wLZjnrxyCr4KYYhmxmJFEgqhJG1ptfBgLLDi2NgE9Vy8D6a7eUnnRiCK1q8vPip59DH8bW6ZHptzPRsh7eeDJ8e",
  "key7": "4BHQAPUk94GaNJgaMHxsDv2ePd2o2hidU3HSKt9NNMHQL5WQstjwvKJi1miDXTzZ9H2QN5uc8reHeWwJAF1P9hXs",
  "key8": "5Wm6piCHycySRooFm3cyXufzLQye9Kb8zDvPrMQcKtpfQGeHJYyUeXaszPUxUtfoMxQo4dV1SAKTj485SyzcCq7H",
  "key9": "4KaMG9NFjZDY396RRCYpbS2Zweb3Z1F9nrtfqy29rBsasKdB7qWeLj8GvP5KxvGh7g9ZdTBSfJzDfhxva3Dpj4Da",
  "key10": "389Wvs8K5TchQ6Dgt9JMuXjkYcxequnK5xbv8U3FoCrjSVzgoy4DC1a2Zff2V7b4DVMmYcZ8rUUvAodaqygPpDkQ",
  "key11": "5DMkATzcUcJA7q3TMJoVKf6ZcffXw5wnyAR5VYms3YpiSs3jwfCuM7cQZJMddw3vWykt4Q1J5ytYNTWhiBGpTABr",
  "key12": "2WQZNZ1Fo2mkU8MkZgds7yj8J6KMKnpaP36MMjQeNkJRfyz7Vv935ovxYDkFiKkCCinjJunVsiwmAUUFyckXvLcn",
  "key13": "xDDdw71GDxFn789NzaiS19bWRj42buRfj4TpMdRhF8UJdEX2P9PXpLrpwSzFVV9haWVV4MvnZyee6af8AyFhDMP",
  "key14": "34fg6P1BFMhniE49viLBVWNcCYK3ZUNiMJerbKCvJta9wK9Kv633ZK5HuFL3z3qprAGcGk4XXLDJwSqhJt1d9sJP",
  "key15": "WARRoVpW7ix4Rkn3sqJMgHZqAjd1TwLDGMmnWDf4SdwQn3XLP1ixzNp9AmeVPXW8xAVpF39A91pf6PbCZYiUzdu",
  "key16": "5BGZBaQqH7h673ZkgrxHnSaspemJVF4f43ksZDXW2PC4kR9knnRcPwYUxX8QP1QekA6MDKQca6AnMYAmjD9TNZq",
  "key17": "3WRztYkCaNyJ19uiSLrD6923xeMETMyc7cSHcbzrBWJPpjs4xJQbU2dWBpcCvcy2ytqtWL5PqQMFTB6a6z7DsMAR",
  "key18": "2viedgCJa79Sds4TT4b8kEqEXEB6einT8dMFNrdq4j7zpZYkEtuuYUmNLYAxJPfeHWYraS8bBq8J2orb6Wa354qu",
  "key19": "SDwbkXiwQeF4ZUn9P7EAKMvaBZRgMJudsiZB88SMVr2ZynxaBDuoE2phzMZF5p7dYNvoefw5da6G8mskMWyHJSy",
  "key20": "2sQhPdx2bQNP35xynX3rVsv18aCHKusitY4bdx4gWc4Xs7ThENFYbKmHmJLRWrVHDw914k7Fqd9kt1CvjD7rjqLZ",
  "key21": "5JE4ZxB3dNqLS3qvrmi4ShRoU7B2AfEnmhfvTGawbtywDF1HazKg5R9wVj2Vuq5Kfn3fZv4KyNQFThbNULVb1P9T",
  "key22": "nwrq6ar25fzi9Ufeu3jjAdCBVvGL4Ct85cujzDsjcajmwQxvsQF6Yqh37P78xxtiLbEDmHAwV6jx7eELYsG5N9C",
  "key23": "3Bsvtu6igyWXC7Y1tpzvG9Vx4txr86CG7Ay9aezZ3wvgwiqxdr16FWt3bZR76saS63CUSE3tN91JUrKeTWFaE145",
  "key24": "3sKmXC3VESNEx2ydvaucvJzYyhNAV1sKHgf89GJGD38A6zDcuCkdxJuAhShu38e9CFoLuYm9UFK2kKidfAQryzSf",
  "key25": "4uG9XWfGmxevq3N6SkGGDDRnwCJhv6Vbo6XM2Z6saVQit9zwALjWrre5mV4fiyzpE3GAiYuug3RoFzFVFVZJfBwT",
  "key26": "3gNNuoACHzs8aLnn4jZ9U1h3bMXcgTMaEQyzFyc9nAeLSToRPmDzZgp6atoNguvEEYModU1MwXmrB1C64V3xCBtp",
  "key27": "irp8rYscN3s57bX64GdJPfoUpmGDkyD54Erdh93svfi8dJioZPmXJn8jVaSVqjddL7M9pHgXD9HDsRY84D7QD2b",
  "key28": "63VWhq5hLjc9EjHKSbsqQJgNCSgstP7BJuv1LpG4vxsN2ixp8QLgj3tpDcSnpuVBA2aCDSgsneFDdj5pWvvJHGjt",
  "key29": "5VboNz7VE1qovvdMdCL4DfTfGbytHSSRgqR8gJqdq7dMyQ4AGztLiMDuXe3ib4bkifAu56X5u6a26YqtHvBPCPp7",
  "key30": "2KR2to6aMbBjmcfuue6txyqYJuaCfhLNqN2ocnadGqtnUT7gRCWEw7zJYtALMrpBUdLwnwuS3n5GNzHCPm2bgNE5",
  "key31": "4Q3mtyAEpgVw23zxBMFgoNK1KF91hyto3V4cyKchD2CtimgHnyDLSaGGVyQ6U8tCrgeosHk4Nzde5dTGVbzHWu7d",
  "key32": "4tbMh3LtLrKzB9RCUsukA1KxUwjKPrE9xMdQzofr1AqTcxSpP3mQdE9xXtmLJR1x5Q3wUNfLR4aUjYNt7wuz5xRo",
  "key33": "5vvEi1vCHRkSwYCUphxTpTxxfKoXb6LuTFGFuTk9FR56ovPPVYs68rF6gj1hDWcEioCXGuKVVBAxXntFshcgm5qo",
  "key34": "GfwmJfbATwEGXi8ANuR9MB3q21YnUpYQ8cnSX4PnihiBdUpEiGZMQ7tNZ6vM9Yu7ZPVtcKNX93St2uQtDutc6aH",
  "key35": "5mK737Ln1VYXhduRek8zYCNeDSAdoLWPF1LMqGxpV1anEzUtTyRGWCvqUSzZjpKdxhbz7QdUWknQUJoYvZxHJLKJ",
  "key36": "5svJeSpq16HzvVUu7ZVTqzL6AYaSjSVoERYL86h7iaA5n1M3CnZkijSMRCXo5S7o1Fz8XYfc4j6CeDLyP6grXCXx",
  "key37": "wKiffVzVy1gSTsW4ARhCaz7WAHp5JSwjPrfqFZ6kGHy9FfkHzMrrbQZL5WqczVS8Gbr3Gr767yosRJKUTposu4b",
  "key38": "4Qudvmf7dcFSnjgLwpQ4JYbhsNxPWLocvQaXPpnUibD1w533tXdCAzLD3AVyK6ce6vz4zRCiJe32m8xSbwEetpzV",
  "key39": "2kn6eAn2frEv6TaCensJdpmEna2c4ns8PvW1trQNJyVgMdrhKj84xcPBp9oXhMqzHBfR3YEBFL468Biu62GMkTQJ",
  "key40": "2r1zSEGu5Cfz5Q6taa6fsp3jRDyctfPt8YN3gPsGnM91tzN2jAZFnGYgbQDKHy5THLpMFyCgbYGpxMHpZK7oaWwT",
  "key41": "5H8aNmp3rkrj4MCFrY8AxAh7tmPGV5W6ZmiAMgeY1xevSJZWrtMvhjM8W6gCgyvmknAJpJM2jtpzKb6VcbSQqXNd",
  "key42": "3pWN8ZgfSHnVHf2sAfxjZtgynNLp9Yprmq3y2u8qZutp9rEBsEgoYCCNu2nzs6ctoP1wcr42iV35cq8qgd13unXt",
  "key43": "4V7h243qBSi56i5tqi5TSEBvfVoWWK4CwZox4vfPTDQoF735dF4huuHEnacVXXhu9DL82BBPtpc19JBZYofPXL2i",
  "key44": "3FNhVcd3enxc1QTkon2oh5SThyCtNgwpFPhA9nG6CoEoPKuCoufD5pjgndCQUk7F3BaxfdA2z4183CuZLnNkcx2R",
  "key45": "5QA77FRJSP1o5YC9wUvENV1AJbGB4E9jCXEw8fPxuu2bSjafLJibip3WiYdmHVNj6eM95SxHdcAZDopap9Kfz35z"
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
