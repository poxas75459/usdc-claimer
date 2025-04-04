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
    "3cMxEhkXUsD9VXAzCfhmCqQ4srQ2MgJ2G31VvJkEPw3Mry9y8Z9eJQqVJwADUiFnGff2MHQkHYCN6rfJHma4uT5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFiuZnh95mDzD1GmbyamzvyYfj9m93gT3qPAwbM7xXcZZjTQGjGNuns8vahXeSqpBEXi98CR3r3VjNpG6YKfyAx",
  "key1": "5H8vWPojicjscNyA1FBeag8p1rKwnc46S4DQypUgpv8Tb84vfFbtXp5xH4pyiWWvWPe7avWKSGqGnXyY7Liurm19",
  "key2": "4N2vyCfPuE8GrqsEG2T5DDCc5HPX6FKHQkytEvWyqDwwPbTCXDd3ypfcMQgRGfD4f95m1BNzLjm51oTkrZTq1Gr9",
  "key3": "2Noaurn25EFrzAB2XHL2M9sz5ZB8numx8zNQoSb1G2T67aU9aVsrVeTE45U8KJ96MTQYxaz35qLnVefPC9cej8QJ",
  "key4": "431bkKsypE8EGXCmQn1K2kRRgnVuzghLpfEs9fNqNtyMv8Ssd3a16cC7Vhd5htuyu3vLczbxFTECfBrfG69h51vL",
  "key5": "3w4jqkZVK7VDV6LPWqwwwdoFc8UPfEFE99ppwfAjEcsDvwQY8mNbL5Q278BzgWdCDU3LNryky5UXUjw9HVttfyct",
  "key6": "3yqUzfUaeKqUC8bTmBkEfmKrAaMG6zt36X3YBQTD4cwfeLN3c5er19D1AShtRcqkBDf4EtDUTrtQN1ANq2tTVRg4",
  "key7": "3fzCN1XgFraHa69fwQtKxmfjoKEManD4w3dKgMaMyD2THGkoym1LJG9p65HvLahoQk66wip9pkAHcw3V3NX8UTNb",
  "key8": "3V3q3yaYEhnpSKXtUVsmpkrKZ1MszxLMvX3gjFZjNHuPiguzEB5PMXkgpW8NY5U7ANATRgKC76VHQDvfRFvbKaYK",
  "key9": "KxjALmv8LLNfqg6Dsago9ZNZZyJCeUVUGMrv56o2PbraLNVCK7cZJHoq9xMC63MyQHzjgo7wAgCBozAYjEcLVLc",
  "key10": "3XuTdsFw9pjHsgfhb2G1mqK3JNAdbAdjpcHy8i83cYZw2cG1h6hUJSfPGibvE6ZcdN6BZryv3SwirArzve7oyWHV",
  "key11": "3gxqBdb6bcMPdWbCc5y7Y9D7hnRcSm8dY5dYAKCWjo15QeXEysV2QcAHb7Z8RF2Z4KBKUBMzqzZrj45jEn3YnhJu",
  "key12": "25zfbaTkZYS9hPN9KKU7CSF5VGtp7Mmw51SxDiyAD2DrkrWMvsu6zU7XEqyv5xX6vQZ2cgsY8UDDTBgAztfJ6Jov",
  "key13": "4ECwRMYq4xdbtG2dZGzk9xvFYuRugTHTJnNT1xvrjcoAvHzQMaxVuknNupFYk5UahnbLYuFN83CutCn4vFM3JNap",
  "key14": "36y59qdLmEzPH8tShMSzTQanwpefhRUGgUYzbMxmaB5gfcrmJ4CqeboxZV2GM1XXFKfp79i3HA54sAihhaGVifSb",
  "key15": "2hM79Wm8vJTXM99zen3WM6KSKr5PS1tqogYB3AtCHHCXGaSQ1612xhh62xhmkto6hbmWMKTuLhqXFg4Tyx76GQC3",
  "key16": "3Rz73FxrFcSnyALew293FdDefBv2QesfFweCumeY655qNxn3aiwMEtjq5fLr6uNprt4bkYZx8k1JwJxBykRTzSop",
  "key17": "5oQ74714JgfWqAZi2bTsYqKDwoWR6rx3vZ5QR9v9AovtBiwNrwcJVP8mQHyirdwVDR5jUcnPSUxe81xdYLTczQ98",
  "key18": "3Ts7Luy7pCgYpX4KM174Gdoip2z2ZrZM8fLm9ahA9c4BFtGHekzw4vTT54CYrQYwudwmXZKXUHTbXFv6EfYH5Hvf",
  "key19": "3DP1LEDoZgkNRuXTs2gwsgXu6jiaTo5sL8XZuYvY6EUSWiyKRPbgmopq2CYRvX2Z3WyAqVZwSVQY2Et8jkCYXh1D",
  "key20": "mojyQ8EguFkUATNGidWjUMnruFLtMSmVspCf7soM1iZa4tjitMhHa3DksKKvtK6r2xVST2xn2oNwwxjtKuUuF5f",
  "key21": "5GPxnj45U3FysiPsWKH2BENsvnzP61NhvNvJRbKrKhCcZJagsk6HHnRoRysHmrUsm9zDTscErEftvmyU3C5L4rdP",
  "key22": "57uktvPQ9YsGo5xX1w3wk14Bk72eyLnTe3HreuhpNRK2n2XworqBSGTZLqRBYkFzezRGAXiFpFSPFB9FKNKUqXir",
  "key23": "3mPZRVDzvrRkm9RqhCQNa5UqNh1WLSXvd4uEQkaZFrTJfuJ4ZQgcU8tsXp6DM5N9JpP29JJzYu21V3QwaEwmCxnJ",
  "key24": "5ZhkioAZykGLUn2UeBeCerNobpp3oddJnPFBdTwjemPvsREJsmeYJXV79yD9KjMUjwPbbQ6L3HmttDD9rydK2ehn",
  "key25": "3rHnuZKJkqcQc2JnSKMQSo1dKjYbwMqvQgNukvbCNcuE1YGi5PBUsrWuDCg4de6u8mtpsYxbrAGWFN3ta5abxSt7",
  "key26": "5zHXAjKoQR8ewkMrZmHHVpVxQYCpk8NSVrD1fpesYdiG1hiwGmV1cqEBdcvqoRM3tqceoucGgEbXKoR4WaXw3oRJ",
  "key27": "5WsuptSNgL7H2kWR1xCdDEMcU5MJDQJMW16a8wBjRs3NdaKJwPmrDaf5J7Ea6AEd8uQCud7peQW5pxLQdH4D5AkV",
  "key28": "emvcSHREk8vJCPBYoMxzBayFAY2d5K9eyrQ4eBVNopWzPeNBQ1HuPEwMrUqzEuN44batPTvJGxmqjjAADhW8wqv",
  "key29": "QA7H8i2CxpeMvhDTG3hXKWX64M9UGxa9PvmRKNGEWqD94hX6K4rDQo958VGxDRvgeSzJzfFQ2cQ6veVGZXQnYQz",
  "key30": "3YSBERD2NDFCdyZe3C6Gv8MACcCFNX8VEXJhGq7v975L9ompeuVS8KDfHEzRbRDf3CJdwaHguveBBj7UCJY1J1Vf",
  "key31": "3sJjV4zHKy3HyKBz84XMiEiMriyPYk1Hqz4HEfYMZN5s3YDw83ubaBGShzVdm8bStxUuMm1B7nV4q65nwWgKrCQs",
  "key32": "1232sM46LTChto6p5DKXdjcVzgU2Btsvb4tSTiYeTkCyEWB11rj3BBo8mFqzp5GpbGUgR2DYmVBUYH8Dtfgb3Fce",
  "key33": "5xdJE4gRK9VnYCPfWNMQLvXeZStUL9dww48J1bFh3LWmG85CPUTRYWwiierZYdL9msuLeW5wbnViAwpuYgWeSQtm",
  "key34": "4kvidNo1ijqFS2NJQpF3YLsCKiquZMPJVw859xrzeBt2NDFCzkkgCmbHPuvaxwF3mss6bb5iSeiYPQ1JmFAY9E4P",
  "key35": "5YtiH6ELfqSeK3WZc1hGLFZop8jXsUviDSXxT4wUGULj9Y3drnWdpeXKcECFWiMZcSQDV3ga1CQuBzuGrHdXY3kp",
  "key36": "crAUrUBBjZ6NmxXPkG9JZCwS5ZYQAasRQh5QaMSwBh1HgUP22dBcu21Gf2u8hXYiUvow61AiTdAVnKpnGiwxYXz",
  "key37": "4GKQnxLvbsbj3BxRno4AoyQcGsoWxuidH77wCHJ8WGh14ki3YJC8sZmFXpWAGsbVNism7CYc1ZViupnKmGG4jotT",
  "key38": "Pf1JyWqszEmQ8xLDVgxooY4cngFoW4fWMfXotqNmWiEL7NHvU7uXeoQH2QLsAVLsJuqAZAVsduzwUTv6p5r3ZEi",
  "key39": "2ULzwTw2KKCtBHfdKyGPp8eTP4TMcbBbvamHRRWSypiNCu7DzNsY7tU9iU26MPHmLqMmUALvtBLYiGdrH3XdJgGg",
  "key40": "Ttqm2ErZHkneKfgcFuroaQRcjV22gfbSXrMYWBfRBK19FHm5P4ZTbEYn7uNCuUkpVyyKj45so7ci8Qx41dzubze",
  "key41": "5ZsiUC1a8MBnEES1YSdpx593WD2B5eX1fbEsCXEFfpb7K8BmcYPkPzBAksC5QmUqXTFmrVBDVRbAhG1L248ro162",
  "key42": "2EqnJSynoQJEPuYTisX6kk7k6Zh6kyuockABz9HFbXghJ9Ftf1P9obSiRsKRwxQLTqiSDePtpcBGyEh1A6DMRsJH",
  "key43": "MBE8eb3FAZ7nUbHEN6ixoboUdsNzqcEs37TuocwHWRCGBp1sTQawKvFaWfxEPvRkH7cQCJ6ZmBQJYQtnVMTsC7G",
  "key44": "2NS3xbANFGUGWcdY1HHGHhgPELhZ8JdcaoQ6ztW8Me5kPjhThiKR6UTzaiAAvv7NEnNuwyZ3JouUSXWwkogXTTfn"
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
