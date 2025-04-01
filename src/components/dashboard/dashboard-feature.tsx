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
    "J2tJWxYiguRajyoPboQLtsoyacmRN1pEyuSUEuLeNbstYi9sWPhxPpnbftLwrggx8mD8gGsD47CxJGcjLe7ZVvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "is52TgHjWjdpDwCBAHaQfKKmspEyoM5EfqSfQvBRkpmEtpPGEFaR9Rw6KKS8HPQ2zru8skcdHSQUrFauhRbxxXS",
  "key1": "2pMiGTLYetdJ3pLPCqurTHxqmFX9MGWRh4mTtY3eEZH1WKYL3L6s2x9uhqmKqjDvcgrWND5xgYVGv7667q7Ny1ms",
  "key2": "5hkEtjneMmzE8sg7Z6YbkQnD3vVtWpSpRquyJWBaKEyzaK6bjtGwicAd1dJXryqvmguB16mEM6goR7kjqDs48QH5",
  "key3": "5TKWbXu45VUjbGF5iY9cf6wWnUZCnK4LqmULC2JyL4Ko6bfDvciCm6EVxbX7VNtKAcZuuMqFkLztJmTqmySSSFWp",
  "key4": "2ukiNcn1AggT9wjDRYvRC7PNL3o1D2mVRYTpEZbPMxgBP6Lya44MST5n7Z6Zk5ZXZvhtfuDmQtFSdbY4WAy2KzyD",
  "key5": "3KHT3ahu5t4S1ECfe32kNJ5B7zvuShxDbDCcLaqiuwNNGtEgaTQQGxmVhjeKFGEGmActE4DS1judUiAcY8joAPjV",
  "key6": "rASmg3dWQ4gXUJp3jKsoJVyfH1z8XijqhD2FieykW36XwPq27qYaZtFEJ5Medij6MWfV1o1TxSHD2SV1tCE9yqJ",
  "key7": "3EgbiQSRQkmFwvnrZ2DVCkGmWZwrGqvhnbhxATwXWHpBv2sqYAr3SvU9RBhsPQw7E63c6m6iG5LVY199tEFUY6ji",
  "key8": "3VnsN2RdacF3WMmw5Edjub9CcNp6c2EfdXvwQejk8RnSeSoqZMiiPjsM2XVbYJcPf2aucBDsPQx5qie6m4w5kxjR",
  "key9": "629fTURkySDdbbFrN3XQRnUzqPjiyYuy5S4NKm7MqzXRKpRBZBePax5cYFwPwaGkYvEizgd8wLrHhbWncyvz3aFK",
  "key10": "3pufMrAw4A7dpoZuK41EHPfCQtHBuHvHf8HEGqz1Ngq1R1NDo2xkHW75hY9qvYDU8wRD3YYtCyoWBo6puNDTNPLE",
  "key11": "2R6GXYHKHZz4a8Td3jADjJVJopwBWh1EyTxjUyizu9TSiJneTUhdzqeXdPXkAmx3cKxtnAzTW5B3yrFhjKzSpqcN",
  "key12": "41XgQWg2BwWP1siFVVuZUX6WiadJTp6XMuz475cXLMDsjwKYaK5CgzPTHkwqHnm949Q6QG3UTaMHDdknpZqqt4fR",
  "key13": "2VXdKykRnDwU8pjuZtdGB44cV7rQUzcTpC5JWz28KgXvqc7otg84i4NYvY1icFp1xnBXX1NBxwTQm8VPVBhMr7up",
  "key14": "4FUM4oop5piCvTw9qGD33HqHSwsYsSG8Rr9TXMVtFpuQkEivqw1ctBbT6GuTrYZM5TqbXzsdkZPJXULNwVv1mf6Z",
  "key15": "4Tkq8U3WT13E4JHoYEhUpvYMBmb3iCJhUV1BYStnmLqzqurPa8YfsVU3QAQkXxcw3gXpTPtissaUSaVAumcak7Yv",
  "key16": "JmZxAGMF6mVoarGsZVBBBRmLd6PHA423kMzLMqyJJ2CGLrHACZvkNzN5rAwcKiWkXx4v5WDnmrJ3Ub2yu2EBot3",
  "key17": "3rVworiHWwnF9bxbXDQeB92JeAXBG1JMddWHeFSge1weRpMPw5zcJonXPRWeoYKjv2m7n4pkZt6ZWfpUu43AUprc",
  "key18": "ByYEefVD8QXwMih2e7qAkoShtCBMTzGjtRMQ1dtkqCyoCCjr5iWSkdKjuaa2S4wj6P261t8XcUfvKQfR1GgSvgx",
  "key19": "cftTbCaDc52apMpCgP398WF5pTY8no9boDrAEh1UFP8f6o6zMdGrFKfh2hCqqLMTLPPgaGgSeVMoAWdg7SPX6Qe",
  "key20": "4NSdrnJYTaqB5osXj3DTwfZPM7661wXGgMWVJVDsi2BtbPGkp8cXnVReAERGLZs2aX8mz6HJzwRw83pG1Lgi3Fxk",
  "key21": "2f8G16tTWXJmZpUDGTRZ7eEAvKancGfZS1nMdAsdrPe9oQK3SocfptpCbqKfGjgY8xNgk4N3z27cKiNRuFKNaT1M",
  "key22": "37K9hKesdVUUDUMk5EifmGHZaGnu1Z5wXNQs1SnS47PuU7u1W6vsKcHJrNzESvVzxZuX7rdiKkYtzD1w5PsAYTQp",
  "key23": "4b42Xz3TbWPjtGDsjfxwJZqYPqDGedg1rZWFZzN3uKshZXpEAjL5CkVxPVoKJpDQLXPSpNVbRCeJnmTorepKox8b",
  "key24": "VkDffjehwsTXDhoRYJhsfmHsgE9t7qhF8gAuRot9RHREZeKWtePGje5NwDMt5MtZMZrXLWSAcM1SE18Uot9V4ej",
  "key25": "2DcsTECLpGGiGctLHQYZg3dH4ntezhDkcQeLQCput2j8KQvE1mKxHJiCdn4aRTCtJoFhiWaRqUZBTb5439q7kgkC",
  "key26": "59NrAUbzDB2yLKryKZjPFXGRc9uifMcE8Vdssh5XXLHoJD5a8gqhaNsp98H9zqBwSCnqWVT4mAhH9rzPa6M1Hz4a",
  "key27": "4K4jgJAkvPNtntv9M1mjfV7DUQc9D4MXv7wg8Y3oe4Lq4sVv1XXFjDchHVKExyyvT8gbeVw3R4SfaaKDcNgM1mgV",
  "key28": "CTRgaUWyzPt8W8C7fwbaaL3GooB8nuAQjfEpnAGFovDGSycQXzNe2SCamHEui2qj1jTCJdv13Rc7zRmH1h5N9Lu",
  "key29": "53hnfG3c9R8CAhfm8dhjgQfbX25dWp1jCJYpHCpfWSR7V7KzNVuvUQLGPgaJQvgy6eqkq2W2kGiVKgs2WcXmBfN3",
  "key30": "D8zMa8exgFK5WYspELHzjpo55CDgk6Aji9MGGg4L3uDjevQ29Fs8LLSpgwsd8N7timtfkNQmJZMwzN57GL3i8jB",
  "key31": "4wLY2btUyBgXbzXguNMAcv1tT8RRrz97JcUPPSVgaus8uPCuoVNA1MVQrPugTnShCDYzRWcwsa9rTQX5mcM69DMc",
  "key32": "4a6iZxqHXamVaecgD8QBxQi3B15hPfY2BuE5xtkfx9EH6cN5ehYinz1cGCSVJxZuWn2UCyfjrewqGEUXEPdpZHC8",
  "key33": "5zqXipj1997KKrmCsSCAY4db1hNfxxgqSSNhjY33SasrFtQrKHkXgn21TRaoEbRWV2jYxn3MpJMDfooBR8hi6Ruz",
  "key34": "dAMrAx5CirwWM49aNH8k4SZ6JatQ3f9Ra7A79K9FVfGASNFKWgZ6GBjtZhSigQnEaZWLqBRKYySRBHer3pi1bfT",
  "key35": "3qcw6LCtjXvLkGEmf3qiBBE3Tge1c349SJzgNJrzSs8oq9jVd91RDsDaCZoDurAk4gLB2xRPZXBpgm8QSyo5LzVV",
  "key36": "5c8PVCfpgVVdZqXtD7kF89tKbWZCFguU4Q7njjDhDYf1VRNPESRieDYvCpkPMjbFuzT6asKjeaQF5xh5rKK7jZnY",
  "key37": "5Vo4AGSUJvJbnCPdgjTV2bJ5xBw3nfZBCrwEHGJD7BMQs4muLHFcGjr5WgoXKbWGwZbFNqgnrTgGwzeUWYo5bx4x",
  "key38": "5TJJkEuSHW1hQEMzUnTWdX2fNqfENC8MahwX17Ao6qu6BbMACf2mqex9QaHxMaRsRXCjaCAXz9ut8fosVc44PqVP",
  "key39": "29EGKaPFRWhgbCZWouz8YBvgjtQZChJzj8iHoHmXeXHzaG1TLxz5dmVjHvjnp5wucPhVgFPWAzKaRGYCgRugcBrA",
  "key40": "3HXa8ij3L5TGAx6LyrqtE7Ttmg74rA8ZP8xp6Px9x6C78pZgiXKyeSXEEDrHUP45PMtNLLPx5HpYj9b32ZdnoPzk",
  "key41": "4cnhHbtGa7ZaFYzzQbt9yVWPDzLTjJnpkfd23WacnxNxw4H5rRPdATaHFy59YC94d1EKPF6RbQJxsn417CgwdKNU"
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
