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
    "55Zpwvgeti19VEqozPXepfJXynCn2qzH6URR4NR7pL426e51JaXmmCZHmXEZgcKXA1V9YKXjxGc5cf1wAnYC1URm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64M2ciBvadtdxHjL6KZ93hhH1Zw6XKzhqehP1LrXx3bckX3is1GDBjDj4AzSKxy9k9nEwGCQaaeJHPeEKG1TnaF6",
  "key1": "61xeasHhi8jtJcq7se5tUbQGaJG353v2m6DnuaqPTTc9GufYhYN8mHaep2KcJRQkEWxtWUdYxGs2u2DHeJDQ8SC",
  "key2": "G8aWmDsGugs4oyy6jrknrJKyB8VPkZF3S4unrW6hLJUKaKzkrEjop6KBMapus46NA42k9jSagKMZbLpkHnZuupt",
  "key3": "4xHSPe75XxqzohZ1zU4r25oyMgjigBwWpT2GnLTadQnCR9afSvcigo3oN7D7DwFqUBHhUp7otniPEjLmyhpd3Pvj",
  "key4": "3NSChHZ7sCpBqB5yk8tAVo7RA8uk5d2nu2f3x862ae4Zc8Wu53RiwCM5EQExjHsrEVqJP5P38MTdkhqKsaVx3956",
  "key5": "3VoEWtRRGW1414sjvN4Byk3R3STgMv2RFKV6heXETGz8HT4QTzxu63YHWfXdyTeZ8S4HvzWpJmkwWk23c7mJ3ngV",
  "key6": "2UdVoFptjaJtPYaunirX2FapB25Cwu31dzZtro8GuFtNaKrUKe6VVo2n7J4MLN4i2gtDNtCdFvvX8aHSzKMiaQ9n",
  "key7": "5DPzTV9ELesNPWBahVegLrL9QDiVT2mEr5MUNqt7mYqjWTYU8yi7nscAtgEM8fntiADVsSzhtUVqN2LZwkSPTpnv",
  "key8": "5JfZe5iCfToFRh1h24dSqweczeZ6g9i1WJbfzbv2vzn8fmovS4NQWi1PDJCCntPszd93F3FY3kyXpBENcnvMrdJw",
  "key9": "48VegDRvkz3HJk8DD42TNSyXRGnb8uXwvwHHVTbjmCt9Xh2aAuuWW529EUtgg3Hh1KNPqXdraqxYHWYPRThggn1H",
  "key10": "5554F6WUPtdQqPT36TA5wy8u4SV7wKzgNHHGTx1AU5ULHTqvDFWmfccS4dLmrrzpXcicJqMxo6vyhhxck6VeTfQj",
  "key11": "XjXdZtZ5kqzvJgY5h8ygUy4LTL8zmNrc4Lc2LEGsYh8kdefJXHSmWz38taDY8A5nwLGE1pxpuiJfjt3vSP1E3x1",
  "key12": "3csydgsBWsCq2Q8T1nsWKsz6FgNUFN4CabQVDyUpjTPpyf5C15uLtbNurbXMR2WTMy3UkizYJLFaLruTf42whpMu",
  "key13": "2yjGYjJ5agWBcZ6VEeFSuZVQoNqy5LUWiMakPwa1NahRgYaQv6Lo9KbDRsdhwWTj2W2uzGjn7U74jdHTLVB3gDN5",
  "key14": "3Do1GCTvbeMBLGvRQtR14X3EUeHsgrTHVn2etTUxEmhj5UARdDF5z4EPK3CiykDkfiXEy9gq4PgDTSqD5iHQNVFN",
  "key15": "5a8L38VyVuHaANbw6bdGCdPWvjUic7ZmR6rQLP4uRkJcPSDSQWtwDnekBGbNvBdnRNCAKhQ3tUCW2UgvEBGcVskX",
  "key16": "46Hu8ELCGNPRxhz5QYHT2PNNDZXbFuPwCJeQygDybFHDWMmsJzd5VxG2Lvc2vwpRxt5uSTtVXv6dxjsNvPgkgEMK",
  "key17": "4oK1z87errDNo8dRkk4tnThKXdwEzHJXZd7DknmRfTDGTDiDSzwk7EZSVpqsCWxWg7DxMUsxeoT5QbYmFgbA6YSq",
  "key18": "4N5BAiV7GZgtvQNzgQojya9WJz9tG81M1sZQBSxEoWNQd2gD3mfHQfzohMn3SLnipT2sPLmWPdRMxTRcxnXK2SNW",
  "key19": "3AwHKg6XYKo44SjjFEMpbLA9hteE2KfAe1GnApRQpRH4omcsYonWX9gRpcCBNGFwptVCnfy9qCMiyQXQZnuw8mBK",
  "key20": "55tChA8efMdK2di7pheTgEBKAxqSAANm8mp6HqxyfSgjXddSvZmC7yuYQd1sSBgg1Rpj9cdWAwAuHRYnyAn6Rt1V",
  "key21": "A6pafaAvxDHEcrX95GoAHjdi4soqVZwtLgijG5kFPQt6eovT7q29GvweW4pNkDD72GzzKvBMtWRjGeKGMTxUZvV",
  "key22": "GPx6Y3JKtLPyDDSQXzePnAmNeVZCsc4ngSj5boDPeHYp1fGj2yKyjQYzGMJuzBaQnjD7Smhe8UmiGi3CtJF4uJs",
  "key23": "4WpRnhfLijZns1vCrSZoMqcPRxC4YSCMGW5bD4HK8SNTjwUv3KrJcZzSX6E4ihNTd3DBZHw61C9nkXrMV57jTQmX",
  "key24": "oie1qKGVjP5JysCn9ubaFNdwtvnfXY9XwBcCHgqkZKT5qfpCTsMJYRThGt82QGc3FyHdo2CLKYFDQ7JfZYPqz4N",
  "key25": "33kfgMKkGB84DxYQ4yJo7EYbJrbC1jB6VeB5WmEUxPv3EFSW2iiQ9jqPz7AdH7UJJogUygX51YZakYd7oHvxQEXR",
  "key26": "5uCiXizkoF3gg3sS9Ea4hZu8e8ZKXPbtsEs2xkjv2TLwyFRRkD9rhgkBkTLrGwTwwpmYYuMNqEQtg29f5wqLjr5J",
  "key27": "3kvQare7myU6i7k2No7B5LBD6gRC9u81rSkAhvpZtFyroHgm9RSWAGJTpPppmNpvPovYiS8tAm1iFnjPNbWDks5J",
  "key28": "4mMjdw8GiCgceUd18NDEGB6NCDQJLHkz6yPeg4gMjbu9wrTkzxqRQsrWkVoQVM8X8zHeu89GZjGg4RqR58nDgU3o",
  "key29": "3SqgoXDULkYp7W2dNS51sjb4D4varUFwdbuT5CdoFRPGyzfcNT8nKCNLdBSoGcw31QzTHNbPtpyqUV61zaxrDV1L",
  "key30": "NYywSL5Z1wipViS2xuqQYwdMD8b4VT5unkuVUiAZtW6CWVNTVnm8MZVVR1iXesHu6GUC7tzknfgEmsijRYmYDWk",
  "key31": "GNm4N9L2JtKCDeSuMUmm3yUcPqYsxinfZx2wZEgxQoNea4xJNdvxZY72nYa7AyniLpvx16uDcEPmYUrnyMGe1cH",
  "key32": "2Gubd9oUT6YBg2dHyCpKWwNuAnbC8d7eNfFtLRr8Vq4P3gtX52QRXAk619abmMZDwfbahheGAFitSh2sZ3DXCtCF",
  "key33": "3eoEVYchNbnkTEQ1Vf1GQ9gXdSr2fFseo3X8xSXAvRSSHtdxRPyAXCv5eYxvuWkDkfcQ2kCMWFDfyNQaeaQWpFd3",
  "key34": "432btCEQHLSRMPHiVc5LjxwsnvZzJ9CRg2xA3kAB7BYHxAJeWcNLzftSZkfw8pfu1ekTDH5P52yCi6af4metu98a",
  "key35": "2qXGVrTkfka87LBXJwUXn6zUT5MudinyzPciFv5hhum8WqiZKQd8Bfcxkcg64LM8xT9bAkGMwb7Zm3cu6dav9Kvx",
  "key36": "31RVyZ8LrGWhWysE5rkJqh4T3aew2gCdsRVwTMi2r3Voi4oqf4Nmrf4uimmdQvhnXhreaYQr3ud9XZupTHFF6oBe",
  "key37": "5dwUPC8wTtsUynmGK4EpwpHnXSjTLM5DzHmvqQrnYMNphzM7GVWW2mNrpwbSKXAQbLp73MadGPjh5f8R4ycjtLrg",
  "key38": "2DkZ4BcX51bfYUrjHdQjmiZAtFNKTgza8cZiFi44emzpvWAnc8ZWLwZet7wtuvDhfPUreAqGkkBv7MNpstHN94EF",
  "key39": "4Vb3PNnA47PhAJuuxYnFNYJx5GA3spKxWPZFZJrPxuwbXyRZ1sZTY7SLjYeY7YCjVkhtGEiBUuL8AhLhpgTzk7Qd",
  "key40": "2tmkMyRcw7UVyjmLh4YfMi4R9Wb2pxULjDpU6wzERLGAa35HzTvggnJZpV38KPzV9e5URd7rcSFuiuRRYK27KaKL",
  "key41": "5x2uKxki15dPEYgNQoKyHu3u2ZyjwJSF5HkJNzAXKsq4dq21itU2rxKkioz7KE6NHkco5V4xvpg1GgRfK1FuQCvb",
  "key42": "886erP4UT5sjKumzrLi84o9FDR9pS67ihPc2ziYEK56D3B2Mpn8bfaZLpSEnWrg6ESAwnN91XQnXuKaDCJproJ4",
  "key43": "UZPCnefhZ5zMZEeTpcyij4s131cj5yUdqXZYzGwzJHmTde1MXRhYC2npTNaDMWMWKHykaJsrcPYWMtC8DadiuFU",
  "key44": "31GE5dU3LadFRYLhKs43KZivrRfZcu15QQsqH9YGfB6Rnrc72iuc95XXWR29SUYsV3xMjV23r9LYzHkch7spvRau",
  "key45": "3mksBmuWX7EC68nykHFYtdaWrwxtwFUcfpndSAawUh1hXBxNR2YgXrZCdmQicm5rMKqgq52hGGEDb9niSuMiUhJp",
  "key46": "2N51jCQYjwRjcDyzPbZoKSsC2cgbree1Ud6x5JmYinx31aSPwRoZZi8WNRLzLjFi8NxPTQiXbaqGuzeHjdty8CEF"
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
