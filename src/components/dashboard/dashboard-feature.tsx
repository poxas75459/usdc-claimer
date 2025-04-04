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
    "2MSGyJTc9rMFPgCpqV3HGia8uSvQBKgxEbfiovwr36jTPE2mHtJyF32B34qp3CCTHoPmt45FReQZy4yS4hWUntx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMybaBhgAM4popC2bZMb18vyNH6T5tNA5hbCay2ZfAKdbrZn4WD7sTyKjpjzRRxjyFB5n6C49htonnndd1CS7f2",
  "key1": "4MxshqzhcSJHT3ft4R8PksY1u2izAAa5URDN72BjhkhuK1omX6MScvJugYjqrjfEJWJoXTwsfuKRpFPFBT5kNhsP",
  "key2": "5nnP1HnVLxL5p9Ts5mptvSkKvgKjQEAGLpmjMqzcaUksFdERdKVvHWuY3mA9n6fYTyFhjouRir1kud9hjCzDTBPe",
  "key3": "2Lk1o2ZDYJYyg1s53r5YXN4Cs5J7n81ZU6fJzxAavyePehG57x4FXsNt3kmTNbisMgszyHWWbiwHjvQYtwmYxJgn",
  "key4": "4PKM5i9cNw2nGkaTp26hUq9XFEChJe4kMrUod2BuLTWrRc462Amq3kKsrLYFRRJv7Dpwfey1ZYhSg7kHsiZVQaiL",
  "key5": "6AhyvRrq82Jo4arMYzdFqLb4MYnMea7siF9NmYgWKjNUvENY2BEgNLGXuvdL95hXth7TGyc6f8p3PL9NTK9pdv6",
  "key6": "4PY6nQJmxzUrRr2qSNUGm4jX61mF2i3g42c6FztGLCm9QN7KJ2H8XFxTDLYzZkXrDPCtuUcpDq1rHrcQ6ek1Xqnc",
  "key7": "4rrVvy6PSifW4WqvYSGxuDb8dTFP1HQwomfXny5SVyrWjzvZyj14bDpxdeYws71NiMFuG9C2frUV5am8LJQQe2B8",
  "key8": "47A7JJieHzmQC1Pi1VhVqQ7RxCBLkRX3KRwAKDWE3ZXGJLY9f1q4f57StazSshmWp4bbsP6wVEtqGZ4VLrBXrhRf",
  "key9": "L3QSL34HVmzkFRcpscjAkf4Ab4E88tcqDkrTFtN6V79JzdnRwmhzbCja8zAJcV7ushmzDM5zrar6Xw4NKWzsbEH",
  "key10": "5ofNKwaMvmWEFpeNU3XtW3CUgRAC2eUBrQtXUngqQZKik6sJiZevTonmSwmBytSHmxLACFzTVb4RvAwQQEbLuyA9",
  "key11": "LUvoNGR4hMgGzMggy7iaHaDr64aum9VRhaEuqkY3Ze6k7D156KxSantqU36QTq9zAJ31FgxPpo5hLLWYZeqPQdM",
  "key12": "rVY5GQMGkLYLzwf2B1nu5WEWumG45PMryaCgSugYUg9jQJsaURMx8J25qKVC886n31GGaoM3a8XkjB92APLD2gv",
  "key13": "4nRPVeCWp8tK5ejxybLDGmk3GymRNLVZwGmY17mwpu4576YheNEPKAoWpQ9TU418kLbdTW3MA8DKZJMXLzcHx3hu",
  "key14": "5Xmo5rKoUeuTCPCj89fxpta9uRrr77Whjv6ocLFQwP15k5iAKo3d6sVu1kaoPJ3ukLX8rbfjqYxMeqUjHXXF5Xpa",
  "key15": "3R3SeDHQnvGmiizSQL8CXMZ77fG2hM4bx2VGykVcjeA4pnku8LGCysUHmxTuydbTHZQg1LVA3Kd8c66xLNeFDdfL",
  "key16": "4dJnfanXpnUH9m7K4mwE75VDcxLm4dZRtGBSJDPL52Hxe7NF4pgwQGeqeod4kjocuEhLM3FArNaxkfZ82NpLJ8aT",
  "key17": "5GGkmKDpZXnJVE6E2uFmU5hDq1Jn3SXzvBbvbaqJ5uFwbC76qmFtidde5neVF9VgYbQpaDndZqvYF6m7LYni3YoN",
  "key18": "2iE7TN2QJbmFbh3yu6KuoeJVs8GtLm6JvNjPuE6CBghmt7WRbHENkXQbSbP5bjLqFjGY1jV5U5hPJHKuJvBWXptW",
  "key19": "4mQUG4sAawaERWLGhkcijMkEuFPNi1gqrq42opvUP7zKYggdobn8f5HJGh8DcBXQNLnCvP8u6zH1VVy7ockNQY3r",
  "key20": "2cuDVaQ8BdixxSujXi1qvXXpjxBch3FBFSbUVcq8Jd47BBYpSQUobuGkDkDkGLR2Us5JK3jCjXZbS87guJgwJGJY",
  "key21": "4pawj1vcbiUk8Ji1qGeEvzv7mHFGjz6zC6FzX46WKcct4FQdLCYrnfq5mUavcswPQhx8BnEoGLMhe82U5wXFfZvo",
  "key22": "5vxGNuFAx4sKeN5u4G1mTeYj1q4JG3vaDFcpt1zysx9T1bPB6jGtDcnYEkq7AgzYYJg4sQXU2wpw8CGEbKtvKSP3",
  "key23": "2BKa7Xz7ExjZwoAx2sVMBxyLFFJgFGB3JgLHZohXQuHaGLTGn58UtAp8czzUPo54baYFEg8BcExZ4nzUxruWfEN8",
  "key24": "39BxiXMv2p7HAufpd8zhj7p15thPgrC5ixQiAxgkDCQQt1W9Qty2FVQGaGaoApjYydHJrwhiEJgFBrpoixksxi1L",
  "key25": "5F3tHWz6cz6V7QtCjey1pH6Cvd35znxuXVpu9LN8Ye8dCyEGa7Rt1khiGCayN25WxS5XAwzJ8MThCkoFWSMRV6mH",
  "key26": "22nyBZ9jWV8nsC8tdPLSRrqCScx8wmAnHuBHbyfq2zJiViNk9z54yuuHA8MmXDA97eaXy2MegS6GLi2gNdRpzN5G",
  "key27": "3oUk8fDGtH4TScrc5fjVWgWZECujtEWKQ8foQSqb5VmTuwwsxnnSnT3VHvsyzCfB2DtXt27EyN2uvCz8Muyms48B",
  "key28": "5NqGX3S1czcbiM2PHe3uizFwSmYEDhpfaBzPvNQYpZow4SQvV5Zw5fsCxggRnzsVsTMvviyrtdaDWt8NTMvErGzH",
  "key29": "64sjLzFwDz4LUh8uzmfxczVc6cWLsfXzp23K87WDYugioYq2pEsHETBiWvk78Y27Dh8MTdSQtCeZfDu1hrnDmkkr",
  "key30": "QeF4aYPpno1Qg3We6gSvCxstLzTcFpTg6bDocEShgJScB9XsfHnkm4e42KYjMY3CRGgcbJTjQvX7MurbsKPXmMu",
  "key31": "ZuUzZBAUX3sYYkVeeqNCqbuq7tdyuebW6jKcGYRXjn9BBhkLxG4767ra2HZx7h669c9k1uD4b9azBbGzM3ix7EY",
  "key32": "4c6GPBbrkDuxVR43dVLd2B1tk8ViioPbY2pEz6qC84sSXSfGA8KiAovBdE9m7ZcSRUdcuWKwgbV8htG9SWpeBkvp",
  "key33": "2snbvFvjzoTZyGeWN4v5kfQ5KkZpWfMCF1Lo77F9Km7Bgxppncxj8HE2LtX4gk1CyPRFisxR6TquCHC2ayioU9vR",
  "key34": "49LokJUcaTdbuPY6yv1MaiGdbkLye9Y1PkHW121yn8JeDND2PmJfNnHgJ6pv7anPUXSutL924t58GWv3diZDG4mS",
  "key35": "4V72PSK22DgWj32rzoL622tYLVxRS8Q5phkihsB9wwWjKFwwFennTXbuvLo1cMXpMjHmpJsKQDE788y6NEWPBrPw",
  "key36": "4SdHdNBYAZ1R6y3kneDMx6wFgwdzJU6QVBieciG9zW9Xr1NYqaSC7DtSnBYAbfSUX9xHKj2VbdqbUBAHxgYcJh21"
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
