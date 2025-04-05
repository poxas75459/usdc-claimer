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
    "5ZRBd7tKgKM8VS74TNJ45dxksB8GGxRmVhxdGnKEnQrQMqsrwDnHoXtwx8H4k46in86LA5qnwzhwDBESu2VhaPvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYyWRgzMERYvPdVmmqgPvyaMciBE1r9KKx21N9ThfJ5RxAegkMtLVvkmPWHSKPSSv28J4zWdjZhitaVgzSAUq7n",
  "key1": "5psnU8sAkfq3QUWCFMv63ZtrSaGeQ9PWTWDdukuJyphiYPBuMZjqKZWhrnBN9fDNtVtaE4qR85drR53o4ihkSRm7",
  "key2": "2yQJhpj4oFdtK6LuAU7kvbWd4gMhXtDFHA4d4aD2hbmB2t7F5YpUhjk7X4C8vemKE2iPo7PmMLCAV8LwNsPu1YRz",
  "key3": "Me3wbWzneAuGQKr6e96dmL1CXfXgFCub24MyPwBr6m7onp9myw1pamAJqgnWeaA7wJyzgE2kD91w9x84kaVX6Um",
  "key4": "3Rtzo9Yeya3QDVgqh1e4coFTu5PFyjs2RZz6L6jwuJrFkUkBunpQnTMaQ3dMv4vqYDRwN88CDRioDmT3QMLFVu6R",
  "key5": "2YytwVTgSxyyuLzFUjNvNb59Sa2T622Gv5WnUujbVFTPjGnNijUXvVAqAuFGW6bFFxsdPX9CVSxftgFvRrUgZ9AM",
  "key6": "BdJghKKMkkZSnxdDwFBurgUP7cMY2LVJecEwQjxvLzG8iRNJ3jZvhonAq93is1qPQZizSRjh5hejbcTdofRij5c",
  "key7": "5b5Ppj5WPnA5uXFF8vF4rL7qzoCGxN4CxBZXmRS9AuTkYTyBDUNQKX7LzDyBTGcyeezVXVbt44jb2okmxxiykwAs",
  "key8": "3cokGx9mCXzUKChYnAVtrB8Fjmvhq8roQAyqedWPmMMESys7EHw1wQFtexdvHRmC5iffPhKc2wdnKzwavH8WjgN1",
  "key9": "4tWMkFCKwjnbyAGLDjQjvPLQhRK4rxN1NxheqpMrxs6HFbiD1ouxhzYTN4vD88M2TKwK2RE29UXJN8tr6knkWFo8",
  "key10": "2QGUbAC8Nbd6hcMx2Z37HyDXetJrQMrvija2YfjzEtQWJwtwjQqhZg7i2CbvUfmKjtevRWSehuMYC99PtzyFV4m1",
  "key11": "4Mqqu6YM1CVs1J7kMtgXG5F8MP12T9LDNn9Rgh7XGyXjHqP5ZvAqLuyJDaaN9XEXHgtUSRqxvhdu7MHJ2FcbPiDS",
  "key12": "46CTMxZibBPg33FSPJZsf3DHNbuPQGMzsfYBRSMqMB6L5qWAQ9QYWKRoyJiUypuGdgdGHUCiNyvR58r9wnSsDfd5",
  "key13": "2cKCUfj33abE2za4KqxRN8BHbDuXkzNuLw8AcU95vZTSYg7ZjZcrSdXjg3SdHnBo18kJjMvmwVk8iZbpWJmbU7qV",
  "key14": "5z8DvyfMZPNohTDanqMZvkUNYfYuH3rY7u3opBmAatyg5ZvkczBwBT9FzQZqA9UGoadX9aYUVAXSV59jkYMDgGVs",
  "key15": "2tznZnVpyXMXtXR5K9FMTGEtgpaVjTMT3WUHGGV62SFrCNAXHikUfco85AmYeMBayty2DT7h4k17bXLJdftHGVik",
  "key16": "3avPAEYwDDYv8K2GhN5qaAwuQgnfEtcn1zUigogeAxDs7KTbf4aHL41wL6nTdeMkbYDhEMbuT2MFHc12vzxsYwpN",
  "key17": "4sfgKBqJs2TxPFrvzJ8YSEXFtr8uAxRow2qbRE1Zgp1oE9zvM7bCSk5EKPwivBYw9ob56u6v4wCQjADMc8dGoEcw",
  "key18": "4W1kT4uVgL6wvqSN5GvH5Fgsk7xWFD1yxe7sE5BgsKKskci4K2hB7ge5S4m5TcvDU3Y9oDqTUDHQjBWkmnxFUcxT",
  "key19": "5gzabnGVbCpSGfMYEG8oqfxuDoaCiLmSVohLbQb9t3JNyv7wgNjb4hPfV6KXHRCHJtpueTTtN8YZZHUxie3k1ojz",
  "key20": "Enw2k5MLDV11Zi9t3YWvjc3kFaEjPCSRbTsPxoRCoCWy1GhbV9zwNUZ5e9JUsx1jW34V8N9TPvLMwRhZXgaEXG5",
  "key21": "2TBDRgnoJqDdimisdeDsPcrrqpMPZyQP3uCh6NfZcLZoMBP86xh8G3M22N4VPpQEL8MB52javVKtHaYPqAq4cx7Z",
  "key22": "2whAGYZsbvNCSwiSmHySaMFhLjov59Z5N3Yf5UdYSwNfsH1t4hTuYsPCZkHhS72MRBSDuFZDqooy9XkHBs3eYanh",
  "key23": "5FTZqg6w8JnbTbGgsEK1KJFpodHKnUKqCc5iCduJascpGRwRxTktip7G6GiY2fvvbvRfNHie8u9N61YLhYjEE8hq",
  "key24": "4ungxK8d5joRZiFysn251uA7BFpmBfhei7Mt37DWvKK8z695fub6PNwQZWdDvjbttaRp5knrz1bWBdi7RRdgqQae",
  "key25": "rd9oauaBWF9kkRG19tb7dg4hxNpyR4RtR8pXikfAqUy6bfQBsLp9sbvhECJG7z7RNJuSVeTesaiMv42cKUSr2xG",
  "key26": "5DBFoSrhqkeNdoCqEdmctZA5Ahbsiv4mag2rcNyh2Rx81P8rA8zj8BmRmts6sghCXUS33Lgxeba61SuijGrj6X3p",
  "key27": "3KVWzXSQouJrMWWuoJ3RjXpsEzQJEARv5C2ec4evVXBAmPni69v5x1XXP43f1bhKE3SywNkvQ1dm4MGCjHbmf1Bh",
  "key28": "2zchPYv9m3bWR5R9C4bL5BfTZkmpAhvdDCBae3HAx8JRuiWADQGQNXkdctHEu2eb5qc1uYWaBynUohUvT7HBWyjn",
  "key29": "2tbmtBBs1tW7tMPsBV62jKxS9Ye2TW2cynTsHSb7MfKetQSr1tBAYxi7mdWYRj94yHxfWyME2XcVp9PvwNWraGy6",
  "key30": "5LzkGF8WWnyZTRrkYbameaf5htZhV9HftuJG6f2yGPW9UttdetALEaG1nU2XZ9A1t78vJSLvZNjDS4ZNAiXbv5dZ",
  "key31": "3YXx4HPsfVBQxzdvC37KuHTV8zhTuGYAXCyZjxBUyJTtdiUHRsbJrrXARkHzaaQqY6WnRd8maNRe3aenaAxpeq7f",
  "key32": "3fkocBzUD5trbEuL9yd7xxEBDKcY1DJSjKuZk6EkoSqZpo54ZWDm7zwEBPgCnsZ1Zag5KDbuwPH2LDSkAne3L6Ua",
  "key33": "3vyo6jpyUX4t2VLjvRuRQUTujY8EdAZAacQCA8cq3k6myMpsfAhhm9JqVYrdrBnvJ1HCmUiMzda9AL143hMkkHT8",
  "key34": "5FFigYp2YofHsmkVxmH3ACEPe9tAZ6WuTAhNAgq6JasGrqV78hWkAct3BWgdRj4nrptuTMQaKLCLHaSg7xbGBm81",
  "key35": "zy3Vg4hX1AwGLhApWqAoUmhn6WC3ioDgRhs4W6KxrMeTXi8mKZb6JupQpGC4dA3WwXfDEKHmpSaeajaRAN7q4aP",
  "key36": "4iMZthts8e8mSTkEvNnfF6c7PpsAY16fX9QwqateJv7yjbyLi87jpuG9YNjh8K1DB36iFGPnF9C7CzVvdP5uZB6z",
  "key37": "4j2bJRP6VQeSZQK6jcr348r4eoAaKWmyQ4uXhnDmja5pD7USHA7hE8HnadLZtGiZCynfY6kjwDtjg48d2muhaWdK",
  "key38": "2haKXwYbSZumJoVGFhFtNA1dUNBWwyQgnoNFeqWNoCDXsUWGvDcDsyrJtR7xZeyaQ9jrTufnjr4RG6gNYzpSKiGv",
  "key39": "3GKGZ2FFNFLLYtNKwyUuebZ32uKccnGy21A7SaiMJQAA93JHKbkjj6Xt9J7pNBkaXPXsJna3cZYHZMKF89YCaTG1",
  "key40": "32Ju5SgTHtnQkrHxkwQU7RAn2UvmmRkqFD52h6mQpCeHrDqk1J5cwGPa5Q1XPnimUx5kv9yALJzY8qnj26AV4PKF",
  "key41": "2V4ErERmCm5bakyZ4LJM1aoMinidMiuwbWN1jccpEv7rgXy3PpbJPJiKvtewP2bn73AJP7G6TzcVxf3j9oQNyPC3",
  "key42": "5GpS6GyeYWNMz6qWEg8Edj6FyFtQWbewwRxTZ6NnyFUtMR3zpdaixojAyf4aGvm6y81m1pBga1yQen3swwuB2a36",
  "key43": "3yaWwoHM9yCJYs48BHEEY5dDir7eaqXQRU1QYkdsqPkeajmAqjbyaMuib6xt38Yy7H6ovHxyFBWcfQeHT5BZThEq",
  "key44": "9d2F1sN8SDAZ9f99aykW37ffgqdn9utKajHi7CHWcTgNyzxDe19qAsqA7Y1D75GGbrbbjkAoTjQxgdFZKxUx8bt",
  "key45": "4ZA2LuDRRMFfGnJ5M6rHvXBEWDiy8bBc2wLfFnQmvGg4sPNvzdECXKsRn1JBud8W9skggbuibwySuj2AWMFaA63B"
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
