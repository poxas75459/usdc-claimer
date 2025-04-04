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
    "8EzgT4sTbrn9exqiruEccbtAGephGe2Q6Ch58Qzy6B22EEpgzGypYbhyMr7DYQXmX9MWYHfhccz3Zo5GWy34t9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEwhDRBPxcAUG11JqRFxtJgs8xqKTst5TQjEFgc7WiUQ13jFztA1XxdfbuLQpwuFtwSowfosqieTUUAA95SKGxw",
  "key1": "2CQJwQ5engg7TgvP8Sn4WwLTRVGzDrWG7KunwhJ1RHqbXNVW9otPNKxdgqeSuYUZfRtYMuZTmpiNsw9KrQmpLLsi",
  "key2": "F686MHxJMekA3xoeHKPZcvW3RqESApU9yGNaqk2X8BJ8xQhiQdPgEe3ShzGHDeeqHQxyuHuSJvXaLsz2CxLAe6o",
  "key3": "33AazKrx7qQLUGSTgvec7yUdS1ye3enDPghvU7zn1ghGzhotZqPBbS4omeS4tWFySLVbTh7Vrj3FgM8eWjNvkV89",
  "key4": "YoNVbgaik9bBkBmFeJBhqfHqD9TVe4K3B3bi5Q2AHph1tAt94wgEeRUPMytkWNBUMTux47bsm3itCcaXhAVjpvG",
  "key5": "Uu99ZTad3Azmb5nbqmThoWagXELc36VrAqv7NfuE76PA5E5YTFNPN7A9RqWb3Cd9LjcN6McmW183wovhrskT2kN",
  "key6": "P5EfQKxepvu4AT7J5u63hmruZu4RhRLss6H8s2ebbYQ77SeKbxX13UwEnq9XWegW4g16813grUZYTYWY2xL5Z1A",
  "key7": "2zus14SrcQXQKdqaPWnFhmDciKqReJvT97dKXfhFAEAhgj7zDS8bxmS3GcwsPmgmfdVXSMcwcg9qsBZ6Kvvq8smZ",
  "key8": "tZiFpYpMqPr9Q55baX6BX3wp2Q8Wx7iDXiZHcovLBfTovS5qXhUxZWgA4MTnkib63KwpZknMnHmtEy7H21PFwBX",
  "key9": "PQ9WTeKFnEZm8329rJi6F3JDYKM15ihYvDxdLhkWm2gwkstNjMMYQQ3YYAoAMb5VKKPsU1a1yL9WCPPBcYdJaAF",
  "key10": "2pH3iaL4BCyUuS6Vdofn5RMgN9mHJqVyZcKbVEvDQ1McWtEueXgJc6EtgTSJ2ZFzSDfSiYeS3THqQDwvED8yqooy",
  "key11": "3vGpcy523xoBrAp7qDTWpaaqSq6YbNdNi8xLBNAJwuAYmJhqPfBJC4PJa5ZaYXP28CniWBT71CYGbYo6VdjXKTGD",
  "key12": "tKxjgBhbd3uf2p5CF2AdvDH2a4EJTkL5G5XVetmrFyziA1kDUDQTe3gXJ4WbUKdjZG6qWuZgKptDMgh7X34rMaE",
  "key13": "57L6c7YLGtDFm5gNj64eYprmzcmLXjGsv3wy67oVvtUZYT1XCt91CT9DziSi6ZY596fL1r3aZ3FjmxqRFfge5qJE",
  "key14": "2mXQe9Cdkm1LzxmFadFJ54qqFnbH6CKkWeJT3wUo4sduWDbyWQ5HxqtB1c9pifdeomdv76TvqBjdhB3e1jGJvByu",
  "key15": "4JNHDT9EPRvBQ6WSiQTWd5iNvXz8YmzquDstHRsBSVZXaUf5j2y7rZ4oJY68nwrciRtngXczdWYbJbGkaCWLGCyB",
  "key16": "5DPJUDj8ousEHRTmJZZbHc2wMw9Z1H3Ye4YXzod77eSxkCTi1G8WhVQKt8LwZQqU9r8gv2ZFzpSUqjUR933U52nH",
  "key17": "5KUPLz3HjWXHCTZJzMpKaswW8XQbRg3w3rH1FUWXjZjC6wHu2yMSKYUVGPaMgyJ9Hfy3yjsDrzidiwQS3cP4KHJs",
  "key18": "4cka4pBi29yFu1KBW6pE5t63qUqdrqR8w4QMdaBC9PwXn9SitwsxF9KvyxmMQ6sEYxaFnFbKwNn1i4s6pKpnwY5r",
  "key19": "3b3o9hkTPacsTUY8xxHWRUfHy1BsAG4T4udD8BqEh3pbCJc7iv3kqfxxJ7yVUUhvE3mgSJHnvrZcBhLHSAZvKtYQ",
  "key20": "3Mrs3okTYypNqCP151rfCVJ2Ff1WdKk1jVdUHo2NncbQEgkQXp2wavUj4zXzbJ2UfbUAyVzPS1DEkQaqFudhTK6S",
  "key21": "4wmv8uxUYxBCvELTWeFjLDr2ZuPicr9yMMeoYsNVJWPk7JZkEsLm1MNUJPffBGFvk4yJyFvvMKeGPcbTcEy1U8sV",
  "key22": "53nWsoAbfV6nGHWTt7NkMy6AMyv6urab16UYPCNnzxWghwN1e7NL4V47QN5bZ8e7QWsDhYqn3JfkiGPu9mT5fxUP",
  "key23": "3zZqd7cG7aywyTNgoChB5Y7DqxLSJ9ZsCv5K1H8Cc3EH6dBf5hkjQFCgaoR44fVayEPYCE9S3HAo3a5E18FYocXc",
  "key24": "3UN3HSHjqtkrUEKSZGfUZeekfobdVj7kmCqRzbmqqH1P77UCTf51CiVbaJQFPVfmTWMSuWT1brzG3E1wKJVvsS7k",
  "key25": "35WRWbd8R83nEqJWdT8dCx3AeXXeZA2QiJTGJpFFtm5jR6j1qZMEAmEdLrm82Q4JbkvmQ4ubQePrRoyKEqVyZgTa",
  "key26": "4aKB887TvW8BYWSAxCMAuAufnuLZrGThm58UfkYcySZZW9uisUEmEMqH9r178wgZS1EZH8sS576USfCg1pnvkxtG",
  "key27": "2LPEb2zEwJzw21QfA3eXckvAGyZwQyJdxxE9GzH44ARmaD1HmFHRExQnpHPqYdBaBmnwVjZjT9FzH9H4C5SYJhHT",
  "key28": "5kFNCsVCYGup4KkS2FSeRHMxugxN1dNQNaTMyrGAYftNSar1vDjFvyEvgGpvgh5otN2VuRJ8N2MwdbGH1TPgvJna",
  "key29": "2bfaWJDVo1sSUifFpBeAwvFNvBNJ7xerD4tecHRiFeG4ELdXccBdLteLEqPNiRWPK26VHfi3uFCtcSESSUeposm3",
  "key30": "5JtbG4UAidXeUBeYCAVKV8dbTDoLSJk2DdQppDg5XWAxpKCeoXrqZLpFJ3gwh7DQ4Ar2Y5Mvj46e6Ap6Ss39X8SY",
  "key31": "M3pds5kbrRVLX47BzPPABEBJ1B1Nt6sJhMHtXTMKkFg2GLtHNkyibvWvA1xkdNvyiva11gwjGZdPpF1ncxrxmxC",
  "key32": "KAqmmaTC27FMZeu31CkcmBqTXc4f412ttiTXBh7kDPsfaqqS1wE62R9aqN3cimqf8y3jv8kAvAfANJnYoTNBYAk",
  "key33": "XMzNHqNy1Jvs6AUgNPyJMUYixxxY1aY9QfKZ8LgJNGp7KP4L2AK4Ha8qmW6SoVYkmo282GYg1E5j6gVHPoNdD62",
  "key34": "5woHXJTwt7bUuYiqpzCzdDjFU3Q86fmGB6vCEnCHurpTQwuyb9BQcTC8aBpiTvL4u35VouAJcucAuHQ8HfXuUEiv",
  "key35": "5zpggXL3S2VYC9S7koy8KKLCN1p2kCYtYDHxwmYgCJQRUJkxio3Gm5tAkRtQAN6a2vDXC7y9jWkojQpooQXEde7a",
  "key36": "3WSCBwVmxesywP52B9RzmJvXP837o7LNZkAtbshTUrMAkdedUBjcSRbnvZWmpJcdt6ASvg2vF61xdmA3ARJ5C1Gs",
  "key37": "2pRq7wR8exr5pyZELUmzz75cTgJW6vq6vekqUf6119wC8LeB14QfBsBBmYrUHhZXKzmopXG3FBYod7xMdAUam1re",
  "key38": "4NyBhx7yfpimaefeEqJT6HghsF5dBbnANMvZhK8ixVYrLe3SHoMezZo62D8mJFYxSeJ6p6b5HDtz6pN3jDQNLJe2",
  "key39": "2cUVBRzA5qrFN9QbFUGzHUpCFbBwT21GSYGYc7NcEFFiDgGqg67uVDw2RKscT4x6X8BPAREZfjYGpCwgWvwwwnSG",
  "key40": "3guoAtDvAYde2WqJ6BB4bLfjCer5ARZH5w6udD42g4gbwvyeQyZT1AfrMnn61o3yAGPXuPrdH78dnr3qrVz2SgSt"
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
