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
    "3voSyZpKQAYoBGuVKdFVT4gQ3QrWKCcEYFxshkubAjQoiVWqB8agUY2QzfKNMY8HuJzCvUPiSEThPxwPAKxJGFJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2H21KacWRaFi56MMUqjK7HFeSrb4mx9AynPWQkyPWqJqz3ojtJuqyN5C9F7uMUza543Ysfa5SjCcU9cfavCwTG",
  "key1": "3yriMphuGbg629ESMKboq5AQhTKBMEQbdBrdeHSP9KfPW5MypTs96H2VJoFoCSqJuSYnsYkvrxUmHtJyEJE45B7x",
  "key2": "5vTtkaVBemJGKVwj4ZL3Vipk3bvQeXTVXhSHmrHQuwgGEoNuLNeasQGdxd9XbBhXbxZ3ma9Y1mLBfU3LBYqrgj2i",
  "key3": "4ke38hAzLJPosAeQr3TDfqtoPnaxLvoFum9p22fjtBEmGNPfjxNg5ohZ2RWhAUAkAPsqpUa8Bf6EDx9DvZzMhVF1",
  "key4": "4yMfcQ1SAhoSzKRmhvhHWS3Q9ND5R9HfRLDPyAU2PWWHjsiiWDf3dTtpswfQTZJJSu7fc1e7UD4zYNcWsHbJCAez",
  "key5": "3Wfyra96HC95zEhMaUsAxBgEVnKba2HExf2kQbXhRovyrNqmdQuyMBw6cLikPFeueQGKLi5qArBoGo9awfMCTHCg",
  "key6": "gBp8PADF13Fg6iYG1utxTvaq4i2a5R3rjLx61R5BefAbkaM8U6vYXwjRQKpLfR6zvPdguP4UZCfqxzSUx1cxMju",
  "key7": "4n5VHnupN4WJumbdR7VqeTUrCyBFoGsK3uJvVXDQsRqhMCtBCbt7nJZetfby2BQyatgvuvSvboDYn8BhVwUSUyZf",
  "key8": "5uaaALHHq6t1hpZ3CQyPvrfrAAVtuMu8dD231YEMhn2ULhhr89jGYjfgvH8P5VkAEPXomdYX3xQACS9zy44SGjQ3",
  "key9": "5h5GNNHpna7k5NKT9WtcPVaN13PnmKQVDbUGLdjaK38uf9h15H1aXWT4Ywimubsk7o8eiJyePnCVNyPjem14XsFZ",
  "key10": "5c5E4gxKgy467eNzKmZcPy727ARQHaTzmvj1WPsmy8bpe7bHb7BFZ9YDBx3YdKKWZUhiMhBL7sMbV8dznknmzZCF",
  "key11": "5YQpEeVN5ETfZbtasHkcgjcEhemcEm3E53dCqNpA2fTU3zyNF2TxP143HConpR5XfEh6fvK8Y8uzgTwvJC1Zhykz",
  "key12": "2YtJcAFpFwKj1ArdXUn3g11TWiYdEtcBFwra6ywW3d45LC9LAKWj4whoMSBMrbbtypPuipfFYrLgDF6r1MYtzkgA",
  "key13": "5zq5qaKo27gx6Ymx1pKE6YcK86LkciV2HXZEtBADcZgT2PQWLwmbV5mZ5s9yGQaq5JWrrSciXdy8nkef97spgMoP",
  "key14": "w9NPaq9SepYfUoqmUatjZP8gADvUgsEfbJmEhWe6UYGVWiEQyNGbcBYZZ5D8XMWZHVZqRWKNZ4y6X6ivhxiLU76",
  "key15": "i7EoM9S5vNAHAJ9hibQ4iwgABrzVtFiVaLhaPKwBmYR5QUxRUBorVaaqbc2164vLZaodZcHnKykAuKSr4uTvjQA",
  "key16": "5yJGHe1yDFfVADAg5bxAsFmUyeMjreid1yavnaEWEzuxphseDb7rUEiZRjyVViWohoatGT3ZP5Gj7HuZ4RkpkdzU",
  "key17": "2LjM5vkFVQSGedXSbYxN7WhuMDK3CkMG3cnGdFTLikWSMwkQqD7DZGGLFhtmk9TB1zpxasCVekMN3nUuC2YvDnQW",
  "key18": "DucygdcLQDQJ18yzMwuJ4oRmqqVX8RSzstYR8Dm23raLZTmPt2eLApYNtjipgU81UAZwAvTkp2sSNRB6sSKonho",
  "key19": "PNWw7DxR6Ah6SvtskfjyNGH8QPPsLdfqXRjj1jT3KPzr8wSGyyEPgAJRuDya1nN4N2DyXmw9SZ9vBHdxaW3HdAC",
  "key20": "4ECkZwgH9WVD48odxUM1rYL1PAChgKUXGts1WGVgpfHByUxyyHJ98ih7EgSA8SKHNWpS3K8w27ayE1Qzd5hcPcXx",
  "key21": "5at5uiLCSboCfwVehpYXM9yFtNnrqnS6DbwTBjCJpgLKuQxTs6bqzAUxUYKiXRr2SrUZouXLfHsjqoeMCVwFegi1",
  "key22": "3xAjtLYjrWe4U5Qdq2GoaGvT3W2QPXLG5NP3Lwcbc4z9jfVX9RApwhceqzy7KQ1cwxbRaframw9f9djqSB7RLmhE",
  "key23": "2cia6SrF5cJyB5R6ph5HWNGTbJwqeS592cmebWxyW19deGdm8a7hm1ayFAh4c2NcZjH3q676aKmV99C64HzPiXDe",
  "key24": "216jPVPN1ju9T4UMyunwaLMi8JWf9bg8s2Dk9jpp9P3sWprsUYrGdDCiC6Tf8yF19nqbXzurqTmBgh5H6U9WF4Yu",
  "key25": "2XPNwpeePeZmhee9psvvvTYWvZ2h18jiKWqaZbXPTn2LuKHSz9ywqRt1N676h2kJbnDp2RyL5HYQg2qvp5fGEjDu",
  "key26": "5YsJpawmGXias8AcpSJgKXrUKXWbedFWZNGafi7fjU4Q9HEoYLYpEPe82ELWkjUtqJAfY9JxBx9vgXPnm77wizwG",
  "key27": "3EjS84ipnqFcuMKNimDYSNMyaviyLHrNrEV9nfS95rW9KU7ZNaeXGBJYX2xR2DDVUaUPCf1fi9dskVF3LekyL9Kr",
  "key28": "38kfTL51wCoJnaVwcFD5aEuEw1ade3Yu1NXMdNJhTb5DVUynvs4QGLGExFfnG6MXr1DWkgFYvWmFpXuobbyCzHpr",
  "key29": "2XuEwthxvKhf5WQF3PZhiFFQvVhnfphREFY2iXVbxpsUCnMrXkewKNhZ4WaLSxaP6VuQwXXCXMrkBjhBS9cmBywG"
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
