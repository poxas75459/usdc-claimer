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
    "5J8E3utkPbDn9CpnDHxL5BcuWWJsm2b1E56vPLC2CG1rKsQUPX9j1K5HPUpfEwka6CAvYpbHM1bHRJ8sCh3u1aCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4HG93c3KNND5Um9Xq5WYAHeVAF1sEsqSqTTfKV5ymZE3ZFW6DBeCNhazqwc6eqEEsTCAYJkjEZ4upVeJyMAFco",
  "key1": "7Ej64Hj6pz9rrU5WsuqdJ3896V7rh9YABxk39uMPSbVLiCUiUzoUXnPx4Y6DTNtqnoM9WxXqHjfLTAhrH6YCWZt",
  "key2": "t6QcMwabriBBYWjQf5bRJQZb5bUK46AAyMTYdsPUfsJbSbAvKDSoxPYYXEJxVRtWe5WzibwXjkCM3EMDCJUbRg5",
  "key3": "2WMdNpuqx149BD1ZhiP4zAK48VNepahz1MCgRGxFzFRkBk9e4G4vB3Da81QBUTUiTh3kzPiJh1aPt7SEBteaLuph",
  "key4": "2o3Rkfe46h4BoAwuNjqztkWTptpA8KhcpbSrwvB4A5M7ThMVfLvxiCUjj6LPRXDcg4kmQfoPRDagpZbZFT9raT3K",
  "key5": "5ryz3G6qG7MAwGc9UQXUCoXwfJeSi5YtU6UCDGkgU6V5nWCXfraBM8A6WFiywmUpJ1Lss3Hvqn7vHzCpT17akqLQ",
  "key6": "547v9hjXb5dxFYFRkwWLHdwg4od9eon6kXYArzy4FSyvxGJmckn83DGVdFpRNugfK6SbMmLaa1HBTE6ZLGGKajCJ",
  "key7": "2hisb1XFo4hYEvoAJ7enAhZxC2kTKsz3FyYVxhi12ctkj9CUYyFbpzZ6YJupwH7YFNaef5vQse8RZio6bQ2kznhT",
  "key8": "4M9rnE1c2tkPvFR4zX2qSe6brXEwsYDkXYuMyfnp3JLP5bfQEQbgu1Go3pBXpWDcJNZKkij6QNnj3CJvDw7CANuE",
  "key9": "yvhdZaGYKqZN6ra8g8bU9nvAmqjvFbuo2kU8aKvnQyMCqCjgZhWCauuENjdCPaVx95j4KGnP6fzqGUUm75QnZHk",
  "key10": "a9eqQ3h1sf3ekgrcdxRGipSEXwb4wduG9UnEdcxwLUZ6aR7jL9pbQs4Cj4wi35zHf9pCPT2ywc74ynczJTrLtao",
  "key11": "3aUhKD5Jcyfd82XuvdUuJWJANK4aBFr7D6b5vVnYqxR7aeDSPM8EHDtJuLiP5YwNKtk4V2BLVcwhdFF9TuCbDvz5",
  "key12": "2byyGckrCRrWKXQKhM7Ei2YbAMZtdPp6NyUt6gnhMrn8zkMwgwKKLGCRWUcLjBWPNSEz7X8sVFj58jmejZSE4Cz1",
  "key13": "5yxnKZBczsfTtB3e93x6Zf1pfxKGU2iGKvsQu79kLy3zHnqeTHXhJevfLGZGSQEPpeZMg2sgPhmMy32JDPzeB2V8",
  "key14": "5SYiDH9uQWAsmwsVF8vyRTB43ezDfSLYVg1Pr8KvaHmgR2o2EZGhbpmFTXKwsjFYTr1cxBrGSpyneKhQr4LpmM6D",
  "key15": "52Xafkya6whHC4dapipzaKCBZryE7ZFiRuSpBWpFCRyVXXV1uswjXvAjKdQcFyPij3Dncz5uT1XzoPPVUUe9338V",
  "key16": "5Eup8Mf8KMXjnG8HTzHjSHCuNFxe53Qe3LjQ6ZovaQnC9SJcuqCCTpMe4SgcDFZP9Tis12K91s1v75Vc8GwBT2fd",
  "key17": "2aJfQhBAiFDceRCQhe8X6RvH5NVZzwTd9dbhmaQV7JLSJy6de6jZRqGnKTTM7pVcv6fKVNAN1rmmnHinCtbmVvmF",
  "key18": "sfPX1CNhb9CftAS3PLJbH4qqBDpKThi8t3wCE6unX39wTQACLmteDfgpPgFGbSXjSyQPEQEgb2txXwg6RZ82RKd",
  "key19": "pwxnme5FPH89qa2GM9h9dhQXyWseuEEY9uQRTCn2Bx9btzPmBFpfkeSMAbGqhoWMQhWRp7JM1A7EJBvneGEHAzL",
  "key20": "4EfT79CHY3btsFyMXAU2FzzWauzzxA7sMeC6Zk6gKwiesoXakQjQdsN3QowKuXdcYg9b4XdWRsNfWhx8SNukHefx",
  "key21": "k2oBG1X88qPESSzAqYwTD58H2UB5NtRkQLfrKZJDsiuBfYbB5HxFMU2adXR6EvTQnEVqUfkavTTFME9n2xGNajy",
  "key22": "7VeLrkdDHnCayMnxLMaEcWycNp7QzYFvBwYgVkTFvmLbPocydFPmZCQ6c8P27SnS7rSHjEgDzVgmtE3zrFYexhb",
  "key23": "2b2mTxWz8xn873zDu8QQJsW5wxvq4o2XgDUS8GYChAoF5QyekEp9q86KQyFCNb4bYFq8irzeBjx9eJaEE3WYzLRK",
  "key24": "3NzEjUp9PHWnnnAZwHsVomhbzibPoRdPstMzvYmwZLSMMCqUE2LZa2zeTjUcJsXVoMf8YRodag4gahACj2ym2mxb",
  "key25": "2GvyS4xUeBG1sXkbV1UnameUakdV2TakKfdrqip3UQddzxEEYdZPw3tzztFW29bw3ZDKjqyntXAwP6uXVqHeLtPR",
  "key26": "5KRWCiaWcU78ugLrZwGppTwZPcgGtzcTH9jueFCBWgzEQEssUQfk1AJJEecn8seqNqFKZdKssbNg2Fgv3Cm2jCi4",
  "key27": "2zZkeeKu5WbB2jwBUfnL8Tik7GTcavd9Gfv2AssN13oNwTPu8cZhmSGhQNxoQH3r6QUx1NW8yd87WH8tAGEPCjkY",
  "key28": "4zDzqUs58WpKjQNY7c6t2nnzEnQZ4HdtQtedpToSJ2KEYPJHLgApbrrFBYGeTTz1Mgh8oDihma8ke8LBLybjAHfd",
  "key29": "2JDG5sjvJhrMPjmJCvJRP5jyhvA3n39DmaCjAVXPrzrMjGFpmXktPBXFzsfsLC7XBe4zzec8krm6bDksW6m1ytRQ",
  "key30": "4oaP3hZjoMnxM5qRsQcmrCDDXTZb39CYue1sssTq2b3jcMK4ThCTnrGmE5dwRgKwy4xh6XZ4sQBasXhNcbCQTn1u",
  "key31": "3TidNt7Ew2fU2kihosg6NHqf3haNk9QEJ5bJCxzNgUVvjHMGaNfq7r6CY2oyWEvMQcXHqMsXpv8CGtx4edWKXgKC",
  "key32": "4Qpr2VPyAExm2PJcgVw5xpZsFSeH62nDtmv9d2UPyxufKo5cuzWZMhnurpS8XaL9nByoByb43TfvkmbVNoD9GtbT",
  "key33": "55p1jmJaWo6djAiVvf6T9MH4YUYQmPjuJ2hehvwr1u5FRjbnyQt4jt6jJUnUuyaJDcQGEgtn1wtJxiyRjN6yPXjY",
  "key34": "2xif2KZq5qWDTVwP6nYXJc66oTU2qwAMfKMgD18xKZPdSG1CxxmMpqAQLoETVcNeYxpYiQvZhypg6GZbbxk8few8",
  "key35": "2TDfjuNyPzqhCCaEK5VSScR8DPrszi33hgK6u4LCBXWLCPAjErF39tU2uVkxPHez3TFR7CBBWvD5prPSnguKLzy2",
  "key36": "2VCTiUp6XErMFQnArc43ub6YgFYv1fXN7YunnyqVxjqzpV8bRbQVuP9rojEu79mZPiLRaf5uM7CHcfxXDCW41ZUA",
  "key37": "2EqwQQHUWq2TbZgQNxBr3e5ZVDkVFAMpdZvPa4Y3nvvCNPiQhdb3cnjaQ6BLS5VxSEkinDnRfnKk2A1EXfKqo5hu"
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
