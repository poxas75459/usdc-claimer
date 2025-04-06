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
    "2s2mWBu6N8auRzAfng8hx3NbM6E8EMcxhFgVSmqBE8q8aV8HHxPzxtPtCtWke8TCntitftCh5GXduNGh9F9pCSyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXtftjVnXyB8EZbJoWRmX6k6V6p5ZLvFaov2e2Yhb91G8BTi663xahREvTgmTkuZbpu8YkdT5YEzBJpuAZj8734",
  "key1": "5Zb7aH3M6CaKUfuwynDgT6vqYxbS69CNV8KGLernidmKVfB9vPbRtJzCXmgDXvjyK19MGWwZTCYTNd9dRpJ2MwUi",
  "key2": "5q4hVUbKpsSKnUqXg6KAjmQpQtJUmdRbR3w7VfMk964WZ7AocmrRwqEjUPbqfvJvyab2y15Gc2mnobjnYq7wFTDF",
  "key3": "26iPWA5A4zkQh4MiEHCkufCFttmFDaaEcZpBCWH6XpXEKTigYkf9KiK1CmMFc6Zm2wH27ZoGanDshy59xTyA3g8h",
  "key4": "3KG2GL8o45di22jMRBvsBeJix9bAMBWZW2ymgdQafpqFpGTiQ9NBaKg4DyiJAxuf6EPkyLPtFaGvEgA4pw5Jrs5v",
  "key5": "5sEjf4DWXrXpQen3sv87mLhCG1myYoQnaALeeThJuJH9fYvhrFQPEXDWzTqXXMsJw5obCt11DC8cDkkFiXvHFidv",
  "key6": "5xMSj4MEQHLSXatURntLTnL1ex3mSDG89rwuzm2iVbsjXa1GWS2CvhVH5U2RKNtfgohmz72Te9nDbffbKKg7vXUY",
  "key7": "5J6HsnVyDcgPSgwvui7thXawA7b3cFPSTDfLc6FhhRi7t9eaAvm4Etyk3uY4bU3kKWvZ69EdjgcdHJyAcJ9LJzUs",
  "key8": "4Phk51kMs3N1yrgZqkJis4swx93g7HyvP7Pu5735YPX6ftwUcPmfkc97W4LSxAT7w2tA3w3S21MgUif3eAQj5TMt",
  "key9": "5zU9d7i3jw4YUaPkwVqrXXfCfGvKKKrrbuf3zUYPpmUaCX2q3qwQxTk9oFW7L4FGL5VpEBcStpe4cK6dy3FVTSeu",
  "key10": "3N94WT3MqN3A9ucM5BddDuzeSA8usDteF1KZ2PYyCFRGiXRha9ySCscLTuJrJxK8MwY6ZhALQqyCDMATEgGT7sBF",
  "key11": "L7CTmLEPt91Td6Fu4Y7cTjyB6HZcW3LSrdmpwWJcmmmvLKs5JQcoaJmWwkhUQQFxWALDkagFwWXuUFDWZpiwvYw",
  "key12": "3nKCYmD6suTGKUCTpJYK1dhRv6dYktGzFSQ1JSobXtdU9iYKJrjeNg6NH5hmCjXjg8N8VbBsqw6as68Jt4LpBrWj",
  "key13": "267wadLiDbn9VzowHozxUmMqkPCStZ8LNDFa4QcaRsYG9qf2uXMxdSfkF5ayBSyCDRhmFqXcKs4pSf92PwiDC6qk",
  "key14": "4XaQbME55PgxYPkb9oqaXeykFJmXVNpPhqiGSitELYXBotT1uCHzaHveD4UY2bLp3yuuqsxgfucRULgUtZZHFNsk",
  "key15": "4pZ55NgkXwbhEn8zXb62fvHgAuXSJYvFtJhqn8WfuzWUhUBKu3gfF1SCtbS2ag7WCWGaXWL2cQTieJQBBDYL3NP7",
  "key16": "3jkuTXhjZpft11RYnjT9anETKxZvvhBG4AF7EG5KDo2CLvZyFBpeqKFxKR8kqJ3n5KJwU2ZNMt4vyZ3MwuMu8GUe",
  "key17": "K9oNuGQ8CL8t4GSzo4VjWfS7bfVQMrzjrkEoemgmFwEHTi7MHyZfez5Ravt22GB7VKFVE9DHsegGKxgFGACZNG2",
  "key18": "4qBw1JasRrKZy4vy8n6VUxsvuphf1spjGyTY99KuACpRNjjuV5rgtvSACqSYhRvRWsgMXVjeC6RfxDnJAThtTCRS",
  "key19": "5GGKfEohGLEervm7u543o3rbhRsW4Uj8rByZqWs1UHZN72PcdiJmEjdoGbiW67cfDpmansg5sJb7EXYAPQmvohBa",
  "key20": "5UtK977t5kDjfNP2jC1angssFVhc47k9rGhXTMz9YJcJtx5jsJtKCo4DCFRr2Smuf1ZnCWRaVu7RRoaCgfngWN1U",
  "key21": "3Le5xrneFKTxMBVBgDE2MJrEVQ1w95RBbjyCfzwUdQourEPMpo6DnECGrVMi2y5ZNdThNNCCT4TYZsE26G6Pk69Z",
  "key22": "2d2JZMpmhb1UQJCeYfB4Ba3ZDoTHWfddy9GM5FDmcjRvwiPgdnRKE1Jym9q3zLr2SQuBFQGCm5EKEqiqX21UpoCz",
  "key23": "5hCys7m5Bgak5zWwqnJMoqoAi8HF83TmVBWPmQPbmmaWcT4FF9Rke4NWpkye7fvzLmRqMahk5KfSnhSRAPVenbA",
  "key24": "33MyxioV5XyHy89ejmnUsjkUP9aAWLtSRtn6nnE6dQ3VMw91Ny11PBYuJERCdp8XLapD414CB9U9MaEQdWkzVmT",
  "key25": "2NUZmPDncFsUghN8YQUgZVtapTHEpAr9g5LQMrSSqDuaYEtgbsmxU5Z8LCmDH5xaNTGwzf91tEv1WSVyZKXUd3tg"
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
