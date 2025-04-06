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
    "3HHzfjn5SfYpvZkqva217seEychtqcV7oZceGcQKmr2fpuYdZQ8tduJDXQxQafjDsFnNNBjkZ6cg96vaUJtFncxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRpR1M5a5rNGMfVpyfcKAwjsnhJuwCbEdvoEeZX59ckt7GQEPXDjqGhefKpQKtoTcjaW6biVaJqo4h6d3qGCiGk",
  "key1": "5uQ1PGV42gH8RVL6efCh7sVmeNETi7bcw3rcUdm2ZgKmwivTNngoJxNpemsCj168t7ehc3G6QGCPBEj3a69rajG1",
  "key2": "5sJW1yYXEkk8d7a42DGoJ3KFnL3QaRKSfqFCJUWK1UeK2VFKfa7MkH4wVxbWXqiXQSxTbgu3ExmnacjL4oPpjcht",
  "key3": "3Zvtg1gStLsh8AhCHbLhm3iwVXVstzgaEVZgCbt1dZZLYxStX19CEcA6r7hdgCPVfMCvmdqFGhDzkC9LNjtNaHGh",
  "key4": "5FKE5V8nujjmnDM62xCqqGrZMP6Rfzc78V4kFoft5xfWVmytMWTEJAJnA1t3WvdiziFoSBgQkVcxmKkapBnVKAUA",
  "key5": "4SPzf9cbX4bjPvhUgD58DxQD5u2ZNXEVCpKG13HyQENyv6vSaJzd1rtZUhtTv6GF7hyUNMwZvDRmqLHKRQd1JDsT",
  "key6": "nkpRDpeZ7B9GAGRzH3tLpcA7MbWNiQYdLSYU4ummSZKqpusC1JbyTLpW3RTj6Z4MBZo1CZtyZmeWgfZRag5GCDZ",
  "key7": "5rAqHDbPZCFYq26WKdcPu9yYNUHXCxCxmtDxAe6GaLgCBscK1Stfa7xtsZe42qg5CgAcSR8newfSXaWsCEQAFmzD",
  "key8": "3eAsxrXgj7bJBs8pA5j8T7jGXyGhWsMDVDTGXH7fxDumTNxjuzHkmjUobkfwo1jMdEnEes92JPobYHZPvcJAemxF",
  "key9": "7GSTQFymCSgz3rJ5gagYJk8MhBsfRfeyEyfNWXUGCSSCFAWy5S4GBwM5qJUL2tPJHLe5sc947S3LQiFJPgCgi5T",
  "key10": "4H6Pcggcvqv96RopHv4JWxSEepcEYnUzExWUHLdWEYhyaGE3Yn25oTXP9qujHG45JvGdFsqkva36bwCS1PQxei3A",
  "key11": "2oUcKxXVfGZco47Shd65VKDyyEYtL1r3Xm6SpNf3TtiusH7rX5qenSgc471eyAdQsDgt5sNb9hxUYZKa5QS53zNc",
  "key12": "3DgF56LDytnTFyrzG7PhNNfMaBc1BVpnRXkULb7nqifgAMec7KSAhY4Y6qK2mCAiaGrxwz4zyyo1NUcqzKGm2msc",
  "key13": "315gceRATRDCsoqzzwR9kBCXwmek3BF8sNxSSp5a8F3psjhnwE7zL81bDVTTCfawbaGNt9tPdaCvHxs5WKd2HhyB",
  "key14": "QfoZkovAnoCFLEUL3WuxTtxSwAZ5j7ze3rjVPM7Hv2zMHC6qpapfgZYVrzMhDJbM3WLqWDVVYufwjaQXWvL8TgU",
  "key15": "28DKnHer7ZcWCQXyV93K7ybPk1p1fzzWuY6Zb66sGkq3qHbKZem9YePTyGK5Rmf4cs2FLhQqb1n3Q43nkgA7FWF1",
  "key16": "3jT8bzggsEeS9pPXePV1HcR1aGS4WErkpLKbHxVzNmBoNm1AptE58BLxmqKHQCDYs8892mfXH3TPTkfPZCqgrLCo",
  "key17": "4S2sV56u1CtNFi8CzmKWV1SMwvFF9vy2QBzPXRjCpZNkQTMPKgXX2wmrvMAd2CMJep6pzKZqvZAn4Mv7z3FBkYbv",
  "key18": "4NEoMhzoCi1VyKdW62q1mw62Ka4WG7LCovNXjMRLGPW5zKDr8i1kospeqRdnxLHPAFrPK5aRWrVuwHFSPwEGvTAQ",
  "key19": "4hS9PK2nivWZba9Z88sRtMJ4U9Wtun7VjiyXoC87popNGp1CjXaVfJuDs7rvk3Sw6ChV8Kbqbte9LhYiHKxDyS7P",
  "key20": "2a3MScP44Hd5ybXj5Awf3aCscKmPnNxnQiW6uqPgP7wcob5DkydtYnjqvcB7jKsqfTiGzWZp8oecjawEg5BRCVoc",
  "key21": "51QpfUDYid2FbrNr85j7xj8Bmp5kPQ9EuSAc4pdvkC1vgjBHchh4CxV4o2LyD5VukSxr6L4aSsV8dSfkGXRJso4L",
  "key22": "5ketXBUDX8ZaiCCsmB9FhMrP4Jhf8hcLqh4WhrHXzDqHLYB12sf314SmAjGZ7tJoBzWYKvqf92pMAeBQbFxLGrGj",
  "key23": "j8iNxjizDyBKqB9yiwTiE4QW1D8uR3tXiBKZJHNtfCbpC3DeDuvxgbnPRX82hvFB6Ffcf91TGXXFd8QFAgtVG4v",
  "key24": "3M4CJkWCtwc3V4HVJT49WCkBaLKi11z3euVUv81cm48mby1HQvLv7KwWjTwfxDexUxd1zKjB8vK2YSUWydRdqETZ",
  "key25": "3jTcszDaarzabbW5RzNAwthDVeqrc9cobUFEC1T1wUD1VXfRcAVRWLnT1GFbnfnwLMsMuCB5j6wnfGLm8h4MZ9Pq",
  "key26": "5hMUo9jTCo7Ssn7BdK6dX6iC7Kupij3rVN5xhjUfAgwZmrH4Q9ED9XmP86DhsxE9zB8ocwprXATZ1fCp25D1qVq1",
  "key27": "pceTUKYBugWcAPnkzMsKPJYYukcGNY5cabf15DtiQkzYzsFD8c19BzjPJEjPfEawMS5B2wCXiyHc5roYpku7wmN",
  "key28": "41Tdadhqr7CZEQiZ8zdUoXrKB97Qp7KtBVPk4p9Fsn817WqMrUzRdgWUDwacSn1WKPNuLScGv2WnRxrkdDn4cWMa",
  "key29": "5grBNpf666YcYnaXGSnZfJ7oimH2W3hBWdmGMkqMU4UXq84k3eJ8od8xDtCGZNo9E2iAXhydE36Czr19ofp2qNkF",
  "key30": "3eN5PZkczETVxW5Qsy3hpAT3doyZy6Th4AXYYA75CaLRZHH5Lcc1YQyKeAvvPzdDB3QyrSDX6S1qTpiYntJHAQr1",
  "key31": "4kQqxjqJvwKbjDXxv69BPLLkgk6zba2tFz1fntmXkjd5LE1AXAAxJ2m2qHPodT2rmp1vuYsyYsNn3a48AcE5kdtN",
  "key32": "3hEoMyTpFkSiGzZXnLoZSacaCkGitcRHjjWELFCk5c8zdGqXb33ECGo4t5PQ22KRHcSTh4vRAvpk7CxukZRUQXuL",
  "key33": "5Mmvne3jPSigJD7j1UB5Gcvnu3Zp6Cv529bQZGke9R8ppqNGvoW98FNrdtD7RT6wSmgyUyp532h5XJbUXYHE57vJ",
  "key34": "37VvF9hnJi5sAnhL8wYrcR5qf7QAH9KXUSgTBWyLLigdzJCMEbn6ACUVoCby8oRGhEk3X5Y7fk2CjeecQeSKyLME",
  "key35": "2RbjcbEF3e1Z3BAVwWPyC1SM2ybpEyT99tGVnn3wkzKZro75xv5PAm5da9q54Ughnzo1nFacnaHw52EmPUaqVfgE",
  "key36": "QimKe2X1mqmYM86XvKEgqNtrQFpB45SLvEcHBREgnXjpFDifhzEaMJAQRsqnfXDtuuyvbWxhYtiGR8eyGzB3Rte",
  "key37": "2QmeDCEE6bFpdtCtddKnjGwyFcNjV4tpteaXARNrkF1Q35q1f5W4Yyk1F3Y84xXwQRiDN2nMvSw8aXnEQeQLLc79",
  "key38": "4aTbEZtT7Y6JcNS22NxyKPjjL9Rjytr8hmcZpakgS9aBdDFh17PE4XEGXHTQMdE338R9eANAsHmvgVXLGvCQy4Q3",
  "key39": "3dhkc1tWeEUqnVacqbehzSA8VQ9Bjm75kb61Cs9uQFSArYuGF6AnPS8RwyFykMFe4spQAKT8VqEPKHQ2rh5h37uN",
  "key40": "5dn4fm3eGSz4bQ9iZ5T2QMT4zGB86TWjHqHiCowhkYE35aXz2xRTUCE8jQ5mN3TcRZcdGRznukEboxnbUSvxQ3S4",
  "key41": "J7H349THnaGWfAnxctbd5dBxXScCVaXuRw1kML1D7xLamLFFtSGPQpwPzr8bJkDXrpz5HL3kqvx53So54qFNLru",
  "key42": "3R77mXzKUCsEaoN4cpQNgRec5TwK6TE5oud6RjmnoNt9WbSdnqbbfxiSYDzWgpoAmAGNcfhnFP2d2tfD4ZsaahRv",
  "key43": "AAYCDG7gJ9PY9HYKFwgCMtGiUxHAGBevrcqamcWs2wpBjiFY7f9AM64tkv6PeCCekSka1BZs3WoYncSXoFXwGLn",
  "key44": "Wc6Y3Bq1EodExgM938ALzmAUNYPjkA3e764S8diQY3g18ap23icTKCbaTBcz3qKCUg4HxbAENYzxgLBnA3SCLFB",
  "key45": "2ptgJRBd7Bj1ujfofhac3Gnnntjcq4oBLoAQi9tqCtXpiASuqdNvjEtFac5qnWb5vYdbeZ6JYvchYEBcRQgZTisk",
  "key46": "2aoVCDqhPhPk9E2P5Y8dNDHGZSd9eB5CLK5Axwt1SpNBekpurMx1QMskFnLA9QzSoguECvJGLju1LvxHUHivo91j",
  "key47": "3wyyu55tHgPCVxZyNXCg2DaEUxLubQ4ATK6UqkLiLLAzMefrPGCwS8bN4g81UAvTmrwvrxLUe3YwEkgBpYzMJLUG"
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
