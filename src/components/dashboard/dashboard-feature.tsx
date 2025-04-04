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
    "2XHDJ3GwwiZ1ZwstkMAsPgpHZo7AJjU8Zphux9YM8z5UwnccN7zv7s9cStV3m9S8ASqmCzEQRSPFzK49rAY54B32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMzngEefbhWY3F969oALnFrgtMS4yGXQZUcZ3Yin2wjFA26boNAFRraqRxKoBYHNg5wzxtwc29Zvw9X8jkxuDpt",
  "key1": "cbf6VXS957V46kGQJVPDJUZXqm3PZYhVMwwP2943WHU2iZVL44o7oqrxWAoWAHgQH7ZXPAURnmKuePCBNvprjzu",
  "key2": "3Vf2mcaSLcP69MstF4C1HDr1yVrzkJ4BgiKpDPuVV4ZM33Ui9oHNatsQkhGP9wr31Cgjtx8eJTHRCxGG97yc2VhH",
  "key3": "48uVHs7wyB3Yfi9UHevDRHJT86Jk18vtXJ4QhG1gsoG7sy25L5pu21tTDhVCw5U45EDFar3sBi5ZLVSC5X1UDjNY",
  "key4": "4Qb5w8t6jEaLdnQjVv5jmFVXbJj7Qoi6uXSj46KmEgH4oLnC8JNfy6fTDrXMD4kDLL26onPFFJ8XRH13YWGjoJTc",
  "key5": "2SsXqVNqMD9a7EGp1mY8QjkvErfkZwAezcv7V11tPJ5vDrDk2DAM2tF1MzcEquv8HHB5k8Zvpqbeu8KBsewtD52R",
  "key6": "4KYLhQgNtbmyL2kFpdZrpNRxdJ7KJ5HGLwsDE1uWp4DoAPa7c937CEn9K8UvPNBXQ2aUk7j6rjxh444svoGYRwF7",
  "key7": "64MXg8NQQLY3EJmo4NH4zMHZ32mgDGL7GSSbzBcVmFtD8q8L9GftRbRkJZR9oN8Uj7tsrqiSZ2oFpgsqoydH9TgQ",
  "key8": "57qhHLqdWfVKasz55QpA9nWthRHav2HTVdVQb8mp5V4nkhMftMce297SCezQ7qs5127oHJsqreUjLZdsqFNSL2XY",
  "key9": "2bz2dc6wF7Veru5h4gZ2R4NzD4yGqstqGH48VmwPTR6yPqgCXyisBXaDfhBHZJFXLaV3MrRtH79z3WzA4rpKGENm",
  "key10": "kbjX3erNvC7nCFCs8GtWcGYfXeZg4KXaBiMwgx6YR6KEa284AKdg6zTQjheWodebVXfGiT6NxQvhpTBLkQybfHZ",
  "key11": "5SQMfs61FeMpGdAFeQA8GjsLRRpugnGC6UduaoFSxopa8DtaZ9Hos3tGu5wB412KSwNqPGnHGRkyyTrkFvK39ZjU",
  "key12": "MRfUYcFhtw7NcEbAmGpjEcaeoete3Vh8K3qRcGTnT3cSuLhLstPjdKTxsa8WdP4UUinpJwd6KMHAMuSZLGgiAxN",
  "key13": "2UWafv46MFVmxYcked7F89HWnAWzcizXFGQZ8F5Uhid1Yw9ZeTtwtWSRQaVzFdpWhweuXs143CJLmSAhSJEc1amY",
  "key14": "4Y4eAtvJoXVU49n4jD4AbQmt1Hnjo8TdHebFNHtzrjm8ZxuraFExTa7278uTFVN9ia6R8uZFxFJT5BCxLktxWtnU",
  "key15": "279T2Q1vso5Nwjq3sQ9TivjxVk7J2PY9uKLhA2woHzbK8Wq6LNZK4zWtigTBuS7oCsrKjAa7ARsvJa9hR7iWFmB5",
  "key16": "5nzCqYwVnmRh91h44GRNu4Ffnymjz8whkNBRuJWwoEa93dwgNehwqsK89vdSHzvdfFs6GFRAKYTZGNWHNsqAVTXs",
  "key17": "3FsUYZ8zvSfMJpp3Mo6ZLxJWGQo8VvisY9VKPUUYULvxuEvRHpZZCPFp8Wsg1KTk1oi89ho41euUbMFcEtXjqKBr",
  "key18": "3HivzHPUCnWDpRzXbcsHNCXv26DtfkE5ktavCDmDmycJh8NAdVWqbuBoGbghmS9QnxZjJEGHGYXP9wGgPZec9sp",
  "key19": "5Q1ekna2r2SHcyUvDc6sR8Ugk2gvvbwmg7B7qBJamspaRFozJxcM9s2tNK6v2nSWWA6iwEA3Zh397vVm835Wqtoc",
  "key20": "4nqUFXMM9Azw7nxnhfwLMUVK4486QJjXbrjtqMDLmr2fp8vixcgxefT1N9Up54J32c3FQoirwxCjhPsK3Gdd4K6T",
  "key21": "2zCvEeQ2BsZPvbhbBWLXVW45Tpa8QVqQccT7uwzaVsjorEugqbkUmAJskgK5FHPgmxw8nCiu8XWK5cwUcWzRQ22c",
  "key22": "3t52cBDR3dz5TGzFDpzfDeM4svMJpWPGmufnmKwpJ7VSY1WUzqEtvLpd9C9NCgo95pGp1Mi9DKw9qDUmrEaQ4rQH",
  "key23": "2QrmKcKZ5aDSDgQkWkhHe3yBo3NWRy24iUQ4EzPXAR7gfjU7NKCpYXRP4L2X5Yu8RJu4VJCqZ7FzXk8PMg9MNh4D",
  "key24": "5ZRthiYBcjeQj9j2Z1aEPzy26ewBZQDovaXTK31k3S5CbpLWpAmtmTgwBwMAxLquC8xTKoKeWCSYH6MtUHoPPLQ9",
  "key25": "3PgTiosbYsBrCKEyZSD5o4DXHZbaRxPjQgqxqwzTjHHENrwDZY6wGmD6tMdnbN2nEnHeaK71KqfWGL1StAey81m3",
  "key26": "5qt9HckWTUUYMNqamiG9E4pq7oSerCnM645VLVNGGrq8Ux2zuBmjgA1hBgqGYhANkm3KoNzauf4oyUuLU8Nv3Xyb",
  "key27": "3xnR6UmUHPq4dSKbHKradbXdAfYRQoFfMaU5c8W4AQQvwUmxwVYsbkC7EUk87zoRWuyV7zjNKcLk1BTPXfebcYDB",
  "key28": "5G6uodxE4oN98byTz9QMErLN3fxmRk7BhAg9iXHbXxnZD1CVCJWyeV3Mj9BK9Uke4ZPG2H8wpPSTZAAHa5Vp6623",
  "key29": "4cqN76yA2mbcsvQ8ZnWDWBWgqWikkPip9gkfS2cstb63Qtfdkb3pPCLB382KLQXBx6WyvKsWfbqUV5j6Pp9Z1oHE",
  "key30": "47KDqHbeWrJviSKtqjpmzsDtsXHvFG1tcqx9zbZzBYNTjjxNqaA19wqQnxMdMXudyqfbG4MecxghfkRBKi7aRQZN",
  "key31": "3D92sZGhy72AhUcUJdNf5QfPeogeJq5WgYdGXmAkigWTT3uTWtvGonrVZ49fNu3bxD9wYBuZFY3d9JBddMsxaeju",
  "key32": "5HP9AiZGs3wXV2smtQS54f7zFhb3mw1QLjPZvKBrtffXhia1fmijqZ2r12gx1BQUvqRWVeZeS7FjHNMGsZvHwRK5",
  "key33": "5BLGoRbqVn3C1AhocWQQhzEt3SyoFDuBAzevsHLLhdxgFMbHREH8QsX6Yp1J1ZjoZhv86dpXr9AoBnwBjdTET2Di",
  "key34": "3s2LuVEt5TpbpnmE5pPTp6Z6A9rX4UHGiUbYwvLGqHveq4kGz7g7kPh6uqj8AHP6KELUHfxEGoY6RvmCZjsJqcy8",
  "key35": "2obJYZ87cjHSm2RNwRZ9Vt3DK6bryYRUPX8jizCrF9g3xa159cjRTw9195VqhorX95YkdwbgykGSBz2efNSUcvnn",
  "key36": "BTW97Lt3QBFwa93qVoD1FJDn1XFjbk1vEmkeAADidwg5e6bzx9cXoX3VsHgwJVLuckY1eczhFsnEqzg9pgiKt6b",
  "key37": "4KqGz2K2JA7CmvgciFoYtCUdrFSrtipNmFR4Us5RbKEDCfg6D8SZLv4UPWgZvj3DgzGWFQe3gJqjieG8dCxbHY4W",
  "key38": "3W64vcdtwo6tceq4Lj6Uu6jmTZAAkxdrBettb7BMBbUcq4sCRc96R86JvH1CaMQrxsKQCXncMZeaXTXMbhaZEL2u"
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
