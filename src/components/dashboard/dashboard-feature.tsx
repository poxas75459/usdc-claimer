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
    "4axjyk52iUNRwanYwq6xew2kmBnFgLL3fGUED9hrD7UkdXsmwjNeURzqHeHaLkcWDkFF8S43f8UoKB6YS1EvGLHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5795mhscov4iyaPn6idw6GP48bud1V6LP5s2AHGohHJqANU3kYSR6puAUxUZ5P6Gs7R5ejDJkKLLS6xHptgbei28",
  "key1": "61GNkLw97x3gkruFrQtY7MBqbbBcSaGmC5Ba4Zi5AwhnCaAmt2T72HLSket7Ha61KhJFJnTrYu5s2hGi8vT7gAJN",
  "key2": "3qhTkgVEiWXACy5GjxxZwNZHv27pMpwWb8MYgzYmjZVAhrg4kxcHNeyJa6mxHi7br74wTHNtphZQdgXtBtSJeRqm",
  "key3": "pFDo2e13rPAXh1mojMtuZSJWomptXGC89XgzbSuAbSDCcoshYzFAX3X3boRFndP5AD3tTiJN4bPwazBWra1ZKUC",
  "key4": "45uo9fEcb3D26tnbECfNUad2XhHHYmtRZzo5gPyG2zD926uBpz2dQV3HNu1U8qEaDqSyUbkZqiC7XCnFmiRKfxEK",
  "key5": "2g5LvXQHZLxHfYv7taYxSpWetCVrQzsH42Tp4EKApt5H75r62ViQVuxUXpmGNsxShRHb62VwCEg4zkc3TaJfYGhJ",
  "key6": "3niDgKajLXyQax3qjxDtKJYJcy6Wew5z1j8vh3E3m56S9zh75bZpg5kQyQqTiV6MaK76hWty4YsdRU3nvFsxtoFD",
  "key7": "yUty3APzfq6ZdBRZ4AR52KZr3AxLBobbVQCT5VrYG2vekcch8qEbNKB6nhF978jiScGWvsGdrQ321oUaX4yHVuZ",
  "key8": "FhQ3FitXNtshSNECe4T1RrBGHeVw8HkDF6hNDUdssyRmGXHEfSaG1MDqipp2BGbYaZRJh1cBeZBTe1hj17XAXPy",
  "key9": "gf51DfkEBo6r7gTgsq7tFhXXS7GxL1dD4yHE1nCk91dCjvzmy7tsMBsUPYvckSZNPW9hiUstRu6KoxbpN7TxVp4",
  "key10": "3s72Gfd3mxzEp1hVSynaMW7K44DFSjcNTrZ3gDnHZogE22fs59YwWkvvw9pAdmhAbHUfay9DzjsvRaN9zNFHWvMB",
  "key11": "mDrqhyJTbxpDiMa9Yk96JYdpcC8swpS1C4xLpP8HLyGhepb7rLVdBRJRoEq2iVqNECZ1fe3nuuXh89UnJFGYRk1",
  "key12": "5NEKLDCQSc3AZoSgYVS5nA8c2Djm1pst19L6rGBxwjTqRo8nrfzoeKBsMBYrbA9ZSptnn8vCsJEyMYJRoRYsLGJt",
  "key13": "45suZKBgBaVcrB3XyEowwQRqKuX4Qc6SvBeegaDPfRtGexjKGtPQUKhqopTFgsrjqiPUum3HrMQkHwL3Uav1JZBi",
  "key14": "2JQaiSU1ckTeFBbnYe1TBw72dfZfT4GQE94XCEZ2781RGCkYWLQb4YFGHXjzzuygukd5vwxWBra6PYfFAYCFSdY",
  "key15": "2W4ZBtS2fJePZQcfMFQfmFSSBjJvzD3upjSBCApkigAXtcFFE7oz7muLckw5BqeR2NAeo5fZWKHeiweHjsZvAR8H",
  "key16": "4TCnLQmYU5UkRbj7iAyjEKFMh5p7zaj1gmtP6mwF62LpopZ7sNMjGbR9WzhcouDiiaJKHv8Ur8VZk8arokFJsJ9h",
  "key17": "2NfEy5nFdwJYwMhxejETVHTtanrJwzdG1CTkVxFEHbSW2LPBt9H8dPNjjC5c3H1tzuxwni8ASLnZP7tvJnmfVxK6",
  "key18": "4uSBK7qkDCfEfWGkHfwMzVV5mzSCBywaZaaWosaM4K4ZUCkcMpsHBpwA2puk8tnRgFmft4b6GKJexvnygahkaACe",
  "key19": "xCaJPoKuFLBey3wGPAx5F7bqM21VaJ7vPCDfAYc685fSLS5pSkgDVv2iS5N6puVxoL5tVNMTBPjBgL7LMtEqtXy",
  "key20": "3q4s5Ef3Vhzkxovhy2dsmQn2KcYReygbYdWWNdAPMpTRz2JsdqQR2ioQ8KpScU3jShcReJ7zxvUHhTk1basPxyqs",
  "key21": "4Lp5WLS4gPuvPxgzybqtfpaQdCH5yGeJAbaZz3odanYkGKuigA69f5jALUnBt2gXiKJxj4L7Kw7yYShjbHYHSKFi",
  "key22": "2EdrWq3vScWcWDFPbLuCPoiTwYxwmopMf47tw9oiVkXXjek2kNL3zQ4YNsyQqYGuAxmF5qPrxJJtuNw9hWr16N5e",
  "key23": "3Csz22pVL2waAdirAkwCkbjtAEiP5s4cv6ZABYFvecF6KtNGHaQrvsTRxY5GnYbqohNhdb6ddVaUeATfydKMRps8",
  "key24": "45EWQjicCGcu4SUuFpkMZKriCSbb7gzAUa18NzJrdqjgchLh8h3BYgpuStgy5tLgXjKHn459Ld7HfSb3Xo2gt6KA",
  "key25": "3n4WQcsCGgrYjszy1GbX2nsmJdPNNTMXzZ5NR4CkkBJY9MhdutLJTt2KMkqqKN2vSKVUpJBBX1RpYoNddiZD2pKo",
  "key26": "2sGWP3Qqgwr1DYCNqAs5VH2xzvC3er7c6DHu9pgXk45ggKqGD4Wnw7jQJ3mmyJarVwbSELNNcryvB7b6Jx4cDbbz",
  "key27": "66LS9mcf7B2YtJekZeNU2iqCVVpemUHHK3PqetUR19dUyW3hmjBx3GAcgjybuUJQMr21FJDmUNPdDZEkgE1SVr64",
  "key28": "FZW18MpJwAChJftsmd87RKx8adPQkBRM54zSe7ySYpDFNkUQ8o8GTM5aDXg7wiUgG1KYJ4H66qKPewXXqXbwZk8",
  "key29": "2KjXhazHXbgfWLZnHW8AZRrLaUjGd1CsMtMGgNjRwHgG1DNGRuNxyrFKmttFirB3eFXUYXkKskRTBZt2ov6XduGo",
  "key30": "5UdE6vyhH7NMYeEcU8VQjhMwZwQiRgtGtNR7LWSDzFJeJWrDasQwFyGZhhDMHp58wMQSjSnLUdkjKTMwETLj9zx2",
  "key31": "2Xh2FMab2buusnV8miGR7aGWvkjQDVs3AZbfiGpviqHabK85XXz94AUS8V57eo6XwnKLATMZZ35kx1kBXhUdjEZc"
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
