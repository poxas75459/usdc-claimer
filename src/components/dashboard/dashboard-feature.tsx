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
    "27rwxrGDNQNS1cyeVMjr6NhfMFgCRL7eAJijnEQeUcaaZxUtm9GK1dHpcUtzAnTFyBaCzeKrPEeQCcqHujBqb4da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BybECTs6ph6Z7KhWVtFnmDXNF6fvSzbGYmw69b1MR8KrrLRGvBJfQzxbULDWHpPN2UAiPHwtzt5HNtHRc5QkWYx",
  "key1": "3rVz6Mi3eu6CZzCxToyjG4K5aVAE9gXgfniCY1jPbsohCLZiKxo543iANmREEQZ8ixk85xGARabix6ZkTDvdr3Us",
  "key2": "kpz4Z5A5zKpc5wBmHZupCLoEtYyF6M6BF6x86hgasLDxLMqxVoMoUqkiVg719L7Uf614w9QJZQtvsjyq7NCUbdL",
  "key3": "4PoTz5NBXcEBsCTB319hR1GezU4e83KHyrUxo2HH7T3vfmAVySHXCRYXjBSweqUPU8mT5SBvzw4ezs65VLF1CX8b",
  "key4": "4NkpPcp7bq2qCsSj9RJ6wR8EvDGXR8y8eoj241jVpYvtZKi3SpqcstA9L6hJCQzKWt1SPvRjwMp6HBL8JyNCDsXK",
  "key5": "5xmJyXJqsaPyC18XCBGqfeEwPxaNQqiAZEkN53VpaDHvPTYHpjXkTbJ5SBeDVL63DrHodoyzA8Ce93obND9mUaiT",
  "key6": "3eLWF6ZJCmGpjrkRdqjhvTrK9BhQrqXnBZ1Kk6LwhhD7rRgJyGYn6HUXBi9s9XS7XKzeAcRimJYtLLNDDqTE7egR",
  "key7": "3FhPUTPXrsHtTBTUZYibtkt3ZPauicKPCanXPLbqv1uVzerPo9MG9XeEp8zcwrPYusfaYaoy1LrGjJevaD7VGx3u",
  "key8": "hJ1aMENxw6vU54btJG7QoPDpdUnxm4EZ2BwAGMHQjtY9s5F6wzhrb89LSBHwYdzLjWKnCAXxVSqMrgibYcjXnpe",
  "key9": "4fHxXMhBKnucYgonuhjmynmf8gYnrKTpJPoWgX3z6SdLsSDubfZJxiXTyAyiFND6HKmnxDkuVjgXETKXvzcsVzDs",
  "key10": "GnBw1NFgHCfBU29T8JFX5iCswp8Npi5wyumX3w3Ng7G25wLys95XP1eX1JvsLbKke5ku1Ti6yCvuXS312grXea9",
  "key11": "4on2DBDyHJCAE1BqT2zzoXmykxGvvTNULHAX6rPow6xfnkb6s8dAfxgcrWAHr2gq64jTMGvyKkxYA3K9XzFK8uXL",
  "key12": "3qmtZE83pMKBpMguKSBQKtFefGkARtL4B4vatkjNq5rthTFTD1gRvJTeFpohESxHqzFqt2WejTkcgmjPKpPpzgQW",
  "key13": "3NZcgCY2MwqCcJYAQQ7AZnSUsJYdf5wjDftDCcBchkvWBBztPqqWdDJvUfVM6JQZVrPhYuAeRhxcCM3RgvfY6V4v",
  "key14": "5ZgLDTFJ7dYrZ7JENYk1q1UikZw453FofzzZJDq5XnGgnFQfHE8KWHVMa4UhKbdXKzUrK6PHoJNrHJUvpwdrSkT4",
  "key15": "4BhsJvPR9MDM9wGBoY8jquNSoSXUy7Mn8xKtqFN45pv89JXWnynrM6WfxHNxfxShQuYtDk9yoXoVbWL4T5i9pg1c",
  "key16": "45RjNb2DeK3SNuTxzKMiPWhexQx2y8yBvbmNaF8A5sHhK7GZBEskqW1oX5mwJ1st7adeJm7t3WLvzTAHSHrbYCuF",
  "key17": "26y6TPGQMNLWBJF4xm8ukqTdPWEw7aRXjQct4k5wBKBViMfd7hVsWG4nDgtfYcEGRJASszLQEHA9CVsb2vbuuToY",
  "key18": "53yzxDAhntjV3BiiD4fLejjuJiF7U8QNzt43GUL1y4xMibU1P1h7feGysWssmHTESqyd8VXWH6xtSsifuvp9tMdu",
  "key19": "4vnZC3hiGQTULhxefisxJyAgMaiGwvBSgyDzppJ6WwmxFyntapRJUtdypMRKJ6zBhY4AN77Yof6DfvzNofcrJ2DB",
  "key20": "5vmtjcw3JZcT9Dbj3ass82zz8LxQbF54oXwXfm9AGQBTnJLMfq5ZQcPSxuZJNeaK8ZWrnyGgWAmwMWvWGZy85ATS",
  "key21": "3pHq8xz9xFuqEw9nXA6TLFchs2cyo6EWHk7eA7ft3UFWbCdPBhuXvZYkxQ83xLqw4dKLL5Tu8AhvjB1AKhKRR9jj",
  "key22": "5mWwrQCTj73LxjTMdCfjZCES4V3tVUvQZaXAstgXsVtaCm9szrsfbGZ2p5YWvKXDZrPYGGxjneMmm6canGx9gGij",
  "key23": "2u2bnJx7RMJo6y7LsocDvEenpz6obia48GSkPfSnWVR3v724gbQ8JG7D3QF2K2RBLLiR3iAjAznH4pwS9GDvCE4G",
  "key24": "5bYJprMbdcjZkRaxTRudyEGn2GXJFy3NFDJ6ZgXvfrpWDsftTJiJ1ugkfgS1PsgtwoEmahMjkwhbj9Lh5sCUJSeH",
  "key25": "2qb1QcY3rEC1ZsEWECCyFZx3LnTT7FMiMjmSufufRSeKAyrp73yX2M5BEytGyUWf6Js4qMP5Ls1pP89hJRKpmYBb",
  "key26": "4791Fb938MF1xDnyCsB19nHU5u89bwzy8x1Gzw72QDZnGYA7vLXqQ8oNkfco4pJqocAGMKQmCfwFkg8m24eWZNtw",
  "key27": "1zzhUjguM3VhrbxrvRb2ddJSs7sJGeHepWPPM3TRSqAYEwcYm6698LVc9hJoypp9HuvEmvAogDxRn6xWEDrcndL",
  "key28": "V66nVWPdJdyoZGv53HD9KndRydp5GVAaCqVgVHotYD6Y4ZtxjdeTmuDEUaEBpjZXM45z3iqEeLcrmciLvnTWa1T",
  "key29": "3BQ7L8U7Qfj9hVnFcA9ZbpUG2RPZEiZvb2ATwoKA3RPx6u1t7nmKkP2BJsUetpK4HvXnEG4nczATBNiwVFM1PQ4b",
  "key30": "2hHphADWdDt2QXHgBcWGpo8GYuv9nv3JoqqrzGnSFMjMwanzLfd5PzPeGykavMFr8R913fPx59FUaZa5XxDJ63pK",
  "key31": "3BR7CAf2R1Vp6pYMon3mJ2xfuJXdQFsaxDSWm6mFxUtTWH5BX6P8rp7jp1gy9fhP9Dq8k5Yozo7oowydgZm3EKuz",
  "key32": "2bVJU6eSrdf87BVhrB2GoToRohricvbbmNzpfGnt1Eh9osquePrUxdkTHuXAdvQhwvM6GSm5XLHPCBRy7S9TY6ZR",
  "key33": "3r64xh49zDQQCu7ZAePRobDsgoWXwM2yrevfzU2MVHs59A4FrVB3qbs7iZKxfeEgM6qW1im5S6r8fJEUZeatFc7W"
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
