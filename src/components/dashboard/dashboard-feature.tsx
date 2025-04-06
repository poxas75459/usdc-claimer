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
    "3FZSDRidiL2VaEoSqfYFWMDNBkB1EUamSzJR3Xwm6E3nkAaPoxDovKRDtz7aTJEi4RhwiPYSBPUV9BBzNEKHxbWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kA1KGtWw6XUNTEMiEx67eKD2mydAGYLCs3BrGzhpQPY2fbFn9npWt6U5hp4CBwAmqSFSWzbbptcmVUZMc1dhgEZ",
  "key1": "4KDxUUoiAMqqxkXiEKuQgda8dJgGJm73YUnCRFtTP63JxTwnq34ncuiHWP9vWqeNCdkYUz9czFEW2JKTBRxXDfFH",
  "key2": "bP9tPgxL9m9tQwowLEGLE8owMiVCwLvcLgv9knL942ruNUuB1x6tBM7qCVTAuefYc8onNQcEsAQaXncxtMbd3TH",
  "key3": "4SMzrhjftxvje3DHrzGkANTWJd4vfK584dKyAe5EFQQkqdXAEABoaaR5JRMSyVXLneXwdWS8k2oBPtWhNc1ZVAAS",
  "key4": "61cAWv75ZWGTVbtanpH9gkiAPHDJ2XVNeUZbRZP2nrGKYh8TavvquwVHH11DUWUgz5vHyGjYGibVAPqLdSiiAiZx",
  "key5": "r8Ac7pXMrSPyaCVf3VCymaLSwwSomrtaA9eM9a7UYy4TPZKm6w7FPQrNviTKKdt7e22qKuBC6VnfcXCSHsvZhgr",
  "key6": "2dhsCqNiwbpkixTUHUfBnUHC74eZkK3X1YGn6rhNduroRngjgxw6sAYKfemdWgsLECrqUc5aTAEsJCbei3ujjAed",
  "key7": "5xGZKiMiWMWTCFDhfkioDP1293kDLf1F8VB7YNXjv1jnSSqCd128PbfqkzkmL1qCYSwxW6wou7muBQ1o4vyXRQ5m",
  "key8": "5Rt1KumnZo2ShaZKT8dWLLoXLAkV1HiJyJynqZrtEKQgfsAnACpFC3cTAjHuRd38qcrhJnLSyHMPSdoPL8um3RzR",
  "key9": "3bctzL1DKJo33djdnauAJazrBTNt83HzGxBYKktjqs5XFT6R453y2wxKeFwukrKvtSduqp9PBfdF8zwR2nEoFpyf",
  "key10": "3ZcQ7sFTdR6TvtV2YFijakMXzfJHEsqyKMtc4bF4kkFvR9qtedo56f7LNBVzJWiqBa2mGrprK53WZWdUsK4pUaaJ",
  "key11": "ku3HBvKSXq5yQTKRC6KwzTvm6JN72RqAtgEHRwWQCzAKYEKkzrSdmKyWyxtFuL8tY26bsLg5NevjzCsqp94Zozk",
  "key12": "2LC6C4Yx7xapqwFSGB5DgoCJQLLhTcy3hYj8cyFwexzKkWpiDZFJW2hSreeZvxB7BCP8bKFEBYNaLqkG5ftFmia4",
  "key13": "4o1gQZ9cyQASnYsWKq8sAPE4xtyuiCfxuBVyHsUJrfWWo2VNnDYwXtjpGuDLuj2pGKbHD1GNeq5HCt8L5NkkX64",
  "key14": "4oj9jFDrHjB1gsNsCsLzefXBMxzoC9pvWgicejTC2DEtURX1JbRRcemcjmr4WCFCnypFchp2h1rwnkHL1M2gJKt1",
  "key15": "2rJWdXFK2rf1jkbBUGq9Fr2feab4yuyHbXQUtR2hbcSc6VzJNDk1ToeSxWgzGTHyowGhPv2pRsEuLspM5nT2f78B",
  "key16": "3VpMyCEsgdcS9AqbfEtjqxfRGyqUbnYf2pWMhqkjaL9SdGjECJ1uqWhS6BYuHeTuHpmRCUXkDRmjZ2ePFHFqweuu",
  "key17": "4hhQGzWhGwrjWHqSBMvVkfkmVyf4LedMaDCDxiN5v5VnHhC5fWDGzg9xZbbWdmtHaqec8CHaSeZ3QX5cG9TMPGsL",
  "key18": "bBYS6sKVLnV8gtVJYEJD5ULauZzNwJk6XD85pxKcddDj3oZMhGVbJcmKnag4heinxDpPd4wjspCi321RbWD4jSi",
  "key19": "3A1XQfXdQQB2Z5UvP9k1pDpwL4GTuDxQwwRmigKLCCJuUtFAjuqQDTLn2QtPmAk5pYKmBzfwR65XGqcmzBNdhZqk",
  "key20": "4U7zt5NMBoBMyoG2dQ4RGTTb5wKzZ77hpwfkx5oYNV3oDKgwc7EMFdShpUPaCsrpsRMxKXs8btjYkSuKjsJKVDP3",
  "key21": "5yTBUPqFjtVYGskWefUyu252xiYgMZCRo3Z3y3J1Wevq3NGLHQqoFge2L39kJ9KRa9GsaXaJBcP4xoTU3JA7Tdkp",
  "key22": "41P7zrtYoyu4da1Dn6stMymyqJhvgnHWGkQfvnE4kZ7FtyVKzusFXG36scDquqHGVKCPoz8Vg6xuM3uKNfvv6bek",
  "key23": "53M22DXBYSKVBMYWEno8VNwHwejtVUrwVjgV9WoWzXSxwB3tVTrDYjn1rGbpZZXFCtcwEfW5QZoCizf2fX3TjpNi",
  "key24": "3dzeFs3Exudc2138tDB9EqsBey6fxCDFByKJkrU6Couy4WvQK23F7iDVhESrsSF4kF8xk3vFP1NW9VRsha6uL3r6",
  "key25": "mQ3FvUxJiAGwYZAs9rZJhukDJT2xtpxTocwabfu6Z6HfzCR3whsQe7YUttvE2MSMdwmjGXBk8rPdeXBtHd5DWhG",
  "key26": "2JqZNiS4ZVWjZcCQoUjKovfzNLLUEr2J1DDv9LBJna2adrhqEqLgzt3Sj5njsLqyRGoxkLx8WCTz5he1kdA3rFNN",
  "key27": "64dxEwLYnK6qSDnqjQRK8mwjiV8cHgEWWsxDgMKuAJfnXAw16b2xA3npZp7JeW54WkQaU7mpbuAFMa5RVLC5DSB4",
  "key28": "4acddoDnNaHoB4JFvQ1fjJJbqAoV1PPTEmvBgiBzuXo6M4f5EiYA1xq5makExkt33t3ta4hHRVNiEPW3EezbNqiY",
  "key29": "Jcarr6WBt5V5moaTcWZFxUWMCnkvBYeL6QnfHkHbzUPatpr2h2JqaKMDZiJEKdg467rHJrQfb8whGdzgVqXJTL8",
  "key30": "4wAQViK8anQHcgHYXTSBXy6gu85oYQELZZRatJeWpGC5ewqoAgPFeN6c5Ae1XhjsYD6mTYXg2M9bbFqEdoEpVuCv",
  "key31": "293HbwXfDms7Dn5DPe7vi1TvBhMubHx8KgY7pAixQUmA2mWDy5QgeUDu4SzAxWdfU3prqEte1kXTXNCp7MJTkKEf",
  "key32": "5tQF1c6A7yB8RAV4JAKALUBT1EKbnnYeERdBupZvvhTmC6c6Nc3txXUBTuT5AA69gmbVvsEBrW3HG3GJBfS1TCvv",
  "key33": "2qLbqEvkfFuaQuNeTgLviiGa5r5j4yfSqCRMg7dw8Ru6Lp3u4ESFQQdqVi7avonJVjxfJFctJDwWgrFuAgiHNTwq",
  "key34": "NRLPVNFnbhyFfmiJBbVPrJWzueGCmhrA2r81yQQQjGF9tJV9ECsvt7vtFECn4gUGnKzFeERFKDGRa1oMigWfhvV",
  "key35": "2fPmVxNjS9btPBWWAVHRJuf5XThifH1WpRTJWp68Zygj5JPgir7AwWL5f1Bum3T5sRHpWHnbwnw1JWb1g89xfUaz",
  "key36": "kFoRoNJCCmVJCuXbQBwMbQLSWAiv6CsPojVcQyShYXMpPAZZbWUn4kNLM3V2qY8JDLZjDm1rPKs3jS7c648hKYN",
  "key37": "5o5zNJfsN3YtekMeQ3rwNKXXCVPMwdJk1CqSUx9EJ1gpDi2Nr3GqJgzTgE2cqkHmaFqEgwruQLMEXeibwwNvvRC3",
  "key38": "2tgQhpQah5QN1EkwuNCKVWr5ErJwjnkCsgyNPZKhSXpKfrm76f5L5bmhJGiLvk1jSiW6fGSDWaAUFCtBJzUw4ZqP",
  "key39": "z9xZQm75jCsWyNREQerKs8o4SpcMRYncGtFDSgU6XPSJeMtMc6jpsEYvw7AYXd1uRpXN6C3HKCHVpoLvywpEnwb",
  "key40": "2gc3xLwm2fCPByC1sMZp9BDKqP18JKpi4iiaQm2P83Tk7Lcm3odGtvHPzRBZuLngnogdYpuKfebd7AimXGNeMMAH",
  "key41": "96tmTb8VJzyf2MJRUNVinRx7xKXUX1S8TifWpQvKyHxbTh29YTsEVF8FWa9aEZE5yjK3igSDBWsyDedLgLEkGJg",
  "key42": "4LT2N5MAFdNsZgKoJPJGZuPdQRbYzfZAsqdnuUN1GQoBp8v8TMM3PTS2JRzZ8kYEJrMG6KGE7A5notq6Szr9g79j",
  "key43": "5MYECU43t7Th5Jj1yPrxWVw9QEm24CYswYPj5fJrjLA922unA4czKed3xxLd5p2twgo8mF3rCB6sCQLyfb3sWqtn"
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
