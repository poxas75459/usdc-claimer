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
    "4jEkVDcWt5SWqsDmn2GtBiB21QAy9KdmXV1keVzFxnAFoqe1PeYLBjWeGQzyB1EcZX7QiJr9rn1pce7iTRmeVDgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysMPwHTvU34rgs4KFQfgFH4P2LMPweRc4u4Dndz7Q876ursFzoRh7wRE8LVLs3tVqx4sc5i6VPp9PtJ6kA1BzMx",
  "key1": "2oEM6stzsFNFwqbu3YjRWNXSQzDT9fdXDhZXt8fFrnsbd1UWwPJjTWMiyZn59xVD9qEsERTgrrHpjZ73jgCXsf1v",
  "key2": "5D8ybbcw3ii4bDnYM7pZsTx1WtTUYwSw7WS1Xg8GPXQeKHMGXAovpC6N5ptEG7sqN4L2dRxwwJ7RyCTF3jeGs2VD",
  "key3": "25d3CibkzFLaotat2zW8PBp77U5jY7LwZsFncWEDTUGBPFdnfutyu5U1yngJu8Jm3RSwaNZHswMGRhGHKJC6i4Hi",
  "key4": "3ZgF7eca8NT6kCgstp4oZKu4ximwjJ4yBThrSRHU7LopDcw9T53Jyjgzpnu3vnY7zcmaeUSBwYgqixdQaPD9BL7Z",
  "key5": "62wg3yEMrxApnAQHyFAUFf81xrYxHS2Bh6vWoCrqp7VncNo77TaQxrZdX6PuE6yCYmjShM1AFhuZ56EmBDrFWQBy",
  "key6": "5sNApzBStEdnVBRk3ABZvasdp1Z5MJ1KqZNmdLrLhMJoxA5c4bUnBNb4qSmKqo4SeViE11Swhu1DqWjb7d8HoHtH",
  "key7": "2yUp3ya35VznwkyBoLgxevxrmjMpBJCLBttkj5eWKdhckuT7291pz2EwD5VfqZhS4mzob5L6Bp6ZYUT8HFvUPvr9",
  "key8": "4LgYd8KroFSrLSZfMfctv2fYzCQzUtrTXyrSVa9v5QZLvfXXbMkSj1JXHVAmBgmKd6AnWcTA4L42GFZE61mgTVgy",
  "key9": "5SJcrPqTnwAMpqdXGev4BzTQYiyKJRpr8CKLLgZCetmswtxhsHmHY67qnqY5mEn52vVcsa91bC6bPbWHy64vkMrr",
  "key10": "ckwjqTwyh9w4xiKrkqgYvefRSsku2fu6YMoRRo58RikSRDB4xuTPPfNLBzniDzJSX8u5ccBiLcR8J6mhiy4QE2j",
  "key11": "66ZTqgNPq7qZMCj3bxYhQMoiGQRZjzkKYvPMi4xqGMT1hMNNvvDDLuS5yvEWKeJ3sHMuF2oYfyyVQgKXidchm6Si",
  "key12": "2Hz1Gj27rcjkSW5vDPeEKs1frh8eUvQ35qtn3CB2a1xGd4QSHUW16hSemNPm8xQph15opVShwzvFFBcb5F1aWyBj",
  "key13": "4yDTpB1mWwnDns5zfoGrsWeyCnix9WsGZcxxUauGgrvw5DpEb63b9yqstuwXLRKaEG8F4gQqLqqZw1S67jENAK5q",
  "key14": "2t861F3NoXVsVsSCvQKBZiEnQU5hhV5EeA4BWCV8LhHYB1P8rY2RE7NswgAbC1dAzwzwUKSYaTan2qrACRiou4UC",
  "key15": "52NuL1gmxSVftTqGras5JZXLBD3Va5dsy82ABCneATY8zT1dXznB5ijFoVVme4HddxH4bZKcxd1cs2jSLaerA6LK",
  "key16": "2b9waaDMpJYH2hz8jaiVE4xQH2NEGXUDXGkiiyzCVzndvgE7e6ZLLazmFcxF3gUvfQJA4tCa4gzAVw9mCXU67fW6",
  "key17": "36mP7wYNKhbNDVcnUMw5ZDzVStKbMc8cR9DXkMyXXg1beubz8zuzv9zFNKt3QsC6FTwYnbvsB744SBXCy2Y3GNGg",
  "key18": "3RCg7GFZUmiHA4RsGbP8eiuwdeJj4i1EQrhcg7CGuaW4mo9N9eUKnhFJBrVLvQLrQYfusV7PN51PE4LFqbTonG15",
  "key19": "55h4zsGcSELKpbYnmt3cNnhXeVUpXMsU9BBrmDLANcCvx1r1tBR8KP8qa3Rja5NKCHt4PgehQY7kte3wgxk68Qft",
  "key20": "4bXSVezBS7NJSGStd9wehdmEtF9E8HVdBiYpZDjCQRazmoBJTGkajEg7ADfpEnjZuT4bSfqWeTPAWtNaSoX3cJ3u",
  "key21": "5UMtwUmkY9MDKYDXG47uZ47sRYGmvhbCJMWdMQ3N4BRA6hGW74g9UPEjRHsrZrm7Z28TBpttQwCmFvRhKTYDvwLd",
  "key22": "4zBaBF44vy3mwGpKg8VD5iMBt1EHCRjaQXQ7TGtzPK4Ejm1TjNvkapXfX9jxJEwFU4bYntnngkGcY3wZQTjYmEMx",
  "key23": "2CvXBAqaSVKDpeuwLzV2YAv8YBUR6WEx7d1Q354hUE2YBLLMuHDKT5MTz7ovApSj2mvV6ifmzbVVJqkfFSnRm1T4",
  "key24": "5XqzAZeQxaKhQ3RkDeDN3Vg9RuCiwf95LBBhF24hxxTFMd1dTgsitNF9JQhU29t8eg6WeVtswk7js5hAWcJFKFFx",
  "key25": "2D14mRLWNMn6oP6Tzaz1dCybmXzaWcqi2a8bTBFDPLsAGBWqH7jRd7kvLffRM7taxSJfs9Ad5EpMgZy1azpGRoP2",
  "key26": "51vq1NTs8ZURVnB7qhvfCVvmUwZbVMGieiubXinUE6DE5CJ443Yf7fPRcbNPTucKNBZu6UoVE8hVjQ2jRdvsnteL",
  "key27": "42YsEMFZtnH4pLCb7yUTLrU7cwEmRcQfaRP3cqQFSYrYpGjbejgpu1b4L7TP69CETLt4Ja5aFjMPzbezL9iaKrUs",
  "key28": "2Cctyh17jZuQwzgkPskF9X4Z7r7cLBb7YLJTNc57tYvhdkV6gMmwo4BrqKsavnx4QrCLWro6o5F1M7UQXnMwEwLW",
  "key29": "3Rk8XnvQdf66zPCUo62DTQUDfPFMa3RAs21bMnwW1Tbqk3YshaLFZo8jHT88yuXdUmr6g6kE7JGCsvhXoLPZbXf8",
  "key30": "2s2JR9fDHBTJ6x4xuPFJ1xvEkSXN3yoeoGPprWd9ftCg8uKonYsnK5q1Qz64VxWrVi65KaMJbm1dd7roLnR9yCJB",
  "key31": "2bFmuJpfXvYNoRSdPrypAoi9pVwhn3bwYpGGJ8GinmtxN1Ez4erJP14epmAsDUbFbvL1fkCec3i1fWAUFPRur7Gu",
  "key32": "3NskcUtGeGGFfCcUYkRdRCXC3fg8YSdigWhGXb9CGc436NavLwVQtHqJsJ8TRYt19uWniYDd1dLiNYSKFgDivsbx",
  "key33": "36Y8CX7smYrtUf3StmiPX2wGAPjtynrnXg5aDFoUPq2qM26nEcmZAHbJ8qnra2nQc2ugCaM8HpNdmAkgco9ndkgH",
  "key34": "XmdFaGudkMZdo2JAJgBHsQPgWb91fhLSX5JMoGsYSw7qcqfRqPGPp2yS1P7DJpEE8bxYHwCrXX4iYgrHSD8xUgg",
  "key35": "5vFdSQaofwhym12qQFKWzrmzcyRioJfqR58MXSQG2iQVwGeyFD3rdUtDmGUUFsy85RRyhhMvnssCuome582eA6vQ",
  "key36": "34UrpPvSGYC15TB6Mk8BrxX7xxrwpN6FZz9wRav5x3yz4NYocKBbACdeByuzfhc7stjKPDfAQuAuY1dKZEHeHt1H",
  "key37": "41FMHYH9xNxqR4J2yTuccCeuJPjfMcE2qZea9bJBJhfSfjU1CvwbdsimrL1AWbpiT2Puo1iVbLiV4QqEWqAM7mxb",
  "key38": "kRy9G2q15Y9B6qMAmyeiBstGFNQ35YmQLnxUUXXqndFUgkoczpG87226MwKykBpEtajbhyKQme7c67x1UWuSi68"
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
