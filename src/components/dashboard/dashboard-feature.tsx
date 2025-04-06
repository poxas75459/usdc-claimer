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
    "m9XQHhu9p5WDvQk1zehFfGYJrF8LycdFWyndBV4rbaB7m6LoYgF5pdpZtWqwCQ8c3QKKNtTumFcesjJtaxmwbaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYPGdrj8qJdYAnGjR6fixL8VTTeScfMmMHktadknYRFYCnNpB3QW4tJjNx9iTDfhA69RzUYW3uA4hFteAzS1VEW",
  "key1": "3L8TB6fspz7vwEQ7C3w1Sv54Me8aXryeM2rF5uGpWJgjoN7UgEHAFVSPbwa3XQ8fcBrp6HMPdQzKuey2PV7bKmGi",
  "key2": "62daTAvHwqz5ZCvRY4kRtcKZ81SdjtZRDgzDMZrs6B3yi5wTUETyMJvj4xacn7ej7hBMy7xRMtJjmqPC7rhDKi78",
  "key3": "57yUsyPbv3Lof1VGXJ4eS75DqkKRQ212kXZfAPWhZEfjtyoiDpY9Htb5Z87NNTannkS2LnJj8E5twa5oZMxQR8eh",
  "key4": "5T4FWKqVYJb7bbCVBSX3o8QAVrzUAc52mRfrbwKLgNkS6YqYi58kjMYCVyHSJjBp6UmNb9D49zW7PouzJxifEJNE",
  "key5": "4mFMwecbjtYkbVibFnVVkRweDZg2rApNF6EyThibAfsCsN7MtTHrxy38XdZdnJ4pPPW6VPAbrzHT7w2jEHRJcyEm",
  "key6": "26ij2N3J2Lkr5VBW4yYwLUgGLWmoGfXNEhSHjXdr88cvCxkSoqpLUaC9DcYuXp6GKy5RgEbqCYECaixDo75f81Nh",
  "key7": "51LzMdSgxpmAWfrYvQjoLdFGhXY1NeyoexLkitXRNVfuKvMquEHh2g8gDEXg1WjudkHpf1TAKf3oCnoEd6dEtUhE",
  "key8": "5xMpjYc81ccSnLwh7ERV42Wjpzz4xKPK8w9MxkyRnJQjmvQvHu9cBmdgeDc5axaC7rGMbwdSz5XwT5xeDp6HJTKZ",
  "key9": "35buZTtdkisobd95p51PGVvHAXVSSAh1aNf12qoNNe1gvQRmBKdWDuvPWq2HReVhc2gLGqRAGLufBzLxpYHkgXnm",
  "key10": "2ALryiaDL5fMWjyU29agK5Sjx9y413JcRzRfBAfWvC6UFbsYUNoHGWnUuw41oY9RFHU2yiMnS6GTMogVVU7MnJXm",
  "key11": "4d6nZkr7wY4Xt3cpTb8oRM7LnzvEd9sGpiDHuL1ssKfqY4FqKo9UkzouYMhcLYTTHvyGdZtWA4L41jYQpStgLc6c",
  "key12": "XosJqTMTMMc3r2mtfHavDVCrnQwD252PNrFeoZc4XPwhpNboKMypszPBi8J7jntxoog6VaMPgYU4VPYUtaNJUKe",
  "key13": "eXhCtd3JrskqLvjpCujJkkUAG9o6Hqg1wrNwL7UaPbAkxePxk3eGvTgm5QRKBQLGbLz8NYedfsKJ3Yr43p9fnQL",
  "key14": "5ZMJq211b4Pca3dpsHfDBiKWMUzrvfny8nv2frr7fQsc4vSnNTgCTEEANgt3AfRQNoX3SravHD5zsFuybMQtTDAk",
  "key15": "5jnNNqReRbXhyX7zsUDLnL3NMrzWwn6vc9jGhqUuK7MAKRzjHLFj8NLXEnXjzQHdatqK5Q2TgpazF1P4jfn4NciW",
  "key16": "5g2iXj28Yegok4jS42x7M1sB519f6Ha6Ud9MvGEcSazfpd6pwWWuGW8k6zPRuYPvRSKSdggvZtG6T1jc52zsCbj3",
  "key17": "5pA4X8bCzZf3UNJcVHPUFzvkbcjMJKXvMuBbJpiNp9Rvx2EeHxD1cPVkpnyZy5n7TkG1dgMaPwAskEUos5tx5aiJ",
  "key18": "JKTjfsGuRdGvah6k28hjhkxpgWnKbKtXLAHA7ZMAbgiRz6m6tPSPYbFtGz3LuZsMmmMg6SUvyXeGHLkUerkLQ8V",
  "key19": "4GiES6sfhmF16YRTPkTzTr8FbWYVoGkXt86VymNXnzb29fqr3ZArqzC6dbhN7fmnTTZwX17NUfHVm2w5FZcsuPm9",
  "key20": "UdXAYrkKbGfGf9waCibVBbBHSSuDzHfuC5CMLD8uv1cXkwcik2BfMMh51T56DxPDBh4cfpNuDwxMinmTzESs9S1",
  "key21": "32vAByiXrGai9TDrycxA73BPmYzGUTQBHV3ZRDYQoFwW818kGRF5h6fAoHRAQkBcu3jrV3cdyVmVgtkpky4NFBje",
  "key22": "Fg3VcoZRqnzPsd2o71QmXt3xseAKPjSXY3CwjCXkU34fYcgpRhraB7tQRfCXk1qzKzg9qeoY6nsUZhbUqdwyiFF",
  "key23": "3wD8zN5nBYb4oDN82y3bYcTpvYyyx5t8thCCmuggWtNL2hAzhhcyYHLoU9trUWCqKYdNV7wYVFeYV8ndvqktpKSh",
  "key24": "3mKUR7ij1kpJQBJBPS8xzXpobWm8ofSb2Cd5g2CK6VNbfog9FCGYuch2sduFuxa81hnGNoMthcMNUrFrjDg94xVL",
  "key25": "3CttesLK9ZwCcsXs8Pg6Muv6LkNDy9KX34wNhSudefHz1T31GxU795d8wmmM7DPPJa1A5H5vXrwFVBQgGWbqbyrC",
  "key26": "U3X97zFNhkT1LxgNeSBp74T6ikrr7ychjJhVf2rBVCxj8BXemZAcqAbTKaPtnSFUfDVkXu5ZBEJ9hntc6SVrMur",
  "key27": "afNxfLTQT7YdoVXGHb65ZjkT6EqagVsJYkgiuU3nPAyVQLh94p1erdoCzVLqnnMmjM3bAwJcVBv9mZByJb52LRN",
  "key28": "4CSxJP3oU3wDBLk889dNyEL3CNwAxTQ2178fYsSH7gdJe7PUN2KNR7D4gHVnwZfdDiSp3fYmCAXGgMNCAPwnAfJk",
  "key29": "KLTeMpiJunzd4co16xVk7Qo7ftwrSjY15DRRjfntqkT1mr72xrg6bFqZT98GH6SXbwabniWBYoEcHiU4RemXnzV"
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
