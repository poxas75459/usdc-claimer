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
    "3zbiS3ewTJLxFsyCDvXmWcdFbZibGjGWJdMdPpNH1cHP71qy3GWkCPppEo5jeP6ZUUeyfSjagd4FWGQAuUHffJBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXJEwHvthhpeGy1e96U2diFvC1mw6sTYMiRART5e3jproMAjsetm1CdVb7DHT3kWkrUKb5MnKPwVuNtvuTgf3HK",
  "key1": "44zFgigVsjZ11vva7fc83kHSAqTSQs4MnZ7JbwGJQVsToBKf7C6g9v12wYyRiro2BLsjGLAc1CviuruZfF9PUXxX",
  "key2": "65eSmRZGCGyfQd8W8aWrGNdLMR5QMJ4yMnG6JQbdM5z3HyT2AeEi7GprteBCpWtaCTQS1p834i7Z9AMu8VcLSBbw",
  "key3": "Jca6eS1mCKooycb3UpyfpUR3tsnY987Dze9QQELPFsrLZg8U1Qxff18QvE45FJk6FaLLEaZGXqWYAEAPomcq5T2",
  "key4": "4MQduU4tM6SyKGbX7BVcdCer3qazKu3moeUH5R3bgbZFNYmF5RDXWDB1WDHsE7N3JdtxMwCpBEvxSTZsQFy7Wz39",
  "key5": "Fjxy1NzyT4mWg9LWYmD1bVNk6iqtjS8fr8qMAejwCs4jSCfYxHaRvK4XRu2LJkzwQHS64EcR9pzkDBSVC3ZxXCF",
  "key6": "4AKqALKye47GAnFynmd9pZntiaBSUTXbLPzyqcCetfZXKCbsqWPKkNCK6GL5vKkDa9qsD49upURy6sL5sytko6GD",
  "key7": "5HApCn7VM5bjKJbGbzRUiDNmYWFowMRf6X8NgKCycRjtXxpGuPbastxANp4EPqXggTnTbPHNSZ9Me28KR6ybCyo1",
  "key8": "MRoDP2sKUrxukdwEB758MW62tPNubcPEkHKJvjMyox6qNEbyLjebnfr1C7jvq2ExBGNdVUo5tpE9tqWjGAXLqDX",
  "key9": "4SgaEpPcar97tCttVE8tHzfR1qqjW4EDCiWxA6SgFB1q8gKBffBkccet6CSWV3x9tp3Fm7DmBfb3DJRvvgbW1tDG",
  "key10": "52PA79kT1nJLgfQ1gQU6pge3qxcCBjaXtKSiVyAPQZdie8ym4dNpJRA3tVYBMWtqUTD3qdXiBuW8uxGaN7ACpBR6",
  "key11": "5DFw324kmCKR9DfQeA2jSC8D5iDuhZAFb5CuccN6Z1BuuZXXWukdiXLzHRZNpD9HvXjyJR1Pt2wqsiZ1ksM5vkmE",
  "key12": "3MbNSGUw3oZs9u6fkoXEVJha7XqG3h7CRRWBus8XcsU7UpFx6iC4ibNrijohnDtz111MaTRd2jDsv5Z4zEGkAcQR",
  "key13": "2NHx2WC9AXMo6Yd52rXRmjWh1EsEsQo8XxhRt2T4KWEExfDD3qWVAR9k8pcNa33P8MXimqVDWRvofEXvsN77vP7B",
  "key14": "o9h6D5HPTLa1sWFcTsfRGhfVMfELEvAT6tVgRCYqrg6kLGCy98kgHDRnx53vLt8RD2zMgP8VvwSinD8S8yQbntZ",
  "key15": "57o1sQ9t5RQobRDieMmQ4rymP8C7YrbRHQ9Vaqgop7HfDyLvXjrSag2wBVbcbaop2x51NR6DmGRUsofT4kNa1GeQ",
  "key16": "WMWLWcCdt5qQqQsmy1HwhWsNTheaZgutn3mzz7jjT348Me33yb9ggfF3nR7diKaB4da2P76LUXpkuoq7mzw8meP",
  "key17": "5FUuyPWMjXYa4oRp2BfGNDT4vTCEyDkzLXrmUeAGRzQWC8SujWvp7nVFDXqXzWEUXN9tQGGCTprtN4DbLGo6NEwt",
  "key18": "2RFQ9ZFzqGPxzMwDWrr5DoHLHFLW8qCkDhwvNWo3Kz3ZSH2NWSoxVuLrX5aNCbdStWqJxUydsE1FVXbrAcfWxHPy",
  "key19": "xLW7Tnk3DB2DTsk9yugEtBtdmEqmDtbDZGp76sf3Ff231Eko5nHEFWxo16WRc9ANrPJ1LMbh8inR7Rp6CcsPHvw",
  "key20": "57yN7GUtyjMnXow8nSpCPVzUFogb951HP9QiUZo6mFWdc4D3Ahp7C9F6taWM6yWGE8sSVcjKWbCNWxisEE9CFmFj",
  "key21": "4HBKVuqiipGHzvMd74EzroZtdoRJZJjsLgVUuRkDkmFzrYtxgjdmYxjtKd7VW36QNNav3KdPmgSmezVMvFxmBDbT",
  "key22": "4uHG5gSfnrj6XUG3U3QYdAiqhbWvjUGSKpy8c8NadFMnZp7tpTXuXGxrcLKT8rfQ3k9d8F6CHdHCHjQbzTP8WZjc",
  "key23": "5hmQKK5UgCBhJ4SbMXjRidtnEa1xSoUoEQZ5Q33tebvBB9eyHAWZb5TWQaogEsKSQ3tudiVA7YqJZErAJ5mvFyhX",
  "key24": "daR86H5Mv1Sbamauc4ydxZgRb3LfbLJyGBAGwKYEbs7ccMrzFS3i2tN2rDHcUsE3AxywQuKGAH23cXrQQ5MdaWo",
  "key25": "31fAUF8Ji4BBJkTBCSiZ4ddWgeoU8ZSfgcNipVFwvE8KUA2vjerM2RGkR6z2nBKYGAfHskzKKgJLUmquLufxuwN1",
  "key26": "xjeWzBpv6wp14wNqiHfigGvQpHEDb4wqdn2UH17is4rNdn9xr3Udh2gfw3NJRc8PHxfHikH5pK8kWfEBKf46sQ5",
  "key27": "F7DyADVydFmXN5wpbVN9ghoKU4DsgGWdv9ffnqxjHv1oKktLVhpZP91kaKEi3KeFz3C2vhMGMgKR75sWCYSZmL7",
  "key28": "5rX7eBk4wiq2ShbDf84g6a45q9HFTryswW6XWjYSt81VCwTnRhZHuT5pVrVxpeQxhNDj6tmWzPvkVASqhb61bpbf",
  "key29": "ZpqNXMTC2D9akbZPx9BLo9qECgGjs4RXs9hsKyXGqn7aGKa4n2pGLM6qdrugcjzay3ori2vQ7NmzZ7J27iPxL6b",
  "key30": "4n8KwWDh7YswyRb83qBckRBVq8KzRqKgo6VtWT6Lp7guyx1hBd9BMHWAdohz1quwFsUPD2a57XjtusecVgGHzFeS",
  "key31": "3gazEG5zT8brxvUPnZyoQiTd5Ut2cU9gEhG9yzW46Jq2csRRcXR4cdkuDn9HjVfjMivTYW449xAf5BPoxLTy4fQj",
  "key32": "FeNqiCCxMeLfC5y7ec34MnptcJ4EU87ZECGSSMtqfyumq5MU8WMjLXivhX9WjP48vA2RK8bG7o5VkY5CUXcHpd7",
  "key33": "XPya76UQ75DFPZLa4gg4evshZunc7u3a2PfxXL6nSFQBV8G1qvDiLjXuS7Ami67mzfwewc1U4dfFCB69VhFxev3",
  "key34": "3XEgNS2wg9g8tk4RaBHVhNdoG1fUA9iGYmgYSKmJKn3c7N1WypmWex3DL2C2pFojfdZgbhnYHcb1Ev5BjjXFdEZJ",
  "key35": "59gdDoAetXwzJw7EPtJ38yCcY5C59HFdZ2M3DB5uYU6F1Tqp2nbNCjsoN8rBbXrLsoygzFzkgGLhKYXhTTbRnWNG",
  "key36": "61YJZD8XiSQFHogabatHwPQV3JeG1fKAdgxEAyMRyN2Ks47amEEbtyt9L7cUY3A1XbmtBGnaej6R4gbmz4kPiuA5",
  "key37": "N2pafQ8zTZfxSTEyMiVgMg3mUPD2VgquHaREZCAs7kDRJCo3j8sSUU9ZVBmPvzwfQ5paCJiYj5AxvPyxKsQWPn8",
  "key38": "gi6ZrTBPqmLwz59EBCwiB2ySViamAZwUQmFQfknTtC2X2Xjce4Coqis8MPmrnq5BHif1pAFViMy1eSf997AaxgT"
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
