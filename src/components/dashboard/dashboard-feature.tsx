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
    "5FFFuHkQ65eaQ6bYQ1UwUBjw6gtrUGr5dxyi1yCd4QRdUqkXcabDCbKTJ7BL3Q7VZcYmsaWJtBRv1z4f8XXiRR7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485iTjE88dniKBAihcTAzyvLxtNNSRDGjzQzLxuACtRou5YaTJ3g7b63B25KPfcgW5FeLppGPn4cyVHvBF59sA3D",
  "key1": "2AaahnhMYgUE4sVmmjdnSnFLdssjJXSZHsveFDXPHb9CnY4Q7S4fkXMRTpuw7CSnDG1a93FKeYLD7U1MLPX2PNEf",
  "key2": "51o4WFCpXsE4kXVTvzm15EVP6K8uuPYXvK4BJRRKyLJRPaBGmLfP8jcbXJujC6hNbXZfNiX6Gqr3SvA7e9frnwy1",
  "key3": "588hLiCVY3zjpgGL4q441n6t2RQ3BZwpXFxwGGv4fdecwkfbQ1mX5Uh1n58qNhyX6zreWREUz9qMgBXZrgnQk2oB",
  "key4": "5FZDuvoX1Qh6FnJboKJ9Xnfjp8vE8DMKmyC4m7wqE6s89BzkptZGFgLwm4BAJE3BEgQBMiUVs24c8YWEytVVB6bQ",
  "key5": "4LqkpXgvPgogpExQkY7e7Q8TN4fqj6X8mYuQ4chBWHePeocH1KaHuj7tcr6bQ7Uk66ZfkQe3myhzPmgC9GChu8ku",
  "key6": "5zyRo2yqJVek98JQR1Bzo58tMMYXhHx2tWXC47VW7VYKJQWmDxBRAw3y8Yg4tw6UXJY1wWMXDA1hm4oHrhXpbGwr",
  "key7": "4z38YkaGErkCz4gPL76Wxs6s2XykE8v8PGUrbVtn6dYgV56fAUbs4t7YZiSPjUgpNenFuvMjCgLuDT5vXvuZdZaq",
  "key8": "4GyT52RXyKBB2t2LYs1TbFSoSVzD1szKkodSz8vUDjrfkCWVjppoXgkdUeg9JVdyevpPM6q4zX8yZ844AbZg3riU",
  "key9": "5XWx2CnCGab6FEkgPYjc5yJj3U4xbUuXYdqpFahGLoFSJTmCrgHsyFLZAKHdEGDcc8TRmQSuaZRgH41KbgVWJTSv",
  "key10": "64ZaxV8z1zUHcJZqKWMWbJJmi1DNqiy3U1AvPYzdBaa8KUnF2yiCDCYGJRkfWdBLskQ2JK2xF3tp7MCpj3DsjWKs",
  "key11": "32NTSQsmSdXPVdcaiekqpjft7pK1Pr9VuJR4UxwnMVicXNwnefMLhw8xbAt7G8eD4oqVDbcLU5mVFBi2ywjfGpv2",
  "key12": "3SadRHZCa3uyjh38NM89PPRo7xAAtvE42u4H8YKwe5HXQLErJhhAY91adSNotAsAZSqacEZKcjht9iek2K6UYrFR",
  "key13": "AuH9gmSweehqDGEcUt7gJAmWeQan543a4RtrPtyH361d1o8Fw5XpR9F3Z82sQuM1V6VBH5E4DLTnjBM1N7Ge22d",
  "key14": "DRogKtjfaiHQbLv3RUySHVyc38q9dww72mcrujyyKQzYZ3jqy7z4U2tEuKbq8qahgn5YvtfAWw6wXumRQnJ99ZF",
  "key15": "3cKNFPG4GGXfTSo9MtNha1VcUi1xxTPykTRmMkFoucNT9RqmhPTgyE4YEAYtkaNh1nVVPtXij8j88T9accGRkgmC",
  "key16": "2htkZtuhUNyeHJuczaSXcKwbhXP7pRRi4qCRPUZq3gouh43qGAN2ZkyJZvhQBGfmxTNwEWQyFjtRVnvphajW68Km",
  "key17": "3WhDq8dN74fm8RTkcnSS6HQnMQNDtrUtcwDzojn9S6smZSXkFHZ2w7t95WDVWdKVrDSF2eZUGe8C9XBgd2cvTbKQ",
  "key18": "4yVewRKssWuo6FmwqYT25EZvf1oCmk6AM4YBtCX8Tfas8wJ8qTDsxxH9AeUQnUjDmx7j3CQLVks1TUrSdRhf5smd",
  "key19": "2y2Yys7Gpre3zjdLNkttqieUUZCt36RHF5HmJGk1tEHiwBKRGcnYf4tu6n19CkmnMNEipugd949TLGqV9A4QtKzz",
  "key20": "2mnJpA9tisWTfK121y7Phq8fi433HuvjVPZkjmRgGQnuwbdF3yGXeE5BtddamqiyU2PoRywayiSd7tYgBAqpNULs",
  "key21": "3LzKuE48vtw3nzBDmA8463BNQdXzg5bKZS6QoZPJE9cjcM8122ZgyRmssS9uovFKt6ozCnHU7Q5RRDjLVy8gYTJ4",
  "key22": "3TVDWwh1x9Hv6u98cM3u1uPjfrPMvBL5dwFNm2KK59tyqgq6bKSqyt8vgdQR762uEwGSeN4fZGBxA4TE5sBWV3o4",
  "key23": "4ySwmHLYAaki4QP5TFLLt9nCQosza1cLq3GWGEAZF6CfMfJkDLhuYZvTky4HoDk4hLDtAhxcyBrVopinK6bayYjS",
  "key24": "2YGyU1eJTdUf8PRnPdvmnadEYY1Bk7kgyEchzkDRPX8bUm57g4Apxr8KHXDYCoH4sNYFa2Re4RKrP3658VXZBYNy",
  "key25": "5efa5zUoZEpPmyWZTPUKD76CVB4rYLMKhdPdSubnwvxVJPjZDikyZDf7NDN617BQtFXwYaz4BsRdAZLakVRNbtjm",
  "key26": "2yy6DxKQXv2TE5v1GDNEuk8m1P8xUad1p7HSAwtdYSixmr5dbGmaSfYTMHYvHcshdQo3Enc8StKMaqFgo2xMVCA1",
  "key27": "5LjRiN23TKzSzjW2REcogdr6UNpkn5xxBw2j2x1No547nWfDSCTbYQaSwKjwMJyyrZB16pfUJnASp7prLmCiAH13",
  "key28": "3AkKf8SawQ6Wbg8AXr9xct4d4wyTWcJdUpUsHdevdDFSf6YBPUJssjUXuNqtA5RnYg1F1x6cVPWpT4niR79DoHG3",
  "key29": "4Z8gH2fAFbhHhnLZUiZZ5VD4Qrbd9yk34Z7AoWRzYAp6sm5RQebmdu9Tbd45n19LyHDjAgMaULL3BgHfreH6UY95",
  "key30": "3uqNihiBJtqddvHP9ANpdVpKCxRNitEsh1kXmEBChm8wrP9U6fs383LjNiscBoUjTq4tSxeqkdWwzXpPojz6zHoJ",
  "key31": "3RKDNrbVTyY28XTUP6TXtFJXgoNQMPYYVauFvq5fnySCPuN3DDNQtojS2X23Lf1tShQXuAoE7Et15CKDtT9x397a",
  "key32": "3wFopTTy8P1TL9eXqWeaavfW8kJL8YwRVhykz3oMvmMuuJBmsjBbMLhxbUC15a2jNGGjSh6CaARe533iZ2VEFuQi",
  "key33": "5PrJttFuQtM1M7FwwhR8Uu36VgJDWtXHC9tMBsL79JT2kr9hdk2ua2Qp7n8bTXfiVqKG8mY6dGBFsGhLDKJ2B6cJ"
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
