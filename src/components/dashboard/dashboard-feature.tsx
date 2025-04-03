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
    "5v9y751aAd8PNxTwbFfqDPCdj312JcYYKm5snJmko2Ua62gfgQyA1AkVzyJkn36enLJA5uBT9YdfSP4kdwwZwQX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKGBQ9RBVSkUTcevuFcXdqKCRp282mG4V5b1QBkq9WEcTJW2Q7HA3btRhhjnrbbvyE3iosc3LTwSLmtRiiwY19u",
  "key1": "P8KmsqwhWB75MQbSGT6hSiEsuS3r4bbfSbiLCFZomWvHUcXsSxFKyAohPcX7ZJGMXoamgkdzFtWmNk5rpViM2ZH",
  "key2": "3rbhmDKfuqYGSZNTgw2FMpeeukNvSoF4NTScy4dmJsrzqGqpsWeHWCefkUQJRHd6hrHhYLMeihXBxuZdn7EPYGbB",
  "key3": "2Z1BPmkGAdqgwSo1UDKUoUwrKuc2i4vhkoPTRM4Yq7CCdxxwecWzQNWrjkVEkiASrZeLUBURWfXz4i8PVwog1GTA",
  "key4": "5NyXeEHMSsSKoiXtzhJQjiD9HKnyqKDrX2JDoEwGzecuvbEjEdryMH1YXKWx84StD222sy4BSg3MDjjep2p3V8ME",
  "key5": "4cpH7eaZrYeSfoBvUBiRYJJcrEMTQi8t5KmJ1XnzmxmXuDRQ6dDitZ2utfy1G8XBYsoTdDT6JfJdmd1eccYjryAF",
  "key6": "276AbdjE6ekCofGhhLtSHgeJXSP5sy6GbSaQnCeVC43buUGXeMHcqgVtbmbxK5BnHLvbPjziC8tgFhEfsPcL8PMC",
  "key7": "5q7S9PpJstzPmwQhFiXdco6pQMZMSaqJsmw3HxSXFtoGazyWpHE55DmMY2N15SELZ3EnwjYKiXKJXDhQ9HbuzPXc",
  "key8": "5jB4W6eouzDTdHfi2dBCWecPgsfVBYNoaTSSXopKRtjnu7EQtYpudQsqcrTXrMgy49iyc9YjeUAb24ZvN62hgwEG",
  "key9": "31hVnx3K9ebnpheyj9PGA3CXUW7BrbmDnyXP4AfUQfUvTA7iMLsqYhCJP7EKtdeTT5YCBBrtK4Qe2ZTNVHjCMaPa",
  "key10": "48k5ps5cMja5pgXQgXBFx9ExgUahbckaQkG1HsPyoWXmB7vPPq3PqQPZtx5Qq5tXTbofX3SXGWEoduCi4DobjcjP",
  "key11": "4Lw8VEHzQUzjWVHwpYkDgFsQ2bA4bSP6KcACcHToF7LGfTqK4p8tYwbds7DYzyDHFEunZHaJLkdUq5Vcb3DjJBf1",
  "key12": "3o2HpxHmBdaRSGWQXvedtmU6tprgjjAZ1PDCmtpxYiCEU3x4syo2Whxdz5fw973354Nryta6HHWnE5MCLLxqLc6v",
  "key13": "4qzjEpSaeJNYNscFywUhJuLFMoR1SnFMYZEH1SsTuWj8Yc6rCQZww5RJFCfeC3wp8doj5kakCL2zhJFZWVCMkxg9",
  "key14": "4vyZ2ckBCmJ6imSBaqxLEsFDVsfE4pPRWzEtR3D7VNyPBXTGdETW9Xc1usBh3bNkapB4A7QX4Fxb5QBTTV2E4hhW",
  "key15": "55aei45YphpC7tythFJr53xnKR91pgKh6dkxUB1UVNF5p2WsZUd71fZx29Grz8AXDqJmwdyNWYzNXhuXsNCvvSQr",
  "key16": "4d4XMUo82hSSMQ8HH9Ce5fEU9xU8T8fwkU86aCTJHPhxs6QjQWtMXFqtKVSpLNo5myZVUKABp3ugEAScCb7m8n9i",
  "key17": "5tpEWdFWGrGZz59kc9fUtYrmK7AH3eEKWLJM7nuEShdSCc1pqB2jGxsHysTDvfKQiP5gDTaYaaMeJFhB662ESo5G",
  "key18": "29ezANnUxXj9nBBpoERV3i1DeZtWDGGAsFuy6MNMSZs3zpZc7PgTrhspqL6vqa4ax8Yp4Ay8pLrSm3AWKNbca51f",
  "key19": "22sKduSeDYPi5LGkg2cVhVAs5sLu4jjpVY8YLAHaRbF3ze5eFnRU2a7YspUnYayPaWB4jU8HB1HSjZWN5uvnRvV3",
  "key20": "3JPtoKFQiUymv5YApk2N1W7mZoDxmTaop5WibgCaiTZz4VMweNsoLhpZyQWXQa5dTJMfesw8gAVAaUr9VQcYvj9T",
  "key21": "64jW4aR6iX6GECYUptfrMfLaX12q2L2NZdFAF2DuMAjWhGkaW5QRi2RgZnC8a1ZPVQsNkpSsXX4ihpSxNq8vLyyf",
  "key22": "Tf21AVgmsRFrLTQMyGGrt5zon3gWCB6KSvnz6e1iVQDEzqWArngij6h9uV9o353wqKQZLduW3S5PKhLxMPZiVDm",
  "key23": "3igiio75e3Vq82eLuLFSrUepAC9qseKgmNMoeVGnBs2EMMCS7Kzwr6TCFtUqf16funvNYRRVdKmPcnnGrstrivwF",
  "key24": "B4w6mTiEixhjLfukt3PnXf8BNowLgzvYg3zr3zDyifDjhuegF798R746K9fkYov5AjrTwv3nPSLJrXBFk5NFsNY",
  "key25": "2EPaydBsdUwB7LqjTLj8jkyfRugTWx2uQ1J2QGjVd18S6vmYcfewSeFTAwvux86x2PjfHMBUGhytBj5WZVAAwPP4",
  "key26": "Un4YirUTYYB8pmDDAWqn5AZGgydQe1uLnSiAYEj7QWn7FGQTA9Ej8ENGLBScJeCjH1GJ4T3d1rioNCmBf7FKux4",
  "key27": "4GpB18Ftn6DDzaDLk7ogwPY8XSxjAgyn9Q1sbsBfttQsH9fawYb8Adk44xjYvHve4Qv7i6ysQJAGr1hunzxAJuD5",
  "key28": "K6B3LEsjFhcg7tsiTBXxqcFJDuDr4NoeE7iUFRq3VvekBc7kQG3jneiYvYFu37osDjfWhCC1xiJbmZyD6vojwDA",
  "key29": "6x3yBHCHNFraDRSVMRPfhKd4a8bqycx7Yxrw4ru7jSaZjs3qi3EFjs76mSUXY6uEECRHtPzmUqm72MXDsQgsjPY",
  "key30": "4tpDJ4k4efkKSNzNA6dzX3CjLvB7FqbuBmq4XHDtCTHhzkGXZxTLfKqyeLA5CzG5gPtrzgzXtj2gBbuin94h1cNQ",
  "key31": "4YYQoswbo4PbvyYKgCbVHbvoAW9kKsroLgXKWcUFb27abgydEudR9Mzrawa4f8Kjyvop7PDdW7gntAe1aqbrJwiu",
  "key32": "5bqYYDpeCE7sZkfUq59y1eKNdQbM5EYw7mmR1VJHZ2VuB79EcReymCLbMKea4BzB1GLA2ywsxA4V2Xxnkc8cE8xU",
  "key33": "2QUFzHAdLeSxrrdkDbBkK7tEyCVpEQvM1bbGaFCu6zxNsyDqskKqS1Tt9dp4FWcQGumQsZVFjD4RU4fgNpdLMhAX",
  "key34": "3wDasz6YhucMBfVihx93GkFnWuF3CdF1NpTDX82zU7ejFJfvcCDWpxpBFiub5zBTg6AgxAYsv13hcPuyeS8F5nV3",
  "key35": "y3LK18CLydMVjUVpqpWQa3MT6o3pjBZkCKYdGqLcYZiahLpMnYkyJZ3dW2QFeaMo3vonQhm3zeBRxSxnf7p74PA",
  "key36": "5k1kkYsXtTvCQqUph3RfmvMicMQZon5nAE8kFwVsXAEWZa9nkgndFTVWtDhib9zGK75Db7w663WEEtvqE8xkHCsA",
  "key37": "arwaHyfYHLnBCPgveXjDfNkL7NwryWeV5inj85rGPLDqHqhy1jpeB5eMDWPVPRUYpPPQVMJBTnTcR9w2pgTJuno",
  "key38": "3xgB8yPEi5fzC6J6soSFDp7DcXZDHPbXw9rwERTdxnXdZYNqpJSWZGRPVbhdQ1eHHGaYN49M6CxTreaSuXMr6kyb",
  "key39": "V2AxBMpmYdFvmdqQNYW7o8yZqYhZqfZ2A2j1p7pJFzV8RFMa4WZbuKLSsUFvhnSPuoZrqqKmad7FeRJPCuc9jbN",
  "key40": "aYuJuJBi381wvGWXL8iPsHSRkEnxH6cdiMTeC5ponXGVJ8ieicbj8xg3rcxxm3u4q6hyYuCjgSn9XYL8hhN6Sr3",
  "key41": "5GkQtuJsjTVNExsusQmg5tT8pGKKzELRSoGTW5H59wg6d3d4JYG1YEz7TWaDSZ57S9oDmB7khQD3769wBwKorP9v",
  "key42": "5jD5y8LLAqZd72YNHqRXd51cAP6v9m3G7FHebVr6gYbSWgH4obCR4HKkdQKdGhc5phSjQ1xqf1xSuryRNzDLGcQ5",
  "key43": "4rmSEmwh82kXm5qbs1EvoEbSduXCKZ5zERkpaSKVWjxHJmkY6xK7FxwnAbZNtE9aF1J71jWikKjuDFQT4tMGhH3h",
  "key44": "AeN4Tihpu35WpGsQstnUqsGoEoqBbBdCgFLn5dtwnawJpjyDRCddm2tT1y44WnVGKioFwkJ9cv6P1CDsYTRRg5x",
  "key45": "35HxAhB11DBgYJFPQJgdeHkRLML7JD9pdS3mjQvXxyfvmFTAbznQuBU876msTWL84VjVjpc9jRwdD5FTzDPxfNBW",
  "key46": "3UtuJ1G19oxPN1EztBYDyg7ngwoRBAKfe3mE91vnXsgMvQxqQB74JW8oTKVN9HYcrErYD5WYn84w1my9r7yHA4kB"
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
