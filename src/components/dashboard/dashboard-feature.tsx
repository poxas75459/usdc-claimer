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
    "3KQ5At65nvNmY82xus4CbEiHKaGRbGqkT8uHHRCzpURNKZKeYwmTTaxAuXDgPjrRJGCQAbXXGqWoPo2EKLTfuiH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dKbV2AgpC8UfkZqXq7nUo5fWvyGLFpTz98YTJ5fttUkXDB6QuHu4thXNcFdcvQgnYcj1Va6xNAgGw2wfD2m7TU",
  "key1": "64EamdWw7C8CGDwnq2PEbB1Q31JGkihqCZ7JawJ9D6Vn6RJjTEse4Yq6YhGbMVhJJYwis2m3Xywjtve8HbwtKC8s",
  "key2": "5oyJdQDw2eSSA1MM4ghhRY2rvcHRNqBkmtopQtzFUSQPjce5gF8baKax4XrhVPBPMYd2dWBS2BeyghbvVTWqtQE8",
  "key3": "3BTbRHGybmk1neBdheyCAH1HLcGJ6dbgNXJBC3ud2YRSbiWFhjeygGsaNWKA5vmpFvt6jCracTXK9G4iAkpS3HWm",
  "key4": "29sRJfcqznWCXzPwPf19FJHA3vwfdEVzLZNw24zYiZ7FUzQ8cn2HfZDwkR9qZFWjKCdcxwj3SNp1osBv2C7fBkbq",
  "key5": "2UnEiLNLNhnE3ntwx85n6bqh3GDptSYjAtfap2zBvBrv21KZnkemgYLw2kgQrjHEbNov2u94Sx5y8ph5nYoC4Jps",
  "key6": "k7ZdqGe9WBc8A2kgfiWQoPo2RVLX2j6AW1is6BBhMyj75wERDHabsMQstRiamSvsKfcW7WVjEcQjn8XMQHUyaaT",
  "key7": "5zoknHydBjCV1agZn3WMRyGKWSjHQVyFBxJw4Xgc5CsA4QyFvVdVtXcYoDJPnkRNHUiLfcXNEgFspDHJpEKCXDv8",
  "key8": "5hU35qyjRm4FACCu5fsxPi3qKgHzypc7wTkgTJYRkocoKMax4t4LC8872kuPY3ogGPPFfDdckFQVWieYS21LVPm3",
  "key9": "4jeQw3jVm2qmN9w1WUSjWEaFV5dqhqSwZGriG5Hs266zmkMQAxLDQqD4tVTeehgrj5xuwUVBppNLNvKFMcWpkg3a",
  "key10": "5gb4rvUyL7ha22TDiso3CJL5kkSPbmiXFSwvf7fFWN3Wr8P4ym41raNp7naTct4JHe6LeytJBvpcnEUa927CTtpq",
  "key11": "4XperTVyucUEGURsPSB5eBeAJ8aNgTCQr3RL5hiZKi9nNXZ82dohSyQ8yjxUh4LU4Bm1VvfFSYD5uUQkhvthG1p5",
  "key12": "5f6xoee1TcKdXQynyEmks7hL6csiST6ZjVgaXUdFTiUCiRF2KgB7QJezvfCz3AytZBASNkGu2xrDRNk89piKLhcn",
  "key13": "4vJVsMETs9izD4wqm3zo4dmgJtCGAL8xqqev13WQv3jd5A521iyLXRfSm2AgjZLXm1c5kfSLZ2EbBhsXeGnHC1D8",
  "key14": "7yDmMLTQD91Krgd2zwnC2rLGP4SfiBwWGw9sYoFysc7V2tE9GkEGd1a1bZT1KHipCkHauRhGSmjn2dhkyY4UFTd",
  "key15": "58eapaXcCw5CEbEpcQyuxT3gaTA9HX9bqGw6vRfct8P2R5E2ygjBB8qGPKiPuAC4P9XkEZMtspmbnw3FCmRks2mP",
  "key16": "2T5DuxW782x74XdRQ8rW6LosU4xfn9xAty9j4SLhKYeT3XWtm5WvQ6xEpWy7syxYNEQratn8vDEymunPjJtC9LAA",
  "key17": "S2cCLza3Ddvi5JZE6CcMzbBUkfJWQEUWu6yZz5z93p94AzmoVwSLZesjDKs5wHdSRakKe53nu2utQte9X764Brh",
  "key18": "BMh9V1Cb1zWEa41Aeeg6q7KwfYWcyLspwQ8cf7g1qEmHCoGc9oN7YxgcWunMnXth4MQfxRP7xDqRX1XEHKrmN4S",
  "key19": "5GjfZduNfXbKbV637RRcvCPmTMagfsVx65oJgAjmAzjVtMXsG1a3wZ61dyM6YY9EC4BGo5WBzrR7wvwNuktdPjMn",
  "key20": "3qoKhWYEzxHbCZQbP2hSkbWiCrnRh6D5cAYLPJJQaYHEGw4w7HX1UrLqPWLFEDiFEQdcfBoRckEJWZNVBbKcow9t",
  "key21": "48KeQuG9P5KmPjzWYrCUfqZuUc2UqwB5mTNnQZuug35JRhnHmvkqNDvHYEPQ6HWDXFZkpFFeYvN4u8ergFUudbqv",
  "key22": "9HMVMqjv5vPhzgYeEZ5hbcF9FMZZcP1EpCZGZZsaRU5xYMjsjnhBec8q4BrDfBvVxmjynmV6NMGHHfcavznieQP",
  "key23": "5e15hLUXxRvfjvxjQckJVD2EhrKc9nRgRxEUA8iN79fxk5iHRkWADZoMU8SbxSZaf2LUSG7SN42wqaRnUvvCsMrg",
  "key24": "3zhTau2oFGngXtrRXEmsY5iLLxmPPhx5W8zc76kVxYAHjeMLf6d6tjmGfV8DM2UvMsKWri18feRhKoXE7h896FRF",
  "key25": "YFNebmDRV8AhAwhNhrZ5qtdrtqTkytUMZanrYZCYFJJYRRh7gYsQykyGofBMSRHssYGs2c3TKUaF9gZ1pHZ46nH",
  "key26": "3c753GkGxFJcuu8YNx6hAWBojAn3txNPnVuHCiyExueqkut9z3Dix3Q4VeH4PqSHENVLVFbrtJ2J8xyjRa42t2Hb"
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
