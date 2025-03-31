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
    "678gUS71bSo6QaSfKJJneYeLbjzmHZzppbZBWhH6vTtZs8dZ4otUDhHrKyPxB9TpusHFbA2JHLpTM1D8jvQ6kdb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LF5CoP1fq1ZW5zFw8cHtVYQcSgTouT7u76sBHFfzZXwRVTe7LGJ8xSTXUeni37S4FfNnuJqH2KdwVrGPKPWpURL",
  "key1": "zJCG8n4ooJxdRn5dRX21GGcjaNcvZnUSfvRQhiVEToBafFZqo1hTTbBjbxx1V1HfLJ6vJ4bP3TTFFB8Y4RZfauT",
  "key2": "3eoteFsudxsrhiebEb2washd2FuAjknoUexXKHNDKcsoroAEqEL3q3YXCz7erPPEYXvRZvSkZF2JUwKbhZaZ7L8v",
  "key3": "3UtqUykpX5nsuh395C8bWWmZep7wtSRjjyPTJ1FFvySkncGt53AGN8cNb1Uw5zgciCUao5osKrzjZPMVpA4DCRMr",
  "key4": "2JDC5QZzQkjKtdRPw7gVWqSNXWaEuqu6LfhzZV1P5BiB7wW1XK3LQRJbrKnfYVjWkRR1mDoZR5hX67yKXC9xTsxa",
  "key5": "5djG2VdRD99C3q7ub8ShwhjcmZmuujgHZkK4DmeS1qhdwSrNVGJvHHJueWMJsgx5PqXwuzyPz7GM8Funu3BE8PHE",
  "key6": "dUgiLo71D9mZBChuM6u5gkwV4XV5YNu7FUsJ1ahpjme7BquiakNogkQ6rbtqs4ETMN7nmn5Lkn2pFsT1vuiX3uU",
  "key7": "51qhMtDFqHiYvwrp9fP9T1dzs2dG162TgFmowc3sgMjgdNfwrtQjCG6D4ffrFSX97dftPLd6DAXxX1E1Gynr3dtN",
  "key8": "FmzQswC7bZKag9nsmaPJT5xGiAxAx4CwFp71NayQBKpp2axXCLnGa8bB1Cs8ZHBmTgb1TF4TZnt9extEWbrQxjn",
  "key9": "5nrZWjTP5C3uhzsGfCTZMAMvCVQ9X1qthw2CPkqvhqpM6CfwutQaqjtQYqSWJoit392M9QMxWi7LNZCzAtmFfHqj",
  "key10": "2aAsmE7kHEeTVRziTU5wCqd9GiPFhKsSxh7Z4sgW6ANbW4C2kCvfaBHyojjRSWE46ATUXzmHwUG5fYSJxZk8UN7r",
  "key11": "3L9b6wrTyymYHwzQgMgfWpezDtcQwZSN2foekdNpX3nLvfJGRwiikjLie9WhFofz5pYaXZo2VDQEQAmbr8HkSnVJ",
  "key12": "Cn4joCzRMw4d8eBAaq7qdJPfqhhz74LhrSuAj45PiciNfL68Yzg2FEd5oNkdQiBnkQ89AEKnGpCYSTa8ob3Lz5q",
  "key13": "42PaxMsMNWRDJp9b7CRMZYMjwHNWD9KpHz8rNnRsucs4m2pLsh49csMfTHJTXsyxSvBKYz7bqoN9UXJSCfxkZiXy",
  "key14": "595BGreE6GVmgszEsDkMEGdZrnZkUw5PFmD5UkFXSCnzWi5XhHxEBBUjevrfURrh38Jr7t67XYCpf4ngfrgQCbzT",
  "key15": "3ktX1QQewzQNVGDnEYSLX9uszXoif8GYpEMCuq5AakXBoLsw9M79zkLsF8vKo1pYiq7unTT57fAvD7iKfi6kHh72",
  "key16": "5UtyUYDL7cCKcdbtH9JmtWJzoYdzT7vVxdECufKq1Xu9UuD7GjGoJjtsUnpYFyiuchoLYzverC6V2vE4TCDy81uH",
  "key17": "4VGMWKLsesdJVJxwkgKfqDXAaGPyqzzuwRsGVDAvtBMZtS1iNASXNBQzyY4TALxdNyLzehrynNZcxvRBQAQhxbVR",
  "key18": "4V2J9w1RANjpUmMtReF8oBxHSCiLFg3sBfezT3eyu6y1AXDUMjiDZH7kFgTEPVqm4qQTgHxstnahPKmVSudyz3v1",
  "key19": "4j86VcBz4NLG6pU2RkcNUiPt3j6PVTkoqadye2ZWiF5UWec3HDAuJ7Ko8JccgjSnS8nvDiAfV6N9FeUBBgnjHLA9",
  "key20": "2jhJPjareXNb8F1WxX9rj4UsMt5uAs1CTD2miJCymZAFfFKwq3kHTDphL8v1Ra4tADRGrXUgYLiiuQjaQcXFKBTC",
  "key21": "HA6XWGVvri95wvbSgVmY5Bs9BGKJ9Jx2Wx1FwaqLXLjj4nGUU12UW825kWahXacuiTPhSkeJzpxUhSW7yTm2f9A",
  "key22": "DmcsNTAnTTt7Mu8L2Q4g5K6mzcR9mXP7bCEdgB2eDeGZH5ce1xwGCpBjwSVKNEjZQkjzxPyTFr8hPo3ugCzHHnA",
  "key23": "Yrmi9ioqgyg5rPtX7PP391YyaiX7HC5yNNwxfnMwnTdKdsAKAkGXPzaqyk3kDHgxAQSjZZeXnbCt4LjXBQbqCxX",
  "key24": "2TspKLh91VAGmVqzmt8pqua1RQC47e1xX3DqUJPqG7SjvH7Bs7G1Rjtx2a9iXiNwm22oFxFr8jCLSwJFFxZXubps",
  "key25": "5cwmC5agnqpvg4RsneEHAjvrmKEVthrKpDWFwwXooJcjc9YGreqL3sXz6ccS2hLL8vgLHPd4Y5qskryPutvCCzUA",
  "key26": "5KxzUYQWGZqbu3y2ALNVCEJoThzeMxeq43Nfa7tGbask73peKvdkug6VTZXkGsHabcwxCEBZTHqxXknRpCCWCvpC",
  "key27": "3Jpp8YnyKgReTAEsGBY1hjNjb91XNcW8GVK72q84T8o888ZjeruQyrWcymjTTvxDrgkShjkiRUCaMWk5ok63e6kZ",
  "key28": "3USogjg8PTDZiLsXnp6ZXgd4mUQdiwkQ5cFtVYY85Zm43hUtXacyhmCpwHynH24q4u4Ags6D9XWJhhWTmLJ8uAZ9",
  "key29": "3gmYXRGP2nt6b5CaZnJevKop3h4KoEhUNabghNjE6MQC6J2nhfoFEKpy4GWHqcmNuvwKEB8fx7ARyWVsDAuaVKDB",
  "key30": "4y7XTF7EmbRQX5JRFQofXjrFGC6dB84ppyW4Zj27MJHYyuyAKpcJLVXM6VopYyEyDyFFdiSNFKUeXyzMfxRmRFm3",
  "key31": "TaXFAdbGsM1BjhLky875aaTivgfCoovLbLV6FHJESfccGKRTg6oQn6oP5yjWYgU4zLKKo6z9pykrQCpKrsSq7f1"
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
