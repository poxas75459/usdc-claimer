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
    "5gHgYQ2Rgw5HPtBp2WanbR2c5j4YjeidprEPGBBVbhFPULrM4wBJt1FLkzqeg5ZNaDDc7VGnX11eTwqZCYMR7yVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJLvJrRcSJZqtnuomUNnzdV8Uf1HZv1DS8yRm2oDzJNYc9TgiysNui4C2d8KXm7LMwctHTspSpgMp44Gbmvs9Bh",
  "key1": "42VbQn3QZrnnRGZRfVJ7cgmbPrinL9wubfvJBMRdVLwNFfCNERUPaXvRnPCWQjso8PyHCD5ucD33LvgRR7UpYZV3",
  "key2": "5oPNQvkZmnH4XbN3KZQy7SCaZqQiEDLckaoJktijbor5hsaBghTVmR1TNHugnVYrKyCrCqx1T8tGvkuYXNkirndf",
  "key3": "2rBv1ga64Zk6ELPeZ1wMmu6kMuFSb78oW8NffUEkVwmkb5xWGvCqys4aV1EbFkm64BUKUGBFy4Gp6cSpfj3nKctM",
  "key4": "2SAVKoKH1XENtjQueDN7ejYunq164fhSz6VgLfKBhRL4dkSB9YkViQBKuBJhDZhcSxLR7CmVBKFrst5bcedVDKrZ",
  "key5": "8ArQ4pacbH89KY689obF2dpanqtfRzYfxbBGw8qtZRJRh331EyyGJGXPKhcNqevtBR5YTg1y1WXvtYdiNMnCgY2",
  "key6": "5FRDXhSL4TUWhvgf3Uhm4Um25dpQqwBLw4cuig4YCHjMQfJFPNKMV4qffsbGcbWmE8YLhGG3TSP3ikC4EA4GqHov",
  "key7": "4TTGs2HiqxbhARmWTtaxHEZ6veDAKRWwRvsAQoJH9zHC5F71s95K8xhCwiRAGRybLwLypaopmJzhBBFHN9AG8ppn",
  "key8": "5rfhFog2hwhJctGhvwvj3Rt5iVBsAeJPfgfYp5s5LPaPVWHmA5KKFxMroYGiVm4yaUsJQLBHqHxS2HcMoZ2yi489",
  "key9": "2HExyE9XB4u26d6auMAtpnPjnqcfAXFhPJ2CVoxt1n4aJK67DKV42n6BJoAwfRZ4x3S42efqisj1m7gicRYBg8RJ",
  "key10": "5RQTRYK3XarXoYXzVp1xnyK7K2SZXFZKinNetGubBoXKyfkr5fdtS1vCLDB2sDoBUmJCJmgY98sFmuFcSDeJmdEF",
  "key11": "TpKZxG8BEG4iVL6miGTsna8XGoocetBsYZqcfxfecHbgTF5DTcF5Bh5Q1krj1FyTNfBLj1HCGorpajNHfMcTDUw",
  "key12": "srtfqutokjSZJzunLxQtaKrorVEVDKA9Kq4jRhBqYA8wSKY28zo8R7zi896YnD1UVEYrGpRFhNHevsyMMnrmfGZ",
  "key13": "28bQmyA2P6wj1PNgExg8gPdKoWH1axTdjnGkhUyHpTU8LvcHhkSw7GKLByLfLhcBtUjyEKG11HuVyLTq7uhVDueK",
  "key14": "3PqadDU9AmFqRMWbKH3F24xPDrGPnE5FgwUHtB3HVQgPozAHYQPHTePPqSbVCBLW22JJB75PLpivECoYNHLVKTY7",
  "key15": "5tXW9jEMNQjPqTdGnmDKKr9ibF7MhPEqPLFViceDGiyrmxvLYh4UhfwFHt3y5FqKgUPHzKVDAyCTJDq1tKN97rzL",
  "key16": "2JmCKwKkfpgy4X1rWdfWxKUuKFycyY4Ycx7LnS3FnVh4fQrCAktDApxmQDbHtHuCFK3VhYvyy8E8FHj8azGv8SJE",
  "key17": "2i4sMjkFdqbqziLBUUGtLhjrWRMZhEkNzPa2DhRdgVEdWcZmoYkWZEM7zbS4T5vFc9RVy8JgxyqNTywrEjHMBHCr",
  "key18": "h4XefVKVtqMY7LfH6NdFFFFx6pyXxGSpCzJjqs36oSchdeAuRGtxtTFudNGnCVr9ssMHCuWq37MkuXU4hBsxKkG",
  "key19": "3NP9gg5v5z5Zekpt6DgHNfoxxUZdPV1kuWeBDH8LAh9sSAdNzcA7HvTZdh8pGFTAvskJcgNouP9bJxFjWXafzKqJ",
  "key20": "3MU689Rq82Zn4xkhYwdqkMto58urnhYLiotU3ot6kCDnxiqBkY4bmTm2AsJA7N5MgM6QSsGzSpAPFyxq4Y5SiZVc",
  "key21": "2AzbRZRiQGdSi4BurHyrRpAPvzBv7UEQwLKxZQGc5H9iqrfqWtEeKEuxBqBYFvGAuU47CGy8T5szBGuSwUmwD97X",
  "key22": "PYyigcjE5fDSAbqEXrVSBKn4z96ZdHV8h4UaPx9hqyBgh4QCMjtdNoiWVgHZHbtS1fiBpdMDomDWJo4apSubhiK",
  "key23": "MMFrUyybDnvYFS6Y6ZXHM7esdPhtaRgAybyULsxHMutWoDZeyf4PkdiJ7XNAKPW2QwgZ3SQ65sG8KfapFQLWKuZ",
  "key24": "2RJgWhtUpLUq3KGmBN17azFEjPDUtv7mRwsDpYyGXJdXUwv4aJX7zt3AKZJksbZemDVc1F1smd456TPjfRjzVVKE",
  "key25": "4gh2sGM3Y5wobZRgpiK1iKwqrBGVeoZcJzi65v1njL9SGwXLYf2ZsTR4jUYUrvrFyxnLZEimqJReQUmPMvc4KaD9",
  "key26": "5mBRp3SuPtccYN5PSpEidA1GP8bLK8K7tmTNStm1WoRwCjg7L7Mk4tPKz1Ut4DuNWqZrJZMyM9ZwcZtB7aQUvYri",
  "key27": "4HUsbaVitC3VvwbSjiyGCN2PTksyE9m9F4raxWthULDmf6fj3XTE3DAbcNwWXRieMqqKYAcy4dJ2wPhhPcc1N5zQ",
  "key28": "5En4wATRsBk6cF1iEWYET6Aa1Apx6z6umsGDApVoFwkQUvwWZZfL4A6qDZcmrnE83wfd7pjKd4BMbCfHNqDUU9L5",
  "key29": "31pdjo4v8d1JSJobEXr18pC3HZdX9GHN6WXPajZ8qR4umKwJnuzP7VatkdqXerivQ1weSQHURV86RinuiDKPbthy",
  "key30": "4UEVDgrg7Ro4xvzbETfiEdZdfWRuyXeZK9xqS3SBu7LbkveXqD6y85fQFXAFRBSECvy2K1Ytk6N6qysn4YZBhZHr",
  "key31": "3oEPTBpK1mYgMsYJTFirQJCj7kTX9K2JqxVakJAvipYMpEgVwQtEzWamKBvFDS8s1m5WjpsrwHAGrpPMRrgWqNYb",
  "key32": "5D7N2y8JfZERSwsdkDqV1FfCrqhqf6zJJBL1kKmgu1XpXvUD4vbL8Wxtm4S3k9RKmEgaioJZykq2p6i1GQPTSrnt",
  "key33": "5rKFeTLSxmYpXRVd7GG5VqB2jiWZ4NqwZt1AXxb6njDqN7ee2wxrG5gAHCjQw68pRohJJQPVaxkWhzHZjQaXLoNH",
  "key34": "4DeucfKyWqf9ZnWuBnHUXq1PWARJNKUSzRczEMsu8gFiZqsq5NfUnLDgPrBN4S7oktPtRLUXopkdsCcmzdAWeCJQ",
  "key35": "2VQbEv1VgFvABtsjFvUU6wLTmkxDRdQmTQovV9v9aHQQdLBnxuMdcc1CgUmNTQTCXeyaqEj5TU4ePQYRRrUakVsz",
  "key36": "5pfYgJQXJuBix7r76NvUAuPfdMRjUCGvHV2RfMvo9nHgEPrdQsMrc386Qv1D7htiJt31pNzksNVvYNYSpdKDb5Kn",
  "key37": "5FdgVsv9PKCCdSPt5dtuef59973StrQyikt7pfUgtNhCEaK8P46gFHdazb9GgKPo9SHT6gBqxQojarhrzZV8UERA",
  "key38": "XGE9hz1zxYe58K3c6ABf7MgiZS3ENCxmcxDs4YnwuPmtB8L4WP6DiZep9Ak2dMDB7SXDSZpQtFrBGe3rLvMvJLN"
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
