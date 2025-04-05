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
    "JM8SVqQXX2vFFTFjjQks8jVtHAZwpGbiqE2BvxhmxTeZ9ftuwDknnht6NWWMu3kStE7vWiH3SSQBcgEdm4Z6a1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNqAtUJryp3fF4EgpndiBFE19Nq8VmFL9HRHWn6ABM11pVGBhMXcxuYXExGxkXQgteUKxPxmFEwB35BKt677mq8",
  "key1": "26PZPcDhQ2fFr66x4SrKrsQyLLRHb5tiUe8C7XeCukgicPqj2pTjEHis2XpCQvAjhik1sWySYbPaqvyxwob8SPzG",
  "key2": "4QTyyPQktuRic76TTCqhcPgvpzNytJiJCjugVejnTiRTQU7ta7cvstG7oC9N824nTo5ZRoFtHCdjFk2s6ZbyXzh5",
  "key3": "B258pAQCZVG3SgKZ3DJA2a8msqqC294dTWWmgt1LkPNX2kaVjZnYszaqjHFXyE8nc8fMRW985G4nzBLHkuBQQn1",
  "key4": "2FLxUk2W1gMALQc3nTHpsWRunoyw7FNkrUeM4gjTFQuRCJnz2kichY7BZJR3FqTgYA3ssb5pthfscaqdxs6Gcc5M",
  "key5": "2cbcs9hZhPq15usAV6KscRWGQsV5NjKbSGnzLCFnx5NbhPcrYLzwN67dmfZZWKN7GjjMAVjYSCRN4Y2RYw71xsLx",
  "key6": "2utg7WqreCzLWEznLR36W3TaTfQEnycmhBbb2VfjXoQ6o32UsGioUcYtmtV65j5m8aVSbaoDdq6S3akEdRVeu9tc",
  "key7": "5W4RhX28JBo1uxCn6MToCWkJixvVdeHKq2f2KwY6tAUV7uUanwd9jm82eSraXHxS2ruHkZdDXb336SyqW1jmBKHG",
  "key8": "57ZQ4YphCE9FpvMNu3TnCkb4Bam4TYQGamJSFxfRegJMXMEacCxAhk7jCqEVbb8HVL1FkNPd9QTi7qX9mwpEJuk5",
  "key9": "65GQe31QECLk5HQyQ2MvHrCip9M9N8rekVc1TELpcWqeSkLwts7HoqyKSfyntLSNDDpN3bEnkEwotj8FAfrHynte",
  "key10": "44V9AfusxKnWXzEhYXMtTnpZGUZiHaicF4phMofgefBqnp21barpojBN7iNFFa641dntndxWk1UCyUXoZoj3fLYq",
  "key11": "2JagsNFjwcq34mNv7hAyEYiZCTnHox4qhLjgk8nZSVF7tFFGwbHaHvtjdFXaJ6ZW1d5GGoeiT1KqJHRG4dw1Y3WS",
  "key12": "4B1hrm9r9LZwZf3Zay2YdqTbBWW1j1nzEVuzmJ3fRoK5NhSffnUdHrWh2xHjaJwbqnRY5FtL2RhADkSqQKJfM1m8",
  "key13": "21VaTvqwyyyckzMR26gxXu2dRFunEEamqgxuCAf1HFFZJ3qWNEimWUnkhQJtkKZe3uzmxEsQCANzWLG87fB1y5jr",
  "key14": "4Pob7dwxap7xhFCQvgHTuL5nPiPmKTjaztKp4d1Y9Z3ULai5RFWgr6PZ1Do8zRnn1oaDn9Xt1x7SjYfDfsGgVzVo",
  "key15": "5YkkBQVHzdud6Zq3XahzLcFA7Tuq3Zz5utJ2TZjBotkqH4xzXDuwEPsRiQTgLPakqYTnG4ch7zbdJy9VTBozAC41",
  "key16": "2T1zGpbRvPdumN98HNP2WNUSZWpnKggpvZhQmY6ejQzcJFXTEi8GTbv9pTtD7TEAiXHK3jUGNMUx6d7EmLHriLxP",
  "key17": "2HeQcSsiJYFFztvCVPuLhRiMYKcCPKgqNZJvqAur56CUsffMogPrwcGgx1YrzSBbRirProSroDLTdEsWiSvPwwaC",
  "key18": "t7ous48frK3Xn9NFD22jh4tW9hD9TKBXEthEYgrfNTJ49iYtuGE6UzSgpGZ8c6JWnYEX2WLGE4hobtvT1d4rnXM",
  "key19": "33eyqLurap2bTL8Qvz7nKXtZ1sU1eGYxVxDKpqa332pWtFXXafQNkoLGHoqQvMtBR1C7YxoyCQAWnWFUzCLmnmt9",
  "key20": "25AWmF556MMGMnkGLoXwpzWhTG94NozocaefJMDaJPCB1vVpURMvwUNDQjuru23e6PvsQYXRdhEWVivd4stLSgfP",
  "key21": "3F4D5WaxsAZFUkkLFTKFvg1pqyGgL3b864cPuXMUmCMNyVxs5hbsBVibkmQioBYyJKdSz5oyX25Rayfog8UUeAgS",
  "key22": "iVwNiUukJTrR853Cfsn3CczcKvdtVJPgQa9E1oLmjEqsdyQWVEhzDeRQFBReqBsfci6E2YaVzKv1mi3K5qRVRci",
  "key23": "3rvXfAe8Y4hL4Ebsm93LUrC4FpbozKNT73LhCTYhaFmVk4MnLhVtNtj6vZXvV4BCZ5L2UrQ29nf1b1db9YJ7HYPn",
  "key24": "2ubKDNUgf7UsxWeSSYhoMTLWog6VWF9gJNRmcrf8TKJsFarUGwovbb6UrPd3cANTf5Bd6m9TnNf9katAuo8sGJuj",
  "key25": "5hWkqxarrsbCAi7XNCrG24uTkTrMj4gpAzN6jMiFk9dSFJquqiKYv8nS9GwMNYm5gxeRuCkRDySBpFDdVqgwqGxV",
  "key26": "4uJjrsU5J7PpdAhS6xJh2pGoXjoHRQdsAkz1drRgmmbbwAbAaCYtuQTdpU3vJpJZrJZ9RfXBYZT1HirvbscvFvtF",
  "key27": "4fuPmP2wjM3VJLFGZhML9ARZEe2V9ZvCfhz6aLFWgLuejN1fYxhxytvKRTznyqJJseMAG2LupUQW9jvQQnD2dmp1",
  "key28": "dXuicMbAkyCFknSUApR7DcCEEvTAfEDwd2TFxruGUoAzg3KpRBJBhfXCEhnyqNmYU3nwNRbHDFwxzyzDxTrs3VG",
  "key29": "4o4EAmCBMWwxm1zNBQ4au2VUnd1wTLApD5g51PdYHoPxjUPE4MsezUVns6ixHgPf49CRRJvHiZuagsi1Pnd7CFdK",
  "key30": "4daqqs4jRV5Paj24q5c13Dj6HvSE7NvoVAwUmcSWezVzm6pVHmZJnLgRfs4pDcR4fwMUjr1wizCwg9bpMg4s3VPf",
  "key31": "3ykdsadtSePC9mYBL6PnNifqs91Y45KMRPvhDc1HW6nKAwtFREhZT4z2VcdPRMPKkKk7gmkWfafLMWYjVvn9kVHN",
  "key32": "3SMUUWfCwGFB4orAGF5nhEFrPMPPTCLypoqVwD64LSaBPXs6LFNQ1jQ6z7xnxBwqfWDNdgVJRmUQjZHmbgcb7VNc",
  "key33": "tYUN2Y5SzNQQS55Ec7tyuMET5f8wQiUMef8Yz8QH41pqGEvPeHXr4AbPW6DKqRvkdQtvkmLquwWr55LbifbBgXq",
  "key34": "4ExRTT9tWid2RyK5zAfX67F94dUFr2tgQDEcYcRDQ6fhZzCkfAZ12mCdLy6uynADjecAh9isyqhJ4oc9zCyVrEK8",
  "key35": "2PGcW6KLewwx7EbjL8ys7efHWiGgRfMVo3FUtSrQAcjtLrrNTuVm5KD3fgfRPKZKSjbenT4zaFdfKSzbsKVJ73FL",
  "key36": "2tZcitBc3fbCuJ3P7vGxiFoYCQBnxPx4hFyyzrZ6gqkRZoCRodsAgCu1ce7n99CEbwNpQqpdBRs11n22oEmFiRfN",
  "key37": "2Ccuxy4mtST2p9AMCaHarydQD44q9ESUbUKQVqpjJskuNw6CQZDUvCqNzWQSJaDcuEiuGKtTjnAPeoxehBunLvTs",
  "key38": "3cB9x2CE9dUSkHdcnodR7wEP9hXY3UCHdrL3EDXrJa3rpuhM13twhHu4xZrmQNNnHNHvm81ddm3WmVhD1SbnT2bh",
  "key39": "4ux9MUb3cuFLtFSzS2rHXNVBW2zpw2Xq9bNzJkx2RhBCTvBjFBLwWCV9HubBdKvujRKBwLN3qJmxKE9e2Qmf8Ewv",
  "key40": "3SjWnkdvXvu9qpDEABYxmq5D2f6wqPPheXBy17CcP6q6Gah5u7wfMEJaj2gB7B2BaWr7qYDYCyyyty4J8ysSSwTM",
  "key41": "3EKT3kjk78S1MwP26VxKQwCGKKJn1LbhxJttSuFMWoAdXg2UpWctbvcSjMuzuCut1vrmAHALqF1axPWY6A9T3CeG",
  "key42": "dmQCxQLe1HLZeUfmFT6E9thy4V9FU61ewd7tz6DiDP4yDwXMJCWEFQv1nuyu3LdjRzn8mf73cvtFTE3xitgnZgn",
  "key43": "2RLGMxGH4smWGRqVmaUVhJuTh8VpokBY2QXouVD7GXN337FrsFwe4nEuZz7Wt1KsDJuXSGV1G95pMcQ2b2vWBvsC",
  "key44": "DY2e1jjtfTWaqUoX4xMnefsKrbbxTEHRA5YZd3CHUtbcmx2Z9a2PNZZwaX7to7crCE81SnXk3Kbywd89so5A6Pv",
  "key45": "3RJ3JMuwFczSmJKnJtTJgSQoqReHkz6GacXiEzi85BmgKHig7V9EgBgEKpuQ7k7ZxRSqvyYYrRBzhaEDvumS1zet",
  "key46": "61Lz5dv8ecWVuE8AmRzFGRQ6xgLc9AUqrroMZuvKFjqiyHKCgzYYtLvhEHCZ535Ejaw6B8eRVE25Ci8E8fcuRVDn"
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
