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
    "2AZBiKYytKSfDi7c4eHySQtaupUKdxvZnneopwRS9CHF6BggjYK1BgxYjovhPTVfJNhyJwkStGEeMEUvDeVuvb4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7yat4ctGiMGcaXuRhXMjHRbHZVWTaqYUoiSopUVwJ3A2hBwtCtGrnbMZuZyAYnjpYWGgYajGVgUocaQY1CQny",
  "key1": "2NTVmc3WjEkYCRQ1xNs5y8eaLSPpHdBvcMbYRHP8kaK2Rc3uSqibPT9hy7S1fomy5Q4JASNmPENNd1vSMciLhAv9",
  "key2": "45LNUMg1HneWWu95DYgWE7R2hLriec1QdJo1fMBSwFzGKHJkFSXmD5gkGsW8PBQJw89B8487YxjEwMGP2MxR4GGW",
  "key3": "5vUQruoSNisCBHgEmu43w24bcea5a2c5V19f5oZ3w5EF3itNoC15VMLqDScVMXrnZJKa2X9FigqgEJkshQBqBsZJ",
  "key4": "5nMDqP6LraUA2mL4HeDBbcHXi7bgDiGdrycXAEWE1HuqGGxwvjfCK5KehGqkJEB4Lq6rYLgMAoj1gLf5TkcgxWy7",
  "key5": "37oDrtatTwNGBJNN3cVttLyTWWQJMWDFgwuNdDDoAfSwrAgK4bHujp8swGmew5xm1Th6hw9tsRykrU77QwZ3PRcB",
  "key6": "LBKPUKBRNBGs5TyXU2DMFjj6G8RRtPMgmzWRQu3fULbGzt342tMgZMDSdnhw32RqrJmpQju9UXdZG6KVdjXkVjP",
  "key7": "3Dcj5Qo1chNPJCJYk8Arqp8bPtNxakwZmqeUhXDHQ2KUoXgbcBoRi2D4e7kXi93VPAM8eMiCmP1Q6EfRdaiiwvr7",
  "key8": "44Hxjhrq75UePg2QgJCCJ8FGH76HEd3FCMGw6LH3AFdcHBRz9BtfHFWTiy5wCvSaYDySK59DzQ8cZnozrkSsMxpr",
  "key9": "2RKogi8BQ3symavpZwbCMjXPMGXw3amozfmRTXCMzvvnnU6SrAdtpMSwGAoAM9NJ1BqW8YMmLh1zQQuDZhsay7Fa",
  "key10": "q43AdUDXowgq6YAgW2kX2xCYkKXeGuVxJKAXYcFkgjqUWxhw9Z2xLvd63neKoQnLc3y8vQ7oDuFufnXoYK7VUFE",
  "key11": "43TStwi3Nfd39NVyy72pnhR4iBpqLZ232teErdFTo3Jo4cB83ckpoVCceJre6kER1pAxG5WsogrV4DkGHrAQvpm6",
  "key12": "24bxdhS1aRF6iJpKxaPHnhzhejn2Y6nhECgp4oUDXytPqsr3Jztu6bhkGMdn5eamCWC6ewNopzuw2VGtVAe7oBef",
  "key13": "xBBKJziRXWJmQVB7ApJA1MEz9igkBrKbNVDm4ExEKekZ7qNt6SJHYhjFLJgzjV1yyTfeZz1LAmofwQAAHh28SR1",
  "key14": "2iZcr1dWezuNKLja73NJ4Md7qkCPtuzVpama2DyHrbHM9UGa91cDjg1njWmFSGVbb8RigrrL18B1H4KzoQqsUg3b",
  "key15": "4zKpMUQemkDh5sb4zgEx3Lcpw2YpxRUzbardjQjNCTtWPqa1kypSPXZ5UQue8vrxxsw1N31NB7fcjK77Jc6fJNo9",
  "key16": "2TB7c48mNgmJpCgZc74f8pEA2v6GhV4qRsd4rnpiRXKBCLvz7gza7B3ZcWtZfN8Cb7LBZBEMScwbMcvmVxnjWZix",
  "key17": "3D6tsJ6WJbVWdRsRGMKy4daksZ7SDnAbMGsows4H8mzf4NJ1ugQdPHq8QigxuKaF2qERvDepBLctG3w71Yvh5iKk",
  "key18": "2rVifoNrcyiToYEWWgQSAxcUt3UDvX8tXhRUKTndHDSPznuCpjdS9h5121qx5dbDaMyHicRA6nYXoNv63XVyCWzQ",
  "key19": "37XB5eYks9ZCykcSBe4Nk5uUm7Kr751rPi1xATmufi4LmnwM6YomK5v6LmPBCkbziKB9ubSi2g6FyUPBvsErYZBw",
  "key20": "2BBg2WtyCVEhuqNoXMQbDvGbM9AsG6zYv2y63HZJoJ1sXEtSZbVTmGw4PLLLPZXR8nDN7vPo1uMxY3c6nK8fPqn8",
  "key21": "JoaeBAGY8C6Ko1iPGKcUkYfXeTYg74nitfWJh1pjqoat3Gv2qJ2P86aehoyAAyCkkhEPmGuKqSfKgkUcQw1BTJy",
  "key22": "igPjUHkf8abDsFg7BpkH67FRguaccj3muPkLiSWQuLr4dCd2HuDcqTT43VHaiD5LbxR4PTcTZ8LVmbVBQKKSQcJ",
  "key23": "3qsFQZa9Lsgg8BoX3fJoWUE7NUtnsMFGe34iPou3pKKPjVTSiJc4yHVqgnu61xwYDWHNHitc6fhisyWtBa9wgQyz",
  "key24": "3BhETiXHFKHkvT4JrgwbJpWuHa2HH5ddNMdvH3ZUmtVrEJsgbpmLJb73yrGykBhUS6KraAsEFWdxiFsSZVVuGvPb",
  "key25": "3MbeSLMWoxPMcnE2YP4ky1WgMCvNDEvHeWrKDAZVjjApWfc7J4DF45en2VSJRUutwnisYnq3cWoSeoC9XtyCYmvM",
  "key26": "61un85RbGVnoMpHkEKrcTBTpNRee5tQVgreumgjcku2GRjojka3C9XVUFFBQqur29BqVGCdAaQYigk4deaGT4pSA",
  "key27": "JiVNkgMRrz9unyskRZqkT2STyH7ywDpAfPTJWEgcfLr58Gyrui5DUAUtp46PNqKSVRSR7k4SUUdVKvRLYjTgCHV",
  "key28": "3NuMWZDXwTnGSoiScW44V7vtpeo3MXHAEQCTG9WUbCitvN3cts4BSbkTbDuQQVXxjWeLKQxmRQSn1wTWq961BQoU",
  "key29": "KFdMgB3YMdG13usp5DgUxnHsxbQsdeH6E2r5C6ixPeb4bUX7dDrM6gNd7bLKGB88vjU8opCX2m3uNgrfGGYn7bw",
  "key30": "4zy5Em1JeA6yDEpfByptvdwRMQ55kpNY1kK5J6GxvTz92NJNLkh2yZLecbDeKo8rSyo2FKdNsoBMnKEiib2oEfrN",
  "key31": "2WkFKgsFyk9VSfjUPtqMqWCjqySbfhcZ78egKgCBsRCQf92CZHdu1tZHfd47JhvTH9bdNMKCwBKMfHdMku27oFtZ",
  "key32": "3et3ZgCRdcPMyny3M8pYS7U8A7TPrXNsRhbhZmH6Y6MRd6TL8Vxvp1PcU8LravBmx3bdEhmMmiTdxvwEGaVCRm82",
  "key33": "3waLZZG1uQUVPXy2ZHdC3rTHqZ5FxRfsfg4VY7yBd2gWdGvSpYVqP8oQwFV4ANZTuKQxKE4UMQGqDE9qq38NqAFW",
  "key34": "3VxaW5QfjKmpsUH91UjEDmhe2EtboQ7zyWAx2bXtPp7chELY1WXm1NUsv44ybYs5WstSvDmsxWBPLnoiienbPy24",
  "key35": "21J5re5dNCYw2KYfdhc5yNGM8fchts6GaLknw4FwNdRtgJt1FhitGmNCJxd8WXnPSexfiijTq6invxyVJpesCqvj",
  "key36": "3kSKNbvms4YV2ZxANzYwEgnLnwExgtdUVNvtPG46yDXH4a9L9ztXM8eamqgJ3a27mQp7YQg8E3vUAF1jzatUvd7p",
  "key37": "5Dz6JVXncghGw437QNpfmf5HUBouMK6esFn3gs99aNZGCoNzwnd4cV2Kwxj7u3thMyc2dP49iBqweAaHnVcED5pd",
  "key38": "3NbnYoCfwXmbj3JvXcww23BSZrGRozr16wtz3BMvhb31iXvkNjJTy6KbJ4w2tASamLHJXfQNRxa5LaxvPaLLLcWV",
  "key39": "pfaHhoS3QGA7TFnvPJoQ2aVSKe9HXJ6qXhemaBSMB2gsFTXe4WBKmLX1Dtvpw7goRL7W5A8mzbejaELwEL2HFok",
  "key40": "4c6JYcaQ8M9xWMH8uCnjYEBmRsVqWucuLD3erqK6BtuvSrrBBknPY422LdS1SaebkFrS21iSbi3P7viH4dGunjT9",
  "key41": "5gDd6gjWQD4avf6AXajyNJVQnDwRZDwRSWdZiDULmzFLe4CEUYLxr4ovxaJYAdMYcK5GbaaEyer9xPctSFpfqrs4"
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
