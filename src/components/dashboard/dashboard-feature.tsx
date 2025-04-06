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
    "5xpjBzedu5xECa7kkhQToRZd687dYpKRAfoRv9BtLX46k7q566NAZCWRtcHaD7ufRcVG8n6D6xKpoHxcH4w8Qn6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZS7RheDJfgUFfHDfwDRUtXju9SRXBMmv4izab9Dchfarjj6YdCszZxAFtX2rnxBjGCkQe8ZoUKmfs617oEH3tf",
  "key1": "4QTgaW47VFzHXTzfd2GyxQ55ZDv17dT6J5wBr3aE8Lsc99GBidGqb3EgVAu7d1QGTqcqQNZHDtB7r2ZVH5egfVCs",
  "key2": "3eyW8abKtejMZMUVQ1Dmgjrbfd2wShCAwssLTXCm3QS7c8RDRFLR6izDjnCeM9mmqwxRB1XmRaqJx2kaHfNgDGVm",
  "key3": "4tFiaAGckLaeif5AXWc32FdGdfkL8hcLDqW4FU1YqWih3BUgUm1FSnh4qJCJFU2Cwx5jEtrFxMQ5wMWFZ7mcxAZS",
  "key4": "2SrJe2JcDx9pTWNsQiwsCRSrnCBSKeiuGmBJaJV4vy1WMQpQ4ZPd46VvkFxo9WUwEfDgF9k3z6ALA82FVmLebJ7r",
  "key5": "4gpCk2TbpJVMAiRazVT8A8y2uzLjtHiNwUx7kiDWmaNhma6TWhHoApfW7K2gKE4fEgfi3YHxR5gVBw6KEZLdbMNU",
  "key6": "2jFWP47doq3C3qtxnvt3M2wmULrk146G5DrX1wvwf1cmaUco4GPsMJgLuAaqBU3LNVMowTMYsJUoC5x1fM6dXiWd",
  "key7": "4DTcg6DvBHeGXoAj6U8jxBAgeN5GZTL5NsdM17dMaHvfKKLNA9ZZXfGwZcFjijk6E6jK4Ki41iCyq8FQGa4trap9",
  "key8": "5j7qYEjVeDbcTGN1ihdJT8oeBZ9RyaFTDdMqoKoWm69hnxNZHW6gt8WHZ8JqUELR5y8iv3y3NV2TKfQQZmFaA38j",
  "key9": "4m8aK9r1DJYaeJJsHSWBBYr7bM3kMKEkoZFkcvJmDMZkttuyWZhoDJvSauTeu2tbwDh774CpxFqqoBoSX5t1GfCB",
  "key10": "4N7Nk3XdRNZDhfNQesoYVDpRb9UyPQ8xA9QxyK3vjoZ5sNfyPuEYnX3YZykJaZ164iKLVENhrWA2P6Rs3LZ6QkyT",
  "key11": "jps4bX3YtMCo6cxNR6A31usHZphZTQ3Km9pjHuFJurBoW5z2mytteZYC3CFYHGe38RSCfRZwwyBnz1z56ztgTVd",
  "key12": "3JnxpeeD7vHwdDpAK5LFsz1jsfEFwxtcxkM7MzmpgkRNKxoVkuX2uZEv6zeJ6T85vuTJGH8UAbSDE4cfvUdqTjhw",
  "key13": "2b381NpMQDe8wBZF8ERsjbNhASLbjz6MJJezLE1rNsynfrgmEcx1Hb76BHuhtSuRSq1AhUUgHUFaA2cLKtXf5vWd",
  "key14": "4Dq9gT13tUPBBb3SjCma5nj2QU3QTHj3kCwzxA6KxpDKTGGybwGAEmL4uqejYiiiZrVrijPBKJV28UbcWFyrwMXj",
  "key15": "4sDZdEwChqx9jxCnLux2DhXAPeaepC5MUBBuKtf64WGQNofrdDRnQnt2fvHVxDR7XDw4XmkZneVvdxVNQrExYWLM",
  "key16": "3Sw2PRq3rnCd1gPpNprQt3hSvXLEiYisNyQm4kZqWvTUuK8bbC51h8FdfnpCJt18WDfYXUj5pidtwLqaTAtRFF3r",
  "key17": "5Trh4vJG64BiuKf55eFSCUeRVa89GqchqpeTPPM1hwJMqc5o6vF4JUFfvYSDYZtoc7x6az7AHq1fr4WTaugyARyz",
  "key18": "2VPgJ3bQ2T19PbhNsvuGXcDKgaaxPqBffw7R885VVFf8aVtRQnrt1jWaNFGLTMTfomq7VZT2SdPiA6DNdbTgXXas",
  "key19": "yzgm2ZvXFSERuabEqjhUuS7ntzpxpXdhFW9iF4B6Wt3AvdLAUc3yAgybQo7PA5pwbAQA9RoY5wCnt9nUQZzPFcq",
  "key20": "61LEuUMFnvV8eQjVu8sn2c55EbL5Rjqa8XzGRjxCQvGEyCsTr1W87KaejX4kAYYjWHUkmHFF8vZZdzNkwmCjveUq",
  "key21": "4tUTMnJ4Rsc3PnDTgWjLPaPi3Rzn46yHWGkqbJe35WP6AGE5tbYTgTsYwW7FPmKztfZ2MrJCKnKy82ix27KCamSn",
  "key22": "CNNuB5kR59b8MyN7XdNb5noMcv6SNDGG5iDBXsUZC8DX8aKvwdsT5oR7sQU2kHX4zG9YxT9Pr5TvUK6BKJgHNfC",
  "key23": "2UWaH4iHapNbjEF7WyB7VyyBbR5pgCr2xtMcfatwK6sU9fQmAhe2KnJVgmmzVgYZDTaXjh7FeHXEgJXSuagwGvve",
  "key24": "2cVMrj4tzE1azTUHgaREQVU7UVCYqTtgehL5SAS8FrDFD1GeDoRTopFcJJY752PwZzpkTR6ANdpJURXWjXyw77ju",
  "key25": "5ZArBVJdLLTgM5YxiT7WTAcFHk3BBPAmyjFfKjgwDiWXnQLwCAKvTkchbgFd6Gp2F7XPPJpD3fbaFhWbAhgi1wKU",
  "key26": "3V52HLS3utGQNAbyKQCAiAEJqwoddcaoaC5b1ZpTBXJ5hWW3JowQtXVuuY9HKpPaufeWSjkUpyKfvRL623Uz6XqM",
  "key27": "4mYmeUeaCQezV5gUuSkh1AkTez4zPmCjj1D1Wu6eqxrsrWutvZwp7U8Fr8VGcp2S7WuV5onkEtvQWbDuPi5NUotb",
  "key28": "nNRF3vSqywJtkzkqocukBRp7GwT5vnaE5fnrSBT2dPH8CcZ4jPimkvEmjd27KbKhhgP3oYyWATQGA624DRCEFar",
  "key29": "25aMvpdWTFLyWhr3DYBxzLytcKS5wvgZskwoCGmXsocEkJNiD5BWA6VWWPLSuRJqVSV12AzedaTu7pjPyxo1VsSV",
  "key30": "5BzsXRabeDAeddHTSTBiSdikqUv4Hv6hgMrsDxjvNeJxJpaVD8Gvtx3jkN8gVX5kzBJonYFpCQG8mvFif8tpgZ42",
  "key31": "4uRP6gjhWdPL3tmV6oBoNS5i5qpmU1QhfTzaL3yiu8yPwCfXZgiVVvKRjwiHnW4utbqCb7x8o3Xs9yGDKy4wz6iG",
  "key32": "2XoRcKANWEuSq3pX8KYYsqQdhR87YHbnt4DNrs3KdSm9189Su6QRSviYkoXFum9e3z3hM4uWfZWuLaGWKv6mX5kt",
  "key33": "5nwbSRPs6n7LA3GcaZLZmxUSWDzFmhzYRn21T1ZQoXMYQrSazQf2AYK1jBFtQ1tvCCDEi7p5D4WvWtDdhkmpYtqT",
  "key34": "2ETa9hZAxBmNHBA97grcJwoUeLbNmrFWp9KrGZgLzL9KoiFqijj2spbvwyCHVS4MsmRqjZR28y26FEdDNgbX6NQx",
  "key35": "5TXbPittj2d6AbmiwWyYBDstC4Ba3ZAkiZDR5ikT7owdkWPtyUJ5L7JMWXxD973hwNAZz6p1vyM6VwU2AEJxMeNc",
  "key36": "227C2a2i6YLW3HTUVLW6PUrVHXkAu3NB5xdvjsGUJxCzjhTWRHRKt3j7ZhfzMVokjWoAxMGzXerjzShGnjkJQuJ5",
  "key37": "3aD315KNrsAh8e5FvTS9NeesKyYtHEGRwcgNQ8jtER38oJisamgib8TN9wdbPMthJ3fsxyi418aeN42jDSxpaBtN",
  "key38": "vWfb7xKvSThynKuLpjqErdfPw2x688MtxxBHM9VFaQaS3XdwrncXBo7DRWmQDCSQSCmo93E4K3qGeZw38mV2J1T",
  "key39": "4FEuJimoh92kTS1kJDVRpXHbyPSPJi3TqH9RDuf7az36uCuQJFyute6pjaq9pxwt6ZD8Zf2YMWQn1qpMHsVHgE9j",
  "key40": "64VbxhCR1Hv9VT4bC17X6mEizAPedWNwc42zKjYphrTuQAg4RYWujuc53YvbgTPzjeG7BY9y2J1R4ik9cNLEn3a6",
  "key41": "aNuPB16DdkHNZzJoAjjwJ8CxiQXNTDxHyxwWzAHT5WhDv91EE1HtAJsqH9faAr1Y79gVzHENXV1JSnVoVJx5cxQ",
  "key42": "5ojk6sHQjBAgUNeZrdWCYAEBwydszAMutsB7XLXymxPYS8rKHZRZfjqi38vAYGKuyjxMaQnNHpCfQNFLhWKtWTeR",
  "key43": "2aFQ61LExKEL9Hr1QNdhtdZdM4AguMebyBPWomWT7jpegGaBFHLQtEryt9mdXDKFTFgRYQ3qJifi1daSVMWrpn4J",
  "key44": "HrSdizgNUWN4Mqzpx3WQNtkYrm1Y8TrNfMvMWiqvHnUcRZYnoEJRVNBp9C3NHLC8JUKhiXJpEzmha8uwVeF9KXM",
  "key45": "2DSxQcStDq5ov9vucfkSm8baxESBpnLayRKTtP1esrcMyu8yKQSvT1xGbcmxRdL8VGj31DWLbrzZHi6uEwmnt1JL",
  "key46": "3HTymkLWxongiWk8vySe2yt2y1zd2Jb7rKxg1Kvwwc16GbwpeiNFZqvWhJw1YchmHmsjMJP88zrHP74SjXG7ge6p",
  "key47": "5cT4FaoCWwE8r5dHxM47Wd31VNbYSfLfmtP1BCAaiB5gwd5y77CK8dr2J2XhQioh7YoUQho4m9qkF8i2szsG2LPY",
  "key48": "4KbYcbXsRmJ694H47R4UfTtWAjirgyTQuqfVozyxwj1rRWNX6DYhbpzYuqZqwKSgP5e82Z1wyG9LD2o3Ssbyx7rg"
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
