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
    "CtyJcPkAWQoYU8ccnhMdbQXUWpLHghGtdYGyEMVzAj4V2zX7htAh379MN2e9J4xbvaa5uTdo2DPdepYjJS6AUhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKjUYHFfEtyrcHEsn9QBgDc7ZAYr9ScJLoRoKkB3XiNFd2myTQRbLvwFBZBL4ZPsTA3dnBTtm6piokq5uoPFZ64",
  "key1": "2ZKjp7mvgRjHVTDZyXDQG14o3QfecUUW3KKnQFVfhGBY8B2qqpktsc5zvbq9s9SBJ5841MVxDMpWsEz5dgXcFqw1",
  "key2": "2beLPYKwwdxdRrv6ApDkqbXxf3vAd4bmSPPk6rNBQ3sojSp4emji7amwnMcxW78BGsZT2zfBT3CqdXqeu1gHWd4X",
  "key3": "3YTgWA4oaiWE6R9ptXT65m8BCT4org785VNxHtVMEZeoiZ7djsoRkNsHnhJjWsB4Do4q4nQcSAcYbP5sESkiDp4n",
  "key4": "3VNDojmytA3gtck6DGMnpoqCkEVEhgjmjt36cxabyE3PNyYLH1sQNtsKh5fzoE1oUpYtRC4G4NVHUfeZppBsTC6c",
  "key5": "4mv7evhFiMRU9gRdi1Jj7uakRQTV2df4kiqQtjWsesa5Vur5zPeDTVpp4xPQ6e4rQ5vxBVsdytusG4tkcMq2cqxc",
  "key6": "4Na1rsLozXeNn2tTJrdvGvpVzutgDo7QDVcJCQKvSxAZQDxwPaLo9aBWBoesoxciKRq6QqHdKtveGyEwCpkjSdHT",
  "key7": "4ya8zmqszDQ3zFZAX1U89W5sYmjXd3rJPx3aXLrMt8i2a4tfJ8ghPWasU6SBbYND44SmDyuW3icEsLuoPrmHpRND",
  "key8": "3GU6dAraYb3GWHdNyVUew89zdzcHdaPsY7gZPEWfWBKJTaxY89uPsK5UXp5cVooxVkNGVgGtdXQsqcQTqhMmavwt",
  "key9": "3RBg5QLgBYFLDaBoEA8hAAtqjFXgS49iaPysbFRWBas2r7PykFkwTfYuYebb3cCwraLXHDz4nbunDDxSA33FD6VU",
  "key10": "3D8HkhroXbmSHNHkz6mG4vy84kfq2M9BKUeaveHttqmJeZwThuS2LrZLEEEmGSg2618GchezsC7WpVm8RrR2a1D2",
  "key11": "3nicuVfc77smxt5wT1L2rH7EH2aYJJTZekAbM9AKv5wsiWyh6Lps5BdmMhPhStTDrHy6Y1HeSvbRMhN29uEh5R8h",
  "key12": "2vx4jzRdZZtqUsdvAhhUzPCyCW7MCnNFdcfj6ub8MJ1hg3ZSTS345gtChaUeiH9VKvwB49PHgsDxHvjAqjW4M6Zj",
  "key13": "3Vb4u6nuqcdDdfzpr9DCZBFMGwkewkLAANNrQ7qxLhHYeuYBmq9bwrVMPgur3sYMaCmQXQSwZinAzAwbddbJj1Rv",
  "key14": "5G2uS22hL72AgvJPPnhYTBLa8vmC52exCgs8xbZaeMbtBMGFBh8VJxn3yEa33Vnovi5VqxjnutZexH8LjMX4CBmt",
  "key15": "5WUUyUttTtQLKm9KRemNA8BnicY5KF4fXkvrE3C22gQ663dZP7Z8rPS21c6VMQNj9jVNiDapmCHK7oFbngdvQCc9",
  "key16": "53urriE2fcHHBxPzq8AyfmBNC1gVRWJgZSUR5K9NxmgbLeFakSMTEwoaBKxf526DXLVVXHieipHb6Brj9cXYnUCE",
  "key17": "3SWmL8JPzL3XoEtN5UEcZDryDirrrwTKP4eN2crd5CEKAdDNGS3Q4KRBBX7hhcy1vsL6qj4WRL8J7RS8nxxRYNFy",
  "key18": "3Nq424hJsXfGjgqsHVjAmbtgQFfQaUULXEoLp8tnC1EpwCRqZWkMGKMKDbwytM6qeYYFTAahGqHXyhLkJdytpX32",
  "key19": "3HEEQZY9ftypfcfeQ46wRYLXjDYQAeGkQVxHChh1AiwNNUw38vN3bzHb3U2ZRQYxJfcMwTrgDc7ExU4daBsVbJae",
  "key20": "5ngGwDREJD4s1ks2gG4P1ynytbytWg9s2xuvLtNEeaSNap6ayRZ5w8FcdAuXQPgWgQ129tSeTzwSD4qMm5woPm9w",
  "key21": "4VFxLfboFSxEr4nxZqnneSNnxYGa7CaFUaZB8NuF5UFac3ZGRpHaofGEh2C8tDJ5VEaEb8DqviHiZ8BmrdSJNBbn",
  "key22": "4NRhyW7dq1W7mzeFNUtrMinT3Ej6NJTKfgtT3b2HRP2ZoNaRduPvnqpMUqtGF5up1EvcVuH3zv9qGp77eTSr2rJp",
  "key23": "3t1cymMrGxxNgnCptMKU1H7JYLsVe7Zi6uZBwsMkY9kQGiBdHDWHpGBHtv25HeAd4w78UmoZab64SKkHE6dx8i1J",
  "key24": "3EaNsE5TmaTYeMCQRwcqKjcwRDnHYeDQawSeRYqdhgvgyGb2w6yh4AT8yFYcvmzcBtPDYZmfovhHF1KYX7WMbLo3",
  "key25": "T7vfx1YmBEgUFjA5z4udXPjyU5q3xHcjNY8Ghi1raHxauk8LgaoeT1oHDJy4gztc1u1w4jBH9oFghDRFMSjWjrP",
  "key26": "A7MXuKp2QAWRgc2GiDPb7Qkhy1ma1kGLqr5kQa5k5m8FJKk9RW5L7wryLLMS2LZKRB783N8ybp7pu94aqKtX4Zy",
  "key27": "55pya6AqS8qSMV4yS5dEbwKDQnM54gNfg14AqtLZCxAbokBhafZMUFonbHTNtioCa3yZDfHPxr1HXzB9MvjTvw9g",
  "key28": "4cZD5q7cqdYot9K8qnGqPtTFgAkwvCVmGZtFrCEk6LdGhuNJaFrfb7PPsEi7jtD3raxRWC4Gs9751a71uy8zT2Pg",
  "key29": "59YJoh83jEjfwkwwFQR3LPUhDktgkF2zmNTgA5ec1SvbXWDhED4eCrewip3kKmRoCMsJy3YHtWo4komdVLpwwaKT",
  "key30": "55kgpxbg69UhrFMgKA4Zt8V8KTF1uPQknJyGKDAnfaMwR9zX6Av7Uh3xouvtu2TEy9wNWTPAjX3KvbkJfYgJvt2e",
  "key31": "5gn5MrZSKS9qGSrQXw8HWUsZVgVLinEQpB4y1qKmC2ufbbY8kXwGSN91rdw8Y9pG5jmzDkxBR7jk8ZY48D4AqVM7",
  "key32": "3SakS6QyzGuYbTdjXCnTBvrSHDMY2Ep6jnrAon6u34wBHanK8BanafeH2t3rJ9MKnbohHeDJqb3tgbb4GkZzFSc8",
  "key33": "qb4vJuFiCBEQ5r8THTfrXMHfJhdijwWs9J9cjJKUN8LJaYpwrejqdUent1srwsNgRnkyogRXvj5KSmzaS7tLJSi",
  "key34": "26ckvDS1uMVrDuQo4pvP1uGQ3xiESkJT1TYka5mCxvRkkGPsQ1rc4W421baduCyrpk2Gfwy5DkAEEG9DgNnmyHX9",
  "key35": "3d2ZLf6yPc5g1U7t14xrYtd7XRY3B5ghTwiotjH7wQ2iSjv8L3qzmqrtXnWEfKLVtnbuwrBrPTg9zNFW8a4aMudL",
  "key36": "3uaEZA2H2BMwFmGYJ7Cqs8HUPaBW17GR8hEHtKBRUeanA89DhCv42kNUuw3HQ83nJbEhzZaPFKCCTRmGgtxRowcg",
  "key37": "5Kr2CYQ4GhxpXr23sf6BaYC2CgUZP3WRVr8nxpNuegqfFXyg8DNngFzCDnCfEZY3sEE9hzxaJPZWMyhVFbcC4Krf",
  "key38": "4PuaCXGCmHGoWWw9tQdRurKRrb97miQUfiP28qin6q3KJ2no15JRSKewKywoPJnyTQVC2xKoa6YSPNBJieCrEmaB",
  "key39": "4Ub1tXQGitd7AdvCXZ6LyesJTFBsbu64UmGwNpWoRLyEKUdCiGqSoj3SMtsGHSNUKHaQatTP1KZR6DtLkcu67p36"
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
