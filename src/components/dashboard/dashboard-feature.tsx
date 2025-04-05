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
    "2ssomYmHpjvarHxQ9RVUYSMqRLeXwEsCaC86qkhU62ctLRHrNBuNWfAzSfD4xmZE7QnyRpvkhGth6kfzUu3HJxX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syB1McYxzWbYPgVxEMCU4V19hXXcXhLsi952XEKo1wjn4bt2c4Tks1pvorzNEgsmV47QNyZgrRKWUeFVJFFivk7",
  "key1": "5ESUUyd2ztxphEcvrVE97Zb5gtrmcmQ1uqg5Kf4Tgiu8YTRb21KQfRA6bq3PjQHvT5SFYLMWJWjLPtUo4Reqpm4D",
  "key2": "MtpmKXN8ivYhNyauJJFpUb9vXPXz7dsMQgA3xZfLZuPTCSj2iwNbqVU48jWmtWNH4KMwL2q8yHT7VWnfXBbVAwk",
  "key3": "5MDADvKbHcKJzHZeTrrv9JMxiD6mNA9JQm1ERrKr23PzQu6U51Qxw8jdMcSB6bZMXxfKny4ov3cnmLDB8Kxvyx8Y",
  "key4": "4mfj6a4DZHReAqGwYKPBFezRL51EhS6MKAbxd9JjM8PVKyYbmb6yfEcotxFTHbXyjPCRwNWEB1NUppkkDi8BLkie",
  "key5": "5jKDkhbPEnBoYZqjF6WDWZGUCVxP3mWJ9ogSawY85uCpxLoM9oE3ZZLLD3cK6uEMb62uYSuLr4wCf2BsvSY8suD6",
  "key6": "259iZqKLYwb2hwVGZjNmE76x44M7KckNX9APRwZ1QmDaTeJLBETdEgYAFaEMGg8gC3kbMZCxVZ2dCsy8xr9hPJu1",
  "key7": "9okyjC9DigJxtjHJJz18mtxFqrA37etJBVJUYEw8Ho23WZzGngCQeNyoQPBaSuQHSutXkGq1QnNie87BjMZupB5",
  "key8": "2tFBoTJBLSRGF8DCsFDUMdMJvDGwonR4ZXdpLFTaLmVwWncMx8Cp3jKufWkBfm8PSAJXcFEMgjPWeqePLgGCdbPU",
  "key9": "4BpEanj1ueizPwJjB57Z5WkaVqVkYTahvY4cs5f515GoqxDdBDRz8Jbw6KCmX3FcrHBNxBLeYu7cJkq2AcUBKutx",
  "key10": "36PbExQ86DGp24WbBxAn2Xx7buGorhngaSARKBujPsR9LGkzdA3DpcyQJYXHyS2uz7vfSrysUQcRjr3bngfpE4Px",
  "key11": "2a531cfM9SiRuQK5eFpkDqMvhJxpTuivdrV376AnRoE6g6DXHWXucgAaTo6KYYvVg83UsavvjgHrL7HKVSpvT6J6",
  "key12": "2avY7HbWWGAk6B4EYsrsa9uxCJgahq3ihoHn3kkXgTfSBZtWVCxwtXLUwVNcfa66ZeR7HnXGhmtzMgsJEbNCrML9",
  "key13": "3cXNqvGNkESivCofZY3SJBwQLx2PtpjHPTEF2y7z5erCyabT46A77wREVXN61JnhPtbCxu1X7KteM4gpEdfGT6XQ",
  "key14": "4LVWPLvvP4vTKHw5U7chXtkUQSiKo3p9nF2qWLozV6g5HWxUzrN25aekdR9FfR5pVfeoosgmzze72HuqTYJbr9Jf",
  "key15": "29nmBsRbqyAeP52t6dUvbjwZsapUJwTt75AHpJg64KuU24rUV3C3Z1TxTTsenVnW4UYsFnR7nSK7iysDspm68XUh",
  "key16": "2EiR2AwqNMpbLuQeFSp4zTfkxvqtNAPP9gkfku31XvcaRRjYuM7RkmSQedoXPHcuryy19LBN8rSQxkiBEkSaPJHh",
  "key17": "5eG2U2euiycy5Vibxv1RzduZzeYV87nvfazv2F2kXotWu6UoPvZWHxeuJh6nznxV41jdEiTurvcL9mVXoyK7oBGH",
  "key18": "3vhEZdBxfkr8ao8D2Zi6HDX2ZHJZz6ctTWi6GhdcrS8mK4PJGt6gEFosgwqyFRvThi23WnuWX1cNpuAFke69N2Ay",
  "key19": "5GcxNiW818AiUXBFbziViGevZbyafRY5kUGQNBaHeGpb2L8eaie5nQxEJT3aGLFJ98UC8WXLiWYjqGyj6rJp3ALF",
  "key20": "4RcRjiwxoQu1Cc5QZBmJq7Rs973svweLYWHh4QLJKRLkVA2rb5WXaPCVAu2aF1ReZnVUZovW5xHnGmm6KBYMt9Ps",
  "key21": "2fdE99RJmUcwVy9WA7KP2hTWw2JV2jqVYtswP6wDLBZyZrkxBmvoxnpZd7QiQBUWVgV4jeCc6Ka29os35zLwVGVQ",
  "key22": "449Z8LP16E7cbc5gK64fcQhrz89rJsmQTD26bXdAKkQtKDygbLAKKnF19YECCQrcHCX5U5cV9zQdjKAyzwqHGEzd",
  "key23": "4c1a9PLDZVLaXxFMpamnwckSUeJqkhRjWnqEdCoWWSPFcsrzAomckjSnkZxZWM8Yp83eiFSuq4ZzemLcUmi9qgmv",
  "key24": "43Lv6di9uU7JJiwn8fW66RitA9yVnKHCkKiD6QqWZsoaxF32BgdE3BDSwyFJnPBECBUNpd4oSwrxvNjKf4iuYCRf",
  "key25": "5UxktV7VkgrDcqC7NpuUTwC6a3xM5xC6UQk1Nrvhx6yAm4RZLfo5Gino8x1iS5c7NHnDcDzjUNsCbz1Z5WxGGnFc",
  "key26": "5sRtFb3CYDY7Pw8dKDEyQR8hpML2ZbxWZm23Rn12YT1M1q6Y591BCtMGbrFpC2hUTTejAw8UxbqfxpULkow1kAPy",
  "key27": "4xngum2AaLpFELiqqzHWSc7DaAAo1vqYmSXxYoo4K2FftrrmWS9asSu96Zsy3rqF4aaPMo8YjKEc5rz4xCzz7XX9",
  "key28": "2vd7SXGh5Nib1NKvrw5VAy6dsRuPeS2kRRt7xrvagJQ8iiDiwMAMERjb4AuGPXaWRJzwipmB5VxF7HgtZWYnTwNM",
  "key29": "5DHaP822MeNGczfr55396X5KwcMRAddczsav9k4Rmq68g9WQJfsFzC3jsrV9GC9mkjjqYdB8PNUg2gsWKfnE5pKg",
  "key30": "2qbeTdzXBq9QpHToiaGsS3E5moCXXXWzr1C6YLFKofiBk6cEn6CfzgrnMjJg8yvKq7hRQuuKESopGPLAZz7yu157",
  "key31": "2vXGWKbMiiCbvX1pFTwHJWmYiiEx4rcUKJhZCaLZn3kZonQYkH9EDiqYgG9XAFJF53uKoHnsyE5pNKbugmJatWfP",
  "key32": "3KxqB9ssowjjHYaFaMo5Avejo4Yxut9cvnGV6MqsbGUiHV4b6orBjhvv99zTqjZSCgi3MbFy3YCySVkoTZoaEDj",
  "key33": "2RZPw54pyFnmt2TP5bEV1H8dPJzMx8qEeCiUjRVKqD5k69Zo4ikmJWhdXvFyFZRikGwUeVE16Tu2xQwNXuLTu98f",
  "key34": "AsBFwp1WNosJFu4se6u8GtH2ZuZEiknAy2qYNMquGffCEBCU7HsoTgMrhhCRhDJjrs2sVSE3t31e2HsqNhYKBo1",
  "key35": "4tktQ6WqtjoL8LSVQzAiHqxKaehJNLRS8oLn9eqKj9fQbxAAMRe1FnGGsvTYGE1ULjscEfJzBcvapLZfPtX4iLrJ",
  "key36": "4bYvSXebtCtVEyX9C2D5yn5VePdwGPcydfNqRq8PsaVGN8U5uzL8kyoEVx6cP1okrW9W9v2Vabha3AYr2KQRTCCR",
  "key37": "2MjniuxZ2VU4phq9ketvBCZTgoSLbsRDisL9gNZPerbELBwj71kctNknnhYVzwxagLBFUwzuzsBj2c1zjt78e853",
  "key38": "5vzctQyQngKeu8f8z8GyMmWVAm5XY4TK7SNfZtbk3TikVscRECcjmbNTpLbGB3FS5gCxgjMfRBUr1R8ynEt56iPg",
  "key39": "41oXe92QSdNbYhBE2BCyakmCXdKNFJZu3mqwWvmoS4KXqQW7R5vsjRcDRgzdn6gXjPTY6pmjnW8x4tsxKjpaXgrY"
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
