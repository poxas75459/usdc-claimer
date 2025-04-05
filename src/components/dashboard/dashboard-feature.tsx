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
    "47oTaaXEyQpLJLYeY5PYecYvUeAFH2ojV7UCdfo5Pkd5uNfVhf2HFuC8dUSkNqLzf1CoWeYseVTodyifqj62kzmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqrBQYLrbzBvBxj27WVJoSp4VH9GZNBBiWxYaSKPnWPajxaTGZ6rvYfj1urLeNrhLw17LQhJkva5t19ikg7jJU1",
  "key1": "2aTKc3Vg1FcPujm7NYLawS1Rjgky5yEcRPbc6SvkgTEAuHSetkKDMEfFuJQArsyAFELPtUuRrjaZnr5BMGYJxN7u",
  "key2": "AXtUtxkSoQhVojGkksMZwcpakudByCh5aVSjU8JHy7ajCTRoDiAjAZYp1XM1oqq4hm5BUyTBdTkt5h9DfhDb1K3",
  "key3": "4r8goFQY7oPy3xHqkoFTVraiVYo3rzoCvg9GAcwQqoaXUefv67JNPcsEphwZeBTs5ApRun35NwMiKH5VYTYDCcKa",
  "key4": "3KnuTms75nu45Ci3ZccANfxQFmbGiyAAg8JKdJ7TTos2YCpnamh3H1kiDCAofvvzmF9vrvxcahJjf362kYveiVzs",
  "key5": "3adVseLJsX7NE2wBmswuoXLZqGNewGgEwNuEz8rS9LcqfnrCskXCyKQEShCHKdLp78maNAwauBQJVJB7GtGkjEjk",
  "key6": "3evU68FPSYTkufP343XnpfwZFQJiRuB5tevSyFJwjwh7uoD9rvvK3wNYfEDRCjYrGEnQKsB1SFfYDdff8A7rXCs2",
  "key7": "4CktDJNzb2eA5ktjhJKbn3giseeXSFvgCbKAt6nkRftnt2q8adeSGE2kyt9dzMTgFH8F2AqsY3o9XvLAPmNPbSVh",
  "key8": "4FKmXdVrdiBYeT6KAKE46pcpGfyswgSw41zomUU1hbB68k3WW4vbCYNBRddVzMWeSQxTzpHsuzKnwiJHpzN6pfem",
  "key9": "5wv21rb2E5q2GnjQsv36ZBSNeADbKJnjCU24u7HHa2Y9SX8afh8ECh9BhzPkAYmXNedLD1EtQUKop4iQ6b1z7e92",
  "key10": "3xKFEcyqorkSRBAdvMnvt7kPYYzrWVb2EbRB6Due3Lr4BgjFVhm1FJYvRXMUKg4gNUSqmJ1Dt9TKTME73CgQAAzv",
  "key11": "5qBFRHg6Ncw69oSgSrwaoirkfgX8FTsmrPwGuedGnY91g5sjZDbF5VUHNewFmjcMG7GixQPEeVTsiSkie7aMmcws",
  "key12": "4vC7tqfAHDE5BspnLsgu21enCjcfm5wYoA1a9oa5KBusZRSRDfUWaqxGHowVy16APbnYPrJrwV3agk3WBXYfCjVK",
  "key13": "2ReVzGsFVKWCNgqvtqLRqqAknVTKHywop239sQSAxPTuoqMz7P2uG96QAwH879CsMPViU6FfCkKDwzDFkAZPvL83",
  "key14": "46wUtq8nMqAsZggB3r2aBQyiHwJ5KnYtGBtykRNG8EpyCGNAe7aFgozSiHjP6ck4UeWW4aeaS5TKLBTtWpNz3PQH",
  "key15": "2UeDvaxwQf3qufGUspbQz1vqoUKssvHnSHz2ua86NE9bRaS32Xm6PvVaJX9uMPCs7cMd5rxD7cQ1JrpVHAMojj7d",
  "key16": "5811LYN5xcXmpFdXfbepegWcB5hRQx939CE92eGg5T66Epto6pcb6KFcTVgp7ononAtcxZ8URmJXWdTTvtLv94fz",
  "key17": "3m9nTpCxFApLrgbxTc82KdtkJZpMZ5KyPYSs5NnkVJuWzUJkodSZZQqhVYKtxR4ahUphRsZQMALmJwEW3vszG8rX",
  "key18": "5tnUuDB1woKVBtGGvcexttDK8SvvfFh68PK8VhaGcrhjA1tdNxfvbfmTTZoNCGwasnLZhxXYzKZmT5xphDV9W9qW",
  "key19": "5fAKCBdxLttrFSoMfKubC6zGC8kNd2McwEKd5kppNHeMH3tsFgk3qVToKA2Dca4XDY9t4WZs2BPHxwVk59utLjRL",
  "key20": "5QBxVbBa4znqCUw7K13VvX63rR1SmkTu8YaNxuCuKumoUQfDaSyJ6MYEP8uZ7mGLHNK2fMLrftEffDmcCgg1oF4Y",
  "key21": "1o11i8KjC9VqEuZ9kxZnhHaqpvLXW7k8jrJ4sPS4RnbRFeoxJzGQYekfbCuvCzs3TGHeeWbmptw4Eqaj5dzEuBk",
  "key22": "DcVMqfKPCxAsFQMjLRYCDrcLTxKEHw9yu84HR74qztvoVCRqezZucbaoLUviHdzsQ2ef93j2ZayJ1qNA9zqiXE8",
  "key23": "5qExV5hn1DPhjmw5KF6QfjPdWRKQddcTCRDCStvtcajGJjuD9fCKXXSMbWm4u4CqeyrDadcsX6fJ6F7UUpQRQBPb",
  "key24": "5YRwzpAFdRS2rskBYVfEfB5RNrbXfpGmSaS6vBSqUE6SaeGiik89p3U7HV1GGodXuocy2GMRotnrf3Khsfat79zn",
  "key25": "5WBi9tEqwJQPZiinx6MiD6hqNhSRtq36L8uA3BugBe8GQPeY4XV6dkRS2whCeK6fSdfngzbNATz6dJr5c91JVbMv",
  "key26": "2bRss6uhDZeffPTJMYWMkLQAtFSAwSenSH56mvUqLqe5EvC5gwGzjqA2iacX6nYrKtA1aECakuZpxpqE5GD3pTYn",
  "key27": "2tnEKwYqkbTEWjoYpnNfmQKHRRcC2HD84FvJ2SxU9abHM5f6N5BqJD6mChyJXeEpcmC7tYbfcbsyWJT1uofdZsye",
  "key28": "3JoCgAzzn5Qq2EYU9zopdv2n2iBrdK44s44YVjzc5xmLo56QWsgHmugja5QB3WVe8gS87VqZJfPsB4NpqH7MHVqu",
  "key29": "EmPDeqzgZgnnPaxt2wqRN26TX556G6auJp3WDwj8v1JpK5UW3oFds9T2Qfm7LuA6QDmeNDs7A38WBU9CyGB46wo",
  "key30": "3Qc5nnL9dY9eTvq85bjHoRCpDtoSSf9pGQTg8NQmn8DkndKMHSgwNDZ8U3mNKrsNNQJVjbGXArVNKj7TDZCtBsr",
  "key31": "3JwwZ7YXc4ZVC6VPm2jXaYVmNjVsc5jcGfmRiHusePVV4bfz7iWR33raiLXTQkrBgByhAzn1Lynau25giPzb9MWF",
  "key32": "5y1aARDpgt9SX1wYtixNF5hquYQKibC9CgMgr5xqW17vQXEot68qkLt9GMHVV5T1Ge6S8NY6P5ZBZp7AEYFNn9LF",
  "key33": "5BynuKBWirjX3mMimdAjJpe7G6UaiEc1vSuCPE3EWupXUmqJhg2AWLC1yyVy51RUQMAZMTgzoySudTRf4kMmxZ8j",
  "key34": "krNyvszv1w3Z9LWm3UUnmmTkCpZHUMFjD9WWWkDQHn7MeZBEpbv7gnBcWHFvmzSFKpKH5EC1UbRmYJJRGJ2XwEq",
  "key35": "3Kcu8ESfdD7y8TuB5tr9wWTuML6PRS6hESASGBrWBN3WaWb2SEG6mzn3XuRmvpu1ycvGvLzjD8YpSKrcRKwd4P3W",
  "key36": "3oAH5Gjc6iAn3R8GakndXXLUdpFvAHeVGqv2s9AaVtgHrGwiiFu1eNDyBK6bhdCPDdV5ozRSgqQBbtYqMn6u6vJx",
  "key37": "4aQDhSnu91pYMDhh89cgnYSppMeK6DLTRSqqUM79ViEM6nbcfqEy8oZzdeRbKferYu2cKESHTYeZBYSRNDSjtJDq",
  "key38": "5u1AcMKdRV3Q4teAQtzV3cDuwWEBPnYd3vgCgdYTxPY54GNvoB2Joh5r8fbQXasUBnjryyw4ToDjJBTzSXx9yp2s"
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
