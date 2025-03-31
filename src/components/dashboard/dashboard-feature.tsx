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
    "2esUbFTHuMpw14dHpZD7kd39A5gWgQFUuRqeqmqPGkc3hDdp7eRJE5xZ6D4Chjxhc7MyBnX8sM4C3BhX5q5NyTB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKGAsmR5FpQ2J3C41t9mdzjmrXJecytW3R2xYxNiCM6mb7gbpXvUjcj7RNmd6NiMuWTDXY3K3K2eFet7VPHpyaf",
  "key1": "2foQW8KGDjpF1cUALzuA8bjjcs3nFWyRPjVWjRvcyT9hgp9B2YcmctPkMHmiZsHFX9jTrFiRzuYsWAYUVAi8jJse",
  "key2": "4D4PCxyu8e9FQ2tDjDWbgKabX61rqTEdX4j2JU8og5gvfwbUSobRK4h4JJuWDjnyRVuCZXXw7KP1UmUhFxWz22hv",
  "key3": "3xdu3HaAwHGxMR56nBLfn9fAU9u9ZBaroZN45axmKczzBSEPsjJr846SNcWDAWvipdqs4Gbn6Ni9xmwDShe6HNTn",
  "key4": "314fZEBvjB3VqEf5YnnjT1y5J8TFFbts9ekBroHprwwRywvVn3DjNrVkZ5EY59t9av7BGJ9B2HmoZQGpmwz2TiK4",
  "key5": "2QhzAHzPd9tnWZPCMXQRr4dTvnfANoTHc4k3EfyunjEhcH71hSzedud86usHQubr5s73AXfyp2ZE5LDB8NZfqqVr",
  "key6": "4nC4VKpAvtEcQysUYhXbYanMVo3oWi8kM8XZjYFQZh72HvVbaxewYBwN1tcYxFYNzAuKXg8z595vScScKcWkYrSM",
  "key7": "2xnPNu8jyBm2yAmFXcN9MjQh5F4p172hQv22ZjuJCGXFxBdt4wBhc7WjSBj2dH3S3Q6JUKgbDfTH4VzUG35zmfoP",
  "key8": "5TRwcV77xuKBDSDsL5gUKHUuBmDgss72BTuqnpsiS3b9RqsP7vcvwD3jX4NW8p19L6Wz8j6VXHGWW83uuhADFqxW",
  "key9": "3qjbY1kHdLJ8dqQbvX1pkUgUcAqCqnZ4HEiFSANLAxaEnGdajXc5aWWBvrTJ4Z3eTzRHnsJ7CcsSrv4tQnoMyY5F",
  "key10": "55NPVWUDmJfPG8yjowCRDmFCRKw5A4NhLtCQ79StL37QjYg55r8k1x1t9WAv6Q8bTJvbruBnfWB46YzTE6vGMEQN",
  "key11": "21dSwoCjEMbuj2fWJcB3v91j3quRPtweCBufdjHCmyyyLdiMBu5AB8wQoSv3JZ7z5kLp4UAPqAnQ4L5grkEi7p4v",
  "key12": "3c9xQ36NDcgFJckoRBFoGHJZrMRdZ6vSiAUMMKh8giNAvH3drBS3cYFJF4rJLkNkXmGTLWZA4PvQkNkQWhv9ScdK",
  "key13": "RiavLtqxUWt4oafhgzpYm18KAwL3eXyE5Xg8K8Di7BtVRA8GartfR2fQ4mL4z2hd7ztzRJLrxDgCNH74PHHuu7S",
  "key14": "qwAXAgKSkzDawZxXtF2Sd8Fwj9QcpSsdRsNHjqyj12vTphPHecVpDF2XFZzZqhdyoxnFv9aDDHksjXmXkvsNcXV",
  "key15": "51ba5UMbiQ9xmTJFz9YrmgNurC2ZvrWFUXfmyGu4AFFvnpGbs6sSkxDkszXn71KdfxJkJJURoJWxmVJhDnzmJczo",
  "key16": "2zeN61vDkTYwFLRQnhpoHNtVsrTkWsncHEK2Q8qHa7EDjwynb1JTYVM1PQrscQSj7oD7KwkJRM67x7XXYjorNmtG",
  "key17": "55ad3utDCdYxca1H5rHRpJH1Hsm3Pbez7p1ySdFipoVV9HN7snjtmEHB3VD9DpqULkjKCYUp4u4MSvV9fb5fMAvb",
  "key18": "3MDZz6rcmfSvbcoEtaHasDVtZk8pB6QsBmsopXjV4WWUnoDiCvnZKPEoP9fQ8a1U8mtSqfgt1xq13K7gTZG7Vm1o",
  "key19": "cQXKvMyiohFj8TdwsT3yfwttyy882WUSyo7Tgayxo6SK7kANxezRJ1BU1zqHuGbfREuoEYNFeHhjkTU9PSZhDsN",
  "key20": "52usx2C9GmGimDH4x6yQBPenw4PUa8wWZD5qSZjMbmc7dxigF4gJX8YQJVk7mcP1fJqPSmv2opAcMX7ML29K84ps",
  "key21": "49uxSFvex2uHkJJJ4ri32ubk49WEMtiRsEmTSzz7zZkRjMVhAaMrtCHsaty2J3dHssKL5GdxGmGhxutNjPf4Jefw",
  "key22": "3BkWUe9DpCjovhKi1MuHZcQ3UvoVMbEzczH4nB7GWtRLgm1hwYnd8EUJfzSUUJP2WKivV2TL52V4brTtauqRfHd8",
  "key23": "51zS4j2MbFmEJ7KwjGJst4zZxYqfwmDxzLnarbay11cLfFBSXk7ayUVXk9mWykmanHGVvbWZPFnmZhv4CoxTw1q9",
  "key24": "41PU2RapqRqNBLe1oTfLiii3f51EA7YZanEbXxD4xk6f3aXYLdqgd3D5VMQa1wGJGj1dn79D6vzvtxyu8CfEc7qL",
  "key25": "4b3S95YqRgqqqW1eZbwBaGg6rvrYfTRamYJRziAH7HBxtzbkeKTEXCo6KdpAPHHGrRk46ebd8JGPwHb1MwuEdyGn",
  "key26": "3R34FLsoqkuj9sSHBKye81ihfGMvoaVcBqEMuNgukefHzkjfpzex4ZaFzRWpdoHSb9V1ocerQELPjY9hxAASUSTu",
  "key27": "5XNc3CTVN5pHRA5oD4xuwtU875MfAkALCcpW9oDrTRKN3238A48uUyFMtqafUisj5MjBgSUrLzfiXGiREkc3H3Xj",
  "key28": "4H7gD7ovEVsvCTdSQh1oQ7ybd2XNoW7RZNGLmLy9Tqra4EQ1THNNkG2SkmSkHAsUQWCzWYSyftbPGtN2ozA5y9XV",
  "key29": "3rPNDcc6pzg691u31hTSvC1S9Z5nehSkuHEjxCSMpviwrwWT35gSj3ZgxdCR3cX995sshQECQjLdc3oSTxw44BZc",
  "key30": "4KBsKdwZRjMr5ks4QbiHkXNjRX3VDzgQ3Mapi9QjTdL5s9E9b9UbQxqJe3MTBvaC1VSo6mZEY3gDAzCAP1xPJNYp",
  "key31": "2DzyvJhBm97rcA1uNsBiyP3RuVMCWZ7o7MaDDGguXUuyPZ1EAWVVN34j8M8ArwYr7yQn7m8cpfdHKVv6FAjxFnRh",
  "key32": "Am5qb34dT5s7o4cjBTHkpsY3SkxkyWUAML9cYQoVWZuBVt3nA94NiWo8VXTZuJFrpKRE4qCtcG1mZsUvyZNZsp8",
  "key33": "Y23FyokyxRjToeorpDajNigkkn5LesCL1qggnVSDz44QtDVL6LnMVwV1uc7CrDFxDHc32zbk3wbdwVuT3vf4bM4",
  "key34": "45yDHGYdKxn1ZaovbfBar4iX9zvHz8NigKSjrSAo1PNaqP1wQgVytFa5NUbjB5pn9g9wXeP7rpk9TUJPgZVLAhAG",
  "key35": "28cgRv2HSZaUrKgNUgrhAZMHsDW1KGQ1faP2uYvDFJVfjmoNcDP3xENuDmMN3CUPtchggsLuteYBZpL8vUnEZABV",
  "key36": "4Z3qwHLLCd7WcwEXXrV4wzXns5GLA3cKGJZrQd2TpSoU6Cz6Zd5XDoYkwqadKdYyTgV7NHveFK2Quts3QSXw1npp",
  "key37": "2Hb5BxqFU7Dj53F3z1f8Fda5LDGAGANpfmUp794Ypc3U8ZnJBZ1cepZPhmyFLbrUqj36TSPJAUM5e8qmBS4R6mXr",
  "key38": "5dhPMg938u9bZAvJ4mubkWb7uDKxU5ptfH7gNN9yApmQniVaRyzEbpg1oQ2Gh1BAjvZgbmbTUM5syxQwMWWnBZ99",
  "key39": "CCTtGruYRj79TNrjfxK3fyP3hhqn4oXPQYWiQP1YWxijuBbyKgh6QU2TbDgfkNEE3Lu1E86D1rDFHzWN6yRNgJc",
  "key40": "2MWRBAZAxhEH4TwA2xRXASHX2H4vJov1QQMxNL3qTcFqQwDhiashEfi9NZ4N6A66Sp19TnAxKfJzGkmcAZAHw9JH",
  "key41": "5nLjjtv3fkse5fqd6Dk5AQfADQ4obLAJF2B3Jx7wioP24PPSuJAR4qB5LRrkS1iSH5DKoJCbhxji1wvYgavzxUz7",
  "key42": "2vHUQTAbksnQ3rD9nfPHGQaQiGUfFKczVZNGEEvvQhJ7NdwM8ru5mWwXp2N9aQaAGmNnDSA6rZhd97jr22YDkZUf",
  "key43": "2pHiyE4GzyB53SqHG85wmJbvogeXo575jGALRG4Muhj2oECfhduqHoVQ5QJ1Nt29dZ2ykCmiXpQPycW9pKyJEKKx",
  "key44": "2aWxiap6BdtbHh8FMcvQSztbEAtHg1h7KYyescofHXdcBthCiB4YWigasNYtdjkVPAzLnyykxs9DG9FMVUvokCFy",
  "key45": "4wMcGUXMbGCSa3jS8Xm8mJuYHAppAvyyjLoX7c19YBg3QsXjQN8K9wHwxHs1x96kxsZ9omnR9b1HHbiDNsf3R4Gb",
  "key46": "5yTK4dJpN4zvkTUtHPzNVU9pHHKUMDfohevtBHB1UAqta8M79jMhj732T9w9FBa9uTDFkyryKGsPKrrPCAcC1aLb",
  "key47": "4YtAChc1KLZ3FpzYFVAQt6NkALzaJpZ1adesEFT3arWnpAvVxmCCXWYoaYcvVYHLp51qmasyvhWnSFGK4Bub6i2r",
  "key48": "si15B89NnhUdrgBdwYCCfz8PHDSkrB33PjXFGBPwG6bHsv8CJBzJgA3NAhvkg2p2uWtx838ENoLo5uLEQd4ucYt"
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
