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
    "27vZjQLkD6v1yadFksucw6XtxA9BATfMpKUoQoUz5mp8RN8UoZnTQMCHMaHUi6BWaUvuF1vnBhU8f2YHbUZCCfZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQPViFDkPjzQ8DTTPjnEjYdyewKpUobxa2JB6HDduQp9TuuSiur8a4vjRVeDG1KcKMrZqbAEPFDv3zaBN2mynUs",
  "key1": "2LsvhZD7ZS6EJCMHYWicwXWCbndGqNzmfCx6jQ3GV6ohnTuydYXaWNpcFcoB2p9dYzjPrki3XWAGFR9tNPBjw7rh",
  "key2": "4AZxACVR8AuyZPZXufvZaoh7wJdRXdnEDgPpj2XWNuzHoqY4MN8f7S98iDcujGQ1uUYmWuFFaYH1PFBeF5KAuuR9",
  "key3": "3E3UC4D8Ldk1ULid1TZjcwu8P61nLmkRMxrNLvx5u7njpZFSMmrSEhPbLYNfMTZ9bXJBQf3toW8WwJLmMUhkzuik",
  "key4": "5e9WLfKNbvwpFgreXzHcFTE8D6b48bBiweN722KsKVwAWiM23TqhWfqaothmju5nbfSo161JYqsqDwQa31yd1FC2",
  "key5": "m53MUpd7341ekcSguCeeHBhjcbTrvVneyfk3X1ZMxoGYnHkNGQkCk5ZJudLCotsRbdnGiMhro9j2ztigrQZtsVw",
  "key6": "4AayqAgtPdFfriaiyR2atijTpy8qPm8fK18Nqe1ZEgwGhg3Gn859RFBqqSfKUGiUM7DkdoxaHMsGNVy3u9wit2Eg",
  "key7": "2uLrAvXiX2jhtqXyMWiiS6uChGwfjTTwh4aiS61gcrpQoTqXoHwobSsedsQNF8vKiyLmBPKU4E7deFS5SbWRss5p",
  "key8": "TciuJDqXdhw15fqzArbv2bECqGSwz6KKriSrUHh8wp5ZpTMpRqR1eqFfV1GPGhZ1sSof74qqVU2FtF3mFh9ijrG",
  "key9": "R3KHXu2jiaL1M6A6udKF8fB1FCQKg1ezdbDg7f1ZjoqpegsfH3S31KzYLjdGo7DDeFHkfJmMG6wV9V6qZxcxms9",
  "key10": "4Z7n1HfyKyHTrstzSEep6syGRXhwRJimKMXxAvCUYv4KCty5ywEmdKD4GrrD5iUPzZsbxCN9p9m5rccz5DwzjzJT",
  "key11": "UxXG966VYRjdg82HR6Y9fPsqVDsiMGneGYhL3jV5AfHrrEeG856jVScMFCfaB9r9T4aNU3PH3182jAsoqQ6FCXy",
  "key12": "3w1tDRSdG65ZH8hHrTZzyBZsMok52RgQg2qqmSJaydeD3LY3sbQoEttDnAeNUQ5TzhmU7xGXTnpYFKN28yYanvxY",
  "key13": "5WLVS7ygiSQLfTCNkAGUQseTZn4a9FEDD1DACdkABq1EU2PuLBGx8NhAjfbvX8xVuTmXDnusTpuQKofgGvhNWu7Z",
  "key14": "3KdpZUtrDVJxN1NjzDy447ypn7nM5qvYx6XXVGWdWw4JvKHsd9Tbr9a6fyCduz9B974EiDJeTi6iBjAZNn2BtbQY",
  "key15": "5fqe9mpjBbghyREDa3mwdtTCzpXGR8pgg2S53wGMFzCajxomADJVtSVPLdpn4pGQsafsXSWLj15fPx57kNhiHY3s",
  "key16": "4HXvsFQfUc3qBCd1groswjats4yr1LGa7Tb4GKZFABmGBAfx4xMqAEBzkjBBiMWrPjeyEid64eJZ6UU7NTC4GoZd",
  "key17": "4brGCCypujPDcDjF9c5gw53ibDdSSy1JTpnqU2JyStoxuRSWAJv4SNU38H94hWc3AMG5mfFh3Hf9zEUEmSQCWvb",
  "key18": "5BKLzFxbgJgyAiQYiNiNQrpMQLXtXzcfWQzERLDvNXr9S81WnPrK7G1vQGWVueYVaPwYf5MWnANR5EZagnMZZkLu",
  "key19": "q1XzuEniyX76XJfjAqk95HH1t63jQSP3PR8jNgU1EM3PribPqinXmnkrV8Ti3qo6egmVqrjzKgKwzethwprqSMZ",
  "key20": "5LHzqbAANDEv67o8KZSh54TsdNw8Ftz7KAugb2Hc8mtxAd5jGtyqNi7vRbaVC4h6tRugPyhJJBNd2TnqKnENBvdM",
  "key21": "i2qc16sQhUp8wo2YefEBFm5Xkek8MPBAQbXmpmmNiErLqC5G7faZoEkg4bHscXbdVpgKJGZLaju2ceMVnHUb89P",
  "key22": "2panANoaqbE5NXKhMb6eimZ9tpii8uUSVQPe8WRwD9u7u94ewcRZSzU2AN1iBNt6g9Jc9LpTUABGcGSsrRewwjwY",
  "key23": "5fwPBiLp7PrgSvkYtkCqhNNpiTSBxNuEWk7wn5XUyS5ChxX6bwJyPDsdHxXWR7R6x5XQd52EReYFDAt7wzjUh3aa",
  "key24": "5wpDETe1hCvTQQoKjPTE5Fmot1ACo7nKTQ92A6w1Bpm4SxhX1Ci6hs5aq8Sm1Kx5U38i9m2bFDarXFSX2m4rK1v5",
  "key25": "3q9thaKHXaLGAXFRMmdCrr5cKUzrrW4osPhcY5mqYjXUiK3FnmqgJv5soK8NrzJSWGVoutH1fPzFRS1pymQ3rtX1",
  "key26": "QHAn8Jbm6jHSqsdiykBiJ9LrjsmivMk3XAqSpjYhtQzWJPPzXh999DdxWWqu4VoEwyG6wRCqDYbkX2TF2bYGZNa",
  "key27": "58kWvvBCUQTxiboFXyCxDARLZVodhXryuvZ8dhmEGh3GsXL7ZHKpsu3REG3Hcur4m4SGrQAVPt3p4kba1zd2g5kV",
  "key28": "3haYCT6znTds5n9NwUBC9rKKpEFXrv8ugiv6RNVePJpDH3NirwdPmQL6sAqq5myCAUNFkFHACLjduznD38uojdyy",
  "key29": "2yFxJAfb341Hk5uUYYaokohEmv1MtPA6qZZftTtMuFLSnmwBTgCDquRkMSEpsQD6LpibuLUwiTYyk72jAKSm3EvS",
  "key30": "2FgruiX188LVSiLZAqMZ7QheP5BscL4PWecAZt45Q8TTYShA3pKE3ksCEPZHm9pZgXFQEDETgDsmknLWjPZ2u115",
  "key31": "5GGQn4tacZwW1BoRNXSVSNKduWCNiPLSwQiZr7LViWYdr4nZkipTyak28zJ363Riozm94zhSPE3K4vWSkAsK2UFk",
  "key32": "35aWienypjN6kVwciycvj6BVY7eCQ4uVN9J7PNjch3iAAEJTchwwC1oNJmBbL9oqoWTknRM52jdDBUKwK2CdESZ4",
  "key33": "Da3B9upfD8pxMFXUp3u9kmCYcXbeQLPoQaxRyQ331Tbztpz17whSD7XwB898U71aBmyycTvn36Azn84pD2Ra7cG"
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
