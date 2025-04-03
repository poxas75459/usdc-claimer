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
    "5bKt1hmYQ4uwviAHBPfsmDExCfrCFpqZGhFHdKLQoVj8dAv9qYGHJ7UTHbSXpN3D9QZwZ9WBFpgLt5jADyLEoVGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YLo6TmCBqJQG4cjVp6tMK4vVMUxEUxLm1ftqbrTkfYPWvqgjUBcN4D2Xh2nzAixPXrmBdLDF47iyJdcXJrYD38",
  "key1": "5RPkBdpw2QqRszAHhqkT6cwRJic1MvDX86G7qvRzEUn3CBq8sSQttmSx7hyuc1MRF1L4QUNYZ7LRRKPAaay6ichX",
  "key2": "2VtTkobAu5P6LCpRUZL3vC3zdgDaUo5Mp6KDrwLRa8EZyfy33QBCuwGzAWTe5K3YJ5FE2Vf8gBE6nBwWpXW1PAK7",
  "key3": "3MZKUkWZauZsbeEBKfoHtYHARrsz3hxriy1evhdKqo2sMyimsiqutuLC1CHLmXp9n6aczyNrvsdwcFsZsGMDAQk8",
  "key4": "2tDYtVmcAbreZyKJZ7jmiHVYbxj6z93UyhLpnTq79i51yP8E8FDA5cJyyaMKFYJPiH4baaSbDDwPYp8SJisSM5Ds",
  "key5": "4mKU7pYDgwWEqGPwjeaS2HykxfKqxCqKbcBaKFgyopJf83tHvLx9tS9hkRiYkG2FrJK79TcU3xYvKQUMte3w4Sed",
  "key6": "4qPDoPj7ZF7b1Af6RLEekbT6ZdniAvCQ3ATRiNtYV27XVSw1qdmWMXptwmqKpM9YxyHFCs25LeUna85uAzw6rGtd",
  "key7": "2T1DGGKxMefaj7yPizNn8dAjMPR5gciupBrbvy1R3wTXoEkzYCPN5N9oKojqFMDn9zzwamasptm1qrh5o8G3hvqZ",
  "key8": "4yxQd1hyGQR2jisM7RQUUgsqiz3vXPJeTCUJCvPJAM68mDkFz8KNmRUrrvuZ8rjDtAyJeBN7rqRNpyj6pT1CYihW",
  "key9": "3SRv6JXf4pPftzkq7xCVDcXaZEMjDRYsB8Ya9HK3736HmpXjy77Rdyafsc2uHFN7zze8ZT7vbEPwo8bJahvrKYkn",
  "key10": "4bzhfsdqoNX5rDB6Y6NnfTASDs5DgAFfzYoL6caDoDtS9x4xaxLbipBpKP8JAqdKC5iERLZRTynXa3AhoP4AMZXq",
  "key11": "5MaRWYRKuTRArDHyE6vWCmJpesrLpyRDPpAKAZ992gAJEUznpchvpe5RbnEU4wTajHJPSwVKKRVQTX6gysx3R8p7",
  "key12": "3uS5fHMrHJt2188qy3isL4QMYd9JycaoXWvNY7JQnSQNZMLyPcH6sq8L2vMPjnDKvbXrWzkhmwgGMNsNFBMjKE1L",
  "key13": "3yPjEgRDQbKKjDZQRiupZnUdDXKwBFWKEM4Bzd4txX65PMbk3SL6eidcmbRcSXMFD8nWg24yn7kKPwaQfxBaoK6W",
  "key14": "658PPT8jc4gerLhTYeu5BMaR4qEXGGMXxs3TyDGcnyFxdnsZwDZcFzRFTrHWqeVisYYVY7W7hNXY2BVA5Xb88MKY",
  "key15": "4w3NZ7d4cU5cnso2V7nWTQiUyuvNhPPPPqovsmJEvAKnf7r5YU8DpxzgVgvEkwyr5j9YaKayA19t4aLzx1mVUWhw",
  "key16": "5JYUBLzjzhfRsvKi75MEZ7Doau2S2ifRvVfyfedY2KWF59ci1HKcK2xiWTz26NUdR4YeEPod12BksMherSG5YbNW",
  "key17": "MTftmVktsz1hbQFnVzMUzgwuAtGaPEk1rMkkcTVnrA2ZcktVnYgVaVVTwX8ZrPV6x6wc6RripSiDDWncsbqvomM",
  "key18": "4cKnGLjcMWsTR31myYXCrNvx4yccVodb6ZXy4JTBJoYJoqv28AdcR89nLAL8fi3Yow2cTYhB8g3weAj5jnZfYwG1",
  "key19": "2E3H8GT725uFvwiDh3bbCBV9RSk2KnznfpoenrCLyB3oLZ1Nu7W8WTDZtY4heU1D2svvystqpSd5h3ACMsRzJLxz",
  "key20": "J5daodTvtm2T8FyMRcyztHgpv2vmus3XPZYgybC2LAnk3dsq79fzLHewzY3e1rz93zczN5NEB28yEf9xRVYA4MA",
  "key21": "432NAQL92YxpkDt6yQ1jMohYwdZudwRcd1ENTPHaKxmzTrB4KUqmtuGAcgCteFT6ximFtuRMQ3HgPW98RrinKNUq",
  "key22": "LYPPUSENoEoJXZZtERf9wtvwB3LyxGEVkBt8qH2gGcZP4qezFMzvKk6ABpH7bUsDm2dE4bReGZQaFkS7QwZWkhD",
  "key23": "3JgcXE7hmUsQaprpYG4y4oMpkd7j4vQPQM9KXkSvitRruHo6PQB8Fe3ubgu9Kd3TMbQH9pKb4S8XFMuafbWxcKA1",
  "key24": "3VYdSdWnX6urD2wMYoCYenr8GxoQNVyYiUD81Kja34F9LYoDBhHCHz6aNwmSknmcWnmsgbrnAoA6mei7PpA6A1XH",
  "key25": "Nu48XaM1HzxEh4wsjS6opPSme46qbpPP71pZ16aKab91oUBSZ8MT92mmmN43HHqtVKNnrRZhkgZrmqV42Szr17g",
  "key26": "4aXy4MrdsZUFgvcKwBe3V3SgLBSVngyRPFA5MAd8ErPt2jw14cbwXDAJJKDbgUuVcdE7ZeEeYTjALb7DGTDLrLcY",
  "key27": "3uGbf8rRcvsQLsoNiF4gxttynufar3iE3RifgXCCZ7xGfoTgxP6GQnE4QUEKmppwjX4fm2nDsqERgDNYQwPZ9YET",
  "key28": "2JK2PzefFSYYjB3v4KVrudBXvwRkG2ajMDF5gKP7KHj6TytFQq2Pzg1SKAb2czQPeRfpJd8DxPEfebDeKY3KndW1",
  "key29": "2G5vwuroVUyZ5nTM6CvYTybHz5sx5d73UpRTSB8FYey9Kp3ymRc76mZs6vSGshbwttrDPSTtmt2SEf3JqSK97Nqt",
  "key30": "3mZE95Eu9QZgsxyzbrFEXzS3B4a3M1wBca2dUNDpeWe8zwiKVXP6cQrvNZgSYDAb9i6smHm2iS3fmRGmLjLRBJiq",
  "key31": "5PNpiwwjS2jBd3Y9xEYPvn3uJAP5agQ48YAcrciXsJJpG7aQonPxxU1rCVswiwH7ibkiXrF86Fi4P8atWaDwmgte",
  "key32": "62qdmcaQYZqgSjYTKCHuybd66tqQyBhhBZQPa9Kh31NeQFScwj9KhE1qEaBMgcdpZLN9i9zn9ox8R83LJfR6XW7N",
  "key33": "32uMWoX5yD9j3Wzjbtc6FyFYGYcEZUcY7LgKin79QJ8DF8e2GViU58uriSM7v4wxpxPFq5NKAjKVRY4yW1aajrXT",
  "key34": "5njrtLx2Dp1QPW5nD41vpJEkj8apX7iTAgPV55RFKhNn3d2BofpzgHxtvm1MEtNUghoTbEphtokCuLBFuHZaGENg",
  "key35": "5Lb3ysEvqUYcLziSeTXiovK49PiijmcWYLBWZ71Z3oSm15RHyL3jL6pLsxJJrgbL7thaZ2oESyiqBgVCWgWrfBJE",
  "key36": "A8byPTBGPHBeZP9ZdCPdJfcf694v5niQN2vjv4MtMMyuvMR1xJHzhGCQ1bacAwK3kNajemkvF7VBeU5fCLsj7zC",
  "key37": "3Yv6Y5SM4zzPpy3sMsgnPWwrPts92B5opNkhg3YHCFbRyFEneH7PK1XgJNyz118epMNR2GyxgwtsEP5R8bGGvY1Z"
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
