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
    "3wdwYZVdUcS7RMjBCAdDd7jAzQhBV86vgmn5Yxp4g2GaBCwRsr1kyKiNwMD8azwcMwkJQhuk1TrwWRBHjjRpk5E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwR6VkoFFU2DmHDi1XLwF3crcCNo136ngCw43uT36r71Yj6Ca6oMnjeqVk2HLWVMWEzyBHDTA2E8orjWhWZHTBh",
  "key1": "5fCu5UifwGjXatTcoTGa3pyu1j8dE5KfujqD9nW9nFBAh5KqsjCPAFqzyJ4XHpSjPK4y2tojvLErg4KxawNC86db",
  "key2": "5JTYv4G2ET7UkpbGd99ckfMwWRypE7t7FrgzGU396NkPM527n5zmKdP94fSF1r3juMQoBJFKfuhf9sFuuYq7FTuS",
  "key3": "5fq2Q6SQGzNkJFb4EGLLx8pMXLMKy1URNPkJDzBfb8R9RYB3qwst7iygQQpAfCnc9jiNDqDXXuqFVqQMno1HfDUp",
  "key4": "2hVXbqxyqGzYjeLM1aVVTuH99LMVNSotwSNRJqpuGssh2A6WuPcirpC7aEuJyVpMEvnPNyM7o2nPPMW7yEKGRypc",
  "key5": "5q3jb4WXs5WKjkP8v9aHqp7DNZU4jcvEJthZu1jtz7GqHFRFSqH8qe23WeVyGCTtgR8xMgY6Fc6MpZR8uXwtuVZ7",
  "key6": "5yp8j52amq82hBqrWeQrvzkTSRie1ohDUpBpZryqb9PCgppLeRoHo3UeeiraBGpmfz4UGcgz52Vs55BfPQv4LCpb",
  "key7": "4MhgsbS2Z8YfXoaSitHYF8xUnxQx1PytLAAvMpYsV1nuKe83GbrZZjmXE5EbWPXTMdeRuQLo9QkZeBoX3c82HD6o",
  "key8": "4PeKj7TerdYTGUYa2BsrMJKDpbBtmcRU62BUiXxU9jvEQ4ND4YMybf5Gvfw7Qcqnb299VkjAnBbu5E7PtAs48FN6",
  "key9": "5G5Gx1vdbi4yr7u7wN9zriM3cHxQDBtXsmWy7izB7uRuRbwD4gFYiFD9DzDnuxqRgrztmV2kWPRGFtpTYcLrZiDt",
  "key10": "uxpfrKCQGJ98Zjc9qThAz8pmb7hZfBBbHDjMGNWp5bhMyhftmYvPaiT7RaYbQXyPofkK1yiRV1zrc8H7eD4dk5T",
  "key11": "4az7w5M8t6zGrzaNjfkeyEQL81Q3ejj6dQwWvV49z38MtvkpEcbz1vgABGpNgu5XfR1DuDwsDBZ8F15rZz8PoTgE",
  "key12": "DFrdbNh1sNYCRApst9boLxJPsKFrBGnRFKZY6Vy9PwpuyxhQPvSSk7cHUQqrMjVvoQmN1R8HNzYmhnJyjECaZAM",
  "key13": "5FpXr22dkdMWn6UiVsVaC11uMv3RNdF1QpLEz8Wd9zjoJJn8hwrZW9j9maDxD6udumGJpve1o9SpS6wLH5QmB1m",
  "key14": "2kmjGUcbAaBvTRWDVNyfGzz9fMu4stCYqnjmnWPEwkKLQ7oBzKeot5zAjSke5SowMBoUMsLXMKuEAJaYWH9G5B7v",
  "key15": "2qt2u1HR29Pzj4RewBuzC4PfKLwoTSGYZvu8234Jwvx27kNByqjkNmZ4BcNH1SWgEoN2YCmVdq4s2SZromuznUia",
  "key16": "5cDhrutmpqNQnqKeEokEutX5byZtGHB3otEEoGXzGckwW7zLJogtJ8GZYVr5DAXHUD89yndhBmWqNmHggL8pWMyH",
  "key17": "3sC1dZ6iGrgkyvUoxYWV78wDWmZ8PKYHe11ky5ZdfgVqA36LZKGoyfRtKZGUGd4NEbv7JU9ZL8gyMSjaeDGwNQKP",
  "key18": "5HvQgUAyJpS6peSdZg59eBNVgEtPR1H2oEsyhR7LkKQxA5GmELctnRPpaaXRU9vwrwLR9udzk6tU7hT3E5Rk2imA",
  "key19": "6U914nZxYq4w1UwkZmhYxWpmz4ghoSwsYdVgNLpCMJJpaU9wvVyTDurAGuiyMgYudV1bU4pk3gKe7FoEMmeyJ73",
  "key20": "Ab684uWsDJNAnyaVsWGLUKzws9yfyVW3yYfGisW3Napc9s3z8kXSx8HWQum3FHUfv4jpDpTc1yohmAaqa7zAext",
  "key21": "5TB4hCZm73s262FutzYxvsb13Wg9ucXFZQh46p1b9ijnoUcRwpVfxkzH71rXpHjwoTHVqQbkGhXZ2wYcxnJaNrEQ",
  "key22": "2eYAQ5PxSSboC5HRbvTix1ERv3YHFViZ3ofmMW77tEJMHpfUi5VcDeCkcVDrHsXy3Nt6cgzx3NuVe2q1NUDjdxys",
  "key23": "3RsMj29ujpxBdoJskbF8JJYgEUa3kkid2ScHycMijDK5KKz9PvGd9ixJthDLJ32nj4GVV2gniye41WJYfPu5NuFa",
  "key24": "3FksVVxLoeLMdziiUJV7SbEawV4V3f8NRFAPQbX43ACYzGGfxAHzuAqnhBYaqkD7YPpZjaybgqrzz4y8bYDwy4aB",
  "key25": "66iE54aGWCNPR4jNXJgZF9u6KV9KhcaracqHHtkNZ1zLc9PjvWzmKAYou1HhD1MazbdUAuSpqZ7aScrXB9pCWWn6",
  "key26": "2QURbvA72PMWBwkMfBoeEfKsR9UNDXx89E6TzRrmj4MMzSJem73SK9Tq3EKM4LtkNnFsVAn7hTQXepMeqSkCDTz"
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
