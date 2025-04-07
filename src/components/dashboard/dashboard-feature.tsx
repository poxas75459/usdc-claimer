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
    "4uA1WpxAJNomt4AxzmfQGjxyBHaHdEY8uGnHKSkY4KkjWf3MsJs7DxfhHFGkkpCZKFgPU6RhsHo8iZNsunWZxHo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZGC6t63cNuVD3D5krXznExbC4uqSECJ4n8gjJ9qnrGTbcmxwPdkHZ31cbfJsY7jZdS8kTWcfnqxmge82D9ZRTJ",
  "key1": "4bgavW8gBCYRcmUGhR8UqXruxk6ZBXssXVdEEiaJyaJJgwTsMEMxVBpcKdfRjGraS9gfenUwTVdd1ofPTQw8T8P",
  "key2": "b4LLqduzM8j84ZkS8pymtbnaTXvPHFdbHnNz4fjRLa8uRRwFFeXcErf2pgNC2b5MDuco2wajgVGinb3NZse54NE",
  "key3": "4gQPuKu9c9teYBKpqf8Tz4VXYLcQ2nakujSW75VKnsNjFJyyD3vmCLe9pRsDGpQk7Bt1z1zbR8SPejT4Npcrzsaa",
  "key4": "CgnD6UaYdEZ4vqofCYzhoX7bPsnVeLQa5bBAW93DtnkoKb88B9AMwHzw1BkhPcUYQoZfLtMWVPHMuzAS72Zx2ZW",
  "key5": "3T1C2S6zLnTZMf1bSesNmXHw2WdDu2VjfsGEHUrDR1dyhURLqjZCj841mcbG4A3rzNuxcRdk4HD6Ztk2p36LhXsF",
  "key6": "3wuBQDjjAAoPC8GsQnp6VMHfK1kj7UBEcXz5Tp58EX4w5saWJarzpq6mw729gSxgiJDsD2rdB3prXWgyTsedLGnx",
  "key7": "FWo8q7CSfFkpdcKbXAB42KmRF9bjHuUPPPvVPToTM1UihF2mMSrWcCvS84xorpf1KALGJynSevghcfdx7awt9jj",
  "key8": "24gAvGWZP9wzDDzYfSDPHvJ9iBQB96aT85Y7dbdroRjrwsBQnQgrw6GG9sqnRnrLN3kVcsjiyAASUAe37k5fgRqX",
  "key9": "3mDYxTeTpygCzNu6KJfJUTwb1puYRbzYsTdwL8fn9cG3uvzzd4c5uRRbzSLgzVGXa7PTiam8Y9yVQ3LfojFPUc3T",
  "key10": "4HjQ61huAxbZcSQk26QeJ4HeVECjf7i9yUCAtgBgmGjevrZbiw9MSPA8Y32ekZhZNJTx8DDksT1qy5jHfkk2FZxE",
  "key11": "5Wpdo96ttpBYY7SsffVA1iYRdqNKYbjcVPXk2BrQYLzsmXgRh1dXzeTKrskxS7SbYfdh74gMG6S1Qm3nBM1vwfJE",
  "key12": "5ZkrTUFwXsCk7ap66fgVqf7vZfr5bPtTbC27cqBA7Zif9XRXwTfzjDMktfSDyNDwrxuPqxnYKauWyNPFUJFKoqgn",
  "key13": "64oCbbPAF8k4xBgATf3k6KVsSm7k9PrZUXptgshZZg6Hfgv1agCZ3BJXR9Tk6mKwpTAX6KEt6Bbw4uCcLgCSCM5z",
  "key14": "4ZnpCTShY3EcWPDDC5G8VYi6rQey46nFdakKQkMQH3KnZ9dFzdTSjyNzsAPg9csYTin1XCxyVhpubhhJeYyJ3HGf",
  "key15": "5iLAis6RP868QJxAM5RQ4i14JdMKHBx8akUbi7drvVDSL5VgJD7As8VYDDGA1QpqYwHLmek6pzXXgHxqvoEHg9Di",
  "key16": "66rbGi3TnS5z5BYRXXT4FxR1qcRSDBiWpoyhPRYUgxhpsamPswF9As7dtdN8fXSqaGQHk5ZBAfkiM6be6cWR5vFH",
  "key17": "3FbMCEttDq12NoEocSb7CnEfqkRtZaRegsmekCb3FtB96J2gDTFwj1v5nm3JU9dSFdZsKHwrDL3neCqPdBxDZySK",
  "key18": "4qttoijG5mMfdhiSjFntJ6oFu21q6TkayxUdXUsUwzhLUYyv4QcGfz26LaGRKRqidmhzt4W1Ph6cuUbV6VcMQmN6",
  "key19": "4jVJhThQCAPAsRNwUoMS7EzHaeWLmcBew9dbjXTsWLNFp6uuQXZGKYUktZsEHmHD8uZc3HhkHrCbc2TKCatX2GUF",
  "key20": "4rJqvCu5RshwTSwBDLdX97dUJj8EMzhpHEJuTTLFgraeAug8NZGyLG4NDEksRuRysNkRPDu9dkULX3mn8oafZJVm",
  "key21": "3AA9XE7xvhNxMYaqiCVC4U9ksiuccH5LQLBivmW2p1z91pLN91AWHiggZHvF2XRTTX88GBEkxXbf6ar2vJu2C7kw",
  "key22": "5JbTo4QXjTHB3yr8kjhgaEyTmExhbUYrAxhPA4A6pSq3fLZLJkzsVTuXCioNpRLAuJnQYFWGqPBhbWSTSE7kTaFW",
  "key23": "3qXV8NdaRGTHi9Btpc7UPbjH1x7sMGrVYfdHi651Si8rVTh9x3cNVtjdnsQHjDcVofsgct4gmXs1TkGn9esUcHgv",
  "key24": "51yoeMP1eNPfpZ4vwbgzmbvsmxigWQxuHhDZAbzhwjqKp46pYWH19zr26aJVorXf7pFtzvooSNjaKA8YrNJUdaaU",
  "key25": "5PVG3iJDt6rE988BHZXrpoMu63WZH1ZpD2Y5pXkAbXF6yHf2ZP3cmBaFQfhxKH3U2DPX5oSg6EgXrDwxUmcdztrx",
  "key26": "6KoV175rQUqTKfd9RNqt1FsaRp72qVYSNfsPmkhvHQW3G3nw83CryvefsBCD55zj579ie1P2qrN4C5HMVQMEUf9",
  "key27": "5AfcquhMn8nQ8Rf9mWiKvk2MUBra5rWPxiHssYxRxfHsRGJv2dhabzhwnkjgtbLUHL2vGYeU9Rx7wSRzC6ddtHJC",
  "key28": "3MTtgV8W9QfiEkcgSH5cXwocRCntBagFTcSEKmxZN3BNYTzSVdqsjBF7WWXDLmSC3f6guip6tFgFxCUgf1DM5Pkj",
  "key29": "2CyTi3UetuftPLuXV9woG7rbDYGP2wZ6Zkhq48zJ2oRQf9ciTpmf5EdRCvZAYszFbhDzyN8hfvgDJcUQTosAPdu9",
  "key30": "PDiNdTkZWRs2kM2Q8mWGzg5mD2uk6RZZd38fWC2XRhMoJtysiFHfBKTkukgjC3v8dLk3jhkw7Km59aEnE9UtAqD",
  "key31": "1HPS6yBkTPyZr12Gddso5o8UsohYESRGygPCRqePPGVfvm215N21BhmY41x7epkJgbUUdYaBABE4o4kniLsHZKt",
  "key32": "4JVW3LDY8djivjTgkQNmXjyETk4zmTPq9sHh9iisGNPaEdz1bVE8YUEy2b4GZvP38mM7C3qQkGRZmqewh22LFoz2",
  "key33": "4ipaXxbbZRePcX6XAn3fJJyP2xRKXrSRjTvtRAzMLEpJxkWgasvYbZxmL29UPwdUr1Jwq9ksQYHQDjVJiA578frG",
  "key34": "DR5sC4a4pCqXtsWJaxq33tgF2SCxaDfsBnQgkAgj6WDURwU2Wq6AFL2LecdecUv5PcSpbQ5bpSJy3oxERnd1JzH",
  "key35": "3UwRXxrZ1F9rcGuPNznK8TfqHNnKxxWxKSquZSvSnrMjhxNyWbjcTG3xv2oZc8LsQXVfMKGgnFotpYyorhchUYNL",
  "key36": "2zH8LBsev8QmMr3PGpiuCbNm6hZRAdKQtwxPLqLWMtST8KTbzkPGWMWQcX22KmXT15oWPeV9STVnsewbtdnRBMnc",
  "key37": "2dqSJvCQAFTE4AfoPdsEW7MAwD3H3edpFHEQC3TT5zoq9RYSQ9peAxg6RRyn92dD9zi2xxqdCZhVrmFBXfEi2J9F",
  "key38": "4w2KEy8TnyoavA4rLkDz2C22gsRGmuSVjJVoVvgAYECv6hQ9LQpNqdkBcSmPBXXBWJAHkXHzqFzd6gWaTjqHEFb3",
  "key39": "5Hew1fjWUTd5PG38EwzXJh2yDAqHf87y46BtXHXnUKgPZTpQrH7qXpcLv6V6yQwXjS8Z2TDJzXEyjKcMSEJUKjhQ",
  "key40": "4FAt9xvieKhmUiSMtWT9kZTHpERQeEkEo7Xw4WagEigvKFUD8vw5Cr7bpmMmRNE2jGae7etse9RP5hjb8f1heLJk",
  "key41": "Hp6WV9EBHoGY6U83PukgyAAxT2gDdUdDLFPudpj9nHxUeLEE5kVkTKPWoQgP1Lknz5sFkMt5hPnfKDJdBSvAzdN",
  "key42": "4HxyKLgDmkPYWDVgQN6K86R8WgabEBxijHPwFh4zcARJWCHLsT9fdhu4WT3SuwgU96CwyN1jSk95RDbPwKzPLDWA",
  "key43": "4p4XL4qXAbLBx68RVqnZusvJEjDyZBsTxpctBDhPL1Aex6TPrBA64y4GvzZW5PUnB3hvhUeQuRmT5pWcL81WZCRo",
  "key44": "4vgU1pH4xERojcqnoj9XhpE23ShkE89h3M9K8YdE6qtPspJ51Ha8cacrxkjryzWusdx9AJbu5KZfeBcbmjJfPeww"
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
