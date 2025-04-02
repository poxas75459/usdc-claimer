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
    "3oVW34FLGRTW5VCgr1vuB2tsbrp6vKXNmnxUP962ji1Vkou9z36FP7L7nmJZ3MsQUho2QsoKpbnoYDBwUbvVgc3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRDgYzmSQtUqQzRvDBwk7CgsUXV81Ryj4qVi2miG7vPaGcdVP8uJ68pAaabftcvobSytHxrzrUahRQ6HkuEnc92",
  "key1": "3W3Bg1ZL6vMFNxkN7vAoMmrz9RdTLmHBTanGVP6QpHEz7rcYhU2SCsPfCvmRbjv4hy3AnoTsZdpwofhuX1pL47Qf",
  "key2": "2gPp9ZLumM8sSLoj5m4VWbLVwPRNAQELYJRCyfWSi1VZown9DzXgZuEay95KEFFwiH933Rc5Xuc3b7BiomEcHxzz",
  "key3": "4jHdXoNw3Hc5cwtoKUkYp3Ki6PcwdoJ7CUWArmS3NpfypCN89zB4TG6s4w9T3bJToDigqbycnD4PZAPZuoWG4FNh",
  "key4": "3cgnC4jXTvadBzhV5SzDUBktexNu6BRb5ha2hvvKVVhYvZK4J5P8hbajDhsvtVs194afuFc2hBbpUPFyjgDeB8sY",
  "key5": "4VnudPRCuEbWitNqxPsqYk83KJhswHMmcvE7xMfhwvREmJegDs4hWrqemS7Nw6E4Gf8uosKevZ9h5FUDYibFcHNS",
  "key6": "covYE6q3wEp45tBohSpaRoi8xs7iYkdPgdKrK6kKajcs8PF933yVVcAftLdPM9yW3srAwia4imjEfriMCEkoV6y",
  "key7": "Lx96bDPw7FSYxtWJ4gKMKMT8uExGLooGL75hAcY1UTbcrmJeBC6zLAAW8rB2kpqGvwBk1yvhnTBYbgxHSBnADuK",
  "key8": "31TkNf7i8UC4FCZJPfsAZw1BBXva1dEzaaYghqeNJYkoiHWqjTqtbcRUaH1NqhykK934Cb2pBrfwVy61fJ4UQDw9",
  "key9": "32dh4C6GbktCE9jKYQKuBamNysV9Dwb6wHtikrrgo8A76rJHHKcxYPKruB5MWQw4BXuiVSmgqXYvM8aXPQG6MUSG",
  "key10": "4LbScSRjnqEKiagc2xR3TJdgCcPvhhNboDynyAhFfpYsAWmvaihYEKb916QrJ1ZHdCpVfoUyyKRxYJjQFaMHDAe8",
  "key11": "5MR8HjGbcyFQTmGsfEu8YSwGYTkGnbC7dCyK8onB3YueaieSw55pFGGXJizmQ8biT56as9HYnYqrZygs4gsswinQ",
  "key12": "4s9uY8Hp1GAEHFJnfbHh7BrjULCDJY7zBMsv4BgujgKiEatKLproDArrxKQUxVZMmQWuNyNATRtEL9ebe4sTiGp7",
  "key13": "3zKRiCSkXkYNpxgzA4YzLqXrZxGZJV1UVKamHAj1oVLiqFvx3RrSNC74vVUEqGgZ9BmCcfoEMh5rABLDgC4qujyb",
  "key14": "4GWPWcNSgbTTJcEdtEKfL8gweBeSy4U8weUKtM7FSBwVAhzf4YWaJ89MsjjRLa6k3XTpSVPxCNTbgLdYyDWais5j",
  "key15": "5eek5uXam6au9jnLnaSWeK61AtkZMDFfxiQTdvSfdsy2BqQ86zQoBPFgXqz3QDesiWNGBoexQqEhcqXke638Y4hc",
  "key16": "2ZH1SKfeNJdfa4hZZDzA7fG1np9jnzRYX3EeYCc6dbkVmcKb32643AsLd4uTc6MrXMk9t1aDHt3EhLwkHCvdtHJs",
  "key17": "QaTGbkEzikQM9HCQQ3rcbRZ822cRG94tBibmevAr5kFFfeCKUDFToERCcPk85HTqVeYXZn4AxtLwZYjYVeeFwky",
  "key18": "5wy968DY12rJJn4ZfNUFf2Ns9bnAehtXiaRTQQywugJ3n7EAbGpPaVw57t5V2xYWEJozVva3tDKAQg2Sfo6tKgU5",
  "key19": "4PAdfnnxFdvpDURuB5Rn73Y9maa2Ht49BaQuMjBQcspVRqPHGowCCnVjzMN7WAsCuVwuaL8MEZ5ZMnZZLXwtDFnT",
  "key20": "4KLAE2rEidLmAaTNyZZ4WtBdpCpaWWFvBQwJVy1WyM3kzspbegrYfk5CmNrGBC8ed4EfpJk8tHtcWywrYyNjpeUF",
  "key21": "2tBjH2r31zW2FE9a5zmA69SQytPEG5Lc5X6zPMcobFrmNfT9TvYrYPnFKeKUCuxXniwwvzeUgXcziuKdBgoSHoHt",
  "key22": "5yracwZjUZ39uDEfk3eCCv2yMpgpM83N4TkR8MzfxG7KA8dAQMhe8HgNyLZg94HzxoMDh62qabPUR7X3i78nxnz2",
  "key23": "3Wasax1fMwRrkof5JfaSW1bwfiuLUMa3YM78rx61CsmTRzK5XXWvKVepiUFnrDaU8pqsjv7Y3wrzRLMjMz8fiYv",
  "key24": "2cmxybkrPkcYMZqE2Sj8csPY91vto3aaB8bgYj3paB38bEU9SyhqLcihEkgM5coCamtSeKxvoApVgbZNk6jBkCtJ",
  "key25": "3FAKLFmyTX3sowctFvd7FB9kXXw9ZqtYyvQPA7w1kZajd1wjv5GQ1uxHuCAGMySv9jUjcrRp2HfRqYRpTPZFLHRm",
  "key26": "3AfKQA4fwY5wFpSVeWWFfgrqyiL6tbKfLJiUD23fdj66gGUCpzC7jYqakt75FCuHKeCKGm4Epxhc7MA4Qungupnz",
  "key27": "3KLsHUPKDoTymtusXfg6GiaPfPm8wRzrhXxW5fzK6aFf8otaZkb5L9SsMAWFS5m6kNmQq4wYadEdbd628g2Xqu8k",
  "key28": "5ht6SrJcYeVqwBtbB6JKsUFi45NVEXqzRS8J1BFwachc6HTm9Ysp6MDBsK4EpTR57Q2S99qkRuWc3WUtUCyhvYik",
  "key29": "3ggv43wyw2w81r5VTYxWcfSktm4p5ZQuVHfDTTRk9U41uKCD44KDfSPQ3ofmWKiC4YcemPmT97JnrjdYnkqfj8C9",
  "key30": "3hpYby7zLWUsbHmFMhaYdRzT66y2NS9U6AeKq4AqWYB4db2qiCjUtTaWe2yE2v2guPderzsKQGLYbaQAtaa7BqLE",
  "key31": "3xwDyYJCstzE45g9BCs11CzfgxaD1mANPrpZHSmoLWgk71X4oZuEyAfLyX4Hho36ebqRGtW8LAXm4ZxAZT6qdzSC",
  "key32": "5HVvRuj7oz7ChZWvxukHGh1KfNwe2K5vTbv6iQ5zZmZDHBBoHs4TdPgH2W6yLhqxUiFdXeeZdeSa2BxLjRJDfotW"
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
