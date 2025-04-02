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
    "3GVXYMEgu3SDGFPZtf7PTqvVwpYehkuUjMqJ918VRGLgc9cuXhBEySGCjydUge4Xwj4XmqUH794UCpz8HC4WUfdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SaTP2AjMGWrzLcW9BuHEtquwsBXh2KntWpEhJC6e3R2LahBuuUVL6CzfWYGU6ECzKFoxdfSESR38rkntV83PK1Z",
  "key1": "37RcnLgXmemEuzqR8ystEhtw1o9iVCEGjoNJbMwj7cnjJJuRTzGCFcPEytyv4c3xq1JjndoDP7TyBG34wo8x1jbu",
  "key2": "3uDmoYnvWnB8Njrpygb6PrzytcUjU1HKfwdrA6Htf7i2p8NdJxjpF6xrydGbJ6VFBTk9zk5Cp8NnxHanFvVs3p6m",
  "key3": "5qMyXhSXDrGFAzuQq9rviBSjxPDpBSHiTDgFZHh6Cn2qoTxzKcUdCmnmuKXHwXZwDFHigqZZi3XmCLVWoBmrHkch",
  "key4": "583L38XRfk7hxfChrqFv7quGkWraB4FaKD9vo46xeyXDyvcPnj9Ffaxhd3Pu41YHbHkuXBUvFH1PB22czvZhvYKC",
  "key5": "4j9d9oqi8tq2UaoojAuf2rGR5pWLdZt3zD1j6yxwVFQs7ZAsnsiB9xZimQci7BRfXEFTQYgD7PABFdXf7KTGWqyd",
  "key6": "3emHqfamGPM2iJCqcAYJvA2reCvyY6pGm575TuBBvYhf9TtfE6WXR9HF7M4vJqTxNBeAheuapHZVyuhUzNFq77ZA",
  "key7": "2HNNACrK5D49bgF1Z41TWN8VAb8wdnThUBimVydF44FV1JTGSL8kHEBauvYRMuMmg9u8SPyb6VcaGybrPh9iLjcu",
  "key8": "jAyxKoHMnjiY56VaiA8kBMToCceSaqUCvAhDx7RP69sUdVMzwEtJQgUuvbNEGPhS6zZWTp86V5gfuUo3PBNtrsJ",
  "key9": "5mzFe5FxGF9bLSobU3eRCMBvtFb8zuzSC3PbR8paSj4FPRmWGWUzCSQWdaYR2hiCxBNcNkQViXW9NqcyLZb4P67v",
  "key10": "4idLSuPjNxpxQxwtYfpq5TZ5xGFp1eywKPUhEC6zKwzp9i7GxaSe7Eu8ibyqJLW3tStBPqFNE33sCixhZMjxuUct",
  "key11": "d9kbnRF5H21t4Tj8NFV1HaR8PbWjDPcCqvfCLbptvzhTuQPfpCGnS1nPCBhKmawo2afRfGspD7SXbetvRk7GPKZ",
  "key12": "2mVtPccxr9cwiAEdBWi8raGURjqzWkSW7WddH3CCM5fhAGBKwLPF2KPDxqUMEa1Bxwp7xS3yYcDJsbra62t7QdFa",
  "key13": "5rfx1NiGuos5hYgEtwbd8DHiGuXaP6fXNT3YmWNdzF8dxk4H7UgKYVHYjdeqNmpVsp9a8zkTzqFJmoeKHfpyTCDa",
  "key14": "5mE3rUsWX77jKFoFvVLzYKvBt14n3S6NrYhA764zhf7LG9f7YXSm4fzhSNFVtXV1kHvqccFa37f3QhXWb7RUReu8",
  "key15": "4RgAwEEeeW3qGDYbmUB5ezuizE5doHruLt7ye4aaTf6CdBmjtVMFT4eP3n4i1bgg761EYFMkrrBCPYiwUxYMf72L",
  "key16": "5qkxXqMLyUUZKm7sS4NHcnCje9vSniZ6eU6GG5aSjXUq7d3eDVJrJ1XFsHWFoGmYBXwTcgKPLEH3CWPWq27zv2Eg",
  "key17": "4pFoW74aiibdAceNaGnvPwgLhiQotJzubnNiT7beCYAeupk5HRX2bvFprpstt3EJsUWn2JHLRhJLgfHC4bjafqq6",
  "key18": "3sTqmQ5ADKxFRaWrQSFtddEyhrik4ZqYxmMwxQTEYXDHRrJr7DSw1fvftm1yLVYdwkEworRsQPAyGFuH62q9Ghed",
  "key19": "fR6KeUJBRWsuWxstvmvUEEPXm2v38KbDrZzTRQeSXuT1iaD2KaGzq83MEYGQ3CfnMeUbBDrxZpCDQrhLB6emgRx",
  "key20": "5EXk5kN5DZbs2w5EmjQh3jXoXeEHkR4AS62y1z29HP5Zb9oHH1Rc3K9LEp8yABiyhrZamykQPpQYqSrUEb3Xbmd6",
  "key21": "ZooXLo9tFMmVSdm18DQSHuvLSsE7hHNDfa7gs4uGYxs8MAdRzdQxt3cvdrtotHmWna2LWe3DBm3q39q7h3UzFKk",
  "key22": "429syoH5b4ioQ2Vro1WCmZ8qfNG7CNYF5HLpzfghDNvBfR5STqidmf5Ptaq4UkUm2ZhgJVgaG8KsB5hDt8tzPDWS",
  "key23": "32gmeDZa4A924DJykjbbFHWBbx4EpeiqvqwawCneKsjRg9Eexb6A1wcrNVcjYD9eMH6s5Wo12g8zLQFWGfTpxcG2",
  "key24": "54KnGMRhgfrjLNhUKSxwixL9sQJbAvcmnSH1AQV3yE5tYe59MviKNVpBp4uM9FP8rvKVJSUjciuRYpJwaNPYPJ6G",
  "key25": "4Gvsj6pVWQ5QoA64GevzCLsWPLvNL1DXmvStK4xx3kraGk3utUV7c8mmEssyrSexZJAztLWWs64F5x1wYEKPAe2",
  "key26": "2oTAViUeaFQHVj1eAHPUUjhLUegQ6jeXnH4NP2H7AgkGN7ysHV6BTWW6d2yeow7UYxcKd7PfXQn1HVoHziejRFsF",
  "key27": "L13hBong241bu5ZZa9mYYMpF7V7pZfFjwmYzC1KSW9ZWwPCYkw8AHCARwXBH4bNAJ1FSyWa9oRJvRzpXyakoowe",
  "key28": "5Xw7nKZ1HEGa4UNCMdMkAe16bn4amxhgu7zxsqwah5x7RJkze8Y5nJEUWpqCcyRqHr8KkHME1uzqbKC2oTmQgqcA"
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
