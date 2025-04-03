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
    "gBHNAwC2WrrCkBYQ5kADA6RWxGRym5iAJm611awu5cWRo146EzZtiDdp4KwKgxkDYCsEEokPBrKKKanurzg8AMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFDMXSp7B5cZPu1AbLQMdU9r2qk2sYPTSbxvqBHJnUtvufccghVHxqnvhLi7DynpdMYraxTdSgYsEvA2hiGedjo",
  "key1": "3XRMg2PSZRt6nvEvxtxME2vxrgMzKyjFpgrL7FVgAdbJXyqSQvKy7FjxVFRKLUrEo3qcPzprBt6BzVH56z87fwFE",
  "key2": "4Uxg9AzpjJnbq58xgHQwZHuZgCLUBwqMdxTLNud9hL87zCNneGGEGUdmUP2XzE1BnGAHMgZ656D1ruDYogmimfhp",
  "key3": "37K3JQ15pFLHJTze1SBJpGw9xQYtVY9SC2vW4SdVYWU1fQBLCoegZ4e81JzpFApqRAZPhckvSMVkgTBJ7YBTsKHJ",
  "key4": "2vzMHrK4vKXgCJvYLGq9X8JZF3LCqNfSpH3bxWZG9MLfNCgbBZxBaqancfF3a4Vzsh6dFi1CYdAD8J3yqTg9VF2d",
  "key5": "2wboD9LxribwJ5T1Td5u53TvFHF5sGjuMsKcNzSvnTBFNqeyMUcDVDxH2BBYkBQFYr1EuszxfZLu9L5kUKdfjBFC",
  "key6": "w4GqCWux1AWChGC8euiBvZr6Ni3Amo2HbDG5nz15UJQWZEUfnTMfVkBqs8HWyN2ePx1Hz1yHxyfEiJeV6achLke",
  "key7": "5mQ4BqCjendUj16GGUYKk8CFvBWvJau8UGUHFLUnogx5svidA5EE3d5eZvawmo5x2KTh458ixbz7j8CW2nCPvma8",
  "key8": "64x2wUbLXqX8soLidoWMJcv3HymLfGY2hJ1SCQy5CiEQJm4mY1Semek4uREyToGVegeSK7KcHBE3xBaLZRE5qT9s",
  "key9": "3EwGoLzc9asZUN3D4k63x4h8XdbUXqxs2Tw7UwFFwJNYfCCCVzrgNp8cBvFMTHiXsmYjfhhYYo6eb853uAs9nsNb",
  "key10": "56qQCc8zvvmKAckshVAZsYmhNKLHmdbn77aqwxUzqebxwsKpy4yVb9Co76yjpNXy3iyv3rJgs5Jy69sTJtWYHjnS",
  "key11": "3hN3ir2JLNRLD563NsuDbnoNK2fDWVrZ2BoX1zGQQL4kLMTVqKm8cQZak5HuPD73nP3YGugaA8qbkrb9Y5nNPCN5",
  "key12": "3F5zxk7heMD8QR4zmv4gv6sqwBDbdkw7Y1Moqw4PgaNcHn5Tpj94hxQ3pbzNf5gLjjXYK63qYjHikG6ys1UkQdRk",
  "key13": "2D3BwV5CK1rEcEkzqkDvFUqKTVUbMwEoP4piCk63jpeFAX64TPDj8PRdJCtXNFFZhmFBsgEc6EmKQxP5YggXJSmV",
  "key14": "5SJ22HgodZvFKgkug6cM6DMCtrgh2TZzokHrW6AdH4utrZmgcgxrzAJLJ9iQhS64SqcEntceRPAs5exnzGJ8Ts3a",
  "key15": "rG4PjXCZofaQXm4FEay5ADi5JQDZLCTCHScg9WbgCSrpoxxWnCrvS8dfvsxd7Mre85S2yWETzXiJASvnKGyFXmZ",
  "key16": "5TopBr7B4XdX92rxiZB8SV7nw9AiCKZ3a5Xe863NVRA1VTknSmm7iSsF7BsHMpYo5Fwut4pgrXq2MiqyiUok9Rup",
  "key17": "UvsCq8HcNMuuBSrLgrRjhgGgumeSAXU7ipqxXAGvjoBB61YgeymksvH2C4537fT4AM3HYVEwT3PJeNVc5ETtL4v",
  "key18": "4LatEPGrBuvPN5Wsp6McMRTsr3nSpdc8aZRNduiJwjA9CpwkHT15SbAFNRTvdGAXgHQUij6wmRBuDzrbccrWsbTA",
  "key19": "3DWH8QgtRQeunvXf8vJbdoyRg8C7qznqDCQHyTp7Xa9SJbB5vkVYZSCY1RF7Z1b5n9nodmHJq5HH198EoH1kk2SH",
  "key20": "9XkrbTnefYs2R3uhvCsgcWbzkSqQrviSqTmyKnJHAZYD4rrZz1aNZpUoYVWKBbSS67HbckQXnAguo9NxgFLytwK",
  "key21": "64S9GHfdCE7Q348vLgX2RSgGYybsjUW8GieWx2Hf2u8jZjTMTqdYcdVuEhbiSKLEBC3kz1QxMRsT8PnM4WEujfFE",
  "key22": "4orJZRrevNDhySZzzzSZJeTHLSuNhS6DJpUepvt8Etz7FpqKk9khzBZfmTcMDz2Th23Vaj1Sx8Lk2EGhkVFtJGpn",
  "key23": "3jCoTEdB99spbkrtov5saH12cfbrgXwG984VFiTnFT4vdGxeBf257NYfnktFAVJJo9fhcYHj8frhF7mcMDQ9w8R4",
  "key24": "2uZqkGB6WNHwcnM5BCR4SA37LdQMQAoJa8NNVYE7mLn1uw6FQR9VoPLRS72eEXR6doURhh4tDXzyeUR1huV4TuR3",
  "key25": "2nsiSrdA2Q5wkTt9LaKWq8h3jdCNaNfnyfbuhNLW8NextwxXA18VdCv9bJ5qS4VQ8YsiT9tGxCxWizPbXmPgW8RN",
  "key26": "5xXMhHd4VybyeU8ATDz4F3RF7QfppKMs7r3SQxXqaNezcb5syw8BLg6gN3bsk73wnNEX4Qq6oxHu2qa7GP9mbBFq",
  "key27": "62TaTXeXDbbCqNtiJCciZYg2D7oSoK9dQvkzfvCoWGS5r2hZDANwdPYWeUhXUgagyonxU1LyQKEPvEQAYdLUJ1nB",
  "key28": "5vcHH1zpowtdVWDo7F2Byozs8rLTXjfJecnW6qeAw3jyPxt4jNaTzDPS4Q158Jp1w8bnQi97j5EU44H532U7qu46",
  "key29": "5B2RouLg3MBNQpAFHhJLXWr9ZLZQ5ErpNWnmmbPBmJEh1nwK6MjHgzqAvufgPVGLUyjtN5JW5KDmtqmePXFs2Xdd",
  "key30": "2QUzX2BaAXYrbdynesZqjZmHibBnShyf3tAbAzwSbmy76Cz7EZHJG3EEXB4ciGw4J6WHTxen3QyUTTM6dFMCHpLa",
  "key31": "43fXjAqL3XqT2dRC6eCoCbRcSNuuPFFJekRjnck37nEP2fxZGxXFpKN9aK9zJHuFFUkW3AgH1FUUGYALVDgj11ys",
  "key32": "2kRD7t3kMjvtBA2xC1VnnddLVtLmdSFqh42p4nCfWNZH1PtMQ3isjkFGtdsmVVK2hJhiZj77RxhjWMx8wKhtsXSs",
  "key33": "3zxDtZKqeku9zgLeZYbMgis1rSo1wBfNv638eeyzHmdDeVkTahyrk3cKGMq3fwRtvbLvjTrPwnKpVk3BuVDDVC8t",
  "key34": "5MJCyAsnHrBDSBp1v97kmv7dVNhYiTFKGpManQipiZ4XfdgCR5ZnguYM9Yq1MCZR4vni8SqkMtSd51sKkFWSyW1h",
  "key35": "4qQHcD3Uhebr9iR2XSVBA4VRa3ueqcpWPguLVMcb4tNK7269JiNwcG2KBPhVpMNQ69Lb4m87jFA2HMLeYVZWFNC",
  "key36": "PfY12W7Dq99N4GZYjB4moAAWkNEiv9wotbckWeWnke7vAZHJjnsagGoSxm2iwXUrcoDi2XAP2No85aob7S3CjeJ"
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
