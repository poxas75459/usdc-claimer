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
    "5nfPnxBEsxPatSaF6N97PSx8e7KjFGoxp4HLmRqFcRnTueeUxBs2H5hn7mBmDEJYNYxz8HZTYpeqd62YbeyGCCD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNzBodfi5T5Wj9dyDfxRL9m5XdwChcA51QW96YV4gDyG9Z8bi42ggadqQ7QmKtCbMtLnXqafzpfkwtZkyvJ6zdS",
  "key1": "3LdfYjRvode4ThbkyS3HbphrsXyRZgi3qRRSzLeq2Yh3ue7mJPJfheKJCAWfrwz993x1xKMw9prbnf2Xkg5n1koK",
  "key2": "igHiNTjafVcFhXtyFiLXEoGAbZbu7NftcdazmWFVczNpZqvDL9Gcz7cfM8EdkEuCjidbiiBW1WfdHE4EfgXWNAy",
  "key3": "2nxBngpZcV2SzcdUHwhou66Bm18wHwLeHkVSFDoHkrsX3P7KY6Q7HyZANiVn3e8qxBeSkWgm6m6nHSVZHTPnWSDF",
  "key4": "3iui4LZgRgnmCaTETDbjj8dhKWMi4vQhJKWHV6MeLbswaVmXjbqTkW2pfbRkrbtiFyWBfb9Tq1EZpRAmQ3fd28dP",
  "key5": "5Tas9XdRponcm9ks14RJVsrSszqr97wqAQ2d8yhTBwgir6oqyHT1Cb6kJ6LCQD82wCKvhSVnax899c4CH3wPNsrC",
  "key6": "tsx68gXdt8CoP7GiaRXdziGUaSCpkP3eZhyQgnh1mUCunvSbqWJjxShNC1RWUvtRagV4edF6D9CcseM2TSNrTVu",
  "key7": "33w2g98wc6qeTNhFQjDBmCkByNauXvizpV5g9y6FSJUvgyxm4bzJy8LqfuF8miYVRRqSWccte9Mi5fJsJSZ5H4qY",
  "key8": "5vd7P63sre5ZqeuGeLxcrmJ5NgG274ad8Qdxt8FT43uTRjPGJYgzzYuBqV8Mh8CZsYxuCz2mRV6U5w7JEnV4KfD2",
  "key9": "4bjvhPW3Vrjy8Le4U5qWxf5njyce8ueR5wjN1YFW7XNgjAHTdQwh6bpivYHQqkXNATLa2Eo2uQLxcJS7kf8Eu5Wx",
  "key10": "2YHY1BDGMyXTQACmtAe8ZAEKNtFFoPEPwCtcvhuevPERKHBrqgVgmqQPxEfnrf6QyDbuj9u9nLvCckEMuksgbGKT",
  "key11": "qCyT9XSmapnT5VdWpvAZMtfvMvrmGEuwdoyLbFhpu28gRSaGWNsEqHJf4eHij6iv23ND4Digkmx1i9VYyKTNjFq",
  "key12": "F28eURbKS6nyJYJdGK4dgQRt9RjgZ5yMVWCmcyRFZwB2BWr5Jb6QkoYRd28rifnVbTmXYJDP1tGpDVnzcndECGe",
  "key13": "3z2ZmbieAScDkiwNu1NiENfmDbs9VZzWxVuUCK5wkLpAibkhxVpCGqiSyoB1rNSFqSE51nPfK6YegDhv3L8L5ZzB",
  "key14": "5yc4zss5aQeao9RU4LT3smgpC7Ja2jr7Lfq645RZAuQC3MfjYD6neVG7NZEhnDuXx4i4EJJ56VZ3fmTqfKh5RF4A",
  "key15": "rYFYbUwZK9moiVDwyvD6wMTYV9gwUNBNkPvWVKZRJky1GondmFPTnF16DU8WkUpwB5sjBrtHkiK99c1Xbygm6jY",
  "key16": "SaVRmmcYNMuYaRYq2FpTYmQAPY45Wf6549V6E6pzTShdjUpXw7Ep8pWFc3R5f7fyudTL24dqv2T2BkJ1RrzT6QX",
  "key17": "La4uXkGusx1GuEe4E9c7srjzPPeRjiRTcdcZP6yN4um6igWTg7wUDhVYNtNeSvyqM94cQadwcbHFNowPFZjJJ8L",
  "key18": "2SdYRoe93GWf9WRxTb7RgVkJUrPRxZWyTD4PU9KNSQ96RTCJpWBLrTayYwHosaCjXkP56PVsWtjN62Z1KsJUqiFu",
  "key19": "4tVkR4Qf6oMZeK4doVR3xAsAwaq5GrarhN6kYEdY43ct5gaK75p4233NJY68pwAaQ7tM4VR2NkUY337ftPbt8Ccw",
  "key20": "5NjPUd3tTke23HctiJd9YBHX2CUAySq5oN37vjoASBxJE3S14rDzSWmWB59ERFCtiYstWcuQJKgz4c2oSZyBhMKX",
  "key21": "2STYHe9NeJK8pFrvLZ5hPW5Z6yywr8gGDAynkPpDASNHHZ7LwbvxaZqc9xToKS7JRDo7dSRMZKfZCRVCKXghmyo5",
  "key22": "3WCuJKhWKq7Cz4jzxUXZNzWNgALm2hki6SMRqengqLauz6KCKLiBYy3cixoSMQfo57HayrdPDpaQRR4UrvMMVVih",
  "key23": "26GM6Rd7EX7eSMDbxuzbd4KDJGad5AFEjFpJ66GyQDdm8KenkJzUsuBWP2L3eM5SQYNvdNBFAzmfMz5qKigpfntk",
  "key24": "2gXLXoqmfdGG7hQ2bbHX1T77TXANqGQRHwvY857da6hRoZN1iijcQ1SerC3Fu5HnU13eKqtGavb86kaFGQvgRvTH",
  "key25": "3JwtB4FN5DoL7dusqULnkPKc1aELndNYxLjnzZZj2kUvaHYMsE8y7PSwcyyTVPfvJJ4ejwYATiVsH2ieAcfpUBQJ",
  "key26": "CoMXPmUF17TyCNGTLckVU2EgtUkGR1hd8LfSKZczFjtw6xu33cNe5HPW3tAJ8MJt97b6MZAdKWSczn3oAEUeqW2",
  "key27": "31a5Qxpsn2im4WKhwka7sPSCQRNqCiJ94PnLJm9kgTwjfkVpp9DJ5v1B6TLoi3HYwF1sA11QMaxYcwBaecqFXHTp",
  "key28": "5E8ZyaH3CfaUacXeMqmMkSXErutNe6KYem6e1VqCQbrjUbGuAcFUsPiZmGGxAz1uGFpzKZj2FspmfHAkeBpweJBk",
  "key29": "5G8ruzcm9j28jZ9zTvuxpA7EURpDWXcLfwPKQker1PCE3cyKa7MHvndQ91B85yXEbCVZ5Dxruop64dw8zRKtMVwe",
  "key30": "1sJrs9jUEuU8HTVvtcgsWPx7xrqW6rVG2guHXSogS1bWAEHFqqF46keiTyNq9sisumpBEeWAr46kHe6ev7aod98",
  "key31": "54ZymTRB79uTWpuiJH6S2LvxvCjW8RXMV7jApsCiofMoMoUqm3Nw4fqiNJ5vJeiNQJhE29ayWeZ64SYtL1yMqQkm",
  "key32": "4SdTHjSv8CiEMVrchP57QE8apF1FxBLRSQiZXMAwJvAbtyD7XNRvLWLtozFjvFPwLf3fibrTQqSFqfwmHRcbkSh1",
  "key33": "2hk3yT25NkgYZKk41HqDBFRcYNBXARhwLQMQEPYvCKazbFSLdAMVk7Ygwu62yUUtvWBNwZMh888DiBGDUpgW7rDS",
  "key34": "43TGusBXGZvbyCisTXVrShiLqjkUvK5iBj7sWbWZWxZmfpUHEtv3WfDTp66qbG3YaLsTezNjkRhFyGE3NC3DjEN3",
  "key35": "5zSs73LuP15XzBx9XkSXpu35jdyQTmjjbE9u85E8Fw1JERrKdz7CmqNePJLKupMgasYjh7AEHBrPo9CWBaBx2u8E",
  "key36": "Vx31ccZnNbrzcLKbBwc1fMuSfG3pK6uFVYEy22uzpmEd1ECFg5RaUvRmaWcmgXf5Nm8NRGyxfcfEiQkFAycr2yt",
  "key37": "5Vp8eE4DJhT9c3ZCpZiqr59Q93ZGEPFKpWzUPCHh21rMZsdspfKabT5Qr1qSPzRPQuwMg3tZj4L2tfRbaw3D3JRv",
  "key38": "5jcjRTHmW8bex1k4LKaiX5e9nJQR6KMcGMXm1QMhMraC3sA6uJKWkgMg4VMfjE7oAmPCQuM7yuq3AH3DZmSvniih",
  "key39": "5CuTQHEMriGoUKuSqLsnqBbxB2hajmqaYVUufAzwnj7LaGBuCgBgU7LNDPBYGLGhoXausMEyPEHYjQuwSKMGmFuR",
  "key40": "2LSmw4ZeUCXY7uEyDDktp3Mr9KfaUY9MyZrFfCiTMvWs5CPGmxpfLV6BAE9aixPG8XvjZgon3Kg8JUJtP1WLC37M",
  "key41": "5W15xxzXXrRYhr2NzbGRDnAcWGfoZb5pzCjfKQCKmqZMC2NxVEnbY1jN5L3pXJTKuUwvAUW4tJFd4RQKnf3Qakwc",
  "key42": "3CN7rLFEMySe7mtV1mktN521FxD9XUg6bWiD1aukBspHtwwFbJT8aygCWWXjfNDvNJT2WqUViH2uD2Xe9P2nF1hQ",
  "key43": "4NtgQynuE5toFj5JcT7jVjoadYPJ85XS8BHzNAxc5tCWLvCSpprUehkWAypvLpYkyHTjUazEh9JYGzacq4hKg49X",
  "key44": "3JvTxB4Y4ES11XwoNdCyGKiu6XvkhEWss6jvSEXrytBy13QKzS5Rndych9ZM6DmLqyc9w62LHauSkW8F5j2ZzccM",
  "key45": "uiWnaM4SppGNquD9fCjxptMb2WzCqRDsKG1rikKQgPAzUgijcamUZg6NXK3r6o8t3ofdoEPTXCzxU3zVqtRjALa"
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
