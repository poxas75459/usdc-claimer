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
    "g7V81yBv1SFvFB5BQXPAAczGmu6vUcj6jbWx3hEJUVjJFHCAqiVVw5R9FjUrpiSCWzmeNzj2pJ42cguzofwVUFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LD9riWJhvBkqibakVv16EAftUyL8oGSiJaiERDZ3Tq97jqHspLoZhLuHgi9fxgxJw19iC5o8w2ZthGPnzoc85Rb",
  "key1": "2ieCtA7fj7wQLkptp7VghH1Dc54opMRMhBLMr1V6suPmziRCFKLAJZK97bN3CkouJzsBonpDY1nPnb5gShB8b6qb",
  "key2": "5UKQD2R9XNGJsryWWHV2Wy7XMSV4wxVUKLMfYqGeoyn1FmzUT6iYXDS6meWkjC51SCDbTS7MwpmnFCu12YruXg5R",
  "key3": "4wq19CUfbhdJiSYYk6ALMHxhFyoveRr1MdEW9Zp98u8sfDzaodE7iWQwjmDSFdvaMKP5sWqsY9Dfbdwd7scrEZBy",
  "key4": "5RtRFafW9BkmkqNxynLGZbbbe1aZJLzLdmEPrvhxNMQEMS8G6hx2cQ4Qe9D4jFrgC3TKCoxbyx481FgrJqRrWLiv",
  "key5": "3gnS6tcysh3W4f5X3RMPSXMGWKmj9uJLk4itau27dEUgCQ3YsHapUVSX3HyVCu7F2iv3VPRCKnHX2DG4o5eXn5AK",
  "key6": "2NuFc7AmXhH4Jkmv5G442fWH4r9bemFBMxc31CVfSdi6u77yocdpcNfY4Zh7UPnhBbRiEyd8kkpN7Me21QNQqzaq",
  "key7": "48zFPisjpXiscat5n6yGkm4K6LysDQB32kVjQRvTmyuHrDqNmL9XBESvgjVaaoHDF2B4Qtm15QuSkxLNKihz22GH",
  "key8": "5yQztorkpLW6bGbZC55QPG5MSgcFT9kbdiKTMTKWQJjm5ib8cUPJbLFCPXbrx6YrHsmB8CvsyJQgRoy6dnuv39ix",
  "key9": "4tLs24zfbWVW2bcNyzmVokVseL2EEMtdLnTS7aCqQf9NtEkA7BnEUmRg3brGxM4ZonnRsKTBprnxyKivqiHWz4zf",
  "key10": "4aRzSLKob2hKEuj9AKM5DMLErxidMaihqvTgMed8oFSXGcMemjXhREorWb4R736pZSwBRobLe7PNco6Wa95vmhSp",
  "key11": "2sQUjXD9yDH4YmstGsdBJBoAkLNtpxd5ARe83xftZCBMKLBSmWyMx7TeQGhfVcNxD66ztnS16xzQ9ZY1GMGK9mg",
  "key12": "2UWnJsYCFk9B6zoQYdM5i6EsqrpvxsX4TgPoW7x9f8t6h9P9Kcq7BYdgXCt1pxNKe3tjmJd9tZEvRNGZZrQ4ZGye",
  "key13": "prekzZah6KsahqCpTSAUKCGSwTqj6SHYsDgGwgfk5TES1XQHYsQAK8TsjdxL7ntULxBpZF74aVAdspp21uJrEqc",
  "key14": "2ZJCwzBPhM8NKfbHHGkCYkBrR4SKUWbFXECHAnuacJHyzFwFLwYMEkxH8RNpJ5YYBonhHBXGkYduH4W4jVHfGJ6e",
  "key15": "2shRMfhf36QyGdGTtPUyQQk6qfiia1tE6iDgCSVKaPa6QRPdyn4shAdpEuLx5zP7ezWmvPVRYj1fCxtEJZjuc2KX",
  "key16": "2EaV6ZhmX8GX8yHUYvhUjkzgjyAdXYkpsFC3BJVpHKvKsSEt4FZbgsrUv3mmF4mPpYvMJxkAtZMZPBnZ3MJaRLX",
  "key17": "5UhTqehFMCavKiArnCjCArBp38kvHgok8q8ZBHjVUL8rMfqtUCvaApt1pdpYgGNeVmws5HL7Fa65CCho9RFBxFUp",
  "key18": "3etwjxwSZDnSC29h8Zr4UjN1E2fEJY2pwKh5JieNreDnxpjTFPzZBiZQ3KjoaYKU2reQS5zWmipN2gpvaXdYNDkp",
  "key19": "63XtKHP5nNEoxtgmni5652HU3R4VUqhSiJwB1xrAJrdTWn9G4wuAxQf8zrQvQZWyyAejHCGqHWMKKagU2hrKinPq",
  "key20": "7GRRKD7S4nPJDFoHJmyre48urH3A1g4tULB2oEfEvxpw6oXW1RJnKvvjUsB3moPVJF4xSJ36wCAE3WJqzUfsYVP",
  "key21": "iUPhMwVRzz7WBzkArGPRWfBMtbyxUErsbYFkVTJvu5ck2XPZisfgeCZdWoMQoHK5dJRQyX6U3E7CyES8FVjBvgh",
  "key22": "3s2NJWy7WNWhboHw6vc7wv8qLoybtXi1YK4HaMUmtqJim2W7i11K2AA9VMCvuSQYQK7eLnjkYz2RU89L2bgn1yP6",
  "key23": "4agpb1hJ4rjSsK4ZiU3bBV7NCwuSo2HUvRn6QqyNm36vH1TjLFaSvDMMagQFnKXM8nhie4Jp29cJWwsYNwxhAA1Y",
  "key24": "58PB7Fhs2b8hqCHxkAqo3WYUE17QpCMKBV5EzURA8WRRJ8X5AyLeJYPYVkc5HBypBCvh79UNjvnGKZBVhsmJG2A4",
  "key25": "2x57JPZDVvrGJzRnW5Vmk9hxkRiYgZeKRxTVYtLyCbhXucoKbK6dWYahZPoYcDNScM15xjGyjqXGqBLu5BWeofWX",
  "key26": "246aeG8cyU6SEepCX6q1Aok4NiMEWja92tzcPXTACXGGoAkYurKHyRsB7qfLC1a6U7GUSCCdcEbKZRCFJ6D8VhxS",
  "key27": "Y5HRx2jMcn38Nfmtc5CXDdJkWmNZcJJyc9oB3C36m8sD88M44dApv2CEUsuVT9jwcU54tY2qtSdjd6GYj7qHvSo",
  "key28": "33KktT6maTtTjo755cPYVA1mWg7NDPmC7grTCggLY9x6Re1yn9Cu3x3KdPauPqGYq7evXvtoJ46tFM6ZKTGKWPka",
  "key29": "jNCsR6LHGeBTs1SxHZv22HGbkd6rf1ejx6RhHXPsFEyFPbzHhsFs7QaahtN5rRUfmkEynSF8S7FAA6W1KnGAyEJ"
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
