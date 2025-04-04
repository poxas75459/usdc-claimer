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
    "2SfnND21v3qLUVpGWouCiWW1UYwLAKGcTN4ifoujNmLAx9zSReDxMthBkgRWcscwBkCDWRYbvGHBasatPECZacK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRXoNYtHszbPy4mFQLzuS2bRscKMHHUh1Bk8T7gVFx5iCfvqF9Y4a1aESzmizRyqz4GixhT5mZYVhM6QtUSHXde",
  "key1": "5haarD2a17WSbEtE3smJp1BztsmcQ2GtwxBjZv42i6EGAhbsSZJZsM8qs66jA7uNiLSByxVFCmMa6dXy6UvukLBA",
  "key2": "2m4pt1kcT4vY36qZHkExzSXkyCpdPmTvofQix8tGMdfkwN46APSdgdTSHsynmvhKjVpv5vYQg9tfWtVmr4fKQmeC",
  "key3": "4rie96J4YNfs13RFea2CKpDYZLx7X5vbvuEkESpQ2JQWsfVajUNFGthYWgMADoih1qD9HhwhjxAsX9Zutkw88wAp",
  "key4": "4CPwQZzuvyocfGwgKrQeWJJE7SyZjrqqhDb26zYTSSE492Wffc7eFEL6EEZgujconVosBJ262HvQ637Yu8S5aui9",
  "key5": "2rsP9FQbGWbBXMKP8SWuarUCn48hpuyvwk8A2wxeJSwW8WQoSnpJ4RmBk7Nh7c2Xq9dkRaaUK9yM4NUbnu35g4Mc",
  "key6": "2AtwBbWYENAqwQqxu87evPLVoUfUX7d2H8feUfuTG4DZ2iX6uzPq8NFPXNZqHuxcsbEPCtovQypYzWXNX5V9nReM",
  "key7": "3QSDdBVvTCMwDjtjHMVahDmtNJbpwW7aVcWShHVX1ctAMDHGiBB1LDKVkReVVTK2bwsDuyCphqxd62TCMfyV7bgM",
  "key8": "eFxJtaiVAAgd4PV6TM8HGqvkCpiBLombbb2f5nWu478JMMfERxRv6apKHJphpLPLvsdg1e4oYxfeuAwjgw3K67s",
  "key9": "2Ey59SjvFuTAvkBeWHaeKnaX6cwHpNxQSYufMqS3mFY54hbppmR4YE5ERRNdpZcb6m5E3FtGvnRBRjq8sYnvsQnZ",
  "key10": "3ADmh6U4td7gtQHSiDz4RVHzhsKz6mEDdpMEwZwTPTFHi7X3MoPL2W2eARpTiEyjKegZqg5tVpvMqiR9rZ8ibujc",
  "key11": "33wcapfuKKBdJXi3CEbJU2fb5BcLjkxnpTNe6XZTqVTeaCdK3PTcLA7m8C7mSfeNzXgRtWsZLA9VWqBS6PfGmbYu",
  "key12": "2oRfZUnYrmsZqmcNATJjmYdKf2AxqQ2keySj4ycd5kU5CnTopFR9RNgextbBA5Kpx5PsWZhdEzRKtbgiZnqztCk7",
  "key13": "3oTjfYjmXuhDVBfhH3puU2WYGuQhcSHNzHF4c5tkpjBNJ6AcXHUMLnjiy2p5PYNYScroc3VMm33S8SE2R1GXHsbp",
  "key14": "5tdkMLX9TdYtobh32ysnvcsUju21kbtVA8BfYhgUnf9DgdahhMiQzQXnN6cSeWoA48mjWZBocKT6fUJU9Mv3qLvi",
  "key15": "Gf3Fi7UApovFmduu9YERwfC4Yf8zpdx3CwWRxKGjvuW9MpiHEkqKRYCgGjJ2xeUVdGFPQn6xU7WNw5HMk68EJAx",
  "key16": "4AdLW7A5JuVCZp26w6MyiR78rU5dZDNifHzyGwHZiJce1dJbxGNdkY1H64GxUZE7wMxjRsZjfC5FC4VebcYf7fZe",
  "key17": "62459HUnkN58YnmxdsuXCH2kmZ2Qr1yo9GqVcDTZxRAxyDkDsxDmSw22VWaXm6UUgBZrTVyC3kSSvkvJ7TcRbPXT",
  "key18": "1Y6qRnwn78By9UygAVSrkExdfPF6krGLeijCC7q38wZrh8hUtsjYMFgM3bmp3RVBUuerJFn21FNDZgz2ekMskyF",
  "key19": "64Rw5UME3Bdg9vge3RZhm9YzgrzUN9H5t7AE1GUBgYdDJqzz2ocGpzz6EEQejFAdPYepf2CVqx8PbunXHWkG9RLV",
  "key20": "4udA7mtLiSUb7hRBPKN7Rq2FqN8Tf6sL7S2ai9Ph7452WAMqoPWNwiMnkNvPuQrMta1ete6NDvK35fn5f25Nr1fw",
  "key21": "5dtzi8mzYycTxg2Badxadu98ouM6DCYN24StwoYNNWWf9pz6eQDoNYtPEAAA1vQLkbjHkhxDYue6ZRfr4YZmk13Z",
  "key22": "485VqkjYAjJGs878qcT4xpt81Pxag6tMNATEk8g26jhn5j9hCvk7YDCj98dtAXMUaC7q5UJ1obv8xeoVaJe6aLsd",
  "key23": "NubctgiKanHjXG1Ejir33bT7gsjQqz9QaKGUDTXD3zPV8Y35P4NSRJT7tpmdgc6jrpJzzzqoPknZwBiX2aGng9y",
  "key24": "3rvu3s72cyERBXdgGF91Jx9qGQCptiodtH4cCHAJW3oZE4fb38oRWh9nWLxNSkq9hnmhB4idH4arRtapL2DKEWN9",
  "key25": "24cuSeb5mYQ9P3HAKresWHqQ6zbymipHwh3XXvjSEV95ikRzYozKBQbk7LtDmDNzZ9KfWo9K6hgPLJhX5Ev7BbUR",
  "key26": "2QkUGgLZG11hzz3U7ZiAmnU4C5zx5ikyzSS2Pb592WnLo4xhLxdk5bZNT88vQnhQ5Ja1WsFTPh6u51r7ZPcuCiKF",
  "key27": "3rQioV9xf3EUmfDSwMhJtaP2jb3u82iKDHri8pKpQUCMq623ABU7sX1sAkLLAXUCtcEdBwr7Xe6Lqe3HZVb6k7dx",
  "key28": "3wRq5gTNMnPKYb1Ke3nL6QwuNXvxy1Mx7XuRCT41Hs9VZVSV1nRU3ZPmUVxFqT8A52TJPzKxdPLqEtaQwCb6a5yz",
  "key29": "3CFPdsfn3ChvzL3a597iCfgWwGdpmj4267fLqtJxjRDgmRBfjaFpNUvQdexjHBFchj75RAXtx3hjK9MMMVXZPSX9",
  "key30": "5EiXU9ZWpMqFd2NmxEo6b3Ljn4vW97M4PoR9Fbm8yyNM3DzWfc3rBqrNZ5keNijuYdpKqyHRZrQegvFT4gEkhAyD",
  "key31": "3kmTZACTB3aDugNBrjVoutZHsBERqJ1nMFx9TYUKjb1TVXZYUNfWDnP8TxZrMVj7qoVMNFSxnGnD8NnPM2xnH1op",
  "key32": "5dZ62PAwYDUKPwsPVDLjKhP4BNCef7ocSuiHdK7Xv7rXsAJxEGrGErZQZXibH6tK1eH1HkAqg74M42yg1Ha26YxN",
  "key33": "47iHcBF74TMXLEUWwR2j44cbAyEFoZ1AtdeaLavftd3HsuFKCJJvRBipfq7FWSyYbqErhgTGcxZTVzCSqmSVazcZ",
  "key34": "3YmACb8KWV6nYrYs4fRTSAi6VBbJDB8Qz4ps9JzkfcMqcVfd6FUsi7EDixCsAkiqXEow43VRdZP7jVwSdGpZTeu2",
  "key35": "2oU2KGrgyWjZPjdrbX5eSQXrSZd5ZuDRYdPeKuSBmQjRAudCoB7FJ7bpRT9fFNidBc7K9bDafEDMCDNKAammxCKL",
  "key36": "4NV8cgT6gdbQVPix9fckjM3oc7DvvfM2Md9mD2fEvdJZmfoxodt8MKBZgWVsMTFVB2rySTBYwseUHTG7wfXZHV2c",
  "key37": "4hbfCiofib943ix3rZEp3hGkKYVhjsdwFg9kKFG2XV5Jq684Dc5ysmzToSXipTJVR5DbNnMxcRjJ6vzypzJoiyNo",
  "key38": "5b62oFARrm3xM1Yh8JR26X62X8ouNptMHt29Y9gNAsrvDTgyrQrQt1asUf27DdaqqHuyK94mcFsGJrc6QUt9diAf"
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
