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
    "4zQXce5oiVXiZahY8NwkSJngVLGb8aEw8wz4UBt8XKkn9wxLxU5DUDufpqkwP5rnJ5NbyRGtZvfaz8gmFCwYLkSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dki9sCKHtJmvYrx1KwbVA9A2QkcKEJvx3ZHCWn4NNNn3yKuoFNYvRZxgMAFJVqBovigjfhnRyzMhVM68i15Pioq",
  "key1": "4Rne2yuC78e4TGHTjpCNPNsND32e2HMXjvoyro1yrFNNkWeXueVnALYg8DPbGo7b2uXLGZaM1n5zf46WUHbUuMon",
  "key2": "3NdFeCsKGHNmTPBdA1HCmiNmpTcVYFidunFCr52yRZnUUVkd1a3LReR7j1AAQ2b1V2XxJi3bUe2vDEa4BgkkiBqc",
  "key3": "3z8QY1mvtYk4iuVPKdaLuVPojR1nrmomEVQrcgt1ZXybxCkb5TAy1yjmQptJsu7XXkSX4npVBTh7p3rcgtsgTqet",
  "key4": "45thrSiqqazPJEEo1Vrvr74KDG3BJ4nf8aNmrtJbxwbGet4Lh8YcfptWZvFjnftjJNnLYZ91a5zYBJgzWavvazEw",
  "key5": "3KK3B35D8BLAJdWpoELJrxb5pgspv7DfiB9fbYpU41GVD5rgBa48fhfTNzRiKwMLBx9NsvXRWSKp4biEYXuekEDQ",
  "key6": "sUKSujTtaigPXeQN1C7McNTTRrN1j8bmTGfJkCrNFZBwEkVpz6aZf3X9d9Bq3Nw71e4TCPtK1egnzrRhzypMoQL",
  "key7": "35RhdZBn8n9wdWQMdesB3URFtdzBKdpxLFLwcPTwKU5ANPsHVpNxWcLNnywVLUrvYkYtb1wDgoA7vxHLE2ToKDKG",
  "key8": "ZeqkgXn5Tg3bdHnr1L982rdGgfG2s1NQ9X38WyNfU5mqppZ4Wb8d1CQ2rxkD7Xbrf2xo61KB1dUWjswfc59Krng",
  "key9": "3HE8iTQWpqNmzKXrjxDNKvVWWi8VVeftuccJGHwPMQA9qTASLHYJ4o4qomWPzsPzZ65ice9pc3YspkEKNTCiBHR6",
  "key10": "4Z6Q1GhcvLmZRt5hbtcNabBwQ7bysA4fbA53CkeakBF1TTr1N2wJhCnQaiKpgsYff3bQRmq7i3b7o778f8hiuQ1p",
  "key11": "2H9y28JQd42gZUb79jZcmHBPXvfmnSCwFMaAjyN3NfHJt7hyPsjPhcWE9hgCFJn3oGqRXEQHqcjGXioqPZBcjPjf",
  "key12": "2uuKtsyCXzxqVVXwbhbJARvJv7sAwsmFxjNDHEYmAdznm4aXj4M8jimyrqsWuxpF9DErkvULPpfWg1NvkR1fi1AU",
  "key13": "4ECvUxsDASdtKM27VSixAHLDxTL42bhz7FFNa6PvcQmGdhuTDJJruzRAG4xjMZmfYkHucvLr1z14VSaDyBuBXBV9",
  "key14": "4SyLoWaEBodtTiD4AgFr3HKDhCPNcgjZPo3vmBEHkZXQVYqJ1mHKZHByiNmkLku652MwMQbCMup5kDjiH8aoimH2",
  "key15": "3dRpZp5mghBUsPCp788Faq4CtEcmVKYg6CYmxNQ7qhDbnA1ATdxUHSTnuE5gfwpqTcrvw3HzTHDmRNt9rSbpWM2",
  "key16": "2stRvouPSfG4bMdCnCwzyQAjnEGApVv4R9tm6hfRSnEEWevz31x23NhQt4TqYxJtm6rR4j3Eod1CsLc6SkfVPFva",
  "key17": "3FM1s4r35EaU9earnqRiAE2PXptB4gQA4CBDpp3vLWJsjCJGyG5bRXVUsRDTp7MF3uxMEoNKT6AgSG3VhTUgUZVu",
  "key18": "3xRaEuL2omBRVjk3UJTrczvyxKDuUq8i85e5tCaA4ZpxyTRkwV9eyqoq9NxLfRFHcGuzyo5anYJqo5NdnppcZ8v7",
  "key19": "2uHnEALRQWiBEmkkmftYEmzNgxuHEuvK55LRp3aWcqDcFd8Da9isjhUkngQUQ1NeoCXwDnbq4gvNPVLrKGqs2Rfg",
  "key20": "8WCEXsiqBJD4u1PcRjzAmDq8qqLEnCttfyuyDCUB5zoHdoMQnRrJ7c4eUQaUxJwntePdcaE32WervzuCoCN3PNy",
  "key21": "5JWkccH3bbsZCahfJiekifHrYReFqkA2Meahw6MjKv42L6Lw9TKmrBRgKrKZUwK21D78kb5KQrv4FC9LE8GNBz7F",
  "key22": "4YKLMFAXmgLpTSfhjRmvXKc9WKUGjKmsBa2coio37w8YTZPtwjTrXb63FQJhakgb2A6rKtTPenjK2VZZzP6Xzf9d",
  "key23": "DNqQ78VqG26pm3zkViDUk1E81dJqhuJFywcCEjKhBi9ztmJkwkhWShpmU8tEg7hMJrjT2uUgrXZCiF8eZzruRux",
  "key24": "4ZUoiADhUCQH7jJV7mfHscpWhRDyppGrouzsRdvy4ApVmuRfMtHsxn98uNryCZ9bsUsqHcZJ9j8uQybDctFGsRmX",
  "key25": "5YsTtViMKPFhJvuSLp2FrXp6ePcx6mA3wc8oJhg647YnGa5Ud4EQMJ8D3WS67F5PXsYtDpikqWQ4CLS6CfQY2WqR",
  "key26": "5Cjw6p2uM7xYnUEWaZ6kDSxTfacRfQLBiUg8z7KmxratSFDmtNUcUKmCoYXuc7u6mEYUNydcYNsH5YGRaVN3iCmR",
  "key27": "2g6d4hqW5yaqorLvLDK61YhN3tBs7rRhT8Cz6mPSwwigEFohpjvmkECxB3UNYnYG3GYM79mbrXg3FpoiZCSJSWKW",
  "key28": "3vw1fFkZQQTQxM59CJXUSnnCL5SPzCUcFSo4479wpSZ7uvrfpbe86WtEJthftp7p5eH9HtcAT4VtF5T4rDDBLM32",
  "key29": "2tnmDQdxvfELJjKnmzP5A9bKzBZxFpVCHVFQApg3m3LCHnMMn54FKJLNy82ScLmcYiUr5vwWbyroj2Cih8HGR6cY",
  "key30": "2MSG63m4gaV1X4pykFpHDpRaEM91TGQAaS9buPaKHjdZfjjqguXQVqWNTiNavSxtgq2taVpH6Py3trx65nTH5ute",
  "key31": "5zzmQ1FwmQA2bwJU7yuNtF6PgneRvGsbp4BkY6JYhiMBLuNEDxaDa6zrXHcEpQ524QYpz2vAriTHc3mG5t82tFMo",
  "key32": "3GFQpRsJxKFtmAvAXW3LRYfEj68gzHD71ajZFrc7CcnXR7ukEFRXX4fKSVUTMQAdoJp2Lc6X85665T99Qd8F6Cmf",
  "key33": "2t9x4JSLvUjk7dsGL5do1awYPqaE5FGq5oBNLnxijLuRM71mQnqWQFWnv7ge97XRc1q5GnMEeV8yD4XxdiPqPGUg",
  "key34": "2VUymFcSs2jxMQEZAmaWjeEx1qQLkq9PivwopYademmie9Bj3hx5cxs7wsV9679oMh4uz5pc77mXehtYZXQKrgtZ",
  "key35": "2PWCjhUHH3FM5UFCQjnoKhAd2PcVQNTTUzkenJEt2rsPNkNiGViyCPB1KEXogiRQK31erDN9NCKM2HNMKmurYyBS"
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
