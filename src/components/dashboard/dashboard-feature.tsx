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
    "3uoj7LwiktwaDFfnkpUKXLTobVFuQf4ehWtkxr4aCG6FRWxdnSzfq4jjkfDdegaTG5TxNWreJU84zJ3ThMLDvk71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNBCEQJFUuAtQFSk9EYNtR2uYqZN6Wzkdhv8mDoUKvd6jqhcF6mXzvRRakxq5r5QfZKFYu2uGTxHPPWjs3pRS1T",
  "key1": "xZnZWUMeKW3aGWj9fPLF4UMfCH6cHSYas4tskMRxsNkowE86Aep2NhnmiDvwxRX6BAoEn4qWF3wgm2DodyF8KS9",
  "key2": "3VJdNi3wzskE5QNTZR8BhhCLhdhmRoi8eK8hyYWFDxQ6ejehehaxhvfcnvbs26CPDH4prVEmqxvSrtRNyx91wnF3",
  "key3": "24R9XFnMz46qcQkSijriGsCaVHgJPHU1QHJtgpE1i22p7FACGh6RU5Y8bz1Z2uuedLfrDBWCQ1MVqP6jDzen64XK",
  "key4": "4NJdcPRNgwpJQhk8vYRAhoPYZDTQVDv3zGN1fFeC9p9eqbb9mL89YLsjGUDc3ZqgQdUkGu2SvKUErLUk42TAY2Yy",
  "key5": "4wLZpJRmJtW1qtgqhaFi9ZJM8FRApdYNsZtWXzMzmscDpUog9Y5CRqtF5C1J2cL5TBo9jgmnCpSrUAeHSh6joTW6",
  "key6": "57xHhxRMDue2coXLbqFXSCNZNYMN21V5cMNFymo3Nt11vE4ieuceGBtrqbXx7xeAGdark119jsiHUFyJz5uwb8Y8",
  "key7": "22X4rvqw4Zn9hyUxTtmgBKD5LodLXEsKbHUdREU1WJirjM8BvhGn97XQPDNLHfEJUE6jdoZVXZ54YLVBXGeSxwyR",
  "key8": "5r8461HArH7dpYLaFUt23cnjrXWLUVdR6zye2JUz7SFC96FiaJMuaXRPWfwJ1tzS3zFc9W4easv9Vo8H9ZKhPoTJ",
  "key9": "35XhAdwvvbkhaPm3pHRyCgj2j4nqhbyCjqjT7UjiTEtbp3CYtedde8pkgaEKsvnZ1rRezNsJ4SegNQcf15LNhPk1",
  "key10": "3VcdBUWdJJjcvkCHy1Q3hBiMjPKmXj1PhzoHzcyuoQRAvSAXXjPk3Nmo7HgQHUP8eDFM7bJEMvPCS1CQowBMCb7Z",
  "key11": "4KnQ2LdMkMA1zPgyYzLctFAwTEoVFFWRwuWbunM9zwQop1rcARb4X6VecUGMb6o2tKsVrYt5k9iQfwcZHaNAJHWb",
  "key12": "g7wAMyvLvAXKcjPwNg8FJMnwwMtSYfrAhEJpdYfLjcssiobCRvkRhs28Ju32oX3wKqv4rRsroELYjc5TDQjietF",
  "key13": "67PpUDBNVdqEdTf2SrGPbSWEURzeLtkMQqaLFyCqobDZjjkoiZpD195XaaFnkJ4nswyzgAPWuo36y8nVj5LvXBPQ",
  "key14": "3WhoNm9HhWBde5uLzNUK21Q2hKFtpr1eKPrz7KL673392CAFyYqBk3JBUJL7VFjhQw1tbPmjTa8ooBZqVw8gq9pR",
  "key15": "SfmkgaFTbH4bxVDu3YxaEcxhRKaHz23pMSBi5K13Yc9HBWFvd4NLCkXss3tUp7NSdfHabRZPsbnQ6qt9PZZSN5p",
  "key16": "3wvxpszoHh67hqGGjKuBHAUPP2JTEXv2hBBeT5xxVBmoyrsy44XeERSkVAdirXruDJF4KgAVTYXHWzFXFnZhHt2A",
  "key17": "3vpuLWg4nFoAx21FbsML99SbrxsZjSaejDdF2bn7rJ8HFR84oYbK8jgatWwY9WAfwkEYyF1tvBJavRQFu4Mi7XLP",
  "key18": "5yAKAP2Vdiv96vWpLUSdc8NpbkfYX2E3EysTvjSS5DCiKweDb5sQCjdgxdY9n8PttRUUDiNqBHZN8n7eAott552J",
  "key19": "5TmsBuhmqnMdNkNj5K7whvy4FrGqGcBPQgPemKBQmxbKDmtP2qCzqGhVufPmxmFappgHnGbZ6vA6Q6j8eFXKxtak",
  "key20": "4JoufX9WQ8GCyb6gVrjpwS2BYt4jvQewmxJtcoSzK5S13Jwgh96wD9c7p1NDhfSxu9Y9A9zXSyUeMR4z4192WSqr",
  "key21": "3DJ1d4fSgwpwCFUipAJtX8VVTm6n8e3dq3TocmoNKYgAdp2p6dqj5WWmNc2KDgVpQooTwnYsC1LFARXuiAC5g8C5",
  "key22": "gvc3R3FHuunUR1ZmxpL72moXFZYhkhjXa14rckdYKryUnfmepRCKBfeSoxhetZHqwxM9d85jpWwyzDxexB62WHV",
  "key23": "67obRzHZcaLMwHFmMgkcPcwscubU5XTHpBNeL7qryUXjwD6XhxNQpFHuZ9YcTmSRrDA6rDfMYnJhK4GwkwXk6HmJ",
  "key24": "3MfmK77gsmPZfFw8i6T5fyHmgbPUwQQdhVLaJCpXVNe38aG62myxrpLYLLo5tTwzAPc9BX3E2YJ6tLgsyELUjoeE",
  "key25": "3TnqLDCqJKkj1dZ5PMR7uoebJe6aGA4wtXRUta7FezmqUXYTUXbh4jG5hbgg2iWzFZueWPK7KxxxwMGfb4tJ15uQ",
  "key26": "3ogcEX8fdPbpqw3NcuEkT7aSXczwjW2upmPDqbAmq6CtjveFjF1dh3aGDFphic3bxNpst75s1V879dYjSq7K5vmy",
  "key27": "5BzATfzwBC8R6ECdsh4B6cnT5LaXPZ8gZFScFSbGS8aqyEMHAzPgKTWi95vZ7H4UMHGpm8XRQxPkn2HW6M8UQrSR",
  "key28": "5Jy2yZ6TgQhJhx7j88uy7sbByN39B271thJBA7zeYUyVFwbsdpgWU8M5SZrtCFAq7U3w5KsVzyBkV6wYjkDHrdZ3",
  "key29": "5miZPbywxzJspZqS9N1heyMbQaC5o4GkAGaxfAhg3GhyFbb7MiN2eJ5bbTkmhQRrKBGTPBytUViRTk9yXkcDLi41",
  "key30": "tKYgHYaMhTAC2H1moUtsMeWRp6QwKq6wCaBxqTh5bhQDbNv1XoJqC3EKzieKwyFigynJSoWEWryvdiwP7VkjPnv",
  "key31": "3szhzwUknDCjBNSD9LJJV5JrLfHFs889zPDGGspxh1Y1wuapz9egUDcjGsYugfyBM1v8hL9uEmkTEtdPSKX2WKgX",
  "key32": "Xh93LdrnQVW4X9BFnYoqBKqfukTS252veeYv9Z7QnskokKZPTnmH9NwkFS8BavbzcXiHQgG8VAKvwkguPNoUV6y",
  "key33": "4UiDbGwcN4B5Y7wxv6uHWqfXqJd5FpHAz28TAscpqEqQxGEGnHCcyY1R14M2uDE4KRKkAFJtEbVzjTPjpfp9eD6E",
  "key34": "56YjU9dDTjZcQgnq2mFMDfEEF7ECPFVhZMwB65sNsnohWr93ZbK1am4kyPYHFf9cwVqjDDBJmdZ6fog5DmJiuaLX",
  "key35": "28qHWqyrdercdmUG7P5HrfH9XrHdsoHMJeNMBUmPjmD7XjmdufgKZGGddLa2kYKEcLq7DzZMTJZS8Fhem9s5hgKe",
  "key36": "3rnpoUdHdVVnjP4yj4x54Fus1EMoRNrDHLYWTexkB2UyxKyNKHtopFCQMrErawbqM16GbSUAktZGtNEdLquSbanT",
  "key37": "2f2c7nNLucjeMHB85o1K872jMUmb4F6RfyM8BmyFRcy7zAn5iV7FMPLVKR2yBRwENJrZufGSmuhtoQHgyUo6LRVi"
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
