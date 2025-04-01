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
    "4RvUoboGDoPJtNVyWwU8hd5u1PVgeu6ep2RBsHHRQqj66cXN4zbqGNnsrfkso19nXWFy1mn2PAsvr9sJLV9zLY6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbtYJzdspw5qjV7cSiLfkdxWHBum12GFFRm9cP5Dr9MdS8mPCNNEYbt37EzEKrt5gyrRwXkfM2qmqfpXQRwDAo6",
  "key1": "3KSiYHPmPQNpy9qSpT1nwm969KqSEZdZH9nQq46pTC6MDtnvvTpFs6EeJAaV28JcqqC9aTt55Swd66d9JM9QBq1b",
  "key2": "ZCd1H8UvwJ3V34YpGyWdxgeU2NPruqreHW2iQD7T96PwvwkgjfA1j4Wz3hssFp5ockYREnuvUEkxnp2jMcvYv5v",
  "key3": "3VTVBzZDXqDXk68ZFP8KKPF5HS658LS9hxqFxbU5bxh4CV1L1nRCLodPRuMWqyWQfvGVZoQiUgBFUERY1gZk5dS4",
  "key4": "47EtRj3rWR1KhQ4HJgnMTNZkgQ8KvEnsD2hMYJYugWmZyqQtrCYiKBpuDEj33fLHJVEG67Pf6b2xgxkh5GwDyU1o",
  "key5": "3KBuFoHfpcoHAiG3AWFYpX12yq77XxxQKKet2wN2BKQXXHvi3WTT1Ut7fgDzaky4YHDzCeEJcfHEJMsKGLnL85rP",
  "key6": "4euR64uyBxpuwiCHZtFbcwHXcR5ahGTu5CxY7hGgU1ohTWEpXz6vXj7MCduYwqxYLz8wvrLrzuBLW9RCTTR3S5BC",
  "key7": "V5UiK9VQ6Ev1Uvbh1JixqvHhz8Ry3Ci3Jd5JXxhQRuDrdD7VGwqF4AFTDP4JKvnA22SycDk5KNueFjBrS7BTz8Q",
  "key8": "zj97RjSbqvjETKX579SVWYuVmNAYFu96jxLh6LLDZCSKAAZNfH1366g4fpevS2N4H6F2hqhaMNHUsxrcMiJaqz8",
  "key9": "4DpadXKBYuqGbq95G1rTbe2gnmkWXCMCBjjvHavTzAFGKXUCmS3o5Zyng639SujQ7k51ExQbGANn2KMZsafRvjRL",
  "key10": "3vP2VyvitEvjGNFG7CjxLzu5NmdakcVsXqadxND6wCwhwQ8XQMz9mh5EFAFuYvyhX4oQAwaUsJkttVyLRJ3HxZ2C",
  "key11": "4T8f7mSkP8WceQpNToP4rbzgNhUnWYGj1vw3P5J6N61GrZdM9qRexwRuARYeuMrZHYeznc6cmQaK83FY8AwGdomd",
  "key12": "63CPE8ZN3paL96JThA9XyiEDpC79UN9otHBxGyn5qUWdkKryLPcTWDcMHLQkwkNstZnWAgF7snG2CYFbEMw1xHbz",
  "key13": "2T7ZAegmkmVY85QC7b5mRX6ARZDmvaESNUYsXGpwTUNP2t6aanNwLJixMkhV4t6tDoNUXp7uRwEDw6WMNsTYj75j",
  "key14": "3amjhnFi3MVV9Rh35kpNKGqynYnF8EHCvTFot76HxCdi88ghSUsTGjDQDA3RSRuJHV3uSxbiT1hdZ5tbb3eU4jRW",
  "key15": "5HVXB6Nu2sTZgmH3Q9tx2mkKu9SqbWWmCDdtXrAVCvR9xqSY9eVpoEc2ZHggPCPCsZARA2xcEsRoqgSL79v9tt8R",
  "key16": "Xjt6WbYT4gkbCwcPZcD5qjhKCDEucFzF3hTwtpHJAeDwhovgdBbuNy2opPysDZsKG6kXKyiN9dmrUyjbGLKB1Xt",
  "key17": "2PxFxyGfJmtjGt4TrvWTAGHaDoNjAXpvEqab7F2nbLjzGrUCipCfZYLkUQtrxrWguDVn2h4AFUNySoayHMkmFjZS",
  "key18": "52nYL8ZhcgvdbBV28sHkuW4eEEeFQth211pgjrSAxnu4zzdVioNv94zrSSGsEKXdZaHSD9j9adwW7oAAdsXEhPsH",
  "key19": "3R7RtdwgD591gXmhdSU8ekwgL6soMTPbeoindLAVs1TpkWahKQ9kf1ZF2Z39po9HgB7ung4Z5YrVpqPAkAeJ81xJ",
  "key20": "525qfAEdDS5fSi6jyDvmiVhhrC4fJMeJTdng7ThBAVGtXghYX7UQjiGneXbKAET1uN51hvFkqJTqrXwqTwAbJvc1",
  "key21": "2oUtXhSrXZrqY2PkHzTtbLGZYyaYxxDBkpqvHFsrYNGfejVyo2fMWaKeNHf4F2nyqhZVrkwWioCUQb1qyYt2iqvN",
  "key22": "5jJnDB6Lb7oCopWowzt3Eq2KZk7Vcve4xcm4983BqricD48Kp7aF873xks6XZy99CiFj77piYB1Hi9axcikWdWq5",
  "key23": "2UNivJU3wVz5KUnBppa9NQegqSvQV3zveWZet752HetdCSF6RBJsokuScVhXQZRYashSVVAo2T7JpvStiVR21ZKS",
  "key24": "GSr8DC2Rvi9sJVcWFCwaySeZguy8ePGu5sQzCDnbMp1Gzmh4ePXhA3cMhBZvvkJKEDncDVqQnzDdUa9mnn6xpnG",
  "key25": "5imV9FDuobPiwMEBkzjjy9tdDkrmo7gyXK3j3718kDX3KEsr7dZGnUZ6xbi8gsmsghRW2XuzXvxqMzVNVF1CFZRC",
  "key26": "5DYADqU5RKGZZFMYgoy9HKQJLenstAiCmtSLGDkRfkcXEdj63EjFZa57ErKVx9hU1JoQgBPizXBf5KWDTXLxvvUp",
  "key27": "5NGpzUBvkeR5rLwX9jvirgsXjsdYTdpd3pM1DDkfbWKsyhz1YUyuTb6BvpUU3tJcmPaUTy6PZjM7yie5kWRoyDVn",
  "key28": "yRJzWnCbKwDueDuLsPza1yPn8NVhD31hMiYMAL2trbYJzBszw2Cjp8BTkYAxsiTDCw41hDMovtLihvxy2GENrFM",
  "key29": "ptQnkg8hT8yE4K7foFG1VGh2i3cEmkSbFikpxHgFY19Zkv6SCkthxSjQGpXVU9sdnqHYwcVG2xBTDCDz4PA6fpo",
  "key30": "386CaktouvzpEQbtPwo1xN652uV7KjjtjBGn7iRS2ExZ71KQcmMag5jWSkjhGn7iEtmBeybS6F71yjhxR233hcHL",
  "key31": "5GJTJRDTsuQMyjNMDzYQvMnPdsVtzf8Cgaxo7jgNepecdJMTr4whtigPBA24LBVNaqzpAzc5B64zPXgVroW23yng",
  "key32": "2xyJgmZ1fXGjPiuHJr2rsVeDWLg5ePovgy6UppZZtW3FGEtgC44jmx9wrknARQtAGvvvNDQ7Qh2kNo2Rf5jyaG6v",
  "key33": "MFtohxJhqQUfqZQr9vba7gD2JCoL45nyza9CsVGvss8pAbkm337n4oYioQZjm5uFcfgbEU7uiQ5RoK59rm2LLhs",
  "key34": "27TxU25sKrDHyQ7HqrZyGs2gFJLE8Q1rXE4HotfQA7VkZVmnsayjTiqPs5jncSoRF2BbqGtUNRQ5rmrStAxiXdvL",
  "key35": "5o1trJTzaEPgcUzyX1RcrN5NktHVTDdaNFQZQsUBYVpMYVKCMtrbUfRFTM49VxWXpY4xjRERWoMVi7n2BCFoz7Y7",
  "key36": "2XPHiCVNQkPBGjHB56Ny5i6GCuaR3MsP3hnKj7uuGKZS7k1GKGJ9c2CaXizqCK1xyi6JHspHqDwnszXcW9CYGtNP",
  "key37": "zWb3EXQjPdp1Vce12B8HXU81MswA1Qwdt5Kd6NA2y7bFADR4nfWeCH5cwVk7SUNGNxzb4vxXmAnVp8t61XbdAHA",
  "key38": "5upEDRPk9zZYKC9GZLxoiC6fRL4ReMLEpCdh5RguHAgwk55kkfbTyzv7Rhjdu5HfwsdSJAKNUph6Cs1uwUiXrPEH",
  "key39": "xp24Ld8Ng51ftzWWqGM4c5usUwaG3FA8wCwjmdgYKfL2rNJJ3SGDF2TvXE1mcebieAcAMrTL2yhyNQW4d1xDeHB",
  "key40": "3pKC4eTaCCuPH4uvcRHCC6KM9kKRBzdmssPwVvW8wPSWqhxxc1f1Nb6MwhvvUysk7SmjNpoKJX2ZjUCcmA9gnEQx",
  "key41": "5ZYmMoV8N7Ex941nWScRvx9rtCxke2i61DE9QxMBCgPP1KX6fGqcuXJRwB4pXRdop16a5fiisdfGyt1PQNFbF4Fu",
  "key42": "3zseP8eryPuKcfGZYyQPMk593NDrE6Zxd75GJrnqwyZ7P3sKW8hbVxjJUVu1Xsvkao2Sy1nFrVbk5McjwRGFnDrW",
  "key43": "5xAwMeSowS77zem7d6zuHop9p6PkXqngpmNw5t2ix8YLijHskYYXbYXbQKcfzAGYwHFxrDgDXntDYtbaGcA2BDvu",
  "key44": "5xhZfzZRmjWvNe1cyZZzEDsWVHLnWZcyRb6RUVcufQvsByfW4NFnqJQXNR3MtW3uo3iyHcFpjLQGibnV2iMEJrhT",
  "key45": "48HbiTdkveR3L38JuAnf8QeHtxgsQmt5LPMU3Z8sbwUAFrX33v8w2fiTghENhgPEDpw6bv325BRuvBsDMRRybiEt",
  "key46": "FAMSWnPpYJGiXuUQSewvSqUfX61Ljym17NxHmTk8EBmD8EytN1XTNrrv1cGZkmpsGcnJruiRBjxDxFqqf8NmiGU",
  "key47": "2EaC3QWMCn1MsE3Jr6q62g51xxqiByx8SqcC6sC5RvrkF8RsPoTD17rwPKCS136DtYdUZpEXt2TJ7eaZoxihTw97",
  "key48": "2WViLQxZYort6q7AnSqiSKCxbx3rZhZMsqmKTykGBFqmebDkAZjNYysoBowJi9wUCgiWj6upAvafHMavmNdnGTmu",
  "key49": "46611ReMXc8BEtMnyCBY3LJSYtjrrh2u1zv4TXCCS7hX5wm2jAppqcYf3stCKFW8F6Vd25MufDGVowxcTd1f8Wph"
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
