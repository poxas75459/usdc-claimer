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
    "2XZwHLsgHrSWcukLmA7T9qRRCpMoP5mcfcNyUDgAhHmuzfG4eMvDaEnjhj69K7AYQsvYNcYxApW17WwjG1PwUmKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzajDshgBj2rCtFs8msbZR1EmjzGG1jRRBB1xvfxBs3JT6Tb85ennUm2ZCoaxmAcQrtuCDkkPq6Gp8kpceTfhyY",
  "key1": "ZHTGiqkRSFJYptYhSdoUDRtnjLGvYipnZKY85nt4mUYN52b5EkwR6guzyiCefbdhpfWBw9EwwiPzBTd5JJcwDgs",
  "key2": "bZEXSa45Unnoezg6n4orkx7Mgku168q5bxrUKic9WkCC6K6mkzpw3xhKEQbS7Vv9EA1u29yNBq4vzn4tHnqLs2e",
  "key3": "44sDzBZhR14EKUXKcWbHtq3dKD3Db93WfTgPax77TgUa5HgaJfy9ZTDCLQ3vwAyG3NE7ZdZU5RUkT8xLH2S1XS2w",
  "key4": "LHEc3BwswFkjND3vbegiZm2VR4LJXEzvLpbTmjxtGZp8JKWPGAHLrf3KJJPddYZa8TPyfqkRDqjFEEGcPF1fcwg",
  "key5": "3jKVPajpoyYtGUS9fcLQhpNtELB1y3iUVWXe4xDaJnNAaToPSFB1m7LUwRSHh1cJDic89972bkc6jbkhuuKfLP4o",
  "key6": "24v8t1Lbj1NvZ33amHLcxjBroRvJ5xrgfdxAYS8C2UM63tphEKCv5gUBGS952apMb5ohvDNHWbqFgbqSnVTRWa2g",
  "key7": "4yQPzWqTEfMYuNDFFYnCNKZ11RTAvtJieEdozXhxSHDjCmBVnfMfwHXx5XTtjhYUy8pfcc8KGXQfVvg5ZH988NEG",
  "key8": "3SfUdceaFttfAqQDH6v6LiL6NhKu8mpskxGk9qPsavpLyRPST5FJg2hmPh8YMtehiymNump7fhwx3DBbzBSQ4jdP",
  "key9": "2YQWTaHr7KYDTrRUCMzR5tk4cEuY6KmcUcCmpkK3neUYL1xnmitmF2qdJX9BeEL7Yi5AMPZGzL7VuzGr7CdKqqwM",
  "key10": "4okNSyQAamRdJKudiiuZhW88VKkWH5agKbVuYKa5ULkR7F2jwV81n1adFmkPNUnAs5DrvxkAZaGfe3NEMVLpt1Vv",
  "key11": "64xCUZDwbyneRXMXJCgHcRUxfu1SFr22WnqfuTgfz1rGNsWdrHNfXsMt8tsyNnhm1v5rupaspyuPtG1t8NQAMbct",
  "key12": "3oradhtL6ATLiVhfVsVGh9X2cT8pch7Zfbwpc1YaW3iEYyEmyuyDire9QLAJdCRKV5v31ymHRK8iZVrd2FvwpZXq",
  "key13": "3RG7zXLehU4mgZAsJoD6XoWKh8zAoVUHDNP8ph8F6vkSNisxfB7YzT7ijnC8burPP1Am7FE6Q6ZRtHz9RRwZwScR",
  "key14": "BrsgUEkJuwFUxFEPKVSqMuVyypK6GSNe9NR47ECL6awcpuXdiU3G1Q8xt6pnf1aHeJtkkH9cnqjY1uPkbES2xuY",
  "key15": "2mAH3uQm1oAqZTuDZBH3sCe4seafGJ1cW1Gt3L2XGCCgqLmq2PryWoHKHHdrBGq4U2UCufQHjx4gqmGSsVXFGxRN",
  "key16": "3M4Sxdrmyt3ypkRTXkg8D3rSKoh679hMaN3VqnjEJjpu3RK59asewAuiBXKxBbt9zrxBqLyFuvrwTyo1nyJS3LDZ",
  "key17": "2ujmLL3Ps4iBoX3dUPuk5RZygomcAmuDVg4wVJW5jexDMxnUzCozrLVLmBAEL624VXoP6eUDoaDEqRFLVDKDxLjZ",
  "key18": "GGLes6QwSZuremXRbTczhYC11jRmk4Z5RX9JH3ZanYW82Xx74YBg4QzXzB8U2BsuAr5YsUQ47gaocXdXys36XF5",
  "key19": "5J4bsnA89VgX9THdUtJzWJrNFbbxaGAS8CsEWohyTXAGyjpCoNyUmxQ5oa5HwgtF8n4kQieiGJQWYfCUNNp7Awcp",
  "key20": "36HQ2g81kW8yhFoS42c1quT2HpSpQumurQZ4wWC1kfZR9REemcM7gKVFyVeXcvqGZqUBNNnNtpezkANjZoAr5MZQ",
  "key21": "5f6qFVd55vdFo9T2ZBg2thHi4jL6iyCvng6FP43qMwrpLPuaudkefVpfZ5Xagi2kEcMGGjPqZJvN1hfrsXFigLC8",
  "key22": "47BdJfctEUQaEzWZQP2hwFGpt2bKVnjoX552oGg8JAGKpDqRduDPhYq8ogwN5pX23teSUmhmda9RLtqnGGT32gGc",
  "key23": "2otGezXLLCY4XhPpy9TiEzY7TkNpTXepaKjbXX9DwhXGAsUXsfiEWnGVE2MqLZHwnS4Fv93TYgakskApGmtTPLtb",
  "key24": "39eAahBXk84udcGnU1oKbYLuboaSUfaQ8GNrMNvkRbWFQUikSBVQvC9Jvsxnc6ZYdnSoRPKb7uTeWfMGLZsq9opV",
  "key25": "5EQKduS5ihc8HJyqK8z7yheio8o6LTjQb8MesQbro7z52FKSq9P5E2BRbi4Ez1PwJ1CpbZsL9QSpdYchMMedczpH",
  "key26": "2bysiPtuyEBCtDD75zoGG7RVtr4zqTBWRVrAzNjp34WUGuWqoMxSHb8VentktZc77R88WobWNmuxwpnVQXYysufh",
  "key27": "3n1TV5DpcjQN2LMd4jVwGxuJeLWVJNrpnC54o63AZnt7nq3X7UEeprryvsKQBoKtL3VsZgAsggZF7vJUh28kbU27",
  "key28": "3Tin1FUPePfKPKT6hA1s1WrHcQtKpAKQzRN5xpGtqE6hE6KN9y4cE51gdWWnAweGkv6ToGwZTffUPZpMtiSqMH96",
  "key29": "3SMDwFcUU859rLcMFaxSigd9mz8BFa1c8H1PVuUM8fGQ97dm5JdULp9pSzUcm76Qz8g3pEgviEYMah5SQps1695M",
  "key30": "3mqDLLYvSkS2fnnYQ9LuY1UWnekZhELns6iLgxkWPFAF32L8T7EFuacU1fBX426YDobceyG3Zy7Co8Snkfx4bHiZ",
  "key31": "ToZ5MwRYH1U8hvYfoaFgTNqtY835wZRmZF6cyiJnSEbfvKUGJYLkuVbU6yMEkD2uQGgQ6rpvFmDkKQc1m38jRUN",
  "key32": "Nb4chsUG6kYMA81MZpFY6rYdBxzgNBaiamg1FRPBwZdWkKL727JaG61CoyDmbyvudN5iZdPPSuUCnGe5cmwNKSd",
  "key33": "5NFkDbVhGeAxq5baCHcFaKPktuNBNE7q9NtBSKDTrnrJd4bKnhuYYWEiiH2hhvXnDUMey8PXzamsmocNhbbBK3b9",
  "key34": "4msmdjdVETgARYDJ4RKcaxsAo41Ec3SBeoBXNEcStFMAFcHyh6jTCAtTrvNhLN4391TF76YtyeJc8ohwYg5bgGUv",
  "key35": "gVoRYnYPpkaSro9LJFyoeAnThhZ4uQoWLBdL4AkNdHCNtbpqxfaLujGWHFG5UiP2aciZtSYBvxyU2EWJEKLY2UD",
  "key36": "7HnsLN9gfrGxMdvZoD1apyCByPgktmzgqJDPdEykxBfYBEVzSbSDQzJz5iaKpjn5mAiPyVpcqXdvZP7UYCD2ZEw"
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
