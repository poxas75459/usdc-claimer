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
    "3FXM9z4HTWadJSD2j5QQNUmjB8p3P4axNVMVyguAsVcsCcJUT7V3z9khkjq2UmVGwg8MMTwMFVQvMGgsMLdtebjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnD3RQAc11dfU76QmAkRvfUeYDvF8izw46tse71MRVyeea8qAaViDdq8v7RnTN8sU89VQf5wP4t3fwvqN1Lyjw5",
  "key1": "3b2DT8dA6S7gUr1yS3uccjK5p9UtHBSsdTMGnrpmS8xmU4rWjvkCyGV8vUnWdFVBVnpDw8Fdkhv2198WuK5HYhY7",
  "key2": "518sWuFqgfnZYiHiWYsvvikJ4tdN13UayC6Jd3PzsetGZ4qNi1ue8g1KT9VJmg1oLyFCTUWZg6apUrPgKNtuXakU",
  "key3": "39gAoC35TWiSDPiEGpyupFBGqpZdA575fXcektvqjthPjjeCcWj8n21FSerMuyLBh9usDyNEqNBeVcTGDz24me6L",
  "key4": "5hdD1n9axuuE2nAZLcdinhzc1vnKyntn73cwgXAnSKqi8K1vc6guTTWRZ62XHwFBbBvtJWkZtmqwJYbVvnnqF6Vu",
  "key5": "3qiUDpQWgEUjoDLfVnbwgUMcREqJgUb4cy13GyoGnuBbm1hN534v5Znwjcg5XAjabyjhFBZfU8BJYkE96n65V3Ki",
  "key6": "2J9Upscp5z4NJAHYWvgY3US1oZo72RYmQXFG4NsPJySYMQM548SJhwSMjNqSaWx73gxCN71uhVnmWyoBwbskkmYG",
  "key7": "41jbpUbfDKotnkhma5k7nCzLDK77FmRF1Y9uGeD2uZDb9rKAZKkQNccsp5NS4cjmAWtDcXkq2YRG6fkibR575o5M",
  "key8": "3sXVhrjDo5RYRNfjAFfh2QDmdhEun9mmj8TNoGi2PdjG9jrK1c68crjeWqciYPrwFrF8sggLMG3DPFGw2sZQxDaJ",
  "key9": "5GEXx82VgFBSS1Nyb9ZPQo85itosxEBbMqGuAWxptWh7zr32dSYKNKwAT3DPhiMDDayBCtSEnq6EJcxsjEYkU2Lw",
  "key10": "rjX3nDBLYvhrQmhH6ygFSvKjVqBj4gRZxu9PZmf9Awq6mDXAh2jDsRDVtkcUWKfNEZnKsVEWrme9JXjgz8iKJwL",
  "key11": "3T3fVg98Cw1e5qJfaYE6FtfzCVRaM1eU3MGxEaP9gLwMued3wj5uakBVuXRRXmCNHqKAP5jc3796Kko1zThcmdU3",
  "key12": "Uh3dnnEzqVaa2RSgiHyggqxh2v35oPnTktBUscDjSZTCVtmqhdTqrXFyTjTyj9JWA9yLrzKFn1vwfR7gmB9cw3g",
  "key13": "3BMgW5ez7Rs6zNU3k3bVo2CpJoi3fEVW6gSDmwWvAZnxNz48FrR1DxYPVoi5ifXbr6HZC7Ey5F3uaBKkeLGR4kEo",
  "key14": "5vz1vwgaGvCZJS1FxoEyw8uw4hW8iQ9iBrxVnaAwkoirNc3oGcEGckdzMFy1mDrB4kxtoEnATEpvRuJP7D2E3hYC",
  "key15": "3gmKT4MxPhMeyQVgqsD2sx3pjQTepmQNmbFbrS6ZGufHrQdfATU2mayNR32PQnnMVEErEJKMdX277gWGjC3FX7m1",
  "key16": "4yNhcoj8EkVGN9NAzGnMauBQeJNLrEnPFFUqAiWQc4gbyKs9x7fEEM5fGfPuLxZqzqSFrMQA2JJ5LSPnS6D4BbMz",
  "key17": "ZW2aJMyCWRhMD1EUCjuFvL4VR93dCttJeamk7pqcN7rn5zjWt2mXXdgTZvryJ26fNr1ZV71cYi2MRS2uKGKXvEs",
  "key18": "67nsajbTJqPYrNCJ2YLx3hjDPpVuCBKG8XXe1ikiDXTYaVccEN6KahBDjdhUE6m3DZYy8dZnKgMMZAfT5z47Xjn2",
  "key19": "5ARuC1rutxBoux1HHBRct9BZi87shoJ5jZAsgdAPKApQVH38hYiiCLFQoZxh2c4nauYYPMGsi9AvHBGejiMxFMa9",
  "key20": "5vPdhtFHQCbQKgoN6Q9PRd8tyadfM6mcDMZyU8A7mrTwpCMYR21oZih8JA5PEtCGhCRdswaafYyeap4HETFbQLUF",
  "key21": "2sLQ8jMrfbbG8WSzVvRFrdiKb1CFoDLT5T8n7QbsQs4RpF9MQxztfBHzwmfDEjmnMiWdv1DPUyTuCwvbpJonNtXq",
  "key22": "3JaRg4ajdUt8oz441ZJSocMtu23yXqSo5pVDnkJgr5XDz9UHV5pGLFCH6UN3pUUwvRCaRa2DVmcLwTodUTveAUds",
  "key23": "2yjUsosmUS6wXHTZ8qtYnRbTjWdojmAnDvYm6fo1jWf8HDvA9WHUhP3v5iMPGjoutSAR3BU6hdydh1bm9YRc9Vm4",
  "key24": "3c8oxsrjjiWGkKT1hcEbyAAa3HDd3MJQRTbCuaS81aXmVq6gN1367mUCQRjXs3gfpwQVwF4WjWTQx5xipFo53c5d",
  "key25": "3AgBBhQ3BEWAv8ZoEAV6NtiFioUSQjoJwYwXWB9t12FFocGTFa4oayzRytFcppixYoZEwhFe33UiRt57P8sxR9EW",
  "key26": "2idVCXEnJHESawruqk8j32WedNPB4berZ1Kb3MQPizYVcha6Wyea3bEioTYNsRSuKt6grC5vYDg8icnsAKT6KcPK"
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
