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
    "f6HMAjJdnRKy3SbLCbP2WYUVVhBJ1GpD2W6xwQTf58kPhMjmPXCchN6c5t4kgnFm2ZBWTXqukuVKBrLXGq8zrJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKe793H7tNGU7BaGq6cMdF67MPLopbuGG2dQpwRpdjG3pSM8T6hp7qd75iqTxYWfUEe2Y3FskGsiaAtSrRdLVWZ",
  "key1": "35HducYmPF12E8Bq9p4gJ1ZmhgD4miijsobP4GceRaqCyDBBhZCXpH7XcZP6cPpFouPszQKSwUafmsh5pr6wrYWK",
  "key2": "Szfae1AbPfvvh7GihueQu9fUAddkcePWv1o2UNx9iK4HjXULTQWLkAQMuJgRqW1BoeL2cQw7TmADGNWBL8BWbc9",
  "key3": "2HqWEHq84Vd5c9TbTr6KiWUYi1uD8jgMKA4dedwmuW9c26FkFw88j8eZFY4uqNbNxJLUqYmYSCHfnAHJkKMTXqv3",
  "key4": "4y8LRZxKSt3mb6C15sXd2h7ESYHNjLRHYhduPDvgqJkMR7M773muTGXYL5Tocz7oi6WfGJXbGHs5wGszu7tebkLJ",
  "key5": "4cwWawGNBcsenxmch2WiRarCAnrtt69pDgYen5zWEaMKJez5ujKsGtskHVQ4wi95Ty4FNFL2i6vDrMScvQB7w8Y",
  "key6": "BaE8ESCikTrqMPyy812Cq6aHPgjp1oy64tKSUYzaPQFtpAfASGpbubPs8KZ4ry5E4GWJaxCeBYuMbW6gkdyJPHd",
  "key7": "2XykmjEcSmVTErraxBFgYXDPVRfiPut1iFSRV3zsWHMT1hRP77ucN3tuTMgG3yiEA9DYVgYADFWqpcD3bqUQKa4q",
  "key8": "tngnvrDo8tUFjrz1VmtXiFuvrT2otiqwW3cPgPEbrFAAbvFjj1v11fLNATPWSZReRdgm92WvzKpECVJUZTXEey9",
  "key9": "8AjzatyTjTCpJzYsSrUAgr9F5wo7j6G5ewa1CFDQUu6UaXw1U8kq33JL2wGPiP74FKQkMt2Pw46s9e4wRjsTPcV",
  "key10": "3WLcvR7kaVc9TMyrLxrm9DPeHCZsh6qMqUcfrvjCrzwaahNoeSTxHi67oKKqBMhP9A7Nx9hukw33DJ4gNKQyM4W1",
  "key11": "54ruMno7SkpmDpKtB9AsidvHbViDa4sRAZn25pZ3q8LkU53JkZQGtKPKyPHHAef2tVSsQ9dquJeERXMHDDCrQEwN",
  "key12": "3sNTVAGZxy4ceyVsir9TkCgFjFoXquhhmhy292T8XnEGyfic75VGXC8qc2vpJUjCmcWMXXftYp611cff5S6sM3cL",
  "key13": "2astCeBN7gQe5TegEj1s9q5NvaxjxJ1CwgBbRvMEMgHcq4Y62MVBrHrTS6uNPPKiiL5TMGS522B3uikwpcYNkY79",
  "key14": "M84Szr2SJuqKNU2CH6ALcAwmTMersQVswFbJowaNXqoCVDJuzLnfAisk95HEMBjEZR39DsnnyEoNuBJNeirEX9a",
  "key15": "4dWeQYec7wYkmqRatWxrYwqd3H4f1LntUGwLHUqzRm8Z4ZrHN1kdhF7T1KRp7ZWV7idSLqn13HQNpth5PsBTaQim",
  "key16": "3hYm4SAwZP6ML51ndjqNWszNQnJ2wmhBbYUAtbWTDrEAQKYve6UUD7DxinnAKsSbh4sd9vVoce5oQwt8T12KzECw",
  "key17": "y6CGeduXJ2hMvN1pTKnmArnsH4VSbNnLR97G1caoxYtr4uJEU1FoeSSPBdhSapn9GghEVd2Evxr8AZCYL2ygJWz",
  "key18": "32cPAJEBbcnpDSwwWKEhPiMh9rAP7gp2qseqojmSqDmn9cqGgGbxeeQotJhDs52mQ1Wu5fkpH3T3f7h4cAWvxpGr",
  "key19": "4c2E8kbhQ7wkmiN6z2X7yULNyfdfe4cbUym2isPgfmUgJYFbUGHGtJ7fviK2gR8RKR6oTBH9cD1xRMEQ7G94mhTN",
  "key20": "4a1pRMy7zej7JWpbmUq6XdMQEK7fRhof1b6edPAjmfb1WWj8xyf36fFENLYn7NwufsAtkschBWazNsw68fg6WZ8z",
  "key21": "3i6AJoi4HJ1tSsmbzyYmrQLtgnduYj3du5EyggrZSE3XeaFaksZwRZBh8PKpyFNFMF7o1Ghb1LFTuXoehXAk4MKx",
  "key22": "2Wt4UU2Eu4zmST2YrDAJ7vJZnDvQwaRGus1uK6H9GGTqAHamJyDvgnZVMSBzJPtSuZcmoEn9Hi8vK6KMF89HhmiE",
  "key23": "sSQ48ySe2aaAExtYyd45dLZcUCa5dvL7iqk3xcZrc6Aqgb8K2pvUFtg567UJbayBR7vEaFCjJUcBUDUrwso9enf",
  "key24": "2fPCCsQbJBykYDZze82VfmpAuApL58RS1QeBt5e8KM1B3PWLFP9oTGgcgmSpGqN8c1yUCE35KwEYY8NQybDD4NFg",
  "key25": "5yAb1sSKfzWohhfijgxJRzn9GzWeNvKWt6ktFzsVkZLn1DDb2LVNWTQwWUxf6kCWmkXpgmC7zvzDTa2sniSHhDx7",
  "key26": "3HfoCvxrtYzk4vRT9khWPkU9cswRonaB9cWRPeQRVD28umMX9W1RRXzfEp7p5MmW2DcsNdd9vLbicU7G8rH2yHnQ",
  "key27": "3vuwiTA9DPoPCnCBqEQYQ7b3haLzcjGX8GhN45kySBUBzmX2EN83LPtME1ju1VcFUhg1y6Y5HK8ThJJ6z75gth66",
  "key28": "4A82m8f5uBpjrb9LYfskADQfunLAtRfX5kivSNHFFE65pgw1R6AWiJd4AjS3FgnM6qewUCLu8DSvCMniQRZTuZeH",
  "key29": "5jXaCfVn4BkuKTeS1AaYwWxPQkUx2E5gn3etepZEztLYLHTmahWdCiQs1hbknsGr9uknqCpk1kMUtK2nrx2EJtx1",
  "key30": "3iMcFjeYwbXtv8D5mq5iDeLtNB9aj1kuKxWDxwDKtykWThUhMzEHMAh38heq87MupP1PMQmpxTuzHuYH9vmC64ee",
  "key31": "hfQs2Dj2RWk4K6kXUqj71U8XREqw4VzrZyNFSiqBoiHnoM5H7GsA81vQ7id1nKd7aiE2VEwMELbjXjnmHcH277j",
  "key32": "67M8qXTeNgSptds38ZjK1bXN8BaJnSoBenFGbKfJS9KfQsaphgbTLaG1tXS2tWPiMPTPdDv9AHePXuSiHmKfoenG",
  "key33": "61C68N5m4Rq1rGiNcMnfYxNN7EkMTiLAv6dT5KsCHJkvWHTvoHxaH1oXwmcxC6YpSYqfF58dwXM4QvjRfXGouUEh",
  "key34": "M85p6VvZCKCtvzvYmMLpH2X37BvA5cQEg4GUF7XUCmqRsKqn4Bkp13mUad4nePgqrJXqmgVUrLqRXir9qbpGzGq",
  "key35": "66GCLsMcPbjNaCRKRX6ArgyeqjZ2KtgnPF269XNLoPwAPaBg6JMRRaDwMKC5wHHEPNrUFm4LRb8M8C98bVt4US3r",
  "key36": "E2nCCsyYL1ZSX5vh3bo1vZJFcVDSrxFhPG4V4iPdvyFAxohJ2nRpGHVSGb8daNA1X6A98v2Syyois9L9KXncgwu",
  "key37": "421vGcybqLhr8W4ajtn6K9Ag3LRwPmAjJsixGdMj2sNZ4tTxRijfRDWkaTgKwzoBkBt9FkJ8VqbgvBX6wZR7bJuU",
  "key38": "3d2PaycwuMdBugku9cniBnmirFXg8j3gBM6MrjutvGk9a1FaY8Cs24yaQqRwQpaAGYc5AMRN3J6i582ATwdnFaMw",
  "key39": "4uo7EHukYjb6Ak7X7XjkwwiZr3otwLt1f933VPKFVdurFwrnVcLF6ec876fYnChH3hhc5CdgmMhp83b5wzFwEs5L",
  "key40": "4x6ChGF6XTMNrPQCg3TGpjnXw3a1YbNv726ujmtq1bdCFSVckquBaiszTZPA6StDtA8Hsk1Av9gjc52seZH28Gqh",
  "key41": "4xNUJvLGywkBj9ut8fwtkdRjQooPw7dzvmfnGsX4NabgRDh8pBAQMn83mPzrthJ3zZ8vGwP6EPHtFauYKaJRY9e6",
  "key42": "22D47xwre2dZgTmE5BTqTsX6BAEmrnFcNFvYJKvfcy1zS3bozYDXGeWmLrMit1yS7jjvbNZ5EujJjNDZqJQK5Dad",
  "key43": "37bUjknRXschUYNTp25zqu8TTqXiWKhWPiLq5DQeqqrmprPwN4iGFTrN2yLiksVLAWvt1Ak5qkTihBbDZk1zYiLc",
  "key44": "4xHRu14ptKaWmVDeMNT2zy25dXycmo2afuY7chQUxnbguJ3eXrCy4F7j4qApfTtMPRZXXXH2odS98yDZHnt1HsMB"
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
