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
    "5Wz5m9kAauhByXRLHgMzKJWLzHqbifuGjkDLGy589VDmHBba46gmSnn71YzVi7YhKCibPearDq8znPe49SQ4ogb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xHfqcsLzoUxdvCqUUiy3awLrjqXVRvsCnHBeaQNcpXCebRGq5NevL2E5U8cbDFGbq5MTmfpnkYHghXBjJeVGSQ",
  "key1": "3QpGfN2MRQnFUqrsssoXc9RKSNfgVLN3nfrRiBHn3U4NwfxGUjxvb4XrxBjURJy7UzFeMw1Kz3yhcMvK5pwRnJzC",
  "key2": "2fQKGani6jvCigq86aiGc1gK8wfgdWGp9fNdnV1y7ce4kt15oEWHc7b3YpBgXNEVx22AndE5nBK3ZyTxdoruoeqz",
  "key3": "2GWWAcPsdjo8gaWM64kt6U2vp5owuBP9jui8cds7b4y6p1LXbeNs9oJMUeKWHn9ksxQMfFpW54Sr5SeRaWJkuBnh",
  "key4": "u3AAr95h2VaLXwj911Akibo9QvrYYb91kguzpPLcv6CKNPeY82dDFUb9cfxofYzFQXf5ps7DaoPNupR25yW5sjm",
  "key5": "2Eycud1kR5LFM3wR7wdgFjeBMUjo3Ud8ybvw5rpFhf1BdgfQFyrxLXSfYXD2HsX3i1k28R3NcAcMiJxokkJVvTcx",
  "key6": "WNWcUc2a2sszf6d85aHEeNZqthHpQxKdqx7CgtYwn56nEzShjf3zFcqJQNMKrH5sc5uVdJvUfTcigeu9nCE7hVo",
  "key7": "21sHKPPpx9Tb7KgL84Azf1yBAorMd6hkknV8fsTBHJicWzD1nbMyAv5p6M76Rb6PaRi9LYQUkEdwbRokGSuyyJ52",
  "key8": "4ZuJ6UhBPUjL3s6fuhqCjqQHiPYsNjmXQpHgKfenp1UytRHDDSmxgzQyxJNBoYuh8yWTdnHyqJqbrpftYiDccE3F",
  "key9": "46eUgHFRzcQAzVzxjufgksdsWExs9snF2KJV5KCBT7EiSX7djiuB687wUyts9zg2sobbHMwyRnEWAfaFHNpA7XzU",
  "key10": "5bVhUNrk6RYdHDdFKB3hLpjvPycVWwZaoZkLctXtUuzJENSfnS4ZXM7KuQSfE7NANy8Vh6RXvrteGarwxSk6BtEP",
  "key11": "MhEcW8z7TS61h7cc7299FtBCzNA7sqEnogkSif1DEN3CAjKH9nonT973Wrghcv8HKyR4Q4NR3i5JH4pWtQutDRA",
  "key12": "4a7g2xTLjmisscmRpsLtbAaH27YX3P5oPxrxtafXuCGCHBueNN1qzmcYqpQWnAb72w7qZxbPirNzAvSvKK8gAwws",
  "key13": "2QMCvAXimS1YXSbohFqipGXdAHZLUKXAKSWo8aNuEkoWLeNsqpKa2EXMWS3hjnRs186gBmXLSSwr44jtHE6EPZS8",
  "key14": "4xEsX3jfSRzTNxbPb7ukCW6VwwbDfwNgT1Ni72KJEA7sz1jyakDuAuNKq9F3JgRXyt7sKT9L3fhrXKEmz4DETcbW",
  "key15": "5EsfUy6ScaZqRjR7MMi9GoUHf7Z8LCN7jsx5JoRgfBt4b3Wy3CFjrD6KRK2uWzbdkUz8cGPRFyD8kdPsNyXkujgW",
  "key16": "3k4WjBPzQ2dERYkFRCwASJibqLEbHfmgqkR8ujq3upeKMYEpSsYmDfKivqvDuifnuHz3TKMMazVeXb6ThC9DBXUE",
  "key17": "3ehwrPH7APsQovsrSKmbgJybae8iahoEqq9fCuHhM1zkDVGPXSV3m7UvA9cxGfMwoYMVEQRWYzeVDAZ6tHLw3oJW",
  "key18": "YkjT1QAts4rtMuQ5an8oNko4fSCaYDUyYP2DGUWXni9xfg945X344Csh5KZkaTJYm9wbmA2wodShfSJ56Agygjh",
  "key19": "2pJa8PVw9mq2ZizPrSMUsZFPjitbFyiQfbS99Sygx8SqRxHUMT6ubHYTsDXza6TeeKMXLV3y4ZRiTnkyfEuPNXyp",
  "key20": "2oaUYtx3PUVpGcoYPMYH2AHzpdN8pf3Qb6MocYsUqhEu5JNj7xjWVVggaFRaEQPQQ19GHXZixKPA7FueTJ5RtKr9",
  "key21": "2nDfot3wbyn98xRYMJRjR6V31owwmLb7p6hUabVyss32wYpdiWdPpVn3m7K2o62VebgfJBYcuvKxTRDcio987JTG",
  "key22": "57xC1Ct24NXxzKLaUrbs4Z38UmYLM678DJRxLShKViEqyeCdp7gg6Rwa6SdgoXWBNQge9r5q191DM4pLTq7xHFF2",
  "key23": "4NYk167UGqNhLddf5WQhMXrh3SqR369PzrZaKLfi9xKLFKAW89piJcFBjmuHwSDSDtvvnKj9j6fPpBHB9iNaomjD",
  "key24": "5WywKrdQ3o4yWoy9ymvvpY8FYQHQeHVTCatgagoUTJBCJfb9KnTE3U2CWmsfES9o3yAgiCPQhyJCuaoemDBF1MbZ",
  "key25": "2T2m2p8kW9QUCL9KuUV3vFhAPcamjqtt1jHvkWfAwmU1fRdMWQhk9CqQLv4GdaTUZXBk4F2hYLTwXk2vBBGy43mu",
  "key26": "3RHB1Xf2wzoiMEjPhtJQ6ByzxmYBjiCzE8xp6RBfCKWJKL2o6CmSbQnv13cd91HcQxieFjNEtCqxV2CADe7WmGs4",
  "key27": "2Fp1KcQ9QucfW1ayXSShnM1sgAm33BqbLs3Tt2cNz3L6NdXPgSrxaUJDr9LwtAiSYvXRQB55KnwSSBwj1A6LsmVi",
  "key28": "2kEGj1YYF4nZF21B8jSzychx42TbfTCkY131yxghUSpu7aycZXTi1yA5qqsQ866GoaB9AQvXhmY583KfEE6YMnr7",
  "key29": "4waHcDUkwPCaKSvK6AqS7a1WKdpv8amhXU8orFi5TFwhYYdy8sFg7thtWLnKxt2utqLRhEdkQJqx9gAtxqQQipTz",
  "key30": "3vsXjXpNfdWodD7qrRZdmvEjfGcKkk5BzdC15U4H7sZ4UXaiwdEKquCjjAFsbiDKnpHNZQghLdRqgFnX39BaVzAD",
  "key31": "2BRWYpEkE4C6wuQptb721STRKEiBo7EBpW4LKRCFoKvJocwKwvbY1SCq646wRM6EzZwMMamLAyS7zPruc3Z9pJaN",
  "key32": "3GKKLCGCutZcsnXyXw2iS3xe6TesAQyZ8vM2pHK4DL7xv72Acd2iHEkcB8E8bTDEqVNe7znaC575k27FF2T6poKU",
  "key33": "4p3YsfiYbLwyEtGFxHEceS63UxBmEna1eXPR4wAeAVX9YSZEPJ4udyGzMtJRqWc4NDC1TFzyU1HxgTapdp5tJH2v",
  "key34": "9tmxVwfwXFHLctGVDf8uc7r4tUrptX2ane59PgvFEBnwA9vFRLzgVtoGgBzUT5FF9o87mW1BCS6vviCdJNcAfun",
  "key35": "x3pkCdVD6q3bjTXD3jrqMizUqAr6WT6SEPQkk8HRayFFjzKPawpQEtGVREgMLTfrNUBoLLX2yjjhtWN9K51qWYo",
  "key36": "2hB9BbeRDjmryGQy6uP651GUhQKHXDNsGQdJkwKPmGQqiEr1S1DUQH2LRXr9UWzLN78NV4vB97A9vtMbMTkkCEiQ",
  "key37": "5qKSfrV8uX5Ztt6QGcWt6KoNwL11HqC2UiKjDm3BzQeamo25Ch28mpp1MfCuNjdrG8crsG87GxDKYYxXeU8Ckfae",
  "key38": "3kNQvNCssgLZxqripGWQWW5Uy7ZU4DNtorFrtFYT4G6ZjMCawRwjV5if2rAN8bk5Kzr9juqWuL9v5XnWdxWCm4hm",
  "key39": "26PaKm95MHp1DyKbmEPjhjcBvTCh5akFqtav3pEoAdgd8MNzRofHs5RZqNxcM4kxYAWKMmo4wfA5XpZ5T1ePRoqD",
  "key40": "5DE3GJANAY13zjdrBwJGj8HCSeKc9kV2nD1UhWUjWNU4LpiBPPrYQzFioiZ4PPnttN8A46aLBqKRnEYkfC5crer7",
  "key41": "4ixeYaCSUAgiikavSxoxd1sXqczhinZqFDVJ6whhEs92JnFY5MtygQNG3pNNPD7EyikYkWuGgZGwQFZDMWM9x4jP",
  "key42": "2fZ3jhLqmZ4KGGx8T1rA38NczKuYmg6rbaZkt53GnbhVFdRR99jmd9FSiXUrryxzm3zZfkGiaKtvkSggh4uKxLnP",
  "key43": "3Fia1eBM948EkRkqCcpjGwvNkzAPMUCktRKuP6rWMFAW8G9kFuBzsUKfQ7vU6m33JyC6TZo7BdD3iszw4s6qsjkJ",
  "key44": "3BAawn8uDUDKGPthLDNG4dv7nb3cyyPJvEKfpQBjQ6hfLY1wuMmEYPgNB4Z5Jw2FkDSLsssa3Zqy1WpHfKJZVPT",
  "key45": "5HLQW7qCDfWkdwiLGjGSrgtinHzhjJfHVQHeRpvaayoyLFuLucfGpYvQ5ft73qAJZrT1bYT7GFrGR9PFXZfdixmG",
  "key46": "3KbcpAjpnbWZc97tkAwYwh6MW7835QED49ihSRJLRHpUJQYAdteGdMveUBJTm3mvT9PVFLijXgzqQigGRQ1vrkCc",
  "key47": "RHsMz87hN9CyRHhgSxCtDihqQtoGhTUEfbhkyy4u6PpnvVqsaD2jE5LmJ97MeYGMUKvpoWkM3PWxdsxcEh2TCMt",
  "key48": "4JZRzPY2B5TwxhvBoYz5FKL34FvbuVGkpX6PdpnxEQiLeCruCcV87BamNjmfe6NLJpWmBKG65j7RbTEmkZLseR9q",
  "key49": "9rWxsWaWeHXxd1BZi8CGnyqHTQ5Qv6pny1Y71AX7kNdCdhuEnkUdPgEvGTurSFyoAo4QcTLkPAT5ZzceaqYGzth"
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
