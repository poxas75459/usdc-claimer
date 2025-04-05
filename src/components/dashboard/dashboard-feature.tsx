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
    "3v5tTiquR3RAdz7snGBavuWe9cnmdkVDiZrEJyhAKNDEQgnjGvt2R1MZAhia65TjoUPUxWPkkBnpGvjy4oV7pEqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSb8wkVeUKDCpt3JDNWTvfATtbc1KLRXuj8edNwYAAKJQsdJExsC3Q2h7nmGKht4KVFfF3rCMeqHJR56MmZrFEU",
  "key1": "cBoWKtoCsEjwF5pa5jemch2mANxHkQsymNbs53CGstBnDFhqVBAq8uGea3EmofTpYdeGHg9c4GiafibbgWxfNgg",
  "key2": "3tVyxxhxoNwJiWX84RipjsPaGTyHucFZZeN4ZfZhabmaURjaHoDfQSDpfUPvniPNrF7cSKcjuFRCEasEirr6CyZn",
  "key3": "3tCMrBNQazbgx1gBLNVSo6jN3T65buUkxafvNhw8x7RaVLnposuffSYLXhsZPVTziBQSamNZDEEkNyPZnbQTox6j",
  "key4": "4dTJFq8BNoBJDWvBB6m1BsXEa23wkFpA1fsy7p2TfWSBVhij8Tv8szWc6tBartSL3AxK8VqGx5wEbjP2aVCAC1hf",
  "key5": "KkbQ1AbAa4xDLVqh53yzD3GbEZnN11DanDw4pzPqFXvACMvNcUqsmn26P1YX6muNhDjKv8izxR7pc8gWfJmfNrf",
  "key6": "4jvc2phcNU5dv7c1qw7tpeTJjYeeZdS2uRWeV7X2r5Vrhm6GWKGpk6ZXTuX4iw6jUz779tTwrjXZsMwS79hHqFsZ",
  "key7": "MfCg5H9k8D8ZxqTFvxAesqgBVz8RwEdetw1DSbjSkf9ZRzxw3xQJ6Qjp8jTY2QEVEoeWXPLqSFynMjFQynLHoj4",
  "key8": "rUUsjMVFdB4VEjCm1HsNWUySurPwNrF3N73suEFc4TMte3PV8n4pgVV79zotZ3s2MS9WmtBdwrvpC62aehbfNeR",
  "key9": "588kBkuFogGc5RKJW4LRKPp2Eq5TL5R7RQRxUAxwWL98ji981cg4eWY34UTCPdYRzi8zFPYWzibDt4fXhqGTbMhi",
  "key10": "2jmkoXz5DXcU5MHCJb26zFyG2PvdMWNc5EFKTJxsjTY4Z9B5FcYu6LS12b8oRqiD14GvQScBPzbqhg5i6hob1FQC",
  "key11": "5KWT59ESDh2hnx778imF29aPSAchxW7NvEwxNJ9qvLp7ksxuRVLKF8gEDfXkF24GNuB5i8mNNTtDNhzuo5tvbSL",
  "key12": "24quUGBaFUJ355BasHSwAiGRqoLzPUNvN7nF5bmCRNnyqELgjao5EtdRN7L6ARyhX4PsKmg4mejoaP7xfrqzyGb1",
  "key13": "5ZzFBq7fcusGzneNLHyYxbWMie9tzH4x9YCJTRyDeEjddVKr8g8wT9xJrpUSeekUaFupZbc29RYJ9JgiThdQggQA",
  "key14": "4c5AK8UNbZTgkC4hGxYDLeZVqq1r4XtxhESqrLGGAgZc313oCnJzMLBL9oqDCuEXaeuYyDFor99eyGbAEbkusjwb",
  "key15": "9p74C3oeYkjG3QWahWGczPLei16QMYJqzE1YRSM73K7BFub6Foi78K35pbf9eVBwifKerJLWxrYKiYsofrHrHPC",
  "key16": "2AVzjWibhcJnrkCHvanfQRwfRk9j71b2DkGJFNQrb1ymcX8WnbbAqSUJNXivk6pT7y1on8wDPYbrtmsZif3wvjHC",
  "key17": "2DUUzPZu14DUFddu68o6QmZ8ce2qKXB9cfyt9EWhfiMpU2ZeyWHpo8Hbtfd2KZ2yozCLpvP9ULCofERNTJ61wksY",
  "key18": "AwowTQxcHJ4WLfTRHkTyCBs7Km91VCdL4qWi72dh7Fh4XrjsECYTFjSTjkng5PamdvLA77uqdJxmBQhokAXNLJF",
  "key19": "4RMCtL3x6zaWpAwXkpnYRsFzxVbxYubm5hQymUPynZnyrqmZsact9Nvs7ZtqNchJoJHt3L4JeLh3HUjsK6AfrnUB",
  "key20": "2dhq1sNVXuP7yqhjVM26c5WddnW5u6NAb4iCSJGLWg3XHRuiPFj2BKah7Zjgv1CwUUwxjwTuiMZ7imDdgJvauhkP",
  "key21": "4K46dypEnXGZmhJxoJC4r8P58qX112nxyEv6CVKKCJCiAUH5Gz9hgqgbZjysCDzyx6DB3dU3Ky6qxRniggS6iswK",
  "key22": "44JWA3aazjRV9VbMoU71wrY9nmtLg3H1VHFjqrB6TWCow2yk7tFMf3oHqUJQoEtvUaqwenQHoBesS7GSieDRMSjj",
  "key23": "3hKR68FSDz5e6B7Jc74jWgevTVVsAb7FRhQ2zqgHknCKFk1CNWZe9frQrhwW5UWycVLkFPZoaohUmaQnk8FUwvKd",
  "key24": "23FbhA8sTEawBQc5D8G8KRmby6pGewitAgHa4rVZABWBj8WB3sgmT2zszuL2WtUycAy7d3k1UQywRQREjqw6DZHp",
  "key25": "5X552pKUGDS52zEHZVsRfkVuiToojiNsrmNUK5rJMHtpWfCBznrqXQur8sjekfpxfqk3HHkfVbii1XWfFi8w4jQd",
  "key26": "3adxKwNzv7fSGzKrc2Pn1d8LJwcrJLhaYHw39uYirVS9kybN4KN4dqUti4jbDmkTFs7ro2DXSQvnpmta258HPaVv",
  "key27": "fVX1vinFiD4ArcpMWyP3QVZ3XCL7m2L6GDDf8aFFMZg8vRvoHVzD4umUXwCetmVKVpnautimBiAwiaNMEJsfZoo",
  "key28": "4eeXcbqdDV4t7e866YzpZ4V81KGiRRp6h1DZeSdT6pENK7JkRGDYfXisPgcjino3CEY2TMe6WBHVZrqW6JMaEQWd",
  "key29": "4JNHaiRR54pKPfxBhAxHCrxdwYj6op4yMSLarYiKVXCi7L31CtFC37diUySb7gaBQXzujywupqLmjmCpTxoiLEUZ",
  "key30": "2gqezwYCTHvHFxoU7LMC3RX6CMFdUAcnzd4a3aQqo2Mzf1EfJcVczEps428fPikTyEyc9QukyWDtt9HurmBmxqtt",
  "key31": "4kNir6gmDHnFiA8CCAjsiGbtPev7SxY1wxzWGfffj1DiNV2Au57tp9gTegxjov2oRa3XxyvwwVBm1ERLDsznV1sW",
  "key32": "4mfXUQr1Kc7YZamwWTj31gTNXvU3LzojonMm5pDHKjQdjMRcBkUEYQSKM8KHGGvRpJsu1VGSNRoZdH5hxErYFeDD"
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
