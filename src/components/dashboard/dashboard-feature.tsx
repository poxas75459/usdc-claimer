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
    "3qQ5ffchcKBgQGkyxnPnz34eiUU5yeSkqyyjtySoJ264utKh4NBQt6khVUe3fR4t7UZ5DNW5bQQsSWdVianBZFRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53B13TBVc2pRMhQDq64t2StdK4W27JnoX6ZErNg4MHvhy33U4DMxiNrqVC5kC7n4wPkLTuRE7BrnUfy4WZB73jyx",
  "key1": "3FBnqbNibfgNMdQcx2Qm4poznF97nWj7eZtW1diMyT2WT4gBe5Lpfj7GZXJUShL8n7eAoRqNhxnSNPQtipKuFA9p",
  "key2": "3LuUQMXAp7NJBEmfyFUtVcXPL4nU8o4wJzsftoFpeM9g5wmUM23AJpSZpHEZoaUYuyS14BRZ4K45zFoMyAxEfyCL",
  "key3": "5bgS71thSh85Z2qvp4qXr65GMNN8gQFwnnhszeDCbLsxZXNKg5SvzBKN1cYajQqZurHvXPDCzByrH9VzdPzMR6Ss",
  "key4": "4jQ6RRX7TYEWA6dFY3fBC7LXHWaoRkBgmfkdX5E1zkNtBpo9tWPmUrUUMADdgHJVb9cBWjSXE9PihXpu4zkFSpWX",
  "key5": "5ZyyGD63waC2yNCpGBoLGQrT3EU5zsWoiPegSJxxRwXvSJYWQicBSwLMWRAXPGaWfzXsUbPDSUxC6sB9mE8hqeJU",
  "key6": "4W9xcx67v74SF15QkHLBTQSY9nuiyBrZy9fZm1YDzqLRq9ECrTpZH2HSroYnMEx6v6jyZEY3UModGFUC42qjrvy4",
  "key7": "2ep9ECrPgCSnBgumF8HsJRgTVrQ4kog2Csi4UKeu6oVvQgYYGTwVH81g2ZoNjWRmhqgchFKxw2tmgoT5MtFcFbuX",
  "key8": "z4MPbTgKeTFFipWbHH9tmh3mitH2i4jADe7ZyUbw72Zx9Yags3tG8Dgcga5XW5TDQmLvmakwkviMfp261NBT75u",
  "key9": "29nEJ3nkp7XG9TUkcrGcSonN3NqytaToj5ieSuvjnfJrWEfsm8v1LiQmtbqGtecA4zCK3UwCg37yZhXFwZdDQJoi",
  "key10": "4xz4hJRFTz4HywdPvQhX29RCxMnjCJTE3p7KWNgXyGEG51VkFmCntkbKwWiubm714PbYYGVJo2n3sZETXGQxprac",
  "key11": "611JxEjRHUrgh3NDzmGZURa4snmpLFcPorrfGHqWDQnPEX44ecVJsgkRJDkaUcCp3FehdwYYm9fsSXG2KwszXtT1",
  "key12": "2iFecdZoG2gsZgYLtrDRFeX9zRfHtGpobDKger5E1JcmeeakA4qxvrjsMPCUB7h4qRFKSB3a4B9PUSV9WMmcYvrz",
  "key13": "YQptT4GTR2q73QFaVLaBKa13ddrdJx8knCnV7YkBrNo34fieyr5yCqRYoGuTRQz7KEHTmpWuag5YhxiXjZBNrp6",
  "key14": "WbctnzN8QEKHxJKEn5LcWFxHrXLg5NKL8uXCufSuHnLyNx1Qy881iT9D8P3wQ3WfHG43K7EEFm2431gRkQVyDD3",
  "key15": "2bMtscEmjqwRUJsk4F2etdAam3JLsHnyQek1ggtzNMdDsJQDUGcGxDHDNViRfJszoH8pdGBcbGnB651wejbSonpE",
  "key16": "23uzxCavX3eFKCoSibBZBbZZKins3aohumouHEW1jQvs6S7ggnUGtTrkAtWxK5bBDMrEByMe6hZP1ydCjNY8wq8K",
  "key17": "oNAEu2NH7oriTmWYi1wEBjrZz8Nbrv4f3xLkmBQFjR9oxrGYj1Ts9gJfSaDb5VASvxh3Lasx92L1DMq4LCPvA9d",
  "key18": "rqhZwKHp9aLNVURjSExboRa1CYXkqXYWNN7LugadUgf7QLuFZGZZZRdfbe6B61Xac7aCyXLRhUExwH8HjMrZbmv",
  "key19": "4gvyX7XYocdvU3rwq93h5oa8LAVo3ihFooRpdJ6rSTpEZgt7pXD8CoEW5BkSzPA4UvZzMKT28dkApTkABCCMLJtw",
  "key20": "4qJ64yacU29sB8k3dJGLcaSFtssjsx185rHzmQkjmXWm5Cj9Fcor3L1wj34an9UyuJBvLJ66gnv9RrXAGVry5WvU",
  "key21": "3dHYRi7ZZ6RedRFXcRis3XXJ1hrxeM77n7DEGPDYxR8ZN9XPrWDRZQM4dwShjefkJxb2gtGoN1PeafivDYjx6rTd",
  "key22": "25kfwewfdZdvW6VneFvngCSqjkuBru7dQ1QgvE48jrQkyRgrFGDWUppHS7udvhqLS8C7cyV7GeoqsBDXvxPNWiMm",
  "key23": "62SBGm5FPZxaLc1g1nVb6CrgQBGumgewyqccRWrMhGnV8pKbU4xuDYgBQdtAdY9R4uf26ZM1pe57XyQAMXTwtA78",
  "key24": "2uPX1dBdAkc45iG9KrmfPDp7NKci8C8QJfd6wxadsVLEcJRkeR2c1V3PuM7Nw3wwwB5ur82MuEnExe7P5ppWJS2K",
  "key25": "54DxLXRuM4AuAkDNTxaRa8JgXWpYtpvsKUgMiYXE6ShjnaPnSsRHVsyeXkQNp9A9Nzr64aWchnmCAeGnujdwuZYZ",
  "key26": "3pwkcLM9P4g4eNH8nDUqL9WHoKxPcn5mtQuXxmFQUViXb9yxz8uFkB9nuDkKGYoK9DftBBdxiJKbM4Kh1UNdENGt",
  "key27": "4AENmaEjqfhQHWnENoJ73SZacYYWisjRoTbM4JwYMM2AP8JT3sXgNJXijFxTqiZMc8awMMFkns5BZChiWbbM9Efn",
  "key28": "UWcBWWTQF8UjZPJzLcgHk2yBR6bCrSTMuytxSD9Y6necV7ASp6HpQv5XTso8UudeBhGNfsNFKg2vFqD5agCJiJ7",
  "key29": "5XVVB7EjQgWqfnbi3oyVH77SkwdSK4FM62G7H8cG6PWBjetEydzzC8KWkPJan3i1Nu4gbLn9BmH8Ee5zCnmXVUwF",
  "key30": "44jtqs3t4xHReCVogn8WsYxUSWnLLttgKGTzw8E9bn4Tf282ApdKcJ4hYgKkHnxhWUSJeZJCLbq8B7EngP2ZaRKy",
  "key31": "2d7MqxxMLiQhzgaGsVgsHbcNL8KerT8SAq18Fu1iK4G7mKFzwGTRc9wab2JdNMmBUbyAvienDBwbmzYB3iHmCMSZ",
  "key32": "84Z3ZTRujwVY37BKQQi8TGaxLMR5wXEjT5PDAw9cN3r4bdLAfLJx1wSmFh7nYvbJxe8svQyuw6QzRs9QsTrJGS7",
  "key33": "4CoscNyn28gDAF3VUmsgWbKEPizxae3jMxVpxseCscRmbFny7kQ44amyr2tM6dxa2TmxohfviuchScshaGppsTUc",
  "key34": "2SMWGPjNVYtVZVGV7v4DktGEqKb9xTwGcsv1zzRrNKFgdXcm4LNECDSVpXJqimF5PQZ78qHWiWBje7E7y3pYcPqq",
  "key35": "wLXaYNys8cJ6K5Mk1fU5ch91bY8gMbN2t9AwbaRMoi8SCRBgvbi7FcvtB9HhSV7L4hgYetGP8xL7R4PMSJZvcVD",
  "key36": "5t4q4pVKxDEtCQaiMwUr4tuSq4XTAiRFakbpWewSQGpDyMwZDMFHeW6dzJhzFQYvb1ZCBfpTzij2G3W8PPCvwLBT",
  "key37": "7oqShPDG92tmAjKTCoRtSdSG1CWZUVhewJLWhBXBe1WV5zj3UrjX13NW2pd3fFJyjmm159ssz7iFForkGMsebdY",
  "key38": "rbwRJBxdSr5DcNMaQ3gmgnd6DiLmvDqM54VDM9fqS5zjaqvn9jrbA1oYhfx4rJjR71UMAvrZUU132MwnK1MSpSf",
  "key39": "41dLie1RobaNschYeEuiGhxFmXEABZoRevksf6epqz1f32pADqmL6wAbJG8xt4CGmrVBpXdtvHYEpxdVcj5smZAx",
  "key40": "SGLweuS85QZDYYPmQxZFNiSeppu82P8DCrxpeuLMimMMcJmznYQnhK7NTLS9ZioESv6Z7EKdGKBJ7QZpP2xTev1",
  "key41": "44REzz99tJPWc93eySMCST8coqmJFVQriWEmeNDzzKFSJGty1L3CgNMJka9zLS8c4atgu62NV1znbRwCrDeUgvQz",
  "key42": "59RME27iiSuQ7kjmFmyXASsgK3PFYA7SohoAwiBZavcPsRn43BKaffoA5Lzury2wGjAa77v8F9jLPaNDRyUpJXhN",
  "key43": "4Q3nSREVyt6N85U8vuKztMe3K2YhLvWbZPzGz1T6hua7raNmQmjvKjbuZvgkGp3hxG5TNKicRqVXhY76bMA8qeNZ",
  "key44": "56LvskPoPUpXMBRhbYtN2ygUYTejVDA5Fmhu5WXVqHyPPaniBNE4foyFJTWQYRy2ybfGJVVLxp7QumY6R8JQFs2q",
  "key45": "JjReeRNRCCYXaCXiio4qNMSW7hbSWsknq9XrqPiHaTP1CovmcQHvgA32ZX7WNT4gqe3WEZMLDDcCtww3B8Hx4fr",
  "key46": "3gmuHSJDJC1S6Q7Wo7EpEJaHhCF184EWrcReDivZDVfjiCxoXECTw5oSTrfQUawQyKFPxks8woguo94BDWtdmEzr",
  "key47": "2fyEt5evdJfYQo1uBbYkU67B5W8tFa2FP3APQUdDx5SxUA8nqEGAJ5wvnEtF95X95dtvFzksZWJdRmktk6JL4Ehw",
  "key48": "B8g2A8ak7U2v5MiNXSLba4jvPJ5AR4rJBzTnJbgswcBaJcHFoVoNQySYFeJbsScMnazvRT9pgy4fXN2FtkCopJT"
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
