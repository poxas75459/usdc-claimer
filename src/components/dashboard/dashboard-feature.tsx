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
    "3TuBKLtqLE39uRnWrE8pcWT8kcFLd38Qeg7jHuBEHvdJmfjWmSULvQ5fSEHceBci3NK9td2722j9ACF1Sfa9dSvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hwQbmopRoW7XNEes2XuJjJpyFGNt8PTY8P9ddBAt9AwMfrp4dfNYmCbpUhuJigPJNMVCqU9gGE4yFPmZHccuvN",
  "key1": "3sv6j147qq15Hs4SMmbS1rdk4m7F5WwvFTCtZaN7k34vx81KVUqScmKeACHVxux1UAE99UhZ1Ked4fivE7QmxbRv",
  "key2": "3FBAKR7VPw356P9YR2xuV6XHZQ7mRxjZgcH6iFFopxkDh9PxqpgbCJ224QjQZYuvqto2jZ8beJnDKeuNSYbqXKTH",
  "key3": "3b9ZXwa64ER8SnVCdGcRuf5a55URnjRWrCTHyXqNBaz7RjgAt6Si5voZv14MsD5WPLLBpwkSpU5XJP1xN3T7wCKM",
  "key4": "5gebTcZvmAkSw5okR2pdcnw6ZJgWo8PgJWJvYuDjxQDvTa31nGsSg5iKH9VPXmBsvcbEvHdeyo2YCqbSXUByeR6a",
  "key5": "eBegRz5g69Qcp3X3PaLmndT7gMPGMsfY7YxZ7kztmpR3kJzpF3t6KEewVWUUuwD7tkQg7xQ3d6uPVbFTeuzuxgQ",
  "key6": "2JP2puALZyLaP5bb9JCAPAz5QYUdghq1kjUqeBJkiZEaerv25xkssMxgngu7xhJGAJ4ZXZbLEAK7rSqHdJQYyMD5",
  "key7": "3h6Jtm3aq5gkBgaYC5iL6vXx2kMUNP4vBgMb2kM8RKAvaMkLAcVeXdUJfwFNDyyT9UiFBu9nGDsXX1vWaMg9h9TQ",
  "key8": "4w65vEBKvwGdMkiRmBjg2ZNTS5687sUwGheqD2dkPy9GVcwWSoxS2tUhuzv3RvGoFFTwbaDxsSVSsQGuiMVBxZfE",
  "key9": "3VMgUsfB8Sve3JUvy3v3dSiaBDZHhUdVrWm7wJmE4ZyAEaFkRg5iAhXckTFeDsSBKhFEZ56cfZdgfPXhx2P458Ue",
  "key10": "Xxihx747mPmXWD4zWTiaShWioNaWs1zaxvU7vJNQdJkHHyQHLTvd9NT5HVfREbUJxHhi9Uv89WWeH8i9tbF4AY2",
  "key11": "2pjUjQ7nGUUdxMua5XFybefebHNsVts897ktmSRhzXyQautuFj5tToLbHA8hRAmGbMgDPy5X25Gw31r9ftR2SFBd",
  "key12": "5wGLgiJJQ5yzvoEAiu1C45ev7CQwPeK1N67HH7rs45bCCSrHr2Dejedaa2N5KfaXLZYf8JWUSUiZJG5GMeLhsfqT",
  "key13": "2RKK7RTkiFJWd5zoQEZbHSkkWb8VprGeyQYv2o4BXHTqi6s6s8bui2et7USa4LyVXcQBmcMRRSSzUeHnVsQXG7ar",
  "key14": "zgcTkhea1iKRcP51rjg3BbDfLoB4fxCofSLvaKtW5S9dhEHd7zFCzyAc4SRpNZphenNpVmaQf7FYqG7srqvTV8F",
  "key15": "jCZAFjiuz1YgfXx91P4bLgaAiwvLbVUfpbspVo23eGQyQG6J4DWvrJhdeGhFv93C3kaqeXKuXR42xPk1NSqcm5V",
  "key16": "34q6agdwgN63fxnApqksKHs4bhKkJTjrCquAjeycbvPsL4zy5rAwn23pLwhyBch2mxJ4ToMWD1nYDi2N3B4YDeqb",
  "key17": "5W9Drh8bPcMedAM8FevMVd9kSpdyFzsLAYphM17jZmXd6coXD6R7o7nNk5CQ52u2wGX9aatjgpAQ9HamzG7a1yGh",
  "key18": "3Ri49dFqKHwDm7Bhon3frzu1h3M8z3MKp54oxrdg8CMUfVxXgdXFRA4eX1RSH8BDoAU7MQXbgbUdjD43YAGr37bg",
  "key19": "5mAuiKqRgZVqAmQysb7GRZ8ecPYEjFbkrP8eFQzFYi4qKoyCSigzwfhAGviFGPh8a4ZbTnbFCKYf8MauTYvoMjeT",
  "key20": "2fUbijKasLp5VT7ppgReEJ2J7XpD2MSm3fVuTSjd7hg3xZvUx6Gk3zn9wWNYqAtBTCjejUK5JPZdUjx2euLzn4Y9",
  "key21": "3pVE5SDwzpcAbF579Prb35TeV6M7hd8QnA9TMgCvq8ZddtsdB6zUwgLJhSoqEWiUBWPqdD7NfPoAKNfX5X77nWdK",
  "key22": "5Btkot9jFBM4UYyiHHzhcSu5YUKGEjTv5Fzjtaa6d52wftHWgY49tzn7G7krN1ftFEj1Rn8tLqmZ37ATxWKkjxLN",
  "key23": "64kjDqVRMBgenWos7sB6iV6oYLVVb7LYX6j5VmNSoyHsF53Z95UUJNTWFB5NJcjou65qm58Mn4wjdCobGM143CKJ",
  "key24": "5LjviP2bVA9VjxpbqBc3Vz7yYEVcoVorknuhLYZMfLwFQQFgPYQfqyn6vYWfUuyk1abP4X3mVEkBSq3Q7kX8ZZXG",
  "key25": "4Miaa39Ec7aTsrgsQtWyaK46MNENr2BtW7YeqpKiQz3XWNdUQhtLLWZuGvL5pFrtAJZ9Ne9sDDwUempXsn8ZdWdn",
  "key26": "2gXQqeiGjgXMC42AJ2aUXn91YyAUXTkN9chWw8secRhWnd1tAzZKtdcE2fErt3mHLd78XuhdTbV88zxyVh3n9Bhx"
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
