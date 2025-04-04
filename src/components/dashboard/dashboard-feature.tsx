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
    "J6diEwUeis5qaieN4TyMRPaS1M44cXRAzDT3pAuhzxkgYo5QTej7hY2DkCst933ieqR6LGJRrLqRxwbiF6iuaCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SA25NkDdKqmyR4jLhGad3X6wJw2L5AqE8EN3w9WJhEfobQNQTCUUxMrr4oeBxUkbddJsbfuyfgZam2V2zd4d9w3",
  "key1": "3aK6E1srWzuLBpJ6c6pZMwBpSkmLximMTFgtCttXYibDVfPrrFonJFuuLoifUbSNrMKRedMQrnHsUM4PXhmb12QB",
  "key2": "64QJbRdRcG6oTJh6MQSkUhZP2yNdTvEwfhA8rZS2JuYuH7153HUJVUzWdrZFEeg5xW6VZ4Lrm2hSoKMugcr1Arn9",
  "key3": "5aQAjWsrA2kZDpX4vsxfLDpwnLvfu5ux96K63qqyiyVgUt8wAT4z4pP1WXnSnWB3i2jYsav3KaBEY6L3taobFqse",
  "key4": "44t9WaPGgUFasPxRFCUZCrndk7qRiWMWphke1rdD7NKxUsiE2EntPBZUVhQ4mt9Qc5sxPueJjLi3HwjqyNhZftRk",
  "key5": "58Zv8Cif3deJhFCFxRncRzxiyFUH6iwVDFNBK43cpLz6uYCxge3SYwKg6NFJq9zmWZyyhJFFY1ow9aCMgjiAgCWk",
  "key6": "5UmpYyfkE462tnrtDQR86x5dmDN8xvDnMurLEQgmcVpVpACC5rxgVR5DG58qsreuLitzTJ4Jmg1nKRf9cfS9TDF6",
  "key7": "21XmtnN7KJ3y4GBR9HtGSZqdeo5xPcFRci3mhATcw547Y9gLkHKCE3qCawhVZRFMmrvpHWLQ3Kaw5ugtn2rU3GY9",
  "key8": "5Vtym5kMY9sCcT6WhGp66ceACRZUN6vAXTMe1MUpDD7r67cX4gChfh6j5xytL9ZnMYpzwAwzm3uKZkaBSRw4JEdr",
  "key9": "21GhmyswBnGap6sdG1BvBDQtX2VbdVyma34K9AX6vkHmFwFGwiteBu1k76ZxKzy6DyLSvRszGgS1mbCkxJmVdRHF",
  "key10": "2cNqRt4NZtbvPCFEYutWNvgH7BTwrJ5PsqPQFtAK6QVe8A8r8sdeMb31pxdeVXiw5DhhCbSY2nNyefVC47VNzoxB",
  "key11": "3FCN9pQV4xpmq5kgCmXHySzyKSWZ8zgfwEmKcpjRXuzJj96p2jDthu6zT98jgG3vXGnWZ5HrJidMEVxfsVdVUZ4v",
  "key12": "56XjyGHPQA8Cr2eHVotoVJ9Zyz8HrbD1WaaUpgbSzxQ5H8nMATfhgqtHTc194DYV8q23MuBnsbXLgXYu9piF7rcU",
  "key13": "3owPtxS4Mt3HpuFQRSfhnggsbDaCQg9J6GX5bSzqDZ8D7fpeBSc6updFCD2GgPtQj3dzxa7Mj2CxFTzVtU8ZyRib",
  "key14": "55QRRTb1mMqoeZJxNdCG4MFB9cUzKyh3vicwN67qEZj2NBhcVWehWcG6yHHt1yE75ZVM27zAizCAX6ULswXr4cqC",
  "key15": "2vywAqQyXWkSVteFCPwtErzoDxkmSihmBFnE268E2E3vgugT9XFXBcauERngH5yv6Raf5A4j6kpZyfPX4tZq16oN",
  "key16": "24YgNQzyNrpWvT7mCcgeuLMTo8fD2q44tWsEJaeS1p5LwQV6ZZBFhwwxM4n7hp16u64e8ypcoW2Y9eBANbETfdzb",
  "key17": "9cNkg2bpYmpFnun7CagECh7WTJL4GBMWp35Qh2Ka3nMoeanyx3LyxV1urut2KJJWHUBQwHw9zoKAUkzRzoD3hYb",
  "key18": "3fTjeZPcsLZepMyNMathi3e6RLzUS9jEE1VByJoM9xy8LD6hhn8KnyDTnv2V5vtsY4wxEnYFGZyiUgqi1tn79t2n",
  "key19": "532cmQBzNjJkpqV8DwGpu7sw8FodfEHEzADm3j3xqDfpLQzgfBzFD8VvgEbEJ4tHMbGWEyV48Kc3HyZWLCpRJ5s1",
  "key20": "5PCHuT3P3dwimXoogK79Q2CEV7pRVqhW9V1PZRFh8uhqScvzYseGMYKxzwmDP4DyQCjtmadY6Dv3kyHNX2Gb48R9",
  "key21": "3D1xXjjA4zJWmqgfCNrqsc6LHorN5cguycJMWduv8T4vBztBruNaLRauqn8XyTN4JovGGvhPbidHGoL67RYyNV1j",
  "key22": "5Ks9RePf7kArMRopsKrM6nLP2vJjS8BLHbyA8FWcGJbvSHHwkevNpBsyycHvruhayrgD6QpFnBaVzc4Q85s6GmdU",
  "key23": "HihRqLyr5a6UYXRwrZVHiMsNJtCnGsMWHrj3Acg4nfuuxAvVtbNEFdWWSdchMTsvERvEyuWc9EWfrVRfAXsHdV9",
  "key24": "3B5WEqVJ2XR52JbjWTyQQQC4sMfHs3X7y1tsDJzstBhLapVniGCZTVpFbiJrHPfwpDFa7nqWmA2jY5qmroJtXbNc",
  "key25": "452G81HADozPmjv52unFegkbHV9CS2DfQQEMXpXbuMDVviSPWqv46c1FE2z4PAoDS4j7QyGWHvgkLChqqAvKtBRQ",
  "key26": "64zeVehQs8Rh4FbD2A3Jb3LNmYXrRHQgzBJ3FQp7r5kjtqF32CBfVUGfPZcZkMMyJKp4oVnGtQ6Nn3YgAjfx5kwE",
  "key27": "2vjfEUnbZhvJcXu9G5RP7PurtDG6ovECuiSqfXTBMeR1jdbef7G3c3o8T1vqfkj7D1Yq4aeiTf9pkBw5oaELh7tA",
  "key28": "5kMoKzu5mgRKt8TMg4Qe5UC51H7hKhU1rAvYiBzb2Si3RdB2WLCgPWhHzSLMchU5virz7uXQZxYy261CtBPLpTjf",
  "key29": "2nQnN9rkxKMATJ5soKu69kck22z7paiCRvjs9h3LBDZWqjHSquekoVG8hEANw5ovm8mYTokvoQ5LRwj1iEQkUzKV",
  "key30": "vvUxAZSjqV91obfnnZ6zTgCz7y6mY4qPb6af1NrBDu4Mh7DY4Mjmix6dFYKYGkGXc9tSNy4XrZMWxBSuGR5AXHi",
  "key31": "5L43quCZv44EyaF5GZ8SDuBVNmRMW3zjQvCPatvfhYjyVwNov2YH1tj6PQ3gpSbnfZWhtB3kxqhpaqPg1Ckwh4tS",
  "key32": "2oM73VxJjdS6CVnHcB4fkGyTLw9EpegQ2joN4UwYRbrboBCrDMCu46RtiAB4tSFq1m9ZJvtMZZwXEVqNfFzhz13",
  "key33": "2CWbyCzCJoooMFzHjp1rguCv3ZxhA6B14u9mdVXTeeEr6duDGTvP4cMVPjxtiQ2NxZDdWszBpKWLBUh4jp4Tc14g",
  "key34": "3s1Cpwib254C3cJHRgVnD4Wbzaz3es8muAaVyekKU17eeCab4ATfdwkikrbf59T2BcD5mNGXByM4Qb1E3fBUna9f",
  "key35": "3LC5GATLUw99yU9rttXZUzeyEmWmj5haM1xHf4Jun42K1zvhdb5WtrUAQMLuZ9ZhnjpXCouNFPauVH8o49ZL2KtD",
  "key36": "5ZxtGgKnfcvMX5nBFSeurpBqVKc1VFef5Dcwh7ZSJxCez3zah7sh54TkChYtrNw2pEYUCS2u7X4ZVb4i8wV5AEj7",
  "key37": "3XBAdoNuCz7WU5hQBitiTjBDQf81h5tfqt7xHFhrJvfhUY5Tn1cq7aYS46sEyxpANAgR8DYLSLaiST6BBDQJPZvX",
  "key38": "2orh7A1BxtqtBAkH568k82pQnT2QybrSkjgyDqczcNRpcEzdPwnhB6P6hqtRVGzBVdh5AJcmLZqjNkvCuLiTbvK3",
  "key39": "YBiBhXtfHMXJZY8BRoVaV6DSxY2tjVzpfLwiKhRB4KVrsPP3yiPBy2sC6YpP2VZ642q5uRm92j3KZgvMbb8hj9k",
  "key40": "43yJUvVprnAvDCkJDdHL8BQgmxJsDKuaMQutL5fGD3DP7R84HajaveUCQWzw8dGA9zXnW5BQwvQHbAdRVjWM25ff"
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
