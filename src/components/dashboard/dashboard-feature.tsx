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
    "4ah1y3DpWAGzGLZNNhezsca2aGrgjewSK7jZsac5zkDbYH3Fa5saxnRezRcX4WKLXuJi1na4deeCpu3jvNcoXTh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26o85B1zu1G6FVzQC3eKzvSJ8HgqzGoZfo6DV96WtsTha5HjAzAnRjiyHa5bnVDfAcsdpjjWRGrExPuSwgGGBU6r",
  "key1": "5FE8tSvrsHUx93pzEbVHwrEwXPpRYnVVXq3zCaw1wAZLcZEZHf3CkfwM6TWhkLwfRuiv4rkMH4eMtv3FQ5ed6ZLa",
  "key2": "6KhWTWGiLn9ekTkBq7X3BFxUDbAzz9kbR33QXgsv7BoiwwaMajkFggRsmNWEZbMYvA9Etm5nFa9NR8ViX7dpVCn",
  "key3": "483JS3m1EkFY7DFuYWZp9RpYZYHG8o8JmdoJipBvtDwDHA9KCwHtm5GhGDFjmJFjmTes8aPTjJR2HpfBLPpgvgHc",
  "key4": "2MjSPyLiuGmgVQ5gfE1werhwMkBv6wT2PmrhxDnikpKTE4Arfja5CHTsXb8GSTgVFQibyn8h4e5n7HstX9RDeWPh",
  "key5": "62UYxMtdiiz2QpRkYjrweNeHuCTALnVMatS6XDy2hjUd15FYgQMUbHnBx9uzeiyR9ZSg5yesiiPKKJqtSE24jY8Y",
  "key6": "5416vkfNM3r4TregWsdndNb4SpbrP2fZenQrLtaHgnfzepzffT59h8Fw6TM6PkjBLwHUXiLeW3NGxZ12dXtnowvB",
  "key7": "4Wnv8YeBch5g3sdruuwy5KzQbgPej1KaR6gL176ELwBeaiQ6SF8GwBUthCJHmYVbH7NtR4RhD2FwMraA91Y4j7EM",
  "key8": "4GFHuuYUgA927kZc5QrADjdZK7Exkvhaz7yRsu1LRMB14XSVDos9VV2Aczbs5U2xDNsGMn7B2MRTAPf567rkwCKX",
  "key9": "4occtN2qpgJ9HGMVWHwkbFjJ8Z1nVZEnnkzqDf93U2o7BL8vT9hMKeA4676NXD3YfQNb1WZb9QNNvhfCezVvncZW",
  "key10": "4kFWxY8kkBkLactpNXnuuh8iqRmMK5RFQuvCUjG55zj7PRA9aNC435NRdzgYCtJ27gp1BTr29T2pxv5mCEXFsPUL",
  "key11": "2CtEcjMuKV3Tk1s3583WwttKxZtfhFNxs5gWhTdafS2cAzdRfR3wCmR7AWDk623oYvH1dGTfm6SwrEBQu5sFR9CA",
  "key12": "aQhMSF2t9ToUwsd7JeSVtowKw4sBAymESApaqR81h1Ze1pWQWefyPHKP54xzCU3jWwjCkTGteizSpLru2tVxPnH",
  "key13": "2YczKsa6ofawPGHPgobZYksE4P1jCFSU651JVXepTkVxT2K2uTdDor14UU8FYx5TFoqWcojSvMYvReWFXDsd9qKn",
  "key14": "54hTgTk1LDab8kmybYwbTyLnGNmhWSjbj9eq8XfdgWEHXJ5oWbBwtej7Vb1gorkoMLhqai7r9XcA7AtajD9qm2mV",
  "key15": "3iEJ6M7qtwqKt3auKRwSc9J4iNUxRQoH1xuoRn3m69jWDyzBzm8JWfZprzuvFsD3RNfgmfMjURdZappesfCsjXK1",
  "key16": "4yUp7m8XLUYdtJdwCDzCNqxrYx2KwRKJ4SuMR2mdcSKzeTQxvtWqeehaGsykZxVXDAuoTPR56iff7sdQe6YgUDmZ",
  "key17": "123TwbqYCsv9MVUexpAnhtE3UwuUsskrchiFSfVZayK9eRqxyht7AhqfrTqQd6UEYx6bz6ZrHgvY85fBi6DLKKus",
  "key18": "2rKGpqaLw3GuBR3a1ZVUQy3zuFABFfY4Y9anng59PEHAD5DtnnAKpGqwLr2xxZYsByyAbig6KTKi2uyJfkZwSGCf",
  "key19": "5KERRfpTYTdubxXjBmdRYhZkCobBGywUPz7GQ3oVj6eSA2twS7AbWWMVAgncENmdEyQEWZqTeyxyyrtwUUfArmjM",
  "key20": "AaTssib2DyQbCV4zpYeQyKUewsnJnZq84qT3hgCqr9N1qkU9PS4a5FWzKYhzshseGNyGU4vUWPptmoyWBVTPwwQ",
  "key21": "2YudoA5oi1KVNkxLdGmEPm8XPBqgha5zgXAxVenAWvUgkyJSF8UHgy15A5K5Txz6eqaP9xyv6nBRbwvhFXWvjYd1",
  "key22": "AkQ9n5dNpJQgUXWYPboQgd2dMRRqZeFMnLtqFNK4GLCgH4hGubRT3WD8dUnp8dZGCzbVWAfQ3eNgsE4jqG7rX7E",
  "key23": "3cjKLHr6ZAbEAYoMRkvUXPaEmu4eqkoydB3sx3hLTtumhM1pBVvsXbVE7hWmu3149vYsccNHkhTQuCoxcUcRmFif",
  "key24": "4nm6PTeHEymHGNPANTzZsm6uo1qYTiH9LZBiWNYrMzHhVtLB5as2BCQdpKLKHg6RmVzwarNgi624zvbn2SgaFzkt",
  "key25": "2WaxkFka6JYRGn3t7p7j8YoqkHs6a8uatL8F2w3H1dfxRfchy1FP2tY2GFACQvfKaUkd8wVs1nSCxijwg5bFFH82",
  "key26": "6AUpMUouunwyJKCb8v83Zsw3NqHBfABV4T2CoxrkuqQfQn12LLgD8tWxvwpZ2rdinZC55r41tcUWZuhNT1sbawh",
  "key27": "4dhEZ6Ez8L1emMWWTcXHedXC78zDZmnAa34k6GDyXzqTcFxhanmRWVhc3uNXhfPHgt5FPbwNX1oVv1MU82ttEtQM",
  "key28": "3ugtswcstRu3NYZpo17BRQ3vXNJhmPBKLtCJu6vjinV34ybsyKhFUE2TMu3he7emMEWAqjPdy9Cg9C4qo4kgEco6",
  "key29": "JY6mCThMftvc1VsN2Stc9ydukyhHzthhqwgj6fzzrjd7MiKsPqvqRBxPQiJA2TQ2FjSQ8euVELgq2iMMTKMGg8P",
  "key30": "KQy9yEkKZSXUzqJzGAoVaShYJBP33GcEDicCp4dswbAHkav7vEcSHLzi12CGdL1pfxkekWM9nX72KGgtg9TeAVj",
  "key31": "3Si8jt6BC2jo3DQfphnmU1kdC8BdAYPdDFTQqhsHxW9g19TH63xYXaRgE39bRn7gQgUeGMaWhqyLLvDHG5sTJBCH",
  "key32": "5CREPhKw4oqQu9dQ5x6ayLiZP7K29cYDNCWKy31ETAazBK9c6ECtC2fVavoKciz196sGhrnj4YJmZB2rUk1EskFD",
  "key33": "4kAATiaMqPxvtTMTWkzw2zWfzQx94D3Buo9itv7pGXtrsF3qd8HcqTzNEShTvEuJAksFvJbwAUD13uXswRFoySFs",
  "key34": "2XLxSAuzPLhzMMK2pNCBgHZhSyVieSfzD1DUSMnmMm2UN4YRetnbosxiDFt5aNqETuDcHjTYYmMbKdTa8DWDZByh",
  "key35": "3e2Kq4zew75Lp4uUtafH2ZWxScnMBt2WUWDVroG2ojBojkvymwFik3QPNag7AJaWZSagDmP7ogk2EgA8SVgN696x",
  "key36": "3Y3hTCEHkBgykFZzjccyWdz3icqSyfE4mu9Wf7rM8gLg1bKqrHwZxhZ9C65F4pDDPrerxwR48SV3sLuvh4MF6DFe",
  "key37": "3Hq1PdE169pFYJFAyFdY61STPXLbA1o5n2GSJhF9twrTynyN8kNBrbqY7JArdpDJj7upbEKN4sAdZCNmrAjJBjSS",
  "key38": "5hyaUTYibhyXkLpGfr5AJT6bH8CFc8gN82RgYF4fLJqgGRLiLRBsKMuRhxpVdeGj5WevbegmnvsLSJvAhEaGVJGG",
  "key39": "2j8J45LZm5z9MdWMdnW3Gd3UmTUzR4AMCXdcc2eyMsfiT9UziF2aPHcvFpJyCCqEAA8jct5kgEkXhBfp961o4287",
  "key40": "3r8MJ9ii7NRMxVZxpAPcYjJZZJS8Y3CZwhXcPjggDBsgTaYf9dH3o8JaRgpdriWYER8wLurKsSsAexgRvz6GiaT"
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
