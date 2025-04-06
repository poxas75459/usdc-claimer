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
    "5eifjX4XnkUDwNTnivqPkDgJV4ouw6X5nGMp5WHzLDa1BGdNr6yCkfXXhd6rhv7Kk7ZBfdRsPoMDQo1to5ztVpTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGn6ZTjDUM8unNU7YdotB8iAbJBDPeJaQKhwywH5UpdTQ1M72ueujVxTfBGbxMpnvz82J8uYuQFfMf72LHHkKT7",
  "key1": "5p733RGLxQ5mGDMAFRUBoEwDhiAmG5Hy2oK73hUxBBgDCUA72JiuByFJ9zXMmZsPJN7GzdyPH8Qv187aR97udQnz",
  "key2": "4FwM5sT9egs9K3gHhR3qvtRi4GynZgqGKtTJCyX9Juvto5A76VzArScd6W3nHhAjKpc5JmbinegtxgCbwrYXb788",
  "key3": "3HGMNBgMvQAvnPLNegUTJ1KKMYtEZ9E6oFtcnAZw5AY62ZjLBTH1XFUNVSjn8P1ebJWZZZSMvW1Yo2M36fs7kPCi",
  "key4": "63A3P14marT2HbQ27rsbUgce1YdNHNmtiC3G2Q7d21FBZ4oDTg4dfHAiML875hTRtJjDymr6HFZYmV6cWge5V4vw",
  "key5": "39jAsCQt7TnxqMySmzpbc6YpAMVX7BACGzVqRsjVSPJA92LT5WBph3LjnQz7sDG9GAAyKwboEzxG19Y7PFeFrVMu",
  "key6": "5WrRmSRoo5Ut3dvQTELsYuj2S54TFHwyxduEtNyCR3Twu8sARoaY7dLyUnVN9ZTdB9JcjTCPGfRdSDfrZ2H5boos",
  "key7": "3TUBtKGrAGKLVLMgz2QnheFTLzH4oKPeKdsGD4MgMS3ytUuZXFWDPjB2rSyYZq4KemqcBqvjzsDsMAR4uViZbAro",
  "key8": "5XqnQf23YSK63pnPca4mMzPrsxxCemsDABC8TyLE5PuZKfKiTv74vUZ4FUjznbyQ57eBVPn6aUxTk12nh3WW8nvs",
  "key9": "5tiGUmeSamjAQtjNfBotDuXibskxwV8sCi2MC59unKyDGnqpfqSWh7mdmo7XPanxZbrQBAqWckLq6yvNz8PMLTcp",
  "key10": "3ojrH9tV47Tn1ZHgH1XU3Lc5wxMpB3qyRDeSRuzaDF3G1PnHzdN12rqRGYDmA72Ewh2ijrk7qcXPMMbz8PfkVvGi",
  "key11": "5SdyhLZC8Do4v7Ex6Zzy6nwB8BBD8zusxhid6GT9nU8N2W5EDBNa7kJiiFvLBZU1SMmhFLyYhjbUH2uk2FWuEJSR",
  "key12": "1TxH5XizWd61491D64MbHLUTrFWPAf5B6SaippT34AEr6U1FkQfZV1rAmwdxBns4ysv6dcpyz7T2fxsyP8mgSbP",
  "key13": "2uWtwLfv8RBQ3K3nVScFGCp5TqcFVjVwgv1omrwArf4AE5N1foQfBu9QcdKbuqSnGBtd8XAtABv4vv7rGE6WQRn5",
  "key14": "UFLjJyKN1URERkdu3KEhAeS5Kqxcp6timnNqpWQhjocjDCVmhunve5BbsoZna171G4U4c6yJwsSZMZ25Q6h7Zc7",
  "key15": "33uBt1kTPQXgQH2mNX2GMu79EYrHhCBtQZ84axhPGfR6aUJPM2ZdhWqZBv8E34HxKzZ9jkHNHEGN3b1wBYeaFMPB",
  "key16": "h6PGuSKWh1wKe7WzfffEDezaFgdd77LhdVTTKwsEYCDHbjwes6fo1T89A6mjqq6afSQDA8uZnyk7eNFGhd4Gdqb",
  "key17": "3pMQUzs42DGmM9upVjesrseB6gYisjufQ3M8GPnapMaZFcd7BzCjdqs8HubNZd625arVr12a9sfirJj84FDXeEcG",
  "key18": "3u3CEE8gukb1WBTYvGMNE1rCaQL4JkyDkrKZHzXsqHAB7KWG8odEngRnKSMHFqv89BXhSthHiaPvWv7vfdBa9sD2",
  "key19": "qoHJE6TNVKRAQVJNFEKLzStdr9sdzNVTSGjSGSwoSixLxzphyWryfnNXKv7vyUp4KcfekrnzmXSEEbSz89rYP8W",
  "key20": "2bMsgDtkvzGgvD4xyCd9ALcgzodDVG4ZhXFWobxz3EPJccY3pdERbHMZUj81hkszcuZWKZyALPD7kuMbdVc3xY78",
  "key21": "AaVkgdBbd35GcBLBAbWmnkC8tugXD2T6iM3vtvB1zd7RWy3pRmp6g5azgnDJ4omUmsKBTKYfT3LmYRkhM6ym95s",
  "key22": "2gRs4TskzX6PcUjTzTwTCRxzwa6wBsvSWQWqYVxzhqrnDPU1MZJrSnmcWa1BK3RBsUnpQZQju5HB9q1GrRBu7NXx",
  "key23": "47nvXaPBN5fs6icz4ykCy3cwmZNGsweco1urvu4EeHc6Mv18PtynhYpLpWWn1cNAApWUq9csA837YbEtJL92Pogu",
  "key24": "3577JKPPP4eyE7MFChQWLNSd2TDNQgBPttZguUfmPWiYruatB7RHWFg2s7q8PHCh6KALWoobvdEkGPHWNj7aGDmv",
  "key25": "5rL4hwDrcCFSU5vakSsjs6Pzpw4qfsJTs4RyhfNvZa8XEbEcWg87j65VXjDb52CrcawSjB8Q5offG8HRZc8SPjqn",
  "key26": "23Q3eqgwRfh6DNXxEWpHxucdUh9Cfx9nH4rusHAFHNGwXYxfgJpTQDirXtEXfUZNaGHTb1xLWsx9L8RmKKqN6T9e",
  "key27": "4jyby6VosSuTcEcQWutMWqodBgp4D13dJ7oE4n57JqcGp9jNYYtJuhWNXJgcsqqRUTt4S4fFYPgiCQFnzWK5joxH",
  "key28": "3k8sJgLnxyUMS68Fqr48cWsg7T6RKMc3k5zAVMYwqnb368DasKpQWaVdn5nzY6AqGwdRFTjnhw5vxUaBQpxTdC5B",
  "key29": "52eYQpfmW2BPr9SQ6ssnRitMANx5sHXVcBXaGAMBenbLbZjHYj1h5UPtbd1rusv4tHs5veraYnqtoUQx497SCxLQ",
  "key30": "4HoQzg7qC8nd75EL8w6QkpbRsffsPQtxsSqNGpDaWUhjC6pzbBFibWxkKH7ERm7y2Q4KaUxguTtBFHTzvJ8CJwya",
  "key31": "5qMskTLFuL3Fv44W9wwdZp4KqXPiM1z62a1vYJK7DCmGABZf6Zd16v1oLWMWth4FJqWwsB3k6A6fEVfq1RNL7hSx",
  "key32": "2GqHY3v2D8YBBMXzhkuYh2MmuQzADQx3w1BYzyY8iveST8PkjNXap2HnZjXp9A69d1iwpMHtvUmQPJNqTtaKsKS9",
  "key33": "FE2Q41xGM6WBR7LAD7ejTDEcfqqcuXkJirgYpEGG2KdRbQU7YrNcHzDwqPmtumF2DXzCnJUUwx2eVKeinbHRGcw",
  "key34": "Wi77wrFZyGJz1Cfq5tv7DzcbRHXGo6ouQwHZxXo2dNYahq1RCs2Z8GroqQXGe7UGoSfsF244xJ3jjs2kV9r4ud1",
  "key35": "38G1pCLEqHj92quneosyNa9WKAk4YjEPPJhUtG6qbVvsVLvmGhbVspNALUW7n2FiC4CRgtpVvvqthdFWjwxBTvz4"
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
