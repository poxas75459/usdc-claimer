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
    "2xtiqBKncnvwh7XsNZxkzf6qcGFqx2WLQdYivjySy6ewgifJ5QRpahB8VSDq2NpM7GEUnMRjmTDxtCJBh3QxjBSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djsSaupQfG94Kzg5HV2ssTDmvPFQjxyj7otPigSiR57ADL8uazERgbTWSEmMnntFoyzat3beDbiw4LgRui1E3Gx",
  "key1": "2KyK33L3GeiZyffdX5GjEDCiTVs5vpqzcUwTy44k1Uh2NcpYTJXZJ9wYhK5wKbzfGPwkvNwm4RH7wcU1nyfBF6x6",
  "key2": "576CaL8My3V1jq8SygRiZjyae4hE3cAUamVsv4E4Tj1MAfPLfwjJtEMpzpDNbEBZBsiEzaFSJvjqS8CCgQnnWTbt",
  "key3": "4hBNT69XDP5kUP4rchKHTJJfJ15cnHwTpzuN9R2516gxmvNiZs85b8Vww8LduYvTKFHJfBNyshW7NzsvgMj5divg",
  "key4": "5Wu6Rydq4K2JUavGzyYkCXKSCYTBaS2ju46bAJg2HyMmCUBJmPLbSRsWZeHtmpUB8hkyb95LjqHs9FJWd44X9MDe",
  "key5": "2kpJ8uwopxz7c2aarSTkc5ojDSD27a9qKSG7czch86vU56VXStjnZBCpjmt1gFwGr8NceAc66vAX5pqtroR4jAKW",
  "key6": "DD5zXgE5ArwXftMqM3dBSXeUH6bUpxVRfHg8HzDTmbHDJi94HF1zZVSEXFPMajZeZ5SRnrXHQSQpNge93JmcUDj",
  "key7": "53w4T9a5M5M96Qwya6vhpFweMUEwT9zzMmVChbXWbnKQTgbmKUdTWoURyuKfsVJzPmTpzHxdaQTrQ8JkpU9dzJd2",
  "key8": "4vdsVaio5oBAbBJbXYNm6HDHupRph4BS42PFt2HZfNEBsa227TzycC9tJKmfmjyDhvyA2ekpqc5eok3ycBEwyfH7",
  "key9": "4NcvS6KPwky7x56R4FWdQiQSdJAB3fvJMqriKHMH1q4kDBTgqvWFuWyARsfjVowzHfrNFDo7UNTRvwRJMjHPrNKX",
  "key10": "5JK1rJGb8riLJaTLtdhtgzLycnBpXH8kAQwV8oBavBujwM9uF7Z8iX7bqAohRHPnhiFNDX9iqdEfA5qyfpDdrXnQ",
  "key11": "5x8S5FN18MsCdPXrkuqtmXCykXoaPi4TxdJq9yM7ktMd9zYKeJa2uCYGV4CvsUcWSMm6FM4ToE5bqtJXCxyWmRVe",
  "key12": "Dz6TScwQ3uQ7a86xnoRyuehaPG8LousSHy5x1cEMEyH2hzsN2mngBvTvmJucWKJCdRRbCMC47vAtSSm1QkNLnAj",
  "key13": "4sGPMNc49jyRwNu55xyqSotTUkxPaQe5ahUmmtnSDg7yFyP8KEVKpxNYwFrN9rE81yZ3dZpcE9vgYSWitZt4iExW",
  "key14": "4Xw7z8S2b1tzez5qkG7fmxq5eZ76e2JG3bGJDTrrvJmT9Ep85Gj7xe197PqEEoE9K1KMK5qJFbDFKM3AGdUrB2De",
  "key15": "QsUfLxVqmYmu63r4WCmN46KdMPDJimqh8pRmWnCbomQuaTPNcK86pep5y3dFT53AZ2XQzUw91Uqn66xXfaXCs7D",
  "key16": "UGWKVH93MjWUv3naNLtQ4nCihPG9wFeHXrc9VWsLUTnzHzKtDrPFrtDdP5CSjT8Akfaz2VYSZXzeLA8BRvJG7s5",
  "key17": "4SfLYiJFJUUXp97HXyFydSMBMrviuRR5VfX5uo7hNBJAPTXC8H1mt1TY5bdiRV7daogUu81bUZXiDwQJpWrx2HQd",
  "key18": "zU6HGB54NfBzQ6CWjLiJQyBBjm34565WR8YMdG7XmYrWVAHHPqXp1NvChxs4EVn5ANbK97PZbWGAiqgRXszmGyk",
  "key19": "4UZ8gRvnGB14eEKTvNtjC1CFurL3UemQ4JWaS5SN8qoa7cgvd1oiS9EZdeoaKhpqZSPUoBKsJmGW9nyshEJ1vRsZ",
  "key20": "D3pp8zzamaVEDraLC7U5qSTHupWL6CTta2gchFDfmkNsA6MiRmchQLwGzE7aagaCwVDh52Ex7pHZGdBT6eueoLF",
  "key21": "38Hp4gHNeQzrypMHteNNQ5WopqSgUyvLuS7J3KF81qaXGZKRgEfTr2Y6CeP4yRDTsCarXca2iuKk8uMvkR4ywuJz",
  "key22": "5UNQuwxVRcUVHgEQcpkKbEmRrQiZiYxskNttWw4myvYUD1Ld1TvnRnmDJFBREuuURArRREoNNcFkkbjxKPg21R6Y",
  "key23": "3C97So5so6YfV6hZg21vjvekSAHBqGTs1fJLiL39cKpkgtZtdBe7SJ44Y1F4H1wXsDpGy5cPBsmexUrd6U7GWiZk",
  "key24": "RmZjYM6ssMxvFViXRRYbfDxf79pVnoTpYjjgiG7FuKoNhLjB9GhY29fhoKAfypig8oA9rsfEc7eNbQwNLDs964V",
  "key25": "3ShjAFcaFk2TNayN5eRTzaoEQAZh7Lj6vAxQVYu2P7kwwaY3Hbwii2hX4mqg1imorF4qZKHdiH4TmhPoYxSfLGf8",
  "key26": "3kYKEgy4nF4Ab3gjYCYEDhV4g598sHGzAhLWHCZbcvrjcejKewbNDbtLuMsDEEcNKqRdyzoE23irGWKSr5xZRyRo",
  "key27": "Kg3g7PaRo7KDBDR3TYJn4MgFaHd5gUtkYGQ4RvTff2zxypDUxeYKtSzjS6uCHRnYuLnLT1fr7SwUHwgvQzbQRP7",
  "key28": "8vUEc7NEqBeJ6Re2S7aV8bNntieYyhgu7skmLbLyfsbxji4kpyv1BjvY6ntPF3TaoEnSYQB36fiNP55w5HZiLAA",
  "key29": "2S3PA6C4JDGEh2hqJEnbodFPyZ2sQzAGwF6d5RDTpWQYNCRS5W5HYVQLx5kFU9ZAaM7GbfamhrFhtm1wwAuKY51G",
  "key30": "2sSbDBCY7LPGpynYPJsAh7zrT7QjPKQh9Pt3JvWkDjyS8J6BQyWQ9MSiH1Mik2AhbNcWPaUGdU3nbFAGS1AjEmzw",
  "key31": "5p7uEf8W4QvNaNPr8V9HvunCifySR5QzJp9nqWordgDHLyX2FH3tuCU2uZsGmYtWQ3UoSbWMrU1bqtGUMZf1oAs7",
  "key32": "DgVzRbue49tZ4H7EqCx2P3SS5gR1E66sWBCrmmCg6oZvqXj7eF8GRZepmpd3vhdZzyXMtYRgtwgvFHUdYB7w9YU",
  "key33": "3s6s44PYLoLuSuAraLdcHSpr6AEa2ncoqY26Pa8Vseght7fheAp8MLEPKrMbqKMyMzgJdRyvjwhPa2m7X124A8eh"
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
