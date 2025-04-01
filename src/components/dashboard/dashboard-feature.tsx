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
    "66x9Rmxm1RxHr7Cantw3LFgVbPJftqJohdofjNKbGkawjSp1YXqUZMxySoQziYQhaQAbBnjJZ6BJVefD8oJSvsQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2occpSD4tdSapMDsdajmCacy5PNM2pFDJQHLqdAGCHA5Uho1kmReVHiz4yTegACVpYTpjitFzBKAY6K9iYXEcCiT",
  "key1": "32YnsaGkCoWFKce5vxTPbjSC7KTeSS5GaFU9THLJiZy4TpZGR5xTEGVcH9sEMHTvK1PxhYLsCesjbs4mySHxzgRK",
  "key2": "2MpQt9vqoJuYiRfa53f5qiowojDWpVQdUEbdQzWjF3d54mHBoUKUXmMcLYtiZxM9d3RZdorJ9zR79DWoFt54BH4e",
  "key3": "26Mxz3QVCR4MFfnvjUnSMLzpdAAbk4vc9dpZ2pQf62ZrQ3kLxoaMJijnDwp439mGsFeAbKsWL12jTPApMcBpxPdT",
  "key4": "28J7TVuXwsNjaFvn2rZ3fXYryA8PvVGpt3pZhJWHeZJVP4AHmVTSgyUQLkr9ZPaVs16c6pDHpa1WgJUD4rTyXkvx",
  "key5": "2eECrMA6XbHn791H5hGQV6yZCCVDv8f6UcE528FALCAqz1cXnkWQREFCd4o6FiYrtzPqKmhft22vT3tRGxHo45XE",
  "key6": "2ApvxDx9TBZBT3PwjcDDEoWuG1yBrQSnhBU2BtFiPnDxQD54rg5uqXm7qvALUSDASLbEPwg1Wk99F6NHNHwubnjF",
  "key7": "3o9VLPuFA4snAuVaPe3SAawE2bSbDxVXHUDR8ZMSvxzCTfnd8jRnTcuTDJSDcy445xu554SuejsLQKGQmX6BYTSd",
  "key8": "5Vi4adC1psDnTy2urL3FCagV3CjUpwWemB5oU7bVD6zxuiNFmJyxydNZTRcaBT69cvGcMmZnaXxDnjbthnFuHPvH",
  "key9": "5VJUSc3pjyhoH2LeWjodxCqwzeSGEp3yMq9QQNLUNqq742CtscLCy7purv6S6rUc7XvQ3WhMtDdyYd63JNvikNSo",
  "key10": "NBCZLEf4ezE7nXiBWBn7bRvLZLbi7YkvYcx7qXdZB4yf3pk7P1CWX65EHZNsRQjKCZtuqUFmFQvUiQApZAigbu7",
  "key11": "D2XrLgjdhgCSMBW3if4WbrF9zuNrRpn9gvmaws36G5G1nybEFvToei1M6SsMWs5DtpE5TieyAeLQAtuvNy14doT",
  "key12": "5wPxage25HJG6CHmvgY3mDkJCqgP6Uo64wZpd2ApcquYFWGFYb5AxuUQzLHVEg8PrJnKpDBPygizcapAfMQRR2P1",
  "key13": "5fFs2JojQEk4W9H2jkxYFWQoKp8c9nM4JtLqi7fs73yjcKDBVbTCX5LcCM7wPBmmtrzuGkHKzSFc7F7xo4ZNVa7B",
  "key14": "3BMxs8XCyzfmw1RFsBT8cD4QkTe5EPgPbjF8Pkh63w24Mey373XDL5CJBDqrsicvDAAGMczMPyDCsW9wJA3i6XUW",
  "key15": "2Lb8u871C3HCEkf1KNJJ6rmhaWMCNw6TRrYpFsNW2ydnPbVBpZe5LD7T2iMTFhwEZcXewgspXmbXS5uuERTJ7aYB",
  "key16": "5ZifpWw8aF6VF2WgZH9cfPx39ahbZ1JYxyrZNPFBXnxCgMbpAf673kzi5rNBoLu1RJMWkRzQJPDdgVBHKwf4mkSd",
  "key17": "4LpdqPG6sqQ9ZbTmwDb43kDY1ZTiVYqhMS61STQd8Qh6a1kyqJy3M1U3p1s4qYo2CYizQdWzswk1DTnhzKx5w3dp",
  "key18": "3gTmxLgtLHi871kJeJtqnpFhgHBmorFFiZCinbEq276vGQ5kohPH4Yv2YwWotnk1C2NeXKVTfd5sMfQHH4Us7t6x",
  "key19": "4w415ZnZSYscBeET32RWXwyPnfW6WqiTJGthRjeHs33oLPUmYCAdvHchMrTUMMD47JXwFR4QbB3bSSRacwthxZCB",
  "key20": "2y3xqXwfs4abZiYJG33ZXmQ5cpSv7tgTuih2xzxhiXS8NyG1YmZzZoFqmaHXLcCRdCrjthwMwR7j7pqJQ7pmSjxw",
  "key21": "3zrfGh4EtLcuXxrZLN87K3RpzETpZxRiyEK8pJdJrUa8PoKG9z7aa61WDRzhnu7nmsGrDmY2pFKgdcExhMQgyKwn",
  "key22": "5bMPueLxbDt38aBRvh9fgz1c6ezGqD8bLQpGKuY3JhWACqZmS3xpWfGSxy9J3RwpyHaL9AJSYbRJsnuCaBGhSHFy",
  "key23": "67dzoo6XSDLQQWiUvWbDEj69sREwkTFvU69yPnBbW5GFTYc9o4Jc42DdRgzuAVsGP1ASWe7uW7EP4hecnG1Qq1cX",
  "key24": "4zXqLQai4hHut4P7BF5MNgs7EHRAXodE1m4wfNSxK2tukwJP63DNcfUhzEJuAcXWof8sFGzJtkTpVFhHSuDo12pg"
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
