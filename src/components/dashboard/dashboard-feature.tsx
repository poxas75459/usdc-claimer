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
    "4BWPg1yk5GioutL4iwnKJxyaWx6QrBkCTBWjtnMhDTyh1Fn33M19c3FiZ2MzcejUh7LLW4KMe3N1nQGbK2yhQE2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqEScmrD7qGCnjMhfno61nchDSDzUQW4H6STrNJT1LEk2dTBk86V3R9rQm6s6cWFyibb2LNm8xfq7fUWA66bNCU",
  "key1": "5S3K6ejwhK2s2ECsDR9RT2Bey2aW5cVAaP4BDWCGn1ucVsQVUEu733CZwhA7W8YFBpaDAw2ozcbGycLX3Z76uzoi",
  "key2": "WAoiyDoc7PBTtbUSc3pEx5reumv1tS5SaqKKAHgmTuyfiJqQc4XPKWJX7ruGgoYUwF4jtcj9uz9WtHEs88sJsk1",
  "key3": "4zA8LRC2WmNzXECos44XBwiqAFQZwoZJLDqM3VnhkqYCDczaec4Hi9mkmE6Jcd22cqVHn2zR3t8gNMUJHGoDcjGb",
  "key4": "61eQe6QJ1XphwxTkuBHKPXLSV8ReF5b6NDvFEB1SDrPyc1ZghqEfnMYMJ5dUqoMYyYfYPKsKjkGQmqZKKTC2Trhw",
  "key5": "3C8Qe22MZKjLZ18bHMHdTY1thbo81SaiQXAQWNgFFGPzBV7Xh7WNMdn149Ghx1G1AY7SAj7B4oncyDHgbR1TQBSm",
  "key6": "j6nYabxPscDaaQfuThHWi2vUv82xBj54vjLM9zLeMzAY3EBrFJZojqaHZMqxxfnoXqZzxA9Q25NFkAeafMBUHr5",
  "key7": "3ewAxDUxjJwLC2RSLjL1SARDUAXwjiWwxjVvFWGsf148QDWG9fqPWPVAWQQNZYhfMwSa3ivXQyoH8XoGBopTuQoK",
  "key8": "4Cp5gyLahLHpPoJZkhdrvVsq1k8GAkc4LA7i3Efg7jZaF8L4sthSX1GEDM9ZMtjy6Am9e5rqorMbkn69HK2y3dUx",
  "key9": "3z2XHoa8VWEdofqxLTFREsSigAVqYj6yVF8knU54QTiP1Y33ZSVmyxbBDyndYDyhnyYeWbRkSua27SHLuQBf3yNJ",
  "key10": "4dH1zDZjuN73DLG1fuKVxW6nXiffSmi1r7QBTDDRa2KnmiuNK4gdBPH4qCd2jc1WsHPmCuhebwwW9XeeEixxV5ep",
  "key11": "44vC22v7QH1wcj6siZZ8WaUMmLewF44sQ4WYPCGY56sp3teERXSz2Qsy6Yscdv66HGbUKdFhXjkDN9sEDkHQUzLw",
  "key12": "2EQ74s7wyQV8MoUVyoDsdT5sKf9Gia21cw3Ba5FVQNwoeBEJiNYeH8DfU12zWXMMFSL6xoTPXNoPS8a6d5AxK5oe",
  "key13": "4VyYX6hjWohNCmDEgusSA6sJamCEhzv46xUNA4jgDxRtyi8wqZuLx3XafY8m1gAP4x7mZu7Ko2TV1zBhLzYSE1kM",
  "key14": "3cnvCoTNHFvF2S1ut3zVPg1wP4pfJ8SfWF9yPvGHLFjx7hcVKH2XHzKUi6DXPorbZHyz9ExuvTPduScKvzCbppWU",
  "key15": "3HjSSjvPs7qMXcmw1HUm5X36LgiB3j2DNvjU9SUEFTG16HvYzBG5Mmb4DVuxR3U9CkWUUT9PZciUY7tAin24Te7L",
  "key16": "A7ASoeD3qfZtK87gbHN3He2c6DfKCWt63RauTXPjEbx2yA97hN8i57MRLWQMDioMP9cyu18hvUfx9ZnhS1gJqBT",
  "key17": "3SYc94kUNLFhS75PvoCnhh48YL2Sn539rYpc82Pxrx6HY5SM2WCKiTJ4QzkT5Ey1etBwLTaLXWjPN7LaBFcJqvg",
  "key18": "2xGu9TXfGTscUViSvcPGSWvRWnjhhNkj2YAXm2hcD17LABdnzxz8x4eEEos6MPtWjCVcnGSPpuXjHH336bjfPzXM",
  "key19": "5D7RRWqo5YSQxZCUyYe2ZfJPVaMBJQc2nVkPKupbNo94gVtKPrP8p4maYvX3FdQGayYrZJ7H9XCGYbrgV6ofFWLY",
  "key20": "4AMtG5REacrdyfwQQyqDkwwhEufhessRkCw3LGqxpfxWtMxd3JoqE7x7BqpTMKTUZFcUMJEdkfULNP5iA7pDhxzi",
  "key21": "5Fjh4sVbrFDC86zsXk56Gs9rsJNygp29WPGo28NS5LogXFL1DcgpDHrfDW4VdEehRm5psJq7RActMR6abvGfrdes",
  "key22": "4bMCotKqwUVypg3GaNSdS654t32QgVA3DkiHbABTstLyA2F8nD6zsfnts5pDftrXnUJTEnFEF2sJQa9sG4RKuAxN",
  "key23": "5pCzT58oPA1TtGMtmqDUjgLcki3Cx2jbxeoU7JkAHUSdXh2aJ8CKtUwoTzNvR13suDP4ZL4Uya4NCNkrGPYY1A2P",
  "key24": "2Geoq6Q9PVKCBZNZpkExwn6E3qzGjEMjFX3yGKPYe1hxR18T6eN1F5aTLyNA3qWuSDLny7hBeK6bW58juZn1YPzM",
  "key25": "4nYj2Gnjy6p1td6NaPRZQizN9ANgMy73RbTz5xDP5GGGJXhhvRTpD5AEwTuer9ZgrRSXMQCDovPiAHgSYE7ZFJX",
  "key26": "43AoJtdQVWqGhS1oYcoCmmFoREzW7ezUGUdKtKi6xSZ8oeQUgpLKrdxKp6xhwJATNB9zr3ZAYu9CkYRbe7Ab7uHK",
  "key27": "24Bsj836EufeNWUdzfjBwRVAudVidh8MjiUHGS6YgtTzjL8aYPYqrff4Usgx9t6SAhyYwEndNyFfKX312WZVSyCp",
  "key28": "4DmaBVhEuFgLD3kzdod8pLWQJixFAaCHNmbbxD1GZrSy1FMmyYSVmSy1gPVL4LwFstnFfD73oAEpiA4cm8wDYEYq"
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
