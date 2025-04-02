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
    "eVeci1jUfQonHQsf99MD2cFJoEAJh39g2XW2hcmoEXB2a4WhEqu2aRhsjJRhLTf4Ne71biGn3nTfwrV5kYWSQnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDipFPhDjKodpCRCcpuN1ibymZEfC1hDYb2UU8kCHAsd2J7Hp2aqcshheXTGqV3rw8H9DpuZULuwbvMztcmn94N",
  "key1": "5qbXNNaDpd9rhNXmf581NKxbtKG8GeTU539yCsDRPTwaULFnZS2LAWGz9uKvB5sRHXtW7P2L2CsCTdTfpe9kz3UV",
  "key2": "3j8k8QNSzbCAFBsKPUP26jnWCVkcnBmjm3jhXPtxjLX9aPr9vNdNwjvKvgX7pa8GtimekpJ77dmK11JJ3bB3fENK",
  "key3": "4W2xGc1b7pQM3rqg42Qp6rBW93xg9ehQaELmkovAaAh9Ko6C5PqcsT3uhzKbsCLFyJdXM3JXaojNu5XHVaangvfc",
  "key4": "4hG1vdYnwu88Ur89gYtvY6GEPC3kMrBd1SM46Hg8XcW67v7zmigTkLQT7gyzQ1o7qQhfc2rB3WeLahpMhWK3gme7",
  "key5": "F3Cd2vPMU3M89aUTZVyVmZFKD6PjGiN878mFcb8fb4AanfKFPvAGVPjznmGhXSsN3kU6TXD1oy3xZXYtF4VvjrQ",
  "key6": "3R9ZRxvEGrRiPWDFBmEsuzKqtcAzQeNHz85j9KZxhHxD8UCqwcpAC13W3tSYTT4bNErfLjB5JNsB4ixpwD91xZwD",
  "key7": "5Rh5KX9Ge5dehbk9b7iTQCkjqWXSZzQ8qjw52b3R8WfjisRsX9chy5TaswieToZ5wHXguH36919TfnVDmChwjyCa",
  "key8": "ofp7CyJrxEFR9boSUtEPnKgBRHvUmgfjtwtSe22kshTTzWiUG2X31SVttTgpjk9N2qzCruYRPtc2RptDWQSLvrV",
  "key9": "2ggbBGGzMCgy9yxTq9bsqNdF5rdmopXJnjcsvxSCeMwozDfDyVriNXJkNi65iSkSbr4eDAHnkU7Revyvdhk5NNpe",
  "key10": "59nWwmFHKKSzA1URHyjZVyXtWsrQdoUbhmB9Yk19ozw3RWA4wz5AQUJMs2MfD85oKqPCscAWrLkz5M9FA2pfN5Mo",
  "key11": "4nMMacjnGTVd1GdppSrBM2KpCEAaVnqL3Fdbsay5hSwjXfMiG72V4gB3WVGnwwXScqbJSr4csK6E3KciFa83nGkK",
  "key12": "5fNoBFqNkFXVpVP2mifMkDmrQ9mt9QF72tSQUSZzj3QRfLZs1pF53QdZ6YeYxpBDz9VPdYxLAGK6YTsBvLvS2X9s",
  "key13": "2BBSB65TdHeJ5C766XeycexXuJZcQAeLQHguSLX3wLo53GtyBnGyTWj34xpBFUeh6BqQsk2nER5zJpPddDN3Jfpc",
  "key14": "3fEFVAhbQ3CtHcR4j3YTjrEBUM1vUh8YsLU4qvtfnfb3eRmakEibF6kDuWKwbSZFeRnQsFLESiqVMUzENYEsxBTu",
  "key15": "3m3T1cdX1Cr4v1rE6v3tqtTBWYtJK6ghNTsNhctjUTgbsEHAx87dwTk6upXMKYK1KFHQAh7NNy42T5AjCVrBbNkV",
  "key16": "MPd3d2ecCCMNDAwzwcUcUsGsGF5x1dCdv818TSge6xSL5aDe4ndXEfePvwnSVZh8MqATKbqD5QQvkFrYbsy4xrW",
  "key17": "2ATFQRSMqtaABGP8zycNtBxdCu7JY2bobxsQ465U8j91p9YLUCL3Y2Y1vdSKLDrbyAcB4DQFNUVh9jZ9Yc96V1Kv",
  "key18": "2ipJErhkYKekZVeBBBpKwLWbTzUy9L1iB2i8xaKdDPbsRVqzPBgsaqneLKk3aerJn6Sen42SZy6QUz9623bCMuYm",
  "key19": "2K8hGjFeLu31vMPkojFVHy6UvvSW33WdN7LGr6ZiYSkvDegPpHU57Mq8tdLQNeDCg8v7hcYYJjCaQQRuf7ath4Ym",
  "key20": "4u6qeKPyT336HxFhXLSApguWiLFsnsFqNdTbGsK5CM6cSh9nU4VzqWwqQXaibjeZmuiaEBcG3uSrpXzJRg4mUEFg",
  "key21": "4XtXf6jFBRpfntQhNsVghNkLfrbBS4fU95G85yDs8Xv81wusKFtHcDTTkuvGq7GDm26knadQmWCbyR6VLvjpKr2u",
  "key22": "5eoGwQE6SxNC83vVy55Ldy7p9EcQRqT4EbNX3d5UPPxRPrx27mss3mYWG1nZaMGdkp67NJYAF68uT6ncuEuSaX6J",
  "key23": "3syoAXFTzbBrCNvKmRTrZmaP2HyPGAPk7fjxuPvTNAR4nfZypyaHhFbLqu9F7FJx7T5Z8A6nD5X9U2HZprie2moo",
  "key24": "27ag2kCDnrzQFToxUGRqDgkxA6vqzpJQAdtez4AWEtuTqnCSZGsDtxchQvKUEFCRC3DxHJTvJQa9WNeZtJ8pWsxZ"
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
