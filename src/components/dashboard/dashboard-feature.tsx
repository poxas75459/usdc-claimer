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
    "4gBvbGHFYoNGjzr5qrocSGnn8oZSm39HavBY8TQktWVYGv6qiaU5LCf26FBLT38QQbdNUzsSjKEdBCF4EBvMZcaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHMh5F41rQd2b8jfQFHJePsULCddnb3npkotokt8yZdW1ZoK8nvQGGbH1wbE6xs6ujRZzPmgeRnTwEJjpGLQxM1",
  "key1": "mDjbubTsT4hR6RMR1GMjopMLcoL9jjrdcHWsKaQVKAsrq6Pag3KeoUdFihjL8WHBLUpE1Cuqv7deZupJUgh1TYb",
  "key2": "3tMhx85k5nQ5G4n9wg72MNxxQPWoQivjBBXWZfmqY8nqpVMgXeVtV3iRKAtk26UZMphxbuWY3PbV9zisBXpKNova",
  "key3": "4ZBmg9BFB7cBLEtYo1eAJERT2YdwoeYjyqvL6ztpWpfSPCWJsbRaYDh6JxrmU27C3AjE4VMe8H63Pj3Fv9vxdQf6",
  "key4": "5TFUr1mjrjURrdePpn2Edbxk8DdbggSH5f8pbNM6Vpq54ZkE9AUm9iVDGWXnHVx9nnwmWj9nEhTToY4WtBd23une",
  "key5": "rMT5RWfHktBGCghRpWxzYMqsMcFp1m37dV3wM7Ezg6dGJUoEnwAd5y9pUK1kmJvGAHP86PFSxNYCcsZYKiqdXK9",
  "key6": "4NotMP4PDCWpRfpyBFGHFW3pG33rbRJNHBzW3PRBsc14zVjVHowcTXAg1pueg9w17MEQu5v3A5AqMRL8axpz8UkV",
  "key7": "4gbyXt9PsyFXCxxbkS6siPJ9223MphDidcFyREoni7VWTw26mXKPhAxsYffXXpenwW2z5F7BthDh61LEcbUDNTtj",
  "key8": "5jdhNrHa8mv8tnMVS1mkcA7AkhNesDziB5Wwu9XS5aJh7KdjHAQMEVx3y3FWZfNvhk2jN1GTBhHxCssAnpbJKCuu",
  "key9": "4ZnB5X6DYa4PoxJW38DWj2925bFgyrvbGZ2tuHsT6ZAjPWTtRiNfRyp6yWxhVdgS8v4xUq1P8Rp6HTnqgePtWSkA",
  "key10": "DAfhrCZLy8iDaTXFwJaAnPQdSa39VEAVDS7Xr77u8FccwRmf53QweBC2YRiTMofPpEkbKiLsSCF7dydzThRGxEG",
  "key11": "3vv4jSz5GAr9ZcfNEEh1S5uiCtK8ZAyMQUDX4NF5ngiaZmtEcxevseRmHqtugrQhJevJKbZpGowuy4n4Vs1JiMFf",
  "key12": "qwbyyXCpNxLnr8kCBs8kL5uh61ewoenho6kBbRXxTUeR2e9Thvad1fex8LcbdmG3ztuWSdbAyCPLB5HgKJA2owh",
  "key13": "4yejznPhde1tZhfHPAXvUU6JZgdxnJJKfPZ5QckLkKqWrcnjutKiCPZYJPupz3S4hZkRBc4v7BpehBTnv3vq5vzY",
  "key14": "3HdffSpLyisunusrfcrZ8ZGrhkATAvdi277z6EWof1X9zWYqwXQ3LUtHJ7SUnsM8YNVn1PeGeKW65MSH6VbjdGpK",
  "key15": "3zCmeBJqLy6eYkSSURBFJLVDbSUq5XzVqRYhTGmzFY3efGthSLCjrgquGuWiBdK2MZ5Da4CFdyaVQ5YRL8qLjL5D",
  "key16": "TWkGTnRgTWhDKsPKdkfpWa7jsPwzvoPTqJjEPJbVd84JDWFhZvziLSSb4Ge48kexJZ9kdzZxH7mRY8vQeDGaptZ",
  "key17": "4ZPtF3zecMmpuJGzaaXwKXHZwYMALZh3SwUnLdz3rcLNk56aBWzJeC9rfuXnQ2iwxVWaDhShT42ioe32mFYbBJPx",
  "key18": "2MXMA7yuvoKPQn7KdhVwkcbMVVBQYXwdpaYnDhPwDCmGRUGdHit7B47xybPdRj6HUbYugAhVtJ5uShf7TCiuEJS8",
  "key19": "v7MFLqomRfESkgjcRGPaHbS28WadMptCUi2agKMSLr9Z3wUpjMsiSR14Amh4yuiPnkiTpG7h8yKCToVs7UGZeD2",
  "key20": "4XNHDFLraJZsyy9BxDvH1xJfABRgK2HmscvqdLdnAyYHFe9prJe7KLvkAhUCrWoCUtFNMXUmnWfMJDNSWeJ6a9r2",
  "key21": "4Spbw1Y3RzcyWF1yTURVH1WqEeYuEfUyfhNHHW69JcwtUTWvM7Zcr5e7TNUKnRoDn22krQanZ7nmkGyn8jvaWMuu",
  "key22": "3Zg29GrysfGcZXVJRkg5DYznjM9kQMACLdJXNyPXm6iwnLxih6dEuNP9TE7JBLFksMmUKPyCK41TwNXW59WzDo67",
  "key23": "5XUHmGgtNt66L5MGknfgtKiXsdTQJafP5NRvaN6uxk1q47RUVrVJFqgLep6NxtMSnjYgQSvHWoPToyXj2dN1a4kM",
  "key24": "4EB8VrYhaWjnMAdnZY1KyhxiFSUyAWbhvRXt66RpXAsjzyhXmWEAhdd34A6Bb3auLDT5TUnGQaHSqjerRhXEk7o",
  "key25": "2wvE9G1xqRRmuFHs5B3fEUE1WYh9UfCLTy1eefSuDo1n8KFrQhVDmRqQgv3jbD1i8Qew4x4qXAWQLp5N6Up7D948",
  "key26": "5w9E3xR8xLXV6d1dJcqat8hG3z5Gbh4an3RTCdcCrmEgzE3KCZXCgRm1N8cGXBhRBAvut5eVYgJmL35gbD3DVvNy",
  "key27": "2ULkk8FFgvRQSCXhwWp5KUZJz2rymB8Pse8fwVHWrJkjDNVL5UKsyjQzQk22Yo2wXriXSRyQr5ieFNKXPbHRJryv",
  "key28": "4UBeFzKyD1WdVXZzLSHETnkLtyAk6TtgpzBVvggeWXovgphG8NifRKMzBKv4YLSQkMX1BLpc43Qatr18DZXGps62",
  "key29": "3kGPnmxvhdGnbxLZoQogJ6jEk8UfQPWJyp5Yrp9k3WubVpTZvpp8LF7kvCp1mHmHbfJUaSVXUqvZdVgMEywczgNq",
  "key30": "22js8JWsWoob2jBosj1nwhUuu4uLQT2wFoiMXCQZKXU7B9nid6udnTZkrkJSEAgKibk6cbPEqXzC7RNy1mTM25uT",
  "key31": "5ktJ4yG4nzkFsx9CyemKZo1RwYo2uZpihWZkd9iW5NymdkUaEe88zUdBnakpGBVTcBof3tQPWv7KWK8ba9qrkHT9",
  "key32": "3yEMSGpWxwnaYysyghcL1vEyuFq4QYiYmswqozk13DfaoauC5pCgrPTCvkAVHSvtCF831gRBx9GK3G5BabyDDEpT",
  "key33": "578XZ9LpKSpx9UyCgzWzWjcEZeewN8DXxC2qZvEeSy3UAAo5Te1YrGqKX9hCTos98kooc7zapyrYLqK23aLR4YgA",
  "key34": "5B9JSxW175eV1a1HpofTNVSQz56TnRCMWfw365T2YVvCxLcJb7C5btT2yiV9CULnFg2qiNyoqSnRHsPmCXEg6Phb",
  "key35": "3hsfAstw369ow2ykxFkujWp1zrMsXkt7FmqzFKoLyxHE8doHbAPjdtV7tqsKkGW7bZ43Bfu52nUbwV4SP8CQmXwe",
  "key36": "2wsqhkJo77ZJskGWNRBnrsESCQ7bHRMNXExE91LSeyAg6JS9adaYR2aGTyVc3KEVdbwKfz7uw9vQzBQT97gyh153",
  "key37": "2qMskpkoU6cL2fYFdd9SByb45kLEuzUSdTSxMLPufWPsBo5tUUxcsdjwUB7z6gh7x6Jw1XsEATgLx14wL8GV2i4Z",
  "key38": "3mkXQZQEvM1JGP2Np85aYwprULgkHaLd7pUVy8WMcbGy59tLR6BA7CU4J3fjUuPAs5WFGV8ziKdMytZPKGSn79zd",
  "key39": "3g7ddqx3ZGN1zkC7aawag8yDZCZMBXfTeh6sehamfMtgweihqM4S3dSTmuFfJQpqPVVaHoUvhGPFfqTfQsu7soRi",
  "key40": "QMVYL6jnY8TzHCLWv4iPx6yF5UNWPH6EwJRTp2PHyt2QTZLVWDzzp4m6tmn6x6Q6aW7BPk5dWwG2b518bsDTHj9",
  "key41": "4rvwWThzmboFPm55KiLgDseb8Epa9cJLJmQGbmugPr5EH9dxxQQWfuFinazHoJhxK1qLJsFCX7aRCuxbYP7jtgDx",
  "key42": "2j7JhQQps2EP37FLGELcoNRAd52BzUQ15AgNP5ABt5wD4nCsvXjEXcdRxjU4VptZVfBufTXGScXP4Jumr6yZQKFH",
  "key43": "7yJ3RLDcPSygpJKvTXJHUsf6HpxmEmgbvU7dT5A61iUx8u1jbHXQjEmAzhabzEWY6DzP1w8MKSQNeoqDWEx9rL6",
  "key44": "5ZaL8pfZ5K44MhqHG1p52E5nCWVitJ3i1egDt6n7u6cvpLVjGrgSUsaonyAdiGFjqJT4uHHuPPNECT3nYc5KMiMm",
  "key45": "3NhYbhF2uTBtneuWVJdtu717W94GQVkQBLbtYtPBH1Anvsw8sMgTwTG7VXN3rfMJREsTKAgVr9ZpUnhtFdi52qXm",
  "key46": "3yWkP3jhpGGrL8kBWr51abm23WsZ3MfHfbTnuZpqzq8QYCDnnkfSgVXgGmAMFPZ8U4oSHTrjGzqMwc66FTS311NC",
  "key47": "4fQbWwkJukx1uz3XhT1eX31LAUY6e36s213Vzhb8QcNCTetU3y8YtTsrjrrqaFqpNjGqeL3cJJyUGe6BAPEvaMnH",
  "key48": "5Uunf1yTnaoFMaxFMHUSJQJmPkZJpxwWC1T551yvWHpH4m63ABTjMP7svUnsEY1VuCtF6FSYGg2X6K46T7CPygnx"
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
