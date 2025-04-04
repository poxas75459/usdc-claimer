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
    "2PugUKXdUfR6WUWtdiatP91skzV1UzKNbxW5HACPXjhDBLFv2K2XBJwEeUn9gDykTuJo6RYgxNBg6tqHy1emDrZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2RVgAdC3Y6dQ13Smx44yoYmYg9GAzCRUbFhgUdqifqEoQrh1ByFhNHws1kjB1zj12g5Y4xHNGxKoDnTwNhmXZr",
  "key1": "2QWXQGn4YXJwvZV3XZrR7osNGCcNnSu7ZwgEiRwZABM4xW6nFR5dGVQ6iZ4gFjTDZPZtv4VTsrYjyNZG4fTiM8NK",
  "key2": "5Zp8dfUuAvZK93EAxxgbCcX4XWRpoaTYy36WCDNCnN2QBAApZ7JhajwrJoogkTh9quefcCYtSvjhTWe8MVvapRnU",
  "key3": "47QXr1LYX3iwPuHujpB1PidfLHCBEebNWXvdatDbLTYZd5tE5Ecgt2pEXvmaUTNq9E99DBZztWRoARLLE6WxXZvB",
  "key4": "2Lgq3YENYY58Bm63LnAjA5oQ1ytjWNRNAEcyi6Vxr5ETnr6tMSt787Wudrx9Jg5cCdY2n2vzmEtnVpavLHQeCtic",
  "key5": "3Zyy6HkCBwzUAH2a25YRqbehDz9afhFZaEfViUBUqLPU8JJA8rvhDw3SQSdRt1WG479daHfwTDmqNH4ZshHg8E7U",
  "key6": "4gjZVkB9VZNhUAgNAiNjoTP2cXfsCDQiMjQUzxznwwwkyphxcwPBExKcCV6wfM7x5ge6quDTZcaK4xb1YBs9bd2G",
  "key7": "4cfqT4yn74h3ikjjv9RfbHhMpXi2GV89YV5YbVxCyW17Vf7ivGA554vSpwoDbyj8VYNPVwhyg5ttM7zHU4YUForX",
  "key8": "wWPJq1iJhgnrjbMrD5PtLiYpQiq1uZSChaWKqa9gAcn4cWQFh5sff4iyDUCAjq5oSHTtcCWMtu8NWTRTZkquhx4",
  "key9": "3txSCosotFvsNCxKgjtVqVyWsCEkGMsubvNiMVgFaPGQhGYhQ4vKJ1MTrddUHfEYDpicnusygHX6H2Q2tJaXR25X",
  "key10": "56fvwaqTC5XptSNvCrjzDSU3s49uEH7jUb3rt4aH4yaZuPSWwGubk8rarDAXaYNrNbRCCi5hMnvkbmD5H4G17uzC",
  "key11": "2RxbhjptMboouW8yXcv7fLZwKA24cyizCoTqQfvsgqZo1SKFaKUi9WUt8dE6TTaf2DYuN9zMPYJmGi119XvPfo9b",
  "key12": "2LbW2vRXdV8rgNvaAaePdmeVisxPjphYhK9vmBS9zGEKfM5e5oyKMfpxKijPJNQA7qE9nbrNYJaRpHmBPE9Xbnhk",
  "key13": "3EcyxP4EeytUkbxBsFWJzqMLJBKUum1KdFxtik4RypKrhMdnaJRubxrB7jeVgQo7GC5aPvj9pJWeQq7EJs9WJQuy",
  "key14": "5uy84MqYJBYEXLxqGUHMLTLSkeFQBoMKZc2HdxwytNvvGqcZR759WGpLt8KnRRNaDSeWjURdMP9Xm92aRQm64Ksk",
  "key15": "5XJWmgtupfmWup66o2BpH4ewMUaS1S2pKX7c74Uqn5iGaUMPj5RvusYthMeavyzdbYsopmJYPrJyJmq9tf481gar",
  "key16": "4wimZ7ECFb6wHhtwZmRoBUXyfSsPBEryHyzDVkdXSucFf373NFwhmCWt3UsKVkGjjJBW9xjwDB22nhuso8tuYFGd",
  "key17": "4YM1xmMp59tSohvLasYyuwV6W3VkzWSTmRVwYXypxtfHgT46PHFYR3WKf1xCFGhdXT3z7VWic7BEpUq5qswh4huQ",
  "key18": "2ecaBaNS3T8712QaekDn6pC3GrEtySMa44fdYLAt11Sz31BHpQfNkVnCpajJpp9pezfryiM5TP7BAh3wJtezshji",
  "key19": "duHWRrBBddbztMBjPxpAXrvnW78zWenCv6Lo9aUqf8QTGyh7Nn8pBoVKJxKySZ5yfrKKVBedZWehqUcyoNKvozz",
  "key20": "53D6x3e9C1tTdPZ54XUVSxyDLGB2xsW5iat75uVGexaXBdMhyf827giC3Jj6FqGqJ5me3Txz3QYYcGouDokAuB9W",
  "key21": "5YTpw7nExCWNBzd9Y4A5Vj9KXPqGse7ny1pLMyfz8EJdEP9dmcZEbEK93WRe8U3rp4EU5sM94WMi4HehZyt3zj6J",
  "key22": "4rAZ2TK5nSBEUewwYbxBMtK1oi5BBo4gao2jsHcpdnvWZ75MkTeeKiwWzvdb8vvPkcPr7zCQc7sAQ9Fpv1LWuBJb",
  "key23": "2JgSb1ksvbQNkx2vYFzqXLyoqeJCX81UWanPX63yQa3dijLvdovoiUVnfLJgDgoCHyf1GTR8iydJiA4xtiacWaze",
  "key24": "hZ4X3Zd6x4QFt2HZDSkcZZeP1SPGviVY1janPcJoaBJfDdaBmL7buzeTcoj7CL4CEZZLoDhxDetBeS1YgCLu7Ck",
  "key25": "4dHo2rtofFxLYDhBE96GK1BqX2yuw8odWkZqAKsQXUYREufFtXr4SLVqKsotMeYSvGM937zCYVYT61vSwqVAjkhW",
  "key26": "2R4qUwsCteAqXBLG4fJKmqXgymYwvVYRHD783i6yfZA3t5woDhBFoavSAajXrLFgt3TQLTg5WfmrSYMPLNfWui92",
  "key27": "3uSLB9tgGpn2AuwThfFXJ7eSnuVNnLGBXH9pP9uyzvibGGFzGKsFkHbPD255LU2YvE22gJiLUSGc1DvbaosEq9Ar",
  "key28": "tXNrsY9nnYN4d9MU5ZpZKf3D7HQGaV1yxXrLuswj5vaCnwDmMJs7ZgHQv4RmudVX8qfD2iiJf5s22a4Nt7hReKH",
  "key29": "43GwE4kdPUt7LC1UapdpDMjZGQ6JD7PvR6uLP63jkj7moT5A4iKyp7XkDPXK8dfXJFxxUDCUmJnWj8XesfEH575N"
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
