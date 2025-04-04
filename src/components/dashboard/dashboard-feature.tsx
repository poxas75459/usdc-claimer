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
    "NJjd4F8DuxDPeWPatxCYxTETEnhTAn2JS2tW2xnUrpHDfzim8fibRnUKYXg7JAprRQ1ME3EFAwJjbUScTDrs8Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8TeAfhP7nEJUvCLxggyQEqmMiGYYqLoRRKiiNrx9rVViKJNv1r56irfKLFqBvLaLbLiHpwS3MihMhJop9f6ohG",
  "key1": "2uNedR8R6PmsKf3RgiZkCU8nmuZK9Hsts9bPkUgMqf5V2o2VboJXpzLiSLxwB8TECYPfExYgM2GyqvzqNPrf9HN1",
  "key2": "hKe4EqkSfag5BhCgm2QRmNe4oooYV6m4HYUh2ZYd3KAp7dD3phcLqgsMH35mjerengGGoFrBBY7sE8EVanKRExc",
  "key3": "2ZRzX1AaKMyqCEBcgn5pBYGB5vd4ShEV6xRQt34275RrX3kWwC14SoMaDf43nuz8jQy1cpRiKZrdiQ14vnzbXcK3",
  "key4": "2btqUfKWRMa8vVPHbj4UUnL3gf2jzbyvaVmVnGuADuDA315qQ4B2cQwLR5SeMxSZz6ErNxKTRzWX6c4QUDT8iXUj",
  "key5": "57jCGZLa5h93tPVfTSF9h2Vjv2hfY4WGwrhbpsb1uec7hCUE8tYFw9g32vSzNiiwk74sJXcbHq7C6epmqn1wds5b",
  "key6": "ykjA5iMbbPDZwcweNdyuVVN3NvKpre2R8vsgdbCK9acWfXeRaXe4L1RiZTuijMHynPy9yRstyt7d7A3TSzjT2QG",
  "key7": "3Q3numFRc6LJSa5NMqKu6ibVvCoCfUnxSnnaJPJ37HcN8r6WyZ3AaCkPREcxQaHGs8DjWBdktQztZXsTNn57Ck1v",
  "key8": "4n9o3eyN7Tjh7JsFLD8fN8TCsihdZDQQp7tnUS6a5vj8DCDPfVE9PdkeE8P7judyoCxuncX7eQ7hcPQsacBx25ps",
  "key9": "q9pcmQEYq6z5ydLBSufMjf9hx8NNbu2zUpsEE2kRSUy5rw41dnFhEyxPTgTsujDhVGd7hR9efWm5tQJ8yWPuLrU",
  "key10": "4oFmrgpf1eAFDXWSnMsWHYcL2knvqMDouZ9pzvXUhMdeAj1uh29kegz7LETkv25Nmg6zQCp2Wb9xgLahfj7BiWcG",
  "key11": "58hXGCF47qk65Zj7ZYP4GPkAjHBeJx522EvadUQdDsahTuYnAcuDRYW71c3LYcVG79ecdpwY5nwg3VHLuQ8HTqtp",
  "key12": "5NfpYDXr12vibUp1uTRd1UHAz33Pbie6Zn27iJnHQepNivqrGYopZgV32K5Pc24tWDHXd7rk8pU3TeD98VdZtj3H",
  "key13": "5FAxuyigfJu5Zz6n2LviknkNQeRpQdNnsUqUx8vZgEjhwWrVupCWvbCv4phzddZfYgENpYCFarziMLJ9vYbnDojZ",
  "key14": "3XDvwmqPYZ1AiKWLaexzSEqPMSNa2kXsuEKi9cKRAch46kiHEW9TaUbKxsxmuxPmSQT3zry9SgJx6iyL8n9duPmU",
  "key15": "4v6hYL9nqXUUgoLZmD7g5qVctMY9MKKtr3k8L456QDcGZf4X1Nqxb1viWjFXssQQVnpea3i1PDPGKLfNEbDhwxD8",
  "key16": "4i4hsw2D5B7TLrk9iTvsQVCny3ZfULmF67iuN4FjLvBY8NJeUkoE8aa9D5EejGQHEpVeNg1sXwjKXNqJJ3zBxby8",
  "key17": "57ukubdhi43wbhwybSYkiY29h7yBLfDJ7SMcLpNUEANLfPxoCT7BjoKyGs9XL9thTMbmrMTXPwTXLytmpMuF3yAC",
  "key18": "4eNwGQdLZXswedJguvDGNQ4DLRR3svsfzXZcgMbs8E8ugg9KnbTPR4vsT9xLVZRtZSvjMs2nWZW9SZh7G8f44vfJ",
  "key19": "45SfvoN4Pg8mmfhjf8hBKVMNAWR85YV354KddGWBa9ub5Huz4awQ9eoC4E9aieA146wwT1zWfx51D9f6s2mer98D",
  "key20": "23JuXstPN6C9AxGra1sztxX8v3XRqaA5FdmCVx3XNy3vocsueL1g9MggiDFznVMTmNg6o5Ujjn48q4LG8M8TmPCU",
  "key21": "49hSchR8nPVAhdx4SxR9b9PVgckJAGsCzH9tvzsvDG6ahmwHYnVjQmuq9JL3Dm46zeoSnqM7ktTwCBnt6bAKZYyX",
  "key22": "42YayWpazSjf258ZT5JBa9UYpy75aAgzbQUkGSephzixtKafek2haxq7iUxWbKnyeyWG9CteKHaFmvwACtNi8yNg",
  "key23": "3izv2zjYPmw7tNLLEK77bhJvxDvfV7Fq3yVeNXUZckwySk3Joh3pYkNTLLv7csFDMvPBn5T16oS23eeMwdWoEgMX",
  "key24": "3zwq5cdA67KEiou1YBhHu2hJFrLQYzfcrhLmNeMNeCi4byUUwf62xYVB9Bas4u3gGfTdkgY7eeLYbnA2XqHo3HcV"
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
