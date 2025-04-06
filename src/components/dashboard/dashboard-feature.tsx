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
    "2pYWMMwgLKLDKeMqeqDiKzwSELWkodmkAzbZY2fcTMjGausbp418D4WH88N8ZEvuFzzJybhbZq5WrxSHUTsVXtwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxXxNVPT9cj49c7MmzAqRsC9hDPRvxf91EiyibDjipS24sYW1QV9qv82hktNE66PTNJGabtCkXA8WifEMCdLW3t",
  "key1": "63JgNW1e9qHWDtkHzqJweM28cvFtuNZ2cL37SVZi8YQCr3xzCH7RPNYycBKBBtFk7Mo5dW4231EZyD7zbtGYtS3R",
  "key2": "31drAPimZdzqDQs8Fes7zuX2kojsNJQW7X9qvmgiF9wWxCbQ7cTdZDQ294E4BKuZTbVrVXf5XZQeiRcZ31YUuE72",
  "key3": "nu6sgFaYqPKpmCRWikEzxj2vpF39MgT9HN1KN7cWuSFRcYZtMT9LQm5UJzgPYutht3F9QkRn11zLH6etZnSf61S",
  "key4": "CVxG63s67A2wtsaoaw9AmfxMhwWz7cToaHtahTDH6JJTjfnfq2tdHNppE7hsn9CVVKqJfLL6xe7xGNN3gYXkhJ5",
  "key5": "hDKFLAHLMWdcvCRWLiUNJxjz2BZPaRqVT8eaxSH2yctSBnvuxDveyXTci5MUrnNMiSWiaC3johKYgXGSjNLzKwV",
  "key6": "3ue5dvWffwTYixMUe2bEpziZnG4F1wQ6GVSDkz52L4453E1AeqLyiMWJzf3F25N1zRdUxqTjBtYgX9mYoqfX6tNT",
  "key7": "87t3iHnudpCaVc8rRba8Y3dJCh5rQih5E22SE7GyZccicdKdWcHtSyHLSe3vy3Hgnf5QGN4tqXtCZHam1JWBqQ9",
  "key8": "5Dsg4CY6wWbtoX6C9CZywoPriKb14EuGWSkgz8bPUQFCBjSrCwteXYhisQ8Gsdoq7wy5zmHkG5QRkLDQejzjx5Vf",
  "key9": "5oUfdzoviyvv7HC1Pfff8HxMcpDJb7jnKg7RnvLe5a421yHqr7yeJrWFbiVYQp7AKpApoxkd4XXZJQEoJ2fpdWBh",
  "key10": "GXxaqn8wgTaUkLz4nFPNWLirjNQv6GhxHCnzKwnGRcW8G7UVdT5gRdE9gV1UAh9mmtuvQdvjdLXBKuuqisf5ZAy",
  "key11": "R7aqBWs2ta6dj4K1cnbnSw3ogD6q22ZqFEt1uhJc9gw8WwG2gGgx1JRB7JX4i6KBMTDUvyajWTkbPYhj7UTdGUL",
  "key12": "5XJQ6TU8vxsU2gZC3Xvb8cvyiN8rwqN3mobjPMDZT34gTwAfDobrcHhxRFSZVfYf52hnzNTiUwrBvuvJBNEDXChU",
  "key13": "4koYE61J5q96JDUUYhkypCrrgGvP3M3BpmhPcjtCGD5PfqfuMPpE8Rkcsigkd313DGhBHZKpYjNGXtCcR2WAtwt3",
  "key14": "5WqP2e4jxYhdgnozni5GSTTYZjEkEC9fyVXLSPi2PtHs6H37UEh3rFYntYu1iZzm41kwxvXnqUDBAom64x7T9x2y",
  "key15": "4pToG2sgN5YadgcWvD4yjrSgpco7f5QyQqZ5zncAjSD2pUnkNX7p6TFc91N6n7Y8CAdedg9Mdb7UK7QYQW8oGA7a",
  "key16": "MLJm6q6JyM1ah8kp7ZcXbDUkAhy4RTnegQmNXAKtr4P9JdDVmdR2kFsEN9RGjdvQcBJ5PPSJWuZaA9AvxMiWyoE",
  "key17": "4HC4jGqXJf3u3XLo9ccAzeMVLfuZCB3vermnoQqGzND9W5vNsYtRrFG4qin6k7aHFqDDq3Ry9k1qwWijskQfQg2P",
  "key18": "5vyyEUrPR1kkNN5XaKzGd16idLtr62scUqr2WXEGQzARa4zZAQ67mZtAGbW8dfZnQHr1gzR71ePnkqb9kqMbSi81",
  "key19": "5MAMRcEx22SQN4FNBDWVBSUiG8ysR9htFEhscSbWyCrqH9CZC7GYmjqruMUyMcixMfcMQcKDS7kD1X5mZ8pTJ3Ey",
  "key20": "3NWLAE7TVLYNgDsTSXrFFmmgbnfvGzL2T6JZyJRh7TLM5gnBE8eaRqTcvMgC9qk16nxHRJawwE8NkAwvhXRG3zot",
  "key21": "2ZwwPtiUH8mA3NGpJVEnaHURhpysLrTGqCtG8xF8hHVbP1jDQYAGZyEyqkNL6iy8drrbq51E2VG5pNmQsLAQhDu6",
  "key22": "4e79kT4kbjbKMr4sXR7B8r8tm7WUukYfXifKEvQTVDMJvXHNCKz9K8Yg3VSP5rFi34Bxg5H7onY2c6qWRqd9ctEk",
  "key23": "2j3xyPyAP8kWpysgUjvyX5EGmBLiidF7H5fdgdm9JtPLtg8trWatWALgad3prr5DHTfWxG3uXP9KZAvLLaifmaZ5",
  "key24": "4WzvGvRUdRCL4jDmwHVXTAPJA1twXKuHX1u3mRD7tFSMuZk8rFb4Jhiw4c5BuQfyHVaBaYDGvxXGFjtnSZTRGBvU",
  "key25": "3Q3VrkbsbrMvDu6CxKMkGx25tCUKsZeofD9R87qqY2MVC9GYitKrJa9vy68d1zxs8eLa4U2WjYeyrLEYmjZikhmH"
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
