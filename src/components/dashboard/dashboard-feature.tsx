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
    "TRcovWJzstoxiuHwDTAs9PYRxdBD6p6B9ryt5C4NCA52ofQp164sZLANyxfK3d5EgyQUchF1eYayXeEEu7FNR2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQtJPbqgxBXYoLLDwZbVzdG2tgHMUeV6pR1C7bJBcundVWgCXygD7e3r13dXyUB15pvwmst8dQ5sKMGwUJagdQC",
  "key1": "61JiQ6KMroaup9qR9Z1HzL8yHgeRKfwBMaUzwJxfXPbcT1mT5gYtjhKNicXRJ774wBN5rd74CECKfYTWvKafXfjN",
  "key2": "4nJ193xVgae2RVMK2SkHx8WJpzxXtkPbwvHi83UNzd3fzUY8nQgZiyZmP184VvPVFFWBcf2g8Qs1qE5EhHdGrUki",
  "key3": "ZF28LHfZMrVwj3mRLrqnWW3Xu9vC9BAdDHKo6cSZdWT6B51PTRgBa56BWatKkzdC1qLDnusw8q4GiR1DXyqqgeb",
  "key4": "5tZc8ztuvhUmkJjEUMTaYv6T2GugryujomWoztnzZPuxNarwVwnhFxzRQxYsvNabNXse71PL5menFwNZRu3Nj18D",
  "key5": "5zTgbtStD4Mg4cYktWDRohKQxFL59UGMFe9vjiGZJftDJbUeAaRHCGEgQgXjnLyr415JBB8mAveM1m4Dio66RukH",
  "key6": "KRMaFut4NXUbSc7vqD2Y6m3ANwQZHrztRpB1usLtsLnVqYFuii3qc1yVL3xcfc7fYhPbgwDAe8iebioYj8hB7MH",
  "key7": "3jWh1YN1nxmbFwXCtKWTysspFJXuJNKqxysAq6dLUnnLP5zo5ChjDoY8sD3yc6G2wrnd36yg4pUVH433jRTVbvJU",
  "key8": "3VFitYpzihhJ5iALhd1zx91Vmgj7wtARnqMw4xQ9XPfLMwTPAPxBFhNHLmUK9ofSspZipyAGGQ5C8Nqd8oC9rowA",
  "key9": "2PXBVinkog7XBMuKP74X6muMnb8xWyfNkQiZ6DhogpunmXECXdda1dbzkUQDzHn8J8tjmSpfstyCBx6QHy5J2e1T",
  "key10": "3t5dKgMkaLv68xG3k8bDLHxU3RwKW63WQEiWE64ubmEnoeYSHefLijEzVivHuB17tgULCqwvmi1k6XodMmiub1uy",
  "key11": "2WRmFpxpgDkuaJrjDh2QWV9dDXRhkwAYvfdS8m1gtt2QhZsMAisTaGLHkQu1paSgv9dMaWzYKWroMNxGRAUmQrYo",
  "key12": "66RrgSDtzSnBvyqZiHa3x17faTL8RoeFrTxkBHKzHzBDMrDLwaU1xLYRT3YQ4pvL6wBxXn9SwFCs4CyKR9grfr3R",
  "key13": "3ndtASS8nEcoBsFNs1x6qCpKkaiL7LPR9wqaSmwk93oFVnYZiCCTXj8UsexB5twEZrsxi3nTpLSyAUY41W55H1ke",
  "key14": "4gL5yF3gAGLkFL6w7oPEzims36A1PGRkTe9sLhCma3fQZq5AJTKuPSiqUuqPbh9NF57AnFgwYPZ4ybUQeh29hLwZ",
  "key15": "HxeksgpSr46Wuietm6uA6CMGrDUUaFrencERbo43QqRFFHDQ5AVZPoHHMDy3qbr9q57aK8DpvkGhLUqNzJtSKaM",
  "key16": "rCdme8ZaAvkZLJTvif7f8GvTuFa75rBU199b4hnhNBDxnajCDPsyGxGgPojNR9REhXnNj9cTEbMJTSxfM7mkULt",
  "key17": "3DJLB7vBDdCNfee4PuTLQrJXJmhfWGzU4hDGJ6Ki7evrYHv414SQY1FhhY9Coyz2maQYn7zyM9J6MgKYA1B4ouM7",
  "key18": "65xpDeU9MvnjKaTozMSmX3Pk5geFLj7MYoiNiQbqoq2Fz1VWBcznR31KgB5dPSr4F7BoAkihWo9N35pjckxM1pBj",
  "key19": "3J9JgSvCXsiE7mPsgsfwF2372wLQPouSsp2iZBcxAhSkV3y8oEGd7DtgMhp6eVk9KMUCQTHVjnAKQ5KUnXJJXQLW",
  "key20": "5eebZmoLZuUfTkJkzuLPKPPn25TSc8hBvjUK7CXmLdbx2CEGiStkv7Y9YeKuRvKt5P14cyRgWnEht4D2HGp7U8j5",
  "key21": "5AsnQkDkwBuPH2Fhf5FFHnsPGAQhc3oYK4eqK7KLgGzgWYewoLyBxmYvuETk2Q2zs9qESbM7Zg3Et9gkJbVDjEsP",
  "key22": "4m3yMroS36jULiZ9sEbc3zeNVBpK2QQSJEv6sUesyawpRX9PYJojpsfG8zMbJFVtSrsofupoaq5e2hwN64i9fg4D",
  "key23": "3K88TNDCmMfYDexcqaqTDVH1BKJW1V9RTMpZKk2Vd9Pfy18foQHbbTsAjT7oUs4tj19R78eh9jGr8r1obiRnh4YU",
  "key24": "3v63Y7m3eUQVTmJ1iENsAAhENBqHoe7Xn5VwTMMXXyqsGbwNLgsTWRvyeMiriACnBATx5r9crSBLcD8MXnWnFysQ",
  "key25": "bzM95X9Gjrurj28copPF2jejZW1Gdao8KpuQAyPyVof8ptugGTA6G9oq4DKX95jAHgw4dkg9p67poepg1LkPzH2",
  "key26": "2qU17i6NYPNuQnjRDWAmnzZrmixuB2zZPJSmj5VcUg3KqqnKr5NK7X7D251VSbFaAUTTRd8gAKbHC8g9tQDcrcKj",
  "key27": "4KZ2rdm5Pq9XiekUtMcnSS3fD1Ve9pnmXrf5jFiMpeoBLWV5rsJacYr9z8NVhPuqvrZxwj33GNzvTBWPDZvnGqdD",
  "key28": "5nmov8C7TFEQkCk3B4ZTABcygVX3DTj5eDH8aUqN6dXDZ7wq4o4FG5HFXj3oM9hWQjFpoTxvFkDyYNkpsqcSzkNx",
  "key29": "im1UYgGkShFuak9tuoUZec2YpNrCax8DLQ9Ny5cUk7GXCTEoXztyESfc9t4oz5eSHbSzL3NSrxuz5n4BspC44ia",
  "key30": "FgXkuhqhNc7Vm8rrSBor9DBDveGtUi26SapsaYKfaef8sFoZqFM5YbmLz4ZaEfy5tumVHDfRtJ6hysbYwkgQQE5",
  "key31": "5QGKghxN6fS2DvuC7x54opTpWPCfVCWqrVoifY2msSdMERdNPAd9AJCXzWFZoHm64yT7MqDXKunXb3AqTbhkfjJf",
  "key32": "eAVsiGpqMYkxNBMJvErrG4wHb7LETEudC1XmV6h9A3P2hyr8KUoSbyvGQpYiqXQGHzn4YbD7oNbU52Dgk8GJjKd",
  "key33": "3NbYNshX2G7YHe2NE8Wj8YvtrESo4MUHNe2h61Q4TbYzHxALaRvRYtSw9pQNCkS5mYBWiAyroJT3Uiy4c5xpVwHS",
  "key34": "Fag5EWEXysoKtWhHmB4DoEoYr5fJQf1thVVbrXUFELefuKBiR9VmUWbfuUyrqBBEVtWmB3KRqBt3jZH79FQwTYf",
  "key35": "2BAuJzqc7UUh21tzjMiY2yGrRXzdPjLVy3G9dvUqGU8YGnwVGRvPSRgVYMXRQmCxapGhudMUQrJMrrHb5tuapN5i",
  "key36": "nTpzumMhtCHgUGVf1SLW8aL58wpWdwWnrd1DK2F8fmMg6NCdvkKudLCzAFs1KhHmTyH8oi4itVKpmiQSMxzEfTE",
  "key37": "4Hvx39D6k26pNUyD4cPpGrU1xJFuLTutNJZfg7G4eB2eQ51zuTYo2MF1BfhhyJyNfXnp7Gs4a3nPYpCVGbo1xaii",
  "key38": "KApVeRzQVTdEN6QP2ZhU8XWDGsHwqzX7MME1bAibUahD1yW8ubjygkfkT296B9pKDApoQTE35JYvwzM6t7BwiZb",
  "key39": "4DvaFEHUR4zissUGUx1ixJo5wzAyLkNPpvwqw3gWPpLMmkCECsd1g4tYftv1QXzy6EABmns9BpTTE4F51KAD7BBq",
  "key40": "3h1F1HteahzPaMtHyWuRa1KY7YW14ajMTKfBik3HXyg7DA4cUaxiEFsKjYdgMLeD1PLA18WoC7dhumzyQkr5SzRp",
  "key41": "4ej7dSC18DM1B1k7BFCPhCDqH6A6U3JN2NKQhtvw1ozTQvhweNjELbLkCQUBtEfGfw4xPv2bvfviSqWym5JBvPiy",
  "key42": "5faR12QfCAoGtZmtgXVPksiNyVbBPkVbxfwpKsnzFqY1bQW8Nj1PU9RsspToQYSjUfYZYGdJ8y79TzUZsXuXrmj2",
  "key43": "33FdmZkgKVR1joQrPCVkLHQ1RQwRS5195fHiRLNA4moiXjxwYqvQ6rQWo8DbqisWAtUoKB6PqkoREJysVwK3BDfY",
  "key44": "xiDZpJnmiwRWimSUuChNHJs23sfkpzGw9vpfn85ooFWT9oSC7ZRcJhSydGYWUKJ4mn4BeQAmFcEFWzHDtMAvKXc",
  "key45": "3f35P6iihyNbCSksw7j8yntr6HTCtGSBcF5C6M5cnuuLJL7qu5txJPHMwg75maackvTVz4SmSqik7D44MUkVSrc4",
  "key46": "2s4g16NgF2aqEjKCLfHCpJoswbai285DHodPbtZJm1NrFmyJz6fnz6hqFHRTcFFmjpaMnRFChX3bDvKsvsBRqFiu",
  "key47": "4DyDZD8sm2Wuxi8mPhFP4pkr4vwKk41yBj8o7GxX7uxU9QoFWSAmMBczUz2dpFDLHRqX23nmxz4Jh3dRfh83LG1t",
  "key48": "35d3oF9pkuASbki7CEMac4ZFyzQBzyq2k3CghAr9Hox6zCdN567Ck968pGikiXEc41XfPAmytL8YSCytKqaau4Lz",
  "key49": "Xw7GrVWeNhYHaE3X3kKkUCLXVBGRNcLthjRg6Jf1Koq9bPJmFXyUALLetcKKNsu9YP1RHPuMWcLTV4rmWwkrrTy"
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
