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
    "4eDbZuyzY3ibmrVF4YuYuVCQmeddZUXMBjs396ZVFtgffnSjLM2d51p7pnv3NXvGME3VxxXqavV4f3MB6zFWBykp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497pZWDyNBGFK157msutoZtpcJE11CaqGHwakTgnaWtkgeKXQR9NKKM8kCXBYNt5oeRFkK5vMpbUyTyUMZUuj3hE",
  "key1": "25AD8q8hgkpb3iZTiCRYLjpbUohv3CdsNrHrqk6i4SLvZ2jYiWY3ZpYQ2zaNudGMakBTeLNdeFT6qYzJfxCM5qp8",
  "key2": "4ep6GnGoM5wiuoSVcfGR2KiJqW5vMvfastofHjKwtw1h7mNvmjcAcqyMGPTYHkpHypVk4Chf23t7LyfuuXGfhs7p",
  "key3": "2PrQwMRowNKcQ1DNy1czzxJcCUGZ3fpXjH7dkr2GrjCWq3mcY76WuhU87Kx8tWhDzn2jszdoVtwv7q9n9eAMi16F",
  "key4": "35HCRuqqPz11h1cFxyhNt5jZM2hTnv3LA1aBm8UFRSJRzC9Hj49G4fSX8Zf5emC7rYx5Hvdj6A7KmFJ8hYdEF8Jw",
  "key5": "4b2TTHP3zzsja1wsmhK35UU35j9nn8j6QsuutCXfLFXBppqwfQic7ivyHkTEThrGLKQopTWFQHYkxZRGuMjvQDNV",
  "key6": "uKgwzbPxoSCdpBpgJdZL2eTN3oD2cz8pRLXyss8FGGPc7JGqFHiQiLMApgtCa2pCJ4pxp3iUcBP5ctfGMJmNeb9",
  "key7": "36t54hkd7wya1Wa2hAZDTfuNXzouQEkoAKsTyZTUuwmoxiXQ8qWuMXKgZqcdSke6X5D9pzLafnipKxiacn6SkTnd",
  "key8": "2R7xLovZQHxsTraH4zYRMBPaZkEj8KL38gYqN9kQCSWMduMAg7vD7zDAzsBv7FQFBUkwLgYhYoLttiMeekweKrYK",
  "key9": "bJypNruckKxWtqD8deoi1eBkizBtVBowP6V6bd2ASF5QbEVKb3GjRbppbEmYjp1gMidxHyE8iBwPvtwW5RnRjLm",
  "key10": "4CzsABz4qVMzLTLKyU9QoHUoz9eDjuU9Q11W866hAwrZKam5TdD55mhCj2xH844kNhbqWfDXfFNBRckfNEwvMjzJ",
  "key11": "dP5utFaBbpaB98QqKkA7MbSvcpkA219Z3B2nXbT4CyBvSQgNiFTKfSa71HecuPTPSUhpr2AjqMf5m4RMAjEgW26",
  "key12": "ZkJUJuVKmytKx33rzVADzVETQNc9rrSws9ZvcmjTXcoyNvT7MDU6SbXDhSgRTVCEpw2jYM4LqUpdE5otcxRN1EE",
  "key13": "RJJ1ojCeFMimhp13Hb3DmAukoXxGKpeJh7ADdSBagjjGLNa8bSbxkXcv2FF35oof8S6Wsq8V6vR2UfSoyPo8mwd",
  "key14": "jsJPCVh4g8PAFnZvA6M39uc8Xa5Hrs9cbe8cECZ5eEVCr5785z5p9fRULK2gLQjDeRr2MoeBP3CWQUoJvZfEYgK",
  "key15": "44kb82XT3yW5z4wLJ8eABFhgNYupXRSeuQp736yNmaqjuAyP2cDo2is1wgQcFtMzYDJxKiSPq2f1Qcjqcm1kppiJ",
  "key16": "529BQ2KQinK1aJgPfP1AxqEsos2Y92UmqrSCNHkwXhmtwR4Mzrtp18J6kQLCifEo77LLDZqCqHUtuj9S8zfhBHJr",
  "key17": "5s53VM4nKeWpjxTmTBp1QJTRT66P3nE18hBzSezwCSZUbPN6R81KDieeZ1n5x1RiLU4sr3jCCfd7tyZtesxBa3xT",
  "key18": "3BpEZnzznWWmphyYvEBjEfrYGQiaTQUYMpvratDdk2k99voUtTXvixUzVB7DsT8ScCQE8GcbK4eGmPtfqiRP6Gqn",
  "key19": "3mXcDgoFMeWa9a5CKm5pJTyoG1cf9bbHWnbHtEBPFRE9f55A5sMHeu6eRWLqTcdyeE353SRtWvoDim2zGoEiijzD",
  "key20": "4rTZnbCyVjM5Gm1h3hdkwwhhe7HaVjSsa4gr1jK6LcKDDRShvxpY4mM1BEf9dJnpm3XTRJiLRh6JEVFHAZRU2Q2i",
  "key21": "4SAHivpKodU23n6nELHPfQPTScsxyPvnEf3QaTS9w1PbUBzbzEkZy1xA7ecmthNP3oXv8M1zWm6NjBER7xG13xQd",
  "key22": "2M5pM4Cc4iixAYedmjNs7deLkeWb24fF2fuap3TJt9guSBMX86qudxpLW4oYbnKirnLcLL8wF1PmM4xfgSLD1DBk",
  "key23": "25ZPya9YUnjB8xFyqXWGkBovJ8QBtsPunDLHWvGnb1jMKt84hxHvTLtfC3xavhmRKhBXuzrEvS7LHqV88qaBEJG4",
  "key24": "4WU9y74yFckqid278YaH6nCSFd1DA1o2A8qsZh4kSquvq5YC6ND5Z5AFfYkqc8fXx7sNrJi7hJAbT1ce4PAYdfb2",
  "key25": "4wX6g5vwFiYHwNn61eEyTG8KH11zxT6CKHjH3CV2f5zMonmnJERwGb51JU49HYe1wuvCkNnxNZWkUfuXvv7ba3GC",
  "key26": "3Kqh4pkEdvUw1QiA8QtQBmZgK9iH6B4pDkakXMXFQrYDrqRUkZmSzZ3Q3dYr7tHdaCA3FUr3kw6aHp4eNTG6F4wD",
  "key27": "47ZfmhNygnG9nxUXnUP9rFBupZDBeQsDrSGyXV1LorfTbaWvRHyjuFFXYsCKxNSjnNQaVRnboEFv64tzqnpQkrTR",
  "key28": "2UaL2eC4t1fTaT85ZuKhuwqfSP3v96ghvfzRZw1BXM6VthZ2dji53gcDEPqP3LYoTDDByBYBW5isrrnu2qKAcn1n",
  "key29": "4AmH2YcFA4EUbBGm4muhQqWyjvuS6pG18Gc2Dc8oUh4sx33KXe3qCq2KHmoiXSzn3qpJ3hy1YcBLPU7fudxxD5yT",
  "key30": "3G23YnzK5BZC4ouFTxrGAXLLD2A2E6EqhdfdKaMaNbkybiFBpeR1SJkf6UcZg4FaHxwaYm8hUVdwXvQ7jsHmXg2c",
  "key31": "62r1A8XYURp8dLLKVkXF1PKmddSoy9akTwiAz5qBUJxyekx4SrBhFrN8c4eFCyTVNiDvtkMxNa93ofNY2ZVcHbPb",
  "key32": "fgHRqG2Xw1CnCD1jnqkMQ5Gy6kEaasCxvStsxkft3DxPG9GBayqrVK24di9hbJfTfqAAfqsS8tRhntka4yoyJz3",
  "key33": "5152sj9NssGMq8n6Ty2A1nsit5xyN31ueaBrYw4pthSH79aLLPxrLwBQdF8jZYnjGrfV2f9yRFmyNq1xVg7TPrnh",
  "key34": "5cbK7FiBPVJ4ifKypaiFyPPpVxV3FEZfsRqjX8CoNj2ucRtq3MEzAGLGnkVRpwpDGs8DBro44vSovhQfKpQKLTZZ",
  "key35": "3zGuWEebxKtJcuxS1L6cDqAdG8LC1HGeZQHcUPL8zP3o8zTGmgc1AQktG6uH834Br5qcEMJAZ3b6xAfaThTiDWGL",
  "key36": "5wQJfjyNyaXd2aeCidsLfZcgTZMbdtF2vHxggyej3dgKYi2pB9jG7hYv9yeqwpZCRsjrg7E2jQhTWFoBBJzjh3ab",
  "key37": "3rum6ZmqS8fNbJGLh51ULbDNfpEzwunvXYu9obrPMXm9Q48WdkQZ9mbo3dNpzN19Xcfa3ZSsYMXx1upMmUkCUE3F",
  "key38": "2QntqcJ1gfAjzqq4bZe3qLC2gRRjx5GLXvzq6jcFgqP1mvHz3sGEkXgzcn5mPbP77YCybt2wfV5xgcAq48ZgsBJy",
  "key39": "4G3Y7748Je1JJKBVkP3oswDwkQY73rF9LWVkxUjiwxDnUh28Yf1RJuYCC4VD7CU71Gt2AyVocT3t9a7b479uHpBV",
  "key40": "gLUxf5QZhZTDgCdJrgBZWcgu57v5ALys7QevX2o55eUhKd7RZRukr6zpgiHsmN44qtT2gTYu6Rd5hBKSpNmgedU",
  "key41": "5f5zHZm9xXTwxnCLoNe5Y6kh72it51XfYh2hNFYonGP27xu4hQuVUT7Gsuiiom6a2FmJr1vAej9TKbQepVFnoBD9"
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
