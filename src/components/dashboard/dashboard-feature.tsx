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
    "Q6KF5ChfbL4z4META23jArETbJgQuCYbEjdtnvkSf4N34xvRy8GrMaWqiM8U1e82zNJWd6b8zoh8FtTBr42cAra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YqGWrt7xxZCmz3qN7gdvAzRSqx9yjwroGoRDo2XCKGwYg3otRCdoptTf2UQgX2KZVWu8Pkq1pE4eLBsQz45wewp",
  "key1": "JkTVSBaWHqTa5cDukxhqYGuwXtDUpEr9gtaDkYMGjPkZi9zCWbD7PkUVF6Ef7aorq32TtQGK2bMyYFpLky2wiiR",
  "key2": "4LiuyWatTBbT9Wdr8WyuKktogbGgrieb2FX3RE2pTiLi7HNcpaiXAR8EtigtpVKumreEBkqzn2HEStKB7LvGY849",
  "key3": "2Z4tRw1nWdSUZKKQ7vFfzFLzSZHEU6eQPu4Wj8tceHTBQSd3pnsuj1SgnwREd2CY6WrfVa36sEw6QawamjYHR8gc",
  "key4": "5ncTM4xFyqKX9tTKYRC1XDzo16M5A9jJ7iLqmrFKoRQYSYzSCbVjQBZWnZaoNS3URE4EaRWxu1TuBEEFKducFDkJ",
  "key5": "2EAGbMUg3U2dJ7ZE5NrMdpAGqtm4gnxfw7jkqjVpZrWA9yfgoozPfzsfQKmZhtxhuvfkgdfcjzfpLfEKyHxVpv62",
  "key6": "2qQaW9GG1QJ9RqSpYjzsyTnMZrGUdg9igmZTh64wVd12nvRqpzubwgvHmUXnCFbffEuf1PvsKDfL5Cw1nW2nff8",
  "key7": "4fu4E69jX24HvP8qMieVxsPCZqRkWYD15eZJevXvxUviqN2RisTEtdm87WGqWoyL6aExj6B1Dsdx4TxHa7u4PJmJ",
  "key8": "4vN6BcpoTUG8edBoNTw39G4gA1gFpswdAJcshpVf3Cw1ZiBdDxfRpnaYU7MaAkuKN9vimCNin5mLEjx6g7UFYHUj",
  "key9": "YurddremCx8ccQDSzMbuu2oH9TaQQZUuwYMcN8ywwTfyTPYfb5cWse3Ktg5Ws7shTSraC2niburnm5CZhZ3zxQ5",
  "key10": "2ZRFaZwdW2ZbTyzF1FDAh17o8LAMNMDRD2pcnUH1BR8Xtp6MGhxc8zZD4VSvUYtc7HxaDaSkB33Psm4zwdAEKCq5",
  "key11": "61nouGtjVNaDTDQ5aU7DaaQnFAZG4ahLUZZ2GvsG4K42kwCMsU4rijvev38guD6GENbnGPGYEYsVWdidJwnxDMGH",
  "key12": "2eJm8eHNsM2hzEA659ifi6T7ccdFhuGGT8bnnLHXd5YkbMYeSfdx9TM5jwhekDnsUpjuCYK3o3rGLVZWRASwdhui",
  "key13": "3auVY5UoBKiL8YfChddxboGxDZR2Y4UPbZVQxAZZQHvmm7MtVJ8ogTfNcnPAALBxYUuDijgiVx8MNNw5KDao9un3",
  "key14": "5uqy7i1p8gCeukpSGaNkfZRvgpUfAQ5jTCERhHLKXu3cvSVhCC6Fp43y8j53SeM3c6VzNH3v7yPD3q9ZWQ3PWLRx",
  "key15": "2hMCXjDoqXpdd2FUEzk3EkmeCSnFjFwyroaMQMZ9hsX33pBEPrK9nJFCxnWTK9JzfqqyZFyucFxPw96Uj8iTiKrb",
  "key16": "3emAm8rY2m1ejz1wpb8n5c6BRaeVCbjg4582AYAukJYAsi1PpyokLHePYRZRojCm5dWY3ZKKWLCa5mFP4wzegtBe",
  "key17": "3TGScJWQ9jzFAsuzmA1XcQjNziyG94XSdxfKxnMnjBgbEexxonyJXH4UDk3BZ2xg54j2sCnmHuG1w52Bk43q7GUG",
  "key18": "4E6RbS3TpgtpNMYHbDNfrtENENu84uGQF7Y4yYAhXYmdqBQLmsPJkJVcQ7y8n6GmaEYs2JfRXRZGqgKPjTz9iMYC",
  "key19": "3v9mP3C22mfk2uK48JYHBQvzSW1xNZYvTVuN9FJmgPd7wbnb3wi3qiRpDCFwFcJKNF4zJ8AGUnsh6C9pUojmXFvn",
  "key20": "dnr4C4yzXhr4CoJGBgVCknZwApqf8XA443pQxQLhoqAYhrS2aPkPhYapA8wwgfzPfLaskphiu3igPdNjCHYfYZ2",
  "key21": "4sJHqm1XQALHEQRhe2iEXhpFFGHjZhMy1iewm7s7yW28y8VTTdUB8A9RGDyEd164drViUt3heSeXu5tyiC4HVuGG",
  "key22": "Woui12J3zyavKjfEo8zRZPQ9QVHd6NGzLsnYcvsB47Sp7RLu4YVnJ8Dem4kdxkgcM4anYWyAXc1Lf7Yjygm2925",
  "key23": "2kyfGcpDKabLeKS9v9kJupz2EkwhJ8Q8VfwF1etUHvbs7AS5ifYeef76i9Tb6nLRDtFT55ernpRsKyecBi8VX2ue",
  "key24": "svgZhqUm8uMHDSDGHy2AYD5RXeDZUjc9euyquErXrFkBaH1jkHCtTyKXCrK49THVob11nTcYCRDUWk1zUHvZfV1",
  "key25": "26v89dxme68VxX1zeEmVLxdw2qWpsn3rWHZmTEj5jE2DLfStPcsGHW5dhtnm1WtHcpd3PqvLkvMX3nkRZRqQGGSR",
  "key26": "Zrp1zTVTsvaWhnjtRcvbz2WJveqKtrHt12GeUQnKkg24Y2U5tSsF91GpsMPhPdPNXoAceAhsaTDuKZQxHVrKnkf",
  "key27": "3r6aHBoSTHwP61StfCRME8J7CWvo7AJo2icqWEeMMnN6uTe4TSrDbdVkH6DdybBLqd1fjaMt5dYps5JNjs7tf9jN",
  "key28": "3zTDYqMHHgtMVhewYduP1N7YjzdfQSE9DFCQ1E1H4SPEhr3Mdswy9SL9wnWEgph4g2KGNWwsLik4ecGVPxCThKe5",
  "key29": "2a6LJqos4WU39iR5qT428JryxyEdHx75rBW7eXKDt4kigVaFbvL8V2KWexYGbK5Mx6hgD7H9kufrxbArYU1EuvFN",
  "key30": "3i6Nm1rcPvzK6U7MPxtwJ3JUuW9MsfSyBmQck93ato3MznQhqziZigRAwzW7axCS5gdT8TkmEkAePPX9GkHsFG19",
  "key31": "5tscFtWuXi2JEoZtzVyqBupeCMEekYZf66RpW9PWoupQ5vuwhAi7tZAQuhrNmfg327vb6zNatEZqxeZCAtp9ryku",
  "key32": "3bQL7HRUzFYoR8iuTp7jNKecqcmLMhm2caB9JeBinHTndSbatFvFX5k7tmsiJeVbjnST27ZNsWHuQLE2JvHsz5jG",
  "key33": "2CZZtUwJy48cTWYmHpC3dXf6izcBcCE3R3VpRo2JuQ4k1F6rtktzPSLWfNpve1hhintpDWv1W7aXwrdz2SZnkT5G",
  "key34": "4jVdh6yGVJKpHX2GKQYtTxihJGTHrgGXkjqisSLsfQJQL6dM5oCPZVPwGeYxnQmwYHb2vPbCr1wmEiDaEg3ttjFo",
  "key35": "2mFXSUzeY3pMhhS39rrauthXGSUukujS9KmyayfMkbe5kh3QeDpHLy2Gg4euD1sQJt5He72dRHV5bd5f9MFpH2CP",
  "key36": "54bqVzpaKaMTarH6Zy2WYmkHFdFjE6de5PjxJyAJrdWDFuTSARWMehfh7SQL2Vxnn3tTA3VkG7yWJ9sHxNUFSEB4",
  "key37": "3oueuPFKVFnGWEjb7GEpcFVYE8JBYNj6BCqy8sSUK9uZMN3kauWSWQ8SXQwtAnzBaEUWW6SQwL7JrhnAKsmphmbV"
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
