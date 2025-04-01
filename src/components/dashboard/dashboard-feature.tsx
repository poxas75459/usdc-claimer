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
    "3aJMC5EGjPYG7PuLGN3oCLvYiYUHSkfc4N9BCSGuz1UCE8dJ22VPMEaA1YQQg8zitVb9YvAyykTyhryFDP3kFbLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCKkta7jh94PXupiZAKV1sGrMxMaGJGcifGvZCezfkbdDxmz3wQErbmvWqeJ62osa7N9r3RG5LwFGZwzFsAEgfi",
  "key1": "KJoQ83nam995c2gyrpWncNzZL8xm1KsRC8Kj1qQog3tMnf8qLBHz334Wi2PmvuYfr9pgnMDutWGsuXjRBbD5HxR",
  "key2": "3PabHfGLxHzNHmuzhgPnwqz1yPZkRNFDo6FvjCe1cNvaJAdXe3vbnsCJ2P8A4Evh45sdesZ9egAdnDx9CtZJvApE",
  "key3": "2nG6G3upGDFMrDboHkQeqzNF34JfzWaUBL2PowLB8tHuAFTSKW17rnsHrWeHs2uF1qniAdPXo9trMYaGZP2LP1Uq",
  "key4": "rjnZQ1MLE7NgFEwg88Ys4qo4SeDFXgRSLgekdLYEb6Vc3iGw6qxmUX5zt4TTvALoWpVc5tM18Y2EcF45GZ9QhuU",
  "key5": "5aFxz8zXRhSgXUbQzk5ZSg3Jv8vht2TTxUB2xUbFwN85LBxxFEyLncoUwnxkRuJSGEui8UoUAt7hr6H1wG9moQmF",
  "key6": "5h6eWgNVoCDFLPanHKSY76nACupwSB2dcU2ujnGCg58RZ91bMG6JPbWjdVjGk8e2fwMjXZDSKTX6ZkQdvusJPSUe",
  "key7": "5asTtXiZxq5wxsEMMRVCyRZrZsr1jmzzgSFTTBiqAQWcKRXxw2CUSJ5hssxSw168FNKJ3B8B2cd1XHEZVjQGbpvE",
  "key8": "2cmGKu9Ewo1nbychkfFUCm4qCbeCqULxNvqxUq66Sa3HxCtk9p2tNGrLfjownj1qr83kGJJeqMehryQN4bAPSAcd",
  "key9": "3vgXvan4vUnUTF8hDXfCaRPfczCnJLUoA1SvVav3TT32WHYz5FdRMGoqZmcJmxkR63yE2oCiGT4pPFLKJRUmFxPT",
  "key10": "3cv3yRyPpeV6GdQ6RmRPcfW8iJKaMbHJSGDP53aFveTJSUQJJRqbLWQYDMdv47nMPhy3CjoSwK5x1fjjrs6LLS8P",
  "key11": "5SGrs53vREEvZN653jfgcExCupDGq5aaVLDmFMaCofusJn3cG4vCawhvqzoN3MigTQLYYY56QuCfTXnvVCyGYv9r",
  "key12": "48GUd7boBKcSCFHdeRpFcZEpnVF5fjCxWK191zjDMcY8HiH8NREGxSYwi6iXMyfxFaPJMc6UpN1xZEnweNq46p67",
  "key13": "4SnrMN6CS58RLSHJD9HYUEKa53fJ58mKkihu4f4HcC3iRUtbqcBWcKJ9RtVvbvdhHAvFRvDuCsN2jcTP9iMNbA9H",
  "key14": "5LaKwxg1Ltnn25an8f5fJBcmJe8tpDd4iayia6CaRjxan8ApTzAKjQHATkoSSiUrf8vNqdQQySon69Afs4N87L5B",
  "key15": "3wbqbwQgoHjoPHAnrckMjYjESrimN3TuymfM93aP2gKT9cCww7QsYwMw9ydEMGppR9jakPm5j4bcP66t1ghKvVYU",
  "key16": "5hKVnPEdi4b34hn1ByZTaT9PYepHknF55kHM2qW2LAgX5JVnE6tE9ornpqhgp6nFKPGVwsQv9xfSou6giivTnjY5",
  "key17": "4X1uQZKNQxt2X5z6LwQ82J8i1q8H3kaA1WTVrZDweaHLV7boaj9E2i2uxDuPrwJez5EtJzEa6ykr2e1VXd96JGM5",
  "key18": "3cX66NHHTbnyPFcfHA9SGW6bSoeBCW6KdYE2RETkAkZqRrvctBgtN5ne5DqGkNJ3Eokq8htDAQvra9NPVUN7pye",
  "key19": "2qFTmRLAVQDgbDjmaz28NjeZxD6DLpU9vKR7VkzqPt3fZzsLHsknJRZRErqKT9id4jqCJ39eapkUrxLdZfzdgNEC",
  "key20": "31NGWD1TMHd83DfibYvS8FUZvmsWU37Lwr6ihFKKSQaNGJ6uDA9n9LK5XSQqsf7eoEXs8bofdSAkpXPxvMjPYE4X",
  "key21": "2t9oZ5rcs8N9dXexddBw4MEZQvW4XXHQRPe2vAS1xBo5W1ysbPvVsq3W3hWfs6Ez1U7VBrt6ZV7yDrv45bU4fLtD",
  "key22": "UhU2wrfFwMLzCgrBbQU91Yrfr4QxyYGjdwx1GTsqRGLR5NEo7BR8jWcvFNGmzvCHm1WKgB9o1XhTKxCk7KNU5u4",
  "key23": "wPLTWDiww66FV7qL5ZVK4k6mv2R6Uym2d873ipiQuHAZ6z46P9MtZ47oREUqYeWm2whC74mxRh7WqqGNG4oHVZv",
  "key24": "MXZ16KJQrpzBFPz9uinHPASPzubPtnTfVxcXfVTr3GVkhtHYJWkTqFeTWAg8cS6AKqjnjpFkgTrCEXzxCpVEvsx",
  "key25": "2Vn4ActJUW2wKrjH3JAGVoFhXAAcmjJXvBmmSzV7U6fAM3qey73ejM23iHkyFaznwMsmEV3L6cqT89advrVV6CYX",
  "key26": "aybpAPinhDtabQuRmeaXnXyJ2HCEzGZ55mNgAzvDmAT6r3si2gVg5reR1QM6Mo4VhWZVfHvGG7ZxawudC7Hp9RF",
  "key27": "TtmbaZ6Ay5abp81dD9bgyhKazqdYwy7eofkqTkV2XYjsyA8ACUzuap2x3iUxKpb4ptmRbhFJKtHA9e1j6ipbLMt",
  "key28": "43bHKfp9L48dGSPFhbDCY54XzSucLhFCc4Uz4R6NK9uCrwxcokKWMp72WUhQd9KXXLcax87a9cNhzDiNBgnVfb5v",
  "key29": "32cUvXuv9mPdWtgnPpAv25MgHxxh2iu5X9xWaJCkxYGbptbU1seNJtmPReNV7vBd81hk43SqqspoxAoqn7DrJjgM",
  "key30": "2VJVvufwvMgDcZaKUWev2xjDcfAUk1GCCxxLRKgRZrVUbsgKbTkhTM16te6yLNA2CV5pVvb5FgZ2btZMgQ5dy7jp",
  "key31": "4yxjybQ52hBojCPXWWYX53DKutS6ophDszoEUDfppuTBVELBBsuqa1oq1h4zpU5KkQqJzGkHcv8X5rN8mmeAjDkj",
  "key32": "3VEmZ9EKZ8CCNyeDv3QzKbNVt5KBVLVGncq5hHtzDqmtNdLkEFsp4NeeH7csSWZbof1kEyHcJUHfD6sXAaS5GfPu",
  "key33": "31JpsPbuCVrkiyY1feH9DCyZgJKhyQPNAoGqyfu4j3C2dew7tUE8pDxN8yJqEm7KHTF7M1jBmyJDT6NhnnZKhfnh",
  "key34": "3tgyyxzpaKXFJfM63owkmjZg2YxZ5SJB53K871owuG787V4GFWhPzYA8pqFfjoL2ZWLqrv6zCU3DWQqBRn6yYcP9",
  "key35": "aa1yQvTpBDppkvanjnZ8d9mXRTAcccs1ZoFgG4fX4XvY4FwvtXEbPCVpTrdPp39Eb8Lq1jce2mKoM1htKyBbF2b",
  "key36": "YwHTZCnk7E6RArvEEGEc4Y1G2MXJ2C9MzbEg55sPAJReWrkr1Pjau7FWFQqMBneBNqdKQFNqFiZXa4hCFmztwwy",
  "key37": "2hnZXhBwn2KqsDyy71okMZZKCnN1mo3qQRJJdgrRVvBPgpbRknZfibxRbschqAawL1Kirk632nAFjWWX5M2FzvU3",
  "key38": "4L2s9NbKCYDMSDgAc2f2AWn32KNbtqfQ3qhD8D3dUM9rSxFLR8aGfpAE3VQeq6M8VgimARxqfnqCkrVK8jdteSro",
  "key39": "5JFBN2z5ZDJVuoMvCTBAPwVigDb6oTLEa25VkkT93oU1jNcqCgk1BeFaxEczMb3spuKGdk9zLCe4GVFWFuTCCgwe",
  "key40": "2nfHpARxkxgP9DujX7KD7bGt58XbiMTdedQJjFYspq7NTtYQfWfGprVKrcg5SL3PqAQ8v8LFxkQKg4iRQ269CeUx",
  "key41": "2h2ZBbRSkRaY1fAMov6h2riLqqSbgzRSLbKBQUKHh2RZvbywHo76M1iMeooi3mQ7XdT7MxfZXfRLiKjQk6hBaJbt",
  "key42": "46ap2K1NXPqbz66FeTRv8NKsPB8icMxkUxWScL2vJNAwRK9yora9vQTtXbh3Xv9n7g1PTBrxhqWGc2xHeEz7wBJJ"
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
