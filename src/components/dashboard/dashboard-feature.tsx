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
    "129jRhzZ4tPoABgoZhLLcMHwG2uewK3pzLLPJk63j8o3eNRB1yNhe5LPEDFaadQDfM3RoJ8E5UVk5Nm3otgMJKU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iD9YdiETPZCaCZJiUTszYcept6EkiGNRPLEGWjVoufvrKAYpBxi8FMZn1b7J4beJC97kvFeV3QyExSDbVJN39fw",
  "key1": "swUci5sL8TNRKMRAXtivwHWtYkh43RVVrQEF5m2WjnCy1hDe6xbFNihNgmVvtQGTPrufqX1v1EMryqSD3rawZGj",
  "key2": "67pdsHcS5x65eZTUwH8cBxxcyVkaJe2UAVNvdbHoNwQm682mU6ZX8HCuP1xnBuX6L7mtGkrFag9uGpYNE8Vgrs7t",
  "key3": "53ecPDaYcZ1g53RESpaTsr8ZqADsC8SyTmWMXtBay8yMf2zWMxwhXFmzFtMXPFroS2aWUasuW1UR1vmYaKKmyFfG",
  "key4": "4usyZxxtoo9VRo64GGjpTMKF9wDJWedSc3r8yXBLMtQymS2xJBSL5GY1EzKoXKXrRoAdKfDurwQTxo5bgKqns67H",
  "key5": "2ez3NtwRjRtDBqVz6WUUWkdJxrWwod24wsTvTpZsSjYcTNe8Y4tLDxkKP9ryPrYhNkFeAtFJaGqhgcJbjUxSgPZ6",
  "key6": "4PpHwKnNYoj3gM6u6bMmeDTxkRKEPy7HvjLAVF1adwLAHztK75iH9FsJGTNioVy7UC6zHLpGPT7W5kA563T6Lxtb",
  "key7": "3vWWvqyYiPytUvrfxv9WDU1cAuxGc5Lwtms49JGLifuDFDzCstufjPNP3MfiDuUXQA96Q8MJqipWKxNWJZ3LWLva",
  "key8": "3jK2HQbAZPfDyWiUFFcGPqZb43TZJava9PmoySAJF7MumTvEfQbn4Ry2BzZ1Xsju1xDq3s3tuEmfvCfZkqhyDEyA",
  "key9": "58daZT9uyjufxwN3nDBvn6rPkqmUuvHmmPXWi4g7ACYB6xErRTFW3xPYdzouEu387aaTdEQujPdkuGjDsTJDitox",
  "key10": "gzasG5S8v9UoqmmmmBs496AWru1oRhVywt6sVfRT9egXQBpxmX3pkJzortDtrYsHdSinfj2BRNGr6j3Lon5zG6X",
  "key11": "5Az236V9cHeSkZv81vbWQaGzx1N214JLjZW6Jmdfmm2R5EQLuGSH9XAJ6CSLowP7XSJqMfpGZ5VizETh6WVymUVW",
  "key12": "66pc8RPKYrMiTivpbwYREHo1httKvWocn6Zz8bpLdoTG22mVeEK7dDyGqojPWsZQwKLeU4rAdzLubHyQfv8s2gUn",
  "key13": "2g2QupF1bCwxJUQSbybL4fM4yUzJHzGi7AenR7gJshrQsDoDGdHSSLcB7Wowx58N66JUmBPkpUo6hWhc5pZcJKHB",
  "key14": "hEwm9bFVovFrrh7QU6zyDFvdpxWiQc8uKoU2Np5g9wx43mCNKH5Lrcxyayu6he4avRFsYwNNMWzvvyhEKCCqrgX",
  "key15": "2Lo15N7fsDcGmDeLyaZ4EjF3jA4SfRi4m5NeExVVz1kN225RHLwcXR6V8Eix6PYqi86Mt1ppAT6Qw16oyjRszzxE",
  "key16": "oPtZ5nH7L8DS1D5NsrmQ7QhwrwdGKftcC6ri1E4PXYH3Zn6Jt569KxVSviTcht2ct4KgSz27XvnuQaAET4HnAS6",
  "key17": "3m5PwwsdHifgR8YAhitTFP2fQELtv9YcxhfjkJGv56bq56DaUMUrv5Uj3ge8YemhgcXVGCT2fSQzMsNQ5g6J7rtC",
  "key18": "9NVKbJx2598StcXrVVqLLwm5cGRsYG2wHWtpuJU4rMsSZCkpYvJWZocTdv8UsMmW8QLUcqqpYf2f11AwZ1NaDTy",
  "key19": "VuV16fvXS9QigeguSqgwGmHM3wb8zrR1GbhSujd3bLzGsQ221KUyfkrWPLp2bJta8J4EKSv7bza4NW6MkQgtcNW",
  "key20": "48YgkkhFAGcwhA2yfCXAwP2CvvXPWnhTXqLEXGvU52JNweV66SD92eKv3MNqtB954vb7cALUtbsCMoST9xxA8gfK",
  "key21": "3cF2H3CF7tKTnUKVL3ivazxf2nvGw1JQtfbv6GczqrXjB5i4WENhiHCoHgQ2i4KGM1BhkhJkNy3xAngTXYd7tqbs",
  "key22": "34Qz46UcTFdfcLBfAwNAABnXLgmzUwG2La74t68xLz6wKjnmwfPqNquhpdc6qxvR1WVMAjzK5UmSkjGKbg5eK82o",
  "key23": "APkhWh1AufC5Xwxq1gmfEgJCY6SGiWtUPMWjQp1fHRy9rKQs226YcXr8MQRUiufVZsENsDTAcat4uyFuGdgVHAs",
  "key24": "36VYJapv2X7iNHgdhQdC11h4bLAjN3fimTeNzWvmz7FeCwcDwi5czB3M8TDXb3TH4FEmCrurpcRSUK4JbkwLpx7p",
  "key25": "37eBscGDpkL6FVmQ5Le5b3a7VcWrhjQ4B41d7pn6GxzsienQn1MibyKGjS1ydX4Nph7Dg44CYP2KEiZJnRhZ91oE",
  "key26": "5rDM6CRfNfs36NZbT9yeMkpCLWBoKiTrGpo36BYhKikJk27mJ7QNfArw2LTqT5pvamJ5ZX46zTZjipAGLRo3ZaL8",
  "key27": "5tiRMGdV5STjQ5pt1CU4VLYH339Do7SL35sopRJtiGuEzSqVcFZGtuNQ9fkAg6JTiW1STSNa7KytHMCgYo4jnsnj",
  "key28": "4NLoxADUXe7AsHq2qzP2boy7YYmFft2o9L8K9MxPwqXY4tCmoWDbhCwnESfnCnDzTiMD2zN84Bbt2UixXbxTnnaY",
  "key29": "4w9e8CvzRwVGPm3kUaJfMdL6eycaygQQjat3o8C8tFR9H4fJS2h6zwMQdCBSF22qB7uDAY11iAztemEd4czdJcoP",
  "key30": "2gvt5YRuBih1jvQmioNgLCMSKX2k3M9F3shYcV8w7j7k1dhoCRt3AjUCF43hLtCBJNv7JqoJMwefGwiUiqvbw3Ft",
  "key31": "3S6YW1cbmbaS8EifTynhmMnjgKwuBGcFkGXi3RT94SJWEHBFrybJDUp6T9MQpHzSt3Jna72mdVrc2uxgSp8f1Vgr"
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
