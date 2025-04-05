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
    "4DACqsYyNXdnkzhotrrLfDrWS8YnhJWXi79z5qE6TSsmzyUReKMhncnxBxVRiekqjeFxN1FULRhVFb2iqX7snSwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ExYkbHpALMkGCBZ25CC44U9bNyRXJ1mZ859o2SqqTmFMMGdNHeEoCveqjyXFtHBZSHFeptsGMtnD7KzSZEwyyMK",
  "key1": "4dKDiuUsiY2bXSzr1amLmfKoMvG8Rp7346wFu25bNDvx2WfJ4guNiyyATfDVdxkGQbUFnJkxRgUnvG3VNQiGXTKL",
  "key2": "3ykfT3aWT348rnxFY93TMj9vFfZi4GNHMZWyBaZcmhQdGsaDyYoTjiEu1tGwWA2TW5kki5ADweC3RqqsFaMHHfB9",
  "key3": "4DBxe3qVk3BHX6YySLmBUP3vbBbQYzwFYPjYwZMJ4gDSwG55Mu8RWeDjTJHigxYEUbMcF8TTFrdefwo72FByx5gD",
  "key4": "hRQz3ZqQuzRoGr6kRRctr1zuyQJeKA9qHcqyQwVeuBeYLis6CsoDAc5YaHu8cPSAG6Rp9BPabz3c4zDT83jbf1b",
  "key5": "4evzFypsxoJTCTkrrZbB5nWhYb3UCQZ1R72gn2NXABHJzQP88PbsjQn2FmpEwcTgoDUqwALML4WC8KBXK6FKLhSo",
  "key6": "4f3yxMGnjU3R9Qms7AbUBXjfCLZdpnN882kKpfSDAohGCRfgmcWNP5XQw4rbUPnfLtk5Sb9PsmT5koCY5rpZAEcd",
  "key7": "4nF3o3k9qTLkf3LRx5TnQrDFgX7UCneB7MfewE7QCQ9KNmrw7crLMQwjLVqU8Yh6ztrNCeViVHhZz9qMZJVHTM8J",
  "key8": "5y6nCN6qnSmpZtScQ1gTZqo1AUSA8vHuZE8rqv1eGEXgBVzQMeiADQ8apggDJfzhGEWGxLYKbzC5F4vPAvCmoTmE",
  "key9": "5Eur69Ncxwji18BdaQkFH6oma1ivjcnkBb7sVCW95pfj6cFQTTrFqnV1x8yqoGqKU7t7awauAGjhowbKpmxVGNio",
  "key10": "56EM5CmgmP54xmm1ACDf6e5y4dcFjb6dP9qZcHmVaAdxWHwhNn7P6GWHVL3BkEoXhreuLHKmP3TMpNc6uB4GBXu4",
  "key11": "4XPRDaYXETU7H9RRL2pzPoVFqgUdGZZnD2hJ2bg6pQ9t9ytuvySuqXdRGVMtSq9uG1w21wvLpD8t8k5Y6rutUbjs",
  "key12": "5GmycHrtbZ34aaYrGpiQzhb8RCnm9nRmqy27JAaXe5a1a48B6KwfZSx7ZcP5MJ62hN5gf9LvuZWUAn8wsQRHCUdP",
  "key13": "5X1w2Q2ZFN3rtsC2Tnccfe1NgCxAbjgWUBAfMtd83UHtNW9srso6GkRDCHdvr5UmtaZcgWPYcB9uZjFFoYabiQJ6",
  "key14": "3Z3fnZeBQqc2tEPd4iZCdR9A5ACGYy9eSWq4kBJmCVw6tMfB7y4Pdm1ZaGyS9rio7hhRWp8Tp54i1MxSvY3DCWBh",
  "key15": "2HKESMumdVyP757NhaD5GxCStP53Ec1hwrRndWgJm8gmKd9G4xwiUco8LYhfjRGL8iC8j9Hf5VBghEy4962REAvF",
  "key16": "3emsD7o9ABkatCp4rJ9xSwpHvCacTMJDVSzUyzzEMpevz5tk3Y1cwifETrMMK57QnARyRqh3AQUR8w24pTPW3fqG",
  "key17": "5fBHcU2HK43DmmRgTdFwy7LGubLT3tzSYtJ5q19F6ZzxUsq5WeApekwKEzxp1aWmQ2N6Ex3EhKRN8isBX4rXYupe",
  "key18": "5CW8kKM7BZz2ErCceHegqGWh5LXYBstJ2TEAFWqWTQxAz5Y1dYs9zxEWukL4uctoqEGTueoeCq4yPUSxiDxLWbA",
  "key19": "5tBupYLwiYBe9Pteaug1BqfaohLL9K11YxPQ4eVQFkkJ71vtRpvz6H3ecLHfTRa4Ro1uKT6qnG8Bc4FMjeRPVuQB",
  "key20": "5PEPgUqSAgvLHFXmJC2ubLP2644zApZ5cpujTfug1XNapVrEbb2W8pw8EPR89hVXZKKqLmmMtQme3tSs7fjcT1XY",
  "key21": "KkkoY7xAn7qYfSLWkZta3uQGWeikquSEUdtt9FFwsqHeuABvyvoZ9uZMSToJCEc1uYpKKyUodspMcY6S8jhXr4n",
  "key22": "qXqCMjJAq5ozqgvTEgRjgSCmvEBL4XxvexhL21G6Q7bJhBkcgK4Q5rrNUrL6tGWMZT9nfCSjxHP25ycdvg3RtFE",
  "key23": "887aNnJ7yk4jYfYRpEwxNsqzyL3Lj7xmUxfUEBLxrXwKoXcnZStDeV9QF3ue2z1LUKky9ejqi8spMURUwoUMKcQ",
  "key24": "5rcyB1JK1MXFU2NJx7WRSa7sUzrpNVu2jWUJt6XDgzgeo4FsTKh13nu7vXo7dvz6AAC3GhBLPzsMhbgUdK3pK1fs",
  "key25": "5ecF6uRSjesoDUx4R9fQxrTbKtMtkFXDcSFxqHmxfnVzB3rp61q88uY3QHbKZoRfwEb2CTEEHbFDRtmDKjPJAR8E",
  "key26": "5B75meXYJCgjPYxd7uiVnrGmybTMaBj2ykpoP5hM9bsbvJA8N6D44Z87yc1GupVsTteSngo6zENk4fEHAxHzgF72",
  "key27": "36uKMxHX9VZMzeqFSYekq6FbfxnLeHwFKASsQmy73Qf1CqVC7z7RWXmQ9fk16sPMb6hJ8ECFzjrXkpSZhgYVVAmw",
  "key28": "5EGYvSm9HnNn11hvUrdxDobxV9NbK3PRk6Q6FgwCoi7C6K1ZPsJevWweWB2SVtj9Vfw4BU7YGvvLPiNTGYdJwfEE",
  "key29": "26t8Kp6BktWmQ5JFLD9Pqhj3wkAW1CPQhdqDv5qpsnmPSjkQHDqZJLELgHiFB5MoGDnVVBnBe65eCNSpj8HnDTaX",
  "key30": "3sf8eKEqsEuG3FzXt6KW8jADipez7bHmov9vGTnLKCVFLeMyhXKPSHcUT45WRDy7FUbkxQ2ZvATewynAixC3m9Eh",
  "key31": "Ru48TGNdFZdgF7X5Yaq1uPefyPJErvX8bJ9pKZYSFGErL2pWNRmPjZP2tvgu9HSkoaBqubeSDAd1yQ3pkUXfXaU",
  "key32": "4Keyu6ZBuV4FvQU4prrXGevK71hGymoRxi4T2eBGQme6XRRvqXJts7s4X35Hd2JthXuGbEjKKfrXiS5DQ1858iwf",
  "key33": "4k4zAPB9BmMisgmXRumV3vFMvjqEKkm5JdPgBdjHbzd2brY2fj3ry8fEY98EjJRsc3GC7yogdyMnFTQ1jkuMogvT",
  "key34": "uHh8FdTdtsn6DTSU13M53UwC7RkCoETeoF73dDk8ZYW6MMJYAYn2k3kyfevVyuJAzE2C1b2p4tuSh9EgQFfjA82",
  "key35": "15eqkTd6LpAFSLBkH4T3ET9XpoMnVGvGJCwdMGE5BeqmqVCK5Lc6Zh7YPbPVRLHub351pLmNeZpKZmEx5zBrfMc",
  "key36": "2YH9rn3jnxb2hmJvi4U53MrQpwDD395dr8CNYUnKmgoeZR81mYRKxt4tjnSjFgwXAVZbMJQFU8H2sMbfao3pLamS",
  "key37": "5g9JF9jVo9sLFMWeh6KmSYD421AScCmis84ECz4hsawmzZ2R55khV2qLM4Lat3eBdxQ2bkf61eYEczFKKT5uMtGT",
  "key38": "52uEfU7UVmzQrGKiYx5dA61CfsAHjJdniBhaSsUuJe6o1ko2PmwJ6LYtsL5F2JAhe9ey7vb6MmUip1kYaaQ1dDyB",
  "key39": "56Cm589r2Aw7WFspiykSzQzrLJssMXexHdsoAZPemUDtr7pKSkFv2GHfVo3fNmLbusYxmzq4mxpA78hWuqm3iB55",
  "key40": "4AQr5HrNKvUnafY1QgzhBWTeznSvuQj8aQvhkM4cFTATPrNYXiEFg1HeXpFDAKSBX4LCaho6JyfgfdXLK5Ty3Bbf",
  "key41": "4gSPPyVoPYRBCR7N6g5gEoBbXKX66piRCuzV8aKa2ot1Wc8G7R42J1ddPxUAArKvkF1nZu6rAUYkHa2nQi49kK4R",
  "key42": "64HPcwmv32nEFGNGKRLnjQ9VXWpQ7zUQWakSeuaJfqgsVptfWeVkGt45YbnLk6CCMCjGU2ezPFLT8mkaQC8kdB59",
  "key43": "4HP4FSZPYkTYckJwhEwDV3xgpGS28B6KPkSzybKTUcyVSstXTKMN8oXQQT3xd3tTNFkDKaHWNdxtysqfW8sy8zgd",
  "key44": "5HVPmap7SwwcGiLJZ8zoWinLHjEJ4yRmUQzaSF8So545MGQwx27UhYpCCPvWk4NJL2SX7TZg2gqZLCWPynzKGTM7",
  "key45": "3m14ZwyUF1zhnfm1RjQNYwY3BiCy3bQGrp5jBV4RW1nWBsvkQsZZ1YobQtr3N6MeTqDDb5HM1LtZkdEf77Pz5HNU",
  "key46": "5zNpBoX8ryv46jqcdp75j8wbwSbMZtHrrjwVvaG6FFmJbdxh91KgDtncUidNnbL2ConKNYni6iRfQTx5WofMuDnj",
  "key47": "5kfmVHVEjmG1XETqBeob1PX7yQXAAC9ZgpJcuHmfmJLbTZDmTYcgcAvkZyoPGac5YTAgpWvY5GBPSVbwypULdYEA",
  "key48": "33yqnBHtRko2Dm9bx55jXibw31xawn2AmfL1bTDCX91vMdXMn7zZtsk3uxY6CqGhucEW7qfifH4CTA2Fo8SphPbd",
  "key49": "57uX4489GUGnM21nhTxJx6K85sHWSTKr13c56t6xNjdPCAd7PSHgAaw9M6d3EaA29HJhFhppPiaPAUj29A8wykKn"
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
