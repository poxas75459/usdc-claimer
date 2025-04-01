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
    "3hci15MXPDp3q3eZufnUoA4FqoHJfPZEkE4Gb1HH7e9aSce8yxwE3bbNbUA4gtsYUPLRQoGQj2nSB6FirW6wMyiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inzYFqA9qggdtn4h4iBUtxwi8hHd4LPJJwcyPYTrtoFezsoTTxz1wgF7UkjGKh3Wsd9xS7tvCUJzBtU9F1AYi5M",
  "key1": "55a4ZJBCXP1ejbPB15cSrVYKozUqaTzUQdAr1kQ7LF17bbMpc5kLKZt2VQC5YoHpaBYQTKkFBHstVLi9BhreRnkf",
  "key2": "2LMHg8o2De5fKWVMMq2vdb2GKpKFJYV1xcedrscHMvfczRiJAdJo5dZhsoHYCsSQru6dHExC3YaoAoF3ytvapsZY",
  "key3": "6CBikMF5gKJKo1NLnwMCyy2hygJLEvpFWmtbzE7CHPtDYn9Mmk2pryazjf8Naeys2uY1YckSR1kTAqE9kshbTm9",
  "key4": "3hX7BobLE8YQ1b2XcxvMFzuATeoLq4g4bTzNanNbTL1FxBmVYr3DjqZDRrfHFqfiSRHt8TV1AxQphPRxyMu2riJn",
  "key5": "57di2Kh2Fx3C5AYRYWXENUNbiTpgUJfNQNFLMbyjjaNbLmczhfWHBnhbGoKbBrenWmzdpMFf6PbcY5qqWyEc7DU6",
  "key6": "57dCDAGPdPUdXNP7AStESKC1hmAk37AemvXq5mYW6XK9Y2V9Mz5EAZjfturry6JD4FxXdMqtetroYSiK9tsQBmuR",
  "key7": "3yjwXSLfcPG8cCmCTyEYYCdHEF7KmgCLGKfbswA9qs1Mwticmxb4uAQwxutQNNNLL6kUojeJRAMDjK2dNeQyQtBR",
  "key8": "2drWyMdfEVFYskxLVi9iKenyxUnZEySZ3uMxT6HWCFKNTBTToDCvwFKXgDwGsbYsyLepd5yrvrAiMZWcHcrs62aQ",
  "key9": "3Rm7uWyVf4R3NF7Md8jgV2K1trE5W5Krh5ucijfZ48AUmDYMUximRvbptmN4No5ZrgPkp3R8DMZARWom8PtPMBUg",
  "key10": "Kz8JUXb5eoaVdFUQwCngFyWmG1o2EuttbAQe71XMibXaaQBd9wht7miv5x78fZfYY7CT7Wq7q3wA5o12gYCkmjf",
  "key11": "jJMGovHGM2rzHRdPc8xeFksMyurAJSniHRLWcPMe11sWbC57x7MnCXAj8hiEECUA7T21JYBnWBTPJwB8u338t12",
  "key12": "4nZiyp9a2DUKHruknDhhf1jxsVvf619D7tQ8FYLT3YTNX6sDRjACUZ7amT8dYreXwy8svRxGQADhKajYS13Cq8X1",
  "key13": "2cwUJpow4NWWsCfN3iAVjkVf12Dz2p9W8duSZB5FsUJEQcyHNmnctSJELsATVB5e9STPZsPMEiK8SQML6b2W8sLd",
  "key14": "5ZpwHozcmCxnyUACb7xvsYBDaicaPTMve2fjXsUqD1dtvew8Kf56gXfL44rDxSEYn8sGLumLuDdGENkzUm41s9Vf",
  "key15": "4y3wjwDom7CtRAfBw1vN4F22vy9c8KbY7RB9YHYcUK36uKR6txZE4WBSkTmgydSiPb7PxoXC1iFPto4nX1JACMSE",
  "key16": "WAFSbxn2XCJjfgnjdCCbs6qbgzrkacvoSAtj5o1XSFwLNR2R8Cb7nW4ERptNs7ntvgsG26W9WUYyyWcCEmaDwkL",
  "key17": "mS8yk9cDUPD8uBYE3u6wzvRqMBby12ft3GymBssWFvzdDmRcrJngeLfWUZgKNBfCUMxbQFfe5xAS9UY4ALM2qnm",
  "key18": "4RWZDC9YJpjHwgzTnUhiKQw4BmpuD5Ras9qj1gPSRWuTu8Sro73hpM8xTfo8anxrMpJXMKukHmGeNECUJ1XKDLgp",
  "key19": "3soEeR51fftrsiCW8DCjq9ac9Q45VxkzbQd39dMJRYjPEwnXd9m7WGpg5AMNVHhSjJuWo3nCV7FS2gLNYZBTMRYZ",
  "key20": "2xSAAYcjVj2MxEQdkUt6DoKV3pXvCY49YgvVVydSHQasfMACuHJgSn4dyaArtRqup6wHiDSkufLTQiWw12FoNBAc",
  "key21": "3T3VzmBnAk4roenioD3zqpnGjjPXUnCyGL6AkuZpMrzHwcLQ7FNsAfum3eb5DNpWskbZa34bs8FAjx3wHXEMir8j",
  "key22": "2WCTU2RYhmh9ZzKpVYNNs1Ug7r1J28mmPryDryRijSMPswxb9rD5weS627E1c6NLptuA1oyRvEFZ9avGNsFyKcic",
  "key23": "43fMM5Cqoe6s7uekLjrFLcWtYZprJmHGhUA1otMVsiMF2Y9F9s26Q6Zkufv7HWkhykNffFqtAFLaXBFxdmG3TJop",
  "key24": "zTvWVi418UYhZnvyh8sD9jsH2BttKQZYwutS16BGyA6S77pXStZmg5z3e9GPXjYkV2jbSpsV5hiZf4ZwdfepNPp",
  "key25": "5vgj6bkDXsnGs2atgcX1xHH4THxFbdcDbMcGKLtcwo8TBRxfshyiHerK3KnmDyuNzFwbr4iw9mhmchm5MZfmopQG",
  "key26": "26Xug1ypLu5NQgXFiD2bTstvsH5aeqKgogurrNsLbrTfNZeUSb9tnVub7zqjvxJqwqGseTYQQqDjNKQWMyqNEZq5",
  "key27": "QPqXj7Vipf9aM82HSRyPmWDD1mBnHN1qCUweTTuw4aRM7pHhnRN9awLDEab6KqdJnmozCGB7NWcE1sSBPXq6zbx",
  "key28": "62FZnQvVxm7oFqPBVvR4J9wny1Z3qUFPPgT8evNzDxZqih39kqbiQs5yQKgMpCRGaJ6tKocVAs7ejotwp7ZEq4DY",
  "key29": "2D4vE3noZBySwCGp3DjD1gbZaABA9VEYR2pefuK3dzNYAViohA9WcCDuYzCuA4dXgY5kmLTmCGZXCq28u2obTAUX",
  "key30": "4sS3DAFFvZqAkESdBBiJphPPTHYo1SmEHLKZZmQJxrVAkaqELMwuPPzJz2Sm8GopSCTdVWo8HodhMdVwKugZueWc",
  "key31": "2tSoso7mTPTdduTTqq8a7Bd4dLdMwUKXNkSEybsLCTjyhXvEW29S8r7Ykzj6L2T5on7CM8VZqX7RREAwLwe829im"
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
