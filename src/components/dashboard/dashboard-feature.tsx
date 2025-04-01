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
    "sgG5eejBmEq3Nwbt15sbKdmKTpTP8LxH6uoCLfNNxrqDR1mpmfmydkLb7YFBRLpxj7t9Derfc8cgGtcTxkGwq8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Qbovfoizg6jU4Zq2YpUdom7Hu5RPbVLhLGtdQFiHsDiaDNKrG4EhFF7LEXQpidtxSvPbdyR5SXgHKRdu5xKMVu",
  "key1": "2S1Lq79PSixGnEudkXuS1z3FQLyQiH7ZqnQ9VNx5BuqqQ7Md5TyKB5mKkT7km6BHAjWXT7WHwLR9pvpVcGajPzqq",
  "key2": "2GQQ1WL1Sq5ssoCUV94pzZS8HgPjMiKcmB6cNwdW7i8duCibcRSfjkMafveJHtc8Qi2BBk1my1A4RtFaR7arbSdr",
  "key3": "n6bHrLtWJ3mBGxoknP1gAg1BZ8BuKeGKKYZHpTdfdMnY5rq5MDhpWYCsJyiLzmFFjbJ2hjruswLvgGWasT3m1bN",
  "key4": "svHQ8FahEn5Fhp6HXYGYtzCMxanJgcEByuKesxBKW2AHi7briAyaEWbzGDmXHojNPMQeh7FZsBixdQYQUfURgN9",
  "key5": "5U2LZarGGS81DuGvphzb6VKajeYCqGqvrfArmnFMY7qHkD2fEBK3itgcU3bnQfuc8sj56CUBP8ded2fhWSrqVcVf",
  "key6": "614SWGHUdn1Bu8V1H19LJdWVCe1RKPVDswbms8QQsWy7benpbaNNe1i3QD25HQT5o4wiJNBKHHfBHkbkxjRNb4dy",
  "key7": "5p9PNNeBodBCVYX9gq258TsLFDHg6hTS5Cc4yUwnQjQ3GthVdfazXspXiE6mCn6x1dtKrtidYWZvpipqUaeZVdFA",
  "key8": "47FdsZu1U1NTVoXtfjc8cGXsT4GA1rJoHYvwRCcxN5UndJSPxJiwWooR3fJafPpZ57g63P9aAVH3QpdxiciM2Pnu",
  "key9": "4Mi7jcCvA462H9jsTbz9Xsy8yFGpWFu5p3KESozznfJLbae8nfpLQixbTQsS1kzvpWry1wVKz4eDy9dz58sysmZf",
  "key10": "s13it6GjsFGUvTLvszsmEaabYB2cyW1EeTZLpUDkb7gfQQo9wizeUMH8YRjGeMKPEw7huB55gL9TVeq918wcBai",
  "key11": "38N4gDs9VTmiSsgTQPAqotqrt1PnSZ6vBSZ3NBtqyYRhBdjs5uEnY3FKnm4eHHNhNM7K5rby34VfADrSxPcoL1Yb",
  "key12": "2JeRpd3kxagX9HxuAQgU5YaXVmkneZyxjR7wueZcm3mCTCyfgMt2KFJH43tdXJpGcYhrwg1wcDUyRFf3y8n8FYyL",
  "key13": "uALPbBPR8BA3xqZXeS8vtK3p9UMcsgy9y3K1tnhKiAS4zLULQgu8U7K2Wvx1CfALbJw8CQ5iK3RTRCxjhTvKkrD",
  "key14": "9uvMhRr5i76fvtYXPEvqg1pNU9LyApToFpbfFvgGmerVdrYm532nKcMzmGa9RNm9UKkHE8rFJHzuHyU9CcEotJw",
  "key15": "zX3c8BRYoRpq5XyUBC3Y9LqAwR1maCSMQE1X1y1RQkiLj5Ew9PirY8iYYexrkS81uQxKiVjYNDEwY5wBSjsk49s",
  "key16": "4umGpK1wyYmygxjVmYCJDmiCxph5SvEo6RQ2WayJmh8eJCs7o4mygErA1njijoYtx7DyvmEfiCTmQDqcMyM123xG",
  "key17": "252R9c5jjnCGLcPEE6jXYBSz2MWcNrUETijtNxETs2Zyom7UipM9bz6NAbZPg6s9JT32ev5opFqcrKKfGJGRXhSu",
  "key18": "4E8z6wkSKw2jmtHwgWXGPwLjZQE8VWkJS6emQyRBEEfScuvs12Z3U9v5okUdGPSur7UnjtFa5dJTrs1Shm7h1Zog",
  "key19": "4xdRd2PgcLhGNTiGeKDzZGg53noKkTEE5ohqPMjVBnueSd5TSJbUTuy31Zp2BFHrVaqpPXjUD9AGgS9uUL3zuhKC",
  "key20": "2eG8Dx8mELq9FHi3Tj2Ybj1HDP2eXhp14jnZq4pfK9i2NvWFZNkbo5ZL1pK1nL6i3y9w9Lh4nUTYUH7JvRJUzhYX",
  "key21": "nKu9ZtVNc7ecYFXDnR7K47TUBc3GVgJicQpteS9b2A1FefDkpXKWEG3jWffCXQFeqoXXRcZqFV8FMeFtTqeTdTE",
  "key22": "bEJ46mrmDjnfJnxzFMHfKzH1UW47MdyFvJ7KJjcxiMBzfj62617TSzwRGEkdUvcFzhpo2WsxCUXEQRCw4pxhSAH",
  "key23": "4bM2q6icUtrEXc4xEZjnq4rejrX5dorTL7PNYgrsxfAxCT4DxCkYcPedS19mu6FWqZPrifY5d8S5w7m33ZxwSbKt",
  "key24": "5QaS2wGKxJei83tvLW22E3Pr5ahXvjZgCojxzGufaVZFnVyUWhPweYKkbxYHxSFbZT9UTz1bd29y2gQtf3oQzbXP",
  "key25": "2R8Wf8gxTWR1F1bZYTu8fEAGdBAsJjfH9PiNe8paEe76n8eJdRtjHgAQE1hsjaL6G6QkfKy1jwzdA3WfahXfCAy3",
  "key26": "28qXcFQnh5ioWgQTqC3Ga6nHidZCKvBejLmUvhoGe5Zf2aE4eCyGgr4FZ7LJmizM2gxN9wgnn4HNjaGYkp2jxQHM",
  "key27": "4yXGq4i32avKMfUNby76MznAgWBXgd6EnRrm8EC6vZQ3UzJ3MGjept5gpFdRMQUxAn26QKX3UwycHisrytB4kNu1",
  "key28": "532a99yVTxSJqD8HG1mvPLV7AD51oYyDiNUixczCongsLgxmnEE6x1D3JHDCnzHjXgVoafJCKJkxBK9SKCYzNpnK",
  "key29": "4HJUYGakBvTdSkAdyLFbnH6Ce511F9E1gXEqvbucfKZqLyj9Y5WrFi9yqCx1kq8ALyxULKo3uXmPRBq3gLcwMnuM",
  "key30": "2N1KJcX8nr5XDePY5FcyHnoG42ys1xDBAbYvmLy7ec1MG4kSAtD3Vq9wksWS9Z5UpaZwURcm4XdxNyN5bJETMYsr",
  "key31": "2ST4W4XxbCyQFH2rMkNvmfJPosYT4VNkPJc1Ub5Zg5w2ivFjWz54ZE8LekSQnPPtV17mx7CiGh1B8MiUBUY57KDN",
  "key32": "27QZxKNhxtLM2HzNMKcKg2PKfoenwGx9SudQ11AmbibBb4E6V5RZxPZabK71jsUUUENtw9FaV5cfBrZG3QeabNA5",
  "key33": "3h9mzfPdWKENnFGEncRaigSGdz4tjndd5St2qPk6DRzgnnjZwDq9Gcszvt1fQ5WdjfeVVwqzQUb5PPRkr1MczEih",
  "key34": "3R3vEvRhKo9JUfuNzrVZmRPFk94dqHaZXTfQZSWGNdtyJLwpxwL4b5cGRNMWnZT1FJmziVf1dAA2xeVEcm6xW2o3",
  "key35": "59GAAA8E5hHfN6LeMamgPe5CgL5bLayU6PA5k5Msj6bSWTvYdQFW1Lh9wvfpCMSWspAssLepfZmWUvUjnu7eN4T",
  "key36": "5xp8f33uxoTPoUPHsQBPkLbJUHacprNvGza3hezmWgDis4uLEoAvUAVzvfh8brLn3PWgQhW9NSuQsJZoncuPRSLh",
  "key37": "4ZVzcDvqSUbBYcVPjRc33yEsjv5pzQ6DLoB6Vfdwzmf4U5EAReceXrNbGKRNe3RZ6e4ub3n58H8saY94zo9gmrC2",
  "key38": "3Pwseb3zypGn5vz92XoTqrm28dpLtTp5ns3xguPht97RtAZxf8rjZxdL5cnda7G5aA39yDBvJ7uYHAYAdk2zSPqB",
  "key39": "4JCk3Xwpd1PvmXHG3YGjLrqYuzhFfv7nkfxzexXsxVwPixt9XM49sfrwZqwM6WoC7s3oZ9VQp1RnZP5aAUbybugo",
  "key40": "CzCPwSNFG9J3jNSrmKYoLQgKxFz7in4aqTE7MsctJS6PVKdW4PUFCGZ6spRT8Zn6vFohmtzCuMQHHCTcj21e3KC",
  "key41": "3ubyqgaLRbsmeK4rdoXzACP33FegfmbF7LW7xD4VE83tkftj3x8fj5mTwnt5mAEKiAzueNGjSHAeiJM2mZTnGswL",
  "key42": "5mWPzTLjy3VcYtUVGcDX8Maq7EXC3cyiwHV1Ed7e8fRLxwCxG9orGGCek1UCVLggVNbkS4hGD9asWEkSo95RnyEu",
  "key43": "sjmkkH45CnMzLXvoNzA5t6VRb79oedK6DMQ9eDnReGmB9mi4qK28KRKuuh9XKupHeJS5m6ANcFnx2FQPujSkyWY",
  "key44": "52nV69ze7r3vAyfSxay7pVGPixRJuoYfyCwHCz616JXodUttFvyKz49yXNzZprg9P1ZUKfYsHNNhi2o5nsCp86q1",
  "key45": "5TGG8s8CFgmzhkix5Sa4u5xxg18kWS1W7asYuJpXa9Fv1v9GD35Rpti2Lj3mMZcCk7qnXnzeH549nBaGhXDTtRJ1",
  "key46": "BVxbknW9jPVbjKNzxJrtHAa7qAgENWQzwAtCx7bMYWsYo2P19SnkiQitwTkR3vStpMJYUaUissfdrbaxmAjvZVe",
  "key47": "3hwHNnHVhvmcxKaMijWnBpVywrxRFw88Do7QkUDtU15EX9G1ygsb1xmAmZDffY6ohHuMcC6azNGRyUN4tiVqtY5z",
  "key48": "mBng38tidp47aMr1S91nsoXueZxMYneFnDwSSc1syPLAo41EJTJy3hkNNK9p4sJkjYornWTMt8FxTYubP1fDznu",
  "key49": "2FAZk4ejEgoydHjuZFGb14EU6ubpA17A7idsDV2uHA1H6dLRKPgXLGXwHoYtx8u11wdWcW9HsWBeFiLQ4hYzEbNz"
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
