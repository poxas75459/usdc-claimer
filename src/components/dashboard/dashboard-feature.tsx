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
    "4Vm45uyPqg6LNyjwiBUntDsfDCe1evd1PHoQnyfoAitkXb1LS8bYCEPvwakeVghVDeRocyDt5tDEB5jNuQPixPg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxhhut1Fn1roGESCN9DZjfrNZMXtjZLrsRQrNBaNHeez5ZemKef52uyjEA9kuDWjh97M1tAEhJnDnUr1vjZbKD9",
  "key1": "ZkPw2cAdvDyCgHibULTtszEPNmy4h2E2jNm7hki2FTDGv3hg5hRbmBC5aLzkfok5L3hSYkEhA8b1ZEzmFrneNoo",
  "key2": "5AndqyVqmXMQ5zVoedPvBjXwvkK3b3AA23cLGEnELy9vdCJs3XGxQZCCczdnmUYc3apoy4uZZtw5ypTx3hj215NE",
  "key3": "5X6RPVc9foLiZ6qqY6uGYVbPd9jq7RP6qS32o9D1Z5vfWddLCKzbrZsnJJGag5Xq7GdSainWqR8RegD1ZYxyLLte",
  "key4": "3z9LWGrQJcLhZNidZ38teJUyyAqpWA3BiaWCuuuCeG1PNv5dyNNm32YcTSYq2hpTAtc2kQZ48SUSSuDofnnKMeqE",
  "key5": "4b79BsavEQocDLxj2QJvaJJKaFZnsZNQKbUKZKBX8XRyitKbqCNQDotHwPRvW9NtSotfhDd1Cf4zBfiedHCisxHP",
  "key6": "5YBoRUAkEPqR1Zt3dutZoAqMQ4AtutoUqjgg9h1FY9xcbDDjKZVjkyftkdnQon85SMGsnBpqx72LhDK9wk5yjNwo",
  "key7": "5zsU5cK9fok8ZYbdwMdtMNyHWaRhk4A5L9Gu2qoDVVCznHticRjvfgrumh43eu7TuqFDjJALKbNNyQZoWhUDxBf1",
  "key8": "4mJehCD27svmrbparGBzJYCmtjUw2dzqkbboe79G44DAzR2cmFsUbVqD1j4UTQtvn1sWhAnLJ8eynwBYs7QRcCNR",
  "key9": "2QZRu6H6Y4VFyGtEdcaULitozNMh9HK6u8fv7KG2Dxf3xiLZjz2wKaLXriknUZ1rJXRmrW965awEk9a15iL4C7a7",
  "key10": "3docsFgxz8z8YZixd3pJMjTysRZPzpKgEvM9ZP5xiG8T74kGizKL48GwJxNeGK4hPYz4iGaDaBBPeFCeRezmnLZy",
  "key11": "4MZ1YoquEpPkCqujrfbWJMxZATQJcxdgKVwCw6ucpQthEJgULyyGwiopLJ7xmhQm9wKrZovQC6yvJEyPfwc4RrB7",
  "key12": "5p8CLSvBVqUCr9sYBuDNbf4dVkdemVN4tzyNzSVuHW4fTm6t7aoDyfnJp6fcaFDAk6qvMEUTSHKgmZC8kzs1ckyD",
  "key13": "32QZ3ihxyVwGk6NufC99A9kV6mHMjLsmNeVcsL3WHMv4qzjU29GBi1fMc795Sdn17o3irjj6eZesenz245dVykk6",
  "key14": "41DxMBd8jBtouPBFN6wtgpNcpKDdk4seMxouJpKzxvsCgSmsYob2VQoF1wVzXyjFbkKE6fxc2Jdtp57F3GRf69Lk",
  "key15": "5puTyv18zCXZJvmY8uxCPDz8RkAw1TRGoh8vrt9gfmF1VHYNHXWta3E5D6aSFtDdj3DZHpmoEetstPpor8ttoXTd",
  "key16": "bmHzC9ERZtYznWLDBZ1TYLZvchscce5sGr8eNawgC7ezw3pLA4Qjankjg65EMUwx5upPE4Tva4FtT7cKghejZCP",
  "key17": "3WgUFLY92tPpe6LinkcHL8hHLYbLLsVkoXhrgZ15tmMeVHZic7LZkHZgyDur1e94sBwLPUmrSrjUtL52LruHUsmW",
  "key18": "qiSRdZoRi1UMbLpauzXF1k3Cr8s3bqKzm1TSepDBRhyteNuSZtxH45oynbAvx5f11JjMWjMXZAJi1GFmFJjSTkp",
  "key19": "3KSDFkDEvBe7JKjhhL4HcjMGhXBdxgTzmfMkaYrKRS8zdp1j3sqLbW8YHM9f2dzCeU8bLnjBRGNSykREF7reaGSe",
  "key20": "dEUHhkCST8FPQWUURHDJSoFqthJ9bHKs3iZ36GgGjovqGWqcnFZV1VaY8CGEC7kDAmRHDN82xj1m76F5AgLXASw",
  "key21": "3yPayjFUuqQ4S5cQtSNXyNaVNp4BdwL49vVaSQMNhzHeJqLgukcMCV5chjtKxS4CnmwNWbRewVfPdv2QEVXzPs3H",
  "key22": "4HAECU3oQ7SKUEPgFvTcu9Gc2XHAsmptWMTufPWcY9UcDjSZg2TGQGRdnsRXUE7Hf4gUYokVCWwV4JCYWwuPm71A",
  "key23": "2wTzZdo5ZZnMVzq6gX1uB4m89dThtpAB8SrRad53xUGbLU7SAufudT1oFnpfyn2gnFN38564CAjytvx8eb2iL8Ht",
  "key24": "3jrBDdSd2iNdEJcDBybVCQVABAd6R9tL2RMrd7sjKdEKsF7jCz37ZKqgBjytj46agZaG7qeWFVkvZMjnMAX6DReC",
  "key25": "2htpGUwaQo18ccjksLxzhZw2NFjTqexEmTghL2HygZwXN1JQVU2R4ebnhkWGWBxsjcDBxWB1pEUUfoAfj2XSvzc6",
  "key26": "2uWmXHuGQrCGf3hQV3RoX1CYr6NJbFSdhBxYpned1uc7NXAHmR4tEmNvQcwARc2n6yfSkN2o2zj1bzJQUJnYU5Mx",
  "key27": "2x5m3QyQ7jue9X1n4AMf9NyzVZ7k5ohk8imXpeMwtyxgL72HYjd76gbGNS67MPLqaPLn5S1CQURezDApCM4JUckm",
  "key28": "2kHcuUQyzfRPW4pKnDuvBoGoPuGbdV2r3RpHQTRPceudPyVW1454oina5G1LxscBCknDFNCtFczJKxhNUYuyroqW",
  "key29": "4CTfRVo3tHk86Z8SxyxnyZspGUcNKdPyKMLf738a9jACkpYjBubbnpS1mc11L9C6RU9GacM5TDKByhyiD8SKc19o",
  "key30": "4rCV92nCkEeqYEdWjsd5vXxCbHt85kHBCDMru39rtMPG3V8tivK72JjpkSGEwBtmFP8GRTxaeWQ1zsxn2SYHBPHs",
  "key31": "5ensffyC1squRJz1beZAtt3VXbZRf6EXW3szgg1gjLHXFaE6dwSDGTUCpSeo65sihVaVC77Pvv7Xdghs6NXGo8Nh",
  "key32": "cBHj4td151hP7XwKen5HRNv5LMReNPZPqdSXtwomRLmSTXCn5WCYz13V1po6zjHGj9SAzDuE6ECSsLv7mJFMVZd",
  "key33": "4zkiBjCt76CouJK6v6SHocXibv5ttYrPZJ439TsEXXU7WWGrpnZKVaxdEDUhv8gZtSxzU3feEUA1ADU7xSQXWNe1"
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
