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
    "5quTS9ZtTyterLTJkG4PhmewzL2eqMBZXUkeP77cdPzfnoXsYYwbvvyaW1D8NSWarbxQVJQAZ8eRZ6rmSVqirULj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwZGUPtNU29q1anSrPqPdVvB8oMUPzfU9SP3iK2wBAUdDG2XpAw2FqhKN7e18wyqNcPYa9KsVxhQrPyh8SHyvSA",
  "key1": "AKCTnL6YY8QZ8QhBoo7jz3wV598DTJeHf8tcraT9HtagziKBqwDdonQ3xM1SQ3vbKXkG9EuJ9U117mSmPHJArpZ",
  "key2": "abVAqSk6x6ECasyookkfmspNWyXCt8ymFmWG9j3xv5XFCfGXFNLRMYDDC5gwS4pkiTAXxQtiF3LcabRTReRZft7",
  "key3": "imsaZYAZz212pQcJTFVH6P8jQoFCs7tTZAtfcmRdeMSUu1h2f5xirh4hFr6QYbxvggxtMLfx9gTfQuxWrniyBoi",
  "key4": "5SF4QZGqGvLQRHue2Z7rZDh7PRzimmFbGCRVGKgs9GRBVaKXCxjLmkFLyRyxGdoQr3xkP168nKwDAsCtLVEm1h8D",
  "key5": "Cv64RkZ5KB59AXX1edUD32uoxE4eXUDRNmgaVTxV7KJoBb9SYnjbngSz91f1ARp8tc6Z3onbUdTdhNYt3343Ag9",
  "key6": "jBG5ULNaUe5goKmEoqw24RynVmQHWtbzqLKk7bHE1knzfRu46H5shJCLY8ZfAxATU45Lx1ASHz6aTniQLPFQo4h",
  "key7": "2b4xUTmBK84fXLKpsxt2jkYGAJQCS779X3caiDpCKRCpwqTygpubN7y1ceLxPRfx3ofJGLpunwctskZDm5nyCHq9",
  "key8": "4Wrr5XHvwi1guKqYPFZuv8GugaWC61SGiT93Kx6fVKAqL5c5AZDCtx6hKi4gvPUwqfuHvRFDmxUTA7BDjcagJBf8",
  "key9": "3HiwhKRbFLR2KN3M85PXpy7SQ7vbq9EcDEt8bsr2nWrT7NuPHXCpZTxsKhaWx6bWoFw79yrj8ddqi8ahrR17vPpQ",
  "key10": "36vQBs3XFiUH28zuZaG2Gtz9b938pLfAG1p8SBD6spuRUvmwdb723JK7PKSbpxMz911EZtynuXEF6LwzyF7QWj4p",
  "key11": "4EtNbDeLu8mKbEF4TL5Wfbean1JrcQ3riru1iCd9NgXBw5VqfLPJQWxDGrqWfNhXvexBFV2AJq9A4zQQAYvyqWYW",
  "key12": "3e8JkqVgqazBPdkz3Cdd5fuxNxUYZPAJZbBiekviugSzqafd3TVusbopVszEjFTX6UEFoZjWakGTa1EpHnH48Qwn",
  "key13": "2uhNHXLK34yAun9auDbFtjYrykUkLWQpHShcbC4S9axQwpQThoXuSNnQ3E2rPnK62Erfq7FLTbYeY6ASnpn85uYG",
  "key14": "5JyKTQXLA6poKwoidgZfNyYbP67bWM1cZV2JjAeL3GdtG6a7Xx1puLWRCRHssMCoHV7FFXvwuUyxHiQAEiGM9XcA",
  "key15": "hQRQX8ZUuqfJ1ewx6syeCio6Jrp4nDTmJ7sKQFrPcpBLdefcE43GCce8vJVcPqYeZk78odUcm6MjexfG3ecRjcm",
  "key16": "dNPBVsrUsJyajayQbqUU1XemTZCgHwjchw3wXNhmpUooArRZSRRV8YJc1tYMWBKeVuBqqEoxokxtbA7kW4Ly9AL",
  "key17": "4tLjp9AE8sb5uA2NkLghKJ7joLDyNEBbSRA6uKwoeCsGZ7KUczPkfcdkCrizrwM5bk16PKjRqb1HLhvseiFnBJTR",
  "key18": "4jpCRwPzVVHBUq1WVPx6HAq1WiGsbw67uz34DyG91wJ8bfivW3SbfKtq4Gvye7ht9o3SMMC25VHxveMgp4UBGBAN",
  "key19": "3LFBVzy8DrpKo8cKyFGUVmy3zEgwShsw51vjnNEJnghcTptvCHERjm9hCzRbzvxLxX8MQpNhBr3Vii1svZAwL1ew",
  "key20": "3uwEeaNhd5qtTyR2pn4ANCeVV9tQPsXMFDg8tFZoxEpos2foWp5kww8xRThPKLP2tbJkpJC5fhK9ZZXAPEzYBptj",
  "key21": "5UU6T6g7T5vohcNbpQfBoFqN2oM6CB4JmHFFJTBLc5wBMchyhuA63PVb8aEbd5WLUWnMtdHEqPxuFXqvanEt2yeU",
  "key22": "3k5Ja9YztogBvFMJNYdVqb8UjrP3VbAWXHePtJLU5Pb72P2QvrGQDRfWzjXhRA7BT5QyXLvtYqDRHoVhSuf7HJeu",
  "key23": "5S4DJdoA8XE3VGbyerEwq7A2JKCX7eZQFi7JWe1WyqYnoFCLhJDazWtS4bZdJczXeDrg5P8f5YfANFbbvT2eGTbi",
  "key24": "2j9hfcyFhfWMfs6kk8MFv2Hnoz8YHyP6ABpiXiR4LXgWnUc8CL18U6Jd1ynQRimRCeUXnWhSqRSYc6rn41gKyM8j",
  "key25": "5xCgjRqQkwPX6cwSfRRxbugjZvKWtfQHR54zUSDEiJzWUFybUhwGRryGihUSFifVzLHbnQEArSViFgj5ouXsHFim",
  "key26": "37qf7vmoazYUxHZqjtLQCZQSZQ8CL5iTpwGP82z2ZRVyL2znkpGbJKp5BUeVUcz9528RyrBa3ELac55PdwcXvnrw",
  "key27": "2WPLDkJKS1wLuNaNSAj8f9Ji9DMDGE59YAo7T8JHtumnoh2b7j2aDRsbLcfcgCzWz1STgSGGSEWxXNmrzby58vnT",
  "key28": "iKoA6gm2PDQ56C5rvKSeGUUQUCJ2WSGJ4GmecRzpLLfYSD47HJWjazki6GV4kLYpNPyDaACUNaofM5pAH6bkn6W",
  "key29": "3r6GpmdZzhMQf9FHVfKkRmuQKQpZ3d27WtqhUfuQ9S5QyjgUQSPngWft28Lt3DrELVQS6crMvps4yHYJhsqaa8e2",
  "key30": "4Z6kwiX3FDuLc4HAJhuRUYiPb7tSs9VLKXqdDYb7YquksVypT6uyHX54VW2Z9WLDSDBRPnWrdaoUpGVPzBNKRVGi",
  "key31": "5gbiSnPzdQbjPpqLfHe98N8hhVpLkh6sxsBzqTXWt8AA6YTD1xHNxDdeQufHd4LGEYfsrxLRhRbKT1fJhkCS2L2C",
  "key32": "2to72uMvF9gD2o14yvGjLVEg443KwcJeQEoPa34de8MNPub3VcqS41oPMondtUQFxsMZC8PEFLfSnmpVg3vEuDK3",
  "key33": "5ArbanzfAji5VaCYTgW3rDYwcJS5r97zJTJiWaHLxT9hBaxq5gDaxUz78LYAuJ6jNRyBgeS8ZFp4Q5bQkoFhXxeC",
  "key34": "pA6jjkadgTXkvp92Zm1bd22RomJyBTVL7TDuZ26qMKPzUVVcwbLnGDjAQx3ANLcfbTN5Q1BcnnyhVSwjH9CjCN9",
  "key35": "2wWxdmzZuGjM2EknYb73j22BowNd5dc1VXYaxqkaiELo2tr4hdcdxEbC6DmMSntveWdzqV4mxA3kodKc6wuv1Lwq"
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
