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
    "2m2Ff9SgfS9onVzPq1RGkYg1rW951w2zx65s2CvAaMWajcdUpDQsUA5V9pBh7nVeH333vwyCFrfZYZLd4242z3qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24P16qmptbATZFb3gd4dv6cGocnmM3RGKSKmfghx4wneLQHmq75uGaWoXBypVD2b4o4ndiEdTZr9krPYn9ybmrkg",
  "key1": "5wneLqmCqnZqfJBZxiF1s1jPkDie8dc5JwsfeWXWfT39wXQs9ozXMHYxd6XLuMSzmqXc1TMypf2nAZMccGU6NqTw",
  "key2": "57nE5GFtkba2V7mfU8bSASBi2V7Y9dLhaiBMskAUmCEHdynFt1h6A57HHhp8pVYEWojGxJPewuZvuv1onrLr6cBg",
  "key3": "2Qn9aS83UiK6SsKMW14kDeT68QdHCBkN9k6gQdBzdcnTnwHUHtba88RC3vKsdfpzxeGwjXVtpcQXToJNqnTKbZ79",
  "key4": "2bhQD5f48BzQRJnmgJbDEzaWUZpwAk2odiuE45PkzUc97natNBL38TvX4tFhYuYLjoft7WrG6UwgaPSzRYc6k4hj",
  "key5": "3tp9Xfg6L8oXRkAiE6m6UgdCCzBbm8XBuKuGLn6yu5teQaXEqL5iciNX4pmQAmYo8iU9EmPug5cqJwrG1KQXdc1C",
  "key6": "289v59zyG3RFs2b5d3GEPA2kh1yPHrjqop85eGoCfSA8DixA6dWySYvuVuD63JFtCueKiW1N8gdmMAkbHX6Ck3Ej",
  "key7": "gYnw4GpdZ39SJo5GXGmFaDJ18GGz6jtSb4Lyu5RYqTETuv41dVb7RhE5ZSdxamtxiyot4Cb5gqnYvFH4wGSkS6H",
  "key8": "2AusZiQWzk4qd1BEwMhsed3WoKeA6B4EydvAx3SabvEHzzH8Di1dFxyJAV4zRz6CR6NEaHHzK96ZQZCpjurKjsGA",
  "key9": "2A1skDdQ94z81mqjsnnZS6ZQGMQzCVGS7SsBbwHF3Q33adxdGc1rktexV56LUEMBvEu4gCe4ZMhx4dAFHEg9Hx6s",
  "key10": "3qADJzyFGgqrow8yPdNyCtRVVfRPEhJCmMzxCR9ePpcrNRnMtj95QNqM8enjjvQbNwpSqvhev61RgToDSDF99aZy",
  "key11": "TmT48muN7XGu6a269S86Wn3Wtf37ZSfsJB5S5xYMYHihLW2wPz83vur826rRc96c1FU8ZtN6DSXJZczr4Z8LWy7",
  "key12": "59x4gEtqMRLq6qAh3KKWz8jMRjkBdBY7frc4e5bJ172s8wuTH6UefLeNVSeDzkaaJPStg3yGQ9BWA8TWxCj3gRdc",
  "key13": "3wWMUJtvL1kUj5USRnb2pmvus9tbJoJ59iL2vT4fzXwGFosRA6dQ9Quspg4711PN7GBi26Z3fmSU6KWWmgaQw8eM",
  "key14": "24n49EocbNhkEME18hmnKMzW127iHiyCbBKgkURtzqt7XKS7un2uGQZJsxyWg36e6cHpS69U8tqYtGSP7vBriWtv",
  "key15": "2eBtETiMvWMViNEboLSaYv3MQqwALs6Eq7WScBV8RVHVJZukqUz7mwQy3SV5av6jyaQ2b4md7kFfp63Z2WP8HhCe",
  "key16": "KcacAjuYh1RdUSJtn5pxh71ziQ3Xq7zjB5PCAYh137SFkrDLhPCvqBWSyJ9cZDDjJFqs36QnxW72gGJo6kzZWxw",
  "key17": "fc3m74LvqigD92kofmcHe34o1JyfkS1DmeAt3egyJmY1yC77KYPBtqGFsKMebPoVjrsPgnCSjyRz9K6Mn9KVUdk",
  "key18": "2HS6XJpB7MAC1eTdHCFt1nFETBye212bR4AShjGU7znC9aW3gU6npZjojgiTfXGThzJJ6uP4oCZ5N54mwPhXwCTL",
  "key19": "5SrgH9Ahvfo7JxJN9qZ34hRCH1fUTWBnHkggq3UWZximoRS5QE22wuJr2WRG9z2mhgLj5C8nMJ4EGRWycbLL1F8J",
  "key20": "2Lh87aFz3YNH2kLq8AXPRZCrBt73ndbnQd8yLLydQdcNLMv7u6WeGvYfojZwicdMX3nxvck8n1JrPx8W38XEFfFC",
  "key21": "5bGdy4nqVDu4PfoyvTcJj7vMwBSRmSLERtq1XfENj23HtpZmvsbLBorvEB8YTwkH4vpWAW6UWnadKRemicmc1pKb",
  "key22": "RsRsCBQuwER5GMyRdQtRHWyDntA2uWH6rknDW83CtrCNq7Hw51UVGuMLZPNqFFiqqwonKcYrt3gwaCtAPYbye6D",
  "key23": "4MvG7UvQcfrgPUvyPUJJaJhkiCYku1EyP268dG4YeKRBaQcRJe6iMrWGvmmWCisMygwW2qtfAJwt3wTtC73Ht5a6",
  "key24": "61JXtoFhyRn1nHzKB7sVFTA5WkQLGCy7pLhNzG7p3UsqBG3YnQ4TWYe6AQS853J4myXPBEzQ3ENtDRG4QHr11MTU",
  "key25": "52qcFY7VkipAs64KRiGyc3tkbKg42KsdDVZyJ2WviJtWWUqk4PyfrGD3GrugBTbLkyhjPnmRScL4VKABHzDWGTPV",
  "key26": "2qdZPuRJp5V8pH53qt6uURm93Rifez8qUBDZfsd6TEs1GouEVcz6m1oyH7cccedLz3YxcGQnqHAnRJtySoT58dYA",
  "key27": "u5kihfML4uP1WCr9GZ4xXJTNuw2dKTZgH3ScxwMGVPaeEHYoKnNB5eNus1rDZvecMLYK2rTmDS9KuQNWHYaHUYm",
  "key28": "2VNP95bjRwmSx42QMwcCyjjwSZStLAxCn6cXYvJ8vSn5mRyFFkBBpF7H8M8YnNd4UNHBqUXLjRgr81QjngPvrCHE",
  "key29": "62DRVAQdcpmJpGX8swFqNsi77MtzVXfc9YvPxhQqGuWX8nKVWwa2YmBgEAEQi5GGcaeuXFVPAQpXYEtcZwNdpNTq",
  "key30": "woGYVSDQGVgLtXyXGyLfguxNGQhmtTPB5M8QfhnBV2eqWeMNU5cyEi3RsNiAaAsGNHHFD2bTaAgio12tESAdKQ9",
  "key31": "jYUNKpsacyKXncnUtFqjMbS1kpj7LjAWsgBu4YN7qhg7XfTjv8gazRm1uLgXL44wGisifbDJtjGo2C185KNcP8i",
  "key32": "eXiBzBfuv6VypnSq9H8yb6BVJbZwLZvLvKnGsaKaP76igvCGns2R8jf4Hi1dQyYfVjkmwE5piRNCpEqayZw1KjR",
  "key33": "4JYrPCVqRiWdTCx4HMYHDLt6oiyz7zzHQDANKxUpZWeMYwYWzB1JVynnajR6bRf3PpiL4J95hy3bRTeF9U2k5ovt",
  "key34": "2vtvxkVSYybbtTnKMBaG6zBWQx4dHx1XB6EG779guUdDK4BcM9VF3Kah8bRhG6R5d1EfCFoFWWbJ6dKPTYDABo8a",
  "key35": "2PB1fjG4CxenJy24MjaBo9aDq8bN9kyXtGpmPf22hkFvhq5oK83PDZin7v8mGZLoaqkz32eVsRiXMeemF2RQgyzg"
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
