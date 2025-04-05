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
    "4zWZBvJzxgxWGUQgGEHzpZYXeMKkbWcNQr8MZFjmyd5KMnMeZt2E5wAwpk11rZXjez7WwLtS31ibz6LqgdjC6wb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H652AM1aCU4r1wqaQDxxzxi1FmDLofC8RjXg5ia4waEXaQYcrUhzJNUfvp5jLhKuRVQcPTNAqVmRavfgT8fN2sc",
  "key1": "5YQyydbnbeuvnTue4oytEaisAMbGJBZJ4YRZ1FPGtLQ7z6EcTWSTsv7pW6A9A2efE93HzePJuTfB7wJHaXY6hiT5",
  "key2": "3crDXU8Zb2ExX58FLiCJrDUoca18wVVS3qpuq9v4bW15wv78EWX67ajbRyJnd9ZCV81dXvUiLugSxquWwKRFU1Pf",
  "key3": "3dnQNnZzTZapBwSfEdN6rtwQdS5q66qy5Z3Y6zkrpmfkCitJpnTM5Xafmxp6fnG764NRh4YJfd1uUzAUatuuhhJZ",
  "key4": "2pNcuyCH2WvZh8wBX3fQmhickTvT9Swxgadn1i1nJLUHQ5UEyDNTNwqVFGVVBikhGe16GwtSaWiSQA9whyftbkb6",
  "key5": "3sLpp6DWJPEgkMAnk1q1hkYNbf25TWvqYYp4c8xvbuuKGxm23MMdKKs1CmmhGsv5fyKQrsDFdKkx5xttQtMWrLvu",
  "key6": "2jRZgvKBGVYKspAcsxWFBRZEojzDXojgYHLhXnLp2PUV2kj4J9YNgQC6bjehxt7QfaLZY2cpGQH3otpARRjVydYb",
  "key7": "52F98rEhCy73CYTXr5YsZc9sZ7u8iugujzZp7QGa73qRaRdPT9KMfP1Pxd1BgqG2xzhAkXw1W8BFf1VjJqpnkXLi",
  "key8": "48epcueu69Vsz2F6gw2Uh4ptLUE23BGDZ2tquwqZzBdRFWiUYAu7i6RtRonxm5ejT3pWW52iGwcentyeUvR7xSEQ",
  "key9": "48DxuadwQrzET2LxquTgJyiMM7Lz42pKB5aGM7urUo8jed9HoSwSa93FF4xkHKLKG4Yp9MnYGSugbrZwZBja9ikx",
  "key10": "8uur5LZmHq1zrHp1jr4yDYTHZ1GnDPNMnGe4wJRyQQ4tT5VvXKa6mBucQ8yUXE2LqeYLkoG1PKoSM11eZKAZ3JQ",
  "key11": "3p7eaNMrzCbmStLvG1QAvbBPNFBhasJExcAXoCJgZEJRSFAqkFZHhz9SfhqTZwLhxYZtmZvhELwCF7Wd4jx4rxGe",
  "key12": "2B2e3bgftZbhAqK72wd1pPm38eHUkR7G6SKR3y9Cs2MT3Rd1dFVx4QwYmak9vB4C28UxjCTvLxE6DMjrcqxxmaqN",
  "key13": "2fqgRociGX4YbvbETiWK2gAkq1JP8f8YGeKHEePAxJVLyKgo3Dxdm228B1o6nXVW278Vbmkz5EeHVWWr2ZC29B7f",
  "key14": "4cZ5ishwPcNqhsHgj5cXk9ikVXwuKwrqLwNhHxFiuR3bK7QGhf5vp8Zky8htYDBLEkGo72GtERQKr3EJJdiqT1YM",
  "key15": "3V4PHa5gNBpd1TZs22Y72peizpsASEA8bhwrJCuXZahdRVmPueTpK8VNFBsoHg2Wh2Zt5q7RwqgwQh4TSoFFVT8y",
  "key16": "43d9Me7gaygRLaL6shyTWrVagXqchofC9wX2r9s7gj6juyASP6HPj59BGmwaD9Tsc7WoDX4Xr1RvJ5rxJ3yfrHK9",
  "key17": "5K2J7AEYkaNXa3QKF1bGeG41DMSHmhYUZB7bidJWT1ZAw43m3HDWHZPDNwrUHt6s4KASvFvyjqtu8VozRTz7CLkt",
  "key18": "2KrZxwYhWyKCv9A1wBYkRwL7DP2oW2ZVt5WeYmpdzv89L6fMK1ubxsozo7ADA9sZn8nHsMkym6nE8yaSuMU7rJL7",
  "key19": "3mkWpv9KFDpH3Y2RBwkrrYevsacrYMohNGhnV5d13NYmsuoEf7Y28bttpgi1A6R4iRE5MYAuF2GbaKRTzitNmFFz",
  "key20": "5pRricqtyw8XZWJvZ31PSFSZJKEaQr4zZTFWiCvagy6SCsLM6yQwM81ovNKmZ4oPqggJD2NR3oyHpPKYfjZmcP9T",
  "key21": "2qZhiwc5GiKBnew8uTjY4yomBuQtkbkXQPyP9YXB7Pgd8E1U3T3evoMbvUpE6QAv74z94Ls83hamF8ny4bhWJYwu",
  "key22": "5ej2ioKTo5kh81nc4xgoBxiVK3Rrq6YWxpZ2WQxgn9iAH6F8o5fU9b6qeFCe45xvwsNdUMEwyPc6PBrCjJ1jsoNj",
  "key23": "4uuzVyNpwfYLv2a4ixLdzomJzuc6MwkYyLRouTRfxmys8oPaHensZtapqiirJgeGUzLZyGiUzNGSW9TxFQvj4fLX",
  "key24": "HEoJbrydKA2wgZiBBiAuDW1QYDWbw6JZguDst2etkK5YhGRBkLGc6cNBdmgZXSqxaK1TrQYjuiwe7tMGJL1jgmJ",
  "key25": "adhEYdCuuqwReCNnn1DsiZhe2boRKV5HoVEsjL3tLYf3eQBMoe9w66oVqB2PCV9N1XGLP2HVGuVmbQLSbHNv2JE",
  "key26": "ADbZBYui5eic8SBXyMgAhaRZfHCiTqeAg8WjaN8ggyvPZawu2UhqPtZUEbiUuoVWUiusBPb3aQhB4WQjrih1XCk",
  "key27": "5tPyr7QAvrdfYagRk2TEhFNnMoHNk3ttN7LfuFqwZQsmuuqEsS3Fsr5qT8ykJcHAFQu8cmxyxw8xYQnxQJQyx78C",
  "key28": "4NZYsHNwofk6JX6T5KLSXQDFAHSmCoXYFH9v3P9WAyDfCGpWRmrcxqu23tgJWbRZMsPL3No7MitvDXWByU88LjBj",
  "key29": "2szpYZSmGG7iJtNgZo9aokswwCT2WMH5AgD17Pz1MGkpkjG1zfgCkecWi5TiCUw5MHRcW2MxrfEYx6os2kzdcyLy",
  "key30": "3Euo8Spp4EcC1o6ZHDaqh9QYkCA2RozUyY8pd11TkehyawmbXNtB5pexuRnG84vy8UbHvi9mMQE5SoYGdVLwAsch",
  "key31": "ykeCBaZGruszPdwGRYA96eWP6nJhx6REkXqyW2CxNymrwppDGzQEJqGEPmRNUE3DpPSqFpcMUetSkpeMJi8mu7j"
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
