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
    "3wYaq4JZzgLJHKdn6fpBbBaH4B8F5VzikeQDN6aHJMPv8pLkZLzLKdVPwu5GzUS1U4FHgaKas4MMYcD8E2MsfNvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54drYDzMCGrqjkxJk8QcrNHvWF2cL4Km1H7yFWfRHorFKkK97EZUmPyVRnP5cY81fibyNzNRVHNku2BiHMUgj9Kh",
  "key1": "c15BateyfENYsGTZ5c7275jisaTw99kUyMMg1ugj2eW4tpzJaAihrEk9yipwNK3G2MU1QNbmP7J3Z5gW91pEMPi",
  "key2": "5Cx5nHBLThRnHV4mh9JmSQjHjTfUZpi3dTqWcjYTQxvnC3EjbL3nxv64pCfvKDp3hpB9tS3ERG335sgRyH16TASf",
  "key3": "24RYzxHN2bih7zFoEH5RaC8cZ5CaZi14jBm5wYVGRqENQUoFQKxmmUMdfrecmYDN7ds8tkYWpc9h9HJSkvxFoVV9",
  "key4": "4vjPzmzQmMb8XcN7xmjLns5MApwGdvs2Cqe14cu3xeVp6DFF8mj2czAatCQATS55esywHitVdJm2V7tzHEGZFZFj",
  "key5": "5zSPTXzPyfYQWDHhRu2mXquN36QVmUxEE2VCWg2S17wBTiXyqZbHcV4agJatbPYkcxBigvBN4eWJant656WmmWnz",
  "key6": "4cGfWa79h85ou7pmBsPPKZES8SzF87Xtno5PXoTLW4mXjTH4rFn24AcmY9GhX6zUgurR2NXkTxSWYiAp7bFdWaMZ",
  "key7": "5xuMsadyrCxtQFPndMyC3SGACeDPKmAbZnjeZ7fEkgqFTneQYegv65e6M7dXTLjcVdskTERnLuE37ds2F5rRYDNM",
  "key8": "Uhsyi37qLZtXdEVjMKnzcSkjn4NYqvCbjjhk7oBosjnUNLjTq8kFnKn49CX9ULJ49j4qQGzpczAuF365Hoep4XP",
  "key9": "3qrcqm6j3DST3PrHxZhtydP7Ad1EmPZE6cBeEDtwNzb6LDWL6mUVyUxXcXBbeKqPMZUm34YrsUsE2W4MRvqc3Ya3",
  "key10": "3XRFFLooJC2Sqe5qT6XXNdYruNArBRwEuo5Jcjm9McD5NZuzpPVQis1BTv1W3YnCBMFFrHYsPArG6fqRGK6jysoH",
  "key11": "Fif8Kn4fCEVSzFEADqMHVqhmCEGKH8BX31t7Gxi3DyMgFmSgr3MaqZyz3iw9NsUJffAvu1A8Pr5smTCKe94ixda",
  "key12": "4c2tYYv5a9SbTuCVA968iz9Z1NEAvs4NJWdmRazwzWAC6cz7VKRPqrfBrHAx9nu6WqeL44CgEJdcf8QGracUAnRc",
  "key13": "DpsK2SrrkyjHdJXdCM7FYD5KzZLf2myPSxvuRjgdzoqPrTnLoHEAySNVjcVu8ErJF6GPczRvnNukowq439fjNAR",
  "key14": "2mvB9jqZMu5VmxjeqsebKGgbmtnf8A9g7YxEGfVTK11cPggugYtqewE4iGDBrcCYMMdCU7kELiEGMzkKHRUPMgFn",
  "key15": "4JiNj8oNWFywD5cpW3Lv9wj3KA28gBS7znW57TwbXpsLxVWz2Yr1taUFxfBgt5XsiVF9nEKSCREbJLPpvRJepysM",
  "key16": "2bmVeAKFohGacUhU7USXwSwn8Y2tLAmRVYe6zktDha2rveRAZDwwkfKM3yYoqpZhPixk1MZZyZUVx7vL4r2oTozU",
  "key17": "5QkVa7M9Spo31VPcJu6zoNiYue4PirgpR9aH4bxr8cDH7iycVdQFgdyFYbpsVBDDeeW3QWuLwa3dfRJrysMjoCcL",
  "key18": "Ma6ZpNyAyfc81YSgbV8MTWTn4yDg3w7UP2yjPoQFa5Fs5gPXuWnFT3Uoz1RkZHCijPq2fXWJKMqicF8y7hRF9Cv",
  "key19": "4bMnEEimoWL87RgM4ZzYNosigDFr5mPBMaZmNMpePigSRTbjLo99K4qvLRobmsDvCDkHvUfH9aQ5Rv4puzv7rste",
  "key20": "iKcPAmi6EzChQp4Ndxs6KJT7iL14EaxfBjUKP17EzmxwaK9bCLL9cPNhriqAtwrnUN4QA8tpGWDi5PUA1J6rV1v",
  "key21": "225H5m3LTe6mZcQcsQZNw4q1d6An8kSkDC5P3wsTBCxTWXpGRUaqNAq7CY59VufQdUJLMWcR67gq2huTwxq24Zac",
  "key22": "4b2QFKYLyVQHrtHEoYnPh4eeP7b4fELpm3qFCXFY9dWSA5MjRJqD5FhDf1H9t9FuBEUH93HBCVJ8nMXaT1XEkNZM",
  "key23": "4UzWHcTdbKvLL745UX2UVW3cyb2BR442ZWjShBrgyZJu6xsxcgYfcm1GjM9TuSU78et7qMUSwe3bpvhxDNmEM73T",
  "key24": "J9PjLE6BaNMQ5eKZosBy4ax7eW7MPjDZ3WqMorqGuN1k4GXR4UuTQ74iWQR6mA3c2AURLiJSxfS12cSronHYiGh",
  "key25": "4B8GjZvHUckDxBHUcQiNxwKAz2e5MyhJ96LfuuYs3VmFPt4PYpUf4ohLXLda6RdtfBBwVcRqgGjWiA2DmpZZTVbD",
  "key26": "2ZhwMUWCtqLPvaTD2hs2CEK5nminiSfWzTGs7v6BmZfUDEndZd3VQjW7DbERsdQZbAzVJFT6fNwmtTcaJUgg6Q3D",
  "key27": "57P34xU92f6CzaAuH3i9jaL4hwJARTVErDBi8kYJMwSeh454aMNWbSZjrCeZPruRiTfMi1KRGbodK5DNy4YDivxp",
  "key28": "Yma3V2QExJZr3bFa3ZAk336mEgZj92R5HFEPyXWo6HMxgoPmvkQP5UYz4VnFRv43gDeHm2cZaZHT8QHUXJ1Ngom",
  "key29": "3h6gqMAf4oDzc6M8Giniydcb3QwifdnSKcy8GuNpZRhsWoZY8h19SxBonpFufgS8Rw6harUKLhekFJRd7LqCeHeJ",
  "key30": "4duHvSU3MqqAiVSJXn6Hrc96pXyjDQksLCeAiJARwd9VQFqnFvbEEbe54noEduKcWooxVNMfe7cLXGyUaBwthzf2",
  "key31": "2ypuA6zWdvv9NDJF11Mms7emjrJZGmEHPhmo4PCLiTf9jnTFPu3vBrPsGYU8cTBnwrnbHUsPK9zF9WtGwWDZgp26",
  "key32": "4LnBVDNpYvTyXJpZ4e1TFFzDfDYMFyjTVUQ4bvNKLZSavYp4pCLrbUHMuD4s8PA6gMfmpzUDpVQuUjKJEFMQechF",
  "key33": "XWhoSbssLRnHESN3apboHQUPoDiZ4ThRDh4tuJTyAH9iDbqae79Af6hRuVFj5LxfcG6Rw9QpsinXc3TtFEPtgJw",
  "key34": "5P81nsKhkHGCttkXX5dHV4vnHbbAMtCweSNhPofgg4xK58mKKF3eK1JDXrts9hZ76VdRLKxG1uERGzvDrSbWSmCu",
  "key35": "2tM9brrgCQAH7jC6fWwhAGHgmr2HVc74T1Au14APtHokvrTkWJsVQXDwZGdA6L7HHqkChTBxgG6rHfkwRY91xRm6",
  "key36": "7SSqWCmdysrRc9upvnaaSPQAhzhWsLtNyfmncgYRTCTBL4mLXwmjDSRWiS3Ui7cDDKVFpMncte2cXSP8JGNEUjW",
  "key37": "3LKH6BANp1fp5oGAQeRdTTQ7bEtGbuVXEZMZFTjnAe4MGvdMcVKBJ2M7imYCSJhHXHYaHb6WqBx2kB2R9vfqLeUu",
  "key38": "4odB1hvK3LPHzzKsAoqSVauBsWzdmn5ZXppLfKGVRHCcH8aKf4cTAzs3K9C2wYVD7mhg9dCvi4jmwT47YAjkiCZh",
  "key39": "5UbPDPPUNvXyCh6XQzwVyDCzL8Stjz786P5h6jok5jHqWZ5fWXNbxdCa5RLs7yx3yuVbkdN9xDqc2ABhcuYVey1b",
  "key40": "3d8GQf4F44QUTfpMwT8QSWhz4fjHyEMn4xFqXTyszGcnvGL2B5cfBRnKoGt6fTevCMdaT8HKPk2CDs978KZcAsxt",
  "key41": "3DH96eMWnVWBPjni1AceZoLutozAYugvpn9f4EMwe7sN72Vy7BgS59pU7pFHLyPvrQUb372RPVy1kQg5vC6rz7hT"
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
