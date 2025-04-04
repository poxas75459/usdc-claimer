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
    "3rCqLxtVVDT1eZpM4u2NcCuhf5MQMtrbGcto4g46w5m75n5FPswL9Fvx7jnWjYjK7AUamLGja6tm6JwPQPEVFD8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJBykHMg6o4VjQM3tALA6usd4YvjvbftdccRq3UN8FMfo5pMLWA4Dd6L2uTsAHLX7ss4K1qFi8iveC61K6RS6es",
  "key1": "rdLYEH5LtQPg5xnqaPSCvHYPCmhrHTgDFSjx461Muuv4Q5jQ6nb75mDYqAGYA19GgC5WiyjvB8Lt63YRTAS2wYp",
  "key2": "GBiWoLF7rgYbjRMpjgmH27BFsXpaX3S27iqPSRiKYABF6RBtsPtDXuqe4P5jraXCdZQiM4BdAbV5grZv8Ba4tqD",
  "key3": "2NwkPAp7CL6cSaJ3h4d1uUJZoGitNUHXw7zERZ47ErVPMq37JDCk15Mz7xysV6F1EV3jMZDRJnFb9QXR9MK4b4RA",
  "key4": "51fQfUdZdj7fJjXLQpEZmDTuWWmeourZNUrzZSFtuTqKkXZVaGYAj2jn488SpbtBNMyWxTUynKbpbJbbTaAo94hy",
  "key5": "4ku7e4ZWwTtFoKrkfhT3giYZbx7YcLyHBTK88SBMVtkAMQDGStJdhtUrtuGBgodJo5ZRvm2TmZUENUn2dtPanr5u",
  "key6": "QW2kwrDbGXbGGpj3HgMA5yMrLrPLQHUFQHTv2hkpkqAtKZ2PtQXeT1FnmFdnJErx398XeHjCzYcFETsdBq1g116",
  "key7": "osYKvVQcWX48LQMREff1LSi3H3B57maF113z33xJUQ1PchtYi9prPo4iWsbnKbHuGWqYXkivnTRrwtgFH4hK6NZ",
  "key8": "4y7b4UMB1QynBE1mm4Wuhnu2N3cVPGmgLKHvUpvFW65Z2T1aWpFRtoWB9jJysusndUTPyUDL9peVtYKdeGeJg1jd",
  "key9": "5Ty5WqLa9kyprdBrCLCHWcYTV4rFVMb5AP3LpxtByhxbHiJWfwp1wSVs8EP1xTi1BjL6EfENrn8VAYmY21Zfp17r",
  "key10": "5PksKduNqpH1hUB437GiTY7WHHiy5pQjJhudpoAr1LnQYeeCQnzWjQxjnMFG1q9eZ2v2ebZDzTVDTdfvRqV5skSh",
  "key11": "5Y3YWTxmi3Q8Z31bqUQ6iK8iUG7qW6GK9cL1A2e8ieeAcfjjGXVJFCSV2wmSLPUVPcrog9ZSQ1XyyJSDeeyQwCKv",
  "key12": "6e6dpH9QCpLM1thLA5mvfKb1PjgLZhCDGeuxkofrvhjxwjCD8hDC6ZvD7tdf9916QEftVnYoiVnoLEDJvCLBadn",
  "key13": "439mE4py4mbHiuTaQ32zutYvmvoMMK5eg2LZjM7p7kKLRkcvecUnxT4Egshg4K9whjgAzhj7my3QMD4ASHQ75ubd",
  "key14": "4e6SPQMiGcih3Ev8ko6FtShoPJhTMjVj2HXoyi1tmSpbcUe4nfgt9RF6PmW892prLsXEZi9q1tJgm47jmyGNoSfc",
  "key15": "Jy6f12SjpJh48FXUHrzow3wadYFfoQeNgGwd6RRPmfXzEThbFmjfVi2rbfzKmfB7AAQwdH5hmoLNhtwfG7zAwwP",
  "key16": "3D4UnMjNiFzNLmB6jzqndvfcGbZJ5tRqzKNmLYq2dr3RGWxVDRJaU9j8nqKbaQ11M5rNeRPk11KXfUXzjvrEufid",
  "key17": "3pyH8ZC7fvbKTs83uW1774QsfQ7hAUbMhv9yZ7u81KNbWvzMb9L7XZPwXqDR3JHmAAcW3ZRDoV5xUf5vJKKRoAXi",
  "key18": "4WEfhVXsQh3Zb9m5GD6eXfycAdtKUy5pe6oa8tuhWQ96JTjabYDcruTWmMGZSKpPqiY5dqrFdWsA114qkvdnmsBy",
  "key19": "51VYkCqd6sqfvYBbzdVu9WALqzwwAqDDN9ofsQxLCQajy2zpRsBRN7xb2oX8rYBYZApMcm7AvdzkBEczMZ68E7mp",
  "key20": "4gr8u9iH4ZJfzGCejmZ2XcQX8dpKJ3LRo1P4Uk9kYbRNoruoxD9q8PnwPfyEkvUwYgeFSZS2ESERBurKyurpBmRP",
  "key21": "4y19PKLyGoaRsyCkUtkRRQaywrTgGzQrAKy34V1X1KW8HxuNoxNksUd5XvN8NzqSrdLXT6DpTkoQsgNoGRLt4JxX",
  "key22": "2G2ySeXHw1RTotaReMwkzUtYmrM6QKYcc9PgPBp1LjvW9M5yqVunGPVfEMHzVqYKK38Efo4AZS9mmbbeTGAviHY4",
  "key23": "3Ch9jyMS52fHmibYeMYij1GG1xiSDPKxh2FQWjtkwNoqCUwA6mXAehJUnfR5VU5DgWUJkzfXkyXWenirZSLPnWmF",
  "key24": "JsgYfMZTz9pi9vUhHJSugFrZg8fzHeQ5KKCPZH3pEWH3nUzP3FfLkfShqkHtRFgfAUGxm4NisKBUcCvcaYGYhtx",
  "key25": "479Af6HJoh4KdSUkF6eVUsVHZrbNz2N1nun2B8kfVBSbNoVpCnXwt5L7oKzuFm3zQHT47jnYBmqupncgjRY4SKQj",
  "key26": "33vx5TEWSPwJoNQ8mdhqA3iEWTwqfYzr3Cg9zsTz6zCvUerEwzyBvVnmZHJaRNPpp5XHuEyNFo43gFNWmq8A7TER",
  "key27": "24iuNX5Dkotj5yRBQk4C6edg4pK6VNpLK8DSrS8EDkNAB57tLcovG2kYP4ZkZ5PQieSkYYoygcgB1JEJTAPBTfVx",
  "key28": "4VURpboFY48sDKzzXiEWZHohJC5r39sA6tTioTj649f89EJP14Rr8etzCd5iPsJZg3a4zXmUTeMEt3hntry3BPwJ",
  "key29": "66ESHEYUj9Xidbn3KmaCZCbBKQP261owq3NMqbPrzSK6CTnDv9YKtspV3Zus7aaQ3gKcr2oWss4DnhGpt8RjAJ8Y",
  "key30": "dkfDMPLPWcwboTLh7zxK8GRKTkkAsnAj3R8u3WoGZFMhNHzyraqwPkWSiZ6ECr9pzg8BSHHTL2nJ9WWMdQiANj1",
  "key31": "321EfsvAL92oZ8Xt8qvRKjNmB8LU4YgNyecUq6wTDTpsU6sg6RvXYba4ponvGhZrWe8uuRcGbiaThrxbVHfZUgW6",
  "key32": "3J7keN48yuFHEMSTKLWxqMgj2Y5g3CU2fNbbzZm9EGUv92dwaPoacA4UmppD5S8TJnhfLjsdTG35gAfuf6SuZj6Y",
  "key33": "3kdV6jixjfcrw9yozCnWoQhbn6cyCapPSLQVVw3fLMBQu6jhwcVP9piTfZuHEgKhPjeXLSRpTLio2zKGKYvQYtJj",
  "key34": "2QDXR2eYdjf5WsuRS6b2nJMLz3zh9N4VVY8yxnRgmz1ii7vow8F7ktpsmKtstiCL2bc6yTN2Ed8n6MHM9B9YreqF",
  "key35": "2NEoJa7hU6uSDCjPxwbG6k7ZWQabLHw3vEZjwcLBNQ5Q7sGR1Jf54W9ZN9RrFezv9CA1aRzFYaukFqYHQ9HLnsex",
  "key36": "4YR44mYpKyjgyx3rmK8XErPit7zzXnG2x8nvNt3KLqZtZaDSFidxJz99Z4Rsg9kYBA7xHc2gBMwey9Eas5Rey7uL",
  "key37": "zsc2DDE9kGqzXLsqyj7mfSeVZy3Ro8uRSwZRxksEZTJLDxoXMmUZD8mj6YkHGTrSH6TKk5WAoC9b8HmbuQe15F5",
  "key38": "41qsrtSzrrJCzn8TcLFiYu6AxQZPvpNqxZhFvxrroZqMGLwq7CycfDkqxgbhP5uG4nXmCz1hhGHa2uh61eLvxrxy",
  "key39": "aQfPE5XgSvWPygqrxZsZvfeiRgBzteyuuCKLbXxa4Yrjxi6LEDS8e7soELNUqCnP469LixkiVySV72kkf6GbScY",
  "key40": "5JZG1Qp6q8i3xciQMQauEXCfGidgX7SuM4uUzwDDDXVFAwqfDAVxX8Lf5mRSrivJkwNBr7eErq9jH73PPUxbjHzf",
  "key41": "4t2CDMqtpqqBfftTPt1mCku9PMNwvNj3jCeWhrET97bjcskAPLpBkqXgWtGFJuHwmY5v37NiFjjEgGencQkDaTn9",
  "key42": "2kjJh2BiLPLJYqEjq5LrrwZpH7fR7hJY7pLH1o5jr87PbTHmyskSCUYmobGbSPjuDfx2dU2CYR6ovpsvYZpjijY7",
  "key43": "AvngBUriHKG3AfcBkcRPGiLoGnKfaVchkUyUCitSvcAT6L3fnSbZys6EeWtMWt913vqockF6WsocAuwuCcqrp9X",
  "key44": "4mDGn4xZfFmnPnFrdVGcCGWr4adZqgqrbJaMgME1zJFQ69eTNTTnTpHdSEJH8YzcVcFRcLYtzhXw74zZC2u5P8o5",
  "key45": "53oxrT791uwKZaUrimizApg1a6Sq1UUXZxkHzgVBbi6AmzRsdFbweVfYenCPL6VoecF2kyynAon8TYcqd3ZS3ToW"
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
