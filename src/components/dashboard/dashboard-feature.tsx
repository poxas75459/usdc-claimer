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
    "4sLjvYvsHuzdUG68rFuShGu4hjzFN8G67CkMNvxPdWbHMR8pjxVpc9AfMVa5r39BkbMshfY6jAGVuj8PJaJpcsXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQEvzm5m6zBnRU38Jbe19Kk91NFQWfVQnyL1ENEoxVWQSEfxRQHAM4PAkdrbNquuDeBpiefda4eZZVQoGtYDBs7",
  "key1": "2sBbsEbV7tYacVTFxjYpo1JZ3CKB9vUHvLwExVyQghmszVM9YDFc3Kqsdz6wfHoMPMsi4UyxRXZtizCTbmje246V",
  "key2": "5eVc5UVEYLoukWWhYaU8kK6LY29Xboa48Ciy3YEw2MTWeFb9AjfTbgnfp63MD9Fa6VhMS5x6tzySDWyhjSfAWUSV",
  "key3": "12sRH9xnn5PcK2GV42JgVXf51EPDtWtJZkgUm93cbfEMS2TswXF4zmXnoqstAmbPwTx2C2hJsA91q28DKSaoUuT",
  "key4": "2eDTwD4CnuH5mRzDVo7cCGUQjn4YVi9mMWYK4qz3HFSdn5FH5jNWCpcNh4WTKmJr9YjN4eozkbr8ikQxSoFws6o8",
  "key5": "V4rthfskTqqXoW4ay3gZ3wmsWUuRUqTck4w9NLtuqb6uwKfQEQjp8EWjFpBsCihU9yXeNYzD9oHqB9ZGqa9HGTg",
  "key6": "4ivDwSau3WA6PWeaKz976Y1RDmtH7QqP3Gv1cncSjjtfCj7hxmYMaGPEm3FpsVSSkv8GMMoPctDPWjHuiGHXZE5h",
  "key7": "5CWCrroZY8Wt78YnBqAfN7HCrfryjUuZpfHUm8no5RgEP5XYwreBX9pCJxYj2DPyj5LTCU36mkUqAtgc1wRNSAiM",
  "key8": "4dKQ3hqL9WWasYFXsc4APF2NECoyArZmiJQvnYC1ktfaWYL6KXZ18LNJxFZpCtaMMaBWqehNhE6vXbtRH4NGWr2J",
  "key9": "fE7Ci6Z7wtfaY78okGnSSJk5y6ZSW74Mgyv8T1FU2kApEE36ceNn5ZUG93TBs8Z9xUUDkVFWWWiPzCS9yEhFqC9",
  "key10": "D6QjnvJKmyTqvksmXZ7Pvk8tqEq1UxQTyf2SFshWJLcNjTfNzHKed1Qau8uW3QdawAt3UpD5je8YHSrL6VoYTvp",
  "key11": "5XwUHiEimxghd7SBk9QNnHwDKWysrxXjtJ86sVYRuwZpXks8EwxaguvoDhECUTwFaVeeK2JDzEGVp3oLdLVpuDmq",
  "key12": "25BVCJQsvGx5gaCYeMb8cGdyyWvyPFfQUWFs5yi1yjXL7zkEYFuaQRqaR3WceFVJNt5D7LA66M3e1fSaXNWPjJYN",
  "key13": "3LgQDirDX1YuJgdM2MKSxQGYuUz5PJhfWixPY14umh8PrRD3DiKrvMHwJoF1rg4WSHwtNMrXC3WJjbfj5B1cjAkM",
  "key14": "55k3XYBchz7kU8eg4KQ8QPNNKrZf4BQPWjqWrRFuMYNpD1tz1yPtgb9qKZWcUTqSNbkgg3Rzwqj6YRwHSsEg4b9E",
  "key15": "k17iLYLbnFf3svUtZAZWZpa5dtb1PXJcSXWmwp2aroCb7BGgv5swMYeAdB4kLikmbnKk1x6HBiMA2hERTvJXiZb",
  "key16": "2k23UffHuC31vrYT4PtR9Vx99Lkhk1J7WUSBioswYSz8abDnjQQiD6T7QFvH3yxwzgSD1UimzXHMjW3gLxAqZ6VG",
  "key17": "5cH1KNMoYbfgf73DjudpXPNq3sZRSHu1ZUCJJoTqbSVfEn5mvbQDDzNKb5KcvSXBdb3DTqDfZvokMSjogkEkdb8E",
  "key18": "5Td7Am3bx1rW9fTU4HZfAT9j4q5dWhP7pwqt9y3d5ieEHzesfWAa8VieoaoBRt7CfPD2nLgheW7yn6WpC8f95n4D",
  "key19": "2bzA98x1Si19QB28APjLjk8WjPc2VGUHMLvgn3n8ZhaJVbCvAos451rmg3rPGbPhsKCMSXBA4qN8oAbqx65dArwd",
  "key20": "2sVs13GdQ4aTQAVtojUhb72kDbYkuAJfPugn3h263uTjefjUgJirDSkideK8F2XjtmWTqsNbCtQahewcVNvXMW5Y",
  "key21": "4yEN5eVqg9yHf7Tg67o4Nx1waBJ2zFag53c1qLTRxJz2Cq6NqsPRdzK4eG9akjUzwzDg52V8KaaNCqNTyqQvS4o6",
  "key22": "53o3uGtBsSuucAmKsttMaRtF2MmJGVhL1jVqYHYwXBDPzNCV3KtYi94t9YW6vzEw4AL1WD63WBytYsBqhqRddnhx",
  "key23": "2U7Jk8eyyBx7CuyqoaW6xrzrxWZ3TVy8rUucrUcxfE5QaYYb7wSoaHrg2XgDghdmBfDMnVYDoUfNim4jLK6WXcQh",
  "key24": "4sYfyn2NFNRnbQB9KZPpjUqednjxt5jREvE6FjjXioh3FxLfxjEZ4bRNcvWoiJNwKS7WtJhjE7ycfos6Xvv9enmc",
  "key25": "2UywpcqvkBVg2W6AwRHTkA53xZT9fF1kFd9KqHvptQdBmjQLZHyYSwJth6vQdopUV8yCS2dph3WuaUAaEicA2LWG",
  "key26": "4E4jDzt6CtRfy2oJ6qxmoAHrvov7m374bXyXFBBhYEweYPrUZPLFyQrBZ2hnjKy6UYXnDQCRgG9SWjBXNZGdimgS",
  "key27": "3Q3iSBpipwtxo9mGt4ba4kzqpXXhwkt1iLGuvgGvvKyzY1W5GVBxGRxNk8S4YmHyavNmKN7ymEExz4XbGvjyTvEG",
  "key28": "2yLG5Z4neXgb7eMGHDkrhxPqBL1PTHKM5ENf5bwvYW4BV1XFRtmf3PWtfRWui9i9bwhchfrphCeSnftJtPE163QU",
  "key29": "4rua6RS7PeU6KKLtEtfM9FcMmjhG4R183SEsZB9DKuxxhyDFcF6ff2NqjJ2YCCZTuZZia2N6ux1JX6j9hKBfJMkC"
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
