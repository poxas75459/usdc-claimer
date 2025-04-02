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
    "2UAmoUj8jsuFZ15hQTfPMFaL9uFFib3U6sphNvMnMF2jQHDG9WbbcwuR7qRNQwERTHNro6aVEYqRaZ86FEXG2KM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BWY9gAa3U4QcGquzhz3j6mpqcBvTDgKG4kb1kJJmHHoaq6UiGcy8U6HaZSd5hbHd55WobFPVWwZ9Ho8PyGr2X1",
  "key1": "4YWMmv73Vh8NvMYW3gdn5L3MF2fEpZprbBsH78tb1bc7i38AXwiwNjwteNCEhU4sybXDEbESEz97hm3rn5WwYooc",
  "key2": "5BbPaKwEpsYGhcg8nJAdYQT64XDyfHYLU5up2wwEbuSEstjMhVyTBvJ8EFouargv1uKzbC47wWh3x5Lc25xRCP9B",
  "key3": "5JD97r4XyCtb3gch9YbR11i44MZAVbjwT85Kb9TrsTxXPA2rsE1Q9wASdYTs7rSresuYQ8WGxnkPwxoo6SYH9pxW",
  "key4": "eKzMDoKiKNJmFDjAntSd8MTLQizDkxsZG2Crt8krq96P6LaKg3YFvL4jCq46HyUW6Km9psFJFVdo4NymP9nZiuo",
  "key5": "3HXW1NAWNxce2t2uJ73Jg1XSK6fmtXZfz4yNnGWeZNDpkiSQNT4AkDV777PxewZCfetaZXnUWNXmPwS7o6BcuQ3i",
  "key6": "4E2ARESWKgMmv3NCwANfBE12kYaZbgQvJzJoJqi8qKqVCJ781GJFUg7cuggc8hHpat1T1JWB28eU1Qoo8i5Nv1Bz",
  "key7": "32fViH82yX9q9cg3jr9nx1pwo1jLcfMRGhGhrnjmkvK96y4VYAt3rxg1ZGBWJ4oTS6WHeB5R9zMBQubnFsvkRLJy",
  "key8": "5RaYLq9CqXfNDwRBWbJbMPfnJX37jdswYaUmxNWN2ZNgmydXPJgkguTakjsNhm78G3kq4q7nHP8YVnq87Cp1waMk",
  "key9": "2hzjxorVipXHK7CP1gDpiqAjtTKkHZAsoLNxG7cQByay1mvK11h5tdVXMzeMZt9qEL1UzeTsRaJVE5dijnTB3qA4",
  "key10": "234kgjXV6f3ZH4e3b1oTJD33dyy5KBvXNmXGYoey3jNrb9ywG26xGTVBnwp1q3Ufqg6B9BeNVn4xZF3FSUWR1xgr",
  "key11": "2sHHqzRRXW2kxD9Qf4qVPFy2iaBsLv2xQQS6e2a9C8NkSNKAR9Km1CWeaWWhbsRTkBgLj2Z7NWtJMuiEHMvK7uFV",
  "key12": "E8LDhP6zubkUoLX4ToWvzg6z6vbAZKwR8g9qhk1mNcWv8tWfzwNcbqXB6xYVi7BAUrcAri9GeyTdHHVars2uR5X",
  "key13": "2AogoMvYAkJ4tcsgCxSTBzWcFQhPWpsV1o9dy3h9jgYPfgxn6x6Mpq8aX6W3ykoWMeT6C4KJDFW9oznThh8TXb18",
  "key14": "2jQEu2jvXEGV3qhukQ5dZH7ycHoGx3RdzyTVMcnKXadbed5nwbeyg6t28pJj3FJFo5GmktGdjiSYL68FaoF5vzs5",
  "key15": "3Hg2ZV53aHVdSUv3aXm9ZKEPUrqfj9LXfGgCr23rTbPBc12xD9DFh54tAhVoXn2qAn1FAGJt51UXKQo8TVkjTnzT",
  "key16": "49ERhYd6WfgJYd7tcPJELfevonxHEUSEYJnCEEoxpmx3BSXrMNpfq796CGCCpmbBFYSCuxsG7pa8qY8VYfe7LXYs",
  "key17": "4yCyYWNU91vpJxCGmehk24rfyVR9AUTEnDoSiue9gNYnhtBAFHZkVC8sNrEX6Sk5s86bEAiAYKY6kCLxYUAhknnG",
  "key18": "34SKdTbiGFJ5d7A7vZueQcYa3AL34zNaLqWo5RMzhukXPYqkEPp8VKYLM6pq4M12RuM8KHNUGsn5yWH89nRdDGx4",
  "key19": "2zHLMsMHaJFensapjMmzrZx2wZLzW729KjK6ebnhZZ4kTVuVLxhJXbAdr4FvV19AyDwcGUExx6u9TcE5x86Lnjjm",
  "key20": "A61ikK6BfM5Zv6gdjwLPJzrkdiNMWMWLdetQgUwJKMXELM85mMXNR2pxroB4BR6NTXGevsR4z5kCwFeR5GUeN8p",
  "key21": "XUUASSpehrT8heaQV4EPbauyAQwuoAb6xkDW9AJbfaza3oupuNNWQmqHWYpvdWBxfiLZspPhHVPDi5vRK83e2X2",
  "key22": "4QcUuabp7AZEAFyVhuRFkHypDC3T7uSfF21tZNQmJUxfX58BjTqyjXUziRTZ6A1tr6d5ZMoERPf1tksfaXk6HGxq",
  "key23": "eqBX4udc2rfKGTcg9vbKnn9CBKNTwk6dg1TmQXMuo76bhP1juyPTWtqhRR8jcYzWgb7qgjaohGwVXCwS6fMtS4Q",
  "key24": "46y6A9UB4fAZpZQR5wFWz58yTdYBj5UPpDPgb7Dke8zEbDhdYQQ8w2SmLcfjDTF44tNcx5BbTVorzoDyguTyPawX",
  "key25": "2rnSYCkK4Y253vRKv7yNYGpcs3keAGYdibsBbsr6bemrrxZmgbq72KumH8zisCJq3PEp1vvzDbjATNS4gmq5s7TS",
  "key26": "5y4hLM6KgGHjHeFoTSw9Btm3Ca5dsoatdd728Sn1yaTwfeT8tpq6JMva9avyf8JrpmbGLL5KzLtZT8D5HskehAyj",
  "key27": "5iUdYzD8rirZdoYwChQ7Fc4nLgkW3UcG1XuNviTcJSQaV4w4yBPUJTxHM52m6WCfQAeHepMdD8YakJoT1ewdcMYS",
  "key28": "miQh9v11HVHhd9XAf1DpFQEjyLy7ouKrQj2AoPqp6QZUzVs3YVtHW6xETxZdPAJKpYLtyDxophjLDqrgTgmCATT",
  "key29": "56DspEnqAGuJd5Dnipua5WgsHrex7xYt1515rRNr3puKexqP16K7fvWs3w69hfmyS4g5Qj3uTPipoiboPEaTehWa",
  "key30": "36Carhn2YirNesJwSmKwcAn2gPZ9BHHVnYTw7kmXNgjfUnVRYdXvo7yb54NHBThjfnVhuDr1Km59zagY2zkBWKTQ",
  "key31": "5GKuaWPMWH1tMHfiGb1ifHYuYE4evbZhjHCg1w2xh7G9EU1c65MfZSALMChXGytie7aNxDmFhu54zYsYW5TpUxRw",
  "key32": "43MLeSMXfwVPTErYyYBkBG72ZWXiYeXZya8pZJ7meF2AABf6nAu52VoUYUXNi8et18P92zaicAdmgXtZjUyQV95K",
  "key33": "2HdCy2zKJQ6EvsakPJXRJp5TkVfyRuMyN4LXLdrAT4mzBazz6mi85MoEPXsdH18cEJpzmcU1Z3L4fhgGXhaWZomC",
  "key34": "34carDoxZofGaJW9vTsgUMydxZiLqgathwdrtNKCqZdyX4DRFTHFuuUieXGPuZZsP4Zfz3UiciYZj3im8th7qSJF",
  "key35": "4zmvgfTCUbyxxCHfhoCXLoqBXrM9fJzdmPoKGL2YVx1CtZXbrcNiaihBaHfeQXP5V7iyMmt13VYfSDZpoK761rwN",
  "key36": "ufnPcsn2PJP2UvkuTJMDDHGfpTRX8eaYMWrqywSwk26YBAgCwiLyHMF5QMS9HzFXMmQYE2GagKAMSrpCGJyQLNm",
  "key37": "QrzSRcADi562v3Q4Q2eWdsdtFRgh2f1rwFQKhZjFetufn4N6pM6mLMtmypXhKaZmZ1TUx2s8RQFscmjsS86riKc",
  "key38": "4tcC2F9Bsuk2aghyAU3kPGmi4yKdwxfcgTPLhJPfntUkFhV1iPDXnciJmhS3VhyGLPXvHunVL5TbahbwM2kWuYft",
  "key39": "4GAW3S7ppQx9QwmwFJxwwS6guXKaFpsNGJKTqbxLmW2SZykAn9LpUQxaGsUu66VAnGQFrxaZTywu7jaBXeLzCvMd",
  "key40": "4oVhCZjwz8ZN9EQox61mPrmeu2wBgHZn6Lrc3JbRjvdzqqVHYTuUgJn4dCig55LtQf9wxvG3pVat6xRch6PiSsRA"
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
