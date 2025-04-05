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
    "3AUta55kck7E9MxPmAiYc2FDLMCFzcXnduZcWMexc1uT4YerXKFS68XLTkeGY5KcHCvpwemDBXofUhZEGoSeSjU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tMo5UYC9KZ4UTyCgEUWLHJ7JqeDEeTA9MeZjqcvuNM6sgHrTR5GwAYNhQKxY1imTzYzm9bea79L811hMJ5i8Ri",
  "key1": "2AkfAci65dJu3DYUgVqgn3jivbfzt2gu4VHDjCFxT8bParnhANo7XuGd8ubnoBq1fuK9hjWu9QxV4EEfYXL16mxH",
  "key2": "Ks9s8hkBYDQT3pSk3qJWftmQ3Cq615ujjFz9vkLuc2RGyWC2FmhxWsVe4EXiwRdiUJB1XiFvxAvZX3Lg5xyvapq",
  "key3": "3nbGHJ1xRCkx6RzB8ggSDVVdNgCsJXmqwoi3KvnkwY7hSRaqnM4fguy3iX3EcR1TrvLcMCmSCZbVf7JHyAX6Qjs6",
  "key4": "5Zk811zSnyrcSWLCcgVYXRrRknG1hUBxnfAkRd8KbPr6xkMuM7MuSNzL12g2QSN5RfT513GT7Eu1UwrcYmwCgR9W",
  "key5": "3uYtgDh5MJtJz3diwkhV3Tcxsy9FU7CeWqBZUxjMzsrqAK6FhUBR3a2ZB38rN7Ms3sSmtD5YfrvNqtkGSgP3LaWA",
  "key6": "5T7YSMBfWhAUfpbP992pRihWFqDcu7EWEJvSVV4BZM6pki265pxhUrav2Umxwd8N4J7MRQ2yZ1eJhrP8buK3h4oH",
  "key7": "4nTwEUXuGMvZ6Z5gqwD6asTDYtz8m8b5P4z1EmGn72fqSmTU8h1XeCtJi4pP6UbVyvZLKwhZz6JE3ZhTX1WhUPzr",
  "key8": "4HgD46nQZK7XaE8scZRzo63r1b8JqyfAS7EWTcwVs7fJ67m6NvoXxCDABLWebWbvf69CdPSVCW6aDHGtmFVGwgg3",
  "key9": "6eRcDv6obx98oP78ttNVNBYbKdxmUoZnBZwyykgdw4UnGBFYmPH5Xma6b9uihRk1iwTrQ8d4tYNeTU3DEPBsqc6",
  "key10": "YM5jLc558YiJ2j4WfsvWW6d3xyDp1RpBX5F3cDnk4hMLLSSAB2Qx1q29sPMSGGKnaRTiPdYRRHW2yAgG46nCWrx",
  "key11": "2T32ZraKWaDm4mpSL95Yeh6k6QFKy68b9HX6BpqGyARwsCLWLP4fKuefRBRrbeZruz9s7hK3aSonCTU1WHDard58",
  "key12": "51rKF7rVzEtUsbNXKWfVE8DxpniYjKC2Xn1D7EUTKaxFDZdUH3HWVtTmfnXduYDAqQj2kCMELypcxqUVRWTVFi7g",
  "key13": "4YiPkKXr9REtzf6xqcK8kNGkyGRvZFTzDyVdoezfQpycXNpodNDryZ22E3who7KPxyX1iJSA3QNnEZNLrYqC9qa1",
  "key14": "2vpaPvoYypuQxNTNaPPo4yYJivr3Rg94LKST8bdyKA7QKXkNmxugJtaNZaVk4j2Q5PzzB5d27A2ZbmoRU4s9n5JW",
  "key15": "4chq7LFT59qn82cr6EwRk4CWJGMsxTcLi1PsQVKZbeiuKQvSjFXkVygLxnsZGNKKCMPfCEyU97a2qZN8NJz9WhYL",
  "key16": "39SVLktDtaiFug4tGueuniPYDNhUGM6For9eV9dgBNgJmZzEgtJr19BGaDEJ2zb28PR5vhC9EnFebswb6axhCE6L",
  "key17": "JGLVFuw9XQPBiupBgGNidTuX5xs2AWvXKit4AJvob7HoYmYWeRy599tsCry5eJ98TH5FXinP7YLJpjqSQB9NNw6",
  "key18": "4Q5fASWzqWHKFhuVUEx7EFTfmq7YYccq8PmFApQc9hEkYjvG87BinRaXgqE59EANtPWRWcj28H6QVkypk2DVzhqB",
  "key19": "4UENTJE1dU9Jc69SsBHUCojJZsDTeURytinL5f3RyYwRL1jRHFzPD9pMs8ESND7bB158TquN2g268JphkCrNyLMz",
  "key20": "5QGYkbNKwj5Qqhc9LR74Mpr5Uc4budSAFyNKZnHys5RZwRvpsDpjsuc5KTMhXDZUCtAifchBJ8LU1VeREYf3ntiz",
  "key21": "2Q7r2LDuyaeyVJBgxKuGQLBmHaRjEmYr1m7aQSqKMnQPv7xmMGKdTjDHjCt25srLrv3qBQw3bSnrufLS3HYhWb6P",
  "key22": "4gNKV92X2uM4cAmdG8VnCAcMfNq4x2dPZq676biDYZzkRcV77mNEdpV2V55JrMjZGVdKGBm2PxcefviMcNQJz3pE",
  "key23": "2E4ttuKGWS8pGtnMFBXTRySzQvhE5o5ybewvFRXezYAqH5Eg1CWb9hvxYAbaBezBEbMjMgajKEkezhBn7RD97BjA",
  "key24": "55s1Zej7EoEWM9sZNgqZy4oZ5FKboVBr8Bim3P7RTdmXQhzhCGi47ZGQm7Yt2tVKb1fsDy6NsJ2JH5T1yJ4CYYf4",
  "key25": "2YJWVuKscTMePBvZLtxHmBHTt8t3EqF9HLbeSkiiBajun7PSu5zU72nmSQazbKqJx3DmWciqDC1Uu41W55zYRi1s",
  "key26": "5u4hFtJvevqwPCPeKsLe2uz7YzCqDJt8bqjwBjVnaVNMK9LPj6HdUdx3JJD19B7XUuiwp3ikek2TFBr6afBxtWzQ",
  "key27": "42jj6v7zs1u93WpQQQrryvoFeGjD53NkBz2ee9yXJ1hBoZmZZRTG1tFUus1GM7SFYJS1BHT26gF2S4kch72m1xFo",
  "key28": "2pvsNcPYbbjvUfWb9MGUGBubxCoka6FqFbkaboZEj2fj4qHVnvBHzeoPTcAHAxYFGHdH5nsgBZTqns1mVUkf3xq8",
  "key29": "3jipdtBwu2kd2y4n6PxFmzXYvkyFLt9sBva2FfSeZ4UJHyS1MGVc5QFvrdF6p5jJQAGYuzD4WijpZK31WoxSXRKK",
  "key30": "DCyoXGvgVJV43F4YEXoDzBindzViHQwQ8T2Qi1wx6zWEErydxEQ2mE4BhRrRW2whM81WnAv5QHKAChAs3RRfVf3",
  "key31": "FracJeQ5ZZ7wDkxrZeoX42Q4pXhVeqziAkDFYfgWNYSXWEqbfw566YQCM3uavVChkSnQdNiG6K1uc4Tm2LbY8ZD",
  "key32": "4SpU6a4xjAcjAyeWeFbv6DUk6JQR1j7kpgiqoEXifx6GyxTds1PvhsDvHJqVCe6Xet5yWJi6Ln6HxtoxHmEZomXW",
  "key33": "39Bv6s41rwYEogUAoFwu4RP5f3iX9RHgAFLMYdjyq152f6tMGFYxsLG5PSuuh9kYtGiiEQ8ShP7MdBkDBZSWTmQg",
  "key34": "AmtpEbcKdSBgWAHuvCkr3ZwfZh45WmddGW7iyYnP2Zv53wSYBwoKBC7j27hZYJ4MANqH158Pq7JQXj6aLuV79BS",
  "key35": "5nfesLvQ6DFa9TrmgYuEWStHY66P115Q44Vn6imKqTBsrELCUH4QXDp574ghA6bF4US38SK3jpYM3NbfaaNZVELQ",
  "key36": "26Cnwr1wD87DWWVhvzJahhQVuGhASnP6A5AbgpDYVVhiRxRqdcHinN2VgQV7HBRQDeVCE6NJx75cZD7MmnteFghN",
  "key37": "56X6HpX9QSY9hU4zgPBdEKVeLN9rfNc4xAVe6AK1jHXQXKfFdwLotkQF4MWP6i4Lxe9KLSSdXEukQKmRfxzkKY8z",
  "key38": "zeFJCXA51JRyJx2CM2Tw2ffokXetoZhFWZU7H4hKGybU9T11hCMRUArR2uvR6qwjqGnKKVUM6N9ngYFj7xMCnE9",
  "key39": "4E6z3qDhfUgN6pGhCcAMZoMnWYi7s7mUeSG2ihwW5NVS6QNoPqnmJByxW1hYrvYs3LuMxuydoc1QJBb6zrGjymv",
  "key40": "hM14ik1vLyXuiSiqrYxVm1Y2MT8TggVL7zTXnUgdhAC6LJEsR7k8k1YtRHFopke85orcmiXrd6L4byzzZxnETT6"
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
