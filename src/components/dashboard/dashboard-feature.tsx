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
    "2NQTVkaMBmzrvpA1nzsfYypf525M9msgqvYbhzWLr7QumvNPXqPLptMkJ8jWwSwpiDj3FU4Y9S9Mf84PKfLE9rcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2PsP79w3vHC3YotZrrdZTi8G5cR1swHv3Mm1iLULDwdZtT3iNrrmYxx67UFGKN9sQTeC7juuJbKiKW7nEtCUsS",
  "key1": "mg4HTsAexfVNagAqit2qJhne8VZZMkNg6yQp8BXSHLoS3BFzKiRNHzeuWvDsUf3r9QZ5Av5D1fnRDGPxZPdEyzL",
  "key2": "275wM2yv1f5PzctxdfVS9SgfWkFRgQ2PzUyQmfcqrvGP5ri1ZAwbhwY2jNSqHDGssoTktaDdt5YxcnXdmdypqmL5",
  "key3": "5VkDFngLBU1RthYDUnNiiMbuX4xiVo1X3euNJo4aXYbVxGTEvq5nZaXWqyXMg5JPhmUxwB5pw8M1xQrWurTAXDHz",
  "key4": "67S9d7w2VLx6ocVm8h4HpKz9ZRSuXEkxwCvAAHG2hhQwWUDHQ9Pd2ZBmiGU1n7w54w8dSgf3HqS6ZdgV6GAeBdDy",
  "key5": "h7seicaokn52YirMpoTCdtkUG6ANbSjuwDLKhVBrS8vLCnHt9JnPwogjPBmiUMNpKDguRQiqrPHFaFKG95si5DA",
  "key6": "YTCpjd2BGJ9dc2rfuY13XHMZ8fHaRASGVNNisiDRtKqaBMN4ZXabiNXZeD9r6aDXPzHpNscKf5QvxuPJJ9JpveN",
  "key7": "dBKjCXn3DgcT1E3WJr1pdSgm9SdcCxx8SPVwFeaQVtK7yXyWRCkfa27Jv7pY4AAwK9tSEK3ta9Drbe6AM1kZfAu",
  "key8": "5XbttDmBmB22gX1t9LZyPctxPAd4MBU9BGc6tyycCm85LiYPyf5Hy75tRrzFZKp4Ke8WZeS5Xy8GJDEi8Vyqb8mA",
  "key9": "96hFn8J1iFQLdzLzKP3e8yKULebd1WXUQSs94Rnm46gbvui1D6xAWKZ3Gbx7QHnLwbnzQe4HBs6Zp7aYfSNacKv",
  "key10": "2PZKzLYABxEaYFkjcFddQHJMN4pTVNSf15QsrhYy1u4UpVLHQGCBbf6RgKXwUw82hUSqe4sUAcecoM7f2NcshYZm",
  "key11": "5fnTvXNu8gRsdjd5NFmJD3PL8Mudie679NN2AfRdwqXyBsPtRLVSeu7aey9n9DNYfyztB5vR5GwweVHty9VzBQsf",
  "key12": "5vtT7NxdT4KufjPWgKuj2h5SNEygdFaMoqZahmKWMuWRAAophZyWuRBEFeY13gFGU7yj2HtXN2zBeRnN7dRgRbVp",
  "key13": "2f6NaUcba6UWE2jEFQpUrHupDQKeNR5ZBkQ8wjbvY9zAPETPh7v1TiVju44Gw4vDSJ6Uj6Myhdzu5sQp389WGLbc",
  "key14": "21MJiDJAi1BvX46wFnhMFkJu28Pwrm7f6LMRk9nmvcebxarVYfGK4WE9JGN3EbdhMMqUyozFax382LxqkE9jq6wR",
  "key15": "2f9UocSWN27mpEDBMy91zQTubhuXaLZTkavWYvfsUKnbkZWoZhto4m1kjzxAjzuPZzsZUFcn3wxh7vzSzFPmBuuc",
  "key16": "64VkDMRAroydAd8RtZZYcofGNk4mzMEATGZm1R4pdcL9ed6Up6Cp7mHuEGcqHGWVDXzMWcmTmg884hv2coKw5oK4",
  "key17": "29cuMBb6SZWkTPzBZycvT7u3HSGNPws58CxBYdyFRSYTpGn7wGipHr2Ci1YHbdxaLbRKwCjZvDbwm6DM4rkdxDib",
  "key18": "5VHmoG5R5e7BJLhebZN7xQ5wUuvRE7npKJxFc6kWRTDyqig58yNzTmzqwWXJC8XnELovFAWZ4p7656cGgAHi3P4R",
  "key19": "3qkZMh9hM8PGJxXfdtXZGxjmCZVjYbWDUtriSf5Dqubvz6KKLGBxTNwgRRxNpvHZ6tC5kdkvUDBSKKVGh3Ju6xgy",
  "key20": "4tnLTcRz68tv9beLLk2bxasBPEvy7RC1jdetsCLrb5AHbb1QDgChwWLFYFwrNyL9gt6tZM54wHUMZ14SQFYsDozy",
  "key21": "47Rq2HidGbv1GHTVyrNVZzvmH9edkE45KFMHQ9Ehqr3E2VB7AZqzAhegBTn9fJ1Ax6iEEXjwDm4LzAGANAxCC6bv",
  "key22": "4b2UgnQfMXJMENXFavgQxfe4QbaNWagoQg4pNzci6GBuZaLk1hBSXgvvJtuTqckAZfufBXmXiMfF1qRohRJ95U7c",
  "key23": "47m7KuR9g9bHLKANDm4JURUj4bq88PekRGVFeQWcUfLcR1gERvPu9d3jxJXWthY2DEeyg1aRpxrVYSw2stvptHxX",
  "key24": "5E3G8cV95iBMJJ9EKGGhx2sYQF2GhmjdAfgB54kBcXPVa43j2f5LgXdgiyXbvUQqZ8VJHKm5AFHKTztTEJ7JsMzr",
  "key25": "24A7W4yxAkihakhf8DuTuRCxf5wrkNWmdxACYkA8o4U5aN1Jyhg1HSbvHNWhbpCw7YEZCWGP2TwvcDZNjFf8rjZL",
  "key26": "3XTAMhebwVxF5n9aFdcvKpLJkJt4jsE9SBDefDefHyGqofn3whN6Wyd5JEVpU8FpFWxW2kJ9T2kWs9igKeysG42e",
  "key27": "3um3HjvCq22qGGPvvM1kv6P2BX8wEXnNYqjFWpLBVPPsnpjDUrGF3LMu5YcoCzpBHae2dyMbKQneJ9q5rBZNwQUD",
  "key28": "46oxiq1FZc2mTn7rwdC6Ht6DKaE3ZCnLE7WyBC4ytNzcuF9arQcyfGEfT4qomwEAF5gL7EyNoEhTo23yqtBiLiJJ",
  "key29": "z165n4EzTJDcMvNPNCGVTrz24wU3qoTQzdvV1g7My3QBEr6EsGbvn1mLVB8xtPA5LMWiyq47owv1E9XCvaus4hC",
  "key30": "EXZRR6tCyePjeDxGzZ5du7M4a1sSPcZ4FdH8NkGLqvfyKjrU5AARv3fGS2m4WcYYazDD44zXGQZJEeixr1L7HTH",
  "key31": "3NzczeqiKb6nmWuqM1QAr2K1KcNCEWBTxGPLXMfbAqxuPKxywrSQT7rQ5eyQoYdiX8rgxdMk9JTycLXKijTZ8UmW",
  "key32": "X129P6Wq7fQM6awMkaFs3rgSFEiJtaD2Mwi2mKgThcBGrSyZfmAfSJFs1HDKELtGnwzGgT6GqwbPd1gepdFnrji",
  "key33": "KqBThbanLWxAZAiQ6RQT9CvQgHbnLkrjoSxhq8ok53F7WxJBBNKT9qBTNN7N7xYV8WfSMCu85mMFABfdgxu1cr7",
  "key34": "2DLXVxQNcYraqitRvXcBaXWytu1KRx76yEgASt1LjjdqgcxPRMD4FNx4ZEEVrG28QXo2sDVTUcRyk31iG7ovmp7s",
  "key35": "3wnowcRPDJP5WLons614XhuL4C4hhyJRNAkZMXH3qtWCFifEva3hN8Je1jqjLtRvvLeNqto99ZR8ZuBdJ33izsj8",
  "key36": "yjfywvSw3M1Ka94xBEQrxPyBimB6cNykfavbe6eMssim7cJBTgZXwTxVHWrFJ8fJDad91UKxHixbMo9a46rrN2s",
  "key37": "3qdZD63wE85e5yPResiL6kYz2pLzRbn5BZmbXKK1vuxdAHkkW2GN5k3z3eqJqnioG9GmPrU6PX8yo4oF2yEW38Cg",
  "key38": "2QCxTvV3VziLFugvTjgpSSYnNSySaUSYw2eTbJRb8cJshGtPNimhMnL46TLmw6zYjxsyAjBGKt2PxSJJPPUXxu67",
  "key39": "21LxLLmVi4eCv6Rd46Z1jiybAhSAvYgh5wU7bj64DFytBNqAd9F4bk6xWb32EVbRSURmczTw3VWZ9KRKzf4FUyjk",
  "key40": "2tg5jY2PWqMGY3ycpD4V6cDphkD8ChcBhsHukfBXPJ3PM2JTCL95sgJbWacARpY8PZRjXW7Cm8jZXFoJMgA3jndK",
  "key41": "2A9zZRV28X5XLY3yr86b2gXCaN51SvKMZ5kim4QE2SBoSRiHWy7ZfS3UEixTc6kT1dsj4jeXGMYViLDe62KrZcwQ",
  "key42": "5425WvP4rkvVRycBifMRGHZCgXTp8h8og2Zmevcgh2cdYZVzHJqdBLzoohkc7Rh3aFkVWvcdAZqDnkDW42fBaP1r",
  "key43": "5VXeRHuMnugtQNKnLK9584r7LxbN7BUiTMAp7tQiTQuUNAhipGPGD8mJuYG5htgJpYDX81o1M7p6qg7U9oLkiY9n",
  "key44": "4boguPMrSca5rPsmq2fviiuyi1Sf19edBr4nZoeaunDyPt6ZgLMzppGwYQ1BBUUmREDNFH47s2HKbDhimX612fN4",
  "key45": "2MbkkLVc7SimZrUS3UsusAtuNJPvfLmsZSCARQ7BMDAbUnzZehmzLMh84yvfdkjaH7WjtVxGKHcHJbs9JdZpHojP",
  "key46": "3TyqdD4R2VHhZYw8h3ep3Eqzx5VAM1DhRUJVABrLjXpTZ6uDRwuZMQ5ves889KfhRbRjLZW16tvrLvDWqkXLzR7g",
  "key47": "2VcRuuQh6eDYDjQgHCV5PYY9t7PYM5iZ9CDXvvDgmvXDZ8H7tEyf1jg6VbMyF2Mcn2Kq9mUkG8sBmsrdF4FUgU6E"
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
