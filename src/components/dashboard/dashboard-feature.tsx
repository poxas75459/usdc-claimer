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
    "eHc2KDrhE8yKGAKPPgZEoQZ3FYJkFhccZgBbPktD6LPyYhQAjM1Q815C4JHWhEF2vZy7J46yd1K1d6u6BszFgNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZxJ3zNjHuHev8YprYwYqgk9bRdS4ihxbQCQVqCs5rCUXwLFDtnBJQajndq2YnjY27RarAgEQ12wKi7MQjQ8pVr",
  "key1": "4qFNBa4iCQdkK83R8UbeY6sbTgwdHq2sigwv1sYM6MvWhfom5hi8mmQjka8U7H15DwokVKefUzxfdHuzqSdRcgUd",
  "key2": "5rxCPLaS3kT7o6p3YDo6ikT4AZm5n5rZom5R4dnHLdy4rDyfqi1m8nPZAGcaLsJ9n9wb9x1b1mD1n4SdDfJi2ApG",
  "key3": "3gY5p1Rp3nXcQKt9zztyT4CA7YFqVvhDqGVjck9DUCwx1SDvCqr7hxBU57CWSjMG9TEYEJavdRqZGHzQAZ3B5jVV",
  "key4": "2GTqGo9GxbfATetuv86pkt6JfZsAhG8cscPPTf2KYtMW7Ah7UNfeHJVLExBUhqyARCb4fQZx3XtXJXhggLmYJyqs",
  "key5": "4tHN5LpgBpFom4xXqZcFxMB6fYe6Xfx8B9ZvA2y3nLJuzrSVw5LdUdXpeCoP99pV8jCKcED1YsYQ2HPFBBMZZoeg",
  "key6": "2JvZ3wr2A15gRGxzRiW1bVga2eK4VcT3xxKFA4urCdsk9cfA8sMUtqktHMQgNfEN7k4ae4hZMGst248nbZ89dQDF",
  "key7": "542ME5U8Ljmte5tfbATMXhPLAqBUjhPKNyfoAZoXJMFUAA5z1TKAMR2UCSF7t4MyDYiDtbFdh1vPsKpbNJx7WwCc",
  "key8": "23aiuvNAQn2s6cW7zYp2616eeTttG9MAb7RRZ6mnjvgR5Hz1DhXrcFRq285TmFHipqgRGcdx8aTDWYFZ5toWBF1j",
  "key9": "3d9KbbHhn4Vu4eW5PXRG58JNWnN33K6t8vJPZCkLwbq4gP1mAdXPtiqNz5CdeTueouywkKJGhwCun144hQzcFhgF",
  "key10": "5WPdHccgySJNs4RUko2SghXvfSunSF4ujesc9XEWjPxTajrdsBtjMSFDqeW1zL3QesT3aLb12xUsLHQg6bTnGMh3",
  "key11": "5r4Tucn5Z8ksCzR4jFFqHTeoqP7JDVh67cMeHYo725dJc3BqCWmCcZ13eqYhfSHQVbPHMxHfN8TEn6YoBJt8Tf7d",
  "key12": "S6cMp8WYjWEUoNiRwcapFMgbkwfE3aTKAWfn2PJbo8JgyGgkzsRwTfV65gY98yY7DTx8vWFJz4eyw5xgTakiiYp",
  "key13": "44xkZpD3U5YnVdbCFrtFbypawhh3CVaghF2ABCufgs1qjcwX8NSaSb6xcz7TJXTnfdjR1W1wron33heFWMkdasmf",
  "key14": "5t9QW97knBGeeMCq5v4KP9QBNm1Utdt4W4sWgYHCu4eNddXnH1BtW7uQNX7LTPTubiY16KBN9g8yPYF16WhYVWWf",
  "key15": "HmNJuNt93ksQqbDi79SXAznid4nvdyyFgNhC7tzZ6zTA5vwXxpQ1oV21StvZVzQVNRmmUDRiaGUPYkzp5YS1Gy5",
  "key16": "4pTUmLHw1B5AnkdMsmYfJdZeqjvXaa5hkY3NMysWqiMum4VAaWQ11uf93ijkMrZeo6qLmmzVzh5MqfecjZXiTVeK",
  "key17": "Y9DCjBLhx1Aw4bjdP2dLpWNDpmicTixmMwuyRd42uujvcLTeWj89X69KpiBtE83Tr7Bm8q5gyUpeYRnAJUDko3k",
  "key18": "2zHK6CivHpqxs2a8XHotvE6JQJvVy2y2AZGXQRCS5QC1Ea2V8eKECDYbda4xYgnmBuQ18kEjy26yeaPAtjERt7og",
  "key19": "5q1jQCEn9xStbzwXu3d9RPR2rmvzSG4ca7hYX3HoffXqRL9bkhzp6mKQoKTgYnm4hXmjPaNTiN7f9XCadThfYSnG",
  "key20": "x6TCTpWCRZfA3xPcwNFtPZaospMRdDs7afDMiyKXKcvUcPcowtdhQtW3cSHCzbRgLa4NkVFrqe8PZSNSvzgr5hU",
  "key21": "2Ug8XWhouwtmiU8sJkEkVG66JGpBZzFT1DnipFQXfZbWm4y4cmyxDQCJES2rMGvHVddvjgjmbNeBuXP72kHPCukM",
  "key22": "36N6kP9murJ84mufPUKgNUyai16BBCdFa5FybxvbNapZMJaWT8bhEuKMiD4JumsnB5yYNdCaZPcBmesHZy12seXv",
  "key23": "2fDKV5mpAuTthwtvxk3BvvC3S78tveGPTutrgrVkik8XFX4KKHGMkm6eeaphWdj1hDHjj5cwzvBEfMVrjmUBDHeX",
  "key24": "4Py9jvF5YxWTcf1aFKoQXCrM9gHgCN8qG8jJ8mEJQsv1ZskHAHeRJrf2R89PSoUSM1EHQqvDDHnVzu3NRyyyZf2d",
  "key25": "41KY5qeoqurWPbiFoipQgH5NRnVesUsidMfm6zX1NNYPWCWhD5N18QJfHX2XzNZU87QViedVD9cwnjdT22jKPAP6",
  "key26": "2FtUtXZrvuhhY4Pk7paUWGnBt2mffe3mJ1C6a4evGYUCtYMYpt4iCAqLRkNqnEZReWA2onLJ9KJxKdN8m91ySdpd",
  "key27": "4JSwa7sqqX7uKRkqWSAkyvfnYmaH41WxdkrXnio3GG8DWGqN8QK3zmA51A2nWB2gYnatEx6iKkSRAveG9hfASpit",
  "key28": "3mPiEwUNTSR99QQ4ggWTDpzHBbFswzAM57uzU8QXB6KKV8RsXe8cvm323LGr26JThW6L4MMH6b3hChpoYrtoJdFe",
  "key29": "XavobLETLFdVyh95qwje13DtTaYy8ePJosMCpULHVQh6Jqh4q8YMpG4TKh2qQy9Frt5NdxWHGJLJDqER5kJtmR5",
  "key30": "4jopu1K77Ck448SaPNxZFFEskFJmGzenKA6VRGMXTgnuGSq9rF2KRZuks1AmRi95aCm47Afv8TUyamEV2tVmmQJ6",
  "key31": "2ju4jv2AfZ62U6B6fGfq8yAZQM6y2y9ZzNyLZ8fwXeNW5k3ePUQSuqReYseQTFkEqUM8XVUEkqD48FpMrpYQvjJM",
  "key32": "t4uz2BD5RtR597K9v1EGqHzwMYU7J94nznd1aLcYz2JAc1x35VTn1vbNd2JeTe5HeG7yCpax7oAx4D5dp4XL2Xb",
  "key33": "KQs2MhBN8qYiXSVwgc7hP9QDy14TB39WaRdFYVePy2AxKVw1JgMFw8VdzTGgimq5SjVhRxJfbGkt8poDSA1d2YA",
  "key34": "b9WZhezoM2muoSJpcNMyVfJte1k92hkHoCJDrwsTzEfUYFPj7pqNSPFZb9C2SZxZmDttVpRAGUCbe396mnraCjg",
  "key35": "2FpNkFG4BpPtmq8KXuxr26WboTM5yV9TLwvM4ZdRtPzuvLPaidRD65Wbc7LauxCPTuWFJ5TtAoGigUf1LMiJJygZ",
  "key36": "2DWnnHJ53Epg6e65hF1G7bvUR3hAmQvzkbxoR9N44N476N387xfHYuVM6Q9xGjHLgFSiBks33r8wLzwoRrpjYkdr",
  "key37": "3J5Zfpk5GxpXbFqq27VrdCsK6UpM67iAa8tXXsN8bfX4JxkZ6Pe72rPEswkqcLdHjVG7Bs9hiXfjh4iMS84SUqAS",
  "key38": "2cLe7TbA8vZhnULpFo3vcLf4WSQ1WMB4hmGb9NVkg9BZkt1jNG2Tk19Wzeuqpy8Sn9ediSkM2g4MKdtjQhWhAhhV",
  "key39": "5sYZ22C5HBpyKJekZSd6fR5dYfux8owoT95b95QzkmTSgZLj1gzeJPGf2pKHSMtAiKj1tBGZKWTwrQZwZQ7GbSD7"
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
