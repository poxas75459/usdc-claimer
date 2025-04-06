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
    "5wjkMD14EQ7pVxsKmkABSvVeT7DSUmP7EixjpUEQpoPmMxFhwPcn5LYkdRzrKkT1KKRcbu1GYbhy8DTRKgBd9kCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWnta34k7AgAExqsBJm5jgYyeQ8pcZJ9Yrxbg3P6q5jdn7DRRmbdZQki5kSsqEzP1NkErqSDmXttk9mCB87VdBH",
  "key1": "2TYBVsvofBux6YCeYSQyeasqYHpbgNcyXQdfTBt12EsMTLDMQGJKASs7ZSLfBspL2Xe8hq3gbctZEpw79rUqB8HH",
  "key2": "3mggsreqeWES19VKsYj8qx23xJH7sFhdJzXv8DpNqQjJ7oYt63oBc3nU1JaRhL56CQpPQYNDuRT9hSpSHgf6w99n",
  "key3": "3wU8W1RT5yKfd3MN2HThcyo47gpB2ef8cexUfjRJCTfhR8uKz8d9tMX99ensekr58KaWHNMdDqzd9LaPNvSG2Hc2",
  "key4": "5RTA8VcPW8k73oR6Xbwdd18rocvv7qFTXx9nZoSt6SDJEN3uZ6M4nXwVvR3XUmkguMEXXHNi4H4AXhj3FZyQ7Mmp",
  "key5": "5yN3z1J4WWxKa4w79FCfAKKKGD9UPAKbxsci9dDUCuk36pHmiJp6ub4yBCqxvD8uSZc3c6fYMZnVAWHPYPS9pe8j",
  "key6": "4EMazQA2S8CQMmYr8VqrXpZyxfDdRSMiVebpLz4KyoX1iNUyhVycSHFxVeZ3QAC2NSnrUhtQqdUShffAegb4ayoJ",
  "key7": "u6t2x3iwoZM6ME6H9XqYidS35EnoFY4tB3mhqXeTUPmYq5k74Lhth1w2KkFZTfBFX41Ae9gXCBZov6WaxC5r4Yg",
  "key8": "GVDoMxfrmTFizSCdbBLgWAez7iBpqSY93EXuYAmQaey8TZDapoyyRopxNqG9KUL5zssoZxevRD2bHicvJpUL73r",
  "key9": "5NWef292n2h8mVeok9khLBGwPTc33BGeWbuN6LuANV1FScgVfTDW9sx3LMu1nWXcZ3xcbWncrPXzDtxq2zP4cKGU",
  "key10": "5V1LkKfuy59X7dQA1NSR51fmxoc9csKA58MgED12jvJ6vRP7W7P1RpCiiUDApVC42NgQNTyudLgm9BqPVGSPWXe2",
  "key11": "uZchqoRHhKos9Pb6m7Z9ZcaE9TVT1BSyRYyf5Z2AtuLUkyWi7KVSe7UC3b6uG5sE81yXq6gUfhbL9k2fxz9jkoN",
  "key12": "WWtVmudVxdCsxc2sSdVSzPH8sFMY21wxiT9rXdsMfFQLw3LXEUSyfwLhvY3s4PjCx7wssJzRZuWesSv15WfYK86",
  "key13": "5aK4vETtUB7eNK6bmtPG8L4cp1V1sr8jbtPDYQkCF7XGo5SLoTGtQ16dmV7QGpEvUQJeGWfEXJ3fnsujRpwpu3YM",
  "key14": "3hYW5sMtBLCAD7hi377P8G9ZtTGFNuUBrpKZEGFpbaULwNF5y9hfqnmNVVfGpzPG8FoV39qL8wH94wSZ5wS2mwCM",
  "key15": "2YdXhfyFXtiCPLQxN3wMZQtLn8CtjnLwvtTtW4bs3vShsPk21QvtJWMMvmWtsZeHKxHvsvHSAKATAapFsjzcJri7",
  "key16": "2S5JZ5BBAga444dhWefz9UkukMFn3grmCsPwPFc9hevkNgMTK3EH6UNgFQy1GVYB43wC91UX7M8axavWEzfEzYJx",
  "key17": "3wesJgrgVwqVDZEFqnu5JoLXnKfLg6yhh4hhJFhmaHZuxagp2um8noeBX2GLCxwBDj2jfMiq7S8tU7BuFFu1MaB5",
  "key18": "7h6Ae4i1Nqg853dABefeZ986bJg2n5rg5cWMZAxyMpxzCXhhtbK5dNyE9swgjjVnHDF4W5BQTeKmgU97fwg8DFm",
  "key19": "5VVPGaFx2YnLwKff9VS1QFB4F1Df3rYPfbge1Epdhj4GC5e3mUw3SNcgvuzDw89cNikvu4z7GAL3DrJBxNkxBz5b",
  "key20": "4J4WwhpEkXDinczXrwM77udnJReze2e3wg4FtL2kJNVcxKgEVywvdAzA67zLazXRumHFrYVt7FCVQTjPaJM8WexX",
  "key21": "3jKxPnT8HTvmYe7fMbFMNvn74ovAQeiXgwn33mVQVf3i4WGtuJXwzUHboaWUDmGTQJU9dZCkUARhvCVEi3Nkeg55",
  "key22": "4LrAUTrKyGwWfj7S2ttLcWga39gYW7UPfGioA4TN1xSSvLGyUTcJoTB7o1mg7zhYyXd7wASVSEzaGYxj6bnTYVtW",
  "key23": "4wzGuNdsYkKsmxSEncD3VkZb5QxQxJzyYCVtvRcztZkUykPPTKv7f8tyYdb54BXfK276UJC4derZZyukPkdoUKQR",
  "key24": "4pDGXtz59VXyij1eQ5MGy1w7reJYxCABUjoQ7xPuAyN52d3SK5Jic7BiSTyJ2TWeQrfZWTCAQD1JeUmjdqHK4g4U",
  "key25": "5Q5nDSpfr97DFKFVZF2JbLz1x9pztqLm7xA2NphVwDWdsvbrr2NY3ePyP2t4SDyvrNFuKZtzNU2PcXSXHzhDzwEM",
  "key26": "BA45cgYrN66fhHX3Ksyt1xfC2FXQxUbuMrmVFqFmiMzqxzeyptwGLeuVCsSnq8aDc98HJ1ENv1GzTEBTnNVfojr",
  "key27": "4Pfbx5wdjoSsxcHif2JqxvNfRzqvATqgHVfy3et34yvk2xe86Hy8RHcAP4mFVzR3SpPasVyn9j4UJpgRParH3XNZ",
  "key28": "3UbPEaayFZ8qmnYZjXLGn81FpLC3nk7HgYwgnGoTC3hfZCs2JW4ktXn7ACk5UWPiVUmK89CnTXNPyLyU1EvsZyLy",
  "key29": "4JZZkjdjFfbiTcLTb4vVomLTNspfsN2BDtnBvczVyc2pnDfQ7BRVr8xT4AgducmCcfg8h35NXybQtKgiUXqb1ohE",
  "key30": "2gEDZNuctseSEVpzCPfmtL73WPAQKRQeYmgcbSmCqdv9woYPenaJssm2JiMFSLeEVhp3BECrpTFijvCeQubB6kGT",
  "key31": "5x6PSfkDAu5D2Pj2h89qUm8imm21YgeaoZHN66XRBjYjV9FCpgkQpMyuF2fyogYUnSGSStKn55e29zKxMuoJHNbb",
  "key32": "3trc7VCcqLn1zsZqFFBHCh5EZE93yMv7EhyZKNvHNuYEzZUq8NWXzKUiHV2MQdGWwgvbUuTGpTtRrFwzMpAyH6ru",
  "key33": "2Kvsz4jdxWtzLZ9HeEidwifnGK6EQvF1TPGd1GxPTcdEBVo9VcbyXLYoTcJZXgb9oU9sf67y3rHLfJ51bS3wuddk",
  "key34": "3YnnoTuWswXdtzro2o2fNoy7zBZ7kCxoPJpaFRMW8REhabBMuLoZzEjjw69GHjgxK1p4rMxjgnofhundmvqQDjk9",
  "key35": "2AgKXgUGNCz31E4FgoBNRj7NWHNKcHNo1VZHhjs9qL3xguE4Kis5iqTJqsjH83rKiBZhViWNZymE5Ss88ZPHobdT",
  "key36": "5kC9mat41yzquz7F8HwYKLFBZDj38EjYBDDMxzWsB6p9HTNbTPdmUpSZQ5T2M43nqPU9cSpisJttxsxKNZRh6gD8",
  "key37": "4u6muRNfLRaNx2zBRb1mcBUCaGeVg4Q6hyi3au4iwt4D7vEmawB5wTx5CpquV1oEaW8rrzKHYfsHsuUvRKBpuafw",
  "key38": "EYr6GPjSzt6dM4ZSq4H63M6JBZkWi9zCP2Cz3d8etPD3Gab7Y3442juCcq2Cb3YnQMAjutZdFFAYzWaTLy3nRm5",
  "key39": "3AcDb3rTjidhzNgVsWJXgbrPzx6wzDVq9hWPWABgtYPzDV65yXHzS2ygaXzAw997Ecqx2keo6xqbSjhZzMhSSfPM",
  "key40": "3KdchTjs9F3uHazDz5NTGNDYsEtLznwBM6T3ySGZBJRr59WerdBuixXykNyKoh9kSWXZZaCRsFs1hUgSLUZeU5rW",
  "key41": "Px8bpB8PM4qhxfWHXTYiM3n1nSGrrrmz1hq2DCQKKHXmrhQit9tL8MXQgbUF1bKgNB8yRTCki7vXu2yGEncbmih",
  "key42": "5fWauL7iFZEVmaKnnDiskhUgQwgwGsMpXhVWe6UuXCxeGhq493ftHiPDSe4eFzVRnNqvGTkoq82aunjS6CH1n6bP"
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
