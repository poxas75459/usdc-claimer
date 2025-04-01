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
    "58amJ4tQfcn5xuvcW3eM26ZhhzSZauJ3eeq9E1S7adFHZAgyfTXrRqVdxBayNKoJa4PvuFkebmK5ThEZ3FMJf8jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAyoWEPCUo2kR4Qswd1EBEkNZDQNEGELARvdErL1GSNv9iB3firSnqDsM5ffuX5YVTDFofF6M53xg6KiSR3DSz9",
  "key1": "2hJv7i5kPCb3y2JeQyMi7PyF3UGPdtMmxsuQ7PZcZFkfvyczxijcaCdh2c942Qcptdm78HPMmzde5UvaczRGr681",
  "key2": "2wYP2LR6jVMcCW9aWudR2bG2kXyVuZ7ifFBHGGcewSSsKCBpfCNw7RwMeqYVn2CeKZFzWStsijVJSNFxL1b29qZy",
  "key3": "5hrw96FmAwQjCzLBozaPpfxwUWfbvrF4Bd5mwf2Yhf54kG2SX4q5oNjk9fFQF1KHSXbk9RN66MMM8kZNzxcLCL6U",
  "key4": "2Cz8nBiGtcyaD1nnKLoDN5EP1a3WAoJWA5xAq8FyEu8xYN4S6jbs1Y4sdcsG3PXGuVmopHrhm4dbYuRvvQyc5icB",
  "key5": "3gZ8BKXjYUYUAoWANCPgeyQ7BrUKYDxbsJm2uDQwUWmZoqjcNdYPCkvcAy49yz6mWj23HJK7DDXtsY34NR6BMJts",
  "key6": "4kNv5v8Hwx7Sc6Azs5WJfBpM61qGmPaYTjC6Ajp3t3ujdQoocYyjFhuf7V3k1fX5dGqcc6urtuJtyapiyaFpMbCj",
  "key7": "3aEKjMaNi29u3CZicDPjJmQWzn2TLcFTsyvTPegmXDrggw4w3zPPApnrZVnPhWp9bfQ4DfGk7cMZgymeRX32FWFH",
  "key8": "3xZ7C7qF6DRJsYsXPfbf3CnAjMGToY7xf8ojnodWtf5CNQCxLQjcZyfJPpQQ5AXT5Goq1LgwU21XstfKTXqW6RSp",
  "key9": "4S8uHwVtHkzoEeN4ijbGuHxzTrtBz835R4M5NB6Tek2V5z1WeE7z18mb35kmWNsxDt4KjrB5JLDbNsvbrcsT7doa",
  "key10": "vaKQFb6jG1LRJmxyjdn3JixBXdYNo8v3Gc3iPPYBzZKG93fHmmkUtj89m8h8sU8ZFDzxnuK65nrkU15AmGwYS8B",
  "key11": "3SwTCLNd869HEB1M1jHveCtwTWFSGufXe8gLWXTu12v6AGK3jcNGTurKkqH12VVc8KoL65rgJuA1Vk49ZKCQEH66",
  "key12": "63w4SBjAvsYjj9mwbFA9ff6u3xDqg3LWvpMefxB6YnYsuih6jSe57cbfWeQjQm4YZX6cYqE7qfGHwTAXWXwAUHVp",
  "key13": "zq9Aghkaguq1CKLnF8iJ3cH9QkrBXs8VLjCk7aSMasF7Hoik7PrvSh7pjUv6NE8U3y7DPUvka9usuVG1A8HNJEx",
  "key14": "5QqUTA2vNFNqyQ9H7UzHU65vZPbNKjYW1qG3rucrATFPRbNcB7Vf1QEZPKK6TwGNQacg6ieKQJp26LBj84K3XskB",
  "key15": "3GMjCGxeu1xe7NnNFpCtx5j4Cov6A6J68JzDhBQrziB6hQqfVuhpDZXDCERpRUcjkz4JbNXbn9EDXoqMaCtUgqnE",
  "key16": "57ETzimkm23cbA4bCvqS4mvJRyb1yr4GJMfAUeT2xVnXfnFhCQDKXPgnan8WSMUYV1TbAyQhy3ArixgBjQQWW4nn",
  "key17": "4RtFwqcSY8oq5bMQzDAhZA3HiQfgVbyaQRLG8kZNmzhxxSkab8QK7oaQJYphgaxbMbAaCNHrzo5hAU16YPKJckoG",
  "key18": "XMrRSGLui1f8z2zjvMRwGXPgRonhaw7h1JoisXPuBUoBUEapGLF4ac6du1L7kAZ1GJVcfb763uqB5BCY8WDDivC",
  "key19": "3fCcy5fMCKCVjwL9BDRfHiUd2Hch4qMbah58GD1bn5odGxZ2ookjnonosp753ajn2ccp5am21JBFRn5oq5DdMQFB",
  "key20": "agnR8n9YbBmo1HyhTdqvCuuSEv9Mncw4wzVBou39pg5DZzNRGERhBWtPSH5gQCxs7kTdaenUf28uU45JgP2hmGJ",
  "key21": "23kjMrrAL1vVAmGBQxYjfc5g7i3b8YXLxSYGpRaTgisN9JwLQNUFW8KHCXrczqLy5kcLVGEwZVkgS1HarbNs4cTs",
  "key22": "M25oZNstEUUMLttSyhoXjQaCojSzF5AroXGqpn1M9WgRgRVvsSAvfP5LG6SVxoezCpwqESNtmWGSqKngVDKNMQQ",
  "key23": "34xvUASQeMJtvHwr9TtBvkHbF1U5ZTeWLy4j4Tan6XPYX8DTezVBN7ryhSyYL82aPxuY6q5zzsSYQYGA6u7sSwyb",
  "key24": "MirLF9UvJ5J7yHc2QiFs3N6XJoGomZs73vrDgmeW6D574avo5Hjsvg3MoCAkWYoLPNQnTeJKj9BeUbW1vuUudg9",
  "key25": "sPXbgL3DUnVqsm7PDa8mpzut5aa84JRtEFRrbo7uQXQn5vqLP3cJdPXg9y7tMsvW3J6G73LfSguiyqiyu8SCzmD",
  "key26": "r3xbdEL3KyaXNFfHaspW5kSzSjaZvRwo5ZAEi8Ujs3THBYFHtTYXhCugR6RP3A9u2WqjsktcYDbu6TNC1F2tpKb",
  "key27": "2rSyBZnkxUrvGDb7U97RaWmGVcWazjFjhtKKoxn2eNEtMDwGJ3W9oBnyYBmCZa2d9QZM1Ywhhps4uGWD6opTy45M",
  "key28": "29GeZuqX8a3gau1EYnuJ3wzo84bzt6HY7oKQXGDEi4iNQXuhXaqNGxhfwVmrJSVGNb71dqyuPLqrEUo6MEy9k8kW",
  "key29": "2ui69ZaApA2bx6thdAaDAiVRGYk8dV4NPrwneYtANP1i2uFfx6XKghNf45PMcew5Pxk8mjtMQvftBfc8GbkEr7Ew",
  "key30": "42saZ1npXwvg3TNqu95LETTLe91fZVVFsR1ZyFn2zgSfJBUMkRE3gyELYoGXimRRjfPYMUGycsoPgqmdd31Xhu2m",
  "key31": "3G9p28NzMBEEgmL7taqTnVujLv327j7uPM9n6L3qUcFy957rFVAnSdhbBNn5dADcomWLo6JAMmn6hpYzsoBqqzLD",
  "key32": "4WrxxuP4uXpZbU2799Ygi9dgoAni9ny8nJEuEa5BqKntkFx6JveCoi58jD1TZyYYVBuUXLHay7QLZ7dC5eP9pTkz"
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
