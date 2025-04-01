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
    "3aPkLMFZVUFQWenS1zTwQEsLAUwXrkzbJDZzEky7cf35WoeLixcC5LAVtV3JhupLv63EPP62ESTSnYeqs5xJbrqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPWYWD5kryT8HPgXUnju1PDHywiExpFz31UUGeFbBUnVvRtgdTUXnR6CJcRGeLpZJBJr8454u9Vekikdw5H747b",
  "key1": "52MpJd9B22Li7L16yE4ZogVDe8e1bUQXz54nCugnHocFQvPkbRzburBk7ZZhepjRXCbWReeGnudg7Ko2smwEkkJd",
  "key2": "4UzsA5h5gEavwqnqyvgeEwxehhhZo1LF6nPHFPcUMZuGGromFAqvtTWXqZgCPeRbWtXwCD9peNxJQUVcTBnQzTMH",
  "key3": "3EEuF1hPpobTUw4VQDPDfQhSSano3Eei49r8QercogWAqU3Ki62srVDhGL1wi4PSLSovXTdYax82fCuQ9UF2miFV",
  "key4": "2sjX7VDcj44vFdNg8wfqFQjY76Pg7T5Np6AmkzbwKPA2RzQrfA5PhFdpxFGFWg9iFgkw5vZEF51iA8KddkrQX5em",
  "key5": "vWqGcbufX5KyLAkJxN5JMjvAuqwrshDomptDNa2sNLZtNH5Z12QRomJ4sWZbRME4rjk3aMA9DPAiKd8ggRZmXEJ",
  "key6": "3Ei35Pc1aAPExJxb5raJRyk6QBtCP1yzdB4HQwW8mocYtecYW2hRnsf425gVkQFPD6f9uMmGcu1HaXQwr4dTWNG5",
  "key7": "t9GzamPQtb3qc5kHjwnVE3425Wq9mXWbPo55wX41byYaKG3iW5HbusywpAn42djp19eAyQbXNEJFpKdbzuMQj9u",
  "key8": "4Rappf4x2TXvDYQD8U8TzntSTuGBEFU6p69c7BBMGd22mwySf3V7cYn1toQrNcoGkjouxqHrR3AtAPk2Ufx3wnYH",
  "key9": "3PKqgHn5hfwCjjt4UbdTscbZdc8ehT4DjYvAD6QXsrmnNMTzSXGcFxbwW41Zp2XoSLzyb6tVZHBoUvrFjSohdq6t",
  "key10": "2jScbiefTR2dv4N6kcaNGV4ptcNXvRdVtqaVBuRt8z2z1ZS7khveKJBfGcvwXT5ZDr5ttCGqrwszSb7psA2rL6QV",
  "key11": "4vSL8wmogrRAM8mVkL1fckAQMCdmj7AQm7jXjkDUxuj8bKR3mpvg7ZiKPBK85ijinQoAr51EZYzWPVXYpdfDnNp",
  "key12": "3WmFJKXSusPGL3DYsVC71gKUqfkJHwQUXkc4YrwoRzF3afVUcKQbb2mjtcswCL5cj7jRsB4YsZRvdvBnyeRDSPV1",
  "key13": "4TrPbrfChxpQEexb9u4iYPDuLe3HZVES2VcAb8QSnuV4ZV91KfabPeiM7FXeiyEboWNGX52racTHAVxfqoTWjUMq",
  "key14": "5p1NVyAn6XRekidfzaNLgXUiRFYFwLa4RJCkpyjkCK7DvTXmzoLgwGuXKD3yfUA5era19Faf8YUijgetVc2mDBNE",
  "key15": "A54RSAmfFv7pkGkvTHEpbcTauvWKEsFdAkN2gZPVrUYwKuJHicbYowSn7JqLn9kYXS6YpuhEqBWbw5brm91aqWY",
  "key16": "QFDrG7QKrLqp5obuxbpqTPT4fXx7gSeuvzyJGWu9HLL6T714HqBRDehA6sh4dt2qxJbYVkYR2JXqsti95LS32Q7",
  "key17": "2t5Rc6zTdhQaBiECT2MPCdxLhvLJnvFAsdFWs7R6j3u3QG8z2Wd7dXsGHWnZGiGAu1BemfSTVFdnrdb7hb8T1cpq",
  "key18": "4NN9ZP3YBvY5Cvrp7dsjkDbaA8bizjx2jZzHB5ZN8WG5KB6KzqCZgJWiVYqa1Hvew2mgADwFvCb5Xb8gfX3DvpL6",
  "key19": "2kh8pf1iaDwRtXThVuD2RCRxQCewgDf1CHWaKwYTzjpqCdHrdzSej3K4eKBfXkSEh51ZWjZHJ4kbnJAMtqLN7xQt",
  "key20": "4RA9MKHHvTYBv1hYhEUcPckaLqxyjkdGQDShdThf9wXxw8zG4Rou9gE9HuhZnWRuEhMidB64snTGYhouaT9HuYV4",
  "key21": "4dQY4Nb7B5QLrVHmmHfhSPHGj5ojTCk1CcvGhBbRdxaroTjvphk7ckdRoRdNDKbJbTvKod6KUjGi6oY6f4wte17a",
  "key22": "hx25HZ94mwHBfJvKR9erx71o2S4oaLLs8USyz5Q1VRvXc2as67x1FZkYtSFcgNP7o4ntb2EwRHh5F3YCntybP3u",
  "key23": "45iAiGUHtfjGTv7qtZuf8UM9B9zkeGaBpFeUNwMrzPu9S9epprYc2rsHrcukfApK8GhvbJARewtEiTTZ3xQGDFpf",
  "key24": "46mAYEJUEWHjNVLYZXpem6qdpv8MdtY9fTY2GtqywbUVWDkESSgbqVi7NzVakdJHPuWjcAN75K5hqwTMG4e1r5rY",
  "key25": "5pUtrGS7DY8AUWu9c62nzb7TJnuY637HugekusrpVd5bzgJv8ft6oNoJpNsRAJz3F6DWaJds4xe5jsEZ13xRtRne",
  "key26": "3w86LLA8V5ve9BMd9tkifmwESj1ixuv7LJRepHP7UmQGUp37FDAbZsW9V2odWhdq2EBxEAnf27aMoLkBboCpKSAY",
  "key27": "2ZHAKtxwLAcfo84RRkwckec2D7ywuBGXwercdwVdtjqKB69oGy95xZxPjM98HJvXPeifh8UqUqfRsbnp9L72BhPi",
  "key28": "6QM5xTCvPPmPjsb7xG6NjhzFBmvjuJkoWrvmmNPb7Uq1SHso4CxdrxWZAUTeygosiVmFWyce2XHqEFxtLrYv4t1",
  "key29": "2myXgspSrNRW3AQ3ZWjKvWN6dby1peXMnT3XUpfJTcjMdVgVYXeScSZQYNPK6GmhDxJi5biFcvxH527KGxKihcbY",
  "key30": "2L3321YXCGtPGSQnwGN4a38qiu6etmyRMUtoTAS7VzRN5HRB6n7UuqvCmVKC2SapJaECPpgWVHRctGsGzDtXMDQC",
  "key31": "veuhtVVbM67hMB7zqPPj2SHN6raQgU7kBak489UZXfT6PDww4mDboJkqGtAcU153ouwe2q455evxXssxk7R3zuV",
  "key32": "4TzLh7hPKZPGxzFyHSeYAvQBkzzBv6q1gU4qww6QEQ2dMt4JDygp8wpxnUMPzri1hmuMFYDTLFpChvzkGVAjZLXa",
  "key33": "2ereuS1hxdVyUWfZ7BAxhCdH9zKXz9kb5uEBfPxJAzZvK5YwxzYLDrq92j6nHsMj91Z6SX4v1QgG5HzWs2nNCGhG",
  "key34": "4evg24HS8VLFA5Z1K68QetXY8CHcSWrR4Wbm4czyywATu2rAitYEBfLgqEcLN4dQg5WJGzndHCXMvoMFX8g37GJ6",
  "key35": "5f6CEu4eahqCqukMLQUJDGYMTZ1VxDidsy8dtUoQ9pG2jKHospfp67KnVDLChCs1usLgfM45FvYfQPwoCckusfa1"
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
