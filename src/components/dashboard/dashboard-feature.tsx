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
    "J4Ekuy8uYsyhy5fx6UVCFgyJzqMLJ7vnpZFkZk7bJdqh1Q6qfcCaYv2DMtxQoacXbYPM7AKB1ahS6kYbDoi5prW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKQ56oy3mmVbULFASf5vu8xexQHJgMLsczhiYCCKizyBqgVTTjBvoismzt9jVGhXcAx5yzQXXfGGLKLQtri3iA3",
  "key1": "5PBbMJNSJFyU6W7BW8yLHLHhBTAQ9f9c7xj5sNesrRGpyieHfoyV9LEJQCov4BMuvSd5wbLctUQXCTmNyed42wcc",
  "key2": "58VBi3EFWrya5i5WsLi7W6hWaPnKdxGJiHEceThxX59r6JgKzkngyhYbWv7UkiBRcjPT6eQhEDKhPeJkMpvMGN37",
  "key3": "Lc1daMMmHNNJcCnn3ka1danNhrovWE6x4pi4N4rnkaVS5o4d7Be9SkpCtGXEs8cqR8ybEtrJpB4LobGCseCqYAp",
  "key4": "4RaW539EMcFgbJ3xgpAoxu3q2nFvDqpig6fuPgExQFWC74oTkPV7P2AdmAHgfHUYwGNRVs1vRV55pQnRhjszxbQq",
  "key5": "4QhvhaBUy2XPfHMEEVZgwyRy5rSUCHd6UoJqvHGh2uxLfQ48VnEjgMCiFZRgyKD67VoyNCaXRBHeqtPn8hZau8SA",
  "key6": "37DjWu7K96WyJSbRYsprBNLWpQDuQifxjfSV5doGsQynAGHs9UiaUUMMmDP2gVdjt68bGrA4Kn3x6HtkRTdXe5j2",
  "key7": "3uu1k92r6b2fq4C7dkCVYmFdkaTd6gAXJU5HzKUryW66t232W1hKFH52XpGS6GFLPB3JCHEgD65cSLwb64XhDs6G",
  "key8": "2mxL4r2TTuZFGMgZTENnCno98C36uPNsU8NV7x5DLAd3Dpm4fr7mTWLXvxEFNA7Yyh2uzKdqvHQFv4FR3vzLMXHC",
  "key9": "37wjp2giF1NaGnktHe4zMcrnqzLdakZpXhxiXVFWZq7UnKSDS5WfDfiJgfJYPbyNDGLd8PYLjuyvrTr3DQqrWCe4",
  "key10": "LideyDJFiFPnbyi1DQxEDnLgKRCzzNrDPKZNBQE9bJfjSRhWeeiG7o5Wpx6uK7oPVdicVCTbk85DLKfdvNMVVNz",
  "key11": "5yu9XbkDCWVqJc4zGP1F3KKty2VtB2nnE4xhMNkXQpMn8n3kh2garLVAo3GRbEFAevaYF6tZ6wsWF98z2rYMQVe4",
  "key12": "2mF1BDP9cU15b8JneCAS35uRTxYFawKSrUNv9PE9Qp8QFyJbAz6kWc95gYvVgs95WCncZv9u6WkvhTdBzzN2Re4P",
  "key13": "1Mqapb8Fcik6JoAmzdtmyLzpuzSUkzmPdw9VbubYoHWbiQKMacS2mDipu1JFfyWf7zXvJ5okX1uu4zMKZAgvy91",
  "key14": "2xwmz6wpqRSZiGiqWjSpxgdzL62oUAYkMvR9ztyHRmrJ8vGYikYD6vDNNYupsAvRb4r791PFV4y2jKn4s1hpEebk",
  "key15": "4pdMKhhsc9LYbmPt4b5dEpf4FanQmgP7unaLX3ZDHUBAH9AoTgDbzsRd4QwmYGhYmVqMdQqyXQnDnzCsGALJBW8Q",
  "key16": "2W7B2gTMbtFWPA2UhWo8YpyqvfZCbqgCFhicdtx2JoJzPrTW3vpBpcEayAp4ouVDi52YrKt11eJwoMM1VNamMYcn",
  "key17": "4VfHNibhiANeBFcJdUkYJEebbmhN16BvffBPZTMhNtD6pMWJyoJ2s3kRNsZB824qJPS1U6S5ZZqU8w6gMHzaTU3n",
  "key18": "9UAen8oH4VwCav9KELo7jLK5iQx4QT3QDwvkcPVYs4kDFjU248HnNSQ5NeonJNKGhJxjDKY1eYBiaygkJLRNKN4",
  "key19": "2nat4y1vPPJmS4LdgegWE771VRaZpt356omUWtyfgNmAop3NCYVLxZf3AJTrECc2Z4Qmrvxb8vqshFFSyoxFi8jR",
  "key20": "4zujho43hgBeCJcsucy46hceTZVvxAVKYHcUPWUsVNt3zHgMvdbjvB1SnEk2PNDVRPUC2ECPzr4DgESa5ohyC2f9",
  "key21": "4P3MxiZAsCC7Fc3bFQDbxefpa4J3yiGAXj7ZdUtvPubkniigxKgM2kcYenNfAChXzsVh8jyjLYEjStZM7M4Sxwni",
  "key22": "4n2FBxFGdobZK7DeRyycY69S2nfeg2mcKPXu6NyGQjjmpz3GDBi9KT5UUmPDLTp8CcQ1zhrzWfLJA8Uk3T8YrfrZ",
  "key23": "2cGURokq2syHLB46UtTTfySKM43aph5H82wk94dXyooCj9A8vVWEKtcRKq1rY2Hr5yFifUWx5ehyWikKuDN1fTrC",
  "key24": "aMbfssiGLyW6w4jfE5SwdXdy12qL3g3Yp46EpKWAJA7hCtWUFq6fqwtxUmE8qaMHvxEdrr1QkCctBm2SpgLRhTM",
  "key25": "659dSd51CvRLrvcjMJdcPEFHP9MxfULCUxbtKvbveCUeZJ2vn2ULD8u7yXFDVuAEtUvWYt6S17EW9ssAoa3DKoRJ",
  "key26": "4kFah9QLf6o2paaTMN6iKSBLBYGcykU4ujYihKexwTfzmXf9XoRsc8tafH5X4K8x32D22PAxTuXM3AeR2Wpjrb7E",
  "key27": "3qLd5WEBxaZH5cafexVCknmUbr1tYBseJczeuL8Pb2EBw1Y6oDLT1LMJqMazQj5nAV57iRiGWumKRCcfnEthoqqL",
  "key28": "vDmpZqVYJU81FBGFdo23dP3A8GFMSkrNZnGBVxc822EWZ66nWnh9v3xPQoY6vLdnsutTpPez5jWHxb9JCT1aAxx",
  "key29": "2QTfj7ogLPv4LjcfCkAKndcwj2bmtq1dfjNVur1tSPqoqegwsLq8mH1vdBiUCVxbzozWQkoqLBK6pN4LjDfvkLvx",
  "key30": "2Xxt6i1hb3MLeZAdiWrpWBBwUEeaRwBJcac6fPniSXNKh2e9uM6YcSUypwJTrGHpYBE1srzvXtcZtHDPpW2ssWKw",
  "key31": "oEXhXWeMjPkh7V8d9Q8JMBrAZqviuDKpZtiW5EKyx1DpVfWyq91e7fjEjuUrrF7vW7b6aBVDNbUbNmDE1G8WzQB"
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
