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
    "3Z8GMoZAEHdXpcrzXtpVzMRGygse37sfXxWQpgKxwQX6P91Ro4pA1SGd9F75sQ3eStGzNANPSeVdcMEBnCVf4vA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZfbtnzJQBeqLHfzFEYaxgCj84kDVgDcjgzqo2QnnQS5nvtNvuTFXHYDRE9ZYsSMg56RfjY5a2aCbaN7mthKX6A",
  "key1": "5nTp7tWv7bHTaVbL8oKwZdnHa6en8YEDsvEJogu1aNnaFYTfVGQJw5wse8R2o6MMtztnVWLH7GuLFbkEMRghgv6G",
  "key2": "2mrz5SrTfSoxJnNWFhME1zCW6aiye547ZRYSb2kSEUCa6wi2SoCokEb1qvH18QYgYgGCY45V31a4tESWvWsV6Ate",
  "key3": "2vPy8AtwoBgvRrQ9Dwtjd4E1GFVmDd7SxF37Gnxxg6P78V7ANTY7a2p9EhyY1Wqur9CiBBGCM9jdyjp95o9kcWRM",
  "key4": "gyri8tARg1twuUUNc5WwHy5JGyPgLW3Yiz7qhd3ac4eKmL7Fy37f1nQc6Hdg3TVLP6WFME2Y9EJtEir6v9ZNEWA",
  "key5": "QFTF9P1wWL211tzLk6n1sdPGE778JUXKMAy4jjzRjzVNTKiptqouJg9vZmCb42f3HUB6JDUgRgn1jnkmU4bCNss",
  "key6": "5SDMGT3wkXafn2duYyQvkY6F7zEqkUUZ2NNtu1BoBNZshFBFyKGepUQdyxLqkDXfJvYejBzMAQYVEXqS52fgCad1",
  "key7": "4Y4SNC4EPcBikYww2sb6HH4U8U698BogGnqtD2dh5xmAVH25FJx1X7hVHm5To1sjfWdRy43CmgvtJULEp4j2H5aq",
  "key8": "4yydjYThTzp8M7Y2g2r9FYrSxGCVehKGvyTTA8hPWGqHoVwfc5MocHgM1k3WZHEUVkTf2ybrXygHgMM3h69W48im",
  "key9": "63qcGN9uZyY44EUHbVxinhSXFD9UnpN1w1abXWaHwrkS4dAiiVkqGH7fnggr3QHX1EjvRTbTBe2BYq3RGSETVGbS",
  "key10": "2vwh6zbCP3UvJqq7NAoUULn9bmyJAnunaJ9UjEm1NGUMVVnJ9iPnHnENQPiKXrz2qJXAQML9r7Yx4gH9HGwVXGgt",
  "key11": "YmiFgxSTNrKUhFTq3VqjeJoKiwj75X81L38VFqU9XN3LxLmME6QThFB6r1wYgd86rbeQaRYZsy4aJXkVdMhkHVo",
  "key12": "3mLRRaQCo78VkEchiUwfTKwDixLtm7X1eYss6wKpMiucVGAKz393rDVivcyhQmye59H12kh2uLuR9rVi4FpbksDp",
  "key13": "4RBB9pS4DXnmwj414EHRhGjFuAS2fUR5q8UTr4Tf5DsqujApEL7KftVSej9EtShnjyyLTYhMCcuTh43M3i8PtVMb",
  "key14": "2kU746JiKSYx6yfoo7351gyBh4xsfjNn3Az7sVN2JweskaWjaLhAqcT4fwq1tjPrXiN7AgkQEmpa9tHsuP8j1mYZ",
  "key15": "3iYLmBfQsk91M83B8gv3TeDunyb1m2WdtvXD2cY5ViYzyUvF3Z6avQ68na6dnpooBfHLhsrkrqLxUgGxTqunVrTS",
  "key16": "2NtBEncbNL6Cm4hkw7zP3zzQiiCsckgTUpwiPWVys3gjsW6NRxTpouq7zjBPD14cEhUnYmwg8ongGSAGL5Yw1DMa",
  "key17": "48b8R76vPuhN2VFsLgrcBqSGtmzoJzjRj3FBLEXZ5rQBYdfCDFBanhyXZ3Xdyta77PfcWxxZYULqSjg8xXD2mK5j",
  "key18": "5dC5QpuvF3gnnCLyseCYHFx2F2CNqqSzkMQYfkphiwV8ARNK5Gz77umRXiqZtRqHmqHJeSVj2UjigHb8sWZEuYLw",
  "key19": "3ZVFoA9UrTjN1S2xhVr7aVfnzsmxXJCgvGiwapkdQNYcTXfX7DHxKbrUTVjYRg4JiqDhKnYsUZjaf6F6TaRz4yAV",
  "key20": "DHNYtpatqi7HJPKVv1MEfMgau5CaZMJqjdzx3CooyxYbJgExLmDroevn9QYGpp2dSkW48JqL2bfpzMNZCoTj8Pf",
  "key21": "4R5NgJAdCZpsGR8af3xbzm56vwPb6RAisUbgrGpZt1V9pgdqNQcr5ENuXZSj4e3mdh3dcneJvS3VDcsHcJsBzyiv",
  "key22": "3wGAJC9g7hRLoC9z3USae1mcqutKZtzzT4Fb2fc86WaGaxpSC23JuaoGXwTpWKhx7WNvgR4HDFh8yo4zCciFeA1r",
  "key23": "5mntKTYXZaMAsY9vuohnzZoAYKo1QiGmpJposKuYyny7iKrSrUTWXbcwNVAP9shJJsPzbNQ419oisNDdqhTwY3Mq",
  "key24": "3rsnKuQwgBrwzYWGH4w7npVT9Mkbgu8gFXx2yncrN3KP9rVyv2Hx5vgm8ibNLxV6ZEZauEmsDjgMJyqMUgx8oo2K",
  "key25": "3HJLPbz5smHonPkK8xq39J8UA4suvJrWgJjRuBeSscPNiii251ZbvfJo1oeSUgvzfJsuSyRuYPpTXuQihRy2HBsN",
  "key26": "3jPh8yDFqiDWKJxjrxY4ESwfFvZ7NxEvcNt9ovzsMZEcochLuQd8cSEcq6qBmiDP4BAS4V8Sv4p4rg9LQMtDbeLw",
  "key27": "NSB1srA1mmDgbXMo72Ld5sqNw1VhRXsVZAmMeLMaWMXduT5tbd5okFhJXtfaqjgFiZWd4pCMWKtQbHRLhmw1S6x",
  "key28": "39FCXMiErCvoTKQh2r6m9c7os7Y6Au8EcrSKx1gcuJGpWJmSucijZBYdpeN1uTf46mnFLMrc3uzaXMN7bk5uqb1S",
  "key29": "5h8Mw6CZccdTdFiH2CypYy5oaWrsBrG17SmFoxWueEsoKCk8MuUbSgZuw9ceAAaADnF7Jpfgi5BF1DR49F5JgDvD",
  "key30": "34xPh9CMxdHaYG5DxsvM1h2ACHn2cSChYF2iLBWsEKaWVN9itPjMbb7hJoMtjwuHH4FiefFpcYUbkorNLSiLyrps"
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
