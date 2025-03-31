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
    "gstCP6her9bYT9SMxR8DSBWSNuAwaLUfqrRv1yfi8XSKPEMvX3EmHi4oPrwxLVbQG84QN6dodHtZvRRuPf1i7bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1cZKkuSnChYsJXwPpm9cevvfsWc2ZStYWrknsNSYfccWPfPL3Zjd8V57byiMLuWGFHJKKHqpr9dv6BAuG4WRtN",
  "key1": "4N1MeFyvNqi5avaP2nL9KN7UsDmThJYabdz7UtKuvwQPUQyv4Roa6NLrw3VAH9UEYbnybtRggVkD5Zd2kHCsBt1Y",
  "key2": "3sAfZ8uS11wqCqpo7FoQQJNGHkKQ6794GLQMwU2WixTVoDvsvsAdQuKgXBWJVtfVCDst5mvLvW1NNmqGXf6bXzTT",
  "key3": "2dCn9mXVgFCdSPmVKCrpaPurxHRCMdt7mrmoiChopn1HpoxzFPb3p3Ya9UtrLUbpaFUCjJSgmQQeRoQB1Dj2rzC1",
  "key4": "2sg2zsKYgZqUVC37gYdTpAoN5sz4hmZJXzfwgaFtTkfNerczrqLrfgHh3D2hLtWBxe5C4d99aX4JDSSs2zsGwENA",
  "key5": "2s3s1WM113FjfKA5mtbUDja4JN6U3NuDWRMGPdcmzZCBMiic16VPpXcRFwjbbegwp7JrNV9dNhLvC4mHYrJnYKnb",
  "key6": "2iihj3ZBFg7BQ3XDV8saKv6MtrhYWqh4XRQLekH4xrHq2KfbsewizyQxEaqKy5PHdWzLou7nz5SwtgkEJ18kpXP6",
  "key7": "3S1PUjYL749XvgzFBYYGsv96rsy3FbaTrFi8ADPwHK2u3Xt5rFrB89uWJpvxAaWaRPwUSWpvM4M1jDixrxbn98vA",
  "key8": "DkdSQAE3vDQD3Dtp5Jvey36BCMQzEtayB4EwNSk2wtqQhHGu1Rnyh1rxwfh9FzCGem7n5WKoEKNuQJheSaGeg86",
  "key9": "KdvRhfwZiMAjJt5Tub4F33kL2sSXyBkMy3moKXe8wrgjxYNAugqxAqZjYvEcrhbSfa46t1c1dBDXB6DDWigAPh3",
  "key10": "3dDay1efULEc78HaAn9AoAsS9CKoTyfFGXaVXdfdWM2bAvaRfSeccKsz2V6KMnAAX4uRmuEzgMzRwuRmPnLUdCm",
  "key11": "5u6k5dxgr3VzcV1cqzfZUUpEddGAhQNDU41fD9B6g6CpXcFhDrAYE9ekGbVeBop74fjyQ6rjp7T8SimcFHYi7cib",
  "key12": "25hHgTQmXncD3h7wBmQL1iWQmahRfVPe7KKmCMpEv8SfNuj6LAaFu8k5wfk7thj4GYaPGzT2oGoRDmTJQNccUr5U",
  "key13": "5zB17QDB7myf1CysqAQhDAQ5vqxTX33T4xaZJsUjMnrpYqwPVh8ZaHNHd4Rb6bJPQ6KxxhYCxzMSdoxDF98MaDcS",
  "key14": "5LKTCcaeqpUKiwqdKNzwWKGSZHbquwGMfGVwztCrbCcWDg7AxRZmd3Bu3Bh5ydEWjJQ6ko6cf7XLd3TKtpQy5Sgm",
  "key15": "2ez4PwzBmpLv1EzCcrVMoVc6qwTUUynezgzzDxD4XeEoe2KVNT4aymhnMth56EnPWtY1o326pj6PSoKCufSzkjRq",
  "key16": "YyBAomRhZnXjLAWUvCf2ZaxPCvKgdwYuco7hYAqjPrx74QeqKp9ycGrFB3H7h26YUf41T8XTiHzwNa27Cq6uhNU",
  "key17": "4bzYUe6UCHCnH84vwChGyupqqgifkPogjuWLqXMRUKdC8KUeEHwrcrXvb3yNTznKcpxXrFW3gHFPNzameVd4MfVy",
  "key18": "5jPwaEFKuYeK2DUZmSQAD6D6fnqBS2HcMFbPxA9oQag9H8X71wLqhkZwe8ZbC4PT9fkEXW82byTxqM5jQYUQEb32",
  "key19": "36VTX19rmQYWzQDD6mKhVYaGXQciyKfo43L4wmX4hpfbQqGWGYsc9qK2hj3YUCd1fBFmJZXETq9mUZhFeFYkNKeK",
  "key20": "4WHBKatekorz9Ve2FbF8zWqDwktF2NnsPkvuyjUY9oG9aYK98f6Z5woy1mP1W1c4EqLwssqZSAs12F6tzxH9H9Ds",
  "key21": "3Y7ZYffuQSRm7McXtYx5g21dyBi9ViEsPixMaoDDEARp4kqqaqASGLDWXqQLTczHEs8eYVKYz8FLRXazBXYgSQc1",
  "key22": "5jtW4YdWTnV4asta5npsCeAZky4aGsKBk4fsXuzP4JKadv3X7AwKZhC67WinLeTzxbRRLb1UStFpquJynbuc2Qd8",
  "key23": "EEoX8sP1bS3ERg6wDbSnx3MCnkmzc8wLqQ8yjuZF5ftF4p25uXKgnxtsCkZ3RFMoK8okpfbLHxBV3iT58sb7f9N",
  "key24": "4aXdncSpJGZxgBdkKxwjPzLFG5F7uvwrnHSzkNARRrVkd4sywmoJZsC3Q1Sia1jL5VfxvNKphNdT4nUuKgPLx3wx",
  "key25": "5nyoHgbpw1xAtdGVX3WQro1Z9aDeB4PKq4AwzY1venWrGyCfXU6124F15tHqgdnSEEjawyUCS81qjb2LECa9bVzb",
  "key26": "2L2aYNJmRYi2rJDc7Chxdsi88iMkmtDyxd8KbtFxEjUrSvzbtopJBp3zKfTg3NhLA7BKSwkbTRd7iMBqSwY655R7",
  "key27": "4i7h9kqvHEX7cQUXXKbidy6yxVrEVEh5AbkJ7D23f4jwgmHHwY1KrXgE9Ku6cGaDBMGoMNXex351Py1LckZkiZcV",
  "key28": "Y3Gy3vha4PAy2AqN1DKNtkonNrbF2AEhFMXUJneYinoe4z3DcVGgGCbxjbDVzKat9CARnB4aKYFz6vyzpJC9P2g",
  "key29": "3a9mBhhVVcd3rUrDwQfDofwZ6S2mvUJ37J1sUWsT6dqbxf2Rr9rcTxsnNUc3HuRzw5ARhukumNWG4RLtKMoeGryQ",
  "key30": "42rPsQn7jiq1KKZy4a88jd8xgjreFvZ3DhctaBi3afp5uTN1sS7nypMz5XC8E2aNT3zEg5VUiVtcz1Y4zph4VJz1",
  "key31": "2GLAmds7Bovqd1ZArqiei8trkBV8KmckTgRR6XorbSNqzeG4od75CxRDhgoaY1hUEfP2wTE7C9grWDtbSnz2XEtJ",
  "key32": "3yGSXGy7tC4rhTXfq78ueGirqX35ErZRf1HJt41dbnuQUXPAtnPsir7teFPSHpHfacHenqCmgRFVNfMYRjsVBXiD",
  "key33": "47LbdUmcxbsGpQKVUekSrUMwCtChm8JSm2wpSfXL3CSJhEV1uQrXNBE6YYTrvEQrTDJcDdbUXKKHBdgAoRK1CphM",
  "key34": "66TvK8qoeAqLr5FBYRGCrfrPrR8hSrBun2Huhs2a23cQNWAuZLfvWPRGWnCLNP2pu3tAfZkPnKszjbQWsxqLk2pV",
  "key35": "dgomz2aVvy4FsQvxUeJtw57obG5jikofgPjnfirpprYZtq8WnEwC8nnyb3m7uZx3h6vyW7ssyqKiBwA36tuS8Lr",
  "key36": "tenhoQKPjwcqUGFLK83ehYJq5T4LWJBffGyLMjMZ86bYuMo22D3Cuw4mCLXo45QZpFWQE6JAgRGQdJLqdUX7x8e",
  "key37": "4Hm734fsdxF2KXSvvGqTxbdhbcAQC2wbLRzCbJAbK7aHJ9S4udLL7ZJsDnnRucwTViaGuJbgy91nkrGLZT8ZGNyR",
  "key38": "2BEkDDMWdVh5oUEhE5Tjt5nbwdJRSZBK21QSJ54Tqbr2pqVwBrxkgd16zq18ckAARsZsd8tTmNXdBmtJxf1bb6jr",
  "key39": "2A7LRBpVXFcqihuhhxFrQDFwf1MTyo1cPnatABG2qsccZvPYoeXTY3BeRumS6QBjrf4AvcG42AhiVRwpViRW2SeS",
  "key40": "5k6Gj463chw7yk3ReR9sSTSAaozLzgYLp4cpLEwNgayNoLtnSMHbRLtUqJupqDuk2Cmh9PfLoKxtaAvpYAcXMp29",
  "key41": "2gv23ZDL7mFMVjpZrp4j6o23SzT5v7c6v5LvadfFh3J17oaUpoQ5w3rbismXaWEqbyeLLdKQPmiwm2Bxprc17JH4",
  "key42": "3f8WcJHQwC7RKLMbkDAt8wh6DW7qUz7wxiJQRrbYm7UFpoExBjesgUAZR4itLx3sF2jvX3dpDwNHidKonpDLikh5",
  "key43": "3Xks5KkPYCa8x9yjE4zNng1djaQ11NmzXBf8G1QCnFpJPquUHqB5bDC85mMRdP1pHp2dSsUhBzCo4jjZ4oxfxDYU",
  "key44": "5C4ycDCe7F6DSUbeWHe3GPQdnNwLkqR3p7dMvQXLa4hYuzP6uizJe4MxZHARDjG2Q5tWG7jczMZgi6EBcvNDw5J5",
  "key45": "4iKaAZFRpRNuaGteomjcSwTdVtp99ictbpuaMy6ukTkPmJFKLVdqUNhS4WEYcJCZcKWWBAsK8T5E4u6DELgRfZQU",
  "key46": "mCcccmMvJUwix9tsjyiS7gismRARgaAbpgkqdwdVBjMeCJr73bwhx3JbUzMr2dQtCPdCkT6LYr3DU5zcsLpFGvC",
  "key47": "rywCw4avd2ZaS1rn9uXhjGc3zpnwavhEUFWfMx7o6ayiB8JLRNYS8csmqbCNgmpVEMoKPoW9oMu8emjj14GTdiW"
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
