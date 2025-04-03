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
    "4i8BxjAaNftFgcz15LbxbQnMW2cZzctFdgMCqiXAS4XKDeVDtQx2aT19KbfmooiN1C3noMxFLysS95w7STehmifc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNrKpn2zhxDTSpwkJGhCubYWM8HAwPhHiKhhBE1GppTDRknEbN3LoEPB1EqJnxXvkmh7HP64Fn8NK9V2zHe4joW",
  "key1": "2ZXcCtxJuffjhpNyEGXVnQTkq8VYy2DHLp3QwkA9Dea891JUMZm4EmrmpFuqK23Q8DBohVgvHbRWxn79iqp1H7A5",
  "key2": "2i3PT25BEYdFeQtpjpxv53aaayNVMe7cJVwvB6VU9E1tZLfc3aJQPUdZeuJyx1TWhU2STqopp4zzpUr4H9QuWz8o",
  "key3": "299Tq36eQhTD7c2EmcMC3dCy2XxTFFgAsssEjjdnFsDgrN35fuyxoxQHNNPWTzQtftW7ZR6is3M3GxeV2TAes98X",
  "key4": "3uABr83futRZtnZmwpgLcodUQwM1zq67HbwoTShy8oiYZshhqwBv66Xdy8cKv2fL3SLP48FwZ7DsbUCyKdGpuV4r",
  "key5": "qzkDy7onvR2LV4zLx2L4N3sgoRJJ1iGmyAkY3Y2YaWZG34chx3oN6srHwirp3tc6L1z18mFca4MZTmB7PbLFC4w",
  "key6": "3j2meqzcTzNi9LXyTHbfu4YvfXzHtTTFd33Gh7kdWoC8r9qDzPoTPGZfVyKQZ2qfNt9jZGRB5AJYGnq5p6eDs4Z2",
  "key7": "61p2iB3yVHa7FZPSQfxX9sWx9ssZKDvkRNf98QPyBCW87fwxfBFtQf1oLuCwEKBgLZLTxCNu7oUtf13QUednyhbu",
  "key8": "wXo35bsB8w7qPBHorZvKEZ7bHsbPFzmXRJxVzqfBb9ruLVMQ5yPsFZNnQXbdM6tbHByqyHXJzBDSbsACRWbEBQ4",
  "key9": "3N7cLU7zJuNhWCP1gxGUWGsbQaUg6rYUH35VDpBHMZ7K83t9dRLd6EwbGWWEnWto9QN8RKnpTRoVT3UvLQuk46ui",
  "key10": "c2iyckfZYxAkQ4zV6AdPL5UvJc5E3cfgCgd9dcPbxCLEx4TG5g8wjHtVwvwwZsx3UuY5mnRp3H79DDQ2BJCnfnj",
  "key11": "4UKPPiK5B1frvboViakoGvTs94MKte8dGncmYVLZVDnMmcYczV34MFFr14dbruybqPSNLoXDzA8YDHr7wFyuoJph",
  "key12": "67Pbz54DMFzQwbRF4knrjhJMmQb6A1FzwHNWEpyaVdZecSuh493b9ywiEmyYfauvjZSiSJQq8iNWuKvTN4REDTT5",
  "key13": "3s44wE8WJ8LtxGFVMHmqTvV3AYHRzvgKCBbBcLiWoDteCd64UfQziimnY4zDZ85x4aPHinsdhvE9njhrRX92W1si",
  "key14": "3S27pL63CaHSUKGU2F3YZ4KDA7PeRsedaS2J12kA4nyoAr5A2ycyziqDTLfv4GTQegexk9Wi8xcgiNVJAftN96xJ",
  "key15": "2PCbUCVP5eqC4FTsvvJARxK888CNRFBUtxYpZAFQbE5n46JanSc5ER5ou4oXCJqzc9PWDwrYeN157EBpPKTAz4i4",
  "key16": "2Q1J6NS8aZf46sMmoC2aLYSg8XSJXqvW5uuQhTQwMdcjp6z769S4StRQZ79eBSKnqKizcDSytAq4vnitjf5n1M8o",
  "key17": "28tYbVh2SnatqYsJDFUzjvNEdrXWsUsxyoMCRYapKSMw6f6s2vx3iPjaR6rTw4Ry1gwUbAj4YyEhUqpizJMCv9HR",
  "key18": "4ERGVKDuyGd4RuAadqGPNb4zqkReN1NAterVPUZJnHttUQepmuhnqQ65YxT9DvhCcYizyJPyAuoT8yfot7GLGQfU",
  "key19": "25jW6SCMfRfhKbB1bktg8xxQRGUK3JkZjWDbvqcyE8mcnwKaeXmRA8MptRM54ogHFSoXjecT2yeZhcdFMPeJpRRV",
  "key20": "rrtZQ8Hb9qtNyUTN84qKDKbTRnhRsufdNS6enzemtX6KeNZqD83VFdGDUEcK99YTRomu8mfprwzCzppygU31Jyk",
  "key21": "2h6wSc5hTibZ9Qj8F6AnD82FwXYyaGaxj2Crom84rJa2eSuGeHoif4EYuZEm1Bott5wS9nj7uLF8AhqpugCbnBk3",
  "key22": "3nHaRieiHa4iBcVH6gdPKjdo9WLcBi6fkkAChsQtjgJ1VpouDbaChL98wqSHkizpXSPyUBoWa95RpAgYwicWn6Lm",
  "key23": "5kx83QaDecWL2hSKFwTLpzCgckssTRjfpnPoGQZgWFyaaoiEkS4EQQpuFH4sYnbuxdtcJ8kWpp6jrunie1dUZ4y7",
  "key24": "oyKQred6hZqLm6K7Q5gLVq6TQJktbNzwZWhBsjAMKhVX2M27icdZyEwHJ4S9eETf2DQwH2NH3i3qa4ARQvKZwew",
  "key25": "3pBGfg3uRP4qvFaAJWxRid1qPLxQtgz1UaPUy34AnVfJpHgP9cJ7uH9GjKeJKrS1U6zqdwJHjNtkMQP86fGxK1nq",
  "key26": "WHbyTvJU98A8QcX6Cpn5njXQ7MQyzTP2EMWdkxNNHVepKjMQmixtxXV3hBFrAGEZndVzBhStBzYUwsEMfeeupof",
  "key27": "2BKzJ3WnbReaMDFRWqrn1z2gbUWGPg7dszxJAhBBCuuU8SjuHUHQtf7Dheah6ABUFCHCkY1npq6FuUh4mdBNA295",
  "key28": "3eU1Sa2W2No9TvHTaWL9m99BS3vqCpnmKNfg2TXwftz3JtHZX4UMADdxDPjAT82JBrKdcRKcgWaLmG2QYvgjTP6V",
  "key29": "3uezaXchQJgrskFcvfUvCToL3sZYj7Ca8UKG76fXfRkXhvLoMiBGdhB8rgGF33FDRu5cA4Gw2WxH5JLKuvMTSK2G",
  "key30": "2fWa46W9Q6xadnCW6HmmG4jAANLcM7XCJjdrt6xKASRgahG6rTVdr3Cj9Muf8etoHtyS2CKiHpqbiDxT74kYCVXz",
  "key31": "5B9qdXT18aEghVCPGDEDQksvJbrLb5CAT9PhSz6wFXTNY1NzGhqdrQAMh1HobvNQRtw3HVRhYXZh41ZTZLQYM7vk",
  "key32": "2q88Ve7HQ5NaCv9ZNo9kyLeEtar4dZ8qTLG6YMAt3oPa5C1X86qQd3XNU4HqNKxymGz2dYu6indUESm5PUi8i51d",
  "key33": "51xHpYTT7KDxYGfy3aiUCLahuix1ExZucmzrmAGLzJPkk8gqsvsQ5gDjp2zb6hXHvgxunUKXWM9bBscuxTSSJbGA",
  "key34": "3y89kRCkTZcA92BFSrZgGS2bqRDeERzSuYeK8Me5QHaa2CHUT6Pf3aFmS9fnKfjD1XS9zZ47kPh7Mm1kCEjopos3",
  "key35": "31vdhoLJr1Mcb3nnFU7N6cHRbdRHXK8iAv2YXjXmD6PXssqBnzPf7NrnhiyUpA457Qwow2xnzK29GdRxb1AzgUPg",
  "key36": "4TdbTCsYfLeSSC7TzowRA39hc6SDqEATLt8vYUzcscnndz3MM2JspbCTyFunKZRdWa1jqt5DiehaKRy6EaecVWWC",
  "key37": "21xqwN48TpxupwXXXEyG1skreb3MgJAqcAaKi2s4XE852DDq8kcfN3eWYU5r1YD8seo2Mf4HT9vWmfevPTdJtHwW",
  "key38": "x86Spn9PGQ5ukLk2W2ReJ2EDsjwa7ByxNW8JvN3BUkBdLU7fGaDcpBrgBQVDDAqyRhwy3JfzfbvmEoZPx1GWNb4",
  "key39": "2gb41TJCWXgJHNGFNx5qXxoNetnf57Dz7zRzGckXXPyppJiaH1kLiRmbhbRYk1jiAFJUXCMXc9ik4rba9ktiAbVG",
  "key40": "5aFZzzz2zGo62UgBwsYJPy6jLGggj5P9awirCNnnaXj5Nh2kKGbe4AiAMRzARn7rEn7HY6gcszxrD18Hk1JrXH2J",
  "key41": "aivFTkHU4AePJMSkkiV6ssg5TMuRZwH7YuVeEXtt44gxw2wcFP9UNdRX9T8ftCCs9GAC3PsjyZvzCw11i2zGRe3",
  "key42": "5nsdFrsxhDHXngRBa6x93peunhjemxRSS6TqfzLVmLoNZyG1mqRdPwLgMorjdEn2Xmsx6yyVjurCdcZKznfheK43"
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
