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
    "E34sUpkwXxNXVGbXFyC3uem68GzbL1Q2v2g4hNXyktVgMj66ucGD5Cib7JGC33u252717wbubt7Z5r13bcQUFG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWoDMKvRhmaH61vfs4QwxJJ4hnfyeJy3yox2qyXvj94QimFMVn76zFR1BqogGYXqcKtbtmaZ2sfFSb2jBosTiN1",
  "key1": "NPaQRGAvF7etRe854UUsFo691rap4kEHnPXnybxL32kWGCYWQLG7wCdevVfHE1XYevvWnrg5xfehRNfhfCXkpHT",
  "key2": "5tiKDsQdAYNehiSci1aPG6Jj6uhPDeNMmTw7NXVQEH32iaWEoKm4hSjGiV4FEFGNiCj8ehAX4LCNmCmgZHMm9Wz1",
  "key3": "NBT5vz9Q3PJWNFzB3gVnowM9yyMLVqVfhcNB9DCgew25w4z5SckedxHKpmAyGZWvEhdeeEjW8qremCzoK2FwZn5",
  "key4": "2ReAyb7tsXRvVkETn8Xs658VG5AKVcuCdv4ba5XeRXoGjRpbdu3pj19Vpx2szumXWrAEhdMor9j5Dd5umQP8zg1p",
  "key5": "4PHMmGcBAF62wy11aut9ckmYYJ1xzCR2imyuB8APCphx3ckCURdvUtZXftvHAiU2jYxXxM1wkUytxavTEYieyEYj",
  "key6": "637eJmEVic1d6oZkyP1MuE6rqNrcZP2ZPtAdT8W8mB92p5shXD9yHB44RrHAwLSV9jpNFu8ijHWtTwfho6YAUcHN",
  "key7": "4S5F3MdKJVbaTfEN7ces6T3DNthQPcBvc8i8AtGzefq7gpcoibgy8Syc9ekcwjs5LZ1YSsrp2rg5HxzqVgMntsbf",
  "key8": "2zvYsiHMdozNJZi3q3ffw3eYoTr6amc582ZiR4b9F33xdKMVHoC8eEJmNeVnZHXQKtrJntnvpD4NLqXpZYtrp6H4",
  "key9": "3SsW5zwGQFHZCugypnTLMo63EBsdTvbdaodx2HBQMUoum6icBrcbaSPue5pfyNeDcAC7Vk4nxEjhcX7v3Ee1mpr6",
  "key10": "4JFfxVCLQxP1jDmbqQ8MLprCc3Pr7nw3Th6iGNynAbwHA9ipSrSeg9VyjwZrSamoeF1W6SSomisiw15WBhJuYHN4",
  "key11": "4ZKJdvwQGR5GR5SEuPkiRYe786k3ZNv6LzUYk7hy4hp8tFCKfDaZ5rssrs1F8X7xTBvHJKdp1vGZa5fHZUVj7cSe",
  "key12": "4REqU9B6Bz5NkA37jF8bvAn1BfD1sorAe2AaEpjDZaxLTC7ayMX2VFqBYmwJE9J2Y7qxUTFCSsoGCSahV7cw98V3",
  "key13": "35Xe1qzWk8DrmrGeQ39ftSvNEbPaHD8JKqfkR6is5ca7WrVY7gHfAXJwhznoEzQjBJs6eXKkrvJBB1Av5RWzEYQK",
  "key14": "3HQFJjdPRoakbSMKeQEoQhDDmQVwTopAdsgEb7b699343igTA6DJEvUiMaZubX9p4UyFCk7RvXKaFJ6cHhYKDFSe",
  "key15": "23GCcUoL5zFuUFdNMhU2Qr6mNhbja3NtKkiieFp89BaqWcWtFQo76XteNhMJGUrQQG74QceuGTe27V3YKazN1s6e",
  "key16": "5wAHN6D537XHQJuay99uUQ2uPBLZymsBZkaEbqEgKJFAQAvQCsken8CmH51AsJjkrkoh5XbW7pcG97CuxFekCnHC",
  "key17": "56ERz8PYEMYC7Txj4zAGycgxQd9CyqhuZCmdpppNu9AEuF3yL4pRbvsfcXdJws53rged6X2HtZRyGoJmCK8eMym1",
  "key18": "4nEMXaeUmPoXnZkKkRWctWaoG92WmbFDMcimFkW2dbD1SaXRvK7G5sJW34tJDqoPBn7vnBsTSetkkA1Z7Ku6Pe3y",
  "key19": "3mw4dVDXGgB293MVXvZaAYxmrf81T5iX9y5P9Lu54c7bHZaoqVcg9ehXb1Sd9dcVrZzZUAAvHui2Fgtcb4RNhnS4",
  "key20": "kKLCLJbHt3WL8vPscseC7JguUaBXTF2WqVhVyDpumwKjvfniov6xAgb1hDUjLBzno5wMd42stGUezDdU3NayvfX",
  "key21": "1KH9SSvLxtDKE6Vp9D7Tx1DYf3W3ew7k5FAwJu5hUzubLcnBJojHWfuFtrjdeBytybH66NkT3qMyVgYDhgHVKPA",
  "key22": "5nzsmKYWZezUTkD5GedoEfJb21LjFAwS62M2CTQFrm5RX1HS8MzAPQFAhGVF4H4jN1TMkn778N81M4e6YFxH5Mfg",
  "key23": "63juoBzNFhp2x3yov2pG7aEwTkG4h67KMrcPzPzq3rqyW3zg8oRUmWCqj1dak7Qjid76kYyKByWspjL9PD2HykRM",
  "key24": "CgmRo2wAg1VADM7nnhY4BxQ7Bg4EWK3yVP3Zezt1SRuANu8yTVSAVZmjVr92foq668WSRTpdWo31Tog9yZ1xSbj",
  "key25": "637V6x63t7zthqhDQNozJQHxSZsdNNiRG4tyZV5WABnCac644tLfQwK6v7epKKiP4BsKyKLTAv5QGy8fivCQx79r",
  "key26": "2AVxAfZe4rVv4rDtxi5aZv64p5LxQBH44aoiRaahmwV9KDA8s4x7WRFsGPhGvin4UUm4MxLZuTMLTYtu5ZgeyWpB",
  "key27": "127cSitApFCGCbmmcjyQmW5BVqU8KswVFgKoUiBbJgFDLfPUFWjrRyNZoo2kgRCvjYQhfHiUg3XUyw4oQQ6yhyms",
  "key28": "2W1xtbxrU9Xf9g9Cgm9bSVQ1CZUeANjaCg2FTSJLqpBnd6J47rchghMUsyfH4NfnKZChE6BEkrDr9d5AjGgJBdec",
  "key29": "3SFZ7FLo3jVLmYMZarkmNWQgdJf6Wg4khVUXCXPkb8oriRUfdnqvkXvJAfuzVYscpa64g1W6ADQiUSB1wQSwdugi"
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
