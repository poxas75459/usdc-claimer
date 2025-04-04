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
    "2teD6p348snBubGJTL2HGZ7UQb5umnp6yTfMvyoi8La25NCM2e1McUcCCX4s6Dw1BwUwoZ2DfekfixUys8jDWm3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pNQ7UXXd3YERmXEwnN7V9pfHK716xSQDGEbqeESmmqMrkGVGnwVYEeR3fT1AWoZPu4r8sdHAd8S1dFzjYAJPsj",
  "key1": "4GjVVhECsNbtmAWtes3JWrTW7qB9TvQPnsJ6PUVbKKUphECp3ZZeaVeriFLpAnzAKzFbF13739B1sbv96NrvZXKE",
  "key2": "YEftnRm3dje1WS7FcnnuN3rjvUaEHZyEkufnFeVhVMeG6LY34zbVMVByMPYs4bR82DvFcNHPmHUL22ZLhv6yBrM",
  "key3": "2FWcfihFgH6Qn6Ad9RoPNpFdjeCBpfLnpFidvoMER6gzPXy3NqdRDdnc5wopuheTK3M2uDdCJv7HzgnWSNWgB27N",
  "key4": "3k1ACLND1ztGdNHFacgVZSw2N9LUY3gGqyvAccRR49a2za5kAZubimBGAv2AHPN9cgJy84S4HSbxGU66526svX3W",
  "key5": "KdafAj8wgkCvEa89ktvGBxWswDrbZAocKMbR5wWkyhyyKgQy3w8TokNGYCpibi4iy366w6SvCsBjn4rBHogGexc",
  "key6": "cLMyzcgGf7dkNNULP83rtWgHa5qLtjZUFeBATMhhsvWd1grxszNH2o2ABnCKVvw9SodFYNzV2cvLzjcnyCebUyq",
  "key7": "51DodR17d9Fi1JErZfzEXYC6YpU26QVZF3zeXPjsr8Wj8p2996WGsJFpYRDfB4gpjucdvVby1Ui4DLNeBEk3K7UY",
  "key8": "2FHG6Emd5r5R599vWgrqdHYqvR3Yoa4XmP9NXqaF48XJGZGUZxhwo8mecTFzg4FTunqtdqyTchDBQyPAkYuJzzAu",
  "key9": "4iQg2ufZ9Mp9CEswgcFcJSrXd8FQBdvAmWg8wwfe5Z1NAqmt8ded9Ldo4SFDzH8H5LanBM3CuLVR1X9vKEUN7yun",
  "key10": "3RKbDgUKhAGZusQnU43aLuuwCcFHqVaUA5EU7rJYtbWFJHJCUbsm9gKXhw51rHrWmurVFKMAR9bXpgbrqSEjSuAA",
  "key11": "2ynGztvMiiBUHH3LR1AB2ToesRNn2czq5ZUeoWhUdRRXqLwJPRCdcZNUBjHyZS6ZVQuhq77L9VWEYsw8a5AThb28",
  "key12": "5nVgNMc3vCW8STWKQd4tyFvPiThEcg1EZE7d298TF9nkJQpQvCvTmcqGe7c8Lj3SjBAmuvskeMrf7MfhqHFtPEKD",
  "key13": "218BQF9Aw8az4yrrFGnDSQYne3UqJxiwXr8R8fRJPoQVebSYQZE6QQoXGHp2HjNfqsRptDLSfpHcgHnceEsS3qhs",
  "key14": "3ATCuQ73T4RSiESyfZMwiuzQ3yKiP1W3dn8toAWPhcigDuy3tu5a41Hum3Y6rhMr55RQ4SxeTGFcsKUpAg8SrzzL",
  "key15": "3nKG8A4ozXREHerAZQhvYY1nvHjUcByPod77yQj6CUFY54hTGP7G2hzBNkQ4Cggwvu5xqNnC9LhsW58yqzu15vAz",
  "key16": "29Ffxw5oKDQR7ivpAatjksY6yekywT5ykTpsvsVcJq1vMfv8dFJqotBwm8MVb5wyvcyhhMMcKCEfcRyr61nKW6ed",
  "key17": "2dnSqNxNJTPF8D7FtfNVAS9Cv8Jg1gQQQBFei1W5eNqHQnk6Qm6iTiWXrYQZhTCZ5M2134h86zdRnm6kVCA4FyQT",
  "key18": "4qsD5qWpFMAXPQQpH79zoqtQyqgaGAuAYaPwZA92rcxz67XDPtMqPjzufFcm4WVbRLrDXERDST8BovbHWqevLfyq",
  "key19": "3yvvsVzjMGHN3e2zGSnFVzV6aW5pfTe6usBwbq1b2Dxx16f5EfzgWLKQxVA7erFMzGNN828inKq9K7pK6Xmam6Tz",
  "key20": "8A19sWNV5YZzictiUN4bVmkDjSqSUtSGJKdTrJ2uXEpipQH5bCGRGqthCGWioBZKUxvkwR9TrDAopZGnLA3MyBt",
  "key21": "S1NCELcMBgjVgPJEsvHAbC8UrAHdFJ8YqdCQrgaSoYJH4ZtDmZtxQ22TqTB4FA5uasL1FAzdLagsGsUkeTSkBFP",
  "key22": "5BQC8WAa2umjVRt4PeubZRdagENpBBqTx3jSDGhCfUA3Loh22S5RwfKXsLQTxrspnAHX6rFwHAjgXDxWVThR71mo",
  "key23": "E4Ab1WKmvham9JMxexyXmJFLhw6VCFv51rguSYRunU2khJJYE1zyk5MMgzuh34bwzYCKvjjP5g94bAwM7MFjmbk",
  "key24": "44U5x1HUDKyeVXrBeMnkzWnwwJbXiMz1CWM6F7HqhJ5WVBXcPLCsMX7jXwrKS4bP6QgyQ9nFXZ8UjHxEeCDWVPRD",
  "key25": "26UFfe7hr9UyLqTRBB23DXprVeWQGouAxrLa3PwmmdbnnqYYAEEyf9DThjcH166Po2EFfgnAYSmWBSsVHQkyWxr1",
  "key26": "58ni9f948LvtxT4Ccor7PPegMKEM9AMekMHrCty64ruV5wp6AWjkmbqDmSNmBE5UptENA6VKTnx9ud5VgTFqpMwu",
  "key27": "5Ey4QN3LyLGXnLPUM8WVN5CwP3Br4Ax2Q6rXn5Ssq1WW8stvWv3ke2MZt1XoMPBQXfMzLt5PQR4iT5pDyrUmBfRL",
  "key28": "khUUTDAYjW1D1qgCpKLbeFNgYSgMD99iBUB8XGFymtwYWckq9knUsM9KRj5hxpPGGNkTfh2E9DzMdCnaToVmgdy",
  "key29": "4XhBHWncpQiNaTi5JWfnYj8w8WUQJDAhJDzHL1kA7ifKhzD5fzh8RLaqH17RvHZz5jazxBxAU3pxnV6mbkdBFo9h",
  "key30": "wtZezu9KVUvPe4TwPthQrVc4vPYh8xwSV8djN2Qd8ijn7CQnVtAmGhHNyGDfM8vKfiP5TYpuqQ9Lf7D9kSjm5T3",
  "key31": "2Ux4HzVgmdmcxFDeSfNXbvwTfoVvMG9YG357sowvkshCCk1GU3d2joxjSrpSJVqaav9k5HWiW4cEM4GCfHkG8U2W",
  "key32": "3wc334SvLe38joGrDqWw46CJbsfaWRADd9nnWYBcdtxJDFM35Nprtu7t5igG4t5ZZ1J86bZmqyjzLyC1SpwiSoLZ",
  "key33": "2KrCE75DWEUyRKc5Czm8tyo32RevqFnGYyHBvWyrwXck2wv8HiPBpPjhgtatiWWCu9aEivUHtU1P8syiPV8wYdQz",
  "key34": "287aZLwmAc9FDRP45dbkLgJq8NaWtaJ5PFgEsscRqncXjANWTyNDHC8j638XCjBhXfLNpjfpbhvuY2LXFQw8mxYg",
  "key35": "5xdhtocu5trHkZhpN6JzwZmVoRE1MQ3poUcG1xyiYHaPh5ntixik4Stjq8HtUBzB1uR5qS9wCbSDLyPU6zwLCGM",
  "key36": "51CVGoNQFy7x4MyJNNo8v65vYsHHjaKhEE3vBKrDgHsyHaZUTxmAqc5duyhMHJYLZeETZwyRbbVURa2p35gAUhwg",
  "key37": "cphJFERs8SvjniqvqLjRv1ZSBdPfQnG1UgGPdaV4ZEFJ7mrQwE29DNSwcH1koDVB274hQGjHDAgjPMBh9JZvxbT",
  "key38": "5HcJbJ74grfCKLYgn5QF9FbsXSZsh8fBbH9qTBHWvj7QUwJZwg7rhc7Ue5idnED4YLBQpc8xdtzqbweNXcnDSjn5",
  "key39": "2sLXsE9WqHk31STtcwkm1vzipB6WDwNULuwDEav4uifPeM1LHJuXQMWs5KdepcMnxYoC469FZ6NbXmjtmGaiJswu",
  "key40": "jxMuy5rQoSfvHN1x1NTfpZ7txjT1eACmdJcWRryEuARGgbwFenPUGRM3xcAXckRPM1oQvxiJixXpWjL99CQiCpv",
  "key41": "3zziwiSsfqhvskZGvE9GNwJKc8fdgNXZWcX9GPAaojdQRmo7KDbiS6NvkwotfhU6ZWrbT7y2vqNWgVFwSh3nvLVj",
  "key42": "4GYgcHry8WustwrJ4WLNf4sEoFcDQN7QUaXG8zhy4Xq5WAYWJ9JvNTrn9CSWWyw5nD2dfH52hMXDnfgemkTPGkBs",
  "key43": "42T2nMtZpmUHkvgJaSYskDp7M82MSkGave2YHnN2f44ZDPKn52crt6r7zRF13HrpnvYsYW1METSjUkrASWkoCp7J",
  "key44": "2FstwauaERspu7g3Szwa3R87zd9uc4ZikYxJci9cuafpWApXUrPi4ChsDTiiCJvQsvwCUeMgvgybgW7RzGKneuFi"
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
