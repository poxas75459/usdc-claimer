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
    "4RA8CFKx6D4djMK4MkLUHa6PA1FzNfPdB6QfkK1xZZbKhXjd2knYQiqrkUFtA7EHya6JkrjTBqA7WaWQXuRVKZHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zX7VMCigH6kogqE25UfMMJoo4zvaMLiNr6eTi2X4nWwFFZL99oqSekX5epxDGunevXSBS5H9uruG6fKEqfDFYes",
  "key1": "231ivPTs5bzhcxsVzdzemf2UjdmSswsqxj6nUsGuUmcfyJ3xyTG71urjFsvo7EbkPQdQQNhJLWeww3hUNsWdKn4Y",
  "key2": "4w5D5afM9khacfHSmq1nbjw8tY6n2FYMqcTVCnpkYcBwe4WZwGncdsi7iCPCF8SrWCSj33gPpJs2VuXXKtUebC8Y",
  "key3": "3ZUn9jvH343HaT4eSybPWMSgU6xNhYfsrj8es2j2pupbQefuj24QrkzkYUmZ46j2w15bdzg3xCFmRbcES6BwiLcM",
  "key4": "JEbTTyuXJbEvQPGJKYh8Dmaf3jZH743JwBo3jx8gJbtKNYnTEjJSAZsNyLY7tWeGfaVRMC9myiP6U5imHXsZ2jf",
  "key5": "4Gj9mGUnKSvkGcm6xzwgm58n5mudwM5oB2kbZJLexwNfZL18GgqjeJX1EvhUx6jA1jBWAnPk4mx3VWwaXkme6wT7",
  "key6": "29me5ySzszUzjSrepSStStHscsakyMCXtndnemNSuZ8DpJXRF32ANmULwmx2Gw1Ff1nY3gbQWTHZXZfVUkpWXdZJ",
  "key7": "5c46GKu2F33uw7B9JZq7a1H7WBtY3TQjAY6ekU6DZnFJi36yguGgKLQtYFbe4ctkBokj2ze6zXKQSqNSv8GhNuGS",
  "key8": "5Ax5AzpTrCFqpCifc6vhHVvupV5oFsimMxPtxuUUxJK7HXUPKSmZLBaXd7ZcZZE46KP1uapSVkko9qWtMkALeWWe",
  "key9": "22dC6MbGUmXzp6NomxRBcUy2ENF7P8exnQ3eFXd1VcgLHyyVYk1Z4Y2FzCKZ8s2q1tHyRymdymfgzuesRe7J6xdo",
  "key10": "4CwtAKooauy5DpUE5CVerjUF1Qb1ehYfkVNMaY6oRooJXpdyEDUy989TyccDpG4q9VnvXjadW4SZDvQF1R6BVKBo",
  "key11": "3MeTea9daVcd2ZoXrbXq6yBP2YDPQVmWRfdmgcyz9tBA9FHGi3BJroq6VTyRTPcgPZygFVPfmgnwTbVWmYCvEsdX",
  "key12": "ozRjXimf437wDpVY8rK6EUXKbwBLZzSMGBfjsKYhzNWygE22fpD5J57CjNeQ8rchhLmM6T6uuBpaY9cKyRSX2Hh",
  "key13": "2NV8euHMA8RjmqtoLZbjcyyiPifJfVdGMm1V6sAPS5kpYfSKLmd5j7xmNKJUUt6UDDoGE86m6juUPUVhbcHLim4P",
  "key14": "4w8maX95Sy3cLJVA5GUBAzX1BQmk4CHRg6S4bn7uHK536vUxUupvyeCZY8CD9u1DrfVVXU6GHV8HcZHN7UrMgFyq",
  "key15": "5ivZdnc1a29i7FpNVbks8A9Lc1VayH3vzFZgPRScph4X4DtayyuWQhUiN1aigq41sgBQBa4KzQaxb6y9bfh3d8Rp",
  "key16": "519ViJCfDV63RxEFPiYscHRJyvvNrAxtE43H3cgoEXMfAAVYgfUGAwXYDWQUo6xCwcv2z1b5WZE7Nxyq1pFA7mGN",
  "key17": "2STAjGy4sKF8jvSmFub4w85NxmTSRPnZTtrjKnUeBNoPAV9upDKy2Bp9uaqVCQTrVw6kbh9JVR3MLdDHPpDVehja",
  "key18": "4kwjLWiZJwTYWk8c3Rwk3kFNNQvcKBWTfczEUUWNcLZ1vivCQv1i23c8zJvX8y9DLaHp4y76XN6ZBiaYt5sJ6fh3",
  "key19": "3fzY7jn7qzPrisMEywag1armCfS31iLGuQPLu9rBKNQhQ8QHcGxho2eR6LR7K7RAYQVo2YaXLoX6ki9Zo794W4Ma",
  "key20": "RkmDdjXK3G5iavBqmmowzeQDgMbN8B5MfYWJ95WP61S9DuMep3YEu487DcjEHxRnJQAktBVyAN6ZnSGKKo8pSRJ",
  "key21": "SUtc8yurRAo5Hh6vaCpARpa9Rtajd8xqxqgrKBxmCHJ55yfrBy8fMXjUXrJK8V1Uw74wCFf7um9L1orVtfRAwLh",
  "key22": "3z3XDbKbVraRPEXhM7YCDTUzFTYT9iCXstdKz3jKcrGinu3999Vz3wTqYJ37sCWEHCLUDmNXbb6uYgY97B9Rki2K",
  "key23": "3B162x7Ekn6XWyxHQQpWMWZFKJe3fr3T3upB6RxhqNmqnHTvUyn9ZFzmAmGqDczENyPvC24aKLEKVkKZBjPyM3ZZ",
  "key24": "22rujzt6YhbFjPCnm3EBTowdCykXV2V3U7sQP1NLZ7cZ7bnENLpcFnyNPeRdi7qTpQJVXqfRiTAnd3XET5cayEPJ",
  "key25": "4zGiEh3HHffb9Y4BvJRvZVmTzFRNLxHT7R9bNe8Rv3Bf8YFWn3F1FspTkWr3p27oQ9UhMZvhCimNxpuFM1FEEetN",
  "key26": "2iUW9vA6dHKo1qnmxfCKLdEUujWz9MkZzBfia2ZaHkkNbY2bvSXEx1Pi9qmeTsnAXd7cb1ggZgHibfvDET9eQpuX",
  "key27": "21PZyaY74jRX4PrjGP6T6FDTRgxRA486h7szjkEPWRozwrKgB4pHV8KjifXoXQ2YxzTP2ghCbS11YXZdaRnYbk6h",
  "key28": "3quyFa7uUZrNwtvnke9DxZ83MjsZdYJVaU3HoeCfS6mi5meAuQndgLxf4fMJVUn6rRrSEUxV1iXKgPvNk6gZPYij",
  "key29": "2RpauvUvSdcqnUJJ3ZbyNxNZrahkk9WSX5AzFas7BpzM6y3YNpyitQgZKdmsffPZZgeGsDsv6vKD6HBg2kmy4cmK",
  "key30": "NoZH4tp3UVZwjw1QRyEnDBrkozHD9eH2hEcDEjrNZ74MjPoBYA7yPBgArYdqT7tKY25abQDXTYRpkBnmjhRLvZY",
  "key31": "297itfsqcF4EcW1ckuKtUMWBB3eypJ5BRFQoNnbgTd4ZnYHxnsm4V5ADDp7jtowX9a2WJ8xCNWgg3CfqoxF5KrD4",
  "key32": "4nbTkvCzcADm6kRmrU5gQx8d2NffHifG5uPvsmX6BhD8Ty2Jg3zmFNcWwibwkDwqVFJ8LSA2b5GTGWBK4R2qrVDk",
  "key33": "3aHwfjn8XFphgNmja35ni6Rw1vSqGRryw1nvFj9CtgqVN2Nj9JQKRhnnJVoA3iRVoQBjZpjJJMspTcLVa4mkfrSm",
  "key34": "NWbThwNNw12tT7kVM9RPvTGC5wnHQeY1YKYpnwhmjJ2YqYkrbSmjfa9R4LL6J1FiyeEK6SEB3gmgYECQmuvvXy2",
  "key35": "v5qkpMRhpmp3gLWX6dZ8DEJGLWadQj3uFzebwQuVb8mNrcpmA8aXfiriXqdtGD7zFZrCof74921sTMcEPUUY29Z",
  "key36": "3aXG6Z2s15WbXmWky9dWea9uGRtAZZKDVPK8A6kXLFyDWWGY9LBndwy9qoXthawQjbTPhkyJrUgvnUHHe6JKNkVT",
  "key37": "5Dc1YuzbidFN4GxQBUM5ZisaKgR8yfVjn4T6Ew4Lq915rdECyryXJdo9bbKaBrMSnMWf5vqsGjj2FXraLKpzuzhb",
  "key38": "MJqgCU3EasaTtdaYFYy9dc1eCvEou5BTpEZRcCbDzBYkQtZJhUaPGh6UMBvMa9jSbahkkaMwEyvyhCEVQCbS8kU",
  "key39": "28CeSFyyotb5KT5WTDWpdN4Z7PA2EBW6AstnoSpVCopqSGYjFKXT31CB3DTMAiSjJ1ijqT9eKu5ZCJn1hAD4g26e",
  "key40": "2Meg5nD37t6CFdN9HgtXwoUNPZ1Y6ZecDyNjqhv6vC5rT81qHy8L8Y39Y3GTz7EkKQWoTu1gVpPHBHvJujRL5ph2",
  "key41": "5fkVv416BVRXVtZANTvtdbNbAPFRngJ7Y8YP1NcpybLtfX5g2RUmxQK7XXDdtrMb96rfyWERu3bpi42ma32cmVtw",
  "key42": "PjBbpor5giqBadpmT8ZoR7NUV9J8LqBYHHAf1eUiT5DNVMsuiPrS74k8k9KfXkhkFhfj9MsbjqM5tUaFJ8FcGeN",
  "key43": "2SxJCopwBS5NaGCgeYweEUQ1UBqCgLRmti7PuMLXMKtjegJDz9w66xHhoXDe7vY2YdDLfRA5iWwxj249F7M2Rv32",
  "key44": "2KRGNtgi92zascGT6VWKGkWrVBq1CCDrx9xjknDJvbLuCfTEfQ6QWmHL4M3cSp38QjLX2xs4JFVaxRXypoHvCWks",
  "key45": "2xwaz94kbUuVSMAediK26T9esr2tL8qWd1DHofhVshrc9rDcj965aLJc5gibXswjKnFYgdKr6SjZJ5bVHLFufinM",
  "key46": "4E4tuJKKwVgbu4UFJ5E4GcJJb6AgmoEPwrKN1GoekaDvqNhLC8CKzc9FBtPmXwnoX3taavzFjFRCHfPTzKMf5PvD",
  "key47": "2TpqaeGbkNUHfBQ91ntNPvpqvaqLaRhnjKJXFMWRrGTaDcB12h82ATV4jTbhYeNDFYSibEpSCSjMwZoU8TiCM6s7"
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
