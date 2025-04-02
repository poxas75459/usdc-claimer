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
    "URsht7bvd1ycXfSHf9yxwGvgM9Q9rD45woF5tTFqV9BqxHbmn8g2fhMUe1XKHmKtkiytZdMMg8DE8X3G7u8dusb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGKt4rposz5UjLNM9TA9m6o5vvsR65qBXromVVmsHmaobtzENhHVQAQvWQrrXvS3153sedHXavsNmeYUBdctibr",
  "key1": "s2jhect6JgRJ4ekVydc7JZDzhmyJF4jL7taTfMFhLtuRuZhDbAXbXYrkQVv9PyoM4eunNdUMwPSXAdx11w8gp1T",
  "key2": "4pu8uUBBWPX1c8BRrguoxXhcWdXPGxtMKbjGfFDzMNssyM2aJNE3jqJdQynReJYzVTbfgXSDnErXarmCZGGqSbR5",
  "key3": "3VdPja9tiEwdRp4XxXrmR8p1BZQeQfdYahjrPNBFSPFN6eKu44sMpK8e86M16GNH2J6vVT9rYz3rs16YHkke99h7",
  "key4": "5L7vvRg1Q3tUMtKbRHr5X65rJmjeBsTCQEhSnNsfuPwW2Hz8ZbZWUhcRrxD1LYBcwnJ2LFSn7w8PV6PUFmeHKg3y",
  "key5": "3W6bUgrXZ1Vaef1XAU66726CJjqyGrSxNxcaYu6MgPn3sVJhAqdZP5PaRqEVkoytYrKQG55PbvMq2UHqzyCZiTfc",
  "key6": "2PA8qc3k6E4TDSr9yVHSm6QH55h7DLaNSsWkufxgSED5zbKfK3v1CkEBTLDzqMQ7HaXi3rC696LhPT2P8wiZ6PQJ",
  "key7": "jXujDj7zVBtRNAFtWwpZ6EHA98w5CwENRh2JMqvivdaFJewz5ya7n2tU6LNUjR7KQn97RZw1rVc2GW7fw2MZ5FH",
  "key8": "5LBVsDyh4TSgZPS9xRuwD8cwjXe6trgKt5korJa55tpmh2ws8pUxCnq4YRKVvsA4F18J7QxakoAiV3HadPGiySZf",
  "key9": "42V4BfYnokMMPbWDTeaMLdEZsv2heTa7ZULkr5fiHWC5vfynFX9z15UzoY3HEcnCX26tkE3i3D7uacRaknAFhQsi",
  "key10": "3VFVoCbZbwkn7BAFhvn28KpZLQA2qwmqiUYX5eGSTcrzLLBMN92CHYrbg72Renb4y31F3hE1CrjF1K3ZWRdEKaX9",
  "key11": "3rKaWtBuhc471A7jnCihAb2iF2z8NUG46ZcDwn9EuEZ3JQjSWHFVQUUyHLmEfauvo8AwoybN1JDcj24qij5BAtJq",
  "key12": "26RBidbkA8KXC6P45p65kNQAHC4z8SnC4Qr8ySSycKsiADfExS5L5CdY9Pf5F15NxE7hPKygpiB8LP7qc1CJd3Ag",
  "key13": "5E9qd7mLX7cYci9GD1FJbx28MsAtdhDWVnvGnKJ4Zxs7wwkJQvysfhrGMVGQ9AXUvcpsZ7WSgmDq5L3rSPjmuziZ",
  "key14": "vw1g4UVWoLg4EKUPb2khA4fe1p1xgLfFkVtH6EyUh1ex2YHYje4f5t98VJoop3dNFBfUowUZZDeEF4cjBNs1q9o",
  "key15": "3E2GtdoPn3eeZWCGXbSZKHkwjEp2cYeCtWpTvpC47hX4cYPWfExwvQ8CrxZqrtqGvb8n3vZEdKGztBiUYq3eLNwo",
  "key16": "345Qn5GdjsFqbf7soX49pHeCv8WSPYWR1xtB5DZZuMV9CerfydP5fcDiUpXRc3odquXWc8qYcfVpWXLfWG2MtzhT",
  "key17": "4prULEU4xHCTxvZhsKHmmaWai1VRnJENAbW7mgqyWst19Xrdg6og9noZFXGuWmnwcq9tB9Ryshg9YDLaXNtFZ5EK",
  "key18": "5rZWU3rhXvcnTGxMB3Uc1jay3xmqxKSxiAxuu25Se2tpc2RwzShgnLBJ8YSX1TFCJautf7ZiXvyuvnE8uBEsfJTr",
  "key19": "4KSxkmUE6u6URVnK7iLt6S3fMNY5oZGdLFWoss1CqKPTZfWhPNHRxURFBa8T7WXi9pmBPxEsR3vQwAFMdiAn9z1U",
  "key20": "2zgzpQd1f5emWvs7QdvRM4KQMxc9hp9CNVfqXTCLUMxE9BxMiz2Mx7vNopZ5WFGxEgRjCJZh2UHWXPwjoczDyA2a",
  "key21": "3nFKuVQGYG5iA77WeDVGEvPzMuKgZT4iJ6uLT2nk1hfLW2jsfzsfmQ2nn5CvYgRS1GaAhAa8Nt2QVddfAHDr3oMv",
  "key22": "45Wh5CeZ6LWnboM8QhwGJ3bnFov5Tb8Ei4iHBb2GnvspEjP437jeQdtN3DjeqV61bjadMGazJRUm3BKrMXc2yuiB",
  "key23": "3BoemGr338agKrvXzipFnF32kJ3DVPNJkyU3qxdSLB1rjCo1NAbkQudR6D8TcjeLNyYuTxhNm57sMGqy2HS3mT3L",
  "key24": "3qsXujPGbbhpAr3th3YntPnA6zh6mC5xmYyEfiioRxuQK3HV6rFPyz9uoCMKiZ4rAEZC1fXnGiMaDASh1kCDDpaz",
  "key25": "3rgoR8LomaGLqyFiUdqTsGz7w8zRBP3ox4Xagt5xmdtQD9dZidYpWe9kB4kJMmGcCQh877GkQqiG75n2xD1fYZnC",
  "key26": "4y5aaT1FuCct2kKFkqsfJtFP8rTwPw3qYWyQsJdrTHU6GNDBKMgY1xU6E3en6NExhrvc7dQUGDTabr3Ca3FMdoo1",
  "key27": "2EywoAhSE1dTKUL6KMpBodwKrfU69WNhzTgBPBCY8hNvm6GcsvKVmhtpU5RFCYwgvVcvCcwVCBrke9NUtZm2H6qs",
  "key28": "3azodcy3MtxfTNm6anFA8Dtyep4pdaxV7QKkR3G1FNYjHDM7VSHuhFWpmVDeBVMeHo3dkxZ1P9CnWLCHQwavLkTz",
  "key29": "63zNaCMFNfA6mPRYWr9ZRz1PhgGdqngvNfWfZ6vdvUd7iBQB6u1Jp7uneth2eXqqqRoPxxQAxXPpC5gHQkM8xGqL",
  "key30": "3f8Di2GA7BiDiAU6raYhcRPDYJtz2ygFZUPQQjrcjFUsbhr1qVaZ6N1QekUKbWY7U5vFsRqAxUBCaMpkay31kwHY",
  "key31": "bf7KcwCSL11u89AQCPNGpPjLWjhKLgTbTuHuaJRm855rSrYrbScH2hsEkmCyVYEhpvmKrzQo27fRVDas5cwMRuX",
  "key32": "4k5Nb6K8ANK5bqBx1Mf1smTrEBKBEgmZWoKKzmYmpQhJ1kw7GjPxoNA2172sMea8zUyvGnQL1rJDACANxHDWoRDo",
  "key33": "4oTFNGappKgDdbJqoH5VaTRe441zS5KL4hVFEU59YF4Jek8crNQkJaF5CzDeixcLi4JkkVfwLrpFpDizvmAtZ4WW",
  "key34": "4Ht4gPWRtHtX4SWXXkjPPKpyRBA6GAAef51o1f21ipHvJzHT5tMvaqn1NChQsauv6qZ4DmxAYVQLMBgHgK6uNiY1",
  "key35": "3zusWdtwdaCtMDzkS5JmAEjp15tmsfELBUS8aFG89nHWZTD3gErD9bU1GdBBu1ezwvysFwcjNx8WWG7ahA8ijfAF",
  "key36": "5kh9vDueRY9ptTPqQUCEGCkpg5iLrrgEeUE8gZ4Reb6yoEKrGKWkyyTdFE8EyJAtqpEUVBansphzsVzeN5m1M2N2",
  "key37": "5KS5vY3QBtagHUnBpxyhMAtSdkigqhkykLJXnr5HZZUfFqkqyfeQaDteSqK8TiUK6jyfJUTjAWK7fLjM8V7PQGqn",
  "key38": "3iVoGUZ59vKggt7ufwy37Yz3Je91gGFHXq1EhFCWGKBDg4nZWyRhaXnmEJReXZhtuSsbB3VD5k2qSvSxzXsRkdHF"
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
