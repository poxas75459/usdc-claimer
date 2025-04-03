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
    "KFVb6k3rVCSh5wYqEpMY3ws5JXhDnk3CcGYWKKgwvw7VShWmTY2fVqHeFzKF6Cbiw11BQKaTbxsESj1Xuf3hTCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7euypzjDBDaEQEHZj11iWcQvRzfHF9c8kU6Sqp3fzcvZQbyGyKvwLgzsPVrQpCYG8uvsLxAdUHwRy74eH1AKHE",
  "key1": "3YJ6PZUqfWThYTpePaEpN6Jhp22p6KdhLTZPRf9orUPoLAyWLEjiRyVsj2ocuD5VgT2YRA3Qw96NJB9Zq7PJQdTn",
  "key2": "3o82mcy8XFyQvmN8HUXPw3TxmgAhqBYRPCCKXW9sWtVMGUzFDp2TM7gDZvtPJVzRJrn682vxeSPaAJLrZt957TsQ",
  "key3": "4u8oLJWMMCLUMcpY227BSVQgMyJP8RkEuxnnnmbd43ozSYFoDfdkdZsNnVVtE8JNoPhPdphBA6zeYue4hzyZUZ8K",
  "key4": "41zec4GEwz94MEyFGMWrMwc1pGVAnhaS6ZRM1VMAVvKYK1PqrEShfHUQDEXx3g2p4DYqHSPwGr331xarjwQxSsXa",
  "key5": "4TDkf2p9gmM8EvWq11bBHuRUfjthFCCVtphxiSd83t3P76JxuNbjgpZsMXJ5eDtYA8ApEDwSnARdxvzdn5Mk5Sgs",
  "key6": "66pJKCH7nw9S9HW3mV1bFXYYT9hU3v6QLoxXJ4Fj5Pfh1ZHFbKghM6pqX7wNffvtgAYVAbuBB6UNYGaNPieUow3L",
  "key7": "5buGNMxtcFSUFbVQCb3PWQBWjTWSEnUFbcz3tLrJgaquWNUuPkpaaAH8yfWuPN8zxxRV8SD6E2VQTCCKNuyisqbV",
  "key8": "2cEZRugcLZNoWZYsfaHAhc1Xhhc6M8kKqukkGbdpnUyqpeXR1huaVEzxiEMKYBom2jNMKNo5B6D6Hyy2gwrdY4WB",
  "key9": "r58t5gXYh8FVDyXYrA7AAVBw3y45PiHHomAuu7fXNYGSeMpkTDcbBDqpUP5tZ75wuc51asJ5iMhGWrF97r5FN1T",
  "key10": "58pfxTM9BHnHdLa7v3tJG8AomjUugfaJGFpRnSvKDYYxHZoZUCALtntvQmQiiCRUJh42N4pgVJU8Ne3spm5xcEEE",
  "key11": "2S6iNDZuUtwukcKHbSWYuwBvYRRC7LZyiRR2vqSfY62P343CAw4gxPcggYZtgZb9iZFBXbBnS2ccyAwLdZUsedWV",
  "key12": "5cLgUD2MZy2bWXtUi6U6a9mvVHdfTdkAQH5K4QPx5ftPqr7S8rDku1riyXQPHzgFMRHggZGaHwAekT65k8pLVZc8",
  "key13": "4KS4aF6d6AYj25efSWJNdSD19DJ9kx339zPq9kkWByXhrdNYEvjhbZP92sk9jRQtUKCf2kjGtD1mM2Nkpc8zAGw2",
  "key14": "4niXU269uUNxpzY3HSArFdr9S2ZVTdh8GUbMvJCAbCQ1YqRZuHbU9cGXKsUKLLWjnvYrwvVc8kFFdgFkRGFrBa61",
  "key15": "3zZvqrDDw7VBDWgTFajTq3RthTjmNyqU5tSU5jBCZChEiQdW7Sk4oarNdYBDmtUcwnbTDoWkGfJBLSwanyWpJB6r",
  "key16": "C3mJemXD3rKeFEDzminWfee2xxV2eomTjdsMBpkGsErEy3TUy5L98Lft17P7LLiKU7nMDXceKzmCoTr4UesrTqR",
  "key17": "5SfaNC1BnZ7RgjQNgyr2M8AZThCJZNNJBfas7JWwmZonSRaxBnzA8TXpxx3TGV8eXkCtpoBgPvcyTFqvA6sUXPLh",
  "key18": "voNN6RHZi7W3eAUk1usZA3dr94tbu1WuAn9GG884NndULcrNzoGuiwv7KqzUNPZH2GFvrjaAX8YPCb6nRtBKpUH",
  "key19": "5F7bcwRyAcnkPe4LCTvd4CC54FEURm8Q8p34FC2hFcxrcRpdakxd3SCKKj18QohrPs4zAPvMTt76GsFsT1ptRhB2",
  "key20": "2YAm2dKhgqRnXcSWnkhHJ5LBnALGGCWteZATMUe9u636bubaAHzqemR3SrYFwBzEpde9iHCzHfb4ZD6BkbC3uNJB",
  "key21": "3augvNPoG6Xrc9XKy8cU35wvbhgMidwgaJADyDu7goqwffyS9QeCaP94UB8aoNLKBAber6JPFDH5huwQyXFcLv7c",
  "key22": "2u6ey9QqVynT8d9539J4Kt3MQiFpABRCPfMcsAFHypw5pCFyK7iEhH7bghJFPDyC99Q4sJLe3D3kji6TbH76WitJ",
  "key23": "2ZShwVr72L8ACZmKEJcU4MtiaQgvQKFERXgrpQbWF3h1NZ7FjpkMkKdeUcQEPXtQEik3P6Jn8MXkiAaVFu2sTJEm",
  "key24": "4Gc3AozitwhYi6UzCfcaGQArgw4dDZ6PNGnXtDHKyjkavpYsD7c7N246wJ3ByvwhAhNYkdhh7VVvZ39fHtUE3HEz",
  "key25": "2pRhMW8tyMiN54sgtinvX2jAT9WWaGgwLFpwxdWpdyRscapxbfjkqJz8dQYdtjiMSdoQDYyNHtS3eSxYWAd4yH8p",
  "key26": "2HVssVfuYQ9KQ8n1L472v4bZ2N1Soz36XjPfQXvJtjRjfGCqif1aWCPB6FZrrHPgRu2N1ysTkHid66DyEK5HFaV5",
  "key27": "62zjMc5kzF1cPmAKKKZTBgVK6KLC9zccL4PjNczSov13huDxZ8GJsdnBbauFA9DBsymnzG5btZHiUecKHLtqEigx",
  "key28": "Tzz29VH1yoR3DKJ7fYKkc9fHKjhUEjr2w3nBry1g2RYj3Qy85z22E14d6w1GGfcXazSJXRA5xnaEjdA2EaDXiyE",
  "key29": "cbUBx9GFv1D2ynruPNuPa7E3eT15qt7YxMgBMrhG2zyH9gfwfsosFZr4hwMfcgJGUeoEzzu6sLLxbTcCWXj5AYK",
  "key30": "4PmYsCu94J4Tqu47q1kUbm49u1om1qCmnqaxfUa6dFQ2Tf9nsRet8GfhW1JJ4mEcsY6gh3ghmMe7tUuzPRMZzVha",
  "key31": "4Bhyacb1RpiznPo5DXS37Nzjx1AK6tY4Vu1HsydDNzkAG1b8cghHHsqs9UhXWyrW2H28x8UYS2KGFUavwjE3fdNW",
  "key32": "4hjcZ3tRQfxBaN2UaHsGS1ZyEXMPzLp9yiWg61HZDNxymQ1kF4oC7BcVdQAXsiw2QFiT4UHqm5dSVMtHFRgu9DgA",
  "key33": "392uDLbXas7ZKMuRdXCqUbW1cHdvatL6pXRciPYuVeBwSz8D73tArJpe8cKcthm9gWDTnJtfkvBoKoeCFyBv24ak",
  "key34": "3XkL3izdb3UNqxQ3WFBuu4y8cZcZYDqYajRnnWEAEvhWXrLcsCKtYYTuyLA6whE4Gisu2D4DG1DJGrQnR7qst4BF",
  "key35": "2bkyuWqTjfEC88mebUZh4rqfmdejCLkW1nTs5nTJFAxEVz715NKSmhoruNC5wFtDjjnxSjJ4fbcWjooACrZQjLK1",
  "key36": "5pZvyneE4KBJ3Lk6AwGVgPMEtm4T1h2Akw62WfDdmdv2q7gWAS46osL2vv5JhskLzeYFrK3gcK9hFQARN1r9wgg9",
  "key37": "qbuhmNJC42hCJQ8TmPc7xgcv4qUxPS52tWCvmhgzWSoSnMHzMUGfGSGeGB97VEMQUGcccA9WPHqkY1DQY7YcHxF",
  "key38": "2PNYiYLgSaotbcsfNUsKepUdvKZDQ3EyE53fsmcEnb9qvCSnwvHuFV4Ghtb97Su8HT4gGKQX1VxPitDEhuWCEWLb",
  "key39": "4WGzvcZ9pQEa2BKgTxyTWpB1LWx2gB5YgmB64Vj8FkfhyTc97jKTkBPWt8UkgRPgmnaZzDji7Kqqy3NefZCRtzDi"
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
