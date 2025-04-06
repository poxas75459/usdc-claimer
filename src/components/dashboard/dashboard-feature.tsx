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
    "t2UasPFh1BUZWi7rj594pDo9ZTXiss5CXqfdvptB5Wmxikpuvw9bPgQXnzBungtUTqLsugavbG4ysRng13FqFup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eWcPmLm739JWdHffxingRjRhUb2d93Rd817tJozPLcUZa9HTb4Vvcy9ZA6ziThHAxhiEkQ8foPPrT3QcXkmHhm",
  "key1": "4NirarirfGKPgfE5YMT9k2oRZG4CJd3t818JP5kHrFZGbd2MxHRBXJKhCUHXswTsvHz9in5x4GSdh6NSTgaJ8EEc",
  "key2": "3UNVaTbZt8uhmsWVQpwGCKq6YyiLDq5JG1LaUPWNUoS5knVtUvbpJzic4o65aW3xarduqq22VDZ7x84iR9Nssq8",
  "key3": "36PtbiAUzFfMDmZfK2Esdykqz7Yk1J9zYdBRuJZ7Sqnk77uTEgVamqUZKVywWbjSQQi8QhGxajFa4zeFsRjbt7zj",
  "key4": "5UJ8xjAg78r1jAuagL1GCTQ3c5DYmcC3ERsQc1bqqu8UZDnBBde7wHzNGNdLS8Lb1mEhPMzb9Xj6fri8rK9DDtWw",
  "key5": "2S79btsRd2wcG2NojqYg2LRcb3y128XSygWP5uSntsfLpc2HCVGCUJ5broR2P9TmZKepvDZquutMxwTUKZqPcUk5",
  "key6": "3F8fE6tT75ggkSSWCRTu1MA7teJorJq4AsUo1nZhhdsShmvN1N6S1ydGghP2jKKATVb4Aaoz9m1ZYVzwcdasCDV5",
  "key7": "5Ahza5RieK3bAvZEB3vVJUE5uwRBApMcwKHv5zp1AefPcFvryVGgkcHBuLpeycGMMRTwXamCcEmNhXu96UqAk7XS",
  "key8": "2R7K6bEsjxFe42gUPhTgXEUEnJ3H17NvtPBZgiehRq45CcGJd7tvi248AoKGMNiKy7KW5MxwMs7KAD8LP27PbsDE",
  "key9": "4m35UN9STbp3o8E2ptQmk19KQzNnFCcvASJkPVJeQZZaMtKMYkLLuWyqZensRnW5hZBvYnY7i7Wkyf8XRWQB2tz3",
  "key10": "5PJHqjeTxDqMzbxpUo5E3RHrtC3E6jEDvDmjQjPp9ctKpttWwFacVi1FmFoNLkn4R1UqPz5JYKq3Fog6td8VtKVQ",
  "key11": "64z6j1WiFHobnv88oTkcV78M6W3W2fjHyWA9dwxxptEMQJtNhusWxLgZR8MaWxy7Psm7uaik8Q6npAEH7HejmjRf",
  "key12": "5mitrTkU1ymiHQmfzHL7qbsCACfQeZHyJoQFXZuJGMrPwmPryVbGV5qhymK4UVAuFXFNZtgTb1djJ15TYmqj9fR9",
  "key13": "4aCbdNHuxPWcsmaAXZMTXekXrb61Y4Sn84TQeYCGERgTMQEaTx4qRkevwrZrxwuy4JHunh8UJeshqTyrL9SMG94Y",
  "key14": "hLiTB4Z8RUpFicTQq5B94LbrhWhELo5t9ghm4YHbJoAVAzUSMGn6BwkYKsrpdSiQJzPa7QYTGHMbQkQD5GFrzxx",
  "key15": "3GC3HSxjw65JoqMpgXXsL9onKPik6arxWFJATgHNiNviP9VGZbpcZQVN5HnjfqQQGzFTizhiQpWCZSz3UDimPkRV",
  "key16": "4t4L2nKJX1tH99oTtFb8HaeY5sU9MXWg3bjC71mvo7FyhA8koBRhHBPKGgjMx3xJ32JyGAyLtpNvep2qKHSogwa8",
  "key17": "4mAAd1vddyjmD7CBKcQyvRGcNJTUgiVnNdeHYvSo7PX3m5H4np4qxkJ8SWFw7cVA7JV8tKuLiigjGBFoPzGBDffL",
  "key18": "5cF4ZZ9Vqi22RuKqGx4WAeJeqpY2wm8fuN3ME5tWg4VMJphTYMdatemJbdXAiQcqYyi3TPeqt2cAQPXyeF9C2HjF",
  "key19": "54GE18uXxnWzSBZVHL9y9ePJXeCsV1Si5HLcd1XyNzFs1gfdKjTmTCiw8JwGDvaNjZdc1E5vWb7HYDrZEDkRJ4TA",
  "key20": "5XKouUj1aEbEvLFq2XPG6uooLHasSXZFTRSHgyCD86gDRzzNrSfExCmDUNR53xzRztU4xZXFqf5N3BnCB1hn9eej",
  "key21": "4SN8cSdhLJ1Yqf24o7LGoR96Wmmsbjg8zA6hpoNim7anwLWJV7NfBEBsMZ3mCfPdxS4sQpnNz8SCViaSEwrUTUW6",
  "key22": "2w76a25W82BPQbLc123igtJqPMWXtyynbPSBHHFxCcUruLhbiTtEYDd6kws4LSUYnqsYkXReLn7zuTATFY4d5gkN",
  "key23": "4NNjXSHov6xHSvxEDqYHxDaBWcJFd7baaLQviN1p2vq6pBAYbbLi3WgjmWQXqnk3frMdxBLtoeDEnGrMqmvMF5bs",
  "key24": "2ZqYZpEThqBk5yji1GeC5sowBkq81pkSxU1khocrRNm9pn2ANYWfUUFCUpmSJqwfqxLMHkUE7j4WCvAuAgF4ZRyF",
  "key25": "4dctfPmbSfpMgyeNLMQyXk4rzbm4wwDA4koNomJs5ZiEFqCERk2kpZbQuhxoXH1jkCZqbqyNC7kshiF5Rj8Cmebe",
  "key26": "22jsFgPJUD1t66kKaXzXYQK5yptFURwp5PDzv3vN5yi9AZ5Qd85XVsjxre41mWvcBw5kU6sNoPpXqJyi51AAtDme",
  "key27": "22PxiXujFYbTJsnwZj7Xjz35qLR22gsLowmTM1xmQAJpydmRTxeqicDFXPvbSETG9DhZW1UVxKnHkvVWwfD1t7Vm",
  "key28": "5gb8Mv992hCMueeC2NZTtywmDcBSqHrSfZq6Q1SVxYsAaKFuvzw9QPbhmrsrUwnfv68P1AzHn44yB4xbLFWGQD9Z",
  "key29": "X9k7PCyyULUvyf2ZUoEFZvutH9L283Wz3GrJXGSYr6qUvdtgpe3KoPoQyUr9tccC1mKFsXA31fMmBQgKkF2qR5G",
  "key30": "5Cnuf1Nah79JQsy5VY4x5yLRbKZMRHqU2LoVncAsDHo9WNfV7Mo2MWfCdt9Ux31es3qCdqGqAVYUeWP3Pm54rvBm",
  "key31": "PMARXGv4rbxNVkTrfeoXz3CF8pr6xzbi6QigjesVvuQzEcFZM6uE9oJY76rV3ske8bMzr93uyE7vtNHLHvxASiu",
  "key32": "4VYUzGFqBF4J18xA1aLgZPage4Ee6BcR8HYcZVq3SyKEPhNAyoytbJGHnfR5NRt1QKk55BvYV2cfusEVTvZGmHPD",
  "key33": "2Vj73tJ38kUGfbbTZ6BBRbypxwWQ7jDbdkQr8fMv2X82B7SNMxa5Ft1YFjyo35VvL4ixEcgT83QWN7wCqpqERhX4",
  "key34": "2wFHXFfiYeDQdrLMP2jqskCr21PL724eQwhEJd8adBRJgKVnzCTmrWt2iGjcqE28BW4BSz5Zr2grSjGknDxqHE18",
  "key35": "5B97ULHrwp1LyfjrRPEKxr7FUxAZkmcixoeQk1ja8CvLC6pLLdtj2nvvRFDFds3oTy6NKXGxeuZN1F8vpKTrmUvH",
  "key36": "2uif5Z2y1gPhBGRzWr6beJJEQCw9ySWNAmVsaHbxbXtofBfA3JW5twJgCkcqtJZfoAugFGRca8RqZCTKYJrDk8S1",
  "key37": "63XWUb8GdsSX3SJxRXGuy3mg2ssLyFBgUtMJUneppEtfQct8KEAWRJyEXKL7GsFrzvGH71gt4BvUjSdk5JQNkqZj",
  "key38": "5CrD6jrZPMzcijrfjj1YKdDwLGShhcCCnPz6Hnpcziw6N86UGvFPt7AwnStyK1BLMwrhfNjPvjwpY42KHgqKPPPZ",
  "key39": "2wfPDBZQhhEgJzXjbB6mtNnxuRuQhFHMefUu7KtzPA377dLRsFpmMMtTbHTRfcSok7sDqe91KdTxEcVhCXPJECzr",
  "key40": "3oye1HgVPYUBvuVe1rdLxoUUJvzTwYBJtVBM9AFXRCYzrxkNx69sTZUmxkox4aE4BFjc4TenB8xfGdzSyPWToUAb",
  "key41": "3JawJxTg9nF7JrF4HQC8dzDRkmy4gB1dqVErGAikVa3nTo778DW8omMr6wef2DttspcHuxiPpWVCbLnDDVLCixuy",
  "key42": "o73fJcWVHASbW1apQWeXYJe7XoUXQioHJy8NQr6zsDemghUc5JeGwfWwg3eHaFEwuBpwW1jKtD3E6GNh4jktAHC",
  "key43": "zhEfgNvURwaD2wwF76BDigCQnNJtjy65FkNs8SXWbtaTXCfjqwLho8eqE1mzfTvQrfxN6Mcgs4ZH1b9BmjdNbEt",
  "key44": "5kSDe92YYNsALLfB44hEGBi2PnE6nMC2NibsyodCMF3FkerRJnaRpwyLjfcxRCFTf8MyeGNyjoBwzwUK1q6pob3",
  "key45": "2uWVxwFPvzW2FRLdzD9otXgh5UYZuu8LPfHthGy4urGMcLjpQnii2aHf59T9E1kxcqY7QuYJuwBAiiidhSxpjD1j"
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
