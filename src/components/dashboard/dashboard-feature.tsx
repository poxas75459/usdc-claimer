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
    "2sMghfekZK9AcapfF3Rf2TymUJBKYX5voTqRoWnNJzUDnJ4VBKGnk2nnTRG2buTKF17iuwco8LSEWAQ2QCEYbXJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgutioBEKrUwq5CYfVhvTXABwHwX9z3uegEpzS49PjheuxgyGm49nC4uDgMwnB9dCkQ5pSb39Y2Kh7i9ZtL8Rqr",
  "key1": "4zAERTjCW4hAn1yysJGZp7HPdRM3KtzSddaCSsDhcesrMxW3HC1spPsWWCCbD9eSY5QeLVnNSWpdpxEi1rMEqwKP",
  "key2": "2XkdUiMkFRVKqdfTiicLLds1wVDUUXqPuW3xxFqMNg8eRaux8nNAKS1CaTpMSiCipNdyEvcX3ujbGLGquceojBCJ",
  "key3": "5J3SiLTeb3ZPrnJB9WtYtZ4Ua4XwN4km2ATdESS13BcPQ5fmGhXrRP5qQ89ZmwHGc9kEouw1ttjKCUYHhCaKW7xf",
  "key4": "5ByQjoaCx6KCru3fJNdZ5w7f7DGSQdRQ2Cg6F32JBdYzoZ2C1ig2EcpxfsCEURCDWnvRynNyJcvWCt5MicwHZRZw",
  "key5": "2G6QmqWt6KKDdwdkzbchrNvxiZjkpxvR2nSPuQuwvh7eWDvn1SnrhvSyDNXs2KzQFbXk9snJxEgyzrPT6VvcNdkX",
  "key6": "4GmH2XMosrE8DDq2TQNurVTbS6Z3WcLXwyBv7FKAaAnUiSr8sX5zQ4ahEmzu7HfvjRrz8SxouPRxhDyMTn5pTvuB",
  "key7": "53FcdQ3vUzhu39AWqVVyRLFVMXZ3BmtxB1o5ijTqSCtBG4Sm32ZpVZvQfUykky23pUEobu9azdRuBnSpDBYNgqVq",
  "key8": "47Vmv7wkk3Tko31xVdVFHcxNgarwdAdRxSMg5QwtAYkHab4xiBwA12eMaZ6ycrDGfrDh74hz8DdB4om6x22kBj1o",
  "key9": "5Naa9nGf31oi2DhDmUgUsYojfvF1y5YjctHGAfLDREEXFiH8MSCVpnrKEAncQdYEVPn3hwdzNnHMoxqUKHpi6pnJ",
  "key10": "2ehE317Eksm7PxtaEH2DF1UBNj6iZbC6BLLu22Tfi3DFbsoq28UAMHMgDphSB34V7c3Y9ti7mpVTKYgEQSg7sBXD",
  "key11": "2wYYiWSqjZ1dfrQhf6u5faC6NEQqX8m5Ws4DRRQJJxrSpfesoAtREbgsSScHTS2eJC75Y8j7qcENNNBX6YoHdZHs",
  "key12": "36bCFiKoGjKKgKp2gNhEUvWGmt2HjcwMcVxZq2vyXnAMxYpMpAT5FYLE7LBiFa4NjVwKcLqhTVS4zspWokbai9er",
  "key13": "5vhZdELU9NjdDWFhcmGHxBx4UreggDFTrrpMucmi9zoCAs7MCL4RBXLRaZUtYrBHZvUforrvnK3EoHfxfmtotKJ8",
  "key14": "2ZMrnBEATinmhFtyuiUN1x6WWqwjhXq1PuyyPJJoPoXjN8dN7u4C1giBVghcuDLDyaW8QvMw4tvqRBBFUYWZ1ijL",
  "key15": "2AVhK2xuyoVpVEhN5S3zq1uiTFrQF3fqZ2enX34BsQaQicV29MADmW3Y7onYeLM85tvJBgRhro8hhxiGNUpNVSXN",
  "key16": "2o323zcuobJsQe7g6Zzf4CDEs87qMG4V3qHoMxvnRCZYqcnkYDGfM1g6VvXExMsZqef7MSSGoeqvZ33M2M7FBkKr",
  "key17": "3p8v5DfQozwRSP1nq39erBHNTpxiSwCoqzoWFYF6TFhG3HJ3djfyMeJA1Ct9LQ4CQMpJWLa3BsN3yUQEdY7uefzA",
  "key18": "5nwRcGdDyRw9xcJmEErardDTfDXeZWZmo7vhvS98KEtYouT8bJwWfChnbxTiAAHXqDk2tBa8nbYyDLBcYJc4DAzb",
  "key19": "5rEHAtfkPiNsYaP7ti6MP7yc6HCdnJ8gzx1a4RUdNP15a7PSDHqXmCHpe3uzugyiA4iS1f3GBp1QErQVKA7yLadG",
  "key20": "3SVvZ9TwYFyckvJkC36pgAADTZH8iYJRMs1KXoRpxTToQiKGfnRNxouYy6sTmLk7DSUWLbiVpMLw93pJvUqpsCvL",
  "key21": "LwcGFz2JY1GtMVGn7izkeLw8BQbj6KLwuHgpE8sx9stpR7b4PGaEoYwZK2qiFAac8YndSVTn1dDxFXpyqgnbyRW",
  "key22": "2XCu9FYtxNvccBJr4w2qmBUAYEXZwPHeDSCYPKRnCoWnqMc4KeiAzDymACrrvZJiMWvW984x4sWLDhediHCDdoij",
  "key23": "44gucHfTQqxeAMJXhHWopsrcEvf5peNZoUqBM7qR8EPgjZJm3Rx2g2mV4Bi424cQmAHH5b2wzBZz6gfPAGJFPWqK",
  "key24": "63BZZsN4Wp4YdnftiAc1ZxqfknPmJkCfUUr1cXA3gbjjM5nQokbeipG6WuH1kZLcL9LgyHc88Af4wGypZyKK4UNv",
  "key25": "ZkmXHLb2gVsHXKixKu7VtYYNp72BuRdaikmYVLkpAMWpW1kVgcx1qqtJpcu1GJYH3neVPWR6Brnm9833ad5LYmz",
  "key26": "3amVijdcnJvBf1NKEjaH4JcUuXg9seUjKkBGMmvtaWNi3ZcanxW4Qx4Hg7CBovzuSm6xaEMGVuxXreQEutpqzMFS",
  "key27": "3NaoDb7DDdHtCaG3DSLqatSxwGQ96MKkBy7SPkjRpjv3UqpqqXTbpt7nQmzBcfLK5DibhJrnXjjSZuwKrYqXczwz",
  "key28": "4HVU3rk1uUPHeeRTCb9Mc3cjaAmsFEcGqd1RDCeiWSRr4EQ94bs3V4KnJCigFSVZEiBzptm7RWF8kAPbycExREUM",
  "key29": "2FinbmQwRJ6gR9M6FYNF8EwSjcCzo47TKQKinYzX3k7JJDeFXmC5BmGeTw6p9tbs4YqAp1uAi8goAXTLbbXZhvYy",
  "key30": "3yDr3WqJhKgw9p64N6UUGUQ2JEVFBqT9pgGopfwB5jggQWU1NcCCb4GKXMmSbFWw1KMoPX5v55ZMgUz6nJPKAurW",
  "key31": "3LoXpr6avJuEvY2EwDSAYhGgFCD82upc3ULyXcLoY9yme92h6VSx75Wkn8at7rpU15fYEYzGhTEACGjCniyCgpY2",
  "key32": "4wyorkM3sxMGt3RkjhCiAUwE3s4etMAbPtz1rdrNjYVjugnMB5as8X5TbGHBUb3a4ZBKRgtcPLCWRDobS4qax28o",
  "key33": "2tiTjbZyU1zsLTKrgmcb9UULQzhWQd3MfKtz2tMyXHmQLujLDibATr1C8Ntt8ZUHvGyiZsSq9hbi7p8wiyGcreGd",
  "key34": "126ujiGiSf6UeqMawTP1LDdULfZ8UEZZRrnYq7GpHiKi4e1eLeWvXRCA1zA1aRbKuT6WS2XaGEyWjxJi1wFjGKyF",
  "key35": "2NoKqjY92gsZ8bwqD54sFAnbACs6nftmCXu6qb4SBEEcV48xqYCNCY1nZnR6PcZo42kvSgxXvP8n8emt58HehFLc",
  "key36": "p6YKPpByAWMDF8RdEiVDi3cCeoYCbH9XuD9kEHVcNCHD8t6QVsNfvHBDk7cDcd6eGitGEcLfY5Fr8vP9utuu9vU",
  "key37": "DSFcjXTcArU8zdF5oRnffJp2p2U3GHw2aK2pZx54w3ZYXm8C4WfCKTw8NdV3DqdRFttN54Upuj6o1H14CaUWDnX",
  "key38": "8qLe9JVURDGFNoHeY9LzcaA64m9pgcT7fTAELCbcCdseY3iS6Zyf1216NZM4DthP3HTNZCuZocMu8wi2KDkTMRh",
  "key39": "2pgLTEF5REcJ7sPr6Coh7s6nTsGgqndrSghdU6VUt5L4gwvi4QgKyVwxCASc7wLUanwEZ6Pvy8cUJsGcewpQ792W",
  "key40": "2S8pJ5Qv9PWbMs1oDXuZXDV2QmSLYsfWF49HookqJHQXWWqvPYWjuv9xw4GJVuBTZRh3QGwSKN943XGZG7nqSmMj",
  "key41": "3ycQb34Vu6mUjytbPqgTTjPtwmi6B88v1wmmZzmF7pLaS1uYvFp4QcAR8NGR6Ybgk9UXbS8PNkMyFz5Jj4GFn2ck",
  "key42": "46fXrVyiZAd8GpHqVo9rvraUqygfc8NWrcX6WNgDoDBydNh4iobMjeJi1K18QgrdUJnAHampygH9vCwgo3YiYsdm",
  "key43": "49yFmvmvh7Y7qs7TmATKizNQMApqSaXhDCBjTbAst7JeN7GECVy1apc5LsFCgyatkeNBaZ9EvuVDuohUAbBCjjCf",
  "key44": "3kCQxaQLyDrcGiJ1GpqDZZ5GjTyp4yz27ZqN3Gtm6ePN17veyG3YmGMZTNbzgnSfXWhnBD7VpjnqzDdibcXxR55y",
  "key45": "3PUpM7SApp3Wc5uBsmE4SSPXVtvrvhqgSwAUGaTkYsejpv2yyYpprM5TXjJyMSJJXoJRJdGztGHEJMJGLWx5ee2d"
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
