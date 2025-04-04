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
    "66QyAH73ecySBy7XA4NLFEGGeeVfnqFwDuq2uthEx8TYV98Kc7a4cfJ82dq55bx2Z4PTYES47QYktdDpaLr8MBiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGqkDMUWhzCyFnxgADhwf1opdQXYqYQNrJXvMXvq1izGAqZeSHXpo4cQETPgN1156yAMPY8bbRFucLzdxZFES5p",
  "key1": "prqWNwgmS4cB6uZKdDsHkDc5Z74mhqMBTt42TEgn2QzxJH6C6b6xNi8EKA8Fb2KFWFkzhw13sz3jg43hLSMHSMY",
  "key2": "5ZzhmFeCJvPLtLa2BqVNPicMaNYVataZpv2ZuauVPNhCij2MqQ12erRbvPiywPmkC8pqpAGkXHUwwBUSmR9NfDxT",
  "key3": "6hSSBNhvzDk7sdJtVfqFMDEuqY48EhuFdH5MFEge6ZvDXUmDqKY6kh2gMqjzvccn73Sbw8tWhwxPBHcYJ9prxcj",
  "key4": "oC8WFg38zcBgBZ9pykergv3A8FV8a4YxWHahx7W4Z6BYT3Bq27KjrjTye659x6dpXLqoqT48CvxFwGyUKAF8tYk",
  "key5": "4ZnNXU9np2AyEgLSk53JCdWFNMEsMGBB2FpEnaiHfUwyZXeSRau7J9PqLCD7SecgX2WASHX5sshCwAWewdpUcyVr",
  "key6": "4NwAhWs6zD2SpQmJBvYvxM7GSe3qCjQMWu3dTxtJ9J52UWtkZcKD4N8wPsZ1bV5nUYo18Ms24eZguX8NhRPEKCSb",
  "key7": "2M938srfzCDrA8s2BGo4uHLGYDNsFhnZ7HyWxeufdAV6YVWymoQKFBHpQXeBdS27w5b26pH2ufkSFmyAsCA2FKg8",
  "key8": "4Kpm4z4YrA978ACeAoy3nBWAjQsviMCBxfetDgu8CJDARJBfm2RH7HMWdeLtK1uoufFcrYbR7KJHpkjuoWbrUsbi",
  "key9": "3GFGmxDA9H6GsFujWMwo4nryp4TpjCdTtfd3Z6uCKq1PpsLytDMwTxrn9tn8dJq2aXKXDPFBTTT92LcYJUTKJZUS",
  "key10": "2tTjsxJJWPr5iMAPBenew54rb4gizJPkjSVF5LLEWb7rHdQs2dGfzyvgRemEuMZcsAGxr8RkMUM1yZRjD5xb9kCK",
  "key11": "4ipHoe1xqm5PBaFYYcz8KgfZENQVZe3Yd2ZdP8bZ3MjbcRBfH69kPYPQnZiHEcuWEJARs6RF1Sy4HGvBAr76n7Ep",
  "key12": "RixJdcUGx9qDNchJ83uyR7WL8TjN3u4vc1Qj4vUwheDS4gwsYKcgp4TK5DtLC5jJ27Do23StH68RwQWXgtuoksE",
  "key13": "2ammiRLtAnkftTsTBWo998MH2dtsK2XsvX4rDBQMdFWCXeYTRgY2g5SC3WvEe9YETbFE9K3kCrF1dcHjaPHNo9hB",
  "key14": "4CsYCi3pqz4U85TAdJzqiGEq6S3FtXeLe2d4dBs9KJj6CNBco3TnfsDeWgj43rjC1T3uoiRdzLtFWg8odyhByaGH",
  "key15": "5XQBHKH6qXAvzn3MGMnDp2naNXc8SdppQcwANJgGSDTDkzDhG5d79BvjYcMejLv2UtzvAwTLk6hTqM6Z6BDubfUQ",
  "key16": "2F8nSmSQdhSEuAn5sy23njuoMMXhFrsQCPSQ7YVe2y7aUQEFzwtWBy3WFLXCj3NQ7LvLqcdRVUfg5YDdEEBkpAF",
  "key17": "4xFWbNFBHeEzFAsqC5PRzVJsBh4ay8AHaWWqaWdmSX746tVcuAGz8oYrPMZPDVPhBBjQUbETAQaaXwJNg9Q7QPXB",
  "key18": "neQNkZoTiNQnKRUkvrYmEW9rtxsoas2RJFAWprXccVE47gAzwHjc2CaVP4Wq4J5z8JrZP8cGAiHwQKqbeKxhdqT",
  "key19": "utrEsTy4efkAqyEVzt42Q8xj3bDTGqetJ82ugGS2bbwPKrnSM11qAHCPWCdyKo6MqdJVFcEpEV7mtDUTizauEMV",
  "key20": "4FBmnPmUQ3F7g9BD7U5f7QWGugjczFnE6MPdpgffMxDsuB6RErauykBGwvnq6ibAgmf2GqxFnXbLM3BVjRT1RpVD",
  "key21": "2ywrV9uzKxvhb2jdLj8KxMd78m67yfjEX8H3r7L5GYkDEB697MpNBhi19zg6VsDkw1hWj2vnG1bFT5HDQHXY2JBM",
  "key22": "57tvwjrEtCdfnXBXTG4egZdGE5JJDWZpzHto7kopxPABf65EPJ4LLRrnPGxrRb1Jd3k3cBp4X7GcatPner1o2F9U",
  "key23": "2ySMomAsKDgv7kHo6gyDYvzYR8bLSMXbBip6NhGmvntxa1AqpJEde49rzBZCgTsZMgSmQmq6oXsjoeQdWLwzRKPM",
  "key24": "2sEeCoUiPZXvP1EXHFG3TFBGWPbMkD2DrJTB6zxCfYuH9jxKpGb8TQQmPpqSm5Y5Ke9NAZ3Z5FkntrEpW3VMn4HK",
  "key25": "voQPc17DuTBp7mZKhqHjqNNnXGpK4x9ueLexvtSR52t8bdZz9DTerZ4xvoCHS4afo332VJ1fgFHgKUeKWhEWoAc",
  "key26": "5TPYDCSHdGLTPfqy5cFoF8vaiMkGgU6Km2JGJBofaQm87uy9crzDmfHtWYwCKVSpQuNQabpPDQyocHM6G4gRL7cK",
  "key27": "3PX37rTeY5b2XYp719vGqe8vkEnbwLCger4mDrinfB6SgKTFdA2jQzDCmM2MHY65zXY6EVuiWzVJFRo8dKn5NdAy",
  "key28": "2Sk8DvhEfvLqBuiigW7rTgeLBz126jvJvrha946nRztfUaeg4BETAT99pa4T61L3aLqNPqL5L345Npn4dbdBJ818",
  "key29": "crNUWhjrjvmP1ahRt7ztz7p3U6BvF5t7BzRL413uiVAWcWk4VVveeqnnGQyYdkUtrG5UZByF3NyKGyrcXoC1h4d",
  "key30": "3bdS4vEQcQYn1Gy7ZhTZdgXdTHeJne8td3SR2zGNaE4FrJuMWvvKEP5Dou2GtZ8tt6sCAsq9N4WoQfqR7RtfHCsq",
  "key31": "2ZNHGBRZi5VnFsrvJgRe3Q2rAGjGkTQc3WJ1Cxr332bdEW7xqi4UELyU1C8LMJFEXs1tweVSgNis1E7XY6ag3LiH"
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
