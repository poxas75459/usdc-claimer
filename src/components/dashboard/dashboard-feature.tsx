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
    "4hbDg89oiYu328DTEZb5DdbK7LjFTqSBPVJx6SzuVCV2keUnSz8NRkGaRuwYEHvBUKNVmGL1yXPW3M8PwSarjjh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFkvLHf4znoFxzyqqrnf1be2NQqEjyGk5itbrGBoFnPzGjjprt5sW7NhzZuA11iAuLudwknwzEfKEyiH82EEBmy",
  "key1": "3DA2qYFxA2Mo5ihHv8VGqgwqgb3W4M8oMvpSWYkBhgddyieqTaZQLRQpwPPC8pAF44j6TKfiVjseXMfgQdBtb4g6",
  "key2": "Uu9RKpBVxwX1R1Nt48q7ZAtG3cdZ9DmwojDMQAzL65jGeDchc7xg6CsoWYxwbZPpkMdXJ18nesUwpRF3bq7Huep",
  "key3": "24ovriLTreZdJdHvmNZVKaRFAxfwtU5iLcvw5Q4qFurQCqmqiVXpJ7L47v7EP2mH2Zn9qPpUrFnBqVDD2SnDodeC",
  "key4": "62U9Ntv3nnFbFqWyVxCx23CQz84Vt3QEBAqYsxzXj3r5N1ww6eARfkK3jwW9poGRYMubKpZaqRcUBxw6BCqs2b36",
  "key5": "4er1mTSEaSr3cYXxiVp5UKYG9J5v387nsjGfNS1GpmRwn2bpPSEXRv7dvszD5rT6GWCQSTpgqcEPoxrodC368W8m",
  "key6": "3gdVpmPC6UEYC3fN5zH92bqw26J9pR7sW2cwEaHvMqWWk8JNZS3HAcqH7FpZeMZHtu8EbFHTPMXHw1tY9ZSrdRnb",
  "key7": "37qz5jr54RXy4cXwi4dMujapw84oSwoPTVtEyYuEzDNsmvah76MGXXfCYwHv9sdGDzqrBU5jsLPX8kBhQiZdMZSh",
  "key8": "2pKgyqVb4cCaDC2cE9p9o1yRJUPM51DzNQoHKHsyNWgAGwN2cZTWfx3C8q8NAKARzCZN9KR2hJzkFHYeT1Qbhu2K",
  "key9": "3ymbLuWkQt9pqPfPS798HiMGBdHZ5kzHSsg1NpB7DyQH3cfneSaoKoncLJQknpaSkgypGhRb7zcCxuusXgAFTmXu",
  "key10": "hFf7i4WZkYC34BZtmxcVvyhV15HdNJSyJdJ3DkSu43xSS5ihJbjWsrH6GGDFMK266A1JsDLdyZxSXqyrLQ2BGLX",
  "key11": "vYVeNSDVKASEzPKobE319XCYe4rMvsxHzdc3AdPaNC4sUm3HUPWJ7RVivd3myfF8jP9MEGhvJZoj15yZC8iBPj8",
  "key12": "4R6h79Uik7wH5PiRv36u8SjnWJqfxgBVCupS2x8taZHgitsnguKQjAKsM2HRzKggoeQzEb2W9557eFTMwaWWBjsR",
  "key13": "5uHfu1g85fauzmP9niRKfB9PQ66G2ZgY6ZikXAUfqdY2AT7fmcrYogD3EFqexjr56Kb9XJoB2FbZcNgcp557J9ae",
  "key14": "5wVLdW4cQ766Nd5r7ApMwEh7QHwn4H2HrkQ9dHMtmyALmjjqE74FmBMqYmFBFvShsioucmFt9Yn5ZQKx3tj343Ay",
  "key15": "2MDzjDYxVXtxoBHSBpuLBGcgSpae6ccGUoZDPxVgnorPBg2MB4qeMj8UZpkadoSc3b55ESH64bKj8FEbvkH2iwfb",
  "key16": "26mhyAZh1Ea4zqVm71HsniiPCbYFNZ9AkdRFbE8fmMTat1hp91d58R1NBvjhJZEBNLkTvgEJTphGMtnnUz15ggQ8",
  "key17": "4uagoz8xXAirQSRxmpRRQr4FFH8BJ5YPsgGY5oky6BH7A7PTSogcn2jdg1xuyv73efcYVAHpoRyRQTHbfFY6mnuo",
  "key18": "34QR7kE2zuNKMbyQAmFDZBddP8wvABxt2u68BrTP2W2MvGUssvgja68bfLpVhDjirYMAchf8FSwvXi5ogLcr7JiL",
  "key19": "3C3rHNkFkzMX3HqULBVWJ1Xfp7Gk11p7qNHzZW7VCFXynBCkDPtruuKbUHN22wVcodXbW29kC2zAHsaQVahjoYrF",
  "key20": "3Wu9RYRxduZ7Si9DikDWGTPq1z6eJYQr58Nh7dG3t3mtuSMQRyfSXmUvCYYt1AzGvGAJTvv8NAGMDYFBYpUBpgJZ",
  "key21": "3pUN7MKLhdE5JSSxXjN1kKGyAVmj8WnqiGXiEnR6uSWjmXDMqwVVRPbuBtti3kYMGMG7fe5kuCsVxn5h3wE24waU",
  "key22": "23ESr6MTuceasDdPbU9X7UTL4yRGZ37zEfjnvkQ9RaGS7SYRkUAjaF5VKtRG3mk5dNnigXhb6Ht3vmdY74izy1tf",
  "key23": "2PFfSZWvCd9RZzM4SBPm1mcU4cuyfsef1paGQWGzw5QUUFNqB5W91DKi2hwCT3t22LEB6kCqAUbLb3xyFGhRumt6",
  "key24": "39rVE79FkKKbSBUyaw2DcC85Y4RMeXPpi4iSsW2Nr9qZiEy9fbWVQAedraJCJarQ3spVE54reaTYB3AowpYzQsdv",
  "key25": "2hy6GXBHbiNj6JLhhXtQgSnqZD8tP7DE46s4V8bK6BRNwH2WuiMfNeaTXUExDULwkjqztqSSLSEW2P8U7UWPSYfV",
  "key26": "4AwB6DjnUaCWgYsiMsqknNgaNgw7DTaHkC9g8KN2YDPYgQTefnVvhnxLNrQD7AczK48xRKahTLoCoisYk4PMjJgz",
  "key27": "DmPeAxspD6QgWAkCbvADdVHj8EbFEZHNxJr5xeYKoN4SzxYqfTiAQXyDp56CYDHVzCHZLazS7xu7bn1DpMGHfWH",
  "key28": "2wYr2BRFU5VGZUY5ozSKtscKxzyp5yh2DWHcWCC1HhipLLy9Xp4Kdv8nBTkC3sVxmGDssKThMzESx4zYGYegjFXU",
  "key29": "2KYbUQbrsAEwvy1dGz98bdeyvXm9pRTyJsFoTtTevWteeVF3tjpootif6jPr6EoZdTfscJ28X7TNHATiqH4LTN7u"
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
