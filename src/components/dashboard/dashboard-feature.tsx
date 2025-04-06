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
    "493cQrhmCUm1pg2cHfhdcgGddiohApTEc6xzKxa5ynMzefYcZEfwCQvhDN9w3Dsvyq1gujrMaD2TGq17fZFNbgbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VT3axhRR86LyyeGDG3PZTafrqB7sUq4Ve113vhSQAh2Vihmco8ncMKJLHyU2MLJVQR3mGX4zTEmyfP8wU6PVHAb",
  "key1": "4L5nH3fRyJyMH1s1dEPbdZvbUdwEhEi2qBGBCSob71Nj6jiqXiqjxtFrVfhyLRVNmAaEmA5w5NfufG4cVAEfpStv",
  "key2": "2UyZYPGXCLfKf6BGKQEsHQD2jDs1zAADjvEpWx5LYJRm5DUuBNWtyTMUTKP91NGqfYpefhS9jegsSsGXt97a6mFp",
  "key3": "oQVMwzi3A7YNNEt4oyAw6AWXdxoDwc6F1t1Si1gtSFry4kPaecNgtTZKq1ojXRCWGcFjuCGLGYcJz3Kuhac5BBr",
  "key4": "5W8mh8k1X5ktzvFYXMy5kBSd7fAjs1fmPf69V7QVoCYfCfBEX9weZrAgdpfX4zB56DY2EGBcbkktamLnRmZnBRaG",
  "key5": "2TjJ8keCfKeFXHLEKdLW7ZA7hN7Dp1C8Wf8ucSvxqaZkwkPpxNC7eJHrkmUF22Kmq6jxAYCWNrEzx3cKZyjai3Fj",
  "key6": "4Mw45xRLMseUD5Xq5uZRJNVw74wGxNuNrJEsbvYQV4HRzAok23h7zgUXRTesBLVSGJ54vzXUqTqUGZkG4wvh83D7",
  "key7": "51NbSMvfi7ys8Kw56iC5CTY38QpssZ9gR3HdwaJx8jKSYvFj978jd7DKh5KftsEwmUMCMxAkJhHzpacBV94MCMtn",
  "key8": "3pPm8it11hGcdhovxZsuCtP1n424QX3CvfFpw8j4A4PLrHbXaavfdLpwt6BgNW98asdYJZCs17bhu8dfDn5FdjKv",
  "key9": "3zW7zkoLxZgnnnxnidvxDWQYV9GrFEjMjTri7gjQyNSvB5emeRQ2Q5T8BPHL23wxsTdHoxmFEcX1r21xTY7Gry1S",
  "key10": "4AyLzm9wQuKigKXArdcWUt65Tp8Wk96RjyuTLZ2mxwRp1vaGiAhBRv1fgqaMEnLQspDhzFaXeYvexAFNW7iEh5Mw",
  "key11": "2SosNjhqhpcdVvZqFRQDYa36ZZ9wujzvj9TPER4SRtzuEM612Lh7CezBTRZ1vbELwAJgvMnc5ZGTBTTaaE66A2Db",
  "key12": "X8bgadWQF8x7hmcMCN1UU2GxvH8ktk7kVAhyXwCdiz745aq1eteGD5k7Du5uVns6tCs5zLWtiPUiD7p5FXXcX4z",
  "key13": "4XYb81EGCAGdnKgD69dFbSgYkWC5hHzcN3Xi9UnErk49DgnJ47xiHpnuugDPdyw15q3i31awh9EamarnuAyDYHAU",
  "key14": "5mfKDRiHp8ZQFc6t8vSz5GaZBVGDhydhNCH7kqAD8ubba9ZqdjV8KH2i5RDRzkRr8CV5uvTSNaeN4Y8ZVVD7uvkV",
  "key15": "5dVWdpbkjreST5hk4Nbjh3Ea3VfozjXg1Bi9N2zME3G4nUir5bZus44dW3uaeHY1U3FGcDtcYCsowxrD2EPqQfqZ",
  "key16": "3DQ5fu1PoiD79nVPCx5g7i6o5aw3QAXcLUEj6Fwjio6GzZMZS2CS8Yh32Dm4TyJ1hnTodu94ZKd3JPmDW9WyeJ6w",
  "key17": "g7CTKPM48DAk3ELUCLkubGvwYdFrkngYLa88WYjsKzJB5oqLy8JZ6J2iVzAvfFxTrmXrrTCL1wgPV9rLufdhat9",
  "key18": "5Rq9kTERWg95T4FG5pt2SXQBFma5k3BePJzSdoU1BrF2VZFqeyhpCwvYNbBQYL8wZapggaujwN4kUFvpJHz899jJ",
  "key19": "3mayFnLt2Nrj8VBu8sH6Gg8JxvZFq6Dxh525xTUKMs7wdApVVJTsFsMgFEpkuV7X1LeJBLHCdd3vXgw6EaL7dT9a",
  "key20": "sYkaZa46kYxNeFtt4cPuew6qM3Hg56TFBDQ5B8qBoYwn9A98iaGUFtAhNQEgBvXZkePG2gQD4t5mUf3CuWhM36D",
  "key21": "CYoiP56nf9FY6k8Z13iFb7pva2qWe1asZ3wmoR74odRuqzY4JMMNR1D7bBp7AXXPqhCG8Hib2kHPaLEz2hqBZjF",
  "key22": "Ju48HLcSx82cR2wBxZewYPmzF945rVDnWBTCHTboQErt8L4QVS4ST53YKTvEPLEJNRqZfz2gKp77p4SKYT5wank",
  "key23": "3MrvFCSKd9MzuyGwgSCVGxeZPFC9oVaafJBLBb1aCzfkM5rs8mQ2tjwwrQgyhHQ2bXmKj3wjHp4EgTumNWnhf68w",
  "key24": "3eheQj1pwKtWCLBMiVMiWk5WS5CthDmsBmqE7TvH1A2jMDtcijZCyh7hx1PnC8xNMpzJNQYK7U89yr4jUdHc613s",
  "key25": "5eeBpoaMT5xCAFLk4raSwUUSrDnysAp1E5vPYyje74etry8FWUMgSMPnatfFJ4D3YgpGucaWaMFna7qot5zeFryd",
  "key26": "4ZQmEa6GAhqur4g6XtjymeSc6GKKUD7EsjTvAy4BzafJpBrSTj26F2qk63r4E5DRENbSYiPRudjV5m2NB4KLERBv",
  "key27": "2Lx3Edv6uqVzrQZq5DDSqySSg5bsSbkxfbBDtbByD1XjWgFGkGoHbeiAuJPh5WqUfL1NEjnKk6hNypw8aoKi56Xr",
  "key28": "3FQJyoJe22duAdzC2fvsLbfYvFmqL1UP9aqNx33aYmrkUHpD5Q1y7ZqZxVGtxnyibPSQCvkNZtZhwG6mnrMwHn9B",
  "key29": "5FtxXv1BjyiapqzRgGxv43yioRZxuEauCzLqTC16nstVYQmaLfqzknizAZDDStqe4EWEekMFBHZ23Xpw6mGsK6zD",
  "key30": "2N3PHafGeH1fPVjGzN6Nin8HvYgeAgCPBVuKhpTRQVp4kpV1c7BAqBrqfM1NGC1tAHoV3JT6MXfFAu8o4oir2xXf",
  "key31": "YcRy9y8XsyqTbEJ3CBKn3LpRgyVRNu4rSfHqMHiJTmBh1FkaNUosSVfcReEebxju9Ums2yDshmXp1mKUMpMr5is",
  "key32": "2D5o6mSCBvyKLsy2EQ69oc7SubyZCMViYZ9yM3TKMMGUZss7k7LajhCficwCAxRoZsF3QqevoQ41KeBHiwEmBJDL",
  "key33": "5G3J2U5LiKT3ayyULX5U15QBqc6GYNVakzNbVLAxyYLiaGJR5MAYHzZBQ3qtdtrBXtGt4fenmHpdAbuVUPJsZY5g",
  "key34": "iKVVWM2disNeSquf46PT5t39KPiGEhFTDRxtT2aYVJcrBZMRvCZA7bmjgoqZhLBV2mukanEkJVxzzFsYTpFGBzb",
  "key35": "2j1QGKFpUiLCs2A6PQn15FazPdkq6ZEpCmD2mTss7tYLr8fVC8AoKnWSASh7wG6WKqnqyJ5q3fUQ1LP7iwPMRRzW",
  "key36": "2SU8PbhsynoqpyNRXqtwUyErUtV1hhq9pJBZk4PL9yjZfMmfTpKidjKWrddjt8V55wEi2NgLZTsU2kZtQtsj5k7H",
  "key37": "38mECArWekywofjrtJR1gqYnsbNX7tkSFKyfNSuedzbbNaveYnPutYu1SurJFfvv5J4ibvJDTWJsfYZUbx9gAJP7",
  "key38": "477YM4wCYFE26uCqUHqR6mnAjihW8PyKwXvghUXaAT1A1mgh1XQgTpEWLQkyUF4JykuJw6Y1NVGSW6NBk3ev95YF",
  "key39": "37e7qbdxS58tmmm2PXr3fmqaQ8PTAqcmg2tDpLi9gwqtgj7kVK2sTJvYoXwWdEjX42BBqoLG4J5msrkgL7KeZoFN",
  "key40": "3y2hMpsU5WWWd686frBDZ3e6cq8Uf8k5swaw3VbVrZ3VP5oxZ6ys7R7uQGe1sedkKuLGq2Nwrh3FntUdFJw8WsB6",
  "key41": "3CVwWfB4oMSMvhhpy8ZSV5qMPpQLFeDE9hb98tBUysnVpvuNeFi3zmHFctAqjwmQGWw8XikCWTY7Hrz6NZrRexCo",
  "key42": "3LQhroSSqWHwKibbYU1G3mcTNLcTcr8GsygwhXvCaDPfbLSaPZ7CNkMwWKvqoDcsAuxjoJqbFaTq8dQmmkz2bSEC",
  "key43": "5FhsdzUy8bdLdNjuT3GVig5sNRyJR4JtP95GVsMUXY2fqPjiRaBawYryv7uKfKR5pEJDb6iicX7j4STPFGF5Ckqi",
  "key44": "3ybbrnX7ViDph4VpMQEtrxmjevtwEpsKPUd2rGb3xxfY9dXkwzKcmP4PBzPeaWX5LoJ6ds94diVbEDPFhBf8L9L7",
  "key45": "gHja49dGVCpDgLYdjD51gqeUasHiC7Ugf2hCaxTrU95FzXPKQmnsYUpddejQ7QAWyU8fyqRwAEtDW6h6k9GSkLF"
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
