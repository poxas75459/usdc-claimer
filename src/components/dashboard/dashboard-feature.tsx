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
    "2Q814MchMuDXezjtuqma3RLRwoNyi1TbY7NGKtp6oa8oJ4X8j8vVZWSSDXq2gSxjNioymKXcXuMMFhwDGxPh5dLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jk72czQLxpyJjS2oFMhm9SY99kZ3T3ZznvJrf8hvQDmfJVHtYskkyYRjy3YUFytJ3dGeNxyPwmsMQvQDL3ttHBS",
  "key1": "5KDwFGRuBeQDuPMdD5dUa7D8iekV5dM3YBFGTQuGbWEYoumVfqAuFLNiFK7eGXs9jqSDEohfCd5Vu81tKRiqxxDW",
  "key2": "3pZn94qykKe7FwF4evTWCZVzBJfGkA2Ed3jNtwcC5y6R6LzTMQo7f72ZQWQ8794NjKNKPEfDERk9emVpxXeLh4di",
  "key3": "3J4V473fezyEW8x1VDWGMUocuN9ASDuyQmUGW2Ss51arN7LMCbrU1dVLNPQeqfjMxGpr2Nv5E6PYYPcd6ZEwmqaA",
  "key4": "2V1mucr4WEh7yTzF16LuopLDTj4iRbSVDSCVwmyAg3VaVbHBuiHKNDNgAReYvv6cgHuWSVX8eGmYEqwkHRrokXFb",
  "key5": "vnfXBXq7RgDMtLVmA5c22334Ga9PfzAUp9x685ncUPcAjs1iMPYXjm2TNEZJn9TAwjxW2N4VnL3SR6a2795GBvn",
  "key6": "4C7JPfprpdm3SuV5pTR5ngpf4sm74u2ZEctcQjLnawB3UYjHJWNxuA4oerXmV6hM9s9PgFydBFSqLAnfLXWn4hMz",
  "key7": "bRyJd4r48CqTUqEsMzp12zdhxmGGeDfXKf7qPMwZNzQHHh94UWQQtnik4dEJRDZ5xpVzoN5cjWxLWbQmyHrzqQ3",
  "key8": "55zGmvgcwBr7TTjtXGRM28MUse8TgWtXWKdKrbsDG7aDHFpxc4CjdnMDvsWvM4zqHqVvV4QzRccexTHpkFQ3yGm9",
  "key9": "3E2o5bE7Kfxmqz3ooB52Z2ZftKLcYdSFRphYnWN6GyPcwD9nbXRycLcDXnJojTLtufXkeB9GwZFaWBG7NHPBzYLk",
  "key10": "5HjWsNyg7TUiWzXBn5W8RfUS85Z5jHd6adKtoRckdwk9hCCAbYYWDiNwph2D9S1EbG1rGZgH4t9bFswwmar3nuL7",
  "key11": "5dUDYvhEdZwYRLxPQtfQKyaVi2NvdGoTjLbE3E8TzTFR3EBAJHs9d3PbnXgyFsSHfd9DfZsUzavg1Ww3Qps37Liz",
  "key12": "3Hxv6xqym4ShLwKPs5fjdBfNtFaYYvRrZg5tSMcmuXFjcunvvGi4KPdGTDjUwH4uCPvsEtQk8gd8q3NZSbRyuUdC",
  "key13": "4cUi6bfQSiGFvdNKW3FVDx2FXx93ifzD7UjY3cNPc1bCNEMo76XZrZc7GRK4aMxJnCYjRAqsewpk5bJArTP3okHj",
  "key14": "5UQiRRTduwKHg3FKsPnwBUv6yBb6P8LNm2tKShydUBH8SU6fAxQbFchpXtR4hmVfgm8uaUwZt7ut9PbewaRXzhcc",
  "key15": "aQnXJHhZ79eLkkN8pjUsjWeJreijHPuKUhoBh15mQBiszUeZ42bMyy58i7LimrC9GVJAM1SbECSahfwdmXrbbu6",
  "key16": "3YrTatxieBbp4wdSoCDujVet7UqV1eYpvqak1Y4zLzVhUZn5DG1LV9fMMThWoySVPyH3WkNLbXyJsbJxf8Bb1HNK",
  "key17": "4apkx3NK4tJBYpGAwVoEiX5MHCUseD9VgY87A1bcLbbY7qTeuC1ppCGmU8HWuQRVz6yG5SqrsjoppPz2esnfrhij",
  "key18": "fryQYocdWkWVLfP9c3zjEebNNMs33dzHPWWoSS1y1NYLEcyhP8zwq8wsmPE7fJKqVwqCs4v6MmhANh6z1Ht1dHz",
  "key19": "2Yaz4srPK5zRdvRigvp3VLCUmXDuUByN6RV1MqJsN8vEcnacaD6K8oqQXxL3pWamBvcSnmEp1C1ojpkPXbneBRBq",
  "key20": "3bE8S5yBHbscQzUupfvYktShxkQzfYtMPRXcGDwVSrkqCqxjb1Hz4H9jcpKjFngX3JdJzzLQ5wWkmMr5ZNF1G444",
  "key21": "3GiPbWpeXSCtectdrPU4vftpRHCpA8d9RqehXH7zKh4iY6eyEPDibX8KMYtqFrnVmNhh2vT3M9HFybcdzySyS2Z8",
  "key22": "PRtFSnEkhMLtbK49sQeykfbfnS4X7aHmELSXZ7FKinoVND61q3TcVJs8PCJ92t7LV6CZiTUiXWGc8soHsUxCqzv",
  "key23": "45136wpuXdmYUwvdxM8jpPdPV4zur9S1gea3Gi1WPwoQxC4GWUNU1y6a4MUgoCcpX6sGJg6MipHAKv93gwxn15x2",
  "key24": "3ZFJ7ePwjV92KMUre2qwqhoNXwgGf4jNYWkRpsUiNXu4khjqBZbMMUJhSVagz8nWB5hPNDCVoNfAeBTe7CfMyCKQ",
  "key25": "524wL3zyQ6bzgqWnyK3maGwrFCrMNBiRW5EDBWyYcu9q9dMhtYo9hAHdVAkXHuAtyQziRKaVVindQbaXjcyyCav7",
  "key26": "32Lu3vzEcmxyk7yopBa2micYCg7wfWUYsGSRxt1M7M3U2xNA2BpARf5fTCgN5dPR5WNFTAD39dfhXzRYmjQcHAt5",
  "key27": "5LsRjJJrGqmWZsDXwCRxyAUEXoEW2c78jGDdPbJXPRipyWhtai2J4TeyaFWQEb5mgTHKBcdcMbpVvq3qQWQZaiqs",
  "key28": "5pKCjr32znMtQL7tSpE3YpEiBPfndqtT6hv5ss2zkFyYXENxWusHH6EJ4HjRPz3bos8ffVebUChrJnxtYsfimSSY",
  "key29": "2bRVR28PHMfMoQ4dTyLhBcKNm8ZY3vTRfLd6e2XUDX1i2gfYBKwxUKXggXg22YGEPQ7AhvCU2pxco3sDaFgmRmm",
  "key30": "3qXgcipYEWb42Bq7DU7uHYQKt3HjXq3YjaQCDBe4cm3p3B4YsZpAuvgziy3VxGMbn7CMbgFe4xYyynqCQHKu4BQ5",
  "key31": "39qtniWcXfn6wpPAfjdyNetZ476WUTzRzrUEn1mbryP1bj9TPXPQ7WtdtyF5qpYpNJwzz91WfUvatbUHGjjHucdc",
  "key32": "5hNaVZk7suzKmV9SsccPBNUg2tajhW7fAgALV28SkxtB8B2V8dScttCq6gzdsSS16sU38pBz8aGoyBuJ21w99GMQ",
  "key33": "4yfmmhtfePUE5LZWRyTo93R2cT1nm95tRmNa2UPDbQhKEGcC97DjEJTv4MAdcDF9eMaXruEPPM7Q7pRmXaoDM7so",
  "key34": "QLwHg7en633J6yJxmvWe1S4GQvGsxr5Z5UrGq6Ac1cPGAEHqQzybT1wSGDG3ohEns2JHmAh5ngq1rGhSjezJHM7",
  "key35": "LM4FjiducpXQzHPpR4YBAARn7dRYeUPjQWCHgrmDQ4PAL8GnWjPzJSFcKsnci1rvTcpT4ZoyLseuzRmovVe6yqM",
  "key36": "RVWsXcuD7ttezWArRf5MbvwvWjqp2G3dTxuwUNoJct6jQnatPgiopbnyTEK8UCCJWmMy7LFsUjW8nTX8suaL82s",
  "key37": "2oYZDvjjbtimxxEmFoB1va8XZE5bXFai9LiB29SDXyb1zguNzHmmem1xnDbCz6DQorCYvWLNU4iMnufyMU9KygqV",
  "key38": "5enGmiVKy2Ky5NGuz9rCtf86jBud7jsZ2HMXsbACmxUxLrTAacKmoL1LdCxy3FfctGcq3zQHDt31Lu4EMAKxTRBv",
  "key39": "t4LEe6V3sLFDXkKsM4mfLNuHLjTPvWDnjEy1M1fXUfVDQW6P7PJoyxwXsfYa6EiDsjyWyeaT3B6pHACjzVgViNF",
  "key40": "3umBjeUELm1R8DKzr1dfRMkmDUPPQpbBYrwPBvSWE8BjQRARGQUJRjPEj2KX2QkgzBqie2xmcXsRr5u8skvY1fDv",
  "key41": "2ksE4iZHx3BN6pPoD6rnYyWzzpJekdJf44cAG7d55HiXwGSRjVNXbMNV5CZBGhta9WqHdmbeffrcyMZv7T15u1fo",
  "key42": "4etitG61Tm9A2Y1FBk9mvy66ogLmRiw5z3HnWJwWeDMgoWGb6vt1RYsS617aKP768qq1To8ochdnGoC7FTYBpTAo",
  "key43": "32JfkiJoPVjAyrDHo18K5QdBqVv8p6YccwyGDCejMdSTUPwU4pxSQUMi3WBtwLspzHzN2JFaxLyVRQhSyKnH2FSn",
  "key44": "4GTZ6h3tTs1rgnLvYiZ9jqXosJyeuivp2ncRGHXyez5Wbx2kF9uyUKVF2qbnrxVxezfs727z35kPHu5sfWUYkNM",
  "key45": "2R967UYBvhAs14RqRy8pMR5EL4k8wWU7mjX1eHSh5MpZUXGuRZH7dAwMNdwbtctkBBoy7HRPPrJE6JTPxthkbw7g",
  "key46": "46MnErhsu5DjuBFTRHnAMrBaaD3E6Ue4k99kpYgi7f3FaKaG8WXDJ8vpyssuAgoSSkCE7bbz1AnYyPn3R2yhJ686",
  "key47": "23whgUd5cQXDTuFt2RmzayegVVUL5SBboY2B2wK6RJcwvzedVzpeyt7GxdZxv88NtKSFHTjrMdNtFYZsUzP8yMiV"
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
