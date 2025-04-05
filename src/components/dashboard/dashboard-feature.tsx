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
    "BdSM4F9DWgZz4QGDBBFywiLcrbynfbsq7ReQUFuM8G3pNmpuvnP5E3pq9mgiRdfFptZaWHLKPNu8jj9VyCgjF6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SotcJQCVbnHLEt456EMtmYJpTbtVJCgSkoG38iShEFr21VFUNEhfZJ6bxNjjPz59EBhtLbvecoyphbDStQF27Ce",
  "key1": "5fiUVBfPXHHXESi625EQhmeeeobx61hjhZenKgyUfzYWM3GjzqnmtRGyL3JNTfPgZQvHJa8Facgo3ySn6E3aU7h6",
  "key2": "5hxVNAafmBjJcc1LTeYnNTSH55Pbr9Ttc7tRkLh7Yc4yr3qriL1gAWWPr63zCVLS2kA3NmFNa6rz5oXqpVSLs7N",
  "key3": "41cb1fDGpu6v2iH7bD5qiNfaCA1YRmjYtKjGQKoz4VmjW9tKX13R5Fxf5PPueT5TKb8xzH8hVBUyfGjLPDPnnEFU",
  "key4": "5jD6vzYvyffvuXNAw3n53XCo5NtSLZNMSx5fKQR7x2GsgxSvr9ErBZj9LR3jTFyQMkaBMMTh7Nzg2vo32hzWvNAZ",
  "key5": "48pDVAKV13YBMCRPjHUQYgpkndAYyWTzmVSU3wmKFp1NMSWaLQRHj6taedxsgZ1W3cM4Hgkvym14RAxeH3DYum5k",
  "key6": "5g2MdyvHkrjMSniu56dbv61EdTKAnKwJL8YqeYM7BFY1USe9PhQVDwMuGLjujKcWqozkqfNdDBcjhu9eRyqJgpLG",
  "key7": "5BGRFW4FVSPJSK8CwQcw99pWDHJ7rPN4aVnebJ1wEQnAAYbJhqGsPnytKs5f7gx3ERpRh4GDoWuBiw2TJWbxGKLR",
  "key8": "ota39TiA3xVMzgy1DuCLBHC3Ha5ZGfF8GZ4c5B9Xar9uYqrpo5V983edu5mYQ7u4TV6SovFsUodBDNvKmDXoMsx",
  "key9": "4PgP8o7SuiU3frPyA94q6cnnGpwQQWZJPDmDsWmVrfqNVgRULfM7f2zM6GtKv1tWef1XHszztNf4KjX5vsJMvShM",
  "key10": "4FXWgetgxfW97MWXHiwiomh5jkCCQrqU6XYWQC81RWLgviuBwM82A3CQozn6X5G3airf98uDFNwUBw5zPfLLMnHT",
  "key11": "2LB9DUAtb7RDKimKo9iWTRZWYPSjg3Ud7tUze2DGnfWoTHhbaASk2KyQRY6RDKVLFdENyvBbb7HPRaMET5yq6Yjp",
  "key12": "39qLcyvo2tTWzbxjz4v1MkjGBKJLimEscPTdMjJFizpnQRWfbcG7HNWWj94zxyNq2aFujeeGujsRDbpH9mBebstn",
  "key13": "5hmM5943P96i8agYa3ubBZEr6LiB4D2pSRWp6L6nhx1cZy8Pb2Tv4Vz4Yq9DPrRLZZjDPwXEPV49ohiEzVGZX6ox",
  "key14": "4w7va2ckmNeFebm4pu6R4VvBySqtMJWUcpNQLVKTg4QBWtYnhTkJiaofGP7muVBNfbrV2xtWA1pNnU2scmhwyZw8",
  "key15": "4W8F1UkC5XWog7BA4QG4XYoRr2BQfdAPX4L12ZbmX3bXrwS6ARugVEQfX6SLAAWoY6RjJVUQKfvo1Zzm43zoEeSu",
  "key16": "31qbDn96Qj4tir6tUxayyjsyG3h8LqdwQLApY6gST2EYiNgTch9LmAEaZUKhE8DrMLb69oujmGJPaqpQGPh2Pwbr",
  "key17": "5gpbZJ3XasyHTNUUvtNQw8HA8vcb4N2FVYQnL3JFvmRo7HszNiHN7EFrfXWuYJ3MxMHu3X7NWVomo5zVZzt2SgXc",
  "key18": "4hqyRyCjA6cqBP4hsqn3hK51GYdsvzb5EJxLivEGYhkPZyXEJJrVJ9cdvtxUWDxhYY4p1JJEY6yE4N35UEN5pmRf",
  "key19": "47banDDKfLPooYSQZ16TLYLLATmLSwMumrsXFYWdk5NKrb8BAWUJDH3mcitjWgPHDe3fNofGR73PAbQL5QJtmda6",
  "key20": "2EqDQfywXxuuwgosSRFo6h6RD2m3HbqUAao9cySuzd9N5sa37dBpktiH3cRxX4z7ceS1BY2ENJf92x7eNZeXXEqc",
  "key21": "4p3sqg5FKwpZxG2pQ8pQ1aDGhNxakYE5JZtKJ8uXFW6hUvrRfaKZ3sk28tdUFy6hLyXL6uRxWGJzPm26YUiidfvQ",
  "key22": "2zXz1Qw2rxovbh4f4HSKQksNkV3VFjy5r5NvFiKZsENkjkdozeh5bujieJ92jVteior7iDMmxkbATXfKJNctvhaR",
  "key23": "3vBbUzaGLPLrnPqcNhmEyfjLewYd5LMSeX6tVbFMwixhkRD1sswFBA7K1o8fPZZKFLgF5RMVa6GLkuHZAYvLrZGT",
  "key24": "44Ak9cvEVSfWu6oFnX5bCG9HcpvFF3SsCyC2RhsUZVC4LQ4F9f6Y29d5VxdvqN1PyuczJzKvpnmqXZe1VSYDgh6m",
  "key25": "3K52ggTnBoiZ7LGTNzgqLWEEB7nvxK33CCJKheCsA1SdDXN75x2QWMLD8vXcVAm1fwS83QcUjYgnHiW1m9DNkxet",
  "key26": "TB7tCzStRvQNdFM2imUMh4UuYRCqMUDSyCkbXYuyrJp8N3XUXVhARzgaMa4jMJUC6gJaEiZTTwbE7iJ93nqMduh",
  "key27": "3rRzPt56TA3JYgCWrZ7PoZz8Jm9Spi6nsfBtVzBbtaNj3TbRzCB2d4P3cko8K7eSAwApcfkwV7R3zDqbwYC3VJza",
  "key28": "2T8VbPv3sNaAJJSFvSLJvLGZNgcgz8QYtJtCroeuPDFogKcDqi7wG6pYVpKW5ixGEkM9QtaWsqXRzeZa8seTuovR",
  "key29": "5jRqdYXejr7sRpB9CxHiUXhFqGjb5kKBqhUhJJoxVAmaqm3HcxZiVbgwrW8iXxS5aJZ5BBxQe9EswgRecfeCwan3",
  "key30": "3ycKF1ghF2hTsoxDqY5DSz6xQoKN3dWgYhkNB3XXPJdMHEhyMnzs2ViLafi9QK6FjXUrrme5JHxvZX43oERMii8X",
  "key31": "yv9udmpUDQjhFhRZjbwf6ZHzCoXqQAJSGESqGh2DyUsHHoRchq2WiBHpJBBcPUGGWWoBQBfbJsUkejHbPbTxGp4",
  "key32": "Qwsff2ShgkBALJKNcHEVg2NdUPhjQ2RXAyBYNPRsvAvrRHde3sMpf4UrtEsZvtafMMxCxgbez2JuJLskY67X68F",
  "key33": "vZ39VpwB2PWycK33VX5fBGrtrcMKcKHLJP7CE5FX2CUXhZj31QKWrwFLVbJQpZA26v5tWYWbW1MkzjEJC1RfKzv",
  "key34": "2DaGv6LR3DvCFsTTHVCfo5W9VD3Q4hpzTnCFZ8465JQKAiQnsRT6ZdmiSuxi4L9k6VNbtipYHMjpG8KRD9exrdF3",
  "key35": "5KuMzWFYnwwjqLyTnADGmdYBpMddjXxrDJNHJ9dhZUvYX6waLWZo9ryHM3u6theeVHcUXdSzWFkzSS3KkCZR9rSN",
  "key36": "nezmmYKyC6kgg8UdY4oVeqahfHvBzcea3gPcZEmw3d8FUo5KJjWTRensehAydqMYmjrgUnGS7uJvbroDfNcJWDj",
  "key37": "5BumjGhs6vftCgUT6jKFVFURToBeRtys16RfXLK8ZPCeT8Fnc4pNkJjVVm6hrEoa5R4PnBBK8LDDCUcsjZVHR5cD",
  "key38": "5HMLQcenyDH2shmQqzx1AmZBi2v6pan1FNJtoEfPys7B6njR958TrHQxVZJAjZ2sWrcggN46F7FRAs6kEeLvKuVe",
  "key39": "4oisQpLb3mbVkCcKj8jCbaqbiqZSDQQ6fanoGFyny545EBTUTogSS3i4ReRK65Vx7rFreSTRtSDU6EyaeK2LLoVF",
  "key40": "2zUAgy6V4oN6k6RNHuekjtpxcH2L2Wfy2uZ13E7amYnwPHgDQvKRM3vw5ydYPPxvHERobjb3QXRutAPrfB1DvoKj",
  "key41": "2x5C7oqAE8aVECjMvNecBjeUDCTgPF5jNxZ7FPSz4ecPq75BgA9HkgDj4dN1hjPsnW6b7dG6roVnrNKwMGmaymCY"
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
