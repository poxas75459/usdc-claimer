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
    "kUkLWDjhwozTYHRJoaaEfkuHLs4qz8ZmG42yoMvqS4VZRoQ6PUkkpTfyz5EAc26fYW8dx97P1ugkLPWxAMBdMWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57z2kaQoqbjRNamvQcsYn9TcexjfN2HDBfe2DfzopjqL9cLNzp3ad6Zu1jqs8oQzno2ZMsPMqYCCHMDHzG4rtSbt",
  "key1": "5UgGKyLgeo9Dc28J7KqMqgaj5E84spguuYQoz9gL3txLvEAvYJ2Wa5RhLbZmzEvziEsxf8CAroGFKY2ZzgPr77Gs",
  "key2": "5KUSdmThR62Dmmv63FDBTVpwhUjevHAHVC9Rox4u3SQrZXfRXcGdsJXPnEcenJd6yzPksdWNCaDurLtnFn4CCkvV",
  "key3": "6iaPnN1zqxRMu7FSejY9KSXiPDirp1ERin1tY7j5SQdFUMmkxgAiMZPNrkze4grRQUHx27fXBNYFtqn7PaYdvN6",
  "key4": "Qehn76C9qkUWaBSxb6tCkzX8ir3Z77eySUQhDJvEnzqi5xfbLr1oJEqwVe6nMaWRSaz7kSMsj2gGZFyuJgRSw9U",
  "key5": "VtGMqSi6e4ZZubXXmQhxxKHwvqNieCiYZsbdtp91G48Rp2i2v7P5Jpuf6ogSNum6rR1fXJUwT1zgmLNf2TdxqQQ",
  "key6": "2JqHbHQgto4ksFdED494vKnsB5L4uySaCabJAzN6iH572guVajaLJTH9arFkrvS64M6QfLUGkNCzCGosayR7ihFz",
  "key7": "59o7yibNBdFUNRrf7dPFJCE6GceiWrc1BCvQtsh9xQaVyvxujXqGrnT9TZuQufnaABfb32PwEEcSj5WYnVeV3wZ7",
  "key8": "5A1QKBo63GMcSz5FS8E2xzGZQLBbx8GsKTtZKEBXbkHaJodyRoYo4s7bHoPASEhaAciXtzqoTSf86QBrhvqMuxMg",
  "key9": "2b8LZuNBWaRQ1hXtubkJR5VwjDKRmvDvEUsjjQkiQoobEh8MjUuoan77tgrjaXUowUhWRCwopQ2xXVXjRoL9coEi",
  "key10": "5oBCh9vTDUzyXL7n6RBoBU6zD4EvFE8XgsyVWNDKiFCQT2L2f4713PWQQibZ9j36zE9edxwmsEohJSJ5QSaQFSMX",
  "key11": "541uKspS8kCndLpvdsCuzJfpcjh3cZMBLNWvkrfBFNDfL16TCx1Ph45ZCnkd3kKQKEGWZz6e4GJvwvbsJYvgYe6F",
  "key12": "49XfG9RoyrPi2JPakJBkv6sZx1yEDVpEQCdNSTbwNCi27cqD8hKBKqK1apa5LQSCwyZzkDS47haPZkvXdkky4US1",
  "key13": "SGmvpz1LU5Awc3EpQMafpcdpQxiCrk532xuu25a63a9Zr2rNyhupqrKRVpnsnK9dDuigcY1Bys47dM1QxyZGoGV",
  "key14": "kdoM43tHBCKiJZcX9sVp1VuLMNqhTuzg7qRvnMLcW4v41qNkGd4Td4ZYnsXx4ekoci42yYUwFNQVTBYp4Nz1oTv",
  "key15": "3w4PR8rMEDinJoNAHR68jjGbMzkFA6ozVkP2s6bbGmNzSQXhkwq6fcWrd9DntTWyNVQfRKwg66N6muT4NXwpt4MC",
  "key16": "3BqjEEnAAJwbvcBAe7gjrP6F8Gq4N5mUY1WoJrbDu21Kcsw87q9SLqY2peo1m2LZfrWf2fJGbADdqRvFvWX3BWpa",
  "key17": "3hQjgaeBbbj8GNM4n8WvxiEvp4SihEzrNRNhdEkFhJNJiWmRT5DicD2dkZh4KKizvhmaMg15Pwd49nQEEMsmJfVN",
  "key18": "Uu5U11niPb5aKSxHgnaUTnPJwWtFoWi9gbiSdE7qVcqD9saJsiHVhsCtCDkGb8XbZVKSZE78qcvnX47q1T1fU43",
  "key19": "4t7KkRUGFHMr9N8gqZ53odY5PwnDvrRTEzUssrLNTcB6d7tFrDsNFx58ixos73nTNWHG9vRv7bKbth6g22MuRY76",
  "key20": "nd5Wy6rVW2L5kVjDUp1XfJyoHCwbibYbpbYuoH62xEQPt4CLCCDGYsNZfuBJmY2iLRXs5tNFYzJxtoeK5wA2oBZ",
  "key21": "4H5tGqgi4nDmK1FKP6wj2UAGnEAov78LpXd7xQqRL7ZfpHENarCSkDwe3WF1ZtmXToXPyYERFytmryqSB2QKAssa",
  "key22": "4vp5WxFTfMBYhc8WvdyCPm1Y7Cx2ZXpvsKfMWHh9xj9NLXKAqyVLTNoN46yDUPVzMYZEjggVsZiAkefkiejrWwEx",
  "key23": "2cAVXvcsweYdeia8cAtayVwVEgmGnvqSomqLFC46Ld2MUAVxoEWLxp3tKmj1KZGdh67apqHep6iEXWYeHmSyRi3e",
  "key24": "4HGznveDP14g5tSP6pEWNWhR7mqVrrRRWbR6DPnx5FKf8kRYzvtPWAsnmRASDfspJbojc6xr9PdgXZ8fAs7FQBSm",
  "key25": "4KdEvdf7ASvmH2HyLZY4mcZXysRPBQtKK1LXGLpSCEw6xLJmfDwGMEcUAxzqJXSpX8ZbwLzmZNkQ7ELwX1R9ebzt",
  "key26": "3sNtY3jxL6JGqBufacwauq7ecnVB7TvtszVCU97x7qnWkRMhHTsqkAZ4ZxbTT9hgYXyvDh91bKwDDn2TgLhDSQjj",
  "key27": "2RzsQEbVSnqeG4Duj9nA3ViUKVo6tFviC6qnc53Wnvdyt99oyS8mx4Zo3KfwKbawmzRPGAfu8bFN1yaidNM9sqCy",
  "key28": "2icbvuXhiZrp3ZAW5G27LW4pAPiTCgqkGHPD7Dtnceipd1VYMNdy4TryB5oV4oByLZ4CQexJZ7uuTzo1AFxxZiGt",
  "key29": "Mv6c9FyzaVRgQqC738JEp7qJUcFUkbutLRLL5xXg8uhA383BfX9KtG1AYEgc5BAbr83UpU1xfJ38tobgknvJR1P",
  "key30": "5oHE7HFeE84q7WHPNnbF7D6zxSr2yNLC1S1bj7AkgqYQsyxUeTHXqsKxj14aBjN1z6yua66QteuTnXiPJidpSxr5",
  "key31": "5aqzpr8C3k1MufWmHqv9gz4KEqaf1LPvD2ynyjf1RYb6iGBeip4QM78nBETSuTQjSaWRxKP9xpMePGEryWr5gf6E"
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
