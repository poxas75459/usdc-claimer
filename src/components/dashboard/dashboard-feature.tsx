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
    "5A82WfG45RhycuqZQQcbTDJ8L66R9J1dTdaLHG42zb6gJxTq4yoGe2zq9N4xTiXwMfmsJJVakDG9nz4aWxXaaHUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHw8GSkJBduhViaKxUUtj27jgXPpubCF4pG91hQCHaf9GbtXJ3aMe3Cqqy4hqQDr2YA2gMf72aXNbdTrAXi6Fdk",
  "key1": "4CniHEvt7ZnfTaJNYcpi7oJNd6BWd19zn6B4Uynezmp7Qf3Tnaa8awyRVraQ5S35vbFtiKuShkHjLCbyqSqwsk8F",
  "key2": "4pX4fvBr44mMVbe1TrCSBYtwbYQvNvAob2mAJykVYosbedbXuukVJWDLRYMmPa12wnrySV6kyHX88cGg64XGtLZx",
  "key3": "29vvyWke7Q5EcYWv225PHabh5aTwyBSS9hgNQPJ5nVXXEfTcYFtB2X668dwKmvwunLAdBxW4Z5gYZJPeFTR625P8",
  "key4": "5gMqDjnkmuuZJBietG8QxkbSFbDbj9LMrgTznMD3JTWeSeK6hRSqMSu7iEP1MMAiVgcZ5fM99pu1CAi16qSJtJJd",
  "key5": "4aAwZawJcN6uSMydzXtYEGagRjcRtsaVGPdNDp5itoPNPsN2PxYqzsx3F8ScJqrtEWF47oSrCVmekVcYF7VnM2Wq",
  "key6": "V9nLgy21w33dq8zRCzMQk5a5yrykyqMmjymFJKc2wj41S3qQ5fVu1ag4ttzAN7G9nirbXe942W8NQUhukNFQaHL",
  "key7": "65De6XU9JM5kyppYwjV8G8g1BnXNxyA4FSvEu4GTx9Rm88t9AwqiAyaW8WxHrdUc2AmK74ciZ1FXCLiz1AV6hwSB",
  "key8": "axRMq29dMEGLdjyNXramTpoh5bDQVDPjFSGUiKEVa4u6MUMsJH4UEjn1RF7dCNnTAJBCMcpknYVqTjubxMJQpvu",
  "key9": "4c3J1F1jhm7timeAtEgd1VtdUz2SwDWdJehztdCNPU191h4ztPqdTKBEwgjRGNiqixYQqqzi8TssTxiDsMk6Re9D",
  "key10": "4N62jPnfYHvMSEY11mnreTiDzaT5dArVqeLtQVVjvFYJBCsN5v3EUW6vGrCFYMPG2esDSFyD2XULBpduxNActHLW",
  "key11": "4pKzap1LXFrY6HRGGjxDQ6VJov4aUN852KA81UtJMmWPg1WWPJaABMhRjgfaNWjvgiXkWcrtENTFrJa8tLyzLo9f",
  "key12": "2YSV8raxHSHmPGj3emkkrFVPngzL6nHHWZkTmgDCpCxWnx5spoNEsNZyQ8xB3zuHwwAhvHmCvrKYmiefMLqsi2uF",
  "key13": "3y68iRRwsQLsYQpKf7LwQZEsqJwungqQAzYK6oB4gYDCJD4Lx2kr1FDH9EWqpsXa2mzhCX3R7XaVLaknFkLdNm6X",
  "key14": "3o2cJNBmwpbpKnt8RYTB9qw8FCnt8Y2iG3KUo242v97pKf2fjxJ6PLMJibY2XUtVjryiLZnoSPPaCqW7ApahGvgM",
  "key15": "4ofsXTrBz1FKApBg9VVMZBQ7Y5uFH6ECUx76agAoMXgaEbcNVXY63wVSzuW7EnZiZbmbWAFNdDuB4EuuSELLoxqh",
  "key16": "2kFT72qE13PJYjNkejQUziVU7mHHcgT9b1YdaPvWDdsEaMuLWAS9oxxYaDsbscsXJW2G6ETAs9iFxrgYA8AswbDF",
  "key17": "3eP6eBtSAofFSNsnnj9Kfir5kM9KPniCt5ARnWuStstnbWqo9yGWozcZabLdC3MCfukw9jSqfS3tPBJGBDA458By",
  "key18": "mMvDgYD1aG2Ub1o9FJWmiXRpexteq7EBMPnDaEPKvX3FvzCayrz5M6zYVpdtHjT4AbZ9qWpqBzEJiEFACWFBoiC",
  "key19": "5MauUMVHKp6sHh1YeqYvpZsoSVfnhK9okC3Du85SnK3zQgJWVa5eYAHQozU3UZtw27guuA3hBEbEgeEaHKHSzST9",
  "key20": "4Hht5e5SBc3ZcwP1NeisDmT73zgZzavCH2ok3NYAA6m6upfzBvjoBkYKv1fTDVzhSVbqtRPB3yNmruyyjYmiZYGb",
  "key21": "2U1jp1yL75WVpZG8C7NPuiGLZKtXCmUKQdjxe2C4bW3rLb7sEwoKHARRK1FMsB58FVdajqSfrbt9C5R3xxgnVkSJ",
  "key22": "2TtS11jnPLd4N6UQjGAVhiUrwTuNkwHUxHQnRDgQwwjbwstENGq5jaBuG3KNke6RpqK3YjqVxhgpgqeTuPX4PBqf",
  "key23": "4VE3UJzReK6KLQaUqRGhJgKRK5m1w4TK8q4ThyUXZdHjuXfScE6DQDH929SSTx4NccGFhFVjannFZDJ2AYXitmbY",
  "key24": "51UZvVbu5U59EP2K5XFrEbcUptjZw6uBrECRpiFxvaRnY4uKCr3aLeb1ESArHMxSwzxqJPk1exccuzV4DSerm1P7",
  "key25": "3vt4CcvF5brUYxSn6mM36rAiUsrnAe7N55Lf3tHCcStSrJBaJewXt4khNiQtFFGAaeextgKS5hgjvHLi62UQBF9Y",
  "key26": "59D86WC1gXWgjftRJ82LFTJUaLYzzEq9mYvxvNJuyoEtJxLtoYqnDC2MH5DWQkVW3Uu1bqAmhkPmrWdSJUyumuDm",
  "key27": "2dCMnu1iLG9tDNoXyXsiKq58f9SR4exnurbygSfxGzjMp5GmsTRytuNAGa7AtjMAagcwLcYcXNBtXqXNVexCz9TZ",
  "key28": "4oHP5MEPcsoRKWuG5ugymhNgNx1S3zXz3i4k1VKLZp6gtEYyHp4npgm8s2reJmBtr3p439j3YpDncNBc6dM8u9ye",
  "key29": "5igLqmAKwbBSBTCQLXhhJeSMUddFp1weWJvK65KrNtW53aatzY7A5nNoxk3gyekLTHQ4Q5dCf1wtXJq9GTowpYMr",
  "key30": "iQnyMmmQmkJk5f3rgexLq3CpyHrrwdVTGxrs8Rst5s3H9rZ7QsCfEN1XMtzSxfNAerspW3nUvPmVdhVVQdeVXJB",
  "key31": "4w29WVEmDnTatcDVeBFo41zKPYEkdt8TJSfpBGRbKi3evDVVGkjPwviAXCLv4iRc5WJGgrg9YrgUxh7VnUTk2BUs",
  "key32": "45sLJ7HWtWbD4Gn2eKYAK877DyV9E6HY86Fuia2yEmdeeKsbUt8UtuU9MA4y2NZCsizCKasnja2Y7i81uYgEGb8r",
  "key33": "4NS9Uc4QtWyzEv9h2Xf3gPpJSKk2scyxfUkPos6Gk75GyahKv4V6TDJjYsLkgXF9SE4FxJfdKQWTkvUw1m96PH5o",
  "key34": "61fzunxoKM9YuwaUt7XZoxyHGGBqFBFc8cner35bTeEEvJ7chf7TdVZQ9u3PvDTMBRALVND1uvHAh2HDmhL5FBKU",
  "key35": "3ePQjKgDaQp5HnUQCTF4aRQEa4KHGpEreYnkzvu39FEhhFrBR75W87iS2E7yBgKF4PgG1WtgjFCx9CYghcBk3hNn",
  "key36": "3Fo5DoSwEpy1yPw6rnkYDysvTdw7BVanaTz1GUazEKZZSLWiGCdUDgbrhx3797zjmNvGiJF1VPAmv9HoVswMZH3v",
  "key37": "3jLwe7j6rfE8qym85spM8jGsoMzJxQ8x4guyJqezvUUA4PabFNihNyhMBKubYXzQKoRwqMupXRDxiSu3WcCCWzQF",
  "key38": "53d8AnYhwWu7QXywj6bMJ12d5F1yc2bvCuRA99nruErfMVnng3BjnXhTPGW76bU4gKa3QkiKBBiutyE4TiwcGUZG",
  "key39": "5cJNYFHe5Uyiwd875xmPyvnVUe4XknZf3Qxg8SiJAPLG2yJqDqKRAemA5onXrUnWWxdFiy8YoYjXjSzmJ5Udse1J",
  "key40": "3tSGm7WCW86FJwiimwqhpP7kiK9DEJJA9LsMoMDDDRmai4LJZ4FEpAmR1BRyRsEpmoSrdQZ15tPw9ytkY1FiHWzt",
  "key41": "2fAmZTTwoLgTNNdBEvAw6dFnY7gEZCD6aZaian2vvwcNm5iCUaHU6TSuMrDx8QfpfPNJnn5QjkDKWou1uPvERTA5"
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
