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
    "xMbd9BYrFTSqJEU5giNWigR71aGeufgnQUPPHC6DprqiosJ2TsddFPtPnA7LPMgGvsc6hBZPguq8mvC9qFBMRzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkUS92nHL54pBwb3ydcSYp2CVdrcAJ6n7wsxfec6GK9crhFCQvgQxVjmPEsSPiYkLgtb8866EEppjnjLtRnmB9i",
  "key1": "3qArSpqGKUn64wQscHBhLTwf1VLGLfceVAH9Q3wYZrH4DUePkYebdQz25cpXyjS9ouyFFgUzgd3FRVQDVfgrU3K8",
  "key2": "MgEXxPN5qMeVj6A14Ug55Hk7KDGQKCNamjU1uPEqu9LL2157bozw7VfjaubvTZXGq1zZ4sWxfKHvHRscgVWd8op",
  "key3": "54qrZ3W6ynn3YJ1TmP24u5TmUViePUa1dAYtysZkmwNzHWLKGTeo8rR8g5QBsGLx3vnBGZDjHfgRSeKnY4dJ6CzZ",
  "key4": "4fRx6xY7QCTCqv43EXHudGF4n2HfBjMkXmSyic1SrPtxecEQWTJjSduqFjakRpH118K9t8T6wjpFtLYm7pSZFK4G",
  "key5": "5bLFUso7L55rsd8S2xWKQZhDvMMT89VR1idViKNckh2Gh3fy1u1ETy9b4GEJEPwy4u3XY2uKkfddXLwcgF6vbjsz",
  "key6": "3KS9gqVZzdy8m6HHxtmiUMvdX6sCdTFNH7anB9nABU31MFU4A7NdrcDH6yZDLs7UEWy7mX7jXHJvFeDjLoxnsFKk",
  "key7": "3p3uGmj4u2q6BccvVDsbN9PnuXo9NtQe4QuDabUaczoGGYkSnx2ULNotC7L7a5ASoF11XmrsnNMfjZhWqWDhKtyZ",
  "key8": "rGfsipPspruP9vuj4P5Q2JDjqqCE2VgpkXb95k1jKUPV2CWm8dFKa7SpmR12vNeCWFE7K4eyPh6dvMpkiw1iBwv",
  "key9": "3xTDx7pEdKPznTeHY2aMAP9ArzGr8xu4u2oezf4gHUcQqJMhnd87CfTEYrwy1UfbP6KsBBsynC8WZ4WcQGLWmjLd",
  "key10": "34iTW4SE9XczBTKd4oXhHMpitSAhraqYqnxXuDVJTNu37Y7iV8yE9yZmCywH6BF4kTTGTX2oLYEpF59GfZPYjeLa",
  "key11": "3K7gA4SHCivewGJQiXAGHauQuMUwQDQQBQYKhqFL3GCKPwoJCQR5bvPCmnhJ3iG9r3nEEqKrwQcAPDJGhLXaKVYt",
  "key12": "eCHgWBAFoyPp3kTN5UxVWkQApHNPatJwn5BKKJAbHpuUMz9QzPeMMeDJks6WJEYg2oFv13SC4FTBoqc7JMJip1E",
  "key13": "3KSBJRmazKdyUL52U77WkPaWcxkeMkp9PwRhn4s86FjQZrnUppfXEAEP61V1s5pvWGWHTLaRZ4YiJgZwKk3o6ehX",
  "key14": "3UKGdtY7Bjg7qp9AzKjn9P6H7rjXUBMV9fNTzcVueGruss5YdvLT9vR7ZzqGCXkpfaXjHs85JRq7gZA1jYTo33WS",
  "key15": "5fN45GBB5zLjB3YyesefLw3dCm4XoP51tRb1hWo8vViUxfDiWt4n1T74kHa4kCrLi6FbEiAJ8VNuxX4RsAr4GJwi",
  "key16": "5528hL3guUMEUdtFtByVEDDfgNTdD1MVdbYpXUFU1JVWU2LV1SV4BWRK5FfQZLuf2mvDZhsZSwX5rvbu8Aba2y5e",
  "key17": "4cZmfPu9s6vKHPiJ8VTcrmZgJkEa6TH4EvLCrrCnikYNJWLKu4pKcSwbm55Vt9vgwBo2J6orA32kSCbuizMCzgaX",
  "key18": "5ZvpyNoappZsHfQB4vFw8QeFkLJhJ9DUJyVEahFZmfhZRR2yX3TWmAANLPj9248mKwoRNXG9vLXveWt16xjzp67p",
  "key19": "3qnNFxMmDKaRvJ5Lg6hDg9VhPPYDJ4ESZimdH1rSFTHe9qycpY469EspPeJ7KGBTTngJH9daChYJNh1NrMPxuGgb",
  "key20": "4v9RJxzLU5JgstU6qU2edgQDbeChsnA5eDXpebdYk1ptk4JKuVPjkqyDC5D4E2oqGN4rKp2w7PoXoUFHpmM7EueZ",
  "key21": "2wHGdJ116p3fNdNfZAcXsoiftkSTxWEdiDVZ4n4cBmComzkaHrAqezJRNCNHufGyGwKjkf4595oUw5cL3Ft5c1me",
  "key22": "5cCWAwmHL7GTCLGS1B7mHVaiS36GZi9PjSuhDTvCsJcdV9i2StfusQxxm4HZCydnsb1CkaThfgCkh84MiZSyXFNY",
  "key23": "4xyMMD3HuYwVjEb2MyJ5LkuV8mk9eSwywwYz55rDt6HUwJwBwWagAErPuriJaNpfUByZ4K5494NZkEF5AP2rPKgQ",
  "key24": "3qb7TodzxJ8GujFnAtMnZYvYjLFxv58ofTSMfL8MwaEozMf1Huaac3uDG37LwrTTn3BZFoR9epFSwVo7z9pJba3k",
  "key25": "YSvXy2EpGDwpN5VJhKbBw4jd8Bw8SNqwZjaicXG4SgubzvPixkKqZLoiLuzBSPr27f3XBNtkReQS9f4PbbXsaCF",
  "key26": "47z526vLZC7C9rxEtdFhsbBxt6UgUiYs1AZefxpoCMujnoBDZGFnKS7xNA5VqgESE2J4ybSmKDRZitZZcof6x8FX",
  "key27": "3LDsiAmGnh6oapYaQfaBuYy9Cexn3aViKeyd6Ua7PkXupM16bAX1qSq7Bq8iExjSwVyWGhPrqD76FCY1jqMk3Rsg",
  "key28": "32ncBdT2Vravs1qyrEERqgBR7MWjR1x33wP1c56QoZh83Z6GBWn6X6eGc1ciAqpJxe4btyRpoiD63urj6ebSk3eQ",
  "key29": "3Ls5U7Hse7sgdp12vSgbxtSWw1oGBk5rQGTJuAEBTGiKuCpJmVLQtQvRT4sNwJjsHxASVg4QP5jxVFQfaeGRoq2U",
  "key30": "5So5cjreLEVy2jqtHDq528JkPJpbYAEVACytBePXTpQyhZgYUUdG6ZgQak9GKfHCV7ubVJtJsEBPEMX9Sobt98x7",
  "key31": "TpRpQiUqB1Q29vHAiNMFfh5De11k6dJCqYLrYdfSB4HjgMyy84Er7Jnkz9oGcPid3oWKK7Qx4PXm1XyBvPvqfst",
  "key32": "5LhXPxMUHCDAjdvsHv8RK5wDyKq9mFYETsqG5JfgGRh5KJHvSdUJyRdHpgCntvtepKnRd3ZACJKD8JAWbPGeJH3x",
  "key33": "5yg5bT3cyppDxWCqjtoDxrwbQSQkwwef992YFj1QuKFHSkwTrr7s5qMcnZnEPvkjBxK45d7NBBAExUUH4hPKaMBD",
  "key34": "5pv4NbGu1mNjv8asUzLaFrQBixdmypKcMyJwCnDKXjAuf7TxVBg3h5Zsk4TXHn4jAkHfWe1GTEKVuPe6uRWVGNAv",
  "key35": "573i8cBpYUQePg36fLhGoZ2HR2PssoTb82oWX2KcENVu25TksrE8oh2XHWBjTwSSiKUngQef53KQBiQzeHdKjAWt",
  "key36": "2dYk7G2tLSn4yffdmxJDbDUHUTXzjvRe2h3DpEzp2cus71hYJC3Z5AFiaC6kqDT9KMNctbhaDEHqi6uxArha9Zx9",
  "key37": "5pdaANgvva8cZQg9FPC8b21GeoacyGhVYrzmzh2V8W3khVFV8E7EZ2erBwx4Gt8tcdPJddo8eoFJqTDSdrUJyFNF",
  "key38": "5eVw15WPpvFD5trDc2RPzZAPZS35gcsDg69LZ7bqhd2u9orTNQLMtZuS6s6PomkvnPeVk4i2jBghMcqdgkce6vhX",
  "key39": "2AA2CDLkmpXijgiVcgxsbG2F7e3GuPyEQgJG8KsqCvVBnMPyAATVSPVyPzfsoXjSHCRBi3jGb2xmi7KHMWjHYdfq",
  "key40": "2Cbvg4933acYjYfp7cH4o1HiHxvduJTCovsnQHW6w2N8e6GegDF1LheN2ouUN8P3teoXC9V2Zoi4SQ4Agqmzgp76",
  "key41": "3w4r2ZMtphTrjvXEcF4oCkns1rjLfujx4C5Fehjowc1UxTLHnCs3hWmSox8Uc6J86Crdw1qb9QpBE9xi3gUpeqtn",
  "key42": "3PNQC9JSCwhecCr7FuuA68XKERUJpVeGZviqTsQZNsV2cc8dKBiWcCZv8MAEHDbKFmJua9rZimfB6QhibuAS7jXk",
  "key43": "5urhcqFfGd1oKcpGRrRfAYQUjfvbUiedXtShgFAr4kHFjL9jH12scQ61Wo3rh3Y6MjtrJe1NAYtLL1TRZ11LA7PV",
  "key44": "wFKxEZQBcxFMrKvhhLae1tmSJeYqfRk317Sf9qAnzYpoxyAuJgMX3w3CgryQqkzqTdFLB8VAQbyC164NNSfxhc1",
  "key45": "51GM7CFahFMXAQxGH7ua1qb3rmNAJ4vWspmeqdRM9PC6bsL3CBysgUMX5nmshFHtqjTbGbixkBRuD59SPXmY8L4D"
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
