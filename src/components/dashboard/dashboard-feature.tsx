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
    "DcEsRu2DymFdCnoP84SWcpSQTY346Etj82VKw3Rau6AjNbaUerMLd8BmnHGx59MjWWJ8y6ChERxWTaHQ1gcDEUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDqbrTc3K58G7AevdsBYKD5CNhwLtaN7pFS7LwekHkHTSfWGJ9yR9x1CwPhzhMrycNZ6T6kkv7bCxagZmaENEvU",
  "key1": "LPQ13Ko9wBU6tAk2dpLfPJhGzN7Fk4VsBrsv8eB4rnGgmw9KptVmKXACzahx7Z4eDd5oyJiRTLgWBwfSGsY5aAt",
  "key2": "48DtR4Z4S2tfrkb8UR3LtaoUxE5TyDCsvK5oJSZt5QKrtjeCwefStYna5avnbN5o6GoJj9fyTPLoWryG4ycL2UNk",
  "key3": "29TDTNJDuJxwhEXJ8XNwf5oGnmBLMnUyBwci4UCcLZxsjL5tSuVB3fzC8jN12nNyDnnZTgoZJZu4bD9o99xmnsyr",
  "key4": "4kufxNB65P8ZtTrhKiPsBeX69jjmxJvum7LpXtBbcy4jyHFMQgF6w8BCRXsJ15EsMimBJCMULJbPa8Vw1qLdpoTu",
  "key5": "TMp98xy9Zp652EHBBB6ntANk8jGZDZz4HDcg74qWHq3vqAxdWxh4PpYhiUAG9U7FzpsuRSaqBavHDEncYzTMAWY",
  "key6": "4k23AFvicjibHktaSs3aw2F4mWKAbqeU6CWRJhG4stXb214tJ5Xw2Bi6LT912zoeNxmAtpvkMMpbF5Z4tsvrmHiS",
  "key7": "5oEC5TeHSr1RstJSRNKn8kFDhzaJPbMu59ZDBe7wJB1QDPkYiMCgH5CfZ6PTCCqw3Z4LAc3rLxar4KB31brJYEVU",
  "key8": "4ANah8speUBsbvodbiKCcYrW2ahcq6BjPjgHNPAyq5FjtxereRRKCgzgjo9U9Kkve11aPf2pAdK1s3sAf3SUyKfa",
  "key9": "3mzF4YHobnRZRjXV6CNeeMv71SJSgKM5XehHpFDPQoZJnaFm8AbYyKFWrrehkdAVuboKvwr7Mhz2uHA21gEUhdCu",
  "key10": "4yoWDCvEk8hAX3s1n5RqvyEzshyaHNMzrhz8BMuVG3Y6UGZaQ2bDjsdHqfYpr7zqBLNSYj3Teq5YViiDhSnH314P",
  "key11": "3Ww2kBMmRE8HqA6TAx2TTz9sfYnsaaz1cboH1T4jjxaoCcLLMnNK9c5AhfFfynW2eBjupW6HZd4FK3fdisHwKqUu",
  "key12": "2umo5CUecLYxdV6N4idvNWh2QMie86r21hyctXyUtg2ANRFAy8XGDQ27iG3jNU93xNjNt6vDsp8tGmWdVaXkMLhA",
  "key13": "5GHffRiz29JEoHa9ZqYN4Dzqa3cdDEsrGhxxaTzFPHnT9MfMAhqwHLAAx27ZLeBKf5o7GhbBH6bBpPCKqLDKCxyq",
  "key14": "5x6CUPSbDtQ5z3jjKJWM2Y9TvRoKa2dsExsyQJvD3hE4PhM8HjxEgRreXTFz6Z1TFXo6JfTL7mH29hTG65LyyAiR",
  "key15": "3pimgqrm5Hm9KEMJ7xwWQChybrrunnLq27N5FjHVMVjoxWyp2UodJdDFXv2erEH744zuV3MKypMvN8auV8WSSawD",
  "key16": "bSyYhjGdAcQXWGbjVJHTM3nEZuriyu44bssszJTTGpXqiXGAaGUWRaEc7XoEjWu1VoZzhdXC5HCSsaDrovEYnB7",
  "key17": "3imWoUsLhxB4L2SniLsjmh7S2jBHqUV1j6w3P17p2dZieoE1bb2Y5i6NG6HbvrvuyBKSrXQVPVj3SHEgePFX85FU",
  "key18": "4BNaP1au85tc1j1RqDSbVLVqxuKMU9V2LkSjCUSYntZ3RM82aRPRMMK1qpguVhJeG5fAqiEM4W76SdmGAViFCSGX",
  "key19": "5V1XVCNoaSBh3rNDYvePjtjZQPLPrs5UUscQEfDWtbh3JMzsYfemYZZtkUYY7MzQZf5c7MPveXVNg9JA4puXvYFN",
  "key20": "4qXDCxB7NBikNUivmAADPJBrgfijSVsqDjr48LqT3Y3AVkUaYZ39QakgLWcppY7LYT3cZv33dkXS4WAZ8dVsTpo5",
  "key21": "55AH8Cj1nfBBTy3HT4CYn7L39UUQwtGHcVEmWubHujcrQEtScaXLekJQajXmR8wsRJZtauXRqso4e2u4qW993ow3",
  "key22": "3p7M9kzYxBk51FkbsgeWMvhw85sHZcNjARu81Q2V7Qe1Snq7yS7353qUKkMzrw7N4X68jbMMAvtHTFemVNP8aEvq",
  "key23": "3uTokh3tr12Q6a2qq6qZ3s3Wv6QNigRHMcHe6Wwkg23GiJLPLMbh6Bj8yJ2aQHBVxwF9SashzG9aDF8v8eqtfquU",
  "key24": "M1b9vPiK9RTEbndnPwWNZ9G4sQ28D2eX5UGPPQd9wkmJx4Bw8uvxCX8SqwNCaoCPUFA79WZ66pW3a4Kk2Qozrdu",
  "key25": "QMsDqWgaYaoSeWnbu3PqjvbFnHwHurSdjnPDH8dSUTPiSVVZLdgrGovpRWdEwcFovvbq1DbycgRfBKk1mXmmnCw",
  "key26": "55cQdn5jBMY3uFTkjSoAGMGGKuHmCm7zhfAPaq2ZWTFuxP9wQrvHiq6GEazzrVjLyRcH7WyRXFULyhYH2Yk74WpG",
  "key27": "dAKRLcSUx1JYdA4Q1XiKppkbjD5TD6quJMq3hM1FFD3ZH8axBft6PoSEVbCsLWfgA1vAKSrXvkL5XCiofLJZTCA",
  "key28": "K73cjK639o7DLgWULT9faLkufjmZKanTNWSDu6mMyZBCzyaX7CBFUPHipqfxLGJaiEvhD8FyubyS7jb1MohJdtS",
  "key29": "4yFz55YAaftz4CEp1TLzUCmkvi4DTm47DcJQcAr8DY41umsEy8xb9RCehbxHFFeGioGHF8bLLyx9JePBPCuv75Cg",
  "key30": "3V71U31JL8i12eoeXmcE4UeCej3rBWG456Jw9bpuJJwRrFudAjSFhLPhcGb3nEiN8Ry23a1YJJ5RYBwmfnSukQRH",
  "key31": "5La9trTVMF4VTwVJwsWEM8S4xYmB7g1p4Av4E16E9ZC3sKZ8pxX7zg7HiotTZUbGEs3D5vFJeRKSyPVjcxeXVgKp",
  "key32": "5e1M3nwLfU2Fqp7HcTdH5kvbYdMSqywoQSv3f7rTQiWng8Qg7peqz39zKEghr8vFjaNrAnScUQtsyU6qAXsbqAhg",
  "key33": "2Hh4QZiyV41mA9yKMm1HDYRPpkR3Tdp5JBmP6jMAzvouLaTyZKLHpqcLxZAb3mK4zvf1AT7eVnFFgHHU8z9aLRYm",
  "key34": "3vkwoYWPNNcUZJF2uYHsEfvu5ZjmVwbHNupufJMcds8QV9nNeBeLngsnegP7UYgf9h6YCKLtt1kyjQZKnXySUJGF",
  "key35": "3Tgx2AQjGpmGqmv4EwQbtHfT8WTSmgWbUjnTEkmW6HmaMRZ7cE9hs2nNF4oVz6nJkduBFLGux9PnsEZS46J6R9Up",
  "key36": "2J9D5RNHv7byURUBFHBSNHqNTVsph4CFeDzV7SfCjL9byyfRAE1p667GSH19DGCBgag2aeSzc14Q2YuNfnALHWeJ",
  "key37": "2ortimcDU6WQBAKU8gxVnkHsDaHV5Fa7K2hHsLKTCAkzrcmskYKoJpSjFsV7V1UDxm346rjR9PGrmtVjE4npEeSC",
  "key38": "5ZnuGJsWhs1QT6DS5UR2ismcNcktcFh4Pnw2L6NEy52uKmZy5itrUjMRAaxKK9EdQwPWBJdytuT9EkARhQ1xBa4L",
  "key39": "4jRKNnQbZeM9iN29Fa7jvGnQ866f3Bx5ZeuMcM99soQTuxi5F22oG5PDHyeySKJ8P3MLEUwdbUfBERgofZjGjeFC",
  "key40": "5VmciFSoyejCUgZ3Qa67zZpcYt5cPgkhfYsP8wqaNqu2VCpV2GoboZ7yr8z4huivdHYmpkgqXiTMPwtaKiTGKoqm",
  "key41": "4Mt7nfcXY2FnbNNrAJXhaPhGAYoNFiVtXuWdkTAnEi3Gp2osBtxJSPBMoZqH95CpDJE4Ti2veZmkGk3jyLGusLVR",
  "key42": "3GQResLbzbwn2bb44jYRw3KMf3mfBnYYCgKnmsooGhPEy4DyxLsX5NvG545GgWo4uYuHLPijnzX7foDTaMwZq1Xh",
  "key43": "2nSuXVvWGYsjaPuDsD7Mq28vneEg7UPjFJofdtYuSz5YrrpZcmZwQZJA8ZMsekavzbhEUjka9KeNyq8y2mRpBhgB",
  "key44": "3cuYVdevvARXJRQSda7d4eVyUUav2ewd79xVJ3EwS2mpPKEZt9oQTbZZKKNryP49sKj8CFS4KDikC1sUQyoeQmnb",
  "key45": "454DHuLWvzgxDdJnoEtTPmdp8fUDzwWWnpR5nRQmuadYL8YdFa8b2qXAoBxJe4kybd6Tw8tQxEw6oTCQBZsxpHaA"
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
