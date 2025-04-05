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
    "4iFkGwVvUwt8qv5qhyKPzWkP3jWf5oxeyNmMExdL9gWfXoHHvaPHPkgp7LztBwMbBPvuNXpeteWXaxBwHU8bXBwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JVzu3HhmU4XdQWXgqdbCoR6shxfheG6PL7drKU9Utcaw677ML4BMFnAWw4aWUzYJTxsbU4ytTdJkY9idWBZWwGX",
  "key1": "4yy5yAwfGrwwxGad2z4vhHKQYUUcRqTFn7gqJD8qAQik8Fa767ghFZKaddQFEv8r6t43VC9qX5SBqnvk3xLoLWyo",
  "key2": "58gjSRXqBLjxTAC64jZQEwrN2sWSwAhbmCjMEJMsnvrRQ3uxNgri9qhSuYP4gk1Sr68Qt2XESmY9eVfJF163yp1r",
  "key3": "3eyhjKB3W28Th2ttvZXNTZCTK3ZqHLXSrYytL83mJAM9iqZgoqPB2AHmf8N9x7YycBLKbuxATuKz6QoksKS6XD56",
  "key4": "449wc2WMnQfSvC4KrqAJs1BQbnKoq6rK8TJkY2pthHFUK8Svhsfa42SzuXQydeFmTJ8QvZtBrheWoa1fsJyKgxy",
  "key5": "2vShCuF8n9zM6XmJBrDuy6jfby8j8WFXPF8Y9iqxk1E9x88sA38tcLahR4t5YYac3Laknqi86Htkg6R1vmFTnXfG",
  "key6": "4hkBFZijrUPEy98YgpggQAbfJWQ5YeVRYpersb1VZafuuZbtfs8rFxthyptUtwu8ATkPtz9rgftevqf9YNkEkens",
  "key7": "2B9T8JxRXeaycf5XoDhUFh4bFHAaC8NXbwEs1KSPg7VsLkt6QwTWBGFysHrpDzZrAbNRu5yDoe3vrkGDpt1SvQrs",
  "key8": "qMUf74BHS9HM8xT4CwaB3w4dy5Prx4yXFEUzqXoDTFiYxdvsKhq6vsb7JbnLtBJYPPxXNcEbkDRapkTGZkDsQa2",
  "key9": "2QaibVLzqoocLnty4ZCcGVRngrAVi3iTC9awmxPuqxaNRrJciV6CDzJsbdfK81MEKKyL4VXUwDqtHr4cXKgmgLXw",
  "key10": "4CdZL3NvjYmvL8fhznYZ53zxQk8tewwqSXy5iFWv5ZGZvRJvJUUwkfidEncTvF1rWCzcxgzNg2vyjjLncj4cnZW2",
  "key11": "3aSW4PhN1KEyNhk5jRdkmcqn7kBQTPLFvFS7Zry7hcJtg3yhAt4Yi8X6nqwc2wsZm2VEtqXV8ZXKfnv1dgGc7ir6",
  "key12": "5C1Dpo36anjnbYZN5dreNzZ3gsJWe8xgvqsCgczdQ1ydbxxoYEEg3d2LZALXWtN2WDKWLzhYiGHw9UCJuBXHTqS7",
  "key13": "3o3d16QEq1F5UBLoYYx78vEHPzjmjckBLzKz2sgyrErY1wvTkwHGd3MaFnKo2nQhawDtoTgdrkpVhhLKsKwQJdd",
  "key14": "3edMYkwTyv3qRYaRtQZH98Z5tKAcziy3fwXXAFFgthGxhecTiXyvUp2TQp2UbSmNxdAyEbwuEfxFXefzMwthGopQ",
  "key15": "4o62EHjz6RnXhA6TK9MPvEMUPsWXtKCer2aEcJn3gPZTfNa6Ldy9uGgFta7U9q8PXn5yipgyyDT4MGSQa6DeErAx",
  "key16": "4mWfQbSwLD1hGQpYoVdtoPQSKTuPgL4FhmNJXyDUsLhc8PMXQGjGsE3J6kyx3BB3LJDHMjUzr34EwBTTXQq5ngnT",
  "key17": "65z48xPmkzJhhLzoegUa3npc8Dp4h2kPGqzLvBqun7QoVhp3jaY6drmw28USTGDSAFLVbveCRtSL9ngRZ6uDmcX9",
  "key18": "PCNBKo7v7PxGfuxsBg3pT6vtpxWTdAfCkByWuxqGFfFnqgkRBW7nWzZqWzZ9DjWVDdQUcoRVu8E4sb7wG2JewFv",
  "key19": "547TQvcLxSadK4irovwBpUFFBdFupc1RiGMWfH3fiYEhNaPCvCrnkf4gB4oq7FRqNRfb79rV4NErmAp1H34Jb63f",
  "key20": "5oVwra6DENNtwoaS3inwJcs5xgjmyULvodZX67ztiqdrRXJ388n3P9U5F37y3KGAd94YnLkzQkyKxxB4dATBoo5e",
  "key21": "2tzPGHm7Lj179dkSGCm3zNh25PUTxmf1hnaStavLb8YbHwqYZBt5XmcRm3PK2BXwZ2zhJTnT1f2wwLy7sYNd26mF",
  "key22": "3oSGVnzcPs8PVnrPVajs4ZJ5LZBVYjvbjMyBHNi4mgDgjyVJhzi8MZnyExQfixpSAVWaf7PPAquU35ACTPqMNraf",
  "key23": "4thMuHPjQr412KYBoGQ5PSRR9JuoSFDepBDuhSysmgA542SkYAXK3qtCCL53YXGngwi55UHXjzdrKtA7xDjsiHUm",
  "key24": "2PjkuTGMCiVP6aQEjCBBMUVqVphyHn6uSYs7VptNGW9ZKEDPMx88D4edGbaDYXduYrywokPkKrm1GTFwArYp3dEk",
  "key25": "5ZjVBsHLXSGN9hLat9unGfKD1nyw7t6dPdcRBRYEASnUN1xKe7D8NDf3VR9Byt7xrutTvHSedoN8rJ2qfJpNK1uJ",
  "key26": "4iw7t5ZniaHuBUNbrUcMkZBHpGF2KAzvdT9wqovxvHCXkMhRUrxnQq5M2EhrmcZoQ74m7MxBN7BxGfoAEf1R3k4p",
  "key27": "YshouBcKPTnzxSWeaWe84tYFsCxc8KYngUw6rMqUXwt2RBqJiAHhmk75Q6nkTNB7XLXnuUr1dzermcdPEU6qkyF",
  "key28": "3n4W4K5DMgZ3eQuv9LhFCmuL22kRTn8GRNUk5vdQzcnG4YANqydN9cRUQ3TrbsasHjEgUCE9AWqgLBfL1w8euUM4",
  "key29": "Tdj9WyCvTnTScJCH2Kkp32ShybWZCe58Ey9pYTdc3vtfAW93XHd4BTGxThMvR91mCyQAkEXKHnKdfFqNyXuD82x",
  "key30": "2uy57JeyaPJSWg15GifBzZE9MhQV7aMWdQjiSHz7RYEL2pbwiqsxsBr1kSMPDkCGKDuGzAhk6epHEmW1FWBtLa19"
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
