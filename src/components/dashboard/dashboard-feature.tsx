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
    "5Ffma5ghg7L9EjxZkNZzkW96gM22YGBAo1jR8WDZzTPigEyQ56YUd7kUvva7X7ZiJ3ptc1F54Vsk5G56biTntqGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51r5RJgCLhbWPcczp5Jz7mX3MoaQN3rHe9zBcZNJhib7Fssy5257hqkebUkzmdQiEMYHR9wFPFREY11ZQ9x1mxwM",
  "key1": "5Pe94FF4XHdDPU2tqsHUwtY9Xz8vJjosoWwayvEJbtN2Xa2kzzUobFUNpC6bV1d9LoVmDshLXme1e28TreYd5FjM",
  "key2": "4yLDQvyQ1zby9eHE6zE1KxRsGtqh3SPgn8sYhxSsCSvjfytmMeoiSM2vYxdf8db3PH43R3t4DafwCTc1zMDBbo3v",
  "key3": "5QrrLnPzkQo49qLMYUQr3orrBfKA1WLB1u7MToTzzBfBAP9hw4VNiM8HLNypB43x7CTpgvGfjypn85Zs7fsKjbDC",
  "key4": "q41izKAdA18Q5PPTAULHSJbfX4VZUwVNHEaHJVEGNGQd7SD7L4TTgfeRuUbNpzaDLg4cU6eqUwJHQ63ji5R7eDh",
  "key5": "5PY8fBBY5FL4iSp6ihxnmv5yvAPKsNibpNiFKv8RKwdBQBJbe9dGQ5EbTDnG3rHbmBx46muWhNFeMpWA7KS8iXnM",
  "key6": "2PViwWF1bGrfMiYhqv1jKfJCvmdcSbDKLuwjS5iZ3dDjJNbPKWPxe4bno7if5UbBCmJtQj2rxpC8cLxFrHTv1VVy",
  "key7": "5ej36RwNwLH4v8Z8oAd889tu3Lih8z3y3awE8QXrEJyvZVws6n2HqP8SSQabvqUNPAjHkoGCWuRQujgbLmLyvgyc",
  "key8": "613wEiVwAoXFGZcLQGetHkyaPaSuD1hRBCRjQSN3LqFYUWJd1tQSE7w7jpULgSdWtYtxu531zTmYToGwB4UR5YUb",
  "key9": "2rvncaSpy6VQbr16tUUWDq2DSfZbyzWLL6FQpetTyTKwg3LHBTCZSKNeGLfbDyTA4UWG9YHuekyRrsZiBhvRZjDt",
  "key10": "24PbFbNdLL5yMCd4pFMWMUeyidCRu3yVeD562WQSaEUW8ZxTXVWffiFgBRhjCKnPpqmedkZCUWwo5fMdfx67FeaW",
  "key11": "3GvAd4mb6iriKroWNdcF7X8cz75sZaU8F374iazuq2pDAiSRaHrUcvAVEH9SDpzmNoujzWNSvkUhqVmkemcMmBvg",
  "key12": "kpVobsSBGEvTm1YTNmcXGyBYtfjiVZdDGLBrcSJn5iK1pEha6AeHkW4C8oxwnkJHpNT9xYKjTE6zysYxhqycR7T",
  "key13": "4CUJGcaq3S1Bidy9GtrMWNhwF7mqyRGHzMGqcDNF2y4mD5Vk3ETMKeKFVEMBzrR8ytFfvyqWxEq8rmFTyUcJ3DQ2",
  "key14": "47AVRdxbawQfgFPGepDjBvwFhacEaSYVrG8rsaB8bzvgxxYhhEneAb2xUHVkVDjsBDJT2x6Z1QkMTP333T5dnWPm",
  "key15": "27sRRJ6dMd4Hw5d9kWCg8C7S1AyPYjT8MRePHTFaAiXr1RjT8K6H3iZuVM9neTDpi7YaGjMchX8SspR4xH9G4aKR",
  "key16": "59N6CmHkkpwrx2RUCe91XQ9G2u97C5wnWARcWjSVnLzaeXNLuto3J9ppyw7v2oV9k2b1FgXx331kpfxS8F5BdvuK",
  "key17": "5ryWEsigekt43xJy6wAqevUxsQ2nwroLK4Thd5wJAzsbaYuEWeP9o2KwrL3JmjpLa7eXvrV2dpCquabjhH79bFWZ",
  "key18": "5ZST9WHNwLeMdtvDqRodkWymFkSDbapo6mjCd1xxAx6hqd5GjArrAhopvW5fYAmmibYaWwQmGWCwGsGsw22VE1Vz",
  "key19": "2pUrUJe1m4dmFiZwEUmF45sNYDp7WG3RQXYkBnvnfdykUufLznVzT2o7SsEMXecP6GvZSBtHy1m4AJ1ztKt61zgt",
  "key20": "4sFPY6X7ZWzjfJYgwheuQQJDxj1rkmjgoRxcSytopZkSE8HFaEc2mm9HwLHjSFvXMPgmEjMuzQkfY5vtM34rMWH4",
  "key21": "39nvAf9vf8q1Jy5xU5DF1qf7ou3GqpQXviNaGpLib2mtKoXcYXZoWEgkBd8SdXtzK9HANprmKePkQCrXErVHbTit",
  "key22": "n7ZXLA8wP6YTHQE7ecdbKL7dEiNy1LJ5pidt5d1Wx8sv14fkwxXuyNpzgUbEX2rBWiDMus2TWijJjn7EahoLeoZ",
  "key23": "24s9B5RTxWr8d378DdWq5rWZE533g3LDrMX81Wn535HccPZKxYdtLdMA3Hdy7pqvzLJJ5o2koYmhfpAZyeCMsCET",
  "key24": "Qt8GWNt4sygq6kbB2jf9Srh9VxM7NyYbBHHz1DFrXED1mFhVMhaXHfFq7gbMhtK8vCr5byvjRHSrmnqy6Z1aXom",
  "key25": "4aKUqG9aJEgZXPtVEDuRFVpPDBwfjHCAaepkRqZpAXMdASgBGhgPhSrB8rUKgwTj7mWFQBHgvDxrRVeeZnGPaBRR",
  "key26": "5G2eGJ4eAZxkkts7xJCwsfeySkUDiHt6TBcSm6qJEpD5ajuxeHiBCGKAxgmjWnoAkAJQ4iGmKjiqYvzj9srDvBFX",
  "key27": "63krUWHphS8JSvo7vsf2fwjQzvoAHGakssgmHHQJcLwvFhfbHGCYgAbXFCod5hErCMXvsRhxB5jDu9FbaNrBwNMF",
  "key28": "2FhcLfFEbHEaB6tjgDJW2giRH7rEaTBvg3o56XJDm4daTrVakGD6PTuteuCdXjA9qEUgjei7T1VB1rqeK4jowZa9",
  "key29": "2MbWTVXdJxrCNiagfPJYTQbodvjuDuQTTFTgiuCsUBKaCPaSjvcR1UcVxKs5fHmyE1uiPb4xsphLGGEwSkghJ5kR",
  "key30": "ar71gjuRfK5RdTPTmFVZn8ZeUSYeNKGs9i6U5UVtHrVZ5ZRHRcBfH3dr85hNtD6c4Pkhae9srXZYetwHsXLFmYi",
  "key31": "2Uii4wAX6Qmwqs8awSdgURcdTySzyuD5Koi5TjgXMSwA7GybRUusMbGVDVr5Xfd6aoHePuhKCMRhEUrASW76vHNV"
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
