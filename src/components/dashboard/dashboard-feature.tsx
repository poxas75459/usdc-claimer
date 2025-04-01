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
    "3rkZYzYY98GCX5kYp9NWvVDvfHbrbb5w3AyiAgxw4CGq4siej51YqhEqgxxdjWysnWYcuUQuNHPsmXzGWw1k7v3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xx1sPyPGnpZxKUUQofoqBmnUWZ79GcbpnT6DjKnzMcF5PLemnN3E6biCkEZXi87xEYAYXmmgHip4mNkgcrcYg3v",
  "key1": "2ACJskjF5k4zisYxPVxoECiDQcAxGAZ9X7Ceijos7V2RbivP8P3RMxUZob2xifbqMEziLnCLSn8eNh6jbqddg8Xp",
  "key2": "4mDWdyP6AgfRmdSFzTKc53VMypxdbEYJ9qTnNtsicwm4FXxFaQQXSbTmNuJ6z6cmqxfM8fS1piviM3MiF8Q2Yh4c",
  "key3": "2zLG6ocg9GADs2hgrcXeDrrWYuDTwNudVnLgRPSS3D25ZvPSnvwr1XEvjsgUjrMMvMGgPEpvqMBW727Fpk9LYVNT",
  "key4": "2GG2cVLnZi3wkv3nKmhEVZT9X4R6UQuEwdQkm7cx69sUcRdTLc69pt9jMiAvVRKqwWk4yps9e1ekqGABUvEpuK1u",
  "key5": "59kE8WmQNQt2mhYvvyrZUBsDAnP54rSsN9mFyd5KEmRSvasn9NHhVvw9jyee9AN14NyBSQFQ2QzqiXLFYYdWDFSx",
  "key6": "3ayZyzdzVFGmW8NtuMKSmSaEiVXCkq895VEqsVytAW5RQsQkbnojF2QVbWL9Dk61CAaJE9wxCbfc2VzRXpcDMnaD",
  "key7": "2u5JWv7TrMTcPeiTJZqkb2KHWHk4ZMu75G869nJvSooNimw42krXpKUFa2RJmXiUHsmcqvjsbJBbBHe1Q5S6sAc6",
  "key8": "3sjg38XbwSLo69EBErBCeHoYwhpNNjYzuFm1saejPHtj1ndMrUtotKh9bgZVvtT3ThWmZWQ2byo5BgxvEp3nUF3M",
  "key9": "4WqabqrRxXvHpnxCG5TSdTskfW8GdNXRDm2ZNxcmfunevyHGFmSvpDBRsy9wa28rhFoY55TxvXUK6PhNTJMznV4c",
  "key10": "3hCtnPbyy66hmugxvgVr8PFawb3bdigWeZwTiyAVuv9Zw5iJCPY4c9N6Nj3XenXzoYTLuxa96Kqxf8WtuxmU8BxE",
  "key11": "5WueRiNoUPAHKcoj8DwQxNkvkaYJRRW6NYzZZVZSA1119gRdJ5dCnru7BEffLZQ54C5hbDPGrTeHHg6tL9wdHFPH",
  "key12": "2jBcJhVsfTYQYR2qYCtoFo4LDovSyQrCNNe3zgrtb8Syr9oBqTXu2ZfqD6rZJmGz1phZ8XLrR6L7CgFstMrZNXX2",
  "key13": "5QRSBhMFRmvwZ3vpUtaW7JpoffU4CoBxsTTFMpFmbXi13dwAx1e6tgth7C9jfZ6c7RjMpDhq1gc5czxCVJYU83tb",
  "key14": "4KYM6qtM1zWnHw7niPu5vfVy6p9htRNuyc8msM5yaScAN6gR1TUxEE1Er3HQp5K2WFEaKZFoTSFL1FpewkZ4Mqhc",
  "key15": "jk9kSiWtUM6hJVdbFgN7iTEwRsEnovAzdPhznHHDdgi7j1CqdWuYMeQUG7zR1iND6RcCVRvovQjdyaT6jufeReU",
  "key16": "47ArjUq4q95BwrCAFtrVh4qYvHbjZsgBfGwSm1uwFD5vSDbZbDB1pJGha3ddhrNJ1LQAnUtCEwnxjFA1wTntdaCv",
  "key17": "235nD2Wagp3jaqXf3DqevGaedCQzq3a22SXdMuikoBwevqVM5b8V4i8rjHkQtQhoAF41ZcAxz44rrKyow17FGzL9",
  "key18": "3QJiekdgPFsbbwVsqjGozPNzL6sjfA7ykF13bwzgSbmLJRXEquP1kZ6YmKHiHSvXozMXjmVRjTV47tu29dnpyzBX",
  "key19": "3nT9vFHYwxrkJSohg4d2yo1ceHvW3GpvzGzouzKrEFgtyTBWtHc6AkbuSXXSocH4GSEe33GL4PmqpKkhhyE9Z839",
  "key20": "9SQxpkBR6iDp3swStYf8wajK2JaYZK8BTNufDLMQPDtrtijsXQHAMTxNP2Br5RGpqEF2YUtNdLnny9RvrYHCiDB",
  "key21": "3PJFCAfW1btzKzKbJRK51DX1P2v8ZKSfTjryAZTARUQLHgPJR9d11wywu2o5yEKCQ45wrrTev8ZhcLvvQJaS5p8W",
  "key22": "57RTW2chXeyvG51kdYxdwVdDssAeWJCr9dzLnPbijL2mpn47YmTGHQUK3i71LyZXPbicdQK3WjERmuKbJBc2BG1E",
  "key23": "2xNXj7H19ZzEPgNdZJdLnfHPNixjTmsfux7uyFjhMX58BjH9a9d29FM63DZUEZhj6PiGxcujDmZU9Rt6DDiB4QA",
  "key24": "JdTnJ5JSTVdSY1a5WZ84YJ3rR5B4fP9QGGsJmPEhDn9kGp3TyUUNZuBdxkTLLXgaqwkKPXh9P3yNBZBjMQfs7xm",
  "key25": "513Nhbz7VJsA15w2wzLkF1VBR1jqCVABzBn9cd4qCbJq2TFiw6Pq3E9gbsz5eAYRx6gPySnWzDSdA1LqcyHMj4ck",
  "key26": "4Etx47E4sbnNXHjdNWcjCLwdnwYAtwX6zVPLXE6RvEAHRmUGRuYhnRDAkPoKD7tYR1R1wJLtPL8f3ZWMYPjNsC7t",
  "key27": "5nKmJ5DsTjRna84Mgdj4dy2i3osTF1QdGGgB62H5hcMK6xNenT8T9ejsNwooezDkSFnW6qJ8Aj23WMZFszgJVCxs",
  "key28": "65Trnu73yUoMQPv9kpXJhGFhRmPVN8DpzWP6H4ZpTo2JyoBctfYsS95Uebre4N8cc7bTmzYGAuim1tqHETYbQecE",
  "key29": "2VY6nXRzNMefoykeiqb2GKHYSMdSKwCHqwFs29rCToqeyjjGXLs3a5pppfRjELKFRsR6khMyHBJVj4cc6wEpqXKw",
  "key30": "3UaCtYuYNy5eg7VxBKGW9HHxEr7C53GVGYHwfT2pjbpK2Mcy3yPa2ZD9EXQh8c1XHFLQD7DcouuJ676tKeG7J7X4",
  "key31": "3wC1eTouxsWoR8AEgGc77qNgrA2CYnCq7oN2AwDyXDx6WLWP9qWcpRdGjoivZnRnePoD6eFRYT6wzi88Ed23C8s3"
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
