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
    "2CyF9YqGQrjf2Bni6qNJYsEnTGovjUo5BGuoJSJMPpFBqPnpggSNiekreDridP5TZqQkADdQSkJEDHkVJywagNcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BMKn69hGsowB4ne5MA7fFYjeP5MCAeSHD6g8neMsoT41H2C4FHKZtWib5V5xZzbGeLtgUWhx8bLra61kGXGLVp",
  "key1": "4vDu2sa7VG1vthbyJKcs6WSysrDfRvFZqfBdQynqFCzZFGvQFCEFhDwFfX3aBGwW1b3BGfvhAAhsfY39rVLvrscV",
  "key2": "5mTdHPHiqsAiPnJMq4cca6HAaSU8URiQsgKBbgrHQuJQGu2Jmhyzp2NHwWUqDTK5VtC2jwm6P7UyLYBRT5wCLHHh",
  "key3": "4z6XBaSXNCzjjDSof9WxcDB7eDbRjJDgVybvw3yLDDH53PeLDVCDPDzf1C5VdxgR48uk2uuWXXCzxVd9TA2PA7tA",
  "key4": "4MDsjd3KMSR4jgLAh7MCzU78d8bnnqwSeu2NGuhThyUEQ7mQ6e7Cdu7D53fDKZmx9D88Ch1j5X3HqmP2yu9V1HVw",
  "key5": "5p1JkxWswnovKueLSBbk4fCbh3u4ifrzPBfHT7VLHEJb6g3x7Hv9U6ai3GypXGAnUS7KFha5E41DPDFZEFezebQP",
  "key6": "23pJ7bLLXieuW5vmKZzKmKcCiD46H4UHyVpL6ybLCrtDSbQid1icSEWNHbY9pUGHDAy28CoY7XruZk9UMg1BeXyg",
  "key7": "5EW7Y66kT3SsVeJsDuaRp3scP4DLEncdZpFJDSB5gPZehrjw9urRFsiqxRCFwBSMFVtgMGEdYMJLYn26iF8RVfDU",
  "key8": "3VXpai2nCheToSNLjpzkH9A3U7fksBNKmtqdkjPv8rpDfQrdoee3613gKnEh39u34QWbUjoMt3zLLJWAYDJrtt8d",
  "key9": "317B9u24t4m5hTSYdnHQn1R1GhzzCaEg5qwicjX1RsGVPPJgRzbBKc9zRxpgugqxKDEKwCGwFYDbc7Hv8EBnYf47",
  "key10": "4rjeg3BAZosqntj2QWv8wYasggs4diExgqJcCwAgaTAwfKvzrqWA1M2EZpx6FoJnznfGxm6sCpR1RzuPb5RdRGkr",
  "key11": "2Nci9mqtSBpXbMimiTZ9NVokVJWq1rpER3zRTNmRwwGun51MrTYnrCsddyJq6ZqKHt75K8rHbJoLWtsrfsmC7x2P",
  "key12": "ZKh9X87WtvYwgEhhG3z2cWAAo4qMqCnybmSx3JmKwkdqQjXDymee9o1pBb3Yz4GQJgJqHKKMrL1jkaPhnhckU8z",
  "key13": "5VqfciypKudyQdctWBq67FHbzBp31QjTUAV1h6nRfmzgGnNF88oCYLKXHP2Jy1EADbQ5WWTovpiuXNgjwGkmBRpV",
  "key14": "Q46uexfystQMMcf7N4szSujeHPXx7kMb7eyp4QLmPjjGG1jar9eNtTgZ3SBvzPeSzpHaYRJatBYAF7GHsBpybHQ",
  "key15": "38b1kgJWx5bARRMVyPHwHqUcs6isfiHwGsNr2jrNWV3TgTjFeNhzqzPxkgasrRhrGaPF2zPFouD75FsmVKgJ59Jx",
  "key16": "5C9MvZxFuPm5q3Z2RNVy1DpLkhP94y4WrbuZvtayHA1MDk3rWZNEo3FibkxmTRzbYXSGGrHtK36yNLySn2d1LqnX",
  "key17": "3qD66JcW9LgGVHRQXreSztoh3XX4DokM1cccD16yNx2r3ppympib2Gr85b5sABBsStehzEzysTLyvnUZAims979f",
  "key18": "2sCFPkqHUwnT6mH11mW57ddKKhZatr64K7GgPkdirwBk6s5Mt5EmXwXRrbnHdaVggR3WLgcEz89FUZ6qjbKmUAJ6",
  "key19": "5n4yu9chSWrAh4k37hgEEZbrdiFbwQAnyd8y8oQTK98M8E5WqfEjecCYTQnzkUC4jpJLxu6vgjBDKmgTFJAiS6V1",
  "key20": "28HmNQQALWTxbLhW6XpbrW3jNHzWnoSt3kjbBoUWfy9FxGwDLdHVV16Ko4Bp6qJapZx7CgdD3ykcmbxYJB2gjyRr",
  "key21": "5gzRCxXPkJD3TT23GQhktVWi5g9xcG9aWYtyHfzjttGEJDw5AshYD8KoUMdAo9bFkvVu7SCMT1uRcCiTg7vS3JAe",
  "key22": "4VZPfRh8zkWAM14vhZ31qt5iqKJpsoW5Ld5EqHehG6gkdyBokkpdKdbV4JLdDAPFhz2QyZEK9mRvARUgd9j4Rw8e",
  "key23": "5BK9mNKFLbxEFk6PWJQQDM5axPeZuzNyQVcgtfuvdZ7TAEFjTpeLnLwZPCva9N7fzyQdnPkunMT6mjvasjVogPGD",
  "key24": "5Jo7ZHdYeBxRTmLqFHRbhatKFMcdENXUQDSukNo5boRyecB9d5pkGb6HWJxqtf8CXprM67duyUdTod5E9CyiRqZk",
  "key25": "662PhV3Wcwmt2uyEKGP5KtFyZQS61YR2vo3Wwb95z6oLV6FfUi6nSqRRXpnpQfsQRLKHQsATY18hmiuSSUXtSWMh",
  "key26": "4dBRgv26sHKqmvp2K9utY6FASUZp7ssMxZEsiBXdwo9uSG3PcE4o2xcavGn19xPV8BPxWmU9fBYpsXQuSNKjc31z",
  "key27": "51SmtuzDbNuAVeiYDatQxETFiCkUDE7g4rttLu1hasnmCSvEqznqhwhAAihs9CRfjQ4PxBjMshpNQ3tDPXQsnZos",
  "key28": "23nyPhAwhXFHwin1PjygYmwvuJ9btrfqyHqQPgP8PBFiktGuKcAR5nEEeZAm88eqVHVq3HadSLwsb6hLkpqWmCMW",
  "key29": "5NZBRRBk9JgdD83258Bqr9HYxmrCqVzjXyUosaK7HyHnfJvZHKtw2oDYFAsRgJCmLGp4YJbXo3xHz6EX7iPTGdiH",
  "key30": "5EB6bCtumb28gikfHvV4UgGPx3P4fM5vdmCawykNxt4MqKxFoA5mwo9gy1iVGMw7RXKcwTEdQM63i72ToPdJP5J9"
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
