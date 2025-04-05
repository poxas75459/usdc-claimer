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
    "4CBF3Qagpyz1tCGVZwPKrpYcx8rEDb5ghkS6NKnQhiWfPHoJmbQnVjsvvpobdWrRyvjatbFrjcr6suTphhVeqGCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrCqFTcKSMvLgstfX8ZFnMkJgAB7ycFNoA4SApVCHS13GRPFsLcV8JetJn4ZBnTGb9eWZn2ivAiWezg5HLhv6Qr",
  "key1": "4stRk3ntbvbcmFdvdizWX5f17JJFKt7ihf1EgNKsAszUPaDZgemwezwx7ccnYWb4LPqNUhdrC5Wr4XKLMtj7KhE1",
  "key2": "3WFtedGeyUAxyfbvseRm6BEhDLpuSGtfYML5qDd3zZWeYmoemL3izDq6JgqRzqw8f7esZdbYGosUmYKpa7r1xUE8",
  "key3": "5hrQG8VqF1c2w3rqznSmFGGMzWHAym8MrnWojqooXTma7exqygQ5CvUPpPg4UMAmvNcyJRUgByCHpR3cAYzyAPDr",
  "key4": "3SMejYgFjT3e9SF4x5XwrJzQDE17xwxaRF6t1G9kipL6KLhJiKXtv6wz3LGWzibLyaGZFHDLs6Sbr4ufB2DkcFvD",
  "key5": "3jsVHp8bzrmN2fnPtYzRZE4HDRGvkLtBsxZqhNdW3aDJvLL6NrGAVbbPqGyKGtPrrH5wwAHaHowyeVXsD8LbRfw9",
  "key6": "5gcpwg2jic6gtqijPKRooPqfHjvUWd8CqaVhZciVRbapZM4RcfQ4NCaM4wTRXWp5iGH3ykCS3H1YSXvMtSzbJchu",
  "key7": "5CVcJ4rJy7RXev329qv4Fii6jE58wHApP8A79gLQCpjZ2M3FdS7qmdYj6B52YTobucQE92N2CZ3LByS4HXQREA8z",
  "key8": "5rsNweVPUmqakCYQ5W3bRiJi1NNFxWihwKmaENuw9gcHLsvSFuCeEsxXVDGLUwTu6iVfax5v2pTRTBJtS9Kiw7eW",
  "key9": "54SJUwuVJTEbbp6zHKtbJUmfnsvgX4Z88ateoMHL7xhBBmWCvKBrYy1UTbYZGcQpyunwexrTSHiHy7999mKJqtRC",
  "key10": "zgm7xkR6Pj3e1g7UG9MYg5d7Txu1noxQgBqiKBGXcTh54yrS1Z3c1dqsFM71eDr6egr85uY2zGuPXehRDE8AWSq",
  "key11": "3BZG6CTK9HStNZATK84TqeHKKrGC1BNiY2Lxq2yPutdcPHWVUYW1j6dW4c5haYzZdtjd2S8dd8x7rvsHVq94yVN4",
  "key12": "2ALxx8SVq4XYtV8vFJYtBg6NZC5tFg6oaFeJDMSG1cyDga4FpzzPLZMEbUjpCFVeB4NspaAvx6v3zufT1pUijrUh",
  "key13": "2LV1Z9qSEMWqNMgdfTqFrgNhvxgZzAbXMSMa9eBoPuEQfo8yY8gagGsmhucvYEz2E75kQUZiDpRuQ1uaW7Dzn7dR",
  "key14": "sh3E5cZdForkjTkf4wb7FZth5YV77UDv8uwZJb7duJQsSwJYb9XyjM52aUvxh7jfG7E6Lf65CTnjd4r1R4HEh6u",
  "key15": "2Vgc7mhpJV6m4s4HQiknAoiEumNbHHiH4Eh1jqA9Vs3qo7btLF17VunEKVP86o9DhTDmAgAh44oijW4NMPx5faGP",
  "key16": "3YZFDoRfJMCAikkiPNP7LkNEoyucAkk74Jgon5aEzHQvE8sXp9u9kcjQedRh6SzMwCPHoTXgB9J7hrrpbSfhuYZK",
  "key17": "4n3HEd11WB8buy4MgH6Q66SqCcdBEUQp5NxBumGWLkWTGASTchsdgjv8hEd45GWrGyvNvieqUAhpzA8L4GD7shdY",
  "key18": "5uVpm7gYdXEM3XfmfXkMuaDX6xYZZHTC1jAMYN75gBF1vHcUUR5c7NsrDAmPqoSg8K44qRWUrSGTPtnmS3o4mWsY",
  "key19": "XAoMiuctPHNfpZinhSM43WDdrhEzGyB5nVXjTuFuxFmXiVAxiHPbyGRPbcntfBDKVBnRwsPMskG6dabp8iYzdfb",
  "key20": "2CGfcNL3FCofVwEbqDTLXSNM1TdtagMKT6TUUQDHXYz89GnA7HhHKw6UQL33ac2enwdjZfrB2uEi5k8Dqgf66byq",
  "key21": "1VW8VEjhPfdeTsWLdBjrV4PzRCTizpNRRfRqYGDE3SwurNDeRhcTBQUSYFuzLH4G12ht5aXx47iHvrdq3VFyQLC",
  "key22": "5iiSqkXrRBBHH8WFB8gFyAzYQ7owwh4wahnbkV35HXgrWstZyAF4srpTgMcjYM1qshpukBTg2UkWX41jzeWRX3LR",
  "key23": "94LqxcqkpuMwmdMRVvcFi1BEbEbc15sTJEPPBmp4jHRydchUghJ35s51zvWVHXqFBA7F1amN3YCgEYCdvGKeQMM",
  "key24": "5bvv16zwcZpWAq1igPs3wc2Qh2haPUAGtKxfhCamFuhKW56mtfSA9gBag4Vn8dXfuG8DxGNr4q2tdtbH5AGFNTE7",
  "key25": "4Rb6CGSZZnzUV3BGs44JTC6sDgybruz1pW71VnnueNLA3J5E9cFoH8WFy2VSu5FSDQ4JieP4e9iqb3p2WjdGbSaB",
  "key26": "5nybVxPWCTc8hRZTiTV27YtMSdM7y1v1JZ466qVoZsxPA5Kr5w9a9omRnyykwdXUSwdDm2RUGVeZ84jJnaLicrXb",
  "key27": "5KymyS4AF6JUTQM7yoPKqU5BN8bYYKz4zsacLpWGfMvPrBy8FjPFyoy5jGQ7zfY2kuGEFAnwZiVGkiwhddGdFgQh",
  "key28": "fX4GzfQVe37e9SLVKuhnnKCSPtjXzB1CNUV9Mb5bxShhAbUFhmEmQhdMjptPsTLPVs6WLTRX7HSkLpEHLQAUYN1",
  "key29": "VnXDfKCjZjP7UmVRnSNCUDc1Vb9RAaaGnBvH36389fzLEonf98cSkaTxgvQnXABjqeZqZPiueVRccdiTcxWPg6x",
  "key30": "UTG7vLZVFQ77vn6sLRj25fDNwxgjsdoFaz3h6n3LeLv7TXUCdxKb9PLPEYErk33r9rNRUVkzmvJtkuDZY9s1SEM",
  "key31": "rCpQeLeuqG1WbfS6TQZ6wFDcyndFdDY9YFwRmder3CepZ1BqahVCYxiPH3TYACv47RSthA3bFChwVwE8VhoJztY",
  "key32": "V4vTttQz4C1pdxihicSGsreQDJj9BuZbv5X9iNpr1SiedAMEp42wHMxXbaeaMMBTq7j35u3tvqNzGcyczuWdRDQ",
  "key33": "3RafVk4cy41m6vc6TxQgceDNbcdf83wsTUTy77Pr7BJU1HYyNJqFkE4f1DJXif5DoJyKAmjJgYjDswdaDrcdYqqn",
  "key34": "4oeHP166vVbhomr3nVnRuDpH9zioKhEMxSSce3bZtCwyj7AvH8uP3oVP6FMtyP6c6sRTgMuFpi5FLfp98JqUhWuA",
  "key35": "31KDM2qSJQGJmZxWSKeTrTwoT4rtM6gKYdnoqGr5hTT3YntPFvmaDQm79FoHYL4XVVkGUxuv5P1pqB6RGbemuarB"
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
