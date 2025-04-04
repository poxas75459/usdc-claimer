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
    "3t7Ku7h9gt8Gs3MgVdKpD511Eui2B7Jx1KrxAPRZ65J6LfZYm3hL9BuP84vBpcFEUSpUVwTKwxrQPy987kAFCnAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TiLePwWAfp6UKeJ95usvhS3X3x6DyiqG7czeAGCk4aqRQDRfmdnnSALYjpgHBUwgNX4b8RfJE8q1RQw3H6NzHzv",
  "key1": "3oEX2whTC4qQKLGkN8GHhxpKDMV9T6Ezg2WTKtMh37GDm2Geo16dCGFvUM3NHeP3ZqLRrzwQzrnXbhux9Azb6oue",
  "key2": "8Sbwvixrw4AgLciGNds68ZgJkx9Gvg2xivqJRqQiNHPisSLWsL4V1TpRjYyfb3ksmFaUkM8ZBW3kTAzfU7asaWY",
  "key3": "47LF6ci23wr7TH9u5B2ZS49Tz7eXZGA2RcCzZRgGiR1NjHrcppQEMsnNMG7m3R2DTWSPwQ4o1EmTka4mnc4FxLTE",
  "key4": "5hnbPQaUiPeJBwTnZEgDLPCyoapwKU81aQdeRFRqRExe5EqHyK4U34rtzkUGyz1nneeZYDZpbyf1Lvcvy8boF1k",
  "key5": "2WnPKQ31TSbAmeGuNjbqfFZN3TNBbPKiEXeZYnu7FzdnRFpsWBVp6WyJ5qVHDahFJDkCP8KCXWcEVZp6cdwr3iHb",
  "key6": "NGhZp4iZc7D3as3K4bCJnmQLkAxf5gSEg4LWDyBeQjwUuGZcPaFnRSwX3sED6pG2fQMewCM1KxA4iaWVTUgxn2a",
  "key7": "3rqPGQHzschtfeaXNhSb3cxEepu1RpZ8HDus3b5M9YpmsDRjPGd56mfLvNDAR4N1CiodiKgeyCHUBWKL9mj9dBYb",
  "key8": "5yu2zEYWp5rgki8YTiqaBnu93r2weE2y1by5AqNCY68d8jtSfGNz79TzmhA8x6vUvHzQKtny1FXgRooWtJ5Dh3Zo",
  "key9": "5p5fxbBPBBmzqYEW1bAAfwuKiA4vAfRFuUYbdGnghgzLayNH2uw8aV5ZN5CmXSbHGf3NoxUWU86tCWsgptdBdfFQ",
  "key10": "22qt47TT6cHqsB88hjovzFhCakbGmCEjvDtJfweuQcWqHnphJxRxejN9wvu5HCHfbS9Nxad83xfoepSo69QAYmjg",
  "key11": "3F5Wa22aaiqvfFERNB6xwxd8XerfCWJwkaSCDhQyrxPyqvbn1PeRvgrNCn8EtkYaaBqNmvJRnJ6XRSTjkEWugreU",
  "key12": "4HyT8hDU2vKgBkAubRR2jtT8kXoBMKM6LNfDwSnUDMxCWWJr12WfRcTmjbqrWsWzTjkUfTsqjgsf52jLXxRas5kc",
  "key13": "44AtUPdWZmwxmXhuJ4EdMhc12tXczeWCrcjP1EuaFP1uT8ThV8qevKCAExBampKxKv2RLxHAaExHJ5wJdBt7ARMj",
  "key14": "4HpMzbn2DujT1Gfi9yx34J4hnyNoBjMqv8Ba2i3KT2NJTEb3gt3ToSa2dmcRDQ9iSf7VccfTZaXka6kjvimsBgiX",
  "key15": "5uGhGJ7FkiNbnhnx4rRrrjzoMstUNAiW51PkAEgXsmcRnxgcHsQBjBQPTLLoa59YsqudQERqwmWaMhDXJYnSQESd",
  "key16": "5ou934guHnQMkLy8uYDu4Qgp1PYZfpPYvb5tmg8jWy3xr8acF3Amg6w8kBrG7RuTSudvNey5VTvqJRovc1CuKUXQ",
  "key17": "5CNpS8ZNcBCA9AyNvDc7Grx2u3rPvfAp3niL4RhidHsUnz3v4LFATK7gE8peeZp5rJ5u8DaazcAAXQWKvEFZGJSW",
  "key18": "5xAm9CXyJGWjJCQjc8mLs9czqMtiNnqzyNeX8vU9tD9X9ven7WySzHF1irLMfYHMdF5XJs5KswkzoAWri2NKbiAA",
  "key19": "3M8wTPQnC4xk619nbigvTvovnmuhaQRM7cDZTxSSwDjqMXZA5USRk98iVMPCEtW4UHfnn82UKxFrTdES7jW28KEK",
  "key20": "5EbkCpqG4QLDkxCHWkQYhuacf699oS2WRqb2yDYWKK6f8PuQTf925gNmw4t9wJ64DQGQrqaQm7sGq3HL3DPm72NW",
  "key21": "4WE3Hx4D6hbhTfH11RhRCtcVNGqKgoV58fMZDc4uQpZtYwr8eVi1oAsrzH2xDaaD3kDBrzMiW4oVnm1zbT5oo9F8",
  "key22": "5WXtsCvJZXJ2aEZb8ZukFPkMtrxU3v1X7BkxN8212MRaiZznBhrdwDgvySRw48QZPRied1hy7z3cFBkFZrEqBUiT",
  "key23": "iNoD6Hedd1ryTdCYudPmyvSMG5hk7xPdPyN8Zod7ADnK7mzgPREbgsaW2Pbk4RKXuTsEPfr2sJMRFH1Apmfsc2t",
  "key24": "2i8ddskKgpx3xskmgpYru7mNZm3aRf1tTwvUzKxNneNy2NkwyZ7MK5VV1AtxTsFCV2RgDXHfjKvPqJDqTGUr19MY",
  "key25": "NA3ersvKgeyNLH33KkoF5MxnYjz7X58sdtHW68zQYTjzVLTKGZMJ7HVvX9TesrEG9V1pKcUhA8waS7G68nB4KX5",
  "key26": "4sPPjafjtemAPAAkgVQMd6444tqJv42T8rYdb1sPj4zajyzqm7pvtgzr216QPzVeujGcEw7G79K9uBXNimWMBMuH",
  "key27": "oFHYxmTUGmLGuCZ61YdE6xcK2BnDsp5PjUvEppXuZ3bNk4UvSky6BvLLa8PWUPDRJRjyYQ7MndjSUqWkyvSed12",
  "key28": "25rvkB8FPJB73aLC7LxGamKn1tzTLkN3Buwm36sUi12fV2QyPk1v55xbWLQvJfXiHdVY95XMxkwuRiKVe4bmSyii"
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
