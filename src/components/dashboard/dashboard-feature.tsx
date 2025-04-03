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
    "41gEkyykgoPydR7LGFZLv9EhdLpPnx3dnLcrWrXFGUbgH4BHhPh11TGfkFp1PVbN17bnGGNbYtzGFUw4zRqRnVPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jACsVGLNVy8wkS5UEJu8xDp5WfqCCfUh9TFoBaBYN4eNLL9pCsnXHgNrtYY1oUpCZJaZavUu8ytpvKgTTW6R5zd",
  "key1": "4T3s6pPPqwkCprHSkCCAJT3gLmKyTkvgg2mJ5eNBQPdvy59Ay4F86e6Dhmhg6FF3iGymMoXPLshMXdC2gyyPag6C",
  "key2": "38gpjkJfopcGZVnmo1GnNcKssvdNTomfqcthwDoGhQXzEh2VfboxAB354CPax648gvcGXpLwroJAoSf3U3wUGbcb",
  "key3": "4MAV2s1oREWJL93djDsARaY1YSceEH4SiyVDnXRzVN99By3p3kvcgxatH9pWshXiy5QvqJvbHFhtG9tfffKrhhoo",
  "key4": "mwcE4G9by2iGA4rEB4BPM2WH6Kzux7CeN3qLG7QzFVQLnNbWjhAvTJ56LQc6cw7TfdrSkK1Y9JR4EbgTRAwwBR4",
  "key5": "3gnPKdgwUDZnyDRdgG2RH6R16X9ehVd4dGE6Jt1tF16zJx68vuifNRk7F5DrTvVxD6PTLUuo5cqgGkJYVNrkyvrf",
  "key6": "5e1yATYFCEnGbus7HA8bP9wiEHhwv866SLoppBZmCyRWvWgkWhvZ4fbabomBs6zd2PSKtv4ynKUcprq4W6XcQdRT",
  "key7": "3BexSSDwyQeYzRWeRAUWpRyZHAGeYPhZMsCMoLjFnAb7Rym442QeJ5PdoGZBAkiFDQSNvjV44swMDUwKpxsp1kG",
  "key8": "3eTj5rqZojFuEdCRx3QLTVB7TeQVRzEwHoRagXzRGCShewVYdTrUwqL8vkMWhGxpC7b6nw1noboPhA3hy8uS8ex3",
  "key9": "5fBKqsodnmoPmRRm3eriqh1MpSwhM6wEPskb7ygJv3GCfBMR1nGxkKz3SUyfRz4Hr3Wzqf6GFq7gD2opbcadBst6",
  "key10": "38yskHBVPJ8FtKxZtYGa3ZE1FhKcehZtyV8JFN9QZfsdaSZEdRv8Hbc5ETEeGYHaNhgZg1fy1qmjRsegNQtRfaTa",
  "key11": "yAcLpxsXsDiYGVHgFZd6jtS6Atro2b8MMjeeAT6m23Mh6eEpju1QRx6tGjRpLNeYLDwQAY6rFvZdiReWHUTGJqC",
  "key12": "4p3pR2QWwPuDcBapC87FzPH2Ys4Bq3MgXD7fXdpCGKZYgcPLALbwHazv6BeHfngVC616zF46tRTapnHxuifcGDqf",
  "key13": "5tLRXbTcRz9REgzXJZvFwv6ywSdmhMVmgCHzMYqj9DLMY6fLvGrCHBSWQJ6rSPJqMgu9RWu78Fq1bMbw6cBBArgf",
  "key14": "3w4eNQi5qcncHBpCm67zMBBkG5Pbr6HCWm9woVijU8cxZkHkZEzMpG3otiMrFHE4JQhEaLwP5AG11uqBigMXvbeV",
  "key15": "5X2A4YqfXpvr1WeMectYBq3x34bMtHHKaGzi6v91SdiWiTBVLGtGoDQMEdCe37gYCgNPMqhnw14EWQuHiQDuuJ15",
  "key16": "4it84USPt25kcZq5MDK49dpxjKDhM6ytmKVPvEBcYM7XvHbEgxWcg3oXs6UZRSFmmkqcejzJTv9uqz552531vx5j",
  "key17": "4qxnm1EmbCrAdXD4AvTZzYHwyqJw94VRDNoygZmaz5RgAKdjgMEMFU4agq3WBPPKT6T5aVE8PfUxqfE46oMWFN3H",
  "key18": "4Un3X6J6D9U5oVZU3Q53dhvhjdGencv7hPa5Pcry5CLjK721HiPMbqgxQsoRYmH8dCjsarN9NV6D17ohUtLW4BFa",
  "key19": "X83wPNetheDzaSJkozhxPgCJY6YztgKEUMiXVZiVGB1FKPAVdpkrdKV12nJJCoZ1ojezfFDvA8g5dr7C8DCGaG6",
  "key20": "5QG4xE9mt5oTxLtb4F7aznYKiq8V4gM4JL5LnFyUwMs6rwvjMUqRePWNurMfYihtpkRaFS2SZK5dMTXeqJY3bVNA",
  "key21": "4KGxkxh1EBxp8LnscJKiCPdVe3SF7HQyw5jTv27ttXWxM9sPCYqX7Vb3FDDFrzMmTg4nChcKTNhhtWLzYfbvzKKY",
  "key22": "39tDW1rrLZxrhCowGJLm8XvZSJHj8ytfj3UooNAZZAnqWwQEnLtWQftLtHNTB2XHhKnTE9o9dxv7yELck4C5ogQ5",
  "key23": "2DUGW4TqV7FE5pxnRAYQBxhhKgW9RR9iwUCZ8E4rMnJ92X8kCsHEy8ByVpAajpcPehoLrZvUAi8YWJLhC9bR9ghn",
  "key24": "33akpUCLD71QtmGV6FJkYumBhxzNDTiphsJwcKL7kT3u5LkjPqxX6GHpEhTQUbmsTWaHMmVMGisWbXSCxvyD5bN3",
  "key25": "1wTqwqMvVwUK6wtgcGW1mnPwqrDhAjeVWqU97hpFhTevmHJKwMSZE5bRbXiD8KEnthg9Cf8iuH87AiY8DSZvoLt",
  "key26": "3zzPSCFUz9mHRQGweM8gdGFsUYinA6gnSP2T5fezpF5ABeRZwjCgoeXWheh3e1SYuGsc87iamZKsP4u6twBMENkz",
  "key27": "xt95FwAMoqnc9LTUU9WL7q44Hn88wJbrwJEVUUbim4HSrwfHNkBxweHdxrz9jJvL7DuqdjcwTKg2mP3HTLag7Xn",
  "key28": "3oqBUKzZPEJMKAPfQRCXDCDLTH2gFcU6Rkek5BFifPj9yj1s73RciLBm64FNtdTdtfPgxJMy2SKPDkQFecemiSP4",
  "key29": "39aGUb53GSSydvNersDQkopYC7PymmKgtZshM4Cn93Mzgs5CyDgfvXq4idhgRjJhLBEjCcq5Ffw3K2rBuUti7tF2",
  "key30": "3PmFEoddxpKanptsT6eyNwarsZV5PSAa4Daju9BX7CYV86hyGycLYd4xEVLzU562DJvvRsCMiXk7WhvykETyTDKw",
  "key31": "xBhdjYovUAKNGXuYyPGmDXUUNu5gC9fjR32o579PA8f6y9eetzTYCZReJBe4qAhMuR3RDodLwtVCLE4N9DDvsEw",
  "key32": "4ATVppoippnGaJSZqndSSQ13gttEbP7G6GNTkvZH87dy1dzXduz9hVRFACmVQ4umd65k8sxKoqRfST8uNmKyu4cF",
  "key33": "bf5W5axVJUPSJDrfs62FWFykePoGme5U3rdhRnNYDsxNosjA3wDRDwnj1po4C4DnWJpah4WuVbbVXnKfT6T7GZ8",
  "key34": "4LhFyviwiDJhV98UoZD2MYRPT6PDG8Z64Lg1GuwRc5iL4CHw9ELPNW7u9DivNrrJxTgq3Za79iTCo1JTs3MXqSqj",
  "key35": "5o3cdeRn9vWdaj9CeBmbC8FEEY788eSuhhiFqKHG8ra3eAQjrzji4y2GmuB3JzVohC7egkQtWbymLANWjqP4HWvg",
  "key36": "39oDTf5CHSTWKvCD5CcKQdkXuvsd3deQGcnqvFpFvjb415j1nubbPd5yaVpLsWQH6UgjjupXvtaPhieWDe8S6ZT7",
  "key37": "XjX9XkTAKDFgSDXBpEd5d18WR3hufk9fkkgRKQ2QzFUhVBZut394RAjdwMng6LZrzBdoaN13e4deG1TKkMWqxCD",
  "key38": "5t4cEQak8xnnFbBUVTQz93yk4dTh1NVZJyYXkRrSEcTb12CMFQsfUCGmTCJY9PdbYYwALKpddkmek2EcKJwvZLcw",
  "key39": "yfVDsFzLDTv4S6GvgaqhrbdTMpXfk4f799jpJEzAEPQeGme7g1G51ykYfSbCgaaihN1DLM4J5JvbZPiCCXr7vkj",
  "key40": "2bqu65qWPe6a8banYKDvkA4HHR1nTWrJQF3ttyoWUVtkMyfsyXnaXVs7w1RRbibpuwxKX5coZn5QHBkoR24b1qwe",
  "key41": "4mn2FVvhb66w6UcFJ7m9fH7tAjYT9FYB8AAoMuXHvkUHKKwcCGNHrnm7GQpGR31wEi92mSdk6wgtpb4UEPNCXPPq"
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
