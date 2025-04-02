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
    "4MSwzLsWgi3tmrrZoUTkVFBqwAtKWrwMpQ7uqhVhW8RAgGdFcvJcPVEtSeByDCrkUuNGhtamMNTPur2SzXmDdvVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNnm4qyjYH16t6LZvqhq3vNAFNG8gDVHeRfYPwhmD7ePZCRoDnAaCJPKCq2HaNvrTUWMAq51MenfXph1CQ8KGno",
  "key1": "37DsVmHm7gdeHWbva1JhvmeMihWvZD2PiL4fkWi3gAR5VSKx8WBXvgbepEPpZeirSit3MWyGw26X7hSFZJ2Ycn7m",
  "key2": "233H4wKkYoeS2RuQoBHCDA4B4toszRwDgoSsv5QsSgD7ayC629Rn9RewrY95fHDum5UyxXvzFa7fxDDz9Ges2dHw",
  "key3": "uVG1UEs7pFdVWf8L5T7he8XSWwqoSDs7fnnZ7UxmBWt9LX2ooUUeLESowcu2B7Y74yDmRV7R41cCyMvBwhotd8L",
  "key4": "2hauC8zZftgzNnthUP8dKdqQ32RKr5nU1ZwJSBx62pqqZAZJouwKyhY4s5wD1sfvXqaqQTaytCewn9L9bhrAgvBD",
  "key5": "4HU5q1qmUuwutTTCXWU4V6LMSjKQ7RvJHPN6YcYoiV5ezz4DaFXaCEbaj6W6bQu5fgbSCMtdSAbFrkBoAp7NzFM2",
  "key6": "2r7hjq5BtQ9q6xYpKfurezSkHDi12YMdydGNm3FLCCVS973eEdsXUPHpCXN4rLsT2ofjNnAT5PxobCw8KjS5Ravp",
  "key7": "2YRvJEE8jGuhfgnREmpFDrCu4DoHJ2oKd2wVUTzLFHK2AQbxYX8TD9z16Sh8QRyk59RfgWjQV5R74cRTZgDbdkak",
  "key8": "39kL8smhEgRvVesHa9mzL9vRjMKViWjkPQjZbyPda8KmrFPM7WSRqBH7JWLdMzZCMFFvVq1P1ksneRHqAujAQKUj",
  "key9": "4gocTU9GofADeoH91PHkELQ3J1WFoZ3syxjCoJFGCsBYCLRRew2326YeuYu2ZrjnCU2Rm9YqXKcrt1Mo4hNGDbtJ",
  "key10": "4CkbPX1WN6cvF82eAKmsZSRPMWYH7nKkw16BifUQotcLCMc5nUSFPEXg8rBqFLDLTjrZd3ebfkvedV9ggENUC34k",
  "key11": "2ZdKpVtFeJVSwwaHtc2VkktzyDUaYTWuEktjvMYXGzFRzP8PSs8JC8ucmQkBVGjawEuyWH1J6iVDLKyedUfnudyU",
  "key12": "49KdkSAp938cao6p3BA6NgzKrWdJbQPumEiexCUkaLSMurUzj5kWcS4b25GC55ErD1Ksin7AfKacdew6rtiKD2G7",
  "key13": "2GgCJd2H19oPBo8k4aWLEMShmDTzo1NkJwmpeTi7iYTNS47by7ykmXmJGbwENyD4U36VtrfK75nAhEzkgphQLjyg",
  "key14": "tAy7nytED81wtDTT5xaPsPS4u6qNRaze6taNWmZA8vtTEiJqPf6e7cec3oay24LC6zKBYdaexFzXsaBVDp3AYfG",
  "key15": "3AkGyxPvZYHzLNWAmTQWF64k4bgQd6Ed6VzRoN7uSrey5XrMiuotB8SEsvcXgHV59oVZESJnhgQZ5JqCDyYRTuhi",
  "key16": "2Pxs1B2tNAWpRCyMxKGuWbfHHJveNbjkFyPhbFj7GtD5sQArKccSiBJphm8UHyXFToPJMT6pPpEHr81hBFmFsLz2",
  "key17": "29WKqGFqxcN7tnVpoDVvjvoa174yuUXAWQXQmm1WRc4CSdW8N8WVospAz8R7UKtT23zSHhS5uNpNGz4skzS6JjwR",
  "key18": "QQdcC5HwpBzQ4fvGosDozrQS3YZorU52rS15kJakSQ8wSogfVCtUzJP3FuyqudPHEeQUa1J1rBkdsVXUVwcSqGG",
  "key19": "47yJhVgLzAFDvANxTTPtJWxnjS2tcCMfrCruD8UQrFXoJ7Xf5oMrvUCvdeW2KK5gMcQAMyHFAfUC1wvsM6J6hVN2",
  "key20": "4Ja97Sg5ZtySr8smdedh84gve3tFDeh9icWqWVNpbddaxUA3ch151sa9tt17AeUf8mhZq5KDweREcGZHaoe1N96u",
  "key21": "3EJdk4yUnKuBpP6FmJMM3BYuJXCmEvjaWifnYyB2TN6gWdi3chJCCvMSNMvZgjdrxDYVzuhxFinMF3c1jxykW2tq",
  "key22": "4KgkxQfT3NGw6Eq9is2y7DQKLxwLFobNy7DRND1LARAeAUyTgb6VbmgH9aQJpofivSBiX5y5JQ6yCvv6rNHAto3T",
  "key23": "id4NdnMq4woJv8exNNyFgEhgohZeVZCfaD2QGNocwotPabgEL5WND4TCFRuYgZDut4exRjzH17e6UoF379q1em5",
  "key24": "SkFHQqptN956mBWxkXSsghuuWfCWbGbNWErpjDnQ9QTVttFbVwx9bJghLFKfH4imoYBzcJkA1GMtruTFEyxPLL7",
  "key25": "P4sirciLgJWahVETJVELuvrNVxw1xjhMUx6w4GFGngZrFHNN9vTYQiWAEWYBuHhdMdm66k3hU3sGNLQyokqRLJw",
  "key26": "5Y8DqwfzFEX7e7ieut6G2NFLkiZGSa8W7KYaqGmnzH92vsyrBPPymJBz9GSEsrWDPiiJXexh2HZRdUcNnWDaqpSC"
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
