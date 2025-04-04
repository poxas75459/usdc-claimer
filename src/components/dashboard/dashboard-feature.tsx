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
    "2QU6hkcE15KcV2KU9EusLNRY2r4JSyYL8EL1RURd2oPTR1rDNHZXmDpoZs8YvuuPJPbrcnd3qEYLxaC2PJZyHSVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMAGs1izFdAKiuiHGMmaJFc2rLHQJJsTSQvhZAPqYo3kVtS447rCmhgF1RkNuk9vLpqZyHY7SDueVdKeVqDRj3z",
  "key1": "54CBqLSr4oZL1CsdrEiPUDR6vHR58e6u6vk1KJ2a6BRrb3iQWuPDVpqwMuHjMecGsnPfoiB1HFUazAJqccVfWXox",
  "key2": "3o5GQ3vrZMeAwY1fibMXkUK7g52fa6y2wDL7xDMh2guh8Dw1V3JM2GSGsCX5bEde6vBEd9ThngUUMLdprwDG12v1",
  "key3": "5zfh4bP7R3CqHtD96B7Qh5G6zUBW8LX25jwi4kdcYzpd4Dj4Uq658AFpzoKqC6b7KcHUapGET5wShsoojJ3Mp5MA",
  "key4": "2uphwEF8Nq7MMMKa3vr8rGGrQaGCucXtnH1m4sb6CzRUVY7J6r51hLK8jZQX8v8GcdjbtYFCDFpUrPQAAPEBRvkD",
  "key5": "CRJNbPU7amExnaYNH29f5RkMv5acif5ocx7bKaFAyC5jRXzrw7cRYW6pCfkMkLfrmqJh9G1xmXgUsXsxfrDkVpj",
  "key6": "3iz2L3msTE5MBYqkuc6G2WkewDn9awpsycnz1EMjimYuSxD8pU29U6NtfToUqgNyydsyhJULMd2h1SMV2XwZ48GW",
  "key7": "4unLdmbijV63eZrBuBeqtMM12CnghdGGdMTWQjfuxM25CxYJp1KB8e9cN1isUJZL9GNZQu29r45uYWuJhyPcZ52j",
  "key8": "7RsPR5aZwhQjkXZC8m1zBN8VtejrpoJZoQUJY1xVGEaym7V5Sekkba36y415pM8iLSwy6A6uiNsQwZLCuhyZnuo",
  "key9": "2oEc8CvdFLmnbGPMeQKHELGvqFQ7bRjVThqmwTxSxwK3z3BYL5qT8XVjYS23fcd7LqsEoaUH8uApxwZTDRuEgQBX",
  "key10": "3GZFpAH7V4JGHXm7SBrobw3VmELsHrLkBnrAwAESp7FTks7ui6kLjNdhKFvVeuvWZFyY3bg5BRbrYpBzgHApt3Wj",
  "key11": "WrCEyQiqbSYWCJKnroYXgothdnUmpqM7Fi1mmPaVxDNC3qR9kmovfqh5kCZdzFos4tx5ybzh4sjbgaK8feybo7U",
  "key12": "fiaZzFHmLAmSvKyVrq5ESnPif7o6itJL3Z7BZ4fJWMpN34jBMximgGC7KknzVGDBY2Y3pPyuFDTfHLJzjdjthfc",
  "key13": "4JvSDhAPPM2C1QuLKm76ZtgicRaT2ZhNqbZNZ6EiL1JGBAWrb1vcmQYnAn9sQHufW6w4AVz3N8dbSK73zQEJtTzD",
  "key14": "5Ur3zHH8oJUhf7e6MwvAqLZndSYySerWUGf5h2LhuDP9Wta9kLXY9Bwg5Giz4zeoAjtZ71rsBrfSnsZsTriULfCA",
  "key15": "5sTN4Ms3sgRqmPqxwgonk2muYfnNbNdUSTFi8Wzd66CL5RSgCTESTSGLzUKTQ6xmLUrxtAWyCsGWy5dVCkXoXyc9",
  "key16": "66XHYRz6bqX1y24ze2ojNrKbm79RcKwiijy6RYhAZU2YMMD18sequ8NbAhesW7NEFmmNHXKEPHEKFzpFxuXdtmsJ",
  "key17": "4fYUHz3noaNpxZtNuK6Z8UGUp6an7N5ARhmiGp7JVALtnH2xRbUZ3P6A6Hmx8c8vpsGGe1tdsqjEKBrNSNZG34ZQ",
  "key18": "59eHepwdtAAef4sywphnN7HCYh83v2SXVBaFXuDC9dx6kKSqYkVHdTmKvtxS8NCVrwZpcHgDF8w93K6EcccDJZyL",
  "key19": "Qy1iChK517fYfhQAPW4NgKsLnUTTuWRwvfAhUHjDoCfVmfrE9ySri4HudMqRNqayf56vfs9qdA1d11Jf8iJGgsq",
  "key20": "3n3XUPF1gf2soCt1vnwfWsHrzt2HVU8S8ipf7vpJtp7xgXNZt1egyJf4C1zAjCv6do9TUAHvWkfz7imU3eEdzPCy",
  "key21": "3uViZCLL6mSUUNHFqzJDyqFH2aP7K4juWZM3oh835L1MnDTV8bkPcfAci9rX7QqttnJZ1CPfy5BgVpF7csjwXg2y",
  "key22": "4NthX9dW31wvULamfYCbaZyz4SeiXt5v44q5jxFKDWyL8PLAixTnGHFSTuDoVSagKw2BgtPK8a1WeTGeDzozVXhP",
  "key23": "2igLr97uj79Nw6pzM3LaoDx63Pk1kUSw3LPZSUzTWNMjRXqZBqQZ9wRZ8PhjsBuNwjzkPGQzkAUvv1vzUL6Nt5rb",
  "key24": "34f7VBhMVeapM23RVbGEDip11tUcKXUb4PoqqFTqon4s71dF6iyLNHKhCX5KXKqpg5rpW8JeNYE4yte19vLWSc2C",
  "key25": "5iFVBMaKEiH5wD7mizzyaSD9TqxqdT23xZmM2nbtV6NXnbAsRDUcBRqxc11oTfjGeTkQi5XzJjRYmcirdLrUdvvF",
  "key26": "4pLV23FwTFeMS6RPAjh54bdZoWQpnvt4VSKSMStH8eojvWTQK2N1bCRbDGquSt7Pyb7udWt4BrUw6xvR6oG3kTtp",
  "key27": "3JSzJVWh1H1xUn9X6KxvdFh14BBLEPyuTg4t6hwCRADpNq4Gg8QxDp5hheai849ucekbaG78fyvx5xAouZZCjKPp",
  "key28": "5uf22iHZMmKy32mkv3UZ4pacCbBSR8h9N8CVCvLWpdwfMUBQ5rA6yujwtuvXtsg4g8hB8m4Ajh7DgrdcJYtgH4At",
  "key29": "3Lkjb4VyoMpX6GBCLdrKessvTvivNtXo1bfh6BCPFFrMSXuPUWDoK1Tx6fdLvm4aMFAiq9gB9bEW7VAGcPfs44qc",
  "key30": "4uCNtotJoKRuS1qfXEgiZ3pAELTMg2i7re9Ewxzoy3YJEViYrgvxab12vvYceR3uCjsMTcos6SrMKkCSeHB9Nqp4",
  "key31": "JtBJBvKzoCT2HnwFaGtrvueB3cPqaE5Y5pmT33fLGTLM6aCLUoD9L6S2VfcnJuSZpPveNX4JHVAzhHVPfi3JV75"
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
