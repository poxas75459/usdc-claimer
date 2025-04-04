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
    "ij8huxJcWwD3oLsrdRmriJfYcE7MRccwdcTcun93eBw9Wjg1w1QDwUsdCFZrzHGfT6Uu5iwub3Ww4pJ6PvPXq9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LsNB4Ct1oK7Br6CfEyUotDAopEaBkN7ddT4ZjXwBMy2mnZSVV51VrtW5hNcJqnXvkE4t44UA7DWacSHXvmdDZkq",
  "key1": "61ZjpHsUkbUC42K866xujttB64YF1ptPFgSriNWBz1phc5mHhMfmZtFJhgG3nD7cwFN3B8gSx62uHUzw5ptHuzwc",
  "key2": "tNmfctDZSZAZizyZyTFabEVBrkHR8zZx4JHgvcv9nfNdtqWoHqV7gx8U9sQB1Vo6CpzRLFcQRwJTdKvZVgFYZ9c",
  "key3": "tTgMxMuHVHNYJWjKN8ZUXQXLFwATHnuvj1MfxNbLPYHto9oi8tJkvNSZ37mF4CY5XfuT3kcRDYawkJD69Mcy8pD",
  "key4": "4NtPaxjRmRb1gb949HKwvvMwrFsnUapKk7ToP7YojU6p3V3B6FxyWfVa4LsuLoscRkhQgqZFsSxTVPMcq7Y6t6JH",
  "key5": "5pHegEzuaG34G2FodVuxhAWMtEjkYvBQMK7dH3XXq6R238C17fW5cFY7DPzM8AjhtM5WgLAjLGgUKkoCYzkoAFXe",
  "key6": "3Geys7SPUXmtbHuqFzDb8Ys82YxnDqetmahruX5YiDSFixi4kaiRKsLkLxX5Vu7rxM8uVqqL6av6WzCnbipRpzZH",
  "key7": "5J5gcM4VkkYPAoAYaf4hGT8JbtTpjPzxRhiS2jUE1PqXKzuMoMfSaNk9C8Ae4LsEJDVfCa2fQvi8vthTdTqpyVg1",
  "key8": "5bgQ5yZF6Zqpf7TWHo2sBzgQCZSAK5shgtksx14QZY7nWVA3iXpxQSefeMDEPecq4G2BpkZHUwbMkdUbn6BWv8zg",
  "key9": "4UVViiHDqd74LktZBRps8mZdJm7y7t7haARwdSqFf4S8EEtniAmNyeWHxZ1k4iqL7zKbG3r5TCgeyc4hwAZ2S7G8",
  "key10": "3gwN4SU3e8edxUB6X21eGWQAPb54v7Hs2wwWriWzUFqjEGwkiWMwmEFkzEesWKDfjzmPuGRqFpuWRB77QnRry2o2",
  "key11": "5YUwnXLMfxniu7GZ7ozeeuHc6tCfC3FHAmBHkirNSGydZGLpipsgvXWvzaMYaQCCPREBJATkFqQv8JsCZ8BqyffX",
  "key12": "LcWgBETwSXUQvoTQGA93bjoVeA4zTFEX9JT1mcbRoKzfBJ86QBBwhMuP1C3qaXUdCVsKQDvDgUzTRgaiaQSFRKh",
  "key13": "2Vuf8MUsTz2kDhJyv4xqYNNgj63iRxdcV4Bskoo6EvVYCuRTU5vdpLaY7Mz47DAM3WZRf4wxg5pcgMm6VRC3nYs6",
  "key14": "4vYA4TZt4kC5fVubU6n4XpBu1P2BqU1XUBPbbtXQ57yBzD1M5yz14wG1j7VFGvRJvRa3dv2CL9QAD7h349gHa7Xv",
  "key15": "5eiZj4Pu5RB1teC4dNNF9dh24fL6a5xcumPctzk3SaLbMT9PY1GDYFW4ABzxTudzNLWEKakj3rzuGTsSCoUoZUcd",
  "key16": "ANHwDn6jq3uRf3Jd1qZEsMdRFrio4inQgaPgyyWsZiS2QrtDosv1frzUHSHbsGYyD7Q2gruNXNwrWUpW79kETcL",
  "key17": "4jnKAGN6qJ1pPfKPsjZHcu7zWJnLh3dVSTnWCXWN52KoM1BJWg4Gr9gLDd8gL1vDStRBJMsnVJdMvVoR2s78bnUL",
  "key18": "3dUgmk6MhUn8QtohqfwkrEKE31jD51LNGWH93WTbJYbBTUCrhHo2f3RJdtRmd8KuDkLNoqTCF8UuCRkT6W4vNcxy",
  "key19": "5B76UZXNvLoUUwKMjkGBCRey2bQXvQZ2L5BViNzQfsx7nHXrm45t23wbeog6pdBwPETzgpgxcGHwVQB1XTNKYgBz",
  "key20": "5PNqtbL3WvFCupXJZ4i6yNEBWGsGmKhHVkqWPJzHY9HQedvBoTNoTZgc7AMTFVdPpMzrTi3qZuXGJFRfjLdCKQ2j",
  "key21": "2LW37US7MqbyFrk1vhtCrhLT5MWWZbShsuWkqbddFgzXQfnqQLENZDCadr7NsnUWXXqnVrZw11SrK75YBwkrsHKA",
  "key22": "3VpLgfXsijytFPE47pwgsXpyQzMoSc2bggmh7JFikfF5Lgf5PR4QWFK9BjNm5DGkVbGje3s6k1aQtBHKy5rMAtFQ",
  "key23": "3ge1oZG99fJ7TPZLFSFdyGHkjBx81CpzVQPEL6y3G5kJDQ8cVVyvcjiYgTF3JRb6FzJFf8c4TsBh18Uzqo2tyFtW",
  "key24": "4q2zZWtrffkmksByW9zJiuJWoSbjgjthQwvnUriUQ9m4yj2e3PyrTWNT32PDoiYn7CWfjmETA2H7E4CbXU4Y5k1N",
  "key25": "EePGeFzf3ctnpdNHQa4o5GnVh1zMJgXB9aMa3LzsLQVQbfQVPiz2iwLiwsb1Z7Mzi6q9ZnReqGXEDJkqAnb7P2o",
  "key26": "3K8VndBVErPQMcxz665w1AkKZez3NSRcq9bb5duMRfXnXaWvWLVr7s15gwev2P6XtoRkbPYjRgmseqTASFsHG7NB"
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
