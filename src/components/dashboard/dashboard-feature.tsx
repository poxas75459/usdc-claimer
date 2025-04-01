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
    "2B5AGjzPyjrFJW6rKtzoBaDxbw7J1HqJreT7pxs2edpdZWDb6dgr7WZws9GnCrNsVzJM8ck6PPFZSRSdiyJKd6Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSVgB1UVw98am8bdjHimGmSWPjsyVgCCcUxhaxeV28vzkd3DAQgkkbScuZPa23faakPfgMydJCBaTiQ1vhKa9Ph",
  "key1": "3VZEmVLzovBig93imPTN3sL4C2tgswLFE56LQNZFCSsfqRKXhddRxKgKoHDwxcHzfZV8V6KPm45Kc6iGhnmq7zHP",
  "key2": "3P6BaCfnLCFuP7KEbyZxrouPr59aZXpBgofbK5SDWU6ezwz7abRVhsFFeEqqvC8NoYhijg6FAoLE2BpukjC5EjY8",
  "key3": "5CXJz9hAQCQJrCScu2wh1BBNuUUmxwELeToPPfSGrR7JBb63b4eo73FzG8zozs2Bc3MRb8dNPTmFMWXMuzodmPZd",
  "key4": "qgR9DFaGzeU4D8ywJyAqRcFHBaoYC9Z5Te87vEhrYcM4dWhjSQMeiFSjhn5ZB4ERmsyYPC3LzFwuwnNPMydD2Tn",
  "key5": "2xcPzq6QtrmcU6Pt8ZNNQfXxfpcgArWHCab13bmMEg6Sq7TkDG3VDzm6mNDA2fN7tvFdfhSNUBpXYC7XCobqh27N",
  "key6": "RBk3SQ2VdXY8vU7suGU4wk1WmTnBVKqyfCRrfGt4g2TCQScithCY7YJbC3EBJr2a4BvMJCHorFhuh4CCUm7vQGn",
  "key7": "4b79BcUzdgYGHCwmmSeo5XU7x2Wo8KqQ5Rz3yp7TNiwjbDnQEvxSvJowSzdHSHsLPo9KmPHAuRXS92YvcAUJ8E59",
  "key8": "2WFh663eAruTN8hZb6uDKcM9c2x4EY3ES1YEjDnG9s32YQ88oog98PT5SBmA6CoSFGJt3fA4MgwSYTDJ7492ocac",
  "key9": "3KirhEJ4kkce34LqB5GtqphkD4CK9FaufJ1VJRF1i9GeeEGy8BMLSBtYv5WTmBkSZWkDtWPzLEMtpYb88yL1NKuA",
  "key10": "5e6ofCjgfgTka1Vgb4ibob3xpUR3TYtraWDLjEJkkGazCcn99n8P1LT1tYZ3EECCQm7DPyMDyPMkmhGic2dc5sUx",
  "key11": "2f2HJzQPSxon8uxVwqXxbEdxoAxJFzES7xY3KuZc7Esk9NhiiV6bGEmCnmxo2bmM9D6SpZcBswx3YJByj3XGtESg",
  "key12": "4z2jEpKYwa21TLpHfq8A1TMpTqKGapbq6iqM9HL7948abbJTpoNXMyYKNzFAwTeenDSoPYKpKcNohj7v1Lov7Ec3",
  "key13": "57bA6X4XZUNneCTpWRxzZJEpBSB25CYrANvrD6fSq7nzeDmsvgCUmck5pXnJ7HXiLxfYZXjwNu3GfGvGTm3wzP2A",
  "key14": "3jLJyqi2rjedbKs8PBW8Ee3umEtP2XRY8nwjq4VnoHb5p7GDQorB8MhkWj2hEF2YUsqqenvnPJMjgEqN2hQS6AKq",
  "key15": "2rzKciQmnztCqMpTHCaABSX5T5jDTyre95uunNhYGw3cg3BdE8q1iDCS7VewjqPsSAuyfntUNCgnxCHaR2A5xX8o",
  "key16": "2Pjcdoz7rG9iyKjd9D98ogT1jdkpj2ZvjJDNRG3Tw7aqDYGPEsLsaEjJFdps3Vn3HVBFGrHxMosyvbC7AjEN4cWz",
  "key17": "2UHMD498J1Pgp8dYVN859HqubT9jviSaxCi39awAddKYNajTqnLqz7AvYDa8ved6jkCpKyeK7Mx5Uytwre87bF94",
  "key18": "2iz6Z5aYzWKdab8DkSuzinQx8YGUtwXoX23zoU2S2EEuzCCNkM6sEv8sZiHMPgKsADBArTpqsbq3pkD9dLQ6Z9Ce",
  "key19": "2LpFX4FNxSz8wy5fsR85zk7YpvBi7CKro9tNWGpP9n3mLPdNQ8YrtTc17JGaaxmj6jaxhNpgmavTgMe9opVhfTFJ",
  "key20": "34LDSN3DjTeqPobLizPf715SEjQ7kPkNsf2ozZWWDVKaMBvvV6kgDWKr9tgbH86CPVHwyX5o7XEzvKPaVXJkbmUb",
  "key21": "vKQMFeo5bDyAR4rDiT6XF4QrzYwSET6kqEbSQLpDjaJZesf9akNBcUbjs79heBbeiSVd8233655sQG2JQouDHyp",
  "key22": "5MxmXkx5qkzn39qa8yZ5xf3EVVrcGLeVXrmYyxsckeoS28944YXvGp8hYccoY7owijwLACKhESGsmdyzp5cB8Xsj",
  "key23": "3mxKKB3UvjmaBQcpvrKbUoAV4U2LsQP7iTrKgY1hBNcB8fyA21K5eaURqAZs4jWQ2q97xYfhiNzGCz2XEdktLdCU",
  "key24": "2PSmyTchcLq239kU7wRwBnPrK24ndJKHYSeYUCPXKkCJ6jsu5w3s6ZhZtg7o5CsuGW8BpLDkvjmgWDUYRbbUBDbp",
  "key25": "53o2Xo66JDTLLdsWMDzn19g9s4N1YaFHnVKUQbWeEZ4VuS2qmVRnNoQs5VA55nxMhVUQn9duJUoQ8mk4drp1tQkE",
  "key26": "4tRkWuaXzqfXjCzWu2VNGBN3EiJqUFEg7F6QkG67WMF7m9x7YWiqjoKrUYznEzJkPtUBf6J6o9msPoXeoJPaNzVL",
  "key27": "4VRynCESAWrSnfM7RQJwNAiHcdJPbJeQu6mZUV67DdooACWSPL8VDQxkVmzGYwbgSdMtkooiFf6HvM69TKb9NdFy",
  "key28": "25JVY1My4hUQyN8HhMJ9PdFHaHfYiufsK5gtzDNYnw2mr6E1JD26LngQzthSxbMcL5gnE2sP8hPJATT9NkcLKira",
  "key29": "4WSCFK1W1GpLW48FyTXigU4Q3YprifiVvrGsqvhW3EUYvqDE6LYwDjBfxqie7vpKqdf5cXKDhA459r9eEtDVaK3z",
  "key30": "32jBYxGKGKZ7mia2c1HiuvfcnHiebX4TFHdsWcJM5yGar6TSnpyT62AAM1Yr5GSPpZCnfgekRDsLSVk9ZDmazr2A",
  "key31": "SUW4Ymi18v5Pj1RQkhFZwdVTR8yZiZkJuWHTkCjqe35WUc7MN3TkkhHLzKSZv2uMqv6TtvNkjGpdwT727tVUZ9y",
  "key32": "3TmxNZaNgNbSJM14m9tqXP5AEm8aQMwUdNXK7rp1YAydwvjD42Vycrnyc3S6BidZ1BznwFFqjJbEcSA7YRqssYd3",
  "key33": "67No6TTAUA5qAc278sYPiXTGYvnDRTEWLXo5t6fCdTSQsFaJL3xbCVjaQ9BZWuCcgyUdVGZoQ1eJ6LzBCjQtr6Lp",
  "key34": "3GjDHZVBKpMYfJbVxww4KDdMHNdsC27dyaMz35Ec7VY5XgSSmDBRyGa3Ws7vQBJvEHDtFt4jJEuTZbVxUMu6b4NM",
  "key35": "37t4kj4WVECPXs1wJJpVpnQVBncFHf2vHPepQ9GoaedBVevvgNtPBhg4jyk9snP1nzfHFRLkuUQrKycbD731dKi9",
  "key36": "4XGk5iMeWyB7apGChMX1DrssAQ8NGHYgYdQWWT8mGFymNHoJyimtVqeba2wpTZpL1f6bvM2N5Ed5gyvnwYKr6FTU",
  "key37": "5NxbhccBxRnnFMohssLJzfFNi3XzUQmeZ1iHGHRhLquWQKqW9SSccBTwLeFYC7A2KfBt6NrWZZP1McgYv1cfNDoU",
  "key38": "3APQxoFTYptMWa4iaL2gpV7uj5QgvHmir7cLeotpVHoEbCQThFBZydNiXDSqnRD7nUavXUrhYfMx24ZPdkaxVaRt",
  "key39": "6iGT3VJfzHunsGM21Mnz2spvbP4zYowwaPnUS4hQ8Yw5DoXQZu4A2QkCwLiFVPZvuvn1TNHieGhxYjjFwrj21ys",
  "key40": "5m9aS6HApyg8BZrrLBfs2zRLwHarLqbWrhysQPQBGgyNNWRZEKdyBkABcNqKBY78yrCeaqvdWibDafR1mR1yj1UC",
  "key41": "2oRfvtHH2kVxY4zJx4cJRP5xM3jtVGxqCLS8vZQFfakhhqWcKsxqA7ehTExSoCiac4SFaD5cbWQ535cDxUUAGRhC",
  "key42": "4nyeWUhiTkh1uLF5grMisTxAJK5xaXdaELKEpeMe8LVGvkZwAuWQzsKrxkK7sFBFETCSnTeWunrGgxjtkgbcL2aU",
  "key43": "2f5jqmqLqvaRdvXz2yucyQQZWBSHwmkEXSuBZoCQuKKzPmtGQjhzAhiDNPCsjoTTeDKXi1VhHkL9fpe9S9U3sdrs",
  "key44": "3JveT6YyQtG1qDNLY3jV5Kvzjmo28YxBfbDpXEj6FeDnhQh4BTDZvHW6Ro2cuncQZ2dm9HXCWiR5aeSXqXcJHsSv"
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
