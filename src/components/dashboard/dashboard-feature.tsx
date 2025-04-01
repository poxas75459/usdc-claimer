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
    "VmwNiAVbMsn9JUWFvRBmfyP11Qsej7KqUCn4bsnpNvFoNWzYNg9JzoziGSxWAGd2AkYRRHgzB7zJfqBtLWF8eyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bncUVjpSgW2rGFpdKCvy4jFHd7XGfF7hQmaTKmkqbRe7HCSC3cNLDXmcVqYUVK3jDguHjHNPhmH4LCfJWvRBYQc",
  "key1": "58iQmJHRnjwgEeacsuMnKyLAuRVt99kQDn9BMMoncDagLW8h2aNezVrinrcr37gMdKWDBs2WkuUvj12AhKjxrQ8Z",
  "key2": "2ACA6sTj5KhEiqEs4M6FyF6tLitriWg1XakgGeGtsQxYTuLDbcxdDQCwV9r2J4ZhM9DhSMhmfRwaTt36kotcxhaF",
  "key3": "3UvePtHJjJEnY1qzxJVxBhXeWQL6fn1xjU2Ft2JnZghRt7Pv2EG1UEF4EJT2VZzb3rfad3PZ2SPFNmbv6nw8D71u",
  "key4": "3C5HxATCv5XKojnRN3FByRSKUesivLmmzP3Gy1Wkj3Zok5jUBoaRi5S1hL9WG6tu3kfNmk1duCbVo5RLcEc7hpf6",
  "key5": "SrmeCcZv7fRboa5pxrRVkz3y4ookSeufvMq7MSmismu2rwGvgURGmDtsHuH7fK5RZLEGVsL1hrH4aJp7neTPqAW",
  "key6": "4y9V1XHATT2ztrfuvXTfZu6kS7MzyxPprBVgYZVuFuteN6UXaDeScZvGiw6ZPXK1dDk9sVb1Sxzc7FiCqBzNpFgU",
  "key7": "3mYooxpD2Np4sNoPA7HqzcNPwyxsUXXRATo2EWpMXB8Mjgt5PHT1gnKv8qKaV3pT7mP8LBt8QBnwwr7PugTKc3fv",
  "key8": "48LePzoScSsrmui2aDbwbvdEg8vENdV77WgTFSdRXX9ya5ifaTQBYVPxvjS5uZdSKdpiMd6LbjD26m2wazRe9gEU",
  "key9": "5uT4RQfSFq6wEZb4dtxbGG9Y35zu4sarukrkqRZXpDrn8vwtDEbieb62VV1dHx8B6whyosaoo5LsGhpkWCJmjAfo",
  "key10": "261oU5XVjXCKs6LvZummFpwuQMpiKMeepyuqTRuB2tKgbvEqGJSxny9SKuddVT6zCxw8cZ3T7FCdaTo83pN69PJe",
  "key11": "318mYPEnCFKTUgbLFNRCqpiupGnS9pniLoB842VdLKaB3vZUoGhaSdm6HSTTbVzJogN94Em2ec1fuHGYKJMRvgVF",
  "key12": "61tWtcpjn9qy8cgGgeRMExzzD6zrDYBX3Jx3FxLN3bk7qhfmU4SGUsZqdqjA6Q81EnyPZi4r4WRZCUPSEu9EHp8Y",
  "key13": "GnJVWz9wrKQgWZkXD1RfwHapmoCipSMwERkz7yAdXiRLWLLe3yhdJpriAt3w48H23rZipGzxKKctUjsKVeX6hE7",
  "key14": "2NCf2VpzkUdsQJVD64WYevFcaqemh86KG4GifgKmZmGwg7x29xoELd42eiq7zVnRX8cirWVf4DrjuZDKQg69V14g",
  "key15": "37hXEvBTA8cxSTA1JBrmK7hxtXSRb52vXdkMtF6YmgoP9as1nyknJKgEwQVEdgg8ijPRw1FFAAjGTsLxoW6ajdyL",
  "key16": "5uYyGaLfueSBzByZ4ZGEtc21yy3Vd8ZK6ZaP7oTyKfBwaAcSjPEDtUTt2xuch3tyAVnT6cF3CU3EECP9B5z2njRu",
  "key17": "46NQVAPVjfrxKrtfBA72F9kUCBPDA67wGdh4kEY2j1xk5rHdMNSWm59AhJA6G1dae3jTmU41kGcAt7fRi5RvdKZd",
  "key18": "YMyYtBX4EJYZqL9wEVAGgHz9qSnH2XsPqGpopeBgw7uk2Ds9XmLPH3yr9umkLcyew7JwwxeVe5MRtoCo3GjGCfW",
  "key19": "5UktorEVYjTXSV48yibbCibd47EVS5Dk1wA6zYMHRdPhJhnRJ9VTjD82dfexM3UWpYDBnjxc9iRF86sZDkKwLbU7",
  "key20": "TpTKXW3oncUSyg3H7YTMkaaqjkh6Qo1u4gMx5grD23DpPaoJQs7ehtYQyscwWibMcWYWexvGJrqjTAVQaaD3FJ4",
  "key21": "4bAWPxakHTH7L3Kxv8Jguxf4navxuRDBHCx4k21cpvPfhfHZmDXkwyPYKcwk9veqoSf3P46jx33WbDst7bi9cRmk",
  "key22": "46buRadcq5qtKErBQPkthjhqvWBUgQuwpA1t8zmtshqsUU1qR6JUXLiM1q9kFK1NrhGDjCQiTcGq4vC2ztNLhaiQ",
  "key23": "2GCpmUQJfvBkgYgUskoFY6HfkVfkYBou5qvG8esHeYkLDg115L9wM3FoKhD4PD7i2DVJBpfUdm7UpFGSZKtu2hWA",
  "key24": "AfdudDxbdGcLQXkwGSCHmPLKH1udwaxuYZJsJpE1E5jAxCHxZEYnMoGxAFKy8nPduVaYnSEQujMCVu7wQfTxJRg",
  "key25": "51WQ3rj4baGBzBB7vQh6792V2FQtJhXGahubLPxQS8EbvnVsn9ZuqXEb68ibQB75cajWTm6rBGiRk1vKycH1CKoX",
  "key26": "VW7Bn6aaeSzPfata3snAYNVT8L5KKpYTJYvCV8a4qnVvMRU2RkAyckH9Di6WGC9abZ4VpaWYECLxnbxp9iHF4Uk",
  "key27": "2npULt2bDXbGx7wgjogagbchiy7S2cH6jTA8LvFQ6TNWDD7riQwBPp7brcM6gaVafXWuM3NExbwHnPK3uJGTvFUD",
  "key28": "4dE18fDTUNKJZfNhV9Ur59128UyoELHmpWx1qfhAM7cNGWzMGoMYkrcW22um3R62LXr3k8wPTYK1XaUTDc5H3Bev",
  "key29": "61UYAbydepzQ7rkFPPsVRigQSgYENGK1cgf9pmeJDioP5G9HtqnUsKm4qA1rXWwPCUe85tvEMnePiVEfRF3T6c6n"
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
