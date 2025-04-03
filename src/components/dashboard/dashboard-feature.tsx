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
    "2cezhdGFiMwbaWW5iB147n5fY5EabrtKVHnBAQTY1gSHK8H1gb3sW1cYLmLNqSpU5M9fa1dewnGq6pkX3XMFiDBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6YJJBU329WxkU5MV6p8e3JcqCBgenHcCa7anBJZTHgugdAkbhCo5th3iMLs1cFzXhSP84HnLmxvQ9hXDAxYJpo",
  "key1": "MatBt2kDK1paVXsH1YjLdn1ZaMk7Fy7PjFTPrHs8MLUhA46hcC3rVAkoUztVgjKhbr2uGkmZEFpCeLU1ocA9Acq",
  "key2": "5xAhks5LaHH7ws951ZVEX7bT8fTE7rhFKYcEF96hB9ZW2k9RarSMDE1LGdVXuqMpZQxCFPyqTQgppmTgnJqMv3Ev",
  "key3": "5whJRFjcJ49C7eVggUsukcChY87vBGcquso544AQn2YSgwwEtPCNBebWiWF1jjapLE9bFxvQDoh8KpS7qCY1SpoU",
  "key4": "4ZfWa9YMC6ytPwy5YNEcgVXZg9zWJHKPhnJpAUGdbGDCaboMpeBNFXRSRknFVar7WK2Y1cYScE926td5beS8MwNd",
  "key5": "2Bz549QNUW8QCd52Sz8PhJqu2msbrCVeWz3rKdtHi24UbQH2k7YhpmUVwRSYQuiJ8wCPKFxSe32xmA8ZwfQjcnsX",
  "key6": "5BTmQo3J82fiEPKWveuBJG2LndCZRsrX6ARED2wYX46SLUuLgfswqk8Wj66Wpe87PvxFs9jTY8YjCuhXaygsKtuJ",
  "key7": "3hnuTci27YcWzaXuycfRgvFUZJ53Kubm2qWp9MRbCMe7otWxp3W2SVTU2WX5qs8GpBSaHinwJKK7322hBzEUpSAn",
  "key8": "5AdFJ5GZ7L2ZzzdDded318NTuzCdtLBs3dMG43rC9JFhjxxbRHjQRZdjzUVKPNKjbaatUysfeH3C7U1CMwhobjHC",
  "key9": "48zuaGyjXyfvZkDSoXmDPTi8TRaxNKeQ5voEqRKa4VLECJQ4r2irAhbiCnc5hGLSnXnFQGjBWbNK476Fc9yGCJ14",
  "key10": "4joBjJrpmWsWp74puors2FNujFoHJyKqjyTSpjkcdJ56a8T1mNonoMMLkShTnY8zY83S8eqDVpQ6YgvaHDGHGJ7C",
  "key11": "4L3f9SicBmwjYrg2vfXgNxTeLGrhbG3mfoXtXpgrwY5umebafDgm4kv3XJJsyEueTqsych9egbVK6EABsQHMXfa3",
  "key12": "3jKCDGDaQqAahRUR2NPrsDyx7s6htTLeNyuVVxEKekPnGTiyMBu1emLZhUR8idanQSuZzHkL1vnbMsmmgamvBB4E",
  "key13": "5gzT8x9h9w6aL8gF5kjzGoCnRRc5nrvVarnjHjzC4YvrPvf2iLhfW12jmk3iv56AXSQvr6XwAyxvRmKgRpTCNVTz",
  "key14": "xTqoRwSQffM5BspvUN6bQiDJCk2ZSw4LLUXS8vHQkWFLp3yav62N3Musajkrch2PvKcXeSFAtC84dmo3M6aPq2f",
  "key15": "3YARNdVuYmmhgWUnpduurr4NcACbymon1bQqfKtyjoFBCYBjyma2VbyHGWJwfw6y3uwR1LPSRmb8LMNzjz5fzSfx",
  "key16": "ZF5uV7gaDhKmf2zw9ew8oFx2yy4JsUD2zcFA91A5obpPQrxqfVsD4TzAUxWY9rcTjqUwHvVQ9XFfDhEwFHoYY8y",
  "key17": "4LAzWcwr9puU16jkcUtKaEJVh7fxT9Fn5VeJsxn5JuKkYWaeUXzJZEznmr3F5uZ1jgEUsCKgPkqeCK1iAR22tUX2",
  "key18": "4c8LePrcyUkxAdKBH8zsd15HTxEXgpGRschXzSWJuM3u2VM3pueC6jN1ZaaT9qt3j2y51fDPdssfX4vuCiSscu6G",
  "key19": "21qGgNXN4TUSrTGGuRLYBRHkW8Q3WWbRyT428PmjnrdAxpX2juT5HDxXVyoyXYLBaisuy95w1hZupoBooLnF4muR",
  "key20": "3pwuoUJauZSd3E1uUjo2MjzbYAwpoC4S1hXWs8Wjg6xPLQ9Sob6rPEThRBooSYQvTZ3CGcojQ9BSG6C5qUqivdXV",
  "key21": "RSnNF5LRiMP1RXwFHT6m1n2P3ntAQLyd2Kd7qufQNXcY7F92YJCDKLd628tmhSc5FCKXxVYYMngwF1f4bdH79nj",
  "key22": "KRSgZySGjboNQ9NBT1EseknBeMnf3ftgab73C7MZJdLfCwYrC15Vj5dFh38LiJZFMukpa1SZXMuyJcvkymCXR8p",
  "key23": "WX1sGGUXAuzhu8NgddMNaSvCgyRbYWietMv5SsAeV7KuNSqHLoAZEZJMTeDG1ZXD1AkPTEfujfjwTY93EFvDd4b",
  "key24": "MD8b3bJY7ZVdgzMz5aLp9eJEaEY5cy2DarAigYy35RfjHk2dZ8LRnGG6EucTyrXfyMRx6MeftJH3jCiLWq8MCiy",
  "key25": "5ovLck77jApJBLCS6x3CVpPWQ9ma4UrgDBE7bRe9AYgR8ykHmSAVTvKbw3ANU3yXU4MzxdnLw8NFXCoCdpG9ihHK",
  "key26": "2GrhZKhHzSK6FuvhyyqKQYaTDnNm6MnLXTaFjk2qQvQ6hMX3UVKtLU8AQHX9WwXn5RKSJXEwYct319X16VSEoSzd",
  "key27": "5yYmocr8XnbovJ4Uu54JwyrRjA3P2RAmDSxgRJxpa6T1dZzbpHtjRPjSBTZkJk8LEEfz8FjbizduCeV3Exn6oJZ8",
  "key28": "kZ79LctX74H7mLicQM7cBicktp5fP7aDPmHGLXmXsvMn1EnwEibTFdJowvJHvE6R8XbXbzxRfSCinH9L34BguLS",
  "key29": "2khKJCyWkUnsSBSEHiBSVX4SMuv9M3hyqSrAbXDwjuj6c5Gs4DKkyWwZ3junXSE8EpmMF9VkAnrMQFCdHS7b4f9k",
  "key30": "49n2EoLcpPEDhjFqJt2WfEpY2iZYeysX7Atd7JtYwiEuv5x7bqEwYQeLFAxaazyW2na8iv3VBd9FEU9KTeNPDgwF",
  "key31": "4zK12PmuWZNtb83Jazw8xjDYryfzp19xDKwFZaMw54vFJLMHzTLb43cJSjxyavNt5VCdQYxVJEwfByErXtjhhehv",
  "key32": "4STap5Dp5QXnYMc8joQcSN39sQYtH8TBw3qje92JKfbuvWej3BqVtTZ1xxV4FNq5Jfjrxqv8iVyrge8sNxhAx9tf",
  "key33": "Eas3aSkAC7zbRF7GeU8gF8rtqaf6Nu7Xq4cZs642dihkv8aPcQopdiMU42VXzFvM6tuyLbCX4cGAHxHiiNMtZFh",
  "key34": "oND7dShLowU7zzEdpadPVw9e6sZ9hTxZQ4L5dh1VNZUDKyRcL2RcQoG3VvNePtDH5iPPUaXasuswAwnbVMZCJkX",
  "key35": "5yb67nNBzhFM52ktivt4qWP2tt4VwA8u1uPSqbmexR42ePuoiVw8nfZMrbRNPCbejGZkWc7773fPUKk2G1x7J5cW",
  "key36": "mU1Xuh4BUSV2F1N8qdTfBfj7YoLnqz3Zv72WxFK4ptfMt6c89cLCN2D4TveaJ7zCLSdT6jZppG9CxN55cHXQY2u",
  "key37": "2Qx2rk6WpyF9QvH6JTvGJzBaF2YWkrazAXLNSgtsn1thnC1aDSziAvqmivcRe8HbCCoQyK73w2UiEwJsCoKDtTfZ",
  "key38": "4jmJFbA33XxYN9uSXUJ8mKEdiC2qry2kdoWqcTW2SCM2sL4xvh711JGtM6PwJ1YdaF7GddC8SJksPaccjrYtqwGv",
  "key39": "7L2ARMruweSwsoVYL8864qsjg5ZgDme32nEdWfBGYxBc3fuaEkqwN8xZAR32fGBjEw1hWYWgYtntpvpQAXyvoQf",
  "key40": "uQ66FpedwKFWc1KKDXHzPzWbqiiLy3bPQU4ySXYzmPGAbnYre6MDThxNRYTtmhhEcGeEesBqPWwC8YAkbcNN9xG",
  "key41": "3RxMuvuRV7igmYrXDDmAcLbE37Wp5HEyzT4Hz4XkvdNquExa6TyGb2MG5gKtMrNxXR1LE7wwtknNEr9n61qLE75C"
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
