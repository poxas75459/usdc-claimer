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
    "3KgaRqiedcy8CY9wsx2Y27bP6CnZa4FeNrXcQZMVCwMoro4FjwJAkMsGgvG5r7PVkT1iYAMmLMiVXMAFXXrHn3bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpnYyYKYW6SxnVTZXnuyZYqyVRT9SQqJyZcZSGrjAYJDNjSiA1EbireC64JQe6La6QaCWoCDGyqBkNBdLE7tBCc",
  "key1": "54HoWmtxhCfmhwBzsvz1bU6Xzjukw2nM5ksM6PRcNouLjT2QdxcBZ3JqKqeapgvpacu5NatPkvB7L6Len85dzB5",
  "key2": "SupPTEndj25wkUUZyxxhJ6RXDkVJvJM5Kbog2zD6twwZmZGQfUGowgyBGMjAjCeMgEEFv5ZwTSb8q92Vd1kuWUf",
  "key3": "DgtF4A1Ecpq3BuaByzRrNwbkFqWrhdpmdyosGRPnu25W9f6As7eR75Fywb1Jpo5YJ1wJvkgtYudpt4oDE1yFjEH",
  "key4": "43S2moCH7tcEoC4pPoX6LPpBKNWJCazEqbM6Go5rpnUSdFKoCw2L2P4FEonX3XFgPLZczHKPJpwhhdvScEyuC3fs",
  "key5": "5VZuUroEt84hJ5PiGAT7mVAHvYY6ykbyRWQKQAkr4HuancxDqFWUALxpeqSvE6Yt148nXjjfUw7bCcs2ZK7ppTv6",
  "key6": "RfF2VGA512XwNn2yKE5iC8L8iVUdGiUPdAaMbyEG34JwQk3RJPvihwucBqHg3C5WNpYnqTKES1WZRGDw2apvPdN",
  "key7": "24woivV8SsaWmSnvYeEZn49wGeZ1LXJd5huxZdrEoV2f5dUs4PD8LNhUN2aU2uotSFDHHN2vF8UZSdfjgE3tpX3B",
  "key8": "45pKVY2U1rrQUgTfDHjRHED3k5uQFqo8kxzcww5cshwseDYsmjtSHPDBdVtGnoeBkywSgqGseRUc1UoHsWDyq71o",
  "key9": "5nykZUkSB9xA8hXrdeK7bDtTWp69m41koamDHbcoxttmGdxe62Pzhp6Neq2SvHgw7GFJf3BqXzD4AEHuwxjNVky4",
  "key10": "7pRfUuzBFGvKAU8dxXaJVtBMcQqWXTU1VBDbekQFZcN84fYj5jzs2ACLT9hSAhsbLXYuZwoaowfhTDXHS4jxD8a",
  "key11": "5S68AJudK8h1wobGJae34xbitFq4osFvHFPfXrdeMmJag1jFFm5MTEumi8bXqRTSMfMAWJkLtKTH1wnFVckiMbDG",
  "key12": "3oeEonHA9YHMJtvGYbcJ4agh46UQRTsZ51LKzAhYzeFtQJEWh7K3DKGx4GreJe23HRUT8NXyyWUQkdWmfAhVeta",
  "key13": "3HofeNxW8HDmkwj9zspSe9pohkinttLxcuwUgrHeDhW7TbAdpLHgwo79z31iKhVCGdSEgF8y7Eh5f4cGBM7GB3Cj",
  "key14": "4WgWRoThnQa1pQguzpD9yzF3eHWrehWfQ7YtsoYWkTbMnoDQjJx1VR3FdnE6ypmmcUYTi5xvmaov538LmamUVPmU",
  "key15": "5C2oL2TfHb1NSXRZXn7ixTdWQweukFbVSXEuVtp9SNQoosWPH44hFj3CtqUhu9dNtSSArJfWmGiM8AEYTc9qNVnu",
  "key16": "4LQCsugQ8FRbxdSK12mDnpAYD7V75cShgQDzeT4dG5fgj7CvjGoaPRAEfUAHxCdqe1Z7bJi9Tpor6q2QgLVZJjPh",
  "key17": "295TssuvX1mWAh6ZReh2VucW2hnh5g17VzYoNAebX1X3SQUGUEYQNMeXkWs8bYhaCni13qkrP2vM5x1EDroR3bH7",
  "key18": "8RoMrszFTCwrx9b2ENJvsfm7KxjPeJnojdEf8EhPuPfZuuNgLcYwfK8jXfzQGWN15fpdXfZvSDQpZ62e8mkMQSB",
  "key19": "46dJhgC33gByBPXESGaANCoqAFasNXBn51LCu211f3ehwcwuT9ZeEh3vKx7ZnGPsVWJpzHsdmZEcp6DRm8ESZpxt",
  "key20": "4XsbDhpH4KPUqzhzeG9MrMsrhnzXZU31YYcRVBUz7C63CLh44Ujbmw3PPDe5goRxfuRHkXhREVaNySWm6vAtinL8",
  "key21": "3RoDeNpBAZEMmPaVnfsEDg5bgh3ZmnJ4XWCACR8zvcnUkFhuGfvGaUbyB6v7fcqFCTyRnPvGMrNxVXHdarNwC7Kc",
  "key22": "nyKyy1msBVUF8HNPj9UDxKwYfzcrQWmVFnMu7pQbQx6jKBws9W6zCe23EZ7CoYSwCb2BVj3s9YGBbPxutzUvFaL",
  "key23": "5GBZDESAAS7DGJkaNYiw8t7M8Kt8k7fYvDQgTwaCdNJNGVVc7BJJixtDwTryBcwqpdnVKp1maYE9MtPJViTNnds9",
  "key24": "rA3htbjWzicynpzydfk4zHhj97JPfQ6nFxgyVdD5T7ZnPvYoZvrQZkjPbNZ9mkGGb3WXvfC4E4dw8WNxwgrPX5t",
  "key25": "ez3CLU7kdt6DssDsQZ9DY98xdhG2DMnfvJtnMhYniUA3HgGg856MPd3biSDsfewhUVKqjiHqed2sJUGcY3xrcSt",
  "key26": "4nMjs7SjCnThk9i3hjj49qrr1f3cs74WvwTDBJieENop2LcS2LvxzU3dP5NizHcWJufVGZsjGhjKRpad8YhPTi7U",
  "key27": "5Z5E5eM7w7yocMfYXa6WmvvCmNoEFHPn8stW2YpL9fDMRzaynUkVZAxMhYm3p4tcFdkGGAW1Szy7eJvABsCuFLBV",
  "key28": "55V1QvASR1goszcs1eyX7QTxMfvyGnnFfbsC2Q6hK88bXzxUbktHqfzhrQyXozapnXr8Gxezz1MXFrW5muP1R2Uf",
  "key29": "5HCECohdcJViMwPEVNLNvPNvK3TAQKNaC4V2HYqJKXyjNbnz2xYGCT7E9qQ4G1Eba51SDVSgXxvfvtjyDkh2Xdgd",
  "key30": "4bVMKGV9tj3uBq4EU8yGVGgYJv5mVQBeL7BTRJqdLLsHborcjtk78dbjHpz4QrmSN9pAyZ9EksttT8GnJ7Tn4jSz",
  "key31": "4edaiWYr6gDdZ3kwCNEMUa19gJHeegknubrjUrrESdUAh1UjycxfFmpVZsYD65wfoMm5rsQrCxCsBUQ8tPTbhH9N",
  "key32": "AwuB4XkG9EkhbMS6PAczKC52up2Zdaxx2mUszTLsjna7crrVvxQpkssvQeYvkxkV2fjqkBeZ3m3NKhQyR4n3e1q",
  "key33": "3KnntoPLXZ7mTDN6UB2NsbzyYHFLXR5xMymtrMmXg9gmebdmL9VE7dxqLcXW5u8wpFVTBdjFeaNEsEPkLVX7jcmg",
  "key34": "DjTDsaGLSLHK1Cc21JeFkTZY9VBiKuH8tzoZv9FCdXSybAPdjqboShV1FpiN3KpAEL2mdDrPVUGLAWEWL77RLzc",
  "key35": "4o3UtZxZFGeokSq5CPWokgSK25rKYgmqeuQfqNxJcitymsWxrVzHtVhzfdmCMKErNWZ8ycP5NDMfDvBqQmUg9vJQ",
  "key36": "3ChvGL6W5PoSMWJHWEw8NXLkQPJW3pJMy1hNuFjnBdwHsaPeKUaP7P4t2WDDc7sq5EQYyxTJUgyj5G5VYPgjE4zd",
  "key37": "sGPJKfPkdj3o2hrXwwbDFyHPTreDcTA2nZgXiqy95sJi79YiUUY8di5cv2YRi1aL5rUVpXnfsVh1AqJ3X5zX5oH",
  "key38": "zXmiRZxGoKALNiw6rg24Marb3jF8yde7iPMts1hpzS49Qnkvo76AsTSFoMMwK68p5f4DCKfVjKmtwZELNJbfreC",
  "key39": "4EXdMVYsqnm8L3mU2iZZ1UFEv65Fccy8KEA3fEHaGNAEkJamXLyacMY8rYTXTKFuyXvTUEcEeXE6gBk6F8s1MWQf",
  "key40": "7e4Va7Uvuceq9CQkBAraLRDcPsUotUai2XP4VsDPQzo1vVSpcMc1VYckRSweCerFtjoZK8y1xwGQeg2uW38ciKJ"
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
