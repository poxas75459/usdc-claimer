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
    "2WsYJm39PLoor5LD2yysvm8WWDbKZTHYdektNsbD8x5snaVneKDUukBd5kA2mpCVvzn3Pw1vwhbaLhDyFKiw8qoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDS2DQUkkLeYYGyTarcyb11VwWRzKXfvKE7E2fgnTPpjKcuUYasbRUMEA2ZmzNPDDkTBsrUXX2GArCwjgQ6VG67",
  "key1": "3wijixDZWuQPnf6CjZFdeGdwcG3LXFFieq8Uo96LW2nr377FK3uw2JtCHVHPAgXJVxrPZyzMR372A2Xma4XJLHMb",
  "key2": "33LuYEifyQ43SNp19x5hpZDtfPgFa7xs58cBDZFom8HaAj6oTyZ8Xugw5vnL9chJ7Nf7T6wS3923XWUL9Hm8jLt7",
  "key3": "58XGS84uNCN8i7wBG5j3qn2EGrrusLqHfTd7n7hGotv61ZmXJmfHbo5GPokC8bmZ4uHzLnwMP6fbLD3W4MWU54CS",
  "key4": "3CrnJ14fh5N4cPw6UYe4uGtDZM8savLDgqBvDAxGyNpryTc89HRPVYfY5YdvrwBdnHBnXHVb7MzyZ4Nmyabqosx8",
  "key5": "3NNBoECnNaHcfV7gxvoftCnSvgcBGD8mNPtP73WBkH6TNPx6TkTJ125uUYb8FQu1SQcoU35FSUVp7pvSpCDgt8DR",
  "key6": "LZijC4qb3WAhdPkvZ9DKi7pY54RrzVitFNzptnFJ3tf17UK1MHG6F12kriR61ihN24rKHba3o8Yz8gzYzfa3nHP",
  "key7": "43P4Gq9YCm8fQtVrRmfyHnGUsw8keiYxshW4op6G41nNn4RjYRVCDMvAtjDaZSNGZntSt8oXGADTHktp27vWY2Da",
  "key8": "2AWQEV8cRTvMdD5QgHunp49fYREHvL3pzURrmuAFJktMovf7c8dpeqUUXE8ydkVpR3d3d61U8vMRGauL7o3e5XNi",
  "key9": "5Dkye6gkSf7MZ57HUzCyx3QWzCJZLhiGB8Z3CiozBoi2KFXLgHisVp7KhT1pJyM3WxaKe9o9v8sukGSvKt4FQrNk",
  "key10": "4bagpoexvWCDFEzimD4qciBeg7gaE8pv5DDTFWQnMeeMAbN7YKeNhL3CVz6iSU89KGjS1EMbHHMCDNW7wFqCnLPB",
  "key11": "4QvJX3ZFuU2z6yNTSEkJQATX8AgceGs8KPHs1UeNPJaUaHpNkyXVF2hc2nWUmvnhya4zhzhpJPMxGzE6ph6st7EN",
  "key12": "2nBQihiwmXjc937c4XTQnmvUg6XS7cLpzAom9rardmHxwyeW53KJ4n9Wa7dcWwbiy4MEVLXgVC5TmWgba4z6c1Kf",
  "key13": "2qKtYHhqij5AApv5CCS3edJmJLg3EZYXg9PznUWHx9SnwgacnPRU8HRHSwaeRYUHAMh6HQrZrNVqHHRrZEDFeTwH",
  "key14": "4mUwQtV1z8krvRdRTE4ciiiUUhiEW4YA53NrN6L9DuaYasuoqKt7NU6pT8i8PrkUEToW2syXJSc4ppy4w6UEFTSc",
  "key15": "5NYSx7Azd6G8BaNwqJwkNBqxdB2p4tiiYBhqeWzXSLiwMyrWDLiUpzwU8RXCf1sXLpKn4H5ZVqJJc2nY5A68CJUm",
  "key16": "5GYH9eLTz3JY9hL4pMzCvVN46nLADDq6gBtQuQaVepHrXDSnxRZMe3oParHtpa4aiQmUCKhMudgshf6zNdXRQj2g",
  "key17": "EXaoTBpWRn5TKGZjwWhPzEk8W94tJxUGkQGxvaxr7XwgxFJXzRoS1rvjyFdeFrL2RquHCPxTd7BeMPRev1exf88",
  "key18": "3gUwwGtMfopALBGAupp6Rz69HX88ctPvD2zgWdkCkrU6AjsFjBVkAfkM8vFPdEAej8oh8bVswDCfUdmP5UNUjhzv",
  "key19": "2FKNTtujkBbEUTrEBWVqVJrDEBbrK7BgSvf48u7BVrdpwdGe9Uij8PMLeQVSf6odELhQrFdnX45veZEGe8wz23ev",
  "key20": "29ed9KwM1VWPrkVJ3hWFmUwZFKyYRsiKPsBd5E7VRC8Xo397qDDQLLSeQTYqq3wFTbvzrVB5ts7tZsKqZ8mP1Vs8",
  "key21": "436pBApTRX5WGwizN1Yn1FiPtq9in2EkohwkDK1CZaRh36hS88vbHtrsxC1KmGrcHByhESAYw3H3LNiWWv8hH144",
  "key22": "3D26kgVH537DDEcDW14oVVRMAH1JLiDbG4jd96n3ViWjrRVE7QRG1WPctqZW5NRbNtU833pARvy2Cudx3UzAAypL",
  "key23": "2JcL8ymiydFSjhBHpnYG1E3RkNz9MSWCvL1ahYR4sAhJqdSEHR1VkeTZ7jGD6JzRMox4tYzDA9GmeUCNaA3DGR4f",
  "key24": "2rZt2UVMn76AbqYD28KQStjfxGKMnFvbPvwQC3iFyY75zb5CM6AzFr5GoVAX2MMdKu9Jse79d8QUT2y8UAWAyi1Z",
  "key25": "Y2QADKKhskkeSYL3rRmdusGAo2x2GrX1gtPVyvtJFSy7XgcbB9ds7t56B26yhWm267QxavJwCSBi4iFEnWaJ4RM",
  "key26": "5txN58BDrAvmSTin5QhUkrxyX3jF88Fd9fCWPSxZ6tx4qSq8DVTBcXF4EmACv9ceJyC6t1kiwFun4Mt44iromJ39",
  "key27": "2uCmKC97w8cSbMPjxL7jqgQR3bp9YFSJjzzYXPbVnqdFDfqZiJNkhbSYaS3Ytb1swWAoF2GBeNNa8b5J5kHHZYhD",
  "key28": "3C5594bR3X7ZLH9azewWxuE5uucaPLkZ5AxAyuwfK2aYym53kBjNvmfhskureBW4jZsnBjCSrsnfwkdqdsX1vQy9",
  "key29": "3fW3AqrgP6SZSj9nZGt7RMosiyCztR8jf9gLKWPPrDmzcioriLWxAaCqbFEKN2M5ShLkgKNNKRLn5WF9i7RHreF4"
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
