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
    "5KJswS7NJcV8PY9tyHLP7C2NNGrVRS5jzkcbspM3wWyoHUGG1njPyo75bE7HwMzHUq3iAGwVJFTjojTDGa2habad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWL13Y5SmCGQeSGuPv5dTtEr4iWZWDey4x8pTgGpEXvSz5JLq9eBvceta6QScYMbXzXufxyeY7oTWsXSvUx5qNr",
  "key1": "kqidkXBuXQtqzX1jXamhWedihMLooAG7ycPshCn79vAAx5X56YpkRWrrqrew61TaJkiEdqKabu4jyah1duHsMXi",
  "key2": "2zySK844YeR7vFUgLpdcR7Hr83kawJyW8efat5UqRa5rN2xJKoZNMC1ZehhrLbaNdcB6mxgA2sh3bp2MNFpi2gjo",
  "key3": "3x7QY28Uk9Rs2r8JkiW3cNnz7s8oogWJEtWSzLP7fHFnk9YaFyyvmLzpWx3i9kwtyQ4pNELhvds84ZBaod5sAh65",
  "key4": "3nG7QZmjAg69DxEopozKNyZDP8RopCsa3ZsqD9fc62ywnjzMoiX7DsjajRwV1pts8KW2E2M1TKRG3KiMwr7edZR7",
  "key5": "3DhCbJGutSkdKiPPNSQG2oDL9ZuJvjbTxvQv9avtojjcfy5Y7L387Mb5oZ22Se5Vr51DGg4g9HbCFT97ArgtdrWf",
  "key6": "54wTGqHzwK9rFEWLKhKJoWsRWgDy2c5v7z59Cb9ztcLXoHHgk7jzJpA4mEMDRfamoKfpadjnpPjzqrtBo1C6oRPS",
  "key7": "33Xq2Rj1r49s9Kp7LKt92QtrkgptGCq6FEYHCeiYmCXsgx1geA34ASHycTQToBjLezhSjwpZ15AmtQJmaRA9ZWQ",
  "key8": "252MA7rknGum4oMFaApnp9nDrBVVjD57EPWdGUUgweM7LCKK8vjt4vDdRe4uPSpVxEYA39qczfwjoaWaWqQWgKLt",
  "key9": "3B19VpdTdcmRUEm7AZaxd1GgKDefZDWhNiSLQk7KFZiJkzXcthEtN5FTrjSLoVAXf5uYkX4mGWssJS9PFrdUE7ih",
  "key10": "2jF7qdWt4ktK9JF7dT4oSTvYoevz8je9CEUMwJ9jABZPXM4BMLLHahFk2WVMj2taWDWTvic2ttPiLFvDN8NsUHcW",
  "key11": "r4HBf1N7wgaUXcGZX5CGjuwndh9oDFgaf5vgdATuCMf3LD8UBywtTZsiNuCbRwiSQ3SxAubuBPNAQQh5hBmC3EJ",
  "key12": "33ZMFcQXWMqRDUfMEko7vmBUs5P6huL8JdYbMoTGuEepgzQ7pTV8TazQg88ZmR7t9WBD6HXmbAQhVRJFWUKpatQH",
  "key13": "3nBgiDz2P84ekfgyu3Cx8kRTXBzmYECep8BjLT9KMbLtLBVmntTbt8PyFzXY2kwSWLQb4jHmq58DphV46Ft6PjDM",
  "key14": "2mcHyw5SLK5Dd9U65UhEHWPrjmwijfRyxYwH9ETQma4Jyr64TzGXnRdSXkqMpkJmmbRSvNma2sbrJjoXLy1pecKF",
  "key15": "4gpADgWYRMT3Xq11aRVZXaSyi2E2W5BDeQxh5HY2FNQGDMy4nz9mHvDvXeDMNq53xRtcaQUwR1rpgumGc2hgE22D",
  "key16": "2ptNC2YKqaiA4LsLYn2gNfBnLdNRzgdZZVdrYrodNnt6vctYH2zMP5eDa7Pft3GXoLyvuBYGQhRLwJ6PkLY6uyQ8",
  "key17": "2rjHy6cAFHTiXviY3kK2MSjbYiUYsFqfqJ9fTYmDU2LYiXFzUUz1f4fcKgMvM6rXhubG8qYNf3k9wKJixwPrwfbM",
  "key18": "648x77FGEnwpu5AkcckfkHThZKp8B8aVsTrLKwQV4XD2n6eQhiJYAHeZvnV9AYZxHHkArToCmSECmxJPxyXMKKBo",
  "key19": "3K1JK9Kx71QabNE1JNqGvLLSH2pbiPBMvEFB7ekr95NJq2MC3QWquxtD26SMQqp26a4xXWiGY3guYQrJR4FxQm7t",
  "key20": "2P9gwgzNVdMUM56Gs2w1n8Ls5HcHFZ3QtbEKYFvyaZznJNydr3PqB79E1Un6AC3xiXuPNV77oXuaMhx7uBH5okRS",
  "key21": "5XqP41qfNLiT9bdtwKVGxrB5kDb5hTxotbdqTWYREXpoTjoZWER9u9WnGK9Y7fCMxuhjBtqp3RqZGXXxp2Jr1CXY",
  "key22": "aadmReEP2Xuutu6RotNXfBUxtcc4o8LpC3zHTHbgbVU598hWZsQ3eA42owBGyQJdHreM5cYu69qfA2gFRrnSoKL",
  "key23": "2k2puGXZQ6vXKPYfi9SafgkE5sk6DBMZ8PBnHKwqqwJbwQt8ibGEkvjjShPErBgpmbWZS7nQoMfnKpwiVbB7BAer",
  "key24": "4uxBj6bo1WMQkJMtoTf6abuQ3B5ZvABVev3RYK5tYgUTiDVXjJTVzzhKxfgjsJDeCyZnrmqoX6gr7MXQmnPCo6f5",
  "key25": "4V1oKq9m3pz5kmDpofNaRN1RSsYoscGcbBhMK18stg7RuVGbFjBRP9oSTQsZeLMoUNKeddzJDi5LGnQ9wzoDNvYS",
  "key26": "RxP7ArQ7ka7Wyfwua3DnLkCR21rigCDRuECeTW23Xrf69nHaEW7ysYaehn9XShTNF7A5WRafXgZ1CGbut2fWYwK",
  "key27": "36gYae4Dyup6gnYkUUmfrMfMpqEAfzf3LHybH8LvtJcSVoX8VoTgxWm3EqCMCy9WP6rDhjmnUBBZQQvrMPY6vXaj",
  "key28": "J2Gk5Bi6KVeHYuhYQnxj77aprCmVUT8wS6CskKP2HqSMPXFie9iXEcojVf5Pqw9o4kpA5G7rDJ88XSK9VKfakMU",
  "key29": "2ZRXcYuYgTU4JZ54DYxoYxiij94FZv8dAk6aZSeSN9rUqbijYbVeWmeN4uC5Rmc7f5D5q8A2Qai6SkxqXRvERWUf",
  "key30": "ypCczSAemxnW8M9jeALzziT7d53puEXwrpwFP8mFQ9EhiPcQFAYCkR2kdbeCNSSPNaaUq8ckhg77dBfR3d82ydb"
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
