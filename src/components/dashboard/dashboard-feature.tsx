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
    "5vngrCdoyyVVQfFbcenJW5m5qzsMJvkr3qEg33inocUbKLLKoTJkwaSW81ebuHkkgb5fmW5a4pZKCCwv6KLVHJXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7YCTF9Bu9QCY17pwfBr5rXKVyfRrDZSq2hpcte3HRKPe9c8JgFpQnMQtqAZwrqzkr54oBxKUaXzXiewCNgHPzs",
  "key1": "5fxfjxdVYs5n6RtAkSa8EZLaaLK4p2A1fnJa8GiKqeAuYqSwFCtnVroTc8vG1mtyWsodxTxustxfZE45McAhrYKN",
  "key2": "2cagZXNUfgs3c9SEuXMZXJW2tsoBTt8oNFrvKjE9FShy9yc81NdFaD3nk2XYd3brHU5BXamA164F7z9La6gM2pEn",
  "key3": "3AQ38cFG34vEmGi4D5eZNvU8Dt7VUHn4ks9qiTSCzLrwrLyH8kpqbTENGcaG4HL8HbbGSdybNsikU2zB7BZadwXP",
  "key4": "5coDnifgYXr3gmKt3tqs5UENmE9ubWDdYj6jJ5tbc6rtsJMzzjpCyc5w1MoWbdvmtY9MVUvVyCfQfLW6oRrG34bq",
  "key5": "4DjWqDX2gz4hkZEkNsNB4zYsaw33Y4Ndi9dx2XCB8aNAwfjWiEgDcsvfd8guAuZB4cydP1Z1TRRf3FtXXb9mrDr9",
  "key6": "3fkM9oFt48cWBXNat3QnkBTUXk4N4fy9oNCkbNH5WHUFS4ZL2a5QqWbpYgiTAGTjf5246i33Lk7xqT3wVLaLSGVx",
  "key7": "FwBFnooVBbhcr4at987TP7DgNv6BLFpTmUM6UfuDwyEQWqKKUMzFaYU3QmDg3DsiDFm6MA6VtyUtfevm5VgRVeU",
  "key8": "4k3yMHkDvLHmKLuw5S8nxCrowpNkici9AAUHxZXDE23dSb18DPWt824wGgZuizYuptQefu5nhpWZkuBLAXoyi1ku",
  "key9": "4BDrEpQ54yf9sv1ov6ES9CkSkmGNf43NmSjnhYxhDzqjDPAjAt6UiSrzwRWbLrLiU9pSrTaiR3phdBC1uYPmDPeR",
  "key10": "4xBRX36oiN7jZw5Aqyk5QYE2CrNFsQKUrtc5cGUNesWggXnVAs2cj3mKQAenbffQpiS9CVYrnkRYVjURAonU7bpF",
  "key11": "2nPHct5fYzrAQsXcgqVF3NqjYCQTKDnMbSc9mVh8radoo9wdQ7HtamtdPpE1nu8GRV9eS5r1Mkr4jH9aPGcSN6c5",
  "key12": "2aZpkmd8pTz3RwEA2rAnV2jccNM1zXQfiV1sZQjvAK2zwEYYWZUzdrydM43qvZn5LmwmatttMyerfro2tktz4XAH",
  "key13": "2BPtjDtjdNG53hRfQ9dy2Uxxd34D4HYQmqDRMxLiH2yA4qARNQGrj6JEL6RF3i3EqrEidkwvaVuj9zVAcB2HaQ8P",
  "key14": "21nwKX2Db4DDq1XnekwMytAueWdkhjPWrCrgiRaq3aohQYyxFbF8Q9xUyC6iwnZZGKvVMBfwqvxW2CmFcYRzMXkE",
  "key15": "4QAyWdgHj8d6gVfDg8wAa4GfM2jghnzLn43zojhyb1TVsJwB7oooKsB2q1MNULj4rzR8XPz3mM5DrKjzAsNCjdHX",
  "key16": "5HASXPLmLKWGcWTtt75wqwnsVxXPcPS2FE215wq27RWZXaBbUDMB3NA37aVqMjDvBBpw9qqKhGeUtoo4ifz6FwAv",
  "key17": "VYNyKBVScTxPh7qdKg5jJQruDXPRbTfqLgdNPxoTeQUGnH9YdwvoTDTqzzz3xZsnD1qLFyryFajX6dsJ95HNkme",
  "key18": "2JZZnPZj5Dzc65WczbygTVLq5qU5KshDts28KMJyVxpY83V8w5g29NoAZCszmFcAtKiwQPr8fRRbKC1rgAbNx17T",
  "key19": "28dByTWncGYnRQsRjEedq6XJYivCg4WQGo2GTpAaStrT6HfEVbSidy2goSGLt53KRGDgrpkTFqR5FTkLrUNyVY6H",
  "key20": "QY3vSKUZMeJHryV5u5HpB8QEvBnXcRySC4pU9Yr6ZyumAP7yJ8H2yaadvsACPpsAUYFRnGP5bhW9vXQBiCK7zVZ",
  "key21": "4yBA257HnfxDZTTjZAwNEr54LVeAT4S3CF78HbKXpPsKJvPGMPP2sYwT43b7WLZNzVq3U1um9HENuisG5vbvSrBe",
  "key22": "5bwrcwexNPucMEn2sgE1fXfVqsKg3eAiJAqWMxmDsegCoCEefAiutDjVjvXqqEW2D2Suop1qvjLfWk8JCwHiH2Lr",
  "key23": "2mFAoWgWFYUdpUMrJBqcLXWHWxpZr6hfciEJ3Jg7xXEDeCMSZoN4eDqL21iNAywL21BVbVN7TjZ3YqNWWtV8KZX3",
  "key24": "2hKJyna5XjxTKPZh3PhkHhAYxkqQnvD9oR4HU8erQPZzscyWv6qeUGqMVohER7H93yBdvnD2oJnf5KfH2oBfLYo8",
  "key25": "2MWeppnxJb4dvbAYgnGG73FSzNiLtggUj2eqxGRBofyS8BfGuaDkoPeFwtwvYNVAVYo4nLiVoDJmVdDe3JuL6Ze8",
  "key26": "5KPQVPVegLX9zRPh4wMuirKSXWQnuumufcioxqU1VAcxZKUcxWVzQ6ygZ3sPd2DWsV2iNXgdYmzq5htG1u2aYyzL",
  "key27": "4sA34RG7jfzCWh7ExAhQCztNxYtcUFg571YbhqQdwgNGbEjJzmpNRQEzNxSz2JSmaKv9DaNqGPWZHc4csjYjYfzp",
  "key28": "3uLmbVgUWctSsZXakyY5U94JsQGqaf5UPE2RZVkQ3JUGZ86D9w97aFQ2RfCiWVaLhCm2eNShUvZcDvafszBpQkwi",
  "key29": "3wTwV7rUWHFJgUbnY6M99LAuD6NxccxkeXEg28zQfD6zz2LCaLRVtNCrX3StF1HUjWSU5gLfsEykoPX2ucEBg3p8",
  "key30": "5Na9eJiWXmT23ND7N9Qu8X5xBnT8jKNApraepx1hq2P39HYkc4shPwAt6CoXLCktLVWXcBYMERXzhPteBkpNnQ66"
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
