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
    "4EXkwBodQZDoAS129TwxdZGAZwhKPGDkaE7ESWVx1rv5iUSFK78YUYF39jRWAiAFZG9Y3GxtqV5joMAyioGAZCHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAuWwCHE9peRzWgd8DiE2S92775MeAZLvv37mHksyoQM6knrUsXmNka8BT6hyKBTRYZpFzqDJnAWjCNxjND8Y1W",
  "key1": "3DjdkX39tGS3AJW3Lc1Kfq47szhwT4tJ8g8HH8EbXCkfkgYo2gNsC5pmyNQU8ZKQzDtMvSPSeryRwkP8VSGU2akM",
  "key2": "3CMyEHYxxpBRXkpUyNfmdJDTwCvF2GCDThR6zjX2RJBbm7sXzw5zWVCQFzxFDvyu2eQ6fPBdw3a2sPYCpuzJLdqM",
  "key3": "B1MgaHvrxQMkYViordjRVuHQUaNGo6iv6DDK5F9WoJvRRghW4iZsHAJFBDzVqYUbWnn9HZggZPaxzXVgRq7cpEb",
  "key4": "4RendNUYpGC2BT7s8nL7WLETJPGfEYPM2h5XXfeapfpfiKcQ2aJo5dMv7VV1kQ5RGZ4u4X9rrD3VkQhxBPDzBgqA",
  "key5": "2yvBZjdPXaAJvmdUvnwr6tWwgTRT1KX9hPHdRvAQHywAvEvyDstTmR4qYJzR99m7Aa4i8Ec1bNFCq5M715ndysQ5",
  "key6": "4gCmQYLFx9wifSCXh9EVxUkmAFWWaWxKkr5LHFzUFWA7G1cen57Z4qepH7YR8Gz1G4HhMzHEip3Zw3KJVoWXPPY3",
  "key7": "3CQJ5XKEpqq68NQz9QnasRDuv2moSJQjG9wXgH86E8ZBL1tzhhwy78BLW8sdNxa2jX8Ewb56v2dGZbjzfTWDErt5",
  "key8": "5KeRhNVkkzcU6V2XfQskhCGjEMa7ScbBqi1m3M5ir1b6BN6FMKbsZei1Q8ApR37doYwe1VzMNzzHNCXMjtPc5qgu",
  "key9": "5GbSQnef9amog5tG4QzqaH9eY7Wv2nH85udTLBGAixCNb6DW3HUMgZK7M1atakPMTG5aPAuHMBfGrYNSKqDtbM4y",
  "key10": "53EvqcHkgabdfvQTSFVeBjjuhAc2ENHVPkn397t7rY4eUXNLNdaetVZW3VcFrVdksw8jAtapAB5HzwiAqLpp738u",
  "key11": "J4E4nBrSjxP7x5M23sDhzzntAva7PajyZf62F27eRkdjnd8Viyod2tZCqLwnH1BUq9D6o7tkT1y66b78rBPTkho",
  "key12": "2VsqBHpkcKzsbKoLp7NEJwG2C1nSmgwEpGh6Rbxm4CrRMqmKzs193YJRCuBTv5o2AZaw8a4aM8EMvA2dK9dFH8HD",
  "key13": "36FZWWsWDwS6cxyvuB7eCBdSWZD6u5NnbMddVL6VY547MrvF8XCXxYJPky6oPx5eGs1v8tXFfYXYmmjp1EWjJxSe",
  "key14": "U267ZEeh3WUFDzKp5fw1Yo2DaNyV4mf6KftoYQzhpB7gH6aHyqavtJ59k2nGqukuZxWbPzPSW1kkHFX21vsugpz",
  "key15": "5sWU6XWrRa5NkEHN1PhfejKFijeDLeU664xBfvkzUkwhxKvWKz6xfUbrpbfAndZ89GaPx9KGYNFDWKsviQ31VUVU",
  "key16": "4QZiVK3BjEn23WMTTCF1YV6oo8WKWf7sk6Bjq3n6be1mtaik6vw2LotTST4DkMAYQEf6uShExm55GeY1cEWxERDv",
  "key17": "vFvNXCRPfBqw25QKYNitnUbLxUgatpU53YCh4QpEiPeJUgdTcbbwBTfLpNZSf6LN4a98AdHjP7xjMdTfaJPUyiY",
  "key18": "4wWNk1wLPnQuzKxEo9YXpFKxRvqTXB7NUDRPa5e8yLRsYZnDWxKrZMwShYhhJpMQmm3R4aWxjzL3nRkYcnppWuun",
  "key19": "2XT8kTbGgm7phCmxZ1dYR2pQv3X1coQipZEXxV7wrQSiywb16wJXuZrn2R6YjpJC2fMbVZ8kzCaFtxVo1rfqidWe",
  "key20": "5P67PrtfDdJQyugmcJ6UMp2nTyBAMzHnqRsKtWSMMMGohWcgofBZgDo1V63ktFMQSksWt8xD4M5uKkcFTJAZZjfN",
  "key21": "3a6yzhxsSTvuCH4Yn4GsFewUpaoAan4FPUoEjzD9J98F4aXLujS1d2vZaHxYtwerX2MpfuHzqetdRR9hStVt7Wrq",
  "key22": "2dXq5T4wQfQnhHw6LgJyWmTLC1fn5DArjtsjDiUCKDFvewCSm5Vj4Z4BCk5nQpAf5LGpKv8m1g6y1uMmcMFEe3Cs",
  "key23": "2CG9Q7FozYiSZk2CFQGGcQiUhWXCBo3M724DtyiE2vMBV9YANFZNpLQRwD9aHeuFKoDSGKPT38ut3Lip3XbHvGVF",
  "key24": "2NsGoG4ywrriZVCGJ5CR5J85yjnipgC6A3fv1dttt4sehN8nojMGwA4ZRLnjv1UZuRYEj4zzuJCyn1CNQ7RTjc8t",
  "key25": "3zEeZPhuHcP7NnQzuE3MceYwcaxNyMyShgbQWQoXuQWDwXBJW9roh6jsguC4WGn19BrQ7ypm7Ryi1c2gz5foNf2d",
  "key26": "4HXHTN8P8DXewQCfujAkHkv3KJWRPvYUEVSDN33Apf6g7y9mZPFEfBA8mkahx6cBfykp2rpTJ4PjZBaUNRYS5cVK",
  "key27": "5Dp2t3rScgV8ouvdNXbGr6kZQjvUMAyv5kC1LzE1TWXnjvVsSyktaZheVqh3b1yXbKHeq1Pzmspu4XRXsbxAZxES",
  "key28": "2TLTWk5PnQLy8QcgzVvzGDjqkQ8bu5exrftCfS144mwvjpYS4XL8vZapAy9moBESK6xt2u27iJLHFQ79S43yWE7J",
  "key29": "2CL1R163apCaV8YLAePassPY94oYeH1hpw6xpRakc5STfGMWYGCugYcU6yr7aCuYZqWuskUi7EG8jGHETD1JdnSy",
  "key30": "3cbCDd5BDMamptaAPDPaMKDpAgu7SXhsB9KYSMaDapvZvXRYHKesC6uNdo8PvUCPLyDZcueSCp6YzdJjDY6UKToR",
  "key31": "5FSHMwqCWmuqAD9b9FxU6PYJ6ZS8SjRNabH3ioRYdDUA9s41QgM6XhzkcVUUKJXNVfYFmi6dRyBe7fAWmLnQHVJt",
  "key32": "5iWc21vHV6Q1eXsLwxuFeJMy8uWE569bFc4X6oj4MdpN94yRhTT3J61vi3K7wu7Rkb1UPcCt3ii95rPzvMRQww6Y"
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
