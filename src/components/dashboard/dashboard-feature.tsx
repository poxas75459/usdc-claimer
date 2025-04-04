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
    "65HDXy55TvyyCQbYrPaaj7k9dimg21TDuP6Hta2CEkbA3DcyvR446bvFXbUhh5gPtr39g5iqmeoDNhcytHLRKZjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUa9X5vaumHRdBAqx82H8aQMF1AYKhrsQawFnfUxJQ1SQjc2AU3RcugHWNWxWnCNuB6A89UGMyogR53pzLgCpx7",
  "key1": "2Z3DKiYoSd3e5QHUybp9HeKLUcTzAaFYHazznMerRQXeMCg14tbYN1UMznaEWxU5dR5yPGWM8DNs7WxRR1xYWVGu",
  "key2": "HizS5YZ6EvXpKRSVmAPGHqPkpqJYohwNVVo6pDypTvHGvyCX284zXWHCewoAsPrF1gaDsgoDzoLDfiamspHAv1z",
  "key3": "5FGVKKoYtRbFM2vZcENjjYtqreNNTimASyjn8f1reJqafoNNm98hvHgFsz7FygW8h1JcBKPoGroSTWwbruNhJ1P5",
  "key4": "39f8wEH2jLmMYcGKYMBNdHxyp6c9cxbZ6WNkd8K6eSVqS83AMcDjTGRAevJKDjLhCFUxmEeJp4s9u3W8f7vKBiSf",
  "key5": "3znZNPN48uL3ZvKqQDTAiwHLHvKf8tq5dzfGALVCJAMtUM29BV4AnwpHeBR1vWYde7BHJZXHKTZrGmc8Kx2Tr1Ym",
  "key6": "5zzFp2jY7NXgt68727mkrZpGh2YbhqRqhuW1psyZbXdXMURLDCqo8Lis3TdCe1xm7C54r59PtXa55JbHTLdqcC2g",
  "key7": "zHs8ErZVgMH1gjPuutELxvrP41j8CuLCMC42AA6MQxQK5osQ5mf8CykrVuTJE2hjTahqbPJr8QLR8bmaMqfdakL",
  "key8": "28SEBgWa4KeshZ1bcPXxnpXd3wBD2aAHEFVS5QRNzPa3gbhxB17QWhTssXBFTzG6HiEggrtCPsPpejd9N6W3eyox",
  "key9": "65PN87TCwP1KW1RxhcmD5pHZ5K3BVXdzGuPiqYxb3B7UueamavwLQJMoiKVp6TcWGBZUwXEdEdDcws7br6m1eXRP",
  "key10": "3jeM4Jugbsj1SnHbzJkyj7tpnixr2rCE4xm5rUxTJp2uhEG7hxNf6hXYjtns2MYgWXLi1wAaWJaS21gd7VTk3S4j",
  "key11": "2ef4FiGaDDJzqVMgTy8VbFuKiwcqS5Dn4xJ6dBfmsrxpsgiBM2tc5LHPZjfCVZi8HdPQbizmVvyJoVfQxYCeHPQu",
  "key12": "485b1rfwdTnty3KfxtDJTH541KQHgGdNfXwy7p8qwxkwAFu5ZZCtnvL6yZnMdkjgVMiiobicdHedjFLosmyh7FhL",
  "key13": "35FMij5A1sYZg6vqU6BenrQwNRUgCWXSewsRqKwsh3htTbffjNRtN5yVjDQpFi2RztT5tcRsMEC98YZYx9ArwKct",
  "key14": "4qUErbtcqpdVpSMJxDzJ8zZ5xqCviiuYT6dS3bbMXyYKWDoLhoAGnNAYfeZjwQzhaRGrJVVVQnZxUyxuknvVH6m5",
  "key15": "vUUoTG6CC9BVtng3XMoVeryaztQHvZii3k2CatZj7QDKxcJr25TVZKHYfMPfha1fUhhTuCisgcWfufbGB8HvW2w",
  "key16": "5FpUpE26FBjGwA4SnLhjd71DZqvwgmPLzPZ6PyyrtbeVb2xSwY8TQE2GkEyQPYVD8qfZMUUpnEC2VEZUJTymQgrt",
  "key17": "2YFWXn1jWCzdKrQeYWaaC9voeLNKKFCLztBYXcd6y7JHz1tChJQve3B8ntrv6NAxLqzDT1VEWegAwef5iU2kcu4",
  "key18": "4nsu2fqzbCmG1s12CUtD8vhjL3cwKzNCX2WahEGi4UTxmNJLYVemP9MkGHrAbAt5hESTTL29bc8Wmjv67htaM1eR",
  "key19": "3fm7EchMcmv5it6sqe53RJTYjF2NGPsbph4BD7fMRS6QN3cSseQxcmu7id5R5VmJo6chRcZxhguwKsKVaHuqY4yU",
  "key20": "guVzcxSFMNjzM7KjtPfUMzWnZwHiXKKoYzi5HSdHKpEJRrKNePDrfhXeQrzu3YoCr6hvKLucoQNxeAXVgk4iZnB",
  "key21": "xi6josZFY3T2ag7mixcPRcp5XhYsA8HRUPxjtApAyxeKRkxYb8wtQuANifLiHfaiXjv3TDga53ekm51Synb5REC",
  "key22": "6yEB1fjfecjp1iNhqyc4NdtV4gQJ7S4SU61ngzLcAWhR4KghrRrV2srHBdAfeL47FETccrqwSB3ma79UKGYzGVx",
  "key23": "fQCKCdrvWdqmyjonwdYhV3UsaQcr6oJfpdv2QeQhyUcd3sU2TvLgx6rcVdj1FRawnrG6AW7VWNzK5J5cQm1v9c1",
  "key24": "44rheNWCdFgm9mHgiLKcdRTfqmARGRxLibnvBHoYYEPoLqHTVrjCWc3Gg43DGxmfEo5ehJpFmDKb3FZnxBm1hAeP",
  "key25": "3qE76bJNNBqnjXhdXmSvEAQiYdfJY1Gu13b3F8H1gvLDSQSagvpEGS4DaSmKKGk8bbNJrrjNmhr1yNbSRe6Q8phz",
  "key26": "hE6XLUSPzzyiuppHGP12NXb6Qh6PrKeRgPWLXXrCV6v2F7zHZe72Cywh3kt9bM7NHFFyiAi84auU6mEtwbXQnVK",
  "key27": "N5jXp4s8zhL4nqPmsjBTtYyVWGegsZgmtGWTdmmmqLKDuEHaM5AWdm2MkKPnz23wP8f7fnNV5ChPY1BBu8PF6Zt",
  "key28": "3mYFn7j6fLQ6V4iustyJqYxP5V48NiLhFG462w5amo6XabWKbpfAuoFJNWHjP5Fdqy8R3gsye7RsbHwnrh7uGmcf",
  "key29": "5bihes2FB11b6SzSBrt1SJytUALSLHD8SNpCiPPWNwkyXHZtMzFsQag1YZ9rQbwykekyybM9zAQ3uVW2NyjsSJN4"
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
