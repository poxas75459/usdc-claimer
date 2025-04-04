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
    "5Li9rGzL6N2mN3Vz1hSzf3ymvjvFjc1qku69RjwjXtXMuGNbwvzMqpRJBn2WsAXN75EbQxcU1uGCG669GcGiaXr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v76DqYdRFv4dXduqCrEuPzmBUSWDvXACCpJXMkbANrf6w6QAyTXeYvQGPpasHepea3dd1Z4yceFWDTLt3i5NfVn",
  "key1": "2btNKrEu6YZuQa35UoD39wqELw91fUesbaNXQa21XvrhN9AspRHyNAchpthKeFNbGQRHAVeCeHQpk8K7AYeFEn4X",
  "key2": "4GS3zHjMx1diNRj8mVUJknRHQcPMfbDV53SHLtQzirRmpaX3sQbmgMZw27jKgzc5Lf9y775np5JaLGkkHFNbzY6y",
  "key3": "4TDDtQVd4ptZu2EKTo68ebveD5ugxWrQB8fx8CEWdJKHUHX2PS5iPnTvntUrYzM4ZxPK6nPT2KdzqTATeN9aPsZG",
  "key4": "3cR5NFdA2SCFKaSM9p4Z1UEEPG8uXxdHjFfF8QUd1BDXRq3bBBwU874qJofSfaZVHfrRNLp5erd1f1ncad6Qi5aM",
  "key5": "3tkAdcu1Q81kCFccYTrQWYXenE85pQuHJFaTHDB5qWfjCKPUZBfQn3CufvBSMzoyiNA2qRdhhPwY5EYiWQyjNkp2",
  "key6": "4K9z4dVBR2gUy3ERJiuXVuMnNLeGDRHdapbQetF7LnUKWzbCw75CMBKxgZfBaomC4bU543VFe8EdBQHumXPe69Yo",
  "key7": "5P5tDbicqqfyrGLzU5HsmDT5zKrCfteQQ6bv5vpomMArsgDfx1UKPYTSWv3zWxfrEem9yx1hcYPNuXHn7qe9VtHc",
  "key8": "3ixVBN86g7kCmTsR9vQsHxYrabxLipha7ifXZaNAeN6sZUTi6CE3BFkLPjDvGmr8PLrzF6ejF2mynC5CXKuGJetW",
  "key9": "3FVYE8aSekETg9MvqGtpdxhe6y5Mm9sfYFePjTRipUBKxPrHcSEGJbfeX9CW1FhFWBBFDJianyZNnuBGgrknUquc",
  "key10": "3HMPBJYAeacaVURZ8T3GgL3Tby5BkL9aiqPXwJ4vQMV6P78DKv2GFqVSriULpyyU7kSWbGDQNU3n3zgN7msAYgRB",
  "key11": "5HC1HZKNbjFyTAKfsq9nkPG9QSGoePxpaZCwjufWqQuKRfpwq6C9Acq754fk8CCDE8ZM3egQKvJ8g9B7tNBVPB8L",
  "key12": "3HmePutswAYaWKzHaoXa4ghdo3xbKv2fEbRSBApGUkJ87111a5TjmSvTkDfKVwdnBY6udNnUKVF8ghKGXSZFPVt7",
  "key13": "LKZvyZmvj1MYExMKcCtoNcSCC4XL3dZMBAdeq8HsrwtrSPSvpnEWcCqbHk3ZvuRSzVyVXQrsNJ7YrzQKfqrGsB1",
  "key14": "3jWm4GV4yhwzCT4kFVYTyuNydGf2svp4qo6hGrvq9gWqtoG9h4uEgWSrHqsrHHbmDwSbfPyfmnjFQFwW8QbzG8Nj",
  "key15": "2iY6AwfauY7BYLLLkzpfYd4ENv7VsHnRcSWjgK2j1QdaqGtYnQT3n49EnPUQxTXWpa61tWTdntDKaVrKYe6yE5x",
  "key16": "4QCWakPkK3M7gM9qcbLEpGgkz8ccN3f1QVjk5vUUxwzk2zN83jmdtM4JK1RTbf3dUZ6KUaTG5GzM4XuNwwFbkfB9",
  "key17": "2XW79CCJVDiS7F6hXPk5FtFCLArNDZ7FiMhryAKzjeJ4u64KSwueyq9F76Pv1WNmDPxS9aXiqQxiHk9D1QDkbBck",
  "key18": "WwbRD6CyethhsXMF41iY5D6529zPoDZQLdntwbnzGTaFYt2sVyoPnbPf3NmyTYdW4mtV1yUe3KPZKQKTfUwzr9s",
  "key19": "zDqRNuyMtcKasjbS4wzcSKXSMXhRvWGdWVFYTPPkfgg7RCXixkFdmhCQacaEDbAAfAhWXkksByCF8hmx4xz57eg",
  "key20": "Yd1w7vq11F2SwYUUqaLFVaemQ32d3CY8HEGqxzvaNbshqVnwQcW5GoiafxTzR8iuEfd3yiaj9QU3pQSba64W7mE",
  "key21": "5ks4EDiNqjihqZU8iKQuEKdWfGJWmjZJvhNuK6bLR9v2jDjNfUazMehTXpPrLFVz8Lgit828Am19jqaketw6jnuo",
  "key22": "4ZaGuR9sUbd3d9MSbdmJQkyfmePuUsLtgWyEGHu19kt51ZKb7r9xBTWWWFNTGkjPeDtgN5i4PBvpNAD5azGvm4L3",
  "key23": "5z9TbbkQGGoRSF4HR8kPvyo7cv8xv3CUtokwkGH5k3jMxpJypZYTwRsEeVitEUzUJeYhZUHQAeyABNmCMJLutYHn",
  "key24": "3kQTVjpgdbtezC9CKCM13iNsjPzZXxKLK2rWXiBiiSi7vhaskX3Na3WMjHPBVAm8vtQ1sxMHcAjr1N6pXNEukKgS",
  "key25": "5UFTtxTnf9cDS24mrcYKvEskeugvf8TDjutUhjX2Y2bgrnW4HMNULoPqQbMJJ7Q3o4aF3AJScrDnH2DrjnBYs28D",
  "key26": "2hSrc16jwUMhzipycitUMzxReYWhxc1yjfvmm5oEQ5tRch5AtucgyGSbKyBYxvBsJLmt89Agioey6pvcqTX7wX9N",
  "key27": "YqJuN6hwQYZd6zvrnUR7xZRndEY3rWseJXCMZuvKKmTAKpTBHUprz7WQ8vkQHn8x35cLnGdbCjr7fn7BYHy2GiM",
  "key28": "RfPu3wTYEBpxumLVKWqFuvfY3yuiMkviwpDjYhsfNjmv8DnQ2sSc6FyMJTFQnKupsLuDKyKRVqhyCaEKzoTovcC",
  "key29": "5jaiVTM2EEHkW8rmSVtrMLca6FTr7hbGbdAx215VU6ogKG53dAHSMt1pRTTRZTKSRFUssgx4nVPcpxxGUbTCmMaP",
  "key30": "2xTUZ9BqBXL8JG7V3Dh7SA1iy8hiXr7g4t4MrfU8FCgVH3pmtvAmTsueudPDdnnEyYwZrPYvKrqPm6CCS7nqpjT5",
  "key31": "4oKWoQv78KYUU5h5icJpHG6jVBR75oy79Knu6RcXoqbBbKjvDyaN89W3CmYRrPCyASHmZMMwWFBw8wr4CBNhV8XJ",
  "key32": "54ot6fn4exKk9jcKffUMuab97PfMy55h1ziJyTdN3QTbt8pRLuQFiG4Qm7Pycox5SW6xFwZhQ2K5jbfXbEN8QJxr",
  "key33": "2hPpsu4QDV2o6DJXiCS4mxFBdoUaMT7GPvDZ4WWJSk1wJMBRdJyqdE99WV5S2GLTddpuu9NpYphcshvF8Cq2SAYR",
  "key34": "LGditbGfVD6Ep2PNWMxWxafk6ADEg54hyjXuAWnvcD32myE4AL6fggLxtyg14ZwP1dSRNV9TA8Fp8iUUzgaCpLT",
  "key35": "2v9ytjSPdnPz3LoH62wk13avvM7714fvCHRid28WZ2D5L1LUDnFKQLTfGGjx55SepZ63oDHybRyJp1D1PvGJpPgR",
  "key36": "3zPrKpH7x5DUeAqDMMFMD3RrksCz97qKUEBRDw6zYC1aM1sLNsxCWv2bSd1fQgpKzEREv9fMQA3QUfsNJ3VbcFB",
  "key37": "3prWVdKTyhtVfHy68PwkQy8UaLXmmcZT7SgxvbEVzRYu9nSxdy2TPQdv8uWxmi5SxctfhXvtUDdwiVVWfBKH8rds",
  "key38": "3zo8dCZM5tuJBgnaMGzpVDcPXFoqvQcLhEbEHfHVFKMosMZukhFbQQqxVAwVsZL2FWds4pQRJWHr2UH6Ab2Cw2i1",
  "key39": "gfNKf18RT8a2MwnGhLyeFjZg7obNhnp62q5psFMMiAFeUJ328rWA4mR8jNdimHFdNFXWwLVKNq47esuNW2CVCaM",
  "key40": "WcQmQg2zjtkCC21AHXsZJpERZn5BWXJmoFZfShitbnsTCkyrcci5P4VAKoUdndZhF2GqZcB7bJAEDqgeAaKzCd2"
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
