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
    "m1kUtW1mbgkx4rKmNhzhs8x11K7Bn9DKmbyjFELeYJWNVHg6eA2oC4CuYwTbfdoiiwF87RQedhb5M5q8GgBmcSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iS3KtANmHW8XwvL81u7cdxLcUyixPDL2FbmXDrJCWtRX3DGH4DiLSEE3ddHuz7SBKvvsfaBgHEcMPaYn6wSNh45",
  "key1": "3XJu4ZKestwFvPdtv7cEAcXHPzvfyC4jGFRTGitzzxkR1WJ4fGmbRwQBtvEfBvmA4ZB8vEYMvhPY9UWAGcUVvJTG",
  "key2": "22sMi7STZ8ZK9rAdKFK78cSQhtE8rxFkZpFPbT9USdtR1yE7NPuSdFVERoqN5X3KKpgf9tFFTEA6XaahLnQVqikx",
  "key3": "3Ssj5S7QbsQNetN4nywcGsn6NS8dS6a8JzfkSBY1DZwdDKKeHvG6UVgwp4uzzdc95eEhTo9miFsfSin6PsG474VK",
  "key4": "4fgVdRFYZB662HesLstHCKLbTb2HwGGXVsLYpcQQaNwwetMazWMEEr7RRb78J6F8sHGQrBsvLfS7Uea2NfTRse4t",
  "key5": "4AsyMVWU7seyN88W3apsVVAJCsvyAx9R5MHQkmZLpBiYoLrhF4UWhJL8NjusR45KeJy18BgHRD3dQ9jq4s6hZwyT",
  "key6": "4CaeJpRp5JpythpUxoopZBgtbcExWJoL4dut1DawXdeiZ5TMCBckBCB3XszajrH5qGmxfvzuRVcLSGMuAWGPRL2w",
  "key7": "3TfgssQuo591DqdNBHDQpgLm1FFCrpetxcQaCwXXPy6QptLgNZZ9WTekNBq9n363GDjcAQxf41mFEanPUNTUoTmD",
  "key8": "4enUqeSmqn9Md1yEbp6HbVYWfNr1K6XPwrMakQrauYiX3EoBSM61JBbk2bJdB2tXbwaWUFzsXmtuHrFDXX8rDbhq",
  "key9": "3gGhgwnAPoj6QLLrGwpGJtEkBBY4uh8zqg2hzSZ1wp6Kuc8F3mHwx7tdeH7KPrbbitCHFhCY4Ks2vKZ9kkdYetJ5",
  "key10": "1PYBGA6E3JfZwPkWrTTbbBRadZ2h5AAJpL1Abjm9Ztd3QmmzcAbH59P1UVMU3GdJkRNkyWh4jXrfR9qTCecLdwU",
  "key11": "36ej1gpBTVscfosjGGETo8UF8oyZwrkY72QegaCXpbZRxGV9u7KX6Nzc9QK5SuBRiZd6Zr3jfa86dRcjwyihPSLB",
  "key12": "4rqHg7jYAHjSLogBShM1TqrrJSetp2wHoTA5uaUAaxMCCmb3WCNe5fuhNexUP5QsqnVX2H3rEKgS7KyzpfyHJnkB",
  "key13": "cHsucU2p9LYDWtK1v2gM34tMD18Z7gLof82tQZrJmZMKvYNxgkK74pSfmyo84g1mB3E3f8y6RPfvGjTW8tUYcJU",
  "key14": "LTw6fxWnMFRGQ4UQ6Vbv49VHDnRMJTGoZeLtNZQ67qQkUMiJsz3ZXwtVaWnoKfjsiPhFLo46TWN7dhnuBsuf6op",
  "key15": "5hZ83E6gJq68Gn3qDspdeHpDPDf7H2BKufkzMDu3335ccwpETdjQLVoF7w4XKEhTH9w1AEqa4472VsQJD5yWkKAY",
  "key16": "2hC2LfWijztep4dJ2rbCM1SzrPKqZZD3NNhBmSF3uECpU4i5569dkRaZVao91tyWXgCRN8UnaHX5fQUxCAgxGt67",
  "key17": "4fMTFJ1kvKYxxsYERvDyPvHZrnpWYLUdpzwTZqrJXFnTECGNCNGhsL8eWrC6xy8rdTvKpofxL243K3JrRkRuREWQ",
  "key18": "3UDnsHS8Ae7QswbDSa4eXGzdwMPQB8n2yxwbA35kPGAAL6vjQuePhbZMhxqSM9NaXtDTy5xopfDVcMBWBKFUm9KB",
  "key19": "uYJ5tgLmUHVrab9UAZKLkuQkgshSoEy1JMbWrJgAvTZv22JyqopYX86xsR4R4rDPWjCV8oCz1pd4GEyFy9ZRRRS",
  "key20": "4sMq7NQtfpfsc483xxhxSvaBroAUVC2ZWrxwLGNtFdbggXK3mBr1VktmCaEBEkzTffgqQeGZW4saJV313wzmdwhk",
  "key21": "675SkTpn3qqHocMRHh6kCXfJUyrjXPZiQUfZkruCvRtif55KGcRmtkMqT2BxGGYQn1yGshiuuU8wuhXqWVLMfd6J",
  "key22": "5oi241WdXVtezU2Xm5iMHHwRZbgz7LsTihE7CdDsxvzUdVoi3b7TdHW6SwQEiRab67ZEVzuRZb8sTV3uPQ9eyFnE",
  "key23": "5t3r58QqFd8um5vabrZ6QwCnJT3GRY8Mn3NPec5XSqH5BbpZzrvruvt1CkNryi18mSvtwPtgr2j1uL8uVrywUZ2r",
  "key24": "4TutDyE8E6uKsiqFgyeDgnxKGUHuxaC5ZB1jN3yWKi9XMsFkmi15UNuFNjuqf9mVA5PQy67nHsPW3fotvsWoF4Eq",
  "key25": "5P1ZxBQYZXV8xr6MibQ63FYTfmRKABqEm5uYSTYvGxP9VUgZp4d4B37mmTQ5cq2acKYCbQgz2XRPH6h878Rb1QYV",
  "key26": "5VLuz8rtcWWyNzhKY9uzuQj6DotxwQvgRxgEBSY4Es4AgwodpnkLTJ7hSAJgtN9csuV2eBUMa84q1Z5wrQdnHbtE",
  "key27": "22TVkyLSMYabu4csGjWruTS9wRcXn4pGoTz4YZ67ScP49TY584WCkizpP9LCLAyK8smjQwyRZZx9kjLwavPQTL24",
  "key28": "3P39rz738qUaqyb7kqNSfBUtwoUsPS63HzNJG8XpA6ZHzSz5e49srHwDNCXzQRRX7paX6QQUEJDjS3Pth862jWXG",
  "key29": "kGYY6Gws1Aem6HCcWQFAxFaxo7DxvBh58gLnApFUNRtGzxshys94pdPnfK1f9Twyc18AN1MHX8ELQZkaAhe81aY",
  "key30": "26kzWqtrKcppcbahTZto99B2iwALZ2dbD8FyvXMRLcaG1qQYsM3XSX15hbz66WQaYSr8DPtEDecVkKQgfdZK5S37",
  "key31": "2Gybc7UnWW8EBQzFgXJE2eRyiEcaeo95PVYV68QSP3W8QmERc5N2iu6ERLF1EHYAjqGGNnPZd57jSonDhZuLfhB9",
  "key32": "5ob6fqWVQ2V1h2MyBYZ3aCGgbiqqiAvb7E8gT39kcvv6F5WSvmk9vnUoxFWpfqStbUpwZoEQPwmWyvCTy9Z7Srv1",
  "key33": "21PKVhL6VrC7ZgnSW5nEkTV2f5kxK9z8qzAA6o3ZJAUsNDHLDB4HkTciemrBfAww2JAVem5ByZtXMTw9Bu9Uj9PM",
  "key34": "3wDPPaK9HEAKBCAmV4kJGVY4BpTrhcBUM5jCniwBHobYJCQpLpdVgW5VKWoZ22NiGoWebesZis1v9h3816sFS6tt",
  "key35": "AFtyWp6Ez54wkkH8HHCTSwDav4q3nhcCt7WuLccQpn8zbFcG54MQC4ryh3yqwhU2mR1B2Uit3MeTefXUEg8gt7e",
  "key36": "c6bUBYdYrJ66pEaBDhKVqq8kiXLy7hvj4U4f88zdiMxN7ju9oFmafAqAvTE7GhmUoCgmfbLDoSsNBpJUVvJfyBy",
  "key37": "3UNdq2NPdz71nxRcr7XwxhuMJdeYoDXvZmHF6ZK2Ec5xdfAfbjsMh3hVAdWmfJ3PbHy3GCVkLvXKApbN8x9MsNiJ",
  "key38": "2t5tzsiBtaJqn3cjLb3nb38JFDkzRC19QH7obiLkz6ZA7MpXEMy6Lm5ufpezc436sUNa2LpoJ8aJj2yEKfhrtgYY",
  "key39": "UMw28geaJ8cDkskhyYPPBjQZcH5QijAxKRq13N95Abzf6VYR1vvihcFffcFfzSZyh4Wsg8meX5EcWQsx7FqQ35V",
  "key40": "3x6bTzbHULhqAYWVtrsiLG4hxQWNwnNzHFop83NGus7wm6egHcs4VgCbesJXx8XHNrrSYPqz5SY7h1AQKFJxPL4k",
  "key41": "bFeGzLzn1zzp55w5vn4PdbfBNbA387CtZn7bEWgGkq8zavi6UBuLjrF9zdi4hqpkE32Uc4eLP1i9NAsVmWGKUKu",
  "key42": "4t95YtVK3JNgMhkaVc5PEguGMtwyH8W9CNPM26j1YqXtrDiMPgHLFdZemPUfGHNAsf5NEaEKXmTwjwR49qdCuW8x"
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
