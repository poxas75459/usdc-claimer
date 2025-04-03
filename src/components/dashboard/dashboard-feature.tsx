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
    "3sSsQighc38MZNLc17ekquzK22wC8haMLSxmZ8RjNS5DEj5JkZaMrdNdW1FDdnquWfWEejWjBA7keCEpMU9jQw3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aexgDxbiEvCJsdCVuTjgcrrKXktr163Gx6fKmva3oSEVD8SqqFygMwK2Edy4pCFToV8QKvKzKcoLYv7ggFAz4cU",
  "key1": "qPYAn3F4wrhau8oQuSNn9Q1e1Jr7z3xUZv3aFPLuQ2rZjaw68p3YESQQxE4c4u1uU2RUx2uhGxuEuDEjMPrdmH2",
  "key2": "4gB1ToxMTUzvns7RQMiVLoVz36BTG9rLCfwovXBTYX1DxoLu3qLYwhLrqHgg9TspKpBy7Z5swctN77k7tF2vDFom",
  "key3": "5mMYhojimbQFYxEQzqdShHYXy4EdtcD9poG6pCaNfRJheN8bnrqDExya4LwWKeJw1oEMQPkPzu8sTwXMdkzUhfRp",
  "key4": "4m7jNp7RhYxrPUUVATmcNhdwqjAGFVQbAi1pKgkfLwanWNQP5Z2EKUWb4uxPpAnAiauZeqvBtXzs3hoTBL3DAa1a",
  "key5": "3RSYnqpL4uYhXVYnewSGr3vJtVey1RqT9EHGa9mnAeUZWb4PSutF4zgRWuhXHc5Y33Sotfa6seThgA6QGtaeuJjw",
  "key6": "3hzt1ag8mP6zbPBRN879ejDHZeJco2WAYFPJfaDQYDDHDoiEjjuiS7k6wenquEBtaDQypqV53k1J8A8vYThG1QFk",
  "key7": "2e6UoAuXkMoagvzCGq3i96i16zQhN2qmrmhwRDhwkvM1rF35EQD2zCtcjJWYFyWCk8rEW3Z1kFh9sRcuLJYdfqdX",
  "key8": "4PDDQEY3gWKBHhnNNiq33NTwzZvyfis1xPNYa5C5NNEZBo4wWp8oqnNHivmyLJhaUjT7Cf3EnC18Z3dgwqaMDMVt",
  "key9": "44bxowRd58GBdwMEgSLKqJFBjCagfFCQb2sB68Thnk4Mb8LRUUD1yWeYfRY3tg5c3843KiMy3fj6p8JW3oi58Bn2",
  "key10": "Br1QAxn6cNkuw6XJaALgZF7GMVJtJbKvtzBP6fJfGXZZYjMTcz6c4ManyaNtka5BCJfEvNVvughmSFhXRoLivfs",
  "key11": "3Mzf7H4PB4QYDwLDMru9bZ8Trv3WxWijC4qYy3PJrSLpLqJ2px5YapCfVH8PL3r5hRu8942YrBKEvQcKehN2cJFo",
  "key12": "61x4gJxTVkivoQiaLJcqBqeUGBddrt9xM7tDrfdt2mB37TY3X7H9xrTt7b496kaqBvT3Sj2eFJJ8ZbRs8DY47nAG",
  "key13": "5EtBmuW6EPoYi7soStqtZV2CFBRYDC1q416gC5Mimbkgejrw5A5NkCSrG4W9GtP4RT1PvyTrewpY6Dff9KudvCRh",
  "key14": "D8m9tBqCvquSkZ59gMV485Mqu1YAkh1YUsgChcsiL8SDzrPrNdNZAhoq7yTUTRoDGN26jDdAafsbzWGE2R2kvaH",
  "key15": "2CxZ4eQUuvnuRRq1yzcRqhsDk1AgH4A3Sn9igdTzZzcXvouJC6Z61XhfdMdknyfcq3baMTQ1RP34qAACAYYUyCEe",
  "key16": "5CRqQtD7kinycwvcC6atuc3mzmBu4oXhrFz6RnFKVQVgWfSaMrSBqrCeVPjyo6vcwAeLD7nBBGtGQ9TRqxGZGBKw",
  "key17": "37uS3AaZ3HqjGFNHRJtDYxt8RLN5umFYGuBXDDMgQvV7o9n15UUoFB8c3y3RzZAyMu9pmiyEFbFCF5ttpR77AQzx",
  "key18": "2ybAb49qTvXZhwvv5Azkaer7PwUgTAfA1PnXYcaHcpsLhqgwpf67kYDC68kBuLBFvnDqfBUTiGxgSa9TosNDHET2",
  "key19": "5R5hw1LqzAJgc4LQcG2KPaEQmiJSKTDQKApSQ6WZSK8UjvAVdM1Rrgv6BtKJjcv7sVZxeFVBY8PdLzWDBtzrFzna",
  "key20": "5y1HhbDTLsrKW94E6P289s8XZVgC4PV5fanLWGgqNxGgUGGBAYkYbi6AFrx9rkZiZ325d5Yv8bKZizesttLJPwVx",
  "key21": "2ea9N2ik5isFNQkPopAPFeHGxe3VRGFxv2MZkF77nf4ibGXiWgCLqL3jXtmk8bfQbJq4w6Ze31NXjVJSuuhuw1K",
  "key22": "3GXFwPRoAkGzvjBg4DsFC1yzKwhKHni5ffy933yEsyMeG2cdfSSBbnhfJM5Ss1CjPDCPQGDARtQyiRAEFGe1mFD6",
  "key23": "3FWgfHs1C5Cm7GvJ7tCxtfwF2gAQ5ZWQtrRUVLZw4c7LcGwzcyEJeGa266kXoakoerTDoCUxmr625CqVjv1qLAja",
  "key24": "h7UigWnu97AMoPF193SjHCfRD3ptizNFMZ1BGswovTo1KgZda2Fpfo4GMSP8SK6gzS1ifd5duPADQ3qodhsCcid",
  "key25": "3AUG8qyU3AMXaFGfZdJP79ucJoAVcGYimgEnpXdz5F6eR2P961vmWRTjMaNfDaFqSRvx4R9RjMRv91eZqccKKLNL",
  "key26": "2GnPABDKPrEA3C9SqQVCTC1NDYB9ZuUhqmx65tEk6ugt8YfHMUgkisZofLkYwvvfJGAsNyd9c83qdpy5pH4ijZSL",
  "key27": "5cVNM8565jHoPVegRw5pczYJHFLnr9Yua5dve1i6T8Nqja3iwCBQCRPVa7mFR4dnw9S7Zyh9PVZJxe3wqXZPtEGV",
  "key28": "5nk5TGL8qUhYLs2u5AumVVwhcbeocA3wXk6MX9t8tBqRSSWahXAgddxFH854HYaXCe5H8eZQ9rcddFsacS2DRRkM",
  "key29": "254W1eNd4CJNrbsRgM2zKSbdrXBdq5MVTS1Hkj4cynXihHhgMuqQonhpc2bRd4vYGrht4iLx3LqtF8vZdp73FZ6j",
  "key30": "2qY7iageb4X5pmU59VsFAThMYv7EibiUXtaDheE47h9Vjb2wVS56vZWAjv4zcHUED4vR4hzC3MnCJK9WwGSziekp",
  "key31": "4pezq4w6h6EwZgwKUuBhME1DeeEufnyZ7bNt6tmLh2EFASdQQgHGCrep1PyXmGPzGnobqrJTEeAoodmANZvNUcH5",
  "key32": "4eSVAkGBJNJbECGeUHecXM4xC1unVpVvfcuDwMCXHM81Ns4aeEuJ6eodFgTJVZHeQ2vPkBYvZA4n5GqeRDUB161b",
  "key33": "4wqXUdieA1tNTsFaNvCyqsRvhkz51eKSkECqjWAKEXkgwFaypbNzmLMiArpXR4SPGLLhfjwgGSjY9ajpJbSSbaSo",
  "key34": "3pDo9Bp1SbByEvvAYwxR7sRiXFL7o6rqi74xc9Q6ddPuQzHnEe7HCPLUFwKAV3Xyae75m1k4SSk8K4Dv8k4Vi12o",
  "key35": "59NjVm9nzxpoZJTATPDJPbbZiNXduU1Lr2ZoiRWbHyTemiLzEujowhNf78mWLrKhdsRCpRbjxyPc3kEHK64b6oN6",
  "key36": "38Edq8sCjVmgWadS1hFeh95AuiV94uqFd9eDvq42grqPjgdiedTAsYXjSofWb427J7miBqiuby87PDMnsvLVjDDC",
  "key37": "3wow7KpTeD8NNHZEEUTDNwaQK1YK3ujYz7Zs6vcviK7kqCiQGuiVag2MoMT7h6g5pC3PDMP9ap7L2UMYgGYAR1Mq",
  "key38": "5T41ubcebHdHa1SaBd3ZpsJiUUa6uZMwbjTu7rBwQrToJg3NNoGnimHGjJY4XwDKsXRa7dqFPUu4ydjwfWTyU1Tz",
  "key39": "2B5Yqi6qbic6a5vYxhBPiJoFoe6gYsn81Bx4QwUiv4sX9X7yXfqpEFyq5gBiUcCxTzGtEPHfMRxiT79KE8tqktdX",
  "key40": "ekZNrTYDYsyURKcqCFGoi1SDyojjhuyXqA42s8xszZ6wbsmB1ru6WiUkCMyVWPgx5SKfTawYVQtfLPDNZCF6tLK"
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
