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
    "5FEP5Ln1WEGL8jQTZhrdjuUeAFTvQxjNmvSXi4UGdretsiDRh4Da37dqitnvqczv5w4cCWPCNaqBPTaA39mDopNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DEiZw1rtputfLRs6mv4UVH4LX3BuB2Evr2JUQHJjdENMrR6vCWMzhStgauLjWEN2ybQhxU6BG6qqw1QWvzrc7D",
  "key1": "3mmz2PxHtSmq6rtgChgZbvgqpt1CJxtZohU5VjeWAsKLEK85ro3W77HFCX38YFSWn9uvRhrH46yui2gFiJxdB6PN",
  "key2": "p8GWGUgRU29GNPNYGxkkYSuLZFnee4pNtx9U6N7ywWkqEJrMngcBWRoE563zKsU7WTi3izwoEGLyD1bXG2sqASH",
  "key3": "5a3aqXoBU5DbUGTcraYWq1ebrxuFRgGcyd8ZiLzv7GR4TVfXWUbxLEyc4f3HowZF261CC7mYHc3VRHb7GVJsYYpW",
  "key4": "4HMNPwvza1PpT3NfH3464KufQu6ipVhKsqgRXWBzvw7g19rtjNE18GQBPtsCfPLgBMVVoEe3gDJheCKtLngxR9Q2",
  "key5": "657tnqMTRhb2wCKS2HAzWBt3ruCgvXPdWPS2btzFLazC19PcvYEo5JDPZ83D1pZrfAvgoYzQDsXSctJwQh1V8Ckp",
  "key6": "5DGRhc2pFzfEmkkPGePaYS2EbGfo4pPTLsLrb4CyTojRRS4sRFhYKR2s7vNEGVrTa1SWbqPfZKnQw4FbnxRJAybq",
  "key7": "5vC3LSMNWUShdweX4kVsZeDPvscHqDSxRCbS591QapKsMJvcASB7ACp9Tc1GrNXafcSdE15FxqtCf6AUxi39RivK",
  "key8": "2YQGQ4yB8aaZxSnjDfne3i5Cpk6UzP4PyosUfT5aMSrBRLNcjcJ4CQMDKYGYs8HfzpvUtu5bcA74b6hVaUvX6x3t",
  "key9": "5pAJVK9LmYVxmBNgKRVwLjyvbV29WBjTsyNEBVSTBuoAMxU3cBoLEL1iMjo39b3YoMvv1GwpWDsbC2jxU3vSoguh",
  "key10": "t1vgoTNKGX7BD68HqBkLcfc3dAD65iUnWEsptxPdv3Pbhz6ywrSdn8ovX3SXmhwZvnFKtSDjGbAFXmErFwnrVgy",
  "key11": "564N9Cs2Hb1EJ6nLKZDA7WvDzQn7u8mXA3ffnt4LUaRqMCyMcRtx6XQ53m6Gk3jxV2XVRvJKp2EDaTtrsASNEdEm",
  "key12": "vXj4EzKw72KgEoLZAUU4VEBdbNUiXBHBsGWwSHRiXGcJfUNrAfQDwPrrwnkb39AbzUefP9wwM8Zavy7x8aSjh4t",
  "key13": "44v8Fe3fL8VLq2h5nsQQ5bhMYB3zv8aQ3pa8k5SD3j6ZwQEEiSR52Z8nhVQeXfuWbzxXFLsGvGbrQYJz5bQ1ztj4",
  "key14": "4DLkfrC63w3yi3HZ5f2nEoY2sHSNaHhPJmBBKqfh7rvo9YybMEzRzgGNmnj2X1qVcGiqVKKx2PvXvjkLGxZJPwXA",
  "key15": "3p1s2sx2d2mKJUpjRiKVxhVvkcKgpDPB8N2oCyYneA7VZV5kcpyumn1JbrU8tPUz7WRax2nWkE5vv8pLx3TjMq53",
  "key16": "2ZeeGWED1KVsA5kYVU5ULRLFkyvyHiHCQpHBz2io66gRvWtTVYBWijEqroaVjGG7x1sKpEQ2ztgFL14CoQcytw4u",
  "key17": "3KPFJbT5UJT5cdstsM4kPtV5LTTdw7HxXPDweqGrepyeRHK9KTSduGb8D1t6ERdnwFajkC9rxwK43kL2B3THEkHB",
  "key18": "2VJothkgaQ7RMFF7aqfbhn3vhR4T7PPyTyXD74tu1gvfo9kdrcaNafNa3J3Hk3x8uXmnFQbWhfs4hgC83Croxtei",
  "key19": "6u13xvhdadDgrp2LBmWhJwBQ37eFmEyxwxY4oXehbw5A2NZk43YDLnze3s5iTsfaEQisbEM5LbK6fBFcJxEaD6S",
  "key20": "5pcfDX1EQwbD4ffzca4y77MTSxaPMHBW8CzD3BjXYtNpetaPC4HgUgkDaVrPksp3gq81DMLVjxYPVQtJNaqkkiPU",
  "key21": "5GCg75Jj47aWQvFcS8z7K8esbMWQwjHLcwvAouCYMeaSnwNHvgUgUnbeA22uVdWoBK3ixzZj48ruLwQQ67Moa9HL",
  "key22": "sGL5fMbwpo5VQAoqTpospSea1xs6nHMc1W3VxdPvwDx8F5LR2Pyq9NMTEQyL7syu1zRziZBwoMiwW6xBE7vugWv",
  "key23": "2XGvU5h9caGrE9eqfZ2bPnkthyw3gty5U2Vo3EnwQ1rH9frEuqRD5DWf1gKPp6L98vdozFqESL77TWiM5GLTqtWY",
  "key24": "4B6DyZQ2LrsgNWLzcgrtSvmF2hqBKv9ij1Lr94wvZQyYFwuC3w16J5nmdDVxHa1JuKcmDafphDMsimDH7Y5M3twN",
  "key25": "2QY9syJR1TN3NLtDFKfsze2VHVF15tMVEzjMyiZMgwAkTWENzASAjumuLZYY1bwhQfsypDL9CVN6Yac8qVnpvVgs",
  "key26": "2rWEqbE9ax12gQX6DW926UFhPG4LYSVDub994g8RvFLMgM8Vx8q7K6mHPWMqaASJqPJoofudgt6WQNFqYwZDNhgq",
  "key27": "5cwkfstwzb7pRBYoqdEcNobHtZNeUwtXsLvgUCkSqaiRAem61an33putaQKEv6P9tucLmnGZQWdbvjBVshDTLrmv",
  "key28": "2MGa9tBPs4NwiuMEBNacGvnwaqvaQTXpyYKkSbqSvQkZGXhgheKZE6ZNtJ2cwFvdwmYDKBfYkhBNV52gRvwJcNmD",
  "key29": "2ybeV1NFFmZekBdZ5do8uA3MPEa5diUvjRMrCuxFrcL6TDjeeMvK3xURo2wRcjxyFs6ZLw4Wq3JP6vfKfRn2cVg9",
  "key30": "2mBLrnyTEK8FbobFp3uuLeQd5aJv8mtzuzTB6wez8PUnET9CEYY3Vw3MQzyBbSxRmzrkPk7LbFLc83hhL1Q4di8z",
  "key31": "3pMWb32HrUxmdH5AXAzT9ahwVNb6Q58tJZ6RsFv2w9BMfRJiKPKm6M9gXuLUp2wmdvc8rqoxUnqaQStTxKS36e97",
  "key32": "3QdrwxYtXrqaLFu636NxGQzi8iHZaSKY2KQUtVoy8eqmBifgidRSSexSFb1W9byJALkqp1TC2M8DBEUWyNwkH7mr",
  "key33": "3Y8svKLYTjxvvP3HKdyMfgx7m8tdAPQCUspDsMeKMEhDCNkqR1Ca67jYGNrDAdYDFjuRmHwu9QbXDnVtsd8X2DH",
  "key34": "44SRFpEtqvR1WsqMhQfuzMTBNiLf91BNnv644LoLNxSN7aXACN1LYdcuWhHCuPvfZJh8NJDNDjYFM7LbKeSYCdju",
  "key35": "3dqxuiiNyyAgLMoenGbhjnHX1ZjvqRwNakUPpwFp1XTw2tjTdpzektHUjn7bzYEHsfA7zo5iHg81ZLtk6ST28zpA",
  "key36": "5nsDEbxgBzrEFWqyuv7eBTXK4jyfpjbH2REzaTtxCcuELbYWHr7ygs6XnCUj5HiVaSfSogm8FkXnjiAQenG1eAUW",
  "key37": "2JBr2HZi3iS6jnuZz45DuvzZY9X9e4rcoWEVjMebtDjUtpTKTsLTd38i6oubtemoPM6awUw44ByeaazTAWy3Auoo",
  "key38": "3B7dn1dHXGH5HA3o9CWr7x19ZpVmMs3SZrSb3GchUQogYbTbvjpWfJwCtXQpAhLfG7vo7FoFyDpoRVkFCmbuk5R8",
  "key39": "iw2v2QSfAUvackPYUNQnxbZY1ReBzQGraMHi11xngo4pXQxy6RU4xrPrZSsM4UtdphrZR6NkfcV3ZzP1wQELTkH",
  "key40": "3YCrthZazyha3x8569H6bM196P2UDgDFDX7PXKkscoQcRju3TcZNEoavdE82amD3awxVU1hRm9pqzCofwLcwcXmy",
  "key41": "3pRgjWPn71bfxXNNi1mREH4f644Hk4Zqf3NA6QVkEXsFYkmEajZ1RvZBakc8ecRxr4NDXN6wWgGsS3SLZkcDmkuV",
  "key42": "47US7jP99Ngp42nC88mta5fsvCyMNHWvVwwBKcnKo9fodjXJzWAMHwr3aTxDAs75rncweJZbSgmna2FyEdac5BgH",
  "key43": "4kPgywm5GAJCSk1GMTPSxjfwfwXK8n48gPhCi2czieJnxBMJB5RpDkRXCWzbh3SrBwxdAnBXNW7asMerHZVKo2G8"
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
