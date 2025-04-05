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
    "22Tw6kLVtL35XAY8S2wHD7aXDCJM5qCBJmZBSig72HSdzVbBJHCV3aeCGHDFeanHLUPbbGnaLt8fPzkx4CKVjSks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eRP9suLhh9UhR8uHGuyG1YzNPb3SRb6NQiVUgAzFopyXmqkhUXz1NCwJHeufkFZXTL6uxLYg1SdxoAvyJb9aXP",
  "key1": "2grWZDPnX3GVhVUb24ZftV5TjEAuN5d62CTZyjgV2n8UuSAJcM4HwkmaahHkty7AuwLs9WvNAgjfhLzbi7Kaov33",
  "key2": "4yGdH58yDYnLu34wHAMU1N3gFbTUZCD5bBqFsznmT5gXKuq2jPobj5QCm8rAEHG5pBQjkGaAbMS3kdRPQKx9Vo9z",
  "key3": "2ePprGiMZsgQwj4axRFtCFwPxQYPP3EQXWLhn921xxem2wDmUyZNZQhjVcz5uJwkdmpFcmCkQTuobnxoDrzJDK9",
  "key4": "5vNhVC7V8Arm3ssbG2fa9zTEzRrbsgUPoLRPWAvsr7VwpFWsFuDCGmK5Z8CSWoYJ5SBz1QekPL7dULhU9qGZe3ee",
  "key5": "4oSAxoJ59Ec1hA1ZAUe3q8btTgr8QLb7cYUmWzYw4fEwXY4DzEWgx9JuAN3vuup5tyr85Qru9iwMoxrtTsBVAJ5Q",
  "key6": "4X9zF73cvvx2S6fMqJeHfhD3bVYJT4Z25JnN1Lwza6VpHGZTbC7oHxZMBgNJrrftk91TWoUx4TgKqoPkcg88Utic",
  "key7": "2s7fsLcJXGBx3gJ8y53qdTtYUaUrtqdxR5P8WGue6mr4xBnoooUjHnUzPmpYZ54dgD3Kp5eyhabTb7J2JSEHUW5S",
  "key8": "2waVUqYC1iv4TmnRnrWc9QgnuyokZEYDaVbcY1AvMWeaAXqndT6uJjofJ6dWDL8Q3FeisgCtWJ5EAiQXtSs5wouj",
  "key9": "5sbqtHb3Erx7kNQMTEjN1txwefFmu8qzoML2YXrAJBrnxutrMqyZnzgESvux1HTbQoWh72arM83QRWnLZaTpsoCH",
  "key10": "2TQN16n9S3ZVa83sguaLX1id1jRBdvAELxGYCaSDS6A65soiiAHBm4cqSHEurCisH4qPYaZPUCZGxaAsW7QZW3eJ",
  "key11": "2QT7yA5AX6CXLsEctK6jzphCjnJ8WdY2GYy1CG9TguDJxxQJSBb3ZZdq5QDfspVyWCmDBf2Z7txxU3QA3NDdw3Ja",
  "key12": "5zXu1uEKvBAs14kwQrBy6kYcwVc1sjfdrRNcNjv6ZrJUDKF1QNTGcuumPtQDERnL5WuAkfKYj6snjvj4CbpQibdL",
  "key13": "4s8G2RVyxkwBrkdocTtUCDSYGWtmwpurVKY1Vdyd7xaC9N5gcWeoH41rLMxFQFGfHLZpka9DoYP87tbwqWngNDpG",
  "key14": "5y6nJUXmhsKtou99gbcxakPXZd2MAo1moiBnXFVK3efHXQABKCbbPCjwjP5LPaNfK8W197NUGT4BfMR1XLMNDmGd",
  "key15": "1iseq2QNMZnfmtTyqYT6AGsM17H6bx1FHEuawUA5gQQa7SUoWbAPgJKDRfBjrx28vEprxHdb5aMT9yp8ga9LxfT",
  "key16": "3swCdxGAbe1PbkZXQTUco5pJLUvSRZPE3dv1x5NHJPoCcP2jLD8L1M3wyhLhhYq8W7bGUh3wVJb5AWhKAkPX1w6W",
  "key17": "2K2kiTVuHiNxnDmC5roWyYgAL6LVA31X21gdVTM79Ty2yJyYmiHtq8QtWk296TWSBtC5JmSf1tjiepYWusXaXkeN",
  "key18": "3dbUN7bNU67sTi6ndQkr27BwR8aqdE3LwbNU2yzMsXQRn7nfUP3dV6VxpPkngc2mo2mdwt7oBZJgb24W44RoYmh2",
  "key19": "3rShk4SdoPgHundtohUZf8fqtJr4bQjKKBXBHsbC8fahxupQmusddP4ugXmUTHU572se88Z9yAT7Q2TeJJhCEhaw",
  "key20": "3zdu5564wZZ8SkGjFWhruidXFm5gBUWKKrYdcEotSF87ZHRVMAz28WhnJTanivDbMir2QHCh91m363d71LWmfEcR",
  "key21": "4abLMCnqotLEMk1VCAWRvmvcDoWKYG13nMVqTXoqoEbJn8wTLb2s7dr9TYvZbU1zhV6t28Bw84CMK1bWEnzBbaMp",
  "key22": "3ru2SsB26jjP8EzM7hFjvyt5KzNMd5pFkhsptNUNNyuAzF7hzNFd3q4HP7FJgGx1d2fFcX11f6jMacz6sqCzVWrq",
  "key23": "4BMDedHF74tyk4UpoedvoZWoxRpcFmh47sGH5pEhTQ8USm5h1VmP4ZP734RUF7kYAaYPPHRYo6SPHGmamQv1A64R",
  "key24": "2vm6JWHPpYi3aQV3zDwKY9em6dpSYTfYspDHqddzb1FdiGgUqqXCaC23D8zbgPafkseeaXy1kYGDXVVynoSALq8z",
  "key25": "4qW77BTJtNKVoKzRT9J6cXCM8b1UmqULwLZELzBcTEc2VZyZrVSoRYwLiLs2GwFBJJLGFgzxjR76fNuwWWo9ZCdD",
  "key26": "3e68u8PSmjs5KjLggL5cR7hrtQT83RGpk6WzQmYuFRiVTcK5AZuKu4TGKNPM3fgnhQCxwCf3F7aMsTPU2Eg4yWph",
  "key27": "36iz9xByusZftBJTMiUfG6oDfwhT2pfYFSBCTNC66x6VMp8HehMsmRWy3gAK4tW9SF7zkoTLU1Q7L3EHQaWPUqwA",
  "key28": "4GPfRDutES3mp5BJb4kKJbzo4Hd6DsrTFWUaD4ZJMNGQxhCCSxrAqLZaMWg18QtJdqTYN5hn9MGNxre7tZGooJNy",
  "key29": "5DziMm82h8UcRS8Eiv1Wd4bXEynMhyFVc1uEvphDT6iXCZiyh5QZVnHx4Q82AGYjbTZsf2gCtRJ6UDjxubXDe7tW",
  "key30": "24NbRYByzLR4jSAg1sM8AvqenFagmnh1kHJDT5ubUJ9BFttcN8iEiAwkoviV1KPqcfx2WcUNRGnWAZv4pxKdopzo",
  "key31": "3E8Cbcfu4Qp5nyZexjzzRsNKxpaqiyfVxMtLezpbvJzyXDNEti7QEowiQdYyHNAjFHedJ9ok3LWJNPRLzAbA4FAX",
  "key32": "4pD1Z3EKDSWACaKrgYi4ZdvqpZW47NJAYjS6nCCzDq31i5wkuurheFy6bp9mFnaXPQjSi6v51WAEqbffbCYBPbx5",
  "key33": "KoovReS1R1pDTtpFy82Su62RS27F39CyFEuJb9LqHhCHMfbmy5FzKYxU3Tyk6yfxy4b5eHQqwswcG2yE6LqnE16",
  "key34": "45adskVDuCWMU1CFY52cr65Viadcax2shYoEWESmgcBnkV7ahvyHQ7meENEYqXXjk7yhHcfau1zVttJBmD5L5fot",
  "key35": "mPny3R4Sv3Myjh467HdwMniT7ze1wFNvDxFujLCpBzPEHz8rp1CCdAGurXRu2ZKCYnj3GXiS7Gp9kCPwDJ6Q6cH",
  "key36": "3o5Fs1ZEbdNWn7XMYMNmYqCceiRzc9yzXKJ38Nr5kvGvF6S9qwkssBTZAfumo9u9s78BZi9fmQQv2EPbTgU9WnyA",
  "key37": "45tqZQJ8XgbMus3yv25qnPUD3GaD17dpNvnZGLjim6s2tgPEuTFkwn7KJG6X23WoHRNQoaedzdiT4VE6w3UB9w4",
  "key38": "64GM9CdnDU7arWq5TuYfV9XCyK1DasDa2iosMsr7XcS74hBMWv6fACWLJJyazCsoVZUMeo23Zzw6uopLSVr8VgQf",
  "key39": "2787c2pHsYq3fFyvpV2rbD6XzTFiynJFeg3iNVWhnnw9SDWgxicr5hCP7fiGEUhh8Nzo1rxm7CLmby2bZmpegvEK",
  "key40": "4KLjfZEZSuhfPQ4q1gy51oW7sRWfffpf8exdPZgKUbPNaFYCbuRPczd3Uw3QzNRomRuQ4drLtYiqBoHncpY9Y9xV",
  "key41": "5xV75z7DfbEXTa8xZy8sDUu6QMCcuPmMEppWhqif1WPSgD8VwXqCxiNV7r45TSrAU8ZWYRMLgnFt8busdCZf1Qs6",
  "key42": "5jdtdWqQfsBKa45FXoFfgcVK4o7catAwyjQa7AEPQ7ESMw33YKb26HvuYsS5L58obbRrfTkQ1tS3hdhXu59NTFaT"
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
