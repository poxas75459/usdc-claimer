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
    "2Jzn3ep8P1uaFGHRTk6cLMhyjQUcZJxVCKfxKhKUuAx2RCaCySjQGHscjfGA4gyE9uW9848yXWah9BzxZXCnpLd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jiggAwWSzXNpAXwzFHxrzJvQPD4AYDcnskK4sAxNRyFTvspzHNfNPGkm9h9WV5Fi5ANyPHYFKAwKPj8a4DH2KwT",
  "key1": "2Uh2gbRQKZb35GuUC9wm9iHcj1VsFvMrUxdiH7ckEQyiv3iYbSpSsMfpR1PTJkQoGmhB2iip8GWGGGPiwRYugnsA",
  "key2": "2oRHYLWPTRVPriyf3tDs86rNhMMvi462PBr84qq4JpQmUYayXyGqT2H9Hu3SxiGncBSyCN7GnGWCgN4aSVC7xSCE",
  "key3": "4UeMxboJVvE2EeTa4fNnFXb1yjE3Tv49CU7uQWQqxawNS1LwnAHmHQ6ofgseGmwoFL9y6U2yLrnykQNUxECEL445",
  "key4": "4nMkgMQHZbD37pvtt7q9jgkpkResPbgwrQ8vUfYA7yv2VwAB87PxbrBWk7xUjhNwDawwMjvZu6MvT6qvDyB9aGQx",
  "key5": "4j3ZwzgzX2eXcp8xfWC75Vecz5LEUixeSVGPKkCLEq8y8cqPFBvD9C54ro4C8CDnfEQcsEEDuvfWpkXKz6YVkyHx",
  "key6": "5yez7MrzXw9AtixEAGxYiPyLeeJ4dJiKdrVYWVxPUcnaTiaTcG9NTaZZ2b91qF69CjW8FqCvtJX4oG6pLsNdMykD",
  "key7": "3ebkyJhXUDn6i8NeE2XNLZ5cMkUqofiMnxRY35X7TkTJVhubJS6B4mGtX9mJ5SG94jWtbt5Nqs2NuX39sP2k2JHz",
  "key8": "3PWkJbF1LxQA1Wd89kePPNnBJgnYfh7ZFVWgu2Ur4ZqZJY7ZWomMCgqZ9UydtEoVSCDYo8KXC9bGNWfwsVvAL9ug",
  "key9": "3YqJfRFjmMsdFNWgH3jHaW5kaiSpuq6VUoZvJk5T7RPy6RPhLb8XfTRbnwkBnssHfthCpqa3durUybAfrk4nG6Q5",
  "key10": "3n2dqq8e2jgypAS6uyRem4EYVMFemm6gquBTCDkgj3UhE2uPMLNuqimjVSCE4gRBjwAJZuZUekF1ycasKjVqxUXW",
  "key11": "2owrmbNnF5EGdHZpLe29yuea9Rfn7CK8qvQ6dqKyr7BauhCuJtFjxBLG7Pa3UCfwvYnkyEU4HPYF99oR5Ub8E8nB",
  "key12": "Mj6PhHLm6toN7zXitg42o4BNscDrYyqHgK8XzNBgFfF9mTWQYugV4pPmjMma1zGE7maGcrxW8cPE9iX6PBVBq5s",
  "key13": "wMeS2U7b98omnXXy7pM1iQMqhpbxEedYS8xM6BePm6qM7y5dxzt3MeopxhKmuVfRMgfYCnKKP4bZUkeqXYLGxUB",
  "key14": "3aNQLESxmy1u2acNapurxTEvfMZjorHo3GU8ULYMMSzLr5aHiZN5diz8V2KMUKxSnBhpMsxPrqv316VnRmoxTUHj",
  "key15": "5daakmyDYdaX7WYsRqDBGpAPwuH9nv8cCcMUfFUGqaPyyDbTjU3rKvVx6U3t7R6BdZT47CfhkMWMyRLGefiQJe7K",
  "key16": "4avGZ5YV5m2rQMxTG1YLc6TkbF7XdMpM35uQ1cDkGS3MVXvK2e5ZMG2kvULxFfpysNk5bShsUzQyupff4YCik4Zj",
  "key17": "3YQm7MxsdiGbGy3etSjhi3aqiUjqYmsek6DAAyE9mZNq1nfZMCYjCJQH2hLfAab9r9SrttCTNoxPHysRizbnkPM7",
  "key18": "3UKuPC5USkEoaMk4YJJXTPYoL3UGdCw6zFfTchFz4XzxxpcVo1QCJUniiPCBMnYrSZ59MHuimQQWFtWWFJy4aYxh",
  "key19": "3uHbxFHa7wVVacXRuNvBsvK5cbzWtsCjELjEBKmmD4oevfQoy73kgSutTaVF54MPXhyz7YYCvgxPjWbAM8ASHiSc",
  "key20": "3293C1bgLkvvECVHkPb17317s9y3s9GWdjtQW3XeoDANcfbUa3EWrqddHoJ5KWofguGVyFUfpEEZzipsoZTNKA1t",
  "key21": "4Auueu6U5jMkJEjhEks9V2ihSEqaYjTDBnHUJuub6g7A9irdt83bwkRWc7dC3cmhRpHkeBnrTXnTAWz34t2TUGpY",
  "key22": "47snqcpxvddjGWvUp8ETG47jdVLuRpEucL2spsFTZo6aRGEbYMowo3jFLBQbM7hJt7kWMSVScb2EJNt12m5YxGPG",
  "key23": "pWU2V6mX3JaEBiw6nxqQ3He6fXrr2cSjFvzivXVYLt1AJMaHszxngcrPKp5r6B46PKsWt7ABMtbyYzTQYvGM3rG",
  "key24": "551iHXfpkhLgbkYGBF6ihSd358QcDHj7boDk9vwNiSiW2VeycZZuf3FuuwjoWCP1a5k59v5J9nCewENRUUpJjNnh",
  "key25": "8jy4gLJviZFz7v6WPGRMj4dL67bfosBzy2WXWvDNzrTm3fy9qBonS5AHHfyCS38jQtUrhU4SNdAdogtqSdfunSW",
  "key26": "5tJvo9pGd7U4XUsT48Q7fyY17s48WR5ExZEQSqnpGvMPDdXSphV5WsL1uSE6vnfps7uxg6u2xkTXHScokaxTEmva",
  "key27": "34DZuNwunG2gpuznHZMhdr1EgVFFiNWmpRyTsM8FPfT8ZU7cTQGm4Xwt9Bx9y6BkZJTZopPkCbTsWBeNmtti3Pib",
  "key28": "5VCryX8oQms874zc5zgmoPzHK3MK9hmSnQrhdBnbKUxr6u4iNsuc19EqGhzqA7qRgQPQiA3FNdbyk1tx4e4Tzo4X",
  "key29": "4QdraGdpucZwcT73QYmuDR4RYmjtPdmVxR62xDxWU5GJyM913EYXRzvjuy3jYk56Lfyy7Nt2c82zFigCdCBvoEsQ",
  "key30": "4txsro9i4NcnBr4UB15c2DtMgGMZVz7LVGwWbjzG9sAPbZnKLDDg26GyxLiNEv1dJSoBKptv1YRJ5vQ9Vdggnfs",
  "key31": "44mAW82oWU8VANKfA6JRE3BZ2iuToUWn9exUZao9yXeFtxewyNooPKkzVQUHk148n3uo2vgeVwiw2oVs2sSN9exa",
  "key32": "2jEhuVZYu1cXhanHtApk1N9cxLFpDJGenamaitVKjaDML7AT2xu3Gf1CCrsWsW8CdfCBh5BZoAp2isR4PQ9C3gHu",
  "key33": "4jJtS9H8HNmexUSFxXpnZoyceeoE6bPM39jjGuDfAR31NQW3YD8qdiZqUpC5YGQm7z9P64YojKAeBX8hRYJb3HTz",
  "key34": "4xp5LxZjmzeHG3SC3ns3rwyGmfLSeUsTWpoPbTAn94UYtndP4oMGKwQu8GdSf2JqvzYsqWaFdHA69EF8c7a2dyQy",
  "key35": "631zBZMjgpekkdwSuxuyoeRdUL1r1CfQyciHKzouZCc1xYQvsxownsMskWYe65p5JFahRKTF8eQGHbYFqabe6bSs",
  "key36": "51mTvVgkhF2CyzVyMiKSvMeanSDQxWFitWR1uFxBMQJY1GfBvedbhLLDSHZADtUmidjXK7DxeC8Zvfb7FEYJ9JYn",
  "key37": "2mekRroThJSbpbET7rdBs9BcmReSocnrn9zPDW7X5k3DpHmsyXj6tE1JJEPsW3x1t3qeL3HQ56X7z7fufuWq88d4",
  "key38": "3y3LtntfgfqWk2bKgsKahdeziJ6xTb8d9MQup3chn1sQZKsbXJ9s4TEabjX7q3QqajnfGR8hAgu7s9LQNSAaNSXk",
  "key39": "uJri8kWSW5MkpExQvnGe53UByHu1KzERkFPEmYPJZUh8KMpyyNaMXCFy4oZKDcMfYihttbW1qYFZruznNbRJ8H8",
  "key40": "3Pcg5QGV3iq13JRw8WRDQdC8yQnpYXSWt7YoXVJC2EV1brxjFh6XPWCj6Vcb9UZoLsRqwsMZSNDpzjuA7V8qkgcW",
  "key41": "2EKN6ADoFg7VXDSSqjYmSfWj3GbXSPdkioKpx5gLhAkeYaEEs4fUQUAqwYCxN3y56nTk2UHCFVK8bqSrHR4dAtVy",
  "key42": "379naheuvDmc9aLbX6JUi5RvJYYwN31FwdpGTdyJ6z4WYLXdmVKxwaprWGiuwz8ZmEpTBnUMcYyDPejybkgiVary",
  "key43": "3r65D22LL3S7rKSzjiGFAaCyBbNKzE6HiT8jQpcYEvX5zgTXwNT9sQigMPfh2c3c6dBZU39fWveZn5NdJEqH5hQi",
  "key44": "3DohVAKEEuUo9DUx7xum5bbBLoiksPtMKZukwrtcaLgwKTfgnCNzKz3JEs2gqjKPksDmgkttaWQoZnVWQ9NdpwXa",
  "key45": "5Jor93bYEo1P6dRgQmeWMhcuLckcnHnxnTGnrxpE5WkqdUSSQGouG55nstdE5KeD3LJ845JGnbdXUdQZjPSfmJ7q",
  "key46": "5MLAbv97dFLqqFMsS9VbuFTu4NnMZ2J7hxrTXroon4wZCRZC1CUjt9mMMDyGmTvvZ5WxuaWWLK4SrWsiyYhkfJKq",
  "key47": "5wDdAfpF7WSMEmex8kQimabLvofWJUWBverCF9VSdEJQbLfoD3K3V71WxgggFy3x73nUmntRXTQXYuhH4pQuX7z5"
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
