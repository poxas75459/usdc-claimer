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
    "4BJtqfeBg6Fn63hmwUfN7a4KKXVx5XJyvEKPdXbpw4HzjsjTdJV1rXvHbjk2oLpWEgVu6wTGv8GVWYVw92sAgzPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRwY8dA6Eno26xPtMEG9aT2kKqe682HkaCoiNUBanM3hFwugAg9enJZTWg9pkTqMbb2KwqiVUyTJqLKKXBLTCVy",
  "key1": "2X5rc3XKTHgeGxP1SuCTcBf1QaPzZBES4NCUUPe4bhMt5hDvjMM9tcfNLShvCg8ZJwFyFrHPDa5LCKwN2nC7j2VJ",
  "key2": "3r1svcyHsheLcwvB7P9iL9vpEdC1d4eZSXShmVgKM3LpvWdAgvsRwNQEL38CQjn87sPbcUGns9WMSLTf3J18qys5",
  "key3": "5J382BSATxiaVtBQFMxEht3giLpe3MLrg5F9YoXeCU8EC32pmeKxuF94tMbEj6pTFkHUjQXwKz7x2myDs7dYAGyC",
  "key4": "3Bhix4T6njkzk8Rb1F58FqaJGqyxktXHnTz6sq7sFTriPHsP55w4pmTrpsx3j5gvCWksqNNULig4JWSyQUMa2Dfj",
  "key5": "2RfjcRLmHgFtZ7HA2bJEc7RHGbyq9vLXQGjGprXA3z8eUAYvfAAJqzKo1ELhTiNZNf72UqkwSiotvnayUYrh4ydJ",
  "key6": "Sv3z6eHu6sYbXtb8YcyhqQBgGYwsbw663h9dK1G6NtVPBUjK3ur1RkmhG6gAw7A1MZJA5ev3AmvKhJs8c21iKFb",
  "key7": "4Xe32oDB6kYXXu5vxQnpEpRsYBruTMXAfRS8ZsqSpbQmvDDH6ss9d9icrG53QWqBfLQm56XjecqbbajfZPF9PpPj",
  "key8": "4avgdDS94owtXKPzoQrdUZPXUPDMbeNfMV47DQ41Nsk6kjx1BEMnDP8VBJtLnE3xtrDvVTMasVTat86fqV2XF7gn",
  "key9": "P5wH8X3M3D1U1RdaumRpqVqnauQMsB3gzF1vvWxUrndPUNeaXivuot8VfkVQXQKYNWAwhT5H5gBptoXeckBy3jh",
  "key10": "JfDQ7WRZy8D525JjuZLECKxk28PooWCJxTxRKiQzbc3NGY3W2EhLZwV2WUyu4MayCwHoe1Sfr8QKRYRjmEWWXr2",
  "key11": "mriMyaNZXFqeqTXNzoDAUChwaA2m8Mzr9VsdHDMVThdZbR9ieBK8fvTGt5g4JAkmTtKpKZ4dgyMqeAWxJce287c",
  "key12": "4kYabd8FguL2CLoyxeFmig6JNiGmtwHytDWLt948ajwm29yzJfLnQTr2tZH1SPGRQyaYaEuzP9m4SMJoNoBNkeU5",
  "key13": "3GP9Py8EQqacG8Deu6adAzhQgtrRaMES8URqbtee1omP8zBpZiUn9hkUQKEotZ7AGiNf1TchFJYxoGVTMFVNjPFJ",
  "key14": "2rRRpGrAsqDqPjqyJzBK2PUrWoS2FMKL32Dzq7vsr8NpATWKZcbPfngUzmoH5qFBeEHZDphaJQMFMu8239fg4Nbm",
  "key15": "4RYrmMUKUoxZZBKH9x7u5DTrNhAR5EX2G8yJ8W7GimcpZgJua14Ks76iGXbyDnBqAgn25MTcxhqpa31xqJKk2w9P",
  "key16": "3mMHQMWVT6xXJeRxgcSmGFmCTBcMrSEx9HRWWFzsd9WPZZTAtbSMta4eQktwKYevsx1SaNtPa4qZrA3bM9SvH9Te",
  "key17": "4GvsdgLhe3M24YE9RpQZfM7AdVxPaEwQb1KuokJx8bGc1bHLc1rPsA4faMJav6ASzBiTqLXoQWCsazB7QWkuoBZ8",
  "key18": "42rCyTupQLsuGGi722QRLZqFyvJS72W45NRKrYJD8W75bpmeyqmP79YLb6dKmEu8KLPgR6WnV5nqVZvK9rTH4pGT",
  "key19": "3EgQ7RzdjMR88KE1dpZp8yTDvTpqwHwBR8kkPf8VtSkKt3omtCBxv3sbehSicUYnkCoAxZVLRugKtLG5Acu4UjTj",
  "key20": "63kcTCd44XpVX1R8qbF2GfURMyQ2i64AugAtKht6P4C1iSqvqoWrvUALuzgEWeFoxJufJTwkX7ZczvbjKQyny2M6",
  "key21": "NW4caY7J1DXk2W6tccLnB2bhCfducArN8WGEdtq8gaN5qtdv8EyDnDLGe3fXs7QLiaqNuwBL9UGAoVba9MN9U51",
  "key22": "2fb6AYozaDBmkdoHKTEiLdX1PMDSupQQZWuuer9W2nCMmmqynSSZxEknknMH4Y1BodATdkBN9SCPtydahZSGmUBW",
  "key23": "3KdPK3ENcgTR5wWRaP2zzKUMtHK1Jq7KVRoXjvAyR792infEyMko6XNuHBZ2eHNgGrvkruAtenCkFPBaZmWE19kA",
  "key24": "43h76m7RJ7AjnRo2bq5R93ymf1bKuUdRYpSZ5gfbYCzJRobDz5q94LUgLroLuiQAZGHBtFdmLg1aHCifRmG2gkJv",
  "key25": "U8AQiUAdBNT35Vi8VNQpX5eYySMbYSH3u6rUHGhxzpJmCpaXcuD6boqnK4Fy1MA3EbKQgNgUCeCMYiQdKVq49aB",
  "key26": "3jtQSJDhPwX4EwikeraQ27B99wuktHgSZA1mmpmJajra1NapCVgnZHTDVXRLDm6FZKXnS4Soi223Hh8rH74HzfoY",
  "key27": "2LJrpaNKgWLf9MWZFsZ5tLhHvTgjJrEJrsP1QmjssZQgYKVa9THLVqkA3Y6DH75kzzygVQScvyQrpE2yPKQ1btEu",
  "key28": "4FxZ8dS1Kq5KZJi4yfaXcJ6eyMthGKsdAwvgF3VfckasJkS85dtb3GBiYBpK8QxnR66JGSNyX2j676mLo2twwCyy",
  "key29": "4HkZahzmgwSEmhkT4ZMsm45a1PAtGfpoQxwFiPMk5cciCGea8wEKPvkuvRD98HsajtLUT95wveHT3kTq51vKy1yf",
  "key30": "4ZJqAWRLveGtzUXNdo38kWPEMjubdKDHC36DYhMRXJikzAnFG8M1yUex14yvZcWpoTVUVDnW99mJ8WhLijM7RrNj",
  "key31": "5ataKHp5bnbZDRt9vAh3Ln4SCfV4opFHEJkLwxSMPanaWgPupALTbomiRPN7DzPktuDCcXn5MN1wQFjp7QvC1ucs",
  "key32": "BPg5zrV7yZvYmskmtHbGCC4Ezs1PnTjeoqNyJojYWxSjWfZiyMLmQE71hMBNbToykpRv1zkpjvkRnke6csoLXGR",
  "key33": "5PyFUKiZXegaJc7Q3p21cZnRmad6qJDAZk6hDciDTsXtG3NXGmGBrJQd79WuBdFhmjA9Mv7rb9fPcwPA5hyQdR92",
  "key34": "3sy1XYutKvDPeM9LX3oM7YErusD4tA4xVLiyeo2uoiZNp5vveUc4GDE4sF4F42XCJc2w25sxc6iBoNMYRLsPVhWK",
  "key35": "5bzT3MpvgJw6dv1vT9o33tmRpDuHE4hAzjAhvikdMnEBp8urKdcdkizDtjvU8TN5oYpfbybEnStdYM9yoaTcEjCn",
  "key36": "67GD4vJTmYsjbp6v873ZWdVmXveZg66kiHAWJmb25UPcEfY8Py92uJtQxfr8L5JbMCduqKAZcrHcKpVxy6mdGoeR",
  "key37": "4uvKaLZGnCryVqD1FNTdjbzwiJPHpDK5X4MUgkd3gUC8VxftuQ5s9mv1a2ekEgfXdFqTyCPdFek1JAnqEykHae9b",
  "key38": "36x5j3bi6fMLcPjmWxQHJ3Sr9fmN6QiuVj6ndEdzh21vro7Jeujc4YBMFLbaar1BSaikDWjmHKPcNebjhBBKVoZ2",
  "key39": "5UspueNSijwM581gzfLYvzKzWoe3K7Fq3FtCNaxvsYf6TZbDtQZP7V3A7uXRjjX8khfQpCNeNodzSF91PR9wp3rU",
  "key40": "28KUuMekZ8o2VVqAiJsx2WKHWgfQnbtAJbD6CEGZfehGzDcionULu3FfSv1D7YE3oTnbqCdodcLSLx8xSoprJpfs",
  "key41": "udeLVBfHwfuPa9sG7GCtA3HCTLbUQasJziFZ8LZPJAYz46DspygPSCyDkwrVjpHuybRXLN54YLhSgj5aVUbnnY5",
  "key42": "3fFZJ81xZ7z6Yoezyf2XB5i9xnW8maMMyKYTvb13HCzJxBCeqde2zoT1yiDMdyfGnjbKT7T1LSfRNP3uL9Cw4W1D",
  "key43": "2qPE4EMtWk1bAidCdH7UXb81c7GVnp6yG2zcdVjwm6LNizsdci7oDZhLbycTP7eK5a895DgkJvbrBfhK8j9YvEY8",
  "key44": "3wcDdz8Mv8N6FH2iXjQ7CNHD785theBm6v6cWA64ozhNvhS6BbRbnTKYocx4HRShvoFogbAnN6q4XfqRXzundyA2",
  "key45": "3LEPpe6Jzqtr93iyVqN4qnp6CPrzaRJfTPfFDGMVvKrbXFU6eK1ZfW3aA4QMoWkSvDHJZwwwRFw3Kr1A8fAhF6Bz",
  "key46": "2cKwjDMwDc1JUJc9sHLYMZAbeKyjcYhWrR3Y3sTw1h7w5JDSKN8YHn1g9NBLwtWtuueRviyJFVuktmcBc8WusFCc"
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
