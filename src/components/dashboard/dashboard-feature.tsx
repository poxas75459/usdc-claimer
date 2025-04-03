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
    "3UtYEjepEkGBwGyYzxtM8AtUrfJbUSqZ1CcxUe889cXRL287s88yb8goZES2cn5P4uNC1LkehkhDkuuKDMZQx4Sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrfVCFr82KurJLkE7rpyFdDHwP8zvyoVbad3RYXUtMXcptpqMj1WvgMZLH6uY4B2X1Pqp6MZXkAAa5TsM9PogKh",
  "key1": "5xFVA7vbza6f5zFk1q3iRuvdtzF2QnUZFSmg6uu3RR6T2TXtQz7gyF36fHRC68sHVK66GT49U3qYuPHBid9rphoV",
  "key2": "2HMiQ2g9xknKEGwJ9uP1NRovmGR1gQXEyfnNXjzxdzYnWePrihjUFyUyxU1ZCXPT4JvDjcRNTet9KBhrELmCFWwV",
  "key3": "7RrwcftZhoA7qWQzqWN7t778aHvhKaUR156FMWoYbwvouiAVN7XJ9ZjhrRUySCREwP5ES7gAsaSLz2iNGBLRzp7",
  "key4": "2MVdEZkNLHzJ429z9WzhwuqJPhDY3odDpMR26rqTuMPTfAShTimLKs7byp2F7wYES9ksQCT1DsTPDvXH26qrzpes",
  "key5": "3rUzMyRNVYPy5Rsvugn5dgtvMDkvLsqarmJc3UpFZ8P4dpkMPWrVoWonwG7rWSWthkrt1eGzcFB34a8dHgJmbXGw",
  "key6": "5bY8TuFtkQkfZzjUCsi6mMGWCcYysRofG6dX6meuCujPoauGePGoUuamdyyUzx1D4FjCpxfw2hr74dTivAnBRv1e",
  "key7": "eHr7zcpNEYjGmR6iyvKSMSwMFnj2rZDgeAWNSjGz2sdroGfY3BuRB43U7JE31qpjynwrRSMHxC5LizFr2vJpuN7",
  "key8": "24Qw554xvsfaiW72EaMtWSgpNehyt9hmTqmtDraWGRwQD6dKT8tifnR6YMb6e3jWTkTTCAYBuGeGHKGGDb9Rzb8C",
  "key9": "5faETrzT2cEyECgssgTEaPvYwuekwuYeM8B8VC8p1kM3BvhxgJXLZDRGfHNVAAXsSMp2Cj4GhPB2Ak6i7WpJSZKb",
  "key10": "65jqrhDwq5BGMvExhCFqL7wiK65brQyodF6LqSJh3im2HRXwG2StqxwFg2uCTJBu4eDkeqw3wXokZvhhgfUxJGaz",
  "key11": "39SzTXn2vMj5J8jQR3ie3BYtKA2zwFyqipEfBU5jkeeR5BH5zFfXKjtYH6tNaBi6K4GgC3cAN288nQmPxUdEUTnL",
  "key12": "4dnuWDZQzJCSDtckPoPBeCoAqUGW8k89UvzSgy4E4co457MscHAY1YuWZNDhiyFQSRjSgxWpr2bbt9ZAKHsEi98r",
  "key13": "5Ud9XC2Kk7DBwF2hBnkhz8CBVRNPCJdX6DF9UUeCJCkRUkjzFkQNkntYB7bEW6H6VYLcu2Kw1RiQHwW2Yq4U4aou",
  "key14": "2xnwu9s43Yxbf8qTbEfZVfkWzFtbiEnogDJ63Y7zCBHWFS6km38Wii7CxtbP8V2PFXEz5hUdCmNd2no8RY7iyuJi",
  "key15": "2hWeHVsLcnhRMr2ucYoUTnmYJSwcyGSCcxi2HmvyepUJXUrBjk6k33Rr8P5Nuxxzm1hcuzvqvSAbFEqCBxMeDtcG",
  "key16": "4Gp4oyjaHx2mmfPPaP9ZWNGpCWJukMFBKFJ6fgM3Ye3ygzi2RCMcbAr7TpLemX9wQLyABY7CW8pVvFHNGeFkvhGW",
  "key17": "55u8Ru4ma4oHxwAadjgvMFvVn7QenKmUAEBbLkRCJvgeGYLH7EHFLotqHdUc8TahLrPNbi2dtDXzdEAiE571BBrb",
  "key18": "j8STue638JRxV3fnw9kvYBFW2QH3jFTB77T87EmCV4URRBgSRDk9JydcH8DrSUj89iXkZP4Km93hySBEoKfs6BQ",
  "key19": "5oCaA51RMDn2jpicBvunmujCna99Q5ckNJtRu7y8h1gmWwSEmwoti22jv2RXRBuEb2d5nbtstDuJX6eVAAx8fWKA",
  "key20": "56c3bs3hEFkXDV4k5Ko5Ak8FpGzg6gXd33BQ7yKv2RntoEjrwWCZ2LLqcfH5AwvTBUuT5WPWj15715WaZqXQRZu8",
  "key21": "5FTKVSapCWZHhJY8JYmb94dUTSdg53VFy3NJADbH2Y3HyQHmNSq8xkr9swyx7NPDi7eCYhF6zmGoLfUcj6gJ7a89",
  "key22": "4jhmsXfgdmbgKy4khYjCJWuQE5m28QSLaf4rTEVjfLcPR2Kortfv8wQj2Jc4q6rW7WQMvww3yBQsX4uz71drwZdr",
  "key23": "3eJqsgiktNUa8hUfiL1qcZsmHRh9XVmte6HwFJx6w4H5sxyjFmH7KW5ncssbr5BwiB4UxyTsd9EpQxNC1QCxEHi5",
  "key24": "4AwTk1K81gRmJmmB72DmGFAp41wxJ9kxmUDqeZR7FnMkpzMFeZ4xgRZuZpEMpBJsZ1KoxZywpgM1gs7Vxy7EmQgf",
  "key25": "4pAPmLXyxPBu8B4hDyAU4X4qrUJX4ZD9oesyFdFujfB3vnqyUkbwZ2Wcxq99yc3fmH93e3koAkes99sk4v2jKXKK",
  "key26": "4yU9qGiuQS7cvRRAqC4uyhUehJwa58Q6dZ4qrQ957za4DKbeeuVFkUqfcZ9miQenVxnPkL7VVG5v4tbccWJywccg",
  "key27": "1KEjbjqhAQmYMMXbGgStkD2YjPkQ2YJwSoJbgQHzkVo3mCLWiopH3ucF9QQHT4E3UJVYgvuwVj1Sfzfg45YFGFY",
  "key28": "27eFTvut5NJBShpH3gjcsbQUuWAeMxMBTCs7vsruDR3JfPLTpSDeGqeM2VgJiW7EMoYXyPhaD4Qok4yBU1xYnz4z",
  "key29": "2NodkRjwZbwBosKJ6F4svTbP6Qq8RB2kAsrJKQxaboaVLpjYjAHwfp5qb3Wyqzo7jD7oapoApPQbJ4jQakbgS46a",
  "key30": "5JCz8nS5CUHfySe15Ns81SfhSkp36xqZJ3FT6poNMYkKR3q3rgFusX9LXtWedCGAo6ANohg7gKvsmrmx2suHzfWJ",
  "key31": "5w4uKVFtLQTxhgAKdJVMm3qNLYh2fC3oVMT5XNMFpeNCf3YyXYMdo5RtftMUzzNLifeCckCLWFaX3yxLJDq6egEw",
  "key32": "2kWsovYYjSsCVHLNBn33AfFSYSgw4atyG5TwaczdhPovZ6yJP3zFcJ63k7UymDquT6ks7US1oEbc3NjA3MGQEFnR"
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
