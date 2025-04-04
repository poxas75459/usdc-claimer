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
    "4S9SFecjh1S7oR4FpNVr5XXa6X2he24CH2xdsgbGwP8A2G93T5cPso8L7HF8kRTjXTwmVVJSNdpNPqrFNZFFNZ6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfURwt2KYafMF3zrfZX9rgLEJu1ubk17Pv5bu44kMUWAL7uaGgMUGYYNZmbdw5RmNzmBRUEuip17RrNkgseKyLi",
  "key1": "i8AVUK9FnpLZ38yFhumGJ5G39jbf9c6Jp7FSyw3KdDDwY1M6ztcvTWwbc18KEpMb61QyHKLoS8nkEawCRTuLTbQ",
  "key2": "5pJUavh75QPcJeQw7sc8EcBp5J82jE9Aj2rbPFdWPA7xUfdhcee1ZVXVLRJCwZyZNxkt9AsXsbjw5DjBGpzpU7am",
  "key3": "3RuTronsHPH4g4KB3mmVJnQzekE9SiKVZAY3mQVFoxJXnvX5vXQNE9qbEju84AoTCfqwq6P9Lgcz1jeMppLTffC3",
  "key4": "fbevSXuZi8roaQxo7dR3c6vx3oWqHTnPwXiHioEyxvBzpJvjdMy5NcJ4SoQJpFHRju9tztS4fUtFawf4qK9xSyq",
  "key5": "2U5Q62AsgEGH5ok3sHMDtru3qzRJEfc8PWzc5T3H1QGhiomaSg9yqMW7RguV5hwb5eM7drq5SNfxK2NxChWajo5W",
  "key6": "3NtR2jBsqHP1voyJsKBfs21mW8jWXuUUqq8JZWLCNeetPTSnEyRs7ii4GkpBUnMs5wi2B447xDQaXBnkubZGmhmK",
  "key7": "3BYv7iUEytRt7qKtnampENUXTC2fWXA9a2Q4Srfgp1Py7ZRnjdwsMLhkLXzm7jfaRjfHoakE2CnnuhJsGHsbKY8x",
  "key8": "VhXvUPyjzneoNgVkZmPptCEN6hq8rqEGPwnSTWczbV7U3LvfawAdsRnSV62oZfjiCamDJP1xHsneYgaV9wAoWas",
  "key9": "3FF6jz4z9Arg2gtFZHbtuouDkfBKVi131PxYnSZ4W5adhtN1pWtYw7WnpjF7SkWzuYs8c4fjfgtXGhnpC53qDiga",
  "key10": "2giPTKBxpaoep6RwcFvaLC4yupsY8axSTjEd9gnsjbnC9H6Be9og1ab3iCwP5AGPUGXi5oJQmYPrKHiTVgGojxEs",
  "key11": "3VKF9BdWW9qyHAak2mjMfR6CPyTmJvBt4W4hYTWjF1bxaSY53ypNSdqJx3cnKpWoCSrJmqZPrzjHaL7cyQ8gbYq1",
  "key12": "TaeqgpsdM8ixkFUTfJkPmoc8N87tChaZBA1mCPnVVYGVtMDYP7LzZLBUqHGXy18SQQHwuzwfvQWLRPyNLtkSCYY",
  "key13": "2R2nD5fVjmwjzdvrCfm38vtpMcQRpTBBKFht79cJF1oJvNAN53objq6X5NNvrgFSutFnLVXbGcBPBjUyivsUwEvG",
  "key14": "44ZDmoAsk6tU45LL6Daw8ckTwQ2JHGJ5fkiQ1zuj2EzFU64jCaopMfAoJnX9PDg6rTASJPpJvcCj1jXXWESyJZLB",
  "key15": "2CSkSa9deLFJGMF1hbEBitvq2MGSnsi2z7HEy4TeUzuPaYd3QbHtaphK6rc3oA9oXhrgaK89VpDQps88no4nCcd2",
  "key16": "2mJW61EnaAzr2Q7BvGVMhsV9f9ehkdTxKH8kckvKU6K3nQYj9VDAqrZLWt2LgfZcNZecAUEN57Kofd48xz6FhrsW",
  "key17": "3c1VMNutj3TZRB8JoiPsD87tuexkxzvWGTi1BUjJydNRSxQFunk7HfjCthKVhqRTiKuiASogYe7ZgNSynHdYYb1P",
  "key18": "3DyjuRXXTorESe34jAEugnLDBNo9sh7tatiPbebCRy9UhyBipFmVUtq1Mhy7tj7Ln7fUqRAQDdHZfRhkyughZ2Ct",
  "key19": "9Ucgutm8q2MKCWL8Gb5TCuUEmvcjq2eW7nNiZFsZEKzxEvesg2FQnvNw6uzcfPQcJpXXohekqYVqse8S8WYdMSF",
  "key20": "4hEAHgCzf3LKrchSUqrHU1tSzre89Wnyv2NqyM5YeAZe4bF2Vyi4m2GG69qJp9d94VY6xwz6afBswhj8zq8ETKs",
  "key21": "yju13ZAQkgd78DQngTy94qctju3UHahN2oPVGGarg3fTbzrVgu5rVkMgfaHhwsmnrAwUKyNoTw6sHpN4rRX9gFp",
  "key22": "31wf4V3q1cfJTn1M4kzEf6CwEcfcunMR3rE8jnimT3wGzqfD71vsGrh1drjmmxGg7gsVWYDAz6rJArLW8g55eQJk",
  "key23": "5ps4fiP3BvwbdvuuAoBrZCxy5uDfcB6wLzhCXXmHvAFJrPCkCLbJyr8NBiLK18r6NVdzqpoZ3Mku88D6QUhHXtx2",
  "key24": "JDa5tRpk7J2Wnk5d3TPhdSYGmtBbsVnxcWyXe7he7z7sm591PtnopAoJLzajzjeReCLb2VVT3JDz7brPerP2qWb",
  "key25": "q1qKj2QToqdtPgE3iWvHM2co1cdWSoNd5f7oXZh2dbmjpwhxWkCy5TMZ5xdipkDdbPex45o5ve3tgKjjrfnwkQy",
  "key26": "2GLinx4TXF9Q5eaL2gbSh7GUK5obkboLZvvwXbJBZn2odhPzcqYBJmT6sdHwjGT3uSyrM9oArT7AisJ1KvzLt3Bg",
  "key27": "5q5J16kXfP4cWeV9Yk7ThtXgoA4GAgRsBmXBoUVHk42cdK5zzvHDctXijAYqdMbc4oMqLvNKfNnqKxm3WDVuKcES",
  "key28": "2JiGw79ViJYjnZt6XrvjaMHXY4uW7bEytcfbERv3D917QURYuZLmpwy7nQjmTsxwnhUAhXmwx4AwTeSHyds58KK3",
  "key29": "BoiPUPc26cH2VebVUecGQnTdNdNNnm1czv8aX3uhfKFZ7GRazaMfhh7qGrQNzzXqK8BwQeQ5HofrTYqC82hpvJD",
  "key30": "5TR22mR1b8k1uDWha7z2RxvgdHYvkdySDXYU2miy8hAR4FjmoUC9evokFiaeGxHBdhiRhP6xTiY3ahJnYKmyGz9C",
  "key31": "43w7JGjyVYedZLHoUoHjUAzDc2DtdJ55Df41SwZQCHDs3sm8JWgTVeM9WKjSFJZxRDamMCqGbe7BDFv7cmdQp74p",
  "key32": "4x2bziyxjUQ29BT1cxqZrZ2gbGs6SWByBjYNvxTiud224AgLEr9mg1LmBpujfvDJdHzRvWnF4ySVrKEnkuZzPDqE",
  "key33": "5eazXBsVyb9ZisqVJRBYhyn16kShtrULJsuQAC2YdXgYMNfxnYiYXSBPoHQC9NfSzFvvMonqtwXxJzhyXsooVJnb",
  "key34": "2QTsFEBfb81gp8Yq51gMEJdFeCEGbh9BY3nHR2gcLUeZFxs9DUJv2YQzmNqmLjvNJsgv7Yg4ZAQ8ifqYsZHgyx7i",
  "key35": "4hMvFdvxGTN8xZW8XV7dJGjxN31gMLUPKqDRmenvK2YNkvJTdfBrAit1f3wSDANhpfEKJ1cpbveRwtSpDGcXLdxp",
  "key36": "2xK6gLgT26oREnZA3HnmheUqvRpZi3j3vwry7R8QHSvSccXa7BGtycFhikg2c7MmhGS9C9geSFkVUSYw5Jw4n27v",
  "key37": "D1JCi7qUMLRujY8pFMrQQcZvLEjE27T77VPaPVWninKerRZYDncitfVV6JsTBEhVqNdo8PHfYqQ6rBc2CcV25XS",
  "key38": "5FtTVmKfE8W1jD6dyyieDwPuBVyc3LY65vB91tfVQrq9pivusDno7kvM9PiSFLmqsmKwFruomeZwgwBwLfsLfiP6",
  "key39": "Ua9durN7muk859Rcx6AdVMmAGBU3aQ2BiCjWPc3Qj36bHtfoi1VyJuJTeGSJhgdnMtuChFmZRUHbDQusNwybYmh"
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
