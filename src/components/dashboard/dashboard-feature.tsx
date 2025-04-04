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
    "4Pbzj6iRFyUNZqq1hUgAyjGqgLDqwFozosDDaa4KVtfgaEw8KckZsXuS5FDvvc3bYhN3myGT8soADPt5MNt8oy9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R49b2k88gLU1TCwhRtfWwK1uUBKUdaaN32W5Wf7deRd8EBgfPPSEKf795cNUiGVArwZJgQKCZJeVC91GvJ6enVq",
  "key1": "2KyMjtMXcUevifdXkZAwpraGCguTDkyL8wkSvP9L3Aw5XZqFfaii8VtcyymHwD62c8RQvguv62zjKgZf3J72a8MM",
  "key2": "5PGyKkrcF5NNU2BYckWMZDujiRyvfy1tZCaawP9rSPcAnixM2JriQ7ACUMoyb771P5iQ1vZUJD5P8LkSAtW5Jti9",
  "key3": "5RtR4C52Hrwj8Kk2T7nS5daPb9uuKtP2XToVHhiP3UcoE1a9XwhtQpCYrHwNcTR7kAnwn7qsWWAmrP9XHQxCrwKd",
  "key4": "63RRCzyyF4XN4FQNLH71booASKRnBwE4UnWYHe1gpmYcuagjPGAqmpuMQE8DAxMpFzu9gWHiyamf7g8uB53dEW1i",
  "key5": "3kkDNcEmHTtfCxhpqV7wAUdgE3pdq8nDoFXKC7wv4bScLiE2dP2VmWPqByRTNbHaWJjEa7NsXDJUtQXsRmByJNUL",
  "key6": "4wvCLTQTuvN94pLPbaiEA1YchMmA8LQ1xwXDgnYX63JE3QeQU5sbu8mNwwKBiGJK5C5dy2PpLNfMR3zPVxSWTKAc",
  "key7": "4esW397Vv4qU7ffMuPKZoxTQfdnWYMoP65rdF8Qydq7onw6UriZc4KQdwofCKJ7PvMmqKzDVcLnwA3VNQ84TtsUN",
  "key8": "4XxfLtKd57pjKaMTuphVFhqAXRHDM3qnvsMNujDc7YY1btTtjqCRNNTznHvPKmC7eytLEBSGTME8DtXgD689DCsF",
  "key9": "3oQXNekFPVzqSBxqXap1TLeTroNqpEzxdAKKMZUSLqiwRybBLdS3ig7fyXqB343zZtwz1f6oxQyoVCApssYN4vsW",
  "key10": "66YSCE2yY5TSQvB7EFwaEWRXAJXrcWugmgC5qp9xTrHeg8fdDQhoTQ2JWtvXifBEh3QGRPqZszVVcsCKrMksrJFE",
  "key11": "36Cch1csbzePC7CDDBTRFojcrCmRZi3SgaZ6f6rRyTpWNyKShVHVc42NQuBiaPQXmDL1CFqoreYpZpeeCCZ3BbEe",
  "key12": "538MqYJYeVT5VPuW9LZnaFMXkdcfxGVS4GHeKBQF5r7VkHt7gnLjP2cPrPanjdjzJnub3mgWU75A1LY4TbNiTNdV",
  "key13": "5F6k2gdX966zrzERfmvjTtpC6v8DQBWm33JAvxA2LjV6vSWHMVxjNbLu46QpYo58Q8F8y4PPVRc9hqU8DXwKwvNC",
  "key14": "pr9JWYjw1u9aTWc3rshobh3DkDK4rAaHYB5rT77Zv2BWAXKNKxXL71uHoHkjorfL2cEvTkQ8BZSasHcFwQadNDT",
  "key15": "5QN3ScbdTa1iJ1qA7ghPQwmrrBHuGyG1xo8eBdXEWWKEBQTPzATEeyRGBWaAKxYJcppM6Mxu1bZ4v3fMfLMjWPdm",
  "key16": "3RrdGq1TJoRitVjPMvN3mT2yFMnpxX3749PBL1rTA781v6SJM61YYsWoU3xvhUUv89soEbxG5HhryTLvBqqJoWph",
  "key17": "2BvAtLt4EiV3UDqCGtZtQVht1AnLiUkM4sxX3GsYeUeK3hrE6iiZXvuwpXtM6a4Qcy557rtntv6wQEMZ3yyb4Zmf",
  "key18": "1D7NCZJHpT1VASR7U7YqdCSDcRjRhvgWXZEgSmUfczCLjfDwyjB2mRrUVPi7NRrBGHekEk8RBFxaKz2GmeRRqYu",
  "key19": "4mrqYMQmmMBPxNDiPdk7fsWhNk3LcNbwQzWujxbfuSzbyoZNq99qPKhjNhdnjB1ERDj5WYgfojvxYpkyuEUa3iQ6",
  "key20": "5RqXpTrzx9QgBHbz8GjWnf1XiSFdKjCYuTbuB5bTfccP69bLhr3J84LxD78VkqggGNyQ9frN33kSJ8bf5vrXtgQP",
  "key21": "4m4KKNZjKDUwuxfxT3LehE7BTUEHK43JtifhdkRJgKcHftec2EaDFuB3fC2bvHNArky9T6hocujN2jejR7avsueu",
  "key22": "4y2oDttghy69VPpLASaFdpRGeyuF8Qnv33BssUS8MQFNNLY6PtGdee2Q287sU4jwRHaCdN5hxzCkAAbY3d4HwkCX",
  "key23": "2Wa7x39qdzv85NLxWsYt4ieMPSLhTd13GuaZzdT7iJY5J2gPf9HE2kqMjD8efGS8RTFWNPAtbVnWFYQ1CgZQrBSN",
  "key24": "3LDLwPmTjEh4QxyupnSatarVwiwySa8CWFQpqNgMZj6XTD7nYq968FJTcLJw2HMWv5jKYnmaaBeMymCcHnXxoLWN",
  "key25": "3hyjzk9USwQo7njmvmF1ED4QmHW1hSJbgriaAHNWjG9A54BqXCnzBor59hRUB9iQtd6YJUMK6dEJ4NFHG7cxwRdx",
  "key26": "4pu4j5PZ6D8FqUxDLHUS7FXNVvUHKYyfuRMoMc8C8MHrgEqP8coqHtSeHxEBVV6PsLAEuBTbNYqCjTXinDZKAjsF",
  "key27": "2s2FhFgf5eccwXge2z8gtfeTdscWUVpJSjtuHKUMZ3R6dDKiSajJUx8XfNheZUK4zh6mdcb15Y3VDvuidsnoM3CP",
  "key28": "3dDyxqAN2bpaNr6hguZrm53vLSVsmDLoLeR8A2LAMkz3WWmVUyLqhFe5YeWgZLbPj5XXKjzZ5quAcVgBUkfvVhv8",
  "key29": "3fHW5qEPJXcDZhg6Rp6DuaZkv5HcxVcqUXi1jS21E1jiHXqa1oRqQ6cEB9opvBNe2UUVXXf4igio2e9imV2y2WQ8",
  "key30": "48rc6tyhZfhQcCU4ihceGJdfZkjK8gtczfKuUdkpGYKbHoqZccuCENw3EZxQs9kzHg5wHRPr7fUPQcMSS4d2aCKX",
  "key31": "29x7kz9stHNkKqBovfZVg1YELwPqM7q2Pz6YPGSE3gvdnqwSYbev9gBH6o1SgMxbnsP1dzBSUSeXidnVa4E3qzvK",
  "key32": "21RSsKHp4jhw2KRK7asueMaPzKzwzuW4H67imTiu2dBcSZ6EuQoA71aRPCygrFaNqMMLNRsLLVyd7rzt1Jhe5D87",
  "key33": "8iWPwpCu4HNp4XtwcGcmCVAzPjRMheTJNKWFRHUQymLYnSgXozFqR8n6bWgW1Kd1wE2cMuW3kbiYJnYxhsya5jf",
  "key34": "4daResgAdn3snGciKDB7YKxDracKdGrTQL6sR8YvS2ZPCxarYbiPgjo2YpviyTdc8fUgHW7jqd8Z1D7ubXmtJ8ic",
  "key35": "3igJy6TuvQA7vMo6wdEAXg4zRCZ4CzMoAegBmqhLwr5Ym3aS5eEh8UA39J4YChnc14J6YuCfeCqJrgGfC7NCx3G4"
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
