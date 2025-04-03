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
    "2zkiNZDACy7dvAHoRnanVhUUq3yey7sGLvj2iW9Tnu2vKTquJCpfNYNzMc97AxFgYtA38vDistNtfbdonzzDhuKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mf3N2RuV5QPESBYnjQszaeSFqozUFdgtfWHyyFVJoaUSALcMyLoWU9hQAcwmS3p1avbEpjLdBMdY77KpjZ8EHqT",
  "key1": "5cLpoVAeF7QDVeKbrw1MS19v55ZxthLzJhRqGVfSgP1jC2GLqVGQdyYXMUHWaSPvKDAC6CNMN6rk52HxeiEMatkP",
  "key2": "28TuGEpt79Kvhwjz1jnWhhdjZn2DEwMzQWEMxppFQaCcPqK2RKUf62v2GuC3Zg54iWWXwRfe5zrQyuArdrk4WMwd",
  "key3": "21yUZ5M8cecwzxg2Xo69aUGBe5p2N9UQC8tBQ7pgBh3b5rMCKhjkubAiECVXyA2rGkPGfEAvENaRCb53ZeGKotDU",
  "key4": "vPBttzDdEMzxAgJ1gg4N6DKgjLXgjnBZoBv6tamvHYuRSrB7uwmYoNnb6od7K7KTKqvCiC85faCMh7FXXDgQ56V",
  "key5": "49vy6R7mUoPw9Jhn5QYBCBPBPMduLvMd6RwLdj2CPLPngWpTZ63xqa3UvheqKjR6wi41CC61vmxJCsF573ZzBspP",
  "key6": "58UKLWgwHMJ9nGiZx2KUySCEAGHK8cQXx3ikM4CjNPVCayb6qUuTroiYFx8rVb7x6m3NC4AEXxXqrSvwDYLqpT2Y",
  "key7": "HA4EBvAZhdxxEA2Mh4APUNrRxVtmvjpT8RzQwTK4V9Sc5SDXPBtjZLf9Tq15fGkgfg6HfMNfTH67XWwZFDhAJS3",
  "key8": "2M2StyeUYeyPHiXtwEsX338FTQyN7to2iE7JPeUDkAzQRLcfrxkCtQMdvbqqVqhydryVDUo1KGuK643k77Eys3u6",
  "key9": "4iZ1oBUuvQhA6DKR1GxuTAa9MrgPBEFhbXb3AGLnVZeb8pzqZGY2iARbYwGFMa8gQUZrwu7VBkRGbXzruN5bHKsr",
  "key10": "4uJtwHTHe3vgxTaofWSssBYwTAbaTSNiN8use8PigponrqnK7bBoyJ3SsFFCce7g1qpjEUaLPkhPD36PbvdWcYMK",
  "key11": "4HTSZ1khVQy7sSZ5fN82W8J4U9UVan96PqdU2g9FvAqbst4fBrM8tP8LUvf3762M1QvHA1mWK9gy6GMSwyov5YwT",
  "key12": "49H2w6vNtiuXroNqPB3bLw3YAEv6zjGT3xwB5FsDAP2KWu4LxhQM9vd1StTbxcfNt6W1TA8NVraCYPa47HS5LXep",
  "key13": "iKE5sfPLBq4Rtm7LYo1iuctnw8FcR4nFNrM2nXDaC4Cue3ttWw5RFAq1feN2qxyakkKeg969EXqZhrMirBVzwz3",
  "key14": "2wYMDUU1F9KDxmqZikN2QWKBF7CoZeKy94pvLuuVhiF9f2Q5FchgdU3QerNfKsUhmULrqAkTfUw4CikAVvUBn2kH",
  "key15": "gmN7LdKPJFyCRshgujsnWv1QE6NAzUqxKcuFw3D6aNXF3UQaKYcwsdARz7czHKxj6tKD343hbs8NZrLUyrBZnUb",
  "key16": "2YPr7cNJjrAMdKRrW6H7ELo73hFhhFg5tm8SnYbsAkZdjBMEmZpsiZkM3gWsYMDHauE5CQWHEi35KkdpVModE52T",
  "key17": "3hG6CA6irB2BUE3AGTAc7iNq5nriv6FyYYXXgHCFbo7nqkQNK6nbHz9Tty8HSkF64AqEReYpCBeeKKv2gfqaXwDq",
  "key18": "QQ8c2UrATCjzCRemqoNHFWRk1eemVgqUSzNTse9S1QakdwBvb5yW3zruug3uqYfT1YoTXG3S3ToPxY8KyGhcLNw",
  "key19": "RLC7MiCXgC475z2qsCmABrMAr282Qg6QqMqWtddogGRCzYwFMuc9KTrGz6DdgovRsgoQqPoz985h1bwaVHWXxGF",
  "key20": "3LsGrkAAYQK47JvVmSv7mvYs7trSY8h88bn3mKkqo1QYVmneDeofbjE7k6j2fzthgU1endz7ZChwq1WfRVQQ1xYc",
  "key21": "2oa4WqQgPsW87N41xXdMZ9nynB5ncnDeZ67jS7SxKzHLEp3LvTR2LuSwupb4PSL7zgn8XANEmxQA6hJHt9BeprZD",
  "key22": "3MtFy8ainnFnzdaMNXVeytFEDH5an97cRLj1MrAzGbhpEM3e15xcGUhvNT4EjHTCq3vF8d4XtTn1JKTVtrFCFGpb",
  "key23": "5bytpTdiabdUbvuY8Bu8HwrP6DdoYuDinozatkjBBkCAQYptpa2QTDxRxTuBbercnQLi5otb6sieEYyqBrJoyVpN",
  "key24": "34ZYSafHEpsYyD721oqAHrVMSRP6SvGLqir8Bj6aeDYFuEn8hrn1XQcG9JaEPfwYHLNq1CGM8LfmoJdEJ8KpqTMn",
  "key25": "2YAjx5XUe4kymXXf8zpcbBJZsKkB12FpVJjgwS4wkWiwHXefRVxZdZPwnYLdXULVHVNdQ6voUsccz3cEUoJozZJM",
  "key26": "5NU8YnJtnFYMmDXGp8z3pNJph6eRoAmG9J1GC1DkebDMhW4t3wriTKdZUQCbe4ZFn6vv7XLtZB9d1UrBMABpmwbX",
  "key27": "4G1zUYUDZbNvecbWoDVJebBKS3T6mtYTpxwtqNV2TzPvY9Wzbawd4gZtK8KGXd4wjBMw4Lku4wePb4J9nmLf2DuQ",
  "key28": "4YMqaXi8xtgdCLmChuAVVhX1o8ARKzVtko1QM385TsjyxCQ8c7yC6bmQku6zqCHpzPZXLsagMbQQHFZHVp2xanqp",
  "key29": "5D8mpW9jbBJ7oaFPXjSWoqJ4AnEcc37QkyTC3h6wjARAJdd8bJWFVhi5B71Rwd3FuZNWuWHer78TUmJd3xvTqxAW",
  "key30": "2JCrhA6S5bbv83oQDS6pPPRi3YhRCz9pQq7EZch6VB28fpaibzuyMigRe2FbR5nHJxYEBQeXozN8czgfJNZqmjA6",
  "key31": "irMutqndoNmvQCgbGAQxSJZjK9VR5Ws2cfKvCdUArSFkMKmMFc38oVbdYUNai5EC2XbBD24WRtWjVcuszQ375rJ",
  "key32": "5p7Urmh1V3QFH9KZbVLmdioSt8JF44V2PDmAr9yiKDJgbTgBz8RVVTTZAJ8A3bPJ2docDbwH5fh3yPArQubC1wK5"
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
