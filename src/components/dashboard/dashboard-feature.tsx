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
    "5LZoWyTkehpTC9di9ttoFyMQeFf4LBPrBu5RgVxhxUU2G9qUkmG2xiLs4PTmYwkcbpKQc1orbPZVWAiqDsn8goZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSVeJheLB3b8grV9fQvk2nKdAZEewrKWGY86JzMRheiJz86ZNvTcwJhe4mkawAVHAUGxwU2DtPWWNDju3XcQTBT",
  "key1": "3XtK8r4b11b6YXkroREPCYsAGnMtBkHt6UuDaFbaPAYs1S9uta7nw1nKtgh4ErKgsbbqZanHThDdBmgDWXff5wtG",
  "key2": "35SSHRN5sTgfNPGmjwQDeZtSyqYVNxKUwYXZawVcogf2f1QMDCSwsmY9ti7Woi2SkuWTKQYpkGW286F6vcxkDXvk",
  "key3": "4Dh4XDyvMZwug87G71MHPH9wbKJzFwrd89EqcVq2KmNjqafxox8eMAcevbDrtzZH3HpSUKbLryCAvD98MPNWFZ7N",
  "key4": "3aFVfMoQweWrCFRmbjwtSPEjuSEys18SMJtxkFpu6hncuAPXr4wiBJ8WM2UuU6yEnhgCQiiynt5fvJ51m1mN8KrS",
  "key5": "yzHzybC5EKkAuARqyvVHffvW8Zqq9wy4jK8tJqQhzr1N2MEUjsBPm4KQdqBCNgjWo6HvAreY23bz5vSyA6hecDK",
  "key6": "5Cz28uL5hhEAogeYHJKvrt7rSp846CqUEwtLBEm5TtyfQuxSyWuuu4ejZQFzeVZvpCCpqUpRp7fYmRG9w4TjNhcs",
  "key7": "5xPz5ZpWRts6WGJpJxT2bwWasQ5yesxzqdYwzFJ79Yxxne9qRyW7RhXnrFdGVj92Az9NNvxbW3rKeNmKdVmoNudy",
  "key8": "kqC7muavzkFmR3x8UyWztFPgN9Yi4GGAxoGzBWNjnuBZA7QAqUx5Bn4xacfrpbpEWn1i7KDP7hTktAitxcvW3L4",
  "key9": "5Qjf3XtVny1gKpmcenz11aBrmbLRUqScsAPvYhw41VmDPn7Xpkyt4kowci35GfMGdBd5XwhcmWdocYZGmtsPkh6t",
  "key10": "4y6HkikyYA1DrRZhuhyx5qF3EQ1mB4TYwhfiD7eMa6unuaXBqVYXXPuLPF87i7rSQbU3RJMDbtpkakopVJC8ZUqh",
  "key11": "5C7S17Y45MR1AHnFgo8Vc8EHYob6puUsyPr3hsnAppYV3BXHKQh6955fBKoG5qC19WWJDjrQ3iviAGeTbodkfnnQ",
  "key12": "3kstYJqXXMypPeftj12hU2YZnuZShDPabkeUkUYmZ37475cxn2tV2c4PHPGs27HGZC3RBH5JjrM2jgUfxg6ibcE9",
  "key13": "4GTNwi2uu8k1EUP1RtaSqf2zKbvRweZEZDxnemV1UjEgGu6ANNfS7zLZdPP2BdSGCVwSG5m3rL6KbrqDQRuuACwC",
  "key14": "3YddJvjrJADXSy7tfCmD3pK9PEoN3xA6ZWjvdbCEuRULAg5WZxasJ3vZHzAFK6jXkkFGmU4ncBSEdJWB9DsqpFDk",
  "key15": "4E58rZvQPeXiqQt9bzNemuDyRu4XiT13GqgqQke6D5b7mP6pgiN2w397b8KNg3GqmEyPuRcyfWC5U4AXq1Waj3f1",
  "key16": "54cXZjFz5aFufbYfxnUFaBfkWbJz3XfFHo5cBNgPpPUBxcibdTX3u4LyMnZJW7mXRruqzfrmnqAA97frqFSsh7F5",
  "key17": "5csQX4VAWVHM4MZ4AqXugnFjhJvXXqUP2ZcBTHDQ4fZU7wrDDqoAyHpg89wGk6nCcPLH9PsAhycRjPiyA4NBxXy3",
  "key18": "5WChge4J6eDyvXDZia9vMXQxRG96bSgGJgwo4omB4njU6qh8tHpLcQURC5pnfPbvHDddWxSsFRXwMvdmqiGLXxoC",
  "key19": "2JKahhmVsrGQKvdn5hK8Nstr92VnWQ8GywWWA15APXBjEcyxRamyiD4FoLvfFAM5DjWX9wg8BWmD4byi5WjHBQv9",
  "key20": "65TETcDrSdLqEddejAQYYMmC7f18PrnTwp6QqStPxVu1wBZxwcMvQZNsJUNDpwUrXAgNJL3iwJe1C1WgeVd6PxdS",
  "key21": "4ujVo5H9JNhFcaxazzgQBtRyJr51RfzSpVHGphfEKtbWYrkjL6MEY4LWiUfhbdvNQmqn8BRUcLe9KPyBeYHPsSkM",
  "key22": "GrCeLiRivw4S9rCt1Ldu9vHfowPYzEPMj537LfurSvBkDvdX324DPbhmbdXRK7XUGHEZ8oSH6gHEZjcVjFMsykf",
  "key23": "rXTDdeLdjwLUobcoJYSnmzwxf8DRLMQGh7jbnLpqBZcxhtaupqQCWm8fJAPhw4VxqM9bvXnc6oUiTag9mntpntN",
  "key24": "5pxjF7vEgG4a4xKL5zyXU6k9djCogihBNUcT2sZjJrhoLQDxzJdkDwuoyHSHCdeZNaQ3yCdMq7xMdPFbrDwuUNyo",
  "key25": "fDnLvJzg23hYKs1Smv9iawWpa689N7EpXCABNdJYsUQqaHwg9txpCnP6LJkKoTTmGMXNTdiBr9j1Y1irFsBu65Y",
  "key26": "3oYZ26JZ3Ue5dZdpBZGaeZL81q54fft8eqFtnKfziBnasSXzLKef7MFvJWMSQbJJ765PEzUUmoVJbSKAWDgxDDcG",
  "key27": "3dX8DDA78wHC9Q164dABwoVoAV99Pjx5X1g8Rz7usw3NbY8ar5ovw1GDXW5uHyE2EsR2NjMs5rz53HCAh5f3txNY",
  "key28": "2rG98TLqXhsca2XN83Ku9rK13PHeduTVV7ht3oqyKBnFLxe9FNsznTiEH4SoY8wcCB9PQx39Cbo1ye15rxX8T9bC",
  "key29": "5UfZmVTda6SLmSmY5U9u3xpyogynAAWvtKCuwhnJhncXMv6BEQwbwoEjmaLhJfChZvfZYUdo9hJzc3VWSxu5uAjs",
  "key30": "gUo77q6C7eDDGLfxxQcMYQGWoYSTgK4n8nQnKcLBZqLWzka9jmumA34uMFJtA33ExoqEZ91f82LAERXz7x4r9Hc",
  "key31": "3Bc5M66bqnevZPq3anvAX1uF9AGGvU47kcN1RzobYSXtp2uuPuFdchnXrZH17fWc8XHysbs754PCtkAjeLAvmrFp"
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
