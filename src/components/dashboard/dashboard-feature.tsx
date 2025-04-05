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
    "52EEJRXxkvpNVDoVLzUTeXgt1vQtr2d9F19f5b8W2Bh5xy8ncuvuhT9uG3T8gL2qbn5QwuHQoqEVx3Q2hGBf2uUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCVbxD2WRuTDdTTti39imrE1tWW5gu44dP9rRVJ4pbkiEKmeNsSJzXJBXCfxyA9jGiPJjr2VC1VcSQ1XUeNSVLP",
  "key1": "56mHDtRrD6hNLmjnCNJxjamAZp2KyewyMSA4ME5Loh1yfWVLfU5Y1axrwAU513sdfiAutgH7HADC8VVEBozDJVw3",
  "key2": "4N8pDH78d1J6efEoFAcaa97rY28LodaYTc4mTXKWADRfmJACLAHUmDVFp3Z69hv1eCH6KiEo9HSarB1o1CFoGfuA",
  "key3": "2Ky8qnySbACMBDAzAs6ys8xi4jxqGgqEDKm81ws5LwghsocJBozNe1b8cgRnudMTrJNZr1aLi56H9U8okivo3CNy",
  "key4": "kTjm7jp4V14bNq7psAxL6q56KbJh9dwBJWFTJ67FPsVv6vboRhGgHie3QSybRtt7keJ28vtnNueEzCzJqmJci4C",
  "key5": "42xMrsum7ve8yNNyMjuVecxxX3q3abSLZbvZ84Fx5FF2g53VsurLsU2JhrCuqnawNY8RGeWw7DGVdZ7dTs3kXM1t",
  "key6": "2rSHBA8mCxCiW7s4wGqXwTQigBJpGxVq34RYWbRiEjLFizzsbC9j4rFzbKXJEB7tvPWpUmC95vbibwQiSF3i9JzM",
  "key7": "3TemTheeRJRZfGuvHTVQA1CarUf7HZgCoXf65eMUU9YYFzU5CYDpkedisEHjXYGqNSwLFftF5HXy2rRB6hcFJkmo",
  "key8": "3JnrtfDNosVSTJbyN8qAnqBgx5jkZwhTYjmJ3MSpsd53aZQPmPhjGg7TP5pwU5NfFBswtmJ44sNpwsptXNuUe9dk",
  "key9": "2JqyGXYMT9Q97ZnrvtJipVyD1etsbwVS6WSN2EHfCmBo7D4vF7HUyBLx3LxgoP8rDxepHWVaRzTfLW2DoRcBBcwM",
  "key10": "5xLvJ4iW3WkXZ2mGwg6ogXQGiwzigfa161p8kQfMXZNEjtizx1jMbsSdJ3F2CXUrxxYVkbSsgzDLeDxZTuvaatv8",
  "key11": "5hcGgu2W6pQvG8nCDJiNshTaFiQm7jcVyDuazNSKSQRtBDcy6rPnEjS9nyL2BpV47e7Gz94v7NbxaHiy8LCLVydB",
  "key12": "3hAkuSkGAz6ZyQbTWYwSytXxy83PfyAEw5C9MYYmtsf7sssFEeLsoXcyimtdwVJgpL7U2E9FTYsqCfQKtqeHB6XG",
  "key13": "4M58ZDyZ8FrKE6QAkQiSKsz2Fpv1NWXu57LhLvNDyztdLsmZ3Ct5WzKDDK2G3KB25vBom2QGA3uYoHLkGHe3mu3h",
  "key14": "5MR5A2mYXZsSzmv62KZgLMJxCyg4drDHyy5tL1Q9yCv5ux3viTxYVMPfzTN24MWDuchSjnk6kasYe1B5ep4munCF",
  "key15": "5d557MwV1vwunAxfrSGmnxZkyfQygShxEGxRyaMHWN6uQ2SWS55T9GjA5dkRm65tZxJQi5fSj7gedawXyKqSW5zr",
  "key16": "5DovdDYcvJhzvgAZLGMhcaLqLU1coXDxQtma3ddin8smAahN3wmVMZpCmP2J8kjk6vAqFkyxTwTzbsQpxt7XtZrb",
  "key17": "5fCpKg46YCoVmdmnkv5VDTDz5CRjwJTat5aovM5dbUbJU3nXRZuVp4fCudKd5oZqMu65gkb7zLZLk9kqaYHPNHow",
  "key18": "7VmFfR8zJqg31S54KiNw1WNvEQjQ2wY4vASvKktTMeekrAQ6KDmjLm67fTnWZDbHwUeMJmBqFrihjDU2B1xyjC1",
  "key19": "3mXMwTxJCcjn532inZjjpDbtHM4dqWiQzZ7S76NEE4YS7mgBPpNZUndKYsV6DjQ2pbkeUmEs9peDUzonHvgE1bUV",
  "key20": "3r6vBjfqh6QjbNFFcyE1y77VygX7UYDoNmLyGM6bsAj223equXQ5sT7KxZY18AYFiQ1xZYXBu5Z4V7pytcwyPSLw",
  "key21": "5J4unvB3FsiLu3Tr97j7qDkPG1ELK7JGc7dHdDBDwNaaRku8d2RBQAQoyhGrtGtRfL2y9ii2y3QNBRWSj5jv8hoA",
  "key22": "3CxA9oqkjFHpLcqxaDh3vwGHS7ujZ8vDnTWf36rh6E8GHup49oQK4pz9W8XAt8NsjP3AUKsUqkcixEE5q3vJR3WN",
  "key23": "3onwWhERZwzWfr6ZkpE8J8vsGjdPWSNzBYa8BEXk5rqznJEkA1pf8MPqDxcwc289UbTUNG7Kd44fhaCs5sdRGdUd",
  "key24": "M8wfBR5p7BwjhGK6nhrJEYjgy3DtYjqMCwxTxeEV7vvh1tDxAawc83quWVbfNimVxQcis7mHeAY4tovzxyXPQGt",
  "key25": "4L42mUFym2pA8y8zwviHoKTzH1YH1M1HW83uMBfqMpgxwzR1qEmK4qrRCDBqmNAEGeVHrAToKqNbZ8CJwjFXSxgV",
  "key26": "3Rxn548DXBB8YeEmc8TVVYjGun5iUyKSCNWwXd5oa3776BB1xLitCXcy2KUhRdzAjxVtxvKCt9RwuxAuZhVcYEoa",
  "key27": "Sx2eAFeZqSTtNoftfStVoDwU675Vvzm7B5woRjSAUWFXvzvNUStoKmg1EyXK32Gmg3EKUJfzYWGkaXYpvsRyvYm",
  "key28": "2JkmNwtEuERHzcj6yFwpDRaRYERMFhx4pbrPLkVbgN9JTTZTbo6RAinZKaLzidhXA7r2VJkCukYf8y7aLGUnupCk",
  "key29": "sgWZHdp2T2ahrNux8qFkE9vyhrsvFMKZEUvjU8czp1Ju3EhJYs1DRhbqkL6oqgNF4eWbL4mBDspuSARatrU8KPA",
  "key30": "Bj3f4tXjbGJBQV4TAmnkCKd3NHLvbxHhpa9UdiP4j1zr8UJve6AMF9xcXp7gw6D3Pe5rxM6fPrSXjJutKnTmtze",
  "key31": "DuqWUE3QBgxhpihZ7jxrSvC8sY1itYrNyx2ScH9Wjga8yx7HkbNcSHgCfTbVeJ9ATH814eHSbFVxz56KPNMFWZ1",
  "key32": "38f4aFKmBzBYYBa6k9PodRBa2hg9FCFBbuQup4rbXYGcLb6Z4LFtutF2fUhXymyL9zVKb7sE7UDKwery5Yba7nmv"
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
