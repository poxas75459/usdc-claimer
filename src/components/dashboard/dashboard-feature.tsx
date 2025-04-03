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
    "5iv6uZW9uUQmJXcMSz8WYhR4bBRxyWNd2Qia5inHVTXFhSQAAjpXkF8PDAeNRaDiv7KVxBB3hPqRRCaADztQT9KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EE1kFV2aaL36myGqHNgmXVQmoaaUSJ9fJZhbdxkPcfq5pDpjwdq5Vwqtm3btziusQdd79oXStbYa6mXdrg2gtXj",
  "key1": "2omAryJPQzHcezewMruEqpMMBB76Xiy9o9rDh3hYZuBu5y2UzR6ggTqzoLQFSBNdotQm5zxuxXzrjkTPDo3v2vz8",
  "key2": "qCkFn4XnA6LzEoKCkgCfD2cKoAFqv4r9gsUuj73w94bAK6aPMMVFVNDwckjxq1iY9ZHMxDSoQQHHiHiSdfnwcfT",
  "key3": "2DVgKjoEmUHqb9WPfvWRkvCCtW7vp7K7B5dNfNmSWrkozVm9aaRs8Twq4HDEVHygHZMJ4cFiwxACJ7NUYDv4ZEyU",
  "key4": "r2gUy9faKGMf6nxybPWv23GWihhrbARJARYABoXmpWjrnzCbAkK4KzLjeUEnoTzJuyKsRmbASmKBpeBoGUeMR8N",
  "key5": "9X94uBioin2DpBZgafMkdaWwNqz6HyrEWDnQHnBiCpq7EtzTPYircm1AtKav3CfLKoQHs3TQbX6NQNuGmgrz7vM",
  "key6": "5xS792H81jWmWRLmYLPW1N5ZteXFmc1NJ42fGuAAwHDt6GteXhSt22xwkRgLeMkTCgHftnmcbZX2xM24KAFpa5aD",
  "key7": "57iNXBTw9hwg41EgS5vZt2XXX6gGfeRDn1pL3Hsjx2dU1rUveAnPWUVet9ynzYS6L4D6BjWLPhzZMj9GXBRc6z9k",
  "key8": "DejePyww1zBCLihBvPBpXmgtnjkwoa9CQMMQdr4XoBP1MKwb4nJ95oQKUq6bpjEPEHYg9CX7dYTwPt36mTsngvh",
  "key9": "mijKASiTLK466i7Szd5BTjqkm8otpQwRUKyXi2imJtsz6nFxKdG9LuVz7W4hhukMivcm1V8NTiuyd5Sc7AQfrZv",
  "key10": "Tu5uc6cZu5eTRX18ipvYvnEQR8Zx8BeW4ac5nEStkHkdnzhnmJEQiZdPAyMX8TPjGtR6u2rJScokT7Dad4PnTX9",
  "key11": "54sfWGvRgSjbhBTnNXkwSTMJ1KhKGYR7poEo2L4Y7xjdBUdFqTmZqaNArE1FVizzJBJ3DZtNQR5hQhVPaM1H4S1E",
  "key12": "K7nMGfCRob2EgX19KAmFKTuhujf1NRQeSNfQP1G5EZT8x7MPMiJzKCh9cXEzP3Gbzm56N3vXo96Vcu8SbyWCLRq",
  "key13": "BkWcYFaRH36dEMtyYxmyxFQFsCPGmjxNisApCHCdG7BLfxXVb7zMsMPuZGhobZ7eeccDjkhZbH47iGpJyiPfEA9",
  "key14": "544koUgXXY1z35nqjNJBKv3T86LDuryYvA4MXsY8rahu5FZBJDroMUVqBQSFKgoQeUdJKq595NyUPcRvspTEiF23",
  "key15": "46QSf7hVPdco7SWLE3E9Va7mANg7GcZiNLrfiFNrasR12UyxdKtq6pcr2LGhBNGBz1L3fbUhxLmsa7PS67XYcK2M",
  "key16": "pNa6FnXzNVtzhrqvobk8KJiSfyE3XbfQcX7K7F1DMi7zX5XXn8dKkbvQyRg8xXYSYNwMnxot1pV5FndSbjx44ib",
  "key17": "zJx3c16gSmHgpDFJmJzdCLmqkm5JAFeP4vE5mpSjaDYPctCg8p4CwVuYc4ndQMizBMh8ihfPaeGNqsbwisV4sFQ",
  "key18": "3sNJXDVnpbeSwHNaCXm1bELgR466bWfMqQKagjEMv5xVuNJudUvDzEgnXHwKcSrQhg9RF6A2pj462NtLqDPcTdfc",
  "key19": "5dTYchQ9Ksc5mdA15CgtschehjC86dcKVtf1URdw2HPg2UzRvbnHrDX1sJ9RvnJmtrNfc2PvWsdCFxFmh56ra3iG",
  "key20": "2Xp4cvzwD6fLuRoubd77SGUHBxokEAghC7jQD6kGNTNaH7vSMhzmwh8H6b1fbzVbRTTGA5idzYhiGaYz6N4P7hN6",
  "key21": "3DcNjFAc8Dpf1CCVAirbRDNekTX4WDv4kVUrnfcx1qD4CuzP1mBU3xASC4qjRaQwEMG6fWybfUjhQtkiUnxLow9d",
  "key22": "2TYt7d6F8hhvDVKGRYqB71Su61Pr4fZGufoZi9gVmpBdJnLanHi2hPKzkuaztopCYMdfoJxKqdDx4ULMwspB7w3j",
  "key23": "2jMEJUXEuvsVNMnuQAHAPzDo9K9nncrsx7CkcvcmdKdWWyGNZYxyPJBncRteEdDrnT9nX2AePnGd1pttfRUcGhsY",
  "key24": "3ZEyhGH3tVLob7oN65XF2DwBSJzQP93xKTTEooMdwy6qULtLJNFwGAbNAQhe4R34PhgcqbeGaW9wJFB9hnDKgaL5",
  "key25": "3sM6pr5GRfJbqXGGPtYW7zJ58LzqVUc9nsjNxyr9dnmr7rSVmhwuqfQ2TaP54p6nBgGvxGQYPtWCE2At6Weu5rTG",
  "key26": "5TBzBb1roKYkSrUnpWM9hZ4Tq9ZprRGihBmaiKTzgzoe3zZuAQHmaoh3XyavA4rWqkLKANjBAqLH1rr3oTDXJQBE"
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
