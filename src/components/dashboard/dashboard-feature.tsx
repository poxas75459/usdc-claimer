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
    "wygydmSVYyCgLDBHbgMoY4rcgEE9kEav2mhTWbsmSUb94oXKmUJUjuPcP7x8h8FSvJBQshzryawuxHmjKewXe8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRkguQDvHnpaFBPLpGygbkPceNhp1rBW3RMD4AFNHxb5zD8Qxj5UdAanSuwAj3mj5BkasQL3QfdbZkTMQeJ25Jb",
  "key1": "4yENfVrpJFKXRHsxU2sSKYfVE4hKT7Prj4VzcP3XRQqThNgccJ5erugEQsxXL8xWL65g5HF8TuyesnFYMwjPVAYa",
  "key2": "2uQi94euBfXPEfJzewJhxRn9iDYVwkJNNoecX1d28vMARr3twGLCHEh9in1TLzNGhqfe6qXDpALJA2NwFmNxG6va",
  "key3": "4ZLBizEUBc1d3JsCDUvtFbcZ5tu5YodTxBoFHWRyBTB8y7gz997k3An16Hx5AXKPDYVsET2vxxeFgLjSKeFW5T7D",
  "key4": "2ecq4ukoJTexYCCCQJN1BMQXnCvFQQg6rEgGYkKLscRDhK9vFGRG48YupMCCKv9DBhCkfpQmpKPhBFqyWmy4RJQe",
  "key5": "5F4pnVU828pCKYM9DogcLRcQW3PPeaQxTge4fQFtMCAzocnADDgjSwVFz3m6nFvKDHTTK6csvEfENdfZNRo2kcz",
  "key6": "28GWsdVURZVAKCxocBV6uLLAgVNAr89yaoYbzi6m9U436ZezKv9EyRY4LKDedHgaa4cqpC4eGQBnePH4b6S6ZVHA",
  "key7": "5hunYYQgWPEz5Xi4kMKcZoWH7YY3uVn8ceDCyGMGaj1rtRXbVeqmMDZHBJ8fPGEub96uvRi2rrjZsM6rikWFkVth",
  "key8": "2etVEbeEuk5ecCVXzZW7NifdWrU4wzWeWwG29PUz7otbNbLtHABz3Uj7CrpoUQBhSDhJaqH2e8PvBbMkzkej7peK",
  "key9": "a4ZWGeRZR5f3jMHNf3H9aiEE4i6WiRL6FN6cbSnEvtXRYQ1LWfXF46BY33yCJiufZVjmj8oQ38RZFHD2AYrCs5m",
  "key10": "3U4JX6kGNh24ZS1Kx2Tz6pKGmn2dGM6725at75w6VJHEX4h68LBGtYKqXTejGiaEGtEqjiKTqu5AwCnGLVikbUXY",
  "key11": "5hijxvMTZpGXFWx8XSnxnMjYYsygRm8jTjBpzrFQThkfajevjS5nxBxYScipyJjaK1C4n226uursByTRr2zE5Uau",
  "key12": "5zYWA7aJENsukqyhmGEeKCmpYLzjGmMXvUQhfck2h24Raan9x5fyf6iHYMp7S8KwFFGQXY5vikd4mt4nRhRKrVy",
  "key13": "4PJBLx6FZnSS9ZBkSYrZtDkNHPjDFNmmxwjaNQQuGdxuBG2S9zHQAtK2pHUNja39DZkzgz63TjxzAkgSWhVCDztD",
  "key14": "56dtuNtm29RcheJKQHMo7Q53j6jvu59ZVhBFzqRkgXcyskVCuFNzvEzgnB9hJcXrpMn6xkJT2ZqSeEFeJeespZVX",
  "key15": "61BThUT3c9xXQ4QHZzYdbJgKAt5BoY4iZT5PPyhFySrHUAQ7MbuLyhUNizT3V6mhxKuWETThjfvYgHzgt8ok4wUR",
  "key16": "3wq7A957PxWUVsiekRMN8eC6MDi4QYrfcWP9Kbzo3Mhhzr2BYrK3gT44tsYY71EsMsVNGLNWR4AuaxAthmfB4CtR",
  "key17": "eD773KYKLn1rniJEcXEFoJFmgT74Vct21iKXhaH4ajx2S6TSGUUJoz5nbCXxsogRnT3diXhdjeGSB9d1tG91ww3",
  "key18": "5G586SAKHVFsGU25eStsDPc5DAUxdLqVDf25eNLFkhPWVvB3w75Qd1ia1PJpyd4yHjsgWC48DBLMFfDAq49dzXYa",
  "key19": "52jX3r2d88ynkYCkCLvurkrecNuzEm8pMSm9GeHHRpDrAvHjdqyh7f4ut192admmtV9SgPNeFcQjYfBqjNQMoZHN",
  "key20": "4CS9cWinnLcFTqFjQEnEmnhUmjZRfw4h5Q9e7MwAY3ixQL4gjiHfUFTPippDxY7YRQQx3piddAapQSZr4VWSvXPN",
  "key21": "FHfFCFzTBugfcketcMdduN8kpjMfbzie4fwFXCukiFXUicToitz3XFKpdvznGFydpWV2Ka61mp5fxoXY5TPVJts",
  "key22": "hfcaTsyMPDjo5rdKzt5mzD2j1oBERYcfajSHb2fmieztonc7C8jPG2tR3xd3DSFL9yZxj8uAknosKJLwWzkEH8r",
  "key23": "3idGKgnsMvjwgWojWCHEoEy2E1rDFH7zxuqgkLzSNEgGdQsdBCy2v5MNUjKPGkTByEZSQSWLYvQ9YxXpnBcmiWC2",
  "key24": "2k9dsS1MEdxcPWh2jfGSpPLLcFqBzBdAMqA2xWxkLQQavfi4eECVcqYJQEPcJNfLwEevW3xJyCaMu7NqjWbZ6Jxi"
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
