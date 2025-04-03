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
    "5geRqZuTGm568u8Lm9dgheM7pBrUp4tHYMAkwgxHq7jwPcxZDTf9fzaKLJdsjTCcF4GemWtTgtKt9GGwZ4eVkvmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3f1v5g8TFVCNS71qEgj8u2BzoLKzBhvdrzhnWDnj8hmanKPGJYLd4yvmjkSFcDvh3q1aDT3tbVGdi5AzySi8QZ",
  "key1": "2iiQTYJhJQ8gfRps4N5aDcDNF7pfaNkkvQgUaJHJJ824QtcUmHGq7eta4Luz4r9fas5rEDU6FFK6PAMxjXakke1o",
  "key2": "2JYs61cCbZBKvCCArGZ4VMf79PcNjL45e8CMtWJdRohbs2oCCbG2L66pvBLsE8JJZxAiN2bt6JbPb7NboGz5uNNQ",
  "key3": "4KaTuxwFfVtMPgP6NLkhbkx9cQeeZ1MREPVo9C6k46fJ4GHQjgSCKhS5UGQerPRe37ffaf9ZP244vSsYs3RWWUzU",
  "key4": "jYagHjYjkTCYLJ3S2GVH62gL1rKUHhTUDLzJsfmAEsJf6vFmLQY5wcxMQxbMh5vbiqGmvMswjdC8M64Jqa65kJD",
  "key5": "4emNVeP3Ys4XvRzzUU1cXfWih8S5ogjoMKaJU6sxg1oMtLGFigwNXfppPyBtZmzUoByEdm4YvG2XtfoQPyTdaCAS",
  "key6": "2nMUzS1sW2RMnRd3id1eDoZndefHzDN6ksFbaxwHYeLsUbRX2RKePT5XE1yJwiddMgcudoHcLhe8XECo5n4xmReb",
  "key7": "2B3N5XcEqm15HHKdZcggaohpYP5QTJLaJ1QH7aLig2pNCmcxRpKW4QNkDoVAHvuHwQZK4ooxV49QkXbQ18TJ3czh",
  "key8": "FXA1JA9PBfxrz25JHdBmQJx3PDpPGPL1ybKCD3UawYYpMURDozDR5RVqadFHfrey4oYPoM1CzSpnKke9Fw4kzHG",
  "key9": "hcZwin7z7yJQzAsMsHeDY1R6AVk98arttQc6YXx2eyNpQZsbnmoUkeGDFsB2YwEVPQ2MsnddXpnqJ2Y1iGcaXQ5",
  "key10": "5DERUadtrVfhmu6vT5Hz92SABn5H5sbPvMxgnkC8ZP8q9oU2mWEjrT7PaKRz7ZUffEMRfWeLsCxqNJU9q46Km6ni",
  "key11": "3Y8Y28vuhZAJSxbPW9VVqPDWvBDEqFa2LmwiwSSqzarZ9GUSvvzWDphvAgtDii9azc6SA5vfRxHmhrzgoPMHZoD5",
  "key12": "5vTVJisT7rFjrSLdvkH52FmYYW2BFRDuNTxvR1cCTsddGYoZBwUw2uXNSUhuzUD4qZYBWi5U98Db4ZpVGdTYfFgJ",
  "key13": "66JcxSDAbFWtSGc3Jd3jUx5MD372xnz2c5WkW2Sk5yZTNkjcLkCjBhqvf3Rx7byEdNhuXcL3CwX4t3qANbtrwjrZ",
  "key14": "2iaRSeWrvU4Svq2wvdqFqQbdGCX9eFRtK5UoUp8zv7TkYn9FiRBFjuJJNBqrnb6kCkrMKq6qyzxnptjsJXNRRyWJ",
  "key15": "3h8Z8qox2ncToDvnusLqUCYddhiyNzPMtRX8P3Eyi5tDPxYUgXmueK2iN43E4n7a4aZsASRHf6o4NwP1ot3TtFMC",
  "key16": "3Jy27zGDyrUk6so5MUk26SVC6wGwgYiTUoGaMF7tZUMhF2S9YtuzTuB9R2Roj9Edk6FX4PQaKXAZYnjWnvcxwM73",
  "key17": "2w4TweJXZZyp4PoV9HFcCH1f7LzvYXT3jduzqQofwJrZ8j2bZmC1yDkRhYMLdjYFxUosr37VF9oQyqYs6nBuBTCK",
  "key18": "4CJ2YWvFUNhRcr3piBPa6GX9vcXirSD3TUQns9r118tEUZpVmdvmoBJxJm3mhMK21REufoFoXFMuK55C6N34VLx5",
  "key19": "3VMpJH74FCtVcbRCjhwQdQCbXhrHJCCihuMQAEyjkVWXPwTzL3wJZmTwdzuHppgYuuX726bmmufcWxs2GWz8Wiqr",
  "key20": "6AdmsSkALYf1TbvvnDMvJm7JvCZEZBkti4UGnsou9syQLLGPnGqxrXacPkcCqAvTguhXUCCTL8hTy218goWmi4Y",
  "key21": "511NPrqnEv1acK2JftSSLBcDt3WsJV7gCazhPERRaePPF2CE2YwTEcJ6iHS6VmfWS5Jn6E7MX7hF6Kr1JestDYJt",
  "key22": "64L1zRZbGJNdNfKuNjnsCL27x8U8BzupMqSzgBpTdRRqfFSGe3EnAHbEHFFJABZmRQzfGcdinftCo1rd2wK5LuGh",
  "key23": "3KYERZhzRps1zWEaa64x4apySHgswWt6bXKhrM3mDYfNTJrasxoBi3hGENAnbv6KZeu1w9inc28rkfywU2N3CJmZ",
  "key24": "5hFuk1ZibnbWSv7o88fP1N5Wdci29JTCEVeDeS3c74ghSwrpgimTFHW6Em992M95rRVor1G54Hd1bs8eyJJ6u5k6",
  "key25": "AD9scriowfV7eLJBdkWzQpSXBjpiRP525LmBcsDvN3SqsUEhGpaR8grV5qxz2G5EYjgxwWBFJVF8GAmSzg8hjCn"
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
