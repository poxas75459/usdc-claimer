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
    "2SJfPt83e8aVXvoHDfkL2hdbxkXeUBFHYMBeWUEiKdMPUtLFrv2HcpLHZTwvftQ1K9T2UtHPU992TFhXPUfJWsCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xx4aikUwMwiMfFhb7VssTUNLU3wByQ4ma3QKndfHziYKXEGNb8TQ2u9S5H1b58bxVGP3HATfzTg2H7448wJbe13",
  "key1": "5KooPq9zLk5udWWrves6RmPXzMm6T5S8N4VZGLsEjjoq5eEs9Evf1HnMyeZEaDGS8Eduhie6SJZS54Xq19vyhcFx",
  "key2": "2akpiCWBgTnvmjyqYsVkjSy8qH3kKHJDuSB5nM3HebkksQn7xwVaQiL1qSSUAHEbQiLkyba9A2y5soFZokFhF6bF",
  "key3": "31jSm6GnYhsVviFhii3V29w2KYWsXYRLRNZLb8dprTz6enHc4QVkg9CGVkiYiMKXDiEjpo5zaJ3GZrQ1CSzzhNug",
  "key4": "61CX2ei9u4QWW9vZWfZm7zESC5USVkCL1QhF8pNjUeWoEVoMPV6NdFswmuNRHqRNqXcPpGHshjhvf4mwCnJQHDxm",
  "key5": "LxjjC9T4LKN31zyW3YcZ96HuXA4232gSCGoPZ3itdg6TxvRzew3VsdWC3BC3iRzqAihgKJ4vtMBRvz5cokE1Ror",
  "key6": "61GEpS1fv3SRiNUGuSs2sccKtwkfqw73vhq6qBsHBP1EJJuDQoDu35ZDoVA9pcAPFdsAX1dJHQZZFFGJ8pktiGqY",
  "key7": "2wHhTNSsgYB8KGqBqQVttLFAR3buJD9snV7bYL8WMHWbgaGMYnzH5UNrtXWEmHMHdNvxDnuKaZsk7evK25T4uNzd",
  "key8": "5WNjTLMeXFgkH6APpj3yEXn4KZkBLBgZjuhBbJBxVv1g6psQHPyFEVoZ9q934PVWwMpqu9Uoq8jKSrHzmTFk3cp6",
  "key9": "5h8BwzixyRE7CZsme57zGKouEUv7wjHgPvkuo1HoW7wfM2tt6hxuyQwfpeg7NwNgHsk2m3mahjoDFt6bskZhdRKw",
  "key10": "bSTS8DG1b1sGianDDfVtWz8k38sV8HrF6j6U76cuPyehiMqrW2sbtoBwzyGiCQvEW4ESTMqfUn3D7zXPdJzedxP",
  "key11": "2Q87swJKfxmVtGYRPynK2U2Y8pJGLA6w8tua6RMp1cn7SeGvV6vdWSVSi7rLLgVrUw1ztkST1HK2cTn2WyeAAQcq",
  "key12": "3owLPFQ6KRgMFnhrrjX4VLDcLYw52AfFjwyXrobfBnDAbPhDZXwb8MdMrTYy3JSEX9bYy4iHM1Hxj7VkGqKtXPwt",
  "key13": "3y1rQ31nBdPr4BpwibtTvhExReoAvJUry4JErLgmJccUd5AfA8zFWpasYa6D8Z7oH1SBa1S8WkYgEGJoV7MgnNzG",
  "key14": "5uox3ZvmZpXZiLMVaAPJ5YJbZpF6RMd7fzgbVN5R4XzeyA48LU2S8Km8aNeJTrpXipuWAAKrRkmTH1TcvZyhSsQr",
  "key15": "3SWcipcfEquGWoqvzSTYQtRxiNfwsSvmkr5okuro2gm59ANQgUTqFx6F24kHEVHPEUmVzHE2YSaiHHWqfvPZvUdq",
  "key16": "2zUbs6iNUu1vYtANyYvyUgg5PeMgxpa1dKh2vYtoLYMqGYpxnqmYcE4jTEFTLcphQP3aTdxpKDuGoYRR1v1CzgYt",
  "key17": "5MgTzNUfjCtMH9xeV5jZeAFAZmQB5ZwgbXfHptNY4yko2QeRg3r2QkKKMEQSrkxVGMw6vgftLgY3wHfkKqcs7oVK",
  "key18": "45bvMfsFRoAzBkprdRTjhZtidy7VXxpA5cD6RJyonnQnQyefK6fDDGb9VoMGtuz29iUsHEQGfrbztjyN7Yj8CSmQ",
  "key19": "3sGerK9NDH2d2tJUvhVs86ZaJuJTVM4kFS9NwPQFg7MVAbLJ9QYnTd7KXe7CPjFZbbELYCBLiYaqWmQcZdCZNeRV",
  "key20": "5yKxfFpHwVry3z9DvbJ8TkNe75K7EVuPHEhYWZmqkZDRQnhN965q14EkMaVw4NXBPwvR5Td81QYyLQLDZf6XxW1m",
  "key21": "2cdUQGg2CUhNXpVTPoKc2AQfBrQmSyvJH23VNNStETqCEGxKgjajcp53NFSQwiQVRxHwkBz5i8oEiBuh9h4LzB9k",
  "key22": "3ZFSGBqBv5Eu9budkFFXoXoW6PTB9bkqsKTyPBxvYvEaiR3deGyC9GXdTyNmKiAjTDBWJzDFJUtinVj6WLsWro8R",
  "key23": "3L95wW9mwfjErZPH6PQc9QSwYKruuMofFYH2ijLy9hUB7xsaoeZ4izDeB1MrvHHa3KBRCsfWzGBMx15jtnckDtE4",
  "key24": "EksBKdNSbJxG9YFwzG9KK6unqhY2LYMuNbDopcdJLb6jNogUmzy9QhbG4nyMtDAV2crHitA8PcftxDvsUfwqRjv",
  "key25": "2LLqY6H9TMW4PNyaTFVfCVGC1Qwf2hExCjqbcSPt1CobxpH1erjsMPWfrSqvKpooHDNTsDZU22CYBagE4LcdEGDv",
  "key26": "WN7FU278Q2txg7KV6FMaAKvBkPZRts3Dz3dwcCTxinJxppaVvUr66u3pfJa2dnBAKAQvycuM1MLisxEcQN25Ji6",
  "key27": "2YDCrfv3kmm91sGYaKFewaeveeb2aRe9BtvzAQRXjc4Si8F6rK3xr7PMi1nPjRsU9RrAaKqDfpd5q7ovXqd6hRHv",
  "key28": "CdzJMhWEGXR1RgNUDhAGFVbhewGoQ5uq77ovd1LbnrSkBF72z9DeZR5QUqcyw2PKdBxfvwDQdTe9tkbA1TvPBED",
  "key29": "5rry4mgVzYbcP1fuwJoACCC2TJVxroZfD6BoHc75XLqjs1vSzHCx3VQ2fnCDRiHNuEzT2YheXMB4hv4rH5BTuKS2",
  "key30": "4qauvSDmihhTaGJ9bgyYAPSYS8STZV5B5xS653yPQx3TR8pr64v9erJfRAWkqJ8EiPQSDMduYxr653AcmPJugrQA",
  "key31": "2dvjfcyVQPNAmTCi11DijnA7ke9GhFz1jcNyh3v1JrwPbi4e75upwqHWXNr3ufGaP6YZbAy8mQRwsJL3RQNGfstW"
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
