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
    "5C7CF6kLJqL563yTAod6wvraLT53XP1ar9EzvPukRy6EHL4G6mAsfKgsYjXDmS95k6he5bPzNMVotYXeTB2i5tTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKUestwxpKjD8zvPoK9ZFv2yk9ZpPavyTZXdihNmSezTp2kRbSFqjgaAAqbY7ZSQBdmTbof7YR6wQDAog6Ltjgc",
  "key1": "5APj7TE6bUrSTCpPLXLHAtjqzSEwuQorgwaewF93Rpeao8BsdeH1FqbotWKX55kvj7gmYVfeoDN78VCJZkMAmiQq",
  "key2": "3AUDWNARh4YjU2Zih9dcdPsYNYJg5vMwyJJcfniGhYqzJKkJQiNvom9VNbM1UepDn68mCsmVsU8GkzzYsjyTDcn3",
  "key3": "brvmVrAHSeqvV9UiBszTRF91qKbYvQLmdKrjdQ2mZhRSZgg7xELobmgJdZuM5i98DYpdnm9Rng8Fy2CmkMi4FQs",
  "key4": "216YjmNd4NvyGA2mNNeufp9wmFMEtXfdMqxeKMBYGqoWYD8NfQbEaLGNV21HiWSymFHyPb3KpJao2ni5CD767EyD",
  "key5": "nXsFaixVGNGaK5Uk6pZvJRpVPK9KqCPNY1ouLofQbXXosGa8RKkeLTqQ4sD3L9fduJXpHZSb93N9yhRhG6QyN8W",
  "key6": "2yKZxmpgVLLQPt4x6qJMkFSP7CpoJPLxgi5RyP9RRDs96S44Sjz8Bv8gmyDdx8vGJJ9zA2qUyD4hYu9FFdNPQosb",
  "key7": "2DFxH5FuF6QZ7jtZ9YJwafgCiXtrwzH5RohdvTJTADa66qpzYsCtmmpNGd6mfmyb1QxjABWeB1zSuQM4Sd3xUR9r",
  "key8": "419dzfzSfkj8rpbZVP1w2RhThJ4MpzsLgHJXLixEPSNiyk8PS2JCxvjiaeyKzsGfD1KFXSqhgfju2sGJtq81XJVQ",
  "key9": "55Ad8wNVHcW8X3J6YKczM3pLkE7JH5Eg2BQp8zgX7JoUaq8wExrRNFLQrj25d35nTTHJXhNZTwaeQNVxQJGLjHt8",
  "key10": "3Fv8SYsVQ2KYm5UFkaUoMNBjCeCubo4Aj6voHEMdf5CQWWFvAL9DGRt26SnLHhr9pQ1jwG4YDHCF91JgRKQjmu8Y",
  "key11": "5z2XojHRmgFNYkeAji6gETCWZZzjirQUaU7G5daKdEtcCy1wXSF4GxxxGTLK4mryDaoqE5aFmjRMwQ9f2cug6ZDH",
  "key12": "2hTggeshMWjhiZjgfGULpWMKsWctYoT2RNJPCfsDmQAUMk3WG5jSfhUhrHg7v1A9pz6f1q1pBPMtcKn4S3SK4i76",
  "key13": "63apNPYvc8LT213wFAzfKsrcKrfVdRgvHupVXU2XWdB3nWmzKpQhDTk8w77bCMZkTw7UESHYHjo4GvvWtiSAPSCs",
  "key14": "2e5yUakRD85JpFQmytzGFmQPnpe6Qj5XYAgPLVH84geeM1XTRYpd45exfy3gk2h6vQEyT76kftE6MrkiH6XWjAfr",
  "key15": "59he9FgDZxMpRcT5w3TnK4VPNcnnHqhjpsDgqQnXBsWnfYTUv4JSkuFtdwznmjeTtmWXAuVTjfWzS4R2azKZSfT2",
  "key16": "3cEwqi9XvUpzeccnDVRcSNngQAm1TMa379xTDhNwkviQuQMc6XeBdTG6oGWiKQebQucPb9Vff3FBWP9QHr6aur91",
  "key17": "8rCwq5jUzJnBLRR8Ns8v214rj3pHRQYvUxDsLW9cwGN67icnQXkBs8NLMfB9p5QkXZWiUi1NvfTf7N8NPVbczkR",
  "key18": "penKzUxGtJQSLtBZU4jPoLAtQLHfZnsQd4dHG6AxDLedbY9egzGaRw2iKZfbhjLVyvdrCJLAuXgXVvraXMNwZYc",
  "key19": "3yxj7WRYXiGZBzAmAAss7eNw1ZzBCcwJczcHH5uCXBwKwdanUKLaqXs3mw8pjPgMd4YoSsNcxzZCoG9vxq78EDc7",
  "key20": "t8jLNx93Kp4F57Z5stjcNfk3fda75Qa9APQ7iZezacQp1egNEa8Vz6BYdx5DWpaCNPjtHvGczhJSBdgi6kcXwXk",
  "key21": "3DkeEe8UmNXLtRzAua1FAK8Wq4NdRg2fcAJtKSBArrQ23prFyaiTuY9Ks5RNLHEgrhRwKDk8qhzbE3a5xiQuwKK4",
  "key22": "2ei3UkFbkrC1Kodjv2KtmigkzH7qhW7XcfVqmrYWTS4b4XfLc7E4Khfc6zFazvrfMCT1X8iw2vJFE9coMV3PAgbh",
  "key23": "4TuSSH7FxLEyJQP1Tv2cqGGTiNgwuxx1qsELPYjvGySnwTXiVYeJpnMjgUaZPYx6N2VroaXSW8xitQhCkahdstZy",
  "key24": "4GUVYQVFiY8URrggdMVKJy8ecn8nf2AvTrdq85Jzu1fJhKuzzaHvmjWmU5oy7EufteWbvWmvwv6o9oLeVv8fujVG",
  "key25": "uh4MQm41dTQyeYCTJNasfcCQUxGVQzJyjJhDuUKwzFR4spdE9RNEZKnXa5fpZkv47TXUypaWnULkUFay9AdkHDr",
  "key26": "5jnviw6CBjFSKWJKrQ682gJywEZ5D3pVKwKd3wMpEFoDNNj561CWs4c2jZcM6KdaZ1exr2sXqZqKRU3JidhGZFqC",
  "key27": "3K2wfytw3uLVzvgrNCsfa1o5PJ9VkADW3QQkm31RJnDf9wrsN6gciDDoT5kJFZLxZh8SvNXsmnb6DgqEUTxnwkfB",
  "key28": "2Pq32SfjEWmnqPgT4CHqkXkfdE81FXwjBSJzqKaWNYrnvSpBhKvo6zsjtSXT3QhRE3mKonVq3KrSeQhDnKCTea29",
  "key29": "tTsA1T7Tp5c4h1eWtoGTDkFTLYBNat4Boa1uyxxmuqVGUUouENCPo8qAVnCEaffCSSYju1zLt1UV4NTPekqphny",
  "key30": "CvJgf9vKBen74Fe3h34D6Jc3JkdPzE5zet8MXvnNQnFhtxF61VA8oP8G5aXMboVKh3CdpnMe86Gkt4xacU9H8y4",
  "key31": "VjyBsxuJryCDwaDRADy7hrrfvCvDGLPhrsjhSqzaKsxyWQ9LCc7bPZg84iBpnWiDkkQrB29AzMrDhf8EuK9CRto",
  "key32": "5RetjX6SyYEnLagnWTohfV2msorWyzbmb7wqSFc2hF3X438forhYWQXkymWUQ2waUemtgaNEoKfcRVn418RZu4w7"
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
