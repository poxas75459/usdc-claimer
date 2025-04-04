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
    "4c4AEmQxgfG2UAAqSCtCJxKnZBeNiez7kb9MTXc5kDcsxwtNoC481htgZRyqoPr7zmo1r34a2D5K7H9wMUorxxbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DnXxKHDiNbuF1TUZ3d2jiGbcxmqv3xwLhwW4tjYwC4gKahJM2VTLQDm1cBSmUuM12dXV2Wmbm55jk7n1xMaDPr",
  "key1": "m7r412qWKhyPsmz1kMTVrkd9VhCET9FeqDoi1sPsYBffDesD7wTraKp84BujC2fYCamvH7oH3sox9Ekqj7rRWb9",
  "key2": "5GPREimns3EyzoYmyWRp71jx5Zv87rmtRYZsGMNrbbWmPWLvb76VivXHDX6Aw7asJwbJoH8RTV8S4L5zuuyXPTMz",
  "key3": "4nQCgiuGChrCh1eT4MJ4hJNWNXHuF3MNaBifogmroGTY4ntbwoxhjNUtWr9okUxtL8j9CgFZ8Dzq9oLDTQftc6Fs",
  "key4": "3q5jzqkRCd8WTm6UePJGPkbkZuYjjN4pTRuBaGcsS71ioY3Pm2Bham572ccsR5oxVfAY4rz3enSWdzCpSg9SwGsh",
  "key5": "327vyKevF6um3m6fLXqa4jR9avvwqACBoaiooa8PsdFsn11KcjJSNuMtCkGPeG3RXgkAQpkHdF66nEfsDpSKp9H3",
  "key6": "573vHrkxjRhAm7pfnxPnGyspZ5ZVJXhZ29yrZ2Z9nVZjSxxv37LEVbhyd2Dade4nLb4y6ioPvxNZmDxa7teV5Gjv",
  "key7": "4BP7BAjW5jm7Gc5Lo7kGzeFTnBM2CNe3jwUcT86RNyJXfZzBGLDro8QzhvBA7S1e5R5AKfvuEZWeFpG9d8RYjmGu",
  "key8": "3DoeKwZjPrzoXyA1CPizxUBmFt6V28ast4ksw2u6qrfxv8cs9q6cYS9gXt9S3dcW6ZFqAwVW9UxjUajijbCqZ5Sb",
  "key9": "oKzJ3DYm5zTpsGRMVgyAKgK8A9PknogfKhrauCyT4NcgAcpmXyeyozAWQ3HJ7Lgye9frmJNX1vgmn5c8m9WERgb",
  "key10": "47XpgxrZ3mYiD1jEXvKBVm4RLWQ13SjAPfHkTVLKxgsBFCq9BFYnLoi3smt8WfArX6Zy7XWk5K2NYBsYDvrVrxud",
  "key11": "4yPCAVdq9ZHmYKdrVovqqAo2oArkGcPrWufYRgTPtNGo4tmfYTqRN5ZDprXdPm5H3bjpNWU5s9Gz4QeSDSGzdYCJ",
  "key12": "3jrmuyKQLYJYxtKCf3E54WRTVcyVLXQAtUEnhSEj1dA8QPumugCtPAPYHu7dEYDPribz2yVhxk3e3aytSkkkumZX",
  "key13": "2qgPXXYLvyEus8ZM6PFmZavzPtysXo7G4pRwSueaNC43EDDA3MT3PV982q3nmurkinSefNLrFyUp6S7i8FMjnG84",
  "key14": "4Wjk4JmwySFNJYWZ4ndftneXBMyfdL4TVGhD3qM7JZJskQCbXyMZGgqPBi79LjngM92MoihwaYzeGJKSxdMfw5bb",
  "key15": "5AzJ5xBRJghQmsLT5CLYmxM5DubSPhijLVMuR693n9m6j9x3WtbGWv5Kh3ZGj4FwaDY7GLuBqaU48fLMu7sc2yG7",
  "key16": "s9BasT6vBet8wGwrzzb5kCjeoMSsB3RmBEBnbLr8TAgRsizCZmsogHBWJMUTEdjMD9TopRzA7ifvRY8FN3TCKxY",
  "key17": "48FqKhKWcEoT4xjtTkn1Krq6MQGD8CorT77GMQUjnHN1cC97cZo1Uf7CB3ytuiNC2n5sV6ELVoDPLqAh9d1HBiWd",
  "key18": "2NYYjgBWCEfHHZGWshRhAh77VKtoGrmde5X3cuBJoKXyehkahu3ajn6Cf3FEj6VC45nXb2APjMyP1JT1etbDsdJg",
  "key19": "g2UrxmQLHaDdnzWHcSq52BCTVENxfwtguUR6sYXXwahUZuPhXEF5xj3NC8QKir1rgs2qLrk6z32WHqV116M1Qk1",
  "key20": "4PK1iVKrWJArMSMkQao1WuiBFn5XP64SGG5Np1pUh1FFVdeLiC9HtC3bkCMswcRtxZi77GAVuEwxU8RmvFWoFSPJ",
  "key21": "5rkVLspMoKNvBYDfkeZvsLUmS1cpQufgyGaVQ6u8pDSb1Fd8c9hu9nMUXp9k9WKQeFTETwkaJJSfVLpvkB2GsB6M",
  "key22": "5egQjMKmjiNUX7eM1QcF1DpPiaU9QPTBwceB1jsVKx9oHheDtzDyETQ4WihTB2rudsRKjZyoBZVLAVGyTUUHbSo7",
  "key23": "3F2JpfS58fnmRbTCLGYxj8yJmmBK3EfnBxnCNXsodoJQ8ddViAdUdt3bpqFgFK5opBote6ZkHFB2mMi8YfsJjNqa",
  "key24": "2nTaLCLPJSe7VD7ANzGyVgsGNx3gJAuVcuYhiFdVokVZeVXN56JsxFywmcSHJ8FMSXwDSrM6WugBUBtD94tGWxsB",
  "key25": "njTnxDq5VVftKGt1MF7FRqJTZcZXZ8pmWdew9qUwPnEQ9mMCgBcT942Hs6qyhjCxQZ4urVt6xzyex8XXDCU29gL",
  "key26": "2QH1tCi6DtdpQuXmtcM3Fx7ERyuZ4CkYQGmKLMz46y6QB48Xv9Cp6DCh2h1jhutrVyrA74Skgm9E55ha2gcZkMMs",
  "key27": "Hko1SjezxoUBxg4ccYfJz94V4RCDPsAL46iPzSkuo7iwVayuurgAJfQAMbThQxZ3W9Z2yyUaHQ1CsDFcnoWNUsR",
  "key28": "5WbcmPj7eKT6k1ASV8xSwcAKPMjtzsCKz62FKf9QUHYmXrwgZgdyYjNRWisptn2ffyVoXfTL2di7if8oihBTCRWE",
  "key29": "57QcXLed7KHhBuUqi8t6TCgu4GCeJGAhvnfhv2gMiq8sUGYTAuxb9nTmG4uSa2h7uNbbM2XEHAypc2qmQvVoPouq",
  "key30": "3aCuQhnD2s9yokZkCictncsMGYbezWFjwyGyGQVCQdDrxzYNpama8F9AmcciKKBpaWoi5Xnv55Qvbgbe38MKshpY",
  "key31": "2nMsyZVZxpBdjRUAPWVjfaBbYaEvXLjt1qNqk58GghW6n9yHngpF76wnHQFhMYjRNHd6c1fKXNaivssZRRTtxLQz",
  "key32": "5aV8EzpSvKXbXovoxTYAiUmsYHHoNGwS6s8rPcobyFCUS4xuh2tDuyn71MfLeGY8uNjpTQ6z9d4VWw64rMUWzqhq",
  "key33": "31jSLMrmDHwywWFJ29vvv8eheM2M6krg8zZKML2T6TKxyt2Jvzij4H9YqUDZDNVMJFVfJ8EfBgp263R8RJ72fcuZ",
  "key34": "5sHW1TUHDe3r5X4GLuUodtjMDWEcvWdHVNJHiQC3Y1pTssPLCzpRJ5YfUcEpxiVnBXQBvMbtbPVsTHGEtJWnLuFp",
  "key35": "3xWMx6H5yd5bhyJmbhKRy2WTn6YopZcmULtSnsrGrpTpEZ1hiDAmxUE6hKKgN1K5WMzoRHdrrHqKogsv2XHhTMWS",
  "key36": "4DfbejxUDGf16NgdvjtqpMbiByZ2DUV1hZNVyyqgZ491Us7phfrfiMrRa7KbnmNMCKzCTAfeuvmwLwVUm2oMov6J",
  "key37": "6U7SKVRdbgZQzPitpNP5FyrY15WK6j9C14K7k5jEbJ5Y494EGBRqES74vC1kCtDqwxf65ytkxxQK9qxf8baiPmX",
  "key38": "2P316gqSrMvsReFFKPi4qYzCjnzgD9GGaKyhVPuQfmsHSUDvptcrDs5pNSKKcSztGLQw2HRQRjvsJkS4PAv6G9GU",
  "key39": "5mKxQKYxgivFUpSByjqSstiRa9UC3oMSWNv1k8dVtwkx9n36t8Qyz8uAjAaeoXzBo3yXiwZghPKXN3ZxLGHfzGt",
  "key40": "R6vBiTEeTfumpoYoFzgSjmzRhgbjqP7jMy8mv1k69kskNn1kEZoUUHK3hC6LwRmu12vMkxfbN5NNhJPodpbaiFd",
  "key41": "37iEGhWXxAVGK3Yb8P1gWM7hyawYfuNEjwdAnZfoujMaufLvnKY2dic2xcebhkBiMXMTxePnp4SM8xEfUySNa1gX",
  "key42": "2Etw4qvpTKZyobYkUB68ysysz6w6GhSpHu7FkyGw4mxqTPH8HTokF3jYkchN9Q8T6zHjbs9wMPbSiBRfzga4bdFR",
  "key43": "5yakkuGnafLXbu857nrcs6xxZuA3UVTDSsbo8mQLnqz6xuPsKgh6Cgr3c9GT7rYnZeBhCs6qQik21md5FQA6abBk",
  "key44": "5iMZm498kN2fvw6ES5WUWZn4bCNcDM5R4sCpNYhUgAjF3fQzpYPULxbWma42Xi2ABFXPf9DCcfNJVqH8Zmmv3kBW",
  "key45": "3XWCRQ9EowJcGBSCwkTo19RDzxjWhM1Rgwf6XXX8tvtZb8khfHBYhgssaQXdU1Wvww1yjnZCnR7LcDYgYpJB2SJi",
  "key46": "4FDa2yRSSofPBPe5ZZ7K2y9RFMVmb72VmPN9UjRgxY9f76a2FefF14zdrTtCFrTTNnPH77LcPhVafGHEi5UwZ6Tg",
  "key47": "49eEj4xMzb2PJT2mp8nZyxhpQMFgQZSGVn5qLx5Tndxoj5j9axwCazLnrWXUu2xXw4enTeX2FgFQc3LdTxqe2axw",
  "key48": "3HN12uws1ZZH9AXJqBqcdJZhrS79FHPcXPDes8cRPr6BB4cj8Hz598P1JPKqFTCYvAvEvBYSkUDbR6rCefgaGFe4"
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
