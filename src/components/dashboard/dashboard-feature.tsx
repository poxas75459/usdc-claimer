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
    "2kUjXvFQsKZfqaT4qZucjyBnYK4jVvFbnRJPiovbUn5RNEt9YXxwLKf6D7AXvVMqAsNdsK657GiHzkVZ2QwBK6xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EMakFuUXPtPY4ms6nuyuBm9eA37A2divZXd16KV3UGeTWSen2SgJT4p3HbaBdyBNXuDuVTUt9E95cSJGg7rN2v",
  "key1": "5DwxGUXaw6RBfEF9oRHmWvw9tK7xoLDBqweZVtJAZdeEnXUYmv9P3Hay4N4RYXdueqvDCzhRhjPAr1NRmcqVHXip",
  "key2": "5jdUjB3MSgKW5UDm9eLBfFZAFv2sq8aheXEXUTYXSaYSWhs6GsFhfVZdR9CY4oApQJqjjy1zpSrv44vAJvLrN3G1",
  "key3": "4wwNERN11KSUKZvDQLFcepYSFKRp2CPRtoWgkUTxavFUSN5SpwPx6dXdCxyvTFNNX3HiwtpmkYfr2JAzFMV3vVh9",
  "key4": "3PNUFgimiZM1c7muc3643ZFniEVY67p5fgv6F9pZECxmZeVHNrri9sStU91B4uksgrM1miwib9qKpJCyzoRqaj3x",
  "key5": "Hf8n3N5kpxLZWgkrKdA4di7fWRovpnq1hyyQ48Vtwq8YcjkNyxcLu5dXdGbgBqmCv3enTLFVJPARJvJXQXDU294",
  "key6": "3nZ4stcmcDnehVNgcY84Q5827xbyAQDdTjoppxxUJxnsjoKgux4288MstZo5bxWSJ9u4fRkB2Y8XTkYrajd35L4p",
  "key7": "2mdBe98p4heFwehKnQK6PQomWbXUzr4p3FmF95LxKSKpKE1WYDeakJbz9bpAe9q5sC73qttzBbP7R63mwTcFfU2n",
  "key8": "4BPseSYaDU7nBgR2Y1iFruUhJyVCPEkBn8UDqEVtuB6DfZw92V4xpvgbCoSg7Sy3u1HjttmLiy98AfPwtRwwKQCC",
  "key9": "5jx6Y12eQgZT3T72j1Zmz6y3f6TW2KCPfHCNnFdSWL7ZcVuWhRbw58TbnPY1k5QY94R5XaPNdrnJofUJiJSbUrUo",
  "key10": "4PaJATn2sCFJv89VvhmgnNdFPLMsZCyKGcwM6voYEvrrdh6yjy1Qg7bgFMQx3cjA2VFs6vfdxFbZAFg24AnPPkQV",
  "key11": "hsr6QQm4pdcN3eNTw6Du96Eu8ZezSrpc8hFACXnRXc58uaCfEKHWjZdPHRhCohWyyJNpbxRKu5A5cHo5w4p5Vwy",
  "key12": "3iGRWih7VfohEwxsEpEypWcWXZ5Eb6pECxo4BQVwsbhBiEgvHr6K4UmEeiD9HM8Z69Q8t1JzwT5gwCHgiPeadtq",
  "key13": "3342AVDsDJ33CFq61DDFb96tKhA2w63PYge4CSwZiSKzyqNRQZfVFMB6muTcwRAYGTv3g6xHXFyJQRSgqKAbDUE4",
  "key14": "2FaHeXorZwVopbm7SmMRzcVLDwCs6PqRPYDF5jY4dJasCxn25jNPBoLh3iLCDtdCBvxiUEtYUCua8NVVCCHcWeBn",
  "key15": "4fFjiDUzcPyKcQ9shDdfT3HMqQ8abvuTVwh8N1ouzqKXMP1ZDmiyNN6vBvwSpARcgE5fPjGeQHjkdhde2tjExohG",
  "key16": "3WGxGgAD5zZnQcmmVnaXbAMkDhiKk9AS62j7HMhNQD3Ws3GM8YjN4sQaaWkkuP4JhDZWow37pQszhW1etdAx8pD1",
  "key17": "5a6ektpVWYyWSo5CNdEP2Vt58keRdbhKFKJf7ydBS1v356VzUt3yKYMiSKQMdP46PXrVx4ZQR7SoMFx1xN1MAmHg",
  "key18": "6Yje38uRoSKedouLuys3J8V6noV68iipUiqciBdbmmb1LzwXNz4dGtpzBtNo13cHSeRpPaPh7zqiWdFT5kprgWW",
  "key19": "3S13kiNoABBRHLHutv2nHhTp1LmhRiGCDATFiTnSGwEvLtLSKpU7DwxeoE3hJnDuMZtEq66Fa5wtS3n9oX54PUua",
  "key20": "Rcft1ggX4NvDQhW6FeBfSpcmq516WAA7RprWKVLBYPe6ybKDWY2mhb2GCiT7iAj9ao54BsEw4EynrAG7VetKeQo",
  "key21": "3ik1HH439BqvKnw8czpXjJZ8dRg8RRBu5xMXgrNhAvfpiyVbUVvtDf8SH1fStJ1mj3y7jgztw7ZrxYF92VrpVYLv",
  "key22": "49QBo45DfoRmKNruwzeb1AS32U1rXnxvBaKHGJZxVUtxZdpj9p7tKCtPa6qogeB7W2jCUe2n11XivP8yyNwGaDYS",
  "key23": "3ETLC92VU2zjPecfqk8Sgj3AMMpvhZWcuMjJBXjiLDsyWqEDy7zzMS8PPheYdNKrqqMSbp75KEhv1hWBXvE6RKXg",
  "key24": "5kr1j2H5rasFY3JTXiWHqYRUUvnJKrQNUbQnaVoZuDimazm3zKnMtPe3uJKwRtgL1Yj3GSYDXQdJiaGpvDcXCMWV",
  "key25": "2SeRUPpgzQgwSbsrD4pZF3SQGdU25pW4bVZYyEu8cXwFU2S5LsU25T8Wmh5rVC3b5JpEj4NJS2nw8yXLmKu8Jqwh",
  "key26": "23rbFkA3HE19kuAd6tAhBiw2nFrrCQqXXgw7rhTmzpBrhWRXGfQBpPszsiBNpULeXAPRxKHf1kYg4AKQ9APxZydz",
  "key27": "2Sx5B8XCb345qKBqYDBNVSdnrPzdP9eJdPDMThJYsvuE7MMTpkcbpzFyR5A4saipE4MuXmHxZ9YvP3JR2Bt8QBxB",
  "key28": "3t3Fri1ALxMWmcVDMGCoKpLatUe8VL6UTFDYzviGxiuYH1FYkeaVStGx3MAEEDzkSuCndxKqZqKK1W79dqUNJJEV",
  "key29": "2xMdbcikrEdRigcTPfp28AQ8csd3nRtBxpBbAm8YCY8hFpuq9saZAmgdrFk2PTaKH5TBqukEz1ywgcECxTMVtwu1",
  "key30": "59mqmDMwWovtsSoMw1A9toLZBPaaS91GPoXMtEB97JT4qxacVrKPSWhucC7gQ1Lrzdj1g8F61vhPhVXD4w5zLSAm",
  "key31": "3NA2Sj9q6cyLbQSPzMSHCiYCoK57ekgijX49XNoYXcWujNTTaUbLQTtSww7AmPGfUoSond6q1jWdkdHLLXy7XR5D",
  "key32": "2HPdUwpbqTUxxye5nyumvhGKFYHJmb5VNkjYXUWpymQuZ7wN4o8wKtucuf2SEe41qGGf4SPoTwCd5VxLu21f1AJi",
  "key33": "4cX3r81ma1CGVmaGDUDx5h5NjbFiYKYyun26d7D1LPVz3GWAKDM9z7eT3XytCacSr59NCfQQvureM4iA2Ue6pcqh",
  "key34": "2ZHSTaRxjYF4ro2WHJkmfzbECYWxo1qVa8Y2MmS7Uw6AuTHH4R1evLcx5Nu17rHrBvatS8JQbztjiAcsP7HraHY4"
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
