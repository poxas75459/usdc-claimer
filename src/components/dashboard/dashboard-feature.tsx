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
    "361KzJp9zf2ddiezmHQn8Vew3FsJzywb5GbuXxNJobTRtsW4iBAGBja8bwjBZcjsbnb3LLXNw6pzttsjd9FH4WWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGw1FVuErN7sLeyikYrA3VwGcSgLPCVo24t2qmvt92yRpNLUShovieobcog4ybWxkEJEjVy8hpdp6YXLittwSET",
  "key1": "4QpnPCawNfdchTE3po88CyTvLZdtTLjngULJc8FMm2eHYYiwbQm2FmpSs5K2FhP42Q5soVECTHt9XcPPNUR3z78B",
  "key2": "3RDkpAZsrDtYfXpXca3uUwVUyBYZMhfGhvuuQPNQ1J7AoM7sfC3vMnLsH7hVK6Cxzx5cZMFjtpSDUXb1rs92irNU",
  "key3": "43AMu5o38USxY1WEWKs7H6QfEJM7MhsysoNQcvc2F81BxUCKc5GGc8QY11X33SYotBypqCnZww35jLiQaFW6nmNK",
  "key4": "3PpBe6bM1qvrcayfLN5QhzhPV31jpGFgjYT39hGu8GM4PMmhTCr1NzKktCpHWjnPodmEawpCYus5oGYYAHdQxLhJ",
  "key5": "3A664SGNLf9PHuedTUZD4xiuwoHuanCfZZQvaBQjVL4JjkDoL94gf3dq67VfB5jhFdwRtqu5r4JXqWguxULUeDAc",
  "key6": "48qBbuWmM7mg3YZU4kVz5ntHrB7rLU1tFd8jcqeEQvZjg16eehYi9FRY1nYmBgDVhYsquJZ3Hx4xuKMscJWd1mrE",
  "key7": "xCsmZxDzTUubWWm6f6FaAsDQkRni9ne2syySV2DiFoNk8be74GbGr2nzapTXn71YK9u4HcbmFy8aZJ8rJLfSeyd",
  "key8": "5HMmFmmvSpBuoB19zjotYniTNCnmpx8N1L9Pva5UGyjsi9ihT6Nrg57adx1iLCsWxjSDbCbgg1Lwp5SDpW6ztNh6",
  "key9": "63LgwNsnuo8Q1b7dzXqSnfFAy3xhdvLYnFmDoaCbSr8t8kogA9Nwr9qD1qYBrPoWunWrEZ1e2dAUb9Usxn64mJd",
  "key10": "4pbxn44XfLumJgW1Z6cn92aKTU1T1y2tvxH9KQCe1gkCCj5yarAWpvfNoNAXuq2j6KcnNY6PJimh4pTnQHMzUQpe",
  "key11": "3EePfnx2rVKi2MCncrxpEVRPaFfgZQ6aVDWZMyFmuDAXpJP5HhR5UUmZkZd7JUnsuyn6AULUMAMvYCa3rt3Rkm83",
  "key12": "4URfGAaK73L3ikjvYRMhsrHpHyUTugoxRS1AKTbUbwJZoeQNU4mUPHQddHyvNGiyo2Ep2UAjALaBkZGCeATDCxTH",
  "key13": "42ufGi563nrxgdvMF5SQx4oR6a3gbZpawQ6MzZ648ink4gnoHz5r8vkYxoTXYVuoZCRba451goFz7ejmuyJnSihj",
  "key14": "2wSGzejhgdXgM7FRKiPfkv2EVsShS6UqivaxuEruXCKP37P88D9FuLyLkcnC3L5Wy9srmFqFi1wNms7FBmhgfmSv",
  "key15": "36dgWj6grE3ZDemXEu8VKjr2LhF2AUmyCJs5Hkzz1FEe3kmfvzDuKMieDcDEMTPssNFdVWNKczNvztxh5NeT68Jf",
  "key16": "223rdMDiqav9GPHZkVmr4SmNx3iKeuMCTeeYxk9Ho8TWbVGqsPcH6Uv1JBpmBWfRZuAPA9vBRp9fXvg7XSvgrzpT",
  "key17": "2vd2RzXYU8DS5hYpbLQZ7S87KyKsif6xuwJB6hynXyyhu3GbkV3yvhpdjY69DaxUjn6aNs3NGcgLQHPyKcFJ2emk",
  "key18": "5qBGNkEnSbopbSX5Av8TzMC1rrGPxdbuyTAeszUDPaYgimgDr2uVgamiY5d7JHCsWcByZX3RbhbASf3k6R7cmrmr",
  "key19": "4dAKr2cx1ydcpNpunUThWpC9HfFHkscjTGRdc7ywKmwdyyxUMa88mgy2GrgdzccXeFby35dzWMkHm4NrYccL8M8z",
  "key20": "4cYs4iP5AaKRMGKhHJMGPR63MBZYY3iNE9TjGS1xNvpyHx16tZifDLHQ6ZdofJ7Ru1NUrPPNRXiiw2epZUhhPBuA",
  "key21": "4PS2jWJLeSnmZbBVMUiJiGsu3CjsFuqSsjpd9raAscUsC2a1PLYfB7PUQ8nfMMfCPyqsxrkJbrMB5x6r3mykyn79",
  "key22": "4LeykFWMj5mmYhfkw8B8dv1ZAGp4EsT7bnjTyCHc4H9WnJV6qkQgntvFT8ohXYsM481RMNwdkU54osUsXrakwRBc",
  "key23": "4QTRjD6gay3sKrHPnVMqcaZVYuwAdPVqfbCna9HcKGa983HY5Y7EZZnBdwx7pcrh6BCnAmaZdJbT9p5hKbHZvwDE",
  "key24": "4hyuVfiffYF779d5RitBQbNfHnztFeSefexDKTNnJFuFtV9hLS6mTXow1V5ARt8FarM5Qh7Ho9tTKaTyh75cdneo",
  "key25": "5kuYyjYgYfDpCXKbV6FM5fghQcZ2u4VjivnVhS1E8CddDrXgLisvqnoYUvNh8mduJ5zRMgJxkdzm8Z9YaX2vvZo8"
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
