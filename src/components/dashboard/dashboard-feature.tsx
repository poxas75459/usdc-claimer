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
    "eyZbuMPbE7bb6bXmeR7t7L2g41jzKvAqh93TEuhrtoPK6yX58xnB6DX2Jm6qxA8oDnd68GVPnoDK9YvCeQkUvKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5T6u79p5WHfaUeEWzoAtTFYdjXqPV9xKWEfwuiEFG2QLN8Z8zviSLVzhvPnBzHfSevk9XKBfkfm7BGc2asxQUH",
  "key1": "5mMmtqXDpMXyiykgHqxmcJ9UJxzVG2GvMBF65yC4qsG4B279uDHf2BGbssUymWHPSwpXyXUVNnm6KRW3gyweDwdj",
  "key2": "73bUK9bZQyggiUH2yPQMH5ioSXwJ6jS2U9TKsZByCLErBuZjp6z7SUecB3kveogbPYJi1zi1Yd1Qw1QZwFeUVJS",
  "key3": "A1xq7kYpRGyFW95uom1myDpFZyoU6mNC7qnW9yiMro32qiGRSCFdqghyCaLjMcY1E1twRm9aVDSa6vcrCBHLRaY",
  "key4": "563MnKyqMh5bG3eBG6jXCyu1R88mNwjY2a5NkiwgW6EiCzEz4om5wUoyxr4rvRb653wmi7NgzsvpYmLHeYccbMoG",
  "key5": "2VRS7NFGLhswieyBH5zzBefu79TQtHxsJquD1mU894nLJX2YxmEeAcZAWCjeRWBF4HMaf7VX6KruM6aBCH4TfYVZ",
  "key6": "4g8ZqPGFTkKjJZD9g1VWt8737RwvsyEQ2ctXfSrnfg8oCCwCdQVVWVxCTG2y3hTRnzygXnzpbCnrnxZsQtFUthP5",
  "key7": "hB1MAFhhq5hyxW2arumJuquQm5B1qXG5fvyz4SDhRG5vhaRBA71UAz25rPfHitZY5Dk6vft5RpZdapdQHLXcWdS",
  "key8": "42wZoF2FQen9zdSgDF1zJVsxi355H5XgK49Xn3n559i5JwY6gzjAhquGg1GKUD4sZQgAoRzqVELVCxG2DVuVGHAY",
  "key9": "3bcV29jryt3SVNedBohXgn9GQknVkTVs7CSxy8WMQRtB48q9R9U7Xnp5UDNMvqXK1uZTVC6HYNQhAWGJQbYvfX2p",
  "key10": "4ZyMvWhmBkw2RQgXfA1hp6TatFW8yjxd1zADTfHF27RmmmP7vbrW42byb8BLsnXYCdokgGNLNxMeNXhWGr5WL96Q",
  "key11": "4Wc8fAof1jLz5pQzE9Rp1St3A2aBjNnsixU5gfK2mzz4mT2fRcT2P21YoECTJB9gnXh5HQrXKnKwSCZWmxDKkqD3",
  "key12": "3tVbXU34dYJytY5oWRdbDSeo79smyy4tSE6jmfYN4s3GC3hpYUqXYh685fo4bk6RpWK6X9Zh2m4wEXmSZPHD773m",
  "key13": "3nqhjZfy872H9eS9hYvYkzyb1LuC9h1eZwLN6hQQDWXPr8hFJMi4ExCey8tSZDUxEvTT4vGPQkbM7WK2Hd9DvnQs",
  "key14": "5LijHaCeNCrX9veeiGX4ed8Lq6DvtjRhZiKzEJMtHQ28GLFzJr2BoyYHN1sAboqcxERKRV6dsET6zVmszeiQQmZX",
  "key15": "2BUkeU1fr7eFF5AW52qketPMRgvSFU633iTRFQEYexhWwpQeyZXCK8XeamrAe28HP2NRA6gAq5fSsVVMdqne4hpF",
  "key16": "2QhcYeyQ15dDJ1qQG1ZEVBR3Zyx2RjDgLrgybM9L3HzQogZm71Rexuojs8cYoBdjWv12NusBBGWLouuAkiSPBwcx",
  "key17": "58Grmd9SudXvhsMmP1s4WggzuFfJVCJ4YxitFCBE8SoymTt3BDZ6UHDDUtTM1i2rxrEKEUccVhLSjw1JQZGMrPSK",
  "key18": "5AhUvLz9VGnhyXXrAXhVenbLxZK6y6trPVGmb89HDRR11wEfirUcNUPhBKR5viVJ6EzuSCU2LLNNeQBt6rML4qFW",
  "key19": "5u8W6yei6eyZayjaoWDaGGmYpMhtoLT7uYV8MEJMPwSMx1UmVf4EjSLwk17xjAgN2jKrycZbgPcAQoVuR4FJLsRv",
  "key20": "5ZtT7JEkK3HM3PB7HKPXB38TPTtYxe4EZR6heDEx6emu8eZtTgRFvTDhghNcNNNZgLgMxB7wndMUqUeGseJg8RuQ",
  "key21": "32cG4F9zrfRYYQWJuvWyf18ozQhd43GdT31Dbo3v34Rw1LYHxUctWFfKBha7Y4Td8wfPZLjvmozyq2xq67YZ5KFy",
  "key22": "3k25gzySggs8YELeHUzBv5ofiZv8dq4YB7pAL2BCidamGkMaQssf8GE2A78bKVT8p3vBskeyjv4J1pcPG9aXmHgb",
  "key23": "qkovj4SByfB1w7vYcn12msk3dK9VSjkdr6gfKRbqFrpew9ZpLnEeii7pDjQU9E7DVQE35cJ1m34BUUkhhDLy2G2",
  "key24": "5MgZq1ukCALnyGuuGiRbK3zT2ATkyLoGdnP2FrmnWbjKLSRuFgNQs7vPQvtrTDGATv3q45G3rz4vAedNyDFfgMnm",
  "key25": "AYf5mzUAX9mEqeWk3qJZqL8LrQbXEdAtkCPm7zzsXNV2ciWdYm5neKPfUykor5SH1JeecHiQYhzgsPJKx5pFYD4",
  "key26": "37FyrbumS6a6SXZwryqCsudQLtq7zjgyYSaXTGPV1QY6ARRAyAMSaDuenNquDfh8oqK1DyvvZd1czsRfDRAAAX2E",
  "key27": "5TNs1f7rwME4XrV7VkjHfGbFcXyMPwXaAoPampWZeDVWxSgnqZSFg5oQQ5N4MkQaeTu8FV1FYa7cMpJCety7FivY",
  "key28": "2LL16k9soBxYLzXUnn1jhuFeWaMQYMzg7TLg615MJwLjgchkmjfKdvVekNoLnUBp4gHZYRUDo5kWyDt6YKp3X3WX",
  "key29": "pBXpKAqY9VZrgHNMHTVurctC42YBGxey6qj7Kju2CWwtjzhhRgahRW4pWhRY9LfS3CtYtSjMco7qhyCA3H8Fbv9"
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
