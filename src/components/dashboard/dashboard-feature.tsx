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
    "3aaKpvjcmYAyVrdctbjjt4zuZnWNXkjp4cJzd2Lj7sH6GMb5EyjJfBYyih9JpXr4kULpEp7MXYahVJdh3jqdR1Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkBR956UuhhR8ysuSQwcoD3JUw2dqWzGEcEVWQioTpo4kejT6rY7oY3NArBhsHuvevm4fD9XjeqaNyb1vmnF1od",
  "key1": "yrgb4mj3ZPGcH5K5T2KDmt2W2wwfENQurDEGsETupgzxBn8sxdPP8Y94WWTSMSdcxTVk34VcAiZMq5k4QMKi544",
  "key2": "3kd7qCsFC8aCSAvvATAPxcJkvLtWi5UAKszrSNNXKi8XamcZAeaRFqu1YsVtERQwzeRFPpqqUqdieLRhrpNhiCpv",
  "key3": "4rQp87Uv4QruJtn9atJ7h2YKPX6gbLETnFSiaKwLfuV9jq8B14wUF4fksrANVZwQuoMZgQ6PkAJFULd933hDL7Hg",
  "key4": "cP4EHvprgcA4XaDJ5xmvEdcMA8LHBLTvxNJQhoNfKvXQhhVgzfTXGvgvvR9NBgcsNDi34oCwx8mr1nyiDuksqah",
  "key5": "3uMqjUzKQw24aYaEuQawtm73yhcaA9i3dS9tVsDb9w9UynLv5D96w9AJf4UHSeDSPRQrK4NQwjrPEPs1ipPXtt6S",
  "key6": "2h7L4xvWqoE9bYPJfYpfdLNXzaaxk9WRFdtk1yLwYBBoWJ9aSjJ8xBAeMi4HcsSCXGAt2ryQqDocNfEtYbBLZH9F",
  "key7": "3BB3Dzjdp3gnaJRWYL3Rc3FrThU3cakRqgJSevPJE55kU9Xefh3UMigStfAWQLygWA7CJAaFsKfEK5Nwav4Fyb8j",
  "key8": "Z4JBSm4y2uirU31fbzaQ7TtuUyGb8fCbDWdvYTBCPoqyew5XRAimXLUTwd78YXmpgCS9cToLJTqhWm1rLFtJNwR",
  "key9": "3FCLNx15Q3DdHmZVKyEgdTAocxPtaG8Kwz5ouKd2nzWSDsj1U4QAckMKv8DhKyZ5nC7HYEGcxTfoYCYupv1gtHqW",
  "key10": "3AbDFGUS2MCiouEpEza4Y2i1wXFBLZ7dYZQ1orW1dwU81qtFQhgBygJniweDrnMB9eu6CoN36fxu9yQ5WRxAB3eu",
  "key11": "VjSaLwMrG7YccoGodc1fEFdJshxVa91aCB9quiowQETsW6K4FKZGQ6qnYNBbsDMv5LfSNxtZThZ8M2X8EXwk5uV",
  "key12": "2GQqYu3wZsyP2HAKU1iu1bcdseJQhMRYJJM4EpV5XX1fhedUTzmBZZcGhmGKJaf9numM9zh7yAfbgyMhr6KnH6gK",
  "key13": "aEijnyzYPkykQFdKjACbpE7WXHmkbN2AschMDMpse7DbvDej56ZSue3MXJ1QB6wox1cSfRd95dS8xDqST4rY2nq",
  "key14": "5VBWd1Msyz5cGFmW5j4TUMc2XBMxC2b916BnNxTAXDzE7TSWtQL8273Jf8nECH6i723Ntmx8vZ7p5H3UXAYsHZQj",
  "key15": "2QgxyWUHyjuokaTdcLFh2WDtgyqTAte1B9UfiDfgXU3KFpbZ1jYJeBjq129HfLknUhh67EZk2PWVdBWpMuwsUYJA",
  "key16": "5ucgRYTfuyEpqWUHqV58qZxJRUwxpA9jRNXb8enqiKYN3HpbXed3GUJV83p35ud51LUprDeywz5vjrnESENqnMWu",
  "key17": "2E44qqvafRXdf14MpjhQKKWkNroNjsesEVTxssaiHqqKiAqyYHShx8uxRrxM1hf12aEKtsQ3At6jGdCBFQPgknVo",
  "key18": "23fpg7EfMvUHbcvPVYTfQCg1XrtLudodE985qTodEyGMw6C7bQ7ppcpa49KV8dc7Y8stUtTYLSWaPihHxYbj1Pgp",
  "key19": "28MuzUxniqdLqAgaNp2LYrjbnmYmg1AogrY8iuPYhrAfqjasgLAtjFGWqjcbpryx2nq6KZ6xLLjFikqw6gcCCjXN",
  "key20": "2YZ8AhRsJEKFFJrs8xqxNX6TJj9J8GKDeJcDbbYjppTsQieVmrhoSZ6np6kS8hS4kKGGdfCD7UobZ8x2sCMHEizB",
  "key21": "225WfWjSLsn3LbziAZijfGKYfoUVpASAtxAEngsh6jyzSn6YBtL2UFeEnWDauN1VwSjGyQXTagVxPU4u3mwVGkAt",
  "key22": "5jAHBpQ2R9wWdfckLSTe3Kbac1nMdWzvE2kGANq95YKNfhRQRaWkua7rHPaJzDiAQWaFdUozUkrEwpuHiTs6k4uf",
  "key23": "47bjNDfTCqHkVFdt4hsAQby6zdyRmwqnmSLaL8q7yK2h59nC5PqN1WbysiA741AH9cChn7E8gSWEFcq7ZPd6hvGt",
  "key24": "NXtR8RUFn3hzs8YaRRThB8ytCeQ6VNjrY5GnHEeep5VoByd8gBjy8D6Yj19HP3dYjkvuVQocdra8Gm2SzWPThx5",
  "key25": "2bM3ZSsmEEhwXxHCbfpCvA3TerPhcyPWEwsGjRHuwYDTwnRjQEn6Pf9j9fkJtTG7do4nzknwjBduU52yAmGu6FKd",
  "key26": "3EiyZKTZdPeAx9kXhf51q1jWnz5PVVdMbam4dCdsQ1iYH6At5z5KodmiB42DmM9eLF1BMFNmpLirYWk8vnzPwZ87",
  "key27": "hS2iXBHcYxYaAR3utp5APL2tRsLA43YPxUJC9GQ5WZ8WjPhrHaWGHz72ccaJF6EBqrfyVGygxdVEzsgdYBPMYmG",
  "key28": "5RHaXDgVNpdNtq9V5xPuz28Z3LFTWMzAW8HJAH4UEXrWmvwzXMV2ozM9D5uZjLekZjyXnaG19Mw3KoAxuBu2surm",
  "key29": "cv377kvYrcXToCAGdw5RsnRBu9FYvn441dJ1Yw7Tn1hMCHdZJ9wpupwoc54keSLVPWV5tDRKMnPmMP2jS2cSKhy",
  "key30": "4WmwQLB7Sa61jvKKxcmByKi6iHGCLnRttcVoYHQ3ieWvzHnotKRLgAY2wmTt6EUVpkQGEth1C8NrsPdAiP8x85qj",
  "key31": "4NQARXuzVAmPbUcGuc6G4PAfTUKzTmip9FSmsUAtZR6v5VTqLysCBbDPsfoZjF3kReDRbPb55ZEUgAQNRT6sEC5G",
  "key32": "4pSQj5rMkXo7M9w6aSQeBfmH2E3kSUChj8QJodFdE2NVamw2DNjXi6EffwK4UFYXmHh1zDNZdN32EbSPsZfLg73H",
  "key33": "3xhNx7gs13HuGa9w88QSo7LVxRg4AGfohBUBWR8acY5yeo9bsiWR7XXtXLXzavUKVczcpDCBZQWski5LjRHuHEbi",
  "key34": "4Qq6JzeubGFZTzpkQuJFLKR2tnTASYUV694mDtSR5CvBE5Lx2nKTvM8SpXjmoqJMGzDPN1Yh7DcfK7dkWL5YoGRT",
  "key35": "Q5mfXfkVVHq2D2f8T9KHpFM3dwEFRnfZFVNGeN71XrZMBZ9bod4YDnbtVBxZGaEueDE6dPrMt6HyLynEezHdVyy"
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
