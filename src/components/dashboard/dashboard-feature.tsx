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
    "4YFghNiNsfNDe2sEsKNCAEbi3DsoPMqSFSXKHJWccCn7112qaVELgbYY5DgesoykBjWt9b4qqdepNVma1Jz41GxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFs8sNx4HhumSr1EfFLqWKiRZ5BWQAXuq7Awa3BCTRK14av8PVebgvDu4R784P1q9WBCigs6q2gBbBvE99EPEwQ",
  "key1": "5bQCGXgGwoHifsEPxVfrTxxEpsWPUcxCuaFfZxHsJxAFvzqa4Ap75sdHdDECzD3SqdWuzHjXAqJ3u6Tx99RJkUKc",
  "key2": "53cnfg2Y3gxE7K9hkY2ppXgwZYRmTRtSwDSCjDmY7pqvtBNirjJYsjWq9JzZU2QnGJvZiiL9YaYcNH4HkoDjhsxj",
  "key3": "4T2YGsz1LyfUbMd94fejiYF66vjEK1cwszudcsKBUv3PTuRfJGm99Npsp3pM15L4PZbyqhRtA66uLkfhvafZhm1R",
  "key4": "4nGRDuBLtU9QBUjuqb8isDJaNhxmVDv4vmUYTkx8MDfzuUWD38x31QgZtH6R9PUHUUShRxAZ9a2NmrtuFjaiD1wk",
  "key5": "3xPBXmvC58puchdBuhYqcs7pH85hQvxgM83oDUsXu5y2tS3pDDspJs3HNu1r72LxuUCiZz79ZMddCBdShM9dRFFx",
  "key6": "4eJmjkg7VWCCSddRpvrK7fSaLcgFcy24Fs5tEGuKJzufQobE6eUM6ivR2kgtc4jD3Bw25a9shn6cyXafFjZy3TmY",
  "key7": "4RAP94PMxQbovAxk2664qQByiit9pX4QZkeg6Si4PfyphjQmW1qG2LdVLM5yFiTED2Esvz5BbArZwjP5nBKtbYXR",
  "key8": "tCpMQfFS81SyD86LAtjqGgJWgiQ5D6Hd6RTa9AR6D2gaEqK5ECeHNXYSK39kC3ZBg4Q9VHvQ562QGZeY77jqypR",
  "key9": "ihfhbprCgPvDb7tFxQWtVN263o84P7eraUP4jtPssmt8uo9y9q3pY5vupF3EztZUcpvR1BTVfb3G17aUDtJvdz7",
  "key10": "4zy21myc1t5wKZKmyi7AdikzC8y9QzRathPg2pJk1mrSXuRgyDJnzGTwkUmKCdi1mv511dCw3Ht7DRwRgBy37oC5",
  "key11": "46RMxiCguEz13e63mXRYDrqffGPgajmdrHQUneRfS57vKEK1fctxZaHKWTNp2YPngskHPv8xNb7UDQuE9gG5uxoD",
  "key12": "52S33rVohH6GJnCTuToDWS94TLRSCF3R5XVT9kQXWw4evgyF7WxdFSsLiP9RiKG5EGSMhrfyUgzruQAt3pMSpdG9",
  "key13": "3fzH74PneymR8LLdp7PNyaxchemdYwEaFar9RsXxvBvWRpa9pawVRxBMv9jv6W7XrB9CQVWkomLuFEVfsKCRZxi7",
  "key14": "2BCAiuWuYc7wZ14nXemnhywAHWqqL1E3Asv5XY88JyP4idiq7NJ1ttgeWpjqhwXdLe3dqd3QPmuGizHsCAkQJyet",
  "key15": "hC7kUiwdsYn3dfQTUqAqD1EUthgbVKc2hBQVwTv9J21YubKrhNhbJkAMJBCgLS2rkwKGkw281GQfVVVDrqLMLNF",
  "key16": "suv4jM5gW6m33ZzM7bBwmS59Mamqww9tZ4aDnSLeRHQon7JDt9MqCEmgaNgJowahrhbP2BZdSdMhGFLM9auq6Hx",
  "key17": "5AoJ1aThgDrVhRgwVJKGf84YkkQNh1QL1zR2LBECE9coohFU64E2v5uEFWpkiuvGMMd1j9Q3RF7wjgRnMk998rqK",
  "key18": "4NMN1wCyB8Fi6PtBRFFADwKHf9JhFHCSQK2g4PpPe6XWwdsYXExNqnzHXzLNAqfRDbzteAyHvy7Mo5PTvHnkE2iJ",
  "key19": "2AMJdurmzF8z7cUghcV9HsiCZ9nKJXXSJ5eVqDCKoQaiabetSUKJ14ZhW6oMibhMogGY2B6dVcaj4F2wMzwe2RbW",
  "key20": "64xd3TrY5ube4ReHShqHxW6vZvHjxQqFkeQzhf2thTHCeChREBhLKucahmuU8kXzJj3TQZqfGPPj5zpjodZLdEgg",
  "key21": "3JumJRfFM9FFTZqtHxhoPBcPyeUcgUbzTbNYFziosxAjY6WYCBof5EPpvEiePBcpSGxoaxsZNTP9TJqXEV35Syeg",
  "key22": "4KrvtujTaQ9uvM1kNPVbdzKDzbVxFQfBcwGKUAUyBnvKEZG4cSL6JtDCmTVF1gL8Q2KA2Njh5gHmhxJTiYGGFCXJ",
  "key23": "3Umt4pbffrNtzeVzKRbmZ35GHxhNw2MAVZC43x5ctkUkVza2GDMre8U1CieX4cf4763tJFNrz1R5imRuJ1gqKM8M",
  "key24": "32vPiHuFYGypG4LSpxF7GjFBEtUMqz9SKhNN3TETS5PeGnAQjxYCk2KDtCyDbEgAtY4otVxiyT5XFUFXQHBJEkuk"
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
