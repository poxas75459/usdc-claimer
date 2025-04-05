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
    "24FJDbS92MZbZN4pF9fCQFA2ae9ySUdRiSGn4RAqLXFsqck2N6voZuGXoWHddG778tDBmxLEvHEeme5koZiYbaNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gfW4p4zZsSqbrE2h6j4JmH1rnSCdAYqQSkHeKEnWwM4SXWDdaWXEkHXhpEqNBuR5WPXJ8h8iTYg18rowdtpBi7",
  "key1": "2L2ybs3kkGaps9L86fiXkSaX1NFqTHdhFqXqwXNZkZtornyXRhMD4B7HUmb6xc8gt6QDVWknxXjzpAC2pH1t2oKS",
  "key2": "2d2BkxZ9mjrbR7nFGHogWAmApDU7E4vnk1F4dGCmWcdgbwBhc1AtUm5ck9XTFpoYLWQUYMC4jRrZMbjeY2ucN2es",
  "key3": "wMpFNhK5Gg7CrRSuKEB5k3o8eJqqeah9KhFeCPNSxhuReLfB6d6vD6UcSHe5bhmmdjBiBvjB847Hm2dswo9v9dE",
  "key4": "44hXhf8NnM6wBveuTrNdGHXjvZHxgKaFcfc9RPtngqSifrZMKhK9cGAMdoooC9wJFHcqgKWfQeYBFSFHsA1sCpGV",
  "key5": "24Xr8DXDX6s5ZdUBe9PAcHuUBKpQbhffqFeHovfuNgHio8C7pHdjfEV2vnhXQ4QNQXtJQWb47HtUufuEE8ibbqvD",
  "key6": "5Aq3DB9z7Uic3Z9f6YZkK4dYbkDUd6gXv31xx58yU1N83wabSn3GzuKJYUvEkiwQEwvv15Ak61SDRd3drVb92ake",
  "key7": "2iyJ9AG6RkN6rGGiKJzU5yXaFpfnHbBtq2uFz9b8tjhbogh7hLcfccSj1woUBwF4boamL3TvJGJsuTsetuQ4cpTv",
  "key8": "2UaW46yhJ9pU7cK5Yqfibeo9DFdhG3c1M8xp9ZN9um2zS8eatcGpioX2PUqFfU69pbV1tKv9Y3oqrg1AMBsnaExt",
  "key9": "31RCiG3eBZo2dXckUe89tmMen4uwzcaj22gpd143htzLGkg2JTaX3itNBTWg3UrRNv6CDH37BGU6FEakMN7X2mmU",
  "key10": "am2cwvkxFa2wx48FToBeJm9LGWHBmWxrwL4tG1vNeAE1SsXvWmoC1a3yDcjkkUUnx4E2EZhzFUL2qTXc6P7ADnd",
  "key11": "Ggj1uwy3n2XkTwaJqS76NoiZUX7oX5MKLSZwnZE7oEZPTy8MSugAyMQa74yzvj1xRr8bZpp4t8CtKchiDeCo4ev",
  "key12": "4MCvxVrpa28jdiHS3HZU3ZgNkwdEhVettTqq6pAYyApoFt3Loc2bo6utbR7JWkrCNehPSzeFdQMWmm1yin61spii",
  "key13": "2VZJeFiaBARhWjMzQe3Z1PNmD4HEbREEnNjh9uGNN9gPCLpHsBHfJ6kg6QPvTV4zwvgttctYosnpoWgWDcQYMUFZ",
  "key14": "5mwXswbWK6NNzS851tMSErpX39CZ6RuXVqzFGjhfqBhFsbeDrrVVipQGpY1rMGPK2Rnz3dCAP4K4DA4VSPepmQfo",
  "key15": "3D2t3nMnTKvSUeNYW5RWPnCZ7SoYdTG15GSQLH4KqApNdLYbxH26uZxJEW1S2fwPAU9r95m3M7C16BwJ1U8Bxbtj",
  "key16": "5ZwBDctiNfhbWAEqoKNNotwW3vAh1Yd1QuZ8EpbSsh2WixKf8bVn2EMDL2Msi9BuwT2foYgdozDtGVf9HiLvfMUj",
  "key17": "2Y5nbfqfEYmj1dgF7uV1BYyTvLts4D97SJd89PTv6VW7M7XAmgHjRGUiDFPxbgCnVn86DrRtKLWAsHp3noqVyXM9",
  "key18": "3hSw3QoCjML3kUFhrn5cJKhRaNe8vg8gSFtmuZ8aRPtdvFzzV9bf3bphbkCS7oyy71ShYiYZNF9nBUvedRGLMmgY",
  "key19": "31b1YLYghdjR1rnpxbAsehHCi1BXwoqMjx6amYZogzkwewqVDj6Cxbcg1mBJ7Ab8RzqSNfzp6pi35TXHU2r85t65",
  "key20": "4zNa7yRymN7q17VRGhh8ofmszHyPyMa5Z5vyqWRSgqQwbinZKUNcBnqdGd87KFi7XGD2E4SaWqoxcTUGf2KvYxAd",
  "key21": "5xQ1p7nB2SbrrDsBscyKyAWv2nwPAzgRfkb5T7iFPgtq3dWGotgZmo5RwvT1Sz4jYnCa6P6Jc9M4rLjTX27UQJgC",
  "key22": "u29v9pbJ9DMLJe8Rw9Ze9afHDT5FGR7xBwHxxeQ3GCc7Ekfi7a7KjcXxhotrXafijnwEZrbpg8BewJgzB9A1Kbb",
  "key23": "2J6doWTvnyJbXoaDVr6KKkrfnkJmTxU5E782FztAjbzaaYEMokqnibPuiGVCwsnwpyAyeBDsFXGSaeb1ye3dfZLV",
  "key24": "4ohBV9CVPW3LDdpMP5FhkQrJoCvM5vrzC7k3XqcNuPemGWQK6JUWAsdtaFUu7ZMGTAoZmcaJuq1Y9eN2pyF9LxLD",
  "key25": "5yn13zQ5HHn88RsQ7EfVWTgsapNfmCxmp4aYMk7cdr2BnmCf3mPqFUjNhRSRV4nz6s1sEFRdxzVbm9jsSS8Mm8YY",
  "key26": "2mp1fyjqBgRRFT2DxmULvdZtW5585nMeAaF3FagxjfqyY1VmjRmfSLfVtWuwKhLztPY8YPXPRiv8czoVuu18Nyya",
  "key27": "3FNbwcEE1qfnFcZePBAPQpqv3GzP1rzeSvWjAtXU2KdXxpMfxS9HQrf6Vn7QCMmidYCqoUyRrk28yCZVT83DG9GZ",
  "key28": "hCYkfWZPBBGUB98H5UX4LitXbpuLg5HkGhi6V1p6Gbk7mpyXYEq5GVp2x2QPayHKgwaYK8g23Ey1SucFz8k3MjR",
  "key29": "5oU8NteRT7cbaNKPd9Fv3qYZJP81ZoQLLNK1nVTYC7dTeb45sGwJqzXKnCGP8GbzMsJ7oLqm4PhqJh13gkQ3DCUu",
  "key30": "c8QsHQVAhuy27xeZ43CpSoRppigGr4XvvBhuiatqkohNZckVYETutUGnsgNXAo34dtgVd3ZysrJYqs4F6Yn3xPE",
  "key31": "5wqdhzAoW5nFTSLAHhB5mHu2djJ6osp61pe9DdUorQt1mRTXMENQawHzDhSpQb5DoqRKrpVuJhqK5JfeZmzaFM5n",
  "key32": "3WzELEJCs8id48JfxKcaZiZJexEUkMe1SQSy1Y659fMTM6mW4mNu5fRCUM8DGoN7J2j1qSEZxtx6TwKnAjVMzGCQ",
  "key33": "41mKGBGkZYB1cVE7STnJZn9DFrKje25mwxReWc8oZ7HpgL3GbvcgZAY5SHsi3BVtdhvQt3zYYgrVHcnX1WGXkrhA",
  "key34": "3m8Kw1BPUvCvuwY7UhvYiDBzXy2AkArvfqshyDxFtTPKP13QKwsmDNtUintuuphyzUCrDWUkpwnAxYDenMF5mtR8",
  "key35": "5iFLaTVhAYeimcu4vcpG4Gz2DaPayzG39RHofm1ZpoyLW7uSVkEJKt8y5QhQrMiQiHMaUB4ZAJa1e1jU1R46eWpy",
  "key36": "24eiYBYHw3NSAMjXGwCwz5vsqjsGiRZaQ87NVziH8qrkhJMdA2G9R8a3NJYwV5YzrAKEiLrCLcUrqLTGj223ZGKh",
  "key37": "25nSHHpywGAHzxq3HVzeribCLXC1T8bY4F6yzP3KktaJAq5gLjKZE3HNEhgt6725VzdiYpgkKWqo8zwpWgCEFGGP",
  "key38": "4paqpCVHBAugsJwadnr18FQ3vuXbdBcqXsNctDwcUvvKxQAPPft35HHks4zPBkx95Q48Vu3eojyPQRyfaopiMGdd",
  "key39": "4BmnYvPn6qR6jZtWVHp6nKt3ZVwSrrHLE7bJ9f7jnaDud9mdNH9QcYmyVcioRJqKCbjJaq7HAPybuwydsnP9P4Ry"
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
