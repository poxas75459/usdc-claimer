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
    "iMjEzYnuKwAxfcpWZjnWa4ahxLNe5igcoGgw8UCmDFJpcfLh3L5WUH6WUj7BUWFx9bHW1ocCzUDSTPxNaZfS7Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bBw8KapRA7uKaUwhN5QRgWAAPcdoYEc4NVuCHKcZ1RTRMFL5TzzGHuZuug4V7PrqQs8h5rReAesG63jt33XvRG",
  "key1": "4Zk3S4rzbM3pccQRHEPcfX3rVmS4BmQyJn355xxCU8gSzsFPPJeASmobZuE9kKYrxWSCHN5dd7BrgjpM7ehCTyXc",
  "key2": "uj4QXgtR6ym4VkWk71we9G3VgJbcV81gD6BTKih394XjhLFNGiKQBzoRyUZqPXyDJLpJRmrHv2vFnY6gUF79Q2h",
  "key3": "4TjiJjkSa8VLBcMgxnXe1Hds8VyReYaGvtYtfDS4t8SwmoN4r5NZJvVaXmNYtVJtUrf3EBhvwcLzjTgMgn4Hic5Y",
  "key4": "3RmkAVR6rdAvDNN4HAJZpJrrLBFHZqHsvREojVvur22Zmi6WT5EpccwZjsJwA3dn8j5MpmgaxwMCj5mQSPeBaxZM",
  "key5": "4oTQJPrDJEmPxa4LhXTL97jXe5zJyHRsFrYSWZs7THxvaS9wV81gEbRreFJc3YKBiyGxExwNi4UT2qLoxLpD1rws",
  "key6": "3jtzwNfdN2RSiAjGR6gdnp6DZog7cnCoefimAVMURbmBZHMWfH7wUNtm1AaEiLuHtPuD4vkKMKHbJWtXauoLhnF3",
  "key7": "4dE7RaBGvVStrc8X3UBPa7RfeFFEUpB7YTSian6qPB4GC7ma56eppWErAg86JtZopd8AxTEfr58v5FNeGJG4Nd3K",
  "key8": "55oVxYjY9VyioN9T9zfTW8bgga4uo9rTm68nrd6t6CMJjpxNdouJRJyu7c12LjTWhH6QeJZ7crpzkeuY5tpuRMCE",
  "key9": "8FVw5zXr2YiKJnZZnLc6Turqm5otAYm5KW1DmqesW6STZxmFcFbRXrRwDqB572c9oczVF4nq9mPsMRgcfq9cPeZ",
  "key10": "3EuXJLKzB8wzafkkvjDRCugG8bQy7Pg9j8YhHrH4ZpWACsezQoHH2KW298d3dwhuaU3C4sVbMt2XE7SvhguqGBbP",
  "key11": "2GDPU2no1yg53HNFMo9W54NjSFGpptcgNV2YwgYAJSDPn1y7HykChrrEbr3oA4WabyqBV1vjoyXy58NVXx7yXATb",
  "key12": "3GNCf5JXqBZZb2x4AD6UjYuE5dhLNxnUQbUPkBmpvwnstUuZeF8FfTcgAW3MrgW43BjAZ3ZzRENCw92A1rMvtCDe",
  "key13": "aTUexhU3yA6enFiHa9auErzMFVrChPXN4XHgpDJoVru8daRVsszo1WW7hM5mK95arJajwL9WvgMESaGmoW79iih",
  "key14": "2h9WQBXZnTSyLunZgno2recQ53MPom7gejw6g6nr6nWMgvTMPoAHyp1PDwgqwjJJX8nKnbsT9Y8NqECJpdX38VsC",
  "key15": "266V3LtBUscPdMMUop7Y4eeq58Yfvci3JS38WWNs7p4zcL6N5tPFEzoe1PLVCegDsWKhk2fvhRMX9YB3ebTmjCq9",
  "key16": "27ajoveWyL1chRNhp9AhjGk45rGRf1nTprXauXwu7NSmBzhET23HAuzSBpFohsTK77GFrgKGxYfQegbjnSeqLgkZ",
  "key17": "4pUcGdKkX6DgrPqtPNsuYwsBJUbVckcxzrFYc1EriYNkTP6on533NTLWX23aERncDwv1wY4fB77rN2WnjfGUoQC",
  "key18": "65ucoCFi6vKQtUs3T1DBFvfCw4pGLsiDNEY26k56xCRryE2UAw4r8PzqfuiN8v2G9x3sQCoewHqWK1VexNgHPUv3",
  "key19": "7u1tgrzh8JcaxuxMwA2gSqoZ75MUgohr7eiQFXfrPK8PX5Ei14cr85npxqX6tEzo7AFmZavtP2Nw3PbDo4Pb3gb",
  "key20": "3h3UaSdWE5K2Tdi5fRaTWrtsaxTULqfqZ9v9nHkP27DFr5hd5FYNeQ4nQGVU9So1cF1opfzQa37ZDU6EKTQLTmo4",
  "key21": "4afsfCMZoB86DUxP2JB495dTxoNzqQKRzWzxEqiQmotJbkjEBLRmoM9veTUUYuVKBkDWXqvDAevD9gB5EokfEdth",
  "key22": "3cysUdHhSjos1KFFFG44Dmu2dzUvy7CjA1gdXgFq9N97dCSfSq9Qn4Bbgempe2wd11q5ibbdyxtNyXC48qqvMvR9",
  "key23": "5BFjoydPryDYyQfqeELvWqhGESDP2DGnFDXHwSF265jwmEJpnuhZztwSd8AbsN5Uf54SGenAv3aHYvsGepZWHy5r",
  "key24": "59BbiZSQXEKzQTQ38S4LhazNPw7cPyFhxceqpXy4gpBprPKGxXDWzQ5EZq9E5o9k7AF8hXgq153cziTiTUfUY9Sk",
  "key25": "3Cn94Dxz8z6f2jR7ehsrJS6qyRMpF4oNBB2ZAheNtfBApwtMHjUtkeyceh7faXzc9FiHHo25WHkxs6kjNNMThbcg"
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
