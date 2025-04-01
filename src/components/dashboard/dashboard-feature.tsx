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
    "2gmcmXRa4451c9TH8SErGnsEDm5p2FAWNzAtvFwzoW6hYkJsTipe7BuU2DAJq1DhkcYGH9ynYmqnq9zgF54ypuem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJmLzof3zGebJc49nJuResYbhifA6waKr8v1JCp8TwUxnBqgqT7kN1GVDyWig49H8R6GYcNvhVBswLSji9YSbqK",
  "key1": "3EoC5LHeAX2grh6m666BXBrfY7koAE1W8HzP8382a2RW39yBkLTrYQFZBouZNNBbThcxxJz6hbjxG3BKVK7pPsvr",
  "key2": "23TRinPCC1xAJmkGXuGFbyhUwLDYaLxA3fjyEjfLrt22rHgtfSeorknNe8no2vhW7FbQYG8xyZJpoq3mT65ivyHT",
  "key3": "5Umsx6JXTFG4ijX29pDUsBHsKgKCnPX9EJJJyP8yGPcXpQK5YGqtfiMUn3hUqLacUrHK7WRREr92tYdxZGZZjEqg",
  "key4": "5W7nPRk7F94S2U9h2JhYwJpveYiXB5TjyNck9XQ3fgBQbrrEA6tGsUL1oXBKtNe3Zyh4N1oSq4MSPGNiRSBpJ4ev",
  "key5": "4ktZiLgspTR4xyF71ED3XDUpNtGCWogRujb8hhmtKNczgC8rqC5nVofEbkTAfGLVddGVA4cCc6uosiFGcXooWAH4",
  "key6": "5cU2M9gRa22Bjae5yFcPKJ5bLsStpQLYbxmrh3nbQNXwgudjGxpvCxgdkJuTjsFLmxP46HpyzrzCcvDHSHr9gexu",
  "key7": "4kuE9MXRKJCfFFJNcPiMQXU5dPfiX54VdfTdnQeWBAMCY15AHAL3mcLva7Vq7hPZhDsmsSRGzFd3fv7oVqcYjra5",
  "key8": "3grBMxVDVM7qsWZKMVsqZZNLTuF41ruT9g3xFAS846i8ikqvyh16Wedpbj9vyMzDBK2BW1R3GNdFGtJetfABgNgj",
  "key9": "63osJArx1VsMtKsjBuNBA3TsQTSxEzkEvoWZZyoPciAawTivP7wAsY3eXqE4YMRXcLN5L6haZx9UJxZsdv1XEmC3",
  "key10": "3EGjrMWxiM6M8krdHxEJz2AcbzvW61FudB2hB4eFxNAv1QhDS6f4W5Y5xDrifpCiP8GRj7ed7YG6yKpTcTPWg6FN",
  "key11": "3f4U416hL4vTL7arJC4tzWAorAsssBRVDNirQmD5S6hFPJYjEpvFQcBY55fzLSSV9PrQDtDGcJm52Y8jUxWsw3a2",
  "key12": "5BYYh5CtmytvUus7CLEckHJCtFTUYuZsyp7pVjx8xGjgnnJSDou8jWDHLmukiHQJdDMXRB2tCga6sy78WbXDZiik",
  "key13": "35K7JB1yMHYCdKAZekUzudWzBqovARnPACsoA8kLwv7vzju9vZyP7SUJcZJN78L5uB8hSb8tJdPB5XQZutmjsYvd",
  "key14": "5HhB9uvQSUk36HQDJK8UCAC6Db3qsV3Qme486L7TauqhcjzEXxaddjaNJgokssfb18cSKibqzs1LM1S4XKGaD5pL",
  "key15": "A3AphNNt6hM4x46z32Pvvv16EJYdTH4bEzVriyr9uLkCgbzZCS4RPiaz3aZ7Lc8XJKZCkDtK9fcui4TX5okhpjd",
  "key16": "5FWnACKvuBgWsnzyaiih5Q2WB2exjsFMDifpB7jz1wCugDZfJTwtpGz8q5AL81sBTjMraDFZhg7r37Nswoy6DjTd",
  "key17": "5HGUU4dFyTodVhfLCvY3U24BJoHgJVxQdCjWoHrQcsfVSrUBNaBrEnKb6GVWKgSNC9i9WujTVCyvcNHTFJnDsE9u",
  "key18": "4btqUtM7CeKjGXnqDP1qQ69aeWcDDqjyZbevTJ2k4wvrys6J2xK149wNhaeGs5YryUYnWupwQzwTjuo6hHqEasgM",
  "key19": "5hnE9oCT7ByjYLmxDJfj6UFknzZU9A4VkXrDks3DvZsZdKgQJiwNycJMrbf2A8c8CgBdrCTfq1hBa6sbmbnTfHXt",
  "key20": "mVtNtz7txFfrsAThG3jaBMhtkMBCAb8hyJVTFUXArtpzu3KZhoZWdwKbY2TNH2JtwgWZuB6V8raWkdRmgnvvWVG",
  "key21": "4BAFVtM8wrs7wyNVsDKRUACm5CVSm3S1z3kaJC7fEYc8md6mBUfefBH5E1ZLk9PDhS9AjqGcCJsTCVXA5f8TLAgj",
  "key22": "4t1o37yj3r7cQ2Y1ud5XC4vG4WFPdBzRU8QC98F1UUsJ3sAXvxTTqcnPsLuek45JPtC8vH3BYTVKShesqXzzqdMM",
  "key23": "39iipMvbpks5euvznEuLaCyUwJUk7T8M4uqgF87HokK4dc7ECnHST1gCBwpGA1qnKbQV8pFH8TJKjzafVWqb55JF",
  "key24": "5Gxho9Xnkzq2R1EZBEA7Lm165fckpyrT845MxwwxKKpnDw1BhebKMz4nPxojypPKVzp9vD5et9iTRtWh1NxGBdPP",
  "key25": "2VPCJUztQRVopgwLuTNzr8CjuhuV6D7gQUppiQfbwRSaEivDHegL2M8YqfVJmV2NCM1H7mUpB3NSkCE2nSf5SEMq",
  "key26": "2MNtq8Ct6nUEk2HM5pic37UUpKqbbskJr47NY4XkkGEoWvjxgFUZe4cC4dVuz6geroxHCVw96pGA2n1yhtRf76yx",
  "key27": "4n4LVBnG1vD4Y75A1gEgxwuAKqwT569GQsdfzYDN73HWwnMGJx8kAUSWTWik3qsoscvCaQmuua3TzneC4MQbE9Km",
  "key28": "2YbWqHku1JKLJCPvy6zn18WoLvY6Q33RcR9WA5wUkdiWskecDNdFnNzGsLaP92P1gx763Fs2raZ4VWDjYroGrBbv",
  "key29": "5zbVQGiKaaAUgk6Kj3Ti2P4UC9gGDGw5VpyN8FxneYcm8k2cYHDY5DMLu8i2RxxBENN7a2nZrJt5ZMFcrnA2PMev",
  "key30": "5i82khpiWy9iyU7rkEpksbChTskRMx2nkrok5WBMH4PvdYjkRYyWaVZUkxub4WgewLjwtUGL1LsnzHx2uiwdxeNw",
  "key31": "ue3j73BbuRKFmCxSSeoMCotBWA7ff6UvQQAWtD7y4XaTWDBtx89wMu3D8xemNKwNkW5VE4cHBfC9YsqtrYecRDe",
  "key32": "5Y8KcnAeLuQQNBpEuHyZcdKFHC164oveQ1kdEiGg3RydLVPN6ewqyKPemoYbkrUDEaFcfUfNiejhdKhJpXqmdP8K",
  "key33": "HPtmo5ChUWKNjS7AsBk8PneVdUyJt76X59WJQREHFHmSvW3DUBMngXWiuSQkTLNcgxJXhaTfRNVGvkJkF9qtbqQ",
  "key34": "2bTiWZR4E9fRkocnBh8hfQMJtPMjrC3S6zCsbCZCg7JwuRVU88aco76uswsrmuVXpJVwSE9wZU7E6uoHyh9VJKWr",
  "key35": "3QmzEw8NPtxLwkLdxTia8JNM6Z3b8WqhHrsupSpEUz5Fiy4Pq4wb4wkTSDQwMrVTvM6k7VDGDE31ADE2wLyJDy53",
  "key36": "uRiqhThN9AkhvTYfhyZY7gaTQNGacdmF2wdo14efzHQQeoCcBVzXwe8A5gSLPrKhhDF5SKp4suqotwrF5SSbw9Q",
  "key37": "3x8kcBsYo6yZQvuCoxmCKWsTFwVYnB76FdS1NdSX9s3mDf2pCkwn2RrTgnaaPjR54sPaK9BQ1cP69Y7pZXpttZUH",
  "key38": "Ya6QHhkkJxHyGXU3jzKKqZMi9Y7L4HXdeDXgaJr15RopyRv7Fq4ef4eJV6Gh6gHkUqikMaoXPkVxuCP9Fzcos3T",
  "key39": "34UimmNco48CUB4McDfC1ij1n9YMLTLBwMC4D9FKDoxBzKfCjPpdGoZa64XkLLuDgtj2UzShfCKtHp4w18Nahc2v",
  "key40": "C4biYWvvYFHdFtnpL4BMibs5cKPeSzbGWtBq6ZQEJSat6Jxt9KMMK5PRqn6qNUQZhfXrYgsuAuYffhNWeBh1h8J",
  "key41": "qGLuM8ausNfvdUjQAgBpK4rP5E1ciYFxYKZv8HjVN7Xsh4yh79emTFmB9DEBKz7CUT8apnxHKmLxi6FW3KSR7ot",
  "key42": "3PWVA4wx5aMotnJvtEsNTEKJAyY7q8hN6tDV5njHTxCSeiJ89aGgiXhynCmtjhJRrDjy9zCV5kZvnUyyV72CCwQe",
  "key43": "2BSj6jyNgmh4erEgx12BX84aqZw3ZWHQmAzAkxrJNLsUwniSPMARJkwjAeneJsqARzgnHq9XN42vB8CdWLdwGnWy",
  "key44": "4EdmvcAZ9xaX7a2nkzLxLa9e5hPMjfLtWZYKx1gUXZLemb9ZFBjjavETRrNDjw5Q6hCiJ1b2gKt1bke5KUQG9JCz",
  "key45": "37u678Yv6Ccgk7XWyKepZdT4fxhVUPGRkGg3EMHeMbS3Cti6Bt1FdsJBsn62XiNpdyWaXfn15pZhXChXphXgZKr9",
  "key46": "3AhbAKWmrzMSBq1i2cf8B1HXELczCj3UEUHRhhMbF6pEP91BvHkQ1fUbqSaP3ZmFUTKVLXAFehZ11eReHpeLUtgq",
  "key47": "4qY345ihvuzhQkRWyoiKTgQCgUqEtDSQoVANZ3EXcEYRJ4i1wLKcyNV84hiQL1MjPeQZ1TDL3iXA9cfKCqqnvcuo"
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
