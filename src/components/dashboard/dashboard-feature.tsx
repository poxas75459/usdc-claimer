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
    "4mhvWAaYGUedfE9F4ZGg2MUX19aUD71Hu5zzjn1vziitwRnJcnQd7KpJuQquH9QXH3iGnY9JFVLnBa8qXvBygvG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2UWgD1TtJkvqqXSaqZq6B5CtaMEiF13kJp5zAmADYE92dTMZn8sESjg4uzMrnP3ad7o3No4NLDSFFX4p4yMbrQ",
  "key1": "3zgsr1XJMF8rg2mQUyWyWy96YXybQrQUr632knb49Gj6f9mzhCMVuSj1aACzLA9GpzJLrEv4bSETWkMf5GHizFtJ",
  "key2": "78gRuBoNBvaEC2m4mDnj4qq7WJZ9g3QZpi1rHbQ7Pm89jE6jKudDtbYeoWh58djnUf1HUm3E42DBaaFp32ccDRT",
  "key3": "4YzxLyApeM4rGHGoK6uY88LQuUNuFMF6x4fGDDhUppVkarmLdX7p2YwQQpvQAdLkVcDq655KeCYwgrZaH5XxVWp6",
  "key4": "m8SxdVmq8769Wd8KjoJkwbYcyhpjVSaNuKnucnUWcodVdh63naRTHDzwTCEJ6oRKof5MJsD6sLQXkFhZ3vjsVFu",
  "key5": "Jr9dUGYysug4fMSBQJRqfcF7dLzNwjQbwReBUps4awRSqcNFQGuzi7V9TivN59TRuzyLAHe93V3H2toyKav5vJf",
  "key6": "2QKvrqKpXuqS2sB98En2g3qH4Jq23aUVEFadLNvqiNvHbE4vvgxbkjUa9iHfc1SetD5QaLGvtxpKiT8Xv1n5VMt1",
  "key7": "uYz8kJCYBp3dPkcGp8BESMyhHnWgkH5aRDExFwDXnHZJxFJ2aHS5i91awCZbjWauz9CdNL4b2KbqCo1F99kji7F",
  "key8": "3tKbCYmXwJsz6eUSFzEwj6AJ7jphrgAPXoa72iCsFN3Rz2Jea5fYVKDGjKdSamYAawFaoY92ESwCeusMnhwprcvS",
  "key9": "3VbMDKTtxF47i9gaV6XaExEnp5udeWyMxvms1yLVpvKW9SoHRHAnMjytQKUqaFVsSPUYKiWzWQ9n4iqc27i4wKwg",
  "key10": "2Qwk6rdvQZk4YzV5zaYXXoCfc1oSnfMNqonnjxY7KPKCHXzNEgZ7oUoPHo12nDjjjgrx583HeAsfssLSVt8MpoUE",
  "key11": "2y4eaQd5hUhSjKPhyYPr6mDbcY51cJF9rmFBD2R7y2JwGmNeX7YUyrLcSCpWH91W2u7eXNzSYHzhuzBCLjByWZxY",
  "key12": "gs7jYM2YUSAc5WxTmx8zj98jfKzenVh8J8D6F2eFPwxKjDsFvNcijFLaBM1bkTGTd52rt1znWbhouKdKTveR8zu",
  "key13": "4sFdGHGQH62ZwHca9PsLvmzTLKUde9vxx8XkFawLEFNypSrfFCjQ5MduFXhogDchucV4PjpZKyYANWdTDV36igDp",
  "key14": "55nhnS7KF23SF5eAiDjZVbAuajWptZdiUQz2GcFBY7Jur34MkUp9JGza5fBhpoVcs8E3SC19czNJnA8CVuytGtP5",
  "key15": "5ASrnmBtK3FLjcsjy4HFQdctdHBSpoyVdttp6bN1yX6e86YgTCtc5cJeagCfRvttDTBn7qXZsx4jLVX6KcGuFPFr",
  "key16": "T3SWHGNgbMxrD6yhotX3DL2d9G918CJALM4iarWdLvbFvp5b7XLd6sxL1LCegf8feJD1y6MZbGjzfD3Gdr3aBrt",
  "key17": "4XwZdgy8C9EmfRZSTt4oFNw7K1s188s3c6utRLgUFq5t7YXmCcdHwhWSWNjYEGnNUradpQGz2XcVhMC1abB4mwZi",
  "key18": "4hzuNyQLaMASLiV8wNppZgTiHMZTQuUD85z8GpLSv7gTPXz2FUgXewZ4qttGCXZ3jxpbXijzRZ6xu3XMr1GT8g7P",
  "key19": "35g6iRFSE4Nkyjtr6PihP3UYjroUhcYaikxcmiFkdZSQUaRx2Trw8skByjHs2PwV8R5FaoaYVU1k9r4egFdtbbY7",
  "key20": "5TpXSC9BdrzqqssshUi97X2zxZbf8TKTH8Fjis46HbsA3hsBdpuAtYqic4aNCfqTnB5jqzCMK1iTJa86P5iucuPC",
  "key21": "4Bzpx6HpVfgi9i3GjrZjk7uDQqcCtNNUU1UYtEgnT3uAPZKizXnoYzB6SP3TLMk3HfhVBiPUkdnXQ7PMn64o69tk",
  "key22": "5SK7aMwyxxJLEiXCTsYHhTDTZrVNvs718od7avbZfm23tVBmWbTk9aijZDDZSt6JJU7GPPga9MBp6NicrY4aDrRv",
  "key23": "GXSPXpUXAThLFB3SD7L6VrK5wN1zTrTKJxdgXgVsD9HtGbFb2avvneuAVrPaPzrMves2bbGyhyqUKSbKv7ZzjX9",
  "key24": "2LEAcXKgNUynzWjfV8fksZQAy3Au4mAHwRmLiQgNpU4wr79P98PFNX44f3XAbzWjiJbzzgvATqtLrHYeVWoif48N",
  "key25": "5R6beiVYCKxvJVp27LwEtmKkW7mAR8czZJCkzLtGUG7VaLvDjS6paGH1yNUaudYgSsQDCutG8hA91CYf1XXUx6xc"
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
