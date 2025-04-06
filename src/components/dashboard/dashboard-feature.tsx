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
    "41MNNeFSRE4mL8fhB6vroXEDf98y1ZuixxyZgecZw143ehD8wdGoB7fHNHbioAupQvWXX7Qi3iPMUDUb9fTkW8cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25irGy2EciANS8oJa5TjdZFmwiYoep9ddT1q3fWVEEZRYfPF3mW4vJLXMms2agdAbaTxKptQ31gCVEAKeK26cuwM",
  "key1": "5okQrtWQgvip3LZHyshVVwjZW8U3KFQjJqPLvxjcZgCQJCTShA9Qp75eatseit8zLy5kQ54RnVDBFerLbnHLxAL2",
  "key2": "59inGue5Hrr1cGfBVXkC93QvQAXbgvM7cMGg7jBwf4pNs9ANrSC4KRwm38NoFLFordFbR1vooG8EwwSvbzzoY8QL",
  "key3": "2P3CWwF1E6qC3pno62GQgbF5w8HiNrGRwHivNZd8WfZ8TroUdTaZJEULfxDoLV72pG1ZZSHsQgmsQD7bBfnpcop8",
  "key4": "31WR4YCQukUeMbnKRedBi5cjZ1hH6E9QWXm58YYMbHAZcWfvvy6qkL7KjhHdn6gXBdjWw4ggMugRyFmpmcQ9781y",
  "key5": "azijABnmdA8CvHh2Gybiqz5KS7o9w5XQTgCWkQC2dYmPWxHcv2uCFPrzA8hZxVtMFZskRLmwVGNzcS4Z2SYWXea",
  "key6": "3diuJsYC4reFvJS8PbpTUi2bfnzdUJ4ssz8RxQd6HJeQEVSoYgcjMaNfc6qYRG2694K2keqJU3aCdk6yXCQWdHBt",
  "key7": "3xkUeN4UEBCfF2qQiYpZjE1F6AM4pUmFtAaLzZ6hDhaZnUXAT8qdj4SnCWHtTPqUorep6NSzc6JA3R7suoH7W5q",
  "key8": "3JJK5XzVQA4nWm2uEA78dMLSYK6eoXnVAH3XnKy7caggkkmo9LdiSJJgNDnW5pPS1BgbE3Qyd8DVwLSzW91HPccP",
  "key9": "4B2qDBMw3uUF7hc4jsPEWfLnqgo19gd8k7b3cuhbR6QzmKnnDJXXiywKNzooqjtHpd8Ypqbfw4xc8NUN1SvD6AG4",
  "key10": "4Xb94cbB9dexgFSQ4T8VfN35bZCuBst1ZJ537zDJgw2Q8tcMRmZHfVqv7dGmEsD4zcturvtrPQBsj4HsTyWe7WnE",
  "key11": "23QFNvRqoPK6dFLhYoVD4wTBUSJuQeYReHQezSmw7Xh3rhq5Qg1WJDt1YerkLERB1d6o6RcEY4zqNc5ssCqT7V2t",
  "key12": "3smVYCTLiZsVNGfgSJJJ27xurbDkrrHyhawz6tRZjGpRCpD2DzTcsyiP76VsShHvc4bmUgEnzjRHeMxB7rqYdNfL",
  "key13": "4giA6gnjbcMWzQyQ9EfCp6tQagZ2ohfTJCCKFcNnymj7JFN8jBpd9fCPYcbJNJ6RtUHyX9JsXtZdyxhtYoXizsjn",
  "key14": "2aYDiDGktYpg4HtiUQC9j9ojwQLdEYxUDM8xfCKVgHEi6mxk2Y4wHVUn5boFNgPVvyXSFQEDDxPaXhzud6yYbaEQ",
  "key15": "4aUSSdAHsDSqzBCN7MGAPmg51hkJsmZfryMv8AxyRuEmtiJnVBQrCYNzN5WVPf2XSmFFaqLxV6fNSjUUbd2veSP6",
  "key16": "5rLMfTkzTW37UNTJUsLAZkM6Sv929G6BXTStgvv1edmATtux73hghFBbUFkh6PbYVAHBQYuhy2VxqAyWLboPaEjY",
  "key17": "3bXfHsZuvWxy1LUDpZZBfmWhV1vnqoTH4XYGBqbaEUvEiZuG39sZabuscigFS4JZG5YmyHuuNkafdJ5eM7NHEGX3",
  "key18": "zAF2veSXsfXZvTUvGt59naamKvyiynkTdvLVzFxkdRTUNsmKfFPgNCP7vXFA9mvAgaUXs3FQuukYYFz2nRsxEuo",
  "key19": "3SNWkrH5WKS8161KWjC8DNHSbQ4nqEEbirLaXdXxVLW7oScbHUQzz9pwDm9FVi9aqAd7dpTX7WUMJdwtojSwgKM1",
  "key20": "2qdh65xQshkVufRn6zfUi8NKkUpxS5B1x2Zbr9m5a5hvZnMvjpJV2sGU9acU5f7wdaxtCS2GhviL8gRXFAdadkZS",
  "key21": "3QeQPan3jTVR1yc4o78NPtc235ffZg5Z4vAJqdCQ561kE8Vv2sAApRwPww45kt3qPpLUUyjVJXU2PDPrp6sYD4Ua",
  "key22": "4435DoW2NeYcEw9uhE5Mj9AnKRveNyrS27Aoy6kpAVZnzrsQsPUA3u2D814v3QZqu5bmqQNVDitbDhMQipieJtPN",
  "key23": "43FihYM3Zhk3c183Q99TasR9JREHocX19wZREXHoZzjdrrCVNPmHUW8KrD8VqQkNTxFMip1FGTB8mA289Hfd8iEE",
  "key24": "58J7Sj9QXvqCu5wpFnN84oNXdY7uPs3gg29LtvCPFnSjxz4Yz39vifswQSzHDMAdtnrErJkRjdXVEqcaFAAmYz7T",
  "key25": "2Kc7xXC6qXNa8AFZ9CkqRNbunrMJkSmZCA96Qq7XzLQc9xst3S1PVNwWpu9dA2teJDNUXUxiLNzUhbnMQutKVnTQ",
  "key26": "5iuGy24gFQ9ejAFzpFJkrXEGMFB7KxW1LLR9dk3TadWbqdVfQks2FvvoPEy7ord7BTxTqKBhEn77U5nKdoXkaia2",
  "key27": "4mDbJi9TP5xHih6J6A4GTUQ5X1ZXx5emUHESHTfZijzd4McMMy8bM6oHKywvBxzAiV6Cc6XzU9LSHiBooPQVtn1J",
  "key28": "4QTQzqx7JjRDN1PAWUZxRo6cVsZDakLgMkBU33kZvH1PjQGBrkjopcRkK6nvmmfH1ceikKw9L6Nv4JTVYnbavQAY",
  "key29": "4s9K4K8F9ZiEEuMvHpQCVkdPp8RMsxPURxRX4bUdYDFMkSRtdgYTXwkHHd61CU248aBee6qJbQDSx2VkiErEGod3",
  "key30": "SruKS7DHPKsov6TqhMMyiQkZK2ZwQfTcGZVer3A5SoW7Zmb1m7k5AFUGoxHRrKob6e5AvUasNRVWqjitZ5NSdwe",
  "key31": "3qDvttdLPZJCrcPc4hmejwFo8sWZT1qaAoczFQpYFjREY2h1woBT8X2isUwiie4eFoHyS1XfQ7ig57p76YhQFJMh",
  "key32": "38YFNu2uyHGKcF6opakkuZ9Sf4b1yCp4Us86P6SJNvqQLx76nC6ZvNeAASxfMQW5LB7L3HmUeVyVcWp7FxG8aXtS",
  "key33": "3Pc8V7sduAn6dWwaus6nRc6XJYdTHJhj4h65oox8VMyjzLxNwBN8G6rHCsD8FmnGP81Ygkprcq7pTXcvN8QaZVzo",
  "key34": "5QCdxiimSVoKY9v92KtyhPymRs4kjo6643iDJwquYdM3ajf3DS763rnbKUjxbshWCtLW99KMmJGqV5oJ9Ch1v6bg",
  "key35": "4LGg56XuNYgy1yFQFSAnDe8pW4aKRxHd6Cv133D8rCLLsGebERKDJcSEA2gMV6vhmuV95Q7kRSbE3JLqXy6mVj8F",
  "key36": "5MKdTPLrTwVg8haZpxhbcM9n2TM8ccA9KfizEC1qjA5SwAwj6fbARH3P7RcXK4Tu5dYxWDJ6oT5o82jmgJGnSdW3",
  "key37": "4WNVRGqqRD8XLEunHvMo8fFhVtyo1uXBVWABz3QQaCNwu6nLaCHExRG2AHwzbQ7TdRGTLsiTBPy9UDk6UEESmhaX",
  "key38": "4vwQdEc9ookx7sc4V3PY5aAzJwcu9LTpEp3wDYUnMh7SNd33FqfaoaZUo6ej4YhuVevQVVfYFbD1eoABsy2DV3ZA",
  "key39": "41BBM8Hkem1U3DA3CoajdFCisDHLH9mNyWRAbNa4afvA5fr5iW1fYoe2D83DiS5DtbqMUduU2yoBKpFvVBM7jQd3",
  "key40": "4JHYhMw2MRHmEsWtSY7U4KQjBzNidd6vCbyKzHPwU5FFrenP8fUdvzKSUHqdCV4SzfCvSNpakup58sy4TgWifQXz",
  "key41": "4Z7PEwBFxLqmG52d9P3kaa8F4Vd1g9CH2Xvvh1BTsPu8zfpFnAy1yK35bvFa1Khdg9ywz6k9QiLXWvKPkjCnJkGC",
  "key42": "2a7MVyCp46NAHsYY8jich9vVjwBoxLFibqCJBAuskivLJ5JFspmL1Qqdpwni2xxvsKhZthXL5aUS3YBW1M9ZBFPn",
  "key43": "3wCnMF2UxpGwmTd53fqusjS4FBmtDxU5QzfemgshiKYQcmkNYciv2J85eDh9k4iTmkY8tmviusbVWh2jyUftSDYa",
  "key44": "2cSeYBpTuYgFRAmygPP9wkBpkUwRr5kMUvcUGWYmFm9TD5eJNFtfqXtrkuXxT3e1eg9eMRPUqH4SsADZS5WaUSws",
  "key45": "2B9H15Gq62G12yvmV4fxxAXxA3LhHWda3cGjEop4k2qKgXj1ZVQrcRUjzJGfFz2nTuRsZuWdvhESbhSVo2KJySn2",
  "key46": "3xGRvpJBZojM8vs1HMVWbPFbzuna9fdDdPmqdwFjfeoqQwDuXG7oEvjqhj7Z39bJ8dyQ1x9mnrmsyfEnbM1vqLML",
  "key47": "3Fb38oKYwqHdutdrXZ9haLoesXix9GZ8LKr9CxiDDuzenZUS2FDLR2Ar7j2VenSwcjWMFtbPkBigWWB46Lu83JoK"
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
