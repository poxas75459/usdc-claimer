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
    "5ZALEUtL1fvAD4zyrVpcKgi78eKaJDD1aQJVov5Qcav1tPmiQDmj4pivmhRTqAQs3HdGGFAHziirs6SQEqcPjbmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3NyTFTPVx1rqoKupNrC4ZcWpBsP3r8nfLYZ348Z9GNuqztnQTiEWgFHTbXDGuXacJxrtTMb55xvektsQXnYRcX",
  "key1": "9hexzDjUwaxhn2e5ahLwTVRAG5S3TzvjoK2zh9MJsMP5UNZEr6h6ZMhxdmbAvBKJbnncKE5vTxDpjwzmrUVN62k",
  "key2": "4T5h7wLYmst13ooGjvFjRFfMJroSG8esAXgaiFjd6sWXSVbBYD1nFqVWqeV6NfYgYFTgeGv67dMQLDCPADwnMsjz",
  "key3": "asaAes5QBV2edfMHbizZ3KzDjuzFTTkDRsVgE2owSb7cEZferpJHmY1StgErpD6VmpdEwY2bPrpDuGHgqXP2NQE",
  "key4": "5whPd32SJJoeQMy6fwLG9LcLXZSUPopX8V7VFMA5t6BmzaHULdVutHw511Xc2iZ3dYwYYSRxdwhJvF7WPHEtWECp",
  "key5": "YjQB8JHVzbCuH25thWP2XvigWR5Wwur684DV1RQ1zGSbjGwiGJGJ9VmjcaV62ktVGHuzhizwenZdw22zCJ5s7ZF",
  "key6": "1rGwUVxXQEcWhmSbak4yLf34rmuopQfVphPPXReN9jgXM1BHL8fRwowuFR76Ty7pTMqc5SCct27RPgvU6ncrosp",
  "key7": "2TyS2WT24DGV1YWjCVw5weqtK4ziN8UKrfSXTzUATBuhdzzs9z5g8gHqeoAFPFSBff9NNEtBscgwhxeCWtEWLqNZ",
  "key8": "5im3cJCpbAwCQeWQCH9zEF5vb2ymT2mFLFK7kBDgTTpNxYMiK7LJiWQ5gxbhzLFsZYApNW2pXio2p1zyy6DEqyNj",
  "key9": "b1MCyKZP5FwXSPKk1x2yCzQXzrK88isyC6MYJy5Cyio4VVAkCWWzKEvaVSa7AHERDmJsg4NAXYbnSsVg7bfF9Aw",
  "key10": "3XgjUCyHxRfXpA6k52r1t7kccpC8AingNXgGETS1Wf5bwExiKzyfomTYd9Yz6xBmCdX9yPSqn2soyV1h8xZXuEc2",
  "key11": "HRkHewjfa6ayLvKYKV91s9XJJ9kt6uo2pZCSYtreQtJoMy7PqRUQrYmco7RRLDheqrjwLFh2eu5q5fxXzq98RXD",
  "key12": "5m1grpaYqfdrS2cJsnVbVbV8qMioBMBoN5Lx5br92Y6o8DCumqPzEdNV8rNtZ2sryMiU6obQ3w48ZEN3hTHQ46ok",
  "key13": "4GGouSxdT1oGoGne6jgUc4kzQCaojuGw8ZFReZjLCWo78MCWdRYTHG8Su8imAe6L1ss4u6AkYebvPumEXANNmtf9",
  "key14": "T2NiPp4X7Jp3MsaUtgj3HS7Uaxpyb6sXpWfdSX4qArVgE5yS8PvRTDn6cXa2EYpKCZHd4jG7cjaLwbcKAqBbHXn",
  "key15": "2AXLpEP58YEkfZ34gc5Qcm1ppVz4PJxxJtqoBkbvx7opBPUZFNrUKbZexNTqxXjhUFKGr5Bw6wJqT1kP5bW4PpJF",
  "key16": "5kTHFqfoQEmwri3FitPdGt6nuHBm2hvSTTAV97F3gTLQYLgzup6e5Y9eEBTE6qcM8PNVxviScSbG2U2j8iqurFKT",
  "key17": "5FDWqu18vVtXs5QafvRzYz9MbRwMXa1UF3yd9WLspyfLa2pMTZcLdnPMuJV518YChaEykyfBiNvQossq4yzMj1Tp",
  "key18": "2QgxTu8REmidznQPNzJ3gCk9XK7EJgXtsxfpU6JwZFHzadS5KCMf2PDzmnLFL1LUQcvaHyhdSVJZHRpETy4vHUpk",
  "key19": "8oojbd1r6UHsPBxrMi7VtSkwjafdKXwTL2iFS8dgbZyTXo7vN33XFFgZDNWn5GsR2phdwqBpaH1YHTtk9V8x2ij",
  "key20": "EKDZvv84TJKheNXB9FkFVgaBbdUrBMVxSzaXtaxedpWXw6gccDzeCj3TqQotJcgJgQZAWGEHWmn8guah59pRzdd",
  "key21": "3uBV3yEdqieRCub3ey6fpkTRJ7wYs9zvSphX9Ag4rCnfceMGtq5CWzPXtNgCU8vEWdAfQHUgFuynJ3dwqx4a9bLm",
  "key22": "61FY8b1as5dKwVM8strfSDQY6Tua861ZcfbghS7SRD1jV4nNS1ZeaJDHWqQF5uwyJacFf5nE1foGEdJL5UfqVCf4",
  "key23": "3RzCbxujSpjq9oAvX5M4RtacNd7Xqjfv6BYPPqbMz3S7pQ4WewxfxPZLGDnQXX7G8zC9KQ1z7Mhv3cjBKeevXNMu",
  "key24": "59PDdhriqZHc25bpKNSSc3UiprrWj61VmXt8mjq4wnepFjS16tr7NWhJ51TTAg8snpNYCtDD2jc1KhsT69Ze4BB1",
  "key25": "2Xcs1FwPz2YoaCqo8ZgiLXf7E4svmQQzNg7J4tPf4Q7SmCCkwABbEBf38Uo885fXvfcnbjRcEDymWNZwCzVyKDfd",
  "key26": "kmv75ED3phcDVdCw1yZHNrN9y5tEmEGBG2LFkwBUh7S6eLhb6PuiR4WLdqxHsj7wcE2BuLR6hAb4VVHM5FbAAPE",
  "key27": "uPY6EZ7rvRtiLTyMzfSD6K3tmyUrYErBr3Bs9Gi96Jo6wJEUcn18hwdV67noFQWGg6LPVPtA4rSpKNTM221dUQA",
  "key28": "44Zw1dwT2rJgK6m5gTaewhqSwGURGJCRYz8AbS9aUEjPsF4a6GFjt2tCQi5LCFxB1HGf6M4NijsCou82GqgFeKXF",
  "key29": "2anD1eM7xwKfhJWN7WFV2LZY9tLFNKDYdBbAJY1RXNZjHbWYFtDmDqruHvYKgdQu9CnidTmnmzAwVEe3yz38KM3y",
  "key30": "2bE3sms8cZq4Lua9PZTRRhhQSPn5R7MyBKeui3SfTthYcXg7QAiFfwwRQLiSUymUgpbpdp4g47xZi63dnR51LUjf",
  "key31": "1voinDiMqV1KouKiV5Lo4U4ktPsCF3k6te6ThbaaWYVo3m8X1NVXAMQQ2FWHJPojCcGnWfvTMcD96Lrm3SPfvJi",
  "key32": "2mdSF4dXDiStbvvyGoWCoS1BXhLFcfgeYyV1wnnCtAndNBtAZnZQWx2uBNKkosNsAgfEgLYHuZyfAtA8hZAe4c61",
  "key33": "2P8ZpfK8METmUyDL7mTYw9kUHX3DxHTTjsnEgRB2Zkdt4Lo6A4L354d1nq9gU5mSdfCUgyFUgXFLTPZ7PxBJxe6w",
  "key34": "5MpopHp5uYroSv9Jzmkyhe29ZJaCnnTttfckpmq4m2B4yQ4uWByeKytiwZF1zqDmmjfRjyhRAfxvKeHFoNAWsdrw",
  "key35": "5f6uiYjPnttptsh6xmEPBEfjf9ZCmj8Z9iJoPgSzSv2t8CKabSeE1H9tY5eAzgfStRf96QZZaKj2Jndgz17eiUmR",
  "key36": "66szZRmYcqwxo3r7eBu82t2cqGdPnxouUyFSsbt7uizPuxAGwGiREPHsqFGHYMhfHnu7qHKuwSDZXp55SDPLuLx6",
  "key37": "4M71EKHZ4m3C16vfL1ZwynNiqn5L5zKTPvi4ZmzC5tTdVJRgr5TY2rG3EDcKDPtsgaN4na7zZixNphmihz9Gw96A",
  "key38": "22xNU885zhbVtFEYgVJ5KvfqvWdGFEz3TrzMdj646de5PdCxbXdqSS9ACA7WSmLiyevCCKujc144RNg7xGhPDGBV",
  "key39": "5HaNb9noKRta1YMe2k14qca7eSuLM4PzJdNALdbBpE9RrNiZRdAtewEmjV5PRWm23ExqXRCFi6BTM57YQRRUoVPp",
  "key40": "5nMxE5hMFGx3Ki35bT72Z7zLd6boXipa66viDdBsJhcuJ3zBfatnADQVhAs2BFPepcGBJe798eCMggWSJmWLBigL",
  "key41": "3thpCVMPrTu24GP2THNhYMafjyGuRAZwXBPMtFimYBwsketJKRX2F1RRis7W9Ly7F2BNgBemoCAQSiPX2tm6PsFo"
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
