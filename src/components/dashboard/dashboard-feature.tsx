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
    "42mgf8f3tmBXXsgsK51NS4fxXujfNsgTYGc4k6sJPxiQ7E7vaGRHsFzjtZNicC5HVYuA9Tt1bF7Y3wJavk2Q4SL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbukLZSJNwCpLdvGePfW5XoYj2CFLdoxDYfEFAT82XYe4APdVCoGY5FTAcVseQhKJ1gYeEwaydG5b7xUHTicwmq",
  "key1": "sPASqy8UaCK7a6i9eszBD4ZWdf8N9CGN646UQagmr5MWNVLZ5Be6teRyE5Mp8R7e243Q7KqqawUGcjmNX4ZwSh6",
  "key2": "3B3PG2NqeF9he4NEyeDZC5pWt5KADqYnkuXhEfLUZvkTXSebkS5AeavF7YUbfYbLYGUH8dT1HKDkS1PSwo18zW4S",
  "key3": "4kMJXjLPFYUXQmcVjJuJrRzak4kfMvgmKtg1DyWovjbEkGDQQhCQusqarQX1uEoka7eFh86kELEbKvfrP5N2LWZz",
  "key4": "4WfLmtKtHpFXr1n4ZvTJCrhWMCo1oLLij3jo8rAHidY9T9b6kwkBpqNGHvT3HCvsyC1qJoZTEajVHJCUFTMJnQry",
  "key5": "2b8gmbz4cQpJjmazE63Xs8Rwnv8bdyEEyo84J2CuoauX8WfpGfnGSAbSA5J2Btq3vXF5nMgsg4M6P4xxR1E2nhvy",
  "key6": "4gJ77sdxbRWzp2z4yWLqGZTJXGVtHrxGLpvqS3KKPqq9ofR59hJTgttUaeQ1R344rNeSR7CQ3NH2kE7qpTfbDwL2",
  "key7": "xwSrfRMdD8CSEoHGLK969fm6B1v9i758peSkhaB6X1bQzZx9VRUyx1vmkQsrAe6rDg7xzScC96mrh7Hj3JbTTr6",
  "key8": "67JZmim8vRuUEJGPLjJSojbPmnEh6XwWprQHxTtvNxNQ9foJPKHNu2QQKWbnPjUXg8jWDiWKiRmXSq3F6c1fpWAz",
  "key9": "5zoZ7AqmWvfRwKs4KqaBDaoT9WSto57TFKa4SoYr3g2dJA9KsAGQhp7TvAx4mKRpMZJgogFD5zJLtAoVx8hdHDZn",
  "key10": "rmtqzdrPU2NvCzGWWdKDVrL1uibSFzzGRVqz5ZJFxsT9KPSe8xkfWfJBjBJKwFBVE3T46BWWN5tNzoXMwXmPi1b",
  "key11": "4jcB4T3f55bsYZbhuAbuYCPmDchvjQg5BwPLwjpC7GG9wtywFSMrYXzFoBnpjz3c7U1PrdJLDyiFcKy4FLm3C9Zt",
  "key12": "25ePgNAicr4bHjyHHTWekm3tJhnZf4G5o4QsHhiQg5RiR3ojnNjYB4NhW8WjhKx1Bs6HbwU1RmzThzo9GqKUQ5UP",
  "key13": "5mpzird6Rt7x1huNLzRTXrgr4nGuTj74Q1PXvwp58s7Bn1RqE4zarAgQszN2Zaqz8W4iTyjHAYxJ9eadkemqm1iJ",
  "key14": "5rAxUVemqajHrZSS7G3d68SdyDA4c3hUV2BuvTJd3Q7eLteux3h7xMmyUtEYkyAYRRBdxiCSLiY9bdM8CqAYp46F",
  "key15": "2tn5KbJxrUsDW4ynEhKXA9xsczdXdAMMMTit1QqXGLcB2jE4qjbXr3WEC9hbR2kAuUrfM2vkg2Fe6JJgVRrvMuBT",
  "key16": "4eyL8uzRu9zyK9FH6R4jcWiGQ9Z67mkhhJHGe2kiBi5NjWqzQawmv6WTDgjrgPRckxUFTJAyC6y8n92PRUDveXhW",
  "key17": "tZ2jJ23sXWr5ZNr9RuP6W9mEXhBLPSiWkC6XemHjecsj246aPQLSvnmfxU35VC61YSxYwrQGQJSAMGshUuj79vr",
  "key18": "2qnZVzRVzCWBd8CKsjqY3w7sN2DTJhaiLkkvDuoTb6pvKNkTdyeKVUVGpQAdLrWADrS4DYQoqZF9D63mhEhpgX4h",
  "key19": "2yLpamWtxSwuwgpJpcvXN2ZJJXpC5AJizK4eU62oa1LyL8EUYZDqqjqj88MnkVSxS1ojeF1MSW4pH1MJLP5gRczj",
  "key20": "3Lpa5jaVtyC56ZspgkjTxSo8aERFWwirs7ok744o33GT2J8NzUHSVz82bd4SbspRAhAfWSEDwzk71N8EsRA6JNFp",
  "key21": "bEZmDTsJpzv4R663PdEyHcx1DFApwamzWwdNoG2KSDXtF5jQT2Gm7UQ6UNqnPyRpoiaMWFTdXUL7nh9FFCJzQwh",
  "key22": "4c8QgD2VNCM6PbFHrn3F9XfXNwiP3SVRjrYJqeUcGj9vDPiS9SGTQrKtQrdgQXcHvPNP3f43uqarAdBv2S7UV2qy",
  "key23": "fty7oMJTBK8aihfDbmV8LkGCtvbTmJXApvPfAwfjHDFuE7w8LMrnN9KsdyfFc9sq9nYAAayrhnWBHnSsgVqeaBH",
  "key24": "hNhJqoHDEq1dBXkCXJEV2E3b4Ta8Wb44H3ETqMqrrAZGn1wGMb1ZtRjKr8sB9fYu96gsAGS78tiLatgdpEwGvSp",
  "key25": "28ZQjfz5owuUBiZieQQRoo9HTJ3eqvr5E2tohxzbevDpoeDhX8xmCKygh5w5M31FPTRZArML6eWCkqNZpY6Vmm1u",
  "key26": "4hxCoezN3G9wLmy9JHYGN8u6EMReiuDpr7nDjGUEB3cGLF1aEf6J8tnBMkpuUL6cdrjLW3DiNkfiRwgNmfYoNDF4",
  "key27": "2PPEDydzUQbgWX9VmpvvQz7oNr7rhwvTgSQNQ1WxGYWFkqyjRvRfBTvHzWGPyfjBH3GtMFfH1zTVgAHb3Uiufyec",
  "key28": "61SZdryhZZQJdxAU3Q6WkSmTKkhp5tGm4VDEMN3MHFj3q69Zwe3B5mZN9Yzjh5hUb21VcBSzvGhcrVg1Gz5MHi2k",
  "key29": "2kf8YKABR1LKfYXmNQ1V8DP7D4KX3oSahPysR1Gd6LFRHayZwvqAAg2bm9siM8KaE59QNQZnUe9fKgHa61RT3Deq",
  "key30": "4y5P7uMiEoPdY75sdocCfQND7F7gmn7Ni238gitXG7SjtXiCjBEZsux8bRXopCWLeqjaMAPGF29NCQpHDBe28jXP",
  "key31": "3WQyqrghVBQMiacoCFMMChA7pegnRYHB1X9GqunkT6K8JFrtu441oQrnWqjUfjBjBP8fRpmrc8dezwryUSYjx6F9",
  "key32": "3ePvDfLYPzR1q3JxzrNmx8YM6evhsECuKQBLrwk88U2RxYrTi3wKEyE5zMvF6gDveoULiCqVNHQPr2MZVFkynydx",
  "key33": "53Y9nMsG25v7GQsRG8QrBX9vya9jCgar5YrwHuA7C4G7Cgv4DLeiUwW7GoKq13o8U5tfHs8yQhaPR4Zbp3VekwNr",
  "key34": "5YXHZRDQo3iECnQStQ7kCeaHvjdxWnmbBCDaaCQ2FW2jrMdakSYjWBthn8VuVUmsptD7d2GkiKpB8sJgiTNgX494",
  "key35": "2J88a2pqmAhWc957aHrGdwQWGHsdv5oWeTSi71joQZBKjEnnG5SHjLZ4T5feYoenEPrrKr1yU9yi9VLkSNgZkp6y"
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
