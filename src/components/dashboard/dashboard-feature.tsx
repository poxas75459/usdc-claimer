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
    "3GrziK4z6sLsHxsDML9r9QPNEkGzzQ2hXSzdN5YDse1afybJT8xK8EdVh7dZ7DdkJKG6foma7HPLpxrydiVXpvMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STjR1DSdoKQywrphapjCJ7dtLet9sPxUUC8Byxtu4Uj93fTZtMMpupoAQ29yDgGBrpKoHYNc24XsaVE5qUgNt2E",
  "key1": "3ikAAG3zQmtJKrLEVsdEnvqyNLSsjuVGAP4hqpLtp6DjywviBuKc42PWZ15T3y3E6WxJWtcUmZLzj6F7XJA4KJbt",
  "key2": "5fWirseMpgMhP4CbK5jcJaEh2Q4pATD9c6CniRpQ8K8HsJczCH4prd4QBCZtHpAUeRCwQnr4vMS4MW1GhYajz4Po",
  "key3": "5xMrxzLUmPUBpg4iM9Ldnmpm5qftbRcqpezGqyZJP6bmVaUWnmGjttiD3pGPgorKNhq3ZYZDo6gxSFmbKqsQdnQk",
  "key4": "3v4b1TnERwRY5ya9WL6eJqSVFsNqQS9QCKEcPAsGtoKACwaAJCRR7tP3CYXWybFmeydmtKQLFGhAur9JBq1x6MDd",
  "key5": "5dKZZjvY1fdKe3P8wq7852gUgDgdUX1iYXGuuib1ef3PzAXPLHMK3XyV44RvZxxqLdHdGhPURhWk26D4tuBxEW5V",
  "key6": "5UydXRvEQzPma2Kz8y1ByA1LtFYxwxaWxtg4TpmG4YYu1bzw3aBZB4Ygd8xvdC9GRd3XiKcfetU1wpGQBh2XxJXS",
  "key7": "3cbcYJefiAWHFVwSRGPRMM2PewGr77wAkPuaDgHTRhQei3MrwvRT5MzeUjP3zp3RaWNVERxe24aB6z1cm3WztjFb",
  "key8": "4UFsG4NXzmSke5bRBAXfpQQu8ke1mkRR1JhrXuLEU975cdV7r4No52wAynqVNm5TeTjvA4HS3SxtBgMoJKGUUrrg",
  "key9": "8nrYrXNDi8LLsrfjUM7CnaWv7UnNVJ8idbw4Pyx8NGA4bJH4YD9Mz6YGLoPFNFFNREEBS3g2GLk1ysRVkeT6q7A",
  "key10": "26CHqX8gWx8Fp497rMs4sRFMfHbC3QkahZuYAgRCV6dkupePCEuqusFuVWuULMgoN35mdksdwHsAV4pAmHG8Ae5B",
  "key11": "3xUDHvyTfz5tr6yqiiZJnmQvJViWx7YFYm1wfFxEBLWKDr58tAEehnF29hfVoGr74eqAC9GdQYMffNVvtSLPYQoU",
  "key12": "5BhvcP6vDZoyTszNFoJFrs73cfSWNhWGdYaXeCi2HohYeawbPpC2chZjcupbk2kVUH25BwND6srpUmE9B3tJep9z",
  "key13": "5KzzkZoLw6krVxt7qKpFZggi3YE7rfZBu7NUKvnLp7qrHrWyT2EriHmxa2S8qRZk3fgmpPkbYgdPdS5tszDX1PrN",
  "key14": "mg6SM7B1ECtACGWfmLamnHWvn6m9Qdj9dUheFteaNGTPazsa3hvk5YAZ3aeLrfezyRMQTKNmmUQAZq7kBomKGci",
  "key15": "5PMk5KhmHcAD3hS2eTcKFbhRFJQLJSQyKmVHkGKQNULv2bR1BeeiiCFmBp79otnPpTTZtQGWh5HBGRthymTjhtAV",
  "key16": "5UFd5gb45mjk7YB9tcWRgjeMy8v7tFeDosLoHUzA6cNZPBDexZmwdBhp1UcMjqE4j6joXiew7tVXdc2uRhqR9amn",
  "key17": "4h6HXPJPNPg8QbUEcN4oyPWpLqrQGREQqYEzMiPLRNx4LtnvzGF92YL46XoaZ581reCudZNnzFLuEdzgNZLte7eL",
  "key18": "yvnSv3bt7KA19y97uWxkoNUsQjp7yUy3wA7Qd8e8oZaUXCcam4ADdvvioUjMeTApvJqYKruEPbdzgQvWprujKrM",
  "key19": "3udMhQUxz4yGHiwViMJZuxWX5DGq2iR8ndeKcuffFv2CPnWUqMiFnTEC14AuPvrHzTymjV1i8bhrHB5HDDB8ZNp1",
  "key20": "26hoZ1aw9r5P3LqYsRYc5FyGVcWPzT4fhVWMZRJbLX4ayPxLvN9np4Pu1FeKvWFnWqQVzQcLpCcLqGP81poQAWCN",
  "key21": "2j4DtxP2YjN1qUFaRt2c5yhSTyKWWz7h6Wgpu1TX1ap9oSknZG7hjgTCXsqM2STNgwGcpCUwg6Wqzm9KnzbLQyTy",
  "key22": "2BtBPHJWZFRMH36CK5TZ4RDHxbNZKndXWse6hwsGetErTXyXVigZxMpRpKFEjmRoU1mDiuX2RhsxJd4jKRBBjc1P",
  "key23": "3j6pHXcJb6FFxudjSjm6PSTQyzEhLf9GmCqNFg6TqXMrrXtU653LSrnJH8J6A1CYSG6Azyjtx7i7fuxm2py4Wpak",
  "key24": "65QQVGDSPPHsyXfnPfcmBeQp4CZYY18xeWDVPMJjb2M8bTziLn19LWiL34KQvhYcWAPT1k7L33mw1pWZitXPBRrV",
  "key25": "4NyJFyLM364oLNwohLrCGWZpwZcTfmBP7HMbSQ8fU9F6hudXc4eyo6zCuSTXwUNRC3aLuRpXibUqT26KT561BFxy",
  "key26": "4V1VN6nL4WTBT18ubwZ6sm6PaQg6D5KL3wQDr6sqrAkFVSbw6gPaR1i7SZRMHTTGZ8iJ69gTcg8zXrhapzT7TLCH",
  "key27": "34uahAjMJbpSyVaBPLFuWhmmScBNsU8cHEWcFprtiLH6PjWGAj5fzv4uViSkcjSvhk5FtYa3jVeJY6zG45gYKREm",
  "key28": "4PF2JSQDQKcBkgAWERJwzRptpGGxweZzgkj45EP8G8uKsVoR3T6VwJMmSHnTKFFqDaomyTKwFK5Y2g5f79yiWeH1",
  "key29": "4ZtAtQFt6328CuqhumaStTs2twwR9WGUQFn92Ywb8iAFZ233tqAfZdcxB5tPqz2nhiyYfjYQk7ZLmRyhLw7buCrz",
  "key30": "2ChPgJtZSgavuCUakeJHWoazoBegyNyfsDoRv21Fwp42vEHWg9V32pc1B6JPoCXmZJmY5Azfz8rX2bHVvRK4CqYw"
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
