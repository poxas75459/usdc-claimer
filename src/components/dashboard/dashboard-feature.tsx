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
    "RVLtxmkXZ65EtiWoxA9xJUayu3UfpkESkBrHnpHg38jZMuipvfxRFHyn7AzeqYUdhrZE5dotCDky5YFuVLbjAHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZTQ2kvNGTMohqLtPx7K1GBnLpXsfFAxnXCycW4FinRZW7keqUwreyHVZjAYQd5LJoDrRdkv9vazmFUf5UZZvfq",
  "key1": "5sC6nTkGMpFRGKd4w5ry3fywk6qbQvoXaZguBdRxD6kD1yEK53LjXfgWRdDozHVHHBZkAWcHXJAroj2PHB4GrGfR",
  "key2": "5kjuyiqa2PGX8eAxES1jr8FhHBU8N6UG6J1oR6KB3x9eecFAZPkiJFsdPMhXbGJxN4m5SEtvYcDpbmyb7M75J5mx",
  "key3": "5Kd3fy142AJ3y384eJZrx93X33VcRSG4HQtpQAShoUEGBwcBXn1ow35b1bdadjLnodABXZbotLxQUyJ1ftymXpF",
  "key4": "4Aah4zNAbeqgrsHXXXL66F1cnFK1HkApVc7f3ViWxiQGZi69wmDbVjiobccbvvQ8a6ues3b1u5HzcU3zTATDS3tj",
  "key5": "dQdJ15ZoJ71peBuymPvSPN5CGTUQ4LkQoWNyV9sxyPzyzYvCWqfou1TGaHeXSPzkRosQsKXeYfKWnXnBtTpdhwx",
  "key6": "5RQsJ7w2xZ61wtzovDccHcbFJyqRDEfVip7LCAXCE2PkJFyEYpzVMEHbXcu285U6XC2ZuntvRdbp3NVr6YLJFJ5x",
  "key7": "4wd3CW63Gfz1zbSyGwotcsWp4yzscQpxEabW4qnrvdi5z9kqiCS1nCpwUqE145FRjtfNY5B6LKNHmeP2sMktGTmh",
  "key8": "dzghqXPwRLqGSW6skFLuDBziDxn1jWM7PYf9MiBGD5nUt61FYovirekyv6SqXTUbcUGyY3W8Eq3bR2MgUiojHJF",
  "key9": "3Cw3GT9sHNQEAQDoiFXAAap1jBLgPTCdchwy8TsR1i4RSoQv4GpmFfdxHEHrHVCMxBsXJS5wj5YxuKugxejDFoWK",
  "key10": "fpAx6WcggufQzfVuCeeYr7G5hgYLuAaEeLZTe3GkZ2C1bwTjuCtmGLhdfApWUoGiHm79cLXbgLVAwqZUAcfvNfC",
  "key11": "28jw88Tkh2e87yJQnwKqvMuZ4iJmXhBEs7MFoZCN5c54iB3mkhRGrBGNfJMcZEjBPjimPMpqmUvdcfa5eB93cpdy",
  "key12": "3awzP9Nru6Z5qE5Z8kxDPKi23H5Ry6efkQsnCvuVExAsxLEqmjCy3C4HNKo6jVHmJYzzUvaT9WZZLgEQ9sNXKYmi",
  "key13": "4Hz4whp27Z9C6rjGkgEqfGKt5tfk6T23GrskFHxW88JwN81uT7ar8TCqLWYvC4tVghio7EF9t4AoTf7XhRsM8dBY",
  "key14": "3eCEMdUgoJoTV98TNoaA8thXC3MVEhbRh4qBMPxi67FGLhcoo7CFzsW9jp1yvXG8cs1acx6qpFdyh1XR34uSMfB1",
  "key15": "43uSARFn9rLhGbD3V1LT3neU4Q4AEQU1QiAyrmnkEpWKZKRnnu8HNesR5jBR9nukZFwj12WJtUBYuEUUHu98yhNY",
  "key16": "5MFfdQ8NJcy2ezAXw98fxpEWJphC9mDTaBmrPGeKa4FPCoYYnPTBUUtosa7e3yPjo5EggDRoWVgwgbtSUdvK3wKQ",
  "key17": "5tuDAyVjoVQUBackb2gf4mGyPrHsXNEEt2XkzXABUZETY7uxJ4MEK6dWjaFc9qEQn8AZ3s5gV4UUvpzhQcVpCNdM",
  "key18": "2XNrdRU6eXcE5GqF5zRbBiJDd3KFo3MSxhj6z7DoMjPmcEwxmjFetMoKt7VTe8RHabyRHfCJMv4iASsXAsj4K4CS",
  "key19": "WNdKBy8RXF2xA61JtfQZ1aZCmDgvUT7j8c7afrHCwE5cdRgpgUK7JLiQPAaRLFraZuX4TSEejBdZ7Bo5xQC5fuU",
  "key20": "4aXsVw1uLtELX9XVSpXPZpLuUGaQAU7GXu3f4KD9emcpi452fcHmoTesoJDButFGJtFuCkqqx1igTtobpSa6B7eR",
  "key21": "c1tzQRNmn9XDTR8uN4gZYX1MV9ZbRnzULbuThM6F1TAw4PceZRgTFLJBgZHZvwbwgh2ioaFipXvs1MovQzqYAvF",
  "key22": "253WDamHZzo9ofMYtWDANmKqgGTHqpRgkTCgKhDvdAdgWdiG2YVbc8rvUKJ5RZMEuoCF6zHqtwQSgtF1SmsEN4uq",
  "key23": "2n9s6eWf65QEGyp5DMv9ro18RWBj7dhcfK5PiV8cb5862BSZFEFdKDCDGvmuzxNVnhyUxeeoRXwrbD79PPTDq1YN",
  "key24": "22Ct3r823SrMbfPbF9emhswv7MAbW2pkykRWQnTWQ55E5gtB3DrnXmaCEVa8VVpW2eDDrpsniUeSWQ2QAkX6K7sM",
  "key25": "GBqxqweJFvgq6UaSKh2Ut4qMGkkRjAY8mNCdkW3nMYzVrcdfyz8XRJjCEHZsZPxogp7nx2hQLGaVSVo1aAaCmaQ",
  "key26": "3n496dbVWnCEEwTiMCJHVU5K9Fs8cyjoaM9ESX4DjdeNcLsr3fvtqGhd3QAD8gZUWm1pRNAueW6EiCE9E2p7PcSU",
  "key27": "2dNSVn37skGt6m1n8ukBfm6LMdskGpg38XMPnCtx1PgpB1DHjjZZbAqif3DaWE5dXBPj8LXwWn8vnswFuf8NYkY3"
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
