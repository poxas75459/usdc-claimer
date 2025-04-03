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
    "ec5rF1oRghV9BmiavB7BnVjYtHWzr8Sw6ANv9yQyK1kXyiGGmHGsvMWy7xjXNVMxeWYQmQZqutNpwkLqHv8GsRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4ftmzGsGncbNTHjHV81nvNXz168ANa8ejHFTCep6bjvoCkGDGYmkAeyhFzRZXYmSF6R4SAAz4T3wVxRxugEn3L",
  "key1": "64EkZqxoyVC83tUNCiotrvd139AqfXEULXeKWD1zWNj5wkEgRvioJug2QS3k2b2G46rcREDqXn6bpSRsix2RBSXT",
  "key2": "ungPfw6tDJbAVdZrmmZTruXMT5FTGcqhnxBEExVm6aXRS13LBYF256FQpoZFgwo5NFYemR2RscHcy1BEpQ9PgYi",
  "key3": "4JayknNU2EqPLUqCEdsTBqSfsiZqxZcvtr1Fo1Znx8ob3bUt5m19R7iiQ3NePPfVnjsATKmhDnQKBnYcvT9o3DJA",
  "key4": "5p7chBhMB69DZHTKGEXceQb3aXL7gNe75zmZ4JdWaxtMEFucSED9TzijhEfA87bnqC2oEBK7CktFpP7q8nopjmYy",
  "key5": "9ZUNxpQ1uGobh9mizeyaBxshF53GsdjZfD9S75hUAa6ZGH3JaeGA96cYhBAj9wshzsBQFZQVZyUcpZNSwJRgWcb",
  "key6": "3pMt9R8JjstHjswcHimXEBK8fWBae3dsiHPgiMnzfsPsozh8oyf3CAXojs2gQPTBmTocKWqJwM832sdoucVghgbA",
  "key7": "7Efu5H8cMbxMxyJpEHNGedQ8mZYzGmRNdkb3qUfed8ZkhYLVe9HVC8GF5JsXJCRPvCfin4seHmv5wsJFH3Tquqy",
  "key8": "pbcVxiwnXKFz7YK6CqkNRm7DM2fJQEBSDbgyCPMdZwKfqMnBu6YYJ2j8rsP1BFqQypUU99tGMxEao91pfDaMHkt",
  "key9": "4ZZL5HP8FHVx9mg5cZk6v8vfB73aGeUywcJjMRMfg1itMAhVEhBsUNp2Ee5Wj5GHfDtzPUVaSK4qkPMSCudLStgN",
  "key10": "5SSspRZSNFjVpsq4GYiLZPSJrUyLRihGzT5mNnjCJxpYpg9GKAcYRLjT4CDJqhXLmKsvWX43WDr5yBxwqt6aBo8n",
  "key11": "5dmzNdABA2JCok1YdXGRrjbSfLyt8maub3agjErFwSvF6QKHDjfmwbLoGaXqkVu14iuFmFvNmh9CWBaPKTF1yV8Z",
  "key12": "SG6gD1PC2UPzW6Y21KLPJTbESsQoSfgRikJ2tXbdkHFvZ5sDjGhEhFgxuxGT8XTvJSzgy2u1N6tmpJmtKZSnVDS",
  "key13": "KkLqJHMibGVomjtgcQ8mAYDNf4fFiZvpa7DG6CQys3LZkvxzavMgtTBsLRKeD7V3F4ruwYgcfd3mU86aTthoFt2",
  "key14": "2SJRTaX9TV4HGboVF1VZncXqFA75KZZgv9hhFafNZmceqchcAMNkbn7cbWbQ69WajZt1rLBzUhVzkwBxBgmkpKkF",
  "key15": "62og5cz4qLH91UcfnyZ5fPzWn4vWenLBjmVLtwnZ5tT5KJHmUmFZL7BYZWWsfdB7Nfi5uimiGAcCkXHUfiXoRNAY",
  "key16": "5KbhToveKGptWdznFE1DwWkTHnwvxMrehSqLkw6hDuRwGbdYBM9BrBnN1qqCdfgQpyKsU4Acc37WXXeYDovrwZM9",
  "key17": "2DACookd3MvMtnjgLDsYarGLjneanp8P4Cf7AG6shGn4kqPiEn8K2JdZuoGERnuetWPwTL4ePLGENxgFwH5Qy4DF",
  "key18": "415gMYkdWTVj3HFY2dCso2oskGTUm1yFfJ2ra8UydAwXRXSrKv23jVexChTEnJebGFFmSpt5k8sHvoc2UHwCVDbK",
  "key19": "5EhgqnWRAFSu2Wrba2Nz4NHfe3xj8VAbYdw8Jp1Sw2QaZXEUiPUb6FW9dzKVkPHMJqJi9ZNC8TeyopEP4EK4SSU",
  "key20": "5ZxScHwoj1DGfc4NyKp973XVtnuDhrVR6cpLvNi5wM7E3Jegt6vSVSefYdiefb8zPCekAziatDeT4rv8NJ73tvwK",
  "key21": "4wU7YSZf8HB7NPxBXd47HUkv9EAqwVbLXX7g49UzHaRBuM4tx2XYk7JHSRvGzcajXFmRzK3zP6uYDs7MXLdM6DCD",
  "key22": "2VUpt3xniPuKFHcAguNtFHtxMYciCZQCBpZLV4MW49sZkSpmWpKfW4oYUB7bJrkjnNg1S3keMgRZRwPWn8AYmzT7",
  "key23": "ghHm5QyKEHC35MGfEwbYeeo9VWFAN84J9hggYqFDEPFSGHvDC8RnroDVLLoQMiRhUwu2aDryuQ6HueM7eHCbgxT",
  "key24": "31HUzY7kWyXfNUVHXzvkoQBA9n6QxpE9iZtuhUN6eMoPYFV5wqkWBnjuP5yrmAoAJ7cdmTB4bLbXAG3MppYFyS5D",
  "key25": "3H27Twf6TdceGB7ApDH9ybB1QGMxDdNvYJx5DqPoc7E8iugNHLHukzvsYbk12Z1ZEb2oYRQ3ndp92sKqEHQVPJUz",
  "key26": "CU6ixkkZc62hkTtPkPa5uHQwYjok4BUKbJeyeQahjjzUtY5QQ2MFF4dXuPuw6yPQsdDifSTVcHXFPLJXQ49ek9D",
  "key27": "577wnSfJGoP1mhZHt2FEiYpjoMSLdUPcBnaJQhrjhZpjsv5vqN1hVYW2GeoJtaNHtNjiACgvs1yc5rkrA5LSSS79",
  "key28": "2R7s3ZpiZXbowgGuLCL6Hr2cBqLvRv6AZ8XY8xFN62PhuPWSkXDWk8dvKspjex5pxFfauzvqzNTzfS3d5MDo5K4X",
  "key29": "3Km4gNWUTiR1D6KcdFUTNF7uwWJmKEU7HhPu3wHx4Amh7Wb2VqEdrGVMuSdmt9unFUgmhYqC6Ds9rGEbBy8VAstf",
  "key30": "5fNEpA6YKB6V5CFXAmS6nj7C83gZZdvCq54Fn1js3sGG9KPSC8rYf32qDuCbCm2xiGFKdY2rdE8vUxk7WVk1Nmo4",
  "key31": "28BKkq7e9hyeWb8tghJfifzAMoooqQY2JHkKekxRrvgV2UMp2sP9ifvRc4cJwhhQ2wHmDRA38P2sv52G9itZqP2M",
  "key32": "2xTL9Skwtno5QW8bS2uarNhTLWHRd5CJc8TVkexZTYRXaky2XDRX6uPPCJWEgyxnBH3HHdKdiJvdm9L35arbcei1",
  "key33": "3uwam2VfRBcKwmRZ9Zadki4kBwAAJHbRiJfSZsQ4qrmMhXfCjdYY2mqCBCf2iY8qoCscYEntt9CDewQk119DHLnB",
  "key34": "5hKKv7QQbCxRBxiDHiV3qAMsoyYGndAZUwD7tabBsn77DvySJD2aoHgGp4As6LKKwbvjxHruBNWjYMo1d2N4VHyj",
  "key35": "2yhzzUVSo4Wgg4i4sSUs4EeTh5JxAX361by8A9kri1W22ih4wEUXuQzeU61yu5jqCtMkMAUpW41A35e9LQVJvQWc",
  "key36": "W49V8KaHV4mYjekAojHpW9VsCiAk9P5BYAvFrNpA5nnTWo62Y4xzWViAhzG24qRqzWuLJgwbY6r68mpLc4pnTLn",
  "key37": "3zqYeKz8AuuwmuC3pPeCp9MAX6AobUz4GNDSVUm7fPNeJyL7FYtKEuUuwJHiU2v4uDnqGy4wzSroL3ZCnXGC4Tkb",
  "key38": "656RnwhQAhCTGeri9rj4pEgve57fJVCseg8un6SyEyRVXTKv4M1GYZKm5ajvwGcg9i8eYyVSXAfSsNaLFLVL3Ye4",
  "key39": "3DkQs8crH42TzTAoRj21R1zRpvGb866Yq6QJT3posU1M3WUp6JbReefoCQGqhcdLduiJY34i85xq8n8sCQXUTPSi",
  "key40": "3GzJfnhWWkKiXs7b136cuUstnGP9THZaSbYpzFWdb7QUDBQY7Ny67jYLHNpBoVS2PVnH4GPk6iQeNpffoNo8UbEF",
  "key41": "2DX1RqGutm7F8PUC5YzGvysVYPqq8oPWNtbEyv8bAmG46ie5UxqsH4hps4SEbGjAZfeFFt4yZqtZkDBuMjG7YLcS",
  "key42": "2YRs11AbM8o2FxmZfppfLr2SZ8C79e4LEHXNTMkDY4yZxiJii1rinzi7huqbppaVkTVhwN9iTyT5KKBxC2QpcPev",
  "key43": "ZS5YXPFeQ7GDJYjZJAh8qiFKnvZdFNeSdNVdcn4m9EkMo4EuE7yoELxhMNGGZQq34yzJduFkXGV6QEuAysvCJsR",
  "key44": "3ewwgnf4TuoZAvDGnrupae7n9Y5FvgSALVmnNygBJV9dzcfPAU7Z7ji2itR4X5pvSDykb2AuimZ1moDY86bEtD2n"
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
