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
    "5M34K1vB91VeieX8tWZ9efBrKNPMTb1xS5Vum7zAuF2nm3s7ADSCbuSfTpu11DBRHxYjSWjxyyKXFuW5Jcyi6piV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xScyCyYYfRdnrkV7qqvM73gadxbh5u2ygFHayPbt63UiMdiAjjZU4aqVQPnvnWTPZbNSBVC6QzY8YVNoY5xbsSj",
  "key1": "57ntXhJ4ybWETDUY1No8mp1LHKr9ddEmwyNveUGQpcW44hfBemMYyeP8L4kWwLbWdJjhsinJRJRvvLPJuo1NVpCc",
  "key2": "4rMSdSdtsoEED7WYhyPkVwqrvvDWJzFwhyWS4NvGzQMEMeCWBi98EyBi2haviktTMp9rkTHk6hGmZLa2HG42vkHb",
  "key3": "3cApLHAPTywZbzrH7sz6T7n3C2mQvQYgUbDWEELMLkjW34sJ6uk2KnUHRsKP5hdHvbXN6cGjvibdL3iYKjNZrASF",
  "key4": "5ihzyDoNXY5M69nCUbArbMvAQ2NRj9441Rcj2VUvwh2jgYtwGMv9dFpFHgjRRm5g1vtnZPEyuHQamSKTj5Xo52jg",
  "key5": "2avNhfdUQgoKg7bspwSvpXtx3ZJVBVNWHvj3h1uwbWA1HkSL1SfyNsg5MCN6u6BvaRDSpSLBNzUTHHy9pPKUbcin",
  "key6": "JK6oan3jHwBSvCFdxndK5WHMfz6gLTHFvwHPf3KXbCsXyfJLhnheaBa4KDM5QBMMJR5m8aUnhNDhC3qdT3E9FGY",
  "key7": "4mER1Ln3DS9vQF2r5J2MKj3ucHjfGd5ZDD1Dnm8A2pemoRuRtsqmkwGwMYfbBaXaPiZX58fEhL1hwC2TdRvumApS",
  "key8": "4ttwKvfK7xC9RLtK9VecU27LELh13ebacAHwNU2dLNhJ2nkXbH31fBSBJKWNGdeJ8XybVkcsFJkwfWsXu5vk85nj",
  "key9": "5NV2w8LuoetKrKgLvofAhqUwF5WZ6vA5phZycNfpYQ3W1SBumrYcX3Jc17Jy1zABujKkvezDgPPmhSrvkuTqHgd2",
  "key10": "2gH34RRU5xFrmtpnGhneY28bbzFgzTsPknC2rnzfYRnKaYkXuB7MXqQ7tyvtshrbjx2FnnLrabn37cijdYd2Qw2y",
  "key11": "WLMSJqHP7B9nrg7qdCHFNR7Et5jDfbhG878Lp2kU4W7ghW4STL81JT9twkZEEocLUciKnsHpWfwL9CcNvV9FXDH",
  "key12": "3Qjfi9ZMCUp7Noj5WpzGmZQprpHPxV1FNkDniaFwL6anPVTUcc9GC1oUZWHHvgRKH1cHQ5k2kJovZnUBXQJDAskn",
  "key13": "5QdBZt3fC8URYHxp5awKMdJwxuRLgjxMq6EDEZyCPLD3XLDrAZr3y4bqouMqcHuoUy5dSV8euvw6p8Jbht3gRoBt",
  "key14": "JALR8izPMcm4T8xsviVgYpaWGS1B6aV4CXyDSLPzrLiYTypeWy4jvTAPAjcTqiu9qPN4jyFTcVr6tY8e7gfpo4H",
  "key15": "4UCSLGitqydgEhXNkkjd9wgNvMPtLp4WVPThepTVwAen2wzbmvu8RmvEH1xtmraAv2QgQmEFjWrf6suPjSqjL1cH",
  "key16": "3qeVm9KSQrfLnvdoJHFAmGdXdzC8cBvP6p6or8H5ZSpLjYxSSYyAhBLYAwuJw6JVK4124Q45ozWhgnAjGc3kMXuH",
  "key17": "5JCDRBXDwEKzp58MN4yH2fjwWnRpmoNtyW6ca2zDQjMpY7S59okyMj5qNdKD68WPZYWDLXhRLoSX6ba6h9xXbLiC",
  "key18": "2hgTsuyyhbCHpjkEmHkTtbDjA3Z9DR96nm1Pd7kFnPG42x8XSxYBXneXRf6acphwgKR5He1MbHMh8i12EmfuRr5V",
  "key19": "3tYAjd5NYUqdYnDr8mxRcbEFce8JjDrvzYehGgTbQdFLXFJAT78uzu984yHC6ZzXNwbP2FhebwNzSmrmrByb6aX",
  "key20": "3RmaCYzxhCK5uit4tsLb8hZw3BdASKH91vJvwRUtRiboLxL2Lyxkb23UFnhbLwicVX48ZSFdYc1CWxETDE8MfDqJ",
  "key21": "5kboqaPnFmhPBLTLteozNZqKXdgvtPujmV7x6isPxkMtvhqTg5SWTtSLjzVK9Vjfn64MsHXKWwxSL4x5vjrS4LYe",
  "key22": "4xbhrqTNsY1eNgiHni8UgfL8tAqnH62pkPchzALaiqQ4NQuv71mGVMvkzfi3oGMpyxVku7dWW8StCTBYb6amQZfg",
  "key23": "3vZsPxZMauNRYqh3CeYypuVzeEh1Va9GDMkWwiKMxjLeGvWaJkaHnd6edXdiJPXGjKbieTfUcEKbmQLq9sepBB2R",
  "key24": "JjQXcJDQuNz3dstnngEizMJnDFjTnJvBhXaTHtHh82wtBLcFiJuBtzjuNeRqAHEWewHAENT6cgr7baJfgAPCwL9",
  "key25": "3hq1b3jCz6M7QokgpvtN65aQCFPPWsNW8JX22B6pdG2KNWDdQCJHoAeqiD8ojiGmJ7uzMhqCQToovigQhG1PrAdZ",
  "key26": "5BhAPymYfxHpFEZHg3p85gyCmT4LxaKWAdVA2QVHUjPKYS13oj2XksvX2sYnCTcLMVQdympvfGASQL2fHruwGkk6",
  "key27": "66HfHq89TN8KrnZ4AfPyRBzVdRHMBB1pvvozVMJRMcJ9QhZv4xZhJjmGBn7cNyE63KvLAZrZgxw6QWPgH2ahKTja",
  "key28": "3VJjSPPfEVhUDcHMQ1wFWeT2khjKHmcy5cu5W7kRoo8yUia1Tc1L1NEwPGYoQQw4LC3p7gAREqu6c1sAwmt4SW7U",
  "key29": "41fSiuVox7ZQsrXoWpMQkgZYggLxQReGF7M4tWoSzC4MpASc8mxMTmJbkavUerZKn7g7Ud1dUgZHG73WTECqNKon",
  "key30": "2GS7YwP8F6mCxMp94LTbgbaiQfowXrVMvbd2pE9wPVEdRwF4r1eqQkCbYtKX7oC8K3akwN4c32U3D57tQsbgBCqi",
  "key31": "2DqL48goA9YJxvkHUuFssXZP69rsj2WqdE5DYwFPbPugSnDcJHTy4jDN5pwJvu7otqEZrvK1br1N3XoHPgPfHPYD",
  "key32": "H7HRPH43DyZW4kmr3rUcSurHV3nzxeQhzvrwJoAjxsAzzTQbLyP3bkMd4YZaga2KouQKp822jaH6Gta3hrcK7Z4",
  "key33": "5CUFxcQ83M8t232TTtJeqt22Ed5eQyzvvKGtUDCEE9NezhRyfwUE6csrkGaXGB1TbURGyfUzVKbSRZrcGVQ8o5AZ",
  "key34": "RhxisstSYRKJbrMxA3F1pZqBxThFBqVGzwncvXJzRewDTWT2DiD3bnRWmZgWR1WTsJ8jJheyXzG7pggT7vYhhkT",
  "key35": "75J29JgcsionoUCEao9YNqSxdxhnBHeo653tbesVXLWhDBHkKA8QuRGcyPdjcYv5B6pDKtk8MbjTGK3JSYEjdFR"
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
