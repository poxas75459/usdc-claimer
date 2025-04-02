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
    "3aGroPhP9jf8UCz1KE1YfEpHPXksM6Q7BvFyQJJsTQtysDUDFfYH9TBm5ZH6jrqKzevYVingyyU5r6nFxZi6SikN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWM3cE7a8FiuHkFkCSrsK53opPgBQph6DSWiwnv4benGLGBoXZkrXoPqkUjST3q2AkasBSWbfurk3KBsnSCcScn",
  "key1": "3wg7wYQ7HGTn7Ys84i6wxEgZvtMA9cr2rxsBQJUAtya64XW8hZANnGizxT5fpA5Zn6fKWVForqYLJW8cJ3vXoCpM",
  "key2": "4u8eJVw2ewJiD8wmjygWC2XEZfd3smaMMKE6yipZrgt6uqJP6uUZVS5FppkNXUc2DUaZaTKbt72yaPKYyiye7Pcp",
  "key3": "3ebzAJaaNX59fa84NWk2FvEKgdPKZPR9FzjRnLRiJG3Uy38SfPdK9ZmF4JiEqY8ycyZiDvpUkbPYZWkHaDLxhgFS",
  "key4": "3jU4BXmbMvKdxFZZD327pveATkpuK8g43UCHf8m9vssW93xaCse3bKCyPHBn1SZifq8SPi48a5nWpYCoJNPjQ6Le",
  "key5": "5EzgWKhnhkV9JRcfv5FFzvmjEWCNQSKFU31QF36LeFVwr5Cfqeu2GFoKGna6sEniGByDFhy8wvqMAJAFyherVuW1",
  "key6": "HTsJDbLQdrVWaLkFGfUg4TLWqrwbsNfM2btCcfbsBVURHC1yx3zNm4cSvhLaKu7Vt48pNm2pXThTv2hGyRVf4M4",
  "key7": "5nPZWTKnWCp95Lu9V21TTFwhS5dghAzjD9ATYZhGzbQZZRisyFK5buPFCnSCoxnLafhVJ9QRQN4ShvXDedB4U826",
  "key8": "39HR13vAS96sub2LU3vi1Uz5cs4D8HEwGBqWLDEMwYUxiUFHgHkY9ePasksAXcouk8NxF5kSzMsomdVfmGFfT1yc",
  "key9": "2gCYgwfFPyLh13D2jXVg7agwDFLctQNLvawz58eNgV8vmWRHk4j9tssvcKFCCqdMzG94wqSd1kTYge9FHi2SApaS",
  "key10": "TXdhaijBp2KQHzwCNhXtaa5KcjkhGvHnDDzWCm6bjcbdqUs6dJdHRKArBFCSLxq5sE6uHw7PxZPrmHxsuiomzqL",
  "key11": "3Q99mT2npbdsyR5M7B1ABzTtXBnV4quPPGuSxMkTFfqMuck7cFWN8aBJnKpuLRYpEyWBqhe3d2VTB7XDwDH7sY1Z",
  "key12": "66224qyWHRB6PEBH9HJVDH9KSYuorqSn94FRjfmzEQmRkCcyfXZLCAHoi7WPBmueViNqqK3CXSP6q3Vm9rBNKBHD",
  "key13": "2wmzr4hXGf6xwhvJjtZJyzKp1vgVuXiZDHyw7dwoe9A2KEYcxKVAtuykpzMfgZvz18U3rpvD6QCfLBzjDXW5ZUzL",
  "key14": "4HCRHAiUcxNWVzmi8x5NeLALGyMVDef4YeZLLBdEyWnbg7s4uampbtSTxKVx6b39cWKuFP8tggrdMNyQzj71rBzN",
  "key15": "28SWarvwJyY3WzeZXTuvzsfL6t8djSWvjsH9m9ygvvUrCudoqVmpgb4GJSPpRyTdnWZiXExUk1ZbhPj1WdnViVsX",
  "key16": "4ihKmezug74m4cV9RsFvtC97ygRgxrJ9M7EiRdWPV9gamHvyPX24JzSyYbJkXfwqCNAUPdctCnoep7vHVyH3gmMG",
  "key17": "2yah1955Utm9uHzNAGwnQLiwhccTRxca5vCNjhPg4sM75DzxaVs7FtVScYmgcM2mFot35AUs6vN6bQZqQxgutv7f",
  "key18": "FWZ1pkvWr8xiCwgRTghw4Rc3ztyc6E2QcmvW5cpw6meXScAsNVtKNfMozMC5f7jch4iBjLr4mFmjAJPPeJHA1Z9",
  "key19": "5fyqVAJQWA81sTN33Tu4z8fnUztsTF43kvxK6nJLKcrcPuXZjX4nyvNCp6G2cQZgBRdA7jujkhLHZQEXJ1i5JHjh",
  "key20": "4eaDRUkUBNTGNQ53LDS5ccfDmvGmBLPeQJK6DBmARqBPV6YCDUL2UtwRTdj1wfa7mmu4eRBxLemcZEMMzHFQzgXv",
  "key21": "2viEE83dqsuHGrVLDvgnWGy6Sbs4JdHgaovAkTxtrpP89sB6WiEYH3fq39yiLrCFgUTEUiEMJowpLXFZsufZ3FLw",
  "key22": "4XSGQLMwuhQKrbJHcfk8PsaB7uFR5Hzr2T25GxACEU7CLYpYkPzZTByMXKJRNDN7f6crzZVRZL6jpsLR9YHE5SzB",
  "key23": "3q2My6xUSf2LeQvMSeqGfaKAgAPBnWQDcdURtv9wD2xw5TKzXnbKATJW14Z8rqLehnMQARqRyJbFoFehBdUJLsSq",
  "key24": "5Wba5QRzizbXx6Dpotzn91K5HdzbP2TvmQh5TfV5Ry7oRWeRffeH7bYJubGtudBLaunYFxdHXNoJ5JTmm1WYytit",
  "key25": "3cVmzm9UvEWgr8MGAB3LbWRfXPRLbbtSvznY2DeNRFF4JiA2wVUWwXFmWp1fpGX695DcW7hsnrXAWU3QAmqF82va",
  "key26": "4YLmJv5aXDqrZKgaAF8kdbgP5SEqWqtYdrMigGbH72nWFCnUDLa2KXnDVev1FwAfK3QUbDfCRHMMRQXLQQLvVUGF",
  "key27": "2pjh8ZdfYSxzgvsxC8VT39kuRBd7LdCWC6c6EScR7ceWFm77buDv3rds4mGuzW37vxKLuazTURVCBzLsLhzMXjm1",
  "key28": "4YoW9HZvRGDAqmpSUk4n7Pf1dVdkSFy4wLmCWjNXod1V3yNqUw9TxcoNs9eR7E7CmNwGvMi29zJsGif72v4Jb7Zm",
  "key29": "5k9rsy9peUTv8XiRP1tCECRYth9F48zsy62FsoqyJz3pe5RRqtQLXerYMb56Xj98M9qzuSiEK6AoN3ZAanY5VPcd",
  "key30": "3jEH9RUWwx4WkeQ5QcFANTkX2oCbtNyo2nzQzmbN2M6szHzjjrxD6gzXw1x5WJf5eLbzguTFqhVv8h7ps8zLzVXg",
  "key31": "56XLatqPv77RutmKg1jMCktFoBkfTnLNX9zA3wmDzpaY6FTQP4ibZnsbmWHgv1JznUuu6Bgbgpav8PDsPd67aXrY",
  "key32": "613iL1EwKX1VVo592bHJshTjXYS7zdSTyccFBkNYywAtEojfQGk1TdoJ1dF4tGtH1jcueqqZY2TaPAFhnhM7Ggno",
  "key33": "4VDVQseNEKH2R15Lj6sAxMh7wgAwx4EyH6CiDkdFeCzo7aUcHfMpLD1DJbjwLQx1iaNvEoHTGGTSLrZ9D2Jhr1vo",
  "key34": "4siF1JBYpzCAbWnqiX1F2y5f7hhofiZtd2o4eN3NY925kjDEhK4RvVU6HefcE8XFvWXbd5rn7ZCw64zd3jtYVdxj",
  "key35": "3jShBZYx4V5YAykvskw8RvrvmSoGXcTWMt4gRvJMNmgkiWuGJTXCh1pc7zc9VEqbGpx6rPG5NURd9dTGYWAuLVUi",
  "key36": "3Dryv33dF3by8ygh96QZtj4DkAtXDasE7PmsbTR7wHegnT7wc2mALNMLP8WMM5TM7C5j34G21GHz1uSKwJj66sJ3",
  "key37": "5SnmTW2FcYTAE2zL7AXZwoRwXZUVzSYSRqNdT6EiB8UaWPvB8b2Xd5qgbom6qJi12ywyXWnyvUWdYCPvByZ8CFdH",
  "key38": "43f9j6zTWzJ7XemfxzjGuFr4kjqAx6Ns3Z25N8MaCFoukokaWKLMqwsG2nJk5in4i2ENyZR3ZDbCBusjseNPTtRH",
  "key39": "3Zuegkw5pqhszfzrwB8DddhLCFFys2iGsGmHqqzk9pKNMYj4otjPMGdwDdJZAe9kSdkFyYDm7KhYhNr5GTjKQ3GP",
  "key40": "3vE4BDiW1PhJszdqSgHTMrFMoQg83fsEBncvCVrGuXoGHQvTEbVSHJYZnvcmPLFMrhJ3pcc81VMBTvgEBB8dMzfY",
  "key41": "5AsfGsLHS2PtFEugnk3vWP7CRyPPn2amMwM8cLMysfHyGfWCvMp5GNdQ5cGgwhgcjBkXUaWAGxRw64N9n9g1LRmu",
  "key42": "3PjLUqQUTm5x9GaArw2FvK3eJAh7yezfMS82EDLR2xmmLxyiigbYiGhzgzgipmhGY4TiLPQoihY92chkDzpoe7Mg",
  "key43": "TfCvNsTLq6pAfXrLi2JqpwgY3CN4CbBrGkCaKYYgzV4HsWmgpzhSRMArhRxJcn9d7zRnouVsqSiKoaiWNjehz3J",
  "key44": "5eqq3tBA5TcCe331PVyiZPpZa3RtzDKR1mvMZXbyKVueUXSgbh1JKQBSL8FVusBWF37ib1ZTr2EtMGAQ1w2Uds7V",
  "key45": "5zmkqfJYeBbY45MTYFsV2FGS49UfrzRfjbGArh7RnjqBHAL9iE1KGSPmqjfvYdcq3vT91XE8baymBzMByyQoABzu"
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
