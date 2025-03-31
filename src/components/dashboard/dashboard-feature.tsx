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
    "27SAAijEHx8hWLQyX8FnBry8aNxsNu1QeS6hQRC7FwSFP2AVgqwsVoH6pqmYLi8cF9TEv8fjLvgGgpmSVmbtdHSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XokSzKVnFGXmor6vRnuHGuNKGn5uVHvzSPNPzaWUBq9VMsQnUH3Kmq3XbdstUW8wtrdwaibToUDb7ejEdvmuwjF",
  "key1": "25s6atSvym6c81uLSD4iFMjDF4qd4RLTShzxbGdgdRpjVwp1cTMGN7jyVYK4LVSvfg3SK4puBmcwWXW6bV54C68h",
  "key2": "a3eon8ytf5yyCbHc9Y5XahSXr6HxYi9TkQFFNF1P7AudVDUjmYpDkSwviCz84QJdLs1vcgQSg1qHtRgSZauhQQK",
  "key3": "5sGBJXo1tci8o8VhdLm6udMgJrK6opvxuJaiaLkhTMcboxMfaNqYKRshVoegBKdjQYJFCFdGDZY9isaM9HJqsUtp",
  "key4": "YwpFwmcKbikkBz4J8kE8gHFVcENr6CNj517kTNzXidKtShD7tdxTKG5YNtjmVb5zPQ49AqMU425aSoveCKLiEXz",
  "key5": "4vHpYkY5LFPQ4cJXJN3GfqVjA5A2siMNrSFg3P5zuJZtShSVbNjMHHu1TxZejf6hWXzNiMVD9fptBWjV75TEt2A5",
  "key6": "4vwFgk5SnmMF5k5oKyijkwmsF8vobfMx6tEHh4hvihrAbnotoVWkj1rGup3f4GftUDHVV3XZje9mmESc33NUqN5V",
  "key7": "qZCjepVLtBcu72YKboMuoCsEJtgyHRNas9anLWn6vSrhvioBMdgFN44dVSVXnvzhRF8fSH6s6aUWbbuUn1EwWPt",
  "key8": "tuAbNMoJKZYPwirvsEwZRPBTrZ7oYdUD58BtNHpnG9ugNRG1Nr8qww3PXcXUUu8ReLXNGVDemTVz4MDXedkY5SX",
  "key9": "FeAMJH3TKswrLnsRcTBaN8pQAh1BhEYHie8hxr3LYe5PtWiAHj4pSU976VjdHfLvMarVVjTyGDe1GYtjLZ7dKwX",
  "key10": "2NtLPbGkN2a4MgKuTHuWrFB5RdkT5Z4ckpsfadgqynJnUNFTWC6biPKPcT1rQPYTHDqu9DsRDq7FW584h5HSLzti",
  "key11": "ntZiqxE4aYwET9p4tEoHfHSEdrxjg7VKoyUduz7Q4ukvDgj8SFiBwAyXPC4iSkNdasVjH3UVZMGqG9HFK1gEE1y",
  "key12": "2Wph4dynPaSsjGKgcra9kFBV8DWyBSajdknjynceZwEt5B1HvWtKLyybFo9HYfzf8KC1NjqUYNedYk4XUgAKiTXS",
  "key13": "2kpYXUcP9kHLuXh9xAWHwT4h9TBRXzwwWvfUCnjkmjTGxhGyjUGwLrh6SrXptU77qXQcXFz9RA3pEvciYpM9VorN",
  "key14": "swZbK7DQPRradoQPuxyBtsc1RWTcv8SMs4gfbU8YagJcd7M8C8rjPKrWQoCZjKCgpjzF1MT97XPXrgFFLoDMf75",
  "key15": "4QZTzCfWJWcHWcF59UNxSsLwz58q1HQksmBWp7Jtt7DEEMGhbsbVXzWFCdrcokyYHmvtvvqLAXLPw6Hub6h9RoHz",
  "key16": "TqYFhJn5jwX87juhpc3bMFrupveaGLZXstPbJ6KX7BPG4Rkdv3rzEzYe9N6CQGc1WZXXEW7q6sKojMLBgwCJKhC",
  "key17": "21figJ5MSPs1VvSj1r8QjFetQS4gxrtECrNA76gNjNVGa7p5MtHCnfU1xBh9WF5kGZCViudKJVD1EJRPEg3ByQd3",
  "key18": "4CZKqAQ5npniiRNzQUDBVw5gQwp94hLdeVs3zmRTRw6g1sG3jkUmo3jvpfpEhaMBqMJpxFXPn7JgBHz7Kpt9JLUm",
  "key19": "2ki9g8fPfKvxYQAYXwJdr6gSPzrxSEsMgxGVaS3dDk9WoxQg2GHCfpfTG4zN8DVTZEZrX4uh5DnjVamCSQW6w4Tu",
  "key20": "2saypVHWPs78iZY1eJfPknk371x3TTZVEVnMHZ2TTKDFuHkmoV8urNxw8FLR1KpMZ6taBjCyfQury5TNC8Dy2dkE",
  "key21": "2shPfd97WF3xMD9yNsc67smMnBrWKWcjvQV3V5tb62MjJ6oUqbX77QHysR247bVK4kZfVuEZ9tnzy13Gonpfb3ct",
  "key22": "3cYt4dtWVUuHnwXKKhrNfc1BRoWC3nFC3h7DPVFo3ZrgVpxHvNKGme8DAnq4j6UM8mHbCHczajvLoSFcNSkJjE5D",
  "key23": "4jh14N4K7oSBickvyLhceZHNCiLLLimN3RmKsyqrCYd3EbeNzXQjjFTqAZjXDgZ36kzcS2H2ESambgEWoYiVQCJX",
  "key24": "59DEgRJAdx48SzwnT2nQaPxnV3TSsvDkM2sZKdeKGRPuHCK4Fq2G8WKi8iCki6UN4L7fPzxVdSECjvJUR5oWN5ZX",
  "key25": "4pRBEdHNobXcdJq8wfftfFq32SD9KcUUSGkLBWRJKefCm71yrPQ6SPPq94jVaueoaTaqNzSiMeC5t7vQ4DVPdmx2",
  "key26": "4XBJGF4v5c34Kh2hKnyBwZfjG3Fn77VSJkGq1aFqGtJt7VCFY6FsC3kRwPjgbMUqqyKLQMJ6jPJsHNyvMD5ag59U",
  "key27": "2q2rLUhesPzSUpuZ3vZ58eFAzaW8BsSXuq9dz2xKXgtcPqpdj28A911Zoqncde6qYDXWnj7nwSkJCdVPFHwfouy3",
  "key28": "2UBgDxwC2VR4Q7vghjRNhbX4ZjXhcnM1YPMfs3YbMKZuKpo7nK8Lt9f9HmZ7dK6kPka8zsr5yGmSuzzYD1j9PZj9",
  "key29": "5rkTtUth9fTexsux6b4jt6MUQpCnLhk5bmkT67YCMGV7qN7hM3hnZvHYNVD73NKm1bYkBoa8sbomFW7JU779jVam",
  "key30": "4Jb4eg6kM8BKoUyrECgAiTSpkv94cn2CRnApzut5vtnMXy7HtKX84oBEg7wjYkANpwuDLe446d8bQBM8HX42zsvm",
  "key31": "2CQD4VeZtDNWCQnKupEPAYMNVEN5pTJsMYot26yHF5AZXE3YyaGnW11kcjpayMrRTUSQammKpFbsmzf8SHk8i8Pz",
  "key32": "3x6SrRfrumQZC4xqs1TtYK9uKZsJBoBZkspR188UrEH2Wf3p5DVJg5Tocd3u8Vj7jZoe3iEH7WJzAMfofLJ5Fcw5",
  "key33": "2pjaGHtTtbCnoswjMi6DhQogAq2KQU8NfkLowHT1NNsGtUgCmjHSX5u9JYS9hDBevWrkF9cL2SYiSL432XC1KkYs",
  "key34": "47JFYcTLmh5En5X56Ni7qW5Zv2Xn39wUoyJPvdHignfG7DjJyysZXJqPuzjZuxkERZszY6JYfVpp86r5f6GpxRNL",
  "key35": "J3r9hvx5BsnogsXmnjer1No5ePUpRg2XpRHALZ85D6mpcV7ES7bRZBPHc29hD4jsJ3uw2heRLRFE6dT5vVjGYRr",
  "key36": "2SYMvA3JYQwy4sUHFNtDD14mqMiHLPkA6eNrtebxYe36BxMnw8wPbHcpoVSKRnufz9SVcsA8w3SUvJQAYfoqamZy",
  "key37": "2S2SgLQEEpkHfSV3j9vZPyY1cvoqKonWtK2jRrWSonTR2A7RGAX9y7J982ZJvbyzKUstdcGw3auu47a9qmTxL1hi",
  "key38": "5HyCvcX54Wgt8o8MvFKd6QCTMCTY6FVFDnX8PJUYUzgrjGfjWzMV2cZUtswvYBufDZQ9KKaM5mFppQdA8v4ihfRj",
  "key39": "3sUsAaYbK9UwdxgkvNbkzWM2ho1i6SDrUXmDNnLBMrbUQdvdvfHC5ftt7AUBbkKLgz3NMHvVoySwd64JDV8nndbQ",
  "key40": "2yz2GhtdQtNCLwsUJ3WfPwKWAC1b2Np5E6xfKj9XEZykCydEJ9LtN4TRoLUpyTmNmeYpuJ9xjKpTvQDnnFYRnDqb",
  "key41": "37TnhFKYcKMwF6kTL4h6NRERCEEioruJFD2gb8g9f1tePGBD63ccCoeyS8N2G9H7M7EVixmMvYkc4KQ1nB4Kyyvv",
  "key42": "4xZE28RUUxCFYTgCwk4PcLjJ7V2A9PvzNHB5yyva7RyfQiJMyMqskJeD6VFvvrQ7B96ZfYvzNTZYSog9Doc4xAgh",
  "key43": "5bQYxNtSaxEzFECLAuJ5WQZ71k4fvHN4UCsAhGcicyB1yxm5m7LBhqZ31KWFwviZLxdGyLqTRTaFHKp9GG8SCftE",
  "key44": "4wEkg9uGPaUdo193xwEASfCME2CjtHg9gwJ5ShE6RkwZ9mANqeuqUr8SVCZfgNYpGjVxAvKNjdvCJvGqPaD2uVdJ",
  "key45": "Ri8ZzfHYitHiEzMKeqznaf8kXPo2R4EbgeFuTr4wbqN1XXnbToRZXsnDm1uBZW9jbd2rS9Agkak3uCDKPXd6VcA",
  "key46": "2hUu1jcNFTS3JmFH1vCd96NVCEJYwCon3r9DYQbDZhrrTegaXeDpB4ww9rwPV9zvNG7pWNT3w7Ut8MhnMZhVRRCh",
  "key47": "4h7oCPgCrB9NZv9NouLRvnanCjWwBUn9HtmQ1oAZf8L6uaNzakB4WKHXMY6yaq2M8uWHz6SdYSEuk2wG8wF741yn"
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
