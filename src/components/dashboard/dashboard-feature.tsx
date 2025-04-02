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
    "iEvtyrn4A7eN1nnKR31fHUsdxKnSUZonuysbiSQBpCbK5wQhEzSck31HWcGzjbzymNVBe1PCkb1HkoHbZ3KnphN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ws4ks2rRan7X6kJXF9ZaocXQGTcqFBTLt1zpqYahNd9681nYAnBXkgRfMkimvkiM7SgFN9bRWT5PWkurMFvWpVY",
  "key1": "3Ajyh7Rzgf8wpeHDVQkBkzD5waE9wncKf5k2NzRgaBHSKqjNLYddRE8qzRJe8rLXrDhoDauwZsCJGMsnztm7BzUB",
  "key2": "3qGrRuA2QpkFh9DMqUEBnQoTpFWD37rvoAjMgeF6nyLvzsRCygtsivMUnuypELiHeKAic1vP2q1FjRCJ5s3ggqSg",
  "key3": "CGhGAuV2QQg9Z6x4bkiqsDXWcK1ALMTQxPjKc75eYD4USpBpXEdut4VnPSf3RJbjHjEAtvjmV9Ki9ouGTw3nzts",
  "key4": "5CJ2yor9SVwMan97mmfjSAQSMD6PKQNbre2BThxW2HtEpFHphpL1QgJ3MvtdX3prFfDhvDcSiyzMhbvhrcCfUU9u",
  "key5": "4ifJKxqBMioL8mA7a4cAe69Nes5jZVem5rRTVCr4tdmpAx4LB752xw8R5LZzbsJaPguLaVKKeMNoizohSvzu7x53",
  "key6": "2258P4oXbmC988NBjGTxHAG2ieBs1FCfTAxgRZkAuBxwVyXMgR96ND9h5xwhudgTEHYM7zmKzkJ6khpyktwnLyay",
  "key7": "SY76LWkYPFmZQMJaUzpbykBcqD46Ac5xWAdSfAnT6cNZHAtuj5VVEkpU1ZJL4S5dM6L3qeVC6UFroXdqaZfuz9y",
  "key8": "5uDd2NPr9BjkhHrKiEQJ97FvfDhFNEQjuepHjXDkYm8fSvge6z6kj1mvdmQGpVnRYq6XuSK4pjH8mnd1bp49MsG9",
  "key9": "hWTrap2A3YVZHWCGhjRSVqsKv7KP93v5v7y4SzG4AcXBhsWup3KnVz7mQuopS8Z2y4ZbCy3CR8DtPHNn5PtAjd8",
  "key10": "3Ceg87ruUNPm77ErJCwg2kcfgmDEN8ghBniHnmPW3BuqBipWb13nmySQLv5mw3t9KwhTTDSSZcgf2uujm8PwvREC",
  "key11": "5Vjd8BpHVHFCwmzw1SgRSQdkVcPuxmVM3Z3rbh7w4ZQdMhaqXssjCsxyaYLXTzreiRrrgiskd4EdYLzhgeTR7CWP",
  "key12": "42kwdsCzcT5MqdJGAoCutG1mmQCBpWt9Szg3vuDfRr88G7f4VtjDDxvUdeJDT4yotb5gc3qVBc1FLMcchNuuWLub",
  "key13": "4qxnZXd9cCHhD2oq6hx9TYX9YCsfLarLFByajefTG9G7t3Scuv2orTtP9AZWcusV3FMNk4f5nivAKc93pnreciD7",
  "key14": "4FfhXBahdTjR8F77P8FmBD7UCYxbRNKaEdLjQkY9ALEioE9SU4Za7Xq2GsVizHdL4AeZ8SHN7sih5Rm8kgAWTf9F",
  "key15": "46rhcTzoZT9UE6kZ9iJ1McVsBf3mM4YXVSoTSBrfFSev7xe98R8umzrpSkeJKdJySiN1D5KyybYa7gwqDiYKJsST",
  "key16": "4rYQ23f7j8PmbWmKyXKnaWrk23h7tD8f6iLHNBmgBbJW1vxNaYUMLPtuMABW855HwizE5nC9B92hLQ2zCYcUGEAV",
  "key17": "2ANHP8YHTFDHU2oLDpvBZY5cCdYfeCtFs6R1mhw7259L8rz5vc2pAjw68rSCbAwfuxVHUMrNnYrgV51sbyVy9C1d",
  "key18": "5ygGxMmedNo6dJzRMyawHRPjG754ATKA6PTggeAnrbAJ6pppvrtZx2pV21JNjeDsbCuN5sXcjed2WkkpQyLkQVqo",
  "key19": "34RcrqLpmT6dQE1TbpHJoxTysCrFeujVuxnKCax39Boyz3wCgnvZzNkgxnoppfX4ddpUEoUZS96pVA71cWTNWHMU",
  "key20": "5oszEc8c7DVhABWsithot1NSxXDeTms5LZroWh3KhYb7hPYXK6ij6sHRk7MeuMoEPvaC66P5Y6CoSCExZQ9WgEGw",
  "key21": "4ypZ1nmRiUCeYVhJhqLKKfM2cr5SrCrnKB8BBkEhzaXySFPz8DqHa1a2GhQgURDwSJXjCaxGcLMMjUAVHYBS15kU",
  "key22": "26oyRyoBUnah17kBhtwcGzFoQHpaEhf9MXHx8kX7kBoCBUUwaRcMQzQNv9cBqGbxfyafwKHThXNBUB5aLC6KNgCT",
  "key23": "5cmKSaZWvhakRgviZtbVWMLUFkZ7pbxaqpwmFiFaaJA7jEsfgh6qhipAQKS44M6Dbr3i9f1tuKZxwPTLZatorGLS",
  "key24": "2uPMjp6EFwyuMocxoB5pTTccths3faoLm2kr1JTjiixrRgZHkySL3BnUL1vU9HEpzs9dHBQn3d3uxicubwCh1uo3",
  "key25": "5qFTXiYFiX91e7EsW6QgiVCo9HFYcmSKAYtuWPugA26cR2ytjKxaowBNo2fQNVHCdSz2z9sCZL9HjD96DBwbTZUw",
  "key26": "wzD3Do6LL58iN3PcAs3ayR5WBCKWhVNjv6cdZ7BBBFTwo5ku33GC4CuArQsR66dtTgUF86f4teNbQKistXkZdo4",
  "key27": "62CGMkZCeocwDv1HFH5ZN1r1FAK7YhJx1pBPAdUAZqjtqiYGiGudAntbDTndtCQCi6uiNUhuFiWbT7QEZjfb1unr",
  "key28": "3SfhBwyvYMiP68vujHHv3nPzYPHk1TdxzsAs2ui8A7t35twtTgUjQYBRMjibsgXMs5jbaA6QhmeHuN6bs7ac4hr9",
  "key29": "35e2YWFUcU4ofrU6hizvkrWQ87UQSwRsRyqGhCpJLXbKePPXtbLu7hyJPmWRNQgxL9byQ9L4yyrtAc8v9YWLv2Q6"
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
