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
    "26x6rpbNcHyC3jgoSubqHmwAWj3BJWMHir2ryy6ag8gFU7wCkrG62iMkPqWaGNECyKMNSKUZfmdvFp24YDYqEig1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z823RAsZbVGur4wR7pNKhkKzFDKAsQXvQ6zmiC9AdNRA6S3rTihSqdrVYqHJxv6r5JrkC72Yi3rE7V486HYrPq6",
  "key1": "YSwPN9j8xoVsm3tNnXaHtxacmNYoyCNndfb87ZCeRN4WdWxk76wkPpfkmhxn9aCEZgz1swuy7inktas4xSBW5pe",
  "key2": "L8bHMvnoLFGHzk7DEvr9h7j2ZcoueyzACkeZTdLnqyD9mfq19Vj5W6k5nEkBW4YxTQs5ntBN5kX6pCpbUqabgpU",
  "key3": "2kYzgcPL3KEBfaiF864p28xde8d1BFL1DsG7GeqnGXw1VgCxRVMBVeaz636oFj4ELeSg3zGn1r2N2tuMqju84c2E",
  "key4": "n1vJbQ8xTqKWSRTbHDShTXN3QoNibHht5D1XLWT7icwziZ2A8GfSFBhKJ2X8x7jeByLe3bSBnxnXaSfkU1nsBY3",
  "key5": "7jNPe3xP67G6AsThzZFvqbiQnr4igC6Ljgf9CkUAueyfAY4pCDJ8tKCC7ARmsvwk2xrts8HKeYjGHR31Ze4LrQr",
  "key6": "5oBcX2XYpVvH3hY2Ef27q85qoiZgdVjRfwoY9tdLWh9AzycV3rcZVfUjmUAHCwEEtEEefi1bys9TXcTsYvXgJgww",
  "key7": "57ZN7NhAKBin1C8Y9e5qAsYMH5coxMTQYUTFRWQmaPVG6Fp5C9YeqTHeNTtQZpghXAswjWcxbuTQD8s5UotDE5jT",
  "key8": "43cVN7LigfyRgA97Z5eRNNnobBcPJ4L6Z4dUFJ51W6XWvXP42JdfYpBhBjsPAaxsMnDs8Mo9MTac3NrmLuRm8DzA",
  "key9": "4VoUsqJZLPKtZZco8L66o21NiR7WFU2hNEctiLz1i2NZAiKy6FP65J7rAAbDKC3nRQEf5bcoVSSX4BENx5SWGuwE",
  "key10": "442idRN5NKTCj61g9YGmzmishet1XK9pmuSzT5f6u3Rs7GGaCcSDHsWPtzpPBWeqLULxByvKHJpJDKBuyaVXbgVR",
  "key11": "vjKdGFX3vG3YMyhtR85fTpEkNedrVAsi4iZuN7esMpGYKnKYVJK25mUnzDAmPrzUB1fbdM69V5KviJybje79YJt",
  "key12": "621WFh6fHD2N1YZFmGerqWm6pajwF1HA55uCZNjLS4d8PnMSfcUdPA8DTsXyFdxhfqmnY28t7XUjpmnGMBde68h7",
  "key13": "G4gChjAbqLdrC13qh7k4qA4D8ZtdMYaiRvp74DnvY1TjBW4wtpnsBCWz4VTSVNda2NCigBYgqDHmzKPfjgaHtUh",
  "key14": "2SFEEadzx4ibgmm7Ma6JTM9TgERqQaARDz2CJvHrWG6fLsgZgHdjJfGZRrkVuKfZctPS2J2iA72dY8LSSP9DfoZs",
  "key15": "5oZGU3CtM7b1hftZ8PDyRWKL8UpDwgmnWauUrQpSgdagNqo9PBBTjobR7kyVrA2AM4M7v5wkVzjMmewecGL94ikj",
  "key16": "3vjR1tGXyEL6P8U91PFV56M8sjgzMY5qWbvarYDsVK87P5xqV2rb1UQYrHQ13WJJxYSYpvzD7P8JRHZciu6ig3G4",
  "key17": "2v33wncASL4UVpjftchkVjxUd9YVNi15AHteMahk7bj2AxLPfgHs9XJMNNuUZvNmg5mBJLbMbb9VnPufgBchNFW4",
  "key18": "3E4QMtDFgrKqwiKk3yzAvyUQRfx138vGvzbT3xWkLsikz18kkj32s1uao8936v7eyJNA8qkwCBMUU3FTZG8i1CfW",
  "key19": "4XwPi9F4ovmYM4fLEL3Ky2YEmcBnyt1vYZwyDEnAB8g4R5CqkgM198yxag6w6xxQFkxnNcJdQSPybXd2G31BN8KP",
  "key20": "Cw2ACh6XpUjMRqUA6BWbmq8R4PJ4ojpkdwRB2nDmZRVv3VzavKgSmZU7ZQjpxB2kPyThYrxVmcpzASbs6kH41kF",
  "key21": "x1YXu8kJb4dSeczgbGevWRtmd6UusA2atKNuidLXuLcrrURrU4G9p38X8aLeGWPEu8F3hpZDrtCCg3AjWq3DRv3",
  "key22": "5VbFJ5sA7EfnfReyJ4cjpKQ48TkDnv38NAp9FWBNQavN9MuDSU9pGddciT4m1GexrfyR2hNgwwEivtCPYtYQHdCu",
  "key23": "5WZLJSsrvajYBRm8UX173qeHqcCm3rGWdZjrfePVjmKwH9tHVgUdLPtNUKp3wHbCvVjRokCvwLi1UnAFhtc2sZBk",
  "key24": "5Lhi2kqPC2iVKAJPQqrpaNAFuTGETtuNSPUptoTrQjV5aTCJxFvbxcy4UnUmqz8K8gV5ZhqHC52zhAzoq3AbELBB",
  "key25": "5CdBiAoWk4jJk3sBwVhddc4VPBpMF93gu6vmTV6BKfrXhXdQoqv2st9ktVcHHFBTSDXUbBepLbbYQxTPG9qvE295",
  "key26": "3BQwJnGH4SmHY79e5ZvTg643KQxc1ZuDBoAY9QXj6xYkCYywFHvSdKs6eBQhELovBnGmE2XJVSFfdvLrCh5bMxcq",
  "key27": "4Rv9SHpEfC7UT9EP1uoh14bb3q2CkTswudAG44As6eHcZ8x4aKHYAmR7yPMhcfcjX2o9dhVYxP8FyEdZ4oNaByq1",
  "key28": "3GxcN7kFFbNd6Ysy4EJzct7LPZN23M3A9p9paVpQQ6MXZ62eijtzMnzcHDKAzFxfePYabKvjS7yRBb8zN1143aGL",
  "key29": "3d5yjBvTa4LqK681UdftALubVUQs3M4wpe2bWUVLjPcFtYCQtVfFZL7DfZiL4y5kb8Mi8v95VGkcFLF1CD1DysMt",
  "key30": "3F91P7gVFPCi5fvUeC9kCnzYvE3RviwcQbij6Ctc4mwekrRms5JG9muh1ejTVAbfBZkHBXTVVptHsNWs1a5NFW58",
  "key31": "3VjnT7XZEr72AtGq8GwSuc3RzuWkcktbWoFjm18UGMH4YLWkgKQUWf8gVAL8j6uAk8nEbQQFQRzxyBdp9HU3T4di",
  "key32": "3qp89g6heU8tWpdRCRkUZqxEvqWyMAJoTCj4VNFePg57i3eStY99RvXGzGR5DFbdyLfAcGrjugf2r5dhRWmViSCa",
  "key33": "2weBhmxGtRen6udN9QCRcVvmxWdwdAKdNFpQuSodfciYmakvmfjeGdgcZEXbCLHqgN448ewr2r6k6fR9yGuR8C1i"
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
