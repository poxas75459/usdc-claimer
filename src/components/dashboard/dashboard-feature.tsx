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
    "FczjD3kwnU3bpghq5DsuwYzhaXXh8u56hrPJWqUsp7hxcv6ZFja2G2ERDaW7ZMMyPWqxHfDBgKZTtRuMGgy6tsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmjXah4jmHGPERiALHV1vWomirEXoUa6JNvUar612tJnKmMjWha73FCmjgUNtXc3fNTPCxqmG4UK87peWHYRWFZ",
  "key1": "bQU5Ar4a13n3XquaaZdrQDVKHpgmpamUhAGLSKVx4zmGTRGDAaQW2RVLU5Cezboc67Xi9V2TF18ivUaK9Cmsffm",
  "key2": "v2hx2qbmifcickFpDMna4aYtpQxyMxSZ7EVutxYV5QdVdwKwRbbbdjkynsWWMKr5vqCPYGGBbvxNhb2SGCX2GqM",
  "key3": "S2KGd9opjv5yR4o7rqsPobKjJEr16oMC7ozJV4zK6SKGeMQq7XwD8DiYyjiCo2Ua8RJwSUiW2DmmdTpZnvLRAfC",
  "key4": "7EahwVeftQR68qKevdPaAWbwyxwHmkW2xyW9coFf2RBDx4xSWXD2bgpGtrQoPojmNjbfNrLBSxvJdzZoWLxfuwG",
  "key5": "26DEki8ERdQZSFFfGEpseZAH3c5wPZAmi39PwRGJvUJXm1N1K4BvATGVsN7fFUtcvFpMJrTpeZBvZUBHtwDnTSnm",
  "key6": "3ALQrWKi3whpF3ezhs7cK76Fr97eLf6Rcv3PDNeT9L1tZVLZggsErVtPhNC2SFNB4zGFv7dzd1y5HYLPTSxcZTb3",
  "key7": "4sp3SBkCGJEeE9aMy2zD3sXpyuVL6D5dD6q6NJDMyEWJoXjM5nfngm7n6TmTxKEa7moixEybQfG9YMxvbPGz4xTv",
  "key8": "57G7aPqWNospeya4oCqy4H99KkJAwEh6TWMWftVBp9Yhigy1crkfjEo53TYNTWjogxPm7DZTLYUiCudVbPozj9Jq",
  "key9": "5QgPN5DMTHzmUvkZbqbP796sgVtkVLnH6CUJ8Lp11SCVD98JGskUAXGzWwzBibbFBD92BAY8kSxRS9kTMb1WnSnC",
  "key10": "2wofdZcRE22w1nj8dKDCUKpi3deFVpoAXdad7e2sFjVwroR6rYAuqLXpw35ew2x7cnEYRXfgVppfh4fEQHGpHxHM",
  "key11": "3VEEFE1mWBb2u3ui7UXJcntmTHFtDwGzTF4jKVRLJXDcdUocXtgQuaDsng3HvfBVNRx8ZGGA55ENCy1e55YgMnde",
  "key12": "4YwhUB6a2FkhZNe7ymxcA8bu45xjzpJ5YiNdZ9cNooTXAZQVuQ1DjbCN2AGzdTQFLtdU591dd8gzJCEefNq4ecQe",
  "key13": "3r7eRpftj93dP4eu69gyPVd8SLC2SqZ5AM7T4HzmkkGXpXcfaVjMReYoRs2uJj9Jrbx1dWoBA2UVehu4sTnpa8j1",
  "key14": "58emDxbCUxiGJaJtgZYWpY4vfEwiRGZjnYqPAV3qnospFfeJf4jXTgu92Jx5hmLmAvhDep2wPNrE52WPqgpc2KFA",
  "key15": "5iCnZ2EZJLc75MEyk3cETfufbGFwyzLxqxGpFue3JDE9GKiBr1frpBS9A1qjYA4fwiCDMdNraP5MxfjADMNMJAcu",
  "key16": "5rV529rTX8G2rmoQXeb5X4niPPA6WeZfaimt5Md9BV41dRuoQt9Bwzdtj2gXghUaRMG1nA5YiyeYd4GLPXRT1DdA",
  "key17": "27KWPirrZoZsE3UV8VJD74XfrhcVxoTYWdUT6jAucenDCi27hzX7QZbSjhXf4jry2oD8hSjEDBUjkfYDqfropxmq",
  "key18": "UqJJDunhtc4dGbjyjTgFVLMcd5ap5wfpPr8Vr71BvBioDRsVG1nmAS3rnKmxckzuycNMBvyDVUxd5rJviyhk5Wm",
  "key19": "o32H32F9k1TLesmUD31qVZZkiwcvgtVHibdNcw3tfku1pgWhiYzcJdGZVFzU3vGH5uAG6x3iZfNFXgmGo8yACvm",
  "key20": "fYSs5afgRj6sJsCVYN8XbxC9e6YD1qsvqHX645YfjPEcMTPiL3rNypPuPgXQ7tFRR4tbbnVHThJL1Kcpag5rY6C",
  "key21": "4nFpLynzQ4rXBGfNZ6R68iJN43ANQUEGGL2tPfkdcXVaLrNxfU1c4C65P4LTXJi5m71dmZeSoVRAhvyzjXTDjYPs",
  "key22": "4iwUhomfLcjmADfvcZpx7BeVGDEasxRCZxK4ZfnGA1TJ5aFY8r6tmcy4JfpEjZMbuUMEXdwtKc4oZEpouoDcuqGp",
  "key23": "5TDqs9axk3oNVqMJCLZi6aRr7ybLJAKGScm7hrcJKbf4JtjxwVMPXeegCTDbvixi4833KXEKbf1Yf7yjDARr1U5Z",
  "key24": "ecf5btfmYUBZpAQvNA9VPLwRV3h12XZ2zZQWdE8RZe3KuLSpzXHM5bhGXCrKpSxGCBoMzwR7e6XxGRRiAbBtqFw",
  "key25": "2VfE9gYMho9WxFM9gEFbw52vrEvFUiK6NEduHBV123zWL34Z3ybRcRkMEpXfV3xKuWA9E45YK2CzpMhEZ3PANnQp",
  "key26": "4kxFXSxFpF51pDLMf4zvvMEuSNqKjTAJ5zr6V9tk4RodopcmLiop4QPb1hbyWEeVUY8WqTMMMtQosr861jR4Et6s",
  "key27": "41azyjJ8rbHMA4soXqCGZRua9hDmY7UmpYaK7F2jbhkaXLk24h7jV5doX9Lp57CmJcULJmuA4ynHfDf3dafb4ZDA",
  "key28": "4JZcF5qS92bN2hbLGwTZqRfAdF5EAWAwSKU29LigRQG7QGaz5KdunQXd8otvnKzVhHtQoLGHtKUmFEEHT3AfoSsQ",
  "key29": "2VB1gPPMCiAFdo6LdmgzczZ2u99sQ6yR3sZfeVRBvmVu7jybusmo8r9zSEJRqCx1b8usxJnirYyTjTto5MJFmpzQ",
  "key30": "5iWNVMYnK1foYcpc5yxNhjy9J5XhKbwXngjPCiiqooRZMdAGMazcD8msS75CpGSWbtq8NqGLqr6Qawt9fGoEbMkW",
  "key31": "3AGFJe4mAP39rNztBNqRdqC2gBEzo8GXYDLzzwjJUwdGxDRMJzMFSPSYFfuwns1PrdBDhn9pzqfDPLXGZDN3RqJR",
  "key32": "5wcYFFvcpA7dtFwY43HWaEXWY72fNcM3c88WEKMjcA1mY6HQCYdvFJa6C5GQQRnjKTwgPKLBrr61uoqpskDF6ZzF",
  "key33": "3LBPzgc77fHUXU2LAZCmHLJRHrKTN6xZV8FayMvxsKoiSpp1hLgphPJe7oNHjKHs9jmGLXhwA9Y8dJoZKgTfv6kp",
  "key34": "4fCq1gvHta3NqaPE2dBZWiZpALPpoxyvzsYnaQ5yQpG6RB8hqtbYhhsbkCxw118c1hiciMiwzNRQ3nm53VgmuxGP",
  "key35": "5xkx7U8SquS4K9qfGvrwDNJtGDGQJ1NuF5d1NnF6fwqheAN3Rn4ZMEUqdpFYSHSek6BPPXqGqjiREwAs6uTyGkrM",
  "key36": "tJzcP9ugdEdTzMstJHx2pGN8foRsZRKHJRakrGwYHG5bz2SVgyv9yCFefT3LLa9q9QKkHuLbxp1YKZJsLhhLFRx",
  "key37": "4KVjaDuJ8TbKgUq8DnyunCcFRm487Kbzj46eTaUdDnCCaZTzDDvoxb35b3zTZrUfFbiEX7yhQKevgiQWAGeAumrr",
  "key38": "3Zdfrj3QcqxYAaXdAjLFJXA3JSAeZUx47FhHX2F9BbhMDRTWZEBiTfrsmy6KhXZWbkSf4VjiCQsZbADrHpAXK2S6",
  "key39": "4qfpx9gKPAFtzN3wKYPQDF5DuaSki2S5CcaxjEE4WcfqkLTJ5QX2Zs9SVBV4tymc9ASLKTZprkdrzghXqaWX6y1L",
  "key40": "4bjRqNnjZAUXrWq4m6NYULEque1nAfbSCUGWQWAcoipntYmyQKverd5qPaN9HcupFKc7WwaGqnbbXJTUqxdgM9yV",
  "key41": "QPabNzuk2Tpp3G7pksLRupYWKDCDtSDUoFkH5m17C1qSjbJZAAoCHoziuioTVDRy6vEXkfMow1ZyPEoaQ1v3fiR",
  "key42": "2Yu8z2eUjss2QVewBp7aV4qeY3479mmN35XFXbw8qL9aG8aPVU7z3jd9HTrrVNJ8QgTUF8uDiHaozSAhJePor9cV",
  "key43": "4XpAcGHwc2EJurk8coyrAm7nd4H2fCskFF9UKjdtgBU1TymJMu5CzjCdb5Kh4Z1WCMWzmVf9FdXWayvMq9eeaVr5",
  "key44": "jDCt7YsLCU51pmR6aNjVycG1woCRfpf4CB3GxTUeETqyXEX3p3j24BdDD1LbjgZYTHYcpcucrVxtFGDyeuUQz6g"
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
