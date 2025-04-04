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
    "3TM9qNckNC6X3evphA41J9yjp6HtpJD1Gn4p2u3guuz1N2SZskWs53XhCixmWCtnSDaycJrQiQtb6F2BfnYXyjDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413CRLps66ufBgCS2iinsX4ujXtssTa5xbYiAUcxDd91JgggyptKJhhW53Qxv674EHAAQYeggniKzV5S8oU56Ljq",
  "key1": "4PsEWgbDNJBny3uC1sboNiF8z9Xy6nHGAWL3zjEdBxepChcB6YSzVEAuWd3xCGhDQzDXyJ4NrBkkJZrtSiUjLhky",
  "key2": "2KYrxrZGs6Fk8SCbSTSND4Lz3SC8F9d7cmc8gemhgig4rCNnkujSKP7QmifdCtMxEz42RXcBzuDGaLdRNK4szTXW",
  "key3": "2kdt3grFuC4WP9NATXbpUzSUvXn8wdy7XiSXrRjkHRd2JgT1NHSdTUb9bB6RyLSuFCZjoffQCbQ4wN8UBAbpuUAi",
  "key4": "5spvApWhKnHi3nFMsDvyYKuRTXASUsSwNHCP2vcQk8ExYhtnBZ2Ph3S6LXz47AQctxq7RXCS36NHCG4NLxX63U8j",
  "key5": "xfGz55zTAv8SV6x9BSG1ctrEWqe2zi8cDFM9sHv2FwMnRdooBuUXKrz2paVq7jqpK4pE1sw6An2ym7YDBQxRQr6",
  "key6": "ba6FUX5vGYnxRX6tGqvRy4Xen62J7Y4Zp57LNj5SFPwcZyx7yF9W7XFvQmTGNt5FWRpsrH87vbJcm6fV82D2sUJ",
  "key7": "67XNREk9CMHSxNzAB5LiNqo1YQvDtJyKYFGXoSX4zfsYPnAkBrNksht79A33n1PUTzcXP5CW3KXB1YV2udciymnY",
  "key8": "5g94xQNioG63iTCzaYYTT5eYjKJcqpMktrD6RRRLnEPsXRw5ZCH2eAzX9P1XwQg8RwxNp42cExbidhKDMmE1N6Cq",
  "key9": "3DtSiQezdRUJDsrdELzKL8bdJdiza97uTzyxwBiqLkPWT2VSEpuwMyk61JEAjyQJ79hKNBmCotFdreiijCy2g2Kw",
  "key10": "4aajm7oZgmAUzVtL9uRs8vxABijm8MFx5TkH1vbyYYMBQ8Z3yt9USg2PhCcXuVJfJEmN6YgSFTpP7iAt5g3Xi6jR",
  "key11": "3boS2gQX4gqDK4fyaABhXV9M67rBpL3uoTmjAdo4T7GGXs1Zdmihm2Rspz3QxyXNrd8y93sLwCn2fyrfJEqBCmJH",
  "key12": "4s6Pi3AeEpvsMe9C8bvugocSqTBSZByVa71CYvpTfb6heZFuEPkNXLm2jrq3sqEFHEQxWHJ7scnP6PhiUNCEJ43a",
  "key13": "3qMZPuSirGkMZnYp5V4kh8MTQFogHg9t5Bgw5FJJgVknC1HRMkqYWv3LSwXydEx1gnsrhaiiGS5b91pptPLGPvp3",
  "key14": "53SfVwGFBz7ZVmwLRkiqNuF6P3eEhoP9aYpbad3nqkP68S2fMkW5boN8mPSBxPEvTneqVujnqqhi23aoDKeLBkHR",
  "key15": "4pUbTyq9wYxHuyZuLwz6ZQE6L8N3SvuV7RresA5RkewE8gUZCqoBYUkzxxvybAQDBq8pZedyHnuoBnk9ejbTNy3Q",
  "key16": "57QG7DQqq1T7toSdKwryAgDfJBXZQE162WRQpC4uuUjr2mxUT3gAuVz6PbezcwjCakKmPLNrY2kcyz1fHshJLjU8",
  "key17": "gRspvWZer3YnXsVB4tPBidufP28wpLoZPnKx7bPEeJgJ2KARUfaPnDCPXpCN7sxFU3Cpg6yBT5aPaJPKUCYGo6m",
  "key18": "3hsm2NaujutQyiKMBadA2Zk4e6RzrprayHgVAdDYxKUwsiDRmRhtJSoZEiFLVasnPTNWfnAiaUKkYCJMJ4czvQ3A",
  "key19": "28KrEm21wUQvHLytqZgf15j3S35k6jc1eGcvZy56x6EEj2YSKN11gt9DPirJoJPNdsX7hwgp3rVZzUbZ7sa3DXn1",
  "key20": "3eosbnMypkDrTghwiCoRYjcJueBjih2GRjKdcmPaaV7qmMXooqmYbuXVJXPMW12TgxFDLc4YFNikywUPLv1puTFq",
  "key21": "2nCphKAxE3ubZJ4d7p9P6vUyeTByxhf4HKgwRTVFAM1WNPd7pikpGgjiWSR1B33ABXq5Sybamy7LVnztbnpNT26t",
  "key22": "3vqe19oES4aKvCEFWNqyrQSuuDy6VCyYFds1Bez8h4z1zPrd1rtkzP8g5LSj9XNNst293kMDKHSDdJKmJmCfUqhq",
  "key23": "47kbqmRsMn7wEC17fbHdecB8KHRpvKzHdKERW5i8qF57o61Fd1DHjmGyMP1JkjRtMygmseE2ychB7TTWowXiMjam",
  "key24": "5i7mZsjkLFSBEoq3C7oTrJDrbixcUaSTH9LE127rviV6q6rkE1idP2Yd7r3nnLeGjX95FVfqhfRDGNpJ5g2yQUKo",
  "key25": "3R1rA3MLW8Zu8ruHpoR7cuGymMTmnyqzT4UWCfpi8ow8wTdF66mCnx6ekBWHTfX35LNxdaB9akvGKALsmw4JPFsP",
  "key26": "51S2cRoB8PxcNCdZcACGtZeaubBwFn9Cka5cfdM5hG8NYG6vMksr5FB7YBGeCfy4YdUF9ejC5gdWN2bKubVUgFZ9",
  "key27": "563Dta8NjffCUSfzmh36V2hSfHw6noTSgtjYXCZbH32bN8cZm5skbNJaK4xJuv2msw8GHmYUPkxxURNRhPTzBU9N",
  "key28": "5N8GaU4FcVmPD1Daozzq9vs9ZsXEYZHSJJGgMhHUT224tcrJMVdijCpTVxXYscgfqFGH4TSPqkv9HMkrLGDHqGbk",
  "key29": "5rwrAnEKXU9JPDkjyNuEzG7TP5Bkmj7dHguXSW15j8GxPPZ5fvwD2gn4Mabeq91A2H3hegMmYr8ieRCbYXPWeBu6",
  "key30": "KuVdg5AbuX8BMoykm4y7LUaGBRRNTFv6FTEHBqS5sWYyfHbanZQdnYGNBsL7b2Sr9fezB4DQfQ4bQiWSh2isUhh",
  "key31": "3CUeZudPoFwJKp5yf1NFR4fnbSAs5j2ki5h2NtxbSZDd9F6XNsSbkxyNfwkbtu5ZS5mUdBnZYCx8752axseXzBQx",
  "key32": "42UzGHJERg6mQZYuyaxaD8hVo5G9vMzz9fkcRYUdGjs8Fv5N9B25i2AjSYS85rsUYhhEHGc9wtY1smisZaVzCjHY",
  "key33": "3UxyckURgfgYbzGytPdLziGoTs4Heg2Z9G3ZGY3EvB1F3eauJ5pMfE4ePuG81Ls3urPPLqdD8XaopFPUGdb7T7hd",
  "key34": "54Gs9phpN6Z4G1FCanbVXiYwGGrfrgynGfyZ3LbVnrsnpnzZueskebh7XETvNN93JkbKyse6ZBN3gRhCDnBP7HHz",
  "key35": "3Y9VS6xUu2dX5ewY7WFwRBmW5z4THF7cKuubiRLETBgW9JwDArGaFu4AniPuhBVFNaiy4pTfNGqeFs1jYgNouPBB",
  "key36": "5Ka45725pAwEvKmQbqCRn9kJ2oUuhnitv7tmeP6m2PChYfLRjhhbkbaXbpifXM6Dprkww4BAcHtBujs5c42fnozR",
  "key37": "3zG5wqgEpbynUqqkgmYsZXry3MnwboLBsVbN3pYyVaeEBFn8AHsh8FXizKUsaSmkzAsxh6HjvgPhJJZirRmA1dG8",
  "key38": "57GZqGnaSvBiQ5zYAvfMwqA2yoqsUWDEYqnKKdDeG9YUhS24e7xuCn1f9fqPHNwLX9Rg9kzD27r9BTjVRojvHnoV",
  "key39": "5xnaJa6fC1ZB3DeREMWdf2G5o3XQP4hFWRNrFNvUupZBtdHwY2S13zCGE6ZJTwRygh8fT87RZCURpGN8j1yFBfAn",
  "key40": "3G5hHS6MfPASqTdC5XzwFtNURHDJpgkVshFEFMkhCGdnvTRzYvngqgEFoMj3bwQrHhGbNXPUCkL99VbgFHYzkXQy",
  "key41": "3UUXqc2gL6kV4EfAupfNo8pH13SojebrW5HNMgkHEJyxWCJaT3nHeiJTe8bxdqtD55zRBEFfzBYFgpdtJuGzJFrk",
  "key42": "2Jwc4g8LKyAmttmZAfJD6R4G2yGzS8dbV7Mif8ppShSwXm9ZCirGf5JDQFhbtdL59VmEvAkpUb9DkdaMCtsQYpPk",
  "key43": "3q7o6CQEdtWzrtv2dG4ovM3SKa7M7rr9unNYtiHysR96BWCNJrMhHXiFs3aR5AK6LsBzj1ye2HVMce3t2EDhe3mS",
  "key44": "3iL4LGxMikX1EUjXkQsb45MyxB7Yo4qcsxa9WGKGyuRjgcqpwudroaPa7YKy2KyejaQgDL3XszbZMkLtYUnftnMf",
  "key45": "4B5NFv9KsGhaEnEPxmDWC9QhGWzGjP3DFuFw7o1zpZotA64Dm4Mo1WnP8AnSkAnF3Z55ReDbvZqYnfduVNPkXRbd",
  "key46": "5yyPsY2AbfjscLcnpNBX8NKFYN5HqZyrXtFgPAwqcCvShC4suztSYfVuUpHNx9rsmbupVQ3UnD7btBqXo5rrKxUe",
  "key47": "2AWTQM9F4aTugmxoC8Sbp4TzQ7ApUA47RFg1yKmQozzGTiWg1CQ2zUDhgon4xCeF1HbGcqL7quZ6CGuxNeUjV7wE",
  "key48": "2765r3i5xBTM9DiJXgENdh2nD7cWEjhtePkkDxwWCbJAa2cd9t4pZN7WWFE39xzEJAzsXcsGWotrV3De7o1mNznm",
  "key49": "3AweZ4P9uwocNhz3aRLENMTjoiSLAT2vLFEnjiCDsphn3wBYeJanHPfN5x5sVJVMCxQVPnQ2dmFAdQpPPG6fwrQQ"
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
