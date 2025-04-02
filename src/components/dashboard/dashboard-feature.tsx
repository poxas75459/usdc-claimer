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
    "5GwhqjLtqn5YRHCGEfzC5hVvJCKK2Mav4snjWiDeBmE2vpqtkQ5hVWtPyYeYVZ14T9VoRWidNQYgDWkPCVrMzDxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmbguNTHewiYpGMTh19BR6du6ppkXii3uoEScqQLqsAN2SVMdr5aruJbpsdDo8xcZzjbuLk7qShTyCL8CNH7Sdn",
  "key1": "4TnZFCGJSgaVR5J8dqsgizYvc4kdbLX2Ja48g6sUGQ5HnHdarQCRcCGWA2WvZTsj4W2vcSuhAxdon12GAT56LgQy",
  "key2": "2QTYQnWYcjvZ5crmzYcbxS5sK5GYeQ9SX1JVUcmns3WWtrq4KoCzBxNp5p9a79c6jQ1fF6brqJmM6kJQFNaKvPEX",
  "key3": "5jruwzt7v6oQkJLuyeyYustHzqcVTWNbFQPvbxiGdsFaDo3w4x67wBeh2KM13NCUMHfxavweFKTGe1EPxnVBipwp",
  "key4": "2nDv1xJ92f4XT9h4eiM1Ho1mTBHYQTLjuQLBEC23GFYCZ7jWc3ep81z3DwBsCMmAcBf2TYUDLw2qe9FFM5y7mHrk",
  "key5": "2ShqNqqzvnzFuW3ByyPqLgg8mtxy3gVqKVaf5aKHk2CZc9MC9YBZvmyd1AYETnbVNeaahhmPDwF6hPsCUFF8P3w",
  "key6": "5E5VPQbtyuVFHkRUJZ51wyVD333gQ8EETGUtGBnnN3mmuEdZLwtRHBaLtc4pXyuVah5FoMQJeCsZiarkhfBewtzg",
  "key7": "5MP8axixRPeLSzQdnLWy7fFwGm4aVNiBujez6cV4CngKRdMHY4bwRGnCbfpKhENaXwb5Sk9ecQX6R6y9rehkcsR",
  "key8": "bsqWEaKt7Swj1oQrs2bfbysLnkbhknM3xzgw3ZdjgbL1tgXYrG6Za3NXExtaALrADdxEyp3Gpah3MizrM5rn8EL",
  "key9": "4nTUq5fErPMxVgVqixNJbu8kgmCKV2byNTsmsSddH15AySU1CDRTh5YWTVqRitF1W52Sb5T9pfDpSYR5mLcATJE8",
  "key10": "4UAFJPJJ7qXxsvHen5TwZzCq2EFsLWtMQ8HTXe9CBksjpjUCHCEyBrrH8EopUVqqsFFLmCRLMF4YVtPEkAxuU8T9",
  "key11": "4uHirrnkxeZvjfW2tSoiiduuZU8vfKX1JYgWjFoyDgDny9xJf1Yzp4mX2Rh5hBW2PdAN5gzRBZ89Qc3nfVXLbAte",
  "key12": "2H4cZv3NJ1ngV68Ava8FUkkWZixw8oFjF82veu5Jp766Wozxo1hVYxDxEJYc7DoT8BD9bdCjS6TXCGTZtbS6BDwf",
  "key13": "EQaFewG734q4uRSpuruRFUQraSKTh43X2nsNiKh8en5P5gVqXX7N3W2PmTAX1xWUTUMinQrXxThjBBYapwSLN7y",
  "key14": "5o4QmDAW1KexrkdojcGbN8KqnJdZ5jsDSRZxjLnRgsRNprGKg3g4QTEenVLsbQsSNHs1Mo1sp54SXtZuTveE1KC1",
  "key15": "2hAGkGrsqAdv53PCp5moiREbDjKPRjHysJPvLvNzdfCCTqgKpiuUXhkrpap3qqatdiehHc51h7E6927HekXS8f9E",
  "key16": "2hrGg6XW7h3X6Spr8U571WHXD99vo8hT4DevKaxfAVG8eriKqgYeR7yM4Qsgc5J97jbH9uHRYpCHdDrc3c1As4MA",
  "key17": "4Hgm2ncbfV4qsjC36zBXFfF3ZW3BLQeLvMEZVCCoyAqJom894D2BhJY4FNiezfGyHeAbZFe9V6de5Y4mhF78tKdj",
  "key18": "8cfqUrQGZ2ESSt2jbBRiGrEZzVagKPaXttxgwqaZ1ButH4wymK5WJPZ2eTBy6LPXjySur11JQUsP1xmtTVgVVeX",
  "key19": "5kuhHVYSC5SyyMBzY8WenDipwR9ui9m2u96ifH4juk1CBbSh3DX6qxRgingd2NbQHD3E2pbotGWm5fs6TePCFLM",
  "key20": "37BTG6vYL5wy83TwRZ7woyi8reDVDZR9ZyycoyPxeiS8kqBRy6R6naDSk9rqX4fLTVLsY4C1QyFxAsUsQ7poBBgX",
  "key21": "56pK1Jrr2TwG2UyFDFPZPFy59HaAthaspqCWWDWndwvwCJtxzpKkD3nbLUwYKj1gYQ3mg6XDsyChQXReKUi5M2h4",
  "key22": "4CsoGq6E43Kywh2D3gj1gPVLjx4g3pmRK3wW7Qm7UsndqhpHB33qunEU5Wyx8aFCdc6FWaSzTnZ7FboDfZT2Rto1",
  "key23": "4gGFZv2mw8KA2ce1gvsz1XZrUQQxsgtAE8RFQfGhahfK5zzBmGErUbLWyoyrecBvDqWa53RtXcQaReLGRZn6pz4k",
  "key24": "5c4AwUUJW7uLCmNSfGiWA4uQAD7aZHz5q6TJgBHhyyyRmQbXoZnXnxRQ9Az58YfrUnWJ7ki4KtEZcT9Zh47pV8Qr",
  "key25": "4r3jiYv5UkBQErWmaf14SGANUV3hcoUWAci8sb12rSy2r3MSF5yDTN1JsiuBBH2bcqPfDsggGUQrENeyahVmX14i",
  "key26": "4AqZn5YzwVxNv73uVBmjiiURrVqeomifY9PC7BScUYGqhgdEgQKjfegTi6NQmpH4WraHdhGzhDp5JmQCSkdWnchP",
  "key27": "58j6G4Z6ABRCKYWGHwSuznw7eTxFnUEc2JyqZkyBGXTo15kHFD5A5uNYimPDTQmTYjP9wxxTe3Quj7z82Wc6sERw",
  "key28": "6N33cdt7bLzFJUFcqjki81yEoE1gnKR6Wv7eW9dQq1nCYKXNHHNDNJfwMZT4ERrnmktbmqfrSWfFasQtEoVR33u",
  "key29": "56396fwyt6WGsFRmZ5X3SW66HtYaLKC662VNNW4pDsEQd8Zxf63iDmeSMKY1PdR5YNmtCrudV224E2zbqf9hVPgH",
  "key30": "iyCafiLthMkMLYso78odVAjNcUa2ryecfqqyXwojmjYYAsWQzzKHRurFSTVaCXxW6T3WZG1tptsnksNNVYGbiaV"
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
