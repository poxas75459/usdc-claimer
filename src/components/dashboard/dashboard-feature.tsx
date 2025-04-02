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
    "3XZJZMhmiEx6uX88ieDoSrZhUY4qV6MwigiKiNQmiYAjdBZ9paohNHDxjEjQBtnJ8tqRbXcW6qLeQvH4xHosaLT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkS8LLAWKFPChiTqStY9tthpyQW2DaFPHP2e5PYkT2qwwzKD2MBoN9csRsdV3XYJExLGJ5LxJpxgg39g6JoJvYn",
  "key1": "2h9hoYSvZiHWjRd9kR6pns7Rnk6UnTY4nkY8NeoDYeFeuQxv3ch8M5hhvKeecJg9PGSyRTJET3iTMsM3CztmFrde",
  "key2": "379HuqXNsBBydQuJkW1wh8qAuRPDt4NhY1FSbFSWkGQMFKqKijtZF973ypxSsN94vKCePwK8bSvRNg3f8pb9kd8q",
  "key3": "26jULMuygAtgsUJgAU1Rh5C5cz5oZHWMK88Ka9JDu1NfdJYNLRNdm1dTCsT6DNBvykXXztXciKz6pH7vgUAmnCgb",
  "key4": "2UDg9KXcMMfFBAiZhEWjMrrGcyKkiqcDwHVcmvTXUwLPxoguQVUyknQw9WttT3dPcowEdms1yhwkzqNs7mtn3cUv",
  "key5": "2WhEWp9nNW7j3PPCw2B3dCXM5d6tbWr2gSN5FhkfdrAUh2YT4X2hb6qR7BCybL5cVXofN4xqvMAU8swc5TUiKzP3",
  "key6": "5FaAjeKCF6eBfMJB2E7XsAAzHmAV5x2fQije9xRYgwsB5nBbEQ3fz7fe7jLTvYKYUXM3f5iN2585mbzFW8EtuJAt",
  "key7": "2GSq6ryFYrGDdE2gYGyF1db8UBktDmmXTg8dhvG5QwfbPXJYso2stTBkybGqG5NZG49Kiwnkt5tJ1TACfsvqTyUh",
  "key8": "qeYdxvBCmQTQttyok2Lk5huPBDG6orqxSamjc6YhNsZrXaJcQpqBmfuyLfcQ4YMFVeddgDsVY8sFwwidRR6itTz",
  "key9": "5ceE7xxmeP3hynNrTFQVZ7LGAMMmd2vMH97Qo8hvgpJr5HgbWUK9tPYgJPcyg4SjtcPvYxzTGEJMk14gKiFicfoX",
  "key10": "HKW88aB1MxzbjmqKE3p847H9Xv99aH8uDDpFJas1xXHmAZapt2JMz9qJKhAyHSqjyUK21TgpFw4xqw2q24DPpvf",
  "key11": "317HCKtowKEo8UAkuRFjFmihs6yA8o4JWLzmgjvbfufcg12GppiGGZA3ydNVXzsGj8ecaKt4GLbunBQs1YtHr7YU",
  "key12": "2x8wSVvDDAuuZ4jcDLfyNSRCrKHzoBBx81tpiHLyued92aTSkrmAxgFKzLY352A3V85qNav1KrP1G5rQASMzkGfS",
  "key13": "4273JJ4prVH8LYsoUeJqrBH4PKZ68GVFM2iUnqHBs9DAwXzCA1N71bC86F4c2D2z3TifaohEFfadQzXfZqbeeXC8",
  "key14": "2fuUT7HhzxgB9gZyJRJq6ev9VfQELvFPP79A5dwZqVsSsEPsZQgHDQ2nkxbjh6xAfR1s2wQ2Suqby6E8C1gLG6nk",
  "key15": "5j4js2zoXRRj3hxiVgzPRujBnKMzkuUf7ff5Go4iBrqTVF8GQBtUm7ZYn1PFQPtc9vYyv2gqx3CSmAK22p827Vm9",
  "key16": "5LgMygKp9H225WaLnkMhJtVd3FsmuDiRVK1QqW6ia6eA3eqYkzFoSXaMiDio7tBRKi5nuc7Cmcfasi3ypoznpzEm",
  "key17": "5iuu42DUHnGJeKSJasWcKi8qLYrqKb2yXBqi1KN1keaCSCEHKfZSmx7aygRKEAwNGkGMKjMJLx4g5KKMw58oRPrj",
  "key18": "qUepe7QxB4cKdMAm1zdqTwk5UKqr1gUB5onoUYez5NUCXzJyv7Ls3GdYLY9QFgEPv3RZGe3427GnNoSrbyN9944",
  "key19": "67X7GdR2qcvRx9bU5JqKihguKtuyUiEJszjqicGfrMxt4p52WoLTF21z83QFspCi7SUxBTsPaLCr7JUYouaXRtvk",
  "key20": "sriRpACFpRyx2aXaqgaDf5gmZDY2ZP56wXPvMe9Vg2ydU1oMxkFhvqtGbJrufdSUhfEWNunBMdzUYzEUAAVqSrr",
  "key21": "3LMNFFe9yBJyEL9m2cy23iNXvztQeUEVYtxRs3S1TuDS9b7sYS9SF5oVwKNGR8vWn5sdz4owAJMr81VXQ8BNLcBA",
  "key22": "3Exj2eqhx2HXBE6SByZedMCLuSMb6N7tsUwLhyuuLWdZapKk19tvjbacPbVertdobGojE2gqZP7bYB9aMgDCojCJ",
  "key23": "2s92Toc5eN2GF88jhJDWXVReWcKDE7Fd5JMDYqXsgMBZGtVE7RnuMVx4omxEy4g9rbJ6kuugYXfemyQDR9MvEGFA",
  "key24": "3srxe9v11aysr14JysdKpMYheWxtSMTXCK24yVzkcGqqrajoWTLeLpVWURN1V3WMsb7GmLjYBJZFvc7ndz2zw3US",
  "key25": "2sj6PCcfCUTMUhqeC2w3UJW2onpcpCm5W3iJkbtEZ9wfj34sZhkXS85DdPYyoCDT4QskR57ftwpSQcTHgW9o8dcj",
  "key26": "2miwBWe9nzQZUFuPjpcSiBathmsHyVPouxrpqP8JhBW77B1WJWYZ2JeT2R9cwGNu8E3y3gZwKa63iVym7fY84Lhd",
  "key27": "5e59sRv4fniABU3NMMqMJjdMSXXpnCuDUcMR88UvvJNjq2DemkVvhpj8Nkumds3SNdsx81utTQTdnwXF8bkr68Bp",
  "key28": "2jvTRYAYrRnRVHf7jrUq6o2QE3gmK94K2phvYFXDBmxLn74Xkgbx7dn8mewwLGUSiPAUKhRPtGdm1Jqsbsb7owYB",
  "key29": "2EWKnThUKdFQDEPM1vtLzqYVvHjVCaS2LttMBFuMjiPmbaHkws3cex6ScTCN7ha1gL5ca42HBy6ywaditNJ6hheK",
  "key30": "5JJpM6V4wvsBTDC3Lg6tvrdEDmE7wSzB6dj6gotfw2bMCV7rxwaLZiw2SCPHQN7obqVroQbdqdvVyYQHGqZ3iACb",
  "key31": "3HzosEmmLyAnxaRjWX9zGUuu9tKFdGZfLHZBKxgSzTVhpbk9EsY1WTtsctPMjzSmWjrzC2B3AWdkj33Dzx5Ag4hS",
  "key32": "5Pc4LY7sawruQSVxsWdBFupiDb9yc2GB9JUYg1wgrsoKxfvSEaGARKCSeFiFtjCZciWCNrqKAN79n5iB1CfShpRh",
  "key33": "4J9qRLpVEQEYYaYtqgD5RZWvz9tUgt1eaWqnfg37CbamC19RELhwc6nZNe1jCaTmPDWauYdaiVpyidmswkxRoZzD",
  "key34": "5ZaHUBmCvrV6H8RGmmgbnbqDqDxSDnEXhwqgoRdZ2U4bG6PGzzJUodwsRkXF5VP53Yr4XYqqpyAsa9poicMGdwCr",
  "key35": "3jRukXRQBJwy3nUPioPviDbXCCum1bmxzeetydk3scbHrLNUBHyG4rve1VbbFi3E26myKhY92rtxDfYVnC7CKDEF",
  "key36": "3c4eD2kyVdEQC58nHZYGW5m8DtRQhm4sPG7QTKv6DxmgiudVdaMNR6PD8UjZwELebcaeM6qfRHYQ6xk8kYYLsfsB",
  "key37": "37ZApCmc7NMZZN7iu51ggKCtHxsoTb4v743FNsmeeaT22Y8xZNwWC77QtFpPSVN89oyRrxnoEPXN7Tu5a2HLC5Qd"
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
