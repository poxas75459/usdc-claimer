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
    "4MWAuZS66kqbq3vEGzVSArJGeS2HWai799LZu26m3dDBrdQYDvVk3TAyk6ZrFMG3txmsQzzNoX5zi6XVrREYNAgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VokBHQby3WRL9xf75zaPP3cQuvHjeWhUPcMkez6uqfa2WqHPSpv22HbsbJGCp8cdFbwUg7jkZHiZh9ULqjJESu",
  "key1": "2EbRzt2t9hFfaDsT1f4Et3PVTfM1EBFdNBFwF9fbJJFgK2WtYA3DjPtyEunQwiXEEWh5ZYNDTrYb51JKvFzTnohw",
  "key2": "4hPvHVMW5yKEQQSPeTA1RrCxr4SYSoBunTmkcgmrQbrSUru94VBkp5DrFDQMTD4jkzksZx41d4qKe59Hk3L2J37a",
  "key3": "38zJdpiyraJfsYpmpU3Y1E7ARnH5NU1GvMPj9tNinHNXgXbD1Ssn9k5fcmVqNvc4AYRJehRvdFgHDZjkYVUaBDH",
  "key4": "3PPJWTca1aNpGMvcmpbvEGjJaLwkHozdJwJVKkJp8GZ4bQKezLSmo9uZVt7QQyZTE46jaa4M3cPWgYdre4CPgoYf",
  "key5": "2nkbsWG2fp4roHTiUy267jL2HE8PZFtj1xCHk7j4D5mxTcteF1Rt1ssQRNCCo2ThfHBZ7cDLzCgDCiF9ehPG9JZF",
  "key6": "4pSoti6tmt62wjJ74GJwjetVdZFc9niEtBJSDM417sjvFvRv3EmEnjQcFuNHk53538JQxj94XSGBwqSaMr3s5P4L",
  "key7": "2dPhZspALwvSsMBsNQj2pu4cFvZL9iX4qAVUg4Q5h3Uxw5ashCMYMKPVqH39aURNRwaf4oSM2X7S2KsoR8VwKvDH",
  "key8": "AKFKyZLbW3nAP1YwaNo8BLuwWkjxScjSKPgxa7ir8Rqe8mSJCY4VXtr742dyYxLk6hqKA9QzSSR85XQZYkbvzq1",
  "key9": "5zH7XJrJY68s1oW3utrThShJGj4GB8UJ4pu3c4CS6WvY6VdBBCcMLzZrQjzBifrVAwhZ5yFDzroKBDfH6JqmtbKn",
  "key10": "XtoJhdXRgxTpA9B1JpYB6ykLsVXQHEmfu7UqD5j5NjaPEnHyFv2htRS2p7Xzqf4oLc1772K8sT7JiZ8dvpMhRFj",
  "key11": "4i9f53suVznuuJc5nsfgSJzX7bVT8j7BPCYeDRQ9FAZddxBzuYGXXidsy3bW2CTLTovfE72hF8PzQGq7sWa7s9bj",
  "key12": "5264vfXxZBTgjKRgE6VzQrexdHqXjNdgGASWxWWqMkh5CQSAB1qHrhrR17jwNgXZfRy57P4UTCHBi4akfCdDFU7T",
  "key13": "3h6thZdFJP7Ng6Z4HNi6MCSnF2AiJUjcVwVUZmUWzMD7kpyHahSbQx9prWDKeRgPtw2KRonPtNygehkB4KeYxPnR",
  "key14": "4xY344T1pJ5h4Jmjx3DEXFNz3Q5pVzJvhbUe8Bc4AsBSd9zYgkzq7D58sRiMu7j58DENV7H4VkhbvKprVvxsK4SW",
  "key15": "3RNuGJmrobFDS7mctatjZoMGU2VzBXuLVukjqxK5dfaSCSdHX3sox1v6G8zgwuoh8ktKwzLDHL6fEewepQM5XRR8",
  "key16": "3hSiGZn36xHLBUKp3FNDvxjfPPz7TDiAYGz5DZiqrvJTnHz5zT6fpbqy2dVVyvSB4J4h9nPZoPQj2gqvMpe2nxza",
  "key17": "2qMaonSLgCKmr7ojwc9AWBgWAf7N5CC2FFGfoEhSwArGkYFtMcXvNJCoKA2QKVmVsgqKVtupJEyH6Kp3522uhdfr",
  "key18": "4BGx4tMkW23U5UN3cinoeoPqpj8XfzASqk4kRduuPVz1vys8pnwkRMUyj9Nwjazu8pzCC4sv91Jb4WXaZ2wgMACa",
  "key19": "4aFYHWzcDwKDs5HD35jqaLneWyFxBCuectWhkVQmSzVwwvGb8bWJcSTveLdz66gtu5YYBmHxdE4NEYemwKG9nLdL",
  "key20": "5n1aehFyCGGpqKYgQ8pL4xbBFwEi2UxuyCtHzahE5DAkhL7dPYMqKgArEMkamijYKaePaQVNfVnpJgpFKYAcyoYi",
  "key21": "3mGjHQtYpTysN5cQTYWcE6HKyhb9uRSJkf7dqCdbDrJ2S3WVF51MCA7nYpEpYKF8Cnh8iC7hU9Jwox7Cka19fsbe",
  "key22": "4YiqWm283mWCFFp8UAp39qc743YV2qx76iHszsvSxXVsBJRZVZgtha83uaaDpqSLG9LY95tS6jU9yqD95rvbJajD",
  "key23": "2qye8Wz23TqwFem5i4iRFfPKAUfiwcUrPT5zXntjeV7q1gM9ZyAk8tNEL4ZTjGd1C18ctgRy5rnMaj8EcWFfAUcv",
  "key24": "2rwjiyxxSkcATaiKXAzHXMsfGswa9WfJou7ugxk69kNjvNKrsq3PNqSAw3rz5T1vFNuDFv8gGBbXr5aaGYu8uNyV",
  "key25": "4iGoPsheAVxLaqDspNbXZ62ZXXwbMo6oGGBtUx5DJ3TtpPMVf2mbqT16kpeWVPzvxAW42Yk7EqsqygH1ajxPMrWJ",
  "key26": "2PwiAvuqYfVkyAxa9X3Ghoa3JPTaQxa1W8Y4CSMu3tSXhe8H8scjKfNRsfZ8yDQeTzjQu8uDQTXb1eBXDL4PKKbC",
  "key27": "5dP1TsK4xtuorqDAgXYbN6Qz7rckNhQHJChcKrjJDv4G8zmeNdCzkKwddJBMYdFbAagxQJghdQj5ubSuifjdEgFP",
  "key28": "agGDVQxSCKzAYYMxv6xp6kabU79h8b23aREfNChXuEyLmbxbTG1KEan5n9TkQZFUAY2GF8DLb2zaV7zaiiHHNjE",
  "key29": "28thRRQ6pnRaXteMYvLUnVGB3griEQp4r7QLekYmPod5dmsNAZKrd53vjCv8GS5DK1pZ7zP5jYNVFCzbzAaYReqm",
  "key30": "42u1B93RCdYjnrFhZpzBGun2jMPq7QiCiSAiNCtPeh6Ud7QnNyRkgqNyU9CWiy4CZRNm8rxCpYm6XmqV2TyxoVL2",
  "key31": "2jW38dbmJbMvPM8UhFzPR2QeBkGpJjzYx9SPr65sr7X6Nv9Vc9tWoG76UszPXGU2FHukuQGXTYZSdsiE9WoZQTYn",
  "key32": "2Kkyg1X3Fg1XzTxuAe6DL3gXf8UKxoW4n64gGUuSbfMNh2tvHe1kZQxynanmc2kWAKcZJbw2S4nBG7M9iESTPyTJ",
  "key33": "3NyhZ7k9rxtRFBaAZJikfidwX5QsSE8Mn73r2hfV6oz8MhyrnSSxq9kLM4YNQoKFCM5sLYLxQuLsYDULywtaMgQ",
  "key34": "4fCx56FZthBiWXzx7Kn6nu3se8g2tgJFvcjA63iXXqAdqaL3CmgKFQmSYsTbgF9kdWLhqKsqoH7u85V9dAAqSSbj",
  "key35": "65c7E94ocwqXgdt9E4fAbXkGw1KcoGALd9rQfDKqF71YvQiVksx8XvFhxfBHuE75s1dBvuJDBXDvySVRxF4wd3Yy",
  "key36": "2PJ66otpHAQqFvS4i7tAue5c8VhKpRQ1FFbNFzkJQb39d9ZxGRrSCcrM45b6RzxsQNcGW5WKhDiPkz6yKXinFnja",
  "key37": "4AXLRnWxH3ernk7TgRrDkpGmc3btfN2iSyaGLiPTYsNT65RAch7ZC8eL81dUK5hz7AefMu6VP5GqAtavbpTbmiZh",
  "key38": "4Je8Bumf7bb2MHwyWZb6BZmQC5bpxNvGHBgnBxktXWd49kC3RRXvAU6BinJV41PHp5UVwGuwxx1HnQxvVkNYpGHJ",
  "key39": "5Usg6HpNyawTZDWsxU3kzTHPcpZ7gq9SNH71VRyApyPDYrPVg5UFCT53nB4tjKpzPd73Bxt92gimjtEatRCmjmgy",
  "key40": "TNuv7jHyK9Lz4DHptCJNJ4MU5mGmpbtRYB4b9n5V6pkFPRgstMK4Egu7XE1wq7gxhAWfKgDeq3ubXNhrbJkhzqq",
  "key41": "656ekBrQVaxFd8Yg5ryfFKGwv4mcNHeauwns5KHg694KB9zRJYkAafYF23KKG8ty1XyobNXHUheLwDaMvWcw4b4f",
  "key42": "2aVWnFQAdEqVqzJC4ZBtxkx3KtTusXJvLcYpX9JXFY4MZpokWYkZiKZJNJYcBnNg2tRbUQTi9vj5nqPxCoTG4wP7",
  "key43": "3fQEctP5ZAsGVbZr8u24fb8EaAwoEihdxXsVyGXhKQ7ZmpJXewhjAm7gVgRvA6bVxfMsh3UpJ2cZBhcc3PWUYiYt",
  "key44": "23cxD89STQdZaA9ZTiBR15J267Ve9vLGzTATaLKRgp1rHWzgpBpUXz62vPKHMpo9zbcgQpw8RuUSfZgMSUsWfJ8v",
  "key45": "4wMncPTY8kXKr68XFmaF4nySsXyMw3bnyeAvLTKhDkxUkFF1QwJ7zyWWGFZqj9jq1gebGiSHFN2GW8NxTuQ8sYpf",
  "key46": "2CN7L7dPt5S4hR2aiXN4GmanUakR7doAuZt3x2cdX7tNZiPFjzvzoLiSt5EN6fZ6VoZUwebsQdpkzrFimJMMkEce",
  "key47": "57e9HLDDtXhqgZD91wsZAU16ogBtXhGm3khGfbJyTfQQYMdNuXjJFvB6trAapHfFSRh89sDrEGjizZGPhNpGqrEt"
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
