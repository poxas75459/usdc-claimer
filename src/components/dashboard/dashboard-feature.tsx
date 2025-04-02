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
    "5526DTr6UnuoLUxPPL8oyRYthDYgPh1dRmhmNJWeW1tPg3RWgCfFNivsjWGwtE31nPQN4ALQVF8agwewtsf1S5ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZhnDm7NboUzNaQunJPp7L1HCE61cBUh7Gni2a9t8be6NtGemDpoPmXXbKixBihRxSLsox346mYYrWnYDh94o8J",
  "key1": "jnAXNVEkqBKgb881vi7ArUMEuGCio1LZzMkodBvJNjat37g2Fu2PwfEpWP2Bs21kWabWnCmmB162nV1oppYXBqc",
  "key2": "2gqxTuoBMyKDqAxshLfiXntvPZhosQ7dXwnJTn2QUvLGeCFJKxR9X2NdvQCajpEQAVkx2wuVBYhx5jdrM45VbWUD",
  "key3": "5HCHtDd9ePoA87MaUxuoM5bYeRDiXBM9KBAEix5oc36LFasdy2zRk2QWUfwmgyoccwurTGqq1nji7JjYZVjbg8MX",
  "key4": "5r7LKP8UTuKBkJg8KUeHQ8RHJkQtTtcK1Cvho3F2D6tfP6a7q1RGYQysRkLgTnmV6nKzcNZb1a82vcDa8sAz3sUF",
  "key5": "5P6bPJyCvCdkhd3w3TneZUn3gdY43W53Gtn5yFvjvLx5FANrU3uC2TjDxWjKmy7FTNtf49LGhwmnCskpgaQbRxCg",
  "key6": "4mYT9QdKLaovkD7ftf9GParyB7AuwVbzribzyTW7HMFfDnQYDmJVWAnzYzWTuXAadyK1YY1NrGbC2PfzPGoRUGba",
  "key7": "3HQkYJbufLXmrDSZ6N7MfPfi8yLJVYvWt1z3o2A6ZLrxfGfMf74Fuy5WwLDwHGqrKiFQ53DHC5evk7WYgPNNRKn2",
  "key8": "oXjHBJSzhMjh15ehUXtbLWywMq2zF9f71UoFjfNBfbsJcSKMx8iw46f5bFMJbAGzAjFXxH3TystHBwt1yAM3LzT",
  "key9": "2mfo4v8SYaGmr6exMUYceNpujXMfpaQKKzSPJNK2sKMTf9seFtPcNPFpmTCPTpjGUT1efwpmqButteJgDw3AoZJX",
  "key10": "575n7VAG7bwTvkryv3oXSnbZKBnEM8YeUaKmQAfM2Bk5WnDtfUnhghjZUk1xyoAW4U2KadNN7ZaMmyVftfrfpBcv",
  "key11": "VfyAVtEDc97Uw5bxCHPRjtdFKqVWuoQswNsGGpN3P1ZZq1eGchXXDUmUV7CL6kMQHVtenU9TVvjDfwFrWgP7tHe",
  "key12": "2g5YVdSYCRb2DQHHw9fX9MVkwdytzZE6CgAiagd4qkpku39X9t1X5AYDEFTrHy7dbrZcLsyNRTeQu58NeFfRaE8K",
  "key13": "3DvdxzDqh7bddZ9tarQbyBArHdPQgHQPCJw4qL9JBYCmg6UByieVsLmwjJEXxhwUrr6XSVThg6W9C75ESNf3D6nx",
  "key14": "8bsrsHTthVh2FLt5u2R9wTtPxsDCbWcNtmD94CaczTJ6HyUWPdakuKosiR76c9pCmnKVqxKoVVLw5rmo5eFx6B4",
  "key15": "3S8WhaPX7wFrSZrVxiFtiZqnZvag9AX5RH3xhCQUCgxpWUGTePttQFqYfAeVEXH6v8eRcRz44MdqFZmGJY3ujFBu",
  "key16": "55TdZXxDARPxm1Hwffz9gMWfW7CtKWzTr95WEWsTytYQiKEvbxnGqfvY3aDmzWTmVfz6M4FHG7p7cdYizMnoTCJL",
  "key17": "5iyWqrTqy1DSZ9EGsayvnwwpDR2K3AQmDza59T1s7izxQepc5now3cFR8UQCSGHUb3HYG6pwzF36ZV4h9Gpdu81L",
  "key18": "5buDphimEBkcLSmWLwTLEWw6xBePKvaLYHEcmfUhqNQnmS2Qon69i2F3XBT4m2mwtwp32Qw9Q6XmF5FxVJK3JWsc",
  "key19": "3UKBjR5WLtsBg4R9qnfcy1BLbnWNx8b7i6nJg42dSPaUp2nFpoiheMHa29zVUmizyUGKN88UdVChNowt6g4jGHWj",
  "key20": "5v3EcMEp3uAcZ8MKE2NuTWfmgqHTpF9UeZ8btey3GsC2PyqYuLQwQffXExbwjDn1EVV46QB3sC1d465kae6T5Agz",
  "key21": "2dJ5bYeBgeivbVnugcX7YHi2nbEwg7qxTvmb5RSyfed9JrSuqnoht2CMDjV9XmVrt2XgMjsXBLarJYviSAdrYni4",
  "key22": "3N61gj4PCUGWAD5bT2mJqyftEuKHZehZzUtiSyFQQ87p8Z3ZPoRFkJCuW25zXJCo9LSfj4bRsFMkgpuV4kA3QspP",
  "key23": "sZcQ4pDVaFJU1fXwQJqQp1k3GoCUWcuTbgPxrNeK5WNbR87LzQE3PQNpNUWqQJeHHeznAc96m7ciDJk1gJzB61t",
  "key24": "J3bMRAkcf9qK6u7yR1ELNLTF2im6xW5fgbhJgBK8Tfd8MiWypKAphtAu6WQiKVDBj2XN22ysDr6YxiqWzPSdTL6"
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
