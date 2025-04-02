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
    "3nC1PjbFK5NH8vGALrZb1q3RKKGbtxcBgoguYpxCZzhhEmnGkm4fhgXyabDqGMKWF3dwg3ntKH48bK4bUsj2ns2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476q6HRWVHc9Ux3pL1WcPtyk1XPaW6xwzzhydBa4bBDe2oVWzzF1e4KxnaqdJCqspyotoGSTn1MFpopnTxGpBgNU",
  "key1": "3YQzcas83XT2Rkyg7W2o2AJAo9fU2WsXAgkhiqSfL1zk2kfoXfJrbgosaJvRsYBnsvzC8wrYngKGfH5vuazLxQL1",
  "key2": "5kikcVY4xkPyz7kKDqG8nSh9DNYvSQGnJ1ifgJ7FDctbrgNhfW9mJmk5f2FkEu1mokzoZzAAyW8CDWp1eWGhUZXU",
  "key3": "b9aQ2kfatVtoAmcWmrmjkLyE91mRkhN8pxdgBuRGhfLNUsnNs7AGPnYxt41aVv3G1uypGXPX2BqxfdW7nN9JJnn",
  "key4": "5A2gVPW1Uf9kCX64nxukCQBcGREndfCXfa3nX3Bp7EsHJCS1diMzJSBZpnsgin7ccAbxz1VWSx6d9La5KevhvjFb",
  "key5": "2KRhg1sZJcJekoEKwhXH5JvTtUfP2wQPSVjBhMHUnxiYWk3NpkXftUMWuDV9RFZzCVScTc5Tp2sgFniM2UuKSHGd",
  "key6": "5zdsYJSDgrTAsDr7E7VUYVyL2ekr973SUTccQQ7a8vmSxKKzyzuPxenZdoU2jLWM6utsip4urhgEcKQ7pmnmiwWT",
  "key7": "qkb2ykdVJPr3dqk8JGAw7KasuJYx4uhBrHipszG6SoXthbhdhduihwXjbcf4B3egGT1kNf9KhYvaXmV8rUfBS4Y",
  "key8": "57sJCgHjSm9g4teY4TXWRGWbJBhpNK1yTont7PxzVqTfCKhX2VygaSBcCotbMng3F2DY4mDxjyzUhtwu6pwsdgfK",
  "key9": "52kseN4tyFaxzEt6biFmKYbL6RMaQ2jU57Qq7ttRFPmibZvan6sGDbvFvifMxQQyJhSAVq4LmtiGwANmb6SAh8RN",
  "key10": "2pBAq696yYTp4pvLf49Nf9UTBo9qXSrH5GTerzCeVwaQwR2strvTAhgnE5NkFUDQXy4XfDWfsKigPYSzAf4nz9Wu",
  "key11": "2AvZ5VnCcKEbJXYiawrpSXyQ8xiwJAyXUGk1qsv9LcQXN8fpbfZpiYP7Zp74gUGE8Z12cM8KjndihcgaxsLF9G6s",
  "key12": "mWYeJzZibmtLkDXXiCA4YenBWnND64vZ9hDJ4YiFAq3sNga7y4SL2xVN3wyGaFpxCrdh9Dg7zVRcVef6m82sZYW",
  "key13": "2KyoNEHPzK5UrwhtTDVPB7HiseU9H97URuTss7gm9qnhLpjTq9FeaT24EqgrnnX5hwu4PKZDYFggUDaPcAu32PHR",
  "key14": "5uaf5jZ7rwyRPdacvWr32czhh7pEDFUmamX8vpymwKQhyifNUpzii3WmoT7vRifwWsrB6yrZ5nu4Gm6Kndx3J2Q4",
  "key15": "62jipiSREXYGDaaBdNGy2HWfa6RHx7BctpzeGfC3JwTuKXSfhbJkdZjr43TLFaaKNjM3vSawsAMSy7PfRzDhhbqV",
  "key16": "2yvbLhhcppdLNsGWmnsZtVAJfACdQJc5rdaajQvRuSRbZt2eV8myVx852iighAjpbXUDqPxEG1gC48v9iiKsE7Zv",
  "key17": "UJNxLtEZd8v7EMFRMPouWMYM6FFYMPDkYKg1MCh5CDrTczK8s5ESMWgE4TPS9J9PBfEccU69PBH6qWjEyFaqFXg",
  "key18": "3eqFDgRoHVJpLjCrEG9m7xobhh5HJFMYX96yKw8t1zchDT4NgmcyC9XNprh4UCW4GpbcDvb4PoFtSy1XxucqpH2B",
  "key19": "4caH9SR387k1xe7EoGmBy1fM6kTm1RnJBTFqD6JNHWdqpC1JJqYGcxgYyottxHbBmWUYaZFsQxDGKPxHpwNRj75y",
  "key20": "5dsKNWMfmHcQ2G5GxyXFhqRrFbP1dsZPhBg2ZQA8zEPNjyfFyVJbdF5qYS25hipDZZAemettvMgVNMG9DEQXEEcb",
  "key21": "2zYhTeM6u3HhgwgMpbynyEqomxCjBvGWGSYL97ShC14catnnTmNtvvAn25B5Hcew9RT5fFNw7m2ZE2WRtjp2QmwE",
  "key22": "3AGPDhEhF3iJkYG7RwHiu1HPDXRTUt7PpN9H9R6HBnAzMHB73NPvZUgsga4Jk7pPrvpS6xZJWjAXmdyqkFji69Sp",
  "key23": "3C7QGjPQUGasMiRe9Vis13S2ggRhVSNAv9kKiEA8GmQ7Kf93wJuTaWxT1VxVDxTT6f8pjtmv5ed44CKsrZ5EYp5t",
  "key24": "N4LkLRE2pktKg5T6ajBKMzctmNFmRG5SqD2fHo92Jbn2Qi2kCqkVHmhmhnLfRBFpJ1L27aqPcpz3my5BVGjsMX7",
  "key25": "443V5kaK2jojZyzTjVJH4THbU59P3FLKeSpXtFTNvkcZAY5H8iibCKajSKnJytodrvDvhwZA57JgKA5CmGs9UUrZ",
  "key26": "5A9Yfzu1EQsydLhgZzkAD4QUDH4rGR6g6MFfuhvfbKo3DqPBNCjnbr8AcCVPYvB63CY3uE7VaeYv8Rk4H3PJU1WR",
  "key27": "vMM9mnww7cdYc5zn2oy8kpFgkr1PqBbhoBs7C2nN8gGDGwdMsSUYT3LVuMZua2uFciwC9ofDLC8mNSg4nfSsA9G",
  "key28": "B8Px4UCptbZTys3kewbWv5FmdgEh7SdCQtPudzKhEhZj8mc4eDHKWsKZL4KBc2ujLp93bCiqPhQomEfvAFe84DM",
  "key29": "2RtoxBnf473Kvq1qTRjE1SdjRznfVkQh4jx3Y67hsZoMgS6itVyEntqM8UYyqhxa75RAkdq7opXongAcBukscyLy",
  "key30": "3FELSTFM92TN9n3WbqZxrNEQ2CZnt2h8A2dftrsNahenXuTd9qUXLkVhhTcjsiKBCo3U9ypALDyQRFqJNg1UXhz",
  "key31": "33ihLXgAFwaJwGAu4uK5MKhAEtY2kAM8w7PpkEf2veoWaFSFmmwQc2GPS7wRcRxiYKGMzaYsKP3yoJNYq7ARS9CG",
  "key32": "5DzzuSE3nyYjmDRkbaoAyN1ZNS6qW5aa9DCWE6tqmGedjuXzCRKcMKkjPo2Pfn1MtFhU8kqXVgQLySmG5hg5vns6",
  "key33": "2vckf6hyHWWdbjPiBnPE2kSa8u2mx86C3r5zfoK5S94LVhhuuARryvn7Qr6z2N846h3MXhY3x9v858oME3pqYVec",
  "key34": "52Xo2EDRrXe5EQRuEpQFvbtwgaMZc3pVuWjsvhH8CB7QT2kJG7xp1uYiCKPsqYLYcrK3USuAZb5caFtEKbQXNmQQ",
  "key35": "cjy6X7RPzp7FBwD7GxqgRs1yrTRk8yAd5jJhiibbLXbYRj4AnWxaVrjJvtnbYevybgzW9bn9BoPjTKs26L1bWpx",
  "key36": "bWof5M1yFd88X3wubuZKP98zAnsDgQ1NiP5HN2ohmNGrYTYqdvzJXqVtgdLZWR5redQxFEGX4c9Nm9mzjzREwDL",
  "key37": "2emUhM1KMEwP6CbFBKpCwUSiLchYFAnmPpEF5c7Gmi2AhNjiGWLjw1n22fZeYPQ56Bg22RAcbTwGZVfeFWpai23n",
  "key38": "4z527gacoT1o3FXX7FePB6zN71Pe1iUQK2E7ftYhwzjiAfUzzdBzHVsgECMJ6tu1xMn6WTwyXLX4uZFwh9kYq6xb",
  "key39": "5mJVRq37e61u94F9nW1WDKMPAbgwKjE6UQERgftY3mmmYc4fqPEmoRL4JRCafzKkSr2ub3RLm5QjmoyhrY6rKTm9",
  "key40": "33NL5ybNDvXho8yczFPoeKPVQcAGMTq33akQXgjWUAxH478xc1nt1HvJKrMQJmAf5ETRXhEJjDBNjTp37crP9DWj"
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
