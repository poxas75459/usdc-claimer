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
    "jyKBXhcaqYDjPSbgzwsQHLqWFE7R4cpRcGQKY9J9YTUNf6HoF4d1NcLaVdRE4tQzgTryJhZ8XrpiSKERuFMJM4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KMpwdKv2bxvdDec8NDqoxa63AANehhvngshJafcHx5kBoTFKWWRTbgC2oX7zYpmeTWMgMSuyDvf23AKau8ijx1",
  "key1": "4ogwQby5Q6BVdFgrgzyqFzKFNXPuSc1we5XhzggNhNTsbr8AKqsos9Mv8nANDUA7dMoZWB3xmFK23VuyiJXjm5et",
  "key2": "z92WXfxJCJEjiiDtjt3F6CRmavAFZs4M7ytBZZtxPRAFsdKZTgFHtz6NFf8FVetaitYZvWbjjib5UqEy5zfUTRT",
  "key3": "2KUKPurKEoihPYWgVF4RAU7KjcUpiprh8T29kb5Tk69tNHygh2s3isfvQrqNy9DRWS3GCRioue3BGPjiX5y19JPp",
  "key4": "3WwcNj3WSUXYfyuDjJtaSUr2MhAEDGdCEu3usfsXC4cbMWm4oSjCMvn8mm4nypyEsA3wguMKcf23QKAspVhEVvG7",
  "key5": "ryuPUqnyGCXyk4BoxKRsTKjfs1PnYXccpnJZA2MozSKENpeQQr96heHzU96fQM3bRWvfvXyAQ4aoV1kGGVGu2wc",
  "key6": "2KRBQoePjtUzTkc6g5EvNmVHRZuuExJeieK2kNDTopnrgnH1nifG8HabGjfr6hLqphtXvnP1XUEdQhfekMNMX887",
  "key7": "3iGW6UbQ9Nek5ixGgmYywouxoHzmncBqDWouRvbn7M69breHzp2rRYwSZPgjJWg3LJr52MKuWQ5iYMvQzDxj5rHP",
  "key8": "2MorHbWxWkcntFMg5YcpKHCaGhvrkvSaySmX3nJFP2ueZ2rP3nqEpZickXzj8UknAkAneEAdg7fEPBnCq9Pk5T2u",
  "key9": "CV6mXTLJWnJbWrUt7SdiM9he9Y4fhCYDoUnuR8kKv6vD7UvUFR8VcG9BZ9RyM5hxFfHnSi18GQaCKxsDk2rXjsw",
  "key10": "5MesM2hW5JN8atDXC4HbCrky6VHDGfEEtJLYiztFVJoTNSUqtErJETBNVVEvEGiRCfXDhpTtKR3GLkZcjQ9UE5kk",
  "key11": "uMNroMG5ESsJjg4j56EcX6Y3ovByZqvr9tUHHHH34fKwZ6PfvK7rF2bS7uJscUUvo8nfsQtHnuRfZ12vJtmoBSv",
  "key12": "WmxnAh83JtSfhW5ErEYy8VDvrWzE6oFsZGMdRBddnT2dQRYxb87Gpv6rwG7ZmEmryfBFsMsni7jWmzMuyZhWJev",
  "key13": "TtheuStbE7en6VtM9D5VCqM7HNKfgRHYj5LgeGptt3ZW4pJH5wed9tMA5vBCmGR1JbvDcEnrJ6RHLKfT4ryr7Mk",
  "key14": "28nBXHH9i29E8mJjpZqQXd2mNe324QWebUNJCRhPsFTWCaGuucgpxczwLQhxoA9Xiw4qLybZJE7UxcZ7JrFb9ZrM",
  "key15": "3Uvtiya2hwtM51ZQGTtGzgwDwWFGAkTayXwSAkmnrHdPqZfmDC3uYQ3EwuWyCvfY7vsiHQWNFKeLrPGJQp3NAtoN",
  "key16": "4WVVepzwDqhGkfERgkagZiENS4Y5tmbcej9Cn5dqcMeUFcBKqWvRQ7s1mkHsqAqqxY3eKVHpAYJxoRWqX9f8BTj6",
  "key17": "Hs6FQRGAEu4odyGGhemPmFcNdNoXREMVnqW1LSESFxznS6LJg4vqH7ZjKRUWy1TMhwXnGJ99hzqhtZNGarSSi69",
  "key18": "2ZDwpxGU5Y3ScA2bA7uQf9sDd6DSdqVaACXmx5fNvdm9rqhzZBjd9r3gRouNpM9YCUp6w9NmKRj2Rkwx5SQjwNAH",
  "key19": "5yWpfpEbKFv7F7HXwoxcSqmAxk82enUfXbNhC72RWw3rMCvQYGZEvttuuukHxQjAzooXf3QH3ybCYJZEXbTW42UK",
  "key20": "3SCZGdGGyLsDdpBdLJLrm2vUE8wv8cKbTzbxV2fjALNtEd48YAbWBWp3aaPJWzXqvdk9zgx6xfjnnxng5khbW1t2",
  "key21": "5jaPTwRh5Z7xwapqtVNxxHuzjgw1SEdc9xPRCogzYPtiBU41fs8RoPJccxeqTaSZJaNeh48kcdJKvtyznQ6ZH6R6",
  "key22": "hWniRMRPn3MecpMDRWdQDC5tJ24Mr4U1t7fUyZzscC9cxnhDCtMgMmJbVbxuzU95rS8ncNspLBfURBjkWFvSHth",
  "key23": "2unaudhptLnDCbFKHGbg7uC2XzTUjocjTP9ppeHfKtKResTquRe4KDxDNa8ESCQBGVXwkEo2SyMW9MEA16ZAzhaL",
  "key24": "2CuaacFckj6Ui8FYsBAU4KYF2Dg2KwjyecEZMZnyizeUkzF7YRkaRHMfp61drvHvmvAoSx85thdbDdVCMDus6WWX",
  "key25": "3Lr14VrkMpyRxfUqKWANGBFXMsATfkYMpKUXe3DyABu5CoZD1cfkWeBmYkM2Qwggq2MTN8aT1Th2ie8rpkcVtbfj",
  "key26": "4JLRieDJDX4GGG4f2e3pYMQu95nx8neeKWe42o9MkP9mXLF48SSYm5CSbhvEcdkEJEvazhKPGri5KyJQeCmi5jA5",
  "key27": "5HjKppda9P6T8P6d3pMTYUQSWvV8ksBZpffF7LHMwdePKMAQG8XYJWCYpN5dXiisgyx4RdZ7EEBAdYtQB2adkerh",
  "key28": "UZ86c3toRhzYE26TBy12DF9bBS32s66TGkP4z5n9cKDhpU6oJF3p4WRdY58zofC6yBDczhifUcgytPhPanTECqa",
  "key29": "5oViSirCMaRvue4vEbxPPvxQWyQSG9MgnXbh4CsXLraQuPrdLjwtPFiHo3hTfdrQxEoqH5DGZDGrLCTE8K1erAYj",
  "key30": "2rusyQcLSrdcByj7VipAjW1rc3SCy8LtixHmniVUrYXLB15N5XHfEMPLUmaGRSKqJ2qGsoiyXoo1gktgzQZhxUE6",
  "key31": "3U2QEZbNp2zmzMRcjrE2RbviSCJTSALq7pmVXFH9nQqRNJYbM1hBaQoRDkF3MAkZffQF8ArWRvvoKUvfCCB27NMK",
  "key32": "56BwmDhCSSUtCnYUGLM9H2LZ1782akYoFew1raA8fLunoXEojd9WDg27a3hTrdr8zybu5n2ya3Hexkh7s6RxJVLK",
  "key33": "236r5MUNKHooR7wP4windhZSx6F5MwRUumSvTFyNs5UhWskcPePUvPPysv8dcmf3eQd3rqcvoiamJanzRNQ2R5Wx",
  "key34": "5sLddScqxdmeqJvLLmkjVWJ4q7zMQb8sFdkMKYKLo1q5YtSXoPQtRyHvMXpW8i6qiVPRxJhvfXY44yrESRYhX6C1",
  "key35": "3X6HNX5ZErpgEof1yhWft6Hoi4Ab7BRN4dwPHEy1B2ufUtvtQG92yD3rUYfvEV3JmWLhtCfSeKwEiFekVVMkYk22",
  "key36": "61Q3UH5CY9sTcudQPXooAdfRP5F4S2fxXcZMkYeFLNgUHENmp31sx2VhE2vPLrBC5nWUspaKLcTYFCjApHGaixg1",
  "key37": "3vfY6Xvo1gvyEhYdw7U8jXsJVP9dvGvYmhYgQ58JptAwM5s4xNQDir96FpoypnQTN1vx3JrswZLYLZTxzf9LREcG",
  "key38": "4m4gTs51bqTa7EcFQ3pFx2EPHGLzasriDYrbhEGYawaoQRKKvATRDUcQR5og7qmeeuyVNFkmtk7VxadRur5qG6Ya",
  "key39": "3b5U4tBq3ua9CqQjzeVvkjV5pdSsG8KzshbdH8jECePZ3SqEDgc7t4rEenNZvxk2sVZHKFChyHZsexiSo3WAZt9B",
  "key40": "47WAqEmXcm6i8J8cKQkj9sXTjLSpAk5niEjCGVi9rU2kpAwSdXc2o6rJMViJJBzSVBDznoU4jEfxder8KLTmhGpU",
  "key41": "42FLQ1PxFCyN15fKffFXpWTfkXsjz9ePyvNmEbjfoxSmCXZttgeTiPDa6bekxB6nTiX8wpVYQLFgaA5SG7ins3mk",
  "key42": "3bebzt2zR7haky7tUnoAmZqDLpWug6EDZDk7dX6WCfpztD7pQ391kdtuKQWvrJjY1pwvGzJGpDV6fZj6KinAX9x7",
  "key43": "2TbKnfuKCg4VxFMpCYiGVjyRtyeSo5rb5tRk9KJDW2u9tffoaZkXTrKUPXevTTPQu3Z6n3d9wjyEin17jPxuXj7S"
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
