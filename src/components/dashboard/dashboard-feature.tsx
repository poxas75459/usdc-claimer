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
    "47dy9QQ7xP8oAsELa6u5mgmKhkhb9rbhM2ABJjKP1vjQZYv9q8evjBtQrAw8sqThH51bRUjXGggycjEy4wztQsGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBSbYSBon4uigZboRDD6bFaytcDCkzFdmsHaczoQzQAFdz7JDpFBZdLenVvwDHuMi8Z8he8Yrx3Jsm8UEGBcfBp",
  "key1": "37XuhdxCHBqSao9vD9T7dX8LQnwF1JxHNEoDbMrP6RVwkaZsuVxjdDCMgLAy1fVJJfTG464PbdbyhPwAu8KcgCW",
  "key2": "sRDNtSCPtBehb1Z4F3sTLvcse61B3ZfJfUU4Yr8pVFJL83Lu8oML4fb5j1GsxbFXiSbuJhcKRojwfBNv8CJwwYR",
  "key3": "3yRyXxNBZoq4XGGyQK4iXxzdM3w9EhqesTedfco4iD3EgGMkwM4XRX37tzpHY2FeCT8Mn8xBBk6NXEbDW7VmHmDT",
  "key4": "2V8KfVQ23m3bdw6bsd1B1LLFekWP8EpQu54yDga9FZzeWgZ3mpoVnXVqwgzM43vKKuYbVfmQHawGPa14Kh7DL4cL",
  "key5": "5dzFnjqxWdJUy5gvM5UW3MhFJ6AzD5s8TA3CRDtzhQjGFq2GGYgaU1GoXdx7pJLNZhAzAFJaLNER2Gy4EyVSK3Et",
  "key6": "3PdiXBufJrKD2az17SniEJozRi79sNNEZHvbQZXs8ZAiRnYSHNDCEFYJVj5uPiQXrKNMa86JjaB2AwnoLME6RhWY",
  "key7": "4RBZHpcWCi9Bp9xby65CPBDbXDDqX1t5jwYH2qxZTfJDPvQTq4s29evxv77XFiqkHo7Xseu76Xkj4G4L3BWmpqsW",
  "key8": "653GTPjxyTKgWaFyuxtnsYK7YvrF8EfpX8Gy1Jb3sGArsUpFrnYFraLRDd7fVj7JFUN6Hv8x9ZvattUnNsLumE12",
  "key9": "5swWvodBSuwq2hh2JEC6jkEqbNh5iDNFXu3qoLrETv4dD3MmbZKF2Cp5NeaHS3F7CV61jTkZJkmav4yRM6nEq3vx",
  "key10": "yqP9kBmPvUP69xb5XJS1RR9oVERoETq2y6SJo8phmXzi7C68szGUqBSywQdANBnL8DDH18QDR3ytwqTKVJXXMFf",
  "key11": "2ZmnqhttVqng8DK99SX4ZMk8ZuU75CjzQAPSBv7v59qSbCdxcqLUGvMGwxfpqVYJLVr9GWFEYc7Hj8or1KNpvQ8P",
  "key12": "63PALSU6vYufygZHQ7vwuipxjhcgtNbfxLNcmMPbE6QKp1GvMhn3meva6fKqcTLErcAa7SxSSj3MHdwuffD61ymy",
  "key13": "4mCqGGWV43YChEstCG7Vsq7avsKwXyfQqZXV852goBHVNEJK8tXkr7VPnkjoUhSnWPa2eGLoJ7QseRFN7Hb4Cx9Q",
  "key14": "41DTNGQfMUiK5PRj3kvWdCDEAivFAeaahxGzLxUEAidwzAVnUR1gmwpVRP85FtADKBhKDJAuXSoVJSqsHt6rzXGX",
  "key15": "5vG47W1Ho4gfuEPffgQ9P6sKzoTbopbo8nL4TM8vNqdGs4sJWbK6hjN162j19gtXRinXP9nMfWv5sEgcd85v9yK9",
  "key16": "228BFaGtJfKF4KFWXW3k5Z3qoSjhE63wuzpfTZkUruKsmU4HSuytkEQvMYxzGuPSwh9ypcsd5Bo19Mvba9FFVZA7",
  "key17": "H6wVeAmtN21C2aaN99UVZJ4M48pJNJsoEZpZnwKP2yABVs88A9WZxPZGSCaTGgNAyHmSBdurMhFB14H4EPgTvDM",
  "key18": "3vr2SZp7ycRVRZHRAL15a6sYhMJBACzjc1uVyjaGcQFLeYfGWvaRdSsdFkC8mkjyCgGcPvqaua7T9G8LwnSh3gYN",
  "key19": "2yrVUNxYbDZkDST9BpNRQv52QcsgsKGNtdd4gX6jhdSWf6pvy37XSJXttnnS2pKr1RRQtQYRdSkEMPv2wV9duVvD",
  "key20": "5v5zoLST8UHnhEmYfMJ9d94Ra3jNmF3CDZk35itVuqikUfR8RLvNhjJ5v4w8dXjTEtgBt6V4s5BggFQJLcbbZ8K3",
  "key21": "4uLsUVEDaJfZ9WXip5BTYnm6PMUFTxgiPmYQGKQGBVBxN88forp6fXW71HCoi5ZcAT348jBWrY9iBcQvQMVhzggS",
  "key22": "3nTrfLJfptu7wj78H4B1h4qnfygZfYvXi8ZNyBkf7Dna334aow4vjrE1fw3g3RNt51cky29ULS4Ktv6EQgVjTpoX",
  "key23": "Lizmtec5pVF3VAtJuwsNTiqxciLHjoSGSMc3BQGgEMf372UnJFSJzweSqbxSn2BiUBAfsmYVQQ5U4rx8t6En9vH",
  "key24": "4YSF2TrHTRLLn8X3g8rpVCLJZAETT6rjMcRMQsn5qYZYw8VAoMSA1B2P3ChLkQjf4ayiKRNKn4BPA4BaLB75RgSv",
  "key25": "5NKzFtnGQmdyn36u9XmeAWvv6MKZw7wS7HYTUGTtWEQj4fuQkS4DdLR9522gi5zxGLRTZWGgCpsL5wvapBzKXTrB",
  "key26": "2GLRgJcwZ3RkgrqSNHZxK6qbVi2oeUAN2ZnT7w6a3BMdVStetpFQiAUVJ9D6b3a53bbvPX3jQNr3Yum988zdsu7t",
  "key27": "3omAw7uAj8Qggx2KSaE9TxQjT1v9n5XFejNZaQZoZbQJT5hGacHHG3Ydc2dCBTdriGTSkJpnKwjdGEYjouD26Ds8",
  "key28": "4UWNTYMtAgW1jQxvh8RGEEV1vnnEPJwizTuaaaMXEH4qv18bsPiSjaifzivZCDpLLZ2NNCxkV6BQQs6hJ6p2r6kP",
  "key29": "5Zd82QsVXA9CkwEgpMHN9oRguQh2wuDkjfEKbf9uFbV8U38YKwBLvBerYpWzUgfaHakfq72Wkws548xEwAqjSkRY",
  "key30": "4guRrW49udafihxnLRdh1csbxLzrtPaeVGgVDLj3c4sd6E2e2TYAcvquAtzqxLNTrjaaoms5XbguvCok9659B1Ke",
  "key31": "5s5FXRgBLDnA41dnmQNMJdEcL8R9v1XjHBuLhEqVmadBbUwBouHWfiopSc9ia3jLRgqbkWBpJrEYwh7q3RYk6bws",
  "key32": "3nLHV5yErUPctGWoBCi3Fvmq3YVGW6jz7b5DFB4wtuPSDWhy8gWDMJZZGwbu3xm7PMPCyXCRTHHFDWYfuyUNK33d",
  "key33": "2e3VZ6dqYeHfUrtfhFnKwUYtRrSwS3kFoqNaWx4YXSUQKv53kbiRGLhpyDVKt5BMP92nog7YcZGR5ZxjZpzGkj5h",
  "key34": "4zbqfkufhsXK5bN58uSnvRKkeotqdpCyABnBXTLReTm5qoDP2ELs8SiJvKLUu2cFVfQ4t2aqFvndy3Eqq5rwBgZ9",
  "key35": "4512v5sUebZANVj3kv26YcmKSD5hitRfA6k8Ly2U7k2VGfb3eVhjNXxSGWkJQfzPCcNzBfXHSKg7z8mRKWmXySDi",
  "key36": "45A9tsz1PuxiRjcpYmnRK2SkhechEuKYPtWVZJKjQPvayN4weQvhcWj4xnJVk6F5ge8UqV9FpiKSkFCYrrvAHqbN",
  "key37": "4urp8mib35L7MGCZsSNwE2zKzApU6eZvjMS799CaeavTtyj3ZxpY6g5DPx21uPVwDCijXEFgtuE3ffoFWcWgwiFb"
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
