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
    "5xbwBWWH4o9ftvDmhdPkbsEvo7HJBpoFEzzzEVnqti6qYFSbXRFVj5fKeNezZr5JeQpazL1g9X53eHHy9dWeFeUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbNMBbgGYjFSwtum4fic3KnYTwMMvqrSeohMKUnYVAoMGcsrxYaLQX38tyRemBKFE93w4XnR1SnNQ6LcLA3tkCv",
  "key1": "2Uk6g2BqMEeP32jwu21KBkz48jM3fbdgfq62V2kV1bUpeSFW7mXrux49GDaJyonKASjoPcqsCuaeAQKhAXRxc9a4",
  "key2": "EpV1WkWLiq9aTQfNwcM8JXQcTeVAeHAfbPMXg9trzqsmtL8gLvenCPT6E1qawu9nZoWABHeBoaPozYk1vYZyHeu",
  "key3": "3VyTz7uFnzko1hYsNF7nFYfSCE42db8jU1AWSiqoUAjYJNNsnTp8htuq5JG389hrPnhMUj3kxxay9aELsRRNpe1E",
  "key4": "5jyMqBT3rPx8NSiSQuCYE7z1yFCcGBhZcPkRS1T6LBtVooaeRqcrUC3sPD3MBDbJxvHJ3XXH6KRrARqbyFw21dBN",
  "key5": "2Njs9bkpotR2BowJZD1WJtqctrFxWC11YP8mRKK2nALGAMaoRXMbPZ6UQNxfm7SwQrdLS7VVg5Nse8Jkr9q1rjJc",
  "key6": "4RvL8MrPfo7Xg4YTpm65sn8vcuvA7YMthKszYxWMbGQQp7hEtcTgbGZJqS1Koo8DdCH3tBe8WXLzV5q6TQBK5Mhf",
  "key7": "3m2ubp4yMVkVrFVvrkb3PXpGmuHjhQbmJ9f6msLmYnu6sjWypgJM5Mgdg6aQ7PMons4uGg9vWjZYCPiRu5hqSY3a",
  "key8": "5AfMYtSLif3nW57hJq8WkR2UAPJV2BPwYnvLdBDMM2pFt9828JF5LGaFvAkTBvoaHTLn31Qy97BMrobvPjLNAZmw",
  "key9": "NRfvkXkKDuFMYTLL3b1FgYBtXfipyekW6Fc6F6a9DKRHr6YrV7S54ifUr4rc3jZpLBkdd6fWdaaFPgRUcKab1it",
  "key10": "56UQPn48qfLxa4eK23F72ZQzNHA8hG7NuTRuD9GREz41BV3PyygsLUAHeqhpNruPAbourJgAkkCmsUYRHPuGj6wo",
  "key11": "3dxt33KX3dVuw6JvfLARKJ1TgW85vdTrisioFHRcHadXqefovKFU7rVZkvUi7riqTjDjWL7Wk5Sjhq8pZ8feD3cq",
  "key12": "3ujhsv56945RxAcnrvF9LQ1LTgqczCzKMY76iU8aRNThtVztBLxTKEBt8TqKVg2eMA2HfmyaMDL6mYiD5rzu2xt4",
  "key13": "pSLpaorsCLwDc6ZjgggMtvFbEJuFNi9HHBdFXkPeHEgWhNSGw8GJinnGRVjMk4LF9UfbGgbhUmFuz41uMZCgxRx",
  "key14": "29tjy4pb9PwU3VwhASfuykb8Q8cpmwezhYmrrm6VkYLpz613RdkgpehqG1Wk2QdyQo8FzjNsaVt8JAp5UrV26wVG",
  "key15": "4eFza2MWqvJdGsUDrBkHha5dzTsCnHuJfScPTNjzoc1kY7t2wPUQFjETcMmJGsuxBu7R6SxHeV8oefu4XHRaC99m",
  "key16": "4KDpukBEPbUdKJZk1NBTwJg72Wvkgm2yiQgpkppvAw7KqfTqYVNGioXxirYxzhKh9iiUJMmMk1bbQnpJnvxeNSPT",
  "key17": "5MEFo4jXqvcwi9EipWC5ScsfzFm5KTWkdUtswrpAQaDUbExFghQq1JVwhPjryKr7ffp3xzkbdK6vDvyREApUc7BV",
  "key18": "3nZS1Kw6a5aPaDUQfFhA3v9CE4adPEYYDwqQ8pudTZV8spL71ang7enhQMwq2xHMg9JGeMjdq6yzS4ytoKQdugxP",
  "key19": "3ASCuM98Xyd2m7qMjzEZkYHUPHnJjdF6JpwzJX69YS4oemtR2531VhfaiCRt3q5u6rXfoh7TmwoEgpaALd4DcnbX",
  "key20": "3WZU2BuGXrbTBwQ1pcji54pmbxs4ttotV4DUWS6sEcCw7yxNfx4m33vt23XwJPvWLnRZRDSBzWhJQpGs1HJQJ3Be",
  "key21": "41PAphJTBFpCnVwy96b2dBoSDtQ6MSzDqPkCTFMT2F3efzZ6NnRyvn4J7Z7nQcFdYuutQbnH96cUfMN1qc5cEw8j",
  "key22": "4EBmh5NgaqPfLLWPaBtGqdZotskD3tzvsk8wGwS5Mz97KD4PMbVxNUy32CXTEeNH1q81zshUvwVZBDUc3uThsc8E",
  "key23": "4P4ys86Mhzwh8LJb1wc5sRcDLUYj8QiCa9hZYE1tTcZNZigd7J7s6UtZALkFxC2M3RjvJFTkR6oUoYd16j7cwXaW",
  "key24": "4S151hu7WpmiLKZxTn7b6Fffz4ryUXEsvgFXUWXfZ1Quzb7SAf4ioNXtGnqd86fn6JjAZTp7m1DQWo251Z47gPuZ",
  "key25": "5XjgmZJ1SxwcUysvPrqLWbdUDgvq6vVj64XNt38aLHhYdzWbQZN5tSkbwtdwxvt9Lpg2bYvRsD5dzXqadssozH6E",
  "key26": "4aTuVjGGCT3aaxpZbpbJn3A5FWFmd8u5ncuBDvr49BgNufmcXXGVZsoaMtQLX8wuwJutpwo1QwWkPvHFJeezLzDD",
  "key27": "2qHNqSud8ZEMcaDqE1RQp4jHvAGoaFqGCJrXVQS4iP7uVdyLrxyoeViw91bZRny41veoK53cka7dwj1MH61EG1DL",
  "key28": "3U5pKjcesRhiqASBeKEeubwDtnSCmYbTC6VFWQz2s5QcigEmhN7KzVCq9y7S1chj1o6xxMZd5qzPkfADKVgStAwB",
  "key29": "45E9bhdXsWqyhbf9DFGH1RwLTDJzrbT8ZApKQAN177yGwKDVVLoj2ZFCdzdnEvpSUxB9UZKR7NCQ8RKpjjX9bDZk"
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
