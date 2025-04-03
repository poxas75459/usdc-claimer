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
    "58Bp1LoszmbXWEaDoNHPq1CeX1fuSwHVfeqKALsBRLpqKLuJcDAJ4YqFSvL6rWwpMyfpxCvPc4BRA1B18P3Haezk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qw8xZhgbtJokYG2DgJj4jBhQd4jDQMuoJQQty6a1rMNbu4S3o2moopWecZYYaVFzsQkGwawYgYHzcDmdm6VSdD9",
  "key1": "5mxLz1YbZ8J9ahwR2BdxiUMDVKBWQimV9nkdhTy86P6L33A8RJcTJnXzDLqcXT9Fd37g1DZNadF5vSTuMY566A4Q",
  "key2": "gd3dfL8CUMsTF4yokqwUTF8PNuzgktcHUBEf5xav3vt1piuDEbSKT1Ff9jeN6B757nuhJsvBau7Ri4R7Hkc3zxC",
  "key3": "55eEbXrn15PodXHYnMybMP9FJdDPQeiCEg57Nta5URezeFkQckqvdJ4yYtyc8mDvMCCLhFcc1uhFJvtDWVKQrRNB",
  "key4": "5uECnjjfknhMQvDuExRSihCcYeR3goqzj5AQnVHFqM96mdrax4JxsoXx2isfRxFKdMB7bkXYZZDzX2JiC8kHokMX",
  "key5": "4QGAWZ7rN6q9kQM7BUPmseXVXP3iScPe8oRz1KdfCxy9ekavYfdzNm5gehMWZ1LTmchkVqB5rMxCCd7nRoMKRZxL",
  "key6": "3g4MqtGCLNpTaqw21APe3Ru4LLcLbHLgB2HCwLPRciXEVuv62XfcD5eAX6Hj28aM96euVA5vRTVzeFyqs25WMbm3",
  "key7": "4tt7TR2y18dTJTbxFh4pw1vforvdU5zWUNAGUy8d6nBzXSXU7Tm45ESQ2wj9dpfhvXQFQBkH7a1VrsF7qWPNjWzB",
  "key8": "bumTcA9dfd5r7Qse87ncU3vUeLzFdtVi5xTuD7jxMTaHpqSFKiCbKL7tShHbxcmFBaqBCJMTsATJXnKGLa76woP",
  "key9": "4wWLptAgBNxcN5nSadq1ZFaPPPZxjD6UaKkcznV7fiX52qW9nm7EmWFwJ2cBeNsxNM9j1Cc9hj8GVAgmF9HQUN47",
  "key10": "4UN7YEuEPZ93x8a69LJRYbzp5JCCnto1WE6wA2k6VGFSv1BeRsiCKGVyDyX2cXvqEXDtVJ6jCygZjhmg7tgd4ALG",
  "key11": "53Mt5SCaqNVNvzv3TLhWNpffU3Y1MbxcSeXZDyF1qQQfha5Mz4ofDMk352dBGTS4zAGahRWQnXp6TtMPEDqR6FyB",
  "key12": "4BUBtfeTQvufdhRNpkCyq3GM69km23MM4CVxYpzsgA6n4qBPAezt7Xb3N4utbXbwadw2rYaeuELsGYfmbh3neHT1",
  "key13": "5C4WxjKLtkxGX2mmeQr3YXRPnNKwhK8E4TQWn3kmX7P6tJ3j6oQeABeZ8Kd5e5zpVsUZ3pbwW2UtkntnYMBrKW8E",
  "key14": "5u6im6qiQcySRyut7c26ss3zqXFwaoircFASdj7Je65BGAfRHUgW5hMc6zKCTEw8eAubx5ZSsu6c18DqUgmonj9i",
  "key15": "5T23NTZndiKz9qg7HR4BYB6v3tuN4vA1J5WBywDxWpqLKzuGDDwRF7LdMkZeP7KatB2FSN33kBmnfKYmz3MMJSt3",
  "key16": "5fN7kNzPkTVpY3o5D7RU6WF9HcUWdArgaGUeHa1dvZe4hpRx8D7ao1mhzDLmstG2itHGYQZjxn3xm65RTvAnn57w",
  "key17": "iEwHTjCEXLRwrfvfsxAVfwAEyDjvgPW2oEp2wGskY567Dwp1VceUDomF1wCLYP7c51sSrNsjuDGKZg3wHMaeZgS",
  "key18": "3BhgZZ459dMygbSEt8J5GAgSLYj9ALn44adc7rPnGbSNgSwyGnSffEWNCJZEY4Rr2LGQgpsmq9hmvkgXovkUhQ7z",
  "key19": "5AahjvVm7WffPFHEgBtUrDB3Km5xBC7gygdausWbb6aoHxmnM4a9yD3WEYNo9SAQ8NUkPyqzV9W7N8U6D6rYWCbi",
  "key20": "ZTvNGdnL6kQhKgYRyxpH1b2m9U9rmdZMncGdqP3fFkm6DdmS7gT5Pvjr1tLDKmWAGFqUpGwgMhm8XUTFbziFEYu",
  "key21": "2X2k7VqSHL2FzCEiVuYbSrDqCfLg9jmpBRGkntQC36nHWDrfLwPQdnsQj8VaYRaCTNAUzqz8wnbrs4WUVXV9v5tU",
  "key22": "5n55LsL1LDnwzQxnVw65uu9UMKEP4mJK14cFrNB9QS45qFLKiomYzUfo4P6PFDeHqgPpoVkHLd72oPY6QK862qJD",
  "key23": "38RCDzjaCuUgtobFJoykd1FTV1yzvy3hvHXowt1tQfy5eCANNdpuu9zAZrMY8tftez7QWbqUgM5t3PNyUM7GE3UF",
  "key24": "BYTrzyCN12SwHmDMuD7fQZNHpevauiSDyHWNUwcg9GP6nzYNH9UTtr46r5Low9XJnbRx8Zxic5MRFYP4nL8DCeZ",
  "key25": "LMYACjQNDB4ReDFhBZrQhwNra3Fk2U1EUrFFzoktuBiDwR9KY3LYaw98TGPS4q3vpADKoiYeKTKtGeM76CB1gp3",
  "key26": "5F2MGvqQKeMcBTioLbGagebsdsZVaRz3i56dG2cVSbPwcjKJctHr9LmKLj4qRMTxxuFYquuY7UsbD1bk993YKS6v",
  "key27": "2fiFHJsbCjaUkzQLspdnvDZCpi5r45YEqcadKiWdrWJZZofwH4VkqTa8yTX8dMfmnK8sMAkTg9TAtpfk3pJQsnHJ",
  "key28": "4cddCJ11KhyPRBBAET5JqVwrEiR4mXiRaRJcCWFssU1rd5Mghh5FeGRjJSekjXvyZraLpGpYFsK6odUb8vb9PaZ3",
  "key29": "h1M8QtRcu26Phpg6R9h26p2n1ukKgc9ss82k1NrCmq2ZWzG6Ha1eD8cdKmBGqxyVVKRbSrE6tAeW5WxvLXoiFZa",
  "key30": "5dX8e9uoaZRyUFWmwXHgjsYpEiVSAyNM77kZKYJ8DnWneQTd7T3UXJsyHai8fLBepfkwymfLC9dMzHYoaGDUG9bC",
  "key31": "3e71dRN129k6xiriPx3Uy3KgACjfRoSAVrC4VHXnvjfsqMoKMmtEFDamCdb2EgTB48pyQ9XRuqsrJetBLRSB71EF"
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
