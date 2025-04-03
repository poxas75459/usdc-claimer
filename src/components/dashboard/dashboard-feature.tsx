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
    "m5FABg9aajzJrSNRV4pimCse39aKS6i3hVMTEMYpVHiyF4VnJ2wbsmsuZNyAUwnuS1wuT7jnRLKjhZRz8m6nYTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUnbupFXG51dNd1pwMFrJpoPR9L4fXZ8mDDhDhetmw7G3nvJymuboWyurgo4zEnd9exrTdB8iS9B4athG3n4R7A",
  "key1": "65AZQHmVoB83YDpSUZ8hypFXyetG7oWtc4t47KzM6PKbJQiJdpJReHmAJokB9mwk9e69ZPypnyLpiEnPiC2ykemf",
  "key2": "5YTwoizj6Y5dNWZHnRF8ssMeBwHuyCZAWZmTi2igf2GNhB4SwFCh9HCMpQXAirM6ijRN5BAZ5dkEQGstnZPEmPjc",
  "key3": "pLXY28i8Kzw64nVQdw84jrYoT6iJ29SeEk8f15yrJ6GZ1feWgXStLRzb6DzU2Vb4kDK8W8i2i2ShRtfqBaA5H8s",
  "key4": "2DqfpTAx2D1DGytiteZ7veHKYYfiYTSDYm2p3QmS6bGBRuT21bzkgfoYxgnNbkm6es4mycDtBzyBEarQi1kB4VGE",
  "key5": "392txYxxqZuiWgJzCcCTVDjsNYiwpuSSqZtYswviaDqb5riZCV5MN2NvFnz4a6tyzjYxBEj5kG6duywsASPGbqUT",
  "key6": "4Nc3CGpPYzjJkuDdq8y4o7UKdVdZFq5MHRrYHXwvpKKsHUHdYtLRPQEgMU1cGSatFSBV8d6dfA1fgi4euir6hRHy",
  "key7": "5e1FtseLVG5hVkSwBNrmUBSU7xEFxkcYNkyf21QkjyQMUboYpdtCnpj3BfpCffjWcjbzsizHsG81x7CfZmQdnAne",
  "key8": "3BRaYfJahbBSp8YDN6Hbvfo8uUZSEDjmCHA9vC5db2P4waQgbHBshjxHYG374jkPbttJJ26Fp1dJkeFs1jaRko93",
  "key9": "23R4yUBW5i3SrJThQSwhvtMR5XxtaKTiyjWkHTQDGMwDA1aen329YP7r4UcMdstUYpYja19sQ1Q6u2h6KDiL7W4t",
  "key10": "2BsoxeBFHrbM4qMUtYNbuQ1s7BxPUVnEwz2w8qRFBF5EqN6XPEyxtMYvEBTVqFzY9nYUfHyApP3Ra96dJQ4G7MuS",
  "key11": "4TSAk4HVVW5EeFq8Cp1ocBnSppVNBDzBmiP3PPMnwkUdgNVaR8cKWC5nAG2SaegfwtfVXCFAGmiWC2gaLkBr4zMi",
  "key12": "5SBct4is35Pp3xxenNtzzggGFuNWNgfaCqTekuGaHuWCJDLaZTUKt9WVfV7C2HBh1uKBnDDRHDUt9Cr5XSCb1fw4",
  "key13": "2R8cSEK1FuW69SyouVyhuxgojcQHELmDCoBnjv2f94AJeEmgwZcKjyDGfGTL4bxsUjqE8DVkkZm1yteAeSZUt3t3",
  "key14": "38LQJp7LdNVJtcdxRasDtxrJkr3z6gP5SoKZV4xy8DYa2RN1fgLbsTPZNAyiifC6XoyApm4Y9NVpM1VaEpQJuwYB",
  "key15": "rwKWDUCEnv2YXRM2s2B8Xdq5K2ER5dE13FyhFSz6gA8PmH9rmy48fCnFHtWwyCHc5Ugj1kQSaYfTUmR7f7L7RPx",
  "key16": "SP8SZdcJS4JfYoMpWHiYFQJ4TpYVA4PTmx1NFzwi6X3FbGtFRpBUCQkf8wL7VxH9GC8dhAmdqbVJqp6Swwqm3FP",
  "key17": "2L3nnJndxpFvxoJdzmDHY9791jQxq2UtKHBGqVCMCV5aS7Di5KKJufkwA9FJsLoawM5wCjECjeRUCm94yJgeFK4L",
  "key18": "2tsoTFi9BXEbmzz6Ztb6dUMwzvLW32PBTFFkcS1xPEKALmTwoBWaFvFkQEzcz5gV5pUNgytT3THvnCuEVpDD6yiQ",
  "key19": "4M7EJS7xJaXUstbqyrk8MiVMM2hxDbBJM6V25R8PcfDy1HonFtKjMwSoZte6SoYoqmo3JMY2Z6ktjxNYtBk7GzZV",
  "key20": "5BGZsJwXLyKzhEfQ7eVbMgsd2LLfaFPZfhvoTKLub3U3CqV8WRBAufXerG4bQoxYwUeoaV3Sr7EhXPkVyvhR5CWk",
  "key21": "24fTcYzMYT1EavNToz6LUpp2qXjbvPaNuQRF1mNN6kbeZeq1H4NpC3sPiRhoVfAq9GaE6mmEBTmiTeJaPhfegRvN",
  "key22": "3Whpx9iXGwEHgHbqujtLvpx1EjmaoxZgdBCtTskPGSkwU1rh9kjjhm2CYK9ts7rSmttBwCzcJALsj8ibyiN57K1s",
  "key23": "3vcWDHPZh9j4qWFh6Ytq6StNCyh1kTGpHjnrFCRUPZWjVRM6VdBcEjHRX69wL3c2yGFQr7QXAxhDTRReyuCr73Bw",
  "key24": "2KC3NsEoCw63wni4xSGpdeczgg4DSviHFeMqGTkcyQoEhrptEtdvdMC7eiA9Lcsja9pRc7tVdPGhm6XXHNCuwJRt",
  "key25": "25wgWWDesP9XDMNFxFjaoChbsH7bfXVkNk77xWH4c1mJRfKN4YzDPXKhU4FKp3J46ExsuL4ojvmPVDJspsG1J6N6",
  "key26": "2BYj22W48uwgqC8A2Q1GLF9WodMmP7z7ZtKrJgJFKFpshsXMtYTLRPJgFRV3GarpWUHiy4SsdSF3ADRnRxRoTmZw",
  "key27": "jHwBq633ii4RTsSE5AdAtFmUdCWefo3bHhdGbPmHJNeXsyKk5Tx8GfEkDsEqv4gvAknLwar2wEXE5GVnmQ9hPZp",
  "key28": "VhS8iL8z46uBgUiSDtrw6KuoUgP6Zng2Jm8f5RJAVHiPrTTa14tESxKZk96pc5njhtw2xqyhysPpkVru2GpTKyW",
  "key29": "3GEQQURGCxTVBAoupc6P3BHUoQmeCfinX8Dk1vu6VfBCP3kT7Jug1K5WJs7BKEFJBK7g4A3iFLRzEZJkm33DTr84",
  "key30": "5zu8wHTdXieyERkCuaFXs8bro85UD7Q5girkyHE6swyFBrA2UT5hsNqdgxQ2Lo7bAvYVMESY9qbCuXddaUVbhw28",
  "key31": "rGAVzmKSFc9hDPoresLXCR39RL4HTvDFa2WD9FsN3rZKAprEL4p43sgqQNjkaXYxpgoBbWJj8gYr2MJfQUMkC1L",
  "key32": "4FTqALQBJJk93CTaCsZrMaS6wLEixctXxdrVBXg3kFNQmdrqihGL23e8R1R4B8D1rwn3qEfLBCwC1c1kZhtYgbjp",
  "key33": "266USXqqNf69jciSprVFreeMzeLbqtpxbCdg7iEU1PFBkkk6BdRDWQbx7K2sN8HpD8HvsMTrDgQ4s2mp3Qwsw1xV",
  "key34": "2yuk3boUG7tqN1Do3WuiQrT4hL7kzasu9HtSYMABVBwaCUTqyfaG5E3bC6GXer6BWhSERJXh27qug7g5Z1ThnEat",
  "key35": "2WUvDa1ctMkQokmcg8NLuZFRG3beEXLbifyQz6os9TdvF6mg5nJgN5PgqnD4nu4xmGPLb5m5GsjVTH4qCk4aKykq",
  "key36": "3Bh7spwLN4iDTFAQ2ZypMCuBNKU7jXezkAfAxRwS5rdVLToKFddh7gr9HRq15tnYn5cnsmZG1F5VMDYwkKoEtUGW",
  "key37": "5gzzPG4VjUx66Y3iRz6DV8eZc2VBxyz8yQf4kprjX4t9fmM7e1nvrquSLnwaTuhs17C9ga8QbJQhgQjcRJ1u9kKF",
  "key38": "4PfL44uUrHFkdxWLZbGMvUue7c37cXgbSi17BDoGZ2Bj4py4ejVnKRgBZRBZj6jkyuqArjeU6VBisCMUVwqKtMEP",
  "key39": "3vw24RC3zFqDADMers1a9MxZf6qQ9hG4vXEi451Gd7kDft1wn7E3QbXhhoZCU7uGAHUjWmJ6xTwSfmVQMAcxSZaS"
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
