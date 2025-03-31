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
    "4Vnmff3H2Qg3j7AEEoDK4V3JyPchrCxg87cKojp1LHj5b11mAcbHwMSe6eSXsW9wY8MxzBaAi1XBB9PrxLaJMP9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DD4dFS6A62pgmhhBsAXeprZRVrysneuJGsYur6LyLZLUdzmoyfPaP1h6SMEJ4VhhfPaTbRi4Y5spG8jG7FEmrPi",
  "key1": "4Xp1gT8WDBkyKRAxH8ArEBk7F5tXNGRQkvzFQb8Fnmd4WLaPogTQyKjaeCmxLxyanjo58rDaacU6f84Bzr8B8jrN",
  "key2": "fwEX6hjVhM8S1LadJrNEkMbrMJRGBxqomYWiYpziZPwEejMtRpYKZ8uaChEerhLU24cSKCfimCSePCbib81sUM7",
  "key3": "7RTgLbkjeSd8rxQSVUHHiD7Sr4HoK2gLw4enZRSV6Ha4emHTfJUKBjVhLLGZgnAVaG9HanodTHoSt5n7yQasBYZ",
  "key4": "23TeYzjGfisYKnvp1UV6NJKgEg4rqPqbXfGV91xC92ZwadbYz95iwvfhFpVeYicD7m389JWzLnAYjnogQ23PYwDi",
  "key5": "34ExTm9S32oJYpRzWsi5GGci3UMPx8Px3Nm6aS2Y3R9czgXMo3a1xdGJVVeq7GgHXdxXESigf56oeiWbyMx9TRTz",
  "key6": "2PMDps9j5vq4AaQg2cZvFY4uj8nutK9GnAqgWMHVAak84ijbGAH6ghuxM8dBoPtzQXDbjpYvWZcPo8hKMU4bM3hg",
  "key7": "FAhDz2bEPHAjDLjB7YpC9eQXzspuqBsUDUpFEs6v1hDLVxULsSFyFan7DZuBsZCff11ovJFUSHyg65FK31yBWHU",
  "key8": "3z4gUJMbHVP5tdo3thZjbFUfhTYerypWoS68Z2ZEQJbJtcuCBPRvPWa9Q7vQEP3zmkdW1jM8Rx3RkX8W4VmWSp8k",
  "key9": "Kwo1QmBdchd8kXf5UpZpZpqjoohikgGkX3FBh8YHmziPAzJXTCfRNWGed7KoeN1zoHdsH54r4VpeALRtkMCbeZE",
  "key10": "3hbQHJFVJpADexx1KyMLbcvR9rGVe3um1vfmMBSDwwtxiyjfRgXnhoTPWxLN8S8Ywg6u6jNVw9KVwctvMfHJsfK2",
  "key11": "4Dwd4cYsYzKFyc8dGpXCTLenwbvedAnPPJjPHRwG1qJrvpYvou9QR64AFhMiugadUMTdPWNex3kh9y6AYCAL9MCJ",
  "key12": "8fZyxRLggKFvq15MUgirbCUMuFMNyqUWjNLNYtuT7nVwE1oLpN6x2AYGrJ3msiuS1eprcwRPrdoT3rYj7SG199J",
  "key13": "3PMv1C51RxQpAkBYRroZn82nL6EKT3vRtKwWEG8qYGNMz4fHbpW2DYHroZfkfVNxRcLeshUDGgf6RQ8nUjuf7FDs",
  "key14": "5zXJXgEgRGmMWzKu5mPHfmyFsnbiCRD2HrEjY4zJRSaLuSk5ih5cR7SABP17U1D42pubnJnaijVggTrMzDi6pqA9",
  "key15": "2DdNmwx2gXwrsBKA1qXAx6WWSY2VVtKs9dfvSyLeF9ZT31Y1n3Pngk3moX735ND6pvSB97VJhbLfCFsqUMjxG3se",
  "key16": "4SQs5Tv5zzKyKbPNtGdWH3QVaKY9gxcBMepgEHdVbC6n3xuW9UBrHxRVqVnCkFS2S8ikrWg5SiipLaw5F3HZE7AT",
  "key17": "247Nns396zD261XWQiW7JH7zro6ih9WwRSVWqjHsRjfBqivWn8DZXmXvafB6GfWpypwraimAhZsvSHZnTSaE8dT1",
  "key18": "2ZP69oDoc7qyX8GFTDkWD1rvNkMGEp8Ny8c66yWToMKdFUASBUjpJW4a8sdkymuMNJ5LQSJdUHJYxKBADcwSPNEw",
  "key19": "5QS4vfef94JZFLRHrLMB1zzc2iCZ5AKAZXnTVY3n5bB7UVjg21UWisQ2uhGABVHjnwZE8b27qMxUdg62BsXMT4EJ",
  "key20": "5FXwzmXNSJQoMbkWv8KrZE3jagyhN6QGmuWKP7v2Hfx1ogWhk1MuDCLrgi48dH6AjCeb8XpFgxnBduzaPVJ6mpVV",
  "key21": "5mi9DR2hPMswWtMQDhDXcZ9wCEHsoPj2XWdbWiNg46U3B2dpTbbhZCWie2Tho9iwSJjPphoKZrw5LkwDdVQVDgV4",
  "key22": "2rFq95onRx5M4EmXMizCdLvjDhHanjDNUmE2kBsJFs48ng6WJUB37SG568KBNjZ8mP9wAcEAtrxHxcYyPy4nZg97",
  "key23": "VKThQKS9j61zYWFZwr6Np2K1iFdMD6AGbRnPbcZTmN8bTgveHGPbJr8uc8ehY3wdhGcjTQMnur6SPHGpJaQJb9M",
  "key24": "qtADfNyMTe8xEUnGf9RbfdwkMaqP7xEGma3UiWDqmPy5ueRfvhsXhNaKzmVWykcVXDyuoorZBpycJCg3DGh18Zh",
  "key25": "3iTsnaDVkKg1AtVKzYnRmGRjE3prj9s7AhN2XHKMGyZaSgmCzTrgCBjaLiu1FeCAP6fqGMJRsMJQ6F3KDqFGZLwE",
  "key26": "2fAYaTnxmRBnEgkLguC4aCkFFkxaLPEF5vJ5bwHLwhRLHGD2wJZrNqZRvuEXM3PaFZvGCmWo97EZpHJ5x4jy4qpL",
  "key27": "2F9RNcqKnDARcnWEZLxyV9bKd8UgeNiAkAkNkPicVnRC1uERM5We55h67Agmk6yhWCVpKM69aZCT5einMCXF71Dt",
  "key28": "2U7rZFFZK9cF8KDfpHCw5SbnzCmwXYxMXwdGps6B98nGaoqMs4uvHm8sWYcyFvwyASixbKDok9BeSMJ9h6BuepgA",
  "key29": "3nYcP3X1f18Mc3NomxxWAkaq483cM9eDuq78D6PRY7Su9imqBNdLzHhmcUGGs8My9bsc3T7gsosLqyJBKS1G7ZMu",
  "key30": "5fHk6Z79eC2VnGXY6NJrSRKuELkcCLUn9KBNB6hBUAkqUoJCG4g2Lov25Jq5WBUzoPtrAxgHEssaaH9Hw9mxdEZe",
  "key31": "WYf9AZkvjtyqKuhyXUqp19HKsSwmf2Btz8tY4tTW2vyJ326pPZdNygxsYirNyzuFCMQi2sfBAEQTfSCGTwn5nYT"
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
