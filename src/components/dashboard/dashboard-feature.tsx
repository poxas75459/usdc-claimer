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
    "4TNwp5e1BSK7f8hGBPWbnKBb3HVUujjdXixTBNceFNU9jJUgf75EjVUgoQxQgQyXQr9UmFeTHUxGLQHm6mEqFmgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtBGEy7hdi6EaH8SrxHiac2ePaRjfGUnBuvFn7pugVv5Jye1fa7uBafpF51RBUAXD5Ac8oZGLFTifrGzstFd5n7",
  "key1": "4Emcn1J6eyyPpBHU8jbTTGDCqnY86SJYJGcfkJkoGGH19gR65Xkd878ec6osXwcvg8vLm34RtL3xL2daKcfN4uTA",
  "key2": "3PpKvmZmA9SZpqnvdsy8vg3hMpSU7i5Dn7Fq3zLE8mtUQ6UeJmupkzuTysoaX3DPXbf8MSBGkUXBvb1e1SpafnjA",
  "key3": "5DH5ELyns77JJuoTJtpeaW9Rskbi6jfwGNa9AxoC8f673Kty7VojBfnBA1mJGDKi4iXfmqBNpebzFhxBC5t3GYpe",
  "key4": "4nJo2od92N6V6qCBiKjFL2W6dQcfiURr3kKeRjaQAHEeuuXd37TbcxMGkeG4dRSFwPp8or47kQL7HJxnPPDZrKqQ",
  "key5": "5C6fpuKivKVEGvPeHMn3CBMDZSkoi6qZPGvxNiZChNgyYqXhmgQZ38zEPGAeJzzP5vA3uvJ1YRnk1meQoaQmDh8d",
  "key6": "2rGM8p4fQHTGgmHeudQZkArrTZ19f9ibrbC2QYbUq1E89fYmhEuiP8Uj6Q5YUksqK39fa74F6ei6UR7gJhvrZCjz",
  "key7": "CsCPYdq8nMYAwfQQYWjo6G7Q9BAgZ1Ljo75SJrRfBZDMFpsK3nyw4vJJNaJDdnBxDQ7craBPNhuyDLGTa8UrZ8G",
  "key8": "4482evBcxFRfAyCo9Zmcn92hcPHeVynFaEBhx2uwqgZqeNBddDNewDMYwV6pEJvV7zocjZQnH9mYePs22wYwki41",
  "key9": "2MTKGwaWuzSfj4V3kYFV2V5cWN771EQyoYnFGTUjsA9vStqDYdTeDE88C336NefUdj9WWD6ZPSeo13z6DpkgZKZu",
  "key10": "TTk12yneZBtySGB8L3Mtn2kwEEM8YhfysumBG1xEiN4GgCQmmTshDkHu3HraCMfQPDKknTLvW5te9BSPtDbXTdr",
  "key11": "3Lc4tz5i33UCZG4ssEsRQr4FMCgS5sAS5nb6HhE1uNJ9wPpFd7gpdGCmZe6TA1P4mGvZtWTaZj77iYkngPKSZZac",
  "key12": "fB9DY2UEbs4eimh7d6LwARoupMcVDEFABvDJjEK5YAs5ycN2BUnZ2JjWVMioyztRWRHR5S9EzbksU2fkFqxqQUA",
  "key13": "GTDqRhNr6ZaVQKYkkQxoExuzj2wWFi1keRGDmMhVjXMQ2jkaUZJkbzpxNJRGK9SkDEwFsMaE2mzb5nwRdbYfsBk",
  "key14": "4STdy1hPRMkw5cZYopKtH65mWFKkt96brCLj63zujZqXeb4PKBcD6Qb4x3RAZ4iFQkY37MfALwr2Em2h67FCggB2",
  "key15": "5pKQkw8cxhVKDUEKh4XpkUvohTHnJhcvQ1o3eYHPTLbAHd41e2Q1G1bWVBpZT6pd2R9RuRdTyzWrD2R4V7h5p2wt",
  "key16": "5NNJ4vAb2F4cbBN59nBdeoNPC99fVUtV4LGVQ8RbZCFQXhyNKDfgshKq6fGapwzbsVn53FVjttPpXuicV3diubPS",
  "key17": "oDkNJk1gLcEVd9vf1VyCD24VN8NKBNqzXL9vmbA3zUeFaGpRLMjsUkH2q2VZtfGLxKc4orRMPLkNMaDyRULn8AT",
  "key18": "27GTKGUWgrz9oWXz9eCR12BU6YjongKEixKG43P8yg2hEyBC4j54iKTk82ikuM1XMFx8RDKogchycHS9J811KHVb",
  "key19": "2UGdTtgkazrhu67KmrkoiQ5MozqhhuosENr8Zy8HQZw24hvwbGpvM6FN1wG6gh9x3xf9w6XR2UpkEo1xVZwmNcNo",
  "key20": "21Y2trjFwuTWLm7bWKgZzzWJZSsdfP8mgDQCbc1Dw4MYP86dPB2gfagYzveBWPDV27dGivrhHkK3tMDBW61jXAZm",
  "key21": "2YyTRhacnUz4rwzyzRJMnB5a21EYh2LuTu24g74Dg6whmpXk928tjHznCJANM5imGVgEuTm8QLe1xaDxkovyH5zM",
  "key22": "ZZNvTYhTN2ewZ4k8aHyUqAMYns8SjZgH4ehsAikdAtfaqfnYVxnNoW4yfLQHwds74ST4B5bh61z5vmpJKapj1cp",
  "key23": "5jbwTmnVbesMFBYN7uFJfRJqkw2VDhTFsTisrSh5MN3UXSyqRDuBXoLowA974qUHpsDkoFvP35e5oe3dSELYvVqc",
  "key24": "21uyJ6reHFBZSSqbZZD4HFwTvN4QrsxSJ3Ws8jLbbHGg99MvU38eipktsHs5q8v6cE4uyMhk4mEjowiw1b8Jv9Ro",
  "key25": "ka42DMTXHqB7WfTJv6AhPwg1qvwU7ex16C5RPmspKjckUJRtNycGDESA25wMFGWhaudtEt3nMLFoFpjw1W4pgMK",
  "key26": "4PwgyBL8uTKV8EH7QFtq3mL2aHW2EWEsb7taxW1bAhK6oiuaVWsNd6V9usLbeXgp9rzQJZdKMn4MVt82mMi3nThq",
  "key27": "XDu7uV96M6scmvXz8R7xBdn6Mne7fUxpnRtFUg9bAhCMjcj6B84q862nkumAQVamnLQzWVeqNksC9FAarHKX8oV",
  "key28": "5MnnyoLCPfRScEfcpFRJUT1PsV5bhghuSxZ3cDBocSwW1BzRHSQ46uMVkpmy2fFhR8paaWemrU9maL5DKAox8wEg",
  "key29": "4AZQrHbA2yLonXE7ao8QeqZYHRp73DcT4tUADWkBYZrjs8pB1UxrrePqUGB4ZSYUuAvkuudEuhixkja69w8uHr2k",
  "key30": "2UGsML3nenh1EFse2Qee8bPK7R7tNUwVZn6awWQGqJ6fT7Aa2N95e7WGR7ZdGGK1HdhkTNQE1GY8gTnRqdt1eVgk",
  "key31": "5N473aeWsUptPuCTiLJJ5Udri84dFy8v78gcti9Yjkq2q1BbnMLBkPUVFiJBS9S9d9jbYJdCV5Ru6mM4EZ61NPkz",
  "key32": "3HJA1h8z758QLWM1HsprNGcDj5PYxU1va7GAFtYSQBcZi917DT4YmhFSP445eBP7mfYAoyK736onj9edi8LsNhuN",
  "key33": "4pNJwEwrzXivc7v4Dst5C2d1JGxoVsNRvbahiC6RCEbW4HkUnKttX8f6ZmeEXVBGgaVYb98abH8rg32gC4DnQr2t",
  "key34": "5ZjMCZT333TqSZm2Ts9uWRG3z38S4C3fpsfZJBQ7rA3hD99qSQ3a2WD1RUYfz4LiNnbVDrFdRtqDegxsifvTBPJt",
  "key35": "218KuLMBgYmXPg5yZBGpHnqRyhjBKErc1M3Rpexqwk5L7LJkVkrpZ1Ak9ZRYn6J4rLUzHoWc7hgw716uM7sN4dja",
  "key36": "5fEWXjJUNiXL82GX1fdQTWu7CX7BHVwpeqfiPJhAWbBPopxgwGtXVRFfE7o7KCnyakbmtEbWEFgpRaBaCJ4dswQt",
  "key37": "5fTKyGw5z5fbkeYaaukTTpt8u24U5Ww98ukeRNGXRtR2U6w2xBGxKbhskqX6yYFH319ubAyqnpuGsqGYyFvDDfAo",
  "key38": "2UeEosuY1DXBj95V9f9CyCmqhKzg9khjiujod6i6VCToHC6gLVEocTiz9JUUqktYE1bfZdsE5P4gx9JyVQu1Pqef",
  "key39": "3QFWUC3QhfCsYGnhUQMzM9CWozeadEcbHyPKMHF9GuJwRo8hFZVqT7C8nju4cLVNjuibgWT2cEEKZ7N81bvvp6qk",
  "key40": "sbvTTizirynyVf7adxvoCC46s6s55Ka6eTKDJoLGt9eqU3kcU6idwL4xe3k1SnaDouezkvCVh2Fsq4nkKvexrfD",
  "key41": "4daGMvrVoVwLygZP28Qpiez6GNDkuuKYj39xizkRA3VpcDgoo6ahXvEd9FVYubJ68DYPy9z6dnLuTTrywzNBG7iY",
  "key42": "5DybJ9QKEohycG6hvaGoAkZnrzeQzCuB9Es6wxT2BiUpoY4QbVaNzStp4SbxrBFxvywqmqyXKG7L6UDwJEpsupPd",
  "key43": "3G1A6M5LxF2GsWzH3HNnYk6ERYMzjwbWhb1a7APF5oMPgigoZeZoV8qatj2ATSowrH1ynu8xSaiyBdMRFz1TmCxj"
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
