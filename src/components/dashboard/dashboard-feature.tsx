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
    "45CUY5NTKDbAAniqDYTsE1WFUxWJgR9kWznbSk4TC7DcxS8sU65M6rH6yoUrYqntHRP8TY7YByUQF8w7o5mNG9fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPmH8AvU2yW7ybEocvBLo21JaLTHV11QYDjrrP8do4rwPb6E4EgHizdxQ66bvaBNcLkiYnaDGhoUghrHhFywNkv",
  "key1": "4iUYB65A6sf4PorA6LmhnThQkj67Kfn7aUYaguZ39tNEJRcFxCTDgRwPpA4uGUak2CwsxZdfjVvW4Sd7vnz5deDn",
  "key2": "64UCfG2uhfdb6fxvBiLz7FzQ9RqvmtWm74hXGhpnHvmgAKhinxnWkrs5UeTuvdaPvAnsPBSV2WvYbcHXCTudRGsx",
  "key3": "3Nex8MPf965bRd5pJ7kdR4G27vSwzehWnN12LVuGzm45NMe1xVRNLSH5CFUZjDTHrHaJw9VETGaLKNkXhCQuueCh",
  "key4": "4BUceEJA6FKkspvnbzu5BgA3X8Q6T3DKRFymU2sNFMa8EKS9Ra329RkAocNRnWUSqtG4gNZyCAKKyzFy3dcF7xBA",
  "key5": "4xEAZCvYYnjPjsS7M4kBnKEhdDGDkdeM9skKHCACJJEKmzkyWJ12749ZqNCHSsQFYyYr5KWVJJ7bYw9VEofyUweP",
  "key6": "3RSAC9knsCe2DadUk2B2Zu7fSRu1excCTwxgnmFGzA6bogc9QHqCvoEW4oSsaGhSuRLqzfge1T1KCeAeWiEVWnwK",
  "key7": "5AYQuA8ZpjzeaedbVwEgHVjafUCd6pP7iFhgPtxWXXHB8RVtbu1d9w7nxKB161vbVDYaTgyiYGcpN75mEVdLyV8a",
  "key8": "dUqEtgkNkQSowhLu5ygLQdrwxRnojt15QM3kiWCYTp14Qc61t7JFkL1UaBzsautFEUX5PVbnDEWjoesx43eK1xG",
  "key9": "4jnDsZt4Sr76N5zxn4HUA5tcHTNG2UPXFFUBPceB2VJYSntNRiPxA21XAinVyPBnSrfyb8A589YRTgmG9A2nxYCD",
  "key10": "3qV2NHdrZ4iezUHXkHn7zBUvX1Y4KxYGC7Aiv5NTmZMkE2ECKF11mbyZYutVo5j3UCKdvqdsMrbBg7FXWrxd5obg",
  "key11": "FHosjraHzagFWK1EgW5gp4B5Vs4wMn3V9T3KRmsHzVpWv9M4DmWoV6q9wVyJh2zy6fZc79RTtsB6cYDhSNcQXjq",
  "key12": "2Sza8jErMug5F4Sov7mrm9GjVsV9dREBmvZhotaXVmodKZgUbuU3k7hmuxEvZDgALfRPeHUsCdEwcE64UXL3FL4U",
  "key13": "311LFK9Fry8VhYQMYDjX2oUdmHP2nj4A7WzYAsR8ZhqpHUnmu4EydD7rVhQMAsUfGBfHdqaTBBJEzoQ2DVSdTjxk",
  "key14": "3s1cUpkc7XuP3EHDfA7veq4KLXV2H5pVfuUTym8Fft75PHJwDVfqSNbXQjsvY58aJxWsucTXvAT99g5DLcoTtAtR",
  "key15": "3yqXaLGKcccfqKNz3AtgRZFcdrQ6aBMNyYndFqCShLNUPaUUL31roHsknVjsdjts8JYjCHywo2eUsaS8wdBmiqS4",
  "key16": "5JB2CRzd6RfXnDRqzefq5sfhdsV6qyiRXFZW7WVNsnasAZ2Ad89xmdfJpdk4Tv6RyiSRUsJVLY2g9T9fHj6cqWuD",
  "key17": "452SyXMJGDcGzEvqXLVTbhuioikVhFmLxhQqLrZu7wUDwmxyP5wTB7p8Wj8bUFfYnBvR1yeE1ZdaWnM9Q9kaRvZB",
  "key18": "4jcw8Cwf98aLqacpBsiAZVmKWaWYXmkvVNx3FVTaSBX2MfvGU4HycfdPaktvth4kgNRtjACaihbwu46jNqHDU3em",
  "key19": "gfQZvZtiXewJZDYFjm2xYEo85qjZFL3hRF2mKj6yfTMqom3edoTR1coVnf7BirRcZhCQUjXENj4EaAj216P157Q",
  "key20": "24DuJPNhYLMhYm7T5oDfLMPQiZC7ugdWy67HXmZSg4XMeg7JhawVDhB144YHUhEdTYLzLWC9bAmaRogY7B8wrcaJ",
  "key21": "3JZDCo9zfTXQhEfsT5xnvPpvJfmXciygPnRmkQtC5TFXDeJAzRswRrF9Nq5CSHHK1m45Hv3Ks6HdDo35S49B1Cfs",
  "key22": "4GNeoX8HyAw2iAWCWYEQyp6pvwxpZMPQ76HoxxayHL1v8AyVBm7Z5rT7ujVMLsJNdJkU5UYso5aSw7Rz8VJEn5u1",
  "key23": "5KJh66wXAW9BzdazDHoB33VM3RCtZeekKtudRoq4FrwwkRVaV63dD8VUfbTCHBmo6dumJFZMWWhEesMSbtT5oFTt",
  "key24": "5ri2VPG7RtKXES6QqCCcD53EECdh3eNfcpyy67M73GqGvNTd27FSrGCtuM5xBNHPDqFJJ4Qf3V8nUBMzfyg7u2o4",
  "key25": "5hJLcx18FJeeKfBLQwpR5ScArj48wmgg7vs2zKghYGHwoHb7QKUsqUJimcjPGyDG7QfSSLvCTZY9bK7vttTuFjk1",
  "key26": "JRt3HGLFaaYho1T9UqguQkpazPnQotMq7YJPZABEfK9NjwkwQ12VnNG3epFQxqcnit3XT1QuV8ttwVPmpgRVALk",
  "key27": "4QwA5gzRaBzdWGoY6NVQtF9gtLHumh3gr9vuNfqE61VoHuwkGf2YxXwipnP89TJiissmd6vAa2kHixwjjxk5Vs21",
  "key28": "3snyaZctwZyPTa9HZYW8QaNjvF42eWojiqsX6sibTibJM4STXE9qDsoGmmyCnNYprGkDHPR75bc2v8SGQtUGqwZJ",
  "key29": "4auAjJRVTAibgFc9ska8xqoJvWDvWeVcm5R1pQp6ns6PKQmB8aArixnybVKmqQyiqN2Q8qgfmS7Kd6iyYkpZiXpU",
  "key30": "2mb4jxT87V9buJgFG8Bc3iUH7noG2T5sxd9exBkNo7Ej8pTobWLRoCW8YDEAM69oe7q7VwZGgHQviMY9WUFhpvhv",
  "key31": "5DCG1hp8wMwQk2JUskBM4cANxortAg3RHDxHvbKWZvaPzX3cf85jJGeBxMJPR2DcXGHmn72KqeEFEW4KfbS15gFd",
  "key32": "37S8t9NZVtGVkzmPLiR3osycrudys6cCaEQPewfp8dyQAjB1L4KLFX53zGAxRSjkSre2AfvyAJMWMSybZQG8M1ah",
  "key33": "4PPQZxRWTqiCiWYVkQ3JTJyDUC73C7nkksJ13bwyDGSXsDNNqJSgryy3tfH9doDFCuE67AMnDtsqpsR3SVccqMXQ",
  "key34": "62kTcrQ4epRwpguPBiPxN89388ASdb7tWFkGuMM5Y5nrV6DNDob1dj9XVaR2Ze6sb6k44LNdYaBACLtUYy3qQSrF",
  "key35": "5CTpzqqd6dxgiUfXXQwaZnP9RFF7dFcB5PtEjuDFMqwUUt2wYJNjtTB2xMZvY4VC2d4K7k4i3eNhqYJHZVbKAx6e",
  "key36": "2D3iwSd6YaNY7ZESSdXngLqJSi5wGohELnUYciqTUu7Byq8pcDJdWeFbeA6Ud8yuxoKx5J8YaK8R4SwFnCdJMFht",
  "key37": "5jhpGN7TQCPZSEaSJQeTrRXP4PuYhE4ZijTrcGhjWiuaf7DDH2vsboehMp6iQg6Ugpt7z11iXvj5Y5pDLkANrQTC",
  "key38": "63medkubowcnRvj3wc16qMrfTT7ME814csGSHsxbsbxewmyb6J7yM7wny1KJs2ekEhNuFt5jS2WZEGa9JhoHgjyj",
  "key39": "2kUNXkR5fUGZiotmEgRoh6zLbWF92JZx5rRDuLekshSLvYnhJpFrf7L3uRH2GKJNJNRZWrAZ5o3yoeLLiafjUNs9",
  "key40": "4CVt5BHbtj8ZXaM6yAmXW8qJwn1FmF9vTC8KdQUoVh9SQ4iqVvHhmjdKhQ4XVDn31cPT9y49x8yw6WUpDysKFpv",
  "key41": "4a25SQQ9z8AqFv3X5Fd3X4ZqwXifGDJX4QnCfFbZi32ch2N8DJpeCjm38pDQ6mAK3uDSmzoTPwPBMwEg8BR9TZ6q",
  "key42": "391sgtaSiFSiQ32e6Q2GoKBkgqR5JfgrGZR7Tz1Nsc2DJmdDqLwzueDKz23FrUBcpgwmWuWGgLrXPPhm8EJnPgqG",
  "key43": "4sEavqoZHVfQAqmzrZzMbY3xyCBoAtpF8KTTPha1WwoiV4VpjmGodGCSoGUD7NufSPcmEs4wDoveMpfnm3Ya4An",
  "key44": "4n18ov8nN2atdAup51vxyjFbEuxKZoxYqEYZjcjEHcCAQjEsHjqy8UJDZiXXdASTc7ERg5Mq6mdNR6bBWEDdRkYc",
  "key45": "zTvvdwApcxm7FJuLAGrHAytjcZ6AMKop8XKPsNuF6RSHyU71S8YUQt7PYZY88RWhGfsx27gKL4BnLMvF7Tujajg",
  "key46": "52cyoVpyMG7NYZC5BnTnfut3575jsvebd6wWsBzUSBk7qVBMxBnxhDJqkoYxs6B92k1pHBdnKNHERyXdWxWD7Jw1"
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
