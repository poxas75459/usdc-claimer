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
    "Hf42AQeDHEJ5kiSapLx5ACQLFDCwzF8T2qv8d6LiQRbdrsYpszXdoK2LGKGFrbh1x6mr4fQmMAP1M7o7cu5CSr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scWiJe46sK79VdS2wfv5LfY6XPFsesVm4UkDVQ3cSZHFEFvcF3TfbfQ5fZioWLsXaJBJHFjViF5c16HYgsPWr4M",
  "key1": "2sr5hZBQkZKRWZvX7egSHkhcEorkqAsr9Pz2muHvznTvWtgcGywKLBNAHhR8jjBLE1q1mZUPeztoNf6WTXMY5WW8",
  "key2": "21ccDEVMV55zAycVvA4yjtFrsgDf5Dy55Z5NSfqEitqX4NLjzuf1kRbHmRg18xjwiDvgMcR5rKDCF42qnFAevnbR",
  "key3": "4Trurp7U66hsJY9pakvhz2LGcfWV1fcPdxsZbtSBf6Vko7zSRAvwLQc6UrNWY7bGN4qAsV9RsLJoiYFQAA2ijyiu",
  "key4": "2K28EAWThDd7ejLFpcpvbkpMLnjMxt6GyL1nStn7EhjHcDdyPFjFZXrkPhpdqzuKBueQXZWYBv87Mj6y7LbwCB84",
  "key5": "29WuwE8Ydh1DgYYEi87Z3jZ2zAxaZdjWHJ1c97jAok6txRhrE1egjTvLbLSPNzZUrXCngpexvDVaVUZknCden8Hy",
  "key6": "2Pz27QsdqSV2iDRkFtoRyVdoBz1Fr5bCMMEWgsqY9r2r3GZg8NLuVN32pvMQEg98c9yRTWNpCPYxomBUeP2CQPEf",
  "key7": "3i3xyhHdo4jyKRCRLgkcy4ZPNuQvu3oq53fHLgwFe11A8XiAjCgALydQYc7nhhAVUVFUdmXcVkquXxxEH4g5UkY6",
  "key8": "1kZtCcSyZLZRcW821GyKJRPogou9B8yARXkR7KuGcErhvBRF4qM13PVze6unm1f8juR4f1HUuYNGAUqztmu9t92",
  "key9": "3TbfLuREoZofUUVtRYR9P3Fq6q6Tq87A4C37cViGrp3weHArVeyHzByThJaXHJp9wMsgsKnfeFLRN4i2zNDGRS3Q",
  "key10": "2BpfUPQYUVmHzNEsymurnVyy4HBxw6Fz8p5nLxpQTFa4sR9BPz8wweVqJzeGwFVo1ScBu5Xoy2BYAQNvxN6QgQqQ",
  "key11": "4V52jGafDxSQQ1qF8DByq5eN7HmWqTioPQydLZgdGf8J4GNmv95k74xGtAgzJ4uSSJXGHXPwuqqfifiP7AQenwyk",
  "key12": "5wNtiS1h9vXv2yz6me1RdNeGtidEGGDbTYUGbn3GYbzGVFQxg8x3TfwCmMjwod9UXjPFCDbwVayhBhQzcM1bBFyu",
  "key13": "5o7c3kePZs3YZiQS4aw8SBZsWi3Wra45bF97CBmjHNCawLNHjVqDjxiqZYdEd2LgAKsMjNMbCHe1PfzbLiNrbxLS",
  "key14": "5CLxKBBgT9HidEymcXQVijyWSkCj4SLcCtMkXFZF3AMeWsMSLfEVPmqAi91fTNExQvHrpSTrt6gciMgsPDiz4jAX",
  "key15": "eF7dewKYh1Pk9u3dwWoLtzsoNAiP6ch4DQJ8mAwu28HGFmJ5b7d6HGh3JYG97nRkWFHsyKbZRPCegJR5m4L8Me5",
  "key16": "3nmEvVfWoDrcxhQ5gzCWV2wDiXzWukMfzQi7nPyAY3vDi2neNmR475ugHPFSfYEsya4o45DiRg31wEf75TKGtCW5",
  "key17": "3yMjEkCCvEoRpeACq2Qp7dqcfV5sQqsQcL7P4MESY1ATaYd1VCe4e6kXHwb67guMiezCGm899WKkXZRh3uVy1GpA",
  "key18": "4CwB4nr61JRMXYm85fa4951ArSHmf7scCiW2KLup3iUqmHx2p6RNPDjFs5xiLbGudzYALSzY5HD7xoug8Jf1tgGB",
  "key19": "5fsiaJfundMoMJWUv1pvWXNZMUG2iWmYaosj1RNM2pR6oet9hpHCEPQk5irf6Y1yVU6Js5QdgfexwrGGmDFPZb2Q",
  "key20": "3BqV5mXiZhXjJ29dz2WQP8WXcJfpxw8MY7U98aF2c3HgMY285dbAYrDBr7PNFw9G2ChjWBnVsnUomqooQH8gU9h7",
  "key21": "hCSQxE6DKNrLJuzb7GMxbJ2qCs3AXgKPW5anevFnmd11b1wiHH7DiWcSsqjJtXM1aQhchwpimwpXUUTdLyjMzBs",
  "key22": "5ZXpRCmEi4qo2GLmMFVsHohAga8FJ369ns4ZBUmg2W5eLeMZEwy2fRbkPRswtpmQqDs6Bsv5Ah3252J2SPNSG5tR",
  "key23": "4at6HAUEHS4XJ3eDXsB8Adovowc93JoXtoana5Znte3pSLqMSYiq7SLxLQmzBi2S5CfZysZjCHx82duzPoRZu24E",
  "key24": "4Ljv2VnJCdtdMfC3scbaPXgNn1j1jfE8oJU4Hjx8KeXdYyj44ZnT6LLo2NghvLcYWpZ8WkMuCJaE1kv4ZohooZJs",
  "key25": "WCKQCE32JLGvsz7CfGxtYR2WDCMRsJ1HJU148Y2NEKBkx2k1p32rnFdMgBHYXsKxLb5gPBEgrAmxw7cMRAyCjju",
  "key26": "4z2EWG6GJRmpcNA9AK3HA8xXpsKuXx2jT6SPng5KsN2vzSHz56Vqr5dCPWuSCoUk6Um6KuBJgoLj5mFVp1pefagn",
  "key27": "2XnQbuqQ6msXtA9fRjLBAkxoMNVWqJ2BmKMnp1bGz9GoR8hw2SiWKqq3Lwh2c25NWTUbsHbSiKwacmG517RAZ7HT",
  "key28": "4bpz4eeGm6Eo7e2ct93wyL4HdyQRYkDS7mKghYhHmqvrdM9C8khLpWjEGmfh7vGbyzfUgNoGfCN7QuKssZeYqayJ",
  "key29": "2pC2ZLQxvam1BTiWzGgeqpuMZd4uN5moetPtK6o6WF7BA86q7zpsU5JrVbXGZDgigjvNvf18JFJoueCAfmMqy2tP",
  "key30": "W5njWWxJHMNgzjGXYTYTSAieVntMv44c43fUSnCN71KbpwfWjpfzjfS296DBjjE5JEqQYhmGiPTsAx6g9eHCNRt",
  "key31": "4gaSwBVqQbnRR7JeD8T1GDZMu1YsoEXsWuQevSE41SW3ywLiymcrG2mtTCPqkyWYoHTnA9rF9koQZerUZyqP38zL",
  "key32": "5KWGGLBtV8NUcxXK6wSUe9QrGcT7q2MN5HvAx3TdpSxWh2jwJSnGyaSg5gLiToc6SZCmsvxA47poPbTGZ7apAf7A",
  "key33": "2MQ7Fh8WXTRc5nfWW5SL3a943WHvdLtwZXho45iyxvj5HYDaxJ2zTSYk217jLuS6d7K8njEzPZRY84DdX37zafCB",
  "key34": "2f1yKFVij88yysNGrp7UHdVSuGtMKCUPRvFhu1cRnNuEXBMnUFV7Gs5kDz29gxKQpwjnEWEg4bVQ7787PouSkQAv",
  "key35": "59SKRNDMwi4ojbL1qrumdDLuhPCmzm1ziBoyJkdUz7NeeTttdGPibkmxCunmzqyRyNMFpG9SM3UxjYPVogfhaEdJ",
  "key36": "5ZsgMGGDwLYF8hitLmWs99kPFJDr7eXuifj96t1x1FbYWa9y4DFfQoM58wL51i4qs3kH4h2YUFvnY13wepTsw3sb",
  "key37": "H6xYpd5JDEe5i2iAVnEdZhfyPuXZTqd1Dv6yHFwbz8BTd2gPiB37HdoE4RyU3woM43Fz569HsXNnJEdEMDaZeHt",
  "key38": "42JDuWU6A6smGM6SkLRA1ND2dJPiu3zzpQf8iGEkHjNNjQt7MsnatmZrHEZfdwvJTtsfgcxpF5apfRjtbdSUfc9B",
  "key39": "3SkDc3qnMan3oj7mZM3N4pWDLqU5rH6EDcQA4tLfCjyjk8Ljyy7LYnRPXty5iQKshWGfo9gpShJpMUSSA8315UmC",
  "key40": "Vc92fEPPqCgjSyvgpgDruxmPQLmjE8WFcjy2oeeq8zT8xkJKMgmTyYkqkGeYyFQBfmkKjcwNo42aYxwPGXJxuYk",
  "key41": "4wBoi2WtdCjh5k9H6P1SzKASUSVJdWSHHLFGKL4bHMmPMjubh7m9SX9U69nzq3BFy1ACDeHHYNvT5UyFsVRyWWi6",
  "key42": "aLEUnues3e8PxXe9gmermheJF61osbAAw3VKLV519sxAanR6zwHvMJPLafu68ziMgWcxpyvToCyP78nwcqckvZ3",
  "key43": "3KmYNQAgn4m7Ct5zDyA4jShFNfR7qFhdqPMRz25JpeHroW1Vrt2wqVKDRk4u22B6w6WVyabKqMxjH58Fwb71kW3a"
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
