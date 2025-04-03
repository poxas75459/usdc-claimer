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
    "3WbW1q2DUTh3nZRJCaZSNVekC81eibVtgFbBFZ76GerdHgDdfWgfmyp5wSnfg5TGwd2g2Q64UTC9ePcHZrQbdEKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2Pjc5X5jAPZFyTEA6DTS9Yekmu5G6PSRTChxGEQwWjPBngaB4gwsSS87SeSwq9VacAsxAtKDyFHWJ9Q212EFX4",
  "key1": "4ordx8zbLyXhco6tpUPoNru7NK2v6YTstqFMk1K9PirTrirgCRU9YM8Rd7wZtQx76FUPAWP2VJ9gv9sbFmZQXWh5",
  "key2": "4VjUvBsxtW2QRZGj9UGMZwUBSZ6CRbRneoSBt3DheH4p1jFFd2xyPUd61Aq1o3Bb9Ls4j63LMQbR6wsJQKZWHXnL",
  "key3": "4tHNWoJrVJhgHyGYj387dVerD17mo5AVFe7saxpNwUikACjwbuW9tGkPHEe4K5fh3KcpYqDXavXSnThMgyjpuoUo",
  "key4": "2dN4FuE3EGEhwJhzgLa12MDMAzBWj6Y6oe7fonbBupvw9wZFhEDjo71dhm6YJHbt5E3BYgH9J7p9cxBVWGVb381W",
  "key5": "247msuwW3wh77ZA4cXJxA1tk41MxRDAin7uHfsL5V8bjhamFzazR2BGUzBCED8MNBaKEX2r3bd8gm4hAw196agVq",
  "key6": "24dpkJRXD2Myi8sD1KJZzxpMWgkpCaACBeucJe1pokgxV2VWGbpYJwMZMioCzV1yY9dWViqHvkrsT6qSxqwc9NKG",
  "key7": "2ARySSaXEG9ZUS9y7TfwynkzCcneEtTowtgYaNQRzCn5UBgHmVUnmAiB2ihjZc7P74gAJ1rwbziMwNB9ENqueQvu",
  "key8": "62RW3CCZnF86jatdwUgkEtP8hdL9BF9QY4XZXcK9fmt5vnGyY6fEFc2bdbKTj5gYbajHtmFSBPaxak24w9NYEy2C",
  "key9": "67FibMdDv2GW17Qjry9aumEMSKAc4D412FYkEGXFQ5YLE7cgsbw1Nd1ee8EJo4j7Fqy5qWeoMqvc8rKkRy9DWKHR",
  "key10": "2tvrjvzPUVG8U4AWJ8ta6X2P4heXYALCEbi1wNboqv8dqABDwjGWV9tEUrg6YmRArgd9xUj7LzKcDLDe6f2LHSAG",
  "key11": "3RaC4VVSXZdcvxyvdaNFVbrYLs6vfmUUeVWnWcdjBLsDE4sqsxPyNxi8m2RAMHEM1rcJrFtnRTJrjspJbJHQTxmb",
  "key12": "4rqDb8mZQayWD2eLR9vv6FWahRzps7p1yhszmgRmTBfcjM73pn2jRrns21A6qxSJaZSJQCLSe7MqobHm2cjB7Kya",
  "key13": "3GSF2xN2nrNBpjdRfx1FUQWfeuE7QV7CdL8GjND3qSUMigZ64NFfd4SXs62BGCtCT5araK7hDSmEwN6r99dW6y56",
  "key14": "LU5sD51DimXwivV9kbgVsnuSo1wsUhQz33gUBwxKviF8hd31nQa2fGkLrBngGepZR1wAEBMb1jwD7FQM2w2fhBH",
  "key15": "BGGAt5sXsqgebagLdSnHLgrTwqQ2zvXri2bjnfrE1DZyawo78PKLu5DLSD2ZoKAorR1jc9rEymT6VZmqcFhr6Li",
  "key16": "3ecquN9Z1HZXSUdmKMgTbcEHLRP1m2Lin6sE2mYg69E1yL4K1TaRnzrF9SD2xv9m4mfkopdkWfEaAzJVFrRpi7c7",
  "key17": "oZnoPjWbEvBXfazTqk2xFskzeb3HJbGVUEfZ7ciqCL6YZyGxQCDLYwmgz15tPbUiFf6uY5U1XjrHWWvrRyjWuF4",
  "key18": "3FSfEiaXhVELVpkucdv8Rxvs3h21AAUFLwE2bhXWzPq27VG7XsBn5wBeHtmAyFMACR87U9cXhoCexSKDbwp2rcYZ",
  "key19": "346VvB4sSnPyiRExckpQaqt77Lk1bMJzWfCYXcKapcJLVmJb5PWktrUj2PGvzaha1QyAYzfLJrxxr5jM69LYBshg",
  "key20": "4hVzMiKv5D2soSSXEazsfCTFtBb6PEnaSy4SZRp7dZV5bWM2ppJAV7cGYwbTpXZj4M452MZmmBdhXCJdoRtHFoEk",
  "key21": "eZ4gwQhTpQXjPySjk3FDWg35xwpd65UhKSGXaMse2kvfNkqYzDJ1TzpMWCePF4s2oPbbPbL83xCKvNi4Q4MUDte",
  "key22": "42t952Lq7DDyMXRqujumUmzJ8F6Nd5NksUe4i91uRn3t8pMqdn3vbWLWUsYB4KnQZDaKLGhZV97t11oaQBD9jabB",
  "key23": "3bUnQf58xgNM2UdeHD4Rrpj9HVBKXJMp6hf8YjRZkwPhEFmK9wFJ8zWNBRTFdAwBFZEM7msh4Lg68U5ENvzM8Pgs",
  "key24": "oWFP2hPrcNtdb3H5zZS1CzcmRwMsXZvw917BU5MMjukDaFdbvyvB9F2iDM4FnJ5aoAbgchBMGCbC1pAU5VsbPu8",
  "key25": "mJpfQ29FqDEhq7dyrUzThj7piR9iJDNvUNGfQrbgf3skc5aYWAvtYGgBiFUDEKKCxwMSEAWkpsUY4wVKk49N1Zr",
  "key26": "SQm7MoaaV4BhWS55JtjJ1RaUAkgRpgNKTQB9yCJyxu3hRdC3a3wqHtU4ss21pxAPUQXZUfuWyyksGAGt8qjaJr3",
  "key27": "gMd2rtXyBrYDQaQjAvyqbavZtSbWWj2ZbN4jkMhcEegu7par1Xnn42ovzMdr8CHB38Gia6MKxVfRwBMbmZ9vnsm",
  "key28": "2nG5PoFYpATr4pSVGiJt6dooFphjQcNNPLuD84jzP6jfhD5CYXp3P4P4tDLMreAgvCxD5RS8uxh3XEgLeAB4K3Wz",
  "key29": "o94zq9BZm1A6tjSFAyxx2aLZ4dywejWPriEjzQPnfkqrVu6xrjpyUy3oGAnR9daUdpqKvnX437GJcXMLYd9K8WX",
  "key30": "Un7khKTSxc1PcFwZMQG6fkZKZvX2WkLuUohorbcxQqPety63HW8UyPKF2XrN52rAZdWrXymwmkRymTy5wiZKtX2",
  "key31": "52NLBS2s1rLZRrYAUJ7xEpSnJpbWydirDvikDNH27FT8VEVG1xVxQbv4fLNMStyDh66eUEKXruYPVLBMVSYAwqfD",
  "key32": "2Ch41dEitweR3Ex5rQAkSTt9Acj5nox3hgQrhDKXkJnjvP7FhvWk5czLVbvjNgmnYp7oNdKt6xpL33HiTPorytxT",
  "key33": "2FdCybDvkiPv1ZMUVqokXenjuaercrE85CX8U3bGamek3VzuSfjdGBcgaZzRrbpXnXCMx1pD7kDmcHcNWV2geMDK",
  "key34": "2F4Qnyt4M24cptLyqWP4BbN1cTMcrVtzonedGyw8CLGJ9zhH7cZZ6J7udtR3kCxAst9tXtyR8BbnRLekQhdRwqSQ",
  "key35": "3R7M63Jw7VXwNM9g5habYWPfvT8YzEX4snUsLrv5CAqVKjHo6EAw5dGQaCqdedUSjxN9f6oH2z5NnqsD45X5XCX3",
  "key36": "3pkSPL3bTTWUBgLfK197svXaPkcsR7ZS7LmuKyvgBn2aVYmLnu9PnDm2u4EQZhcxB4drfvo4V3Az17svR2kKJ2EA",
  "key37": "2FRv89X9PoBu61x3tZ5Lv5wW2yUVRRTamWd33fAFzoueD9Nv6jWDPWgx1iJynUayYXzjq6Hcv1AKEu41RKPDDMGw",
  "key38": "fXp76P3v2DqtmbqS3BvdhbV7iabmbSJ7z3vfTYACDAfGkCD7PAmDfDbh7GYU8EFTNi2dBA5yPtd6An2LdumQwCC",
  "key39": "xZejP9ohysS8hsSreCiZbtUJvd8UzWjJorkYn6J5jkLANKuY4druutpmmMGMDXryeMgTKw9GA7r5KWGFsnfcKmT",
  "key40": "2NdgNYpmHjnQAC9WQS4DLxhcPyw1kCzhDo9wH5LS9NgWAEVqFEvsKPBwdTTx1JScMbjNbCZPBAXPLJbtqxddFCRj",
  "key41": "45L2uuKi54uq72v7HQP9LJGSJEERndLiD6ZXv2APpiRPvXWEvgCBBkRr3Cfsv5QL75YA85K59iaach6hudeZoyUy",
  "key42": "3myyk2VQCbWhESE4Ah2CWSH8GEbf8zybWhrQysT3vktBXUGqp4cqQV5Gmnxc7DijCoyxXHtxhXa6bVc3WAp169ti",
  "key43": "5e3ixeWNnbGK2zJopcn9gdxbpE6ukBpZ2M3Xt2SRt7o9xk45oMT3u2oGtRLhdeb2Y3KLs78QyDYSdLpZtMCs2pSA",
  "key44": "cQHK4xdhf9hEyaFtTgJ1NK6owprwF4vgchBh9wKw1e1GUkFEbUsMyZHtWskLxrR893Wrohnx4EcnKnf6iBvsYZb"
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
