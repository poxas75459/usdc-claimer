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
    "3grDTTUSqrcrdZDtjzfkcfxc1j1DBhYWc7j9Y4j7SiXLHgPoAehAT8LCwku7pszzf36mNej5FVRWDK59X3f6jtao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8p7LRme1PjyQoYA9pJKG6Fh1PQCfH5GNngtnnwLp6xS67FkmBDNygKSdir3eB71751J71ZtpBMjYyoaRNi3c5UK",
  "key1": "3rYrQuC2HxbBs6fmajjbNi47fq9AgaYQURU5FUB2fGr467GgxhA7CFYKGVDHwh3AWJ7XFku4v3oE3YKXBi3eCo6E",
  "key2": "5iJJp4185D945k5h5BFvojqQWEUQVKCjRa2FR3UR1fFg3xnpMbfaonoomDo9wiSLXL2sLi25jmaiHfwrZG1wYMFQ",
  "key3": "2XxgFqKBhM6yHBVd8Z5Tfh96rWob1V63LKCp4wBMShVpdBzwsXGLwwKU8EG2kr9x4WN9PU6FkfnJPPcdfBtQPFpR",
  "key4": "2FgRo3CVtd9rFzWzkiLabhFxE7SVccpcUwted8V3wzLBQ2fZ1R4J49T9phiD1nNmSfYUCZx3F3WEkkdEzPM9wKFG",
  "key5": "3CE7gH7FbroB8DPfZ8rajkAw2vxJkvXTkXyk3q4LmfeN22rxhnyxzjfCYpiyevcQoTpPk7x3q9AbskgPJcorj1Fr",
  "key6": "2UifhHt8VBAvXUoGKmmdGNA7wq7Zaqf7hL3WbShqNSejskGhbKE4xCT3kEFKzUuMRJ3C4wij8pUuomGHkLM1JE7u",
  "key7": "5Zme3ydqhS8htiLoMCdcAHJVeRNTY6dBu2MyuPW7xqjJzBX8rPJttVijwALMkBA3QtPs1W1ehRb1n4z9b1tQMoCz",
  "key8": "3rjBy5cicupqAoKPR3tnVW3GKhEwGmu7qViNzxLB12c9DtrpJNSrL5E6mhz2HUAceX8HJtCpxCGBpAoe2VWjoEmh",
  "key9": "3T5aNWR4PMthBXCTb3scsa26f73njzFsnLGAAUUayqPxuDpEMyjRmP4r4q1nDp2JSUS3CtC31D5JieRWcGEuRCnD",
  "key10": "zdK6N3XbrLaF7zXL6WnkNsW2pbmHjP1dDC2vU55mxW41dfbx96M1yuibW1wJLWnHX19EqTpnKeozw6dzBzMEd24",
  "key11": "3HYn4HzMSJEzm9PEenFMLMmqaN4YMibqzis8e3LwP5aBWSvf8on2jpir1QgqSdqWZcuhUYFD4MMBM7xS5gAJmfad",
  "key12": "4xQrMmHM9m2CGQ8riEfSEcCQ57djTk22CeKUzBScpYSkKn1Y3rM4uQ99twWtBM8x2g2WJx4LRnEQRaHTTqH8HuKa",
  "key13": "58J8WLQdbkqDpLyZsGRhF1WhXhfT99ArdLGyrKxzJHjqR7VVc7S3HZRYfRFjYLcZT7nCuvRtHxeShkEUTAW3gGft",
  "key14": "4B9PvbwFAL5j9WdGSpTcqnLjEz5asQ5xbcoP6H3c26HhhEPBtBWj3CUTnKErXmBZ9PLdnyzMQ2PYbCYCQNzj9qLi",
  "key15": "EARxgAUvxACY3Ei8LBR6TJyC6c5PbVwTvZn16vztCqfaoXnb9obTgQYQ7rtgMF6k33YpoC2TssoWKTLUbaY8MzU",
  "key16": "v8qYmvH99M16Eoq3mR8pD94CfMZkCoPNaSBgKLBCzkcxkZG8TcqQiW6tgK6Z2VnSPZTncBrFLvsmPy2WtXwbqAV",
  "key17": "CrzreUqioehcKBbEANsWxupYqvoGGy1oiNR83szbuoEqyaSCcMAe2Z6U4nXMaZVDGXYvnGGFq5DGMFRtNDxpbrg",
  "key18": "5S6k928vxhhQvKPzBTSpbyrBK8ggZE5aTnyiGq4EcJTL9vciLV8kj4iBgaNtb8yWvNRxeWpskX9TzSQtpH58bwrY",
  "key19": "288wnBV9vb5Uv1h7rwrsVLertCUZu2ZHwtqFLfxMKkyfrZAo56mx3oAcXAX5wdMW3T5sgbSWP6iukyRzRKygRpre",
  "key20": "5HMtGxLtCXB33mZVLeCubRGqUSUprqXXKexnSd2Tq2MonGgZhXh8H2oQzHznHvDjCQasbJTXJPphhh4b7mKTfjgQ",
  "key21": "5QSnfemXsLP8k1sxJZi7sEPzkKXYGxxm1F275iQSxM2RrUk8f1mhHbitzhA8GTRGrZ6Y7GPLKkBPR5fCGbejLPer",
  "key22": "5VieGL8y67ZxUjBocyrA5nEMggXAbAF7AiT6Zm5zkydgdNEtjKePdpfRBLVobHYiXjsUnqdk8hrwh8WkFqRiN3tj",
  "key23": "43UBezRUmeDhs8qK7nWeYpESSL3s1ouCXbjWzPEQuvCgN2f5tfZfowVuR3tKBBfMoo4NYeMv2fZyoEFLuadqDwPU",
  "key24": "DckiJD7DzJu2onG58zLGphpqK3VDN2gwM3aSJECbovMm1jjdwJk5kg4AsrvyBq2hiZvTXXWgPaqpjgTtNbDFu12",
  "key25": "3bgB66D58Z4WRskWgKtsmExRSkzqPpTcasW1kw1aVTuJNGjxocrbgxthyzvU41rq7cMBVwjwgP249kpm22JgnS9g"
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
