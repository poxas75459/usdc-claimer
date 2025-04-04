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
    "J4QFyGRrBTzF9setyPaRNRggA3gF3piJbxp2L72bmoJRYQdGZihj5HJyofUVkgWvCKEMfMWD1tsgVj3hD538FH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkAxue7vXumUmAexFKYDdMypvdqGJ4YLf5hRvFhnKq423XsfZJbjmJddvP8jex8qwi2D8fK7ZaVQEExp34phniN",
  "key1": "4YsQFfaxh2V1cBNSiX7TQFdYzDe6oP2EEUQVo1ryBUDtDvc6HBDRKiLP2GTJUn74MjEA5rXRKcfGex1AR55MXFWe",
  "key2": "51PRqhFDVXmHshCZwmj2gAZWoT1TU9T1Tk2v3WmT85uketkxDLBQsb2aKN572g2yVzXdCgHZ9umkv3H8uCYhqwgf",
  "key3": "24v7CR636bPn1WdQFieNB4mq6vTaWmhwMds49yLFmgbKxsWQKQyeJgN9yu9jaLAXShHaaYN1MxhdpwwvYGwAkMiX",
  "key4": "5mkt8sTJUgy84u4kxWp1hC4Zn2wwPMsBdax1ciyDnsCxHm2ena7vG5dqU76CDjDR7rKbgrBxZMRjnUT3jWYha7aa",
  "key5": "5MGRyro7UVayBhHcLP9vPcXZYau3keNmCfg4JoTH8V5Bj8YAZXeCiqw6SdUdAuX7QErfcXWxVtFLcWyCTPBwq3Au",
  "key6": "Wy8mdv2he1qLz5PMy6H9ffdeYRw6PN5qHt6fPWLTuecLUBGfPjp4suQTbM1561RN7VzUE5AHZ3iugevP5E24M5n",
  "key7": "3wvsB1vU45DQTH7feajhyRk7tcS1Whzyjvmoj5DAYP1akXx3oDpGgudgJTNtFTRMhMzfXLQcwG44Y1Hj7qKbrfM2",
  "key8": "jQT75utTgkP1tqabH1NhkCm4sWn74pfgPz7nYyCFJae7kkudqcp5tQ3Zus1czauktLDcMbxLaew4cEE2LYsjL6a",
  "key9": "EkNiap3h4uhwGhudNmvsDQD9QcQDPEWtBYgumGhawcDxHresjVVrxgBbjbJSfp991FzciP6mv3RQYw4DQp9pEom",
  "key10": "4i9P6NsLEj5sYQcKgZW654RkoUqTGAkU7rAAXnrkr2D5yeLe5emNwFUH3mw2u5RUJxPP22Hnn4rXrL4qNZzpfDUF",
  "key11": "Sz5q9pJttqUKrx7S8g6GtvbQRMmP9qqRuBF9z5oGt6vyuYyXW86N2BX6iEyfpzgqCHbH8gaFCujaqCyirK7YzLp",
  "key12": "29TxWwiPwYXAawvoYiWzaE4wwCADjb5BeCyMAvCeEBhLvEhth5RMJQURrjXPMUBgUBrkxPYQUioDQXEYhXk3JFZh",
  "key13": "2t3HgF3aRsazZkwXQdDVqs8bSyMPeGofEipY8ottCrRB8UjxaZsmz1QagQhuk3VAwxLxXa1Qud5wHUhMGGrRM5yB",
  "key14": "2XaeBwZQ2wMkfQAmm12UUx7jYEoeZWQgkbXPdJCXJQkEdnm6yWR3tV2awx4ghdtcPmL5FyhEWGTDmrLtUuDeQCvy",
  "key15": "4vFNSA3QqBwE94i4WeTwoQjqfwwoap1fpe9vF1pRpvytswsa9PDSwTFEPtTdpQvkYQSENbVuLeT4KgMPoM3A3YPr",
  "key16": "2q4gDXMtKeW4sfDAbty2XnjgKj96LfK5Cr6jThRMFjzcF2jMu8QeuW3g3673M3dp8TX5JWbqRtV5FuXA6L1yo1gf",
  "key17": "4xtZZuTwKKwhBh7A8YWjjxhyJDaUzkeLgtEQuCQw2KnqN6bKJKaQg3XZ4K2k1qpfMTGVuaoxqCbmctBunzHu7Q93",
  "key18": "4nf8uzgAJCSMBpTTy1ngArhrPL4yL2Yc11DdCVozcDjw4mrhnT69H2N3Qe5TxgNQsN6nWSsuKzcyg4ZGBfSSFgoW",
  "key19": "2za95rMBA4TP2wHkJQnCmGgx9kmDm7UT9dvF2sEfbKT2HZ2KAJrY4bpcQPTZPFUveNkmxx7F7SKdEBU7axLGRwMp",
  "key20": "3uTrXyjApdN3nXAEbykT5s8gaJWjeNwwi67XyEqE3L5aA8ZktG5VPDtZ7aXzN5no6gmcG1mMjuCnUUmdcQW6jeHw",
  "key21": "2CjLsmQLmSZtM8WVKQnjMGGiSFrF8rqsvtZZwfJnM6g53VaP32xmqsMQaTmncqZPNZ5z8eC3ekgTaiv3gSUjTsMW",
  "key22": "3pYgie4sToWqi8ijLdSvKtdoRGWoMhRqrhKwPzAU4yqZr8DmqyvCBxjo7bhFqrYSendXU8bPNVYT9wSsEmrHM223",
  "key23": "65rKcA8foyFmxJagCSaTjRR3NRqh2iEjA54MPjCNR1tdFPbfxF19CHrGzUFPpUgpsx8F1EXZg1QK8jMc5Fy4zQwB",
  "key24": "4VnkeqynKJi5xQJJdTb9WJ5z4yhTCSoT2bBXG3xVj9XeCGR5czU1wPs7ERq4XxPDjtKP6qRmxvPYRSMdghvYPEjd",
  "key25": "4B8YmBYUhktgfV2hKkWeBwfDfxTLUyGU4ehqeSqwvYFwfomkwrKWMuXcdd4jVDt6HvQ1XUZG4uFgw8AaBu4txshH",
  "key26": "3dwKcgrZFgeupUCN7kFXsBHRQiwmbxRC1M6TKHwGaqv71cAsruat89QDxHS8Z12ZVNMwQMb51cEYQQpHxpv82A9o",
  "key27": "3xYNFYopmttXuGVUp6aTesnFeJUag6MXLezNEAhrMmwa4z2LygmAARQRnGyE51Wa4YER23H4F8Hes41RkC1T4sj5",
  "key28": "2wrUrg9e2Zh4iq55uagmYTqV7LooTtSCheHCHGVWqt1gCj2x1fAktfYe9Gds68Va1LhGpeVfSSd1mXYCmFHCVvRg",
  "key29": "2RnaRhopoRbyrFuQfHMVZy1Gbtkb6FEtj8QTT5ufWZCFpsY5efQaZgfyyDZ9xSYxabqUDxSRmxvXNzfR3Ctu7MC8",
  "key30": "4BLFCn3ryjUTrPHYjfHi4mmmjtnnkaCAN6LabEiXdmJaYx6xbbJqKgegRqr2Cojampq3HaiF6SQuRwamhj5SyPpK",
  "key31": "5be3TXViW2K33w6KgV1Su5kEBFEkB253XwBaJaDYKJNYRBj2uxn5UkdDxkpJgxMR3dyifG3HvLyBbPiwuwvgJaNG",
  "key32": "3GKHUaRwVR8DoFsJ9Gz426dVpd6Ck7F5PqhfGXTo43zWw9wNqab37Nj2eZRPJKuugnDahW1U6jeX8TqTJziByXLg",
  "key33": "3jMLm7XQBHziCQwRRFjDUX7qLxqfx8ukPpEz7xchV8e7X2nKJsoP6Rk9d3CHpRxkKdcLRnR2fWE6mJX3PpEij8Lc",
  "key34": "2qhLVLAaiXsz5WrRdptA12RAtPSkcv8uj3sRvhifLCfwXVU4uF1jCYi51QqZjD1bCzAEPG3iT1zyPWszCxze2L6K",
  "key35": "2fbypJ8FM4bvUa3hukoBtGMg27QNZCoE7KX9bNvQTUKXV3sP6KftomsS4Vx4dWVMCsmK3cPmffP8Qp5aBQuZwQVq",
  "key36": "vyzzRFsox9rMbz9tg719rmCVgMGqwxiJT272zVsfhaew1RCPYHabM8cxWy1YKfA7EpQNmnFy3AFtDynHps4sApN",
  "key37": "5WExjWorWTXkH7HwQ6rrDjGRgWPXnomN8irZho6um9bLApgpR9uMkndZZyeXn2ZMNgQRaYb2kxSssh9LTYtFVKfZ"
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
