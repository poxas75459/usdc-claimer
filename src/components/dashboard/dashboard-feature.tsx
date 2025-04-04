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
    "2RJtFFkUFNsM8dpBJoionAjcaGkPf3FFcJQxNom2QLFyyZz2k6HFkPy11VwfCqUVzv8MYgP2Dt1v8Ci2LRJBb2gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XC1is121n4LttPq4zsvse1dKXmXLbtrHeSEgbet4L6VXjCyoPR6C6NCxWLzB5nMSDBupaLaeEkH3gb41mL4n6De",
  "key1": "5z1Ckn7Bxnh3zKPkMSomdTpexbrt7NE8WoqFG5Wd3g8tApUXu86vzC7ZRPJdLytWWaaUibjAf5wFgEtgDs1NijRS",
  "key2": "4GyF6wgE5Ev5dUBQzqUhW8uwnQErXrPBgXrBrskC3oPC5ywhzLPanHe5XEWrudYqyPQGaBUNcZ4mdSUGzG5u8MkT",
  "key3": "yiMBHwZdrYE2jpVEKCfbocBv6PNiBvsvhU3YRYpibyeEfns2BFP1GBEGMEfg6xxJ5sXJXrpu3H835j22xxYwJCg",
  "key4": "4yMeKfEPNyL2Wwvbb6qL5xm36z6Q4VahaRVasYedGKyk9HK7ouwrj3jnK38x7TJ1pyRkVv3sS9an4JZQ8LTuBERr",
  "key5": "yV1ougC79gdvhWNXM83QFVLCkrxmLXmVf77zqechsHHUGX5jZmdYsPLnmgN581HKX9ogsxcg8iM6ahkPvNLvyNo",
  "key6": "2U1fZEivtr8Fw8Nw1V156wMFYVBPdE1KCuDEAUjZDJVXqVzaASKgg3i8xnvRuS2DTtHUBsBDeMrSNeCrPLMpny5a",
  "key7": "NJdAbEBzsB9P9uzKexjLRHAGDZbPVk9vFSnBhKn6Rt3eug45wALzcbws717EYEE5NADFyJaHwdTdRdP8GFLpXs7",
  "key8": "2VUcyhmuXNrLEZHoTrj1aNNBv58XRDJqeWoAnisfgrNHmVri474bzTUUYyJD4EGE5zWFZKxcu8Agb3bAHWayU4F3",
  "key9": "3Wwk5CwmHttyf2Y1asvoHEmoVmS757DUpGeizNrFvgNRJ8chzCdrVPswfuiXk3pkuHREsve1kkDJwkmEtryfvCQ7",
  "key10": "4eatZEPdwqksJZRgw5zSeHGZAsXQ512mjAjCMdSr4fX1NiDPh79Wz9GsYAsyodkviuz1j1osCfbCmVWiYDsX9zzr",
  "key11": "4toKe9uodMbWWyAtGHrucmqWefRqWKWztJS7fAzfnpmKR7q9xRtfrxJKapJ4qaAg8BXdiqnQRHhsZ8ux7fBw6zoq",
  "key12": "3kZGuPfp9VKfkwPCUD6YmaqtJKceV6wCTcpPuWXCcxxT6kMjF6dmxHwxqTGboS1oYFAwtV1mmsST1TRB1Gf33tXV",
  "key13": "LoBHE6bTujCwVDpbRxXXpPWaEjGm8ozsL8sUuTFae179M273qcYEXzZG7Lm6e2QAjoZETtz7UwMy9vcwT6zNx3g",
  "key14": "3nEQP8FbqeW3cSrNgB8RoKzw64Yvj1FUUFj3KxB6qbmt9eutBt3GQed7wdXTbXU3itZDm7WeFJYKtjK4XhbwcMUW",
  "key15": "3x1Lmx3ggGyLVjcdE8TFSeDQXTjz9HBnuDFz4Un1vNzohq26PbYCscKZEg6SAnpqvYQgDNs2cq2EH192x6WwJNTc",
  "key16": "5m1YuJtpscPQB7UvL4dY1jDSUzXBqJ873KQYpEXqqdGBUy8k1XxBtPBSdkg8RYVQV6TiEcTRfWR61ca8Gf85hqjy",
  "key17": "2wvXrUT3GmVoSpWJEHcgzRA646Qb2dTnUA68WtdUiB6EXBHtJByfMEReMSFgw2zSLuLXiMp8XRZu53nMVHNMNBoh",
  "key18": "3YgqwHZis9iFYTAFFENpq4GY6f2S72B8FUQaVhARUtZ65DsquWTZRGAf3Pjecr4mrAccwixE6U1kRda2PzFeFaL8",
  "key19": "4zpNpeh9kqnctttHLcYDgUVdVnTcr9173S5WuZnjTGVvu599LGHjdsgsa5pMGGu7R5QsfjyHDTXTGHx1RCg7q6RH",
  "key20": "49aA79iZMbJNd54xSte3djBypFnP1DbhjdVYN3LhwsGtwjCJCZ53kXmzT7Lx1AryULQ8yzhcueLG9W3bkfoL9dHg",
  "key21": "4155dqM4uv2eT98ikX7RAQ4nyCKq1ZVxAtvFVwWaCk9T1Y7mXBbtUnFiL83w2kvq2296w1vFbggcFEP5kPoaweBk",
  "key22": "3U8G9DpQoWnTsh6A2wi2DTd5WmkveQh5KYrny7WDDenuaspWYHeAQGfsipNaasjCbW8VGmipybr4LTjva9gZSYfy",
  "key23": "64c6nz8YXcB1c1BaUZDNGh6yiNf18hf2tWBpwNbnktmypz5XXM74n8FwETNAfCPgpooa4WYSie2CZhwvm1zUCp9G",
  "key24": "2zH2fJ4XG6UEwQenUTK4HEtktBwKz4X119vGXZuCmCUssSsJS7GK69Mk2QcaX3rwJzQncNKjSZ6Zx3nCRYP11nZN",
  "key25": "kwnoQKPatiCd9GbbbtFPHupSsuyjDjg8t9rikVXeKfb6dCFZF9Vr6VwweK2fRe4iJegCDmcH3uJLPRLexdaFr89",
  "key26": "2LVHF9HUDLudhiqmGsq5uPSirWGMz21JycudJVm9hS7HhUG6a1DCmm97hQgL3yBugM2VED6om42o8rakXgsnuvfC",
  "key27": "t1iWhrQXbKcX9imWfStiZnU8LdKm43Ju1g3QmKcMTscH5G1XvC559SVhWgPy3JU7z1UHYk3rMjxcwnShK1kLe66",
  "key28": "5SK5M73eMPQjQM81YLCkQFn9RAVUD1isGSw13FbE214CWd8o21ZyZbH2sjGJJcwGdLkbBhoJfXH2MTcooNNsGb2n",
  "key29": "4nn59t1eWMpA8xpWvQapHVYGKYgqBqFtv7mVwwTWnPgWhkBT21wLHRhjX7B7zwFaMvUx6yBrUbMgzam9oQAx9seR",
  "key30": "42uZgaNmr9isWZg6D8JkbsdYMeE2PS5HptAZNU2FpJ8PynvidGnJSvFqgLrX8d72tL52Ch4f5umYWn2cPWtgMaES",
  "key31": "fSsWAM2Tg39sbDsXhoSyMeDPWRN6UwH9bi59zAkTbPNnS3toXxCu6FnL2BaskKHGCm5BSz4ndhP367uZTehrjHJ",
  "key32": "nCennqy2CSum7msQkkgzi1BQmyja1DotRnvF8GiCiKR2WPiG9Np6KWgYcQQFk93JkCZaXPAx46txj6f5U1mKVfg",
  "key33": "5CWwZknPZbUyYCE3Hu6Bg6AvLrUtvkKXRSKkUPjyjgwyNNad1mVFQGkZ9dLs2jPfBGkWsPzsFFBB1EWKopDezQ1Z",
  "key34": "2KsENjt8bkYjfKbmjVJvoYnG19omC7pX73b8bRUuBSsuE6nSqcgr655rPE94k7tKEfYvFiVGYLspR1g3mTRKDoz9",
  "key35": "4d4jQiLDKvzEWT3WkRLS4arUh6W9hsueD8mUXq4ZsyhoiXe4ZzeArdpHkb2nJYgcwfuVZaAzrDpbtPyTsKdNQXY",
  "key36": "3zNfWHKJyYjru8bmxWAewMH2BBk2rHb6svczF5qHwK7oPKbhojC6K3hUtngrgQPzYqbGdUiEvVFHR3mXmj83cRz1",
  "key37": "Vf7z6RiFaA74HZMSYA97N8rEvcxr9EdtaYfXEoodWLnnMn5eM9xk48RuN2Vw7V6gkM7n5JYgxBbShUbQz3koxDt",
  "key38": "5X9AFQVcR9tf1J8Qg4MUf6bcPkno3nerUZ3H75ZTAmFAcM3Rx6JA39fDd8vWqNV1ek357JTb44nyz9ZF3f6SeEBw",
  "key39": "5eesN2YxcoytL3GUS6vgCQzjEcqRp1jw5kq5HdTqLqVP3KNg7sr6UVhsiuiXAZNaXrJET5Bpi8MQAPqQT2FKtEjM",
  "key40": "3SHhtdz5THv3teT2Q1gfRqD65jdKrDvEuTEtwKvUFwPhDm1Q7RZ8btdXDhyLrYdzkeUiiRse8XmuZAfZtXsLQ7gr",
  "key41": "4kqtnC4XRnvARiw3Nnebt7dn6k8fPApDBXb3ZrmNqUSm7xwq6A5U7H31QbP11p3yAfKHg6JVLHdPeDUp3BjcGSoE",
  "key42": "5wxcQFnpHsM9RgMw5tu5NnxqcTiFVeo4frycFcQpaY4m3W6rN19FnZa9qtgGm5bR6FKm7Q9Vf4f9Qnj8ZSQVuRBP",
  "key43": "51riGr4cgzUCxu7y8wQDA891jAuhrkrEVY8MLKjKi6AYRJEeJSW5t1Rg2DGq1gsuocN8BcCyeYi1sBJXVpf5m6Bj",
  "key44": "5zQitfyxXKiCiqWHxrmX8LH5ouW1MP64RX482ymaXA1azvsYjbz5bLFoUzGMkwwxZZTV1oxLgDnFTvQTx867bwZm",
  "key45": "37V3zq2f2y3bo3dpgwQLmTbYvYc74ypC4GfrE38kkf5R4MEwS6QAajv55pcP5teK79j4zoMRn3dqtGJiXYUF7EGL",
  "key46": "5un6nsTATiQJRBWHpBvYwEoprQZEApUu3UhLrg7r7RmMLpy7TSdBYGzigN8kafdHbemvLRFTmqMD7paLawwwKs7P",
  "key47": "46eY9h5vsVybvfaBYYWutiBBEPVyjLohGLBPtbVT7WaLUWVHG4Gw7eModDjzqUM9aqUmaCZRwCyAwLpTgQ8Rzpxw"
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
