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
    "2MMtiV4BKS2wJ6Zw5NyfZAc8Pc8CgJqUr9NLJkqGUvDeEaVxkKf3t9nWJhVjW3Z7gN2KUYtUTVbaBm4D3oeFAcLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xPRLroBkJN7ctVw2pgBbSffcR32X48u9G9Dw1PxEbLBza1zrvwYg81YPZVo9fc12cibDhJSHFaBLtdu4N9kABH",
  "key1": "4FrsEPfEkZH3RJZKJQf6UD1F6nXyWJ6ttNc4tRjEBJoWRvCjNr8K6BRirofJJ8UFEU7pQfNinjTzwaW62XNJfo3r",
  "key2": "GJzGWTfEcoKrz5VmnS2q3i1YpcRWRVt2AFokHw27n2v148RiNsDJFRFcwb1J341K19vEZE5EBFb6LFGUVgNSHeZ",
  "key3": "67k2H2gmTuGJLrss71uAwdimth2SKgL6iRvVYBzkkfCrCtwaCqJuUJMX8k9hFP3XYM966857csXFHT81pM2aw98d",
  "key4": "4ZZB9QGjNDApu3YzvELYkfBhbKbmAAUcAGz1AhdWVQPMpGf12cb2zB6Dn5nNuSQrDTn3mNeqV2z6MqGgivY41PvE",
  "key5": "28XbFgZmeSXFTtmCtNPd8m852aAJjrbbjAnaaDktrHon9JwtRLvhQhCqe87PGJUxWrAPoq3Uqko6MjHqv6sWaokN",
  "key6": "GLNh5JAhSPPSs7toGYTdEtj2XznUzQcsMdMNF6dRD99MBn9trNnMbftzpwdyj5KVgwYRNi2ho7jhYhjRgbQBKKa",
  "key7": "316bHyr95WHu1uDuMYFSyNFcY4FjDzn4x9Z6nopKPJMopiGEsqK9FPjx3Sv98AhJZmv2feByJGYwAYbb1mPEKuhG",
  "key8": "2g3uPhvCW6nRzidcRenJXTELhrqGrVV4YQzGqgqXMd72i4FqQKPr3BLsFUktSaYqJ8prZSnKKjMvpQTCtQeDGPoE",
  "key9": "2yH4YKMM5hZFWjonH7VbWfmMDULLbjG92YmpVwXDXGAhTBsiwFFVZXmXLYnTxF7ZSa7Ubqj1dPGd4X5GbkBvb3h9",
  "key10": "34WUn3AmhqDPZa65LXGnkrkuUZUDxuYN78rQ7QT2Sc9akMAmWsEFCdhH6j2pAWtMak7KQmopntJQFgjSP6aLefmz",
  "key11": "5QV16Gz7trMcBngh5GHevpsAXEn1NM2UCkUN4LFu4gA1uTicJ1SvudvvUJj8YrEsQ9BprLNjqj95AQ1oqysSLzrY",
  "key12": "3aUqbtxEawafhgV1mAWNszEUfcyKv7RnygpJaBY3sDgPDULq99Xp7tSZ9XcQQqweDJwWsa35WwzQokkdDzqvgGMe",
  "key13": "62Eqt7ki9SYkt86GzdQ54FsrTAXkALScGiKfbqCqmHHiAJQcC7BE1xHzBoDtFmHtDm17uZR6AgCBTH1yVBL1bQFD",
  "key14": "6WtBXpimfmmocNtFxKVdg3HVcbnuG24yqEEUxVh9DJfkw3iMnPvHPas9Zurb18WfG79GECTs8F5yRUzAFaAeX5E",
  "key15": "42zDV8A1sF3s6ogyNgftFyeT8AHBboZ4FW4mznc7CVUQwJmUrLVnW1mqmQPwpBNmCSNHyQJhEnyqmjP3BvDGKSng",
  "key16": "5cGEiZGuXiTLeyFR8kBiUxL7veYgHYzsLiaN9rQXcLafDdR3neE9jasWPv1BUwPZXMhQvrF9GiDUk7froj34bmo3",
  "key17": "5GREzUzctDNhuFPAV7d9Wfn9mbSCshG1AohCu66XzYbZuhGZRoMjaP9QcwP4dKMwVHiJL9PPkHarQkNKSgqtExtW",
  "key18": "4io1ZGkyTWXw8iHkb6DzwFtPeNppgWbR9MaRj7YWUTqom43s4DCdhFg1RhnBqKer3MZokghmWNJ7y8ixU2oNbYTr",
  "key19": "2JxDqE855Z4GwzVoFn67p95MpT8tPwRJ9pbrFdPSJ5UrQE25WHFzUAqmhEFPCAYLKk59Fz6UZynz8piUgnXQuApm",
  "key20": "4zGtmhUd4SD2b3vFssXYoX6bUMkf9ZvQzNaBKaLZYfVr1KtYJwuqgXerAqC8Agy91Lq1iK9QoKbS86MHuTrKsQB1",
  "key21": "tKMNR9Uz9UbNPdtQ9Xg4AVAuLPDeBvxLuDqAk9rJYeZLf5hkgbyDwn9kT3qpDbTHZ5dU2rGiSvnn6bzxkGecc9P",
  "key22": "6Mjp1qEWFhva35ZfDTJLuNygf8N96eFXm1R3gQ5Jrf16eitghBUq4BHEyKTusHCXZxwhV8pAKm2i3C1CLVksvne",
  "key23": "4adStRiyGTtGsJfSE7v928tLqNqegXLhkNU9YdNchgXGmgwmhzmbE5PzB61e713uns2SQ4Bf2RFNLem8SvsHthgb",
  "key24": "2uFRgTK7VNfH4abCvJdmGKftNhGMPhHvFR88N9bURatgeFJskzsGKy6ADK9erJCSbm3TTBdAxMUyhYHfzLDZkK1p",
  "key25": "49AJ4xd2gtwmpHiioqeHvGvKHMsiqj2HJxR67mMCsHpeXAdzn3xYUypmLYn2AZa3HFV6SyuDTjib3Qy1vBuizaxU",
  "key26": "2di1cwND8xLAmE2nzep9M1hCqj9Npok9jKWcFE22j35FSZBzcNN5hjyjKostVHMZKDUousuneitsnSGR8LMLYQ5u",
  "key27": "FkAgrBBpbmTUZ6fftv8kUizQLKeNV5BFsG6i935GRr7Ycfi3Udh531Yu1fBLk3xzVQJwBTfp122JLHDciNjoi8G",
  "key28": "Zue7CjnxGNtZZsMJKajkG3WPH2TBHqLxhj5gwbY12ga6Y6737u9ajooaZC8RLJ2pExt7yLcfNj1BzyUHJxpJtFG",
  "key29": "4rfQsrL1MxVB2hyE7vm4d3Zba34TZ1znqWnVvZXgVntx7dQMM3woTrewPyayE2MmVWbCAVjYyTQZS2D45xmfRNCZ",
  "key30": "cvxfYwzAraQwMiUEXNkkWXm7MkGCC51KhZVo9zuHWQhkWDrTwhJf9jjWuQC6QuWqMuWuAN2qzkEYd5XfBAbkbEb",
  "key31": "5DDPPfyhBcnpjf3ug7pc7YfhewEiA4GJhFzK6Ab6JghV5BZ5K3c3BYaTPr4ZNxbETaqf5HSvPRe6QRSMiBvd4kiS",
  "key32": "39BuNqyueeW3AVTWx2hNVjVq6M25CviStMAKvLRA2XbqE3kCVbacU8NuV26PGoscXCNAS2E88PSc6VrhCHFxFwQW",
  "key33": "2R7EDSXKSeyr79wt3Xv9sTS3zMWdv8rYNPRRLpziLD6qqK4R1o7qA4jkSjFRmPbR5tqyUMkZi5gd6yV7ewt8c9g7",
  "key34": "316guLwBychzDdSBRhRK9QrwFqwEDyDrfKNP8wSR8wN3gB2eV8ZG48xKdwSuLNRRiJzXRfeTvZnFc7W3XRkTU13R"
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
