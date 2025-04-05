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
    "32LgrFyViXz9cdyMggVXhMM2Szsz4psZATUE29Wtac57NhJqfbM4YGo4RZD9VB3G5dKeJpa9z7J2z63Z2xshK6Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uuoHyzMwqUT9GB1XLQQyhPVCL5MQuBXy2fPfg4PrVp5XfLb39NTtJvhonxE5cZ2Gg6PUUtNPg5itZp8ZDAfob7b",
  "key1": "4kM8dZkiwVn3weaej7sLxtJb5TY6UQ95Yk2Y2Wba3mKJUZZRAj1LJ29CyArkwikXi4xq1xH1c9gkQGSrnPDCLBpm",
  "key2": "4xU7bN7B5mWv8T795q3QS5qGnaabwWi5LD3oxSqeo3chwLUKFBCVM3Ceux1cMCYSPPjxDunrPG3ETVP12Zi68gmL",
  "key3": "5J2poDzQvfVF2XRBZSNNsBpYyMEybGJpMyvuf6s6HUWyzKyQJmWgVFPsKGanpE3jyhoPZNpLhYv6fVSV74M8MJTN",
  "key4": "42yTguxnYbtgtsDtcngwSbKJpkrChV3FRbrp8fLUSXRcNHDhKSQ2Z6oQUGoyRUr46LuKsoh8tLTkmog8c2smZrsZ",
  "key5": "5TseXX2M9JeskgSMgi6NXt9NKQaf2xK4U2hwxy7UngfPtJMnrENVCtQHyMywduSugib21LmVqqxbVkZkm7wqcSfR",
  "key6": "4wDMwD1gqRA5Xq25bkjrQcGXM6qs8qiKesNjTnYcjGz4dpqie95c7jmB5zaHtMERVYZ7TJkdCBWxDhiYJxk14aWZ",
  "key7": "4yGezfTY8wsUvwBQ6952Cth5xC4FdTQ3nZLkccbcLZxk2UV8yR3zAWGC2gwChSaPTEh7vudbZXZhzQgwnPUMJe9h",
  "key8": "3wCo9etSt1v2kga5fYvtB38SbiByqw2mn36ewrrik3Z77ULHip34X5KPfQxcvjG3WJydMN4UAB2DxMKjHdmJx2z8",
  "key9": "2z6pjjcbHtmAuMN8aG2edLMKJJ3MPcHHSXTyFrmPDb7vQDt85pBFMi4hdLftLdDFD3BmwyxcN9ALawvp3a8XtCrf",
  "key10": "2DpXmFPbdCTdU8aEMhjqNMt12pXVQzcGiTMjc5sr9i4F1Cr1KqC698etAutViWBJNsdgu9bWygSfN7asPBgF2Wjd",
  "key11": "2qKaq15NwtnZQjudbix7iYiY9MJK8VRJVa5pK5qnzJveYUhLDDsE4WJZttyhcsVPHT7PCLaE7uN1BRQjUqnMXEuz",
  "key12": "2ycA7VH3wkUB735YR3BXGF3s5gwc3QZxxaZ9VGRfqeev3WEhArjDKEbbTTzwoD2j59ZjwJvUD44zsiEwgtb5gWsK",
  "key13": "JAYHuB4rhFywp9SkGsBa51BrAKFg8dszQSeax6xcnE2tc78UtHomZX2pTBtP34QS3QiCKDDHncudvY7v2qE1cJM",
  "key14": "4BHVZLAoWksRct6ztRqAYpMvyy5RkH32ZVRhVUpRAqkXqUsuPbAGFDjuaoswHHrE2VnGKntGJK2TLuAJBfDyBy69",
  "key15": "3bZq4Efm8fwkSGS8uGcAh8G7YXS3UiKeXWSRA1Gyg15fRGfK4AgfD4VBNEqgEtb8Uh97JMXeyyXon27sNBVmysXQ",
  "key16": "32skPb2cAxr4FqdZW4QVyif5HMcNDsY1AwVpM8rRSXNmqnun56eCGJPGMT1eymwMtezan5YEyJxrrEZo8esgLcqB",
  "key17": "2e3vnwdmPbTDc5QjoRzrWktg78Cvs3LBaEtPm2q72CmVZDHjgYEKy6tqD6umowRfQuNVWh3Nn2cvF6NKyJptqHXY",
  "key18": "4ToSp36AtqEW9QnpQuRsMFf2GakPxJcMV6tUAStKh8uvRpehD5V36uVyWnFfTzkdZ6b3KhgADLBTpCa6YxKGu6Vs",
  "key19": "2c3A31JYSKD195sFkEw2HkKoM63sgZsrhGLsBX9TxRcuFSUSkbFT4ESJ1i8X431Gi1CUmMPwh5NaEyT45ifNP1vq",
  "key20": "475E8Kw1DkRtg9XjpfzyZi3631tETmGo39489U3yLnnk1pYbawaVYZnTCjwsQwxcC6Sngrx1odZmQ5XMbE24sDqR",
  "key21": "5rM8gtrqxh4A51dTvL7kabBGB7rBoFPF6JfWS81JKtyuYk1ZkyZRknn7x7Uq3TraFs6iLSnk2S4SoQVx11ib9yqn",
  "key22": "65zPk4Zxpq6R8MLhFWZJ38gLXfZ4hMLPVd8ovMpHaFhaxt1TJjDthBYDkRkJqGxLRgLKCEcigNyMx6DFyTKDaPzM",
  "key23": "5qH94xRAYGLRujQwKCTwTMhiv5gsF4LhBZd6iUxt8wYcsmmcVXJH4SYC6pqzWZGSUAzVeKZVGw6h9BBnGTiDWWuE",
  "key24": "47spgy5ewrzqpPR11CGyud2AwUtWG7E84fHabC5HwoE68quWBEhr9NX1UKBm4efuHSd4rWUc7qw6XNEVEDNjNSg3",
  "key25": "2wxkKBkaKZVriZmFX62WNbKh7dwkWysg9naafqN4BYVBXq9S1ca9qpESeeUdXcGMJ8BBBMLbcdkyZGpE9FCJ9XNT",
  "key26": "5pGZqScP7j9eCLBGshoD4MvZk8rG5zQyUny4CCZP42zToKAGA7uMjA421NTzy7yTjdWAeBBeuH2NR9V5mSB4v1EP",
  "key27": "ZGphSEuJW3AGafeZUV5nysnRJwq8rrg4SFXbX2edXKgg93r7Rfmd8eqhWfuyxpoJBftGHGXW98PYBEL5BxUSLso",
  "key28": "5CagxzhvpQYESJTyMkGXFH6zo5dfa53CS6g3rVapN4U98f7hzeT7J8YXL1dSv4KBQASw6NSRXsapiyBuLpM8VWH1",
  "key29": "4gs5Cy3iYGjRRFWxVhEuGG3hEeMbVQWL9UxLprzq4friXjXDz5ZZSG4PrBmm5o72xqL51x785C8tHsTyogkVgD3Y",
  "key30": "5enW5s7DJzi2wEQjCwTtYgkFozQ7XZGdjojYhNq5U4aF4cNY1Cbgjoo9KaCZoFLpwG4mywnshcXeAfpEABjMY647",
  "key31": "2HecguRsYauUNpqHU5dvAGoWs5AKpqBxyRiCmBDzU6jWz6SnDVNwyRaY9NnMhgk8PjqSr245aoyQkXdTSQvbXZd8",
  "key32": "2M2iDxHJasmJVWdpCtYpEmUGsYK28xiFU6ziXxJnL6UqzeQC5T4qL5YoxnrLgpoyo3PCbtKAm1XSiEsegWsqMMo4",
  "key33": "4FB9Gf36pNHTA2CZuaDxtV8h9ia2Tn11in2Y832YCgaVxSKP6ik4CvpgAt2s1J3NhEd1k9CA6ZWv6U1Lk5sYwVVr",
  "key34": "3kZiP6tfSZj9NN57Uh1ACB9LeC8u9vW4G8LNTNSvnutC8d2BHTzveLijBH9RkKQsqKUyCdaikk7fANzknVzrkbjz",
  "key35": "3m4mR36UB32BS4hJ4icgHQFrfhLKsPsYZrxWNhgN7RgiQXqjUm5Gjtch353acfWQRSLc1ievmMQCn9r2KExWRu9Y",
  "key36": "5mgWqg2xEuyW3mC2CxRkfDdyxXFQumtXkYVyNY6MshSv6BduyCMVsHfRaMb9RRuiT9LbZR5tvb7eYRUzF5u4ZLNy",
  "key37": "idPx5Vgxs3Wwf3bUVLBS4x94fBEAZV5pJH8HuHxa4CtNM3SwDshEK6nNyfBo1LgJwLBjvWaPT5BQRtiRaNy7bXy",
  "key38": "5Vjkn9rjkmLPy95fqbGmHmK95ZZC9iaXRJt2hjRmvb5nfSvfoBxJ3QH65eFTuEAM3cLmdDCiVyn2KzR2VQZnu4RR",
  "key39": "694f2t79At6i9yAvgUC143ZS3GGj3E8seCe7FVFgfFsKS81kBkaSYWWztBjWVwqsWXfLsS4McXYKSfqpowRJvC9",
  "key40": "4wA4hy1bnhiZrwP6ajsnnL4qBNDjC3wPHkY1t2iya8BWqe48e4L3RtF8GRE74xove9ts3ZYknbfW5Qn9oQebySw3",
  "key41": "4i6Y5wScecFLMX8i83yydzFmwfgSKLN99MjTtC53MUi2SkUMtF3uV8kHMtro85uUiytGntvP6ZEK4vnGRMYSYuKJ",
  "key42": "669UpnSSfP1o7mvBayYtBQzsJjpePFWob7EZV1kNiN3n3wf67mfyQGARv3ksZ6oN1cA7gEYWKXA55W35HfWkZmmw"
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
