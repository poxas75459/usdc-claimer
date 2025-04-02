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
    "5MeEjSTrqRDdUStych87Xa34dgkVyCqMwsXDQi5f87gqgZ9DEwweaa1WedB9oS8FhoJQDfF9LKrhZb9TGt1mv2EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hztBFf7zP3Z4U3yfnsMx7Vk89xT9XiTWjhVCQvWQNbaD4STUTSgAZWoZBznJUmEJLxKFA4cJCkhJNDhsezkCcXv",
  "key1": "2mqgGMXLiAM9hwfVooc1W4LNBsGoTeNFPBNF8QMjsNVE6JJLJUZMr7pAPzPUrntb69j6EV6Lm3yt11U3nqyKVuAm",
  "key2": "5HdomGqrbxku3rkgQBwzudpF2Y4jZqMnrrNzb9guPozZnyGNgcm8SDzdARWwvULWiEaTkkmt8iHaZqUs4mVezXyE",
  "key3": "5HnkNSvXJuf5qpHZEC6vENp9iZSd8yV1B1be49YAYn3xXeXAGwFCNACvQ8C1F5fooFJxnsneXkeKMx1D3AYKBcGn",
  "key4": "3NR5R8xuZitmwZiuZek2SY8m4cXasfKa9ttDUSTFx5YKWPh8rAAsjEbWx1dozhBfRLv8syUVXzz4Mco2YkzZXB4n",
  "key5": "1VqwP4upGDdi8AGEntLu2QngsCQNn4QbLH9gmSa2HpxodiLibey9YGBFS5MP6D7DFomdskVFdKBpyE82zyAtxA2",
  "key6": "5smFRDA7ioqJEYfocDJnKwYyaeztdgQQekDXwtQL3BwPYrUeQwN1y1ErqDfjxeJSK72XQbuRD7nsqPq7mQootrr9",
  "key7": "3ipEcTJR8r44ETeLkXmMJsH4SHXTQRC6Jco724t4EZ8guvw6FgqwHvdpqLZoEwTKpBhVXsjB4uSXQrSVDvcZ9LR5",
  "key8": "23PZbCVGLf3mgnPMnChQNKqpD2mDcVDfE856ixnaCMvXsV6cXQnq7XeXVL4ozF7mD8banwW9B5aWci9vWdEWSwg8",
  "key9": "3umtaVqFAD5QNaVYo9yQXGQLozBoQLZPGwdrGse87je6SdrkxWUr9JRf7RNyEBCC52xwmtbT7vFhDh6UyGqU1aGa",
  "key10": "nEf4jCU6tygWCBz2FFpGYAuwkoZG7uEx5smj5S7pqDW8qvphyP7mzJDzjhdKBJXXsJpssPzy3MqRYBBdkGnTNdJ",
  "key11": "5EHEkeCFo5zPV2RtXsukgWmvoPb2g1KkzTvruQ3GZAsXCGM6x2ipbY1q3WAbXrBmHJqrYfLpfXfXyMpZx1zETjT",
  "key12": "2hbiHon9npwywtZAWo8JCGRTRLiDRVnHycjiPsMFzXwEPCDuX7mw56bLAGskVyPw8SqbT9ktPso5Bw2wxCBAFhs9",
  "key13": "4cLyvRCcARZRDLKFUzyXpTkfEzeAVpSYtTiqgjh7nt9Z6ThGnkqBSwdW92v4KTzQwvwZdY1BMboQ2Utvqb22hspp",
  "key14": "5QMZEDycPT7i3Cv1Y51o1wjLDg71bVxQoH2wuh6L1h4QNUmarTD7eua9EZFgJjCTjMY4eR2RdcWCFxyih2wtnxa2",
  "key15": "3H8ssb7Dyj4VVoDd2aDdxtYPdCniHXs8wHkoZzhNNm5DS3LUxcaCBkGJ48u8doyGpFEZzf2MiB2DUgwsYRxBR9h6",
  "key16": "3xTn7uWQRx3QUZsD8uQV3spmZm4wENJs9dF8LBTJtbjxXQJQrPf4h6FCVWx9H8fejzqpxA8HSWJAAbS87PhkACgR",
  "key17": "7skSkivNdmivqUjYrmsCLFPyZuvWK5QM2UKgoKRUbsgDsqTHUqdWZYERze5zdv57AR1bkKfwvYG6czpGefniTjM",
  "key18": "2ECiygVkR3W4BeGE6AygvckwzZ5kWz3BC171qJAFer8W46LWfSr8TseqEhAZ2DgveymCwhSM5PAeaJSzpbibtnnn",
  "key19": "42upFVB1N8MBk1oufJ9EkeMZW2HDvVdRuZKqjLPLARV1JBceiZ1nsUQv7tskq9KXXCRMUPiNPscMipTZqQH8UHzM",
  "key20": "4B4k1Hg7bH4sM4RNPVr8TvyqW6U5YRZhvBWGAp4UPr8fzMX513rm37NBXf6VuF4TVCsQgheX99yEvyQvxQek9FTU",
  "key21": "5PCvu9J4mfbMkJyCTFPCmVJBn8m3giid6qmrzJU6CG71hFX87AmWcQD3WjR775WdH5jov9SxNxrWVzZii2nHiu4o",
  "key22": "SckD66ZEnr4nMFxXxFZsCRGDquN6bw2UdFGdfiztpvrgqzL98wzQy3f4XtLQ218sMAJKuekH88ZEXZVVkaGqRNQ",
  "key23": "5a4hZv9QS3NDvsrqD6Tyzs8yNEC5qpXgxtVw9g5h6wUG5Nbcmbyc8T4xs2yrh16142fJN74XEsNHmjj6sT18xK1H",
  "key24": "37NTrcXN5egSVjoNjLQSKemeReRT6qUikLgXM1D74LX654Zk9Xf8ACBPgTzxeMfWdjHhBBFQZXQu9JWBGtyncVyG",
  "key25": "3xvXttcXoXhAnP79Q9H2vrHLTfNRLqfWuRx9aVCAocEVeFKk2hZki9tXDpHVcy8AMQRuwAhXVDpy3bZanDJQYPtC",
  "key26": "MkaXzXLzPy5xF8jZtJMzWbLyYyZjCfCBxmdqkVzDdy2A2Bc9MviMGkXhdCXos6nrFfy7bTeAtndV5ZBhr2uixVQ",
  "key27": "2PYsYpwVz33PAQ7onH6ZdoqmQ6U2hC2JMggj49w6ins9rwb7FR7NK2wUuYPVcBPuK85fpBpKNB3pZf3sXmqdVFEA"
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
