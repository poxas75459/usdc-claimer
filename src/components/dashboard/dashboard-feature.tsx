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
    "35ZUKzLXwtS6W9jiTCdH79LUEEKZH6heUKxEXMzrib8G2FoFUpPWMoH5NkVverUMEaiVisjTy2Ra2tzxCSrbzZBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHgnnkS48by3bvwmkkfjNV5UQTVAj88BDRZHum5zUp7F67s2ZnyNTmNeEpFAZh38gKGPgbQfbXsX6tAVouht5b5",
  "key1": "5o1RNR9BG1xeiKzp547B9Q8s5Non7rXVNtBjegn9UuQDnZGfiqZFbLT6JSwa1BZ793TjcqudcAZnQtw6gat7ZUWR",
  "key2": "29fpU7A6fv1K9ykYTGZzD4hnw4CT9yopRxB2NV6rZ3n5gXvdsoexy98GYceqTo9x8x5hCzRE9kyZ4gHkcw48ip5z",
  "key3": "3RXvtVNyos9ZEhpuovUWnK95aXy9zcP1vrVzXR5NZ2KawvbpkaigwriyiiKVDq8bTBfmoRb4PwR6rtPgTLVB2BCe",
  "key4": "3mrX2wC6CeSiVj4qjuE3HKQQ6U9j12E8kW6fi54aGSt2EwR5Y4Dg8jtwMydNfirCbn82KorxYHKECzp5nEqYhjFs",
  "key5": "4NCAv17MuWjDXMKJ2uujvdA3uD49WZ6aBXKHKmTnYeL1F1wpXnkBVd7EEUaReibrEeGa4RE84tmnHGHCd63tTs3x",
  "key6": "3sVHo9EMmcKF3RJb7YEgj2AwY7Rq3rco84nESrhwMFjkfjsYFYrLjGfw2NrjnVz55vD61w1P8vn547525QvjdBh",
  "key7": "2mm2aTSjbyuHZMj4PK3eWoxpPJE52ma8qNmg2RGKPXY9minJUVwnhxaKVKVQx5vJmwR24HNKEjTecW3Vau25SYtt",
  "key8": "3po4zQRq3rf45UZstiMW9Po9RyXmkYXpkBYXj4Et1iVmYnCUDrTYirkAxGeTQQvsKBrBZ4BBsFTis1r77zWqqokW",
  "key9": "3zUqpWSg8rzcXJsHvQf9EpqESC2Vzi6KnYZadugURVHHWHAA6bjcWLQtmhvFecC3PBozALCLjYopQjkuiubZACC8",
  "key10": "2E6fBLbUsZiyLicNgem3pgh7tCLMn54ex4nRYmtRrAYSEPMqEx8KgvgiKVCjEHzo6Z1skpUQ5E1GqHDTg3tWtfK1",
  "key11": "wz4n7552726T65s7tE6vmo6Yc9jFYzgoSJGHtsniDcv3NXhJzCJcCksdzsqwcJ9pqVqNFvQ7cw8UV9aHCcXAW3p",
  "key12": "LchMaznvRqbUnXnSST7Mjz3UegHaAkUCpqLgnybyZsmjxtRbskfyx58wv8H8ibUzuaf35gDk2Xgg72cJtZ32sXn",
  "key13": "2kvxptAow6qjg1Y9P9m7LKVywux8UHzSHQR8ybYXfCnWrouAc83yVFgk9VjdkFgMKmrVSbwzGztTsXzkMuW7orhE",
  "key14": "5oz8KrFG9ENTStr9mxss2DK8ZSPL372CHoJZqMx2qgUswWsFFmAUJohHrrbckSFsVSwLwqNzs5uuHCJcqLTTbD9P",
  "key15": "4EnpSUsuv4vz3db1hLVzcbj4AqwtTJmXbzfaLo8gNgMqyi6qVZP5y2x3Uae6xBnhB3kwVyM43DUr374tL1UVSPkC",
  "key16": "5EguR6nUEhs7rZMpGj71m1fybHKNtazrzvHETjPvf9eLwvwsYH61x2QpQT58zDJJz2f9amHtwcMgsBFJHTbQynhv",
  "key17": "5VdjfV4wHNTan1pqTH2yb4CNM6VQ1Vkvf47XiU8qG13ePCJk4ysUb2zmqXpt5yBNXJkXc2V4CR58iJeJiyiMWzRJ",
  "key18": "5sgvgkK3fC15ARgFAXyhYc3uMV2d5Ue3tfcFhgLpibZTuAX742mWYLwvyPgxmzpdxQ7fT4KYEQNrE6MGWTTEVTE1",
  "key19": "4ogw8MytSftFK1VB9TjpPxHW8NgNkFzg2fwKx7TXyFu8RqyEVf3J54tpkD3R21NS8PK9TFac4XuKf2y5qtXXFPb5",
  "key20": "2C1p7VFyt33g1V89CxYxfeGMF1q5jfwnehsG2aYH7NDRCDPkZu7grkUbTVbcDSTEVFbik7hprzf4Lhjsfv7jQeNg",
  "key21": "2YiWDHbzeD2jzZTKqLxYWiPbJUMqn8X6aEyns9o3YEdwMZQiVttu54UegxUqntXwxosph5ExAspqCsTk4pHBq8XY",
  "key22": "4Mxa1YhBT75HNBvVhNZEKyZaKdLpHvLNRbUSxvHezQv1yy69qnkG5t27SnJ6ijbfJba4UJ7jMSEdDrzA9LYSyKGU",
  "key23": "4ojobobexuhJPjkGSe7goSCVzrFoNDSPmHAC6u45HU4aSjmxAatPwYhSfwKJDYecDex77ByGL8ErsNMoMjuLecEs",
  "key24": "4kgM1V7QTVGM9KTYQBQr4CyC5gBUjGASx6j9vEmXhJ2BEk75Zwuhb1YrAJYQNbnu8rv5nQJYZCv4pRvgP9VNiWZ1",
  "key25": "5zEbBGPGXXA1kxpjiMhUFXXJE9WgCY8HddSHL9Gc6SsUz1NAxgN87Urau6hJ3ZV4hJNFJhN2W3Z5E3NQ3cvBrRCG",
  "key26": "4TMWLky9hzV2wEkMVtUbDd7CwmhDiE6TqnJo4LndbTMSsULvekDUFqnyYpecjjioyoKnLbSV41xJuWnz86J8mW7G",
  "key27": "3vUuPvjmkokYKPCQoJZ5wgrfznkvTEuP7XTtAwrps52LgXA7j93tMuvz7ypQfgVrCvWJ2UrGWLctVe4u9ixCHuCG",
  "key28": "2BPPRSdXYx4owVBTjPZZWyDBaGcgceRdUZ7oahMmE5PYYFXmRmGZXxZprSc9qyHFhchF9WVGWaMdtqpoMetoVauQ",
  "key29": "2Lb5TAamFFNzXattPYHcT2MbmYTBDgWUCzBkAhSKpNANzqz4itpnDZRbFUJL396q8hgcc2tnXjbMbrz3ZSRBaW2V",
  "key30": "5AusHuZAzKGnYehaTo8w3Huk3x23dVDjkNnAnyjC1AzD5N2ZjwEN3qNPmBTuFnuBnrFvVfgmXcyju5YTvjgDGE8D",
  "key31": "3sFfLZry3wSXgsxRqpdtnj4eVdPwZxgUmCjPHvz5MoovBvYtz1KtbuFdpvsJEyhzR2iMmeKH9dy2xywdKTWCEVGy",
  "key32": "35H7SvACHxG9TywPmNPb75LNu8jgeGsidvkETjjEgqn7JN4ersPyg1go9WS5BfHqc791qK2WxDrgsWdbm9fYsqH6",
  "key33": "5vqmsGDoFtC8yeQuwcBuLoLme1s7Z9Bh9mQeo3NoeKgd4hm7W8oCpFuewuiNgyb6XahhKgcbbQThpKaY1nLxtsc3",
  "key34": "2TvqypWQYPfvhPSDExMZ5F2UWJ9GssmAWKKvHkBFPFqio8B9iHuL7kGkbqvhxDq3BNGuQdHHx1ry16NZHgp1s6XH",
  "key35": "4xwsPYAHqyMZHdQjkQGst9A5EwsLRZ1mkN3WKqbE2Qevv2cqEcAULNryr2KVMgJNH9LDooJTcreJxaEvRHdVFeek"
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
