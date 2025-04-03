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
    "3G23aYxGDUDyJMeGnKoPr6ueN6W4cKFWYTmnPXWmKKWK1U4zE5UT4qDgPmWjBYDpiN8whVn9JPTAQDiJrMCh91jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jREWf8ezDdn6LHeQGPNKMNssBAQe2qvV8AjiNtYZbyG1ifsobu3aSWN9qEz7fYv8GvP4myxzs715rQRq7Cuf74",
  "key1": "1gSZC241hkdDRG2BrTtp8HRL4kZqQJYjyqeerT7GsqjtMcVkNCqVcmVSJxacHpP9Q46LC5FKKyHyhdAQNAYNWpq",
  "key2": "2TGPRktKgK5iNTAPjEMj9fqwzLQHBSfhYDMQnVA2uDWJZZVh7c1j7zLxEXsDuGv17uHKkFZ93F7TYjhLZGdyKzb9",
  "key3": "2v18NMzuS4ueNGAtAwMgEs7aMmDMCMs6cSUwjJZSMETBcC8QMyywfwBhPVzWNLjQsa4spf9ucWQDSV4SmMjQLits",
  "key4": "5PhpNq9xxwtMPLxbJjiPB5jdAKK6TX5Xh8WjVhAzbHHS6e45bziMo381h2fmq5RTjGia2GD811inDetcq1ximviL",
  "key5": "5dePR3zMDkTAEkqLNs4YNXNzhnaVY4uby23f8CWKTwS5FJdevKQmqzGEZhkX29AWr6CzXag2U9PTADrALms4FoWT",
  "key6": "LrUQK9tgDv4kWHNDDVGPJJCyHifHjEXJ8wKkgC4gJQnn86ks51RT3BeYd8ifnrkZTLXsBZCWnhYnxRNiH952Crf",
  "key7": "67UR72KTmbQN1GnJnVF3xisATbEE6eKMHA8cnY4Dyeefpa6vZ72dfbrr9q4UDd6hAcqrGwAcboe951HfXAJERzHT",
  "key8": "pogGwjjrVwnbGMbepoGcx9xC1cX9hvJqwkaikJKVxVrTpzbxaQ6tdZjLRsrcU9xXRKUexkEahrvw9L9Hyu6M3Cm",
  "key9": "2qZ3t5VKRZrrsMT3uAJsQbSAbhd8A9hPfNRoe1XUteRufbi5cjUgxqsBCKG7QrBC11ZUhJRCH3Sjg8dqEQzBbCgU",
  "key10": "5HvnqnaY8bFTQBTwiDwDkae9bNkc1SAvYLaRgLEfy2TokyHLvHbYYobrvaNb3uAShHgcSQ8nuhhwFw6praTmeSaQ",
  "key11": "487yRCPVvFihopsUeLLf1myz2meQ4pM1KbeHD9x6JH9pHVsSqJsdg89ygkk4nAgFF8anuVasoAqWU1ciKXSM8TAp",
  "key12": "2o7HbGstUiZESruCBPcB2Guiz61B3XKwRxPWyAbPW8Cgwb8DkEPENouYKJSJ8by1jz5tqWCCj7UxmPsWMJE9ye8D",
  "key13": "6fUVfqGbpQTqEepW772YTvrpvUXL7Av7gvsnV82FFiEPq6uJJnsZzLYzhP4AbaYfEAYfFUy2mFUQYrZWmPbjJPD",
  "key14": "2EqU2jUUD3eJHgsmTnxvcFyWf2j3fd7CTsbmNKqxnW7s8bnAMbcjdZ8JA3gyZ4tc7X21MXn9cgrNyT3jHWRJr8BH",
  "key15": "35tcr5kmPn8xd1XjwkqNLg2DuuN2TE5oFX2xA9gxAjPSXErHWAV7QveDPvgp3QMeoWK5uDzSy9bAsx6MbgUxhn8W",
  "key16": "5CgAdca18rg7c3C5usVXgp5Fau81Zaixzcid8VHH7Fp9ScV4EteVhYHF8mWMMHBij83TLkXNjjAgLw9REfU562y2",
  "key17": "3Zsa9TkkxP63c13Fr5LC27wwvmPbP8a873cb8iTRreM4RUqPFNx1mDvRwFEZKP9rH9STFLDGfcRtX2RdxJi1Ppu2",
  "key18": "dT4Z1kpcDKABhM92p4AUWm5dcWevkW7gQMK5NArwRCgfZVpHzGbVTGVJy7VTEVn8CkZCE1NV7KfeS6Du6Z8NXLk",
  "key19": "3opBrR5o6BfAxGMbbCsmtL9jhdBqrRsKPyS4W8qKtPfyYe4VtdwHzfiAXgFsKnNfyk38kAQcR2zfCpKFm2zHhcBZ",
  "key20": "6pkbqGXLgCkvFxFh3PjemNgvgs9RQriH8jF5o7gcxKK5WjByERNk3N5554LhWLeEpEDpYQjQVSYF5L1sFqWAEtY",
  "key21": "2hmFZscopp88WSRCUci9yeigR7bhAGxcdJfLVYVgY64hsgXAnRN5M8yTDN6uYh3ot6MppLaLSyTCHMJf4aGCZ6Pp",
  "key22": "5KzggNhcTLJSCRbGebbnehJRh7RbeSCXtBM1wnM9hdzQurKsBMzjndyAcSBBQhA7n8Bgeui3wh7zkhtcQX8Ewcsz",
  "key23": "3NwdB5fAEEzhDe21N8GVLpodnEQPTmMy3BffMEGkrc7oJhVso61XvtUevSEN4yL2cvtN1v13YWxVCwuNRAMEjdSD",
  "key24": "2uFwzxNQu2MKJwhYit6Wva9tjCkQSoTx9tP7e2mK9uWFoighxXSgdJWuKCZ6Ej1UURwHXYo2djHMvAYu2aCmhijz",
  "key25": "41kUaqwFoNQyXtFb8Sw3RkBdVYbaAXtHqQQRHizndHZ1fmbejgNMgUL8AQtK9uN2uZMRDEyv1j6PXiEAPaT2fVRz",
  "key26": "61nYmKx9vtv4yPmNjz1wceuwaJRFMg87xSzPrnH2NqJVCNz8JfqNzFQAAcrmWXJT4EVLXEyogmTwK3UmCmrqxRhg",
  "key27": "34AFXkD7SizjeGeMDnrCXSe4dyhoHk1kURx1qL1KCtsyLgtfdRv1A62zh66ZtcrffesfafvGNL2pCDPS4V7fPjdA",
  "key28": "5C6EFsHUZvL1uxyo55X4ytDFpCnedMkdWtGBSyaLm1kNLdEvg1RpocWxZAeCZnjNZu1dv2mprTZXyRsvMw3CNxKZ",
  "key29": "5w6hPqFCHGwi7gvwcPVdrxhRwuu4YtjTYqAvUcLqRMknAFiEJ59xTVyaqBMAtRp34tF8krQnLGhGhX41dYvknFd7",
  "key30": "5mXsPLq9ELjKAYzYEciBpGvhNHqBj2fm2EVRdSgymi95M9JZNrRqfp3MAE6LomBzC8jKN63vvqYggRgbm6gBpReS",
  "key31": "1274FBQAtg3Nkq42xer7NvBX8VWxf4QdpRPFEJdwbkWGpCmZYrPmSBkFgsaHZQHFaJdbxCTX3xZLC8hidBjyXpkh",
  "key32": "3FwT4GLeh2g9iXxLeTUvRu2wcJVTY8GZP2GfagkZ1k8m1FWFnL6udrJcR86ZFKWVwrEwn2PHrSJWm1w8cyRgXicZ",
  "key33": "2Ewbv8rv6gZTjvEqgHrcAz3V8EfVXguBrPhj5MrfFGChC78wtnaVbLQ6i4pCxpUcBQqPnBNYVd3LcD5FTJu9VHA5"
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
