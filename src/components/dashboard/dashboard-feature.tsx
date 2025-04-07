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
    "cKxbsNAojCwJYg7Lpw6hj2YDhJzdeTBrHXYEXM68gJAsgtKtRRtCSYkuapdzWTGp7vamWW3wtB1Scq9UB182PEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X22KeXAZ4iox15Rr13MMcMVtXy65EpCBYJWuBs9sPEi8YeK6ynrtnmKqw46nSzXZSBPMSog3pxohFrasvoWxa8k",
  "key1": "3uwCZN2UC1UfFNDRo6XuUXxmCDU4ieCsngd1QJ2hepf7HspPn7sE6jGiGu3EUNQ4pguvMQeesiT8Vc9HDHyRPP5D",
  "key2": "hgpgRLAGfhhM6UYmfQ6XsTJZC6Vkn73yKv5cPby5biWTjGpefq3JDuitVnGVJF6gHkbMAq1BdFzCZ9JxkQdrnN1",
  "key3": "5TdJbzVK6cAHfNBDPwH3U47zYsUAovojH4GBpwet5RBJmhCwcqGoiomC3pJJpdeCdh51653ACMtzS1au8sXRomig",
  "key4": "35ijpiywn2gDPkZK1CbVjghNQ5HNDypJTzGbj4SjWaraXqv5SdT73YSfsAUmkxLrz6VJ9FGHq75ScyhAtg4JpzLT",
  "key5": "5GgKdSYUVxvjPdV5gPX1LXt8tek72okWr8RHwKrawpnWHySspYVr5wuhXLLmngj1BEddr4evJfLQfhG3PHdcBF6A",
  "key6": "GL4sHBSHi8DWsYZH5wJCffDLWYbAvhyQBUN5CjAAqGWAST2RgSuNh675FBgwQsFscomZWEBGfe7wo8op9EM66AU",
  "key7": "2RsLUc3Wp2frzvYpVGHPyAe4TUxY4VNd4hueZERkvGrRvBB2n7tevVFEGXSYoTEKFP15LSf4iWJ7A1yaZN2nNjJC",
  "key8": "2V62DxSwc7Vey8H4fG4uERQbuKaVSXVKXyVze8HzpRnGF9GLr4sbpAZnYgWMKWLiJmmKPA3JTpV1tQ87CekoLH6k",
  "key9": "3KbbG2USoo1ANpBPn1uJUJQF354FYaHpb4cKGQojPZPr93pCoiNuokpwWDNVeZCAt8JuJavRfTCFJsnQcUGV8vYf",
  "key10": "2kCiDBfWymtX6SeaHmxbp9Zn1AX1z5kd1WECuy4KeZvXfE5ZinRQm1z6NpP1GxCPYxQPjiWfV4bnRDqkV3e6LbHk",
  "key11": "5XnPdrq1fBr8rYYJS9Cdi4sz8SvLzzQ8gb4byvAxXpW344HZ1VkkN7yGKaCXg3Cc2yZVpxG2seG5tUoT33NMntke",
  "key12": "4gY1NtLQn8LMifqtrTB3BLs1oBAEmg68xQwmEZVHLTAhRSnsokNCjXjjiUXCbfS3VwcyV8agCvugRn1zq1oJRToi",
  "key13": "2h6JEdzndovZhzqsnisQffLbyTppVUjr94sBgMQ7h5QsQvRXHVQ432VE7GTbTaZM32KGZ7heRnv4HxH8MRXwKe1J",
  "key14": "3epjNjXLsX99QJasHh9phQnpytzMCzBrnRCPvS7Zzciqoj2NaXr9r53aQeNkSvmkdUSg5Fiq8HWkmG5LeWLWxrJm",
  "key15": "5gPGTWoJd9rCnb8ZE64VFfv1jA766aqGyDrXpecxEkQVT45dTGBvKLZDJRJgPvqTuMsgdXYtfg8NH5nMNuDHsoPC",
  "key16": "667QsrG7Rr2TVsdi7h1NaN982SMXuwJeRqLdnyt575CrPZsUknGVh8yHhZ9EZsQdWqcb29Uf8BHUT2vwZY5zz7YS",
  "key17": "5v31JwxtscoVJHwi6UdCeFUCF3DQUYnWsxj2DrQSp3c58QtzDd7G6ifndqatA7zjzovGNuq8pyA6aXxZggEHmxtA",
  "key18": "31edQbgPWd6B7sM1WEnq7KJ6mihrcivB8Tzp1PysbTxZi4DXBDpJGcEybDRDGRz9HaXSm4gHWncvuQuypMyo56HS",
  "key19": "s1g1ch428FRxj9NxH7jr4chtBJ7ToLuWx3t4WaTy8m3x9sq8NQ6Q7Cqz4KKaAru3scjeyzmJQYfxSYzVFqNPVvg",
  "key20": "3jgLvf5Mbv9Mi567P7XogXND6odwrutfKC9jXo7Y24PNCTSpsrhzV1gSCLJc6g2io188vNAUvy2bfERgGJ5tEMnf",
  "key21": "adBFX2ZSBHpFGyPqWfGbew6BFg7WiNaRB7MphuSFBWuDfwa3n7D1iQ1X6bvfKB4eqZAir5vVdnHHRKxsPmrGpnZ",
  "key22": "3KzupSq6pasKryvFTkJkt45ZSTEE12A9FK1KWZGQ7i7bni6C5x2jEyG1ae87TrY3aY4oTvC2qaVdfQLuM3khGeMN",
  "key23": "2xWRLqEVPWC5Zyoej7gu4BCHXUNLMEew99rMGb7x81TSqFxRgHDAvkbAiGQi7aAbmaujphbNTr1W6KkVA3ESYmMB",
  "key24": "4ngxkD68nkjmhDN8p28BoHsLjV26p5rc4aJWNcNcuLw7SViTpUwrncfb9W21tk9cHZPjSmyn9ivXYnwBy2rdTfFu",
  "key25": "5UZfTyV4Jhma9CTAeqHnqXu3Hznkij9eGBpEusTYuzFjBDCmrdGB2xxsaaHiE8F4Z5mEKVBCttAQVPh6DJRovXmq",
  "key26": "LgCn6C8ypKxxpGUC3moixvtyMxftM5zTwstgdEdF4DNABSVd1B9kMn4bZFFcq5ZPU7jsStiUaFiaMMehhxY5D72",
  "key27": "1E5gZS712pP9sG5zrzP8Wf1uJu7szWyGXtcJexuf5YLFRPPjYjPBZ1a7jRTet4WNvZaERahCM2WnYbJUMe84SdD",
  "key28": "26NdwN9fCRuPc4w4H6WvS8Jx3zZ4EBRfdfc2kTZWVhvo8rCJbrWHE1DRwLcnCGQTXrUzFctLRUpvh3QgUfTyS1MV",
  "key29": "4cFk1Te7inCHKTFCB2UinmvAHwRPi4VfGAnykxgbZJvdcDMGrPStewAnKHG8i3ASstdqcbx4VKazfYz5HHCy4Rgu",
  "key30": "3egH1Pt5HhqDVEN1EchCWRC9buT38Dc5nbavQwArSAm4L4UKGsc7NJCkBMpTiKGbqbHwKwgq9hwE7UNDpzxFPv2L",
  "key31": "49URM8h1aA7qm7wsTi1ws77N35gJkVBqYsv8gwvE2Lhz89dMPrwYmg7Zm2EAcfyRPU6rM2mFKZvxzYZsjJJVVD32",
  "key32": "2UdE7pgBx5SZStUe3Cv6T1XsZnBP4yc1dHwLq5xN6GX7aGAbfRyL7Yt7MoW2BRbP1gz9mSTnyHnMFgY9S5C5k4Z5",
  "key33": "5VP9cPBB8WsxxV1nC3gEjv3Vzu8MqbvRsdjW9pgP4eZ24gWyhUwgQgc7XpczcmCy8LQkn2hQoVtQqyxZqMFo4UWA",
  "key34": "4dRRfd5MyJBmPYLV7LJrAZESWsRYnsJfsyGS7dgQsJVizisS2os5367fG1sh9bSkKw1NxWJYCRZdL87GQHr3RvxW",
  "key35": "5nCQMY1LdGCD7c2uHkLkMDGXQN1rQSpp5HgXA6FagsBvqNXMnij9qqV15YNS18DGYr36VgTjqJ1vGeZubwG1eVvz",
  "key36": "5QtBYiDJCQwBzcWFKuVAfwxeL9btyWsm9vRn1EXC8UimDpzCmxZJZMd4Hi9VduDwf64TKP93JjZ3bnnh3JkMq9Hd",
  "key37": "4kQKAdFu9kz5VSH6E1ANDt5kSGLRYusg6JWxJhd96KweJ7QMr5axNeBomuCbDSQ21JJeJWyZZF3f3HeM2jR2mzZR",
  "key38": "3uZGdFT2JM88xQJaeuM58o5opqB7wgQJEYpnEeQiwjryAiufNvh51dBiytWnxxMUULu9nZytkbL3weZ1Lfi3AD8d",
  "key39": "BcCwN8WudRG4xDD4R211fNiqsaeaqrNf81AGveHZwAPYZxMkoGfg1DVnZf1tCE65PkDqvUvQxxfXmmRpxoydJ3q",
  "key40": "24L1Wm4eoy84Li7xDWBJPQRDJotQAGqLRgwnuZ6hYKgpL3aFNcz6ryHcznLwjYp4LWUtbJNCBWPdUhQcYfKQfqa4",
  "key41": "3Czs7v415frsKzDG7GWUVjWHHV4D6FgHTvKF7hC57buDMwiAL1CiFLcFJwyotPoFTyJhbx8WQyeonW9twnY2LY9a",
  "key42": "2Yqn93p1z76pJUHAsHSyPeadvriA9BkDBXxqwGtNBawzEbAPKDGq87Zca2Z4c1A2jDYcCoEgkzXGmRFH7Aft63DS",
  "key43": "5S3JuvGQbTNZGSCzYvsYwA8T5GfN5frt3RqQp1dggDE4Cy3SZnbNAzJLgTissMpaoNZRkmXPTfSdvLURjdauD5v8",
  "key44": "65bQ5UfnHzb2SRJ7evHyNL1BeATKRegHXy3hw7FNxm136FSAfhrYpArtyBHfTvhwjZ4cHGjYgA1HD5mceJN2CbLs"
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
