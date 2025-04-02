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
    "3kCieUb2ZAXMJ1YSu8VbYbWJAdQn7HawCiwurDdAAPUS9TGXpyyXbuBa2ZKaa1YrvyjiKfZ1EoMMHPvVXCy591Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f84X4QokVTXKL5NZRJHV2MXGhowqVDVj6ieMLAWW8DFtNCgAtRDuS6NN2GoeuGiUg73xpTbw7yod7BRxsgHshAx",
  "key1": "2SHPfyhVgY9VsQiiDmutDMQjSDjQ4cM3sDsG7g83cBzRuFMtBFSKmpuncu171Z2qLeyjr53CWc7t6SDP3oq1nRMf",
  "key2": "SaJHeDD7du98NheWE6HZ17N3Ko5Xzmsn6JeLfCS752S1ZERzGmTt6RhUtQKLgdsj1WFd7VAW5gnwQZGnQM7rFvS",
  "key3": "5F9XMSdRWPT6Ao1mWF8qucsf7HKKkWhEcz7Nv563Ayihuuwg7QQ3vu4wdYxuYM3UyUuM43dpTjfpKLDuXVrcASas",
  "key4": "4UhikiCX6pz9dbWcybhJu3ZZpCNEWFEPq2Xy5uSpHRbm4chT3hmeDytpxQ2dAPqchjTPM6x17EfUZzhpVevt8FVY",
  "key5": "fKSMbVRZzZCe2LhTRmxZcLaTjVQvW3X92XNyBQyUanf3PTb1QHP2kd2fHGPFtpoKGQe7oV55CQCpGzEBAoy763A",
  "key6": "39nR7AGnRHAgMGiwh2Sxds7mL8SKtDwi7rUDJnBtLh5czsrXXvhqjANhMWJ3UA5sFqajGrNEmn9SizR4w8bvtw4d",
  "key7": "d1vh47EeKaGaenwqSL74XfevYwB9mgWLNXK9mYvGYQJEz5mqvnd6VAxHrN2qKEggQ4PBBmPeXb6385ANqYZAY8D",
  "key8": "5RQpg8rzqzYvpbtELqXVncPc2V7Xz61RnRvrnjCmNLSQ1yN1dq2fTAJ2PCjiQqiJ8kBXqQxVvhHv2YY8jY1KkXnP",
  "key9": "GbPkXdHyiYVvrY2vNMRMNzHkcbFAcqbYGhigfMB31bt3TcESwxfdCx6LDtGLpLPDh2bseStf61E4n97UFcfYS75",
  "key10": "4EFG8huLaHfx7qgunjtYzYMgUxKgqkdJpk8L65oUKj4HdoGatoEuTY85dfYGSJXgwzyhKRBDTKmnqeormKbiHEgn",
  "key11": "54XqRg1Kogk7bMqhYq1ga2JaDz5T2UsvCA3pUJgtLCWsVnBx1rkVkabECphWEQ5xK3rgiVi4erohLpWEMAuSVfQQ",
  "key12": "SbHn9HKgMaXTqww96bYY4MGpZGV54p97Cuyn3y5XjNRXbdu7xk5MLsxz3fMHkH4P2YwJkRUjisiFzRK6sjU8Gyn",
  "key13": "4vDSDhPATCf3R2MrYKjUicX2EAdChoWx2R8He3wTqBNApzqQ41fMxeDKrbBZUsQFQptou5G8HgWspD9y1pGd9vr7",
  "key14": "2oCBV9EDwtwhBi5tqXnukVcyGeYAhsxxhARkxZ8jaqwATFjikoqhXm6UNDMkHPX8w79c7xDCQAPcT5UBVyJRyVq9",
  "key15": "HivR6optpZaiuAkPXwPYettdWKFFfNQ1nFx2fjafKcaEaq7Hs45SJ8YCfzhgan43sj65jthDsSygqs3TdoJYfca",
  "key16": "4JnjZbfX72Jb7kxKYvoqeGeX6AbR8nQJCReuscN8E7tDws3qnyGFwQiUV9a14cpBM2vUSaDjUU5LMto4L467FgFi",
  "key17": "2DfVfaHXNwNwGccTe8JfVjuy4WA82YMLh97S6w2PQKMG6dKyzMxWaUoEitoZVaPb5Wmmpr463VFcskUxfPRwj6MM",
  "key18": "5G7FKPJcWb9gDq1Sz4Bb7571svn6o2Uj6S4q5J7AG2PerBvoAoDe153Ey4VhEi1GAB29t5YJth6niTND3aK7WWBk",
  "key19": "4PBQsh3zzei2ttLaXXRJ9yA42PJWs4WrLGWSwxeVfvdhGMn8CKbvArZPM7Pyy59JrV8iWQzipJ3tZfko3ZsccoAd",
  "key20": "5nwb8WjtjH6BX4DCbqV1hEBv52CJ7XrtAaoQWdXDp2EDfnoEXxVcEnio9QMEx9mAQW1R8pgASrGEVL2AswRReQC3",
  "key21": "4bShZV7c3WfNRg3vfH8J9xVLffLTSNbGrjsBx5nQB98194R3oLJxxYfTizN7KusnQBvtfxwz44Xe2maKJW5fc8FL",
  "key22": "5aWAcgNTbnh8YKsXQy6nPUCg6ysvkjMXFoW6vtMbR1KzXcdER9vShistnsftoEcDKqgoUpMEtEGnaLXU3mm9Sgmo",
  "key23": "3bQyBbWn5dHfLMi4xahwY7mNGUC8nzvXq45mMtk3wWoAF6VRbu7y87QwfJxcsPXJWMZY7cvpoG3Ap5oHWiyQAkbi",
  "key24": "4ZuhCaGnbKWJFUpMHvXS9oT47BkBrFj2gbRaBDe59SnpZooV8pU5Le2hzar5zsVjqFxDfqdRM6yJwoBp9RF1QQgV",
  "key25": "47X6HyrBNM9UZDPrjJPM8rr1oZoDxPYdrQh6xcB7UDLvpxsWmPsEjTi9QuVir9EZMnFreBhptzcLT5jbtm736iK3",
  "key26": "32KF7v5VG17Y6UQL8TxtBWXHexbTzNeRR976Hg2futpyxVvKKN7Yt5jNzvc4TFg2za6MJRuGQgAZQznbf94bwYbg",
  "key27": "5DxgKCJ4q7TTsE9cPj9HNF5An7ohrLHkux5qQyy8bgfjBw7p9g1CDoit2hH3u2X5sFGx6DJfbPZSz7vbPQQYXtLU",
  "key28": "UeAwMrLrQgnRD21EdjQFXWWZ7HqhgULS7haXTuee15neWt83CCV3tEnHsTyLZbvybKr8MwgdGzyUUWTXrLAgyLV",
  "key29": "eCbx46hzVjmKtw8bkAmdadahVWS7Px5nWfiCAQ7rzUEyVmNgc6FqgP2TY9jRmVMbSupdkkFAxqEKrdP8zAcRSkA",
  "key30": "3wTLDhiXKJXxysUophyK272eVRjN9Aaqo2JMGLYiQHZV3J7vyd4QYNRwBTSnJULjuXinaE9Tpbvq9C9rzSeP35Uu",
  "key31": "2oKFwCFQyW72oD99psyWS8s5PgBtrVqbbx6DMj3FAbBJ6VUNoYUFDcKBCLFdtqY6jXyfSbdDwWnwBikR8rAZRYXT",
  "key32": "2mg9iepKFVifc66nwSMJbeRoXBs6rAKcx9XnyaZTyC5HQmgbUKjnBzqfPq4LWT6yaHteebVhzWjhR9w1aXrcJfT1",
  "key33": "3EkkipfzZTgxTtX4YF2qSkfK4WGi1NKxZ7zX6ojjCwQrpJv9gqzkms2tBah1cHLUrd7q1LLWUM2i5YVVqTH98W2u",
  "key34": "adCirR2ic99woCFXScFX7mFHp3yKTqD7QGV4AifyKPgHNCdozj67wXGZQTRZH89DYzfEQcPZnkLnhATxwFfLBn4",
  "key35": "5r5MjABNDCdEU1TskCMtkoVuk8nqXsHzqpUSppnfnHmJk9hJUTdj39YWGne3a7DL5BgvK7inAdxJ1sgAuDiZBbPB",
  "key36": "4FF63BTbDb54BwTeSQGVt2g94jeaEQDHjNajV1sKQMr89Tj9rPCBiDm7D6PYx1UhEySXndZGUBBQwNq1CwXCtHhf",
  "key37": "2To9ojsy8W3PEgtRhzUbnM7qwxvjvrwmJNH9w5oQi8NUZp7TLkhTV6uoA9Rf8NanZUPXSvod2BoBsqRXuhnr49xi",
  "key38": "3jEev2rkM6YNR2nuH7JXn5jLRZuZUNmEgFVNUh1ZrbyLhwBoapnWpExQvX3Z7eBr4RRVH3huNHtZWYmAniYLZsdm",
  "key39": "5eewQ1pMEYoijXii7VNSYYBdGoKxZJMiN5A3BayxR9oCK64rQzrVcha9czy3fa2gUeYepghMy8woM5kA8GvyBdMg",
  "key40": "4qHCH85m9mNo2QmWuw8WR5AuncZCLWBUYcgEivjiKGQ2ihHxhaFGbfL1Lxg8qqaUkUHmcoMC24SwnswKApHPmTKd",
  "key41": "4dCmhz1F6zyoHhNDi7r2hwzsXdjosZYj6pf4b7jyTiMzmerEGvNY4q1LjcpFdB4vfaY41URs17voR55j4L1j4weM",
  "key42": "M9dTssEWj9t8EY9SSxSZyMfXRBBPt5ct3tCLf5QREYpE5ibvBCQZEJw1kFiyPjbeYsZQfLiqZGoVRqscpjmTeab"
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
