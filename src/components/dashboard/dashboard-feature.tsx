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
    "46SPVxkRKUHeuMX9CBppmH3EEhoRd5x2F39hvgB4fF3j2nYq5tMnKGbzj3E8SFDF8BUux6vr5RTRbkEmT9fsKBg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6wuDcmGKmN5LhcgVEbzBJVhM3YvkK9keo6ocJD4Wpq8LnRVXrrh6YXGAktN1aanUdWex7QyFDSiWSQdC14i8HPk",
  "key1": "3CxudHrrF5dxpQPiFrLWAS7e5CxbChiQgHFxThxfkDzWsfphGbpFxJFDjUtMi66bhSwWK4KkgP1BHohXK8mdRxaN",
  "key2": "wi114UZWxE7sfNg8UdRM4yF8qpzpxUK26WktuH57KmZvD9x9Y5Qt9MVGeowG8V4Jkzfp8zSXrf6q9YYXzBgDbqj",
  "key3": "5zydyz3GmnLvLerKMd8H3DzmPSyecwbq1DmFLK5ECN8fGTsTiL8xdN5sM1StTtwwuc7XVzLrgyR3WThgSMRWvuge",
  "key4": "61qsG6NwWJX14QyKmGNBZRAwDtFYFRAYt5sFBsmQ46bp9H58CnZZYDDhPP8GHK9XauiPRFjMmWks2LxFuX1kTbWP",
  "key5": "2j29S9pazndcY7ajVS9q8fWKssdXK7cZgByH8NsdknR4CCCBy5bW7P5cLLBSMRBxQQJzfaTsbzPVoHhxEJ7rjqEn",
  "key6": "5VcasDCkbk4cZFQxmdstP9f1fgMutQmAvd3MqzJ6e4zLEgVk6A4QAnafJUDMNWKFp5uJniigcXgeTSGBUA3D9R3y",
  "key7": "5R916733inMSwQQUzdHEofWC286Z4574cz3bDaZShmd23iLPnsCEyEA2z7kUdkLJT4B6ycZowbJFHKZ9gXou6Cbf",
  "key8": "3UqVFPQK52GcwSWccVfRpnpSBZJaFKMNPeLyxBDNCGm8BWXyWxevWcGhpgchQVaP9hcVow898GL615Vatv6yNmTm",
  "key9": "4w7pA89HBGXfYFGjFXfpHSyYkCkprDP8ehfWDF1e7HJKCf1vKje5NTVNeFVG4n8jFgMW8CR2aX1KfWv8bcfzU4mi",
  "key10": "T7MFgtdWkc6ig9MeTercaiz5SMztjabprFS3S9ukzZEHCNTYJQuMEG797FQ664Ng2GAa7Mo6V49J5GzvNdtzNqC",
  "key11": "rnQcotLeKKoppGEqWBUr31qxxwUq3QKToeEGwtPYFQqr4KnFUdeNa3kbs3n9QFUFXVGsQjY9vzFVN2TJYXG2kw7",
  "key12": "5d8y4CyVpGpXdEpeB8T6qJ6GjnEsn1KMpyn68z8vfxU3ooruAg5Gdd63FAuaXG539R2WdEFXeyBKPPHKHKmVQu4p",
  "key13": "2fdrUFGUq6W9P1MJZ4RjWxmpxYe53GVfv7SzEXA1iDvgdWBTJLzAYb2FdXQqcq19Z8Se7rZiV2Gk7g862JMd3wDw",
  "key14": "2RevjemcZmoB7URdtizJd54CKdKdpc3MokTJD4CGpLq6oYNsoZvKuoM9NfeUS23MVyH63bnNS6KroAHYGT9SA4vQ",
  "key15": "3NQrwKUuqtccVarbnW3tuj3UE4G1pBBuKPX4Hbs5gEA6kgPdekZ7cZEZHGo6CN6A4wM2cuQEHPUfjJoynWNr3SQZ",
  "key16": "4yzVdWc884iuLewDb7oGdZnAVP8P8mSZS9AmofuJr7pw5hGQEfgJFx6Da3mE6BysixBE8DgArgkepgE1cESjdswJ",
  "key17": "5o6jFN2sS8cbN9qcHzxG8hUEjU5mQkkHCdiwHojkeLtSmX3ydSur6gCaviHfQW8upM2ig3Ew5YAmwsDeTyctE8HN",
  "key18": "uvGBfZfBr3Q4zwyuQanvFi46U9M2WWBMx3u2J6XGy89EtiDnky3BFKhoV666HcgCVaA1vHW4q2K2s7TNKf7GLw1",
  "key19": "VKjX29BtUWBx9Mqee5ZgohJmJENM87YEfP2C5aeiMDqpsYCE1pDZDwERHMsAqeHvrBLWtnzQSY5sy1FW2EKKfWx",
  "key20": "JNLwewQuk9FAheJpHjJ9wo1GhRzjGWPtfCPoDCeBCy2iqNSfSigvRnYDgnNdWLpDsHWvGMzJpweJ7o5yjz2gYT4",
  "key21": "4nF824HC8Lg8DZP2xghXtxqb1DxwF9P8ZdCmdd8i8VFTxfNpSG8s1gKeB6azN2b7N6kppjqwTzbbX6ERATifbgWs",
  "key22": "5vXGwc2Z96u9Db78qWtCk5xXnnmGwZ8RmRnSDMtHNJdxLKoKQWC7wzAqRitU3vixDgGvcDZdoDdyi6WkAV5ZNfPt",
  "key23": "4bcBfFCkHikcdTkyJs1dawpxMdJoZaoHjSfjnR7kG9crNEY9Nta3x9RHyDiHNQvYW9D8tSydPiLnSJJbu2cECkcN",
  "key24": "2uFHcx3rNmSRfKcYuasDA7hNhtVm5vhPh5XFqQZ8W8afcG8mg12d39HbscYz76wByuQ14sQZBM62Nafd8TxaMyD1",
  "key25": "5yaHt223HmMWccwqqx9ABykjXZ2PpJdhviRNZWoqYmruvRaephxPXDe85VnfurC7M6kx9B6DrwWx7hCxrGQWxrHK",
  "key26": "9HB1fdWeWx3cgkgfviY91PCYTmb8Jy68SgjeMnUhRLUGAQvU4vrfgtiCgf9vzwdkrsNGynmunFXrrrKSVivwCDJ",
  "key27": "2E6R3HqUAGSuf3Mm2w9f6YMB5NMm9qDB9iWSS9Wcu9M7evJekd83q3G2hwrkkcKmfEr2tqJTi2b9fBQTA5dU2shi",
  "key28": "4ygemEqrS2vFMfuKCTTaB8kfKvQoy77EwtCYd4JffGAqi8LFz7T1nPeobAnHH52GfSjRY1vkN4mtb4aF8rw7CXRj"
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
