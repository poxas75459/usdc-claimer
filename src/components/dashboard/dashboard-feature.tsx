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
    "2mfwxQMMn7Qr1wBFpN6qEFfnNq8LCwPGcMMxgZF7ArQcwdhTuR5jdii2Q2TrRZe9tx44roQxdzTwk6wAfmWMYYNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oExjQUnVQaNGg5c6XoyXSB8AFXELx1VKHMyct4s5Syu3NffkbPCXiJTWjGYjRSn2j9PGU61KAbMJGFURN5iULni",
  "key1": "464qrhhGqULP3RkQ8pkKunscWGvJoVkBrA4vW99wT4vT6RuN7xAYwJjUjHdjVyP5jDcgDy6LwDsF2ZcrHrFCEDce",
  "key2": "646pDLy671ipgT3NqxfWBWoNQJ4QiqJgbrsumXL4hbppyNLqBuCKrVfwcFFjsnu14BMCHegzNTWVPMLhtQ8RTfqG",
  "key3": "3KHSJSDU59nNUnxHwtK85ViCC26oYzCHUWnnHYL1pHvjPLJYMzhFyHccREVyLd7mc5inakc2qhDqPVvnaZK6Y8M5",
  "key4": "2EDcDPoCPMdm92ykmGaFzV8EBVkBWp8T5gb8qRetikn8FEPifqtFoKjBQbCptcRBF5xPPtdWP1dJDLek1mHHNjpD",
  "key5": "igRRzVbZfMzaQe1mwWN57ybK7Rt5kNtqMC2uBwpmVZdt4RgSrg64nKVRhM39QqvvBpGu7GPf6KVaqUhUH1pdxXR",
  "key6": "3ATUBXFrVRmF6EQ7QVL2oZViGqqYGeN3ptryXQkK6W6TFsHoyMZzfQE8jCYpKYkEgni5dLUJ5YjYHh4738vrBJKU",
  "key7": "5CMWCf7oF3DzvuvrpNdEVfhtcQUsQq3QQixerjYDv9rATi6cm1E6uBHJMfNFqBUcd6t8MfV35n6rSH4GHuM27Xf7",
  "key8": "5jdqswg5nybc6J5DpkWqqmCjmtz1qPpLygFHzEDq4GFWK6gV3Ye6SBZAuHrcctbTnQ4bmk9A6xHnQMpgJwFQkpsR",
  "key9": "23jAAqDwp97dgEZqVFs5HKrKEMpCnYuX2F6onJ2v9owawzXALHeSRoy3xpJK7mdmWoGZw48K4c3eeKuHHhg7GSFY",
  "key10": "27qMBspVvgvEKFrb6diVtDvHxqKDMbwy79uH8zjQVGagGAzBwj7v1atgkhP54JApqTaJbMS1gwmrxyX6RqkNLvFq",
  "key11": "2k8q13Z66nHvHxxdhM59cshvDamoHicxQgTjBAEfiGfPiJ9erBRJbfjdi92k4fNEQ8jSnC5Suck78jMzbzHmzQQ8",
  "key12": "XN9Bf9HxBfZYeEnACRHEi33PfoVmUfHac3KwXXhJb13vzQ8wL6mg85RG3MAUuupmVoh2pMMyDqLdketZzCbTo1L",
  "key13": "BJFdVeLXa9dKrpSzwo4zSYYRnC1afLCsLhgZsSBEBWVPNNPjvuwQ47Q3RQ6Vh67JPNVy1vhab3YmHjwcNj7puSE",
  "key14": "KjcpHZpTVcgbeCUyTGHaSUc92C8gd2S1Bvn1f2ptVvf6iVTebgpRqYG5SX9ZuLeq6fwbUPgmnyD8dCfroTxpwew",
  "key15": "29nT35xWyiicd8ivmwj2dukTwZuGrvizortjYUfAKPDdmyQ84e3XCFvoNr7Umht3g871yZjfUjztvszp4ckPY4YF",
  "key16": "3B1fABt8Rm3bSfmn4emwzEfghg4yf9LJoVzCQ6sd7FdTE7MhUrP3hWdHwrUDgu1PeDzTeSRgQAYsckmfEzejCL6v",
  "key17": "3tqSTa5zhANxbGcC5he1Z4XBPwS86N6E6CQxdLs2FukLdQuUKhB3p1xDWC1XsPgGXWvUhHaGibawXVvmHHsqAj1T",
  "key18": "2r1V9YV9WhFKyCfecX4wWN242f1n1GbVugmyoFRuiunvsvGpyUqmKT9M3fWRPH2qPGd5wBTcEqzbjB6dXc1nHJK3",
  "key19": "25orvyNqYUr5R1ohrkDBaFa2WpqT13TuGTkXa5W5LZY5rWe6RRKXd6gtMM8MMQEU8Zyf9FaSZcDYHMZdey1udhA6",
  "key20": "5Lp5xU3pGZ49EXNx2VWwA6BqsEhxA5baLVr4FWjrpV6vs7Euwn5ZL7Ycoxn3o3MZ4ULySQuLtQb4qbgCUX2sBpVQ",
  "key21": "JiowD4f3XawGdBUUirzmwR2cbfZfwLm6XmJZvXnPEDnGUuuExSVcGX989dtHHfuNGzSZwRM7JqSY9T6Dk8mMxSy",
  "key22": "3mimzbLwTBtumZy4Yt8p3d1ZUky8znFZTGMzjEfawEUNjogYGdPtuLisoJZEPEdkS29XqfGo7mMdxmfMDGDZ6hzd",
  "key23": "5qJSQ2LN1yHSHqimPXp8GZqRVfMVvu8f7bzZA9R2eqiatPQQ1gqu89HDD2DAkycThUgt6Cyz6HipPcPKDpj59Z5N",
  "key24": "aWgrcywiaSkzBXSVMCgJsGnKgaEESB2FD2qK5GVg6xUTPeeMvNRUcujLcDpiGUszHhefpHaXZtqyyTXwhEtKgrV",
  "key25": "o8TaQsrgxXpPNCaovcCRq9KnPZEkEo2nZbDhGBogAx6cBjkdeaiAX77MLeLNtahqD1cThckAbGuHjNyqfkC925J",
  "key26": "zWW8ApKAxahTEdHSm3wQ2wzUuiBC6P4pThakrTxndrDx9BZhp5NgsCTxvtpN7oMU6qAEw8MLiicEnXJ6Gav3Tor",
  "key27": "38eMXhbG2Cy3PBWDipfHFAGaCFjcR3PqcDKj2sToB19tvq2qfNSF613Qq737pawHnqtJsD9d3usGywGq99Sz1ncK",
  "key28": "5aYsh9YPgStqeVnzEE6ynkP7TsEreYuZetxEv69S7aZC48YmbEzaQ7mojBhSCiM2YzPra4cDyGoHArCKPaabRA7A",
  "key29": "2XUV1t6C7nK6PVUW43jzirkFDp229dWfrp4FD3RVtWmmbvFa1epZ3ftSHPvNqsFnft3vDYVq7xRreJz7tBpBb44w",
  "key30": "4UK7s1h9bYNvKWQEnxQiJLb7LNifjMhpb112hZUqXyHqzmBPiAUfadjTP1KPqGuuVHSeaubCDgxgcSLL2CoHLt46",
  "key31": "GRdYddnNjp2ShgbGUUaaeCCsxYrLgQMrMRZ7yxA4gnGW3E3WiBfvz53bJ61jrXnvHcAi5otgZc6jSBsccyHifu2",
  "key32": "3tGLZHGLcqnLWCZHUGkaXFqPQ4h1F5BMgGv23xm6K6yT6KfiJtWNrkgmfdpdF9AN28WaPkKmPtQanAWYzx8ZjMYe",
  "key33": "5RjRWToSsqZovZ1KcJGoiCcpR8Q1A8gcB8TMUEPdezpTgNPCJDFPMN43imYvhqGdk7rogsM1CzjFDJZB47gP7KRs",
  "key34": "66JmVGa14tqoYNQm3Y3Z5ngKqjZCDV5h7gwKVEzKi8HzbGYRybu5BGxL7ytPuqmRDmdArR9cgLY2F8Bff7zZAqRa",
  "key35": "CBD247CcGpFehcg7MY95AhFSoSSLehQdCTFAmiHYawLE6MgF1KAdiwiVvYuJZ9h78YEkorhhzVSUKfFLGqaBq2i",
  "key36": "3V88MVhJ7gyhBDkMT4U5wzSxEmc5iji4ZqhCYcTDoW76JNxTg44wniSpw3Dzx9pgaS2H5z1NcGK8FEiffojv5eyV",
  "key37": "H3k6dnS8Sgqdhwjez1rdfRRgrT3EDjbsfgpzD3sxds1B6Xpp6269oSMRvFey2pSezyughEMFRhTozhs2h8E71Em",
  "key38": "5KTi3dPtcrEZZqj1kXKjgxyzrDaJH9CCgW87iVVdHZHZacbwzyK3iuc5YyQHG6QxuWpqUDgmywPNS74v5Ap3oYtc",
  "key39": "2b97BeME2VeHFgNgGJQF2PEGaboJZ8qZ5MGQMAxZ4ybDVokGSUgi3fBsuwDhA7UTZ9L86Awwi5K7tzaSPdQXBvTq",
  "key40": "3bhKZWkFe1531oELeyF2RbnmXzYabi1aZr61W83HX9qgSafrKDNvam785oj2gWxVKjqiAPkfuQXgKLJ5ZQGWbEkx",
  "key41": "3yVri4vva7M9s7PL4A4gahuG6nEjFmPQTQGSryzQ8MtJPbEawBaGwdXLxz49SBuU4fwS7L2N2AL2mjrwhT6ULNU4",
  "key42": "rbzpSSyt8UnfLfpAqzafUwuo19EuhFvRw2gCFyRpPnsknro1LEkWrrHHb1Gbky9tu9vF7ZrcsHrcKdXb3wBbPrM",
  "key43": "3Uww8xr9hVMbHZXzZG1eMWEoEjWEWKv1W8dqtKvVzGEFcr5igvWwa19qqogr1KNjVVDBEjdjdx5vVXeaLVH7NLX2",
  "key44": "83GWStRFpydu1MtBnqp3eM9LSg6p2YhqQACe9MJnKceiJHe6RtyQVDXfie9doZ2RmHPtd5txNQW3yxctvcUcHC6",
  "key45": "tDkYwwbY4mKAcJMMeC5tytyLWUV6yANqcQVQvbotbKTYqHikJXgq2pYcXphY17timRXtGRfoTbm4DbWiRuuZKc9",
  "key46": "2VJusYJD3E7ZyUGNBAcUzHHudTRMGg5v1SegwkHeeEU21sgLadYVTCNYqn6HgtkFHJXjNDL2D8U5RUk8NFBdKJex"
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
