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
    "4ZG2g4S1LoF27aTSSUdBwRUftmQzyWqY4Bhs999KwnWD81rJosmmrJAEPphxe39KQRPch9VoYHidYjHuents12UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618n5xFTSwhpbaM5hzy8dezTQw7A5Fn4hkNrbjKu3sm7rwb2GrhfWx7NbZqqLCAMFtYyz2DuEeurbrzubZ2DU1nE",
  "key1": "44rqwZD3t3fu9bMfBo3aDQTJvudASNgYsLM2gbhqGEku81NKqoWt9gmV9YgXnmvs7LnfHjwsyaJa2uk7MsRVfhRV",
  "key2": "5xYNH55pKpdrWda93UP3krcNfNa9UEwLjgECzkWKyg7ruk2SEBFvfJ1FYiWqHR6wuGSbgL7tw9PTHqSpbaKGRHSg",
  "key3": "3qhNR1QSgkDnGtaksJ5ADGn3UGL2Mq1DA82TJqP73yevtmZkqmvEavz57zxTZMNt4SKDZ4V44ZioDFZsG5BGcmxo",
  "key4": "22BSVnFMQCw6yPmpMwTjWxtMAvsjWXf6bAbSzJPbyLpLKsWg4yySD5rQiSfePAeXAJFHxewBZ7LBnremPbi7qHTJ",
  "key5": "2RryFzSTHiHVhFhpBVyhr535D2jTKk7bMCqdnUqq1kSE6CQJ3Zb9Bfh3iv468CiH8xfn78ehsgsMxCeUXbAn5wfH",
  "key6": "57YRrLB6RdG2iJq2V8e1HMCCU8tWxPfdJ1bHsXX143C254VyLsyEPKxbtQXxe3k28vWCdq5TJZerwEN3HxVgR6Y1",
  "key7": "3LZDgGZSk6N7v7uEhh3WUK12R8nRVEUawQyCG7rgvoo9SLihDbRkFVP8BKnfZD6S71qUZdfZ3bmG6nViBCNvpYVK",
  "key8": "2mi2MZ48asAUmnbUds9PR6y2bL7cVSmT4puMVkrAZvwaX5zbFN3LNoaNobi9ksZJYAnLFECt1QDDSXhLxnRFebwi",
  "key9": "3TD1QcG6QwEvW8h3MNvG7x1kd7KYwUSEb9xEBidTKy1utP1Kq2mKtDdkJehY1TJxXMo87tvY8LpYpgufYvUCwkg3",
  "key10": "5izEXkpUQUHJhSm3CdNPPy5m1pBVY5sa1haPic3xauPm8ftEfx5UV1dXNt9HYyxiCsm34Bkv6j3AFFWVQdqFpkeu",
  "key11": "5DCjajhNoGhQpQ99btsmVqvpqztjNsrYBbcc1W1zXPankuTkfQKKX3sYWvvmK4DiMLVgNDnoYhj4MsU7fQ1saTgR",
  "key12": "5dmX3dDxYmVXM4ZujHWJPDCto3aymxRVYwB2AvDgSCt4PnQnebrZPqsLpW1UVWSmzy4gHCbvYWBdKMapymgABtQU",
  "key13": "2isSskkzTjyRYmnyZb9tR1R1cRANLZ9cNppJG2bWsW7DVKMq2kZCmVKeKExQfvVfWhPXiRfZqAW8ZGLyfWcVqpy4",
  "key14": "4YDfDgtbR7YfG3psphoenvVFNL8FUEtEtMBtVXpb2ssK2yR6kJoi8fYQtMakRwwQXHBdYceiq6guNVPC1yBcyuEy",
  "key15": "e1ZNVQ2ag2VULc854qxQqZd3Cp4myE8PhfVmtBPQZTpuTfY5KvUkZFZBGBTMNhdVdHwMqKFJFGVL3hcxQFS1GdW",
  "key16": "XGvBgszAzQH9RuR4PtsW6P9zzBXzTRcY9XZKCg1K2smBnk9gQUmsadLcdwXUo1H4k7YypqwEjxW2uRSchP1bYYx",
  "key17": "3K5HmzJ2VS8jEJcbMtLs1F5qAWaLotmJkMNVVKCk9JXAAa9W1pj5teYu9T5HWSba7Vh5M3owsmHueCYjBs1oHqFx",
  "key18": "44w8qPu7vvKvN2wiGKt1Hs6n8Ef3RBSmmhu6jLqbiL34wUZXp1vYES1QayGkAX6RNGgS4LVfWEy5nC4jg59T1i4X",
  "key19": "2Lqcp3YvW8KCnHZxXXH5t2ygSWLE2HQewP2zTYamhwQTuqvS17mC1zKMyp4UKMFTdh9PoCwWD1NUVRe7q33tCUQd",
  "key20": "296r3mxBWo72FXTDJxDTDzesVHvRLXoK67xy3HaHuJd76XTgrfr4XEQ8rv7xq5WUzL8WEfiWqoVu9MaVhuhbTVuv",
  "key21": "4AmhpFqX58AqZGnakGgVmwXvEqTmajb7rhvyF8qaQfhVbygm32sBaTvDWVCVt7wLyvDEABiLLhZe6ibLi8KcExXx",
  "key22": "2Mqbj2B8LCGLW7BFs5XRY3J1XDvmygdNhpUJGLuiQyYz2eGQgs497i4QVwdswGnhS2aWLoTtKzgcFT4qKzwqYtqJ",
  "key23": "5vN8BqTYFP3LG3uV2WWnvgUGpFoeCrKcwQt6yc31KpwMCoKS5miDTyQ84Yk8GhXmnuYwBjZGNRLLGsz9eNuRqHSA",
  "key24": "2zuDMWREQqRTPXCgxcxpoq6UMCoQ5ZpnaJ8utwvzXnHfG7nHx5XvYs52ffw782cNCH6FTUMC6yV1ZSGQ6Vo4gSvj",
  "key25": "3LQ4ptM4Chy8nWNV9xqjf7oJhXqFcHLCnGd2LJWSTe9CsVGmb7ZV2V8HNLDfJfLZmtHvPDaK3VD12s6pzLMmkzKT",
  "key26": "35nMANwQtWzRCybctB9Jh5tPfy5xxNSz68rqUiuFXG9eFHViLuVRSnsmBBfqib4WVqLXQJweyn2Z3k5wiY97j4St",
  "key27": "3pcUGamU7KPMFZBvN2YBf59xt6txdZ78syAKM3a3Gdod9ZA8fCpj7MihiuzZcrSUM6w3CS5K4iTdmW1HbQP1rqKg",
  "key28": "52QgvD8LdZocgkFzEk76tHWs55Cjsk71uxZQgETNZqhajTLaVKGPFG8xygK9WGdAeaPMi2CsXhsFjL1E4B7J11ZS",
  "key29": "2VJd6rUyyYThCnTSjwDiBH6M4NLKbc57ss1st7euE8QDGwJjsVGTVERH2JQjFbb48wkqbwyxZ1xxjVrsMGT54xbL",
  "key30": "xcuQm5mrocaC9CiKWk1pmmSxJv5qdqRvyEURZyi7wt7A1nV8K2ifABVrokJ1L8Nn61kb9cXrow5q7gViEyhrCqC",
  "key31": "3Vz12A6qgyHR5TewCwH9MoM13JsiukxoEQTLYRwyzCgGe1Nua31rgUVuRbwmQEo9yNAxq2nDBAbyBbNgH27Hxn7t",
  "key32": "2FmarP374HTSPvfTxVzvfNFiYjtjWWdXx6hGXT4Zk2dwvcKruM4RksxL7wFBH45DLK6aXBusrN5zWYCr9E9whhFM",
  "key33": "374LWLqKKuDop3yAzLGRvrBkBkdadwhqpbnE6QHtVfVJw9QqYUDRN3tYpbfDEWsN8GPT3LzYXev4NYZgzCR9oWfd",
  "key34": "2DnFV4mAtH1yHEw9P1rTeS2srs1mqZKFwwcNyTMkQhCiAcrmHHAyeNkwDzxvsvbD6LmjHQN5ZSHpD5fdDECQFe6a",
  "key35": "23cAjsmHYTNT2kfKeeRtvcv48kqP7fCw2pDdHbiDJBQDVd7jZph4TQfxiLng7oauduNsmisMMVQExQZy5aRfZm7Q",
  "key36": "NzysxuCMGAD6U5XPtpJCFrpFbaoECgBdBts1gop4LxVvTV5Px3sUvVhNnjBLruyjnepT9g92krjVn8JgkL6NXuz",
  "key37": "csqbNoeZaTSPWbvw9YnthAFCs9VEqgk8Q5hc8Kjx5haMwxqjni2osg4ZBaSP79YZtyfqgEYJ13VHcNdLxaVqwtG"
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
