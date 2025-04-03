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
    "t6N8vyCroQ8hYNskDc2EeqLdEeWQFLMK9xxz7YoesExZoGBd7kMEv52LEAf3Rr6b3bmpV4PwBWY9eaAVvu3bDk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJ31c6QsvfdUyYvoLqx3Fyg8PR1K9fnJodv2sDAiz9Mu59Lxy87Rf4dGCipjgAwECwdmSLJH1reFTuY4zzZ19Pi",
  "key1": "2Svkb63Fry1WaHKEyLmn487XvYXydLgs1Fagn6qfUHE9iEhVoVqus97qDUi6UkLUd9bo1WNgn3SQoqX9XBSM54ZP",
  "key2": "4dLgeoVLhbUKjR1tQoNELgRDdMt5KVWvWBxCHSmm4V6QtKApwhXdDrURxaXAtw2xJRg4LwFbuv5BnagXPuNWzoBY",
  "key3": "2RumXJbmh3jSE8AbdgoR4QMcnHQQJyqyo4xed8H7gWKFDCd5HCuSgxXXR3XTostSqVqiDwgSBdXnZMHWUa6znX4k",
  "key4": "2jRLChMJeyj5kY99rj24Nc2zxZNnfyxAnZjftkgn3268aEXTipjincEgtzSTBbo6ZZt8A23LTpv2e7diJeSzKWHE",
  "key5": "5odqctnkXt8BorAPAAsmcdHHdZfJR8rEwVAUCjfBemhEc78D1at8csTfd7oV43B94hzkuw5eVpq9UM6THLjV9Miv",
  "key6": "2nMwFiBBm6D9PPdUt5t5gw2b8PM9WHydq13Bo1togT6yei5tCFEp9hH6rVbt3CF6fJ8nA8RnBAD6zSTyCWfJJgVH",
  "key7": "2VoY6fnQASUdvrmvXufZkrekBwuinDDaajUDm616o3dWgyhCFTP6uSyHoxCVwmKMkedN9GqqxsxMTgvcoDGgQtWC",
  "key8": "3KJZeLBTX2jfAorKfv5TeBTAKP57K6NbFdqTJJcYv893jR9PpKTb1HQVYAjj3oeBuTCAVoXdjjjj2dRxTx37ipVY",
  "key9": "2x5krC7h8eA34UejVya1zj4S7eRdLLBTQ6tNxA1WJEMNQmkztzmfVk1UYYf15wKEvqS6hMEJYKsGEpkXzqSXKUPr",
  "key10": "3pdh66BXr6513m3vEYiotCvPaKQt2s6N89Pgp8yY4qTvAkc79rdN5SjFNUcQR5gv3vJDVFeNRWGrt9xF5wogHcf2",
  "key11": "67Yo8qYPfBJHm8wNCWUjRHnvw6dJfcd84AXuv6Cs81ND5ZMDQt9LF1GSNz2L8zBwieRWPviEBUpFcga1A3g19j82",
  "key12": "3KhLg6z7jHCRDLvHMtDgY7AbKKSdRFDRBKQty8p1q9khNZxX3MpxKKvBwz3ZMWdU5fg6aFesGhNVSED8oL74PaLL",
  "key13": "2kouP4sehRQ737HAsYfoq1r6Vbs6LtYBKtvoP2zRPfqY1BkTD5wgS5SYC721s6UmroVauek4dV3i4MceM6xBx1CZ",
  "key14": "3Ydrthxf6LSeAyC4zp17xMbJvf6aQVroYWcxRJp1jT21XsC2StibfomaRTsGvCcZj2qCGnVrgaYRhwYTH8N4e6Wp",
  "key15": "ChGzDdcBnTXjKRGTwfLsDQdVkrQxiiLYGYDnwY6HBpyhC1mfaXqkCsnMxJtJsQ7pkeUaEDgJEvxVqgXipfCoxoJ",
  "key16": "AAGtbrX9mpooTTUCp9FwcN6uQG9DzSwwbdnTJpmwysy2Rjm58FVaYKvZKitbUe9XrYTDNf1sUiNE49Sr3ah2T83",
  "key17": "TFA4VtXJ1GkwZ8jhGaXXvJopCCT8Biu41Ftb8T3afFswQAYPTijZ3ATU634N3gtUv6hVmkL9C638ConW4Fy1R1Q",
  "key18": "5yV2CKM3WfdPKTwL6XiX8binyM3YM26Xcqfegvv7EHhW9BezDqyioJCggWioqLRZucdqiNdibEfWqmmf72bUYnSZ",
  "key19": "57hAB45mt4u4omHtwLuv7XGPx1xR292VasdGuUR7S3KvitjWfgodGXH2PJhwQyafJNc8Z6KPBT6xQqQBmhq9gttb",
  "key20": "kwCLiU4ygpRLvYYkCW6Rz8LHptdfeqheoaAFhp5qoume66Ac6g2ES7Yf5PVfaL2QFJb4ow7jX7u1QsjseXbhfki",
  "key21": "4qDeibRCyW9e75fSizsjsBk276toUZ6sqSEJeqEocQNUL92VboQjqKbhSop8Xtuu8KnhRKGVimmmiwGV8FUJgwwp",
  "key22": "ew9qfMM7XRhLf8Jx1gxHwLetS67tXii2jgWAmXkMGz8zDTFNdDbe9fmW2bCXGP8pCdReB1k87XD6KdokDRFjbrN",
  "key23": "3NL5KuRFjxnmw9EHwQPYxM8LkDhfKuFLa4qgM2ZnqFzPhDzPQ78uYdBmkfPESGvtszhHFDRHiMawPEF8dR5ufR3S",
  "key24": "5cZyuGqrXsqyiykR3f3W9dDkX3oyKWzuYa1xrUNCM7ksgrJPjWTQ8QB1QYBVLxPncMTXz4baWCZC4HaZCS3XEvHn",
  "key25": "3t3onB4JgrTtvKmWah4NqvFkDKDC4BRMLjsagPp1j3qqdY9pBgVsAwwr8gFt8vAc3SfMjpuk7Ncvz9mnDCjBFPBK",
  "key26": "3vLpgdn2PxPcp124W8GPP7bb9iaGCJFHT2tLoLpXaNxnLQdcabJzJ8hLKVn9gpxznYHjMcfVhUqjziVgKBSyxirY",
  "key27": "NrG9PHpkxhVnVcnto15LmjwGp1bGY1hBRNHuQoHNxHuW2XkbJnVN8pr92BcWedhUwV72pDCLNmduKZzShid2FW3",
  "key28": "5drMqeTHpr5ytSbuyV2QVH68aneEqpTDfpVQuUTqe7aCtTqFWtJDFcBVahKFaJsFtEduer4omToJHVJMMgSqgQd2",
  "key29": "2eeaYqzSAnhoDfYdsF5HszfKrKXSSFmgPPrW7Whcp5tQKa1ttDN1prxym9GGmEN4kYxjVWeDWfbRMVMkjFsQkQa1",
  "key30": "4vPeoY9b6gYPAiWmwXRsieWzpEBwcuCTDv5v8zNJwJHj5CU88pYdKKfgS3tTi7HeFUu11k7ntetcESQ7kywy4obD",
  "key31": "3j6tE9V9SXuXSjTWNVsJ6GkFr2M18VfVWatQnaNgAexC9dj7cPr76sk29B31EUcaC4fUxpFB5hLNJJ86HmPGLe2E",
  "key32": "27v4jFg5MhS8abgx8895jF8KQ2E3cu49jPi57GLMD2wo8CFfCm5a56mbxzmK2E9zrhtRYSWbtZ6T8uhVX5tSubbM",
  "key33": "23iUmRthv5JsBKaGy4J4vxE67P4YbmBK7fFUrADqkMLQzgAA2b9tb5NboeoEzYpWiE5Qmt15d9RwEUvaq2r9XyhE",
  "key34": "LXeaE6vtHg3of1LzxkkfXXYFricQfoyyvHxp2ghEq4pb5q9eR1jo9T4jQxz7U863NabABuvjHVxDEVaQtGLiWid",
  "key35": "3kGPyzxEvhhZCbJH1p7WVuEeqEy1Gj2sifticJfSc1TeWAdCK64URLwesvmcTvara8L5xxzUvPBN8JWfkMbT8RDw",
  "key36": "2Zu78hMvic245zEFMtfmEXXduLma9iJrW1jxaomiYcHcqnbb69qSaEXUR9ajoLpXsK8LVnhLN3eL8zLMv7UAdNN7"
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
