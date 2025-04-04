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
    "41MpCq1MMQEKjWpganGHAhMAzYmXmEMDMpKcpw1c4vwZm2X26AAmLLDFf6qrFi1j76vK1bb1dZHvDhmHRBns9WKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sukvc4pVzBpiCNyrXNmz9K7hDNieuUnb8qQf89sU6nPBAvGpJRkuhFb1ouov4E2DZwguAVp93WVcoAGzjXi5MdK",
  "key1": "3PBFVz7rtC2XNP761vc8HC5aQpiatN3JYEaMFGfPWTzWe4QRCmdMcPEXbwXVdVn3nR1rqXPfRcrFoGCfkjyfji2o",
  "key2": "GzsxJJuVA7gjHhvZKbrFhvVNtiCZkXYjysngrbPUNHpNpzYoYyo6wZMnsTkfZUd4DG8zQLhs8tQxMuxTzjuuJcX",
  "key3": "3ap2s752K1JRn41CuqYLc64Pig1swg6n9qLCscdcCEN17UyGiFGPJMJPiZoDpe9cfzkKHEVzNXQHKPw87q2ve8fm",
  "key4": "27Hy9EafAedbX9BbmSGd76j6EJStqghoNLGJTS4T4pYJnn8jSNHmAjC1ToALEVGQbChMj8ChyeXcyYpBN91XhiHR",
  "key5": "4st4jKcWvQRxuKH3MaRRASpvSnMAW2VLgzNDw6TmkdnExhWt6CD12igTzAjETwMSJuiAprrzoAbnwjxGurueMUT1",
  "key6": "3fi3KtrHxug292XSb7VPd3rJHbseZuVpsVkfQrBL6n65Nva5bNhYnL7BWN1yUknTPRDjNtdRBao9AarBNwEwMHaS",
  "key7": "2Pr61mTuhAL9y123RDpwCqYCHn9LoGwa29rNiJJdmceBFXfjumiffd252z9RgV6F7cqarmhjT8baNMaDhqk8SfQv",
  "key8": "3zbqq8Fp6EkQXUEJdDSxk9YQEzPxUH8grnHFuiLzz7uUK5oa3xQj27hnxsdvSW5v33Y2RQMhDMdx2ytzA8XNeVcu",
  "key9": "5e2TKnb8H3Dn6UTkwVQwN5vYQVyNespen5hg4ix9nzyZGbYeWWgeZycPgphQkaxeMXawdZYSgTmAsphQqSWAaP6e",
  "key10": "47nhrByU8Kv55meW3kxiFj7WaFUQR2hkTxYvQW3ohwwHw1rM9BaSXsf8PniUp7EKESF6HkRVrmiDXWdqHwPmtgEU",
  "key11": "47Jj8EgR2aLLwQuS1zLvfnCth6HPASRYnjURELz2eCNmiAZryWHvPfaTnx3CLP2ExhCGTHes1efkP5v38c4LRi4r",
  "key12": "uxMTFspuWpzrHDs9gqzf5XbjqRKmyKGmQy5zePzZnDNoK8xtP7nb21AL7SXh6K5yNjAiKLGw8QixZcgRK76ihAW",
  "key13": "3P8DNmDEVbBpT4hPvFduMLfySWqDqTiTbjc4m1up3jfLptwg6MfSgPkGdZ2cCXkvaYWz7Pw1mTcZpom9wfbVsL8B",
  "key14": "Y1FxbqKmpyTEMzG5Mv739YLFJZHbwbRbTyjP5kFW3hxTEFshM8emAF9rRGmDRfangfekFVciHSAWmV97u4bWnaB",
  "key15": "2MSRP4ybZASzRHmSyUAzRdBXLqBuMLiwRrdYpUujCjhdzrUyuhH6jRCtRhRQBrBrgTeLkJX2Jq36SYTdqnQ8sQfY",
  "key16": "LrRSV4vQ2yDfzCfQC1Lacphnp9MaWfUx1TMLtRzT2FATdUTHbBXu82BpKr8azY5m9bATAv3dQjyryKKdATBjnTE",
  "key17": "55YDmnmxnNPBwQMU5UGaLhfWk9PLJHBBazXN4SEbY6kUCg3ndMoks2P27WUqQAEDiF9LrKqcH4rme4uqqfXGdTRn",
  "key18": "56ir4uvbTbZcBQzQnQ9RRSB9gSNbj2ykeRgzu6jxAAYn6ok3kdCGgBM8vqhpqBv5AZKk8BBgRvoQk8nqr952yRnW",
  "key19": "533ezXuF6HeNfuFd4oTv2w9P55GjPhP6Dhmr3vzcyLNijgAi5itxZ9DtrV1PsfDqhDPDB5uPZ567siTjaSdhXaM8",
  "key20": "Cb3WMXaqREVuEsj2rSY7jGz7TXyiC81DaNFy6MCAnhcmJ1Y3zUmxXRP4ZoLPQ9w4G538UrJd4w9nUUE95jkL2Bt",
  "key21": "2wMwUUc6kAzuhrucCcA5nbPHtBz6UxzUAXrCjFoMU9Q8GGpctduRffZ6FCxvhAsTXuJtkM1TDirML1QCRGuruqMU",
  "key22": "5FA722ZUx45k7HfAUw3z5DkBjgySnbx2CnSUx7PeLpbMAG6TjAd1rocRqxH6NwitzQwwtrEe9pNus2C7WQnDEXpL",
  "key23": "3YeMKt4BBYXgrAZkQ1kyY79AHoFbHbgaLEQtCJxFDEdP3dwTPTG4fB78ogu1FM5ZTE3H7neRu5fQF7D66ZsRdEGU",
  "key24": "2c5KSisPSdUwTEwUfLaSVfAZnx3BxU56MFD2iy6oDpf2vQD9aj4ePxrATg3vXaoQuRHW2h5CsVEfx7bJjHQCSs6N",
  "key25": "4GnWErktqGeFDFKcf3bT6dyZdFnH1V86RTRJE8qe8bLpqTmNHzcBwaLh4MiJp3ruaC4Sy9HwfqGDxTyMhTRnDKz7",
  "key26": "4P6qas4WVi3m8yd4jnNkTQvehgnojMZx3xLdygTebaDTrvvpekLyJ3RkRmFNwGTnEEU4dynBr4ZHcNh8fkR2cEvL",
  "key27": "4oMdvoCzU8Q3DZZxTS4zPBqVdaZBg7BbnfmvvXQARi9RwysUcjb4uxgzGVDM52BjZeBNSM2p3nkeBm2gzMsx8Lpg",
  "key28": "3RQnPbqmao1vjRUBcArk6pP59UWAFsBhGymYK9xQipTfRMLzwumcSUDh9rZjmERArUxB1USRh22XfKinCyU7qJBe",
  "key29": "3LfitbTbPMdBMNwisLopJoGWVGhhT6PK2tFtFjNurJjZCHWVXqbJsJ7FLjofwiZUnU2C7KMoM9eu5L617XAkFPYZ",
  "key30": "517UF79hMNcFNfzQnZUvkJEFJJvD3m1MiV8CPdbax2bUpFimMHXbSDruwJACkbsmSjQx45BxbEr9Eg51afPF18Fp",
  "key31": "2YY9uwoeuw3a5fvfpd2TVkxY61BCzkvu1tjJeYddKy5v7tWncAWEb92vUSAMmqRAFbZ6HuT47nVQBfXycrrVTtPp"
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
