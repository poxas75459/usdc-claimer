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
    "5A9q7C2m7a5stVxzd85RJX4JVBggcXLMFgsDwUzbwGi8a4HG33zoBimzLPyyEmbpeVtUTAUaSKtJ5CEAvBgePHDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mR4yJSBaVJYKpzRFY8oT2sH1pH7JbHiGvUB81A51Kv32BTSxJ6wcCvvqJUUMRoamMYL7VuuqQwwS4V4oRPYJivA",
  "key1": "49i4ksaE8iHivL1gjsevAG3GvSdDC3u11qvZxVAgn4wBMr7PHmScVmXbZu7fSK5a91t2hyQXF511RQqbmMkTLJWj",
  "key2": "4vdypHA4PGaJuybRVBEwH2SoUPCKv9y3RYxEpVadv5Hcbd8tQXhKUFgj955nBd9uaexPVfHsqPoXJaEUHhzA2TV1",
  "key3": "AV6VWwmiHDszC1HVs96nNjwarNCa9CHzEDs26Y6iq9XuoZiSnMJSjVVu17uPAEZoUjhUQuRKMQn2c68bTuX5msk",
  "key4": "51d4fdnHVn43Q23arzTDEv3DxwmsDzC1XZbc7XjAv25DeT5RP3iVDheq5ZRBrLEJkcU2NUwTb3eCmY65ydFBCZi5",
  "key5": "64NLjwhu6wUcVrtC9KNPqo4fUXWVs3wJYVzZpd5VdgUbSasQqUEJV36bSvoaT82ZPhu1wLsvgoVweNAwoHsNzyCD",
  "key6": "2cUnMvRNKRgju1PouL1QSvDnDGBbUGxx6vPBAFBTy9kYMzPFufb95g4HxaA223RxCo8ZyazmgahusZwPNuQmMHSQ",
  "key7": "4s3Le3RxGftcs6BpYtjJyiQUS7o3FBsiFor4NdMTVfHypfd4mGFkzhfNTQGVZJi5sShDrvpR1nQ8DEvsYeqbvLNr",
  "key8": "2NV78ga2Kve4VL4UYmFs4q7eNLZtKbcjqd7FEJLpVX6MVn3UW6VgwoZ21tiqBhLgsKR8UwSHPHGLZw7ibtGGWwke",
  "key9": "3mEhrjNS6ssEcPuY8izQYQuhDdWWBRDB7cmmysW96fHsrjbP45vnKAnA53Umxaf12eQm8tLdJuohnucispEZc1d2",
  "key10": "4GZo98HAoZrPZR5homQ68hwevS9aVyfL74hYUm3ckyN1f8diDSGVMxCj4E6Nun39n9a4eA1crCVzuLuE8YEczKUG",
  "key11": "4RUxZmKNbLxuoLaEd1cHU4wQU56whAWr58WWayRUpFMqVsdYV2FYV33CFMydVoRfgZyGwJBNxi2J18w8xrXJZysi",
  "key12": "28VuGwmJmBNVbfwhcGYV1LqRYKHwi1NVRzf2vfMszZyU3SdHBfrefYvGHQkTrc5TCS2uLJ5E7AQikspeEmjxXhnm",
  "key13": "3eFZfobqZEVmcoitdWJtRy8NQEwwMkzjkxS4cN9Y5ALERg2GDApdW2pkzzqW7rXTMqizU7LHc8GqjFjRumvqVwwV",
  "key14": "2ucTaAKRmwRGbgTrHJk1K8WzSPEhyyQsTsixrXMWBaKEzgJMrrDJ63XFut9pN2FnShDquUdGBgJCPjcLSsAhWocE",
  "key15": "3Du2WMvzjNdhERtgg5MSbFfs7KBmWeXYyiuRgHuYggQEd48ShxyTKY9sBN7NDpAsJPTQ59Yjy2SxkThrAX4CsTVK",
  "key16": "24PVUsqzpKMnbuH4zUFsLjhdp9ic4yGxnw42g7p3MGgHhE8K2T93uJ5JQcFGeHfQxCBMAL7YGA89KZ79SPZqacbg",
  "key17": "3U4NS9axibsjWKgKh4AcpeF4hHQMzjNyyvFGu8onbNAKD6fNpgfPQCtm5Q1KYE8kBnTCujsUftJatZLzN9HrEeed",
  "key18": "4rwnvmNsDTtHy4MPHTaCrkwHPTZGUz4eQjyj5isNhttd7dENDfbkGG2bKsHKf6WoX5b7m7fFqhCoWcCKEj7Wsbzg",
  "key19": "4z52H7f2ZFw1deqrtaRVxYqW3v5kfAUm8smwY9rn5tBzkaFABaFqvrhSd7gb4Zoytq9QtcpDGFYGj6DXZzWzQnHn",
  "key20": "57qQKiX64Tu2D5LaRjYapybBSaiNmrprRouBz5sX14Stt7EfSS7Vyxd8EEMEyW1PNWbhgHtYdu31DJm5NMMYPuEb",
  "key21": "nXrkMxZiRHVe2xYmPmt2s2oFTNSYVDUvjfv4idgRJPn6WK8CZg4jVpknohsE3qJJ29kwZp1btMKDUrLoWRRLjsr",
  "key22": "5YqzLkiBYmBwGtc5XrVQFDi1zWz5tqGTJVN1L75B7m25kwHrvfR9nSFAsKGHMYhFAvxGPwhjziGBfozgpAQH43uP",
  "key23": "3Ven9qfoXJRkFmDyrxjjxisziByAwtMN7FPALA62emgv6PT776R9Wj1qQJgTkUeqkSYTnk1URTm6KC2yaPNRQdJc",
  "key24": "3CJHtSHS7HvZ5NyUjDz95un4bT6C3QgXHQtnAVbRsvRsBgrjJEmfhF1c2cNvKSa43b65UEamcQCVtQnUm4L4mXv2",
  "key25": "7F4jW4aKXcYZEcFFhwKABPCqxA8WGLi7P2b5V7Q3vCgvFNEh5rURsMf4WXjGX47ogpVXZTvYAFk3MGEUBpR7xwx",
  "key26": "66LiVmvJohy2EEPNBo8htzHKkRctUWq9Xy5DxBxocuCsnRYsSH64PP8rB1jAmHhfMHbjXVpVAaufBtUNjGM5XuJq",
  "key27": "3mxtMc2ZjNBBaewgd1tygJp3MiUmCFpYvifQpdAtVyMfDaW6YvLEKq3Urh92LkvksPYSLUSnabbE8mds891m1PqG",
  "key28": "VV9fJZrFnjeDMxiKJQRbqpBgYj8wg7w8EWr9jSdKG8KCJ4HR3TtcGXntXzAdTD1gNokZU8prpncDN25dgq5W2Cd",
  "key29": "2QM8LBkKHjzZwrpMzJmJGFCKbjypVnyo9A835tev4FoFPhLUWAebw3spP9GLeBnU5oa5br2gpvmG9HPPfp25gP5U",
  "key30": "cviWbtFgpntwc7Jg16Tb1tLEKwRSs8bdG1rWTfcckMtakth5bGBTDWXwR2NmKZHz7Wv5QvwPNHHxLoBH1EwXnM6",
  "key31": "4qp6PLdbsPQMfjhKAz8SsABmDd8X2fBpovnaSJJu25yJhCK3fJuejd6bF6eUfg61QmzGxohmztyDezEs2ZeTwCnP",
  "key32": "EFtoxMKTfGx7ggd2TSi2kPXxsXawSyhdRvg81HG9aUGp8QGwpeLCroTu7TbRaWPVcZBYr92H2FiuJTX8eoHJegF",
  "key33": "m63ze55TcwicqzQhudkBPwP49Xou93yttaUqLHKVuGpsTBVYGBBLzCEcG8FyWNm8YxgT2H6ZyZNBub7FKXg3SYX",
  "key34": "4mkyJuPMNjngDNcy3xpSXnZPzbgEbWVtbBaTQtTfNzqBb1P5DbU6g88AG5NS46tLFGpMH3XwhqThNTheCa3qAGzN",
  "key35": "fAiJBt83uBMS9zZBebE3Codnps81adR4BgvM7SMjmJ7MPq2jnS1W1r3DXsggJFvFQReopLQTpM3FEHPmDHcyGZw",
  "key36": "4H7hxmke8cgvzub5G6AMmFpjLXw7eLkiHNWnjp9KrTWo8zgtRLjZ6jEQ5HC7c51B2yhUK3GA5MQTb7pbN11st5fW",
  "key37": "C3MtNCjYrjsZPmtkaSKqVTJqsRT3JHKdr8Fk7gPML2dYroz4VVXCMyauttxwjEZYH4n5dXCpW4X7W6dcsk9Kojo",
  "key38": "5UJnEMUNUzAF6aLVLKAfPQwtuaLZDbVUXmTAdkWPL9S2W82gPg87ZpHw263hVxpKxLQWfZ5SGk8ig3YMfuQSD756",
  "key39": "LuPiHVVwkUjxmvjsgt5A8LtRNRNJoS2HyCewBGpzNNoCspqdzcSJErnykrC3kC3tMZbAgVVWKYykr9d6EnswxzN",
  "key40": "596uwdY4WdiwP2w3kZUtUbwoyeMkJpt8B8kxyrC2fcLDusNXNE4t8JEvpquJLGVteDJzrFjTbMUQoXDS7PybEVya",
  "key41": "gXx4TofytcvAc5JQEA9WbXbfa546v1gE2yeNGN69iuUGDXW8UdZKnaZeTgQcoW3338R3g2soZJAw1p8o3mvvaxR"
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
