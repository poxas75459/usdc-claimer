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
    "2e6rvSH3z456ohgY15F4ATZX8u5DMp2vowzUECZVr6ptqtyDx67eRyouCfThSccYyB7cR7QWP4oLwEiQikSw4r94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRP6Ex2M7vcEF7NuK7KPonBK6mPNRVGmwocbrYi2vqA1BUM3nrvn9N7uQqkb3A43ZGgyzvpNTtL6eJBguopATQk",
  "key1": "2uG4McvNKbi7eqRtFaeVhpgea2wce4DLCk5H95gquoRWyLUGRYJuqo84ePSmBJcipMgaPhBFAr1W9HcVjAPJTShX",
  "key2": "3VtVpJScSjEyPZvNjso6LGfWCYJsrSB41mBb2KbJfFYw9CNxvw3wvKa1Kcnhp8grvM9ohqGJzymHMpkPdJm1igSK",
  "key3": "tQma5ynZ45q8zko3sm71PMbExkGSMBrZgdsUmjeMGaPyDNZrQ8qX5U7ZptkvupDFWULpFmFQu9tGowQ9mu55QrC",
  "key4": "3cV9NF4a9f5Q5fasGDXYUUu3Z1A6SyqubxxriAoPgQ4x2bkzfQqGqxke5iBwmqgSBHSsJzWZhuRRMe19JEijaC19",
  "key5": "zp17j53EtJSbsUnbgFS7dR18GaiCJjuPcQUm9JCPiDcSRD62D6ofRqwc24w9LzrRXFcCEBcxTJHDJFTg2Lk93cW",
  "key6": "4Sc7bmRBS31yugaGnVadM1uSm7x33QaGYA6ijYYPxXHmDXvMrtetSkFfayHXVc149mE7Tz1jNvZBBeADexh2bh6D",
  "key7": "2AMTNcXG9Yco5YPCJoAifhNbPmKmX2bHJqJXrK22sLLageBcRnm4G5Wpq3Pjkk7AjcHkYx3sCCkpwXF3MauWVdHC",
  "key8": "3966iaZnfRLGkTpSGAHc7xKs3QmfrTi6JSoPWHJzaSr8S1jPry1XHYoQUC5EF5GAtKeu8QqRMESEbkXvVRfcZeDZ",
  "key9": "65Gf6jnR7wSz5kPooPmjSAV3i4Ut2yrUpUsdXcrZFfCtgkq8GMYxTgJ9YnU3msCcjJL67dqtQzcCFaSS6K2GvSJc",
  "key10": "xaGybJ1QjGBtxfUMvfV9HWcXjLEcFNNyzteiG6ASSXmJRDtzfgmKXj3c6HzB1Um572cnu1NNrU91sfsGtCviALh",
  "key11": "3kbLtK9vc1zEuZixsykKQScqpGqtXq7YsNhsvizaNUsnxDGeAtWw1K432op7RjUFeXa3qjhkvDWP5YDPt1W9AjTw",
  "key12": "cJvTYAFRzpU7EgiCSjcGb2n6vML34YXCg3KsXdiddBaR451Bjo1sDn87iFjG4DyVpWjAucGtLy6cXEP54UaBqDF",
  "key13": "27kbM5ZM4ZEg7uUWt6KeFQsLvgT1rVjJSXVo1RC68f4LzMZAjK52qneUq8c6C8jB9UF1jzFwSFgSydtiCBfWGFH5",
  "key14": "e2SjLfK1heY3ugjuQDgMwZHJ4ktY6Hta4E6RceRXqahNLNQ8W2SCDbirpYjsUx8gDXqmcAVvgwLnTX6eQoKL56r",
  "key15": "25hwsGWM5TPCLz4aPJQ2W65w5Z7NGtPhJvdxaGbgqAB3ZVYfdrYuWT84qqqt1Sz8ut7bUtiyR7d15Xi6mn2PyjWk",
  "key16": "5BuZGArL5chXdADCwYSW2H4jJWiTuYctah9t4U53XRKxRscUkKJtY5G13LQUCVpffqYEeqLcTYH2z92M1EwZgPen",
  "key17": "LMoJwesaZ3DV39ZikmpymtDpDG6vJuy2BRQdhShi1FcVW1tZuSNxY2D7SSuGZ8qJ8iZoS81LDkvGkFnXu8S93Em",
  "key18": "2DnCNy6Hftz15GnqWDJbBYsXtnNhQVvX4Tmo5pRHDXJw6jFJWG1Yf77Ekhwyv6KHkC4YHwUHoom8AJYQ4h7B8qe",
  "key19": "5MAsN5kEHUSEi6G3zYgA1kQkQwr53J5yPYk5BMP2YxgP5C4tjMcntt7Jrbyh4m8Vivw9m1twqbxMB9HLXhPVC1Gt",
  "key20": "4L881BisHaNAzsbip1niG2h3kUtQkNXZefwnKD9BdLKtLfMBSbwaAg6uewhSRZ5LGnU32rBVa4T1ewJ7QGHeJKEP",
  "key21": "5qKtPMGn9VQmdFHCr7aJUEk7AFFT9ywSwQTAM6bnCTwogocmZXXGUsmTL8EmJBuDkJw9snHbHkPj3GouUJ7ZNNXo",
  "key22": "2zqurcY5cMZn526XfmyxmYES3mUDRG6avV9c5obiD9rikAxFaywP6bRK4TD7sJW4gEWGsKfk8Zet6oNK6UKhosdq",
  "key23": "5Q4AaSMNLLLpJPkWtFpTZ2W8BUH8ZQ9cnwBht18o7bKjpy2zNocwpLQMTD5i1hKFHQ6AJ6v55QFybB7uLWALAMZs",
  "key24": "5u9wGjQQB4MMpf6vEy96ni94ujDCNp5GwdKPTJvMaDGAX5YUoR9t2sRX9CVbAP282o9Y6qsWXbJEzfM5iFhpeELB",
  "key25": "2FogNBYfVJ8Lfeqvm5aZxPkfm1tGj4zDnMX3Ls57oqMEJs1MZJ1mXQYScPgjUN6WCKiDbyGNVs5ga73n3nAKeKB6",
  "key26": "2VnoKUx8iJpYTdHenmVM9MWtfue9tcr9MtBGAHuRH8RNH7DMHRFo28vdyHFZLnjFGi32ivvL3hCD5hnudqw9KJ99",
  "key27": "5Wz2td2mqfmm9wiTGvXyYUUCNsRrGPsSDb9hY6JGuR6cB1ZRCeiqXhsNGfCfAFEXxcnwmhmSCdpbWAV3svLporam",
  "key28": "4U5vRQ8kWQ1RFdedPY4hp1N7zBrsNombsDGtwWcgDexRK49m2rvmi3D7T9qpWXrd45yUrXs27YeYHH3GGD8gLE88",
  "key29": "4LmSppJFyjWe6WpSizmPfEYQkbb8xPZfd4pRtFuh2hi71MP3TuZdR8QzdzwZdoTdv8FC4ZJJQbeWm14xJSLZ8APY",
  "key30": "5AhctU14zSEd8eyUn4TyrpaF8jzeBPbhYk3vfcJVoG97aNan4cLzfHHPFVAj43JynNPUNPpUdhy7uBWUfazgp6Vk",
  "key31": "5XRMVxDhopwR7T2GaQywTENtzfJorhFixYH87jxTCDdZo4r5vJ6MDXwFHUJDhtvYmUkTPng9AU86af1hWzcHp2u2",
  "key32": "4KWqWQgo3k25daptc71Vk12TLZQUVE2REZK5367ASfQSpjrNQjNrUgQhCsB1HkqFEwLCPxqscWDyLAE2j24J9mLH",
  "key33": "3GiYrj9gukDhMmYByS2KP3xPuU5usALSpMMBQ8tjcNLx1MEFbw2uF2m79r7mwwwkgYdUqVPKMocweAAvkwS5pMuM",
  "key34": "2Y3cfohtnJcBBbYndk8H92FE7K96z7iDdwRXMQhF6NE1fxaiRL4Gc5QBcHkse2WJeEPfe6Scq4sN6SXmbEmyBeqC",
  "key35": "2u11Howa2wvForUViRx9MczaDNDWVnDWrDiELc6EQ5ZdaaRFJe6XooCybjimW7AzahMwoXBeVk3voXDwRC5kPFU4",
  "key36": "y8CvtV3oXjLs2AeVJAXfgNtKMpDCZnqKQLLkEKr5oRcWsLZXqKgE7FupPYnFi4n7G5NA4HVsP1AxNZeJJ6Fk1xq",
  "key37": "2AnvvfMnns5Jf5gCTHmJ3dFgZ29GotjzcpzY6gTCekzVz4bFwXYWBYeiNbWM3ecs5QBGsxdGtGYYf5wDTfMDfDh3",
  "key38": "beS9zRyJBVnagzSwEErFwffJoPkkbFEZgzjtaQZwZ91tLQwvuW1DUbdPivip68GsfgQEuK7hjoNWTayTvYPpQHy",
  "key39": "546hUR64rDXyCQkobaVBN4vYGj2dG6t7Nap3h8Mg8be3Bniy7vRvZ84xr3NJ5XdNTuhpFzkcXkbu5dB9bZWJoAPS",
  "key40": "5dM5UYxbfHXVWa7wrjXu1h1uw6v3dBcPXbWLoohk6ALfH1WHAqrEwZzd4M46S5zBE2GaPym9a2S8R83pJCvyP6e4",
  "key41": "2j8Knf576YZ3MT9LDcgq3ajk2uDBz3iDP4xDLr9z1k1fZ2icf1oJs2sKBc1Emz5s1uN9RC2vckzcecQzEZ2psNWZ",
  "key42": "uFfQVKCbvF9gmyYdEBdor2am7yuJ1EjCs7vfRGkwTC6z7n4ZoGbBGFkq6KE1LbffMLU4EPChgAzDQr37zxcSkfr",
  "key43": "2REzsUQuR8XUPfJwqfByuCUW9Cw7hCQh6tsL7nA5GtbbzRSe72iMEuUHMzosv6TwHY6ej8peF3kY2RHxWhz6r6y4",
  "key44": "3UpmtousNFkYHrivPtKHUFpUvuAkGjqhdjMSZzfm6L72gGFeEuzUBcz7Po6zmcrBHsCzaBFSipPvivsTxDnd5w89",
  "key45": "3PMiZavszTXwVS9HqzobPVZhKmPv5RGkJjJiUsmTFUYVryYQ7Hhx6UkpZ1wFnyUG1hnQ3HUKdA2Pd3m8eyHYN9WT",
  "key46": "645nRM2iawJFcxvsG6C8ihmUzriV6LrXzrqrtoZKrQ6uMRaV73ppHfYZcBt2JHr3yKZv3fLAkrdhv58sLvGUywCe"
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
