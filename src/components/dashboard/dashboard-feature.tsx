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
    "3JKDw9aoWkyCGGr8kSxC5erZByjWDdsK62V8dPmxYmUUqdRodyed4ZwWEikhzNatXgMpeEsXj1ij6qDdKQXokcQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMLk7g1qtV9E6xVksk2eKBt1jwCKci9Y6KHdoUtg4Xi9H7MvDHAfvC6qizgdgqgEHv6ZAKjqH3H35c3VBNVCrEk",
  "key1": "5PkSuANVnodphZXEmotXbWqTcNGaWMnrwvckwZKYUHzcdgcg2tom7gTKH2Jedu4GV4d2Kem6rdHythtN7k95zCwL",
  "key2": "4GJjucjMEPHzP7Kqo3pN8oLqn8KQbCceNMGLUcTayz316bBV4jgnGbPJY1Dm41Pse9LSUwTbun2NSvxhiGuqHiPe",
  "key3": "newBJTkkgNoAo1q43bAfo81heo2Dy5w6r7LE5xQurLFnKG3RnLdLZLghRhZpFhPu7eqLSWgAr3mXcmJB6xhQFev",
  "key4": "qWAEstWviLTifNsUUMHJrBbiznGDrAQjZo4oCpp15hVE7u6ZnW7abcYRwNCMxhASF1zXWcjzCWfWqCfL7TUM8yL",
  "key5": "5zaJqixcBop5Ue2Kcs3TiAXZS2sBknvnSbddYqB2KLY1q7BSzwUUMW2gmnTwo8fHpjsFyRHcqmny36o8TvBY2knC",
  "key6": "3aae6dywFv2Mk9Dua1R869dREJsyT9u5rqkYohb3hQPQxW1spK7ZHgBj3WY3Zpy13aEBEAfd72ZvDAvjB1pHmCMP",
  "key7": "4FSBvFXaK5QTD8KCzVrhN5pUiHUZiWK7kswGMUG6ooFjauyec1iBpiNjxLqk5yafGpwDC1k2QtfxfFH1PXLCaaiB",
  "key8": "4NQLWnqANU6DJ4RCgZSEHd8hJPa8LsUDhcLnakd2h4ET79BYfV9BWzVRrJMMYWZ3tSwqVQGo9482AcpMpRx4xkba",
  "key9": "CCkvTvbL69krKCX3yPapjnKp1c5nugUuZtgUhiehVnspBdHzf6Yu2DN7SWrTmuwvVht6XgYxFcLbALH6qb9f2NM",
  "key10": "22TiDFmapyjmfpb64aHyC7vrCji1E2UmPdrBPhfCcakJR49CtrTyyHcPVpkSKfjKPPjuqcTxJDzEruq3X9up19sz",
  "key11": "61B1boDb7xsHr8UgHknQvCHqQiyov1x13agQej1RHbqorqJx1pq1UkJUXvZbREY1faKEzxUF255xGkQQXzYUhehk",
  "key12": "eGbQ1pJFNHFJxbYU6FPL8nioq2mSBAPQSFB2MtdamQrskLHeTcx4KGF1x2oLKePasHzoaseUrFmgznRD72oTDRf",
  "key13": "3qaFyVMmFW81eTr4JiaqJ74yvZgBPn4e5xvSQLAPq4NsA4YcALyTWNxaDyxTxdRwXspJFgefavFaHeCDNfXgdwuU",
  "key14": "28eeQ4EK6rrYLKP3Uj1TgLmdd7Pb9vNq7FeShxnW7b4dEeToCCR3iaEPpRwUTgwnGrJpwj68urV7wQQiicr7mrAZ",
  "key15": "XZP4S8e5iUuPLxtRZet4S5EFFvfPjucm9rkewchqVkcBP6dY5w4JRostcdz3nVi1idJTPPjhfmb3k7osamdZuTr",
  "key16": "MAsveWYswQ9ouu8TBvBrLyphvqASGcWiKgVKu4YBhMprrnVjv91hiz584bCf42fCqsmFHvjSWsgKQC8P5AScjWv",
  "key17": "2CTTevV2BJQ89uHDjJYPmRFKmRMtiZnbpjtdqAzUdPvd8F3uBKXFzseffHJ1ZbTBQNgYm3Dv4PHMBW6wRdGQCYr2",
  "key18": "4aYfzLFPLcBTiJDfMJYhjjaMnKw7isvBAEzKhnQczMWjrm8uAWER2cwrVpUys66NTXLvuTnvvB4bNPKP9t9J1KJw",
  "key19": "STBoviL1guUJy4L93tCzh2XxN71vmHdwT7Vymc8vr5jK8n2oVhDXuTEh2KGwcAPJwFwABDSPLDv5dt4uxFk6Kjy",
  "key20": "3VQFbU6ywJEjHtA5jtdQag8SUTVBqnrrVk6w8YMFkVXH4dReAQQWBNL4LyMKR94d4wrCnXDABcFkCur5pe5jH7V2",
  "key21": "3EBkgNdz6SzwSwiU9NYnkHSThZSp5bkDgBy1uNrGTj334F27BLP9Y1BVP3jYFRZzSkN12X825JzyHxEBs3n8kVcD",
  "key22": "4eqitX8RQV55tJ6Z5DuvwBV13dhBqkXTUqiRE55JSBZkdJtFcQqKpwHAd1xVTgwTvHBtUvTKcduYUP2y3K2D8K4u",
  "key23": "2mi3kuVGTFfoQuertT3qkuuBJ12d8fp5GpTepVu6JBZjXvrh3gMCWtEVJT41Wo8RwnvvzpZtAEkh8dviBtFtdqxi",
  "key24": "rRa3pW3WJcd3P8pRXiypKa1eHV9ebJ6JAzniTzq7FFPMTUCxmZ2JqdsZ7jxNLuVC2AHxu9q3b5KQ4JAshEPVDqt",
  "key25": "4oEZhh5H52Y1ngANazxF8uE4zHaJ59HGewjdSP5rEPrvfpDFgWFq28zW8mkfu5EgZ3i17iB2vT7Utk1T9kqsvaoP",
  "key26": "51Lg8oTmZhXQkAUjqeKGQa2ijVj9sLFCvgmZm89oLbomJsDMAiSS2CQq2YD3ddmK8bVdCA8caa8Hhxg5cMQwaCsn",
  "key27": "Y4hELvMWnfNLNxuoKT4qAD4Evw4FhxKuoRkFhCCCvCz23xrFEGHztmQ8YBrmYXzywZGUACTanzVPvjNJaGLtt8h",
  "key28": "4PSkTqz6B71RkR2aVtH1ZzVSoJwwAjqhGFjhK7uHUCJb9ABdv6SYWgT1niu5ACfu1vtTEZ9hWhpsEvPJARqMtgVf",
  "key29": "3Um7YazwK2Bs5D4jdM9SAzohnnhsqFDL82Pe83A25XeqFFaU85S95QhYEiKvV41PHr9dRKekiv1wMrMfYu45SEJH",
  "key30": "2jJnizjhqLG8BVrLqQ36vdFGQmxoAKZTCHpx8Suduks3YRPr1bGmK5xybMHkUuywAHFFpnzjLUvPPS53nfMwBGg2",
  "key31": "3bYqx8SQDzJX893hQX1NUam7RJqAMgzNPLkQkakeEgcHykvZZqeaSohr5bMAJM3URXuKgZHT9R8L3HzwQ8E3uA88",
  "key32": "ubrZmdsNiiqotEmNuPe1foimnkDEojaQ9FN67Yp8V5aibVNV6eTZbKxd3G3NhGnHvjum83FoquQsWSSB3zeFNJ6",
  "key33": "4HVrY5nR3fuFNVYascKmHW4CkGmNkJwW9gHJ776Ykk62sqnbUGQxSFdXpfwrzzr4s3qtQTeeipDvwKFjammLobzn",
  "key34": "3gTMQWhc1WNPThbR2zdGF38cfH4aMwRHj3mGCGV3qjJoxQJuhKK337KXyuJ5C4c6FSsEvyv1Y1iD4FQmv3UtXbUM",
  "key35": "4pq4kKX5Nc5TkgenHkbSjpJkAb2EVrVEWXoT5FTXn5urVfphsLDzfVqVu1NzJ1kKtct1DrrmA4gG4unvvXtazb5",
  "key36": "5up2ffyWRS5zX4cFz4gjHZi8AoEPcqzDMWVLU48uiFUyWQKqUgqcBzXUZGgCifXuGDhiJi5DUMRjywGDYacy8tu4",
  "key37": "2uYfzohL6Az3QhJF7FVoWVBSthVgifAnzRy3UeFW8KuSz7WjZrdgGcBDdADdrqrX5DCTw7Neh8dnaA1RF2qUeB6H",
  "key38": "28ZHXS99t5AHGDojdS7HyJYLjwUPVW9n1Uw1wsY6R9xddg28xK5mbrZNJ3UkZXNTcCHPD42QZGCP5MrU2HHcLMgf",
  "key39": "CmTr17bj2NB4T3H9cfquTXzzWcjYFfsMnhvobKjPC1z38HL2cQytfcCm7qxKpBCxhkxBXt267XGbo4jdkVumJJq"
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
