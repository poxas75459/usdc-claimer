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
    "3yZwJ2v8mMT1P5pciAwsDdmMjyFbT6mkctKFn1jhFKUPn2qjd1W1xKwfAEV8fMLBphQkBjzLFoSYkTAbppTuTTVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LD6dYPxSd8NYbkiZSgUiWZ91xpGMumMzv88Jwnwc4971VdprPaAzeXuZEAJiRjxsGdYsDVxp6rpH79qHRi4aio6",
  "key1": "3dtzF2Wop6eLT5abAXcAn8yjdan1M8WuDWq1FN2DoUh6haTNpxL2jo8cTx7KzZMWGrDDDm1KWMEa4fePKPVkCRvm",
  "key2": "5C6zWq1mHebnAHQAySUNFHABCCG7k6Tqu5e27WP8QCfyNDHr3jngST2YVD1xpM8jiVJPj1LGh85upqWDdH2DgVsk",
  "key3": "5y2khgDTRbEZYNcMbHESs6SPBkSEwbnk8uQXk7fRG7aAKoVFMuiLMhQ8RPQAtCkuCFMYYYtuoemKFvEPbfDoJA9U",
  "key4": "27p2dY83FiBP58aCk2aBCg1Tkg2bscDeeyu6rhPQUVejdKQQUF8h2TGsitp1VvQ1b3w55awBBnKvagt2U555yMLp",
  "key5": "nupPL5UU2FVkrbhJu8DEA9X8gxhxY8biGzRGEGs8GBGjcQt61a19xX8WknPyBqJwaLBvkNJsMUJdsaoJt2d3yeY",
  "key6": "82z2RJWXRzX7gxeoonpYiDowypAxAiMYrez3wPnjk3YBsCMAiBXb5METGT5JugHUtK8Wy6tQW1Gy62x9aKU94Va",
  "key7": "3e1eTYcMNdYVxXGhrAbYv3PUEJH39DSUM6YAx8s5DpCxWvsisKdFULRP6XLTsrUDuZBtehkqHH85xXgT8dsDLsvg",
  "key8": "2z42GYot3C6idtsSqtH8wsckwmfqE2ZbNdw5YdGBPTcDwfvWgdaTZBHiJ1nbgxjwnQFeJdbqkgmToNiJ5mq979Hv",
  "key9": "1oxrmToKwdqBg4AehupHJiUCmBAhtLtCo42LX5VcFkRHFubDNkxxd4PY8kC12oy6hDku6C7LBeAc5bXECXRuNZB",
  "key10": "5hr7gLasVts9fufQ9orqCHNUyZmjTdAhVQkFMaLnfD8urEcNT4BxKC2hNNHq3exQDKw9t2nQKWKKrGykmibjYspC",
  "key11": "M8G1YyAwuWR1yskaE6LWN2c4cbjUuh4j31H2DSooNJuD3vCD3iyFCpenN94Cf68J8VRsQ3aiuFRobKE8e85YvsL",
  "key12": "4zSZ53H2g6NzsxxMoCeHNok3mLs2nmDxcygQ5wrRvxNYkbJkKqpycbQVgV2wv9vzzPucyge6EsHqArWoHaTVMEJd",
  "key13": "56DA9RY3QjULF4nGr5qUzR4VU4vSkb5KNExrnvUUB7RmZmb3K1VPf9MQ8EBinjyqfyjqpuW3JpK9SX3Dj5i1MMfs",
  "key14": "5BAsmGhJMGBGosbmke2xcZiHWUeM9tEV95ejZMQQyu1otCctSGzzAsb513EPMth6u1b5KrSKGo1vi5UJsRrH8KhK",
  "key15": "3NfP8pxGT3m4L383pMsRvWNp7xKxPP2xUj9DfEfwdcnGadSXuG3t5y48FqHVifQSo5TbizbH1zESoHw2gJtfGUV",
  "key16": "2cB8mgWmWaSw11y9hwc7XU5EwGfBbrh8amKNyb93ZVArAZuWp4gL4eDRnA4iLkhci1XERdwoMJQRQv9GzNZkYPse",
  "key17": "21GC7v1sAuFE8ihnfrbUJLMyo76CpZ2HZ7dMAptWk96eeKZ2WP1pcEEmhT832qadp3DupxvgCdygnrzjJJMDQtge",
  "key18": "4oGVKS6BjX2tqpymRuN966mwceirQ5YQQKFxSnhEgqW6mwwyVRpvcGXRg1k969b8Wt3sYgsxKjvpSsX5E2NVomqJ",
  "key19": "braUN4dFjReyHfKHNnfVXAk7HLYDTqmyVfWe3brkVkM13GvZ4QshQ7Juo9dktSjUdhGgcHSqexgYcq5nTgf7hcx",
  "key20": "67ALETJb52yzZ2AMPee1PsJWCMwfD7j4vzxyeeAhFtc39KabEfvCCobun3J9AhVL156pWGMbHxkgXUu3m7Eq1nAX",
  "key21": "48b3fbSacoEpZDkhFDpyCj9Zz6ckLPkjR1n65QZbydibQhqSFTN9wePUps35vP3Rz78vopDj3j54CM5cKu94hPMP",
  "key22": "2gm5r4vqG82Xf8gwt15t2q8MLdn1a8oiB15tKhvA5vcKo6xT5FMX7TMiqzJWUTfRVnDUnsgDPxwpMpJvVoDNk1fU",
  "key23": "amQXVpvzg9L1ALdm88sYoBhxxvFTcxpHa6v1JP4W9ZNt7w1p8fqvzwGwcXGGsi1dPCK4zgKdeAPqBvXF983Pqru",
  "key24": "5zYWjyTWsnourYGARAW8375b9gZbY2vtD3Fvfa8yAUTZ1UzxPNxWj4mYa6qxyiFLjBSQvBDM2QzwPMXJu2Cytmh7",
  "key25": "4LM71rN5iT1yM96eMq1Q82sTn9ghMUHdJrNrta2KYed99VrhT1qYiM1gGwcPtWcSUBG3aokBcY5c8E1mk2fKT8dQ",
  "key26": "Ri3ypjLmwjJ38dhnuZdCjgabkLrMrqmofU7CWmWzkdXLrm2ToyKB4i1prnveuB1f7v23v1Ux9ifkPGMWmPh5pGk",
  "key27": "4tnVJ3qtGr9jaN6XAxF5pUn3xYtLJpwF9Z17tkHWSCf5qPdg3rYpP3vdiUS3emh729isHBxJDNFm3dRMVUbNg1w",
  "key28": "5MviqC6Ui6K8Rg7qkjTqnpdoUGXWnZvextiujaVnonZUarnA2Lt7HDgh2Zyd97dKWgEfJxqdeoGpoTtFEx5uShoE",
  "key29": "23vKrHohYZq9sW2VWXY613XzHSY5EcE6npc86bmkYVvWWz2Yn2B2v8GvN93VtfGK64B4yLfbjJ8hoXyUBnkzxrWX",
  "key30": "QXSxRBbm78sx4YGm4taJMuceTQN9x7E6xjpzxGdGwyTYdhKQiDH9BnoLUGY6GBC3snsjYyDqSyxNaz8r5F9FJiW",
  "key31": "23xYyTM8WM96Hy6fXa2VBLmo24JGEbxk1DSxaiAvbnGcupyFSDVmeU7fD5z9MZjgsQ7TRiMzGKGGbEpEMGgvNqjk",
  "key32": "4fVp1P7XZDDmYgUYb7w3ZxEuhyetmVthNBsfbJ8TAerFRiaNJAAsce38Sp6b4KNXXhBDktWzrYxTMUackvq2CuhU",
  "key33": "3EupddDyX2hgTAwM2uMz59KaUhccmPb4RmWDAH1QDZAp7nKUnoW4F45udRpH5bJMiFPZrXAzYjvGFJeBKMyGR4Um",
  "key34": "23CWcDdvhiB7Wx4fcaa3i5CCejd12mgszyQmbRCHXQUPYwW4VqyFABEVkydxSwi3fzbRsUNqvxsU6wnQbY99anuf",
  "key35": "5dpGwWdTpDhjszFHyUFJw1mHoW96D63RPQTyKh4Wfwhgr4sQ4jZTJ8pZyBJrEhBgpmi89uBrLREf6nMVSREvk5k4",
  "key36": "2LA77taPQYTcvRyibsDfvkx7vubghheNFaYZKn4mWEyspYxmCQQ8jQRyUkg7H8trsJpPun7vycxNTVAfGR1iwUZJ",
  "key37": "4XhJhtffQZ4YSiLs9JTVTBzbSodEfRdNFtLhxspjMnLXNvupBZQqj59eNcJXBY6iHny6vFVdMMDx8V1UnQQBr72i",
  "key38": "nGZi6gAAjaVaFPvtRTc2dwAhjkdLZH68oeLCzGr8L5zY7qZEw6j2vNt6P3dR62PrZj2RGU5u5XhPuyHS4RwbgAB",
  "key39": "54wRxE7SbCEKdzQqxqr5UkyZjQ9JY3EcmhCyBuZg6nvj3My1nBWN9xQ8Y5nNmvd6XYkT1DxJeEF7at7hjmmcgZXt",
  "key40": "3maYrNb6j5Ff2ezz1kgiqeCXVHXVziXW8aUCyWyZrNmmorSjiPpmFApzcvraWAXTLBy2XKHkCH4nGRyvkXtcJMCS"
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
