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
    "qctW25sbZsmAxinqj3CaoG4TsdHrUV8ra4F1nviFVBbqGyjShGjLYsFGYMpv9X28pXQcYV5ahSPkNfCGvySRmy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kr4KQvKx4iXdseZxqfSJhFCa22kXwfU9koDVvLSTTMGSE7GSJqijTfrMCrW7ceTveyNUNQBDhjVqHkBfrBjaLaZ",
  "key1": "BRm5onwW1Se1S8kjndVU1gu2JXn9q4szxSR85Y9dj9dxuFfv3iRYz3H8jPWeheGFYef8QhaHSviEVv9AtMfV9QC",
  "key2": "5GmvJJApdukZaxPxfjVNdYvrbpokR1mWKfitk5G26MJNaqRKSFsCS6p7orxvKVZqjSvutSjGbeXswT67aVKGVrCN",
  "key3": "3iEQkxz44FVmdA223xmAk8GpE6RJeDo2eGeyapvTmDYPNKfAeGhpNvQQ5dugmKTJ1V1AvDkmJRhhCViZBHhiNSrz",
  "key4": "5UZgDxd2RcYKX8Jssdn1vN6A4rHC19XnKEJzkK2qTDLVnTC2k13uyvWJs9BtpZoevLwLG8We5szMZuCrFx1qRzHT",
  "key5": "2LiLTgNbkZzyqvf8ZnXvRfUwDyuCy92BEnnRWqTac618ZzHAnuzyQTZnrXif87L496k27xcFDYnxzCkG77JthNVM",
  "key6": "35TnJxSzJjft8o8SJrVxnS3noeUUuc2JMDejgr8CmjFNmYBPXWqKqJR1uHc7hjKgZMKBUiioVLWXuY4kaxcDHn26",
  "key7": "4KTyJ3pnGeNpEBWYazeNuZAvG2pPy343XwUUJShoudXt6ucw9dZ4vyfEgsmRuKixstjLxgH6mXvz8ZCf6Ywssg8U",
  "key8": "39yy4MH9E5AhwnJJuKPXAt5XbU3U26BSRNAQbZu9ga48nFMC9DARfKvsPZqdnja6inJ6imxbAHbvwTEnV7Q9ru6f",
  "key9": "5ZiKbPjbA99sFAyDqwquaYUVfEt9QLfeSe2ySAUhtRHXbstkdTWzxqwwboLGWLusveF9bLijC6mRfVsg9BLY5oqb",
  "key10": "2UNXu6yQ618WcBdEnfYu8tnYviaLCrPaK85GJDJzZ3v9f7SrvC8YvPbyPi2YGg6Munx3QyGdeHtktFKwtn7Mutq9",
  "key11": "4dZbmjVEkUUNdcGfh6uYohhvjnGzYoBDp8QizGvEWT3X7EChFMzBtM3gZiKD74TDD59hPBNbcTW7AKb2uj5LcpVe",
  "key12": "3rU4LSYA1LvKzvjBVYr5NVeiXywwUg7vEwXD7dWFfRAVQ1HQGxwYmmaLzfHxLu6SSYFKntn7KKjWHHd1z2CfqkcN",
  "key13": "8W3aJex7Lzq5uE4Z3nu3cEpfQngAKVE96cxy9dqKgiXHWgbNtodPYtUVnVCBo1qrLx66MCvTfYYgaGLHHGF2WSp",
  "key14": "5PegvZEU1Nvbg7o1Y3G7RFHAkCbeWCpgfPxFHEQp4Mu2VXpMenCJqBegGqPMXmEAUX2tVzGmnYVCKaoHoKhrpBBx",
  "key15": "67gnFzGipDk1FRvi1ZdHTEww2bUGaRhBp4rC8j5b1xEWhxi9SWVTaMReo9PH8NqtPehDdeFaSD63prefkLER7wNH",
  "key16": "56pVrufMFhoUkYmQhSfM4xV5sr86WG5vPzXFidqL1xzEDFxfjaJS63DHjFtJVrw3Pj5MHtu4CKxUgQ4jEieqiRzC",
  "key17": "JZ9YdzNqUosAPiwbLrs4Asy3rFqpDanpULkDUeiHks1iMU5WQhs7pPUVYyseEHMW5h44vHXbRkxSQ72SXTrPbwA",
  "key18": "tTGY7UbDD5B5yCn1CbT2Rn5Fvd5h3yFQf3EF3wwdXj4kQVRfn5Em8UvUEw2EQn5X7NE2JRjT4FugwK5QpVTQMxC",
  "key19": "5R2RpzbYpYvusZa6Mibcs8ZjnhB11xW1rCQ45XWNj65NdjiWCxujx1eePt7vGA76MYQWM3MjBrEBX1ixku9wM1uu",
  "key20": "3VCjagyLDKFX2TLE2rqpyHjS18hUQHZwRm9Aegt6gNvQ826PnMExwzWGuTzPFrZmsEmBuzbobiqcxZLqowwhJjBQ",
  "key21": "2T7y9uzJdeifsCGSHUCty5vkwBM3S9cjAcBgs7cKe2hBSkMQu8PreW4Bob98Wm6kQExnDu5o6EV5sAmKL3zW3Gpv",
  "key22": "29HxX6om3VfR99ACA7oNELSt8TXPnWxLcQfGarVGF6vwyCjpfsZDN6hY71x8tTGG8StaUnDoaNryjUJXudN8AE39",
  "key23": "2wWQdEyMNGeqyN2AP8GuBYWnvjME7bZdj5teLAg43YMZCBuTY4CZLmpsoAoMbv4PfQ293Tgegx3PsG1JZr5s2ZsU",
  "key24": "3Jm7EzgRFXVPgVFgYwtuyjdoAZKS3RC7X6FNc2UCkFnLG4vnBDJqPoKGF6weh2PMUP6CAHC8BviHF6qiXpmHXWoz",
  "key25": "4zcimYwi7mkvd5uhehf6aVkWpj2yJBtSs9JEUGPVxQheoQ3LWsi6JLFCLpZvqujbyyg9bCMgszHqDRy7gH9qZc8c",
  "key26": "642tVAsiQtRjjWFwef1TdyD8qAoHMriZT92JLvwXqN931TXfuQTBoyC9CGH4aTz8x866hHhNodbDDMKfhdhdB18k",
  "key27": "55XRBYU7QAPYys31S9KJQjPxR11KeJeiFhPL27MGonQTtWiseH8kLhYEnqsqLeUAuXUniH9vusrBctSuzBg6QXiU",
  "key28": "2xWMZmJt8iMbe3WuXnqzanRiLSEYZAU9U4gvQrbiUAkiWuKeiLzjxK9Dxrm5iyeBTz1brmVCS2cWxVe7Ywf4h2Ee",
  "key29": "7ynx1hsc5CmfnA3FQj78y8cKGPaN1BZy4dkKLwJzn95BBdodsjGLFS1XmfdUJ9GU6arzw6KdkcMqWx55tHjs1rH",
  "key30": "3ywdyjBCMUEVasSUGycsaQcKBViaguvmUpntReevkTJCh4Qj5Mj49S6whtHxiF5RnALh74Zw8hVs9u8jF8Ry8bqZ",
  "key31": "26DAEcHJMuVdgiBNZvYVnrqFhPiRr6ZPDdMWBhQzxrJAaqZLyKPuJLEgsSHH4fSrTTzHZK4sE9vMj2sK2aouSbAF",
  "key32": "2oufNKhtAoeWsdMnHaQpsv5DMxdBXmJhSR2K2bNMCsrqKvGN9NKhJFmyAisQKDbn4pyw4BWQ1YHUKwT9saAt6uxm"
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
