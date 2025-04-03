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
    "3apK84CxZTw57huEtRmmD9KvAYnzLdJkY9hLgVdcX1FHFaVTLciezCh7aHEGQYTo8BEMn4HZfXmmGMJGzTfXQZ5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTSM7JgtorbttaGVcvnS6wjZYuNw9jocF522S9Dyiaj19vxbGXqrNuB9ddJCYJcSgmAZg6XRquQdEF3oTm1YZL5",
  "key1": "2AYkC5JQf6QqU6CEYtJyVzDUeKP7AKMyFyTvUTvsZoCFu1UvbogvctqG1hj8sdUHt4MKxzrwgWygsT8gQsKvM9HE",
  "key2": "2NdDwzPB43Gvwe3CFv4nHH71iENWYwuJSPkixvyGddvZMkVCAqWrmsC6URiXXREaYVgjuCiQqS76ntDADcm8SjCM",
  "key3": "5DmZfnWhCNy5qNVtKL35QiccAF9SRMmVnFCGGPQUqv4C9XPKGiBe91XhD9XsX6QH75b4G3VBJcseYDoYSpiBrFLR",
  "key4": "4CuhYHuvV5vCQNNLqEr5tATp3HxmtUfYCwCqygYnKXArrJik4LHpz1Yza29FnDKDYskHJegMwp1mRFbZ3f3HXpyP",
  "key5": "67YGF1VzbGQskuXotMEoovvdtxSM1rGTj9JSBA9pgufBY8d1FeZWZ8eFhkeQQdDGQuZUpcR4FCQyad18tETSR7n8",
  "key6": "3zgvpMWGLyMaM8YijYCVBMnTHFAQU1W72wso1hiwx9oJeNRRXUqNGeUjKbxGuQ6NkFGKhgjXaXmS5tSMi4YSAKqo",
  "key7": "4uLZze9KqFeRENJ6ATyBdCtCLHYMmPjQ8qAEW9uckm93FMxcFBR2qrUaXURZv27JS24LNi8USQ3HPs2hn46SKnqy",
  "key8": "PfhiBfjoBqm2WHpDAUBmBQqN6eGumwESqGxqFVWdoD4ytSiN3JV9CgPiWcnZn26BKbNfCayzKPJP14P9Z38Gf8s",
  "key9": "2Xif1bvXL3aYMdxExsTbkkWcEtEbnPtCk2DT8eTSJiUsNQkrEQ2FpTCFvtZL61RmPT6YRC5UrVRDeBnchvzvdE6Y",
  "key10": "36tdCfboQNHjqRbbVDSh8qQDr6Y3kHQtznuus46u7gyixSWX612KNTYkLqmfGpVJ7qEPfBZhYnreRRiEtZyKE1Va",
  "key11": "2f8fkJxtae1C82ioL5c8j8iDtp8Lc2gCjRo3TNphtencseVzEgC4hbpihxopTDcQJr9mhRJDq1rXgzkCCGWahdrS",
  "key12": "2rRHUNEZ7iEfHTriEhgG2xz5nB6LQZUsMsKZdNUnXQnsV9cW7nk5RiXhbAjqH64697LBTHjRgjdgZSejGkxd5m1n",
  "key13": "5jhR1ZcLeDTeoxfHvE2P2JVoYZAxbo6kiWV75YzJhmD1ThWSjJgA3v2QR1QJc6YAb5E1GegFrgk99Zsmzw7WSWy7",
  "key14": "ionVnfsXWjQ6P4Fw2yNx8LZXmjWSxEtKkThJ6RPwg6EvXRd3HCEQDbcbeTzD9jTUFBb4kUszUYn1jvyaE5HHsLb",
  "key15": "43GdJnK2G7cQty7QmqcAKwLC93FL4LeRcE2nLsEVH4HGudnc2pfjXTcr4mJyihYKxuVt8vGEWH3eMtHkeBXPoZKx",
  "key16": "2tEqHDiYGKcT4RC2vMe396Z5PudRfkAaGeMnXsGkiuskbrBwF23bB2j5P1AqzZAwkdBt7yf33Q7k8vJkUqenktCJ",
  "key17": "5s6f1Kgc1uBV2NJTBxHqKgHxywSsrazvCbt6hApjAbYRT1D2ptP6asgdUDSBM1EBYUa7izXERjsMS7MNDyFupkY7",
  "key18": "3uNB8ptc6XrZrAyZ9t6zi4Xgs9kPFwtkfJk7dqKZpET2krsuAD7Xjfkxmpcqs8mVaZCwGNNEev7EEvEq13eQ8MMz",
  "key19": "4QqBpzEFxMJeViMCHbZuWK1xJeVazGNXC1ZqHVhRh6CPBRPSBHYeHimRpcAPthkPxBQhbTmoTtndrc3HkbE2759N",
  "key20": "3CwsArePZrDsRms6tqetz5bCWnnnqdTqKgAF2d7Rtk3xe8bALNM1NpCtxMb2tpoYaUG4DJmgMUBTMHod8iGr46L4",
  "key21": "27hvGzsqU6m378yWyjVqECi7XAPDYwDabX66zFpaMErdMjDb9EuMBUzJE3dTCiu1XCq5jNRZamd6afZzmi6sURsF",
  "key22": "4jXJMNcnzHwGCSpUukF7PZPRJLuVd5prg2HgncYZNc36eDq151GEPpfCXY9SortS6wFrdk7FQLxdgYWE8h67oFLb",
  "key23": "SNgLi7oxh8grLG4bE8KsnsmGfCVDJB3tzapBNa9K6sPWwZQnKDWLeZFy34VC98jiaC3qatrwmpCiTsbYx5Sp7H5",
  "key24": "66Z6XkhHqeG6mmKKAm7mQAhxLWHfWWmmJDoSpPNNbq9XWmPvb2eiNUN8h9U9ycDxd423ynXpHpHvGFpvdb8ZtvQX",
  "key25": "6NpngHijauJ9XVsUp1hWp5nz6ANRrwHfkbQhyVCmFKGu3RWZ7jJrm4MhEPfSpYprDdD3n4zctCvR3knBrNT3gr9",
  "key26": "5nZf1LKgbXR2SkhSeXH3AwmAGYCh3KgGeYeG6zCkHWuZ5HDRLyG9JsUaR6kNCirjSFb8JqdevaMyhAQc27KswNMy",
  "key27": "2NNJDyP9Dom4Wvqp9AJwLvdMV9FsmrY8KuJRz4w8DpfbDDGrjMjgFBBwjcS98ybjHAYrSUfD1KSPFYXtcyvWT6Xk",
  "key28": "27uw8YfLZmkpihjhqcQTDc8LjywL4sZEzQoELnaT1AFfqfFf9NXr4ob1y3JSmY5LVrrhV1BtKM9YDcGsKzR3yDJ3",
  "key29": "61u9QUWj2Kh2JfZbro7JF3HrToGCQh5UuGy1Fjm9SyUgWn8veduf77AVa6P4WazWS2htDL1BDDE8tDkkq1KGcdiu",
  "key30": "irzRnG9JmJhJScDF81Ng7y3C9SBufo3oMZdxdp9q1QT9RSQXmcQjnhBWrxqfo6uGQJLTFfTBqm8ZcjS9XzgaTgo",
  "key31": "3QMwYxWScGaAEBj1k5PbL7xGCyRzVqYgBVLUhJGDVKQxEeaVjZJ3KRnAcLJqhUkxxf43PSee7qnB937SyuF6CrWx",
  "key32": "5jGJCCYqBKWw3oiA6DHTZByQw1hQa2ao4rBo34N1k9zgHkrernssfXyoL6AWP17PjwAktBo5VtMiu6y3gTn2BjYw",
  "key33": "SBv5kp3KcrXH45B2PfmExnyALkzb729u9uHRTUtaXDVpGgudK1nTXtbRZirb1gdG2CsLKoufVQZ9aMWrcD3oV9X",
  "key34": "iWVWF23MG6BVMeoubwyhUjNG2eiFWpX3YFvfvxMAcUYgQxTFYZzvrgeKax1GooUMu75sdsGiUjervtXo4mggZmA",
  "key35": "BV2Gqm4sAnDVVinb3gf5kGZ4kU5N9sZTcPoftwvvWupUSTzPBhB1UDwwerGTcktrVossboU7C6LcEMtUA62aCMT",
  "key36": "sPKFczdLAF1firafHf3tFtQZF1hkVG4fgdnbRJxLvkxdsVcfM21mtNEWz7EPRvFXtnBMY3FS2cgx8PSrTxxAazp",
  "key37": "MNNxziabqbSmyt1ExpwxwwWbWTGy3piYMvDbGL9s3dDR2iJRBJD5Ht52rrSJreGNHDrsiwPQPKNiJFQQo7DcBYg",
  "key38": "3gAE3qS767xqfbFwSTXkonMsDdUeyhMjuUFjfJDC8d5Fgw8pC6JazdJaMA8Hv68eXccgV9onDASoihta46C913ac",
  "key39": "3ArMtFabbitvRvqQ3KKPjciNNJC31cqiaE8QmpWCieT6J7i41Ne7JFpLqeEcQorwWnPFdFNDneoiy9KbqFMrhaEx",
  "key40": "26rUHuA46sETT7pTDsmjJdS3vBjY5uEEbDEChH7Bdrnoii3heLoE4ztT7ZhQkEWovJxHXHJxTppBKgaj4o83AxEJ",
  "key41": "2GAnxoBVNWSAuwowkaEEy1BkbEhQMXY25YU74HPASCMaFz9X5xyPcGypQrK2JTHQ8jhqqmgx99Remsfc9JUz4SpL",
  "key42": "3fToHoDeGZCBDm4UALwy7jmLnmXQwyvHZgpHovVMabm8hQNNQ8HJaDPKDpCuddMnhKXo2MV2Tau87pcB2MymqFhA",
  "key43": "5AtZkC7mLqgjaiYZyuLJ3Gp1KkZKWvoMiCWHDXmzTfSh5sDkeLAL9CCBqEw4pcGnqyKf1piHhzmZ8BGdRVqbESsm",
  "key44": "yjtxP97YMSXbMw3DPFyDn5YcnyzUZrp5LPzhabEb29odEDXWfMvKRhrZ7eMnKDXpQE4QQJaKjwjb9UQf7UPWLt7"
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
