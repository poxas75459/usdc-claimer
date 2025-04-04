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
    "66nsYLfuwgwvEuP3Gs6eh4qnihPVwd75uPZpsQFScH9SvWwFJcwwQxAS4N2aBfJPiJh4gVrza8p2fRPDomFaA79F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRfTSXXL236SUrwNRcYyxyHVe8mqF8DASqe4YeXtxuaMEA1jP8M8q7WhEfucNEZGuXMoQc1StRdENSzZQXEL8iy",
  "key1": "54RpY71YgJKpinsKoW3SkPGnfN1Rc1DEp8i788meUP4o7JNieUtLqEKY58wJ716cNAAyMHKWMSV1uPbqcswRpvWs",
  "key2": "QeUsQ6ixyUkk15GnuNpT1VwYvNkyxRGoP6g5YgcwGG3PGKarHisBSaCwNxgiUfVv8NCDQuwX88yid3a7bmpchyS",
  "key3": "2HFn9r9GmMAZyEwHUrfTavCry6YgSFb6LvrxNVu1mEqwToTAvQXeKzoiBkPaFddogrykvpsiSeWThfpe7NUowNrz",
  "key4": "GXCmqeRcHm5CG9azGxyaUFNP5di8XuWgJNyr57kt6UPvpaPgEvF7ujtwyZ2ruDyR1m2A8K6dDCcqMzBBac9fKtD",
  "key5": "66mUTnhXh8iL7QYCepReotBPru59Mr8zWvjpA4HxSAF2uz2KQTcoG9iP6kk13rbUD4QDBxNxxAyVB2v2tDD5WoPU",
  "key6": "2FpNotna5QFiUum27PYyoPd8KdSQx6MEXwn3J7mKQDz298DKSas5gkPKqFW3mdpvAhYFRX8G8yUx1F8wzAeBEWtp",
  "key7": "ouKTX99HVhaNHxdYLYChyFxbDTDcpV4Gze7sq37A1xyUqRXukqeKEEKmrcBweZH3v5NH977HPfAURgFL5drE4eq",
  "key8": "8YTun7fmMRqDcVQxgwbBAhW9a7WySSqQGzbuwypAgdT4Rm75P9XAp7Z61RGVFMzFrdjvqnt3oH6KmakwNxDzXbq",
  "key9": "3NiTdngCB5ae8VNLbqKG5kdcM48reAyfL4WDvGdHmzKpAAWEDNqxcaqVbLMQCE4sgc61xuqq9XTiGBHDAhbRfoer",
  "key10": "2GWM7owfdfKNUYkgYHk6PoL9VCBzxgbxkTLBv6dw8kAhmADdYbN9AoYwxfH7LoGpv6b38JcBfSP26bnKHKLp2Jf1",
  "key11": "3Dw66kYtJMr6qPf9PEEZsgjrqJKStppXWsMXF3ZBX2r9U28swRqDDjzaXVziWcgc5ojKJi2xP9itqYyUZLrn2BHg",
  "key12": "4H4EGeoWZs6ckNDvXbeNfXQHAyjY5ptK6DeDHxPqg3ZLxsafiepHzsibSLhZgFisqwszPsx4x5nbFrjwCzStWJsq",
  "key13": "gDjqsowQi4kX6d4qpCDBSBfjcegCiQ5NQVuL5TyshHfdbcDNifsxhoGEVGC8LTd5Vg2v421VukysAEjnUAPLo4t",
  "key14": "673dVx2U68emd1UoryWWfYDsi9VjvJ2Lh8PVULFYYDocoff8XseQH41YSFjVMRbKQ2gLrAng3cSXfJU6jGZNRWM5",
  "key15": "5px4CgD8Z4APVmi7qGe39hD4mWnVHHqMnzgqeNBoLKuyu6HHyD3kfeqH8qZwCVaj5XCrVWjGqrjRA5NdxPuQm1qS",
  "key16": "e8E2682TQmQWBzehBaK6k3dbbwbysoFUfFr8dW1VAYPZBowaoaes9QYKnzKF8d41XPd9BZ8ggGZ3tyPAJgE7BuG",
  "key17": "5W7d76mXip8ECS2pA6hPh9Ami8pc8Ph7Q1HZ8un8fsFkFG8dNPgpE4qELQFrkTbALXfp462P7Xw8SxMpTnoZPMfe",
  "key18": "37zPaFwZjrihdrNHdCuMYvLExRNq9UfoTbNJQGFfxpxKNzWYYasCBsg9j5twLxQNHPsuJMwkwMPUPV9Y7RCQAnES",
  "key19": "5Mz1akcV8rMAgreSe76R4BQ3iKjSLYGPbcoAPkKFX8F5fVpwkkDsoF7VdatHWzEoS1YvMojSBk4o224QxvADstaZ",
  "key20": "4AcQ1EUR5o2xswZ15RmPxNyqFssr4JsXBqPMWA7zu9VGgf8WUqxDn6h1QvQojxLdihEFpsyGSVXRjBSUJpZMukuw",
  "key21": "4AzwbA2jmDZWhjsnVdH3ozR5xcChMGnFYrHJxUKypHuWQUQK1BD2LH95XuFuVm5PakfheWrAFmbhUhb7h6HaH34z",
  "key22": "431aMkM5Bwjs6dnFbvQxe27Ce45WFY6a4dEN7Rz6EJ2oA2rbiDqxJiAp7gjYLZxDZfFYnxaQhH42cW7XJTtXvHJM",
  "key23": "3pnQarmJPVTc4FqcNxVu7vZ9fpiK6Zbbc1FaNrMmBzTLSkaVNQ3FHSmAKvfY7xJsvueEW6pb3yFjkH6djT4S4EXA",
  "key24": "2mwYdGmathQTVpmZvPuP9t5cYTFEF7FcNyGHqVfKq6fY1MmTLdxdRZj9FPiZRx1qNpuPAwoj4PfuPjyLj21ERiKs",
  "key25": "bRW2Jkqp4xZ4vF36cpnbMhCn4pS8nvg1gemEq2srnCrQGcvzhjUkCVhPVV7ak681GBsd97EEvh6sBWydZ7BJwK5",
  "key26": "NhNpUYCVBXhKPPgVEkjTNoNi8iWRZxQ35Etm2Qabt7EJX1B6vvuGj4J18pVBCMsGPpW3Ta3svYsAG3y4mbjHXp1",
  "key27": "223kvsZjomQ1DYzxAGMvpBGvHDGmeVRaGdRGcUJChqcc9bZNn3TsNR9GczigEinYGYmNwLg9u8VVbQokLtRvsdta",
  "key28": "5X7BnCp2ujgneLjKK5yuFVRMqdpiR31bLk9ssxUtTUjXDCaiBhpeekzXA6v6Lq3iXBh2JrKxdJ4i1o3sWRqzEXsD",
  "key29": "5zDL6TFqi6CnYqZzBWpCCBjijoREijuhaiSXqCjfko5U636hpAo2HmJEg7ezn3p9d7oGY4seb6rtFmzzGYp5BqK8",
  "key30": "33Kv7UnX3ZvoGrfgR4G4jZa4qb3CAZQuHHwrZx5hJC59L7tGwVkNTk99ZjP9EUT576mApgBanFnvVAUoSiUVPUXu",
  "key31": "4dfR7p5z7nxGZ8Sc1xo9vQNNQVUDMfJjD5BUo31mJa5ZvAPb28uZv4FUkr2YWvudhMyKVp1YafCmA3zhSZYQgydY",
  "key32": "3HRMwufbyijY5AG6e8eC3BH6WzQ1MerZRtsYNK1Rdp1E9t9xm2j2a9BNmBdBHgF4EmMMMmDqC8TGs98YSm4eu31C",
  "key33": "qVfxorSBoyshJw49vJXTCC4oT3moGA2uo4PTJSkMUN9wtL6a7tUmC5Ck6gT3UKcFL165wbVt79b8WWWovyetFX4",
  "key34": "5Q4DcPBp5Es64BEyNYj17QrgdeESZhp9mCMHWRWPWirGGHWqGnDUqLxx2WTvAuWUAVRNsAeRFRWkefPeDgfsC4vZ",
  "key35": "5jjmZymZX1CrTACPUJWVmgJVgGREZoXFUmSGWRzaezwDgmAUjC2AaCLctBUD5K7doQpv2Jg7HFf9ftMMXxYs9Hgm",
  "key36": "42R5rQ8kRvhrWo8JkziQydGHKHmDk5ji5zNv3pcU17ADafDju11NRqLZy7QqsrTprWDMxZ33WVYXScUWJUmJSKGc",
  "key37": "4N2C7ZtPZhxbkp4cZpaKcbVpDxnXyho2ouv9An3Q9DGHLZ4U75EdCckxKrBx9p1FZQkjXk7dNLtjQYVVMSsSEvs4",
  "key38": "iuyHJzc9s6LPiGLq3VXgrDNTY7RyZfYKFQV5LZ8BB3sxzcWpypuE97nckRygyfXSdiwFieoHDjQVwn1jRXwitdt",
  "key39": "3sfj3m31Re8ZFeuExeujinxF9eY5QnDb6Li6kW1BAa2vcTPvdH5GXyPnwAryTZpDM37sL5UG8oqQd2q69svpJCe",
  "key40": "4YDjaPZ4i6bYQDM5ftciVohmHJSdUWKnkAQLbiNyAJsfga2FF2WmnxTcMJokVxz4EmtiCD3xVySmHFUAvhJjXUtY",
  "key41": "4t77jjmU7eqJX9BngB1xdtp4zkvsptQCravRqTY1b8sABdk71o8ZVSgDCj9qAXERXWbC9mQTaUUJ65FceNV9E4Ce",
  "key42": "55yJgevdvT4pnVRZ1PUo8zqqwzHHuYN3mQ5aQD9yhMf2y61JufzwoNJjTFszvEpZJX8Kr4tgqeYXV5SosGuKGA2H",
  "key43": "5HXojDKtqYhK71ofueHwmwtew1kFDcUSx3eC3TaDxq3TqCFoydJmNoBkdEk4FrxEW5WESQ6QKLFW1rwwMU5Jmtsb",
  "key44": "58PrxvjJdqGCX4a9qxj2zKRrN9or8AqafvfDbmBHYWXycdsAXhcBPPNx47UCrDEda2Fp9K5n5NzXB3g3Hb9Sk9Ds"
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
