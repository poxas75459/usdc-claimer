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
    "6bzd9d9mgJjrmbHyXNDj7PDmrdTJaLSXFgQ4oGvJeaGKoY2xni2RWM4PwFpRsLYkVmqFm5FTVXMdhVvScWsqCi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtWkvUdUu2U3xZNMQVGBoqkfXxQbtJXAJAe8YNirTZHFkvAjGWNwURRp9bWBF1eZnG27Hor4n2HLvwBFTvLy7zE",
  "key1": "41SbT7bj9s57EYZBM3tF3k4TbDFnjygGXKpdze8argV8V73pxUTBHfgp9Zho1B8v3BdQS4KDFME1o7Ku1wpMCfMC",
  "key2": "4Ff2aZyvWqbgm9JEVekZvLS8xifqkWoxcDdoMSQvpdiGW9nS9uUYC7jf7kS9jCFefNbb6bNGMHK2sYJipv42rX9K",
  "key3": "2N233L1Fo2Mfd2k7x4CAVYgiMaG2zSue1pd99RSbMvxgFCkVoE838gn19qnwnJubWANcSnLTY2Qx8jHVrNdJHEdH",
  "key4": "5AB9zRWy4CBZjfFise7FNK1sMKRTCtgErhAc58GFqdp5nTSe1Q6Fa6EbFoXc6V8t46WupUPxJdFgKEmbFecRTMfS",
  "key5": "hcAqtWfBruZ8fyqmaRBXi8cm1TnMRd6cucGk1mDsHyFGa3iUwQAD2thVuzUS1iBTSbVgJhuafV7xvKJsXhJoJD5",
  "key6": "4TZZ8uBadMRZo45AVoMyDxihe4FNxBx62b8MbG9fbHKCuo2wJTeiHSzr4tN4Rk5zxMyHtQ8D8yMT4pTf5K38NbCa",
  "key7": "tfpUw7LzuXNqBj8BSoNcEcfuPphrgwjoBH832NndYhvHNKJDDqwXtiN9dLVpnd1k15iZmbePKaXP22vE8GZkEb5",
  "key8": "ZfTqaRfqvR4rV6WaPTgw37FHK93f8YEEChD52s4dRPsjnDtAijKdQAFKDVnUdnUM74F86HZMNkcHYkUHg9SeH2J",
  "key9": "5Tnstw8CgwK5zWgS57SLumFaMb3GnZGmvAAJHX4mwnaVDbeB1bN5iP2e5WDusWmAHtCC9ECTfP6UZajdeUQktwaU",
  "key10": "2nvcjRsVS43v5ZSpYVjDEbM8wJac8UULqBZ9Baq3idjvYt13FRn9DEGp9b8JqNgr6PQNr1DRK75NRmDPBY8aa1kG",
  "key11": "3gH9A1ShKzcE9eU38bftAWfmJaEjpMGLyVGT2H3cLF4PYGtQ84gtRBbMLzVKD63TesVEHChEHcPxR7MkMpqjmzv7",
  "key12": "4TVSW6DcaptPMBm84XRkLg1dfTVEgjpk4J9j1gbEimMgPQE8D86eqd7UUu9oSSTm3qfL35kZKNDdfoCwXkGp6Ftq",
  "key13": "2ufzdR7CQGbhYkvxtxno5t7JxXRPsAPXa9V2SwuBqk6eGkK9VPWWxrPW7EhGS3w3wjksiQHJW8wT4WADZbbcyksp",
  "key14": "4VEaezmGugfw4uwQspRhPXFiLLZgUDD6nhKQPYg2y8DmkUFg5HCq88BunW1ifSPb1cSUKDvJ2d9R18ZqPvxFNJqN",
  "key15": "28rvVpdWuKh2eUzGfvRgL6Xq42A7NMuG2XReA4jMtmk2aTEKPriNLrWPKUYvbiPjguQJDasoTS6ikDXCEWBuuiFL",
  "key16": "4LibTmFF5dC5WXVrhZkSgsDJnjoWjm5dRYHNitdKioDUmJyokDeuf2SLcEVmWo6HfFXqTDo1JTPEpv5T3byigiSi",
  "key17": "3fhTPbgdfVh4otKyr5Khf6TC8pgRxF1q6N9YSaP7qRuzy7hf5QeSS6A5pfjnXBtKfTFZDtjeZHZjNSzj6SxU8Aae",
  "key18": "4Q93p2WpLDtwRREDc4cpjQKe5FMJemcgT6zPJKYt45RpoKyAnGdm6td8VNUAjKjNWu83s9bvMJqw7318B9gDLe3Y",
  "key19": "4QiuCc63JJBYeTJnhR4yYLxRCN1a6rzK9QstcavXiApkABrEERwCvrewE3hAGd612GyTm2DTwDgSjwWCcB9M6ajh",
  "key20": "44hJfB875WxohmDmeUpF4xmKYFwrLgTjhaMMui55ottBrNSYLKLnp6Wuusqmf8yePMDpBkcRqwHS5Yc6ZX9eC5ry",
  "key21": "5yuGYczLHnbKC7vHsUF2WLaQEULGsvt6Lex1rdaKM8P39tjjGCrDaZgTPUYpesNcVDKesUkWsE8gDvLTkKb7FLnW",
  "key22": "3v7GaWM4esexWNA7KVr7qHNKDUwUR6tgTnwxX95fyZUbaK6vsqT65FCaTACTUhDkfS7BBrcKbLrp4h1uvSJX7jw7",
  "key23": "2Ag28BqfsGQnyR3DVD9B51ahsqTRBU1HQT9hGK73ELbGcQhBYvcTcNjAyLmQNXyFGLaaKsdW6btGatNXSmBWTPCV",
  "key24": "2rbaYLeovrmmqeoT1hZ8XiPzh21ShEH8PemQdzUKAd8UADJiHp4md68z4xc7e1HYKhQTTpRABK47w7cQXrsbWxfr",
  "key25": "AQbvXVTHrYRSweGzFTfz1LK4ZEbAMqv3g6cRnaF4rQKDGLFRWEVS64SUyL3ZCqC1WcRD1C2PKY8BtgEuyDCQ6Zj",
  "key26": "4NGPex1JcfzGEXVticEShE8NwdguewVmKPt1zwapKLkYwMvJJwmJTEQS9rr5Yj7RPGV7v7EDmejSQMJ2MZSZiVmf",
  "key27": "V1RdYKuzuEbwpN8NMmsdEf6KAWJ2NTyzsMEJNc1CYB1YyVLe9Ab51xVJ4rg1mCyUAyPimDHEEWygKCs3d8e9UDP",
  "key28": "4jJYVtiCqLGYwqzEKqT5nDGgVhzZ7bV3A2fwac1E8TLCoYByvhF7qEXKKRm5cvDzrEj8JuBvLQW5R1VngpkLovUb",
  "key29": "26ZCPRXNv94QqPvquE525iPjG41fYQbc5nVPHQRtxXperHjgw2tKuzA796oyFcezFMnmm3HVC4C81P4Zs4i69Tto",
  "key30": "2sbe5rSgycp52um2gcfHN6ekY1aDZdQXmAxxNbadDBZQ9ufCRkco8YgtQhZmZqbXCT5waHyULFdXH7EjThgdcqwQ",
  "key31": "2QQhvLrY2roMZ44AR1dKHm3Evrv3k4jmnugGZKXE8oXPkWvKj8Z7EuPSNvwHYiShbjAu13szfrWt8TEqo3HRTSVk",
  "key32": "66yvYHzQiHnYPUjEroBogrAidDuQmXH6qMrxWKwJarUE3KjknpJ9sqcvZLcwj1Jmor8WkSTqS8VCPt89FvMHu3K",
  "key33": "2UgsKt9yQSGhr4aGzs7qcUNSVuNH4AvYrQhmN8wMFXxiKM2HXQEKLyhKogty9s3evWVRVUfwN8nrwkTZjGKqr7Am",
  "key34": "2dbBsRmVYnsW4woAfP3kwK7Qk6W9Xs1hzK66jF495xYuAaMt7dUvvR1SZpfZQ5phHMUkJapBSXkRWrL8MaHauTyk",
  "key35": "38j3B2g8dcBZ1gTfBj8r6uYTHC3T8pq7CHoX5eJLGup7SkGk5iPZK8h7fSzMWBCrcTiFyePAxunJ1hG2aWWMhw92",
  "key36": "3t6no4NpazFZ1Gu7g5tfwNyHrDk3ukcRPRkpmERsbB9EU618A11RgkyJFc1A2ptXC4vUf7M1rmVn33VYQ5Z9P3M1",
  "key37": "5aQG25hvHusve886n4VxWyd3XAL2M5NdCUZ2xBUWWQ6odfybW9GYuXs8TKj8eUTjDmYcRaogq1WogTETc8SMJJkS",
  "key38": "3aUiVrJESr59v748WEd5RDR8py42BD3JB3ybhizLxdTpekiqJtBUYKTbNhwVLSB9XVyYGoZcAs4Kkr4honLHkiZx",
  "key39": "4TxGoxrqt2DMPwKmyv32UiwG8petCx6yKNEm6Gpvmi4FXet9i4Nt1ucHVizX7UF7zbab2XohFTPbaPqdhRTtHGvQ",
  "key40": "5RkxC9JPWCUuL6mEoxeXq6TFayBpaotbrwvdqTABQ3K43bspfFqLueDSMPeszh4rT3RVdUcq2oYupXqFdVvC3t32",
  "key41": "3WrwHN38rkDsRFvxt2b1DzqVhnudBLQAzrssHwafewpuXuAQLfSAmUaaP2rK3MVmk5L8X9P9KhEwUDrXdtd4a4eo",
  "key42": "5StoNPX6jqtKYZBjjtQTojk8EGQRuNZmM8KEQ9Wvn6Xv4ZZqb62cqKqFjJHKq8YBuTTiufsS4gZihayhRoww9fjY",
  "key43": "3fPV48WDWP2EjXnuS3hHCsL5iDULw7FcAapEv834BSZXc9fXcnXycPyHn3RiwkZPeP5D1NBMDF6BAyUiRWTyPNYF",
  "key44": "wZWmJzux77pobaR3bZg8mMcjZnKUsrcESx2j2DwHFbu9tdbd39CWxM3cxhiGwwWAbsKP3ALCSZdNqSecAuR2QTd",
  "key45": "5FDuUJE9XYhAwhrnj4vaDnhYi4JZ9Xpj5DGRYfaUr25w9kBxiDdmqxoxrooxfGghANRM7MR6Gpxiks6fhbxvXKBg",
  "key46": "2DrUXgNCVLySx4SNNsd74z57LMBKazchrGAwJLX3u5FZjKkCjU67EBNy2tTJCdJAN5TZnna9geGVcmbjn8QXX6ta",
  "key47": "FTeufG2bN1xtz7QS6kJBEhJriEU6P565uviGUCKT1CaHHeeWTQVhmkH9osuqJWwyVvdJLD9aH2vFw8ZMNSoyKuY"
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
