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
    "2F1B5c953cvufWniyYHNeV5uVrCnepytRJzsZkD5xShgDG6ARS4LwSf5jQ5NDmeQ3z6ENbienBgpafbU4raVJqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQXsSkhXBdBVwTVPdHp2uhSHbzgMBCyHzuLy9JSDAn4nKtFqGFbenFiN9Rs8PH2evTGaPgAvXknJB4taTf7VDBo",
  "key1": "2CtwC734FXo4sGVRd4mwcG3GYCFJgj4gy39SNw49QJLJ1mirtUobggSPFZHkV1DtMKDFFYu4kDUCeAVZcS3LVYCK",
  "key2": "jPMwGHhuG41AMN9H5mJe7F35oLcyJA7VfdCC7MdKoNBQjCR13Fa45TcywhQxBw6f9JYUtA4CT3HTxU9UQ8r6NM9",
  "key3": "4PoYp7MH6MBArHMPjHh6vsqN1RrE6TMCUN9ndgccU9NJ5qUy6WPSFucpfXwVfuijSkgohLqUySYdvBm8KBhVHtZv",
  "key4": "2ecZ4iHZBvPs7GXsn4oDmmEfyyfao7ebqbnMySJ8k8Dj2bPR8PF4iFatojTmHyvcaQZLmEj2psHxyf9CUkAF1ZZ4",
  "key5": "3br7hmgviiw6qurbBPvcJjeoUeZ2wHgjkmHNn26zjZvtwKGZeRr9ZhQRMAYc3UvjMJMJQ5bo6TBQYe2h3mZ5aER",
  "key6": "2uH4Mxz75Sn3Qe1fkoRSQshbegyocxPCmdXyd9k6TmR5o1aQMsNfpbEQYDsbg3AuPxvnqfrCzMhxxCdJvFBx8cMS",
  "key7": "3jpqzsJBrMHkBrLhDJ9bvrbZ9ivWvVjpwg38nGS37Tx1Tcn5yz7sCMSz9yJqKZ5jYW2D7qBkjd8cwy33mvH2VVDN",
  "key8": "KEVxDe3h3YqPBZJagChYA2oFX5kCRf8P6XK1VfS9ykhQVQJPBs5ySqnsdWgo4iTMkZRwaoyaGqFi6ypudfdKXc3",
  "key9": "2NBunYsMWXcjjrHJybHr6xtL8eDALPnZLHJrv4t4FHSEvPHeytTPzeFA9SaYGaezfECmCXZbyDBpeg2c1zV2nJZQ",
  "key10": "3fy9hv1C2nt2a2mGA4MpxR97a8CvHAqng3pHXZu7SKLpx2zWzj32ANR4j5wEwp8uMznExNbPx46J43h1xAr6mWUr",
  "key11": "3C8QkW7r3VJAEzXow8FgXe1WKEzKciVGwichQ7YrgLFmWVVMPUtkJ5UbBmm4uZWo7pTPCtkh4X6BpLo3G6FfXTcN",
  "key12": "3gcZ9jn1LbaRWZn8JqLYFeQeBuKq9AXjCKmpXBX7GK3vPMq82DQc6zJ1XTTESTDsr6wFQvNbzr4mwsTr79AGhxLG",
  "key13": "YmqhSC9YxTSqV6U2hVYGEd8QuTu4RPJ5ZSn8UM8LRKN6WXQvyVeaqHGr2JCsxv7Hxt2JLxm2o86A9qcuYr6cTwn",
  "key14": "3oSsecdSmVaftqipy8jjwoo1DRE43izeaCJkzTJtocE1n5dU6krNh4hG7RTtH6UzQHXXgV8xqjG4vUmXXVM9Xwok",
  "key15": "36grxWe8suats4jwS5e8YT3yvUxQoCHqnQRxzhNgptVTCkBKrprxkq9t3ye1RYy9ATfWYu2BarDApZnyg6PmZ5Qa",
  "key16": "5vtMyoHkEwtZE5p3Y1uDQpGFzaP6o28YJntyN5ToS5VVW5QSRuK1rSBjWFYVV2YHiTHfpKj8TysVJxg4NEWyQoMi",
  "key17": "3t7Fu4TEW1B5LWLiRqbpGPggd65qMjMskSSGPDg6RTzDpMymTtbTbXkt8ZbYcRCPczEdokXj2S6gdabmRyfheZaD",
  "key18": "JKuB6DTP4gCM63MeEJYBCnY7t7vfPtE5pxyLuRrTSJ4L8jhzgNtrWd7r57pexHe279fxp4Ab6qDJR5iRs58N5xG",
  "key19": "5UWck75qRYsMyTRpTAy24NANqwX4LzQgvMgmummaVtfsWK6AxyDSeLLCtyRDVhjBU6zmkeRh95GmZ2o1Syz4hvBu",
  "key20": "SCPam1beUqVAVDVjFNyBKs3NRGHckqpsCZ6hYpeqmoFUv1HqDUS5jAyar7EpufySxzp7kwpj3QJrFvmVbRkhfvz",
  "key21": "4Dsjf7sdydYgFHDJ4dfqCqakPrWWckHqwTY4cwtAaMSYjystWSXG2PiWs1BqQchfQxejTGwkW3MCQc52vJ1DKXg7",
  "key22": "5ZfjcoEWHvfuVQ34mPrtx9owtRPSyZzQLAiMMiKgB3UbnAh8yuYSU4xyWJxgr2WVBp5CvZsW7uyirrTmFMchHmTL",
  "key23": "5FEYn1HDnDN6ggBfmfdm4KS9r5kbt5nH8jtCZerbcguhJGfp5nviU4gKz4km7xX88i6diKVtVdbddeE9fMttEHu3",
  "key24": "3cu2UxAeCEe2vyohYL44m4Jksu1eNxFkUn4ih22NxMFQpMRzTeHJC7SyAFqFrLGxHMtg21nRBjX1yCmDLa1xSWb",
  "key25": "475hQKyW6qGAFPsVVfA1UnTUcf2bJRqwMkJPVpTr8PMMh7wf6NARYRzs5CWXBrBPWRqjpMhNaFopnYC8unbPFjiX"
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
