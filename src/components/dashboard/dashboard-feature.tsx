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
    "4zs7CB43yrczEneYMzQ8xJWMLm5w8RwqDcBjk6Z8NyhdbHVppnby2ZBXCBEr65JAC3Rt2HgcvU83wUh7Cod6rpXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wNy1FgZgym4VNV4JfSgqnoRXFUnRA2WbWeVsVDxA8y28LNaVkjTRvjC1XBhQBzfD54enCagM58VzBR4FT2mWrYg",
  "key1": "5geHzmxM8Z2GsUaVk2Hg3muh3RdowMexiomR9XLKV3YPUtPSyYTABWrmRQHSdJpFCc5yp3VfEERqWeUGy1jWfDXM",
  "key2": "3nAnWjAoDWXJeKehT5gCD48mbuBzrm8vRBoCVHP5SKs8QzBLpF6tkzMGaGGu3eGoewMZS6rw9HiM3igGbSqxZtbZ",
  "key3": "5SzYVqMZVBtFcTGaVFFimxeytHYWXewERMkr7u716hKZVxgqKFHZvb7S8AfV7AKRKi2DSMDjEGRNPhr7rkoe2riV",
  "key4": "4Xa3fRdQppUUtngwFu6YK9nCwhDjeBN2bUct5TUP7MPhYfvZbKaviGQqTF89ztkFmQgeeNnh2RBvW7i1JhRraGBs",
  "key5": "rrU92JRfx2RzmmJanPLx94ZxPhxnocyDdPEbrpn4EuxkCD5Sqh4LWVkNqvdB7on7EQKuXgKM7V8zcspMBrVbH7Z",
  "key6": "P8DqMJxwo6tQzs5NWCAm3d2qJi9onJYvtMguXBJZAb6rCwxQHsCDzZkhJ1ZN2iLJLfRhiKuL1E1nTzoLT5nX81B",
  "key7": "3epsFRAGakkzxJ8fnj8UjvATiLkM9xcz33c9zMDpcLaw31Tfycwdomk76fcod3gifNRvvaVvEQN9k44JiSm8rFoB",
  "key8": "2AwNcjZNfDghosDehmaEDJb2dFVXZGspqq3s9Dj746ry8hdMU3KDY3YAwG3QETMTAo2jXUV9jaDzDqJHU9yHfu7X",
  "key9": "5K6mSCZbMKJjqnnB6LhncZiPkWPUihdP4B8fFpcPcNYiX5f4Vi725hTp2Teg1oHUR3xDEr9NUpGSuFNzFLPzRXdE",
  "key10": "Cg4mg4ouYKKnKinjwmmKyTMFjUBwSVoiPoPetg19RUGtAkUe9hpXf5pE9wDZKtRXzps5XW3LDtU2LP2rEii65Un",
  "key11": "dSrJTZSQZZG4vK7Kzd2MQfjYRqmorFLytrwQjktdW1x7xMZBXGfqcRHR4i2ZRDqFH7VgYhb8BRtNxi2jyVapMCZ",
  "key12": "5sJpgUX4mKjeeWmEAKoszKMWk2YvS9Kuwj4hJhM17EkdyUyh4FvUAmfdGMHh9uQvHZRMN41hKZucMZYNwK5GSLLB",
  "key13": "4MaSzH1SWCa5GRrv4mMZSndk3QrgpLF7vekBVCUVraGwsDJoRav4awnd9HFVfJyBpyKovBQdvHvtieiawRXSZ9uz",
  "key14": "59GJqPgRoD8RvKuSzxyYoQZwHN5YWiQXMKHXU3F3oNNERF9Qt8wp9azp1kZewDVkMvrNtqnEn9h8YGeUf5CswqKV",
  "key15": "MGnZNMV6gHxxZQNmCPC9QEErzEuvQEjAtuVMdy5DvL41BMkvjwDByKkepQKJNBnBFLs6GeGLECBC3A5wtvrR8b6",
  "key16": "27daAuE4oTJTTnAjK1JgipSmhMRc7f1S3w4Xagvx4HhqEJKNMchdZdmL5bqfQqByaYuytMMqMrdtsS4Hh4ACrggB",
  "key17": "2gt1Q2TKfmUdZGPqez7ebnQxJ4bUnroWT3pVtz4m73ZPTNukeRTH4H1BytR7bCKck9CoPcbZp6mZAfPTfNAMGACH",
  "key18": "55axZwijZB3NZUQvnVrfKqZBNeLKdLTE9py1kXmFq6M3fdAzwft3HqfmipKQ6ni5w7Z1syn4gciH14WEJsRjv2Zn",
  "key19": "4uVEf4udioQeX9mN4MUVYWZazZ4Fyng9zMW71MU7SjjscP2jKDmDuvFqAEwMB9cmMYEsuonef16EQjKHMuyWcFcS",
  "key20": "2L4gezAdRepseG514YMKjx5WJH8BXdgGdvt5xYKwKDj9vW1NiFZh66dg3iP9HFPM3LDqTgGKyUULeHf93bwWF1Qd",
  "key21": "5cvY58RzKBbW6JSKZwKjpSYnsBjQ1tsszSRXWPKD8auHJW4MGc8iP2UVAFy5twphyqoLkDRs7A5onopi4zmWTWZp",
  "key22": "3FfRTKyjFiX2XH8guo2XukGVP36YnCMxRVUQ79rm1yUXHBDEW7UdGnJfrJxjoMLD1fuAuAinx3pCegfAdZwAboBW",
  "key23": "4eSPwhMbXu2Vuv2w5QzV4nGCgqu5jzAoFGmSFmpQqi4K9X7MPXa1WC6vr4Emj5uTMJVe9qwBVSAtu2Mvqe8s6Zjx",
  "key24": "5aCER1qgm6VjUr8qJBCxFF5DixXVu5YjRRRwk7iNDbt4cEqTvEiJdGTZ4Yyv93WN6chsbhaiXcVEWadKyRxdCsnh",
  "key25": "5GE46f99iJUk5EVCRfd61o7msQMFxXCBXmw2MCZpuiECd5epmXjCDW3PaumPwjVqxavGMxvDEsd1qd9TLrYntxk5",
  "key26": "5EE8vyzRRzjtmptY2kfYJKWgeDBshzCrTwpfMQ25oAKMkE8eZcdzd9qLzkSwLTtSqN59fmPcssMc9sf7iQtLiuFu",
  "key27": "2jUSFZwnoF9wLdsnPv4P869SSVYBTf6EE9qMdcncHPkAsXug348wjuJxq9P1x3uQHm6oerjvsHUmuZRH7zuBqAhZ",
  "key28": "44KEUZWrv3tHe2owEqeRwX8W7d56pzuYtri1wQiiMmmZ7eNxkDgcwb4Z94DWTJH3abcnPbEpYb8JgGzXc27DAf7p",
  "key29": "4yK2vhd8SeCkDoz1wtDh5JjBWkoXp3A9ws6iD99XNr2E1fvTygoV89tfG2492NGHrqBimbERzGg7UKv42ifND5cB",
  "key30": "nTTbVtJBJuHYpCqDDdNm9pJQEEyi4gJ9FfrFYExaiuYdCsfXvRXom4GgnSwyYSNAamf6PpgT9Y6DHw759i5Aoqv",
  "key31": "669gcpyXLor6Dhan6mRuvsSkMWhvnzhu35VUHLTeuMfScAj4EfaZJNncqbHoB6GzqMXCB8VLE4QgDAa8YTmFX4L",
  "key32": "2EKqHYKVQM5HJWQJ6yvqbpEmjSNVTg8PsbjkfbjTAn3u5qDCqCkS2KXgrSfNzTRXf5eU2Y2Hp1SXaxzyPfHaHk3j",
  "key33": "3L4tREaXt9PAY13ehtY9BfQrTbnVhRUftu1bt77jVHf6aUa9D1ywC3BkJq5EqCXShSWzYVCtuTdkeNHruvMwYRzz",
  "key34": "554dGMVyymZPVmD23GyMmePxnWMAAomTaKd14YT6CFDFDtRVgsqnFTdJVpJKpyPuHEJPyJTraZeTtyiCWJWQHMDw",
  "key35": "3fDzDHm9xDVKJtJw1fB1EQaPXGrr8wdtqvafVVWGqfVDxivHDrER5cimaSJMg7QFRjYeXDs1LYrkM8oimGBFA3YE",
  "key36": "2kojjAvGsMoXW5swPuNa3BT2qpptzZvv3NpkCNU4Wr4kR3nDpCDdji9zoipHxtMnvjDjjTy2ANjhvqH64PhBCpok",
  "key37": "4nmad7UdizqtxTUKjvxWZrzvhQ1HrJu9pwawkihSbab8G5bWD78ngwYdSsBr6iyFKKR5vt4dKsgTbAfX3rfJuYiL",
  "key38": "5uLip5oCaFimra3vmcfVtkrypATaXpMXp8yoSTXZ5XVZ3sYd1ZtWKbovpNECX718qPyZV3ZzBgaTf9AsvEDxWZS7",
  "key39": "65Vgm6sERFkYyeLvE8ZdB7CdWVAV4iHLD3Sw2jhDpxWZwjXfsW91gFtcdikxSKwznYboPqsgNSrurVMFQj5AHcpi",
  "key40": "391JL4JQKzSrGJ8uKABPvUmRhkE7HoFzw42rNxNVRqPMAFJPDa4TEsxNqwWp3b5KCxEyknr9Qv2Xwv1BVKGFauWz",
  "key41": "3tJiArs3rQgxorgtGvkAXGfCLqSuiHyGj7LoLNXJ9n6Vjgw54zYNQBjG8L98HnwrxZts9KHB5q5fAQBSXxPMZLHb",
  "key42": "35QWG9fkP4egb3VTHggEbrqFssxdS38Qz4WYtMNg3NURhHvQg6sEpRMpM1FRaQPwuAUogoKeUHnY3nYReXDZi1iT",
  "key43": "5drpbqiAyk9PNaCg4WonTGtvYjn4JTu5f6HjXYrFUeHrcDN5ijzU4DandaiMw66sWj2VDyRjpgccXuEjZ1gwvu2N",
  "key44": "3mg4os9MzScri6yzEHHJXP8DtCws1jCRHEERrBdse5s2Zb6w9g18kXXn4A9LuvFKoDdoZqR99FEiycDckTEn799W"
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
