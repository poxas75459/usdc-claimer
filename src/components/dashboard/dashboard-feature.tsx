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
    "3v7zDPCtMGRAsLs8HYss6SsDbB2qnjbF4NPQFruvzu5Y9yrRdzRFWayuRsqVc7rfg4adUR4wHxr1SRLaZMPV9bwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZwB5p8NMqpZPkZUdfvspPEhzq2Hua5rbErshFeBiXZnpU74P4WDgzHfZMDms8GQxvvQUijPK2wysccb1EEwAPi",
  "key1": "4JoVLH9LsXhD2AdrDU5XnALhtKXgZ21Ngt1hb51JRNgstgPV99dbAiCLT5tqNAKXiY9j9kwuip9E61cPpYhrus13",
  "key2": "4KwvVMvaz9tfVhGBGz6r3ejvouTHYjRkUE1oJdP5qRfFxtePBwyg7kF2vkqWC1f783ZoXeuidgZc4TaDWA1bKY4b",
  "key3": "7y1KKpFUhkG9xSLjgn9MKYQ4bWbHphqp75SHJnyvbRztb6vZ6habijwAmCuaSVzu4mLWVEfpHyQQc865Nf4Lru3",
  "key4": "2yns6GM54LyUbrExUWUbvB8VjhmME6ZUbdV8UjRzQhMV5RysogrebBMbafCdmH526UuuaXTakd1PbVMrTMYR1i4x",
  "key5": "3pCwbEUy5LREMnDzXF2PGMwaSu6NckaRqr2JUtVyWXLFWKD62DtCX38o6gV1ifMp6vTxZuLQWzQKzuwbXFPS6ryg",
  "key6": "2hMwpopmKC6VnPzR6BZgKEsjCW4LPD9omEmXXvqgEwrwKp7AiYiCm9sUesrmbGHBc2pf7rrMwbMUfwGshbdgKdm7",
  "key7": "35eeZdB8ajjVY2YZ9sjQg7xpAwKb28uqs2jVGSmTZTtwjR3rMVwEPKXNBLDpV4Ck1AurxECvKX43rh45Yy4K1Tbc",
  "key8": "5mTn7ebFnWt4wVxnRoac2BFY7cNduQzKyXzEh8Uc9VHUdXBgqdZ7bJ6cQDSCSqpVww9AYbsQjyRSZ1oo6KoeajpX",
  "key9": "XHo47kG9LU5juyuPdZxdbtQss16dzfSc72pb3EhyjQVJphL5oz9vUxJL5vgJnFB3TvQ1c7CbrPaWG5ta581YMWs",
  "key10": "3aPS5Qo29ZYuR7knUTigc1ramej2ZSrEhBFzBwJPD8w64WKLFK5rxKCWmJF1o68StgVbaGSWBzixBruBVHRzuvmy",
  "key11": "5Pkp47fnr5acPCSYeXMhLf1xJDiYkvr3UTUy5oUU8XGgZFPxQRg79ac86wgPHErwK6AKAg4m56SWtP4rCQnn2DZA",
  "key12": "3T6ZEbPdjhXhuspFML44FExkrBbJPoTLtv4hyqp3M44H1GMatxpNf5GP2wEmoNUQbmZqY6UaVS4vJfA7wpxdrmqM",
  "key13": "4u2Ws8NfBquSmq5Q5EGGR8MkhuxzW55J3xyjoNLzQW8WGZBvBXrdxwkNZF4H9Rnzptxdqfq8JLA1M9eURS4cBYxL",
  "key14": "3EAWJFiaRgkQMhef4iK65hvAczaPjrTbDFn5YZ87M6KEyUXXhyRqFWZv6EPjUoZynimy8eJyNppjqn5ddEQdyYrF",
  "key15": "3WLasZek5p4WkMe29tGwWobBTDhrMcUeTzCjJm3hVT39ZkrL3Kw8P2qdiEdTTzsiGCAMewpBZg4gEf34dCzmP7Za",
  "key16": "5L55bX9xMWdtJLn8a3sKamkHmDhYpc2uZs6H5JvjqnwMont5GPnEBRDWHrogwLiuvdNnRWtmqH2dLGXU7FQYAgH1",
  "key17": "5YoibHXxdYxwzrPBcAJJGFMMLTy1jqy3grwMKqGvDqSAGrcjZcH7KVN5DMWpkgPrbDLYQQPsN2woVomoRQoK7iQX",
  "key18": "253ud4yysQke7vzeqLw6wb2MFwZbXCgLU1SLQrx31ig3bbfLVEaEoZR6HM8nD3wPvUhfQSwbnZs4DvMbJ2iNKPeW",
  "key19": "5Gefo6usgKhNZJZ9QKK3SY1eMZfhtDVgcfjeHKjpd6Gkor4H2HP7RBQx1uAoJfQaP6GEMJMxjsK1G8y4gHHKFbsB",
  "key20": "2BjtRpAsXUjf2SSkkvybn2wiWZ2eNEosAfR4hwwWFbNEHiks5ujfkyBSAYLu8hhqKoMUMGJ8LqtmgbrTkcn2koP",
  "key21": "JJ37ZioYd9NfXA9eYqFAFbwptNJkCix1REoEWcohuX2oZJxnUFyZJMeyAx1uQW48UDqsREM73h7FFQhs4qpUWZ2",
  "key22": "JpbnFuyhrnN94rzEuSYHMcn5WFi3Ni71HB7ACkQ4DbFXk7kyQufj6SPfGeNTnhRAPhRbeXic7ua2hAJRjgGwJkR",
  "key23": "2Tx6Po3wgWHvnRgQ2dSfzoSMCp1aUyytc5rJ13UrYNj57o8aXbEhhsVGrjxTELTpTZwP1q4x89Qnh1GgFjE9tw3m",
  "key24": "oBYEUWQzxtLFB9vrsYnKAmQgVXC4EF99DvAGRPsDbMH1CBqZDPGFvr2qeVQTJ41yNpPTSXPWLFYs3wZPZaZPjMY",
  "key25": "L3bMniPteGp844vM12a1MXNmzsqmuqG7Wx1L1wR2iSbAKNriNApRRf7zw6H7ZYpvTFkUpXTLbM89oVJnuTYt4x5",
  "key26": "5hhFFraoC3W2DAYWYr4R2DHcE6KqZWm1coWBcQzW3xageN7r2m2tpZqWqibZTD1aJX4HJf9RkoSzB6avwFdSozq1",
  "key27": "mVn5CHmg1pET1YyG3DoKbfuwZ8DrYnUCaUprbFzoHKR7qzWvvKx68Ghr9MvENd6mgY1hXHhtWK5CokwZTKRTds3",
  "key28": "62mj99t9KgT3m1Yjd2Dg79GeQdtcx7Y4aQ3igticvWYAcFoHhPSi9Fzhy8JXUuq6GJ64MRgAQnLenkbCUacz1XCd",
  "key29": "4Ej7HFqwqM1nMB5osnLDhe3qn1sH9kpA43asVTgEcm5fDowBPAB5qLvFX52dNL2etnrLZwj21Wwvev61fJqhb3Hg",
  "key30": "391oogshRvJ3TnCJK6k5GM5dfxcKrJo36acmFAXqiFTxw8c8cUU3kYf7QwqoY6v1W79Xsaw5sdPcYmVDJom8kmuw",
  "key31": "2dm289mG7D9TRVeyzZ5rEXWD4t8hRmXd14UVnBhVXLrzGN17nEKpT8spjraDpU7QgcwcKpsbNWKNsdv1hsBGJkXM",
  "key32": "5F33AhTReG42Qm5WRuvSHLJgXpyXXDimhBgCAeHoveGZKMYgciBWcHi5HSARFZuQK5xAA4FixLGn1odw3z4ZxNMg",
  "key33": "3jR97No7U22LNs68t2smktbmaUojUfa3pumZ1vUcZ6kxUt9wG3Rm6vQ4uDbCoUKJnuastUC78MX5nDJgfCZKtbGg",
  "key34": "2ZaAuNRgFc4rfjdgYoaQ51nvTYTth6Lkj2i6atUMs8fE8ShK7BvJw4YJR6GKbMuqxQjp7uNARiyxPJEtvpvgMQ79",
  "key35": "3ioCXDscKqJzT4LBq3hRUJMhkN7zoMoqjvjqVL4qMFcWMkAmnQTzSPPxy6xnoUm3KRihwk9dDsugpeZgKgfyyrSz",
  "key36": "9dQ61RDcDzd437f4zznrdR3Bmuq2MjYwLpRJH2ruJhcMhtNBFJUY3Rd6n9hk3Wt65eJYRg8jbcTKZjkoas7h44D",
  "key37": "4iR4GNJMD2skegF9uupFr2RPxEUUYxdWk8SdeoT4cd8KaTbMnVxb7RDLA9KLDT26QLEMgqg6sxXiteFh63NTakPE",
  "key38": "5d8FqQtc6r3MGa9UJ973Co4dvrmHe25RHL3otjEBQJJpKhZdJwz2146UtKGTkC7yrS96dYuESzTMFAQUL2fMiRDh",
  "key39": "4uTiBDqzZWXCPVg6imYw8udZGiDu6m4PqLkoMnNoZQyPFcxNMNR5AeSVXsqTiDkVnXMXnsZNwscQbyeQ12xZ9c1f"
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
