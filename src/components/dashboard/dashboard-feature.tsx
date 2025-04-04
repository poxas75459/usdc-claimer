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
    "5YkdKcg82oEAkS2q8FcYzcaqpkVzgyoqM44DKyHLjrg3Tnp1TK8g1h391d3pMwpRNU693barv1xacUFeWfaheqCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655Ni74zGDkka4VfzdGixpyvtzyNFvRnjNfvbXSbhqgQ8byJ9ekZ7f4LtcjBTJt2ZZnWPXdRPXcrCmrYctw5sRVK",
  "key1": "4D33DwMGh5X29hZTzoBcE39u18YAhnAqKSWsWggoWpD1snMqBqYEMWg4c7VWZrouP6CBU9ip3enJpTy7HFM8Hge9",
  "key2": "cBEXhdW82dMgHHfiRW21MbGNpn77RbsugGHWi5jzbgAYGtyyreqR2FJh959cLMo5gMWjVcfvN4uZdAE8xioNU2j",
  "key3": "2928fenBnYHMNLEWSv8uv2zHMXfXv7waCRjSME8Uo1J3pkqKaEVvz5mrhdWsXttoQq5bJK3miKQeRbzVwcqSRGar",
  "key4": "4yspgZDKrWt9CK4BTchwFZsYB59td2XXQ3kCurS751e2mpdKNgTfLPoL9nSvsjEpWjKABHyKE2coxfsiv8GhNg1r",
  "key5": "4T3S5w5seoDos1sb9eejzxgYJ1QS9XhVcNw5p3rRxfQwN6fSj1VjUDX1c7LSp496JSLn5fiK7CLUUVn4F6cWc6fU",
  "key6": "4vjGW5pQ91X3wmADHQmczEZTEvsogB1XYF7od6bjoEV7dosR6vrfet4egt3iEGDMqXiSm8W9GTRzVK65wqjrUQ3y",
  "key7": "5h1JZe9kUR97fi9ktF7DXAPANkFngHC5FcjmjCJhvPrKb7c5AsGvuyac4YLg12kmCxcL7V3JCscpDUJ3F29Laq9n",
  "key8": "5e3T8Shpevcpz5CpbYuiZckXJi2VisSQg4njworM9AEFCwVBWZgyXv6H48ae3Py7NaTFdY94hhJh6K1KaM86D4nd",
  "key9": "5ZgvW1eBq6M46mE2GYvTuou2FvejPy57sqhYrN8PzNeQVm9piHdQy7rSwjGYydJb9nrkCaYBkjJ5xV2Lr5jRnUrf",
  "key10": "5od1Zs3GycFdw5cqY46GD5Z9fE4bunNU23mpSiAgc39MyowEwZcWww4NPv2jMn4Xju2Nxxh6brFQU9yzaQav5md9",
  "key11": "Uiyo4i9di3cLZwhrcuMXqkNwoKXGD13XCYcu1tU5hgeuTEKbbZ8jHNRGJhMtgJue4qzoxn1XtFrBgmDGw9fuyKs",
  "key12": "2dvkuioEShMsGiT7mPVAni3NBfCf6HbEp7vhSJc2NGkPiJZN9qxzGEgNvUb4jmWXJL8yD4xBzmygtQfM4aAbFUbX",
  "key13": "3z2sruvE8h4f7mJxBWgegew4VCjscACdvfdhEFmMzB34wt3WXX9S8KGLskuC2RmoZn1a48jFVjQCfqSEhg4ceozu",
  "key14": "2PxDXUznwVwvtcD58wLU1tiWiNu3c55iLJEgmRjXWAahUyaGBgWEaA2birMp2UYAqycfvpD3K9zC7qJ3gJ1spAVk",
  "key15": "5cjS6LTNLyHDkLFW8fh1RgCWuV7DrZm5UUZWGUgnqzxF3Eau5hoxXBb9aZUbxUu1gsSJaAk1SMiR66cTtG5v4MX2",
  "key16": "2mDc6ho68vuZC3CoN9FH7Kif1zSDWW5GJvq4hQgjgKFzAqYPkBRfPTJMVdwqumiaNSfahq7WyfGAf6BSnCvx6Lnt",
  "key17": "4sVbkGP1JGtz1a2Xyav5fpfFXU3d9vudrmy6Gz6esadYDYpyJrLrDzHwFAFog529hrbq6H66x3F4wwXYKUPRRbkz",
  "key18": "4vjLDcZV8QWhkYJBXwAsxheGuNbCsjBdH7TgPGGwryx5JxHTfX2ZZR69dbHLRNeis8m1qMtGGoU9vSQoJY3W8TA1",
  "key19": "2pPKjKA9oKe5PTGuM54GM8DBi6WnrkU4eLGdr1vuA45F9zUso1r8NVBwdBr36KcMo7iscH7KpfAfW3VPghH3qs2z",
  "key20": "gsBSyTLKAbHGNzo7gt1Cu6GL2bmU4xAhqCphRKjrpsheLirwzN4KzXoYi1KC8X9DdP65coEAg2zqScvMq64ChSa",
  "key21": "3wsf8V4ZELaJKAMqZ1q3xiTMn3dmc9yZLruumS4PkWWEAu5hmLPAnfw4ufywME1kDUXVgUD1SHiXT1S9TSR3pRyG",
  "key22": "2LFxQYCbMxoGkqp6iC2EKckN8v1SXcei4DuUawbaqJtdowZPSVL9vdFDsZkXNhgHwS1USp1ytkaiddzbCz2ZvwqC",
  "key23": "4p3dMvweq4YjWdjt97y4Hc73Ki8aC1gAaWTLxouwdPyN3cTt2bNZHnQye3Ns2udLuCeEpM41MFsaNQtMCSBzLGha",
  "key24": "45J47K1fz4qh883PooCzS4iHSamUEzu5cQHnrcQ75qZhNTjiH78o7FkdDJVDFkRcHvB9ZtZwea7FuLp9oTudHwqo",
  "key25": "Dz6UR6aqjF4isM7okiXiXxshXST99FXBs7QNut7CcYTJZHk14E9xpGAGJz9e13XetXQW15Vbp9odvxho2KARFXP",
  "key26": "VdiJcdC54pjpTSJpJewfei5JXNcvegLWz5xRWRwL49MUr43HasKTBfNhDJvk1oU6rJsf5TSLPd7a4FUcv13Bwdf",
  "key27": "4s3TCMrikPkwc7TUt3zQSt47hZToNFf9EFENBQPSRZaSM8J8srsTvKHH9e9d9m9rgNiXfH1ZDBcj7iFUsDWxTkKm",
  "key28": "fK1BnsRMGV5L6NDPCnZkEPNFqNdx7edxpfS2s9iUXjYe1wirRdv3Gv9JAAepCGEBKKDeSW5rKxYr6WkVFTZ96KX",
  "key29": "3Z5PHzTGKqqugS5xTGLvrjhjqDB8zCnhxxWCe8zeZfEUkaC8xCArrFKgX1TSUhwz5ypaLAVCGJNNquoVmQ7Pv18w",
  "key30": "5kobqMbVZxBuYUVpEsf8m1yKeKqzpGWzGmcGAxgi7tkLEanZzFzzimTs5mmgEMBXbu3BuhaLsFdfnjwYNGQFc35S",
  "key31": "3rUnZTuRFJhCWEUNCn3EXb6avi9DThBnAf3nhXV1sXbd3fEzYp8zEy44JjZcL72oE1axaqyexeYe67T3L3GrfBhs"
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
