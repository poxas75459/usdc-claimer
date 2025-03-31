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
    "5q9s6zgbHVYMdBe2Bysw6tzPp5ZKSB6Ei996Z6gPwUQ6yBdnuybzEyjK1fdhNmzL3DzLGDFTwPogoi2WVbrMQbr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4VCRdvzLL1HSseg7ZDdqiGDdeWAmUmVa6g4T2TnPcxubHPx4S4jmSQR8GFRo3VybfJRHA3gacpA1SSAzjUpvGV",
  "key1": "QPBQzEc7F9M8bcUb1ut7YBozbawCg2rbnkzfpt5B65ZqnWWg2yAvfwsMAtVzdLWycT2hyd31X1zWQKJN13ttJ6F",
  "key2": "2JdmoxA7eKN3rN9AEB6MzfDHcs2UCefu88gGJqa515bBcnAXXVUoRXmSnHnpdbGsJQEWihTYkQ1bptqZwNCZbLQG",
  "key3": "2Vis7du5aTke3xHVL1JxtFgujxThoM7oPuHyFh4PjvPXSSrDcs3FpkPmtpworkLWsHT7pPfKvKrR3yw5WhzRq5fg",
  "key4": "4qG6ZTB5faah9EFTwsPwtm1J2GSN7AAGX3oEf3hMm3sb1p58PsSuPyPbaUWvt5vpZQDuqq1qWCcq1xZNcePJw5yV",
  "key5": "36MxPxsK7EnX1xFPkRGaKAKHDVj2UfFvYctiK9ki2byNtpRuDT2ewryXoYAGUDJMeZXit1o6rYgRA4pFwKaGv2nz",
  "key6": "62aCE9Prj56t1HeMszfKiu69DpFSXmwhzBexnkGZe3SUgvTzXdoQoyTL24FFXmsHeQLnMZnxd4FjWZXkTEGVCgsF",
  "key7": "3WY5Mm4CdVexwrU7Ky5snzr1ctqDSAatibQQTNbswf89UiJPTUaYb7L9Vwd7ARekh9fUPoq7vc8shzXCkdNFKmka",
  "key8": "4SYX9wdrQ9J7p7Tije9hDo6GCSNuhFQbpbE9ZKaR7Xb9Q9JCMvsBX1GoBUWEFZY6fcss4arRqECiHoBKZk5sGgFG",
  "key9": "2aA65WgFsVQ6vNAT7wEADMN8xFywAJSMdKwRubrWtE6FRzaSp4k1wiVax3FgH6KbCsM2pD5fRiY3n13Z4fvhZhaF",
  "key10": "5mW4y5bSydch1HJ6UtxKwdw8oqservfJGizEBGpNbd1dxm7esTCzt2Z9oRRvNM4Urd4E7qY8D8T9ZqEafyG6o2K4",
  "key11": "3tskpLvhoGncVQ9YeBhtAJiyc7f7AabKruXbaAYgZEzNfwVdvASxH254EuQ2pDsMAPXxr8xCbY6HrzQkKxo1xko6",
  "key12": "3p6DLTt8gRPxnZ4DAsXqzFkfeh7VjvwBvezC3psQPPAp1kntp4gKEp7HovJwbVDGGnJsyZBxTJ7wpLa3YnM4n7ck",
  "key13": "NR8kcvVsGxMQiWZZdPzxEocQ81M9eNeTBiNNJq83N15cNeMJHCJr5JbrnFfgVgXjEpYVJP9k4oNRLkLKWQpYDti",
  "key14": "3Tmh224DGYEybdwWvJ9JcY86gbkHqvUktQfvoEGwQow3RDTHxMAQXrw4wFiySRrwo3JYuKCsPWN29djXKaF9nKjc",
  "key15": "5nmiVVezgWMZryMN7HBudDRHpkSxXnRKGupPzJikX5RQDwja7zsrPVnku6ZqjGaCPNMLjCaKGddPGqVKBXbpag1U",
  "key16": "FBP5BEeSj1DPPvYHpFWzyQ8sJWt3g32fPa15vdLf9sWWt8TJyzYpb1Cm1kXZGq2YJ9JeveYbb9HUdcsdtE92Af5",
  "key17": "2wL4h1D9DE4VAU8AU8EubgDB7aLzucg81Cszuu9XveQLyCch1JFVSGmeubTFuTsMykrT6vxP7DUST9LZ3z8i6ycP",
  "key18": "2Fpq6EHHyoCrQZjZp3es5UfRv9cyHhZVPG6sVQaYgQGyxXzFymGWQTUtuyDFMFFiXKZmgsKZd6gRFs8AFWdatjFu",
  "key19": "2SVCuePVShSNeNG9iVsLn25F1Eyv2EpFPJVYwhjQydhyaJGLtKDoM2j81ibRMxdUxHqNz2RFb1QbQb4QdAuDCwNG",
  "key20": "273EXNeC82ucYSiNTXtSEji45g7Rmcy3AK9KzGkNEismtBGadqjZWtUtwS25z9Wtoy8sp9RwNUXESG6pECuRsNso",
  "key21": "22RGXqcvCR8x6zVZQ5tn6r6rwRrneC9YtGV3XSrHgEVMa2mQHDwyxA98zakdHwtxBHbkcRT4Q6jgjMobJ8FH1sEe",
  "key22": "2Vv6GqLt9J6f5Qq7qMjdu9tNukE7JaKBYcTFfgacQdxnzW2JyK7k1wpEQhfW9REVAZLi8WK3uLwgGhskjc5CUe2u",
  "key23": "j1iQ5rU5e23sK8xuBEwGNrBdEkTtCBeimrPm3yn6CpTP7uwFGonjVhoyJCfkAJKWpZPPw7nsAssN3uyWFRa5v1D",
  "key24": "3Kw43GA6He3KdR3vteUi8eKTUeRTSLyYQDfrEmfBpaYKr2vniCrasw44KNAcserG9Pbp8SHEV1zc9M5KimpNFYM6",
  "key25": "UryTTwaHnePQmyJdxCWVz8o4YQ5gLz5jz33VvZgTXBVYApRa7eCwSc5SdhKXquot71oiHgu4TQ8KnChfdmVcbc7",
  "key26": "3HnESL7QggrksQ59JxJateetm31YQufJhXX71KcVd2bzfBE97v92xDeGPsVUJr4SKZxy8ekexpvnHbTmkpZHWhWa"
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
