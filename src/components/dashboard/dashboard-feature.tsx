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
    "4eFyWfcFj6YFtQrEGQn9uJf4TznH57u2VsmntShy52Kzb3mWCmM3pTg5tk6azVfyp6bjnLq65rXxkD9az89b5s8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pDx7zpHwR5JEKii3mmj7eshszr1revVdXC2asWH2W6W4ksNTMghHVJ6ibYUd7VqqfZWH1xtUzQmc4Z1bVJ3DAB",
  "key1": "2ycvCZvakb6CTALimukNmq41zyxdfdSdwGV98V7CcAHjJBJxuJSiD1hU4GGssXiMds7hfMdUsjkA9qVvhNR3Tt44",
  "key2": "n347KMuNXnyGRUXTJdVD8Ejr6ZvXAh5n3uKSsRtux7MyB9bf98R4J1HsWyRPkVHCzuxSPv34yrxdm5UpwnZCtW8",
  "key3": "5qD3QNmLW3FZrmZxsBz5gcoppFehdTKhEtxPxnFPfEgLFo4UHPiA4TkbmjCEYY8Lzj4ZtdGw8QMoYkJy5CPD821e",
  "key4": "udc7pNWckyadZCE2P9vqfJN7aQ7fVuiuxyXvz9iKjoairkH9sX3VQnCxPpTUsmpU3ru9tWtC436iCoDun4vKx32",
  "key5": "3thd9dN55qiHQxR3K8jGR4BHsMjvPWYCJouQvVfnho9Rcb6eN55PaNFVUgESDtU7AsMkJBdXdcrWDtxyZHsiuLZw",
  "key6": "2cmamF1PePRsfXrpKKhCyXjsq3X8KTHSHBe2J7wvU9hBjfGGLXEwrEJRX6xV6FNT6akRc5bs9uzHR8wGhzMYQJky",
  "key7": "4Fx49r8e5ikG2cgLE3hW8BnsLeuJd1V6S6d3Jz9Rx9yE5x22LJq3qwMuAdKKk55yCFavxArrba6PbmLbsCwZgSC7",
  "key8": "5Tc192BmjYeBgqJtni5MEWfdfESvmVM8RsFwiuKvkDPGQDG7nD8UVnjxgzLyzQBL3EjPF5VhDXucHRxkFRgDKcmK",
  "key9": "5cfaTSDGNgVDNC1okYNJkr6uBe7M8PeCCkM1c58k9tW7B6DGfE9GKcYJoetUvpBmwgo2G4SseiGeznosGDH157iM",
  "key10": "51UhaBnXbZfwzAb67e2F2a7bnikvgSYWiptbMhMQXPaXwmtBtdHUcmzXLUQiobXYnvThAVbH6iaW1vx5L62jXd1F",
  "key11": "5kzY9eVvXZdFmNVuZ8Z83CxyJsVoBcTgdy6jRo854pSzioZszsoRtHv4c28XLccN632sXALxHnpR1VXbfdpFNTdK",
  "key12": "4Q6xRyEyG5PH5vAjtwTxKzLALfZpQdqr6rauYTVF7rPD4mxj7WNtXfkED2frL86VoZD5Zd1TchJtx6KzpuZYCoFJ",
  "key13": "pfFReb9jKQqbRG8twGbP5xYzP4g75xQu4AjKerF4xtNmj63Rf4hUUvx4GjRw5RYb7Y3NwZNRD8GyoTddF7UcMur",
  "key14": "29vAqDwZfQ2vu6JpAFPjacgEXQ8MQ5Ai2QhXDcrvQPUQPcFmHs6CWmnmaNBFF3LEUJKh65vKzZTf9Tr1r8HJADp5",
  "key15": "2Jm5rhxjYzbFwcTXe6M6qLSjrtZn6wRjW3uV5QwBxt8Z2JAN4HSfvCEWHwG9xjdzdxkQTEkF2nqTB4tLtj4GPABs",
  "key16": "4SVAxMmReoLcstLNNSrcn9AwhY5LZCX9ALxDup8gxjgvfho7z9ue98eRNQAwUJ6brA3Ua7PmzoQiqPRYC52ieUxA",
  "key17": "5My2pYRMfLEjoPCuGgAG95JiXNwqmvdA6eh1pbcyA9BDyBRDXCnUyTwQYkk77qu4uZjD8dDscnhtagPN4KdN7eUs",
  "key18": "3SiWgkUcMuptda3pJtuQdudRu5KFsV3cgeX6JhQKXyseRHYYGA1HW1XJDKbNAG6DjbofcdQ2F4v93GAzXWyygtXk",
  "key19": "zJ5wzFzQT2f6n2hwjN5xD5QinFtJ3YbAkNXw4aPYgWK7LFsfC23aqAjSd6RQG2BR31BEkAUftfY1HSU1ib23Q1V",
  "key20": "3PMMfdFGyEh21caNFQmLr9TFQXdUmmWLUhbjiPZ2baj73JuVPLFg1pkMyoXng4asQE9TRqm8YZD96rD1wswD3bGp",
  "key21": "oDqyFr1925XbnTk9AKDRFKPGc2iRSqrxsmwrnDPrRdL3zd8K59H81ynhPiHiUEFzQ31wzZ7ToBVjap1WXoF48Tt",
  "key22": "22gUad7whRKFtiTQzQrcCpK2DhJiJNiRnJDMoACTbv5GNiNjLjwdDNx62n5ZQQUZ5KzUqBCHHh2P38HhxKnH1geS",
  "key23": "4s8KDJL5m5cutLDJMwUqi6MS2Sv57abga5Xm8K5k2pUhDC6VNTXwFrtXkWeriKc2TTQxipbmcgLzXV7PFiZEVMMj",
  "key24": "3JNsgCkFhMtTsyoujL3yZwWivpipe3HMGtwWLZP24SPAJ9UmGR37kWrkyvBJYNzqCbXcLnV1oBH9tQ6KVUe3FWHe",
  "key25": "5kf5VNJfG5PRPHs8V7zyqGDCVvHMbYuEXyZnUK6Pfr92VR3PRkbgdnN1aJuzJfsjiHRQsWG3fh9RQrNGsuevm98t"
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
