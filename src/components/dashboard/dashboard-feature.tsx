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
    "64qyvzmwSi48HuqgRTvq7nM9uy64LYCZQGvkffmRyysY6XhUpEAXJhYuBRU7hqujRF8ehnLkPLrEXnSoVANTJHRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3raX3xmNC2PeFYE39oTjfkfJXKguhMT96X6N3ZaqWMMZzwcWqpXstCRF6WVsqar14GXUNTWA3dpbD7wtHCFM2GTJ",
  "key1": "4rqkv2r1JKXuYPzfsJgKbRawtwSWRZGtgcHT2QbWtx5F7AXqTTkZcYWDDpbqgW242wCWfsg2C3TToFMRVH97CcaP",
  "key2": "35w3py5wpsDj81Yqbu4Q3LvGR7PAnybCt1ji7DV6EaNfbcYQzAyTr5SW9XC6utnQA1oUg4EPC9MvhmyZHE53nz6a",
  "key3": "2VFTdN8Yu2erVCqkhKduqwYuF6b8iGEX1x5C9XPsb9r9HdGJzzJ9pBsz5res5qeJdKJmFpsqyF4B6afmPBFjHq6c",
  "key4": "29wsCy4c2Qst7fcwCvtT9sCWfKxYKd297wV84wpYhfiKTAxSzfuCug5t4KozCqPHqhm34XarqRCbrtyBqmd9bzAB",
  "key5": "3Gt9aiLhfv1HmNot3xqdWYDpynUqbUL2YGGWQ8NfTQcqbBN5gmDSykhn5Q73jUv6LMEjMKt11CbYf6kEzmAL77Lw",
  "key6": "tn9fDngvJ4kXyXMoRTRybS8seMBtMyx9UpTVYEew25hfhD3DGqdTaYYbeW4qhLCJBgMEoR2Bm86ryxVsjfmE82W",
  "key7": "2pEmWc4EGdgrgrkRKAoXnSUwr364LK7P1jH6cNhWgYJx3M794b3w1e7wC7wTm7KMNh5yMQjU1GD6q5tYFR4GbJYY",
  "key8": "3gBpC1r8nXPeRMfGzAnYrrYwP4pCejWheMN5GRqpEWuUj6iJt1EjdoZxGGhGk2PZNNSWj5DVJecEGdoeZmsACAKT",
  "key9": "5XRB9BRa4f1DBxCmQz3kSiUX9p5DmYSzwGKM6k8sWhKo1zaE2p7KDB5A7nHiZqQoGrFRTVbh46uYWQ3EhxL53wwh",
  "key10": "61FTqryoN3xjSEWLZ2jbLnR26voY4X2LJwM7nJCHrdKMhz6CGrazPFfiMfga7qphHgj3UG2vvDjGohootLV6jypG",
  "key11": "2Qc8VoRypGepy7J4eJdiEnUUGTYXoJuLy8KVV4CJ81z1KbdgQQDQ8J94fMPwxfXWxgsujMSicJK87qCCbMAVYpS2",
  "key12": "61RuArspRG9PqDsBUaaM7HSkY7G1JHVyLTEPDAHxj2rPaqtbXfPPoQMda14XtHxs4Z4Tbw3YqouS4MBYDghfxLY8",
  "key13": "2k4UjTYVMREbKR18BtagAuxiZUnoyDWgXJeX9yEgzP3AYmYh2zh2keHcd8Q3eD27Xx13NGtei4K2WLvc6XxV3WqT",
  "key14": "3t3ymu2XkY8bydA5EFh6w9QEakHHJPKQSCweEWRxG5AhvoJYd9yHMy8o84Cf6qmvBAw7bd5e5fx4uzTbN23o4nDX",
  "key15": "5CrbcbMc32xmVbfMnHHTFpgZdDqp4ZdpojfEPdtDAT3ftenG2kLTdzhcZkiaiyRdHsJqMmV7GYMsiqe8HHthJ1Ne",
  "key16": "4Ln9pvnDFqXQDELQ7wNTo8qKGBa248HRpkiLHo4zKsGd1pgz6wCrPHQVeQ11aa2TWxFKCECQTBSxTTuoacrNLeqn",
  "key17": "2HMN3awEzafEzAcHZnPNJzcJ2mWqkL8ZgtiHNDvmPgCrJ5r4qUyFmCrG1L8PijSySVAocALzACPYWe6PbXxbqW9L",
  "key18": "53qau8WWT7aWqLJ4dmCw55D5MDcNbQKDZzSWgAWyQQ6BLWSoSFof9kqFtWHdxw16ojajQbFggsAmQSRUXgbwDhi3",
  "key19": "5i9Xx4GSbrSgYmUZvgmHPfUxUPg7M8fXEFs7AqzxoLLeBvqDeGku9yLfQcfBgG3SJ2A4rHaKEVX1LnBVvAazDPau",
  "key20": "4rXqrn4R743tm2iheYuroaaUsXo265mvAsW85TmTmBPXozte9tnkVEmzRpid3pgzyRbRwR99tsHEpCZMWXiYGn7C",
  "key21": "5WWQAKWijhZ5whKZnjHbc7EXkouPS86DEPZFxVz8exrB4nAW1CyVvVq97eb6rJmU8axdA1beMY6ubRw4eTarRRQ1",
  "key22": "4oTJetzdzaKNvYnJ6EuEry55GSsjfXKEr8BvmQT7suV4gXnNrMjrUBWg5KHvRdwHsyCieEKT7uBMbr7cf2eLdc6j",
  "key23": "2Y8iMax7HTGZp1n4dsDrngmcb5R3Qsk7hXjAer5gyhUZ5b2GXu9i47M93SiuNBtUupiHhmvq8eTkDrVZ5HGv8KrN",
  "key24": "3hPvFbUT6s4YbA1Yxrn6qHmqAwEshfAwEWY75WVDQq6jswmcTkby494Fx1sTgUMRd6VyqZoqgQLsJabJnrYDywD2",
  "key25": "5nd3whvcvaLsS31aRLzgPoktnRAyLyDfuXxqrmovv3jemSz4BuZqycDxdfdJQe7pnNGpRdB4yPsgmsXsMkoeFe75",
  "key26": "HfcLegeu3RGE6vrZRQjJC4XcQcbNMPQxSr7MFw85jLzRmGx5USkwedkSH27WVYsKnWgmac3bu1JkUYVZz79VcG4",
  "key27": "27Nu8uRA5ZXx2o4Wr1hJFVro4xZ1q1LiyS7mtjagxV6kdh6Ft89z999e7fw6B46pvQAsMAb6AKty3N3xyfX2FdG5",
  "key28": "DQT2ooxx7icpKArn647qy78hbiTbi7KYFCatmgXxeaV9Nh6CPjR9MRydNRA7dUViXLSKygMe4Vk3VJAMawYNDRC",
  "key29": "2YFxyJi5bgksQydjTQFDNYqSz6iTKxiBCdovyhdRPVDtffo63LFwpK1BowWpuhjPBcp9T1AjrxZ77WfB5oGf7ZLe",
  "key30": "x25ZcJJXxNu45r3K87RwGuRcWGTogya2Psrz1dozUkbjXy1crYYxSz949xfUj1fQXioH3nESCkiQaumw2HvdWFU",
  "key31": "3vTW4tvj8Mw1qzhRkhQss7WXGduUGEBx71N93VhFjfmqXNWaZr3wGzHXv9Z3cW9u1JtMzDPzdVVgvUfT27z5nB8m",
  "key32": "2LAHtY9To4J9V2ph9QQGS7kvFJnH5qYgeyyGc8ksDc51Ak1fnWYTU52YdZB3MAzz8ScekRKM2f3JH6uQWVeiXoCt",
  "key33": "AvgNE7J1CXK5yRErMVoZFujFYPzDxf4uDEuYXHMoCZdMWz3Cjsp5JJh4AVwPop5EY5Za2z3fnZNKHbqxmAVhxmT",
  "key34": "5XAp69LdvbfVx2zxh6JKn4aVLyZx3tKmRm7xkeSGSBHckpS6TwrHA7j1oDhVEtnL1W3rfBYrxAaHKTLyx2PqM4yR"
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
