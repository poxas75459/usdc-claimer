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
    "2xgCWVjoXYHqhBs5f7oy18bGBJcF4pYuNrH6P2QzJphJbiqbMnDwybvbUwoSJhbF39A4M3KHiAT1PUYiQGx7gYrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44x9LbPLkMRXW9Dv7ZinZbw4aZ19gaBgdQzXuRodZ4kfeyGtA5akKud7stDD2SYJbC2dwQMqiWCWUJbsHnkyaRit",
  "key1": "4cVmj5TZasTrJ55y5vPKoCMrT4PPwufMxVBs3vYR6CC7rxsQWGGDkMhrnHymbnVFkJUy9vq5NExVh9yBg8GmZv1w",
  "key2": "5onzagAFkBs4P8a15qV7cmrRX1TGbLDrMCKVWMMjDcYjy5hT4Zb3vBE7FQo3ah4EMN2AhJexhRQGRj7gt7pdsHtj",
  "key3": "4ZbNvMy8tVziuU37kroTWNvZ1nKMTKKvRxGDGjBXGVMDH9CaEoLsX7XsgzEYnKfN7fLkbTEa1StJBrQbGx5v629o",
  "key4": "4bCwRq5uoZVDPfuNk15svGXzdF54jFczVi1ge5u8r6YzpmJrHFW8RcnQmRtFV3pjbUHgD46VkHfQXrnKr5b6uHNQ",
  "key5": "wcYKAGbMVhLXecR8qS3eHyjC5obp9k7epYkddYuUZYryBiQWanUAjYbdbwTTv1e3kEZXtqGn9BDSJMDHfoqkPvv",
  "key6": "3S63MtL1vH9VhtZRRvLmAP93CZG9eSvyc3AXY2cVcv66Ck3m6J2ahbFA8tBegRJHcsSwRJEqfv2s1c1Cy3KWzKV7",
  "key7": "KKPQHwKcpv9cGkcLKKvLForZoCQ8CB1shMAMGpKhbC9yU8si5j683bwzPaQqwpHfk3ZRLEDh2BT8t7cYkGX5Kdq",
  "key8": "4G1nKiy7YM6U42Nf4TffZ3AqqHb9qS7XBS77eJHiM42Jne3inudzFhGddkonQP2RgNtCQWm3t9wVX23g611KKGYw",
  "key9": "5E9pJEjvy1McdFCnvx6SmHBEz91iKPbAUJv2m4sRiAwQmeyRUzv1cLfABFByfwH9akJv5q2SXfiJgPCghwPmjhHR",
  "key10": "5joxyktCx7T1V63K9xD2q4BBMXfFkaxmAnMSiJVKzonVV5TbA6c5msdmiL74nGG26VHZvzbRXsdUFpHxeBvQYL9j",
  "key11": "2s5PhbyJjbpobAVgtZA1TePFs4GdpszmjarQoNeg9556oCGsSBT1AAe2XtcFenJbkR9HSyFNEgp1VTTibk7EHBvY",
  "key12": "5pN1QpMuKttqjvDjAvxp1cb6DjwubWJYbghr9auMdwUk6PGRnxpboTeVZYiXWLaap2Ece2pV2FT8d8D2ET38USNv",
  "key13": "2aNEHoYgJYkD8JUfUkZnDwyhFNsz983rbYZfMqAiLwGVeYL66XZxeERyEJbUdnp1pS2mFYBPaqkKZPoqtnbyczKk",
  "key14": "24fhMJWRbZXwjGoBcvuVr1bDi53zYW9EEKUjHUGAR4f8Kt47caPnmfRBRZ1AL7BkTDgCMEW3KAjrqZ7G2NU6PYsr",
  "key15": "5qgzqP2PBg436m45ckgdKwhr7TsqgzV9n4zqgtVFcFrnC29hRmVfE4aT6XoGQDRiNUU9aaeMUhaFFqVNXLeLpnyW",
  "key16": "5zh2855hXGp3GgF1cFBAFXuYRjdzXzj13S2gnDiYtP9EPRQDM5spGJ8DUveJxRWQyNpjdP5CqyKSTruchAtaV1Fg",
  "key17": "3vH93ZrwLphoDHF6AzUUejR2LmELwKZTLcgKNARENVoaseLZSbGb66MZTCrAFPi5K5BDdqSbxG1EgeeA6z1ZGDXH",
  "key18": "3dtHnQp3KC7KEKfjWB2NU8KrKLhMfayeHiZRGhLjnEzCeu1eFLDuaZqzrsq3F59UxAYkbD4doWMQHpRJjMRkRkee",
  "key19": "378bkdi9HCB2BPUpTDWGf1HLTFgnRMgzd3XTdUrmMTpw3Tv8AHJYdqUiwhdrgpVRWk615K4p2uhQ1fr6KFf4dPgw",
  "key20": "2bzXBDmYCrwxBb4MM6KWzykuEhF8QNEx98SwNVPrmAQHx7X4YgRvYs6tPerKeCye6ZJrEWZ4nrAx8AjG1ZUsC2XG",
  "key21": "5ua675kZ4vE5JpvmDnMYWbx3wbKRXsVz96B8R6VNZdVLXH5gtMMY2RXqqXJRrSEJG3F8TorBS8b5vkX8Z2xK3Hxt",
  "key22": "3aeYTmJ15hWT2zCtXoGJpYxseQTZguNwNZWQxYQmqdPioaRDAQ6uBt9LPWhipJbzqJd7HzWeAPYaRRuYMBcWtypb",
  "key23": "4RFg1TVamAK9gMRMMtLujFyCvTFdZofx4dkmJ15eFqb6S8ibewUjTeMB5XQ1WUffvfuEgPwLL8FJvaaGgkHeT3Ay",
  "key24": "8gHE1veHyYMzKPgfPwoqZ23vDchgoi23jrtEMToZyRQVMXzfZMh21MUPSAfWHyYpJrczMo5WpivBMkpP7cn7cZw",
  "key25": "5G5Tt7dutQULpdzL6gT8T58PWMbAjPNTgEfaPsht2EYwnKXJdL5b2t9sHGmRGh2As3bBXSsFVvHk2GFhEhK9fFzz",
  "key26": "434p3x3rQMih7c3H2urT1Pf9Gc1rztr3r3kyHVmzzXY7V1AnLrYAsxGymmC2SEh4oBor8jMSHiFaJ3yoxuZVbBSx",
  "key27": "22HUrGg4hb1B3uGpBZCoYeu7gagj4cprcyHe3DzpKPr5WzrfWDdXZMgNxw3KybXpdM1A6BGmETywaikL6ExCH61r",
  "key28": "3Numc8eQf46k8Bq53K8Lfu7uAHEHHxCEz9VWVRqJ5U8fRs5oTDDkuGM3icq3FhiXcH66XWJVsv11HiEF4k1ZKkN8",
  "key29": "ndJUniZfbV5NWmo2dbuLcijV4wmVFQN3ncwq6tSVPb9Ddj7tkeeQfpBHHTxxjYwsPthejGDfevLKfeKpF95SuEB",
  "key30": "SfJDzrmw7Ge5zh2sf4rAFg8rN7ZaQ4331jHvrVEWQC85gc8ka7NAvgFmr4fs7uYp2o3SppPiXi9cJ9Pkk9d43Qh",
  "key31": "5DhaMaq4wLQSsmoMhG8KCnhV1CMhsYSLCeb8T3ThfJVeQ7fB7M8HsDDCeAnJ1bkhfBEtqLpe3QA5fSJzncWJ9tnb",
  "key32": "4ByP45wtdTKLZpmdQz7HrfU4ZinGnQz3PCheuwtPywPCgsdHwZNorpUXaxaDcpfejjKFZSgtu41hQ7p4KWt1GcpU",
  "key33": "MYZ6JXKaRQxy6gWLE6bLsjoCrTvETxcsxBAeHC4gugQeaTUhvRc3UbVAeeYDW3iXrcazZ2EaPncbUhSVrhir6FP",
  "key34": "EW74xA8e3NBP6iVac3LK9bT114jxsV2qzs5BQceesLgDSXrRiGnuSxXPPZajBRwJxYZXy7PRxCUPpHYo7cHzMkB",
  "key35": "3X2hYZjfnjTygvVUwRJC1ZwsWkCECqjVyo8jXocDnxLMfL4jDM2VtaNb9DnyHNiVnbaBZnonzWGdhLSapuaYnye9"
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
