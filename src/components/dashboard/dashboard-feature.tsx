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
    "5m8fZqESBUYa6ebvhZwiiquF1Nu8cBLN5DAHMC1MuTFn2ApRvqVdRMhdrhBo4HDKfbRgPzTq9eNuRqhL9WWf73De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zYyKfbiidK3yudvhAam6ocTWhy8wsDGzf7cZscGHvSxKQETthWYcBXoJaEYKq51ycdvxKDrrBM6UyWmYxDKx4Fw",
  "key1": "26WYJNWrX89XbziLTHH65jqJgQ1vesKiEH1aCJo9cXXxJuE1QijoUB4Aqa8DVd7LrzJ575hup7aBynQ7DoYMM8Fg",
  "key2": "2M853FacrFxccNDTHw2TdiZX9ziTbdFx6CxYB6GiUzVJAmTrbkwZLY1AYcjWFiqi9NR2SFHiDoUtHTtwQgtNBc9r",
  "key3": "62vTCwxrZyjs2UkxwadgdELSvpU9rSwRVqygV5VCftz2VkBnPfUrNqPfQQfTUurJnU6jZH5rY4vt1JvE9sMZoW3B",
  "key4": "33zkiihDAAKZBJCviMu6GG338Azn8tZkJL2coEt6MSBSz7CAngv1ArfT8QHE4w5Qirqrad8qeQ7kAKZxbw5x5mHt",
  "key5": "5yHobZginS5h2W6bRmBnmgNfBqHWqufna5zsDhg4J4qu86FhnQw5tyYVbPZ5PUEj4tfTn7n5PMh1TKVNQFwbjBqi",
  "key6": "2CktmhLNV6mscZds7ZCsCbshzuZxkpkubGF7oXipk67XD5QMWuiCoxEJA9dA2RJzi6TPjQtJahZ8vgAzhV8An5En",
  "key7": "4WhBytLSUhNSwFsqqgoj9T59sqA3FYQfQ9GgBqPPmdgqYPWK9ohhCauUsdpmzfzbZVYaDPDWaNgqgWAEiPAkycU4",
  "key8": "5H2Gs58JtpHRR3BeUTpbM3zPbY3LB3G8ja8b6eGS3zcbgfbiyqfVwLbm7QB8j8NA4RjUcx6QtMDecoGeFkhyUp7x",
  "key9": "5m6tLrdjDWvVG2TL5n13X2AYwVhC9VdfVvDi1xPhjMTKFqGDKP6AiaXanpko6uGgSvLspSAi4FzPSBs8SzRp9GDP",
  "key10": "2tFSHT7aUbGHiMVeQL5zhu6Ly1DMsMzUaVr6dYghgkHtkbZWH3ZQRLpkaai5SbThSaeHY3MjJwD3cV7Re9pY5tbm",
  "key11": "4szzKgP1rU7XKTb9FYCCZQY7prtNBunHCXcHQxhBninLUECCm7mVsx8b1pqJD88gw8YzJH6yjZD16LH5n3tiSppX",
  "key12": "2vQXvNgpRSFzB5tTFXLaagbbp54FAZayVyVcnRrmuKD4gbb3tPoRWsbeaBv6DWCSvE2biNhM15R2mzVp4TFMSSDk",
  "key13": "4fzJJHJQwXfgHjD2W9b3zVVnH8iBPwA3GHEebBfeXDTcSEFQ9GoVCAPDYUvJAVY28FzWMydLSUETDdAz9ZC1ZpRV",
  "key14": "zYsX7mcv8V176H3MYjixEwLKw19abTTpUpAi2t5RKu1LYQcKdyhK5Y6N7ic4tgngHc7aZ485tXXUVYh5oa72ovR",
  "key15": "2cMGEbR4i2Vqynka9CJzs9NiZoX7zErgU1c4pbQ84zgKDRiJXtAHJYeTfUCmbsXn9RNUo8zsrphN7rW7n9ZhtgUV",
  "key16": "QZHU7WBRyp7Yk1QEQoVkrzp5PZZ7xtifP6q8tzDSCzgL4AKLnQ9annTwmAWrCcZWd2PEhweecQSZsmx3BDngUUR",
  "key17": "2Pq23x29c9T9VtK8WTAf3pWMqa6HfjvtyDUsj2VoNvoKnkomX3m4o6PcwGWUs71amNJw4qfeB47chKdkkAFX7FbS",
  "key18": "64cL4xim1QLESL5dyaKPgn7sRF84QpXtp1QPU21pJHwE3n5SwrKWTiovGyQ9MqHt9VB9f6pjxb6rcxGF8hpz36RT",
  "key19": "uwucWf77H2nHpg1WRpRq9TPCyL3FoEmdqn5YYPM6JGKqxr1qSyGBZ55Mj4C73fs44Q11WK8kTwxSqozrANeNnzC",
  "key20": "56LrXPshaDsgDHaKdcPHTcMurzCMHHa1ibMTSwiEh2JaQXaQE2rvVv51r7ykmAiG9nhLFgV13Y2EXRZpFkD9nuvu",
  "key21": "5TRLeYYhbBU4kz5NKS3STefuwrXopQXET3HB6u8tK4kgg6T6X5aJezruQe1SxZmGsK4PaN2gPWR2DKzubeAnoLNq",
  "key22": "2NdDtBmmJ4VW4GCdJnzpGxYCexys9d7dvr7NhAekkP9qHGZEErFJUZ2dN34Ds2tDTB78Q9GKjF6Ng7SLgxqJAjna",
  "key23": "W3T9cCH8auiRkNSHrMRW1i4jHkeW3g37JGH5QmiKVK8xqwK8VGx9i9qvnk3eAXmDcwRTWq4k2CijZv82FXvrJEm",
  "key24": "2TsrVfSYhP9jND1hYXwUH7fSLw11ASp6QawY2mE3RnTTL3JPQYYnQpWxwMua4TQUX2h3o3PLAFqUEhWFVjm7GsEJ",
  "key25": "2tPwV2fTen8ettbwDLn4YCiCBbkW4yovQJCuoiyQnQZoJyumpgKEjqFVsobJjXVdtWTrEz3H5RsjgNDcLC23eC1W",
  "key26": "4V5wAou5nvLaeDL5f8HX7ncoeR4y1brmxnyu7F9Wyt8QoY3GjeXTD8jyCPVSt6hoMwxKaETx7Ax99tM4LKjvTvVV",
  "key27": "3GqUYpyGtvNDcQ39Rdu3xkkeQPDGquK6C1P478Ya4fd6qXJkTG4rLpvDoKxWWCXGw16sYLd7vmpSHNgbCB5FKKJJ",
  "key28": "4TULQ4uApG9GFVME4VkMdUQEpmXdMZwabUwQLGksSNGGyyDDDaS5XqSYTAWmHoYF3MpFzUQYpccsrtfTbD1fSiFc",
  "key29": "3aeePUx2J4SDDWECfvJtKgyr3yLrHhEv4s9Y4ij6qeX9KKsXxpkXgm1tEMxAsGfMgb3Pj2LnJFo6QV5SLYWgQToq",
  "key30": "4dv6nUrwcfYzh68CUUmbudZv7WVq3Gvh7jUpDF6BUvsmpqXdvpLp2NyETaTkZzWHSPXmKXEqZh1LPrL6J5ju73XD",
  "key31": "2egugMvdxGf1M9n4zgpT7Ef6nCYmFpwJT6jqyKH3LboPQtgUktqWgcsxB23CtYxjokVhrmRiyKE1K96imA5B2REg",
  "key32": "2gwBdNgPoTa2KG7gbDyVEi7mqYr4dtemjHaMWKAuzbtpxgNHRn7ZpyJcWcYxwLRFSTnJEweAyHG2nR3yE236Z3rx",
  "key33": "Tp5UMSxAkVV7FFDDmGB1WXrEKV9wx3KrRw2FJA3AwG9kH4tcu2m8u64j7CgKb6TpsdMmbDvSc2qFVev6KpZ67ii",
  "key34": "4MkJejySsutRYWoMeQ8XktLHX4fRUcJHiw6yfE6beMPPGjVsdpGBbdEi82uBtkgSzBRpssus8R1ZSvKv7NP6GwRV",
  "key35": "234LXPuXJboQHDdsHyQqWWkn3Qos6SvFfbzrWhYffkbWkqC9zifTQr2mmGz244bYxiWo1jKXURDoH9Tbp3RQHoDr",
  "key36": "V2nY7wNiZqDcFqubxZ9RU9KdjzdbKfRzC7CyRaeGgQv1nxS2H7rc41BQzC3DsGcSo2foka9Vy81TrqFNj4zk181",
  "key37": "5bZQ9mBoQzAxeagUuoS8PDhCfPQKjUxeD5z8EUrAnjrhkjC9Lom2dLRAn3QUB5esHPPPFAviTnJf9vCQM6Tjr1sq",
  "key38": "35key8aWNb6BgGBadwy8QosqQMqrtARdBCRXz8H2GfEc7F8LvKyCvQQoMtjn3DAuBSVrRUC8rYjh4G2FaTbBqztf"
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
