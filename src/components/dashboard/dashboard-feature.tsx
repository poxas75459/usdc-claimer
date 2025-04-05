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
    "27C1V4sjhsHiv56rLb4zaWUpKTUtfFWCd6KtXrFPfQTifsAhsDVeu6JZAV7TWwg8QQBjkN5D23k8xzHkn1bYU5ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mJb7tvXkcXt2PHnQPJJ4vkA9xAjK6jTkx3c8uiPMJEeQtJaVqrdQxAsnWmpGzhKJh4VvDxx1gTr39azFSrx2dz",
  "key1": "4XK9fsNHKnYTRQojpXYyj5ZSWXrLH5sR53vdxauGAP9rBKZiZWdaHP28sTvoaoYYPdXwgiFNxB9gVfwmqoet6EPR",
  "key2": "2HgYzSGPE5D8F3dUtm2Uy7MCFV38beDAE4qSp6zUHsby8ijRY8ef7ptEe1PoM3oLCR5yHMLUyMLpjuvoDVcxEnP6",
  "key3": "32VU8wQ1U7Nh3Cta3LwtJb4YF51V6Ras2DiXcQVfDgHH6U4kBXQtGugMJ4vp8F1SmCVwZ5L9AQQJHS9anH4wJChL",
  "key4": "cLgMcufD7YBJ8BBmDcs26MnZE2CEq9QMC1ggZmCgXaCnoN8VEs2FCwDNmNnmn9x6XBarLmwA3YwrVcM8ngMosMo",
  "key5": "4dGqY2vWitUsH8jKPWtsPTmV2Yhhu4Z7FdNxb9D1826BqGQg3g92iPhC8Ezc3gAeGtPS4pWpUqGLgUqcPERd83ew",
  "key6": "2smCTx2S4v378r7Hs5rvSC53Ye31H7eCXjja6DbBXCRvryTK43A6zwuQ7tBrCNsHar2ZY9yeTaUKP8GetqZbRhx3",
  "key7": "3PmoYjitZeyhVFMFwpEPUuKRaAF1V4oEkcSef9rkZQ6JM1BaDirHTEvWCJuLoQK3wQUhUammUcgPB4xhy9du1Z3z",
  "key8": "2iYFJ2RJpA9rWkPs684QMFYrP5Y6cpmAiw1AhSJsh1i17PW5eToT1nG6hGReadsrDEABhStCy5TacZuPJubXsXtb",
  "key9": "2js4yb4Tig1tjCyhWPgUiAHiJd7JEynGwEuBpoPQQ663DrvuoS4QL7tbijgXaNSHvc83hUQrVNT1WrXfJ3HHDH6W",
  "key10": "6kfUAsjFRaSydQkfdwwYeHT9qbynjj8Mbkn4cMSNBEVUYSSuAPq9SRV6bAydFjhhza41unw7GfohYQXqrHwyUfP",
  "key11": "4xnW3NifShfCGWLxbLw37qDGNtTB8APDP2G4LF9V7SQtbv3LFSuSjrdTidQRMvrzMw4FPMgc7MzizaecVNgL7cHK",
  "key12": "58DGN53NVHQZFcUV6KKYRbKKQ9WVMy8M47WCEL8NmNH8E2KzuHjXz38dnqFr8XBrTYjgWu9nnTr4aoyVpz1Tudh1",
  "key13": "51SrK9wsGojHbdSfbsBbKcVGSnF7LwtjbtSZmRxojaciUdnq9a5WYiou8bsE7axmBWmWmeQ8vE1FssFgvpJEPuYz",
  "key14": "264xrJSx6qgbt8q9zMoS7sSLVsxYKBxjjoZHZCKSDnhg6L8HhaJu3nrK4XYGin624m3jVUGN1UWm6uo8g6fRPHkb",
  "key15": "fAovVtDnMuga32pJWfkqM9qNRKSKcSLFAbxLx69XK58Ax8JvBkY8MyauQZ2tfW2TLb58JomPoi2rcYXVdFyYGEH",
  "key16": "53HggP6wXLLUVo9RXL8RSeU8ynwXVuEBtfWK48qSufms3wcLMbPWascUnXhgGT7oPp7pY78XzWCwCdVxWHQmmKZE",
  "key17": "3wwCmiyXa5RaXq4nimMYrtYWsEwWi5zPaHL728tBeoRDF7FPN9GQuqLknf3FQE46csmYG63Booz9DQAkR9hjdphv",
  "key18": "3w5y4Fz3G5zFNagMaaEoGrNs29PRtAUs1YJPuzWHovJUuYGPj7t5H9BteHh2ZSY7ynVZ6HUgd7gUbRCyeqYweZ4u",
  "key19": "48mHr8GMRrtrHNHDbvZqRUKTnegediLFWdpQZifxjpKkYjaTxbmLfAFbPbaUzxNYCXLP4Cn4WfVnDSAVMj6D2kaB",
  "key20": "4tVwA2KRhdXGVSe2Sdokeg4wrm3FVPwZHQeFyVFDbjy7ATnuTtXFdq7Qn6jiao4eWwyznoeJHvbWbRmeTSrSEtnT",
  "key21": "6XkyXBLYLnb9c2vR5T1hprNK8nQKroWYW1h358vWrjiFjdEkkG6oZa9KdZs9T4jSdKeqQdr62Pb2pEJUU58fjKz",
  "key22": "rdpHwjsRDHAzVWHJcv813hAAyXzsT9wW9rd73VcxseKAfLU9QvgtBKoQhZ2qiJp4a3XvVgeQCLD4nhUc1LSbmAP",
  "key23": "4zFJW9UuN51CkSpCTzWjhP4ybhcvz6AgAKAmGs2dBd6CG5TeDrhXJpCEfdvzHrsXmcaM8gQUS577ESJKZYUYeBze",
  "key24": "3YXFasA24G7JRgAe9m1Tu2NKC3qKawM2Ceyq7cEqGhxGMCxeNckvZNnmC7hgb84w1LTQfRtrgom8RASHh4mgMPSn",
  "key25": "21K7qYGgmkF26VNiSegHNxmALcMGqe4wjdGC7SJrSDyvGwuXnsL9VxJJydu2GasNjW2HNSpSCD51SZSRGrZoXwqm",
  "key26": "ZM2gVtvCnhC9Gp7mmjSUQ5Gf5XdbhJeCFPEhD9u7HHyxtzH91uEXv4BTNfPpuausgZ57Z5HvK3tjrTn9cp6vUZP",
  "key27": "y2sLceo6ZXKRyzVBTY7NZuhcsu7bNih69dK1mQkSAiTeADViUEteKmXsqu5RDs3hcpEgEuDM8b4XPhqAx22HPc9",
  "key28": "5rambjUaUzy7KYbYFLVk7inPgbTJX8mjRxWjJBgziXJjxbrr5D5SBUqBmyHWRTUr2Lp1TyTbaByiCkGhk79j6f5v",
  "key29": "sAHQFwBPPggJSgxM9nzc2t7jpd32aVFBbdnsqs9171UYsS426swR8LjSaDyDfVAVnwVJeMCp2faksHyXryt1Z4t",
  "key30": "56yesHV4RRhetkKnf8E87buQPyWesaBQgGqC9jk9EUZoPuSJwYYKpvnZUbXuEV8VPP3sqWJAUkav6g6HsEQJdEHq"
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
