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
    "5rPeD3nnV3RkspBYUy7DCFTHmGm1yY8RWQwi73vMepifzuncp1EWQ7mvzbsNVYFMGVau9NWryapgnZBuNs2oZh65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4szmhEDtXM1KMyJT353Q2i4c6GYY3vJaQBZdbyj5XZgHVt2D7vs9AFJZkPhKWeHc8zCUsnyYvRjsu61hqZJtyV",
  "key1": "4isZQcMJhfnDau99fwBoAKQwFimKgQa1Mv2C8VhFgpjFaCgbExqQrZeMbcp9zxVpErhBM7F3ZTYf3L4iGkvPzJ1j",
  "key2": "3kyFq1TFc6uDwTUoshMWbWfFRqxhroco7kz67g2sSnBYD5V3hjhMTPMPre4oY7sCPbummy4ZXCdz6SjcLm88zgq7",
  "key3": "5vdgR7NQgok6ZeZz1FYpzHxa4MhbCN4iLbRKzcjhWDGXXyJ9CVEnSTAudHvJgmqkgQLBkBTCiMUvyKkLqpcLpKYD",
  "key4": "2eXzBsWohas9jtfvjLpPG3JCYGsTMVFRPvqvZ2MFbz41jCJ3FJk9eGVjdy5MpeVDAY7HvG3KWxaKnwe89zJTf7ti",
  "key5": "3t2ZqphbqvwZoFdiQebugA8Ac8ZLxi3gH9wNjMfnb1iQa3BsZjRKKPs9oExKemf1RUvgewhgpKoq4Pe4MUgbXwoD",
  "key6": "3Mi7XUWhHMAvRR5jRB2QsNUZW5EuVRSRjCvs1AAV3xqMd241ArYaLTf6KABhpgXsgbmWHGz7HnpE77cpukqKw5hV",
  "key7": "4ogNHaobjiY7QxnBawsLALb2Me9aVgpaNPPq1fceguopfjoRmPdMfifNk2CydcxKSENY9fJbe68efVdLcuCJAVxi",
  "key8": "3kT9yBrspCgWuW2N7bgDFGj9sTPdbbDDc6kDdbMcqFzxHUuekeMwTkgB8mPtSZNwXiw1uq2a7Jg9jwX4EgiqEidn",
  "key9": "EPxDr8XMeX1SNxWqYJV1AN4L4V79VkURUhsidNSrjmhbmG5VVddkhzzBjs39SKnGWwC31nSHXCdDSJuxvfNixS6",
  "key10": "cuFSqpioYVAbwDtLZKLuqS3oYC4Diq85Cp3ZqyyJF8UtP8icFo3iynjQ3kTuTi4n1mrwJx9cHw7E8xuPKVU8Z6y",
  "key11": "5g8XAdqE99QGyrXs7fcfc6wDQUTUxwKvDM4wEgXQZVsru93ChJpdvPNgsVSoed343EBwhpJTTudS1ky4fAbVwg2t",
  "key12": "2cxxTBzEDNsrxwKhhMFhPjYKvdcmJPZBnPWbD7VXbWbN2VaSV8kpR717gkkaQHqpeo5vbsAmyfGZrHswDS2ZzjMa",
  "key13": "3vQyWNkUsiNq741yjLi7FFFYd6ASwZtrss3n5c1mwW2xvBAjHKFXRrRvVV4d7De3BjDx5DseU44BNtbTbPZseVBP",
  "key14": "2M21ekiAVYu2TbVPsdTuWNZUsRTNkyeK6Ve21KTcWafywqjBKiKuCFnouhXR2WmMFuexDpY8JUSfhcNGnGnY7X5n",
  "key15": "48w4nk7UHVjYds6Sjkirn6nreG142i8eW5yfCs9ptJGaAgixq87miaWFpxaqy3rt1pMQxr4K8wYNM16ADSHezZmk",
  "key16": "3yZTW4zHcamtmtnkmuAcaTVu8mLMrJRSNJeME6h8fuiQx7ZRFENiDVvr1THnzaJt2mBveV2EjvjKFjZTRPZmzTYQ",
  "key17": "4ucFQrVA3wW9qpbdSmBY7Qq5etBd7L4attg7i87eBgZ1ipzmRanWtFndy7cK9oGCtztXvzo6S16FfKxXph2aCPiM",
  "key18": "5QMMzQnyaVzNvswSmpcqtdxo2sLSF1towuQHAzfJA8qeoA2bnWpLYXX4yESKMd5cdxFR2jyJaKtkVAn4nrfQ9Hgk",
  "key19": "aKUSM7bUxeCR3r64gN7Aexagjbre1GM53Jo2RbbBLrFDdmTSWZQ5e9Vh1ZkHQSUog49nb3vguJ5HwVoYvYcZeZW",
  "key20": "4LSAvgMUGSqAu55Ntrr3ZeQxPuH9XXJx5NMTPUAZU3ihTsScQMRJedLx1CiG9B6zaeMqjLBSw2WDnREcc3hGQdyc",
  "key21": "4St5TjKdFGLjJNQkX1h2UoTMaWoQzQxTFaK4F2PqtDVBv7QDS5Wua55vBcsiDy1z7hRqcJ7pd8p3JdtFH11QS7cq",
  "key22": "5MGme4MJ2X8TsS7Dy91gjF3W3r6svLHuA4kphTL58pJTAzYj24jfTvKn42MNEuoR6GAybzcuLHcCpsjRviwMRPan",
  "key23": "5pngLKdGgs4TBE1iT29MVjJafoWBVakQNLEWTSJbTrAp7V8xywybxAaSgEuoFkM1sodBE3EAb537hLU18i9jD3WN",
  "key24": "8vufb23oj9yW33xinyNFanKn2rszC6omDX6kBTQQ7bQC642YBMXgMxJShR7xJCbqAU7BCBYaFPHCsf2xhJzCwZF",
  "key25": "5x1jdCdpT36hMDvsDKxKF2iQcu3ypVvNcn3Uz1Hbjkt3XwZDjPYiuYj4PDE6R5CxqbqStCNEx7ZL17BrYgXPvfwF",
  "key26": "E1pHJbvhNZtcQ4nGgEdsj8N77qAdheYt1wtXP8Znsky9UNvERf1J3GdzstRxrqxSg5Wn52qq9enNDALn6DZufMw",
  "key27": "48s4nTRHGKvoTkXDoVk3n9Du1qRRFn1ATwkb7e3oxGcpwHJTGcLgZgZsnDQ2V5ENdtwa7PvqCKgtFAiU4rNs5mZP",
  "key28": "r9nJYAptTe9RZs1hp5sDavWftkf2EaUMrQhbvzMAUJgNyevEDMGYkLvbuWG8ifK1FYiW9fiGpW5eETqicpY7UJd",
  "key29": "34jyAJ3qeEZxMRr7CJjhpCiFhywMTMb1cmK3jry3sDNH7mD9gjUrcPWFWjAzyrPvaBtxctcikrJ1A97Lxy4Luegx",
  "key30": "671CbwSMKNPf4UknbPp9NbZvuhi7Dh5XWqV4ZRxXBTFhEGTZo2ZtjjC5HaAJujU63ESyvHVuFszMJEtn1EVuUyEQ",
  "key31": "5vrDLgEYRmrHZNnhjDgFm1KURtaCRQ98CCg6JoStcoLabBSo9i4t35YKzXEBbDgE5WCi9LEFNFHzrvjrrvXYFUe5",
  "key32": "3Hsnvn43aRnemmSFBiGLMi3T7cgpUBRcezkr9hNmV7JeJKEkMRnA8eDPRUtrm9R7CK7KRW9SzFZXDyGMHBppGRjg",
  "key33": "2n75ftdyuxsz64vs4y66VHz3hk5xTvBdcHwyYphg2DQpsJZivircM6aF8L9bYfnTPG5ZXiXb6vCiwP9KB3SYKQso",
  "key34": "5ab83DHAPQ87o2jc3VtQf7WB1iDshem7xBBV3q7wqTNbobqKVVw9mo8MuGKt8HvthA8HUz3TY9reVr8syo2Lwz8x",
  "key35": "7NyUdD6VqdVtjRqxHiro4StT1DKumDFAJTdMYrM9NCE5hxKfe1z3uKRDNvM426Zz4XHnHPqzmgvGWmAgcq4jJdW"
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
