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
    "3V1pzBM7KPP6Aj7kvEaqkzc3MuwtWtQZdftF2zUnYbqTY5BFE4oV5pbjKuGDy6keYhHYYuh3qyN7Umgq5vMpMcqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54W7M5F5z3r9WWE9k8j61PpqZnjEfLP9hPgK6naRgDFW5gZnCcFKpHapdrQSiCTbVcKT7L6iDNV4dKiAkUwG6HPv",
  "key1": "4A1EgJeQdm1VTNfQMCfCTAPRKq37coQH48PaQoxKvCvXf2hpX4v8zVNatG7NpK7SSUnqukTRwzt1EzrUEB8VsSSh",
  "key2": "4PQYaEDxRGFMXw5tWga4TbCHfYbZW8V4fbhSQd6WWTaAsQ8XvVQQsCN9i1YXzwaXePHEK2CCXDoou8CiGURWgaTi",
  "key3": "3yfV6fXaLNAfWM8atPPr1jCHrz22F7ujoCwyLwW1oTrfoGHF8CagHZBYEyd4K4gdyk7faz27qWjJ3JoSesFCp1vL",
  "key4": "4ZxUdxt2FswxqbGyffVZGgNu6EeiNeUgus5sKqD9PoDYuWjrEv1a9C2h4a5hScjwFCTEJTKHA2V4cfDkKTb893A6",
  "key5": "3AsGrsdzQirKp6WEPLpnYW2hhm4XywKFmpE3qfbyhbq2LAV5o7C7BNJcWg1bPoXRTH9Q9kifwz1N4mwdTvxNauSN",
  "key6": "4ZTERAfp2VFXUxJktHZiTyPAMhMf7bLM3yEXpiN1FveFvZMNWKnpPr9oZufSh6MwQ12MFcu43SgiC7QJUw58XMo5",
  "key7": "4zy6aT1KJTEaL5StghhxKZSB66vLLmTFb3bHazuJXznWbDGNU1ArZneSa2djVPRhNdZgFBqY9q3cErMJXNAA9QDF",
  "key8": "dfwWn1qn4Ak3RmwZJTGGNnzCAS34DmCGG9kVz111pdgDwuxsC1Vre2NYUhwW3x7rpRzE39d9JgihaoGz9yFucSA",
  "key9": "LCgruYK7RGoMiWkpqY6TJagNeY76ZX4qcSwdXfCHyhK2wb2mjAX4bhfDTXRS7yimUii5DKNuAJaGEQbQxrBtAYo",
  "key10": "mpZuME2HZSDanfEiAzyHjzfHrytRLbTr92smc9bzowrgUx651zWQAjxcb8VxueQQ66Jah8jpXtLPt8bdeob9Vt9",
  "key11": "2AnD5ECfKAmaj8mPuD9VSw8QNGWAC8eHa9xaMvpTXZ79g8afe3MSCELf7ryKj9yCaZHu3kSXeHPApkXiqL9RMtWy",
  "key12": "2asatgwoJ9DxzY1AQWH1jTP5yVqBn71LUCxbTpQUL5E47uB11cRJu3HQNEgESyPj6PSYyKV5S69UZizhfst33tE5",
  "key13": "5TpeMi7N5zVcBovpWk2FCur1FMPr6HFhor2vigmM7WaGbgsqHo31NBbFA8XHMSpFaYFdWE66TbwNWRaoE4auZEaQ",
  "key14": "5T1qW9U2aBAq6eYpFZVgRirMsrPpLQH3rt1EmXKHXQw8uTipaC1zhx97FANj7qskaCmRnJwWK3fTDkAooLyrbNqn",
  "key15": "26y7fV4kT79V7NGQEFyJKqC8cfUT723wfhhJepQ2rJqMTJ6x7WBDcNTPWKym6BoJbYRQ4EgUjy31UrqwGJjGL7Ga",
  "key16": "5695QFw8tjSrj6t29Xc9FDFE1HkXi6ofc8dn34Z8uksZrCgJAahJHv3BN755PEWQNykSWCuogbr4kU1CAnFEKRUJ",
  "key17": "4uJfCXb295HUhovxZv3FrkddDcBUzwbDSCSZMYsix8Zmsh4jQGzHJ9aFmZvphKJLNgj92F9n3StjCvu1ckzRWFxf",
  "key18": "62EJ1o1yoeGo2JbhFMgB7gCFmmmRu5r48Y3ofcjGsoetfHBoaF5s4djS1Azz1ziZXc8cGUC5Lyz8n9aTxN6h7sVn",
  "key19": "4LoZ1CLygZTxTjG9wi6wVfb444xSxWu929YgAbiT6Fa51VAGreiAQgLm4pdQ7WTvbJnResj12sdchkZrH7sEN7UB",
  "key20": "4jvqp9q17TYip6Y2nmNAG1fmBFczPUDHhEv7aCxo27t6inFk4p1G1G3GaF1wvuKhJzN3oqKy6tNE9pfmFmqgFr3J",
  "key21": "34YbxLcJMhBdc6JRbqLy9tpyzfL1QefoLjHRgjw6f4VDHEbo6mgfaTVUDtQRQorGgoYNH79YC6H5w27p7vQa1YMW",
  "key22": "mQQeCrEoxp2NbQ3NBuD8HFFRRBPwjVdn5gzsJFauxy24H86MedvYtMxqRpEHRJwwqXjKHAq3x7umKqUftgdfgtZ",
  "key23": "4UsS7E42EWRqCCPRpsoZTYDgMWd3YBT6CmJmxUAQBsbTzRHEHjM9h7gPbq8tWVqL28aU2a53znbRGtW9e658cyi",
  "key24": "5egh3GPR3pisR6qRZ7J5a4V8dUW1hmQofEFbWtQzmM27ioeHvXjvkCeeR2kGmzXCrQaf3kutZaFXuYQzaZqToSpE",
  "key25": "4pLVurT1Z9fqdxNHFJwQUhLcKBi5w3STkBh8CpyA6129ommjKa4r6FNTsnECG53fU85MGirbvEywh6eUcDsGhh3v"
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
