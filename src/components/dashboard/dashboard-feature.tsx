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
    "rk5LbXxwXvSe9Jk6k5VLVXkWbbzck4Gq1LAUrqgGkgvYVjewBtB18uzB3duu87gKusomvnhFEGqNrm864Sc6cb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47UrkiVv7BG5N6k4Zum442QT8Y71VMsePXe4iGH4fdoVx5DjZqCbDVh3prwd8x63B9F42GFbuqYEsEPp4jRFc1mN",
  "key1": "5xYRY7ejtoTTeSWrs2Lu18LqrHXTNa3QPtMM6x1ajpDT9gCwvhxLF7BnAiPftGYCUo4eSmFHfJQA1mk41rqxidvY",
  "key2": "5ECSnuBNzzQycRQ5W8dXQLVNRZUeQ9BSYnApHjNwcjtVYNKm3j5W9oNDvQgwhsHbY7UMkwyMZ7Njs26Sy7DQ9vcq",
  "key3": "9KRPfdBcdbaPNXrTmKBfKZXUpL4TN3jEjrmEsVcc3mbffq37WfpaDgiSWobvGHLmRbbs6kZeLoBoz4QBiyA8BVx",
  "key4": "4Lkp83XEdvQuZ8KnH7yAYcj8xTdNz93iWGNQ8GxNhYyLNdXurktGqrZX9voAVvQyavu8mWrWtL15CSdcYTrCLHDW",
  "key5": "4cQanShtZ5yX4QoDcmHknYuxM2EGxtMs8FAvMJd4TeLhAbUCJi1HsNLREk6WPhJ5sX7aBfjTdzcxWSgBL2fubHM4",
  "key6": "2AgTVXaNsxgFsSvbUrTRtWXBZae7CBTnmYU7Zt8REjc24GN2oxUosCPyPPQQpqrV7biYKkNvyRPEwdToy7bQcnCT",
  "key7": "Py1qW1zGDF6MpBHZMT2tji2r491fuWm6czGwdeojB7pTFCn2mzNBrN9xVs4vd9d7WRodaC5Z1p6pbaHK4XBEkRo",
  "key8": "36iHkZwbssGLxzgrDvoeiqhCu44FVfuHY9M9z4Sw4QchiGeouFnw3JsvjggGtCsaJX8yNBzpnfcZQRRm4nQhce5M",
  "key9": "2xqEWy9wHG6saaHwVfJVMCXSxxXPp1HWQnxWpizWZcmp9yqjM8UQv2SSWWWhHahYvp1q7x71whqzVRLbdJUk5cFA",
  "key10": "5axZ288Tw4WMTfhPkBuy4v1mNhCgmrX6s7Jzuto8KMxjuieuvixVcXjsMF6qiXr5VT46NzsJU5DnVxrUVXpf75fF",
  "key11": "4bVZmZQ2dsZAqgYs8Fek4QWeFD7c3ZfqNGJZUWKo9By9LWfHq3UF6rFdkRozx49wAgAJfH5DmJLQHiLTv79Bj5JX",
  "key12": "mySxy875oXXdDbExS3dngADgxjA3d7tQnKBFvXxmCLqHATC6iTweMirSAnWPp89wrpK6sTFriBKWKRCCJvzCQAp",
  "key13": "3X4B9BCgmLaYayCtycfT9xEM5jPpiaVpc3sy1iAvjfvy6kMxvo56KcfnKaYWvJtHp4wrPpUbKohpVa8tRWeWhqtQ",
  "key14": "VbnzXShifGDfotSo8VjfesCrULcAmP4U7SPr8KDcsNf9PkshAxArp4fhyC2DsUKLMMNB2smRD1arQfEFq1ZtoEP",
  "key15": "4PbrT9tJXhCXDitZSnwEBHZe3abUSHacA6C5msCwgq2aTbceZuQQ1n4Gxa6aqtFoUjXrfB31ymV74t9mYxwQsFqM",
  "key16": "fVX66EAjfogPsff6qEmTpQLSNnBYJnDS5hMFg9Sy6psp8nGG9SPJkq54JS5NVM8jtTjQgQDb5CPm7o77w3GN3ov",
  "key17": "1enM12qFtfmBEN5KPuq3zRyNTF5BXUo8B3ENVU1VXxT7njcAQpPfWehRaCeBGY1j4kwmqHShSaM4WEoutRuSJrE",
  "key18": "5qc3Cg4GnKUmbnMDL3V8hvo1mxzheu1mfujwS1pcBE9axj73tMC8vJJDedpRRNm7xkNWweaCWKAcLL72Dn6X54v6",
  "key19": "jZbvDpgx8uvz7wRdKxGxnSJPgRU8SQcjfpzV9MQpnYZUVPajpV7mrpL1CuqMXuYwowUvNdueRpKD5UigpghxkFn",
  "key20": "4SnnmDLrfk71H7RwsMvrZfv5cAfWkGCJJs1W7Jc7NR6KynB53cfCbtfhYekyxJFsNXVgA56EDrN6NJk49VPCUfBP",
  "key21": "5coYyrbKarKuP7kQwYVw1Wj9LFWwYMdPy5nVAhaRvubDo88xyxuaABkVbxXWZgv2w2ikHcAjfVVaW56kiRiTKQjV",
  "key22": "472eqZEFq5eKQpKCoPdEhEXskmAksLyfpuAM7gvt3uYNKqVrHcmrqK7bUoE2a284M42qBux8USxBusWgxy1bSVkk",
  "key23": "33fTGfZ3mPVpzEojQ8i5DVpJ1u1HtDmKEjBUfu9mxt3vDH3Svaz2d9dXqFZ32xFRwLe63ajvkYPin1o5pspS6o3C",
  "key24": "2R6e7Ee2Uk4jVkzbY8qZMUU5rMu79aKQbynZyBPDUQufzMkZpTNdciSCkhP9cYhpx9vmLprBeTeAmS7QEhBbdpet",
  "key25": "2smm91vn7deDitkXT6Cs5ABTiyS2bATQFjCSXoSwjdHzhKmsDxCcpxa3CXiuv8YyJYoxQsztX3N867dDAG6whSFX",
  "key26": "4GCSgJ2pJyJsBmiV7NHcLZYz9WzqP9chEyGtmyrDiDxNZu2ytbgVKvbeitk7e9Mpgu4rbWxs2o5KiHBSjAcocAFq",
  "key27": "5DBaaDC8WHo27JMvJ8rp2E4WJRRqU37i3BvCgLHpETrFzkTujaJbwK35QtX8y8ioaf66w6E2KYPvxwMUBXv7X37g",
  "key28": "i2GNcxSsvpajBYPoduH4auT9GGxxEYmXKN7vTdcUmC4hXVvKL8KofHxmT31EjQCAz39fD9WM6e5ZhP9uq1VezFJ",
  "key29": "j1zUAwEy9i2aTsy7y2crVb3bVCcQPPmXYioRERERZFAwmqsshWVxLydYe3Hs8H4m8UcG1zXHm5pgNfNy9FN1Nac",
  "key30": "5rc83vBQs3Gy8YVfL1DaNq5R3SL1hmwqRmaCPmENxNaQCaJxVDe4mMMWY9zGFms98kStpyfE98mwqEGxDY8x1p1P",
  "key31": "7LSNaVeYFU2hQQMqKD3k29Uo1YamFeviTGcg6jnkzCCzzGGsJexGFgG4e2n1hkANtMNgL1nirzgPDj4LucBsAxj",
  "key32": "dMfCLjkFSpQ4q2TqQQoisPwY1xeZyWyTin9L1hRhQasgWj54en1K73bmoRCyiJzAWJAme6i1o6CB6bQaYSeeSVv",
  "key33": "2fMfqrUcBJcAnatHrcT6JauKaQKcx3QRieSi3ku8QBQuLcffqEmE3AE5BqRqkpDLFVrCA89NTRthCGnGuVsZuxw3",
  "key34": "2HbaBDhArpUyS33BZjDBNwqpmFaMP4BLzSJQssxtWXzJcGz5deNh1d4kf43ju7MnK7uvMbbKk4Au6k8bEsZomaX1",
  "key35": "2rzRUgwKPw7Nx3RMeWd6NUdThvp8Kmm8jooyunWtfxviNJroQgeqy7AYmfkmPmJPYL5LqEXnJh2TeXRpRcZ2Ec9h",
  "key36": "4sx8KWC3oPJwHaBf2oknKjQvTwsjmAExaP17rhaRMrD11h62KnE3SqGNqUS5sEFt9Ja8XKhPPk4JLCFmUCjzyyaw",
  "key37": "3JLGQFL8E8BhfWzyWbgfKmKFpsQXW2Z9PAyGeRrfzFHtUCpf452JXbNLf2qKFb6QdGAKEj4pYDsF4bdix4p976sQ",
  "key38": "4VvVbUqTkJ4GPwvKEtB8FLXfraqdqWmKbqQrexEptWhpvGxLyVAHrsZf4NgiFeXw5wgbS2KLPdjuMhSmDxrhnrJ3",
  "key39": "42CCYh7WNSVne6e2KaoSKwYmxmYrW9qC3rXr1fs6Vdz913GYhD7SKiaeJRCLKA5MH9QdasNsEy6qBgrSegujosWY",
  "key40": "4nCPcyaos9PAgfV8HJeiqVzNv1t2VdYuL2eYTZ7NYSFbA9aGj4zN47of77ACdcBLqcRFo3rbD4v57s4YFpzbonru",
  "key41": "4K7RYhDB4QfhVm6MnHDCMW7TxjxQqppV5K7D6xCN9Ar4D5oDYrxXsFsQgc4dGpeGr75CAWKRqQWJvomFeYs616nK",
  "key42": "5J6GQZvsB5Faanypm2Ev3TskA4S3dynGVjjmChpT1bPBbW9FRFxTnahc6WTSF5XmmNR6ch3FtX39qkJkG6WVfnsv",
  "key43": "8bf71XUpARZgfcJWhmRfRbcALLFQAoM2pzbFMbNcSni9ediZfFcuMBasUQk5kcsdXe6LrxjXFbnkPJyHtGmmEMZ",
  "key44": "2YPNm6veELLSWTeSQoB1A8dNHUoRRBzcSUwGQ8voXpmgaGS6pux1q9rT4goeathTkduXS5yUrLVtFE6zT7gC5p5v",
  "key45": "2K7Z3wWf7WuDBAdY5F5opZNMUNJmUkpfEifkZ4sYsTs61mSZrJgXoqY7qtRNENHS9UPNJVHFBBA9STH8aPUpuHth",
  "key46": "39V5jBQhy7VvJWhUfbbFWuKEhZm4WzMkgDF5Dp3fEjPW2SrRKu2hRV2Rkr2R1RqihyEeEq3jvAEymgTKNGYmidY6",
  "key47": "Co6BSvpmoxwJGvMzxsxT5qy1k3wXPhmpHYtFa5GFQMdxYtDLCJUyMqceSNLKJ8dC9QFmi9bfJKzngpmG14gGB2k",
  "key48": "2JgxS4xxvBFGV5HrEzwTTLhPLxL9PYHByFqudYiCcRPToeTrDK4q7z6rrz4aNMWrCDfMRxNQqayQWdm32hhW59XP"
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
