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
    "Y6dxxtgdviA98eZ7kNhoeWA27yWzB8gh94mPSRi7mq7g12wNymv57dE1UdvvdmZSu9R6uWHWLv6k9nbCgwj93R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mJJKkFyHqLFMKFdssdLoxjqdoJoH1spdR524cmGWSMoWdnEUBH1VfqyDiRXsFwPERbL2Cr9W1K3k1kVj6j2dn9",
  "key1": "2XDxoZtFneYBouxhem2DbZfjuNeHqSGJi1obVX4kR8B84rf6826fbLWeXEySjSF25m5VBU6nmykXw6xSx8gWxCUe",
  "key2": "3Fz2xv6fKqRSpHxDi9rBVDUjPq4rkm6f8BM9KfPCRyJ1NjUfPUYUpXhkQ3QEMsqyvtxyS76j8GiWf1wbkAbGsLXh",
  "key3": "4seekwVVDMWMLgUpYe4PGvwVYP9JcDrQPiefvZ6dhr65ynus2CTpYSw5igNh3DGvziTwEqwd7FLixxKPojmPCmQH",
  "key4": "4rXLTJza37FvYH9RhDmok5rhck3a5kroogZFfmm99xxrGH36ZNTk6ZcYEKHf2tuU9diewwbxQDvSM9qLUQEa8dn6",
  "key5": "5eWkyLsmqEzx363XNCMsmqkm6sfyYJ3XQmwDNoVBMRN6NFxMbzZQQqPxxiMR4h2EPeyk9G846rioi6Tqzjg79mej",
  "key6": "5seBxSGTuEMY2HPYXmts64M4TcRgfQRqiXSm4fXTp1TzfkE3iGx6S5SjMJTWHAKTzP46kaTJQ798RBVhc2VsdJzr",
  "key7": "tXhjTo4BWxGzmvQJ16BcBAF3pRHVcytUELo6ivKWnEvG91ft69Trc8QpUswWY5zFJDzKmCHtQStZ3F7rMiERruu",
  "key8": "62HKNpVkrcFCZ34vcr8nM8juVLbmTfxpopw8QcmhUTrMFBdtYU4Sfp2azqZTHYe5ceViYCy3aj1a4fJ5N4qK1QT8",
  "key9": "GwNVm8abSHKEjxpwzP4giLmrBtKfqwCh8fEV338zwG3nqWTPcKEG6SX13LadzJ6dYTDeVDGLHiGdHdQyyAycLms",
  "key10": "qfhFN8caVcLYyCa7eq21byVjrXfhm2h9sTobjitHFRJ1UxLidnmTJqhYXvMPX99dBXHLQ4cNcHDzaE9RsAD1kSX",
  "key11": "3NVfT7ERxDVacWQjH2GMoA8xL8QuWe1mM3tEVAYRCDZZXrnEefao1dgpfb8Ua2dCAqteVyRPc9zEcSyAtgYpwNuS",
  "key12": "2Mt5FwfyKs4APZmQoJH2xTNpvwnWU2Mr796LC67rYAyvhcAP3YHgsG3nhzQBbhY3NA9noRgT2NHnwF9jjEdGmJiZ",
  "key13": "4bTuwkPken9GWDgb5tEEXnjR7qWVsnKWL9nSSR9SXorJtx83NLB9HHsBTjSmFohdhFVBFQdYziZMF78UsHPUcSsA",
  "key14": "2YdUc3gR8fgKhrEnD8m3jb1PPaWoYx27SnshH6AkcvMmBPhMhmsAt4HJDnaXStrZszQJwskTHQFiMKfyJMJsJBBB",
  "key15": "3jAmDA8hkofV1UQJoiuZa7LbLToH1iBgGG5TVcVrWfAvPsumoLPESL6B7kU5snGDB9BfsFzCo2LazBhFxu6M5PWo",
  "key16": "DRh8ErGjdhuTAocFcRMuScnWT89YsPvFQUYRV8jbwmoxVRYG7AZAUPY2hAokVZMKMbDvPWYb8SZAL83PgMg4vL9",
  "key17": "36weTiCnTK6Vht5ApWuNNAfUehzm2heFiHa8qDMGW7cp9ZXxq5nRhP2Ef7L4tAie5MkS5QzLWjzZCEaf4NdvHijQ",
  "key18": "4n7Au9XSeUph4bAY3j2SLAhPjBNx9S5R2twpSvoJeSK6ucYjmyq64a8aVdeDx9wr4yjpSkEvS8Hk8KVgApUSxAfG",
  "key19": "277LVnxsiGgjNhpr1GiA8E99dgqnnS82efR6DYP2StFq3SNaM5NfwMsmoVRoGXAXMVpMbL4SNKgmuVunByGSPyuL",
  "key20": "3t8hXohwW899ert2YfuKjbXoB563GVmz74MWiHVz6MGJqofr9YeNe7ixJ17Dk5qcXE6NYU97cuyBvWzD1TKjA7Yf",
  "key21": "2wpwG1RWcvPvsKnsKYsgHFLQuJqXftZ2PoaKxMvV8qKyrhCkqvTv8z5dL58HYsvL3XGDv4VFYFMFdN6CND5rqF4P",
  "key22": "BpQZiCFteKSdBdLKnH61qBsr9yY9LcHETFqNwA1sJzmeMuQBpvPfFPAg1kCguyQpfJebxSVsqon62NBbe1ZZS7a",
  "key23": "2p91jBeKmbNcH4uPnq7ChVCCcKN3Rtdjs7YquTgwZJLWobT8BWyp6GHoLDJaWmyzVCLQRECgw2etyNnuXnuyEaHw",
  "key24": "452bLCRoJX42PMVgKoPwG3LpdGubCDf3XHoVFc53hHKxNeQoECR9uYKLUtPftmZojXHui1qG8Q3hmEU7ayok5Q6P",
  "key25": "7sdD5R9p36e5Ywkvv4M7Ni32PpgrViS9gQnTNWUmknVdxxBqFbw7emDXzQJuSqZtjgLd14QDZrw46qbCEpYzibs",
  "key26": "2KCpT67ojdK6qCJ8KHgQKeifhJnS5L5p6cXs9kPenceSkgFdPb4PYLM4o3dbm42RGgPiP4sjzEesrUyM45PW71TH",
  "key27": "4yUHaPoDsV7VeNZLsmLvzZpdsqiDh6YZ3i9pWLUq7pxftd2rAhTfdzTaxwj1fchM4X55qP3Uk68ta4nE7zZSybxR",
  "key28": "4YZkvwh3veBz6rihKsMpdGY2FFLLQ7SWsyPg2g8fqhDpnYccniA1Mibc7HBeNkpSEDmPNGcQHoNdPpCyic4z5qWc",
  "key29": "53Jfy4cwwC1j7pc37cGrsNXzkE4BfQhe6Eb6qqLYjYnmkWFNkYSVZe71LJo7ah8CNdKh4wipbbYJ6LP2BDpYVG6E",
  "key30": "4DH8MgeUNbgnHJzVxf8nswiWq9EsPEggj3phVEFyUVCp38NzZiE4Uj7kqgY9EE7NvyZtqDpBCMbYcwFQQ6ePSu5s",
  "key31": "3d48nQdigKvrvPSNgQXWZ8gVAJZ5z4uNKRNbPjVXUyRBVJtXDNeJS3nHMhCmv4RYMLyNAUaue364ix7UYGBaPGV1",
  "key32": "4VDtbEo51ZTdM49e8dAzNkmirKRmZ4t4U59NwamYJdSpoaDY6dCwejKvSfkF3iEg1Jdf7E4eFErB5kHHFsTDdiob",
  "key33": "gAAvrmYQKtkkVf6Bv2bgy4v5MJmZzneeJQNAFE9Nsk8DwMqVGhS3NsGfm7GUvn4JFGURgKig3yKTHnFTLTkb7Cq",
  "key34": "2oMpZPRNEjvZw6rBWzrG5noJb7ZjJzpPfJxprEEQ8LpmwdgMfwphszuUso7ho5zffJDXDkZjigS5ebJkd9BmgbzE",
  "key35": "67hAfBaRHpoUypbeteZECv81AWSAHtFqWcNrWyB7ohk9TFxRwKM1VAJPUpjSRqQr6SZneYCCMmZ4vBmVvvrspUV2",
  "key36": "2YqWVG1rJ6CQHUErnfDNszW1ry1zSGvXejVQkQFAR7LgZseGbesRcbqavegazjoiZ8bqcLkzGTMqinYHrrpV3i83",
  "key37": "4ZfbhaVo38BBa2pvP9V18szaKnk9oBgMVa3zN8TDKSsiUb5wxHWW24Mcx3kJNTN69h2HM1Z3iRckomnM5qJSjvGg",
  "key38": "3p8E2jLghRDuxUxdpFtJyDaHmF3rh6H1FvM4ZfxxgDK2t4zNdVhiJuiAzmk8symTVKizGrWPTZhDn5bFHf31nLaf",
  "key39": "4CzH9ejBomZZCgp5ZWZpLKSutu1myiiGw2VpDqZvQu1JqegCCqNDwY8QofsjpVDWLLQBaNsGHyLS2feAcFx1VPAj"
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
