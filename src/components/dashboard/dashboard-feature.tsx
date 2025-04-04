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
    "596TqpxLcP7RVZphi9pkMKxNRzWxMAYUM928ir6Dcrdoox3rTqr9HBmaYcWum42KVnkJT7b3efGcuc5BiwMhJc7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnpfbZYibAzZ5jQWrcGHfwD7DyWQPraMvrShkFfT3qJ3Y7ghzheEjLoVS31NZ5uSnPBP4doiS9gWcVwuPUbWq8M",
  "key1": "4w478nASau62H2JQ21besnuN3NuwZ4CCK2F9oVoMJ227SJ6uyKXRphUtRw8V1SVXYA1SYAKpSHJcuoReQHMZQW15",
  "key2": "4XauJMLEgUfnMxeA4TMLsSmwkUekWxRRNB2cXeXwECQCPtfF2LiTLsbEv3a8hTNPoP69V7qpqXuXqq8cBXJC7aVP",
  "key3": "3sJxiqL8oz76XPrmpyrvHxgXj8AvVPshfKKFfejFPLbMKwJwZWurPH5dpvN7FnNFXFZ2fgBdKphiq23SUtQbAzCy",
  "key4": "63ftg4d1ugJfZ1YqwuwLNGDW5de8niRVEnFKJErz6fQDzy8M7sPCByS6roGSBuSKAtnoqfRbnB4MUNBtCdYrQy7f",
  "key5": "2C9K1TEZTYw7FFHNfYRXC4o2TvdTZRtX1yQXXZAG1YdD9aaR2v2T9oergHCLDzEYj58wE3yCANhtu2sDxPfNydVz",
  "key6": "59vdndmoCCoEYFSatY79z7q56o2Le9pgUGXC4a4nVegiK2x9aG3eGkkZvaEChNaBDe38vY14aDgAzZK1GxJj9TT6",
  "key7": "5uFXDzwnbt5mkYXBaX3JPTypueCtGRmTnpBey8iPp9TWTiUYKn2nhiDmmnB6sWb3DLU2zGT7XKhnP7Gw1bLHeztb",
  "key8": "WMt15JhkeKWrBS7pVsrV1bkv3HxV6XGnMJgvUFDVcJwbhBmJssJu2X826d9MBqDUdCJqsC8eUkVgggwaLLqazU1",
  "key9": "2FKBAAJsCQLx4UgcYoKzArTD4ru2Y2omMaxXkmwW4NqeBUbMhMopW7E6ihK1Y2rMpGMG2MPPuFhXg3vv7JMy8PG5",
  "key10": "4NqutqHtxgPACpp9BSpoVtnUxu1fwDzXyeZQQQgqemGZe9rwLZLnWGqnpUFXytmqv2wzK67PNHsDxZ97NkE5CNzu",
  "key11": "3AYx4caNHrNxB2sgSwwXaKEpYs7ch4Z9nSKUf8Hz1U8oJUrNPHDAEqgRXonqR8uX7N1srf68j5i17oNP6PA4fujk",
  "key12": "4ewSVEyyJ5ZmGFm6ayrdeQKgFfgMVJNPMjiaWfMg8B3WnqVKeSsRgYXkAoST13tdvEXvuzCG7vvZPSDYijaG6gop",
  "key13": "2xCLLT8dwUX3w7tJy3TpAAjuF28wTPm1977c7GBcCJWBZWARX1ShkktUbnSBRqpi7FjcgBwxugqxxnJMDRkY2cdD",
  "key14": "4qeShAH3KB61ZDaqifn7e18rNt6oRVLacDzhURNzYDM29SewUc4C22ka1c48n4v9ekFqeJR4G9B5B26ngxTNdkUv",
  "key15": "23bVCTcM9VhpTfUseg7qsnHJVHH3jk5VZTKDQNM4As561DrfLP8HpKK3Sgn15tr5BETQLHiJzJP39huenpakrpoz",
  "key16": "cX9gc68BUUt5twNF49C4x5YJkgeWyNxrvRVNg5hsGcJ8RCtYWiwzMK3C9js9ULjvdoRUaVW4RDsMqBe5xb3RErw",
  "key17": "5maToWHdomacW1QdEaPJwksA4iQ7kERBnPMKFi1YdfhpLmJa3DFcRTjSPZfUeBYSfF818HpU5wNNVAaS3VPxz4Qp",
  "key18": "3PxFeof7VtAQnprUqhuVEE6B2CYvL7YTdmn5BuUJ6p8AMHmwxCqxRVXhSn798UG2B2w5U2Xeio2zpD7KqWnuRHkP",
  "key19": "21TCRGjVdeUmu95V27rvMa2aQyS4Fs7BozNrobgV6xFDS4qe9Y55biEnc5SMddaHtJZeJunR8pZSY7CyhzHEhPc5",
  "key20": "5T7yKv6gdUGLmu99tiMSCYLEohtcwEPZ9od2cu9utD5JHYb7xiFbudCuphGnFiuY49ENqE1iRz87amPMAMnVuRB5",
  "key21": "5PrfNjLg7bEVfHkHk7EK5k8smr6ZSVLCBRY7kjJ8Zgq2EfJ4y7FT4Wj7M8GBXh8xgnrVUH2gjSRN9rH7vmx4JPZJ",
  "key22": "3eHcnYpJs8iShab3nT9R4bZYqXg3iLa1GqGCFPghLNbTMKZCnrxCzvFL47fEFtQ6XXEu6H4CD7PfHXWwmdL5CX7e",
  "key23": "5rruDSZfFMu1fKVfyZpX4jZDT3sbx3QFYkqUhG4jURwb1tqqRd51cwJW2eUxxAVR8RtFgQx2kEzmtHTY4AGxxoc2",
  "key24": "4jamWuAVd5Fp1cMQqZWCKvB4CLrigxYyqBcDeDd26NDXHTjRKbZDPier4jHFy5JWizLuHuJLauwYbAwdUMfA2jCf",
  "key25": "5uoEGREyKYqZDGNPFdUjCSK8xa6MRi6TxukqHicsntvDeztCBKurB2yuTGk1EtzDcX2LDBM75NqvAtbnyTJrQU3o",
  "key26": "19FtP1AToSdgp5qHy56QCSPdqyEZFA4fd446TAniiTx25bhMEMg8VmzxaA5mz156VrXYzkK5daMfTmrUYXnkfTf",
  "key27": "zf9BiqBdqVpVLUjzQKNt4RyNnUPu77WVqbGKejWujQneDKpsquBWLher9D1BLARcvpUTENueyJwghCMtaQ9VxTN",
  "key28": "5aWz9epLwdYNV8JcfLX96E3mRd6v8YcjFA9NnCMzM3asM2bPdkj9rgexZHdkpNErT421KmvtpQfdx5i9R7DESNm",
  "key29": "3YvtFmtkhBuz5o7fuwekrrtVS5uty79CJZWdXUf6CbsuTiRXGGr4ftCurUhiLQwQgYjnnWVDj6hQtTkgrj6VK59Z",
  "key30": "S6NUSeQyYxg2VtodMWjvsb9D8C4hUf23ceGShMfJpXfK8pkAcwaSvxVP47G2Zb63vcnjVRJcuaGthUkxEdNmpjR",
  "key31": "4UKFubtSo2Z7E22gbadQDhi1TB3nfREc5cJ95xd1gF8M8b7GN93wqAQKpvJ8uhJpkpv1yLxDdUN1umDiudApN6wn"
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
