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
    "ESwYYFV4Tr2Gv6FoAHEVw9c3XXQM6xe4W2N5jsPTvn2ByjvSvCgQyRPtuUAHWoR4orxmBcck3nJELKhgfMmzXjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y4iFvx11qgCicGscTox8pPsigPo7HHAxmMce1EEc5jpgj7ywHStwqpM4mEJq4oxpAeMMVtRSMkCfw3USkKWobsE",
  "key1": "2yTX2dWFHqBnAfaSU6UZdtpKh3REhhYMqnyRzy3i58qTTptWSqeaGEV67HFKjBHqhkETUikDP89da1BxyVxposgz",
  "key2": "5GPTbFiKVFaEF2GMMSxFHqKLRvbDCuLW2xyYs8PJv3A5YtBDXe3NhxZCGMuzNrb9KqgBhNX8eF4P1c7T9kqHkbMu",
  "key3": "SYFuKtsoDEvVT4CB6XtfgJ6EmQb2jZiQdobjt3W5UJW7BwBZEY9GUbwRgiZknNsVocfn7vbaqPYQSPZDohdYGrN",
  "key4": "2wK1QxywpEeuAe8dsx78xyXX2HAvLCPMx46S2qW355DCR9dQHiimkMkg3HNFibPeai8FLobELzZV6cgvCGdwGyk6",
  "key5": "57tRBQZ8cFRZREZM3bGWkpsYoMihacLxFyHWEhqiJpZM4oWMxGiP7mbvq41bRTDnwdxmj614hEKCfAVKBc8CMc2u",
  "key6": "54m4XXtRzphEbrXLsXnMV9fQDLQmh7E11Z5RihQM7uhfEF7bpWNJBiY1gsuZCQ1g4c9n16r6s5TMJCxYmHahA8R",
  "key7": "mAtFy8D92q8Qn6XrLL9A5JgmLpG6mDx7ucXsTceneYQrDcv9pCRYmRJLC3ERSFVpL9Jaw8tvcdp5BXeJo1vqeLX",
  "key8": "Zgm6YtmPmEaEGs844h6thZnFCAjiDAf6Cnwk3oqpExHM2waEYyP1s99gZAW6fwwmBMejWbRysypzNufHxySPhhQ",
  "key9": "2D5Z8xxCzbXVmxe7LWgCQ9MHThxHpWsPDYo4UvgN6A7zKwWQ27HTkrUf17yZGHnwuTbCkug2NDK6osjzVtYsHEfj",
  "key10": "4HRZFiLRYAaipBVVk3g4pnUkCLgqtN3cQKby86mdZf3ZqNUS798ineeUQciVummMnVHYmjgKbU6krtrW1Su2ZTH7",
  "key11": "34awy2Wef4pJtdFKUgLXDXMCamPPX92zsGv5sfGgeNDdxC54B5sdbpM6TJAF6FkY2rHcNdnUoHeSsvjmBK12pMN1",
  "key12": "4AC59dd8bthtnEu5DT2dehvu8VovwDqug4WHPfyrpyATcFCN5fUicw9wbCPg78ezn89GhZNR41LzknWW4WXco9JQ",
  "key13": "2gjE9t3vVt6DT6k7ybCCY9xYPm2r6Yj6AvaEfvEb4qGA1en29WSejcgXvShxCy2MYuTFwMCCvnViAua34xndy3Ek",
  "key14": "5oowFvJYr16w4omVa3PXeUXueLbnscVCoPModwtySNN2R1Ppm4mVBzv9FfRsTxrRWApE4jRkM6JyeHYPPnDwCXsL",
  "key15": "2thz6WJG1vRYfAtMZLyEi1TtjpZBZhjN2w4JiKiEC2iWoann7P2PYcitTeWkZ5fJ4ZNczZuYZHGfMJrSFxr7Mc1U",
  "key16": "pBame2VtaN8A8Z7AJ7mnEX9jsQAtBfmkHy93psrt7b3DxdPsEgs9aFqRVmSQDWxphcUrzNQLuomFtAic53wnwRW",
  "key17": "4efXRKPGAkR1JPZPrfQoYfWMXegZEeYxBBtkBNbcWEtAswWem2Va3gUMVTwQMo3qkRhobkYzES4QdDRppM1i9yjU",
  "key18": "2Ck7KGrHSTgBRUEfU1sWJsNnsM9fxqWQDmbWZqjDMt21ZFNLFSwZ5wotxHnkBeYeRkUaK2WPrjrsWcivgVyzwBGU",
  "key19": "4B6wzfAgYHZUtmJ6DEcwmRX8zxj3h1H8jtPCrs2N8xfCmV7VwEykW2tEhScz36AUFkigJA8Z7QpEQGGw8gWXysb2",
  "key20": "5ERVzZ4EKH15WDimjhH6HfB6wwaDRjhJVGJuPPHbVKXCsoquyRtjTQgkgrHoziG9ykN5ge2S8nZsknH7JsekiECQ",
  "key21": "3UZN9hqVNk6c1KUZiihMwNYAG9DQheaeaDBwfXUFdfJiiT8PoC23DpaB3U14S54VhVLGhW3fPXRx9LkSq1mhbGSh",
  "key22": "KkQoJwc6EryzKmSbZr4vJmu4pYTiD6AqCnrXsyUYV1941uP4ocvT8ZvF4KsAxxeC4FSko6vviVNNg7zxQeUG7Y7",
  "key23": "9e8CWDZzcrzGRDAPbTZduAJFH73HtfwdxwiaQYLS6vekMpDeTenFM2Pi6itiKinak6CXV8yJcSbZiJ7Rnqg9uCp",
  "key24": "469yJA6KcLZtdQCcdDcwBw5pm5acHrPpKPzjxorhaAySNjRtwjvj8j1UGjKCa2tWdDerJt7PtLDoqBaA4a6SLhqs",
  "key25": "5oKhdTVrrZBnE95bP5FMXxnrDw18tE8g2bcMD4hG78bweSMvY9Ut2DUq7RNZEJyxbApv1eSEuZoGNwkoJ7KFYuGN",
  "key26": "35jAYJpUTKJiaqVdQXMW9ZbiJHfFxXuRsu62RsLZXM7KKkUSYXA9idqYW4g4J2bb9aSMUGbG4s82wjs7tMA4Fx21",
  "key27": "42gYaoXig2MXjZh3fFXSBmLTcDG33ownZHcU4BSQ5wNTxHdC2QcECwvL48vZr6sPDZH5eB1j3WPEKSRAXfAzZFJf",
  "key28": "2SF9h2gC5rgX25hsJs12Mz7ys3RGsgtEV6n2SP5Es64dth1jVyu3o1tgjBvhDgRB45Z1PMxgjNhpqpBRyfgCr9sy",
  "key29": "2HrWJy3bZz9K3W254G98gA9yMNQxx7BA5NtLQF97qs2yNBsCcxzM1vZDXodzRX4nTexfkKxEJCNAz2JwsucNwGi1",
  "key30": "4EQt1ZZkdqrDsQBDCY2zjUyHWyC6XGeiGDtV2q2iAZxKZHtHq8g9xT1js8aQrixVRyiBegsu9KnnNzNDfppoMmT6",
  "key31": "4zuq9HKEvfzPZHjjLdDb2EW7rWQcH1KMjyJxvZ4ergPsdG2GEAvXeXukytCDwEpsDCJhnwW4gFASNQAjjY2e8FLA",
  "key32": "8WopRxMpfY1jVhZZdzZVTyPS9kq4QTyTS7nRgFJD2qhr429DDcKSV4ayWWT7Q2bm3mFWCRy7CUC84GmhxgK7SSm",
  "key33": "2CaTuKBz4DPsvpcV22F6Kjcicf6YxmwsXZJ6PgaM8aXFNAEU1uPqMVnmmVHJBKbWf5yw8fcWNgR1qJGGKx84cYbb",
  "key34": "5FkYFD4RPAzCLEgLi5UcJusA6Kh9ryCEDQRieU1eet64YNVEZvAdKHEKEWGH5YonWbtF16wkQYorbTfrSrZuRXZS",
  "key35": "ydwjdUA6iKDChdBQ7WjY2ifCHbXonTJumLMPRvdTs4CC8Q5q2CRjukny7FCaYUDsSuL8A2NxApyWg2SYrbK7Gr7",
  "key36": "RckeEauDjrr3c9pnM9VxGMVKm8SBSsWX3qvmJUNX7onRdB31n6DDnm77eRfe4cneTFD8QfTUzrASQ2wzcr6eVdC"
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
