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
    "52nq5Ve52jDXxuCz6QVRD3rSCt9wfGtHpJybeLeGUgudA3gHy8a39or4F8tdiR592QwD2j77e5AY5rkQgQkgfDoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VznA6MwwQGVeHRLkMkjDvXKoSo4jPZtcVWbBcUrm4YT8VnqGEZZRBF3MFFv29Tve2hdWY5ouMhWoESFk7LMyEu",
  "key1": "5sJoMrAPoPfRrTDVagDjXohdduPZFWeKAUe8vyd4xcphbyxpSj1X8itNhCDRafYiPzhqbbY3F9gyumYg989YjcNM",
  "key2": "3i79sauxhHPk3p5MThAiohmViFkJ98u7AyomDjSP8TQpyvyZC4ybg8FnJYG4EWx4qESHNqvr3Yv5LqDCYcmSbKDk",
  "key3": "5KFDWD2cbwppDjFt5jxT8eHQZPiFUBx66hW65UfURBNaZkrrNeUv7eGua9igcpS9hUm1mSge98VT4pB5aKu78rrM",
  "key4": "3R65wdhLcs13FkpzRrZfB7zNcvT1StqbCAeYMTfn5z96hHAjAk7UMDj9DPY9gViss3ciFm8LA2Qz7NxKkr5nwngJ",
  "key5": "4jDfoAVQ6eDKYeBbP3yE5n6wVFVMJx9EnHMZXDAy4mqAP2cLf7j2zbCkAvNFBUqMnC88daRLv7SCv1GpKT8Wv4za",
  "key6": "Y9ATYiFbAj82QKrHECnt5RgophhosVoTLmMeQKehiXQyrkXRRgchk34Exn2K9NvojY7jceDDLPo7dd61tpB1BVw",
  "key7": "3JNPp9Z3YeGYjh6R5J9asQqJKjqhgh8dn3auDNmnAntV4cnkcQt1pq8RYdvWCTehhhw54ye23XBYLpmQakbJw1Sq",
  "key8": "3BvQDF1AzdgLjMNbtajMVHP9zRHmRdhWoEoagDYANdx5FRwFwAXmQJD68wPoTDk7pUSnr9ejuRkeQDS4YTVQN9Cw",
  "key9": "43yG9g8SUAwRFKrBmCZqgrCVSa86bzyAgWQi6rEkz6ZLxGu95fZvK7g6EEyiabHACEuupRdN1mXtw7Jg4d6FPfyX",
  "key10": "5jAiSJV6QAyJMYBk5FggWeeNnf8zsxAgfFLYCRtUuNbXqy6dtcLL4f8FgE7VzwZ2bcRx3qvJYsZP4YQEwZTTY7gB",
  "key11": "4mCtkNy1m5htjvJ432dJetDzEF7JgeaqdC5Tnv8j88qMEUvQLNeisF3AjbAte2e1F9KtFL5xYpA4ZuJM6LqGmL2x",
  "key12": "5uyNedc5hfo2wMGYwBeWEnevhpizdptzRGBew57UvQLYthgqoYCat9a9NUDgjFQVv2bzQ526M2kmdpM5bSSVYDEP",
  "key13": "Ey5Gj3Ekan5mUKXzcjQkZJoXmNujvBQRWBfw15vdUUnmX3yxwBYAvEhiskWHQ7NvxTpBvMK8hBF5tsNWvt6mQ9W",
  "key14": "4jR6B4FEd7KdMsbHHwBfgjVy9eVhU2UKPJgYV3FDn3SG2xWqUyGdgz1XBoEr7oQCsrjYX5L4kYb9aiw964fG2A3V",
  "key15": "2KmEAt4RJqVvdff6CXRtzxNrzBMHVicfY29xYdmXXz3inRqFFuo2hgHsGLfDvruiH4Zs4Asia7CWf6HgJZtodvA9",
  "key16": "5GxTPdaR1QJQrL4hGJzMwJGupCW2XngVWDFC3sZ7pv4pZdGFqi4bNuvtzCouykYvjVnYnWB56VBsAB8U9gJ5hVyb",
  "key17": "2Y1deU9hYVKcuFv3RiVHqBRaqyRf7YYqcVTigxDV2V6XxQ4DwJG5VXzUdfj6124k8cLNUFTx9jWbpHU6s5xV5Rqn",
  "key18": "35nixvSEq3uLYzrEpXt95HrYmcTnBrZseuM8ZM9aikZ2Hx474gptYqARFnLAtLBbjY9kkaBaGC8MjZPHFfXLGcHV",
  "key19": "MdAhf2YG8gmcwHxxvaEyWxMmQrjz7nVYm9He7qDce6mBM9piWgdu5uMyGi3qydX4XzReGjHiGnFkV4XnXdEiN2A",
  "key20": "4Uwg2NhV4khUaYwA6BCSgPHbPBQCQbFmch7fJvEkXNHJyhvvGhae3GiZVfcP6KVJ2e9S3Qekp99rptxzYGCasMLR",
  "key21": "DDv1z5ZXYr1WPN6g2F17CfWeGtJGqGdUFH7RaRTPNUiPUDXEHBjx72jEkNG45e9GF2fUPEf16kHWwjpnWHU4Wuw",
  "key22": "3yZ3tfzy3mXfG4E8u6KQWJfoiDFSZQp6g6PAFNiVj6LuifdBiJPRAtZtb1sjjZeH6Gbd6H4JeMh3hFP2dsXXYWva",
  "key23": "2aRwqtdG7YMki86zv9BccPTQBmqSpmA9mZcBJehURQRqa5VzVgv9nwNdUN4QKQebDvP4QgXAKcqjRWVYpLBSHFpA",
  "key24": "5diNxW4DgFXJszjSTfEwnLYjy5gGAaw9DuQCR7oLSpYzdteWoqQRBpWceusCRczAHk6bRjxxe2uBLS77m9WJ9e88",
  "key25": "5UMnuxx6WBC2bPEgs5zA9vLH4CFvb7VfXnwEuxyr4CGTMUA8HGdZgivMJv6rMdYX5ysz4nGkASENc78j7Gaz2w7C",
  "key26": "23BUBX7XpySkPJV8Upwj2rDgbS9MaLdvBYanWzbTkW3Gushx34Ncz898UPAm6tCsMZYz1iVMCVg9HiHYRyV5AVuR",
  "key27": "6bgNK1iQLhFV8CUoh4zkBqLce2QvtkipgCD63noVodeY8q2fPYR9oWtLWtumWtaoXyWhgCE2okCzghaVuQUNj2f",
  "key28": "2LHykc5VgJ3tCD1SRfrtKye6mGYQzbEYNtLbojnaZxo6hgR9evTenHmawC1Rh2DcpUHeuKGkNte9p5Bx5NA8wfTh",
  "key29": "Mx8nwNweBJV3DLsq7cSFTqjsGgmBMxkHR66XgBSth25ND2jPAiGFJE8z8AafditGxFejcer39SZNDqzhrrcmKqD",
  "key30": "49a1EcnPyfPpT8LKiHzyUs4hX7j6bdx6cAfHYxeqjRar2hGYVE9BAimZ8MQa6Ddf6V1h73rUZW1AwCqkBtKiFqZ",
  "key31": "2d9QXxVFyquumweCXdPrq7Whm1touzQsMPUmtjwcatCewbenh5tPDK7nt6G1am9ngvsSf6Rh5gqn4MeqBwGNTX1L",
  "key32": "3sro1kaWh6PW2NCTFELYTQSnzzfXP8UTULcNxtdpxSqkLQD7aP8QPQhFHgu2VecHMN6tjoFYweYCkusXHvBGHstP",
  "key33": "2KyU1hxDbjctE6DUt1gtrbDb4Yj9T8E5GnD2nJ2GvR4LGsijYkFiLT2H1mGYg8ZMQbtm9iB1r7C6Zx7K8WuX3eYd",
  "key34": "4edHSw3w4U2PnXfE9sntLVj2KD6jGbEJFFemoSq2PF3qWp6tA2PNJGY6e3QDRzY5NPtfNMBrQvTrq6iopVn7ZBDW",
  "key35": "BMwvXoddBP1L2RWVrbZWa3JcK4eaurooA3Nwm16nbc5L8ckpsC1wznnu1d75yD5JVU6MqcuZCGrhefq8zXRpjMo",
  "key36": "4Xgu7E8W8LZ39eeNikPjag2EMo7QBNwSwPyhEbUwEqhnzDV3GyotJies1MvTKHkuDnuMfTJF2VEFtzWZKp9XsTCu",
  "key37": "2ybGkV6hKTMuZuWGQkftEX2uijXHsKkzdggHAKJz9PA447TsEwWcojSFDLAhEhwxwFk7LGPrppcm81qmLmanWzwo",
  "key38": "4vUVwTDeHcnLH6JqgxoBpqrBzCB4MBwwDVU8xJpTSP8xgozwsbxfPBHrPaKJQ2V4gSYPM2zWz5voeHbeqaztB2xV",
  "key39": "613i6TqzU51Ke6rHPCxzBQWBAxWadKoRDs9Ms5GB9oFizefq1QWoR13Rk5TuGe8R5XGfrG48974mYa9MfPV2Lz7P",
  "key40": "D7Ywx75ddSVmzuLrDKFdhmEo8ev4GVuJFYJGqXMHDhesCJW1vcHb2RXgHeKQpu3wCjV7PZpKRdZe9VVkzzy8tH9",
  "key41": "FesnXo38wvJJcTwg4Ff5cjB4pwgifFsD3sKw6dBYSAgUA1BzVuaQXq9y3DczY9NbPUTea5mu3DXJ2QmqGAVwyU3",
  "key42": "5jJFDPWpVQ5rNU7RUBcQZgJ2T1RWFTkkoMpXRoSN7zUKZ7SdzMwCLDWkxrBYuxMeMAz34xtzutzYefPrMb1iw4EV",
  "key43": "5od9b4ybtsPvcC7UR32GMW7RPiyLKvGuXbAXR47iXzvgnurE84ZdxQnpvEuAEJqxf5Lx8C15wPrtZ8VDACxZKYuw"
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
