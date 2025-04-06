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
    "25ZJriaSyQYv2QZDEBZQKF5PP7DNTnEc3547tYftgyR8dEsc25GpoiZYheDWznDij8S5uG7zGbbBNgU8HjwRdBcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjH7qmg6sqZeAq47n3ymKh4a4q7P4a8XrNuJ4n7icTd1wTWWV3QNEj6uJfGut6VN663qk4sfS81jCJ7FxrXB864",
  "key1": "34bsmmJMDHW54VCtUQb1kHHJwe2yuiAZTHMFjLHopGpqZfxGto3PDQQxMv455VE8Qsd7xW5Ruux5e15sCj3itqij",
  "key2": "2C4RnTcBUwgPCRwUeMA6mnXSrozAwbGjGfJREccFT6tSrfKKHvA7sZFwQuWmLUahuWvX9tQVBfJdfLsr9HFc796J",
  "key3": "2iAfD9QHrxRe3TTAPWhVNDrmtrigyhGPdERpZxvXey3rixpsEDFi9aEhvDbj9F7AjDov74MkpNo7vmWttAbsa8wz",
  "key4": "iyQXMCxSUpu9qmQgABsEh2km8YVMTSXmRTVCv6yMrPkJ8E1qVMWUMjRUKQ4LBposXj9nbLQTLC8QjyuXkAZDBip",
  "key5": "KRd6S2Dv7DH3EgjWjWrenV9B1oKdZp3dAsFUH15Qr8U55ztJphunTcwdEh2fQ2z8rNePdaM2mX3ivf6SLRGGWus",
  "key6": "2Z5J87UCqm8fwYycCpPyBoPb4CC3Y5UfKpYpSWrnW7zkKEub6hbPBj3NKUGzhTDTM5ztudgRMpM9Cm1CuLfKjH9s",
  "key7": "3DZFqm7hUYvjT4fLwd4cYPTbEfRHUHYYniXXLhKo9rFizzT61GzMjTAUADYK5iz1LrmqKhW2iA8J4DiPGJYpbZrw",
  "key8": "5J61mdh1gHnoxSkSDvxtGCafCxsWYm4UGwA57Z2FoBBroMn8SEc5iNSpqkePVjbUEbYh9dEzeuCZP3yhiSjqC4Xp",
  "key9": "4nNqF4deMfBbCyrhGiywMrFg9XokKwnLyMfgeUpAd8PYyS9ZXodfXKw1vX6Y2oPmrKsC7SeHcPpZHU1TDVXNSJLe",
  "key10": "5BYkCnj8X51krDXY6CPid2vZs89G5Y3iWYQRr7v3jirqF7haGCvM4nKpX9aro8pzRAK9bnhMaTfsMUD8V1vzYyZi",
  "key11": "4LrMUiPn7rkdKj3f8YscxyASuRJ6ZG52JbmU5hCLgXFw9w79bSRvtZjxjF31HG7r8ReoHTwF5AEhrxxHcaNmde9S",
  "key12": "wX43yuDg7eXuArqtpomfFxq6rvgpj1rT2xAoWMdendnnBVzf4JwvTRhpFfXePhkG6k7Ce3qv3WhnFFfWrrwkSni",
  "key13": "4CuYFyEhfPM9g5fwd1Q3gyYLfkGddmuJyFKJMxHHgAvQmz4PiFU9M39LuurdttUosAmZguhR1dSdJ1hSey1fHtNS",
  "key14": "2x5DssSTAnAheHnJXNFaDU3V4JgTQm1nXmqVg6oA419bAjmFuPYUAyTJiGYxFuv92rtZ6qMbKTJqMN7XiJ66FYY9",
  "key15": "2okxzRFvfKGJNds2Ao2owD47zMDpZVMchJBbwTyDXZj5m3hXGSmJxex7yPZorSzTkRfCX1UV6ToCVJkx6qLi414X",
  "key16": "4bKgdcCJodhmFbfs5dZ2kivHEonbmTYyTazVnb4jVuQqyTnfS2ohDEyg4DxfUatJcZV6FeAFqUPbajVqp8TsvRrb",
  "key17": "3bJ5UEPa4vNmxuVuZWCPkKADfbfweke9FVb9zR5GhxL9mBD759RxRWyPZK5N3kZSoaDZDypz5Fv8ir6JepqJo5ge",
  "key18": "33L3isgRJ2vCdRq4yBwCdr3UiDuCDCbn376oxc1bhWuvdJvUpWZwPbbLqviQH7sVw8ESXYHfmfhZWgiYSenB2nd8",
  "key19": "FqwKCRqhKSZzW1o3ejZn6aaMZxxg3FojNGHqy5QkKrhHHaMQz3U2fJkdqCKhpxqWRsspqJHy9k5SaWET6YAN5R4",
  "key20": "2MLLPjM7yonbdaaLBSiL3gF3JkgaqPDrgUBmdC3CL1LY5iXiyn1LAET6gd5S4iEgFn6bcFQ59xVVYXkUyjF7SRb2",
  "key21": "1iVBAo9jPQqj9aEAgnNqiqCvtghqxVhGhK39bAFpnedHVrxTnmhEWpBn87u2AYoJX1J6b8bDa9S6WEhbsX35xV6",
  "key22": "5M55xkW8GY3KDnZ544jH9wRYx63Wpjp2HUXzBpBqqWjJKrzFPy9UcVAtWKuUa13yLjifavkAM6gKwjTRkrspx4mj",
  "key23": "2KMy3mpsZGpv8C6cdNVD7bds2ivNu9YGaFYELhp4WZb31fFpFUHT97cbta8xkBdYGDcb9YZRLLHrwW2hQUkKfz45",
  "key24": "2Nwk2yuPvLwGhGBLeVjfK6WLUaTH2tbvhrARDAdjWX9uHmng3Mo1KhHUaVkge6FyykZtZFv6zVegTDFuXch8vEww",
  "key25": "2uDNgSmKDQuvtmRQjtfYLm1FpJGAD3PKaoFXN5ouxhTLBdnBkS5f4s9cSnYEN2cFzoToETumdDGoFsXSPmTi8cRN",
  "key26": "2rVypgPKv6mZB8ZQe4kF6JSXwb3uyj3UDD8b8nCcKq2a4BKXLdLBvX11K6Yv3MvMZxtvdbGnMELYQkSJnwazNCii",
  "key27": "4xKmwaJbAeK3uWaUz5xHqiNJowxt8JqFrzGkKcwLa8LVUoNF9YMWFjkK2XiokjonBbZJJwkcZSgzdEkSDSe18Nhf"
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
