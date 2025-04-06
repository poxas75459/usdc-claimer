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
    "z4B4f9bZ8NhykMpFoy694raQVvfsvZgvdZx4EvJKHF38NcRU3nGgs4vHjbktT8h8yoa1nTPCfYDHetoTR6KtmaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGbPVvEzrA93VzFtsDErTHHts6PukqeeGtx8LnWMTkPzPHXtfSyjpqnrNT47mS49PuP7UZz1i6Yfizp9R2nYTRo",
  "key1": "4JF3Kt3xzhEzZYX1Gjxow1PKL1h5nRrphGVjPEjqd4UZYu7FHBV6Jm7Po2AaHcjNyhF41GPBqFEF3XFmrnd8F3t6",
  "key2": "5ckBHt6eceQ3nkyR7GLrp2ehgibtZnwTZVPLm5BWaAkzP8fmC5khJcEa8qzGKqc3YDzDN5qDQx3VBVevR4BoJ8hd",
  "key3": "wSsQ6ev4BofPyCEeu1AXrDAQjbtXp1EdvyBxpxU134hDvDtdggy62VQi6HrFY98mgjRHdTU23tBFoiivuZ3p8GY",
  "key4": "2oa5HfxHV8NKzSKX6BWr1s6rJRH2nbhNHR4yVsHRawURq15jomkLvPUBW3Yz7QcuLfx6cyPc6r7irU62dYXKDWgj",
  "key5": "Z7tPHLtzeAxqA1dEALubeeCHy2iREv1aBrKdpBA3P2mN4UGJoi3fZu3wyT3zyy35KhbgnpbzuXQ8fLiypasTCpP",
  "key6": "5Cg9hyckjrMTJgCaLLnoo8MtmU61K6iLBBUf1DHRT8gcVdcfmzVDSH98UsCUuHUB7p565LG5b1GmYGCs9KzicHnz",
  "key7": "4Fm1GEhCjNxaakPhWUMz6eySWRwXo69hGSKgXEmmMnmLvZ4UwcLvmn4YEf2VXj9BUsn6ygR6TgrUGT74Yu78yTvi",
  "key8": "3EZPKm6ozPjJM94qmo7k8WRRaWfwyu1Kha9BDC1oLbmxFdsfDFv9xawSz9DhxL16NJoTCzjYCwUMt14ZGHJsXsc8",
  "key9": "56dWm8SKAV1rxD8QFv44zLuq21w6Wru25eTWEmompZVuiZyAfGQmFe1DbrjSsFiQw6v8ExBM4hW1mJtQRGAfdBCf",
  "key10": "NC8hh5sNUQNY8if5z3j1iwJQg6xkmcH14GnCvQrGGzoxnwystZQreXiQ7BnGKEsfifNB5ikYS2ZJpREpTni1D8Q",
  "key11": "5UuQ6RMroF5Vy9yaVVkxqx9cgVLsJd5EhJeb1Zh8xKgKKcaxQyC5EtwmA31vanoU5a4ZwnQACeiiheeAvHfPNATh",
  "key12": "3huW75avnMozcybkaYuaKPMVyrR3u66VTHrzRVSc8uEpkxCvZm3gdMorXBCt5aGqUEQsrJsAvrZkauoEdDWAaL6C",
  "key13": "5ExTy8FUFEFEcT8MhsBSJYnkQTJUFLFRZmccAWXbgSbiaWQsWMd2pgf9T5wVYwpaSRKzVucoCLqwHsC1UsJ3qf5S",
  "key14": "2QsdmEqgJ2cSqezrdZigxfuav6gUMZE4FMSDYMNgQGHBgzy7wq2v9Q6tdYDabUVF1aieYj2w4zVKE1rWHivbMmJi",
  "key15": "5WPjYGgSzmJAXMgan9f588y5mHEdDg9oKEbg6nGqu2gvZrkPiimiQRcaVYbL3hzusGhkXnLmqsnaKDbLeV1nvDq1",
  "key16": "4Zr1gJMxUHwkVnp8D9yHW5XhPq17nGjcN4DJXscJLiNC84JJ2fR8btztiWakjyqpq61eNRTxjPZDRb4MWzNttsDX",
  "key17": "5kp8gt2McU27MxvjLfbgEP34xKrgwWSQQnmoihcpYKXBo4mc1qoKNGZKc9sgZN72SQWgXGTeaE3GJ92iSJPMVZ1w",
  "key18": "RXZ9LcCBjuBaqRbqE9B5mE2nNgZEkWqnXLKiR97Es1EsxiJRWw9wAK8kitK66ynBBBdRBjtTvNmDm2KAcWL69Es",
  "key19": "2WDG128KkHm5QYhg4m9pS9DmM2DRJRLn2LsJgB36oHwh4Wq8rojXwK1pauG7hCnKCGAQ1E3u46LS4u3ZvWp5rkrv",
  "key20": "3e9f32zjSGxPF1idKdFWrgD25QsrAVCHQxsrXU46QRisDPAqtwtGEWt8CjZtfYsrukdfQEirUKvAF1DhxpnzFU7D",
  "key21": "5eqvmXuv8jNxzwBMqSWtgv7S44tBDTiEWMTCDwWRQs5CwrcG38ZgwAPkNEvKwvxaG4Jn37AB8nqyMqA1RaLvnFT1",
  "key22": "e4RLsmTzoNm7D93kUNKfTuG8FGLcMG9udhuxeCwwAZtz3344FmpebbSDh4sL8DCBc3XQufCupC8aFSkFJr5qxGB",
  "key23": "52UwttuXL3uNR7GVaS1DHmH3itPS4cJZT3i6Y8hKot337VzyyCS1Tx5JsJUd2qsUDJo6zNCjjAbWJgRz1JornLby",
  "key24": "5sgmPXUJecs1bpvsmsxFjMcGpr68uzRAQ5He4cytfDoNZANj9FkA9QiF4cgdfeCCnYrUK8DsFymaF5MXtv8SRtXK",
  "key25": "3PCz6FoNxYc214ZVWt3FRbmzJVm6HhTkXcEn2vx8LfbCY6JCSo1qwnZQDGNufh8idm1FP8hqCyhjmWJQ7KVLVda2",
  "key26": "4EiLezGMR5cDRH4GPccWp5zFNpBHDciqsBhvUQH81G4rQchExiAJN9wffv1a4iyWvs42kDRoHvRv9LBwy9th2FZ6",
  "key27": "5SWy4huJareWFC5k7LESoen9Ge5gaHtDTsbKHukUTZkmDjdiNe9xveFwjhB7Qk1TCJuB4q5xygRur6aeHN2U9WJs",
  "key28": "PDP1y6X6UKBAjFCvKR8m7s2jVMS8ZgoGUE3ffbxoFcAq5bdrq8EuZYkaQrC5rEG6QRH6qHpLS26GuKmzTF4Bbpx",
  "key29": "4hMnmxyvCM4RABh6GWxihRPRvJ7WQqmrhQA4G11asN7c7vcA7GkCToMPt9qcUHkirog8bUw9L9H4tV5CLCCj13N1",
  "key30": "5BWWdJe1rnNtB9LyHPGcTt5b1uaNFvZF1GBJdWiGaRx5VhrSsPuM6qwkv7tKKubfn2GmpABdvntQD5AoYd5BYHcq",
  "key31": "42GdkcJ7WwFodoqZ9Xhs4qHzg1ehxSLDibwbFFQ82dx2LhR1iPSt3R8H263xqXKFjfpYRtTthXGShvK47zNoNCvK",
  "key32": "264oQzVRQSKAwiecihTYZ1jLEsBzqG1kGFv1vzmEFju5nCXKy8b4T3SfiqHuYRrnM88nxPyJoGRC3AMQimgudwKh",
  "key33": "9YnTdFLRwTTBChZd6Q1apm9WTQyN3dvf1DRjKzQ6nFbMmPmoBqwNWVZPdGNqfUq74jPUr9BCGP5d4aKPCGs1FgE",
  "key34": "3p3297esyC2KcLp6Zwow62aHP66ngVTcRgqLxE7rtdy1HdbmW6CfxszYU7sTEuL2dTXuzhv7yJQpp7nMmHHpHJHH",
  "key35": "61j2wXqjS7FD11D4VZJ5Hpt4UAabHZq6oALCW6xGJQsp9bgQNgLLoiKHaK7tC3RUX7CHf4qe5djndC4Zc4SJzdtY"
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
