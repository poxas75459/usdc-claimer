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
    "4QeXAVUYCHXeMPeuGR9mPBXyEJJ1qBEMoBGfMdj9CENhe3bJf6ZnHkgjCpVdriVEeV3Uevqe7ePpfJJghNUXzs94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PewYBdJM6AqSzo4DCWhUEWQ7w4MUMYg1wUC4bykt6AYGrsG9iAoWDPG77YSXiBnnNngbHX1wPAw8f5DB7zBrAmp",
  "key1": "5X57MSPc82RrvM47GKYcq8AbRrYMwCMvrnm3HnCLcAv1BKwvRy7TqSs17pRZLyMogH8aJ7RfsnroKD2Jgz1ecFaQ",
  "key2": "3T1N5LT74n4fopcJxsM89jxyVg5NUPpidm4PBSBWBqyGAuNdD6VtHobZWzN3PBrxAjsKTg5CAxiyHyrBzG4xd6Dg",
  "key3": "3TqZDYbMawvvzyUjFbS7odVnDed2yZpW1QtB16ovcP7Pv6J7VNBoJRUj8KmNk8vCm3ibcwThTa6VrbKeQdKyyHX2",
  "key4": "5c2JuBFhiZgZ7kGvK3bkhK74Csjm5edWE7w2z7noSGzXzMGUqCf86tqLtp7atJsUtWsiK69GKw8DGRbgynwffdcn",
  "key5": "2JJ9n9edM3DVaa1b5UDn7KdbwfRC74bWfD6fk8xgBa5wmjjsotewpcCSs8HvDXgDcMm8hSxJHTR7rrnbXWDU9Moq",
  "key6": "5fygcQSRBStTdX8paWMT8yTVBRsQo4vgaivmrDbc6Q8aeDcjZfDwFRfUvexhvNt3vWTZgU4DhqE5v4Dn4GhRmdr9",
  "key7": "H45tVc56AHX9aAMTXWo7ZFR8oKCYspBVj9AmfZzZUGdw1Z631Bw71Guhi5bDienN9DhqcPwEmv7wqaEsoEEj5hs",
  "key8": "2YnixQACdhTomiRWKxTiU3zcnFAdhjZRbR6XB47TnNiWYijCNB6iEgAwFFix6eJVcNTb3BwnimgNSiyuHt4FDRU4",
  "key9": "58MY25VwYAGf7tCe1ui4Z5ih7QgUfHJ3iRoCwq3iK5Y25BpBsh7baMLiMChxnvozPLAgdiDbncjnhTdJkQV6hYri",
  "key10": "fdiLJaDb2RnpjFu4HqTMyayWugZutvZsjby5sZpVpcstC9EJfikw2EmGTTFNjSSDj7T9aD3qZjBngDJ5jTRQYoE",
  "key11": "4oBftsEf6CPqDpDM7AdpKzVvTWmJswdnKvbPtxzUnkfrwfHYF54xroyCfjFt9WcCh5SqPSMSm9ioHZtuHfbGoHpn",
  "key12": "37ZYsUjNhDb1sUQXgk6Ytt4tKgNAPj7NTDTerSGSwNsKC8tSFWS1HrBHHYoh44Ub2q52UJXpF5SUNFHhc17b8XE5",
  "key13": "51DFumBD9QCozLSKYvGc5RTm3AnXX2BmnZfn9GxKiUXTAMex75peGyatAJwrXMUSLvu8dkoG6z4eLTpu8SDwSxr",
  "key14": "4RmaCE5XfcrF85jgZHENaCxAGm18wUmGtPKxeSakatAJDAPSVrzFLdS7ugRm7bUk8hADBPvH6FrdnMvBoVeJEmeG",
  "key15": "4bo7w88bKmPuBu4S2TFQ7LCDRghGN3FQn11GNhC9mzen67jEMcysA4BonC8pZzkKHfBYyZkjv1X2Uzh5ZXYXwzLS",
  "key16": "4hgbS8tKco3j9FJXXoTYMrfwAj3bDfzSRGWQnLg5NhvfmDuMS8FaAKqL7dEADBK539RYKAaYX3DFAN8B39kWH9Lf",
  "key17": "Cm7vyxmfP5C9Rtv8zoBFPmbKJAybB4pwavK9GHB9t7y8sudwiQ78mvECnGgYSbXZVfH3gmNDDRxFaj2U1WuWMTq",
  "key18": "64KUYWyaZJFVMV3HTV1YAr6KfviRUCPGso4Vs6kVdoyjpd7J4A5JfSdeSAtLUrWcjrBtsKLyWwcUZWx2vFqRj7BZ",
  "key19": "5yuWVSgfJEfvn4TbMPHeHnDRGoFDFuERjU8VCvRHQj2MpLzA437urb9rDDqyoRzWPyEp4zUEUCEUZkrHzicKwPs2",
  "key20": "2E3SCvzQwk839iBTM2dzKXahoqFwMN6q5hEtNcy1vtZoXQcvbtb4nmsbVoKW1BHwDYM2ph7gBppCUPdvr23ZpPHB",
  "key21": "3PRNnACfG8mN5aGD4i8oXiePXdqPqh6312fCzJDnNYhesLMtGJrCZNqFBn2qx9Ta51WanMBidxrjWmfuYh3hn59B",
  "key22": "2UBxmujMgrp7SpaBH73DuednoJFXm4ahZoMB7VZ18URdtuzr8EtcgCRjkncWBRo4C7LpDvtkwfxiyBcZuTuj99JS",
  "key23": "2nwD1sPKxtxjSm87DAP3EuQ1EXEYMpDN9SwbVPZ7gSEPknc6q5RyprwieDrBBqxe1cB7AhnyCLF9YKzwMkjHbNKW",
  "key24": "4y8X3obwwp2sZD28TEPH9TgqA6EZtFjiZUDMtzcpHX2crbqP5XCbm5VHopAGQaZQr6GRzuDdDF4d1iviJeEPH9Sf",
  "key25": "67kRhpbd9fk2fg6ZhBeU1mWBifF4VoNbHXpiDgZWGceLMFGEPQXcLtifMZ8b8f4WLJ6YsjRDe4bXwPssMR4BiAgs",
  "key26": "JEbDA2aEYNMzjc9MJzTNvKGRVeRFCaVoeg8rPaTb6iUWmcw5tLEKFA7jdgt2ndq8b1LhKLeL7nEnE7CrJcEsFkT",
  "key27": "4PvhkEtT5Bu5AMy73xpQPD1oaPDQvEGYeBFouqLxBDQmiwQGfQyhEXZ1Yz6VehdMqjupXuaLaKmJTQ4fG4pGjPLi",
  "key28": "3sZw3bwP78QF5ju1PZHeUX1P39dWyXz6RnbcApc7YsucYsBwQkWzSnuT3kFSq8G5qucYhwpT4Q1kuXkEbD1VrXp5",
  "key29": "KDsfZqxvdEkdjuUcXKERjDSGvAYgsDT7ydW5d4b1vqnNWxb48juSHGSDrHe5THY8yWok96HUiTmGF2bpTFytGnf",
  "key30": "3oN2PRiMPToDXJcXQHdazGVGdcjB5tA6aL84teF3cZRuNuhH27ifpoqqaYxXfj327b6Yyy8YErzccdfwuUr1PDFe",
  "key31": "7QLNau5EKLt2KcbQnEfqQemRKwxwzCvkd3CzWN8zMM4ekTPX76Ram3gYxPSqGMRaCFxdWwobjru664iWSSHZF1B",
  "key32": "2tiNhTMja6Ksxz9nKf8EmCDuLE5a6Go4MkR6Z64ahbtLDtJY9RpbMNfubRvwkXau7uqG9jYUg9X9hAZcxU7BEXVY",
  "key33": "hW3d2bUZNhYg3gBHi1RuyiSaPB6oNQPP8skz92qvenivfE1MvZceRNzLKyPMQ7kj42Tyi9XVm1qTu3pNQqCSYJq",
  "key34": "4sQzUbE8Mjik7weFH3BVmuZaMEiY31dsy37X72RpjLUaS4ryZqtKfEnioiTDmfCLyiBTyHZCp25iEAyWEc728B43",
  "key35": "2hpaVEUjP89ZWgoWQvpSoeyALgjzD5crLYWWxcvCnwY2eAqed4aErhtyrWGwNtL9ChZ7DbXgEADtAcgaLLSvsxTB",
  "key36": "2c2g1XmLp54jLNzSf9kgDEujF96agD3QpfUvD4uPGknGNhmKVaj16ydN61QJy8DuZVMAtCrGU6To3hn2XksTbjzQ",
  "key37": "5GT2WobWTUk1G9C1KKtpvWurgvVmUgFBJuu5NtraoenewPmu7etXUXXLQEqheMKJtASrfnWikm9j8dVex9swEq3F",
  "key38": "38tYEeWCG45fYEnQgE74iwiAUCp6sDaWWkmgRE6PvCrAL8rNgv7H8rhZgkTJr9Etrf1GJjei84KQbqQzaFhgkqsU",
  "key39": "4t3NPNj13EuuSCHVGNqJjCuJQeZtfhsa14v5PQUjgLn6keii9wo93JMUL3HsJ6NZfETVcAFwS4bccbLjMWh8yfg",
  "key40": "52xn79xXa9owwmvtZDkvtij41gCm4WYVvgH5HVnsDZegmrovwWbC5XrnXNtzWVjQCkRXpxGFhLzEjxpytjvdHSce",
  "key41": "545p6vYraUGA1U8kyD7o2oWm4MMfp1MyQuEV7MW5oeR7KZPPmxR7pBqNu7qtW8q35ruYVCg8SmPoZdH7DKexVcvc"
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
