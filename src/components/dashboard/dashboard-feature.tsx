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
    "5zJGnuxbeuEYyuNBE9bb2w444DGJs3HaPbYcf2bEjqHBLfPCLopL8xbT7837tUcEkdqHdKmpvSPUSXHB8wMwgKt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJ7Ehfs4EjrXoDuSRBQ4e4BfTMYgNJMght25FsLAu9CL4BTfFtxfj8v5isS9kmahcifhMDUtoueSEJQnon3LDZy",
  "key1": "5sfwPnv4MEpw7UbD7s6wyKpaJrqxZSLPaMthjSpkWaTiLcGjU9oG7DuVNfQpD53sh8sdwdaQttkzjEiDwKrSCMvw",
  "key2": "2kMqzN9QyvySbQZxiy8c9R6cKBzZCqiU3yd28VvDw6UjcAMBUkwoNLcyp5aVMwWicsDydsZWHJ6Mv31hJmiv4doH",
  "key3": "5uXd8eUxhJT3fm2m8V9X6GB4odmGo6L3KReyziHJWJWY2MCpLcdji3HZ6gvC8GDRvM9d8tEMcrrLkgTcfYD5SiSV",
  "key4": "2tvqYEeyxLcHEWMqXfdneT53X87WE3uXLv1G6cs78UJGyvq1Dd4iW9VdhEpnVvmS48H19jGi1eG1fFzaKW3FdhcY",
  "key5": "4befCyi8ZnpfBJDuJtWuB7HD3Kogvmf3V2ZzghpzjcX3FjqR5DRozgL9zx84RCknPuF6DdaogsFRoBfh19XJCgoR",
  "key6": "5eVXCytBkohmccwcUH2YV6dP8THocf72wLxhuzsaJhEfBV3z9dxqELpFu2FKrLQbJorg4bX6veMRsyDMCoV4btHQ",
  "key7": "DT5iGMabzxwwXnsEqxZvGzotCHBYMNYBDBF291tpFYLsCMyqCU74VVQ1rnthZGxLYHuTmpKD6H9dVSkXgLDRZ6d",
  "key8": "32pz91JY44cprZhyDcpdtLHC1B7Y9zdp6BJWxUrUVcTtQKyPRmhn7ZznDqj5QwieqeZ7fGFiSvxAWLf4kGrvhPaW",
  "key9": "4aBfLYbePhM1Hb7fcWCJrSbiStxk4BQQi588y3mQHQ3y4zPKV6YZecAGKUJUaiT4GVvfARyL8FZuSt5WGWrzMaQo",
  "key10": "4jAwD1Y65ATpcEu4Cx8d5My85NbwodecEg2CzWVAvWzk1XVDxxMGeSNMcDaYKAeLd1uUnEBbcVpLkM1iUCrKXWqa",
  "key11": "4QtDxAS5cuWLx6zb2kq8Px3oungQeDbemWxqXyTimR4MaP2gFrQogk9JGYvBs8J15LZmfxPH2cE5Nti86H5jgK55",
  "key12": "5BdyfAwfTo79EoMbWJ6P2Sa3MEP8xPb1qci1aHdpPzejAPWZcnXGqn2f3dC4vykdmxVUDGGqeofRNE35T5CwZn2S",
  "key13": "5tzytqCG5o3gLNUeHYZMBJKquiWd39QDm3wwbdgwMxWegESSHwo8b2pHQDKH5ftf3Fw7DMtzLU8v5FevruMW8sVb",
  "key14": "2ZmyxiMCUkVYyRPSfoaQHyVrLWbb6u1bZEutWqYs4x2WgQzrL79zRSpG3qBzhGcH2yme3p74bwovup4qNym8aYtz",
  "key15": "3BQTDj8e2bhZrrvbecTu2TfmXAGhkmMyeoqeXQRupNGK9TkxnBthcwkHnBqRc819nqa5KgCLAcGghzuEbkFP5xet",
  "key16": "3g6jheyV4Yp2D5vBKar64uSjG8vExz4PkLdiuVeW23ipNPeLMyNaazgrR2sKzCp5yRwByzahDw5mKysHfvsAhXjA",
  "key17": "48RyTg7FePZtk2RwtzYBwDeNGnEJ8hV1hMVTFaMb3maxcfKsQwaWouSusVeGfstPwjk6R1wCKjfLWcWG3RS1Repe",
  "key18": "HnUekWLisaGDzZda7z6UKmxJpVezpPccniHkQ495v5d7XEQGFTiKzyjvcAQGopVRdE725ukvYSngwGBP3g4QUb2",
  "key19": "2JpP97BGpWrAXPBJPm3GY6636KGMFizVqLsarKNqHGNuM21GFFArq12cYUzrBxNvKRmGRME9Sy5qqMjQrCSTbMjd",
  "key20": "4iTTaiXgSgAbhoMXHbK1Tsp8vghJAjMdmewGDMadhnkyRLrpmTWNt9SNVGbojbG2LEiWxCjPggVLritJDFCAxMvT",
  "key21": "5if4uhq5FA8DfsDDJhM1tQTUv85Leq7BeGrt8dQKdYr6iqqHsuVpmUFYafarRHRhuwmov4wtKt6dLmytFj1vZB44",
  "key22": "2Nw5b4Jz5wuEvbAwsPCckY838cDpa2qLPtE7RKY8WWh8NGEUgc58AoHip6NYSgZdDGdZHBobTRWQLPLFUQuKaTkj",
  "key23": "KQtTq5aCEcTuY52kpRcJpyzADcerKoypcgL8v9TcQXYv9tsTMT1BeNp2vPhjkqzi3hauFTrZKeM9qFjNG1w3poK",
  "key24": "3CGNv3am54q8rTBoCzL37DXAbqUXMV3ZYzDLY3tMemqvVFenKwyWF9UoNYCLwzUVSmXxzMLBLn2H5fpy1b9k9uuo",
  "key25": "4jLT8KM7FeDqykEqg89tW9VUP3TQLo7Gocb1K3GtEMP3o4X7CmRDCZ6riLuQcJJaDEYQMQV4h5BAzvN3dgmtMA4w",
  "key26": "aS5n45KjfKrC2oZ7UDihFMWRHLKHdkSLWFmbXsibvhvngNJQPecfFZ2EVj133ZukWhVUbfyQXHigY2CPPHJBh2t",
  "key27": "ZxG4QBqABWqP5ADNBrNVnsrz5bh9qL1GUB1gdMZCvdznnLN8Ex9uh3QWubGCBmZENiR6y1U9nTZrdHN1amwQ1AQ",
  "key28": "5HLNBprm5HNAZLYuBAWPNNXNerK8jpvynHjfopRKMe3r6TNP5xbgXTuUyKARK1VDiSLmu2MNBEsQRkBBRUYXDV9j",
  "key29": "2n8xu8szkc8kQDqd9fP4nv5bqGFGsht2q5TrcRuBPabdxPGu24zGV615wZuvPw1LYX9T56c6bRE7yW1abRWhqUMi",
  "key30": "4pxPcRgruKuaTCbUzRe7Yp85JsuRApna7w7fpPpqws9eSHg9YGcyyGg249kgG48tec3xUi71bK8MNviXJFhLX8kQ",
  "key31": "B9QyvumNDaSFu4Y56SS1AWqatM4Ry9dVR61s6FbB8UWM4M17JmWtUrpEFZg6DaUSPQyQAZzZFpSTcAD3aLkK18d",
  "key32": "54RSqzGdtt45UqyhMGAjzvuzVZpxG71vWffz3CP2d2xvkDd1nuj4eRFDKQ7KhAYPP7C8TcjxeKcDFyqN4V4rnTa9",
  "key33": "3H2b6mmoagkKVec6YM4qRkaps45oVocRUnMz6TZg7QRpnozY7cCwBEEyA5CEoqEdVbzPep51B9CpEXTZUmAFwmct",
  "key34": "7czNR815qSX2TBMwq67VPBqBeiiG3D7DT41KSY6zvAeLRb45z23CBupMJjWnVc2iAfvF7aj4ruJXwgB7WDtzN58",
  "key35": "4hWHdwVPrsmUbstNhN9XNWN1SrveTiENYUhXUZDJbD5GRoCnMKbhTmh5MiBhyP65RjJAQQBtcS9dNm1cCtXQrB9U",
  "key36": "2y6UcKWjWszGd364FZbQbA15NimBULVCJzgc8BvsxDhuWWeXKL9VST8oQ6Y7VRmC5NZMS3VmYrKJHU5DLUJMbHMR",
  "key37": "3Sumozgh4FAqvTXe8cptWAyFpbPWmU8A313z7YGC5jvWeRM7n1ovMNMnQZG2z3zeYC3Y2iDipFq5sQqfB9EueWLh",
  "key38": "bmXSUKxoNH9mTb8vvcgYjUqGYiNWjDPFmMvkFT1j1YWfAYPn22KEnsQJc57thd6VPvKHrHXXUHpoJz2nwVd325t",
  "key39": "48PiMa3Z4wh5jHSgziubB5UCf2jPGjzD7m589nEPr2Mwu3fUU2cbCfjaBgtYgAzq4tG7mQd2Gxj7aHB1xE1HTjyS",
  "key40": "4nj2BCSHt4LbAzfGj2XyH5pkg7DdhU7rtU2Zu5S1hW3bYfGH5d1aNbyffHvGDgnGjfchiesB35vtoaCfa7mukGii",
  "key41": "5aX7UzkkXHCkXPnTWdXSBpTgEYcTSnaqqprJiquuaNtznijrbGGVvivBjwF32bXtWJ2ZpN1sVRSmHSHa4K8zpbad",
  "key42": "3iL53p6562hEkxKF2P8xMsJWj9UjmGJbvH1sBDtWFzGpc6kGgh1oR2wPgLNCHc6Bot2wEBMr7exAW8N2onADdXtK",
  "key43": "gP5P2koASqqPLEbPEUJ4aaj5AqCoK4uxeSLv8LiqWtorS6nCrXB2WXMZh3J4XjodqG9iHgfMRSfKQRpGC9tQtjf"
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
