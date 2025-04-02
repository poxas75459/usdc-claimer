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
    "4WzVW9XaYJU6oWniRepFFjGiBGV8yLExaZhC3KTAAcF3ZqDFhLcWp2TQt9vjNxRUwUvqq3XcuTfxx3q6K3uoCniK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZJhTDn8U8eBQasgrXb8WnyPYsaHyYANsgywNFuddMXKAon8FrmBp8RMUjpSapWFHQEVwXeW6xdCBNgbH6zspa",
  "key1": "xkRasVZX7TiKvytTXkgZSESn4DLNeMBwSSqGaTYLngGNHvz1n251xSLJaUFaNc4Ua8hzb6p9QbhKCPjw5EvrDHh",
  "key2": "4yW4VM3XyceMdGzV1V9xVU797cngPRvh33vwjaXLEJxKfPesWR4Yv3nAdaUGHLCEdDsgZVRVRhAkbMWbCuxt8V9f",
  "key3": "3EPGRKSWb1Mkt3qQ3Nggfy5HjmP69ZzUGstr31Y8LoMLq1svJTpQZ6wCTVo1c2VkBjsfGQEvDHn3F6quWxxZdznR",
  "key4": "3PR4Ewxy2tV799t3CNjFNQ31jxS8QSHsYrLikoA5qo8bGzwdbFXZaxugTay6EwKKBQ3tS4DruXHTj6HNFqtrNwXm",
  "key5": "5xZ5MNwufJh6kPNfc51eL1aNMiqThYS7mFtZ2rRwSziZyP9tH65nXZ2vfXwPt16kwNwSZ39Xotni9XuWwFVhRUSu",
  "key6": "2J91VL5NQwTGA9nv1mXUcjpQ3xaevqikgzxogS55ws6voFQZPaZu5DgY4t7ZDKHbvMG3kMLYx4AN6Si5sLhynpgk",
  "key7": "3QDZxreEWDD39tbbCpPu6wNrY3g36m7VmCF3nHrLwfRmBAeAyMKZdKXqqQTbgbzHD1GfPQvpzgwNsfv4q7ZAhVYH",
  "key8": "5xtiehjgMkF1HYwsiaviRLLd2StciB9KKrbMA91FqJ4GVNpUotA9VgFR1nDkXaJnbnzfiReZoZqCqarGaWRBokwc",
  "key9": "3xAcekW3CJ9gejHnYQ73x27AKfZhE3sdB4AwgQLRmzhdtgNuZbqEDJ2KWcwuyMN2Ro53RG4n6RWtyZhmgqt1Ed24",
  "key10": "2HwH8j6VNcpjp2hTpt8e7UcB6aft4DSQWrdpmf4SzMPcfgwzSe3qSW1MPAiZ4tQ2Pk1eTsBdhWamQsDQBuniomVR",
  "key11": "ewV6g7hgucbvep9SLZYSenbDJmJoknSX4afuUL4gcLKS9U2rDTqiYytnJpucr5oHrqahNE276Kd8M2kBTpMR2uD",
  "key12": "5xczHrTB68GvmHYRpKJuSbmotktD14yJk5ye2ruBJz1A37ijMvt5FpSpdxsKFR6xhJZiwtQvg73Q66wvTXVwFAPZ",
  "key13": "5MW9Yik4oyhS6pszXYJgHRsp2yJQZLyNdNq9AynXoXwDDX4TSygEvPEEP4qPhr3pFLuo7SVsRM2VZ4AGpLqLpz5j",
  "key14": "2kDHb99WHHFcUxBtuSQteVsKHYpdnnebAxSCuQH88dTqtWFCSEsBBiKBYPfcEpP1Q6236zmZ8GauEFV8vQfVRphZ",
  "key15": "3ZbKdrYC6CssGsveTk9ATtLzPo4vjUNfSXnhQhzTs7SXTn4piUSRASKKcvr7uyMeVyvbcZXN5czPHb1Kd3NgtU4",
  "key16": "2LE38xvoNYNVDSVpSi5YoWvYNHbFJGFhvncY4aGpniUF8coJVgYvLJ6ca234eriXovxeMirtNWdtnDMq5oJj5Q5h",
  "key17": "5PHNki8mNphawe5upnhPHPHkZZmEfNQivaS4DynmahnMb1QdpA1bAuFxyLucyCVpyvVbeKx3HKTBYMQUJtio68h1",
  "key18": "2vgb4xwQNRv9iYszo5zBJTWEP7LE4y3aSYPwogtCLnD4B3gT9XjPPv3ETFrV9CQWGwzTsr6RZrdYCoQi3JYpWjp6",
  "key19": "4zUHXaf3yC7gW5ny6ZAKVoqphNFBC6ni32CrCpnJxN9jbTXMpBf4639tT89FCUvoib1r4AjoNUBFZvRMDFGxyLRJ",
  "key20": "5VjQA9VRekCyh6wmjzoNkUmf5iihFe3SxikjHcHa2sV9FVyAgRYZ3qhj168d1KtaNZPexqALCM75tugzozYNiaS1",
  "key21": "4h8y1zk3yaBrcoTgZ17ogL4Xj7oHaQhQuQvLGm9s32bDtgyPdgERLqM89eZjaxCYF8sJxz1F9Pjbti9oa1z2ke58",
  "key22": "5EAjGd4rYKbVHyLeKjVxqSmEBUBntamrA9RnDH3Dj2rrpmypzeKgjRj8RfZozbLCnPRQUVmZYEsAKXqxGPF837SN",
  "key23": "21eTHAjeM7qauMgWRUx5mXEQiVzD3qg7HFAhBP1Pw7vGA3CF2m69mbe3WqLEsVsDiD7b2Pjxopu6KmzvWedPhvjR",
  "key24": "5v8q8NUWHKXG656jnokCz7VCn9VXKdXNRw92Q5ZtytCZN672nG5RjmJ3wgJgiXfxSJhY19amcu8QnczPdFxCFEAs",
  "key25": "35WK1ou1yVgjqQmDN44iBVZDvsHDWUwDanv2AB6MpAzE2FbdcH2f4piDVNKZeyqK7gQCCuWEmqE3foMJ2KhKvKCy",
  "key26": "2e1wCXN1ymbASEhbgqASNmVjrsrxqN7AVbzkdvjLkNGereF2fTDKyqx8nu7YAZXEbRjY4qkSEPuFe5LmrNKPxqWy",
  "key27": "29UCTEsZy7CNKmfSQh7w5GduHnUbdwhAJPJ4EntWmuK3YzemDqyVHwREiXoRBYbxeKzf7iNjQsiZgJkM3ZYGYKaK",
  "key28": "55xAbYYv8Ctq5Szz62NjtpDVahH62T6V9jrEXpbq2jfL9qSdQQrk5vFGBM8WLSJXP1tFqdRjAGism41piKp4ZJe1",
  "key29": "BTpakHP5wfqmMaAjBVgsUAQYFSRRSuDGDMADRvcfsbbbxmPrwCdfzwveHyzee8NG4RR6jv5YajPX1gtaGGDxrhQ",
  "key30": "3f3MoFng7FPpmk872UyZ1LtfAqwMTE3bHeyv3GHDke7P1CKG1zDewShv94iDhZ14g5XSC2cJVXYDSnFDX9pnyaJZ",
  "key31": "2KXpzM2orDJZ7xJErrUKjwF62TBQBfDhh1QbcrHkDYj6hSrkrJfEiii66HUu1FEfrfwkBhmsexoRD2FsVy9DzNDQ"
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
