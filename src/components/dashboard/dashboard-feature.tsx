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
    "47avkGDPJ1dTNfMMov1UZ8MJWuK41jA13ou6qdtcWddfgVvLqM4W7ZsMWTLXRfLCUsMNtRK8UerZu8dhgyEdS59S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RV25cN3BDtztdFC9JKaxqVfVHbAAm5RZkANfv2WyrPuD9bjmHURaFcjSnM879oi2aN8ecoKViJrWSAzZjcQax9",
  "key1": "2srmEm8ocAAvMsejf2unDQ2HvSbmUTsqJe1HfgdGaETfmpL2BdqhyvikvfDyPkKH7dyVo5KGtATAhsdjywL8e3VV",
  "key2": "3yEswhUDzYk5MnmPYAMt4c1gm5emPJFZ7E6D8yoYX1zHjUEXKhhs7mWnmpXp3rdFKfGUdF7VpNMRLXRtwa1541h1",
  "key3": "36LRbRcfhabBviJXAjWforvaoAZarBkB67C8Kd1kVMbAznPooxw6R2BNUHbFVrGxMGR2ugandgAGKMLrZEbpzvNV",
  "key4": "3eP7ANV21rBXxmX2t9nXG8cuct7daoFRLKVzTW9eW4NkicgJNubLC2NPwAD2StaTe53xi1wef98UdX1ugZR9qfSk",
  "key5": "4F46bb1iHbvnFjuPVTMxUZwvAcaM3pQ4Vy7QSbeJjDmHhJ5oQhA2TgLWQxDsbsnGu7amHjf4VGpgfPhnfFGbf1fC",
  "key6": "29yeSUtfu6r8NnY7mWWunXJvB4uD1WRKri3PrBanXpHBT7x2r7vJf6npDEpLWktmzQNpBUFQ7iEWBY6o62iXKqkx",
  "key7": "3Qtq8NJhG53Se7Cn5iKbTNEMBjceVf1U14iGvS3Govj2ZeX4juxgv5x7zLVx1NNVCbozidBvoPxRQhbK2rV7sQtj",
  "key8": "7wLei57iPJa1fTbRNBfZpR4LWCK8HoEPw5e3ByrG3qYAsMdSBkgbMqHnejACSr77onz26jbTbviUpnx2Mwtxc4j",
  "key9": "bp9VBv71xTzSyKuGYKKVk2DmXQT8oerZcTWc9dRgEUhgcBdT3kuciC8z5nBpdmpvHPJKpA8rG9BfWpwggWcYqya",
  "key10": "y8Mbjb2LUXLPFUnXVgoBBqygdaZYSnRUBPcjTDizuV6aMGKxuj1REwuEQNvzyuZpN4wpR9KvCiYzyzQCiSA1NK7",
  "key11": "3P3sQaRQ8a72jhynZ2R7gngByUP5QU26Z2oEekWkfT7E2miZVzUGVT5WfPjfU7tFhqDLcA8LoGBk7jvn9pPC2Jgg",
  "key12": "3hZ7WpgZfgNX1TofTsWBi6p6DfHAvL8cCotqmRXTfTFN7QCdfyamduJj4qZKqN7ymCBKCjfqtU4LGBXT8uJdVQwy",
  "key13": "2V63vakwVPivee93mEcKoaMTmsaWq8fZCug5Wwb2SvYPeeLBB3zS6pR5xwYmDVuwnCf7DQjhQiwtn3DgtVKN3Qih",
  "key14": "41f62q3aeKmsqVBuxf6qR2UEyvrbMFhXfr9WQzT7AZ8V8UNX9g4HfmmLrxDiXm4AijXXvkrVVhLoVHDrnXtaZT3S",
  "key15": "3J3jAxvDEewwjcWib8sF4H1ihybRjrTsnJikJM9nALc82gMnSeCJMCDQtMjbxdb7dmr9UDC1SaZNLrSTBpoisiMf",
  "key16": "1pyLgEtv4b22uAYmrmRZ5RS44vEnExy6i65iCrd46FiH2HLeVqX5tisHJi3dVm6sfjZKKUXUeh7bMcf9SedVRUq",
  "key17": "2oraRzby4JNGBYgL3A69H5yFWT9epMmF7SuWKicBjqgoEVrNDQw8yWpoJZnVvGtUriy2hUUyA3fLLgNzHBM6VyZc",
  "key18": "4izb5N2qpf29NGzssNszc6LF19xwNyEnejFFVbGrQ4k7o1DaxxU4Bm3CpfiQXfU68tsjKvtNKgjPM3BfQtwb91jq",
  "key19": "3prtu7ADJrohWbNF7qbuwG55CvZdS6D3mXxHwo5cRGMpE63v8xoiMet6qgEkGLkB2mHnUDWT9gcGu1QLEgiy83Ff",
  "key20": "5Qh8bQUfQ34naSSJsBNZi3LP3F4STDw6m3GUJYj9TAKtHnusRtjf1qU8pugaV9TUw9ZdTYGFi8d43y1g8EPoaQEy",
  "key21": "B12izKTA5i1w5GeTNphGSvccVmPhvmrruN1xoucHhFiBnSsH4RwM6KZE9LUBp4rLZKxFEgnBqXBDJKPiUJJUnc9",
  "key22": "5YGGS1v785C6Pwt1PaVm8NFrqDjGCCAodpZHynoD3mHJmhyCTGWaHqY5MAaUY1dMQ3eGSCgAszKbQ3dAJmtYSHLU",
  "key23": "2zjWVP4D2BEPGLhHw1r7KgNpEuEJMF8duVxrkNehaJFEeGuktVftSs3HsHNXMSv1qrDNoNeyX99vo5TL5rADKkMC",
  "key24": "o4HPc6QbsNLRNCfBZoMgQkdRvCFrkoXFcVKVQN9CDhbiqwhk3tpn97V16ooWZZo3EC12a3PjUcezZiDDWZMgNeH",
  "key25": "4vEemKjx2gKE6A13YURjyPd97wCWYRssu8SYLD3nBgvFz6Zvy5GC6d2uk6EGMi9NuDcMtLbvnn82c9YBE8xBrHyd",
  "key26": "23uNYctYkmSCFyt143RqryaSK3FsthYqK6hctLuKXVBM1o1i4wDugR2t9MP8LsCThKV3e9vCyUCGw4PvZVgq4tCL"
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
