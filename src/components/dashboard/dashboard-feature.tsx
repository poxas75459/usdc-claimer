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
    "5aLzRBnAX1oFd6qz3GwBcWBHLmuYXo7epdx9erBSdXaP4oRaJcHhZPwsZQ29weAvZQvvhaDZN7Vm7efsgZGd3KQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LULTiHPBYN7R1Uwe3vcGVi3qLjj73PE9jHQKLKoz8qYXSGZfTRCaKh2rBRUvhmqcsnuqAvWjdgueSDxKyp1rDh8",
  "key1": "64BvBmxRpKGr15tUmwxvtdE7SWDk6oNJCvbSJkYet6gAM9Mosr5tKrnQZDwLj7rHVVaZwfmQAr3HfdcXt7DdSKN",
  "key2": "5KMyGrErQiNwaepCdziL55hz9tLc6gRv9LUxaLMG1kYHF8cMkHBjxtWPeTcFxc16qjqjFz2JK7N3jTewPoeskEwx",
  "key3": "5p2tDxtQcKj8JGepXU5wTjzEsyzvyGNwUsCkSJutos9Pi2W5bqvFpSWWtJQtnkucHcAizM9v7Z7d3rwuKzX3e761",
  "key4": "5ThAcV2j6HYVAqTjxquvqWdf59T7x5sucCrQhCczPgyZzmPPvTCSfmdtMW2Mp6miJJMUQNoYTVmk6ysTEnTrdRMe",
  "key5": "4rPbo2VGAJwjDPXcNuqehDZg7SPXcx4GnyweVq5hQPkw48gfozdNXCV6GYxnYSH6GZ13UQupL98NZZr3t6eEmEMS",
  "key6": "4XZCdPRJZkJCpLbrRu8i6Dnsm45pybtgzDRUQyTWL2JLwKF4xCpPRRnPPK3qwqbgEqvtcS5pGUq7vQeoxLsJmuvs",
  "key7": "3LVZsW1Edk6zFvLr6mfLndjqBaymQMceen3UTiYYakWzq7Q52PctVBiiE6BDZEJPRmbvNJLap2uhQq9mEXRqjvXt",
  "key8": "3JDjcJXwcFrXvbYfVgxMScDXNsAhiZGrrPg3BTU8ack92PXUU1ewMgdMx7pxvuXE8b59aYnj7NAcnmKJ4e4WdZdn",
  "key9": "5EPVuocAEooRoYhfsbNhEMc7KMF6NhHsvCwVghJbVa6L4iL1M7wfe3qnjRYNxUtnc18GuVLdCcbgeqNJKsRr8Hcp",
  "key10": "5eDBg6hcQ4FVZijTNoEf8t7bxNnCXU5CLYSrKCuoHKAnjXE5vqTm3Wxm1aMD79efDGtgH875yyFj9zaMSVXxdDwt",
  "key11": "3gpnjWvcW1qvXpufb45rNYWdNWnt9JmPrGQ2RRCc92XBN2bZTyHDkvtUWV87H9PajskHEm3eJ3iVWwWLeBygHPQu",
  "key12": "5UK6CpEMw5z2CpGV2r8K9hALZRW6nXVM3uvADHVPKGdbLSrFtywuZbvcTbr6oTr4KmSzEJQQ2Hf8LHeDqyqHp7cx",
  "key13": "4nWrRYYLTe3kVC3eEAafyUcfcdAYgUFWrPpy3UMTszokmzUPYkdKcyLXyLiEeYpeLSyk4SmJkGTw8iLEM6qD94Pn",
  "key14": "63WKPUGxtGJdPmbfjmdGxaZhLbGCvUp9z8gPX2oTBWFVNVszo7MvwJ7hQZi2HxLPt9f6Zdd2y65zmH7RwEwUFhLh",
  "key15": "5X8SfDWYfzTrQmDuiKmfnivQmGj4HSmFDBKCKAuss9jDY3tSF7ZQSPN69qpxppeR37ACLaiW5KrSaVJ4TBoZHoGM",
  "key16": "41qS7aizWcR4MQrrNeVsncAwv1aHg27dm7QcD5mJWH2b5qdHeFUVyfwv33UiAqPCL86SQ4N28A5awpTKFxY27nqS",
  "key17": "2esJhGJhVccgv5CtE8BoViMWsyjTHZEookVJpQPqCTcmAX5o2t8Zf1F51owhtmMLS8pCcts6Lk4TgJMCw7BMRGQ5",
  "key18": "5d6W34bx544C2M8XRv1LpYC6zxSYvppoZDe7y9hnrgucdYc6HFjDNvPxiiGmLh8fDKPfKxBSQReGLp3mmQWWHoXN",
  "key19": "51UjJXk4qQso81ax3iiRthLdWjescRo2p5HwESH78urc8FJhNhwyYSfWf8dMyDYfWv4zEog2fryhjQMW3dcF5HU1",
  "key20": "4iXDEcBuUnGzr44hLwXcLZYeAqA5xogvY4bP1ACXQ1WDww2YQJQEAydx5ng7k64H8MWJDK25UzEAknDEiHD8o2gy",
  "key21": "2Dsvnjgf8We51GpdXaHTBGrQrasiFzFhYbHS8jxZzMMg9MKFihqp8Dae7nrrZ1keR2ZGNueXFrc96TT53oGqhftU",
  "key22": "2h63Lp1PAwvdw3hsNfMYxuALcBziJYDvR6CcYZZw2AFp1G3tcr31nKMVhUj1M1xsSRBKitjAb1H7rwUgKGa3Eo1X",
  "key23": "xD11yRp8cCuKsDYJXuZMWMWePgvVrEK9LB6rfGD6MMWQ57yH2gAWZmhbUcgUAa1bU2JuudoXiV1tPF6TMmax4mB",
  "key24": "UXMbMfXNtaaBnmPRNFSyjzB9Mv7sh5BN6qCH3xG3gKWre4BudqRpaqpqNW2xEhtqd85LJc4pSPwSk47bnLp8KXA",
  "key25": "5iDPubrztQRkFVFDw3c3kEtc3VhWQGrrLxpQijj2uMR3nxMRJzPAz4DuETNYAHxBLEbr9sfFEZqSwDPtddXHJn4i",
  "key26": "2gkweZkUQ6kpvy3CetL55Nq3Kb2FVVrw6H2oqLCnfayJD1ELVjVkHNv1z9em6RHwcQ7NwDLZUW9TnCrVp4gegvCG",
  "key27": "5MxSHb48ckeFKDiFtkiyFceFApNxpw9CHskiFZEM4ftFiwZe9aE1CSTproHJikkoj13rjCfGeJ2pFCCLzcSN4YpF",
  "key28": "239gs6gqX7xwiKvcaMv9v9Fu4JEidtAry5VhYuE9fFVfs93rDFpwDXLxwTUGXneT7sXCwoApaTEcW9xa5YKTGF9T",
  "key29": "2hnx2SkXs6WeTHYsYh5GurVBqEyX5YrwWHpZL5891QCCRPgE1iS5NsSfaMRz34ULCn6tu81M8JrmAHYN5u1Fjfmt",
  "key30": "2KMMgs8g3L3BNCKxTfpH2DHdT2gipx1UEwMpo4Z9J6PeLvTT4EgMUsqxESvWAP94QSVU2gdFrM55ZUmKvFVfXpD",
  "key31": "kRdLYtfxft9GsrLFSGMLfXZkrisF6LuhZLoFpjobvmpbgWiXfTSDHDzjb3UU7oPMFxZA3ia48aGdeTsFMgkvJ1w",
  "key32": "4fR3hNPuGtGeJ43KT3ighhnYaWgC3M6ZCakAe67jKAh2CYFMWqRfmYMfSar9s1n1G3UHwch1dq27eB9giuLomJXZ",
  "key33": "w7nzfqASrZAZMYn4BLtnGZgYeo8zLuxK9AJwsfbYrLJR32FPdY18gZgu3v2ebS9EaCW2ESkPwhjsnpBYTRFCnq4"
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
