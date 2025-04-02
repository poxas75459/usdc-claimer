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
    "26Pv856DExjCreJqAqFYdR7dd6vxwUTpcZwxHRYZcSRne4mCLBSPnGBPUotee6mK8ghN4vmbkdymSjF2sZ27zNUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McSQVhMhCZJdgrgSyFPv8EojZupzyMax62pwvEmXwr922T62fxqPBa9QURLZ58xriD3tPSV8q8g8xBCmBDSVVas",
  "key1": "4efVXWJcvNhiChwL6miZxTYDtmL5WWqBGARTRRqDt8WqEB9dvwW3utpwCbJSe9hmHNqpvyqSkF3riDrqwYqeNtqu",
  "key2": "gMqzaTB8KR1J6wXLfbEqLArY5pVzStGfo8oN1ZaJoMdvEUee1jZp4M257rAprEx27tdZsV1CkLdF7tx43d9TVwX",
  "key3": "4oTfbZJFqeu5KWg74F8Yr3HF1bcYPTKrYZWcLh6coNhigh5btbjaLJ6MGzUKPE3YQg5K656vbSYgqhUGp1jWeFhD",
  "key4": "3mE1Htck24zLbETL3HAbBW9xHz2tbQ3cbXmEAjF7GDHth9nD1jHbTveSBBDR8Vj2SN3qCPvQPpjbQiPnRFUSwF8m",
  "key5": "YqZxaQDZ4R2tGm6tNB2zEsP96hfLbY3w9jRevDBftCd8iu2JRo69JYzKmG2skJAQxbsCTm4zDG7g88FfpohunXh",
  "key6": "far7v9SFmr1FhXw3fCuG3522RXjWEYW2ssW8JcZiQv1NL24Rv27trLUjTEyWkqhRqpXKbj4H7SWwGXpEBC3rVKT",
  "key7": "4yAe2mverVYTD4avfWnKXeY85Nw8cNcYTogwHSa8GfsHi2oL6MHD9Xy6APdeizfWXAWnHVvmfYYnMYn4s5Z2YxxB",
  "key8": "23FLwzxzmdgkyQoGznDnfSc9YaT2sUwoCrHyeQprXJTVU2cBmgbHfihozUkoabQ8GNJ1Z98ipbwnDF9heSTxSwte",
  "key9": "3BoSJA1sH98MRBQKMh6yHWaCdqLJnNAKG4WrNqd82sEdZE6emcnwWsfe2eB9DCRitU4h1GpLesKAUNT7bU8L97qb",
  "key10": "2yU8Tr63SMGuj7WLpWzBqrXdeK3syGB5Av8S29L3d4SD9d1s9h6zBPX189wG3d7eXP3c1oCXhpg2D3SkvkYb7BpF",
  "key11": "4GStJPCb9v9gbiE9ZfAj6xn8z1D15E73XfgFCoq3HigBCbzwiLVdC7QYRnsDbwDjkiR4Pk6NQvCmb1Ss4kZuXwWU",
  "key12": "3hgqMWMW8HRjYchThgrvQwETN6vLYaMzsxavtdACYnG3uWqaDwuPTJghSQLdRgxniree9vAdpZ8JevaXTxk7YL8j",
  "key13": "67fUzuZMLC3SqujgSxDnPGzBMaJr61XgEnBxKR88LTnL8rFYk6noFANWiBJkhczvoNnehv59ui6xd2BD7PUDBbJv",
  "key14": "3RD88wY7N9SMPU7yGh3FBFfPF58oLwyGuyyhq6xMgEim3LAwpgDN9csdSSEebNSeXTjVdYaezykMtLJ2qMBSGHmb",
  "key15": "7qaEkJJerfy5Qp42xRLsFSdgkjFoWP29VCL43TCmRTnWVR7qyVELyYjLJcmwfxTc5Q89mF2DupbsTApcmWGAw5x",
  "key16": "3mYcAzRMqy3ALD7o9H4LTbAv59gp3FAgyq9uwx8tJjMDNrYNrZKJJJR1m8VhH4AFaLqTyWFLNJdtbN7xFnAkMq2b",
  "key17": "5pD7quHzaVcSCW2MzrLdWKmqDPyNwxvtgzk6NjiTJ4wHguZgpXbpEnmzt5FBoUh6C9UAFEXatFKu61riGP8Jm5tB",
  "key18": "3M5axVPSWvpbNoLeCb5zFkciBPmrZve9kYTLwPvCazHNYob7xxr8KKvbCUJPqouQTnbsKsmdQXzdDzCbUGYtqRP4",
  "key19": "5XzmoEvws3kFF73UvzbnBQd5egqjt2FgX4FBJD4Wv2AjbrMBpCoa8QfY59nYzFWFSpdg3Dz2gjwECEWHku9J6CYj",
  "key20": "2cT29CsJR8BnXxHHBbgyysVHniyUsHWoHLAmXBTUR6Zkyme4r32Wr9XtjGccLwsdxqCs5SDTrtY5G1QZdySdwn9c",
  "key21": "48SCMjhQH15rDD7QRC4MFE3rPHm4QdVzwRDamDeSobtTvPPJUZPBD6Z1x3EnRnquqMT62zUDM51hrkoKyRsLZaKt",
  "key22": "62m96R39Y7CqfM1v2YZCNG9nNXHw7uggd2ZjDFe65qzD3GUwvE6vXTBoXRjo2CLNWvofnxm9aDVVE42CRewFo3Hu",
  "key23": "2pwX1unrRGe5sATmYt5saV6oX8ibMe4sZXCLrqydAxeWrutPKgN3Fed3mxZwy71LX5N78LmAUeyvVQH5pvphmLj8",
  "key24": "5fM2gL1YV275tidMZKpvJdfCZWNKXuy6zXNn1PBa6N91tVxuMj6j3xhtpnERQ6txpGBwhpwKtHKaQmNkUkZUPsHQ",
  "key25": "5zmQtv4nEzKjFYr6Exh1tHSGy96Ex4mts8GVeSKDhS8o8X4sPhSE53i5k6uyMqtTHMk6qUc6bQUUqnVjBzyZj2KY",
  "key26": "588bTs6atS81n32o83dDVMgBhXZQ2RLQmaiCnkB3gA6VLFY2kQpVKZYfSEzrSXrGzPD5PJGMFc6sQxYWWf7J6TDT",
  "key27": "2LNSVTXDdcnYHqW6hB4AXcBH2R1vNBqgfUdBhbbWzoqnFLKrE8LR3LwmbPhMGqoyqgZGJaMcBYH4R6SbSaj7zySY",
  "key28": "5VkPwZgBsezj3se9EBwAGgXhzr179KGo81GJBVydwVM9pvyEp7foG2Xd1owjwswzeNZ2gxtjRF25jZrmcEf3DWxp",
  "key29": "2XAP1VM5aeg9PmTNUH9fqRjpD7yEo8xF8CrVAypma5M3YWswtGv3y1YnnZSw5ef7VhiupzYFtrh1DFLoKMWdp3sh",
  "key30": "YKGFRz7e7XKi7KyCTyL1Bb34QLs3FPGJCZMKkjx5sp2Eq115NG7Vf13LZhPfDe2c1DKinRD6KZSJkBXPc2JeQjY",
  "key31": "39e8BBy2Y9YJXdPrzcPmfxZDSZbqUtLZ59VsA4SXhVUZsJX1mhxU4dtnwWLRMDxHmvK18osPASSYfNswKNEpBSBD",
  "key32": "16jt5ZDLhAP7Xfi5xapncBjhZ2Y1W1kcU6VB6wqqXZrbHqn8nAkPdSpPUjtAxiXdFNGGkq856PAhZQvpyUvuPX6",
  "key33": "NgVgHHb2JBffa2s1UMGmdy6Ty3avt3rMXEaxauTTpAMGZimB5Q4Yr2dXRPHfDHNigpKK5uZRYuuVL4fgRvbjwSh",
  "key34": "3NgtcRdDtg5riuSYb6c2X5x6VVNAye1NodvFsoNMPPuzhTo9e4WUVYxLsUA2KCKNtK24AqHYpbeCX8hkMeuNkkRW",
  "key35": "3qw6pR8rjW1SEoPA5W5A8Ce9Vas9sDxEoNFeh3derC74a8HYk1ZtNs9wuuqXaAxY667EJCeQabBDUQFtTKc3diVZ",
  "key36": "2Y8zPRJSwuSYdrtNcTSWjW8xHFMfBu8U26x1NpDknYjQa88BAPfhhpD9PyXXsESNeef6P8aBMqb4dCiteHJan8nT",
  "key37": "5F2raBZyGVvA3aFXtuX7QWFfJ8J5KbtgkzYLZi2QHAvUw9kTQoKzG8pvthMAnBvw3mApocjXXo8BWAsTrrj6bNE6",
  "key38": "2CVv5fpTdj9apvdjP5pK4abzTGGGDuta5ER34yo9ZLKi5kNSiPL6svkLdE5vCziR1tnN8GF5uCekX5Tk71UPakaQ",
  "key39": "2RLyfKq9B4LM3TNxdbpJuqz6cG6Ve24pL4B6MAfiBpdnjHAFcLLnZ6uUR3KcUVAWHPibybjePK6tNUHNuK8kv5v7",
  "key40": "49Fg73TpLsHL6PnvPRZL1dvLVZoH9BXYwhJPy9mj49RcpKNsUsAjaXwVdsS27fk37YTwZ755ZaNJ3GE8fBuqx5wK",
  "key41": "5mmqv9rsPVt3TZEDcnM8ZxSftykA7WwAk8Kf8wrSWua5M8ytd4bwESZK5LtL3LadqTQvK1L26cTyEJf26MPnRe5S",
  "key42": "2NgYK46T2VEPfQPCc7rny8kaxGpuoJKCsDf8NFaMigiexfgaNbBHo3owr9jB5p7E7TFyW7chbcaAbjEbxrvWVpxU",
  "key43": "Rw24FkeBp64vDamPtMbtb5JsFK8Ut7DigGXrLaqS733JdWBH9pxjNd8txw38hUCWFeJ4YhbikbEsWx2LxAYpXdG"
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
