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
    "2eTCdqYUyhkGcAkudpqzzjYHdT5md9tNtFgSy2LVFdq37pjfCpgHg3X9rWkwTCSP9sjtLBVCch1aX8nZmtXa4GCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdKMKMT7N7QDQuJ4kYN3pMWGe5kPKqfFmx59LY5mRDr8rJhqabeMcrWVFjZ6quEtHyMT4iC5z6cdiEJ34UwX1k8",
  "key1": "4dLQwkgxqb8kDDVj84qXN5Poip4PDTkCsKZ6xQ7aGQiu5nPQxTKFdsvchMnd5STn4Xvz8dtks9j7Xvh8btQJGb8u",
  "key2": "4bm5K73rRLuU2QY3FWrPHBkV14V8Jg9EhwtME7KrMfsw3GD1L1gqtZXXLNq9FnaEUgxoAGyQYMUDD2MtngoppSs5",
  "key3": "3nggQjf8npzxPmDTpMmev1twbMtjxLFGm8oH2KEBXgFeU4BPt4haYtfcR1x8MHZ1NekUNiYwiMpPypWeoT9fmMvF",
  "key4": "eYsQMtLGshueoHGS3zTH9TvGz9QzdtjjJdZaz6EkXaqbpWjy1j9yYieeACPTobr5eHMqjui6hSLwXm5D8nt43zg",
  "key5": "4N5TMq2m3q2sKXtRnGgWGBAP9BGoY76P3yeACTigFJns6nbs6g4wLALVJSQUcXcxf41XhqbDez8CdSnf3H9EQZEv",
  "key6": "3AgRmDSPTWypkzMxXhwsEsGXx3eko8fbByet7PKuVPWuCTHMp6hJ4Q7vUqH6NztrNuGNpqwrdcuaYtjL7cK2wD3H",
  "key7": "2uG7R4WTPSS5Nh6XJmuevwtvPt1MxET7cR7AfaYGxfWChoqABKuf2tdToJRDaVPsftJrtjrTeWJipf5RmujFXWiw",
  "key8": "5mbLjcyiVZvk36DYkACpVk7mq9QCLGvM9tz4ZtPTNP3GUiFQrLbk9Z82bMaz7kgpE8rKQytGVocaQCVsVZpbiogi",
  "key9": "4bwMyz1EmwewJHzYvv1YJFsdzreigiCULohhP1TkDw78xpkPjjk9A8ayfYVS1W1sfjM8DpDjXuYzk1LH3LXeRY8j",
  "key10": "4TtseRLQo7U9rfh6TTmf1eBypfyG3ScHVibtwwiLpKnk7AM4FmaNVEoCG2TwanaygcjDEoaqfhNL9a93fcff25gW",
  "key11": "Tv3rubjXKL4jNm9X9BTAS39gQDbtpcPUjY4Q5gP9kJerzyjWnUtLW2vc7wuaAkpKhuntjsj5BwhHnyrQCChRDuu",
  "key12": "4jTNCRdbVUmSTDqLGhbsNmqyawPYG7nKAXUZbCyjKNd85s5M3BwjyV4GhKjRVZnFtqsXG1pTNoCzxf41C3hFHFuB",
  "key13": "4dX7hiMgotScn1f9KYD4d8rer4pNBwwivAyk2PFPvF9Sjy4KqVcWu2jrJ6NykouM2L5mDxbBr4uUFMMTwdPbm4kC",
  "key14": "2ajQtC7AEbfpP7GDUqXYgeT9XrVkmKUR7zUcKz6pFhvgc9DhhTjR4vjGjr5LFF9vFVxTNiPFa3uwbFskrjdXKgkT",
  "key15": "2Yt8fb7HJDbWumF7gfaWiLqUo67nsw6kuVhE6wQFtdSHkyR1PqrbERms2s4Z2uyuiqGL2SCug4uxqA2tBFLZ586G",
  "key16": "4ULNEmAGYDSrKinrQBXwfg8bLRrpj6VeTUuMPc8HitEtcekpCLZdAoTF3BKLVGjpTAYfjF5wfyuRDgS4FfFWWDr9",
  "key17": "2wfH6RerYYF2r629aLAKaUcAkVMsF8PvbS1TLQrkGUYiRaQxQzvoSXNYovLWcyEQXuqyqngiMETXAxyvUCFzHqQW",
  "key18": "41quBFLdK1ym2aHUu9sQaFa3p4334vbA4H4jPzmfy3VFTPyKWeUu2pywTR1LC58LUywU5hHhejJEFHt8tppQMKmN",
  "key19": "2Ekbk4EjFS19PHGu5j3ZR9D18qKagMKjK8o6SAPXG9vYAaLDm8zNBYq6RRez8RyPCe3X7Pi1Fa5oigM7u8cbb5bA",
  "key20": "3uBLj4b4Rzx8Y1dhukFv1uiqNLJzR8wD9Rhgrt2jEtVo1aLxYPknQqBiuuZCAtmcupNvopd5Gd7fF6BfLaZdJZFg",
  "key21": "4J79DMpQED9iikcUFcrP6E7Rde6Yaf5NKxs2xbLnux1ern7Ao3pZL43a2vQuxjDuhyhsiFXU3LoXZSAgUf6YtAH6",
  "key22": "38F7M7PFo6yqBfZtorHctZwn5s4a6KABYeQdxjUXYUUCHFc74wVBm13jGXQNqjx2NzazBxQpy4fxfG1RweXE8PCn",
  "key23": "5iv7iRCsm3xxGogwVzoFtTAAZPL8otBVCvUMNKHDG8yuyYTETfPz8XpELefU7B4DG63bFrJh3Dq5fjNETM5EtrMD",
  "key24": "5fHeQztyyjCeh1mtecJUNfuvtwjpRp3Z7A1c6ypgziJ9gZgp81eQ2nWiDTedJE25dV4yrxzjajyktKfuuNvuZb8F",
  "key25": "2STchFYwpz4fjBKpJqk7r6LUCkjfUotwAHCJkEdqbnpCVWLWzM4TYkFmYdTaC1ydrHFXGgH6dTEEQms87gUjbzNz"
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
