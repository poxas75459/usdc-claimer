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
    "2oyKVGxxGZTbuw31cWE7CtNxcFXjhwUvRpgBWJnShzZa7niUnbpEtUtVR1vzwvdZUa8Bhu4xVZLxCY2n9PxR9pGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oYhiN8U2bFbTUMThaxMsvNhRAwYTm7DBucytKnvF6ZCQvunNgHdXXqwL9ESUNV6kQHE3pkiCVm7rZr6RpqKZ1sf",
  "key1": "2cYivmbFhsE1ya3vUhVoAwcTmhEmCidaytt9r29Q5dB7CoK7YexzdW356z1LCaq64xBBHPX6v7Qzrxr18nyxr74b",
  "key2": "9SZ1uFSYKmA3ovxE7fZ1fPg3wZzYvgS6dfPsXmMaFdr7gK73E39CuEnV5kwEcvBgGaQ9SqKZ1rrAgRjujjFTdSR",
  "key3": "KwFmXUGCdZdvx7Qq1qRiL2CHMPZ7VnYGjxj3JNx9PuMAkeBcU2jAvJSGUAAazhsDZ8gnEdE3ArMqv8DrEMPMtLD",
  "key4": "346DE6jEkYScifwvyqpg5ry85jwaR6pE4CBGj3H2tmAwTXj1Fs4ArGufrmVdydLJukb6tZMaDZgYx8yfJGMsnT72",
  "key5": "CcDz726a8WrCm6PyTE6rPF6bGCLwcdhLpRzDxhfTHjWzF78fhWJC8J4GroY5TVu5AXRk52Aer8rDd478isijTUz",
  "key6": "4UNpKghg2zyNgZqB8ZjeJofLAiRS9eEtAYQDMbt42TvEBz24927xVUsb2cHxGYh2ZdppD8vqagkLU7EoPshQXAM4",
  "key7": "oDG3AekyC8WihTpyZ6HtvrKsbT9k8me7BfCue6c7zX2K4rczwC2GpNFRsUfCkE1scYR4GKdYFCkHqmHE5SahPf5",
  "key8": "3LX4kF9Fv8sGM9VZcSUQQw8Jv4ttAQre9gXXE6P9VubeWs3YxxhGx2MhhCbXwnLUQQdqJ4EMsM5bsRUcyieEDzZC",
  "key9": "5HZ3Zy2eoV5PAKKZFTNjs6LwkKW9TPXG6KNX7psSVtThenZASgfipFtLbnF2sLjDZxtKbs12TQNMVKcLD23KZjWy",
  "key10": "5VyGcy99L3Z4Exn8gGELGFRT7VjnBjJueuVgtE61tM2aL51aBfQp2Yh9gcX1fHmQ1AVaaYWwboHiKfnGwWzXVzzu",
  "key11": "2huU8SxJg7cbdHwZprC5EReESyqCbZrUgGMUGovkbQMF97NvKifTFRNDBL8txvJpvHT8mwgAdrnnajgidede6QbD",
  "key12": "5YQHSbD398pbmpDLCmyAz5cHhdkkrF36QLEwbWeRcPcrNumKYwK6Gg5mxs3oaiwXWKR95kfAJiCJKeKhugPBpR2e",
  "key13": "3m9Kqk7vuCVzSdZCmQoH7W1ikJnN1yKCNZNbYwojkcebrLC4HgWqELvwbv2iCvTeAtSqcRoJyaERPByXK1QyuVxN",
  "key14": "3wdVA9TUwHGQTBLU1VnmPzYkXmvKUtiTJ3FcdpqutM2E3Vj13p5i6fFj8wsWhn5U6Fn6mZcB9k15LmUFPn5d7AnM",
  "key15": "4UwApDBCy91ZMRx7fAAyKs9u33KCH2sZPgugS7vZvaJtyW8LQMbnvAvxU1Lfzmsimn8E7Wqv2uCxZeku2ixdNxnM",
  "key16": "5RKfo6tdvwnPF7WsTjiBiq8Q3riLoKbafDnSPw6iTgEvdV1UsjD7PEK343xHGDnafhYUhVM2syZq3yVBHaJdQ5PR",
  "key17": "67FUPgNw4wwopY5Qd9GPhaMvotT6zn2a9o3J5HzsSsP3FrJRU9Ba6GWUmo9KZHVXNm6LNvnx2rftHDPuH9Qtt2jv",
  "key18": "51SA3FBiHajudkepAgMWQcXbp4T5yVCXqm7tvBg6s6QBr7xd23KgkR39nY4tt1GkZhbCKSEFBEdZNAYqBdMex1FN",
  "key19": "6dcccFv5UHmqPmu8qLmoscHxP6nPjb683eaJq6ipfyqfk63MCthUCMiPKbZJpFcReP9uqe1ezfyU7RPrnwdwSYL",
  "key20": "4SSqpTRYRVm8V7UvWN3Zgwc7nZoh9QigUpHkEFPDyaq5zMMTckZ1dWQmnHvegMfzrnhfgMsJxXtsKTLHBdZqFnG9",
  "key21": "4ZqN13gEYoB7whbv3TxHgqYp6YnDPm8JWFDYCvd8wEYBmPz3usrQLFbFsQuaVsqBB48Fu2oy4Zyp7bTWsJDi7KzK",
  "key22": "w75Bb9eN5TNRELFPpTjP87kiBi9byNmc9TTEXPxcdzgq9j7mk7xu7MF2vtgrAGmo9yJMvbh5sYd6q6ukeMGpqXK",
  "key23": "5szeyBfCAHqABvDNygY5zSKrwEBJuXCVDtLH3w2NmZBn7vWEpnmcQvG99ragSh4FWXvBVZ3vyE8GPY5XtCKusgJj",
  "key24": "4pTxqq7U2XAtyKri5GEgvRZwwPKaGHe2imMBGP3Dg2UhYtMESx92yh5M4MtF21nRh2uCoWWiMX4DoPnL94pSfCjL",
  "key25": "3Wi9ASC6wSXQJFn8E8HSfmP9rhkohKWJ7DV1bgpAV6xSKvhDVpDovdDhCEJAXNsNRALEeGQLPdN2mSoDjUA9pw2L",
  "key26": "UNhTv95abya5FEL3qvmcCftGszX6QwfptLH5MHjG5ZB96ENESixiGbnWjq9tZ6azWBSmmCLTmrSseLnTFanWVqu",
  "key27": "3oxM2K2e7sFmn3U7QJPe8HVHUPkT8jF887GbgAMdzeYEh1KreMERQNV62XNtfMmw97XnwFGbhJsRDTpKQvAPL5vk",
  "key28": "2xvEJ1fi7NaxGMzn6dSK8zMXqZ1Z9xKTsdsRamLtXeC2Rj19RbUW3ZjJ7ZzU8dMJhwJomHxPQ7kRwo1a2AJ28vvJ",
  "key29": "5uoWsaAVibmzsaMUMWpC2s8zx5bNsgdEgEXQ3m77nuU8CjcFoeMZhQDfb7TXKAJXHjhfK2yPCbMGVka3iac7LBK2",
  "key30": "hYTh4oyxksDb6rgMwmAcdsPoR1ForoiXnUxUhhUosceZSmzzxmsqwyXTGkbiTDEXh4UuErzZ9AiTDMuNNupfdVv",
  "key31": "4Bb5YRJVYH1W19Rm3z9j9zGHqcfnZBCrk8sWeEYHULHrgZ7cZtmdm6v2Uhpu8nDMyCijyknNKzJzG4thHjafZFYc",
  "key32": "5hEwQ5ZJKNgYarg49HsSGppEc7dtLT1iNZNzMfsi9bAEKYe9P51ZZuss8BBGasDfPLhJh5SS9ou5DuZjBxyb8tos",
  "key33": "NrvHmhsXiCPqTJkJQbkAnRZkWTZ7MGoDCGVVWAAtXdNT1aHMvZAWuX6isMw9WHaEqAoSp4SB8ku8n1RdNu3ijLD",
  "key34": "4qnQGMBoSwUGZSHH1u7q4M3fxCjeC5YyUWyMLDdBm7sJ7fyqUBYDsWPbKXa4CrzvZWSMP1nkrknBTMvAkb99jpDA",
  "key35": "37kW2UrfDFSkXmjPyKXz7XV8pzp6WQZyZDS2o1qRveTpj4Bz3ewphYvML3AS8FJVa9R28FsCeiCqA1uJfDyixbYV"
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
