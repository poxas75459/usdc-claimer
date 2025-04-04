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
    "66rhZCFm6J73r85RSz8CFw1w64GCkGNFSkNUyj5c4C6g2eMFVWq7Lh2X8UYDykcdjwuMH2P4a32W3uXfWTpaqTXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KbUsBXu7vT4aWGCTG6oqAbSzViooW39BEnnJdTdDGVGAWfVCx4Vy1baM95GfsFgvp43Aw7Dxz9yxuQ5RMFR2TnU",
  "key1": "iTAkr3TzfnqHgcHijci1NXobW5reDmHuxCiGQ3GCERMZeQhy7pZmWH9LwZdVp2dsbJWYaAQnHmpUmSQ6Xqg7QeD",
  "key2": "5fFzwQDAMVMREkigCSgCFMpzaPMcCtPM3ifRL3Upw8uC5ZCAzRB8En8ZgbMSjc3pUeJNKi1JcwJzGXPDDjT1SwUR",
  "key3": "3D2NNrgffU3XkQ2WroqqGK6E3hKEjoMpoCRbsfptNGxJyMWrMevAda3ksiFuK3QDonxNeijGMkf3PEoznMBsN9wb",
  "key4": "5wdCQ18CCA95hPbjJhQRxUkHmTm26sEJ7PHnykkKY813J3wK17eMspWLTzHn5EX2pX71iD14ezRzgnzTq8fr7Lvv",
  "key5": "3EGG6uahWdk4WexYeS2AdgwWuu2WykKnZkTit7CkV9uygLtZEcVGYGkcQKkKs82zCjGL2iHbxJMAp76LnrgTp7dB",
  "key6": "4vark1Hof4Tka7xWm1LQ3qfMjuYUhyQqrLEtpyac8xjhWzadZZWKScMx7dHbBa4d734A2Upr6r4dVbVd4czMZYyP",
  "key7": "4ygUrFRTJUKi43G2j2nHvzBW13quUJ5Dr21ac2e4jXEdAgAfwweRUhS9cwmni88ZSMgyCDjFhW1WRxigFBJefkJ",
  "key8": "5yCGPvgXZCwCSqh3AWAVKas2boAeQjGSQ46oaER4MKjCYV7TMBxX8WX5LRqsbKT6KZu6HGPm6965aYxmArUuD98C",
  "key9": "2HEvikTSTnP2pVngs1USyh4toK57HnQa6gKz4kmVGpmBqMW3RQx2PWwLxxwLwd4eD8yvV1WJymwx6y6xuQPoTv6u",
  "key10": "2F1a4Mu1JLn2qLEGroZES3Lk3jd56eZghx7mX7RRTuCHFhfiNHkPdmWaFwLZbeKnh2hEpCKkekYQrAqhspemyZrL",
  "key11": "5b8D9usaetptDhpna8T9Q5ujqKqGcGQTpcLb94bWemG1tN8jWcvcBFC45FduzvfzFzf5WMVRuVv9UMcdRxcVmWo4",
  "key12": "2BuAQTdgGA28cnPwLSiqAr7Qk9Xj178hJkJQcMhVFkKqzBXq5KDUs4gUT161dioGrZQiNNSAULeACFRaMaoBswsF",
  "key13": "3Ro8BMBgBxxSp6ZaggvGM2pdgTpkT18v9e2a4AdYyDrdaSUyvZar7VLUaYtzoX3oY4zsYfK2QudxRnF41rx4mVFA",
  "key14": "3kq1DLDRFvW5qcK64L1ieQQs9A55UYDqAi3KAyyezSzzjQHZz8DB9oonRLCf3NESh6zEBuaQWrtLTgmYV358vJeH",
  "key15": "2uFZS7UwvfBEZdWC1xbW2BvtDN29K83dKfjKCwwXARAbbc9CoFDJY4z5sHrwtbZcPa8kMAQnw5Fp5SKNMzAHn5uG",
  "key16": "3qnY73WA7AeUe1ZCcQB6xjsc1FhEybQCS1TFqSWbQ6FgHbKkNWZWe7aA3yWFzcFryfichLtGDa3AVRC4QBzdas1X",
  "key17": "2CB4NVR1mfn2Ci9yjbFcwvu92Pev4rybDVTvSfEffEK36gGHBPqC1HzUo5pDvo6D6D7kGbyKqRRmmPEfeKSGi3EA",
  "key18": "4Apx6dqqppxYjEUGbw4J9A1oVepath88ECyRotyYBWonDyzofkuofAp43JTMVHS55vMZ8qtaDPfTkFEdf1HXHY3a",
  "key19": "5vuxDT37FZfL1mLUFDojAVz4yVu3WuMaRhpe24ySMkafCLDK44s4UwLzobZprCjACi7BxBxHVf7pY1aB9BwW9F2U",
  "key20": "2t7rEhWh1Nt2MEHDR1HH69wcuuqNtdiQ5KBPbgNzUJCt71tFodfk6FA2hryfaQ84CZVEPLskZ4DF1ySixBRbNwky",
  "key21": "3KsVpRatfg5PY44fQxn8B9WUNjjLPvwDXRv8KiZnh5HJMtAWSqmWEdp6sRfAyF4XpZ8VCRDid1Cgr2QSAMgALLNo",
  "key22": "c8nGUHdFRv4xnP27hxGxTQJs5bLwYd9DDLwfHcnVUEE7aLLFhRQRZCAgQybujBSF2ygF41UCd41yWTPTcqg8Lxm",
  "key23": "233fn89MXTfPZ1vQYq4AcDSvMbR3UT2M7T8bkZjG9geY77qrFRrMEaopnq3GkZb8hy48PgeUr3GpWZkWKn8ftcKf",
  "key24": "2Sd8NwzEzKidnMBqy9jyzqNwXKMW644EcvQC5R2DHYf6rkFtAR26K4GLcbx77duJEfruXQi6xw1yJrVdWGjDtrxh",
  "key25": "UHvPt9ki5vHuUjbgG9JQy4w25BeQmFQJJECmoNFUyKvNeth9MZ3WNiGnnxUzqa4AXFvo6snXFY9mx86wS2AkRbA",
  "key26": "4Pb2gwkWkGGWCDTJWZxDKh2T4DnhXnS5QmFmA4Hp4xB8R8H7L25vs3xgnZafKUCancBDpyoidRk2gN3zBUnqyzkp",
  "key27": "5wiWh2F3nPYJN5nQGUvYqQjChBxfCfJgHGXw5kssfFMJUVa8mz7Nzj4AiqZZ8Pgt1fxdCCDy75By33KkYbCxqe2E",
  "key28": "4CA8sWqmhJvZawKTNKsuWG3BnjGTU9UUA9RsLDYhmCFed51p8k7MTBo6Ratq6ahmyqPBx6FhATfEL4DzCPh6FxnZ",
  "key29": "4BUED8MrmE8ELpZD8FuV924oAvPrkeY7V9umvRpwJWvhgW77H8tobP6nuKDPbxeqv1q4fhFca9EUo7jutzu9wGaU",
  "key30": "4n4VyJ4pEYiaXQs8wATGf5MYg2j4HZeCyTHL4cXVikgCPSuCZAB83aJnXTHKX5Jra9uUSXuixabxMgzi4a4WfPoT",
  "key31": "2PVtmJVhJzVPnrYQufmq2Tz7QDN4xYj8Wx5TTNMHwQ3UiDpQkkwa3nUDYQjEdYCBxxfpU8dxFYgmePJvkZ8qp2sJ",
  "key32": "3Kwr6pbfHxZMQptX16TR7e9CxRtcxZjiBUPWgdt7ydobS74nxdWquPQ6k6GBg6XPFo62Ho9DPG2VP2E1Dkix1hb2",
  "key33": "393PxxvFSHv83wUZqBeMwpvmHDwPBubUoUczJHKKWbzEPxoEuBNf7B2ek2gummfzfWFv8ehrfZz435LdkKpRSRHf",
  "key34": "4zET2yfBG4MbHMWF672h9W2zmBqrd2SQLTu5eintVLtqhZ4Ff68hHkaDsoco6JSkrZbgu8xyonYKRYDgjP45VjRf",
  "key35": "4gfUyXsVWbsN34vWAPUVZYbKaumX86yF2o8dFTS1Zye1DhN6KEud2cszGqCqnnACVBrk5fvgB4qQXPDWZt8kDB7F",
  "key36": "5KF3itzbZxfjo84MMDRNpZwmveXUJGDQ1M9ZijxE7uVnSqmZTYd1pabff8KAKnpVRhnJRTKbTdZLxnFwgEkbFjWP",
  "key37": "2HmheNhsiNeLw7hcwpJow4Y9j1METE9b2ehU471fGhx9Zfw9aNcPZVy1Y9BQvHuL8qLdtmbNBUMSM7b2rS8fSpF7",
  "key38": "2YmcfjeLjzF9mZjoiwBd1YcYoFwgeBbtUyNmY6WFU7VhWp32zJCapyquxa27hwxktbkR9qqRZPnvHzuLAfz89yuw"
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
