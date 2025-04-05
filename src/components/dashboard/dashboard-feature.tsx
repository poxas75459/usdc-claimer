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
    "3KVRruzVxHor6rbcHz2KcacoCw51FzownotZERXwNkQ4DUVmodijGPa23kTmxMJY45RAc1nXL4wBGfLGYsHjazgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8AvftF2ZXKmunw8iMudTHYZujL7kYKL2EfsE5DNM9AZJr5GyCH8QGCNpN8PkZY4smApGq6AhoDmapd2w9vR1xL1",
  "key1": "PsbU1J2Rcdrr8EMmJAyTxmQQNWt3gkfoCtaCUhGYakrz92eZe3c6uH2npLzHA7f3sSr8Hbg5hffdQZVEVZ5gSXQ",
  "key2": "wV6xv2RnLRFyvN28AfUDXSuDeJQ5nbXU39mj6kKANo2qjNwZgaxpjUTqErPRR7pkA2qaHJL49vKLcGsrs9QP3Dk",
  "key3": "3GUNXdFB8Ly1FRdqqH6sMxZspHtSv9L38PDYczSQPQtytkXKKC8mnaVainunugMxavDbiKD5WfSEYYyMSxTnTDvB",
  "key4": "MYCBvSdHxSZMSzHrDCgc1gu9Bjgb3P9qMp5FUbQHQ5Ko8ETJxXz87pPrN3PPqPPPxumV6DnhV9qyDAoBKNxyfMz",
  "key5": "TSVigjggcqf4K1k7j6pQVTFTeDB4eReUs63fFgyHx44DXPZgd34xduguK5U3Z7bonmxK9qnM9dro1q2eqKyXBnm",
  "key6": "5UAwhFASroZA2rMriBFSW1ACmo8rahZR2AaxzNsSBSeuxeQ5vrZwCgvJUC9nSPW88mCfnFUmJYEAVGgbWTSpKB6t",
  "key7": "4bNbPtiYCFdS2uwCJ2FXQSKcYdx2bHKQpNhsio4MD2dAt896Lmzrnk3kd376sLHyixchZEcwz5WkSFCpU3k9m9Me",
  "key8": "49nzcE518hhV8A5YV8BurxEZjcriivhuFUTKQQo3cq3Ei46iJS18qBDtiSfJ3YgaHrETqd4E7tDT5S64PgmShQdZ",
  "key9": "5rHgCuwFGojVKA2QXXpPDSJ3itFybwyicB95QtZiCDgze2j7yMS5uGEMD72GrPuiAZxZqQjPA98ao9ajoGdEMbmv",
  "key10": "2E61rSekma4Vcv3viAcvRqYShUbJw5X3os5Wo9UDPt8vR8X3EhYHQuNBNobFE8fUJd5P3kYuZkC65uY5wvLH6jC4",
  "key11": "5Unv2B5bTAJNfnEPi2eWywvaxuqk6NLn1enEiaiwtbC2WuoXe3LsREde8nHHUZcrjMNzXBQnDnHi8LgjaCkxa53",
  "key12": "Ss3KsUokh4m8zv8Mm2rtmjKyeEnRDhintmya7NCpUdwueYW61FVKZKnb3bAyEg62MJBnrSaFmVsEaWqhPwgZewN",
  "key13": "3KQbjhU3rJn6EfMASQ4rdvWBXBD9JVRsnCKXkiraC3sDo7WpWGMe2hHiF7G4MvXc8wfumKXwbpRhMevRTjuoJPZ5",
  "key14": "4x6GhPekxt7F7voGX63KnbGtojCmCXaXNqzu892njuZdZXqt2hmuoCTTtwKzv33pZEXC41N725rny3RMep4JEv4M",
  "key15": "WHsXksNDVe5iagx8YTJqcehqBCCvJZVvNKvMPwmLvaSCZvFx4S7n46GCxvBbFVDZX1vnCMnBLZwetXHKf32YeFF",
  "key16": "5vWKBtBh8LiFmdS5G2PK8X99VkG1PhNiuhRWNrGkMDcKjksHV8epQrvPgim3XrL5Wh4ncj1G2tuyHjSTUEebLjWs",
  "key17": "bZyKzxu5ecBDYxVoV9hbPQcyVWtmiqf9Y9H2rbHkWhstJ7ZnZKaJTw1cxi5XBjCvb5B37UnfQuVPKGifdALQpyV",
  "key18": "5YaapU3spSgM5ar3MhrJFYsM6hSvQ57jTxY1FWhybDuuJaSNDnr7PsqB9myrRNys6QCFqeiYN7Hqo3orihQbKy9d",
  "key19": "4ALrs6YLu5NuLZ3gsQjofvUwyBBkTVeJ3jyW8bmX8B2vaCRUvTp6oay7H85Kv8dgzyccdxDpGnxUEkNj794tWx7b",
  "key20": "5XRAMn57EefFx1qFZi5cq6TFc4KE7fGJTktW6WTQnqNEnkCsHCx34gCdXbqfBTbmoTr7mAAYhjmifZF5Jfn4TwrY",
  "key21": "5Gc95KWYmGrgXHMGoQgiLsKxnCKAHYGPRNemmLxeAWxkh6JC5DTuv1m9jiFmvSGuShsbJnu9HSNnXB2Ex27bYo8K",
  "key22": "3XxfFBAez8sQy7xyCQLqPSJpjBeUtbxicLRwwyD16zYAJLGubamcXb5Lx59zowYGqJJ2i6UAzLe6yNUh9arSuqcw",
  "key23": "Z8yJtcdodEmNhzovU2fkyAxvk5cHNkHmkyGFzjkbh4Ai2bcqg6Mp9kdyZZ73DM66JE6D7KuNEuNLtoeTvKs1S7M",
  "key24": "3bNAnUaL4UtJDzCfz1KsUiwxaWwQrED1NzHReLwa4u8j7X5F2wr9CBZ68DCj2rXvDkFzje8XyFMNuf1t8hRuZiXq",
  "key25": "9SJV4qSceVmgyMKATZtESbuexWf3NY3QJAHDQcrMgwAEdEFKKGpqaSLgmZMToZTY2z5SC8p2GpZQnkNX255GTGV",
  "key26": "3HbpB37Z8dAcaJnMQi9FgWpr4wejETP6Nym3QETLg7dB9tGCTD6TgeFTHxbtz7vjyiyDJB1V1nQf8zH8tQrMk61E",
  "key27": "2jZdY1ZGKqFcH3czfSs1wP1pSGjNuU7oXdDxSb2jZaPo3efdRjdxX1ZtkdET9rC6oxHEDKD4npoUsVBMhtVK93dZ"
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
