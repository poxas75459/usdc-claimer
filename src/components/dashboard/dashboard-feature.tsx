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
    "MWUYVZrwZcWeScw4ZxktF4NArT5RYPyG3XUL86KBGbnzQAgKrSwUCWuj3yFUtoCHPk61nnN6LDPE1yiNmnuzRzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zfQbmWLw8WB95xtxfUWFeuSDQ8He1jk1GcCrRzawDfnjkUW3kWv4aq8XDHmHLjMXiYijjm3TJnmPsCTwe4rYSuU",
  "key1": "3jFxzyHnSM48oG5Gi9fYvrBAYtdHtXuuSYrXCDYDjeyQDhzobsidqNWc5WoHCiVnCmMVTvaPzFaSCJn4tdo1DxRx",
  "key2": "3cmmxp8ECvSoXMrLQJcCSJrPfhKqCuAeYDcTDVArYvh3F2wRsgnbsKeBbujFbXfv2WuhA2mFAqnMhBkB8Ds6kx5D",
  "key3": "2UiUsZtLmuxDWXteeB4WtpVr9VVazmHqJXYmPmW7cyqLyPca2Exk8jmewBqpbTHYjDrCrkeXoc35R3aCGZ9pDrAn",
  "key4": "5KpLMSqKs1FZbDdexXDY8d2Wt7DBjR9VAtZoeGyxnw8GFyvSLaTdnA7W2XGDzRJpDUCbtQ8SdS1kMemchfNhhHKW",
  "key5": "2NfpvktYYHTtCjgQLpyAjGcmxAk1peRMCVcCuKV11LFW7Qrr9rFZLYrJNr5FnF6WksnCwfXRx4it2hVvpb6mtbYE",
  "key6": "XCPDKAQB5Mrjpo9Y3gefMo47LTqRLpyGRHsyjfCwuQB92EPypCPaLBAAxQcZki1oto9akqdXR5vSoGHmnyAsFbt",
  "key7": "wkepeAbzFTbADUSR3mcodgK2j9dtm8voknMds8YQQS6Jj1HtDWN6q3K5hG7ZHriayevGjMBhxyJaEKPLbmexoVY",
  "key8": "3g2UxKHD83fHJF7dzkT47Vh6iDModTU7pUYPpz1U2f4RMCFjkpo6WBqXeahM6ZRm8eqdb47XSn6EdaS9xFgU2Xpb",
  "key9": "4Dj6VQvkBxZbpXqKBZscvRWnFTzx7mVvoUkvN7eRBJBwB861s4i2qmhia8p3PQX5KQ3Q17MH7xemYPK1ayYn4ncx",
  "key10": "2mrEfmAza7cC7Yxiu43TkG5893tryxtjxeNnokQqceaDmb1GhiUf36ZAcxpuwtVqRU8kgGpPg1ens42DjWnFAtDQ",
  "key11": "eu5E9vis6ZHi3gu4sUHmzijCjjuM1JeKHaGzVnLWY1ynLBFDefBBwUpGQEeRaSXTyit7Rhzu4x5bSvfBKWcwmza",
  "key12": "3HszpcoQrQ9YnF8Qc8AckiUbFV2xeWwqTodjoT4EaRzNfe2LsTifpwskdGJqVPkZHPqWvbD6REMM5LTeDmLx7B2y",
  "key13": "4ooDh7dPVvEPN9VcGF8tYz7qsRE8NRPKN3SY6wfEG66wW6RNjrqHeumNT7Atcqva56Gbq8d6aT7UQFB2jd9cMML5",
  "key14": "34KKkaF9hMMownPkUmJgRZmFynUhZwLPakntB2okxgVWdW1LPySFevTWJVywPAQXMCJFGzNq37mdBg91h8vBc2pB",
  "key15": "nYWuqgccNrdG1wcNf2nto6GAsrgXRwaCZcUPniwPckR1Pd46AMqDj2VS14bj8HavBvVENgNcBkQM8mK1G5bodj1",
  "key16": "5whgHXbx7Ep5C4Y2cbN4JL8o5wddc3VAqfTZViadcNjuo1Wmm3birzfZxtp5swDtmxuagvSWVPacyTbzJRmdUt1H",
  "key17": "5vX9h9ivL4vxbGN9ffq14WSzKNq7bPQdjEkNCZuc3oCWnwdSaHY16JmzmZjAwguZxXsgnLjJXxa2dpmAzFMbPg8A",
  "key18": "2YRmuNcPsxwS9XYNTnn23jNn6A6Q6R8bP71vtPEawSVMNcq9rkkCvSyyrzGKifsYe9uWYUV2JVb3LXnVjXLBDAof",
  "key19": "3CgNiRQW9uhsPKvAXp1oteEhvz4n8NH7pyGCPToPUAXp3GrrqvZdXBJq14sVZsQ6vLWuDRKDmRAWFTYxBJCaChtD",
  "key20": "3URiXeEfSYHStduJ71w6wr7KermEoRuaFDW86NqafgZQ62qvnFyxerRn8U1yYtLcQrSWKPkFtFwJwkjSCJiBfcVv",
  "key21": "3hknZKYxjRWov4YKdHfs8o37L3aqjgRKfXFvA4JoYZSMz84gojtiDr9nuagUTVPQdUa2yQGLSbT6Zv3qYdDsDFA6",
  "key22": "5BuQp2xbNz7aWGaaAGUzoL86v7snh4KM6waCwDLwMec4XYPcdrTzxGEgRogx4EbJjXU9YJ91gd4vikHvShCYk1JM",
  "key23": "1yQvfBkMhj5LwnjZYMHJpMXajPsVx8iHjUrVSo82vLigCW6Xgax1RNJAV6tE6rVaR3nc68BcyPVWnVpAwX4njHx",
  "key24": "3VPR652Q3kX89vu3xTnZkrsp9HQfpJD7ckrM7nLgMxC9gxD92NDxFsikxW7suAZXCoWV6B6cKvWkwNw57UpA2rRF",
  "key25": "38gmm3MuZpbeTrKXsQKeQcZKcfQww6Sv8bSUS4BV3EwbkjPGYDZ2UMoQmZqf5nkn6FLrGPA5ziTfkAEAGXHGJZcF",
  "key26": "7C2114E9VU5L1uagzheiYAcjHu49RpNU8QaPvTS8VRZmASF9QZ2pz1vbVDYHFp4BZ1NBr68q4BYmAF4hhpsdNcB",
  "key27": "3V31tyDJuH25oG2TVv5Mn24FHRXTxYxYQXLU46VGfEsywNy4H3TGqiHAqMa7LdNrm81NLW1sX2LazpKAUNdzaJpW",
  "key28": "491JABra6v8W51NSoWs2vaQyDrNwX8Mm2QJrje5tXXWgxj4WUiwH87y7dojagijoGwRTPKAMYfLCM3fUoepSBLu6",
  "key29": "4ybVH8qJeiNoQj8TKvbw2GerGPVnG17waVC1jCuqRHGiVARrWXDZz755bSGCawK5KJg8K93uVCNVRsyDXfT5LC3X",
  "key30": "42daW7qFthLm55CxXVmKWHatGytTznNN6r7iBogcCa8SSqHegk9jT9AZZ2yAQjLTFED1nJPnmHHYZT46pXk6oHwp",
  "key31": "3fy6wbf2J8y4EHLCVinASMuSp2fKvw6fK9zi5Mz6roPTcfhKZCs3t3zjKoGpPuksxnK7LNgNKinfxqyXGBkYGqSv",
  "key32": "4MKoKW5LP5zB42tXdw7LEcEXXRTZ7M1tKF4xU2w95GFgikGut4iwiVAT463VhwHj7mLpUdwKmmbg29nzmdnUeR8P",
  "key33": "41eXxAeTQsdHZyVCFPFgmY8pugZydqqbdGGxiVvnPMmtHv4xhDWFrC3FJko33312BEVabo2pwP39H2Tz3rQg3wzF",
  "key34": "5hc6yxvyBbqNq3YTown19fsbbTZqYgWNMLiqmhWhgXHVUFuwYZViQodvVvEEHC7vdH7UaqHT4WrTD3uR4DsvMg2P",
  "key35": "4pRkv2W4ABJQKtwEqWKeopD81xXB1neGccJXHaAqkJTkiaewH3FwwCn7eYq8fB6F2ECRPdSKim15gR8sEhYkxKxz",
  "key36": "3YYC2WqE8D8m4h9rLhFfYAzVodqYueSULu5uUGzyQg3tG4B2e79QGcq13nW99vCM5LK96ShM9hTv79xUBc9xmExh",
  "key37": "2k2QECY8GsRSPVQHtCfMVRJwVPdyufxv6H1bJpkMUe78yB26YUStQK9LBRyRK1oJXDHMpkMw1iYgRmQR7ouEzDqG",
  "key38": "vj1NcgF5ZbAzVpjzNuNRm9NXnk3RywqWFy3XpyjTHDJkePo2FvWA9GGmTXQHrr4oLSBt3fB6PHgmqSyGE69QWWP",
  "key39": "5hgj9NRSuVppujB14L25VSo1iBK9NULqoKq6ez2TWH8BS3A32dH1khUdTNRaZQTb5EYTnomQie8gdALqrsrP2712",
  "key40": "3vaTR3ydyvT9U43B2f5iTg3P1chEqAZMfWsddhQ7Q5qchCxCpTJKxF3xZAY4Q7WcGuSwGfVp5sDsxu9JNYej9Jf2",
  "key41": "5ATnUY6VaBFkfGNJLvzZCt3UgcXKoA1T4vXP9G21cdMZEp727Smhghos3y6sMaA7gbGFVzLvzcN4WdUfhoncG8SC",
  "key42": "4oKodNAYbeUEaxnuQTT7E9zn2pxPP2mbywS8a7JFNsojJgE6jkhtupCHsvACCUWy689wQA5QotkFfxNewh7UbLhP",
  "key43": "3WkJnbDnLbq1AD3FFYJCeP13yDMF9LNbKTno5QqWJ3WnhrM7QVy8XbwnmMb8Hp2wDzDTtB9xw5yMeCPLacwuWWSy",
  "key44": "2a9T323pet92D1paaAkvgUanXfFXnGSZa9ZCwWUYm3Qrh2dNehaQXPqJXVejsn38D9aRh7tG2xjVj2ZLiEkukJHn"
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
