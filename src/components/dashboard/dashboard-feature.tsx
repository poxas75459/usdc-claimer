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
    "5Rv1RspRNeHwq9LoFbXPVoio6D6W1wtKMiGe21xwy1wt8MYC22ZdoL1ytd5B7VjyTicFJayFtAHPui13UTTP3WMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqUpMHnHDA4zpAeFrZWMumbmaLXMFAum4v3jsgtYvimLfZ5egXuFHtybxLHAo7op8FP3ju7XidFerfJs3BxHwoH",
  "key1": "2a8nQRyHotgDsAthPHtMVpuMLxFM4e6LZEdb2Dg5uhsCxWUbnx5G62qZvWP83GKkwKaNsv6uw8GZxdstNpJq33Ha",
  "key2": "2PsYQ3pcbPEftxxHB6uPNyF91zFATYivSPbHFggFRgKCuFHBKVkv6YKJfgmsPVBFm9uthekY8tEFqA5bUmPKkknm",
  "key3": "QMQTig6YAEjkEgJfCxTqVyWqovVwLQrhY4ksTsLoDZjXGNqdnkX4tg2u9PiHtroSXsLpHv8zny5PZMHkgQR9mZR",
  "key4": "tRGAD7MaadVwZ3K4itoJDouMApixnxF8pEMmLA2WrZpDvGwNmAonVCSeKqP77uqw9SPfmeW9UTrLAYK87EW6pQy",
  "key5": "VAmRWc5gUTHYa8PkNQkVCuJcJbgDSimxAA62zbgteYC7u9PNAUri2uChBAJzwRd2G5mFDEf9KPaBsH4LGucQJdH",
  "key6": "5XavCgPjoRXyYjGMGHcH5bhamVkT8Z5Xp7W3fSyJtjPVfpghPn9wKQUG4H4ohzdud89seAtyFbYf1nbaUWaHSuLu",
  "key7": "5JS1QpGR9u8hrNwNzeuAYCBFSvMpPz4bZrtmw7E6kQ2wdDURDBmWHZmrnrqABdDAh3r7shHnFdQhPjwUEN2cnHJA",
  "key8": "3Lsrekf8fMWWZv5meirEDRhdY8bhrrZyGHPJcKaHjqrL3LMZVYMkwTo5U4j1paMZj35NonNW9EiDMLVGmCFRcFB2",
  "key9": "5YikgQyzh7AgrTGUuscEXqwmvx89ShTKykuwZCHKRtQZM595TkXND9KTcD1UYma2K3pQn1iUVHm8dhX1X6F1kjGt",
  "key10": "648xvpni5t7KyB2nhoWyTprXP4qzuMAKiHhryWSWugsqE6bmoZ2AZhEkE4podhDuia1viCgaVHBYYwu884P1ibLT",
  "key11": "2TisaYCka55BRQBz1bz5f3Xkj1jy7tPqEznoivHR3X74CQZ3M3RYb842u5LdJfkuxiVNQEdya7ANUKCVZz5GncMu",
  "key12": "3vADRzoAjUargoZnNwfPBa1W2CnueSyM5HPrHNjRPGt9azZJufGZoQHdumYTX1ugjBSd8nBRVXjefwbwJjA16pyG",
  "key13": "5Sh9t2qWrX9merp8v4oSTHp8Bgc9raCi3A7rs8BppiRoTY2BDNwhWdgHHpgjQnsF8M4ztMhxSpFpGh8FMNevuqkr",
  "key14": "5FdRQiZ3cUVFcAu7z694uErsG4CuyzJjziTEmiEMe21VW1HPpjoy4hd1BQ4F7Fqu845a1474GttgPTtsT35Gpscs",
  "key15": "oJjWdnm2WD5AAFBmd6oN7eyHgk6fqh3nT5SdpAacvnzjAWvG3Hw3jQF6afTKVrWFfNeB5iCbdj3zw7VDGYtg2gq",
  "key16": "5TdBwt2pvpLaXMmUNqxPaZq3RYyxrD3A3gJmnCM63VDxMCmdxfLQEBwE2MvdVnmPdKPWpTrsCoB2wAGdV7HD4dJD",
  "key17": "2sGvStdSPjrSbghpjX7nMHJ4d9itCvbX3788XCZ41Hs4qxwPJx82P46KuaNUJzUxWzZSMc9tDpmCsybvebgRAiZQ",
  "key18": "5ST3PHTH8GsQvyx6YJDvnfQXh4AtE6WCrZMqS6SgbDpn5n6K9b48LF4cT2rZDgZk8f783YQrwuY95FbtcBtZu1nj",
  "key19": "3RK9kFViCnM3R3QgLbH8ueNPahff7H7VCBYnRd5uKmt5iMwLAzPaWo1mnzpqu8j4CmDiuoxG9YupmGQj59jPNjaj",
  "key20": "3JZ8TUVqLkEtEDBJuLFVvKjV25hQFJkLmwEq8j9bkMVqwwi156X8Gcay7Chw1fhiTTcc8pJZKkkrGEpZ5UAF2Jrw",
  "key21": "3ENjYe6EJhgd4hze1i8EEujGYcQbRQdoAp3gMDE5mrW9eBtEf8tvqRZa1WoMnDrJ5bH6N6KMc9E4SDQ3DszURxWK",
  "key22": "4UmYCBk9WghhHptoKB7kVPJxgyxpQTYV1kkpKwva7kpLfEwTCPndZj8tk38LWw3k5BvTJHkBPGLiUGEGxv7kNgVK",
  "key23": "2MsqUMZgjd7nWNijSCLtLCUZx4uCmzW1UeMrKvczjboPsniyfyKNcPBAS73y8rAUQc1uSh5zjAny6aKVnvycAQVR",
  "key24": "2Nz8WnybwNshRhLq8E23yDexNNi8ZCnQZbsggGwUje9cCvjRn8FfkXvJgLWWbSeiemdrcCdtQyXJf1Do56aQdiiP",
  "key25": "4bJEdDvV5jGxTo4d2kwskawrz3DuMPvuxxwBASAyHYBx1SFaPZeh8P7QY95FgPxFJYnJySZfUX6Vr1CiXQ77x3e1",
  "key26": "4TPe4yRd2RTY4KRtsk7xp8kEKvdUhiPr21Kg7Kdn6Uw7MgFG5GjgXGVZaBt2iXd6ywaKyUjD8UPqrw8vzz6V4s5p",
  "key27": "4tSrHGCEA57JHMLEN4yVWReWJ9AGEdvqz6MNckhDQ5sS2NfmzczJ4iPump9DsbwkaeFXPmhsqXh7BYTbj2MWfZNL",
  "key28": "3EXRATz5KJRamCH2FMA77eATwpQ394nvhuxSaFHfVic7JRZQXWg1qtGiSLteWm3Q1CiCp4pQ2hpFJhQ5YRgZ6ZeY",
  "key29": "3v124RNtmFCNDAXAABgk7xGN5y5Zkxj5NXRPVgTtMzqQkSYZufcvh7BoQyz7aUXHCD1AQ3Vubjif5dgNJPHzVczh",
  "key30": "K4ZXQYKuSh32NtT4jY2ZX9oz6jHbyXDvGmWrLd6qKEFEjA6cy4RTqe4wSVknLebSy5obfwWdjw7269Z4r8GMqHr",
  "key31": "2ViGEKcfNNh4x6AJdn1RXF7FKK5PXFRNG16vNEMo95Sn6DWdZxRgSaupgUi36RVMBGHRYdwzwZZLskEPaZUxk4P6",
  "key32": "2hPCx1FhrjeYPSQt8TYq9jJtfEbPuLggPcMkotTBPAvF3xfYHo1DcSsh1BgzCtsVc7ixqJ5R99iPubGy8Wy1xtkC",
  "key33": "CYG11v55HK3YGjNi3Zeozn9HnmsPXxYkp1tCdhXU9yr5Rot8B45UkZUpD3XUYG6eDKKKqHgvFdjPsWsU3mQ2E4Y",
  "key34": "2yyM9pMBmcSkHsvhxPmwWCTWfLw7bs27nfNz7PmbFqPyyPvCUU32BtovZ4Wj373DbsL1MpQsAXBipy4gMu22jbua",
  "key35": "5FLMAWA8aDFgEZ5oVxVyrvACdJdkMqmN86N8PCVoJ6dMWCGJzTskoaXNy5DzK9d2KeXmpTyrWktGKNsmxxFHuQ9B",
  "key36": "3mswPcQQm3pLaHCiuo9f3HegQMXUdi6ihUSnvL1dfx2Rkv2Ha3Umw9GPtWD6MXQBXoAdBqTufQNqKY2Q1hnDz7fe",
  "key37": "3Q2huCQq1bBAoqHrpdrUdpn9SVmCefb5nzQ44yttQEQrD12j4VTKmJdaXRAwc46T9U1qRshUL5dFGWXH6YeXUARF",
  "key38": "2wAfxRYzUdd7PuPJKCMDxaSgr8CNurF3ctXREUDG6vnDP18z12PR8n2df6VY3At62u6h9LtRwXMao7QonR6DdcVt",
  "key39": "5AkA9rM7hXDsMiF1qNpgfJfTqzuVz4oknj8gAxsjgNhDHyjFwVMZt7Mejw1Ni4n48rBP5t18g4NXdKE2ycsBicnU",
  "key40": "2TQdWNkzi3UQMMWbtVyPbP4Mpd9H1JkEvb3mcfnm7PQrmMp9JN3Z5GqBdGqyg1J5yLDUYwgj8e4DW8itMw58Eoeo",
  "key41": "4qGMSNAgCDfomcqs4BsDexqCtAnode6px27AAkyVECpHkW16eyqmAkKwzveKsWDqt4tN2Xf1AeZJ6DkEufxbx13N"
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
