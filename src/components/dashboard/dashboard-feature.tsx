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
    "4SS5jj1Dstj9hGkhw8fWX69tivW44gxBajWQXY9Yw2cHSWPTy4XEp9ufieHjBW3rGst7QDJaqJDXf4JhL9MKYdbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKrVkQYvFt8SiSP88kc7ng4jX4xRsVPWdgjySkWb9qdVBKcpucUavmMeJbVp26RUWW9riDkcun6acdF3i8TEgY7",
  "key1": "65hUCityj42NkDaeF3vwTGrMcJnuXnJwTVNH3YjwgscvEQFX1arVM7V8c34HxqcNs9A5tF42ARd1bu5AcrNK4Hhm",
  "key2": "42xFGymqgxh1pJnFNn6fc5oFC2YRwe1GCjwqarg63EDMKSxutngWvANG71YqWeVjMkxH9yKrigUZcM3gCMVoJc7x",
  "key3": "3P65MTbLJy8i3fPJVgdAK4tjSe8q7TgLi3weQjGPNQKoEZ5MtyeYSsNich3gX3eXVmB2pNzRMxidjozjJwj6xPFJ",
  "key4": "5CVhJWywxSwxzW2s8D2nv7fTVXC3i9RzakrZMEKCbmnUVHZzmgSTGrgHjE84qddZqG28uoReG4R64xHqKJDmb5gX",
  "key5": "5Vv1sucjy5ux1beWE3WMYFcmrnBvxpV9zaRf47FgmTSdzcdoCBTbrPo53WypvkboSUcNJnMdARjXrf3kEvYTTKqU",
  "key6": "VdWyDfJ6AqeQtzhNEC5evoLGz6FuxsTjkQpaUazenutSFNPvhM3ejrR9GTTtGjYh3tnHWDRVeAENPxb1SHSAbx3",
  "key7": "5M3aJRHTJPen6RxSxD6icPxoijE7UFwY7jjC3Mp2WTnjpw7Epko8W62NHouwrcnwFNTqvZh71HxeKdxw58xgUpoR",
  "key8": "jmSnNd8u8ohXQ4w3VWU3Qx1YL8rU3QajjdCTTfNnZUoBxKmxc9sVY8FSmctcPpEYQC7cSxqnsWLvhEFBdYL89Xw",
  "key9": "2DunF5x5A67yqLhAA1LPWiByqfgGNk9qMFJEKVkyWR13s8Y966uaaRo2xwcDKvbVmLxB4V76yhYiXs7H4MujWGTF",
  "key10": "2rUKmn5gPXpy8nQN2Y1nctaJta71bVyopL7NxRLrXQoBD1up3TbMGkj27DX6GWSVVdSPUUbkGeyjYKoAuoJoGhQG",
  "key11": "X9UkNE5GCHRKF6tsaQhdxM7E5FdTk33L4CToK6JN8zsfeFKoWNgz3Rat63kWQvjo4x91mtVrv5YdeJ3eQvQHg64",
  "key12": "2QdCff4LQLFEPbHXrkkqDx5ycAGb9MuiuDsnoQhqePqfW2vQgY8KiJEJxy6LAz9f9zjtdnWqcSGBmb8JEjgiCj6F",
  "key13": "3bDS1xcRZi1KTpan2bpx1Hnt6n6dypHpKWYhQEcQnkPiNP1B9N8ThR5dAa3CAoVhBYcHF99tZ16mSBuSog88M9MR",
  "key14": "tZHUo76wFDgC6gEXDVuspPYLdMNwkWXQtPuDGFkkoWTPXhqUGqiPPC9FWwbaoENujamNeYG1e2r6Y8pYkYBePaN",
  "key15": "4dkcRJ873CKrFCyvD6yKLaU7kUJ865NZX6vHSYzJu2c7nNLmSzhb8N1dP3Ys7Y2CUZU1dWsZS5vYHNSKTWRDbQr4",
  "key16": "4fSkZB8k4VNKdaBi7wULnKYxDFUzx2NCsT6EzyMXn1Q9779sCpgXFrS1MT9UoHaVDAshmEjwf5xPcLAbnUojMhAC",
  "key17": "5NnjJ5Dr5DVkFkwfCmGEHwksSKYpQ3wKP2NhirFst6LBGw66oPSKZ5Ue4TJrHcHFQw3fboFz3fcHshyRtQGUiAvf",
  "key18": "4wd2sDh4eN8PA8ffKagvuURMuvBdrfDAenNFF1qjM3yCf2ZSBpD9JBwknfqcJKypTbTjeR6sgT96FMAkqRujKRV3",
  "key19": "3EYnNJ6RC9kCDZufCDbAFG5GiTkp1deqoYm1dH43FThfUStnyFzHciWqRbKKCvenuTxR3hZ2frTN6YDMujEzCp38",
  "key20": "5NffHg5uQKjgzq59K6Xf6wu1cEV1TsgmmyUampWNFV33KHwQS88AcC3A6gfDkMSXgdRYSXtVkWCaGi1BvL9hfgFi",
  "key21": "2E4W9TPve2THW2vW6DV1PZxTKWk8CVp2Yr7GgxyKPkHBRN5mJsM2cDEWENwucqRbhGov2irbnqjxoYGY33UDAQAh",
  "key22": "xFxhXjxsMkrcoZjmk5L6s3xkjp1UJAPSMPbRnHSKUyuTqBT2WxrBadZrqZ2ZLaJuSm8LJG8ECHGCBBo7w49mnb6",
  "key23": "4oTGFEpw75gWcp9huUsBzzHaZf4g16Gf6avGSfhAU4734ZTCsT4MNcC6hmg8avJZwFTJoDT2bvL4yLBNLo12PpBa",
  "key24": "5dZiSe5z5YzcN2xsfMpmYQ7TBpaCuSv3xG82LGu4HqL8Jxe7YZuH31F7dHvB1YGp7sS3pH9iCr9MC5RB4tdiy2Fi",
  "key25": "2U1zEx7iZF8kdcmYYR9nXLhbbVFEiQcF4EYuzZB38jqD5PN2bvtofjiMcEe917SDPPykXBrayuS2HMwLcWpNnqPy",
  "key26": "5mQner9E7H3ZU3T8m8hEozyv7QEyEaGftAGkwAWLxnKCWAXDMxv5PwkySWt1mMaKoNRg1eviX8vq6FrmhSi1M2xX",
  "key27": "WrJ8NA4ETA71FHj32h6KRyQDMQZHqPvEHDqkHUxDyCfhhFQ6jRdH4jmCX3aDutogzKAst3FbEugdXgysd9Zp6x1",
  "key28": "23mC6ehNqNNNBRXyW67KTnK38TDGhLNkEWJ5nBkdwTT5i5Ntw9bMsv3s9nfh93QErWtqTdCChaJjdtAoNu6ZXsnS",
  "key29": "45QCURVBo4YvqGcbcr5wzj163UYsGvzxTw9U9B9AL7bxLD5rR67tAzNuvDyRShgZfKXQgWzLTx854p9CBDfwwUvS",
  "key30": "3bXsiHnRMV3NVBn2NiHUHHysQD3s43ntqicGNe3hRazSHzZK7XXCYMHWodYdyMoPuZQMXCiiBGSMz5rbXh91NmJy",
  "key31": "25G3agASycxosF2k2eDKC6qc1nNJNoWe6dXr77vipQ5yfXTCMaeu2CWNWashvqFr4h8B2JAmymJcLURMu6KoDzmw",
  "key32": "3XxFKgihL1zG7A8ewsUDbnw1LUzUH6B57Jc9EjVu38bgQgt5yRhbzXfhuZwdPZyR2ZaWbdUDCdzhSFRMPfYnaayb",
  "key33": "4EEi3bwFVY4MXHdAey6CeTSzaJ3qXaRebfYUbD7MAEdDgzdkhpzk2iMSExTiA2TdCxJW8bmtQAq6RCaDUAzK5Egd",
  "key34": "4QyBtH1BLvnMCBsPGX6reUEs9W31ozJXvns4rTXw51gMSQnGmE5gPgs6W9D6uu5AD4kejW2n3Tqp8ZAArcz9pcPn",
  "key35": "2i3JqcV9mz3qJkJbxPcKMyntActQ2ZcU9vQk7wLyHbCmDjCJkFCz5VsbDqvJ7h5TgAV7nUXSU5M2JpJfZ6AxefEm",
  "key36": "36XpLgUi735pnq6zfBspdzv72fznpUC5cahywrtK5m8EuSEczRAaa2LFAGxWUJYhKMPYr9898gd3aHzxJTUBupa9",
  "key37": "43S8ndQe5d1AFUtLxW3WDd5dSHFYoBpsBatEZ9NkqJYDLkfACCbgx5NmrMsjpbvYP8aPk1H1fKbiiMtfSa9h2gfd",
  "key38": "2CbhyWMzwHXb4pM3ELDQWVDxMLy2nWEEBzTaE7R1L1DtvD33aveZGQUmcKpBZxcQ63SJBRMf9VsBD1GcMXcfx4Qc",
  "key39": "3TgTiVN9ymdTKJ6QMpGNaEYEf5Cv9RAg1enceR6fNbRqxrWyjKBQDruGopS5RBL5boggQsqtdoDUKTojEuVd6zcK",
  "key40": "2BMzfqLhfuRU5MDPuWX2r18KpNdB1RLTMdd5uRXQAKitGdoSVaXEhKiHw819bb7EZZExZcP5a9BrrKbsaShbxKTp",
  "key41": "5Hz7S4nQQfmd7X3o8fD4TH5pucCKbjmdEd4LMvi7ZWPhBMLrPm8YFkKdnrCjMA5JqBwHUwEjxkbBsdi9gCARwtpT",
  "key42": "gwcU6neUy2RUxfSyeFzy8ft6cS8pn2qUJncVxpZFh73uN7rjs5ufSxQnTJvGtTnuAU9u7mx7sxZiVXtdiGmhP8z",
  "key43": "XAQnbssLbCdEZfwMbmiGt3RhPgV4BtYu2m54EDG4F6qeNEhx1StcTBCMyX3UX1g7L1uwmpvKvqAVi1452L6Jv1K"
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
