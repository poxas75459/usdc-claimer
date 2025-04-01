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
    "M8gTyFhbPTciFRJbojLY7jM5RLuZdQA9k3jTr1h4fEGUdrWRoQ8YEf9HaKM7HbKg6ijE7irD2JbKwXpmLDqM7hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CvGdZURQkZKu1tmsfXfySANkVWXnCTM7jaYarN1SJhJNESqL7XupGfvKQKx7RghCNbY6LcwhHFyFohuftANkgD5",
  "key1": "2RbBkyDFybUw3hqPGbcVDWmdE6Gx5oRGAVk8AnizaGGpepZBzzwr26tJduXBe4ReNgsaboAHRCu281UZXrQWyL1r",
  "key2": "SZ29dC8KVoCPTBmZK5p5DDRF3mHzXY3AYj5KeZ8n1ifC39SfVeE1a3jHBpzrkJQNvkSctYa7Cz3RFnm5d7ppB8H",
  "key3": "23VawzMRsBMxaJPMEV5uqqzjVAifRLJUNLBqBpo4hRezv7p15dw2o4sA12o3UDWAjDREYyXxgcWEVJ3eR7uRz3Li",
  "key4": "3qqjVKoBnh6XamCd4Q1QZ4WvJ6wJyGVyzueiefeejbYNc4zrsR4vEVYjtiQywTFHXawkqB2obeXd35dHtLX6wwrH",
  "key5": "2ecRayu531ZqJ3cjtrGYdCGWA25c1tQS3NGAUo6JeVvoUj8FVQQuixC5E3wM44dLLQMBc2Hi66Wg4rna9MwvBSZE",
  "key6": "4Lq182v5uhfTZkoqhXxGAH3q47qJ5kpKz6xiqEYrBHZndAXsP212KqFZvwsELbyQrBxhz3DfP6xamVD8M9jBrUm8",
  "key7": "7P8hsnKqAB5vC4vthJYY2q11ubmTHYozEr4EncXWXXmH7PuSeYzzAQRa53mWtLTfNV3Ub8VbAZ7uxcmgat5MPHE",
  "key8": "3AV73c59ejXMKMKLxwAbNSmbkGyEbZdvmXAnT7WyHtc19t88MXaWA7hmSU3tR5g8W3goJBb95knN5ct6bQFimjzK",
  "key9": "5356Ygnivnd2ADL3A75jFi3cbUBPi6yt1hKCmF1VUnAMiVKUY9AWFs9e6YBJ9JJZGTBMZHjq1TyL9bD39EssxRrS",
  "key10": "2R7nD2yyNTJqdKtGxj9mWtTQpG3Q7u9pnsmzKa3TZ5hC8dn5eNBucBPXggC7fYRAfWiUi1hiZaepi7YeErfR7Boi",
  "key11": "4JTB8nhhTXWh5xSjzwbADKRuLXMMmTDpqnLhUaqU83ubX3js3kn8r4m6JzTPU2m5h2DVUCFx7cUyEeRkM1q2BFaU",
  "key12": "37Jp816kTbapfmtWD1cZbjBW66wbDtcaK7gvMGFUZpWtgXNCm49UBzsJs28uMJTE34ErC5Dy7bbBRgbXmLEp7h7u",
  "key13": "25FDnJWxzrcMxhkFSDXTBRFrUpHDRcnTEgSWgbsjnVHSgkGnrzgBFX9uqe8zXzyo5D1v6XJguLLvdEH4B9LaF8ba",
  "key14": "51qcwV8xt7Bo1rTiE37cAfAHdRgZMVeFTK1obCoQeBd6NXw3PBa8sRGXYyznxvq32mAqjPJCKEiPpyGV6QALLKpX",
  "key15": "3awZfvFV15p1pTa9RBcaRS13V3hrCEDBr1cyjZ8SRLffdvdr7NuL4XZonaHbyKP1jj5R5a4CJLVi3362R6w5RG88",
  "key16": "4YGi7T49mRYQjR9dAF7wvg9PsQXd9YpZVSdbSzAN92YzgyFtKCbzRj4LBR7Hgv4i875KefQA3e8Mu2Qcei9HhYG8",
  "key17": "45Vmc2gxha3MXWDGhgYrSs14h7eQSWL1khryCzWHz6AdJpa8VSjGaFVCgRoWihG6Ey7JHSqLfy2o3YU9p97ndhHp",
  "key18": "ivKmd9KC2iqrUEbUVndiceveShpmmyVgmDR6qSHx6bRdNGFwoMfzcqxvJ8sHWcRyJuYiLYJAtTQY82M9ozsurCt",
  "key19": "4LUPLAT41UaeLNiRP1zUuJWyvojDebTAVyWXvBhxPoYLF1Kv4zVGSfDrQyEst1ehSLcVknqCTYw9XwdGeuUfoC6b",
  "key20": "4QQMscaoTnxYxqYVLbeDhWEaj3ef37ZujC9BWKXgv4T8C2WfsGwnaHjaUk11tPgVMYuSYgFWpLeQcG3jAuMzrt59",
  "key21": "2ANrZN3LWzvyo28YWY8J5vaoNkhd7kuDsqPCQNbaPrTiCEppNfAHcuA5jeurGRYB3KTv4YCimkJgvhqLDHmu8MeL",
  "key22": "2Z1jJqVKF92pF9adfqAzbiziBVuwnUyX8c4gVwj1oMQQrBs4NUyjaJ1cdpCQDfuBcCZGzEE9vrvH6GzJBstGcEvp",
  "key23": "4KrkdvJXLMbKv6M13TuwS6xNDGSsmkwyyorcx98Dj12s9hp9S2s8X36BXnzVMfjZPSzejbvaqtNcEu1f8P94Pttz",
  "key24": "3K5uypKz7whEKwUxP1r1GLAK3N9uvMmnnRPtMDE4aXW6CaLyFpbMBkAAauoxrPNncd6x9CtfENYGyGMBwUSRCAEN",
  "key25": "xDUizdQNwCjtBfZnrXGtDwVoWsQMA7iQyJNsJCS5QkkU9NoTtG75mp12y4U6SBayyqnZaPfDvApmvTp86UP2ZmX",
  "key26": "48jRtg38giB5uNiHA7LXyzmMR9xN5QgEdyEmbZgHMHTJ23GPRMgVvBULrRhdzHjWnJfricdnVQV7RcipPf2rZ3FS",
  "key27": "rP9wf1nZ6HeMim2g1i8KN3wc2e2GWCKJtHuvSaacgftp9i2aDTmSwesskQChf4TEJB5GMA6stSQN3151ZBqfJkt",
  "key28": "3MPujVCEY9LFRS96rZnd8JXp8sKhGUZWi3fRRYb7USrbZQ3zRsSaZSj7DRYxd5bkGTMVtbaDYtJSZo2pfWQtRno2",
  "key29": "58eLmdiGHNt4KDoLxyAAN4nSx89PYDV8MBERdVLj9bQnyb339P2mCVuH7Lqq8UtE3MoWySnwEC5TRKuS8sn2ysQM",
  "key30": "cenvwvpymUwWumoL5CR2snJUVUdv8zUju9cMB1NhX1yS4x6rwtsktLxD5FG9ZsDnZG9Stc92fyMSjNYhEiMrr7j",
  "key31": "2MKLpgnomFsGdceFASma7PAE4qLo9WikgWB4Z8ZB4cMpivJ8bjJHCsrDNUmYqmYHoAxNaRRumbNAqeV2peohRn2H",
  "key32": "2fQVxci6sap4jqE4CQi78RDPHxPW5t4mYuJcZp7AA6Ghe97FbQyB8WiT1shVbqfTvxFM7Tb98G3RLRjyw2CmQxf1",
  "key33": "2fyZcEipsWgepJeG65mguxpurWA6qvDZs3XrSa3SepFWQpQuNgNPBzQNkET3C4NZHfdGjnjDNnV3YxEDk45cqK6r",
  "key34": "4RrLwnDGGPuFRtkvYQWP7HapU9zoP5icNSaLyzoGjR4e3Xsuhxg2dtjWxT9LoXjscdQaEqgAyTgxWZXxxM2M7yt5",
  "key35": "4qJYVZoSt2VvadSa3n4rnLT9qd7PXbYL5KcyS1eoH3J87pPWqsb993UWo5W8fJ6BngRh2pAWTSMk6GM5SgVbuDpo",
  "key36": "48jsTCXnQUfmgcVs9ZdF6Q9rc7voJz8JDwpxvBRPVgKFgsH6Bn5igQ5prG3P8EejsHSE1HufUzxh4hiqxDUN1cPY",
  "key37": "CEH15L5SE9xGqeR262VH6TxTTFnoysgVYw1s7HUPZox4WZgY8bNf2ZjKGCiz6PmBhf5UztZzKAtxocmZPuFKyqk",
  "key38": "4YphdZ7WFcTa4pa9TyJQuzSPDA3shX9dAuwUsNxU9qZKHY7jqDCW3qCk77arobNXLD9gfannwsv1QhGMZwjq11SL",
  "key39": "2xFnpwHenKzfeLzvksEPHhWRZmVfF2BxfqHAqz8TKH2utpK9zUYUE3RQPK45GQhd86ZkDtKMxHH2x2X91HfRTVBd",
  "key40": "2KYsXFbSwE4H4FVUWyiWb9XrxRMGsuqqSz8akbBsEvyn8xKrr3YseNVVRKJVxgcT5UinvaXUNdAay8orFBfUAk1A",
  "key41": "4ozjfFqDd1wsyLt7Xrr6ZjhEysgYbdpTzBjXZYKBZPeNNunih9U3Vuz3X7rfcjuTAdPzCoUFxzApeyje777cgXtS"
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
