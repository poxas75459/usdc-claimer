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
    "3fH19ChTXwuhTxXNKAaDX6cURWkHCvN5kWtD7mhXkGx7Hz1bwbPvHvkd7EpEN7Jhis64dUzUpEzkoKNnthprXWL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3scNjMq2JPnBiH7Zb3SPpC6yxTZDKGpkimTXjkF2iz4o2VidgowPceyh3gkya56PuTzspVqsyicogWM2krKihZ",
  "key1": "5wq9K52ZxkSzrTCrsYiwkpmu5KFNsvQgk8LxBR72N7dy5jdVMjJqGejGeHWyatrhFT4HmUudk4tVpgBY9W8h4siv",
  "key2": "62dPVrCGd2xgTJCZmCuYncZfxuyCVJQLUqgT8mAYfreiSNvpem5RGtTtX4tDvHZx9sQp3qyZBVPnxrpxnycgMGxp",
  "key3": "2sSB4s9okF2hUjeS1auhD7jF9atgumYAK2x4FKm4jh7cwYjss9JLmuowGjTepuaMvphSSEAabEaSgAeAK5sVS6QD",
  "key4": "2B4LKNqWHMRBqprjt1sipyoMkMVU7FRDxUJMVBg7Nbdzi3qTEqKveThXw2spmt6mQJq7uzBHPDCRDEhZV9fBmEQF",
  "key5": "5bTN6odSpDCGADw3vn4E7wviNxmETQNZemrrsGj2s7cKLbHqMa6ntiBC5YRW48TWFBV4gAfz5ebGA9gAuaSVmCJY",
  "key6": "HRqRo7MFk5RCqvuJvoTB6jEKQzXGDynabqLwFpgYLjUng1BAgU3w1HgxdHxmEXLchj4rikX322X5idT8KEuPdcd",
  "key7": "5zHSag2MrqGLFrqVie7cxxmfURvcA2sEtq5N2eu2FtCYBPTB3ncFH1PrTvLUyvznQxVA6a7XHUV4hzNosnVjP8xN",
  "key8": "2vi8ikNdf3wi4Y9MA8kdSZxVtfqRKn57kazB8xVLb8u2rGhEPcbE8zoQY92ZXPKtnViKj4jmg3xATg1p7xdG7P6C",
  "key9": "5AwJir2pvukMf7rMNAbourwCYz3RNpcK3Ai6a96cz7zkYfAMV7hLAsCFCPjMTmiNzH6yHV81i3v12R4nPmm99au8",
  "key10": "Axw2JyucQW7PwF329g7Tq6PyCNTWYHBpuWFgBC1wX9nDu1G3EpqrRrmmaUcwrGeZckqrPeTPNvtwztdWH1NmAP3",
  "key11": "9myDhqzzpwf3pneRvb27ZhjX5sy6A7ZJyYeweg2EazSWHSKzEpMM2xGf6CB7RT3mJg6ATKWnh3f9JivuFeVvj9c",
  "key12": "4idmy8kc3UsFtUaMsLFrbDUemHva5voXjcFGqTyMG8QUUAg2b7YKV26Me9waw5fzs6EH35CxJxpfLnYdR5EEtXos",
  "key13": "4es2mn67jz68g8PziXcCRSMyJxccGmTUJM3sRzxVJ9u7zV2wW8pEr5hMFmT2Sj3X2xJ1KdxFb7ADyKBHrD9Sf1HC",
  "key14": "2pw6WZCbNbpqasA8gZFFRTHQB67F62eMag3Qx5tpGCmV3EysVV8MuuwyEpMyA5kug4tALP9vR9q8hZyTQ3bcqVSY",
  "key15": "St7BBsKWHidF2HGS5ws6EB4puT8Jz6tQLycmCZxksVuhA9hVfc3nJSS6sYBbMYjhB3xUtGRXaFTCZqsBvWivKdU",
  "key16": "3iu3595di3RvFE9dSMsLNtXeK6s5GL7Z6KNBvcpTMC8wbWUPMJbaMKSjAEM1bLmQpn7UsNaKLk7D35Aqi3DNc5Gi",
  "key17": "2XjwRDcr4dteNa1phG6tAcgN38bNevNtWgsV7g9mJt4Br4NFutA9guoFqk3fyVJfwnjBeiRHA7xLbHC65XRJKVN9",
  "key18": "wa6xA3NrgyFRz5amLCcuaQaxnBrvfsLA1cS5Cm4dcPhmVV3zvVPE69cL9ybzpX5RcPua7bAsc6sozRMBhjvwLS3",
  "key19": "C3N9kjpEg1oCxrfPFWn8cYMDnAMcFqMyHNPyjQNFDaynYL2f9rg2aGzhXoqNWv6x5MPPkw7L4QDGcB3EShbtVyL",
  "key20": "nWZTtN7Sdx1gieKnbazEwKzsYqVVno7EW9ariHJkcDnE9BboxRXBAYZv3zW3g5oHnPTZnZRty3ncvNXM5xUBqaT",
  "key21": "61uXWJ83qAneYa52gdMa4Dcpj7SGzA3QVNk6uvcqjfwJ1v7RnyVSoGHnYJCQK9oU3Mv5Vy7Z9CBiVvbaB9V8msfE",
  "key22": "2M5XhjBUGVPQ3V3v1AjfYmAPz4bcAEjc4ow8DSKouABPY9ymvJ3LNooU7JaPrZvwQvh31jkYDtPZJgDkrjXPSSct",
  "key23": "AeuNPu3YerDLLgTJPRyUjLfRzyCWxSt2fJyxsGoMnpHxVTv6w6uBuH9S8ccGQDHGchDFW18FxiNRvtKxBEMY1t5",
  "key24": "RJnxNu2wYFViDigCQnkJCAsTwQ1743HzCGiuwfAG2fPFDuDqakvZCw8MHuPgnoYgBicgg996RTzpiHVZ3czsbkM",
  "key25": "3Q5UZsBScBhcuYucsTkciheKYTqSzboyBstsZk4gweKEJYjBNMX9aT5Ns2fbqCYqZsvNU73R5zg2xvnsATRFg8Bb",
  "key26": "5hKT8S3X2wuq3KGDdhgebGYNACvPCZmCWXnDS3DQhwHAfLXvRJQojA7rjrvHu2ytKA9Mebk6dmCUecaYbM93oLc3",
  "key27": "2HtfcU1QYWRNPmiPtMcae2aWuqFqaQoaQ6rSdVTwtXyHmYNhcAuCV1i7qaQnsnRX6BK2KEoy6smzygTgzArLh9Fs",
  "key28": "3UvQeSYz8VpQKykAJjLKYS3d9ZErWNSJ1QP8PXhv3qmXCCEhv4GnM5MEMtSwYBcjCJ69J2sz9Tzy2ucnysx72tDW",
  "key29": "2HQU4VBAfHMgZ5FyEMmAfuBDCiGJPJyUJv5ZXHyZJS3S282Wk6N8wg6ZMs38koizYMZXfpXf9CETSvCTBAH5hA7B",
  "key30": "5x4koTAiYTP8VcGSCmKxbyxCTeFFSqsqvX1V7itx7D5gVp6gJLz3ZpLc3WiTQoVroFhyr8eKnNLbmduykQFwAH2W",
  "key31": "4wmswi39i6FCGTCXEBy7GWj1YxTwENXUAbRMPcZEV2nRfhjjVesCrGn4wbHPFmDEqvBZxgivTZZRbtKhz3KwTa4b",
  "key32": "3SWXqpiCgYDyPpzap8AHZrZNby25x19XZsPJkERkFm8dkUTLTDxAyzs4o1bBHeiNrsG8wpKeLFrk1nM4pJgYNn4a",
  "key33": "53nKGirsr8QzfQjNckJmQpGGd7od6to84tch531ghPJM7a6gHtpc7FvM5LskLeLK42P4PYYoaudB6erQF4Ex1RVo",
  "key34": "KpjFED4My4LZRSg3a3NuPBUnimtGjH3NczLMmiWKZtV1KLfL5EmzZHr5dFtnvXH6NCdhSfuFGSKjuietUaK5QQk",
  "key35": "FFsEbwRQ5c1ZXsCGUnZqGs7Ki7EnAF1BtYRxcqodprwfsKoTmq9xaQQP7BkvDDLCSB1QewLtwZpb9xeFLfDrjuW",
  "key36": "4udi4E24KX7z3NpJWfB2RT2Ls7rP4miekU3kFPp5ed9k7t2cMfq9ADLjuDbXn1q6NcKAbUQSaqLsFEmpnjYry4Mb",
  "key37": "396suFYCbEWCFmE6DL3MKXc1EXhu634GD47AaiTZBnRUtaSWRSPexSKAqYzpEkcRViaQJKgjgQWswkMkLVdrLBAP",
  "key38": "ZTsnwoKWznGwRhVXrJGcwadGVpUgkr6pmHi3cx2LMvnQ55nCTT9jRbCRMtL7DzG7mPibiu7btYVrNTBsM78jipe"
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
