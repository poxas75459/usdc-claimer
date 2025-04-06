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
    "4YLNXyBCBeiKRd5hKPL5FMfGb7q5kYsHimWKbJtZupVpodkvN4TazEEqg6zzxJuXMoK9KgWFke66FVDqFuacyDyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPbfEEsQJKqPx9hzPDnwWFzcQYFK2aZKy7Wm9LKx8eLri1kGDGon9ohzURf5o8AGXnwjTDQGHqRN8EwL5zdZmM3",
  "key1": "2PZNU6qCwmzBFTaZf8jVwinTwW2Ze9AWwmLSPPgeFJHxoy1YmM5Vsk1kxy5Mvp5NTsMyCyizKLNgtYuX69keB1Ua",
  "key2": "CbqvrbmLMK2XKc3YzGFJzag3wfakDe7MkEkMWmfLide9pDMgawFRH96ngAmRj3QAEVepfaJ2LrS1DrBsS389yvd",
  "key3": "4dUbtxVGSncJKX9i2m8YtparjbfwRfy6n83PESZpsJxoYX4KBqgkBVgy3rWfiAkpC8boAo6cwL3zfJReWEUXeDsv",
  "key4": "63zxioDWcAD4Y7SsDorA5LegBTCZHmAAgHsAcyVZUJBk3JoRwwCNVm4xr3yX97d93VMhSXaKkJrxoMvTC4DxduCP",
  "key5": "3TqU74STn6bs6Xr95VRfv5kgfnFQ5YmdSGFSa2Jfqw32ufaFe3LN3BA9r9VXyYedNCUkmMUWbPUj7psFJhshEshH",
  "key6": "37aPpQ4NxXcrAQTtXoCyBXmEP4MQvKzis14sNm5sNbjjAfTwm15jsmjseCRMxCMdmz7aEyTKDNhsEXhqJJ3wTgH3",
  "key7": "vt728ZXqU8rXpdSSzguhLZ5muaT1ezPtL7Yn3mGP5U9xXdnXkL9VgufSdHXq16wpMZNemUGqrsBE8RQENzKhm4c",
  "key8": "cudfyRQ5NKEpFHvMpzR6vnQjhxqT2uWstjnfopgaLiaPfUz2yuKNcZRvfDuw79YQ9pVoNWFjtMBUVJcepRrShgN",
  "key9": "M4qc4FidjAXrgHZQFhdXxD9AxviFo1Ea9F9X8KTktkBAyUqvazNUDN8GZkdqKAsqgEAKP1vQwEBWqAHY4ww9p8B",
  "key10": "JgnfmAgmCaecouqgzEzzwjsU8ZrkqmmXyH8bLB2ZMa1HfKq3hcTwzpZg7ZuN5dky4vBAbaryjESXdFrYt67yaW2",
  "key11": "4hERZauf43eur7R3Xbd7svEzuXdk95RfhTT5bZj2T2nP7BYa1JMKDCZEpDDt57qck8CvZiX64QyKX4RJpMhNpB1K",
  "key12": "5xtK4Hye7a5y9Rb8CS4iWrvDRi7C9zyT4hbkh8um5whJutAa1YDnAawL9ARgJ4cWruYfqNeVXQsWD4HS3PUi86my",
  "key13": "5vM7ityNswE4Thb3Z4mkhCWfu9qYMscY8BZ5b1MsDRNQ7acqnTt3hrJWpxisnohuDGfjv4yjEDzdyEABzmZ5jhC4",
  "key14": "3ddrHbNZsggy2AjZSsuobvFEh2KoM2XECjRPVz5ZU8UDLUkc9qyJ3fXdFNchNALK4PJFvBc1C2rqBBecs5YMBrKV",
  "key15": "3156k2QoKEjC8GsjjH51VwJ2AQhcmcTQPJMBQRwLC34HdGDACV3QDRAwyWB9WKTnjjpQLg6Yqo5zWZUF6JpX1mkQ",
  "key16": "2iADZj14HWiQ7y3rfvtmpdBCBtWFKLFdXD9WBEHu5NXvYe7ZqU1RnfDQqt9DUTCHiYV9uTGV2o5VQKQYpTGTm55j",
  "key17": "5a2uZGovW5XGBJaBdJfvzYBzWHZmr3jJgVDTxYT3m1yikJayszSyE27gawUiQS11wwP3rT4ggmXFPkcMDgckoxNs",
  "key18": "63n2Y3PxeuDzL2rL8NMqjJeTNU4UWi4N2JgTXRZNQ8kFDU6q2bnZtiugraWAneYTpx6VvEGYmycbLbTcTwkw8E96",
  "key19": "45EuxNRaNaZ7Djt8y6Xa8wccrMbU6NCAJxK3ypKumevPwvFTvHif4vqq5eWqB9fHwajGN69iCByhDyyEkEGdD5Jd",
  "key20": "2or1gShX2PjDEq5cn3R9wqGraixgoP2LNTQyixkA9ZZBMt8Y2sTMTnRmTWoEYSVtKPqJr6TwpwWZVWsgwEiPRvLF",
  "key21": "5CRX2tY7Lrc6u7aG6ECZAw8KKerwbJB4oJFts7NrnUkdCy2A4Ur8Q8d3Vea7rRnLZaLgKJ8JXUa4Vjwwz6Ytz7AS",
  "key22": "2rwNVs9dXYwbWD2fpg64F9VjfafmBeBqRCkAZc7K9oYTxQFsRCs8vE8A8oDKj7qauHgcLoe4EBnxby9sonYyHHUe",
  "key23": "2auTHLWX414NjosS5Z3Avvp13CxvESEzYd75xZB2aPZuuFDqGxz5vqoXaWjFznRvzcwq9kHQZSmszdGZQA57dqgq",
  "key24": "3AANJfJEKkQaxk5xeSw1dAd9qRehbXQQuSza1aobzrpe59oLyA1iFono63TvwEGMukMhzZ5A6RXj13qPcCN3cJEg",
  "key25": "UaBRAPfPhL29oZwedFCdzUdEFRN5sbBLsPjrFrhyR4UeUyJ18tzQeiHJQH2GWe6JbY4MYpQBYtZ6Zxcm86TA54y",
  "key26": "2fPY1scf1zuSXArRLiu4obhNKzHRwzWuamiNM9v1neKHsSmexSpGoP33teJDYRGg98eg9vZQatQh4szC5wqc6ZZd",
  "key27": "LW9i3WQ3JuZGd9Pdi1238FTFETumcncarhFwkEvUiXGZJPb89pimk6VYuc5zLpByrsLhd5LNnQLBfCsNkDy1CcB",
  "key28": "2DDmEWcy99ciMuEoMLbscLgwT844M1FriTszSKyXTcPpbB5coU3C5AWjSUuM1f1xQf4AGGsrVtcUvmcjkxtVMFwA",
  "key29": "5hwNDtm4R11smNBQEuKdM4tHzD3wiasWQjCZc24nME6P5PpQyiwVD6Ek9qNFpn2HkK2MHdM7L5jVtuJTrgmQoHnC",
  "key30": "N3rMzn7xN5XWnswz8PTNWF3zKTa7PSM8FZuAmcGr7NuPtPEaVZMwvowH2aiJf9WZMVrvHVp8Vbws93ALKLcAc8E",
  "key31": "3DP8gWTgEy4xJidcupz7CdnGopZf1kz6jXzjWWMKcied3E2t49c62EExSUUuZ7wZ6tDPv9LJQdaScwXCu1LXZC7a",
  "key32": "4c3kS9DyembrWSJ42vYyzJwyr2qHMVRRt9ajfCWdMAhT5YDirgrzrbhpQUkAWY2MeTGh6V1iYva9ePxRZANn8uYw",
  "key33": "47SqJPvrzAJNexqgL6KeL4kgc95MRsN1BRaQvv5G5am526Z122rCPhYfNrJm9BZ9RGDm6UhK8zogdH3aZLFegU9r",
  "key34": "NUWXdAUQrLk57b5wd6h64HvXbCWDWBitgqukoLk5u3pibwYsioh9wyjotRacRdrwgYi1C3EGgSr4TNxKKyZoM9Y",
  "key35": "3KLSZiTmCT7z2qMun9reBVMfvwwMGxuUz8X3vf79z34YGqVZ6goAZZvM3tNHNczbUChqb9w4HsVLfcjjQaC8w2rn",
  "key36": "3drZrbDophVG6JvFdCoxyVN1HC4gHdT2tEibRLJtXgdmzLkfyQ9UauW52ua2xFHNpXRELxVxGQj357kdnfRBA3Rw",
  "key37": "3PsTk5waab4qiZQiMWmHvh9Y6ZsV3SYr9fuBWu8T3yDzMaDGCgmpWQGgvRrSPxBjBYoBSVfy5N8PiC5wwom1TANj",
  "key38": "3wSRfoW6XdYP85oPtnKuy8ZKBcZCM921Gv8tTWzo4VVSMrRDBmQ4pqG1g6SCSDK9wjb84q835RD5HyQ9jF5TT5m2",
  "key39": "2B6gQ2wm84nocXb1yyRXrvMFfRTRzTQHnZj7uVRW78Z9d3Qo59gfRnFHEqJvKRrt73NTSAp77PL3CV1eLL1VJYzr",
  "key40": "zEyWqKrYWhfbCgYGoHKa3qqYnFSH8nWJVEXsbVkfxWWS4fkhraGqpcDjQpDL7sXUZz1ZSF6HujsjWrHMQZkFmr1",
  "key41": "2Dd9qoR7YuNDc3Y85in4EnbQTnh6W4uUf5C6WNk36hvtvYyMmFx8NZsQinwquzUhv6Ba9Z7pme55XZSqS6WvSKm4",
  "key42": "ZwvejCgffvYx3MzvW2GuvRvx7n5UGHni7QaUaXEFpfLQ6kvGGb9muEzBbSdD6X1c9UUd2MYDJNSCscSMk2wxXM7",
  "key43": "4tMEZ3z9TXj7fmTGqmtnK6QGc5CzzK6rGBDtv8nYay7WkXZqtCRneRomW28LB6EXLDs7hkp7TPpGaFLok6LELxsb",
  "key44": "2WQzECwZz1Xx6WKqEx6R75Su84yHmuwNUXgu2cmf5k4E6tQ33ShmQvSCZC7yKJ8dtChTEkBij2iu3bHkcK2Hz2bX",
  "key45": "kRGjzZWt9axVADKye2UvAcs8U4NnjaAWyXf29PLqiAnbX6yENhybkEb3oMmbLt5fcX86nfMVvJ5LCuVR7uttHHv",
  "key46": "2NaaSfV1ViKVLffsfcm1LSFA6fNaWnMPPtbCcmXcaJ2BWyNSk7iqs5FScnC5aV9ZcScdt7Hk9suRbX2BN8mqNv9C",
  "key47": "2Amj7XJVDftVDuMMhWgz6Y33q8u41m1rJa4KvWPwsYKKnM1APANVfwnwzAosYgXKJgLY3eTYpHphtF7aFEjhkVmq",
  "key48": "z9v3y4882spqqMCe5pSG33wdjpe6D5wbg6WyjYXce9ohv1VMynREcBE9uuUdogpBKDqvK1L1XxHqQ3dnszBCnEz"
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
