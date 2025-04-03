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
    "3Ro8GWpXx3i4SApfqM2jMMvAGVnFEB5nph5nn7qREigJLwLmursgepykDWDyHP4aDDeDYpmHgZiC2MRCcNoJeuq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDG1H7bqFcLoo8iSagJLFnp1h6nE3fGm8rFHjXkAg8MifsMoYGkNSVhtiRR3VqkzHGVKQPc27o8zCXB4PuVkPP8",
  "key1": "42PdYXz1faLgbV9UarKFrR3FrVd5TitwPRartuGHZ667Zt8bsZqncbzUSrdwteRBCUxHsS9sSk521BMaVmvK6zqi",
  "key2": "5uQprQp1NGjACmDTibY2M825HmAppn6QTjRY3o1FYfPTkhZHc4bvfJTVitxdaqGup9NAsbSqSQDEcrKczZW4KvqJ",
  "key3": "3gvK8Ee3NfGv2txZx2UuURWAhfegD3oUcsvCBxLvPHhPxjBUsVrKP3vmCbQZ28QEGWWZcuuZhbXHcc6d8gd5Wphj",
  "key4": "z2wMdiZFBt69XDiaMnbpzZ6bVbUroCSp3GNFo334C1fdoHUsLcuCAFe3dDuYmP8dwqgwEcdsLk5X3ZpB7L62vuf",
  "key5": "3fSB1ojWJVKNeWPUg7RHqGR4WHmVQtkfGh9dvspAC1PPgNjYsMJMPa4rzp8xjPcaSpyKnjCKXaYyFXXBEjeZjqMN",
  "key6": "3domkpL5MzL9x34o84VJgFBgUnHtKtVSb96oMKNQuxy7rQsmdHSur4sTRpjaP5GqmFNdh9yu5ahrmNEHnbD56Dfg",
  "key7": "4HtYSwwCaHFKsBgya5zWdfneXb3PjrbRQJaA81ypye8ysubNLAGqQGM3QEdXT5pqGvQ4HnfinkemrY6knSMto9V",
  "key8": "BCbfSiux3pctwvTdUfMzS593JosEyUmaaDTVMKHGmcppGBv3fMjWsAJGLvJJrA7jiSzz368Gcvvf2E6wsrhNiqD",
  "key9": "5vcE4HA9SGZ9Ap5gUTvt4MK6UfDzMk7bPvhBUWF89jr4zFBmRHUYxCa4x8853t41Sk1DQ1Zcz7FQr7ryCQYRGdvc",
  "key10": "3zLHNse6GZEt8gXUU2djgXVCJRy4GKztiiRiM5bPGVqP2n8xD6cLjNnrrdxeH7RSqVYEvx4tbUf4ZxeYhUy8ZzLB",
  "key11": "B6MMZogZ8yzhXsy39RZ4nkdUPFCk9DyBuKaMMf4eqS2FfHEzPW9ZbE5fscSdqJyEqpaWw3YTVgM6mrJMrJrUsLS",
  "key12": "4SQmV5hRAUUyNTK5gWB21WeJ9Y7pohHf5zKBDHHkfNu5Euq7ioLi6m13Fimrjg2ig8iYZty5AACrvFfUehz8BHHV",
  "key13": "ipcGwiy9E1hUGRbp9dZzhTrZnXLxY5sn2PEnU3qoe3Wda729wPPmV3aY8NzH24eWWBPBcDgj3b9f13xzh3npvMu",
  "key14": "vyFrRm2v7GWPfMaokVyjViTzkN9Losx9GUBN8ntJwG74p7kL1qNw6GhnTCjikn7gMuoKsZsa5MBJYLKM2szWEmY",
  "key15": "Y9PcfcF5bH7GyMwTeWZcHeqBwqfCZYEqL76AyqwukmnCdSaWe2uefSjKNEbr4rgoDKYZ91w1H1cJmG8yQz2yprF",
  "key16": "CD2FW2nAQLPgPDWqRGeFBjU2pxr6U56fp1Dx1MrEqqcKANATQrujQdytuhztb8GR3phyjVh8vMGEoiBbp4FU9Ld",
  "key17": "2V3yPkVoD6C9qzm4UoQatHKNEg3Dm3kWvbuGaE4mjxztXTMVCQ7cb5Nb7Qu8198yvXZYXSQVSdh6CxkjUmqDpbDy",
  "key18": "46xjE2vxcBZdKKeGdgiGubg81hkWi18p1FjUcjys68xVmgFpntb5TTxQzUEMiEN2soDe5kkX1moZqtRS5mDCgQmo",
  "key19": "451ZZgR2W8iA9Pdjm3Mccgde9wGJN8HZ3gVzpvP52KwCt4DV29y3CKbLYqfo5L9rGNWWk3msqWiJY4AJa7SpxRtS",
  "key20": "2ymqbnteZzhdC5r1suUYB7TnVNXhYbnDiDsHaRBZc8TncxrrBEC3J2qnfft3cDfKxX39dRCF6B71wWaaafQQ2hqw",
  "key21": "4BhxEqKGiNHa7nAvCAGrqXtv45RgYH4w8osaFFXCSNrBrx4Un48G9yLZdF438DyKLCgS9BrisNZEzaDNe4h2cZcP",
  "key22": "5BxqonYszHwUZ1h1DnWvuDNqYYCyxtt7XWb7i6m6YNTMe7m8vYeVmrJgmEQyDn8SgbKTEd1pmJfQwKmAjuu7mpo",
  "key23": "46YLQ8HMLDiBbzbxmXyTZ5nrugTQ1BL4TdAUqmd1W6PTeG3QEnMfTDDzbtMpNYtLBGiTtjt1pwwRqk9F1iF7BBnH",
  "key24": "5wbT9WeXtahkf3t3f21ukLhFK74zTS5nTQ6PXGPmAah7YqoDQjCou5fAnR3fXM4WSfDbGvNmoSrPeciTGrSsehFW",
  "key25": "677J3o8Rhri5aYgyZ1cQZ354RULB7wwCi7goNq6WrJDZ8HUGteDE5kXzkU55DDs4cBAMcx7brcywCQ2bAa83TTTq",
  "key26": "3jQtHQwvYyTaGx6983bK2RqzuTWRrtQZjm4g6c41rnmvXTLkmfCv61yusBCvjYZwwb7CdxJMpD44U15sro6yvmsz",
  "key27": "3BxC2TgNEZ4Y3pJhiv4Xf9SZ5TjSaUCxyBanu1iaouXWzT99hzHKTUBytqS1CWFcZnH23NN6qU7Kko8GEC6ewhUh",
  "key28": "46QQPzJo9uZ2nNHmX421yMgweqyG1V88ZgwWC74M2BNxQ9sXzyY3t3dKf559iHzL8G8B3qKpwijjMbEf41MK8WG",
  "key29": "649kgoGsfXk99khKB2h8rDENbQvMBgDmH7jqwHvik9PHv6vWH5fQNdCCgLP4c8ksaDGEP28eTeJrRSrLbDW7SaoY",
  "key30": "KKdEpcL7QUfmu5fT3c3xwh3WjTEe2SEnnbYPRt3BRWgGxJzz5c5bGCMGh2F23ogatXQJ2VGZ6B5849DZUo8STuo",
  "key31": "3GAZTserT2fMS9d6uHWy3m5rn9xfQPciHHKJwp5EHBv394x6FHafVwg958xcaYhJEag9LYj2dYpH5PJ4gSBjRQXH",
  "key32": "3bMQDLPrSFF86Q9gT8n1UZqum4U6V557akG5fHZcu1aUvAZyPW2ZrCR6VUFvfJvz5LcgEekUFNZXctXae6qk3KzM",
  "key33": "2k74p4GkbJx75VbQ1BxtW2nZUiqxBBsZLRYzYnD8YWy54r9HP6yQ8sTz4eT1BVvh9t9G1hnei3WFxqcmJnmfpdhX",
  "key34": "5Gt89nCr62a3PQ2iwi2HHWtE89cWqBbmpKufaNQPCanMrqoEV3CgtaBzpCVLrZ2o2C7Cu56tXeZdZiWBF3AdMgXz",
  "key35": "5eQ8Y1RjbQezt854Wpo9uW685zf8ECeu3imSnRjaYtEhVUpbqmNUt2FxPx6tNGmZZ8248zwMtPK3CH3W8vm2Wd4t",
  "key36": "44MbPq5nhKaTFFq9WzdFqW1zx8Akzsf4FYC7j8rrCsMXvUeH3JSPDvuusSXMrhGMGZnxEXqvrKDXe6UTG6YeEPLj",
  "key37": "5Uf8ZLwZC1PjF7BYbUmSq3rnnBJbFyZmS5Gwe9vcPusQgV7GfmHA67Rmr19YJWuMzbMWnrs5Hc8dyzDhocDwLnWS",
  "key38": "46kTz432jhkqiEBzqPrfevi6yHZS1dNoSo7rqipSsGExGCQ3jjRJDu4HkYZGhSKRC68c8q6fxeN4SeenBgsvAs7Z",
  "key39": "61TqjmHQLw8i66QaJp2Hne2yK7GQr3qrjzXJnexqgh7LsRacgoaTbdQXyYiYdt5gL18nDGU4v57CytWYcqyewtvm",
  "key40": "4ofVA8gQqCZApEeFfMvFGsByPdQZiLgGChPvj8sVwi21EGFSz8Vpm7vnYvKtAqMWXB9z4YNN8TDzaY4xFdLhw4kV",
  "key41": "3iwg3BE1Pin13HZjjibWCYCBSJVhQRK2tazqLFMiuNVgtjqmsp6efskexxRoGkn1NdEvq7CgsEBS9CtYu9xv8UY9",
  "key42": "bcLCMepgXAQVg7baJNc1oiKcDk65NmqjqsnK7J4xRHXwDHZwyr67XMpBKfQtA2fphTC2s4qjdaTDvQHfxzted3C",
  "key43": "4bwknzpLEDLTCfUFSkvensh2h6ZaaCS9MS8VAtnixotguDPsFj6QYUCwBxs5LTa8uPhKv1v2AVSZFs8Z8U29Gv1a"
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
