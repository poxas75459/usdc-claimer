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
    "2iyDWyFMVdvRncsQQmPfUACwu7jouiKJqpD2rmD3QBUSEbEhSngJp26j5pWqAxsNXqpMyrPusDUspQVyNA6bhqtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4HnTRuxq5TXw7gfpL9PQ1fxnki6RyeHsgKhV1KT7LwsPGoRq5GDE1mi9NEQRw7ph4KK5wP2aZH8XkYW2Xe6s41",
  "key1": "3a8W774iduUe5SQ8LRcG3Hfu8FP9HKYuX9dQLeycVqJgD1grfqbwyokJnZxsjyToULt7Yi7orhVrVBdPtWJceQK8",
  "key2": "5cZscKRazFFGB4QW5sQVHUGxCRQ3qB2CsPfuTBFMpiWMcPP6jkNcnbkbnpSGJddnPWqNHHxumkjjuFt6maNwBro2",
  "key3": "Sp42DBmQKzEBn35qVvfDqqbqz3PRkZyVDefmdn71WHfwf1m3cxWTetjyseGBkhKeUoiWrAPPk7vrxmTZ7x4dPHJ",
  "key4": "SXy3V2VrzRtafNvKfWtEnGVoNWTFhwzwf1Rk5AMBtAe844TsNvp33qkRtcZZRR5sWxEP1VtaKcn9fELMS8GCYRB",
  "key5": "2y6VsmJzffjr7oaZ6siiyhfwLphbCe2itRUqDqN4BVeC3qsCU59BdeH2tJcip2MYDe9tgwga8qf1vLGTsBSFUK2E",
  "key6": "2C9cRzNrv1YqnxKpciFwZJZHm1Rb9ZVYdZyL5sqKgrmB48RbLeDZ8YoWXrBCHgQoVT9BvdqjLcBxRXNVG8gNAcpB",
  "key7": "2phw4hebiD3kuAMTvvsnzTKSaU9cp8ZsmnXpfMPVzaCH8htgEAKnSCUjiXiCEtJRLgHBL2pWfTSvpw2WS15jbELB",
  "key8": "3br5JxTAf9QB3pXyauDx3ZQpwPtSXhz7JEqV6Q1tskncpET2P2jVsGFMWVGC2VMMnKT6pPXFtRi5uL3ZVJ554y1G",
  "key9": "3ctEMBsC7oLnwV5upEakeFNyPt76WUdvDKBKCHxnqHVBJmZ1Bs7472LVQgUPiYR6X4EM4wwTVP2gqSteGw6SShg3",
  "key10": "2xSCLvfvayurMdDqMPKk2LT9bGMNj3K16WbVcPGwTDHser2vh98vjnLwWcHwsVj1mNNdxzikACGNxFbLeoGZEPYJ",
  "key11": "2feStF7hTyNbwexHQziEZbn6VfZpnUSjMMyEPRJ7VqhkqnY2eKcQSUyHPfkcUMM7zpEjBHLDVNdUKvo2rXo9egGB",
  "key12": "4SvxCgpCQQLdQKQDwJK1jZbXMRTCcLe95FsuovZq6ojqh4ZNohd9ZStS5gxmnYnvRdo9vYdqXYX1MaUfYYaouafn",
  "key13": "G5uayVnoqTjCuJxEtPnr4SM8QxBZ6nh185B3T9ajqnPEfJDFdd21zknBQ8DJFMq9qkGZPqGbeufpbEHvaypd1A6",
  "key14": "47dFU1u2eabgymkBwk5w1tompR2iKAce8aVEoeKBKGGjuXzSbjUsx7mn6wBtfkAY3FtDrXeu35SimL7iPbdggtHp",
  "key15": "5AW8GYK954wBA5dCFePaFHwbuuUJSgg4UV918ra6Yu3DeRc8aBVoeEKitZNCfcBorea3GntmkoBCKivu5WbrPtxa",
  "key16": "2m5DstQD7rCCLcUpoNVHKebeUHg4W3As7TVtXJJdsYUpS1K67AFmsSfjVC8zh6DMCKegyuDNHiSpi7AsvB71iMKv",
  "key17": "5DmKKmXxgzbHW9wZNm2HHX19b9SuKpPda43ck7XG6ciw9mj79AbHNJvauhSMeNHuQDKQ1X9nGUPdezWKgbyrnoP1",
  "key18": "5fnQnPexZT186uxUbRdt7FraNqzqkWC9wZvGkjDz2XFHu1jgPip6rX5xXjuWPCLffksfjSNdebnCXF1z6ofB1k6b",
  "key19": "r2qtF3s9Hw9dLaY4FFXBaBtiWDSYR6EAx3zZmDjjeLXGmY8W8qM95FAhoMthZrW8z3JJK1XjB3a61hSAS3qWsFr",
  "key20": "5QfKUeZUG5cmN4bmpFAokNzz2nZkBAZgfKQf8ggEVm2tAnrojVS2BFUWLffnFsvtsgmo58D3M8AXbtQotnsupedj",
  "key21": "U3HPuKV25PpZ9JFN3HHJphLwms64E32yyauYNxYREz1cSvYdAJGuZczfGXkDGrabgzi7n8GC5jPPdF9yAC2tusF",
  "key22": "2kRrCnptrYMaU5UnCQotFQFyKBLFeeqnRA9oL9tEVkBYWEno9Le68FQS7y6yRJNkgtnDJASat6qMUwan36vabMBU",
  "key23": "4iL5Y7z77d86JyPYVcWkkvT9tmgp2fTjXzy8HcCq8shXSTumfzHWnCaDxWNM45VbxgoYQ3vPGywuCjLLaF6AjzPT",
  "key24": "4T1ZL9SyKVYDadrnRWeQczzitu6ASjpT675qW7FyD6dDWLc6HjpH1PwVMi9USyRjmBGrFRyQrS6FzQmcbmjYfPqL",
  "key25": "8heZrevTUvCirAoum84o9CGZ2dooD9R3DQLcD1WMzJ5hcQu8MthngGTeZSmMyhUfsY5yhs3uY1M4uUN6zsVpfx3",
  "key26": "GiVL6xNVt2p59W2BmSw5pw9UkDKHyyF9nwjo4iXxtkwuqNHkz7F7aHn7fiwTZf1tzXWyqMc4rSyVdXUHq9dhkkY",
  "key27": "3eE3sFM3VUHL7UK3LbBc9rnYqUeRrRXJZ11cmi55PnDB1GQd8JnVjhiBKCn54zqw5vibuJNCUvjWt3q9496FiFTz",
  "key28": "3ESy4ewL4TnohkMdHCrW9Q2JzHi5NLgWvuEMaDPkB1SKQu9HfRw34DsHqJvd8PmxfVnbYGVG7h2FMJBWywgZAYuF",
  "key29": "3AUwEUAdeUgGmVBX8STidLhtKtErwurx1zzVZES8qwekbhRHybfYfs47F9tFSoG5LT8Cuyhn57gYWbuEiduzkqKk",
  "key30": "2dy9DAuPsnt9v4LzSuQJhtvjvQqvZd3yEHaCmVoqDL1aPB8Vp8HuviFKWmxRHA2gBas68k6QUz4xfczH8axvJXz4"
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
