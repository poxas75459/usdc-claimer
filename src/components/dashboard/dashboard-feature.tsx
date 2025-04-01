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
    "4qmicHissaJWtbrBkizrLAdbZg5ps93wgKhBmAJ8Mpgx6zDGp1J2B9EJx5ZfAdwdEfuSicgPRZQEiBU76UfRXZsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bW5dZ2EwSgevxkJNihGGc9A5Kh9LEPxAUZ9V6Q21hDWaK6CzyGe7jhCYnf2xkQ2i2ps34f1gpvdDVT2FwZmuQP9",
  "key1": "4XMPLTjoVpxwEnURuaoBHK4YdiPPw9GQqVNnh4gX9YXDH4A1Ykvog3SZj6jqYJhaQgZnZ7bJJqkGV6kXzRiv3zMk",
  "key2": "upiimtp4hpcXyuBmwjY7qSGjt3nPtnFvLd3TUvNLGbWt3MdYvKB94Z8RBv7nNNtvjKkKgbNdPnoBrxzFkwEFjXk",
  "key3": "V3fYTML3ZwkvTeBddCv8XbRF7vcaZR7qeDmXJt9GTG17R7omwf7gYDvNLRUTwF83iG9sF74nZQzgChn9eRdtTWM",
  "key4": "3c7sESvZTdjz4pG7hPXYEiS4pRpkbe1y3VjNqeThzdvotkZyUxwknkxdD21jF1A5ZrWNSM9akywX3Y3u77ULCoMY",
  "key5": "cRLscj2k1mdju2Bh1LTqtDj9a3kkq5h8h3juHy1o4k5R6w8t3EWwykiNUQCHxNeKYqEQWTSqw3tiypFXJzNTume",
  "key6": "4SroTYcKBamhdnw8HM5qf43u8HBV3CjjTFCjRZVypFh7HWzWaMo6KA3wTQm6TnvBQYtn51SHdxfjcotdd8cbei8d",
  "key7": "2nizm9DxacBFrHPYW2DyuutVeajsstMxS83CQVVDPR6CDjZspwhRJBugP4fwcX2g8oAKga7ZuryubK2YTPzAKVG4",
  "key8": "22QQNyxMqyaggzRFpVhryYf8srYF91pQXkTbRnkFKuRqLqzWS5dNyXhLL9c759jkHYAFhag2kU5KZRgJqLtqjPSh",
  "key9": "DSggqhhUrqTw1NUBf9112f3nFxqkTqS6FXAkF7mnRsoYtfp4N6jV6hnsogB1vFMG8BRHhZ8adJxgt2GJS6ZxWn3",
  "key10": "4f3nx41RSzgr8pv73Bb46dvqPZScpfos3bQrNkp2iszRakt8XRLRYbUNPoKRF2XWV1dyduzK8hh8P5x2Y3Fqv1Yd",
  "key11": "5hmQHH6nDbuT63hdWDvB3sLhEUQv5kLsnK2Y9HumNnb88SDPTFfr2XsaQqwDD6GFP8SZpJT6EHKvDwAzw715GpQq",
  "key12": "6nt6j8qkQwUfLXnVMCKQNC1kDd2kGQJMLgefacqG2YG8eemj72Tz4wBxf751rwWLB3k3s4y64d6BVZFTtL9Z86N",
  "key13": "31R988kaimXU5guQBjfSAg1NDELKCmKruP4t3X3gFNmBAjjEAn6ah1fePpAmmzwvUzsR45WAK1RFSfMPxc9JE95C",
  "key14": "5rwDAs7Pq4GMFGEvjtFue6xWXeZthmH3KhnC4BkqJj9JduNbjvwtLhBxExJMQsJeFBm7mu4tKF2BFLY7cE5StEfw",
  "key15": "2NJd24W5Pmu2LbinKT7ququEPmMLhTS8GxX4Bo4UiJVMuHWqgpwCs2ATKUruhPJ3NKfmK3Mq4NWc5CWRd5h9wD92",
  "key16": "4BdExkWXYHyW1u3Kn3Bfne3xCk374BgtGmxK9ozz51wQvFyRCpK3spoJQdd8vN7hP6ETr7MSNkKbPhDFetpTzNAu",
  "key17": "2iAgJWxrwmc1npqHy5ZMzaBrGG5vCWC4eptfCChSKj3fkvWmDTYj99GNvdxkmfV8Uy2yuioRCobcgnsW1j3aL6Rk",
  "key18": "3GTvdcGMu9ZS7KEpx3xNYbqvqxP28mZeFzedDq8WY78NBzNFc7Pe31yzCjTgoYZEyEYG73w3E5tEPRGRTCZfo5x1",
  "key19": "2MAmHDX7nS3JqB1w7VJQKtiZhay2spbNUbgqjhQxkuWd7XCMqxDxXXx72Gyjs5hKeRHF5rUrkR6mCybw6T2cs3T2",
  "key20": "291YbkPnqUkaD7vpRTmV2J46SmYxYvuLUp1R9o6jKNtHvpdwQFusYWsve194YLEdwNrTdFp1jdqTAhjD5voNQMYD",
  "key21": "4U6JJjyM6yfJsApMRdp12TmSbKHXBe2FsDwPEDu2EqZAdMJM5geYZi6tLB7oSQa8jfcwVgre5C4zTUiR5xG7QpYK",
  "key22": "RNSrP833rdnzy8z87vkqXixeJG7vstSAbFDSeMjU6nEQw8UyAtis3S17WYDvcZCuK85zjmLFuvDYAnmyTntStFL",
  "key23": "2NFDTsJAa43esGZXz2ozqqkvLJcfNpf1yYna4nyc5c1FbmjdkkVx4ucXnHhTaMcG69ThQayeRQ5GGuocccU7S7Zi",
  "key24": "2Gqd3K9x4bkqs26uaBNJbruazDbsULisLngMJNkGWhLi7ZK7V1J6YHgZhdiB826XnsQT7GphwJ4mXCjNCTBqyaSg",
  "key25": "4xfQAauHM5u3PSyF7u8g1pmXhD4wzniVZaGeJPHpCMFEDnud4Ys9TTfXRmWt3Mm4sU5CX2mcddXjwKr21Tko3Uu4",
  "key26": "5Yt4mg7cqZXYSrsstjhwCFTxTDiJEs6sKNAkofZMVDRkmLGz7KKuadXspsTS6XAYLzjAqtskBTyCZkCc4mQDWa1D",
  "key27": "3xg2zFdZbhVjKhVBhy6sWFMgBKNNmap2HibneKQr37Wd98DgCzaACbRWd3bGzp1i3cSmz5qJC2rinW98BjYcgZfk",
  "key28": "3JaoaKotwz3ED9wkdJCh9KCBoi1J3ghtcjATSxUAkb4WL1kcBEF7wdMYZ7FcXWcar54wmYLi3iPE47Eg9Bkj5Ftv",
  "key29": "2pFtnGFbQvDMddctzc9XWvjLY6JFy5ctro2gSzYCizUPC3wSY4gj9gBTbYhjG9fpLw6oZBUoFmM6LyApmvJrj3Kw"
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
