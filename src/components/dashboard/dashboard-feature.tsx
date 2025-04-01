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
    "63bTBuy2t4oQQquHjWKh3u2Aik2iX21hRPoPqDMrNWY8xQ4kF548x82ju3KXgvDfi3utL4594LxmdqpEbEZAVYCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHsxQuY2cNMhT8L7ePbC8VsWqznT98kpFqbjP2MUSJWvyLzM7xNJezzVT54z81jEtfMzg6GWFt4yDYoR7M97eJs",
  "key1": "Nzzvh3McjfEYM9a7pAxoWZ62vnoGug85sb47wb1oHbQNnG6LJ2jKDYJdUqjmwnqDCjcnmskFPTpg5jnfVZEFvkJ",
  "key2": "8oLamNvdNVwzuaP5us8u9abc9SSaKkw8H62R74DYy9iV9uzfwRvhT9UpDeBKBf9biBpwfy96fywpn4Ve2DEBT6H",
  "key3": "2ActtD3e4LoWvKjJAhKDLFuMN6fF5TpZsfg45gTBUXAFJcjryD2rsMPCrqkXuDvxS7CotaaKrS8A9N3gwFuSL1w7",
  "key4": "3QpJQVjW2HpyKjj5zuXpSVybBWZ5Arp2F3HNAMAup6pyMgcRWDgR7oJhQUvypNfd5QbyTStEaAxhBaNBY5h833VX",
  "key5": "5AQVHJcHgiRMQVkY7DhqR2VKeeUFuzzBM4t6JwyhRmgPtNhobWZGqrEusTVW8vcPZhEB2nNe4JvsDgpL4NVhnWa7",
  "key6": "5EeWZUz8Qit5az3QTgPituQwuTtqfkfLrbwot1ohodctwMFXibZgcGv5KyfSaK1cVLXfop4TqdYUBUX3PEbByfdg",
  "key7": "4mg6vctPS2dMDviMtgXpssY5szPNJdKHkFagfCEX68q7RbqxFqQqVJTMKRv1mAc49jRKT8fLKyxpNP4L4EidMAhH",
  "key8": "4rTW6qtcA4orPzA2fEWU2CwzrVoSJPWG8kfmpJJNynR54xUedaVkzLp7PhxEbABpvLGEh8rcFk9fY3fjnJ3UoEKK",
  "key9": "2yzqgvEiwE1CMoWNDBLtCMHHqF6ZHSDKp7k4dibUTigVfZF4u4W9xiEXSTggEQSmNDNtGgm3gXLXmN8CDtLyxPoF",
  "key10": "3fcQrqWNuD1gps71sume5w6t38WypM3QgCo3qKi8yuM9T7GR3YfCy59i5AFF3NaHoox9qrYTrRrBpZNSuB7Mk8WN",
  "key11": "3mJL3hRNhztejhgZ3ZzEbomSpe6T85CEw3nfNPGSinN2KRBEF4VkmfhzDEeY2Gxs9QjntP9txTgVALGvzUnJadS7",
  "key12": "4RgfxtWSwE1g5Q6u7UmtzBmJiVhaR4SqD3YAFuoPv2gw36P3UW3c93zeyPNBDFTgYCUgYR95kKqL6HJFUdq4vUSD",
  "key13": "4bZVsB9u6gdWoBgy6YvDZCfJ5uFLyaPzy4VXe8hRPfFUjjkdtDWbwWYv5guhC8V2gjCMMjtC1zTHQKaeuvLmzFUg",
  "key14": "2PUgrXzTxaUwNhSRKB7QEXU2ixEtkC9jP8rv4CmtdkyGovSayUtzict3wA2zyjndmeAp33biA3wgKZ4Hu5phLBbt",
  "key15": "5EN7KvnSqrBkgtfLgr9sanr3S96TVPMbwRUC42L4cEq2quWUBbSjUcHxHNM6Qv4YgeWzwm1xhAGc7TJ6sHQqQ4to",
  "key16": "3HAWyvzNh6YitkjcoyyokrtBgtURzMskVnvGACyo7s1eq3iS7aqFpG3YZ3i46XQgrY1GpJXxwemA9cvR1oi5ZqXL",
  "key17": "5by1mabQNn8DDSDivjmLtNTmvjkbB9egZiDAARuMdxkCBWjRpNAsD36siESYpshyu9shixTnkjPvusGEdDJRkg5L",
  "key18": "4naKcLPkLeuW2nfn1rSHCiKC6QiPZvuZLBXz14v75agPVmdZpHDiD8wZmyRtUVcopmNvSuEWrph6nhdqgaTKUqAA",
  "key19": "2UinNrWi15rGN1yhHRX5QUWv4opMYSUjPJSbXMwZ22ZjpaZatLeKXM8rFoCg5XRBegDKfGaK9zwGSAUHpWz1Zk2u",
  "key20": "3hNfueZwkUD8qWbgSAr9ZyQQb59tdhbmyL2kLYiAnkV641skn6nZDEFJcXGLvA5KhdsgEkxP2B8zioPgSaYkv13J",
  "key21": "5TKHbjvgWjBvwQUUiRUKqJ9TkXQqRTvL7AUA4ZrycA8A6uhYNQ7ykXpg6MsPrVRvb1PZSMojDM1XoPeVKXixfAcU",
  "key22": "Fbn6THtAHVy1ZjSuA7RNM7JCRTvKvqjfntySAoanmDVJMpTfQT8J2nWi7So2UmeFdpERkE2TrmpDnW6vZWaMVzc",
  "key23": "3so5MXiaVtrt5vMyRqcNkPAvh73B5y2qFoWRQWKyMbACMz8vFgkQY26c1BbBsoKHPqPXjRWgHFnwjR1y5dPEaDq9",
  "key24": "31fgukbMHoZHsJnsVBMmux7wP1SNsrMDD8oVVWjwZBJGkDeBBcTZe9zmngXvETDw2U1eGrL6EeGkRPrRyi5rzTey",
  "key25": "2fpJ8QYJ2uzkLZx8i8ohkvem58QCwFu9HnZih4t6gVwEE7Mg7VCSnLgvXNyyjMfPmLLe2ApSUTrkGicJKnRRE3e"
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
