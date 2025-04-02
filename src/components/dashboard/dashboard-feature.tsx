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
    "22yq2FqXGkz76piJKpffZ4doczsgQSATHaZgvjeFqhJzqdXqbQzSE6BRzd5bwR3ghfQBdGuvtib4LwiKdWZJuFjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KoimdYk863VTDNm9xv9T35L966B3REHNv1KsEatjVW41Tk6SyE2mmScyJ3DLfjdZy2Y3Vbg2X99UVFDfSfVXmL2",
  "key1": "5TvD3gBqEdWDj8ZZcdPK9Fpau7QbBZsEeiPax8tzPTqpYfaE37b6Cc9hNo2p2NLH2VUnG8oaGUy9i9jVZPB7YoXC",
  "key2": "iGQRHQeVeLoizzW8gmc95kq67B4NPLuqRkRqPb8GojVnHoTjvMP4pkjgsdpDUTcWnjXk4VUscvtemr8XCNw7feC",
  "key3": "U78M7euTmYEpbswAAPmHi2jUynz9F4XuPJy8BsQ3MKPfBpy8mD9QoL4cjJP5YoPSK6QBpxvzomHtqcFNzLUX4z7",
  "key4": "25ozSz6YigUPeurs3QY6i8s8p5Knt93pFuNAbGR81a8udhjiSH1kcU1hjLxhQUgboWzSbghgQcC4yfU1CcV9UJk3",
  "key5": "YmUFJuEUpUaJFEUqCqzXF4AAUjxXdywSBfPtUSDpkBvGScX2hapBmgqPzzzXyzHV3koxmCYBVp7HsgPWN4z3SMV",
  "key6": "2hCPGwF3nXLqQgmRkDYTSSKci6RcSyjBniRM1ubNnBi5wgbagfmCPdKYa3yykS9nbQtxk3b7Cp6uWAGkNQSbJ7yR",
  "key7": "539bVeVWEjPqXdC5jpNgbziXYrRCDuNrvgcNUfGsQ729iinN7JdaRjr5A9dtn9pFE1sLdUtyQojhx6y2HaF8HLKF",
  "key8": "3kK2UxMpkqmsbd3TRwnng22yDC8BFJ37dBt9CwkqP9G1SHdji4fh8iw4SjCciZJVk2rTszDqZkKaw11UzYoxdHZL",
  "key9": "2oB74VRYW4trCKwxFdgdipKSzDt2Y2MyzJRfhUgQa6sd3CuQyMPG3Su51MiNB4M2hhzVuJPRztQnSXFEPnF8cCwv",
  "key10": "5xMBvM7RKsWT5r3ZfNavUaWBkMAad4t7aZkQGi2B94xTHG4cKadtUVagxq2c5v3KVdLDZkiZ8naXZzr891RPUf64",
  "key11": "3J31xpETujhFvkZ5ibPLt2mF8QwmrZ9zu1357jct8X3vEByjVZa2oX1RNHBVw4pmdXVqssQBrcf8moipHjXpDtra",
  "key12": "638bxncbMdQRTqJMKGx7dzNFuHHDhNcyHsNDxEvchBPuQVK6fkJDskdyCAANPsvJ5H2zBce8jajQop8TJE1JACUL",
  "key13": "BnCBAcysrfgBMfnyqc5wCxLDQwnLiDkuHKQhgF5hWGHwtCQdo4MBj41MkmA1PbjumrZUrkm6v4sGJpTsXyry5kc",
  "key14": "3TpKeeqJfV6ph915P4XGV8LxuZQYPAP7VDZWRFo3Tawh7KyUwuhZ1ztBu3irRCdEcCXUYvqSgdRx3kknkF9bh7vn",
  "key15": "66qYkrxE9sYHzhnneZS3nyntTbELH8sLpWRNArLthqG5MEu8yZKs6icaet5FwoFNddybWxMDhPhijj2BiyrF4eQp",
  "key16": "2yvWzCwUn2xxfgVJL4joMw7q5Ru8mT7mBeFa4XkRad9fb6dyy2EGAA3km4raxxfgmkxA93dU4xXvN5B6jPicfjcu",
  "key17": "2d5rL88y9TYms4m1dyTabXtX7xQirmh8tXU79CrHkzHtVdpkE5N7XtbwaqcPiwAhojohw1Du679iV7FhmM3fHm9e",
  "key18": "5MiiXkARJHt6yfEkTjFkUkLHE3Sp699WXV2L98KG14wozwPcxGyc7XVuAdCnc1wi5yZcfX1sW37AbosTFaAVPkfN",
  "key19": "Mptkk4WC2XKrsm6WjaqSu3WRi3K2e4pxfQVsm9UpwGLvA2FCk4XewC2xaHvxWnUs3dzkw3aF8isdbqm4MNP847p",
  "key20": "4guiajPxYvF6hCpRaabp6AgHWzKajsWYEMAfdccrJJB9X61k5gAJBQbYGas2a2V8C269B5B4FpK7VEfgpBASsF3Y",
  "key21": "gt4L7UhbKvfrcpooX9NPk4FxbTjvXmP5XzW8YJYxXf2jWfighGGoDJb5LSrSkQBGbSzKQq2JBNTEZjGHMeRhAyd",
  "key22": "5STmQA2DjQJnmpKHiHFSo9DW2s3EV97nEj6ubzAVU2qAxDjTNZuTzhk1xA87Ks3W6A17xzSqyeagsgC4D47kUYZr",
  "key23": "3qzVXms8D54kSZrnu5KgfeFmKqSnTN2cPBxn1bdbxWQddQntYnywVTM5S6KFv6GT4wkfdDCdbbiThRBVJY42emqX",
  "key24": "BH7KerKXbrr6tEzq7yq6R6WVW78uFnjn3YZFWWJgnjZQeisS8RqU52W5XcdKJZEtFgQdhpvZomrGP3KRM1DuH21",
  "key25": "2efbVcyZit4t74xLKpkepxrom6YpPoq5Xj888ouZC8CtjgnMNjtQbshopxsbwhqr6mWucdULFVUWe9qybnqS1Rpu",
  "key26": "3A5CkUdgieRA5jZPbRgThUFM7hAZzLmxAj8LP7hga3se9ZziEBD4qygGMgeuSNfSRAbJYR1mU3BwQxhcPfQN8H8S",
  "key27": "5XgdMqYbkrCUwqQAja7qkBUD7mKopJvzC6yCrbsXe3ye8F3hg5BcZ6SD3SPaW2XDLQGUK7J2xC49Zd9uUJn751E7",
  "key28": "2C8T36CQspYBD33dWsw1wDymuhdHnEom6m6KHmL3QeKTueHBJC2pC1Bjx2aBAe1A8rHJ5ap86z2Esuax2UCKNnzx",
  "key29": "3kAYHyEjgur2NMuw6jGWXZXUrQhkgi8RpKxBM6c197iEJA2bZYFuUuPwdx6z6atS3MjbYczBWK4RrM2Cw9RnJc6X",
  "key30": "5yzupkDicvjngrC2RSm65MSeax9hu4MvmLxhU92jeMqQ4KivuEwMSsU7PxtjwcxMJ9pT5JR6zpQKC7wz7NhQJFjp",
  "key31": "LJL8mswGZftjWD5aDRsqkhMeWkXbpPPeDLZ5QhUiKeo8cJntA77QeVbyWu58C2fctmraemL25nNavDjaBpfWMHu",
  "key32": "5f7UGjP7NLZA6869j7jUNCvicNTnfdJkE7ndYJRWnJzQcASoLNJU8ozkf13BZMwQcuNwiiV1QzYDaH2RTQzDg7w9",
  "key33": "mdmG2ktCqGKC263x1tg1hwc4A1aaqXmpN2JN9KjwSK2yukzSVJx2B74dQzgk6jqSvCz8YbGsJiLW7VVLsbmZkYj",
  "key34": "CwrLsR8FDMVvKHWgsTaaGiYgNwVNN7d7pkVNJvtqtZDd7hN5dcacRCL9vydfbyzgf12HDm93eC386hb3XpEpsqY",
  "key35": "2314TDxGNENkWGC1A26Q9qMj77nLnLMw5DJkph5d5ADy2tjWbG24yts44RqZ1RXUmSVgDFadkTbJJcWFBE5fBLaG",
  "key36": "3YqwtQDwzGFxKdWV6nrs5nNSF2o9eK3jobm1Lv9e4jLyBTCPCDQPBnPkczqcnrXaQVCVhyd5BLk7bCSWWx3tabon",
  "key37": "2VGHaX62cRuH6yNgEcUxVa68Mdon4Ey8p6dNp8zuXyJpE36621do5aWhaqMve21GB8Rg3nW6wr5JPjL9uMtQxrmi",
  "key38": "423n7CjRpZkt21mQRsNrRBdVCHrbkRLGPKThzyXdT3uxpqi1KxE6smh1M8b5Lg1ctnWjKbH9SkjehxfDkeUTTRRK",
  "key39": "4eQH5RKHZcE4gcM5pPk64BDN3AcuMjeyaYy1syZv3ejMZDpYTC1aiqAYWW4RbhVmh9vE2NYSvYKKy7fTMUzyMov",
  "key40": "445Hm7FYwEWe4osmKaH5FpqGieyNYGZqsfsRYG75zFs7pA9fWJcgQEjC9yXB9QSV6S2QY3EK1m6e4i5KVMg78Xr1"
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
