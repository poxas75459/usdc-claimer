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
    "4KbsoxbmdhzjRAYQsEvdQ1TJowy9HYKKRTRfsU9bXxSXMG5kDaT9YmDrHc2oqT8gNv8Hyovcism5mVgv4oNAYoAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KD6w2j2GryGVCHmNzfnVZJfgmJNpsdf8G9P9b2j35kCipGiyfXzRDHuUdzfoJNs4KeHJJYRcvuL6fA3KUrn11DL",
  "key1": "2FRrPZhiUnWRNAaBChzwNKYKz7j3wQRPZZwTiEZZj9kkjzNYzdaMrQXj7zKV65j1c7LhuMed6P1McfRdJybuckHw",
  "key2": "24SSAtRYS7PYUeBjsPc9CorJybwf3fJL576mLti2Tnr1cNTU2o3a9TxFD6NRntNyUt67KLspzRde5GBBqMvN5GSm",
  "key3": "3tFHtCQWEhxe2VoixsACtdFSvKfez2W4naWp2LQmSZmY8Rj7TF2CMREMnVt6Ls2o1JDjCCXTCcQeceL9LFVk5nCb",
  "key4": "5YmHyeHPyYmxs6QGA6Qb18quo6sDKjwBo4soXAMHzQMgxZPwhM7TqYcZs2N99B8ca5JwoGusM1tox859ZtBL2Ujh",
  "key5": "4jN9A6fyMTSCuCFggiF4hLDm87Lg54mFGpbHAwxujeS7WJCXqpFNrnMxm4DkzqVbVCLp4AS56QTBA2pz5fK4PWoA",
  "key6": "3kqjeB7dUtvURUDoQ92yEx7WQPkN7GvyQeSiNcdrBKxbKwEaw8v7vVtQv4EU392HvxRCjFD42A4rxm7eJjTUxttK",
  "key7": "3hPbNE5RPNUWgteVvp7ysbXxPwi1wM3799GvAbXEvLi9S4SkMqgWjPp7ASq8VCGJJFPTZEmStSW5ezXPgS95ESaK",
  "key8": "3TAvwwbZJk3s2NY8a6TuSeHMK2kkfbJV4J3yBD7nziVu5DaiqWZtvnUDwFrMFBti66w7AJAaXDP4JDpCSg4G1q4P",
  "key9": "3QZpGu6EUtfp2vAA9WoAhEjzBBHuiK4k4XL4sPC7Fu7AvTwXcnjdFijfpbDPTGXGyv7r385hb5qheVbPV577zQQw",
  "key10": "2M14nYBvXBFR1S1xNcD9NxK6zpyscuSjwtE3VGPJwpfJyz8heAJ3UXbb7CwH6U2VurvHkoJ1WQxbqbrQYFYFfmJd",
  "key11": "3B4YJdn29esAEDdFkM1bXCGvcTidg9BFGx4Zy8rHnBpjBWpy1vCFXX1J47C4RJmS7z2D8YPaxntKpx6sXh7XxZPk",
  "key12": "4DbmHTK8tAimsAzx1ziiokeJAjkvNf7CAyJD8HpEvX3uUSPpUQKrfQcazujjaPgMiLb2qMCZUSpVdxjrrnU4SYJ6",
  "key13": "427tVbsM7KoPCrLR9iW3oSyQYY82x5he1bEJUBJbjexThf9PmjsZYdF7v1WUmZ4KVtMsKyEq9TfsmN5BKqNusfV6",
  "key14": "3SztewkvorrLsfBKktbDsHyhYtKB8cxAEWWyeZcu495pfaGuQj1aksdihQCURs9WAdLHS7HUNtoGg7B2PwadTcUE",
  "key15": "2FZ5DGu4pPUcqVfs1kPs2pcqHXbpr6rQqcVFYLXXyZ99gMPvCdvJmN5Mt9MU7sxxHBsv5QfAHqz3yiSqusZzRyXM",
  "key16": "4fRbtBdq3ZHwZHwFXKsfALmqvyuYky6RPaQM1b8q3LiPF19irdpRVzfeAm332hEdrUJHADKHTkJxJMYHiGyZQBVj",
  "key17": "5Dz7r47eiYmq4vtKra35m1FnpKsYDZQDfPmN5mAeRkJaTydKeLvT8i7cdKWmGAxYtQ2J3ADrxot16g6rcnQE52au",
  "key18": "9dkgYaQYkoNvTrbwcT1AMbFsVgSsJuUutkmxR18zNGkWZUhASjGTE9T2XPtZbpLniqgJ7LgzRkdnYRriYyz68P2",
  "key19": "5KNBQYh77RCAye3QhfuYd7TUM9XHrmXPsKRs1Pim2KhxUh4oVn1K8Mz4M294aYg2diExZFLjxk865Lpu6Y57oFTF",
  "key20": "3Lsimk6f2f1ZnGkjN3bMaVZ1qZ2HznkKjYBXR8qynnnCWwG4YgFJNX4H8kaW7p8bGh4yAhQGm1FVcfz9Hn8bnta9",
  "key21": "3F93bRrjXAgXVGCgJxmtvjJ7qfamncpftNNSEZDiDidcWRhdiEsGWi1od9maYg6XPVTSFvC4EcErUFLVWNJe8zNh",
  "key22": "4sW6dhVXnAFfaoVpeBbvGHyG4xoVM1QUqHpB3LhQvfErdcmWKreJfuKWAGWU8t9eattNdrsdZh21YSsrevLXZqS7",
  "key23": "3bH2TfdDb9uYLoVA5vVHvFSLhkqkphimyBkYY7SRmbzaqeW2Mry36hGUW54CXppi2vP4RTotb2QC6umKAjBVNTn",
  "key24": "5sowHBCD2pAhB3sDVg4U15QU317Kbh3Y7uhDSN8zacCG8ET2rAE3sPNFeazW2hqpFPyrmfETpxMrUbsPPmPon5am"
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
