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
    "3oX84JsKi97M9ChBVxLTAy8jDdhsV4T3smtUxWU8vD3xwcgMovTp5bpnnApquXvtTrhuTaMXZ4jspvS2PpKE6XWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVsZCp9QWU3Yd8RAoJSSRfoEXTisXVrv6xuvfFBCaSnHFKSUK7tikJesEhHeQrw46YrudBNsDmcH6TX7phnfiPq",
  "key1": "4vtgBaTTcW9z7ArKub65Rnm6BqqsDCrJmPArsSxxp9hf7ivhDmpzVBKawesyhACJX5MVKwY6ytnobNeDkFAQEKhZ",
  "key2": "PJGC8PmePUeMgNYw6UpGUy2CErGXR62nPEKJc2Se1bSxXpARCpyb8eG9AWrk9F1Hys6Ji7fcj7k3Wbf6f3g2Rqj",
  "key3": "3hwa1a3eL72nVzWVtVffdoJWqoWKfybTB6WA9VHaPbCmNFfYtaRXQGdjAHvXwvhCA842u8PJpdepJjct5ycHB1YK",
  "key4": "4GZ213BTWB69xN69ULG33iHNTxx6GDqgHUfpqSZwwj3NTDbQXvgNWLqKJzkrHWXimfrFiYPN51genJntpdAfNHQK",
  "key5": "4xAM5uyx5MUW3djm1aSasmS7wvxnine1bL1aLckrZPZbm84Kc9hsjCZZ8eawpsDDk1ByFLUsVE1GHHB5R9mXgx6q",
  "key6": "2KrGrHNHedJu3zjmx8ZKVWDDGyperuSKStuGkJZjYa9p94qs3K9x4gYVRhUfoX4eH2YgJyXXg3pF862rxifFqK8W",
  "key7": "618oRshwyVaibE2ncrWuGpYZ2XxTcSML4C82ErPByJEf1uXQ8NChRyMkS228kfYr5UGawMvWmNkhwgds85ujugb1",
  "key8": "2RMJukk7UZpUDzhDxaJQHUTYfPpHvjGkLNzy3PLwTe6sija4TNPfZE86FJS69Ed98nUduTPGUiy62cwtXya9S25g",
  "key9": "5Yq2zULyg7ftLv9e9UVradUGQC1RD7R7SxwR9hxqfD4nZXteMrqoLDZd8EkyPCr8c1W1XGRX1FGeruxeFw2PxLHn",
  "key10": "3vYEZHrZLdfe3vubEQZhBRpuUWCFDzG264n1WU5Epi2WKn5MogBxx93SSKyQiVyGpt9qZUJPGpALUV1sEouPfSjV",
  "key11": "5vhbreuntD5qwYJEq5XWLiVHZoznPRpXNgUicjjJdov7TYmdcbuKWgkkUCpTMqsqMbCQT3ptxhP6LG6NwYofYYdE",
  "key12": "4SWxUCjtF5yrXcGJqfZaAdLa6NZYCRMFe3JDow3DAXchZupih8ek3JzXqTcKUKMZccuKiwRKeEk8tp1ipYjASUoA",
  "key13": "66v7jYMvRmdNyDrHrR3uh9ETyp6EcUkxv5muPi22vJVDLUyXgpntQorhx9M4935e1j6RNrH2sShSyxZqFLfiMgfJ",
  "key14": "5oqywDyqRG9cC5FarHd6RSfx95sypH5nDVYnjPc3CTLB5pKBz6bxQ3bi2Bmt5Dpfq3tyop1BERfgizh2rzcMn5Gf",
  "key15": "5GpubofhahJXevX7f5txZmQDGZ4StNW3YtRQWwbBH7UkyCx4vJy4eTbf6GtJZitLqDB2rNxHxUBkeMMQy1RpWSz4",
  "key16": "3ZmdyQZwG3qUppizsbc8aXJa2TbtmcNCeeCDUwaJpv41kGFxpXu5qJksmDL1P4GrQ7n6LibcgyUgJuHe5QX3g7Pa",
  "key17": "UQPpJV9oY9t8iqUhNSbUPdEo5k55K332rZt6iaib1fx4knLHcA8tJgeCekZGP2evfuXNpWheD7e6A5P1tvHSnju",
  "key18": "5izLwvSuSG9Rz38PG8aEP3d2Kg4x4xtGzRfL2JcASbcdeCztsiXu9V2wXoTZga4ZbmwasiZEF4st2WccjmyAmhLr",
  "key19": "2Qn52MDhH8RwyTqCtDzmDX477BvhRXJdbhPSzXRTVhYpd2knnNF8mJLvx8Dw4RKEh3gWQ4ptqZC4hw3K8iT82mVm",
  "key20": "4KYEPvHT212XFKrGQ6sjwCwH75ZjZvxPDrPpCQVxwQzTTVvEATyAhZBc38VAwYQaFwcCpbqp8TVaPs3K667h4wCv",
  "key21": "4mMg28PzhpXbqqaxQTaaZ7iiiuvhuVfEzv6UwexNCA2giecJTvP2QYiPcnodfuqqzLZYJiNNjs3awZcNbgVA5rGY",
  "key22": "26s8Bic1pp2FM2D7kdAnzLcTUbijadoBF1jjkjvuzWr3HqWD9q25yzAUv9bpig3qoRmnmXhiSwFbMs7T6aLD3Sg3",
  "key23": "3dkRWrivEFkqkHM5PrwcjeEbhT9gHidQPwEb5G7L7aWTd1rUxxCixiaUB4LpEXWNxdnGUd8PmdJKVBkioe6vffu7",
  "key24": "2i6Gm6V58f3AvksycKxCs1MQ1p38BD6RQ2BbaG93HF8pitkcvJt7Q478SQje3D5gDPKrdkmqfnkgoMwoaANMvMuC",
  "key25": "6i2cHN1Cty1aq2j4KKzw15zK81uxeLr5wCSQYmZpxaiZNHKZhMZUnJcC8VBRpD2KWsiTPG63N3BcUhpzrtgtRKq",
  "key26": "59fuyEW2Rvn4LKuAVH2RnGDtUCEAi7ozDSmdm7DbDjW4nTSVa27Ja6E5CguWxpEqYDqyQxzsttGi7NncFprSmZ1S",
  "key27": "47MkdGfv95NMjozciDDwEBXh79TVQSZhGbcuwoCqSW1BDuBmd2HrMRLPMMQkZmPQbKCJE4PgVRN1PqxrcWbVLj1K",
  "key28": "3sYZJwjsrMWSTvbXZgf1PwL8gFRQSE6NuBXywZ4vM6zmHtx9xkiFR7zkqUfPEDa7UoZxCezvkPGUudGpxSF7ubMh",
  "key29": "5i2H6gw1KjbGQvp9FEyu5cmfDjhEc2AXrsFiSry3gAs6aoXzPmwEnDcHPsFt9rY1ENPZHzb45xPM8o5dFYfmchdo"
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
