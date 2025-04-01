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
    "2VzMnw2uMgivgGmF7mqj8MAsMUA6xzTeyrZzD9X4oVsw15utCFyoSZqwRtixPjjkUYw6RvDi3P7nvaKMpM5mkHpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXuLZesfMjv3AtbR8SpTpcyM8Kf9DuHZ2akBUcqZdnE52TKxig6BfUnMUN2QkN7JqcU6CGQi5syAwpppWo8drZU",
  "key1": "4axKyqkPvfhr9kxZbtotURYHzoHdmd3HHmY5GGcWF3uR6y42dYu3nVRnekhtd2YVPyxiNrbKmLafSn82TfSc2WXt",
  "key2": "34p6MQ6EuCz8U1UcPkgPpkBwdDUDqVvW6uwdwGLBXG2nUiTVYYh43Eqe9W68iiPFXJMnxrhtnjYTahnN6uUUg9JA",
  "key3": "386CoAbNFiYQvjtfz7ZckRFqksKmFvPv22MezGhEVRcvtEYBcxt2Jc16t8SJLPvoXPo9DsbQbUDicjY93Fbgetbe",
  "key4": "2dECJ8b2AfcF1nbP5GHg4x9vJyRn8VF6fg6asVNesn7pxwqzZFtQiTnmnfGJbbsbThJyY5yv7GBLbWYXG5XRqMEY",
  "key5": "54gVYAj5ni6kVwPpUcSmhriX6MZnvPJTkB9Rk1s2TkHRfHtnsXh8gwginTbLPmP959ZYDHgiwuFCv5KR6SKSaWbM",
  "key6": "3KTzee3g44pk94EFtDFNqzmCES3fLHshrDMjGETryeKAXUpRewxbL2gRRg5mWhF5Bc5nqCMUm5WzM9sAgXrXM69X",
  "key7": "4RRFa1ruCA7H2xSAyutGxcxJ9i6YmnBYkms7mY9Cpdeq5NCG54j5qej8ADpmfTAbp5BCTX39XpCe7Niz1TXwyHdv",
  "key8": "2Cfx4xrzDYwKnWhY6EzaZNDzmEC2RyYdcFwZNKpKTVN2WMkhbCA15pdVneArH5f1T4fpRa4kRxoARUpTjcVrve4h",
  "key9": "2bPh3m4wwmwSPw1U4PmgN1aryiaDcMTFEFDpcDxJJ2ZP9sHKSGqq7sGv3FDSNPPvY9yKhbKNvG82fDHZhgFtSdtN",
  "key10": "2p6ZeJrwr3siZ99p4Lv1ufyQHW5T2DQ2dAYMUXWCvDSsAEznBHteQXFcPfs9nqL6VsJ5hcuemyUuM97m4Xc6qY49",
  "key11": "4AYaXFaUA4ezQdCWK69o17WDUBFxqLpCovup25kPjW4pgzrKjsUNrM7MXchSwyzw3KLQ51Y6kwMjg7djWVKcxfh1",
  "key12": "nsUrTiVwgvfBhPbysM9p9t4jB9SmWRJpZWBT1SLA2R8nTf3zCWXCPTkxpb4zd6QaQ75ChC7tpkjkgCk2Yam1kR5",
  "key13": "33eRtWto24XFheYdxVJQBuu21gexs8mxWPG2JA5Na65X3WouuPaRovRnskZXgEgSTEWifEkyG8BZLWiBWpcNtVEj",
  "key14": "4X1obcEvfDkYKNFnie2mgPFBVGnuqU5XLe3U9ZCPNRj92gCWcYoK4EQy8j1puf7PqYwg6cQEuCkap5x2Ny3cJcCW",
  "key15": "4bnH2sMwtUfp8wkzhQKwv62jECw3ae64qvpDzzEiVo1Wpq6ThGKCr21TGfQNYdsFe3rgGVJ7iUgrYzhfd32RiAiK",
  "key16": "5fgqLevQPX1SjDmSrwPt3kk7HJPbUzrs8X5J58KZwY2j2sf4C8ouGgwU4XMvJHKLSLt4WEEgXEboQi2yrKffChba",
  "key17": "3A33cTrpkWVpAGwFQwyaAXNFzFAgRdUWGy9x6aaQ4pryLwzWfeWCy42x8wPEXKkLPrHWPqT6HCb78F76McZMzxwy",
  "key18": "5rPbR3rU6zPatkJgss2NiThcq3uwwTEunDaYgcL8oUERDYZoVm441ZeyYnUVCxEBtxTXLAZiKvcHUxaiEYDADUX7",
  "key19": "4YipwrRpwxpXdBZ6pTXzCDBnk8EDTFmaec9Xgqe9iyBSLfD8hPFCrZCmX5HJSJKhUaepHq3gmFT44619RkgZpQjN",
  "key20": "SQcPJbAyv7wANYEYzC6FuPmC3PbRinGbVRC8vgXfqRyDCGNziStbYvau2xNB2NY2Z66JaxgZhhknGaPt5v2CYAJ",
  "key21": "5q7k3xZb9q53C4X98nZ1gbExK8yNQSiq9DSdFdMjcFGib3KZnVQTYU8NZFBbPdk6fcDk3DGMJSTVX8dqeGnuoAyw",
  "key22": "3HcTcZ3xE3raQfVuXmH15N9dcRVixwFpqP3yeJRHgQeeJN9Adg5QG3Je6YzGh9jenwTkiHmoqwteFJEam3Xvh4a2",
  "key23": "3gpgWcaeAzPaHtXLzt4w6qh55K8JvSVVGJbjMJhNPSWVQMEsw7wqKLBmGjjJfhFdDmbk4Nz84mqt6zieePRFoX8j",
  "key24": "5hZbdqZ9RzEpSvNQJrkZJyAXaGJJdANaW6oNCe11nJLJ2UTQrXyyYYJx68pYGheCCvdH8JteEVwgE33bjoDdfJcy",
  "key25": "5w4SNSGvKoyfy4zetZs27VHcH79GujQrFdV67oDiFtrGophyv9SEWq1Y8qzC2sGoeEpQZ3cPizmKN7vvmB59cXfE",
  "key26": "55X1buAMfJ9CXF6fYyg7ggd2GWm9qA8Q2kyVVpLZKLHPz1ZagPceHmsGJrUYRCNcDabJaxKJ1e2J14MYnzHeLUF8",
  "key27": "2azSUP332NiixCEDRGNCePgs25Uq8ddtbG6bXfEt2b3os9RRqzaGLFoSx9xY65MTsMdochrCZ6r4XzNVGPRqT7zW",
  "key28": "Pz2tiyk5yW7FL23tLeWsZPFU3kii6kQoKyD4Dq61xibJAi9BkX1VcZQrqgSDQRq2oe87bQ9LHx3tJ4YYcMNinPN",
  "key29": "27pZowxgixnzrm1jxMk7sa74A83bWNibPvaPCnccwEu56wbBny6uCzff2usqRrMUxBSZ6FK2fKCRBVb6bQPFyP32",
  "key30": "ytrzTjVwZc3rCoor7DMod6fAcATZxofhbNzN1ABT884hEt1m4gezAMNKpBy9Zh8DEvEVtgyRzHec7UDJU2gQmAb",
  "key31": "qV3d4apPEbA5MAqevPNEJ6BWmBCSHXvkjbYSB3TTXZzP7encVRbcuZa4fPrh9S56BuqLJ4rtwC7kMLBgtJ8zCrJ",
  "key32": "5Tu61csfFdx4YwkTmDHGzMzioDRnyXUsiMKiGvrGqxyUYh3AEbzmCFu41FHPHUE6cCQidvgNgvZ1FxpTvY5aoBtW",
  "key33": "tRw5cStYsqCYKYA6e3a2onqtJTDfDR6Y5W7TaYG7rzzZmXpYgmRh1KC1c5sqgpi3x9R9rWLNDWgmrg1W5vsZb2v",
  "key34": "3DNXK9t5LCrcay59HuBuWVbLCGzT3SEmW3yXH4TYKgixKvDMZawF4wRycPHhwjGtAnrLHpsUivYW9NLA1XXXFhvG",
  "key35": "3YgWHEKB6PVZBw1RvSLh4Bz6cuVKDq3gmaKTzwKQTtGmUJVTa222vPjDCBaBQNEopn4Sg5sxTPdTiHCdZkT9wU88",
  "key36": "3gWksor9VUE6jL4KA12HYPa2Xvu4s7a1SUL2MVe4wmSwT9waQbBbeGyrCb1qjKbG7WgWTgacsbYPTgkXpmB5zMJc",
  "key37": "3tG3zS1DsAQdrVg8hBuNDyhQ5fP2eJXTopKBrVZ4Ngaw6Jws1fBGUVhTVY8tHaQqbF7eBENCXreqcVgLC6U2xWc6",
  "key38": "2TrxzTpyCDZR1oDQouinyE7LFM12VV6DcY7mVbhghxZgu1EqEV1HnfuhijWdF6o8gKTnf9eWHLGaANmLZY5DckDw",
  "key39": "3cNG8xeHRgB8dkQQwyV5aYEfsUp3xvpAaPkBnRefe1XfSy4VYY7WpxDJd9eV81bdp5XxPJ7tHknC1QFK4RyhgJQN",
  "key40": "4NKCNBq3fiTuudbkt1173sA6uvoYCpt5Wwxw8sfRWYocPWMj4NL5NCfwEmLSdfXoRbtWZoHsbfu9Lgtwtf83ASv9",
  "key41": "2QtfC6FJLxcfFgJjzPVfWYpfA5jzJMBUizGzZWTugWxpADb1Z6K47XZuwqnw6qwxwGrTyXMSDRSGb4P7iBx3tjp1",
  "key42": "3fZJPdRCF36TztT3QyRJDN9kHyQuZWmjJpTkPGEWusQLMfLgbbSbMCCZxek8iT29Eu3k4BcJk2TF9BRXthqPdwmv",
  "key43": "2qKDNPRHPPzTrzxaSodtKHdNQ7XPPvyZUJzB3YF98irKvNZPNsKkHiZmv8ZPJkqbLwPtk8upHQqd4toBVCyjeBby",
  "key44": "3SCmAU8Vmibc9Neyu1mKPiGKWtr7n2qX9SQuZMtFZQeZhKSx3uaXEUWobNqDxGnsdKg99Bqfp9kMBV1gbMph4oq6",
  "key45": "4AckazKSXCLuRUXx8XoMS5eczUbrhk6bQ8uLUSKo8HLRUn4XjbjKVNkWx9dyRa4mdkK4p1TshUEsFcjpnwKApEja",
  "key46": "JkFvJVrcyYMH6UxJexiMqgMC2wAPzRbHkxGPDnJ3V76sefybic2SbXNALHLxXjHGBXdtVsghg6X6UNty6FUmQ73"
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
