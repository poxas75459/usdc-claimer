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
    "49WVuPTiKrGeF8ndLpSeg2uJsRJMfis5P24vcU4D6X3xiwmgkf7daphCweNac26kh1yUYVxkRnxXyqwzFNYMccUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAez9M5mCYPN9k2YMbaYZmA2RnB82WavYL2m8zmHEbKKQNR9AGPYESWVL4Y6LCN3nTcVFLyqzGU5Fc3C965p2Sz",
  "key1": "4PPLFN6pUzgWywkxGcFDuPr3vK8cWxsEec3e2sigkacmgJMMT56MKapuxH7kZxEZpf44wuxbkSFTnyi5QY83AvGv",
  "key2": "aEHf3EDKrDJSU4PXFGTfXYggsswQgGM1UF9mYpxn3gbw4GLcna1NDMFzK3NeAcimsQ7thSKmZnsGANQg2SMFwkw",
  "key3": "cbUGDfjmRNJG6xfckpPaJnviDmr3b4htz165pJB3GvSdbxrQeP91DPp7nNguMA8YYXzMN8vXUggN5hhmPfmjNXE",
  "key4": "5Bts9mTgmVy73su6nbjMtnpV4XXSAKV8mM23Vm2SPzzuWpzZqecAcoFqe7wbj911Ye8tDEHPAohYQTc4CPyLbhC3",
  "key5": "3Aw5W9i7PYkRkDYiEa81ErF8sM4fTaCLRZhC2HTF4pjPkBsBNk2CKg7CBzxqezaBttPf244wxKHe6DLVQqZu8iTc",
  "key6": "28WP423ACSxCD1D6bbbPtMsDvFj42E4K3PJzmbFDzVrR9keiAgWhRMkPH1HDwfJy7F9gZfkuzT34pjmXABdGA65T",
  "key7": "5pZSan7w1e1M1qHzj8AMqfUJcTiVNxwnQ47Z13eWjCR6HUSiuZhUcrTKPPPY29m8WoXSJndDNKp45ByT6RMLgYR2",
  "key8": "4Eo9kF1R4s5Th7yfB45JehsHm2ZLGixSabS9nDxkidGMbvNziKJMcxMxxY5YVeA7EUwwxbUGDvepsLH2sHXWFVtZ",
  "key9": "5UcHRbgaeeTnrW3YWZBE9ZhqaCkxVKn3yk27Mzq9pjrje5HuQB34hmp5mUtdE6q91NWMbqNyTW1G7zcooTMA5h1G",
  "key10": "5J2seDBStVEcbh5f7fAU6FQE29XYDia4GC19CKKb5vw8rAvymEq5kaYcxrT5G6nQvzhxoUQcnR6gYR7Ari9X4QVq",
  "key11": "uyC6gTr3cgrm2zT8siTHuoMxEntAWjvLp8Xeu4DtaKX5o43ECNRRpGkoDEqaLMptWAn7vDTf3phs2eD2uShFQE8",
  "key12": "2ooN5LLusaZ3NG2Hvi3oEZd4pRjajwDbKWZi3gTEGHoo2amnNXsFNJBpoeyHedraqe1s3wxidENzoe3RSXiMm5Vt",
  "key13": "3Ez8HDFu714FMzB5nGLA1m4oC424KAYbWmFjoQdLJCkiXV4U9sznZyNTuQe5pYjRsewDUKBGscwqHbDTpHGHUqfV",
  "key14": "3Uz5n8jNLqB3guKBvY3rEJyfbLcRwK44EBgBve6tZ3P6N5qA8mtmwQHaiZQSSJUsWChwEKsnRDZ9KHZMzbwHLMhs",
  "key15": "4xLqfC8VVXCnUqrPeRjypPJwuzqxE6FEbA7Cxge9niqUtgMAkAbESqdfCiRwahJunPhvZcLVAwv1qsLYKZxoxPQY",
  "key16": "4wkDHvGLTgjqZikpfVhDujKgxZoNEcDEGsUxSJoP3BzjDRj663aBVrWAUsQq3MjFSctx5xUMex1yvYAu9dUr2ycS",
  "key17": "4Ju5AGpZeB7ur9zuMRXT9TAH372X2pphJ7wmJ1pQdJeUfgiZJApH8QgU9LedGaYiCBBww8a2a8fT2dJc3vzzXZx4",
  "key18": "3R6n8Ppaw9PCjvu2e7kfX6SkuBg5WkW3SLycCx3aJH1NHtpLeMZGjtx5QHDnFJHbPDGzCYdGujPG89wb9hrZK4LA",
  "key19": "3BwtLPK2sm4TLQYKpYBv99giBkcWxmDDcGeCjKKSXNj2j84jW9JQyTfB12VU4RHh5jX3xfj8GxfepGEyQgvh9D1",
  "key20": "3tq6rcyjCrBufSqszMKyDHswDN47XYnYREnmfJbCve5zJzWuCoGKYrK8z88LUqUb7QKQq17kdq3TSGP1VdZaPhj1",
  "key21": "5fm6ETcyqG6fQoP1YFbjH4byfmJQVQi5aeP53MbJrFoUFm7KQUDCAuBu79XkuoW1uTMWYCmxt84PSGJsfxNi5ei4",
  "key22": "Dry89qj2ffBBuRxynGq6aA71FY6ZkhrYoSqwVGVjNo4SsZnMohbL8P7CSwnvSYDP3VqexYk93yYzdj8EnC9H9E3",
  "key23": "KrkUkgdagDKYPQbSH7wPwVpx42zmzVw7gZxYHo2C8ohcnvD8nGuuWHR1MzqZrgs3U9tw5h9eSrUpUPGoYZdgQgm",
  "key24": "2vvmVazud7JMZSeYUmVPYasWCv9FtqjjHmuFoi3mWEatEd5K8zhvR198DazMtYXEYpj5EHdi4t71XJWY8XoFPaj5",
  "key25": "voT8GMV78ZCPs6Q8hk5HapLUKY54vfdkGD9aS3oc8XB4WK4pXnMW6dLJiqBae4ZrUs8c5q763HJwUZNfHbHG6Pu",
  "key26": "66Pr4EzjT55h9Pu57gmDeK7tRGM9UFqs1xXQU93U2WrhdjdjVtaFtuqduAbt8RdhTJLxFaMvcTebfKAj568Z6Zrb",
  "key27": "4coyvCHhNgMQ2jTzyTUF5X1THa3HwC8tPg6jDUigRctdTBdDNGxAdf1XaZWvrxNmHtG4Qw6XoLSB73fniyeerXpL"
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
