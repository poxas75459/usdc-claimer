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
    "5LkTuQxPnacDE1xiTHMb5jHB1GjZFseBEMsWiMSMKu9uZt3f8uPUeztGm3uxZQzDjWEH2jPNVPj1NEUM8mA3nivZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvc6vdYuxcjeVnLsdLjZqkDb4xNza7m5wKNGSQKorcPZpGG52UWtHCYzEnzsmicZ713YC3wU6oXQqX3Tfru9sVd",
  "key1": "3WdRAvSm1wTbHtMrm8kbxDJSwfNjarnsQt4AktvGHo14cX2aBeTteVhi3DPZ4P7S1AzueCyUjeacBTZptvthdUvh",
  "key2": "5VNyqttwPyBTWJYEqgSx6ofp7mcPfNG7sqfYTGAyaWwZGAVq6zBqjmDBWb3LNqSsH4EgxehhYXhmNXGMrRLCLdy8",
  "key3": "3L58r6NNFCgnBNa7Yw7PQc8wiDtxhPoNNDfFor4NUR1SbPmCqp8Y8pMFgGQsbYViYnc1dtNpvFHLHUeYinssf4Dn",
  "key4": "rXXkY1NandPcSPk5uZBctVgo5penVpJnbNN89ofYbVE5Dat71Vt4MY19tb6vgfiuArDFKg7sZA4jnBT5cjDheAc",
  "key5": "4dqFKsSSTCgec2bzkEGagqfUsQEXeBBA6MpxTPyJC1gQQJ31vaAogzewbRdc8AeW6zw7xwbzw74hPXtuAjJQG8AA",
  "key6": "2Uh9t3STWtU2xNVkmFzuU5i8Fq6HdqXGwT8WyuwTqVyxyto9Resw8DjuiPicfcyJyuidSLuvLHaufmoQa2mmTZ61",
  "key7": "2fz9kCV7GWeqxin339siKFvcSQckiqcbZNE86ypbsK4HG2KQyqsF34MXZL59RNxwaUwg2jPQoW3VEDoQxPzUw6Ht",
  "key8": "5VjLSozhE2QogJhYFJidvmTeuXDSVxV3PAr8eszj7VU9f9SD3PxXa8QxAyXeZwAoSPH8jQuSTJGPFLrGm55DaVgo",
  "key9": "4gWcTurfb4cbHfGs13MMJoR2j9muNToM4cr2Xne4bV5vzDaRtAiW5BbWnPN5RMDPj5J89ddvU5wZNmue4iJHvJhm",
  "key10": "2FFfWsCSaZZYF1vKByhQksYaDBVYgLD6eeAtvGiLToSnkK5nNLbQw9EYCUsrBKHmUvWgpb18zMxuqRiQLLPSZrcR",
  "key11": "z7CG2DDpJmzMDevqNF2V6LozRrcmmm6fVxKmnruC8urgLzf1wtZBSfnonf9GNEDAiTD3FoPm6EjJ7dSthWSfgL1",
  "key12": "5fSbJLFMVHB6PPYwc3TLtk3pEwAW7KthKTKXcWJFwwrAiHBhFKowxc6smXnEAXY8onNc7GSqzJwcobs2dABkbD4m",
  "key13": "2e7PuTirSHh46sLGfHHY5mSMMMdYHRtaYMByPEgnMHvCYp5u4N2u6xzCsMusLAXnTPGGZgYfytDaLCDsnzWWVoNu",
  "key14": "53faSuyEdJD7f5bZQsBGnHmp7Ep956DcMURNVN9spHkfzVjLmeQVuQ3SP9WFJKdM8JYWMNcAPnfDMr5YKdooegLS",
  "key15": "2DcbBXqTRQrJQG4Dc3qfJHDR1kdCztgE3gRJ5p9fuzGhJhkkZFuz1ieEsz3BqrsY3cgekcytn8RX9CctQQzdSMcb",
  "key16": "2iZFwf4nduDFW5w2zhCvwYYLaGmq1i9j5kDHtjdJ5jqtB6TtYREZrNuAZsXyGbS1c65PYbCbfe3oVcMEYcGKvkec",
  "key17": "4iPjc8czbfdAiDHkQFN83aYtt12v9NydW82EWMcqKuvJc5c8SqLN5PLgB1iYBmwqJS8xjAMC6JFzzTvDq155Crk2",
  "key18": "24cnLczNYS2wKQXWAJrpxCQ8PRYinENCBiizcCRJfcEsRos4R2PX6svJZKCGqRWJNTBUdLEyWvEmqGw4gWY72Lbs",
  "key19": "3Wrvmw2mHv1bYVmaR8JRD6PUazppZfNEVQXGLkBcFk9yMivCW7uKJW7NYyUZsasJtBKdWY8xaMQWj8awnkvf64u3",
  "key20": "27a9PoaanZxSqMbWkT5h38maqxCRpo5n7hhGjiiqY6E7rF33SxujACZr8AaqHP78CyWURAV4wDR3it8WkMfccEYJ",
  "key21": "5aX4C9vys4eYxfrHek6Ap9nNsFNcQS2Mb8zFb6uLKzg4ozNUK4C4r5Mzw8cALiJSFKeKVEYCAjxJKWDskfnNkkSd",
  "key22": "3imLYDD7SLhgHptQmX2evo67gRPhH31buZ6cRt3wN7NLJt3wwpk14Nz7uqCiK8KHwCezugUyZmQCG98HVL1tUG1t",
  "key23": "rRddybAFFi5ge5sHMH5soXLSToXiPRKyE1rk82oJhr57JAsc7zc2HL2kXzeHHqyoGNC4XjhnaaNrLLL186WQQCP",
  "key24": "5EuiBVNUUcY43VuLsDEeNHAuh8hYXa2bNHrdnv6vDWR6tQRv2FWmCV7vvAMmY5CNLJjMwbdNiXHbqd1AHf54kuME",
  "key25": "3HQtqp442avduihu1DDsXoLPUpbJAv9HhJcCXmFft8KUA5HYTNymL1VT6kNPH3CkjaKkK6HYa6Ff6ZTE2Y8aEERF",
  "key26": "3e8Us2cs2ZbFtrrb6YDF47ZoRJ8eC9kEQezKTGgvkE27N4fmD84mitGAgfYqSL7kEpFWfq9k7B6sE5LLPcukug2f",
  "key27": "hkSZC5LdyrkxDnVSEa246CUEBu4y8GqbdyjpjuBEkwaHrRLVaQJHgaajbhJ6fj3BT9HbrPzA2nfLke4xN56HC7A",
  "key28": "RVTMJY5rYoZd1ft1rs2DzyCZR5wqyqqEqtMkdSPjZE8kt45Khx3gXejjtrx55j3qbPxCaVHSbQYQusfn6Y2FxLL",
  "key29": "5teqnWn3SxpkZsR1nfonTjb9kX2aLpJY3z7X23stTc8MHxJicBeLirMjoAKnHz5JH67LytL52Qfq94tW8rq14vQq",
  "key30": "3DgRdtHMdMjHt2UrxJS49L1QNwLKpeePf9jQNUV78L8GmKf5XkwrMstq5vGSM2zDkih53BhNPLJ9TnacXbqk83MP",
  "key31": "4S6KfkpRbMxjMjmrNJd9Ln2uPLMFdswU8bbaasUGcCNQ3Xr7eMLoB9uppXzMQPFRUsAQ5UiZc9U2AZ16Uhbh6wfN",
  "key32": "29vRH9KEDsJsWynnPiQU22tuqhaVto9FcDCvZwFchAk4fnQn3HEUdYVL6MMSWM7TnBhVgUVenrT58HdN4EYWZSQX",
  "key33": "rXRVMLe7xHcHyMhhunkykLiAx3R9BwEH9qVufco5SJRDtKwYNCYry3CBcxqp5TWdKqdC8D2TYfgYkzQyCTK5die",
  "key34": "5j6m341j6kTHv5GsyPxnQ7QQfFUHR5jieXddZZL7SCKbjnpuYkaN7SJ4DB3Y43EZFcnbDgzGubFZ2BQchbEVmcXL",
  "key35": "ngKrU79bqbHy89QWByGX317CP2GKtzmaH7L93FSBR4ukrZjSxk5ABnP7jT3qjm9KqPdN8kqajapwoZJa1VFFDMB",
  "key36": "2vE7btkU1JDJpeUrEYqs3HAe13xJczwrTWKZrxZVEoPuJP7CuVeFT67LrvBS8XaZGwTMCk3KNFEJgKTxdR6gh8TY",
  "key37": "24YykzBhAPQQpB68caXpAujcC7nXVX1kzuF7mJTFoDFB8Ua8t8PZmdpSpTjZorGoNNkQkSFeo36UkY8J3JhUuoaq",
  "key38": "2MGDp2rarKbB8tCckXVPBFw71ZQEWRxbVicXLsk9dasxPCeVM3NdR4dAQPB1n1VemamD7g7AC7qkb37MHGjwNgvn",
  "key39": "XCdpVfzmngenDqxTXPgJGnFnhdNzdcpewEu7yWQ8qT2BFHoYpYWjGCyhzYjabYeHpFFArbbXGh5xT74JSK6eKUb",
  "key40": "66R8YXuFxB4nC6xYmEMmTWYgBs4xcRMrUozvpD61EjvuJBTiwnZiDSqmG79AZRmzAQCXyh1LJKwxR3GAvqVQogkx",
  "key41": "2QNp1Hhr1fBgWcssZiKjPCFBFkN92tw36Fxwo9kqZCrJ2GxxvVGcCMbUR5uw5FmLynyViBU3yGSNRoMgZSXrM2PB",
  "key42": "ZVjLdmN1UJztMNpH4bw3oGvkKZe3wr8j4nEzMTNxyhhM6V3g7PcDPpn3THErCuuN4jxNzYHhfvzXQywnMTnAmmF"
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
