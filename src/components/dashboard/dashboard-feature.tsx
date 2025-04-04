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
    "3vcu7J2A4o6ZpAdNx4cUknTsdnZ5dSaKYioUrUUiVs3UqeVE8LSrtSxYAGNTeV1M6VCgCrrk3owfJi6aRD2xbeCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZKGWq35UriZXXLtPEoFkHkj4L76MhEzqGQnNSC7aFH8yQqSG3RJsijWu2DbsDQwCHRpjxrhzhnTJz1vAR82DK9",
  "key1": "3ybvVQLAcii2fb97rwiDvTePAbnAdb3mdpo2NUfb5sAdhiYy1Awr5bhkQGKXxZN68vmki8XPjU8p2Z9X1qqgdVbB",
  "key2": "5XH84nthBENJeRa375toLgG1qBawde4CmhgFwbWWnTBJ9FkvS79hRC2AVBquDyr1bfSebJJVVqYJEjsFZ5P6Hr2F",
  "key3": "3fMBaWp3a2iDjxVbzzmyqSrhRGZZaa9C5HtbhwW7WENwMiKyCoLxcLiz284ZLQhY3qZLENGWiogkoDGMiH5Wn5Ci",
  "key4": "CzkoXqns4VBztEz17QkPt1tTRxJsxWVjTgjoEbWc9pMiyaHQwcN37ocoPXXA1wo6ofsesroA53wtfRixPvbDz6u",
  "key5": "3RBHmRUAVndZ7cCpz9m3KpNTR3bJvSfHZN1QE7VUGZdc6JfDX5mstEM4bDvCeQSKdXgkAQqB2nBpFxKFmS31jHS7",
  "key6": "4xp6ugD1A5NPXReh997aqc7WuKPWGkcafkkBkmjQnUETsPp8ddHKtucFABbn1fE68SrEWcw1xjuaQqMjiVH85FUW",
  "key7": "3uwRDM4w32b8brTpPafcgEzRbbsDkaZroHqgSnbVTsSx2Rjz6qJbVYuSKTPACxFC5HCyZiSp9gYUZBEEDCoHysdN",
  "key8": "4XNcDzQVpGJmKkEifM1ADqS3iEdLCqAM1cgSQkKZ5nk2wrg4H216YKhbPPgZeV9c5uuUm2z2Kap1ZHCxrfeYXeCY",
  "key9": "25PU3c2scDc8iJHysM7q2nnrqPd8pB2u34iAPcHENXom318T9LLs9HJHmJYyE2cx5uurik39TDrhnBKjj3C51q5m",
  "key10": "Syp8tFQ6xyEHdWAhS8Noy9H7Fh8Ef8z9q2A8FKFirfiPjd1yB72jBhMEvQZoyhayHMwWNRuPNmps444XH81MkSo",
  "key11": "4M8s4vNL5DuYRwvfAY4jJP7nM9MoJ25f4ReWTVskwBiKPAwUqNU2qMEqM67zSAF6jiwsH1kffdhiYQTdRHJdmgWA",
  "key12": "4ZcYQqrUA9j5cfaEU2zZt5DdA76dvKXdF86dUJvL7uZSbGWRyxzqAYXxX3iKqtdVdy2ckCBtxAJfLbD6pqfBjMVk",
  "key13": "2vK1voD9rWDdHR2aiWfxgKrU3JJkk7aryHZZfNR6CLQc3phMQ8YGaGyiM4sTbdcuNCq4oCkTEsSWPFnQfNATXrqp",
  "key14": "5jBXN7gVmg1ntnfCKXU1RtheeWtNshUNT3xnAeTHBsDjCGvpFDNpzvsqfqpvxn38PRqmEYMmh6TWdo75hcoDKY2",
  "key15": "rY65PKjYka5bfjmgvrZNtHDSquyXBCRNHCdTgu6EP8RgAZz7m1ExXekw8c2mQoHkWN288gMHCvjbPrKcZBak6S7",
  "key16": "3wnQ9dM5ssR3VosP9HREphxK1dXgJiFvD2FodSnPwute9gXT1JfyEhxA4s1gA1MB781QQ7sGywgZx7BjaX7ESTea",
  "key17": "5ETeFGJS44ygEk8xincF2w6kH9gyt7jnp1HnTRpvLUU9HbTQTDxB6Ukyr4cumCs7myWBV8Ju3otnz5Yj3S93YjyP",
  "key18": "4gbHLy2ky7BXQLgJFLKoJUuRkMKFWi3nME6hmT6Btb8NfCCTHx1DR52RnpFQcFqQGJPjtGg2eh9TQAnMFSFf9aBj",
  "key19": "3oXrEM7fUByyf97CqDrK3Y2GYVr94wUsnRwwDeXcQqRQ5jUc7EP4Gn2JvPxmTbgKGitCTW4zomjvqzdVJvknMgHf",
  "key20": "RAjqA6rXpCbXiMpn9X8VgfWY6xnh7FevTca1MJ3CxMXcwJmaL6Vx1Y5ACB2e3JzAUpK9S8ps1dG7mygStKKxnvy",
  "key21": "4br1d1m5e8WLVRkqSQfRFn2sMMAswoYLyagGSYwHkQZVMhBos2vfmETAYgJ7v5bhjctGorsPnBWsyHavLKycrK8J",
  "key22": "5BeHidQHzqepUDe8vaURc3KyuXT4RDToPPhjTNCqYyiT4V8eszsmP9PKNuUsKjztMNKmaWmu8qj58Kk1S6wEkJuf",
  "key23": "3aahJkCpS2cCSxCDUmPaQQeU3E8BH7M9yeGTRjBSwdM3KCQ5eB5XMADyaXHmRJKRHgmQcr8bRWJKA28ay9Knke41",
  "key24": "5Vfhu8KeDaDSbuSq9G7eYXNmWM11NHUMam5Z16i9tQj4nPuq7eWmsNndSpLqi4jWaWzLvVKK35c97eFafiUeEfPQ",
  "key25": "3WaJ4K27PUDxYa63YGECqSGgNQ2RfFjSiwfqLEE9F2v1NZVDsTrQz3GjUr4ds5uCw9TqKziHQRTBUfaQFfpzRQc3",
  "key26": "1qXp6RRUjCk8SPJ2zVRNwrBghzN6XgAw1Xgc5xr3qNiJWhHTzVsRhKBtgCiuPnsb5j7NVZrAKdf23mkCRRvPukF",
  "key27": "4Th6GvHQfo6hzpwfwz2WTXtWtZxXUkYEUqj68fQasqwTrQ1FPFY6vbGvUR97TPps3ryiJYsW3uc8UxnArza8khHq",
  "key28": "Gxjuf2FFrHbo8ngvC56suNUt7y8LNanbDGU8EpNy3j96vcCtdbM7ueu6pvoLtKDUZ64uLrdhvUW3BxKHRVLpgCo",
  "key29": "35yA3Uim6LviLgzMwC88Q1xShR7AABv18JcYHtJ7yJNLNW683AaKdFHjUKgTVM3LrJG4ZXVss9M8U9AKr9wZEED4",
  "key30": "2nwWHL4ocVE4AtRMh567Z4VRRBPeTDZGEMZLtN4ZeZT5JkSdGCfBt5qtp81gkAaMxyFeYuQVoWJAB2dEooRBSVnY",
  "key31": "62TdKHSfJWf3nGPjU6K2ZQjw3qgRZ5J4K3qBsF8cXJgbJBHYrn91Sn3iapo9UUuFj1uJeoW28XrymBvqTqnpJ3AD",
  "key32": "3t13DGmkJVrZ8QgrcmofeRaQS9Vvystcq9KGPTmNCPjSHC2ER6stRT6G59vj56zuPkd6Catw4eGgoEKadGWV4aWW",
  "key33": "2iDjNoiZCd9GDGNCJXfcEby3U5auQswebJhw2ACZTGSJYrEfgAwUnmxYVLPYumNWsRP3aNtbiKpMzcKNXuQjhp6K",
  "key34": "54Kt4EtTXp7yeRXqYVfacUkxGSKpXrST98FZa6CzxL5w2p6bFJ3U8TTyX9fX1zAUwyt9zkJM4hUFPgNge2bxqQye"
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
