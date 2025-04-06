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
    "3jpv18N1SgKHcPySNkXWAdjR4QEVGTSvtJEZTswBHHeRY1gpDZHhPXJK8CmcFu9aby2JHRZu5L3q5pRvAi5fFmHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zkni13qtsUKrBUfuhovwh9nuvYuXbQ8WUxaycyuwX3XyaRGGrJJc88KN2zVPFdSKzi4DMFTdgcNfvo38LfTGbzN",
  "key1": "9DGn3PUicUXesqRRgoZxgQmx8cn5EictafyBgeoW4HZY783irGC3f4T9BbqgDQmQSfyjyQQwmHtj4mqA7tnx1io",
  "key2": "4YZCZ3WXdmjET92DcZiBP5HNzz8ksUpkWZuBw5JWxpWuSFjBGLtsXNhAjtzWsMgTCGp67HrupSDY2592MG4GCvrM",
  "key3": "3i5aB4VurRnhsJ63zCcPq1Aawn2p4pUos7QLjo5nAfpvsZxHLUUGLNMyFAP55J8vm7ntHp77PRgzb9geL3FJMhod",
  "key4": "xWkR1uynZ5WVVUXAAHSLu6cgGXaLbcc6G2oPtS6r2nBi6arFxdLHeveGTaXVH77eBr3qy8CfFTJ93aANiZ311bh",
  "key5": "3LKh84uUzrFFzF5iG6RjgRW1ggncGop7Jvht6yxaVMiKn3pzshzz1YyMZFwGbjUvXn2G529VdQrRaoJhF65yC9jz",
  "key6": "3pPzHVLaDEU6pDpcR5AppkiYbr8yxLogzHcvcfRWzbksfxML17tX7rDRgS1sduKb1jeohaMKV5dy1USspvyNZuGQ",
  "key7": "4Xs2HkYuLFYKmXXhnw87xiLtzMzyvZh7WtGetPvcf1cipFd9fynLoc7jTQLN1ZpL6FpAifaxxqboXCs5x3XA1QBe",
  "key8": "364iCrTxou3xnAtwnfH997KwUrfemHGaAjTrXaAJBYMj7UmBpJfNKFpr253EWS2VQikiRVSoVQrJZvpvqjWE3rza",
  "key9": "4jRXQrNXkSRpfuJmYyrPYmPRAqnKzVhPRDqttZqXiRp3p3wL76XExz4SduY8eY6kT4RFoANhafovEf5QGKvT25wR",
  "key10": "43VtyJYwL99RWiZccqdBLkB3hgzaEX4VManrknu6SiUSVnRTjMzqGpnRaCtDzYJqaD6XXvNqvKSEWR4XPZJhRCD3",
  "key11": "2unjiZkgd3tnmsUi11bEd6csjb4oHKZ2pN5yyoG6u7CeS9ez3r8q8UHAw7TASQ1YNmGsAsetoeA5U5ypskWL7GYr",
  "key12": "2Li6hFdjqWBqYS1VGmxgzyVAwD1RxGEmo4s5fZFMz6Dshbb3WMUiNvDBJ2hJZuBk7C4e8GmtgsyGtRtX8ZSBjMFS",
  "key13": "3wYEvkvkqfD1CrTZbzxhJMHP1VD3fGsGcAEx5pSjgUNG3V6eT1mVKsXwrUMkgmUQDaRwikMbMKqCfP7fPGTM8dKB",
  "key14": "2iiZMd3WzzBnL9zHdjGp8n1as5paUNN4a2Vf2pMwtoDNuuy2ZyoySJvcXgHmnwPxXvDxtJ7JnCcfJMuwxv9sFb4L",
  "key15": "4Yj6eJjQCVCgyZ6uDPBopKbUUgbv5iy1b3x6iedrkhLd8CHVDSfezp8tDdjqPewzVvuCGvvHLg4oGumY5Fn4Quut",
  "key16": "3vanBd8egWxMeMM2nSWHFdfLiXRZk4QzjGg2SfmHESaEWgLBHfW5tcfhTdLBC7bRCNMkkrPSMYghGhBd1iSpYxTT",
  "key17": "5q2VW828j4D5W4si5BZYJimbzSLUWcPuhUeMm5fyazX3pX9By4CTd7s3t4x8wUw4cA2u8DPVEihuMws4g85hwxh7",
  "key18": "33jvUezYamLVmwpJL8ojxcUejVYxFboNGgAXED6YfjffgGY3bWxUxnZk9U9kFeegChhdqrWvm69ozh2W2UMTqpfB",
  "key19": "q2oB7FY3YVoteUuo86sQ3Vg19NNeuSnuV4s2dzgHRy7SD3scwJrnBdu4GoikJWRN7cLtB6KBgLXfoTkC7vo7HKu",
  "key20": "2nRLSZvJHBgULyLoCp4NExC214jKUgQJ5vCbYJQxL2YZfGS5dbbz62USx91ExSMDgfu5tk8Mg3QzuANPUWN3Fru4",
  "key21": "BiNvQoXrXV3pLvhhvEV9gccmCBbchqbnZQoC8VF2JPUvRXNjrzquPytsWXo7FPyAbsM9VTAtRJYoAuBmvxYazEb",
  "key22": "4HkwwgRPXLnwMLM2ZE6KzcrcYJaoiwJnGvFc67WSEwzSWdDHZmWgyG4iQ5wv2TSSbhSMELxeDPz5BhuYKWvXYqq2",
  "key23": "3MdLiSwBkiLH1qhwR91CwUtmf8z98hpAsuMFmCpNgqdjMbVveVNXgeQfmaAp8pKwPrJi4KgAhLS9QQBkJ4sJMEVM",
  "key24": "fR5LK9WmjzFADtyrM9pAJsthfQY3dMjHSPj7KUExZMFPtQwxYDy2tXv1d1poz31iR4Kve5C9j8Mq5jvHqxUr9iC",
  "key25": "5FQqu62rwS3f3p8ZaQNW1vdDr9Q4kmo5WUTpgf2RLt2HT126fxtHu4aDE6ZrxPtcxRbEQopyQMCWyaWjhr7drovj",
  "key26": "3c1BXtvyWL6XPfdNaDq13Jn65XhtqyreHPGjqZQu5tpXoDoRqtUb95VTBsJ23uhRqLJzs4dqxNQxtdzFWrJozAGA",
  "key27": "KCQ1e1Na9KPiC3FJKiAUJVWpiPmREBtzS5zWzP4w5KbHzibManNzK9DF25bXuUvvpF2dqeaDsK7jH2xcfyP3Up9",
  "key28": "36e4LzXXjvgfnzzUGpyR6FZHSsDC7yMJC7a4tYDQv8XTckZzi6tyDQy18Z3WYmtMydZ8aFY55hChBuiUspD2rKDF",
  "key29": "4stCttaVVe11qwAHXc9RM9LYFCVYseimL9qN5uWV11Xp8pMC7nhdoYAFqgiS8oz5ELAZskfJ8JykQN4sHzJeFxNs",
  "key30": "63ipDKqavR15XPBM4Tkakjy7ce2MSEJvus9iHw4hqUCB3GCGBo5h95AKfsCuTm6uQXPjxdhbEJeGJvg91n5PMT9e",
  "key31": "7946zJxyYz6uYsRn4iyUwedqMaKFj84M5kpRKZW1euzgyntKs1Viufy5x9RpWt3ABL3iX6BvUZRZ8WLx3JoSL8k",
  "key32": "Q1vAhez16cNaBk6uHkR7MzRBzgt1wcqRZbt9rUZqb1tZqjgcv3WtTMybU4ZQdLgAxMmzcjns79srY4A9VzzrWW3",
  "key33": "3Q2apyXdkGChUhwMgB6Zu8ZoL45DXkwtfknSqoa2kcHdKPZGqmiHdNgVRfb83ispbZcQ7ykHUkc3iP9ctWQqiZt1",
  "key34": "2tLUC8bBTykJcgpuo12R8D39YJTGpmkpwVjsAykCL15tBhcoG68uFLpYaEez5dAvLF4xFwXNN9KAAnoBn4QiPnWi",
  "key35": "9EcuBBbKmt7YePUvS4xngTE1jhacAV1c8jMUvZxZpUpNDLsDR2eSPMPTPke3q6ec9xbR3Scmp4SH6YpSyQcKZYn",
  "key36": "jVJUnr9Kx3nFeBZo8tk55PkzCNXzoWonfooH4oaVfDBGAkjqvDLJVhASKvQ6GjZpxDT2KcRtmnWVEwJ9VRJfgdA",
  "key37": "3AphzwQSujtqV43isNEvv7h3jBbrUYVRHvN5Z7sjnV9fU1CZF37wT4Qst9kRbkSWzfVeDqZkDkxxVFeWq7mLXAEy",
  "key38": "BxHwUnLpgAHgV3kkXh2k7CTbrUysyFamz1rP7XCvPVc2XcjQNaog39HYCbwteK4rUxkHPAE2UENg8q6REK4RXeR",
  "key39": "GRZKtY7R3QpSAnNadipQWPrKDfZvA5QyEM3sVQ8cx4pa1iQsWxCaqcB96DDGUwk4YXkGyDsRRHe8kzc1mwvDvhi",
  "key40": "5xUXpGu5B1oNBX1scLE3VG9XQ9uZtbA6cQib8HXFxw2CbewF348kNWoBmxDR56sByiEbu7zRxNVpaBx4qV667FEF",
  "key41": "4rnMDo749vUBDQ4rXHzSD6gM4eYa7iJcmQ8riFKBGG5awM2y5Huf8p6nfSG2ardYxcrg6xZrZX2ZEAj7HdrafUuP",
  "key42": "5n3NDfNkPvhh5fsiP2RiMhFMEsHF1P3TRezM8pgGVMHmtk8XsWdEhy37Jq9tjYmqYfKa2iq46P3LhFohSBPbrpLd",
  "key43": "3BRfgfBfjkqUakSvrtqajPeUmT6cGeZditY1K4iVe6JmsCHPscrutT74fUurWLMBxuG2KX2GWyZiWApf1NveWXSC",
  "key44": "52r4j96NPPyTQAYHMdGU4VdsxkGTnFNpjR6bqnhfm83LX937vAcEZtfpfzgZhZS8HYhJxAfXZJZiwd5B6u4BpVpE",
  "key45": "3Q2WftvYsBiRPJBqxS9KT9JPyDXe2p4wYKfcAYYu5myCgrNjnJ3jfBeXYU26eSwGWhtNdaS7vRJxrvSaJa4YpzM2",
  "key46": "4hm8nLZKpLjh48sm1GekoVgAqTfzq1GQaxjPgjFmvb1c9SDLUiS98eyoVANVUtHaJowxgureixb4EVb6ZHAwqyBr"
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
