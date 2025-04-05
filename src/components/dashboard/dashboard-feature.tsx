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
    "3VP3uXJWpuXtVDL8K7Ysq9sGAHbEk2RBDvAaWgvnRHiN9ifvvZcYFxsXGjh5CqJibzYHrhkAHC4Jn3zYqNwwuJRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EaHwZRCDQHyvLVwPcbWUG51QdJsVP1b2JgwAq9kHBq9XNL8aeL1KyCe6g1wA9foFciysGwETE94Dd3FmuBGtLfw",
  "key1": "4STRFDC2pWwkx5k1YMF9aENno29gXwy2TUK2Ru75qkWYYMiFHEgsKCx1RC58ufwENpbJTtxLKkEDCycwUShzWhqG",
  "key2": "3HJ5R4zYqNpXNZ3q3qVyhBDAacCKigPjQ6KnUFDtx1rtW78GECwYVyrZCAQJkF18bRXyMNfFp7Ck85W6bVCgf9dQ",
  "key3": "7meA8kUP6PSxgmxG2eTsXTyBAJ8WihtZrQNTUW27U4omgdyazAeTxdHxMxcNWMDaxUNQvPRYa3VR62JmdcG5Cok",
  "key4": "22UASoLC4suiUdDwaU64wVjXM3dpcXjGKMGKMdKMtNCoBR6AeuqtsMYWDnowxLdVdjy9A4TFbgVHRi9D6tvFLNJS",
  "key5": "2oNtXaacZ1GxX6ZJr5w9vAuphsuSkPz51UqmT9nDni44yToX11sLTimobTW5zuebyimcNA7q36XKdiLLnU3day11",
  "key6": "3VhGnUbrnZEqmw63i1T2EictU2nvPngZp1MDERGmRwAAXMtCUCksjUbpLupgziQVgD4qh6zyP6ZW972ZhFa8gxx9",
  "key7": "3AoqBRrdQZgtX2SQWqNvqRtDcQooPa279uNJE9TyEAuHpryZpCBH7TPHSCsxQhwDVg88ZFZP1PivJKTJ9TReVQM7",
  "key8": "4mDCdSTz1icM7q7q7iYFvyXgYTXJc7umytYAER6dA6omnggdWCgqxWfDCbs3Y518PLJFckGm1Wke86nzvT5iczsm",
  "key9": "52hGTXeNRs228NYobwpFUpyNqEX8trn5E8cvkeiXrX1ig1huTd1gxa4FS5Kvqk6BdpYwNTdkeUFYjafDBi9EBnh9",
  "key10": "228jwSE6eJJYNYn4c99Bv1M9uba5dNkpA15eFB14kfsmHuUCwfB7Y2RF85oMk48nVfSeZ2BtrhJ5wMs8Ly6PAJcY",
  "key11": "5pyt51xtAVbrKbEbPJp3Csckc9YhPnCMYuXP2wprPcgqJjpEdKUHsXiyHXa9yWFViHG2oDjuQc8aZV9wudy9sHxb",
  "key12": "4naB8BFWLJSWEqqdGiv5QVjGnppcpcRrN1ZJ2WsCCGPBq6Co3YsTD2eg78idqU2NFdYVSLe9L4nNPdR9L7jLes6G",
  "key13": "5didxTusA2oXgQ5WgyQrSAbuTGZDbQ74gW5H2o5QAWUGJQavzAZXMHnN2vN4i4dBjRnRAf8YctZiqtqcqNkVbXzT",
  "key14": "2pTVnU7hSYBJEmHQxNsXxZnXjd6V4pqQD82Xs2ZHQgjuyCLP9Q8j9r5Ed7Ui3boAHHnS79hUhZwtKHBqmc7FedVM",
  "key15": "5psLXistNhJw68umAuqbeDPMT9NT3sQvVZVCKFy1xJ9q7MYK6nWXJyXVxtXCDog1s4qzqHmy9VWmHBnZVnunhV4v",
  "key16": "48NJf1cydk5LDSbgWEJLc9BzU81odPS6r7NLqARbzyn4JhrEhAnssbjB6bXiJsMzWFn7f2yueyixPzwKSRXkZVvp",
  "key17": "62iwjJkxXnX4HAUvjuX7Gv22pZSMF2eN6PVVYAMPz4pqQc44XCjnVq7u5HL9owf2Fx1wCKaGuGXYqS5uAeiDYmKy",
  "key18": "52KeWeuHJEihFm7TozCNVdgMByWYuffyYgvBWUrt9bDop5LxfpUddLjn8VLuAGJyKu5mpAAcS2XgvT25jY35eEGG",
  "key19": "5zybDHsvQ5thnNpWU1SRvyE8LqTYKuzMCBugeqVTWBPjUTHiJ7PuYi5oXSsvYYpRoJJoEB7XzC7FFfjHCY1m3mrC",
  "key20": "349NFtdGmzegMSTdiPfkiv41mfgVMtwpdueX5V6Fys1ZhMPz5cGwAXH1abTeMbe618P9n9RM8AKrmjRWX8r3413P",
  "key21": "3gDKKj8KgfGRFNZfBosLyhkZUfod3uEZGLDi6MuDFwsQ5rhHgu95BnQsJm2rXiMmiQvSUuX7f1yHEXbR2MnyMGa4",
  "key22": "61qegmy5saz8Hw74va4Xx9of7h4K3cKxXEvx7Jg85LQbY6CTYm5HhyxtjxQDS1USEkKFLnsjZssybviCTCSYUGZS",
  "key23": "3DLWs9Qsu5TLXfuU56GqVPoTQz3R8A7v6eEViPxsGvn1zD36xmwuRiVFbnYe8TJBjVxg3kG5E99tPYpah1vSBYFK",
  "key24": "2foHpBLEEteHenPNJU1yMm2eiuRPw5NntgfCLfp76PM4ViMCaLXpQsTBMKhLaXB7Zi2xJ1nSkCmAzbVzDLAu71Rk",
  "key25": "3PGdD1iKykoFPs8LfHfWtnjNnLPTK5NL8LYZzwkP7mVPgwUa1m22WC8zW9iuW3oYqQaBzfnCdUiRqFmbE3LtZzwB",
  "key26": "4Hq39vcFphFYBv6d1THHek9RUc4rJwVw1xduuE5T9nyJiKc4nRWh7VMGJ6wkgLyqcFw1LHDo6jKwBtz8isgUdBgT"
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
