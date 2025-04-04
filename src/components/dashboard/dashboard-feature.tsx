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
    "21RjytZPAdr1pETBW14YP8piWfhUryoGu6pmxmkvehwi2HkJ9hPKGc9X5vrf2FzsABRF3gk6fjghuCSDBrPV36yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NgC3jCrTgw3TZq4cnWZScWUEHmeELn4CnX363nydKJF9RdC97wt2fVfcqiMvZgTM3HS3bsZC3YHTNbw4ZNWM1qw",
  "key1": "3MBtB8AdeYHp7XbG9XeJRTHDEvycNeM4FQHPTK5XV65LM5rSkfsmgaPZyYsbL8QnrKFNvq2v36NBhX1YnjqAfivm",
  "key2": "mw4p9Z8uugyBsCoEu8mwGBX2B4zDExqKGmydeoLE77tqa9kDmovxgUn6E9qDG85MbQegj2RZ8pe2EG2uZU3BMTM",
  "key3": "3CA9PGcjUAVDSqB29weR6WP6C6b4mrdCG7Jw4PT4iw845tTBCNhoDj9BZMr3JE4rVVzYsymyTtnPXkm4vZUccTVC",
  "key4": "2CqA5DVXjwfg7KLL1xZ5c3GTKZ9oLZ8r249LPBMpFm3Z5eG8FiXvZEsUrZwjxabqpXVJbKegaMvBseP8pDtsJee3",
  "key5": "3CQaNcPTcZMExWicd2JbwQFTGWu2kAgkBxNJkKGFPo8p9keg9mHEs59REwRd1pnztJvzvQ4fHPmkMxsoS9yFkES2",
  "key6": "4kj6i5SMV7g2o8TdxMpKCGurd87i4wukRHepzDVhyAfRteXcihbeLNLQEwvPxwPyHo4UrPzHfrUPh8KEfQRtBZYf",
  "key7": "5RXzBgb2aajxhJmyLAMLFQAJ1H4UjPW2LNT9uKw5wLSkSU78ZbYcWjFBfVpmwXrzjMEi5ZS4qMfKfXWcawAmE19n",
  "key8": "ESJtN1HGcuxExh1pPdYtSceh5r32SVACW1PsL4HwAH1VHvojQp6Zosh5EhsMHsNPecQhAPjw5jMKivkTH9P8HXf",
  "key9": "3ciE1sbD1sjS8QSFwrmjbYik3uGxEHnU86dKX6q69GWQyYUtLtZ4vBEqWkU3Xx2o1qD5gCA36riYi3cw3FpNJByP",
  "key10": "9v7qL1LB8UQo2KK3RcSGsVnuqLVscPCMxGJSj5Ew4uwbyPrrteX6nXvSL5ApNz4eGfpPvTq8ZdTkqqgPXUXmWJN",
  "key11": "3bMQx5cRBxAj4eNRhrLVt1fDX8MpMpWb1AWi4Z9ZKCyZT82ce4eyZj9XnTq3zwTvVnkGBHR68eJzcgnSGFKxcmVY",
  "key12": "mSn8RA8ef1qdbjZygUTziyRs6mf72LcZnsseBnrT6TNjW18Ycs6KBhX2EJ5srxq11rcETUNu5j7h9EjNviGCFUz",
  "key13": "4RvF7xp7w8wwwdCEvgeZd2HpewBA6XkgKRyC1A44JxEApeY2i8eyUEY5dQ8zz3pjbCYrqEPPexfwctR1b1DBMjUJ",
  "key14": "4FKo6pVcBUf134BAbhmVadsTz3zLu4iKzQCS5kHfGP64kZSYHQj8SAzMC1UbXjnrsebrjdFJw516AWqu4p5jazg2",
  "key15": "65DG7sjPhpthJiJYXmFSGaS6Gyc6B2QPdnLj5iB21Ry91LF1ryoXb8Wep8sU5NvKLQK9Q7sbT25pg9XH2PtvhX58",
  "key16": "5FpoGk5EZwCb5HSF9qxxjQuKovtm9gR2iJ4NWP6p561b7krRXmLcHqU3HhjQTVsokQE1mYvKpYWDCM7aN8jSKtjb",
  "key17": "2LsBdZqL1WcmvFuiaYSM6TYgQZL6TJPRFbdVLfDatMwYn95BesWpUg7VUHsarvMkLTPKxV6PWU6GweryWSNgkFs2",
  "key18": "5cigvU7Ndia2igAHpSrEsvaixxxLNUVw1YwVCGpq8wJbtpAszYV2iTJqRyjKyCBc1n7KHUo3swFxxTbKxviEivfR",
  "key19": "3kAtdXz7ecS7B6yAx33dFtCxjsMojwsi4gQ44ECiJtk7aZoiZnBnnA8wMtTXLV3Gm3pXFy2WN3aBagBqzJ8wUi1S",
  "key20": "4qnaXsuJdkK9CCiB8xuhSY7afNVYGFCZX96CbgSS4f2V5A9sjkTQGLqSUxu5dYHuLspLPsx2YuhMwnJ86WynAGTy",
  "key21": "3CSgAAkHUvwZUNFgy5hXG9TqGgoJHjEHkJWCbM4kfPrJzSKJSMWYC57dhwduWn7jNCgPVzErNwqXGfgUjhZqabCY",
  "key22": "ombXMwqiw6VA5g5jZabgXUm9Ww3oYCm7egTjs82DJpkYmFxi7ixeYJ25Gaawv7JJaP5v7bCdFjddVLfjBf16SmE",
  "key23": "47L7uWGB8hwHkmzR5GHMimD1CpDLTrzXv9Sx2cAuCfshyZBmbWoKGieUjXooBV8bfQXzFNPaEi8PMwJZRE614ucy",
  "key24": "gDp6vxsoME7yGqr1DmVGTPF6pgEv5X6hCWUwun9CtKDQTiCSURge3DYwnSz4TibS22DqiCQEm2LxQfYGBKWamRq",
  "key25": "5E9YSBaRHFx9UJ6Lr9tzNEuMwfNDaEg3jjkBr64bBGJXyG9uLRNCTgQqHPcpvnfnzhym9jrE5VjH3e67rG5ohUJ2",
  "key26": "thxK6dLWRam8NQdz7w6k1zKYjAMSUm572aZSbbarfDBUXdenaymnPHkxn5FJVkpabmNS9uorbQrfyq4x8MidcMf",
  "key27": "2LZLzJz3NskY9fKQ3A2DG8ooLVFqGoUazV3rHtSdT4VK7TYqEnc1GDDoH432i6DwkKBqzJqAhXcyNo7h8L3GEw9t",
  "key28": "5vnwa2sueMGFqGzoms6bJMjL64XBVf5sNHUe2Qruv6fr9PHJtBj8TPSZ18L63Wfo6TJYA3dCJZrkNH4bUqhxCW2E",
  "key29": "5TvghvTEJpvN9vriNoFKbGQ9XKo2ojj1UsnaKnTKAAbrJXZu8nAQ2PgTFrbSDjKxUCcFnNyk5bw6v6uaVnqq6Xr5",
  "key30": "4k5JBNfLRUaH2a8rzBvjaNqaiaN1SyXRoU2LqkpyaJUzpReiGYVRqx5HMPTVUS9vnyDgBjzgYbqLFJR8381z2PZT"
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
