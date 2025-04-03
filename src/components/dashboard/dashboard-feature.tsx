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
    "5scuhKSns6n8qxV5t1RcV2HYm37GbtZZBQcJQeQLVd5DNVWtct5at2UJaqY2uupAVHosRJ7hv2gmYaJMXq3vnxrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65phdDAAh2EHeK5MWZkwexwV9FBqBjfr1SQb9xyFb7nae4kpZv7MdtYdkS2amZswVj5du7a9TGJd565yUiPrkSfD",
  "key1": "4YY5NHJQa3iJXyrMVBdM4V1qgkv2Ssq49Bz8WzhhWbiR6AsqmbVSMoNLJ34uETqvFsmvQmooNMZxGvkYi9p4wbDa",
  "key2": "5ySfKGEMZ2dvz3KQC4bFcvbsk744bbct9253JRpshLVk2hz9XNj6ZFM3ncGVDaKYQFnFp75arRGejsWTEPS4Y83n",
  "key3": "2V45B6ewSF65EdMwjkvG3EQdrATQiMXXCNutfgHoBHY8VLHqvUmhFjDUpf8UVc9h2DTf7SzvBUx7wLhr6MgnHY1",
  "key4": "58ZfFQHGXCyiYDEH9VWMfEwf7e5HU1G8UZN113miNDFn7HeQy4PJpEmEi9L9VAyNfsKzGy9BT6SLX3zGxJvbzcsm",
  "key5": "2SaFrN5waQNRf4SxfBCdSghk8TwZAmjQ7qqtJ7xM9Zj9PsKR83evxJ1GQzVSdy2XG5paME9fWx3yttsoiwqVgukk",
  "key6": "2kDBSbHWPGCdPdbGpGbfxLGXNcv2uKHK7ewVYFgZBa25eYYXyyvZcTmYZtJfqp8uT5EKFrZYX5sV1E1557ro9QGs",
  "key7": "5dDkCiE3SPeY1KBRAcEr5qtAsG3NquEwZZAeFsa4GVmvt48AeiUKSsWhqXgMp9cBjNEVFWJ4xobQTAztq8ftcKTV",
  "key8": "pFqU9r12JJJG1Za7Ay8ZAr3T1ibScigMpuDNy3qBXKgZhKe5BzRfo6UHQxBJ7nvpv8u3DvsYMbEdpfkcFKBL3Wx",
  "key9": "3yAAfG3xH7yXMtBZy69a78YvBFeFiaa8qriLz86rZYpFfjzJoTr4EJTgCij7vWDP9vC7kQBtmm3YWenGarCajGgs",
  "key10": "3WfgrXS5qX7mAWhxoeprigjtEchhsLzDLLZtbPpmm3bupRJBz5Ha8zhih1sycSgG8fLCBeAqTRxatKuoG9Rxwn3o",
  "key11": "5Sr34yJK54EWk9qrpTXysSa7v8f6mcApapCvxfs6wqJqfxVRRqiqCpm6fzz63pFLS3esJYxsi1NWrqgy39ThKPki",
  "key12": "qLAotnBRZ7uJuet6VU1TZ7V8hVQAuDzbmxKv4ad4gQBHZ5HXo7GLDD7KQ7dWqoqPSotdmmfxyGMBAyk5WAffCo8",
  "key13": "5mTAdcWbiT8UG48Tu65bc7vaSUhQmfKsgdvkm5xSEe4bRjLf3n3ziSjtvB94qFVsPnQ5EA1rVeHNN7QWyULC3RtU",
  "key14": "24imSC6eoRWSftrBgtB4mfxvqy2usp3ATPbR17KHPdLC1w1UbpCXNDX1Mkx8X9wrVrQ8aazmLQNz4ibLG66aXihV",
  "key15": "22ZfcPuUrLaUyYhSvNmGFFwu1mo1ZSEvZpCJbGSVpyNMuouxF71VQ3UG5R3hMiR7oFnTiGxtaTBYYQFAcd8W5mRz",
  "key16": "4G51J9GXDnvUfaaUcsG8xfVigSXQnDFsUzpJXKbEJEsSr5EodRGxdZKZYqCtY8G6ErdvKBLHvf9zJbha5zYCHhoY",
  "key17": "3pvT9Yty639TASBfWpYASceADGgkFjJgt5868MTPuWmEs9jHyPGUybqv5hagqErdHmxC3EKCq5yWpe5sQM5oU5DA",
  "key18": "3GEv2FgXpMStsSG5q46bb3fer1xRxgyVthdS96oqWnZiQFb9SHSPz3cjd9kmtb7SG5wUxdXRKWe27H357DWe4A4u",
  "key19": "yfJnzLUNzSmV1g3ncuVvGvzApfN7KVUxxtHu3bTRpcLbSx49eeZU4z7Fe6YQJ2uty557Z6YRXGebTPJuDVwLWVk",
  "key20": "4DMvzFh1yqaSiSqCMWYV6xZYsSQxSAYoYcqS8RpnUZEKrtG61KVAFepa4V57xmWtLC5aUtkezvoPZAexpQ3gNqqS",
  "key21": "nye9FXHSPXywUhCXuKQan7rARJGqwkKeCQxcsA2CQ9Q1KxSpn8WDti9RffFcz1voQvxq9Q4Xe9heZfpFJ65UYuN",
  "key22": "3XDj5qGGe6YFksBkmeqiuB5mvv7Q7sm6AcgdKVe6rJTAfv95dRqsnwN4U1czatw9qofsEbVBru3UP3RvkvKnPB16",
  "key23": "5mWQAaZnBs4fny24woXjxZsXQzmJ3VQG7q7xFo8ha8dijwyXqftHCoXMBtJTRHKag33eut242HRL33jpx5fsCHBU",
  "key24": "2LGGUjUbdBZbBZ2kbvMbAWgfw8j6somBK6wHi5mHtF9Tox7kXvcHSQB7QAeuKzmVr7MxCKLs7Me92W5eLsJEraN6",
  "key25": "4wJjN3FpZ4SktVChGQz9y6sPe3gD4ApzUNTabXVtdFgPLdoCiEkumRc22QiHAMWK6KJwTchekFEzxrQcuL6y93EC",
  "key26": "ZqC3Y5AbpsczRfcarZJGuBBMWpTybZ8aomzR2YEVMgkjSBksDHF69gTTzXLvCPwnAJ2o17gYkUZvq8n4jtKrnWH",
  "key27": "TPxi5XGSTeS2GS4WG7tXUBW9HrTBWbPKaQRnCFGpx5AeB7nUWs5BThxS96okUsxYRF9f4uyNghUenKkURbQ2BRo",
  "key28": "4cXDBSvx2bth1PLYpHKpkqnkLNpmnVMqWPaAhkvSwu6358eqiSFwBJ2pGktcn1FUX9teec2ixgv5Zka57VhbhSP",
  "key29": "29KX3is8GQTTvmmnwjX2ZcDteTaJhwvdfsooCHFPyQ6PSJaCcoNKCJJzZFhRRrhKfN3CutnbxPnLSCj1BKXahVuc",
  "key30": "Yn3eYiSu67gBysPrt4FSrvrfhAfvdHUipJ6wcKLaFzSes6wbJrgH9REprWV64LFKwCDE15gkybk6KNxdBvFDMac",
  "key31": "AAH4ggSJiPiHGoRbDNXG2MApwh7f2mNDV2nitz3w9SmEjWKtrps6Wqh7gMcScVFscqMeYAAzrStKTJ6DLbpJUWp",
  "key32": "2GazHG89P3uM9bRaSdPixDrMKEDXibf7Vkfovy6qo7B3d2BYbnAc3kiJzQFJmFrr6SXijt5Ewq9pDE6vcP6JrCCA",
  "key33": "5H7Uiwdhpz5RCujp99QgqfeDum6EQYeJsnPxN3tHYxqveD7D1ACRtNnVPv9xpcLyzDj2BrWCo4pkoSzJx1BFzgUf",
  "key34": "4ySqNAMrxivDvpQUwbXPrioCc3pz6TDXVXkDsPPpRQvk2rMiYSdAcFHvii5p8zEJr5PUoj5S4w45srzUYGViEAtg",
  "key35": "48L9ddJtuFEDG2Cj6cufAiwyW1BjQpat4yypFYngUgrdzNpJuCrkpdpF17hCKtvSZc4jLjN6GbDTwqYEXx65kosr",
  "key36": "51BkGPprzTRw5GNroEciaN9mUjUP6kbzyUXPYhUeLVycaSVUheNPDQrrQfwEbmxgVyVL4CUxjojnbUKvJBVSUi8z",
  "key37": "5Fi3WQ6N6Um6qhjcrBV2kag52sDg9eKdUBrVJqosw5S5GUvVDqYSsJA21Zj479MCzTG9RFiKgKFo77BxY8o4o7mv",
  "key38": "C6dPALNJPKM26Q4hmV7fHEoGBkwCZpRgzbiJhHR7PnvAeBEJa8rc4F5hPABiMm9bJmzVh4ctyjCJCsigiL2zU8T",
  "key39": "4qWfABbdoDkw6MUSkeD98Ngm3xdnVaojqF6sAfeGMqHKW2xK9bFedde7hzUNceceeAKSRxqSjVaUzbb6EqzpFpHo",
  "key40": "5iJo9qqqKzJnCpRjHpv4p1qoRDdYmfyWVpQZPwPCR1HyWFZtBNuqKfAQxFboLHat4egZqEBeUxW43SqHpnnNTs4z",
  "key41": "4ovnxHjwVXhSRPgWmofGiTd7FvjSJLKVrvGhbnP2hwQYE6xmK7BhnHmhrvoJsck5613bMMhcMNSK8tfG6K4GAtHj"
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
