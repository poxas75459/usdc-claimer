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
    "Xg1SCgBtBsBMoNJTYxQNkv2dLe9eKJXAcjnARNKnewj5muPyJnw2wZfnDtETSycSUDSXPZBMZ6CNxkA11WRj8Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JiDUv7j5QA8hfYAAXhcZ68S8rdXJ4Mb4aDfzDDTV9GcgKkN8G4z57aKseT4b6ALWYPwumcthnVykA2kWUP2fJgY",
  "key1": "rKhRCgccoAoELDsHpDzcwCkQGmVHsaFzZaeKonYrYbRZsrMcRqA2KYJgsdefXgRrv4gNBdptBepWdnfrsq9yVWv",
  "key2": "2aLkLfCBfqf2HSG6wWj8npLNgU6H2yUn7NiqQmWSsV6arkx9W9aJJuypGSGg3BsGryTEQCQsv31CmJb1U9rVPEa1",
  "key3": "55VapEg3yQ2wz72EThbUPYfNxXkP71crFJZqPjSzBjru4VUCLAkrQBp4KFYBnEzFw9hnbLsvw5woZitTXwvCoD5Z",
  "key4": "8PBZpdmojrsFfrxAysajfwaWjMVKEsDm7ux4aTbDgq5pwo8XFW3mXePXbNDLokfqgmVTnxXnCQ4ednEMACQk6E1",
  "key5": "4mDX5VcQtVFf2cbWwmfX2EDmS2Bp9Fg9HR9TP4zjyBhGvQ5obGKyhBX2SzqtkH7B9RrdfstbuFPL9tsKbLHyJg5F",
  "key6": "34Yy5YY5qb8RmszeJECLJgfhErxrc8uo3iy67bnPQTzzdregsKgNNPmMy8v2keCee1qbXMGWFQrhLv3MxJKgwQoM",
  "key7": "2vKJPTc4Z5h9cuHw6ENFm4Xt5GCELHYDiWM4CPY1EW2HCwKrFyv9D9xAu72PFz1n2BuSbXnZZjdA2xRPQFF2N8Sv",
  "key8": "5J8s12HVXfJfrMsZBfBXtoJBYnx8SANs69MCuGTKYVrGT2e4iuPmq319B8wximuB1t7rEp7T2jVQhcNkbK5XBPnn",
  "key9": "35cXBLjgAbBrBevqxhdCA1oqyuqdZuMD5tvesg3Gax39F9TSTjnqh7Lx5PwRkHx5mK5cAtfxvpeyFLay7U9agNuT",
  "key10": "2ET8YUpD3zsegB9iVaXTu5AcP68iRXcpEduizxRH9pc7cECAAb8g6fdwvj8RSdh5cgbkxPmmkcmK1MNuDvycRaHL",
  "key11": "2CFQu7AMnphda3JZ9gT8bryZnaM5nJyfnUwpeXVMBNqk9FpjiwBshrjkG6vnfCk3bEMEZZD23reQF3t4m9i2Anbd",
  "key12": "SVz7fsGLCUWAj5CEGL4m7Hy4mPeY5ZMN563ZCH9Ycb12jhEFr9eEjz5vVo3reYfi5UUirZKpHRCdHKZuNm59NWc",
  "key13": "x4U16VbjNsBNRyYYBErSssdXsN79yXZpGEMboXAE69cykf1oMGKWCyw63qGT7Jfrw7Wig2yTzdrzr4iVABd2ZvH",
  "key14": "UojmfzMqtFn11Gp3PA4SSW5aVdWQbnFW4zD1yPSVLgFMQhYZNL6BMdmHtV5796Ux9o1HLzonA4ZN71bqrqvBgDo",
  "key15": "weFbkRGjWsFrHzq74XFynKkkjGm4y693eBhwgd8MAzZbfbSwW7rkDAW84wb7NKTVwieE5Xdw3Zuizfj8QHpe3tL",
  "key16": "2WkGCso985r9MbmqAniE6oEhGj4gQfXNECYfhkDhmhJj1cdutwp2BTQrFtYG1Bp7JrhhkgeRmYMtsxsQsT1NTJ3x",
  "key17": "2tgcbfczy1tDtqsPTKWNBdXMJgkSeoMJxxW1ZK68SfpDVKixBw5FcTav99JwcUwxSwZfuMnhreMQ6NcW4eUr774x",
  "key18": "4oXAhk2NpxS8xLNsJvjZe1CGuUQ3umja1K3SRY91JQLpetKcuYimyXjcdBbLCRqDvM3f5XWLmhyT5KrAbe5MQVeb",
  "key19": "3yKvzwJk27gj3PUAdUbURk28Ckj5Ddi7ZEjEJzFq1Gy7s3w6ctKcNGdpjycA1KHqMGiRPL97pSdYNifN6BwuRHfF",
  "key20": "2b64epQSreQnPvyM9U8K7MNfro88XzbhWyT6GQGRUBAi5Ufb7Rj4Pb7irmC5CB4yLqa6qrJcqUH4Wtk6e5MDDDXU",
  "key21": "2AA2rpfmHoCdRy2StUYYiVkgRzBpUu6bY1cx6rfcJU4v3842PnVVcyL8w39BUvPQ11wrHbTzGBnxi6S6QUXuDVcu",
  "key22": "5nvYCkbFAWbjrmxqhBXxjSf413eJ5nMvsgKQDx8uhEy1HZU9SmzM9zABaohRj8xShMBnynHk2v9JQ3dMLzSVFtiy",
  "key23": "5KtoN4ksPN2g14wcHeBoTLmL7u3EVZeX58LkLsjBFkmEAbZm9WN74apaBHpqTnuRjxGKtfyWTWH7XvNoZmSw8Uur",
  "key24": "utYUEPGteqdQkrLHZyM8JCg8ry7rr6jWLyapU21Ad88oZ8QBMe9rZvTx1zKmM8BfKHg6RchUmfDu4HFoApeA8am",
  "key25": "62rpFY8xfp5qCmtwAGvWyZdrF4s57QyjJS9LmUXqH4oviCK7mbtEukFgq3UL3LV3ffm61T9kEuorWdyQm48Ffz3u",
  "key26": "3pygZEXrZ1XyNXuBQkawmVnSpru1JZGekQtJhvrvC3BCR6QDfnw6g9mU97kqH742xyhfCA36MKv7W6XG5Ks8BiK6",
  "key27": "3ymGGVEt3EfYWhSw9sBZ1dKdYki2A7VbmSUq4SCkezpvPcC18zoExunTQAanA9DV5eAuAEyUyWw4NeQicoNszgof",
  "key28": "2JXGhLZH3YhozwJUEVS9jYXu11XfwetgRyVqe5FpwibJaWxQSQWLYumsKCHZNFqujtoyV1WPmDr79PLDgcUA9jsP",
  "key29": "4zah6zrjEBYuVE8cfUp57ZzEJzDMKxa76ekRe1faAhr7cG5krWboD9BDFp6P7kirvY2CPJKwqcBH6XF5mxR3VUF1",
  "key30": "1eT1ZZ1UdrKKpU62AdGVgTLP3ewCrz5HrynqRdaJ4CqAAgsdDaN7C29WNToLRbpQ3w5PASmqBDVU4tsu124FBQv",
  "key31": "2UL1Z8rDtjXM4tRPKFFQ43MVbrTeq6TXpMkxuLLrRqiMUd534bxdK9cSiMwFK4e2wxnvFMs7qt4WAZXrkSsNwvMJ",
  "key32": "4WQKLGCSy7VQAAsyo2HuasUzDTx98WmnBJnYv1XBQNDWCtn3Gjvg7aUtEX9uGuz6y6dJ1XD9c9S6XktoGpYmJ49q",
  "key33": "2K7eeeZ3hyqk3YbbMBMQUXAaosH84v1mJvUan3KpLdvZkx3gzZiihS9rTWWFx7o56mStdYToeAWVriV7ZNoxUZRD",
  "key34": "4M3iiZm5S4JHkcZZzs7XMnLcr4Qrzd6qUCVpRZg39amMUUTproZEbprGuM6WVFKjk6N5HEXnJbG5M1mA5j6WUqAN"
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
