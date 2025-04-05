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
    "59iPVEVJADhnKkjnH6vGk2AKuum5G8TX5QPYf7toTde9nhQh5WjtPesyigNK5M5ATEVYwUCgqx2woKMJheopznNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhK3CZhYiQzPuRDW5N7TEch6ce7GQpAxYt23gPgd2Kmtb2MGkCCStdCV7yYx3tpQeTst6JJviMckXcQd3vPi8N5",
  "key1": "3X8J2fhHMat6kMWLvy4YH9BgvSf7JSdEAvfpTuVdTMF4yy4u9FCoDTfCFrZSkVfuNZAcPqnGRsqbCLN5XCucZSoU",
  "key2": "3piskq44D8VJMbHsisytzq6LYeysq3LeNi6nnGSaohUYJVdPNsLmyPikGtonaKHQPCyL4upFSHM7PSiC7XEGCLaK",
  "key3": "282ipUkQyNBebt8R9YHYgFdHqSHb91fw3qH7zCcVe8UD94M7HqMXQE6RtcauS3T315Gp5NcsPNpWhMPCLLdP9rp9",
  "key4": "2mxMgdtF52LsS7XxXkvxTNmunxd2BpJaiBWQfMRYYJaQQ5XXVDaJLj4xXJDfuXjtKxdTdZQVMCk2nDQENdV4Losn",
  "key5": "3C6TJBtiVx47MGRcYZWKTk5Ff793CARrxQ96HmKCgSCgFmbru63bke2YK21BgueVpDfiZjv1ya785pv48fg14FZG",
  "key6": "BYXC3tWdCJfMTyvkekxduTaYKtvczecSpYtKi3dbQARhxUM9QZzzEDUWEVMJ7wHHRmDRCv1LAF17iSF8SeqGNu9",
  "key7": "43UVxFCt5uqsTCgPxcASVo93pcXRLEDbH8n9qjPtDTnLE6K39FSGvq2qH8LtzaVGUuBBZzMSMqLGZSkqL8RSuhhh",
  "key8": "4mfWXxXU9tfyDyv39EtXZ9CRAnmMRYQkM8i5W4fg2AmW82PppsjQZLH8L6RLaLAgXUQCYzAvqLbiNAGa2rjFkUrZ",
  "key9": "2PQ8U7Cdphfts75P4mquHmK4mdeiqeA1J7DmYdqwCCP4KZ2LVB1LbpVNqB5nK9Jubva3QC8V39n2kFJv8ojJre21",
  "key10": "3p1TAknqh1daNH9dGziDSAuAPNNA2Zjddn8EqkLpMAHzypfPKLGHUHsZE6NorPjNQ7wF1XLgHiQrq3Vc5ef2M2jG",
  "key11": "2zGFiUQ2yL3U2jG45WYoJ6HJPg5UxyT5u5aB1ynVV9yPpZdWHa4AiaR3q5jonS1BiytT6cFbBSjFhM23MhyJrDLi",
  "key12": "2KFTuvZGFFkwzwEPSGFyXYK6dLTWHKPNXCjV9W6vhHNYr6uzvzRvW2AZTsVVtgjEMJVmAFFfVv8TYc5HA3jEPhmz",
  "key13": "5VyFLFAv2boEEDeLs8FQUPmFNjTZZyhnoRQJYUAxeGrL6ixJtCEQanKkrTZNGGMS3it1dRSx6t67YGQ2vtt7dbo2",
  "key14": "29oi18KPtwSq1PTHvFZaPjHkwoG1Pyz872GWWj1GWWMWFTEauvCD5WceMgDkBpCbzKjyLrC93mXW9EzGuriWbVHQ",
  "key15": "3XeNoUGvMUPnoqkXGMqmQwCAmfhC6h6Jzha8vYPa8cxkhwbhUtjB34mCgMDeHWu3s1GUkRRdREqYqZvaqJ4KtuA9",
  "key16": "4hbRkR8jfsp5RkKe687sHAt5fgLM7dRJhrx7VEHyzs4aDb4hEEZZquybQu5zHZV7SvtPKaZ263vceoPYsY7Drgqn",
  "key17": "4o9M98gYiMs2UG4fx5aDHTsQjeLZEpiWEG7FqYJSLJ8TDhwkvW6rpNyntCnsSwu5rfUnUpWUgRvttokRjRPiAtep",
  "key18": "4grtLUk2SiV49C4JMN4bqUNaJkuUypWaYaGR6shG7bWSdN8By6aNtwhN9aLNyA8my7QJ2LsCw9KBACsR5WFshDSW",
  "key19": "SB9ZmRwDoAb3h1BtcvNiEgDj1o1sGtnCaza5jgR7rk4pfgc3ivKqzh8nqDYoiiyRaZY1uKSHPPvKGj7wiFpQeLX",
  "key20": "V1zuWkFrmtRLFG13Y83Gr6ExZrfjG45KbrHLRoLWed75JPSMr5FUmdNnzh52dHT3JCa6pPrYME7zrEnjdFDkEVV",
  "key21": "5i7dnQPGY76oxwk91BMWzKxWucY59ZqSHwTiu4vSbzjHBhta6KK1h9K17STvK18E2sQtjHnmPs311HUPkt4n6Xhy",
  "key22": "4zkptAYBV1VTBHpx4QdEgiXSKdDMuwHPV3Ps6Y6xzNG9cACUjLfQTh5uUyknFSewVNhg5N5Aef4jeJtniSoN38Vj",
  "key23": "6LruZLfiHnu7TvjxTmbtU6sGgAuKZvjsfq9YxZfZa5oVsDq9nhHZPPU43mybKjJtcuTYgXrexyREAzrQTzkpyju",
  "key24": "3MP38eQ9mLki4MfRSyMgUxZ7f8F1WxzLomQ7DKCGeP7XzimKhGSvGnPT8D9vbWo6p3nNJqwdufovbDcch5mibEhU",
  "key25": "3TAo7aUQJEpzXCwLhsRURYsTRgr5QmRE2jWKTHVYngdndG9UgFpZAZzW1YhdVvg9tSquVAd3yDzfeCYozVEzGkVh",
  "key26": "19vFy2594m7JzduuZyzsopBeyaAjo51NAUF7f1VFFthMKaczuNxYSAXbPqjMenoheYdfFSAyFXYnhNbPkyZ32ms",
  "key27": "3uKpWuu79GPvijYWDQGMZgc4KuGQRSdZEKcvbu3o3UPX8BED2kWwvHV5dA8cX9CSej9uLYJVesrv8mFrSqGdraGv",
  "key28": "4Pyt3yrtf31CAbLc1B9299fqopWT7aWXaQft1Ba3AfcKWzZv3B7y66kxZfWTpLFh3xpSjsnN2kMnHBe73tM6bSkr",
  "key29": "3hk5kLQYtE9utxnrk7D4uRr6D9m1v75Ze1ZLFPkSMFNnf2XwuiuUpGAirT4PWBRufoGcHk199ppg1sjVy5J3SEhB",
  "key30": "2iskDaVV1St8SEXNzpB2piTw9tARLgs2VDAD8Au3uePCQJY3TqqB1DWUBK9aSzbVFqWzBxJXYGLuTABigh8kcDz3",
  "key31": "3Jm867r4AqjM3KFfVdLoHxx8pYw8NoHGJxbt8m4yYNnwMs5FW5RbR3gndbvArfFbLwwJ7MQFvY1jGDCk3At3uMLW",
  "key32": "2ukBtCWFtwfGhHM1tt17CXGf6eTyKzBwUM9oGvVxhpPSNmBgxpKQz8rZFSP9r2dSXKGZuLfDQTY5m6JRNC3vGbEg",
  "key33": "2S3712w6gZYVqeBBzvh3xVJWdr7G36zGy8Pgqx31o4Sv31q3KxTWCjnasU3kYVVM3t954vBf2Zv1xgqo41UWRYDU",
  "key34": "3fjSTGhJUwqA4qXHWm7HeNCojDYkr1CJESt6Jf55gsZaSepn8VooNTYkqaheMaoGQxKa2CkRqqUJhrD1cJy9iQMU",
  "key35": "2kdPD5LNG5qQq4TbrwWGeiu7cAGJe7LRwmEc4dZavLasoADfeEpuZnkTPGfVdRYuMPQDCMohep3L4pGEmNekgQE6",
  "key36": "4YRPGNryrmkmVp3rDrmxmG9crV3S3hfeK5zHuKmBn35zhCgDGVkWR76wJvXVC7nLxaB1SDQspU6nHnUm6MRFxLtw",
  "key37": "57ND3Y24xuhgGCMxiJg6RtypeyoZYJsKMDoTg5PGVJeAkmENcaEXx3PUFQH15bBmbsfrcmyjMe5cCFMRbwNbphQW",
  "key38": "2QJ3drdZgzUfmD9wEjjSaJ9dqb3hCvGMAiLLM9CtdZQQLkcqSkSjWcuAFWNmqTL1NFzMW7pMMabpYy24o99F1HqL",
  "key39": "67TbZXP6oiBeTt8758mpuU2M6u5dzB8ArCVyrNjVxrVNY9QYLt2hZppkpoEXqRBC6U7UPbznNs2k6vJbfDNuyViD",
  "key40": "aV5m4tN7ig3zbcvgvzZ3k2x3cgkwrvkSrQAnju17ms9dHbSauHuc5knCgqivZxnSg8P9KZ1UR8cE83g9xBLUTWW",
  "key41": "51yv3G5YXaGz7vGARmBggGwzujPDSZ54yoFSC3emXufjW8wx7fUU5NQDYwNxVLbt38VQfrokKQGte4fvT3haSNLJ",
  "key42": "h4LFsLphLZH5s2zdSRc22y9YguH8RCPQP7C3Dyd3zDqxkSjSrJoBkm7GJp58GWHLdXoYniFCe8THyefFkZYUe4q",
  "key43": "2nUFvTX6bpm96sjcohHiE8LexuBTYg2uavZ4jho4HD6zhzBbLisFkMSzVSWWKf31Qd8ZWk4BbdF5497gjXab11ai",
  "key44": "DAK9wNFJJQchg9qUF682eZ2u724ZHo8ACg8Wy7r1E8HWX7NJgqLAVz7WEnK6EgzyNSBHcTxt6UVYfwmqD6BEyc3",
  "key45": "A6Gs1iPD7mAVGTfARfUznZPJgmqeBof378jL1vyzF5j4CAdDvc1jyvj1zkeg7VskvViproTrvWzSFjLJK1vrhcS",
  "key46": "hRbF9Q3CDWJvfj7Wnz98jVRsynsAqDa732FT1yYce3U5tovwbdkq9tWQdHr3PLerTVxbTWG4oyPV67PsYiXpAc6",
  "key47": "1Z2R5CDBRFoR7rnXVawBHMQU8BnrK59v8dSzNY4ZDup1e9o6RAdBoWVUEpmTWvEXGEJLDiMFK9Lq9FbvzsbpwDs"
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
