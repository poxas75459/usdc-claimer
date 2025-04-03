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
    "4nawHXRhrJQqPA21dVYzs91x8qMuGAwSsKcpLKv7GLg1PXeBh3Dp8BzHJsRjXc5wyuH8HZ7vW81mQnDANvng5wz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCwq1t2QbURPKfA4ah1jmCRbCSG3bU85wmmEs2u5cScY72jKqXU4CwTgvDYNTE7nW1VYnXeU8kJSq7gVcZfevWC",
  "key1": "29HMyLrakf2VL9gZpjXTjXdcYANs7NyWCwF3HQQTQzS52Re9Buda6LnyowPNL4qztf6rRFAoEhGwvPjrpoKP4jtd",
  "key2": "BD6YHnPzRdBUqCatp2LGX5ey2WFkWHsMgia2tczLQk34g7pdZVDcjtrHRsRKXQwjAZUo4Hy5G3gbE1Rzc9yEzar",
  "key3": "rLavmw4mm5PjKH15pMEzTYdoB7GsdjVT5rTZTonn18AqkT1Jci26A5ScBnf6b7YyiUzbvXHXLrhQSeqpMyQWL7s",
  "key4": "2dnN17xZMPBgkByHrZUuKmW1sBguTz3gvb4Rz5b3VWwLPu2BHaQMX1yFYv6RN6Q64KMMoQEDc2okCeHdCMhgKC3K",
  "key5": "3WPJTvd3R1MGkk6wsY788iboQGVVsuQknU6jok3eQG4egyE8VCGXXTXUPakw8rz9cZvxzH7jcMj9sxA8VSSwVt78",
  "key6": "dgiHxwN86jjhqike8dPtbpnLoYbGurDk8NUxMKrARA8haUazyYnzg1HDdNAPPTpS3ZhGHGJRpuYKVTNjBc4uCTE",
  "key7": "41FmMXf6daoBjcg8JCwjpqvvQ1wbuNMdzqDy3ghhYSPWqFGb77NKoZv2jZr9QT7eQzgrEU99ZhuNdaQATUiDaW69",
  "key8": "4Q9YVwk9GHUrVgMi7ih433UqCxTj14YdFEXhYpWDck8cbiNJUBTU8SGWVunMoeA938zodFeKAFSvRVZMB5hqs29q",
  "key9": "36Am5vWB2NW4xt7b7ddqyzqLvVs6TFmC2LxnKKrySgZGxy9DDzfVJJ6jKzneHKRZNau1CcgjCdFTT4LqVkz2PScS",
  "key10": "3qFGuNnGPKX9aKEyH8ECWVwxoixxp1yTQAC99ndSG2iWA1ytGmEHEjVRqk3wdBo8u6NgWGqfpZv29ZSyKtFa9Axu",
  "key11": "7mgJ7kDvggueWec2H6U4A78XNitR4D8Y8EjUPpnTH6fZmoCyncR6DvwjdyUHnx8CpV4WDPaTJUr2gq5t9qDB77b",
  "key12": "3Aaj1inQqkVyDYhGg1THvDBgdhAsGuMSiLXacK87g1iy53URYb7nVszpJDvShv6rzVrX7GDZjT4Pa4iprLC4rxnu",
  "key13": "53pRnU4fahQ6CqYRzoEK3YXvLcYCP4fGyC9wyZ2qTSBNCDZ9XjKqazg9PRYxk6G92H4ZVhLXn1DZ9LirD6EZwi4B",
  "key14": "4XMd5o3aaTqCPNPFd35KEHvgCkNbLnruV5K1fcN58nwgyMs2FXkAg697mBPo6SrNnkpym3888JgX6pHyyjEvUqJn",
  "key15": "5ZtBqc36WRZQFJwC9GJ2Miq7knV2MAafuNmJEiUsaBKiaxAWLQ5ybJsA8mZbyfUgZMR1TWr9WHSx9DhBFrvnHor7",
  "key16": "4zvZKbNwsbZFDysMuS4ahJUrWuEAWP2Kth7W8EnqQygAETHrutrwbAuQNQR97TuqA1vsZb2v6rn7xDrM8DHyzssa",
  "key17": "3QSV6g2YWKByRnz6UYyR5jyTBMc52hAsgxMW1HPPUi6SUXw9b1EGjMYETYiWsKjNbaieaD64MhfVXaJLqREJHGCV",
  "key18": "3bxJeMBnk8rCZjnZQsfBc6QS4FBWtWLgYM4h6oAFH4yzXoA2mKvw2q79pYrsQC3bhYPv93wPpuNZ9kBqheYgBNzy",
  "key19": "3MGamFDCN1JZvgHG1BVuTVV7BLzaR9vFWHc8G83BeVi87w34Kr4f3sSNVpPv25jkX1HKATxHDmKUxaXZoSfba5GD",
  "key20": "4XkhZUzgaddXp6D8Bu9zrHGMsuT659YBJ5qBM1obDFKxAu84fD8CwvY8fPur7XvSsSQSDTfJxXC8i1uHzwEL2VEW",
  "key21": "4xgqkxW9MQTwuXMDzhUTh3MfGrJzUQuGQf6joYZnB5QXFCLXR1p6a4hJYaoFCHLLzpwMwki33g97Tih2rtFSP1Up",
  "key22": "2KBCEtF75XPt3qak8PBcwpcT4sqa5KxKjjUFCTnxk8MaLDy4m29Re5Cnkw6JTygqZ4UzNeGUfq381pXuswQTooRJ",
  "key23": "4BtKJ9YCKwUbpy7BrNZ8XXbQCicM8UaBipXuetMKtSKrYQuGZdGGX3yiH4GiedWxqEdf1WMb5xU61ssLoMSeEHJe",
  "key24": "2KU7xGwzPV1x2DQkCKEn2wgykqaHx2uFhxxUubsuh3FKXFjo9yK512meK13awVeTcuGqKtPhtpPGmZb65MBKM7sE",
  "key25": "4hz4K4wTZ6NpCuJKPLPK4vnFcvGNpudURawZXtxfGYiTZuN1WzNehnSESjyVbkZT95pXHz9e2PPxKEodL3ro7QBf",
  "key26": "SaQqNfW2RhjCASkMVRtHx8vk9N4GvZao4NLE58WufJumdGYWPPspJLALHDiw9dyG7N86YjtBGKuTwpEA3Nbu9d8",
  "key27": "2KSrL5ed3bG6tW5vvEcNRPXgVaXQ7evMhHwqyFYREznuX3R7smTm6Vj52tAMCYsdN7asPjQQnbtTNmVErnhHdNky",
  "key28": "3kf89KHDX6kZLhtwLuBWXdLYV6NFKmXJ3mZNWiQA7at87uZN2TYxuizt2DHV1pYsbBf8eiYmb9RCckcPu2RXij6K",
  "key29": "4R9hNvqCs6bUgoM5Wkw7JBXErfuiAdHrs2QdC6Xd6QbdvCz35SsgrhUWUb6qcDSd2erLvsW3TdPQsr35tya94YBD",
  "key30": "48q4XioSpyi1gzfmSuNPLgmWhKh2AWVpqwMFW8TgYt9g5JhbBVW8AKN1KyzHE2jVs6o1NDs89Tua6qpgJ8aTawbB",
  "key31": "3zbZDqz7FrUzsumdn3RhrDcyEotyp5PzsYSn3qVN2KV8EDvMVDCK2QZsFYCiPMWXsJveg9Q3EhujgrUQRBh77oSX",
  "key32": "3uaoKGNfpE4hwjR3bMSu3cSVQMZkLxwC6iEwjTRrUhbVs9z2HoHpEeoHd41NJ36wPzqHihancCpJbQXUAhj7mNhP",
  "key33": "5pFKYSsfvsRfzxJpdiYwWmb834rVq1srHBA7Ui9bQbrb4qdGNc6CgmPzCsbYQhkVtVbaTa422GaKSrh36NXYB3Hq"
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
