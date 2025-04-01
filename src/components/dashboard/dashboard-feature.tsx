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
    "5kV3rW2iFTUc6f9tZMAwimEUKb2YtSkd3qZ8CfmxVbAdA4cHSJijXdiWfLrUcXZghH5BC9EVj5iUKP5zeeMhaUtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YaEV2mEKKEjsp4G8JXHuS13j2BCkNytX1TeAMh49c32NKG4nW5BkmM5TCcsm3zDd9mbduQsXoCBE3Z7jGXv4J2w",
  "key1": "9wCCjb9SYfiWzteaKC1dPYyqG15wxJaQyK61AmZfVyrKzvazReUwJaZj2dvdDFa8EJGDyZsZucQifbrfzeXLMFV",
  "key2": "4udEp3GyqniV3hTkc4MfKgguT3bkKSgRG3TNqZfoUxyjr6rD8VWPWAzbqJoR7bazvxsnRBcPT33P9UCEXtv47kqr",
  "key3": "3ZhiKfrLBUMUZofq6vSQUykJKj9ZVo5eweXxGHYNcdNtn9zkVJQKANGrRPTmDiUjTpTNe1xT2HreeoTp5NbamGaQ",
  "key4": "3QJkmg3yLPV9oeJZBBsQjBiFbwwsFWomRdWQJCSjWyUai2V7bT1DVYGWZexcdGSeQiR4RaxCYzRJknosGJhGAPyJ",
  "key5": "2p3YSxyeCuoX9tLjBYep5zduH5n5SJgvo5zSffhbqnbyqvHFbT2asdijyAgn5JyUwsk6bhAFaa4yYav1fKpAGYCM",
  "key6": "475Sf5ewv9WrcSnL6EvtWyYwx1jAWdMR67E45KwELdsrJaiAkz39x7HK38tc3BfQEuRR8KYw6G6fxE8fyR3BVBQ8",
  "key7": "5ieDaSuxNfxXpTFUTmNkYrzYp7FbVk7H5PzCaFQPtUQqBJaLM9aB7upgqXW8HyWuh5743YudqXSSK3kEjJaizYWo",
  "key8": "QAKpTCr4DHXTiKTEuH4jToNBvMdjoZoS1eB6gKkxmKpF5CocvYEbdHiw1fkSchPCE7ggdpmdmrtrPW6dEnJK7H3",
  "key9": "3kMhwUf99jL4GKrED3nD7tDMQaxHvaA7MAtwKCrSsJyUWrS4EbjBaRLvQgia1xt6qpgEFzfhhvUPuYREVjrU9g8K",
  "key10": "3Dk4bA8KELM1W47jDCXJipBZDKXKqGcV66VoYZ68FA3tVaNekqcMnWQdhMRbQrMmUW7tMSoubR7RbfufjTtQeWQa",
  "key11": "DV8YWKAVb9uapSduLbZDJhy8yQypmTEgvQ4dcF4ay7QdgTiSApjZTcJdNoU7T7rh3pF28Wy9Nt3oarKN45qqgYm",
  "key12": "jhvBNKg62cygcXat7D91Ar6sunzxW6PyjGzZU44gahr26jA6LyAPGNFgzmBKo2fRMKMQhuPLuTzUvbUoX6TPmtd",
  "key13": "4HZkZjYVVUy3DQp37KEw3ykoQFA2LvF3T6F273NA6Lt9m2T4tYgw54EZtSHQ4w5vy1bk8querVHc4uXBkdzEE9kg",
  "key14": "3wR7QugdnxKAse1KxcjPbJwFxNJkt85rTWvv5miHf3Wx24hxoowxSjQx45nmpgCycrKfsSCnKyzJYcdZjPzsxeUM",
  "key15": "2evmfXGWLgismwx164V7LurtCHYnYofPG3kgE92jeD2F1w3GXrZqrpvKymHa5PgU6ggXjbgAfA1DvtusUzeyFNwe",
  "key16": "3GMxU4bVRsmSLPuHaUHALdUW6KCUkQLMFKWvhZbUinNrZ13ABzNcKpqwfttvrGwLpqBzN1Fp7mERMenyY9dXedD6",
  "key17": "DPuaJL4jUiWqyrmKuomQFVCbdTt9upyR2m4eWEgFCpeUGnjeMDoDJKC1oguYJtgwufW9yjoLvQCvqZxg2rBh8Cp",
  "key18": "4fE1NgMb9xEJ42c9wyibaeSp9uojNZBe52HzXGuhBwXxVQo3fsJmf5NQdRBPWct8GKLmScyhnLGAuzHWA7dT2k9j",
  "key19": "56usaYEMfaa8uXpmHopHBtEuvbXm62YfdLDHVSJZUt68wwDm6uyj6u5nLo2sHfCYRCaxpeBv4mLtYE2zMp7suKqt",
  "key20": "5Y1CftgGm7NX6dELiVEV9AE74HGNEUerkmN67nvWwWANtuYQYiSm9vpMXfVVfhJawm58TU4PsWTtvPWcvA4fjGXH",
  "key21": "2M6YhwcEwF5ddSVVfsmvkSmFbwjrNLwzAXyVxvAhV5VbgLjBLrmjWTn4ghHTeuZxy5TQydtEjrcXxHR52Vnnmdi2",
  "key22": "5HGxBgLNPdUmpaBGDVQWQN55nUYAYAkVSdp97pXo2CP9eFNLiZftLTKtVwFmoZvhxDHcKHV3KqXtbx7JWkdXnSzq",
  "key23": "25xfLpQu1AghVuaVXnHZtn3mjxs8Lv2XRmGQVgs4iUuH8i7Cb7Zo3fDdsUdd7GR9iNSiCoAASAoeDGs6yukH8wKQ",
  "key24": "2G4617svcqAxBfc5oGihupdv8drZw6RTERoiXEhv2KjMQsJc9pcetUe5Z8nQPLWj17fSTduRuMK9cr61YRE3BjAt",
  "key25": "3vxcEfT4EktVJ9hFtUeyo4ZTEofFCpEdzrwrRR64Vf1Wk6oKpkr1MbdyFJGo7qeYjzxMdPHiN1Vbd1GNPz7jfYYh",
  "key26": "63kNojxjEVv85gAwtpyP5e1AzFqT43SDjA3siUNyaB32qmnMviEJ1C2jyy6tvFhDfghRAENV3hJuEScDRJktWJ64",
  "key27": "EsijiESjvSPdozUBSyhybdYJfbwTsPfZfD6fsk8hQ4DgeH4Q4gb1QSYWu6mMyJCzkWNXiE9qQEayuwCzr8CgoR7",
  "key28": "4rJsi5zhBhGb3CtXoqovTRkzUCt9VMqgauM5hZ2xCVaa3LtZoLRZeHBL4kntYibDSqUv2mM5gUEKpP2zWdEWZ352",
  "key29": "HhvDerykHS5MaYQ7Cm1cPBF3hS6m5n5AMgMss8XP3VnpAyLWSqnYfskJeRBkELEGZnnZNqsxZBH8YBnHRqJDBz2",
  "key30": "3hDt4jfDJQdDcfSg5fvbMeEAWHuGc4xmCNvDnNTjjMU9FhJFMAFhmrPCAmtLbkDhkwm7Eq8pQCNCRBWMskHeKK4m",
  "key31": "3mVHSnWXZQw631kyjmvzmkgFg1vhJj4K3eFCAsokskYG78pBL6GhGKq7aMsmu3j6NbQSeCYg5LG7iwcQ65kd9JS3",
  "key32": "3gbTJjD3VPFvZnenddcyeg7RFdYAHQEPBxrJaddT4c1e1MHHzU4vZ67QMC7Cr4NSQRiW5oehW9eQUDXq2HdcSEKu",
  "key33": "v8PZR2uG4nFKwoyw6fddwXHLqbnPP9G4ay5Fg7255McYMjjZRzH6fuSi7eFttw7Tbxu9B5r2kgMES6CM3z6UqQb",
  "key34": "r1MYpEzSU87duYmGXwUA5vT44mF6EnUAJBREDQjVB3UHUGbFmtxikoLeungpTysfSFWsBxgcpQV7jshMKJU3Ar7",
  "key35": "5AHwVwavuNdEVmoHyMi5apzNxZUG2fo9aTzFUELrah2KWgCGKZKQtsvhZk4EJCmwK9h6zGZQWDb2pf6WRiQieWwA",
  "key36": "2QSHWPS9CsUy95ChxCvgpPrTWjk1Hbceg761KUb2JSMfrQZdXNVRs8uLj8Uoeq55Ri2teTfqwMrinT8Be2x3aac4",
  "key37": "2WCg4sp2mAS1WoSwDeHyKMkA4QyBbenSyeXVRvueopAoQnBEkjcuWJpQcRXncvevsk7T2zsVy83kV17dMpJm9M4W",
  "key38": "2Xj6QKtBRVBGymup8fyVqSbHbdT9ijo3fVhMznTEL4ZAsxbwTiY8ULjxYKKZXKQME2AF6NiRNjfHnLTHdjB22dfp",
  "key39": "2VxipsEcukKsf5jU1LkBusnSwhwBQTQqvWkhQQ5qt8bbvmTWPh5SefP8ZJaBeLhhX92tUtpfQ3EEJYQdbsi2eCFE",
  "key40": "5jdipyS4LrpaURBQWQU7E1zoHP9QePNnDwriBamXDhKqmMoxMsqRVSLogKC4NXC5hfa734wLsMu3nMyyeivobb5w",
  "key41": "4WyXMq8uL8DqiaYsTtJcBPRWsh1H2f3ThYEBUWnTPoYy1oRRamuQxCbWAT98XqtnpQG3y64oZ5Y5Mb6NihsUtcL1",
  "key42": "21dhKqzaGhazDZB8agCTmDhTJRqsLhasY5sgZt2AdbaKUYeRLGyXLQMD6fQf7yD2Za4R87ruqfpZwEt2B5eshkED",
  "key43": "4nmFt7NpDVNNarXTcqgW9QHdPinYoyJn3v5RidK1QgxLFs3yV5AemYEg9H4horghafF67KUYxZHUi6bV8DPnzGWN",
  "key44": "4feRJ58AMJU1SrF3B3qbeKrpb1g2hwhS9v816cY8W47U1SCxFf37wXu2mTkaBqSTrcRqfVT6msCCwQ6Q77e2yXpe",
  "key45": "29oDD86HMHz7voiYt6avBw2ozGXuoHHLYgLxkqXqbnaT7BYWmyXWfCtH5nL72U4vbee9jgtsnqcuorDMmQ8sKSpn",
  "key46": "5h6CkVbVhUH6vKmGMz4MmFcPkdHmpcPaXsS8mWXhM62VZ57jBu6779pqsQXifEPaqtWhnoM2QarrdPiHfpri1EXm",
  "key47": "SYmAfFY1kkhnojHTfiY3z8d8ioAAU6BaGfqhSJsfzsTTijA9QWyDAu9coz1E4Z6EAGV3ob9NhGKtME9jcnv433o",
  "key48": "bXJ3dp1bGU2ZQLq4sS9YYvxrwXiRjiR3fiuYY7UU3g2HPknuSQPMrACcxJDTVPQP6CkBwkdZFRp21dbYuFcUyvZ",
  "key49": "2XjLwUaJftQAP1HKKfDuKUTNYa262e4NnFcGNyc8NcE7QrwygRHxpNCnq4iZXk7vCrcMdv6xUR2Kw2ZwMfYzKcxM"
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
