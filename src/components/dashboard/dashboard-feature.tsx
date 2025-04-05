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
    "27SzaLH4eKKRaRjNP43RPsVeoimsEPJL7o1TCjgZsVGL5FNLWQEdsn5HmKCbB4ehXK5qhqR3EWtdJKV2ghTEbpu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQsVzXnR1aQDQthUNbNFbHQfubKZQe5AC59AWJMDHPs2k61oVeXr4QF9b6x9uuwx5PnDFcbS4MkFE1SWLExjh9H",
  "key1": "3DKRDGkRsb9Kxgqx9fsj4G34VmDim7Fg7HHYSRWav7KAUBsVEsf6in4AerrbDf8MK5siD4GqPKVknWJtnxvUkcHf",
  "key2": "5R8f2ot28YZac3u5V3B6xSRUFJcUPaxkQj63wFDRe3kXAReojn3q6noddbVSmva3iZBX1JFPZFi6HCQMUq5CJhjW",
  "key3": "v3ba1uWBJkZg8EByZkDhWpY2DR1Pxox2H5gqenRk9Np3ryooAHhT7cMQEqHLNapihuNpUzYqDtLM7C6chAGViFN",
  "key4": "5jxygkW2aX8AhrHHAUBmJjA6x6Bjwb9MViUe2xRPrENdq98BWPRzkvvVp25HXoXaRdjv6iz5s3UpcgsodcpTZ3UU",
  "key5": "4VK7skTBdjs9KoTLKXth4W712hGNUw1TJLh3PV1US6w1ugSh7NSpJcGi4YMwLSK6L7whYUZ5YBmLPAjwfkrTwjSz",
  "key6": "3Zsrh2KKNNZiwETnZAvBAYcaFN5PkmXH1SwsEL27bEHG1mBrrSrHYJySDzVAkvr88F6KLtsA16y3yhJ3aNJQ5nJ1",
  "key7": "64pP7aGUR6ZqmsMt7FaNXYwon8nkdCSmVeLJwjHfefmaXhUhnnSvYr9hJhuFy2JHZPaW8FKs4aXpjAoLLVLpUBnB",
  "key8": "UnQDpzjMDs1DQKz1AtvX21aqToHtrjVwvce5BJiCF8ymRtgkDH32V6anLV9v1CvhiLactuLdLmwZkFmrKSAHhwo",
  "key9": "2A2ZAFQVXwTG6PA6ZdVSDJGP3Nxkx82w9pNSeNJ1zChAp7ucoa1y3DdDLFoxRocrQq6eccSzcUjF4PvUMTdmaXso",
  "key10": "637wZsHvppHcwFS4kUR2WHxiRwgEfaLb86m75HKJbFEk5ckSrNpv3cgKW6KAixDdZfS9E8sQJqH2FLt3LTv73wAP",
  "key11": "3DQc65M1ha5xwAk6jzyWGZwAYR2ojrPJ4FiXryCxvyT6kvzanyq2xki659RujEeeDHb8HtxdKwTdu2qJh2tMrfTv",
  "key12": "5VvDh37PRMQBNczp3wGq1BPGds7Dt5HM3X5adm81MbxBnKyxMg3epA9GcYr4gRYNMzYqWUDWznAHWnEao4YSfBXF",
  "key13": "33qbG9zxgepC3pLWy7PhpT3HGaS9z7NvFk1WB5Uob2dkWYR7hbyDKMYz4pbDeefEUSLnCvWeiFwPL5dr7UNisFtz",
  "key14": "3AKHLiKSZHBy2qjGni8eLzVRt3ut7a5sxSLdmxgZx3G6PU5j3jzrYjT7pncVqX78H5HHR1PCQ77yyV4UsokTS45m",
  "key15": "4KTkyoJoh1HcyKx7bgwEe7f7oxhwzk6ACZ8jYCFtULuJYZQ2ewC7k29arzM11C3DvUvZG5WCKVE8rjYvKugaUSGV",
  "key16": "2jAephBSbC4zoCTAoyZJXK1HVWWcfPwgY5hrtowZeHuNVASEdK4EkfneH8JBLxS3j6EB2coGNGd5KqiAbCtWSrYB",
  "key17": "bGA9LYFmcKuk1xn6kUPBddXmeYe89zrKrZZScgQtjpxWCGNTHYPsjCEzZB48VSj3f7jahe2QxvER2G1DTkXfhuD",
  "key18": "4P7jx6XzhSQLs85p2oZBzEkyBpV3xy4rpJzBf1owkdsPjqWHQT4aSUAtz3uUr51mFZon5uKnTvJvLmbRtUEoXGZ7",
  "key19": "4bq1KeBSssBw3K2UnyjvagHtqMXEWrg6eL6LgXXxLkG7xYEEEpUiKFRMoS9ZRq6CDxyR5G4oRyo59sYASfKN8JDv",
  "key20": "4HsmDGfVEcXRi4SjRA3DzY4ESW5etf5aDNM3meX6zh5ytfaa2s5yQ9VbMiLWGhh4dccbmFohaaWzRFTSdPh6rFU9",
  "key21": "4BkWQZfEu6KScUfd3kvABw2LdA6BGnzNerHyJxu8j1qXnL56zE6usKfp3LPh5usmoepQSPYiV8q7hihCUwa3uyEq",
  "key22": "4GDFmDbEhcKCJBDYwoKPhFyWVHEQzfZiW4AGWX7RBDwazFEL3bUWNS3HufBUDn3g6FCvz7Wurmeoosv3zXaovnmw",
  "key23": "49r5AijYhoorjo2gUU5sVDuVZa5jMPhy3fwXN152zemqpSUGUn6JBBcWKLKA2PYqqzT71ALD4M8JvH7rRLbyT7pL",
  "key24": "4NE35aoK5oGbNdaDjw8TuQJmXDuexwA53HpQtZqW3uUHv3MwBJMrxok8i4j13VCdNoSkBsBFaYzMfTM4cQ6A6P7V",
  "key25": "2D5csbYVs9g3zdGmhWKbjZq1Fbry7Ut3msbZxmAQVfBGtJeh2uFqUg2tnAK9fCWm6jq9NLZKjAU4uo4y75W4u7dA",
  "key26": "4hCLGijm3X5vzc9AM6ZFRpGgVPPYN9zrhRryruzJLKXjqscyXNJfZBhQJ1fawEaL1pro7LmXwoXnqhb7s3GUX5oe",
  "key27": "5TehhdvYbtq6XQfoi4K3Bo89V3tX2eBLAVFGxmvohH1KpWnNkMwYW1NHYzDxhLYXJZsxWA3pJCyc3mw6eLXN3t6v",
  "key28": "Wyy2abeJiSjPvpQ3SDgd6C5Sy4VEbbLe2si91zL8i251QZJaC4VnovWcKdmsvLg1LomDxDfZBsxQejtT68zrfP4",
  "key29": "27X1WGh7rC6pPNtZERUXALRCKWiiyVArw7xi1xv3z4jWaXCtVpf75uubJBzpLG8oHRqzmEVmQGRq4X7ZrY2abffY",
  "key30": "5u7JaPeuRDXBvTzAEU11shugxuZe49D9jHwcuQKC6GXzfayo7wwuNZNiYSvy8oVhu1aDCvq8dPFjUMizqqCpeq2q",
  "key31": "4VGCnQgFNuvDHpqNmwebMw7qV8pE1Nd2SaQCCaFyFhTmegyCb6aTLD3JrQ73cEBQBjR253WzGHRq9f1QCp71AWn5",
  "key32": "4WGd2mk6f48UBSnSLxmihg7RmAtULXPaFyPFaynihZXQoWXfdstYk9o8Ze4fXtvkr82M6FCVTwNaMwk7V8uNCJj5",
  "key33": "ipwgQuAmYwejDypVqX9xU8YkascuGPoVmqyNKPkDEWA1KHiSCxBRjSXrPofpbnvMhRKmsFAipcfL4XrPQuAf6cZ",
  "key34": "2EuJHTwR2fwzSiiVVzG1znGF6S8oSYnsyvPNzfjCEaCPJu6dAdeuayHuXJJEUz8rr7Tyi8Jbi3KsRr4SY9fhjAFB",
  "key35": "QY8yzxcCxgff3Wq3r6jAYgmrBhnCR7TY2cACZPMA5EwNUxMR6na1cHaS5uF55yYabrSPk43HvhfjyzUFwjGdaxs",
  "key36": "eWyZGkgvpZmHmESXh1Gg2zTR9Kfi2wew41shdrauYRFfp64cixv7uwVi9SkvCdiGRJ8EytQ6xpvdpuQMSv8z2rd",
  "key37": "5x5hxJfojHi7xH159pjHBtWnVfNLk5smTxdFeq1wW4viCwP9uE2tjohwGYrRM3Kv8eip88xWj21J3NRN8QStYbcQ",
  "key38": "5UPRjTHyC157hStBB4rNS7RM6paVdKCeC5WEnAbKXqrSufP2ck6SEZiVAqXtLvc8DoqgtGokgXnd2Seh3ct3WRXX"
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
