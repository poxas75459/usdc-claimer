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
    "2tiMKwhxDEmP15ZoRCUPxyuztvvcSLNACGUDykNM8hnARMWsGPJuBCJE2wzsyWkiDgSJA3iMaJRHk3SUtCedMm8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nFVcTufh1mbZUsCCpo8R8gZP4qQUDtCKToG6Jb81QRzUxpniojgJz1kqvrJJ3YZkXsL7dkzHri3wB35hSi7pcBu",
  "key1": "33KUKuY7dnH2VkrrQgbEnGC1w3M1NRwPmGUisBSYV2TYncG1TWTy66NTnqatvawKUNiPrfaaC2dGZE6zZfooyVXu",
  "key2": "hmr4tyBsFEH2e4RghSM1GDcDRYduEr8RCXxyaZxqT6MYV4YeD1KnnP4SjDdB8AYWKsYvNiTiVbZ4BS79LT7cdSQ",
  "key3": "38bJUQ1vLxqxidvo6mMLap2YK8H3HQTDzZs4eyduUXMy5uiPMTe2QAqr9xQHb2XYT2rcMEnKd2ShL2AsUkzubBGd",
  "key4": "32JXETJMPhK72rM5ehCx9owTy9sYgvVazKiNZtwpAZf26fSeRZYBsphbxnT6QmUBJ2N6srz2uTUkHE4YvF3id6tW",
  "key5": "41V5VbG4HP4VPeh94hwqXB6ifbH6aMsY8XZ1aKoVL18zvw3c23nfuFg5hxUWp3PuQsmupo1fDUtjLnRLConjaS4P",
  "key6": "3ampienRwd4qrTdK7CZBJc2LL87XG4u6mZFeHY2es2qwKDHtmuuuWpLLtHVNgNrQ2ezcDwmoYTWi4q4dWmCGsuWw",
  "key7": "2SP4GdQNset4qtb87U3Rrai2qUj2kStu4fDmcgGSc5eE975bkmQYuib9cL2PKqdXag9Xmi3ey81WmJhP3Sw4jRiP",
  "key8": "2EduvvwDmfuSsacpLzCCd5aGqsEhPo3pXLxoq5ULoQsVANsBCiumEXDcLUaiVt8y3D6pGbo7ncCX8Z1B2GmhmmSz",
  "key9": "8nFzSgq9rWj33P9mqM1hoykqGS3iCUqVAK3xd2XzyxULrCMsyd4Y8EuLCUcQNTKPzi9drNuYBuac69nUvoYPSbn",
  "key10": "61utiJWfCRzMUEnSxfoYvTtFQXKCXH3RM7j9GcsvAwcGhptMRv7xKkmy1hT92K3HAr2FesUAx4MePssen99bbTwU",
  "key11": "33kM1BrGqn7YP5KeBZacyozSqLWib4eUnScWb425t5xF9cHrVdGBz2rgJCS64B3A38o4uqAu6MmdZcgDL2FTsa1s",
  "key12": "3WtZSxpTNQum8ugL6y4atPDWinv6JtQBmNhPAaHKYcKxyUaycnu9rdFTPScUpCzTALcc7zmxaeeik8yMYkKXxiMK",
  "key13": "584weUdXxmQ4wykZR5SV1j7Ftayx7XF5VUCcxhsG3P45CHaQp3tdbRbrUYGazpaEKfXh3j1io6Fp3sX1iis4fG1c",
  "key14": "5VVb8sLHg5EkJ6o2TD2iQDPqTXSaaej1hVb89faLCDboAWKoLnt7og2Y7mi24hXwuakhsbBsFBLyXt8vjn9bJhc7",
  "key15": "49du6XL7F5eYZ2JjP2YQQhGhue18zV7q2rNXbm7fTBz4oMpmt6B67V5WHxJD7jj4GTfCPqUz5r2atTSwYnnpLH2",
  "key16": "tn3xThfz8gW5o4qBCfR5okyCqNxJTvApjPTYncMTBzbiPiWKsmVrSxZoSM2tGsbmGmUyTsb5wynDhjAht5c22De",
  "key17": "3pARrG4qknCkKBrdNSrRZwMi24imXDhHSqWtsT1C4VDKjkj2abbgKt7rb22SpuUFnYVrEMH9sBBgyeWUwfTttpbM",
  "key18": "3zwjE9T63iy126BUQ2xLivMqaveVoAqwWRG9bKsYCZ3ZDUtyBfJi9fN75ym87KW8P6rhZpA3qu48xpuuFCAGMPMq",
  "key19": "R5697kYrxVG6wt2kBJz57EwKJcSbDjiMRkaNos8hnjfEnapAPSFTLwswbrqDQKBE32H6uuBGBes1UNqo7hLS9vx",
  "key20": "3X4ti3meHtB3BkGCSGBgcWouxo99xdvviu1AJKMmp7G6hygTfJRZEWE7yuhDscDaTPcB9786SqhWq6Hcxhdkdkei",
  "key21": "627JMBbQgNA1CsihFxnVhocNntXVRR4koY4K9GQLdwZ4C7t83mmM295P8T8xVj63GQ4GbDKjvUBMrk2mDf4gTxmo",
  "key22": "4DBdx5cvWQH37qjJ6v8ifKTdvLjPSNS2uXufwKH6Jgr2LCLJECLbPwaKS1h9JjKuAG9Xj4HbqEuf6p3fjQuXu1Te",
  "key23": "2RjkdVD4yWErXVsfQmrsjjRyiccjSZLg4utvLAw8xTyiUW5M2SkERcqVD3WVR3XWG83vJ3tYyKuFdE3H3jiDfPy5",
  "key24": "5CmK8MNmvQHWMvyTt1zaZynoYhcupTdJuz2bi7dKzEhR4cxkdJoDMpoqrw4SLWk9UZ8owK3KZCLowgBQ7K6Fh87m",
  "key25": "3jt5X9KSe2sdD6nrSHGumb8bEFNMLwG1LTc6ixfEFrmK9kuBmedFG4fBrGBvBr4MZkaaHc72hrQRKNE4nvw7wFh5",
  "key26": "rhBPuoBqYpXKkZU3fi8n9H6LtrQm2vQCQk3PvqtQzY9tjwZgFsmhRLAHVBRqMsb3bFrsKNjjUrFij9yihu7WGVA",
  "key27": "5aEJWNN8y1kkWXr7tNnW3zyA7Xs4o2pGkN9wGtRWrN8VXFjR3H6ki8ihjfecJnvsGcv8prG3H3FHicKxPvMn9hdc",
  "key28": "J5ZH4RDrLZcS1dHew46WqdqfQGcX3vWJB6ArkP7X9b7vNFEig3aM36WknJPoVKfVrMWDoF4McdRDLbpm9VuzUB2",
  "key29": "2HYvnhBrSCh4FVJbcFWxN8bnLqGGjmcHEGGGXBtiBC7jHsdih6YafSiP6R2XMwga5K3KaEtYNNJxcTYGXhYxk3NK",
  "key30": "DRfvMT1TinL7xW9b3tE3A4QfFUqLqrT37bR7uyfAbeQCJQX98hEuRpX8DoQwwqdGHPmTXCwE9JmxjEsgDg2U5Tn",
  "key31": "3uaNRY1tRxJeRWdebP6aJoQxP2ZZB2WtCSjk7gS6Kx1WWdhaSwVekmfDxhuMob2BwsTpmstPGo9CTAV7ewRjDJ7o",
  "key32": "5oS9QrJsWyawX9zJATMsHzTAasxhTtLCzuAyy9ZCHQ22smNNGbVjxnhMFVH6cPgfqaYsGRQXx2uA45x9JmJqkySN",
  "key33": "yze2YZ36BQ3g4CcwAStovVVnzpYZTc8LYRuvBkbj6acn55Et9q4wcHFyXmXWrxZ2p7RsxbHkAZFuDCu5SSMUDK7",
  "key34": "V4VkKgjG6oBskL9hUakRdFLaEGkDdXJo6qPJichcXUJycCNKGvuCsRRusCH4FcSCVSmP6LCHJ7Gh4s5HHznXpyv",
  "key35": "QNzhM9LYAoK1xLfMUqY7QURYapvyST2bgBpNJ9UTfJuUAiQdQZwcDCe6f3oRCQbFpmJ5BJZtso5KtJfxW2bQW31",
  "key36": "5qHLqjHWgVhUbSdN74NNJQtVkXgtp4vEuwB8FQkfdUoiH5mQccocVeYARTwQjAXPp6PRxE63n4PJ34ADBUWouF6g"
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
