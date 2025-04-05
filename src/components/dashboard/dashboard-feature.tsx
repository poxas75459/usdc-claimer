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
    "3W5Ad8wuk2CXquYDFC2tGBPj85RkJUCYpa8EiCVfJ66z2Jz8omqrtSgRhUXYVkJSsXPsom2mVwYMofRDBwDbmor8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ir1A37HqhQ7X33k1X7859Tv2vS6biMUsgJPrazSVYQ1u5Yh6mjoAgNq2TLNcc3NVNm1dkGsbS7mzvGhxz1R6wM5",
  "key1": "zqqqQju1uDa1n9atJriCgZcCczRBom4ZvA8vcrWXoahxKWRicNY1jakh9mbWnbC8j41XnMhVD6s3y5GjouvdZiF",
  "key2": "3wx7Au3w1ZRhv4D5UgwcL3JCHwswG7XPe34WqPf7NHwnXgUczkJkkdWPBDM7yW9gpVjcvkpZNLvwJYtK5C3ENSpX",
  "key3": "2qVK5gzmt5U8sygsNNM7AVHaoLEnCyQX7yGHkqovHDWN8S9i1HCJBtVgacDgeYVGGadMgDCxVDXzfiqMvZytAcJQ",
  "key4": "3MoBWuntyvefoTfhqm5mtY9QsiRHiJhyDbG5LCCXY4FSbfKPKXLMp1Ni5LUwwXJsYfBX5DpRiRHy4CDRq4iFB9fy",
  "key5": "3sDjWy9NZRZ4gH4HudtkziiCjHHCqeen7hApr3QWFYRNqEmvRoQetqSzSo4HkvLTGBEprVkF4SHEp7whXSszkS8r",
  "key6": "5KyLptAauCXBvX9Y2gSzU1bEqcDEAVG5EkK2ykuegM6hsdixc4gvT3745jDxg4dAJEWzkmBLZW2HjmoiZdeLTkEG",
  "key7": "3m5EMcJymF7KyPt9euPJqffRiWmFiqYvZxdoz93LYJLmbp3CGGELrxKA85QmPXzcRWBTwxrCCrp1u32dFZvm5ThD",
  "key8": "22FgVXhuVwg667bbSnrUHC2wgbav3CNRVVbSN5okYLggSRXM442aJjHwbAD7iDAsu5sVg4dqQtdaEn5wqFfq1ZhG",
  "key9": "5qRGAco52btActyjAmbCzpJBeWh3hbd5Qd87ipnN14ugCvuLZsrc7xCrne675cCProcXa435FVSgDi2pgib2wnw6",
  "key10": "2mGXckomx844GznXve9U5262jWLyPrRCLXWfQCMjgcgYGJs5sbwZ7XrTweD9e9H5ta9waK8fZWrUWhbm5ikwbNou",
  "key11": "gZy3MrGzQDDV6coCFVUHCffLTYd5srcoVip62evb1zBzqFUjgP82NCEdmkKsrUzBgqK57LrKc5iNoKPD2FjWiTB",
  "key12": "4wiDD9ASoCx2Eu5oC6UjyBYyB9HfUFXWvboFra8ja3sZEq2Lm6UhvkUT9StzzCYL3Y7c4JTDJyYcfX4Da8wTGQGo",
  "key13": "2C4SCBfxxEj5iX6cNtsycHScZqDbqdgovxS5doCp2hH2kdP4gWRAS83rsSFJo3FaLpPXBHQXMyNpQBtr4yA9PZVu",
  "key14": "4NUiGNzjgtWYZ9JwCk3mUXDwKeZPW7vdrvpAEpgJgRJJ2xN6xVgeqsajtFCyncvouVkKAnA2h22uTrF4CC12Bb2v",
  "key15": "2M9CbwuzTQwXNFFcqE2Jb2DpN556CfnyiLPtg4vEnwzhJBW33UguSkJF7LwFjjcThKAMY7CYzLjtzgFy2LwqRvG5",
  "key16": "3v6QcMrtUSKkjQGR3aakth3NRW5MAh7uY51kN8tJAB5on8A6LRSWFFQjrXLa9rEJoScoDRUANtbAgiSx6i1GC6qx",
  "key17": "3D49om9v8J2QGMUyauqNenpBwV2ncS8jVXbiUskbM8J5i1Lb5r6tuzhSJCd1dAnctJvCPdk7LJYrAkhdpmY2Q9T6",
  "key18": "22GAKuVMWcir2ovnV9czzSPGoZxVRpa9V5vAkdTEVYUcfaB59jHNmSKaJArwqDn3fdcZbHa3TbbYHneERXgoe9pB",
  "key19": "5Lms76rYYGjv7Nte62gmJvLnP9S9oP7ewCgG6doo7KSmJnBKeSbpGJsVja3owLt18kQxVof1vNitCaQZTNt2kVAW",
  "key20": "4mR7R7GyQUr4FNSKNthLQ8SFmucmGm2BmMr95A1xmf3KxqVZk1LtSKBYR9QGxEPfq46dwvS3g4mSetnYUPCFe8tp",
  "key21": "2zCvDiza6LmD1oaayccF4Nf4nrw9q9Cgan5gQe6yKwwCgM1L6J7ToXgo5Gik3jSdm1KzXLvyFGNTDzGbqBzwEzi8",
  "key22": "b7BS3phW7mkdQMnt7ehxsRtEfdLDiEd1iVJ2isAgjFd2EX28MDM7BAWj2dmTgEWKjZhGNVXpyugwYqx3quRn1LX",
  "key23": "5xuYaNiAHpUxAbtjC11aFEPQ2nxCt3nyzyqpjyosXjsFyhFXDnRjE2eXUtKr3iNQi8ewUNLqS6d4GxrwkmyxrKwo",
  "key24": "2UUzRsVoSvUi8aWyKZzunAda9nK7jBCHU9S5z7d7wQhxpJoceFMvNuKygGxAXYkpnJsSYqjznTTX3Yhec43Y28Hi"
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
