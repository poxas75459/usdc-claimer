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
    "nUhPKc7R5SacVzmjRqWB7b7snX4NR6sBbPoG75FoQ7swcsVAEovRQLcTziLDvAiNe9rP3EL4yo28Uy97wMTzqjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaRztYu99VjPWw8DJNMCB4cT8izNyE57iKtiG5327k41opP72A24LV2tnXn5BxMNgQ8gG9GnxDyvbp3JHEv3RpE",
  "key1": "JG7wJoMsEdbUDZVbjJjQ7UhusWC4YHuqJob88PUxBqqPVCg1mqPSF2DHg2JxroT959wPxTdQz6xoE6GgB7zmAUg",
  "key2": "54TtTYcp6h1sosiAWPYdBpbzT7Gj7pJVTvi9GAtP8wmzomPovx8YpHNGPzYUv91fuVXanHYVsQqXR1Ttb3t2ePkE",
  "key3": "3sVvbB7QULq7qUBYz9uw2W4B5FJv1YPpKRbcTAWmx28RiSTaZp2vgjdLDWBnuP5ZSUu84tJMwtWkhEYWCFJoAykg",
  "key4": "3bkFw6FNEMCu1FKZN6XNuGBR55espb8Juj4P4F6bBVb9FzKuAn8GepGB7GFN5yevJrsAukM8xAg4x9ZKUkZBvYK1",
  "key5": "2knznboji2nzu7fK2ukWZ6dZMgd729YjrBP1UpPkp2ZXEoxGVgiQyKJ8SkDiwt5gnrZbJAJhEGtoKD7cYjZcJ4cN",
  "key6": "4JTG5UitEW4hvKtSUexadvkD6qSoeCZhAoNRWaXXAnxfjKKhjqumZBZXsYY2yhstQoQLXftrMxnFwiCwKAYN8bFc",
  "key7": "23xGQhHrQCcYAEzrL8vqiQBGH3yspMZDYcFBPsj7QYYXifysgYSeZetPsAx925mXMV2xAwa2rLmRamUyq1xthB2W",
  "key8": "5URxg7Hqs7F14coZWcz7QeE8EQ1GFe5bbTnCnQAPsio82NLrJSRiwLfKHCCKDS3RbJjUNQsqNkYg5yPmARPdbvkr",
  "key9": "rEKguoWM5wQhZoxpPdg7NBpatqXpy74TbSqUG43J3XYuYEXZGhhRybr5aWCeZJCPAwUWzqMGcqgMdSrR24Bmjh2",
  "key10": "3hV2W32W5CGCcZznMxm7gkzC9Vqw99yXrH77LLE9CUQnKGr3XyEbYs8mB3QzjnMaTJnnrC569gYWbmnLKjt2Z3GT",
  "key11": "27JVHj59wNbH9vws8LBGJkoS2B2HecBpHMWeMKtBHkXLy2s7yyDs2EsqXxmndBc6AgMtCxCj1A1Acq9RNc1SQifN",
  "key12": "2AcP5XHhFZmFjaZi6EqLHvWvf13K3ouX6QcDdHUKWXsTQ6uDgyW3mcQ8nUtyYHrUjvsqycT7EctD9cdDxh7hTRXz",
  "key13": "4XRuzdAw5WQrmcJx6SVh1tQeyoUQCfMe8f8tDLB3srd7S3uNe8oWtLUfLC13fVATP5cAkqiCARAsNP6SzUUGcQj3",
  "key14": "2kXcYUufpWxeoeZqFE1L5PwLqC4cYKtMKAtcJBgN12b6JckxAyVboZhQZhEpqfWHJuhTtCW9ocfkKcjVEg5rhGBu",
  "key15": "3X1TYBrtBmhAGJFfULbsBDS8HehLZsY7mGKRufRKfURSuCEu1bfsu9xvaAhb7HAEP6F3TruUW9FvppCzTTetoGtC",
  "key16": "5kL3WyzwJR9pQUEL6WfvojwwZaxihGPJFxRat6LebN4J6WGeGZrz58vVRzaXoUmHwckiDuviD9m1fcCjDnb2tKze",
  "key17": "JJjUCLVDeoPrVstjFGWo6RaMLsbYRBKBaQ7jR7yDP3Tq1FxUfDEV5hxMBfsbapfpRKN4FhCVZMZtkLraxJGnTad",
  "key18": "2H5hCSfnZ7gDXQpmjzoeLRCvQoqrK4gYcVCtWuZyQr8vZz8wmnNpjpVueZeyEZVVKo2FYCFF3gEhoPRYm3YzoWnk",
  "key19": "5NHRW7Ld8DNfJG66kwgipZ6DR76oRz3qZstYqiyEGYeB4Zs2qhQb8GnGMHruhayfhLSYz2skEGgYiTz7JHCPQRxs",
  "key20": "5Qn5h3BsqCF2WMupjgAT9g7XWXiEyJfLBMneV8nEkwi6vG9QsBo1qBSqhMCi1g46DxNjoPpN6nEtFpzxHSabeKYh",
  "key21": "4oVdj7yhNkwUFEuyEBrKLy1GDTjyPka6N7KywJVZxuJgXXZpZVBEPEBoDBnAVe8uHXNDfpsgyRzVGEGXn8Z4M9JQ",
  "key22": "44ev84P6RactFabp46Daga7zLp1ip4drYD7JDS1uxDCkJG7DhQSpotjHVr3qBZt5wG2K59haHemF1JELfBuvhZcG",
  "key23": "5cuaWcfx3tEH1ncsheNmuEAUg79wsEioy7niTgJ4GMrNeEVbmmph9RgEywmdp8XtoFdRQB8AJWe9463FRNWPyYx8",
  "key24": "XjoFs2bLKYvEweHFsApKe7eGxRkr7bbZVXWBY7WDjrLHmgNuuS8hT12Ad9Ttn243P5ZRQ89zJcA1f3xTv1Kgb9n"
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
