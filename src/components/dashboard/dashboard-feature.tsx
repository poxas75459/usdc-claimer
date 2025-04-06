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
    "RgDFJkBT8BXuLSbZtkwghDQVXQQA7qN1k1kcbSdxuNbsfKxFcgpVyKTXFjjJvKgRc7Ebis1Bp9VMHj7t67E1Gvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iGLikrP4mYB2ztzCtdp9kq9ZR6LtenLFvwoy8zb3fHSmdNJSzWrSHr2mBZKEewfpK5VdWV1LMHqotteJKa23o7",
  "key1": "bvEotfjwsSr5rE5S9HuXLNeR3pSfsJJ1h9bzNmCVBSw16YBDUuvzQZGkzMiMMFVGfSpcXiJuVV3c8KV6t2KxR7x",
  "key2": "5KYQMzqLGS7h6Gg93skRRiHEPq3tJjwCJPo8dT5VHisfqyKBXH73mMoxZD3KjfMkfNr93ERqCxVE7yJFxXJ5VZfx",
  "key3": "61BQszXXAmPGggXMsDUmNe4y48MfWjxM2BQ5uW1iVopDBqWGxFfKnQcqgSSWAQca27xTd34S1sRY1v9X4qAWfSf8",
  "key4": "4Pk6ztvKe1mdXa58zkP28hr6HYi22rhjkWvRjJQF4FnXUnh4FHpqeoWsDCK7vG6NYWVCnzTNLEAe8ho6ZUT7CYaQ",
  "key5": "4Rcy5TahbDZM7HaTLu9z9v9oou7cyyV5NCNgpZz2gmumHtapkUQ58Smz8yAEABUty7Zjk8e4CjaJiqGHkQkxGJp4",
  "key6": "62fsKgXw4keycMHyXPYQky7qbLfZdGSah6t9KpryTshe8ByfzK5Qw9sgFakT13DLwSEMcmpPumzwWnpbdHh7BWCU",
  "key7": "4CofrwWf9H6Rzg5cMMvm2S5wz1Rcii1XRS7F4iBbTHfF4PuzRHehTUWuzwEPpACkxqJJeoHL3foKpvYXg1nCM634",
  "key8": "2f3MRsN3or7bVgLXJrvPZSgXT1d8WZf4WWw1ZtHRcpzbR3hLS6BftAzNVcZ3JXZPidPyQh1iBRbPph2DRApGZpeu",
  "key9": "4DA5AxkvkEcNVMQ94yDopWifSK4K8RfJQ4KGwk6r9DRnTLUGXm3QxRUGWS4qmD9DL6Czf2otEWu9hkW21oxY1Pgq",
  "key10": "2vUMKfaFK366RqtAbCRzVpeaQqmHUKcmjpYjHvGbtdtYE4L5PFAUE97Fid86K7EN8KeiXS51DjDGKdMorAAVhFnp",
  "key11": "2VdymvpBwfru1PvKn6shCGSV76qcvw83BVW9LgVG5Br4UgTAQwFkTy63RWLCV5HuBGUET2GkY7c6epbvh64T3wPB",
  "key12": "3d6VUrNKDsmHMvrxt4PaufvWmpXkCTeFLJLtSkgkRZzw4bGVsvVLZAtrd1JvxhhzJztfd6CQgTnEKM695FPQY2jW",
  "key13": "5bDuSgymgvyKiKbDo62p49HYjH9qNRQpkBmkfH4L4Hfy14KEdJeWq4pvPJnaeow38oEzjCjEqtNdzp5LPrSkx5hr",
  "key14": "42BSm9bRyNsYLZ98tEksFWG4bAdGCucHVg7HEwRSWXQPvZHqnvv6jPQRY7UPyKtuScUy6hkkMFLp2Ej8ZyHaKkXJ",
  "key15": "2ys2uXeMDwkmJtPyzv9uvAnJNSiGrfSnTnvHiheiq6jRcoiED93YhUXmwtYohuDLdBAaeR2p1Pwe9Vz8ozGHfhnp",
  "key16": "4KjmqEaikKz31G6LhEYEESsc4Pcj78FbdCv8EpY7t61GAbkxETzHjmHha2otcKTivrnfPWU3XkZz78Ewz8Ghk1nx",
  "key17": "5R2U89wkHtFk8J8rMrxv1xsVTPTs4XKu4WUZs9JDJxkPGEkC3Gr3Tz7CBfXth1toQUJ12P7nhwKDeqrkpspS5Mhd",
  "key18": "CEWUqSCXAAZJdJ1GFFWV6TxCavapnbFQN7VZRbMznN5iWJaou8wHZMR1zMBo8Zx5kiQMcfEGghp6yLtWTXDVq3p",
  "key19": "5e9PXnTZmzgja7QAM4mLv52TkmU2RmNE2Z5M4QAfWqiw2mMHa7gj1KtBKKgZ3YpNEEXUMrzXQXnoobvK3n6W2gQW",
  "key20": "37rgrnHZLJEZksNtExuhMKrWmbQ2LU5Xoy94UMsgvjfaHTerPfYnooNsTofXH9sA3ZVaTcnmRVCTQja4vF3H2A7M",
  "key21": "RH4j9y3SkTj3yykvf4Rd1zZJyRUqUpcX1hZGJpzEQ4Rh5wWzsjUwtBEY4MSyMLrrkBAUGFyhXAPLerQgCvSsByu",
  "key22": "2drMN47RZjsXYsWhRhhAEYMfMJPkuBECikHNrbX7DnuGXRiKXqKnry9xoBGGWUi5NDyKUYHYG3yZB3yb6Tq5L5b3",
  "key23": "49wZeng4NvUXj3yzP6XZq4vUegdNHBURPmmdb7MJUB5tQh8KffnQXjeaEFVKotZw5xUa9zvWr1Nkfng7TdMfL44p",
  "key24": "677VHPyJFN8TaCgBX9YJjEhdR9dx7w6uXr1jeDKpBR2weTwNpm8eDckgYof4B7EkHGYZaCppEnPfhbavUJPRtxa5",
  "key25": "hFCm6XxXtgnPDsKbdTcncRVpiAH1C42kmawX1RidJ31TqvFxLbA16jqMcJss4zpVe6gdE1j4oDLPUUK6EEEGAub",
  "key26": "4doFwu2SFjW5VusznQZCq5aReF4jaHCJNEyxU8Sw44Yn5x8EA17bqj2wGQeP5AfA2kVxWPNqDYgTnyaVrijJYHYi",
  "key27": "JAFTHy9KbdZiHTcbdyAY52jJvx6KdA2dDYhTgthBrZL9FfVEP97wff26JGvqybMD4uNFz2da3yYtXUkzPJ3nvD1",
  "key28": "32vWnpwKn22RhUi1XJDp7DAFi1ELJUf4BuT458AxdFbs9v4CYbar2yjLnKHBFb7Y6tJ3jnTJ7Gytu91m4tiTvF4J",
  "key29": "4FexuLPdUb47NkVGgMDmU1CnSW5cJY4CzH51vA26xK4sSgWJ9GeUo7VX2uUjxJND8dL96PdJJ3rm9idf7DFUkcT1",
  "key30": "2BPGFSbB5S5yaz9Kv9hgoBeuvdx8Uf5dNxag5gU529beLnmcgUr6W9bfAM5tV11fjkXfyWshkhee6PzDDGuLNnHo",
  "key31": "5HqwPCNKY6k1RQpxV9DbT885ifufhpyJ6sWuTAXdPPLGyYXLPjAZPu5i8iLUtGY6GByzmoMgLAjXZmYF7tfWYzcF",
  "key32": "5tjJNNQwq325RWY6xsGScSNgXZPJf5oTpUt3JeHiv2FWBrdKPDu8F2so8Mporqe48oPsHntK1dGuGL6FGsi1TPKD",
  "key33": "2P93oabLLgMdWjFeD5Fp6kMjQjbSdR7ySmA3BP7nb9ouSta6jvw7GCqxAUPFNuyQZa2jHWQAEbp2JNmEG1t9JsGG",
  "key34": "39TpKekRUbdMNT1kKAiMLy7NqVpKEits7aeNuPDAsGV5D15CjvhrGSFNKpBJpWRdGMq7mJYgGNebH4JxmrcD4AyV",
  "key35": "49wKLSttmXrvupZ8oV91tcTESKZ4gtnf3mU4agfaKQ7RK85eUjyEW3xEkEMCGggygB5JMvwjMEpzrKJzVeasVqam",
  "key36": "3A3kgND31EwqnAK3pG8defGG8A54TgFyXWV5cWnrsNEwcxb4iJSWipgJvCbKi9XMLHKLfjsTopZsH7jvGy2KSezJ",
  "key37": "4KD9R2gBrFJhTLJVEVqgzRirwaVafoeb5kYFSxqfrtkau3F7r9jFPHrE4Wb3H46rB5YArWTGpEVTMQTCmDDuYaRs",
  "key38": "5K86n3qLAWZ2ceu6QFJxraNJ8ZocirdNxkTdJwhZX9RhwK7yWH4GMLhhE6eEmGuo3c3WQK8NoCaAe3Rr2q9w3xVf",
  "key39": "3nwVj7RvjLGczgAV3RiKns6UWxcWbFgefE19XW1njXuEK12dVMDgGJoWYjNGGdmeesywiGEdYLWqPYFunnWSVY7P",
  "key40": "sD2h5b9cu5JUCrDaNncC8sdermFxjdsxbh3BBYsdWrZodM2cGciZs4VXbtyBQQsvYoqBrd9FSH2BFYyL6SDgQ5C",
  "key41": "4m2tMYb683guNg9iDNxbjxVGiZGmN5rL8kNwHxp2bjjDQAavxZM6tyYR8y9Z7CKvVSG3omk6Vfvtdu4jntWWdX4s"
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
