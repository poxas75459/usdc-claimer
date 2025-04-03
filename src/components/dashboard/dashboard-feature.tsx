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
    "5hmXjJSVFVkwibSF16GGqiP7D7RuxMLvGP1nGPg2MX1jatQuX758AWJigfE2M79qBdyRPHC4JN5n64tyggxXsVvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzQ71oUs5REbH7g3H7iU6sYs4CD9SYLdeFfXGRz9E3QJ2b1mp4hQvbT2AmWoGnwK999DednGJjSwDNcYLfom5Qd",
  "key1": "59bsAsaNprhqyvKvD7ZowUvABYqN6HY5jjTbcG5GRiSGwe85wvq7Qvshwc5Dwn3dyWnryRvmDWyJ962hkAt64qQH",
  "key2": "2bFXG6Rp9tvm287KL4ZHrmLAAvsez66wYUb9nkKeKfCSJvyS5i8CWDsxozGWC3G9mmbqsDTckxY7qopR3CFSbt2w",
  "key3": "4MEBbTEZvPj61SPhqHqCjv4pVZz8CbVVLuB8UHLRzAyyBhQyUdXAxoPDJXKY22ifZyc7s4F6Dg64LnNWY5aVcJd7",
  "key4": "3Hu9xfPR6ZcEujMxn2aYBkNL4ScVV8NkU35GemPtYzBN3RWsdArx3Y7RNySgZNXnUusqvVAopgKkf3jjkXat3DVw",
  "key5": "55AW3D9fbibEvHcVu3ZqBiGJYpawgY9AYkVAAZ9oF22B6DZXgfCAacabkfBxB3QrqfNYJkpSgf2rY63SXr1QnEMD",
  "key6": "5QVzVwknPPLAU4PQRx21tXGysWwMtvEQr1v5eCApaixLGN5VsQRighrxNYNwTbZ2ZyufMXtzH7rSJ9gSXVeLs2y9",
  "key7": "4dQ3gRLeYxxM1PYYrXurc6fyfezCk7cWGkTwmznWo3R4kgTM6384GeJsnHmX2TiENHcBFdRmLPWBQo4Xnvkybj61",
  "key8": "4KRihkJNqq5wcSm7n2Z8CJq4NjN9ZSPeUBC4qCPVcq5Grq3dPZetYnbVwumUvyGeBAhDUPswcLaDQs4VYqiPuzW",
  "key9": "xFyeLZLswMzMP13QcTjnruPNvyJu7oyF271exQbjGSgLQcVpUJEFD12ejtbUCffPYaBpqvTc9L4iPANnr5Su6gg",
  "key10": "3qefKr1SAhYk3wrVbpdk5bVV5LmJwTf7R9uCmwLRvwH2rECnbfpstE8FUsr1eRM2XrM2gjvLTcXSaTSCUe64bNBv",
  "key11": "3krjaVqyX1wphSHxskQZmeog2345tTbkiuh7DDjqTKdYewLS3ThudSvjyuZ7m5HcxfWjyHGJh746qUBUWJsR8HfM",
  "key12": "4JrjmR26oXrg68ZiFVQ1EgV5BxzsFUdpEfBCsPV3vUzTujjxy64ReUcTg9J7Xdm9YFtxCMWCoLqpfQcRrLas8XNv",
  "key13": "3agM5vW55V2WFPXyAtomyN4KFU9ER77Rn4e2SXDTXewxx4DfqnAyojfSGKZNSqkYUCrJpMjg13KLmdi1MsD84AwM",
  "key14": "4TceHE6Nx4WXUEQ6wFpgLEGKe9XHQSUQDL1Qj1iUJ6ZSuPSPpGT8jvWXsNUHFA2K3X9aXCRsx4yfVSUk8tSCpqW9",
  "key15": "5mRZyvjxLyMKsBWaGzH2esSQpztd5ex2UnekXudKeHJYRrbsG9F5DfgHE6RBoztJRFjQHa1NDUssbSZJDihstQyn",
  "key16": "519ecXfgKJ7TExvDbyP8of7qDsYnMQAxPMnYwMUoXH8cVvVyaqgaSG2Cm8sdvf8wPBySagkYn8Y2NAVi2qiSznCH",
  "key17": "3JCbVoP4cLQTuNkDBvd5AfRtPWNPuqVG11HrZuf5mf1qcmDymVGasebQdWfmCuyU9GWEMACicMk6JTgZktvP7LY7",
  "key18": "2sDyVGjGpFGg9G9s5zb3X5NVTjXLHdM6FFSThy5fgM4tikBe8cLBx4ouRw9US1ymbU2dqgqd1d5jJ9XQpxNQ8B7T",
  "key19": "3DHVB4mTWLPysa3cU8ciPYfUhm3UxYXQoCoX6MCYZoKiXkTQDiEzC2bCeF7ufQQpoD3R8g6rLMYVTnpjHh2ZAx82",
  "key20": "2Xyx5GRjaMTSV2phoS2XPik1G42tUfyALyiPPLvNykimGGwvWSsNoBkH9TsJXYvaHATVjpdKg9TdUwFSDUTDBomM",
  "key21": "73TWPbvFQWJBGu6TFhhkQXvigX1fszJorVauUpZoEGoAnxM51rAN2ByzVaXidCMikZEqkaxScXanTBdigtV3yKz",
  "key22": "2mRq73n6c7Ubv6bppBz6P4THLCLKnBszgndzUSJbVGysNg45c217oFwL5RKQ9gw4ERrwDeCQssatNZ6T6fPqiwoz",
  "key23": "4tYpHCFErwfRAMjxsSKPtdZFxbLjV2cd3JC2zP75VVxiJUE7jriVPZpXGHzUExypAtJC4KtUE5noSsqpyj3ZsJwN",
  "key24": "3eFU3LXkZyqBpMsboLxRCtjZ3kK2wrJArZBqijKFREvnZRGmyejpzsHLn3DQcjUNnK5DVbmd3mUabQpUiQx3KnBr",
  "key25": "59xBEXx5MCdwqfLtKdkp64oGq2pNzsQeptzMKwm296t5ZaAfHgQCSzy9sSJ1vTUp9a9qZEQ1M885nKffKfY4o4K8",
  "key26": "pENaao7ysP8ww9EBKTHoJzYV7mL47fg2NW1f9qN9PRTGHDAHr6sd9kxU8DNqEYLNZDYrav637Xrqz3qXcA9y4kr",
  "key27": "37Funi3Yq9U5Xo6XCTu7T9naSAGsRi1XQbYC5hbpwnAwvf9Gxiinm1FcdiHQp2TQaRpzNFmLMd7SNs81brMFXHsW",
  "key28": "2kahfxT6JbUWwoGWQYxYkdnH4Yx2BTPXxhoNjEwQ1NsP4aui9Qdf1LWo5e1yP2nF2a3AwZfQn8gh3LjivPmJvkaF",
  "key29": "W7TCaRAAmqzYSDbhgtFPYCxfQrgVTwMtX42t97PFwt1qoa1bfrkEeeiu2e2mW283jRLwJP8dzXXJ3h42hqMBtYJ",
  "key30": "2DgMfaQNL6mVt9rHBEZKTNh2iL62gptA1kSYoAP9bv9Qtp5NW3RfpvHxaWUu9QFefrfEfU241gYmzqoC4AE1YJnN",
  "key31": "4gPJgyJjV1wNg7cRnfcdkkTNXY8ZHKXZ4cSDosDmeDbDRBch2g1p3TvqLZWSQpc9gmoK9XLS8yMFMADd2juKDf5p",
  "key32": "2ZUYFQMomnwgR2EUJqPWjtevvo8n3cmDGmVd42SL1T6a3AUUwT3h3EzraUhz6iboCCSffefXFawUno8dFhNnEfeb",
  "key33": "7EdbpMfAQs4wWA6FpP53YfGnNLWL2gYe5Ki1AQRXUygzygBFNjoWTxhr1hWB4Fq3ihDZkJXFaLVjPCQ4qBzpfAf",
  "key34": "59Hm6vAwimjo5gkEpqPpU8W8K2RzCG8FHqHDAmuQ7MmEF87zfJgxhL42y6L2s5JcGcDzzatqu4sqqBcccj1DVHfJ",
  "key35": "63LS64EZmbUqgN9LkmWQ9ZCQecKZ5h6vQJouGB7WF7uApy8iESEAkuaWuegmRs5ZG9Hxv3PmmE8ouVgNgeCX5tiQ",
  "key36": "4ETCuPU8n5jDMiSpgoeWVawKePPPwN6DzfmHGjRU65g2YMvT7qVCCVqtLAR9SSAMQ25VKY79fM4ob9FSNiQf8CYP"
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
