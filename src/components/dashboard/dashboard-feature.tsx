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
    "3CZrZw7ock9BiLpn1Hm1hzVqEHERZr4r4QDteut9wFy3a5RuDBvP7qmLPASdEMCKam5Rm3hc4oFfHDHw224UHLww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyjfe987eYW16uNH6tSyKcyqMES9yHVcmkwCUcrMYEH8C3vtCZ521fHvjcyfcfgx4D8dCWbgw5STXJY5kDRpVsx",
  "key1": "2gWgZqosRjZVLb4a2xP4LnqVaotZUyZLMyXLnNh7Z45tWpbBqGBCFQyBqy9Pu5ASEMsuMrqZahWdpMYHzBfDmd91",
  "key2": "4T3Ur8izLU7XCpKgegua9eEb9p69KhVTSn2UMrk3qwubHXquCeYQxPPt7JQnqGWiRJyakHL7Vzkb8f7oswHR23Nk",
  "key3": "2w1m3QFvP9ZWWLK9ShTHE29oyWu47UF8m52TqHPu7e1fiqYS75XVtyMuCe84t815xyRhpoZwNyPryVQ2stjAC2Do",
  "key4": "3WALNdzMxaCE5tmSH67uXWg8ASpd9imWy9MqmFqEu7tsvRyfGQJ2K3ZXGbP14VyqbXir3KA4jNqVfRvGs73iGGgv",
  "key5": "M9ttUct2Ya5mShMTvTthxeBoxAaeDeNtnPULAYn6sikD3q3LW2ayoaiddzSvxbTStJhPB8DiPtXnmqvPrK8EnEb",
  "key6": "64QX7f5Sr5NokVkkWU3PsJjShzXweXXymCFXKhgq4AdTsqyhL7vMnrdFC3xcBaJ8ZZZebnFjmvJbfZohNRHqqCar",
  "key7": "3atfSUpT9v1P4S7XWm4Zrt8sDvVWG331XM146JBJuV4HzwFZWs4e71Ghi1jMz38GCeQmbmYqA6DysUpnPmpyzajB",
  "key8": "5363btFa2rgW4uMCcZ6y4n6Di8Y39Yzzmdt1UdysfoTmY5LQPii3gXvbuaUgpG39FTzQQif1sgbpH7bgdK195GxF",
  "key9": "czBfdSuqiqTMvXh5PPxnnmr9AeLT1CABjwZz7nbudMPQ2EcV8qZmPaiXGNERsBfHHhDw6PZnvc4DYN2R3Jd8Prh",
  "key10": "4juu2sKnWpVNsfJsbUM7rxnPFgfNXqHUihfe9aUUUz898KwtDaHFEnVUaVzyU7LDxg2bFVWM1jGWDLpgrc9aJJYh",
  "key11": "X5EAYnudjCvofe9udBZ5GWE8L7mxHPkCDAPLTa1ZYJCcGZFVvUH8B98tNd2mJUV5yn4YUd3PK3Z4BrYqRxnv5HN",
  "key12": "ekvYHx7wGnGbCKXSaRckAM2MSCNEmAWPifzToTBAUSQzzrzuMnBPAdkhVMsMZ3rLHMvcr8AMNgv1YCm8sPwGae8",
  "key13": "32oTPuGcNGKLyZRRCzs1YwSiuCbvMqWB4wjNcJWKNNvs8oQ3kxkZVXoAiaC4mu3564goB9DSSKgE3piDT8tn8Stm",
  "key14": "47cMdyR6ZyPVFrPQBY21eF33nECbHVoNMQ46dVxjkkwjZfF5F3Dz2fNMn9TTotaoAJNN8ApWuU7YP1UiiaxUiiF7",
  "key15": "5icpVsWGFQ8QfDGx3668sBBodCnzSWLDKPbyk1su19Cg7GnfL2BnmXH8pR88Ws4PbykT1QSe7BmmLtzmQszYov2Y",
  "key16": "5i1dBE9Cfo4Se74S1bLKu5RBuHZCTJwiZ2VjQ8hDCtZpC2vbWz578ZmRibT817TxmwNGnNwVWngogLYM3jaGC5Fq",
  "key17": "2o2GLm9RoDP3wmsuetuKoaBYtrwn3yNvxG1KeP7KpCyjrLV14PwF3f2cuwSjsJyexySbAhNTqmxGSkvzSnqN3B15",
  "key18": "5JMh9EEV5R6RpHqcr6tVV2zzmr9UruAZQxuYJ4zD5nJQUU7a7TX6DpJQuzqwJ29dcVuy2g4AoaCfomLkAiEdt8LL",
  "key19": "2nCzyEgYLDkRDG35SisCBJk1y2cp8yqTtBcigxn6QD5V3VSBJ4XQUvgXfatgNuaCYcTjKdhDkeBRkmTc483HmbAr",
  "key20": "4eH7yJHxqgaNZo1fjSdz23e7xPVfaYYKBuQSkUB5EpjBSRD9M5ntSTR4AmmKmCvDAkfxh3CzDQqaa135c6D4rKMx",
  "key21": "zFbHsmKysANTWwyVcgi82gfSU4DpdyRELoUhjjeAJp9vTXKzrWQ5C3HxJuHfaUpVF2nCwbzq11gGyFW3i2pB2E7",
  "key22": "kUKpqibubePkaL7JUKyvFZrWWkQNHxzgPMxybJeedEaNRJC2p371wGNqZj3sSGUJ6sgZFDpMpbsMZYm1CN7mcpV",
  "key23": "xcSUzy1ugoMLUkqbxrGxF4Z1gbDKaDHr82v7UhHgJc95mBC2tcau3xY1HQ3yogBneNfR7FBr63pGujw9sCLCu9B",
  "key24": "28h7KWAJAY9bvtAe2cRARhGWyodbz4cmm5FjtH82HAUeT2ocZicAMfwzt13vGTcohj8kE8HwVHyBFkRW1SsAqyS6",
  "key25": "56uPYzk17Wdb5rog2zq7VJKB6KTukdP3pvBH3EthPDxu93XCRGKLn5g56wsB5ULw3jJgyRiS6WiymQnPs8x1tWWo",
  "key26": "t7mHv6s77XSbd4D8ejErHRaiQLbUMVV8DbvnTA9VtiEBikse36zvHSLKx9QWbwRUTfBtufQsFdh8JYZY2ju5VXz",
  "key27": "2X1pHFtfbTh4j1Nr3srMan6tPr37XDanmZvsjkRt8Ari34tQAuqmc6Vxz2n3v2HsZWFDwVQPjkHfACJ6ewAz9Fpy",
  "key28": "2CdQaPbxxMoY5fNqfcrapAvpQcdjqZE6nWNcf5dY6Mi1xZCEfg69mtKa9ZAKnPtKHBeKtdHWVv3crQ66YCvanQy8",
  "key29": "4KZV5Kv3KhJ9cWmyp4YHYo9gQierXwWoWwZucVMfa2noVdb3kZi43XT8ftuuzptU6mBfUCx84fGGssfcRLPiNWnh",
  "key30": "2RpfYw7qR3uYpQZP2gLRvBqQ9Uc6grT9a5gTwnuMotruZN27y1xwfYboDHWz4n2yt7CM3tPfTVx3FqKs4ioKBWLL",
  "key31": "2tHG83swVtQXVVBa4ARchvxGycYh1nECGfcAAAm7N4k7ndfuMgQjJNyDP1yCn84exQ64z7nrJAD89ZBbLabUnaAC",
  "key32": "4KhzYReWp5AZmH4ACXH7GEYDqCxhH9vu7r8vifPSjuELa6oVnjKtDWHYdaJXu7CqewyA7snYuNfpKQpvvwdj5ZVP",
  "key33": "2VfQjRwvnQ3xamUgjTsWLRjkzPtjETfYfNuW7beFJw1W1WYGiB7XyAiKbhdCopVSVbSDYLF9jtF7WtSpH3RUdh8",
  "key34": "4oW8f9hxm9EE8ubdHmkLrzuSB78Qpdc3oQ9yKg1pbLJcbLCZvbmt1oQmnKU9hRsisA1XzXsQ2UUKSo4iLqKrnwRR",
  "key35": "m9P1o2gx9sSDWnVpYnoi8z6yLsiTSjGMFyFQbmVS57dg88pJCXmLSfjDxN2GV79tTarfpZ5AfPBCSZEtpyUCKBG",
  "key36": "4Dz3ZwDSKDrWH17JmyUsuZ45cvwd7vU7QwNH3MAfKiW4tH6vkBBC8jDkn8qdYfgpGbgpDEgbTVBWaQQpTYRiSWJW",
  "key37": "34neSHexv17xjbPHSK21c1Lj5BKnMxGQ5LFAU33QCHLd1BaQNoeQmaWaNV969iLPeTHTUXtRBBAJYCd1WbKzPkwT",
  "key38": "3xkbL8YbY73L5mvRhEhjskBLx9SZSgKrEzp1KMSLSu35xKbHe33zk2ma7yHaqYYvPYrgc1UjqUxucdjhGumRE4As",
  "key39": "mhHTQHb6dzeRbq1BU8q98vfgQ14oaTAjbnKQLUczHpc1kiPPgZrzUMgQAD6mTFgZBR3DUuewu4AU1TbXuwBoNUX",
  "key40": "2U53EUav7NQyzJFdRyZzAy7bNaShuaVQ6iNuumK2iie55oyuF35y1mxfhbiJQK7Yxe7ZsMGJ5imcKizxAykXrgXT",
  "key41": "umbzS83BUkX8GPq67kaH8swt2kFTz7kVam3msJvZgc5FBBVrDZ6U7fhKjg4uGKEYtQwvfLBehbzof1yuQTCeXrt",
  "key42": "4RuEAnijCfYmAGUxPQCfzi9yp2Tym3YjNHaRxFcTZMohCK4Pf92MTB1fCtDVLYnZxQtF2JCJSei75C2y9gRhaHMs",
  "key43": "2RhpchYjhWYwHto1Dq1CoFTv38W51utZxWmU1nheCndoWvWjUY2e5YQfVmvQywovbZJ5xXZ93RZHPjkk8HSPQTJL",
  "key44": "jt5Q3jQZmoyJHvc31rC1JZgzR1KnMKHwDK41g2vwnLAR1rsYqrPfvAcLyvkPgbnY8oo94a33Uu9e2ijaZ3oSDvG",
  "key45": "35trQai6XFkwVGMCnb44LfbFBerJtQ5g9PiypYGz1jq6vanhVJzB7LviUTUoNz3BBqvQBEJTF6Yb6AEni33v4nFJ"
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
