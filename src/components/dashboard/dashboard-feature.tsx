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
    "VEqyDbDE5rukMq19ixafRSjsFq1zHj9iwwe5j2LrQ7LWuZ1s9ibf5XT3ppzwasv6LRkyK1zK2aNhWpMMYLnUSjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363KczpMdByJwWU92SefkqhHC6qughyk3wvSpdENrAbgsfvWTG3eCFnmX4pFBqRnkzANEE8ttTZNbaa1kqAoMnqw",
  "key1": "5mmayC7xDcYzU7R9VYmzSzBqZNiikfvPBx1TVytspvdcPex8V7e6gpVZdHZWbVu83fFmPXm3SjSwno3DL5bpikL",
  "key2": "4zTx2Ujht7XGqcdtvZGqcQ61KW8329t8FgQj8c5i3EfdfpfGzKswJz1J9f9EizDM5VveZsAmTynEUDed34T4u5VX",
  "key3": "83x9fpyUVVdiBXmALSebrnTncgYF7MBZDNcjgGvsdKwEkrxujYsFqCbXgxtfC2fjpkYuVcgSYky52CYaEzcnjzv",
  "key4": "4uCyrV3kLyTjsRBzrzjq5GXNvFLEsRCmob6Mdm1qWcaF4uS9PLTWzZnc9CJMhCzCz4zRVGMXTrkZr4fJKyMFuJC4",
  "key5": "43XzW8qAwjdYqPKZqjgCQLrEtSVq3c3Z34Gttt76zmqpk3R9fGCzSgiriTNTuH67b6QHziHkH9C8ajPD7EyTDhbY",
  "key6": "3DpSSde58RirR4Kice91DGY7LETn4X575mhzeRkNK7aCHfxqwRyWsjiKsdknx9TpeGFsQ6Efh1ZFGzETdbspaAKh",
  "key7": "5QqyGa6ZeToGjag35sEk9aQvDa2Nw4wk8UQsPLg4fHBkbq1LBAK49ae1j5jCpQVXEJ1pxjCSJ5j5SzeMYgUwpu3K",
  "key8": "64ySTWE4QRafs6T2GzZnNUDyVH3u6VAgeWEhHG49EKzPJAhYXDgXZ8yTFB4kDFn16WB2QUcnQ4j4biaKBdWKyNtR",
  "key9": "22jivH3Eej6F2kDW3Y1wx2qDAttR81nWw8CwgBaUCn2WyTniSSErbYTj3GdKZBnavgxNCjLS4MD78bMfeMXh4umc",
  "key10": "2MZiRevDcAe6Rq71Zfs3m6xeJGc9W6bXeVVdy4TEjCxV5KUv9QgrNJLC2v18fXbexLC7ssQAHHxq9Do19W7ZGo7n",
  "key11": "3cUqqfQzQhcvTPdMC8bfgWydYAPo1gbuX5r9PYDgpk3sCqBTqJ7QUGx4aXcbr8yNgCH9z5cnBy9P7EzEp2RuVym9",
  "key12": "34H8K6uPLnQ6FkGZzppqy9bFdT3AtFrieALtFUEHZhoT5o8S5r7CYazX7fZYq3XJR99Hdm8wcQBqYdWGqFkpS5zC",
  "key13": "2kM4sZY9yFprMBf8DdmS239TgmdtRisvVB6KZiiqQievRNqsyemtKAcgj4XBmomUc2SPuJ2CpA3tfrXzA5QWFuxp",
  "key14": "VqnpsTF2WyUKwmWbRpBtQm452HhmKCYstBsQZszxp453PhJpUn7jTQjQ5Gff3y9xzGS9UPSBQYkDehM6ng2CRLA",
  "key15": "5AkS9xCjtqkDLJrycahwbVTV1jkARc9M4h81aGRojcXCRozcgFfsJg3aVf2ZMhXAhry9KrHbZzgGHNHGo8yzBYS4",
  "key16": "4dtf9dv4dcXnw8qp1T1B4TkQZdYMHRcLGWfvKx1o4PY4kUbwqYLawdSv3oajooX7StcYGcMHSSRyhqCoDVyWg95",
  "key17": "xDNEn8EkA1z2WJ1uRyYHB7U8gokp61FqxQ5Puq3BRJLLCdE7RHY4GvAjfJFuc2N7qrUnydtWiKRDeBGFEw8v2gn",
  "key18": "3XBQB1YcpojqhYbFc9VkK3bankyLrEes6NxbT6TZNha7oXcRWAyPeSGumK3GGZ7TPDj6FpWuKAtCfQiYMuQfYsxq",
  "key19": "3drwLmeL1qP2k5e6nvFq9dWEtD2XVVqE1jkQwiqb1AL7F7JYUjMi4oHHRR74SADitu5ffHfsxCnx6L2c41wMqufo",
  "key20": "tLe91yGB78iLhMaUR9qugAymcWASxAntUyWG9Q23asmknvbvQMkgzg9vSnQxeECzRXNyVcEnbXZi76vcWW1NapM",
  "key21": "4BJxPLNHGBXv8R3dhYaWuTsJ46jktmXV2fU5gBvguikqyhhqEkWPoxdJPt16Y89WiwQDYuTM66az4VHtjCeiZdsz",
  "key22": "56obfUor2J3jtm9jgkUonoHehgfi5PdAsMUVyAqRzsMSYEEbufo94KvQUUHmt6JmhPJXvjpBTvdSumEwJQvc5623",
  "key23": "3tWwK6DjhuNUMQHjiSX4ZnFaR3ebUQgHTDEYCzXACvK4eoh9hYZYjfMqNsfiPGhyHn3s27oBHJD8LUkY5oCo2qZW",
  "key24": "5mEeTSsbP4w2grQChGJwvwsFx8Cwv1B8SR5rQy2bosDyp8aGdhTjYxxCnP6qnw3wFr3zc6L63et6z6YTbfYFw5Yc",
  "key25": "3iqhqgtvndK6NFP8CSCqVAozKZNyQ9VWoAiY3vhUafSjfMhZjRdEJPcx6VvrHB5F8aeXc4ffG92KyfbjRZP4GqY",
  "key26": "5FfrYF1mHBdu4jyMtFA3zitkMCUaEAF1Bep4NmLtkjgPNhsgoiCzaNjkC7QxPbFBkzwMc2W9uLY9NrhhSUF4wwwc",
  "key27": "3WTtWpi8zfWrmHmULZCEkdpFg9mE2hLV3vxjvjp27DKmKr1XMCVkyfVD2eyWztbuAJokYoAcHDTzwh4ncQ8nQKfa",
  "key28": "3xPrXBdyK8Uxe1jt6XyDEqW1UJ82Kw9QNQQxzCQLFnMJnuaUaVyPVyqoLrqvpkBJQYzLZmdYKyK6tpjQ9RueLKKV",
  "key29": "2LK6bf4pvWCKvrp37furNgiyJy2uRsuoCTXzuJUPf5xv4XFLeHq4L6jspskAYhFWQPaNdyqEGAYEYYboixd7WuiD",
  "key30": "2FhtTuD2uykvie2MfPBwCyMD9s8DfcHxGqW7KMLS6rgGp1vVPvKRNxx4jLcYU4EVQnCHw1TQQ8uJBdrgCaVYuA2m"
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
