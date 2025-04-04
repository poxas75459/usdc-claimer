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
    "5e3GXa1JXCAsVSLoLwV51YuzpMCRizLmsqTzPadLW5VMoDor3UghtAR8SBSZDK6dLkMR3Wd39XZpmLSQ5h3CfKds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29acfCS7JZ5AxaeDDYxccNwAvX8AkrNtRCfLVrQ5oP359CsUg8dPo1aFuXryEaXRExkpbamTxKij2KPEzobBP1iC",
  "key1": "5CepUmAE8sJbPyLb7HNdAsmzmaeLbDBtmUeCfwB3xfVmNVnAJC2nphkdzfoW6xHsRedi7bVDRJjZPNsA3yzHLXYH",
  "key2": "2zBtytV6wRD2PUWJaRV38hW46zZfQRbpXnNu9FntFnpAgK5taNrUpJszQ4T5ML3wUV6wLRT9GkQ6CzbKQ3myWSGy",
  "key3": "46Z7n1tSe5fhYZuGYtMjaCy8BJfZsJVMuXmMtX6UqrxSCkj889uct1Spg3n7R4HxYhpUaniE1LcnpjmPYP6FJ3Dv",
  "key4": "UxxLxcZvZ2ngFVvnJutBzTzkESykgDFi8HtCUD8p26pDneaitkGSUjwzrnfyDy87uzgw1AjY4zQbTGM3JPsRSkJ",
  "key5": "E17T9ArSQU9Y8Vw5YJk4sCBvGnaEqvR3WLk37ro2sMGVbRfthVYYv5JmYAsXsNJbNj67Ufh5qFXgDsijTexEMJq",
  "key6": "3behBoUmVcypjLbcY1mnRakaBZCQZMN4JnnWThYHYkLZgg7DVGBVg1uY2UuGhbxC5GdZPp9XGj971N39T3XfRgWo",
  "key7": "4xTZEmYzqJMm2fgh5bm5MUrfUKo2L8A9mwj83ZGuLUcXaTo8EstT9EU1LfpNpzNtUKyw1eWRJzXtNh1iMF8edhef",
  "key8": "5K1K7DaKW5gG46U47DH11w3wTMoG1WeL2EoQB9R9jXVoPBgozTKCAtQagRAkrekj7PDXotg2ujxcYqqTYxWyVQPh",
  "key9": "TaFCFCGTwbA4vtaAJSccjYtMhS9F7xrotFNScHL1VY2ViSQ89M9Q4dHjTFjuPg1sGHBKfzHfn6CcFcjNdorTBUa",
  "key10": "2gVoSCs1RwB79FLz8Fj8o8NPSFJJNdeptuMw6xShSNTs1WknpbEzkoa8aGMhoEs1vZq7vRLB3gzXWeLGKojWeJvj",
  "key11": "464mQfedHbMCPaahzyQoghZUVNwQwBh58b2vqd7VqHQDzN5cosUfWcX3bNLG5RNMxZs188nTuhi5PaPQJVdTuU6E",
  "key12": "5LViMwK9Nd3Cns58VXR33LgTt9w2iWGb7VFJhKwSqttogQvRKdkTjDBB2SdviMkyG9MKYP5jX8qQXTvvhKQzr1kT",
  "key13": "2McbXHfPhgeaj1JkGoYASq7hbrargrSmHb2prVuHHTrBZ4D1Ng2Dqz42JdBSr8TUhni8CyQAMMuKFGLGGsnstS6F",
  "key14": "2Aeqe3kJyC2oHFpxaoHsEGo51roJF1jYQeYrjZjRp3pmGwxwRrWeW5PiPVZiApHDyHe9DKijLRjA8gSuuNiTJRVB",
  "key15": "3PVNd9by2XPkGjWWoZ2mXVi7nu5ZjqQHdofAqV3wK6bj1knCeESGnTNfowfnW8LRSyBpDbFw2oE28ei5xTCbm2FU",
  "key16": "4rQU7FGS4tNfhXQBhPZE35zcVFK5sgTav6UYUxsxhLy9FjrchDvNz8ny1ENiJWQpLBRytwm5emWj8CnLtPym4nZf",
  "key17": "5qSnKVkXCgJ6wMgTUgLLS171EEQsUFrWqqqDmc1ejv4r5xiGHsXWRrkxCchpmueBMGPK6mdJyE581xZpfx5DjWSL",
  "key18": "4BR84kAeL5CPk29UpsvUXG4LRLhreWvKSEdft2xoWnsAWYQj4GrHESTLHZcVWtYhyxSs15vbZPL1MdR1djhRQQxR",
  "key19": "64x9mUyuX5BYyKqvXhy3W9YQwKo5BkbnMYMavzaiwoCRCJUGyr5ntFvaD6xA3525z4pK2iCGwUxhyEykxXDnmG9x",
  "key20": "3DsAdnMVsh6s245n4YZFjAbNjxqDLs1JgXdkqh41MrjG9UypLp65WXE6LQRL3nFwHrDYSfUYxZcivjP7cZ8UZ27v",
  "key21": "21NtBWvbGpntTkRNSqSFbgwN7eXyZ3kr3yR53WWwSd7s88WBKYa2UjEnL91udL7o61K2JSvg349g2y4HXqdqGHCq",
  "key22": "22CEjcbavWnm6bvNGrAKHTqHfsLDQkSFWfMMcVi1C8wUy1AoCodzTnnpDtkpAQco73sisMHqm34XumM5XP4FtWHA",
  "key23": "yBv3DiZHHVdCyVRuv98tfPBRCNh83BJPdLmQPZvSmuXppPgMCDstk3k9kxwKqcpQpHjUW2dx1ZP3pcHCkdcxezb",
  "key24": "2JiSxiFJPPy4mpbPmfWMSkvLRzv8fzf21fA5Cw1HM1sZMvtrDN4fUhKQ1aT2ui9Jgp6aLs6cupagGfTtA2cJFGsX",
  "key25": "53BZrAJ9kWtwMpsPSR2fQwJniE2p3BEGH5qSfvaMJqRDVEBe1YDEZbtRoeZEGPkfUQ6ApzY8tcMimXkgXm5vfZip",
  "key26": "cH1Turv2FBcwkGD8X1yMhGfAoyEXaqZwafWfns5wkHqP5Ao6QGq7ataPDTchJvsN4KxU7FhKtsPnGVxGoYic9Uo",
  "key27": "3o3aAmCzM1ebNPjCstkgvz12g1Y5CbDvAzN2ubYVKieyJnrSWehtvY96s6HfBuM4d88h7zN3Hf2vF37XT2gLjJ5i",
  "key28": "3tgQxwbjjyBQqgAGdvMJYdbBQsCJ36ZdgZqHonxZYJsERAAwdftNzKzNrgjgcVeJtKvEiKBEzeyjpU1haTk96u3i",
  "key29": "4LeGcn8dreZS3zbHVvcnwaSeZUuYdCt1E9RQkAjSBdvYHk2M6T1CwL4A28jSst2WVyEwtrQd365FgBU2EzUPSVJz",
  "key30": "2Xoowe6H2YyXSBuJG2WrJGhycQnznEoUCfYXrXhm7v7WBNTYhzsbBXSSZgyPLnPTp2Z9xtMjndvdqJpRsnnbYqQN",
  "key31": "5bsrLqP7stn9UTxwfCC9L1mkiDwh6fEfQKKW76o4E4qp5XiDJaL1CFfFUWbntYodT7yKj7rL2XAMhswbc2Gbkgki"
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
