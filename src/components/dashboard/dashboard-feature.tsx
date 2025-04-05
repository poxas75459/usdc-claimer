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
    "5UurNew9nLEnN2LjV9UJYm3H7qa2NoTz3fd7QQHwyqXWG2pEwxK5kovZ1rakwTJk9hcEgUQiZN4Rh2fg3yvTLzEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eutdHfhjEqqpWnmtzVdennfPMNA5XpbJvcyDKn4s5VDS6zKPneoBjixQh9hdW4aBjRvQvLvFxnReMYvhAe9c5Gq",
  "key1": "Px3VgxSiYqR6SoCNYj46NmRkwhk1NNtCEAtVb8GptgyZ7WnNVc8vypDTTfgWFFznFizeBYoyoYaJr4WtQnAZBxY",
  "key2": "2P16dTqJmHBo3FtCKhKpQ8uX6c5z31WybW6jJfawDMbyvmZqwugNaYz7abdqkd9kBZb4ZszSwFNm9aAVbEzGf7d9",
  "key3": "5SSvtpPDkJCAMhd8sw9BKFYMpb5mY53DCbdnmDQKVw5Ua4Ym4eyvm8XpssaiaDKvgnYkShsLWyETyP7oEjkoDA3g",
  "key4": "m14qsBwx6fjikGz6ZAMe9V3nGXvtBNewaSVzRdE3ddTSSFoh8yvjqBCNperYkqrtmRyDvBHadEX6yCFUHae7ZNp",
  "key5": "54iB6n1RuU5wfhBg9hEDrDCpzVkxPoc6VwHZAt9YWo6w9o29bHVw1y4GJtA3wJxr1wmsbpwgdj9Fi5P2h47kj7fy",
  "key6": "5rqzjD4Wwajt6uRbK3dUSxAEHMhSsk6UdfSdPH8Y47kjzC9FnSUkf92aooNgXVKGcDkjFW34o2jxf6j917U2Mvfd",
  "key7": "2xYGeTPQ7zQNEwmNJQjjgig252N2eWjNvvDEJJ66wSg8BHkBjiPwBAuyuLBbm33BzwaTcV2LDFvHZQYp1C5Q5dJn",
  "key8": "fj9tMshWWmXiZdf2vKwZP8q8VmkHawnyYzYP3s1sN4v9gMSWWje6YakGAdtaB7WG1P1u42pER4bxt9EoJdWDQSF",
  "key9": "5XLoaJ2vkmJY7mdUSF1zvPDyoSNJVCocbaX5eCwbkbK8SRhb3Rwx7LbDzgfTxwdWiRYBYoyQxxtFjtSN6bdLvcMR",
  "key10": "M9Sx8Yof5sT8pSV8NvrMgxUUnYTTP23JpRkUBSeTKsi5xq5KTdK8aJJPb2efGWZXirDCECt4QUnMGKKxu8t9R7a",
  "key11": "2ofoK7cuE5aCPfNEZ7AqQivJcM5mLPuPRPWZcjBDqTsDjoVdwZpKoG9kSZPbBag4xt2dYetwehJaAgYwqZukfMFb",
  "key12": "3gT4WVv3sDaN2iTKCoPYYUxFTJrYgavE53uo6dGrx24bLxc8AAXN6oVy24zUTpLm9tNEGW9wmi5t4qxDNkcnksSr",
  "key13": "4ccqEFyHDQjGviFXccGo7hdnG9sYMBtwkyo2JQoDwxWA5EK1qvcceTAoHxbmqRtAoXrMMhqHjGhz2jSBPe8zCVXk",
  "key14": "5gHe9VLndLZPJaPoU4yDj8BxdcvZ9eXe8ijUpvunwkfZxiAdTQvB1DGFMo3bT4Esv1gXwgGRqWkMKZA4tidx7v6E",
  "key15": "51AsiwBbZG5BbcfmGbPRpWv3zwe6jpss84or4tTYT9Kkd7AhPRK86brYRQTJqi4LpuzCAz5isADTdyR1zYpv21m6",
  "key16": "21gZqNKTv6abFuKyeqwFn9pPPTBJ1qeVazzNgNR4wBUf1D8K3RiEVk42CGnuDosRvpZDMJagKU1tVdb4BYz6sB4T",
  "key17": "4EqKZCWpo73ccyuaMeG6M4sqPAJRzUw3a9HihdghSEyxitcvW4tAcH5TMZzgy8fuyg7b1gchJPbpN3Z1osXfzQxM",
  "key18": "5NHC2xaz7jo1RuDwSCPX8T4qkVPQCJNBhh5gmXRR2eDktHjcce2JL6NDAVycJFH2bgkuR9mSHUuA6jxP4cPwJHWM",
  "key19": "2eVwLpY5czwuUUp5VmaP6xff6J9xQDwSGQY42tLJYjHd2pShUxzbjhCr7okhGWjQA4HKYzsMeuvaAaaSSZYKYnAJ",
  "key20": "5FNtEPrrzQMJK39Sm1kx493JnvcccGCyzzeKACywbBLrvV11XFsXVgJhn9cUqZNNcWRUZw3odGrNdWGC1EgEd4XA",
  "key21": "2X7kJD79uebWqtvTEZJXv7TpX3mbqpEC5aqxJRPXKumThpzLdTNwivR3jN65zg7K49hUW39ZmpmYM6iDEUF8hyy3",
  "key22": "4zP71ULxnXkJ3J5XwjAcYmFVA7DvVJLr6RG6s5gJtxtNEkeydXfxqKuX7bquARmYemtqVgxjdu9XUtAoE4k1GKSo",
  "key23": "29xFjyK8STkmydGDKcbFiCUkhMYjctETMy8tLzFdvvbZ1Y2BCEC9fs2TFzqiMnHKJddFgfhP9RuoJmbhFyXfynAC",
  "key24": "2wmngXg5gNyJuFhqLrPaWm5yKxLoa5bYMeJwMndrYy6Zn6L4gYE7Bb4QSd7r1VQjmV5j14k2Zd8tSYV6oeJd46Mm",
  "key25": "2aagiixhkXCMuXQkwvWZxgcDEED3Y2K9ZUtt88QXtPmXnCcgiQ9TLGxSBrMxdwbKgwWqhNtJQknDRa54GYPtKFqz",
  "key26": "JGWbggB6PNDnm9ytUTexxw3KYCp8EJLHoGsUsDKNWHRWBk6cSrBhU6gc2HwhAa58pQrBJziJyhengTWV5r7ekLr",
  "key27": "67fVx5XtQrRM6tMTntN3mUdSNxzC9U41xVk83N3ihEYCqFiNLSgfVv64xV9x7dvrqeLPN92ujXYcfoM4iWDPmsuz",
  "key28": "2n8FG3S7Ru939X7sQz8vkCZ9256PdjgqPExeMTMKr59DtJ8uAeuuo4nWpkaUbp2L9YcK3Q6dFfuMvEYu6vcNsHEH",
  "key29": "3MJGkWrgAKYfcPwJfN49VDqxjKaU9a9kLgshSEHqCA8hyy9WSQ2zvYQ1eqjvaLQrxLsDh5HYFD6DZuoEBYXHzaMj",
  "key30": "2fHc2H8ci4HnecZwt3D8nTNu6wdpEpJmwcUF3Rrg6gS5VPYpndybFkHBXEPxKFi5jY4o8GjLiQS6bKZdCP8np9WZ",
  "key31": "5UPT3vjaTg3bTsZz69xmtBB7vE5c348niTWELhdmGR6dNTDKY1DMaXjgSdMXifFHSfb7udEU5fQLSZ52zPbmWw8g",
  "key32": "292dj3QFuJyPC69ZJzjHgSaTfG9RVb8FF43idsXPXMCPNRuzcNhs9WtZYD7SxuZ2bGysGwhqgcViNH38oXdXZzTr",
  "key33": "2mm28BG11p1ncDBD2NnXZ4X9DbvWTLPeLkqbXexEw2LLU6tE7PGuRLaBYwTEVvKSSBAsm1Su6rDG68C7LLdDuBgF"
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
