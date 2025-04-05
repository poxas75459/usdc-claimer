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
    "oTMq865FY9F2TiDQNHcJczFZCtUbmHGtGTeg3UAWiY76W7dqmC28XGbZy4qBUGp38MWqdHikdEwqekZJ92UZcYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrZTennAv97nhSYLzStCnNHE2C1XKa273bPoh3quyxuhyhXFM5r4KSSCuXiJfTZ6RqXzeeaMWRFP6XmG63GKAzQ",
  "key1": "v7y5BcAqdutgJWRBFSLeaHupoVXrgSd26ioTywMiQJDUdC4LyrB85WWhkDxumGF98Be1L6WZyhxKHgddMbCaYpC",
  "key2": "4NaLq7smFRig8o5u1NtzpBDUdnAgyFxLoerGt5DtcEdXFwsSyL1Vy8toy4muVe4XiYgzFjPKoRMpaB3ur2yHkKbz",
  "key3": "4vKkKaiNQAzC21FfvQt72yYibzwcrmz4pSLLz6TtV6uoyByiAPmKZG7TQemDp6kFNrm8MigDJxV1FgoS4cXwc197",
  "key4": "7s1rcME8aVodpXUqhZLeQthUdviKDzrgY2TEeXacnAGezjMzkJFWVN7LQEdA5jvWjN9ACCCgf45GEAkAT71jXZQ",
  "key5": "MsLVgWXGbBDveWjMrTgFj6nRpH5ciNwGMsAi4FW4jBwQvYgK15fvRn5rLPa5b1E47swyhL3RkoPbxHmdnvQoLZA",
  "key6": "4qS7ffgoJsbbakrqvhU1EXhwjLRkTSjJLmgg1fEw1b4HHSsGcBrRh6STNmEBNByiF6hyB3Bof9i4ERuVTq2a9nHS",
  "key7": "2us2qBGePUguK5KfZq8SATcAkNg4wrZJgwKSpppM6JLeu1HG76ethmbZpZPBv3eaPZT2eJnKHtyaieDHVV6nA2nF",
  "key8": "66AM3wqY6oQynhzGRxiqywdVo1jq1nxUEUPSp6u4zHqnYyzudUHnCLPnScEwrHkwHwHjwqpRBW1x7s1kBxZ2Scze",
  "key9": "38JfbjMSSZuUhaKnnpdqPwEdVEazofYwSKdeZwiyaQpFzMgHqnz3Z8fkDVD7rbt9hjj3D4Ux9oh9hGWeRfavmJc1",
  "key10": "2GYMKAwQh526JFighdbHfwouPjvZYJ7xWr5Lo4zGzFqVVhXT85Ds2jKCQnCu6HUjxDXkWFykXuUvhp8WqpBHbi5z",
  "key11": "56ZgsgxeqthCFDoxMcLN8u6ABEmP7eKXYYaqmhACBZuhzJgCKc3wiajYrTYg1vtnjydhRubuYxagCNTGgzNM2KMH",
  "key12": "3u8C8VReFZb3hhiotDDDQTvQtxH5DwiKA52E2AJKNSvossS7YJGCgFCQZsZsJ5mbMrhUbWWSLymm8giwbVJ5Gcrw",
  "key13": "3wXDRXNwD4T9TC6VjfhAaAfHYqF32BAbS6kd2LBQpisSqPLxGWK4MHjDENLkxjYxkxJRWkntTmkfPyiFr3pgcMLF",
  "key14": "38SSfQghbswwWMBEY7Ai6ZYcpUfQEQddiP3PTPiAiQx2NmHPZEaaQ62Ehoz8UVdgfE3j8oKs32JBzo4Lki2farvW",
  "key15": "4ep74Qs7RKXTPkRdR4P7eBvhKJJ2fsNq8714UXXK3sWC4pRPH4xKWyY4eDfem3jP8k4XYxzAzbGSDDch29bnyALL",
  "key16": "5wu8sWLu12MGjF9FnZcn6BWsndc3xr3uo2uTRCxrCxJ86YAwYod6QKS9YsW7AJx1GjLPEhJKyVDq4CZje7WKGo6B",
  "key17": "a8E2wsga87bn5wwJbfzo2b9iyJeVxPitgwfV4ju1uxB3vbtLXL9YLAPsWnvcgK5pxB7BBQauywVU339JTuN8VMd",
  "key18": "2qFUz3UJjnzWhTJdom8bUbM1ug23p61mafigaNtC6B8or9v1XWmZZR5waCNdQJCyk8uL6S7pvmfQ6vZk4Mk7GqLe",
  "key19": "3bumRC6GrrtYhFEbZqF7WdUp5LE54AG5P7HegGorzgjgM2YsDQUGty6Mx2T9CqfZcidZQRA5ijoJwaDdazFHELhW",
  "key20": "3V3AYiLFKgbFVxkUuxh9mZzW8WGtmsq1gGcM2yMbFJZ9tS8pWam3BDafL3xhqmcMV7YVxgMEDhpxfy8p5LxT3dPf",
  "key21": "5GrerFPaDt5tCT8nXhg1CEDWGoyxvM4PJwDCsCZUjuZYjkJTSNiWTKbANnvqm1Uk4jHBtuGtJU4W4aNo6Xr3NvtX",
  "key22": "4esruogXSBbjujTrGJawgcGZqE5Zjm6E5MPhxmqgCC5CAR1WZ2z9bm8gjJuovpSf8TUtbtSsuA6TLjoQACHAZoF7",
  "key23": "517HB1rW8bE4DVyrNRfcF3Gd5xeN3BP2ZU86Y3tJ8Se8zrsuXnkMCMo9NToURrKN5WhSa4RwThbrLCtEhKJekzg",
  "key24": "2juKNAxgCfepi28snasN16LcPUpcuJgxTwxRJPKvaKQw316B8qKSi7vcHbL2HLHiBywDixfK4Cu7K8Rju23KpZxh",
  "key25": "hpUWWkgDgPirXuMS67QB3uyqSrxJWL98uZjzWirYRaLA88uneA1fq24B9EfnhgRonvrSToMDMWgLGeMfmQv2MFu",
  "key26": "2U4UW5ksntarL3nTpdiPogYs8hhFP1UHYckD2oJHp5MSGAtdMEkrtUJY567cRHTW267A5fL8GXBCwLvUT27k3Sim",
  "key27": "4Ywj7ocLknNTvBA8QQVS3QdFspZCC3R22YyCMZqQv8zf2C4r13TQPRPZjtGJbrwcvFYs8SxmmZjJbB81rm7tZ5uJ",
  "key28": "2PTRHHPqEPR4vLMSwBewPofUqUEyaFAsdZQBGHUZ5vsjkfdHxdATketxntpboEy3os1xMCuEYGR7hN1LVNgmzoHj",
  "key29": "5XqNqjDuQgkH8J38xq3LxfSSJr2jB5No6fUDBZbTdxj6w3bMUoannG7qApLhSvXpASaixgPXv7FWPAtsyq6TngEM",
  "key30": "3wvEK9q1Z4rxKcWhNaWEGkGsv2ML2ZaRoQcCsfG4RmL3guc4sp3pGDuM81fT6a9Gc3bj9XcExonxgzcgmAACF2En",
  "key31": "AeBjqv9MqMWvNDJxuRw2Cn4AgMmLboBZYdc1Xqh7CvSBcDM2WzNRSaasWLo9wrsxAxST3a3jkZZLbRRdpaUeezp",
  "key32": "fxDyvWGfisYRwF3H2YzhStQWmkheL5MRLFeJMgcpPJbNX42zERSgipTF1knx9coZxo1cd4bKFDRVQckppmevYc2",
  "key33": "4SySBKFHTCG5GZkHybUok5uKFLRjF3tsvqGG3xx5CigcxMuEbeF91i9CkP1RzjYvAQTEkKqVSB5Pfr71mAZj8caK",
  "key34": "3b8kF583uBCLLRuv9LHqGGh8hqDy3DgzHqsHYWnamQdtf79oKRyzXoXBJXivyMAJABGp191BK5vB4axdXoRx4hWd",
  "key35": "5DPD7WzekBEL3uJ8A7eRffPEZ4HEnaURMw7JPxUEsRnJuLscddKNfGtjHFREyhzKhip1aXnUad6VjDcFf587SUCT",
  "key36": "5NEoZ5RASyW2M6taJFPkRzb9pMC49YWqzcbdsCGXxeJakMYi3RmVgqkEWkovsqCvVZQfF2GDYfyt96rsriMsoYxm",
  "key37": "7RBYignHVBsreBZ6wFV6Lxp2HrSwzUhGSYb24saagic9TdR4Bf1JgGY6S6Bu5Fp9t36AWcJpfr2rGDwp7yccXPe",
  "key38": "5adsaoxwKrPkGoMKdpnuTWq5VKqJdDT7Cq5GymxmXaE2bwjwwzcvr4QA2hGT1kfnP1THJJXdyX5iDuXRQ1bmECA5",
  "key39": "3eCxLsXjNDSaojhbFKLpwiumgFJvDgLw3ZqcRYSzAhc85b9V94ZPgWbS4WXTKa9gh7ZPgTAaH5eUcXK3bM1rSopi",
  "key40": "5tvBXbWPKMbmaybRRv4QBFHxCi84hWzaPbVK9a1sYwagywKpbGVBfWay8UMYmaE4WwostuiUEaHFYCXhYvWjAiZd"
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
