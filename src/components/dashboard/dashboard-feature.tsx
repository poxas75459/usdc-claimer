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
    "5RaiPHTioVZz2MymvLecMybJLAf3aZeLXf5qafwU9rg1Z7QjDsbKy29GQvfm5ZnA3LzXKctMtgCoxykLdAf3sE56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yCK325gdxMLtsvhgKYDeHVdABPDTb2jJbmSBXPog2HZKUjKwWJcS5w1pmaqjsL5txm6mz1kzD1EUE61eea1Zd2c",
  "key1": "GMzdPJh8nJXktRNxh4g6qizAWsvK3DReSenQXPg9ZuGxyQe46Di9GnWKEtsn432GMyifEJg6ttoX8dxuMJXMo6V",
  "key2": "4wgfs5jhUivr5G2s8SY98fEyeMShMyhTe5bADzDh5xeYfwkQvdRwWYTS1N9ht3wv1vBn7kpuhANmEYT9NM6Qc4iB",
  "key3": "4mt17Mb4qg521i9G2pqrqc5T6i6KPGJ4rHukm51SeZTxwUGD8yNzDiUmxJ3Fsbp2UX5NkSD5CfnAqyLQQxPXr1F3",
  "key4": "52gS2pk7jmZrSEUCybDX8xUHsfsFzgq2VTfCtvfCZcE1QUJaKthbE96auuQqAkbrbEdwBogv8nxg2KpmPzutnYe2",
  "key5": "3mvyi1VaWhYhvUW6dsx5JDr2hPFXQHK3T6DcmmwYdjaUWnqWRbyqjmkpSNPvyR7TSn48z2XmfmLShcpjWg8XFCRh",
  "key6": "Qxdi7LKFPj6gcDGfG8qBhhfsmQVKPHyr8KaUbyBnbrLt8pBqmvb7VD4SZqoAU2AfuaPbbBzym6UAXYxC4tpmGan",
  "key7": "3e5CCT6ehFyTB77VwH7bGCVcNNfAqDn7mFM5LQJpwnUQb5etwqsuxfMnhJNRJB76RL5KyCTroXJEiNg1hFVGtLGG",
  "key8": "645Tdp7cFzeU2pDTHKaEHFDW46grqekTBGmVuL1RAeMWa8zde6GHa6UJiJFBy25CNZHamGtSZVgezXYhkSC4Eetv",
  "key9": "jrCbzGikLMMhAZcKYrKLJ8c2MFWtGLRTiW21jF8EUnfoSeHDxYU7MZA2TStQQLYaLQ2mVbQsNUtFDZ38ocQK534",
  "key10": "3ArNbhtQr4vKLojdzrL8HE8KnYk5eQUCQnA1vz8MYYTBA89p2secGk5tpq5EPvPekXcrhBB6gKdiwU7T5ryMkVqS",
  "key11": "iN911jQnF2rRFMXwK9bZGMRwfXoKqXBN32gNP6k9yA3S9ikCkxFD2kTbuioC3oHEKMhAoMaYM4koDpFny7F182w",
  "key12": "4zZdXGFFphsnQ9VvcDqfex8Cyo9XMNehELFnW7KujmfHjA8AGoBxgfHWiPsvQSPhDVX62jtHjpHoX9oE7UXbrPbX",
  "key13": "3FtnNQsmso64V3vZnYxazVPzTjhLaJjGLvKFNbqqvgkrHtuThxEJRtjFMa8kr4HMCBJi4dWRy1rhQ8KueUtMX3Vw",
  "key14": "5zZntFUgx51Wm37FN4ijk6ggb4WfqjPZzDskh37fmDdB7hMYfoLkZhpJYTn6AndpnKZsHrqXfJcqbyixS91s55wx",
  "key15": "5xTQD7fZ1QQeSzT5eUkxLiKdXQ7JpN2oYQUeQAC1PdEruNtJnbbuHMf1CoADd81kyWvkK2AgkApq4os3hbwyACc8",
  "key16": "DSh5mtb4FGsGrT7aUqfYHRwAwpbMnUWhiQNPSZGKxx35YwS1cF4JAp1WYPmvcB3ghWcbxEJBvJRMGV7y6ngHiTF",
  "key17": "4UPCD5CW1psZhLLsisztJKYNBiheufUe5bPyuHiD5dpfSRxxHSZN9ykrUh229Muuo7heD3GABMvRnoSGBaNDviUE",
  "key18": "5o2RT8UhzGxTiroHEdBrKBdsAUWDZFq9VWCL27NFhZqu11NiyM11CXL1N3jobUSqFHvS2kEEWv5ou3goU6xkdfQi",
  "key19": "2cv4q5rFxHwd3mgP7v9iy5LHSAb52vkkuDnL7XMRaR9stKn9HqwUAbyjbP74SC3qPqWuFX2Lpe5akaVZZZ942dtq",
  "key20": "3VXWcG9gFEURqguuoHmZtb8BY4DJBk6ro2SFnUeMj52Lxo8QcY8NGXS44QDiPaXxDvY29ZRYese97zy1gu7pkEcn",
  "key21": "3Wm1t5SrSNsTmLMpr1diw3ofATg4zF2JNMRvMrQ2YkDT129MSgJVr1QmQHPr2p7pRdX6aWza9Yawq66qxJV8XP6V",
  "key22": "4geaFBLDRYtDLxDAW54gyHKNtzLjfa8XVNG8mRLzbst7DtY6np9AD8xhh76XGVruz3bAsJfsBr46m9o9n8s37hQg",
  "key23": "2GzXfDU6MHoWCtHeVUUZMM8rwdRroni4jKKKM7TXcEF67krU9Zw8dnAFA1y1rVZpf9KmNxGXebXR5TFLpTN5ddpc",
  "key24": "JjWYgu4PfZcdYEf9eQpQF1JBqHFis5AnJZhaeR93ePXNf4ZqdAQLpqHSUPthvca5fYCdafwJj5rXmNnP7CRtH9T"
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
