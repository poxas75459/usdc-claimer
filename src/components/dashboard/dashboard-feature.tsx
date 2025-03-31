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
    "5D6YqNm3uqmNa6BT1H6nz85zmKSaajg3dc7ZoVh6wt4ZwAW9JMX1Gie9DjsJmpoC2gEYTDhtsJ3x1BERfWxSmB4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qB4eHzhpV7ucYJexZBCjhC63Rpk8ft1pqZVS8Uvh8c63eJY4nGfzhFGnZEun9icroZhFJiPKJGVd2UUUXEVKKb9",
  "key1": "65eQ4Cbrq6aunaSqMZjppgBmXKxCHYvDHnrRjvx85eCksSwBq8aeta3fzWfiiNPf7u6aubT92RtJk4HSH8qVe2G3",
  "key2": "587ghAKWRMcM9wBJBzNUZnX6RjwKpJLyUXojh3XJq4vaJ5mS84GUefb7PNgdfu1XLwLmirY3o8dEufB9EDeGQmHG",
  "key3": "639Z4S2hJi9MLK3oGK895tHC5qpWnoQds5diDDRSTZBgj1m4Wyzo9uW5TUEutnJD4C48R8gAt8tFRZKpCLgJgSNd",
  "key4": "3zptFM7yrg6Q45CfRWsXVJuNYXNuBgJdtphq1bED6UhJEnJVf81rXQRd4aWbaCjz5S9Y728DGmZQT2oLDErBGRVn",
  "key5": "21bGQjWsQP8G4b3VGLujjKPm6CUn5vQ8P6s66mfD75SmvRRgZvj4FkfMh4nZCiyJqQZBRqwEKzwGHUg71SQQyNNT",
  "key6": "2JjgPELLs2pi4U4YVPRug2JU7zbs1nXitgRQwCQLV6ekdhBKcSfArEKshJQNf8V2bRhMkPqhWoYNXGKU8rq8f8at",
  "key7": "4byVPoXbtKxd1PJtukpVJLo2eiGxsxhMevnjiXrQTbPyP9kDC6NuznDPuzFbGMNt3GRSUWTYjLrWCxyDoJviKXnj",
  "key8": "UNCdUgmMS463BsKQ4Su8FQPkYdrCRdf3HxjibogqGHNka9D9i9g5kPsZNn5ShHYGWWWJSitYaja4bi6cvwziUNM",
  "key9": "27F9WN4XVaK3mgiQMYtEFiHfxQaoVpaH4NgXhXJFWE9WteCQSjsMZhjGwBbERkgbAMkkzHUDgCEdm13Pxpd5g78f",
  "key10": "19g1Ve1fr3x5LpUYUmMBTwqbmUsybS5tP7ZPKHBFprqrViXAvv5izd6FXeuvZvgfdsTXJERu51bqQud7YBuV7yg",
  "key11": "66KtbmUW2UX1jq2xTJTTApLhg5oixLr3sWRZtDKz7m1XmtoX9sVYn8jwZ6yW2HVQnJghSEnbf1PTAbgoYa9rwrmP",
  "key12": "2epNr5ojbsyKCdNSKjnkcGM4ir7eLpi7Y2bARqyMf3Vdm3cBWZPycntjSPJSB6yqDPbd5z8Q53rxjr1r41PcDT4B",
  "key13": "3Qrk9xYriARRGTrKJXUBJc3R1VAWHPZGrZZVgfLUH6mdmf1VByLioqua9f1G9SC4gC8shCxifaQQxo69TTPnJjDQ",
  "key14": "2RaB2P4pLdNt5xkknCjKMAdB7FpZMJGHzniKDwK2Ln1wVeEFNYQtQVCR69h3tvf22ykcz5wktVf3DnFq13onuhxM",
  "key15": "4BuKCGpCNapazaT92yoxprf941URZ6TqbsRp1iA2VtAjaPprweFnVYcVUCdbDB6HUd9HTndRu3UcgtbMwFFL8VWS",
  "key16": "5jf91wzUpaeq6mP8zyZ556EUxTM5gektsdPhhLaxT95MnWcAEPESBrqyMLpSQBWkVCL4VWDmm2aQVfAqV1hwPm4p",
  "key17": "23f418GmDfX4SRL2ohgFe58SR5GY5d6RSNECZy4vkKbDCKmnKLERp43fWgQ9mZVPWv7uK56yyyv63RZQeVozpQVk",
  "key18": "5MZypzjNaXSkKC6P6isuy6empQwn8U7dqNwS6kATo9TWJPv7WeJa8bQphYX2mqBVLRSeyz1G5Fryv3BvtpgAkq2Z",
  "key19": "26XrccXYZTFSRU6yfYxoLz262xP29DEkq24DzMcCaBysZNmP2CfsarKSBybEMCdTvi79KFguEm3g4cbF4LBnRiYk",
  "key20": "5CLKTvSuiHPgBuKwD2mNHsgneaWYWucCfjcKaUjS7pE8M6VAALhU8xT8kjYGHGNYKNSpeEc7giHwykTCDXXSgwHm",
  "key21": "22NDctk7b1kjGbDBWtNkEVR1Y8RD7Dy8HWaY4NhqsMgRZvyXx791ZZuxP27m9FGTpNRcZy6KFRTutPnPLAi8Ni8P",
  "key22": "1sHb47qFYGWwU3qAhxgL9SotVw1GEtCpW59pyjLKwg5RoAGVsiri9WT8VfLJMNWqhRHfz98CpF2CsNu3MqpcKWo",
  "key23": "589kRnsrgWdGtBqMEJEQdD7nujg7jmGZ3AkfFLE1xytv6Q4miFyjpmDf1nfBcfEgSnZSP3cTxCV9VXM3Tey8eNaG",
  "key24": "4Pqv1HomQ7vCiwEGtDVpcsYxwoqVPrFidUzhmHRwRVkWbiEwQDD2kS59RNSc7tsaYS25kdH9d3oHusnKLYFTeNXY",
  "key25": "2DeiPeToBgUdpwrSHxtkYJVHbyjkD1uVfB4GM9DCPXGuHmt4JmECksosu7ooBrWZ6UAUNacDAP2xqpotpiwMZpan",
  "key26": "28n1343S9sSy8Vs78Uv5b46k7sV6wUqYaXG53YWjGgimKPCvD337Azx112ojGrqxCSB7sRJyhwLVehzCkiV82x8Q",
  "key27": "2WVmimuUwMDQiatwUmjQbwVC7DqNAkXst5X3RREpnKN2S6jjQwoY7h4YkJkwhpdX1hBco2RNCnVdok7pKJUNa6JU",
  "key28": "2MSuhnvUreUkVYXhLZqqQF5wXgjvPiR4vDzEmDfzyxyrEdVAN9xmuirf6zw74QjzJ1pTnbGGSFhWWEwT3aBp6rYr",
  "key29": "5EDVeWKYMumLrVrKYrKiCTo1crxgy6zkK4cReiz38qiT1GEoPFr3sZvLfqyBhhyJquyzrLXNH8rDuRkBQ1qcnkr4",
  "key30": "YnRGbKXTo33dGa34ASdqVQaThPWB1WFDEiVT6sRAqveLLb2v5eJm56GidF9STnmNLZvphLRRYEKHp7MfcF5VMiK",
  "key31": "5sbUjsYp6Hr6nj49KKaGAczAkgkgLFHesdLPeWyhxXtrP9GRa23HYknoaCmXV6XaLPiBRXUbpgx3vnH5B9iSKqf9",
  "key32": "3NapxyPnKHkajgbow5FpqqNefJmut2bktD8ddAbSVUJ1otHei8uMyPqtJsP6PAR6ypbxEfXL34VZkiKyEijXmdL",
  "key33": "5ZeiCqxz7LBaQ8ksBZE1UkCkoPpYCwBcMJec3wZC7Q4DuRVcHEmkQ6pGAwtHhmnSin1kxZL6vh96QmmKpizQNWpq",
  "key34": "8iNH37eEen9Bb1WJ6CQhs7Bopko3GPiWMnWWVCWJy2MxxbM3jg6YTfQ4Y3BmmpgxtpZ5AKeZbD6JEtfPiUY5KqP",
  "key35": "5ZTtsCVK3T244ZJ23bUMQSa2PBwC28R7aXRdVumwb3CkCpuQPqZoUm17K65fPwV8Z3N6ivhSpEPqJ6J7cTWCRTMa",
  "key36": "WegoYoouaGv6CMyki9Vq6auqdnG8EVhiAT3yWATs61Qxq3NvCngthd6xFfMLg1F3d22B9W2zDgHFzBjtzV1N19Z",
  "key37": "3DLgpgBX3TULsS9RbM67wQzgU4a3E3jwMNjbbGRM76rJYrKxwx3JCafzAqaP1xUcx87G85B7YnoPM13FuD3BqvF1",
  "key38": "3HaX61xiSSUBzaYPqPMx8EzcA2bUXnJTbPSd6U7jd3vMRZhik7HqcoUysqHFLrnXKRDD3q8bYsdGyvoVj4KZxFBU",
  "key39": "6K7NEoovB5mPuqh86ZfYK9D7WVawVPXiVx8PNj76wbifgMRxno94MvebFLoaAoWY8TcDvkUd33e5EA9BE4i3biN",
  "key40": "3T5GJjQSP4T4G2a8NbXQ2JzUtkzA1CSpJSBXRzV9aCggR5X2uWgQ4JpdW7WRndC2pBnfTskx2kfdZeViXmAmHuHe",
  "key41": "2nbRoY5LTHghddKTZWUAK6xHRTCukgpo2MahVKJGzwCUJKGr8f1YVecAUJw3WJTyuaawCtZ5ta4KrbNEx7DQ23b1",
  "key42": "48e646Cyfwj6W7VsQ5dm3bv3c1yTFntPhcLumzuMz4kWQ36u3GA9ZEVAcboe3UDfTuNxkodF68o2Mjfyt4bsWik7",
  "key43": "3asLnx27n3i9LpquHiK3NB96GbAy63JYpP2d2KtKnrGoDB4xA6VwFABYarndoWibWStan8uQ9qDd19gigrMmdD1c",
  "key44": "3F33Tj55H5gFjGRic1krdLDWemyLcxosY1Zs141kf4j6exwepcbbWJbmU15Mm2TG1cSmqfbvGnY48tdKKuapSPov",
  "key45": "5NhQFyDhtqtyoJdEC4GGxxgnBrddUk4K8jmEAqaVrhT4Q8QphG8g7iAiNHWC9RigFhPoYiqt5EadCuYnGreGJ2q3",
  "key46": "659GdtkVTpnUDQk9Wg7zKbdxazimUjG5oQp6aVhVbDD8d7voXn7tSpUZ5EezczptLsrHiDB1bAy4YRGYBGTAAg6D",
  "key47": "5BR7rSyHuQb4EsUShzE77EamPvNVnukDccBg7xCQ9eN1XAYHiqQueJUMi9NevS6672Lqz46DwjK1nV9hdEJ1EUK3",
  "key48": "4oAViobF79rSoBkY3wEHr4FkR5yRVzQbdQt2M4r6SEfBnL3aiMGtWszNi8ZAoVUpvpbLzW89r2PQJmFDSgwPwcFV",
  "key49": "4jAGRMVBtp6EGeS5d7AZDE4j5LciinVbx9hXLyDxM9e7U57F3sXM2PqEa3xEnqgasHsVXe2uv7f9s2zXmRCNesoh"
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
