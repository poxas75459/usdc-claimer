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
    "4wPgXi95cvmZRnKa7NEKHwYNbU7TkT7QGqMsVdjG2Bwtnr3ve9ssDTKDwRyA28wzWswJCQPMt3NmpUYjhttRS1CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFsw5GE27uPf3Vx6faKZmL7DY26XugSmzCAcpVtTLKtQPaMPJSeddv86gSjfQxBgmTFbj9HrxopxSmEQVecCDJz",
  "key1": "2hLenXVfR7DoxwyKfw9X5WoAG9LGz83zFwG8oa9K65MGWdN4qSsKvv98z7RDtU5S3eJT8tE4Fq5mhywEuZa2b6LU",
  "key2": "3aJKU77RtYVLfB5629XQ8579Woeq8AQL1RnA2pCvC1kBZq1ExgYbzTKcp4XojHgXAPUknN1GpCHhPfA4VeF4bhpQ",
  "key3": "3TJn7G3t3CZX5RZVzQTxVejgmYbzaL7oANtiGtp72Kpj8xii8pVhoEDfB3W5ej6fSHD5w4suUs4hxzWqUyFYxXxv",
  "key4": "U2TAfJJKcV3e4y7Zdk2D71qKW85e4SJSuRrAe3ss8E1kvPUejZe4EfRxrwGbZ7yz3mA3kcph9dwkyM2aDkUEc8Q",
  "key5": "3yEeiDE6qmcY5N2TzKNPeKP7KTNaDkZrNTBy3wffhg2wUUrgSaMvm7zXuQpg6tmc5deKztUh41bqSQYd3PmiaAop",
  "key6": "2riDGGCUeYBf5Ax5FY92vBw2eXA81FqxhPS14miagDLaECFsedN1E5UK1B5fhKyxrowU9yMtWUTRrSsmei2X1M5f",
  "key7": "51AkEXNUAVwSuQi1hiZTFqthVJyvNp5cwt6RoYY2mPzrWtroNjKo1dEZAsxZAwXdDqnN11MHQvcta4zo45jrmB3M",
  "key8": "5ro9Wrv9N6g9D5bba6YE7uxtvN4K3zjcQwvjH7x8H6HpjYDqmsZUrBYH2uv9Ui3Qd4r1FYNBy3ttwSesQFtuReUg",
  "key9": "JHRUfTXHWzeYLcF2WCJoACpxuEKPc9uDmUj2vWMfRGVDahNXQvZJacaFMQ2Q4bUoeQZ4vsrHFW2yyG5vC7FqGym",
  "key10": "3LcvtW7oQW1dPUL7VLwhS9KtBmMK8412gZDjhQuxwZEscd9eW7FXXwi86rQSEGAKo1KvpCDz8S2YCLgYEkQY8e6J",
  "key11": "5JU6yPQs2jd6KqNvUdALeqScjZJMvNoEwPTrgkX5K2diecPUYQuHwCi2knEXkBcHQ5W9e8dFUReBzGmWDiUseBHW",
  "key12": "269NfoTsoBbAGSSHnLiHcgoLC4ARFzZf7rBKd6GfDhsu3CzCxkBxwBoBcTQBCVu3n9LfyjXTyjLrNWchndUoUPRx",
  "key13": "5v7zsshyneSxvKoNRRHqwwjHkU4GbBf4XjuqaHHwVEQAr4pwh9UiYCL1htBqPY6uShdmJnryYAFhee1rBVuAHfok",
  "key14": "kXNo955so5eFHgVGLF1pdN9obcaisvm5vRvHG4AunkHdMPLrJT91Xro2jReoy2ZxoiwxZBrjXeY879Sxegv7uiz",
  "key15": "5M62AB4GwqPsf4dg46azg9oP3AzQpLBXhMoprv6onEDA6w4RWaGTvsNHir3m2UwzVLwNHUAUj6LPGrTw6QT5gbtB",
  "key16": "3qwtaibrJyNUnMCT5yixhCd9mccW62oNxQW6heb2uqHFetAVvrfmr2dk2WoiEJZ6nQrEpL2F5ZksMVwA6wU3teSA",
  "key17": "2S3hPaK5jRcqcStwZ9KnHj5wC6bgaWcHbx9B57yQSi2vCk4wsYtKS7w2wyXAMUdBxAyMqL7xQAmmSmjE6ppecKoN",
  "key18": "4og4Ks45VmBeqfcFW7zgoXi85HZ1J6khJSp4Fvmpqp74qh2mb4urCYZfM5osexG7DHHvLEHWWccWfpztjSQjjYwM",
  "key19": "3HYiKFFjzgFtPyNWo8AAwtFVeQUjmznoQLEKDmRzUj5EmnmJeDkjshnxXMvaDB7mntRhTnZJHyGgyY3td4ExWD3v",
  "key20": "64ogLMGsYLnj1512m7JqnguwRg9qmCsyRE6jwVfjm6je2GArrEQFzQ5RimoY6QLVFtcrWabrRaac3xtBVXwG2miS",
  "key21": "2FrpnxWKb1yrVBzdQ2SRP5TrRoSEbyJQL99mKFd8oxZM3jh39diMfTwMqJbj7uKx9EdubmyEThzZ3cBZTdKds8Az",
  "key22": "5mFm7375ciGMANhc6bw1bb7SBpPTX5G5UR2Gic458CoAkvNe5R1cfLgoe82GFEv75j16ZFv7p49ifPP4vHaVhMDp",
  "key23": "3c9yN2mC3E1AZ2y9YTgEDXBhGChN79JSkD8Jg4UXTEjeQoJxxKpWRwrjYZrd8SwB6kqNabdBk9AvKePdEf45mbwn",
  "key24": "4SCQBar6GRdanLvNyEAsderr3p3SnC9BNrPkudAHdmnRUyYMqkUeqeDxeASkiqwdNGZRgAgkJWRKUqant6dfcd8G",
  "key25": "5zvUgnY6Q8XN5JZdMr9Q7igcXrRbNiF2AWTY6zHX1tCdq944N9ZWqhMiHsJ6pYmwE3XuBdZmezj9z85gqpZrQ4Lu",
  "key26": "4ivAU6Unnq9sxTDsZbnffgQDcandqtyQCJB1SFpTCCV5yShm3vf39cEd557C6Ck1ujpvajo8wD2phQVUTP9jFLHC",
  "key27": "1S9TEqT8h1xY4yPJFSdjkateUdsc3JAxcDcZpyWT7NBHfi6XwueQ5xePZUFczBsYF5Pyu7BA1RG12iS5S7JTBhJ",
  "key28": "3rR42phgoQGnaes1wA7v4jAJJywXMraJ7dc5WWSns8eL1VzmHEDQVXsQDXBxRDGcAtdQikyV2MVG2XM9U1eoLoZz",
  "key29": "2GZzM81yEebiiiQbqJicJtqVUaYnrTgCDFpAkMVNCqpoQZxnun6nKZk3mgpcPCGSYE3gPLWEcTnGGBWZjyxg7BJb",
  "key30": "NNUWyGsBhUPyr3o9TmDearBxt8aKc4mk1gb5sHuPEcEViVkuTB5BACNqhqbEMpk6jMnWVmUQ5L2yEX2pJR3FW1E",
  "key31": "5cESwgRmHPcUwhVm4yvgZRVjFoqTzc8ZtnjQHJP7ngFoSCiASoH3vRen4Atj6v4aJnZkJNwrVe7wtnDUknTzZRTK",
  "key32": "2szx36EvQmmsqQhij7Pg9J9MdrNrX6uL3m7nrkkNg6zsUMM7zUSaC89htp5UCQ6VC7H6JQdfJsix7mfL3MQ4rFUQ",
  "key33": "2uQaiKL2UL3Pex77ZXkxXz12Xz1otpJboxXqCo8ccnbpst9aHBmGDsYL6FQ1xEDpaFKTXCEd6dRCaJh2sEjyaZzL",
  "key34": "3ruBeRwvPHVMaRQMhiwACMgkgze6HVPbDQPxDBQUZqsAH9dNYE9jHfKDiVfbBk3t4T3z98MH5Gsm2MxbvJiJj5zS",
  "key35": "JVhPh18LozsSYPZnekCpWe7WJNq88UxzsNAS8oP73wNtBxaU1wYsCzieDoUFJws173pQpmaCz54Mre5MaYyqXSf",
  "key36": "4E3iFmobvkAEbxVqbyfantvkxx9UBzwB4zLsSpByroSNTsub4ouiZv8k7bKy7epF8PevMT5Y2YcGZwSDE3bM84ta",
  "key37": "3ksMA5fYGrbbkZfJ2Q8qQrWpHw8L4iXaMVjVUoUzhDdkPkm174vax6PBqoDamYVZkvenA3oftzTfjU6xVuW5FaRL",
  "key38": "s65hAxJURpvPwFNPRCAVko1obX1y2JDuBKMZY7oBxAXz8SaDKd7vD5QWBxrMgMQNBbi4cwppzXrgtnuZAAQoGwH",
  "key39": "MWiQ8xD9bD5FqcbfffPr5hENN3u2sjyv3TJAt4pvzxd2yzq1usrBWjUxRFuM1LXeLofKU6FDFVNFAXwv8dwu4cJ",
  "key40": "4Lvrt8NcTZVujB6hojkBpCyoRdXuRD7TYGTmNvos7uAAarPW4tHgB4XEtinS21LVEqADfUr6FkdiKqovR1DQXeVJ",
  "key41": "48V3E7VR44fRTZ2Ro8kwBejZh6PSdNmUT3quHDHgC94zAxuxbhiLqJjAcCHvcurFyhhA8gbDmBymBz6FH9XStu6i",
  "key42": "2Z1gtjUhT1uQwm8CFiu3vkTekP1otTHdYWimb5oGaKCPnfhSN1271je8uxV2ttUHa8XLCN2NbYmxFyLghV9dkcZS",
  "key43": "2t5K44Rh8uynJeoMS8bXnHPJpRPp4Be9viv3Kvt8zrzaq5qc6RLtaVii3wN6DvZ1PzFRkaeunhtQmyB6cRU43j9s"
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
