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
    "D5cJT1ggUvRKf4gNx99QJ7XULjapuf23X4tC3aSRErvhVN4dpJ89BQPTvxZ2RHsGJ3xyYQM7RCFsEHFnA7e99Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbshpkqJr57pbyJjRnms3ohawDpQbuFRpjLm1RfwV6o7zBBLGzjjCagw4k9UvEF1AVccPhbMJ3STpXCmXA6nht6",
  "key1": "3UjR7hUedL2vxHPEYMkq4M5e3CnaFXQ1vigSuvNmeKrB4VevYBy92sB3c2BpUQZM71kpBLTH5MaMAXTnT93VCAvt",
  "key2": "39Y62swXgxdhFqXswuoVHx2CjSnL2SFNoPp61MYxShnRaX4CTbQ2HKerqXnP6UYttFK49GXRULMULZS8i6GCefiW",
  "key3": "5vGZDfE8hTsG5kffmk83KNqnkcbwwtLLmP3sdbPTVsdR1cRPWJAn5dQJwEA7i9TZrKZjTKSS1HRh26b3ZsiB2sEB",
  "key4": "62ayXhkWkvrDuxaf3b5U8LXmSNUE9npmHPfdRQbjyFPAonydLpvzDsBVqoQuH62n6tzajaWDSts2kht3xafrHgaP",
  "key5": "3WBz3hcN5QJDa6Nk6nbDuMgtNyLHGvyncfTXj2vrjyhTSWLKrQbEYW3DJ1P6ufBuzvRGg2atVhqnVUy19Cd33cpV",
  "key6": "sQDLkWDb5NxvCtsxR1kThFSKsi5vReKvR8YW4wFAu26sLM7KQmXghKsrtAFZFHAndFuuN2GGR5i4FqBGNQLwnBK",
  "key7": "2KSdc2YWdF3EL3G45gF4yqNWYHmRTSURmWA5hyQoVmNMcFk6sgFf1hWHnnyNMa3iWcNpBgHABBWWa3dSKX7wcqJc",
  "key8": "4WvVFNrjybvE3MWyBdEbhhMoHBq8gqHLGrf7n7ikYzwmhtwh6sZARF9bHFMU91UF9uQniCcfQcdx29EPMgSpeT9J",
  "key9": "jzeZLwmz75xaYHYsMBAgUjpHb59sD54iHAw28wrQAhDfTzMFdiPavaMzNMkaKNqAwTSWvxXryPSYAso2wWYxAVd",
  "key10": "2D4eQDGMts5HtAjCGAWZcRNeY9SL4GGREQG17cKoQG6CRktfvUYNPcE8PS4HD1e6TH8z69qFF6QQ9qwLBfCyf9Ze",
  "key11": "3Ms376jd5eo9BZbm4GzB8c9HD4pqVFbw1R9yH38gTFH4kM5FsfZ15diV3ZDr1TRXd5FNLh6TU2MiEcmAFa93Ps11",
  "key12": "2wXM916x1xCUCrDCUgfLG8jtWQc2MS6XFjGYJrQa3KTvyRHL6v7RK3NQSvJjQQZPx1tJyKxjtVyDi5GxRbwNd868",
  "key13": "3igkh8YZiwfaJeGXbkSDBwY7RZhEybUtEkj4arbDFSU4UshXusR2WJn2f1MLWViWd9MuEryWMP9mceaF1xBRNymq",
  "key14": "3PbdLKYyK3umLCunCzikYu41LNaqsZseCihuVfyv7qkC6ECrapyNeDMDrFWi8bUZHr2PYfdWAkDg622D5HmtN5ar",
  "key15": "2MYR2HwsvhPU8cMNzM6zTmm1qp2jrhoGF5ApafQfqwgUYw54Y3XMVMtFDuoTouvnXT73c4SePBAwd6sGkJguswjk",
  "key16": "2M4XNSNqnbTstVHVribdVmPqjQ699noPfcesyZfaas6SUdRREPBwMxYYE5j4Utap3UoHuNKfhNuXcDY1RkY2FPbJ",
  "key17": "3uETy1Fuf6kyf1UcgfAnHmpdBVh2oeG9jWF7RvgJGgK6ymv4WVnzNvZq4WXeVsvUdcZ38fizdPY2LX1wCwqCFvWZ",
  "key18": "2fMfXzoA9MR6ohijCVX5bnh9xnAYAXUVMu84Xwhe62sKnPCpxUxGZdZoGDPfcWgnNfrirqDG33umh3kVr9Siasuw",
  "key19": "3LjvGEY57sF4jSgui9uYnvkxBgQVZd9c5uCJwxrJLCcr49y26H7EvdfAdRoviqmG9cR2iLcCYe7TPmH7fhdcE3hZ",
  "key20": "62PdYvYFB1tEa5jqRjQVWW9T3EEthoXy3Bsi7XMkJMNGa8JrKgrHoXDnSYgkUzVQZYk1kHa9k5avdgJcz6uLSaMz",
  "key21": "3hEPdxzG8quXZwnn9uNC24T32RFSP2CXuxktre4ykz8PEQjN4sbaATXg3AgBkGTboaFVftQ4bsL1AFmtCaYXCfp7",
  "key22": "s5jsKuD26n3NefeJ8TmTRFpMeZKQcCx742AWq5JqA7PzybtBCdvBe28KpY8bA8L43m5zzN6DT5cVNLuwR2VA2K3",
  "key23": "61WWBABT4HmyrVZsQ8Lg29MHMps1bG7f4p7VpCkDh631xpn1CHuUw1JthdV4BNZri6K8hvaFLbU1e15YMgnW5ikJ",
  "key24": "3XEhyA1Fh8pEkuEoB65n7heyKH3Dk36sYF2tmNwfDjv3B2WoAcrzWLorxKsutN4Y1XnUUEqfZmQdWruniiRBVFD",
  "key25": "N1z9Gz46atBMJ74WVc3q8hVyLzE6CaoXYV88wSYDXc7nGtaVfpBXLDLciypcHRGaHeejVt5czSBAkzq36HkijNF",
  "key26": "38kvMcoy6yTvEd8gCRqQ1t27gFP46e2iY3FAHUp5PupmfazcWXfrHtFZPTnNQPVGExzhz8ypJbyURysg9AzXLZpQ",
  "key27": "3Fo3SsCugSJYhk4FRrCNDY8fhrHMgDVc27a4whsbciYyky2VTLZEZbmDCqbSbEp1TGtuujiLFZAYXwLm4Psvum5b",
  "key28": "3bz5BzxLbmnmMkkAACRvLsnfkSNU6yj6nmCXBdsZdXg8WBvnWfyRVuHARcpSjJnN83gYZtC8GpFvTRyBx2c9FkTe",
  "key29": "Mr8vf71EyZxV9Yr3RXjE3MPgxdHtE34KM7sUAGpHBfC8iVFfWpz6KQ5yYcowughauXZV3wLciiWyKqHu3iTbgCN",
  "key30": "3FVRjTCuYAiDUeymE8mE9iDspewTkXnbKFReAnULpSzxYXVEkYowtgPASgyvxRSDxDbCt5eGWt8D8xVFVpcLPAV2",
  "key31": "5t4NEpDv3F7si1LVMfXJc1b1PA7DWuFvDafxqY4vg8U5VWqmK5g8TV2GLBPBXnnx3os8o8QzEmW6n7qXJYH6VLqU",
  "key32": "44J52HPmS5NhCDdaaQQ76k7HgPUfZ2yZihwrDHuy3Jjg5hUtg5ppMNrHFvZMt1UDDQCTBPfPopyn3RwZFioM5rPb",
  "key33": "WgGqgUbdsRMzEMFFrqGXQdXaZ454VMJ7QpscDK7NEJguUy6zU5jvyRCBfQvekPeaJZ23YqYiMNeicXDsd8wvVx9",
  "key34": "122nwGuHBfDgnUDzwxjXp39enqzTHHEm6pqDR1R1pFwQgSMg4F85yNTS177cMoBBhG2ML6fW4bfQdYhqnNzbR45S",
  "key35": "5Yz5UiNmRmimbYXuwAJJBL6HtknwfiYT8yKHSgX8pmuycFfHGPys6tAV5gSM5RZgMc7tokmAeH32jfuwqcfQ3atf",
  "key36": "5V6EBYCD9g5W6Bro1229mvP8mzA3detym6UKzcn1eqyMYAgCjRH6TrRT9pwazTJ2JF2LRwHshM8gDMSZ99QJXcYU",
  "key37": "5h55UdxjGJ8iy7VCC6fbejwSWm6c7jniAk7nboEXH53oMJuqTzYTFau4WQqeDpgiM6sQ3tgh9uhateWLgVPW1jkg",
  "key38": "3JKja4BKMoB3M7xjZ8NWzz1WHC3bsW7Xp622hD8CS5PbawBxS8stxQCVeMbufRsDfVzg3BV14EhCgyAuLBXSXYgg",
  "key39": "3z4h75pDKXRKuZFay6SD3nwBRCJ1AgeDq2ihVp8QbAaCX7KeV8LEGQ1mmmVDZ54Mar27hanUGS5FhkVgE2pfGVzt",
  "key40": "4GKa1pBM4h6WPptGbEnsv2BFpycKLkcWcKXSWnrePFERty11gd6zJhG7savAUG6eEwmFjMW4rWLwzQ57Pri7wVek",
  "key41": "35365gk3fgU1PGQwhcLxG1NwwH8wSyXKLSUtnjRbM2TxYv4cVYtxP91yruyQ1Cdw1GjRRrErRm1U1ps1oN4JkKhw",
  "key42": "2Fk6kgS8kTRAjMmatajJCUbFUwqY8nucKy7gS6mGdNxgPt9dvpMhrXD4jSrGfCV76Ds6DZKYYAQGLXYkwbmsyh9t",
  "key43": "DsGJpS1VHHh52anecjzfKHy9XRMuo8zFjzNwFQcVoPbSCumy4HRo5x6zQt3WTRumbNZTjc9RcSXNj53Q3Cfj3jL",
  "key44": "2fzE5yqwyF95ZCnZRu6GxoWrxyMuNFPJTzsGCZengncb5oAk1p9PmonKnZNiqz6sgYpepsZBB3QYkiRuBqTT1mTz"
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
