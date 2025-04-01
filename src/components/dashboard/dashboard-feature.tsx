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
    "67S6BZydsWQ2dUcXCgAKDM1D3fVqgncjKovXe3qn9pV8Q2DCrwiMh88Ck594UdbxH7ye3ZcFwBxF63kMJTahjbMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzSkMBeeJCq1BjTXCZBw9qBMxXuiBXAkeiywVsbxhuovMTM1wHAFsH8YZEUUwd4gExTPxzbtTaj3AwidZETXdc3",
  "key1": "UCChwLtLJbLsHMBTwew24mBqD1CPqtfMakRiF1fSPqC4bZkKb4B5eZiKviJfmmid2GDYfjRG4qDn6zV87syQNKk",
  "key2": "3gK2Bxpm7JtXjhZ8bH8RFvJRxByf4tDtfBDp4t3gYHqwUjyYnq79w9WesNhXxeEw2WuGvqXJAoudP7wX3JtuqMeU",
  "key3": "a5njfrMhkTVU6f4GD4vHckJXrYAxGn6496AJsNizcxGLZRa5dBxFcSLQnEe5pXVYUeR5MysAwWJMkVKYfWYH8rk",
  "key4": "qg5MYdRArq7u5KTDQiprjj7no4a29xFGHeKLadgDewDCrtB2hcEVqwkotJXfiRHCbT5LaveC6HX6J1BoQAAPzWZ",
  "key5": "2ATk7siEUbWiYmVZoZAhwYsTRZtbK21Vd72ZMu2nSr3rML8wfexj2bL6xTUtVNVRo6MESUa56cUPWfwt5W2kZFck",
  "key6": "5TfVtCXLbgCRJi4bHrgDkkfi6HEzbNQKArNW3RtYTiD6XG8QetJX3QNhP8i6m84ggo5BUgn4qHdaXyeTiweunLKU",
  "key7": "36js4F41WnPWGfZZbEHgC3ZXvwDPaL2MFXRLcZRiRukicJGMq6SGo9XgaRAU7NoWUX95pecdxsheneLaiWegkDhs",
  "key8": "QGfQhWqTBK9J8sUUzGC5Ttzqoyr4TxhQMQ2J2VgGxz3jqd9DkoDyBCgXuQ2kUHSy7S5rco5HEghirKspcTvigva",
  "key9": "5gx9TURKNpnVgqwE8jwZLXfg6V8oNDVpELdMr8WSs6FoRzWXshrjqv69UMnvvHrfF1bLp73uGSNhLywo7xEHmjPw",
  "key10": "21NJNU23oBxsSAseYc2wZMfDrF8mwfGRXRh4bj7nTU6LVo5nasXLkzDjqvRBJenaiXWKuH6wa55CXN24xDdFxqxr",
  "key11": "5nxm1inoeH5iKV9nCWFZrNHdjkbEk299sujDZXTGXJQH6ErNSEMq1RmRnMf8wck1ysic1x2j9fKd4wSui3xsTNPm",
  "key12": "2511K3Uo4uqxFVMVQ1rx3QPv3ZWfTfRuuN8n5A85S5trPbZWNZ2dCbds9FVeL3ne1p4AXbCr7ocpjANCCykZ6FZG",
  "key13": "3yNbYfeTVNuEFw9cvuFmn8s5WQak9wdx2JfeTtgjEYG9XryWSmqtQYiRgtinuJMNqCHSdB2vTyUxGG971BQ85ryB",
  "key14": "3sjBF9AcC1uVwRXeF5x1TnfzfZmGtQu7SRwyadS36Lx5PirQkQqHoY7GLLyin4NUrLLjZPbLai31DEEHCua4agds",
  "key15": "4aXEzmgTEXJ3r5TtUgxoAshQPBnjRw8YRaq7seHHgMx4pgYeMzYoJX1tDGEDRaQzUJsB5Ep2RFMohLzLXGWFsnyd",
  "key16": "63TK28bse8oCqfh3fWwY3zgQ3LRpyqv24N9VAST5tuKm7eSEuw1DhYQFtEWCuNt6Apqm83GKbA5katxAQimyX6Lc",
  "key17": "559ekdfU2UHdUPYmdSuZawemNnjE48CSzf7Z1HZKbmAFGSxbKRt9T8YjS3uqogDuLSUADxZ9aspQfGivLE9J4vAE",
  "key18": "3AQRtg4DzjzAZgcciqa5iTbcEV53EwT2iXybUJmb6dzq3MgeQhAZXioDv1gqNxWf3WdDcJdjeWGRdJgmLW1fWdS6",
  "key19": "1rn6nHougG2KTXSLUpG7AagCdDwaDbgn5mKm6yT9Ahg2BYLQ5j7WZnzgZAunsxFwGbxxEFPrqCMSG95G5H8Pap7",
  "key20": "2pP7kdguVRp7xKFW82JmvB6uR6ihXwVy98evLGv9fg7mytviNxdDWHV6hqY3RSbHvWdFyM56q92oZbCMKyfuNQ7s",
  "key21": "41m4omwx35hxAxaX4MKp3q3R5XtRztxNcEAqwmKi8xvsqR1nnvBZnH6PXCRUnn5F2KS7GmdkYBbCHLrna6o2VPqC",
  "key22": "jdGvdM1a8uvJBLSE8PvQTfr8AuuYhonjRC4xGmdAdsRrvg3kh68XdQE7kKjFXMoPkJZrY3o6AABjaqZZ1JshYuw",
  "key23": "vNa6JP9iPMSvxBy7oGmHBPFpUe4oDM7ynC97i5s6ZiuVUyZdGR81ywe7h5BSPSqRht5WNECtyGKi9M3ojtWM62i",
  "key24": "2HbiDR77PA9rrBnyshSkaGT4rwwd4NGSEKMUrxVAo9HedryPadt9qMud8iQRmXRQwwQFsifxy2rVwTFj51w37x5a",
  "key25": "4JFVGD2jiz8z15eMaPKdPfc4hPMxb12JK2Ukk6btA3aCxBDgNkcEgitVxnoJ2Q7GaGVWXu99xbg5TQWHhKSUzVpn",
  "key26": "5BChM4HZ6TnJqDJrZvyGiNQ3bv33MuZtRkSGfQz5Eed4vcdWPevcA7kkNfShSavZFTH5yx6YBRWdTqNsUfP3AxWS",
  "key27": "67FELDdbH4qLYdXbjH9nyJwK9ZmXxxVoTm5DYLZuQv8Viz7RnWT68iv84K1TE48WwtVrYvUQgJPCRdac5ndVuqg2",
  "key28": "3nLHBaqRZSSnUoXTCRzU7PTEYW6YTjU4LJHqnuxRGUpX4x3jGyY6KRhe9bE7tfuB35Q4ntsM3PWZXniMyrVX6n2f",
  "key29": "4ngcWg83tgdE9Xdewq2onxk22z7DAqnmp4PFh9QT96jgTdkNhTGdWVYiErqsho29qWyjfKrS6wWsyu7hybthZCpq",
  "key30": "4knHXZR5GqMbEZzuzcdD9NzUFcrXzrH8WjwyMbLZ8Mm79CA5FxQUMM4DiAHzTPbTYNWL9TioLZodcR5AyRCQzQuB",
  "key31": "5fE5mPvEuNsGLX4UbiigwPiKg27qxY4oFJNRKHKSYAMjK9E88yKnN8v4k3azJdXwWDQyFCjh8fMMsFFxtj78ijhu",
  "key32": "hfCDyi9HJ3h3ZZ7io6gMmyK73ud9dY3q8vRVQhXnXsWT6HvdL4MMeCy3Exj5jNQBKj9ZPiLHm3zxHGqbLjZK1Qs",
  "key33": "3mWQ9ApLJpM7jbiYLHzcqsuAuVxsaFpYiHqZXikiZuFyDVU9NhUPnV8Cp1BX77UFXadZeNpxmPdQ1QmqiqbssXFy",
  "key34": "3VnH5zdCrJWQUFqFZEykssAa9packBzVt56PYD6RRAxN8bKX3VJTJCDF5t8vtYRgwx1i7i9wVTgAVy7pd2RipiCx",
  "key35": "5evMzhPVSR3srfb5JaaF8qopZLkrXHYKft667UVkmRfs2hmacNKaZD8y8aauCTeBbwa2CZfYeVrccz6kcs5U8b47",
  "key36": "2beSkDEoBbJQJEedzUBEwoHd4qVKjXqwJBP4yDzBQShmoj9vgcLbRJerfuRZpCuDc88yTj5fzYVYbeVGrCznpS2V",
  "key37": "5REo4e1ciqxZRkwDsuTcesf1NVYhMQ7b8mSSBA18EqKxFTimC5NLCZVGEGRbE7pszoMwptGJWPpAtou3xJF9H9xb",
  "key38": "4o8gXRP445DQmLgBXxmx4xSywf8EoCLj52aCmRnjmdCheEZpQRvx5Lq6yTQefS1X2KHs6BzX2TdqjFiuK7zGZpsy",
  "key39": "5uJWqWacdDjFhtvQEES9tAgBDxpaobcHWvtqaP79tnuYzkn9Bpc2LtWHc89rNqkpUutnmgUMMBFgQaB2iRdG7aBV",
  "key40": "5SqbepmnGVCfAztTv7TxmPzAgcTB8iBXT9BCrzjeqv11Z8qE2DDUKmzFGYp9oNhxjZuZsd2Z8AyRwSCQ3eYhAtcv",
  "key41": "2S12HETYShEndm1S16xQbWZosb921kvDbHeaGeYwmmBxZvA6TEdJfH3CiT42pVTz9T1EcsjSAax8543ty7CpDrhj",
  "key42": "4pLMga4fviJcKcEF6E3oB8LRUjWVSaKPhK69uEyAcxRGmVrLWfUPrCUH5C34S2ugg88SEG9Zxj96QsB3UX8SAjN9",
  "key43": "46MMCQGPvmynuTtB1qcEhzQ31a47U7KiNFhSCs2Ct8uCfzsYx81gEJrmjuiFwNJsfaNLH7gcuhU1DCkF4dk4quFP",
  "key44": "4mMajHwfsC4ZQXaMSkdtAKS6qPGX3u2wwYJ1bgRGk52Kuv9PNWMRasUveGZ6Pai2gkn8hLrGou2BVoQc1rxdK38t",
  "key45": "4MR4b7254JyTjg5qyRqUwQR26dEaBRNqSMmCsb3tMwp1kD4xGVzcUMG8xFRc22WwTpUp39TnGNGW3HM4zeCAPyW1",
  "key46": "35nRJw1DHkDPNMxDEPuBeSLwE1ZUXEBB5Nu3UYdpFUBEKVi4ALRZJeNHF8Uo8iioSwGNWtHSnAqAS6S6eQQrZdFZ",
  "key47": "vcgH9gsrkGd841hSEMKtHvtNF35K6TtYwdUksNemqMRKd7kUpLwNuSaKKPvvwo3SZJisYm6Ge8ic8zfwMgT2HLf",
  "key48": "RTCM9bXR4mLwS1Qn9rkLcKD8MXww13Jjv3AKynmrb7FgrCpThGArmePuWDp6vpcVNSko89YDuWM2ZdDGjjXFt7H"
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
