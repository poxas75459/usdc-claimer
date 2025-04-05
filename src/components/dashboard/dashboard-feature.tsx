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
    "3AboMzd7Xg6ABwMdPQhzmcjG6CXmgDgVSS8KDATGpfgq44mQ2Jx9DuzSTxwDPvNYwLSaeEtEjWFA36QBuoFuRfNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfy61UMsPUHA3KPRWKSwNKT2GVwBswZc1d92ENrxL6Qe6MimKWUkHimMwgnWh19kiu1oATbvxfFPqzD8oD8uCbu",
  "key1": "2crPSsjDk355imaMNqDRbTeS7buJtrMXNVyiejyF9BjtEwdUAUzZMsPnB6vhWbK754MvSWm2q1znyYJDbdJ386ar",
  "key2": "6786j1Qo9N5c7eQEiXdSv7zg3ht1B26CatEwgdXaj5Efpbefu3Xb6S5j4oHZCcCZYXGaQwpP2sSURgmJXoPP7GYM",
  "key3": "5hDFMFmje2HvUKDfMR9kbk2nbGJiH3RHae2JHPS8NWvuvuiiyEKYfiUyUYuNrL5HgbKyEVPNJz53zfwsaPJ7Naeh",
  "key4": "3xRsHaUFx4gRWNSBPiQqWEMwuLyqPhjMUEPmzJ5LYnTamqBwr8hr3FNoUnZ1gRzCqJDY2Hy2yy1gcpX7P37x7kfM",
  "key5": "mjqLooxmmgkt9Q1MQZahfTBKYVRBGMy6rprsbsRfpAk5uQCUMZnbDhsTF6pS7J9P9DEHweGKmwwnyuEdCXtkYYk",
  "key6": "3NanEtTekDLF2Xs4FCUSFXsoV2CQhdJamnKnWXWJqPsN2ynMcjqGZ92euN83GPgGLF56751DzQcDJSL5q1nEReQD",
  "key7": "5vHd9XjgMdDhLgNZcZ1GspbSAoXPnnfEBLMkPDGLBFYMtUTfbbQERPjFfTsxbXFVLtiwnCzLFdq74avJWnUdQLXu",
  "key8": "4vJMNXUcnfjEGtrbePgAeCtz7trKSoWKFdWdnPs2Pfsaq7sTLkEZXLghJ7qPAJh3dq4khQT5qGcvSQy1rLRFX1WW",
  "key9": "3eJk42HvJhCzkSZXuikLZwgb7DgKFLEkbtkPf4uxPJiYuoKeL13jxzaL77Rw63D7FXCQycgsHUTYUtToNrtyp2jt",
  "key10": "4m9b1n7dhHuoQwn2yS54QRzJkZpKdqTjLnM1deg1bfkNxBHw3SwjqmKMVsgdEb629NxKHgsRFKHjuiQANdtwVY9k",
  "key11": "5G4YBUarrwYsAKcrUoEK7vaCFa4SoDxG39rZESFnmDHTXcJWwWSHFDtaY8tD5exqvecKRsT2GhkCdXQNDqB4BDJ1",
  "key12": "3ok5QKfXKiieHR64t7wxMk8ZLaM3U4Vca934KcSbMthYZUeQzR9t7WVydMkxnKBqmXqUEbVJAdJuSS3prJM5QP9U",
  "key13": "2LRevSpXo37ASb61chPQxjFnCX7GZeUyXMXREvnmaX6v9r8nzUfxV8HxUB7CxkwsnGatjGQyigyqUFscN4YxDbSc",
  "key14": "34H1ErNVsYMzok72Xpp75BUDyJbuBhKDRWCmeb6dv9A11uZE2xUQ2FGqYRYniSjSdmNin3xHs5cr9JRy7f2nATcN",
  "key15": "4qvRy1igbrvksz9fTZ646SNcfhMb6pRH4SycJdo7h7Wpha3Ur8LYvZrepKRcDgaz5zjEwaeoNB9qLtfZ4Yvsh1v4",
  "key16": "2XLiR2krx1mZ3WQJKzfZK8R8UPoyd2nRX2RxBzwa3wjNZHKU9uPJgrbW1dU7i3fFkXAyCKHZ1izDwr239gCjfr6",
  "key17": "jnidAtVrKrn6fYe7qKzyeRjuWEf8N9X2cJtj3W24PuGfm8rHLXkMujrbNgct48qvvYeGBuLniENmpWoX2bdgXGm",
  "key18": "4h3vUA1nueNX7cYPbJoZkpw5qMHtQkyKHmvjtSarNmHQjc9Vy31pvvKwizhLR21J84w9QM58MKptDyB3wJEp2D9e",
  "key19": "2mimhiKiKC9yaXHHhRzdDug3VcRcqzTSw6BiPjnmnZ6cc3DSaxqVL6Fvfg4ijCCRM97fZvmgsv1Ytyb9Chsc96mJ",
  "key20": "55HMgB55KpnoDCjyFGqF36d4d2CPU11xJbhGUBHi97jY3VcMhY6Q89aANqUChtMFrXdeoeJGQvu7p3iutCumF8tR",
  "key21": "5pumyBN8PDwr1vtSMiAAAgJvvNHELAKY4RfmeA7d8CvbYt8w3xS8UE2ERwVJB1StgHr9wQ3e75XM5RLGpa2YEZat",
  "key22": "4Km3Km2fjruQsynMjWSPmq6Pd27M9UGtg1MKVc7SfvAeSVzEbmgLK1YKHWgiSXhGoqEuioTkSGPUE7e6aD7Cog4a",
  "key23": "5UX9v92nod9bphz5TH24PMRmCXiQ3sppMQnyyRbHycaoSG7uvnCHoHXqfKS7d4fDXmrkxa1BiEvpBrYvZwtpqvmH",
  "key24": "5R3AHA1cMa6p4vAWPrYEfLQBdJUpUaZsgfA3XDLruSRKTf6XPjofHBmN5Gx36YouwSfsaNbJWtcPj8VCJyuo73F4",
  "key25": "2SQgtBp4vvWhtMjBSWRJFWVL3JzByXF3Y6asX8LgPUJB24Zh8z88fbS3VWw8jw56NZzb34jKF15PFzaPbsT5sWxL",
  "key26": "2mvF6AFExrB5v9RHNi1EVoeNVMrVutzBS6RKT863LqJhDpET8A2vKUbwC2s9m64SXLq8m5ZciKYpJRo1iHAL8maE",
  "key27": "125UKUmjKXLqjkZWic95cXemb9MBEEMpad4cC8dqm81gXDVw1SuHB9nVhZjQk1DKck1Sjp45sJJjTSK7anhwX1CT",
  "key28": "5WFkf7ibf2TJybxb44Y35ptYJ2p2GTfELbYW9TVLa8AyiThieVfmWpZJCcgzq9aSKqMGeTsqte7NLVKDfcYkrncv",
  "key29": "p37uiSjbuwGcHgq1mSuVHPkSEHtaobxsMKofrTYAYp5U4bZ41o6zHgDeDhovS6ux3RRq3zWarhiyhTkM4CxGa7Z"
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
