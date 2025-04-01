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
    "2DUyCnYK8P5icZXPnizaSYHM9fa9fvsu4tirbwyRipqRqHtpEh5bCMjsBknA5z1fmEJTdbA3x62rD92LwyU91569"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBzpepJ1QmXuDRMiet69y98reEZZHfN3BDAXsrjQBp1YXSXkTWiJfxLYNt8Fk4vGzKvsMEVZhvqWwYycQna1Dwm",
  "key1": "3jzaM4hSht6XfovhyhiWez5UtaHK31USFqjS49dbqB4BmSA2sHzbDgZ37BAHDhnENNiibF8oj1RmTYHefoFfkpV6",
  "key2": "32wJTHhUhCGuejPVvHcdgUMHENyJ7oZFSKj5RbLJAhnY3orGC8mUtKo2xQPSHkpqAAAdofxGsGg5NgT96zej6jp4",
  "key3": "3DYQSaezkUSu1zcY4286bH3rWAe9AKvAXQenLVPLsNHe5deGxeirSop3BPeB6gd5vyipj75282sQpdqwkR7RPjHu",
  "key4": "mri4ZtPijYY3rZgSSpzBTgukNuLZVDKXnJeE6UxQQpQB4MyNdGQ8SE2uJrTjXeySwFGXkmb6SwZNYsEEL5aXQEW",
  "key5": "2Yc18aTPpuEd1xSvm7GBAAo3fdLFWjzB66pSTLeUfS1DZqGyZg7jBqVLRw9KNqaSGPFSbH9ugoNyEFpm8NaVaSbP",
  "key6": "5oHbSCj89MtNeXhTPmzGVxAfn5gqZVdYcuxnhbDXtA2D7CnhesSL2L5qKxTgkFqC91nh7f12QWuRvXDWVWCsrPvH",
  "key7": "27o9W6ZPJV8Fe3thtitGDUGpbT7MZ5Exqv866hrDiHnn94fWjj3yasrvPZE6qdzYGjakrzkktw9K7e3BgZT7h2xU",
  "key8": "34jE7S8sT9T2zjeSgPyL13HjZTJYuBupzCAFfBbsvYJ13xNmPhqpdpC1eeD8zYk67GPV5Woze1vWnhYh3wRKkmN2",
  "key9": "3rVUKMcFjptNE4DTeV8zMRURrcY4r8UoHRjuYtjMPT3jEpL52VRQgBfmu4sBoEJM3URWRY1gJsDjnJVWCW4YdePQ",
  "key10": "3SNn7QAiGJaDYhz4uQiws5VngyedQaPUGEB3eTb1X8xpeF8jj7aChJFvVaXhzKvmEEv87HT41187kUAd4seeGgED",
  "key11": "5gPM29R5ijqkZrnaa2T5CmAhE1FzVpTkdHw184btKb2QqSHZN8juo7H9a1zojk5JuxKwC5S5UmqUcqz4Z7abbCpo",
  "key12": "4oCJPNC2v3vsYNXviGrGv7qW7aYCsbeZ6D1pVYi467dipV5swUun6EdRxoSo8osFxW2Cc5tBqAL8eqeTkgbci3ti",
  "key13": "2Qprse1UT63QgwV2zF93WJUvnUcawktdyZbEF2LyQV2YKuAcTUaMCh9nHP1ccPwNU9FRrGN2CdGyYYhhW7wsHM7L",
  "key14": "5po6WS5SHJcRzm3puZNEdKZ9agSsXuRGFbiZ5V9TiM7p461gcZkNKhKipyzSZ8uCNMwTzQcFMyzddixUKN8PLtAg",
  "key15": "3sdGgXGNf5hBfVxHpwc2NYRPjYa3beJRnrBDnXG3UmLUcxLcP2ejLJeWJ6gFMdFShciGJCzpGiv5hnv6X8vRGKtM",
  "key16": "RED6YkJf5R6JeNCefur3tbEGKsbqYZzQXFfg8tqgJy26nHnAgH1oJ2XEzB1F242RhwpaJCkdK6fBudyhNNbZjUw",
  "key17": "ATTa1xNXRjwpnFDpgEp6HB9yjH5g9YeGsyoMDCm64NqzfwfKmhrPMTfZA9rWEhySe1W9tkHWX2b33mDry5sgYLf",
  "key18": "2vNNcTwP3QZzUcaoAcyJvkRFr1WhBnnBnSDBKNji5aU1APnvobXPnnrrD8rwtvtouT7FLCx1cLecr8CvhKZ9gaKa",
  "key19": "29pmtBeH9iXueonizUZ43EikanzLyo1mG4em86kfXW1f6X7QDcUVuRjjJXngnYMAvSxSjz4EcgRjKFPgQxVBiNz5",
  "key20": "2qnjcrFee7eEmucivPVVtYav4XeKcCMYdXy63q6awzdcopMfnKFCSjkqQJtWF1CbPg2Eytxa9hHYJyYeWMetYt1M",
  "key21": "5riCp2yg5S3Sd4vZF1TikR4eW616yPqNkgYA4PWvjMFQLCTtB6VUL9KV1HqBqJhp769UWU4gdaezh5D3HmAjMcm",
  "key22": "Rsw25VcVL8prCBvuRzaEJ5e3BiGTPYHBKTXPbCPv7HJHmAESvBsY4mg1hxX427rPov2x1MhuwznUAkF8cm8JPQQ",
  "key23": "fADLa7A3a8UAY5VKtJvra8VZC5oAMBWAXCCFcmy1msuERk3TXp2fYVtEZPtyMRCTh7hHny3qcAt3fVxPML4GtZx",
  "key24": "3CtU9Ch8SZPbG2WyteRGb3Sf1zwY4pJHt1t2MoZZKxtekWEHK9GkUtqNvT36Urxmtw8Wv9TSZ4Wdkfn8htEbHxPs"
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
