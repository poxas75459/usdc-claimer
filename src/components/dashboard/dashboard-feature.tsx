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
    "3PsWT3ep8ypmmpDq8rrV13dRLRrCunxrTjBSei3d8G9qjQzthusK4ruTRiMfkZdy8pMrknV84PNzHMKmVMxDdjCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtXedARXijJfjuJjPeLxTjSYWYEdkYMiCxQk7cEP9aXb1pGzUUE1gMuytxxBUs7M5C9b5mYyntoMp9FXnrawatp",
  "key1": "2dBjZ91nUGfaR9BtjnzQ2TUnAMRNpHWaWru6CGE8U81vfZqyVYUZWGQaJRtwcjBExbUuTqqtFG6tbPqNhcFv3pmu",
  "key2": "57iXfkWRkmoNfuniuzPmb2SLazfnVgHxXdpDPNTzZYoHKCo7SERRj8KrBnSudoAV8RgP6PMy7Npn2S9TPy1ypSeL",
  "key3": "2kpkHe69icDbTykvoftuVG8rNXf7ejpUQsb6gB3RZ3v5R9BaX699XSXLT9S2BZLiGkjvsYGNog2QLVWvBTYAEtxL",
  "key4": "u1wxavHCGGhX1TJnyjojX9WxDfXUZKpBxyekRmaZ3MJKS2iR8uiT6wGkNax7y1re1JS4tA3fkYYJmiafufiXVMw",
  "key5": "4LZDMRHkRabp8DLPDVvYFM1AkoRpGcXaRCqc3TBgtgpAKAHh2p8r8KJhtr2BK4iaPofgqpgeqoWzPhq81Wd7bUNM",
  "key6": "5exYf3SMiyCpc67jFGqTrTwZtR17VbX8EhJ7FoCYPiDx52KSVenHBJ8VgrABGunFdMcgPsZoGhQ7RE2akES4mv3M",
  "key7": "21MaRpGzNi6hBV4ZZTuUWRATq34cw5bVWtq7ze75pJHyzpnMMTyVw6RAGuo5GPTuVwuN124NEcVxr17JHLyptu9h",
  "key8": "5GkESBwmZ5bAy5g4CGqagDnchCTm2N44mSLNdF423WMzh2QQdik69nQTRKNStcc6fN5SubVaBjaEdh5onwijMSxs",
  "key9": "56efwG6jmKHnb763jFQvwRSUUVGRkQisu154RiD6if7zvCFdVN8iepjLABuSvjrQD5TMbrJ2j4uXyaDUmosCiQcT",
  "key10": "6wzvxikNVZaFJTpz6ejcjbNn9s41S2jrbjwdk6RJaFUbPBNZMrRDzZMmag3dPkWdyQPgdG1ypCvthQUw1Yx1eZD",
  "key11": "2gNtpFGJhKw4CfHR1RwV8wwNWubcL7cZREf2C8sXQMpX45hadWS4a9TyWb8JPfyL5aHn7wNZmPKrFnHuxGAwiU9z",
  "key12": "3q1xA3iZinJnc8FiFnvNqpZKrF5H5iTCarPk9i2m83GwkW6nimSGaf95NP8NPN3Z5s7PSJ5a8v9EXvwTZH2hx9id",
  "key13": "3PtcK5AGvQopUqPyS3GcDSYVTUDcNgYC1W29HNYgsEcynFAiu17avzGF4WWM9YC6vakDBwEP3EvwR6svZxs7SWNq",
  "key14": "2ivtCzVcKUJYeSbzkm15psUGfFN6vdMqczayA31z7fVnmfeGCch3Ew3nRghZZr1NSPb4NxqaPD3ArMnFxNKPCWqf",
  "key15": "5HJnh3is8xi5L9SmASNxYqELMJyifewEXakrXkKqof3VvDWsS2m7DPzFraSkGPr3htjjP1AumNEKGnLYQjcFSN4m",
  "key16": "2nAiwWrZmWwQj4Z8U6AmSP88MaKVSafL6UTtkTeyDziUrEK6LRRcLNX2zAzRS16GeT1RiGe4FNs22d2W24vKyTD9",
  "key17": "4PJZgz4tsfyTekiS8VxLc5k6pUfDFqnV4GYud1hvJjecZBhCzMcKKXn5Big3qPXVEQgZ3uyEFCnYQxGtaa3yiE6A",
  "key18": "5nd756Ed9Y33Dy3kqkN72XqaKcHvHTTLWcZhtUFPyAZjf9KviGLayqfj2RjA3ngxQ7b3ndsNWcDzuDh6GnfvAtxG",
  "key19": "3GUxdESBfL8V67PfgfPPK1V7QjC2uzLW12bGNoLwQBFPeQq8YoD5anA1CgNwBNiu3NeLJXWHTXm3ocWu6jFfHezX",
  "key20": "3FyB1GmKprubP4HGhFV5MsTuYeAQBZRSbzV6KHHVvbuLE5dnX9uhEYWNqzRyztAfHJYp5gU6i84AoEC9uK4vbBDp",
  "key21": "5bJ8xfdUjGUdGaNpGGkiUn9wtokBKJyjXDavL6DtZGT56LzpEcVZNvSckd2WsYkN3MqcjMrUS7V2m3KRmxmLFPuv",
  "key22": "2FfcqtpY1Gac2nPQk2xYJPAnermzm29nWbDtJAEqjjLKmzc96H6rj4zmJZPYLBZs9sp3Vzu5AEVqwtWgsaYfFqyG",
  "key23": "5Yix9orcWHGGisbDRqhBRvCVk9ydx2PwSHZy5fFuEM6kPnaThtSzuLECFG2JKwyjoADVxnY9DKWEsjNjDn4AXR2U",
  "key24": "5pXwy651f5hs4UGCEWF49gtzQL7VDPBHoGzwY3gXPr2TYfz4aNih4AKFfrrv9J14Gyfo569EyMDXJdhJbuPKfV1s",
  "key25": "4rSxbgLx3qMdTswdhrFAHYXeTpBU6rQuPFB7x5tWGXpmtDz8DVuUQaincht9Lx4Tsvw8oBRDp2XWSfxJ2swFPzKu",
  "key26": "34tsrGJCjrhA4cvQHorQP2YR25PDr3824shV8bVLdTsBpXe7syMRpKWri2Gx4nXZpxVyPmKzaUARYbiyHkcQ4m7p",
  "key27": "5Q9sRRM6fgferrh37kHKR1QYZARckRRt1badtouGMivpC2pD6LFyBgLcWn4rQpxq71NcoH9i8VncAnYBFkMUGwp4",
  "key28": "knxuoYaoKPpx2FDXihSPf3GENsNoktmjxzVpx3cyV8vVpJ3J9YBMJvjtKw8MjQ14rEa1fd4kxixeg8XsQejFwzq",
  "key29": "2PwsQaoFxSXfxkCsrr7jvP8iNhRoGYGG81zxFNstYqCw4dqZfq9Au9fQkogN5udC9ikvNrMyrxKSU2TKFxAS27k5",
  "key30": "nXyhDd6hTKLwWJdBgDRVjCYTVh5JWEfKfyQfZKTs3PogpbqU1ih22fQKm7cHihW5nNnfPoLCus3Na1Pt9K3Dred",
  "key31": "5VX68GvV9UjwjU8xwnNaqUrooCjE86h4sExKgWrrkm81xbemkG2vpXwUhd77vEKJEuundsyU7oG43DAUyjC6k2nX",
  "key32": "38qiU1KpDKt2ttkbLXjiCb9wUQHncJ8NCMmmb29bngb2wMr9Szkptqnx1ZNFzb1nPHS9nZz3fN1VnD656bAsGWrm",
  "key33": "5YYvJpA7DHNF9pceRmriziBPEzuaoyPrDR6yRnVaKieGS2vn2xU9j964jyegas6MPtaQTVUF76DAgNqt9mzKMtzi"
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
