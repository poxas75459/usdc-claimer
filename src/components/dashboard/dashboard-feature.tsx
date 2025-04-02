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
    "3CY5VUHTP7nneYWVMjYrqsHhTAsdKvpUMKYtNyBkhmJgaPUywpfj25QDJfGh8UrLo9XFx9bGH4C8oeGkZKoPRp9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRJHduP5aE76LKZSKco5YQfcZdecqtNvErWy3QMrWayyQbUSmngHrHB1M8ii776N1apoitGp4xTfxHvq9uWQ2Bm",
  "key1": "4RvqyDv2xFXjbw4u9LdqiXnTekMJR7hpdfR1LVpKpLNiSA4eQhR3YkAfuLQQJ9yvjkU67Zh8fHpxzQW6dVr7WB7w",
  "key2": "4xQYcHBfKwQSKyowYptUjkd3M44mk27Jrtkizht3atJLpj24GfCvJkLaVZkkHiPTKTSvRdh7M3ADxJZjFYBWLMRq",
  "key3": "5ZVTvGrv3gmASwPr2UnRLT22dfAijEyMNLbeUSVP3QfRoDWes8cUj8mcySkvfx3gCJdFTFW7F6GxEaT7Se41RHbe",
  "key4": "2uqkn46yC4j5ANMPT9n9Huttg2cQqrNdJ4HBkMvLMWWwpt2peBsn1U9n9cNDzuveNvH4HxQQWVgF88CLWxvhv447",
  "key5": "4HuTJTmt6bRiBEhKiTcNkVfhY5r4onV7ESR2ms6A8NfQB4vhQyQYWkBa5Ws8zLyHJ9DQmWwaWZcDQFxqddsaQYQL",
  "key6": "3iEifecJdaSdAtEjFPkx5kCohXQFjcWfZHBZS396o2S6pco7ggNgSiwr4iQ5UBf8WZ7ufe4GJyjUWLAFMuUjjGMS",
  "key7": "vFWWMDQGic7bVet8mYT8wc7DWXpD7SoVPbALad15ijkgwnVDJHkmgk6AHy7f1n3eJ6MG8Rm9TMrs1Fec4veBeQx",
  "key8": "ftwufG6ymqZcndyfBN1yKHd6xEPvFHx8WMo5B5rsCS2MwbcHdrUPQaiufCFLdHbARowmWbyYTSoUp6rj4d9oLT6",
  "key9": "5AVVUoiojGYDbSv768g2saWesRDrwkvWunXjxwJ2B7eMfgQL6jaEorPcvF1E66GwHBUB9TZM7Q5fgHsvd8kEccvh",
  "key10": "2dAk7atLcsaMhUKR6dBwuNjBrnpF5nuk4ScPDPd4Vizg6hAjcegkxDMAxYKZoRuHkimsDHzZ5kUc4cYxEb7rPjrn",
  "key11": "4heznFvtUnUrqsR3AeFAF4XVuMWzqYA72SyckhdtMKYvcTCLKAQS7JDAq6Dxf8HTNzg2Q9WAY7YWFQLatMGpbaFx",
  "key12": "4Ve4juPCpA7fFENoDc1gMZ3sfK9uvDwgY3HLRdnb85NwP6Y6MVG4CP5fzycoe6P1v2fGRKCLG8xro1P9Uh1F1yQv",
  "key13": "4gSRfoF7L6gfFinNAnRmSK4QDKP6SqUd4EpBav5t8eJgJTf51G833jvQ73Rip3ATMZSsfGxBnDsu5LStALPmJ3x4",
  "key14": "5J74KVqiozCTjcybi1rVWamWcmh7pBMMyBu2FcK6bfRJe4k8RBLt1PfTjZ3Mkj9942EvdFFdicWpZSgk3XuCD5T8",
  "key15": "63Vr1ozrN9wsNA6vD4JNianDwE7okxwcorG9o3wNWCYbD9sUsPSUXoWeyeSQuGhHQZKNKDsYiLPrrUqWP34ieuub",
  "key16": "3DDcyA7nbKyse9GY2Mhgg1HPUsmdpTZ48wKGBfcxH9zidZMmepX6UZthmB2JsF6MmxbEJPfvVoPrmLgsEgMiUfxd",
  "key17": "pp9X89US3P7TvPkrZqbHDGSEUQA5UC13XK6LqtpPZDN7krMyV6hxvna4skSprJjfH4JPbbdqAqU8foJYghrEafa",
  "key18": "3okJjujhxVQmDG2EpgxJXtfr7qadwvsL6zdSUJhYoHpwB9mshCyrvPchPGzMEgxr4V4kcDHLK9mxPKhaVyQ5b9Gt",
  "key19": "41XAtcBz9WiiH5kTxxnhptGPbqyEQJHyNZTcgP17FSJrxDHsE8zg3ZhcMZz4ehHKgQsSdSXPFyAKQEgqodQ7uTCD",
  "key20": "5Mwad5MZgogtSVdxC8fiaiY3zKEiGD7Fmnn1qNtmohoktanYiCmEZAHHKVcBowNmtMgpEJwnJitp9CxACDHHSJmD",
  "key21": "3tn3dmR2UUFzq3cdX8Gm7nKfQVdT8JZaZo4Ess5qvUecetYvKsUjf4ihC9PAUTx2ZisWb1FWLMWLLAbaxfNW3iAG",
  "key22": "4fL5Q9tXWjRmN3TGkKQiGp4wDesuYFpTXS6yNxAGWiAJ2XzPhgqt2uwPi3ruHGZnzFV3httJPuHuCBTpTRHsV65Q",
  "key23": "2rZimxFFUjh76SR6wT5mQzYR12nQgDzksUH7a41hNKBGojnb9962NnTbpkRV97dnDYfJdxqQQ9cd7GPbNrVSBtmq",
  "key24": "W9yg8apRpG8MxCa6MJKgexYffqwv1EvUjkmkGUNBGNasTaqQnPxeJD3wvKeNz4yhXhJhJUjWgrtF7HAoAnAztdR",
  "key25": "3JGFjMdjB9NRdVZjMJUadefMHdraMa6zckvysTh6dMNFjN6hNeJXBBHoLyk5RfLhv9R4G1u3Pm7YaX7ZoPTc6ZKw",
  "key26": "s25qUAKGdxh6HKLdxJkZ7AeDuL1x5SEWb47rFrbkX2u9DHPxPArjWv9hgLCQVdrJ1LyBnag4xB8uHp3TmPKAJ82",
  "key27": "5TV5NAf84DrDqFdaKkX34qSy5TLyBAEo2fDv3wk5UhnkjWsfVv7bNYsHAms9bFvskwBME3hBE5M1sFfscgkr9XwA",
  "key28": "23AKj2WnWooQvSB1my7SvWBSa75Q7o2grGaxcdmsj3oSV1Wax2iDNLQPbLGD4oqczgBZr5p1XSvpULjp21Xp6HZx",
  "key29": "PnQUZtgL13LB8TjuWb1Ui6TiSuQMMkMXoNVL8Jn6Ksi7GwztpSH7WucWHPqdqjYS987UR2qTyaBdbiWAh4uZAzj",
  "key30": "4BYbp3PwKGeEKXNiiWbF56prPWonqH2xTCr2Gt2WEuypYPjuEa52Kpvs818ZWYtnkFQEKNbS4cNZ9UMvBAw8tBbt",
  "key31": "Jasx8Cbmk91f8g9TBtTX5ALinTLS7F2kjqo3gpuDUxVAqF69Cq3J2KuhNPLSUbDifivQShS1z5AJW7168Ctb6t4"
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
