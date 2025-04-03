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
    "5CCevKw4GA8r8pzPiXJAkfmhjRTsHxh75ArRjJAJik8qthcw9pN3H68YXAN889v3fYrCHcmjDPG6kuuwFzSvfz5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZXm3bKcHuawAK9TxyUajpabrfQRawgKrPkUm3EGk6AfGDYa5QsdnEuSg9QUXAqiqqDBsJ4xBc2ewURh5ahr429r",
  "key1": "24JohxoWTaZvE37VgpZST4WCc6dCo95H4JXCi8M8rdx7QJEbCjhMa6HmQ1vZwzfQqJMFj6R41QPJiomsHjeYDECm",
  "key2": "4snKw9VL6U5byX261taC5nRY4A9itUaNFwKQzeE2gXzKjqr9U2WK1rbQe9muNQ1V8JSoUJt7GZhdkvHihWPztQo2",
  "key3": "3Y2Gxd9pV1DdeUHFJ9kvFfw9VeP7F7fRuh74Ari25FMPokxAcu3ACDyGVe8ovpRzGoRhE2SEMx6T6ZdZ58BuEfQr",
  "key4": "386aEH2vyg3taDjsBa4UiSSY8z4skmhvVX6YV7nGBK6cmNqaUWsskb1HyLyFzfSVxB35Dja58xiCrF6ApqTaRBdb",
  "key5": "2tbcAAxp5pGwZ8jmPAbbhYBHmtfpLDXrMaDccttnVHZ74kcw7YdTqNWv62PbPueeNvsHkdTAEphgCqt36Fwt7Vy6",
  "key6": "2G2tRoaoHUHLibUzZc6QDWiBPNmBj34ZftXHQoRDr1dn2TrR89aMCXwwiy3LPg1GikFSFQfTXBLnGhKQhU3Ag9rc",
  "key7": "595agdG28fMJ2oc8ej39g3nQ7NEhsD2kYcFM5WZ6thzpDc6sbAP4M4ciWPj9gZXzhCwzSP7YAh3t4bAMy35T3yYM",
  "key8": "3bU2AqrKp4w2HbWecazWbM87qpMSNw5wJqUmuJ2LkrbpdGVCQ1UppafrBpiVFWyHjnL6NFwLKukGEW8eNzw5NE27",
  "key9": "pcKUkuYftUTtSAEvpdGE1poR6cbBk3jtsL75F9kxyH4igxofcQH8SCMCcPJ29PnGUBksPGBQuzXTjY33pMXKwcU",
  "key10": "EQDvmfgsoyabdshXYpPCx5NZiUPPfbTY4gmAbtQK7ZEevi6HYGB62WZfdpuwdEhZcNe4PcG51KqAyteDRLnDN9n",
  "key11": "5JWQbEZ2vNtUsCGkg1ajbck9gq9KLLsCNADKw1XBPHovQsb3LZVKA8meXPvrvX4aUPsPMTC1pfovnHEWNZKcsTVE",
  "key12": "3P4f1BZfZpMYUyaYReY4beU6LFTHZGwusE83FpzYL5hVd5gqwpA7hg9jsgxvXMstsp9deKSQ7CiMLaaDWzRgsHLK",
  "key13": "2BQA1Qk1ygki7kF2adzJXyTjcEaeFYbRNaYxXvjLXUajq7uacMMq7m6vnwiLjUnazoWxKEXrzcxT3Ch39fwguETb",
  "key14": "4ciYqfbULVESJfspiuqjWSFTobVdVbvVUThHtksRBb2QUL9qvgHQAfxrWdEwrVJikqKz4ow8KM1KeR2FMEoGQE5B",
  "key15": "4bEpy2t4vrrv8QDLz5oct6DRqKxi3XTNXWTJoTEgKBSv9QhJx3KgfX8eULXFVMQdgWPFopUVJemDzfCGhMXkoEQw",
  "key16": "3W54ZPQvid9FMYCAm9fwXgs9EceZWki6PfCgaQRsAQJoTa2RoNiQdeJdgVsVeuZ7p9ddaUsj8K53MnrVeP1wTbXD",
  "key17": "og42ZT6MyN2yegUTkRx7NAm1VDNUGXjkMWTeVxFewKB65CvgZ3ZNYiYWRraymeWvbPu4RHEfzuyKgVsMDygRPi8",
  "key18": "65CDztaQTaXxkdvnEExbMb55qdRFNT59rz3YMi2V5UTgGcXqqGTYrY6AcVFJPgCe3cdgETLEBTexrwqnEUJFAVSp",
  "key19": "2kzKFGhYuSoPLACn6rqELHkJ76UxozXSoqRq8qNNCVmJbE5o8YbdnByChaXDztdH7AkjWcJyx8FqB46EECFHtSW1",
  "key20": "4TNMmkA8sLvsuKtE8UgtpW8pLxQogsrPFW5r6Vmr5fRNtwwLTUDxpE6V2neYYG9rb7VLwA56FXDEVZTry8urAkEr",
  "key21": "2QU1wkx7AqU8urswRKY8YgHMivmRdyqehiKuBSxo42WQu8QRkXKDtmfot6msJR9teQVSvE5tGtWosZJc6gvDAuXe",
  "key22": "523w97XnrtEra8adTfDWmZ4hd2LFrNxz8K8MtJ9GyRFwdLULxoCfmRGGgAAHetfPejXGtbLFhcmAVkqEvnV9ua1n",
  "key23": "5zu2xPyj3JqZSkexnFikuAKmC5CA3tYnC3YrXbQMDBKdTtj5P5DJJfthLFYJfVr7CGepnTGBDFwFEia5FsrsnA3c",
  "key24": "2Xquzfm7QSNUfhJ99cp44zz4DM1a48YceptbYDKrxMBkz3uhkzX6grZmV5Amhy6uQheotGJVvMVPshF9JKgS8NfD",
  "key25": "5M4rAnsUGmwyqd87axCX7XkXdJxezGKdJD8mxm8kBLg5gnqitJjzDfQXUBT1wUUDAuJujX4gCCPBi8LPkmhZLLSF",
  "key26": "2eUrgWuUGuWt9AJ3596us5fhUtm36mh3H792dkaXGpLGr7br4NuBqFyLmk3Aq3favpNNNBVKJYDWxUXzqHmgF318",
  "key27": "3EqApztwrea4wiGzEFLpPxUaSpGKw3j5D6Cijsuf16SgceYiqnN3jxigJSZ3CatiTzrCpXXQZd9xLiwMRTX325mE",
  "key28": "2ZZrkeuyuGNgQ7wtDj95XeGffuz5VYsHxh4soww4N7YpnBPBvviW6MACwrPj5CLvTmEPr23DKEZ2JUJXpnzkzXJp",
  "key29": "322kQcKK1kemZPxPBEFaTkcDw2aLG1hssZXST642sBKHXA7Z8MjjJ1VwmSLw9aAHsvesgFi2yFqeHxwUztcaLgVZ",
  "key30": "5Vw5rGv3nTbxjNaoCvaBYki7ASqeuKhrMhiDdtMPwKbv57WLQgFkoPWTM3FgTxC5EbiniEw5YEsk1Pbcs5f6LqWh"
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
