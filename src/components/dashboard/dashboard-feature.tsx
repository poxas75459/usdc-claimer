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
    "4xbMQqtuNijdQektRNPnv5Fpqe6pZjq6YmaueCoCaXMdxLPjR9Cm6JB1MRgpPBk47ockhgyFiH9Waoiehy5N2f4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gFrvkuZo864H7jUQeCt6Sckwu6PnxJqCot3CD2g2vdSiqS2pzstPzmQtPrEr57dNVBHZr4wpQM9reSiZRx3NWEn",
  "key1": "5AGD5rtF9Dmh3iTA411KRBaP2DfmWb3xT7by7ep6MCLC87EyuEsWVL957hWjo2WLHtC5xLcmFwyiQFof9kQfyokW",
  "key2": "4eHVz7igkZxh6nU17hFJA9hUNYBvp7X7vbEc2btmfYtDPTh8voj7xjwBwey75zuoater2WtJqCiQwA6T7f8vbkAW",
  "key3": "kZS94KWrN9CU3PiRPyn2VFtQAbK62iVeTivWj48JtV3iQp6Czedee7b3uyxe9ypCgzBLXg15beytYTiB6pazE1h",
  "key4": "4vR97eD6FSQPyBdHGw61wBbRUFWadxVx4hbKDCEamiiKey8jSCTj1vH2ZFyunKw934YTJr98VjYJ8sJd4fBdz9vq",
  "key5": "5zxZMkeE2XQZVixeZZtGe54TXYEYuABnVP9EcpWXJK6bJyeBcGHMrpg4s2V82y7sjn9yYpDofCDxXf6vVN3zvCD9",
  "key6": "4w6t9fJUUnSbtV7u1QpoF8L6icXqYxdjB4xCjjxMb3K6ykCT79MCjJqNQubW1tdyCzAcbNX3BPshGWafh9TqQUFi",
  "key7": "2e5rWspnprEix25pZpAoHjNhxPav9BPU7qwRZtyfCZcxLfXQvZn2BDecBRgwErQ6RW8AHkd7LQvSTs8bYib9enhB",
  "key8": "1133EBPCcMLMGLwvQsdyRB8zT2VtmHHwuZwHm4Pwuyau6coQx3PLfa4qGLK7afYCTC6yJJbhKM6tqg1SyEj8qsA",
  "key9": "5CVEz927tSGGiMgqCMKCCyzJqapXsnnpZnALifXMYk16JRJUQiER38BcvPRJ9kzwozuawBLPYZ4SoQ1xULyaCqHF",
  "key10": "2rHPwHQs8BwDGbUZzrXso2gpAxLefbKrH12FUnismZJeeYAesoFsT1uEjY9tz3j4UKDT6sR8UNhA6DxZBNPUC5fA",
  "key11": "DBRNkiDZtxUSrN5J74UHL2tmFSijDHfjuyDThr92eQbbEkVkH7cdnsPAy7tTt3uFGszUwu7j56HMUxtwUQq2v74",
  "key12": "4rWSm88hbHXFTLR6UvUMjy4a3yetXXBLNcQpWn4VY1Q3rYRVowdcWCSBYhXY2p44KyzgGhMd3jB8d3PzcmX33GVL",
  "key13": "2VPq3La4XLMk9kgJuuFJaDZuoXdrcwekKJHhzCXgoSjvrsYLqJXf6HKnM1mKrioF6WhyJZwcmuH66DBko5NXV1wr",
  "key14": "2DCUfkdEV2uCeUmpG6moGJ8conjJiN1ngcTLsbqn6xgWovvsVF9vHAwFMynuwJcPfV9WfKcXF6vcFAGq8twbKfMb",
  "key15": "2hUzBDTJJBG5w97eRgdC4qE6TeZuisjnEWSwKQJpQUPA4nqTF9NQJRBTaoEU9DUMEVBQWagPUioYHYtGfs2G5Aiz",
  "key16": "5ht9TF3SbQjFCbagBA2T17H3iTeKW7NGzFNjhifNBrtxLBCc7NR7Qc19F5mYppr5nEWPdm1mrapb9uG8ToY5Fvn1",
  "key17": "34WRmH8HiqA5tK8e1KhfdAe5iG7vTZHoQeHbQSHkxNmk8DFTMmgCGEidY16CnSrPKzZn4x6GcdXfQLZJSmS9VeqH",
  "key18": "4GCWjaPqKVQmoSXHBfikW5C9UsmKnkYVjSnZ1Nio47h6wTdqkBAiSe2TJw77tLDWhdtiB9i7ipxHqP5fY3fThXEW",
  "key19": "4JKDz48w8zsCg5gc21huxKwiGtAVwY6mK5tA88vwxmXo2ZhN1MxCMW5QqwGyqyoJebvBS5DiTG7DC4Hsqv6P8nJt",
  "key20": "4qWZj6Pfpb2CjM3JfvKjtUfKm1vcw3ZqDxDv9KjWKJQJzeMQPbmYt7NWeZM8dEYiWUmLqHRAttXG3Mh61146Vh53",
  "key21": "2WHuSR2wUVN1Kh4XLtqM6ocwstFLH89Ac9o5Gr8Ky5LX4kG6oYB7qojUYvYJuhBwoMwzBnRpNRYbJuDN8zYmK9MT",
  "key22": "21XTSTNe9r1FPkbvNnh9ZQ6xp1dGXCyRwQR8j9QdoPmksKvPD3dWKrFYt7zyERQPr2RjHcuLtoyyZGBLPwNHxnba",
  "key23": "WS8Kyz9VpUHr1eSMYCAkDLQcwNkdDT8sp8AUo3wkN8jdKS3j1s4dBbCVbb3TVvTSFKZ3rBBxG24Mrj4y1WeuLfb",
  "key24": "TSFnkRUYghznYgoyKzCP9VnY2xyx4VN3VpA2sA89StSJrCY9hzJ2QXW49AFnoqahc1vrX6GTpg583X9v2iQypeJ",
  "key25": "2FXPphFUgMb9NwjGGDdPBs8uEvnMyDcAnN6d1AYXBCfckoYs6DGev6eDqXP9wdcWyA7mpFun6mTpCmCoJy3dr9qR",
  "key26": "3wDA5NVg5Pi2DHid4KpfPrjtnru2qZGnFCoUmoDif3DV8iHUtY1HZsLSsjUQPyzrYtPnQeTmNjEuAR8gK3bCMkGA",
  "key27": "4ZpGCJBmuUQTmFN54ZS9Y1vfUbZ2eAyKBZbzNhwdUGexrL5ANzGLZ1qeZ6tG8T2r7BhhWUMHEqQox9ujYFUmXgDu",
  "key28": "5kUmEG8RQu56hHS4GdxZDATXsnwKugYtFaWUe2CxuKTRdft9TLWyGRp5TH5m5ZNEBiUAJsY6dMuuiUcYg4tvweMM",
  "key29": "5kbv6pKdoE6qxu98AHbGLk9KFNZ1PGPjwAG1wPucQFSuZHdw4PEo4NopxuZqH4KuXjrQ2CFtvGn1a7F5ySQbkz8c",
  "key30": "2D9pHz4D5g2WWfjWTdhPzo6fWdxN6c28rSiFUZo9GR7W68XpttVkT77yeH4sxpG6MsnoCb1xpsvCw23zMWDeetYN",
  "key31": "Paybt1qTAAj8XQLAj6vAKr3mkate3zCPhGtAUsHLivQ7bJkEFrdvmypwD8pwrVbZ4vGAKX3WThJJzeVJodLhb3h",
  "key32": "2xTGNKujxCPw5MwAwq1irRcKACYEehyYWLJfat6Ro4ZcgS3hmfYRz4hipLHRdJ2LJ7uQe8MCNKThVBixLJS6xXPN",
  "key33": "4ntZNQW5N3GG8AHrXroFGLitU6wqUpFNspqDzura8v3ppprbnPMCpZ8KqEq8xmqFvnmmoT7GEvCW8kQBtgYyqVN2",
  "key34": "5tnbRdcfnwN5G6zJ2icgWEXCLhnHaq14Tp6NvjWPVMDW19Szj2nVRRNwwLeGrqnCthtVxBMJPKamkRhvMsQVQZjp",
  "key35": "4d2FejVVrY1KPEFM8FtjnnERiaQxUzYezucFBbYo5HycFN4eaPN4zvsAMXQJJZhQgCUvweYHYG7tqHVkiz9fg1rM",
  "key36": "2wmNJJTRtzYPS7aiKxusU9ipzgmz7bhDdVTTSa5VSQ4mx4LdednBzWrbWXetzQZ1uKBuruhWYWumRizpni8KANVH",
  "key37": "51n9wUyZZJNssjkPcJ4uaHSojDCorRrN8d3s1btrBE8FQmh5VFfzZkA1AC8K9pLJn3UbtrDrqL4sd687c1JiywBW",
  "key38": "4yoH6mr5PmXGkwcHtNvdRcma1GwtpeLjnn4xYswzKnBRceH8hPoHdvFt3ihuP9v5XAaUDTgMiXUduKp1iFAwL994",
  "key39": "27DszoCuXUJhxYZW7bTw9YanqoJ41wzHUXGBVPWKZ8KLeS7tqDfps61vdswsoxbkK4erQhSRqjAFTPmbuEeK8C4g",
  "key40": "3Mgs1o3DTUFYdmQGYzprAQGNn1LAzta4QuM6579T91ZSXV88JsQKLuWjcXK6BH7fAr4b2eqW8cYCGczhyZaTyioQ",
  "key41": "3Js4hW6AuQNBtwsVzWyeB6GkY77gXCAPCuQ6QjwfkEB4PFUFiifbgQCsWfGKPCukrRdWDKp5Hc5VqynUJXge51Ki",
  "key42": "5a7MnLcMnUHFT47Frva9ex2PUffgUES98ddponpJ2PjWp2mat2UJpzF7wPzskPHbsdPQUquzgmXePkm8ojarh4WA",
  "key43": "2rwKFJrqumnWz87L5p4eypy4CpFTWvoMtZyDUMjzkn2p4fL9RVs5V1nDsMMuU2DJg2JCGNF87SLSrJadpsLuYhL1",
  "key44": "7k6FmKT7c17mvwr2fEe84y1pTzLRGTHrNmFCuUZMEBadXVZyg2doWo7p8Myjp9TPyYMJ9SZip2vhXGyMQQBnxQt",
  "key45": "2UzwxwWccHJwZMBxu8GyaL9LSYUz1S9aDD2F9oxXa2pEVfiYDt9LE1twXxz3kPxLNbfmYBjEeYZw7kMjrN1BhyWB",
  "key46": "4kzLwGabaQHDAAN66UXtHT6QSrRBtHPzBUnDhbVEHbk1xYnj2a7uDh2TGi3pvv3bVf1qEqoQ3YCg59GEA6T1exA7"
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
