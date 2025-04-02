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
    "2PJbra6bgr81gfWncgn53P7QWv9PQ45ZRVbVE9Yt4D22tG5NqLxU9uJMWWPGPr1rRNAB2w2g3WcprLz68BFoxj3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUDbjeCMJVauybuZdKUbPMaofqJa58HBJctdBJAGAv1ARFa56Mt7cLngpugs451Ljezg2iKFgSrSu4vNLgcCz4v",
  "key1": "52TC8pLaRNTXLnprW6LBdpAZhNpQtuGWv9UTiPExPn8ENCDv22fBckNzMPtsFNgjAKqhMFz9BErgTxgfEeH51FBT",
  "key2": "3xHK2VUZ4fSgBpwApUV9UB4jxStWAzzJqLBeVRcvbd2rLR8uPFeNNThVzn8upgpgMhFkTXuEE5ApLfHrMWqCBG3Q",
  "key3": "61H1w2fBEKWfCAmXJCMyKTxygyKpZDfFpTvCjudkhSSY4rLsxreQSyxmpCgwzcewg3iegF4GZUuKyHwSxEpCAtuD",
  "key4": "3jTVZhPHFjwVmL4ZPcxCJxyUrCRTpZosnyPq4iQDEQSRMzyMToa9f7JtHL9VLah3JjaywWLDic2oUyz83eN28vyq",
  "key5": "SrabNXUAcro7X3bpyWikdsjWNRNDoCDrcX4nWobkeFYJhPAQrbJnnjDckd8pXU58PXxp3KCBjKbMu1K2roLm6mw",
  "key6": "2vQCRaxj4pjUEbdyJTrJ6QG9kJqMsJYz4qRvLSunWYSfShuvCr1UMbwZ8zrQcocmVCfYy3NdMQCfD9QosMiotvoE",
  "key7": "4L6dnqqBixs2WdQfps8ybCCT3iAPK9eyCCcXuTpBqvtBSD9aYaV3BGw1kozPqp9U5SkaKpQonDr3bmPizDzXQLaM",
  "key8": "5WK25VHdGbSHkwPjwHjit5NCeFTTVkWXFXP6iW8yRN4KrfKctbZH3UsNXmp7QJyiBzutnp9dey6ByrNfKNdaFiCt",
  "key9": "5vx1EPThpzj1UqmxPgyW3kDSYfsSg6u8MSMfaMGKj1CJV8DTC19pHS9PaB77dZdXPZ9zV6e55fF1w9cThv5QPLZU",
  "key10": "5yFg8Wc4TyvC2VQPr6XWFKxQvEBK1wb5Z9WpWiUfvay59XAhZoiRMFtYxMPRBZCCt4XugKTwEfdr3hpejxAKHH7S",
  "key11": "39xZsXm2vMC27k5yuX6iM7AHm4YqFzgjhXnUDUYMG9kTcBsYM5wcSEYZSM1w1udCYdTmJX2t3BG8eT3EifXvuZbK",
  "key12": "27E1GJvsHc8nQqN311YYHrudA4tsUU6P2ffJZEVvwsxXQ3qztCjHEgck4vHCELEeGxcd7XMcGhKZPMNrfEQZFDD9",
  "key13": "5uMJWfdgYSUhJgX6saAnGD2ey9i2gqJYXP3BE3TygFykzrrY37frPvti2QQH4XYhPNGCFjp692d5TJJfAZR7ZXFa",
  "key14": "L8P4zu4jHhNnVeRHYkdZh24iHPZ9bM65RsoXmETh23BDuoN5c9FSH3JAsiR6ZTPU7zUEKQAJMig1mWwBjHvjtEw",
  "key15": "5UUbYr3iUGXHs1MCG6HC6Ur9koo2jKc4RoH9whKq8XMCpv4TJF2JRqzYKFRFfBSN1c9sbzeT9LMvtXzLF9MPNFdw",
  "key16": "45Xtw2FBEAddmBX8iyntQi1VR8tmcNxEjk8dVyhQSWQ4LHT1NCCq6fCptLaGehvFVGwyWqaqyzwWeb6BhGSGms5D",
  "key17": "PEHNvpLw2bxt5V2cLYXk2NZuMLgJDvJKM6rP8zhQkGzcRzZjSPqdvUweeLJDho6kffetad9UWWREA1apMShTQcB",
  "key18": "2YciHkeeTL5hPyVjEFyS2efTptRZS56qY2m5Fssy5DDdn7pjq1H4X14KZ2a7McqfHnvZTe2NAwnZiWA6j2oCqoZD",
  "key19": "eHm7khXxTKt5txub1P5P3GLDS2xH3qnyk8754bzsz4UTyeghToAmRYtTtBfCcRekHJx7todWC18fSn8qQxTVytk",
  "key20": "2aeu42tts7nocgebswGAh8LudD5HGuyP89SQZNZzsxdzgAFhiDsBhsX2ssWNtrC1XMAios7urQdNsGzeQbKcyARV",
  "key21": "YCVyLgxKEJ5SNJuyJcTffgAWcRs5uTCRmTEomTnJv3WdfLCH3P175PRo5tfYft7ttgpY7gGCgiv585ZKNX4kdWE",
  "key22": "i9iNWMFnv5TXtz4b1SauUBcNnrgUbEye1Mndgx3SZR3iFuCfBSf1DuxGuuWiYSRM6ftzipwvkMGRKHn5HT5ioFD",
  "key23": "4h83E3ane8Fqpc3F5eVfTFqD1Yq56uoaxgDjBGB9JS9vXEx8RvLqBVJmszeWRfa7DNF5U3RmVGXwJzt8iaSpTgnc",
  "key24": "5qHyXUWfKKbyV4VAr3SPbE6aj6wUtZzP1haoRHWEJnDVCYgvw5f42x4ju25Y9QnDFngE4CTvA2XKVGL6fZ7Gu8aR",
  "key25": "3z3UMDvYsHnyt5oth4Da2gcEpbYzpZtgona9WGXCNENf4ZzoCVGZEhZEdePpF83k4Z2PhgAV8DKGnXyDAX8WwFEq",
  "key26": "2WdEdDP6GLZ9ttHNjBErxvCMefo2JqFA88SdTQsqkCDSjuDNrvAKxRQtFYgdCx4Cm5nDwgvdfcQ1RHF5x6uTxCR",
  "key27": "28omfRm6JCpcjuUjN8vwrg2qNR9SQTasdCTspzmtACEZhXnohQuvpMPHeZgVCkYYn3AJVfnDzFpWR5qWwBooAjjp"
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
