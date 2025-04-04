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
    "5FyHktdJdmnREk6j34hH7LxCWdKwMCPsL1smZaTvGMtF9TYfEgoNdDvAp8D9oke2tr7i8cdKvrcXSryBpapNfL4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djN52r99xT5MCd6TBEA96AKUMfHngG9RRybKSCDu7PFTFtr5DfS4KNc2z7aF12ybuMtFB4LdgJjbdZrgsXWuYRz",
  "key1": "3qyrxRPzuUqP2bvmpPmeuXuKVeVa7asvMAN8eP9cytd1yNDGrTkbuRz3z3EFJ5J1phtvBm4DGZhn2n5ivTkm8rsD",
  "key2": "m6wqDHX2DS9dWq4qYKJ7kGxXVDprMVEm69cTM6jBQX4J5KH1reNqDrjduduj5DEcjGnqePfzm3tvDQid1uWJWqh",
  "key3": "62DVZziL3YiatWnDJGLLwJpXf98Npp8nhgNQgevxfppKswPKonsFdAVxpZj2bmf9UsQonAEqNv8zpC7vjpH1GtLa",
  "key4": "3o53PXWUUbaydSeCdhGxjTCDibYcjvkLbAvFpDtAkVYEsYkQE1UcbcbVR7i34McQ2CHQMxPN7m2A3oEaf5zpbrZu",
  "key5": "SgChRuDsTMWiXmhQv3fh9mEDhpZn8ZZo7eaJhKf9qNGbMyuuUTYXitvRWMaYFPTuYs744dVZKb5KzKPVTmZhSy6",
  "key6": "3QZwbrRxheMBehC8C6dyhGr1PMt3ULQg1vZeYruMpRyYF7t48y2NLB9r8h8QHMiuEjntrgaX6qWhDF6NucWJJT1D",
  "key7": "yE2unFtCMzMrUyVSgj1mrmkGnQoVyKv15yEVcapD3aAiYPUoeRGo8zLddpnjmy7ostiFvYezMVdPdiesgDo25Hs",
  "key8": "5bwFKSDYXgH3aBP9QHKxj8Qf4mzBqjSvYXHQt6eJGLLQRwjxaTFZfPdPcV4uzWwkPe1M3kewDne3zvAs2tuqWmm1",
  "key9": "4VucV6TS3p4NPgx6xD4yEMEKU8KDxEasJr7xddkyrop1X8GhiQKqVKcXpPLwiJYCmLgUKXap1gqYUabaq819TeVz",
  "key10": "3DaP6qUKHXXDYmbgf9DX4Doc2ffKXaHjMTTFZNPVr1NiHeSH85FvsSsGQFGaCfKfTiJx9SKMv1bnYHQuHvajyT6h",
  "key11": "4N7bCvd2YJBBeSduQEtnDKrcqKbHvoET6aN48sthPM9LkiExtKtXjK1x3fZvd1DCpRU1tEZ7RLXbQ5Feovnoo32D",
  "key12": "xjuVPMxJkrWDyFbTHkyUeKaL1ZoimqKmED8PLFnQModDw6yfKfm23yZnSXsbVG9MtWo9odRRhTbXPHmw1cXRcJc",
  "key13": "4rq3tQmW2iQudk8TjBRnKmwgrj6jessiPqeuh4itQDiq1FNd2jR1197UdcsfxaDpZ1sCsWUW5ArfBCMW3GJTzNPR",
  "key14": "64BDpd5nf5rNfgw4D4btRKGopRBQCQeSWaLxaCMpHCxFHQ8b1FzukUvBT42w6eTpUtmVjCBPReuXquayabxFCGsW",
  "key15": "22kk84qVDBfwJcVj32u9hN9VYcikWzhePybZQLGNnrZ3S3KgJ6Y2jTbCHKttQezwEmt4Kjsqtvm86xKhvrvYCbjR",
  "key16": "b7XtmM36D3bdCk8fsuVcLUX7y6sv5YhKxTxMHCW42CWG99rS2yvuNBeMP1NBhad26noyWYzjAQkLz6jEY6KKm3f",
  "key17": "ZcAhRWgeoqQFiyBneme1JHb1rmdDnm8LNNjkS2dDVJdzBLYqyHX6S4LoV74MfchbpGAwooiY48JL751D85nP6EE",
  "key18": "3mcPoZTaJU1kU43AfF4yKEZvAwhEDYUr1sozsHcm5jRcxNGDHUUMu1cnaeMCGGi6PsfJsdT48teJ2CbZ2RDSUNEr",
  "key19": "QjDK8PLbE4hrwNfpY9vPD9Hz6JfP6sTxtg4Yde4K15nUk1icbbDyDywdt1V8tEPdfGwGEsT1HprgH7vDW5cifgA",
  "key20": "Zbu1ECzhJ6YCVJ6ytUNXVFCmNjUPwQrt5Qw2V7LXn3psirXEBmSLSr2RfDQM6tuGUisgfjaJXif6kbRATrz69yr",
  "key21": "2Dkt4b1gzzGsLiJ4zVqhszMU7x2XrBigiKp9M3as9mzZEDZs9RwUdCaRqmAAG7gTkHWpLtEuWeKbVrzTE5SXkN2H",
  "key22": "ki6HTSVfwsa247D5xRw7kdFpJzaRzWka3y4QE6oepmgPJpmZW6wJr8pGQYeVbrBhhRgKa1epwNuBije1Ktat9mo",
  "key23": "moMR2gFehCD4FGBRnbPyuGYBvH4vE8VqTmHLp7uE2jmdVYyT2LrkUNYmuicrAdsM4CfegmFRUnsq7rVTxF7cVza",
  "key24": "332FosmYgFmdHQWPY2q3sy8cccBrQwetAyaSSY2AZsvEGoSxC47fydyX7RAdEV4wj6sbrv23ndbUuZfFxYT465mH",
  "key25": "2jQrJYzyKgQ6gVxmCpeQPS6D88RNqrxNessaw97PLTB9G5MD2P1kuAbjNnB2LgujKGupS6DdR5qiiktGD45WoB7c",
  "key26": "2xvQRX7uz2crMqE2FBoyXzSYwdUN3YN59YnToRgh5PEs2ZftM7wBb8czYsXYsnkkb5fQXHp25ptsZvbS83dSF43E",
  "key27": "3DfBExNEtzzMA9n19i1m3DdpeLGDMy1oVhBi5hbCfUwcAUurW5uNusSdyRkbEw4LXBXB2knj9X6v7tJD7D8or3gq",
  "key28": "y3N1a4fSwxrTqmK7vxNkqQdS4NFRkD9CesMNi93kMEkF5bsArJnHb1jDdLxL4V9LV1kcdUKRX3xGjR3XcXUUDVG",
  "key29": "3mgRhQXeiM28T7GpH76BE4fgxv1RnaMF3K3H83y8rsofJfrLpgd6uA7sUAhvkpzedLckuMiEq5dyvRgW4XXTGhKo",
  "key30": "43gSzTGEmrRMuoXF9EkXRcGP6Nh2RcyJjkmbwMNBeLWAE1HsbfKYGwB5TFpCRezPV3PmPFUdodBSd7zf4ULyXvjV",
  "key31": "4NJRkCWvxnYmCPt23vRWrdyuD3k94vEy9VHX8s5dKVoSqVDiuGDMKEHVX4MDJ7dWjGpTnNR96mBHmA7SSdPVBAYG",
  "key32": "3Na4qact9mKNvt9PpFCuC61PWUCzSDaju4ANMzE4eH8Hg5f74VhJxGKKszpB8T55cvp7pQyL1x98gUxkNNH5pZkW",
  "key33": "48kUkijzQYrmQKsFGN4zbLyZ1zq6ntoM4HqwBaGiMALyv1nApWGQjqcy8cUKqy6Hd2TjrXVs2HuBxJe51p9YbB48",
  "key34": "3NTWahAjJ5xwVnHcwvE6Sh7ysaysp8wSc1dgUBJoeKj6xExunT7rQaMc4PRy4KNbGqrpxuY91w1vF8AMb32FeNXx",
  "key35": "GReJGjLHVBRdQqm6vjK82zEsaYyPLzKZGb4D3WDnUF62DtD8Qi26BffQFKKfi8CrNxiqaXLPtTd4BA8pJJ9RmTe",
  "key36": "5ZTg5opt7LDMoMZPEboZFiF3pG1kASb6iGcWHrfN8FrSEirhfLYZtkujELdCnr6RX2HrLbv4ZsYVBe24ntqznm63",
  "key37": "bsvr3BV9PFwmuDVPMB97NxRPqQMuU7EwGxgAa71rH3ad8ibM9HkZVg4ekKHcb7bYFfgDb7MNSZiFbw3YkCn43cN",
  "key38": "4LujTaR36DJxspMq1Pduhov73sRT4VMjYyhyc74SSft9cygv7CtZWLYqYrmwmQw2idtCoWxpH8GbysV4qV64zSKv",
  "key39": "5yPKVfQZ34p6uk9XuMrszQCusR3EZ7R8kF8R745J2va8efv3HnZGoaWPNy9fAr2aJwgPFrgjnw8vPbEUWinTJHq3",
  "key40": "2VZnfymn6RaVLUTmAMzgA4vNHhSicEsqXjsSq9MdYmk8zege9fyEKhJmwGD749ixuQmogQd9REtoGJ5aECW6dQ53",
  "key41": "3ZJ1jxQWMsMdu97v3zDEJmnSxUGqkC5yzhk3sJDktczUxn6umhQ7tWVZWWEG5z2q4Npx4g24pJeUpjo1S9xdh3AQ",
  "key42": "2QjGmgQkjHqvF5tcbJDE8eeJ1AdTWBToDSx42PMBbZ3YZpBJ8w1HVxapD94RbRQq2SFgj4E9s2RSuEHzQQh2RWrn",
  "key43": "3835q2zgkPBRtLdSL42ubRQyUzgsZC4KFMTbJDFGnmPhYQbXToHcxzGECnWpU8QKaBd2fL2CiFF37cKTckd3vAe6",
  "key44": "2BESRW4fiF7C74u3gDHqreQJpYfLbDythw7aegAEwB62ia7c1RcCHLHkfTFRMtiVZhouw8X8g2XgxfwJNnnj147v",
  "key45": "4bWGRr5WQvxQNKv5vearJoapY15VrhUezFUU7uMVk9XwcyFFKah6ep3RwMHw47V49ezKfFkEiJQHxLyV1E2LkXMa",
  "key46": "iGUMe5YHAQJb7g7Tx5gwunKpw32rSuciiRzf3iA3KZyDT9hdpGvB5Rk4JrwwrbKXBjbSqQfgCCcaXKCfB8kvZAw"
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
