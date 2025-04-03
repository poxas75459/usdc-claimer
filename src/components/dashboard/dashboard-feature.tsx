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
    "4jRypawL4MEn3JELZAURiVWpHCit7Fnajj8WQtDbcC2NEgDQe8nESFdiUbSVQpRSdoLJFvttrcavmysPw4A37wPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWNnaxhcGpCNrKcr8EAJJfmusQjo5nmHEXeiNjo3UPm2wi2QTW6mnVJxusCfjvzv5irn4zLi6q7u7qjdxH3kB12",
  "key1": "3Md9XLJQQBoLniTP1wzPAPh9ujrWbD2NM4nk2Rm7qz2iN1UFkJQPTr2KyyNnpGcvMxrfmGFpdvmUZ8f4VLTHdqtW",
  "key2": "2TF8H3Bg6qSGopyVsA6RKYSXhBRmrBqAPUP6zmVfGtQqztwtkcTD87fHEMTLMjEAV2AFJkHSEd2VV72HFWmYp6EG",
  "key3": "4mzueNQSbG66HTfo2E6qfuAHRFcfTa523dr6hV9EwAkZ4tPJuznNnBnqo4xjtM1J3wEu5zvZhP3onZ1ssoM6Qxvp",
  "key4": "2cH9UH3vzuvB5kYVGXFxNMFYRJ8rXDNuGAAypidD6gE4Ld2kSetdfjXiVUqJ1S5xkSAWik49YSyzsV8AVvo54YqF",
  "key5": "xd5e3RG9gLVyoaYykXkjjRh5gH7yBbQ41fnYLVxz91xc4DCLX4r5sd1vYj9ssAmTXATnfJ5PdszzBXVEqVBAGPw",
  "key6": "2mJ9NwZu3g9W4YBXaxVwLefPy447TndWDzne2JNb345xTxCy4jKDyNr4uVdBuG75YXvwr1EHQ2uNer5PTzjMKAWF",
  "key7": "5rNwYAEgrN2JCMWKaTcXRWB9wgNY1y5qpqvUhynnX75Jn5VZTHTqTsdvomPMtgzqmXbuXMRZchTKuc8ubpXtWaWY",
  "key8": "36bpCoh34ZdQFtjJmn3Uo6mebJ38xRNZyja521dfS8L3NQ2TWkwRLTymbGUDm4F3wrynrQisMi6BgSQ1ogC6NMPT",
  "key9": "4KN1qXEttRL4R4YeopZQfECRVwrANCh42PRw77zWzbdVU2c3pMWUdaTppy3SfC8gxtDNgZCwutC2qQwtdPRPsMt7",
  "key10": "3efPXbQkDk4HJjmLqNGjXfto6t3825quA9dKKGfD1rkgSqJWJTwHmW8L4koYrRR6NH3sT3jAngwTTzp9L7e5xJ2m",
  "key11": "29hS2mAzRStSroJ9UGJLmREdgzxjNnV71BEt2BDHksQzuT1aNkn2EJeq6GHB65NqEnsYT3xJkgusdZr6YUBqKFeJ",
  "key12": "5sYec6Ezj5SNV2NXFHQdE9yFA1vZKLFbz1VNMiCryHDbNjpSypcfFPQtMtGbzVSukgtrUxi3wfUdTd6hS8SU7wgb",
  "key13": "4pXpSTheNra9UWYfCrW4cUNNnLEHZfJGy1JDPxY3wGWcn2R4KrEskY5pJedbcHYjtwcMDuJJT5WfUWnre7GWUThx",
  "key14": "2zSbieGfSZtVfCaYzrYFLkgMQS3f1jKy3jbfBqzP3s3q9g5eRAC7wPwEN2XEbjieqgZKqeXuJ9ygvzUbAuUsAYUA",
  "key15": "2vBxq1rYBGxakRwJ3F9cU8AyuYBrQWfQg1fDh7zhQjUsZ31LFBC6wrt7d9u6sk6SWRmNcji6L2TmJkhTWBnTsdj",
  "key16": "2eX3yTc2ZZyEaNP3xBwcQbK8JwwEbSuFc6t3rbh6VRe9FVDgX1Jp2fxv9yJRByB35p2SSvm9E8xpJ1aXjNHbPzkz",
  "key17": "4WSC6bRgFSqoKcqxLTkt4ZAad4qwLwa2A7FL31TUjjaB92cw9R28e7Hfh63XFtLPzf5By65nhhQ9o2VrkYiML7Mu",
  "key18": "4BnwcJ5UtDxKZqhxKcNVFubeyimkmZxVF6QeCRUAeQC9Pkkq4JUAnJGG3qkaZS88xGoshFkFin1ZSdXLtSevEg7C",
  "key19": "4JXSSwbmfUYk7fWHcKutmaA6cVqaCaeLpDAMzhVcRiZS5VxLEofjhRujShijCLx87AXSSD46VW71fx6odyXxuNvH",
  "key20": "66LCWaiSLxAPfmb5mfhgt34J5u3kAbJoXWniUuawhH3o3so6PYt9ZMDGjx2AKEFfkjjaHWvNGAw17f3PG7GcJ7ex",
  "key21": "5qCiRCcV6WWG4QXZqTxtwXoYDgd8xSAx2dQhR6dXJJrwevzNtVx4CMd9dC1RJ8ydDescZVzoLP5nXXrZEZEJRyj7",
  "key22": "35UvhWLSDDEDd8Z8FeuDKkoVRU49mQfke2bNYiQyymo71m27jDHsKGW7udpd4Y25nr3be74Npj2nJot4sPbon8A5",
  "key23": "43ntLEUs9E4YW5EE17PSjQ4Nhqyz6rRF5G4svTmQ1zaUhkDexYwNqRpjerQCUgyquMzrrsXDRih6bVceQ263hcfS",
  "key24": "53N3FJ9Ebvv6ognJVnt7yU7scyUqN9KQCRdY2Ws2xvdE8JqSKNbF6p5Zeb534antWNjRTAg75qU1L43kkKGEN4zM",
  "key25": "7YTFeaTEdZqWrzwBYeeowje1AuqdNTb5qjadwd3ogGghrLPijkgzPUHoUro7vK4bfb13yWf9zLoiAo4K7tgZrN6",
  "key26": "5E4EbBQ6mU3stBbaXt5AbgxsoVsUc7KjaHQbJdeGapgTQ818Zov5PTjSV78Be2Agv8ugwY675Ten3SdnoN9jH8rT",
  "key27": "SgWw6tpYYn1LBEMYm6KmQLsRTDK8FGohf9V2XCXgC3w76wrWFqTaTiDVYmtmAHELBffCJctBBijhDftQNw8pFZX",
  "key28": "56e7WxQqnAUaiiYSweRxs4hNxJLmoaiRdAEEvDg8sc7FH8EeACLm5cHcHQP3xjsxweZuk1deyP98i2FnLhLZE5mm",
  "key29": "hh1J7p3PQPoZ69bP6P6S1E2v5rX69pun4MHmEAFGfL8bwabycbSwhocVnrtWyKH5rTcEkcT1RVVLs9Jmgp2mv7P",
  "key30": "2H1Bcdem7BQS3KZsEt9bFzXYyfM8g8U7j3CFuAzby7PGw1Q2oKitZ4JkCAendgJA3Evxp3E4opREyJQDmyoLxCNU",
  "key31": "NbL2XKtx4ghhtsWagGWHp9LFwh8yPAxCBJ16nUoowYd3ezCfg6pPYQZ9LKMpoaD7mPj39ivYRWLn7T8LLj9gNY5",
  "key32": "52E318gwPkKdTRdbj5Bv85W1nQoCzsmgJDPjWM4CfgniHmSgyTkVnBaNphbRyrqUAjiek98zFAua6VPHAztSXhqx",
  "key33": "66b9hJUiD5Cfj8RkD6f1z8H4xLrSHexCF24SHSCwpwr2mHEK9n7rMp2ZsS6X3JYgMqb6ibYCVertJErPTs6ZZy1q",
  "key34": "5TVzAfAhiknL85iWgApHy5ytmNmuAkXQAbg4uqHP64mds8EidrSRaCjMqVv9uVuroH6UuVH3sB12FYT8KXKYKMej",
  "key35": "3ExH7jfBHJqprDjLwEhms6wHpBDVRbYc454SnkuWDnPk4DUxNth8c2mzNrNdxT4H7uSegAqoptbpMvQcTPPeER1u",
  "key36": "3jWfcqyF3F5QCivi1FhnUegvYuL8CzgQpA6ERSyM99N4342LjFr6qoASZbepw3DnALih7xw5bBkA5DAYAEbGimx9",
  "key37": "VSJLLGif3PAoLZDHC3NE6xgaWWgbHwAWHc1gUbDRrSFnrhbGcXHfwT7CLHsAJPh596gQgQ1kYQZrgj9Ywj6WoZr",
  "key38": "4DbiTsv18qK3U9VfbpqVckkiUnvJL8PxYPuauuq1qPwkDkmKYY3fsCJpEu9g95DePtcJYFAHLy1ChmaETXrPPkFP",
  "key39": "2NXsZxZEK19yT9kvhiYhedLatU47bP6U51Lvfya8z4bGe49BzTQ9aAZfuyAGWyz6LLKFs4TBU5n6VDW6xPa4EoZA",
  "key40": "XjSudbnCS5vE49Xn5hU9K2Wv86i88Nz15iRt1H1sxaidv5L92gLtxe75DJ6pSznSnxn25op8bXdGqHu4K2knUMo",
  "key41": "4bQKcKaktvyvA7Ti1tyRzBauqNwgSPZ4nE6urVzEChLfD93jNVB278k1cPPUayBMEbcPk9qFqipVF31su41fAoME",
  "key42": "4PbkEhRC6Tqk52BSRaK6nBVFoGwhJ3k4jrzLxbUEo5ciWbExVN7AarFXAEy52GfBDMXcY3UfAezm8nU9KWWhZxU6",
  "key43": "muCgUznicmTFgKveRZ4Gygi6nwSU2etqNRLYHHvhbjFf8rMpPExaED5LjX9vLeG7n138QS3VbcpqHbhBgSQ49XZ"
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
