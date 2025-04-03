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
    "VQPDcn47KVwwTCz3qbNbERytqK65ykpGeJmGtxMH1UJ2wK93ERYJkfZLBetiJPANuo6JeTaf4rrEEBkwWFnjuE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymPQLNJEz21xANuNkqqVMREh9SdaG8tcgJt5CZP65eBQ2pQBcpZSNF4TH3jZJ1zgHpCdentSbkswgm2rwdtLcdQ",
  "key1": "5fACgiWVUoAKFj1bWwpxUjiCC8atbQAZ5yVJzf7E35HttEyorYZdrZB6NRMA5di74B3uGVQLFS2pMCaxfEKmdJxx",
  "key2": "248FB5i7DscWcwUKbMUbqDKSxA8MdS1AeRihhPiv75NPMF1jaVw2B4A698YgfMzFFbQSy7Jmf6DvZFkFzpRnM5C9",
  "key3": "5PREDeSKC5iWqnN8k6pmijerkkrsG4m3W5yc78Hksyz7nn8mtdy6MzsSVXVCoVD7Gh6w88XLEBVpUgy1HYvvBFWd",
  "key4": "37KKmmYBENMEFLo5cM8Yr6yybBGwCufrWEh7jmtoxt6b6ActRPVt3AHwK7xG2jdaDYz1vMNRn8DqiTjXTado5RfX",
  "key5": "nUMrMVp2mPvD1XJwAZpiBma3LbM31j5eq7SU4LwWvyWfVLYjQS4ackDGFe64aHqFeDDuJZ1aoVmPUka1t6a4fVU",
  "key6": "MGkV1j4FHyztkREGtg4G3vWsdsxKUkdonmxLKAoRHdjA8kmCrE6FtY3ZJUzcHPSnUubkCixzhD6LnEsNhRGr6HC",
  "key7": "5UVtab1wvn3v1BR5d9qpmuLxk1Eyhh8JkXy3McGVZQM9SkbRJfDp6C2DCaBv77y7cWusdCMt5GRKL6396LF9kww8",
  "key8": "USkvRmmQ6zsr75GtrjGRE1guFxapmynk4QSjUX6D5eXPu35cCtbR4sP12pwtvdU7ya68MdXsgDPfShvbRdNYak1",
  "key9": "3cvVFpoLLYcPhjcr86zKjj5RUJoFGRBZATh5hJRps4T9u36uaJW5socta4Yv4HvYi54irfGg1A1mTdijq4JUXCV2",
  "key10": "4d7Et33u257XZuzYtEVjqw2gXhRcgjktPf8oAuGAq5Ryb5rEfpAUNetsQcCiuoWqhrnXQKEo4R8WjRbz8qM2Lumz",
  "key11": "3ffeewewGyfki5RMNrG6DigixZNLcDz6tDdExktgj6EGNVxMJNXgmtw1ZSnTbAggtS5MsDmahKxEoxrmzCtDbTev",
  "key12": "S2z5UGLY87fT4uEg37jDvVJRewdRK5NDebFgnQyjPBJbuE46jYkmyJYCcH1YxquiBjHS5uFAcdXKYPFr37Jqx94",
  "key13": "2AACMMDaS3tVVUPCXvKVebNCF8XYyjXLJWTQ6g83PgdRLGguhH2B6JMjRzVvHXs9TBCX9zFsgQ8b8WXfw9oqAzfy",
  "key14": "35tUh4NEzhVDu5XP3DnZt4iVHj2vcuHYuaj3YZoqK4aasD8TNujzxYjfMmbHNDpij3uN8xkR3XbEyJ7AuMoMMwBt",
  "key15": "5BrM6sd7YTMF4qhDMyxTSNLwdET4QPY4xeydJMj5FS4P8GUemp9rcnXwCkzdHex2xSGCKpYuHdcxv9H96nibJiQ9",
  "key16": "fkbnFJZ2od9p1LEKbYtq5cphyR2gACZoQJ1teJyHtmGPsjKZbZ7bjiJeZsvjnmZGBqxmWn5MUkayLfTFFdsejqz",
  "key17": "5APETg6TBJYtBXpuAztcGuKagh7qzVpBnnYv3n3gAJEyPPd1LY9XuRGmtywuARbv5udkGtC4SPjyu6ZdbARHNYxa",
  "key18": "2fayvcQWpbVq7vufX3G3hgid3WwJmJ5uCGEasrzQgaWCzJG7vtn3WGVuaWnuWDZTEMz8VcAbQj8wJ2T1cbMwUXCD",
  "key19": "8TedXYM5JGqWxyL9ncjHGk84Q2oqkzMe8XwnvkiSEfxG6TjxNPur9nSfxHsgv9thf42Pm3C3pZ92krL52pVzCx3",
  "key20": "bjvHFaAgPSH5qU7ao7xHiU1PJC4uzzFivp4fNp4eebzfw55nLUdM3UgAmcSGgq1BoE6mfUWRSVP8oVYSJ7Q1PbL",
  "key21": "ZjnyySGAATJeApg1fBtLEUJE8EQwchgX5rbaTvLv8pr6WtgwwApKJiLAe6ffiKRvVyR9tHLtqdh46zwfSQxyadG",
  "key22": "5ujszoyk3SoEoHSpFZao8ihuXuEQAB2zSzjGXETJ8f2Arj8fTiH72jVQrPDuchu5fPTd4GEVwCaqSBQjEdzA29yC",
  "key23": "sA36xQzkKaMpzuWGGa39qHb3eaG5MbZoAUEePXvhaHG8BSeiHX56E9h8X7tuw4rmFwVPHCVyLtNQQCFz3suLzrs",
  "key24": "2wSjKLVVpzXNYqKZRVmdAoz8QW71FchJquwQefZa1Go9YKxwTcoYNXvuqtYuRGWBaXGad1ZtRCawkuVgLpmxKiPJ",
  "key25": "48VUb1DwZR9uJQ66GdzfFmYHQjAmyGw2e21amUSBfoovMDveJ1wht7QMbf7zVHiP1NSYwTcYP6jrsT6Mzs4mfixY",
  "key26": "2ogL6G7oXHvR4JfwnsVLC5QwgWQBhAULUDPmonGwPjNKF6bE6HxeAHExAzh4XmGy9raVwZ2ZiN7sME8DxU3UCYGG",
  "key27": "3AjsSeNHyWu1uxHZ6H9AVHmNc2coGP3f6mih1dsYkCycsJEmr8QBWAX5Uvi7uv8qGHQNM72g6vxGrZBxuH8NLqyf",
  "key28": "2PrkTWnDhgKtAR98L5mwEPmJJXYANS6KRy4yCnwK5u6ucK2ikBnjz6sSdbrjAM8Zzm1LMzxmaSeteHyqvYZ9Ri4Q",
  "key29": "4PjLJbyXgFmehRwNo7oALuG6KAvsMqnX8XBrBjb8XCFb5noYZ8cHvc6oKtsEhHCcVoipFk8nNYtvxqiwFuDZAKih",
  "key30": "2pmEHnG8nkgH2fLMoU7nMAA4HuifeLmALxyWqZ2Z1Cjnk82JxZB3qULnu4jAt13HDGDXCWfJ6dWfcB8tDvSx6J9c",
  "key31": "4dNR3DE8ha2LDEbqUg8aj4f3gmrx2dsRVurXnq9C5GMUKBut2c1XcLMvq7Lm8hkEXzcMobKJbF1hGYyWB4CAS8mZ",
  "key32": "3je2Mir1vbkwB3L7LEGDb8oytsGiMabkMUaSqxY6qcMgnfrHqjrim2EURdBT1Wyk9qpPk4UJoGphajwb3R9UFbN4",
  "key33": "P8PYe88Ag8KBHVXqZqoN2UTjbfhX9vwMKVvbgZfezeAchSfaszhQL1djdcXmuvsYHCbZMeSy3yw1Y9t1PextDSX",
  "key34": "2QiJzz4uHHcqqQjYcmQhi765UBorodBR52ewkAEyecqVkszjWbBCJ9WdLZ7FRwkpH5P2rTbdn2BHAzNLMaTLS5qC",
  "key35": "4PwEdWe7tUKNqn2wcpBx4jAivMuEJtLCGsKLnRTRZwHzgFDWky9vvfAt7dPamJNCmAPdv66ZMWv3rTeR6K2qyMVf",
  "key36": "3ridiinN5pksxwBCfnxRw4CPzEnw88QF3HNGpdas8HWK6YPzEtoRhLZ4KgN9EBbZuaDBPY2DoDk78STW6QvMxGxb",
  "key37": "3eLmYbKtaJYEoX1Y5bH3sBNZLuNC7wqsHxFvMGNHfFcdbQMzh1ZUoyW3miTFLg7zC29VH4CTDSsXdnBuQVHMqmVH",
  "key38": "2JGoeW1tnb6rAWkPnDNLv8yBj7gsjH7WMdB7qHfdcpJc9bX3971ZwdJWSZ4XbQCa1kosEzrebYV2d28Guv7rpdvT",
  "key39": "u6V4ZUzr8t5L4CAxmKXXKgsAwcMisNSxgRy6uUhJyWEANre2CR4RXznKghzsjern2ZLWEuMqYHeZb8EhefEBbpM",
  "key40": "5k1gsTd1L4x9D1L3HSpXbYqK1sgM6prKvmsmZ4j75E6mjxenxMyLqptbpVkc9CXzPBDgWA1jZRU4VV9hQVjdQE4A",
  "key41": "67UxvQMbxo4mxSL5nUSPZCZnveNxLFRGGeAnn7b4KjoZ7Hs6LHdX3XzLXtXbB8bJHjffFYf23eiqGugYK2po8bcv",
  "key42": "4fg6GVaxCsZKnqGHZrcdeNTH9bF4wxxSwo9cvR964xJYCsriQoWUKV7Sn95BfeXtRgWfNEhEXduUE7zMJWcM8RL1",
  "key43": "3MSkHbVk12KHzmeTpVVSy4F9tK3tZ5FWcp3B7MEszYMwDQVD282y5MVLs18qRzd61RtSTAqHxWkK1ohs6NCp45Jx",
  "key44": "4L8UqkM1kEMRcvworSZ9zThd7Y2TcY7FbH6u7o1vVKBqgyvPHks3rTNbr1FEnZCHrEp54P7QQERsFfm1ZDXckgGc",
  "key45": "5n4EFwkJ51JAGeHhhFNu7AdADT8EKL33LzrPXBuUXWZYj5EGaK46bjRECkKAvosrYtuetG37k3VckqHMznVbySWv"
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
