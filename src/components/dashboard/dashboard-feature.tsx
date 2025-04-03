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
    "2RGrsgoFMccBonMhtcryFt34AzuVhqgZUyJ75zHTqtRigzXsT5ejDAqXafUeD6UAgxF2uPy5dCKhdWp2qfQT4Kyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myCBeVZpg3XCwnubDCFLiC1Pr6Scn85CqKBuMo145wQZbuJNBi5wuAwDGntEh3RxhtkxXVSdk1awqPHKduinM42",
  "key1": "zjgZbSPUGwLTCB4X5LzRknuRAkznRotox6kCeEjXEKbzznoC8AHfR5tbjT7yn1sGyYB7z7mBbav9MD9kzRy9G3f",
  "key2": "HEB6PecntjmMM9LFyvZunWaaV9p4mc5H7S2rk2wt18cdzwGFFkGJPtSJRBSkwirjPNzHqrLjaYkfBgMqmW5YKnb",
  "key3": "2mqccjpqd4VHteA3kNvGQ5uyY28cwd3ys6CeRVXvm3kPY1wpTtBwrncrsh6aorKfFxwxFrscNvrSrxv2JgpfkdK2",
  "key4": "49oFdSKocW3ErsCW69DvMdLvfnWXGyRdvLzBKmXiywWh9iarM58nEYhRovhuyAyMU279P71qF3xdohEPdMGbjE6q",
  "key5": "51CSbpMtoCyBdngiBbmseXY5fyut5xxnHrg9bSJCAosmJPQfmiQtWp3422AnscTDVv4oyvm1xnFvhMjFywi7sCSc",
  "key6": "3ijuyDVpLJWKTcdjLoWjATzKjAD81mpQ9yWYRx8vi4s2J8xEB7op5qiZdvK3DcnhQNMZFjTt6NPC91gYKF1Gy3AE",
  "key7": "3cxor9YirtnFAQKUr6PjYiKpD2WiNnqdnUWmd7oJ2xgtyKMMvcKv95kfRcFNfpBXsD26mPWgrwaBQK5SdVAJW6AK",
  "key8": "5CPMAmqw9TqpmPXhVLJmAfagfinZXWoqashGzCo81SzMXPYD5PSLSAWpqy5JiqMoWbD9pfNB2caZ44JYmVn5RYbt",
  "key9": "3DL6F14NQFZ73VqcynNQ58XxBq6ovJksCHBrdrYEmkTAMtPKMKByYdu741aVh4M77UxvceH4uCLHzxtVMYCCjpK8",
  "key10": "2nETtRfqTdoC897Yp3ztvkcJFwNSVQPdr3GomeYSf94AgP2sisZeRopjLtPmJsSX9vbVoy1NSyo2bCDfq5DCSdKV",
  "key11": "aVyWhnt67TJDFgepaXHkZK1BhfeDP9jNdPBDhnfBuzSjNQ9FazD3hnFZvw4sThodohiG1YPomJgPVsB3rrykbzk",
  "key12": "2P56cxCXXZ6P9c1C4DVqouiogp6C7kfLeqcKFBkYmXukwCdg8CY98gpmd1kYS5Y4BuP2hbvgUyLgjY26DQmUf1b3",
  "key13": "37xCUpXbSwdSsBxb8MUiDRjXP4pKvU8uW5LhjpXGyDBWfxr7gGNe7dkTU7GAUxX4GzYza3WUBs379FFaqYTBxwLm",
  "key14": "2ogJnoVwMZqgYtNkFUPthzf83Ff7dTcJEqzvP3eeRasF48MbDq1pJLj3GVf6rDLMwnnYd1fZPoDxhs5h7PJamZfU",
  "key15": "7j45NcpY5UvWbCjV9uK3nb8beXtG159rfyh8UBcVyDiKcypaGMh6Xd1mDrMV6QDMcRpoT8w2Sme8sbAXoQmN53i",
  "key16": "2cFYYY3n7KXJmpNYmdYX1ycn3TzUz78BiWY2LNmbJpT29bGfU1YoQbjf9yfou8b5PYXX7451HbYGr48s3aNNFth8",
  "key17": "3PDFF4BrKG9BtDz2Zyg7soJ2XVB2fJZrDNBgYLmNbmAPSSAbYjAB7TQyUGH645o9fEvK3Lx2jtLWLhGuJMnpcrho",
  "key18": "Z7UH5MNt9FyLRek919tPZ4mRHUBtXRTTtgE82QoWnieWwEHUQsGq9Ge7dQpSPPqNHU8qehsGdiQ9b6Kqefjyx2a",
  "key19": "npuJNPcbCTBPCTJBjNuEdZ5ydfvYQhZK58ne3VhcdNUWmvfV67JektbzJK4SKF4U2q8dEquaTBq4zwR2jjviCjs",
  "key20": "4rH6rwKMbMzwrqPWp2ZMtHnoN8xusygEt1yY8EezvuYkXNNbsfZHQNxA1XUBevuL8jvEGMFJF56uTCmvht55ViK8",
  "key21": "2rjrpxxadnczJef2HTuJ199XWUk7bTpmmsnC5KTaMpY9y8qQjQuvKGeppvkt8AzcGbaotH1KPyNyh5SQyiYWwtGm",
  "key22": "5okprModUrLjKcPccgTK73xu2WQSway2SiFL6V67VzQ2JvoYXRFWxFUWVudd82DS1Cn4wFQac9hUkodBmbAY8rLs",
  "key23": "5F1piTjSnpvRArP7oDuNgrUVWAfXv8SFir4Sw5vkr18woF43fRB1ZkQqx19at6irXrPBUWdtvuAFiKum2PTDpNPi",
  "key24": "5hMghVQFKRsuiDKAdzqMMhtB71XR1Basbt8K7R43ZA6ZFXUHMxWyiMVmE2ep4jJkLx2e6SxVcoQdHffJcZ719eqa",
  "key25": "3twzwgwMvGWw7uSw5tNnyamj3gtnfk4Zbfo3CfqTKxrRUTCsXPqEhXjJKwJYJz9Q9w6vRSqUm8NbascfBQwdGB1m",
  "key26": "2rGbFLgHi4Eq9w9EGSSKcottJYRTMk19N46tZyK6Bv8ukDT7nymgGupLoof4xzUJVZMGS4zFtGHqyJ22y493c2gY",
  "key27": "F5XvZkV2DkHVPRsd9aHCBtRmxyNQL2dUfdSzptRyrFbmNKhG47LSS4rCC4k4QE1EiLKUTYorz9Qr9pAuYDiaxuf",
  "key28": "4Atc7pgrXnjLBwYAWVb19gmnGFQ7pPD47Cuj1XGg79ScZXjJkM4irDgwwee9bxSj6LEm6caKEMiApnshAtgsZrRv",
  "key29": "53NbcLsZM8jHiDqKpnQrYyCByfPDzAXW62WrVu8rB4bwDuvvVTjq5qrhvLY3WDtbW4WLezaLHcowMnEJjJASPmHZ",
  "key30": "5RuisCyZ1UruegudvwJ9SUfh1wK7Pd4ucMaCr6tYHn6QhxDEsik9bzhQ3fy6A3f7s4cLG9MhAsaKjhKQh3xz7GvS",
  "key31": "3o2fy45EXk34MsmewUfRM1GqjCgRskmSSoV24xURtwJsmQZrCW6EexsCYHcZn9vPfZcehwogCURTs2aMz6C9RC8U",
  "key32": "2F4i9VL4DHwNb9WeQK4vR9Ndv3ReoFc818fGKMfR7r5uEWEZ8jrdM4k4WVEn7N3WSD7h8SDedht9q3N4SMmCchVw",
  "key33": "2DArwsPVUeFx63CLK6krynBVhQVyTNJXv3ex9FbiBcVny1T1HAVqKU8kMWLTJfSkf4LwVnGuTHVsnAec3SGo4Kv8",
  "key34": "5Ka4B7RPv3yvJVG4dfWZdbhwcB6hS2zaZayeLv349Zda6nNa2UoSHfTUebrs4qj7kYDWso3iBwYfCQL1oaiRWEQu",
  "key35": "4zA4FwNmUJugUuih9NPthbHGJhJhgKTg7gXDVzmnQASdy7HZA7KBV2eqR49LHfaiFhvMnEGRa23udhHYRqhkYMyD",
  "key36": "2rLSR42GsK5C7poAWwmZi1DoZ4AEBoCC9W9HpFcbGFM3emAzHvQrzufw4H2ygcevCNJivzxqFg35KyuDoNFkmFZc"
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
