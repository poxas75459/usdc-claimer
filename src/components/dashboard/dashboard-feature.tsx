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
    "4EtjPYioB9PQDpELiMcvXvGYMCnM9YqiSjxsXxfzHap4TMdHBfCc1KktXqEMdrtb9n7aWeZhwhcHt1V98LQoWzWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTRtja3UssLvrbFhJvUaMtbsvdjMp3UB6dCViwSFWnFs7v8qeqVNUmeQd8ZR4PJYXsHDqS8ScGdCo1izPxKqrct",
  "key1": "2rwhELY9RMYVcETLUqpVJ4HK7MhyP7TZF7dUR83AW6X3UaQmsGG6T7mhwSac3FYcyUTwn4zVEHw1PxH33T5pH1XW",
  "key2": "4RAtr2DfWDzh6hQtEmxvjcLobnxAmzNDJsouhh6MKr5iPrNU6UYrMKSuLt8dNwCptUzS8XN1eFUSA3dVz9nGT1CS",
  "key3": "3gL7s8oBgns8psHLGBT5nVPvcLUNMtfi3Yswxqqc49J9ecmXsnYDBpoq34tbo6ajSCm86uejnvS7z3Y2tBrXuFvB",
  "key4": "3oXeKHGQHPLRizfQr3fE7tcypMWqon1UCLFi6tyH2GvhUVc8LcVpiHjjLyamQPYkhbVTdfcTLghCLAvZTaVdkHft",
  "key5": "46um7ZCEdQvcQwCYkYAyAwUYsDY2QxezKAi5Dpz8hC4EM2jsSJpYB81GzABHLcEvfDhQu3ECCWb3rEUhz1m1tgc5",
  "key6": "Ghy4yPvJ6yfsscdy1PSND6Pt5WPJkfEAwgz6ZK3FHY23yQGnS8o6ZBf5JtMAg8h6W6CjhQod4g11wLHBr74PgeP",
  "key7": "2AFjdeZEMYapLP723qzwAq698sGsqDifgFSG4BS1tQa2VoXu7ErMh57129Gjg8fiALR6hWB3Xmi1krHCBTyRDywh",
  "key8": "5WtfVDqn8jBi2YLNv3DYxdMNHP8GB1eJxct3yzXSk6m7qLrD3b2mgWWNzhNhJD7dcHPoWKkhwUekVAGd1Ymk6idN",
  "key9": "MvVg3Cp3z1h6bQeQEmjTAXnt8DnSCtpqFoqGyHy6brf6pJr4p71LbmMQbye3YrLoDGhBMfgVHQJG7dreYpAuW5r",
  "key10": "3h55xCHDj59BQjQZKYtdbUr3b4kaEhM2agRYUEmteE4CqejU7P2Zb7wB3RaXFeSDNVNQ8urokoKfVw5CFrVgSu7K",
  "key11": "3TDH2LqfNo3hDF2qaqDb4d218msAfiT3944vFPjYte9W216fAjc1iv61H3VpEpiFQQkGERF4oNzbnt2h2wDNQtMU",
  "key12": "24fU9f3QiWCXBsx1Py7joay8oz9MEXrEk11tGMjExGQnhSkD6Q2DhN45QoLWB7vyHhmgtri5PCbSjRgJgoxSMKcG",
  "key13": "gCewnxYFdR7PKLGnT27sU97iGth9DsmT3R91knkCnY9vWCbr7eQGxeYw4nT1GTwMDwoGmu9FCj9wKBeetY9YCWf",
  "key14": "3dcHJx4ZD39cYMy9Ae47yUPEbLH7w6dFydjEG5piDGmUvT6afVfbJ3skfd93xRWXHwzvvA8x19FzA6u2NoptKDCH",
  "key15": "4xZs15LaZeNJHTnh1wK19xdXXsZSZD9c5UdYA3uHoCHzcgkUaeWY5WyqkqYGLGTV1DhKkzwFQosn1nzAt7Z3UtpN",
  "key16": "eFgofZScmtwiuyRy5B13o5pRNL36mDDxcsBi4xHnGAVy66Yu8thYh9GzgjijcxAFFUCNQSRi5qFMhfauSxk5NMN",
  "key17": "5uxZVtNvdjXt7iVDU1Tt2rUCZFmkWnY16FkSQ8EwAfVYe7PxHLWYKmRyoY84YwCr7NtUYRucXvhMkn81sjX9QjmX",
  "key18": "yVBiLRuMBmViXAwb4j1DczPcnsLXGyjf4aazNcn8yT63MHpZPEAvkq2rQLTZsGAG85mANQvon3qu9MmNTTGje9a",
  "key19": "2uAPTo7sYvgbx1bCb5dTYffVE3R3C17ynQA2TSZxJuLLzAHRXSfpATCCEsVhnGPdMyaA61DMvKWBWjDbfmsFmJ84",
  "key20": "2zAqNvwBSdi8g5GbQAxyAWLf2Crx4BB7Napf97nnZnHNJETLqHwxjDXUVLuRP2CxdrnVKxiUCGjJqyo1CQtpymC4",
  "key21": "Q5QCnwG7QMfVQHxSG5uBVH4fmAmVgiwhmuqps5c1voZg3ryQzri4uH5pGgs3vZC37uRwVoQyCzb4ECdzmSbDfjh",
  "key22": "3b4oqn98iAcXcRjFWYSvZYYY8B3PCZoMCkunnDJxEa2YzHTuNmmBQtEDHzSeTCbw6ZesTsX4pHN68YQVg7yudFtq",
  "key23": "2t2HAK1zdCD94sZjum24iYuTNESzHEXBT3THLymYRCw2jdzJzumxLjWbaoseazJKQGcMULt74HRumHR7wHuDgo3X",
  "key24": "ahwd1RnNrEkYyBmEdPKu8tbeJU9KWhB7i3ipMDhayzMxMp8WAM9ngnKheqjbUE6MY8XBqKJf2TxfeBGHKBzTCpt",
  "key25": "4RTaj6TF6uuJhbWBph7LdPe2Wkbf8bKXdxQ8EPvh6eS9CDET6H2P5q4vAytAdadgUnp6LPUn3a58XfyhAMWmZdtZ",
  "key26": "5C46r3zF5LmtGWfLRY96JQVuazJgknvZJGp7D8eeGzyFEp3LFX9gfZSYjC9jZKt5gUjhqPvgxwC2hk1KiqXDipTE",
  "key27": "4y6VrTZjSbWhGjt1BvtszQXRZNVN3AmrPwmgfWXNwSwrmVBHQcX1PH7FgmLfdb4NZHAm8D14JnnVDkYtmkxD3Mzw"
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
