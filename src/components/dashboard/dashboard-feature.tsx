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
    "5za8vQvwLutrai3yFXDrZs3uFUPHqzynyMJ84PVvyMWZDZzm1QtXXroLje3FaXVZ316svkkDcY3c4vr3JDcRCR3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42gHtDSsNBeP8T5KtCe5hCCCHKCALBGK3mV22f8EE9Mc5AYQrfLLcpCNJA8AzH6xB7Rs8ZtQ26mgkWEZseEKBCtp",
  "key1": "2ZPrwzzm32Pkp4cq4aoQMaSdDzeMYJwn2Fa1nVdCzvyKRcqChhRrKQV1yv9f7nNLV3Hw4BETweBVAEafWh1WrkA4",
  "key2": "2KXdn6bWNf4gEveoXyjsugkVHh51LEF1hKYWn4CHfqzqUPQcRstKeckjfqAcTQadYeoaL7WKLd1GofjBWHSty3qc",
  "key3": "2AkgpNBophg43a42Eu66q3cTBiNumv72JvVTEoft34akqc7g24Y4uxTsaQHXBFM4UUXfcj1SLYhEW6orBGTGxgxy",
  "key4": "2kUdxSNWzkHsLmbCWQsmuHRrH2Hkyy5tdvK9u7dsvAg2QUz38w91vuhsLWv6pe88NpH8BEYW1LJT7YQuPikwbgdW",
  "key5": "4sBvZ44kWYJG5jkWu5fZ4BQ7DW1R9bybMDMTTtBSaSUbvZJ9pbyCtdpQ3zitkYP85wGhpBJnc8tC8QYVssT1FYy2",
  "key6": "2H2QmLmPa251fy1WoUAWDx1EfF9uiiBm1raAQxHJkUMvytbPazYkdi9yEEcKaukzkDmQSyb4KQrkQLVSFAcTGSKm",
  "key7": "2kx1yW1KwJW7upZoU5o1YWaHVehfUYXea9CAn6q7GWEjnRbSLedJFEGnPDQEL2vAhLesmHu8ENaVYtm6B3ugSCFg",
  "key8": "5riQcSDzMxFq33AmtVoy3qNNZSVevQcck5FKrVLbitbvyNRui676JXTCv9eTzW84ZtV7bLkZfjhECuuPn2Vtuqek",
  "key9": "38fNA8Y9wm9Qredwkzqa7bXESogFtHnjKZ8kyYfDmszt7CE7mU7QBTP2Ymr1HVjVqwQDLXiFSCzdSHFAqcvWnUXR",
  "key10": "4p9HZMxWx4wa9dyZ7SMcLch8nugBYXqX1SBRoDk8Gz3QCVFpMTSoLB4EX24RDhTz6xUfjPTDeBs6JMB4qiYkzT8W",
  "key11": "2YbDszHAFVqe5BiNzLsDn4cTnN88hccCf2LurCed2ZtJAGF495ha4Sn1PqCkdmZkXJuD2BLtRV2Jn3QtDdcuxTvD",
  "key12": "2iquWyUU3gK47BWdH7dhBB6UoMBZxtnpbwYVYztSM9CZ9DTRj3KeLPXRmoyMu4dmt3cceuya8bQZfzvgwq2BxZp4",
  "key13": "37ry7zQsNpJRohKifNPYNNZUtBHsUgX7hxG4PnSgpJyiZVkRaqwWyJJRFEPmEXe1qppzXjsLrTUJzx9siiNz4Tkf",
  "key14": "59yorp5etvSfQyqsLAb8B9Mi6SES2cBgnzX2KiY2mYzmmVspEzmXzzLo8pNfBctQPefRrjEVn3gmjQLLstZ7WNMW",
  "key15": "2zASn2fCUdSqLgeMdUrWVStSZbQW5r93kMBJxdou6YcYM38J2h1djTBFdCdd5vgoVti4pV54ftFhBeaceQZiduTd",
  "key16": "3EPPTzm28hM5esmuBfdmtB9kbGU2P2h6wzJffCZzCruqCirK54hsZPHaWHxRgSMhKjsnNb9mQvzf85fJhaWDJA7H",
  "key17": "2UqYAhtTtXxSnMTTpjAQeVLze7qkSA4eSvDWk3QhYMV92wxPHcrmixGQjNj4erGJpCw91krwjJgN7Ls6fw6WgD1u",
  "key18": "3uq2HA95RdcQbhJ3Gh9MfXB7GTcNrt86KHAx6eTVjeocgDKbLkCdgdZVfN9NnfdP6C95jgvX6TkfGkGT4nsgsxTF",
  "key19": "48bVjtvVSe4QP7Kq9qKUX2NVoFDneDgFik4YU1k1wKWHRwL8hinAtiP2ewiyoS8hbAVLx1EZJ4AZi86qU67oURrs",
  "key20": "3jq9XWJRHXJ7oxQ5rYzWoW5ayqCZSWBDXdfHfPG8MM2smwNbFsgYewGGj7Q8BJdRr8BoWSQ6oj45mEXxcr8kWfNV",
  "key21": "5YuoZomZ8diRX2taeGcEfkT8rX2dRaf5PPhkaAT9v19x2b4NZ9SQK16r3qbHBLSzdn6nRtS4vapFdreL6gokQwz7",
  "key22": "4K5HhsX34QtbWTpNR5LnqhbmpAgUsjKfqR9x18CUjj1QwGd8FDPoc49osi1gC5yDT7UZ7Nv9Yms1yVdG7DweCnxa",
  "key23": "5K4HRXzqXgJn3aepYHYsBdi3XYtUVB4jnHV8tPa3rmcmp25PdC8W1SSQy24pwTPzWtE7wRrCsUjyqMVB7mxZEm97",
  "key24": "3SgvK5ET4yddDq4idnuoVDDTi4MuL9dyUN8HcWwE1EEDmUrY6M6hnV1NpGyVWPcZJoSc8DoACDJptQTSsio4pTBE",
  "key25": "5ZbqLn9d1Jr6KPbYiFxZBipP8A1E8rToFfVKWFb3odfcpMs1u7Qba4rRvJYsXFyirz4j7vc4jgvR5q9Cxreyxz9S",
  "key26": "pay8TLepaNAXyn2gcvurTaDYCfVgAETGvRQPEpv8F2NexMYTc6yfwcNxK1ZWw9F7XYDvMw3yRjUFT6AEXmMTuwT",
  "key27": "5bCHJk3UjUunAyXRNWhYY2wTrabjqRVkvnERLWVhTkqHHopWPrrWzxBqtWTuh8NUkm8sNwkHZHuX8quMYLAfnESc"
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
