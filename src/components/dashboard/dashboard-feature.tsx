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
    "2erK8Kf4YrAjAS5V9rKm1916PYQ2FSNGRbBT3j5icuhJDqSnXuAvKufiydLLdBLvmFbiqqZjGtXdfmejcmAApUfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Upgictb1hziBn432qJ3X9npCACeDGdPiqUtKZunMpww4L4hJK6eSqJr2PVBaGqfC4qym6nVfas9i2mDiezppdCR",
  "key1": "3iHca5916vFnYurenb9R4gUbtXESKnWbKt8XZdM1DpzDZHGt5dHQyYGRHjavwK2anBUSLpnPEyshSaW58kbBbjWu",
  "key2": "61KANRkSHwkxpjjSTwSeFZPYL3V2nJHL9DndsCaz4N9QQpXADisLrin2yRYebMWkak848a2mAue6sfHExFX2TRAF",
  "key3": "4wSEne2hqYhAiE6C2hDmhfBdBAaAq4DQkMf7TbXPekZgaYVuE69BdzaQnwqUv5v5CvnqveCHxm4tW6eGrQc4DwZx",
  "key4": "5mCnwmgR4wNp8MqVHWpbG6UDf94oSkfqLGnx8ti4WuZgXeGC9R1E3viSLXZQMkwCoM3ctjayJirkmnw99x2GcFaK",
  "key5": "5U36AhkbYRVTysyFhfqBCQEgV2qVJEcNg5tPD8WhwQ1NtfBZK5ojFQ7P66iBnGN5izFtnbmki3jgv5K317fnNBpi",
  "key6": "5U2GbKVFRJB4UT1jZUZHPoGtoYjjRyDT5Xm5ZTCPsZUPW4fRBnU2XugpEMUYenQL4xUwkj4CNT733dk1DJD6Mj5V",
  "key7": "2tdq5n6LZaVTGvi4nKzQ6ZEz5rgYBwkYTxi8WKeTga5kuRxmWeRRLFdkCBjFJJASUsbad6hWUC3VHag8Tsgy5aDC",
  "key8": "47dtnSAuqgwfKJtNYj87Zi8n99AJ9GiyoApteHVYPfQtcd9pT2CPYZrmPx9S3Bhh3hsPq3qWJrdAHMmVF97QTqNF",
  "key9": "5UtuEgboNv4992a4DsEUT88y91mLwp3ZVAFATicFtXvqpCDAco5rksZtdpU716teNREz2qwKBS8g7mPWLUPB2Crd",
  "key10": "2oEEHQf94847jBm3ems1pDsKV2YM5WTFDbVfoLpunbZBxdVxCBkUMk9rqrnyXLskQpXTmuwN4BsfYNT84d5XQ6EP",
  "key11": "zWTDN7XKqmAURNUQHj6HKF6hVmP5M5iQjpuVLETj1fASmKFooSNj95AD6ouyTHqwDJikZu4EBhG32YmRNT18HgN",
  "key12": "VL48zK9Em1rz9jZZx5ND6WCwUhzH54p3snGMqrwkFUcSzUF2NQFtuhPcx2dofpFAPeKAzAZSVQvGHZ4DU2j8Lek",
  "key13": "GL9mFKEQvK49FjpCFVwT9bx365jorN2bx3ief9X53hsEsbDMbZKdoPpvTzFWPJhaXUv56FhS3tApX998yzaFH7b",
  "key14": "2hq1WEYNXdYmungfnA6ah4TiY9tWvjUMpe3RYqBx2LvASQ4zV2GUXCzXPPkEbVs4WxgeuPpws2E8iArgH9Dxcs1K",
  "key15": "5fvB43uEnSM3BAVs8HUXm64xdt4TXjLe5mJQTD4WyEXkmEaGG1TgKvquMhTdxkVvMfzjXwADrbH7JcHL87hAykBT",
  "key16": "5JswFoxtHmDXGCnyaYgiQ3QHvmw439JsZC6K4c59znVS51wQMNAuBy4ESrSpSekJEPGyr61oWpSFiZ4v5TTUPt6S",
  "key17": "5WjpNcVFWAtiKt7YRJSoyRwMyYwnpkN3GCss1AjWZm3gNKHe6LNBSB6xfEaNfJ72Gatmr6EJjiDhjJBTkQYSnJxd",
  "key18": "5goVEfYCPfyjV4hK3iMuV4tUfdkFqVQ56GzrxdPzqJDhqvyyi1sTdqxmZW7hNN1i1uuCFvJ7eisysYjkyyuHpKY3",
  "key19": "s5WegdKPYT8qJCv5HLvdXDzL8JPEVvZh8CX38aterSBMhYQNry4xQwbyT5ntUpCJiGwHx31EaND54VeWVHiBfiP",
  "key20": "4oPSwqxPJgwvQBAT6UxykxqSeiVczCrurFBw8UeR7vSrWsfzwxCF6AhygrMboop2AfQET5Ej6tHuL45d2GRESWrq",
  "key21": "3FJCAdF7D891DJP9zBasYaL8ya9vfrCotG8bk3HQv2ySEJ44EhbyvX6x54f6DnA3NWP2zYsRJt5HuhT84SQpVW2U",
  "key22": "qS2eYnJzpCB9oeH3YP99p6YZh1H2kciMkHTnFnu4MYjDPYERgXQDDwnnKkwT4sGECiBPU9ZDBQcRucQY3pjdGsm",
  "key23": "2hdgSdYww9LBYc2wybpet5G7MpCbwD29RbDZRN2uYmGRwLcTULDLyiHwG3zZZWWLqh6PkGoSoKeQLJg7d7x9ngTQ",
  "key24": "3eU8si8yb1z7SPqHxaUGKe1yqsPmLfg6z63A3qkLs7Bom6acWDK2geVomeKppgD75rWNwpxKcJeWPFWDpPQjCE6e",
  "key25": "3GcafV1fTCABW8gJMQThCNgF1Zjs9YRp84q5cHXjoyaQd1LM2B9t2WDzyCFeGMdHHq4yyN2L25D5BKaYcW1na6kQ",
  "key26": "4WtTecu649oPhWRcsdRhqtgikYxfBQM21z7mUti2aG1oEJg3VaDFdPuUyaPVaBPM8AckECJ18UVSh6waLKX4cDum",
  "key27": "295nrdorPReoGbwMqgvjCboBwBxK4x1CwTrp3XDcjr3RqSNiz8VX2yF8NseRYuAfEKtFVPVSSh8L7z2expCTBffW",
  "key28": "36N3oiy6SsbV9E4UbgQUHXBD4nRYyGzMhTUSUwH6aES9GPxp6G12E6yFBCux4BmBx98kSaTNBgJimCrLMzk9hobS",
  "key29": "3v7jtTcRfs1qiv1GZfUjgxtFmu6pxRFHYtHm4HTkvXGDV9gECyzBZWbTqRFccrT1WFNWdHQ1MPHdBH7y7vfV3yYi",
  "key30": "5HegKTVZZsvZCKAcma4ougXH3ePBBUK5surZxEkbCRqGgUjRdZaWW1PzX6hKUN6nJeS7Z9ctbkdWpPLSWyuUEy7z",
  "key31": "63YQaS2R8xiFtXrdxrhbLmqs74FNq3McLZz8c9L9rSxmcEUWwebKwz8qwbeHMYDZDW2fWWg7aYHLvQY5yrZLA5or",
  "key32": "5kay8f3uvUvrsnSshXEFtSYFU4KVvsPNRaCX6TLhGjLWUn4WfLAC4mCyx6A5awy2VToNEXPUifr8m13P11YYNpsT"
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
