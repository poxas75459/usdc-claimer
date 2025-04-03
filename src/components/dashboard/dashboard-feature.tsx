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
    "2UKmTk2xNNhmAvokAxezrz7HBPvgVjD7VZ1vLtBWQSUQRPhKoiZGXJsgDRdVDKfYQHJZESoHwq7gssP8H5hRdaga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TW5yuqYyLEs22hHjA2dKacFZkf2GNMbUw3j5qtTzHLeQp32Apg1gxURJwLNaiNvG7CvuCfypM2DBLfRKLDDg3cx",
  "key1": "2dEgDEsap5nLfK91Nx5Z4B1gWtBsbf4oS9SYx8kfQdVq55y8byno4et1HAZuBpqKbuYaHBFfYbcSE35r8hLian8b",
  "key2": "pxVrPD1TAK4pW9Sm1KNXkZJx2HRpZ357rTpn5HRa2kLoap2YB3aefUWzboSJYCZJpekmuHrwe4mzSJQm75k8ntJ",
  "key3": "4LAdNMR4GcVx8EQ7Q1EbG769pNR5G6SXVNoVggCiPETuzZbzaNoyS41zdS4gRhW1sVuv5sfSEcSJjsuVFV7GYwnX",
  "key4": "3KpXJciwAd3Y5DeSn7SzDNPKuTSZo1dKaoBss6oZ7oPGj8pb6fGzRPozTec5b2F1HX1yESGHRd5ByBUiLfu1tM6o",
  "key5": "KUGkNmNKhCck6zooyRQt83gBDdtN8fRUaFpMEniCmmVJkigZCbKAZgrsZGEYCdHkA5dExj948dF9KxwujTXo1Ga",
  "key6": "5TMdeCWkmV8qhAUDz63g6nDEz2jqFTHsu2diStAxu1igsZcdFWdnhQsKM2bSmfVU6ugj22ehXWhmBXvLwbqzKhaA",
  "key7": "3694rjZWihgxVqB5WnyjBuKx8bkTxxVJ6pQvidhFL1uNa385CEX1DFbYd6UTcHXNjy6E98TTRSjfGwcgZeBik32L",
  "key8": "UV8wBdE8enGduLq4NSmUvVZzcUKvqB3FmkLoHGgUUQ9f2EukhSGHq3JksEzD4ojnwXN9gEqBVUFK1tRmbs4NXno",
  "key9": "5jzLDWRHAya7MSgP4bhHsg6Fz3CTahCUu45v1HshCpFAiaUrhfRZN2MoTr79NHjNtyVfvYZNSGqoPLU8FXXm69WM",
  "key10": "61WtpQ9uR79cHGg8pVij8CpUWvGkWV31y6s8JDjhmb25hpQ2bW6bPrYx3XuvuQ6bww8oCJvk5apzFWaRvHfVjgXS",
  "key11": "XLF5rtmZwWXCTK6UqaF8LeuiveBEfkth1XT3knr4FejyT5XetNVb7vukQMHFef9TMFVSQbt4QW7JR75UkLposXd",
  "key12": "5rLqzdE7AFsRuhdCsVj8AYdXBRuUkYUXKzkJDnbmMbfPnYBJieMK5kqB78V4pRkkhXYHuQKfgGGCb5EFF1EoLdmb",
  "key13": "49fgHTHcMk8zbCo1yKWPwqUGHWoTQjUMWXgx1FzNjozpaMMXbxQ9LbQmUUNirSwCr15z4BfEEBJxbQdtyMkciLia",
  "key14": "shCCp5Wj4PGnZ1QQuqnPHAcqCbTexnhoCNJmuDKQhhGsDb5g8nUECe6tW18m1yPgx95RzNJbtYJBGPyM9k2CGcc",
  "key15": "3APELK3eeWnn3sSC6Cid4ARVhpgF7ecimryuE1Wb11Y6zxuDGcgsVCnRpwcVjjS7pdVWJh1wkWGQit75pm4d1gnQ",
  "key16": "2EjaXQiUSdmtxyFh8Js1vUXNfYRmeauLuHKAWnNrrWw9nWyKgNyPKW9b3VQS4DwDpKHcroDVxGcqoDMoQpKNXb7L",
  "key17": "2LQTKC4iia7MUB5w1b2pH4LweYMS9VsW498heqkqdieoUDiQYSP3kTiH1dTdy6XVYPRz247cCznauf2o3r1JmFva",
  "key18": "5yWN6gKEr3ZayrGpK9rpq5s6SWnfDLoGqrgpSATydEeMV2edF7qpcVRqMJowyfgVNCCaeuVMoLrWttm3efMy2Cej",
  "key19": "43caa9vobfRZt9RuqEHsZa47ByFQY6BVRWSSNQE7KM2mdF3aq2AxZknjvQdg4yL3nNFdov9WVt41qHZPY8ENqHZG",
  "key20": "4fvyabtkJXiGzWvXrJzFCeAk9KhAz9CPuccpVqHkB2U19Xb54hPt7B6UEVqwv8Y7JAHVDbc2DxPRZjmEyi8vfkTz",
  "key21": "3boDCFVR8HT4GSQKVkFdYgrQ3bMLrCCfqQHr9Kduh23PEHoARpwTXgN9f79nSNyiN8HDS4geqAVPypmNMuAMMtk4",
  "key22": "9iYwjgusGxkudpDEW9YzeQmWr3ME6M6tozesbD2m8P1wS5bsJtaRaBnfy2HFpVEf6r9woqZDnPkLy4aK7aGhhSS",
  "key23": "26rQ8iT2fHmLyNGu3pAYDmgE5oofSnF8XjrZjiMuy6Vt65T5VSNF5grcrVCNPeTRErLeiA5cdrp1vY1vFkWeYKT1",
  "key24": "4hDD5Kuzvkm5HQ6kiZeCMVVj17xAZdFrEn1W5pqvzvLoKKjf5eeUqNJiAfJsxdwPDwEGJ8PcmzHoHY65tvGjukyj",
  "key25": "dE3pLG7jcMGFR5A7iFpiKd7qsHidnwRYwHQ3AtHwexgPQWeY4oRxAdFY2kXKwhPTnhBZjvTEB8YTgPQt31D2Z33",
  "key26": "4SZngMXWvAVPrpeMjmW8dfhwmz1mhXqVjAK53gcKwJsVouZ6PuAA1s9gH4ApSgD9UxnFTARRTKqpX22wa9qn3FMQ",
  "key27": "4d3PFHpmWEBQFt7qR5egDctc3v2CeAw5b4YZhPyLMq8T2xaRjYj5QizpVhoFvNXAmGekwHTWPyfmHsVrz1nGWVJc",
  "key28": "4DBm2922KAHZzq3yWiW4k4mwHrUjAd7ve1aubKfNSG3mHUCNUP4iHNSaHBDDWeBjD5wCYwXQ8zX9jfQrfcXUiTsG"
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
