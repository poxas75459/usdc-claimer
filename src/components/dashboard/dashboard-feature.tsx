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
    "TaVhhGufnzFxpMU5SeLAW3qz65qwH7VJGpQ7jdXmPnMvdjwgT7StLZUxvFFs51wyknM6GgZChZhKpJoLU2Pkx7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZkoWvUnS6466jXSHbsB4s8HU36TRWMjs7i61pqCk3KZXmf2HyL65LY6pdwUvcBmwYNaDQM2Moq2DJQP4XkdJpR",
  "key1": "2vsfTSd9FVZpU6dcNBv3G7XvEVaEckGCFmY3zEdm3dikKxYBLMRwusMYeJDwgAZYHVU1q9qUwqGszKkvD8FEn1UC",
  "key2": "4hkBvRqWHy77ksh8c1qSmjqnGBQHqpWMpHZNPmopCVBNWdgbnvXQ9mVpPo9CiSBocEYXGrwEGCRHnNqsDaXXrDhP",
  "key3": "rCeUbWsqLQQn2neBBB8vMiVZKjof7nKNvwaqwgiYNBpD8GPBzim7njcni432hyioyfDBpAXGYnMM5pQ9f1NqWyy",
  "key4": "3KXkg5WAZdkhk2eohUcqL6UJTdr8zHm2t65Ro7TZdu5caPt6iYv1tHSFVqc3MSqcfFfYmG9mCNkGF2fUQSd4sm7t",
  "key5": "4sTeQs1dYAVDCPMu6Vja5XNDfTX2BFB2BWdjtMnMznsMzi2aRkMRhAGmmxQbhuRsq7ooAFondb28hqJ2MiLH8YeU",
  "key6": "5s3MNcoa4bgtbRv8k8wVEBB4DiZiBiWH2mWchbUw5HgzrZKuSYZExfWqRsFeRAhaBhaecU3qqFkyG3Wa1i1G3sDe",
  "key7": "ARFTHMGQNvHKjr8ExkH2j51Fqc9n4HXEcErG3D8vnuSaeTW6Tcv3mFzuerdZWr3yeukZ93uDWBPwaVQaJGxEEwx",
  "key8": "53iQKcrPSXgkHDCD4d4TS1haCbz9xVMyWh8weomaSnoy3qGPW4ffjxrXRXShrXic9gQPZ9zxr3EaczXgitC6Zwmd",
  "key9": "4fL2XZHM4vPvz9afHJ6BHMYrXbzn3BGTmgjzMopJEcDbStbdywYeimYBaWXjASzjDKQNJJctoEFoPDDCNZGhWhfv",
  "key10": "57P7bbxQ1FamRCU1ZF9xBCXqHpRK5VqbGvV3MXfqoCwEyLaGHKBCgdTK9JZDWT1Jr5bqsEwoQFNMN6gtfji7rFGW",
  "key11": "3E2i71pwTdQakTjgckuMEcXgA2aWUh5mukqFABGJjP92wjebcfuuutAQ9KyGuiFGBzrQNUuLfGxMjNCinyRubwPA",
  "key12": "5LxicVFWsTLcfB9LDj5gpcPv8kpboxwtEJsJ6QcF5v6C6ihx1n9GH2ZiTzrtwv9bGkMJfgkG5pbYXiBMTQ52ka5q",
  "key13": "53kqbJZn7WLBAtK4UqkFMY7F839rnU5ZoDSjDef9M6DXMCAMBusPp14XrkfoF7ezrc7umrNr1Avm1oemS3DtVb5Y",
  "key14": "3XpyXEsnBbc9VGZ29pq5SakceeZaTM5Nuxx9oXFtYSdd4kGD2Y4Ej4FCgay9ueM4NtGb3MHVMVox9mc67FZ3NWwT",
  "key15": "21ZS7tcKgWvF9SELMbYn2i32LA6XvoWjHdcAnRcxdW5fUDspQhwcGbYFkcxm42Wz9gaoAjZK2KVTQ9Hxc1bvtCTK",
  "key16": "5EcLKNHLR44Q2X6C2SHmwnUZM7ucRA5mQuvjMz9K4ocsPN3UsMg3sQhEvG4JybVTaCZcMcqkPcnQe7wBv1NiYrsK",
  "key17": "ZXwBuRXecqQbmbPYWCsftwNHAyNTLj3nw9Y5DMKgXKsn2Z8aob3z4HuqNUpyNCTmkMp6qFFqbUEd3J6Vi9UcJXq",
  "key18": "56xvYdW6QHFWK2CsVC8EwDk76T66neGNDjQzeWgBVDHP63Rcdgf6677NAtnzEcGRthCf4JLPEe5UN47FZEDXWxvc",
  "key19": "5fVVbsWPGPAAwG3HgLZvVkaVDE5iWLyNJfeMSyys3LEMoive7QWASeiU3fZFxaNCoY2JL25uvq3X3zHudxAzawNb",
  "key20": "r5u9eoDH9M4N8bEuLuiBrjFwChWh2fAWSPYnK8dBgv9R6sHDCSb8zNMoKFEbHD34m3J6o9NngxHj9uBqLfsQ5Mj",
  "key21": "3rdgM6fbosw8SkwhwQ1XAL6YAB8NT5kw5k1FL7U2xe2ogSsdVZZnSFz5ZpYrGxk2WcdCE5SUSLNXm5WDimVdyzYX",
  "key22": "YGZGrE4D61hjSFaQ3UmBbuiNYRZa296EwDJuhNa8VP6Xga6zirmTDQZoMhFXByxXqgL6QWBjMGzoXqVsiJYfVcB",
  "key23": "2LxxE6NnnT1YcnS6NkvMUsHGew1iLvmTsGYrqGCbd9VrEvzqVi44T7mZPLccdAr78noDzFpAPbjgLkHGtbrGzhnb",
  "key24": "622FaMVsg3Ac6WpzDMya6Z7f5veLLVNpeyc42KQvowsewkfepXKdNitN4QXFzKeVHJR4PNc2vVtRTMjPoVJgnstu"
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
