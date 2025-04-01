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
    "4Y6cQt59fUWFUJdSP4qUMXaZnt7YHXbZbB23YNAazBo2X3MFE9aLKA2Tca7N2D9YvCr1NjbJQYb5Z4EypnnwavwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ykqKnHYNGHux5rKnDSvLq4hpncPFPhGreYmt6JhNhEBCe2aaitkj8siXpgqrbfgiEU3PX3nDipFDVXoknnrME4",
  "key1": "3PrS8yXH8ogbRaoC1TL189pLJPnyBzbobV1mVkgWMBag8VcBVZgpzpZGLwCbGNyRt4B9Dd1E9di77W1Qqn6ZPfYi",
  "key2": "4enhSV7JcfJt9Y5BijifyJERzs7S2YQrsXVVyVyKqVZJ8Rz9M1fmLnwXqFddnuLe6B49PdLvWFxdwRVUtoaq9DF3",
  "key3": "3CbNzqopbKq6nVzf6PpKStSVpovMctxA9YF9BBZWaPijGoz3RvDE329FH8xogvmujVn8bAbuBkkRKHYfdaxEM9xi",
  "key4": "2evjK8CeFBw3BsdjDEuPMmz17BjJPBuKvziPhGcKBk8Bd7Pagq2pUJSHxPij2FRyXdDF6JmyNkTexqomNvgMA2DN",
  "key5": "nArZnnsV48bnunhEF8CvcipsZVbqbW1i1MSnCxhrgZ4F2PdNgkkxWsSyhuXz5y5Ah2Axcc2488hreC5Qfxikexk",
  "key6": "2fwVgbYqeco6grVrgvKE7gooWi5pbbzz7W6D9TrNDMzaRnRyFbXYB3LFSN4h332PU8CcmbuVg3TwSNZWchsLKSSF",
  "key7": "2t3mxgBBV38ig8BwwSW5ngFHQNzYiSBdjFqkGH1FxnxwuoPscnLt7JZnAW3KwGod1mqCvPqkYBwdntLvc6B14922",
  "key8": "2nBKj5TH8qAcaY2DvmJe2WH2Gk6ufJtcGayHa2eRL7fRs5f4oxvD6fHzFod9nkmJgBZQbWZtZ6CznywQyr68L1Me",
  "key9": "yTUQWcoHU5QHJoksSptGQpPyJT6tuJNNoJK9xEMb2Hn5gKHxr16URPRgtYH27JXjKMKdgogTWZwLEk8qBASCorN",
  "key10": "24j3kHKK9CuEPrx4sJG8HGJADRe3mD55bcTUYn57p1V4zHzYdDfB3Ayx6wHGSoxCvfZs1t5o1Upx8qty9KkdGMyP",
  "key11": "ZnxTc3VmqRv2mAQfRF2eCJoReJwDq3YqrLh4eybKkEQy5sBUcibURy6L4JA6v1EKarAUu7D5UW9hYGQM11Awb59",
  "key12": "4doiBn4Ju8Yu5f9ktxNLWWiW2dRC5zT1tz5wsB5MFc9crhhbRz4aBBdGYTJc6zVrv3ygraw9Ku1JCFpaAaZG2jBF",
  "key13": "pdsuL7bQHqpfV94eyVQ2xNB9DZrw7DyBhds6TpB1oL6jU4Etm9Rp2pyTcLgckN3Kmsj9nGunN38hUTV2jNrBE6A",
  "key14": "37okbrk2p1AkmGvQm3rFBvQfWBGz957uTZDpZrToEPSbwiXdRhaEi5kDVRAY8PZ5cmPEoDJ9a2PwRPDxHUUuz3Fi",
  "key15": "3uT7Mfp5b4xGSuDzgYSQnCLbBoZhbyzweiqMUQPmBGmSM8C9i2umQqdeD6AF6LwuAcx25EKXX8utCYjPnoKqszPd",
  "key16": "5q2S21EMVAbniQowoHsH7CVakGcJx93ScxbNmwVcS52smhVwioy6fRGNhkn8u6kKDYrqaDmGdReVGw6RyVQt9zwy",
  "key17": "48XnJi6Rpy4JXDPn6YienKghUhktXYyFJMiuTxnECBCfcJAd2unpsbQcXX7uHV4jxpG5wXUUTxRedgdYpkuSMTzv",
  "key18": "5jmzvy4j8msC8aVDFvsUHt6swmD5n4S3c7GSByVbQQk1njfNoSuF7qySSrcJZ9YxwBYPh3bLCPjhWLWjFLiyXoK7",
  "key19": "4n9UyL7umjH6wqKg1JNYoy5cRDQMt7ABmPTZXwUiXQy3u8EsJeJDtegugwBT4TkHyNHMbiiY2tAFutYYxcMHaNk5",
  "key20": "84VjRkxGQiUCNKeDpFYPPqaAac3hKBrjTrEAmHSZgJFVtUFob8H5pQ9734mNH3MhkcMifZPA6rm1HyoMpTt37WR",
  "key21": "4CsPL4HefBqFdJx7r5M72JrQejunEeETdgxvKqSZunJVPjCShUcaJuvc3Xr7gRsBcL1WrUvLFKguaG1bQVnvqo2e",
  "key22": "4sx1YMb4wh7LNyMHtvkjdcQoeX44pUhvMyUM5JiVD94oQiRZPPbnTXe9T8nka2xUrJuDuUKz3DFR29m4s6ta5bMb",
  "key23": "3HhSSqxLovXpeTgVwtKNRQWxexKEVtruyWnPKbqjccsgZPPTTq67pSBAURXAPA3vaHo9Pi5NpxasoTmKqLCS9ULD",
  "key24": "34s9uibpBdPoKhKgejEt1Ci5kmCkvpuKGhXbMQ4CL2g8QDewRsUxf9W26XGXLPMVa1S51ooinFdFzVtAna1zudbw",
  "key25": "4zq5PcrnXeQktY9iW1R2Eyp1hH55SAH1VHgmMizgDz1crvMPfWR3z4ENFJ6Et2HjLvJaL8i6h3vPJjbtsAceuG2M",
  "key26": "3c2sNcSLgVbDLmJ1YgocSuXkyKnBDFv7pHVHdq5oHe1uthAnWFDLTWHbc7GQ5zZr1SE98ppCW6qHWCC7z7HRUv4M"
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
