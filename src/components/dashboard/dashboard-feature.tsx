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
    "5YSLmDFgNY3Z8K4bYwFrYq1LeEwJYvEAeG8PCerjwYFJMWPKmpRbWWTehdNajjEp4j7y13YSLNBXA7DEGjaZVxnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9heBHjosch5WYVAqfnX3frVNhkGa8uoPHTLJwbKkQbm9acPhYQztCXmBXM5e55e15dtMsxKK3sJ1nnJp8q8RJs",
  "key1": "2krHGMYxyBBesKjGNtbjMyGX3J9ZGE75tCkco738QXxHgLC8R8CEmbVAEwtrkos4dHv5HYHB3Z69YRdFKKUnw4GD",
  "key2": "5JKQFah4Lt5LM4ynLdKXNVbjWrbGSQuhmNWYcDECqNexf6vZHG9VPFAab5i8RUsgzDKtuxdYPSyk11ASWyxn1sQj",
  "key3": "3X4tNmhiWdrdQ2Aaftqu16ujDDKbLqb2gN9Q8S6WzpFjoi5YN7MTmbGecGzFKkjhb8RsdNsjJxjnxxhzooiAmUKX",
  "key4": "2ErRRJ9JDdk6Pqdq3mtuUnXdgwtE3A4fZXRjbn19o5CTTeLc13S6JVPccJofPctnAKyVazdrA2nTYGhrhe2bDCNK",
  "key5": "5LG3AkrGhR1eiCrmgKF6b3XVQSVj5uoBJQA1ZXX7LG8g756ze1wmRpmnD3TpgtwP9wRCXED6965ak8R1GfFWYdd4",
  "key6": "5hfJbNzidUmuSWZXNzgdm4MAUbpNENBmhfhzPxQtr9GC52Wea45nsYiVUKxKUGnd8imkqbZzPxLUMwU3aqr9B3FD",
  "key7": "Nqya7nZEXgPhHtCkFagS1FKdPhFhDWCJNHu6rmRF6WtqMqUV4n9R8cm6m4zM3fbFbfRyCgkXedBcxR1wcoyg5Ev",
  "key8": "4zWi5v7mg4UknS6kFMJwU9XuB6PzPUo9AdabXtRQzW33juAK2gE1gM7E3cwgroeSJ8fGHkRmSQQSJd5YxxaeoatA",
  "key9": "3mHuZUR9LDfw7SaXsQMWimaeZnxpuzgH5s6Qunh31WUS6GfNpi6tQUhuWEieadKVwkVTpPvuZE2FtJmjrJHg3sgY",
  "key10": "5BCanCANReb5i4QxZ2MXG6u2NuMvN5BkGFQSMtTSvmji7KMYoNz9L4NJjKior7su2d6sxyQKDjB3W2QmB95Wtwqv",
  "key11": "KhRu7DbSXPfB173xt32ab6Fhs4SX2RfKbhXBW31rBYgprJex3URLFacRTT7WH3JgYjt3vKFmgvCanqdnL75mkAH",
  "key12": "2qcQMvekjJh5BZr4uNmjm2eUzsh8BQ89bqFBiS3cnGHPgpKbBHVbE4vwXYmaN23W6FzYxnuVrah3uY1JkxZGAXyE",
  "key13": "a8BRZxvg6nxadugGNc6hZVB5zxXBmKLxDSmpyoHujDtEHbYYk97vAcBxBpMN1Gw5JZTwympd6GuZPYn18cauEe7",
  "key14": "2VyTSig53zBHMU2buCJT7hBEfxSHmjQS9nbGv8K74ioZouMXhXMMK1fYXZHPrJNeWQMW4ySQ9pn3tP2v57pTsqzH",
  "key15": "vvKufnmzS3cc1Hw6UC2ZQKrw1amy4U4YvmzsxLebBCbd7aQWNPVqpTJQyXj53ht3RVnaekuckKjkcZMKAodSfMu",
  "key16": "4mPFVFZZaYLp1NvSx249obgCA2SeaBsW5RCyntTMtsJoQWLEj4DPV9jPmCPLH6dNf74ibRsSHdeg9pGWn1HLmcts",
  "key17": "vLnh64dud1tpcVnjini2e5x8vhPo1Emxk8DE45WtHPbAvBnsVYptis6SEA8cVwreguxiPBSe5D6FdiuBJWZa4JQ",
  "key18": "23Sxz1URjwiJfi4i3mrkFC4rg79FWbxxr5hDLSCBufPfJtTvNwrDUA1BxjNj5nreTRf5H8NibgbKAd4e3GgG5SKN",
  "key19": "XhWXKJYCDkuYm15i8JhuPAJxVxwaePMtYYznX32LftyhV5GYDc6LiECzGEp9EQHJE9eAmLcbuothbVE9DUYkXER",
  "key20": "4ieqrH3dhT46QW5AET8zGtkcBVc5Cygy5AohHRaX5hfJmuyo8gzziqHkDPrkK8hFWfHUFwErhwLici7mcyjbVrWS",
  "key21": "2g1E3poCk7cBZnCx2WKzg6nq66MipukNQYxxNok7uS4Cm22ytGRmxfnzfBA1tC7KSjFWxAmubECuzHNUg2f1z7Gp",
  "key22": "4Q31MhrtT9xFkV5JiZZxorhWc7Zc5aDWiaq7CgW42LEF2z2H4mH4HUTPbkin9ogwhKAwDkKQmpXQzwYPmECmQ2ee",
  "key23": "UaoMyqMfW91ouNqEdQ2nCy1SbU7jYZXzoAWArptui6mzP5D7Pskc9qXH6m6XpXj68AJwcX1SHwcpyYn5jCiHp5M",
  "key24": "21kcDb1uF9XR7au8goY426mGkXMgPx8u1CexDYYRzD7VxSPHUPJBrScrqKZrr2W2SdrFLq3e4tgdq1FyqH51h1Ac",
  "key25": "2EPzq58f7UPYvhD3e4MUgRdHFHrP6JhcBRbywVdwDCVpzYdimFT1rS3Jnzoi2rUd9J3TkSVbhZXeey8neUZhQSgZ",
  "key26": "2CysGpHYTaCZDGdsgVLzMeSFX47shkgxFmvjwpoEjuZLrLCbGRKSaNxkZ3WMZTpuCRAEh1eKCNVJhUNGh4mtJWY",
  "key27": "4bPNts8jCdt3enYq9KBmt29c2MkFGVj7itbaEAiWTt47RaACkMRoaHgmACeU5gHfbkpHuWiPuaXesrV2sf9pJDGt",
  "key28": "5qqBx8bdQZbeFx9H87fM34JydEAZ77BE4EZiBodp58wfrkUQ1xzyct3CQZhoCaKCcdxZQ6tUDa51Mhy9ydF8U6zs",
  "key29": "3hQaeSBKCsXZTJA77U6a5HEKgjd5kvXpAADc8kkRzwQ3fXBaSU4rZDRuGq4vfxWtS2kxZ6sbxi2o63AmnL94osDW",
  "key30": "5Y9BmozsVwGa11DUmwKqjXAvqN51HoBpPax63mkXZvrKGtSXiBLJVyYhyEEK93ZKA4juX6H14UYZi2QZyoj2wqXt",
  "key31": "2T6mxPzVsNGiNNniEUJCRKr2LhjXEuBEj2iwFSVgggrDsBP3ALuMrrsudb8NzLiqnyqLnNPmTBBccnPESzCU33Sw",
  "key32": "4qez4qfJASHpY2wQ4CsN8zc5nLKvZDGAniX8QnRCdn2mCMhaEzrA585vcoraXNTjmBxeppU3DiV3mJg7ugWRtBNt",
  "key33": "5c9PVN6iuByS45F1DRyrAG6Gnm4kueRX4rF7QDsmjxnQBmoicmRWw3QR3MRhHzj5mx17nrTFrbqmSXs8rmdkSXw9",
  "key34": "5v7cqpficXCAg4vrPNuDoScauQvP8pttsBme1bbWFtNA1CSD2dXgbmHyKm3EREeKqWCXgks3WGFPeLy5MyvSCK4L",
  "key35": "7uZcfW6u7g7LSNRQ4f3miZNczCYkHJCXf9hqnUAGEASyvGZAUmggqdxjDv9LJM3redsBVTGV7omwmhivpRZG6EU",
  "key36": "2uyyj7QoWNaSvFzHJvD93gQFM4Jhrtr7FbfoE7r7pdkob3FENFBjshZbxC4ERiQCmfuVcnLza61MvAshLEYm4wN8",
  "key37": "3CSbdvk2LDSH69bUVBNZstD3DDB21163jy7WbR5iAqWJhx74hZVCPWaHZaE7Rig4MZYeVnxGXMRjKjARJuN71cFM",
  "key38": "3W8QobYZEAGfVkXBKPn2QruXzYzTehdMTFbZZmpkPCQynby853u41vLVJL8KDEU8xuYkRNLDieXhZ7aHgSEaizFi",
  "key39": "5dMUtVv55yXZU8XV2Xf116gaoPR3hWVeceVGQnQQPvHPx5hX6aQawUPV63BN7NhQU1tRVA7fVKc2T77neMeezX9H",
  "key40": "3w3mEqwHLvdmMfcUFa3NYKMSg6rJpvSVFpu12N6yWkwsBsCFocT2PrzcrefxxMiCFzrLhUSartYaXgptWsawD5Ko",
  "key41": "28D7quVSBsFCNa3U3kC7UvLnPwi7TiZZKUwitrAH39jzkkwP2SUFHDTpkjWQSaivTpip91DxVwKKzVdbvixuaZXR",
  "key42": "5MPd8e4gH4s5LrATFC9GfDu3utn5nTSMagHxf3ZFXjiD11m8F6Zg15o6gTNnxUPvqQCRwceJyvfm3Yq3P8E2J4fi",
  "key43": "56eZssTvUUQ8yDqStjhvhX8AfomUYx4Aznrgv1r44UdQdRVuxiPb5LhSmt6B1Fo1i9QYfQ9fMfjeNFErY6wihs72",
  "key44": "5kr8dRBDXYihkQ8ybbTXqeUM9r25qtAPNUxYq3857qVRebMiwiacNuwfysHheXSX4fhjkpDz2CwG6Bs9FskLLiCt",
  "key45": "61GjHvrBZ8Y2jho4uRhh2eExANCU6iU18p3dReywqoBZDPUxFSi2AvPmpzfLK3iiKBCvp7CAMJeBkVhqkXsNTcL4",
  "key46": "5jvBv88Rh896B4ovR9bqTnRJChTRqPqoSCJBS1kwkSBUGryaqmT2T2s5N2H9rqpSXE6EHuRXN2t5XCjRhfCD9qAv",
  "key47": "2VgwVpFZVVeyjTYHiNa9mMatJiGjDcQupLjmWzkDm7QKgFwi9kQGPLNqbBCYwHRXFWbKekXbXZ7tx6TNUwGgQSWn",
  "key48": "5chdT4gkW3sug97C7JwYWRjnM2X4C9rvHSJ38JLqphuJGrgd3jwskos1HThego7WTAXSw1aaRZtAfRDgs7bVASVy"
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
