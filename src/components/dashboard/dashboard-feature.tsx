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
    "2aAyorTTxemJWt71GSbJtW2rGuw5Hw7oGuyKX7j3NAjXg8Devd5J1Jjo1VquNXjZJ42jEH6prZ7MB9HWNzobbXHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGbgmAuTdbSzAdCtcBJMTKwWz8KBCGu5tfXBxh78jesJXbVGCLAbrDWfLyfW4RogYHDg8LF9G14RmZSwimmbW3C",
  "key1": "2zApD29ijCMroHNkm5eSzgWP3DhZA7uBVWpXedJrBdEyyzWRCjeWPAycqc8JE48K2XoV6ZoBnCvRuPnyckgMtAR9",
  "key2": "48FiYNPkrSS6vre9oGgZRiVgXDuhzjJchUv3CKQdaKSTPWohhMPPtwkouegcATPY4hRf2wU24Gnp88op47Fdmgsu",
  "key3": "2w8iF1dyhAiWUz59CqBpse1mGxczJSEAJcKYF1o2hKauHqjic7mzTESkwnY7yQNQjTKzcfuai7qiw6tLdgyYwzzd",
  "key4": "3xgRTjGVUL8THrCG9UesfcNNs2qNgQMGiAW5VVjSs99SPCtazKzjDkRrQPJ8XHyMPEcDberzBHmxXGVnhXPNYo35",
  "key5": "4pyguyFobnd3DMgmA6YxvUh2i8kG2oSyM3c2WV4i1AYq1eRMJaeH7AVCQCtc4BL4iKxFJf9qceJ9wWm6XnZaQPqL",
  "key6": "qNwFMgSqLq4DWy4AxtP8JRjAJvVDfA5gWwLfBNRKnBBng8ThFyzSUdcuaDSksZ7XAJikGJzso9CU9BYvJbHpvZq",
  "key7": "3vdByjGirdW9yzGQQRAFzL6JeKqpkS1Qs6wvPCCdKzoBjoiwQSabZz6cgoCMSYSKRz2ukThTcjvY4Lipi968KsvX",
  "key8": "4RNZpFHVkkMTdZS6HU8Dxoa9UXRFHhQSLASEvk5e3BN8vL5NEWX2uD6i77bF5cmZRDkgttNgJ8oTkp5UNjt6BnKB",
  "key9": "2oAXox9tKsX1Q7WgdHruD4tiuG65HeiCpnQ8oSyfZSYCTf9VvBVRoyzw8o8uxfXB4myNjHF2W245PGf2GAWoGKmB",
  "key10": "3ni4ha6RPrzpWjsPkm4t5ajDhVah4xHZGtA2Bf4vmP9X8sp7yHMsQxo9Uvfu7gY42g53htzGk7qbgQXwTD1KvGL2",
  "key11": "MGQoHJaFnxsCrkWd2xsFuRPTGcQdDZhUQxLZGafXz6vvGKkjt6Q6S3AkuP4HA9a9oipzf1vLJJT9nZ7PQVDNuCt",
  "key12": "2k7WvmfGNgm3hgcZ7cukj1G2gu4mrEn6eeJy4yEYvRiwankJTe2fw8MGpgLU4oiPQZVFyuRj5ndJf8WJRpiA9qdn",
  "key13": "2pPmMUR2YD1a8KNo5HH4bViGVQi2KW3bQRnXrRvDGtXA1hnb7HUvd6VV3TvArKXUdJDetxJxqzPXqtMbhsttE3JJ",
  "key14": "5tvmr1K3Mmy5H7pyWM87fZa92BGw2e94rH5ziB8WS4LDxvQFZE4r32dCEUutSRfqFhCvJiMu3KWPovstYDBoLbL6",
  "key15": "2oUDsrV7mcVTkWz7NzTRTkcm5os92bz2xTBcwTea6cxREzJCJsnEz4hb2UoUqr9iH4FX4b2nCRQzxREFLesRV9z9",
  "key16": "4cokzLuYDhDEJUbv86Jqji7DSmEpeSapRRyyw9yY8qxXJcGSBKnxVdetsJ5KZ1hFdK1iEuyWyVdqKNKxeuem777G",
  "key17": "faavK4xoYmS2VvUUZxXSUZ5yoJgBNbp278XCxhqkbzBHuWbaQJK3D3vFe7x6NUb94N5XTgzMo87R1P4QCvDoG9D",
  "key18": "6xLw5gmK7vuTHYZz3nWaC9RDgEi64LNSKqZtiFGJTi3zdkxhaExtf14LFcGn1SdqR1APGrAeGgtXJTPDEjM2Cek",
  "key19": "2YmJSBBX5gukvGHxwt15Go93tzwe72X7voKJKW31XVpASea9QbyaC4baER5ASiQHqEBBVwko1Ynne6d3dbMh1M77",
  "key20": "52sCfLRZbiuaUdvHJr9iqj6Ttvk6yHn8LcG6G5eUGsGCNnLat1tmCxEymD743gSBfLombAGKbnP2REAvTdca3qy",
  "key21": "35sStzZ5cctFcyZPFQLMda4MHtDp3PVFb7W1DpbTuc4wxtCcM8L4Ab5WdyVMCp5jmNvgCKgtspaa7ZJ7bC4v5cZd",
  "key22": "5KTQtXfjpsfubFETkv8DnjaPH8FZ793WjSTwrBQqfEwcGnKQDZaZuakMCKCFmD4xAaE5fXkxnBzpz9Cn6znSEX3s",
  "key23": "26Bju8Bs5LqdidjsuQq9j9T1vvkb3USSCVsjzNmMTPK3Q4c2a2TyfHPbRyWFBVL4br9Awwtawb98zJh95ayChcMY",
  "key24": "58ui3pTme35w4wBvrqhpbvbxjrXFeQRmggkggwoHCdJ9EuakuY2EnrufDWjWaW4jKK4QoiHXgRQBM5LTz6ZhXXPc",
  "key25": "2Fg7oMrVDpqCHiKCWeQzSjcgJevy7XE6zdoYHneiyJXDMwWoc42FDF5vjX88bmHhzUKYPbieq79k4A1FhMPR76TX",
  "key26": "fV13zPZM29XTJXBAgg665y7SDuersGufHJwGyAhJC84mFWkQzMdvoPazP97R1sM9J3QWd9pDvfsramkFApZ2h2b",
  "key27": "2wAmLi7vHD6M3Px1jqUKn938coevSrEb1H2F1UX5vECq9RpTFgCGjbU2fwqWQ1yMDkSAj3Gvc8SJTTaDyQ673Q5R",
  "key28": "2d1vhd64T561sCMbFQQH6tGcAMM4qwQXAMbuW5s2K7mP85Y7EqFvJEppytkbY6aB2y6VH8aCM7DQsXD61dU5AJq6",
  "key29": "31HroLq2qXxFLkvGca2x4kaLx29ZLABno8qoPbQ9nUFPQFBxwSyZfWmiVYmgMRjDjMunrjqxSc5ydxetaeh3Qf7y",
  "key30": "QPqHKa4PzsaAFX8xVyuDU9ftLGHBpxRjXxw1drKcjRqofjiVz8aShbuE5hTkY7yW2EMpWpFR2URtG7kUi4QqLiL",
  "key31": "oSe5KWgy5ZYGPBaEpKWfgUnqsuUR2aDjk67sLF9XoYLhJ19b2wawsBRNEwon6bc7DaXM1En3YKB2khFrXuV3GiR",
  "key32": "2Z4Cyek1zBK1mrEGhz9uVBJ68oakQiJeNJF3ZsVoxPuR9cApJKoxmDzJDeM4YaGA7QSEA7FkoErJZasAgSG1wnh1",
  "key33": "4PUkf27oHFCDjshBSxNgAXPa3KBqskCX3oMkxvqSLReHmNRto5DAnT8MEvitjqsMFwquEmuis98t2Ja2JWN1Mwgz",
  "key34": "4mxjJksKZqKGcJ1ApHmySLr7mBx7jtodz2uEcFFyJwQwLiAC1qQiGkFAZ81tuuDBVnTeAPHKY8U28VJY9mUYCHch",
  "key35": "yYp9GdPCD26ovxFwgL4iwLYjEJ8Y3YyRPd7aE1bdGxmPGmx9r6DYBVZ7khPTdo2W55nBG98gwcTriiKVyiNRUe2",
  "key36": "61YuKLsxkDC7CEFRBM1BqsWYthg5RQjo9KuUChYiVA7mA2JJYKTNMKB8Ad1bVQnstux3ZS3ePTPVocGeaCqngtth",
  "key37": "45b4UMw8r9LQ5Nk2GRCnFM37xaa5UijBxvqwHFJWfbPamQ3nU9yW4vQJczQXaDivnwK7qRsYNLTKqGfFiiG58DQv",
  "key38": "3MB5M5aaPS1TCNa8Masts6fMgXdCsdCuMmr18kWWeNznskWY4v8g56tYRwfFMs7UWjbwMDanXCTEBZAoq47dViPT",
  "key39": "2riZ8U5DoxeoVgCss7NfZu6PTEp1Wy4CBZ4QfEhqwexi76gzGEmdhfEVVG61MC119SiSpwAyZKWDXG1nseqNwhHS",
  "key40": "5y5rTBzAqbz2QvXN1U23PBbFSnEkZUBH137ZAR2VVAr9SvTfY1T1MesZ42QMgB1XnKdqDhTzGTSbuZBQXBMgHcf1",
  "key41": "2MTn7qcXVjj955LWRzb1uhNQH5U9G5cnsuM5yiw3rHnsAvuUG8kLyo9hWrBjGfkR4P2t8Ck3ifLDFjqZTu9os6x7",
  "key42": "5iytDDL8pd2Hhy5UvhjYGqTp6z3cBCSXg1BFmBLtUWFUMmxGKZfiuVoZ9GU3e2M6uyDbMUof5C3Lp4Ez9eg182Wq",
  "key43": "61SskrdHPYZaruDAS6JPEsg9b5BtJ728KDM2JACM5EuZqbyfxi668hWZR4gSLsNRpkjJavzaREHKXyRk4zu8efsr"
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
