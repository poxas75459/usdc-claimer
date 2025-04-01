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
    "3gdxBJwbaYxnTMdgzJxqRMqM8tq8ETyksTHNHnktMwCvtEXQsWXfWGtts3VRLuxsM96TucaS2yjV8KHmv8r2mrKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HX7GNg8iHkssiS7S2n6wHTSBC35sGeArEvcXJb1WXPhyu6Z45582PixbjtMVZdvfPkoQeE6xQoiqMuXjLirPmU",
  "key1": "3jRj51dZWasDrYi5ZPUbsyA2vMm8urBXAVjHqJT3ZEUvZhoiG1TRVYYWHXyeR8juXrxppgaTzViqjxgmvBxnCWte",
  "key2": "2TAZpBN3Vq675b6KfR3MPf4SRfHc34X8kRuPvcVNHVGa4hUniUJeXCeHEvVFBuK18YYr4FNmuFrKGMmRBFvTC93M",
  "key3": "n8e337CTnzsJJFHfjuY86YmtyozmCGGHNUKc9w2aXJ7jDEtkpfEyp5yRK6BHsjY8iaBPRSeD67bF2b4YnmzdbSX",
  "key4": "2tn7PchP3b3Apfqks2uHT4W7uxvtDmMv9Aax5ynKzCHVi2LgopXAE1igVD54EjrQV9sbNsRuZwrzCoiRbnarh29M",
  "key5": "5MAo7NWQ4YkQgt75Pptq5fryBJDC9pwg4QLjzkJ5LeCr22q89VUfBXkBL7S9bQF1MogtjJavyFC2WfbTuq2ezVKF",
  "key6": "5WqbFTgsa6oqaebLPuxoQHvBrt7QQqW8eA6MeAj37odj4iLzGTK24TrBqpZT1H6raHWELJyvkE6izRxREYM9MPEh",
  "key7": "5G9wPhpN7FYWSh5iNbFBQxekHGNPnfT95qaSuv3eF7VvyqrvuPRvZszkZiMwvU1Nd4K5fQFJN7MfmJG15qHU3DAK",
  "key8": "5TuDKxFXZ85sG5ZRqteXwZDyRfYhF5b48d3qXdbU2zetmBLo3hHMs2xCEwyWqi1X4rY69Mbq98btCUVqfCJaxopg",
  "key9": "4nEUNtToaX9oTLwY8ttgpnewYCTymdaFEnWAwKoV9TEHPcPXcCaNQtzMtg81sMfU4zehFV9Js6ticmJa83sdr1nR",
  "key10": "BYZqGjnptqRJbip2Ehyw9ovLBB6iswGmtJnTmBvTmuhPTaVauX1Pj4Tjk3i6MjbsSTk1UJmmxwbKftwpgTfgWtS",
  "key11": "3WuebAAEkuVeVR7eMo1QTaxMSyj6aNuEdAmbsnzSEz3nW5cnQwTFVv1keSQD9Jzyxe52d7aJDLUsazpn6LbK6Wyi",
  "key12": "5hyG6oVvSoYXciV4nBh864tiAdbn2sEeKkNcYhbTqkG6ZfSeHHqtbfcsUjDD3jyNRTo43wndbGHUNsFRmCuak32u",
  "key13": "2BSFPNq3JDXETYvmLtrd7dCzg4rbkbGsZyF4py3sFGyB3LM81GnzrrNg6wW4NB7CwXkPiBMFALgRtrygWHqxbjDj",
  "key14": "5mJFqAkvnBNX327EyjEsqn98YMvKZXxNnRjktWZiwdN4fKi66HpgBNeC4GuNqdvaaRa7S93xpTBFQztxJ2Keq5Hn",
  "key15": "2ANxHNz1zLMxKvnzaYcoVz6akUZYwxqtmbziuUDbENTQpq6xXFjkm67Ma6me2FuTJ4RMw68yX5duaHEH5s6aJzQ4",
  "key16": "123m8kaz4nP1VuqL7Panh7iff6DR8BUb3vKryEYiGEA4UwhXvgQfgscVBLNZfwXYqtxwuD35gq1XZkXtMKZgndo8",
  "key17": "4YzkEgCXH71YDt57r2hZ8pmjRannMJeLX8uLngAiKSj6tMJwqm92QznRCVp3JtTZmTSGnLZdgh1aMGfFAXvv3jTL",
  "key18": "4fnGm7UdE1uorPFYCA56G2CW6uiRSowGwJFQG7AkNXtyS17BnbQLiSFyvuCMQzUuaLwXg1CguZVkrpLi3ErAUHG8",
  "key19": "4MiMZXrLd9Sue8EMx8RD2VxCKnQEJgderPkkYqK391NPTLjMQgYikiQgUUtwQqxetYLF5UrCQegpeGxD9t1byZS5",
  "key20": "4ZpCzyvAiYNapxPL9AF1sphwysZgDobzowYRi9dBafiPZ7bHXzueRzRJeUYPfEESFkbgZPYxrtSppeT8hNj348VY",
  "key21": "3mZxjnSPsrkdnsRG9MQ7ykybo6LpXriUfVsAvqvwtor4gkHfgbXxYrHSEpJRurkeC9SJKW96TUjfr8s7DzdJZkDS",
  "key22": "5k7PJ4uMAiyTs6aM9C8amxxQMTsQDns2Q3xNcLSqkF2EWHsx5bFzGDShHMkvRPdtPHoc4T3rVsruBy1BVCVocPNX",
  "key23": "47i66F1VcwmBcdYjZUGsCvwhxkQud5dWPiRMb4jEUqiFqKY8MrUvugiLSeqUBR7JdX7k1MsxR2owdsiwSNVLQnXG",
  "key24": "ci1cnUHGx6q2ruoxrCZABGKC2RbT7Zwx5h2wi7bxqkzwGxv9devdSbswwTKhovcVEx4Coi6R33Uuy1bEbN6w1zX",
  "key25": "2rppznfywBviPmzqi92GZFgQRRgATRXnZgKeweJLdn8whELB6SFuWDpncjEJccgCwfDRx7dkjcv9w8YhGmpBqFag",
  "key26": "sK2u2q4wGY6AoxN8iB9Cjhzyrcz87QBEzzHiDBcYXXujs59ZGMpCgzz293AhF3mGYKAuhs7c7Cp57tdGj6TTFyy",
  "key27": "4294urYgXaXKAQjzA3TBGZWJYZ9o7FEz9vR1U8BCMBQZyTAPUtjdvcKUydRAFSF4ijxbULgjaUF1Ly4TxxGajJ8v",
  "key28": "63exfvL9XTBGjNwsgyf4jgSZt8jsZThCikY9ffyoHZGKmD7mMQr1DhJNGafGDH2P4ydhXSAKk6ED3jqdZuJbUwPX",
  "key29": "22FN3LGH9RWfcWNW4wBq3ZwLVwQQhUKhfta3bTSYkLTzwF4RJsPXaeykLma1eBwTsuhprhJFWqxXp45z4wGKy71w",
  "key30": "2r8NXhPd6fZFxPEXCVRAuUC53uS3AzBFqrJq8pRkdZNetRb1vJXTECi1JbamXxYrF8R6WSpvDLM1pTyYtZhcfjiY",
  "key31": "4QQQhvWm3f3EVZFYPpZrb8NYB9SagRAZ8zkiVa6hDtaHpf1hq18vZJtB75w896kcPe1F5fCxXp55Eq4H3xqF6Cgg",
  "key32": "66mSESAsxJasXVQXNWoZ61FQ96YNG1UBSB8UGBBDGiqja4YE2r9qEKj7sjGF4aYwdQrbprsEG4MEApL9d78Rkhau",
  "key33": "61TjteZebeNsEVyCH9i4RA8K7kXnqJPyVzvwGGSQQFGiZhnQS67oobADAaWgxnC1f6NTSq36WLCy2BUrGR6LWYrY",
  "key34": "mqewLiQKFVq1R18r8YUzktZXpnPPK7QsZwi5Ap2D7oSRHFnDm9RMAYwHZe71x6CrkQpVr9JKxBpDNtBcR6tDnGY",
  "key35": "21Fa4FBmihsVKbvrjHRnrhaak5jn824WcZHarF6LPUHF5U1Zq3KScCSmFqBpd6jcGzNz2noKiNeGSQapLrKUApEY",
  "key36": "2Q18Qaszrjo6EEEHGD2wyWe51n1ovT3pwbDJnvUgskFzxLJBo2J15HuLZTQkJS226f2UV9XQSwef8EkhVsbAJ6qB",
  "key37": "ZmhcYnS2FYow8jqrtYukdiw9Nkgiv3Qh6BTDxRUCNVJYjrKpBWJPhG8zi1yoaw55vtAqbCL2Xpbw5hA7VEivzeD",
  "key38": "3kUA7pnxHQ28TgT9tJGP6h6ZYnsiYotJqaQdTVx88ABb4cKUQoRDH5y5tgAdkVSLDYxB2YdN2DRggu6k2YU3HJGM",
  "key39": "3kiWojY11hte1XhtfMaprYZxkV9wSnDXKpy3vCG6DGzUgXG6PpEUeDroJzAtpowAHGmoA9ReiVQCBhVbDS7oMqad",
  "key40": "4piEjN4VgaPCnwkBhEGySkVvXPyiY51pyzw9Yo4AyLpQWibsmrH8jnTTMtzTZcEjauqKKNJq8FzahnBoTMXMznZs",
  "key41": "4YkX7xW9t4G1oEdb3Cj38YrKRcYUkiRAAt7Rw4H1cKFakyQGL4qY96BY3iPzC7RdGavAozLdMaZRppz9GjkVyRLz",
  "key42": "5M9n4VSGnjSHp3zYYasxSQL44Kn2HuatiZwCJ9dXCwhUKgFKoaostVKLp2iVFdr8rStHLiHeZH8bLsbrXwFU8Bob",
  "key43": "2En9hoD4t2XfAXaLvxA2SYzhrmn1btv5rLN8qWgW6QGMKZ5LdwTgLAwn9j1EHEFwQKKatFrBMNSopY8oQuRTiXfp",
  "key44": "3SUJ3UBAV5KihzZ9zNafhv3G4ndgPVusWF67oXi8i393HbCPQSZCwTsDgLu3Q3t9faKiwNcSJBxFYkpnFDpp2Zhd",
  "key45": "4SG5hjNiaiLEwDiZy1KRH5fXatDwvwa1XMj21enc1g3HEgqCfCWVgkFgSXLegSqEDuZHKrsn9jPNHvDiNNJm41ZX"
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
