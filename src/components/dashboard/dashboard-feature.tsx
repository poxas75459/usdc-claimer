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
    "bH1JNmFDpyx4kJui7SfgSzevazWjGyVEhpFoLRHakazD45UZryD1aBkra6MvNANfAFosvXTjJpwSNrknsawbRGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGd8NLozKQoFgTzw8zm7LQNoA89f3Dh9VTHAgo9DnpWKjYRmVUUetD9wQPQ5JhXSfk9eYfQuYELBEHiLToUqJfD",
  "key1": "3kH3Wr2pPRBViB4i91H4XetLWCAChFsGVScTUR6nqe7tVPh3ntKitQ3vMznoXVsXDHgS5qeFsGBfjrUEvXhmm7h",
  "key2": "3GhPZTpjSMQBT2wQRnrb2m6hs9xXuVkW3uxFervLT2XpPoBJZ8Y7qEDgrCPmFEMoPys9yTTg7cFDcZb7ooPd1izB",
  "key3": "3uXb8ALkLYCWoLLmEfyUQT1zB8CLqzqdaSSDnei8EKRCBpHdosDBZsGRHVse2KfDvk31jHApoXiWedcLYW8L4VhZ",
  "key4": "2wHgNpiW5DUPfkYYLNLar6PUWGiZWtdRGn32JZFHBQ1DWNTh7KJtpaqkocx5rLq3wQsxMGygeRGptxNq31xF6E9W",
  "key5": "2o5NToLZpPr4o91GNEboayFRRNAk3bXLCqdyDbntzNTVHLK8yyDsj48AXTVBZRUF6m55NXGJPbULxzkt6ZeSgvBZ",
  "key6": "4tqmkTKo9wryytRh4zrGRVp9WmHcgiWbdQvg62QanF8ysBQwQ1TBya5uV4L597v1R9P2vZhhQbwC9CEoqidjLmNk",
  "key7": "3KQ9peyUudCmwsjGSeLuwYVEwP2JghBfmA6wbFqDbj5TekJWShSo1t3SHyoYGDqXL5A7QmcdvvNGMePPEsRnT81S",
  "key8": "28mKGndHrxkpyERmzLQZrof3FvodvvHC4LLC6hJaLmu8zQPQtD3f1UVpnnphqDmhyPow2HmA6d7XYM2xNp11FLF7",
  "key9": "4HvHFEHBmqLPiGLQrmUuBV1VbRGs1tMwPuj7K8vEtJYFFbinBmFagy3bzvA9zqzaRBoa59jrH8BcX81zU5H6gH4S",
  "key10": "5ua2CR2VnDqAGkfSw75xAX9miLsTFtemwHdE8SXH45rpiBchSrQ97RErzxA9fEt5gQnNhpvgLxSsXu4QmRMUp1Mp",
  "key11": "25k9ZuTeRLhete9uwnhmVAbHfZQgJnptykoR57syKK7gJr2fvjAM4JnxTFv6YkGDjEw7TPNksn1LKt9tF6FAQC6Z",
  "key12": "5PK3S9zNJFp9ds4sWe53kCnmMoCgZEixmV8AXy2yyWrzoLAsBbkyJFDtTH35DAJ5C9hD7NspRCgGgEgxL22axSqh",
  "key13": "Xqeaeiaya85sp33WHXDc4S1MXqFHhsVBV5hVKcW8xn3jHSQqb48ESmjzjp4UKEctjLCgy8RuAVU2CuAyY5CLtms",
  "key14": "3skV7xTzQiu4PTnvx6Q9N3nB4Jt2zpSzGzNQH6AWdanhKkaLfgPRKQuYobQewi5TAFNAGBZzBqpPvdLUYfGCsxWN",
  "key15": "2K8QeuHvNBH4pjosuPicooFQGMZtzkYi3DDaDDQgW8oMaGk2mQdMY9DKdFyrarisDEvJ62SKAL76uBqweNMNBWaD",
  "key16": "4Lo3KQJjecnKxaDcMisC33UPM7yXrQTETZvWWbkbQSVQbFpevuigx9nFmdRfWGgqNKhh5Cu1GYGatybshjsGbQva",
  "key17": "5Jy1zu3qbPHkuWxfDWEWLezR3fGN8LpHjyHr1fA26aPXmm7dGQPaPhEds7iT6P3RpgJsZChFA7ZrWe3g2EfJakiu",
  "key18": "38mwW2maqmDLJN3dJBghwkPtQXWLfsmyt3CUTL6xgsNxN46cQw8fkP8ZKhHkUSosBvJNPjhG8Q1R3uAdFgr4pGXB",
  "key19": "2dLWYuriP6XGrW9GGHnXfHB8E4ujkC3nF1PDkMiqc7MDsW3FJG8A3LLV4QLNPwrizDomhF9BpLpv4WtFAr2RCrCx",
  "key20": "3jVX3T9esUc53gDwwmw5h9GchQxPagujbxipKTv9RC5TQuQbegXs2YuQUFXCBFyVEzCekAYTxi6oVUPACKJKhERT",
  "key21": "4YwTH5Tn9czCZkGTAeVPDPTiGkPPcAK6pjnSL6pHwkc77df7BBnxtne1JQxAJtcQ9fcCoHdvKpGwLsibZr7FMcjT",
  "key22": "3erMfc3eiEsmPeyXtbQ9kpBWW9mdb5PSBP5cUQUajWZHGPnRfUrwwM7WtQPFyKZcwDANRbH22KX3fjX6aDUt3nXf",
  "key23": "5gQjLfEiHbzP8K2sy9gDfrBx8cQFxrcEseFRG7qQyYZowydbvNTiXsSvtr4nzZQ1fZNossdMP9raj2BLDdcyRCbS",
  "key24": "2mznRHsdJsKCNdZ7scWoNMWkudo5PJtGq1vWAtFQxt42Je4cbH3WkmMkhXYR7E54UMf2784yMrCLRRoeG2A7gMu6",
  "key25": "ZLym3adMLb5ercEneSZw419MwqJVSGxMFxZda3422mGtXai7FoiwvBXqjKJMFg7FXeUaZZNoXPBJBFYz8AznLMW"
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
