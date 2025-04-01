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
    "jirQrJLwtrgoRAMy3yNDWXV2KKg6hfGDAh4S6jgo1zpg9cfqjXYzd2pbaAf87vBDdnzc7uPou21k3ucWHXhm46p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gevmqLFAdxmYkPaLoTDq2dR6mXZAzxdJkB1qoMVD47y2YR9Niuy19wdaBCUKjaJZhfvbH152d97opouPokN8gdg",
  "key1": "6oQEr7GT5EzKVWm5as16LDdPR2M5SB1NURmNGon7tdUMNxipxtsvMAUHVnreN5yZJsqjKUcAy2JFqgMvQFSyxQD",
  "key2": "3YHF4yMXgxmMHC3V3uzgkYwMdKFYrXqKfcei9Wyf7A1Eh7eYwjWNU8DaynhszG311q5iiD1RbomKdbNXYzRHP4vm",
  "key3": "5rdtwXrVdDDTpkGC9GKdrQ8QXuDJB11BEt7v4xb14vvKBqnP2DTJBp3Ay3e2Fax7vnWvuV5YJuXqg9kkpZFirx8c",
  "key4": "hwHB7N6t1dxpn6SySgEcKC61NudSoCkkaJ9RDnsaWoxYG1gxCj2XvvZxxW3DaJjCgU96y6BjMw5CUhTU9Eto5Ac",
  "key5": "U5EFzZZiQfMLDxMb7uJKg4ui8CjPkEAuBge681snTGgr1ehkKPdFfTAC2A7ySnCHsEfUrvb5uVQgnJPEb2s23xn",
  "key6": "5KrJYuxseJ2Jq1T3hdwoyJFh133HABtqyZMkWhNJQ71kyvh3j8wF39aPjydZpDqfYCTZNRr3SKXk3erSULcV8osR",
  "key7": "2mXXshWjmukBNQwbN3T92rHjjNk3ajPLzeL4r9X63GEE68mvRqCazU68K8zxWhcpevpJawYxzHMUUPHDmt6X5xnx",
  "key8": "3eH7AwV29vhF76bXahU81sMoW7WrDW3VNuUA3ZekSLxhXnWfAAhmiv6RFv6bUwY63PbUfiNELBUhugjVCguRi5zx",
  "key9": "2BTioupFnYUCqnQyPEM18YJMiFxhTgh7WN1XhgJkc2LsKENMD7fBU1R6yZEXunrDz7UnijqMb59agbPh1VUixTUU",
  "key10": "2bMAML8959zxCSQxqCqtrsYuPsWiy6P4uyFJ2aXCTtKsEHhEnoeThKaqRoCPiUBD5kg47qn1r5fd2wsCbvSdACKS",
  "key11": "2M8bPZGZPzt4h4ySb7Z275zJXKKFggVhvYSSbGSr62eHbjZMGrefdAPccHEy2BxFN3fA6mEn2Hz8ZBCeirMrRjeD",
  "key12": "5kmEVwYRrdqkdhWDhu8Z6p5DmHd64SQ6MQPgDq7RbkbDHMCVEAgoEPJfuwP2i5owLdwfMjHEu747d1xUwnrW69ri",
  "key13": "5JP2EVBaqVRsztnDn6wMm4oqNBroMBnGKh6QUnSxuapcBxHSBD7dFYbFoegqutPtv8UbGb8AHAcfH3qWvcpZBcg1",
  "key14": "3adDYsnwYfPyF2sN8BSpj73ugUoa2Gy6qToVssjV7A76QJJStHw5MRtKXsZwGEFMZkfFWYLMx8SrWP8aFfJ8bqk4",
  "key15": "5nPCmrHQrVMteurcpU9pZt4mFQYHRcDKgSxCjF1fQdVQ5KHKDk4LnZA7j22GoMDJBwZDVJQC9HqnnWtsd4iSaH2F",
  "key16": "3ivJ1VGHPR5CwqUQ8ujQRVK45PUyXgP3JnRbGhFM8FkF1kWuRZyc4s5XSpi5SczT61frM3PueGr1VHTLP4SGfpmu",
  "key17": "3HndgdaDVufphqdKaSeUYV5N6iHjuuBd29XhQ8CapLJCRxwsHFAxWePGJ8Y5h9ZfF7Ji7bcdTWTqTuXaevWWmEqx",
  "key18": "3vUwTdhYvmfLSRzcwmDuy4RUUj1nPsMoT6Z9F7kHUVJCeFEnGEfqXd73AwLCzkq2gQKTNTAjQC3kGNWHDrRPcp69",
  "key19": "5pQSKTo7yX2mPMoJXV5fCpcRJk5HfuqHX1FjUWQudsmYhJE4ze59fF4L2XDtC4geHznJt23sLwWeXyLyxyiXF1fn",
  "key20": "5bAEj4F9jB2X3YJUZeGTaw8fYQZU53tqv8bUTwHoxURboYwWNJMAVD8iYh9CTquXnQz2Fk48HReUrT74cVpWzyy1",
  "key21": "3uEW2wxtHzEuextAdnc3AcbCWgHJMSnviy5oY9X8Qkbwmr8uMeev2A5x6tdQabRb5x1a8L8ZAS664Ayu3sLQ6Ayf",
  "key22": "4apiD9Yx5xPXULJcf7NEziCRM2bvhtSgfUXrpJduh4uKQjkAuY1WfXeSfisVsZwDVUFp4G4z3Q7hQ21T3K8V7ZTD",
  "key23": "2fqtnBv62wBQ27yzLzY2dAi5VG2DdmRxB76C9ffzXRd4UXJisbqP27LrVBxDsFHF9GLDifUbSU9hwwbQzxHaSDBB",
  "key24": "3x8qyUXzBtgaiGZLhkHAkHcq3Dh2N3QmSshzFPRK5JJoVetywrxUbk9YV4kE4qsin6HzHGkvA7niPgGyecfWV9dp",
  "key25": "3hxw4wsp8VMoeKwF9nNFHsXoiuaSFMuorHnJciRwE1i1Vd4aLDSCD24BG5LvhuJenoghmbLcgDVRz2PfF8Z5mXJB",
  "key26": "2PPxwubzKJb5xuoxMGCyKafgnGRWjcVtHDyC2g3Bwjk22d8oUSAM1r6vpniJTzcGsue8mV6gQtGCHHxukAHKS5h8",
  "key27": "4Z9ypfDBbueBGgFXkZ1n1LnYm19RKd1rjj3cJhHiL2S6WQKjqWEGwquuCk92A6sLPZCYR516bry1yJsLdGsSSRUF",
  "key28": "5UKbxzGbbcmJeVDBKz9sERws37d6DaeUQqtVowMPLPLmn4CJawFEkkSAJVf78wu5oTq3gESsCbSam628UJ2UGvzZ"
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
