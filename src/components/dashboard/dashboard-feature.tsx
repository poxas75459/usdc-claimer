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
    "PoajBtGYXdJji3dA5UWanH77BEPnwfMJMvmNAF1RYuLobkbRDZ83USpHf7t8DnvK97TLC1Mn3ugp4BB1TBSq4BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYbagvrrrdna29pNnXYgibi3imvVxxnwfFE53EchnFCezhb6CF2quBc2KKYv48XMwt6gunJLK66uWNcKKphUuhE",
  "key1": "5tGrwBT81YF8SAhSYcc4bqtTrnxuCsMDNCseHpMesHJ71ub3qbNK8KVtTdNpyTPQM7e5bjzXq4az7iBxPYw38NzK",
  "key2": "3cJw2vb6JkJBaPPefhNLzVFrp46JCDDVy31fsJgvwyE2uf8JPF3MeLJFJW3CbmyqSj4Hdq8v6bvKVQn6CnXS66uW",
  "key3": "s1eT2RRDDt54xoyQDa5UKJGGoQCoMqfUS9SGzBg9uz6znC1DJgTJh1nZYoVzeuZi6s9iUS8YyZMNSJybCC58r8R",
  "key4": "1zuBezwviBV8JBWM8zWR8eUJzR2YZC3bFNGxaXCa281ftWAPzqZfgREv1KdGFrYGBKzjP6m8de2UtS9VWeoXbVR",
  "key5": "i2Ykq6bx2JE4WAixoeunog97vZrGqhfMqrAsqkvF9j21NrvWYRD4TndJ7JMNWn3opihboGLaE2rxShLvHVtu2vN",
  "key6": "33hNyu4DjUXNeC3BeJHGUqfqsv9tcYvk6rVSDUkvSkERQjbuUvhrpqRp42Hso8Ky354wjMCUh5mcHgLNB7h2NzWP",
  "key7": "2koDhnwNXTbG3XaG9BaeaXn4vLUcMKFUV7i7TfNWqyanifqBAA7Sgnrcun3jSHuC8nAgvqMZAGf5h7vRbvNNtxak",
  "key8": "3oALsiTLCvH1WiqwTqVms79dBDsNFWcztezqKZsRkgCFjcqjiNzRqXNCn1PcNqWPVmfnbSPEGE4VRmmQjayHTdJP",
  "key9": "2yNRPVmQWywSbNUwuP4ront9EekCZWzAz4Qhk639jaj4iJVKUzdyUZgmZwojsWnStM7cztCexbG5vbGgJPXK3dpG",
  "key10": "zbjdYRynDCGmQaPZBhtE23zFKAjd2zmZCCm52i2mYFG7n7d3RTUCgXbu2ea497ppvn9zaqQuR1yBW6UikjFhKbp",
  "key11": "35qvT392WyvCMh32SfULyRHVJ6naWVLDumYqXgSR9QpzgM4SyXaEu18pvfp64Xw1Bq3pSEJhdiogfV4TNKMD7zde",
  "key12": "25fEtmTm6YGqg772aHCGa1nJkSDKNCD2zEZg8t2eCQ8TeRs4y93ngUZ4J1UxmCdNLtYgkNYYuvvD2WsZdpCTQjjV",
  "key13": "44BGuzeswB4mM93XS4gmbZHq7NcYmTNhKeMzy6VQ9Bmk1NCj7MSGu4xJTVngpVzZpqtm9Q3KL7JP13GZkGBLRyhb",
  "key14": "5C65i5QTrpxTYkj9wfkbTYa23zNdybozkizntroQf2sRWxqsSuzd4wJtWo5gHewfCFBr2cQJKDRzWhK4YTRpdzKs",
  "key15": "3tDTEW1kCR4eSvsQARh5XDz4w1rd7LH6BbNQ9dANf3iS1pPxWyK57stRGDaiyqxsptmi7c9o3s3QJEpCZppJfikW",
  "key16": "5TzCKjqpecpVJ2WMwXQDNSofwLDugXjmDJdLyy8FhYzSZi5sRTSbMDYRzQXEs4hqqacfQNMQvZE2c4fjWV74Nj23",
  "key17": "mHj52HmbfrJ5U3ozmUBccfHvoWKSuXQKHoTRNqHmX7skyouVt5meS7c85pf5ADLL4LrVSgYRFXfz5beK3EHWxzH",
  "key18": "38CC2XN6AyD31MuYntC3nFn4biBttaqc4rK5X5gXC3GM7sEjDFcVA1ZYtoQ1CFfEYHKNvwJyhTmLeWFb6AChU8kw",
  "key19": "3b2LSFsAFKGMiGnYXSGiZD5KHYyax1ZuRJ1qqn1WqmqRqLd1jB5sNZmBMEUa43sA3BGfBTLPUMRNWvXKn2p1wvZy",
  "key20": "3ciTWV3LQm68yRA2w2dNSuNETUnUXavZJq32Apw5Z6VP9mXt2R81XZ8Hhdv7XPTQVAdaebrarAPfnoP85eUmvttA",
  "key21": "5unXkDUeJifByfbxsTXRh5D3coEwWxCRFG7qjtvcu65QK5iSoxVdw9XV12V3Sje7Etf2kBvMMsFREWETzQd95WGR",
  "key22": "4F6mEonuhP9E6XpktUPJfACqcDQw7Lpqndxj1rtBsU6spyYZrdnYqeN3bcpBpHXCk6kEszeKdPbzJKwDXT4FpWVg",
  "key23": "2JhMoGtV8CL4bjWFCRCcEPtnzHHACMQaGuc1faauFZ4vgcKvJAWfpBrVsiNmknvftfGfFbWckHmG1Dy8PgFxXp1N",
  "key24": "PFzUXFkcX1MUpN72tK6yWxdnDhSpmohz3GAM4FTcWVLcoE9qtWfaMsJ4KrfLVztU69d1FmCDnu8egbRWUtSYRss",
  "key25": "9SyCXcbNkG67YC1yidCBDqui5kY2vKwzbM22g2XuvVdbKspzqWB2MD5XEFu86JEox3qnKsHvzmqEzTxgoMFS26Z",
  "key26": "5yDxmQoG3UCkzKYMyR1FJxb2ig1En1xTpesxFWTSb3Lka5NVzgS1eNUVDDd9wfqsSsyBUsj7kmzttCzPk2kSxzhS",
  "key27": "399eHAuRnxjabsqZdEXD6rtghsmou4bTkpzphtTsoHc9F3kuta4oFWHQYXWnpz9RnhMWnCorvSXirm95PjCAnXZp",
  "key28": "56UHnF6XKDm8x5jqFwWBuPjuJ7NpEB5iDAkHEXFQ8tJcqkjeoZ3MZBktZMXWEoBobMWr3xXv6UakHJeHvXuv2Bdb",
  "key29": "64rZz7uEQDaARnCjEAQJjSwStqNF5RnVAuELaKHT25oPmqB9bcxowj7WEnXkxEXYPdbnu8RZ3BVwparpERo3FLoW",
  "key30": "2MhgwFU1eM1YQViz4i42rofXNBmiUhvWp2S6ffwJZzWNRCGP2TzHJgBk5MXBxkHXpTnPqmkxeV2wjp5KmhKcAy3h",
  "key31": "3fVz3MSN7D8g2RLSqdbbjL2LQ9HngqkjeMiuTSoXseNVK1xQ133s328R7bUJsrovrt9gX81RdKaMd6KzPZNV1grZ",
  "key32": "3WkmK8gcCZLicj1gRxuqdX995BcPSnAY6TLWpYLjA5GT7tTZPZf6XmRtwoZXxNJGLVVnm89ST5pYnjAYvpDyAGrG"
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
