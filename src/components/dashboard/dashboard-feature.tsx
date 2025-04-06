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
    "cX6cHK3XN8S1vj5dzPTTkwMFRoEwF7Yahortg5g4rdGnmPNMDCFHNP3Q1dTer8ceCU2jwm8C89R72nvABosn96t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5JwNKWXkYWWoRJVb11R8JEtNtLGw6QcCAMPU7MEgh5Hwn47RvEric5n7vVFnexUVTUU9UQjNTvqJhXeWwYWxQH",
  "key1": "TZymtzkQAHihP2zx354Zi8URpMWPWDcZQCzzB7WfraKAxzgkSddEQZRio1VUndFVdtZJdVSyTQHexypiF7hMdxJ",
  "key2": "j6eLLau3ARoySEjpkXy3NeAucP2K9iqVa5PYUwvWbkeD7mPyQZEJYLAAMwCnd4DNZ2D4neW3iMu3P3xZ3Txme7V",
  "key3": "2CeNMKzFtesMperx2uWPDnCV7Gn7oUzaTnjr86sBsfan7DJ4bBgLg9tpCKVRNM2G5qQus7CyZEHumEewAPbjsksp",
  "key4": "2ZWvRhLpak2zUtyfq39Xs6RMSP131ByE3JQiHRmAT32uxfGontpJnhwEdSoL92Tpceh5CcuaE8ar2z8WLZmfUEVq",
  "key5": "3wQvHRhaYM2mVBoFS4m4M7GEPmscWcMkzFVftvnKLdY2BkYsNPJQFvHfhjEUvnAUgR9WsE4NBupyoFM82nzj1zcM",
  "key6": "4mKFJhybY4QiKDRPrDw9Jzb16mtLUkaFVdN5uyiRmYYygVRf4p6jgGYg4uFPRACL7vXzh2baYEX1LuKm72TS4ro1",
  "key7": "4dt6snWbie9PekXmVDMN6mB9ovkTJwWK361dahXp5CbowC4psnTzj3q1ixuymH5odJee1RyXyqxBHQwNqQhmfkzr",
  "key8": "eqNtN5QQx75V6NgoLzd2N5Xr2w4fdMA399PYxunjU5zyoy4uXGNopNJ4yAuE2oMt1mxogSp88XNM5vEHmhBsv75",
  "key9": "VkuzX4dt6KVXCvdgfwxFujRQUVkjqH5LRm4TAPaXwtMZtSwMWovzgdYnWFwb4pSKvQhiJUVd1SRFSqWwao7cXUL",
  "key10": "FECmbD59dEQz9kNZNhi6zaGuxaPj3fvoU8QWD9wwVAu8PsnaAARtVMvVErzLgXfBaseWKzusBVWXR9B9PGXPJUu",
  "key11": "3QseUSinEUZM8G5BWqshVPCkc5TYkbh6dA4n45YS6PFFkP3qag7sn14VP28renrWSfwLChfFmYTLjigdyWqj83dJ",
  "key12": "5BYGCtH9RPt96EsrKgAyM1XTeKQvt2a3gW68vHPKdXxtZJNpSeuwojbhZ1BFcuo8KxYx7RXcWeYHkraQDfpEPzXx",
  "key13": "4vXVxZ575pW7N56QQJD6fcDxLA6N9TTXCCdow2Y3P4TSG4HtmYK3zKJXh1dSPdUTYxmJ1xHgGbzpN8HaLQi7ALpM",
  "key14": "49YuAEgDVnpN7T9esmfLWVXYGfJf87G4iQMu8PN1KsrMR7qp5pCE936YwvP31p73SExiPgxChb75bpzXnUQtfDnG",
  "key15": "3HYGbcc99JB9AkQGz5J96VpNvcHQMgyavxWWbrwNCx42LfVY78raUDPMDydS8QfQwac2TJsSLN8yNTWYeah9bJe8",
  "key16": "21W2U6Wn66aFCnShYV5Lp54r8iyN4vr4X3sxGtV4wkvSGfrkgzyFr57hE6BKxEE55gKQZupTahnvYZuHnixwtTNH",
  "key17": "28Tx4j3tq7XPLbrmyJGXj3EhMaEFHobSVJ8krVUjUWkqz6jvXXabpbCZzzVZ4FQ5sKqYGpuAMrnbWoxSMV4YFRGN",
  "key18": "4JbY9Kg1BvUnRrVdAxNyX7FkWSXe9PCTE2BBD1uKEVW2DgbwjYEwS6YChb9z4Lw7PWKZuBofxifwbb6tZewTX1z8",
  "key19": "3wwLvo56wuYtVUux8PzPqpzuziL15NuQ6Me7a1ni4pjChLW674wnwLMcDrHAjUKMpBBayLtWZ2t68833MWuEcYuQ",
  "key20": "4d7eEAbF6mxNozztPX38ExGb1HrRwH9Q57GVi4DEWLtn5wWEdoBaRTm1sKPrKLEtsB9VuSGZMVUKuubeAcYhifi2",
  "key21": "3JYfgVeRviajCmjTi7bJkdvZ6Jzx66vtDovMnkALJhKXtuejzSXTUZLN72ZrEeYxpKCgUvFGs6FaCmRG81pByMGq",
  "key22": "5orKCsqe35q2L8FgT7kYoGoCQX6SJ7PqgzsKF5LN3NPHXBq27j6GbKCRqim9fnsVDNn9t95wAsLajvxoDbTf3FtK",
  "key23": "GmEshEtkXmPtkGXMJzGEwrsrS2gs3AHVQhPcp7QE2URGEyQEZVyCiWCwxJ1R3P1cnc9xZQU8cXe4DvptFrN1yA1",
  "key24": "4yn3jguE3e1bQXdSJpZcC4w8jNYQsaZ6USD1GrEURpLAWxnt1gJukkzQJvpa8SjwWuW11V3RRuDBaJjkP5NYYUzb",
  "key25": "3E5R3Z5dCiQzzuigmkQrRyvAERL4uLPLKBjAY2HAMUhfEUX91t7JEusMajtZVFETGdEuwsQFW41apHMDEvJCXpqL"
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
