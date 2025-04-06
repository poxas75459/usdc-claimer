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
    "2kyrXeES2XkAorrJTrS6qs6WYB18qD2mEekUeUr4b7ZLECHTbh9efMzERvmcMjNZ3cfAXL6NtGJf9kJiD9BXZV4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iC66bhZ8bTSZSWkHd46QccoxAYZrmU7SshfmYrG8NmojwhNcZ5XE9xR97Lmx9KQ4TbTB4yycEnhDhpbuxJtoeyn",
  "key1": "2ffkN6nbNS2Teuk1oZw9uR4LBouM63yivacWgb7HS3rzo8VJ4sj9wiPGkAHrLvPDf6UknruMixwYCKXA1EEacGd7",
  "key2": "66JsyRX7mea2jHGdznmNqUrDBcrBAoobQxTkQ4gTd2qTX1poHuVVfz2LRXGY7f6rh8FrXHpJnK79MyNLre3Hkp2g",
  "key3": "4ZdTDdsmUvLL6qQNxqfGeKEfZsLSpvCDLMSXmNqLPwGSvvhSwfRw77rGyqcEq6fKzGDp8BWKfJLLyQkt5RnDw26z",
  "key4": "2sqLdZZUiizAQC1P2kP2Fd1rnB1Z2GNRSJM6sHXKKTXXH7PruJVJNvXNnchC5q837VxZKWnvp2GwyNQHk8SDeQ99",
  "key5": "3XZKpCcD7gpS4DdMtZDnXbRdyu9KDVo3DfYh9cqjrQ9jAm7yhEcdZSXrx353FbZ6yx3KHxZbBL3tKbvfK3h9r9pK",
  "key6": "24SdSRnLVBnXMgYCzQF551SYTVZe5MPiEAhGQptAdZTQ9Ezgqocp7Y2C86eZCZVoQ8rsHkk78eLZKAG3aBR5dPcj",
  "key7": "66d4R4XPwU29imhw2nRz2F2HgabA4NjzBBmew6k9QrQnBsmPYABesznyFyzw8M2SGBz3Z5uxdgNMAcRnhrMEBksf",
  "key8": "3cbs8AxChZNFiP81ZxijunWw7JamEjEUVbrB6BQkzYGX5sptprcggcPTR11gmUhTyBhY9E86y2SC52xYwQrAaoup",
  "key9": "2tSAwAQQaSjsr6K4V34BJJH11LUbgSp19b9h8NDw6x8iJ6yvemD13e6p5f6noaVkizYhSA1TdNQzRj8VBQmRBweS",
  "key10": "2y4QLFFNp28RRNEn1sd11qnRsMmqxsbp8UHWUBvZC7jkzvWz7VEN7m5Kj2XxXoYFHW6iy6BNsKjA15Xacydi3rvr",
  "key11": "4eFF1FgRLeXjPuwHj4aXTYpa2AcaeYtwKMRsTTNGARwKMfCdZSMwuFqVQoJ5MiC7W91v6w1L2dx323zx1LdnBZ48",
  "key12": "57iYQFqC7z6tPndB9k3pUS5mm8XMFef1uSyb5vHDba7ogxWysDvvtXXkK7z41UaHregmWS5HjxaQAfmybSRoGWkj",
  "key13": "3rzEEa9Dg91LNd7m63WADryeD2nywVy4Hmbw21uzjp9NhCTGCBKBduYqSHZB916bghECyTdFDCgmTqqjHwG2Nsja",
  "key14": "5ewBgwf8WQ5Vzqsm6jttk2MEXf7amRVMFaTtZ9dTGBT5s27VDGT7tazwT3s1NzfPac3AwXYotvPpGhyTUsQP4rWe",
  "key15": "24oPuZmCsChu3go8KwyLeMEL4TeEhCCV8vLhATsroPS8yc6J5fgo2HmBe7bDTZvVu42ezbCx5XiZ9RU93ZSFBV2m",
  "key16": "pbxrBRk2NDv4pPrdRfGHsh1n4DRU9MNhb1a6V4fey6TXWyx1RtCzEtGfVWGWRFXgMrgETYdThEEooEb7XirNk66",
  "key17": "2M3Gkg7NnzUfrhYZnCgzYLYSchvcK9Cxea6yQWygM7ugabXo86t6ZaNLej1zQFCq2AfwYfbmQfoQc4KGhRzoafq2",
  "key18": "3Bv73bPnWxxSQhM3SW7QJybX9TgfPobCFmvvzeAxwmfV8JShroUYe6nfBVJnUnYaEyz8hNJFFWW9RiirNQ3iyC7k",
  "key19": "3qsTeFSUf4Lr4VyPutEsDyiH85ru7HPRz41FZZ1QMpZuRybquDNYqzQBDmTDQgFHbx3BTeuGgborRzJYEzFwb7Pz",
  "key20": "3YUYWmVTH8v6UDrgEEbyMidojvnXDeTmPrYRcA7UR6EnbwCGsuz4kDx1r3zT6kks5wfFVkMndDC1so9CTQGvB2mT",
  "key21": "2FLVdhmgR8odDUSioWhTNKqfbmnR6u58SkgvXM5Z2bHCQuWG8tc2zQh6QfwdnAn91FvBeGvZfR6azAgirPzKera9",
  "key22": "2VQgSMwWSJph5gR57ugj7QqnpHufeEiqwQdxa8YtHD8pgcTmheRDj3CvpAvSY6hLPTj3SYNaHG5xpjM3bwMJcCq2",
  "key23": "2wEPaBpyuqdND2yvRM4sLKwKBgwXatFngnFx18219m2pKKKwgUjANAVy54C8V3J8RJJprr4hZozqhKFHrP6nA8C5",
  "key24": "3f6Cw1vZ4EJ1cEdFfdiUTJ6Uovqnz9SaQRLU7Hbc6kAEvYb8vDCRgsvnMhUhoMyXgcj39jmgdydN1AYy87rGQNyr",
  "key25": "4DYcjsFK2A4TkMLjzYby4vzfnVdoUDyZB4yhXsHetKi327DPGGx4wo2GRGgxmdW3fi61auzUdZzKDDiJnjH5LyvA",
  "key26": "5V9mJ9CR6EA1Pb7ALNiyJEaTKwm8ukbbgbWoPRjrpfUfoSUJu87pxuYYWSsKjb7YyN8hDA2KZocdZhxE54fxQ917",
  "key27": "2AuZyRAhs3aEzzq1LooXYNDKoeeYDeMmsRWxcuYJZdpfHw3TXZ2dQcJCAj79nJb95YefTKQgsaPSPNTjJH1i8PfW",
  "key28": "yAedi4dNzteCk3Y2uvbzu6WV5haodsLFQYQdd3i48ScfeVrHTvwonVrxxemiVdqZiSxYXxniTvLcidVXrGDReTi",
  "key29": "3UeXbVCun9XKPKhth5RkwYLLoF9n5BinumEGWP8FaBnhSLE8p7jVuDhRchEwR5HLvotLTXwjirBCHxjcx8eky4rR",
  "key30": "PvmbWRemtzDUBN7wthomUBA5YvDLG8hja9HsWGhKej7BMjq9QmLehNUgiZaYDpCcyFXFE61xfPbvv2d6jH3CvsL",
  "key31": "5whQ4Q1Mf8JC9QJsn9mDpm5VJgctfQbQk6uHFNFUezfzMqVDv2TueY7cfzCf22bUcPZYGwyyLpoYPQRubyWXGxFK",
  "key32": "5J1vfCyCNpCrj74xjfd6mdepd4J3SDtzT1HrvEeffg7fgPvPeiBGXBmHZDGkummV7aPdSD2jYCMtkHbHcT2K4E6x",
  "key33": "5f7yV3mH3iMgW5UwP2wntGQFVELhjjnuiivb4fUgp2enM4wwqPRrFjpbnfDujZp3CuTkoW3cAu8SW9QEkNGyXhJN",
  "key34": "2xTgdQ1s38PmQeH3ej5sjTem6Z2ECrv2ystwTXQbxrkbyxHotFaMzpXRiHjox7gWPzYLzVtzVJk4e6fhLp3P74j7",
  "key35": "2wcDKjU8eDDVg5u54CuWzcYcoEydFoKZyx3XfRPChqMdSTmSyVPfF5Aa9fRCj4xuxYpEzb8kSQTSjcnTCTWaB22m",
  "key36": "2tjYrahrP7dj6fPHQMbaaApHwfhEjqcu3xh1sg9m5zttLYWk7M9TJVj3ryaKHtFRN5VBAWmm8ejcoB27ZsWsCebi",
  "key37": "39crc2P1cPszzAouSGo93CACdtWnHnDyQ1fWbg5nUzRfpDacjCaxAyLZqo9h7hRAtbak3MK3uKDBmNmCLU53zFUR",
  "key38": "eCr878E4VTCW7w2Ev7u4Dj4i5QBypVS4Dhmf77wV1pGaHmwxXZs3L3oS2urfTHAjGPJR3NFxuF4pRp9VziiZxTb",
  "key39": "5HpW2wHtFPZh22GVYUQ7tXGcfpoWrGHR9g9xMdRq3f1cJvvakBpxXZqasUSkrgpBzwTcH6NBZyM8eHz7VGfrJ9zx",
  "key40": "5i5daKa5n1RHNjvVjyfLkNSAqrSMjXthqNWrde5wfDK8rCgxzP9PQsNx4mcFHeSuZrqrbCe4nm9WgvQE8aqR87HP"
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
