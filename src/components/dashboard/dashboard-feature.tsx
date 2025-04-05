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
    "5JpYsKB7mGL5gxgJBQiGeRi6DmzG5MN85rSDioJrLTLzQwLW8hUJXsZA3aHVnxhpZ2C3KX8bH5u4U8auHphkHFGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371nSYUANjJs4NwJFkrcCm5vjbVNpyn8xoitER3ERtmVF2EcpTJu9pqrU3fVas2xNCYqi54atNMg4SqoAVkWXA2W",
  "key1": "2KoTFWh3XKNYFPiAqMTm5TUUV5NNkSsDp2UZPS7uuoR4cvBNvrLVxXHy1RkfSsRAw6QGobpRPz4QypeGUnL2NnJV",
  "key2": "4GUwtbumgS5hDC5mUbB15MdZvfyk4V9svNXFtBQjLd2nG4EoFDub2Fd53zhw1kLwXzxWCfn9khgoy6dassf8PUiL",
  "key3": "5gaRZgf7NZ4t1xb7uMXMnzDD31Vj4ziCH2LAwrTVSS9PSMVvNRoABKrFnaLY4QLcDtbNYg9JGdc9tq4nemPuGkfC",
  "key4": "4bTmrJyrXvQ1tDAya7C6THd73k3bZRvPRwrwYe3shWT5beUC9Aqh1tJoz2PsUcZdGgRCUg5YP3QSmQhwdx2Gec6C",
  "key5": "k94xyP6URYAboYtSYKfQYrbTQKsGiCCEMWVQUXRC4YdVjouPat8qjHaYkjvS8D2sHnbszvJV12gaEMYLMi39WDu",
  "key6": "3pFQf8LDqLbR86vetZf2DXbF2FbvhihtXGYKhiFfYP6GsTVSXjt5ymKUYvG5beu8qCXacBfYL6zavc2MnA5HvrXh",
  "key7": "2dXn45HtYVx49FsV62f9YMhY6MNKDHhCyf1Kh1pAALAsU7AhyTctaeq1AC66euXEEhe1nYLzWSNWWzB1vi5p1X3N",
  "key8": "3aWkBphvoXm3ip9a3r15PzzHyuLN9TA3MDzFqRUwNGoeSkR59Sthqa2y5aYticcbwCWrY3rX7RdbAnognYt8CvCd",
  "key9": "Wk32FrEaSa4FgpG8TNG8M1HxAbAb4wAis7QqutuZUdPsUkDEZxahU7gaAvFtiz1frEt3zKHAZhemdtkevZfFWGK",
  "key10": "3zY8VT1fASFN6u6KwdMNJR3jk8HLRKJnL6s6PtMHUxEyGBX2iDWQGBTDb7wjFSmNMaJjEHTe9amiQFbjVxA5vrCm",
  "key11": "3WfvcZgP2S9JkVic64eUf5SiYvfdNgXMEWzo3KH8uzkuNuDt9it1Jr5uCHGVeMFBAMN6pXWSDc2HUCgeeGbU33zf",
  "key12": "5spdoSBpibPoMuf4AM9XCazk8RuwTXKsMwgnBSRmCzqLZGNsWeSzLdac22MK5ogP7ixdv7uBuwQe6ySQ1paVp86M",
  "key13": "3MRWse4cDWFMJp3pyuT6rKZNHsBV7ehukjeLt2ApExz3CoF3vgpZmv73xLyQYSsm62dpy8kBq8MvFQBG2YcykSbS",
  "key14": "2t2Bg5vuc4ZcADS7vqNnUdqPnWjH8unC81jbbQgzH3Gj86pux2tZpToZxddsFMHKzVGDh4RqRiLkM5oxjQLTyTmH",
  "key15": "5ybNYH6LwYcRukZBhtCGJRZUA3Kfoh8UWwHop481MiXwPNqG4599SJJbYTQ6drJi4iVeruo5wD5tMtv1jUFaSKFf",
  "key16": "5R6JfsRUfPHdVonMJfzuZoXsXBk6g3XPWiC13HyHPKrFyPZoqbSnyN7dhA3e25XPxURwoGqeA1a3U4pNzcpTEC3T",
  "key17": "65Ay7ZyDbFxgbN87z13x8ivhxUJ9hhcfudr8eNjZeibmVUx8K1ugbrZvwJuH8ZE8XX2tSePuFo3nuAdxKj1hi92u",
  "key18": "253b5ap4tGywiZBxUuXXrAwEUCT1HT4kPk9UuS4ubs5S5EuRALCD3ndHvBdQPXsFEAQ5n6wbTHC5h6Xers28Eocz",
  "key19": "2cMo5Xr7WiStkgGQhHHeDFsmn4uimFnMrEDcT1zdkrd8VNEHy9GWCQNkCyL9VxKPsL3iEBBA6QPcYPMq9SkdUKgr",
  "key20": "5hFC2PvtbLWqiDnhTkUmtLFA5a3ai3JdgWWUd9SvXKmcnHtLvbRP1uqZxA5WpQ8EnGU5VRXEeC35Bwq9TTQY4AKu",
  "key21": "4QbtqQbCWV5fnFqB87qXV8qBMQCVp66hghTPEiwLrX4EKsgG6VvYtXpPUEick74ubNWBo6YPkKXfMScGoZxeMgxY",
  "key22": "5qWoaAmu9qRxpuK79zwk5wtx5aNCf1Ah8xX7xFpec66dyAvjkRKzaFF9LyWXU8quPLhyEhiWUEmupQpnfqAEnSid",
  "key23": "2CNU3vGn5UV21dUDo4Awfy1RaG2A9a46ZHqskC1Ph4gHYPg3ko3GkccbjVHW6rXDcw2yuBtbo43zintYZgjZPXcH",
  "key24": "3KR5Mk687opsv6sAXPBnG5drKaHkK9aB1V8j5AZYLPmCBATtzgmYn9zZVEUgaRHh7hqGLFHJQN61xAZem8XwKwDd",
  "key25": "2s69EAPMb3PrjErba5xHbR6qFtP1SjxHb4yLYVkWPaDCQ94dcUMn8jSvNsYLUyGrtwGCVFYcWhqKZSRt4jtEt399",
  "key26": "5GfTDmycAQjMmVatjQSZSWghYhGUcAWdd82EuYtSFTHL1X97pBt5WgdHXWt9Ysyr7MjrtURdagBszkRPW5zdtXdH",
  "key27": "cWuHzkhrz79sAkfYWjCSozBW9PeqjYUnjAMHKF2RErdHjHbFTpZBjiZBePndNQPdz4BREojT9qTbLYjJBLeWAXH"
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
