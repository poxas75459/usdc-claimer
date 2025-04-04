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
    "P68dJWidCdjZ1M7aGBBmnZKCobzkNZCGa3akagYDh2njkBzqUWhtgwD15DsZP1ytknDC3h1L4T3f7REg2qLgxfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrpcZTdyLjv1HAKje756w4VQC5HTVTTkxkUfRHzEM2aByrwCssqiNMT66BSj9evrv6DPKqCSuH3t52UmEgUV26D",
  "key1": "52jWUKsKgRdmeFeuizxdTZC3i2G4W2qZP6atc1RqcejwgP7sUZckbrDebvU96KBrVg1zo6wF3jMzLQFhNyYu738y",
  "key2": "KMCMif2KU4ENPQ4HdTswA9tdKwMVEqVqbzCvjqBYUc1YPTdcgPPUD7xFQqZRcKu97QDwYzuPvQCRaN9JomnT4mA",
  "key3": "2q2g4WqCgzK6Ax5Ueq5SxjRNgdhix2cB65coqarVRMgTz2dKQdV5Vbjygb91f4ABpdrQgMDCfh9eutQ5KXyCnkfW",
  "key4": "2P4M8VMJKoBdSj7cEPygCpGq8ymRXRwYGM8n1yebqEQGrM1mc1aR6NxKoD5s8DBntLaVBsnS1xeXQ5tHH2DpVKHS",
  "key5": "4Ez7bqp38XZxWWqic3PdiPh1jLRpmAWXKC6TE5ENcnNS2cvkcxVUfBy1deT2xekn9q3ZKX7SvPfov2JWKxtcNy2c",
  "key6": "LRwySk3daLvPW7Hvt1xNy9m6xfCqrYwkvLcUE6GNXbytBp3xe9mCnjQFzFV3x1cKSh2BP5ZYgiyTmA5AnNh5vPC",
  "key7": "FmKG6ThQCMNCJZUD7m4zWiqczGSoaFmWrsZJz5jzKTjz69G4UVC33PBUsfReZRt9d2wnsgEUPE4qNuidcumCrnH",
  "key8": "5muBvuu4CnrCakvvwABs9msPb1961mDLoU7zcgBjPZ1VYC3akgntfgYuJ49wRtNh8V2zUUgZLMAbai2XYR9h4bEM",
  "key9": "4a2P4bRKmiJkpxxw5275nnVAzKTzn4DHQfLZoJc24pBnjhyCzXsbWyRzPMvu3figA1Cx9Ys3BCHNAvpiLXsCy9Jg",
  "key10": "3sRzHvwDV76JCXnancAuBWZJbsAfrm82spPqtFnKjV5Ea6sooQDChVgQb8L5gRYnzwL9jR1ZH2adE3dTot26rN2K",
  "key11": "4C64Kq34pawnCt1C8kkXQ3RYA67RoQ1qkFoGCG5xtxT479eTfSwS19wdcx5tBTYMH3AUU26sePxEcbEX3opKP8u5",
  "key12": "2TbTUGCw7s3XSxY2TzmAeE6BABoqZnkNmXKeApTFHoycutksNCNdnR16vztbjgEzZtEgLq2hEWCzWrYM6687hMif",
  "key13": "3miwytYnKiPqLhc7hJxphpSqe8VRbvS9cBW2JJE1fo9nd35iXra6HX6kWmcwihYsELRhVhWZH4rvqHsK7983rgZs",
  "key14": "4PQm4wHef7NPF7tGi1Npe41VDq4nDRC4H5een3wMiwUxUeCcbnKAutUyFZZ3pFrPnXDvLZJZYe5MoiApStLJG3Wj",
  "key15": "5kXBz54gMaB1YekvJJXyM6uH9w77QBWf8vhYEH6gREF2K8VejyqQd27eM7kkTUHmhsA54wGRZV162WBJqgcCxBqv",
  "key16": "4sh1fryphNdArvxwyjPKtVELMJc9TttTNF1YRePLsLB4n4NbbbhaGew7P67hRgCSrAzKsJ9yLmwtzKtSS7EQbN99",
  "key17": "m67qyMsX4eEuZ6YT3Asep6eFw2FuDXu4HfYMkLPduSAJj4xd4dUt2WKtECTfS9njrDMVio5dCzrp7hETRKLAWAD",
  "key18": "5Uaam748u1sjbvKSoHeCe1N4Vr5qSo1DCzGvNj3LfWTHTKCUaGLvwsZKe7tjVXeBLDoRyqp6u2x1YqWnsMZPuiyj",
  "key19": "4K9fbXy6pNRiFLXR47Whguday3XwgKCXb1fhhvvJbyU4BwZRGHgMuAcota6Q5656Nfo8baQeewCQnKpxTyVvs2rJ",
  "key20": "44n64Rf8SyTCBLx3D9fzdFEuhw8ir3BibmwiVci59ZsDbS3LbyQ9gvUrKxZ2kirFRr92R7VZ4i14rpNCHK5PoNrG",
  "key21": "4knW2pGVVoqcpDrsdHKDzkyyz7Rw8oAsAfq6Do9gNozTycHdqWKMAu71hHdvkXKxHAL8KLVQ8LdHhxCTxENAa8vF",
  "key22": "57wVwNdqNVCo1JYoV67A7F4LT54GL88dktXhyigtFmL81rcfLeswmi65SPCsKdbPGFUTiQ17JJJzfcUTfNN3UuhB",
  "key23": "4Jh9anEdPLvCb3ZXBFgXVSvud9UtoyL4xdPRu9u87PENVpS1S4vk4B6T2v4Y2rWzi5RuLgfbqkN64Z2M7ze1j2Fb",
  "key24": "39UsLYoaNeU1p4WWU9VM91KkZPq1BMJ8Mi7NNpMbGJfngf12S9MDWDYWST9yZtd69NEm9LjfZ4HRK7cHNDs26Nro",
  "key25": "kDdkkiXzD5xVoWhEN9cq18txxvgRtjkvGnr4xEoYhwa8x85gJMsatkpPT8UWQ8a5SrwZPhCDweJxEkVqLnM5FAV",
  "key26": "4VuYmcnN4tZ5ACqRcbpapg4cWj3kPN62FUSyaL4fHedgH5CuvmKKqtrTwqSUvdDaV2KoX4sYTCo8ph2GKCjy6Bix",
  "key27": "2BhyQgqro6adnvAQsMotERPW43MVospkQAR1GaWUM3C33UoDvXmdqeXgL48rifnNqAugfSVhu3U72qcHFfnrn4uP",
  "key28": "4ikK9dQP6p5BAZeguWycZeBEoXaENzNsMfRpjk9fWgMS28M3ptqmwcGLt5VJnWZoZACpATFAdevmVKA5YVdV8ArD"
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
